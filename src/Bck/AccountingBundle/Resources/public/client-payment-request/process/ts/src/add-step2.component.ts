import {Component, ElementRef, Inject, Optional, Injector, Renderer} from '@angular/core';
import {FormBuilder} from '@angular/forms';
import {FormPopupExtensionComponent, FormProvider} from '../../../../../../../../AppBundle/Resources/public/form/ts/form-popup.extension-component';
import {DataService} from '../../../../../../../../AppBundle/Resources/public/ts/data-service/data.service';
import {FormService} from '../../../../../../../../AppBundle/Resources/public/form/ts/form.service';

var client = require('braintree-web/client');
var paypalCheckout = require('braintree-web/paypal-checkout');

// Re-exports
export {FormProvider}


@Component({
    selector: '#js_addStep2',
    templateUrl: '../templates/add-step2.component.html'
})
export class AddStep2Component extends FormPopupExtensionComponent
{
    constructor(
        elementRef: ElementRef,
        renderer: Renderer,
        @Inject('Provider') provider: FormProvider,
        formService: FormService,
        @Inject('DataService') dataService: any,
        @Inject('HelperService') protected _helperService: any
    ) {
        super();
        super.initFormPopupExtensionComponent(
            elementRef,
            renderer,
            provider,
            formService,
            dataService
        );
    }

    public onClientDocumentChange(value: string): void
    {

    }

    /**
     * Lifecycle callback
     */
    ngAfterViewInit()
    {
        super.ngAfterViewInit();

        // Render the PayPal button
        paypal.Button.render({
            // Pass in the Braintree SDK
            braintree: {
                client: client,
                paypalCheckout: paypalCheckout
            },

            // Pass in your Braintree authorization key
            client: {
                production: 'CLIENT_TOKEN_FROM_SERVER',
                sandbox: 'CLIENT_TOKEN_FROM_SERVER'
            },

            // Set your environment
            env: 'sandbox',

            // Show the buyer a 'Pay Now' button in the checkout flow
            commit: true,

            // Specify the local (language, timezone, etc)
            // [en_US, ,en_AU, en_GB, fr_CA, es_ES, it_IT, fr_FR, de_DE, pt_BR, zh_CN, da_DK, zh_HK, id_ID, he_IL, ja_JP,
            // ko_KR, nl_NL, no_NO, pl_PL, pt_PT, ru_RU, sv_SE, th_TH, zh_TW]
            locale: 'es_ES',

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
                console.log(data);
                console.log(actions);

                return actions.braintree.create({
                    flow: 'checkout', // Required
                    amount: 10.00, // Required
                    currency: 'USD', // Required
                    enableShippingAddress: true,
                    shippingAddressEditable: false,
                    shippingAddressOverride: {
                        recipientName: 'Scruff McGruff',
                        line1: '1234 Main St.',
                        line2: 'Unit 1',
                        city: 'Chicago',
                        countryCode: 'US',
                        postalCode: '60652',
                        state: 'IL',
                        phone: '123.456.7890'
                    }
                });
            },

            onAuthorize: function (payload) {
                // Submit `payload.nonce` to your server.

                console.log(payload);
            },

        }, '#paypal-button');
    }
}