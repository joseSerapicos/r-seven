import {Component, ElementRef, Inject, Optional, Injector, ReflectiveInjector, Renderer, ViewChildren, QueryList, ViewContainerRef} from '@angular/core';
import {FormBuilder} from '@angular/forms';
import {BaseFormPopupExtComponent, FormProvider} from '../../base-document/ts/base-form-popup.ext-component';
import {DataService} from '../../../../../AppBundle/Resources/public/ts/data-service/data.service';
import {ActionsService} from '../../../../../AppBundle/Resources/public/ts/actions/actions.service';
import {FormService} from '../../../../../AppBundle/Resources/public/form/ts/form.service';
import {NavManagerService} from '../../../../../AppBundle/Resources/public/ts/nav-manager/nav-manager.service';
import {WizardManagerService} from '../../../../../AppBundle/Resources/public/wizard/ts/src/wizard-manager.service';
import {DynamicComponentLoaderService} from '../../../../../AppBundle/Resources/public/ts/dynamic-component-loader.service';
import {PostService} from '../../../../../AppBundle/Resources/public/ts/post.service';


/* Import dependencies */

// ClientDocumentReceiptSettlement
import {MainExtModule as ClientDocumentSettlementIndexMainExtModule} from '../../client-document-settlement/index/ts/src/main.ext-module';
import {FormPopupExtModule as ClientDocumentSettlementEditFormPopupExtModule} from "../../client-document-settlement/edit/ts/src/form-popup.ext-module";
import {FormPopupExtModule as ClientDocumentSettlementAddFormPopupExtModule} from "../../client-document-settlement/add/ts/src/form-popup.ext-module";
// ClientDocumentReceiptPayment
import {MainExtModule as ClientDocumentPaymentIndexExtModule} from '../../client-document-payment/index/ts/src/main.ext-module';
import {FormPopupExtModule as ClientDocumentPaymentEditFormPopupExtModule} from "../../client-document-payment/edit/ts/src/form-popup.ext-module";

/* /Import dependencies */


@Component({
    selector: '.js_baseClientDocumentReceiptFormPopup',
    template: ''
})
export class BaseReceiptDocumentFormPopupExtComponent extends BaseFormPopupExtComponent
{
    // To load document detail
    @ViewChildren('js_lazyLoadContainer', {read: ViewContainerRef}) lazyLoadViewContainerRefQL: QueryList<ViewContainerRef>;
    protected _llViewContainerRefArr: ViewContainerRef[] = [];
    // Data service of dependencies to calc the "diffControl" [settlement, payment]
    protected _dependencyDataServiceArr: any[] = [null, null];
    // To handle with dependencies objects changes to refresh the diffControl
    protected _onDependencyObjectsChangeSubscription: any[] = [null, null];

    // Constructor vars
    protected _parentDataService: any;
    protected _helperService: any;
    protected _dynamicComponentLoaderService: DynamicComponentLoaderService;
    protected _postService: PostService;

    // To check if object has changed to refresh parent
    //protected _object: any;
    protected _$diffControl: any;

    constructor() { super(); }

    public initBaseReceiptDocumentFormPopupExtComponent(
        elementRef: ElementRef,
        renderer: Renderer,
        provider: FormProvider,
        formService: FormService,
        dataService: any,
        injector: Injector,
        parentDataService: any,
        helperService: any,
        dynamicComponentLoaderService: DynamicComponentLoaderService,
        postService: PostService
    ) {
        super.initBaseFormPopupExtComponent(
            elementRef,
            renderer,
            provider,
            formService,
            dataService,
            injector
        );

        // Constructor vars
        this._parentDataService = parentDataService;
        this._helperService = helperService;
        this._dynamicComponentLoaderService = dynamicComponentLoaderService;
        this._postService = postService;

        // Save initial object to detect changes
        //this._object = this._dataService.getObject(); // DISABLED BECAUSE PARENT OBJECT IS NOT UPDATED, CHECK BELOW
    }

    /**
     * Refresh diff control
     * @returns {BaseReceiptDocumentFormPopupExtComponent}
     */
    protected refreshDiffControl()
    {
        if (!this._dependencyDataServiceArr[0] || !this._dependencyDataServiceArr[1]) {
            // Dependencies has not been loaded yet
            return this;
        }

        // [settlement, payment]
        let totals = [0, 0];

        for (let index in this._dependencyDataServiceArr) {
            let objects = this._dependencyDataServiceArr[index].getProviderAttr('objects');
            for (let object of objects) {
                totals[index] += parseFloat(object['value'] || '0');
            }
        }

        this._$diffControl.val((Math.round((totals[0] - totals[1]) * 100) / 100).toFixed(2));

        return this;
    }

    /**
     * Overrides the parent method
     * @returns {Promise}
     */
    public save(): Promise<any>
    {
        let that = this,
            route = this._dataService.getRoute('edit-receipt');

        return new Promise(function(resolve, reject) {
            that._formService.save(route).then(
                data => { return resolve(data); },
                errors => { return reject(errors); }
            );
        });
    }

    /**
     * Load dependency
     * @param dependency
     * @param module
     * @param viewContainerRef
     * @returns {Object}
     */
    protected loadDependency(dependency, module, viewContainerRef: ViewContainerRef)
    {
        // Load dependency
        let that = this,
            dependencyUrlProvider = (
                this._helperService.getAppVar('route')
                + 'accounting/client-document-receipt-' + dependency + '/data/'
                + this._formService.getObject()['id']
            );

        this._postService.post(dependencyUrlProvider, null).then(
            data => {
                let providers = [
                        {provide: 'DataService', useClass: DataService},
                        ActionsService,
                        {provide: 'DataServiceProvider', useValue: that._helperService.getDataServiceProvider(data)},
                        {provide: 'ActionsServiceProvider', useValue: that._helperService.getActionsServiceProvider(data)},
                        {provide: 'Provider', useValue: that._helperService.getDataBoxProvider(data)},
                        {provide: 'ParentDataService', useValue: this._dataService}
                    ],
                    dependencyIndex = 0;

                switch (dependency) {
                    case 'settlement':
                        dependencyIndex = 0;
                        // Popups provider
                        providers = providers.concat([
                            {provide: 'Popups', useValue: {
                                add: {
                                    module: ClientDocumentSettlementAddFormPopupExtModule,
                                    component: 'FormPopupComponent',
                                    providers: [
                                        FormService,
                                        {provide: 'Provider', useValue: this._helperService.getFormProvider(data)},
                                        {provide: 'ParentFormService', useValue: that._formService},
                                        NavManagerService,
                                        WizardManagerService
                                    ]
                                },
                                edit: {
                                    module: ClientDocumentSettlementEditFormPopupExtModule,
                                    component: 'FormPopupComponent',
                                    providers: [
                                        FormService,
                                        {provide: 'Provider', useValue: that._helperService.getFormProvider(data)}
                                    ]
                                }
                            }}
                        ]);
                        break;
                    default:
                        dependencyIndex = 1;
                        // Popups provider
                        providers = providers.concat([
                            {provide: 'Popups', useValue: {
                                module: ClientDocumentPaymentEditFormPopupExtModule,
                                component: 'FormPopupComponent',
                                providers: [
                                    FormService,
                                    {provide: 'Provider', useValue: this._helperService.getFormProvider(data)}
                                ]
                            }}
                        ]);
                }

                let injector = ReflectiveInjector.fromResolvedProviders(
                    ReflectiveInjector.resolve(providers),
                    that._injector
                );

                that._dependencyDataServiceArr[dependencyIndex] = injector.get('DataService');
                that._onDependencyObjectsChangeSubscription[dependencyIndex]
                    = that._dependencyDataServiceArr[dependencyIndex].getOnObjectsChangeEmitter()
                        .subscribe(data => { that.refreshDiffControl() });

                that._dynamicComponentLoaderService.load(
                    module,
                    'MainComponent',
                    viewContainerRef,
                    injector
                ).then(
                    componentRef => {
                        that.refreshDiffControl();
                        return true;
                    },
                    errors => { console.log(errors); return null; }
                );
            },
            errors => { console.log(errors); return false; }
        );

        return this;
    }

    /**
     * Lifecycle callback
     */
    ngAfterViewInit()
    {
        super.ngAfterViewInit();

        // Get array of ViewContainerRef
        this._llViewContainerRefArr = this.lazyLoadViewContainerRefQL.toArray();
        // Diff control
        this._$diffControl = $(this._elementRef.nativeElement).find('.js_diffControl');

        this.loadDependency('settlement',
            ClientDocumentSettlementIndexMainExtModule,
            this._llViewContainerRefArr[0]
        );

        this.loadDependency('payment',
            ClientDocumentPaymentIndexExtModule,
            this._llViewContainerRefArr[1]
        );
    }

    /**
     * Lifecycle callback
     */
    ngOnDestroy()
    {
        // Check subscription (if component load fail, subscription may not exist)
        if (this._onDependencyObjectsChangeSubscription[0]) {
            this._onDependencyObjectsChangeSubscription[0].unsubscribe();
        }
        // Check subscription (if component load fail, subscription may not exist)
        if (this._onDependencyObjectsChangeSubscription[1]) {
            this._onDependencyObjectsChangeSubscription[1].unsubscribe();
        }
    }
}