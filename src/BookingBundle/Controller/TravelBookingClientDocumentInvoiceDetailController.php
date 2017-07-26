<?php

namespace BookingBundle\Controller;

use AccountingBundle\Entity\ClientDocumentInvoiceDetail;
use AppBundle\Controller\BaseEntityChildController;
use AppBundle\Controller\BaseEntityController;
use AppBundle\Service\HelperService;
use Sensio\Bundle\FrameworkExtraBundle\Configuration\Route;
use Symfony\Component\HttpFoundation\Request;

class TravelBookingClientDocumentInvoiceDetailController extends BaseEntityChildController
{
    /**
     * Overrides parent method
     * @param Request $request
     * @param $parents
     * @param $label (set label when you don't have the route in modules/menus tree)
     * @return $this
     */
    protected function initChild(Request $request, $parents, $label = 'Detail')
    {
        // Set configuration only once
        if($this->isInitialized) { return $this; }

        // Parent route
        $this->parentConf = array(
            'clientDocument' => array('route' => '_accounting__client_document__index')
        );

        // Route
        $this->templateConf['route'] = array(
            'get' => array(
                'name' => '_booking__travel_booking_client_document_invoice_detail__get'
            ),
            'edit' => array(
                'name' => '_booking__travel_booking_client_document_invoice_detail__edit',
            ),
            'delete' => array(
                'name' => '_booking__travel_booking_client_document_invoice_detail__delete',
            )
        );

        parent::initChild($request, $parents, $label);

        // Search
        $this->templateConf['search']['fields'] = array(
            'service_icon', 'bookingService_name', 'service_name', 'description',
            'quantity', 'totalUnit', 'vatCode_name', 'total'
        );
        // Empty criteria to be able to see all registers because "search" action is disabled.
        $this->templateConf['search']['criteria'] = array();

        // Extra data
        $this->templateConf['extraData']['template'] = array(
            'class' => '-merge-view'
        );

        return $this;
    }

    /**
     * @Route("/booking/travel-booking-client-document-invoice-detail/get/{clientDocument}/{id}",
     *     name="_booking__travel_booking_client_document_invoice_detail__get",
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
     * @Route("/booking/travel-booking-client-document-invoice-detail/edit/{clientDocument}/{id}",
     *     name="_booking__travel_booking_client_document_invoice_detail__edit",
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
        $parents = array($clientDocument);

        // Set configuration
        $this->flags['hasForm'] = true;
        $this->initChild($request, $parents);

        // Get object
        $obj = $this->getObject($id);

        // Save old total of object to validate the total of the document
        $odlTotal = (empty($id)
            ? 0
            : $obj->getClientDocumentInvoiceDetailObj()->getTotal()
        );

        // Save old service to control VAT code changes
        $odlService = (empty($id)
            ? null
            : $obj->getClientDocumentInvoiceDetailObj()->getServiceObj()
        );

        // Build form
        $form = $this->buildForm($request, $obj);

        // Handle request
        $form->handleRequest($request);

        // Check if is submitted
        if($form->isSubmitted()) {
            if (!$this->validateForm($form)) {
                return $this->getResponse(true);
            }

            // Get DocumentObj
            $documentInvoiceDetailObj = $obj->getClientDocumentInvoiceDetailObj();

            // If object is related to the booking service price, service can not be changed, is inherited.
            if ($obj->getTravelBookingServicePriceObj()
                && ($obj->getTravelBookingServicePriceObj()->getTravelBookingServiceObj()->getServiceObj()
                    != $documentInvoiceDetailObj->getServiceObj()
                )
            ) {
                $this->responseConf['status'] = 0;
                $this->addFlashMessage(
                    'Service can not be changed, this entry is related to the booking service price.',
                    'Data not persisted',
                    'error'
                );
                return $this->getResponse(true);
            }

            // Set VAT code only if service change, otherwise Vat code keeps loyal to the VAT code in use at the moment
            // of the service definition
            if ($odlService != $documentInvoiceDetailObj->getServiceObj()) {
                $documentInvoiceDetailObj->setVatCodeObj($documentInvoiceDetailObj->getServiceObj()->getVatCodeObj());
            }

            $data = $this->getRequestData($request);
            $submittedData = $data['form']['clientDocumentInvoiceDetailObj'];

            $priceService = $this->get('app.service.price');

            $vatCodeObj = $documentInvoiceDetailObj->getVatCodeObj();
            $vatCodePercentage = $vatCodeObj->getPercentage();
            $quantity = $documentInvoiceDetailObj->getQuantity();
            $user_value = $submittedData['user_value'];
            $isVatIncluded = (!empty($submittedData['isVatIncluded']));
            $splitTotalUnit = $priceService->splitTotalUnit($user_value, $vatCodePercentage, $isVatIncluded);
            $totalUnit = round($splitTotalUnit['value'] + $splitTotalUnit['vatValue'], 2);
            $totalVat = $priceService->calcTotal($splitTotalUnit['vatValue'], $quantity);
            // Do not use "subTotal" nor "totalVat" to get the "total", because this values are already rounded,
            // and in some cases the sum of 2 rounded values cause inquiries.
            // Before multiply round the sum to get a coherent total unit value
            $total = $priceService->calcTotal($totalUnit, $quantity);
            // Sub total is determined in this way, because in some cases the sum of "subTotal" and "totalVat"
            // rounded does not match with the correct total, given that this values are rounded to 2 decimals
            // and lost precision, so in this way we keep the calculus with coherence giving preference to keep
            // "totalVat" untouched (legal values).
            $subTotal = round($total - $totalVat, 2);

            // Check totals (if totals are right,
            // we assume that unit values that are used to calc the totals are also right, so does not be checked)
            $errorMessage = null;
            $documentObj = $this->getParentConf()['obj'];
            if (($documentObj->getTotal() - $odlTotal + $total) <= 0) {
                $errorMessage = 'Document value should be greater than zero.';
            } elseif (($documentObj->getTotal() - $documentObj->getRemainSettlement()) > ($documentObj->getTotal() - $odlTotal + $total)) {
                $errorMessage = (
                    'Document value should be greater than the settlement ('
                    . ($documentObj->getTotal() - $documentObj->getRemainSettlement())
                    . ').<br/> Otherwise you need to cancel the settlement before.'
                );
            } elseif (!$priceService->isEqual($submittedData['subTotal'], $subTotal)) {
                $errorMessage = ($submittedData['subTotal'].' Does not match with '.$subTotal);
            } elseif (!$priceService->isEqual($submittedData['totalVat'], $totalVat)) {
                $errorMessage = ($submittedData['totalVat'].' Does not match with '.$totalVat);
            } elseif (!$priceService->isEqual($submittedData['total'], $total)) {
                $errorMessage = ($submittedData['total'].' Does not match with '.$total);
            }
            if ($errorMessage) {
                $this->responseConf['status'] = 0;
                $this->addFlashMessage(
                    ('Invalid total was detected.<br/>' . $errorMessage),
                    'Data not persisted',
                    'error'
                );
                return $this->getResponse(true);
            }

            // Set values and save
            $documentInvoiceDetailObj->setValue($splitTotalUnit['value']);
            $documentInvoiceDetailObj->setVatValue($splitTotalUnit['vatValue']);
            $documentInvoiceDetailObj->setSubTotal($subTotal);
            $documentInvoiceDetailObj->setTotalVat($totalVat);
            $this->saveForm($form, $obj);

            if ($this->responseConf['status'] == 1) {
                self::setDocumentTotals($this, $documentObj);
                TravelBookingController::setBookingInvoiceStatus($this, $documentObj, 'travelBooking', 'client');
            }

            return $this->getResponse(true);
        }

        // Render form
        return $this->render('AccountingBundle:BaseDocumentInvoiceDetail:edit.html.twig', array(
            '_conf' => $this->templateConf,
            '_form' => $form->createView()
        ));
    }

    /**
     * @Route("/booking/travel-booking-client-document-invoice-detail/delete/{clientDocument}/{id}",
     *     name="_booking__travel_booking_client_document_invoice_detail__delete",
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
        // Set configuration
        $parents = array($clientDocument);
        $this->initChild($request, $parents);

        // Get objects
        $obj = $this->getObject($id);
        $documentObj = $obj->getClientDocumentObj();
        $documentInvoiceDetailObj = $obj->getClientDocumentInvoiceDetailObj();

        // Check if document settlement allow this operation (we need to keep the payment valid)
        if (($documentObj->getTotal() - $documentObj->getRemainSettlement()) > ($documentObj->getTotal() - $documentInvoiceDetailObj->getTotal())) {
            $this->responseConf['status'] = 0;
            $this->addFlashMessage(
                ('Document value should be greater than the settlement ('
                    . ($documentObj->getTotal() - $documentObj->getRemainSettlement())
                    . ').<br/> Otherwise you need to cancel the settlement before.'
                ),
                'Data not persisted',
                'error'
            );
            return $this->getResponse(true);
        }

        // Delete
        $response = parent::deleteChildAction($request, $parents, $id);
        if ($this->responseConf['status'] == 1) {
            self::setDocumentTotals($this, $documentObj);
            TravelBookingController::setBookingInvoiceStatus($this, $documentObj, 'travelBooking', 'client');
        }

        return $response;
    }

    /**
     * @Route("/booking/travel-booking-client-document-invoice-detail/data/{clientDocument}",
     *     name="_booking__travel_booking_client_document_invoice_detail__data"
     * )
     *
     * Overrides parent method
     * @param Request $request
     * @param $clientDocument
     * @return mixed
     */
    public function dataLocalChildAction(Request $request, $clientDocument)
    {
        return parent::dataChildAction($request, array($clientDocument));
    }

    /**
     * @Route("/booking/travel-booking-client-document-invoice-detail/data-for-invoice/{travelBooking}",
     *     name="_booking__travel_booking_client_document_invoice_detail__data_for_invoice"
     * )
     *
     * Get data for invoice
     * This functions needs to be here in this controller, because DataBox and forms needs this configuration info
     * @param Request $request
     * @param $travelBooking
     * @return mixed
     */
    public function dataForInvoiceAction(Request $request, $travelBooking)
    {
        // Set configuration
        $this->initChild($request, array(0));
        $this->templateConf['actions'] = array(
            'checkAll' => true,
            'refresh' => false
        );

        // BookingServicePrice entity name
        $bookingServicePriceEntity = $this->getFieldMetadata('travelBookingServicePriceObj', 'entity');

        $bookingObj = $this->getRepositoryService('TravelBooking', 'BookingBundle')
            ->execute(
                'findOneById',
                array($travelBooking)
            );

        $objectsArr = $this->getRepositoryService($bookingServicePriceEntity, 'BookingBundle')
            ->execute(
                'getNotInvoicedValuesByBooking',
                array($bookingObj)
            );

        // Set values
        $priceService = $this->get('app.service.price');
        foreach ($objectsArr as &$obj) {
            // Get VAT code. VAT code can be changed between the service creation time and now, so we calculate the VAT again.
            $serviceObj = $this->getRepositoryService('Service', 'ServicesBundle')
                ->execute(
                    'findOneById',
                    array($obj['serviceObj'])
                );
            $vatCodeObj = $serviceObj->getVatCodeObj();
            $obj['vatCode_name'] = $vatCodeObj->getName();
            $obj['vatCode_percentage'] = $vatCodeObj->getPercentage();

            $totalUnitValue = $priceService->calcUnitFromTotal($obj['notInvoicedValue'], $obj['quantity']);
            $values = $priceService->splitTotalUnit($totalUnitValue, $obj['vatCode_percentage'], true);
            $obj['value'] = $values['value'];
            $obj['vatValue'] = $values['vatValue'];
            $obj['totalUnit'] = round($obj['value'] + $obj['vatValue'], 2);
            $obj['totalVat'] = $priceService->calcTotal($values['vatValue'], $obj['quantity']);
            // Do not use "subTotal" nor "totalVat" to get the "total", because this values are already rounded,
            // and in some cases the sum of 2 rounded values cause inquiries.
            // Before multiply round the sum to get a coherent total unit value
            $obj['total'] = $priceService->calcTotal($obj['totalUnit'], $obj['quantity']);
            // Sub total is determined in this way, because in some cases the sum of "subTotal" and "totalVat"
            // rounded does not match with the correct total, given that this values are rounded to 2 decimals
            // and lost precision, so in this way we keep the calculus with coherence giving preference to keep
            // "totalVat" untouched (legal values).
            $obj['subTotal'] = round($obj['total'] - $obj['totalVat'], 2);
        }

        // Config response
        $this->responseConf['hasConf'] = true;
        $this->responseConf['hasObjects'] = true;
        $this->responseConf['objects']= $objectsArr;

        return $this->getResponse(true);
    }

    /**
     * @Route("/booking/travel-booking-client-document-invoice-detail/conf/{clientDocument}",
     *     name="_booking__travel_booking_client_document_invoice_detail__conf"
     * )
     *
     * Overrides parent method
     * @param Request $request
     * @param $clientDocument
     * @return mixed
     */
    public function confLocalChildAction(Request $request, $clientDocument)
    {
        return parent::confChildAction($request, array($clientDocument));
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
            // Set dependency current account detail
            $documentInvoiceDetailObj = new ClientDocumentInvoiceDetail();
            parent::setObjectDefaultValues($documentInvoiceDetailObj);
            // Add $documentInvoiceDetailObj to object
            $object->setClientDocumentInvoiceDetailObj($documentInvoiceDetailObj);
        }

        return $this;
    }

    /**
     * Set document totals
     * @param $controller
     * @param $documentObj
     * @return mixed
     */
    static function setDocumentTotals($controller, $documentObj) {
        // Check if there are no errors in previous updates
        if ($controller->responseConf['status'] == 1) {
            switch ($controller->flags['storage']) {
                case 'session':
                    // Totals for documentObj
                    $sumSubTotal = $sumTotalVat = 0;

                    // Get detail objects
                    $detailObjects = $controller->container->get('app.service.session_storage')->getChildObjects(
                        $documentObj->getId(),
                        'ClientDocumentInvoiceDetail'
                    );

                    // Calc totals
                    foreach ($detailObjects as $documentInvoiceDetailObj) {
                        $sumSubTotal += $documentInvoiceDetailObj->getSubTotal();
                        $sumTotalVat += $documentInvoiceDetailObj->getTotalVat();
                    }

                    // Update document object
                    $documentObj->setSubTotal($sumSubTotal);
                    $documentObj->setTotalVat($sumTotalVat);
                    $documentObj->setRemainSettlement($sumSubTotal + $sumTotalVat);
                    break;
                default:
                    // Update document totals
                    $controller->getRepositoryService('ClientDocumentInvoiceDetail', 'AccountingBundle')
                        ->execute(
                            'setDocumentTotals',
                            array($documentObj)
                        );
                    // Update document remain settlement
                    $controller->getRepositoryService('ClientDocumentReceiptSettlement', 'AccountingBundle')
                        ->execute('setDocumentRemainSettlement', array($documentObj));
                    // Update object
                    BaseEntityController::saveObject_static($controller, $documentObj);
            }
        }

        return $controller;
    }
}