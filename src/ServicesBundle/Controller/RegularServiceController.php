<?php

namespace ServicesBundle\Controller;

use Sensio\Bundle\FrameworkExtraBundle\Configuration\Route;
use Symfony\Component\HttpFoundation\Request;
use AppBundle\Service\HelperService;

class RegularServiceController extends BaseServiceController
{
    /**
     * Get Local Service Context.
     * @return mixed (lowerCamelCase)
     */
    protected function getLocalServiceContext()
    {
        return 'regular';
    }

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
                'name' => '_services__regular_service__get'
            ),
            'edit' => array(
                'name' => '_services__regular_service__edit'
            ),
            'delete' => array(
                'name' => '_services__regular_service__delete'
            ),
            'detail' => array(
                'name' => '_services__regular_service__detail'
            )
        );

        parent::init($request);

        // Entity
        $this->localConf['checkObjectManager'] = true; // Configure to check object because dependency of app database

        // Search
        $this->templateConf['search']['fields'] = array(
            'id', 'thumbnail', 'icon', 'name', 'vatCode_name',
            'isEnabledAvailability', 'isEnabledAllot', 'isEnabledPrice', 'isEnabled'
        );

        // Actions for template/view
        $this->templateConf['actions'] = array_merge(
            $this->templateConf['actions'],
            array(
                'copy' => $this->templateConf['acl']['add'],
                'detail' => true,
                'search' => true
            )
        );

        return $this;
    }

    /**
     * @Route("/services/regular-service",
     *     name="_services__regular_service__index"
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
     * @Route("/services/regular-service/get/{id}",
     *     name="_services__regular_service__get",
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
     * @Route("/services/regular-service/get-vat-code-percentage/{id}",
     *     name="_services__regular_service__get_vat_code_percentage"
     * )
     *
     * Action to get the VAT code percentage of object
     * @param Request $request
     * @param $id
     * @return mixed
     */
    public function getVatCodePercentageAction(Request $request, $id)
    {
        return parent::getVatCodePercentageAction($request, $id);
    }

    /**
     * @Route("/services/regular-service/get-description/{id}",
     *     name="_services__regular_service__get_description"
     * )
     *
     * Action to get the description of object
     * @param Request $request
     * @param $id
     * @return mixed
     */
    public function getDescriptionAction(Request $request, $id)
    {
        return parent::getDescriptionAction($request, $id);
    }

    /**
     * @Route("/services/regular-service/edit/{id}",
     *     name="_services__regular_service__edit",
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
     * @Route("/services/regular-service/price-tabs",
     *     name="_services__regular_service__price_tabs"
     * )
     *
     * Action to get the price tabs
     * @param Request $request
     * @return mixed
     */
    public function priceTabsAction(Request $request)
    {
        return parent::priceTabsAction($request);
    }

    /**
     * @Route("/services/regular-service/detail/{id}",
     *     name="_services__regular_service__detail",
     *     defaults={"id" = null},
     * )
     *
     * Overrides parent method
     * @param Request $request
     * @param $id
     * @return mixed
     */
    public function detailAction(Request $request, $id)
    {
        return parent::detailAction($request, $id);
    }

    /**
     * @Route("/services/regular-service/delete/{id}",
     *     name="_services__regular_service__delete",
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
     * @Route("/services/regular-service/detail-tabs",
     *     name="_services__regular_service__detail_tabs")
     *
     * Action to get the base to build the tabs in detail
     * @return mixed
     */
    public function detailTabsAction()
    {
        return $this->render('AppBundle:tabs:default.html.twig', array(
            '_containers' => array(
                array(
                    'label' => 'Prices'
                ),
                array(
                    'label' => 'Observations'
                ),
                array(
                    'label' => 'Files'
                ),
                array(
                    'label' => 'Gallery'
                ),
                array(
                    'label' => 'Videos'
                )
            )
        ));
    }

    /**
     * @Route("/services/regular-service/conf",
     *     name="_services__regular_service__conf"
     * )
     *
     * Action to get configuration
     * @param Request $request
     * @return mixed
     */
    public function confAction(Request $request)
    {
        return parent::confAction($request);
    }


    ////////////////////////////////////////////////////
    // METHODS TO HANDLE WITH BookingService Add ACTION
    /////////////////////////////////////////////////////////////////////////////////////////////////////////

    /**
     * @Route("/services/regular-service/get-for-booking-service/{id}",
     *     name="_services__regular_service__get_for_booking_service",
     *     defaults={"id" = null},
     * )
     *
     * Overrides parent method
     * @param Request $request
     * @param $id
     * @return mixed
     */
    public function getForBookingServiceAction(Request $request, $id)
    {
        return parent::getForBookingServiceAction($request, $id);
    }

    /**
     * @Route("/services/regular-service/data-for-booking-service",
     *     name="_services__regular_service__data_for_booking_service"
     * )
     *
     * Action to get all data
     * @param Request $request
     * @return mixed
     */
    public function dataForBookingServiceAction(Request $request)
    {
        return parent::dataForBookingServiceAction($request);
    }
}