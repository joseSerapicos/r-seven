<?php

namespace Bck\AccountingBundle\Controller;

use AppBundle\Controller\BaseEntityChildController;
use Sensio\Bundle\FrameworkExtraBundle\Configuration\Route;
use Symfony\Component\HttpFoundation\Request;

abstract class BaseDocumentInvoiceRectificationController extends BaseEntityChildController
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
     * [SET ROUTE HERE]
     *
     * Action to add objects
     * @param Request $request
     * @param $document
     * @return mixed
     */
    public function addAction(Request $request, $document)
    {
        $parents = array($document);

        // Set configuration
        $this->flags['hasForm'] = true;
        $this->init($request, $parents);

        // Get object
        $obj = $this->getObject();

        // Build form
        $form = $this->createForm($this->localConf['formTypeClass'], $obj);

        // Render Wizard
        return $this->render('BckAccountingBundle:BaseDocumentInvoiceRectification:add.html.twig', array(
            '_conf' => $this->templateConf,
            '_form' => $form->createView(),
            '_containers' => array(
                array(
                    'label' => 'Documents',
                ),
                array(
                    'label' => 'Preview',
                )
            )
        ));
    }

    /**
     * [SET ROUTE HERE]
     *
     * Action to add objects (step 1 submit)
     * @param Request $request
     * @param $document
     * @return mixed
     */
    public function addStep1SubmitAction(Request $request, $document)
    {
        $parents = array($document);

        // Set configuration
        $this->flags['hasForm'] = true;
        $this->flags['storage'] = 'session'; // Session storage is used until process is finished
        $this->init($request, $parents);

        $obj = null;

        // Process request
        $data = $this->getAndProcessRequestData($request);

        // Set options with "ids"
        $documentInvoiceId = ((!empty($data) && !empty($data['id']) && !empty($data['id'][0]))
            ? $data['id'][0]
            : null
        );

        // Get document obj
        $documentObj = $this->getParentConf()['obj'];

        if ($documentInvoiceId) {
            $options = (empty($data['id'])
                ? null
                : array('criteria' => array(array('field' => 'id', 'expr' => 'eq', 'value' => $data['id'])))
            );

            // Create object from booking service price
            $obj = $this->newObjectsFromInvoiceDocument($this, $documentObj, $options);
            $obj = reset($obj); // Ensure that only one object is used
        }

        if (empty($obj)) {
            $this->responseConf['status'] = 0;
            $this->addFlashMessage(
                ('Please select a valid choice.'),
                'Data not persisted',
                'error'
            );
            return $this->getResponse();
        }

        // Save object in session
        $localParent = $this->flags['parent'];
        // Unset parent, so this temporary object can be saved in session storage without
        // stay associated to parent object, otherwise when the paren is in session storage also, the object stays
        // immediately associated to parent even if it's form is canceled or closed!
        $this->flags['parent'] = null;
        $entityContextUC = $this->getEntityContext(true);
        $getMethod = ('get' . $entityContextUC . 'DocumentInvoiceDetailObj');
        $documentInvoiceDetailObj = $obj->$getMethod();
        $this->saveFormToSS($documentInvoiceDetailObj);
        $this->saveFormToSS($obj);
        $this->flags['parent'] = $localParent; // Reset to local parent

        // Update document totals
        BaseDocumentInvoiceDetailController::setDocumentTotals($this, $documentObj);

        // Configure response
        $this->responseConf['hasObject'] = true;
        $this->responseConf['object'] = $this->normalizeObject($obj); // Object updated

        return $this->getResponse();
    }

    /**
     * [DEFINE ROUTE HERE]
     *
     * Action to add objects (step 2)
     * @param Request $request
     * @param $document
     * @param $id
     * @return mixed
     */
    public function addStep2Action(Request $request, $document, $id)
    {
        $entityContextUC = $this->getEntityContext(true);

        $parents = array($document);

        // Set configuration
        $this->flags['hasForm'] = true;
        $this->init($request, $parents);
        $this->localConf['formTypeClass'] = 'Bck\AccountingBundle\Form\\'.$entityContextUC.'DocumentInvoiceRectificationAddStep2Type';
        $this->localConf['templates']['edit'] = 'BckAccountingBundle:BaseDocumentInvoiceRectification:add-step2.html.twig';

        return $this->editLocalChildAction($request, $document, $id);
    }

    /**
     * [SET ROUTE HERE]
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
        if (!$this->isInitialized) {
            $this->flags['hasForm'] = true;
            $this->init($request, $parents);
            $this->localConf['templates']['edit'] = 'BckAccountingBundle:BaseDocumentInvoiceRectification:edit.html.twig';
        }

        // Get storage after init, this storage is defined by parent when the parent object is getted
        $parentStorage = $this->flags['storage'];

        // Get object
        $obj = $this->getObject($id);

        $entityContextUC = $this->getEntityContext(true);
        $entityContext = $this->getEntityContext();
        $getMethod = ('get' . $entityContextUC . 'DocumentInvoiceDetailObj');
        $documentInvoiceDetailObj = $obj->$getMethod();

        // Save old total of object to validate the total of the document
        $formContext = $this->getObjectFormContext($obj);
        $oldTotal = (($formContext == 'add')
            ? 0 // Value is only in add (session storage), not really set yet, so this value is not yet in document totals
            : $documentInvoiceDetailObj->getTotal()
        );

        // Save old service to control VAT code changes
        $oldServiceObj = (empty($id)
            ? null
            : $documentInvoiceDetailObj->getServiceObj()
        );

        // Build form
        $form = $this->createForm($this->localConf['formTypeClass'], $obj);

        // Handle request
        $form->handleRequest($request);

        // Check if is submitted
        if($form->isSubmitted()) {
            if (!$this->validateForm($form)) {
                return $this->getResponse();
            }

            // Validate general object changes and set values.
            $data = $this->getRequestData($request);
            $data = $data['form'][$entityContext.'DocumentInvoiceDetailObj'];
            $data['oldValues'] = array('total' => $oldTotal, 'serviceObj' => $oldServiceObj);
            if (!$this->preSaveObject($obj, $data)) {
                return $this->getResponse();
            }

            // On this context we need to save object form session storage to data base
            $ssIdArr = null; // Session storage id, to restore them in case of error
            if ($parentStorage == 'db' && $this->flags['storage'] == 'session') {
                $ssIdArr = array(
                    'documentInvoiceDetail' => $documentInvoiceDetailObj->getId(),
                    'documentInvoiceRectification' => $obj->getId()
                );
                $this->flags['storage'] = 'db';
                $documentInvoiceDetailObj->setId(null);
                $obj->setId(null);
            } elseif ($this->flags['storage'] == 'session') { // Session does not persist automatically in cascade
                $this->saveObject($documentInvoiceDetailObj);
            }

            // Save object
            $this->saveForm($form, $obj);
            $this->postSaveObject($obj);

            if ($this->responseConf['status'] == 1) {
                $documentObj = $this->getParentConf()['obj'];
                BaseDocumentInvoiceDetailController::setDocumentTotals($this, $documentObj);

                // Remove objects from session storage
                if ($ssIdArr) {
                    // Remove objects from session
                    $this->deleteObjectFromSS($ssIdArr['documentInvoiceRectification']);
                }
            } elseif ($ssIdArr) {
                // Restore id to session storage objects
                $documentInvoiceDetailObj->setId($ssIdArr['documentInvoiceDetail']);
                $obj->setId($ssIdArr['documentInvoiceRectification']);
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
     * Overrides parent method
     * @param $object
     * @param $data (usually the form data)
     * @return bool
     */
    protected function preSaveObject(&$object, $data)
    {
        $entityContextUC = $this->getEntityContext(true);

        // Get DocumentInvoiceDetail object
        $getMethod = ('get' . $entityContextUC . 'DocumentInvoiceDetailObj');
        $documentInvoiceDetailObj = $object->$getMethod();
        $getMethod = ('get' . $entityContextUC . 'DocumentObj');
        $documentObj = $documentInvoiceDetailObj->$getMethod();

        // Check document acl
        if (!BaseDocumentController::validateDocumentAclByFormContext($this, $documentObj, 'edit')) {
            return false;
        }

        // Check values
        $getMethod = ('getRectification' . $entityContextUC . 'DocumentInvoiceDetailObj');
        $rectificationDocumentInvoiceDetailObj = $object->$getMethod();
        $defaultObject = $this->getObjectsBySearchForRectification(
            $this,
            array('criteria' => array(
                array('field' => 'id', 'expr' => 'eq', 'value' => $rectificationDocumentInvoiceDetailObj->getId())
            )),
            $object->getId()
        );
        $defaultObject = reset($defaultObject); // First element

        // Calc and validate values
        $priceService = $this->get('app.service.price');

        $vatCodeObj = $documentInvoiceDetailObj->getVatCodeObj();
        $vatCodePercentage = $vatCodeObj->getPercentage();
        $quantity = $documentInvoiceDetailObj->getQuantity();
        $value = $data['value'];
        $totalUnitDetail = $priceService->getTotalUnitDetail($value, $vatCodePercentage, false);
        $totalUnit = round($totalUnitDetail['value'] + $totalUnitDetail['vatValue'], 2);
        $total = $priceService->calcTotal($totalUnit, $quantity);

        // Check values
        $errorMessage = null;
        // Compare with rectification document value
        if ($priceService->isGreater($total, $defaultObject['notRectifiedValue'])) {
            $errorMessage = ($total.' Should be <= to the rectification document ('.$defaultObject['notRectifiedValue'].')');
        }
        // Remaining checks are made in "BaseDocumentInvoiceDetailController::validateFormAndSetTotals"

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

        return BaseDocumentInvoiceDetailController
            ::validateFormAndSetTotals($this, $documentInvoiceDetailObj, $this->getParentConf()['obj'], $data);
    }

    /**
     * [SET ROUTE HERE]
     *
     * Overrides parent method
     * @param Request $request
     * @param $document
     * @param $id
     * @return mixed
     */
    public function deleteLocalChildAction(Request $request, $document, $id)
    {
        $entityContextUC = $this->getEntityContext(true);

        // Set configuration
        $parents = array($document);
        $this->init($request, $parents);

        // Get document
        $obj = $this->getObject($id);
        $documentObj = $this->getParentConf()['obj'];

        // Verify general rules
        if (!$this->preDeleteObject($obj, null)) {
            return $this->getResponse();
        }

        // Get document invoice detail
        $getMethod = ('get' . $entityContextUC . 'DocumentInvoiceDetailObj');
        $documentInvoiceDetailObj = $obj->$getMethod();

        // Validate operation
        $errorMessage = null;
        if (($documentObj->getTotal() - $documentInvoiceDetailObj->getTotal()) <= 0) {
            $errorMessage = 'Document value should be greater than zero.';
        } elseif (($documentObj->getTotal() - $documentObj->getRemainSettlement()) > ($documentObj->getTotal() - $documentInvoiceDetailObj->getTotal())) {
            // Check if document settlement allow this operation (we need to keep the payment valid)
            $errorMessage = ('Document value should be greater than the settlement ('
                . ($documentObj->getTotal() - $documentObj->getRemainSettlement())
                . ').<br/> Otherwise you need to cancel the settlement before.'
            );
        }

        // Set error
        if ($errorMessage) {
            $this->responseConf['status'] = 0;
            $this->addFlashMessage(
                $errorMessage,
                'Data not persisted',
                'error'
            );
            return $this->getResponse();
        }

        // Delete
        $response = parent::deleteChildAction($request, $parents, $id);

        // Delete cascade manually for session storage
        // (because DocumentInvoiceDetail has Document as parent instead of DocumentInvoiceRectification,
        // so DocumentInvoiceRectification has no children and DocumentInvoiceDetail is not automatically deleted)
        if ($this->responseConf['status'] == 1) {
            if ($this->flags['storage'] == 'session') {
                parent::deleteObjectFromSS($documentInvoiceDetailObj->getId());
            }

            BaseDocumentInvoiceDetailController::setDocumentTotals($this, $documentObj);
        }

        return $response;
    }

    /**
     * Overrides parent method
     * @param $object
     * @param $context (context to help to determine actions)
     * @return boolean (true to continue, false to abort)
     */
    protected function preDeleteObject($object, $context = null)
    {
        $documentObj = $this->getParentConf()['obj'];

        if (!BaseDocumentController::validateDocumentAclByFormContext($this, $documentObj, 'edit')) {
            return false;
        }

        return true;
    }

    /**
     * New objects form invoice document
     * @param $controller
     * @param $documentObj
     * @param $options
     * @return array
     */
    static function newObjectsFromInvoiceDocument($controller, $documentObj, $options)
    {
        $entityContextUC = $controller->getEntityContext(true);

        // Get objects
        $invoiceDocumentArr = self::getObjectsBySearchForRectification($controller, $options);

        $objectArr = array();
        foreach ($invoiceDocumentArr as &$invoiceDocument) {
            // Get object
            $rectificationDocumentInvoiceDetailObj = $controller->getRepositoryService($entityContextUC.'DocumentInvoiceDetail', 'AccountingBundle', 'Bck')
                ->execute(
                    'findOneById',
                    array($invoiceDocument['id'])
                );

            if (empty($rectificationDocumentInvoiceDetailObj)) {
                continue;
            }

            // Create e new object
            // Document invoice rectification
            $className = 'Bck\AccountingBundle\Entity\\' . $entityContextUC . 'DocumentInvoiceRectification';
            $documentInvoiceRectificationObj = new $className();
            $controller->setObjectDefaultValues_static($controller, $documentInvoiceRectificationObj);
            $className = 'Bck\AccountingBundle\Entity\\' . $entityContextUC . 'DocumentInvoiceDetail';
            $documentInvoiceDetailObj = new $className();
            $controller->setObjectDefaultValues_static($controller, $documentInvoiceDetailObj);
            $setMethod = 'set' . $entityContextUC . 'DocumentInvoiceDetailObj';
            $documentInvoiceRectificationObj->$setMethod($documentInvoiceDetailObj);
            $setMethod = 'setRectification' . $entityContextUC . 'DocumentInvoiceDetailObj';
            $documentInvoiceRectificationObj->$setMethod($rectificationDocumentInvoiceDetailObj);

            // Document invoice detail
            $setMethod = 'set' . $entityContextUC . 'DocumentObj';
            $documentInvoiceDetailObj->$setMethod($documentObj);

            $fieldArr = array('ServiceObj', 'Description', 'VatCodeObj', 'BookingServicePriceObj');
            foreach ($fieldArr as $field) {
                $getMethod = ('get' . $field);
                $setMethod = ('set' . $field);
                $documentInvoiceDetailObj->$setMethod($rectificationDocumentInvoiceDetailObj->$getMethod());
            }
            $fieldArr = array('quantity', 'value', 'vatValue', 'subTotal', 'totalVat');
            foreach ($fieldArr as $field) {
                $setMethod = ('set' . ucfirst($field));
                $documentInvoiceDetailObj->$setMethod($invoiceDocument[$field]);
            }

            $objectArr[] = $documentInvoiceRectificationObj;
        }

        return $objectArr;
    }


    ////////////////////////////////////////////////////
    // METHODS TO HANDLE WITH RECTIFICATION FORMS (BASED ON REMAIN RECTIFICATION)
    /////////////////////////////////////////////////////////////////////////////////////////////////////////

    /**
     * Initialization for rectification context
     * @param Request $request
     * @param $parents
     * @param $booking (booking id, to filter by booking)
     * @return $this
     */
    protected function initForRectification(Request $request, $parents, $booking = null)
    {
        // Set configuration only once
        if($this->isInitialized) { return $this; }

        $entityContext = $this->getEntityContext();

        $this->init($request, $parents);

        // Local conf
        array_pop($this->localConf['search']['criteria']); // Remove last criteria (the parent filter)

        // Actions
        $this->templateConf['actions'] = array(
            'search' => false,
            'checkAll' => true
        );

        // Legend (disable cancel legend)
        $this->templateConf['controls']['legend'] = array();

        // Route
        $this->templateConf['route'] = array(
            'get' => $this->templateConf['route']['getForRectification']
        );

        // Fields
        $this->templateConf['fields'] = array_merge(
            $this->templateConf['fields'],
            array(
                'view' => array(
                    'documentType_name', 'document_code', 'document_date', 'document_dueDate',
                    'service_name', 'description', 'total'
                ),
                'form' => array()
            )
        );

        // Search
        $this->templateConf['search'] = array_merge(
            $this->templateConf['search'],
            array(
                'fields' => array(),
                'criteria' => array()
            )
        );

        // Tree-view
        $this->flags['treeViewMode'] = true;
        $this->templateConf['treeView'] = array(
            'iconField' => 'service_icon',
            'localParentField' => $entityContext.'DocumentObj', // User by TreeViewDataService
            'parentTargetField' => $entityContext.'DocumentObj'
        );

        if ($booking) {
            // Update routing for booking
            $this->templateConf['route']['get']['url' ] .= '/'.$booking;

            // Filter by booking
            $this->localConf['search']['conf'] = array('localData' => array('booking' => array(
                'id' => $booking,
                'repositoryService' => $this->getLocalRepositoryService()
            )));
        }

        return $this;
    }

    /**
     * [SET ROUTE HERE]
     *
     * Get For Rectification (get objects to form)
     * @param Request $request
     * @param $document
     * @param $booking (booking id, to filter by booking)
     * @return mixed
     */
    public function getForRectificationAction(Request $request, $document, $booking = null)
    {
        // Set configuration
        $this->initForRectification($request, array($document), $booking);

        // Process request
        $this->getAndProcessRequestData($request);

        $objects = self::getObjectsBySearchForRectification($this);

        // Config response
        $this->responseConf['hasObjects'] = true;
        $this->responseConf['objects'] = $objects;

        return $this->getResponse();
    }

    /**
     * [SET ROUTE HERE]
     *
     * Get data for rectification form
     * @param Request $request
     * @param $document
     * @param $booking (booking id, to filter by booking)
     * @return mixed
     */
    public function dataForRectificationAction(Request $request, $document, $booking = null)
    {
        // Set configuration
        $this->initForRectification($request, array($document), $booking);

        $objectsArr = self::getObjectsBySearchForRectification($this);

        // Config response
        $this->responseConf['hasConf'] = true;
        $this->responseConf['hasObjects'] = true;
        $this->responseConf['objects'] = $objectsArr;

        return $this->getResponse();
    }

    /**
     * Get Objects by search for Rectification
     * @param $controller
     * @param $options
     * @param $excludeRectificationId
     * @return array
     */
    static function getObjectsBySearchForRectification($controller, $options = array(), $excludeRectificationId = null)
    {
        $entityContextUC = $controller->getEntityContext(true);

        // Set options only if it's not defined. If options are defined, id's are provided in criteria,
        // so we do not need to add any more information (including in criteria)
        $hasOptionsByParam = (!empty($options));
        $documentObj = null; // To set criteria by entity id and by document type operation

        if (!$hasOptionsByParam) {
            $options = $controller->getSearch();

            if (!empty($options['limit'])) { // Pagination enabled
                $options['limit']++; // Used to control the pagination
            }

            $documentObj = $controller->getParentConf()['obj'];
        }

        $objects = $controller->getRepositoryService($entityContextUC.'DocumentInvoiceDetail', 'AccountingBundle', 'Bck')
            ->execute(
                'getRemainRectification',
                array($options, $documentObj, $excludeRectificationId)
            );

        if (!$hasOptionsByParam) {
            if (!empty($options['limit'])) { // Pagination enabled
                $controller->templateConf['search']['hasMore'] = (count($objects) == $options['limit']);
                if ($controller->templateConf['search']['hasMore']) {
                    // Remove the last row, it's only to control the pagination
                    array_pop($objects);
                }
            }
        }

        // Set values
        $priceService = $controller->get('app.service.price');
        foreach ($objects as &$obj) {
            // Check if this entry has previous rectifications
            if (!$priceService->isEqual($obj['notRectifiedValue'], $obj['total'])) {
                // This entry has already rectifications associated, so we need to determine the individual values
                // from the total not rectified value

                // Normalize quantity (can be returned a negative value)
                $obj['quantity'] = (($obj['notRectifiedQuantity'] > 0) ? $obj['notRectifiedQuantity'] : 1);

                $totalUnitValue = $priceService->calcUnitFromTotal($obj['notRectifiedValue'], $obj['quantity']);
                $totalUnitValueDetail = $priceService->getTotalUnitDetail($totalUnitValue, $obj['vatCode_percentage'], true);
                $obj['value'] = $totalUnitValueDetail['value'];
                $obj['vatValue'] = $totalUnitValueDetail['vatValue'];
            }

            $obj['totalUnit'] = round($obj['value'] + $obj['vatValue'], 2);
            $obj['totalVat'] = $priceService->calcTotal($obj['vatValue'], $obj['quantity']);
            // Do not use "subTotal" nor "totalVat" to get the "total", because this values are already rounded,
            // and in some cases the sum of 2 rounded values cause inquiries.
            // Before multiply round the sum to get a coherent total unit value
            $obj['total'] = $priceService->calcTotal($obj['totalUnit'], $obj['quantity']);
            // Sub total is determined in this way, because in some cases the sum of "subTotal" and "totalVat"
            // rounded does not match with the correct total, given that this values are rounded to 2 decimals
            // and lost precision, so in this way we keep the calculus with coherence giving preference to keep
            // "totalVat" untouched (legal values).
            $obj['subTotal'] = round($obj['total'] - $obj['totalVat'], 2);
        }

        // Tree view mode
        if (isset($controller->templateConf['treeView'])
            && isset($controller->templateConf['treeView']['localParentField'])
            && isset($controller->flags['treeViewMode']) && $controller->flags['treeViewMode']
        ) {
            return $controller->normalizeTreeViewObjectsForRectification($objects);
        }

        return $objects;
    }

    /**
     * Normalize Tree-View Objects for Rectification
     * @param $objectsArr
     * @return array
     */
    protected function normalizeTreeViewObjectsForRectification($objectsArr)
    {
        // Normalize to tree view format
        $nodes = array(); // Zero for parents (document head)
        $parentNode = null;
        if (is_array($objectsArr) && (count($objectsArr) > 0)) {
            $entityContextUC = $this->getEntityContext(true);
            $entityContext = $this->getEntityContext();

            foreach ($objectsArr as &$obj) {
                // Add parent
                if ($parentNode != $obj[$entityContext.'DocumentObj']) {
                    $parentNode = $obj[$entityContext.'DocumentObj'];

                    $documentObj = $this->getRepositoryService($entityContextUC.'Document', 'AccountingBundle', 'Bck')
                        ->execute(
                            'findOneById',
                            array($parentNode)
                        );

                    $getMethod = ('get' . $entityContextUC . 'DocumentTypeObj');
                    $nodes[0][] = array(
                        'id' => null, // No id to avoid check this entry
                        ($entityContext.'DocumentObj') => 'P-'.$parentNode, // Parent target for child field
                        'service_icon' => null,
                        'name' => ($documentObj->$getMethod()->getName() . ' ' . $documentObj->getCode()
                            . ' | ' . $documentObj->normalizeDate($documentObj->getDate())
                            . ' | Total: ' . $documentObj->getTotal()
                        ),
                    );
                }

                $obj[$entityContext.'DocumentObj'] = null;
                $obj['name'] = (
                    $obj['service_name']
                    . ' | ' . $obj['description']
                    . ' | Total: ' . $obj['total']
                );

                $nodes['P-'.$parentNode][] = $obj;
            }
        }

        return $nodes;
    }
}