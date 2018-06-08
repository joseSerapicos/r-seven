<?php

namespace Bck\BookingBundle\Controller;

use AppBundle\Controller\BaseEntityChildController;
use Sensio\Bundle\FrameworkExtraBundle\Configuration\Route;
use Symfony\Component\HttpFoundation\Request;

class BookingObservationController extends BaseEntityChildController
{
    /**
     * Get label/title to display child in parent
     * @return mixed
     */
    static function getLabel() { return 'Observations'; }

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

        // Parent route
        $this->parentConf = array(
            'booking' => array('route' => '_bck__booking__booking__index')
        );

        // Route
        $this->templateConf['route'] = array(
            'get' => array(
                'name' => '_bck__booking__booking_observation__get'
            ),
            'edit' => array(
                'name' => '_bck__booking__booking_observation__edit',
            ),
            'delete' => array(
                'name' => '_bck__booking__booking_observation__delete',
            ),
            'order' => array(
                'name' => '_bck__booking__booking_observation__order',
            )
        );

        parent::init($request, $parents);

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

        // Legend (disable cancel legend)
        $this->templateConf['controls']['legend'] = array();

        // Extra data
        $this->templateConf['extraData']['template'] = array(
            'class' => '-merge-view'
        );

        return $this;
    }

    /**
     * @Route("/bck/booking/booking-observation/get/{booking}/{id}",
     *     name="_bck__booking__booking_observation__get",
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
     * @Route("/bck/booking/booking-observation/edit/{booking}/{id}",
     *     name="_bck__booking__booking_observation__edit",
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
     * @Route("/bck/booking/booking-observation/delete/{booking}/{id}",
     *     name="_bck__booking__booking_observation__delete",
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
     * @Route("/bck/booking/booking-observation/order/{booking}/{id}/{type}",
     *     name="_bck__booking__booking_observation__order",
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
     * @Route("/bck/booking/booking-observation/data/{booking}",
     *     name="_bck__booking__booking_observation__data"
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
     * @Route("/bck/booking/booking-observation/conf/{booking}/{id}",
     *     name="_bck__booking__booking_observation__conf",
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