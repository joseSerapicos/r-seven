<?php

namespace Bck\SysadminBundle\Controller;

use AppBundle\Controller\BaseEntityChildController;
use Sensio\Bundle\FrameworkExtraBundle\Configuration\Route;
use Symfony\Component\HttpFoundation\Request;


class PaymentMethodDetailController extends BaseEntityChildController
{
    /**
     * Get label/title to display child in parent
     * @return mixed
     */
    static function getLabel() { return 'Detail'; }

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
            'paymentMethod' => array('route' => '_bck__sysadmin__payment_method__index')
        );

        // Route
        $this->templateConf['route'] = array(
            'get' => array(
                'name' => '_bck__sysadmin__payment_method_detail__get'
            ),
            'edit' => array(
                'name' => '_bck__sysadmin__payment_method_detail__edit',
            ),
            'delete' => array(
                'name' => '_bck__sysadmin__payment_method_detail__delete',
            )
        );

        parent::init($request, $parents);

        // Search
        $this->templateConf['search']['fields'] = $this->templateConf['fields']['view'];

        // Actions for template/view
        $this->templateConf['actions'] = array_merge(
            $this->templateConf['actions'],
            array(
                'copy' => $this->templateConf['acl']['add']
            )
        );

        return $this;
    }

    /**
     * Overrides parent method
     * @param Request $request
     * @param $paymentMethod
     * @return mixed
     */
    public function indexLocalChildAction(Request $request, $paymentMethod)
    {
        return $this->indexChildAction($request, array($paymentMethod));
    }

    /**
     * @Route("/bck/sysadmin/payment-method-detail/get/{paymentMethod}/{id}",
     *     name="_bck__sysadmin__payment_method_detail__get",
     *     defaults={"id" = null},
     * )
     *
     * Overrides parent method
     * @param Request $request
     * @param $paymentMethod
     * @param $id
     * @return mixed
     */
    public function getLocalChildAction(Request $request, $paymentMethod, $id)
    {
        return parent::getChildAction($request, array($paymentMethod), $id);
    }

    /**
     * @Route("/bck/sysadmin/payment-method-detail/edit/{paymentMethod}/{id}",
     *     name="_bck__sysadmin__payment_method_detail__edit",
     *     defaults={"id" = null}
     * )
     *
     * Overrides parent method
     * @param Request $request
     * @param $paymentMethod
     * @param $id
     * @return mixed
     */
    public function editLocalChildAction(Request $request, $paymentMethod, $id)
    {
        return parent::editChildAction($request, array($paymentMethod), $id);
    }

    /**
     * @Route("/bck/sysadmin/payment-method-detail/delete/{paymentMethod}/{id}",
     *     name="_bck__sysadmin__payment_method_detail__delete",
     *     defaults={"id" = null},
     * )
     *
     * Overrides parent method
     * @param Request $request
     * @param $paymentMethod
     * @param $id
     * @return mixed
     */
    public function deleteLocalChildAction(Request $request, $paymentMethod, $id)
    {
        return parent::deleteChildAction($request, array($paymentMethod), $id);
    }
}