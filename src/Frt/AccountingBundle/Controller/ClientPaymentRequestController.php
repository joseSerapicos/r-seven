<?php

namespace Frt\AccountingBundle\Controller;

use AppBundle\Controller\BaseEntityController;
use Sensio\Bundle\FrameworkExtraBundle\Configuration\Route;
use Symfony\Component\HttpFoundation\Request;

class ClientPaymentRequestController extends BaseEntityController
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
            'process' => array(
                'name' => '_accounting__client_payment_request__process'
            ),
            'processStep1' => array(
                'name' => '_accounting__client_payment_request__process_step1'
            ),
            'processStep2' => array(
                'name' => '_accounting__client_payment_request__process_step2'
            ),
            'status' => array(
                'name' => '_accounting__client_payment_request__status'
            )
        );

        // Overrides BundlePrefix to use the entity of back-office
        $this->localConf['BundlePrefix'] = 'Bck';

        parent::init($request);
        // Change field 'paymentMethodObj' to restrict it according with front-office
        $this->templateConf['fields']['choices']['paymentMethodObj']['query'] = 'getChoicesForOnlinePayment';
        // Needed to identify specific payment types like paypal
        $this->templateConf['fields']['choices']['paymentMethodObj']['fields'] = array('appPaymentMethod_name');

        // Search
        $this->templateConf['search']['fields'] = $this->templateConf['fields']['view'];

        /* Legend for template/view */
        $this->templateConf['controls']['legend'] = array();
        /* /Legend for template/view */

        // Actions for template/view
        $this->templateConf['actions'] = array();

        return $this;
    }

    /**
     * @Route("/accounting/client-payment-request/process/{id}",
     *     name="_accounting__client_payment_request__process",
     *     defaults={"id" = null},
     * )
     *
     * Process action (action to process the payment)
     * @param Request $request
     * @param $id
     * @return mixed
     * @throws \Exception
     */
    public function processAction(Request $request, $id)
    {
        // Set configuration
        $this->init($request);

        // Get object
        $obj = $this->getObject($id);
        if ($obj->getPaymentStatus() == 'YES') {
            // Payment has been done, the user should not be here
            return $this->statusAction($request, $id);
        }

        // Customer can choice the payment method to use
        $obj->setPaymentMethodObj(null);

        // Set object dependencies in responseConf
        $this->setResponseDependencies($request, $obj);

        // Set response
        $this->templateConf['fields']['view'] = array('clientDocument_label', 'clientDocument_date',
            'clientDocument_dueDate', 'clientDocument_subTotal', 'clientDocument_totalVat', 'clientDocument_total',
            'description', 'value');
        $this->responseConf['hasObject'] = true;
        $this->responseConf['object'] = $this->normalizeObject($obj);
        $this->responseConf['hasConf'] = true;

        $this->responseConf['type'] = "ARRAY";
        return $this->render(
            'FrtAccountingBundle:ClientPaymentRequest:process.html.twig',
            $this->getResponse()
        );
    }

    /**
     * @Route("/accounting/client-payment-request/process-step1/{id}",
     *     name="_accounting__client_payment_request__process_step1",
     *     defaults={"id" = null},
     * )
     *
     * Process step 1
     * @param Request $request
     * @param $id
     * @return mixed
     */
    public function processStep1Action(Request $request, $id)
    {
        // Render Wizard
        return $this->render('FrtAccountingBundle:ClientPaymentRequest:process-step1.html.twig', array(
            '_containers' => array(
                array(
                    'label' => 'Customer Info',
                ),
                array(
                    'label' => 'Payment',
                )
            )
        ));
    }

    /**
     * @Route("/accounting/client-payment-request/process-step2/{id}",
     *     name="_accounting__client_payment_request__process_step2",
     *     defaults={"id" = null},
     * )
     *
     * Process step 2
     * @param Request $request
     * @param $id
     * @return mixed
     */
    public function processStep2Action(Request $request, $id)
    {
        // Set configuration
        $this->flags['hasForm'] = true;
        $this->init($request);
        // Field to be rendered in form (this configuration for Angular "FormService" is defined in "FormServiceProvider")
        $this->templateConf['fields']['form'] = array('paymentMethodObj');

        // Get object
        $obj = $this->getObject($id);
        if ($obj->getPaymentStatus() == 'YES') {
            // Payment has been done, the user should not be here
            $this->responseConf['status'] = 0;
            $this->addFlashMessage(
                'The payment has already been processed and confirmed.<br/>This process is closed.',
                'Payment not processed',
                'error'
            );
            return $this->getResponse();
        }

        // Build form
        $form = $this->createForm('Frt\AccountingBundle\Form\ClientPaymentRequestType', $obj);

        // Handle request
        $form->handleRequest($request);

        // Check if is submitted
        if($form->isSubmitted()) {
            $this->saveForm($form, $obj);
            return $this->getResponse();
        }

        // Render form
        return $this->render('FrtAccountingBundle:ClientPaymentRequest:process-step2.html.twig', array(
            '_conf' => $this->templateConf,
            '_form' => $form->createView()
        ));
    }

    /**
     * @Route("/accounting/client-payment-request/status/{id}",
     *     name="_accounting__client_payment_request__status",
     *     defaults={"id" = null},
     * )
     *
     * Status
     * @param Request $request
     * @param $id
     * @return mixed
     */
    public function statusAction(Request $request, $id)
    {
        $this->init($request);

        // Get object
        $obj = $this->getObject($id);

        // Set response
        $this->templateConf['fields']['view'] = array('entity_avatar', 'entity_name', 'clientDocument_label',
            'clientDocument_date', 'clientDocument_dueDate', 'clientDocument_subTotal', 'clientDocument_totalVat',
            'clientDocument_total', 'description', 'value', 'paymentMethod_name');
        $this->responseConf['hasObject'] = true;
        $this->responseConf['object'] = $this->normalizeObject($obj);
        $this->responseConf['hasConf'] = true;

        $this->responseConf['type'] = "ARRAY";
        return $this->render(
            'FrtAccountingBundle:ClientPaymentRequest:process-finish.html.twig',
            $this->getResponse()
        );
    }

    /**
     * @Route("/accounting/client-payment-request/get-paypal-client-token/{id}",
     *     name="_accounting__client_payment_request__get_paypal_client_token"
     * )
     *
     * Get paypal client token
     * @param Request $request
     * @param $id (id of request if available)
     * @return mixed
     * @throws \Exception
     */
    public function getPaypalClientTokenAction(Request $request, $id)
    {
        $this->init($request);

        // Get object
        $obj = $this->getObject($id);
        if ($obj->getPaymentStatus() == 'YES') {
            // Payment has been done, the user should not be here
            $this->responseConf['status'] = 0;
            $this->addFlashMessage(
                'The payment has already been processed and confirmed.<br/>This process is closed.',
                'Payment not processed',
                'error'
            );
            return $this->getResponse();
        }

        // Get gateway
        $paypalConf = $this->getPaypalConf();
        $gateway = $this->getPaypalGateway($paypalConf);

        // Set response
        $this->templateConf['localData']['data']['paypalClientToken'] = array(
            'environment' => $paypalConf['environment'],
            'clientToken' => $gateway->clientToken()->generate(),
            'locale' => 'es_ES',
            'currency' => 'EUR',
            'payment' => array(
                'amount' => $obj->getValue()
            )
        );
        return $this->getResponse();
    }

    /**
     * @Route("/accounting/client-payment-request/set-paypal-transaction/{id}",
     *     name="_accounting__client_payment_request__set_paypal_transaction"
     * )
     *
     * Set Paypal transaction
     * @param Request $request
     * @param $id (id of request)
     * @return mixed
     * @throws \Exception
     */
    public function setPaypalTransactionAction(Request $request, $id)
    {
        $this->init($request);

        // Get object
        $obj = $this->getObject($id);
        if ($obj->getPaymentStatus() == 'YES') {
            // Payment has been done, the user should not be here
            $this->responseConf['status'] = 0;
            $this->addFlashMessage(
                'The payment has already been processed and confirmed.<br/>This process is closed.',
                'Payment not processed',
                'error'
            );
            return $this->getResponse();
        }

        $data = $this->getAndProcessRequestData($request);
        $paymentMethodNonce = isset($data['paymentMethodNonce']) ? $data['paymentMethodNonce'] : null;
        if (!$paymentMethodNonce) {
            $this->responseConf['status'] = 0;
            $this->addFlashMessage(
                'Payment method nonce not available.',
                'Payment not processed',
                'error'
            );
            return $this->getResponse();
        }

        // Get gateway
        $paypalConf = $this->getPaypalConf();
        $gateway = $this->getPaypalGateway($paypalConf);

        // Set object dependencies in responseConf
        $this->setResponseDependencies($request, $obj);

        // Set Transaction
        $transactionArr = array(
            "amount" => $obj->getValue(),
            'merchantAccountId' => 'EUR',
            "paymentMethodNonce" => $paymentMethodNonce,
            "options" => array(
                "paypal" => array(
                    "customField" => $obj->getClientObj()->getCode(), // Custom value/reference
                    "description" => substr($obj->getDescription(), 0, 127) // Max 127 characters
                ),
            ),
            // Invoice number on Paypal (it's unique on Paypal to avoid payment duplications)
            'orderId' => ($obj->getClientDocumentObj() ?
                $obj->getClientDocumentObj()->getCode() :
                ('CliPayRequest-' . $obj->getId())
            )
        );
        if (false) {
            $transactionArr['shipping'] = array(
                "firstName" => "Jen",
                "lastName" => "Smith",
                "company" => "Braintree",
                "streetAddress" => "1 E 1st St",
                "extendedAddress" => "Suite 403",
                "locality" => "Bartlett",
                "region" => "IL",
                "postalCode" => "60103",
                "countryCodeAlpha2" => "US"
            );
        }

        $result = $gateway->transaction()->sale($transactionArr);
        if ($result->success) {
            // Get Paypal payment method object
            $paymentMethodObj = $this->getRepositoryService('PaymentMethod', 'AccountingBundle', 'Bck')
                ->execute('findOneById', array($paypalConf['paymentMethodId']));

            $obj->setPaymentMethodObj($paymentMethodObj);
            $obj->setReference($paymentMethodNonce); // $result->transaction->id (other alternative, but nonce can be used in future)
            $obj->setPaymentStatus('YES');
            $this->saveObject($obj);
        } else {
            $this->responseConf['status'] = 0;
            $this->addFlashMessage(
                $result->message,
                'Payment not processed',
                'error'
            );
            return $this->getResponse();
        }

        $this->addFlashMessage(
            'Payment processed successfully.',
            'Success',
            'success'
        );
        return $this->getResponse();
    }

    /**
     * Set response dependencies
     * @param Request $request
     * @param $object
     * @return $this
     */
    protected function setResponseDependencies(Request $request, $object)
    {
        // Only set the info if is not defined before by another process

        // Get client info
        if (!isset($this->responseConf['dependencies']['client'])) {
            $clientObj = $object->getClientObj();
            $clientController = $this->get("frt.entities.controller.client");
            $clientController->setContainer($this->container);
            $this->responseConf['dependencies']['client']
                = $clientController->init($request)->setResponseConfAttr('type', 'RAW_ARRAY')
                ->confAction($request, $clientObj->getId());
        }

        // Get entity contacts conf
        if (!isset($this->responseConf['dependencies']['entityContacts'])) {
            $entityObj = $clientObj->getEntityObj();
            $entityContactsController = $this->get("bck.entities.controller.entity_contacts");
            $entityContactsController->setContainer($this->container);
            $this->responseConf['dependencies']['entityContacts']
                = $entityContactsController->init($request, array($entityObj->getId()))
                ->setResponseConfAttr('type', 'RAW_ARRAY')
                ->confLocalChildAction($request, $entityObj->getId());
        }

        // Get payment info
        if (!isset($this->templateConf['localData']['data']['clientDocumentDetail'])) {
            $clientDocumentObj = $object->getClientDocumentObj();
            if ($clientDocumentObj) {
                // Client Document Detail
                $clientDocumentDetailController = $this->get('bck.accounting.controller.client_document_invoice_detail');
                $clientDocumentDetailController->setContainer($this->container);
                $clientDocumentDetailData
                    = $clientDocumentDetailController->init($request, array($clientDocumentObj->getId()))
                    ->setResponseConfAttr('type', 'RAW_ARRAY')
                    ->dataAction($request, $clientDocumentObj->getId());

                // Dependencies according with 'EntityDetailPreviewProvider'
                // Show only default fields
                $clientDocumentDetailData['fields']['view'] = $clientDocumentDetailData['search']['fields'];
                $this->templateConf['localData']['data']['clientDocumentDetail'] = array($clientDocumentDetailData);
            }
        }

        return $this;
    }

    /**
     * Get Paypal configuration
     * @return array
     * @throws \Exception
     */
    protected function getPaypalConf()
    {
        $paypalConf = array();

        // Get Paypal payment method
        $paymentMethod = $this->getRepositoryService('PaymentMethod', 'AccountingBundle', 'Bck')
            ->execute(
                'queryBuilder',
                array(array(
                    'fields' => array(
                        'appPaymentMethodObj', 'id'
                    ),
                    'criteria' => array(
                        array('field' => 'app_paymentMethod.name', 'expr' => 'eq', 'value' => 'Paypal')
                    )
                ))
            );

        if (is_array($paymentMethod) && (count($paymentMethod) > 0)) {
            $paymentMethod = reset($paymentMethod);
            $paypalConf['paymentMethodId'] = $paymentMethod['id'];

            // Get Paypal payment method detail
            $paymentMethodDetail = $this->getRepositoryService('PaymentMethodDetail', 'AccountingBundle', 'Bck')
                ->execute(
                    'queryBuilder',
                    array(array(
                        'fields' => array(
                            'appPaymentMethodDetailObj', 'field', 'value'
                        ),
                        'criteria' => array(
                            array('field' => 'paymentMethodObj', 'expr' => 'eq', 'value' => $paymentMethod['id'])
                        )
                    ))
                );

            if (is_array($paymentMethodDetail) && (count($paymentMethodDetail) > 0)) {
                foreach ($paymentMethodDetail as $value) {
                    $paypalConf[$value['field']] = $value['value'];
                }
            }
        }

        if (count($paypalConf) < 2) {
            throw new \Exception('Paypal payment method is not available. Please contact the support center.');
        }

        return $paypalConf;
    }

    /**
     * Get Paypal gateway
     * @param $conf
     * @return \Braintree_Gateway
     */
    protected function getPaypalGateway($conf = null)
    {
        if (!$conf) {
            $conf = $this->getPaypalConf();
        }

        // Set gateway
        return $gateway = new \Braintree_Gateway(array(
            'accessToken' => (($conf['environment'] == 'SANDBOX') ?
                $conf['sandbox'] :
                $conf['production']
            )
        ));
    }
}