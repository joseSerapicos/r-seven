<?php

namespace AdminBundle\Controller;

use AppBundle\Controller\BaseController;
use Symfony\Component\HttpFoundation\Request;
use Sensio\Bundle\FrameworkExtraBundle\Configuration\Route;

class SettingsController extends BaseController
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

        parent::init($request);

        // Route
        $this->templateConf['route'] = null;

        // Search
        $this->templateConf['search'] = null;

        return $this;
    }

    /**
     * @Route("/admin/settings/index",
     *     name="_admin__settings__index"
     * )
     *
     * Index action.
     * @param Request $request
     * @return mixed
     */
    public function indexAction(Request $request)
    {
        // Set configuration
        $this->init($request);
        // Update breadcrumb
        $this->updateBreadcrumb($request);

        $this->responseConf['hasConf'] = true;
        return $this->render('AdminBundle:Settings:index.html.twig', $this->getResponse());
    }

    /**
     * @Route("/admin/settings/main-menus",
     *     name="_admin__settings__main_menus"
     * )
     *
     * Action to get the base to display the menus of settings
     * @return mixed
     */
    public function mainMenusAction()
    {
        // Render form
        return $this->render('AppBundle:tabs:default.html.twig', array(
            '_containers' => array(
                array(
                    'label' => 'Entities'
                ),
                array(
                    'label' => 'Booking'
                ),
                array(
                    'label' => 'Document Types'
                )
            )
        ));
    }

    /**
     * @Route("/admin/settings/entities-menus",
     *     name="_admin__settings__entities_menus"
     * )
     *
     * Action to get the menus of entities
     * @return mixed
     */
    public function entitiesMenusAction()
    {
        // Render form
        return $this->render('AppBundle:accordion:default.html.twig', array(
            '_containers' => array(
                array(
                    'label' => 'Client Series'
                ),
                array(
                    'label' => 'Supplier Series'
                ),
                array(
                    'label' => 'Entity Series'
                )
            ),
            '_id' => 'entities'
        ));
    }

    /**
     * @Route("/admin/settings/document-types-menus",
     *     name="_admin__settings__document_types_menus"
     * )
     *
     * Action to get the menus of entities
     * @return mixed
     */
    public function documentTypesMenusAction()
    {
        // Render form
        return $this->render('AppBundle:accordion:default.html.twig', array(
            '_containers' => array(
                array(
                    'label' => 'Client Document Types'
                ),
                array(
                    'label' => 'Supplier Document Types'
                ),
                array(
                    'label' => 'Entity Document Types'
                )
            ),
            '_id' => 'doc-types'
        ));
    }
}