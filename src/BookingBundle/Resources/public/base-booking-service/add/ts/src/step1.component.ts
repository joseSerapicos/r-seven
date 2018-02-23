import {Component, ElementRef, Inject, Injector, ReflectiveInjector, Renderer, QueryList, Optional, ViewChildren, ViewContainerRef, ViewChild} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {FormService} from '../../../../../../../AppBundle/Resources/public/ts/form/form.service';
import {Helper} from '../../../../../../../AppBundle/Resources/public/ts/helper';
import {DataService} from "../../../../../../../AppBundle/Resources/public/ts/data-service/data.service";
import {ActionsService} from '../../../../../../../AppBundle/Resources/public/ts/actions/actions.service';
import {WizardFormPopupComponent, WizardPopupProvider, IWizard, LazyLoadData} from '../../../../../../../AppBundle/Resources/public/wizard/ts/src/wizard-form-popup.component';
import {WizardManagerService} from '../../../../../../../AppBundle/Resources/public/wizard/ts/src/wizard-manager.service';
import {DynamicComponentLoaderService} from '../../../../../../../AppBundle/Resources/public/ts/dynamic-component-loader.service';
import {PostService} from '../../../../../../../AppBundle/Resources/public/ts/post.service';


// Interface provider
export interface BaseBookingServiceAddProvider extends WizardPopupProvider {
    modules: { // Put here modules dependencies
        step2: {module: any, component: string},
        step3: {module: any, component: string},
        bookingServicePriceEdit: {module: any, component: string},
        servicesUrlProvider: string
    }
}


/* Import dependencies */
// Parent id for dependencies
var bookingContext = Helper.getAppVar('conf')['localData']['data']['bookingContext']; // Determines the type of booking

// Step1 Service
import {Step1ServiceExtModule} from './step1-service.ext-module';

// ServicePrice
import {Step4ExtModule} from './step4.ext-module';
/* /Import dependencies */


@Component({
    selector: '.js_add',
    template: '' // Define template in child component
})
export class Step1Component extends WizardFormPopupComponent implements IWizard
{
    // For NavManagerService
    @ViewChildren('js_lazyLoadContainer', {read: ViewContainerRef}) lazyLoadViewContainerRefQL: QueryList<ViewContainerRef>;

    // For dependency ("Step1ServiceExtModule")
    @ViewChild('js_step1Service', {read: ViewContainerRef}) lazyLoadViewContainerRefDependency: ViewContainerRef;


    constructor(
        elementRef: ElementRef,
        renderer: Renderer,
        @Inject('Provider') provider: BaseBookingServiceAddProvider,
        wizardManagerService: WizardManagerService,
        formService: FormService,
        protected _dynamicComponentLoaderService: DynamicComponentLoaderService,
        protected _postService: PostService,
        protected _injector: Injector,
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
                    // Check service selection
                    // It's a hidden field, so does not can be checked by angular control
                    if (!that._formService.getObject()['serviceObj']) {
                        let errors = {};
                        errors['serviceObj'] = ['Please select an option'];
                        that._formService.setErrors(errors);
                        return reject(false);
                    }

                    // Save form
                    route = (that._dataService.getRoute('addStep1'));
                    return that._formService.save(route).then(
                        data => { return resolve(true); },
                        errors => { return reject(false); }
                    );
                case 1:
                    // Save form
                    componentRef = that._wizardManagerService.getComponentRef(index);
                    route = (that._dataService.getRoute('addStep2'));
                    return componentRef.instance._formService.save(route).then(
                        data => { return resolve(true); },
                        errors => { return reject(false); }
                    );
                case 2:
                    // Save form
                    componentRef = that._wizardManagerService.getComponentRef(index);
                    route = (that._dataService.getRoute('addStep3'));
                    return componentRef.instance._formService.save(route).then(
                        data => {
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
                case 3:
                    // Confirm all data to save from session storage to database
                    route = (
                        that._dataService.getRoute('addStep4')
                        + '/' + that._formService.getObject()['id']
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
                    module: this._provider['modules']['step2']['module'],
                    component: this._provider['modules']['step2']['component']
                };
            case 2:
                return {
                    module: this._provider['modules']['step3']['module'],
                    component: this._provider['modules']['step3']['component']
                };
            case 3:
                let bookingServiceId = this._dataService.getObject()['bookingServiceObj'];
                return {
                    module: Step4ExtModule,
                    component: 'Step4Component',
                    urlProvider: (this._helperService.getAppVar('route')
                        + 'booking/booking-service-price/data/'
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
                return [
                    FormService,
                    // Reset FormServiceProvider to use DataServiceProvider as default values
                    {provide: 'FormServiceProvider', useValue: {}}
                ];
            case 3:
                return [
                    {provide: 'DataService', useClass: DataService},
                    ActionsService,
                    {provide: 'DataServiceProvider', useValue: this._helperService.getDataServiceProvider(data)},
                    {provide: 'ActionsServiceProvider', useValue: this._helperService.getActionsServiceProvider(data)},
                    {provide: 'Provider', useValue: this._helperService.getDataBoxProvider(data)},
                    {provide: 'Popups', useValue: {
                        module: this._provider['modules']['bookingServicePriceEdit']['module'],
                        component: this._provider['modules']['bookingServicePriceEdit']['component'],
                        providers: [
                            FormService,
                            // Reset FormServiceProvider to use DataServiceProvider as default values
                            {provide: 'FormServiceProvider', useValue: {}},
                            {provide: 'Provider', useValue: this._helperService.getFormProvider(data)}
                        ]
                    }},
                    {provide: 'ParentDataService', useValue: this._dataService}
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
        return (this._formService.getViewObject()[attribute] || null);
    }

    /**
     * Lifecycle callback
     */
    ngAfterViewInit()
    {
        super.ngAfterViewInit();

        // Load dependency
        let that = this;

        this._postService.post(this._provider['servicesUrlProvider']).then(
            data => {
                let providers = [
                        {provide: 'DataService', useClass: DataService},
                        ActionsService,
                        {provide: 'DataServiceProvider', useValue: that._helperService.getDataServiceProvider(data)},
                        {provide: 'ActionsServiceProvider', useValue: that._helperService.getActionsServiceProvider(data)},
                        {provide: 'Provider', useValue: that._helperService.getDataBoxProvider(data)}
                    ],
                    injector = ReflectiveInjector.fromResolvedProviders(
                        ReflectiveInjector.resolve(providers),
                        that._injector
                    );

                that._dynamicComponentLoaderService.load(
                    Step1ServiceExtModule,
                    'Step1ServiceComponent',
                    that.lazyLoadViewContainerRefDependency,
                    injector
                ).then(
                    componentRef => { return true; },
                    errors => { console.log(errors); return null; }
                );
            },
            errors => { console.log(errors); return false; }
        );
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
        if (this._dataService.getObject()['id'] && !this._dataService.getObject()['_isSessionStorage']) {
            this._parentDataService.refreshObject();
        }
    }
}