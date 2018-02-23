<?php

namespace AccountingBundle\Controller;

use Sensio\Bundle\FrameworkExtraBundle\Configuration\Route;
use Symfony\Component\HttpFoundation\Request;

class ClientDocumentReceiptSettlementController extends BaseDocumentReceiptSettlementController
{
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
     * @param $label (set label when you don't have the route in modules/menus tree)
     * @return $this
     */
    protected function initChild(Request $request, $parents, $label = 'Detail')
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
                'name' => '_accounting__client_document_receipt_settlement__get'
            ),
            'add' => array(
                'name' => '_accounting__client_document_receipt_settlement__add',
            ),
            'addStep1Submit' => array(
                'name' => '_accounting__client_document_receipt_settlement__add_step1_submit',
            ),
            'addStep2' => array(
                'name' => '_accounting__client_document_receipt_settlement__add_step2',
            ),
            'edit' => array(
                'name' => '_accounting__client_document_receipt_settlement__edit',
            ),
            'delete' => array(
                'name' => '_accounting__client_document_receipt_settlement__delete',
            )
        );

        parent::initChild($request, $parents, $label);

        // Search
        $this->templateConf['search']['fields'] = array(
            'entity_avatar', 'entity_name', 'documentType_name', 'code',
            'settlementDocument_date', 'settlementDocument_dueDate', 'value'
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
     * @Route("/accounting/client-document-receipt-settlement/get/{clientDocument}/{id}",
     *     name="_accounting__client_document_receipt_settlement__get",
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
     * @Route("/accounting/client-document-receipt-settlement/add/{clientDocument}",
     *     name="_accounting__client_document_receipt_settlement__add"
     * )
     *
     * Action to add objects
     * @param Request $request
     * @param $clientDocument
     * @return mixed
     */
    public function addAction(Request $request, $clientDocument)
    {
        return parent::addAction($request, $clientDocument);
    }

    /**
     * @Route("/accounting/client-document-receipt-settlement/add-step1-submit/{clientDocument}",
     *     name="_accounting__client_document_receipt_settlement__add_step1_submit"
     * )
     *
     * Action to add objects (step 1 submit)
     * @param Request $request
     * @param $clientDocument
     * @return mixed
     */
    public function addStep1SubmitAction(Request $request, $clientDocument)
    {
        return parent::addStep1SubmitAction($request, $clientDocument);
    }

    /**
     * @Route("/accounting/client-document-receipt-settlement/add-step2/{clientDocument}/{id}",
     *     name="_accounting__client_document_receipt_settlement__add_step2",
     *     defaults={"id" = null}
     * )
     *
     * Action to add objects (step 2)
     * @param Request $request
     * @param $clientDocument
     * @param $id
     * @return mixed
     */
    public function addStep2Action(Request $request, $clientDocument, $id)
    {
        return parent::addStep2Action($request, $clientDocument, $id);
    }

    /**
     * @Route("/accounting/client-document-receipt-settlement/edit/{clientDocument}/{id}",
     *     name="_accounting__client_document_receipt_settlement__edit",
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
     * @Route("/accounting/client-document-receipt-settlement/delete/{clientDocument}/{id}",
     *     name="_accounting__client_document_receipt_settlement__delete",
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
        return parent::deleteLocalChildAction($request, $clientDocument, $id);
    }

    /**
     * @Route("/accounting/client-document-receipt-settlement/data/{clientDocument}",
     *     name="_accounting__client_document_receipt_settlement__data"
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
     * @Route("/accounting/client-document-receipt-settlement/conf/{clientDocument}",
     *     name="_accounting__client_document_receipt_settlement__conf"
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