<?php

namespace AdminBundle\Controller;

use AppBundle\Controller\BaseEntityChildController;
use Sensio\Bundle\FrameworkExtraBundle\Configuration\Route;
use Symfony\Component\HttpFoundation\Request;
use AdminBundle\Entity\Store;
use AdminBundle\Entity\StorePhone;

class StorePhoneController extends BaseEntityChildController
{
    /**
     * Overrides parent method
     * @param Request $request
     * @param $parents
     * @param $label (set label when you don't have the route in modules/menus tree)
     * @return $this
     */
    protected function initChild(Request $request, $parents, $label = 'Phones')
    {
        // Set configuration only once
        if($this->isInitialized) { return $this; }

        // Flags
        $this->flags['handleStore'] = false; // Store is handled by parent dependency

        // Parent route
        $this->parentConf = array(
            'store' => array('route' => '_admin__store__index')
        );

        // Route
        $this->templateConf['route'] = array(
            'get' => array(
                'name' => '_admin__store_phone__get'
            ),
            'edit' => array(
                'name' => '_admin__store_phone__edit',
            ),
            'delete' => array(
                'name' => '_admin__store_phone__delete',
            )
        );

        parent::initChild($request, $parents, $label);

        // Search
        $this->templateConf['search']['fields'] = $this->templateConf['fields']['view'];
        // Empty criteria to be able to see all registers because "search" action is disabled.
        $this->templateConf['search']['criteria'] = array();

        // Actions for template/view
        $this->templateConf['actions'] = array_merge(
            $this->templateConf['actions'],
            array(
                'copy' => $this->templateConf['acl']['add']
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
     * @Route("/admin/store-phone/get/{store}/{id}",
     *     name="_admin__store_phone__get",
     *     defaults={"id" = null}
     * )
     *
     * Overrides parent method
     * @param Request $request
     * @param $store
     * @param $id
     * @return mixed
     */
    public function getLocalChildAction(Request $request, $store, $id)
    {
        return parent::getChildAction($request, array($store), $id);
    }

    /**
     * @Route("/admin/store-phone/edit/{store}/{id}",
     *     name="_admin__store_phone__edit",
     *     defaults={"id" = null}
     * )
     *
     * Overrides parent method
     * @param Request $request
     * @param $store
     * @param $id
     * @return mixed
     */
    public function editLocalChildAction(Request $request, $store, $id)
    {
        return parent::editChildAction($request, array($store), $id);
    }

    /**
     * @Route("/admin/store-phone/delete/{store}/{id}",
     *     name="_admin__store_phone__delete",
     *     defaults={"id" = null}
     * )
     *
     * Overrides parent method
     * @param Request $request
     * @param $store
     * @param $id
     * @return mixed
     */
    public function deleteLocalChildAction(Request $request, $store, $id)
    {
        return parent::deleteChildAction($request, array($store), $id);
    }

    /**
     * @Route("/admin/store-phone/data/{store}",
     *     name="_admin__store_phone__data"
     * )
     *
     * Overrides parent method
     * @param Request $request
     * @param $store
     * @return mixed
     */
    public function dataLocalChildAction(Request $request, $store)
    {
        return parent::dataChildAction($request, array($store));
    }

    /**
     * @Route("/admin/store-phone/conf/{store}",
     *     name="_admin__store_phone__conf"
     * )
     *
     * Overrides parent method
     * @param Request $request
     * @param $store
     * @return mixed
     */
    public function confLocalChildAction(Request $request, $store)
    {
        return parent::confChildAction($request, array($store));
    }
}