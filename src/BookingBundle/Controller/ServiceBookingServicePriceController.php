<?php

namespace BookingBundle\Controller;

use Sensio\Bundle\FrameworkExtraBundle\Configuration\Route;
use Symfony\Component\HttpFoundation\Request;

class ServiceBookingServicePriceController extends BaseBookingServicePriceController
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
            'serviceBookingService' => array('route' => '_booking__service_booking_service__index')
        );

        // Route
        $this->templateConf['route'] = array(
            'get' => array(
                'name' => '_booking__service_booking_service_price__get'
            ),
            'edit' => array(
                'name' => '_booking__service_booking_service_price__edit',
            ),
            'delete' => array(
                'name' => '_booking__service_booking_service_price__delete',
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
     * @Route("/booking/service-booking-service-price/get/{serviceBookingService}/{id}",
     *     name="_booking__service_booking_service_price__get",
     *     defaults={"id" = null}
     * )
     *
     * Overrides parent method
     * @param Request $request
     * @param $serviceBookingService
     * @param $id
     * @return mixed
     */
    public function getLocalChildAction(Request $request, $serviceBookingService, $id)
    {
        return parent::getChildAction($request, array($serviceBookingService), $id);
    }

    /**
     * @Route("/booking/service-booking-service-price/edit/{serviceBookingService}/{id}",
     *     name="_booking__service_booking_service_price__edit",
     *     defaults={"id" = null}
     * )
     *
     * Overrides parent method
     * @param Request $request
     * @param $serviceBookingService
     * @param $id
     * @return mixed
     */
    public function editLocalChildAction(Request $request, $serviceBookingService, $id)
    {
        return parent::editLocalChildAction($request, $serviceBookingService, $id);
    }

    /**
     * @Route("/booking/service-booking-service-price/delete/{serviceBookingService}/{id}",
     *     name="_booking__service_booking_service_price__delete",
     *     defaults={"id" = null}
     * )
     *
     * Overrides parent method
     * @param Request $request
     * @param $serviceBookingService
     * @param $id
     * @return mixed
     */
    public function deleteLocalChildAction(Request $request, $serviceBookingService, $id)
    {
        return parent::deleteLocalChildAction($request, $serviceBookingService, $id);
    }

    /**
     * @Route("/booking/service-booking-service-price/data/{serviceBookingService}",
     *     name="_booking__service_booking_service_price__data"
     * )
     *
     * Overrides parent method
     * @param Request $request
     * @param $serviceBookingService
     * @return mixed
     */
    public function dataLocalChildAction(Request $request, $serviceBookingService)
    {
        return parent::dataChildAction($request, array($serviceBookingService));
    }

    /**
     * @Route("/booking/service-booking-service-price/conf/{serviceBookingService}",
     *     name="_booking__service_booking_service_price__conf"
     * )
     *
     * Overrides parent method
     * @param Request $request
     * @param $serviceBookingService
     * @return mixed
     */
    public function confLocalChildAction(Request $request, $serviceBookingService)
    {
        return parent::confChildAction($request, array($serviceBookingService));
    }
}