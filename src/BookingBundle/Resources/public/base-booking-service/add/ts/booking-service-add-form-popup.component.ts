import {Component, ElementRef, Inject, Injector, Renderer, QueryList, Optional, ViewChildren, ViewContainerRef, ViewChild} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {FormService} from '../../../../../../AppBundle/Resources/public/ts/form/form.service';
import {Helper} from '../../../../../../AppBundle/Resources/public/ts/helper';
import {DataService} from "../../../../../../AppBundle/Resources/public/ts/data-service/data.service";
import {ActionsService} from '../../../../../../AppBundle/Resources/public/ts/actions/actions.service';
import {WizardFormPopupComponent, WizardPopupProvider, IWizard, LazyLoadData} from '../../../../../../AppBundle/Resources/public/ts/wizard/wizard-form-popup.component';
import {WizardManagerService} from '../../../../../../AppBundle/Resources/public/ts/wizard/wizard-manager.service';


/* Import dependencies */
// Parent id of dependencies
var parentId = Helper.getGlobalVar('conf')['object']['id'],
    parentController = Helper.getGlobalVar('conf')['localData']['controller']; // Determines the type of booking

// Detail
Helper.setRuntimeVar('templateUrl', Helper.getGlobalVar('route') + 'booking/' + parentController + '-service/add-detail/' + parentId);
import {BookingServiceAddDetailFormExtensionModule} from './booking-service-add-detail-form.extension-module';

// Dates
Helper.setRuntimeVar('templateUrl', Helper.getGlobalVar('route') + 'booking/' + parentController + '-service/add-dates/' + parentId);
import {BookingServiceAddDatesFormExtensionModule} from './booking-service-add-dates-form.extension-module';

// Allot
Helper.setRuntimeVar('templateUrl', Helper.getGlobalVar('route') + 'booking/' + parentController + '-service/add-allot/' + parentId);
import {BookingServiceAddAllotFormExtensionModule} from './booking-service-add-allot-form.extension-module';

// ServicePrice
import {BookingServicePriceExtensionModule} from '../../../base-booking-service-price/ts/booking-service-price.extension-module';
Helper.setRuntimeVar('templateUrl', Helper.getGlobalVar('route') + 'booking/' + parentController + '-service-price/edit/0');
import {BookingServicePriceFormPopupExtensionModule} from "../../../base-booking-service-price/ts/booking-service-price-form-popup.extension-module";
/* /Import dependencies */


@Component({
    selector: '.js_bookingServiceAddFormPopup',
    templateUrl: Helper.getGlobalVar('route') + 'booking/' + parentController + '-service/add/' + parentId
})
export class BookingServiceAddFormPopupComponent extends WizardFormPopupComponent implements IWizard
{
    // For NavManagerService
    @ViewChildren('js_lazyLoadContainer', {read: ViewContainerRef}) lazyLoadViewContainerRefQL: QueryList<ViewContainerRef>;

    // Used to control the force submit of "dates" and "allot" form
    // (when object has internal changes that needs to be confirmed by user)
    protected forceFormSubmit = {
        dates: false,
        allot: false
    };

    constructor(
        elementRef: ElementRef,
        renderer: Renderer,
        @Inject('Provider') provider: WizardPopupProvider,
        wizardManagerService: WizardManagerService,
        formService: FormService,
        @Inject('HelperService') protected _helperService: any,
        @Inject('DataService') protected _dataService: any,
        @Inject('ParentDataService') protected _parentDataService: any
    ) {
        // Call parent
        super(
            elementRef,
            renderer,
            provider,
            wizardManagerService,
            formService // Form service is shared between all steps
        );
    }

    /**
     * Submit navigation (when leave one container to navigate in other one)
     * @param index (index to validate)
     * @returns {Promise<boolean>}
     */
    public submitNav(index: number): Promise<boolean>
    {
        let that = this,
            route = null,
            componentRef = null;

        return new Promise(function(resolve, reject) {
            switch (index) {
                case 0:
                    // Save form
                    route = (that._dataService.getRoute('add'));
                    return that._formService.save(route).then(
                        data => { return resolve(true); },
                        errors => { return reject(false); }
                    );
                case 1:
                    // Save form
                    componentRef = that._wizardManagerService.getComponentRef(index);
                    route = (that._dataService.getRoute('addDetail'));
                    return componentRef.instance._formService.save(route).then(
                        data => {
                            // Reset default mandatory values for next step (to force the user to validate the data)
                            let obj = that._dataService.getObject();
                            if (obj['isEnabledAvailability'] && !obj['isAutoAvailability']) {
                                obj['isAutoAvailability'] = true;
                                that._dataService.setObject(
                                    that._helperService.cloneObject(obj),
                                    that._dataService.getObjectIndex()
                                );
                                // Enable force form submit to save this internal change in object
                                that.forceFormSubmit.dates = true;
                            }

                            return resolve(true);
                        },
                        errors => { return reject(false); }
                    );
                case 2:
                    // Save form
                    componentRef = that._wizardManagerService.getComponentRef(index);
                    route = (that._dataService.getRoute('addDates'));
                    return componentRef.instance._formService.save(route, that.forceFormSubmit.dates).then(
                        data => {
                            that.forceFormSubmit.dates = false;

                            // Reset default mandatory values for next step (to force the user to validate the data)
                            let obj = that._dataService.getObject();
                            if (obj['isEnabledAllot'] && !obj['isAutoAllot']) {
                                obj['isAutoAllot'] = true;
                                that._dataService.setObject(
                                    that._helperService.cloneObject(obj),
                                    that._dataService.getObjectIndex()
                                );
                                // Enable force form submit to save this internal change in object
                                that.forceFormSubmit.allot = true;
                            }

                            return resolve(true);
                        },
                        errors => { return reject(false); }
                    );
                case 3:
                    // Save form
                    componentRef = that._wizardManagerService.getComponentRef(index);
                    route = (that._dataService.getRoute('addAllot'));
                    return componentRef.instance._formService.save(route, that.forceFormSubmit.allot).then(
                        data => {
                            that.forceFormSubmit.allot = false;

                            // Refresh the next component to refresh price objects
                            if (that._dataService.getObject()['isEnabledPrice']) {
                                componentRef = that._wizardManagerService.getComponentRef(index + 1);
                                if (componentRef) {
                                    componentRef.instance._dataService.refresh();
                                }
                            }

                            return resolve(true);
                        },
                        errors => { return reject(false); }
                    );
            }

            // Nothing to do
            return resolve(true);
        });
    }

    /**
     * Get navigation data (needed data to lazy load container)
     * @param index (index to load)
     * @returns NavData
     */
    public getNavData(index: number): LazyLoadData
    {
        switch (index) {
            case 1:
                return {
                    module: BookingServiceAddDetailFormExtensionModule,
                    component: 'BookingServiceAddDetailFormComponent'
                };
            case 2:
                return {
                    module: BookingServiceAddDatesFormExtensionModule,
                    component: 'BookingServiceAddDatesFormComponent'
                };
            case 3:
                return {
                    module: BookingServiceAddAllotFormExtensionModule,
                    component: 'BookingServiceAddAllotFormComponent'
                };
            case 4:
                let bookingServiceId = this._dataService.getObject()['id'];
                return {
                    module: BookingServicePriceExtensionModule,
                    component: 'BookingServicePriceComponent',
                    urlProvider: (this._helperService.getGlobalVar('route')
                        + 'booking/' + parentController + '-service-price/data/'
                        + bookingServiceId
                    )
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
            case 1:
            case 2:
            case 3:
                return [
                    FormService
                ];
            case 4:
                return [
                    {provide: 'DataService', useClass: DataService},
                    ActionsService,
                    {provide: 'DataServiceProvider', useValue: this._helperService.getDataServiceProvider(data)},
                    {provide: 'ActionsServiceProvider', useValue: this._helperService.getActionsServiceProvider(data)},
                    {provide: 'Provider', useValue: this._helperService.getDataBoxProvider(data)},
                    {provide: 'Popups', useValue: {
                        module: BookingServicePriceFormPopupExtensionModule,
                        component: 'BookingServicePriceFormPopupComponent',
                        providers: [
                            FormService,
                            {provide: 'Provider', useValue: this._helperService.getFormProvider(data)}
                        ]
                    }},
                    {provide: 'ParentDataService', useValue: this._dataService}
                ];
        }

        return null;
    }

    /**
     * Lifecycle callback
     */
    ngOnDestroy()
    {
        super.ngOnDestroy();

        // Reset debug (auto add price, dates and allot)
        this._dataService.setProviderAttr('localData', {});

        // If no "id", popup was open and closed without save the object, so doesn't make sense refresh the objects
        if (this._dataService.getObject()['id']) {
            // Update object and parent object
            this._dataService.refreshObject();
            this._parentDataService.refreshObject();
        }
    }
}