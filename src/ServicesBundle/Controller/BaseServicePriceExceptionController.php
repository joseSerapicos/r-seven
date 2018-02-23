<?php

namespace ServicesBundle\Controller;

use AppBundle\Controller\BaseEntityChildController;
use Sensio\Bundle\FrameworkExtraBundle\Configuration\Route;
use Symfony\Component\HttpFoundation\Request;

abstract class BaseServicePriceExceptionController extends BaseEntityChildController
{
    /**
     * [SET ROUTE HERE]
     *
     * Overrides parent method
     * @param Request $request
     * @param $service
     * @param $id
     * @return mixed
     */
    public function editLocalChildAction(Request $request, $service, $id)
    {
        $parents = array($service);

        // Set configuration
        $this->flags['hasForm'] = true;
        $this->initChild($request, $parents);
        $this->localConf['templates']['edit'] = $this->localConf['templatesPath'].'form-popup.html.twig';

        return parent::editChildAction($request, array($service), $id);
    }

    /**
     * Overrides parent method.
     * @param $object
     * @param $data (usually the form data)
     * @return boolean (true to continue, false to abort)
     */
    protected function preSaveObject(&$object, $data)
    {
        $data = (isset($data['form']) ? $data['form'] : $data);
        $isVatIncluded = (isset($data['isVatIncluded']) ? $data['isVatIncluded'] : false);
        $priceService = $this->get('app.service.price');
        $vatCodePercentage = $object->getServiceObj()->getVatCodeObj()->getPercentage();
        $errorMessage = null;

        // If used method is "FIXED", then value is used directly,
        // so we need to calc value according with isVatIncluded user preferences.
        if (isset($data['costMethod']) && ($data['costMethod'] == 'FIXED')) {
            echo("Fix this values and test with: 10 12,3 25");
            var_dump($data);exit;
            $splitValue = $priceService->getTotalUnitDetail($data['user_costValue'], $vatCodePercentage, $isVatIncluded);
            if (!$priceService->isEqual($data['costValue'], $splitValue['value'])) {
                $errorMessage = ('Invalid value was detected:<br/>'
                    . $data['costValue'] . ' Does not match with ' . $splitValue['value']
                );
            }
        }
        if (!$errorMessage && isset($data['marginMethod']) && ($data['marginMethod'] == 'FIXED')) {
            echo("Fix this values and test with: 10 12,3 25");
            var_dump($data);exit;
            $splitValue = $priceService->getTotalUnitDetail($data['user_marginValue'], $vatCodePercentage, $isVatIncluded);
            if (!$priceService->isEqual($data['marginValue'], $splitValue['value'])) {
                $errorMessage = ('Invalid value was detected:<br/>'
                    . $data['marginValue'] . ' Does not match with ' . $splitValue['value']
                );
            }
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
}