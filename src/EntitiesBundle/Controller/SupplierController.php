<?php

namespace EntitiesBundle\Controller;

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
    protected function init(Request $request)
    {
        // Set configuration only once
        if($this->isInitialized) { return $this; }

        // Flags
        $this->flags['storeAclResource'] = 'shareEntities:suppliers'; // Shared resource by stores

        // Route
        $this->templateConf['route'] = array(
            'get' => array(
                'name' => '_entities__supplier__get'
            ),
            'edit' => array(
                'name' => '_entities__supplier__edit'
            ),
            'delete' => array(
                'name' => '_entities__supplier__delete'
            ),
            'detail' => array(
                'name' => '_entities__supplier__detail'
            ),
            'choices' => array(
                'name' => '_entities__supplier__choices'
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
     * @Route("/entities/supplier",
     *     name="_entities__supplier__index"
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
     * @Route("/entities/supplier/detail/{id}",
     *     name="_entities__supplier__detail",
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
     * @Route("/entities/supplier/get/{id}",
     *     name="_entities__supplier__get",
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
     * @Route("/entities/supplier/choices",
     *     name="_entities__supplier__choices",
     *     defaults={"id" = null},
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
     * @Route("/entities/supplier/edit/{id}",
     *     name="_entities__supplier__edit",
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
     * @Route("/entities/supplier/delete/{id}",
     *     name="_entities__supplier__delete",
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
     * @Route("/entities/supplier/conf",
     *     name="_entities__supplier__conf"
     * )
     *
     * Action to get configuration
     * @param Request $request
     * @return mixed
     */
    public function confAction(Request $request)
    {
        return parent::confAction($request);
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
            $dependency = $this->get('entities.service.repository')
                ->setEntityRepository('EntitiesBundle:Client')
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
}