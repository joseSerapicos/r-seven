<?php

namespace BookingBundle\Controller;

use AppBundle\Controller\BaseEntityChildController;
use Sensio\Bundle\FrameworkExtraBundle\Configuration\Route;
use Symfony\Component\HttpFoundation\Request;

/**
 * Class BookingServicePriceController
 * @package BookingBundle\Controller
 */
class BookingServicePriceController extends BaseEntityChildController
{
    /**
     * Overrides parent method
     * @param Request $request
     * @param $parents
     * @param $label (set label when you don't have the route in modules/menus tree)
     * @return $this
     */
    protected function initChild(Request $request, $parents, $label = 'Price')
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

        parent::initChild($request, $parents, $label);

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

            if($this->validateAndSetBookingServicePrice($this, $obj, $submittedData)) {
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
     * @param $dataArr (all data from form)
     * @return bool
     */
    static function validateAndSetBookingServicePrice($controller, &$bookingServicePriceObj, $dataArr)
    {
        $priceService = $controller->get('app.service.price');

        // Values without VAT (used as base to calc all totals)
        $costValue = $dataArr['costValue'];
        $sellValue = $dataArr['sellValue'];

        // Validate cost/sell margin
        $errorMessage = null;
        $frontResult = $backResult = 0;
        if (!empty($dataArr['marginMethod']) && ($dataArr['marginMethod'] != 'none')) {
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
        }
        if (!$priceService->isEqual($frontResult, $backResult)) {
            $errorMessage = ($frontResult.' Does not match with '.$backResult);
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
            $subTotalCost = round($totalCost - $totalVatCost, 2);
            $subTotalSell = round($totalSell - $totalVatSell, 2);

            // Check totals (if totals are right,
            // we assume that unit values that are used to calc the totals are also right, so does not be checked)
            // For now this fields do not be used to simplify the form
            /*if (!$priceService->isEqual($dataArr['subTotalCost'], $subTotalCost)) {
                $errorMessage = ($dataArr['subTotalCost'] . ' Does not match with ' . $subTotalCost);
            } else*/if (!$priceService->isEqual($dataArr['subTotalSell'], $subTotalSell)) {
                $errorMessage = ($dataArr['subTotalSell'] . ' Does not match with ' . $subTotalSell);
            } /*elseif (!$priceService->isEqual($dataArr['totalVatCost'], $totalVatCost)) {
                    $errorMessage = ($dataArr['totalVatCost'] . ' Does not match with ' . $totalVatCost);
                } */elseif (!$priceService->isEqual($dataArr['totalVatSell'], $totalVatSell)) {
                $errorMessage = ($dataArr['totalVatSell'] . ' Does not match with ' . $totalVatSell);
            } /*elseif (!$priceService->isEqual($dataArr['totalCost'], $totalCost)) {
                    $errorMessage = ($dataArr['totalCost'] . ' Does not match with ' . $totalCost);
                } */elseif (!$priceService->isEqual($dataArr['totalSell'], $totalSell)) {
                $errorMessage = ($dataArr['totalSell'] . ' Does not match with ' . $totalSell);
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
     * Overrides parent method
     * @param $object
     * @param null $context
     * @return $this
     */
    protected function postDeleteObject($object, $context = null)
    {
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
     * @param $label (set label when you don't have the route in modules/menus tree)
     * @return $this
     * @throws \Exception
     */
    private function initForInvoice(Request $request, $parents, $entityId, $entityContext, $booking = null, $label = 'Price')
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

        parent::initChild($request, $parents, $label);

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
            $options = EntityTypeController
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
            DocumentInvoiceDetailController::calcObjectValuesFromTotal($controller, $obj);
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