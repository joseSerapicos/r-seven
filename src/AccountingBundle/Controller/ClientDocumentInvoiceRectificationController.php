<?php

namespace AccountingBundle\Controller;

use AccountingBundle\Entity\ClientDocumentInvoiceDetail;
use AccountingBundle\Entity\ClientDocumentInvoiceRectification;
use AppBundle\Controller\BaseEntityChildController;
use AppBundle\Controller\BaseEntityController;
use BookingBundle\Controller\TravelBookingClientDocumentInvoiceDetailController;
use Sensio\Bundle\FrameworkExtraBundle\Configuration\Route;
use Symfony\Component\HttpFoundation\Request;

class ClientDocumentInvoiceRectificationController extends BaseEntityChildController
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
                'name' => '_accounting__client_document_invoice_rectification__get'
            ),
            'getRemainRectification' => array(
                'name' => '_accounting__client_document_invoice_rectification__get_remain_rectification'
            ),
            'add' => array(
                'name' => '_accounting__client_document_invoice_rectification__add',
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
            'originalClientDocument_code', 'originalClientDocumentType_name'
        );
        // Empty criteria to be able to see all registers because "search" action is disabled.
        $this->templateConf['search']['criteria'] = array();

        // Tree-view
        $this->templateConf['treeView'] = array(
            'iconField' => 'service_icon',
            'localParentField' => 'clientDocumentObj', // User by TreeViewDataService
            'parentTargetField' => 'clientDocumentObj',
            'form' => array(
                'actions' => array(
                    'search' => true,
                    'checkAll' => true
                ),
                'route' => array(
                    'get' => $this->templateConf['route']['getRemainRectification'],
                    'add' => $this->templateConf['route']['add']
                ),
                'fields' => array_merge(
                    $this->templateConf['fields'],
                    array(
                        'view' => array(
                            'service_name', 'description', 'total', 'clientDocument_code', 'clientDocumentType_name',
                            'clientDocument_date', 'clientDocument_dueDate'
                        ),
                        'form' => array()
                    )
                ),
                'search' => array_merge(
                    $this->templateConf['search'],
                    array(
                        'fields' => array(),
                        'criteria' => array()
                    )
                )
            )
        );
        unset($this->templateConf['route']['getRemainRectification']);

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
     * @Route("/accounting/client-document-invoice-rectification/get-remain-rectification/{clientDocument}",
     *     name="_accounting__client_document_invoice_rectification__get_remain_rectification"
     * )
     *
     * Get Remain Rectification (get objects to form)
     * @param Request $request
     * @param $clientDocument
     * @return mixed
     */
    public function getRemainRectificationAction(Request $request, $clientDocument)
    {
        // Set configuration
        $this->initChild($request, array($clientDocument));

        // Process request
        $this->getAndProcessRequestData($request);

        $clientDocumentObj = $this->getParentConf()['obj'];

        // Criteria
        $options = $this->getSearch();
        array_pop($options['criteria']); // Remove last criteria (the parent filter)
        // Pagination
        if (!empty($options['limit'])) { // Pagination enabled
            $options['limit']++; // Used to control the pagination
        }

        $objects = $this->getObjectsForRectificationBySearch($this, $clientDocumentObj, $options, null, false);

        // Pagination
        if (!empty($options['limit'])) { // Pagination enabled
            $this->templateConf['search']['hasMore'] = (count($objects) == $options['limit']);
            if ($this->templateConf['search']['hasMore']) {
                // Remove the last row, it's only to control the pagination
                array_pop($objects);
            }
        }

        $objects = $this->normalizeTreeViewObjectsForRectification($this, $objects);

        // Config response
        $this->responseConf['hasObjects'] = true;
        $this->responseConf['objects'] = $objects;

        return $this->getResponse(true);
    }

    /**
     * @Route("/accounting/client-document-invoice-rectification/add/{clientDocument}",
     *     name="_accounting__client_document_invoice_rectification__add"
     * )
     *
     * Add object
     * @param Request $request
     * @param $clientDocument
     * @return mixed
     */
    public function addAction(Request $request, $clientDocument)
    {
        $parents = array($clientDocument);

        // Set configuration
        $this->initChild($request, $parents);

        $data = $this->getAndProcessRequestData($request);

        // Set options with "ids"
        $options = ((empty($data['data']['id']) || !is_array($data['data']['id']))
            ? null
            : array('criteria' => array(array('field' => 'id', 'expr' => 'in', 'value' => $data['data']['id'])))
        );

        $documentObj = $this->getParentConf()['obj'];
        self::addObjects($this, $documentObj, $options);

        // Save in database all persisted objects
        if ($this->flags['storage'] == 'db') {
            $this->flushEm();

            // Config response
            if ($this->responseConf['status'] === 1) {
                // Update document totals after flush to db detail lines
                TravelBookingClientDocumentInvoiceDetailController::setDocumentTotals($this, $documentObj);

                if ($this->responseConf['status'] === 1) {
                    // Flash messages to display to user
                    $this->addFlashMessage(
                        'The data has been updated',
                        'Success',
                        'success'
                    );
                }
            }
        }

        return $this->getResponse(true);
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
        $parents = array($clientDocument);

        // Set configuration
        $this->flags['hasForm'] = true;
        $this->initChild($request, $parents);

        // Get object
        $obj = $this->getObject($id);

        // Save old total of object to validate the total of the document
        $odlTotal = (empty($id)
            ? 0
            : $obj->getClientDocumentInvoiceDetailObj()->getTotal()
        );

        // Build form
        $form = $this->buildForm($request, $obj);

        // Handle request
        $form->handleRequest($request);

        // Check if is submitted
        if($form->isSubmitted()) {
            if (!$this->validateForm($form)) {
                return $this->getResponse(true);
            }

            // Get DocumentObj
            $documentInvoiceDetailObj = $obj->getClientDocumentInvoiceDetailObj();
            $originalDocumentInvoiceDetailObj = $obj->getOriginalClientDocumentInvoiceDetailObj();
            $defaultObject = $this->getObjectsForRectificationBySearch(
                $this,
                $documentInvoiceDetailObj->getClientDocumentObj(),
                array('criteria' => array(
                    array('field' => 'id', 'expr' => 'eq', 'value' => $originalDocumentInvoiceDetailObj->getId())
                    )),
                $obj->getId(),
                false
            );
            $defaultObject = reset($defaultObject); // First element

            $data = $this->getRequestData($request);
            $submittedData = $data['form']['clientDocumentInvoiceDetailObj'];

            $priceService = $this->get('app.service.price');

            $vatCodeObj = $documentInvoiceDetailObj->getVatCodeObj();
            $vatCodePercentage = $vatCodeObj->getPercentage();
            $quantity = $documentInvoiceDetailObj->getQuantity();
            $user_value = $submittedData['user_value'];
            $isVatIncluded = (!empty($submittedData['isVatIncluded']));
            $splitTotalUnit = $priceService->splitTotalUnit($user_value, $vatCodePercentage, $isVatIncluded);
            $totalUnit = round($splitTotalUnit['value'] + $splitTotalUnit['vatValue'], 2);
            $totalVat = $priceService->calcTotal($splitTotalUnit['vatValue'], $quantity);
            // Do not use "subTotal" nor "totalVat" to get the "total", because this values are already rounded,
            // and in some cases the sum of 2 rounded values cause inquiries.
            // Before multiply round the sum to get a coherent total unit value
            $total = $priceService->calcTotal($totalUnit, $quantity);
            // Sub total is determined in this way, because in some cases the sum of "subTotal" and "totalVat"
            // rounded does not match with the correct total, given that this values are rounded to 2 decimals
            // and lost precision, so in this way we keep the calculus with coherence giving preference to keep
            // "totalVat" untouched (legal values).
            $subTotal = round($total - $totalVat, 2);

            // Check totals (if totals are right,
            // we assume that unit values that are used to calc the totals are also right, so does not be checked)
            $errorMessage = null;
            $documentObj = $this->getParentConf()['obj'];
            if (($documentObj->getTotal() - $odlTotal + $total) <= 0) {
                $errorMessage = 'Document value should be greater than zero.';
            } elseif (($documentObj->getTotal() - $documentObj->getRemainSettlement()) > ($documentObj->getTotal() - $odlTotal + $total)) {
                echo($documentObj->getRemainSettlement());
                $errorMessage = (
                    'Document value should be greater than the settlement ('
                    . ($documentObj->getTotal() - $documentObj->getRemainSettlement())
                    . ').<br/> Otherwise you need to cancel the settlement before.'
                );
            } elseif (!$priceService->isEqual($submittedData['subTotal'], $subTotal)) {
                $errorMessage = ($submittedData['subTotal'].' Does not match with '.$subTotal);
            } elseif (!$priceService->isEqual($submittedData['totalVat'], $totalVat)) {
                $errorMessage = ($submittedData['totalVat'].' Does not match with '.$totalVat);
            } elseif (!$priceService->isEqual($submittedData['total'], $total)) {
                $errorMessage = ($submittedData['total'].' Does not match with '.$total);
            } elseif ($priceService->isGreater($total, $defaultObject['notRectifiedValue'])) {
                $errorMessage = ($total.' Should be < or equal to the original document ('.$defaultObject['notRectifiedValue'].')');
            }
            if ($errorMessage) {
                $this->responseConf['status'] = 0;
                $this->addFlashMessage(
                    ('Invalid total was detected.<br/>' . $errorMessage),
                    'Data not persisted',
                    'error'
                );
                return $this->getResponse(true);
            }

            // Set values and save
            $documentInvoiceDetailObj->setValue($splitTotalUnit['value']);
            $documentInvoiceDetailObj->setVatValue($splitTotalUnit['vatValue']);
            $documentInvoiceDetailObj->setSubTotal($subTotal);
            $documentInvoiceDetailObj->setTotalVat($totalVat);
            $this->saveForm($form, $obj);

            if ($this->responseConf['status'] == 1) {
                TravelBookingClientDocumentInvoiceDetailController::setDocumentTotals($this, $documentObj);
            }

            return $this->getResponse(true);
        }

        // Render form
        return $this->render('AccountingBundle:BaseDocumentInvoiceRectification:edit.html.twig', array(
            '_conf' => $this->templateConf,
            '_form' => $form->createView()
        ));
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
        // Set configuration
        $parents = array($clientDocument);
        $this->initChild($request, $parents);

        // Get objects
        $obj = $this->getObject($id);
        $documentObj = $this->getParentConf()['obj'];

        // Validate operation
        $errorMessage = null;
        if (($documentObj->getTotal() - $obj->getClientDocumentInvoiceDetailObj()->getTotal()) <= 0) {
            $errorMessage = 'Document value should be greater than zero.';
        } elseif (($documentObj->getTotal() - $documentObj->getRemainSettlement()) > ($documentObj->getTotal() - $obj->getClientDocumentInvoiceDetailObj()->getTotal())) {
            // Check if document settlement allow this operation (we need to keep the payment valid)
            $errorMessage = ('Document value should be greater than the settlement ('
                . ($documentObj->getTotal() - $documentObj->getRemainSettlement())
                . ').<br/> Otherwise you need to cancel the settlement before.'
            );
        }
        if ($errorMessage) {
            $this->responseConf['status'] = 0;
            $this->addFlashMessage(
                $errorMessage,
                'Data not persisted',
                'error'
            );
            return $this->getResponse(true);
        }

        // Delete
        $response = parent::deleteChildAction($request, $parents, $id);

        // Delete cascade manually for session storage
        // (because DocumentInvoiceDetail has Document as parent instead of DocumentInvoiceRectification,
        // so DocumentInvoiceRectification has no children and DocumentInvoiceDetail is not automatically deleted)
        if (($this->flags['storage'] == 'session') && ($this->responseConf['status'] == 1)) {
            parent::deleteAction($request, $obj->getClientDocumentInvoiceDetailObj()->getId());
        }

        if ($this->responseConf['status'] == 1) {
            TravelBookingClientDocumentInvoiceDetailController::setDocumentTotals($this, $documentObj);
        }

        return $response;
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
     * @Route("/accounting/client-document-invoice-rectification/data-for-rectification/{clientDocument}",
     *     name="_accounting__client_document_invoice_rectification__data_for_rectification"
     * )
     *
     * Get data for rectification form
     * @param Request $request
     * @param $clientDocument
     * @return mixed
     */
    public function dataForRectification(Request $request, $clientDocument)
    {
        // Set configuration
        $this->initChild($request, array($clientDocument));
        $this->templateConf = array_merge(
            $this->templateConf,
            $this->templateConf['treeView']['form']
        );
        unset($this->templateConf['actions']['search']);
        $this->templateConf['actions']['refresh'] = false;

        $objects = self::getObjectsForRectificationBySearch($this, $this->getParentConf()['obj']);

        // Config response
        $this->responseConf['hasConf'] = true;
        $this->responseConf['hasObjects'] = true;
        $this->responseConf['objects'] = $objects;
        return $this->getResponse(true);
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

    /**
     * Get Objects for Rectification
     * @param $controller
     * @param $clientDocumentObj
     * @param $options
     * @param $isTreeViewFormat (defines if tree viw format must be used in returned objects)
     * @param $excludeRectificationId
     * @return array
     */
    static function getObjectsForRectificationBySearch($controller, $clientDocumentObj, $options = array(), $excludeRectificationId = null, $isTreeViewFormat = true)
    {
        $operation = $clientDocumentObj->getClientDocumentTypeObj()->getOperation();
        $operation = (($operation == 'DEBIT') ? 'CREDIT': 'DEBIT'); // Get inverse operation
        $travelBookingObj = $controller->getRepositoryService('TravelBookingClientDocument', 'BookingBundle')
            ->execute(
                'findOneByClientDocumentObj',
                array($clientDocumentObj)
            );
        $travelBookingId = (empty($travelBookingObj) ? null : $travelBookingObj->getId());

        $bookingObj = null;
        if ($travelBookingId) {
            $bookingObj = $controller->getRepositoryService('TravelBooking', 'BookingBundle')
                ->execute(
                    'findOneById',
                    array($travelBookingId)
                );
        }

        $objectsArr = $controller->getRepositoryService('ClientDocumentInvoiceDetail', 'AccountingBundle')
            ->execute(
                'getRemainRectification',
                array($operation, $clientDocumentObj, $options, $bookingObj, $excludeRectificationId)
            );

        // Set values
        $priceService = $controller->get('app.service.price');
        foreach ($objectsArr as &$obj) {
            // Normalize quantity (can be returned a negative value)
            $obj['quantity'] = (($obj['notRectifiedQuantity'] > 0) ? $obj['notRectifiedQuantity'] : 1);
            $totalUnitValue = $priceService->calcUnitFromTotal($obj['notRectifiedValue'], $obj['quantity']);
            $values = $priceService->splitTotalUnit($totalUnitValue, $obj['vatCode_percentage'], true);
            $obj['value'] = $values['value'];
            $obj['vatValue'] = $values['vatValue'];
            $obj['totalUnit'] = round($obj['value'] + $obj['vatValue'], 2);
            $obj['totalVat'] = $priceService->calcTotal($values['vatValue'], $obj['quantity']);
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


        // Return raw objects
        if ($isTreeViewFormat) {
            return self::normalizeTreeViewObjectsForRectification($controller, $objectsArr);
        }

        return $objectsArr;
    }

    /**
     * Normalize Tree-View Objects for Rectification
     * @param $controller
     * @param $objectsArr
     * @return array
     */
    static function normalizeTreeViewObjectsForRectification($controller, $objectsArr)
    {
        // Normalize to tree view format
        $nodes = array(); // Zero for parents (document head)
        $parentNode = null;
        if (is_array($objectsArr) && (count($objectsArr) > 0)) {
            foreach ($objectsArr as &$obj) {
                $nodeIndex = $obj['clientDocumentObj'];

                // Add parent
                if ($parentNode != $nodeIndex) {
                    $parentNode = $nodeIndex;

                    $documentObj = $controller->getRepositoryService('ClientDocument', 'AccountingBundle')
                        ->execute(
                            'findOneById',
                            array($parentNode)
                        );

                    $nodes[0][] = array(
                        'id' => null, // No id to avoid check this entry
                        'clientDocumentObj' => 'P-'.$parentNode, // Parent target for child field
                        'service_icon' => null,
                        'name' => ($documentObj->getClientDocumentTypeObj()->getName() . ' ' . $documentObj->getCode()
                            . ' | ' . $documentObj->normalizeDate($documentObj->getDate())
                            . ' | Total: ' . $documentObj->getTotal()
                        ),
                    );
                }

                $obj['clientDocumentObj'] = null;
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

    /**
     * Add objects
     * @param $controller
     * @param $documentObj
     * @param $options
     * @return $this
     */
    static function addObjects($controller, $documentObj, $options)
    {
        // Set object detail
        if ($options) {
            // Get objects
            $objects = self::getObjectsForRectificationBySearch(
                $controller, $documentObj, $options, null, false
            );

            foreach ($objects as $obj) {
                // Get object
                $originalDocumentInvoiceDetailObj = $controller->getRepositoryService('ClientDocumentInvoiceDetail', 'AccountingBundle')
                    ->execute(
                        'findOneById',
                        array($obj['id'])
                    );

                if (empty($originalDocumentInvoiceDetailObj)) {
                    continue;
                }

                // Create e new object
                // Document invoice rectification
                $documentInvoiceRectificationObj = new ClientDocumentInvoiceRectification();
                BaseEntityController::setObjectDefaultValues_static($controller, $documentInvoiceRectificationObj);
                $documentInvoiceDetailObj = new ClientDocumentInvoiceDetail();
                BaseEntityController::setObjectDefaultValues_static($controller, $documentInvoiceDetailObj);
                $documentInvoiceRectificationObj->setClientDocumentInvoiceDetailObj($documentInvoiceDetailObj);
                $documentInvoiceRectificationObj->setOriginalClientDocumentInvoiceDetailObj($originalDocumentInvoiceDetailObj);

                // Document invoice detail
                $documentInvoiceDetailObj->setClientDocumentObj($documentObj);

                $fieldArr = array('ServiceObj', 'Description', 'VatCodeObj');
                foreach ($fieldArr as $field) {
                    $getMethod = ('get' . $field);
                    $setMethod = ('set' . $field);
                    $documentInvoiceDetailObj->$setMethod($originalDocumentInvoiceDetailObj->$getMethod());
                }
                $fieldArr = array('quantity', 'value', 'vatValue', 'subTotal', 'totalVat');
                foreach ($fieldArr as $field) {
                    $setMethod = ('set' . ucfirst($field));
                    $documentInvoiceDetailObj->$setMethod($obj[$field]);
                }

                // Save object in session
                // Set the parent for DocumentInvoiceDetail objects
                $localParent = $controller->flags['parent'];
                $controller->flags['parent'] = $documentObj->getId();
                BaseEntityController::saveObject_static($controller, $documentInvoiceDetailObj, false);
                BaseEntityController::saveObject_static($controller, $documentInvoiceRectificationObj, false);
                $controller->flags['parent'] = $localParent; // Reset to local parent
            }

            // Update document totals
            TravelBookingClientDocumentInvoiceDetailController::setDocumentTotals($controller, $documentObj);
        }

        return $controller;
    }
}