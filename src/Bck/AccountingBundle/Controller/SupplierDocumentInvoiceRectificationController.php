<?php

namespace Bck\AccountingBundle\Controller;

use Bck\AccountingBundle\Entity\SupplierDocumentInvoiceDetail;
use Bck\AccountingBundle\Entity\SupplierDocumentInvoiceRectification;
use Sensio\Bundle\FrameworkExtraBundle\Configuration\Route;
use Symfony\Component\HttpFoundation\Request;

class SupplierDocumentInvoiceRectificationController extends BaseDocumentInvoiceRectificationController
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
    public function init(Request $request, $parents = null)
    {
        // Set configuration only once
        if($this->isInitialized) { return $this; }

        // Parent route
        $this->parentConf = array(
            'supplierDocument' => array('route' => '_bck__accounting__supplier_document__index')
        );

        // Route
        $this->templateConf['route'] = array(
            'get' => array(
                'name' => '_bck__accounting__supplier_document_invoice_rectification__get'
            ),
            'getForRectification' => array(
                'name' => '_bck__accounting__supplier_document_invoice_rectification__get_for_rectification'
            ),
            'add' => array(
                'name' => '_bck__accounting__supplier_document_invoice_rectification__add',
            ),
            'addStep1Submit' => array(
                'name' => '_bck__accounting__supplier_document_invoice_rectification__add_step1_submit',
            ),
            'addStep2' => array(
                'name' => '_bck__accounting__supplier_document_invoice_rectification__add_step2',
            ),
            'edit' => array(
                'name' => '_bck__accounting__supplier_document_invoice_rectification__edit',
            ),
            'delete' => array(
                'name' => '_bck__accounting__supplier_document_invoice_rectification__delete',
            )
        );

        parent::init($request, $parents);

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
     * @Route("/bck/accounting/supplier-document-invoice-rectification/get/{supplierDocument}/{id}",
     *     name="_bck__accounting__supplier_document_invoice_rectification__get",
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
     * @Route("/bck/accounting/supplier-document-invoice-rectification/add/{supplierDocument}",
     *     name="_bck__accounting__supplier_document_invoice_rectification__add"
     * )
     *
     * Action to add objects
     * @param Request $request
     * @param $supplierDocument
     * @return mixed
     */
    public function addAction(Request $request, $supplierDocument)
    {
        return parent::addAction($request, $supplierDocument);
    }

    /**
     * @Route("/bck/accounting/supplier-document-invoice-rectification/add-step1-submit/{supplierDocument}",
     *     name="_bck__accounting__supplier_document_invoice_rectification__add_step1_submit"
     * )
     *
     * Action to add objects (step 1 submit)
     * @param Request $request
     * @param $supplierDocument
     * @return mixed
     */
    public function addStep1SubmitAction(Request $request, $supplierDocument)
    {
        return parent::addStep1SubmitAction($request, $supplierDocument);
    }

    /**
     * @Route("/bck/accounting/supplier-document-invoice-rectification/add-step2/{supplierDocument}/{id}",
     *     name="_bck__accounting__supplier_document_invoice_rectification__add_step2",
     *     defaults={"id" = null}
     * )
     *
     * Action to add objects (step 2)
     * @param Request $request
     * @param $supplierDocument
     * @param $id
     * @return mixed
     */
    public function addStep2Action(Request $request, $supplierDocument, $id)
    {
        return parent::addStep2Action($request, $supplierDocument, $id);
    }

    /**
     * @Route("/bck/accounting/supplier-document-invoice-rectification/edit/{supplierDocument}/{id}",
     *     name="_bck__accounting__supplier_document_invoice_rectification__edit",
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
     * @Route("/bck/accounting/supplier-document-invoice-rectification/delete/{supplierDocument}/{id}",
     *     name="_bck__accounting__supplier_document_invoice_rectification__delete",
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
        return parent::deleteLocalChildAction($request, $supplierDocument, $id);
    }

    /**
     * @Route("/bck/accounting/supplier-document-invoice-rectification/data/{supplierDocument}",
     *     name="_bck__accounting__supplier_document_invoice_rectification__data"
     * )
     *
     * Overrides parent method
     * @param Request $request
     * @param $supplierDocument
     * @param $responseType (not used in route, only for direct symfony calls,
     *     determines the type of response [http, json, array])
     * @return mixed
     */
    public function dataLocalChildAction(Request $request, $supplierDocument, $responseType = 'http')
    {
        return parent::dataChildAction($request, array($supplierDocument), $responseType);
    }

    /**
     * @Route("/bck/accounting/supplier-document-invoice-rectification/conf/{supplierDocument}/{id}",
     *     name="_bck__accounting__supplier_document_invoice_rectification__conf",
     *     defaults={"id" = null}
     * )
     *
     * Overrides parent method
     * @param Request $request
     * @param $supplierDocument
     * @param $id (return the target id object with the conf, it's used to avoid to make another server request
     *     to get the object when we need the object with the conf, like in flat forms, entity detail, etc.)
     * @return mixed
     */
    public function confLocalChildAction(Request $request, $supplierDocument, $id = null)
    {
        return parent::confChildAction($request, array($supplierDocument), $id);
    }


    ////////////////////////////////////////////////////
    // METHODS TO HANDLE WITH RECTIFICATION FORMS (BASED ON REMAIN RECTIFICATION)
    /////////////////////////////////////////////////////////////////////////////////////////////////////////

    /**
     * @Route("/bck/accounting/supplier-document-invoice-rectification/get-for-rectification/{supplierDocument}/{booking}",
     *     name="_bck__accounting__supplier_document_invoice_rectification__get_for_rectification",
     *     defaults={"booking" = null}
     * )
     *
     * Get For Rectification (get objects to form)
     * @param Request $request
     * @param $supplierDocument
     * @param $booking
     * @return mixed
     */
    public function getForRectificationAction(Request $request, $supplierDocument, $booking = null)
    {
        return parent::getForRectificationAction($request, $supplierDocument, $booking);
    }

    /**
     * @Route("/bck/accounting/supplier-document-invoice-rectification/data-for-rectification/{supplierDocument}/{booking}",
     *     name="_bck__accounting__supplier_document_invoice_rectification__data_for_rectification",
     *     defaults={"booking" = null}
     * )
     *
     * Get data for rectification form
     * @param Request $request
     * @param $supplierDocument
     * @param $booking
     * @return mixed
     */
    public function dataForRectificationAction(Request $request, $supplierDocument, $booking = null)
    {
        return parent::dataForRectificationAction($request, $supplierDocument, $booking);
    }
}