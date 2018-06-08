<?php

namespace Bck\SettingsBundle\Controller;

use AppBundle\Controller\BaseController;
use Symfony\Component\HttpFoundation\Request;
use Sensio\Bundle\FrameworkExtraBundle\Configuration\Route;

class EmailSettingsController extends BaseController
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

        parent::init($request);

        // Route
        $this->templateConf['route'] = null;

        // Search
        $this->templateConf['search'] = null;

        return $this;
    }

    /**
     * @Route("/bck/settings/email-settings/index",
     *     name="_bck__settings__email_settings__index"
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
        $this->responseConf['type'] = "ARRAY";
        return $this->render('BckSettingsBundle:EmailSettings:index.html.twig', $this->getResponse());
    }

    /**
     * @Route("/bck/settings/email-settings/main-menus",
     *     name="_bck__settings__email_settings__main_menus"
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
                    'label' => 'Templates'
                ),
                array(
                    'label' => 'Default Templates'
                )
            )
        ));
    }
}