<?php

namespace EntitiesBundle\Controller;

use AppBundle\Controller\BaseEntityChildController;
use Sensio\Bundle\FrameworkExtraBundle\Configuration\Route;
use Symfony\Component\HttpFoundation\Request;
use EntitiesBundle\Entity\Entity;
use EntitiesBundle\Entity\EntityFile;

class EntityImageController extends BaseEntityChildController
{
    /**
     * Overrides parent method
     * @param Request $request
     * @param $parents
     * @param $label (set label when you don't have the route in modules/menus tree)
     * @return $this
     */
    protected function initChild(Request $request, $parents, $label = 'Gallery')
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
                'name' => '_entities__entity_image__get'
            ),
            'edit' => array(
                'name' => '_entities__entity_image__edit',
            ),
            'delete' => array(
                'name' => '_entities__entity_image__delete',
            ),
            'thumbnail' => array(
                'name' => '_entities__entity__thumbnail',
                'url' => 'nd'
            )
        );

        parent::initChild($request, $parents, $label);

        // Set route for thumbnail
        $this->templateConf['route']['thumbnail']['url'] = $this->generateUrl(
            $this->templateConf['route']['thumbnail']['name'],
            array('id' => ($this->parentConf['entity']['obj'] ? $this->parentConf['entity']['obj']->getId() : 0))
        );

        /* Templates */
        $this->localConf['templatesPath'] = ($this->localConf['Bundle'].':EntityImage:');
        /* /Templates */
        
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
        $this->templateConf['actions'] = array_merge(
            $this->templateConf['actions'],
            array(
                'edit' => false,
                'avatar' => true
            )
        );

        // Extra data
        $this->templateConf['extraData']['template'] = array(
            'class' => '-merge-view',
            'imageCrop' => array(
                'label' => 'Set image profile',
                'ActionUrl' => $this->generateUrl(
                    '_entities__entity__thumbnail',
                    array('id' => $this->parentConf['entity']['obj']->getId())
                )
            )
        );

        return $this;
    }

    /**
     * @Route("/entities/entity-image/profile",
     *     name="_entities__entity_image__profile"
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
     * @Route("/entities/entity-image/get/{entity}/{id}",
     *     name="_entities__entity_image__get",
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
     * @Route("/entities/entity-image/edit/{entity}/{id}",
     *     name="_entities__entity_image__edit",
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
     * @Route("/entities/entity-image/delete/{entity}/{id}",
     *     name="_entities__entity_image__delete",
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
     * @Route("/entities/entity-image/data/{entity}",
     *     name="_entities__entity_image__data"
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
            . '/img/'
        );

        $obj->setLiipImagineDataManager($this->container->get('liip_imagine.data.manager'));
        $obj->setLiipImagineFilterManager($this->container->get('liip_imagine.filter.manager'));

        return $obj;
    }
}