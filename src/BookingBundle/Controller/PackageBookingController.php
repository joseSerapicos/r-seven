<?php

namespace BookingBundle\Controller;

use BookingBundle\Entity\BookingServicePrice;
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
            'addStep6' => array(
                'name' => '_booking__package_booking__add_step6',
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

    //////////////////////////
    // REMAIN STEPS ARE IN PackageBookingServiceController
    ///////////////////////////////////////////////////////

    /**
     * @Route("/booking/package-booking/add-step6/{id}/{service}",
     *     name="_booking__package_booking__add_step6",
     *     defaults={"id" = null, "service" = null}
     * )
     * Action to save all objects in database
     * @param Request $request
     * @param $id
     * @param $service
     * @return mixed
     */
    public function addStep6Action(Request $request, $id, $service)
    {
        $this->flags['storage'] = 'session'; // Session storage is used
        $this->flags['hasForm'] = true;
        $this->init($request);

        ///////////////////////////////////////////
        // Set PackageService to PackageBooking
        //////////////////////////////////////////
        $packageBookingObj = $this->getObjectFromSS($id);
        $bookingObj = $packageBookingObj->getBookingObj();
        // PackageBookingService of package
        $packageBookingServiceObj_package = $this->getObjectFromSS($service);
        // BookingService of package
        $bookingServiceObj_package = $packageBookingServiceObj_package->getBookingServiceObj();
        // Service of package
        $serviceObj_package = $bookingServiceObj_package->getServiceObj();
        // Get PackageService object (get from $serviceObj that is the your inherited object)
        $packageServiceObj = $this->getRepositoryService('PackageService', 'ServicesBundle')
            ->execute('findOneByServiceObj', array($serviceObj_package));
        $packageBookingObj->setPackageServiceObj($packageServiceObj);


        ///////////////////////////////////////////
        // Check services auto controls to ensure that they continue valid
        /////////////////////////////////////////////////////////////////////////
        // Booking Service
        $packageBookingServiceObjArr = $this->getChildObjectsFromSS($bookingObj->getId(), 'PackageBookingService');

        if (is_array($packageBookingServiceObjArr)) {
            foreach ($packageBookingServiceObjArr as $packageBookingServiceObj) {
                $bookingServiceObj = $packageBookingServiceObj->getBookingServiceObj();

                // Get Service in PackageServiceService to get auto controls (if the service is the PackageService,
                // then there are no PackageServiceService associated to get the auto controls)
                $autoControls = null;
                if ($bookingServiceObj != $bookingServiceObj_package) {
                    $packageServiceServiceObj = $this->getRepositoryService('PackageServiceService', 'ServicesBundle')
                        ->execute(
                            'findOneBy',
                            array(array(
                                'packageServiceObj' => $packageServiceObj,
                                'serviceObj' => $bookingServiceObj->getServiceObj()
                            ))
                        );
                    $autoControls = PackageBookingServiceController::getPackageServiceServiceAutoControls($packageServiceServiceObj);
                }

                // Check allot (ensure that allot continue valid)
                $targetServiceObj = ($autoControls ? $autoControls['allot']['targetService'] : null);
                if (!BaseBookingServiceController::handleAllot($this, $bookingServiceObj, $targetServiceObj)) {
                    return $this->getResponse(true);
                }
            }
        }


        ///////////////////////////////////////////
        // Set clones
        //////////////////////////////////////////
        $clonedObjects = array();

        // NOTE: Session storage objects needs to be getted again to set foreign objects, otherwise the save will fail,
        // because entity manager does not recognize the foreign objects saved in session storage

        // Booking
        $clonedObjects[$packageBookingObj->getId()] = clone $packageBookingObj;
        $clonedObjects[$bookingObj->getId()] = clone $bookingObj;

        // Booking Pax
        if ($bookingPaxObj = $bookingObj->getBookingPaxObj()) {
            $packageBookingPaxObj = $this->container->get('app.service.session_storage')->getParentObj($bookingPaxObj->getId());
            $clonedObjects[$packageBookingPaxObj->getId()] = clone $packageBookingPaxObj;
            $clonedObjects[$bookingPaxObj->getId()] = clone $bookingPaxObj;
        }

        // Booking Service
        $packageBookingServiceObjArr = $this->getChildObjectsFromSS($bookingObj->getId(), 'PackageBookingService');
        if (is_array($packageBookingServiceObjArr)) {
            foreach ($packageBookingServiceObjArr as $packageBookingServiceObj) {
                $clonedObjects[$packageBookingServiceObj->getId()] = clone $packageBookingServiceObj;

                $bookingServiceObj = $packageBookingServiceObj->getBookingServiceObj();
                $bookingServiceObj = $this->getObjectFromSS($bookingServiceObj->getId());
                $clonedObjects[$bookingServiceObj->getId()] = clone $bookingServiceObj;

                // Booking Service Price
                $bookingServicePriceObjArr = $this->getChildObjectsFromSS($bookingServiceObj->getId(), 'BookingServicePrice');
                if (is_array($bookingServicePriceObjArr)) {
                    foreach ($bookingServicePriceObjArr as $bookingServicePriceObj) {
                        $bookingServicePriceObj = $this->getObjectFromSS($bookingServicePriceObj->getId());
                        $clonedObjects[$bookingServicePriceObj->getId()] = clone $bookingServicePriceObj;
                    }
                }
            }
        }


        ///////////////////////////////////////////
        // Set object to save in database
        //////////////////////////////////////////
        $objectsToSaveInDb = array();

        // Booking
        $packageBookingObj_cloned = $clonedObjects[$packageBookingObj->getId()];
        $packageBookingObj_cloned->setBookingObj($clonedObjects[$packageBookingObj_cloned->getBookingObj()->getId()]);
        $objectsToSaveInDb[] = $packageBookingObj_cloned;

        $bookingObj_cloned = $clonedObjects[$bookingObj->getId()];
        $bookingObj_cloned->setBookingPaxObj($clonedObjects[$bookingObj_cloned->getBookingPaxObj()->getId()]);

        // Booking Pax
        if ($bookingPaxObj = $bookingObj->getBookingPaxObj()) {
            $packageBookingPaxObj = $this->container->get('app.service.session_storage')->getParentObj($bookingPaxObj->getId());
            $packageBookingPaxObj_cloned = $clonedObjects[$packageBookingPaxObj->getId()];
            $packageBookingPaxObj_cloned->setBookingPaxObj($clonedObjects[$packageBookingPaxObj_cloned->getBookingPaxObj()->getId()]);
            $objectsToSaveInDb[] = $packageBookingPaxObj_cloned;

            $bookingPaxObj_cloned = $clonedObjects[$bookingPaxObj->getId()];
            $bookingPaxObj_cloned->setBookingObj($clonedObjects[$bookingPaxObj_cloned->getBookingObj()->getId()]);
        }

        // Booking Service
        $packageBookingServiceObjArr = $this->getChildObjectsFromSS($bookingObj->getId(), 'PackageBookingService');
        if (is_array($packageBookingServiceObjArr)) {
            foreach ($packageBookingServiceObjArr as $packageBookingServiceObj) {
                $packageBookingServiceObj_cloned = $clonedObjects[$packageBookingServiceObj->getId()];
                $packageBookingServiceObj_cloned->setBookingServiceObj($clonedObjects[$packageBookingServiceObj_cloned->getBookingServiceObj()->getId()]);
                $objectsToSaveInDb[] = $packageBookingServiceObj_cloned;

                $bookingServiceObj = $packageBookingServiceObj->getBookingServiceObj();
                $bookingServiceObj_cloned = $clonedObjects[$bookingServiceObj->getId()];
                $bookingServiceObj_cloned->setBookingObj($clonedObjects[$bookingServiceObj_cloned->getBookingObj()->getId()]);
                if ($bookingServiceObj->getGrouperBookingServiceObj()) {
                    $bookingServiceObj_cloned->setGrouperBookingServiceObj($clonedObjects[$bookingServiceObj_cloned->getGrouperBookingServiceObj()->getId()]);
                }
                if ($bookingServiceObj->getGrouperBookingServicePriceObj()) {
                    $bookingServiceObj_cloned->setGrouperBookingServicePriceObj($clonedObjects[$bookingServiceObj_cloned->getGrouperBookingServicePriceObj()->getId()]);
                }

                // Booking Service Price
                $bookingServicePriceObjArr = $this->getChildObjectsFromSS($bookingServiceObj->getId(), 'BookingServicePrice');
                if (is_array($bookingServicePriceObjArr)) {
                    foreach ($bookingServicePriceObjArr as $bookingServicePriceObj) {
                        $bookingServicePriceObj_cloned = $clonedObjects[$bookingServicePriceObj->getId()];
                        $bookingServicePriceObj_cloned->setBookingServiceObj($clonedObjects[$bookingServicePriceObj_cloned->getBookingServiceObj()->getId()]);
                        if ($bookingServicePriceObj->getGrouperBookingServicePriceObj()) {
                            $bookingServicePriceObj_cloned->setGrouperBookingServicePriceObj($clonedObjects[$bookingServicePriceObj_cloned->getGrouperBookingServicePriceObj()->getId()]);
                        }
                        if ($bookingServicePriceObj->getGroupedBookingServicePriceObj()) {
                            $bookingServicePriceObj_cloned->setGroupedBookingServicePriceObj($clonedObjects[$bookingServicePriceObj_cloned->getGroupedBookingServicePriceObj()->getId()]);
                        }

                        $objectsToSaveInDb[] = $bookingServicePriceObj_cloned;
                    }
                }
            }
        }

        ///////////////////////////////////////////////////////////////////////////////////////

        // Save object in entity manager
        $this->flags['storage'] = 'db'; // Switch storage to database
        if ($this->preSaveObject($packageBookingObj_cloned, null)) {
            foreach ($objectsToSaveInDb as $objectToSaveInDb) {
                $this->saveObject($objectToSaveInDb, false); // Doesn't flush data until all objects are inserted
            }
        }
        $this->flushEm();// Flush (persist) all objects in database
        $this->postSaveObject($packageBookingObj_cloned);

        if ($this->responseConf['status'] == 1) {
            // Update booking
            BaseBookingController::setTotals($this, $bookingObj_cloned);
            BaseBookingController::setConfirmation($this, $bookingObj_cloned);
            BaseBookingController::setDates($this, $bookingObj_cloned);
            // Update bellow us not needed, because current account are untouched
            //BaseBookingController::setInvoiceStatus($this, $bookingObj_clone);
            BaseBookingController::setPlaces($this, $bookingObj_cloned);

            // Remove objects from session
            $this->deleteObjectFromSS($packageBookingObj->getId());

            // Flash messages to display to user
            $this->addFlashMessage(
                'The data has been updated',
                'Success',
                'success'
            );

            // Configure response
            $this->responseConf['hasObject'] = true;
            $this->responseConf['object'] = $this->normalizeObject($packageBookingObj_cloned);
        }

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