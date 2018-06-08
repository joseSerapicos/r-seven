<?php

namespace Bck\SysadminBundle\Controller;

use AppBundle\Controller\BaseEntityController;
use Sensio\Bundle\FrameworkExtraBundle\Configuration\Route;
use Symfony\Component\HttpFoundation\Request;


class PaymentMethodController extends BaseEntityController
{
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
                'name' => '_bck__sysadmin__payment_method__get'
            ),
            'edit' => array(
                'name' => '_bck__sysadmin__payment_method__edit'
            ),
            'delete' => array(
                'name' => '_bck__sysadmin__payment_method__delete'
            ),
            'detail' => array(
                'name' => '_bck__sysadmin__payment_method__detail'
            )
        );

        parent::init($request);

        // Search
        $this->templateConf['search']['fields'] = $this->templateConf['fields']['view'];

        // Actions for template/view
        $this->templateConf['actions'] = array_merge(
            $this->templateConf['actions'],
            array(
                'copy' => $this->templateConf['acl']['add'],
                'detail' => true,
                'search' => true
            )
        );

        return $this;
    }

    /**
     * @Route("/bck/sysadmin/payment-method",
     *     name="_bck__sysadmin__payment_method__index"
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
     * @Route("/bck/sysadmin/payment-method/detail/{id}",
     *     name="_bck__sysadmin__payment_method__detail",
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
     * @Route("/bck/sysadmin/payment-method/get/{id}",
     *     name="_bck__sysadmin__payment_method__get",
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
     * @Route("/bck/sysadmin/payment-method/edit/{id}",
     *     name="_bck__sysadmin__payment_method__edit",
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
     * @Route("/bck/sysadmin/payment-method/delete/{id}",
     *     name="_bck__sysadmin__payment_method__delete",
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
     * @Route("/bck/sysadmin/payment-method/get-payment-method-info/{id}",
     *     name="_bck__sysadmin__payment_method__get_payment_method_info"
     * )
     *
     * Action to get the payment method info of object
     * @param Request $request
     * @param $id
     * @return mixed
     */
    public function getPaymentMethodInfoAction(Request $request, $id)
    {
        // Set configuration
        $this->init($request);

        $obj = $this->getObject($id);

        $this->templateConf['localData']['data'] = array(
            'name' => $obj->getName(),
            'description' => $obj->getDescription(),
            'paymentMethodDetail' => $this->getRepositoryService('PaymentMethodDetail', 'SysadminBundle', 'Bck')
                ->execute(
                    'queryBuilder',
                    array(array(
                        'fields' => array(
                            'id', 'field', 'type', 'options', 'label', 'app_paymentMethodDetail.defaultValue AS value'
                        ),
                        'criteria' => array(
                            array('field' => 'appPaymentMethodObj', 'expr' => 'eq', 'value' => $obj)
                        )
                    ))
                )
        );

        $this->templateConf['localData']['data']['paymentMethodDetail']
            = $this->normalizePaymentMethodDetail($this->templateConf['localData']['data']['paymentMethodDetail']);

        return $this->getResponse();
    }

    /**
     * Normalize payment method detail (options)
     * @param $paymentMethodDetail
     * @return mixed
     */
    public function normalizePaymentMethodDetail($paymentMethodDetail)
    {
        // Normalize options
        if ($paymentMethodDetail && (count($paymentMethodDetail) > 0)) {
            foreach ($paymentMethodDetail as $key => $value) {
                if ($value['type'] == 'ENUM') {
                    $options = array();
                    if (!empty($value['options'])) {
                        $options = json_decode($value['options'], true);
                        $options = array_map(
                            function($key, $value) {
                                return array(
                                    'id' => $key,
                                    'label' => $value
                                );
                            },
                            array_keys($options),
                            $options
                        );
                    }
                    $paymentMethodDetail[$key]['options'] = $options;
                }
            }
        }

        return $paymentMethodDetail;
    }
}