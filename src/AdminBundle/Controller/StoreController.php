<?php

namespace AdminBundle\Controller;

use AppBundle\Controller\BaseEntityController;
use Sensio\Bundle\FrameworkExtraBundle\Configuration\Route;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\JsonResponse;
use AdminBundle\Entity\StoreAddress;

class StoreController extends BaseEntityController
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
        $this->flags['handleStore'] = false; // Store is handled by user

        // Route
        $this->templateConf['route'] = array(
            'get' => array(
                'name' => '_admin__store__get'
            ),
            'edit' => array(
                'name' => '_admin__store__edit'
            ),
            'delete' => array(
                'name' => '_admin__store__delete'
            ),
            'detail' => array(
                'name' => '_admin__store__detail'
            )
        );

        parent::init($request);
        
        // Search
        $this->templateConf['search']['fields'] =
            array('id', 'name', 'taxNumber', 'city', 'country', 'isEnabled');
        // Empty criteria to be able to see all registers because "search" action is disabled.
        $this->templateConf['search']['criteria'] = array();

        // Access control list (only admin can add and remove stores, it's a major responsibility)
        $isAdmin = $this->get('security.authorization_checker')->isGranted('ROLE_ADMIN');
        $this->templateConf['acl']['add'] = $this->templateConf['acl']['delete'] = $isAdmin;

        // Actions for template/view
        $this->templateConf['actions'] = array_merge(
            $this->templateConf['actions'],
            array(
                'add' => $this->templateConf['acl']['add'],
                'delete' => $this->templateConf['acl']['delete'],
                'copy' => $this->templateConf['acl']['add'],
                'detail' => true
            )
        );

        return $this;
    }

    /**
     * @Route("/admin/store",
     *     name="_admin__store__index"
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
     * @Route("/admin/store/detail/{id}",
     *     name="_admin__store__detail",
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
     * @Route("/admin/store/get/{id}",
     *     name="_admin__store__get",
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
     * @Route("/admin/store/edit/{id}",
     *     name="_admin__store__edit",
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
        // Set configuration
        $this->flags['hasForm'] = true;
        $this->init($request);
        $this->localConf['templates']['edit'] = $this->localConf['templatesPath'].'edit.html.twig';

        // Get object
        $obj = $this->getObject($id);

        // Build form
        $form = $this->createForm($this->localConf['formTypeClass'], $obj);

        // Handle request
        $form->handleRequest($request);

        // Check if is submitted
        if($form->isSubmitted()) {
            if($form->isValid()) {
                // Save address in database
                $storeAddressObj = $obj->getStoreAddressObj();
                parent::setObjectDefaultValues($storeAddressObj);
            }

            $this->saveForm($form, $obj);
            return $this->getResponse(true);
        }

        // Render form
        return $this->render($this->localConf['templates']['edit'], array(
            '_conf' => $this->templateConf,
            '_form' => $form->createView()
        ));
    }

    /**
     * @Route("/admin/store/contacts",
     *     name="_admin__store__contacts"
     * )
     *
     * Action to get the base to display/edit contacts
     * @param Request $request
     * @return mixed
     */
    public function contactsAction(Request $request)
    {
        // Render form
        return $this->render('AppBundle:accordion:default.html.twig', array(
            '_containers' => array(
                array(
                    'label' => 'Phones'
                ),
                array(
                    'label' => 'Emails'
                ),
                array(
                    'label' => 'Links'
                )
            )
        ));
    }

    /**
     * @Route("/admin/store/delete/{id}",
     *     name="_admin__store__delete",
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
        $response = parent::deleteAction($request, $id);

        if($this->responseConf['status'] === 1) {
            $session = $this->get('session');
            $store = $this->getStoreAttr('id');

            // Reinitialize app to update session with new data
            $this->get('app.service.app')->init($store);
        }

        return $response;
    }

    /**
     * @Route("/admin/store/detail-tabs",
     *     name="_admin__store__detail_tabs")
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
        $obj->setStoreAddressObj(new StoreAddress());

        return $obj;
    }

    /**
     * Overrides parent method
     * @param $form
     * @param $object
     * @param $hasValidation
     * @param $hasFlush (it determines if should be executed the flush method to persist data in database)
     * @return $this
     */
    protected function saveForm($form, $object, $hasValidation = true, $hasFlush = true)
    {
        parent::saveForm($form, $object, $hasValidation, $hasFlush);

        if($this->responseConf['status'] === 1) {
            $store = $this->getStoreAttr('id');

            // Reinitialize app to update session with new data
            $this->get('app.service.app')->init($store);
        }

        return $this;
    }

    /**
     * Get list/array of objects by search configuration and limit it according the stores that logged user has access
     * @param null $options (array with 'fields', 'criteria', 'orderBy', 'limit' and 'offset')
     * @return null
     */
    protected function getObjectsBySearch($options = null) {
        $options = $this->getSearch();
        if (!empty($options['limit'])) { // Pagination enabled
            $options['limit']++; // Used to control the pagination
        }

        // Session info
        $session = $this->get('session');
        $loggedUserId = $session->get('_app.user')['id'];
        $isAdmin = $this->get('security.authorization_checker')->isGranted('ROLE_ADMIN');

        $objects = $this->getLocalRepositoryService()
            ->execute(
                'getAllJoinWithUserGroupAclUser',
                array(
                    $options,
                    $isAdmin,
                    $loggedUserId
                )
            );

        $this->templateConf['search']['hasMore'] = (count($objects) == $options['limit']);
        if ($this->templateConf['search']['hasMore']) {
            // Remove the last row, it's only to control the pagination
            array_pop($objects);
        }

        return $objects;
    }

    /**
     * Delete object
     * @param $object
     * @param $hasFlush (it determines if should be executed the flush method to persist data in database)
     * @return $this
     */
    protected function deleteObject($object, $hasFlush = true)
    {
        // Get all entities
        $entityObjArr = $this->get('entities.service.repository')
            ->setEntityRepository('EntitiesBundle:Entity')
            ->execute(
                'findByStoreObj',
                array($object->getId())
            );

        // Remove each entity manually to free disk resources (uploads)
        if (is_array($entityObjArr)) {
            foreach ($entityObjArr as $entityObj) {
                parent::deleteObject($entityObj, false);
            }
        }

        parent::deleteObject($object, $hasFlush);

        return $this;
    }
}