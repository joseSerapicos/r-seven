import {Component, ElementRef, Injector, Inject, Renderer, QueryList, ViewContainerRef, ViewChildren} from '@angular/core';
import {DataService} from '../../../../../../AppBundle/Resources/public/ts/data-service/data.service';
import {ActionsService} from '../../../../../../AppBundle/Resources/public/ts/actions/actions.service';
import {Helper} from '../../../../../../AppBundle/Resources/public/ts/helper';
import {ModalService} from '../../../../../../AppBundle/Resources/public/modal/ts/modal.service';
import {FormService} from '../../../../../../AppBundle/Resources/public/ts/form/form.service';
import {NavManagerService} from '../../../../../../AppBundle/Resources/public/ts/nav-manager/nav-manager.service';
import {WizardManagerService} from '../../../../../../AppBundle/Resources/public/ts/wizard/wizard-manager.service';
import {TabsComponent, ITabs, LazyLoadData} from '../../../../../../AppBundle/Resources/public/ts/tabs/tabs.component';
import {AutoCompleteProviders} from '../../../../../../AppBundle/Resources/public/ts/form/field-types/field-type-auto-complete.component';


/* Import dependencies */
// Parent id of dependencies
var parentId = Helper.getGlobalVar('conf')['object']['id'],
    parentController = Helper.getGlobalVar('conf')['localData']['controller']; // Determines the type of booking

// BookingPax
import {BookingPaxExtensionModule} from '../../../base-booking-pax/ts/booking-pax.extension-module';
Helper.setRuntimeVar('templateUrl', Helper.getGlobalVar('route') + 'booking/' + parentController + '-pax/edit/' + parentId);
import {BookingPaxFormPopupExtensionModule} from '../../../base-booking-pax/ts/booking-pax-form-popup.extension-module';

// BookingService
import {BookingServiceExtensionModule} from '../../../base-booking-service/index/ts/booking-service.extension-module';
Helper.setRuntimeVar('templateUrl', Helper.getGlobalVar('route') + 'booking/' + parentController + '-service/add/' + parentId);
import {BookingServiceAddFormPopupExtensionModule} from '../../../base-booking-service/add/ts/booking-service-add-form-popup.extension-module';
Helper.setRuntimeVar('templateUrl', Helper.getGlobalVar('route') + 'booking/' + parentController + '-service/edit/' + parentId);
import {BookingServiceEditFormPopupExtensionModule} from '../../../base-booking-service/edit/ts/booking-service-edit-form-popup.extension-module';
// Auto-complete
Helper.setRuntimeVar('templateUrl', Helper.getGlobalVar('route') + 'booking/place/edit');
import {BookingPlaceFormPopupExtensionModule} from '../../../booking-place/ts/booking-place-form-popup.extension-module';
Helper.setRuntimeVar('templateUrl', Helper.getGlobalVar('route') + 'booking/country/edit');
import {BookingCountryFormPopupExtensionModule} from '../../../booking-country/ts/booking-country-form-popup.extension-module';

// Booking Current Accounts
Helper.setRuntimeVar('templateUrl', Helper.getGlobalVar('route') + 'booking/' + parentController + '/current-accounts-menus');
import {CurrentAccountsExtModule} from './current-accounts.ext-module';

// BookingObservation
Helper.setRuntimeVar('templateUrl', Helper.getGlobalVar('route') + 'booking/' + parentController + '-observation/edit/' + parentId);
import {ObservationExtensionModule} from '../../../../../../AppBundle/Resources/public/ts/observation/observation.extension-module';
import {BookingObservationFormPopupExtensionModule} from '../../../base-booking-observation/ts/booking-observation-form-popup.extension-module';

// BookingFile
Helper.setRuntimeVar('templateUrl', Helper.getGlobalVar('route') + 'booking/' + parentController + '-file/edit/' + parentId);
import {FileModule} from '../../../../../../AppBundle/Resources/public/ts/file/file.module';
import {BookingFileFormPopupExtensionModule} from '../../../base-booking-file/ts/booking-file-form-popup.extension-module';
/* /Import dependencies */

@Component({
    selector: '#js_main',
    templateUrl: Helper.getGlobalVar('route') + 'booking/' + parentController + '/detail-content'
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
        protected viewContainerRef: ViewContainerRef,
        @Inject('DataService') protected _dataService: any,
        protected _injector: Injector
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
                    module: BookingPaxExtensionModule,
                    component: 'BookingPaxComponent',
                    dataProvider: this._dependenciesData['bookingPax']
                };
            case 1:
                return {
                    module: BookingServiceExtensionModule,
                    component: 'BookingServiceComponent',
                    urlProvider: (this._helperService.getGlobalVar('route') + 'booking/' + parentController + '-service/data/' + parentId)
                };
            case 2:
                return {
                    module: CurrentAccountsExtModule,
                    component: 'CurrentAccountsComponent'
                };
            case 3:
                return {
                    module: ObservationExtensionModule,
                    component: 'ObservationComponent',
                    urlProvider: (this._helperService.getGlobalVar('route') + 'booking/' + parentController + '-observation/data/' + parentId)
                };
            case 4:
                return {
                    module: FileModule,
                    component: 'FileComponent',
                    urlProvider: (this._helperService.getGlobalVar('route') + 'booking/' + parentController + '-file/data/' + parentId)
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
                        module: BookingPaxFormPopupExtensionModule,
                        component: 'BookingPaxFormPopupComponent',
                        providers: [
                            FormService,
                            {provide: 'Provider', useValue: this._helperService.getFormProvider(data)}
                        ]
                    }},
                    {provide: 'ParentDataService', useValue: this._dataService}
                ];
                break;
            case 1:
                let autoCompleteProviders = this._helperService.mergeObjects(
                    this._injector.get('AutoCompleteProviders'),
                    {
                        placeObj: {
                            urlConf: (Helper.getGlobalVar('route') + 'booking/place/conf'),
                            control: 'edit',
                            popups: {
                                module: BookingPlaceFormPopupExtensionModule,
                                component: 'BookingPlaceFormPopupComponent',
                                providers: [
                                    {provide: 'Provider', useValue: Helper.getFormProvider({label: 'Place'})},
                                    FormService
                                ]
                            }
                        },
                        placeToObj: {
                            urlConf: (Helper.getGlobalVar('route') + 'booking/place/conf'),
                            control: 'edit',
                            popups: {
                                module: BookingPlaceFormPopupExtensionModule,
                                component: 'BookingPlaceFormPopupComponent',
                                providers: [
                                    {provide: 'Provider', useValue: Helper.getFormProvider({label: 'Place'})},
                                    FormService
                                ]
                            }
                        },
                        countryObj: {
                            urlConf: (Helper.getGlobalVar('route') + 'booking/country/conf'),
                            control: 'edit',
                            popups: {
                                module: BookingCountryFormPopupExtensionModule,
                                component: 'BookingCountryFormPopupComponent',
                                providers: [
                                    {provide: 'Provider', useValue: Helper.getFormProvider({label: 'Country'})},
                                    FormService
                                ]
                            }
                        }
                    }
                );

                providers = [
                    {provide: 'Provider', useValue: this._helperService.getDataBoxProvider(data)},
                    {provide: 'Popups', useValue: {
                        'add': {
                            module: BookingServiceAddFormPopupExtensionModule,
                            component: 'BookingServiceAddFormPopupComponent',
                            providers: [
                                {provide: 'Provider', useValue: this._helperService.getWizardPopupProvider(data)},
                                {provide: 'AutoCompleteProviders', useValue: autoCompleteProviders},
                                NavManagerService,
                                WizardManagerService,
                                FormService
                            ]
                        },
                        'edit': {
                            module: BookingServiceEditFormPopupExtensionModule,
                            component: 'BookingServiceEditFormPopupComponent',
                            providers: [
                                FormService,
                                {provide: 'Provider', useValue: this._helperService.getFormProvider(data)},
                                {provide: 'AutoCompleteProviders', useValue: autoCompleteProviders}
                            ]
                        }
                    }},
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
                        module: BookingObservationFormPopupExtensionModule,
                        component: 'BookingObservationFormPopupComponent',
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
                        module: BookingFileFormPopupExtensionModule,
                        component: 'BookingFileFormPopupComponent',
                        providers: [
                            {provide: 'FileUploadProvider', useValue: {
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