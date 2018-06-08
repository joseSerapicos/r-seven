<?php

namespace Bck\BookingBundle\Controller;

use AppBundle\Controller\BaseEntityChildController;
use Sensio\Bundle\FrameworkExtraBundle\Configuration\Route;
use Symfony\Component\HttpFoundation\Request;

class RegularBookingPaxController extends BaseEntityChildController
{
    /**
     * Get label/title to display child in parent
     * @return mixed
     */
    static function getLabel() { return 'Paxs'; }

    /**
     * Overrides parent method
     * @param Request $request
     * @param $parents
     * @return $this
     */
    public function init(Request $request, $parents = null)
    {
        // Set configuration only once
        if($this->isInitialized) { return $this; }

        // Menu
        $this->templateConf['selectedMenu']['route'] = '_bck__booking__regular_booking__index';

        // Parent route
        $this->parentConf = array(
            'booking' => array('route' => '_bck__booking__booking__index')
        );

        // Route
        $this->templateConf['route'] = array(
            'get' => array(
                'name' => '_bck__booking__regular_booking_pax__get'
            ),
            'edit' => array(
                'name' => '_bck__booking__regular_booking_pax__edit',
            ),
            'delete' => array(
                'name' => '_bck__booking__regular_booking_pax__delete',
            )
        );

        parent::init($request, $parents);

        // Empty criteria to be able to see all registers because "search" action is disabled.
        $this->templateConf['search']['criteria'] = array();

        // Extra data
        $this->templateConf['extraData']['template'] = array(
            'class' => '-merge-view'
        );

        return $this;
    }

    /**
     * @Route("/bck/booking/regular-booking-pax/get/{booking}/{id}",
     *     name="_bck__booking__regular_booking_pax__get",
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
     * @Route("/bck/booking/regular-booking-pax/edit/{booking}/{id}",
     *     name="_bck__booking__regular_booking_pax__edit",
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
     * @Route("/bck/booking/regular-booking-pax/delete/{booking}/{id}",
     *     name="_bck__booking__regular_booking_pax__delete",
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
     * @Route("/bck/booking/regular-booking-pax/data/{booking}",
     *     name="_bck__booking__regular_booking_pax__data"
     * )
     *
     * Overrides parent method
     * @param Request $request
     * @param $booking
     * @param $responseType (not used in route, only for direct symfony calls,
     *     determines the type of response [http, json, array])
     * @return mixed
     */
    public function dataLocalChildAction(Request $request, $booking, $responseType = 'http')
    {
        return parent::dataChildAction($request, array($booking), $responseType);
    }

    /**
     * @Route("/bck/booking/regular-booking-pax/conf/{booking}/{id}",
     *     name="_bck__booking__regular_booking_pax__conf",
     *     defaults={"id" = null}
     * )
     *
     * Overrides parent method
     * @param Request $request
     * @param $booking
     * @param $id (return the target id object with the conf, it's used to avoid to make another server request
     *     to get the object when we need the object with the conf, like in flat forms, entity detail, etc.)
     * @return mixed
     */
    public function confLocalChildAction(Request $request, $booking, $id = null)
    {
        return parent::confChildAction($request, array($booking), $id);
    }


    ////////////////////////////////////////////////////////
    // METHODS FOR ADD SERVICE
    /////////////////////////////////////////////////////////////


    /**
     * Overrides parent method
     * @param Request $request
     * @param $parents
     * @return $this
     */
    public function initForAddService(Request $request, $parents = null)
    {
        // Set configuration only once
        if($this->isInitialized) { return $this; }

        // Label
        $this->templateConf['label'] = 'Pax';

        // Menu
        $this->templateConf['selectedMenu']['route'] = '_bck__booking__regular_booking__index';

        // Parent route
        $this->parentConf = array(
            'booking' => array('route' => '_bck__booking__booking__index')
        );

        // Route
        $this->templateConf['route'] = array(
            'get' => array(
                'name' => '_bck__booking__regular_booking_pax__get'
            ),
            'edit' => array(
                'name' => '_bck__booking__regular_booking_pax__edit_for_add_service',
            ),
            'delete' => array(
                'name' => '_bck__booking__regular_booking_pax__delete',
            )
        );

        parent::init($request, $parents);

        // Empty criteria to be able to see all registers because "search" action is disabled.
        $this->templateConf['search']['criteria'] = array();

        // Extra data
        $this->templateConf['extraData']['template'] = array(
            'class' => '-merge-view-label'
        );

        // Legend (disable cancel legend)
        $this->templateConf['controls']['legend'] = array();

        return $this;
    }

    /**
     * @Route("/bck/booking/regular-booking-pax/edit-for-add-service/{booking}/{id}",
     *     name="_bck__booking__regular_booking_pax__edit_for_add_service",
     *     defaults={"id" = null}
     * )
     *
     * Overrides parent method
     * @param Request $request
     * @param $booking
     * @param $id
     * @return mixed
     */
    public function editForAddServiceAction(Request $request, $booking, $id)
    {
        // Set configuration
        $this->flags['hasForm'] = true;
        $this->initForAddService($request, array($booking));
        $this->localConf['templates']['edit'] = 'AppBundle:form-data-box:default.html.twig';
        $this->localConf['formTypeClass'] = 'Bck\BookingBundle\Form\RegularBookingPaxForAddServiceType';
        return $this->editLocalChildAction($request, $booking, $id);
    }

    /**
     * @Route("/bck/booking/regular-booking-pax/data-for-add-service/{booking}",
     *     name="_bck__booking__regular_booking_pax__data_for_add_service"
     * )
     *
     * Overrides parent method
     * @param Request $request
     * @param $booking
     * @param $responseType (not used in route, only for direct symfony calls,
     *     determines the type of response [http, json, array])
     * @return mixed
     */
    public function dataForAddServiceAction(Request $request, $booking, $responseType = 'http')
    {
        $this->initForAddService($request, array($booking));
        return $this->dataLocalChildAction($request, $booking, $responseType);
    }
}