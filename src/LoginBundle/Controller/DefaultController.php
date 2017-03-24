<?php

namespace LoginBundle\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\Controller;
use Sensio\Bundle\FrameworkExtraBundle\Configuration\Route;
use Symfony\Component\HttpFoundation\Request;

class DefaultController extends Controller
{
    /**
     * @Route("/login",
     *     name="_login__default__index"
     * )
     *
     * Form submission is handled by the symfony security
     * @param Request $request
     * @return mixed
     */
    public function indexAction(Request $request)
    {
        $authenticationUtils = $this->get('security.authentication_utils');

        // get the login error if there is one
        $error = $authenticationUtils->getLastAuthenticationError();
        // last system entered by the user, stored in the session
        $lastSystem = $this->get('session')->get('_tmp.user_system');
        // last username entered by the user
        $lastUsername = $authenticationUtils->getLastUsername();

        return $this->render(
            'LoginBundle:Default:index.html.twig',
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