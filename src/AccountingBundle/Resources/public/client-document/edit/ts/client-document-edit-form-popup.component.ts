import {Component, ElementRef, Inject, Optional, Injector, ReflectiveInjector, Renderer, ViewChild, ViewContainerRef, EventEmitter} from '@angular/core';
import {BaseModalPopup} from '../../../../../../AppBundle/Resources/public/modal/ts/base-modal-popup';
import {Helper} from '../../../../../../AppBundle/Resources/public/ts/helper';
import {DynamicComponentLoaderService} from '../../../../../../AppBundle/Resources/public/ts/dynamic-component-loader.service';


var parentId = Helper.getGlobalVar('conf')['object']['id'],
    parentController = Helper.getGlobalVar('conf')['localData']['controller']; // Determines the type of booking

// INVOICE
Helper.setRuntimeVar('templateUrl', Helper.getGlobalVar('route') + 'booking/' + parentController + '-client-document/edit-invoice/' + parentId);
import {ClientDocumentEditInvoiceFormPopupExtModule} from './client-document-edit-invoice-form-popup.ext-module';
// RECEIPT
Helper.setRuntimeVar('templateUrl', Helper.getGlobalVar('route') + 'booking/' + parentController + '-client-document/edit-receipt/' + parentId);
import {ClientDocumentEditReceiptFormPopupExtModule} from './client-document-edit-receipt-form-popup.ext-module';
// RECTIFICATION
Helper.setRuntimeVar('templateUrl', Helper.getGlobalVar('route') + 'booking/' + parentController + '-client-document/edit-invoice/' + parentId);
import {ClientDocumentEditInvoiceRectificationFormPopupExtModule} from './client-document-edit-invoice-rectification-form-popup.ext-module';


@Component({
    selector: '.js_clientDocumentEditFormPopup',
    template: `<template #js_lazyLoadContainer></template>`
})
export class ClientDocumentEditFormPopupComponent extends BaseModalPopup
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
            documentType = (this._dataService.getObject()['clientDocumentType_type'] || null),
            module = null,
            component = null;

        // Determine context
        switch (documentType) {
            case 'RECEIPT':
                module = ClientDocumentEditReceiptFormPopupExtModule;
                component = 'ClientDocumentEditReceiptFormPopupComponent';
                break;
            case 'RECTIFICATION':
                module = ClientDocumentEditInvoiceRectificationFormPopupExtModule;
                component = 'ClientDocumentEditInvoiceRectificationFormPopupComponent';
                break;
            default: // INVOICE
                module = ClientDocumentEditInvoiceFormPopupExtModule;
                component = 'ClientDocumentEditInvoiceFormPopupComponent';
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