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
                'icon', 'name', 'description', 'supplierObj', 'reference',
                'isEnabled'
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
            $this->postSaveObject($obj, 'addDetail');
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
                    'Invalid date range.',
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
                'icon', 'name', 'description', 'supplierObj', 'reference',
                'startDate', 'endDate',
                'quantity', 'confirmationStatus',
                'isEnabled');
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
            $this->postSaveObject($obj, 'edit');
            $this->setDependenciesConfirmation();
            $this->setDependenciesDates();

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
            $object->setConfirmationStatus("NO");
            $object->setTotalVatCost(0);
            $object->setTotalVatSell(0);
            $object->setSubTotalCost(0);
            $object->setSubTotalSell(0);
            $object->setTotalMargin(0);
            $object->setTotalMarkup(0);
            $object->setTotalProfit(0);

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

        $serviceObj = $object->getServiceObj();
        $priceDebug = array();

        // Check if price is enabled
        if (!$serviceObj || !$serviceObj->getIsEnabledPrice()) {
            $this->responseConf['localData']['priceDebug'] = $priceDebug;
            return $this;
        }

        // Set vars
        $startDate = $object->getStartDate();
        $endDate = $object->getEndDate();
        $vatCodeObj = $serviceObj->getVatCodeObj();
        $vatCodePercentage = $vatCodeObj->getPercentage();
        $quantity = $object->getQuantity();

        // Price service to make calculus
        $priceService = $this->get('app.service.price');

        // Contents the price daily sum grouped by different entries (id - price and price exceptions).
        $groupedPriceArr = array();

        // Get price for each day
        $date = $startDate->format('Y-m-d');
        $endTime = strtotime($endDate->format('Y-m-d'));
        while (strtotime($date) <= $endTime) {
            // Base price to use to determine price exceptions
            // (first occurrence is used, because can have more occurrences)
            $basePrice = null;

            // Detail of price debug
            $priceDebugDetail = array();

            ////////
            // Price
            ////////////////////////////////
            $options = array('fields' => array(
                'id', 'description', 'isVatIncluded', 'costValue',
                'marginMethod', 'marginValue', 'sellValue', 'userFieldTyped'
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
                // Set values
                $splitTotalUnitCost = $priceService->splitTotalUnit($price['costValue'], $vatCodePercentage, $price['isVatIncluded']);
                $splitTotalUnitSell = $priceService->splitTotalUnit($price['sellValue'], $vatCodePercentage, $price['isVatIncluded']);

                // Define base price for price exception
                if (!$basePrice) {
                    $basePrice = array(
                        'costValue' => $splitTotalUnitCost['value'],
                        'sellValue' => $splitTotalUnitSell['value']
                    );
                }

                $priceDebugDetail[] = array(
                    'description' => $price['description'],
                    'costValue' => (
                        $splitTotalUnitCost['totalUnit']
                        . ' ('.$splitTotalUnitCost['value'].' + '.$splitTotalUnitCost['vatValue'].' VAT)'
                    ),
                    'sellValue' => (
                        $splitTotalUnitSell['totalUnit']
                        . ' ('.$splitTotalUnitSell['value'].' + '.$splitTotalUnitSell['vatValue'].' VAT)'
                    ),
                );

                // Grouped price
                if (isset($groupedPriceArr[$price['id']])) {
                    $groupedPriceArr[$price['id']]['numDays']++;
                } else {
                    $groupedPriceArr[$price['id']] = array(
                        'description' => $price['description'],
                        'postingType' => 'DEBIT',
                        'marginMethod' => $price['marginMethod'],
                        'marginValue' => $price['marginValue'],
                        'userFieldTyped' => $price['userFieldTyped'],
                        'numDays' => 1,
                        'costValue' => $splitTotalUnitCost['value'],
                        'sellValue' => $splitTotalUnitSell['value'],
                        'vatValueCost' => $splitTotalUnitCost['vatValue'],
                        'vatValueSell' => $splitTotalUnitSell['vatValue']
                    );
                }
            }

            ////////
            // Price exception (supplements and discounts) (if credit subtract value, else some)
            ////////////////////////////////
            $options = array('fields' => array(
                'id', 'description', 'postingType', 'isVatIncluded',
                'costMethod', 'costBaseValue', 'costValue',
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
                        $costValue = $basePrice['costValue'];
                        break;
                }
                switch ($price['costMethod']) {
                    case 'PERCENT':
                        $costValue = round($costValue * ($price['costValue']/100), 2);
                        break;
                    case 'FIXED':
                        $splitTotalUnitCost = $priceService->splitTotalUnit($price['costValue'], $vatCodePercentage, $price['isVatIncluded']);
                        $costValue = round($costValue + $splitTotalUnitCost['value'], 2);
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
                        $sellValue = round($costValue / (1 - ($marginValue/100)), 2);
                        break;
                    case 'MARKUP': // Note: Only used for cost based
                        $sellValue = round($costValue * (1 + ($price['marginValue']/100)), 2);
                        break;
                    case 'FIXED':
                        $splitTotalUnitSell = $priceService->splitTotalUnit($price['marginValue'], $vatCodePercentage, $price['isVatIncluded']);
                        $sellValue = ($sellValue + $splitTotalUnitSell['value']);
                        break;
                    case 'PERCENT':
                        $sellValue = round($sellValue * ($baseForPercentMultiplier + $price['marginValue']/100), 2);
                        break;
                }

                // Get values base on unit
                $splitTotalUnitCost = $priceService->splitTotalUnit($costValue, $vatCodePercentage, false);
                $splitTotalUnitSell = $priceService->splitTotalUnit($sellValue, $vatCodePercentage, false);

                $priceDebugDetail[] = array(
                    'description' => $price['description'],
                    'costValue' => (
                        $splitTotalUnitCost['totalUnit']
                        . ' ('.$splitTotalUnitCost['value'].' + '.$splitTotalUnitCost['vatValue'].' VAT)'
                    ),
                    'sellValue' => (
                        $splitTotalUnitSell['totalUnit']
                        . ' ('.$splitTotalUnitSell['value'].' + '.$splitTotalUnitSell['vatValue'].' VAT)'
                    ),
                );

                // Grouped price.
                $priceIndex = ('pe_' . $price['id']); //  "pe_": price exception to distinct of the regular price index
                if (isset($groupedPriceArr[$priceIndex])) {
                    $groupedPriceArr[$priceIndex]['numDays']++;
                } else {
                    $groupedPriceArr[$priceIndex] = array(
                        'description' => $price['description'],
                        'postingType' => $price['postingType'],
                        'marginMethod' => '', // Should be empty, because cost value is not a related value to sell
                        'marginValue' => '0.00',
                        'userFieldTyped' => 'COST',
                        'numDays' => 1,
                        'costValue' => $splitTotalUnitCost['value'],
                        'sellValue' => $splitTotalUnitSell['value'],
                        'vatValueCost' => $splitTotalUnitCost['vatValue'],
                        'vatValueSell' => $splitTotalUnitSell['vatValue']
                    );
                }
            }

            ////////
            // Add to debug
            ////////////////////////////////
            $priceDebug[] = array(
                'date' => $date,
                'status' => ((count($priceDebugDetail) > 0) ? 'YES' : 'NO'),
                'price' => $priceDebugDetail
            );

            // Update date to next day
            $date = date("Y-m-d", strtotime("+1 day", strtotime($date)));
        }

        foreach ($groupedPriceArr as $groupedPrice) {
            // Set values
            $totalUnitCost = round($groupedPrice['costValue'] + $groupedPrice['vatValueCost'], 2);
            $totalUnitSell = round($groupedPrice['sellValue'] + $groupedPrice['vatValueSell'], 2);
            $totalVatCost = $priceService->calcTotal($groupedPrice['vatValueCost'], $quantity);
            $totalVatSell = $priceService->calcTotal($groupedPrice['vatValueSell'], $quantity);
            // Do not use "subTotal" nor "totalVat" to get the "total", because this values are already rounded,
            // and in some cases the sum of 2 rounded values cause inquiries.
            // Before multiply round the sum to get a coherent total unit value
            $totalCost = $priceService->calcTotal($totalUnitCost, $quantity);
            $totalSell = $priceService->calcTotal($totalUnitSell, $quantity);
            // Sub total is determined in this way, because in some cases the sum of "subTotal" and "totalVat"
            // rounded does not match with the correct total, given that this values are rounded to 2 decimals
            // and lost precision, so in this way we keep the calculus with coherence giving preference to keep
            // "totalVat" untouched (legal values).
            $subTotalCost = round($totalCost - $totalVatCost, 2);
            $subTotalSell = round($totalSell - $totalVatSell, 2);

            $servicePriceEntityClass = ($this->localConf['entityClass'] . 'Price');
            $servicePriceObj = new $servicePriceEntityClass();
            parent::setObjectDefaultValues($servicePriceObj);

            $servicePriceObj->setBookingServiceObj($object);
            $servicePriceObj->setVatCodeObj($vatCodeObj);
            $servicePriceObj->setDescription($groupedPrice['description']);
            $servicePriceObj->setPostingType($groupedPrice['postingType']);
            // We need to keep unit value original, so we can use this value to recalculate all values like VAT
            // without inquiries, so the days multiplied with quantity instead of unit value and keep the original
            // quantity
            $servicePriceObj->setQuantity($quantity * $groupedPrice['numDays']);
            $servicePriceObj->setMarginMethod($groupedPrice['marginMethod']);
            $servicePriceObj->setMarginValue($groupedPrice['marginValue']);
            $servicePriceObj->setUserFieldTyped($groupedPrice['userFieldTyped']);
            $servicePriceObj->setCostValue($groupedPrice['costValue']);
            $servicePriceObj->setSellValue($groupedPrice['sellValue']);
            $servicePriceObj->setVatValueCost($groupedPrice['vatValueCost']);
            $servicePriceObj->setVatValueSell($groupedPrice['vatValueSell']);
            $servicePriceObj->setSubTotalCost($subTotalCost);
            $servicePriceObj->setSubTotalSell($subTotalSell);
            $servicePriceObj->setTotalVatCost($totalVatCost);
            $servicePriceObj->setTotalVatSell($totalVatSell);

            $this->saveObject($servicePriceObj, false);
        }

        // Save on database
        $this->flushEm();

        // Update service and booking totals
        $this->setDependenciesTotals($object);
        $this->setDependenciesInvoice();

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
                $this->setDependenciesInvoice();
            }
        }

        return $this;
    }

    /**
     * Set totals for dependencies
     * @param $object (is optional because object may have been removed)
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
            $this->getRepositoryService('TravelBookingClientDocument', 'BookingBundle')
                ->execute(
                    'setBookingInvoiceStatus',
                    array($bookingObj)
                );

            parent::saveObject($bookingObj);
        }

        return $this;
    }
}