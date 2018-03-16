<?php

namespace AccountingBundle\Controller;

use Sensio\Bundle\FrameworkExtraBundle\Configuration\Route;
use Symfony\Component\HttpFoundation\Request;

class ClientDocumentReceiptPaymentController extends BaseDocumentReceiptPaymentController
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
        return 'client';
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
            'clientDocument' => array('route' => '_accounting__client_document__index')
        );

        // Route
        $this->templateConf['route'] = array(
            'get' => array(
                'name' => '_accounting__client_document_receipt_payment__get'
            ),
            'edit' => array(
                'name' => '_accounting__client_document_receipt_payment__edit',
            ),
            'delete' => array(
                'name' => '_accounting__client_document_receipt_payment__delete',
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
     * @Route("/accounting/client-document-receipt-payment/get/{clientDocument}/{id}",
     *     name="_accounting__client_document_receipt_payment__get",
     *     defaults={"id" = null}
     * )
     *
     * Overrides parent method
     * @param Request $request
     * @param $clientDocument
     * @param $id
     * @return mixed
     */
    public function getLocalChildAction(Request $request, $clientDocument, $id)
    {
        return parent::getChildAction($request, array($clientDocument), $id);
    }

    /**
     * @Route("/accounting/client-document-receipt-payment/edit/{clientDocument}/{id}",
     *     name="_accounting__client_document_receipt_payment__edit",
     *     defaults={"id" = null}
     * )
     *
     * Overrides parent method
     * @param Request $request
     * @param $clientDocument
     * @param $id
     * @return mixed
     */
    public function editLocalChildAction(Request $request, $clientDocument, $id)
    {
        return parent::editLocalChildAction($request, $clientDocument, $id);
    }

    /**
     * @Route("/accounting/client-document-receipt-payment/edit-flat-form/{clientDocument}/{id}",
     *     name="_accounting__client_document_receipt_payment__edit_flat_form",
     *     defaults={"id" = null}
     * )
     *
     * Overrides parent method
     * @param Request $request
     * @param $clientDocument
     * @param $id
     * @return mixed
     */
    public function editFlatFormAction(Request $request, $clientDocument, $id)
    {
        return parent::editFlatFormAction($request, $clientDocument, $id);
    }

    /**
     * @Route("/accounting/client-document-receipt-payment/delete/{clientDocument}/{id}",
     *     name="_accounting__client_document_receipt_payment__delete",
     *     defaults={"id" = null}
     * )
     *
     * Overrides parent method
     * @param Request $request
     * @param $clientDocument
     * @param $id
     * @return mixed
     */
    public function deleteLocalChildAction(Request $request, $clientDocument, $id)
    {
        $parents = array($clientDocument);
        return parent::deleteChildAction($request, $parents, $id);
    }

    /**
     * @Route("/accounting/client-document-receipt-payment/data/{clientDocument}",
     *     name="_accounting__client_document_receipt_payment__data"
     * )
     *
     * Overrides parent method
     * @param Request $request
     * @param $clientDocument
     * @return mixed
     */
    public function dataLocalChildAction(Request $request, $clientDocument)
    {
        return parent::dataChildAction($request, array($clientDocument));
    }

    /**
     * @Route("/accounting/client-document-receipt-payment/conf/{clientDocument}",
     *     name="_accounting__client_document_receipt_payment__conf"
     * )
     *
     * Overrides parent method
     * @param Request $request
     * @param $clientDocument
     * @return mixed
     */
    public function confLocalChildAction(Request $request, $clientDocument)
    {
        return parent::confChildAction($request, array($clientDocument));
    }
}