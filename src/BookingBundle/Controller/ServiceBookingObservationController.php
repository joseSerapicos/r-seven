<?php

namespace BookingBundle\Controller;

use AppBundle\Controller\BaseEntityChildController;
use Sensio\Bundle\FrameworkExtraBundle\Configuration\Route;
use Symfony\Component\HttpFoundation\Request;

class ServiceBookingObservationController extends BaseEntityChildController
{
    /**
     * Overrides parent method
     * @param Request $request
     * @param $parents
     * @param $label (set label when you don't have the route in modules/menus tree)
     * @return $this
     */
    protected function initChild(Request $request, $parents, $label = 'Observations')
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
                'name' => '_booking__service_booking_observation__get'
            ),
            'edit' => array(
                'name' => '_booking__service_booking_observation__edit',
            ),
            'delete' => array(
                'name' => '_booking__service_booking_observation__delete',
            ),
            'order' => array(
                'name' => '_booking__service_booking_observation__order',
            )
        );

        parent::initChild($request, $parents, $label);

        // Search
        $this->templateConf['search']['fields'] = $this->templateConf['fields']['view'];
        // Empty criteria to be able to see all registers because "search" action is disabled.
        $this->templateConf['search']['criteria'] = array();

        // Actions for template/view
        $this->templateConf['actions'] = array_merge(
            $this->templateConf['actions'],
            array(
                'order' => true
            )
        );

        // Extra data
        $this->templateConf['extraData']['template'] = array(
            'class' => '-merge-view'
        );

        return $this;
    }

    /**
     * @Route("/booking/service-booking-observation/get/{serviceBooking}/{id}",
     *     name="_booking__service_booking_observation__get",
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
     * @Route("/booking/service-booking-observation/edit/{serviceBooking}/{id}",
     *     name="_booking__service_booking_observation__edit",
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
        return parent::editChildAction($request, array($serviceBooking), $id);
    }

    /**
     * @Route("/booking/service-booking-observation/delete/{serviceBooking}/{id}",
     *     name="_booking__service_booking_observation__delete",
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
     * @Route("/booking/service-booking-observation/order/{serviceBooking}/{id}/{type}",
     *     name="_booking__service_booking_observation__order",
     *     defaults={"id" = null, "type" = null}
     * )
     *
     * Overrides parent method
     * @param Request $request
     * @param $serviceBooking
     * @param $id
     * @param $type
     * @return mixed
     */
    public function orderLocalChildAction(Request $request, $serviceBooking, $id, $type)
    {
        return parent::orderChildAction($request, array($serviceBooking), $id, $type);
    }

    /**
     * @Route("/booking/service-booking-observation/data/{serviceBooking}",
     *     name="_booking__service_booking_observation__data"
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

    /**
     * @Route("/booking/service-booking-observation/conf/{serviceBooking}",
     *     name="_booking__service_booking_observation__conf"
     * )
     *
     * Overrides parent method
     * @param Request $request
     * @param $serviceBooking
     * @return mixed
     */
    public function confLocalChildAction(Request $request, $serviceBooking)
    {
        return parent::confChildAction($request, array($serviceBooking));
    }
}