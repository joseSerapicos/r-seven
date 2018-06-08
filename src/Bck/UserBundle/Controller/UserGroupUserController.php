<?php

namespace Bck\UserBundle\Controller;

use AppBundle\Controller\BaseEntityChildController;
use Sensio\Bundle\FrameworkExtraBundle\Configuration\Route;
use Symfony\Component\HttpFoundation\Request;

class UserGroupUserController extends BaseEntityChildController
{
    /**
     * Get label/title to display child in parent
     * @return mixed
     */
    static function getLabel() { return 'Users'; }

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
            'userGroup' => array('route' => '_bck__user__user_group__index')
        );

        // Route
        $this->templateConf['route'] = array(
            'get' => array(
                'name' => '_bck__user__user_group_bck__user__get'
            ),
            'edit' => array(
                'name' => '_bck__user__user_group_bck__user__edit'
            ),
            'delete' => array(
                'name' => '_bck__user__user_group_bck__user__delete'
            )
        );

        parent::init($request, $parents);

        // Variables
        $this->localConf['templates']['edit'] = 'BckUserBundle:UserGroupUser:edit.html.twig';

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

        // Legend (disable cancel legend)
        $this->templateConf['controls']['legend'] = array();

        // Extra data
        $this->templateConf['extraData']['template'] = array(
            'class' => '-merge-view'
        );

        return $this;
    }

    /**
     * @Route("/bck/user/user-group-user/get/{userGroup}/{id}",
     *     name="_bck__user__user_group_bck__user__get",
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
     * @Route("/bck/user/user-group-user/edit/{userGroup}/{id}",
     *     name="_bck__user__user_group_bck__user__edit",
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
     * @Route("/bck/user/user-group-user/delete/{userGroup}/{id}",
     *     name="_bck__user__user_group_bck__user__delete",
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
     * @Route("/bck/user/user-group-user/data/{userGroup}",
     *     name="_bck__user__user_group_bck__user__data"
     * )
     *
     * Overrides parent method
     * @param Request $request
     * @param $userGroup
     * @param $responseType (not used in route, only for direct symfony calls,
     *     determines the type of response [http, json, array])
     * @return mixed
     */
    public function dataLocalChildAction(Request $request, $userGroup, $responseType = 'http')
    {
        return parent::dataChildAction($request, array($userGroup), $responseType);
    }

    /**
     * @Route("/bck/user/user-group-user/conf/{userGroup}/{id}",
     *     name="_bck__user__user_group_bck__user__conf",
     *     defaults={"id" = null}
     * )
     *
     * Overrides parent method
     * @param Request $request
     * @param $userGroup
     * @param $id (return the target id object with the conf, it's used to avoid to make another server request
     *     to get the object when we need the object with the conf, like in flat forms, entity detail, etc.)
     * @return mixed
     */
    public function confLocalChildAction(Request $request, $userGroup, $id = null)
    {
        return parent::confChildAction($request, array($userGroup), $id);
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