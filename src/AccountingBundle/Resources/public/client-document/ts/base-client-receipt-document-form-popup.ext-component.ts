import {Component, ElementRef, Inject, Optional, Injector, ReflectiveInjector, Renderer, ViewChildren, QueryList, ViewContainerRef} from '@angular/core';
import {FormBuilder} from '@angular/forms';
import {Helper} from '../../../../../AppBundle/Resources/public/ts/helper';
import {FormPopupExtensionComponent, FormProvider} from '../../../../../AppBundle/Resources/public/ts/form/form-popup.extension-component';
import {DataService} from '../../../../../AppBundle/Resources/public/ts/data-service/data.service';
import {ActionsService} from '../../../../../AppBundle/Resources/public/ts/actions/actions.service';
import {FormService} from '../../../../../AppBundle/Resources/public/ts/form/form.service';
import {DynamicComponentLoaderService} from '../../../../../AppBundle/Resources/public/ts/dynamic-component-loader.service';
import {PostService} from '../../../../../AppBundle/Resources/public/ts/post.service';


/* Import dependencies */
// Parent id of dependencies
var parentController = Helper.getGlobalVar('conf')['localData']['controller'], // Determines the type of booking
    parentId = Helper.getGlobalVar('conf')['object']['id'],
    parentDocumentId = Helper.getGlobalVar('conf')['object']['clientDocumentObj'];

// Save last templateUrl
let tmpTemplateUrl = Helper.getRuntimeVar('templateUrl');

// ClientDocumentReceiptSettlement
import {ClientDocumentReceiptSettlementExtModule} from '../../client-document-receipt-settlement/index/ts/client-document-receipt-settlement.ext-module';
Helper.setRuntimeVar('templateUrl', Helper.getGlobalVar('route') + 'accounting/client-document-receipt-settlement/edit/' + parentDocumentId + '/0');
import {ClientDocumentReceiptSettlementFormPopupExtModule} from "../../client-document-receipt-settlement/edit/ts/client-document-receipt-settlement-form-popup.ext-module";
// ClientDocumentReceiptPayment
import {ClientDocumentReceiptPaymentExtModule} from '../../client-document-receipt-payment/index/ts/client-document-receipt-payment.ext-module';
Helper.setRuntimeVar('templateUrl', Helper.getGlobalVar('route') + 'accounting/client-document-receipt-payment/edit/' + parentDocumentId + '/0');
import {ClientDocumentReceiptPaymentFormPopupExtModule} from "../../client-document-receipt-payment/edit/ts/client-document-receipt-payment-form-popup.ext-module";

// Restore last templateUrl
Helper.setRuntimeVar('templateUrl', tmpTemplateUrl);
/* /Import dependencies */


@Component({
    selector: '.js_baseClientDocumentReceiptFormPopup',
    template: ''
})
export class BaseClientReceiptDocumentFormPopupExtComponent extends FormPopupExtensionComponent
{
    // To load document detail
    @ViewChildren('js_lazyLoadContainer', {read: ViewContainerRef}) lazyLoadViewContainerRefQL: QueryList<ViewContainerRef>;
    protected _llViewContainerRefArr: ViewContainerRef[] = [];
    // Data service of dependencies to calc the "diffControl" [settlement, payment]
    protected _dependencyDataServiceArr: any[] = [null, null];
    // To handle with dependencies objects changes to refresh the diffControl
    protected _onDependencyObjectsChangeSubscription: any[] = [null, null];

    // Constructor vars
    protected _injector: Injector;
    protected _parentDataService: any;
    protected _helperService: any;
    protected _dynamicComponentLoaderService: DynamicComponentLoaderService;
    protected _postService: PostService;

    // To check if object has changed to refresh parent
    //protected _object: any;
    protected _$diffControl: any;

    constructor() { super(); }

    public initBaseClientReceiptDocumentFormPopupExtComponent(
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
        super.initFormPopupExtensionComponent(
            elementRef,
            renderer,
            provider,
            formService,
            dataService
        );

        // Constructor vars
        this._injector = injector;
        this._parentDataService = parentDataService;
        this._helperService = helperService;
        this._dynamicComponentLoaderService = dynamicComponentLoaderService;
        this._postService = postService;

        // Save initial object to detect changes
        //this._object = this._dataService.getObject(); // DISABLED BECAUSE PARENT OBJECT IS NOT UPDATED, CHECK BELOW

        // Set choices route according with the entity
        this.updateEntityAddressAutoCompleteProviderChoicesRoute();
    }

    /**
     * Update Entity Address Auto Complete Provider Choices Route
     * Set choices route according with the entity
     * @returns {Object}
     */
    protected updateEntityAddressAutoCompleteProviderChoicesRoute()
    {
        // Update entityAddress autoCompleteProvider choices route to the updated entity
        let autoCompleteProviders = this._injector.get('AutoCompleteProviders');
        if (autoCompleteProviders['entityAddressObj']['childInjector']) {
            let choicesDataService = autoCompleteProviders['entityAddressObj']['childInjector'].get('DataServiceChoices'),
                choicesRoute = choicesDataService.getRoute('choices');
            choicesRoute = (choicesRoute.substr(0, choicesRoute.lastIndexOf('/') + 1)
                + this._formService.getObject()['entityObj']
            );
            choicesDataService.setRoute('choices', choicesRoute);
        } else {
            autoCompleteProviders['entityAddressObj']['urlConf'] = (
                autoCompleteProviders['entityAddressObj']['urlConf'].substr(
                    0,
                    (autoCompleteProviders['entityAddressObj']['urlConf'].lastIndexOf('/') + 1)
                )
                + this._formService.getObject()['entityObj']
            );
        }

        return this;
    }

    /**
     * onEntityAddressChange
     * @param value
     */
    protected onEntityAddressChange(value: string): void
    {
        this._dataService.runAction(
            (this._dataService.getRoute('edit-entity-address')
                + '\\'
                + this._formService.getObject()['id']
            ),
            {entityAddressObj: value}
        ).then(
            data => {
                if (data['object']) {
                    // Copy values instead of set the updated object to avoid lost user changes like dates, comment, etc.
                    let obj = this._formService.getObject();
                    let originalObj = this._formService.getOriginalObject();
                    for (let field of ['entityAddressObj', 'entityStreet1', 'entityStreet2', 'entityPostCode', 'entityCity', 'entityRegion']) {
                        obj[field] = (data['object'][field] || null);
                        // Update original object yet, because this changes are already saved in database,
                        // otherwise user will be asked when close the form, because objects are different (have changes),
                        // and user can wrongly reset the object for the previous address when this procedure is no more
                        // possible because object is updated in database
                        originalObj[field] = obj[field];
                    }
                }
                return;
            },
            errors => { console.log(errors); return; }
        );
    }

    /**
     * Refresh diff control
     * @returns {BaseClientDocumentReceiptFormPopupExtComponent}
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
                totals[index] += object['value'];
            }
        }

        this._$diffControl.val((Math.round((totals[0] - totals[1]) * 100) / 100).toFixed(2));

        return this;
    }

    /**
     * Load dependency
     * @param dependency
     * @param module
     * @param popup
     * @param viewContainerRef
     * @param providers
     * @returns {Object}
     */
    protected loadDependency(dependency, module, popup, viewContainerRef: ViewContainerRef, providers = [])
    {
        // Load dependency
        let that = this,
            dependencyUC = this._helperService.uCFirst(dependency), // Upper Case
            dependencyUrlProvider = (
                this._helperService.getGlobalVar('route')
                + 'accounting/client-document-receipt-' + dependency + '/data/'
                + this._formService.getObject()['clientDocumentObj']
            );

        this._postService.post(dependencyUrlProvider, null).then(
            data => {
                providers = providers.concat([
                        {provide: 'DataService', useClass: DataService},
                        ActionsService,
                        {provide: 'DataServiceProvider', useValue: that._helperService.getDataServiceProvider(data)},
                        {provide: 'ActionsServiceProvider', useValue: that._helperService.getActionsServiceProvider(data)},
                        {provide: 'Provider', useValue: that._helperService.getDataBoxProvider(data)},
                        {provide: 'Popups', useValue: {
                            module: popup,
                            component: 'ClientDocumentReceipt' + dependencyUC + 'FormPopupComponent',
                            providers: [
                                FormService,
                                {provide: 'Provider', useValue: this._helperService.getFormProvider(data)}
                            ]
                        }},
                        {provide: 'ParentDataService', useValue: this._dataService}
                    ]);

                    let injector = ReflectiveInjector.fromResolvedProviders(
                        ReflectiveInjector.resolve(providers),
                        that._injector
                    );

                let dependencyIndex = ((dependency == 'settlement') ? 0 : 1);
                that._dependencyDataServiceArr[dependencyIndex] = injector.get('DataService');
                that._onDependencyObjectsChangeSubscription[dependencyIndex]
                    = that._dependencyDataServiceArr[dependencyIndex].getOnObjectsChangeEmitter()
                        .subscribe(data => {that.refreshDiffControl()});

                that._dynamicComponentLoaderService.load(
                    module,
                    'ClientDocumentReceipt' + dependencyUC + 'Component',
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

        // Get array of ViewContainerRef
        this._llViewContainerRefArr = this.lazyLoadViewContainerRefQL.toArray();
        // Diff control
        this._$diffControl = $(this._elementRef.nativeElement).find('.js_diffControl');

        this.loadDependency('settlement',
            ClientDocumentReceiptSettlementExtModule,
            ClientDocumentReceiptSettlementFormPopupExtModule,
            this._llViewContainerRefArr[0],
            [
                {provide: 'AutoCompleteProviders', useValue: {
                    invoiceClientDocumentObj: {
                        urlConf: (
                            this._helperService.getGlobalVar('route') + 'booking/'
                            + parentController + '-client-document/conf/' + parentId
                        ),
                        urlChoicesParams: this._formService.getObject()['clientObj'] + '/INVOICE',
                        field: 'CONCAT(clientDocument.codePrefix, clientDocument.codeNumber)',
                        control: 'none'
                    }
                }}
            ]
        );

        this.loadDependency('payment',
            ClientDocumentReceiptPaymentExtModule,
            ClientDocumentReceiptPaymentFormPopupExtModule,
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

        // If object has no changes or "id" is not defined, popup was open and closed without save the object,
        // and if the flag '_isSessionStorage' is defined, the object was not saved in database,
        // so doesn't make sense refresh the objects
        /*if ((this._object != this._dataService.getObject())
            && (this._dataService.getObject()['id'])
            && (!this._dataService.getObject()['_isSessionStorage'])
        ) {
            // Update object and parent object
            this._parentDataService.refreshObject();
        }*/ // PARENT DON'T HAVE RECEIPT TOTALS, SO DON'T NEED TO BE UPDATED
    }
}