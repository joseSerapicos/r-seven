<?php

namespace BookingBundle\Controller;

use Sensio\Bundle\FrameworkExtraBundle\Configuration\Route;
use Symfony\Component\HttpFoundation\Request;

class TravelBookingServicePriceController extends BaseBookingServicePriceController
{
    /**
     * Overrides parent method
     * @param Request $request
     * @param $parents
     * @param $label (set label when you don't have the route in modules/menus tree)
     * @return $this
     */
    protected function initChild(Request $request, $parents, $label = 'Price')
    {
        // Set configuration only once
        if($this->isInitialized) { return $this; }

        // Parent route
        $this->parentConf = array(
            'travelBookingService' => array('route' => '_booking__travel_booking_service__index')
        );

        // Route
        $this->templateConf['route'] = array(
            'get' => array(
                'name' => '_booking__travel_booking_service_price__get'
            ),
            'edit' => array(
                'name' => '_booking__travel_booking_service_price__edit',
            ),
            'delete' => array(
                'name' => '_booking__travel_booking_service_price__delete',
            )
        );

        parent::initChild($request, $parents, $label);

        // Search
        $this->templateConf['search']['fields'] = array('postingType', 'description',
            'quantity', 'costValue', 'sellValue', 'totalMarkup'
        );
        // Empty criteria to be able to see all registers because "search" action is disabled.
        $this->templateConf['search']['criteria'] = array();

        // Extra data
        $this->templateConf['extraData']['template'] = array(
            'class' => '-merge-view'
        );

        return $this;
    }

    /**
     * @Route("/booking/travel-booking-service-price/get/{travelBookingService}/{id}",
     *     name="_booking__travel_booking_service_price__get",
     *     defaults={"id" = null}
     * )
     *
     * Overrides parent method
     * @param Request $request
     * @param $travelBookingService
     * @param $id
     * @return mixed
     */
    public function getLocalChildAction(Request $request, $travelBookingService, $id)
    {
        return parent::getChildAction($request, array($travelBookingService), $id);
    }

    /**
     * @Route("/booking/travel-booking-service-price/edit/{travelBookingService}/{id}",
     *     name="_booking__travel_booking_service_price__edit",
     *     defaults={"id" = null}
     * )
     *
     * Overrides parent method
     * @param Request $request
     * @param $travelBookingService
     * @param $id
     * @return mixed
     */
    public function editLocalChildAction(Request $request, $travelBookingService, $id)
    {
        return parent::editLocalChildAction($request, $travelBookingService, $id);
    }

    /**
     * @Route("/booking/travel-booking-service-price/delete/{travelBookingService}/{id}",
     *     name="_booking__travel_booking_service_price__delete",
     *     defaults={"id" = null}
     * )
     *
     * Overrides parent method
     * @param Request $request
     * @param $travelBookingService
     * @param $id
     * @return mixed
     */
    public function deleteLocalChildAction(Request $request, $travelBookingService, $id)
    {
        return parent::deleteLocalChildAction($request, $travelBookingService, $id);
    }

    /**
     * @Route("/booking/travel-booking-service-price/data/{travelBookingService}",
     *     name="_booking__travel_booking_service_price__data"
     * )
     *
     * Overrides parent method
     * @param Request $request
     * @param $travelBookingService
     * @return mixed
     */
    public function dataLocalChildAction(Request $request, $travelBookingService)
    {
        return parent::dataChildAction($request, array($travelBookingService));
    }

    /**
     * @Route("/booking/travel-booking-service-price/conf/{travelBookingService}",
     *     name="_booking__travel_booking_service_price__conf"
     * )
     *
     * Overrides parent method
     * @param Request $request
     * @param $travelBookingService
     * @return mixed
     */
    public function confLocalChildAction(Request $request, $travelBookingService)
    {
        return parent::confChildAction($request, array($travelBookingService));
    }
}