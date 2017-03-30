import {Component, Optional, ElementRef, Inject, Renderer, QueryList, ViewContainerRef, ViewChildren} from '@angular/core';
import {Helper} from '../../../../../../AppBundle/Resources/public/ts/helper';
import {AccordionComponent, IAccordion, LazyLoadData} from '../../../../../../AppBundle/Resources/public/accordion/ts/accordion.component';
import {NavManagerService} from '../../../../../../AppBundle/Resources/public/ts/nav-manager/nav-manager.service';
import {FormService} from '../../../../../../AppBundle/Resources/public/ts/form/form.service';
import {DataBoxExtensionModule} from '../../../../../../AppBundle/Resources/public/ts/data-box/data-box.extension-module';
import {DataService} from '../../../../../../AppBundle/Resources/public/ts/data-service/data.service';
import {ActionsService} from '../../../../../../AppBundle/Resources/public/ts/actions/actions.service';

/* Import dependencies */
// ClientSetting
Helper.setRuntimeVar('templateUrl', Helper.getGlobalVar('route') + 'entities/client-setting/edit');
import {ClientSettingFormPopupModule} from '../../../../../../EntitiesBundle/Resources/public/client-setting/ts/client-setting-form-popup.module';

// SupplierSetting
Helper.setRuntimeVar('templateUrl', Helper.getGlobalVar('route') + 'entities/supplier-setting/edit');
import {SupplierSettingFormPopupModule} from '../../../../../../EntitiesBundle/Resources/public/supplier-setting/ts/supplier-setting-form-popup.module';

// EntitySetting
Helper.setRuntimeVar('templateUrl', Helper.getGlobalVar('route') + 'entities/entity-setting/edit');
import {EntitySettingFormPopupModule} from '../../../../../../EntitiesBundle/Resources/public/entity-setting/ts/entity-setting-form-popup.module';

/* /Import dependencies */


@Component({
    selector: '.js_entitiesSetting',
    templateUrl: Helper.getGlobalVar('route') + 'admin/settings/entities-menus'
})
export class EntitiesSettingComponent extends AccordionComponent implements IAccordion
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
        
        this._dependenciesData = (this._helperService.getGlobalVar('dependency') || []);
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
            {provide: 'ActionsServiceProvider', useValue: this._helperService.getActionsServiceProvider(data)}
        ];

        switch (index) {
            case 0:
                providers.push({provide: 'Popups', useValue: {
                    module: ClientSettingFormPopupModule,
                    component: 'ClientSettingFormPopupComponent',
                    providers: [{provide: 'Provider', useValue: this._helperService.getFormProvider(data)}]
                }});
                break;
            case 1:
                providers.push({provide: 'Popups', useValue: {
                    module: SupplierSettingFormPopupModule,
                    component: 'SupplierSettingFormPopupComponent',
                    providers: [{provide: 'Provider', useValue: this._helperService.getFormProvider(data)}]
                }});
                break;
            case 2:
                providers.push({provide: 'Popups', useValue: {
                    module: EntitySettingFormPopupModule,
                    component: 'EntitySettingFormPopupComponent',
                    providers: [{provide: 'Provider', useValue: this._helperService.getFormProvider(data)}]
                }});
                break;
        }

        return providers;
    }
}