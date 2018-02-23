<?php

namespace ServicesBundle\Controller;

use AppBundle\Controller\BaseEntityChildController;
use Sensio\Bundle\FrameworkExtraBundle\Configuration\Route;
use Symfony\Component\HttpFoundation\Request;

class ServiceBonusController extends BaseEntityChildController
{
    /**
     * Overrides parent method
     * @param Request $request
     * @param $parents
     * @param $label (set label when you don't have the route in modules/menus tree)
     * @return $this
     */
    protected function initChild(Request $request, $parents, $label = 'Bonus')
    {
        // Set configuration only once
        if($this->isInitialized) { return $this; }

        // Parent route
        $this->parentConf = array(
            'service' => array('route' => '_services__service__index')
        );

        // Route
        $this->templateConf['route'] = array(
            'get' => array(
                'name' => '_services__service_bonus__get'
            ),
            'edit' => array(
                'name' => '_services__service_bonus__edit',
            ),
            'delete' => array(
                'name' => '_services__service_bonus__delete',
            )
        );

        parent::initChild($request, $parents, $label);

        // Search
        $this->templateConf['search']['fields'] = $this->templateConf['fields']['view'];
        // Unexpired dates (this filter is enough, because "endDate" is always > then "startDate")
        $this->templateConf['search']['criteria'][] = array(
            'field' => 'endDate',
            'expr' => 'gte',
            'value' => date("Y-m-d")
        );

        // Actions for template/view
        $this->templateConf['actions'] = array_merge(
            $this->templateConf['actions'],
            array(
                'search' => true
            )
        );

        // Extra data
        $this->templateConf['extraData']['template'] = array(
            'class' => '-merge-view',
            'hasMergeHeader' => true
        );

        return $this;
    }

    /**
     * @Route("/services/service-bonus/get/{service}/{id}",
     *     name="_services__service_bonus__get",
     *     defaults={"id" = null}
     * )
     *
     * Overrides parent method
     * @param Request $request
     * @param $service
     * @param $id
     * @return mixed
     */
    public function getLocalChildAction(Request $request, $service, $id)
    {
        return parent::getChildAction($request, array($service), $id);
    }

    /**
     * @Route("/services/service-bonus/edit/{service}/{id}",
     *     name="_services__service_bonus__edit",
     *     defaults={"id" = null}
     * )
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
     * @Route("/services/service-bonus/delete/{service}/{id}",
     *     name="_services__service_bonus__delete",
     *     defaults={"id" = null}
     * )
     *
     * Overrides parent method
     * @param Request $request
     * @param $service
     * @param $id
     * @return mixed
     */
    public function deleteLocalChildAction(Request $request, $service, $id)
    {
        return parent::deleteChildAction($request, array($service), $id);
    }

    /**
     * @Route("/services/service-bonus/data/{service}",
     *     name="_services__service_bonus__data"
     * )
     *
     * Overrides parent method
     * @param Request $request
     * @param $service
     * @return mixed
     */
    public function dataLocalChildAction(Request $request, $service)
    {
        return parent::dataChildAction($request, array($service));
    }

    /**
     * @Route("/services/service-bonus/conf/{service}",
     *     name="_services__service_bonus__conf"
     * )
     *
     * Overrides parent method
     * @param Request $request
     * @param $service
     * @return mixed
     */
    public function confLocalChildAction(Request $request, $service)
    {
        return parent::confChildAction($request, array($service));
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
        $vatCodePercentage = $object->getBonusServiceObj()->getVatCodeObj()->getPercentage();
        $errorMessage = null;

        // If used method is "FIXED", then value is used directly,
        // so we need to calc value according with isVatIncluded user preferences.
        if (isset($data['bonusMethod']) && ($data['bonusMethod'] == 'FIXED')) {
            echo("Fix this values and test with: 10 12,3 25");
            var_dump($data);exit;
            $splitValue = $priceService->getTotalUnitDetail($data['user_bonusValue'], $vatCodePercentage, $isVatIncluded);
            if (!$priceService->isEqual($data['bonusValue'], $splitValue['value'])) {
                $errorMessage = ('Invalid value was detected:<br/>'
                    . $data['bonusValue'] . ' Does not match with ' . $splitValue['value']
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