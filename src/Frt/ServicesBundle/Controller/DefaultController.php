<?php

namespace Frt\ServicesBundle\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\Controller;

class DefaultController extends Controller
{
    public function indexAction()
    {
        return $this->render('FrtServicesBundle:Default:index.html.twig');
    }
}
