<?php

namespace Bck\AccountingBundle\Controller;

use Sensio\Bundle\FrameworkExtraBundle\Configuration\Route;
use Symfony\Component\HttpFoundation\Request;

class ClientDocumentReceiptSettlementController extends BaseDocumentReceiptSettlementController
{
    /**
     * Get label/title to display child in parent
     * @return mixed
     */
    static function getLabel() { return 'Documents'; }

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
    public function init(Request $request, $parents = null)
    {
        // Set configuration only once
        if($this->isInitialized) { return $this; }

        // Parent route
        $this->parentConf = array(
            'clientDocument' => array('route' => '_bck__accounting__client_document__index')
        );

        // Route
        $this->templateConf['route'] = array(
            'get' => array(
                'name' => '_bck__accounting__client_document_receipt_settlement__get'
            ),
            'add' => array(
                'name' => '_bck__accounting__client_document_receipt_settlement__add',
            ),
            'addStep1Submit' => array(
                'name' => '_bck__accounting__client_document_receipt_settlement__add_step1_submit',
            ),
            'addStep2' => array(
                'name' => '_bck__accounting__client_document_receipt_settlement__add_step2',
            ),
            'edit' => array(
                'name' => '_bck__accounting__client_document_receipt_settlement__edit',
            ),
            'delete' => array(
                'name' => '_bck__accounting__client_document_receipt_settlement__delete',
            )
        );

        parent::init($request, $parents);

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
     * @Route("/bck/accounting/client-document-receipt-settlement/get/{clientDocument}/{id}",
     *     name="_bck__accounting__client_document_receipt_settlement__get",
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
     * @Route("/bck/accounting/client-document-receipt-settlement/add/{clientDocument}",
     *     name="_bck__accounting__client_document_receipt_settlement__add"
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
     * @Route("/bck/accounting/client-document-receipt-settlement/add-step1-submit/{clientDocument}",
     *     name="_bck__accounting__client_document_receipt_settlement__add_step1_submit"
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
     * @Route("/bck/accounting/client-document-receipt-settlement/add-step2/{clientDocument}/{id}",
     *     name="_bck__accounting__client_document_receipt_settlement__add_step2",
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
     * @Route("/bck/accounting/client-document-receipt-settlement/edit/{clientDocument}/{id}",
     *     name="_bck__accounting__client_document_receipt_settlement__edit",
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
     * @Route("/bck/accounting/client-document-receipt-settlement/delete/{clientDocument}/{id}",
     *     name="_bck__accounting__client_document_receipt_settlement__delete",
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
     * @Route("/bck/accounting/client-document-receipt-settlement/data/{clientDocument}",
     *     name="_bck__accounting__client_document_receipt_settlement__data"
     * )
     *
     * Overrides parent method
     * @param Request $request
     * @param $clientDocument
     * @param $responseType (not used in route, only for direct symfony calls,
     *     determines the type of response [http, json, array])
     * @return mixed
     */
    public function dataLocalChildAction(Request $request, $clientDocument, $responseType = 'http')
    {
        // Set configuration
        $this->init($request, array($clientDocument));

        // Legend (disable cancel legend)
        $this->templateConf['controls']['legend'] = array();

        return parent::dataChildAction($request, array($clientDocument), $responseType);
    }

    /**
     * @Route("/bck/accounting/client-document-receipt-settlement/conf/{clientDocument}/{id}",
     *     name="_bck__accounting__client_document_receipt_settlement__conf",
     *     defaults={"id" = null}
     * )
     *
     * Overrides parent method
     * @param Request $request
     * @param $clientDocument
     * @param $id (return the target id object with the conf, it's used to avoid to make another server request
     *     to get the object when we need the object with the conf, like in flat forms, entity detail, etc.)
     * @return mixed
     */
    public function confLocalChildAction(Request $request, $clientDocument, $id = null)
    {
        return parent::confChildAction($request, array($clientDocument), $id);
    }
}