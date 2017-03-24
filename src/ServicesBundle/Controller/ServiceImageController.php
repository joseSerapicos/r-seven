<?php

namespace ServicesBundle\Controller;

use AppBundle\Controller\BaseEntityChildController;
use Sensio\Bundle\FrameworkExtraBundle\Configuration\Route;
use Symfony\Component\HttpFoundation\Request;

class ServiceImageController extends BaseEntityChildController
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
            )
        );

        parent::initChild($request, $parents, $label);

        /* Templates */
        $this->localConf['templatesPath'] = ($this->localConf['Bundle'].'ServiceImage');
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
                'thumbnail' => true
            )
        );

        // Extra data
        $this->templateConf['extraData']['template'] = array(
            'class' => '-merge-view',
            'imageCrop' => array(
                'label' => 'Set image profile',
                'ActionUrl' => $this->generateUrl(
                    '_services__service__thumbnail',
                    array('id' => $this->parentConf['service']['obj']->getId())
                )
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
     * New object
     * @return object
     */
    protected function newObject()
    {
        $obj = parent::newObject();

        $obj->setDir(
            $this->get('session')->get('_app.system')['filesRepository']
            . 'services/'
            . $this->parentConf['service']['obj']->getId()
            . '/img/'
        );

        $obj->setLiipImagineDataManager($this->container->get('liip_imagine.data.manager'));
        $obj->setLiipImagineFilterManager($this->container->get('liip_imagine.filter.manager'));

        return $obj;
    }
}