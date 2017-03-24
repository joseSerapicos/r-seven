<?php

namespace BookingBundle\Controller;

use Sensio\Bundle\FrameworkExtraBundle\Configuration\Route;
use Symfony\Component\HttpFoundation\Request;

class TravelBookingServiceController extends BaseBookingServiceController
{
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

        // Parent route
        $this->parentConf = array(
            'travelBooking' => array('route' => '_booking__travel_booking__index')
        );

        // Route
        $this->templateConf['route'] = array(
            'get' => array(
                'name' => '_booking__travel_booking_service__get'
            ),
            'add' => array(
                'name' => '_booking__travel_booking_service__add',
            ),
            'addDetail' => array(
                'name' => '_booking__travel_booking_service__add_detail',
            ),
            'addDates' => array(
                'name' => '_booking__travel_booking_service__add_dates',
            ),
            'addAllot' => array(
                'name' => '_booking__travel_booking_service__add_allot',
            ),
            'edit' => array(
                'name' => '_booking__travel_booking_service__edit',
            ),
            'delete' => array(
                'name' => '_booking__travel_booking_service__delete',
            )
        );

        parent::initChild($request, $parents, $label);

        // Templates
        $this->localConf['templates']['add'] = 'AppBundle:wizard:popup.html.twig';
        $this->localConf['templates']['addDetail'] = 'BookingBundle:BaseBookingService:add-detail.html.twig';
        $this->localConf['templates']['addDates'] = 'BookingBundle:BaseBookingService:add-dates.html.twig';
        $this->localConf['templates']['addAllot'] = 'BookingBundle:BaseBookingService:add-allot.html.twig';
        $this->localConf['templates']['edit'] = 'BookingBundle:BaseBookingService:edit.html.twig';

        // Search
        $this->templateConf['search']['fields'] = array(
            'icon', 'name', 'reference', 'place_iata', 'placeTo_iata', 'startDate', 'endDate',
            'quantity', 'totalCost', 'totalSell', 'totalMarkup',
            'invoiceStatus', 'confirmationStatus', 'isAutoAllot'
        );
        $this->templateConf['search']['orderBy'] = array(array('field' => 'startDate', 'value' => 'ASC'));
        // Empty criteria to be able to see all registers because "search" action is disabled.
        $this->templateConf['search']['criteria'] = array();

        // Extra data
        $this->templateConf['extraData']['template'] = array(
            'class' => '-merge-view'
        );

        return $this;
    }

    /**
     * @Route("/booking/travel-booking-service/get/{travelBooking}/{id}",
     *     name="_booking__travel_booking_service__get",
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
     * @Route("/booking/travel-booking-service/add/{travelBooking}/{id}",
     *     name="_booking__travel_booking_service__add",
     *     defaults={"id" = null}
     * )
     *
     * Action to add objects using the form
     * @param Request $request
     * @param $travelBooking
     * @param $id
     * @return mixed
     */
    public function addAction(Request $request, $travelBooking, $id)
    {
        return parent::addAction($request, $travelBooking, $id);
    }

    /**
     * @Route("/booking/travel-booking-service/add-detail/{travelBooking}/{id}",
     *     name="_booking__travel_booking_service__add_detail",
     *     defaults={"id" = null}
     * )
     *
     * Action to add detail info of object
     * @param Request $request
     * @param $travelBooking
     * @param $id
     * @return mixed
     */
    public function addDetailAction(Request $request, $travelBooking, $id)
    {
        $this->flags['hasForm'] = true;
        $this->initChild($request, array($travelBooking));
        $this->templateConf['fields']['form'] = array(
            'id', 'icon', 'name', 'description', 'supplierObj', 'reference', 'placeObj', 'placeToObj',
            'insertTime', 'insertUser', 'isEnabled'
        );

        return parent::addDetailAction($request, $travelBooking, $id);
    }

    /**
     * @Route("/booking/travel-booking-service/add-dates/{travelBooking}/{id}",
     *     name="_booking__travel_booking_service__add_dates",
     *     defaults={"id" = null}
     * )
     *
     * Action to add dates of object
     * @param Request $request
     * @param $travelBooking
     * @param $id
     * @return mixed
     */
    public function addDatesAction(Request $request, $travelBooking, $id)
    {
        return parent::addDatesAction($request, $travelBooking, $id);
    }

    /**
     * @Route("/booking/travel-booking-service/add-allot/{travelBooking}/{id}",
     *     name="_booking__travel_booking_service__add_allot",
     *     defaults={"id" = null}
     * )
     *
     * Action to add allot of object
     * @param Request $request
     * @param $travelBooking
     * @param $id
     * @return mixed
     */
    public function addAllotAction(Request $request, $travelBooking, $id)
    {
        return parent::addAllotAction($request, $travelBooking, $id);
    }

    /**
     * @Route("/booking/travel-booking-service/edit/{travelBooking}/{id}",
     *     name="_booking__travel_booking_service__edit",
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
        // Set configuration
        $this->flags['hasForm'] = true;
        $this->initChild($request, array($travelBooking));
        $this->templateConf['fields']['form'] = array(
            'id', 'icon', 'name', 'description', 'supplierObj', 'reference', 'placeObj', 'placeToObj',
            'startDate', 'endDate',
            'quantity', 'confirmationStatus',
            'insertTime', 'insertUser', 'isEnabled');

        return parent::editLocalChildAction($request, $travelBooking, $id);
    }

    /**
     * @Route("/booking/travel-booking-service/delete/{travelBooking}/{id}",
     *     name="_booking__travel_booking_service__delete",
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
        $response = parent::deleteLocalChildAction($request, $travelBooking, $id);
        if ($this->responseConf['status'] == 1) {
            $this->setDependenciesPlaces();
        }
        return $response;
    }

    /**
     * @Route("/booking/travel-booking-service/data/{travelBooking}",
     *     name="_booking__travel_booking_service__data"
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
     * @Route("/booking/travel-booking-service/conf/{travelBooking}",
     *     name="_booking__travel_booking_service__conf"
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

    /**
     * Set places for dependencies
     * @return $this
     */
    protected function setDependenciesPlaces() {
        // Check if there are no errors in previous updates
        if ($this->responseConf['status'] == 1) {
            // Update booking places
            $bookingObj = reset($this->parentConf)['obj']; // First parent
            $this->getLocalRepositoryService()
                ->execute(
                    'setBookingPlaces',
                    array($bookingObj)
                );
            parent::saveObject($bookingObj);
        }

        return $this;
    }

    /**
     * Overrides parent method.
     * @param $object
     * @param $context (context to determine actions)
     * @return $this
     */
    protected function onSaveObject($object, $context = null) {
        switch ($context) {
            case 'addDetail':
            case 'edit':
                $this->setDependenciesPlaces();
                break;
        }

        return $this;
    }
}