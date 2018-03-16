import {Component, Optional, ElementRef, Inject, Renderer, QueryList, ViewContainerRef, ViewChildren} from '@angular/core';
import {AccordionComponent, IAccordion, LazyLoadData} from '../../../../../../../AppBundle/Resources/public/accordion/ts/src/accordion.component';
import {NavManagerService} from '../../../../../../../AppBundle/Resources/public/ts/nav-manager/nav-manager.service';
import {FormService} from '../../../../../../../AppBundle/Resources/public/ts/form/form.service';
import {DataBoxExtensionModule} from '../../../../../../../AppBundle/Resources/public/data-box/ts/src/data-box.extension-module';
import {DataService} from '../../../../../../../AppBundle/Resources/public/ts/data-service/data.service';
import {ActionsService} from '../../../../../../../AppBundle/Resources/public/ts/actions/actions.service';

// EntitySetting
import {EditExtModule as AccountingClientDocumentTypeSettingEditExtModule} from '../../../../../../../AccountingBundle/Resources/public/client-document-type-setting/index/ts/src/edit.ext-module';
// ClientSetting
import {EditExtModule as AccountingSupplierDocumentTypeSettingEditExtModule} from '../../../../../../../AccountingBundle/Resources/public/supplier-document-type-setting/index/ts/src/edit.ext-module';


@Component({
    selector: '.js_documentTypesSetting',
    templateUrl: '../templates/document-types-settings.component.html'
})
export class DocumentTypesSettingsComponent extends AccordionComponent implements IAccordion
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
                data['urlProvider'] = (this._helperService.getAppVar('route') + 'accounting/client-document-type-setting/data');
                break;
            case 1:
                data['urlProvider'] = (this._helperService.getAppVar('route') + 'accounting/supplier-document-type-setting/data');
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
            {provide: 'ActionsServiceProvider', useValue: this._helperService.getActionsServiceProvider(data)},
            {provide: 'LegendProvider', useValue: this._helperService.getLegendProvider(data)}
        ];

        switch (index) {
            case 0:
                providers.push({provide: 'Popups', useValue: {
                    module: AccountingClientDocumentTypeSettingEditExtModule,
                    component: 'EditComponent',
                    providers: [{provide: 'Provider', useValue: this._helperService.getFormProvider(data)}]
                }});
                break;
            case 1:
                providers.push({provide: 'Popups', useValue: {
                    module: AccountingSupplierDocumentTypeSettingEditExtModule,
                    component: 'EditComponent',
                    providers: [{provide: 'Provider', useValue: this._helperService.getFormProvider(data)}]
                }});
                break;
        }

        return providers;
    }
}