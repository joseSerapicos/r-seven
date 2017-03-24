<?php

namespace SysadminBundle\Controller;

use AppBundle\Controller\BaseEntityController;
use Sensio\Bundle\FrameworkExtraBundle\Configuration\Route;
use Symfony\Component\HttpFoundation\Request;
use SysadminBundle\Entity\System;

class SystemController extends BaseEntityController
{
    /**
     * Initialization. Set all basic configuration
     * @param Request $request
     * @return $this
     * @throws \Exception
     */
    protected function init(Request $request)
    {
        // Set configuration only once
        if($this->isInitialized) { return $this; }

        // Route
        $this->templateConf['route'] = array(
            'get' => array(
                'name' => '_sysadmin__system__get'
            ),
            'edit' => array(
                'name' => '_sysadmin__system__edit'
            ),
            'delete' => array(
                'name' => '_sysadmin__system__delete'
            )
        );

        parent::init($request);

        // Search
        $this->templateConf['search']['fields'] = $this->templateConf['fields']['view'];

        // Actions for template/view
        $this->templateConf['actions'] = array_merge(
            $this->templateConf['actions'],
            array(
                'copy' => $this->templateConf['acl']['add'],
                'search' => true
            )
        );
        
        // Extra data
        $this->templateConf['extraData']['service'] = array(
            'fields' => array(
                'dbPassword' => null
            )
        );

        return $this;
    }

    /**
     * @Route("/sysadmin/system",
     *     name="_sysadmin__system__index"
     * )
     *
     * Index action
     * @param Request $request
     * @return mixed
     */
    public function indexAction(Request $request)
    {
        return parent::indexAction($request);
    }

    /**
     * @Route("/sysadmin/system/get/{id}",
     *     name="_sysadmin__system__get",
     *     defaults={"id" = null},
     * )
     *
     * Action to get a list/array of compact objects from the search configuration
     * or a regular object if the "id" is provided
     * @param Request $request
     * @param $id
     * @return mixed
     */
    public function getAction(Request $request, $id)
    {
        return parent::getAction($request, $id);
    }

    /**
     * @Route("/sysadmin/system/edit/{id}",
     *     name="_sysadmin__system__edit",
     *     defaults={"id" = null},
     * )
     *
     * Action to edit/add objects using the form
     * @param Request $request
     * @param $id
     * @return mixed
     */
    public function editAction(Request $request, $id)
    {
        return parent::editAction($request, $id);
    }

    /**
     * @Route("/sysadmin/system/delete/{id}",
     *     name="_sysadmin__system__delete",
     *     defaults={"id" = null},
     * )
     *
     * Action to delete object or list of objects
     * @param Request $request
     * @param $id
     * @return mixed
     */
    public function deleteAction(Request $request, $id)
    {
        return parent::deleteAction($request, $id);
    }
}