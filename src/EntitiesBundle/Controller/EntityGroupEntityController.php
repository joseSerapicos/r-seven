<?php

namespace EntitiesBundle\Controller;

use AppBundle\Controller\BaseEntityChildController;
use Sensio\Bundle\FrameworkExtraBundle\Configuration\Route;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\JsonResponse;
use EntitiesBundle\Entity\Entity;
use EntitiesBundle\Entity\EntityGroupEntity;

class EntityGroupEntityController extends BaseEntityChildController
{
    /**
     * Get label/title to display child in parent
     * @return mixed
     */
    static function getLabel() { return 'Entities'; }

    /**
     * Overrides parent method
     * @param Request $request
     * @param $parents
     * @return $this
     */
    protected function initChild(Request $request, $parents)
    {
        // Set configuration only once
        if($this->isInitialized) { return $this; }

        // Parent route
        $this->parentConf = array(
            'entityGroup' => array('route' => '_entities__entity_group__index')
        );

        // Route
        $this->templateConf['route'] = array(
            'get' => array(
                'name' => '_entities__entity_group_entity__get'
            ),
            'edit' => array(
                'name' => '_entities__entity_group_entity__edit',
            ),
            'delete' => array(
                'name' => '_entities__entity_group_entity__delete',
            )
        );

        parent::initChild($request, $parents);

        // Variables
        $this->localConf['templates']['edit'] = 'EntitiesBundle:EntityGroupEntity:form.html.twig';

        // Search
        $this->templateConf['search']['fields'] = $this->templateConf['fields']['view'];
        // To show the last inserted in the first position
        $this->templateConf['search']['orderBy'] = array(array('field' => 'id', 'value' => 'DESC'));

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
     * @Route("/entities/entity-group-entity/get/{entityGroup}/{id}",
     *     name="_entities__entity_group_entity__get",
     *     defaults={"id" = null}
     * )
     *
     * Overrides parent method
     * @param Request $request
     * @param $entityGroup
     * @param $id
     * @return mixed
     */
    public function getLocalChildAction(Request $request, $entityGroup, $id)
    {
        return parent::getChildAction($request, array($entityGroup), $id);
    }

    /**
     * @Route("/entities/entity-group-entity/edit/{entityGroup}/{id}",
     *     name="_entities__entity_group_entity__edit",
     *     defaults={"id" = null}
     * )
     *
     * Overrides parent method
     * @param Request $request
     * @param $entityGroup
     * @param $id
     * @return mixed
     */
    public function editLocalChildAction(Request $request, $entityGroup, $id)
    {
        return parent::editChildAction($request, array($entityGroup), $id);
    }

    /**
     * @Route("/entities/entity-group-entity/delete/{entityGroup}/{id}",
     *     name="_entities__entity_group_entity__delete",
     *     defaults={"id" = null},
     * )
     *
     * Overrides parent method
     * @param Request $request
     * @param $entityGroup
     * @param $id
     * @return mixed
     */
    public function deleteLocalChildAction(Request $request, $entityGroup, $id)
    {
        return parent::deleteChildAction($request, array($entityGroup), $id);
    }

    /**
     * @Route("/entities/entity-group-entity/data/{entityGroup}",
     *     name="_entities__entity_group_entity__data"
     * )
     *
     * Overrides parent method
     * @param Request $request
     * @param $entityGroup
     * @return mixed
     */
    public function dataLocalChildAction(Request $request, $entityGroup)
    {
        return parent::dataChildAction($request, array($entityGroup));
    }

    /**
     * @Route("/entities/entity-group-entity/conf/{entityGroup}",
     *     name="_entities__entity_group_entity__conf"
     * )
     *
     * Overrides parent method
     * @param Request $request
     * @param $entityGroup
     * @return mixed
     */
    public function confLocalChildAction(Request $request, $entityGroup)
    {
        return parent::confChildAction($request, array($entityGroup));
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