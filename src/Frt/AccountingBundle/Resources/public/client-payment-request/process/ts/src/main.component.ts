import {Component, ElementRef, Inject, Injector, ReflectiveInjector, Renderer, QueryList, Optional, ViewChildren, ViewContainerRef, ViewChild} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {DataService} from '../../../../../../../../AppBundle/Resources/public/ts/data-service/data.service';
import {DynamicComponentLoaderService} from '../../../../../../../../AppBundle/Resources/public/ts/dynamic-component-loader.service';
import {WizardPopupComponent, WizardPopupProvider, IWizard, LazyLoadData} from '../../../../../../../../AppBundle/Resources/public/wizard/ts/src/wizard-popup.component';
import {WizardManagerService} from '../../../../../../../../AppBundle/Resources/public/wizard/ts/src/wizard-manager.service';
import {PostService} from '../../../../../../../../AppBundle/Resources/public/ts/post.service';
import {FormService} from '../../../../../../../../AppBundle/Resources/public/form/ts/form.service';


/* Import dependencies */

// First step dependencies
// Contacts dependency
import {EditExtModule as EntityContactsEditExtModule} from '../../../../../../../../Bck/EntitiesBundle/Resources/public/entity-contacts/index/ts/src/edit.ext-module';
// Auto-complete
import {EntityAddressEditExtModule} from '../../../../../../../../Bck/EntitiesBundle/Resources/public/entity/detail/ts/src/entity-address-edit.ext-module';
import {EntityPhoneEditExtModule} from '../../../../../../../../Bck/EntitiesBundle/Resources/public/entity/detail/ts/src/entity-phone-edit.ext-module';
import {EntityEmailEditExtModule} from '../../../../../../../../Bck/EntitiesBundle/Resources/public/entity/detail/ts/src/entity-email-edit.ext-module';

import {Step2ExtModule} from './step2.ext-module';
/* /Import dependencies */


@Component({
    selector: '#js_main',
    templateUrl: '../templates/main.component.html'
})
export class MainComponent extends WizardPopupComponent implements IWizard
{
    // For NavManagerService
    @ViewChildren('js_lazyLoadContainer', {read: ViewContainerRef}) lazyLoadViewContainerRefQL: QueryList<ViewContainerRef>;

    // For entity contacts dependency
    @ViewChild('js_entityContactsForm', {read: ViewContainerRef}) entityContactsFormViewContainerRef: ViewContainerRef;


    constructor(
        elementRef: ElementRef,
        renderer: Renderer,
        @Inject('Provider') provider: WizardPopupProvider,
        wizardManagerService: WizardManagerService,
        protected _postService: PostService,
        @Inject('DataService') protected _dataService: any,
        protected _injector: Injector,
        protected _dynamicComponentLoaderService: DynamicComponentLoaderService,
        @Inject('HelperService') protected _helperService: any
    ) {
        // Call parent
        super(
            elementRef,
            renderer,
            provider,
            wizardManagerService
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
                    componentRef = that._wizardManagerService.getComponentRef(index);
                    if (componentRef.instance._formService.validate()) {
                        return resolve(true);
                    }
                    return reject(false);
                case 1:
                    // Save form
                    componentRef = that._wizardManagerService.getComponentRef(index);
                    route = (componentRef.instance._dataService.getRoute('processStep2'));
                    // Force submit in case of user do not select any payment method and finish the process
                    componentRef.instance._formService.setForceSubmit(true);
                    return componentRef.instance._formService.save(route).then(
                        data => {
                            componentRef.instance._dataService.redirect('status');
                            return resolve(true);
                        },
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
            case 0:
                return {
                    module: EntityContactsEditExtModule,
                    component: 'EditComponent',
                    dataProvider: _app.dependencies['entityContacts']
                };
            case 1:
                return {
                    module: Step2ExtModule,
                    component: 'Step2Component',
                    dataProvider: _app.conf
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
            case 0:
                let that = this,
                    entityId = this._dataService.getObject()['entityObj'],
                    autoCompleteProviders = {
                        entityAddressObj: {
                            urlConf: (this._helperService.getAppVar('route') + 'entities/entity-address/conf/' + entityId),
                            control: 'edit',
                            popups: {
                                module: EntityAddressEditExtModule,
                                component: 'EntityAddressEditComponent',
                                providers: [
                                    {provide: 'Provider', useValue: this._helperService.getFormProvider({label: 'Address'})},
                                    FormService
                                ]
                            }
                        },
                        entityPhoneObj: {
                            urlConf: (this._helperService.getAppVar('route') + 'entities/entity-phone/conf/' + entityId),
                            control: 'edit',
                            popups: {
                                module: EntityPhoneEditExtModule,
                                component: 'EntityPhoneEditComponent',
                                providers: [
                                    {provide: 'Provider', useValue: this._helperService.getFormProvider({label: 'Phone'})},
                                    FormService
                                ]
                            }
                        },
                        entityEmailObj: {
                            urlConf: (this._helperService.getAppVar('route') + 'entities/entity-email/conf/' + entityId),
                            control: 'edit',
                            popups: {
                                module: EntityEmailEditExtModule,
                                component: 'EntityEmailEditComponent',
                                providers: [
                                    {provide: 'Provider', useValue: this._helperService.getFormProvider({label: 'Email'})},
                                    FormService
                                ]
                            }
                        }
                    };

                return [
                    {provide: 'DataService', useClass: DataService},
                    {provide: 'DataServiceProvider', useValue: this._helperService.getDataServiceProvider(data)},
                    FormService,
                    {provide: 'Provider', useValue: this._helperService.getFormProvider(data)},
                    {provide: 'AutoCompleteProviders', useValue: autoCompleteProviders}
                ];
            case 1:
                return [
                    {provide: 'DataService', useClass: DataService},
                    {provide: 'DataServiceProvider', useValue: this._helperService.getDataServiceProvider(data)},
                    FormService,
                    {provide: 'Provider', useValue: this._helperService.getFormProvider(data)},
                    // Reset FormServiceProvider to use DataServiceProvider as default values
                    {provide: 'FormServiceProvider', useValue: {
                        fields: ['paymentMethodObj']
                    }}
                ];
        }

        return null;
    }
}