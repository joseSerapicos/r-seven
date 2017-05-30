<?php

namespace EntitiesBundle\Controller;

use AppBundle\Controller\BaseEntityChildController;
use Sensio\Bundle\FrameworkExtraBundle\Configuration\Route;
use Symfony\Component\HttpFoundation\Request;
use EntitiesBundle\Entity\Entity;
use EntitiesBundle\Entity\EntityAddress;

class EntityAddressController extends BaseEntityChildController
{
    /**
     * Overrides parent method
     * @param Request $request
     * @param $parents
     * @param $label (set label when you don't have the route in modules/menus tree)
     * @return $this
     */
    protected function initChild(Request $request, $parents, $label = 'Addresses')
    {
        // Set configuration only once
        if($this->isInitialized) { return $this; }

        // Parent route
        $this->parentConf = array(
            'entity' => array('route' => '_entities__entity__index')
        );

        // Route
        $this->templateConf['route'] = array(
            'get' => array(
                'name' => '_entities__entity_address__get'
            ),
            'choices' => array(
                'name' => '_entities__entity_address__choices'
            ),
            'edit' => array(
                'name' => '_entities__entity_address__edit',
            ),
            'delete' => array(
                'name' => '_entities__entity_address__delete',
            )
        );

        parent::initChild($request, $parents, $label);

        // Search
        $this->templateConf['search']['fields'] = $this->templateConf['fields']['view'];
        // Empty criteria to be able to see all registers because "search" action is disabled.
        $this->templateConf['search']['criteria'] = array();

        // Actions for template/view
        $this->templateConf['actions'] = array_merge(
            $this->templateConf['actions'],
            array(
                'copy' => $this->templateConf['acl']['add']
            )
        );

        // Extra data
        $this->templateConf['extraData']['template'] = array(
            'class' => '-merge-view',
            'hasMergeHeader' => true
        );

        return $this;
    }

    /**
     * @Route("/entities/entity-address/get/{entity}/{id}",
     *     name="_entities__entity_address__get",
     *     defaults={"id" = null}
     * )
     *
     * Overrides parent method
     * @param Request $request
     * @param $entity
     * @param $id
     * @return mixed
     */
    public function getLocalChildAction(Request $request, $entity, $id)
    {
        return parent::getChildAction($request, array($entity), $id);
    }

    /**
     * @Route("/entities/entity-address/choices/{entity}",
     *     name="_entities__entity_address__choices"
     * )
     *
     * Overrides parent method
     * @param Request $request
     * @param $entity
     * @return mixed
     */
    public function choicesLocalChildAction(Request $request, $entity)
    {
        return parent::choicesChildAction($request, array($entity));
    }

    /**
     * @Route("/entities/entity-address/edit/{entity}/{id}",
     *     name="_entities__entity_address__edit",
     *     defaults={"id" = null}
     * )
     *
     * Overrides parent method
     * @param Request $request
     * @param $entity
     * @param $id
     * @return mixed
     */
    public function editLocalChildAction(Request $request, $entity, $id)
    {
        return parent::editChildAction($request, array($entity), $id);
    }

    /**
     * @Route("/entities/entity-address/delete/{entity}/{id}",
     *     name="_entities__entity_address__delete",
     *     defaults={"id" = null}
     * )
     *
     * Overrides parent method
     * @param Request $request
     * @param $entity
     * @param $id
     * @return mixed
     */
    public function deleteLocalChildAction(Request $request, $entity, $id)
    {
        return parent::deleteChildAction($request, array($entity), $id);
    }

    /**
     * @Route("/entities/entity-address/data/{entity}",
     *     name="_entities__entity_address__data"
     * )
     *
     * Overrides parent method
     * @param Request $request
     * @param $entity
     * @return mixed
     */
    public function dataLocalChildAction(Request $request, $entity)
    {
        return parent::dataChildAction($request, array($entity));
    }

    /**
     * @Route("/entities/entity-address/conf/{entity}",
     *     name="_entities__entity_address__conf"
     * )
     *
     * Overrides parent method
     * @param Request $request
     * @param $entity
     * @return mixed
     */
    public function confLocalChildAction(Request $request, $entity)
    {
        return parent::confChildAction($request, array($entity));
    }
}