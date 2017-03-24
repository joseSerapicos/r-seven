<?php

namespace BookingBundle\Controller;

use Sensio\Bundle\FrameworkExtraBundle\Configuration\Route;
use Symfony\Component\HttpFoundation\Request;

class ServiceBookingFileController extends BaseBookingFileController
{
    /**
     * Overrides parent method
     * @param Request $request
     * @param $parents
     * @param $label (set label when you don't have the route in modules/menus tree)
     * @return $this
     */
    protected function initChild(Request $request, $parents, $label = 'Files')
    {
        // Set configuration only once
        if($this->isInitialized) { return $this; }

        // Parent route
        $this->parentConf = array(
            'serviceBooking' => array('route' => '_booking__service_booking__index')
        );

        // Route
        $this->templateConf['route'] = array(
            'get' => array(
                'name' => '_booking__service_booking_file__get'
            ),
            'edit' => array(
                'name' => '_booking__service_booking_file__edit',
            ),
            'delete' => array(
                'name' => '_booking__service_booking_file__delete',
            )
        );

        parent::initChild($request, $parents, $label);

        /* Form */
        $this->localConf['form']['class'] = 'dropzone';
        $this->localConf['form']['buttons'] = 'none';
        $this->localConf['form']['hasNgForm'] = false;
        /* /Form */

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
     * @Route("/booking/service-booking-file/get/{serviceBooking}/{id}",
     *     name="_booking__service_booking_file__get",
     *     defaults={"id" = null}
     * )
     *
     * Overrides parent method
     * @param Request $request
     * @param $serviceBooking
     * @param $id
     * @return mixed
     */
    public function getLocalChildAction(Request $request, $serviceBooking, $id)
    {
        return parent::getChildAction($request, array($serviceBooking), $id);
    }

    /**
     * @Route("/booking/service-booking-file/edit/{serviceBooking}/{id}",
     *     name="_booking__service_booking_file__edit",
     *     defaults={"id" = null}
     * )
     *
     * Overrides parent method
     * @param Request $request
     * @param $serviceBooking
     * @param $id
     * @return mixed
     */
    public function editLocalChildAction(Request $request, $serviceBooking, $id)
    {
        return parent::editLocalChildAction($request, $serviceBooking, $id);
    }

    /**
     * @Route("/booking/service-booking-file/edit-flat-form/{serviceBooking}",
     *     name="_booking__service_booking_file__edit_flat_form"
     * )
     *
     * Action to get flat form
     * @param Request $request
     * @param $serviceBooking
     * @return mixed
     */
    public function editFlatFormAction(Request $request, $serviceBooking)
    {
        return parent::editFlatFormAction($request, $serviceBooking);
    }

    /**
     * @Route("/booking/service-booking-file/delete/{serviceBooking}/{id}",
     *     name="_booking__service_booking_file__delete",
     *     defaults={"id" = null}
     * )
     *
     * Overrides parent method
     * @param Request $request
     * @param $serviceBooking
     * @param $id
     * @return mixed
     */
    public function deleteLocalChildAction(Request $request, $serviceBooking, $id)
    {
        return parent::deleteChildAction($request, array($serviceBooking), $id);
    }

    /**
     * @Route("/booking/service-booking-file/data/{serviceBooking}",
     *     name="_booking__service_booking_file__data"
     * )
     *
     * Overrides parent method
     * @param Request $request
     * @param $serviceBooking
     * @return mixed
     */
    public function dataLocalChildAction(Request $request, $serviceBooking)
    {
        return parent::dataChildAction($request, array($serviceBooking));
    }
}