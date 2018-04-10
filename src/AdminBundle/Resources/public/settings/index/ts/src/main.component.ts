import {Component, Optional, ElementRef, Inject, Renderer, QueryList, ViewContainerRef, ViewChildren} from '@angular/core';
import {TabsComponent, ITabs, LazyLoadData} from '../../../../../../../AppBundle/Resources/public/tabs/ts/src/tabs.component';
import {NavManagerService} from '../../../../../../../AppBundle/Resources/public/ts/nav-manager/nav-manager.service';
import {FormService} from '../../../../../../../AppBundle/Resources/public/form/ts/form.service';
import {DataBoxExtensionModule} from '../../../../../../../AppBundle/Resources/public/data-box/ts/src/data-box.extension-module';
import {DataService} from '../../../../../../../AppBundle/Resources/public/ts/data-service/data.service';
import {ActionsService} from '../../../../../../../AppBundle/Resources/public/ts/actions/actions.service';
import {ModalService} from '../../../../../../../AppBundle/Resources/public/modal/ts/modal.service';

// Entities Setting
import {EntitiesSettingsExtModule} from './entities-settings.ext-module';
// BookingSetting
import {EditExtModule as BookingBookingSettingEdit} from '../../../../../../../BookingBundle/Resources/public/booking-setting/index/ts/src/edit.ext-module';
// Document Types Setting
import {DocumentTypesSettingsExtModule} from './document-types-settings.ext-module';


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
        this._dependenciesData = this._helperService.getAppVar('dependency');
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
                    urlProvider: (this._helperService.getAppVar('route') + 'booking/booking-setting/data')
                };
            case 2:
                return {
                    module: DocumentTypesSettingsExtModule,
                    component: 'DocumentTypesSettingsComponent'
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
                    {provide: 'LegendProvider', useValue: this._helperService.getLegendProvider(data)},
                    {provide: 'Popups', useValue: {
                        module: BookingBookingSettingEdit,
                        component: 'EditComponent',
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