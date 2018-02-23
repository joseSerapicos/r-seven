<?php

namespace BookingBundle\Controller;

use Sensio\Bundle\FrameworkExtraBundle\Configuration\Route;
use Symfony\Component\HttpFoundation\Request;

class PackageBookingController extends BaseBookingController
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
                'name' => '_booking__package_booking__get'
            ),
            'addStep1' => array(
                'name' => '_booking__package_booking__add_step1'
            ),
            'addStep2' => array(
                'name' => '_booking__package_booking__add_step2',
            ),
            'addStep3' => array(
                'name' => '_booking__package_booking__add_step3',
            ),
            'addStep4' => array(
                'name' => '_booking__package_booking__add_step4',
            ),
            'addStep5' => array(
                'name' => '_booking__package_booking__add_step5',
            ),
            'edit' => array(
                'name' => '_booking__package_booking__edit'
            ),
            'delete' => array(
                'name' => '_booking__package_booking__delete'
            ),
            'detail' => array(
                'name' => '_booking__package_booking__detail'
            )
        );

        parent::init($request);

        // Templates
        $this->localConf['templates']['edit'] = 'BookingBundle:BaseBooking:edit.html.twig';

        // Search
        $this->templateConf['search']['fields'] = array(
            'code', 'operator_avatar', 'client_avatar', 'client_name', 'place_iata', 'placeTo_iata', 'startDate', 'endDate',
            'totalCost', 'totalSell', 'totalMarkup', 'invoiceStatus', 'confirmationStatus'
        );

        // Actions for template/view
        $this->templateConf['actions'] = array_merge(
            $this->templateConf['actions'],
            array(
                'detail' => true,
                'search' => true
            )
        );

        return $this;
    }

    /**
     * @Route("/booking/package-booking",
     *     name="_booking__package_booking__index"
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
     * @Route("/booking/package-booking/detail/{id}",
     *     name="_booking__package_booking__detail",
     *     defaults={"id" = null},
     * )
     *
     * Detail action
     * @param Request $request
     * @param $id (this parameter is mandatory, but when the conf is set there is not any id to generate the route,
     * the id is provided at runtime so this requires a default value in the route definition)
     * @return mixed
     */
    public function detailAction(Request $request, $id)
    {
        return parent::detailAction($request, $id);
    }

    /**
     * @Route("/booking/package-booking/get/{id}",
     *     name="_booking__package_booking__get",
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
     * @Route("/booking/package-booking/add-step1/{id}",
     *     name="_booking__package_booking__add_step1",
     *     defaults={"id" = null}
     * )
     *
     * Action to add objects using the form
     * @param Request $request
     * @param $id (used when return to the first step)
     * @return mixed
     */
    public function addStep1Action(Request $request, $id)
    {
        // Set configuration
        $this->flags['storage'] = 'session'; // Session storage is used
        $this->flags['hasForm'] = true;
        $this->init($request);
        $this->templateConf['fields']['form'] = array(
            'userObj', 'clientObj', 'clientIsPax'
        );

        // Get object
        $obj = $this->getObject($id);

        // Build form
        $form = $this->createForm('BookingBundle\Form\PackageBookingAddStep1Type', $obj);

        // Handle request
        $form->handleRequest($request);

        // Check if is submitted
        if($form->isSubmitted()) {
            // Get request data
            $data = $this->getRequestData($request);

            // Object is saved in session
            if ($this->preSaveObject($obj, null)) {
                // Set response
                // This is to avoid normalizing the object by the "saveForm",
                // because we are still going to make changes on it (in "postSaveObject")
                $this->responseConf['hasObject'] = false;
                $this->saveForm($form, $obj);

                $this->flags['parent'] = $obj->getId();// Necessary to add objects associated
            }
            $this->postSaveObject($obj, $data['form']);

            // Save $bookingObj also, because it is the parent of PackageBookingService
            $bookingObj = $obj->getBookingObj();
            $this->saveObjectToSS($bookingObj);

            // Check if object had success on save
            if($this->responseConf['status'] == 1) {
                // Set response
                // Now the object can be normalized, all changes was made on it (after "postSaveObject")
                $this->responseConf['hasObject'] = true;
                $this->responseConf['object'] = $this->normalizeObject($obj);
            }

            return $this->getResponse(true);
        }

        // Render form
        return $this->render($this->localConf['templatesPath'].'add-step1.html.twig', array(
            '_conf' => $this->templateConf,
            '_form' => $form->createView(),
            '_containers' => array(
                array(
                    'label' => 'Client'
                ),
                array(
                    'label' => 'Package'
                ),
                array(
                    'label' => 'Dates'
                ),
                array(
                    'label' => 'Services'
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
     * @Route("/booking/package-booking/add-step2/{id}",
     *     name="_booking__package_booking__add_step2",
     *     defaults={"id" = null}
     * )
     *
     * Action to add dates, allot and price of object
     * @param Request $request
     * @param $id
     * @return mixed
     */
    public function addStep2Action(Request $request, $id)
    {
        $bookingContextUC = $this->getBookingContext(true);

        // Set configuration
        $this->flags['storage'] = 'session'; // Session storage is used
        $this->flags['hasForm'] = true;
        $this->init($request);
        $this->templateConf['fields']['form'] = array(
            'startDateManual', 'endDateManual', 'quantityManual',
            'confirmationStatus', 'confirmationStatusManual',
            'isAutoAvailability', 'isAutoAllot', 'isAutoPrice'
        );

        $obj = $this->getObject($id);


        // Build form
        $form = $this->createForm('BookingBundle\Form\\' . $bookingContextUC . 'BookingServiceAddStep2Type', $obj);

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
                return $this->getResponse(true);
            }
            // Set quantity manually (from the fake field)
            $bookingServiceObj->setQuantity($data['form']['bookingServiceObj']['quantityManual']);

            // Control errors. We need to call always the availability, allot and price to sent the debug update to user
            $hasError = false;

            // Availability
            // Set dates manually (from the fake fields)
            $bookingServiceObj->setStartDate(new \DateTime($data['form']['bookingServiceObj']['startDateManual']));
            $bookingServiceObj->setEndDate(new \DateTime($data['form']['bookingServiceObj']['endDateManual']));
            if (!self::handleAvailability($this, $bookingServiceObj)) {
                $hasError = true;
            }

            // Allot
            // @TODO: this is necessary????: Default value (if auto allot is enabled this value will be override)
            $bookingServiceObj->setConfirmationStatus($data['form']['bookingServiceObj']['confirmationStatusManual']);
            if (!self::handleAllot($this, $bookingServiceObj)) {
                // @TODO: try avoid this: Set object updated with the allotStatus to response
                //$this->responseConf['hasObject'] = true;
                //$this->responseConf['object'] = $this->normalizeObject($obj);
                $hasError = true;
            }

            // Price
            if (!self::handlePrice($this, $bookingServiceObj)) {
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

            return $this->getResponse(true);
        }

        // Render form
        return $this->render($this->localConf['templates']['addStep2'], array(
            '_conf' => $this->templateConf,
            '_form' => $form->createView()
        ));
    }

    /**
     * @Route("/booking/package-booking/add-step3/{id}",
     *     name="_booking__package_booking__add_step3",
     *     defaults={"id" = null}
     * )
     *
     * Action to add detail info of object
     * @param Request $request
     * @param $id
     * @return mixed
     */
    public function addStep3Action(Request $request, $id)
    {
        $bookingContextUC = $this->getBookingContext(true);

        // Set configuration only if not initialized (can be initialized by a children)
        if (!$this->isInitialized) {
            $this->flags['storage'] = 'session'; // Session storage is used
            $this->flags['hasForm'] = true;
            $this->init($request);
            $this->templateConf['fields']['form'] = array(
                'icon', 'name', 'description', 'supplierObj', 'reference'
            );
        }

        $obj = $this->getObject($id);

        // Build form
        $form = $this->createForm('BookingBundle\Form\\' . $bookingContextUC . 'BookingServiceAddStep3Type', $obj);

        // Handle request
        $form->handleRequest($request);

        // Check if is submitted
        if($form->isSubmitted()) {
            $this->saveForm($form, $obj);

            return $this->getResponse(true);
        }

        // Render form
        return $this->render($this->localConf['templates']['addStep3'], array(
            '_conf' => $this->templateConf,
            '_form' => $form->createView()
        ));
    }

    /**
     * @Route("/booking/package-booking/add-step4/{id}",
     *     name="_booking__package_booking__add_step4",
     *     defaults={"id" = null}
     * )
     *
     * Action to save all objects in database
     * @param Request $request
     * @param $id
     * @return mixed
     */
    public function addStep4Action(Request $request, $id)
    {
        $bookingContextUC = $this->getBookingContext(true);

        $this->flags['storage'] = 'session'; // Session storage is used
        $this->flags['hasForm'] = true;
        $this->init($request);

        $obj = $this->getObject($id);

        $bookingServiceObj = $obj->getBookingServiceObj();

        // Check dates (ensure that dates continues valid)
        if (!self::handleAvailability($this, $bookingServiceObj)) {
            return $this->getResponse(true);
        }

        // Check allot (ensure that allot continue valid)
        if (!self::handleAllot($this, $bookingServiceObj)) {
            return $this->getResponse(true);
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
            $this->deleteObjectFromSS($sessionIds['bookingService']);

            // Refresh to update fields choices
            $this->refreshConf();

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

        return $this->getResponse(true);
    }

    /**
     * @Route("/booking/package-booking/add-step5/{id}",
     *     name="_booking__package_booking__add_step5",
     *     defaults={"id" = null}
     * )
     *
     * Action to save all objects in database
     * @param Request $request
     * @param $id
     * @return mixed
     */
    public function addStep5Action(Request $request, $id)
    {
        $bookingContextUC = $this->getBookingContext(true);

        $this->flags['storage'] = 'session'; // Session storage is used
        $this->flags['hasForm'] = true;
        $this->init($request);

        $obj = $this->getObject($id);

        $bookingServiceObj = $obj->getBookingServiceObj();

        // Check dates (ensure that dates continues valid)
        if (!self::handleAvailability($this, $bookingServiceObj)) {
            return $this->getResponse(true);
        }

        // Check allot (ensure that allot continue valid)
        if (!self::handleAllot($this, $bookingServiceObj)) {
            return $this->getResponse(true);
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
            $this->deleteObjectFromSS($sessionIds['bookingService']);

            // Refresh to update fields choices
            $this->refreshConf();

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

        return $this->getResponse(true);
    }

    /**
     * @Route("/booking/package-booking/edit/{id}",
     *     name="_booking__package_booking__edit",
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
     * @Route("/booking/package-booking/delete/{id}",
     *     name="_booking__package_booking__delete",
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
     * @Route("/booking/package-booking/detail-content",
     *     name="_booking__package_booking__detail_content")
     *
     * Action to get the base to build the content of detail
     * @return mixed
     */
    public function detailTabsAction()
    {
        return parent::detailTabsAction();
    }

    /**
     * @Route("/booking/package-booking/current-accounts-menus",
     *     name="_booking__package_booking__current_accounts_menus"
     * )
     *
     * Overrides parent method
     * @return mixed
     */
    public function currentAccountsMenusAction()
    {
        return parent::currentAccountsMenusAction();
    }
}