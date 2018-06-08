<?php

namespace Bck\EntitiesBundle\Controller;

use AppBundle\Controller\BaseEntityChildController;
use Sensio\Bundle\FrameworkExtraBundle\Configuration\Route;
use Symfony\Component\HttpFoundation\Request;

class EntityFileController extends BaseEntityChildController
{
    /**
     * Get label/title to display child in parent
     * @return mixed
     */
    static function getLabel() { return 'Files'; }

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
                'name' => '_bck__entities__entity_file__get'
            ),
            'edit' => array(
                'name' => '_bck__entities__entity_file__edit',
            ),
            'delete' => array(
                'name' => '_bck__entities__entity_file__delete',
            )
        );

        parent::init($request, $parents);

        // Form (set submit context as default, because this is the most used)
        $this->localConf['formTypeClass'] = 'Bck\EntitiesBundle\Form\EntityFileSubmitFormType';

        // Templates
        $this->localConf['templates']['edit'] = 'AppBundle:file:form-popup.html.twig';

        // Search
        $this->templateConf['search']['fields'] = $this->templateConf['fields']['view'];

        // Actions for template/view
        $this->templateConf['actions']['edit'] = false;

        // Legend (disable cancel legend)
        $this->templateConf['controls']['legend'] = array();

        // Extra data
        $this->templateConf['extraData']['template'] = array(
            'class' => '-merge-view'
        );

        return $this;
    }

    /**
     * @Route("/bck/entities/entity-file/profile",
     *     name="_bck__entities__entity_file__profile"
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
     * @Route("/bck/entities/entity-file/get/{entity}/{id}",
     *     name="_bck__entities__entity_file__get",
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
     * @Route("/bck/entities/entity-file/edit/{entity}/{id}",
     *     name="_bck__entities__entity_file__edit",
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
        $this->init($request, array($entity));

        // Get object
        $obj = $this->getObject($id);

        // Build form
        if(empty($_FILES)) {
            // Fields is necessary, to submit data, to render in view the plugin makes the work
            $this->localConf['formTypeClass'] = str_replace('Submit', 'Render', $this->localConf['formTypeClass']);
        }
        $form = $this->createForm($this->localConf['formTypeClass'], $obj);

        // Handle request
        $form->handleRequest($request);

        // Check if is submitted
        if($form->isSubmitted()) {
            $this->saveForm($form, $obj);
            return $this->getResponse();
        }

        // Render form
        return $this->render($this->localConf['templates']['edit'], array(
            '_conf' => $this->templateConf,
            '_form' => $form->createView()
        ));
    }

    /**
     * @Route("/bck/entities/entity-file/edit-flat-form/{entity}",
     *     name="_bck__entities__entity_file__edit_flat_form"
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
        $this->init($request, array($entity));

        // Set form attributes
        $this->localConf['formTypeClass'] = 'Bck\EntitiesBundle\Form\EntityFileSubmitFlatFormType';

        // Set view
        $this->localConf['templates']['edit'] = 'AppBundle:partial/form:form.html.twig';

        // Render edit action
        return $this->editLocalChildAction($request, array($entity), null);
    }

    /**
     * @Route("/bck/entities/entity-file/delete/{entity}/{id}",
     *     name="_bck__entities__entity_file__delete",
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
     * @Route("/bck/entities/entity-file/data/{entity}",
     *     name="_bck__entities__entity_file__data",
     *     defaults={"parent" = null}
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
     * New object
     * @return object
     */
    protected function newObject()
    {
        $obj = parent::newObject();

        $parent = reset($this->parentConf);

        $parentId = ($parent['obj'] ?
            $parent['obj']->getId() :
            0 // Needed when parent is not defined like to get edit template
        );

        $obj->setDir(
            $this->get('session')->get('_app.system')['filesRepository']
            . 'entities/'
            . $parentId
            . '/file/'
        );

        return $obj;
    }
}