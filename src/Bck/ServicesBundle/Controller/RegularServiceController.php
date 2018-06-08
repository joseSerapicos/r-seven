<?php

namespace Bck\ServicesBundle\Controller;

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
    public function init(Request $request)
    {
        // Set configuration only once
        if($this->isInitialized) { return $this; }

        // Route
        $this->templateConf['route'] = array(
            'get' => array(
                'name' => '_bck__services__regular_service__get'
            ),
            'edit' => array(
                'name' => '_bck__services__regular_service__edit'
            ),
            'delete' => array(
                'name' => '_bck__services__regular_service__delete'
            ),
            'detail' => array(
                'name' => '_bck__services__regular_service__detail'
            )
        );

        parent::init($request);

        // Entity
        $this->localConf['checkObjectManager'] = true; // Configure to check object because dependency of app database

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
     * @Route("/bck/services/regular-service",
     *     name="_bck__services__regular_service__index"
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
     * @Route("/bck/services/regular-service/get/{id}",
     *     name="_bck__services__regular_service__get",
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
     * @Route("/bck/services/regular-service/get-vat-code-percentage/{id}",
     *     name="_bck__services__regular_service__get_vat_code_percentage"
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
     * @Route("/bck/services/regular-service/get-description/{id}",
     *     name="_bck__services__regular_service__get_description"
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
     * @Route("/bck/services/regular-service/edit/{id}",
     *     name="_bck__services__regular_service__edit",
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
     * @Route("/bck/services/regular-service/price-tabs",
     *     name="_bck__services__regular_service__price_tabs"
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
     * @Route("/bck/services/regular-service/detail/{id}",
     *     name="_bck__services__regular_service__detail",
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
     * @Route("/bck/services/regular-service/delete/{id}",
     *     name="_bck__services__regular_service__delete",
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
     * @Route("/bck/services/regular-service/detail-tabs",
     *     name="_bck__services__regular_service__detail_tabs")
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
     * @Route("/bck/services/regular-service/conf/{id}",
     *     name="_bck__services__regular_service__conf",
     *     defaults={"id" = null}
     * )
     *
     * Action to get configuration
     * @param Request $request
     * @param $id (return the target id object with the conf, it's used to avoid to make another server request
     *     to get the object when we need the object with the conf, like in flat forms, entity detail, etc.)
     * @return mixed
     */
    public function confAction(Request $request, $id = null)
    {
        return parent::confAction($request, $id);
    }


    ////////////////////////////////////////////////////
    // METHODS TO HANDLE WITH BookingService Add ACTION
    /////////////////////////////////////////////////////////////////////////////////////////////////////////

    /**
     * @Route("/bck/services/regular-service/get-for-booking-service/{id}",
     *     name="_bck__services__regular_service__get_for_booking_service",
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
     * @Route("/bck/services/regular-service/data-for-booking-service",
     *     name="_bck__services__regular_service__data_for_booking_service"
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