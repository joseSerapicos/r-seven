import {Component, ElementRef, Inject, Injector, Renderer, QueryList, Optional, ViewChildren, ViewContainerRef, ViewChild} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {FormService} from '../../../../../../../../AppBundle/Resources/public/form/ts/form.service';
import {Helper} from '../../../../../../../../AppBundle/Resources/public/ts/helper';
import {DataService} from "../../../../../../../../AppBundle/Resources/public/ts/data-service/data.service";
import {ActionsService} from '../../../../../../../../AppBundle/Resources/public/ts/actions/actions.service';
import {WizardPopupProvider, LazyLoadData} from '../../../../../../../../AppBundle/Resources/public/wizard/ts/src/wizard-form-popup.ext-component';
import {WizardManagerService} from '../../../../../../../../AppBundle/Resources/public/wizard/ts/src/wizard-manager.service';
import {FormPopupExtComponent as BaseDocumentAddFormPopupExtComponent} from '../../../../base-document/add/ts/form-popup.ext-component';


/* Import dependencies */

// Booking Parent, used when the document is aggregated to one booking
// (this code is putted here to avoid to repeat this module in the booking bundle, so we can reuse the same modules)
var bookingContext = ((Helper.getAppVar('conf')['localData'] && Helper.getAppVar('conf')['localData']['data']['bookingContext'])
            ? Helper.getAppVar('conf')['localData']['data']['bookingContext'] :
            null
    ),
    bookingId = (bookingContext ? Helper.getAppVar('conf')['object']['id'] : null);

// STEP 2
// INVOICE and RECTIFICATION
import {TreeViewExtModule} from '../../../../../../../../AppBundle/Resources/public/tree-view/default/ts/src/tree-view.ext-module';
// RECEIPT and SETTLEMENT
import {DataBoxExtensionModule as ClientDocumentExtensionModule} from '../../../../../../../../AppBundle/Resources/public/data-box/ts/src/data-box.extension-module';
// PAYMENT (RECEIPT WITHOUT SETTLEMENT, BASED ON CLIENT PAYMENT REQUEST)
import {DataBoxExtensionModule as ClientPaymentRequestExtModule} from '../../../../../../../../AppBundle/Resources/public/data-box/ts/src/data-box.extension-module';

// STEP 3
// INVOICE
import {Step3InvoiceExtModule} from './step3-invoice.ext-module';
// RECTIFICATION
import {Step3RectificationExtModule} from './step3-rectification.ext-module';
// RECEIPT
import {Step3ReceiptExtModule} from './step3-receipt.ext-module';
// PAYMENT
import {Step3PaymentExtModule} from './step3-payment.ext-module';
// SETTLEMENT
import {Step3SettlementExtModule} from './step3-settlement.ext-module';

/* /Import dependencies */


@Component({
    selector: '.js_addFormPopup',
    templateUrl: '../templates/form-popup.component.html'
})
export class FormPopupComponent extends BaseDocumentAddFormPopupExtComponent
{
    constructor(
        elementRef: ElementRef,
        renderer: Renderer,
        @Inject('Provider') provider: WizardPopupProvider,
        wizardManagerService: WizardManagerService,
        formService: FormService,
        @Inject('HelperService') helperService: any,
        @Inject('DataService') dataService: any,
        injector: Injector
    ) {
        // Call parent
        super();
        super.initBaseDocumentAddFormPopupExtComponent(
            elementRef,
            renderer,
            provider,
            wizardManagerService,
            formService,
            helperService,
            dataService,
            injector
        );
    }

    /**
     * Submit navigation (when leave one container to navigate in other one)
     * @param index (index to validate)
     * @returns {Promise<boolean>}
     */
    public submitNav(index: number): Promise<boolean>
    {
        let that = this;

        // Step 1 for receipt payment
        if ((index == 1) &&
            (this._formService.getObject()['documentType_type'] == 'PAYMENT') &&
            (this._formService.getObject()['documentType_operation'] == 'CREDIT')
        ) {
            return new Promise(function(resolve, reject) {
                // Submit values
                let componentRef = that._wizardManagerService.getComponentRef(index);
                if (componentRef) {
                    let route = (that._helperService.getAppVar('route') +
                        'bck/accounting/client-document-receipt-payment/add-step1-submit/' +
                        that._formService.getObject()['id'] + '/1'
                    );

                    return componentRef.instance.submitChoices(route).then(
                        data => {
                            // Refresh the parent object (total)
                            that._dataService.refreshObject();
                            return resolve(true);
                        },
                        errors => { return reject(false); }
                    );
                }
                return reject(false);
            });
        }

        return super.submitNav(index);
    }

    /**
     * Get navigation data (needed data to lazy load container)
     * @param index (index to load)
     * @returns NavData
     */
    public getNavData(index: number): LazyLoadData
    {
        switch (index) {
            case 1:
                switch (this._formService.getObject()['documentType_type']) {
                    case 'RECTIFICATION':
                        return {
                            module: TreeViewExtModule,
                            component: 'TreeViewComponent',
                            urlProvider: (this._helperService.getAppVar('route') + 'bck/accounting/client-document-invoice-rectification/data-for-rectification/' + this._formService.getObject()['id'] + (bookingContext ? ('/' + bookingId) : ''))
                        };
                    case 'RECEIPT':
                    case 'SETTLEMENT':
                        return {
                            module: ClientDocumentExtensionModule,
                            component: 'DataBoxComponent',
                            urlProvider: (this._helperService.getAppVar('route') + 'bck/accounting/client-document/data-for-settlement/' + this._formService.getObject()['id'] + (bookingContext ? ('/' + bookingId) : ''))
                        };
                    case 'PAYMENT':
                        return {
                            module: ClientPaymentRequestExtModule,
                            component: 'DataBoxComponent',
                            urlProvider: (this._helperService.getAppVar('route') + 'bck/accounting/client-payment-request/data-for-receipt/' + this._formService.getObject()['clientObj'])
                        };
                    default: // INVOICE
                        return {
                            module: TreeViewExtModule,
                            component: 'TreeViewComponent',
                            urlProvider: (this._helperService.getAppVar('route') + 'bck/booking/booking-service-price/data-for-invoice-client/' + this._formService.getObject()['clientObj'] + (bookingContext ? ('/' + bookingId) : ''))
                        };
                }
            case 2:
                switch (this._formService.getObject()['documentType_type']) {
                    case 'RECTIFICATION':
                        return {
                            module: Step3RectificationExtModule,
                            component: 'Step3RectificationComponent',
                        };
                    case 'RECEIPT':
                        return {
                            module: Step3ReceiptExtModule,
                            component: 'Step3ReceiptComponent',
                        };
                    case 'PAYMENT':
                        return {
                            module: Step3PaymentExtModule,
                            component: 'Step3PaymentComponent'
                        };
                    case 'SETTLEMENT':
                        return {
                            module: Step3SettlementExtModule,
                            component: 'Step3SettlementComponent',
                        };
                    default: // INVOICE
                        return {
                            module: Step3InvoiceExtModule,
                            component: 'Step3InvoiceComponent',
                        };
                }
        }

        return null;
    }

    /**
     * Get nav providers (to lazy load components in container with dependency injection)
     * @param index (index to load)
     * @param data (data to resolve all providers)
     * @returns {Array}
     */
    public getNavProviders(index: number, data = null): any
    {
        // Step 1 for payments
        if ((index == 1) &&
            (this._formService.getObject()['documentType_type'] == 'PAYMENT') &&
            (this._formService.getObject()['documentType_operation'] == 'CREDIT')
        ) {
            return [
                {provide: 'DataService', useClass: DataService},
                {provide: 'DataServiceProvider', useValue: this._helperService.getDataServiceProvider(data)},
                {provide: 'Provider', useValue: this._helperService.getDataBoxProvider(data)},
                ActionsService,
                {provide: 'LegendProvider', useValue: Helper.getLegendProvider(data)},
                {provide: 'ActionsServiceProvider', useValue: this._helperService.getActionsServiceProvider(data)},
                {provide: 'Popups', useValue: null}
            ];
        }

        return super.getNavProviders(index, data);
    }
}