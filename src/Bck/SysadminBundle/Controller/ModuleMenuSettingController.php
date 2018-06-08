<?php

namespace Bck\SysadminBundle\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\Controller;
use Sensio\Bundle\FrameworkExtraBundle\Configuration\Route;
use Bck\SysadminBundle\Entity\ModuleMenu;
use Symfony\Component\HttpFoundation\Request;

class ModuleMenuSettingController extends Controller
{
    /**
     * @Route("/bck/sysadmin/module-menu-setting",
     *     name="_bck__sysadmin__module_menu_setting__index"
     * )
     *
     * @param Request $request
     * @return mixed
     */
    public function indexAction(Request $request) {
        $obj = new ModuleMenu();
        $form = $this->createForm('_sysadmin_form_type_module-menu', $obj);
        $form->handleRequest($request);

        if($form->isSubmitted()) {
            if($this->save($obj, $form)) {
                return $this->render('BckSysadminBundle:Default:module_menu.html.twig', array('status' => "success", 'form' => $form->createView()));
            }
            else {
                return $this->render('BckSysadminBundle:Default:module_menu.html.twig', array('status' => "error", 'form' => $form->createView()));
            }
        }

        return $this->render('BckSysadminBundle:Default:module_menu.html.twig', array('status' => "create", 'form' => $form->createView()));
    }

    // This class should be extend a class thar already extends the controller and implements the methods save, remove, etc (interface impleenta metodos? abstracta assina apenas metodos?)
    protected function save($obj, $form) {
        if ($form->isValid()) {
            // Persist the object
            try {
                $em = $this->getDoctrine()->getManager('database_system');
                $em->persist($obj);
                $em->flush();
            } catch (Exception $e) {
                $this->get('session')->getFlashBag()->add('flash_key', "Error: " . $e->getMessage());
                return false;
            }

            $this->get('session')->getFlashBag()->add('flash_key', "Success");
            return true;
        }

        return false;
    }
}