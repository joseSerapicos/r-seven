<?php

namespace BookingBundle\Controller;

use AccountingBundle\Entity\ClientCurrentAccount;
use AccountingBundle\Entity\ClientCurrentAccountDetail;
use AppBundle\Controller\BaseEntityChildController;
use Sensio\Bundle\FrameworkExtraBundle\Configuration\Route;
use Symfony\Component\HttpFoundation\Request;

class TravelBookingClientCurrentAccountController extends BaseEntityChildController
{
    /**
     * Overrides parent method
     * @param Request $request
     * @param $parents
     * @param $label (set label when you don't have the route in modules/menus tree)
     * @return $this
     */
    protected function initChild(Request $request, $parents, $label = 'Client Current Account')
    {
        // Set configuration only once
        if($this->isInitialized) { return $this; }

        // Parent route
        $this->parentConf = array(
            'travelBooking' => array('route' => '_booking__travel_booking__index')
        );

        // Route
        $this->templateConf['route'] = array(
            'new' => array(
                'name' => '_booking__travel_booking_client_current_account__new'
            ),
            'get' => array(
                'name' => '_booking__travel_booking_client_current_account__get'
            ),
            'add' => array(
                'name' => '_booking__travel_booking_client_current_account__add',
            ),
            'add-detail' => array(
                'name' => '_booking__travel_booking_client_current_account__add_detail',
            ),
            'add-default-detail' => array(
                'name' => '_booking__travel_booking_client_current_account__add_default_detail',
            ),
            'edit' => array(
                'name' => '_booking__travel_booking_client_current_account__edit',
            ),
            'edit-entity-address' => array(
                'name' => '_booking__travel_booking_client_current_account__edit_entity_address',
            ),
            'delete' => array(
                'name' => '_booking__travel_booking_client_current_account__delete',
            )
        );

        parent::initChild($request, $parents, $label);

        // Search
        $this->templateConf['search']['fields'] = array('clientDocumentType_name', 'code',
            'entity_avatar', 'entity_name',
            'subTotal', 'totalVat', 'total', 'date', 'dueDate');
        // Empty criteria to be able to see all registers because "search" action is disabled.
        $this->templateConf['search']['criteria'] = array();

        // Extra data
        $this->templateConf['extraData']['template'] = array(
            'class' => '-merge-view',
            'hasMergeHeader' => true
        );

        return $this;
    }

    /**
     * @Route("/booking/travel-booking-client-current-account/new/{travelBooking}",
     *     name="_booking__travel_booking_client_current_account__new"
     * )
     *
     * Overrides parent method
     * @param Request $request
     * @param $travelBooking
     * @return mixed
     */
    public function newLocalChildAction(Request $request, $travelBooking)
    {
        return parent::newChildAction($request, array($travelBooking));
    }

    /**
     * @Route("/booking/travel-booking-client-current-account/get/{travelBooking}/{id}",
     *     name="_booking__travel_booking_client_current_account__get",
     *     defaults={"id" = null}
     * )
     *
     * Overrides parent method
     * @param Request $request
     * @param $travelBooking
     * @param $id
     * @return mixed
     */
    public function getLocalChildAction(Request $request, $travelBooking, $id)
    {
        if(!empty($id)) {
            // Set configuration
            $this->initChild($request, array($travelBooking));

            // Process request
            $this->getRequestData($request); // Token is not validate, because this action is called directly without data

            $object = $this->getObject($id);

            $this->responseConf['object'] = $this->normalizeObject($object);

            ////////
            // Necessary data for form, because this method is called by form to edit the object
            ////////////////////////////////

            // Set date range to validate date in template
            $this->getLimitDateRange($object);

            // Set store info to be used in template
            $this->setResponseStoreInfo($object->getClientCurrentAccountObj()->getStoreObj());

            // Set Total Vat Split By Code to be used in template
            $this->setCurrentAccountTotalVatSplitByCode($object);

            return $this->getResponse(true);
        }

        return parent::getChildAction($request, array($travelBooking), $id);
    }

    /**
     * @Route("/booking/travel-booking-client-current-account/add/{travelBooking}/{id}",
     *     name="_booking__travel_booking_client_current_account__add",
     *     defaults={"id" = null}
     * )
     *
     * Action to add objects using the form
     * @param Request $request
     * @param $travelBooking
     * @param $id
     * @return mixed
     */
    public function addAction(Request $request, $travelBooking, $id)
    {
        // Set configuration
        $this->flags['storage'] = 'session'; // Session storage is used
        $this->flags['hasForm'] = true;
        $this->initChild($request, array($travelBooking));
        $this->templateConf['fields']['form'] = array('clientCurrentAccountObj', 'clientDocumentTypeObj', 'clientObj');
        $this->localConf['entityFields']['clientCurrentAccountObj']['typeDetail']['formClass'] = str_replace(
            '%formTypeStep%',
            '1',
            $this->localConf['entityFields']['clientCurrentAccountObj']['typeDetail']['formClass']
        );

        // Retrieve object from session
        $obj = $this->getObject($id);

        // Build form
        $this->localConf['form'] = array_merge($this->localConf['form'], array('route' => 'add', 'buttons' => 'wizard'));
        $form = $this->buildForm($request, $obj);

        // Handle request
        $form->handleRequest($request);

        // Check if is submitted
        if($form->isSubmitted()) {
            $this->setObjectDefaultValues($obj); // Set default values again, client can be changed
            $this->setDefaultDates($obj); // Document Type can be changed

            // Object is saved in session, this submit only determines the base information to be definitely saved in the next step
            $this->saveForm($form, $obj);

            return $this->getResponse(true);
        }

        // Render form
        return $this->render('AppBundle:wizard:popup.html.twig', array(
            '_conf' => $this->templateConf,
            '_form' => $form->createView(),
            '_containers' => array(
                array(
                    'label' => 'Document Type',
                ),
                array(
                    'label' => 'Detail',
                ),
                array(
                    'label' => 'Preview',
                )
            )
        ));
    }

    /**
     * @Route("/booking/travel-booking-client-current-account/add-default-detail/{travelBooking}/{id}",
     *     name="_booking__travel_booking_client_current_account__add_default_detail",
     *     defaults={"id" = null}
     * )
     *
     * Add default objects detail
     * @param Request $request
     * @param $travelBooking
     * @param $id
     * @return mixed
     */
    public function addDefaultDetailAction(Request $request, $travelBooking, $id)
    {
        // Set configuration
        $this->flags['storage'] = 'session'; // Session storage is used
        $this->initChild($request, array($travelBooking));

        // Process request
        $data = $this->getAndProcessRequestData($request);

        // Remove old detail objects
        $object = $this->getObject($id);
        $currentAccountObj = $object->getClientCurrentAccountObj();
        $this->container->get('app.service.session_storage')->deleteChildObjects($currentAccountObj->getId());

        // Set options with "ids"
        $options = ((empty($data['data']['id']) || !is_array($data['data']['id']))
            ? null
            : array('criteria' => array(array('field' => 'id', 'expr' => 'in', 'value' => $data['data']['id'])))
        );

        // Totals for currentAccountObj
        $sumSubTotal = $sumTotalVat = 0;

        // Set object detail
        if ($options) {
            // Entities names
            $parentConf = $this->getParentConf();
            $bookingObj = $parentConf['obj'];
            $bookingEntity = $parentConf['entity']; // Upper case
            $bookingServicePriceEntity = ($bookingEntity . 'ServicePrice'); // Upper case
            $bookingServicePriceEntitySetMethod = ('set' . $bookingServicePriceEntity . 'Obj');
            $bookingClientCurrentAccountDetailClass = ($this->localConf['entityClass'] . 'Detail');

            // Get objects detail
            $objectsArr = $this->getRepositoryService($bookingServicePriceEntity, 'BookingBundle')
                ->execute(
                    'getNotInvoicedValuesByBooking',
                    array($bookingObj, $options)
                );

            // Set values
            $priceService = $this->get('app.service.price');
            foreach ($objectsArr as &$obj) {
                // Get booking service price
                $bookingServicePriceObj = $this->getRepositoryService('TravelBookingServicePrice', 'BookingBundle')->execute(
                    'findOneById',
                    array($obj['id'])
                );

                // Get VAT code. VAT code can be changed between the service creation time and now, so we calculate the VAT again.
                $serviceObj = $bookingServicePriceObj->getBookingServiceObj()->getServiceObj();
                $vatCodeObj = $serviceObj->getVatCodeObj();
                $obj['vatCode_name'] = $vatCodeObj->getName();
                $obj['vatCode_percentage'] = $vatCodeObj->getPercentage();

                // Objects
                $bookingClientCurrentAccountDetailObj = new $bookingClientCurrentAccountDetailClass();
                parent::setObjectDefaultValues($bookingClientCurrentAccountDetailObj);
                $bookingClientCurrentAccountDetailObj->$bookingServicePriceEntitySetMethod($bookingServicePriceObj);
                $clientCurrentAccountDetailObj = new ClientCurrentAccountDetail();
                parent::setObjectDefaultValues($clientCurrentAccountDetailObj);
                $clientCurrentAccountDetailObj->setClientCurrentAccountObj($currentAccountObj);
                $bookingClientCurrentAccountDetailObj->setClientCurrentAccountDetailObj($clientCurrentAccountDetailObj);
                $clientCurrentAccountDetailObj->setServiceObj($serviceObj);
                $clientCurrentAccountDetailObj->setVatCodeObj($vatCodeObj);

                // Properties
                $totalUnitValue = $priceService->calcUnitFromTotal($obj['notInvoicedValue'], $obj['quantity']);
                $values = $priceService->splitTotalUnit($totalUnitValue, $obj['vatCode_percentage'], true);
                $clientCurrentAccountDetailObj->setDescription($obj['description']);
                $clientCurrentAccountDetailObj->setQuantity($obj['quantity']);
                $clientCurrentAccountDetailObj->setValue($values['value']);
                $clientCurrentAccountDetailObj->setVatValue($values['vatValue']);

                // Totals
                $subTotal = $priceService->calcTotal($values['value'], $obj['quantity']);
                $totalVat = $priceService->calcTotal($values['vatValue'], $obj['quantity']);
                $clientCurrentAccountDetailObj->setSubTotal($subTotal);
                $clientCurrentAccountDetailObj->setTotalVat($totalVat);
                $sumSubTotal += $subTotal;
                $sumTotalVat += $totalVat;

                // Save object in session
                // Set the parent for CurrentAccountDetail objects
                $localParent = $this->flags['parent'];
                $this->flags['parent'] = $currentAccountObj->getId();
                parent::saveForm(null, $bookingClientCurrentAccountDetailObj);
                $this->flags['parent'] = $localParent; // Reset to local parent
            }
        }

        // Update current account object
        $currentAccountObj->setSubTotal($sumSubTotal);
        $currentAccountObj->setTotalVat($sumTotalVat);

        return $this->getResponse(true);
    }

    /**
     * @Route("/booking/travel-booking-client-current-account/add-detail/{travelBooking}/{id}",
     *     name="_booking__travel_booking_client_current_account__add_detail",
     *     defaults={"id" = null}
     * )
     *
     * Add objects detail
     * @param Request $request
     * @param $travelBooking
     * @param $id
     * @return mixed
     */
    public function addDetailAction(Request $request, $travelBooking, $id)
    {
        // Set configuration
        $this->flags['storage'] = 'session'; // Session storage is used
        $this->flags['hasForm'] = true;
        $this->initChild($request, array($travelBooking));
        foreach(array('clientDocumentTypeObj', 'clientObj') as $field) {
            if (($key = array_search($field, $this->templateConf['fields']['form'])) !== false) {
                unset($this->templateConf['fields']['form'][$key]);
            }
        }
        $this->localConf['entityFields']['clientCurrentAccountObj']['typeDetail']['formClass'] = str_replace(
            '%formTypeStep%',
            '2',
            $this->localConf['entityFields']['clientCurrentAccountObj']['typeDetail']['formClass']
        );

        // Retrieve object from session
        $obj = $this->getObject($id);

        // Build form
        $this->localConf['form']['buttons'] = 'none';
        $form = $this->buildForm($request, $obj);

        // Handle request
        $form->handleRequest($request);

        // Check if is submitted
        if($form->isSubmitted()) {
            // Validate dates
            if (!$this->validateDates($obj)) {
                return $this->getResponse(true);
            }

            // Get detail objects
            $detailObjects = $this->container->get('app.service.session_storage')->getChildObjects(
                $obj->getClientCurrentAccountObj()->getId(),
                $this->localConf['entity'] . 'Detail'
            );

            // Validate totals
            $documentTotals = array('subTotal' => 0, 'totalVat' => 0, 'total' => 0);
            $submittedData = $this->getRequestData($request)['form']['clientCurrentAccountObj'];
            foreach ($detailObjects as $detailObj) {
                $detailObj = $detailObj->getClientCurrentAccountDetailObj();

                // Note: Detail is already validated when are determined the default values,
                // and when are submitted in your own form

                $documentTotals['subTotal'] += $detailObj->getSubTotal();
                $documentTotals['totalVat'] += $detailObj->getTotalVat();
                $documentTotals['total'] += $detailObj->getTotal();
            }
            $errorMessage = null;
            $priceService = $this->get('app.service.price');
            if ($documentTotals['total'] <= 0) {
                $errorMessage = 'Document value should be greater than zero.';
            } elseif (!$priceService->isEqual($submittedData['subTotal'], $documentTotals['subTotal'])) {
                $errorMessage = ($submittedData['subTotal'].' Does not match with '.$documentTotals['subTotal']);
            } elseif (!$priceService->isEqual($submittedData['totalVat'], $documentTotals['totalVat'])) {
                $errorMessage = ($submittedData['totalVat'].' Does not match with '.$documentTotals['totalVat']);
            } elseif (!$priceService->isEqual($submittedData['total'], $documentTotals['total'])) {
                $errorMessage = ($submittedData['total'].' Does not match with '.$documentTotals['total']);
            }
            if ($errorMessage) {
                $this->responseConf['status'] = 0;
                $this->addFlashMessage(
                    ('Invalid total was detected.<br/>' . $errorMessage),
                    'Data not persisted',
                    'error'
                );
                return $this->getResponse(true);
            }

            // Set document totals
            $currentAccountObj = $obj->getClientCurrentAccountObj();
            $currentAccountObj->setSubTotal($documentTotals['subTotal']);
            $currentAccountObj->setTotalVat($documentTotals['totalVat']);

            // Save session ids to remove objects from session after success save in database.
            $sessionIds = array(
                'bookingClientCurrentAccount' => $obj->getId(),
                'clientCurrentAccount' => $obj->getClientCurrentAccountObj()->getId()
            );

            // Clear ids to may be saved in database
            $obj->setId(null);
            $obj->getClientCurrentAccountObj()->setId(null);

            // Save object in entity manager
            $this->flags['storage'] = 'db'; // Switch storage to database
            $this->saveForm($form, $obj, true, false); // Doesn't flush data until all objects are inserted

            // Save detail objects in database
            foreach ($detailObjects as $detailObj) {
                // Get object to set again foreign objects, otherwise the save will fail,
                // because entity manager does not recognize the foreign objects saved in session storage
                $detailObj = $this->getObjectFromSS($detailObj->getId());

                // Clear id to may be saved in database
                $detailObj->setId(null);
                parent::saveObject($detailObj);
            }

            // Flush (persist) all objects in database
            $this->flushEm();

            if($this->responseConf['status'] == 1) {
                $this->setDependenciesInvoice();

                // Remove objects from session
                $this->deleteObjectFromSS($sessionIds['bookingClientCurrentAccount']);
                $this->deleteObjectFromSS($sessionIds['clientCurrentAccount']);

                // Config response
                if ($this->responseConf['hasObject']) {
                    $this->responseConf['object'] = $this->normalizeObject($obj); // Object updated
                }

                // Refresh to update fields choices
                $this->refreshConf();

                // Flash messages to display to user
                $this->addFlashMessage(
                    'The data has been updated',
                    'Success',
                    'success'
                );
            }

            return $this->getResponse(true);
        }

        // Render form
        return $this->render('AccountingBundle:BaseCurrentAccount:add-detail.html.twig', array(
            '_conf' => $this->templateConf,
            '_form' => $form->createView()
        ));
    }

    /**
     * @Route("/booking/travel-booking-client-current-account/edit/{travelBooking}/{id}",
     *     name="_booking__travel_booking_client_current_account__edit",
     *     defaults={"id" = null}
     * )
     *
     * Overrides parent method
     * @param Request $request
     * @param $travelBooking
     * @param $id
     * @return mixed
     */
    public function editLocalChildAction(Request $request, $travelBooking, $id)
    {
        // Set configuration
        $this->flags['hasForm'] = true;
        $this->initChild($request, array($travelBooking));
        foreach(array('clientDocumentTypeObj', 'clientObj') as $field) {
            if (($key = array_search($field, $this->templateConf['fields']['form'])) !== false) {
                unset($this->templateConf['fields']['form'][$key]);
            }
        }
        $this->localConf['entityFields']['clientCurrentAccountObj']['typeDetail']['formClass'] = str_replace(
            '%formTypeStep%',
            '2',
            $this->localConf['entityFields']['clientCurrentAccountObj']['typeDetail']['formClass']
        );

        $obj = $this->getObject($id);

        // Build form
        $form = $this->buildForm($request, $obj);

        // Handle request
        $form->handleRequest($request);

        // Check if is submitted
        if($form->isSubmitted()) {
            // Validate dates
            if (!$this->validateDates($obj)) {
                return $this->getResponse(true);
            }

            $this->saveForm($form, $obj);

            if($this->responseConf['status'] == 1) {
                $this->setDependenciesInvoice();
            }

            return $this->getResponse(true);
        }

        // Render form
        return $this->render('AccountingBundle:BaseCurrentAccount:edit.html.twig', array(
            '_conf' => $this->templateConf,
            '_form' => $form->createView()
        ));
    }

    /**
     * @Route("/booking/travel-booking-client-current-account/edit-entity-address/{travelBooking}/{id}",
     *     name="_booking__travel_booking_client_current_account__edit_entity_address",
     *     defaults={"id" = null}
     * )
     *
     * Edit entity address action (to change default entity address)
     * @param Request $request
     * @param $travelBooking
     * @param $id
     * @return mixed
     */
    public function editEntityAddressAction(Request $request, $travelBooking, $id)
    {
        // Set configuration
        $this->initChild($request, array($travelBooking));

        // Retrieve object from storage
        $obj = $this->getObject($id);

        // Save new entity address
        $data = $this->getAndProcessRequestData($request);
        $address_id = ((isset($data['data']) && isset($data['data']['entityAddressObj']))
            ? $data['data']['entityAddressObj']
            : null
        );

        if ($address_id) {
            $entityAddressObj = $this->getRepositoryService('EntityAddress', 'EntitiesBundle')
                ->execute(
                    'findOneById',
                    array(
                        $address_id
                    )
                );

            if (is_object($entityAddressObj)) {
                $clientCurrentAccountObj = $obj->getClientCurrentAccountObj();
                foreach (['street1', 'street2', 'postCode', 'city', 'region', 'country'] as $field) {
                    $getFieldMethod = 'get' . ucfirst($field);
                    $setFieldMethod = 'setEntity' . ucfirst($field);
                    $clientCurrentAccountObj->$setFieldMethod($entityAddressObj->$getFieldMethod());
                }
            }
        }

        $this->saveObject($obj, true, true);
        return $this->getResponse(true);
    }

    /**
     * @Route("/booking/travel-booking-client-current-account/delete/{travelBooking}/{id}",
     *     name="_booking__travel_booking_client_current_account__delete",
     *     defaults={"id" = null}
     * )
     *
     * Overrides parent method
     * @param Request $request
     * @param $travelBooking
     * @param $id
     * @return mixed
     */
    public function deleteLocalChildAction(Request $request, $travelBooking, $id)
    {
        return parent::deleteChildAction($request, array($travelBooking), $id);
    }

    /**
     * @Route("/booking/travel-booking-client-current-account/data/{travelBooking}",
     *     name="_booking__travel_booking_client_current_account__data"
     * )
     *
     * Overrides parent method
     * @param Request $request
     * @param $travelBooking
     * @return mixed
     */
    public function dataLocalChildAction(Request $request, $travelBooking)
    {
        return parent::dataChildAction($request, array($travelBooking));
    }

    /**
     * @Route("/booking/travel-booking-client-current-account/conf/{travelBooking}",
     *     name="_booking__travel_booking_client_current_account__conf"
     * )
     *
     * Overrides parent method
     * @param Request $request
     * @param $travelBooking
     * @return mixed
     */
    public function confLocalChildAction(Request $request, $travelBooking)
    {
        return parent::confChildAction($request, array($travelBooking));
    }

    /**
     * Overrides parent method
     * @param $object
     * @return $this
     */
    protected function setObjectDefaultValues($object)
    {
        parent::setObjectDefaultValues($object);

        if (empty($object->getClientCurrentAccountObj())) {
            // Add a new ClientCurrentAccount instance
            $clientCurrentAccountObj = new ClientCurrentAccount();
            parent::setObjectDefaultValues($clientCurrentAccountObj);
            // Save $clientCurrentAccountObj with a new id in session
            // to be used for children (ClientCurrentAccountDetail)
            parent::saveObjectToSS($clientCurrentAccountObj);
            // Add $clientCurrentAccountObj to object
            $object->setClientCurrentAccountObj($clientCurrentAccountObj);

            // Set Store Data (this info is saved in document, is static)
            $storeObj = $clientCurrentAccountObj->getStoreObj();
            $storeAddressObj = $storeObj->getStoreAddressObj();
            $clientCurrentAccountObj->setStoreLegalName($storeObj->getLegalName(true));
            $clientCurrentAccountObj->setStoreTaxNumber($storeObj->getTaxNumber(true));
            foreach (['street1', 'street2', 'postCode', 'city', 'region', 'country'] as $field) {
                $getFieldMethod = 'get' . ucfirst($field);
                $setFieldMethod = 'setStore' . ucfirst($field);
                $clientCurrentAccountObj->$setFieldMethod($storeAddressObj->$getFieldMethod());
            }

            // Set client object
            $clientObj = reset($this->parentConf)['obj']->getClientObj();
            $clientCurrentAccountObj->setClientObj($clientObj);

            // Set totals
            $clientCurrentAccountObj->setSubTotal(0)->setTotalVat(0);
        } else {
            // Get client current account obj
            $clientCurrentAccountObj = $object->getClientCurrentAccountObj();

            // Set client data
            $clientObj = $clientCurrentAccountObj->getClientObj();
            $entityObj = $clientObj->getEntityObj();
            $entityAddressObj = $this->getRepositoryService('EntityAddress', 'EntitiesBundle')
                ->execute('getForDocumentsByEntity', array($entityObj));
            $clientCurrentAccountObj->setEntityLegalName($entityObj->getLegalName(true));
            $clientCurrentAccountObj->setEntityTaxNumber($entityObj->getTaxNumber());
            foreach (['street1', 'street2', 'postCode', 'city', 'region', 'country'] as $field) {
                $getFieldMethod = 'get' . ucfirst($field);
                $setFieldMethod = 'setEntity' . ucfirst($field);
                $clientCurrentAccountObj->$setFieldMethod($entityAddressObj->$getFieldMethod());
            }
        }

        return $this;
    }

    /**
     * Set default dates.
     * Date (needs to be consistent with the sequence date/number) and due date
     * @param $object
     * @return $this
     */
    protected function setDefaultDates($object) {
        $limitDateRange = $this->getLimitDateRange($object);

        // Set object default dates
        $object->getClientCurrentAccountObj()
            ->setDate($limitDateRange['max']) // Today
            ->setDueDate(new \DateTime('+30 day'));

        return $this;
    }

    /**
     * Validate dates.
     * Date (needs to be consistent with the sequence date/number) and due date
     * @param $object
     * @return boolean
     */
    protected function validateDates($object) {
        $limitDateRange = $this->getLimitDateRange($object);

        if (($object->getClientCurrentAccountObj()->getDate() < $limitDateRange['min'])
            || ($object->getClientCurrentAccountObj()->getDate() > $limitDateRange['max'])
            || ($object->getClientCurrentAccountObj()->getDate() > $object->getClientCurrentAccountObj()->getDueDate())
        ) {
            $this->responseConf['status'] = 0;
            $this->addFlashMessage(
                'Invalid date.',
                'Data not persisted',
                'error'
            );
            return false;
        }

        return true;
    }

    /**
     * Get limit date range
     * @param $object
     * @return array
     */
    protected function getLimitDateRange($object) {
        // Set setting flag to determines the code field
        // (it's need also to validate date and determine date ranges to template)
        $this->setSettingFlag($object);

        // By default you can select a date from 5 days ago until today
        $limitDateRange = array('min' => (new \DateTime('-5 day')), 'max' => (new \DateTime()));

        $surroundingObjects = $this->getSurroundingObjects($object->getClientCurrentAccountObj()->getCode());
        // Editing (limit dates between 'prev' and 'next' objects)
        if ($surroundingObjects['next'] && $surroundingObjects['prev']) {
            $limitDateRange['max'] = $surroundingObjects['next']->getDate();
            $limitDateRange['min'] = $surroundingObjects['prev']->getDate();
        }
        // Add (limit dates according with legal rules)
        elseif ($surroundingObjects['prev'] && ($surroundingObjects['prev']->getDate() > $limitDateRange['min'])) {
            $limitDateRange['min'] = $surroundingObjects['prev']->getDate();
        }

        // Set limit date range for template validations
        $this->responseConf['localData']['dateRange'] = array(array(
            'startDate' => $object->normalizeDate($limitDateRange['min']),
            'endDate' => $object->normalizeDate($limitDateRange['max'])
        ));

        return $limitDateRange;
    }

    /**
     * Set Response Store Info
     * Store info to be used in template
     * @param $storeObj
     * @return $this
     */
    protected function setResponseStoreInfo($storeObj) {
        // Set store optional info in local data (this info is not saved in document, is dynamic)
        $this->responseConf['localData']['storeInfo'] = array_merge(
            $this->getRepositoryService('StorePhone', 'AdminBundle')
                ->execute('getForDocumentsByStore', array($storeObj)),
            $this->getRepositoryService('StoreEmail', 'AdminBundle')
                ->execute('getForDocumentsByStore', array($storeObj)),
            $this->getRepositoryService('StoreLink', 'AdminBundle')
                ->execute('getForDocumentsByStore', array($storeObj))
        );

        return $this;
    }

    /**
     * Set setting flag
     * @param $object
     * @return $this
     * @throws \Exception
     */
    protected function setSettingFlag($object) {
        // Set only once
        if (!empty($this->flags['setting'])) {
            return $this;
        }

        if($object->getClientCurrentAccountObj()->getClientDocumentTypeObj()) {
            $this->flags['setting'] = array(
                'Bundle' => 'AccountingBundle',
                'entity' => 'ClientDocumentTypeSetting',
                'criteria' => array(
                    array(
                        'field' => 'clientDocumentTypeObj',
                        'expr' => 'eq',
                        'value' => $object->getClientCurrentAccountObj()->getClientDocumentTypeObj() // Get document type
                    )
                )
            );

            return $this;
        }

        throw new \Exception('Document type not defined to determine settings for "Code".');
    }

    /**
     * Set invoice for dependencies
     * @return $this
     */
    protected function setDependenciesInvoice() {
        // Check if there are no errors in previous updates
        if ($this->responseConf['status'] == 1) {
            $parentConf = reset($this->parentConf);
            $bookingObj = $parentConf['obj'];

            // Update booking invoice status
            $this->getLocalRepositoryService()
                ->execute(
                    'setBookingInvoiceStatus',
                    array($bookingObj)
                );

            parent::saveObject($bookingObj);
        }

        return $this;
    }

    /**
     * Set Current Account Total Vat Split By Code
     * @param $object
     * @return $this
     */
    protected function setCurrentAccountTotalVatSplitByCode($object) {
            $currentAccountObj = $object->getClientCurrentAccountObj();

            switch ($this->flags['storage']) {
                case 'session':
                    // Get detail objects
                    $detailObjects = $this->container->get('app.service.session_storage')->getChildObjects(
                        $currentAccountObj->getId(),
                        ($this->localConf['entity'] . 'Detail')
                    );

                    // Calc totals
                    $totalVatSplitByCode = array();
                    foreach ($detailObjects as $detailObj) {
                        // Rebuild object to fill objects dependencies, otherwise only ids are available in dependencies
                        $detailObj = $this->getObjectFromSS($detailObj->getId());
                        $currentAccountDetailObj = $detailObj->getClientCurrentAccountDetailObj();
                        $vatCodeObj = $currentAccountDetailObj->getVatCodeObj();
                        if (isset($totalVatSplitByCode[$vatCodeObj->getId()])) {
                            $totalVatSplitByCode[$vatCodeObj->getId()]['subTotal'] += $currentAccountDetailObj->getSubTotal();
                            $totalVatSplitByCode[$vatCodeObj->getId()]['totalVat'] += $currentAccountDetailObj->getTotalVat();
                            $totalVatSplitByCode[$vatCodeObj->getId()]['total'] += $currentAccountDetailObj->getTotal();
                        } else {
                            $totalVatSplitByCode[$vatCodeObj->getId()] = array(
                                'name' => $vatCodeObj->getName(),
                                'description' => $vatCodeObj->getDescription(),
                                'percentage' => $vatCodeObj->getPercentage(),
                                'subTotal' => $currentAccountDetailObj->getSubTotal(),
                                'totalVat' => $currentAccountDetailObj->getTotalVat(),
                                'total' => $currentAccountDetailObj->getTotal()
                            );
                        }
                    }

                    $this->responseConf['localData']['totalVatSplitByCode'] = array_values($totalVatSplitByCode);
                    break;
                default:
                    $this->responseConf['localData']['totalVatSplitByCode']
                        = $this->getRepositoryService('ClientCurrentAccountDetail', 'AccountingBundle')
                        ->execute(
                            'getCurrentAccountTotalVatSplitByCode',
                            array($currentAccountObj)
                        );
            }

            return $this;
    }
}