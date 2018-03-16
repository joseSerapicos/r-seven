<?php

namespace BookingBundle\Controller;

use AccountingBundle\Controller\BaseDocumentInvoiceDetailController;
use AppBundle\Controller\BaseEntityChildController;
use EntitiesBundle\Controller\BaseEntityTypeController;
use Sensio\Bundle\FrameworkExtraBundle\Configuration\Route;
use Symfony\Component\HttpFoundation\Request;

/**
 * Class BookingServicePriceController
 * @package BookingBundle\Controller
 */
class BookingServicePriceController extends BaseEntityChildController
{
    /**
     * Get label/title to display child in parent
     * @return mixed
     */
    static function getLabel() { return 'Price'; }

    /**
     * Overrides parent method
     * @param Request $request
     * @param $parents
     * @return $this
     */
    protected function initChild(Request $request, $parents)
    {
        // Set configuration only once
        if($this->isInitialized) { return $this; }

        // Menu
        $this->templateConf['selectedMenu']['route'] = '_booking__booking_service__index';

        // Parent route
        $this->parentConf = array(
            'bookingService' => array('route' => '_booking__booking_service__index')
        );

        // Route
        $this->templateConf['route'] = array(
            'get' => array(
                'name' => '_booking__booking_service_price__get'
            ),
            'edit' => array(
                'name' => '_booking__booking_service_price__edit',
            ),
            'delete' => array(
                'name' => '_booking__booking_service_price__delete',
            )
        );

        parent::initChild($request, $parents);

        // Search
        $this->templateConf['search']['fields'] = array('postingType', 'description',
            'quantity', 'subTotalSell', 'totalVatSell', 'totalSell'
        );
        // To show the last inserted in the last position
        $this->templateConf['search']['orderBy'] = array(array('field' => 'id', 'value' => 'ASC'));

        // Actions for template/view
        $this->templateConf['actions'] = array_merge(
            $this->templateConf['actions'],
            array(
                'search' => true
            )
        );

        /* Legend for template/view */
        $this->templateConf['controls']['legend'][] = array(
            'label' => 'Grouped Price', 'class' => 'bg-warning-light', 'field' => 'grouperBookingServicePriceObj'
        );
        /* /Legend for template/view */

        // Extra data
        $this->templateConf['extraData']['template'] = array(
            'class' => '-merge-view'
        );

        return $this;
    }

    /**
     * @Route("/booking/booking-service-price/get/{bookingService}/{id}",
     *     name="_booking__booking_service_price__get",
     *     defaults={"id" = null}
     * )
     *
     * Overrides parent method
     * @param Request $request
     * @param $bookingService
     * @param $id
     * @return mixed
     */
    public function getLocalChildAction(Request $request, $bookingService, $id)
    {
        return parent::getChildAction($request, array($bookingService), $id);
    }

    /**
    /**
     * @Route("/booking/booking-service-price/edit/{bookingService}/{id}",
     *     name="_booking__booking_service_price__edit",
     *     defaults={"id" = null}
     * )
     *
     * Overrides parent method
     * @param Request $request
     * @param $bookingService
     * @param $id
     * @return mixed
     */
    public function editLocalChildAction(Request $request, $bookingService, $id)
    {
        $parents = array($bookingService);

        // Set configuration
        $this->flags['hasForm'] = true;
        $this->initChild($request, $parents);
        $this->localConf['templates']['edit'] = 'AppBundle:price:form-popup.html.twig';

        // Get object
        $obj = $this->getObject($id);

        // Build form
        $form = $this->createForm($this->localConf['formTypeClass'], $obj);

        // Handle request
        $form->handleRequest($request);

        // Check if is submitted
        if($form->isSubmitted()) {
            if (!$this->validateForm($form)) {
                return $this->getResponse(true);
            }

            $data = $this->getRequestData($request);
            $submittedData = $data['form'];

            if ($this->preSaveObject($obj, $data) &&
                $this->validateAndSetBookingServicePrice($this, $obj, $submittedData)
            ) {
                $this->saveForm($form, $obj);
            }

            $this->postSaveObject($obj);
            return $this->getResponse(true);
        }

        // Render form
        return $this->render($this->localConf['templates']['edit'], array(
            '_conf' => $this->templateConf,
            '_form' => $form->createView()
        ));
    }

    /**
     * @Route("/booking/booking-service-price/delete/{bookingService}/{id}",
     *     name="_booking__booking_service_price__delete",
     *     defaults={"id" = null}
     * )
     *
     * Overrides parent method
     * @param Request $request
     * @param $bookingService
     * @param $id
     * @return mixed
     */
    public function deleteLocalChildAction(Request $request, $bookingService, $id)
    {
        return parent::deleteChildAction($request, $bookingService, $id);
    }

    /**
     * @Route("/booking/booking-service-price/data/{bookingService}",
     *     name="_booking__booking_service_price__data"
     * )
     *
     * Overrides parent method
     * @param Request $request
     * @param $bookingService
     * @return mixed
     */
    public function dataLocalChildAction(Request $request, $bookingService)
    {
        return parent::dataChildAction($request, array($bookingService));
    }

    /**
     * @Route("/booking/booking-service-price/conf/{bookingService}",
     *     name="_booking__booking_service_price__conf"
     * )
     *
     * Overrides parent method
     * @param Request $request
     * @param $bookingService
     * @return mixed
     */
    public function confLocalChildAction(Request $request, $bookingService)
    {
        return parent::confChildAction($request, array($bookingService));
    }

    /**
     * Validate and set booking service price
     * @param $controller
     * @param $bookingServicePriceObj
     * @param $dataArr (all data from form, of provided data will be validated)
     * @return bool
     */
    static function validateAndSetBookingServicePrice($controller, &$bookingServicePriceObj, $dataArr = null)
    {
        $priceService = $controller->get('app.service.price');

        $hasValidation = !empty($dataArr);

        // Values without VAT (used as base to calc all totals)
        $costValue = ($dataArr ? $dataArr['costValue']: $bookingServicePriceObj->getCostValue());
        $sellValue = ($dataArr ? $dataArr['sellValue']: $bookingServicePriceObj->getSellValue());

        // Validate cost/sell margin
        $errorMessage = null;
        if ($hasValidation && !empty($dataArr['marginMethod']) && ($dataArr['marginMethod'] != 'none')) {
            $frontResult = $backResult = 0;
            switch ($dataArr['userFieldTyped']) {
                case 'COST':
                    $backResult = $priceService->calcSellValue(
                        $costValue,
                        $dataArr['marginValue'],
                        $dataArr['marginMethod']
                    );
                    $frontResult = $dataArr['sellValue'];
                    break;
                case 'SELL':
                    $backResult = $priceService->calcCostValue(
                        $sellValue,
                        $dataArr['marginValue'],
                        $dataArr['marginMethod']
                    );
                    $frontResult = $dataArr['costValue'];
                    break;
            }
            if (!$priceService->isEqual($frontResult, $backResult)) {
                $errorMessage = ($frontResult.' Does not match with '.$backResult);
            }
        }

        // No error continue...
        if (!$errorMessage) {
            // Determine values
            $vatCodeObj = $bookingServicePriceObj->getVatCodeObj();
            $vatCodePercentage = $vatCodeObj->getPercentage();
            $quantity = $bookingServicePriceObj->getQuantity();

            // Always use values without VAT as base, because the view app does the same,
            // otherwise you can get some inquiries to calc totals that multiply values with 4 decimals by quantity
            // (4 decimals values obtained from the value with VAT included lost some precision,
            // that does not occurs in view app that use the original value)
            $totalUnitCostDetail = $priceService->getTotalUnitDetail($costValue, $vatCodePercentage, false);
            $totalUnitSellDetail = $priceService->getTotalUnitDetail($sellValue, $vatCodePercentage, false);

            $totalUnitCost = round($totalUnitCostDetail['value'] + $totalUnitCostDetail['vatValue'], 2);
            $totalUnitSell = round($totalUnitSellDetail['value'] + $totalUnitSellDetail['vatValue'], 2);

            $totalVatCost = $priceService->calcTotal($totalUnitCostDetail['vatValue'], $quantity);
            $totalVatSell = $priceService->calcTotal($totalUnitSellDetail['vatValue'], $quantity);

            // Do not use "subTotal" nor "totalVat" to get the "total", because this values are already rounded,
            // and in some cases the sum of 2 rounded values cause inquiries.
            // Before multiply round the sum to get a coherent total unit value
            $totalCost = $priceService->calcTotal($totalUnitCost, $quantity);
            $totalSell = $priceService->calcTotal($totalUnitSell, $quantity);

            // Sub total is determined in this way, because in some cases the sum of "subTotal" and "totalVat"
            // rounded does not match with the correct total, given that this values are rounded to 2 decimals
            // and lost precision, so in this way we keep the calculus with coherence giving preference to keep
            // "totalVat" untouched (legal values).
            $subTotalCost = $priceService->calcSubTotal($totalCost, $totalVatCost);
            $subTotalSell = $priceService->calcSubTotal($totalSell, $totalVatSell);

            if ($hasValidation) {
                // Check totals (if totals are right,
                // we assume that unit values that are used to calc the totals are also right, so does not be checked)
                // For now this fields do not be used to simplify the form
                /*if (!$priceService->isEqual($dataArr['subTotalCost'], $subTotalCost)) {
                    $errorMessage = ($dataArr['subTotalCost'] . ' Does not match with ' . $subTotalCost);
                } else*/
                if (!$priceService->isEqual($dataArr['subTotalSell'], $subTotalSell)) {
                    $errorMessage = ($dataArr['subTotalSell'] . ' Does not match with ' . $subTotalSell);
                } /*elseif (!$priceService->isEqual($dataArr['totalVatCost'], $totalVatCost)) {
                    $errorMessage = ($dataArr['totalVatCost'] . ' Does not match with ' . $totalVatCost);
                } */ elseif (!$priceService->isEqual($dataArr['totalVatSell'], $totalVatSell)) {
                    $errorMessage = ($dataArr['totalVatSell'] . ' Does not match with ' . $totalVatSell);
                } /*elseif (!$priceService->isEqual($dataArr['totalCost'], $totalCost)) {
                    $errorMessage = ($dataArr['totalCost'] . ' Does not match with ' . $totalCost);
                } */ elseif (!$priceService->isEqual($dataArr['totalSell'], $totalSell)) {
                    $errorMessage = ($dataArr['totalSell'] . ' Does not match with ' . $totalSell);
                }
            }
        }

        // Set error
        if ($errorMessage) {
            $controller->responseConf['status'] = 0;
            $controller->addFlashMessage(
                ('Invalid total was detected.<br/>' . $errorMessage),
                'Data not persisted',
                'error'
            );
            return false;
        }

        // Set values and save
        $bookingServicePriceObj->setCostValue($totalUnitCostDetail['value']);
        $bookingServicePriceObj->setSellValue($totalUnitSellDetail['value']);
        $bookingServicePriceObj->setVatValueCost($totalUnitCostDetail['vatValue']);
        $bookingServicePriceObj->setVatValueSell($totalUnitSellDetail['vatValue']);
        $bookingServicePriceObj->setSubTotalCost($subTotalCost);
        $bookingServicePriceObj->setSubTotalSell($subTotalSell);
        $bookingServicePriceObj->setTotalVatCost($totalVatCost);
        $bookingServicePriceObj->setTotalVatSell($totalVatSell);

        return true;
    }

    /**
     * Overrides parent method
     * @param $object
     * @return $this
     */
    protected function setObjectDefaultValues($object)
    {
        // Set default data
        parent::setObjectDefaultValues($object);

        if (empty($object->getId())) {
            $parentConf = $this->getParentConf();
            if ($parentConf['obj']) { // Parent can be null when form view is called for the first time with parent "0"
                // Set VAT code
                $object->setVatCodeObj($parentConf['obj']->getServiceObj()->getVatCodeObj());
            }
        }

        return $this;
    }

    /**
     * Overrides parent method
     * @param $object
     * @param $data (usually the form data)
     * @return boolean (true to continue, false to abort)
     */
    protected function preSaveObject(&$object, $data)
    {
        // Grouper objects does not be changed directly, should be changed in the original object
        // It's a clone grouping a single object
        if ($object->getGroupedBookingServicePriceObj()) {
            $this->responseConf['status'] = 0;
            $this->addFlashMessage(
                ('This is a grouper object. Grouper objects can not be changed.<br/>Please make changes in the original object.'),
                'Data not persisted',
                'error'
            );
            return false;
        }
        // It's a grouper service price object of grouper service
        elseif ($object == $object->getBookingServiceObj()->getGrouperBookingServicePriceObj()) {
            $this->responseConf['status'] = 0;
            $this->addFlashMessage(
                ('This is a grouper object of grouper service. Grouper objects can not be changed.<br/>Please make changes in the original objects.'),
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
     * @param $data (usually the form data)
     * @return $this
     */
    protected function postSaveObject($object, $data = null)
    {
        // If storage is in database, then update booking
        if (($this->flags['storage'] == 'db') && ($this->responseConf['status'] == 1)) {
            // Update service totals
            $parentConf = reset($this->parentConf);
            $bookingServiceObj = $parentConf['obj'];
            BaseBookingServiceController::setTotals($this, $bookingServiceObj);

            // Update booking totals
            $bookingObj = $bookingServiceObj->getBookingObj();
            BaseBookingController::setTotals($this, $bookingObj);

            // Update booking invoice status
            BaseBookingController::setInvoiceStatus($this, $bookingObj);
        }

        return $this;
    }

    /**
     * Pre (before) delete object event. Use this function to handle event.
     * @param $object
     * @param $context (context to help to determine actions)
     * @return boolean (true to continue, false to abort)
     */
    protected function preDeleteObject($object, $context = null)
    {
        if ($checked = $this->preSaveObject($object, null)) {
            if (($grouperBookingServicePriceObj = $object->getGrouperBookingServicePriceObj())) {
                // If grouper BookingServicePrice is defined, so them may be deleted yet, and set this
                // field to "null", otherwise the "RESTRICT" mode does not allow delete this object

                // Save to restore in case of error
                $this->flags['grouperBookingServicePriceToDelete'] = $grouperBookingServicePriceObj;

                $object->setGrouperBookingServicePriceObj(null);

                // If the grouper BookingServicePriceObj is the main grouper used by grouper BookingService, so we
                // can not change them.
                if ($grouperBookingServicePriceObj !=
                    $grouperBookingServicePriceObj->getBookingServiceObj()->getGrouperBookingServicePriceObj()
                ) {
                    $grouperBookingServicePriceObj->setGroupedBookingServicePriceObj(null);
                    parent::saveObject_static($this, $grouperBookingServicePriceObj);

                    // No flush, flush only when remove the main object
                    parent::deleteObject_static($this, $grouperBookingServicePriceObj, false);
                }
            }
        }

        return $checked;
    }

    /**
     * Overrides parent method
     * @param $object
     * @param null $context
     * @return $this
     */
    protected function postDeleteObject($object, $context = null)
    {
        // Check if there are any grouper BookingServicePrice pre saved
        if (isset($this->flags['grouperBookingServicePriceToDelete'])
            && ($grouperBookingServicePriceObj = $this->flags['grouperBookingServicePriceToDelete'])
        ) {
            // Error, restore grouper BookingServicePriceObj
            if ($this->responseConf['status'] == 0) {
                $object->setGrouperBookingServicePriceObj($grouperBookingServicePriceObj);

                // If the grouper BookingServicePriceObj is the main grouper used by grouper BookingService, so we
                // can not change them.
                if ($grouperBookingServicePriceObj !=
                    $grouperBookingServicePriceObj->getBookingServiceObj()->getGrouperBookingServicePriceObj()
                ) {
                    $grouperBookingServicePriceObj->setGroupedBookingServicePriceObj($object);
                }

                // Save and flush all changes
                parent::saveObject_static($this, $object);
            }

            unset($this->flags['grouperBookingServicePriceToDelete']);
        }

        return $this->postSaveObject($object);
    }

    /**
     * Pre (before) cancel object event. Use this function to handle event.
     * @param $object
     * @return boolean (true to continue, false to abort)
     */
    protected function preCancelObject($object) {
        return $this->preSaveObject($object, null);
    }

    /**
     * Overrides parent method
     * @param $object
     * @return $this
     */
    protected function postCancelObject($object) {
        return $this->postSaveObject($object);
    }


    ////////////////////////////////////////////////////
    // GENERAL BOOKING METHODS TO HANDLE WITH INVOICE FORMS
    // THE ROUTE OF THIS ACTIONS ARE DEFINED HERE, BECAUSE THIS IS AN ACTION INDEPENDENT OF BOOKING TYPE
    // TO INTERACTS WITH AccountingBundle/DocumentInvoiceDetail
    /////////////////////////////////////////////////////////////////////////////////////////////////////////

    /**
     * THE "init" METHOD NEEDS TO BE DEFINED HERE, BECAUSE THIS CLASS IS INDEPENDENT OF BOOKING TYPE AND INTERACTS
     * WITH AccountingBundle/DocumentInvoiceDetail
     *
     * Overrides parent method
     * @param Request $request
     * @param $parents
     * @param $entityId (to filter booking by entity id by default)
     * @param $entityContext (lower case)
     * @param $booking (booking id, to filter by booking)
     * @return $this
     * @throws \Exception
     */
    private function initForInvoice(Request $request, $parents, $entityId, $entityContext, $booking = null)
    {
        // Set configuration only once
        if($this->isInitialized) { return $this; }

        // Client is a mandatory parameter, is not validated automatically because is not a parent
        if (empty($entityId)) {
            throw new \Exception('Configuration cannot be set, missing arguments ('.$entityContext.')!');
        }

        $entityContextUC = ucfirst($entityContext);

        // Parent route
        $this->parentConf = array(
            'bookingService' => array('route' => '_booking__booking_service__index')
        );

        $this->templateConf['route'] = array();

        parent::initChild($request, $parents);

        // Local conf
        array_pop($this->localConf['search']['criteria']); // Remove last criteria (the parent filter)

        // Route. To refresh and search action in view
        $getRouteName = '_booking__booking_service_price__get_for_invoice_'.$entityContext;
        $this->templateConf['route'] = array(
            'get' => array(
                'name' => $getRouteName,
                'url' => $this->generateUrl($getRouteName, array($entityContext => $entityId, 'booking' => $booking))
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
                    'booking_code', $entityContext.'_code', $entityContext.'_name',
                    'service_name', 'description', 'sellValue', 'totalSell'
                ),
                'form' => array()
            )
        );

        // Search
        $entityObj = $this->getRepositoryService($entityContextUC, 'EntitiesBundle')
            ->execute(
                'findOneById',
                array($entityId)
            );
        $session = $this->get('session');
        $storeId = $session->get('_app.store');
        $this->templateConf['search'] = array_merge(
            $this->templateConf['search'],
            array(
                'fields' => array(),
                'criteria' => array(
                    array(
                        'field' => 'isEnabled',
                        'expr' => 'eq',
                        'value' => true
                    ),
                    array(
                        // Optional criteria, but defined by default. We need to use te client code
                        // instead of the client id, so the user is able to change this criteria in the view
                        'field' => $entityContext.'_code',
                        'expr' => 'eq',
                        'value' => $entityObj->getCode()
                    )
                ),
                'orderBy' => array(
                    array('field' => 'booking.id', 'value' => 'DESC'),
                    array('field' => 'bookingService.id', 'value' => 'DESC'),
                    array('field' => 'bookingServicePrice.id', 'value' => 'DESC')
                ),
                'conf' => array('localData' => array(
                    'storeId' => $storeId // To filter by current store (for now booking does not allow store share)
                ))
            )
        );

        // Tree-view
        $this->flags['treeViewMode'] = true;
        $this->templateConf['treeView'] = array(
            'iconField' => 'service_icon',
            'localParentField' => 'bookingObj', // User by TreeViewDataService
            'parentTargetField' => 'bookingObj'
        );

        // Extra data
        $this->templateConf['extraData']['template'] = array(
            'class' => '-merge-view'
        );

        if ($booking) {
            // Filter by booking
            $this->localConf['search']['conf'] = array('localData' => array('bookingId' => $booking));
        }

        return $this;
    }

    /**
     * @Route("/booking/booking-service-price/get-for-invoice-client/{client}/{booking}",
     *     name="_booking__booking_service_price__get_for_invoice_client",
     *     defaults={"client" = null, "booking" = null}
     * )
     *
     * Get objects for invoice (not invoiced objects)
     * @param Request $request
     * @param $client (to filter booking by client entity by default)
     * @param $booking (booking id, to filter by booking)
     * @return mixed
     */
    public function getForInvoiceClientAction(Request $request, $client, $booking = null)
    {
        return $this->getForInvoice($request, $client, 'client', $booking);
    }

    /**
     * @Route("/booking/booking-service-price/get-for-invoice-supplier/{supplier}/{booking}",
     *     name="_booking__booking_service_price__get_for_invoice_supplier",
     *     defaults={"supplier" = null, "booking" = null}
     * )
     *
     * Get objects for invoice (not invoiced objects)
     * @param Request $request
     * @param $supplier (to filter booking by supplier entity by default)
     * @param $booking (booking id, to filter by booking)
     * @return mixed
     */
    public function getForInvoiceSupplierAction(Request $request, $supplier, $booking = null)
    {
        return $this->getForInvoice($request, $supplier, 'supplier', $booking);
    }

    /**
     * Get objects for invoice (not invoiced objects)
     * @param Request $request
     * @param $entityId (to filter booking by entity id by default)
     * @param $entityContext (lower case)
     * @param $booking (booking id, to filter by booking)
     * @return mixed
     */
    protected function getForInvoice(Request $request, $entityId, $entityContext, $booking = null)
    {
        // Set configuration
        $this->initForInvoice($request, array(0), $entityId, $entityContext, $booking);

        // Process request
        $this->getAndProcessRequestData($request);

        $objects = $this->getObjectsBySearchForInvoice($this, $entityContext);

        // Config response
        $this->responseConf['hasObjects'] = true;
        $this->responseConf['objects'] = $objects;

        return $this->getResponse(true);
    }

    /**
     * @Route("/booking/booking-service-price/data-for-invoice-client/{client}/{booking}",
     *     name="_booking__booking_service_price__data_for_invoice_client",
     *     defaults={"client" = null, "booking" = null}
     * )
     *
     * Data for invoice
     * @param Request $request
     * @param $client (to filter booking by client entity by default)
     * @param $booking (booking id, to filter by booking)
     * @return mixed
     */
    public function dataForInvoiceClientAction(Request $request, $client, $booking = null)
    {
        return $this->dataForInvoice($request, $client, 'client', $booking);
    }

    /**
     * @Route("/booking/booking-service-price/data-for-invoice-supplier/{supplier}/{booking}",
     *     name="_booking__booking_service_price__data_for_invoice_supplier",
     *     defaults={"supplier" = null, "booking" = null}
     * )
     *
     * Data for invoice
     * @param Request $request
     * @param $supplier (to filter booking by supplier entity by default)
     * @param $booking (booking id, to filter by booking)
     * @return mixed
     */
    public function dataForInvoiceSupplierAction(Request $request, $supplier, $booking = null)
    {
        return $this->dataForInvoice($request, $supplier, 'supplier', $booking);
    }

    /**
     * Data for invoice
     * @param Request $request
     * @param $entityId (to filter booking by entity id by default)
     * @param $entityContext (lower case)
     * @param $booking (booking id, to filter by booking)
     * @return mixed
     */
    protected function dataForInvoice(Request $request, $entityId, $entityContext, $booking = null)
    {
        // Set configuration
        $this->initForInvoice($request, array(0), $entityId, $entityContext, $booking);

        $objectsArr = $this->getObjectsBySearchForInvoice($this, $entityContext);

        // Config response
        $this->responseConf['hasConf'] = true;
        $this->responseConf['hasObjects'] = true;
        $this->responseConf['objects'] = $objectsArr;

        return $this->getResponse(true);
    }

    /**
     * Get Objects By Search For Invoice (not invoiced objects)
     * @param $controller
     * @param $entityContext
     * @param $options
     * @return array
     */
    static function getObjectsBySearchForInvoice($controller, $entityContext, $options = array())
    {
        // Set options only if it's not defined. If options are defined, id's are provided in criteria,
        // so we do not need to add any more information (including in criteria)
        $hasOptionsByParam = (!empty($options));

        if (!$hasOptionsByParam) {
            $options = $controller->getSearch();
            $options = BaseEntityTypeController
                ::empowerCriteriaByName($options, $entityContext.'_name', $entityContext.'_entity', $entityContext.'EntityObj');

            if (!empty($options['limit'])) { // Pagination enabled
                $options['limit']++; // Used to control the pagination
            }
        }

        $objects = $controller->getRepositoryService('BookingServicePrice', 'BookingBundle')
            ->execute(
                'getForInvoice',
                array($entityContext, $options)
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

        // Process objects (update values based on not invoiced value)
        foreach ($objects as &$obj) {
            BaseDocumentInvoiceDetailController::setObjectValuesFromNotInvoicedValue($controller, $obj);
        }

        // Tree view mode
        if (isset($controller->templateConf['treeView'])
            && isset($controller->templateConf['treeView']['localParentField'])
            && isset($controller->flags['treeViewMode']) && $controller->flags['treeViewMode']
        ) {
            return $controller->normalizeTreeViewObjectsForInvoice($objects);
        }

        return $objects;
    }

    /**
     * Normalize Tree-View Objects for Rectification
     * @param $objectsArr
     * @return array
     */
    protected function normalizeTreeViewObjectsForInvoice($objectsArr)
    {
        // Normalize to tree view format
        $nodes = array(); // Zero for parents (booking info)
        $parentNode = null;
        if (is_array($objectsArr) && (count($objectsArr) > 0)) {
            foreach ($objectsArr as &$obj) {
                // Add parent
                if ($parentNode != $obj['bookingObj']) {
                    $parentNode = $obj['bookingObj'];

                    $bookingObj = $this->getRepositoryService('Booking', 'BookingBundle')
                        ->execute(
                            'findOneById',
                            array($parentNode)
                        );

                    $nodes[0][] = array(
                        'id' => null, // No id to avoid check this entry
                        'bookingObj' => 'P-'.$parentNode, // Parent target for child field
                        'service_icon' => null,
                        'name' => ($bookingObj->getCode()
                            . ' | ' . $bookingObj->getClientObj()->getEntityObj()->getLegalName(true)
                            . ' | Total: ' . $bookingObj->getTotalSell()
                        )
                    );
                }

                $obj['bookingObj'] = null; // No has children
                $obj['name'] = (
                    '<strong>' . $obj['service_name'] . '</strong> ' . $obj['description']
                    . ' | ' . $obj['quantity']
                    . ' | ' . $obj['vatCode_name']
                    . ' | ' . $obj['totalUnit']
                    . ' | Total: ' . $obj['total']
                );

                $nodes['P-'.$parentNode][] = $obj;
            }
        }

        return $nodes;
    }
}