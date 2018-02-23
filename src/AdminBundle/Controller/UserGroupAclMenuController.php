<?php

namespace AdminBundle\Controller;

use AdminBundle\Entity\UserGroupAcl;
use AppBundle\Controller\BaseEntityChildController;
use Sensio\Bundle\FrameworkExtraBundle\Configuration\Route;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\JsonResponse;
use AdminBundle\Entity\ModuleMenu;

class UserGroupAclMenuController extends BaseEntityChildController
{
    /**
     * Overrides parent method
     * @param Request $request
     * @param $parents
     * @param $label (set label when you don't have the route in modules/menus tree)
     * @return $this
     */
    protected function initChild(Request $request, $parents, $label = 'ACL')
    {
        // Set configuration only once
        if($this->isInitialized) { return $this; }

        // Parent route
        $this->parentConf = array(
            'userGroupAcl' => array('route' => '_admin__user_group_acl__index')
        );

        // Route
        $this->templateConf['route'] = array(
            'get' => array(
                'name' => '_admin__user_group_acl_menu__get'
            ),
            'edit' => array(
                'name' => '_admin__user_group_acl_menu__edit',
            )
        );

        parent::initChild($request, $parents, $label);

        // Variables
        $this->localConf['templates']['edit'] = 'AppBundle:tree-view:form.html.twig';

        // Search
        $this->templateConf['search']['fields'] = $this->templateConf['fields']['view'];

        // Actions for template/view
        $this->templateConf['actions'] = array();

        // Tree view configuration
        $this->templateConf['treeView'] = array(
            'iconDefault' => 'fa-minus',
            'iconField' => 'icon'
        );

        // Extra data
        $this->templateConf['extraData'] = array(
            'template' => array(
                'class' => '-merge-view'
            )
        );

        return $this;
    }

    /**
     * @Route("/admin/user-group-acl-menu/get/{userGroupAcl}/{id}",
     *     name="_admin__user_group_acl_menu__get",
     *     defaults={"id" = null}
     * )
     *
     * Overrides parent method
     * @param Request $request
     * @param $userGroupAcl
     * @param $id
     * @return mixed
     */
    public function getLocalChildAction(Request $request, $userGroupAcl, $id)
    {
        return parent::getChildAction($request, array($userGroupAcl), $id);
    }

    /**
     * @Route("/admin/user-group-acl-menu/edit/{userGroupAcl}",
     *     name="_admin__user_group_acl_menu__edit"
     * )
     *
     * Overrides parent method
     * @param Request $request
     * @param $userGroupAcl
     * @return mixed
     */
    public function editLocalChildAction(Request $request, $userGroupAcl)
    {
        // Set configuration
        $this->flags['hasForm'] = true;
        $this->initChild($request, array($userGroupAcl));

        // Get new object
        $obj = $this->newObject();

        // Build form
        $form = $this->createForm($this->localConf['formTypeClass'], $obj);

        // Handle request
        $form->handleRequest($request);

        // Check if is submitted
        if($form->isSubmitted()) {
            if (!$this->validateForm($form)) {
                return $this->getResponse(true);
            }

            // Get request data
            $data = $this->getRequestData($request);

            // Save ACL's
            if (!empty($data['acl']) && is_array($data['acl'])) {
                foreach ($data['acl'] as $menu => $acl) {
                    // Get menu object
                    $moduleMenuObj = $this->getRepositoryService('ModuleMenu', 'AdminBundle')
                        ->execute(
                            'findOneById',
                            array($menu)
                        );
                    if (!($moduleMenuObj instanceof ModuleMenu)) {
                        continue; // Ignore
                    }

                    // Get local object
                    $obj = $this->getLocalRepositoryService()
                        ->execute(
                            'queryBuilder',
                            array(
                                array(
                                    'criteria' => array(
                                        array(
                                            'field' => 'userGroupAclObj',
                                            'expr' => 'eq',
                                            'value' => $this->parentConf['userGroupAcl']['obj']
                                        ),
                                        array(
                                            'field' => 'moduleMenuObj',
                                            'expr' => 'eq',
                                            'value' => $moduleMenuObj
                                        )
                                    )
                                ),
                                true,
                                'getOneOrNullResult'
                            )
                        );
                    if (!($obj instanceof $this->localConf['entityClass'])) {
                        $obj = $this->newObject();
                        $obj->setModuleMenuObj($moduleMenuObj);
                    }

                    $obj->setAcl($acl);
                    $this->saveObject($obj, false); // Only persist in manager, don't save in database
                }

                // Save in database all persisted objects
                $this->flushEm();
            }

            // Return
            if ($this->responseConf['status'] === 1) {
                // Refresh to update fields choices
                $this->refreshConf();

                // Set response conf
                $this->responseConf['hasObjects'] = true; // Updated list of ACL's

                // Flash messages to display to user
                $this->addFlashMessage(
                    'The data has been updated',
                    'Success',
                    'success'
                );
            }
            return $this->getResponse(true);
        }

        // Render form
        return $this->render($this->localConf['templates']['edit'], array(
            '_conf' => $this->templateConf,
            '_form' => $form->createView()
        ));
    }

    /**
     * Get list/array of objects by search configuration
     * @return null
     */
    protected function getObjectsBySearch() {
        // Parents Id's
        $userGroupAcl_id = ($this->parentConf['userGroupAcl']['obj'] ? $this->parentConf['userGroupAcl']['obj']->getId() : null);

        // Return empty choices
        if (!$userGroupAcl_id) {
            return array();
        }

        $isAdmin = $this->get('security.authorization_checker')->isGranted('ROLE_ADMIN');

        // Logged user info
        $session = $this->get('session');
        $loggedUserId = $session->get('_app.user')['id'];
        $loggedUserStore = $this->getStoreAttr('id');

        $userGroupAclObjArr = $this->get('admin.service.repository')
            ->setEntityRepository('AdminBundle:ModuleMenu')
            ->execute(
                'getAllJoinWithUserGroupAclMenu',
                array(
                    $isAdmin,
                    $userGroupAcl_id,
                    $loggedUserId,
                    $loggedUserStore
                )
            );

        $nodes = array();
        $modules = array();
        if (is_array($userGroupAclObjArr) && (count($userGroupAclObjArr) > 0)) {
            foreach ($userGroupAclObjArr as $userGroupAclObj) {
                // Prefix modules with negative "id" to avoid duplication of "id" between modules and menus when they
                // has the same "id", so objects can be maintained correctly in TreeViewDataService when objects are
                // filtered by "id" to avoid duplications.
                $module_id = ($userGroupAclObj['module_id'] * (-1));

                // Add entry in $modules
                if (!isset($modules[$module_id])) {
                    $modules[$module_id] = array(
                        'id' => $module_id,
                        'name' => $userGroupAclObj['module_name'],
                        'icon' => $userGroupAclObj['module_icon'],
                    );
                    $nodes[$module_id] = array();
                }

                // Add entry in menus with module_id as key
                $nodes[$module_id][] = array(
                    'id' => $userGroupAclObj['id'],
                    'name' => $userGroupAclObj['name'],
                    'acl' => $userGroupAclObj['acl']
                );
            }
        }

        if(!empty($modules)) {
            $nodes[0] = array_merge($modules, array()); // array_values doesn't work (increases one more level)!
        }
        return $nodes;
    }
}