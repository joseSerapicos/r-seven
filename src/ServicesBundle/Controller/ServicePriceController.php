<?php

namespace ServicesBundle\Controller;

use AppBundle\Controller\BaseEntityChildController;
use Sensio\Bundle\FrameworkExtraBundle\Configuration\Route;
use Symfony\Component\HttpFoundation\Request;

class ServicePriceController extends BaseEntityChildController
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
                'name' => '_services__service_price__get'
            ),
            'edit' => array(
                'name' => '_services__service_price__edit',
            ),
            'delete' => array(
                'name' => '_services__service_price__delete',
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
     * @Route("/services/service-price/get/{service}/{id}",
     *     name="_services__service_price__get",
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
     * @Route("/services/service-price/edit/{service}/{id}",
     *     name="_services__service_price__edit",
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
        $this->localConf['templates']['edit'] = 'AppBundle:price:form-popup.html.twig';

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

            // Validate dates (dates can't be duplicated, it would generate inconsistency of data)
            // Check "startDate"
            $datesOptions = array('fields' => array('id'));
            if ($id) {
                $datesOptions['criteria'] = array (
                    array('field' => 'id', 'expr' => 'neq', 'value' => $id)
                );
            }
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
                // Check "endDate"
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
                $this->responseConf['status'] = 0;
                $this->addFlashMessage(
                    'Data not persisted! The date interval is already defined, you can not duplicated it.',
                    'Error',
                    'error'
                );
                return $this->getResponse(true);
            }

            // Validate result
            $frontResult = $backResult = 0;
            if (!empty($data['form']['marginMethod']) && ($data['form']['marginMethod'] != 'none')) {
                switch ($data['form']['userFieldTyped']) {
                    case 'COST':
                        $backResult = $this->get('app.service.price')->calcSellValue($data['form']);
                        $frontResult = round($data['form']['sellValue'], 4);
                        break;
                    case 'SELL':
                        $backResult = $this->get('app.service.price')->calcCostValue($data['form']);
                        $frontResult = round($data['form']['costValue'], 4);
                        break;
                }
            }
            if ($backResult !== $frontResult) {
                $this->responseConf['status'] = 0;
                $this->addFlashMessage(
                    ('Data not persisted! Invalid value was detected:<br/>'
                        .$frontResult.' Does not match with '.$backResult
                    ),
                    'Error',
                    'error'
                );
                return $this->getResponse(true);
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
     * @Route("/services/service-price/delete/{service}/{id}",
     *     name="_services__service_price__delete",
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
     * @Route("/services/service-price/data/{service}",
     *     name="_services__service_price__data"
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
     * @Route("/services/service-price/conf/{service}",
     *     name="_services__service_price__conf"
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
}