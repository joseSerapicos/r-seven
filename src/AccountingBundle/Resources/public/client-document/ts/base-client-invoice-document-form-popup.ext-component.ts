import {Component, ElementRef, Inject, Optional, Injector, ReflectiveInjector, Renderer, ViewChild, ViewContainerRef} from '@angular/core';
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
var parentController = Helper.getGlobalVar('conf')['localData']['controller']; // Determines the type of booking

// Save last templateUrl
let tmpTemplateUrl = Helper.getRuntimeVar('templateUrl');

// ClientDocumentInvoiceDetail
import {ClientDocumentInvoiceDetailExtModule} from '../../client-document-invoice-detail/index/ts/client-document-invoice-detail.ext-module';
Helper.setRuntimeVar('templateUrl', Helper.getGlobalVar('route') + 'booking/' + parentController + '-client-document-invoice-detail/edit/0');
import {ClientDocumentInvoiceDetailFormPopupExtModule} from "../../client-document-invoice-detail/edit/ts/client-document-invoice-detail-form-popup.ext-module";

// Restore last templateUrl
Helper.setRuntimeVar('templateUrl', tmpTemplateUrl);
/* /Import dependencies */


@Component({
    selector: '.js_baseClientDocumentInvoiceFormPopup',
    template: ''
})
export class BaseClientInvoiceDocumentFormPopupExtComponent extends FormPopupExtensionComponent
{
    // To load ClientDocumentInvoiceDetailExtModule
    @ViewChild('js_lazyLoadContainer', {read: ViewContainerRef}) lazyLoadViewContainerRef: ViewContainerRef;
    // To handle with dependency objects changes to refresh the local object
    protected _onDependencyObjectsChangeSubscription: any;

    // Constructor vars
    protected _injector: Injector;
    protected _parentDataService: any;
    protected _helperService: any;
    protected _dynamicComponentLoaderService: DynamicComponentLoaderService;
    protected _postService: PostService;

    // To check if object has changed to refresh parent
    protected _object: any;

    constructor() { super(); }

    public initBaseClientInvoiceDocumentFormPopupExtComponent(
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
        this._object = this._dataService.getObject();

        // Set choices route according with the entity
        this.updateEntityAddressAutoCompleteProviderChoicesRoute();
    }

    /**
     * Update Entity Address Auto Complete Provider Choices Route
     * Set choices route according with the entity
     * @returns {ClientDocumentEditFormPopupComponent}
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
     * Overrides the parent method
     * @returns {Promise}
     */
    public save(): Promise<any>
    {
        let that = this,
            route = this._dataService.getRoute('edit-invoice');

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

        // Load dependency
        let that = this,
            dependencyUrlProvider = (
                this._helperService.getGlobalVar('route')
                + 'booking/' + parentController + '-client-document-invoice-detail/data/'
                + this._formService.getObject()['clientDocumentObj']
            );

        this._postService.post(dependencyUrlProvider, null).then(
            data => {
                let providers = [
                        {provide: 'DataService', useClass: DataService},
                        ActionsService,
                        {provide: 'DataServiceProvider', useValue: that._helperService.getDataServiceProvider(data)},
                        {provide: 'ActionsServiceProvider', useValue: that._helperService.getActionsServiceProvider(data)},
                        {provide: 'Provider', useValue: that._helperService.getDataBoxProvider(data)},
                        {provide: 'Popups', useValue: {
                            module: ClientDocumentInvoiceDetailFormPopupExtModule,
                            component: 'ClientDocumentInvoiceDetailFormPopupComponent',
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

                let dependencyDataService = injector.get('DataService');
                that._onDependencyObjectsChangeSubscription
                    = dependencyDataService.getOnObjectsChangeEmitter()
                        .subscribe(data => {
                            // Update local object
                            that._dataService.refreshObject();
                        });

                that._dynamicComponentLoaderService.load(
                    ClientDocumentInvoiceDetailExtModule,
                    'ClientDocumentInvoiceDetailComponent',
                    that.lazyLoadViewContainerRef,
                    injector
                ).then(
                    componentRef => {
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

        // If object has no changes or "id" is not defined, popup was open and closed without save the object,
        // and if the flag '_isSessionStorage' is defined, the object was not saved in database,
        // so doesn't make sense refresh the objects
        if ((this._object != this._dataService.getObject())
            && (this._dataService.getObject()['id'])
            && (!this._dataService.getObject()['_isSessionStorage'])
        ) {
            // Update object and parent object
            this._parentDataService.refreshObject();
        }
    }
}