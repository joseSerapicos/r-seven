<?php

namespace Bck\ServicesBundle\Controller;

use AppBundle\Controller\BaseEntityChildController;
use Sensio\Bundle\FrameworkExtraBundle\Configuration\Route;
use Symfony\Component\HttpFoundation\Request;

class PackageServiceServiceController extends BaseEntityChildController
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
            'packageService' => array('route' => '_bck__services__package_service__index')
        );

        // Route
        $this->templateConf['route'] = array(
            'get' => array(
                'name' => '_bck__services__package_service_service__get'
            ),
            'edit' => array(
                'name' => '_bck__services__package_service_service__edit',
            ),
            'delete' => array(
                'name' => '_bck__services__package_service_service__delete',
            ),
            'detail' => array(
                'name' => '_bck__services__package_service_service__detail'
            ),
            'order' => array(
                'name' => '_bck__services__package_service_service__order',
            )
        );

        parent::init($request, $parents);

        // Templates
        $this->localConf['templates']['edit'] = $this->localConf['templatesPath'].'edit.html.twig';

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
     * @Route("/bck/services/package-service-service/get/{packageService}/{id}",
     *     name="_bck__services__package_service_service__get",
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
     * @Route("/bck/services/package-service-service/edit/{packageService}/{id}",
     *     name="_bck__services__package_service_service__edit",
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
     * @Route("/bck/services/package-service-service/delete/{packageService}/{id}",
     *     name="_bck__services__package_service_service__delete",
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
     * @Route("/bck/services//package-service-service/detail/{packageService}/{id}",
     *     name="_bck__services__package_service_service__detail",
     *     defaults={"id" = null},
     * )
     *
     * Overrides parent method
     * @param Request $request
     * @param $packageService
     * @param $id
     * @return mixed
     */
    public function detailLocalChildAction(Request $request, $packageService, $id)
    {
        // Set configuration
        $this->init($request, array($packageService));

        $obj = $this->getObject($id);

        // NOTE: You can make here a switch case in case of PackageServiceService has multiple types of Service

        // Get the RegularService id correspondent
        $regularServiceObj = $this->getRepositoryService('RegularService', 'ServicesBundle', 'Bck')
            ->execute(
                'findOneByServiceObj',
                array($obj->getServiceObj())
            );


        // Return to the correspondent action
        $request->attributes->set('_route', '_bck__services__regular_service__detail');
        return $this->forward('BckServicesBundle\Controller\RegularServiceController::detailAction', array(
            'request' => $request,
            'id'  => $regularServiceObj->getId()
        ));
    }

    /**
     * @Route("/bck/services/package-service-service/order/{packageService}/{id}/{type}",
     *     name="_bck__services__package_service_service__order",
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
     * @Route("/bck/services/package-service-service/data/{packageService}",
     *     name="_bck__services__package_service_service__data"
     * )
     *
     * Overrides parent method
     * @param Request $request
     * @param $packageService
     * @param $responseType (not used in route, only for direct symfony calls,
     *     determines the type of response [http, json, array])
     * @return mixed
     */
    public function dataLocalChildAction(Request $request, $packageService, $responseType = 'http')
    {
        return parent::dataChildAction($request, array($packageService), $responseType);
    }

    /**
     * @Route("/bck/services/package-service-service/conf/{packageService}/{id}",
     *     name="_bck__services__package_service_service__conf",
     *     defaults={"id" = null}
     * )
     *
     * Overrides parent method
     * @param Request $request
     * @param $packageService
     * @param $id (return the target id object with the conf, it's used to avoid to make another server request
     *     to get the object when we need the object with the conf, like in flat forms, entity detail, etc.)
     * @return mixed
     */
    public function confLocalChildAction(Request $request, $packageService, $id = null)
    {
        return parent::confChildAction($request, array($packageService), $id);
    }
}