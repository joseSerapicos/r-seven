<?php

namespace Bck\BookingBundle\Controller;

use Sensio\Bundle\FrameworkExtraBundle\Configuration\Route;
use Symfony\Component\HttpFoundation\Request;

class PackageBookingServiceController extends BaseBookingServiceController
{
    /**
     * Get label/title to display child in parent
     * @return mixed
     */
    static function getLabel() { return 'Services'; }

    /**
     * Get Local Booking Context.
     * @return mixed (lowerCamelCase)
     */
    protected function getLocalBookingContext()
    {
        return 'package';
    }

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

        // Menu
        $this->templateConf['selectedMenu']['route'] = '_bck__booking__package_booking__index';

        // Parent route
        $this->parentConf = array(
            'booking' => array('route' => '_bck__booking__booking__index')
        );

        // Route
        $this->templateConf['route'] = array(
            'get' => array(
                'name' => '_bck__booking__package_booking_service__get'
            ),
            'addStep1' => array(
                'name' => '_bck__booking__package_booking_service__add_step1',
            ),
            'addStep2' => array(
                'name' => '_bck__booking__package_booking_service__add_step2',
            ),
            'addStep3' => array(
                'name' => '_bck__booking__package_booking_service__add_step3',
            ),
            'addStep4' => array(
                'name' => '_bck__booking__package_booking_service__add_step4',
            ),
            'addStep2ForBooking' => array(
                'name' => '_bck__booking__package_booking_service__add_step2_for_booking',
            ),
            'addStep3ForBooking' => array(
                'name' => '_bck__booking__package_booking_service__add_step3_for_booking',
            ),
            'addStep3ForBookingChange' => array(
                'name' => '_bck__booking__package_booking_service__add_step3_for_booking_change',
            ),
            'addStep4ForBooking' => array(
                'name' => '_bck__booking__package_booking_service__add_step4_for_booking',
            ),
            'addStep5ForBooking' => array(
                'name' => '_bck__booking__package_booking_service__add_step5_for_booking',
            ),
            'edit' => array(
                'name' => '_bck__booking__package_booking_service__edit',
            ),
            'cancel' => array(
                'name' => '_bck__booking__package_booking_service__cancel',
            ),
            'delete' => array(
                'name' => '_bck__booking__package_booking_service__delete',
            ),
            'order' => array(
                'name' => '_bck__booking__package_booking_service__order',
            )
        );

        parent::init($request, $parents);

        // Templates
        $this->localConf['templates']['addStep1'] = 'BckBookingBundle:BaseBookingService:add-step1.html.twig';
        $this->localConf['templates']['addStep2'] = 'BckBookingBundle:BaseBookingService:add-step2.html.twig';
        $this->localConf['templates']['addStep3'] = 'BckBookingBundle:BaseBookingService:add-step3.html.twig';
        $this->localConf['templates']['edit'] = 'BckBookingBundle:BaseBookingService:edit.html.twig';

        // Search
        $this->templateConf['search']['fields'] = array(
            'icon', 'name', 'reference', 'place_iata', 'placeTo_iata', 'startDate', 'endDate', 'durationDays',
            'quantity', 'totalCost', 'totalSell', 'totalMarkup',
            'confirmationStatus', 'isAutoAllot'
        );
        $this->templateConf['search']['orderBy'] = array(
            array('field' => 'startDate', 'value' => 'ASC'),
            array('field' => 'priority', 'value' => 'ASC')
        );

        // Actions for template/view
        $this->templateConf['actions'] = array_merge(
            $this->templateConf['actions'],
            array(
                'search' => true,
                'cancel' => true,
                'order' => true
            )
        );

        /* Legend for template/view */
        $this->templateConf['controls']['legend'][] = array(
            'label' => 'Grouped Service', 'class' => 'legend-grouped', 'field' => 'grouperBookingServiceObj'
        );
        $this->templateConf['controls']['legend'][] = array(
            'label' => 'Grouper Service', 'class' => 'legend-grouper', 'field' => 'grouperBookingServicePriceObj'
        );
        /* /Legend for template/view */

        // Extra data
        $this->templateConf['extraData']['template'] = array(
            'class' => '-merge-view'
        );

        return $this;
    }

    /**
     * @Route("/bck/booking/package-booking-service/get/{booking}/{id}",
     *     name="_bck__booking__package_booking_service__get",
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
     * @Route("/bck/booking/package-booking-service/add-step1/{booking}/{id}",
     *     name="_bck__booking__package_booking_service__add_step1",
     *     defaults={"id" = null}
     * )
     *
     * Action to add objects using the form
     * @param Request $request
     * @param $booking
     * @param $id
     * @return mixed
     */
    public function addStep1Action(Request $request, $booking, $id)
    {
        return parent::addStep1Action($request, $booking, $id);
    }

    /**
     * @Route("/bck/booking/package-booking-service/add-step2/{booking}/{id}",
     *     name="_bck__booking__package_booking_service__add_step2",
     *     defaults={"id" = null}
     * )
     *
     * Action to add dates, allot and price of object
     * @param Request $request
     * @param $booking
     * @param $id
     * @return mixed
     */
    public function addStep2Action(Request $request, $booking, $id)
    {
        return parent::addStep2Action($request, $booking, $id);
    }

    /**
     * @Route("/bck/booking/package-booking-service/add-step3/{booking}/{id}",
     *     name="_bck__booking__package_booking_service__add_step3",
     *     defaults={"id" = null}
     * )
     *
     * Action to add detail info of object
     * @param Request $request
     * @param $booking
     * @param $id
     * @return mixed
     */
    public function addStep3Action(Request $request, $booking, $id)
    {
        $this->flags['storage'] = 'session'; // Session storage is used
        $this->flags['hasForm'] = true;
        $this->init($request, array($booking));
        $this->templateConf['fields']['form'] = array(
            'name', 'description', 'supplierObj', 'reference', 'placeObj', 'placeToObj'
        );

        return parent::addStep3Action($request, $booking, $id);
    }

    /**
     * @Route("/bck/booking/package-booking-service/add-step4/{booking}/{id}",
     *     name="_bck__booking__package_booking_service__add_step4",
     *     defaults={"id" = null}
     * )
     *
     * Action to save object to database from session storage
     * @param Request $request
     * @param $booking
     * @param $id
     * @return mixed
     */
    public function addStep4Action(Request $request, $booking, $id)
    {
        return parent::addStep4Action($request, $booking, $id);
    }


    //////////////////////////////////////////////////////////////////
    // ADD PACKAGE SERVICE FOR BOOKING (WHEN BOOKING IS CREATED), BECAUSE BY DEFAULT ONLY IS ALLOWED SERVICES OF TYPE REGULAR
    ////////////////////////////////////////////////////////////////////////////////////////

    /**
     * addStep1ForBookingAction is defined on PackageBooking
     */

    /**
     * @Route("/bck/booking/package-booking-service/add-step2-for-booking/{booking}/{id}",
     *     name="_bck__booking__package_booking_service__add_step2_for_booking",
     *     defaults={"id" = null}
     * )
     *
     * Action to add objects using the form
     * @param Request $request
     * @param $booking
     * @param $id
     * @return mixed
     */
    public function addStep2ForBookingAction(Request $request, $booking, $id)
    {
        $this->flags['storage'] = 'session'; // Session storage is used
        $this->flags['hasForm'] = true;
        $this->init($request, array($booking));
        // Needed once that the parent is in session storage yet, which causes that the flag be disabled on child
        $this->responseConf['addObjectSessionStorageFlag'] = true;
        // Keep session storage flag, because the child form is merged with the parent form,
        // otherwise the child is added to objects list in template and we want to handle them manually
        $this->responseConf['addObjectSessionStorageFlag'] = true;
        $this->localConf['templates']['addStep1'] = 'BckBookingBundle:PackageBooking:add-step2.html.twig';
        return parent::addStep1Action($request, $booking, $id);
    }

    /**
     * @Route("/bck/booking/package-booking-service/add-step3-for-booking/{booking}/{id}",
     *     name="_bck__booking__package_booking_service__add_step3_for_booking",
     *     defaults={"id" = null}
     * )
     *
     * Action to add dates, allot and price of object
     * @param Request $request
     * @param $booking
     * @param $id
     * @return mixed
     */
    public function addStep3ForBookingAction(Request $request, $booking, $id)
    {
        $this->flags['storage'] = 'session'; // Session storage is used
        $this->flags['hasForm'] = true;
        $this->init($request, array($booking));
        // Needed once that the parent is in session storage yet, which causes that the flag be disabled on child
        $this->responseConf['addObjectSessionStorageFlag'] = true;
        $this->localConf['templates']['addStep2'] = 'BckBookingBundle:PackageBooking:add-step3.html.twig';

        if (empty($id)) { // If id is not provided, no submit were made, get form.
            return parent::addStep2Action($request, $booking, $id);
        }

        // Configure response
        $this->responseConf['hasObject'] = false;

        parent::addStep2Action($request, $booking, $id);

        // Configure response
        $obj = $this->getObject($id);
        $bookingServiceObj = $obj->getBookingServiceObj($id);

        // Reset previous services
        $this->resetPackageServiceServicesFromSS($bookingServiceObj);

        $packageServiceServices = null;
        if (!isset($this->flags['hasPackageServiceServices']) || $this->flags['hasPackageServiceServices']) {
            $packageServiceServices = $this->getAndSetPackageServiceServices($obj);
        }

        $this->responseConf['hasObject'] = true;
        // Object updated with totals after children services of grouper service are updated
        $this->responseConf['object'] = $this->normalizeObject($obj);
        // Send updated objects or empty list to update the price in view according with "hasPackageServiceServices"
        $this->responseConf['hasObjects'] = true;
        $this->responseConf['objects'] = $packageServiceServices;

        return $this->getResponse();
    }

    /**
     * @Route("/bck/booking/package-booking-service/add-step3-for-booking-change/{booking}/{id}",
     *     name="_bck__booking__package_booking_service__add_step3_for_booking_change",
     *     defaults={"id" = null}
     * )
     *
     * Action to set services of package
     * @param Request $request
     * @param $booking
     * @param $id
     * @return mixed
     */
    public function addStep3ForBookingChangeAction(Request $request, $booking, $id)
    {
        // Avoid to set PackageServiceServices and return a different total (with grouped PackageServiceServices)
        $this->flags['hasPackageServiceServices'] = false;
        return $this->addStep3ForBookingAction($request, $booking, $id);
    }

    /**
     * @Route("/bck/booking/package-booking-service/add-step4-for-booking/{booking}/{id}",
     *     name="_bck__booking__package_booking_service__add_step4_for_booking",
     *     defaults={"id" = null}
     * )
     *
     * Action to set services of package
     * @param Request $request
     * @param $booking
     * @param $id
     * @return mixed
     */
    public function addStep4ForBookingAction(Request $request, $booking, $id)
    {
        $this->flags['storage'] = 'session'; // Session storage is used
        $this->flags['hasForm'] = true;
        $this->init($request, array($booking));
        // Needed once that the parent is in session storage yet, which causes that the flag be disabled on child
        $this->responseConf['addObjectSessionStorageFlag'] = true;

        $data = $this->getAndProcessRequestData($request);
        $data = array_combine(array_column($data, 'packageServiceServiceObj'), $data);

        // Note: Object is of type PackageBookingService that inherits BookingServices that has a foreign key to Service
        $obj = $this->getObject($id);

        $packageServiceServices = $this->getAndSetPackageServiceServices($obj, $data);

        // Config response
        $this->responseConf['hasObject'] = true;
        // Object updated with totals after children services of grouper service are updated
        $this->responseConf['object'] = $this->normalizeObject($obj);
        $this->responseConf['hasObjects'] = true;
        $this->responseConf['objects'] = $packageServiceServices;

        return $this->getResponse();
    }

    /**
     * @Route("/bck/booking/package-booking-service/add-step5-for-booking/{booking}/{id}",
     *     name="_bck__booking__package_booking_service__add_step5_for_booking",
     *     defaults={"id" = null}
     * )
     *
     * Action to add detail info of object
     * @param Request $request
     * @param $booking
     * @param $id
     * @return mixed
     */
    public function addStep5ForBookingAction(Request $request, $booking, $id)
    {
        $this->flags['storage'] = 'session'; // Session storage is used
        $this->flags['hasForm'] = true;
        $this->init($request, array($booking));
        // Needed once that the parent is in session storage yet, which causes that the flag be disabled on child
        $this->responseConf['addObjectSessionStorageFlag'] = true;
        $this->localConf['templates']['addStep3'] = 'BckBookingBundle:PackageBooking:add-step5.html.twig';
        $this->templateConf['fields']['form'] = array(
            'name', 'description', 'supplierObj', 'reference', 'placeObj', 'placeToObj'
        );

        if (empty($id)) { // When you get the view, id is not defined
            return parent::addStep3Action($request, $booking, $id);
        }

        parent::addStep3Action($request, $booking, $id);

        if ($this->responseConf['status'] == 1) {
            $bookingObj = $this->getParentConf()['obj'];
            $packageBookingObj = $this->container->get('app.service.session_storage')->getParentObj($bookingObj->getId());
            $this->templateConf['localData']['data']['preview']
                = PackageBookingController::getPreview($this, $packageBookingObj);
        }

        return $this->getResponse();
    }

    /**
     * Get and Set Package Service Services
     * Set child services of PackageService
     * @param $object
     * @param $data (data to handle with service children, if not provided default values are used)
     * @return array
     */
    protected function getAndSetPackageServiceServices($object, $data = null) {
        $bookingServiceObj_package = $object->getBookingServiceObj();
        $bookingObj = $bookingServiceObj_package->getBookingObj();
        $serviceObj = $bookingServiceObj_package->getServiceObj();
        $packageServiceServices = array(); // Array with services to sent in response

        // Reset previous services associated
        $this->resetPackageServiceServicesFromSS($bookingServiceObj_package);

        // Get services of package
        if ($serviceObj) {
            // Get PackageService object (get from $serviceObj that is the your inherited object)
            $packageServiceObj = $this->getRepositoryService('PackageService', 'ServicesBundle', 'Bck')
                ->execute('findOneByServiceObj', array($serviceObj));

            $grouperBookingServiceObj = ($packageServiceObj->getHasGroupingServices() ?
                $bookingServiceObj_package :
                null
            );

            // Get Services of PackageService
            $packageServiceServiceObjArr = $this->getRepositoryService('PackageServiceService', 'ServicesBundle', 'Bck')
                ->execute('findByPackageServiceObj', array($packageServiceObj, array('priority' => 'ASC')));

            if (is_array($packageServiceServiceObjArr) && (count($packageServiceServiceObjArr) > 0)) {
                // If data, then form is submitted and is not the default data, so need to be validated
                $hasValidation = !empty($data);

                foreach ($packageServiceServiceObjArr as $packageServiceServiceObj) {
                    // To distinct optional services not selected by the user, but used to simulate the price
                    $isSimulationService = false;
                    if ($packageServiceServiceObj->getIsOptional() // It's an optional service
                        && (
                            // Data is not submitted yet
                            empty($data)
                            // There are no data submitted about optional service
                            || !isset($data[$packageServiceServiceObj->getId()])
                            || !isset($data[$packageServiceServiceObj->getId()]['hasService'])
                            // Submitted data has the optional service unselected
                            || !$data[$packageServiceServiceObj->getId()]['hasService']
                            // Need to use " == 'false'" because boolean coming as string
                            || ($data[$packageServiceServiceObj->getId()]['hasService'] == "false")
                        )
                    ) {
                        $isSimulationService = true;
                    }

                    $newObj = $this->newObject();
                    $newBookingServiceObj = $newObj->getBookingServiceObj();

                    // Override Service autoControls to PackageServiceService values
                    $autoControls = $this->getPackageServiceServiceAutoControls($packageServiceServiceObj);
                    $packageServiceService_serviceObj = $packageServiceServiceObj->getServiceObj();
                    $packageServiceService_serviceObj->setIsEnabledAvailability($autoControls['availability']['isEnabled']);
                    $packageServiceService_serviceObj->setIsEnabledAllot($autoControls['allot']['isEnabled']);
                    $packageServiceService_serviceObj->setIsEnabledPrice($autoControls['price']['isEnabled']);

                    $newBookingServiceObj->setServiceObj($packageServiceService_serviceObj);

                    // Data to be setted as default
                    $newObjDefaultData = array();
                    // We use "-1" to calculate the dates, because duration starts in "1" that is the day itself
                    $newObjDefaultData['startDate'] = (new \DateTime($bookingServiceObj_package->getStartDate()->format('Y-m-d')
                        .' +'.($packageServiceServiceObj->getDurationStartDay()-1).' day')
                    );
                    // End date
                    switch ($packageServiceServiceObj->getDurationType()) {
                        case 'FIXED':
                            $newObjDefaultData['endDate'] = (new \DateTime($newObjDefaultData['startDate']->format('Y-m-d')
                                .' +'.($packageServiceServiceObj->getDurationDays()-1).' day')
                            );
                            break;
                        default: // 'END_DATE'
                            $newObjDefaultData['endDate'] = $bookingServiceObj_package->getEndDate();
                    }
                    // Quantity
                    switch ($packageServiceServiceObj->getQuantityType()) {
                        case 'FIXED':
                            $newObjDefaultData['quantity'] = $packageServiceServiceObj->getQuantity();
                            break;
                        case 'FREE':
                            $newObjDefaultData['quantity'] = ((!empty($data)
                                && isset($data[$packageServiceServiceObj->getId()])
                                && isset($data[$packageServiceServiceObj->getId()]['quantity']))
                                ? $data[$packageServiceServiceObj->getId()]['quantity']
                                : $bookingServiceObj_package->getQuantity() // One per pax by default
                            );
                            break;
                        default: // 'PER_PAX'
                            $newObjDefaultData['quantity'] = $bookingServiceObj_package->getQuantity();
                    }
                    $this->setObjectDefaultValues($newObj, $newObjDefaultData);
                    $newBookingServiceObj->setPriority($packageServiceServiceObj->getPriority());
                    $newBookingServiceObj->setDescription($packageServiceServiceObj->getDescription());
                    $newBookingServiceObj->setPlaceObj($packageServiceServiceObj->getPlaceObj());
                    $newBookingServiceObj->setPlaceToObj($packageServiceServiceObj->getPlaceToObj());

                    // Merge with submitted form data
                    if (!empty($data) && isset($data[$packageServiceServiceObj->getId()])) {
                        $newBookingServiceObj->setIsAutoAvailability($newBookingServiceObj->getIsAutoAvailability()
                            && $data[$packageServiceServiceObj->getId()]['isAutoAvailability']
                            // Need to use " != 'false'" because boolean coming as string
                            && ($data[$packageServiceServiceObj->getId()]['isAutoAvailability'] != "false")
                        );

                        $newBookingServiceObj->setIsAutoAllot($newBookingServiceObj->getIsAutoAllot()
                            && $data[$packageServiceServiceObj->getId()]['isAutoAllot']
                            // Need to use " != 'false'" because boolean coming as string
                            && ($data[$packageServiceServiceObj->getId()]['isAutoAllot'] != "false")
                        );

                        $newBookingServiceObj->setIsAutoPrice($newBookingServiceObj->getIsAutoPrice()
                            && $data[$packageServiceServiceObj->getId()]['isAutoPrice']
                            // Need to use " != 'false'" because boolean coming as string
                            && ($data[$packageServiceServiceObj->getId()]['isAutoPrice'] != "false")
                        );
                    }

                    // Object is saved in session
                    $localParent = $this->flags['parent'];
                    $this->flags['parent'] = $bookingObj->getId();
                    $this->saveObjectToSS($newObj);
                    // Save $newBookingServiceObj also, because it is the parent of BookingServicePrice
                    $this->flags['parent'] = $newObj->getId(); // With this parent cascade deletion works automatically
                    $this->saveObjectToSS($newBookingServiceObj);
                    $this->flags['parent'] = $localParent; // Reset to local parent

                    // Set grouperBookingServiceObj
                    $newBookingServiceObj->setGrouperBookingServiceObj($isSimulationService ?
                        null :
                        $grouperBookingServiceObj
                    );

                    // Handle controls here after save the BookingService object
                    $this->handleAvailability($newBookingServiceObj, $autoControls['availability']['targetService'], $hasValidation, false, false); // Set dates
                    $this->handleAllot($this, $newBookingServiceObj, $autoControls['allot']['targetService'], $hasValidation); // Set allot
                    // We set the last parameter to "false" to avoid set totals to grouper service
                    // for each grouped service. Set totals of grouper service only after add all grouped services
                    $this->handlePrice(
                        $newBookingServiceObj, $autoControls['price']['targetService'], $hasValidation, false
                    ); // Reset price

                    $packageServiceServices[] = array(
                        'packageServiceServiceObj' => $packageServiceServiceObj->getId(),
                        'bookingServiceObj' => $newBookingServiceObj->getId(),
                        'thumbnail' => $packageServiceService_serviceObj->getThumbnail(),
                        'icon' => ($packageServiceService_serviceObj->getAppIconObj() ?
                            $packageServiceService_serviceObj->getAppIconObj()->getIcon() : ''
                        ),
                        'name' => $packageServiceService_serviceObj->getName(),
                        'description' => $newBookingServiceObj->getDescription(),
                        'startDate' => $newBookingServiceObj->normalizeDate($newBookingServiceObj->getStartDate()),
                        'endDate' => $newBookingServiceObj->normalizeDate($newBookingServiceObj->getEndDate()),
                        'quantityType' => $packageServiceServiceObj->getQuantityType(),
                        'quantity' => $newBookingServiceObj->getQuantity(),
                        'isEnabledAvailability' => $packageServiceService_serviceObj->getIsEnabledAvailability(),
                        'isEnabledAllot' => $packageServiceService_serviceObj->getIsEnabledAllot(),
                        'isEnabledPrice' => $packageServiceService_serviceObj->getIsEnabledPrice(),
                        'isAutoAvailability' => $newBookingServiceObj->getIsAutoAvailability(),
                        'isAutoAllot' => $newBookingServiceObj->getIsAutoAllot(),
                        'isAutoPrice' => $newBookingServiceObj->getIsAutoPrice(),
                        'totalSell' => $newBookingServiceObj->getTotalSell(),
                        'grouperBookingServiceObj' => ($newBookingServiceObj->getGrouperBookingServiceObj() ?
                            $newBookingServiceObj->getGrouperBookingServiceObj()->getId() : null
                        ),
                        'isOptional' => $packageServiceServiceObj->getIsOptional(),
                        // This field controls if the optional service is to add or not (false by default)
                        // If the new object has id, then it was saved and service was added
                        'hasService' => !$isSimulationService,
                    );

                    // Remove form session storage the object if is optional and is not selected by the user.
                    // The object was added before to get the price, so the user can see the price of optional
                    // services without select them.
                    if ($isSimulationService) {
                        $this->deleteObjectFromSS($newBookingServiceObj->getId());
                        $this->deleteObjectFromSS($newObj->getId());
                    }
                }

                // Set totals to grouper service after add all grouped services
                if ($grouperBookingServiceObj) {
                    BaseBookingServiceController::setTotals($this, $grouperBookingServiceObj);
                }
            }
        }

        return $packageServiceServices;
    }

    /**
     * Get PackageServiceService auto controls
     * @param $packageServiceServiceObj
     * @return array
     */
    static function getPackageServiceServiceAutoControls($packageServiceServiceObj)
    {
        $autoControls = array(
            'availability' => array(
                'isEnabled' => false,
                'targetService' => null
            ),
            'allot' => array(
                'isEnabled' => false,
                'targetService' => null
            ),
            'price' => array(
                'isEnabled' => false,
                'targetService' => null
            )
        );

        $packageService_serviceObj = $packageServiceServiceObj->getPackageServiceObj()->getServiceObj(); // Target service
        $packageServiceService_serviceObj = $packageServiceServiceObj->getServiceObj();

        // AVAILABILITY
        $availabilityType = $packageServiceServiceObj->getAvailability();
        switch ($availabilityType) {
            case 'SERVICE':
                $autoControls['availability']['isEnabled']
                    = $packageServiceService_serviceObj->getIsEnabledAvailability();
                break;
            case 'PACKAGE':
                $autoControls['availability']['isEnabled'] = true;
                $autoControls['availability']['targetService'] = $packageService_serviceObj;
                break;
            case 'NONE':
                // Values are already defined as default
                break;
        }

        // ALLOT
        $allotType = $packageServiceServiceObj->getAllot();
        switch ($allotType) {
            case 'SERVICE':
                $autoControls['allot']['isEnabled'] = $packageServiceService_serviceObj->getIsEnabledAllot();
                break;
            case 'PACKAGE':
                $autoControls['allot']['isEnabled'] = true;
                $autoControls['allot']['targetService'] = $packageService_serviceObj;
                break;
            case 'NONE':
                // Values are already defined as default
                break;
        }

        // PRICE
        $priceType = $packageServiceServiceObj->getPrice();
        switch ($priceType) {
            case 'SERVICE':
                $autoControls['price']['isEnabled'] = $packageServiceService_serviceObj->getIsEnabledPrice();
                break;
            case 'PACKAGE':
                $autoControls['price']['isEnabled'] = true;
                $autoControls['price']['targetService'] = $packageService_serviceObj;
                break;
            case 'NONE':
                // Values are already defined as default
                break;
        }

        return $autoControls;
    }

    /**
     * Reset package service services from session storage
     * @param $bookingServiceObj
     * @return $this
     */
    protected function resetPackageServiceServicesFromSS($bookingServiceObj)
    {
        $bookingObj = $bookingServiceObj->getBookingObj();

        $packageBookingServiceObjArr = $this->container->get('app.service.session_storage')->getChildObjects(
            $bookingObj->getId(), // This is the parent of objects
            'PackageBookingService'
        );

        if (is_array($packageBookingServiceObjArr) && (count($packageBookingServiceObjArr) > 1)) { // > 1 because 1 it's the BookingService itself
            foreach ($packageBookingServiceObjArr as $packageBookingServiceObj) {
                // Remove only child services (those that are different of main BookingService)
                if ($packageBookingServiceObj->getBookingServiceObj() != $bookingServiceObj) {
                    // Remove the BookingService manually because is not associated as child od PackageBookingService
                    $this->container->get('app.service.session_storage')
                        ->delete($packageBookingServiceObj->getBookingServiceObj()->getId());
                    // Remove PackageBookingService
                    $this->container->get('app.service.session_storage')
                        ->delete($packageBookingServiceObj->getId());
                }
            }
        }

        return $this;
    }

    ///////////////////////////////////////////////////////////////////////


    /**
     * @Route("/bck/booking/package-booking-service/edit/{booking}/{id}",
     *     name="_bck__booking__package_booking_service__edit",
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
        // Set configuration
        $this->flags['hasForm'] = true;
        $this->init($request, array($booking));
        $this->templateConf['fields']['form'] = array(
            'name', 'description', 'supplierObj', 'reference', 'placeObj', 'placeToObj',
            'startDate', 'endDate',
            'quantity', 'confirmationStatus'
        );

        return parent::editLocalChildAction($request, $booking, $id);
    }

    /**
     * @Route("/bck/booking/package-booking-service/cancel/{booking}/{id}",
     *     name="_bck__booking__package_booking_service__cancel",
     *     defaults={"id" = null}
     * )
     *
     * Overrides parent method
     * @param Request $request
     * @param $booking
     * @param $id
     * @return mixed
     */
    public function cancelLocalChildAction(Request $request, $booking, $id)
    {
        return parent::cancelLocalChildAction($request, $booking, $id);
    }

    /**
     * @Route("/bck/booking/package-booking-service/delete/{booking}/{id}",
     *     name="_bck__booking__package_booking_service__delete",
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
     * @Route("/bck/booking/package-booking-service/order/{booking}/{id}/{type}",
     *     name="_bck__booking__package_booking_service__order",
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
     * @Route("/bck/booking/package-booking-service/data/{booking}",
     *     name="_bck__booking__package_booking_service__data"
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
     * @Route("/bck/booking/package-booking-service/conf/{booking}/{id}",
     *     name="_bck__booking__package_booking_service__conf",
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

    /**
     * @Route("/bck/booking/package-booking-service/conf-for-booking/{booking}",
     *     name="_bck__booking__package_booking_service__conf_for_booking"
     * )
     *
     * Overrides parent method
     * @param Request $request
     * @param $booking
     * @return mixed
     */
    public function confLocalChildForBookingAction(Request $request, $booking)
    {
        $this->init($request, array($booking));

        // Remove legend
        $this->templateConf['controls']['legend'] = array();

        // Avoid DataService normalization (boolean)
        $this->templateConf['fields']['metadata']['isAutoAllot']['type'] = 'number';
        // Keep original value to sum objects in view
        $this->templateConf['fields']['metadata']['totalSell']['keepOriginalNormalizer'] = true;
        $this->templateConf['actions'] = array('refresh' => false);
        return parent::confChildAction($request, array($booking));
    }

    /**
     * Set End Date
     * This function should be override for classes that handles with end date in a different way (like fixed duration)
     * @param $bookingServiceObj
     * @param $defaultDate
     * @return $this
     */
    protected function setEndDate($bookingServiceObj, $defaultDate)
    {
        // Notice that this method is called yet when you add regular services in detail action
        $serviceObj = $bookingServiceObj->getServiceObj();
        $endDate = $defaultDate;

        if ($serviceObj) {
            // Get PackageService object (get from $serviceObj that is the your inherited object)
            $packageServiceObj = $this->getRepositoryService('PackageService', 'ServicesBundle', 'Bck')
                ->execute('findOneByServiceObj', array($serviceObj));

            // Is a PackageService and has fixed duration
            if ($packageServiceObj && $packageServiceObj->getHasFixedDuration()) {
                $fixedDurationDays = $packageServiceObj->getFixedDurationDays();
                $startDate = $bookingServiceObj->getStartDate();
                $endDate = new \DateTime($startDate->format('Y-m-d'));
                $endDate->modify('+' . $fixedDurationDays . ' day');
            }
        }

        $bookingServiceObj->setEndDate($endDate);
        $bookingServiceObj->setDurationDays(null);

        return $this;
    }
}