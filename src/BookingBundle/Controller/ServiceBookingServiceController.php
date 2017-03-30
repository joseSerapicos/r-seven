<?php

namespace BookingBundle\Controller;

use Sensio\Bundle\FrameworkExtraBundle\Configuration\Route;
use Symfony\Component\HttpFoundation\Request;


/**
 * This class is the base for all booking service, however also can be used directly.
 * Class BookingServiceController
 * @package BookingBundle\Controller
 */
class ServiceBookingServiceController extends BaseBookingServiceController
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
            'serviceBooking' => array('route' => '_booking__service_booking__index')
        );

        // Route
        $this->templateConf['route'] = array(
            'get' => array(
                'name' => '_booking__service_booking_service__get'
            ),
            'add' => array(
                'name' => '_booking__service_booking_service__add',
            ),
            'addDetail' => array(
                'name' => '_booking__service_booking_service__add_detail',
            ),
            'addDates' => array(
                'name' => '_booking__service_booking_service__add_dates',
            ),
            'addAllot' => array(
                'name' => '_booking__service_booking_service__add_allot',
            ),
            'edit' => array(
                'name' => '_booking__service_booking_service__edit',
            ),
            'delete' => array(
                'name' => '_booking__service_booking_service__delete',
            ),
            'order' => array(
                'name' => '_booking__service_booking_service__order',
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
            'icon', 'name', 'reference', 'startDate', 'endDate',
            'quantity', 'totalCost', 'totalSell', 'totalMarkup',
            'invoiceStatus', 'confirmationStatus', 'isAutoAllot'
        );
        $this->templateConf['search']['orderBy'] = array(
            array('field' => 'startDate', 'value' => 'ASC'),
            array('field' => 'priority', 'value' => 'ASC')
        );
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
     * @Route("/booking/service-booking-service/get/{serviceBooking}/{id}",
     *     name="_booking__service_booking_service__get",
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
     * @Route("/booking/service-booking-service/add/{serviceBooking}/{id}",
     *     name="_booking__service_booking_service__add",
     *     defaults={"id" = null}
     * )
     *
     * Action to add objects using the form
     * @param Request $request
     * @param $serviceBooking
     * @param $id
     * @return mixed
     */
    public function addAction(Request $request, $serviceBooking, $id)
    {
        return parent::addAction($request, $serviceBooking, $id);
    }

    /**
     * @Route("/booking/service-booking-service/add-detail/{serviceBooking}/{id}",
     *     name="_booking__service_booking_service__add_detail",
     *     defaults={"id" = null}
     * )
     *
     * Action to add detail info of object
     * @param Request $request
     * @param $serviceBooking
     * @param $id
     * @return mixed
     */
    public function addDetailAction(Request $request, $serviceBooking, $id)
    {
        return parent::addDetailAction($request, $serviceBooking, $id);
    }

    /**
     * @Route("/booking/service-booking-service/add-dates/{serviceBooking}/{id}",
     *     name="_booking__service_booking_service__add_dates",
     *     defaults={"id" = null}
     * )
     *
     * Action to add dates of object
     * @param Request $request
     * @param $serviceBooking
     * @param $id
     * @return mixed
     */
    public function addDatesAction(Request $request, $serviceBooking, $id)
    {
        return parent::addDatesAction($request, $serviceBooking, $id);
    }

    /**
     * @Route("/booking/service-booking-service/add-allot/{serviceBooking}/{id}",
     *     name="_booking__service_booking_service__add_allot",
     *     defaults={"id" = null}
     * )
     *
     * Action to add allot of object
     * @param Request $request
     * @param $serviceBooking
     * @param $id
     * @return mixed
     */
    public function addAllotAction(Request $request, $serviceBooking, $id)
    {
        return parent::addAllotAction($request, $serviceBooking, $id);
    }

    /**
     * @Route("/booking/service-booking-service/edit/{serviceBooking}/{id}",
     *     name="_booking__service_booking_service__edit",
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
     * @Route("/booking/service-booking-service/delete/{serviceBooking}/{id}",
     *     name="_booking__service_booking_service__delete",
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
        return parent::deleteLocalChildAction($request, $serviceBooking, $id);
    }

    /**
     * @Route("/booking/service-booking-service/order/{serviceBooking}/{id}/{type}",
     *     name="_booking__service_booking_service__order",
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
     * @Route("/booking/service-booking-service/data/{serviceBooking}",
     *     name="_booking__service_booking_service__data"
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
     * @Route("/booking/service-booking-service/conf/{serviceBooking}",
     *     name="_booking__service_booking_service__conf"
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