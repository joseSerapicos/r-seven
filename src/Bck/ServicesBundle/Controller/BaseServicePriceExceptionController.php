<?php

namespace Bck\ServicesBundle\Controller;

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
        $this->init($request, $parents);
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
        // For now only values are sent, is not sent vatValue nor totalUnitValue, so there are no validations to make
        return true;

        /*
        $data = (isset($data['form']) ? $data['form'] : $data);
        $isVatIncluded = (isset($data['isVatIncluded']) ? $data['isVatIncluded'] : false);
        $priceService = $this->get('app.service.price');
        $vatCodePercentage = $object->getServiceObj()->getVatCodeObj()->getPercentage();
        $errorMessage = null;

        // Validations...

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
        */
    }
}