<?php

namespace ServicesBundle\Controller;

use AppBundle\Controller\BaseEntityChildController;
use Sensio\Bundle\FrameworkExtraBundle\Configuration\Route;
use Symfony\Component\HttpFoundation\Request;

class ServiceFixedCostController extends BaseEntityChildController
{
    /**
     * Overrides parent method
     * @param Request $request
     * @param $parents
     * @param $label (set label when you don't have the route in modules/menus tree)
     * @return $this
     */
    protected function initChild(Request $request, $parents, $label = 'Prices')
    {
        // Set configuration only once
        if($this->isInitialized) { return $this; }

        // Parent route
        $this->parentConf = array(
            'service' => array('route' => '_services__service__index')
        );

        // Route
        $this->templateConf['route'] = array(
            'get' => array(
                'name' => '_services__service_fixed_cost__get'
            ),
            'edit' => array(
                'name' => '_services__service_fixed_cost__edit',
            ),
            'delete' => array(
                'name' => '_services__service_fixed_cost__delete',
            )
        );

        parent::initChild($request, $parents, $label);

        // Search
        $this->templateConf['search']['fields'] = $this->templateConf['fields']['view'];
        // Unexpired dates (this filter is enough, because "endDate" is always > then "startDate")
        $this->templateConf['search']['criteria'][] = array(
            'field' => 'endDate',
            'expr' => 'gte',
            'value' => date("Y-m-d")
        );
        $this->templateConf['search']['orderBy'] = array(array('field' => 'startDate', 'value' => 'Desc'));

        // Actions for template/view
        $this->templateConf['actions'] = array_merge(
            $this->templateConf['actions'],
            array(
                'search' => true
            )
        );

        // Extra data
        $this->templateConf['extraData']['template'] = array(
            'class' => '-merge-view',
            'hasMergeHeader' => true
        );

        return $this;
    }

    /**
     * @Route("/services/service-fixed-cost/get/{service}/{id}",
     *     name="_services__service_fixed_cost__get",
     *     defaults={"id" = null}
     * )
     *
     * Overrides parent method
     * @param Request $request
     * @param $service
     * @param $id
     * @return mixed
     */
    public function getLocalChildAction(Request $request, $service, $id)
    {
        return parent::getChildAction($request, array($service), $id);
    }

    /**
     * @Route("/services/service-fixed-cost/edit/{service}/{id}",
     *     name="_services__service_fixed_cost__edit",
     *     defaults={"id" = null}
     * )
     *
     * Overrides parent method
     * @param Request $request
     * @param $service
     * @param $id
     * @return mixed
     */
    public function editLocalChildAction(Request $request, $service, $id)
    {
        $parents = array($service);

        // Set configuration
        $this->flags['hasForm'] = true;
        $this->initChild($request, $parents);

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
            $data = $data['form'];
            $vatCodeObj = $obj->getVatCodeObj();

            $errorMessage = null;

            // Validate dates
            if ($data['endDate'] < $data['startDate']) {
                $errorMessage = "End Date can not be < that Start Date.";
            }
            // Validate VAT code, if service VAT was changed, then values can't be changed. VAT code is defined
            // only when the object is created!
            elseif (!$errorMessage && ($obj->getServiceObj()->getVatCodeObj() != $vatCodeObj)) {
                $errorMessage = "Service VAT code was changed after this entry has been created, so you could not edit values. Consider to add a new entry.";
            }
            // Validate prices
            else {
                $priceService = $this->get('app.service.price');
                $vatCodePercentage = $vatCodeObj->getPercentage();
                $user_costValue = $data['user_costValue'];
                $isVatIncluded = (!empty($data['isVatIncluded']));
                echo("Fix this values and test with: 10 12,3 25");
                var_dump($user_costValue);exit;
                $totalUnitCostDetail = $priceService->getTotalUnitDetail($user_costValue, $vatCodePercentage, $isVatIncluded);

                if (!$priceService->isEqual($data['costValue'], $totalUnitCostDetail['value'])) {
                    $errorMessage = ($data['costValue'] . ' Does not match with ' . $totalUnitCostDetail['value']);
                } elseif (!$priceService->isEqual($data['vatValueCost'], $totalUnitCostDetail['vatValue'])) {
                    $errorMessage = ($data['vatValueCost'] . ' Does not match with ' . $totalUnitCostDetail['vatValue']);
                }

                if ($errorMessage) {
                    $errorMessage = ('Invalid total was detected.<br/>' . $errorMessage);
                }
            }

            // Set error
            if ($errorMessage) {
                $this->responseConf['status'] = 0;
                $this->addFlashMessage(
                    $errorMessage,
                    'Data not persisted',
                    'error'
                );
                return $this->getResponse(true);
            }

            if ($this->preSaveObject($obj, null)) {
                $this->saveForm($form, $obj);
            }
            $this->postSaveObject($obj);

            return $this->getResponse(true);
        }

        // Render form
        return $this->render($this->localConf['templates']['edit'], array(
            '_conf' => $this->templateConf,
            '_form' => $form->createView()
        ));
    }

    /**
     * @Route("/services/service-fixed-cost/delete/{service}/{id}",
     *     name="_services__service_fixed_cost__delete",
     *     defaults={"id" = null}
     * )
     *
     * Overrides parent method
     * @param Request $request
     * @param $service
     * @param $id
     * @return mixed
     */
    public function deleteLocalChildAction(Request $request, $service, $id)
    {
        return parent::deleteChildAction($request, array($service), $id);
    }

    /**
     * @Route("/services/service-fixed-cost/data/{service}",
     *     name="_services__service_fixed_cost__data"
     * )
     *
     * Overrides parent method
     * @param Request $request
     * @param $service
     * @return mixed
     */
    public function dataLocalChildAction(Request $request, $service)
    {
        return parent::dataChildAction($request, array($service));
    }

    /**
     * @Route("/services/service-fixed-cost/conf/{service}",
     *     name="_services__service_fixed_cost__conf"
     * )
     *
     * Overrides parent method
     * @param Request $request
     * @param $service
     * @return mixed
     */
    public function confLocalChildAction(Request $request, $service)
    {
        return parent::confChildAction($request, array($service));
    }

    /**
     * Overrides parent method
     * @param $object
     * @return $this
     */
    protected function setObjectDefaultValues($object)
    {
        // Set default data
        parent::setObjectDefaultValues($object);

        $parentConf = $this->getParentConf();
        if ($parentConf['obj']) { // Parent can be null when form view is called for the first time with parent "0"
            // Set VAT code
            $object->setVatCodeObj($parentConf['obj']->getVatCodeObj());
            // Init to "0" to avoid this fields hidden in form (read mode and null = hide)
            $object->setCostValue(0);
            $object->setVatValueCost(0);
        }

        return $this;
    }
}