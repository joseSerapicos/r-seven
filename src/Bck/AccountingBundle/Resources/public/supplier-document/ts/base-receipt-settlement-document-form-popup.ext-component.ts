import {Component, ElementRef, Inject, Optional, Injector, ReflectiveInjector, Renderer, ViewChild, ViewContainerRef} from '@angular/core';
import {FormBuilder} from '@angular/forms';
import {BaseFormPopupExtComponent, FormProvider} from '../../base-document/ts/base-form-popup.ext-component';
import {DataService} from '../../../../../../AppBundle/Resources/public/ts/data-service/data.service';
import {ActionsService} from '../../../../../../AppBundle/Resources/public/ts/actions/actions.service';
import {FormService} from '../../../../../../AppBundle/Resources/public/form/ts/form.service';
import {NavManagerService} from '../../../../../../AppBundle/Resources/public/ts/nav-manager/nav-manager.service';
import {WizardManagerService} from '../../../../../../AppBundle/Resources/public/wizard/ts/src/wizard-manager.service';
import {DynamicComponentLoaderService} from '../../../../../../AppBundle/Resources/public/ts/dynamic-component-loader.service';
import {PostService} from '../../../../../../AppBundle/Resources/public/ts/post.service';


/* Import dependencies */

// SupplierDocumentReceiptSettlement
import {MainExtModule as SupplierDocumentSettlementIndexMainExtModule} from '../../supplier-document-settlement/index/ts/src/main.ext-module';
import {FormPopupExtModule as SupplierDocumentSettlementEditFormPopupExtModule} from "../../supplier-document-settlement/edit/ts/src/form-popup.ext-module";
import {FormPopupExtModule as SupplierDocumentSettlementAddFormPopupExtModule} from "../../supplier-document-settlement/add/ts/src/form-popup.ext-module";

/* /Import dependencies */


@Component({
    selector: '.js_baseSupplierDocumentFormPopup',
    template: ''
})
export class BaseReceiptSettlementDocumentFormPopupExtComponent extends BaseFormPopupExtComponent
{
    // To load document detail
    @ViewChild('js_lazyLoadContainer', {read: ViewContainerRef}) lazyLoadViewContainerRef: ViewContainerRef;
    // Data service of dependency to calc the "diffControl"
    protected _dependencyDataService: any = null;
    // To handle with dependency objects change to refresh the diffControl
    protected _onDependencyObjectsChangeSubscription: any = null;

    // Constructor vars
    protected _parentDataService: any;
    protected _helperService: any;
    protected _dynamicComponentLoaderService: DynamicComponentLoaderService;
    protected _postService: PostService;

    // To check if object has changed to refresh parent
    //protected _object: any;
    protected _$diffControl: any;

    constructor() { super(); }

    public initBaseReceiptSettlementDocumentFormPopupExtComponent(
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
     * @returns {BaseReceiptSettlementDocumentFormPopupExtComponent}
     */
    protected refreshDiffControl()
    {
        if (!this._dependencyDataService) {
            // Dependencies has not been loaded yet
            return this;
        }

        // [DEBIT, CREDIT]
        let totals = {'DEBIT': 0, 'CREDIT': 0};

        let objects = this._dependencyDataService.getProviderAttr('objects');
        for (let object of objects) {
            totals[object['documentType_operation']] += parseFloat(object['value'] || '0');
        }

        this._$diffControl.val((Math.round((totals.DEBIT - totals.CREDIT) * 100) / 100).toFixed(2));

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
     * Lifecycle callback
     */
    ngAfterViewInit()
    {
        super.ngAfterViewInit();

        let that = this,
            dependencyUrlProvider = (
                this._helperService.getAppVar('route')
                + 'bck/accounting/supplier-document-receipt-settlement/data/'
                + this._formService.getObject()['id']
            );

        // Diff control
        this._$diffControl = $(this._elementRef.nativeElement).find('.js_diffControl');

        // Load dependency
        this._postService.post(dependencyUrlProvider, null).then(
            data => {
                let providers = [
                        {provide: 'DataService', useClass: DataService},
                        ActionsService,
                        {provide: 'DataServiceProvider', useValue: that._helperService.getDataServiceProvider(data)},
                        {provide: 'ActionsServiceProvider', useValue: that._helperService.getActionsServiceProvider(data)},
                        {provide: 'LegendProvider', useValue: that._helperService.getLegendProvider(data)},
                        {provide: 'Provider', useValue: that._helperService.getDataBoxProvider(data)},
                        {provide: 'Popups', useValue: {
                            add: {
                                module: SupplierDocumentSettlementAddFormPopupExtModule,
                                component: 'FormPopupComponent',
                                providers: [
                                    FormService,
                                    {provide: 'Provider', useValue: this._helperService.getFormProvider(data)},
                                    {provide: 'ParentFormService', useValue: that._formService},
                                    {provide: 'ParentDataService', useValue: null}, // It's not needed in this context
                                    NavManagerService,
                                    WizardManagerService
                                ]
                            },
                            edit: {
                                module: SupplierDocumentSettlementEditFormPopupExtModule,
                                component: 'FormPopupComponent',
                                providers: [
                                    FormService,
                                    {provide: 'Provider', useValue: that._helperService.getFormProvider(data)}
                                ]
                            }
                        }},
                        {provide: 'ParentDataService', useValue: that._dataService}
                    ],
                    injector = ReflectiveInjector.fromResolvedProviders(
                        ReflectiveInjector.resolve(providers),
                        that._injector
                    );

                that._dependencyDataService = injector.get('DataService');
                that._onDependencyObjectsChangeSubscription
                    = that._dependencyDataService.getOnObjectsChangeEmitter()
                    .subscribe(data => {that.refreshDiffControl()});

                that._dynamicComponentLoaderService.load(
                    SupplierDocumentSettlementIndexMainExtModule,
                    'MainComponent',
                    that.lazyLoadViewContainerRef,
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
    }

    /**
     * Lifecycle callback
     */
    ngOnDestroy()
    {
        // Check subscription (if component load fail, subscription may not exist)
        if (this._onDependencyObjectsChangeSubscription) {
            this._onDependencyObjectsChangeSubscription.unsubscribe();
        }
    }
}