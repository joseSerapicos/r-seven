<?php
namespace Bck\AdminBundle\Controller;

use AppBundle\Controller\BaseEntityChildController;
use Sensio\Bundle\FrameworkExtraBundle\Configuration\Route;
use Symfony\Component\HttpFoundation\Request;
use Bck\AdminBundle\Entity\Store;
use Bck\AdminBundle\Entity\StoreLink;

class StoreLinkController extends BaseEntityChildController
{
    /**
     * Get label/title to display child in parent
     * @return mixed
     */
    static function getLabel() { return 'Links'; }

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

        // Flags
        $this->flags['handleStore'] = false; // Store is handled by parent dependency

        // Parent route
        $this->parentConf = array(
            'store' => array('route' => '_bck__admin__store__index')
        );

        // Route
        $this->templateConf['route'] = array(
            'get' => array(
                'name' => '_bck__admin__store_link__get'
            ),
            'edit' => array(
                'name' => '_bck__admin__store_link__edit',
            ),
            'delete' => array(
                'name' => '_bck__admin__store_link__delete',
            )
        );

        parent::init($request, $parents);

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
     * @Route("/bck/admin/store-link/get/{store}/{id}",
     *     name="_bck__admin__store_link__get",
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
     * @Route("/bck/admin/store-link/edit/{store}/{id}",
     *     name="_bck__admin__store_link__edit",
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
     * @Route("/bck/admin/store-link/delete/{store}/{id}",
     *     name="_bck__admin__store_link__delete",
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
     * @Route("/bck/admin/store-link/data/{store}",
     *     name="_bck__admin__store_link__data"
     * )
     *
     * Overrides parent method
     * @param Request $request
     * @param $store
     * @param $responseType (not used in route, only for direct symfony calls,
     *     determines the type of response [http, json, array])
     * @return mixed
     */
    public function dataLocalChildAction(Request $request, $store, $responseType = 'http')
    {
        return parent::dataChildAction($request, array($store), $responseType);
    }

    /**
     * @Route("/bck/admin/store-link/conf/{store}/{id}",
     *     name="_bck__admin__store_link__conf",
     *     defaults={"id" = null}
     * )
     *
     * Overrides parent method
     * @param Request $request
     * @param $store
     * @param $id (return the target id object with the conf, it's used to avoid to make another server request
     *     to get the object when we need the object with the conf, like in flat forms, entity detail, etc.)
     * @return mixed
     */
    public function confLocalChildAction(Request $request, $store, $id = null)
    {
        return parent::confChildAction($request, array($store), $id);
    }
}