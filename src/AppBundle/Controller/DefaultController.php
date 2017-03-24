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
     * @Route("/{store}",
     *     name="_app__default__index",
     *     defaults={"store" = null}
     * )
     *
     * Starts and loads all necessary resources for app
     * @param $store
     * @return \Symfony\Component\HttpFoundation\RedirectResponse
     */
    public function indexAction($store)
    {
        $userRequest = null;
        $session = $this->get('session');

        // Initialization has been done, only set store
        if ($store && $session->get('_app.user')) {
            // User request
            $breadcrumb = $session->get('_app.breadcrumb');
            if (is_array($breadcrumb) && (count($breadcrumb) > 0)) {
                $userRequest = end($breadcrumb)['url']; // Redirect user to the same url
            }

            $this->get('app.service.app')->setStore($store);
        }
        // Login initialization
        else {
            // User request
            $userRequest = $session->get('_tmp.user_request');

            $this->get('app.service.app')->init($store);

            // Set flash message
            $store = $session->get('_app.store');
            $storeName = ($store ? $session->get('_app.stores')[$store]['name'] : 'No stores available!');
            $this->get('app.service.app')->addFlashMessage(
                ($session->get('_app.user')['name']
                    .'<br/>'.$storeName
                    .'<br/>'.$session->get('_app.system')['name']
                ),
                'Welcome '.$session->get('_app.user')['username']
            );
        }

        // Redirect user to original request
        if(!empty($userRequest)) {
            return $this->redirect($userRequest);
        }

        // Redirect user to default page
        return $this->redirectToRoute('_home__default__index');
    }

    /**
     * @Route("/template/{view}/{path}/{bundle}",
     *     name="_app__default__template",
     *     defaults={"path" = null, "bundle" = null}
     * )
     *
     * Action to render template
     * @param $view (view file name)
     * @param $path (path to view, use '__' instead "/" to separate folders)
     * @param $bundle
     * @return mixed
     */
    public function templateAction($view, $path, $bundle) {
        $bundle = ($bundle ? (ucfirst($bundle) . 'Bundle') : 'AppBundle');
        // If view is out of AppBundle, then the path needs to be converted in CamelCase
        $path = (($bundle == 'AppBundle') ? $path : (HelperService::hyphenCaseToCamelCase($path)));
        $path = ($path ? str_replace('__', '/', $path) : '');
        return $this->render($bundle . ':' . $path . ':' . $view . '.html.twig');
    }
}