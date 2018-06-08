<?php

namespace Bck\BookingBundle\Controller;

use Bck\BookingBundle\Entity\BookingServicePrice;
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
    public function init(Request $request)
    {
        // Set configuration only once
        if($this->isInitialized) { return $this; }

        // Route
        $this->templateConf['route'] = array(
            'get' => array(
                'name' => '_bck__booking__package_booking__get'
            ),
            'addStep1' => array(
                'name' => '_bck__booking__package_booking__add_step1'
            ),
            'addStep6' => array(
                'name' => '_bck__booking__package_booking__add_step6',
            ),
            'edit' => array(
                'name' => '_bck__booking__package_booking__edit'
            ),
            'delete' => array(
                'name' => '_bck__booking__package_booking__delete'
            ),
            'detail' => array(
                'name' => '_bck__booking__package_booking__detail'
            )
        );

        parent::init($request);

        // Templates
        $this->localConf['templates']['edit'] = 'BckBookingBundle:BaseBooking:edit.html.twig';

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
     * @Route("/bck/booking/package-booking",
     *     name="_bck__booking__package_booking__index"
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
     * @Route("/bck/booking/package-booking/detail/{id}",
     *     name="_bck__booking__package_booking__detail",
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
     * @Route("/bck/booking/package-booking/get/{id}",
     *     name="_bck__booking__package_booking__get",
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
     * @Route("/bck/booking/package-booking/add-step1/{id}",
     *     name="_bck__booking__package_booking__add_step1",
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
        $form = $this->createForm('Bck\BookingBundle\Form\PackageBookingAddStep1Type', $obj);

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

                // Save $bookingObj also, because it is the parent of PackageBookingService and BookingPax
                $bookingObj = $obj->getBookingObj();
                $this->saveObjectToSS($bookingObj);
            }
            $this->postSaveObject($obj, $data['form']);

            // Check if object had success on save
            if($this->responseConf['status'] == 1) {
                // Set response
                // Now the object can be normalized, all changes was made on it (after "postSaveObject")
                $this->responseConf['hasObject'] = true;
                $this->responseConf['object'] = $this->normalizeObject($obj);
            }

            return $this->getResponse();
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
     * @Route("/bck/booking/package-booking/add-step6/{id}/{service}",
     *     name="_bck__booking__package_booking__add_step6",
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
        $packageServiceObj = $this->getRepositoryService('PackageService', 'ServicesBundle', 'Bck')
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
                    $packageServiceServiceObj = $this->getRepositoryService('PackageServiceService', 'ServicesBundle', 'Bck')
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
                    return $this->getResponse();
                }
            }
        }


        //////////////////////////////////////////////
        // Set clones and object so save in database
        ////////////////////////////////////////////////
        // NOTE: Session storage objects needs to be getted again to set foreign objects, otherwise the save will fail,
        // because entity manager does not recognize the foreign objects saved in session storage

        // Coned object with id as index
        $clonedObjects = array();
        // Objects to save in database, some object does not need be here, are persisted in cascade
        $objectsToSaveInDb = array();

        // Booking
        $clonedObjects[$packageBookingObj->getId()] = clone $packageBookingObj;
        $objectsToSaveInDb[] = $clonedObjects[$packageBookingObj->getId()]; // Save in db
        $clonedObjects[$bookingObj->getId()] = clone $bookingObj;
        $clonedObjects[$packageBookingObj->getId()]->setBookingObj($clonedObjects[$bookingObj->getId()]); // Update dependency

        // Booking Pax
        $packageBookingPaxObjArr = $this->getChildObjectsFromSS($bookingObj->getId(), 'PackageBookingPax');
        if (is_array($packageBookingPaxObjArr)) {
            foreach ($packageBookingPaxObjArr as $packageBookingPaxObj) {
                $bookingPaxObj = $packageBookingPaxObj->getBookingPaxObj();
                $clonedObjects[$packageBookingPaxObj->getId()] = clone $packageBookingPaxObj;
                $objectsToSaveInDb[] = $clonedObjects[$packageBookingPaxObj->getId()]; // Save in db
                $clonedObjects[$bookingPaxObj->getId()] = clone $bookingPaxObj;
                $clonedObjects[$bookingPaxObj->getId()]->setBookingObj($clonedObjects[$bookingObj->getId()]); // Update dependency
                $clonedObjects[$packageBookingPaxObj->getId()]->setBookingPaxObj($clonedObjects[$bookingPaxObj->getId()]); // Update dependency
            }

            // Booking pax of booking (clientIsPax)
            if ($bookingPaxObj = $bookingObj->getBookingPaxObj()) {
                $clonedObjects[$bookingObj->getId()]->setBookingPaxObj($clonedObjects[$bookingPaxObj->getId()]); // Update dependency
            }
        }

        // Booking Service
        $packageBookingServiceObjArr = $this->getChildObjectsFromSS($bookingObj->getId(), 'PackageBookingService');
        if (is_array($packageBookingServiceObjArr)) {
            foreach ($packageBookingServiceObjArr as $packageBookingServiceObj) {
                $bookingServiceObj = $packageBookingServiceObj->getBookingServiceObj();
                $bookingServiceObj = $this->getObjectFromSS($bookingServiceObj->getId()); // Set again all foreign fields
                $clonedObjects[$packageBookingServiceObj->getId()] = clone $packageBookingServiceObj;
                $objectsToSaveInDb[] = $clonedObjects[$packageBookingServiceObj->getId()]; // Save in db
                $clonedObjects[$bookingServiceObj->getId()] = clone $bookingServiceObj;
                $clonedObjects[$bookingServiceObj->getId()]->setBookingObj($clonedObjects[$bookingObj->getId()]); // Update dependency
                $clonedObjects[$packageBookingServiceObj->getId()]->setBookingServiceObj($clonedObjects[$bookingServiceObj->getId()]); // Update dependency

                // Booking Service Price
                $bookingServicePriceObjArr = $this->getChildObjectsFromSS($bookingServiceObj->getId(), 'BookingServicePrice');
                if (is_array($bookingServicePriceObjArr)) {
                    foreach ($bookingServicePriceObjArr as $bookingServicePriceObj) {
                        $bookingServicePriceObj = $this->getObjectFromSS($bookingServicePriceObj->getId()); // Set again all foreign fields
                        $clonedObjects[$bookingServicePriceObj->getId()] = clone $bookingServicePriceObj;
                        $objectsToSaveInDb[] = $clonedObjects[$bookingServicePriceObj->getId()]; // Save in db
                        $clonedObjects[$bookingServicePriceObj->getId()]->setBookingServiceObj($clonedObjects[$bookingServiceObj->getId()]); // Update dependency

                    }
                }
            }
        }

        // Service grouping (need to be after all objects are cloned)
        $packageBookingServiceObjArr = $this->getChildObjectsFromSS($bookingObj->getId(), 'PackageBookingService');
        if (is_array($packageBookingServiceObjArr)) {
            foreach ($packageBookingServiceObjArr as $packageBookingServiceObj) {
                $bookingServiceObj = $packageBookingServiceObj->getBookingServiceObj();
                if ($grouperBookingServiceObj = $bookingServiceObj->getGrouperBookingServiceObj()) {
                    $clonedObjects[$bookingServiceObj->getId()]->setGrouperBookingServiceObj($clonedObjects[$grouperBookingServiceObj->getId()]);
                }
                if ($grouperBookingServicePriceObj = $bookingServiceObj->getGrouperBookingServicePriceObj()) {
                    $clonedObjects[$bookingServiceObj->getId()]->setGrouperBookingServicePriceObj($clonedObjects[$grouperBookingServicePriceObj->getId()]);
                }

                // Booking Service Price grouping (need to be after all objects are cloned)
                $bookingServicePriceObjArr = $this->getChildObjectsFromSS($bookingServiceObj->getId(), 'BookingServicePrice');
                if (is_array($bookingServicePriceObjArr)) {
                    foreach ($bookingServicePriceObjArr as $bookingServicePriceObj) {
                        if ($grouperBookingServicePriceObj = $bookingServicePriceObj->getGrouperBookingServicePriceObj()) {
                            $clonedObjects[$bookingServicePriceObj->getId()]->setGrouperBookingServicePriceObj($clonedObjects[$grouperBookingServicePriceObj->getId()]);
                        }
                        if ($groupedBookingServicePriceObj = $bookingServicePriceObj->getGroupedBookingServicePriceObj()) {
                            $clonedObjects[$bookingServicePriceObj->getId()]->setGroupedBookingServicePriceObj($clonedObjects[$groupedBookingServicePriceObj->getId()]);
                        }
                    }
                }
            }
        }
        ////////////////////////////////////////////////////////////////////////////////////

        // Save object in entity manager
        $this->flags['storage'] = 'db'; // Switch storage to database
        $packageBookingObj_cloned = $clonedObjects[$packageBookingObj->getId()];
        if ($this->preSaveObject($packageBookingObj_cloned, null)) {
            foreach ($objectsToSaveInDb as $objectToSaveInDb) {
                $this->saveObject($objectToSaveInDb, false); // Doesn't flush data until all objects are inserted
            }
        }
        $this->flushEm();// Flush (persist) all objects in database
        $this->postSaveObject($packageBookingObj_cloned);

        if ($this->responseConf['status'] == 1) {
            // Update booking
            $bookingObj_cloned = $packageBookingObj_cloned->getBookingObj();
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

        return $this->getResponse();
    }

    /**
     * @Route("/bck/booking/package-booking/edit/{id}",
     *     name="_bck__booking__package_booking__edit",
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
     * @Route("/bck/booking/package-booking/delete/{id}",
     *     name="_bck__booking__package_booking__delete",
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
     * @Route("/bck/booking/package-booking/detail-content",
     *     name="_bck__booking__package_booking__detail_content")
     *
     * Action to get the base to build the content of detail
     * @return mixed
     */
    public function detailTabsAction()
    {
        return parent::detailTabsAction();
    }

    /**
     * @Route("/bck/booking/package-booking/current-accounts-menus",
     *     name="_bck__booking__package_booking__current_accounts_menus"
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