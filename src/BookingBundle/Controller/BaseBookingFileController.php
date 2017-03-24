<?php

namespace BookingBundle\Controller;

use AppBundle\Controller\BaseEntityChildController;
use Sensio\Bundle\FrameworkExtraBundle\Configuration\Route;
use Symfony\Component\HttpFoundation\Request;

class BaseBookingFileController extends BaseEntityChildController
{
    /**
     * DEFINE ROUTE HERE
     *
     * Overrides parent method
     * @param Request $request
     * @param $booking
     * @param $id
     * @return mixed
     */
    public function editLocalChildAction(Request $request, $booking, $id)
    {
        // Set configuration
        $this->flags['hasForm'] = true;
        $this->initChild($request, array($booking));

        // Get object
        $obj = $this->getObject($id);

        // Build form
        if(empty($_FILES)) {
            // Fields is not necessary, the plugin render the control
            $this->localConf['form']['hasFields'] = false;
        }
        $form = $this->buildForm($request, $obj);

        // Handle request
        $form->handleRequest($request);

        // Check if is submitted
        if($form->isSubmitted()) {
            $this->saveForm($form, $obj);
            return $this->getResponse(true);
        }

        // Render form
        return $this->render($this->localConf['templates']['edit'], array(
            '_conf' => $this->templateConf,
            '_form' => $form->createView()
        ));
    }

    /**
     * DEFINE ROUTE HERE
     *
     * Action to get flat form
     * @param Request $request
     * @param $booking
     * @return mixed
     */
    public function editFlatFormAction(Request $request, $booking)
    {
        // Set configuration
        $this->flags['hasForm'] = true;
        $this->initChild($request, array($booking));
        // Set form attributes
        $this->localConf['form']['class'] = 'm-t-md dropzone';
        $this->localConf['form']['buttons'] = 'none';
        // Set view
        $this->localConf['templates']['edit'] = 'AppBundle:partial/form:form.html.twig';
        // Render edit action
        return $this->editLocalChildAction($request, array($booking), null);
    }

    /**
     * New object
     * @return object
     */
    protected function newObject()
    {
        $obj = parent::newObject();

        $parent = reset($this->parentConf);

        $obj->setDir(
            $this->get('session')->get('_app.system')['filesRepository']
            . lcfirst($parent['entity']) . '/'
            . $parent['obj']->getId()
            . '/file/'
        );

        return $obj;
    }
}