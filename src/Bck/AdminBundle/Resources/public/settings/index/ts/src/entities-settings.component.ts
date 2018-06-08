import {Component, Optional, ElementRef, Inject, Renderer, QueryList, ViewContainerRef, ViewChildren} from '@angular/core';
import {AccordionComponent, IAccordion, LazyLoadData} from '../../../../../../../../AppBundle/Resources/public/accordion/ts/src/accordion.component';
import {NavManagerService} from '../../../../../../../../AppBundle/Resources/public/ts/nav-manager/nav-manager.service';
import {FormService} from '../../../../../../../../AppBundle/Resources/public/form/ts/form.service';
import {DataBoxExtensionModule} from '../../../../../../../../AppBundle/Resources/public/data-box/ts/src/data-box.extension-module';
import {DataService} from '../../../../../../../../AppBundle/Resources/public/ts/data-service/data.service';
import {ActionsService} from '../../../../../../../../AppBundle/Resources/public/ts/actions/actions.service';

// ClientSetting
import {EditExtModule as EntitiesClientSettingEditExtModule} from '../../../../../../../EntitiesBundle/Resources/public/client-setting/index/ts/src/edit.ext-module';
// SupplierSetting
import {EditExtModule as EntitiesSupplierSettingEditExtModule} from '../../../../../../../EntitiesBundle/Resources/public/supplier-setting/index/ts/src/edit.ext-module';
// EntitySetting
import {EditExtModule as EntitiesEntitySettingEditExtModule} from '../../../../../../../EntitiesBundle/Resources/public/entity-setting/index/ts/src/edit.ext-module';


@Component({
    selector: '.js_entitiesSetting',
    templateUrl: '../templates/entities-settings.component.html'
})
export class EntitiesSettingsComponent extends AccordionComponent implements IAccordion
{
    // For NavManagerService
    @ViewChildren('js_lazyLoadContainer', {read: ViewContainerRef}) lazyLoadViewContainerRefQL: QueryList<ViewContainerRef>;

    protected _dependenciesData: any[];

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
        
        this._dependenciesData = (this._helperService.getAppVar('dependencies') || []);
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
                data['dataProvider'] = this._dependenciesData['clientSetting'];
                break;
            case 1:
                data['dataProvider'] = this._dependenciesData['supplierSetting'];
                break;
            case 2:
                data['dataProvider'] = this._dependenciesData['entitySetting'];
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
                    module: EntitiesClientSettingEditExtModule,
                    component: 'EditComponent',
                    providers: [{provide: 'Provider', useValue: this._helperService.getFormProvider(data)}]
                }});
                break;
            case 1:
                providers.push({provide: 'Popups', useValue: {
                    module: EntitiesSupplierSettingEditExtModule,
                    component: 'EditComponent',
                    providers: [{provide: 'Provider', useValue: this._helperService.getFormProvider(data)}]
                }});
                break;
            case 2:
                providers.push({provide: 'Popups', useValue: {
                    module: EntitiesEntitySettingEditExtModule,
                    component: 'EditComponent',
                    providers: [{provide: 'Provider', useValue: this._helperService.getFormProvider(data)}]
                }});
                break;
        }

        return providers;
    }
}