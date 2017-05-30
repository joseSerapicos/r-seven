<?php

namespace BookingBundle\Controller;

use AppBundle\Controller\BaseEntityController;
use AppBundle\Service\HelperService;
use Sensio\Bundle\FrameworkExtraBundle\Configuration\Route;
use Symfony\Component\HttpFoundation\Request;

/**
 * Class BaseBookingController.
 * Base booking controller for booking types
 * @package BookingBundle\Controller
 */
class BaseBookingController extends BaseEntityController
{
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
        $this->responseConf['localData']['controller'] =
            HelperService::camelCaseToHyphenCase($this->localConf['entity']);
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
        $form = $this->buildForm($request, $obj);

        // Handle request
        $form->handleRequest($request);

        // Check if is submitted
        if($form->isSubmitted()) {
            // Get request data
            $data = $this->getRequestData($request);

            if($form->isValid()) {
                // Add/Update/Remove client pax
                $paxEntity = ($this->localConf['entity'] . 'Pax');
                $paxEntityClass = ($this->localConf['entityClass'] . 'Pax');
                $getPaxObjMethod = ('get' . $paxEntity . 'Obj');
                $setPaxObjMethod = ('set' . $paxEntity . 'Obj');
                $bookingPax = $obj->$getPaxObjMethod();

                if (isset($data['form'])
                    && !empty($data['form']['clientIsPax']) // Client is pax
                    && $obj->getClientObj() // Client has been defined
                ) {
                    $entityObj = $obj->getClientObj()->getEntityObj();
                    $setBookingObjMethod = ('set' . $this->localConf['entity'] . 'Obj');

                    $bookingPax = ($bookingPax ? $bookingPax : new $paxEntityClass());
                    $bookingPax->setTitle($entityObj->getTitle());
                    $bookingPax->setName($entityObj->getName());
                    $bookingPax->setSurname($entityObj->getSurname());
                    $bookingPax->setBirthDate($entityObj->getBirthDate());
                    $bookingPax->$setBookingObjMethod($obj);
                    parent::setObjectDefaultValues($bookingPax);
                } elseif($bookingPax) {
                    parent::deleteObject($bookingPax);
                    $bookingPax = null;
                }

                $obj->$setPaxObjMethod($bookingPax);
            }

            $this->saveForm($form, $obj);
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
     * @param $hasFlush (it determines if should be executed the flush method to persist data in database)
     * @param $addToResponse (determines if object should be added to response)
     * @return $this
     */
    protected function saveObject(&$object, $hasFlush = true, $addToResponse = false)
    {
        // Flags
        $this->flags['setting'] = array(
            'entity' => 'BookingSetting',
            'criteria' => array(
                array(
                    'field' => 'moduleMenuObj',
                    'expr' => 'eq',
                    'value' => $this->getRepositoryService('ModuleMenu', 'AdminBundle')->execute(
                        'findOneByAppModuleMenuObj',
                        array($this->templateConf['selectedMenu']['menu'])
                    )->getId() // Get Id of local menu
                )
            )
        );

        parent::saveObject($object, $hasFlush, $addToResponse);

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
            $object->setSubTotalCost(0);
            $object->setSubTotalSell(0);
            $object->setTotalVatCost(0);
            $object->setTotalVatSell(0);
            $object->setTotalMargin(0);
            $object->setTotalMarkup(0);
            $object->setTotalProfit(0);
            $object->setInvoiceStatus("NO");
            $object->setConfirmationStatus("YES");
        }
        return $this;
    }
}