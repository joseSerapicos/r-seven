import {Component, Optional, ElementRef, Inject, Injector, Renderer, QueryList, ViewContainerRef, ViewChildren} from '@angular/core';
import {Helper} from '../../../../../../AppBundle/Resources/public/ts/helper';
import {AccordionComponent, IAccordion, LazyLoadData} from '../../../../../../AppBundle/Resources/public/accordion/ts/accordion.component';
import {NavManagerService} from '../../../../../../AppBundle/Resources/public/ts/nav-manager/nav-manager.service';
import {WizardManagerService} from '../../../../../../AppBundle/Resources/public/ts/wizard/wizard-manager.service';
import {FormService} from '../../../../../../AppBundle/Resources/public/ts/form/form.service';
import {DataBoxExtensionModule} from '../../../../../../AppBundle/Resources/public/ts/data-box/data-box.extension-module';
import {DataService} from '../../../../../../AppBundle/Resources/public/ts/data-service/data.service';
import {ActionsService} from '../../../../../../AppBundle/Resources/public/ts/actions/actions.service';

/* Import dependencies */
// Save last templateUrl
let tmpTemplateUrl = Helper.getRuntimeVar('templateUrl');

var parentId = Helper.getGlobalVar('conf')['object']['id'],
    parentController = Helper.getGlobalVar('conf')['localData']['controller']; // Determines the type of booking

// ClientDocument
// Add
Helper.setRuntimeVar('templateUrl', Helper.getGlobalVar('route') + 'booking/' + parentController + '-client-document/add/' + parentId);
import {ClientDocumentAddFormPopupExtModule} from '../../../../../../AccountingBundle/Resources/public/client-document/add/ts/client-document-add-form-popup.ext-module';
// Edit
import {ClientDocumentEditFormPopupExtModule} from '../../../../../../AccountingBundle/Resources/public/client-document/edit/ts/client-document-edit-form-popup.ext-module';
// Auto-complete
Helper.setRuntimeVar('templateUrl', Helper.getGlobalVar('route') + 'entities/entity-address/edit/0'); // No parent defined
import {EntityAddressPopupModule} from '../../../../../../EntitiesBundle/Resources/public/entity/detail/ts/entity-address-popup.module';

// SupplierDocument
Helper.setRuntimeVar('templateUrl', Helper.getGlobalVar('route') + 'booking/' + parentController + '-supplier-document/edit/' + parentId);
import {SupplierDocumentFormPopupExtModule} from '../../../../../../AccountingBundle/Resources/public/supplier-document/ts/supplier-document-form-popup.ext-module';

// Restore last templateUrl
Helper.setRuntimeVar('templateUrl', tmpTemplateUrl);
/* /Import dependencies */


@Component({
    selector: '.js_currentAccounts',
    templateUrl: Helper.getRuntimeVar('templateUrl')
})
export class CurrentAccountsComponent extends AccordionComponent implements IAccordion
{
    // For NavManagerService
    @ViewChildren('js_lazyLoadContainer', {read: ViewContainerRef}) lazyLoadViewContainerRefQL: QueryList<ViewContainerRef>;

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
        let data = {
            module: DataBoxExtensionModule,
            component: 'DataBoxComponent'
        };

        switch (index) {
            case 0:
                data['urlProvider'] = (this._helperService.getGlobalVar('route') + 'booking/' + parentController + '-client-document/data/' + parentId);
                break;
            case 1:
                data['urlProvider'] = (this._helperService.getGlobalVar('route') + 'booking/' + parentController + '-supplier-document/data/' + parentId);
                break;
        }

        return data;
    }

    /**
     * Get nav providers (to lazy load components in container with dependency injection)
     * @param index (index to load)
     * @param data (data to resolve all providers)
     * @returns {Array}
     */
    public getNavProviders(index: number, data = null): any
    {
        let autoCompleteProviders = this._injector.get('AutoCompleteProviders');
        autoCompleteProviders.entityAddressObj = {
            urlConf: (Helper.getGlobalVar('route') + 'entities/entity-address/conf/0'),
            control: 'edit',
            popups: {
                module: EntityAddressPopupModule,
                component: 'EntityAddressPopupComponent',
                providers: [
                    {provide: 'Provider', useValue: Helper.getFormProvider({label: 'Address'})},
                    FormService
                ]
            }
        };

        let providers: any[] = [
            {provide: 'DataService', useClass: DataService},
            {provide: 'ParentDataService', useValue: this._dataService},
            ActionsService,
            {provide: 'DataServiceProvider', useValue: this._helperService.getDataServiceProvider(data)},
            {provide: 'Provider', useValue: this._helperService.getDataBoxProvider(data)},
            {provide: 'ActionsServiceProvider', useValue: this._helperService.getActionsServiceProvider(data)},
            {provide: 'AutoCompleteProviders', useValue: autoCompleteProviders},
            // FormService needs to be here for AutoCompleteProviders, however it will be redefined in Popups
            // (so we can reuse the same AutoCompleteProviders for all injectors)
            FormService
        ];

        switch (index) {
            case 0:
                let formProvider = this._helperService.getFormProvider(data);
                // To avoid conflicts between forms in steps of the wizard
                // (form should override object without notify user)
                formProvider['preventObjectOverride'] = false;
                providers.push({provide: 'Popups', useValue: {
                    add: {
                        module: ClientDocumentAddFormPopupExtModule,
                        component: 'ClientDocumentAddFormPopupComponent',
                        providers: [
                            // Set field for wizard form first step
                            {provide: 'FormServiceProvider', useValue: {fields: ['clientDocumentTypeObj', 'clientObj']}},
                            {provide: 'Provider', useValue: formProvider},
                            NavManagerService,
                            WizardManagerService,
                            {provide: 'WizardManagerServiceProvider', useValue: {rebuildNextStepComponents: true}},
                            // Each FormService has your own provider, so ween need different FormService for popup
                            FormService
                        ]
                    },
                    edit: {
                        module: ClientDocumentEditFormPopupExtModule,
                        component: 'ClientDocumentEditFormPopupComponent',
                        providers: [{provide: 'Provider', useValue: this._helperService.getFormProvider(data)}],
                        FormService
                    }
                }});
                break;
            case 1:
                providers.push({provide: 'Popups', useValue: {
                    module: SupplierDocumentFormPopupExtModule,
                    component: 'SupplierDocumentFormPopupComponent',
                    providers: [{provide: 'Provider', useValue: this._helperService.getFormProvider(data)}]
                }});
                break;
        }

        return providers;
    }
}