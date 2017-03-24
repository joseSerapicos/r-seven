<?php

namespace SysadminBundle\Controller;

use AppBundle\Controller\BaseEntityChildController;
use Sensio\Bundle\FrameworkExtraBundle\Configuration\Route;
use Symfony\Component\HttpFoundation\Request;
use SysadminBundle\Entity\Module;
use SysadminBundle\Entity\ModuleMenu;

class ModuleMenuController extends BaseEntityChildController
{
    /**
     * Overrides parent method
     * @param Request $request
     * @param $parents
     * @param $label (set label when you don't have the route in modules/menus tree)
     * @return $this
     */
    protected function initChild(Request $request, $parents, $label = 'Menus')
    {
        // Set configuration only once
        if($this->isInitialized) { return $this; }

        // Parent route
        $this->parentConf = array(
            'module' => array('route' => '_sysadmin__module__index')
        );

        // Route
        $this->templateConf['route'] = array(
            'get' => array(
                'name' => '_sysadmin__module_menu__get'
            ),
            'edit' => array(
                'name' => '_sysadmin__module_menu__edit',
            ),
            'delete' => array(
                'name' => '_sysadmin__module_menu__delete',
            )
        );

        parent::initChild($request, $parents, $label);

        // Search
        $this->templateConf['search']['fields'] = $this->templateConf['fields']['view'];
        $this->templateConf['search']['orderBy'] = array(array('field' => 'priority', 'value' => 'ASC'));

        // Actions for template/view
        $this->templateConf['actions'] = array_merge(
            $this->templateConf['actions'],
            array(
                'copy' => $this->templateConf['acl']['add']
            )
        );

        return $this;
    }

    /**
     * Overrides parent method
     * @param Request $request
     * @param $module
     * @return mixed
     */
    public function indexLocalChildAction(Request $request, $module)
    {
        return $this->indexChildAction($request, array($module));
    }

    /**
     * @Route("/sysadmin/module-menu/get/{module}/{id}",
     *     name="_sysadmin__module_menu__get",
     *     defaults={"id" = null},
     * )
     *
     * Overrides parent method
     * @param Request $request
     * @param $module
     * @param $id
     * @return mixed
     */
    public function getLocalChildAction(Request $request, $module, $id)
    {
        return parent::getChildAction($request, array($module), $id);
    }

    /**
     * @Route("/sysadmin/module-menu/edit/{module}/{id}",
     *     name="_sysadmin__module_menu__edit",
     *     defaults={"id" = null}
     * )
     *
     * Overrides parent method
     * @param Request $request
     * @param $module
     * @param $id
     * @return mixed
     */
    public function editLocalChildAction(Request $request, $module, $id)
    {
        return parent::editChildAction($request, array($module), $id);
    }

    /**
     * @Route("/sysadmin/module-menu/delete/{module}/{id}",
     *     name="_sysadmin__module_menu__delete",
     *     defaults={"id" = null},
     * )
     *
     * Overrides parent method
     * @param Request $request
     * @param $module
     * @param $id
     * @return mixed
     */
    public function deleteLocalChildAction(Request $request, $module, $id)
    {
        return parent::deleteChildAction($request, array($module), $id);
    }
}