<?php

namespace AccountingBundle\Controller;

use AppBundle\Controller\BaseEntityController;
use BookingBundle\Controller\BaseBookingController;
use Sensio\Bundle\FrameworkExtraBundle\Configuration\Route;
use Symfony\Component\HttpFoundation\Request;


abstract class BaseDocumentController extends BaseEntityController
{
    /**
     * Get Local Entity Context.
     * @return mixed (lowerCamelCase)
     */
    abstract protected function getLocalEntityContext();

    /**
     * Get Entity Context.
     * @param $isUpperCase
     * @return mixed (lowerCamelCase)
     */
    public function getEntityContext($isUpperCase = false) {
        return ($isUpperCase ? ucfirst($this->getLocalEntityContext()) : $this->getLocalEntityContext());
    }

    /**
     * [SET ROUTE HERE]
     *
     * Overrides parent method
     * @param Request $request
     * @param $id
     * @return mixed
     */
    public function getAction(Request $request, $id)
    {
        if(!empty($id)) {
            // Set configuration
            $this->init($request);

            // Process request
            $this->getRequestData($request); // Token is not validate, because this action is called directly without data

            $object = $this->getObject($id);

            $this->responseConf['object'] = $this->normalizeObject($object);

            ////////
            // Necessary data for form, because this method is called by form to edit the object
            ////////////////////////////////

            // Set date range to validate date in template
            $this->getAndSetResponseLimitDateRange($object);

            // Set store info to be used in template
            $this->setResponseStoreInfo($object->getStoreObj());

            // Set document info to be used in template
            $this->setResponseDocumentInfo($object);

            // Set Total Vat Split By Code to be used in template
            $this->setResponseDocumentTotalVatSplitByCode($object);

            return $this->getResponse(true);
        }

        return parent::getAction($request, $id);
    }

    /**
     * [SET ROUTE HERE]
     *
     * Action to get a list/array of objects to use as choices
     * @param Request $request
     * @param $entity (entity id of entity type according with context)
     * @param $operation (document operation <DEBIT or CREDIT>)
     * @param $booking (booking id, to filter results by booking)
     * @return mixed
     */
    public function choicesAction(Request $request, $entity = null, $operation = null, $booking = null)
    {
        //@TODO REMOVE 9 NOV 2017
        exit;
        $entityContext = $this->getEntityContext();

        // Set configuration
        $this->init($request);

        // Add booking criteria
        if (!empty($booking)) {
            $repositoryService = $this->getLocalRepositoryService();
            $bookingDocumentsIdArr = $repositoryService->execute(
                'getDocumentsIdByBooking',
                array($booking, $repositoryService)
            );
            if (count($bookingDocumentsIdArr) > 0) {
                $this->localConf['search']['criteria'][] = array(
                    'field' => ('id'),
                    'expr' => 'IN',
                    'value' => $bookingDocumentsIdArr
                );
            }
        }

        // Add entity criteria
        $this->localConf['search']['criteria'][] = array(
            'field' => ($entityContext . 'Obj'),
            'expr' => 'eq',
            'value' => $entity
        );

        // Pendent settlement
        $this->localConf['search']['criteria'][] = array(
            'field' => 'remainSettlement',
            'expr' => 'gt',
            'value' => 0
        );

        // Document operation
        if (in_array($operation, array('DEBIT', 'CREDIT'))) {
            $this->localConf['search']['fields'][] = ($entityContext . 'DocumentTypeObj');
            $this->localConf['search']['criteria'][] = array(
                'field' => ($entityContext . 'DocumentType.operation'),
                'expr' => 'eq',
                'value' => (($operation == 'DEBIT') ? 'CREDIT' : 'DEBIT') // Inverse operation
            );
        }

        return parent::choicesAction($request);
    }

    /**
     * [SET ROUTE HERE]
     *
     * Add step 1
     * @param Request $request
     * @param $id
     * @return mixed
     */
    public function addStep1Action(Request $request, $id)
    {
        $entityContext = $this->getEntityContext();
        $entityContextUC = $this->getEntityContext(true);

        // Set configuration
        $this->flags['storage'] = 'session'; // Session storage is used
        $this->flags['hasForm'] = true;
        $this->init($request);
        $this->localConf['formTypeClass'] = ('AccountingBundle\Form\\' . $entityContextUC . 'DocumentAddStep1Type');
        // Field to be rendered in form (this configuration for Angular "FormService" is defined in "provider")
        $this->templateConf['fields']['form'] = array($entityContext.'DocumentTypeObj', $entityContext.'Obj');

        // Retrieve object from session
        $obj = $this->getObject($id);

        // Build form
        $form = $this->createForm($this->localConf['formTypeClass'], $obj);

        // Handle request
        $form->handleRequest($request);

        // Check if is submitted
        if($form->isSubmitted()) {
            $this->setObjectDefaultValues($obj); // Set default values again, entity can be changed
            $this->setDefaultDates($obj); // Document Type can be changed

            // Object is saved in session, this submit only determines the base information to be definitely saved in the next step
            $this->saveForm($form, $obj);

            return $this->getResponse(true);
        }

        // Render form
        return $this->render('AppBundle:wizard:form-popup.html.twig', array(
            '_conf' => $this->templateConf,
            '_form' => $form->createView(),
            '_containers' => array(
                array(
                    'label' => 'Document Type',
                ),
                array(
                    'label' => 'Detail',
                ),
                array(
                    'label' => 'Preview',
                )
            )
        ));
    }

    /**
     * [SET ROUTE HERE]
     *
     * Add default objects detail
     * @param Request $request
     * @param $id
     * @return mixed
     */
    public function addStep2Action(Request $request, $id)
    {
        // Set configuration
        $this->flags['storage'] = 'session'; // Session storage is used
        $this->init($request);

        // Process request
        $data = $this->getAndProcessRequestData($request);

        // Remove old detail objects
        $object = $this->getObject($id);
        $this->container->get('app.service.session_storage')->deleteChildObjects($object->getId());

        // Set options with "ids"
        $options = ((empty($data['data']['id']) || !is_array($data['data']['id']))
            ? null
            : array('criteria' => array(array('field' => 'id', 'expr' => 'in', 'value' => $data['data']['id'])))
        );

        $getMethod = ('get' . ucfirst($this->getEntityContext()) . 'DocumentTypeObj');
        $documentType = $object->$getMethod()->getType();
        switch ($documentType) {
            case 'RECEIPT':
            case 'SETTLEMENT':
                $this->setSelectedReceiptDetail($object, $options);
                break;
            case 'RECTIFICATION':
                $this->setSelectedRectification($object, $options);
                break;
            default: // INVOICE
                $this->setSelectedInvoiceDetail($object, $options);
        }

        return $this->getResponse(true);
    }

    /**
     * [SET ROUTE HERE]
     *
     * Add step 3 invoice
     * @param Request $request
     * @param $id
     * @return mixed
     */
    public function addStep3InvoiceAction(Request $request, $id)
    {
        $entityContext = $this->getEntityContext();
        $entityContextUC = $this->getEntityContext(true);

        // Set configuration
        $this->flags['storage'] = 'session'; // Session storage is used
        $this->flags['hasForm'] = true;
        $this->init($request);
        $this->localConf['formTypeClass'] = ('AccountingBundle\Form\\' . ucfirst($entityContext) . 'DocumentAddStep3InvoiceType');
        // Field to be rendered in form does not necessary, because we will render a specific form
        // (this configuration to Angular "FormService" is defined in "provider")

        // Retrieve object from session
        $obj = $this->getObject($id);

        // Build form
        $form = $this->createForm($this->localConf['formTypeClass'], $obj);

        // Handle request
        $form->handleRequest($request);

        // Check if is submitted
        if($form->isSubmitted()) {
            // Validate dates
            if (!$this->validateDates($obj)) {
                return $this->getResponse(true);
            }

            // Save session ids to remove or restore objects in session storage.
            $sessionIds = array(
                'document' => $obj->getId(),
                'documentDetail' => array()
            );

            // Get detail objects
            $detailObjects = array();

            $this->addDocumentInvoiceDetail($request, $obj, $detailObjects);

            // Error
            if ($this->responseConf['status'] == 0) {
                return $this->getResponse(true);
            }

            // Clear ids to may be saved in database
            $obj->setId(null);

            // Save object in entity manager
            $this->flags['storage'] = 'db'; // Switch storage to database
            $this->saveForm($form, $obj, true, false); // Doesn't flush data until all objects are inserted

            // Save detail objects in database
            foreach ($detailObjects as $detailObj) {
                // Get object to set again foreign objects, otherwise the save will fail,
                // because entity manager does not recognize the foreign objects saved in session storage
                $detailObj = $this->getObjectFromSS($detailObj->getId());

                // Clear id to may be saved in database
                $sessionIds['documentDetail'][] = $detailObj->getId();
                $detailObj->setId(null);
                // Check if detail object has a child detail object (this happen when exist an intermediary object)
                $getMethod = ('get' . $entityContextUC . 'DocumentInvoiceDetailObj');
                if (method_exists($detailObj, $getMethod)) {
                    $sessionIds['documentDetailChildren'][] = $detailObj->$getMethod()->getId();
                    $detailObj->setId(null);
                }
                parent::saveObject($detailObj, false); // Doesn't flush data until all objects are inserted
            }

            // Flush (persist) all objects in database
            $this->flushEm();

            if($this->responseConf['status'] == 1) {
                $this->updateBookingInvoiceStatus($obj);

                // Remove objects from session
                $this->deleteObjectFromSS($sessionIds['document']);

                // Config response
                if ($this->responseConf['hasObject']) {
                    $this->responseConf['object'] = $this->normalizeObject($obj); // Object updated
                }

                // Refresh to update fields choices
                $this->refreshConf();

                // Flash messages to display to user
                $this->addFlashMessage(
                    'The data has been updated',
                    'Success',
                    'success'
                );
            } else {
                // Restore session storage id
                $obj->setId($sessionIds['document']);

                $documentDetailIndex = 0;
                $getMethod = ('get' . $entityContextUC . 'DocumentInvoiceDetailObj');
                foreach ($detailObjects as $detailObj) {
                    $detailObj->setId($sessionIds['documentDetail'][$documentDetailIndex]);
                    if (method_exists($detailObj, $getMethod)) {
                        $detailObj->$getMethod()->setId($sessionIds['documentDetailChildren'][$documentDetailIndex]);
                    }
                    $documentDetailIndex++;
                }
            }

            return $this->getResponse(true);
        }

        $this->localConf['templates']['edit'] = 'AccountingBundle:BaseDocument:add-invoice-detail.html.twig';

        // Render form
        return $this->render($this->localConf['templates']['edit'], array(
            '_conf' => $this->templateConf,
            '_form' => $form->createView()
        ));
    }

    /**
     * [SET ROUTE HERE]
     *
     * Add step 3 receipt
     * @param Request $request
     * @param $id
     * @return mixed
     */
    public function addStep3ReceiptAction(Request $request, $id)
    {
        $entityContext = $this->getEntityContext();

        // Set configuration
        $this->flags['storage'] = 'session'; // Session storage is used
        $this->flags['hasForm'] = true;
        $this->init($request);

        // Retrieve object from session
        $obj = $this->getObject($id);

        // Build form
        $form = $this->createForm('AccountingBundle\Form\\' . ucfirst($entityContext) . 'DocumentAddStep3ReceiptType', $obj);

        // Handle request
        $form->handleRequest($request);

        // Check if is submitted
        if($form->isSubmitted()) {
            // Validate dates
            if (!$this->validateDates($obj)) {
                return $this->getResponse(true);
            }

            // Save session ids to remove or restore objects in session storage.
            $sessionIds = array(
                'document' => $obj->getId(),
                'documentDetail' => array()
            );

            // Get detail objects
            $detailObjects = array();
            $this->addDocumentReceiptDetail($obj, $detailObjects);

            // Error
            if ($this->responseConf['status'] == 0) {
                return $this->getResponse(true);
            }

            // Clear ids to may be saved in database
            $obj->setId(null);

            // Save object in entity manager
            $this->flags['storage'] = 'db'; // Switch storage to database
            $this->saveForm($form, $obj, true, false); // Doesn't flush data until all objects are inserted

            // Save detail objects in database
            foreach ($detailObjects as $detailObj) {
                // Get object to set again foreign objects, otherwise the save will fail,
                // because entity manager does not recognize the foreign objects saved in session storage
                $detailObj = $this->getObjectFromSS($detailObj->getId());

                // Clear id to may be saved in database
                $sessionIds['documentDetail'][] = $detailObj->getId();
                $detailObj->setId(null);
                parent::saveObject($detailObj, false); // Doesn't flush data until all objects are inserted
            }

            // Flush (persist) all objects in database
            $this->flushEm();

            if($this->responseConf['status'] == 1) {
                $this->updateDocumentsRemainSettlement($obj);

                // Remove objects from session
                $this->deleteObjectFromSS($sessionIds['document']);

                // Config response
                if ($this->responseConf['hasObject']) {
                    $this->responseConf['object'] = $this->normalizeObject($obj); // Object updated
                }

                // Refresh to update fields choices
                $this->refreshConf();

                // Flash messages to display to user
                $this->addFlashMessage(
                    'The data has been updated',
                    'Success',
                    'success'
                );
            } else {
                // Restore session storage id
                $obj->setId($sessionIds['document']);

                $documentDetailIndex = 0;
                foreach ($detailObjects as $detailObj) {
                    $detailObj->setId($sessionIds['documentDetail'][$documentDetailIndex]);
                    $documentDetailIndex++;
                }
            }

            return $this->getResponse(true);
        }

        // Render form
        return $this->render('AccountingBundle:BaseDocument:add-receipt-detail.html.twig', array(
            '_conf' => $this->templateConf,
            '_form' => $form->createView()
        ));
    }

    /**
     * [SET ROUTE HERE]
     *
     * Add step 3 payment
     * @param Request $request
     * @param $id
     * @return mixed
     */
    public function addStep3PaymentAction(Request $request, $id)
    {
        $entityContext = $this->getEntityContext();

        // Set configuration
        $this->flags['storage'] = 'session'; // Session storage is used
        $this->flags['hasForm'] = true;
        $this->init($request);

        // Retrieve object from session
        $obj = $this->getObject($id);

        // Build form
        $form = $this->createForm('AccountingBundle\Form\\' . ucfirst($entityContext) . 'DocumentAddStep3PaymentType', $obj);

        // Handle request
        $form->handleRequest($request);

        // Check if is submitted
        if($form->isSubmitted()) {
            // Validate dates
            if (!$this->validateDates($obj)) {
                return $this->getResponse(true);
            }

            // Save session ids to remove or restore objects in session storage.
            $sessionIds = array(
                'document' => $obj->getId(),
                'documentDetail' => array()
            );

            // Get detail objects
            $detailObjects = array();
            $this->addDocumentReceiptDetail($obj, $detailObjects);

            // Error
            if ($this->responseConf['status'] == 0) {
                return $this->getResponse(true);
            }

            // Clear ids to may be saved in database
            $obj->setId(null);

            // Save object in entity manager
            $this->flags['storage'] = 'db'; // Switch storage to database
            $this->saveForm($form, $obj, true, false); // Doesn't flush data until all objects are inserted

            // Save detail objects in database
            foreach ($detailObjects as $detailObj) {
                // Get object to set again foreign objects, otherwise the save will fail,
                // because entity manager does not recognize the foreign objects saved in session storage
                $detailObj = $this->getObjectFromSS($detailObj->getId());

                // Clear id to may be saved in database
                $sessionIds['documentDetail'][] = $detailObj->getId();
                $detailObj->setId(null);
                parent::saveObject($detailObj, false); // Doesn't flush data until all objects are inserted
            }

            // Flush (persist) all objects in database
            $this->flushEm();

            if ($this->responseConf['status'] == 1) {
                // Remove objects from session
                $this->deleteObjectFromSS($sessionIds['document']);

                // Config response
                if ($this->responseConf['hasObject']) {
                    $this->responseConf['object'] = $this->normalizeObject($obj); // Object updated
                }

                // Refresh to update fields choices
                $this->refreshConf();

                // Flash messages to display to user
                $this->addFlashMessage(
                    'The data has been updated',
                    'Success',
                    'success'
                );
            } else {
                // Restore session storage id
                $obj->setId($sessionIds['document']);

                $documentDetailIndex = 0;
                foreach ($detailObjects as $detailObj) {
                    $detailObj->setId($sessionIds['documentDetail'][$documentDetailIndex]);
                    $documentDetailIndex++;
                }
            }

            return $this->getResponse(true);
        }

        // Render form
        return $this->render('AccountingBundle:BaseDocument:add-receipt-payment.html.twig', array(
            '_conf' => $this->templateConf,
            '_form' => $form->createView()
        ));
    }

    /**
     * [SET ROUTE HERE]
     *
     * Add step 3 settlement
     * @param Request $request
     * @param $id
     * @return mixed
     */
    public function addStep3SettlementAction(Request $request, $id)
    {
        $entityContext = $this->getEntityContext();

        // Set configuration
        $this->flags['storage'] = 'session'; // Session storage is used
        $this->flags['hasForm'] = true;
        $this->init($request);
        $this->localConf['formTypeClass'] = ('AccountingBundle\Form\\' . ucfirst($entityContext) . 'DocumentAddStep3ReceiptType');
        // Field to be rendered in form does not necessary, because we will render a specific form
        // (this configuration to Angular "FormService" is defined in "provider")

        // Retrieve object from session
        $obj = $this->getObject($id);

        // Build form
        $form = $this->createForm($this->localConf['formTypeClass'], $obj);

        // Handle request
        $form->handleRequest($request);

        // Check if is submitted
        if($form->isSubmitted()) {
            // Validate dates
            if (!$this->validateDates($obj)) {
                return $this->getResponse(true);
            }

            // Save session ids to remove or restore objects in session storage.
            $sessionIds = array(
                'document' => $obj->getId(),
                'documentDetail' => array()
            );

            // Get detail objects
            $detailObjects = array();
            $this->addDocumentSettlement($obj, $detailObjects);

            // Error
            if ($this->responseConf['status'] == 0) {
                return $this->getResponse(true);
            }

            // Clear ids to may be saved in database
            $obj->setId(null);

            // Save object in entity manager
            $this->flags['storage'] = 'db'; // Switch storage to database
            $this->saveForm($form, $obj, true, false); // Doesn't flush data until all objects are inserted

            // Save detail objects in database
            foreach ($detailObjects as $detailObj) {
                // Get object to set again foreign objects, otherwise the save will fail,
                // because entity manager does not recognize the foreign objects saved in session storage
                $detailObj = $this->getObjectFromSS($detailObj->getId());

                // Clear id to may be saved in database
                $sessionIds['documentDetail'][] = $detailObj->getId();
                $detailObj->setId(null);
                parent::saveObject($detailObj, false); // Doesn't flush data until all objects are inserted
            }

            // Flush (persist) all objects in database
            $this->flushEm();

            if($this->responseConf['status'] == 1) {
                $this->updateDocumentsRemainSettlement($obj);

                // Remove objects from session
                $this->deleteObjectFromSS($sessionIds['document']);

                // Config response
                if ($this->responseConf['hasObject']) {
                    $this->responseConf['object'] = $this->normalizeObject($obj); // Object updated
                }

                // Refresh to update fields choices
                $this->refreshConf();

                // Flash messages to display to user
                $this->addFlashMessage(
                    'The data has been updated',
                    'Success',
                    'success'
                );
            } else {
                // Restore session storage id
                $obj->setId($sessionIds['document']);

                $documentDetailIndex = 0;
                foreach ($detailObjects as $detailObj) {
                    $detailObj->setId($sessionIds['documentDetail'][$documentDetailIndex]);
                    $documentDetailIndex++;
                }
            }

            return $this->getResponse(true);
        }

        $this->localConf['templates']['edit'] = 'AccountingBundle:BaseDocument:add-receipt-settlement.html.twig';

        // Render form
        return $this->render($this->localConf['templates']['edit'], array(
            '_conf' => $this->templateConf,
            '_form' => $form->createView()
        ));
    }

    /**
     * [SET ROUTE HERE]
     *
     * Overrides parent method
     * @param Request $request
     * @param $id
     * @return mixed
     */
    public function editInvoiceAction(Request $request, $id)
    {
        $entityContext = $this->getEntityContext();

        // Set configuration
        $this->flags['hasForm'] = true;
        $this->init($request);
        $this->localConf['formTypeClass'] = ('AccountingBundle\Form\\' . ucfirst($entityContext) . 'DocumentInvoiceType');
        // Field to be rendered in form does not necessary, because we will render a specific form
        // (this configuration to Angular "FormService" is defined in "provider")

        $obj = $this->getObject($id);

        // Build form
        $form = $this->createForm($this->localConf['formTypeClass'], $obj);

        // Handle request
        $form->handleRequest($request);

        // Check if is submitted
        if($form->isSubmitted()) {
            if ($obj)
            // Validate dates
            if (!$this->validateDates($obj)) {
                return $this->getResponse(true);
            }

            if ($this->preSaveObject($obj, null)) {
                $this->saveForm($form, $obj);
            }

            return $this->getResponse(true);
        }

        // Render form
        return $this->render('AccountingBundle:BaseDocument:edit-invoice.html.twig', array(
            '_conf' => $this->templateConf,
            '_form' => $form->createView()
        ));
    }

    /**
     * [SET ROUTE HERE]
     *
     * Edit document receipt
     * @param Request $request
     * @param $id
     * @return mixed
     */
    public function editReceiptAction(Request $request, $id)
    {
        $entityContext = $this->getEntityContext();

        // Set configuration
        $this->flags['hasForm'] = true;
        $this->init($request);

        // Retrieve object from session
        $obj = $this->getObject($id);

        // Build form
        $form = $this->createForm('AccountingBundle\Form\\' . ucfirst($entityContext) . 'DocumentReceiptType', $obj);

        // Handle request
        $form->handleRequest($request);

        // Check if is submitted
        if($form->isSubmitted()) {
            // Validate dates
            if (!$this->validateDates($obj)) {
                return $this->getResponse(true);
            }

            if ($this->preSaveObject($obj, null)) {
                $this->saveForm($form, $obj);
            }

            if($this->responseConf['status'] == 1) {
                $this->updateDocumentsRemainSettlement($obj);
            }

            return $this->getResponse(true);
        }

        // Render form
        return $this->render('AccountingBundle:BaseDocument:edit-receipt.html.twig', array(
            '_conf' => $this->templateConf,
            '_form' => $form->createView()
        ));
    }

    /**
     * [SET ROUTE HERE]
     *
     * Edit document payment
     * @param Request $request
     * @param $id
     * @return mixed
     */
    public function editPaymentAction(Request $request, $id)
    {
        $entityContext = $this->getEntityContext();

        // Set configuration
        $this->flags['hasForm'] = true;
        $this->init($request);

        // Retrieve object from session
        $obj = $this->getObject($id);

        // Build form
        $form = $this->createForm('AccountingBundle\Form\\' . ucfirst($entityContext) . 'DocumentReceiptReceiptPaymentType', $obj);

        // Handle request
        $form->handleRequest($request);

        // Check if is submitted
        if($form->isSubmitted()) {
            // Validate dates
            if (!$this->validateDates($obj)) {
                return $this->getResponse(true);
            }

            if ($this->preSaveObject($obj, null)) {
                $this->saveForm($form, $obj);
            }

            return $this->getResponse(true);
        }

        // Render form
        return $this->render('AccountingBundle:BaseDocument:edit-receipt-payment.html.twig', array(
            '_conf' => $this->templateConf,
            '_form' => $form->createView()
        ));
    }

    /**
     * [SET ROUTE HERE]
     *
     * Overrides parent method
     * @param Request $request
     * @param $id
     * @return mixed
     */
    public function editSettlementAction(Request $request, $id)
    {
        $entityContext = $this->getEntityContext();

        // Set configuration
        $this->flags['hasForm'] = true;
        $this->init($request);
        $this->localConf['formTypeClass'] = ('AccountingBundle\Form\\' . ucfirst($entityContext) . 'DocumentReceiptType');

        $obj = $this->getObject($id);

        // Build form
        $form = $this->createForm($this->localConf['formTypeClass'], $obj);

        // Handle request
        $form->handleRequest($request);

        // Check if is submitted
        if($form->isSubmitted()) {
            // Validate dates
            if (!$this->validateDates($obj)) {
                return $this->getResponse(true);
            }

            if ($this->preSaveObject($obj, null)) {
                $this->saveForm($form, $obj);
            }

            if($this->responseConf['status'] == 1) {
                $this->updateDocumentsRemainSettlement($obj);
            }

            return $this->getResponse(true);
        }

        // Render form
        return $this->render('AccountingBundle:BaseDocument:edit-receipt-settlement.html.twig', array(
            '_conf' => $this->templateConf,
            '_form' => $form->createView()
        ));
    }

    /**
     * [SET ROUTE HERE]
     *
     * Edit entity address action (to change default entity address)
     * @param Request $request
     * @param $id
     * @return mixed
     */
    public function editEntityAddressAction(Request $request, $id)
    {
        // Set configuration
        $this->init($request);

        // Retrieve object from storage
        $obj = $this->getObject($id);

        // Save new entity address
        $data = $this->getAndProcessRequestData($request);
        $address_id = ((isset($data['data']) && isset($data['data']['entityAddressObj']))
            ? $data['data']['entityAddressObj']
            : null
        );

        if ($address_id) {
            $entityAddressObj = $this->getRepositoryService('EntityAddress', 'EntitiesBundle')
                ->execute(
                    'findOneById',
                    array(
                        $address_id
                    )
                );

            if (is_object($entityAddressObj)) {
                foreach (['street1', 'street2', 'postCode', 'city', 'region', 'country'] as $field) {
                    $getFieldMethod = 'get' . ucfirst($field);
                    $setFieldMethod = 'setEntity' . ucfirst($field);
                    $obj->$setFieldMethod($entityAddressObj->$getFieldMethod());
                }
            }
        }

        $this->saveObject($obj, true, true);
        return $this->getResponse(true);
    }

    /**
     * [SET ROUTE HERE]
     *
     * Overrides parent method
     * @param Request $request
     * @param $id
     * @return mixed
     */
    public function cancelAction(Request $request, $id)
    {
        // Set configuration
        $this->init($request);

        // Get object
        $obj = $this->getObject($id);
        $getMethod = ('get' . ucfirst($this->getEntityContext()) . 'DocumentTypeObj');
        $documentType = $obj->$getMethod()->getType();

        // Check rules
        $errorMessage = null;

        switch ($documentType) {
            case 'INVOICE':
            case 'RECTIFICATION':
                // Check if this object has any rectification associated. If then, may not be canceled!
                $rectificationDocuments = $this->getLocalRepositoryService()
                    ->execute(
                        'getRectificationDocuments',
                        array($obj)
                    );
                if (count($rectificationDocuments) > 1) {
                    $rectificationDocument = reset($rectificationDocuments);
                    $errorMessage = 'Document was rectified ('.$rectificationDocument['rectificationDocument_code'].').';
                }
            case 'PAYMENT':
                // Check if this object has any settlement associated. If then, may not be canceled, cancel first the settlement!
                if ($obj->getTotal() != $obj->getRemainSettlement()) {
                    $errorMessage = (
                        'Document has settlements ('
                        . ($obj->getTotal() - $obj->getRemainSettlement())
                        . ').<br/> You need to cancel the settlements before.'
                    );
                }
                break;
        }

        // Set error
        if ($errorMessage) {
            $this->responseConf['status'] = 0;
            $this->addFlashMessage(
                $errorMessage,
                'Data not persisted',
                'error'
            );
            return $this->getResponse(true);
        }

        $response = parent::cancelAction($request, $id);

        if ($this->responseConf['status'] == 1) {
            switch ($documentType) {
                case 'INVOICE':
                case 'RECTIFICATION':
                    $this->updateBookingInvoiceStatus($obj);
                    break;
                case 'RECEIPT':
                case 'SETTLEMENT':
                    $this->updateDocumentsRemainSettlement($obj);
                    break;
            }
        }

        return $response;
    }

    /**
     * Overrides parent method
     * @param $object
     * @return $this
     */
    protected function setObjectDefaultValues($object)
    {
        parent::setObjectDefaultValues($object);

        if (empty($object->getId())) {
            // Set Store Data (this info is saved in document, is static)
            $storeObj = $object->getStoreObj();
            $storeAddressObj = $storeObj->getStoreAddressObj();
            $object->setStoreLegalName($storeObj->getLegalName(true));
            $object->setStoreTaxNumber($storeObj->getTaxNumber(true));
            foreach (['street1', 'street2', 'postCode', 'city', 'region', 'country'] as $field) {
                $getFieldMethod = 'get' . ucfirst($field);
                $setFieldMethod = 'setStore' . ucfirst($field);
                $object->$setFieldMethod($storeAddressObj->$getFieldMethod());
            }

            // Set totals
            $object->setSubTotal(0)
                ->setTotalVat(0)
                ->setIsAccessed(0);
        } else {
            $entityContextUC = $this->getEntityContext(true);

            // Set entity data
            $getMethod = ('get'.$entityContextUC.'Obj');
            $entityTypeObj = $object->$getMethod();
            $entityObj = $entityTypeObj->getEntityObj();
            $entityAddressObj = $this->getRepositoryService('EntityAddress', 'EntitiesBundle')
                ->execute('getForDocumentsByEntity', array($entityObj));
            $object->setEntityLegalName($entityObj->getLegalName(true));
            $object->setEntityTaxNumber($entityObj->getTaxNumber());
            foreach (['street1', 'street2', 'postCode', 'city', 'region', 'country'] as $field) {
                $getFieldMethod = 'get' . ucfirst($field);
                $setFieldMethod = 'setEntity' . ucfirst($field);
                $object->$setFieldMethod($entityAddressObj->$getFieldMethod());
            }
        }

        return $this;
    }

    /**
     * Set default dates.
     * Date (needs to be consistent with the sequence date/number) and due date
     * @param $object
     * @return $this
     */
    protected function setDefaultDates($object) {
        $limitDateRange = $this->getAndSetResponseLimitDateRange($object);

        // Set object default dates
        $object->setDate($limitDateRange['max']) // Today
            ->setDueDate(new \DateTime('+30 day'));

        return $this;
    }

    /**
     * Validate dates.
     * Date (needs to be consistent with the sequence date/number) and due date
     * @param $object
     * @return boolean
     */
    protected function validateDates($object) {
        $entityContextUC = $this->getEntityContext(true);
        $limitDateRange = $this->getAndSetResponseLimitDateRange($object);

        $getMethod = ('get'.$entityContextUC.'DocumentTypeObj');
        if (($object->getDate() < $limitDateRange['min'])
            || ($object->getDate() > $limitDateRange['max'])
            || (
                ($object->getDate() > $object->getDueDate())
                && ($object->$getMethod()->getType() != 'RECEIPT')
            )
        ) {
            $this->responseConf['status'] = 0;
            $this->addFlashMessage(
                'Invalid date.',
                'Data not persisted',
                'error'
            );
            return false;
        }

        return true;
    }

    /**
     * Get limit date range and set it in response conf
     * @param $object
     * @return array
     */
    protected function getAndSetResponseLimitDateRange($object) {
        // Set setting flag to determines the code field
        // (it's need also to validate date and determine date ranges to template)
        $this->setSettingFlag($object);

        // By default you can select a date until 5 days ago from today
        $limitDateRange = array('min' => (new \DateTime('-5 day')), 'max' => (new \DateTime()));

        $surroundingObjects = $this->getSurroundingObjects($object);

        // Limit dates between 'prev' and 'next' objects
        if ($surroundingObjects['prev'] && ($surroundingObjects['prev']->getDate() > $limitDateRange['min'])) {
            $limitDateRange['min'] = $surroundingObjects['prev']->getDate();
        }
        if ($surroundingObjects['next']) {
            $limitDateRange['max'] = $surroundingObjects['next']->getDate();

            // It's necessary when $surroundingObjects['prev'] is empty
            if (empty($surroundingObjects['prev']) && ($surroundingObjects['next']->getDate() < $limitDateRange['min'])) {
                $limitDateRange['min'] = $surroundingObjects['next']->getDate();
            }
        }

        // Set limit date range for template validations
        $this->templateConf['localData']['data']['dateRange'] = array(array(
            'startDate' => $object->normalizeDate($limitDateRange['min']),
            'endDate' => $object->normalizeDate($limitDateRange['max'])
        ));

        return $limitDateRange;
    }

    /**
     * Set Response Store Info
     * Store info to be used in template
     * @param $storeObj
     * @return $this
     */
    protected function setResponseStoreInfo($storeObj) {
        // Set store optional info in local data (this info is not saved in document, is dynamic)
        $this->templateConf['localData']['data']['storeInfo'] = array_merge(
            $this->getRepositoryService('StorePhone', 'AdminBundle')
                ->execute('getForDocumentsByStore', array($storeObj)),
            $this->getRepositoryService('StoreEmail', 'AdminBundle')
                ->execute('getForDocumentsByStore', array($storeObj)),
            $this->getRepositoryService('StoreLink', 'AdminBundle')
                ->execute('getForDocumentsByStore', array($storeObj))
        );

        $storeLogoImageObj = $this->getRepositoryService('StoreLogoImage', 'AdminBundle')
            ->execute(
                'findOneBy',
                array(array(
                    'storeObj' => $storeObj,
                    'isEnabled' => true
                ))
            );

        $this->templateConf['localData']['data']['storeLogo']
            = ($storeLogoImageObj ? $storeLogoImageObj->getPath() : null);

        return $this;
    }

    /**
     * Set Response Document Info
     * Document info to be used in template
     * @param $object
     * @return $this
     */
    protected function setResponseDocumentInfo($object) {
        $entityContextUC = $this->getEntityContext(true);
        $entityContext = $this->getEntityContext();

        $getMethod = ('get' . ucfirst($this->getEntityContext()) . 'DocumentTypeObj');
        $documentTypeSettingObj = $this->getRepositoryService($entityContextUC.'DocumentTypeSetting', 'AccountingBundle')
            ->execute(
                'findOneBy',
                array(array(
                    ($entityContext.'DocumentTypeObj') => $object->$getMethod(),
                    'storeObj' => $object->getStoreObj(),
                    'isEnabled' => true
                ))
            );

        // If document type setting specific by store is not defined, so try to get the general setting for all stores
        if (!$documentTypeSettingObj) {
            $documentTypeSettingObj = $this->getRepositoryService($entityContextUC.'DocumentTypeSetting', 'AccountingBundle')
                ->execute(
                    'findOneBy',
                    array(array(
                        ($entityContext.'DocumentTypeObj') => $object->$getMethod(),
                        'storeObj' => null,
                        'isEnabled' => true
                    ))
                );
        }

        $this->templateConf['localData']['data']['documentInfo'] = array(
            'footer' => ($documentTypeSettingObj ? $documentTypeSettingObj->getFooter() : null)
        );

        return $this;
    }

    /**
     * Set setting flag
     * @param $object
     * @return $this
     * @throws \Exception
     */
    protected function setSettingFlag($object) {
        // Set only once
        if (!empty($this->flags['setting'])) {
            return $this;
        }

        $entityContextUC = $this->getEntityContext(true);
        $entityContext = $this->getEntityContext();

        $getMethod = ('get' . ucfirst($entityContext) . 'DocumentTypeObj');
        if($object->$getMethod()) {
            $this->flags['setting'] = array(
                'Bundle' => 'AccountingBundle',
                'entity' => $entityContextUC.'DocumentTypeSetting',
                'criteria' => array(
                    array(
                        'field' => ($entityContext . 'DocumentTypeObj'),
                        'expr' => 'eq',
                        'value' => $object->$getMethod() // Get document type
                    )
                )
            );

            return $this;
        }

        throw new \Exception('Document type not defined to determine settings for "Code".');
    }

    /**
     * Update booking invoice status
     * @param $object
     * @return $this
     */
    protected function updateBookingInvoiceStatus($object) {
        // Check if there are no errors in previous updates
        if ($this->responseConf['status'] == 1) {
            $entityContext = $this->getEntityContext();
            $entityContextUC = ucfirst($entityContext);

            // Get document detail objects
            $bookingArr = $this->getRepositoryService(
                $entityContextUC . 'DocumentInvoiceDetail',
                'AccountingBundle'
            )->execute(
                'queryBuilder',
                array(
                    array(
                        'fields' => array(
                            $entityContext . 'DocumentObj',
                            'bookingObj'
                        ),
                        'criteria' => array(
                            array('field' => 'isEnabled', 'expr' => 'eq', 'value' => 1),
                            array('field' => $entityContext . 'DocumentObj', 'expr' => 'eq', 'value' => $object->getId()),
                            array('field' => $entityContext . 'Document.isEnabled', 'expr' => 'eq', 'value' => 1)
                        )
                    )
                )
            );

            if (count($bookingArr) > 0) {
                $bookingObjArr = array();
                foreach ($bookingArr as $booking) {
                    if ($booking['bookingObj']) {
                        // To avoid process the same booking multiple times
                        $bookingObjArr[$booking['bookingObj']] = $this->getRepositoryService('Booking', 'BookingBundle')
                            ->execute(
                                'findOneById',
                                array($booking['bookingObj'])
                            );
                    }
                }

                if (count($bookingObjArr) > 0) {
                    foreach ($bookingObjArr as $bookingObj) {
                        // Update booking invoice status
                        BaseBookingController::setInvoiceStatus($this, $bookingObj);
                    }
                }
            }
        }

        return $this;
    }

    /**
     * Update documents remain settlement
     * @param $object
     * @return $this
     */
    protected function updateDocumentsRemainSettlement($object) {
        $entityContext = $this->getEntityContext();
        $entityContextUC = ucfirst($entityContext);

        // Update remain settlement
        $documentReceiptSettlementObjArr = $this->getRepositoryService($entityContextUC . 'DocumentReceiptSettlement', 'AccountingBundle')
            ->execute(
                'findBy' . $entityContextUC . 'DocumentObj',
                array($object)
            );

        if (is_array($documentReceiptSettlementObjArr)) {
            $getMethod = ('getSettlement' . $entityContextUC . 'DocumentObj');
            foreach ($documentReceiptSettlementObjArr as $documentReceiptSettlementObj) {
                $settlementDocumentObj = $documentReceiptSettlementObj->$getMethod();
                $this->getRepositoryService($entityContextUC . 'DocumentReceiptSettlement', 'AccountingBundle')
                    ->execute('setDocumentRemainSettlement', array($settlementDocumentObj));

                parent::saveObject($settlementDocumentObj);
            }
        }

        return $this;
    }

    /**
     * Set Current Account Total Vat Split By Code to response conf
     * @param $object
     * @return $this
     */
    protected function setResponseDocumentTotalVatSplitByCode($object) {
        $entityContextUC = $this->getEntityContext(true);

        switch ($this->flags['storage']) {
            case 'session':
                // Get detail objects
                $detailObjects = $this->container->get('app.service.session_storage')->getChildObjects(
                    $object->getId(),
                    $entityContextUC . 'DocumentInvoiceDetail'
                );

                // Calc totals
                $totalVatSplitByCode = array();
                foreach ($detailObjects as $detailObj) {
                    // Rebuild object to fill objects dependencies, otherwise only ids are available in dependencies
                    $detailObj = $this->getObjectFromSS($detailObj->getId());
                    $vatCodeObj = $detailObj->getVatCodeObj();
                    if (isset($totalVatSplitByCode[$vatCodeObj->getId()])) {
                        $totalVatSplitByCode[$vatCodeObj->getId()]['subTotal'] += $detailObj->getSubTotal();
                        $totalVatSplitByCode[$vatCodeObj->getId()]['totalVat'] += $detailObj->getTotalVat();
                        $totalVatSplitByCode[$vatCodeObj->getId()]['total'] += $detailObj->getTotal();
                    } else {
                        $totalVatSplitByCode[$vatCodeObj->getId()] = array(
                            'name' => $vatCodeObj->getName(),
                            'description' => $vatCodeObj->getDescription(),
                            'percentage' => $vatCodeObj->getPercentage(),
                            'subTotal' => $detailObj->getSubTotal(),
                            'totalVat' => $detailObj->getTotalVat(),
                            'total' => $detailObj->getTotal()
                        );
                    }
                }

                $this->templateConf['localData']['data']['totalVatSplitByCode'] = array_values($totalVatSplitByCode);
                break;
            default:
                $this->templateConf['localData']['data']['totalVatSplitByCode']
                    = $this->getRepositoryService($entityContextUC . 'DocumentInvoiceDetail', 'AccountingBundle')
                    ->execute(
                        'getDocumentTotalVatSplitByCode',
                        array($object)
                    );
        }

        return $this;
    }

    /**
     * Set Selected Invoice Detail
     * @param $object
     * @param $options
     * @return $this
     */
    protected function setSelectedInvoiceDetail($object, $options)
    {
        // No options (id's of selected objects), no results
        if (empty($options)) {
            return $this;
        }

        // Totals for documentObj
        $sumSubTotal = $sumTotalVat = 0;

        $documentInvoiceDetailObjArr = BaseDocumentInvoiceDetailController
            ::newObjectsFromBookingServicePrice($this, $object, $options);

        foreach ($documentInvoiceDetailObjArr as $documentInvoiceDetailObj) {
            // Save object in session
            // Set the parent for DocumentInvoiceDetail objects
            $localParent = $this->flags['parent'];
            $this->flags['parent'] = $object->getId();
            parent::saveForm(null, $documentInvoiceDetailObj);
            $this->flags['parent'] = $localParent; // Reset to local parent

            $sumSubTotal += $documentInvoiceDetailObj->getSubTotal();
            $sumTotalVat += $documentInvoiceDetailObj->getTotalVat();
        }

        // Update document object
        $object->setSubTotal($sumSubTotal);
        $object->setTotalVat($sumTotalVat);
        $object->setRemainSettlement($object->getTotal());

        return $this;
    }

    /**
     * Set Selected Receipt Detail
     * @param $object
     * @param $options
     * @return $this
     */
    protected function setSelectedReceiptDetail($object, $options = array())
    {
        // No options (id's of selected objects), no results
        if (empty($options)) {
            return $this;
        }

        $documentReceiptSettlementObjArr = BaseDocumentReceiptSettlementController
            ::newObjectsFromSettlementDocument($this, $object, $options);

        foreach ($documentReceiptSettlementObjArr as $documentReceiptSettlementObj) {
            // Save object in session
            // Set the parent for DocumentReceiptSettlement objects
            $localParent = $this->flags['parent'];
            $this->flags['parent'] = $object->getId();
            parent::saveForm(null, $documentReceiptSettlementObj);
            $this->flags['parent'] = $localParent; // Reset to local parent
        }

        return $this;
    }

    /**
     * Set Selected Rectification
     * @param $object
     * @param $options
     * @return $this
     */
    protected function setSelectedRectification($object, $options)
    {
        // No options (id's of selected objects), no results
        if (empty($options)) {
            return $this;
        }

        $documentInvoiceRectificationObjArr = BaseDocumentInvoiceRectificationController
            ::newObjectsFromInvoiceDocument($this, $object, $options);

        $entityContextUC = $this->getEntityContext(true);
        $getMethod = 'get' . $entityContextUC . 'DocumentInvoiceDetailObj';

        foreach ($documentInvoiceRectificationObjArr as $documentInvoiceRectificationObj) {
            // Save object in session
            // Set the parent for DocumentInvoiceDetail objects
            $localParent = $this->flags['parent'];
            $this->flags['parent'] = $object->getId();
            $documentInvoiceDetailObj = $documentInvoiceRectificationObj->$getMethod();
            parent::saveForm(null, $documentInvoiceDetailObj);
            parent::saveForm(null, $documentInvoiceRectificationObj);
            $this->flags['parent'] = $localParent; // Reset to local parent
        }

        // Update document totals
        BaseDocumentInvoiceDetailController::setDocumentTotals($this, $object);

        return $this;
    }

    /**
     * Add Document Invoice Detail
     * @param $request
     * @param $object
     * @param $detailObjects
     * @return $this
     */
    protected function addDocumentInvoiceDetail($request, &$object, &$detailObjects)
    {
        $entityContextUC = $this->getEntityContext(true);
        $getMethod = 'get' . $entityContextUC . 'DocumentTypeObj';
        $documentType = $object->$getMethod()->getType();
        $isRectification = ($documentType == 'RECTIFICATION');

        // Entity child name
        $entityName = ($entityContextUC . 'DocumentInvoice' . ($isRectification ?
                'Rectification' :
                'Detail'
            )
        );

        // Get detail objects
        $detailObjects = $this->container->get('app.service.session_storage')->getChildObjects(
            $object->getId(),
            $entityName
        );

        // Validate totals
        $documentTotals = array('subTotal' => 0, 'totalVat' => 0, 'total' => 0);
        $submittedData = $this->getRequestData($request)['form'];
        $getMethod = 'get' . $entityContextUC . 'DocumentInvoiceDetailObj';
        foreach ($detailObjects as $detailObj) {
            $detailObj = $isRectification ? $detailObj->$getMethod() : $detailObj;

            // Note: Detail is already validated when are determined the default values,
            // and when are submitted in your own form
            $documentTotals['subTotal'] += $detailObj->getSubTotal();
            $documentTotals['totalVat'] += $detailObj->getTotalVat();
            $documentTotals['total'] += $detailObj->getTotal();
        }
        $errorMessage = null;
        $priceService = $this->get('app.service.price');
        if ($documentTotals['total'] <= 0) {
            $errorMessage = 'Document value should be greater than zero.';
        } elseif (!$priceService->isEqual($submittedData['subTotal'], $documentTotals['subTotal'])) {
            $errorMessage = ($submittedData['subTotal'].' Does not match with '.$documentTotals['subTotal']);
        } elseif (!$priceService->isEqual($submittedData['totalVat'], $documentTotals['totalVat'])) {
            $errorMessage = ($submittedData['totalVat'].' Does not match with '.$documentTotals['totalVat']);
        } elseif (!$priceService->isEqual($submittedData['total'], $documentTotals['total'])) {
            $errorMessage = ($submittedData['total'].' Does not match with '.$documentTotals['total']);
        }

        // Set error
        if ($errorMessage) {
            $this->responseConf['status'] = 0;
            $this->addFlashMessage(
                ('Invalid total was detected.<br/>' . $errorMessage),
                'Data not persisted',
                'error'
            );
            return $this;
        }

        if (!$isRectification) { // Validation of BookingServicePrice entries (can't be repeated)
            $bookingServicePriceIds = array();
            foreach ($detailObjects as $detailObj) {
                // Check if BookingServicePrice is already added
                $bookingServicePriceObj = $detailObj->getBookingServicePriceObj();
                if (empty($bookingServicePriceObj)) {
                    continue;
                }
                $bookingServicePriceId = $bookingServicePriceObj->getId();
                if (in_array($bookingServicePriceId, $bookingServicePriceIds)) {
                    $this->responseConf['status'] = 0;
                    $this->addFlashMessage(
                        'Detail line (' . $bookingServicePriceObj->getDescription() . ') duplication not allowed.',
                        'Data not persisted',
                        'error'
                    );
                    return $this;
                }
                $bookingServicePriceIds[] = $bookingServicePriceId;
            }
        } else { // Validation for rectification documents detail
            // Controls invoice detail in rectification stage, to avoid repeat the same invoice detail
            // (otherwise the user can rectified the same invoice detail multiple times and create an inquiry rectification)
            $invoiceDetailIds = array();
            foreach ($detailObjects as $detailObj) {
                // Check if invoice detail is already added
                $getMethod = 'getRectification' . $entityContextUC . 'DocumentInvoiceDetailObj';
                $invoiceDetailId = $detailObj->$getMethod()->getId();
                if (in_array($invoiceDetailId, $invoiceDetailIds)) {
                    $this->responseConf['status'] = 0;
                    $this->addFlashMessage(
                        'Document detail line (' . $detailObj->$getMethod()->getDescription() . ') duplication not allowed.',
                        'Data not persisted',
                        'error'
                    );
                    return $this;
                }
                $invoiceDetailIds[] = $invoiceDetailId;
            }
        }

        // Set document totals
        $object->setSubTotal($documentTotals['subTotal']);
        $object->setTotalVat($documentTotals['totalVat']);
        $object->setRemainSettlement($object->getTotal());

        return $this;
    }

    /**
     * Add Document Receipt Detail
     * @param $object
     * @param $detailObjects
     * @return $this
     */
    protected function addDocumentReceiptDetail(&$object, &$detailObjects)
    {
        $entityContextUC = $this->getEntityContext(true);
        $priceService = $this->get('app.service.price');

        $getMethod = 'get' . $entityContextUC . 'DocumentTypeObj';
        $documentTypeObj = $object->$getMethod();
        $hasSettlement = ($documentTypeObj->getType() == 'RECEIPT');

        $detailObjects = array(); // Content "settlement" and "payment" objects
        $documentTotals = array('settlement' => 0, 'payment' => 0);

        // RECEIPT WITH SETTLEMENT
        if ($hasSettlement) {
            // Get settlement objects
            $settlementObjects = $this->container->get('app.service.session_storage')->getChildObjects(
                $object->getId(),
                $entityContextUC . 'DocumentReceiptSettlement'
            );

            // Controls invoice documents in settlement stage, to avoid repeat the same invoice document
            // (otherwise the user can pay the same invoice document multiple times in the same payment
            // and create an inquiry payment)
            $invoiceDocumentIds = array();
            foreach ($settlementObjects as $settlementObject) {
                // Check if value is correct
                $getMethod = 'getSettlement' . $entityContextUC . 'DocumentObj';
                $invoiceDocumentObj = $settlementObject->$getMethod();
                $missingSettlement = $this->getRepositoryService($entityContextUC . 'DocumentReceiptSettlement', 'AccountingBundle')
                    ->execute('getDocumentRemainSettlement', array($invoiceDocumentObj));

                if (($settlementObject->getValue() <= 0) || $priceService->isGreater($settlementObject->getValue(), $missingSettlement)) {
                    $this->responseConf['status'] = 0;
                    $this->addFlashMessage(
                        'Settlement value must be > 0 and < or equal to ' . $missingSettlement,
                        'Data not persisted',
                        'error'
                    );

                    return $this;
                }

                // Check if invoice document is already added
                $invoiceDocumentId = $invoiceDocumentObj->getId();
                if (in_array($invoiceDocumentId, $invoiceDocumentIds)) {
                    $this->responseConf['status'] = 0;
                    $this->addFlashMessage(
                        'Settlement document (' . $invoiceDocumentObj->getCode() . ') duplication not allowed.',
                        'Data not persisted',
                        'error'
                    );

                    return $this;
                }
                $invoiceDocumentIds[] = $invoiceDocumentId;

                $documentTotals['settlement'] += $settlementObject->getValue();
                $detailObjects[] = $settlementObject;
            }
        }

        // Get payment objects
        $paymentObjects = $this->container->get('app.service.session_storage')->getChildObjects(
            $object->getId(),
            $entityContextUC.'DocumentReceiptPayment'
        );

        foreach ($paymentObjects as $paymentObject) {
            // Check if value is correct
            if ($paymentObject->getValue() <= 0) {
                $this->responseConf['status'] = 0;
                $this->addFlashMessage(
                    'Payment value must be >= 0.',
                    'Data not persisted',
                    'error'
                );

                return $this;
            }

            $documentTotals['payment'] += $paymentObject->getValue();
            $detailObjects[] = $paymentObject;
        }

        // Check totals
        $errorMessage = null;
        if ($documentTotals['payment'] <= 0) {
            $errorMessage = 'Document value should be greater than zero.';
        } elseif ($hasSettlement && !$priceService->isEqual($documentTotals['settlement'], $documentTotals['payment'])) {
            $errorMessage = (
                'Total of settlement (' . $documentTotals['settlement']
                . ') does not match with total of payment ('.$documentTotals['payment'] . ')'
            );
        }

        // Set error
        if ($errorMessage) {
            $this->responseConf['status'] = 0;
            $this->addFlashMessage(
                ('Invalid total was detected.<br/>' . $errorMessage),
                'Data not persisted',
                'error'
            );
            return $this;
        }

        // Set document totals
        $object->setSubTotal($documentTotals['payment']);
        $object->setTotalVat(0);
        $object->setRemainSettlement($hasSettlement ? 0 : $documentTotals['payment']);

        return $this;
    }

    /**
     * Add Document Settlement
     * @param $object
     * @param $detailObjects
     * @return $this
     */
    protected function addDocumentSettlement(&$object, &$detailObjects)
    {
        $entityContextUC = $this->getEntityContext(true);
        $priceService = $this->get('app.service.price');

        $detailObjects = array(); // Content "settlement" and "payment" objects
        $documentTotals = array('CREDIT' => 0, 'DEBIT' => 0);

        // Get settlement objects
        $settlementObjects = $this->container->get('app.service.session_storage')->getChildObjects(
            $object->getId(),
            $entityContextUC . 'DocumentReceiptSettlement'
        );

        // Controls invoice documents in settlement stage, to avoid repeat the same invoice document
        // (otherwise the user can pay the same invoice document multiple times in the same payment
        // and create an inquiry payment)
        $invoiceDocumentIds = array();
        foreach ($settlementObjects as $settlementObject) {
            // Check if value is correct
            $getMethod = 'getSettlement' . $entityContextUC . 'DocumentObj';
            $invoiceDocumentObj = $settlementObject->$getMethod();
            $missingSettlement = $this->getRepositoryService($entityContextUC . 'DocumentReceiptSettlement', 'AccountingBundle')
                ->execute('getDocumentRemainSettlement', array($invoiceDocumentObj));

            if (($settlementObject->getValue() <= 0) || $priceService->isGreater($settlementObject->getValue(), $missingSettlement)) {
                $this->responseConf['status'] = 0;
                $this->addFlashMessage(
                    'Settlement value must be > 0 and < or equal to ' . $missingSettlement,
                    'Data not persisted',
                    'error'
                );

                return $this;
            }

            // Check if invoice document is already added
            $invoiceDocumentId = $invoiceDocumentObj->getId();
            if (in_array($invoiceDocumentId, $invoiceDocumentIds)) {
                $this->responseConf['status'] = 0;
                $this->addFlashMessage(
                    'Settlement document (' . $invoiceDocumentObj->getCode() . ') duplication not allowed.',
                    'Data not persisted',
                    'error'
                );

                return $this;
            }
            $invoiceDocumentIds[] = $invoiceDocumentId;

            $getMethod = 'get' . $entityContextUC . 'DocumentTypeObj';
            $invoiceDocumentTypeOperation = $invoiceDocumentObj->$getMethod()->getOperation();
            $documentTotals[$invoiceDocumentTypeOperation] += $settlementObject->getValue();
            $detailObjects[] = $settlementObject;
        }

        // Check totals
        $errorMessage = null;
        if ($documentTotals['DEBIT'] <= 0) {
            $errorMessage = 'No documents added!';
        } elseif (!$priceService->isEqual($documentTotals['DEBIT'], $documentTotals['CREDIT'])) {
            $errorMessage = (
                'Total of debit (' . $documentTotals['DEBIT']
                . ') does not match with total of credit ('.$documentTotals['CREDIT'] . ')'
            );
        }

        // Set error
        if ($errorMessage) {
            $this->responseConf['status'] = 0;
            $this->addFlashMessage(
                ($errorMessage),
                'Data not persisted',
                'error'
            );
            return $this;
        }

        // Set document totals
        $object->setSubTotal($documentTotals['DEBIT']);
        $object->setTotalVat(0);
        $object->setRemainSettlement(0);

        return $this;
    }

    /**
     * Overrides parent method.
     * @param $object
     * @param $data (usually the form data)
     * @return boolean (true to continue, false to abort)
     */
    protected function preSaveObject(&$object, $data) {
        return $this->validateDocumentAclByFormContext($this, $object, 'edit');
    }

    /**
     * Overrides parent method
     * @param $object
     * @return boolean
     */
    protected function preCancelObject($object) {
        return $this->validateDocumentAclByFormContext($this, $object, 'cancel');
    }

    /**
     * Validate Document Acl By Form Context
     * @param $controller
     * @param $documentObj
     * @param $aclContext ([edit, cancel])
     * @return bool
     */
    static function validateDocumentAclByFormContext($controller, $documentObj, $aclContext = 'edit') {
        // No validation for form add context
        if ($controller->getObjectFormContext($documentObj) == 'add') {
            return true;
        }

        $errorMessage = null;

        $documentIsEnabled = $documentObj->getIsEnabled();
        if (empty($documentIsEnabled) && ($aclContext != 'cancel')) {
            // If document is canceled does not be changed (if document is changed, the changes will not have any effect)
            $errorMessage = 'This document is canceled.';
        } else {
            $entityContextUC = $controller->getEntityContext(true);

            // Check document ACL
            $getMethod = ('get' . $entityContextUC . 'DocumentTypeObj');
            $documentTypeObj = $documentObj->$getMethod();
            $documentTypeAcl = $documentTypeObj->getAcl();
            $aclContextConf = array(); // Acl context configuration
            if ($aclContext == 'cancel') {
                // If document is canceled does not need to be canceled again
                $aclContextConf = array(
                    'acl' => array(4, 7),
                    'messageKey' => 'cancellation'
                );
            } else {
                // If document is canceled does not be changed (if document is changed, the changes will not have any effect)
                $aclContextConf = array(
                    'acl' => array(2, 7),
                    'messageKey' => 'edition'
                );
            }

            if (!in_array($documentTypeAcl, $aclContextConf['acl'])) { // Does not may be edited
                $errorMessage = 'Document Type definition does not allow '.$aclContextConf['messageKey'].'.';
            } else { // Can be edited, validate the acl target docs
                $documentTypeAclTargetDocs = $documentTypeObj->getAclTargetDocs();
                switch ($documentTypeAclTargetDocs) {
                    case 'NOT_ACCESSED':
                        $documentIsAccessed = $documentObj->getIsAccessed();
                        if (!empty($documentIsAccessed)) {
                            $errorMessage = 'Document Type definition does not allow '.$aclContextConf['messageKey'].' to accessed documents.';
                        }
                }
            }
        }

        // Set error
        if ($errorMessage) {
            $controller->responseConf['status'] = 0;
            $controller->addFlashMessage(
                $errorMessage,
                'Data not persisted',
                'error'
            );
            return false;
        }

        return true;
    }


    ////////////////////////////////////////////////////
    // METHODS TO HANDLE WITH BOOKING FILTER
    /////////////////////////////////////////////////////////////////////////////////////////////////////////

    /**
     * [SET ROUTE HERE]
     *
     * Get objects by booking criteria
     * @param Request $request
     * @param $booking (to filter documents by booking, for booking context)
     * @param $id
     * @return mixed
     */
    public function getByBookingAction(Request $request, $booking, $id)
    {
        // Set configuration
        $this->init($request);

        // Filter by booking
        $this->localConf['search']['conf'] = array('localData' => array(
            'booking' => array('id' => $booking, 'repositoryService' => $this->getLocalRepositoryService())
        ));

        return $this->getAction($request, $id);
    }

    /**
     * [DEFINE ROUTE HERE (need to define a default value for booking,
     * so route can be generated by conf without provide a booking id)]
     *
     * Get all conf and data by booking criteria
     * @param Request $request
     * @param $booking (to filter documents by booking, for booking context)
     * @return mixed
     */
    public function dataByBookingAction(Request $request, $booking)
    {
        // Set configuration
        $this->init($request);

        // Filter by booking
        $this->localConf['search']['conf'] = array('localData' => array(
            'booking' => array('id' => $booking, 'repositoryService' => $this->getLocalRepositoryService())
        ));

        // Route
        $this->templateConf['route']['get'] = $this->templateConf['route']['getByBooking'];
        $this->templateConf['route']['get']['url'] .= '/' . $booking;

        // Extra data
        $this->templateConf['extraData']['template'] = array(
            'class' => '-merge-view',
            'hasMergeHeader' => true
        );

        return $this->dataAction($request);
    }


    ////////////////////////////////////////////////////
    // METHODS TO HANDLE WITH SETTLEMENT FORMS
    /////////////////////////////////////////////////////////////////////////////////////////////////////////

    /**
     * Initialization for settlement context
     * @param Request $request
     * @param $targetDocument (target document to filter by entity and document type operation)
     * @param $booking (booking id, to filter by booking)
     * @return $this
     * @throws \Exception
     */
    protected function initForSettlement(Request $request, $targetDocument, $booking = null)
    {
        // Set configuration only once
        if($this->isInitialized) { return $this; }

        // Target document is a mandatory parameter, is not validated automatically because is not a parent
        if (empty($targetDocument)) {
            throw new \Exception('Configuration cannot be set, missing arguments (target document)!');
        }

        // Flags, enable stores sharing
        $entityContext = $this->getEntityContext();
        $this->flags['storeAclResource'] = 'shareCurrentAccounts:'.$entityContext; // Shared resource by stores

        $this->templateConf['route'] = array();

        parent::init($request);

        // Route. To refresh and search action in view
        $this->templateConf['route'] = array(
            'get' => array(
                'name' => '_accounting__'.$entityContext.'_document__get_for_settlement',
                'url' => $this->generateUrl(
                    '_accounting__'.$entityContext.'_document__get_for_settlement',
                    array('targetDocument' => $targetDocument, 'booking' => $booking)
                )
            )
        );

        // Actions
        $this->templateConf['actions'] = array(
            'search' => true,
            'checkAll' => true
        );

        // Fields
        $this->templateConf['fields'] = array_merge(
            $this->templateConf['fields'],
            array(
                'view' => array(
                    'documentType_name', 'code', 'total', 'date', 'dueDate'
                ),
                'form' => array()
            )
        );

        // Search
        $this->templateConf['search'] = array_merge(
            $this->templateConf['search'],
            array(
                'fields' => $this->templateConf['fields']['view'],
                'criteria' => array(),
                'orderBy' => array(
                    array('field' => 'date', 'value' => 'DESC') // Last emission appears first
                )
            )
        );

        $this->templateConf['extraData']['template'] = array(
            'class' => '-merge-view'
        );

        if ($booking) {
            // Filter by booking
            $this->localConf['search']['conf'] = array('localData' => array('booking' => array(
                'id' => $booking,
                'repositoryService' => $this->getLocalRepositoryService()
            )));
        }

        return $this;
    }

    /**
     * [SET ROUTE HERE]
     *
     * Get For Settlement (get objects to form)
     * @param Request $request
     * @param $targetDocument (target document to filter by entity and document type operation)
     * @param $booking (booking id, to filter by booking)
     * @return mixed
     */
    public function getForSettlementAction(Request $request, $targetDocument, $booking = null)
    {
        // Set configuration
        $this->initForSettlement($request, $targetDocument, $booking);

        // Process request
        $this->getAndProcessRequestData($request);

        $objects = self::getObjectsBySearchForSettlement($this, array(), $targetDocument);

        // Config response
        $this->responseConf['hasObjects'] = true;
        $this->responseConf['objects'] = $objects;

        return $this->getResponse(true);
    }

    /**
     * [SET ROUTE HERE]
     *
     * Get data for settlement
     * This functions needs to be here in this controller, because DataBox and forms needs this configuration info
     * @param Request $request
     * @param $targetDocument (target document to filter by entity and document type operation)
     * @param $booking (booking id, to filter by booking)
     * @return mixed
     */
    public function dataForSettlementAction(Request $request, $targetDocument, $booking = null)
    {
        // Set configuration
        $this->initForSettlement($request, $targetDocument, $booking);

        $objectsArr = self::getObjectsBySearchForSettlement($this, array(), $targetDocument);

        // Config response
        $this->responseConf['hasConf'] = true;
        $this->responseConf['hasObjects'] = true;
        $this->responseConf['objects'] = $objectsArr;

        return $this->getResponse(true);
    }

    /**
     * Get Objects by search for Settlement
     * @param $controller
     * @param $options
     * @param $targetDocument (target document to filter by entity and document type operation)
     * @return array
     */
    static function getObjectsBySearchForSettlement($controller, $options = array(), $targetDocument = null)
    {
        $entityContextUC = $controller->getEntityContext(true);

        // Set options only if it's not defined. If options are defined, id's are provided in criteria,
        // so we do not need to add any more information (including in criteria)
        $hasOptionsByParam = (!empty($options));

        if (!$hasOptionsByParam) {
            $options = $controller->getSearch();

            if (!empty($options['limit'])) { // Pagination enabled
                $options['limit']++; // Used to control the pagination
            }
        }

        // Target document object
        $targetDocumentObj = (empty($targetDocument) ? null : $controller->getObject($targetDocument));

        $objects = $controller->getRepositoryService($entityContextUC.'Document', 'AccountingBundle')
            ->execute(
                'getForSettlement',
                array($options, $targetDocumentObj)
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