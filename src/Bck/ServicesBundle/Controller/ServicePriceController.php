<?php

namespace Bck\ServicesBundle\Controller;

use AppBundle\Controller\BaseEntityChildController;
use Sensio\Bundle\FrameworkExtraBundle\Configuration\Route;
use Symfony\Component\HttpFoundation\Request;

class ServicePriceController extends BaseEntityChildController
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
                'name' => '_bck__services__service_price__get'
            ),
            'edit' => array(
                'name' => '_bck__services__service_price__edit',
            ),
            'delete' => array(
                'name' => '_bck__services__service_price__delete',
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
     * @Route("/bck/services/service-price/get/{service}/{id}",
     *     name="_bck__services__service_price__get",
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
     * @Route("/bck/services/service-price/edit/{service}/{id}",
     *     name="_bck__services__service_price__edit",
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
        $this->localConf['templates']['edit'] = 'AppBundle:price:form-popup.html.twig';

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

            $errorMessage = null;

            // Validate dates (dates can't be duplicated, it would generate inconsistency of data)
            if ($data['form']['endDate'] < $data['form']['startDate']) {
                $errorMessage = "End Date can not be < that Start Date.";
            } else {
                $datesOptions = array('fields' => array('id'));
                if ($id) {
                    $datesOptions['criteria'] = array(
                        array('field' => 'id', 'expr' => 'neq', 'value' => $id)
                    );
                }
                // Check "startDate" (if start data exist in any date interval already defined)
                $dates = $this->getLocalRepositoryService()
                    ->execute(
                        'getCurrentPriceByDate',
                        array(
                            $obj->getServiceObj(),
                            $data['form']['startDate'],
                            $datesOptions
                        )
                    );
                if (!is_array($dates) || (count($dates) < 1)) {
                    // Check "endDate" (if end data exist in any date interval already defined)
                    $dates = $this->getLocalRepositoryService()
                        ->execute(
                            'getCurrentPriceByDate',
                            array(
                                $obj->getServiceObj(),
                                $data['form']['endDate'],
                                $datesOptions
                            )
                        );
                }
                if (is_array($dates) && (count($dates) > 0)) {
                    $errorMessage = 'The date interval is already defined, you can not duplicated it.';
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

            // Validate result
            $priceService = $this->get('app.service.price');
            $frontResult = $backResult = 0;
            if (!empty($data['form']['marginMethod']) && ($data['form']['marginMethod'] != 'none')) {
                switch ($data['form']['userFieldTyped']) {
                    case 'COST':
                        $backResult = $priceService->calcSellValue(
                            $data['form']['costValue'],
                            $data['form']['marginValue'],
                            $data['form']['marginMethod']
                        );
                        $frontResult = $data['form']['sellValue'];
                        break;
                    case 'SELL':
                        $backResult = $priceService->calcCostValue(
                            $data['form']['sellValue'],
                            $data['form']['marginValue'],
                            $data['form']['marginMethod']
                        );
                        $frontResult = $data['form']['costValue'];
                        break;
                }
            }
            if (!$priceService->isEqual($backResult, $frontResult)) {
                $this->responseConf['status'] = 0;
                $this->addFlashMessage(
                    ('Invalid value was detected:<br/>' . $frontResult . ' Does not match with ' . $backResult),
                    'Data not persisted',
                    'error'
                );
                return $this->getResponse();
            }

            $this->saveForm($form, $obj);

            return $this->getResponse();
        }

        // Render form
        return $this->render($this->localConf['templates']['edit'], array(
            '_conf' => $this->templateConf,
            '_form' => $form->createView()
        ));
    }

    /**
     * @Route("/bck/services/service-price/delete/{service}/{id}",
     *     name="_bck__services__service_price__delete",
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
     * @Route("/bck/services/service-price/data/{service}",
     *     name="_bck__services__service_price__data"
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
     * @Route("/bck/services/service-price/conf/{service}/{id}",
     *     name="_bck__services__service_price__conf",
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
}