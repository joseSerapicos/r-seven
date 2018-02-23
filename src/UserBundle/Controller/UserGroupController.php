<?php

namespace UserBundle\Controller;

use AppBundle\Controller\BaseEntityController;
use Sensio\Bundle\FrameworkExtraBundle\Configuration\Route;
use Symfony\Component\HttpFoundation\Request;

class UserGroupController extends BaseEntityController
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
                'name' => '_user__user_group__get'
            ),
            'edit' => array(
                'name' => '_user__user_group__edit'
            ),
            'delete' => array(
                'name' => '_user__user_group__delete'
            ),
            'detail' => array(
                'name' => '_user__user_group__detail'
            ),
        );

        parent::init($request);

        // Search
        $this->templateConf['search']['fields'] = array('name', 'isEnabled');

        // Actions for template/view
        $this->templateConf['actions'] = array_merge(
            $this->templateConf['actions'],
            array(
                'copy' => $this->templateConf['acl']['add'],
                'detail' => $this->templateConf['actions']['edit']
            )
        );

        // Tree view configuration
        $this->flags['treeViewMode'] = true;
        $this->templateConf['treeView'] = array(
            'iconDefault' => 'fa-users'
        );

        return $this;
    }

    /**
     * @Route("/user/user-group",
     *     name="_user__user_group__index"
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
     * @Route("/user/user-group/detail/{id}",
     *     name="_user__user_group__detail",
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
     * @Route("/user/user-group/get/{id}",
     *     name="_user__user_group__get",
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
     * @Route("/user/user-group/edit/{id}",
     *     name="_user__user_group__edit",
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
     * @Route("/user/user-group/delete/{id}",
     *     name="_user__user_group__delete",
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
     * @Route("/user/user-group/detail-tabs",
     *     name="_user__user_group__detail_tabs")
     *
     * Action to get the base to build the tabs in detail
     * @return mixed
     */
    public function detailTabsAction()
    {
        return $this->render('AppBundle:tabs:default.html.twig', array(
            '_containers' => array(
                array(
                    'label' => 'Users'
                )
            )
        ));
    }

    /**
     * New object
     * @return object
     */
    protected function newObject()
    {
        $obj = parent::newObject();

        // Get logged user obj
        $session = $this->get('session');
        $loggedUserId = $session->get('_app.user')['id'];
        $userObj = $this->getRepositoryService('User', 'AdminBundle')
            ->execute(
                'findOneById',
                array(
                    $loggedUserId
                )
            );

        $obj->setUserObj($userObj);

        return $obj;
    }
}