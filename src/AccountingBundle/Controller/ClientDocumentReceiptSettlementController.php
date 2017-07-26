<?php

namespace AccountingBundle\Controller;

use AppBundle\Controller\BaseEntityChildController;
use Sensio\Bundle\FrameworkExtraBundle\Configuration\Route;
use Symfony\Component\HttpFoundation\Request;

class ClientDocumentReceiptSettlementController extends BaseEntityChildController
{
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
            'clientDocumentType_name', 'invoiceClientDocument_code', 'entity_avatar', 'entity_name',
            'invoiceClientDocument_date', 'invoiceClientDocument_dueDate', 'value'
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
        $parents = array($clientDocument);

        // Set configuration
        $this->flags['hasForm'] = true;
        $this->initChild($request, $parents);

        // Edit does not allow changes when object are stored in database,
        // because fields values are only correctly validated when object is saved from session to database
        // (comparing settlement whit payment).
        // So to fix fields values cancel the receipt document and create another.
        // On the other hand if you can edit the "invoiceDocument" field, you could select documents made after the
        // receipt, creating inquiries between the date of the receipt and the date of the "invoiceDocument".
        if ($this->flags['storage'] == 'db') {
            // Do not create form, edition is not allowed!
            $this->responseConf['status'] = 0;
            $this->addFlashMessage(
                'This transaction is closed.<br/>If you need to add entries, please cancel the receipt and create another one.',
                'Data not persisted',
                'error'
            );

            return $this->getResponse(true);
        }

        // Get object
        $obj = $this->getObject($id);

        // Build form
        $form = $this->buildForm($request, $obj);

        // Handle request
        $form->handleRequest($request);

        // Check if is submitted
        if($form->isSubmitted()) {
            // Check if value is correct
            $missingSettlement = $this->getRepositoryService('ClientDocumentReceiptSettlement', 'AccountingBundle')
                ->execute('getDocumentRemainSettlement', array($obj->getInvoiceClientDocumentObj()));

            $priceService = $this->get('app.service.price');
            if (($obj->getValue() <= 0) || $priceService->isGreater($obj->getValue(), $missingSettlement)) {
                $this->responseConf['status'] = 0;
                $this->addFlashMessage(
                    'Settlement value must be > 0 and < or equal to ' . $missingSettlement,
                    'Data not persisted',
                    'error'
                );

                return $this->getResponse(true);
            }

            $this->saveForm($form, $obj);
            return $this->getResponse(true);
        }

        // Render form
        return $this->render($this->localConf['templates']['edit'], array(
            '_conf' => $this->templateConf,
            '_form' => $form->createView()
        ));
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
        $parents = array($clientDocument);

        // Set configuration
        $this->flags['hasForm'] = true;
        $this->initChild($request, $parents);

        // Delete is not allow when parent are stored in database,
        // because fields values are only correctly validated when object is saved from session to database
        // (comparing settlement whit payment).
        // So to delete entries cancel the receipt document and create another.
        if ($this->flags['storage'] == 'db') {
            $this->responseConf['status'] = 0;
            $this->addFlashMessage(
                'This transaction is closed.<br/>If you need to delete entries, please cancel the receipt and create another one.',
                'Data not persisted',
                'error'
            );

            return $this->getResponse(true);
        }

        return parent::deleteChildAction($request, $parents, $id);
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