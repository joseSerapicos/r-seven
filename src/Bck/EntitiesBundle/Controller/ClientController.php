<?php

namespace Bck\EntitiesBundle\Controller;

use AppBundle\Controller\BaseEntityController;
use Sensio\Bundle\FrameworkExtraBundle\Configuration\Route;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\JsonResponse;

class ClientController extends BaseEntityTypeController
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
        $this->flags['storeAclResource'] = 'shareEntities:clients'; // Shared resource by stores

        // Route
        $this->templateConf['route'] = array(
            'get' => array(
                'name' => '_bck__entities__client__get'
            ),
            'edit' => array(
                'name' => '_bck__entities__client__edit'
            ),
            'delete' => array(
                'name' => '_bck__entities__client__delete'
            ),
            'detail' => array(
                'name' => '_bck__entities__client__detail'
            ),
            'choices' => array(
                'name' => '_bck__entities__client__choices'
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
     * @Route("/bck/entities/client",
     *     name="_bck__entities__client__index"
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
     * @Route("/bck/entities/client/detail/{id}",
     *     name="_bck__entities__client__detail",
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
     * @Route("/bck/entities/client/get/{id}",
     *     name="_bck__entities__client__get",
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
     * @Route("/bck/entities/client/choices",
     *     name="_bck__entities__client__choices"
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
     * @Route("/bck/entities/client/edit/{id}",
     *     name="_bck__entities__client__edit",
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
     * @Route("/bck/entities/client/delete/{id}",
     *     name="_bck__entities__client__delete",
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
     * @Route("/bck/entities/client/detail-tabs",
     *     name="_bck__entities__client__detail_tabs")
     *
     * Action to get the base to build the tabs in detail
     * @return mixed
     */
    public function detailTabsAction()
    {
        return $this->render('AppBundle:tabs:default.html.twig', array(
            '_containers' => array(
                array(
                    'label' => 'Contacts'
                ),
                array(
                    'label' => 'Notes'
                ),
                array(
                    'label' => 'Files'
                ),
                array(
                    'label' => 'Gallery'
                ),
                array(
                    'label' => 'Videos'
                ),
                array(
                    'label' => 'Password'
                )
            )
        ));
    }

    /**
     * @Route("/bck/entities/client/conf/{id}",
     *     name="_bck__entities__client__conf",
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
                ->setEntityRepository('BckEntitiesBundle:Supplier')
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
     * @Route("/bck/entities/client/change-entity/{entity}/{id}",
     *     name="_bck__entities__client__change_entity",
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


    //////////////////////////////////////////////////////////
    // METHODS FOR HOME
    ///////////////////////////////////////////////////////


    /**
     * Initialization. Set all basic configuration
     * @param Request $request
     * @return $this
     * @throws \Exception
     */
    public function initForHome(Request $request)
    {
        // Set configuration only once
        if($this->isInitialized) { return $this; }

        // Label
        $this->templateConf['label'] = 'Client Anniversary';
        $this->templateConf['labelIcon'] = 'fa-users';

        // Route
        $this->templateConf['route'] = array(
            'get' => array(
                'name' => '_bck__entities__client__get_for_home'
            )
        );

        parent::init($request);

        // Get client anniversary
        $currentDate = date("-m-d");
        $this->localConf['search']['criteria'][] = array(
            'field' => 'birthDate',
            'expr' => 'llike',
            'value' => $currentDate
        );

        // Search
        $this->templateConf['search']['fields'] = array(
            'code', 'avatar', 'title', 'name', 'surname', 'birthDate'
        );

        // Legend (disable cancel legend)
        $this->templateConf['controls']['legend'] = array();

        $this->templateConf['controls']['expander']['isEnabled'] = true;

        // Actions for template/view
        $this->templateConf['actions'] = array();

        return $this;
    }

    /**
     * @Route("/bck/entities/client/get-for-home/{id}",
     *     name="_bck__entities__client__get_for_home",
     *     defaults={"id" = null},
     * )
     *
     * Action to get a list/array of compact objects from the search configuration
     * or a regular object if the "id" is provided
     * @param Request $request
     * @param $id
     * @return mixed
     */
    public function getForHomeAction(Request $request, $id)
    {
        $this->initForHome($request);
        return parent::getAction($request, $id);
    }

    /**
     * Action to get all data for home bundle
     * @param Request $request
     * @param $responseType (not used in route, only for direct symfony calls,
     *     determines the type of response [http, json, array])
     * @return mixed
     */
    public function dataForHomeAction(Request $request, $responseType = 'http')
    {
        $this->initForHome($request);
        return $this->dataAction($request, $responseType);
    }
}