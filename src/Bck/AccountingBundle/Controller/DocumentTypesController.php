<?php

namespace Bck\AccountingBundle\Controller;

use AppBundle\Controller\BaseController;
use Symfony\Component\HttpFoundation\Request;
use Sensio\Bundle\FrameworkExtraBundle\Configuration\Route;

/**
 * Class DocumentTypesController
 * @package BckAccountingBundle\Controller
 *
 * This class is only used to merge all entities document type in the same menu
 */
class DocumentTypesController extends BaseController
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

        // Extra data
        $this->templateConf['extraData']['template'] = array(
            'class' => 'white-accordion'
        );

        return $this;
    }

    /**
     * @Route("/bck/accounting/document-types/index",
     *     name="_bck__accounting__document_types__index"
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
        return $this->render('BckAccountingBundle:DocumentTypes:index.html.twig', $this->getResponse());
    }

    /**
     * @Route("/bck/accounting/document-types/main-menus",
     *     name="_bck__accounting__document_types__main_menus"
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
                )
            )
        ));
    }
}