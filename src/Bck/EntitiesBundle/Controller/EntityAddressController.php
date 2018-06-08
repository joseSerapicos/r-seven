<?php

namespace Bck\EntitiesBundle\Controller;

use AppBundle\Controller\BaseEntityChildController;
use Sensio\Bundle\FrameworkExtraBundle\Configuration\Route;
use Symfony\Component\HttpFoundation\Request;
use Bck\EntitiesBundle\Entity\Entity;
use Bck\EntitiesBundle\Entity\EntityAddress;

class EntityAddressController extends BaseEntityChildController
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
                'name' => '_bck__entities__entity_address__get'
            ),
            'choices' => array(
                'name' => '_bck__entities__entity_address__choices'
            ),
            'edit' => array(
                'name' => '_bck__entities__entity_address__edit',
            ),
            'delete' => array(
                'name' => '_bck__entities__entity_address__delete',
            )
        );

        parent::init($request, $parents);

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
     * @Route("/bck/entities/entity-address/get/{entity}/{id}",
     *     name="_bck__entities__entity_address__get",
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
     * @Route("/bck/entities/entity-address/choices/{entity}",
     *     name="_bck__entities__entity_address__choices"
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
     * @Route("/bck/entities/entity-address/edit/{entity}/{id}",
     *     name="_bck__entities__entity_address__edit",
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
     * @Route("/bck/entities/entity-address/delete/{entity}/{id}",
     *     name="_bck__entities__entity_address__delete",
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
     * @Route("/bck/entities/entity-address/data/{entity}",
     *     name="_bck__entities__entity_address__data"
     * )
     *
     * Overrides parent method
     * @param Request $request
     * @param $entity
     * @param $responseType (not used in route, only for direct symfony calls,
     *     determines the type of response [http, json, array])
     * @return mixed
     */
    public function dataLocalChildAction(Request $request, $entity, $responseType = 'http')
    {
        return parent::dataChildAction($request, array($entity), $responseType);
    }

    /**
     * @Route("/bck/entities/entity-address/conf/{entity}/{id}",
     *     name="_bck__entities__entity_address__conf",
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

    /**
     * Overrides parent method
     * @param $object
     * @param null $data
     * @return $this
     */
    protected function postSaveObject($object, $data = null)
    {
        if ($object->getForDocuments()) {
            // Make this object the unique for documents (documents can have only one address)
            $this->setBoolFieldTrueValueUnique($object, 'forDocuments');
        }

        return $this;
    }
}