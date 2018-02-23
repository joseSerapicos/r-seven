<?php

namespace ServicesBundle\Controller;

use Sensio\Bundle\FrameworkExtraBundle\Configuration\Route;
use Symfony\Component\HttpFoundation\Request;

class ServiceSupplementController extends BaseServicePriceExceptionController
{
    /**
     * Overrides parent method
     * @param Request $request
     * @param $parents
     * @param $label (set label when you don't have the route in modules/menus tree)
     * @return $this
     */
    protected function initChild(Request $request, $parents, $label = 'Supplements')
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
                'name' => '_services__service_supplement__get'
            ),
            'edit' => array(
                'name' => '_services__service_supplement__edit',
            ),
            'delete' => array(
                'name' => '_services__service_supplement__delete',
            )
        );

        // Overrides entity
        $this->localConf['entity'] = 'ServicePriceException';

        parent::initChild($request, $parents, $label);

        // Search
        // Mandatory criteria
        $this->localConf['search']['criteria'][] = array(
            'field' => 'postingType',
            'expr' => 'eq',
            'value' => 'DEBIT'
        );
        $this->templateConf['search']['fields'] = $this->templateConf['fields']['view'];
        // Unexpired dates (this filter is enough, because "endDate" is always > then "startDate")
        $this->templateConf['search']['criteria'][] = array(
            'field' => 'endDate',
            'expr' => 'gte',
            'value' => date("Y-m-d")
        );
        $this->templateConf['search']['orderBy'] = array(array('field' => 'startDate', 'value' => 'Desc'));

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
     * @Route("/services/service-supplement/get/{service}/{id}",
     *     name="_services__service_supplement__get",
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
     * @Route("/services/service-supplement/edit/{service}/{id}",
     *     name="_services__service_supplement__edit",
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
        return parent::editLocalChildAction($request, $service, $id);
    }

    /**
     * @Route("/services/service-supplement/delete/{service}/{id}",
     *     name="_services__service_supplement__delete",
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
     * @Route("/services/service-supplement/data/{service}",
     *     name="_services__service_supplement__data"
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
     * @Route("/services/service-supplement/conf/{service}",
     *     name="_services__service_supplement__conf"
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
     * New object
     * @return object
     */
    protected function newObject()
    {
        $obj = parent::newObject();
        $obj->setPostingType("DEBIT");

        return $obj;
    }
}