<?php

namespace Bck\BookingBundle\Controller;

use Sensio\Bundle\FrameworkExtraBundle\Configuration\Route;
use Symfony\Component\HttpFoundation\Request;

/**
 * Class BookingController
 *
 * This class is used to handle with all booking types in general, like in HomeController to get all pendent booking
 *
 * @package Bck\BookingBundle\Controller
 */
class BookingController extends BaseBookingController
{
    /**
     * Get Local Booking Context.
     * @return mixed (lowerCamelCase)
     */
    protected function getLocalBookingContext()
    {
        return '';
    }

    /**
     * Initialization. Set all basic configuration
     * @param Request $request
     * @return $this
     * @throws \Exception
     */
    public function init(Request $request)
    {
        // Set configuration only once
        if($this->isInitialized) { return $this; }

        // Label
        $this->templateConf['label'] = 'Booking';

        // Route
        $this->templateConf['route'] = array(
            'get' => array(
                'name' => '_bck__booking__booking__get'
            )
        );

        parent::init($request);

        // Search
        $this->templateConf['search']['fields'] = array(
            'code', 'operator_avatar', 'operator_name', 'client_avatar', 'client_name', 'startDate',
            'totalSell', 'invoiceStatus', 'confirmationStatus'
        );

        // Actions for template/view
        $this->templateConf['actions'] = array();

        return $this;
    }

    /**
     * @Route("/bck/booking/booking",
     *     name="_bck__booking__booking__index"
     * )
     *
     * Index action
     * @param Request $request
     * @return mixed
     */
    public function indexAction(Request $request)
    {
        return parent::indexAction($request);
    }

    /**
     * @Route("/bck/booking/booking/get/{id}",
     *     name="_bck__booking__booking__get",
     *     defaults={"id" = null},
     * )
     *
     * Action to get a list/array of compact objects from the search configuration
     * or a regular object if the "id" is provided
     * @param Request $request
     * @param $id
     * @return mixed
     */
    public function getAction(Request $request, $id)
    {
        return parent::getAction($request, $id);
    }


    //////////////////////////////////////////////////////////
    // METHODS FOR HOME
    ///////////////////////////////////////////////////////


    /**
     * Initialization. Set all basic configuration
     * @param Request $request
     * @return $this
     * @throws \Exception
     */
    public function initForHome(Request $request)
    {
        // Set configuration only once
        if($this->isInitialized) { return $this; }

        // Label
        $this->templateConf['label'] = 'Booking (Pendent)';
        $this->templateConf['labelIcon'] = 'fa-inbox';

        // Route
        $this->templateConf['route'] = array(
            'get' => array(
                'name' => '_bck__booking__booking__get_for_home'
            )
        );

        parent::init($request);

        $loggedUserId = $this->get('session')->get('_app.user')['id'];

        // Get pendent booking of current user and booking without user
        $this->localConf['search']['criteria'][] = array(
            'field' => 'userObj',
            'expr' => 'eq',
            'value' => $loggedUserId
        );
        $this->localConf['search']['criteria'][] = array(
            'field' => 'userObj',
            'method' => 'or',
            'expr' => 'isNull',
            'value' => null
        );
        $this->localConf['search']['criteria'][] = array(
            'field' => 'confirmationStatus',
            'expr' => 'neq',
            'value' => 'OK'
        );

        // Legend (disable cancel legend)
        $this->templateConf['controls']['legend'] = array();

        $this->templateConf['controls']['expander']['isEnabled'] = true;

        // Actions for template/view
        $this->templateConf['actions'] = array();

        return $this;
    }

    /**
     * @Route("/bck/booking/booking/get-for-home/{id}",
     *     name="_bck__booking__booking__get_for_home",
     *     defaults={"id" = null},
     * )
     *
     * Action to get a list/array of compact objects from the search configuration
     * or a regular object if the "id" is provided
     * @param Request $request
     * @param $id
     * @return mixed
     */
    public function getForHomeAction(Request $request, $id)
    {
        $this->initForHome($request);
        return parent::getAction($request, $id);
    }

    /**
     * Action to get all data for home bundle
     * @param Request $request
     * @param $responseType (not used in route, only for direct symfony calls,
     *     determines the type of response [http, json, array])
     * @return mixed
     */
    public function dataForHomeAction(Request $request, $responseType = 'http')
    {
        $this->initForHome($request);
        return $this->dataAction($request, $responseType);
    }
}