<?php

namespace UserBundle\Controller;

use AppBundle\Controller\BaseEntityChildController;
use Sensio\Bundle\FrameworkExtraBundle\Configuration\Route;
use Symfony\Component\HttpFoundation\Request;

class UserGroupUserController extends BaseEntityChildController
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
            'userGroup' => array('route' => '_user__user_group__index')
        );

        // Route
        $this->templateConf['route'] = array(
            'get' => array(
                'name' => '_user__user_group_user__get'
            ),
            'edit' => array(
                'name' => '_user__user_group_user__edit'
            ),
            'delete' => array(
                'name' => '_user__user_group_user__delete'
            )
        );

        parent::initChild($request, $parents, $label);

        // Variables
        $this->localConf['templates']['edit'] = 'UserBundle:UserGroupUser:edit.html.twig';

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
     * @Route("/user/user-group-user/get/{userGroup}/{id}",
     *     name="_user__user_group_user__get",
     *     defaults={"id" = null}
     * )
     *
     * Overrides parent method
     * @param Request $request
     * @param $userGroup
     * @param $id
     * @return mixed
     */
    public function getLocalChildAction(Request $request, $userGroup, $id)
    {
        return parent::getChildAction($request, array($userGroup), $id);
    }

    /**
     * @Route("/user/user-group-user/edit/{userGroup}/{id}",
     *     name="_user__user_group_user__edit",
     *     defaults={"id" = null}
     * )
     *
     * Overrides parent method
     * @param Request $request
     * @param $userGroup
     * @param $id
     * @return mixed
     */
    public function editLocalChildAction(Request $request, $userGroup, $id)
    {
        return parent::editChildAction($request, array($userGroup), $id);
    }

    /**
     * @Route("/user/user-group-user/delete/{userGroup}/{id}",
     *     name="_user__user_group_user__delete",
     *     defaults={"id" = null},
     * )
     *
     * Overrides parent method
     * @param Request $request
     * @param $userGroup
     * @param $id
     * @return mixed
     */
    public function deleteLocalChildAction(Request $request, $userGroup, $id)
    {
        return parent::deleteChildAction($request, array($userGroup), $id);
    }

    /**
     * @Route("/user/user-group-user/data/{userGroup}",
     *     name="_user__user_group_user__data"
     * )
     *
     * Overrides parent method
     * @param Request $request
     * @param $userGroup
     * @return mixed
     */
    public function dataLocalChildAction(Request $request, $userGroup)
    {
        return parent::dataChildAction($request, array($userGroup));
    }

    /**
     * @Route("/user/user-group-user/conf/{userGroup}",
     *     name="_user__user_group_user__conf"
     * )
     *
     * Overrides parent method
     * @param Request $request
     * @param $userGroup
     * @return mixed
     */
    public function confLocalChildAction(Request $request, $userGroup)
    {
        return parent::confChildAction($request, array($userGroup));
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