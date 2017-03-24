import {Component, ElementRef, Inject, Optional, Injector, ReflectiveInjector, Renderer, ViewChild, ViewContainerRef} from '@angular/core';
import {FormBuilder} from '@angular/forms';
import {Helper} from '../../../../../../AppBundle/Resources/public/ts/helper';
import {FormPopupExtensionComponent, FormProvider} from '../../../../../../AppBundle/Resources/public/ts/form/form-popup.extension-component';
import {DataService} from '../../../../../../AppBundle/Resources/public/ts/data-service/data.service';
import {ActionsService} from '../../../../../../AppBundle/Resources/public/ts/actions/actions.service';
import {FormService} from '../../../../../../AppBundle/Resources/public/ts/form/form.service';
import {DynamicComponentLoaderService} from '../../../../../../AppBundle/Resources/public/ts/dynamic-component-loader.service';
import {PostService} from '../../../../../../AppBundle/Resources/public/ts/post.service';


/* Import dependencies */
// Parent id of dependencies
var parentController = Helper.getGlobalVar('conf')['localData']['controller']; // Determines the type of booking

// Save last templateUrl
let tmpTemplateUrl = Helper.getRuntimeVar('templateUrl');

// BookingServicePrice
import {BookingServicePriceExtensionModule} from '../../../base-booking-service-price/ts/booking-service-price.extension-module';
Helper.setRuntimeVar('templateUrl', Helper.getGlobalVar('route') + 'booking/' + parentController + '-service-price/edit/0');
import {BookingServicePriceFormPopupExtensionModule} from "../../../base-booking-service-price/ts/booking-service-price-form-popup.extension-module";

// Restore last templateUrl
Helper.setRuntimeVar('templateUrl', tmpTemplateUrl);
/* /Import dependencies */


@Component({
    selector: '#js_BookingServiceEditFormPopup',
    templateUrl: Helper.getRuntimeVar('templateUrl')
})
export class BookingServiceEditFormPopupComponent extends FormPopupExtensionComponent
{
    // For NavManagerService
    @ViewChild('js_lazyLoadContainer', {read: ViewContainerRef}) lazyLoadViewContainerRef: ViewContainerRef;

    // To check if object has changed to refresh parents
    protected _object: any;
    protected _childDataService: DataService;
    protected _childObjec: any; // Price has changed

    constructor(
        elementRef: ElementRef,
        renderer: Renderer,
        @Inject('Provider') provider: FormProvider,
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
                this._helperService.getGlobalVar('route')
                + 'booking/' + parentController + '-service-price/data/'
                + this._formService.getObject()['id']
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
                        {provide: 'Provider', useValue: that._helperService.getDataBoxProvider(data)},
                        {provide: 'Popups', useValue: {
                            module: BookingServicePriceFormPopupExtensionModule,
                            component: 'BookingServicePriceFormPopupComponent',
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

                // Save initial object to detect changes
                that._childDataService = injector.get('DataService');
                that._childObjec = that._childDataService.getObject();

                that._dynamicComponentLoaderService.load(
                    BookingServicePriceExtensionModule,
                    'BookingServicePriceComponent',
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
        // If object has no changes, popup was open and closed without save the object,
        // so doesn't make sense refresh the objects
        if ((this._object != this._dataService.getObject())
            || (this._childObjec != this._childDataService.getObject())
        ) {
            // Update object and parent object
            this._dataService.refreshObject();
            this._parentDataService.refreshObject();
        }
    }
}