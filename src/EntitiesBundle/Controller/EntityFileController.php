<?php

namespace EntitiesBundle\Controller;

use AppBundle\Controller\BaseEntityChildController;
use Sensio\Bundle\FrameworkExtraBundle\Configuration\Route;
use Symfony\Component\HttpFoundation\Request;

class EntityFileController extends BaseEntityChildController
{
    /**
     * Overrides parent method
     * @param Request $request
     * @param $parents
     * @param $label (set label when you don't have the route in modules/menus tree)
     * @return $this
     */
    protected function initChild(Request $request, $parents, $label = 'Files')
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
                'name' => '_entities__entity_file__get'
            ),
            'edit' => array(
                'name' => '_entities__entity_file__edit',
            ),
            'delete' => array(
                'name' => '_entities__entity_file__delete',
            )
        );

        parent::initChild($request, $parents, $label);

        /* Form */
        $this->localConf['form']['class'] = 'dropzone';
        $this->localConf['form']['buttons'] = 'none';
        $this->localConf['form']['hasNgForm'] = false;
        /* /Form */

        // Templates
        $this->localConf['templates']['edit'] = 'AppBundle:file:form-popup.html.twig';

        // Search
        $this->templateConf['search']['fields'] = $this->templateConf['fields']['view'];

        // Actions for template/view
        $this->templateConf['actions']['edit'] = false;

        // Extra data
        $this->templateConf['extraData']['template'] = array(
            'class' => '-merge-view'
        );

        return $this;
    }

    /**
     * @Route("/entities/entity-file/profile",
     *     name="_entities__entity_file__profile"
     * )
     *
     * Overrides the parent method.
     * @param Request $request
     * @return mixed
     */
    public function profileLocalChildAction(Request $request)
    {
        return parent::profileChildAction($request, 'entity_id');
    }

    /**
     * @Route("/entities/entity-file/get/{entity}/{id}",
     *     name="_entities__entity_file__get",
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
     * @Route("/entities/entity-file/edit/{entity}/{id}",
     *     name="_entities__entity_file__edit",
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
        // Set configuration
        $this->flags['hasForm'] = true;
        $this->initChild($request, array($entity));

        // Get object
        $obj = $this->getObject($id);

        // Build form
        if(empty($_FILES)) {
            // Fields is not necessary, the plugin render the control
            $this->localConf['form']['hasFields'] = false;
        }
        $form = $this->buildForm($request, $obj);

        // Handle request
        $form->handleRequest($request);

        // Check if is submitted
        if($form->isSubmitted()) {
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
     * @Route("/entities/entity-file/edit-flat-form/{entity}",
     *     name="_entities__entity_file__edit_flat_form"
     * )
     *
     * Action to get flat form
     * @param Request $request
     * @param $entity
     * @return mixed
     */
    public function editFlatFormAction(Request $request, $entity)
    {
        // Set configuration
        $this->flags['hasForm'] = true;
        $this->initChild($request, array($entity));
        // Set form attributes
        $this->localConf['form']['class'] = 'm-t-md dropzone';
        $this->localConf['form']['buttons'] = 'none';
        // Set view
        $this->localConf['templates']['edit'] = 'AppBundle:partial/form:form.html.twig';
        // Render edit action
        return $this->editLocalChildAction($request, array($entity), null);
    }

    /**
     * @Route("/entities/entity-file/delete/{entity}/{id}",
     *     name="_entities__entity_file__delete",
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
     * @Route("/entities/entity-file/data/{entity}",
     *     name="_entities__entity_file__data",
     *     defaults={"parent" = null}
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
     * New object
     * @return object
     */
    protected function newObject()
    {
        $obj = parent::newObject();

        $obj->setDir(
            $this->get('session')->get('_app.system')['filesRepository']
            . 'entities/'
            . $this->parentConf['entity']['obj']->getId()
            . '/file/'
        );

        return $obj;
    }
}