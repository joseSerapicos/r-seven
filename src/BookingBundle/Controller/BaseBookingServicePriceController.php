<?php

namespace BookingBundle\Controller;

use AppBundle\Controller\BaseEntityChildController;
use Sensio\Bundle\FrameworkExtraBundle\Configuration\Route;
use Symfony\Component\HttpFoundation\Request;

class BaseBookingServicePriceController extends BaseEntityChildController
{
    /**
     * DEFINE ROUTE HERE
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
        $form = $this->buildForm($request, $obj);

        // Handle request
        $form->handleRequest($request);

        // Check if is submitted
        if($form->isSubmitted()) {
            if (!$this->validateForm($form)) {
                return $this->getResponse(true);
            }

            $data = $this->getRequestData($request);
            $submittedData = $data['form'];

            $priceService = $this->get('app.service.price');

            // Validate cost/sell margin
            $errorMessage = null;
            $frontResult = $backResult = 0;
            if (!empty($submittedData['marginMethod']) && ($submittedData['marginMethod'] != 'none')) {
                switch ($submittedData['userFieldTyped']) {
                    case 'COST':
                        $backResult = $priceService->calcSellValue($data['form']);
                        $frontResult = $data['form']['sellValue'];
                        break;
                    case 'SELL':
                        $backResult = $priceService->calcCostValue($data['form']);
                        $frontResult = $data['form']['costValue'];
                        break;
                }
            }
            if (!$priceService->isEqual($frontResult, $backResult)) {
                $errorMessage = ($frontResult.' Does not match with '.$backResult);
            }

            // No error continue...
            if (!$errorMessage) {
                // Determine values
                $vatCodeObj = $obj->getVatCodeObj();
                $vatCodePercentage = $vatCodeObj->getPercentage();
                $quantity = $obj->getQuantity();
                $user_costValue = $submittedData['user_costValue'];
                $user_sellValue = $submittedData['user_sellValue'];
                $isVatIncluded = (!empty($submittedData['isVatIncluded']));
                $splitTotalUnitCost = $priceService->splitTotalUnit($user_costValue, $vatCodePercentage, $isVatIncluded);
                $splitTotalUnitSell = $priceService->splitTotalUnit($user_sellValue, $vatCodePercentage, $isVatIncluded);
                $totalUnitCost = round($splitTotalUnitCost['value'] + $splitTotalUnitCost['vatValue'], 2);
                $totalUnitSell = round($splitTotalUnitSell['value'] + $splitTotalUnitSell['vatValue'], 2);
                $totalVatCost = $priceService->calcTotal($splitTotalUnitCost['vatValue'], $quantity);
                $totalVatSell = $priceService->calcTotal($splitTotalUnitSell['vatValue'], $quantity);
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
                /*if (!$priceService->isEqual($submittedData['subTotalCost'], $subTotalCost)) {
                    $errorMessage = ($submittedData['subTotalCost'] . ' Does not match with ' . $subTotalCost);
                } elseif (!$priceService->isEqual($submittedData['subTotalSell'], $subTotalSell)) {
                    $errorMessage = ($submittedData['subTotalSell'] . ' Does not match with ' . $subTotalSell);
                } elseif (!$priceService->isEqual($submittedData['totalVatCost'], $totalVatCost)) {
                    $errorMessage = ($submittedData['totalVatCost'] . ' Does not match with ' . $totalVatCost);
                } elseif (!$priceService->isEqual($submittedData['totalVatSell'], $totalVatSell)) {
                    $errorMessage = ($submittedData['totalVatSell'] . ' Does not match with ' . $totalVatSell);
                } else*/if (!$priceService->isEqual($submittedData['totalCost'], $totalCost)) {
                    $errorMessage = ($submittedData['totalCost'] . ' Does not match with ' . $totalCost);
                } elseif (!$priceService->isEqual($submittedData['totalSell'], $totalSell)) {
                    $errorMessage = ($submittedData['totalSell'] . ' Does not match with ' . $totalSell);
                }
            }

            // If error return
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
            $obj->setCostValue($splitTotalUnitCost['value']);
            $obj->setSellValue($splitTotalUnitSell['value']);
            $obj->setVatValueCost($splitTotalUnitCost['vatValue']);
            $obj->setVatValueSell($splitTotalUnitSell['vatValue']);
            $obj->setSubTotalCost($subTotalCost);
            $obj->setSubTotalSell($subTotalSell);
            $obj->setTotalVatCost($totalVatCost);
            $obj->setTotalVatSell($totalVatSell);
            $this->saveForm($form, $obj);

            if ($this->responseConf['status'] == 1) {
                $this->setDependenciesTotals();
                $this->setDependenciesInvoice();
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
     * DEFINE ROUTE HERE
     *
     * Overrides parent method
     * @param Request $request
     * @param $bookingService
     * @param $id
     * @return mixed
     */
    public function deleteLocalChildAction(Request $request, $bookingService, $id)
    {
        $response = parent::deleteChildAction($request, array($bookingService), $id);
        if ($this->responseConf['status'] == 1) {
            $this->setDependenciesTotals();
            $this->setDependenciesInvoice();
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
     * Set totals for dependencies
     * @return $this
     */
    protected function setDependenciesTotals() {
        // Check if there are no errors in previous updates
        if ($this->responseConf['status'] == 1) {
            // Update service and booking totals
            $parentConf = reset($this->parentConf);
            $bookingServiceObj = $parentConf['obj'];
            $BookingServiceEntity = $parentConf['entity']; // Upper case
            $this->getRepositoryService($BookingServiceEntity, 'BookingBundle')
                ->execute(
                    'setTotals',
                    array($bookingServiceObj)
                );
            parent::saveObject($bookingServiceObj);

            $BookingEntity = substr($BookingServiceEntity, 0, -7); // Remove word "Service"
            $getBookingObjMethod = ('get' . $BookingEntity . 'Obj');
            $bookingObj = $bookingServiceObj->$getBookingObjMethod();
            $this->getRepositoryService($BookingServiceEntity, 'BookingBundle')
                ->execute(
                    'setBookingTotals',
                    array($bookingObj)
                );
            parent::saveObject($bookingObj);
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
            // Update booking invoice status
            $parentConf = reset($this->parentConf);
            $bookingServiceObj = $parentConf['obj'];
            $bookingObj = $bookingServiceObj->getBookingObj();
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