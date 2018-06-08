<?php

namespace Bck\BookingBundle\Controller;

use AppBundle\Controller\BaseEntityChildController;
use Bck\BookingBundle\Entity\BookingServicePrice;
use Sensio\Bundle\FrameworkExtraBundle\Configuration\Route;
use Bck\ServicesBundle\Controller\ServiceAllotController;
use Symfony\Component\HttpFoundation\Request;


/**
 * This class is the base for all booking service.
 * @package BckBookingBundle\Controller
 */
abstract class BaseBookingServiceController extends BaseEntityChildController
{
    /**
     * Get Local Booking Context.
     * @return mixed (lowerCamelCase)
     */
    abstract protected function getLocalBookingContext();

    /**
     * Get booking context (it needs to be implemented by children to get the correct context <regular, package, etc>)
     * @param $isUpperCase
     * @return mixed (lowerCamelCase)
     */
    public function getBookingContext($isUpperCase = false) {
        return ($isUpperCase ? ucfirst($this->getLocalBookingContext()) : $this->getLocalBookingContext());
    }

    /**
     * DEFINE ROUTE HERE
     *
     * Add step 1
     * @param Request $request
     * @param $booking
     * @param $id
     * @return mixed
     */
    public function addStep1Action(Request $request, $booking, $id)
    {
        $bookingContextUC = $this->getBookingContext(true);

        // Set configuration only if not initialized (can be initialized by a children)
        if (!$this->isInitialized) {
            $this->flags['storage'] = 'session'; // Session storage is used
            $this->flags['hasForm'] = true;
            $this->init($request, array($booking));
        }
        // Field to be rendered in form (this configuration for Angular "FormService" is defined in "provider")
        $this->templateConf['fields']['form'] = array('serviceObj');

        $obj = $this->getObject($id);

        // Build form
        $form = $this->createForm('Bck\BookingBundle\Form\\'.$bookingContextUC.'BookingServiceAddStep1Type', $obj);

        // Handle request
        $form->handleRequest($request);

        // Check if is submitted
        if($form->isSubmitted()) {
            // Set default values again, service can be changed.
            $this->setObjectDefaultValues($obj);

            // Object is saved in session
            $this->responseConf['hasObject'] = false; // Object will be changed bellow
            $this->saveForm($form, $obj);
            // Save $bookingServiceObj also, because it is the parent of BookingServicePrice
            $bookingServiceObj = $obj->getBookingServiceObj();
            $localParent = $this->flags['parent'];
            $this->flags['parent'] = $obj->getId(); // With this parent cascade deletion works automatically
            $this->saveObjectToSS($bookingServiceObj);
            $this->flags['parent'] = $localParent; // Reset to local parent

            // Handle controls here after save the BookingService object
            $this->handleAvailability($bookingServiceObj, null, false, true); // Set dates
            $this->handleAllot($this, $bookingServiceObj, null, false); // Set allot
            $this->handlePrice($bookingServiceObj, null, false); // Reset price

            // Set response
            $this->responseConf['hasObject'] = true;
            $this->responseConf['object'] = $this->normalizeObject($obj); // Set updated object
            return $this->getResponse();
        }

        // Render form
        return $this->render($this->localConf['templates']['addStep1'], array(
            '_conf' => $this->templateConf,
            '_form' => $form->createView(),
            '_containers' => array(
                array(
                    'label' => 'Service'
                ),
                array(
                    'label' => 'Dates'
                ),
                array(
                    'label' => 'Detail'
                ),
                array(
                    'label' => 'Preview'
                )
            )
        ));
    }

    /**
     * DEFINE ROUTE HERE
     *
     * Action to add dates, allot and price of object
     * @param Request $request
     * @param $booking
     * @param $id
     * @return mixed
     */
    public function addStep2Action(Request $request, $booking, $id)
    {
        $bookingContextUC = $this->getBookingContext(true);

        // Set configuration only if not initialized (can be initialized by a children)
        if (!$this->isInitialized) {
            $this->flags['storage'] = 'session'; // Session storage is used
            $this->flags['hasForm'] = true;
            $this->init($request, array($booking));
        }
        $this->templateConf['fields']['form'] = array(
            'startDateManual', 'endDateManual', 'quantityManual',
            'confirmationStatus', 'confirmationStatusManual',
            'isAutoAvailability', 'isAutoAllot', 'isAutoPrice'
        );

        $obj = $this->getObject($id);

        // Build form
        $form = $this->createForm('Bck\BookingBundle\Form\\' . $bookingContextUC . 'BookingServiceAddStep2Type', $obj);

        // Handle request
        $form->handleRequest($request);

        // Check if is submitted
        if($form->isSubmitted()) {
            $data = $this->getRequestData($request);
            $bookingServiceObj = $obj->getBookingServiceObj();

            // Validate quantity
            if ($data['form']['bookingServiceObj']['quantityManual'] < 1) {
                $this->responseConf['status'] = 0;
                $this->addFlashMessage(
                    'Invalid quantity was detected.',
                    'Error',
                    'error'
                );
                return $this->getResponse();
            }
            // Set quantity manually (from the fake field)
            $bookingServiceObj->setQuantity($data['form']['bookingServiceObj']['quantityManual']);

            // Control errors. We need to call always the availability, allot and price to sent the debug update to user
            $hasError = false;

            // Availability
            // Set dates manually (from the fake fields)
            $bookingServiceObj->setStartDate(new \DateTime($data['form']['bookingServiceObj']['startDateManual']));
            $this->setEndDate($bookingServiceObj, new \DateTime($data['form']['bookingServiceObj']['endDateManual']));
            if (!$this->handleAvailability($bookingServiceObj)) {
                $hasError = true;
            }

            // Allot
            // @TODO: this is necessary????: Default value (if auto allot is enabled this value will be override)
            $bookingServiceObj->setConfirmationStatus($data['form']['bookingServiceObj']['confirmationStatusManual']);
            if (!$this->handleAllot($this, $bookingServiceObj)) {
                $hasError = true;
            }

            // Price
            if (!$this->handlePrice($bookingServiceObj)) {
                $hasError = true;
            }

            if ($hasError) {
                $this->clearFlashMessage();
                $this->addFlashMessage(
                    'Selected dates have no confirmation.',
                    'Error',
                    'error'
                );
            }

            $this->saveForm($form, $obj);

            return $this->getResponse();
        }

        // Render form
        return $this->render($this->localConf['templates']['addStep2'], array(
            '_conf' => $this->templateConf,
            '_form' => $form->createView()
        ));
    }

    /**
     * DEFINE ROUTE HERE
     *
     * Action to add detail info of object
     * @param Request $request
     * @param $booking
     * @param $id
     * @return mixed
     */
    public function addStep3Action(Request $request, $booking, $id)
    {
        $bookingContextUC = $this->getBookingContext(true);

        // Set configuration only if not initialized (can be initialized by a children)
        if (!$this->isInitialized) {
            $this->flags['storage'] = 'session'; // Session storage is used
            $this->flags['hasForm'] = true;
            $this->init($request, array($booking));
            $this->templateConf['fields']['form'] = array(
                'name', 'description', 'supplierObj', 'reference', 'placeObj', 'placeToObj'
            );
        }

        $obj = $this->getObject($id);

        // Build form
        $form = $this->createForm('Bck\BookingBundle\Form\\' . $bookingContextUC . 'BookingServiceAddStep3Type', $obj);

        // Handle request
        $form->handleRequest($request);

        // Check if is submitted
        if($form->isSubmitted()) {
            $this->saveForm($form, $obj);

            return $this->getResponse();
        }

        // Render form
        return $this->render($this->localConf['templates']['addStep3'], array(
            '_conf' => $this->templateConf,
            '_form' => $form->createView()
        ));
    }

    /**
     * DEFINE ROUTE HERE
     *
     * Action to save all objects in database
     * @param Request $request
     * @param $booking
     * @param $id
     * @return mixed
     */
    public function addStep4Action(Request $request, $booking, $id)
    {
        $bookingContextUC = $this->getBookingContext(true);

        $this->flags['storage'] = 'session'; // Session storage is used
        $this->flags['hasForm'] = true;
        $this->init($request, array($booking));

        $obj = $this->getObject($id);

        $bookingServiceObj = $obj->getBookingServiceObj();

        // Check dates (ensure that dates continues valid)
        if (!$this->handleAvailability($bookingServiceObj)) {
            return $this->getResponse();
        }

        // Check allot (ensure that allot continue valid)
        if (!$this->handleAllot($this, $bookingServiceObj)) {
            return $this->getResponse();
        }

        // NOTE: Price is not checked here, because in the previous step the user can change and customize the prices

        // Save session ids to remove or restore objects in session storage.
        $sessionIds = array(
            'localBookingService' => $obj->getId(),
            'bookingService' => $bookingServiceObj->getId(),
            'bookingServicePrice' => array()
        );

        // Get detail objects
        $detailObjects = $this->container->get('app.service.session_storage')->getChildObjects(
            $bookingServiceObj->getId(), // This is the parent of objects
            'BookingServicePrice'
        );

        // Clear id to may be saved in database
        $obj->setId(null);
        $bookingServiceObj->setId(null);

        // Save object in entity manager
        $this->flags['storage'] = 'db'; // Switch storage to database
        $this->saveObject($obj, false); // Doesn't flush data until all objects are inserted

        // Save detail objects in database
        foreach ($detailObjects as $detailObj) {
            // Get object to set again foreign objects, otherwise the save will fail,
            // because entity manager does not recognize the foreign objects saved in session storage
            $detailObj = $this->getObjectFromSS($detailObj->getId());

            // Clear id to may be saved in database
            $sessionIds['bookingServicePrice'][] = $detailObj->getId();
            $detailObj->setId(null);

            parent::saveObject($detailObj, false); // Doesn't flush data until all objects are inserted
        }

        // Flush (persist) all objects in database
        $this->flushEm();
        $this->postSaveObject($obj);

        if ($this->responseConf['status'] == 1) {
            // Remove objects from session
            $this->deleteObjectFromSS($sessionIds['localBookingService']);

            // Flash messages to display to user
            $this->addFlashMessage(
                'The data has been updated',
                'Success',
                'success'
            );
        } else {
            // Restore session storage id
            $obj->setId($sessionIds['localBookingService']);
            $bookingServiceObj->setId($sessionIds['bookingService']);

            $documentDetailIndex = 0;
            foreach ($detailObjects as $detailObj) {
                $detailObj->setId($sessionIds['bookingServicePrice'][$documentDetailIndex]);
                $documentDetailIndex++;
            }
        }

        // Configure response
        $this->responseConf['hasObject'] = true;
        $this->responseConf['object'] = $this->normalizeObject($obj); // Object updated

        return $this->getResponse();
    }

    /**
     * DEFINE ROUTE HERE
     *
     * Overrides parent method
     * @param Request $request
     * @param $booking
     * @param $id
     * @return mixed
     */
    public function editLocalChildAction(Request $request, $booking, $id)
    {
        $bookingContextUC = $this->getBookingContext(true);

        // Set configuration only if not initialized (can be initialized by a children)
        if (!$this->isInitialized) {
            $this->flags['hasForm'] = true;
            $this->init($request, array($booking));
            $this->templateConf['fields']['form'] = array(
                'name', 'description', 'supplierObj', 'reference', 'placeObj', 'placeToObj',
                'startDate', 'endDate',
                'quantity', 'confirmationStatus',
                'isEnabled');
        }

        $obj = $this->getObject($id);
        $bookingServiceObj = $obj->getBookingServiceObj();

        // Avoid data tampering by user. If $id is defined, limit fields, else render all fields for template/view
        if (empty($id)) {
            array_push(
                $this->templateConf['fields']['form'],
                'startDateManual', 'endDateManual', 'quantityManual', 'confirmationStatusManual'
            );
            $this->localConf['formTypeClass'] = ('Bck\BookingBundle\Form\\' . $bookingContextUC . 'BookingServiceAllManualType');
        } else {
            if (!$bookingServiceObj->getIsAutoAllot()) {
                array_push($this->templateConf['fields']['form'], 'quantityManual', 'confirmationStatusManual');
                if (!$bookingServiceObj->getIsAutoAvailability()) {
                    array_push($this->templateConf['fields']['form'], 'startDateManual', 'endDateManual');
                    $this->localConf['formTypeClass'] = ('Bck\BookingBundle\Form\\' . $bookingContextUC . 'BookingServiceAllManualType');
                } else {
                    $this->localConf['formTypeClass'] = ('Bck\BookingBundle\Form\\' . $bookingContextUC . 'BookingServiceManualAllotType');
                }
            }
        }

        // Old values to make validations
        $oldValues = array(
            'startDate' => $bookingServiceObj->getStartDate(),
            'endDate' => $bookingServiceObj->getEndDate(),
            'quantity' => $bookingServiceObj->getQuantity(),
            'confirmationStatus' => $bookingServiceObj->getConfirmationStatus()
        );

        // Build form
        $form = $this->createForm($this->localConf['formTypeClass'], $obj);

        // Handle request
        $form->handleRequest($request);

        // Check if is submitted
        if($form->isSubmitted()) {
            $data = $this->getRequestData($request);

            //////////////////////
            // ALLOT
            ////////////////////////////////////
            // Can not edit allot (quantity, confirmationStatus)
            if ($bookingServiceObj->getIsAutoAllot()) {
                // Check if values was not forced to change
                if (
                    ($bookingServiceObj->getQuantity() != $oldValues['quantity']) ||
                    ($bookingServiceObj->getConfirmationStatus() != $oldValues['confirmationStatus'])
                ) {
                    $this->responseConf['status'] = 0;
                    $this->addFlashMessage(
                        'Quantity and Confirmation Status can not be changed (auto allot is enabled).',
                        'Error',
                        'error'
                    );
                    return $this->getResponse();
                }
            }
            // Can edit allot (quantity, confirmationStatus)
            else {
                // Manual allot
                $bookingServiceObj->setConfirmationStatus($data['form']['bookingServiceObj']['confirmationStatusManual']);
                $bookingServiceObj->setAllotTargetServiceObj(null);

                // Quantity can be edited. Validates and set quantity manually (from the fake field)
                if ($data['form']['bookingServiceObj']['quantityManual'] < 1) {
                    $this->responseConf['status'] = 0;
                    $this->addFlashMessage(
                        'Invalid quantity was detected.',
                        'Error',
                        'error'
                    );
                    return $this->getResponse();
                }
                $bookingServiceObj->setQuantity($data['form']['bookingServiceObj']['quantityManual']);
            }

            //////////////////////
            // DATES
            ////////////////////////////////////
            // Can not edit dates (startDate, endDate)
            if ($bookingServiceObj->getIsAutoAvailability() || $bookingServiceObj->getIsAutoAllot()) {
                // Check if values was not forced to change
                if (
                    ($bookingServiceObj->getStartDate() != $oldValues['startDate']) ||
                    ($bookingServiceObj->getEndDate() != $oldValues['endDate'])
                ) {
                    $this->responseConf['status'] = 0;
                    $this->addFlashMessage(
                        'Dates can not be changed (auto availability/allot is enabled)',
                        'Error',
                        'error'
                    );
                    return $this->getResponse();
                }
            }
            // Can edit dates
            else {
                // Basic date validation
                if ($data['form']['bookingServiceObj']['endDateManual'] < $data['form']['bookingServiceObj']['startDateManual']) {
                    $this->responseConf['status'] = 0;
                    $this->addFlashMessage(
                        'Invalid data range.',
                        'Data not persisted',
                        'error'
                    );
                    return $this->getResponse();
                }

                // Manual availability
                $bookingServiceObj->setStartDate(new \DateTime($data['form']['bookingServiceObj']['startDateManual']));
                $this->setEndDate($bookingServiceObj, new \DateTime($data['form']['bookingServiceObj']['endDateManual']));
            }

            $this->saveForm($form, $obj);
            // Update all dependencies, values can be changed or service "isEnabled" may have been changed
            $this->postSaveObject($obj);

            return $this->getResponse();
        }

        // Render form
        return $this->render($this->localConf['templates']['edit'], array(
            '_conf' => $this->templateConf,
            '_form' => $form->createView()
        ));
    }

    /**
     * [SET ROUTE HERE]
     *
     * Overrides parent method
     * @param Request $request
     * @param $booking
     * @param $id
     * @return mixed
     */
    public function cancelLocalChildAction(Request $request, $booking, $id)
    {
        // Set configuration
        $this->init($request, array($booking));

        // Get object
        $obj = $this->getObject($id);
        $bookingServiceObj = $obj->getBookingServiceObj();

        // If object will be enabled (is disabled) and has autoAllot, we need to check the allot,
        // allot can be not available any more.
        if (!$bookingServiceObj->getIsEnabled()) {
            if (!$this->handleAllot($this, $bookingServiceObj, $bookingServiceObj->getAllotTargetServiceObj())) {
                return $this->getResponse();
            }
        }

        return parent::cancelChildAction($request, array($booking), $id);
    }

    /**
     * DEFINE ROUTE HERE
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
     * DEFINE ROUTE HERE
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
     * Overrides parent method
     * @param $object
     * @param $defaultData (data with default values. This option is used by packages of services)
     * @return $this
     */
    protected function setObjectDefaultValues($object, $defaultData = array())
    {
        parent::setObjectDefaultValues($object);

        $bookingServiceObj = $object->getBookingServiceObj();

        // Check if form is already submitted and setted the "Service" (the base to set default values),
        // otherwise object is new and there are no info.
        if ($serviceObj = $bookingServiceObj->getServiceObj()) {
            $bookingServiceObj->setServiceObj($serviceObj);
            $bookingServiceObj->setPriority(1);
            $bookingServiceObj->setDescription($serviceObj->getDescription());
            $quantity = (isset($defaultData['quantity']) ? $defaultData['quantity'] : 1);
            $bookingServiceObj->setQuantity($quantity);
            $bookingServiceObj->setIsAutoAllot($serviceObj->getIsEnabledAllot());
            // Default allot is not validated and allocated at all,
            // if no allot are available, then user needs to validate and allocate correctly the allot
            $bookingServiceObj->setConfirmationStatus("NO");
            $bookingServiceObj->setTotalVatCost(0);
            $bookingServiceObj->setTotalVatSell(0);
            $bookingServiceObj->setSubTotalCost(0);
            $bookingServiceObj->setSubTotalSell(0);
            $bookingServiceObj->setTotalMargin(0);
            $bookingServiceObj->setTotalMarkup(0);
            $bookingServiceObj->setTotalProfit(0);
            // Fake fields to handle with controls
            $bookingServiceObj->setIsAutoAvailability($serviceObj->getIsEnabledAvailability());
            $bookingServiceObj->setIsAutoPrice($serviceObj->getIsEnabledPrice());

            $startDate = (isset($defaultData['startDate']) ? $defaultData['startDate'] : null);
            $endDate = (isset($defaultData['endDate']) ? $defaultData['endDate'] : null);
            if ($startDate && $endDate) {
                $bookingServiceObj->setStartDate($startDate);
                // Call self to use the default method, not the override method
                self::setEndDate($bookingServiceObj, $endDate);
            }
        }

        return $this;
    }


    //////////////////////////////////////////////////////////
    // AVAILABILITY
    //////////////////////////////////////////////////////////

    /**
     * Handle Availability
     * @param $bookingServiceObj
     * @param $availabilityTargetServiceObj (target service object, to get availability of specific service (like packages))
     * @param $hasValidation
     * @param $hasDefaultValues
     * @param $hasDatePickerControl (if enabled add entry for date picker control)
     * @return bool
     */
    protected function handleAvailability(
        $bookingServiceObj, $availabilityTargetServiceObj = null, $hasValidation = true,
        $hasDefaultValues = false, $hasDatePickerControl = true
    ) {
        $currentAvailabilityDateRanges = $this->getCurrentAvailability(
            $bookingServiceObj, $availabilityTargetServiceObj, $hasDatePickerControl
        );

        // Set default dates
        if ($hasDefaultValues) {
            $currentDateTime = new \DateTime();
            $startDate = (new \DateTime($currentDateTime->format('Y-m-d').' +5 day')); // Remove time to avoid inquiries in durationDays
            $endDate = null;
            if ($currentAvailabilityDateRanges && (count($currentAvailabilityDateRanges) > 0)) {
                // Default dates based on first valid range
                $firstRange = reset($currentAvailabilityDateRanges);
                $firstRange = array(
                    'startDate' => (new \DateTime($firstRange['startDate'])),
                    'endDate' => (new \DateTime($firstRange['endDate']))
                );

                $startDate = (($firstRange['startDate'] > $startDate) ? $firstRange['startDate'] : $startDate);
                $endDate = new \DateTime($startDate->format('Y-m-d'));
                $endDate->modify('+2 day');
                $endDate = (($firstRange['endDate'] < $endDate) ? $firstRange['endDate'] : $endDate);
            } else {
                $endDate = new \DateTime($startDate->format('Y-m-d'));
                $endDate->modify('+2 day');
            }
            $bookingServiceObj->setStartDate($startDate);
            $this->setEndDate($bookingServiceObj, $endDate);
        }

        $this->setAvailabilityDebug($bookingServiceObj);

        if ($hasValidation) {
            return $this->validateAvailability($bookingServiceObj);
        }

        return true;
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
        $bookingServiceObj->setEndDate($defaultDate);
        $bookingServiceObj->setDurationDays(null);

        return $this;
    }

    /**
     * Get current availability date ranges
     * @param $bookingServiceObj
     * @param $availabilityTargetServiceObj (target service object, to get availability of specific service (like packages))
     * @param $hasDatePickerControl (if enabled add entry for date picker control)
     * @return array
     */
    protected function getCurrentAvailability(
        $bookingServiceObj, $availabilityTargetServiceObj = null, $hasDatePickerControl = true
    ) {
        $currentAvailability = null;

        $serviceObj = $bookingServiceObj->getServiceObj();

        // Check if availability is enabled
        if ($bookingServiceObj->getIsAutoAvailability()) {
            // Get available dates
            $currentAvailability = $this->getRepositoryService('ServiceAvailability', 'ServicesBundle', 'Bck')->execute(
                'getCurrentAvailability',
                array($serviceObj, $availabilityTargetServiceObj)
            );
        }

        // Set response configuration
        $this->templateConf['localData']['data'][$bookingServiceObj->getId()]['availability'] = $currentAvailability;
        if ($hasDatePickerControl) {
            // Used to limit date ranges in date picker control (only should be added for main service)
            $this->templateConf['localData']['data']['availability'] = $currentAvailability;
        }

        return $currentAvailability;
    }

    /**
     * Set debug
     * @param $bookingServiceObj
     * @return array
     */
    protected function setAvailabilityDebug($bookingServiceObj)
    {
        // Availability should be setted before by "getCurrentAvailability" called by "handleAvailability"
        $currentAvailability = $this->templateConf['localData']['data'][$bookingServiceObj->getId()]['availability'];

        $debug = array(
            'status' => 'NO',
            'detail' => array()
        ); // To send to view

        // Check if availability is enabled
        if ($bookingServiceObj->getIsAutoAvailability()) {
            // Check dates against data ranges for debug
            $startDate = $bookingServiceObj->getStartDate();
            $endDate = $bookingServiceObj->getEndDate();
            $duration = $bookingServiceObj->getDurationDays();
            // Set limit of days, otherwise the difference can be very large and break the process
            if ($duration > 90) { // Max 3 months
                $this->responseConf['status'] = 0;
                $this->addFlashMessage(
                    'Invalid data range (> 90 days).',
                    'Data not persisted',
                    'error'
                );
                $this->handleExit(null, true);
            } else {
                $statusCounter = array('NO' => 0, 'YES' => 0, 'TOTAL' => 0); // Used to determine the general status

                $date = $startDate->format('Y-m-d');
                $endTime = strtotime($endDate->format('Y-m-d'));
                while (strtotime($date) <= $endTime) {
                    $isDateValidated = false;
                    foreach ($currentAvailability as $availabilityDate) {
                        if (($date >= $availabilityDate['startDate']) && ($date <= $availabilityDate['endDate'])) {
                            $isDateValidated = true;
                            break;
                        }
                    }

                    $status = ($isDateValidated ? 'YES' : 'NO');
                    $debug['detail'][] = array(
                        'date' => $date,
                        'status' => $status
                    );
                    $statusCounter[$status]++;
                    $statusCounter['TOTAL']++;

                    $date = date("Y-m-d", strtotime("+1 day", strtotime($date)));
                }

                // Set general status
                if ($statusCounter['YES'] == $statusCounter['TOTAL']) {
                    $debug['status'] = 'YES';
                } elseif ($statusCounter['NO'] == $statusCounter['TOTAL']) {
                    $debug['status'] = 'NO';
                } else {
                    $debug['status'] = 'PARTIAL';
                }
            }
        }

        // Set response configuration (booking id is needed to distinguish the service in case of packages)
        $this->templateConf['localData']['data'][$bookingServiceObj->getId()]['availabilityDebug'] = $debug;

        return $debug;
    }

    /**
     * Validate availability
     * @param $bookingServiceObj
     * @return bool
     */
    protected function validateAvailability($bookingServiceObj)
    {
        // Validate dates
        $startDate = $bookingServiceObj->getStartDate();
        $endDate = $bookingServiceObj->getEndDate();

        $errorMessage = null;

        if (($startDate < date("Y-m-d")) || ($endDate < $startDate)) {
            $errorMessage = 'Invalid date range.';
        } elseif ($bookingServiceObj->getIsAutoAvailability()
            // Status should be setted before by "setAvailabilityDebug" called by "handleAvailability"
            && ($this->templateConf['localData']['data'][$bookingServiceObj->getId()]['availabilityDebug']['status'] != 'YES')
        ) {
            $errorMessage = 'No availability for these dates.';
        }

        // Set error
        if ($errorMessage) {
            $this->responseConf['status'] = 0;
            $this->addFlashMessage(
                $errorMessage,
                'Data not persisted',
                'error'
            );
            return false;
        }

        return true;
    }


    //////////////////////////////////////////////////////////
    // ALLOT
    //////////////////////////////////////////////////////////

    /**
     * Handle Allot
     * @param $controller
     * @param $bookingServiceObj
     * @param $allotTargetServiceObj (target service object, to get allot of specific service (like packages))
     * @param $hasValidation
     * @return boolean
     */
    static function handleAllot($controller, $bookingServiceObj, $allotTargetServiceObj = null, $hasValidation = true)
    {
        $debug = self::getCurrentAllotAndSetDebug($controller, $bookingServiceObj, $allotTargetServiceObj);

        // Check if allot is enabled
        if ($bookingServiceObj->getIsAutoAllot()) {
            // Auto allot
            $bookingServiceObj->setConfirmationStatus($debug['status']);
            $bookingServiceObj->setAllotTargetServiceObj($allotTargetServiceObj);
        } else {
            // Manual allot
            $bookingServiceObj->setAllotTargetServiceObj(null);
        }

        if ($hasValidation) {
            return self::validateAllot($controller, $bookingServiceObj);
        }

        return true;
    }

    /**
     * Get current allot and set debug
     * @param $controller
     * @param $bookingServiceObj
     * @param $allotTargetServiceObj (target service object, to get allot of specific service (like packages))
     * @return array
     */
    static function getCurrentAllotAndSetDebug($controller, $bookingServiceObj, $allotTargetServiceObj = null)
    {
        $debug = array(
            'status' => 'NO',
            'detail' => array()
        ); // To send to view

        $serviceObj = $bookingServiceObj->getServiceObj();

        // Check if allot is enabled
        if ($bookingServiceObj->getIsAutoAllot()) {
            $startDate = $bookingServiceObj->getStartDate();
            $endDate = $bookingServiceObj->getEndDate();
            $quantityToValidate = $bookingServiceObj->getQuantity();
            $statusCounter = array('NO' => 0, 'YES' => 0, 'TOTAL' => 0); // Used to determine the general status

            $date = $startDate->format('Y-m-d');
            $endTime = strtotime($endDate->format('Y-m-d'));
            while (strtotime($date) <= $endTime) {
                $allotInfo = ServiceAllotController
                    ::getAllotInfoByDate($controller, $serviceObj, $date, $allotTargetServiceObj);
                $status = (($allotInfo['free'] < $quantityToValidate) ? 'NO' : 'YES');

                $debug['detail'][] = array(
                    'date' => $date,
                    'type' => $allotInfo['type'],
                    'total' => $allotInfo['total'],
                    'free' => $allotInfo['free'],
                    'status' => $status
                );
                $statusCounter[$status]++;
                $statusCounter['TOTAL']++;

                $date = date("Y-m-d", strtotime("+1 day", strtotime($date)));
            }

            // Set general status
            if ($statusCounter['YES'] == $statusCounter['TOTAL']) {
                $debug['status'] = 'YES';
            } elseif ($statusCounter['NO'] == $statusCounter['TOTAL']) {
                $debug['status'] = 'NO';
            } else {
                $debug['status'] = 'PARTIAL';
            }
        }

        // Set response configuration (booking id is needed to distinguish the service in case of packages)
        $controller->templateConf['localData']['data'][$bookingServiceObj->getId()]['allotDebug'] = $debug;

        return $debug;
    }

    /**
     * Validate allot
     * @param $controller
     * @param $bookingServiceObj
     * @return bool
     */
    static function validateAllot($controller, $bookingServiceObj)
    {
        $errorMessage = null;

        if ($bookingServiceObj->getIsAutoAllot()
            // Status should be setted before by "getCurrentAllotAndSetDebug" called by "handleAllot"
            && ($controller->templateConf['localData']['data'][$bookingServiceObj->getId()]['allotDebug']['status'] != 'YES')
        ) {
            $errorMessage = 'Allot not available.';
        }

        // Set error
        if ($errorMessage) {
            $controller->responseConf['status'] = 0;
            $controller->addFlashMessage(
                $errorMessage,
                'Data not persisted',
                'error'
            );
            return false;
        }

        return true;
    }


    //////////////////////////////////////////////////////////
    // PRICE
    //////////////////////////////////////////////////////////

    /**
     * Handle Price
     * @param $bookingServiceObj
     * @param $priceTargetServiceObj (target service object, to get price of specific service (like packages))
     * @param $hasValidation
     * @param $hasUpdateGrouperService (determines if the grouperService will be updated. Generally the grouperService
     *     must be updated, however in some cases you can want update the groupService only after finish a loop that
     *     handles with multiple grouped services, thus avoiding update de grouperService for each grouped service
     *     that is handled in the loop)
     * @return boolean
     */
    protected function handlePrice($bookingServiceObj, $priceTargetServiceObj = null,
                                   $hasValidation = true, $hasUpdateGrouperService = true
    ) {
        $debug = array(
            'status' => 'NO',
            'detail' => array()
        ); // To send to view

        $serviceObj = $bookingServiceObj->getServiceObj();

        // Reset any price setted before
        $this->resetServicePriceFromSS($bookingServiceObj, $hasUpdateGrouperService);

        // Check if price is enabled
        if ($bookingServiceObj->getIsAutoPrice()) {
            // Set vars
            $startDate = $bookingServiceObj->getStartDate();
            $endDate = $bookingServiceObj->getEndDate();
            $vatCodeObj = $serviceObj->getVatCodeObj();
            $vatCodePercentage = $vatCodeObj->getPercentage();
            $quantity = $bookingServiceObj->getQuantity();

            // Price service to make calculus
            $priceService = $this->get('app.service.price');

            // Contents the price sum by different entries (id - price and price exceptions).
            $priceSumByIdArr = array();

            // Used to determine the general status
            $statusCounter = array('NO' => 0, 'YES' => 0, 'TOTAL' => 0);

            // Get price for each day
            $date = $startDate->format('Y-m-d');
            $endTime = strtotime($endDate->format('Y-m-d'));
            while (strtotime($date) <= $endTime) {
                // Base price to use to determine price exceptions
                // (first occurrence is used, because can have more occurrences)
                $basePrice = array();

                // Detail of price debug
                $debugDetail = array();

                ////////
                // PRICE (BASE)
                ////////////////////////////////
                $options = array('fields' => array(
                    'serviceObj', 'id', 'description', 'costValue',
                    'marginMethod', 'marginValue', 'sellValue', 'userFieldTyped'
                ));
                $priceArr = $this->getRepositoryService('ServicePrice', 'ServicesBundle', 'Bck')->execute(
                    'getCurrentPriceByDate',
                    array(
                        $serviceObj,
                        $date,
                        $options,
                        $priceTargetServiceObj
                    )
                );
                foreach ($priceArr as $price) {
                    // Set values
                    $totalUnitCostDetail = $priceService->getTotalUnitDetail($price['costValue'], $vatCodePercentage, false);
                    $totalUnitSellDetail = $priceService->getTotalUnitDetail($price['sellValue'], $vatCodePercentage, false);

                    // Define base price for price exception
                    if (empty($basePrice)) {
                        $basePrice = array(
                            'costValue' => $totalUnitCostDetail['value'],
                            'sellValue' => $totalUnitSellDetail['value']
                        );
                    }

                    $debugDetail[] = array(
                        'description' => $price['description'],
                        'costValue' => (
                            $totalUnitCostDetail['totalUnit']
                            . ' (' . $totalUnitCostDetail['value'] . ' + ' . $totalUnitCostDetail['vatValue'] . ' VAT' . $vatCodePercentage . '%)'
                        ),
                        'sellValue' => (
                            $totalUnitSellDetail['totalUnit']
                            . ' (' . $totalUnitSellDetail['value'] . ' + ' . $totalUnitSellDetail['vatValue'] . ' VAT' . $vatCodePercentage . '%)'
                        ),
                    );

                    // Grouped price
                    if (isset($priceSumByIdArr[$price['id']])) {
                        $priceSumByIdArr[$price['id']]['numDays']++;
                    } else {
                        $priceSumByIdArr[$price['id']] = array(
                            'description' => $price['description'],
                            'postingType' => 'DEBIT',
                            'marginMethod' => $price['marginMethod'],
                            'marginValue' => $price['marginValue'],
                            'userFieldTyped' => $price['userFieldTyped'],
                            'numDays' => 1,
                            'costValue' => $totalUnitCostDetail['value'],
                            'sellValue' => $totalUnitSellDetail['value'],
                            'vatValueCost' => $totalUnitCostDetail['vatValue'],
                            'vatValueSell' => $totalUnitSellDetail['vatValue']
                        );
                    }
                }
                // Controls if price was been found (based only in base price)
                $status = ((count($debugDetail) > 0) ? 'YES' : 'NO');

                ////////
                // PRICE EXCEPTION (SUPPLEMENTS AND DISCOUNTS) (if credit subtract value, else some)
                ////////////////////////////////
                $options = array('fields' => array(
                    'id', 'description', 'postingType',
                    'costMethod', 'costBaseValue', 'costValue',
                    'marginMethod', 'marginBaseValue', 'marginValue'
                ));
                $priceArr = $this->getRepositoryService('ServicePriceException', 'ServicesBundle', 'Bck')->execute(
                    'getCurrentPriceExceptionByDate',
                    array(
                        $serviceObj,
                        $date,
                        $options,
                        $priceTargetServiceObj
                    )
                );
                foreach ($priceArr as $price) {
                    // Determines cost price
                    $costValue = 0;
                    switch ($price['costBaseValue']) {
                        case 'BASE_COST':
                            $costValue = $basePrice['costValue'];
                            break;
                    }
                    switch ($price['costMethod']) {
                        case 'PERCENT':
                            $costValue = round($costValue * ($price['costValue'] / 100), 2);
                            break;
                        case 'FIXED':
                            $totalUnitCostDetail = $priceService->getTotalUnitDetail($price['costValue'], $vatCodePercentage, false);
                            $costValue = round($costValue + $totalUnitCostDetail['value'], 2);
                            break;
                    }
                    // Determines sell price
                    $sellValue = 0;
                    // To get base value + percentage of base value (when we want one percent over cost, is this case we
                    // never get the value bellow than the base value, that is the cost)
                    $baseForPercentMultiplier = 1;
                    switch ($price['marginBaseValue']) {
                        case 'COST':
                            $sellValue = $costValue;
                            break;
                        case 'BASE_SELL':
                            $sellValue = $basePrice['sellValue'];
                            // To get only a percentage of base value (when we want one percent over sell, ie: 50% is half
                            // of base value, 150% is the base value + half of base value, so we can values bellow or above
                            // of base value)
                            $baseForPercentMultiplier = 0;
                            break;
                    }
                    switch ($price['marginMethod']) {
                        case 'MARGIN': // Note: Only used for cost based
                            $marginValue = (($price['marginValue'] < 100) ? $price['marginValue'] : 99.9999);
                            $sellValue = round($costValue / (1 - ($marginValue / 100)), 2);
                            break;
                        case 'MARKUP': // Note: Only used for cost based
                            $sellValue = round($costValue * (1 + ($price['marginValue'] / 100)), 2);
                            break;
                        case 'FIXED':
                            $totalUnitSellDetail = $priceService->getTotalUnitDetail($price['marginValue'], $vatCodePercentage, false);
                            $sellValue = ($sellValue + $totalUnitSellDetail['value']);
                            break;
                        case 'PERCENT':
                            $sellValue = round($sellValue * ($baseForPercentMultiplier + $price['marginValue'] / 100), 2);
                            break;
                    }

                    // Get values base on unit
                    $totalUnitCostDetail = $priceService->getTotalUnitDetail($costValue, $vatCodePercentage, false);
                    $totalUnitSellDetail = $priceService->getTotalUnitDetail($sellValue, $vatCodePercentage, false);

                    $debugDetail[] = array(
                        'description' => $price['description'],
                        'costValue' => (
                            $totalUnitCostDetail['totalUnit']
                            . ' (' . $totalUnitCostDetail['value'] . ' + ' . $totalUnitCostDetail['vatValue'] . ' VAT' . $vatCodePercentage . '%)'
                        ),
                        'sellValue' => (
                            $totalUnitSellDetail['totalUnit']
                            . ' (' . $totalUnitSellDetail['value'] . ' + ' . $totalUnitSellDetail['vatValue'] . ' VAT' . $vatCodePercentage . '%)'
                        ),
                    );

                    // Grouped price.
                    $priceIndex = ('PE_' . $price['id']); //  "pe_": price exception to distinct of the regular price index
                    if (isset($priceSumByIdArr[$priceIndex])) {
                        $priceSumByIdArr[$priceIndex]['numDays']++;
                    } else {
                        $priceSumByIdArr[$priceIndex] = array(
                            'description' => $price['description'],
                            'postingType' => $price['postingType'],
                            'marginMethod' => '', // Should be empty, because cost value is not a related value to sell
                            'marginValue' => '0.00',
                            'userFieldTyped' => 'COST',
                            'numDays' => 1,
                            'costValue' => $totalUnitCostDetail['value'],
                            'sellValue' => $totalUnitSellDetail['value'],
                            'vatValueCost' => $totalUnitCostDetail['vatValue'],
                            'vatValueSell' => $totalUnitSellDetail['vatValue']
                        );
                    }
                }

                ////////
                // Add to debug
                ////////////////////////////////
                $debug['detail'][] = array(
                    'date' => $date,
                    'status' => $status,
                    'price' => $debugDetail
                );
                $statusCounter[$status]++;
                $statusCounter['TOTAL']++;

                // Update date to next day
                $date = date("Y-m-d", strtotime("+1 day", strtotime($date)));
            }

            foreach ($priceSumByIdArr as $priceSumById) {
                // Set values
                $quantityWithDays = ($quantity * $priceSumById['numDays']);
                $totalUnitCost = round($priceSumById['costValue'] + $priceSumById['vatValueCost'], 2);
                $totalUnitSell = round($priceSumById['sellValue'] + $priceSumById['vatValueSell'], 2);
                $totalVatCost = $priceService->calcTotal($priceSumById['vatValueCost'], $quantityWithDays);
                $totalVatSell = $priceService->calcTotal($priceSumById['vatValueSell'], $quantityWithDays);
                // Do not use "subTotal" nor "totalVat" to get the "total", because this values are already rounded,
                // and in some cases the sum of 2 rounded values cause inquiries.
                // Before multiply round the sum to get a coherent total unit value
                $totalCost = $priceService->calcTotal($totalUnitCost, $quantityWithDays);
                $totalSell = $priceService->calcTotal($totalUnitSell, $quantityWithDays);
                // Sub total is determined in this way, because in some cases the sum of "subTotal" and "totalVat"
                // rounded does not match with the correct total, given that this values are rounded to 2 decimals
                // and lost precision, so in this way we keep the calculus with coherence giving preference to keep
                // "totalVat" untouched (legal values).
                $subTotalCost = round($totalCost - $totalVatCost, 2);
                $subTotalSell = round($totalSell - $totalVatSell, 2);

                $bookingServicePriceObj = new BookingServicePrice();
                parent::setObjectDefaultValues_static($this, $bookingServicePriceObj);

                $bookingServicePriceObj->setBookingServiceObj($bookingServiceObj);
                $bookingServicePriceObj->setVatCodeObj($vatCodeObj);
                $bookingServicePriceObj->setIsVatIncluded(true); // Only visual effect for user see values with vat
                $bookingServicePriceObj->setDescription($priceSumById['description']);
                $bookingServicePriceObj->setPostingType($priceSumById['postingType']);
                // We need to keep unit value original, so we can use this value to recalculate all values like VAT
                // without inquiries, so the days multiplied with quantity instead of unit value and keep the original
                // quantity
                $bookingServicePriceObj->setQuantity($quantityWithDays);
                $bookingServicePriceObj->setMarginMethod($priceSumById['marginMethod']);
                $bookingServicePriceObj->setMarginValue($priceSumById['marginValue']);
                $bookingServicePriceObj->setUserFieldTyped($priceSumById['userFieldTyped']);
                $bookingServicePriceObj->setCostValue($priceSumById['costValue']);
                $bookingServicePriceObj->setSellValue($priceSumById['sellValue']);
                $bookingServicePriceObj->setVatValueCost($priceSumById['vatValueCost']);
                $bookingServicePriceObj->setVatValueSell($priceSumById['vatValueSell']);
                $bookingServicePriceObj->setSubTotalCost($subTotalCost);
                $bookingServicePriceObj->setSubTotalSell($subTotalSell);
                $bookingServicePriceObj->setTotalVatCost($totalVatCost);
                $bookingServicePriceObj->setTotalVatSell($totalVatSell);

                // Save object in session
                // Set the parent for DocumentInvoiceDetail objects
                $localParent = $this->flags['parent'];
                $this->flags['parent'] = $bookingServiceObj->getId();
                parent::saveObject_static($this, $bookingServicePriceObj);
                $this->flags['parent'] = $localParent; // Reset to local parent
            }

            // Update service totals
            self::setTotals($this, $bookingServiceObj, $hasUpdateGrouperService);

            // Set general status
            if ($statusCounter['YES'] == $statusCounter['TOTAL']) {
                $debug['status'] = 'YES';
            } elseif ($statusCounter['NO'] == $statusCounter['TOTAL']) {
                $debug['status'] = 'NO';
            } else {
                $debug['status'] = 'PARTIAL';
            }
        }

        // Set response configuration (booking id is needed to distinguish the service in case of packages)
        $this->templateConf['localData']['data'][$bookingServiceObj->getId()]['priceDebug'] = $debug;

        if ($hasValidation) {
            return $this->validatePrice($bookingServiceObj);
        }

        return true;
    }

    /**
     * Reset service price from session storage
     * @param $bookingServiceObj
     * @param $hasUpdateGrouperService (determines if the grouperService will be updated. Generally the grouperService
     *     must be updated, however in some cases you can want update the groupService only after finish a loop that
     *     handles with multiple grouped services, thus avoiding update de grouperService for each grouped service
     *     that is handled in the loop)
     * @return $this
     */
    protected function resetServicePriceFromSS($bookingServiceObj, $hasUpdateGrouperService = true)
    {
        $bookingServiceId = $bookingServiceObj->getId();
        if ($bookingServiceId) {
            $this->container->get('app.service.session_storage')
                ->deleteChildObjects($bookingServiceId);

            // Update service and booking totals
            self::setTotals($this, $bookingServiceObj, $hasUpdateGrouperService);
        }

        return $this;
    }

    /**
     * Validate price
     * @param $bookingServiceObj
     * @return bool
     */
    protected function validatePrice($bookingServiceObj)
    {
        $errorMessage = null;

        if ($bookingServiceObj->getIsAutoPrice()
            // Status should be setted before by "handlePrice"
            && ($this->templateConf['localData']['data'][$bookingServiceObj->getId()]['priceDebug']['status'] != 'YES')
        ) {
            $errorMessage = 'Price not defined.';
        }

        // Set error
        if ($errorMessage) {
            $this->responseConf['status'] = 0;
            $this->addFlashMessage(
                $errorMessage,
                'Data not persisted',
                'error'
            );
            return false;
        }

        return true;
    }

    ////////////////////////////////////////////////////////////////////


    /**
     * Set totals for dependencies
     * @param $bookingServiceObj (is optional because object may have been removed)
     * @return $this
     */
    protected function setDependenciesTotals($bookingServiceObj = null) {
        // Set BookingService totals
        if ($bookingServiceObj) {
            self::setTotals($this, $bookingServiceObj);
        }

        // Set Booking totals
        $bookingObj = reset($this->parentConf)['obj']; // First parent
        BaseBookingController::setTotals($this, $bookingObj);

        return $this;
    }

    /**
     * Set confirmation for dependencies
     * @return $this
     */
    protected function setDependenciesConfirmation() {
        // Check if there are no errors in previous updates
        if ($this->responseConf['status'] == 1) {
            // Update booking confirmation
            $bookingObj = reset($this->parentConf)['obj']; // First parent
            BaseBookingController::setConfirmation($this, $bookingObj);
        }

        return $this;
    }

    /**
     * Set dates for dependencies
     * @return $this
     */
    protected function setDependenciesDates() {
        // Check if there are no errors in previous updates
        if ($this->responseConf['status'] == 1) {
            // Update booking confirmation
            $bookingObj = reset($this->parentConf)['obj']; // First parent
            BaseBookingController::setDates($this, $bookingObj);
        }

        return $this;
    }

    /**
     * Set invoice for dependencies
     * @return $this
     */
    protected function setDependenciesInvoice() {
        // Check if there are no errors in previous updates and we work with real data (database storage)
        if (($this->responseConf['status'] == 1) && ($this->flags['storage'] == 'db')) {
            // Update booking invoice status
            $parentConf = reset($this->parentConf);
            $bookingObj = $parentConf['obj'];
            BaseBookingController::setInvoiceStatus($this, $bookingObj);
        }

        return $this;
    }

    /**
     * Set invoice for dependencies
     * @return $this
     */
    protected function setDependenciesPlaces() {
        // Check if there are no errors in previous updates and we work with real data (database storage)
        if (($this->responseConf['status'] == 1) && ($this->flags['storage'] == 'db')) {
            // Update booking invoice status
            $parentConf = reset($this->parentConf);
            $bookingObj = $parentConf['obj'];
            BaseBookingController::setPlaces($this, $bookingObj);
        }

        return $this;
    }

    /**
     * Set totals
     * @param $controller
     * @param $bookingServiceObj
     * @param $hasUpdateGrouperService (determines if the grouperService will be updated. Generally the grouperService
     *     must be updated, however in some cases you can want update the groupService only after finish a loop that
     *     handles with multiple grouped services, thus avoiding update de grouperService for each grouped service
     *     that is handled in the loop)
     * @return mixed
     */
    static function setTotals($controller, $bookingServiceObj, $hasUpdateGrouperService = true)
    {
        // Check if there are no errors in previous updates and we work with real data (database storage)
        if ($controller->responseConf['status'] == 0) {
            return $controller;
        }

        $sessionStorageService = $controller->container->get('app.service.session_storage');

        // Check if is a grouped service
        $grouperBookingServiceObj = $bookingServiceObj->getGrouperBookingServiceObj();

        // Check if is a grouper service
        $isGrouperService = false;
        $bookingServicePriceObjects = array();
        switch ($controller->flags['storage']) {
            case 'session':
                // Get detail objects
                $bookingServicePriceObjects = $sessionStorageService->getChildObjects(
                    $bookingServiceObj->getId(), // This is the parent of objects
                    'BookingServicePrice'
                );
                if (is_array($bookingServicePriceObjects) && (count($bookingServicePriceObjects) > 0)) {
                    foreach ($bookingServicePriceObjects as $bookingServicePriceObj) {
                        if ($bookingServicePriceObj->getGroupedBookingServicePriceObj()) {
                            $isGrouperService = true;
                            break;
                        }
                    }
                }
                break;
            default: // db storage
                $tmpGroupedBookingServiceObj = $controller->getRepositoryService('BookingService', 'BookingBundle', 'Bck')
                    ->execute('findOneByGrouperBookingServiceObj', array($bookingServiceObj));
                $isGrouperService = !empty($tmpGroupedBookingServiceObj);
        }

        // If is a grouper service, reset the main grouper booking service price
        $mainGrouperBookingServicePriceObj = $bookingServiceObj->getGrouperBookingServicePriceObj();
        if ($isGrouperService) {
            if (!$mainGrouperBookingServicePriceObj) {
                // If grouper BookingServicePrice is not already defined, so let's define them
                $mainGrouperBookingServicePriceObj = new BookingServicePrice();
                $bookingServiceObj->setGrouperBookingServicePriceObj($mainGrouperBookingServicePriceObj);
                $mainGrouperBookingServicePriceObj->setBookingServiceObj($bookingServiceObj);
            }
        }

        $totals = array(
            'subTotalCost' => 0,
            'totalVatCost' => 0,
            'subTotalSell' => 0,
            'totalVatSell' => 0
        );

        // Get BookingPriceObjects
        switch ($controller->flags['storage']) {
            case 'session':
                // In case of session need to get again objects because main grouped BookingServicePrice can be changed
                $bookingServicePriceObjects = $sessionStorageService->getChildObjects(
                    $bookingServiceObj->getId(), // This is the parent of objects
                    'BookingServicePrice'
                );
                break;
            default: // db storage
                // Notice that disabled objects are getted yet, to update the correspondent grouper object if exists
                $bookingServicePriceObjects = $controller->getRepositoryService('BookingServicePrice', 'BookingBundle', 'Bck')
                    ->execute('findByBookingServiceObj',array($bookingServiceObj));
        }

        if (is_array($bookingServicePriceObjects) && (count($bookingServicePriceObjects) > 0)) {
            foreach ($bookingServicePriceObjects as $bookingServicePriceObj) {
                if ($isGrouperService && ($mainGrouperBookingServicePriceObj == $bookingServicePriceObj)) {
                    // The grouper BookingServicePrice it's to groups sell values, should not be sum
                    continue;
                }
                $bookingServicePriceObj_sellValues = $bookingServicePriceObj;

                // In case of session storage, check if grouped object continue valid, because session does not
                // delete cascade automatically like database
                if ($controller->flags['storage'] == 'session') {
                    if ($groupedBookingServicePriceObj = $bookingServicePriceObj->getGroupedBookingServicePriceObj()) {
                        if (!$sessionStorageService->get($groupedBookingServicePriceObj->getId())) {
                            // Grouped object is not valid anymore, so delete the grouper object
                            $currentParentFlag = $controller->flags['parent'];
                            $controller->flags['parent'] = $bookingServicePriceObj->getBookingServiceObj()->getId();
                            parent::deleteObject_static($controller, $bookingServicePriceObj);
                            $controller->flags['parent'] = $currentParentFlag;
                            continue;
                        }
                    }
                }

                // If grouping service is enabled, so we need to copy all BookingServicePrice to the
                // grouper service redefining the sell values according with the VAT code of
                // the grouper service.
                // NOTE: The sell values of this BookingService are calculated based in the copies of BookingServicePrice
                // in the grouper BookingService, because these are the objects that will be used in bill/invoice processes,
                // in order to avoid turn the user confused with this values, put a flag in grouped BookingService and show
                // in the grouped BookingServicePrice the sell values of your correspond copy in grouper BookingServicePrice.
                if ($grouperBookingServiceObj) {
                    // Set grouperBookingServicePriceObj
                    if (($grouperBookingServicePriceObj = $bookingServicePriceObj->getGrouperBookingServicePriceObj())) {
                        // If grouper BookingServicePrice is already defined, so delete them to create another one
                        $bookingServicePriceObj->setGrouperBookingServicePriceObj(null);

                        // Delete deprecated grouper BookingServicePrice
                        $currentParentFlag = $controller->flags['parent'];
                        $controller->flags['parent'] = $grouperBookingServicePriceObj->getBookingServiceObj()->getId();
                        parent::deleteObject_static($controller, $grouperBookingServicePriceObj, false); // No flush, flush only at end
                        $controller->flags['parent'] = $currentParentFlag;
                    }

                    // Create a new grouper BookingServicePrice object based on the original
                    $grouperBookingServicePriceObj = clone $bookingServicePriceObj;
                    $bookingServicePriceObj->setGrouperBookingServicePriceObj($grouperBookingServicePriceObj);
                    $grouperBookingServicePriceObj->setGroupedBookingServicePriceObj($bookingServicePriceObj);
                    $grouperBookingServicePriceObj->setBookingServiceObj($grouperBookingServiceObj);
                    $grouperBookingServicePriceObj->setVatCodeObj(
                        $grouperBookingServiceObj->getServiceObj()->getVatCodeObj()
                    );
                    $grouperBookingServicePriceObj->setCostValue(0);
                    BookingServicePriceController::validateAndSetBookingServicePrice(
                        $controller,
                        $grouperBookingServicePriceObj
                    );
                    // Set isEnabled. Only is enabled if Service and servicePrice is enabled both
                    $isEnabled = ($bookingServicePriceObj->getIsEnabled() && $bookingServiceObj->getIsEnabled());
                    $grouperBookingServicePriceObj->setIsEnabled($isEnabled);

                    // Save new grouper BookingServicePrice
                    $currentParentFlag = $controller->flags['parent'];
                    $controller->flags['parent'] = $grouperBookingServicePriceObj->getBookingServiceObj()->getId();
                    parent::saveObject_static($controller, $grouperBookingServicePriceObj, false); // No flush, flush only at end
                    $controller->flags['parent'] = $currentParentFlag;

                    $bookingServicePriceObj_sellValues = $grouperBookingServicePriceObj;
                }

                // If is a grouper service, so group all BookingServicePrice in the main grouper BookingServicePrice
                if ($isGrouperService) {
                    $bookingServicePriceObj->setGrouperBookingServicePriceObj($mainGrouperBookingServicePriceObj);
                }

                // Add values only if object is enabled
                if (!$bookingServicePriceObj->getIsEnabled()) { continue; }
                switch ($bookingServicePriceObj->getPostingType()) {
                    case 'CREDIT':
                        $totals['subTotalCost'] -= $bookingServicePriceObj->getSubTotalCost();
                        $totals['totalVatCost'] -= $bookingServicePriceObj->getTotalVatCost();
                        $totals['subTotalSell'] -= $bookingServicePriceObj_sellValues->getSubTotalSell();
                        $totals['totalVatSell'] -= $bookingServicePriceObj_sellValues->getTotalVatSell();
                        break;
                    default:
                        $totals['subTotalCost'] += $bookingServicePriceObj->getSubTotalCost();
                        $totals['totalVatCost'] += $bookingServicePriceObj->getTotalVatCost();
                        $totals['subTotalSell'] += $bookingServicePriceObj_sellValues->getSubTotalSell();
                        $totals['totalVatSell'] += $bookingServicePriceObj_sellValues->getTotalVatSell();
                }
            }
        }

        // Add totals to grouper BookingServicePrice and default values
        if ($isGrouperService) {
            parent::setObjectDefaultValues_static($controller, $mainGrouperBookingServicePriceObj);
            $mainGrouperBookingServicePriceObj->setDescription($bookingServiceObj->getDescription());
            $mainGrouperBookingServicePriceObj->setVatCodeObj($bookingServiceObj->getServiceObj()->getVatCodeObj());
            $mainGrouperBookingServicePriceObj->setQuantity($bookingServiceObj->getQuantity());
            $mainGrouperBookingServicePriceObj->setIsVatIncluded(true); // Only for user view
            $mainGrouperBookingServicePriceObj->setCostValue(0);
            $mainGrouperBookingServicePriceObj->setVatValueCost(0);
            $mainGrouperBookingServicePriceObj->setSubTotalCost(0);
            $mainGrouperBookingServicePriceObj->setTotalVatCost(0);
            $mainGrouperBookingServicePriceObj->setMarginMethod(null);
            $mainGrouperBookingServicePriceObj->setMarginValue(0);
            $mainGrouperBookingServicePriceObj->setUserFieldTyped('SELL');
            $postingType = (($totals['subTotalSell'] < 0) ? 'CREDIT' : 'DEBIT');
            $mainGrouperBookingServicePriceObj->setPostingType($postingType);

            $priceService = $controller->get('app.service.price');
            $sellValue = $priceService->calcUnitFromTotal(abs($totals['subTotalSell']), $bookingServiceObj->getQuantity());

            $mainGrouperBookingServicePriceObj->setSellValue($sellValue);
            BookingServicePriceController::validateAndSetBookingServicePrice(
                $controller,
                $mainGrouperBookingServicePriceObj
            );

            // Update totals for service based in main grouper BookingServicePrice to avoid inquiries caused by rounding
            $totals['subTotalSell'] = (($postingType == 'CREDIT') ?
                ($mainGrouperBookingServicePriceObj->getSubTotalSell() * -1) :
                $mainGrouperBookingServicePriceObj->getSubTotalSell()
            );
            $totals['totalVatSell'] = (($postingType == 'CREDIT') ?
                ($mainGrouperBookingServicePriceObj->getTotalVatSell() * -1) :
                $mainGrouperBookingServicePriceObj->getTotalVatSell()
            );

            // Save main grouper BookingServicePrice
            $currentParentFlag = $controller->flags['parent'];
            $controller->flags['parent'] = $bookingServiceObj->getId();
            parent::saveObject_static($controller, $mainGrouperBookingServicePriceObj);
            $controller->flags['parent'] = $currentParentFlag;
        }

        $bookingServiceObj->setSubTotalCost($totals['subTotalCost']);
        $bookingServiceObj->setTotalVatCost($totals['totalVatCost']);
        $bookingServiceObj->setSubTotalSell($totals['subTotalSell']);
        $bookingServiceObj->setTotalVatSell($totals['totalVatSell']);
        self::saveObject_static($controller, $bookingServiceObj); // Flush all objects now

        // If the object belongs to a grouping, so the grouper service should be updated yet
        if ($grouperBookingServiceObj && $hasUpdateGrouperService) {
            self::setTotals($controller, $grouperBookingServiceObj);
        }

        return $controller;
    }

    /**
     * Overrides parent method.
     * @param $object
     * @param $data (usually the form data)
     * @return $this
     */
    protected function postSaveObject($object, $data = null)
    {
        // Check if there are no errors in previous updates
        if ($this->responseConf['status'] == 1) {
            $bookingServiceObj = null; // Case of delete
            if ($object) {
                $bookingServiceObj = $object->getBookingServiceObj();
            }

            $this->setDependenciesTotals($bookingServiceObj);
            $this->setDependenciesDates();
            $this->setDependenciesConfirmation();
            $this->setDependenciesInvoice();
            $this->setDependenciesPlaces();
        }

        return $this;
    }

    /**
     * Overrides parent method
     * @param $object
     * @return $this
     */
    protected function postDeleteObject($object)
    {
        // Sent null because object is any more available
        return $this->postSaveObject(null);
    }

    /**
     * Overrides parent method
     * @param $object
     * @return $this
     */
    protected function postCancelObject($object) {
        return $this->postSaveObject($object);
    }
}