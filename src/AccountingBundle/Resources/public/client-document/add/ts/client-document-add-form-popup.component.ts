import {Component, ElementRef, Inject, Injector, Renderer, QueryList, Optional, ViewChildren, ViewContainerRef, ViewChild} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {FormService} from '../../../../../../AppBundle/Resources/public/ts/form/form.service';
import {Helper} from '../../../../../../AppBundle/Resources/public/ts/helper';
import {DataService} from "../../../../../../AppBundle/Resources/public/ts/data-service/data.service";
import {TreeViewDataService} from "../../../../../../AppBundle/Resources/public/ts/data-service/tree-view-data.service";
import {ActionsService} from '../../../../../../AppBundle/Resources/public/ts/actions/actions.service';
import {WizardFormPopupComponent, WizardPopupProvider, IWizard, LazyLoadData} from '../../../../../../AppBundle/Resources/public/ts/wizard/wizard-form-popup.component';
import {WizardManagerService} from '../../../../../../AppBundle/Resources/public/ts/wizard/wizard-manager.service';


/* Import dependencies */
// Parent id for dependencies
var parentId = Helper.getGlobalVar('conf')['object']['id'],
    parentController = Helper.getGlobalVar('conf')['localData']['controller']; // Determines the type of booking

// Default Detail
// INVOICE
import {BookingServicePriceExtModule} from '../../../../../../BookingBundle/Resources/public/base-booking-service-price/index/ts/booking-service-price.ext-module';
// RECEIPT
import {ClientDocumentExtensionModule} from '../../index/ts/client-document.extension-module';
// RECTIFICATION
import {TreeViewExtModule} from '../../../../../../AppBundle/Resources/public/tree-view/ts/tree-view.ext-module';

// Detail
// INVOICE
Helper.setRuntimeVar('templateUrl', Helper.getGlobalVar('route') + 'booking/' + parentController + '-client-document/add-invoice-detail/' + parentId);
import {ClientDocumentAddInvoiceDetailFormPopupExtModule} from './client-document-add-invoice-detail-form-popup.ext-module';
// RECTIFICATION
Helper.setRuntimeVar('templateUrl', Helper.getGlobalVar('route') + 'booking/' + parentController + '-client-document/add-invoice-detail/' + parentId); // Same form of invoice
import {ClientDocumentAddInvoiceRectificationFormPopupExtModule} from './client-document-add-invoice-rectification-form-popup.ext-module';
// RECEIPT
Helper.setRuntimeVar('templateUrl', Helper.getGlobalVar('route') + 'booking/' + parentController + '-client-document/add-receipt-detail/' + parentId);
import {ClientDocumentAddReceiptDetailFormPopupExtModule} from './client-document-add-receipt-detail-form-popup.ext-module';
/* /Import dependencies */


@Component({
    selector: '.js_clientDocumentAddFormPopup',
    templateUrl: Helper.getGlobalVar('route') + 'booking/' + parentController + '-client-document/add/' + parentId
})
export class ClientDocumentAddFormPopupComponent extends WizardFormPopupComponent implements IWizard
{
    // For NavManagerService
    @ViewChildren('js_lazyLoadContainer', {read: ViewContainerRef}) lazyLoadViewContainerRefQL: QueryList<ViewContainerRef>;

    constructor(
        elementRef: ElementRef,
        renderer: Renderer,
        @Inject('Provider') provider: WizardPopupProvider,
        wizardManagerService: WizardManagerService,
        formService: FormService,
        @Inject('HelperService') protected _helperService: any,
        @Inject('DataService') protected _dataService: any,
        @Inject('ParentDataService') protected _parentDataService: any,
        protected _injector: Injector
    ) {
        // Call parent
        super(
            elementRef,
            renderer,
            provider,
            wizardManagerService,
            formService
        );
    }

    /**
     * Submit navigation (when leave one container to navigate in other one)
     * @param index (index to validate)
     * @returns {Promise<boolean>}
     */
    public submitNav(index: number): Promise<boolean>
    {
        let that = this,
            route = null,
            componentRef = null;

        return new Promise(function(resolve, reject) {
            switch (index) {
                case 0:
                    // Save form
                    route = (that._dataService.getRoute('add'));
                    return that._formService.save(route).then(
                        data => {
                            // Update entityAddress autoCompleteProvider choices route to the updated entity
                            let autoCompleteProviders = that._injector.get('AutoCompleteProviders');
                            if (autoCompleteProviders['entityAddressObj']['childInjector']) {
                                let choicesDataService = autoCompleteProviders['entityAddressObj']['childInjector'].get('DataServiceChoices'),
                                    choicesRoute = choicesDataService.getRoute('choices');
                                choicesRoute = (choicesRoute.substr(0, choicesRoute.lastIndexOf('/') + 1)
                                    + that._formService.getObject()['entityObj']
                                );
                                choicesDataService.setRoute('choices', choicesRoute);
                            }

                            return resolve(true);
                        },
                        errors => { return reject(false); }
                    );
                case 1:
                    // Submit values
                    componentRef = that._wizardManagerService.getComponentRef(index);
                    route = (that._dataService.getRoute('add-default-detail') + '/' + that._formService.getObject()['id']);

                    return componentRef.instance.submitChoices(route, true).then(
                        data => {
                            that._dataService.refreshObject();
                            return resolve(true);
                        },
                        errors => { return reject(false); }
                    );
                case 2:
                    // Save form
                    componentRef = that._wizardManagerService.getComponentRef(index);
                    if (that._formService.getObject()['clientDocumentType_type'] == 'RECEIPT') {
                        route = (that._dataService.getRoute('add-receipt-detail'));
                    } else {
                        route = (that._dataService.getRoute('add-invoice-detail'));
                    }

                    that._formService.setForceSubmit(false); // Disable force submit, at this time the user is finishing
                    // the process and submitting the form (this procedure avoid form to question the user when
                    // the saved object is returned, because we have two FormServices here using the same DataService)
                    return componentRef.instance._formService.save(route).then(
                        data => { return resolve(true); },
                        errors => {
                            that._formService.setForceSubmit(true); // If error put again form waiting for submit
                            return reject(false);
                        }
                    );
            }

            // Nothing to do
            return resolve(true);
        });
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
                switch (this._formService.getObject()['clientDocumentType_type']) {
                    case 'RECEIPT':
                        return {
                            module: ClientDocumentExtensionModule,
                            component: 'ClientDocumentComponent',
                            urlProvider: (this._helperService.getGlobalVar('route') + 'booking/' + parentController + '-client-document/data-for-receipt/' + parentId + '/' + this._formService.getObject()['entityObj'])
                        };
                    case 'RECTIFICATION':
                        return {
                            module: TreeViewExtModule,
                            component: 'TreeViewComponent',
                            urlProvider: (this._helperService.getGlobalVar('route') + 'accounting/client-document-invoice-rectification/data-for-rectification/' + this._formService.getObject()['clientDocumentObj'])
                        };
                    default: // INVOICE
                        return {
                            module: BookingServicePriceExtModule,
                            component: 'BookingServicePriceComponent',
                            urlProvider: (this._helperService.getGlobalVar('route') + 'booking/' + parentController + '-client-document-invoice-detail/data-for-invoice/' + parentId)
                        };
                }
            case 2:
                switch (this._formService.getObject()['clientDocumentType_type']) {
                    case 'RECEIPT':
                        return {
                            module: ClientDocumentAddReceiptDetailFormPopupExtModule,
                            component: 'ClientDocumentAddReceiptDetailFormPopupComponent',
                        };
                    case 'RECTIFICATION':
                        return {
                            module: ClientDocumentAddInvoiceRectificationFormPopupExtModule,
                            component: 'ClientDocumentAddInvoiceRectificationFormPopupComponent',
                        };
                    default: // INVOICE
                        return {
                            module: ClientDocumentAddInvoiceDetailFormPopupExtModule,
                            component: 'ClientDocumentAddInvoiceDetailFormPopupComponent',
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
        switch (index) {
            case 1:
                let providers = [];
                switch (this._formService.getObject()['clientDocumentType_type']) {
                    case 'RECTIFICATION':
                        providers = [
                            {provide: 'DataService', useClass: TreeViewDataService},
                            {provide: 'DataServiceProvider', useValue: this._helperService.getTreeViewDataServiceProvider(data)},
                            {provide: 'Provider', useValue: this._helperService.getTreeViewProvider(data)},
                        ];
                        break;
                    default:
                        providers = [
                            {provide: 'DataService', useClass: DataService},
                            {provide: 'DataServiceProvider', useValue: this._helperService.getDataServiceProvider(data)},
                            {provide: 'Provider', useValue: this._helperService.getDataBoxProvider(data)},
                        ];
                }

                return providers.concat([
                    ActionsService,
                    {provide: 'ActionsServiceProvider', useValue: this._helperService.getActionsServiceProvider(data)},
                    {provide: 'Popups', useValue: null}
                ]);
            case 2:
                return [
                    // Reset FormServiceProvider to use DataServiceProvider as default values
                    {provide: 'FormServiceProvider', useValue: {}},
                    FormService
                ];
        }

        return null;
    }
}