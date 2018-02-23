<?php

namespace AccountingBundle\Controller;

use AccountingBundle\Entity\ClientDocumentInvoiceDetail;
use AccountingBundle\Entity\ClientDocumentInvoiceRectification;
use Sensio\Bundle\FrameworkExtraBundle\Configuration\Route;
use Symfony\Component\HttpFoundation\Request;

class ClientDocumentInvoiceRectificationController extends BaseDocumentInvoiceRectificationController
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
                'name' => '_accounting__client_document_invoice_rectification__get'
            ),
            'getForRectification' => array(
                'name' => '_accounting__client_document_invoice_rectification__get_for_rectification'
            ),
            'add' => array(
                'name' => '_accounting__client_document_invoice_rectification__add',
            ),
            'addStep1Submit' => array(
                'name' => '_accounting__client_document_invoice_rectification__add_step1_submit',
            ),
            'addStep2' => array(
                'name' => '_accounting__client_document_invoice_rectification__add_step2',
            ),
            'edit' => array(
                'name' => '_accounting__client_document_invoice_rectification__edit',
            ),
            'delete' => array(
                'name' => '_accounting__client_document_invoice_rectification__delete',
            )
        );

        parent::initChild($request, $parents, $label);

        // Search
        $this->templateConf['search']['fields'] = array(
            'service_icon', 'service_name', 'description',
            'quantity', 'totalUnit', 'vatCode_name', 'total',
            'originalDocument_code', 'originalDocumentType_name'
        );
        // Empty criteria to be able to see all registers because "search" action is disabled.
        $this->templateConf['search']['criteria'] = array();

        // Extra data
        $this->templateConf['extraData']['template'] = array(
            'class' => '-merge-view'
        );

        return $this;
    }

    /**
     * @Route("/accounting/client-document-invoice-rectification/get/{clientDocument}/{id}",
     *     name="_accounting__client_document_invoice_rectification__get",
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
     * @Route("/accounting/client-document-invoice-rectification/add/{clientDocument}",
     *     name="_accounting__client_document_invoice_rectification__add"
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
     * @Route("/accounting/client-document-invoice-rectification/add-step1-submit/{clientDocument}",
     *     name="_accounting__client_document_invoice_rectification__add_step1_submit"
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
     * @Route("/accounting/client-document-invoice-rectification/add-step2/{clientDocument}/{id}",
     *     name="_accounting__client_document_invoice_rectification__add_step2",
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
     * @Route("/accounting/client-document-invoice-rectification/edit/{clientDocument}/{id}",
     *     name="_accounting__client_document_invoice_rectification__edit",
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
     * @Route("/accounting/client-document-invoice-rectification/delete/{clientDocument}/{id}",
     *     name="_accounting__client_document_invoice_rectification__delete",
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
     * @Route("/accounting/client-document-invoice-rectification/data/{clientDocument}",
     *     name="_accounting__client_document_invoice_rectification__data"
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
     * @Route("/accounting/client-document-invoice-rectification/conf/{clientDocument}",
     *     name="_accounting__client_document_invoice_rectification__conf"
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


    ////////////////////////////////////////////////////
    // METHODS TO HANDLE WITH RECTIFICATION FORMS (BASED ON REMAIN RECTIFICATION)
    /////////////////////////////////////////////////////////////////////////////////////////////////////////

    /**
     * @Route("/accounting/client-document-invoice-rectification/get-for-rectification/{clientDocument}/{booking}",
     *     name="_accounting__client_document_invoice_rectification__get_for_rectification",
     *     defaults={"booking" = null}
     * )
     *
     * Get For Rectification (get objects to form)
     * @param Request $request
     * @param $clientDocument
     * @param $booking
     * @return mixed
     */
    public function getForRectificationAction(Request $request, $clientDocument, $booking = null)
    {
        return parent::getForRectificationAction($request, $clientDocument, $booking);
    }

    /**
     * @Route("/accounting/client-document-invoice-rectification/data-for-rectification/{clientDocument}/{booking}",
     *     name="_accounting__client_document_invoice_rectification__data_for_rectification",
     *     defaults={"booking" = null}
     * )
     *
     * Get data for rectification form
     * @param Request $request
     * @param $clientDocument
     * @param $booking
     * @return mixed
     */
    public function dataForRectificationAction(Request $request, $clientDocument, $booking = null)
    {
        return parent::dataForRectificationAction($request, $clientDocument, $booking);
    }
}