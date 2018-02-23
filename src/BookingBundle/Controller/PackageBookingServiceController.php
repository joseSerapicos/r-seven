<?php

namespace BookingBundle\Controller;

use Sensio\Bundle\FrameworkExtraBundle\Configuration\Route;
use Symfony\Component\HttpFoundation\Request;

class PackageBookingServiceController extends BaseBookingServiceController
{
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
     * @param $label (set label when you don't have the route in modules/menus tree)
     * @return $this
     */
    protected function initChild(Request $request, $parents, $label = 'Services')
    {
        // Set configuration only once
        if($this->isInitialized) { return $this; }

        // Menu
        $this->templateConf['selectedMenu']['route'] = '_booking__package_booking__index';

        // Parent route
        $this->parentConf = array(
            'booking' => array('route' => '_booking__booking__index')
        );

        // Route
        $this->templateConf['route'] = array(
            'get' => array(
                'name' => '_booking__package_booking_service__get'
            ),
            'addStep1' => array(
                'name' => '_booking__package_booking_service__add_step1',
            ),
            'addStep2' => array(
                'name' => '_booking__package_booking_service__add_step2',
            ),
            'addStep3' => array(
                'name' => '_booking__package_booking_service__add_step3',
            ),
            'addStep4' => array(
                'name' => '_booking__package_booking_service__add_step4',
            ),
            'addStep2ForBooking' => array(
                'name' => '_booking__package_booking_service__add_step2_for_booking',
            ),
            'addStep3ForBooking' => array(
                'name' => '_booking__package_booking_service__add_step3_for_booking',
            ),
            'addStep4ForBooking' => array(
                'name' => '_booking__package_booking_service__add_step4_for_booking',
            ),
            'edit' => array(
                'name' => '_booking__package_booking_service__edit',
            ),
            'cancel' => array(
                'name' => '_booking__package_booking_service__cancel',
            ),
            'delete' => array(
                'name' => '_booking__package_booking_service__delete',
            ),
            'order' => array(
                'name' => '_booking__package_booking_service__order',
            )
        );

        parent::initChild($request, $parents, $label);

        // Templates
        $this->localConf['templates']['addStep1'] = 'BookingBundle:BaseBookingService:add-step1.html.twig';
        $this->localConf['templates']['addStep2'] = 'BookingBundle:BaseBookingService:add-step2.html.twig';
        $this->localConf['templates']['addStep3'] = 'BookingBundle:BaseBookingService:add-step3.html.twig';
        $this->localConf['templates']['edit'] = 'BookingBundle:BaseBookingService:edit.html.twig';

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

        // Extra data
        $this->templateConf['extraData']['template'] = array(
            'class' => '-merge-view'
        );

        return $this;
    }

    /**
     * @Route("/booking/package-booking-service/get/{booking}/{id}",
     *     name="_booking__package_booking_service__get",
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
     * @Route("/booking/package-booking-service/add-step1/{booking}/{id}",
     *     name="_booking__package_booking_service__add_step1",
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
     * @Route("/booking/package-booking-service/add-step2/{booking}/{id}",
     *     name="_booking__package_booking_service__add_step2",
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
     * @Route("/booking/package-booking-service/add-step3/{booking}/{id}",
     *     name="_booking__package_booking_service__add_step3",
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
        $this->initChild($request, array($booking));
        $this->templateConf['fields']['form'] = array(
            'icon', 'name', 'description', 'supplierObj', 'reference', 'placeObj', 'placeToObj'
        );

        return parent::addStep3Action($request, $booking, $id);
    }

    /**
     * @Route("/booking/package-booking-service/add-step4/{booking}/{id}",
     *     name="_booking__package_booking_service__add_step4",
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
     * @Route("/booking/package-booking-service/add-step2-for-booking/{booking}/{id}",
     *     name="_booking__package_booking_service__add_step2_for_booking",
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
        $this->initChild($request, array($booking));
        // Keep session storage flag, because the child form is merged with the parent form,
        // otherwise the child is added to objects list in template and we want to handle them manually
        $this->responseConf['addObjectSessionStorageFlag'] = true;
        $this->localConf['templates']['addStep1'] = 'BookingBundle:PackageBooking:add-step2.html.twig';
        return parent::addStep1Action($request, $booking, $id);
    }

    /**
     * @Route("/booking/package-booking-service/add-step3-for-booking/{booking}/{id}",
     *     name="_booking__package_booking_service__add_step3_for_booking",
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
        $this->initChild($request, array($booking));
        // Keep session storage flag, because the child form is merged with the parent form,
        // otherwise the child is added to objects list in template and we want to handle them manually
        $this->responseConf['addObjectSessionStorageFlag'] = true;
        $this->localConf['templates']['addStep2'] = 'BookingBundle:PackageBooking:add-step3.html.twig';

        if (empty($id)) { // If id is not provided, no submit were made, get form.
            return parent::addStep2Action($request, $booking, $id);
        }

        // Configure response
        $this->responseConf['hasObject'] = false;

        parent::addStep2Action($request, $booking, $id);

        // Configure response
        $obj = $this->getObject($id);
        $packageServiceServices = $this->getAndSetPackageServiceServices($obj);
        $this->responseConf['hasObject'] = true;
        // Object updated with totals after grouping child services are updated
        $this->responseConf['object'] = $this->normalizeObject($obj);
        $this->responseConf['hasObjects'] = true;
        $this->responseConf['objects'] = $packageServiceServices;
        return $this->getResponse(true);
    }

    /**
     * @Route("/booking/package-booking-service/add-step4-for-booking/{booking}/{id}",
     *     name="_booking__package_booking_service__add_step4_for_booking",
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
        $this->initChild($request, array($booking));
        // Keep session storage flag, because the child form is merged with the parent form,
        // otherwise the child is added to objects list in template and we want to handle them manually
        $this->responseConf['addObjectSessionStorageFlag'] = true;

        $data = $this->getAndProcessRequestData($request);
        $data = array_combine(array_column($data['data'], 'packageServiceServiceObj'), $data['data']);

        // Note: Object is of type PackageBookingService that inherits BookingServices that has a foreign key to Service
        $obj = $this->getObject($id);

        $packageServiceServices = $this->getAndSetPackageServiceServices($obj, $data);

        // Config response
        $this->responseConf['hasObject'] = true;
        // Object updated with totals after grouping child services are updated
        $this->responseConf['object'] = $this->normalizeObject($obj);
        $this->responseConf['hasObjects'] = true;
        $this->responseConf['objects'] = $packageServiceServices;

        return $this->getResponse(true);
    }

    /**
     * Get and Set Package Service Services
     * Set child services of PackageService
     * @param $object
     * @param $data (data to handle with service children, if not provided default values are used)
     * @return array
     */
    protected function getAndSetPackageServiceServices($object, $data = null) {
        $bookingServiceObj = $object->getBookingServiceObj();
        $bookingObj = $bookingServiceObj->getBookingObj();
        $serviceObj = $bookingServiceObj->getServiceObj();
        $packageServiceServices = array(); // Array with services to sent in response

        // Remove previous PackageBookingService
        // Remove only child services (those that are the groupingBookingService filled)
        $packageBookingServiceObjArr = $this->container->get('app.service.session_storage')->getChildObjects(
            $bookingObj->getId(), // This is the parent of objects
            'PackageBookingService'
        );
        if (is_array($packageBookingServiceObjArr) && (count($packageBookingServiceObjArr) > 1)) {
            foreach ($packageBookingServiceObjArr as $packageBookingServiceObj) {
                if ($packageBookingServiceObj->getBookingServiceObj()->getGroupingBookingServiceObj()) {
                    $this->container->get('app.service.session_storage')
                        ->delete($packageBookingServiceObj->getId(), $bookingObj->getId());
                }
            }
        }

        // Get services of package
        if ($serviceObj) {
            // Get PackageService object (get from $serviceObj that is the your inherited object)
            $packageServiceObj = $this->getRepositoryService('PackageService', 'ServicesBundle')
                ->execute('findOneByServiceObj', array($serviceObj));

            // Get Services of PackageService
            $packageServiceServiceObjArr = $this->getRepositoryService('PackageServiceService', 'ServicesBundle')
                ->execute('findByPackageServiceObj', array($packageServiceObj, array('priority' => 'ASC')));

            if (is_array($packageServiceServiceObjArr) && (count($packageServiceServiceObjArr) > 0)) {
                // If data, then form is submitted and is not the default data, so need to be validated
                $hasValidation = !empty($data);

                foreach ($packageServiceServiceObjArr as $packageServiceServiceObj) {
                    $newObj = $this->newObject();
                    $newBookingServiceObj = $newObj->getBookingServiceObj();
                    $newBookingServiceObj->setGroupingBookingServiceObj($bookingServiceObj);

                    $packageServiceService_serviceObj = $packageServiceServiceObj->getServiceObj();

                    //////////////////////////////////////////////////////////////////////
                    // Override Service autoControls to PackageServiceService values
                    ////////////////////////////////////////////////////////////////////////////////

                    // AVAILABILITY
                    $availabilityType = $packageServiceServiceObj->getAvailability();
                    $isEnabledAvailability = false;
                    $availabilityTargetServiceObj = null;
                    switch ($availabilityType) {
                        case 'SERVICE':
                            $isEnabledAvailability = $packageServiceService_serviceObj->getIsEnabledAvailability();
                            //$availabilityTargetServiceObj = null; // (setted as default value)
                            break;
                        case 'PACKAGE':
                            $isEnabledAvailability = true;
                            $availabilityTargetServiceObj = $packageServiceService_serviceObj;
                            break;
                        case 'NONE':
                            //$isEnabledAvailability = false; // (setted as default value)
                            //$availabilityTargetServiceObj = null; // (setted as default value)
                            break;
                    }
                    // ALLOT
                    $allotType = $packageServiceServiceObj->getAllot();
                    $isEnabledAllot = false;
                    $allotTargetServiceObj = null;
                    switch ($allotType) {
                        case 'SERVICE':
                            $isEnabledAllot = $packageServiceService_serviceObj->getIsEnabledAllot();
                            //$allotTargetServiceObj = null; // (setted as default value)
                            break;
                        case 'PACKAGE':
                            $isEnabledAllot = true;
                            $allotTargetServiceObj = $packageServiceService_serviceObj;
                            break;
                        case 'NONE':
                            //$isEnabledAllot = false; // (setted as default value)
                            //$allotTargetServiceObj = null; // (setted as default value)
                            break;
                    }
                    // PRICE
                    $priceType = $packageServiceServiceObj->getPrice();
                    $isEnabledPrice = false;
                    $priceTargetServiceObj = null;
                    switch ($priceType) {
                        case 'SERVICE':
                            $isEnabledPrice = $packageServiceService_serviceObj->getIsEnabledPrice();
                            //$priceTargetServiceObj = null; // (setted as default value)
                            break;
                        case 'PACKAGE':
                            $isEnabledPrice = true;
                            $priceTargetServiceObj = $packageServiceService_serviceObj;
                            break;
                        case 'NONE':
                            //$isEnabledPrice = false; // (setted as default value)
                            //$priceTargetServiceObj = null; // (setted as default value)
                            break;
                    }

                    $packageServiceService_serviceObj->setIsEnabledAvailability($isEnabledAvailability);
                    $packageServiceService_serviceObj->setIsEnabledAllot($isEnabledAllot);
                    $packageServiceService_serviceObj->setIsEnabledPrice($isEnabledPrice);

                    ////////////////////////////////////////////////////////////////////////////////////////

                    $newBookingServiceObj->setServiceObj($packageServiceService_serviceObj);

                    // Data to be setted as default
                    $newObjDefaultData = array();
                    // We use "-1" to calculate the dates, because duration starts in "1" that is the day itself
                    $newObjDefaultData['startDate'] = (new \DateTime($bookingServiceObj->getStartDate()->format('Y-m-d')
                        .' +'.($packageServiceServiceObj->getDurationStartDay()-1).' day')
                    );
                    $newObjDefaultData['endDate'] = (new \DateTime($newObjDefaultData['startDate']->format('Y-m-d')
                        .' +'.($packageServiceServiceObj->getDurationDays()-1).' day')
                    );
                    $newObjDefaultData['priority'] = $packageServiceServiceObj->getPriority();
                    $newObjDefaultData['description'] = $packageServiceServiceObj->getDescription();
                    $this->setObjectDefaultValues($newObj, $newObjDefaultData);

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

                    // Add object if is not optional, or is optional but selected
                    if (!$packageServiceServiceObj->getIsOptional()
                        || ($packageServiceServiceObj->getIsOptional()
                            && !empty($data)
                            && isset($data[$packageServiceServiceObj->getId()])
                            && $data[$packageServiceServiceObj->getId()]['hasOptional']
                            // Need to use " != 'false'" because boolean coming as string
                            && ($data[$packageServiceServiceObj->getId()]['hasOptional'] != "false")
                        )
                    ) {
                        // Object is saved in session
                        $localParent = $this->flags['parent'];
                        $this->flags['parent'] = $bookingObj->getId();
                        $this->saveObjectToSS($newObj);
                        // Save $bookingServiceObj also, because it is the parent of BookingServicePrice
                        $this->flags['parent'] = $newObj->getId(); // With this parent cascade deletion works automatically
                        $this->saveObjectToSS($newBookingServiceObj);
                        $this->flags['parent'] = $localParent; // Reset to local parent

                        // Handle controls here after save the BookingService object
                        $this->handleAvailability($newBookingServiceObj, $availabilityTargetServiceObj, $hasValidation, false); // Set dates
                        $this->handleAllot($newBookingServiceObj, $allotTargetServiceObj, $hasValidation); // Set allot
                        $this->handlePrice($newBookingServiceObj, $priceTargetServiceObj, $hasValidation); // Reset price
                    } else {
                        // Disable controls
                        $packageServiceService_serviceObj->setIsEnabledAvailability(false);
                        $packageServiceService_serviceObj->setIsEnabledAllot(false);
                        $packageServiceService_serviceObj->setIsEnabledPrice(false);
                    }

                    $packageServiceServices[] = array(
                        'packageServiceServiceObj' => $packageServiceServiceObj->getId(),
                        'bookingServiceObj' => $newBookingServiceObj->getId(),
                        'thumbnail' => $packageServiceService_serviceObj->getThumbnail(),
                        'icon' => $packageServiceService_serviceObj->getAppIconObj()->getIcon(),
                        'name' => $packageServiceService_serviceObj->getName(),
                        'description' => $newBookingServiceObj->getDescription(),
                        'startDate' => $newBookingServiceObj->normalizeDate($newBookingServiceObj->getStartDate()),
                        'endDate' => $newBookingServiceObj->normalizeDate($newBookingServiceObj->getEndDate()),
                        'quantity' => $newBookingServiceObj->getQuantity(),
                        'isEnabledAvailability' => $packageServiceService_serviceObj->getIsEnabledAvailability(),
                        'isEnabledAllot' => $packageServiceService_serviceObj->getIsEnabledAllot(),
                        'isEnabledPrice' => $packageServiceService_serviceObj->getIsEnabledPrice(),
                        'isAutoAvailability' => $newBookingServiceObj->getIsAutoAvailability(),
                        'isAutoAllot' => $newBookingServiceObj->getIsAutoAllot(),
                        'isAutoPrice' => $newBookingServiceObj->getIsAutoPrice(),
                        'totalSell' => $newBookingServiceObj->getTotalSell(),
                        'isOptional' => $packageServiceServiceObj->getIsOptional(),
                        // This field controls if the optional service is to add or not (false by default)
                        // If the new object has id, then it was saved and service was added
                        'hasOptional' => ($newObj->getId() ? true : false),
                    );
                }
            }
        }

        return $packageServiceServices;
    }

    ///////////////////////////////////////////////////////////////////////


    /**
     * @Route("/booking/package-booking-service/edit/{booking}/{id}",
     *     name="_booking__package_booking_service__edit",
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
        $this->initChild($request, array($booking));
        $this->templateConf['fields']['form'] = array(
            'icon', 'name', 'description', 'supplierObj', 'reference', 'placeObj', 'placeToObj',
            'startDate', 'endDate',
            'quantity', 'confirmationStatus'
        );

        return parent::editLocalChildAction($request, $booking, $id);
    }

    /**
     * @Route("/booking/package-booking-service/cancel/{booking}/{id}",
     *     name="_booking__package_booking_service__cancel",
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
     * @Route("/booking/package-booking-service/delete/{booking}/{id}",
     *     name="_booking__package_booking_service__delete",
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
        $response = parent::deleteChildAction($request, $booking, $id);
        if ($this->responseConf['status'] == 1) {
            $this->setDependenciesPlaces();
        }
        return $response;
    }

    /**
     * @Route("/booking/package-booking-service/order/{booking}/{id}/{type}",
     *     name="_booking__package_booking_service__order",
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
     * @Route("/booking/package-booking-service/data/{booking}",
     *     name="_booking__package_booking_service__data"
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
     * @Route("/booking/package-booking-service/conf/{booking}",
     *     name="_booking__package_booking_service__conf"
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

    /**
     * @Route("/booking/package-booking-service/conf-for-booking/{booking}",
     *     name="_booking__package_booking_service__conf_for_booking"
     * )
     *
     * Overrides parent method
     * @param Request $request
     * @param $booking
     * @return mixed
     */
    public function confLocalChildForBookingAction(Request $request, $booking)
    {
        $this->initChild($request, array($booking));
        // Avoid DataService normalization (boolean)
        $this->templateConf['fields']['metadata']['isAutoAllot']['type'] = 'number';
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
        $serviceObj = $bookingServiceObj->getServiceObj();
        $endDate = null;

        if ($serviceObj) {
            // Get PackageService object (get from $serviceObj that is the your inherited object)
            $packageServiceObj = $this->getRepositoryService('PackageService', 'ServicesBundle')
                ->execute('findOneByServiceObj', array($serviceObj));

            if ($packageServiceObj) {
                if (!$packageServiceObj->getHasFixedDuration()) { // No fixed duration
                    $endDate = $defaultDate;
                } else {
                    $fixedDurationDays = $packageServiceObj->getFixedDurationDays();
                    $startDate = $bookingServiceObj->getStartDate();
                    $endDate = new \DateTime($startDate->format('Y-m-d'));
                    $endDate->modify('+' . $fixedDurationDays . ' day');
                }
            }
        }

        $bookingServiceObj->setEndDate($endDate);
        $bookingServiceObj->setDurationDays(null);

        return $this;
    }

    /**
     * Set places for dependencies
     * @return $this
     */
    protected function setDependenciesPlaces() {
        // Check if there are no errors in previous updates and the object is in database
        if (($this->responseConf['status'] == 1) && ($this->flags['storage'] == 'db')) {
            // Update package booking places
            $bookingObj = reset($this->parentConf)['obj']; // First parent
            $packageBookingObj = $this->getRepositoryService('PackageBooking', 'BookingBundle')
                ->execute('findOneByBookingObj', array($bookingObj));

            $this->getLocalRepositoryService()
                ->execute(
                    'setPackageBookingPlaces',
                    array($packageBookingObj)
                );
            parent::saveObject_static($this, $bookingObj);
        }

        return $this;
    }

    /**
     * Overrides parent method.
     * @param $object
     * @param $data (usually the form data)
     * @return $this
     */
    protected function postSaveObject($object, $data = null) {
        parent::postSaveObject($object, $data);

        // Check if there are no errors in previous updates
        if ($this->responseConf['status'] == 1) {
            $this->setDependenciesPlaces();
        }

        return $this;
    }
}