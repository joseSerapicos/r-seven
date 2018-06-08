<?php

namespace LoginBundle\Controller;

use LoginBundle\Entity\User;
use Symfony\Bundle\FrameworkBundle\Controller\Controller;
use Sensio\Bundle\FrameworkExtraBundle\Configuration\Route;
use Symfony\Component\HttpFoundation\Request;

class DefaultController extends Controller
{
    /**
     * @Route("/login/frt",
     *     name="_login__default__frt"
     * )
     *
     * @param Request $request
     * @return mixed
     */
    public function frtAction(Request $request)
    {
        return $this->indexAction($request, 'FRT');
    }

    /**
     * @Route("/login/bck",
     *     name="_login__default__bck"
     * )
     *
     * @param Request $request
     * @return mixed
     */
    public function bckAction(Request $request)
    {
        return $this->indexAction($request, 'BCK');
    }

    /**
     * @Route("/login",
     *     name="_login__default__index"
     * )
     *
     * Form submission is handled by the symfony security
     * @param Request $request
     * @param $context (context of login <'FRT' (front-office) or 'BCK' (back-office)>)
     * @return mixed
     */
    public function indexAction(Request $request, $context = null)
    {
        $session = $this->get('session');
        $authenticationUtils = $this->get('security.authentication_utils');

        // Temporary variable to controls if the user has submitted the login form,
        // or is the first call to get the login form,
        // or is the Symfony relogin call (Symfony calls two times the authentication methods)
        $hasAuthenticationSubmit = ($session->has('_tmp.hasAuthenticationSubmit') ?
            $session->get('_tmp.hasAuthenticationSubmit') :
            false
        );
        $session->set('_tmp.hasAuthenticationSubmit', false); // Reset variable

        if ($hasAuthenticationSubmit) {
            $context = $session->get('_app.context');
        } else {
            // Determine context
            if (!$context) {
                $hostSplit = explode('.', $request->getHost());
                $context = ((in_array($hostSplit[0], array('backoffice', 'bck'))) ? 'BCK' : 'FRT');
            }

            // Save context in session for when Symfony reloads the login (Symfony call login two times)
            $session->set('_app.context', $context);
            $session->set('_app.isBckContext', ($context == 'BCK'));

            // Save user request route to handle with redirect if necessary (back-office or front-office)
            $user_request = ($this->has('_security.main.target_path') ?
                $this->get('_security.main.target_path') :
                (($context == 'BCK') ?
                    $this->generateUrl('_bck__home__default__index') :
                    ''//$this->generateUrl('_home__default__index') // @TODO route front-office
                )
            );
            $session->set('_tmp.user_request', $user_request);
        }

        // get the login error if there is one
        $error = $authenticationUtils->getLastAuthenticationError();
        // last system entered by the user, stored in the session
        $lastSystem = $this->get('session')->get('_tmp.user_system');
        // last username entered by the user
        $lastUsername = $authenticationUtils->getLastUsername();

        if ($context == 'FRT') {
            // @TODO get system by domain/sub-domain
            // Load all system settings to session
            $this->get('app.service.frt')->loadSystem('dev');
        }

        $view = (($context == 'BCK') ? 'LoginBundle:Default:bck.html.twig' : 'LoginBundle:Default:frt.html.twig');
        return $this->render(
            $view,
            array(
                'error' => $error,
                'form' => array (
                    'last_values' => array(
                        '_system' => $lastSystem,
                        '_username' => $lastUsername
                    )
                )
            )
        );
    }

    /**
     * @Route("/login/process/{store}",
     *     name="_login__default__process",
     *     defaults={"store" = null}
     * )
     *
     * Process the login after login successfully
     * @param Request $request
     * @param $store (used when the user change the store in back-office)
     * @return \Symfony\Component\HttpFoundation\RedirectResponse
     */
    public function processAction(Request $request, $store = null)
    {
        // Check if user has been logged in
        $userObj = $this->container->get('security.token_storage')->getToken()->getUser();
        if(!$userObj || !($userObj instanceof User)) {
            // Redirect user to login page
            return $this->indexAction($request);
        }

        $session = $this->get('session');
        $isBckContext = $session->get('_app.isBckContext');
        $userRequest = null;

        // Initialization has been done, only set store in back-office
        if ($isBckContext && $store) {
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
            $session->remove('_tmp.user_request'); // Remove temporary variable to avoid redirect loop

            // Init back-office
            if ($isBckContext) {
                $this->get('app.service.app')->init();

                // Set flash message
                $store = $session->get('_app.store');
                $storeName = ($store ? $session->get('_app.stores')[$store]['name'] : 'No stores available!');
                $this->get('app.service.app')->addFlashMessage(
                    ($session->get('_app.user')['name']
                        . '<br/>' . $storeName
                        . '<br/>' . $session->get('_app.system')['name']
                    ),
                    'Welcome ' . $session->get('_app.user')['username']
                );
            }
            // Init front-office
            else {
                $this->get('app.service.frt')->init();
            }
        }

        // Redirect user to original request
        if (!empty($userRequest)) {
            return $this->redirect($userRequest);
        }

        // Redirect user to default page
        $route = ($isBckContext ? '_bck__home__default__index' : '_home__default__index');
        return $this->redirectToRoute($route);
    }

    /**
     * @Route("/logout",
     *     name="_login__default__logout"
     * )
     *
     * Fake action, only to define route. Handled by the symfony security.
     * @return $this
     */
    public function logoutAction()
    {
        return $this;
    }

    /**
     * @Route("/login/check",
     *     name="_login__default__check"
     * )
     *
     * Fake action, only to define route. Handled by the symfony security.
     * @return $this
     */
    public function checkAction()
    {
        return $this;
    }
}