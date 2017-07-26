<?php

namespace EntitiesBundle\Controller;

use AppBundle\Controller\BaseEntityController;
use Sensio\Bundle\FrameworkExtraBundle\Configuration\Route;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\JsonResponse;

class EntityGroupController extends BaseEntityController
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
                'name' => '_entities__entity_group__get'
            ),
            'edit' => array(
                'name' => '_entities__entity_group__edit'
            ),
            'delete' => array(
                'name' => '_entities__entity_group__delete'
            ),
            'detail' => array(
                'name' => '_entities__entity_group__detail'
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
                'detail' => true,
                'search' => true
            )
        );

        // Tree view configuration
        $this->templateConf['treeView'] = array(
            'iconDefault' => 'fa-users',
            'localParentField' => 'entityGroupObj' // User by TreeViewDataService
        );

        return $this;
    }

    /**
     * @Route("/entities/entity-group",
     *     name="_entities__entity_group__index"
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
     * @Route("/entities/entity-group/detail/{id}",
     *     name="_entities__entity_group__detail",
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
     * @Route("/entities/entity-group/get/{id}",
     *     name="_entities__entity_group__get",
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
     * @Route("/entities/entity-group/edit/{id}",
     *     name="_entities__entity_group__edit",
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
     * @Route("/entities/entity-group/delete/{id}",
     *     name="_entities__entity_group__delete",
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
     * @Route("/entities/entity-group/detail-tabs",
     *     name="_entities__entity_group__detail_tabs")
     *
     * Action to get the base to build the tabs in detail
     * @return mixed
     */
    public function detailTabsAction()
    {
        return $this->render('AppBundle:tabs:default.html.twig', array(
            '_containers' => array(
                array(
                    'label' => 'Entities'
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
        unset($options['limit'], $options['offset']); // It's user the tree-view template that don't have pagination
        
        $objs = $this->getLocalRepositoryService()
            ->execute(
                'queryBuilder',
                array(
                    $options
                )
            );

        $nodes = array();
        if (is_array($objs) && (count($objs) > 0)) {
            foreach ($objs as $obj) {
                $index = (empty($obj['entityGroupObj']) ? 0: $obj['entityGroupObj']);
                $nodes[$index][] = $obj;
            }
        }

        return $nodes;
    }
}