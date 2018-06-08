import {Component, Optional, ElementRef, Inject, Renderer, QueryList, ViewContainerRef, ViewChildren} from '@angular/core';
import {TabsComponent, ITabs, LazyLoadData} from '../../../../../../../../AppBundle/Resources/public/tabs/ts/src/tabs.component';
import {NavManagerService} from '../../../../../../../../AppBundle/Resources/public/ts/nav-manager/nav-manager.service';
import {FormService} from '../../../../../../../../AppBundle/Resources/public/form/ts/form.service';
import {DataBoxExtensionModule} from '../../../../../../../../AppBundle/Resources/public/data-box/ts/src/data-box.extension-module';
import {DataService} from '../../../../../../../../AppBundle/Resources/public/ts/data-service/data.service';
import {ActionsService} from '../../../../../../../../AppBundle/Resources/public/ts/actions/actions.service';
import {ModalService} from '../../../../../../../../AppBundle/Resources/public/modal/ts/modal.service';

// Entities Setting
import {EntitiesSettingsExtModule} from './entities-settings.ext-module';
// BookingSetting
import {EditExtModule as BookingBookingSettingEdit} from '../../../../../../../BookingBundle/Resources/public/booking-setting/index/ts/src/edit.ext-module';
// Document Types Setting
import {DocumentTypesSettingsExtModule} from './document-types-settings.ext-module';
// FrtSetting
import {EditExtModule as AdminFrtSettingEdit} from '../../../../../../../AdminBundle/Resources/public/frt-setting/index/ts/src/edit.ext-module';
// EmbedFrtSetting
import {EditExtModule as AdminEmbedFrtSettingEdit} from '../../../../../../../AdminBundle/Resources/public/embed-frt-setting/index/ts/src/edit.ext-module';
// SystemSetting
import {EditExtModule as AdminSystemSettingEdit} from '../../../../../../../AdminBundle/Resources/public/system-setting/index/ts/src/edit.ext-module';


@Component({
    selector: '#js_main',
    templateUrl: '../templates/main.component.html'
})
export class MainComponent extends TabsComponent implements ITabs
{
    protected _dependenciesData: any[];

    constructor(
        elementRef: ElementRef,
        renderer: Renderer,
        @Inject('Provider') provider: any,
        @Inject('HelperService') helperService: any,
        navManagerService: NavManagerService,
        protected _modalService: ModalService,
        protected viewContainerRef: ViewContainerRef
    ) {
        super(
            elementRef,
            renderer,
            provider,
            helperService,
            navManagerService
        );

        this._modalService.init(viewContainerRef);
        this._dependenciesData = this._helperService.getAppVar('dependencies');
    }

    /**
     * Get navigation data (needed data to lazy load container)
     * @param index (index to load)
     * @returns NavData
     */
    public getNavData(index: number): LazyLoadData
    {
        switch (index) {
            case 0:
                return {
                    module: EntitiesSettingsExtModule,
                    component: 'EntitiesSettingsComponent'
                };
            case 1:
                return {
                    module: DataBoxExtensionModule,
                    component: 'DataBoxComponent',
                    urlProvider: (this._helperService.getAppVar('route') + 'bck/booking/booking-setting/data')
                };
            case 2:
                return {
                    module: DocumentTypesSettingsExtModule,
                    component: 'DocumentTypesSettingsComponent'
                };
            case 3:
                return {
                    module: AdminFrtSettingEdit,
                    component: 'EditComponent',
                    urlProvider: (this._helperService.getAppVar('route') + 'bck/admin/frt-setting/conf/1')
                };
            case 4:
                return {
                    module: DataBoxExtensionModule,
                    component: 'DataBoxComponent',
                    urlProvider: (this._helperService.getAppVar('route') + 'bck/admin/embed-frt-setting/data')
                };
            case 5:
                return {
                    module: AdminSystemSettingEdit,
                    component: 'EditComponent',
                    urlProvider: (this._helperService.getAppVar('route') + 'bck/admin/system-setting/conf/1')
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
        let providers = [];

        switch (index) {
            case 0:
                return [
                    NavManagerService
                ];
            case 1:
                providers = [
                    {provide: 'Popups', useValue: {
                        module: BookingBookingSettingEdit,
                        component: 'EditComponent',
                        providers: [{provide: 'Provider', useValue: this._helperService.getFormProvider(data)}]
                    }}
                ];
                break;
            case 2:
                return [
                    NavManagerService
                ];
            case 3:
            case 5:
                return [
                    {provide: 'DataService', useClass: DataService},
                    {provide: 'DataServiceProvider', useValue: this._helperService.getDataServiceProvider(data)},
                    FormService,
                    {provide: 'Provider', useValue: this._helperService.getFormProvider(data)}
                ];
            case 4:
                providers = [
                    {provide: 'Popups', useValue: {
                        module: AdminEmbedFrtSettingEdit,
                        component: 'EditComponent',
                        providers: [{provide: 'Provider', useValue: this._helperService.getFormProvider(data)}]
                    }}
                ];
                break;
        }

        providers = providers.concat([
            FormService,
            {provide: 'DataService', useClass: DataService},
            ActionsService,
            {provide: 'DataServiceProvider', useValue: this._helperService.getDataServiceProvider(data)},
            {provide: 'Provider', useValue: this._helperService.getDataBoxProvider(data)},
            {provide: 'ActionsServiceProvider', useValue: this._helperService.getActionsServiceProvider(data)},
            {provide: 'LegendProvider', useValue: this._helperService.getLegendProvider(data)}
        ]);

        return providers;
    }
}