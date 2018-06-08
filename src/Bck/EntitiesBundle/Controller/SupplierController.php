<?php

namespace Bck\EntitiesBundle\Controller;

use AppBundle\Controller\BaseEntityController;
use Sensio\Bundle\FrameworkExtraBundle\Configuration\Route;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\JsonResponse;

class SupplierController extends BaseEntityTypeController
{
    /**
     * Initialization. Set all basic configuration
     * @param Request $request
     * @return $this
     * @throws \Exception
     */
    public function init(Request $request)
    {
        // Set configuration only once
        if($this->isInitialized) { return $this; }

        // Flags
        $this->flags['storeAclResource'] = 'shareEntities:suppliers'; // Shared resource by stores

        // Route
        $this->templateConf['route'] = array(
            'get' => array(
                'name' => '_bck__entities__supplier__get'
            ),
            'edit' => array(
                'name' => '_bck__entities__supplier__edit'
            ),
            'delete' => array(
                'name' => '_bck__entities__supplier__delete'
            ),
            'detail' => array(
                'name' => '_bck__entities__supplier__detail'
            ),
            'choices' => array(
                'name' => '_bck__entities__supplier__choices'
            )
        );

        parent::init($request);

        // Search
        $this->templateConf['search']['fields'] = $this->templateConf['fields']['view'];

        // Actions for template/view
        $this->templateConf['actions'] = array_merge(
            $this->templateConf['actions'],
            array(
                'detail' => true,
                'search' => true
            )
        );

        // Extra data
        $this->templateConf['extraData']['entityObj'] = array(
            'field' => 'name'
        );

        return $this;
    }

    /**
     * @Route("/bck/entities/supplier",
     *     name="_bck__entities__supplier__index"
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
     * @Route("/bck/entities/supplier/detail/{id}",
     *     name="_bck__entities__supplier__detail",
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
     * @Route("/bck/entities/supplier/get/{id}",
     *     name="_bck__entities__supplier__get",
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
     * @Route("/bck/entities/supplier/choices",
     *     name="_bck__entities__supplier__choices"
     * )
     *
     * Action to get a list/array of objects to use as choices
     * @param Request $request
     * @return mixed
     */
    public function choicesAction(Request $request)
    {
        return parent::choicesAction($request);
    }

    /**
     * @Route("/bck/entities/supplier/edit/{id}",
     *     name="_bck__entities__supplier__edit",
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
     * @Route("/bck/entities/supplier/delete/{id}",
     *     name="_bck__entities__supplier__delete",
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
     * @Route("/bck/entities/supplier/conf/{id}",
     *     name="_bck__entities__supplier__conf",
     *     defaults={"id" = null}
     * )
     *
     * Action to get configuration
     * @param Request $request
     * @param $id (return the target id object with the conf, it's used to avoid to make another server request
     *     to get the object when we need the object with the conf, like in flat forms, entity detail, etc.)
     * @return mixed
     */
    public function confAction(Request $request, $id = null)
    {
        return parent::confAction($request, $id);
    }

    /**
     * Delete object
     * @param $object
     * @param $hasFlush (it determines if should be executed the flush method to persist data in database)
     * @return $this
     */
    protected function deleteObject($object, $hasFlush = true)
    {
        $entityObj = $object->getEntityObj();

        parent::deleteObject($object, $hasFlush);

        if ($this->responseConf['status'] == 1) { // Removed with success
            // Check if entity is in use
            $dependency = $this->get('bck.entities.service.repository')
                ->setEntityRepository('BckEntitiesBundle:Client')
                ->execute(
                    'queryBuilder',
                    array(
                        array(
                            'fields' => array('1'),
                            'criteria' => array(
                                array(
                                    'field' => 'entityObj',
                                    'expr' => 'eq',
                                    'value' => $entityObj
                                )
                            )
                        )
                    )
                );

            if (empty($dependency)) {
                parent::deleteObject($entityObj, $hasFlush);
            }
        }

        return $this;
    }

    /**
     * @Route("/bck/entities/supplier/change-entity/{entity}/{id}",
     *     name="_bck__entities__supplier__change_entity",
     *     defaults={"id" = null},
     * )
     *
     * Action to change associated Entity for preview
     * @param Request $request
     * @param $entity
     * @param $id
     * @return mixed
     */
    public function changeEntityAction(Request $request, $entity, $id)
    {
        return parent::changeEntityAction($request, $entity, $id);
    }
}