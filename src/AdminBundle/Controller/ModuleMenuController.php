<?php

namespace AdminBundle\Controller;

use AppBundle\Controller\BaseEntityChildController;
use Sensio\Bundle\FrameworkExtraBundle\Configuration\Route;
use Symfony\Component\HttpFoundation\Request;
use AdminBundle\Entity\Module;
use AdminBundle\Entity\ModuleMenu;

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
            'module' => array('route' => '_admin__module__index')
        );

        // Route
        $this->templateConf['route'] = array(
            'get' => array(
                'name' => '_admin__module_menu__get'
            ),
            'add' => array(
                'name' => '_admin__module_menu__add'
            ),
            'edit' => array(
                'name' => '_admin__module_menu__edit'
            ),
            'delete' => array(
                'name' => '_admin__module_menu__delete'
            )
        );

        parent::initChild($request, $parents, $label);

        // Entity
        $this->localConf['checkObjectManager'] = true; // Configure to check object because dependency of app database

        // Search
        $this->templateConf['search']['fields'] = $this->templateConf['fields']['view'];
        $this->templateConf['search']['orderBy'] = array(array('field' => 'priority', 'value' => 'ASC'));

        // Access control list (only sysadmin can add and remove modules)
        $isSysadmin = $this->get('security.authorization_checker')->isGranted('ROLE_SYSADMIN');
        $this->templateConf['acl']['add'] = $this->templateConf['acl']['delete'] = $isSysadmin;

        // Actions for template/view
        $this->templateConf['actions'] = array_merge(
            $this->templateConf['actions'],
            array(
                'add' => (
                    $this->templateConf['acl']['add']
                    && (count($this->templateConf['fieldsChoices']['appModuleMenuObj']['value']) > 0)
                ),
                'delete' => $this->templateConf['acl']['delete']
            )
        );

        $parent = reset($this->parentConf);
        $appModuleId = ($parent['obj'] ?
            $parent['obj']->getAppModuleObj()->getId() :
            0 // When parent is not defined like to get edit and add template
        );

        // Extra data
        $this->templateConf['extraData']['service'] = array(
            'appDependencyRouteGetUrl' => $this->generateUrl(
                '_sysadmin__module_menu__get',
                array(
                    'module' => $appModuleId
                )
            ),
            'appDependencyFieldKey' => 'appModuleMenuObj',
            'fields' => array(
                'appModuleMenuObj' => null
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
     * @Route("/admin/module-menu/get/{module}/{id}",
     *     name="_admin__module_menu__get",
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
     * @Route("/admin/module-menu/add/{module}",
     *     name="_admin__module_menu__add"
     * )
     *
     * Action to add objects using the form
     * @param Request $request
     * @param $module
     * @return mixed
     */
    public function addLocalChildAction(Request $request, $module)
    {
        // Set configuration
        $this->flags['hasForm'] = true;
        $this->initChild($request, array($module));

        // New object
        $obj = $this->newObject();

        // Build form
        $form = $this->createForm('AdminBundle\Form\ModuleMenuAddFormType', $obj);

        // Handle request
        $form->handleRequest($request);

        // Check if is submitted
        if($form->isSubmitted()) {
            $this->saveForm($form, $obj);
            return $this->getResponse(true);
        }

        // Render form
        return $this->render('AdminBundle:ModuleMenu:add-popup.html.twig', array(
            '_conf' => $this->templateConf,
            '_form' => $form->createView(),
            '_containers' => array(
                array(
                    'label' => 'Select Menu',
                ),
                array(
                    'label' => 'Fill Form',
                )
            )
        ));
    }

    /**
     * @Route("/admin/module-menu/edit/{module}/{id}",
     *     name="_admin__module_menu__edit",
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
        // Set configuration
        $this->flags['hasForm'] = true;
        $this->initChild($request, array($module));

        // Only visible in add mode
        if(($key = array_search('appModuleMenuObj', $this->templateConf['fields']['form'])) !== false) {
            unset($this->templateConf['fields']['form'][$key]);
        }

        return parent::editChildAction($request, array($module), $id);
    }

    /**
     * @Route("/admin/module-menu/delete/{module}/{id}",
     *     name="_admin__module_menu__delete",
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
        $response = parent::deleteChildAction($request, array($module), $id);

        if($this->responseConf['status'] === 1) {
            $session = $this->get('session');
            $store = $this->getStoreAttr('id');

            // Reinitialize app to update session with new data
            $this->get('app.service.app')->init($store);
        }
        
        return $response;
    }

    /**
     * Get appModuleMenuObj choices.
     * Overrides the original function "getFieldChoices"
     * @param $field
     * @return mixed
     */
    protected function getFieldChoices($field)
    {
        $parent = reset($this->parentConf);
        $appModuleId = ($parent['obj'] ?
            $parent['obj']->getAppModuleObj()->getId() :
            null // When parent is not defined like to get edit and add template
        );

        if (!$appModuleId) {
            return array();
        }

        $localRepositoryService = $this->getLocalRepositoryService();
        $systemRepositoryService = $this->get('sysadmin.service.repository')
            ->setEntityRepository('SysadminBundle:ModuleMenu');

        // Get added menus to exclude
        $subQb = $localRepositoryService->execute(
            'queryBuilder',
            array(
                array(
                    'fields' => array(
                        'appModuleMenuObj'
                    ),
                    'criteria' => array(
                        array('field' => 'moduleObj', 'expr' => 'eq', 'value' => $parent['obj'])
                    )
                )
            )
        );

        // Get menus that can be added
        $qb = $systemRepositoryService->execute(
            'queryBuilder',
            array(
                array(
                    'fields' => array(
                        'id',
                        'name',
                        'description',
                        'appModuleObj'
                    ),
                    'orderBy' => array(
                        array('field' => 'priority', 'value' => 'ASC')
                    )
                ),
                false
            )
        )
        ->where('app_module.id = ?1')
        ->setParameter(1, $appModuleId)
        ->andWhere('app_module.isEnabled = 1');
        if (is_array($subQb) && (count($subQb) > 0)) {
            $appMenus = (implode(",", array_column($subQb, 'appModuleMenuObj')));
            $qb->andWhere("app_moduleMenu.id NOT IN (".$appMenus.")");
        }

        return $systemRepositoryService->execute(
            'executeQueryBuilder',
            array(
                $qb
            )
        );
    }

    /**
     * Overrides parent method
     * @param $form
     * @param $object
     * @param $hasValidation
     * @param $hasFlush (it determines if should be executed the flush method to persist data in database)
     * @return $this
     */
    protected function saveForm($form, $object, $hasValidation = true, $hasFlush = true)
    {
        parent::saveForm($form, $object, $hasValidation);

        if($this->responseConf['status'] === 1) {
            $store = $this->getStoreAttr('id');

            // Reinitialize app to update session with new data
            $this->get('app.service.app')->init($store);
        }

        return $this;
    }
}