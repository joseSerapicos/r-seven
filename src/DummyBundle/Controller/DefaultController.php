<?php

namespace DummyNamespace\DummyBundle\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\Controller;

class DefaultController extends Controller
{
    public function indexAction()
    {
        return $this->render('DummyNamespaceDummyBundle:Default:index.html.twig');
    }
}
