<?php

namespace Bck\AccountingBundle\Controller;

use AppBundle\Controller\BaseEntityController;
use Bck\AccountingBundle\Entity\ClientDocumentReceiptPayment;
use Sensio\Bundle\FrameworkExtraBundle\Configuration\Route;
use Symfony\Component\HttpFoundation\Request;

class ClientDocumentReceiptPaymentController extends BaseDocumentReceiptPaymentController
{
    /**
     * Get label/title to display child in parent
     * @return mixed
     */
    static function getLabel() { return 'Payment'; }

    /**
     * Defines parent method
     * @return mixed (lowerCamelCase)
     */
    protected function getLocalEntityContext() {
        return 'client';
    }

    /**
     * Overrides parent method
     * @param Request $request
     * @param $parents
     * @return $this
     */
    public function init(Request $request, $parents = null)
    {
        // Set configuration only once
        if($this->isInitialized) { return $this; }

        // Parent route
        $this->parentConf = array(
            'clientDocument' => array('route' => '_bck__accounting__client_document__index')
        );

        // Route
        $this->templateConf['route'] = array(
            'get' => array(
                'name' => '_bck__accounting__client_document_receipt_payment__get'
            ),
            // This route is not necessary, and should not be defined, otherwise the DataService will use
            // this route when the object is new (does not have id).
            /*'add' => array(
                'name' => '_bck__accounting__client_document_receipt_payment__add',
            ),*/
            'addStep1Submit' => array(
                'name' => '_bck__accounting__client_document_receipt_payment__add_step1_submit',
            ),
            'addStep2' => array(
                'name' => '_bck__accounting__client_document_receipt_payment__add_step2',
            ),
            'edit' => array(
                'name' => '_bck__accounting__client_document_receipt_payment__edit',
            ),
            'delete' => array(
                'name' => '_bck__accounting__client_document_receipt_payment__delete',
            )
        );

        parent::init($request, $parents);

        // Search
        $this->templateConf['search']['fields'] = array(
            'paymentMethod_name', 'reference', 'description', 'value'
        );
        // Empty criteria to be able to see all registers because "search" action is disabled.
        $this->templateConf['search']['criteria'] = array();

        // Extra data
        $this->templateConf['extraData']['template'] = array(
            'class' => '-stamp-view'
        );

        return $this;
    }

    /**
     * @Route("/bck/accounting/client-document-receipt-payment/get/{clientDocument}/{id}",
     *     name="_bck__accounting__client_document_receipt_payment__get",
     *     defaults={"id" = null}
     * )
     *
     * Overrides parent method
     * @param Request $request
     * @param $clientDocument
     * @param $id
     * @return mixed
     */
    public function getLocalChildAction(Request $request, $clientDocument, $id)
    {
        return parent::getChildAction($request, array($clientDocument), $id);
    }


    /**
     * @Route("/bck/accounting/client-document-receipt-payment/add/{clientDocument}",
     *     name="_bck__accounting__client_document_receipt_payment__add"
     * )
     *
     * Action to add objects
     * @param Request $request
     * @param $clientDocument
     * @return mixed
     */
    public function addAction(Request $request, $clientDocument)
    {
        $parents = array($clientDocument);

        // Set configuration
        $this->flags['hasForm'] = true;
        $this->init($request, $parents);

        // Get object
        $obj = $this->getObject();

        // Build form
        $form = $this->createForm($this->localConf['formTypeClass'], $obj);

        // Render Wizard
        return $this->render('BckAccountingBundle:ClientDocumentReceiptPayment:add.html.twig', array(
            '_conf' => $this->templateConf,
            '_form' => $form->createView(),
            '_containers' => array(
                array(
                    'label' => 'Client Payments',
                ),
                array(
                    'label' => 'Preview',
                )
            )
        ));
    }

    /**
     * @Route("/bck/accounting/client-document-receipt-payment/add-step1-submit/{clientDocument}/{addToParent}",
     *     name="_bck__accounting__client_document_receipt_payment__add_step1_submit",
     *     defaults={"addToParent" = null}
     * )
     *
     * Action to add objects (step 1 submit)
     * @param Request $request
     * @param $clientDocument
     * @param $addToParent (determines if the object is associated to the parent,
     * used to add documents of receipt payment in step2)
     * @return mixed
     */
    public function addStep1SubmitAction(Request $request, $clientDocument, $addToParent = null)
    {
        $parents = array($clientDocument);

        // Set configuration
        $this->flags['hasForm'] = true;
        $this->flags['storage'] = 'session'; // Session storage is used until process is finished
        $this->init($request, $parents);

        // Process request
        $data = $this->getAndProcessRequestData($request);

        // Set options with "ids"
        $clientPaymentRequestId = ((!empty($data) && !empty($data['id']) && !empty($data['id'][0]))
            ? $data['id'][0]
            : null
        );

        if ($clientPaymentRequestId) {
            // Get document obj
            $documentObj = $this->getParentConf()['obj'];

            $options = (empty($data['id'])
                ? null
                : array('criteria' => array(array('field' => 'id', 'expr' => 'eq', 'value' => $data['id'])))
            );

            // Create object from ClientPaymentRequest
            $obj = $this->newObjectsFromClientPaymentRequest($this, $documentObj, $options);
            $obj = reset($obj); // Ensure that only one object is used

            if (!empty($obj)) {
                // Save object in session
                if ($addToParent) {
                    // Associate the object to the parent (used to add documents of receipt payment in step2)
                    parent::saveObject_static($this, $obj);
                    $this->postSaveObject($obj, null); // Update document totals
                } else {
                    // Do not use parent, so this temporary object can be saved in session storage without
                    // stay associated to parent object, otherwise when the paren is in session storage also, the object stays
                    // immediately associated to parent even if it's form is canceled or closed!
                    parent::saveObjectToSSToParent($obj, null);
                }

                // Configure response
                $this->responseConf['hasObject'] = true;
                $this->responseConf['object'] = $this->normalizeObject($obj); // Object updated
            }
        }

        return $this->getResponse();
    }

    /**
     * @Route("/bck/accounting/client-document-receipt-payment/add-step2/{clientDocument}/{id}",
     *     name="_bck__accounting__client_document_receipt_payment__add_step2",
     *     defaults={"id" = null}
     * )
     *
     * Action to add objects (step 2)
     * @param Request $request
     * @param $clientDocument
     * @param $id
     * @return mixed
     */
    public function addStep2Action(Request $request, $clientDocument, $id)
    {
        $parents = array($clientDocument);

        // Set configuration
        $this->flags['hasForm'] = true;
        $this->init($request, $parents);

        // Get storage after init, this storage is defined by parent when the parent object is getted
        $parentStorage = $this->flags['storage'];

        // Get object
        $originalObj = $this->getObject($id);
        // Clone the original object, so we keep the original object untouched in case of error,
        // and we will be able to get the object again in the next form submission
        // (otherwise the original object would be modified by the form "handleRequest" method)
        $obj = clone $originalObj;

        // Build form
        $form = $this->createForm('Bck\AccountingBundle\Form\ClientDocumentReceiptPaymentAddStep2Type', $obj);

        // Handle request
        $form->handleRequest($request);

        // Check if is submitted
        if($form->isSubmitted()) {
            // Set parent storage context to validations run has expected (preSaveObject)
            // and to save object in database if that's the case
            if ($parentStorage == 'db') {
                $this->flags['storage'] = 'db';
            } else {
                // Object will be save in storage for parent, so set the id to be replaced by the old (original)
                $obj->setId($originalObj->getId());
            }

            // Validate general object changes and set values.
            $data = $this->getRequestData($request);
            $data['oldValues'] = array('value' => 0); // Zero because it's a new object
            if (!$this->preSaveObject($obj, $data)) {
                return $this->getResponse();
            }

            $this->saveForm($form, $obj);
            $this->postSaveObject($obj, null);

            if (($this->responseConf['status'] == 1)) {
                if ($this->flags['storage'] == 'db') {
                    // Remove object from session
                    $this->deleteObjectFromSS($originalObj->getId());
                }

                // Disable session storage flag to be able to add the object in DataService objects,
                // even if parent is in storage
                $this->responseConf['addObjectSessionStorageFlag'] = false;
            }

            return $this->getResponse();
        }

        // Render form
        return $this->render('BckAccountingBundle:ClientDocumentReceiptPayment:addStep2.html.twig', array(
            '_conf' => $this->templateConf,
            '_form' => $form->createView()
        ));
    }

    /**
     * @Route("/bck/accounting/client-document-receipt-payment/edit/{clientDocument}/{id}",
     *     name="_bck__accounting__client_document_receipt_payment__edit",
     *     defaults={"id" = null}
     * )
     *
     * Overrides parent method
     * @param Request $request
     * @param $clientDocument
     * @param $id
     * @return mixed
     */
    public function editLocalChildAction(Request $request, $clientDocument, $id)
    {
        return parent::editLocalChildAction($request, $clientDocument, $id);
    }

    /**
     * @Route("/bck/accounting/client-document-receipt-payment/edit-flat-form/{clientDocument}/{id}",
     *     name="_bck__accounting__client_document_receipt_payment__edit_flat_form",
     *     defaults={"id" = null}
     * )
     *
     * Overrides parent method
     * @param Request $request
     * @param $clientDocument
     * @param $id
     * @return mixed
     */
    public function editFlatFormAction(Request $request, $clientDocument, $id)
    {
        return parent::editFlatFormAction($request, $clientDocument, $id);
    }

    /**
     * @Route("/bck/accounting/client-document-receipt-payment/delete/{clientDocument}/{id}",
     *     name="_bck__accounting__client_document_receipt_payment__delete",
     *     defaults={"id" = null}
     * )
     *
     * Overrides parent method
     * @param Request $request
     * @param $clientDocument
     * @param $id
     * @return mixed
     */
    public function deleteLocalChildAction(Request $request, $clientDocument, $id)
    {
        $parents = array($clientDocument);
        return parent::deleteChildAction($request, $parents, $id);
    }

    /**
     * @Route("/bck/accounting/client-document-receipt-payment/data/{clientDocument}",
     *     name="_bck__accounting__client_document_receipt_payment__data"
     * )
     *
     * Overrides parent method
     * @param Request $request
     * @param $clientDocument
     * @param $responseType (not used in route, only for direct symfony calls,
     *     determines the type of response [http, json, array])
     * @return mixed
     */
    public function dataLocalChildAction(Request $request, $clientDocument, $responseType = 'http')
    {
        // Set configuration
        $this->init($request, array($clientDocument));

        // Legend (disable cancel legend)
        $this->templateConf['controls']['legend'] = array();

        return parent::dataChildAction($request, array($clientDocument), $responseType);
    }

    /**
     * @Route("/bck/accounting/client-document-receipt-payment/conf/{clientDocument}/{id}",
     *     name="_bck__accounting__client_document_receipt_payment__conf",
     *     defaults={"id" = null}
     * )
     *
     * Overrides parent method
     * @param Request $request
     * @param $clientDocument
     * @param $id (return the target id object with the conf, it's used to avoid to make another server request
     *     to get the object when we need the object with the conf, like in flat forms, entity detail, etc.)
     * @return mixed
     */
    public function confLocalChildAction(Request $request, $clientDocument, $id = null)
    {
        return parent::confChildAction($request, array($clientDocument), $id);
    }

    /**
     * Create object from client payment request
     * @param $controller
     * @param $documentObj
     * @param $options
     * @return array
     */
    static function newObjectsFromClientPaymentRequest($controller, $documentObj, $options)
    {
        // Get objects
        $options['fields'] = array('id'); // Only id it's needed
        $clientPaymentRequestArr = ClientPaymentRequestController
            ::getObjectsBySearchForReceipt($controller, $options);

        $objectArr = array();
        foreach ($clientPaymentRequestArr as $clientPaymentRequest) {
            // Get booking service price
            $clientPaymentRequestObj = $controller->getRepositoryService('ClientPaymentRequest', 'AccountingBundle', 'Bck')->execute(
                'findOneById',
                array($clientPaymentRequest['id'])
            );
            // Create document invoice detail
            $clientDocumentReceiptPaymentObj = new ClientDocumentReceiptPayment();
            parent::setObjectDefaultValues_static($controller, $clientDocumentReceiptPaymentObj);
            $clientDocumentReceiptPaymentObj->setClientPaymentRequestObj($clientPaymentRequestObj);
            $clientDocumentReceiptPaymentObj->setClientDocumentObj($documentObj);

            $clientDocumentReceiptPaymentObj->setPaymentMethodObj($clientPaymentRequestObj->getPaymentMethodObj());
            $clientDocumentReceiptPaymentObj->setReference($clientPaymentRequestObj->getReference());
            $clientDocumentReceiptPaymentObj->setDescription($clientPaymentRequestObj->getDescription());
            $clientDocumentReceiptPaymentObj->setValue($clientPaymentRequestObj->getRemainReceiptEmission());

            $objectArr[] = $clientDocumentReceiptPaymentObj;
        }

        return $objectArr;
    }

    /**
     * Overrides parent function
     * @param $object
     * @param $data (form data and "oldValues" with old values of object to validate the new values:
     *     array('value' => []))
     * @return bool
     */
    protected function preSaveObject(&$object, $data)
    {
        // Check ClientPaymentRequest remainReceiptEmission value
        if ($clientPaymentRequestObj = $object->getClientPaymentRequestObj()) {
            if ($clientPaymentRequestObj->getRemainReceiptEmission() < $object->getValue()) {
                $this->responseConf['status'] = 0;
                $this->addFlashMessage(
                    'Value can not be greater than the payment (' . $clientPaymentRequestObj->getRemainReceiptEmission() . ').',
                    'Data not persisted',
                    'error'
                );
                return false;
            }
        }

        return parent::preSaveObject($object, $data);
    }

    /**
     * Overrides parent method
     * @param $object
     * @param $data (usually the form data)
     * @return object
     */
    protected function postSaveObject($object, $data = null)
    {
        if (($this->responseConf['status'] == 1) && ($this->flags['storage'] == 'db')) {
            // Update ClientPaymentRequest remainReceiptEmission value
            if ($clientPaymentRequestObj = $object->getClientPaymentRequestObj()) {
                $this->getRepositoryService('ClientDocumentReceiptPayment', 'AccountingBundle', 'Bck')
                    ->execute('setRemainReceiptEmission', array($clientPaymentRequestObj));
                // Update object
                BaseEntityController::saveObject_static($this, $clientPaymentRequestObj);
            }
        }

        return parent::postSaveObject($object, $data);
    }

    /**
     * Overrides parent method
     * @param $object
     * @return $this
     */
    protected function postCancelObject($object)
    {
        return $this->postSaveObject($object, null);
    }

    /**
     * Overrides parent method
     * @param $object
     * @return $this
     */
    protected function postDeleteObject($object)
    {
        return $this->postCancelObject($object);
    }
}