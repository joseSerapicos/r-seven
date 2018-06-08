<?php

namespace Bck\AccountingBundle\Controller;

use AppBundle\Controller\BaseEntityController;
use Bck\EntitiesBundle\Controller\BaseEntityTypeController;
use Sensio\Bundle\FrameworkExtraBundle\Configuration\Route;
use Symfony\Component\HttpFoundation\Request;

class ClientPaymentRequestController extends BaseEntityController
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
            'get' => array(
                'name' => '_bck__accounting__client_payment_request__get'
            ),
            'edit' => array(
                'name' => '_bck__accounting__client_payment_request__edit'
            ),
            'addStep1' => array(
                'name' => '_bck__accounting__client_payment_request__add_step1'
            ),
            'addStep2' => array(
                'name' => '_bck__accounting__client_payment_request__add_step2'
            ),
            'delete' => array(
                'name' => '_bck__accounting__client_payment_request__delete'
            )
        );

        parent::init($request);

        /* Legend for template/view */
        $this->localConf['search']['fields'][] = 'isSent'; // Needed field to show the legend
        $this->templateConf['controls']['legend'][] = array(
            'target' => 'actions', 'label' => 'Performed actions', 'class' => '-performed'
        );
        /* /Legend for template/view */

        // Actions for template/view
        $this->templateConf['actions'] = array_merge(
            $this->templateConf['actions'],
            array(
                'copy' => $this->templateConf['acl']['add'],
                'search' => true,
                'email' => true
            )
        );

        return $this;
    }

    /**
     * @Route("/bck/accounting/client-payment-request",
     *     name="_bck__accounting__client_payment_request__index"
     * )
     *
     * Index action
     * @param Request $request
     * @return mixed
     */
    public function indexAction(Request $request)
    {
        return parent::indexAction($request);
    }

    /**
     * @Route("/bck/accounting/client-payment-request/get/{id}",
     *     name="_bck__accounting__client_payment_request__get",
     *     defaults={"id" = null},
     * )
     *
     * Action to get a list/array of compact objects from the search configuration
     * or a regular object if the "id" is provided
     * @param Request $request
     * @param $id
     * @return mixed
     */
    public function getAction(Request $request, $id)
    {
        return parent::getAction($request, $id);
    }

    /**
     * @Route("/bck/accounting/client-payment-request/add-step1/{id}",
     *     name="_bck__accounting__client_payment_request__add_step1",
     *     defaults={"id" = null},
     * )
     *
     * Add step 1
     * @param Request $request
     * @param $id
     * @return mixed
     */
    public function addStep1Action(Request $request, $id)
    {
        $this->flags['storage'] = 'session'; // Session storage is used
        $this->flags['hasForm'] = true;
        $this->init($request);
        $this->localConf['formTypeClass'] = ('Bck\AccountingBundle\Form\ClientPaymentRequestAddStep1Type');
        // Field to be rendered in form (this configuration for Angular "FormService" is defined in "provider")
        $this->templateConf['fields']['form'] = array('clientObj');

        // Get object
        $obj = $this->getObject($id);

        // Build form
        $form = $this->createForm($this->localConf['formTypeClass'], $obj);

        // Handle request
        $form->handleRequest($request);

        // Check if is submitted
        if($form->isSubmitted()) {
            $this->saveForm($form, $obj);
            return $this->getResponse();
        }

        // Render form
        return $this->render('BckAccountingBundle:ClientPaymentRequest:add-step1.html.twig', array(
            '_conf' => $this->templateConf,
            '_form' => $form->createView(),
            '_containers' => array(
                array(
                    'label' => 'Client'
                ),
                array(
                    'label' => 'Payment'
                )
            )
        ));
    }

    /**
     * @Route("/bck/accounting/client-payment-request/add-step2/{id}",
     *     name="_bck__accounting__client_payment_request__add_step2",
     *     defaults={"id" = null},
     * )
     *
     * Add step 2 (detail/preview)
     * @param Request $request
     * @param $id
     * @return mixed
     */
    public function addStep2Action(Request $request, $id)
    {
        $this->flags['storage'] = 'session'; // Session storage is used
        $this->flags['hasForm'] = true;
        $this->init($request);
        $this->localConf['formTypeClass'] = ('Bck\AccountingBundle\Form\ClientPaymentRequestAddStep2Type');
        // Field to be rendered in form (this configuration for Angular "FormService" is defined in "provider")
        $this->templateConf['fields']['form'] = array(
            'clientDocumentObj', 'reference', 'description', 'value', 'paymentMethodObj', 'paymentStatus'
        );

        // Get object
        $obj = $this->getObject($id);

        // Build form
        $form = $this->createForm($this->localConf['formTypeClass'], $obj);

        // Handle request
        $form->handleRequest($request);

        // Check if is submitted
        if($form->isSubmitted()) {
            // Validate form
            if (!$this->validateForm($form) || !$this->preSaveObject($obj, null)) {
                return $this->getResponse();
            }

            $clonedObj = clone $obj;

            $clonedObj->setRemainReceiptEmission($clonedObj->getValue());

            // Save object
            $this->flags['storage'] = 'db'; // Switch storage to database
            $this->saveObject($clonedObj, true, true); // Add to response

            if ($this->responseConf['status'] == 1) {
                // Remove objects from session
                $this->deleteObjectFromSS($obj->getId());

                // Flash messages to display to user
                $this->addFlashMessage(
                    'The data has been updated',
                    'Success',
                    'success'
                );
            }

            return $this->getResponse();
        }

        // Render form
        return $this->render('BckAccountingBundle:ClientPaymentRequest:add-step2.html.twig', array(
            '_conf' => $this->templateConf,
            '_form' => $form->createView()
        ));
    }

    /**
     * @Route("/bck/accounting/client-payment-request/edit/{id}",
     *     name="_bck__accounting__client_payment_request__edit",
     *     defaults={"id" = null}
     * )
     *
     * Add step 1
     * @param Request $request
     * @param $id
     * @return mixed
     */
    public function editAction(Request $request, $id)
    {
        // Set configuration
        $this->flags['hasForm'] = true;
        $this->init($request);
        $this->templateConf['fields']['form'] = array(
            'clientDocumentObj', 'reference', 'description',
            'value', 'paymentMethodObj', 'paymentStatus'
        );

        // Get object
        $obj = $this->getObject($id);
        $oldValues = array('oldValues' => array(
            'value' => $obj->getValue(),
            'paymentMethodObj' => $obj->getPaymentMethodObj(),
            'paymentStatus' => $obj->getPaymentStatus(),
            'reference' => $obj->getReference()
        ));

        // Build form
        $form = $this->createForm($this->localConf['formTypeClass'], $obj);

        // Handle request
        $form->handleRequest($request);

        // Check if is submitted
        if($form->isSubmitted()) {
            // Validate form
            if (!$this->validateForm($form) || !$this->preSaveObject($obj, $oldValues)) {
                return $this->getResponse();
            }

            $remainReceiptEmission = ($obj->getValue() - ($oldValues['oldValues']['value'] - $obj->getRemainReceiptEmission()));
            $obj->setRemainReceiptEmission($remainReceiptEmission);

            $this->saveForm($form, $obj);
            return $this->getResponse();
        }

        // Render form
        return $this->render('BckAccountingBundle:ClientPaymentRequest:edit.html.twig', array(
            '_conf' => $this->templateConf,
            '_form' => $form->createView()
        ));
    }

    /**
     * @Route("/bck/accounting/client-payment-request/delete/{id}",
     *     name="_bck__accounting__client_payment_request__delete",
     *     defaults={"id" = null},
     * )
     *
     * Action to delete object or list of objects
     * @param Request $request
     * @param $id
     * @return mixed
     */
    public function deleteAction(Request $request, $id)
    {
        return parent::deleteAction($request, $id);
    }

    /**
     * @Route("/bck/accounting/client-payment-request/get-percentage/{id}",
     *     name="_bck__accounting__client_payment_request__get_percentage"
     * )
     *
     * Action to get the percentage of object
     * @param Request $request
     * @param $id
     * @return mixed
     */
    public function getPercentageAction(Request $request, $id)
    {
        // Set configuration
        $this->init($request);

        $obj = $this->getObject($id);

        $this->templateConf['localData']['data']['percentage']
            = ($obj ? $obj->getPercentage() : null);

        return $this->getResponse();
    }

    /**
     * Set default values to object
     * @param $object
     * @return $this
     */
    protected function setObjectDefaultValues($object)
    {
        parent::setObjectDefaultValues($object);
        // Set default data
        if (empty($object->getId())) {
            $object->setPaymentStatus("NO");
            $object->setRemainReceiptEmission(0);
            $object->setIsSent(false);
        }
        return $this;
    }

    /**
     * Overrides parent function
     * @param $object
     * @param $data (form data and "oldValues" with old values of object to validate the new values:
     *     array('value' => [], etc.))
     * @return bool
     */
    protected function preSaveObject(&$object, $data) {
        $isSessionStorage = ($this->flags['storage'] == 'session');

        $paymentMethodName = ($data['oldValues']['paymentMethodObj'] ?
            $data['oldValues']['paymentMethodObj']->getAppPaymentMethodObj()->getName() :
            null
        );

        // Check values
        $errorMessage = null;
        if ($object->getValue() <= 0) {
            $errorMessage = 'Payment value must be >= 0.';
        } elseif (!$isSessionStorage) {
            if (($paymentMethodName == 'Paypal') &&
                !empty($data['oldValues']['reference'])
            ) {
                $errorMessage = (
                'This Paypal transaction has already been initialized.<br/>You can not edit this entry.'
                );
            } elseif (($data['oldValues']['value'] - $object->getRemainReceiptEmission()) > $object->getValue()) {
                $errorMessage = (
                    'Document value should be greater than the receipt documents ('
                    . ($data['oldValues']['value'] - $object->getRemainReceiptEmission())
                    . ').<br/> Otherwise you need to cancel the receipt documents before.'
                );
            }
        }

        // In case of "Paypal" payment method, if reference or paymentStatus was changed by the user,
        // we need to reset again this values, since Paypal handles with this fields automatically.
        if (!$errorMessage &&
            ($paymentMethodName == 'Paypal') &&
            (
                ($data['oldValues']['reference'] != $object->getReference()) ||
                ($data['oldValues']['paymentStatus'] != $object->getPaymentStatus())
            )
        ) {
            $this->addFlashMessage(
                'Paypal handles automatically with "Payment Status" and "Reference",<br/>so this changes can not be saved.',
                'Fields not persisted',
                'warning'
            );

            $object->setReference($data['oldValues']['reference']);
            $object->setPaymentStatus($data['oldValues']['paymentStatus']);
        }

        // Set error
        if ($errorMessage) {
            $this->responseConf['status'] = 0;
            $this->addFlashMessage(
                $errorMessage,
                'Data not persisted',
                'error'
            );
            return false;
        }

        return true;
    }

    /**
     * Overrides parent method
     * @param $object
     * @param $context (context to help to determine actions)
     * @return boolean (true to continue, false to abort)
     */
    protected function preDeleteObject($object, $context = null)
    {
        $oldValues = array('oldValues' => array(
            'value' => $object->getValue(),
            'paymentMethodObj' => $object->getPaymentMethodObj(),
            'paymentStatus' => $object->getPaymentStatus(),
            'reference' => $object->getReference()
        ));

        return $this->preSaveObject($object, $oldValues);
    }

    /**
     * Pre (before) cancel object event. Use this function to handle event.
     * @param $object
     * @return boolean (true to continue, false to abort)
     */
    protected function preCancelObject($object) {
        return $this->preDeleteObject($object, null);
    }


    ////////////////////////////////////////////////////
    // METHODS TO HANDLE WITH RECEIPT FORMS
    // TO INTERACTS WITH BckAccountingBundle/DocumentReceiptPayment
    /////////////////////////////////////////////////////////////////////////////////////////////////////////

    /**
     * Overrides parent method
     * @param Request $request
     * @param $client
     * @return $this
     * @throws \Exception
     */
    private function initForReceipt(Request $request, $client)
    {
        // Set configuration only once
        if($this->isInitialized) { return $this; }

        // Client is a mandatory parameter, is not validated automatically because is not a parent
        if (empty($client)) {
            throw new \Exception('Configuration cannot be set, missing arguments (Client)!');
        }

        $this->templateConf['route'] = array();

        parent::baseEntityInit($request);

        // Route. To refresh and search action in view
        $getRouteName = '_bck__accounting__client_payment_request__get_for_receipt';
        $this->templateConf['route'] = array(
            'get' => array(
                'name' => $getRouteName,
                'url' => $this->generateUrl($getRouteName, array("client" => $client))
            )
        );

        // Actions
        $this->templateConf['actions'] = array(
            'search' => true,
            'radioChoice' => true
        );

        // Fields
        $this->templateConf['fields'] = array_merge(
            $this->templateConf['fields'],
            array(
                'view' => array(
                    'client_code', 'entity_name', 'clientDocument_label', 'reference', 'description',
                    'value', 'paymentMethod_name', 'remainReceiptEmission'
                ),
                'form' => array()
            )
        );

        // Search
        // Local conf, mandatory criteria.
        $this->localConf['search']['criteria'][] = array(
            'field' => 'isEnabled',
            'expr' => 'eq',
            'value' => true
        );
        $this->localConf['search']['criteria'][] = array(
            'field' => 'paymentStatus',
            'expr' => 'eq',
            'value' => "YES"
        );
        $this->localConf['search']['criteria'][] = array(
            'field' => 'remainReceiptEmission',
            'expr' => 'gt',
            'value' => 0
        );

        // Default optional criteria
        $clientObj = $this->getRepositoryService('Client', 'EntitiesBundle', 'Bck')
            ->execute(
                'findOneById',
                array($client)
            );
        $this->templateConf['search'] = array_merge(
            $this->templateConf['search'],
            array(
                'fields' => array(
                    'client_code', 'entity_name', 'clientDocument_label', 'description',
                    'paymentMethod_name', 'remainReceiptEmission'
                ),
                'criteria' => array(
                    array(
                        // Optional criteria, but defined by default. We need to use te client code
                        // instead of the client id, so the user is able to change this criteria in the view
                        'field' => 'client_code',
                        'expr' => 'eq',
                        'value' => $clientObj->getCode()
                    )
                ),
                'orderBy' => array(
                    array('field' => 'id', 'value' => 'DESC')
                )
            )
        );

        // Extra data
        $this->templateConf['extraData']['template'] = array(
            'class' => '-merge-view'
        );

        // Legend (disable cancel legend)
        $this->templateConf['controls']['legend'] = array();

        return $this;
    }

    /**
     * @Route("/bck/accounting/client-payment-request/get-for-receipt/{client}",
     *     name="_bck__accounting__client_payment_request__get_for_receipt"
     * )
     *
     * Get objects for invoice (not invoiced objects)
     * @param Request $request
     * @param $client
     * @return mixed
     */
    public function getForReceiptAction(Request $request, $client)
    {
        // Set configuration
        $this->initForReceipt($request, $client);

        // Process request
        $this->getAndProcessRequestData($request);

        $objects = $this->getObjectsBySearchForReceipt($this);

        // Config response
        $this->responseConf['hasObjects'] = true;
        $this->responseConf['objects'] = $objects;

        return $this->getResponse();
    }

    /**
     * @Route("/bck/accounting/client-payment-request/data-for-receipt/{client}",
     *     name="_bck__accounting__client_payment_request__data_for_receipt"
     * )
     *
     * Data for receipt
     * @param Request $request
     * @param $client
     * @return mixed
     */
    public function dataForReceiptAction(Request $request, $client)
    {
        // Set configuration
        $this->initForReceipt($request, $client);

        $objectsArr = $this->getObjectsBySearchForReceipt($this);

        // Config response
        $this->responseConf['hasConf'] = true;
        $this->responseConf['hasObjects'] = true;
        $this->responseConf['objects'] = $objectsArr;

        return $this->getResponse();
    }

    /**
     * Get Objects By Search For Receipt
     * @param $controller
     * @param $options
     * @return array
     */
    static function getObjectsBySearchForReceipt($controller, $options = array())
    {
        // Set options only if it's not defined. If options are defined, id's are provided in criteria,
        // so we do not need to add any more information (including in criteria)
        $hasOptionsByParam = (!empty($options));

        if (!$hasOptionsByParam) {
            $options = $controller->getSearch();
            $options = BaseEntityTypeController
                ::empowerCriteriaByName($options, 'entity_name');

            if (!empty($options['limit'])) { // Pagination enabled
                $options['limit']++; // Used to control the pagination
            }
        }

        $objects = $controller->getRepositoryService('ClientPaymentRequest', 'AccountingBundle', 'Bck')
            ->execute(
                'getObjects',
                array($options)
            );

        if (!$hasOptionsByParam) {
            if (!empty($options['limit'])) { // Pagination enabled
                $controller->templateConf['search']['hasMore'] = (count($objects) == $options['limit']);
                if ($controller->templateConf['search']['hasMore']) {
                    // Remove the last row, it's only to control the pagination
                    array_pop($objects);
                }
            }
        }

        return $objects;
    }
}