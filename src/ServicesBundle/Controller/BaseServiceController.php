<?php

namespace ServicesBundle\Controller;

use AppBundle\Controller\BaseEntityController;
use Sensio\Bundle\FrameworkExtraBundle\Configuration\Route;
use Symfony\Component\HttpFoundation\Request;
use AppBundle\Service\HelperService;


/**
 * Class BaseServiceController
 * Base service controller for service types
 * @package ServicesBundle\Controller
 */
abstract class BaseServiceController extends BaseEntityController
{
    /**
     * Get Local Service Context (it needs to be implemented by children to get the correct context <regular, package, etc>).
     * @return mixed (lowerCamelCase)
     */
    abstract protected function getLocalServiceContext();

    /**
     * Get service context.
     * @param $isUpperCase
     * @return mixed (lowerCamelCase)
     */
    protected function getServiceContext($isUpperCase = false) {
        return ($isUpperCase ? ucfirst($this->getLocalServiceContext()) : $this->getLocalServiceContext());
    }

    /**
     * DEFINE ROUTE HERE
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
     * DEFINE ROUTE HERE
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
     * DEFINE ROUTE HERE
     *
     * Action to get the VAT code percentage of object
     * @param Request $request
     * @param $id
     * @return mixed
     */
    public function getVatCodePercentageAction(Request $request, $id)
    {
        // Set configuration
        $this->init($request);

        // Get raw service, no the service type current context
        $serviceObj = $this->getRepositoryService('Service', 'ServicesBundle')
            ->execute('findOneById', array($id));

        $this->templateConf['localData']['data']['vatCodePercentage']
            = (($serviceObj && $serviceObj->getVatCodeObj()) ? $serviceObj->getVatCodeObj()->getPercentage() : null);

        return $this->getResponse(true);
    }

    /**
     * DEFINE ROUTE HERE
     *
     * Action to get the description of object
     * @param Request $request
     * @param $id
     * @return mixed
     */
    public function getDescriptionAction(Request $request, $id)
    {
        // Set configuration
        $this->init($request);

        // Get raw service, no the service type current context
        $serviceObj = $this->getRepositoryService('Service', 'ServicesBundle')
            ->execute('findOneById', array($id));

        $this->templateConf['localData']['data']['description']
            = ($serviceObj ? $serviceObj->getDescription() : null);

        return $this->getResponse(true);
    }

    /**
     * DEFINE ROUTE HERE
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
     * DEFINE ROUTE HERE
     *
     * Action to get the price tabs
     * @param Request $request
     * @return mixed
     */
    public function priceTabsAction(Request $request)
    {
        // Render form
        return $this->render('AppBundle:accordion:default.html.twig', array(
            '_containers' => array(
                array(
                    'label' => 'Availability'
                ),
                array(
                    'label' => 'Allot'
                ),
                array(
                    'label' => 'Prices'
                ),
                array(
                    'label' => 'Fixed Costs'
                ),
                array(
                    'label' => 'Supplements'
                ),
                array(
                    'label' => 'Discounts'
                ),
                array(
                    'label' => 'Bonus'
                )
            )
        ));
    }

    /**
     * DEFINE ROUTE HERE
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
     * DEFINE ROUTE HERE
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
     * DEFINE ROUTE HERE
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
     * DEFINE ROUTE HERE
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
     * Overrides parent method
     * @param Request $request
     * @return $this
     * @throws \Exception
     */
    protected function initForBookingService(Request $request)
    {
        // Set configuration only once
        if($this->isInitialized) { return $this; }

        // Route
        $this->templateConf['route'] = array(
            'get' => array(
                'name' => ('_services__'.$this->getServiceContext().'_service__get_for_booking_service')
            )
        );

        parent::init($request);

        // Search
        // Set as localConf to avoid user change it
        $fields = array('id', 'thumbnail', 'name', 'description');
        $this->templateConf['fields']['view'] = $fields;
        // Note: Use "serviceObj" as id,
        // because BookingService has a foreign key to the base service, not to any service type.
        $fields[] = 'serviceObj';
        $this->templateConf['search']['fields'] =
        $this->localConf['search']['fields'] = $fields;

        // Actions for template/view
        $this->templateConf['actions'] = array(
            'search' => true
        );

        // Remove legend
        $this->templateConf['controls']['legend'] = array();

        return $this;
    }

    /**
     * [SET ROUTE HERE]
     *
     * Overrides parent method
     * @param Request $request
     * @param $id
     * @return mixed
     */
    public function getForBookingServiceAction(Request $request, $id)
    {
        // Set configuration
        $this->initForBookingService($request);

        return parent::getAction($request, $id);
    }

    /**
     * [SET ROUTE HERE]
     *
     * Action to get all data
     * @param Request $request
     * @return mixed
     */
    public function dataForBookingServiceAction(Request $request)
    {
        // Set configuration
        $this->initForBookingService($request);

        return parent::dataAction($request);
    }
}