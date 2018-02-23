<?php

namespace ServicesBundle\Controller;

use AppBundle\Controller\BaseEntityChildController;
use Sensio\Bundle\FrameworkExtraBundle\Configuration\Route;
use Symfony\Component\HttpFoundation\Request;

class PackageServiceServiceController extends BaseEntityChildController
{
    /**
     * Overrides parent method
     * @param Request $request
     * @param $parents
     * @param $label (set label when you don't have the route in modules/menus tree)
     * @return $this
     */
    protected function initChild(Request $request, $parents, $label = 'Allot')
    {
        // Set configuration only once
        if($this->isInitialized) { return $this; }

        // Parent route
        $this->parentConf = array(
            'packageService' => array('route' => '_services__package_service__index')
        );

        // Route
        $this->templateConf['route'] = array(
            'get' => array(
                'name' => '_services__package_service_service__get'
            ),
            'edit' => array(
                'name' => '_services__package_service_service__edit',
            ),
            'delete' => array(
                'name' => '_services__package_service_service__delete',
            ),
            'order' => array(
                'name' => '_services__package_service_service__order',
            )
        );

        parent::initChild($request, $parents, $label);

        // Templates
        $this->localConf['templates']['edit'] = $this->localConf['templatesPath'].'edit.html.twig';

        // Set route for regular service detail
        $this->templateConf['route']['detail'] = array(
            'name' => '_services__regular_service__detail',
            'url' => $this->generateUrl('_services__regular_service__detail')
        );

        // Search
        $this->templateConf['search']['fields'] = array('id', 'icon', 'name', 'description', 'durationStartDay',
            'durationDays', 'isOptional', 'availability', 'price', 'allot');

        // Actions for template/view
        $this->templateConf['actions'] = array_merge(
            $this->templateConf['actions'],
            array(
                'copy' => $this->templateConf['acl']['add'],
                'detail' => true,
                'order' => true,
            )
        );

        // Extra data
        $this->templateConf['extraData']['template'] = array(
            'class' => '-merge-view'
        );

        return $this;
    }

    /**
     * @Route("/services/package-service-service/get/{packageService}/{id}",
     *     name="_services__package_service_service__get",
     *     defaults={"id" = null}
     * )
     *
     * Overrides parent method
     * @param Request $request
     * @param $packageService
     * @param $id
     * @return mixed
     */
    public function getLocalChildAction(Request $request, $packageService, $id)
    {
        return parent::getChildAction($request, array($packageService), $id);
    }

    /**
     * @Route("/services/package-service-service/edit/{packageService}/{id}",
     *     name="_services__package_service_service__edit",
     *     defaults={"id" = null}
     * )
     *
     * Overrides parent method
     * @param Request $request
     * @param $packageService
     * @param $id
     * @return mixed
     */
    public function editLocalChildAction(Request $request, $packageService, $id)
    {
        return parent::editChildAction($request, array($packageService), $id);
    }

    /**
     * @Route("/services/package-service-service/delete/{packageService}/{id}",
     *     name="_services__package_service_service__delete",
     *     defaults={"id" = null}
     * )
     *
     * Overrides parent method
     * @param Request $request
     * @param $packageService
     * @param $id
     * @return mixed
     */
    public function deleteLocalChildAction(Request $request, $packageService, $id)
    {
        return parent::deleteChildAction($request, array($packageService), $id);
    }

    /**
     * @Route("/services/package-service-service/order/{packageService}/{id}/{type}",
     *     name="_services__package_service_service__order",
     *     defaults={"id" = null, "type" = null}
     * )
     *
     * Overrides parent method
     * @param Request $request
     * @param $packageService
     * @param $id
     * @param $type
     * @return mixed
     */
    public function orderLocalChildAction(Request $request, $packageService, $id, $type)
    {
        return parent::orderChildAction($request, array($packageService), $id, $type);
    }

    /**
     * @Route("/services/package-service-service/data/{packageService}",
     *     name="_services__package_service_service__data"
     * )
     *
     * Overrides parent method
     * @param Request $request
     * @param $packageService
     * @return mixed
     */
    public function dataLocalChildAction(Request $request, $packageService)
    {
        return parent::dataChildAction($request, array($packageService));
    }

    /**
     * @Route("/services/package-service-service/conf/{packageService}",
     *     name="_services__package_service_service__conf"
     * )
     *
     * Overrides parent method
     * @param Request $request
     * @param $packageService
     * @return mixed
     */
    public function confLocalChildAction(Request $request, $packageService)
    {
        return parent::confChildAction($request, array($packageService));
    }
}