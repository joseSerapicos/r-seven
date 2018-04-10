<?php

namespace CommonBundle\Controller;

use AppBundle\Controller\BaseEntityController;
use AppBundle\Service\HelperService;
use Sensio\Bundle\FrameworkExtraBundle\Configuration\Route;
use Symfony\Component\HttpFoundation\Request;

class EmailController extends BaseEntityController
{
    /**
     * Initialization. Set all basic configuration
     * @param Request $request
     * @return $this
     * @throws \Exception
     */
    protected function init(Request $request)
    {
        // Set configuration only once
        if($this->isInitialized) { return $this; }

        // Route
        $this->templateConf['route'] = array(
            'new' => array(
                'name' => '_common__email__new'
            ),
            'edit' => array(
                'name' => '_common__email__edit'
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
     * @Route("/common/email/new/{context}/{contextId}",
     *     name="_common__email__new",
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

        if ($context) {
            // Get template info
            $emailTemplateDefaultObj = $this->getRepositoryService('EmailTemplateDefault', 'SettingsBundle')
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

                switch ($context) {
                    case 'NEW_BOOKING':
                        break;
                    case 'BOOKING':
                        break;
                    case 'DOCUMENTS':
                        $contextObj = $this->getRepositoryService('ClientDocument', 'AccountingBundle')
                            ->execute(
                                'findOneById',
                                array($contextId)
                            );
                        if ($contextObj) {
                            $clientObj = $contextObj->getClientObj();
                        }
                        break;
                }

                // Set client info and replace "keys" in "text"
                if ($clientObj) {
                    $entityObj = $clientObj->getEntityObj();

                    // Replace keys
                    foreach (array('Subject', 'Text') as $fieldToReplace) {
                        $setMethod = 'set'.$fieldToReplace;
                        $getMethod = 'get'.$fieldToReplace;

                        $fieldToReplaceContent = $obj->$getMethod();

                        $entityName = $entityObj->getName();
                        $entitySurname = $entityObj->getSurname();
                        $entityFullName = ($entityName . (empty($entitySurname) ? '' : (' ' . $entitySurname)));

                        $fieldToReplaceContent = str_replace('%name%', $entityName, $fieldToReplaceContent);
                        $fieldToReplaceContent = str_replace('%name%', $entitySurname, $fieldToReplaceContent);
                        $fieldToReplaceContent = str_replace('%full_name%', $entityFullName, $fieldToReplaceContent);

                        $obj->$setMethod($fieldToReplaceContent);
                    }

                    $entityEmail = $this->getRepositoryService('EntityEmail', 'EntitiesBundle')
                        ->execute(
                            'getDefaultEmail',
                            array($entityObj)
                        );
                    $obj->setTo($entityEmail);
                }
            }
        }

        // Set user email ("from" and "bcc" to receipt a copy of email once we do not save sent emails for now)
        $userEmail = $this->get('session')->get('_app.user')['email'];
        $obj->setFrom($userEmail);
        $obj->setCc($userEmail);
        //$obj->setBcc($userEmail); // Does not work for now

        $this->saveObjectToSS($obj, true);

        return $this->getResponse(true);
    }

    /**
     * @Route("/common/email/edit/{id}",
     *     name="_common__email__edit",
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
        $this->localConf['templates']['edit'] = 'CommonBundle:Email:edit.html.twig';

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
            $attachment = null;

            if (!empty($contextId)) {
                switch ($obj->getContext()) {
                    case 'NEW_BOOKING':
                        break;
                    case 'BOOKING':
                        break;
                    case 'DOCUMENTS':
                        $contextEntity = 'ClientDocument';
                        $contextBundle = 'Accounting';
                        $contextObj = $this->getRepositoryService($contextEntity, $contextBundle.'Bundle')
                            ->execute(
                                'findOneById',
                                array($contextId)
                            );

                        if ($contextObj) {
                            $file = $this->forward('AccountingBundle:ClientDocument:pdf',
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
                        }
                        break;
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
                return $this->getResponse(true);
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

            $message->setSubject($subject);
            $message->setBody('<html><body>'.$text.'</html></body>', 'text/html');

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
                return $this->getResponse(true);
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
                $this->flags['storage'] = 'db'; // To save and normalize targetObj

                $contextObj->setIsSent(true);
                parent::saveObject_static($this, $contextObj);

                $this->templateConf['localData']['data']['targetObj'] = $this->normalizeForeignObject(
                    $contextObj, $contextEntity, $contextBundle
                );

                $this->flags['storage'] = 'session'; // To response as session storage object
            }

            return $this->getResponse(true);
        }

        // Render form
        return $this->render($this->localConf['templates']['edit'], array(
            '_conf' => $this->templateConf,
            '_form' => $form->createView()
        ));
    }

    /**
     * @Route("/common/email/conf",
     *     name="_common__email__conf"
     * )
     *
     * Action to get configuration
     * @param Request $request
     * @return mixed
     */
    public function confAction(Request $request)
    {
        return parent::confAction($request);
    }
}