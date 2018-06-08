<?php

namespace Bck\BookingBundle\Controller;

use Sensio\Bundle\FrameworkExtraBundle\Configuration\Route;
use Symfony\Component\HttpFoundation\Request;

class RegularBookingServiceController extends BaseBookingServiceController
{
    /**
     * Get label/title to display child in parent
     * @return mixed
     */
    static function getLabel() { return 'Services'; }

    /**
     * Get Local Booking Context.
     * @return mixed (lowerCamelCase)
     */
    protected function getLocalBookingContext()
    {
        return 'regular';
    }

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
                'name' => '_bck__booking__regular_booking_service__get'
            ),
            'addStep1' => array(
                'name' => '_bck__booking__regular_booking_service__add_step1',
            ),
            'addStep2' => array(
                'name' => '_bck__booking__regular_booking_service__add_step2',
            ),
            'addStep3' => array(
                'name' => '_bck__booking__regular_booking_service__add_step3',
            ),
            'addStep4' => array(
                'name' => '_bck__booking__regular_booking_service__add_step4',
            ),
            'edit' => array(
                'name' => '_bck__booking__regular_booking_service__edit',
            ),
            'cancel' => array(
                'name' => '_bck__booking__regular_booking_service__cancel',
            ),
            'delete' => array(
                'name' => '_bck__booking__regular_booking_service__delete',
            ),
            'order' => array(
                'name' => '_bck__booking__regular_booking_service__order',
            )
        );

        parent::init($request, $parents);

        // Templates
        $this->localConf['templates']['addStep1'] = 'BckBookingBundle:BaseBookingService:add-step1.html.twig';
        $this->localConf['templates']['addStep2'] = 'BckBookingBundle:BaseBookingService:add-step2.html.twig';
        $this->localConf['templates']['addStep3'] = 'BckBookingBundle:BaseBookingService:add-step3.html.twig';
        $this->localConf['templates']['edit'] = 'BckBookingBundle:BaseBookingService:edit.html.twig';

        // Search
        $this->templateConf['search']['fields'] = array(
            'icon', 'name', 'reference', 'place_iata', 'placeTo_iata', 'startDate', 'endDate', 'durationDays',
            'quantity', 'totalCost', 'totalSell', 'totalMarkup',
            'confirmationStatus', 'isAutoAllot'
        );
        $this->templateConf['search']['orderBy'] = array(
            array('field' => 'startDate', 'value' => 'ASC'),
            array('field' => 'priority', 'value' => 'ASC')
        );

        // Actions for template/view
        $this->templateConf['actions'] = array_merge(
            $this->templateConf['actions'],
            array(
                'search' => true,
                'cancel' => true,
                'order' => true
            )
        );

        /* Legend for template/view */
        $this->templateConf['controls']['legend'][] = array(
            'label' => 'Grouped Service', 'class' => 'legend-grouped', 'field' => 'grouperBookingServiceObj'
        );
        $this->templateConf['controls']['legend'][] = array(
            'label' => 'Grouper Service', 'class' => 'legend-grouper', 'field' => 'grouperBookingServicePriceObj'
        );
        /* /Legend for template/view */

        // Extra data
        $this->templateConf['extraData']['template'] = array(
            'class' => '-merge-view'
        );

        return $this;
    }

    /**
     * @Route("/bck/booking/regular-booking-service/get/{booking}/{id}",
     *     name="_bck__booking__regular_booking_service__get",
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
     * @Route("/bck/booking/regular-booking-service/add-step1/{booking}/{id}",
     *     name="_bck__booking__regular_booking_service__add_step1",
     *     defaults={"id" = null}
     * )
     *
     * Action to add objects using the form
     * @param Request $request
     * @param $booking
     * @param $id
     * @return mixed
     */
    public function addStep1Action(Request $request, $booking, $id)
    {
        return parent::addStep1Action($request, $booking, $id);
    }

    /**
     * @Route("/bck/booking/regular-booking-service/add-step2/{booking}/{id}",
     *     name="_bck__booking__regular_booking_service__add_step2",
     *     defaults={"id" = null}
     * )
     *
     * Action to add dates, allot and price of object
     * @param Request $request
     * @param $booking
     * @param $id
     * @return mixed
     */
    public function addStep2Action(Request $request, $booking, $id)
    {
        return parent::addStep2Action($request, $booking, $id);
    }

    /**
     * @Route("/bck/booking/regular-booking-service/add-step3/{booking}/{id}",
     *     name="_bck__booking__regular_booking_service__add_step3",
     *     defaults={"id" = null}
     * )
     *
     * Action to add detail info of object
     * @param Request $request
     * @param $booking
     * @param $id
     * @return mixed
     */
    public function addStep3Action(Request $request, $booking, $id)
    {
        $this->flags['storage'] = 'session'; // Session storage is used
        $this->flags['hasForm'] = true;
        $this->init($request, array($booking));
        $this->templateConf['fields']['form'] = array(
            'name', 'description', 'supplierObj', 'reference', 'placeObj', 'placeToObj'
        );

        return parent::addStep3Action($request, $booking, $id);
    }

    /**
     * @Route("/bck/booking/regular-booking-service/add-step4/{booking}/{id}",
     *     name="_bck__booking__regular_booking_service__add_step4",
     *     defaults={"id" = null}
     * )
     *
     * Action to save object to database from session storage
     * @param Request $request
     * @param $booking
     * @param $id
     * @return mixed
     */
    public function addStep4Action(Request $request, $booking, $id)
    {
        return parent::addStep4Action($request, $booking, $id);
    }

    /**
     * @Route("/bck/booking/regular-booking-service/edit/{booking}/{id}",
     *     name="_bck__booking__regular_booking_service__edit",
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
        $this->init($request, array($booking));
        $this->templateConf['fields']['form'] = array(
            'name', 'description', 'supplierObj', 'reference', 'placeObj', 'placeToObj',
            'startDate', 'endDate',
            'quantity', 'confirmationStatus'
        );

        return parent::editLocalChildAction($request, $booking, $id);
    }

    /**
     * @Route("/bck/booking/regular-booking-service/cancel/{booking}/{id}",
     *     name="_bck__booking__regular_booking_service__cancel",
     *     defaults={"id" = null}
     * )
     *
     * Overrides parent method
     * @param Request $request
     * @param $booking
     * @param $id
     * @return mixed
     */
    public function cancelLocalChildAction(Request $request, $booking, $id)
    {
        return parent::cancelLocalChildAction($request, $booking, $id);
    }

    /**
     * @Route("/bck/booking/regular-booking-service/delete/{booking}/{id}",
     *     name="_bck__booking__regular_booking_service__delete",
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
     * @Route("/bck/booking/regular-booking-service/order/{booking}/{id}/{type}",
     *     name="_bck__booking__regular_booking_service__order",
     *     defaults={"id" = null, "type" = null}
     * )
     *
     * Overrides parent method
     * @param Request $request
     * @param $booking
     * @param $id
     * @param $type
     * @return mixed
     */
    public function orderLocalChildAction(Request $request, $booking, $id, $type)
    {
        return parent::orderChildAction($request, array($booking), $id, $type);
    }

    /**
     * @Route("/bck/booking/regular-booking-service/data/{booking}",
     *     name="_bck__booking__regular_booking_service__data"
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
     * @Route("/bck/booking/regular-booking-service/conf/{booking}/{id}",
     *     name="_bck__booking__regular_booking_service__conf",
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
}