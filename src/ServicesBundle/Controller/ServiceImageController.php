<?php

namespace ServicesBundle\Controller;

use AppBundle\Controller\BaseEntityChildController;
use Sensio\Bundle\FrameworkExtraBundle\Configuration\Route;
use Symfony\Component\HttpFoundation\Request;
use AppBundle\Service\HelperService;

class ServiceImageController extends BaseEntityChildController
{
    /**
     * Get label/title to display child in parent
     * @return mixed
     */
    static function getLabel() { return 'Gallery'; }

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
            'service' => array('route' => '_services__service__index')
        );

        // Route
        $this->templateConf['route'] = array(
            'get' => array(
                'name' => '_services__service_image__get'
            ),
            'edit' => array(
                'name' => '_services__service_image__edit',
            ),
            'delete' => array(
                'name' => '_services__service_image__delete',
            ),
            'thumbnail' => array(
                'name' => '_services__service_image__thumbnail',
            )
        );

        parent::initChild($request, $parents);

        // Form (set submit context as default, because this is the most used)
        $this->localConf['formTypeClass'] = ('ServicesBundle\Form\ServiceImageSubmitFormType');

        /* Templates */
        $this->localConf['templatesPath'] = ($this->localConf['Bundle'].':ServiceImage');
        /* /Templates */

        // Templates
        $this->localConf['templates']['edit'] = 'AppBundle:file:form-popup.html.twig';

        // Search
        $this->templateConf['search']['fields'] = $this->templateConf['fields']['view'];

        // Actions for template/view
        $this->templateConf['actions'] = array_merge(
            $this->templateConf['actions'],
            array(
                'edit' => false,
                'thumbnail' => true
            )
        );

        // Extra data
        $this->templateConf['extraData']['template'] = array(
            'class' => '-merge-view',
            'imageCrop' => array(
                'label' => 'Set image profile',
                'ActionUrl' => $this->templateConf['route']['thumbnail']['url']
            )
        );

        return $this;
    }

    /**
     * @Route("/services/service-image/get/{service}/{id}",
     *     name="_services__service_image__get",
     *     defaults={"id" = null}
     * )
     *
     * Overrides parent method
     * @param Request $request
     * @param $service
     * @param $id
     * @return mixed
     */
    public function getLocalChildAction(Request $request, $service, $id)
    {
        return parent::getChildAction($request, array($service), $id);
    }

    /**
     * @Route("/services/service-image/edit/{service}/{id}",
     *     name="_services__service_image__edit",
     *     defaults={"id" = null}
     * )
     *
     * Overrides parent method
     * @param Request $request
     * @param $service
     * @param $id
     * @return mixed
     */
    public function editLocalChildAction(Request $request, $service, $id)
    {
        // Set configuration
        $this->flags['hasForm'] = true;
        $this->initChild($request, array($service));

        // Get object
        $obj = $this->getObject($id);

        // Build form
        if(empty($_FILES)) {
            // Fields is necessary, to submit data, to render in view the plugin makes the work
            $this->localConf['formTypeClass'] = 'ServicesBundle\Form\ServiceImageRenderFormType';
        }
        $form = $this->createForm($this->localConf['formTypeClass'], $obj);

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
     * @Route("/services/service-image/delete/{service}/{id}",
     *     name="_services__service_image__delete",
     *     defaults={"id" = null}
     * )
     *
     * Overrides parent method
     * @param Request $request
     * @param $service
     * @param $id
     * @return mixed
     */
    public function deleteLocalChildAction(Request $request, $service, $id)
    {
        return parent::deleteChildAction($request, array($service), $id);
    }

    /**
     * @Route("/services/service-image/data/{service}",
     *     name="_services__service_image__data"
     * )
     *
     * Overrides parent method
     * @param Request $request
     * @param $service
     * @return mixed
     */
    public function dataLocalChildAction(Request $request, $service)
    {
        return parent::dataChildAction($request, array($service));
    }

    /**
     * @Route("/services/service-image/thumbnail/{service}",
     *     name="_services__service_image__thumbnail"
     * )
     *
     * Action to edit/add thumbnail using the form
     * @param Request $request
     * @param $service
     * @return mixed
     */
    public function thumbnailAction(Request $request, $service)
    {
        // Set configuration
        $this->flags['hasForm'] = true;
        $this->initChild($request, array($service));

        // Get object
        $obj = $this->getObject();

        // Create form
        $form = $this->createForm('ServicesBundle\Form\ServiceImageThumbnailType', $obj);

        // Handle request
        $form->handleRequest($request);

        // Check if is submitted
        if($form->isSubmitted()) {
            if (!$this->validateForm($form)) {
                return $this->getResponse(true);
            }

            // Get data
            $content = $request->getContent();
            $fields = array();
            parse_str($content, $fields);

            // Get object
            $serviceObj = $this->getParentConf()['obj'];
            $serviceObj->setThumbnail(HelperService::cropImage(
                $this->container->get('liip_imagine.data.manager'),
                $this->container->get('liip_imagine.filter.manager'),
                $fields['path'],
                $fields['width'],
                $fields['height'],
                $fields['x'],
                $fields['y']
            ));

            // Save (use a static general method, not a local method)
            self::saveObject_static($this, $serviceObj);
            if ($this->responseConf['status'] === 1) {
                $this->addFlashMessage( // Flash messages to display to user
                    'The data has been updated',
                    'Success',
                    'success'
                );
            }
            return $this->getResponse(true);
        }

        // Render form
        return $this->render('AppBundle:image:crop-form-popup.html.twig', array(
            '_form' => $form->createView()
        ));
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
            . 'services/'
            . $parentId
            . '/img/'
        );

        $obj->setLiipImagineDataManager($this->container->get('liip_imagine.data.manager'));
        $obj->setLiipImagineFilterManager($this->container->get('liip_imagine.filter.manager'));

        return $obj;
    }
}