<?php

namespace BookingBundle\Controller;

use AccountingBundle\Entity\ClientCurrentAccountDetail;
use AppBundle\Controller\BaseEntityChildController;
use AppBundle\Service\HelperService;
use Sensio\Bundle\FrameworkExtraBundle\Configuration\Route;
use Symfony\Component\HttpFoundation\Request;

class TravelBookingClientCurrentAccountDetailController extends BaseEntityChildController
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
            'clientCurrentAccount' => array('route' => '_accounting__client_current_account__index')
        );

        // Route
        $this->templateConf['route'] = array(
            'get' => array(
                'name' => '_booking__travel_booking_client_current_account_detail__get'
            ),
            'edit' => array(
                'name' => '_booking__travel_booking_client_current_account_detail__edit',
            ),
            'delete' => array(
                'name' => '_booking__travel_booking_client_current_account_detail__delete',
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
     * @Route("/booking/travel-booking-client-current-account-detail/get/{clientCurrentAccount}/{id}",
     *     name="_booking__travel_booking_client_current_account_detail__get",
     *     defaults={"id" = null}
     * )
     *
     * Overrides parent method
     * @param Request $request
     * @param $clientCurrentAccount
     * @param $id
     * @return mixed
     */
    public function getLocalChildAction(Request $request, $clientCurrentAccount, $id)
    {
        return parent::getChildAction($request, array($clientCurrentAccount), $id);
    }

    /**
     * @Route("/booking/travel-booking-client-current-account-detail/edit/{clientCurrentAccount}/{id}",
     *     name="_booking__travel_booking_client_current_account_detail__edit",
     *     defaults={"id" = null}
     * )
     *
     * Overrides parent method
     * @param Request $request
     * @param $clientCurrentAccount
     * @param $id
     * @return mixed
     */
    public function editLocalChildAction(Request $request, $clientCurrentAccount, $id)
    {
        $parents = array($clientCurrentAccount);

        // Set configuration
        $this->flags['hasForm'] = true;
        $this->initChild($request, $parents);

        // Get object
        $obj = $this->getObject($id);

        // Save old total of object to validate the total of the document
        $odlTotal = (empty($id)
            ? 0
            : $obj->getClientCurrentAccountDetailObj()->getTotal()
        );

        // Save old service to control VAT code changes
        $odlService = (empty($id)
            ? null
            : $obj->getClientCurrentAccountDetailObj()->getServiceObj()
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

            // Get CurrentAccountObj
            $currentAccountDetailObj = $obj->getClientCurrentAccountDetailObj();

            // If object is related to the booking service price, service can not be changed, is inherited.
            if ($obj->getTravelBookingServicePriceObj()
                && ($obj->getTravelBookingServicePriceObj()->getTravelBookingServiceObj()->getServiceObj()
                    != $currentAccountDetailObj->getServiceObj()
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
            if ($odlService != $currentAccountDetailObj->getServiceObj()) {
                $currentAccountDetailObj->setVatCodeObj($currentAccountDetailObj->getServiceObj()->getVatCodeObj());
            }

            $data = $this->getRequestData($request);
            $submittedData = $data['form']['clientCurrentAccountDetailObj'];

            $priceService = $this->get('app.service.price');

            $vatCodeObj = $currentAccountDetailObj->getVatCodeObj();
            $vatCodePercentage = $vatCodeObj->getPercentage();
            $quantity = $currentAccountDetailObj->getQuantity();
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
            $currentAccountObj = $this->getParentConf()['obj'];
            if (($currentAccountObj->getTotal() - $odlTotal + $total) <= 0) {
                $errorMessage = 'Document value should be greater than zero.';
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
            $currentAccountDetailObj->setValue($splitTotalUnit['value']);
            $currentAccountDetailObj->setVatValue($splitTotalUnit['vatValue']);
            $currentAccountDetailObj->setSubTotal($subTotal);
            $currentAccountDetailObj->setTotalVat($totalVat);
            $this->saveForm($form, $obj);

            if ($this->responseConf['status'] == 1) {
                $this->setDependenciesTotals();
                $this->setDependenciesInvoice();
            }

            return $this->getResponse(true);
        }

        // Render form
        return $this->render('AccountingBundle:BaseCurrentAccountDetail:edit.html.twig', array(
            '_conf' => $this->templateConf,
            '_form' => $form->createView()
        ));
    }

    /**
     * @Route("/booking/travel-booking-client-current-account-detail/delete/{clientCurrentAccount}/{id}",
     *     name="_booking__travel_booking_client_current_account_detail__delete",
     *     defaults={"id" = null}
     * )
     *
     * Overrides parent method
     * @param Request $request
     * @param $clientCurrentAccount
     * @param $id
     * @return mixed
     */
    public function deleteLocalChildAction(Request $request, $clientCurrentAccount, $id)
    {
        $response = parent::deleteChildAction($request, array($clientCurrentAccount), $id);
        if ($this->responseConf['status'] == 1) {
            $this->setDependenciesTotals();
            $this->setDependenciesInvoice();
        }
        return $response;
    }

    /**
     * @Route("/booking/travel-booking-client-current-account-detail/data/{clientCurrentAccount}",
     *     name="_booking__travel_booking_client_current_account_detail__data"
     * )
     *
     * Overrides parent method
     * @param Request $request
     * @param $clientCurrentAccount
     * @return mixed
     */
    public function dataLocalChildAction(Request $request, $clientCurrentAccount)
    {
        return parent::dataChildAction($request, array($clientCurrentAccount));
    }

    /**
     * @Route("/booking/travel-booking-client-current-account-detail/data-for-invoice/{travelBooking}",
     *     name="_booking__travel_booking_client_current_account_detail__data_for_invoice"
     * )
     *
     * Get data for invoice
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
     * @Route("/booking/travel-booking-client-current-account-detail/conf/{clientCurrentAccount}",
     *     name="_booking__travel_booking_client_current_account_detail__conf"
     * )
     *
     * Overrides parent method
     * @param Request $request
     * @param $clientCurrentAccount
     * @return mixed
     */
    public function confLocalChildAction(Request $request, $clientCurrentAccount)
    {
        return parent::confChildAction($request, array($clientCurrentAccount));
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
            $currentAccountDetailObj = new ClientCurrentAccountDetail();
            parent::setObjectDefaultValues($currentAccountDetailObj);
            // Add $currentAccountDetailObj to object
            $object->setClientCurrentAccountDetailObj($currentAccountDetailObj);
        }

        return $this;
    }

    /**
     * Set totals for dependencies
     * @return $this
     */
    protected function setDependenciesTotals() {
        // Check if there are no errors in previous updates
        if ($this->responseConf['status'] == 1) {
            $parentConf = reset($this->parentConf);
            $currentAccountObj = $parentConf['obj'];

            switch ($this->flags['storage']) {
                case 'session':
                    // Get detail objects
                    $detailObjects = $this->container->get('app.service.session_storage')->getChildObjects(
                        $currentAccountObj->getId(),
                        $this->localConf['entity']
                    );

                    // Calc totals
                    $documentTotals = array('subTotal' => 0, 'totalVat' => 0);
                    foreach ($detailObjects as $detailObj) {
                        $currentAccountDetailObj = $detailObj->getClientCurrentAccountDetailObj();
                        $documentTotals['subTotal'] += $currentAccountDetailObj->getSubTotal();
                        $documentTotals['totalVat'] += $currentAccountDetailObj->getTotalVat();
                    }

                    // Set totals
                    $currentAccountObj->setSubTotal($documentTotals['subTotal']);
                    $currentAccountObj->setTotalVat($documentTotals['totalVat']);
                    break;
                default:
                    // Update current account totals
                    $this->getRepositoryService('clientCurrentAccountDetail', 'AccountingBundle')
                        ->execute(
                            'setCurrentAccountTotals',
                            array($currentAccountObj)
                        );
                    // Update current account object
                    parent::saveObject($currentAccountObj);
            }
        }

        return $this;
    }

    /**
     * Set invoice for dependencies
     * @return $this
     */
    protected function setDependenciesInvoice() {
        // Check if there are no errors in previous updates and we work with real data (database storage)
        if (($this->responseConf['status'] == 1) && ($this->flags['storage'] == 'db')) {
            // Update booking dependency
            $parentConf = reset($this->parentConf);
            $currentAccountObj = $parentConf['obj'];
            $bookingCurrentAccountObj = $this->getRepositoryService('TravelBookingClientCurrentAccount', 'BookingBundle')
                ->execute(
                    'findOneByClientCurrentAccountObj',
                    array($currentAccountObj)
                );

            // Check if there are a booking dependency to update
            if (empty($bookingCurrentAccountObj)) {
                return $this;
            }

            // Update booking invoice status
            $bookingObj = $bookingCurrentAccountObj->getBookingObj();
            $this->getRepositoryService('TravelBookingClientCurrentAccount', 'BookingBundle')
                ->execute(
                    'setBookingInvoiceStatus',
                    array($bookingObj)
                );

            parent::saveObject($bookingObj);
        }

        return $this;
    }
}