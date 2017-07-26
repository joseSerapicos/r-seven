<?php

namespace BookingBundle\Controller;

use AccountingBundle\Controller\ClientDocumentInvoiceRectificationController;
use AccountingBundle\Entity\ClientDocument;
use AccountingBundle\Entity\ClientDocumentInvoiceDetail;
use AccountingBundle\Entity\ClientDocumentInvoiceRectification;
use AccountingBundle\Entity\ClientDocumentReceiptSettlement;
use AppBundle\Controller\BaseEntityChildController;
use Sensio\Bundle\FrameworkExtraBundle\Configuration\Route;
use Symfony\Component\HttpFoundation\Request;

class TravelBookingClientDocumentController extends BaseEntityChildController
{
    /**
     * Overrides parent method
     * @param Request $request
     * @param $parents
     * @param $label (set label when you don't have the route in modules/menus tree)
     * @return $this
     */
    protected function initChild(Request $request, $parents, $label = 'Client Current Account')
    {
        // Set configuration only once
        if($this->isInitialized) { return $this; }

        // Parent route
        $this->parentConf = array(
            'travelBooking' => array('route' => '_booking__travel_booking__index')
        );

        // Route
        $this->templateConf['route'] = array(
            'new' => array(
                'name' => '_booking__travel_booking_client_document__new'
            ),
            'get' => array(
                'name' => '_booking__travel_booking_client_document__get'
            ),
            'add' => array(
                'name' => '_booking__travel_booking_client_document__add',
            ),
            'add-invoice-detail' => array(
                'name' => '_booking__travel_booking_client_document__add_invoice_detail',
            ),
            'add-receipt-detail' => array(
                'name' => '_booking__travel_booking_client_document__add_receipt_detail',
            ),
            'add-default-detail' => array(
                'name' => '_booking__travel_booking_client_document__add_default_detail',
            ),
            'edit-invoice' => array(
                'name' => '_booking__travel_booking_client_document__edit_invoice',
            ),
            'edit-receipt' => array(
                'name' => '_booking__travel_booking_client_document__edit_receipt',
            ),
            'edit-entity-address' => array(
                'name' => '_booking__travel_booking_client_document__edit_entity_address',
            ),
            'delete' => array(
                'name' => '_booking__travel_booking_client_document__delete',
            ),
            'disable' => array(
                'name' => '_booking__travel_booking_client_document__disable',
            ),
            'choices' => array(
                'name' => '_booking__travel_booking_client_document__choices'
            )
        );

        parent::initChild($request, $parents, $label);

        // Search
        $this->templateConf['search']['fields'] = array('clientDocumentType_name', 'code',
            'entity_avatar', 'entity_name',
            'subTotal', 'totalVat', 'total', 'date', 'dueDate', 'settlementStatus');
        // Empty criteria to be able to see all registers because "search" action is disabled.
        $this->templateConf['search']['criteria'] = array();

        // Actions for template/view
        $this->templateConf['actions']['search'] = true;

        // Extra data
        $this->templateConf['extraData']['template'] = array(
            'class' => '-merge-view',
            'hasMergeHeader' => true
        );

        return $this;
    }

    /**
     * @Route("/booking/travel-booking-client-document/new/{travelBooking}",
     *     name="_booking__travel_booking_client_document__new"
     * )
     *
     * Overrides parent method
     * @param Request $request
     * @param $travelBooking
     * @return mixed
     */
    public function newLocalChildAction(Request $request, $travelBooking)
    {
        return parent::newChildAction($request, array($travelBooking));
    }

    /**
     * @Route("/booking/travel-booking-client-document/get/{travelBooking}/{id}",
     *     name="_booking__travel_booking_client_document__get",
     *     defaults={"id" = null}
     * )
     *
     * Overrides parent method
     * @param Request $request
     * @param $travelBooking
     * @param $id
     * @return mixed
     */
    public function getLocalChildAction(Request $request, $travelBooking, $id)
    {
        if(!empty($id)) {
            // Set configuration
            $this->initChild($request, array($travelBooking));

            // Process request
            $this->getRequestData($request); // Token is not validate, because this action is called directly without data

            $object = $this->getObject($id);

            $this->responseConf['object'] = $this->normalizeObject($object);

            ////////
            // Necessary data for form, because this method is called by form to edit the object
            ////////////////////////////////

            // Set date range to validate date in template
            $this->getLimitDateRange($object);

            // Set store info to be used in template
            $this->setResponseStoreInfo($object->getClientDocumentObj()->getStoreObj());

            // Set Total Vat Split By Code to be used in template
            $this->setDocumentTotalVatSplitByCode($object);

            return $this->getResponse(true);
        }

        return parent::getChildAction($request, array($travelBooking), $id);
    }

    /**
     * @Route("/booking/travel-booking-client-document/choices/{travelBooking}/{client}/{type}",
     *     name="_booking__travel_booking_client_document__choices",
     *     defaults={"client" = null, "type" = null},
     * )
     *
     * Action to get a list/array of objects to use as choices
     * @param Request $request
     * @param $travelBooking
     * @param $client
     * @param $type (document type <INVOICE, RECEIPT, etc.>)
     * @return mixed
     * @return mixed
     */
    public function choicesLocalChildAction(Request $request, $travelBooking, $client, $type)
    {
        // Set configuration
        $this->initChild($request, array($travelBooking));

        // Only necessary fields for joins
        $this->templateConf['search']['fields'] = array('clientDocumentObj');

        // Add client criteria
        $this->localConf['search']['criteria'][] = array(
            'field' => 'clientDocument.clientObj',
            'expr' => 'eq',
            'value' => $client
        );

        // Pendent settlement
        $this->localConf['search']['criteria'][] = array(
            'field' => 'clientDocument.remainSettlement',
            'expr' => 'gt',
            'value' => 0
        );

        // Document type
        if ($type) {
            $this->localConf['search']['fields'][] = 'clientDocumentTypeObj';
            $this->localConf['search']['criteria'][] = array(
                'field' => 'clientDocumentType.type',
                'expr' => 'eq',
                'value' => $type
            );
        }

        return parent::choicesChildAction($request, array($travelBooking));
    }

    /**
     * @Route("/booking/travel-booking-client-document/add/{travelBooking}/{id}",
     *     name="_booking__travel_booking_client_document__add",
     *     defaults={"id" = null}
     * )
     *
     * Action to add objects using the form
     * @param Request $request
     * @param $travelBooking
     * @param $id
     * @return mixed
     */
    public function addAction(Request $request, $travelBooking, $id)
    {
        // Set configuration
        $this->flags['storage'] = 'session'; // Session storage is used
        $this->flags['hasForm'] = true;
        $this->initChild($request, array($travelBooking));
        $this->templateConf['fields']['form'] = array('clientDocumentObj', 'clientDocumentTypeObj', 'clientObj');
        $this->localConf['entityFields']['clientDocumentObj']['typeDetail']['formClass'] = str_replace(
            '%formTypeStep%',
            '1',
            $this->localConf['entityFields']['clientDocumentObj']['typeDetail']['formClass']
        );

        // Retrieve object from session
        $obj = $this->getObject($id);

        // Build form
        $this->localConf['form'] = array_merge($this->localConf['form'], array('route' => 'add', 'buttons' => 'wizard'));
        $form = $this->buildForm($request, $obj);

        // Handle request
        $form->handleRequest($request);

        // Check if is submitted
        if($form->isSubmitted()) {
            $this->setObjectDefaultValues($obj); // Set default values again, client can be changed
            $this->setDefaultDates($obj); // Document Type can be changed

            // Object is saved in session, this submit only determines the base information to be definitely saved in the next step
            $this->saveForm($form, $obj);

            return $this->getResponse(true);
        }

        // Render form
        return $this->render('AppBundle:wizard:popup.html.twig', array(
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
     * @Route("/booking/travel-booking-client-document/add-default-detail/{travelBooking}/{id}",
     *     name="_booking__travel_booking_client_document__add_default_detail",
     *     defaults={"id" = null}
     * )
     *
     * Add default objects detail
     * @param Request $request
     * @param $travelBooking
     * @param $id
     * @return mixed
     */
    public function addDefaultDetailAction(Request $request, $travelBooking, $id)
    {
        // Set configuration
        $this->flags['storage'] = 'session'; // Session storage is used
        $this->initChild($request, array($travelBooking));

        // Process request
        $data = $this->getAndProcessRequestData($request);

        // Remove old detail objects
        $object = $this->getObject($id);
        $documentObj = $object->getClientDocumentObj();
        $this->container->get('app.service.session_storage')->deleteChildObjects($documentObj->getId());

        // Set options with "ids"
        $options = ((empty($data['data']['id']) || !is_array($data['data']['id']))
            ? null
            : array('criteria' => array(array('field' => 'id', 'expr' => 'in', 'value' => $data['data']['id'])))
        );

        $documentType = $documentObj->getClientDocumentTypeObj()->getType();
        switch ($documentType) {
            case 'RECEIPT':
                $this->setDefaultReceiptDetail($documentObj, $options);
                break;
            case 'RECTIFICATION':
                $this->setDefaultInvoiceRectification($documentObj, $options);
                break;
            default: // INVOICE
                $this->setDefaultInvoiceDetail($documentObj, $options);
        }

        return $this->getResponse(true);
    }

    /**
     * @Route("/booking/travel-booking-client-document/add-invoice-detail/{travelBooking}/{id}",
     *     name="_booking__travel_booking_client_document__add_invoice_detail",
     *     defaults={"id" = null}
     * )
     *
     * Add objects invoice detail
     * @param Request $request
     * @param $travelBooking
     * @param $id
     * @return mixed
     */
    public function addInvoiceDetailAction(Request $request, $travelBooking, $id)
    {
        // Set configuration
        $this->flags['storage'] = 'session'; // Session storage is used
        $this->flags['hasForm'] = true;
        $this->initChild($request, array($travelBooking));
        $this->localConf['form']['route'] = 'edit-invoice';
        $this->localConf['entityFields']['clientDocumentObj']['typeDetail']['formClass'] = str_replace(
            '%formTypeStep%',
            '2',
            $this->localConf['entityFields']['clientDocumentObj']['typeDetail']['formClass']
        );

        // Retrieve object from session
        $obj = $this->getObject($id);

        // Build form
        $this->localConf['form']['buttons'] = 'none';
        $form = $this->buildForm($request, $obj);

        // Handle request
        $form->handleRequest($request);

        // Check if is submitted
        if($form->isSubmitted()) {
            // Validate dates
            if (!$this->validateDates($obj)) {
                return $this->getResponse(true);
            }

            // Document Obj
            $documentObj = $obj->getClientDocumentObj();

            // Save session ids to remove or restore objects in session storage.
            $sessionIds = array(
                'bookingClientDocument' => $obj->getId(),
                'document' => $documentObj->getId(),
                'documentDetail' => array()
            );

            // Get detail objects
            $detailObjects = array();

            $this->addDocumentInvoiceDetail($request, $documentObj, $detailObjects);

            // Error
            if ($this->responseConf['status'] == 0) {
                return $this->getResponse(true);
            }

            // Clear ids to may be saved in database
            $obj->setId(null);
            $documentObj->setId(null);

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
                if (method_exists($detailObj, 'getClientDocumentInvoiceDetailObj')) {
                    $sessionIds['documentDetailChild'][] = $detailObj->getClientDocumentInvoiceDetailObj()->getId();
                    $detailObj->setId(null);
                }
                parent::saveObject($detailObj, false); // Doesn't flush data until all objects are inserted
            }

            // Flush (persist) all objects in database
            $this->flushEm();

            if($this->responseConf['status'] == 1) {
                $this->setDependenciesInvoice();

                // Remove objects from session
                $this->deleteObjectFromSS($sessionIds['bookingClientDocument']);
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
                $obj->setId($sessionIds['bookingClientDocument']);
                $documentObj->setId($sessionIds['document']);

                $documentDetailIndex = 0;
                foreach ($detailObjects as $detailObj) {
                    $detailObj->setId($sessionIds['documentDetail'][$documentDetailIndex]);
                    if (method_exists($detailObj, 'getClientDocumentInvoiceDetailObj')) {
                        $detailObj->getClientDocumentInvoiceDetailObj()
                            ->setId($sessionIds['documentDetailChild'][$documentDetailIndex]);
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
     * @Route("/booking/travel-booking-client-document/add-receipt-detail/{travelBooking}/{id}",
     *     name="_booking__travel_booking_client_document__add_receipt_detail",
     *     defaults={"id" = null}
     * )
     *
     * Add objects receipt detail
     * @param Request $request
     * @param $travelBooking
     * @param $id
     * @return mixed
     */
    public function addReceiptDetailAction(Request $request, $travelBooking, $id)
    {
        // Set configuration
        $this->flags['storage'] = 'session'; // Session storage is used
        $this->flags['hasForm'] = true;
        $this->initChild($request, array($travelBooking));
        $this->localConf['form']['route'] = 'edit-receipt';
        $this->localConf['entityFields']['clientDocumentObj']['typeDetail']['formClass'] = str_replace(
            '%formTypeStep%',
            '3',
            $this->localConf['entityFields']['clientDocumentObj']['typeDetail']['formClass']
        );

        // Retrieve object from session
        $obj = $this->getObject($id);

        // Build form
        $this->localConf['form']['buttons'] = 'none';
        $form = $this->buildForm($request, $obj);

        // Handle request
        $form->handleRequest($request);

        // Check if is submitted
        if($form->isSubmitted()) {
            // Validate dates
            if (!$this->validateDates($obj)) {
                return $this->getResponse(true);
            }

            // Document Obj
            $documentObj = $obj->getClientDocumentObj();

            // Save session ids to remove or restore objects in session storage.
            $sessionIds = array(
                'bookingClientDocument' => $obj->getId(),
                'document' => $documentObj->getId(),
                'documentDetail' => array()
            );

            // Get detail objects
            $detailObjects = array();

            $this->addDocumentReceiptDetail($documentObj, $detailObjects);

            // Error
            if ($this->responseConf['status'] == 0) {
                return $this->getResponse(true);
            }

            // Clear ids to may be saved in database
            $obj->setId(null);
            $documentObj->setId(null);

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
                $this->setDependenciesReceipt($documentObj);

                // Remove objects from session
                $this->deleteObjectFromSS($sessionIds['bookingClientDocument']);
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
                $obj->setId($sessionIds['bookingClientDocument']);
                $documentObj->setId($sessionIds['document']);

                $documentDetailIndex = 0;
                foreach ($detailObjects as $detailObj) {
                    $detailObj->setId($sessionIds['documentDetail'][$documentDetailIndex]);
                    $documentDetailIndex++;
                }
            }

            return $this->getResponse(true);
        }

        $this->localConf['templates']['edit'] = 'AccountingBundle:BaseDocument:add-receipt-detail.html.twig';

        // Render form
        return $this->render($this->localConf['templates']['edit'], array(
            '_conf' => $this->templateConf,
            '_form' => $form->createView()
        ));
    }

    /**
     * @Route("/booking/travel-booking-client-document/edit-invoice/{travelBooking}/{id}",
     *     name="_booking__travel_booking_client_document__edit_invoice",
     *     defaults={"id" = null}
     * )
     *
     * Overrides parent method
     * @param Request $request
     * @param $travelBooking
     * @param $id
     * @return mixed
     */
    public function editInvoiceAction(Request $request, $travelBooking, $id)
    {
        // Set configuration
        $this->flags['hasForm'] = true;
        $this->initChild($request, array($travelBooking));
        $this->localConf['form']['route'] = 'edit-invoice';
        $this->localConf['entityFields']['clientDocumentObj']['typeDetail']['formClass'] = str_replace(
            '%formTypeStep%',
            '2',
            $this->localConf['entityFields']['clientDocumentObj']['typeDetail']['formClass']
        );

        $obj = $this->getObject($id);

        // Build form
        $form = $this->buildForm($request, $obj);

        // Handle request
        $form->handleRequest($request);

        // Check if is submitted
        if($form->isSubmitted()) {
            // Validate dates
            if (!$this->validateDates($obj)) {
                return $this->getResponse(true);
            }

            $this->saveForm($form, $obj);

            if($this->responseConf['status'] == 1) {
                $this->setDependenciesInvoice();
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
     * @Route("/booking/travel-booking-client-document/edit-receipt/{travelBooking}/{id}",
     *     name="_booking__travel_booking_client_document__edit_receipt",
     *     defaults={"id" = null}
     * )
     *
     * Overrides parent method
     * @param Request $request
     * @param $travelBooking
     * @param $id
     * @return mixed
     */
    public function editReceiptAction(Request $request, $travelBooking, $id)
    {
        // Set configuration
        $this->flags['hasForm'] = true;
        $this->initChild($request, array($travelBooking));
        $this->localConf['form']['route'] = 'edit-receipt';
        $this->localConf['entityFields']['clientDocumentObj']['typeDetail']['formClass'] = str_replace(
            '%formTypeStep%',
            '3',
            $this->localConf['entityFields']['clientDocumentObj']['typeDetail']['formClass']
        );

        $obj = $this->getObject($id);

        // Build form
        $form = $this->buildForm($request, $obj);

        // Handle request
        $form->handleRequest($request);

        // Check if is submitted
        if($form->isSubmitted()) {
            // Validate dates
            if (!$this->validateDates($obj)) {
                return $this->getResponse(true);
            }

            $this->saveForm($form, $obj);

            if($this->responseConf['status'] == 1) {
                // Document Obj
                $documentObj = $obj->getClientDocumentObj();
                $this->setDependenciesReceipt($documentObj);
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
     * @Route("/booking/travel-booking-client-document/edit-entity-address/{travelBooking}/{id}",
     *     name="_booking__travel_booking_client_document__edit_entity_address",
     *     defaults={"id" = null}
     * )
     *
     * Edit entity address action (to change default entity address)
     * @param Request $request
     * @param $travelBooking
     * @param $id
     * @return mixed
     */
    public function editEntityAddressAction(Request $request, $travelBooking, $id)
    {
        // Set configuration
        $this->initChild($request, array($travelBooking));

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
                $clientDocumentObj = $obj->getClientDocumentObj();
                foreach (['street1', 'street2', 'postCode', 'city', 'region', 'country'] as $field) {
                    $getFieldMethod = 'get' . ucfirst($field);
                    $setFieldMethod = 'setEntity' . ucfirst($field);
                    $clientDocumentObj->$setFieldMethod($entityAddressObj->$getFieldMethod());
                }
            }
        }

        $this->saveObject($obj, true, true);
        return $this->getResponse(true);
    }

    /**
     * @Route("/booking/travel-booking-client-document/delete/{travelBooking}/{id}",
     *     name="_booking__travel_booking_client_document__delete",
     *     defaults={"id" = null}
     * )
     *
     * Overrides parent method
     * @param Request $request
     * @param $travelBooking
     * @param $id
     * @return mixed
     */
    public function deleteLocalChildAction(Request $request, $travelBooking, $id)
    {
        return parent::deleteChildAction($request, array($travelBooking), $id);
    }

    /**
     * @Route("/booking/travel-booking-client-document/disable/{travelBooking}/{id}",
     *     name="_booking__travel_booking_client_document__disable",
     *     defaults={"id" = null}
     * )
     *
     * Overrides parent method
     * @param Request $request
     * @param $travelBooking
     * @param $id
     * @return mixed
     */
    public function disableLocalChildAction(Request $request, $travelBooking, $id)
    {
        // Set configuration
        $this->initChild($request, array($travelBooking));

        $response = parent::disableChildAction($request, array($travelBooking), $id);

        if ($this->responseConf['status'] == 1) {
            // Get object
            $obj = $this->getObject($id);
            $documentObj = $obj->getClientDocumentObj;
            $documentType = $documentObj->getClientDocumentTypeObj()->getType();

            switch ($documentType) {
                case 'RECEIPT':
                    $this->setDependenciesReceipt($documentObj);
                    break;
                case 'RECTIFICATION':
                    $this->setDependenciesInvoice();
                    break;
                default: // INVOICE
                    $this->setDependenciesInvoice();
            }
        }

        return $response;
    }

    /**
     * @Route("/booking/travel-booking-client-document/data/{travelBooking}",
     *     name="_booking__travel_booking_client_document__data"
     * )
     *
     * Overrides parent method
     * @param Request $request
     * @param $travelBooking
     * @return mixed
     */
    public function dataLocalChildAction(Request $request, $travelBooking)
    {
        return parent::dataChildAction($request, array($travelBooking));
    }

    /**
     * @Route("/booking/travel-booking-client-document/conf/{travelBooking}",
     *     name="_booking__travel_booking_client_document__conf"
     * )
     *
     * Overrides parent method
     * @param Request $request
     * @param $travelBooking
     * @return mixed
     */
    public function confLocalChildAction(Request $request, $travelBooking)
    {
        return parent::confChildAction($request, array($travelBooking));
    }

    /**
     * @Route("/booking/travel-booking-client-document/data-for-receipt/{travelBooking}/{entity}",
     *     name="_booking__travel_booking_client_document__data_for_receipt"
     * )
     *
     * Get data for receipt
     * This functions needs to be here in this controller, because DataBox and forms needs this configuration info
     * @param Request $request
     * @param $travelBooking
     * @param $entity
     * @return mixed
     */
    public function dataForReceiptAction(Request $request, $travelBooking, $entity)
    {
        // Set configuration
        $this->initChild($request, array($travelBooking));
        // Search
        $this->templateConf['search']['fields'] = array('clientDocumentType_name', 'code',
            'entity_avatar', 'entity_name', 'date', 'dueDate', 'total');
        $this->templateConf['actions'] = array(
            'checkAll' => true,
            'refresh' => false
        );
        $this->templateConf['extraData']['template'] = array(
            'class' => '-merge-view'
        );

        // Booking obj
        $parentConf = $this->getParentConf();
        $bookingObj = $parentConf['obj'];

        $objectsArr = $this->getLocalRepositoryService()
            ->execute(
                'getNotReceivedValuesByBooking',
                array($bookingObj, $entity)
            );

        // Config response
        $this->responseConf['hasConf'] = true;
        $this->responseConf['hasObjects'] = true;
        $this->responseConf['objects']= $objectsArr;

        return $this->getResponse(true);
    }

    /**
     * Overrides parent method
     * @param $object
     * @return $this
     */
    protected function setObjectDefaultValues($object)
    {
        parent::setObjectDefaultValues($object);

        if (empty($object->getClientDocumentObj())) {
            // Add a new ClientDocument instance
            $clientDocumentObj = new ClientDocument();
            parent::setObjectDefaultValues($clientDocumentObj);
            // Save $clientDocumentObj with a new id in session
            // to be used for children (ClientDocumentInvoiceDetail)
            parent::saveObjectToSS($clientDocumentObj);
            // Add $clientDocumentObj to object
            $object->setClientDocumentObj($clientDocumentObj);

            // Set Store Data (this info is saved in document, is static)
            $storeObj = $clientDocumentObj->getStoreObj();
            $storeAddressObj = $storeObj->getStoreAddressObj();
            $clientDocumentObj->setStoreLegalName($storeObj->getLegalName(true));
            $clientDocumentObj->setStoreTaxNumber($storeObj->getTaxNumber(true));
            foreach (['street1', 'street2', 'postCode', 'city', 'region', 'country'] as $field) {
                $getFieldMethod = 'get' . ucfirst($field);
                $setFieldMethod = 'setStore' . ucfirst($field);
                $clientDocumentObj->$setFieldMethod($storeAddressObj->$getFieldMethod());
            }

            // Set client object
            $clientObj = reset($this->parentConf)['obj']->getClientObj();
            $clientDocumentObj->setClientObj($clientObj);

            // Set totals
            $clientDocumentObj->setSubTotal(0)->setTotalVat(0);
        } else {
            // Get client current account obj
            $clientDocumentObj = $object->getClientDocumentObj();

            // Set client data
            $clientObj = $clientDocumentObj->getClientObj();
            $entityObj = $clientObj->getEntityObj();
            $entityAddressObj = $this->getRepositoryService('EntityAddress', 'EntitiesBundle')
                ->execute('getForDocumentsByEntity', array($entityObj));
            $clientDocumentObj->setEntityLegalName($entityObj->getLegalName(true));
            $clientDocumentObj->setEntityTaxNumber($entityObj->getTaxNumber());
            foreach (['street1', 'street2', 'postCode', 'city', 'region', 'country'] as $field) {
                $getFieldMethod = 'get' . ucfirst($field);
                $setFieldMethod = 'setEntity' . ucfirst($field);
                $clientDocumentObj->$setFieldMethod($entityAddressObj->$getFieldMethod());
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
        $limitDateRange = $this->getLimitDateRange($object);

        // Set object default dates
        $object->getClientDocumentObj()
            ->setDate($limitDateRange['max']) // Today
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
        $limitDateRange = $this->getLimitDateRange($object);
        $documentObj = $object->getClientDocumentObj();

        if (($documentObj->getDate() < $limitDateRange['min'])
            || ($documentObj->getDate() > $limitDateRange['max'])
            || (
                ($documentObj->getDate() > $documentObj->getDueDate())
                && ($documentObj->getClientDocumentTypeObj()->getType() != 'RECEIPT')
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
     * Get limit date range
     * @param $object
     * @return array
     */
    protected function getLimitDateRange($object) {
        // Set setting flag to determines the code field
        // (it's need also to validate date and determine date ranges to template)
        $this->setSettingFlag($object);

        // By default you can select a date from 5 days ago until today
        $limitDateRange = array('min' => (new \DateTime('-5 day')), 'max' => (new \DateTime()));

        $surroundingObjects = $this->getSurroundingObjects($object->getClientDocumentObj());
        // Editing (limit dates between 'prev' and 'next' objects)
        if ($surroundingObjects['next'] && $surroundingObjects['prev']) {
            $limitDateRange['max'] = $surroundingObjects['next']->getDate();
            $limitDateRange['min'] = $surroundingObjects['prev']->getDate();
        }
        // Add (limit dates according with legal rules)
        elseif ($surroundingObjects['prev'] && ($surroundingObjects['prev']->getDate() > $limitDateRange['min'])) {
            $limitDateRange['min'] = $surroundingObjects['prev']->getDate();
        }

        // Set limit date range for template validations
        $this->responseConf['localData']['dateRange'] = array(array(
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
        $this->responseConf['localData']['storeInfo'] = array_merge(
            $this->getRepositoryService('StorePhone', 'AdminBundle')
                ->execute('getForDocumentsByStore', array($storeObj)),
            $this->getRepositoryService('StoreEmail', 'AdminBundle')
                ->execute('getForDocumentsByStore', array($storeObj)),
            $this->getRepositoryService('StoreLink', 'AdminBundle')
                ->execute('getForDocumentsByStore', array($storeObj))
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

        if($object->getClientDocumentObj()->getClientDocumentTypeObj()) {
            $this->flags['setting'] = array(
                'Bundle' => 'AccountingBundle',
                'entity' => 'ClientDocumentTypeSetting',
                'criteria' => array(
                    array(
                        'field' => 'clientDocumentTypeObj',
                        'expr' => 'eq',
                        'value' => $object->getClientDocumentObj()->getClientDocumentTypeObj() // Get document type
                    )
                )
            );

            return $this;
        }

        throw new \Exception('Document type not defined to determine settings for "Code".');
    }

    /**
     * Set invoice for dependencies
     * @return $this
     */
    protected function setDependenciesInvoice() {
        // Check if there are no errors in previous updates
        if ($this->responseConf['status'] == 1) {
            $parentConf = reset($this->parentConf);
            $bookingObj = $parentConf['obj'];

            // Update booking invoice status
            $this->getLocalRepositoryService()
                ->execute(
                    'setBookingInvoiceStatus',
                    array($bookingObj)
                );

            parent::saveObject($bookingObj);
        }

        return $this;
    }

    /**
     * Set dependencies of receipt
     * @param $documentObj
     * @return $this
     */
    protected function setDependenciesReceipt($documentObj) {
        // Update remain settlement
        $documentReceiptSettlementObjArr = $this->getRepositoryService('ClientDocumentReceiptSettlement', 'AccountingBundle')
            ->execute(
                'findByClientDocumentObj',
                array($documentObj)
            );

        if (is_array($documentReceiptSettlementObjArr)) {
            foreach ($documentReceiptSettlementObjArr as $documentReceiptSettlementObj) {
                $settlementDocumentObj = $documentReceiptSettlementObj->getInvoiceClientDocumentObj();
                $this->getRepositoryService('ClientDocumentReceiptSettlement', 'AccountingBundle')
                    ->execute('setDocumentRemainSettlement', array($settlementDocumentObj));

                parent::saveObject($settlementDocumentObj);
            }
        }

        return $this;
    }

    /**
     * Set Current Account Total Vat Split By Code
     * @param $object
     * @return $this
     */
    protected function setDocumentTotalVatSplitByCode($object) {
            $documentObj = $object->getClientDocumentObj();

            switch ($this->flags['storage']) {
                case 'session':
                    // Get detail objects
                        $detailObjects = $this->container->get('app.service.session_storage')->getChildObjects(
                            $documentObj->getId(),
                            'ClientDocumentInvoiceDetail'
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

                    $this->responseConf['localData']['totalVatSplitByCode'] = array_values($totalVatSplitByCode);
                    break;
                default:
                    $this->responseConf['localData']['totalVatSplitByCode']
                        = $this->getRepositoryService('ClientDocumentInvoiceDetail', 'AccountingBundle')
                        ->execute(
                            'getDocumentTotalVatSplitByCode',
                            array($documentObj)
                        );
            }

            return $this;
    }

    /**
     * Set Default Invoice Detail
     * @param $documentObj
     * @param $options
     * @return $this
     */
    protected function setDefaultInvoiceDetail($documentObj, $options)
    {
        // Totals for documentObj
        $sumSubTotal = $sumTotalVat = 0;

        // Set object detail
        if ($options) {
            // Entities names
            $parentConf = $this->getParentConf();
            $bookingObj = $parentConf['obj'];
            $bookingEntity = $parentConf['entity']; // Upper case
            $bookingServicePriceEntity = ($bookingEntity . 'ServicePrice'); // Upper case
            $bookingServicePriceEntitySetMethod = ('set' . $bookingServicePriceEntity . 'Obj');
            $bookingClientDocumentInvoiceDetailClass = (substr($this->localConf['entityClass'], 0, -8) . 'DocumentInvoiceDetail');

            // Get objects detail
            $objectsArr = $this->getRepositoryService($bookingServicePriceEntity, 'BookingBundle')
                ->execute(
                    'getNotInvoicedValuesByBooking',
                    array($bookingObj, $options)
                );

            // Set values
            $priceService = $this->get('app.service.price');
            foreach ($objectsArr as &$obj) {
                // Get booking service price
                $bookingServicePriceObj = $this->getRepositoryService('TravelBookingServicePrice', 'BookingBundle')->execute(
                    'findOneById',
                    array($obj['id'])
                );

                // Get VAT code. VAT code can be changed between the service creation time and now, so we calculate the VAT again.
                $serviceObj = $bookingServicePriceObj->getBookingServiceObj()->getServiceObj();
                $vatCodeObj = $serviceObj->getVatCodeObj();
                $obj['vatCode_name'] = $vatCodeObj->getName();
                $obj['vatCode_percentage'] = $vatCodeObj->getPercentage();

                // Objects
                $bookingClientDocumentInvoiceDetailObj = new $bookingClientDocumentInvoiceDetailClass();
                parent::setObjectDefaultValues($bookingClientDocumentInvoiceDetailObj);
                $bookingClientDocumentInvoiceDetailObj->$bookingServicePriceEntitySetMethod($bookingServicePriceObj);
                $clientDocumentInvoiceDetailObj = new ClientDocumentInvoiceDetail();
                parent::setObjectDefaultValues($clientDocumentInvoiceDetailObj);
                $clientDocumentInvoiceDetailObj->setClientDocumentObj($documentObj);
                $bookingClientDocumentInvoiceDetailObj->setClientDocumentInvoiceDetailObj($clientDocumentInvoiceDetailObj);
                $clientDocumentInvoiceDetailObj->setServiceObj($serviceObj);
                $clientDocumentInvoiceDetailObj->setVatCodeObj($vatCodeObj);

                // Properties
                $totalUnitValue = $priceService->calcUnitFromTotal($obj['notInvoicedValue'], $obj['quantity']);
                $values = $priceService->splitTotalUnit($totalUnitValue, $obj['vatCode_percentage'], true);
                $clientDocumentInvoiceDetailObj->setDescription($obj['description']);
                $clientDocumentInvoiceDetailObj->setQuantity($obj['quantity']);
                $clientDocumentInvoiceDetailObj->setValue($values['value']);
                $clientDocumentInvoiceDetailObj->setVatValue($values['vatValue']);

                // Totals
                $subTotal = $priceService->calcTotal($values['value'], $obj['quantity']);
                $totalVat = $priceService->calcTotal($values['vatValue'], $obj['quantity']);
                $clientDocumentInvoiceDetailObj->setSubTotal($subTotal);
                $clientDocumentInvoiceDetailObj->setTotalVat($totalVat);
                $sumSubTotal += $subTotal;
                $sumTotalVat += $totalVat;

                // Save object in session
                // Set the parent for DocumentInvoiceDetail objects
                $localParent = $this->flags['parent'];
                $this->flags['parent'] = $documentObj->getId();
                parent::saveForm(null, $clientDocumentInvoiceDetailObj);
                parent::saveForm(null, $bookingClientDocumentInvoiceDetailObj);
                $this->flags['parent'] = $localParent; // Reset to local parent
            }
        }

        // Update document object
        $documentObj->setSubTotal($sumSubTotal);
        $documentObj->setTotalVat($sumTotalVat);
        $documentObj->setRemainSettlement($documentObj->getTotal());

        return $this;
    }

    /**
     * Set Default Receipt Detail
     * @param $documentObj
     * @param $options
     * @return $this
     */
    protected function setDefaultReceiptDetail($documentObj, $options)
    {
        // Set object detail
        if ($options) {
            // Booking obj
            $parentConf = $this->getParentConf();
            $bookingObj = $parentConf['obj'];
            $entity = $documentObj->getClientObj()->getEntityObj()->getId();

            $objectsArr = $this->getLocalRepositoryService()
                ->execute(
                    'getNotReceivedValuesByBooking',
                    array($bookingObj, $entity, $options)
                );

            // Set values
            foreach ($objectsArr as &$obj) {
                // Get invoice document
                $bookingInvoiceClientDocumentObj = $this->getLocalRepositoryService()
                    ->execute(
                        'findOneById',
                        array(
                            $obj['id']
                        )
                    );

                // Create object
                $clientDocumentReceiptSettlementObj = new ClientDocumentReceiptSettlement();
                parent::setObjectDefaultValues($clientDocumentReceiptSettlementObj);
                $clientDocumentReceiptSettlementObj->setClientDocumentObj($documentObj);
                $clientDocumentReceiptSettlementObj
                    ->setInvoiceClientDocumentObj($bookingInvoiceClientDocumentObj->getClientDocumentObj());
                $clientDocumentReceiptSettlementObj->setValue($obj['total']);

                // Save object in session
                // Set the parent for DocumentReceiptSettlement objects
                $localParent = $this->flags['parent'];
                $this->flags['parent'] = $documentObj->getId();
                parent::saveForm(null, $clientDocumentReceiptSettlementObj);
                $this->flags['parent'] = $localParent; // Reset to local parent
            }
        }

        return $this;
    }

    /**
     * Set Default Invoice Rectification
     * @param $documentObj
     * @param $options
     * @return $this
     */
    protected function setDefaultInvoiceRectification($documentObj, $options)
    {
        // Set object detail
        if ($options) {
            ClientDocumentInvoiceRectificationController::addObjects($this, $documentObj, $options);
        }

        return $this;
    }

    /**
     * Add Document Invoice Detail
     * @param $request
     * @param $documentObj
     * @param $detailObjects
     * @return $this
     */
    protected function addDocumentInvoiceDetail($request, &$documentObj, &$detailObjects)
    {
        $documentType = $documentObj->getClientDocumentTypeObj()->getType();
        $documentDetailEntityName = null;
        switch ($documentType) {
            case 'RECTIFICATION':
                $documentDetailEntityName = 'ClientDocumentInvoiceRectification';
                break;
            default: // INVOICE
                $documentDetailEntityName = (substr($this->localConf['entity'], 0, -8) . 'DocumentInvoiceDetail');
        }

        // Get detail objects
        $detailObjects = $this->container->get('app.service.session_storage')->getChildObjects(
            $documentObj->getId(),
            $documentDetailEntityName
        );

        // Validate totals
        $documentTotals = array('subTotal' => 0, 'totalVat' => 0, 'total' => 0);
        $submittedData = $this->getRequestData($request)['form']['clientDocumentObj'];
        foreach ($detailObjects as $detailObj) {
            $detailObj = $detailObj->getClientDocumentInvoiceDetailObj();

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
        if ($errorMessage) {
            $this->responseConf['status'] = 0;
            $this->addFlashMessage(
                ('Invalid total was detected.<br/>' . $errorMessage),
                'Data not persisted',
                'error'
            );
            return $this;
        }

        // Validation for rectification documents detail
        if ($documentType == 'RECTIFICATION') {
            // Controls invoice detail in rectification stage, to avoid repeat the same invoice detail
            // (otherwise the user can rectified the same invoice detail multiple times and create an inquiry rectification)
            $invoiceDetailIds = array();
            foreach ($detailObjects as $detailObj) {
                // Check if invoice detail is already added
                $invoiceDetailId = $detailObj->getOriginalClientDocumentInvoiceDetailObj()->getId();
                if (in_array($invoiceDetailId, $invoiceDetailIds)) {
                    $this->responseConf['status'] = 0;
                    $this->addFlashMessage(
                        'Document detail line (' . $detailObj->getOriginalClientDocumentInvoiceDetailObj()->getDescription() . ') duplication not allowed.',
                        'Data not persisted',
                        'error'
                    );
                    return $this;
                }
                $invoiceDetailIds[] = $invoiceDetailId;
            }
        }

        // Set document totals
        $documentObj->setSubTotal($documentTotals['subTotal']);
        $documentObj->setTotalVat($documentTotals['totalVat']);
        $documentObj->setRemainSettlement($documentObj->getTotal());

        return $this;
    }

    /**
     * Add Document Receipt Detail
     * @param $documentObj
     * @param $detailObjects
     * @return $this
     */
    protected function addDocumentReceiptDetail(&$documentObj, &$detailObjects)
    {
        $priceService = $this->get('app.service.price');

        $detailObjects = array(); // Content "settlement" and "payment" objects
        $documentTotals = array('settlement' => 0, 'payment' => 0);

        // Get settlement objects
        $settlementObjects = $this->container->get('app.service.session_storage')->getChildObjects(
            $documentObj->getId(),
            'ClientDocumentReceiptSettlement'
        );

        // Controls invoice documents in settlement stage, to avoid repeat the same invoice document
        // (otherwise the user can pay the same invoice document multiple times in the same payment
        // and create an inquiry payment)
        $invoiceDocumentIds = array();
        foreach ($settlementObjects as $settlementObject) {
            // Check if value is correct
            $missingSettlement = $this->getRepositoryService('ClientDocumentReceiptSettlement', 'AccountingBundle')
                ->execute('getDocumentRemainSettlement', array($settlementObject->getInvoiceClientDocumentObj()));

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
            $invoiceDocumentId = $settlementObject->getInvoiceClientDocumentObj()->getId();
            if (in_array($invoiceDocumentId, $invoiceDocumentIds)) {
                $this->responseConf['status'] = 0;
                $this->addFlashMessage(
                    'Settlement document (' . $settlementObject->getInvoiceClientDocumentObj()->getCode() . ') duplication not allowed.',
                    'Data not persisted',
                    'error'
                );

                return $this;
            }
            $invoiceDocumentIds[] = $invoiceDocumentId;

            $documentTotals['settlement'] += $settlementObject->getValue();
            $detailObjects[] = $settlementObject;
        }

        // Get payment objects
        $paymentObjects = $this->container->get('app.service.session_storage')->getChildObjects(
            $documentObj->getId(),
            'ClientDocumentReceiptPayment'
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
        } elseif (!$priceService->isEqual($documentTotals['settlement'], $documentTotals['payment'])) {
            $errorMessage = (
                'Total of settlement (' . $documentTotals['settlement']
                . ') does not match with total of payment ('.$documentTotals['payment'] . ')'
            );
        }
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
        $documentObj->setSubTotal($documentTotals['payment']);
        $documentObj->setTotalVat(0);
        $documentObj->setRemainSettlement(0);

        return $this;
    }
}