import {Component, ElementRef, Inject, Injector, ReflectiveInjector, Renderer, QueryList, Optional, ViewChildren, ViewContainerRef, ViewChild} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {FormService} from '../../../../../../../AppBundle/Resources/public/ts/form/form.service';
import {DataService} from "../../../../../../../AppBundle/Resources/public/ts/data-service/data.service";
import {ActionsService} from '../../../../../../../AppBundle/Resources/public/ts/actions/actions.service';
import {WizardFormPopupComponent, WizardPopupProvider, IWizard, LazyLoadData} from '../../../../../../../AppBundle/Resources/public/wizard/ts/src/wizard-form-popup.component';
import {WizardManagerService} from '../../../../../../../AppBundle/Resources/public/wizard/ts/src/wizard-manager.service';
import {DynamicComponentLoaderService} from '../../../../../../../AppBundle/Resources/public/ts/dynamic-component-loader.service';
import {PostService} from '../../../../../../../AppBundle/Resources/public/ts/post.service';


/* Import dependencies */

// Step1 Package Service
import {Step2ExtModule} from './step2.ext-module';
import {Step3ExtModule} from './step3.ext-module';
import {Step4ExtModule} from './step4.ext-module';
import {Step5ExtModule} from './step5.ext-module';
import {Step6ExtModule} from './step6.ext-module';

/* /Import dependencies */


@Component({
    selector: '#js_add',
    templateUrl: '../templates/step1.component.html'
})
export class Step1Component extends WizardFormPopupComponent implements IWizard
{
    // For NavManagerService
    @ViewChildren('js_lazyLoadContainer', {read: ViewContainerRef}) lazyLoadViewContainerRefQL: QueryList<ViewContainerRef>;

    // Variables for components and services to handle with BookingService objects
    protected _packageBookingService_injector: any = null;
    protected _packageBookingService_formService: any = null;
    protected _packageBookingService_dataService: any = null;
    protected _packageBookingService_dataProvider: any = null;


    constructor(
        elementRef: ElementRef,
        renderer: Renderer,
        @Inject('Provider') provider: WizardPopupProvider,
        wizardManagerService: WizardManagerService,
        formService: FormService,
        protected _dynamicComponentLoaderService: DynamicComponentLoaderService,
        protected _postService: PostService,
        protected _injector: Injector,
        @Inject('HelperService') protected _helperService: any,
        @Inject('DataService') protected _dataService: any
    ) {
        // Call parent
        super(
            elementRef,
            renderer,
            provider,
            wizardManagerService,
            formService
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
                    route = (that._dataService.getRoute('addStep1'));
                    return that._formService.save(route).then(
                        data => { return resolve(true); },
                        errors => { return reject(false); }
                    );
                case 1:
                    // Check service selection
                    // It's a hidden field, so does not can be checked by angular control
                    if (!that._packageBookingService_formService.getObject()['serviceObj']) {
                        let errors = {};
                        errors['serviceObj'] = ['Please select an option'];
                        that._packageBookingService_formService.setErrors(errors);
                        return reject(false);
                    }

                    // Save form
                    route = (that._packageBookingService_dataService.getRoute('addStep2ForBooking'));
                    return that._packageBookingService_formService.save(route).then(
                        data => { return resolve(true); },
                        errors => { return reject(false); }
                    );
                case 2:
                    // Save form
                    componentRef = that._wizardManagerService.getComponentRef(index);
                    route = (that._packageBookingService_dataService.getRoute('addStep3ForBooking'));
                    return componentRef.instance._formService.save(route).then(
                        data => { return resolve(true); },
                        errors => { return reject(false); }
                    );
                case 3:
                    // Submit data
                    componentRef = that._wizardManagerService.getComponentRef(index);

                    // Cal the same method of change button
                    return componentRef.instance.change().then(
                        data => { return resolve(true); },
                        errors => { return reject(false); }
                    );
                case 4:
                    // Save form
                    componentRef = that._wizardManagerService.getComponentRef(index);
                    route = (that._packageBookingService_dataService.getRoute('addStep5ForBooking'));
                    return componentRef.instance._formService.save(route).then(
                        data => {
                            // Update preview info
                            componentRef = that._wizardManagerService.getComponentRef(index + 1);
                            if (componentRef) {
                                componentRef.instance.init(that._packageBookingService_dataService.getLocalDataAttr('preview'));
                            }

                            return resolve(true);
                        },
                        errors => { return reject(false); }
                    );
                case 5:
                    // Confirm all data to save from session storage to database
                    route = (
                        that._dataService.getRoute('addStep6')
                        + '/' + that._formService.getObject()['id']
                        + '/' + that._packageBookingService_formService.getObject()['id']
                    );
                    return that._dataService.runAction(route, null, true).then(
                        data => { return resolve(true); },
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
                    module: Step2ExtModule,
                    component: 'Step2Component',
                    urlProvider: (this._helperService.getAppVar('route')
                        + 'booking/package-booking-service/conf-for-booking/'
                        + this._formService.getObject()['bookingObj'] // Parent is the Booking
                    )
                };
            case 2:
                return {
                    module: Step3ExtModule,
                    component: 'Step3Component',
                    dataProvider: this._packageBookingService_dataProvider,
                    injector: this._packageBookingService_injector
                };
            case 3:
                return {
                    module: Step4ExtModule,
                    component: 'Step4Component',
                    dataProvider: this._packageBookingService_dataProvider,
                    injector: this._packageBookingService_injector
                };
            case 4:
                return {
                    module: Step5ExtModule,
                    component: 'Step5Component',
                    dataProvider: this._packageBookingService_dataProvider,
                    injector: this._packageBookingService_injector
                };
            case 5:
                return {
                    module: Step6ExtModule,
                    component: 'Step6Component',
                    dataProvider: this._packageBookingService_dataProvider,
                    injector: this._packageBookingService_injector
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
                this._packageBookingService_dataProvider = data; // To use in other BookingService panels
                return [
                    {provide: 'DataService', useClass: DataService},
                    {provide: 'DataServiceProvider', useValue: this._helperService.getDataServiceProvider(data)},
                    FormService,
                    {provide: 'Provider', useValue: this._helperService.getFormProvider(data)},
                    // Reset FormServiceProvider to use DataServiceProvider as default values
                    {provide: 'FormServiceProvider', useValue: {}}
                ];
            case 2:
            case 4:
                return [
                    FormService,
                    {provide: 'Provider', useValue: this._helperService.getFormProvider(data)},
                    // Reset FormServiceProvider to use DataServiceProvider as default values
                    {provide: 'FormServiceProvider', useValue: {fields: null, hasPreventObjectOverride: false}}
                ];
            case 3:
                // Uses the same DataService that step 1 and 2
                return [
                    ActionsService,
                    {provide: 'ActionsServiceProvider', useValue: this._helperService.getActionsServiceProvider(data)},
                    {provide: 'Provider', useValue: this._helperService.getDataBoxProvider(data)},
                    {provide: 'Popups', useValue: null}
                ];
            case 5:
                return [
                    {provide: 'Provider', useValue: this._helperService.getEntityDetailPreviewProvider(data['localData']['data']['preview'])},
                ];
        }

        return null;
    }

    /**
     * Get Selected Service Attribute
     * Used by view
     * @param attribute
     * @returns {any|string}
     */
    public getSelectedServiceAttr(attribute: string)
    {
        // Check if FormService has been setted
        if (!this._packageBookingService_formService) {
            return null;
        }

        switch (attribute) {
            case 'totalSell': // Sum all services
                let totalSell = (this._packageBookingService_formService.getViewObject()['__totalSell'] || 0),
                    objects = this._packageBookingService_dataService.getProviderAttr('objects');
                if (objects && (objects.length > 0)) {
                    for (let object of objects) {
                        // Only objects enabled and not grouped (if grouped your value is sum in the grouped service)
                        if (object['hasService'] && !object['grouperBookingServiceObj']) {
                            totalSell += (object['__totalSell'] || 0);
                        }
                    }
                }
                return (totalSell+'€');
            default:
                return (this._packageBookingService_formService.getViewObject()[attribute] || null);
        }
    }

    /**
     * Post (after) load callback
     * @param index
     * @param componentRef
     * @param injector
     */
    public postLoad(index: number, componentRef: any, injector: Injector): void
    {
        switch (index) {
            case 1:
                this._packageBookingService_injector = injector;
                this._packageBookingService_formService = injector.get(FormService);
                this._packageBookingService_dataService = injector.get('DataService');
                break;
        }

        return;
    }

    /**
     * Lifecycle callback
     */
    ngOnDestroy()
    {
        super.ngOnDestroy();

        // Reset debug (auto add price, dates and allot)
        this._dataService.setProviderAttr('localData', {});
    }
}