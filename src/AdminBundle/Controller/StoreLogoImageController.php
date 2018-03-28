<?php

namespace AdminBundle\Controller;

use AppBundle\Controller\BaseEntityChildController;
use Sensio\Bundle\FrameworkExtraBundle\Configuration\Route;
use Symfony\Component\HttpFoundation\Request;
use AppBundle\Service\HelperService;

class StoreLogoImageController extends BaseEntityChildController
{
    /**
     * Get label/title to display child in parent
     * @return mixed
     */
    static function getLabel() { return 'Logo Image'; }

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

        // Flags
        $this->flags['handleStore'] = false; // Store is handled by parent dependency

        // Parent route
        $this->parentConf = array(
            'store' => array('route' => '_admin__store__index')
        );

        // Route
        $this->templateConf['route'] = array(
            'get' => array(
                'name' => '_admin__store_logo_image__get'
            ),
            'edit' => array(
                'name' => '_admin__store_logo_image__edit',
            ),
            'delete' => array(
                'name' => '_admin__store_logo_image__delete',
            ),
            'thumbnail' => array(
                'name' => '_admin__store_logo_image__thumbnail',
            )
        );

        parent::initChild($request, $parents);

        // Form (set submit context as default, because this is the most used)
        $this->localConf['formTypeClass'] = ('AdminBundle\Form\StoreLogoImageSubmitFormType');

        /* Templates */
        $this->localConf['templatesPath'] = ($this->localConf['Bundle'].':StoreLogoImage');
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

        // Legend (disable cancel legend)
        $this->templateConf['controls']['legend'] = array();

        // Extra data
        $this->templateConf['extraData']['template'] = array(
            'class' => '-merge-view',
            'imageCrop' => array(
                'label' => 'Set documents logo',
                'ActionUrl' => $this->templateConf['route']['thumbnail']['url']
            )
        );

        return $this;
    }

    /**
     * @Route("/admin/store-logo-image/get/{store}/{id}",
     *     name="_admin__store_logo_image__get",
     *     defaults={"id" = null}
     * )
     *
     * Overrides parent method
     * @param Request $request
     * @param $store
     * @param $id
     * @return mixed
     */
    public function getLocalChildAction(Request $request, $store, $id)
    {
        return parent::getChildAction($request, array($store), $id);
    }

    /**
     * @Route("/admin/store-logo-image/edit/{store}/{id}",
     *     name="_admin__store_logo_image__edit",
     *     defaults={"id" = null}
     * )
     *
     * Overrides parent method
     * @param Request $request
     * @param $store
     * @param $id
     * @return mixed
     */
    public function editLocalChildAction(Request $request, $store, $id)
    {
        // Set configuration
        $this->flags['hasForm'] = true;
        $this->initChild($request, array($store));

        // Get object
        $obj = $this->getObject($id);

        // Build form
        if(empty($_FILES)) {
            // Fields is necessary, to submit data, to render in view the plugin makes the work
            $this->localConf['formTypeClass'] = 'AdminBundle\Form\StoreLogoImageRenderFormType';
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
     * @Route("/admin/store-logo-image/delete/{store}/{id}",
     *     name="_admin__store_logo_image__delete",
     *     defaults={"id" = null}
     * )
     *
     * Overrides parent method
     * @param Request $request
     * @param $store
     * @param $id
     * @return mixed
     */
    public function deleteLocalChildAction(Request $request, $store, $id)
    {
        return parent::deleteChildAction($request, array($store), $id);
    }

    /**
     * @Route("/admin/store-logo-image/data/{store}",
     *     name="_admin__store_logo_image__data"
     * )
     *
     * Overrides parent method
     * @param Request $request
     * @param $store
     * @return mixed
     */
    public function dataLocalChildAction(Request $request, $store)
    {
        return parent::dataChildAction($request, array($store));
    }

    /**
     * @Route("/admin/store-logo-image/thumbnail/{store}",
     *     name="_admin__store_logo_image__thumbnail"
     * )
     *
     * Action to edit/add thumbnail using the form
     * @param Request $request
     * @param $store
     * @return mixed
     */
    public function thumbnailAction(Request $request, $store)
    {
        // Set configuration
        $this->flags['hasForm'] = true;
        $this->initChild($request, array($store));

        // Get object
        $obj = $this->getObject();

        // Create form
        $form = $this->createForm('AdminBundle\Form\StoreLogoImageThumbnailType', $obj);

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
            $storeObj = $this->getParentConf()['obj'];
            $storeObj->setThumbnail(HelperService::cropImage(
                $this->container->get('liip_imagine.data.manager'),
                $this->container->get('liip_imagine.filter.manager'),
                $fields['path'],
                $fields['width'],
                $fields['height'],
                $fields['x'],
                $fields['y']
            ));

            // Save (use a static general method, not a local method)
            self::saveObject_static($this, $storeObj);
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
            . 'admin/'
            . $parentId
            . '/img/logo/'
        );

        $obj->setLiipImagineDataManager($this->container->get('liip_imagine.data.manager'));
        $obj->setLiipImagineFilterManager($this->container->get('liip_imagine.filter.manager'));

        return $obj;
    }
}