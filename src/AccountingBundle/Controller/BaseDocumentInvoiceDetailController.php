<?php

namespace AccountingBundle\Controller;

use AppBundle\Controller\BaseEntityChildController;
use AppBundle\Controller\BaseEntityController;
use BookingBundle\Controller\BaseBookingServicePriceController;
use Sensio\Bundle\FrameworkExtraBundle\Configuration\Route;
use Symfony\Component\HttpFoundation\Request;

abstract class BaseDocumentInvoiceDetailController extends BaseEntityChildController
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
        $this->initChild($request, $parents);

        // Get object
        $obj = $this->getObject();

        // Build form
        $form = $this->createForm($this->localConf['formTypeClass'], $obj);

        // Render Wizard
        return $this->render('AccountingBundle:BaseDocumentInvoiceDetail:add.html.twig', array(
            '_conf' => $this->templateConf,
            '_form' => $form->createView(),
            '_containers' => array(
                array(
                    'label' => 'Booking Service',
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
        $this->initChild($request, $parents);

        $obj = null;

        // Process request
        $data = $this->getAndProcessRequestData($request);

        // Set options with "ids"
        $bookingServicePriceId = ((!empty($data['data']) && !empty($data['data']['id']) && !empty($data['data']['id'][0]))
            ? $data['data']['id'][0]
            : null
        );

        if ($bookingServicePriceId) {
            // Get document obj
            $documentObj = $this->getParentConf()['obj'];

            $options = (empty($data['data']['id'])
                ? null
                : array('criteria' => array(array('field' => 'id', 'expr' => 'eq', 'value' => $data['data']['id'])))
            );

            // Create object from booking service price
            $obj = $this->newObjectsFromBookingServicePrice($this, $documentObj, $options);
            $obj = reset($obj); // Ensure that only one object is used
        }

        if (empty($obj)) {
            $obj = $this->getObject(); // Create a new object
        }

        // Save object in session
        $localParent = $this->flags['parent'];
        // Unset parent, so this temporary object can be saved in session storage without
        // stay associated to parent object, otherwise when the paren is in session storage also, the object stays
        // immediately associated to parent even if it's form is canceled or closed!
        $this->flags['parent'] = null;
        $this->saveFormToSS($obj);
        $this->flags['parent'] = $localParent; // Reset to local parent

        // Configure response
        $this->responseConf['hasObject'] = true;
        $this->responseConf['object'] = $this->normalizeObject($obj); // Object updated

        return $this->getResponse(true);
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
        $this->initChild($request, $parents);
        $this->localConf['formTypeClass'] = 'AccountingBundle\Form\\'.$entityContextUC.'DocumentInvoiceDetailAddStep2Type';
        $this->localConf['templates']['edit'] = 'AccountingBundle:BaseDocumentInvoiceDetail:addStep2.html.twig';

        return $this->editLocalChildAction($request, $document, $id);
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
        if (!$this->isInitialized) {
            $this->flags['hasForm'] = true;
            $this->initChild($request, $parents);
            $this->localConf['templates']['edit'] = 'AccountingBundle:BaseDocumentInvoiceDetail:edit.html.twig';
        }

        // Get storage after init, this storage is defined by parent when the parent object is getted
        $parentStorage = $this->flags['storage'];

        // Get object
        $obj = $this->getObject($id);

        // Save old total of object to validate the total of the document
        $formContext = $this->getObjectFormContext($obj);
        $oldTotal = (($formContext == 'add')
            ? 0 // Value is only in add (session storage), not really set yet, so this value is not yet in document totals
            : $obj->getTotal()
        );

        // Save old service to control VAT code changes
        $oldServiceObj = (empty($id)
            ? null
            : $obj->getServiceObj()
        );

        // Build form
        $form = $this->createForm($this->localConf['formTypeClass'], $obj);

        // Handle request
        $form->handleRequest($request);

        // Check if is submitted
        if($form->isSubmitted()) {
            if (!$this->validateForm($form)) {
                return $this->getResponse(true);
            }

            // If BookingServicePriceObj is defined, use its serviceObj
            if ($obj->getBookingServicePriceObj()) {
                $newServiceObj = $obj->getBookingServicePriceObj()->getBookingServiceObj()->getServiceObj();
                $obj->setServiceObj($newServiceObj);
            }

            // Validate general object changes and set values.
            $data = $this->getRequestData($request);
            $data = $data['form'];
            $data['oldValues'] = array('total' => $oldTotal, 'serviceObj' => $oldServiceObj);
            if (!$this->preSaveObject($obj, $data)) {
                return $this->getResponse(true);
            }

            // On this context we need to save object form session storage to data base
            $ssIdArr = null; // Session storage id, to restore them in case of error
            if ($parentStorage == 'db' && $this->flags['storage'] == 'session') {
                $ssIdArr = array(
                    'documentInvoiceDetail' => $obj->getId()
                );
                $this->flags['storage'] = 'db';
                $obj->setId(null);
            }

            // Save object
            $this->saveForm($form, $obj);
            $this->postSaveObject($obj);

            if ($this->responseConf['status'] == 1) {
                $documentObj = $this->getParentConf()['obj'];
                self::setDocumentTotals($this, $documentObj);

                // Remove objects from session storage
                if ($ssIdArr) {
                    // Remove objects from session
                    $this->deleteObjectFromSS($ssIdArr['documentInvoiceDetail']);
                }
            } elseif ($ssIdArr) {
                // Restore id to session storage objects
                $obj->setId($ssIdArr['documentInvoiceDetail']);
            }

            return $this->getResponse(true);
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
        $documentObj = $this->getParentConf()['obj'];

        if (!BaseDocumentController::validateDocumentAclByFormContext($this, $documentObj, 'edit')) {
            return false;
        }

        return $this->validateFormAndSetTotals($this, $object, $documentObj, $data);
    }

    /**
     * @param $controller
     * @param $object
     * @param $documentObj
     * @param $formData (data sent by form and old values to compare changes: array('total' => [], 'serviceObj' => []))
     * @return bool
     */
    static function validateFormAndSetTotals($controller, &$object, $documentObj, $formData)
    {
        $entityContextUC = $controller->getEntityContext(true);

        // Check if this object has any rectification associated.
        $rectificationDocument = $controller->getRepositoryService($entityContextUC . 'DocumentInvoiceRectification', 'AccountingBundle')
            ->execute(
                'findOneByRectification' . $entityContextUC . 'DocumentInvoiceDetailObj',
                array($object)
            );
        if (!empty($rectificationDocument)) {
            $controller->responseConf['status'] = 0;
            $getMethod1 = ('get' . $entityContextUC . 'DocumentInvoiceDetailObj');
            $getMethod2 = ('get' . $entityContextUC . 'DocumentObj');
            $getMethod3 = ('get' . $entityContextUC . 'DocumentTypeObj');
            $controller->addFlashMessage(
                'This entry was rectified by the document "'
                . $rectificationDocument->$getMethod1()->$getMethod2()->$getMethod3()->getName()
                . ' '
                . $rectificationDocument->$getMethod1()->$getMethod2()->getCode()
                . '", can not be changed.',
                'Data not persisted',
                'error'
            );
            return false;
        }

        // If serviceObj change, then set VAT code again, otherwise Vat code keeps loyal to the VAT code in use at
        // the moment of the service definition (independent if VAT code has changed more recently)
        if ($formData['oldValues']['serviceObj'] != $object->getServiceObj()) {
            $object->setVatCodeObj($object->getServiceObj()->getVatCodeObj());
        }

        // Calc and validate values
        $priceService = $controller->get('app.service.price');

        $vatCodeObj = $object->getVatCodeObj();
        $vatCodePercentage = $vatCodeObj->getPercentage();
        $quantity = $object->getQuantity();
        $user_value = $formData['user_value'];
        echo("Fix this values and test with: 10 12,3 25");
        var_dump($formData);exit;
        $isVatIncluded = (!empty($formData['isVatIncluded']));
        $totalUnitDetail = $priceService->getTotalUnitDetail($user_value, $vatCodePercentage, $isVatIncluded);
        $totalUnit = round($totalUnitDetail['value'] + $totalUnitDetail['vatValue'], 2);
        $totalVat = $priceService->calcTotal($totalUnitDetail['vatValue'], $quantity);
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
        if (($documentObj->getTotal() - $formData['oldValues']['total'] + $total) <= 0) {
            $errorMessage = 'Document value should be greater than zero.';
        } elseif (
            ($documentObj->getTotal() - $documentObj->getRemainSettlement()) >
            ($documentObj->getTotal() - $formData['oldValues']['total'] + $total)
        ) {
            $errorMessage = (
                'Document value should be greater than the settlement ('
                . ($documentObj->getTotal() - $documentObj->getRemainSettlement())
                . ').<br/> Otherwise you need to cancel the settlement before.'
            );
        } elseif (!$priceService->isEqual($formData['subTotal'], $subTotal)) {
            $errorMessage = ($formData['subTotal'].' Does not match with '.$subTotal);
        } elseif (!$priceService->isEqual($formData['totalVat'], $totalVat)) {
            $errorMessage = ($formData['totalVat'].' Does not match with '.$totalVat);
        } elseif (!$priceService->isEqual($formData['total'], $total)) {
            $errorMessage = ($formData['total'].' Does not match with '.$total);
        }

        // Set error
        if ($errorMessage) {
            $controller->responseConf['status'] = 0;
            $controller->addFlashMessage(
                ('Invalid total was detected.<br/>' . $errorMessage),
                'Data not persisted',
                'error'
            );
            return false;
        }

        // Set values and save
        $object->setValue($totalUnitDetail['value']);
        $object->setVatValue($totalUnitDetail['vatValue']);
        $object->setSubTotal($subTotal);
        $object->setTotalVat($totalVat);

        return true;
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
    public function deleteLocalChildAction(Request $request, $document, $id)
    {
        // Set configuration
        $parents = array($document);
        $this->initChild($request, $parents);

        // Get objects
        $obj = $this->getObject($id);
        $documentObj = $this->getParentConf()['obj'];

        // Verify general rules
        if (!$this->preDeleteObject($obj, null)) {
            return $this->getResponse(true);
        }

        // Delete
        $response = parent::deleteChildAction($request, $parents, $id);
        if ($this->responseConf['status'] == 1) {
            self::setDocumentTotals($this, $documentObj);
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

        $entityContextUC = $this->getEntityContext(true);

        // Check if this object has any rectification associated.
        $rectificationDocument = $this->getRepositoryService($entityContextUC . 'DocumentInvoiceRectification', 'AccountingBundle')
            ->execute(
                'findOneByRectification' . $entityContextUC . 'DocumentInvoiceDetailObj',
                array($object)
            );
        if (!empty($rectificationDocument)) {
            $this->responseConf['status'] = 0;
            $getMethod1 = ('get' . $entityContextUC . 'DocumentInvoiceDetailObj');
            $getMethod2 = ('get' . $entityContextUC . 'DocumentObj');
            $getMethod3 = ('get' . $entityContextUC . 'DocumentTypeObj');
            $this->addFlashMessage(
                'This entry was rectified by the document "'
                . $rectificationDocument->$getMethod1()->$getMethod2()->$getMethod3()->getName()
                . ' '
                . $rectificationDocument->$getMethod1()->$getMethod2()->getCode()
                . '", can not be changed.',
                'Data not persisted',
                'error'
            );
            return false;
        }

        // Check totals consistence
        $errorMessage = null;
        if (($documentObj->getTotal() - $object->getTotal()) <= 0) {
            $errorMessage = 'Document value should be greater than zero.';
        } elseif (
            ($documentObj->getTotal() - $documentObj->getRemainSettlement()) >
            ($documentObj->getTotal() - $object->getTotal())
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

        return true;
    }

    /**
     * Set document totals
     * This function should be here, because invoice has its own method to det document totals (different of receipt, etc.)
     * @param $controller
     * @param $documentObj
     * @return mixed
     */
    static function setDocumentTotals($controller, $documentObj) {
        // Check if there are no errors in previous updates
        if ($controller->responseConf['status'] == 1) {
            $entityContextUC = $controller->getEntityContext(true);

            switch ($controller->flags['storage']) {
                case 'session':
                    // Totals for documentObj
                    $sumSubTotal = $sumTotalVat = 0;

                    // Get detail objects
                    $detailObjects = $controller->container->get('app.service.session_storage')->getChildObjects(
                        $documentObj->getId(),
                        $entityContextUC.'DocumentInvoiceDetail'
                    );

                    // Calc totals
                    foreach ($detailObjects as $documentInvoiceDetailObj) {
                        $sumSubTotal += $documentInvoiceDetailObj->getSubTotal();
                        $sumTotalVat += $documentInvoiceDetailObj->getTotalVat();
                    }

                    // Update document object
                    $documentObj->setSubTotal($sumSubTotal);
                    $documentObj->setTotalVat($sumTotalVat);
                    $documentObj->setRemainSettlement($sumSubTotal + $sumTotalVat);
                    break;
                default:
                    // Update document totals
                    $controller->getRepositoryService($entityContextUC.'DocumentInvoiceDetail', 'AccountingBundle')
                        ->execute(
                            'setDocumentTotals',
                            array($documentObj)
                        );
                    // Update document remain settlement
                    $controller->getRepositoryService($entityContextUC.'DocumentReceiptSettlement', 'AccountingBundle')
                        ->execute('setDocumentRemainSettlement', array($documentObj));
                    // Update object
                    BaseEntityController::saveObject_static($controller, $documentObj);
            }
        }

        return $controller;
    }

    /**
     * Calc object values from total
     * @param $controller
     * @param $object (this object is an array with the object properties as entries)
     */
    static function calcObjectValuesFromTotal($controller, &$object) {
        $priceService = $controller->get('app.service.price');

        // Get VAT code. VAT code can be changed between the service creation time and now, so we calculate the VAT again.
        $serviceObj = $controller->getRepositoryService('Service', 'ServicesBundle')
            ->execute(
                'findOneById',
                array($object['serviceObj'])
            );
        $vatCodeObj = $serviceObj->getVatCodeObj();
        $object['vatCode_name'] = $vatCodeObj->getName();
        $object['vatCode_percentage'] = $vatCodeObj->getPercentage();

        $totalUnitValue = $priceService->calcUnitFromTotal($object['total'], $object['quantity']);
        $values = $priceService->getTotalUnitDetail($totalUnitValue, $object['vatCode_percentage'], true);
        $object['value'] = $values['value'];
        $object['vatValue'] = $values['vatValue'];
        echo("Fix this values and test with: 10 12,3 25");
        var_dump($object);exit;
        $object['totalUnit'] = round($object['value'] + $object['vatValue'], 2);
        $object['totalVat'] = $priceService->calcTotal($values['vatValue'], $object['quantity']);
        // Do not use "subTotal" nor "totalVat" to get the "total", because this values are already rounded,
        // and in some cases the sum of 2 rounded values cause inquiries.
        // Before multiply round the sum to get a coherent total unit value
        $object['total'] = $priceService->calcTotal($object['totalUnit'], $object['quantity']);
        // Sub total is determined in this way, because in some cases the sum of "subTotal" and "totalVat"
        // rounded does not match with the correct total, given that this values are rounded to 2 decimals
        // and lost precision, so in this way we keep the calculus with coherence giving preference to keep
        // "totalVat" untouched (legal values).
        $object['subTotal'] = round($object['total'] - $object['totalVat'], 2);

        return $controller;
    }

    /**
     * Create objects from booking service price
     * @param $controller
     * @param $documentObj
     * @param $options
     * @return array
     */
    static function newObjectsFromBookingServicePrice($controller, $documentObj, $options)
    {
        $entityContext = $controller->getEntityContext();
        $entityContextUC = $controller->getEntityContext(true);

        // Get objects
        $bookingServicePriceArr = BaseBookingServicePriceController
            ::getObjectsBySearchForInvoice($controller, $entityContext, $options);

        $objectArr = array();
        foreach ($bookingServicePriceArr as &$bookingServicePrice) {
            // Get booking service price
            $bookingServicePriceObj = $controller->getRepositoryService('BookingServicePrice', 'BookingBundle')->execute(
                'findOneById',
                array($bookingServicePrice['id'])
            );
            // Create document invoice detail
            $className = 'AccountingBundle\Entity\\' . $entityContextUC . 'DocumentInvoiceDetail';
            $documentInvoiceDetailObj = new $className();
            parent::setObjectDefaultValues_static($controller, $documentInvoiceDetailObj);
            $documentInvoiceDetailObj->setBookingServicePriceObj($bookingServicePriceObj);
            $setMethod = 'set' . $entityContextUC . 'DocumentObj';
            $documentInvoiceDetailObj->$setMethod($documentObj);

            // Set document invoice detail values
            $serviceObj = $bookingServicePriceObj->getBookingServiceObj()->getServiceObj();
            $vatCodeObj = $serviceObj->getVatCodeObj();
            $documentInvoiceDetailObj->setServiceObj($serviceObj);
            $documentInvoiceDetailObj->setVatCodeObj($vatCodeObj);
            $documentInvoiceDetailObj->setDescription($bookingServicePrice['description']);
            $documentInvoiceDetailObj->setQuantity($bookingServicePrice['quantity']);
            $documentInvoiceDetailObj->setValue($bookingServicePrice['value']);
            $documentInvoiceDetailObj->setVatValue($bookingServicePrice['vatValue']);
            $documentInvoiceDetailObj->setSubTotal($bookingServicePrice['subTotal']);
            $documentInvoiceDetailObj->setTotalVat($bookingServicePrice['totalVat']);

            $objectArr[] = $documentInvoiceDetailObj;
        }

        return $objectArr;
    }
}