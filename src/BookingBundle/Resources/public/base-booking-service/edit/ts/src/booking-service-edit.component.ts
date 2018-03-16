import {Component, ElementRef, Inject, Optional, Injector, ReflectiveInjector, Renderer, ViewChild, ViewContainerRef} from '@angular/core';
import {FormBuilder} from '@angular/forms';
import {Helper} from '../../../../../../../AppBundle/Resources/public/ts/helper';
import {FormPopupExtensionComponent, FormProvider} from '../../../../../../../AppBundle/Resources/public/ts/form/form-popup.extension-component';
import {DataService} from '../../../../../../../AppBundle/Resources/public/ts/data-service/data.service';
import {ActionsService} from '../../../../../../../AppBundle/Resources/public/ts/actions/actions.service';
import {FormService} from '../../../../../../../AppBundle/Resources/public/ts/form/form.service';
import {DynamicComponentLoaderService} from '../../../../../../../AppBundle/Resources/public/ts/dynamic-component-loader.service';
import {PostService} from '../../../../../../../AppBundle/Resources/public/ts/post.service';


// Interface provider
export interface BaseBookingServiceEditProvider extends FormProvider {
    modules: { // Put here modules dependencies
        bookingServicePriceEdit: {module: any, component: string}
    }
}


/* Import dependencies */

// Parent id for dependencies
var bookingContext = Helper.getAppVar('conf')['localData']['data']['bookingContext']; // Determines the type of booking
// BookingServicePrice (reuse the add step4, for now is the same)
import {Step4ExtModule as PriceExtModule} from '../../../add/ts/src/step4.ext-module';

/* /Import dependencies */


@Component({
    selector: '#js_bookingServiceEdit',
    template: '' // Define template in child component
})
export class BookingServiceEditComponent extends FormPopupExtensionComponent
{
    // For NavManagerService
    @ViewChild('js_lazyLoadContainer', {read: ViewContainerRef}) lazyLoadViewContainerRef: ViewContainerRef;

    // To check if object has changed to refresh parents
    protected _object: any;
    // To get notify about changes over the service price dependency
    protected _onDependencyObjectsChangeSubscription: any;
    // Control if there are changes to refresh parents
    protected _hasObjectsChanges: boolean = false;

    constructor(
        elementRef: ElementRef,
        renderer: Renderer,
        @Inject('Provider') provider: BaseBookingServiceEditProvider,
        formService: FormService,
        @Inject('DataService') dataService: any,
        @Inject('ParentDataService') protected _parentDataService: any,
        @Inject('HelperService') protected _helperService: any,
        protected _dynamicComponentLoaderService: DynamicComponentLoaderService,
        protected _postService: PostService,
        protected _injector: Injector
    ) {
        super();
        super.initFormPopupExtensionComponent(
            elementRef,
            renderer,
            provider,
            formService,
            dataService
        );

        // Save initial object to detect changes
        this._object = this._dataService.getObject();
    }

    /**
     * Lifecycle callback
     */
    ngAfterViewInit()
    {
        super.ngAfterViewInit();

        // Load dependency
        let that = this,
            dependencyUrlProvider = (
                this._helperService.getAppVar('route')
                + 'booking/booking-service-price/data/'
                + this._formService.getObject()['bookingServiceObj']
            );

        this._postService.post(dependencyUrlProvider, null).then(
            data => {
                // Change main class to show label
                data['extraData']['template']['class'] = '-stamp-view';

                let providers = [
                        {provide: 'DataService', useClass: DataService},
                        ActionsService,
                        {provide: 'DataServiceProvider', useValue: that._helperService.getDataServiceProvider(data)},
                        {provide: 'ActionsServiceProvider', useValue: that._helperService.getActionsServiceProvider(data)},
                        {provide: 'LegendProvider', useValue: that._helperService.getLegendProvider(data)},
                        {provide: 'Provider', useValue: that._helperService.getDataBoxProvider(data)},
                        {provide: 'Popups', useValue: {
                            module: that._provider['modules']['bookingServicePriceEdit']['module'],
                            component: that._provider['modules']['bookingServicePriceEdit']['component'],
                            providers: [
                                FormService,
                                {provide: 'Provider', useValue: this._helperService.getFormProvider(data)}
                            ]
                        }},
                        {provide: 'ParentDataService', useValue: this._dataService}
                    ],
                    injector = ReflectiveInjector.fromResolvedProviders(
                        ReflectiveInjector.resolve(providers),
                        that._injector
                    );

                // Objects changes subscription
                let childDataService = injector.get('DataService');
                that._onDependencyObjectsChangeSubscription = childDataService.getOnObjectsChangeEmitter()
                    .subscribe(object => {that._hasObjectsChanges = true;});

                that._dynamicComponentLoaderService.load(
                    PriceExtModule,
                    'Step4Component',
                    that.lazyLoadViewContainerRef,
                    injector
                ).then(
                    componentRef => {
                        //that._llComponentRefArr[index] = componentRef;
                        //that._currentIndex = index;
                        return true;
                    },
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
        this._onDependencyObjectsChangeSubscription.unsubscribe();

        // If object has no changes, popup was open and closed without save the object,
        // so doesn't make sense refresh the objects
        if ((this._object != this._dataService.getObject()) || this._hasObjectsChanges) {
            // Update object and parent object
            if (this._formService.getObject()['grouperBookingServiceObj']) {
                this._dataService.refresh(); // Refresh all object to refresh te own and the grouper object
            } else {
                this._dataService.refreshObject(); // Refresh only de own object
            }
            this._parentDataService.refreshObject();
        }
    }
}