<?php

namespace AccountingBundle\Controller;

use Sensio\Bundle\FrameworkExtraBundle\Configuration\Route;
use Symfony\Component\HttpFoundation\Request;


class ClientDocumentController extends BaseDocumentController
{
    /**
     * Defines parent method
     * @return mixed (lowerCamelCase)
     */
    protected function getLocalEntityContext()
    {
        return 'client';
    }

    /**
     * Initialization. Set all basic configuration
     * @param Request $request
     * @return $this
     * @throws \Exception
     */
    protected function init(Request $request)
    {
        // Set configuration only once
        if($this->isInitialized) { return $this; }

        // Flags, enable stores sharing
        $this->flags['storeAclResource'] = 'shareCurrentAccounts:clients'; // Shared resource by stores

        // Route
        $this->templateConf['route'] = array(
            'new' => array(
                'name' => '_accounting__client_document__new'
            ),
            'get' => array(
                'name' => '_accounting__client_document__get'
            ),
            'getByBooking' => array(
                'name' => '_accounting__client_document__get_by_booking'
            ),
            'addStep1' => array(
                'name' => '_accounting__client_document__add_step1',
            ),
            'addStep2' => array(
                'name' => '_accounting__client_document__add_step2',
            ),
            'addStep3Invoice' => array(
                'name' => '_accounting__client_document__add_step3_invoice',
            ),
            'addStep3Receipt' => array(
                'name' => '_accounting__client_document__add_step3_receipt',
            ),
            'addStep3Payment' => array(
                'name' => '_accounting__client_document__add_step3_payment',
            ),
            'addStep3Settlement' => array(
                'name' => '_accounting__client_document__add_step3_settlement',
            ),
            'edit-invoice' => array(
                'name' => '_accounting__client_document__edit_invoice',
            ),
            'edit-receipt' => array(
                'name' => '_accounting__client_document__edit_receipt',
            ),
            'edit-payment' => array(
                'name' => '_accounting__client_document__edit_payment',
            ),
            'edit-settlement' => array(
                'name' => '_accounting__client_document__edit_settlement',
            ),
            'edit-entity-address' => array(
                'name' => '_accounting__client_document__edit_entity_address',
            ),
            'delete' => array(
                'name' => '_accounting__client_document__delete',
            ),
            'cancel' => array(
                'name' => '_accounting__client_document__cancel',
            ),
            'choices' => array(
                'name' => '_accounting__client_document__choices'
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
        $this->templateConf['actions']['pdf'] = true;
        $this->templateConf['actions']['email'] = true;
        $this->templateConf['actions']['cancel'] = true;

        return $this;
    }

    /**
     * @Route("/accounting/client-document",
     *     name="_accounting__client_document__index"
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
     * @Route("/accounting/client-document/new",
     *     name="_accounting__client_document__new"
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
     * @Route("/accounting/client-document/get/{id}",
     *     name="_accounting__client_document__get",
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
     * @Route("/accounting/client-document/choices/{entity}/{operation}/{booking}",
     *     name="_accounting__client_document__choices",
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
     * @Route("/accounting/client-document/add-step1/{id}",
     *     name="_accounting__client_document__add_step1",
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
     * @Route("/accounting/client-document/add-step2/{id}",
     *     name="_accounting__client_document__add_step2",
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
     * @Route("/accounting/client-document/add-step3-invoice/{id}",
     *     name="_accounting__client_document__add_step3_invoice",
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
     * @Route("/accounting/client-document/add-step3-receipt/{id}",
     *     name="_accounting__client_document__add_step3_receipt",
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
     * @Route("/accounting/client-document/add-step3-payment/{id}",
     *     name="_accounting__client_document__add_step3_payment",
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
     * @Route("/accounting/client-document/add-step3-settlement/{id}",
     *     name="_accounting__client_document__add_step3_settlement",
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
     * @Route("/accounting/client-document/edit-invoice/{id}",
     *     name="_accounting__client_document__edit_invoice",
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
     * @Route("/accounting/client-document/edit-receipt/{id}",
     *     name="_accounting__client_document__edit_receipt",
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
     * @Route("/accounting/client-document/edit-payment/{id}",
     *     name="_accounting__client_document__edit_payment",
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
     * @Route("/accounting/client-document/edit-settlement/{id}",
     *     name="_accounting__client_document__edit_settlement",
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
     * @Route("/accounting/client-document/edit-entity-address/{id}",
     *     name="_accounting__client_document__edit_entity_address",
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
     * @Route("/accounting/client-document/delete/{id}",
     *     name="_accounting__client_document__delete",
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
     * @Route("/accounting/client-document/cancel/{id}",
     *     name="_accounting__client_document__cancel",
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
     * @Route("/accounting/client-document/data",
     *     name="_accounting__client_document__data"
     * )
     *
     * Overrides parent method
     * @param Request $request
     * @return mixed
     */
    public function dataAction(Request $request)
    {
        return parent::dataAction($request);
    }

    /**
     * @Route("/accounting/client-document/conf",
     *     name="_accounting__client_document__conf"
     * )
     *
     * Overrides parent method
     * @param Request $request
     * @return mixed
     */
    public function confAction(Request $request)
    {
        return parent::confAction($request);
    }


    ////////////////////////////////////////////////////
    // METHODS TO HANDLE WITH BOOKING FILTER
    /////////////////////////////////////////////////////////////////////////////////////////////////////////

    /**
     * @Route("/accounting/client-document/get-by-booking/{booking}/{id}",
     *     name="_accounting__client_document__get_by_booking",
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
     * @Route("/accounting/client-document/data-by-booking/{booking}",
     *     name="_accounting__client_document__data_by_booking"
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
     * @Route("/accounting/client-document/get-for-settlement/{targetDocument}/{booking}",
     *     name="_accounting__client_document__get_for_settlement",
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
     * @Route("/accounting/client-document/data-for-settlement/{targetDocument}/{booking}",
     *     name="_accounting__client_document__data_for_settlement",
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
}