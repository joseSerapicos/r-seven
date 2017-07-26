<?php

namespace AccountingBundle\Controller;

use AppBundle\Controller\BaseEntityChildController;
use Sensio\Bundle\FrameworkExtraBundle\Configuration\Route;
use Symfony\Component\HttpFoundation\Request;

class ClientDocumentReceiptPaymentController extends BaseEntityChildController
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
                'name' => '_accounting__client_document_receipt_payment__get'
            ),
            'add' => array(
                'name' => '_accounting__client_document_receipt_payment__add',
            ),
            'edit' => array(
                'name' => '_accounting__client_document_receipt_payment__edit',
            ),
            'delete' => array(
                'name' => '_accounting__client_document_receipt_payment__delete',
            )
        );

        parent::initChild($request, $parents, $label);

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
     * @Route("/accounting/client-document-receipt-payment/add/{clientDocument}/{id}",
     *     name="_accounting__client_document_receipt_payment__add",
     *     defaults={"id" = null}
     * )
     *
     * Add object action
     * @param Request $request
     * @param $clientDocument
     * @param $id
     * @return mixed
     */
    public function addLocalChildAction(Request $request, $clientDocument, $id)
    {
        $parents = array($clientDocument);

        // Set configuration
        $this->flags['hasForm'] = true;
        $this->initChild($request, $parents);

        // Add is not allowed when parent are stored in database,
        // because value are only correctly validated when object is saved from session to database
        // (comparing settlement whit payment).
        // So to add new entries cancel the receipt document and create another.
        if ($this->flags['storage'] == 'db') {
            $this->responseConf['status'] = 0;
            $this->addFlashMessage(
                'This transaction is closed.<br/>If you need to add new entries, please cancel the receipt and create another one.',
                'Data not persisted',
                'error'
            );

            return $this->getResponse(true);
        }

        return parent::editChildAction($request, $parents, $id);
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
        $parents = array($clientDocument);

        // Set configuration
        $this->flags['hasForm'] = true;
        $this->initChild($request, $parents);

        // Edit does not allow to change value when object are stored in database,
        // because value are only correctly validated when object is saved from session to database
        // (comparing settlement whit payment).
        // So to fix values cancel the receipt document and create another.
        if ($this->flags['storage'] == 'session') {
            return parent::editChildAction($request, $parents, $id);
        }

        // Get object
        $obj = $this->getObject($id);
        $oldValue = $obj->getValue();

        // Build form
        $form = $this->buildForm($request, $obj);

        // Handle request
        $form->handleRequest($request);

        // Check if is submitted
        if($form->isSubmitted()) {
            $data = $this->getRequestData($request);

            if ($oldValue != $data['form']['value']) {
                $this->responseConf['status'] = 0;
                $this->addFlashMessage(
                    'Value cannot be edited, this transaction is closed.<br/>If you need to change the value, please cancel the receipt and create another one.',
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

        // Set configuration
        $this->flags['hasForm'] = true;
        $this->initChild($request, $parents);

        // Delete is not allowed when parent are stored in database,
        // because value are only correctly validated when object is saved from session to database
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

    /**
     * Overrides parent function
     * @param $object
     * @param $data
     * @param null $context
     * @return bool
     */
    protected function preSaveObject($object, $data, $context = null) {
        if ($object->getValue() <= 0) {
            $this->responseConf['status'] = 0;
            $this->addFlashMessage(
                'Payment value must be >= 0.',
                'Data not persisted',
                'error'
            );

            return false;
        }

        return true;
    }
}