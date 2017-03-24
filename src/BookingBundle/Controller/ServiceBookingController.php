<?php

namespace BookingBundle\Controller;

use Sensio\Bundle\FrameworkExtraBundle\Configuration\Route;
use Symfony\Component\HttpFoundation\Request;

class ServiceBookingController extends BaseBookingController
{
    /**
     * Initialization. Set all basic configuration
     * @param Request $request
     * @return $this
     * @throws \Exception
     */
    protected function init(Request $request)
    {
        // Set configuration only once
        if($this->isInitialized) { return $this; }

        // Route
        $this->templateConf['route'] = array(
            'get' => array(
                'name' => '_booking__service_booking__get'
            ),
            'edit' => array(
                'name' => '_booking__service_booking__edit'
            ),
            'delete' => array(
                'name' => '_booking__service_booking__delete'
            ),
            'detail' => array(
                'name' => '_booking__service_booking__detail'
            )
        );

        parent::init($request);

        // Templates
        $this->localConf['templates']['edit'] = 'BookingBundle:BaseBooking:edit.html.twig';

        // Search
        $this->templateConf['search']['fields'] = array(
            'code', 'operator_avatar', 'client_avatar', 'client_name', 'startDate', 'endDate',
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
     * @Route("/booking/service-booking",
     *     name="_booking__service_booking__index"
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
     * @Route("/booking/service-booking/detail/{id}",
     *     name="_booking__service_booking__detail",
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
     * @Route("/booking/service-booking/get/{id}",
     *     name="_booking__service_booking__get",
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
     * @Route("/booking/service-booking/edit/{id}",
     *     name="_booking__service_booking__edit",
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
     * @Route("/booking/service-booking/delete/{id}",
     *     name="_booking__service_booking__delete",
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
     * @Route("/booking/service-booking/detail-content",
     *     name="_booking__service_booking__detail_content")
     *
     * Action to get the base to build the content of detail
     * @return mixed
     */
    public function detailTabsAction()
    {
        return parent::detailTabsAction();
    }
}