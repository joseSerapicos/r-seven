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

import {MainExtModule as SupplierDocumentRectificationIndexMainExtModule} from '../../supplier-document-rectification/index/ts/src/main.ext-module';
import {FormPopupExtModule as SupplierDocumentRectificationEditFormPopupExtModule} from "../../supplier-document-rectification/edit/ts/src/form-popup.ext-module";
import {FormPopupExtModule as SupplierDocumentRectificationAddFormPopupExtModule} from "../../supplier-document-rectification/add/ts/src/form-popup.ext-module";

/* /Import dependencies */


@Component({
    selector: '.js_baseSupplierInvoiceRectificationDocumentFormPopup',
    template: ''
})
export class BaseInvoiceRectificationDocumentFormPopupExtComponent extends BaseFormPopupExtComponent
{
    // To load SupplierDocumentInvoiceRectificationExtModule
    @ViewChild('js_lazyLoadContainer', {read: ViewContainerRef}) lazyLoadViewContainerRef: ViewContainerRef;
    // To handle with dependency objects changes to refresh the local object
    protected _onDependencyObjectsChangeSubscription: any;

    // Constructor vars
    protected _parentDataService: any;
    protected _helperService: any;
    protected _dynamicComponentLoaderService: DynamicComponentLoaderService;
    protected _postService: PostService;

    // To check if object has changed to refresh parent
    protected _object: any;

    constructor() { super(); }

    public initBaseInvoiceRectificationDocumentFormPopupExtComponent(
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
        this._object = this._dataService.getObject();
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
                this._helperService.getAppVar('route')
                + 'bck/accounting/supplier-document-invoice-rectification/data/'
                + this._formService.getObject()['id']
            );

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
                                module: SupplierDocumentRectificationAddFormPopupExtModule,
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
                                module: SupplierDocumentRectificationEditFormPopupExtModule,
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

                let dependencyDataService = injector.get('DataService');
                that._onDependencyObjectsChangeSubscription
                    = dependencyDataService.getOnObjectsChangeEmitter()
                        .subscribe(data => {
                            // Update local object
                            that._dataService.refreshObject();
                        });

                that._dynamicComponentLoaderService.load(
                    SupplierDocumentRectificationIndexMainExtModule,
                    'MainComponent',
                    that.lazyLoadViewContainerRef,
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
            && this._parentDataService
        ) {
            // Update object and parent object
            this._parentDataService.refreshObject();
        }
    }
}