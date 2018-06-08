<?php

namespace Bck\AccountingBundle\Controller;

use Sensio\Bundle\FrameworkExtraBundle\Configuration\Route;
use Symfony\Component\HttpFoundation\Request;


class SupplierDocumentController extends BaseDocumentController
{
    /**
     * Defines parent method
     * @return mixed (lowerCamelCase)
     */
    protected function getLocalEntityContext()
    {
        return 'supplier';
    }

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

        // Flags, enable stores sharing
        $this->flags['storeAclResource'] = 'shareCurrentAccounts:suppliers'; // Shared resource by stores

        // Route
        $this->templateConf['route'] = array(
            'new' => array(
                'name' => '_bck__accounting__supplier_document__new'
            ),
            'get' => array(
                'name' => '_bck__accounting__supplier_document__get'
            ),
            'getByBooking' => array(
                'name' => '_bck__accounting__supplier_document__get_by_booking'
            ),
            'addStep1' => array(
                'name' => '_bck__accounting__supplier_document__add_step1',
            ),
            'addStep2' => array(
                'name' => '_bck__accounting__supplier_document__add_step2',
            ),
            'addStep3Invoice' => array(
                'name' => '_bck__accounting__supplier_document__add_step3_invoice',
            ),
            'addStep3Receipt' => array(
                'name' => '_bck__accounting__supplier_document__add_step3_receipt',
            ),
            'addStep3Payment' => array(
                'name' => '_bck__accounting__supplier_document__add_step3_payment',
            ),
            'addStep3Settlement' => array(
                'name' => '_bck__accounting__supplier_document__add_step3_settlement',
            ),
            'edit-invoice' => array(
                'name' => '_bck__accounting__supplier_document__edit_invoice',
            ),
            'edit-receipt' => array(
                'name' => '_bck__accounting__supplier_document__edit_receipt',
            ),
            'edit-payment' => array(
                'name' => '_bck__accounting__supplier_document__edit_payment',
            ),
            'edit-settlement' => array(
                'name' => '_bck__accounting__supplier_document__edit_settlement',
            ),
            'edit-entity-address' => array(
                'name' => '_bck__accounting__supplier_document__edit_entity_address',
            ),
            'delete' => array(
                'name' => '_bck__accounting__supplier_document__delete',
            ),
            'cancel' => array(
                'name' => '_bck__accounting__supplier_document__cancel',
            ),
            'choices' => array(
                'name' => '_bck__accounting__supplier_document__choices'
            ),
            'pdf' => array(
                'name' => '_bck__accounting__supplier_document__pdf'
            )
        );

        parent::init($request);

        // Search
        $this->templateConf['search']['fields'] = array('entity_avatar', 'entity_name',
            'documentType_name', 'code',
            'subTotal', 'totalVat', 'total', 'date', 'dueDate', 'settlementStatus');
        // See only open documents by default
        $this->templateConf['search']['criteria'][] = array('field' => 'settlementStatus', 'expr' => 'neq', 'value' => 'YES');
        $this->templateConf['search']['orderBy'] = array(
            array('field' => 'date', 'value' => 'DESC') // Last emission appears first
        );

        // Actions for template/view
        unset($this->templateConf['actions']['delete']);
        $this->templateConf['actions']['search'] = true;
        $this->templateConf['actions']['cancel'] = true;

        return $this;
    }

    /**
     * @Route("/bck/accounting/supplier-document",
     *     name="_bck__accounting__supplier_document__index"
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
     * @Route("/bck/accounting/supplier-document/new",
     *     name="_bck__accounting__supplier_document__new"
     * )
     *
     * Overrides parent method
     * @param Request $request
     * @return mixed
     */
    public function newAction(Request $request)
    {
        return parent::newAction($request);
    }

    /**
     * @Route("/bck/accounting/supplier-document/get/{id}",
     *     name="_bck__accounting__supplier_document__get",
     *     defaults={"id" = null}
     * )
     *
     * Overrides parent method
     * @param Request $request
     * @param $id
     * @return mixed
     */
    public function getAction(Request $request, $id)
    {
        return parent::getAction($request, $id);
    }

    /**
     * @Route("/bck/accounting/supplier-document/choices/{entity}/{operation}/{booking}",
     *     name="_bck__accounting__supplier_document__choices",
     *     defaults={"entity" = null, "operation" = null, "booking" = null},
     * )
     *
     * Overrides parent method
     * @param Request $request
     * @param $entity (entity id of entity type according with context)
     * @param $operation (document operation <DEBIT or CREDIT>)
     * @param $booking (booking id, to filter results by booking)
     * @return mixed
     */
    public function choicesAction(Request $request, $entity = null, $operation = null, $booking = null)
    {
        return parent::choicesAction($request, $entity, $operation, $booking);
    }

    /**
     * @Route("/bck/accounting/supplier-document/add-step1/{id}",
     *     name="_bck__accounting__supplier_document__add_step1",
     *     defaults={"id" = null}
     * )
     *
     * Overrides parent method
     * @param Request $request
     * @param $id
     * @return mixed
     */
    public function addStep1Action(Request $request, $id)
    {
        return parent::addStep1Action($request, $id);
    }

    /**
     * @Route("/bck/accounting/supplier-document/add-step2/{id}",
     *     name="_bck__accounting__supplier_document__add_step2",
     *     defaults={"id" = null}
     * )
     *
     * Add step 2
     * @param Request $request
     * @param $id
     * @return mixed
     */
    public function addStep2Action(Request $request, $id)
    {
        return parent::addStep2Action($request, $id);
    }

    /**
     * @Route("/bck/accounting/supplier-document/add-step3-invoice/{id}",
     *     name="_bck__accounting__supplier_document__add_step3_invoice",
     *     defaults={"id" = null}
     * )
     *
     * Overrides parent method
     * @param Request $request
     * @param $id
     * @return mixed
     */
    public function addStep3InvoiceAction(Request $request, $id)
    {
        return parent::addStep3InvoiceAction($request, $id);
    }

    /**
     * @Route("/bck/accounting/supplier-document/add-step3-receipt/{id}",
     *     name="_bck__accounting__supplier_document__add_step3_receipt",
     *     defaults={"id" = null}
     * )
     *
     * Overrides parent method
     * @param Request $request
     * @param $id
     * @return mixed
     */
    public function addStep3ReceiptAction(Request $request, $id)
    {
        return parent::addStep3ReceiptAction($request, $id);
    }

    /**
     * @Route("/bck/accounting/supplier-document/add-step3-payment/{id}",
     *     name="_bck__accounting__supplier_document__add_step3_payment",
     *     defaults={"id" = null}
     * )
     *
     * Overrides parent method
     * @param Request $request
     * @param $id
     * @return mixed
     */
    public function addStep3PaymentAction(Request $request, $id)
    {
        return parent::addStep3PaymentAction($request, $id);
    }

    /**
     * @Route("/bck/accounting/supplier-document/add-step3-settlement/{id}",
     *     name="_bck__accounting__supplier_document__add_step3_settlement",
     *     defaults={"id" = null}
     * )
     *
     * Overrides parent method
     * @param Request $request
     * @param $id
     * @return mixed
     */
    public function addStep3SettlementAction(Request $request, $id)
    {
        return parent::addStep3SettlementAction($request, $id);
    }

    /**
     * @Route("/bck/accounting/supplier-document/edit-invoice/{id}",
     *     name="_bck__accounting__supplier_document__edit_invoice",
     *     defaults={"id" = null}
     * )
     *
     * Overrides parent method
     * @param Request $request
     * @param $id
     * @return mixed
     */
    public function editInvoiceAction(Request $request, $id)
    {
        return parent::editInvoiceAction($request, $id);
    }

    /**
     * @Route("/bck/accounting/supplier-document/edit-receipt/{id}",
     *     name="_bck__accounting__supplier_document__edit_receipt",
     *     defaults={"id" = null}
     * )
     *
     * Overrides parent method
     * @param Request $request
     * @param $id
     * @return mixed
     */
    public function editReceiptAction(Request $request, $id)
    {
        return parent::editReceiptAction($request, $id);
    }

    /**
     * @Route("/bck/accounting/supplier-document/edit-payment/{id}",
     *     name="_bck__accounting__supplier_document__edit_payment",
     *     defaults={"id" = null}
     * )
     *
     * Overrides parent method
     * @param Request $request
     * @param $id
     * @return mixed
     */
    public function editPaymentAction(Request $request, $id)
    {
        return parent::editPaymentAction($request, $id);
    }

    /**
     * @Route("/bck/accounting/supplier-document/edit-settlement/{id}",
     *     name="_bck__accounting__supplier_document__edit_settlement",
     *     defaults={"id" = null}
     * )
     *
     * Overrides parent method
     * @param Request $request
     * @param $id
     * @return mixed
     */
    public function editSettlementAction(Request $request, $id)
    {
        return parent::editSettlementAction($request, $id);
    }

    /**
     * @Route("/bck/accounting/supplier-document/edit-entity-address/{id}",
     *     name="_bck__accounting__supplier_document__edit_entity_address",
     *     defaults={"id" = null}
     * )
     *
     * Edit entity address action (to change default entity address)
     * @param Request $request
     * @param $id
     * @return mixed
     */
    public function editEntityAddressAction(Request $request, $id)
    {
        return parent::editEntityAddressAction($request, $id);
    }

    /**
     * @Route("/bck/accounting/supplier-document/delete/{id}",
     *     name="_bck__accounting__supplier_document__delete",
     *     defaults={"id" = null}
     * )
     *
     * Overrides parent method
     * @param Request $request
     * @param $id
     * @return mixed
     */
    public function deleteAction(Request $request, $id)
    {
        return parent::deleteAction($request, $id);
    }

    /**
     * @Route("/bck/accounting/supplier-document/cancel/{id}",
     *     name="_bck__accounting__supplier_document__cancel",
     *     defaults={"id" = null}
     * )
     *
     * Overrides parent method
     * @param Request $request
     * @param $id
     * @return mixed
     */
    public function cancelAction(Request $request, $id)
    {
        return parent::cancelAction($request, $id);
    }

    /**
     * @Route("/bck/accounting/supplier-document/pdf/{id}",
     *     name="_bck__accounting__supplier_document__pdf",
     *     defaults={"id" = null}
     * )
     *
     * Overrides parent method
     * @param Request $request
     * @param $id
     * @return mixed
     */
    public function pdfAction(Request $request, $id)
    {
        return parent::pdfAction($request, $id);
    }

    /**
     * @Route("/bck/accounting/supplier-document/data",
     *     name="_bck__accounting__supplier_document__data"
     * )
     *
     * Overrides parent method
     * @param Request $request
     * @param $responseType (not used in route, only for direct symfony calls,
     *     determines the type of response [http, json, array])
     * @return mixed
     */
    public function dataAction(Request $request, $responseType = 'http')
    {
        return parent::dataAction($request, $responseType);
    }

    /**
     * @Route("/bck/accounting/supplier-document/conf/{id}",
     *     name="_bck__accounting__supplier_document__conf",
     *     defaults={"id" = null}
     * )
     *
     * Overrides parent method
     * @param Request $request
     * @param $id (return the target id object with the conf, it's used to avoid to make another server request
     *     to get the object when we need the object with the conf, like in flat forms, entity detail, etc.)
     * @return mixed
     */
    public function confAction(Request $request, $id = null)
    {
        return parent::confAction($request, $id);
    }


    ////////////////////////////////////////////////////
    // METHODS TO HANDLE WITH BOOKING FILTER
    /////////////////////////////////////////////////////////////////////////////////////////////////////////

    /**
     * @Route("/bck/accounting/supplier-document/get-by-booking/{booking}/{id}",
     *     name="_bck__accounting__supplier_document__get_by_booking",
     *     defaults={"booking" = null, "id" = null}
     * )
     *
     * Overrides parent method
     * @param Request $request
     * @param $booking
     * @param $id
     * @return mixed
     */
    public function getByBookingAction(Request $request, $booking, $id)
    {
        return parent::getByBookingAction($request, $booking, $id);
    }

    /**
     * @Route("/bck/accounting/supplier-document/data-by-booking/{booking}",
     *     name="_bck__accounting__supplier_document__data_by_booking"
     * )
     *
     * Overrides parent method
     * @param Request $request
     * @param $booking
     * @return mixed
     */
    public function dataByBookingAction(Request $request, $booking)
    {
        return parent::dataByBookingAction($request, $booking);
    }


    ////////////////////////////////////////////////////
    // METHODS TO HANDLE WITH SETTLEMENT FORMS
    /////////////////////////////////////////////////////////////////////////////////////////////////////////

    /**
     * @Route("/bck/accounting/supplier-document/get-for-settlement/{targetDocument}/{booking}",
     *     name="_bck__accounting__supplier_document__get_for_settlement",
     *     defaults={"targetDocument" = null, "booking" = null}
     * )
     *
     * Overrides parent method
     * @param Request $request
     * @param $targetDocument
     * @param $booking
     * @return mixed
     */
    public function getForSettlementAction(Request $request, $targetDocument, $booking = null)
    {
        return parent::getForSettlementAction($request, $targetDocument, $booking);
    }

    /**
     * @Route("/bck/accounting/supplier-document/data-for-settlement/{targetDocument}/{booking}",
     *     name="_bck__accounting__supplier_document__data_for_settlement",
     *     defaults={"targetDocument" = null, "booking" = null}
     * )
     *
     * Overrides parent method
     * @param Request $request
     * @param $targetDocument
     * @param $booking
     * @return mixed
     */
    public function dataForSettlementAction(Request $request, $targetDocument, $booking = null)
    {
        return parent::dataForSettlementAction($request, $targetDocument, $booking);
    }


    //////////////////////////////////////////////////////////
    // METHODS FOR HOME
    ///////////////////////////////////////////////////////


    /**
     * Initialization. Set all basic configuration
     * @param Request $request
     * @return $this
     * @throws \Exception
     */
    public function initForHome(Request $request)
    {
        // Set configuration only once
        if($this->isInitialized) { return $this; }

        // Label
        $this->templateConf['label'] = 'Expired Supplier Documents';
        $this->templateConf['labelIcon'] = 'fa-calculator';

        // Route
        $this->templateConf['route'] = array(
            'get' => array(
                'name' => '_bck__accounting__supplier_document__get_for_home'
            )
        );

        parent::init($request);

        // Get expired supplier documents (with 5 days in advance)
        $currentDate = date('Y-m-d', strtotime(date("Y-m-d"). ' + 5 days'));
        $this->localConf['search']['criteria'][] = array(
            'field' => 'dueDate',
            'expr' => 'lte',
            'value' => $currentDate
        );
        $this->localConf['search']['criteria'][] = array(
            'field' => 'remainSettlement',
            'expr' => 'neq',
            'value' => 0
        );

        // Search
        $this->templateConf['search']['fields'] = array(
            'entity_avatar', 'entity_name', 'code', 'documentType_name', 'date', 'dueDate', 'total'
        );

        // Legend (disable cancel legend)
        $this->templateConf['controls']['legend'] = array();

        $this->templateConf['controls']['expander']['isEnabled'] = true;

        // Actions for template/view
        $this->templateConf['actions'] = array();

        return $this;
    }

    /**
     * @Route("/bck/accounting/supplier-document/get-for-home/{id}",
     *     name="_bck__accounting__supplier_document__get_for_home",
     *     defaults={"id" = null},
     * )
     *
     * Action to get a list/array of compact objects from the search configuration
     * or a regular object if the "id" is provided
     * @param Request $request
     * @param $id
     * @return mixed
     */
    public function getForHomeAction(Request $request, $id)
    {
        $this->initForHome($request);
        return parent::getAction($request, $id);
    }

    /**
     * Action to get all data for home bundle
     * @param Request $request
     * @param $responseType (not used in route, only for direct symfony calls,
     *     determines the type of response [http, json, array])
     * @return mixed
     */
    public function dataForHomeAction(Request $request, $responseType = 'http')
    {
        $this->initForHome($request);
        return $this->dataAction($request, $responseType);
    }
}