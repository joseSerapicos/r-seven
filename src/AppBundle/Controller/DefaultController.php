<?php

namespace AppBundle\Controller;

use AppBundle\Service\HelperService;
use Symfony\Bundle\FrameworkBundle\Controller\Controller;
use Sensio\Bundle\FrameworkExtraBundle\Configuration\Route;
use AppBundle\Entity\LocalModule;
use AppBundle\Entity\LocalModuleMenu;

class DefaultController extends Controller
{
    /**
     * @Route("/",
     *     name="_app__default__index"
     * )
     *
     * Redirect to the main page
     * @return \Symfony\Component\HttpFoundation\RedirectResponse
     */
    public function indexAction()
    {
        // Check if user has been logged in
        $userObj = $this->get('security.token_storage')->getToken()->getUser();
        if(!$userObj || !($userObj instanceof User)) {
            // Redirect user to login page
            return $this->redirectToRoute('_login__default__index');
        }

        $session = $this->get('session');
        $isBckContext = $session->get('_app.isBckContext');

        // Redirect user to default page
        $route = ($isBckContext ? '_bck__home__default__index' : '_home__default__index');
        return $this->redirectToRoute($route);
    }

    /**
     * @Route("/template/{bundle}/{controller}/{view}/{bundlePrefix}",
     *     name="_app__default__template",
     *     defaults={"bundlePrefix" = null}
     * )
     *
     * Action to render template.
     * @param $bundle
     * @param $controller
     * @param $view (view name or path to view, use '__' instead "/" to separate folders)
     * @param $bundlePrefix
     * @return mixed
     */
    public function templateAction($bundle, $controller, $view, $bundlePrefix = null) {
        $bundlePrefix = ($bundlePrefix ? ucfirst($bundlePrefix) : '');
        $bundle = (ucfirst($bundle) . 'Bundle');

        // If view is out of AppBundle, then the controller name needs to be converted in CamelCase
        $controller = (($bundle == 'AppBundle') ? $controller : (HelperService::hyphenCaseToCamelCase($controller)));

        $view = ($view ? str_replace('__', '/', $view) : '');

        return $this->render($bundlePrefix . $bundle . ':' . $controller . ':' . $view . '.html.twig');
    }
}