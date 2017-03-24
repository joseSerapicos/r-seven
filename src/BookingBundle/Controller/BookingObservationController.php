<?php

namespace BookingBundle\Controller;

use AppBundle\Controller\BaseEntityChildController;
use Sensio\Bundle\FrameworkExtraBundle\Configuration\Route;
use Symfony\Component\HttpFoundation\Request;

class BookingObservationController extends BaseEntityChildController
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
            'booking' => array('route' => '_booking__booking__index')
        );

        // Route
        $this->templateConf['route'] = array(
            'get' => array(
                'name' => '_booking__booking_observation__get'
            ),
            'edit' => array(
                'name' => '_booking__booking_observation__edit',
            ),
            'delete' => array(
                'name' => '_booking__booking_observation__delete',
            ),
            'order' => array(
                'name' => '_booking__booking_observation__order',
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
     * @Route("/booking/booking-observation/get/{booking}/{id}",
     *     name="_booking__booking_observation__get",
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
     * @Route("/booking/booking-observation/edit/{booking}/{id}",
     *     name="_booking__booking_observation__edit",
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
     * @Route("/booking/booking-observation/delete/{booking}/{id}",
     *     name="_booking__booking_observation__delete",
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
     * @Route("/booking/booking-observation/order/{booking}/{id}/{type}",
     *     name="_booking__booking_observation__order",
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
     * @Route("/booking/booking-observation/data/{booking}",
     *     name="_booking__booking_observation__data"
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
     * @Route("/booking/booking-observation/conf/{booking}",
     *     name="_booking__booking_observation__conf"
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