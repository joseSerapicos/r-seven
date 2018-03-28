<?php

namespace AccountingBundle\Controller;

use BookingBundle\Controller\BaseBookingController;
use Sensio\Bundle\FrameworkExtraBundle\Configuration\Route;
use Symfony\Component\HttpFoundation\Request;

class ClientDocumentInvoiceDetailController extends BaseDocumentInvoiceDetailController
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
                'name' => '_accounting__client_document_invoice_detail__get'
            ),
            'add' => array(
                'name' => '_accounting__client_document_invoice_detail__add',
            ),
            'addStep1Submit' => array(
                'name' => '_accounting__client_document_invoice_detail__add_step1_submit',
            ),
            'addStep2' => array(
                'name' => '_accounting__client_document_invoice_detail__add_step2',
            ),
            'edit' => array(
                'name' => '_accounting__client_document_invoice_detail__edit',
            ),
            'delete' => array(
                'name' => '_accounting__client_document_invoice_detail__delete',
            )
        );

        parent::initChild($request, $parents);

        // Search
        $this->templateConf['search']['fields'] = array(
            'service_icon', 'service_name', 'description', 'booking_code',
            'quantity', 'totalUnit', 'vatCode_name', 'total'
        );
        // Empty criteria to be able to see all registers because "search" action is disabled.
        $this->templateConf['search']['criteria'] = array();

        // Legend (disable cancel legend)
        $this->templateConf['controls']['legend'] = array();

        // Extra data
        $this->templateConf['extraData']['template'] = array(
            'class' => '-merge-view'
        );

        return $this;
    }

    /**
     * @Route("/accounting/client-document-invoice-detail/get/{clientDocument}/{id}",
     *     name="_accounting__client_document_invoice_detail__get",
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
     * @Route("/accounting/client-document-invoice-detail/add/{clientDocument}",
     *     name="_accounting__client_document_invoice_detail__add"
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
     * @Route("/accounting/client-document-invoice-detail/add-step1-submit/{clientDocument}",
     *     name="_accounting__client_document_invoice_detail__add_step1_submit"
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
     * @Route("/accounting/client-document-invoice-detail/add-step2/{clientDocument}/{id}",
     *     name="_accounting__client_document_invoice_detail__add_step2",
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
     * @Route("/accounting/client-document-invoice-detail/edit/{clientDocument}/{id}",
     *     name="_accounting__client_document_invoice_detail__edit",
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
     * Overrides parent method
     * @param $object
     * @param $data (usually the form data)
     * @return $this
     */
    protected function postSaveObject($object, $data = null)
    {
        // If storage is in database, then update booking
        if (($this->flags['storage'] == 'db') && ($this->responseConf['status'] == 1)) {
            $bookingServicePriceObj = $object->getBookingServicePriceObj();
            if (!empty($bookingServicePriceObj)) {
                BaseBookingController::setInvoiceStatus(
                    $this,
                    $bookingServicePriceObj->getBookingServiceObj()->getBookingObj()
                );
            }
        }

        return $this;
    }

    /**
     * @Route("/accounting/client-document-invoice-detail/delete/{clientDocument}/{id}",
     *     name="_accounting__client_document_invoice_detail__delete",
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
     * Overrides parent method
     * @param $object
     * @param null $context
     * @return $this
     */
    protected function postDeleteObject($object, $context = null)
    {
        return $this->postSaveObject($object);
    }

    /**
     * @Route("/accounting/client-document-invoice-detail/data/{clientDocument}",
     *     name="_accounting__client_document_invoice_detail__data"
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
     * @Route("/accounting/client-document-invoice-detail/conf/{clientDocument}",
     *     name="_accounting__client_document_invoice_detail__conf"
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