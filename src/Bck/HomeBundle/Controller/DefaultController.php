<?php

namespace Bck\HomeBundle\Controller;

use AppBundle\Controller\BaseController;
use Symfony\Component\HttpFoundation\Request;
use Sensio\Bundle\FrameworkExtraBundle\Configuration\Route;

class DefaultController extends BaseController
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
     * @Route("/bck/home",
     *     name="_bck__home__default__index"
     * )
     *
     * Render login form
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
        return $this->render('BckHomeBundle:Default:index.html.twig', $this->getResponse());
    }
}