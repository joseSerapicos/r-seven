<?php

namespace Bck\CommonBundle\Controller;

use AppBundle\Controller\BaseEntityController;
use AppBundle\Service\HelperService;
use Frt\CommonBundle\Entity\FrtHashResource;
use Sensio\Bundle\FrameworkExtraBundle\Configuration\Route;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\Routing\Generator\UrlGeneratorInterface;

class EmailController extends BaseEntityController
{
    /**
     * Initialization. Set all basic configuration
     * @param Request $request
     * @return $this
     * @throws \Exception
     */
    public function init(Request $request)
    {
        // Set configuration only once
        if($this->isInitialized) { return $this; }

        // Route
        $this->templateConf['route'] = array(
            'new' => array(
                'name' => '_bck__common__email__new'
            ),
            'edit' => array(
                'name' => '_bck__common__email__edit'
            )
        );

        parent::init($request);

        // Empty criteria to be able to see all registers because "search" action is disabled.
        $this->templateConf['search']['criteria'] = array();

        // Actions for template/view
        $this->templateConf['actions'] = array();

        return $this;
    }

    /**
     * @Route("/bck/common/email/new/{context}/{contextId}",
     *     name="_bck__common__email__new",
     *     defaults={"context" = null, "contextId" = null}
     * )
     *
     * Overrides parent method
     * @param Request $request
     * @param $context (to get template info)
     * @param $contextId (to get client info and update the target object as "sent")
     * @return mixed
     */
    public function newAction(Request $request, $context = null, $contextId = null)
    {
        // Set configuration
        $this->flags['storage'] = 'session'; // Use session storage, object is not persisted by user yet
        $this->init($request);

        $obj = $this->newObject();
        $obj->setContext($context);
        $obj->setContextId($contextId);
        $dependencyObjArr = array(); // Object dependencies to be save at end

        if ($context) {
            // Get template info
            $emailTemplateDefaultObj = $this->getRepositoryService('EmailTemplateDefault', 'SettingsBundle', 'Bck')
                ->execute(
                    'findOneByContext',
                    array($context)
                );
            if ($emailTemplateDefaultObj) {
                $emailTemplateObj = $emailTemplateDefaultObj->getEmailTemplateObj();
                $obj->setSubject($emailTemplateObj->getSubject());
                $obj->setText($emailTemplateObj->getText());
            }

            if ($contextId) {
                $clientObj = null;
                $entityObj = null;
                $contextEntity = null;
                $contextBundle = null;
                $contextBundlePrefix = '';

                switch ($context) {
                    case 'BOOKING_CREATION':
                    case 'BOOKING_SUMMARY':
                        $contextEntity = 'Booking';
                        $contextBundle = 'BookingBundle';
                        $contextBundlePrefix = 'Bck';
                        break;
                    case 'PAYMENT_REQUEST':
                        $contextEntity = 'ClientPaymentRequest';
                        $contextBundle = 'AccountingBundle';
                        $contextBundlePrefix = 'Bck';
                        break;
                    case 'DOCUMENT':
                        $contextEntity = 'ClientDocument';
                        $contextBundle = 'AccountingBundle';
                        $contextBundlePrefix = 'Bck';
                        break;
                    case 'PASSWORD':
                        $contextEntity = 'User';
                        $contextBundle = 'LoginBundle';
                        break;
                }

                // Set context objects
                if ($contextEntity && $contextBundle) {
                    $contextObj = $this->getRepositoryService($contextEntity, $contextBundle, $contextBundlePrefix)
                        ->execute(
                            'findOneById',
                            array($contextId)
                        );

                    if ($contextObj) {
                        // Get entityObj
                        switch ($context) {
                            case 'BOOKING_CREATION':
                            case 'BOOKING_SUMMARY':
                            case 'PAYMENT_REQUEST':
                            case 'DOCUMENT':
                                $clientObj = $contextObj->getClientObj();
                                if ($clientObj) {
                                    $entityObj = $clientObj->getEntityObj();
                                }
                                break;
                            case 'PASSWORD':
                                $entityObj = $contextObj->getEntityObj();
                                break;
                        }

                    }

                    // Set entity info and replace "keys" in "text"
                    if ($entityObj) {
                        $entityName = $entityObj->getName();
                        $entitySurname = $entityObj->getSurname();
                        $entityFullName = ($entityName . (empty($entitySurname) ? '' : (' ' . $entitySurname)));
                        $paymentLink = '';
                        $bookingCode = '';
                        $documentCode = '';
                        $password = '';
                        $username = '';

                        // Set specific info of context
                        switch ($context) {
                            case 'BOOKING_CREATION':
                            case 'BOOKING_SUMMARY':
                                $bookingCode = $contextObj->getCode();
                                break;
                            case 'PAYMENT_REQUEST':
                                $session = $this->get('session');
                                $system = $session->get('_app.system')['id'];
                                $store = $session->get('_app.store');

                                $actionId = 'FrtAccountingBundle:ClientPaymentRequest:process';
                                $actionParam = array('id' => $contextObj->getId());
                                $route = $this->generateUrl(
                                    '_accounting__client_payment_request__process',
                                    $actionParam
                                );

                                $hash = hash('md5', $route); // Unique hash based on route
                                $paymentLink = $this->generateUrl(
                                    '_common__frt_hash_resource__process',
                                    array('system' => $system, 'store' => $store, 'hash' => $hash),
                                    UrlGeneratorInterface::ABSOLUTE_URL
                                );
                                // If base url is defined, so the payment link is sent as parameter
                                // to be handled by the "main" front-office website
                                $baseUrl = $this->getRepositoryService('EmbedFrtSetting', 'AdminBundle', 'Bck')
                                    ->execute('getByStore', array($store, 'baseUrl'));
                                if (!empty($baseUrl)) {
                                    // Use urldecode() to revert the process
                                    $paymentLink = ($baseUrl . urlencode($paymentLink));
                                }

                                // Set html link
                                $paymentLink = ('<a href="' . $paymentLink . '">'
                                    . $contextObj->getDescription() . '</a>'
                                );

                                // Create/Edit FrtHashResource object and save them in database
                                // Check first if  this resource already exists
                                $frtHashResourceObj = $this->getRepositoryService('FrtHashResource', 'CommonBundle', 'Frt')
                                    ->execute('findOneByHash', array($hash));
                                if (!$frtHashResourceObj) {
                                    // Create a new request object
                                    $frtHashResourceObj = new FrtHashResource();
                                    parent::setObjectDefaultValues_static($this, $frtHashResourceObj);
                                }

                                $frtHashResourceObj->setClientObj($clientObj);
                                $frtHashResourceObj->setActionId($actionId);
                                $frtHashResourceObj->setActionParam($actionParam);
                                $frtHashResourceObj->setHash($hash);
                                // Mark object to be saved in session storage associated to email object
                                $dependencyObjArr[] = $frtHashResourceObj;
                                break;
                            case 'DOCUMENT':
                                $documentCode = $contextObj->getCode();
                                break;
                            case 'PASSWORD':
                                $username = $contextObj->getUsername();

                                $session = $this->get('session');
                                if ($session->has('_tmp.password') && isset($session->get('_tmp.password')[$username])) {
                                    $password = $session->get('_tmp.password')[$username];
                                    $session->remove('_tmp.password')[$username];
                                }
                                break;
                        }

                        // Replace keys
                        foreach (array('Subject', 'Text') as $fieldToReplace) {
                            $setMethod = 'set' . $fieldToReplace;
                            $getMethod = 'get' . $fieldToReplace;

                            $fieldToReplaceContent = $obj->$getMethod();

                            $fieldToReplaceContent = str_replace('%name%', $entityName, $fieldToReplaceContent);
                            $fieldToReplaceContent = str_replace('%name%', $entitySurname, $fieldToReplaceContent);
                            $fieldToReplaceContent = str_replace('%full_name%', $entityFullName, $fieldToReplaceContent);
                            $fieldToReplaceContent = str_replace('%payment_link%', $paymentLink, $fieldToReplaceContent);
                            $fieldToReplaceContent = str_replace('%booking_code%', $bookingCode, $fieldToReplaceContent);
                            $fieldToReplaceContent = str_replace('%document_code%', $documentCode, $fieldToReplaceContent);
                            $fieldToReplaceContent = str_replace('%username%', $username, $fieldToReplaceContent);
                            $fieldToReplaceContent = str_replace('%password%', $password, $fieldToReplaceContent);

                            $obj->$setMethod($fieldToReplaceContent);
                        }

                        $entityEmail = $this->getRepositoryService('EntityEmail', 'EntitiesBundle', 'Bck')
                            ->execute(
                                'getDefaultEmailByEntity',
                                array($entityObj->getId(), true)
                            );
                        $obj->setTo($entityEmail);
                    }
                }
            }
        }

        // Set user email ("from" and "bcc" to receipt a copy of email once we do not save sent emails for now)
        $userEmail = $this->get('session')->get('_app.user')['email'];
        $obj->setFrom($userEmail);
        $obj->setCc($userEmail);
        //$obj->setBcc($userEmail); // Does not work for now

        $this->saveObjectToSS($obj, true);

        if (count($dependencyObjArr) > 0) {
            foreach ($dependencyObjArr as $dependencyObj) {
                $this->saveObjectToSSToParent($dependencyObj, $obj->getId());
            }
        }

        return $this->getResponse();
    }

    /**
     * @Route("/bck/common/email/edit/{id}",
     *     name="_bck__common__email__edit",
     *     defaults={"id" = null},
     * )
     *
     * Action to edit/add objects using the form
     * @param Request $request
     * @param $id
     * @return mixed
     */
    public function editAction(Request $request, $id)
    {
        // Set configuration
        $this->flags['hasForm'] = true;
        $this->init($request);
        $this->localConf['templates']['edit'] = 'BckCommonBundle:Email:edit.html.twig';

        // Get object
        $obj = $this->getObject($id);

        // Build form
        $form = $this->createForm($this->localConf['formTypeClass'], $obj);

        // Handle request
        $form->handleRequest($request);

        // Check if is submitted
        if($form->isSubmitted()) {
            // Get object context and set attachments
            $contextId = $obj->getContextId();
            $contextObj = null;
            $contextEntity = null;
            $contextBundle = null;
            $contextBundlePrefix = '';
            $attachment = null;

            if (!empty($contextId)) {
                switch ($obj->getContext()) {
                    case 'BOOKING_CREATION':
                    case 'BOOKING_SUMMARY':
                        $contextEntity = 'Booking';
                        $contextBundle = 'BookingBundle';
                        $contextBundlePrefix = 'Bck';
                        break;
                    case 'PAYMENT_REQUEST':
                        $contextEntity = 'ClientPaymentRequest';
                        $contextBundle = 'AccountingBundle';
                        $contextBundlePrefix = 'Bck';
                        break;
                    case 'DOCUMENT':
                        $contextEntity = 'ClientDocument';
                        $contextBundle = 'AccountingBundle';
                        $contextBundlePrefix = 'Bck';
                        break;
                    case 'PASSWORD':
                        $contextEntity = 'User';
                        $contextBundle = 'LoginBundle';
                        break;
                }

                // Get context object
                $contextObj = $this->getRepositoryService($contextEntity, $contextBundle, $contextBundlePrefix)
                    ->execute(
                        'findOneById',
                        array($contextId)
                    );

                // Set specific info of context
                if ($contextObj) {
                    switch ($obj->getContext()) {
                        case 'BOOKING_CREATION':
                        case 'BOOKING_SUMMARY':
                            break;
                        case 'PAYMENT_REQUEST':
                            break;
                        case 'DOCUMENT':
                            $file = $this->forward('BckAccountingBundle:ClientDocument:pdf',
                                array(
                                    'request' => $request,
                                    'id' => $contextId
                                )
                            );
                            $file = $file->getContent();
                            $fileName = (HelperService::normalizeName(
                                    $contextObj->getClientDocumentTypeObj()->getName())
                                . '_' . $contextObj->getCode() . '.pdf'
                            );

                            $attachment = new \Swift_Attachment($file, $fileName, 'application/pdf');
                            break;
                        case 'PASSWORD':
                            break;
                    }
                }
            }

            $from = $obj->getFrom();
            $to = $obj->getTo();
            $cc = $obj->getCc();
            $bcc = $obj->getBcc();
            $subject = $obj->getSubject();
            $text = $obj->getText();

            // Validate data
            if (empty($from) || empty($to) || empty($subject) || empty($text)) {
                $this->responseConf['status'] = 0;
                $this->addFlashMessage(
                    "Please fill all required fields</br>('from', 'to', 'subject' and 'text').",
                    'Email not sent',
                    'error'
                );
                return $this->getResponse();
            }

            //////////////////////////////////////////////////////////
            // Send email
            //////////////////////////////////////////////////////////////////

            // Create the Transport
            $transport = (new \Swift_SmtpTransport('whs.dev', 25))
                ->setUsername('sysadmin')
                ->setPassword('sysadmin');

            // Create the Mailer using your created Transport
            $mailer = new \Swift_Mailer($transport);

            // Create message
            $message = (new \Swift_Message());

            $fromArr = explode(',', $from);
            foreach ($fromArr as $from) {
                $message->setFrom($from);
            }

            $toArr = explode(',', $to);
            foreach ($toArr as $to) {
                if (!empty($to)) {
                    $message->setTo($to);
                }
            }

            if (empty($ccArr)) {
                $ccArr = explode(',', $cc);
                foreach ($ccArr as $cc) {
                    if (!empty($cc)) {
                        $message->setCc($cc);
                    }
                }
            }

            if (!empty($bccArr)) {
                $bccArr = explode(',', $bcc);
                foreach ($bccArr as $bcc) {
                    if (!empty($bcc)) {
                        $message->setBcc($bcc);
                    }
                }
            }

            // "nl2br" it's used to convert \n to <br/>
            $message->setSubject($subject);
            $message->setBody('<html><body>'.nl2br($text).'</html></body>', 'text/html');

            if ($attachment) {
                $message->attach($attachment);
            }

            try {
                $status = $mailer->send($message);
            } catch (\Swift_TransportException $e) {
                $this->responseConf['status'] = 0;
                $this->addFlashMessage( // Flash messages to display to user
                    $e->getMessage(),
                    'Email not sent',
                    'error'
                );
                return $this->getResponse();
            }

            ////////////////////////////////////////////////////////////////////////////////////////////////////

            // The sent emails are not saved in database for now, we sent instead a copy of email for user in "bcc",
            // so we do not change the "storage" to "db", and we do not call the "saveForm" method
            $this->addFlashMessage( // Flash messages to display to user
                'The email has been sent ('.$status.').',
                'Success',
                'success'
            );
            $this->responseConf['object'] = $this->normalizeObject($obj); // Object updated

            // Update and set context/target object to response
            $this->templateConf['localData']['data']['targetObj'] = null;

            if ($contextObj) {
                // To save and normalize targetObj and dependency objects (like FrtHashResource)
                $this->flags['storage'] = 'db';

                $dependencyObjArr = $this->getChildObjectsFromSS($obj->getId());
                if (is_array($dependencyObjArr) && (count($dependencyObjArr) > 0)) {
                    foreach ($dependencyObjArr as $dependencyObj) {
                        $dependencyObj =
                            $this->container->get('app.service.session_storage')->get($dependencyObj->getId());
                        // Check if is a session storage object, or a database object
                        if ($this->container->get('app.service.session_storage')->isSsObj($dependencyObj->getId())) {
                            $dependencyObj = clone $dependencyObj;
                        }
                        parent::saveObject_static($this, $dependencyObj);

                        // Check if there are any errors on save
                        if ($this->responseConf['status'] == 0) {
                            return $this->getResponse();
                        }
                    }
                }

                $contextObj->setIsSent(true);
                parent::saveObject_static($this, $contextObj);

                $this->templateConf['localData']['data']['targetObj'] = $this->normalizeForeignObject($contextObj);

                $this->flags['storage'] = 'session'; // To response as session storage object
            }

            if ($this->responseConf['status'] == 1) {
                // Remove objects from session
                $this->deleteObjectFromSS($obj->getId());
            }

            return $this->getResponse();
        }

        // Render form
        return $this->render($this->localConf['templates']['edit'], array(
            '_conf' => $this->templateConf,
            '_form' => $form->createView()
        ));
    }

    /**
     * @Route("/bck/common/email/conf/{id}",
     *     name="_bck__common__email__conf",
     *     defaults={"id" = null}
     * )
     *
     * Action to get configuration
     * @param Request $request
     * @param $id (return the target id object with the conf, it's used to avoid to make another server request
     *     to get the object when we need the object with the conf, like in flat forms, entity detail, etc.)
     * @return mixed
     */
    public function confAction(Request $request, $id = null)
    {
        return parent::confAction($request, $id);
    }
}