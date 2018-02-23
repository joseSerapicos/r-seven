<?php

namespace BookingBundle\Controller;

use Sensio\Bundle\FrameworkExtraBundle\Configuration\Route;
use Symfony\Component\HttpFoundation\Request;

class TravelBookingServiceController extends BaseBookingServiceController
{
    /**
     * Get Local Booking Context.
     * @return mixed (lowerCamelCase)
     */
    protected function getLocalBookingContext()
    {
        return 'travel';
    }

    /**
     * Overrides parent method
     * @param Request $request
     * @param $parents
     * @param $label (set label when you don't have the route in modules/menus tree)
     * @return $this
     */
    protected function initChild(Request $request, $parents, $label = 'Services')
    {
        // Set configuration only once
        if($this->isInitialized) { return $this; }

        // Menu
        $this->templateConf['selectedMenu']['route'] = '_booking__travel_booking__index';

        // Parent route
        $this->parentConf = array(
            'booking' => array('route' => '_booking__booking__index')
        );

        // Route
        $this->templateConf['route'] = array(
            'get' => array(
                'name' => '_booking__travel_booking_service__get'
            ),
            'addStep1' => array(
                'name' => '_booking__travel_booking_service__add_step1',
            ),
            'addStep2' => array(
                'name' => '_booking__travel_booking_service__add_step2',
            ),
            'addStep3' => array(
                'name' => '_booking__travel_booking_service__add_step3',
            ),
            'addStep4' => array(
                'name' => '_booking__travel_booking_service__add_step4',
            ),
            'edit' => array(
                'name' => '_booking__travel_booking_service__edit',
            ),
            'cancel' => array(
                'name' => '_booking__travel_booking_service__cancel',
            ),
            'delete' => array(
                'name' => '_booking__travel_booking_service__delete',
            ),
            'order' => array(
                'name' => '_booking__travel_booking_service__order',
            )
        );

        parent::initChild($request, $parents, $label);

        // Templates
        $this->localConf['templates']['addStep1'] = 'BookingBundle:BaseBookingService:add-step1.html.twig';
        $this->localConf['templates']['addStep2'] = 'BookingBundle:BaseBookingService:add-step2.html.twig';
        $this->localConf['templates']['addStep3'] = 'BookingBundle:BaseBookingService:add-step3.html.twig';
        $this->localConf['templates']['edit'] = 'BookingBundle:BaseBookingService:edit.html.twig';

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

        // Extra data
        $this->templateConf['extraData']['template'] = array(
            'class' => '-merge-view'
        );

        return $this;
    }

    /**
     * @Route("/booking/travel-booking-service/get/{booking}/{id}",
     *     name="_booking__travel_booking_service__get",
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
     * @Route("/booking/travel-booking-service/add-step1/{booking}/{id}",
     *     name="_booking__travel_booking_service__add_step1",
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
     * @Route("/booking/travel-booking-service/add-step2/{booking}/{id}",
     *     name="_booking__travel_booking_service__add_step2",
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
     * @Route("/booking/travel-booking-service/add-step3/{booking}/{id}",
     *     name="_booking__travel_booking_service__add_step3",
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
        $this->initChild($request, array($booking));
        $this->templateConf['fields']['form'] = array(
            'icon', 'name', 'description', 'supplierObj', 'reference', 'placeObj', 'placeToObj'
        );

        return parent::addStep3Action($request, $booking, $id);
    }

    /**
     * @Route("/booking/travel-booking-service/add-step4/{booking}/{id}",
     *     name="_booking__travel_booking_service__add_step4",
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
     * @Route("/booking/travel-booking-service/edit/{booking}/{id}",
     *     name="_booking__travel_booking_service__edit",
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
        $this->templateConf['fields']['form'] = array(
            'icon', 'name', 'description', 'supplierObj', 'reference', 'placeObj', 'placeToObj',
            'startDate', 'endDate',
            'quantity', 'confirmationStatus'
        );

        return parent::editLocalChildAction($request, $booking, $id);
    }

    /**
     * @Route("/booking/travel-booking-service/cancel/{booking}/{id}",
     *     name="_booking__travel_booking_service__cancel",
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
     * @Route("/booking/travel-booking-service/delete/{booking}/{id}",
     *     name="_booking__travel_booking_service__delete",
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
        $response = parent::deleteChildAction($request, $booking, $id);
        if ($this->responseConf['status'] == 1) {
            $this->setDependenciesPlaces();
        }
        return $response;
    }

    /**
     * @Route("/booking/travel-booking-service/order/{booking}/{id}/{type}",
     *     name="_booking__travel_booking_service__order",
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
     * @Route("/booking/travel-booking-service/data/{booking}",
     *     name="_booking__travel_booking_service__data"
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
     * @Route("/booking/travel-booking-service/conf/{booking}",
     *     name="_booking__travel_booking_service__conf"
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

    /**
     * Set places for dependencies
     * @return $this
     */
    protected function setDependenciesPlaces() {
        // Check if there are no errors in previous updates
        if ($this->responseConf['status'] == 1) {
            // Update travel booking places
            $bookingObj = reset($this->parentConf)['obj']; // First parent
            $travelBookingObj = $this->getRepositoryService('TravelBooking', 'BookingBundle')
                ->execute('findOneByBookingObj', array($bookingObj));

            $this->getLocalRepositoryService()
                ->execute(
                    'setTravelBookingPlaces',
                    array($travelBookingObj)
                );
            parent::saveObject_static($this, $bookingObj);
        }

        return $this;
    }

    /**
     * Overrides parent method.
     * @param $object
     * @param $data (usually the form data)
     * @return $this
     */
    protected function postSaveObject($object, $data = null) {
        parent::postSaveObject($object, $data);

        // Check if there are no errors in previous updates
        if ($this->responseConf['status'] == 1) {
            $this->setDependenciesPlaces();
        }

        return $this;
    }
}