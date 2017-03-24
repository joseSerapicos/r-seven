<?php

namespace BookingBundle\Controller;

use AppBundle\Controller\BaseEntityChildController;
use Sensio\Bundle\FrameworkExtraBundle\Configuration\Route;
use Symfony\Component\HttpFoundation\Request;


/**
 * This class is the base for all booking service.
 * @package BookingBundle\Controller
 */
class BaseBookingServiceController extends BaseEntityChildController
{
    /**
     * DEFINE ROUTE HERE
     *
     * Action to add objects using the form
     * @param Request $request
     * @param $booking
     * @param $id
     * @return mixed
     */
    public function addAction(Request $request, $booking, $id)
    {
        // Set configuration
        $this->flags['hasForm'] = true;
        $this->initChild($request, array($booking));
        $this->templateConf['fields']['form'] = array('serviceObj');

        // If service has changed, data needs to be replaced by a new service default values
        $obj = $this->getObject($id);
        if ($id) {
            // Set default values again
            $this->resetPriceDefaultValues($obj);
            // Error on delete
            if ($this->responseConf['status'] == 0) {
                return $this->getResponse(true);
            }
            // Set default values again (continue)
            $this->setObjectDefaultValues($obj, true);
        }

        // Build form
        $this->localConf['form'] = array_merge($this->localConf['form'], array('route' => 'add', 'buttons' => 'wizard'));
        $form = $this->buildForm($request, $obj);

        // Handle request
        $form->handleRequest($request);

        // Check if is submitted
        if($form->isSubmitted()) {
            $this->saveForm($form, $obj);
            $this->setDependenciesConfirmation(); // Confirmation status can be changed
            $this->setDependenciesDates(); // Dates can be changed
            return $this->getResponse(true);
        }

        // Render form
        return $this->render($this->localConf['templates']['add'], array(
            '_conf' => $this->templateConf,
            '_form' => $form->createView(),
            '_containers' => array(
                array(
                    'label' => 'Service',
                ),
                array(
                    'label' => 'Detail',
                ),
                array(
                    'label' => 'Dates',
                ),
                array(
                    'label' => 'Allot',
                ),
                /*array( // To determine ages to get prices
                    'label' => 'Pax',
                ),*/
                array(
                    'label' => 'Price'
                )
            )
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
    public function addDetailAction(Request $request, $booking, $id)
    {
        // Set configuration only if not initialized (can be initialized by a children)
        if (!$this->isInitialized) {
            $this->flags['hasForm'] = true;
            $this->initChild($request, array($booking));
            $this->templateConf['fields']['form'] = array(
                'id', 'icon', 'name', 'description', 'supplierObj', 'reference',
                'insertTime', 'insertUser', 'isEnabled'
            );
        }

        $obj = $this->getObject($id);

        // Build form
        $this->localConf['form'] = array_merge($this->localConf['form'], array('route' => 'add', 'buttons' => 'none'));
        $form = $this->buildForm($request, $obj);

        // Handle request
        $form->handleRequest($request);

        // Check if is submitted
        if($form->isSubmitted()) {
            $this->saveForm($form, $obj);
            $this->onSaveObject($obj, 'addDetail');
            return $this->getResponse(true);
        }

        // Render form
        return $this->render($this->localConf['templates']['addDetail'], array(
            '_conf' => $this->templateConf,
            '_form' => $form->createView()
        ));
    }

    /**
     * DEFINE ROUTE HERE
     *
     * Action to add dates of object
     * @param Request $request
     * @param $booking
     * @param $id
     * @return mixed
     */
    public function addDatesAction(Request $request, $booking, $id)
    {
        // Set configuration
        $this->flags['hasForm'] = true;
        $this->initChild($request, array($booking));
        $this->templateConf['fields']['form'] = array('startDateManual', 'endDateManual', 'isAutoAvailability');

        $obj = $this->getObject($id);

        // Build form
        $this->localConf['form'] = array_merge($this->localConf['form'], array('route' => 'add-dates', 'buttons' => 'none'));
        $form = $this->buildForm($request, $obj);

        // Handle request
        $form->handleRequest($request);

        // Check if is submitted
        if($form->isSubmitted()) {
            $data = $this->getRequestData($request);

            // Validate dates
            $startDate = $data['form']['startDateManual'];
            $endDate = $data['form']['endDateManual'];
            $serviceObj = $obj->getServiceObj();
            if (($startDate < date("Y-m-d")) || ($endDate < $startDate)) {
                $this->responseConf['status'] = 0;
            } elseif (!empty($data['form']['isAutoAvailability']) && $serviceObj->getIsEnabledAvailability()) {
                // Get available dates
                $availability = $this->getCurrentAvailability($serviceObj);
                $isValidStartDate = $isValidEndDate = false;
                foreach ($availability as $availabilityDate) {
                    if (($startDate >= $availabilityDate['startDate']) && ($startDate <= $availabilityDate['endDate'])) {
                        $isValidStartDate = true;
                    }
                    if (($endDate >= $availabilityDate['startDate']) && ($endDate <= $availabilityDate['endDate'])) {
                        $isValidEndDate = true;
                    }
                    if ($isValidStartDate && $isValidEndDate) {
                        break;
                    }
                }
                if (!$isValidStartDate || !$isValidEndDate) {
                    $this->responseConf['status'] = 0;
                }
            }

            if ($this->responseConf['status'] == 0) {
                $this->addFlashMessage(
                    'Invalid data range.',
                    'Data not persisted',
                    'error'
                );
            }
            else {
                // Set dates manually (from the fake fields)
                $obj->setStartDate(new \DateTime($data['form']['startDateManual']));
                $obj->setEndDate(new \DateTime($data['form']['endDateManual']));

                // Set default values again
                $this->resetPriceDefaultValues($obj);
                // No error on delete, then continue and save
                if ($this->responseConf['status'] == 1) {
                    $this->setAllotDefaultValues($obj);

                    $this->saveForm($form, $obj);
                    $this->setDependenciesDates(); // Dates can be changed
                    $this->setDependenciesConfirmation(); // Confirmation status can be changed
                }
            }

            return $this->getResponse(true);
        }

        // Render form
        return $this->render($this->localConf['templates']['addDates'], array(
            '_conf' => $this->templateConf,
            '_form' => $form->createView()
        ));
    }

    /**
     * DEFINE ROUTE HERE
     *
     * Action to add allot of object
     * @param Request $request
     * @param $booking
     * @param $id
     * @return mixed
     */
    public function addAllotAction(Request $request, $booking, $id)
    {
        // Set configuration
        $this->flags['hasForm'] = true;
        $this->initChild($request, array($booking));
        $this->templateConf['fields']['form'] = array('quantityManual', 'confirmationStatus', 'confirmationStatusManual', 'isAutoAllot');

        $obj = $this->getObject($id);

        // Build form
        $this->localConf['form'] = array_merge($this->localConf['form'], array('route' => 'add-dates', 'buttons' => 'none'));
        $form = $this->buildForm($request, $obj);

        // Handle request
        $form->handleRequest($request);

        // Check if is submitted
        if($form->isSubmitted()) {
            $data = $this->getRequestData($request);

            // Set quantity manually (from the fake field)
            $obj->setQuantity($data['form']['quantityManual']);

            // Validate and set allot
            $allotError = false;
            $serviceObj = $obj->getServiceObj();
            if (!empty($data['form']['isAutoAllot']) && $serviceObj->getIsEnabledAllot()) {
                // Get allot and set it in conf
                $allotStatus = $this->getCurrentAllotStatus(
                    $serviceObj,
                    $obj->getStartDate(),
                    $obj->getEndDate(),
                    $obj->getQuantity()
                );
                $this->responseConf['localData']['allot'] = $allotStatus['detail'];
                $obj->setConfirmationStatus($allotStatus['status']);

                // Allot not available
                if ($allotStatus['status'] != 'YES') {
                    $this->addFlashMessage(
                        'Allot not available.',
                        'Error',
                        'error'
                    );
                    $allotError = true;
                }
            } else {
                // Manual allot
                $obj->setConfirmationStatus($data['form']['confirmationStatusManual']);
            }

            // Set again default values
            $this->resetPriceDefaultValues($obj);
            if ($this->responseConf['status'] == 1) {
                $this->setPriceDefaultValues($obj);
                if ($this->responseConf['status'] == 1) {
                    // No error, then continue and save
                    $this->saveForm($form, $obj);
                    $this->setDependenciesConfirmation(); // Confirmation status can be changed
                }
            }

            // Error status only setted now, otherwise the saveForm function do not have the expected behavior.
            if ($allotError) { $this->responseConf['status'] = 0; }

            return $this->getResponse(true);
        }

        // Render form
        return $this->render($this->localConf['templates']['addAllot'], array(
            '_conf' => $this->templateConf,
            '_form' => $form->createView()
        ));
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
        // Set configuration only if not initialized (can be initialized by a children)
        if (!$this->isInitialized) {
            $this->flags['hasForm'] = true;
            $this->initChild($request, array($booking));
            $this->templateConf['fields']['form'] = array(
                'id', 'icon', 'name', 'description', 'supplierObj', 'reference',
                'startDate', 'endDate',
                'quantity', 'confirmationStatus',
                'insertTime', 'insertUser', 'isEnabled');
        }

        $obj = $this->getObject($id);

        // Avoid data tampering by user. If $id is defined, limit fields, else render all fields for template/view
        if (empty($id)) {
            array_push(
                $this->templateConf['fields']['form'],
                'startDateManual', 'endDateManual', 'quantityManual', 'confirmationStatusManual'
            );
        } else {
            if (!$obj->getIsAutoAllot()) {
                array_push($this->templateConf['fields']['form'], 'quantityManual', 'confirmationStatusManual');
                if (!$obj->getIsAutoAvailability()) {
                    array_push($this->templateConf['fields']['form'], 'startDateManual', 'endDateManual');
                }
            }
        }

        // Build form
        $form = $this->buildForm($request, $obj);

        // Handle request
        $form->handleRequest($request);

        // Check if is submitted
        if($form->isSubmitted()) {
            $data = $this->getRequestData($request);

            if (!$obj->getIsAutoAllot()) {
                if (!$obj->getIsAutoAvailability()) {
                    // Basic date validation
                    if ($data['form']['endDateManual'] < $data['form']['startDateManual']) {
                        $this->responseConf['status'] = 0;
                        $this->addFlashMessage(
                            'Invalid data range.',
                            'Data not persisted',
                            'error'
                        );
                        return $this->getResponse(true);
                    }

                    // Manual availability
                    $obj->setStartDate(new \DateTime($data['form']['startDateManual']));
                    $obj->setEndDate(new \DateTime($data['form']['endDateManual']));
                }

                // Manual allot
                $obj->setConfirmationStatus($data['form']['confirmationStatusManual']);

                // Quantity can be edited
                $obj->setQuantity($data['form']['quantityManual']);
            }

            $this->saveForm($form, $obj);
            // Update all dependencies, values can be changed or service "isEnabled" may have been changed
            $this->onSaveObject($obj, 'edit');
            $this->setDependenciesConfirmation();
            $this->setDependenciesDates();
            $this->setDependenciesTotals($obj);

            return $this->getResponse(true);
        }

        // Render form
        return $this->render($this->localConf['templates']['edit'], array(
            '_conf' => $this->templateConf,
            '_form' => $form->createView()
        ));
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
    public function deleteLocalChildAction(Request $request, $booking, $id)
    {
        $response = parent::deleteChildAction($request, array($booking), $id);
        if ($this->responseConf['status'] == 1) {
            $this->setDependenciesDates();
            $this->setDependenciesConfirmation();
            $this->setDependenciesTotals();
        }
        return $response;
    }

    /**
     * DEFINE ROUTE HERE
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
     * DEFINE ROUTE HERE
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
     * Overrides parent method
     * @param $object
     * @param $skipCurrentData (skip current filled data)
     * @return $this
     */
    protected function setObjectDefaultValues($object, $skipCurrentData = false)
    {
        // Get form post from request
        $data = $this->getRequestData($this->container->get('request_stack')->getCurrentRequest());

        // Set default values
        if ((empty($object->getId()) || $skipCurrentData) && isset($data['form']) && isset($data['form']['serviceObj'])) {
            $serviceObj = $this->getRepositoryService('Service', 'ServicesBundle')
                ->execute(
                    'findOneById',
                    array($data['form']['serviceObj'])
                );
            
            $object->setServiceObj($serviceObj);
            $object->setDescription($serviceObj->getDescription());
            $this->setAvailabilityDefaultValues($object); // Set dates
            $object->setQuantity(1);
            // Default allot is not validated and allocated at all,
            // if no allot are available, then user needs to validate and allocate correctly the allot
            $object->setIsAutoAllot(false);
            $object->setTotalCost(0);
            $object->setTotalMargin(0);
            $object->setTotalMarkup(0);
            $object->setTotalProfit(0);
            $object->setTotalSell(0);
            $object->setInvoiceStatus("NO");
            $object->setConfirmationStatus("NO");

            parent::setObjectDefaultValues($object);
        }

        return $this;
    }

    /**
     * Set availability default values
     * @param $object
     * @return $this
     */
    protected function setAvailabilityDefaultValues($object)
    {
        $serviceObj = $object->getServiceObj();
        
        // Get available dates and set in conf
        $this->responseConf['localData']['availability'] = $this->getCurrentAvailability($serviceObj);

        // Set default dates
        $startDate = (new \DateTime('+5 day'));
        $endDate = null;
        if (!empty($this->responseConf['localData']['availability'])
            && (count($this->responseConf['localData']['availability']) > 0)
        ) {
            // Default dates based on first valid range
            $firstRange = reset($this->responseConf['localData']['availability']);
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
        
        $object->setStartDate($startDate);
        $object->setEndDate($endDate);
        // Default dates are not validate at all, if no data ranges are available,
        // then setted dates are wrong and user needs to validate them
        $object->setIsAutoAvailability(false);
        
        return $this;
    }

    /**
     * Get current availability date ranges
     * @param $serviceObj
     * @return array
     */
    protected function getCurrentAvailability($serviceObj)
    {
        // Check if availability is enabled
        if ($serviceObj->getIsEnabledAvailability()) {
            // Get available dates
            return $this->getRepositoryService('ServiceAvailability', 'ServicesBundle')->execute(
                'getCurrentAvailability',
                array($serviceObj)
            );
        }

        return array();
    }

    /**
     * Set allot default values
     * @param $object
     * @return $this
     */
    protected function setAllotDefaultValues($object)
    {
        $serviceObj = $object->getServiceObj();

        $allotStatus = $this->getCurrentAllotStatus(
            $serviceObj,
            $object->getStartDate(),
            $object->getEndDate(),
            $object->getQuantity()
        );
        $this->responseConf['localData']['allot'] = $allotStatus['detail'];
        $object->setConfirmationStatus($allotStatus['status']);
        $object->setIsAutoAllot(false);

        return $this;
    }

    /**
     * Get current allot status
     * @param $serviceObj
     * @param $startDate
     * @param $endDate
     * @param $quantityToValidate
     * @return array
     */
    protected function getCurrentAllotStatus($serviceObj, $startDate, $endDate, $quantityToValidate)
    {
        $currentAllot = array(
            'status' => 'NO',
            'detail' => array()
        );

        // Check if allot is enabled
        if ($serviceObj->getIsEnabledAllot()) {
            $hasAllot = $hasNoAllot = false; // Used to determine the general status

            $date = $startDate->format('Y-m-d');
            $endTime = strtotime($endDate->format('Y-m-d'));
            while (strtotime($date) <= $endTime) {
                $allot = $this->getRepositoryService('ServiceAllot', 'ServicesBundle')->execute(
                    'getCurrentAllotByDate',
                    array($serviceObj, $date)
                );
                $status = (($allot['allot'] < $quantityToValidate) ? 'NO' : 'YES');

                $currentAllot['detail'][] = array(
                    'date' => $date,
                    'available' => $allot['allot'],
                    'status' => $status
                );

                if ($status == 'YES') {
                    $hasAllot = true;
                } else {
                    $hasNoAllot = true;
                }

                $date = date("Y-m-d", strtotime("+1 day", strtotime($date)));
            }

            if ($hasAllot && $hasNoAllot) {
                $currentAllot['status'] = 'PARTIAL';
            } elseif ($hasAllot) {
                $currentAllot['status'] = 'YES';
            }
        }

        return $currentAllot;
    }

    /**
     * Set price default values
     * @param $object
     * @return $this
     */
    protected function setPriceDefaultValues($object) {
        $quantity = $object->getQuantity();
        $startDate = $object->getStartDate();
        $endDate = $object->getEndDate();
        $serviceObj = $object->getServiceObj();
        $priceDebug = array();

        // Check if price is enabled
        if ($serviceObj && $serviceObj->getIsEnabledPrice()) {
            $groupedPriceArr = array(); // It contents the price grouped by different entries (id).

            $date = $startDate->format('Y-m-d');
            $endTime = strtotime($endDate->format('Y-m-d'));
            while (strtotime($date) <= $endTime) {
                $priceDetail = array();
                // First price occurrence used as base price in price exceptions
                $isDefinedBasePrice = false;
                $baseCostValue = 0;
                $baseSellValue = 0;

                ////////
                // Regular price
                ////////////////////////////////
                $options = array('fields' => array(
                    'id', 'description', 'costValue', 'marginMethod', 'marginValue', 'sellValue', 'userFieldTyped'
                ));
                $priceArr = $this->getRepositoryService('ServicePrice', 'ServicesBundle')->execute(
                    'getCurrentPriceByDate',
                    array(
                        $serviceObj,
                        $date,
                        $options
                    )
                );
                foreach ($priceArr as $price) {
                    // Define base price for price exception
                    if (!$isDefinedBasePrice) {
                        $isDefinedBasePrice = true;
                        $baseCostValue = $price['costValue'];
                        $baseSellValue = $price['sellValue'];
                    }

                    $priceDetail[] = array(
                        'description' => $price['description'],
                        'costValue' => round($price['costValue'], 4),
                        'sellValue' => round($price['sellValue'], 4)
                    );

                    // Grouped price
                    if (isset($groupedPriceArr[$price['id']])) {
                        $groupedPriceArr[$price['id']]['quantity']++;
                        $groupedPriceArr[$price['id']]['costValue'] += $price['costValue'];
                        $groupedPriceArr[$price['id']]['sellValue'] += $price['sellValue'];
                    } else {
                        $groupedPriceArr[$price['id']] = array(
                            'description' => $price['description'],
                            'postingType' => 'DEBIT',
                            'costValue' => $price['costValue'],
                            'marginMethod' => $price['marginMethod'],
                            'marginValue' => $price['marginValue'],
                            'sellValue' => $price['sellValue'],
                            'userFieldTyped' => $price['userFieldTyped'],
                            'quantity' => 1
                        );
                    }
                }

                ////////
                // Price exceptions (supplements and discounts) (if credit subtract value, else some)
                ////////////////////////////////
                $options = array('fields' => array(
                    'id', 'description', 'postingType', 'costBaseValue', 'costMethod', 'costValue',
                    'marginMethod', 'marginBaseValue', 'marginValue'
                ));
                $priceArr = $this->getRepositoryService('ServicePriceException', 'ServicesBundle')->execute(
                    'getCurrentPriceExceptionByDate',
                    array(
                        $serviceObj,
                        $date,
                        $options
                    )
                );
                foreach ($priceArr as $price) {
                    // Determines cost price
                    $costValue = 0;
                    switch ($price['costBaseValue']) {
                        case 'BASE_COST':
                            $costValue = $baseCostValue;
                            break;
                    }
                    switch ($price['costMethod']) {
                        case 'PERCENT':
                            $costValue = round($costValue * ($price['costValue']/100), 4);
                            break;
                        case 'FIXED':
                            $costValue = round($costValue + $price['costValue'], 4);
                            break;
                    }
                    // Determines sell price
                    $sellValue = 0;
                    $baseForPercentMultiplier = 1;
                    switch ($price['marginBaseValue']) {
                        case 'COST':
                            $sellValue = $costValue;
                            break;
                        case 'BASE_SELL':
                            $sellValue = $baseSellValue;
                            $baseForPercentMultiplier = 0;
                            break;
                    }
                    switch ($price['marginMethod']) {
                        case 'MARGIN': // Note: Only used for cost based
                            $marginValue = (($price['marginValue'] < 100) ? $price['marginValue'] : 99.9999);
                            $sellValue = round($costValue / (1 - ($marginValue/100)), 4);
                            break;
                        case 'MARKUP': // Note: NOnly used for cost based
                            $sellValue = round($costValue * (1 + ($price['marginValue']/100)), 4);
                            break;
                        case 'FIXED':
                            $sellValue = round($sellValue + $price['marginValue'], 4);
                            break;
                        case 'PERCENT':
                            $sellValue = round($sellValue * ($baseForPercentMultiplier + $price['marginValue']/100), 4);
                            break;
                    }

                    $priceDetail[] = array(
                        'description' => $price['description'],
                        'costValue' => (($price['postingType'] == 'CREDIT') ? ($costValue * (-1)) : $costValue),
                        'sellValue' => (($price['postingType'] == 'CREDIT') ? ($sellValue * (-1)) : $sellValue)
                    );

                    // Grouped price.
                    $priceIndex = ('pe_' . $price['id']); //  "pe_": price exception to distinct of the regular price index
                    if (isset($groupedPriceArr[$priceIndex])) {
                        $groupedPriceArr[$priceIndex]['quantity']++;
                        $groupedPriceArr[$priceIndex]['costValue'] += $costValue;
                        $groupedPriceArr[$priceIndex]['sellValue'] += $sellValue;
                    } else {
                        $groupedPriceArr[$priceIndex] = array(
                            'description' => $price['description'],
                            'postingType' => $price['postingType'],
                            'costValue' => $costValue,
                            'marginMethod' => '', // Should be empty, because cost value is not a related value to sell
                            'marginValue' => '0.0000',
                            'sellValue' => $sellValue,
                            'userFieldTyped' => 'COST',
                            'quantity' => 1
                        );
                    }
                }

                ////////
                // Add to debug
                ////////////////////////////////
                $priceDebug[] = array(
                    'date' => $date,
                    'status' => ((count($priceDetail) > 0) ? 'YES' : 'NO'),
                    'price' => $priceDetail
                );

                $date = date("Y-m-d", strtotime("+1 day", strtotime($date)));
            }

            foreach ($groupedPriceArr as $groupedPrice) {
                $servicePriceEntityClass = ($this->localConf['entityClass'] . 'Price');
                $setBookingServiceObjMethod = ('set' . $this->localConf['entity'] . 'Obj');

                $servicePriceObj = new $servicePriceEntityClass();
                $servicePriceObj->$setBookingServiceObjMethod($object);
                $servicePriceObj->setDescription($groupedPrice['description'] . ' (' . $groupedPrice['quantity'] . ' Days)');
                $servicePriceObj->setPostingType($groupedPrice['postingType']);
                $servicePriceObj->setQuantity($quantity);
                $servicePriceObj->setCostValue($groupedPrice['costValue']);
                $servicePriceObj->setMarginMethod($groupedPrice['marginMethod']);
                $servicePriceObj->setMarginValue($groupedPrice['marginValue']);
                $servicePriceObj->setSellValue($groupedPrice['sellValue']);
                $servicePriceObj->setTotalCost(round($groupedPrice['costValue'] * $quantity, 2));
                $servicePriceObj->setTotalSell(round($groupedPrice['sellValue'] * $quantity, 2));
                $servicePriceObj->setUserFieldTyped($groupedPrice['userFieldTyped']);
                parent::setObjectDefaultValues($servicePriceObj);
                $this->saveObject($servicePriceObj, false);
            }

            // Save on database
            $this->flushEm();

            // Update service and booking totals
            $this->setDependenciesTotals($object);
        }

        $this->responseConf['localData']['priceDebug'] = $priceDebug;

        return $this;
    }

    /**
     * Reset (delete) associated price
     * @param $object
     * @return $this
     */
    protected function resetPriceDefaultValues($object) {
        $serviceObj = $object->getServiceObj();

        // Check if price is enabled
        if ($serviceObj->getIsEnabledPrice()) {
            $id = $object->getId();
            if ($id) {
                $servicePriceEntity = ($this->localConf['entity'] . 'Price');
                $priceObjArr = $this->getRepositoryService($servicePriceEntity, 'BookingBundle')
                    ->execute(
                        ('findBy' . $this->localConf['entity'] . 'Obj'),
                        array($id)
                    );

                foreach ($priceObjArr as $priceObj) {
                    parent::deleteObject($priceObj, false);
                }

                // Save on database
                $this->flushEm();

                // Update service and booking totals
                $this->setDependenciesTotals($object);
            }
        }

        return $this;
    }

    /**
     * Set totals for dependencies
     * @param $object (is optional because service object may have been removed)
     * @return $this
     */
    protected function setDependenciesTotals($object = null) {
        // Check if there are no errors in previous updates
        if ($this->responseConf['status'] == 1) {
            if ($object) {
                // Update service and booking totals
                $this->getLocalRepositoryService()
                    ->execute(
                        'setTotals',
                        array($object)
                    );
                parent::saveObject($object);
            }

            $bookingObj = reset($this->parentConf)['obj']; // First parent
            $this->getLocalRepositoryService()
                ->execute(
                    'setBookingTotals',
                    array($bookingObj)
                );
            parent::saveObject($bookingObj);
        }

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
            $this->getLocalRepositoryService()
                ->execute(
                    'setBookingConfirmation',
                    array($bookingObj)
                );
            parent::saveObject($bookingObj);
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
            // Update booking dates
            $bookingObj = reset($this->parentConf)['obj']; // First parent
            $this->getLocalRepositoryService()
                ->execute(
                    'setBookingDates',
                    array($bookingObj)
                );
            parent::saveObject($bookingObj);
        }

        return $this;
    }
}