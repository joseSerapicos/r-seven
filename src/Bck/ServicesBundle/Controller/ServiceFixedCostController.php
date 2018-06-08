<?php

namespace Bck\ServicesBundle\Controller;

use AppBundle\Controller\BaseEntityChildController;
use Sensio\Bundle\FrameworkExtraBundle\Configuration\Route;
use Symfony\Component\HttpFoundation\Request;

class ServiceFixedCostController extends BaseEntityChildController
{
    /**
     * Get label/title to display child in parent
     * @return mixed
     */
    static function getLabel() { return 'Prices'; }

    /**
     * Overrides parent method
     * @param Request $request
     * @param $parents
     * @return $this
     */
    public function init(Request $request, $parents = null)
    {
        // Set configuration only once
        if($this->isInitialized) { return $this; }

        // Parent route
        $this->parentConf = array(
            'service' => array('route' => '_bck__services__service__index')
        );

        // Route
        $this->templateConf['route'] = array(
            'get' => array(
                'name' => '_bck__services__service_fixed_cost__get'
            ),
            'edit' => array(
                'name' => '_bck__services__service_fixed_cost__edit',
            ),
            'delete' => array(
                'name' => '_bck__services__service_fixed_cost__delete',
            )
        );

        parent::init($request, $parents);

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
     * @Route("/bck/services/service-fixed-cost/get/{service}/{id}",
     *     name="_bck__services__service_fixed_cost__get",
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
     * @Route("/bck/services/service-fixed-cost/edit/{service}/{id}",
     *     name="_bck__services__service_fixed_cost__edit",
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
        $this->init($request, $parents);

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
            // Validate VAT code, if VAT code changes, then all reports will change automatically to the new VAT code,
            // including reports with dates previous to VAT changes
            /* Disabled for now
            elseif (!$errorMessage && ($obj->getServiceObj()->getVatCodeObj() != $vatCodeObj)) {
                $errorMessage = "Service VAT code was changed after this entry has been created, so you could not edit values. Consider to add a new entry.";
            }*/
            // Validate prices
            else {
                $priceService = $this->get('app.service.price');
                $vatCodePercentage = $vatCodeObj->getPercentage();
                $costValue = $data['costValue'];

                $totalUnitCostDetail = $priceService->getTotalUnitDetail($costValue, $vatCodePercentage, false);

                if (!$priceService->isEqual($data['vatValueCost'], $totalUnitCostDetail['vatValue'])) {
                    $errorMessage = ($data['vatValueCost'] . ' Does not match with ' . $totalUnitCostDetail['vatValue']);
                } elseif (!$priceService->isEqual($data['totalCost'], $totalUnitCostDetail['totalUnit'])) {
                    $errorMessage = ($data['totalCost'] . ' Does not match with ' . $totalUnitCostDetail['totalUnit']);
                }

                if ($errorMessage) {
                    $errorMessage = ('Invalid value was detected.<br/>' . $errorMessage);
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
                return $this->getResponse();
            }

            if ($this->preSaveObject($obj, null)) {
                $this->saveForm($form, $obj);
            }
            $this->postSaveObject($obj);

            return $this->getResponse();
        }

        // Render form
        return $this->render($this->localConf['templates']['edit'], array(
            '_conf' => $this->templateConf,
            '_form' => $form->createView()
        ));
    }

    /**
     * @Route("/bck/services/service-fixed-cost/delete/{service}/{id}",
     *     name="_bck__services__service_fixed_cost__delete",
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
     * @Route("/bck/services/service-fixed-cost/data/{service}",
     *     name="_bck__services__service_fixed_cost__data"
     * )
     *
     * Overrides parent method
     * @param Request $request
     * @param $service
     * @param $responseType (not used in route, only for direct symfony calls,
     *     determines the type of response [http, json, array])
     * @return mixed
     */
    public function dataLocalChildAction(Request $request, $service, $responseType = 'http')
    {
        return parent::dataChildAction($request, array($service), $responseType);
    }

    /**
     * @Route("/bck/services/service-fixed-cost/conf/{service}/{id}",
     *     name="_bck__services__service_fixed_cost__conf",
     *     defaults={"id" = null}
     * )
     *
     * Overrides parent method
     * @param Request $request
     * @param $service
     * @param $id (return the target id object with the conf, it's used to avoid to make another server request
     *     to get the object when we need the object with the conf, like in flat forms, entity detail, etc.)
     * @return mixed
     */
    public function confLocalChildAction(Request $request, $service, $id = null)
    {
        return parent::confChildAction($request, array($service), $id);
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