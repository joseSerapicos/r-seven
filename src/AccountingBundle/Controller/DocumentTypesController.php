<?php

namespace AccountingBundle\Controller;

use AppBundle\Controller\BaseController;
use Symfony\Component\HttpFoundation\Request;
use Sensio\Bundle\FrameworkExtraBundle\Configuration\Route;

class DocumentTypesController extends BaseController
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
     * @Route("/accounting/document-types/index",
     *     name="_accounting__document_types__index"
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
        return $this->render('AccountingBundle:DocumentTypes:index.html.twig', $this->getResponse());
    }

    /**
     * @Route("/accounting/document-types/main-menus",
     *     name="_accounting__document_types__main_menus"
     * )
     *
     * Action to get the base to display the menus of documentTypes
     * @return mixed
     */
    public function mainMenusAction()
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
            )
        ));
    }
}