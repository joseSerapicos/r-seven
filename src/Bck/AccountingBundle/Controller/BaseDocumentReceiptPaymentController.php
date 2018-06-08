<?php

namespace Bck\AccountingBundle\Controller;

use AppBundle\Controller\BaseEntityChildController;
use Sensio\Bundle\FrameworkExtraBundle\Configuration\Route;
use Symfony\Component\HttpFoundation\Request;

abstract class BaseDocumentReceiptPaymentController extends BaseEntityChildController
{
    /**
     * Get Local Entity Context.
     * @return mixed (lowerCamelCase)
     */
    abstract protected function getLocalEntityContext();

    /**
     * Get Entity Context.
     * @param $isUpperCase
     * @return mixed (lowerCamelCase)
     */
    public function getEntityContext($isUpperCase = false) {
        return ($isUpperCase ? ucfirst($this->getLocalEntityContext()) : $this->getLocalEntityContext());
    }

    /**
     * [DEFINE ROUTE HERE]
     *
     * Overrides parent method
     * @param Request $request
     * @param $document
     * @param $id
     * @return mixed
     */
    public function editLocalChildAction(Request $request, $document, $id)
    {
        $parents = array($document);

        // Set configuration
        $this->flags['hasForm'] = true;
        $this->init($request, $parents);

        // Get object
        $obj = $originalObj = $this->getObject($id);
        // Clone the original object in case of session storage,
        // so we keep the original object untouched in case of error,
        // and we will be able to get the object again in the next form submission
        // (otherwise the original object would be modified by the form "handleRequest" method)
        if ($this->flags['storage'] == 'session') {
            $obj = clone $originalObj;
            // Object will be save in storage for parent, so set the id to be replaced by the old (original)
            $obj->setId($originalObj->getId());
        }

        // Save old total of object to validate the total of the document
        $odlValue = (empty($id)
            ? 0
            : $obj->getValue()
        );

        // Build form
        $form = $this->createForm($this->localConf['formTypeClass'], $obj);

        // Handle request
        $form->handleRequest($request);

        // Check if is submitted
        if($form->isSubmitted()) {
            // Validate general object changes and set values.
            $data = $this->getRequestData($request);
            $data['oldValues'] = array('value' => $odlValue);
            if (!$this->preSaveObject($obj, $data)) {
                return $this->getResponse();
            }

            $this->saveForm($form, $obj);

            $this->postSaveObject($obj);

            if (($this->responseConf['status'] == 1)) {
                // Disable session storage flag to be able to add the object in DataService objects
                // when the parent is in session storage
                $this->responseConf['addObjectSessionStorageFlag'] = false;
            }

            return $this->getResponse();
        }

        // Render form
        return $this->render($this->localConf['templates']['edit'], array(
            '_conf' => $this->templateConf,
            '_form' => $form->createView()
        ));
    }

    /**
     * [DEFINE ROUTE HERE]
     *
     * Overrides parent method
     * @param Request $request
     * @param $document
     * @param $id
     * @return mixed
     */
    public function editFlatFormAction(Request $request, $document, $id)
    {
        $entityContextUC = $this->getEntityContext(true);

        $parents = array($document);

        // Set configuration
        $this->flags['hasForm'] = true;
        $this->init($request, $parents);
        $this->localConf['templates']['edit'] = 'AppBundle:form:form.html.twig';
        $this->localConf['formTypeClass'] = 'Bck\AccountingBundle\Form\\'.$entityContextUC.'DocumentReceiptPaymentFlatFormType';

        return $this->editLocalChildAction($request, $document, $id);
    }

    /**
     * Overrides parent function
     * @param $object
     * @param $data (form data and "oldValues" with old values of object to validate the new values:
     *     array('value' => []))
     * @return bool
     */
    protected function preSaveObject(&$object, $data) {
        $entityContextUC = $this->getEntityContext(true);

        $documentObj = $this->getParentConf()['obj'];

        // Check document acl
        if (!BaseDocumentController::validateDocumentAclByFormContext($this, $documentObj, 'edit')) {
            return false;
        }

        $getMethod = 'get' . $entityContextUC . 'DocumentTypeObj';
        $documentTypeObj = $documentObj->$getMethod();
        $hasSettlement = ($documentTypeObj->getType() == 'RECEIPT');
        $isSessionStorage = ($this->flags['storage'] == 'session');
        $isAddContext = ($this->getObjectFormContext($object) == 'add');

        /////////////////////////////////
        // RECEIPT WITH SETTLEMENT
        /////////////////////////////////////
        $errorMessage = null;
        if ($hasSettlement) {
            // Add is not allowed when parent are stored in database and settlement is enabled,
            // because value are only correctly validated when object is saved from session to database
            // (comparing settlement whit payment).
            // So to add new entries cancel the receipt document and create another.
            if (!$isSessionStorage && $isAddContext) {
                $this->responseConf['status'] = 0;
                $this->addFlashMessage(
                    'This transaction is closed.<br/>If you need to add new entries, please cancel the receipt and create another one.',
                    'Data not persisted',
                    'error'
                );
                return false;
            }

            // Value can't be changed
            if (!$isSessionStorage && ($data['oldValues']['value'] != $data['form']['value'])) {
                $this->responseConf['status'] = 0;
                $this->addFlashMessage(
                    'Value cannot be edited, this transaction is closed.<br/>If you need to change the value, please cancel the receipt and create another one.',
                    'Data not persisted',
                    'error'
                );
                return false;
            }
        } else {
            //////////////////////////////////
            // RECEIPT WITHOUT SETTLEMENT
            //////////////////////////////////
            // Check values
            if (($documentObj->getTotal() - $data['oldValues']['value'] + $data['form']['value']) <= 0) {
                $errorMessage = 'Document value should be greater than zero.';
            } elseif (
                ($documentObj->getTotal() - $documentObj->getRemainSettlement()) >
                ($documentObj->getTotal() - $data['oldValues']['value'] + $data['form']['value'])
            ) {
                $errorMessage = (
                    'Document value should be greater than the settlement ('
                    . ($documentObj->getTotal() - $documentObj->getRemainSettlement())
                    . ').<br/> Otherwise you need to cancel the settlement before.'
                );
            }
        }

        /////////////////////////////////////////
        // RECEIPT WITH AND WITHOUT SETTLEMENT
        ///////////////////////////////////////////
        if ($data['form']['value'] <= 0) {
            $errorMessage = 'Payment value must be >= 0.';
        }

        // Set error
        if ($errorMessage) {
            $this->responseConf['status'] = 0;
            $this->addFlashMessage(
                ('Invalid value was detected.<br/>' . $errorMessage),
                'Data not persisted',
                'error'
            );
            return false;
        }

        return true;
    }

    /**
     * Overrides parent method
     * @param $object
     * @param $data (usually the form data)
     * @return object
     */
    protected function postSaveObject($object, $data = null)
    {
        if ($this->responseConf['status'] == 1) {
            $documentObj = $this->getParentConf()['obj'];
            $this->setDocumentTotals($documentObj);
        }

        return $this;
    }

    /**
     * Overrides parent method
     * @param $object
     * @param $context (context to help to determine actions)
     * @return boolean (true to continue, false to abort)
     */
    protected function preDeleteObject($object, $context = null)
    {
        $isSessionStorage = ($this->flags['storage'] == 'session');

        if (!$isSessionStorage) {
            $documentObj = $this->getParentConf()['obj'];

            // Check document acl
            if (!BaseDocumentController::validateDocumentAclByFormContext($this, $documentObj, 'edit')) {
                return false;
            }

            $entityContextUC = $this->getEntityContext(true);
            $getMethod = 'get' . $entityContextUC . 'DocumentTypeObj';
            $documentTypeObj = $documentObj->$getMethod();
            $hasSettlement = ($documentTypeObj->getType() == 'RECEIPT');

            // Delete is not allowed when parent are stored in database and settlement is enabled,
            // because value are only correctly validated when object is saved from session to database
            // (comparing settlement whit payment).
            // So to delete entries cancel the receipt document and create another.
            if ($hasSettlement) {
                $this->responseConf['status'] = 0;
                $this->addFlashMessage(
                    'This transaction is closed.<br/>If you need to delete entries, please cancel the receipt and create another one.',
                    'Data not persisted',
                    'error'
                );
                return false;
            }

            // Check values consistence
            $errorMessage = null;
            if (($documentObj->getTotal() - $object->getValue()) <= 0) {
                $errorMessage = 'Document value should be greater than zero.';
            } elseif (
                ($documentObj->getTotal() - $documentObj->getRemainSettlement()) >
                ($documentObj->getTotal() - $object->getValue())
            ) {
                $errorMessage = (
                    'Document value should be greater than the settlement ('
                    . ($documentObj->getTotal() - $documentObj->getRemainSettlement())
                    . ').<br/> Otherwise you need to cancel the settlement before.'
                );
            }

            // Set error
            if ($errorMessage) {
                $this->responseConf['status'] = 0;
                $this->addFlashMessage(
                    ('Invalid total was detected.<br/>' . $errorMessage),
                    'Data not persisted',
                    'error'
                );
                return false;
            }
        }

        return true;
    }

    /**
     * Overrides parent method
     * @param $object
     * @return boolean (true to continue, false to abort)
     */
    protected function postDeleteObject($object)
    {
        return $this->postSaveObject($object);
    }

    /**
     * Set document totals
     * This function should be here, because receipt has its own method to det document totals (different of invoice, etc.)
     * @param $documentObj
     * @return mixed
     */
    function setDocumentTotals($documentObj) {
        // Check if there are no errors in previous updates
        if ($this->responseConf['status'] == 1) {
            $entityContextUC = $this->getEntityContext(true);
            $getMethod = 'get' . $entityContextUC . 'DocumentTypeObj';
            $hasSettlement = ($documentObj->$getMethod()->getType() == 'RECEIPT');

            switch ($this->flags['storage']) {
                case 'session':
                    // Totals for documentObj
                    $sumSubTotal = 0;

                    // Get detail objects
                    $detailObjects = $this->container->get('app.service.session_storage')->getChildObjects(
                        $documentObj->getId(),
                        $entityContextUC.'DocumentReceiptPayment'
                    );

                    // Calc totals
                    foreach ($detailObjects as $documentReceiptPaymentObj) {
                        $sumSubTotal += $documentReceiptPaymentObj->getValue();
                    }

                    // Update document object
                    $documentObj->setSubTotal($sumSubTotal);
                    $documentObj->setRemainSettlement($hasSettlement ? 0 : $sumSubTotal); // Settlement is a closes transaction does not have remain values
                    break;
                default:
                    // Update document totals
                    $this->getRepositoryService($entityContextUC.'DocumentReceiptPayment', 'AccountingBundle', 'Bck')
                        ->execute(
                            'setDocumentTotals',
                            array($documentObj)
                        );

                    // Update document remain settlement
                    if ($hasSettlement) {
                        $documentObj->setRemainSettlement(0); // Settlement is a closes transaction does not have remain values
                    } else {
                        $this->getRepositoryService($entityContextUC . 'DocumentReceiptSettlement', 'AccountingBundle', 'Bck')
                            ->execute(
                                'setDocumentRemainSettlement',
                                array($documentObj)
                            );
                    }
                    // Update object
                    $this->saveObject_static($this, $documentObj);
            }
        }

        return $this;
    }
}