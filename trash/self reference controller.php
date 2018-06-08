<?php

namespace Bck\AdminBundle\Controller;

use AppBundle\Controller\BaseEntityController;
use Sensio\Bundle\FrameworkExtraBundle\Configuration\Route;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\JsonResponse;
use Bck\AdminBundle\Entity\StoreAddress;

class StoreContrdddoller extends BaseEntityController
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

        // Route
        $this->templateConf['route'] = array(
            'get' => array(
                'name' => '_bck__admin__store__get'
            ),
            'edit' => array(
                'name' => '_bck__admin__store__edit'
            ),
            'delete' => array(
                'name' => '_bck__admin__store__delete'
            ),
            'detail' => array(
                'name' => '_bck__admin__store__detail'
            )
        );

        parent::init($request);
        
        // Search
        $this->templateConf['search']['fields'] =
            array('id', 'name', 'taxNumber', 'city', 'country', 'isEnabled');

        // Actions for template/view
        $this->templateConf['actions'] = array_merge(
            array(
                'copy' => $this->templateConf['acl']['add'],
                'search' => true,
                'detail' => true
            ),
            $this->templateConf['actions']
        );

        return $this;
    }

    /**
     * @Route("/bck/admin/store",
     *     name="_bck__admin__store__index"
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
     * @Route("/bck/admin/store/detail/{id}",
     *     name="_bck__admin__store__detail",
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
     * @Route("/bck/admin/store/get/{id}",
     *     name="_bck__admin__store__get",
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
     * @Route("/bck/admin/store/edit/{id}",
     *     name="_bck__admin__store__edit",
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

        // Get object
        $obj = $this->getObject($id);

        $form = $this->buildForm($request, $obj);

        // Handle request
        $form->handleRequest($request);

        // Check if is submitted
        if($form->isSubmitted()) {
            // Process request
            $this->getAndProcessRequestData($request, false);
            
            // Save store address in database
            if($form->isValid()) {
                $storeAddressObj = $obj->getStoreAddressObj();
                parent::setObjectDefaultValues($storeAddressObj);
            }

            $this->saveForm($form, $obj);
            return $this->getResponse();
        }

        return $this->render($this->localConf['templates']['edit'], array(
            '_conf' => $this->templateConf,
            '_form' => $form->createView()
        ));
    }

    /**
     * @Route("/bck/admin/store/contacts",
     *     name="_bck__admin__store__contacts"
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
     * @Route("/bck/admin/store/delete/{id}",
     *     name="_bck__admin__store__delete",
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
     * @Route("/bck/admin/store/detail-tabs",
     *     name="_bck__admin__store__detail_tabs")
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
}