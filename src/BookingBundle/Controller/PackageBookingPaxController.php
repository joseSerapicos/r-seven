<?php

namespace BookingBundle\Controller;

use AppBundle\Controller\BaseEntityChildController;
use Sensio\Bundle\FrameworkExtraBundle\Configuration\Route;
use Symfony\Component\HttpFoundation\Request;

class PackageBookingPaxController extends BaseEntityChildController
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

        // Menu
        $this->templateConf['selectedMenu']['route'] = '_booking__package_booking__index';

        // Parent route
        $this->parentConf = array(
            'booking' => array('route' => '_booking__booking__index')
        );

        // Route
        $this->templateConf['route'] = array(
            'get' => array(
                'name' => '_booking__package_booking_pax__get'
            ),
            'edit' => array(
                'name' => '_booking__package_booking_pax__edit',
            ),
            'delete' => array(
                'name' => '_booking__package_booking_pax__delete',
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
     * @Route("/booking/package-booking-pax/get/{booking}/{id}",
     *     name="_booking__package_booking_pax__get",
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
     * @Route("/booking/package-booking-pax/edit/{booking}/{id}",
     *     name="_booking__package_booking_pax__edit",
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
        return parent::editChildAction($request, array($booking), $id);
    }

    /**
     * @Route("/booking/package-booking-pax/delete/{booking}/{id}",
     *     name="_booking__package_booking_pax__delete",
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
     * @Route("/booking/package-booking-pax/data/{booking}",
     *     name="_booking__package_booking_pax__data"
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
     * @Route("/booking/package-booking-pax/conf/{booking}",
     *     name="_booking__package_booking_pax__conf"
     * )
     *
     * Overrides parent method
     * @param Request $request
     * @param $booking
     * @return mixed
     */
    public function confLocalChildAction(Request $request, $booking)
    {
        return parent::confChildAction($request, array($booking));
    }
}