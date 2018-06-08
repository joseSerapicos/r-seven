import {Component, ElementRef, ViewChild, ReflectiveInjector, ViewContainerRef, Inject, Optional, Injector, Renderer} from '@angular/core';
import {FormBuilder} from '@angular/forms';
import {FormExtensionComponent, FormProvider} from '../../../../../../../../AppBundle/Resources/public/form/ts/form.extension-component';
import {NavManagerService} from '../../../../../../../../AppBundle/Resources/public/ts/nav-manager/nav-manager.service';
import {ModalService, Popup} from '../../../../../../../../AppBundle/Resources/public/modal/ts/modal.service';
import {ActionsService} from '../../../../../../../../AppBundle/Resources/public/ts/actions/actions.service';
import {DynamicComponentLoaderService} from '../../../../../../../../AppBundle/Resources/public/ts/dynamic-component-loader.service';
import {PostService} from '../../../../../../../../AppBundle/Resources/public/ts/post.service';
import {DataService} from '../../../../../../../../AppBundle/Resources/public/ts/data-service/data.service';
import {FormService} from '../../../../../../../../AppBundle/Resources/public/form/ts/form.service';

// Re-exports
export {FormProvider}

/* Import dependencies */
import {Step2FieldDebugExtModule} from './step2-field-debug.ext-module';
/* /Import dependencies */


@Component({
    selector: '#js_addStep2',
    template: '' // Define template in child component
})
export abstract class Step2Component extends FormExtensionComponent
{
    // For dependency ("Step2PaxExtModule")
    @ViewChild('js_paxDataBox', {read: ViewContainerRef}) lazyLoadViewContainerRefDependency: ViewContainerRef;

    // USed by template
    protected _statusMap: any;

    // Pax component ref for validation
    protected _paxComponentRef: any = null;


    constructor(
        elementRef: ElementRef,
        renderer: Renderer,
        @Inject('Provider') provider: FormProvider,
        formService: FormService,
        @Inject('DataService') dataService: any,
        protected _modalService: ModalService,
        protected _dynamicComponentLoaderService: DynamicComponentLoaderService,
        protected _postService: PostService,
        protected _injector: Injector,
        @Inject('HelperService') protected _helperService: any
    ) {
        super();
        super.initFormExtensionComponent(
            elementRef,
            renderer,
            provider,
            formService,
            dataService
        );

        this._statusMap = this._helperService.getStatusMap();
    }

    /**
     * Mandatory implementation by children classes to get the PaxDataBoxExtModule
     */
    protected abstract getPaxDataBoxExtModule(): any

    /**
     * Mandatory implementation by children classes to get the PaxEditFormExtModule
     */
    protected abstract getPaxEditFormExtModule(): any

    /**
     * Mandatory implementation by children classes to get the url provider for PaxDataBoxExtModule
     */
    protected abstract getPaxDataBoxUrlProvider(): any

    /**
     * Change action (change the submitted data).
     * This method should be called from view/template to change the submitted data.
     * @param $event
     */
    public changeAction($event: any = null): void
    {
        if ($event) { $event.preventDefault(); }

        let route = this._dataService.getRoute('addStep2');

        this._formService.save(route).then(
            data => { return; },
            errors => { return; }
        );
    }

    /**
     * Show field debug action (change the submitted data).
     * @param $event
     */
    public debugAction($event: any = null): void
    {
        if ($event) { $event.preventDefault(); }

        let popup: Popup = {
            module: Step2FieldDebugExtModule,
            component: 'Step2FieldDebugComponent',
            providers: [
                NavManagerService,
                {provide: 'Provider', useValue: {
                    label: this._formService.getObject()['name'],
                    data: {
                        availability: (this._formService.getObject()['isAutoAvailability']
                                ? this.getControlDebug('availabilityDebug')
                                : null
                        ),
                        allot: (this._formService.getObject()['isAutoAllot']
                                ? this.getControlDebug('allotDebug')
                                : null
                        ),
                        price: (this._formService.getObject()['isAutoPrice']
                                ? this.getControlDebug('priceDebug')
                                : null
                        )
                    }
                }}
            ]
        };

        // Open popup
        this._modalService.popup(popup, this._injector).then(
            data => { return; },
            errors => { console.log(errors); return; }
        );
    }

    /**
     * Get control debug
     * @param control
     * @returns {Array}
     */
    public getControlDebug(control: string)
    {
        let bookingServiceId = (this._formService.getObject()['bookingServiceObj'] || null);
        if (!bookingServiceId) { return []; }

        return this._dataService.getLocalDataAttr(bookingServiceId)[control];
    }

    /**
     * Validate pax
     * @returns {boolean}
     */
    public validatePax()
    {
        let errors = {},
            quantity = this._formService.getObject()['quantity'],
            paxCount = this._paxComponentRef.instance._dataService.getProviderAttr('objects').length;

        this._formService.setErrors(errors);

        if (quantity != paxCount) {
            errors['pax'] = ['Quantity ('+quantity+') does not match with the number of pax ('+paxCount+').'];
            return false;
        }

        return true;
    }

    /**
     * Refresh pax
     * @returns {boolean}
     */
    public refreshPax()
    {
        if (this._paxComponentRef) {
            this._paxComponentRef.instance._dataService.refresh();
        }
    }

    /**
     * Lifecycle callback
     */
    ngAfterViewInit()
    {
        super.ngAfterViewInit();

        // Load dependency
        let that = this,
            dependencyUrlProvider = this.getPaxDataBoxUrlProvider();

        this._postService.post(dependencyUrlProvider).then(
            data => {
                let providers = [
                        {provide: 'DataService', useClass: DataService},
                        ActionsService,
                        {provide: 'DataServiceProvider', useValue: that._helperService.getDataServiceProvider(data)},
                        {provide: 'ActionsServiceProvider', useValue: that._helperService.getActionsServiceProvider(data)},
                        {provide: 'LegendProvider', useValue: that._helperService.getLegendProvider(data)},
                        {provide: 'Provider', useValue: that._helperService.getDataBoxProvider(data)},
                        {provide: 'Popups', useValue: {
                            module: that.getPaxEditFormExtModule(),
                            component: 'BookingPaxEditComponent',
                            providers: [
                                FormService,
                                {provide: 'Provider', useValue: that._helperService.getFormProvider(data)},
                                // Reset FormServiceProvider to use DataServiceProvider as default values
                                {provide: 'FormServiceProvider', useValue: {}}
                            ]
                        }}
                    ],
                    injector = ReflectiveInjector.fromResolvedProviders(
                        ReflectiveInjector.resolve(providers),
                        that._injector
                    );

                that._dynamicComponentLoaderService.load(
                    that.getPaxDataBoxExtModule(),
                    'Step2PaxComponent',
                    that.lazyLoadViewContainerRefDependency,
                    injector
                ).then(
                    componentRef => {
                        that._paxComponentRef = componentRef;
                        return true;
                    },
                    errors => { console.log(errors); return null; }
                );
            },
            errors => { console.log(errors); return false; }
        );
    }
}