<?php

namespace Bck\SysadminBundle\Controller;

use AppBundle\Controller\BaseEntityChildController;
use Sensio\Bundle\FrameworkExtraBundle\Configuration\Route;
use Symfony\Component\HttpFoundation\Request;
use Bck\SysadminBundle\Entity\Module;
use Bck\SysadminBundle\Entity\ModuleMenu;

class ModuleMenuController extends BaseEntityChildController
{
    /**
     * Get label/title to display child in parent
     * @return mixed
     */
    static function getLabel() { return 'Menus'; }

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
            'module' => array('route' => '_bck__sysadmin__module__index')
        );

        // Route
        $this->templateConf['route'] = array(
            'get' => array(
                'name' => '_bck__sysadmin__module_menu__get'
            ),
            'edit' => array(
                'name' => '_bck__sysadmin__module_menu__edit',
            ),
            'delete' => array(
                'name' => '_bck__sysadmin__module_menu__delete',
            )
        );

        parent::init($request, $parents);

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
     * @Route("/bck/sysadmin/module-menu/get/{module}/{id}",
     *     name="_bck__sysadmin__module_menu__get",
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
     * @Route("/bck/sysadmin/module-menu/edit/{module}/{id}",
     *     name="_bck__sysadmin__module_menu__edit",
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
     * @Route("/bck/sysadmin/module-menu/delete/{module}/{id}",
     *     name="_bck__sysadmin__module_menu__delete",
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