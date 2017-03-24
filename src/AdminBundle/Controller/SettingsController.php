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
     * @Route("/admin/settings/menus",
     *     name="_admin__settings__menus"
     * )
     *
     * Action to get the base to display the menus of settings
     * @return mixed
     */
    public function menusAction()
    {
        // Render form
        return $this->render('AppBundle:accordion:box.html.twig', array(
            '_containers' => array(
                array(
                    'label' => 'Entities Series'
                ),
                array(
                    'label' => 'Clients Series'
                ),
                array(
                    'label' => 'Suppliers Series'
                ),
                array(
                    'label' => 'Booking Series'
                )
            )
        ));
    }
}