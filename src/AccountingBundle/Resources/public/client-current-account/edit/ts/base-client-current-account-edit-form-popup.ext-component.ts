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

// ClientCurrentAccountDetail
import {ClientCurrentAccountDetailExtModule} from '../../../client-current-account-detail/index/ts/client-current-account-detail.ext-module';
Helper.setRuntimeVar('templateUrl', Helper.getGlobalVar('route') + 'booking/' + parentController + '-service-price/edit/0');
import {ClientCurrentAccountDetailFormPopupExtModule} from "../../../client-current-account-detail/edit/ts/client-current-account-detail-form-popup.ext-module";

// Restore last templateUrl
Helper.setRuntimeVar('templateUrl', tmpTemplateUrl);
/* /Import dependencies */


@Component({
    selector: '.js_clientCurrentAccountEditFormPopup',
    templateUrl: Helper.getRuntimeVar('templateUrl')
})
export class BaseClientCurrentAccountEditFormPopupExtComponent extends FormPopupExtensionComponent
{
    // To load ClientCurrentAccountDetailExtModule
    @ViewChild('js_lazyLoadContainer', {read: ViewContainerRef}) lazyLoadViewContainerRef: ViewContainerRef;

    // To check if object has changed to refresh parents
    protected _object: any;
    protected _childDataService: DataService;
    protected _childObject: any; // Detail has changed

    constructor(
        elementRef: ElementRef,
        renderer: Renderer,
        @Inject('Provider') provider: FormProvider,
        formService: FormService,
        @Inject('DataService') dataService: any,
        protected _injector: Injector,
        @Inject('ParentDataService') protected _parentDataService: any,
        @Inject('HelperService') protected _helperService: any,
        protected _dynamicComponentLoaderService: DynamicComponentLoaderService,
        protected _postService: PostService
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

        // Set choices route according with the entity
        //this.updateEntityServiceChoicesRoute();
    }

    /**
     * Update Entity Service Choices Route
     * Set choices route according with the entity
     * @returns {ClientCurrentAccountEditFormPopupComponent}
     */
    protected updateEntityServiceChoicesRoute()
    {
        let choicesDataService = this._injector.get('AutoCompleteProviders')['entityAddressObj']['childInjector'].get('DataServiceChoices'),
        choicesRoute = choicesDataService.getRoute('choices');

        choicesRoute = (choicesRoute.substr(0, choicesRoute.lastIndexOf('/') + 1)
            + this._formService.getObject()['entityObj']
        );

        choicesDataService.setRoute('choices', choicesRoute);

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
                + '\\'
                + (this._formService.getObject()['_isSessionStorage'] ? 'session' : 'db')
            ),
            {entityAddressObj: value}
        ).then(
            data => {
                if (data['object']) {
                    let obj = this._formService.getObject();
                    for (let field of ['entityStreet1', 'entityStreet2', 'entityPostCode', 'entityCity', 'entityRegion']) {
                        obj[field] = (data['object'][field] || null);
                    }
                }
                return;
            },
            errors => { console.log(errors); return; }
        );
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
                + 'booking/' + parentController + '-client-current-account-detail/data/'
                + this._formService.getObject()['clientCurrentAccountObj']
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
                            module: ClientCurrentAccountDetailFormPopupExtModule,
                            component: 'ClientCurrentAccountDetailFormPopupComponent',
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
                that._childObject = that._childDataService.getObject();

                that._dynamicComponentLoaderService.load(
                    ClientCurrentAccountDetailExtModule,
                    'ClientCurrentAccountDetailComponent',
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
        // If object has no changes or "id" is not defined, popup was open and closed without save the object,
        // and if the flag '_isSessionStorage' is defined, the object was not saved in database,
        // so doesn't make sense refresh the objects
        if (((this._object != this._dataService.getObject())
                && (this._dataService.getObject()['id'])
                && (!this._dataService.getObject()['_isSessionStorage'])
            )
//            || (this._childObject != this._childDataService.getObject()) // If child object was changed,
            // an object was selected for edit or add in child DataBox
            // and may have been changed, so we need to refresh the parent object
        ) {
            // Update object and parent object
//            this._dataService.refreshObject(); @TODO check if it is necessary, because the detail already update the parent that is this object right???
            this._parentDataService.refreshObject();
        }
    }
}