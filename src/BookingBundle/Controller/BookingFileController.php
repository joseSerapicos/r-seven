<?php

namespace BookingBundle\Controller;

use AppBundle\Controller\BaseEntityChildController;
use Sensio\Bundle\FrameworkExtraBundle\Configuration\Route;
use Symfony\Component\HttpFoundation\Request;

class BookingFileController extends BaseEntityChildController
{
    /**
     * Get label/title to display child in parent
     * @return mixed
     */
    static function getLabel() { return 'Files'; }

    /**
     * Overrides parent method
     * @param Request $request
     * @param $parents
     * @return $this
     */
    protected function initChild(Request $request, $parents)
    {
        // Set configuration only once
        if($this->isInitialized) { return $this; }

        // Parent route
        $this->parentConf = array(
            'booking' => array('route' => '_booking__booking__index')
        );

        // Route
        $this->templateConf['route'] = array(
            'get' => array(
                'name' => '_booking__booking_file__get'
            ),
            'edit' => array(
                'name' => '_booking__booking_file__edit',
            ),
            'delete' => array(
                'name' => '_booking__booking_file__delete',
            )
        );

        parent::initChild($request, $parents);

        // Form (set submit context as default, because this is the most used)
        $this->localConf['formTypeClass'] = ('BookingBundle\Form\BookingFileSubmitFormType');

        // Templates
        $this->localConf['templates']['edit'] = 'AppBundle:file:form-popup.html.twig';

        // Search
        $this->templateConf['search']['fields'] = $this->templateConf['fields']['view'];

        // Actions for template/view
        $this->templateConf['actions']['edit'] = false;

        // Extra data
        $this->templateConf['extraData']['template'] = array(
            'class' => '-merge-view'
        );

        return $this;
    }

    /**
     * @Route("/booking/booking-file/get/{booking}/{id}",
     *     name="_booking__booking_file__get",
     *     defaults={"id" = null}
     * )
     *
     * Overrides parent method
     * @param Request $request
     * @param $booking
     * @param $id
     * @return mixed
     */
    public function getLocalChildAction(Request $request, $booking, $id)
    {
        return parent::getChildAction($request, array($booking), $id);
    }

    /**
     * @Route("/booking/booking-file/edit/{booking}/{id}",
     *     name="_booking__booking_file__edit",
     *     defaults={"id" = null}
     * )
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
            // Fields is necessary, to submit data, to render in view the plugin makes the work
            $this->localConf['formTypeClass'] = str_replace('Submit', 'Render', $this->localConf['formTypeClass']);
        }
        $form = $this->createForm($this->localConf['formTypeClass'], $obj);

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
     * @Route("/booking/booking-file/edit-flat-form/{booking}",
     *     name="_booking__booking_file__edit_flat_form"
     * )
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
        $this->localConf['formTypeClass'] = ('BookingBundle\Form\BookingFileSubmitFlatFormType');
        // Set view
        $this->localConf['templates']['edit'] = 'AppBundle:partial/form:form.html.twig';
        // Render edit action
        return $this->editLocalChildAction($request, array($booking), null);
    }

    /**
     * @Route("/booking/booking-file/delete/{booking}/{id}",
     *     name="_booking__booking_file__delete",
     *     defaults={"id" = null}
     * )
     *
     * Overrides parent method
     * @param Request $request
     * @param $booking
     * @param $id
     * @return mixed
     */
    public function deleteLocalChildAction(Request $request, $booking, $id)
    {
        return parent::deleteChildAction($request, array($booking), $id);
    }

    /**
     * @Route("/booking/booking-file/data/{booking}",
     *     name="_booking__booking_file__data"
     * )
     *
     * Overrides parent method
     * @param Request $request
     * @param $booking
     * @return mixed
     */
    public function dataLocalChildAction(Request $request, $booking)
    {
        return parent::dataChildAction($request, array($booking));
    }

    /**
     * New object
     * @return object
     */
    protected function newObject()
    {
        $obj = parent::newObject();

        $parent = reset($this->parentConf);

        $parentId = ($parent['obj'] ?
            $parent['obj']->getId() :
            0 // Needed when parent is not defined like to get edit template
        );

        $obj->setDir(
            $this->get('session')->get('_app.system')['filesRepository']
            . lcfirst($parent['entity']) . '/'
            . $parentId
            . '/file/'
        );

        return $obj;
    }
}