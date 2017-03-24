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
                    'label' => 'Observations'
                ),
                array(
                    'label' => 'Files'
                )
            )
        ));
    }

    /**
     * Overrides parent method
     * @param $object
     * @param $hasFlush (it determines if should be executed the flush method to persist data in database)
     * @return $this
     */
    protected function saveObject(&$object, $hasFlush = true)
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

        parent::saveObject($object, $hasFlush);

        return $this;
    }

    /**
     * Overrides parent method
     * @return object
     */
    protected function newObject()
    {
        $obj = parent::newObject();

        $obj->setTotalCost(0);
        $obj->setTotalMargin(0);
        $obj->setTotalMarkup(0);
        $obj->setTotalProfit(0);
        $obj->setTotalSell(0);
        $obj->setInvoiceStatus("NO");
        $obj->setConfirmationStatus("YES");

        return $obj;
    }
}