<?php

namespace Bck\AccountingBundle\Controller;

use AppBundle\Controller\BaseEntityChildController;
use Sensio\Bundle\FrameworkExtraBundle\Configuration\Route;
use Symfony\Component\HttpFoundation\Request;

abstract class BaseDocumentReceiptSettlementController extends BaseEntityChildController
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
        return $this->render('BckAccountingBundle:BaseDocumentReceiptSettlement:add.html.twig', array(
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
        $documentSettlementId = ((!empty($data) && !empty($data['id']) && !empty($data['id'][0]))
            ? $data['id'][0]
            : null
        );

        if ($documentSettlementId) {
            // Get document obj
            $documentObj = $this->getParentConf()['obj'];

            $options = (empty($data['id'])
                ? null
                : array('criteria' => array(array('field' => 'id', 'expr' => 'eq', 'value' => $data['id'])))
            );

            // Create object from booking service price
            $obj = $this->newObjectsFromSettlementDocument($this, $documentObj, $options);
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
        $this->saveFormToSS($obj);
        $this->flags['parent'] = $localParent; // Reset to local parent

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
        $this->localConf['formTypeClass'] = 'Bck\AccountingBundle\Form\\'.$entityContextUC.'DocumentReceiptSettlementAddStep2Type';
        $this->localConf['templates']['edit'] = 'BckAccountingBundle:BaseDocumentReceiptSettlement:addStep2.html.twig';

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
            $this->init($request, $parents);
        }

        // Edit does not allow changes when object are stored in database,
        // because fields values are only correctly validated when object is saved from session to database
        // (comparing settlement whit payment).
        // So to fix fields values cancel the receipt document and create another.
        // On the other hand if you can edit the "invoiceDocument" field, you could select documents made after the
        // receipt, creating inquiries between the date of the receipt and the date of the "invoiceDocument".
        if ($this->flags['storage'] == 'db' && !empty($document)) {
            // Do not create form, edition is not allowed!
            $this->responseConf['status'] = 0;
            $this->addFlashMessage(
                'This transaction is closed.<br/>If you need to add/edit entries, please cancel the document and create another one.',
                'Data not persisted',
                'error'
            );

            return $this->getResponse();
        }

        // Get storage after init, this storage is defined by parent when the parent object is getted
        $parentStorage = $this->flags['storage'];

        // Get object
        $obj = $originalObj = $this->getObject($id);
        // Clone the original object in case of session storage,
        // so we keep the original object untouched in case of error,
        // and we will be able to get the object again in the next form submission
        // (otherwise the original object would be modified by the form "handleRequest" method)
        if ($this->flags['storage'] == 'session') {
            $obj = clone $originalObj;
        }

        // Build form
        $form = $this->createForm($this->localConf['formTypeClass'], $obj);

        // Handle request
        $form->handleRequest($request);

        // Check if is submitted
        if($form->isSubmitted()) {
            if (!$this->preSaveObject($obj, null)) {
                return $this->getResponse();
            }

            $entityContextUC = $this->getEntityContext(true);

            // Check if value is correct
            $getMethod = ('getSettlement' . $entityContextUC . 'DocumentObj');
            $missingSettlement = $this->getRepositoryService($entityContextUC.'DocumentReceiptSettlement', 'AccountingBundle', 'Bck')
                ->execute('getDocumentRemainSettlement', array($obj->$getMethod()));

            $priceService = $this->get('app.service.price');
            if (($obj->getValue() <= 0) || $priceService->isGreater($obj->getValue(), $missingSettlement)) {
                $this->responseConf['status'] = 0;
                $this->addFlashMessage(
                    'Settlement value must be > 0 and < or equal to ' . $missingSettlement,
                    'Data not persisted',
                    'error'
                );

                return $this->getResponse();
            }

            // Set parent storage context to save object in database if that's the case
            if ($parentStorage == 'db') {
                $this->flags['storage'] = 'db';
            } else {
                // Object will be save in storage for parent, so set the id to be replaced by the old (original)
                $obj->setId($originalObj->getId());
            }

            $this->saveForm($form, $obj);
            $this->postSaveObject($obj);

            if (($this->responseConf['status'] == 1)) {
                if ($this->flags['storage'] == 'db') {
                    // Remove object from session
                    $this->deleteObjectFromSS($originalObj->getId());
                }

                // Disable session storage flag to be able to add the object in DataService objects,
                // even if parent is in storage
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
        $parents = array($document);

        // Set configuration
        $this->flags['hasForm'] = true;
        $this->init($request, $parents);

        // Delete is not allow when parent are stored in database,
        // because fields values are only correctly validated when object is saved from session to database
        // (comparing settlement whit payment).
        // So to delete entries cancel the receipt document and create another.
        if ($this->flags['storage'] == 'db') {
            $this->responseConf['status'] = 0;
            $this->addFlashMessage(
                'This transaction is closed.<br/>If you need to delete entries, please cancel the document and create another one.',
                'Data not persisted',
                'error'
            );

            return $this->getResponse();
        }

        return parent::deleteChildAction($request, $parents, $id);
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
     * Create objects from settlement document
     * @param $controller
     * @param $documentObj
     * @param $options
     * @return array
     */
    static function newObjectsFromSettlementDocument($controller, $documentObj, $options)
    {
        // Set object detail
        $entityContextUC = $controller->getEntityContext(true);

        // Get objects
        $settlementDocumentArr = BaseDocumentController::getObjectsBySearchForSettlement($controller, $options);

        $objectArr = array();
        foreach ($settlementDocumentArr as &$settlementDocument) {
            // Get invoice document
            $settlementDocumentObj = $controller->getRepositoryService($entityContextUC.'Document', 'AccountingBundle', 'Bck')
                ->execute(
                    'findOneById',
                    array(
                        $settlementDocument['id']
                    )
                );

            // Create object
            $className = 'Bck\AccountingBundle\Entity\\' . $entityContextUC . 'DocumentReceiptSettlement';
            $documentReceiptSettlementObj = new $className();
            parent::setObjectDefaultValues_static($controller, $documentReceiptSettlementObj);
            $setMethod = 'set' . $entityContextUC . 'DocumentObj';
            $documentReceiptSettlementObj->$setMethod($documentObj);
            $setMethod = 'setSettlement' . $entityContextUC . 'DocumentObj';
            $documentReceiptSettlementObj
                ->$setMethod($settlementDocumentObj);
            $documentReceiptSettlementObj->setValue($settlementDocument['total']);

            $objectArr[] = $documentReceiptSettlementObj;
        }

        return $objectArr;
    }
}