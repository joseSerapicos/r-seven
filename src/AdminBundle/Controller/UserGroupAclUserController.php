<?php

namespace AdminBundle\Controller;

use AppBundle\Controller\BaseEntityChildController;
use Sensio\Bundle\FrameworkExtraBundle\Configuration\Route;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\JsonResponse;
use AdminBundle\Entity\Entity;
use AdminBundle\Entity\UserGroupAclUser;

class UserGroupAclUserController extends BaseEntityChildController
{
    /**
     * Overrides parent method
     * @param Request $request
     * @param $parents
     * @param $label (set label when you don't have the route in modules/menus tree)
     * @return $this
     */
    protected function initChild(Request $request, $parents, $label = 'Users')
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
                'name' => '_admin__user_group_acl_user__get'
            ),
            'edit' => array(
                'name' => '_admin__user_group_acl_user__edit',
            ),
            'delete' => array(
                'name' => '_admin__user_group_acl_user__delete',
            )
        );

        parent::initChild($request, $parents, $label);

        // Remove the logged user
        $session = $this->get('session');
        $loggedUserId = $session->get('_app.user')['id'];
        $this->localConf['search']['criteria'][] = array(
            'field' => 'userObj',
            'expr' => 'neq',
            'value' => $loggedUserId
        );
        // Variables
        $this->localConf['form']['buttons'] = 'none';
        $this->localConf['templates']['edit'] = 'AdminBundle:UserGroupAclUser:form.html.twig';

        // Search
        $this->templateConf['search']['fields'] = $this->templateConf['fields']['view'];
        // To show the last inserted in the first position
        $this->templateConf['search']['orderBy'] = array(array('field' => 'id', 'value' => 'DESC'));
        // Disable pagination
        $this->templateConf['search']['limit'] = $this->templateConf['search']['offset'] = null;

        // Actions for template/view
        $this->templateConf['actions'] = array(
            'delete' => $this->templateConf['acl']['delete']
        );

        // Extra data
        $this->templateConf['extraData']['template'] = array(
            'class' => '-merge-view'
        );

        return $this;
    }

    /**
     * @Route("/admin/user-group-acl-user/get/{userGroupAcl}/{id}",
     *     name="_admin__user_group_acl_user__get",
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
     * @Route("/admin/user-group-acl-user/edit/{userGroupAcl}/{id}",
     *     name="_admin__user_group_acl_user__edit",
     *     defaults={"id" = null}
     * )
     *
     * Overrides parent method
     * @param Request $request
     * @param $userGroupAcl
     * @param $id
     * @return mixed
     */
    public function editLocalChildAction(Request $request, $userGroupAcl, $id)
    {
        return parent::editChildAction($request, array($userGroupAcl), $id);
    }

    /**
     * @Route("/admin/user-group-acl-user/delete/{userGroupAcl}/{id}",
     *     name="_admin__user_group_acl_user__delete",
     *     defaults={"id" = null},
     * )
     *
     * Overrides parent method
     * @param Request $request
     * @param $userGroupAcl
     * @param $id
     * @return mixed
     */
    public function deleteLocalChildAction(Request $request, $userGroupAcl, $id)
    {
        return parent::deleteChildAction($request, array($userGroupAcl), $id);
    }

    /**
     * @Route("/admin/user-group-acl-user/data/{userGroupAcl}",
     *     name="_admin__user_group_acl_user__data"
     * )
     *
     * Overrides parent method
     * @param Request $request
     * @param $userGroupAcl
     * @return mixed
     */
    public function dataLocalChildAction(Request $request, $userGroupAcl)
    {
        return parent::dataChildAction($request, array($userGroupAcl));
    }

    /**
     * @Route("/admin/user-group-acl-user/conf/{userGroupAcl}",
     *     name="_admin__user_group_acl_user__conf"
     * )
     *
     * Overrides parent method
     * @param Request $request
     * @param $userGroupAcl
     * @return mixed
     */
    public function confLocalChildAction(Request $request, $userGroupAcl)
    {
        return parent::confChildAction($request, array($userGroupAcl));
    }

    /**
     * Save object
     * @param $object
     * @param $hasFlush (it determines if should be executed the flush method to persist data in database)
     * @return $this
     */
    protected function saveObject(&$object, $hasFlush = true)
    {
        if (!$this->checkLoggedUserPermission($object)) {
            return $this->getResponse(true);
        }

        return parent::saveObject($object, $hasFlush);
    }

    /**
     * Delete object
     * @param $object
     * @param $hasFlush (it determines if should be executed the flush method to persist data in database)
     * @return $this
     */
    protected function deleteObject($object, $hasFlush = true)
    {
        if (!$this->checkLoggedUserPermission($object)) {
            return $this->getResponse(true);
        }

        return parent::deleteObject($object, $hasFlush);
    }

    /**
     * Check if logged user has permission to handle this object
     * @param $object
     * @return bool
     */
    protected function checkLoggedUserPermission($object)
    {
        $isAdmin = $this->get('security.authorization_checker')->isGranted('ROLE_ADMIN');

        if (!$isAdmin) {
            // Session info
            $session = $this->get('session');
            $loggedUserId = $session->get('_app.user')['id'];

            $objects = $this->getRepositoryService()->execute(
                'queryBuilder',
                array(
                    array(
                        'fields' => array(
                            'id'
                        ),
                        'criteria' => array(
                            array('field' => 'userGroupAclObj', 'expr' => 'eq', 'value' => $object->getUserGroupAclObj()->getId()),
                            array('field' => 'userObj', 'expr' => 'eq', 'value' => $loggedUserId)
                        )
                    )
                )
            );

            if (!is_array($objects) || (count($objects) < 1)) {
                $this->responseConf['status'] = 0;
                $this->addFlashMessage(
                    'Fail to persist data!<br/>Access violation!',
                    'Warning',
                    'warning'
                );
                return false;
            }
        }

        return true;
    }

    /**
     * Get list/array of objects by search configuration
     * @return null
     */
    protected function getObjectsBySearch() {
        $options = $this->getSearch();
        // @TODO add pagination in actions, add put this instruction automatically:
        // if (!$this->templateConf['actions']['pagination']) {...}
        unset($options['limit'], $options['offset']); // In this view doesn't have pagination

        $objects = $this->getLocalRepositoryService()
            ->execute(
                'queryBuilder',
                array(
                    $options
                )
            );

        return $objects;
    }
}