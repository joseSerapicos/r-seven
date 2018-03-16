<?php

namespace AccountingBundle\Controller;

use Sensio\Bundle\FrameworkExtraBundle\Configuration\Route;
use Symfony\Component\HttpFoundation\Request;

class SupplierDocumentReceiptPaymentController extends BaseDocumentReceiptPaymentController
{
    /**
     * Get label/title to display child in parent
     * @return mixed
     */
    static function getLabel() { return 'Detail'; }

    /**
     * Defines parent method
     * @return mixed (lowerCamelCase)
     */
    protected function getLocalEntityContext() {
        return 'supplier';
    }

    /**
     * Overrides parent method
     * @param Request $request
     * @param $parents
     * @return $this
     */
    protected function initChild(Request $request, $parents)
    {
        // Set configuration only once
        if($this->isInitialized) { return $this; }

        // Parent route
        $this->parentConf = array(
            'supplierDocument' => array('route' => '_accounting__supplier_document__index')
        );

        // Route
        $this->templateConf['route'] = array(
            'get' => array(
                'name' => '_accounting__supplier_document_receipt_payment__get'
            ),
            'edit' => array(
                'name' => '_accounting__supplier_document_receipt_payment__edit',
            ),
            'delete' => array(
                'name' => '_accounting__supplier_document_receipt_payment__delete',
            )
        );

        parent::initChild($request, $parents);

        // Search
        $this->templateConf['search']['fields'] = array(
            'paymentType', 'reference', 'description', 'value'
        );
        // Empty criteria to be able to see all registers because "search" action is disabled.
        $this->templateConf['search']['criteria'] = array();

        // Extra data
        $this->templateConf['extraData']['template'] = array(
            'class' => '-stamp-view'
        );

        return $this;
    }

    /**
     * @Route("/accounting/supplier-document-receipt-payment/get/{supplierDocument}/{id}",
     *     name="_accounting__supplier_document_receipt_payment__get",
     *     defaults={"id" = null}
     * )
     *
     * Overrides parent method
     * @param Request $request
     * @param $supplierDocument
     * @param $id
     * @return mixed
     */
    public function getLocalChildAction(Request $request, $supplierDocument, $id)
    {
        return parent::getChildAction($request, array($supplierDocument), $id);
    }

    /**
     * @Route("/accounting/supplier-document-receipt-payment/edit/{supplierDocument}/{id}",
     *     name="_accounting__supplier_document_receipt_payment__edit",
     *     defaults={"id" = null}
     * )
     *
     * Overrides parent method
     * @param Request $request
     * @param $supplierDocument
     * @param $id
     * @return mixed
     */
    public function editLocalChildAction(Request $request, $supplierDocument, $id)
    {
        return parent::editLocalChildAction($request, $supplierDocument, $id);
    }

    /**
     * @Route("/accounting/supplier-document-receipt-payment/edit-flat-form/{supplierDocument}/{id}",
     *     name="_accounting__supplier_document_receipt_payment__edit_flat_form",
     *     defaults={"id" = null}
     * )
     *
     * Overrides parent method
     * @param Request $request
     * @param $supplierDocument
     * @param $id
     * @return mixed
     */
    public function editFlatFormAction(Request $request, $supplierDocument, $id)
    {
        return parent::editFlatFormAction($request, $supplierDocument, $id);
    }

    /**
     * @Route("/accounting/supplier-document-receipt-payment/delete/{supplierDocument}/{id}",
     *     name="_accounting__supplier_document_receipt_payment__delete",
     *     defaults={"id" = null}
     * )
     *
     * Overrides parent method
     * @param Request $request
     * @param $supplierDocument
     * @param $id
     * @return mixed
     */
    public function deleteLocalChildAction(Request $request, $supplierDocument, $id)
    {
        $parents = array($supplierDocument);
        return parent::deleteChildAction($request, $parents, $id);
    }

    /**
     * @Route("/accounting/supplier-document-receipt-payment/data/{supplierDocument}",
     *     name="_accounting__supplier_document_receipt_payment__data"
     * )
     *
     * Overrides parent method
     * @param Request $request
     * @param $supplierDocument
     * @return mixed
     */
    public function dataLocalChildAction(Request $request, $supplierDocument)
    {
        return parent::dataChildAction($request, array($supplierDocument));
    }

    /**
     * @Route("/accounting/supplier-document-receipt-payment/conf/{supplierDocument}",
     *     name="_accounting__supplier_document_receipt_payment__conf"
     * )
     *
     * Overrides parent method
     * @param Request $request
     * @param $supplierDocument
     * @return mixed
     */
    public function confLocalChildAction(Request $request, $supplierDocument)
    {
        return parent::confChildAction($request, array($supplierDocument));
    }
}