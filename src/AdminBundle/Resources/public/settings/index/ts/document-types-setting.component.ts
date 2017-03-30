import {Component, Optional, ElementRef, Inject, Renderer, QueryList, ViewContainerRef, ViewChildren} from '@angular/core';
import {Helper} from '../../../../../../AppBundle/Resources/public/ts/helper';
import {AccordionComponent, IAccordion, LazyLoadData} from '../../../../../../AppBundle/Resources/public/accordion/ts/accordion.component';
import {NavManagerService} from '../../../../../../AppBundle/Resources/public/ts/nav-manager/nav-manager.service';
import {FormService} from '../../../../../../AppBundle/Resources/public/ts/form/form.service';
import {DataBoxExtensionModule} from '../../../../../../AppBundle/Resources/public/ts/data-box/data-box.extension-module';
import {DataService} from '../../../../../../AppBundle/Resources/public/ts/data-service/data.service';
import {ActionsService} from '../../../../../../AppBundle/Resources/public/ts/actions/actions.service';

/* Import dependencies */
// EntitySetting
Helper.setRuntimeVar('templateUrl', Helper.getGlobalVar('route') + 'accounting/client-document-type-setting/edit');
import {ClientDocumentTypeSettingFormPopupExtModule} from '../../../../../../AccountingBundle/Resources/public/client-document-type-setting/ts/client-document-type-setting-form-popup.ext-module';

// ClientSetting
Helper.setRuntimeVar('templateUrl', Helper.getGlobalVar('route') + 'accounting/supplier-document-type-setting/edit');
import {SupplierDocumentTypeSettingFormPopupExtModule} from '../../../../../../AccountingBundle/Resources/public/supplier-document-type-setting/ts/supplier-document-type-setting-form-popup.ext-module';

// SupplierSetting
Helper.setRuntimeVar('templateUrl', Helper.getGlobalVar('route') + 'accounting/entity-document-type-setting/edit');
import {EntityDocumentTypeSettingFormPopupExtModule} from '../../../../../../AccountingBundle/Resources/public/entity-document-type-setting/ts/entity-document-type-setting-form-popup.ext-module';
/* /Import dependencies */


@Component({
    selector: '.js_documentTypesSetting',
    templateUrl: Helper.getGlobalVar('route') + 'admin/settings/document-types-menus'
})
export class DocumentTypesSettingComponent extends AccordionComponent implements IAccordion
{
    // For NavManagerService
    @ViewChildren('js_lazyLoadContainer', {read: ViewContainerRef}) lazyLoadViewContainerRefQL: QueryList<ViewContainerRef>;

    constructor(
        elementRef: ElementRef,
        renderer: Renderer,
        @Optional() @Inject('Provider') provider: any,
        @Inject('HelperService') helperService: any,
        navManagerService: NavManagerService
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
                data['urlProvider'] = (this._helperService.getGlobalVar('route') + 'accounting/client-document-type-setting/data');
                break;
            case 1:
                data['urlProvider'] = (this._helperService.getGlobalVar('route') + 'accounting/supplier-document-type-setting/data');
                break;
            case 2:
                data['urlProvider'] = (this._helperService.getGlobalVar('route') + 'accounting/entity-document-type-setting/data');
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
        let providers: any[] = [
            FormService,
            {provide: 'DataService', useClass: DataService},
            ActionsService,
            {provide: 'DataServiceProvider', useValue: this._helperService.getDataServiceProvider(data)},
            {provide: 'Provider', useValue: this._helperService.getDataBoxProvider(data)},
            {provide: 'ActionsServiceProvider', useValue: this._helperService.getActionsServiceProvider(data)}
        ];

        switch (index) {
            case 0:
                providers.push({provide: 'Popups', useValue: {
                    module: ClientDocumentTypeSettingFormPopupExtModule,
                    component: 'ClientDocumentTypeSettingFormPopupComponent',
                    providers: [{provide: 'Provider', useValue: this._helperService.getFormProvider(data)}]
                }});
                break;
            case 1:
                providers.push({provide: 'Popups', useValue: {
                    module: SupplierDocumentTypeSettingFormPopupExtModule,
                    component: 'SupplierDocumentTypeSettingFormPopupComponent',
                    providers: [{provide: 'Provider', useValue: this._helperService.getFormProvider(data)}]
                }});
                break;
            case 2:
                providers.push({provide: 'Popups', useValue: {
                    module: EntityDocumentTypeSettingFormPopupExtModule,
                    component: 'EntityDocumentTypeSettingFormPopupComponent',
                    providers: [{provide: 'Provider', useValue: this._helperService.getFormProvider(data)}]
                }});
                break;
        }

        return providers;
    }
}