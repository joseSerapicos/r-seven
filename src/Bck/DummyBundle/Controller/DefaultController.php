<?php

namespace Bck\DummyNamespace\DummyBundle\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\Controller;

class DefaultController extends Controller
{
    public function indexAction()
    {
        return $this->render('DummyNamespaceBckDummyBundle:Default:index.html.twig');
    }
}
