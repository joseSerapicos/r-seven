<?php

namespace EntitiesBundle\Controller;

use AppBundle\Controller\BaseEntityChildController;
use Sensio\Bundle\FrameworkExtraBundle\Configuration\Route;
use Symfony\Component\HttpFoundation\Request;
use EntitiesBundle\Entity\Entity;
use EntitiesBundle\Entity\EntityVideo;

class EntityVideoController extends BaseEntityChildController
{
    /**
     * Get label/title to display child in parent
     * @return mixed
     */
    static function getLabel() { return 'Videos'; }

    /**
     * Overrides parent method
     * @param Request $request
     * @param $parents
     * @return $this
     */
    protected function initChild(Request $request, $parents)
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
                'name' => '_entities__entity_video__get'
            ),
            'add' => array(
                'name' => '_entities__entity_video__add',
            ),
            'delete' => array(
                'name' => '_entities__entity_video__delete',
            )
        );

        parent::initChild($request, $parents);
        
        // Templates
        $this->localConf['templates']['edit'] = 'AppBundle:file:form.html.twig';

        // Search
        $this->templateConf['search']['fields'] = array('id', 'name', 'path', 'thumbnail', 'source', 'extension');

        // Actions for template/view
        $this->templateConf['actions'] = array_merge(
            $this->templateConf['actions'],
            array(
                'edit' => false
            )
        );

        // Legend (disable cancel legend)
        $this->templateConf['controls']['legend'] = array();

        // Extra data
        $this->templateConf['extraData']['template'] = array(
            'class' => '-merge-view'
        );

        return $this;
    }

    /**
     * @Route("/entities/entity-video/profile",
     *     name="_entities__entity_video__profile"
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
     * @Route("/entities/entity-video/get/{entity}/{id}",
     *     name="_entities__entity_video__get",
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
     * @Route("/entities/entity-video/add/{entity}/{source}",
     *     name="_entities__entity_video__add",
     *     defaults={
     *         "source" = null
     *     }
     * )
     *
     * Action to add objects using the form
     * @param Request $request
     * @param $entity
     * @param $source
     * @return mixed
     */
    public function addLocalChildAction(Request $request, $entity, $source)
    {
        // Set configuration
        $this->flags['hasForm'] = true;
        $this->initChild($request, array($entity));

        if ($source != 'file') {
            // Change conf
            $this->localConf['templates']['edit'] = 'AppBundle:form:form.html.twig';
            $this->localConf['entityFields']['path']['type'] = 'text';
        } else {
            if(empty($_FILES)) {
                $this->localConf['formTypeClass'] = 'EntitiesBundle\Form\EntityVideoRenderFileSourceFormType';
            } else {
                $this->localConf['formTypeClass'] = 'EntitiesBundle\Form\EntityVideoSubmitFileSourceFormType';
            }
        }

        // New object
        $obj = $this->newObject();

        // Build form
        $form = $this->createForm($this->localConf['formTypeClass'], $obj);

        // Handle request
        $form->handleRequest($request);

        // Check if is submitted
        if($form->isSubmitted()) {
            // @TODO put this code in entity when had split the BaseFile Entity code
            $formValues = $request->request->get('form', array());
            $thumbnail = empty($formValues['thumbnail']) ? null : $formValues['thumbnail'];
            if (!$thumbnail) {
                // Set default thumbnail
                $path = empty($formValues['path']) ? null : $formValues['path'];
                switch ($source) {
                    case 'youtube':
                        $thumbnail = 'http://img.youtube.com/vi/'.$path.'/0.jpg';
                        break;
                    case 'vimeo':
                        $hash = unserialize(@file_get_contents("http://vimeo.com/api/v2/video/" . $path . ".php"));
                        if (empty($hash)) {
                            $this->addFlashMessage(
                                'Unable to load the thumbnail',
                                'Warning',
                                'warning'
                            );
                        } else {
                            $thumbnail = $hash[0]['thumbnail_medium'];
                        }
                        break;
                }
                $obj->setThumbnail($thumbnail);
            }

            $obj->setSource($source);
            $obj->setExtension($source);
            $obj->setSize(0);

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
     * @Route("/entities/entity-video/delete/{entity}/{id}",
     *     name="_entities__entity_video__delete",
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
     * @Route("/entities/entity-video/data/{entity}",
     *     name="_entities__entity_video__data"
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

        $parent = reset($this->parentConf);

        $parentId = ($parent['obj'] ?
            $parent['obj']->getId() :
            0 // Needed when parent is not defined like to get edit template
        );

        $obj->setDir(
            $this->get('session')->get('_app.system')['filesRepository']
            . 'entities/'
            . $parentId
            . '/video/'
        );

        return $obj;
    }
}