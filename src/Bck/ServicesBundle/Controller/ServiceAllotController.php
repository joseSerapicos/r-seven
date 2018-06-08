<?php

namespace Bck\ServicesBundle\Controller;

use AppBundle\Controller\BaseEntityChildController;
use Sensio\Bundle\FrameworkExtraBundle\Configuration\Route;
use Symfony\Component\HttpFoundation\Request;

class ServiceAllotController extends BaseEntityChildController
{
    /**
     * Get label/title to display child in parent
     * @return mixed
     */
    static function getLabel() { return 'Allot'; }

    /**
     * Overrides parent method
     * @param Request $request
     * @param $parents
     * @return $this
     */
    public function init(Request $request, $parents = null)
    {
        // Set configuration only once
        if($this->isInitialized) { return $this; }

        // Parent route
        $this->parentConf = array(
            'service' => array('route' => '_bck__services__service__index')
        );

        // Route
        $this->templateConf['route'] = array(
            'get' => array(
                'name' => '_bck__services__service_allot__get'
            ),
            'edit' => array(
                'name' => '_bck__services__service_allot__edit',
            ),
            'delete' => array(
                'name' => '_bck__services__service_allot__delete',
            )
        );

        parent::init($request, $parents);

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
     * @Route("/bck/services/service-allot/get/{service}/{id}",
     *     name="_bck__services__service_allot__get",
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
     * @Route("/bck/services/service-allot/edit/{service}/{id}",
     *     name="_bck__services__service_allot__edit",
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
        return parent::editChildAction($request, array($service), $id);
    }

    /**
     * @Route("/bck/services/service-allot/delete/{service}/{id}",
     *     name="_bck__services__service_allot__delete",
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
     * @Route("/bck/services/service-allot/data/{service}",
     *     name="_bck__services__service_allot__data"
     * )
     *
     * Overrides parent method
     * @param Request $request
     * @param $service
     * @param $responseType (not used in route, only for direct symfony calls,
     *     determines the type of response [http, json, array])
     * @return mixed
     */
    public function dataLocalChildAction(Request $request, $service, $responseType = 'http')
    {
        return parent::dataChildAction($request, array($service), $responseType);
    }

    /**
     * @Route("/bck/services/service-allot/conf/{service}/{id}",
     *     name="_bck__services__service_allot__conf",
     *     defaults={"id" = null}
     * )
     *
     * Overrides parent method
     * @param Request $request
     * @param $service
     * @param $id (return the target id object with the conf, it's used to avoid to make another server request
     *     to get the object when we need the object with the conf, like in flat forms, entity detail, etc.)
     * @return mixed
     */
    public function confLocalChildAction(Request $request, $service, $id = null)
    {
        return parent::confChildAction($request, array($service), $id);
    }

    /**
     * Get allot info by date
     * @param $controller
     * @param $serviceObj
     * @param $date
     * @param $allotTargetServiceObj (target service object, to get allot of specific service (like packages))
     * @return array
     */
    static function getAllotInfoByDate($controller, $serviceObj, $date, $allotTargetServiceObj = null)
    {
        $totalAllot = $controller->getRepositoryService('ServiceAllot', 'ServicesBundle', 'Bck')->execute(
            'getAllotByDate',
            array($serviceObj, $date, $allotTargetServiceObj)
        );

        $busyAllot = $controller->getRepositoryService('BookingService', 'BookingBundle', 'Bck')->execute(
            'getBusyAllotByDate',
            array($serviceObj, $date, $allotTargetServiceObj)
        );

        return array(
            'total' => $totalAllot,
            'busy' => $busyAllot,
            'free' => ($totalAllot - $busyAllot),
            'type' => ($allotTargetServiceObj ? $allotTargetServiceObj->__toString() : 'Regular')
        );
    }
}