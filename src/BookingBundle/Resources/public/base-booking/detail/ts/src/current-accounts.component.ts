import {Component, Optional, ElementRef, Inject, Injector, Renderer, QueryList, ViewContainerRef, ViewChildren} from '@angular/core';
import {Helper} from '../../../../../../../AppBundle/Resources/public/ts/helper';
import {AccordionComponent, IAccordion, LazyLoadData} from '../../../../../../../AppBundle/Resources/public/accordion/ts/src/accordion.component';
import {NavManagerService} from '../../../../../../../AppBundle/Resources/public/ts/nav-manager/nav-manager.service';
import {WizardManagerService} from '../../../../../../../AppBundle/Resources/public/wizard/ts/src/wizard-manager.service';
import {FormService} from '../../../../../../../AppBundle/Resources/public/ts/form/form.service';
import {DataService} from '../../../../../../../AppBundle/Resources/public/ts/data-service/data.service';
import {ActionsService} from '../../../../../../../AppBundle/Resources/public/ts/actions/actions.service';


/* Import dependencies */

// ClientDocument
import {MainExtModule as ClientDocumentMainExtModule} from '../../../../../../../AccountingBundle/Resources/public/client-document/index/ts/src/main.extension-module';
// Form Popups
// Add
Helper.setGlobalVar('templateUrl', Helper.getAppVar('route') + 'accounting/client-document/add-step1');
import {FormPopupExtModule as ClientDocumentAddFormPopupExtModule} from '../../../../../../../AccountingBundle/Resources/public/client-document/add/ts/src/form-popup.ext-module';
// Edit
import {FormPopupExtModule as ClientDocumentEditFormPopupExtModule} from '../../../../../../../AccountingBundle/Resources/public/client-document/edit/ts/src/form-popup.ext-module';

// SupplierDocument
import {MainExtModule as SupplierDocumentMainExtModule} from '../../../../../../../AccountingBundle/Resources/public/supplier-document/index/ts/src/main.extension-module';
// Form Popups
// Add
Helper.setGlobalVar('templateUrl', Helper.getAppVar('route') + 'accounting/supplier-document/add-step1');
import {FormPopupExtModule as SupplierDocumentAddFormPopupExtModule} from '../../../../../../../AccountingBundle/Resources/public/supplier-document/add/ts/src/form-popup.ext-module';
// Edit
import {FormPopupExtModule as SupplierDocumentEditFormPopupExtModule} from '../../../../../../../AccountingBundle/Resources/public/supplier-document/edit/ts/src/form-popup.ext-module';

// Auto-complete
Helper.setGlobalVar('templateUrl', Helper.getAppVar('route') + 'entities/entity-address/edit/0'); // No parent defined
import {EntityAddressEditExtModule} from '../../../../../../../EntitiesBundle/Resources/public/entity/detail/ts/src/entity-address-edit.ext-module';

/* /Import dependencies */


@Component({
    selector: '.js_currentAccounts',
    template: '' // Define template in child component
})
export class CurrentAccountsComponent extends AccordionComponent implements IAccordion
{
    // For NavManagerService
    @ViewChildren('js_lazyLoadContainer', {read: ViewContainerRef}) lazyLoadViewContainerRefQL: QueryList<ViewContainerRef>;
    // To handle with dependency objects changes to refresh the local object
    protected _onDependencyObjectsChangeSubscription: any;

    constructor(
        elementRef: ElementRef,
        renderer: Renderer,
        @Optional() @Inject('Provider') provider: any,
        @Inject('HelperService') helperService: any,
        navManagerService: NavManagerService,
        @Inject('DataService') protected _dataService: any,
        protected _injector: Injector
    ) {
        super(
            elementRef,
            renderer,
            provider || null,
            helperService,
            navManagerService
        );
    }

    /**
     * Get navigation data (needed data to lazy load container)
     * @param index (index to load)
     * @returns NavData
     */
    public getNavData(index: number): LazyLoadData
    {
        let booking = this._dataService.getObject()['bookingObj'];

        switch (index) {
            case 0:
                return {
                    module: ClientDocumentMainExtModule,
                    component: 'MainComponent',
                    urlProvider: (this._helperService.getAppVar('route') + 'accounting/client-document/data-by-booking/' + booking)
                };
            case 1:
                return {
                    module: SupplierDocumentMainExtModule,
                    component: 'MainComponent',
                    urlProvider: (this._helperService.getAppVar('route') + 'accounting/supplier-document/data-by-booking/' + booking)
                };
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
        let popupModules = {},
            popupAddFields = [];

        switch (index) {
            case 0:
                popupModules = {
                    add: ClientDocumentAddFormPopupExtModule,
                    edit: ClientDocumentEditFormPopupExtModule
                };
                popupAddFields = ['clientDocumentTypeObj', 'clientObj'];
                break;
            case 1:
                popupModules = {
                    add: SupplierDocumentAddFormPopupExtModule,
                    edit: SupplierDocumentEditFormPopupExtModule
                };
                popupAddFields = ['supplierDocumentTypeObj', 'supplierObj'];
                break;
        }

        let autoCompleteProviders = this._injector.get('AutoCompleteProviders');
        autoCompleteProviders.entityAddressObj = {
            urlConf: (Helper.getAppVar('route') + 'entities/entity-address/conf/0'),
            control: 'edit',
            popups: {
                module: EntityAddressEditExtModule,
                component: 'EntityAddressEditComponent',
                providers: [
                    {provide: 'Provider', useValue: Helper.getFormProvider({label: 'Address'})},
                    FormService
                ]
            }
        };

        let formProvider = this._helperService.getFormProvider(data);
        // To avoid conflicts between forms in steps of the wizard
        // (form should override object without notify user)
        formProvider['preventObjectOverride'] = false;

        return [
            {provide: 'DataService', useClass: DataService},
            {provide: 'ParentDataService', useValue: this._dataService},
            ActionsService,
            {provide: 'DataServiceProvider', useValue: this._helperService.getDataServiceProvider(data)},
            {provide: 'Provider', useValue: this._helperService.getDataBoxProvider(data)},
            {provide: 'ActionsServiceProvider', useValue: this._helperService.getActionsServiceProvider(data)},
            {provide: 'LegendProvider', useValue: this._helperService.getLegendProvider(data)},
            {provide: 'AutoCompleteProviders', useValue: autoCompleteProviders},
            // FormService needs to be here for AutoCompleteProviders, however it will be redefined in Popups
            // (so we can reuse the same AutoCompleteProviders for all injectors)
            FormService,
            {provide: 'Popups', useValue: {
                add: {
                    module: popupModules['add'],
                    component: 'FormPopupComponent',
                    providers: [
                        // Set field for wizard form first step
                        {provide: 'FormServiceProvider', useValue: {fields: popupAddFields}},
                        {provide: 'Provider', useValue: formProvider},
                        NavManagerService,
                        WizardManagerService,
                        {provide: 'WizardManagerServiceProvider', useValue: {rebuildNextStepComponents: true}},
                        // Each FormService has your own provider, so ween need different FormService for popup
                        FormService
                    ]
                },
                edit: {
                    module: popupModules['edit'],
                    component: 'FormPopupComponent',
                    providers: [{provide: 'Provider', useValue: this._helperService.getFormProvider(data)}],
                    FormService
                }
            }}
        ];
    }

    /**
     * Post (after) load callback
     * @param index
     * @param componentRef
     * @param injector
     */
    public postLoad(index: number, componentRef: any, injector: Injector): void
    {
        switch (index) {
            case 0:
                // Update booking invoice status after client documents change
                let dependencyDataService = injector.get('DataService');
                this._onDependencyObjectsChangeSubscription
                    = dependencyDataService.getOnObjectsChangeEmitter()
                    .subscribe(data => {
                        // Update local object
                        this._dataService.refreshObject();
                    });
                break;
        }

        return;
    }

    /**
     * Lifecycle callback
     */
    ngOnDestroy()
    {
        // Check subscription (if component load fail, subscription may not exist)
        if (this._onDependencyObjectsChangeSubscription) {
            this._onDependencyObjectsChangeSubscription.unsubscribe();
        }
    }
}