<?php

namespace Bck\BookingBundle\Controller;

use Sensio\Bundle\FrameworkExtraBundle\Configuration\Route;
use Symfony\Component\HttpFoundation\Request;

class RegularBookingController extends BaseBookingController
{
    /**
     * Get Local Booking Context.
     * @return mixed (lowerCamelCase)
     */
    protected function getLocalBookingContext()
    {
        return 'regular';
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

        // Route
        $this->templateConf['route'] = array(
            'get' => array(
                'name' => '_bck__booking__regular_booking__get'
            ),
            'edit' => array(
                'name' => '_bck__booking__regular_booking__edit'
            ),
            'delete' => array(
                'name' => '_bck__booking__regular_booking__delete'
            ),
            'detail' => array(
                'name' => '_bck__booking__regular_booking__detail'
            )
        );

        parent::init($request);

        // Templates
        $this->localConf['templates']['edit'] = 'BckBookingBundle:BaseBooking:edit.html.twig';

        // Search
        $this->templateConf['search']['fields'] = array(
            'code', 'operator_avatar', 'client_avatar', 'client_name', 'place_iata', 'placeTo_iata', 'startDate', 'endDate',
            'totalCost', 'totalSell', 'totalMarkup', 'invoiceStatus', 'confirmationStatus'
        );

        // Actions for template/view
        $this->templateConf['actions'] = array_merge(
            $this->templateConf['actions'],
            array(
                'detail' => true,
                'search' => true
            )
        );

        return $this;
    }

    /**
     * @Route("/bck/booking/regular-booking",
     *     name="_bck__booking__regular_booking__index"
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
     * @Route("/bck/booking/regular-booking/detail/{id}",
     *     name="_bck__booking__regular_booking__detail",
     *     defaults={"id" = null},
     * )
     *
     * Detail action
     * @param Request $request
     * @param $id (this parameter is mandatory, but when the conf is set there is not any id to generate the route,
     * the id is provided at runtime so this requires a default value in the route definition)
     * @return mixed
     */
    public function detailAction(Request $request, $id)
    {
        return parent::detailAction($request, $id);
    }

    /**
     * @Route("/bck/booking/regular-booking/get/{id}",
     *     name="_bck__booking__regular_booking__get",
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

    /**
     * @Route("/bck/booking/regular-booking/edit/{id}",
     *     name="_bck__booking__regular_booking__edit",
     *     defaults={"id" = null},
     * )
     *
     * Action to edit/add objects using the form
     * @param Request $request
     * @param $id
     * @return mixed
     */
    public function editAction(Request $request, $id)
    {
        return parent::editAction($request, $id);
    }

    /**
     * @Route("/bck/booking/regular-booking/delete/{id}",
     *     name="_bck__booking__regular_booking__delete",
     *     defaults={"id" = null},
     * )
     *
     * Action to delete object or list of objects
     * @param Request $request
     * @param $id
     * @return mixed
     */
    public function deleteAction(Request $request, $id)
    {
        return parent::deleteAction($request, $id);
    }

    /**
     * @Route("/bck/booking/regular-booking/detail-content",
     *     name="_bck__booking__regular_booking__detail_content")
     *
     * Action to get the base to build the content of detail
     * @return mixed
     */
    public function detailTabsAction()
    {
        return parent::detailTabsAction();
    }

    /**
     * @Route("/bck/booking/regular-booking/current-accounts-menus",
     *     name="_bck__booking__regular_booking__current_accounts_menus"
     * )
     *
     * Overrides parent method
     * @return mixed
     */
    public function currentAccountsMenusAction()
    {
        return parent::currentAccountsMenusAction();
    }
}