import {Component, Optional, ElementRef, Inject, Renderer, QueryList, ViewContainerRef, ViewChildren} from '@angular/core';
import {Helper} from '../../../../../../AppBundle/Resources/public/ts/helper';
import {TabsComponent, ITabs, LazyLoadData} from '../../../../../../AppBundle/Resources/public/ts/tabs/tabs.component';
import {NavManagerService} from '../../../../../../AppBundle/Resources/public/ts/nav-manager/nav-manager.service';
import {FormService} from '../../../../../../AppBundle/Resources/public/ts/form/form.service';
import {DataBoxExtensionModule} from '../../../../../../AppBundle/Resources/public/ts/data-box/data-box.extension-module';
import {DataService} from '../../../../../../AppBundle/Resources/public/ts/data-service/data.service';
import {ActionsService} from '../../../../../../AppBundle/Resources/public/ts/actions/actions.service';
import {ModalService} from '../../../../../../AppBundle/Resources/public/modal/ts/modal.service';

/* Import dependencies */
// Entities Setting
Helper.setRuntimeVar('templateUrl', Helper.getGlobalVar('route') + 'admin/settings/entities-menus');
import {EntitiesSettingExtModule} from './entities-setting.ext-module';

// BookingSetting
Helper.setRuntimeVar('templateUrl', Helper.getGlobalVar('route') + 'booking/booking-setting/edit');
import {BookingSettingFormPopupModule} from '../../../../../../BookingBundle/Resources/public/booking-setting/ts/booking-setting-form-popup.module';

// Document Types Setting
Helper.setRuntimeVar('templateUrl', Helper.getGlobalVar('route') + 'admin/settings/document-types-menus');
import {DocumentTypesSettingExtModule} from './document-types-setting.ext-module';
/* /Import dependencies */


@Component({
    selector: '#js_main',
    templateUrl: Helper.getGlobalVar('route') + 'admin/settings/main-menus'
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
        this._dependenciesData = this._helperService.getGlobalVar('dependency');
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
                    module: EntitiesSettingExtModule,
                    component: 'EntitiesSettingComponent'
                };
            case 1:
                return {
                    module: DataBoxExtensionModule,
                    component: 'DataBoxComponent',
                    urlProvider: (this._helperService.getGlobalVar('route') + 'booking/booking-setting/data')
                };
            case 2:
                return {
                    module: DocumentTypesSettingExtModule,
                    component: 'DocumentTypesSettingComponent'
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
        switch (index) {
            case 0:
                return [
                    NavManagerService
                ];
            case 1:
                return [
                    FormService,
                    {provide: 'DataService', useClass: DataService},
                    ActionsService,
                    {provide: 'DataServiceProvider', useValue: this._helperService.getDataServiceProvider(data)},
                    {provide: 'Provider', useValue: this._helperService.getDataBoxProvider(data)},
                    {provide: 'ActionsServiceProvider', useValue: this._helperService.getActionsServiceProvider(data)},
                    {provide: 'Popups', useValue: {
                        module: BookingSettingFormPopupModule,
                        component: 'BookingSettingFormPopupComponent',
                        providers: [{provide: 'Provider', useValue: this._helperService.getFormProvider(data)}]
                    }}
                ];
            case 2:
                return [
                    NavManagerService
                ];
        }

        return null;
    }

    /**
     * Lifecycle callback
     */
    ngAfterViewInit()
    {
        super.ngAfterViewInit();

        // Open the first tab
        this._navManagerService.navTo(0);
    }
}