<?php

namespace Bck\AccountingBundle\Controller;

use Bck\AccountingBundle\Entity\PaymentMethodDetail;
use AppBundle\Controller\BaseEntityController;
use Sensio\Bundle\FrameworkExtraBundle\Configuration\Route;
use Symfony\Component\HttpFoundation\Request;

class PaymentMethodController extends BaseEntityController
{
    /**
     * Initialization. Set all basic configuration
     * @param Request $request
     * @return $this
     * @throws \Exception
     */
    public function init(Request $request)
    {
        // Set configuration only once
        if($this->isInitialized) { return $this; }

        // Route
        $this->templateConf['route'] = array(
            'get' => array(
                'name' => '_bck__accounting__payment_method__get'
            ),
            'edit' => array(
                'name' => '_bck__accounting__payment_method__edit'
            ),
            'delete' => array(
                'name' => '_bck__accounting__payment_method__delete'
            )
        );

        parent::init($request);

        // Entity
        //$this->localConf['checkObjectManager'] = true; // Configure to check object because dependency of app database

        // Search
        $this->templateConf['search']['fields'] = $this->templateConf['fields']['view'];

        return $this;
    }

    /**
     * @Route("/bck/accounting/payment-method",
     *     name="_bck__accounting__payment_method__index"
     * )
     *
     * Index action
     * @param Request $request
     * @return mixed
     */
    public function indexAction(Request $request)
    {
        return parent::indexAction($request);
    }

    /**
     * @Route("/bck/accounting/payment-method/get/{id}",
     *     name="_bck__accounting__payment_method__get",
     *     defaults={"id" = null},
     * )
     *
     * Action to get a list/array of compact objects from the search configuration
     * or a regular object if the "id" is provided
     * @param Request $request
     * @param $id
     * @return mixed
     */
    public function getAction(Request $request, $id)
    {
        if(!empty($id)) {
            // Set configuration
            $this->init($request);

            // Process request
            $this->getRequestData($request); // Token is not validate, because this action is called directly without data

            $object = $this->getObject($id);

            $this->responseConf['object'] = $this->normalizeObject($object);

            ////////
            // Necessary data for form, because this method is called by form to edit the object
            ////////////////////////////////

            // PaymentMethodDetail
            $this->setResponsePaymentMethodDetail($object);

            return $this->getResponse();
        }

        return parent::getAction($request, $id);
    }

    /**
     * @Route("/bck/accounting/payment-method/edit/{id}",
     *     name="_bck__accounting__payment_method__edit",
     *     defaults={"id" = null},
     * )
     *
     * Action to edit/add objects using the form
     * @param Request $request
     * @param $id
     * @return mixed
     */
    public function editAction(Request $request, $id)
    {
        // Set configuration
        $this->flags['hasForm'] = true;
        $this->init($request);

        // Get object
        $obj = $this->getObject($id);

        // Build form
        $form = $this->createForm($this->localConf['formTypeClass'], $obj);

        // Handle request
        $form->handleRequest($request);

        // Check if is submitted
        if($form->isSubmitted()) {
            // Validate PaymentMethodDetail
            $data = null;
            $appPaymentMethodDetailOBjArr = null;
            if ($appPaymentMethodObj = $obj->getAppPaymentMethodObj()) {
                // Submitted data
                $data = $this->getRequestData($request);
                $data = isset($data['paymentMethodDetail']) ? $data['paymentMethodDetail'] : null;

                // Data that needs to be submitted
                $appPaymentMethodDetailOBjArr = $this->getRepositoryService('PaymentMethodDetail', 'SysadminBundle', 'Bck')
                    ->execute(
                        'findByAppPaymentMethodObj',
                        array($appPaymentMethodObj)
                    );

                $errorMsg = null;
                if (is_array($appPaymentMethodDetailOBjArr) && (count($appPaymentMethodDetailOBjArr) > 0)) {
                    if ($data) {
                        foreach ($appPaymentMethodDetailOBjArr as $appPaymentMethodDetailObj) {
                            $dataIndex = $appPaymentMethodDetailObj->getId();

                            if (!isset($data[$dataIndex]) || empty($data[$dataIndex])) {
                                $errorMsg = ('Payment values (' . $appPaymentMethodDetailObj->getLabel()
                                    . ') were not set correctly.'
                                );
                            }
                        }
                    } else {
                        $errorMsg = 'Payment values were not set correctly.';
                    }
                }

                if ($errorMsg) {
                    $this->responseConf['status'] = 0;
                    $this->responseConf['errors']['detail'] = array();
                    $this->responseConf['errors']['detail'][] = $errorMsg;
                    $this->addFlashMessage(
                        $errorMsg,
                        'Data not persisted',
                        'error'
                    );
                    return $this->getResponse();
                }
            }

            // Remove all previous entries
            $oldPaymentMethodDetailOBjArr = $this->getRepositoryService('PaymentMethodDetail', 'AccountingBundle', 'Bck')
                ->execute(
                    'findByPaymentMethodObj',
                    array($obj)
                );
            if (is_array($oldPaymentMethodDetailOBjArr) && (count($oldPaymentMethodDetailOBjArr) > 0)) {
                foreach ($oldPaymentMethodDetailOBjArr as $oldPaymentMethodDetailOBj) {
                    parent::deleteObject_static($this, $oldPaymentMethodDetailOBj);
                }
            }

            $this->saveForm($form, $obj, true, false); // Don't flush now

            // Save PaymentMethodDetail
            if ($appPaymentMethodObj && $data && $appPaymentMethodDetailOBjArr) {
                if (is_array($appPaymentMethodDetailOBjArr) && (count($appPaymentMethodDetailOBjArr) > 0)) {
                    foreach ($appPaymentMethodDetailOBjArr as $appPaymentMethodDetailObj) {
                        $newPaymentMethodDetailObj = new PaymentMethodDetail();
                        parent::setObjectDefaultValues_static($this, $newPaymentMethodDetailObj);
                        $newPaymentMethodDetailObj->setPaymentMethodObj($obj);
                        $newPaymentMethodDetailObj->setAppPaymentMethodDetailObj($appPaymentMethodDetailObj);
                        $newPaymentMethodDetailObj->setValue($data[$appPaymentMethodDetailObj->getId()]);
                        // Entity
                        $this->localConf['checkObjectManager'] = true; // Configure to check object because dependency of app database

                        parent::saveObject_static($this, $newPaymentMethodDetailObj, false); // Don't flush now
                    }
                }
            }

            // Save all object now, so we can wrap all object in one transaction
            $this->flushEm();

            if ($this->responseConf['status'] == 1) {
                // Clear flash messages setted by previous method
                $this->clearFlashMessage();

                $this->responseConf['object'] = $this->normalizeObject($obj); // Object updated

                // Update fields choices with self reference
                $this->responseConf['hasFieldsChoicesUpdate'] = true;

                // Flash messages to display to user
                $this->addFlashMessage(
                    'The data has been updated',
                    'Success',
                    'success'
                );

                // Success, sent PaymentMethodDetail saved values
                $this->setResponsePaymentMethodDetail($obj);
            }

            return $this->getResponse();
        }

        // Render form
        return $this->render('BckAccountingBundle:PaymentMethod:edit.html.twig', array(
            '_conf' => $this->templateConf,
            '_form' => $form->createView()
        ));
    }

    /**
     * @Route("/bck/accounting/payment-method/delete/{id}",
     *     name="_bck__accounting__payment_method__delete",
     *     defaults={"id" = null},
     * )
     *
     * Action to delete object or list of objects
     * @param Request $request
     * @param $id
     * @return mixed
     */
    public function deleteAction(Request $request, $id)
    {
        return parent::deleteAction($request, $id);
    }

    /**
     * Set Response Conf Payment Method Detail
     * @param $object
     * @return $this
     */
    protected function setResponsePaymentMethodDetail($object) {
        $paymentMethodDetailArr = array();

        if ($object->getAppPaymentMethodObj()) {
            $paymentMethodDetailArr = $this->getRepositoryService('PaymentMethodDetail', 'AccountingBundle', 'Bck')
                ->execute(
                    'queryBuilder',
                    array(array(
                        'fields' => array(
                            'appPaymentMethodDetailObj', 'app_paymentMethodDetail.id AS id',
                            'field', 'type', 'options', 'label', 'value'
                        ),
                        'criteria' => array(
                            array('field' => 'paymentMethodObj', 'expr' => 'eq', 'value' => $object)
                        )
                    ))
                );

            $paymentMethodController = $this->get('bck.sysadmin.controller.payment_method');
            $paymentMethodController->setContainer($this->container);
            $paymentMethodDetailArr = $paymentMethodController->normalizePaymentMethodDetail($paymentMethodDetailArr);
        }

        $this->templateConf['localData']['data']['paymentMethodDetail'] = $paymentMethodDetailArr;

        return $this;
    }
}