<?php

namespace BookingBundle\Controller;

use AppBundle\Controller\BaseEntityController;
use BookingBundle\Entity\BookingPax;
use Sensio\Bundle\FrameworkExtraBundle\Configuration\Route;
use Symfony\Component\HttpFoundation\Request;

/**
 * Class BookingController.
 * Base booking controller for booking types
 * @package BookingBundle\Controller
 */
abstract class BaseBookingController extends BaseEntityController
{
    /**
     * Get Local Booking Context (it needs to be implemented by children to get the correct context <travel, service, etc>).
     * @return mixed (lowerCamelCase)
     */
    abstract protected function getLocalBookingContext();

    /**
     * Get booking context.
     * @param $isUpperCase
     * @return mixed (lowerCamelCase)
     */
    protected function getBookingContext($isUpperCase = false) {
        return ($isUpperCase ? ucfirst($this->getLocalBookingContext()) : $this->getLocalBookingContext());
    }

    /**
     * DEFINE ROUTE HERE
     *
     * Detail action
     * @param Request $request
     * @param $id (this parameter is mandatory, but when the conf is set there is not any id to generate the route,
     * the id is provided at runtime so this requires a default value in the route definition)
     * @return mixed
     */
    public function detailAction(Request $request, $id)
    {
        // Set configuration
        $this->init($request);
        $this->templateConf['localData']['data']['bookingContext'] = $this->getBookingContext();
        return parent::detailAction($request, $id);
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
        // Set configuration
        $this->flags['hasForm'] = true;
        $this->init($request);

        // Get object
        $obj = $this->getObject($id);

        // Build form
        $form = $this->createForm($this->localConf['formTypeClass'], $obj);

        // Handle request
        $form->handleRequest($request);

        // Check if is submitted
        if($form->isSubmitted()) {
            // Get request data
            $data = $this->getRequestData($request);

            // Set response
            // This is to avoid normalizing the object by the "saveForm",
            // because we are still going to make changes on it (in "postSaveObject")
            $this->responseConf['hasObject'] = false;

            if ($this->preSaveObject($obj, null)) {
                $this->saveForm($form, $obj);
            }
            $this->postSaveObject($obj, $data['form']);

            // Set response
            // Now the object can be normalized, all changes was made on it (after "postSaveObject")
            $this->responseConf['hasObject'] = true;
            // Check if object had success on save
            if($this->responseConf['status'] == 1) {
                $this->responseConf['object'] = $this->normalizeObject($obj);
            }

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
     * Action to get the base to build the content of detail
     * @return mixed
     */
    public function detailTabsAction()
    {
        return $this->render('BookingBundle:BaseBooking:detail-content.html.twig', array(
            '_containers' => array(
                array(
                    'label' => 'Pax'
                ),
                array(
                    'label' => 'Services'
                ),
                array(
                    'label' => 'Current Accounts'
                ),
                array(
                    'label' => 'Observations'
                ),
                array(
                    'label' => 'Files'
                )
            )
        ));
    }

    /**
     * DEFINE ROUTE HERE
     *
     * Action to get the menus of current accounts
     * @return mixed
     */
    public function currentAccountsMenusAction()
    {
        // Render form
        return $this->render('AppBundle:accordion:default.html.twig', array(
            '_containers' => array(
                array(
                    'label' => 'Client Current Account'
                ),
                array(
                    'label' => 'Supplier Current Account'
                )
            ),
            '_id' => 'current-accounts'
        ));
    }

    /**
     * Overrides parent method
     * @param $object
     * @param $data (usually the form data)
     * @return boolean (true to continue, false to abort)
     */
    protected function preSaveObject(&$object, $data) {
        $formContext = $this->getObjectFormContext($object);

        if ($formContext == 'add') {
            // Get Id of local menu
            $moduleMenuObj = $this->getRepositoryService('ModuleMenu', 'AdminBundle')->execute(
                'findOneByAppModuleMenuObj',
                array($this->templateConf['selectedMenu']['menu'])
            );

            // Set moduleMenuObj
            $bookingObj = $object->getBookingObj();
            $bookingObj->setModuleMenuObj($moduleMenuObj);

            // Flags (to generate the code)
            $this->flags['setting'] = array(
                'entity' => 'BookingSetting',
                'criteria' => array(
                    array(
                        'field' => 'moduleMenuObj',
                        'expr' => 'eq',
                        'value' => $moduleMenuObj
                    )
                )
            );
        }

        return true;
    }

    /**
     * Overrides parent method
     * @param $object
     * @param $data (usually the form data)
     * @return $this
     */
    protected function postSaveObject($object, $data = null)
    {
        // Check if object had success on save
        if($this->responseConf['status'] == 1) {
            // Add/Update/Remove client pax
            $bookingContextUC = $this->getBookingContext(true);

            $bookingObj = $object->getBookingObj();
            $bookingPaxObj = $bookingObj->getBookingPaxObj();
            $localBookingPaxObj = null;

            if ($bookingObj) {
                if ($this->flags['storage'] == 'session') {
                    $localBookingPaxObjArr = $this->container->get('app.service.session_storage')->getChildObjects(
                        $object->getId(), // This is the parent of objects
                        'PackageBookingPax'
                    );
                    $localBookingPaxObj = (empty($localBookingPaxObjArr) ? null : reset($localBookingPaxObjArr));
                } else {
                    $localBookingPaxObj = $this->getRepositoryService($bookingContextUC . 'BookingPax', 'BookingBundle')
                        ->execute('findOneByBookingPaxObj', array($bookingPaxObj));
                }
            }

            // Add/Update pax with client data
            if (!empty($data['bookingObj']['clientIsPax']) // Client is pax
                && $bookingObj->getClientObj() // Client has been defined
            ) {
                $clientObj = $bookingObj->getClientObj()->getEntityObj();

                if (!$localBookingPaxObj) {
                    $class = 'BookingBundle\Entity\\' . $bookingContextUC . 'BookingPax';
                    $localBookingPaxObj = new $class();
                    parent::setObjectDefaultValues_static($this, $localBookingPaxObj);
                    $bookingPaxObj = new BookingPax();
                    $localBookingPaxObj->setBookingPaxObj($bookingPaxObj);
                }

                $bookingPaxObj->setTitle($clientObj->getTitle());
                $bookingPaxObj->setName($clientObj->getName());
                $bookingPaxObj->setSurname($clientObj->getSurname());
                $bookingPaxObj->setBirthDate($clientObj->getBirthDate());
                $bookingPaxObj->setBookingObj($bookingObj);
                parent::setObjectDefaultValues_static($this, $bookingPaxObj);

                parent::saveObject_static($this, $localBookingPaxObj);
            }
            // Remove pax associated to the client
            elseif($localBookingPaxObj) {
                parent::deleteObject_static($this, $localBookingPaxObj);
                $bookingPaxObj = null;
            }

            $bookingObj->setBookingPaxObj($bookingPaxObj);
            if ($bookingPaxObj) {
                if ($this->flags['storage'] == 'session') {
                    $localParent = $this->flags['parent'];
                    $this->flags['parent'] = $localBookingPaxObj->getId(); // With this parent cascade deletion works automatically
                    $this->saveObjectToSS($bookingPaxObj);
                    $this->flags['parent'] = $localParent; // Reset to local parent
                } else {
                    parent::saveObject_static($this, $bookingPaxObj);
                }
            }
        }

        return $this;
    }

    /**
     * Set default values to object
     * @param $object
     * @return $this
     */
    protected function setObjectDefaultValues($object)
    {
        parent::setObjectDefaultValues($object);
        // Set default data
        if (empty($object->getId())) {
            $bookingObj = $object->getBookingObj();
            $bookingObj->setSubTotalCost(0);
            $bookingObj->setSubTotalSell(0);
            $bookingObj->setTotalVatCost(0);
            $bookingObj->setTotalVatSell(0);
            $bookingObj->setTotalMargin(0);
            $bookingObj->setTotalMarkup(0);
            $bookingObj->setTotalProfit(0);
            $bookingObj->setInvoiceStatus("NO");
            $bookingObj->setConfirmationStatus("YES");
        }
        return $this;
    }

    /**
     * Set invoice status
     * @param $controller
     * @param $bookingObj
     * @return mixed
     */
    static function setInvoiceStatus($controller, $bookingObj) {
        // Check if there are no errors in previous updates and we work with real data (database storage)
        if (($controller->responseConf['status'] == 1) && ($controller->flags['storage'] == 'db')) {
            $controller->getRepositoryService('Booking', 'BookingBundle')
                ->execute(
                    'setInvoiceStatus',
                    array($bookingObj)
                );

            self::saveObject_static($controller, $bookingObj);
        }

        return $controller;
    }

    /**
     * Set totals
     * @param $controller
     * @param $bookingObj
     * @return mixed
     */
    static function setTotals($controller, $bookingObj) {
        // Check if there are no errors in previous updates and we work with real data (database storage)
        if (($controller->responseConf['status'] == 1) && ($controller->flags['storage'] == 'db')) {
            $controller->getRepositoryService('Booking', 'BookingBundle')
                ->execute(
                    'setTotals',
                    array($bookingObj)
                );

            self::saveObject_static($controller, $bookingObj);
        }

        return $controller;
    }

    /**
     * Set confirmation
     * @param $controller
     * @param $bookingObj
     * @return mixed
     */
    static function setConfirmation($controller, $bookingObj) {
        // Check if there are no errors in previous updates and we work with real data (database storage)
        if (($controller->responseConf['status'] == 1) && ($controller->flags['storage'] == 'db')) {
            $controller->getRepositoryService('Booking', 'BookingBundle')
                ->execute(
                    'setConfirmationStatus',
                    array($bookingObj)
                );

            self::saveObject_static($controller, $bookingObj);
        }

        return $controller;
    }

    /**
     * Set dates
     * @param $controller
     * @param $bookingObj
     * @return mixed
     */
    static function setDates($controller, $bookingObj) {
        // Check if there are no errors in previous updates and we work with real data (database storage)
        if (($controller->responseConf['status'] == 1) && ($controller->flags['storage'] == 'db')) {
            $controller->getRepositoryService('Booking', 'BookingBundle')
                ->execute(
                    'setDates',
                    array($bookingObj)
                );

            self::saveObject_static($controller, $bookingObj);
        }

        return $controller;
    }
}