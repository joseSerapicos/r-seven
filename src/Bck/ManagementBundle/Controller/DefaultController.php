<?php

namespace Bck\ManagementBundle\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\Controller;

class DefaultController extends Controller
{
    public function indexAction()
    {
        return $this->render('BckManagementBundle:Default:index.html.twig');
    }
}
