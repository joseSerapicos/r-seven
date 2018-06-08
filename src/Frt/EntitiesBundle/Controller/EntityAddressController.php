<?php

namespace Frt\EntitiesBundle\Controller;

use Bck\EntitiesBundle\Controller\EntityAddressController as BckEntityAddressController;
use Sensio\Bundle\FrameworkExtraBundle\Configuration\Route;
use Symfony\Component\HttpFoundation\Request;


class EntityAddressController extends BckEntityAddressController
{
    /**
     * Get label/title to display child in parent
     * @return mixed
     */
    static function getLabel() { return 'Addresses'; }

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
            'entity' => array('route' => '_bck__entities__entity__index')
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
            )
        );

        // Overrides BundlePrefix to use the entity of back-office
        $this->localConf['BundlePrefix'] = 'Bck';

        parent::baseEntityChildInit($request, $parents);

        // Search
        $this->templateConf['search']['fields'] = $this->templateConf['fields']['view'];

        // Actions for template/view
        $this->templateConf['actions'] = array('edit' => true);

        // ACL
        $this->templateConf['acl'] = array('read' => true, 'edit' => true); // Allow the user edit your profile

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
     * @Route("/entities/entity-address/conf/{entity}/{id}",
     *     name="_entities__entity_address__conf",
     *     defaults={"id" = null}
     * )
     *
     * Overrides parent method
     * @param Request $request
     * @param $entity
     * @param $id (return the target id object with the conf, it's used to avoid to make another server request
     *     to get the object when we need the object with the conf, like in flat forms, entity detail, etc.)
     * @return mixed
     */
    public function confLocalChildAction(Request $request, $entity, $id = null)
    {
        return parent::confChildAction($request, array($entity), $id);
    }
}