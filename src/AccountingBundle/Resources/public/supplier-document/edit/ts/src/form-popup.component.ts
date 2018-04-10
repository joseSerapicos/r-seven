import {Component, ElementRef, Inject, Optional, Injector, ReflectiveInjector, Renderer, ViewChild, ViewContainerRef, EventEmitter} from '@angular/core';
import {BaseModalPopup} from '../../../../../../../AppBundle/Resources/public/modal/ts/base-modal-popup';
import {DynamicComponentLoaderService} from '../../../../../../../AppBundle/Resources/public/ts/dynamic-component-loader.service';


/* Import dependencies */
// INVOICE
import {InvoiceFormPopupExtModule as SupplierDocumentEditInvoiceFormPopupExtModule} from './invoice-form-popup.ext-module';
// RECTIFICATION
import {InvoiceRectificationFormPopupExtModule as SupplierDocumentEditInvoiceRectificationFormPopupExtModule} from './invoice-rectification-form-popup.ext-module';
// RECEIPT
import {ReceiptFormPopupExtModule as SupplierDocumentEditReceiptFormPopupExtModule} from './receipt-form-popup.ext-module';
// PAYMENT
import {ReceiptPaymentFormPopupExtModule as SupplierDocumentEditReceiptPaymentFormPopupExtModule} from './receipt-payment-form-popup.ext-module';
// SETTLEMENT
import {ReceiptSettlementFormPopupExtModule as SupplierDocumentEditReceiptSettlementFormPopupExtModule} from './receipt-settlement-form-popup.ext-module';
/* /Import dependencies */


@Component({
    selector: '.js_documentEditFormPopup',
    template: `<ng-template #js_lazyLoadContainer></ng-template>`
})
export class FormPopupComponent extends BaseModalPopup
{
    // To load the edit module according with the document type
    @ViewChild('js_lazyLoadContainer', {read: ViewContainerRef}) lazyLoadViewContainerRef: ViewContainerRef;
    // To dependency close popup
    protected _onDependencyDismissSubscription: any;

    constructor(
        elementRef: ElementRef,
        renderer: Renderer,
        protected _dynamicComponentLoaderService: DynamicComponentLoaderService,
        protected _injector: Injector,
        @Inject('DataService') protected _dataService: any
    ) {
        super(
            elementRef,
            renderer,
            null
        );
    }

    /**
     * Lifecycle callback
     */
    ngAfterViewInit() {
        let that = this,
            documentType = (this._dataService.getObject()['documentType_type'] || null),
            module = null,
            component = null;

        // Determine context
        switch (documentType) {
            case 'RECTIFICATION':
                module = SupplierDocumentEditInvoiceRectificationFormPopupExtModule;
                component = 'InvoiceRectificationFormPopupComponent';
                break;
            case 'RECEIPT':
                module = SupplierDocumentEditReceiptFormPopupExtModule;
                component = 'ReceiptFormPopupComponent';
                break;
            case 'PAYMENT':
                module = SupplierDocumentEditReceiptPaymentFormPopupExtModule;
                component = 'ReceiptPaymentFormPopupComponent';
                break;
            case 'SETTLEMENT':
                module = SupplierDocumentEditReceiptSettlementFormPopupExtModule;
                component = 'ReceiptSettlementFormPopupComponent';
                break;
            default: // INVOICE
                module = SupplierDocumentEditInvoiceFormPopupExtModule;
                component = 'InvoiceFormPopupComponent';
        }

        // Load dependency
        this._dynamicComponentLoaderService.load(
            module,
            component,
            this.lazyLoadViewContainerRef,
            this._injector
        ).then(
            componentRef => {
                that._onDependencyDismissSubscription = componentRef.instance.onDismissEmitter.subscribe(
                    data => {
                        // Close popup
                        that.closeAction();
                    }
                );
                return true;
            },
            errors => {
                console.log(errors);
                return null;
            }
        );
    }

    /**
     * Lifecycle callback
     */
    ngOnDestroy()
    {
        // At this time, the component subscription is already destroyed, so does not need to unsubscribe.
        if (this._onDependencyDismissSubscription) {
            this._onDependencyDismissSubscription.unsubscribe();
        }
    }
}