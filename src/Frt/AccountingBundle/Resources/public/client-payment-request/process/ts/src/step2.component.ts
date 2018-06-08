import {Component, ElementRef, Inject, ReflectiveInjector, Optional, ViewContainerRef, Injector, Renderer, ViewChild} from '@angular/core';
import {FormBuilder} from '@angular/forms';
import {FormExtensionComponent, FormProvider} from '../../../../../../../../AppBundle/Resources/public/form/ts/form.extension-component';
import {DynamicComponentLoaderService} from '../../../../../../../../AppBundle/Resources/public/ts/dynamic-component-loader.service';
import {DataService} from '../../../../../../../../AppBundle/Resources/public/ts/data-service/data.service';
import {FormService} from '../../../../../../../../AppBundle/Resources/public/form/ts/form.service';

var client = require('braintree-web/client');
var paypalCheckout = require('braintree-web/paypal-checkout');

// Re-exports
export {FormProvider}

/* Import dependencies */
import {EntityDetailPreviewExtModule} from '../../../../../../../../AppBundle/Resources/public/entity-detail/ts/src/entity-detail-preview.ext-module';
/* /Import dependencies */


@Component({
    selector: '#js_step2',
    templateUrl: '../templates/step2.component.html'
})
export class Step2Component extends FormExtensionComponent
{
    // For entity contacts dependency
    @ViewChild('js_entityDetailPreview', {read: ViewContainerRef}) entityDetailPreviewViewContainerRef: ViewContainerRef;

    protected _paypalConf = null;
    protected _fieldChoices = null;
    public appPaymentMethod_name = null; // Model to control display of payment method buttons


    constructor(
        elementRef: ElementRef,
        renderer: Renderer,
        @Inject('Provider') provider: FormProvider,
        formService: FormService,
        @Inject('DataService') dataService: any,
        @Inject('HelperService') protected _helperService: any,
        protected _injector: Injector,
        protected _dynamicComponentLoaderService: DynamicComponentLoaderService
    ) {
        super();
        super.initFormExtensionComponent(
            elementRef,
            renderer,
            provider,
            formService,
            dataService
        );

        this._fieldChoices = this._dataService.getFieldChoices('paymentMethodObj');
    }

    /**
     * On payment method change event
     * @param value
     */
    public onPaymentMethodChange(value: any): void
    {
        if (value === undefined) {
            return; // Possible wrong element of the click event
        }

        let that = this,
            fieldChoiceIndex = this._helperService.arraySearchObj(value, 'id', this._fieldChoices);

        if (fieldChoiceIndex === null) {
            return; // No choice was found!
        }

        this.appPaymentMethod_name = this._fieldChoices[fieldChoiceIndex]['appPaymentMethod_name'];

        if (this.appPaymentMethod_name != 'Paypal') {
            return; // Not paypal payment method
        }

        // Get paypal conf and render the button
        if (!this._paypalConf) {
            this._dataService.runAction(
                this._helperService.getAppVar('route')
                + 'accounting/client-payment-request/get-paypal-client-token/' + this._formService.getObject()['id']
            ).then(
                data => {
                    if (data['localData'] &&
                        data['localData']['data'] &&
                        data['localData']['data']['paypalClientToken'] &&
                        data['localData']['data']['paypalClientToken']['clientToken']
                    ) {
                        that._paypalConf = data['localData']['data']['paypalClientToken'];
                        that.renderPaypalButton();
                    } else {
                        console.log("Unable to get the paypal client token.");
                    }
                },
                errors => { console.log(errors); return; }
            );
        }
    }

    /**
     * Render paypal button
     */
    protected renderPaypalButton()
    {
        let that = this,
            paypalConfPayment = this._paypalConf['payment'] || null,
            isSandbox = (that._paypalConf['environment'] == 'SANDBOX');

        if(!paypalConfPayment) {
            console.log("Unable to get the paypal payment configuration.");
            return;
        }

        // Render the PayPal button
        paypal.Button.render({
            // Braintree SDK
            braintree: {
                client: client,
                paypalCheckout: paypalCheckout
            },

            // Braintree authorization key
            client: {
                production: (isSandbox ? '' : that._paypalConf['clientToken']),
                sandbox: (isSandbox ? that._paypalConf['clientToken'] : '')
            },

            // Environment
            env: (isSandbox ? 'sandbox' : 'production'),

            // Show the buyer a 'Pay Now' button in the checkout flow
            commit: true,

            // Specify the local (language, timezone, etc)
            // [en_US, ,en_AU, en_GB, fr_CA, es_ES, it_IT, fr_FR, de_DE, pt_BR, zh_CN, da_DK, zh_HK, id_ID, he_IL, ja_JP,
            // ko_KR, nl_NL, no_NO, pl_PL, pt_PT, ru_RU, sv_SE, th_TH, zh_TW]
            locale: that._paypalConf['locale'],

            // Specify the style of the button
            style: {
                layout: 'vertical',  // horizontal | vertical
                size:   'responsive',    // medium | large | responsive
                shape:  'rect',      // pill | rect
                color:  'gold'       // gold | blue | silver | black
            },

            // Specify allowed and disallowed funding sources
            //
            // Options:
            // - paypal.FUNDING.CARD
            // - paypal.FUNDING.CREDIT
            // - paypal.FUNDING.ELV
            funding: {
                allowed: [ paypal.FUNDING.CARD, paypal.FUNDING.CREDIT ],
                disallowed: [ ]
            },

            payment: function (data, actions) {
                let paymentArr = {
                    flow: 'checkout', // Required
                    amount: paypalConfPayment['amount'], // Required
                    currency: that._paypalConf['currency'], // Required
                };
                if (paypalConfPayment['shippingAddress']) {
                    let paypalConfShippingAddress = paypalConfPayment['shippingAddress'];
                    paymentArr = that._helperService.mergeObjects(
                        paymentArr,
                        {
                            enableShippingAddress: true,
                            shippingAddressEditable: false,
                            shippingAddressOverride: {
                                recipientName: paypalConfShippingAddress['recipientName'],
                                line1: paypalConfShippingAddress['line1'],
                                line2: paypalConfShippingAddress['line2'],
                                city: paypalConfShippingAddress['city'],
                                countryCode: paypalConfShippingAddress['countryCode'],
                                postalCode: paypalConfShippingAddress['postalCode'],
                                state: paypalConfShippingAddress['state'],
                                phone: paypalConfShippingAddress['phone']
                            }
                        }
                    );
                }

                return actions.braintree.create(paymentArr);
            },

            onAuthorize: function (payload, actions) {
                // Submit `payload.nonce` to server.
                that._dataService.runAction(
                    that._helperService.getAppVar('route')
                    + 'accounting/client-payment-request/set-paypal-transaction/' + that._formService.getObject()['id'],
                    {'paymentMethodNonce': payload['nonce']}
                ).then(
                    data => {
                        that._dataService.redirect('status');
                        return;
                    },
                    errors => { console.log(errors); return; }
                );
            }

        }, '#paypal-button');
    }

    /**
     * Lifecycle callback
     */
    ngAfterViewInit() {
        super.ngAfterViewInit();

        _app.conf['dependencies'] = ((_app.conf['localData']
            && _app.conf['localData']['data']
            && _app.conf['localData']['data']['clientDocumentDetail']) ?
                _app.conf['localData']['data']['clientDocumentDetail'] :
                null
        );

        // Load dependencies
        let that = this,
            dependencyData = _app.conf,
            entityDetailPreviewProvider = this._helperService.getEntityDetailPreviewProvider(dependencyData),
            providers = [
                {provide: 'DataService', useClass: DataService},
                {provide: 'DataServiceProvider', useValue: this._helperService.getDataServiceProvider(dependencyData)},
                {provide: 'Provider', useValue: entityDetailPreviewProvider}
            ],
            injector = ReflectiveInjector.fromResolvedProviders(
                ReflectiveInjector.resolve(providers),
                that._injector
            );

        this._dynamicComponentLoaderService.load(
            EntityDetailPreviewExtModule,
            'EntityDetailPreviewComponent',
            that.entityDetailPreviewViewContainerRef,
            injector
        ).then(
            componentRef => { return true; },
            errors => { console.log(errors); return null; }
        );
    }
}