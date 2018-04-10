<?php

namespace ServicesBundle\Controller;

use Sensio\Bundle\FrameworkExtraBundle\Configuration\Route;
use Symfony\Component\HttpFoundation\Request;
use AppBundle\Service\HelperService;

class PackageServiceController extends BaseServiceController
{
    /**
     * Get Local Service Context.
     * @return mixed (lowerCamelCase)
     */
    protected function getLocalServiceContext()
    {
        return 'package';
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
                'name' => '_services__package_service__get'
            ),
            'edit' => array(
                'name' => '_services__package_service__edit'
            ),
            'delete' => array(
                'name' => '_services__package_service__delete'
            ),
            'detail' => array(
                'name' => '_services__package_service__detail'
            )
        );

        parent::init($request);

        // Templates
        $this->localConf['templates']['edit'] = $this->localConf['templatesPath'].'edit.html.twig';

        // Entity
        $this->localConf['checkObjectManager'] = true; // Configure to check object because dependency of app database

        // Search
        $this->templateConf['search']['fields'] = array(
            'id', 'thumbnail', 'icon', 'name', 'vatCode_name',
            'isEnabledAvailability', 'isEnabledAllot', 'isEnabledPrice', 'hasFixedDuration', 'fixedDurationDays',
            'priceFrom'
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
     * @Route("/services/package-service",
     *     name="_services__package_service__index"
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
     * @Route("/services/package-service/get/{id}",
     *     name="_services__package_service__get",
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
     * @Route("/services/package-service/get-vat-code-percentage/{id}",
     *     name="_services__package_service__get_vat_code_percentage"
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
     * @Route("/services/package-service/edit/{id}",
     *     name="_services__package_service__edit",
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
     * @Route("/services/package-service/price-tabs",
     *     name="_services__package_service__price_tabs"
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
     * @Route("/services/package-service/detail/{id}",
     *     name="_services__package_service__detail",
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
     * @Route("/services/package-service/delete/{id}",
     *     name="_services__package_service__delete",
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
     * @Route("/services/package-service/detail-tabs",
     *     name="_services__package_service__detail_tabs")
     *
     * Action to get the base to build the tabs in detail
     * @return mixed
     */
    public function detailTabsAction()
    {
        return $this->render('AppBundle:tabs:default.html.twig', array(
            '_containers' => array(
                array(
                    'label' => 'Services'
                ),
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
     * @Route("/services/package-service/conf",
     *     name="_services__package_service__conf"
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

    /**
     * @Route("/services/package-service/data",
     *     name="_services__package_service__data"
     * )
     *
     * Action to get all data
     * @param Request $request
     * @param $responseType (not used in route, only for direct symfony calls,
     *     determines the type of response [http, json, array])
     * @return mixed
     */
    public function dataAction(Request $request, $responseType = 'http')
    {
        return parent::dataAction($request);
    }


    ////////////////////////////////////////////////////
    // METHODS TO HANDLE WITH PackageBookingService Add ACTION
    /////////////////////////////////////////////////////////////////////////////////////////////////////////

    /**
     * Overrides parent method
     * @param Request $request
     * @return $this
     * @throws \Exception
     */
    protected function initForBookingService(Request $request)
    {
        // Set configuration only once
        if($this->isInitialized) { return $this; }

        parent::initForBookingService($request);

        // Fields
        // Avoid DataService normalization (boolean)
        $this->templateConf['fields']['metadata']['hasFixedDuration']['type'] = 'number';

        // Search
        // Set as localConf to avoid user change it
        $fields = array('id', 'thumbnail', 'name', 'description', 'hasFixedDuration', 'fixedDurationDays', 'priceFrom');
        $this->templateConf['fields']['view'] = $fields;
        // Note: Use "serviceObj" as id,
        // because BookingService has a foreign key to the base service, not to any service type.
        $fields[] = 'serviceObj';
        $this->templateConf['search']['fields'] =
        $this->localConf['search']['fields'] = $fields;

        return $this;
    }

    /**
     * @Route("/services/package-service/get-for-booking-service/{id}",
     *     name="_services__package_service__get_for_booking_service",
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
     * @Route("/services/package-service/data-for-booking-service",
     *     name="_services__package_service__data_for_booking_service"
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