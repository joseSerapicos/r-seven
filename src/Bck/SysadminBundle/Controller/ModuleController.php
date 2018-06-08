<?php

namespace Bck\SysadminBundle\Controller;

use AppBundle\Controller\BaseEntityController;
use Sensio\Bundle\FrameworkExtraBundle\Configuration\Route;
use Symfony\Component\HttpFoundation\Request;
use Bck\SysadminBundle\Entity\Module;

class ModuleController extends BaseEntityController
{
    /**
     * Initialization. Set all basic configuration
     * @param Request $request
     * @return $this
     * @throws \Exception
     */
    public function init(Request $request)
    {
        // Set configuration only once
        if($this->isInitialized) { return $this; }

        // Route
        $this->templateConf['route'] = array(
            'get' => array(
                'name' => '_bck__sysadmin__module__get'
            ),
            'edit' => array(
                'name' => '_bck__sysadmin__module__edit'
            ),
            'delete' => array(
                'name' => '_bck__sysadmin__module__delete'
            ),
            'detail' => array(
                'name' => '_bck__sysadmin__module__detail'
            )
        );

        parent::init($request);

        // Search
        $this->templateConf['search']['fields'] = $this->templateConf['fields']['view'];
        $this->templateConf['search']['orderBy'] = array(array('field' => 'priority', 'value' => 'ASC'));

        // Actions for template/view
        $this->templateConf['actions'] = array_merge(
            $this->templateConf['actions'],
            array(
                'copy' => $this->templateConf['acl']['add'],
                'detail' => true,
                'search' => true
            )
        );

        // Tree view configuration
        $this->flags['treeViewMode'] = true;
        $this->templateConf['treeView'] = array(
            'iconField' => 'icon',
            'localParentField' => 'appModuleObj'
        );

        // Legend (disable cancel legend)
        $this->templateConf['controls']['legend'] = array();

        return $this;
    }

    /**
     * @Route("/bck/sysadmin/module",
     *     name="_bck__sysadmin__module__index"
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
     * @Route("/bck/sysadmin/module/detail/{id}",
     *     name="_bck__sysadmin__module__detail",
     *     defaults={"id" = null},
     * )
     *
     * Detail action
     * @param Request $request
     * @param $id (this parameter is mandatory, but when the conf is set there is not any id to generate the route,
     * the id is provided at runtime so this requires a default value in the route definition)
     * @return mixed
     */
    public function detailAction(Request $request, $id)
    {
        return parent::detailAction($request, $id);
    }

    /**
     * @Route("/bck/sysadmin/module/get/{id}",
     *     name="_bck__sysadmin__module__get",
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
     * @Route("/bck/sysadmin/module/edit/{id}",
     *     name="_bck__sysadmin__module__edit",
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
     * @Route("/bck/sysadmin/module/delete/{id}",
     *     name="_bck__sysadmin__module__delete",
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