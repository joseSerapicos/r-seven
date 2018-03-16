import {Component, ElementRef, Injector, Inject, Renderer, QueryList, ViewContainerRef, ViewChildren} from '@angular/core';
import {DataService} from '../../../../../../../AppBundle/Resources/public/ts/data-service/data.service';
import {ActionsService} from '../../../../../../../AppBundle/Resources/public/ts/actions/actions.service';
import {Helper} from '../../../../../../../AppBundle/Resources/public/ts/helper';
import {ModalService} from '../../../../../../../AppBundle/Resources/public/modal/ts/modal.service';
import {FormService} from '../../../../../../../AppBundle/Resources/public/ts/form/form.service';
import {NavManagerService} from '../../../../../../../AppBundle/Resources/public/ts/nav-manager/nav-manager.service';
import {WizardManagerService} from '../../../../../../../AppBundle/Resources/public/wizard/ts/src/wizard-manager.service';
import {TabsExtComponent, ITabs, LazyLoadData, BaseProvider} from '../../../../../../../AppBundle/Resources/public/tabs/ts/src/tabs.ext-component';


// Interface provider
export interface BaseBookingDetailProvider extends BaseProvider {
    modules: { // Put here modules dependencies
        bookingPaxEdit: {module: any, component: string},
        bookingServiceAddStep1: {module: any, component: string},
        bookingServiceEdit: {module: any, component: string},
        currentAccounts: {module: any, component: string}
    }
}


/* Import dependencies */

// Parent id for dependencies
var bookingContext = Helper.getAppVar('conf')['localData']['data']['bookingContext']; // Determines the type of booking

// BookingPax
import {BookingPaxExtModule} from '../../../../base-booking-pax/index/ts/src/booking-pax.ext-module';
// BookingService
import {BookingServiceExtModule} from '../../../../base-booking-service/index/ts/src/booking-service.ext-module';
// BookingObservation
import {ObservationExtModule} from '../../../../../../../AppBundle/Resources/public/observation/ts/src/observation.ext-module';
import {EditExtModule as BookingObservationEditExtModule} from '../../../../booking-observation/index/ts/src/edit.ext-module';
// BookingFile
import {FileExtModule} from '../../../../../../../AppBundle/Resources/public/file/ts/src/file.ext-module';
import {EditExtModule as BookingFileEditExtModule} from '../../../../booking-file/index/ts/src/edit.ext-module';

/* /Import dependencies */


@Component({
    selector: '.js_app',
    template: '' // Define template in child component
})
export class MainComponent extends TabsExtComponent implements ITabs
{
    protected _dependenciesData: any[];

    constructor(
        elementRef: ElementRef,
        renderer: Renderer,
        @Inject('Provider') provider: BaseBookingDetailProvider,
        @Inject('HelperService') helperService: any,
        navManagerService: NavManagerService,
        protected _modalService: ModalService,
        protected viewContainerRef: ViewContainerRef,
        @Inject('DataService') protected _dataService: any,
        protected _injector: Injector
    ) {
        super();
        super.initTabsExtComponent(
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
        let booking = this._dataService.getObject()['bookingObj'];

        switch (index) {
            case 0:
                return {
                    module: BookingPaxExtModule,
                    component: 'BookingPaxComponent',
                    dataProvider: this._dependenciesData['bookingPax']
                };
            case 1:
                return {
                    module: BookingServiceExtModule,
                    component: 'BookingServiceComponent',
                    urlProvider: (this._helperService.getAppVar('route') + 'booking/' + bookingContext + '-booking-service/data/' + booking)
                };
            case 2:
                return {
                    module: this._provider['modules']['currentAccounts']['module'],
                    component: this._provider['modules']['currentAccounts']['component'],
                };
            case 3:
                return {
                    module: ObservationExtModule,
                    component: 'ObservationComponent',
                    urlProvider: (this._helperService.getAppVar('route') + 'booking/booking-observation/data/' + booking)
                };
            case 4:
                return {
                    module: FileExtModule,
                    component: 'FileComponent',
                    urlProvider: (this._helperService.getAppVar('route') + 'booking/booking-file/data/' + booking)
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
                providers = [
                    {provide: 'Provider', useValue: this._helperService.getDataBoxProvider(data)},
                    {provide: 'Popups', useValue: {
                        module: this._provider['modules']['bookingPaxEdit']['module'],
                        component: this._provider['modules']['bookingPaxEdit']['component'],
                        providers: [
                            FormService,
                            {provide: 'Provider', useValue: this._helperService.getFormProvider(data)}
                        ]
                    }},
                    {provide: 'LegendProvider', useValue: this._helperService.getLegendProvider(data)},
                    {provide: 'ParentDataService', useValue: this._dataService}
                ];
                break;
            case 1:
                // Merge the providers to get the complete "BaseBookingServiceEditProvider"
                let editProvider = this._helperService.getFormProvider(data),
                    editProviderModules = this._injector.get('BaseBookingServiceEditProvider');
                editProvider['modules'] = editProviderModules['modules'];

                // Merge the providers to get the complete "BaseBookingServiceAddProvider"
                let addProvider = this._helperService.getWizardPopupProvider(data),
                    baseBookingServiceAddProvider = this._injector.get('BaseBookingServiceAddProvider');
                addProvider = this._helperService.mergeObjects(addProvider, baseBookingServiceAddProvider);

                providers = [
                    {provide: 'Provider', useValue: this._helperService.getDataBoxProvider(data)},
                    {provide: 'Popups', useValue: {
                        'add': {
                            module: this._provider['modules']['bookingServiceAddStep1']['module'],
                            component: this._provider['modules']['bookingServiceAddStep1']['component'],
                            providers: [
                                // Set field for wizard form first step
                                {provide: 'FormServiceProvider', useValue: {fields: ['serviceObj']}},
                                {provide: 'Provider', useValue: addProvider},
                                NavManagerService,
                                WizardManagerService,
                                FormService
                            ]
                        },
                        'edit': {
                            module: this._provider['modules']['bookingServiceEdit']['module'],
                            component: this._provider['modules']['bookingServiceEdit']['component'],
                            providers: [
                                FormService,
                                {provide: 'Provider', useValue: editProvider}
                            ]
                        }
                    }},
                    {provide: 'LegendProvider', useValue: this._helperService.getLegendProvider(data)},
                    {provide: 'ParentDataService', useValue: this._dataService}
                ];
                break;
            case 2:
                return [
                    NavManagerService
                ];
            case 3:
                providers = [
                    {provide: 'Provider', useValue: this._helperService.getDataBoxProvider(data)},
                    {provide: 'Popups', useValue: {
                        module: BookingObservationEditExtModule,
                        component: 'EditComponent',
                        providers: [
                            FormService,
                            {provide: 'Provider', useValue: this._helperService.getFormProvider(data)}
                        ]
                    }}
                ];
                break;
            case 4:
                providers = [
                    {provide: 'Provider', useValue: this._helperService.getDataBoxProvider(data)},
                    {provide: 'Popups', useValue: {
                        module: BookingFileEditExtModule,
                        component: 'EditComponent',
                        providers: [
                            {provide: 'FileFormProvider', useValue: {
                                label: data['label'],
                                url: data['route']['edit']['url']
                            }}
                        ]
                    }}
                ];
                break;
        }

        providers = providers.concat([
            {provide: 'DataService', useClass: DataService},
            ActionsService,
            {provide: 'DataServiceProvider', useValue: this._helperService.getDataServiceProvider(data)},
            {provide: 'ActionsServiceProvider', useValue: this._helperService.getActionsServiceProvider(data)}
        ]);

        return providers;
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