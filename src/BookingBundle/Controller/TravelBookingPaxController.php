<?php

namespace BookingBundle\Controller;

use AppBundle\Controller\BaseEntityChildController;
use Sensio\Bundle\FrameworkExtraBundle\Configuration\Route;
use Symfony\Component\HttpFoundation\Request;

class TravelBookingPaxController extends BaseEntityChildController
{
    /**
     * Overrides parent method
     * @param Request $request
     * @param $parents
     * @param $label (set label when you don't have the route in modules/menus tree)
     * @return $this
     */
    protected function initChild(Request $request, $parents, $label = 'Paxs')
    {
        // Set configuration only once
        if($this->isInitialized) { return $this; }

        // Parent route
        $this->parentConf = array(
            'travelBooking' => array('route' => '_booking__travel_booking__index')
        );

        // Route
        $this->templateConf['route'] = array(
            'get' => array(
                'name' => '_booking__travel_booking_pax__get'
            ),
            'edit' => array(
                'name' => '_booking__travel_booking_pax__edit',
            ),
            'delete' => array(
                'name' => '_booking__travel_booking_pax__delete',
            )
        );

        parent::initChild($request, $parents, $label);

        // Search
        $this->templateConf['search']['fields'] = $this->templateConf['fields']['view'];
        // Empty criteria to be able to see all registers because "search" action is disabled.
        $this->templateConf['search']['criteria'] = array();

        // Extra data
        $this->templateConf['extraData']['template'] = array(
            'class' => '-merge-view'
        );

        return $this;
    }

    /**
     * @Route("/booking/travel-booking-pax/get/{travelBooking}/{id}",
     *     name="_booking__travel_booking_pax__get",
     *     defaults={"id" = null}
     * )
     *
     * Overrides parent method
     * @param Request $request
     * @param $travelBooking
     * @param $id
     * @return mixed
     */
    public function getLocalChildAction(Request $request, $travelBooking, $id)
    {
        return parent::getChildAction($request, array($travelBooking), $id);
    }

    /**
     * @Route("/booking/travel-booking-pax/edit/{travelBooking}/{id}",
     *     name="_booking__travel_booking_pax__edit",
     *     defaults={"id" = null}
     * )
     *
     * Overrides parent method
     * @param Request $request
     * @param $travelBooking
     * @param $id
     * @return mixed
     */
    public function editLocalChildAction(Request $request, $travelBooking, $id)
    {
        return parent::editChildAction($request, array($travelBooking), $id);
    }

    /**
     * @Route("/booking/travel-booking-pax/delete/{travelBooking}/{id}",
     *     name="_booking__travel_booking_pax__delete",
     *     defaults={"id" = null}
     * )
     *
     * Overrides parent method
     * @param Request $request
     * @param $travelBooking
     * @param $id
     * @return mixed
     */
    public function deleteLocalChildAction(Request $request, $travelBooking, $id)
    {
        return parent::deleteChildAction($request, array($travelBooking), $id);
    }

    /**
     * @Route("/booking/travel-booking-pax/data/{travelBooking}",
     *     name="_booking__travel_booking_pax__data"
     * )
     *
     * Overrides parent method
     * @param Request $request
     * @param $travelBooking
     * @return mixed
     */
    public function dataLocalChildAction(Request $request, $travelBooking)
    {
        return parent::dataChildAction($request, array($travelBooking));
    }

    /**
     * @Route("/booking/travel-booking-pax/conf/{travelBooking}",
     *     name="_booking__travel_booking_pax__conf"
     * )
     *
     * Overrides parent method
     * @param Request $request
     * @param $travelBooking
     * @return mixed
     */
    public function confLocalChildAction(Request $request, $travelBooking)
    {
        return parent::confChildAction($request, array($travelBooking));
    }
}