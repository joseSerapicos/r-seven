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
            $data = $this->getRequestData($request);
            $priceService = $this->get('app.service.price');
            $frontResult = $backResult = 0;

            // Validate cost/sell
            if (!empty($data['form']['marginMethod']) && ($data['form']['marginMethod'] != 'none')) {
                switch ($data['form']['userFieldTyped']) {
                    case 'COST':
                        $backResult = $priceService->calcSellValue($data['form']);
                        $frontResult = round($data['form']['sellValue'], 4);
                        break;
                    case 'SELL':
                        $backResult = $priceService->calcCostValue($data['form']);
                        $frontResult = round($data['form']['costValue'], 4);
                        break;
                }
            }
            // Validate total cost
            if ($backResult === $frontResult) {
                $backResult = $priceService->calcTotalCost($data['form']);
                $frontResult = round($data['form']['totalCost'], 2);

                // Validate total sell
                if ($backResult === $frontResult) {
                    $backResult = $priceService->calcTotalSell($data['form']);
                    $frontResult = round($data['form']['totalSell'], 2);
                }
            }

            // Throw error
            if ($backResult !== $frontResult) {
                $this->responseConf['status'] = 0;
                $this->addFlashMessage(
                    ('Data not persisted! Invalid value was detected:<br/>'
                        .$frontResult.' Does not match with '.$backResult
                    ),
                    'Error',
                    'error'
                );
                return $this->getResponse(true);
            }

            // Success, save data
            $this->saveForm($form, $obj);
            $this->setDependenciesTotals();

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
        }
        return $response;
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
}