<?php

namespace AdminBundle\Controller;

use AdminBundle\Entity\UserGroupAclUser;
use AppBundle\Controller\BaseEntityController;
use Sensio\Bundle\FrameworkExtraBundle\Configuration\Route;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\JsonResponse;

class UserGroupAclController extends BaseEntityController
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
                'name' => '_admin__user_group_acl__get'
            ),
            'edit' => array(
                'name' => '_admin__user_group_acl__edit'
            ),
            'delete' => array(
                'name' => '_admin__user_group_acl__delete'
            ),
            'detail' => array(
                'name' => '_admin__user_group_acl__detail'
            ),
        );

        parent::init($request);
        
        // Search
        $this->templateConf['search']['fields'] = $this->templateConf['fields']['view'];

        // Actions for template/view
        $this->templateConf['actions'] = array_merge(
            $this->templateConf['actions'],
            array(
                'copy' => $this->templateConf['acl']['add'],
                'detail' => $this->templateConf['actions']['edit']
            )
        );

        // Tree view configuration
        $this->templateConf['treeView'] = array(
            'iconDefault' => 'fa-users'
        );

        // Extra data
        $this->templateConf['extraData']['service'] = array(
            'fields' => array(
                'userObjArr' => null
            ),
            'treeView' => array(
                'parentNodeField' => null
            )
        );

        return $this;
    }

    /**
     * @Route("/admin/user-group-acl",
     *     name="_admin__user_group_acl__index"
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
     * @Route("/admin/user-group-acl/detail/{id}",
     *     name="_admin__user_group_acl__detail",
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
     * @Route("/admin/user-group-acl/get/{id}",
     *     name="_admin__user_group_acl__get",
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
     * @Route("/admin/user-group-acl/edit/{id}",
     *     name="_admin__user_group_acl__edit",
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
     * @Route("/admin/user-group-acl/delete/{id}",
     *     name="_admin__user_group_acl__delete",
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

    /**
     * @Route("/admin/user-group-acl/detail-tabs",
     *     name="_admin__user_group_acl__detail_tabs")
     *
     * Action to get the base to build the tabs in detail
     * @return mixed
     */
    public function detailTabsAction()
    {
        return $this->render('AppBundle:tabs:default.html.twig', array(
            '_containers' => array(
                array(
                    'label' => 'ACL'
                ),
                array(
                    'label' => 'Users'
                )
            )
        ));
    }

    /**
     * Get list/array of objects by search configuration using the parent id as index to use in the tree-view
     * @param null $options (array with 'fields', 'criteria', 'orderBy', 'limit' and 'offset')
     * @return null
     */
    protected function getObjectsBySearch($options = null) {
        $options = $this->getSearch();
        unset($options['limit'], $options['offset']); // The tree-view template that don't have pagination

        // Session info
        $session = $this->get('session');
        $loggedUserId = $session->get('_app.user')['id'];
        $loggedUserRole = $session->get('_app.user')['role'];

        $objects = $this->get('admin.service.repository')
            ->setEntityRepository('AdminBundle:UserGroupAcl')
            ->execute(
                'getAllJoinWithUserGroupAclUser',
                array(
                    $options,
                    $loggedUserId,
                    $loggedUserRole
                )
            );

        // Put all objects in level '0' to simulate a tree-view of one level
        // (it's used the tree-view template to show the objects)
        if (is_array($objects) && (count($objects) > 0)) {
            return array(0 => $objects);
        }

        return $objects;
    }

    /**
     * Save object
     * @param $object
     * @param $hasFlush (it determines if should be executed the flush method to persist data in database)
     * @param $addToResponse (determines if object should be added to response)
     * @return $this
     */
    protected function saveObject(&$object, $hasFlush = true, $addToResponse = false)
    {
        // Save UserGroupAcl
        parent::saveObject($object, false, $addToResponse);

        // Check if the logged user has "Admin" privileges, if not it needs to add the logged user to the UserGroupAcl
        // so the logged user can access it.
        $isAdmin = $this->get('security.authorization_checker')->isGranted('ROLE_ADMIN');
        if (!$isAdmin) {
            // Get logged user obj
            $session = $this->get('session');
            $loggedUserId = $session->get('_app.user')['id'];
            $userObj = $this->get('admin.service.repository')
                ->setEntityRepository('AdminBundle:User')
                ->execute(
                    'findOneById',
                    array(
                        $loggedUserId
                    )
                );

            // Create a new UserGroupAclUser object
            $userGroupAclUserObj = new UserGroupAclUser();
            $userGroupAclUserObj->setUserGroupAclObj($object);
            $userGroupAclUserObj->setUserObj($userObj);

            // Save UserGroupAclUser
            parent::saveObject($userGroupAclUserObj, false);
        }

        // Save objects in database
        $this->flushEm();

        return $this;
    }
}