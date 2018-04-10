import {Component, ElementRef, Inject, Injector, Renderer, QueryList, Optional, ViewChildren, ViewContainerRef, ViewChild} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {FormService} from '../../../../../../../AppBundle/Resources/public/form/ts/form.service';
import {DataService} from "../../../../../../../AppBundle/Resources/public/ts/data-service/data.service";
import {WizardFormPopupComponent, WizardPopupProvider, IWizard, LazyLoadData} from '../../../../../../../AppBundle/Resources/public/wizard/ts/src/wizard-form-popup.component';
import {WizardManagerService} from '../../../../../../../AppBundle/Resources/public/wizard/ts/src/wizard-manager.service';

// Password
import {AddFormPasswordModule} from './add-form-password.module';


@Component({
    selector: '.js_addFormPopup',
    templateUrl: '../templates/add.component.html'
})
export class AddComponent extends WizardFormPopupComponent implements IWizard
{
    // For NavManagerService
    @ViewChildren('js_lazyLoadContainer', {read: ViewContainerRef}) lazyLoadViewContainerRefQL: QueryList<ViewContainerRef>;

    constructor(
        elementRef: ElementRef,
        renderer: Renderer,
        @Inject('Provider') provider: WizardPopupProvider,
        wizardManagerService: WizardManagerService,
        formService: FormService,
        @Inject('HelperService') protected _helperService: any,
        @Inject('DataService') protected _dataService: any
    ) {
        // Call parent
        super(
            elementRef,
            renderer,
            provider,
            wizardManagerService,
            formService
        );
    }

    /**
     * Submit navigation (when leave one container to navigate in other one)
     * @param index (index to validate)
     * @returns {Promise<boolean>}
     */
    public submitNav(index: number): Promise<boolean>
    {
        let that = this;

        return new Promise(function(resolve, reject) {
            switch (index) {
                case 0:
                    // Save form
                    return that._formService.save().then(
                        data => { return resolve(true); },
                        errors => { return reject(false); }
                    );
                case 1:
                    let componentRef = that._wizardManagerService.getComponentRef(index);

                    // Save form
                    return componentRef.instance._formService.save().then(
                        data => {
                            // Update current object with object with password defined
                            // (otherwise if you edit this object, password is empty)
                            that._dataService.setObject(componentRef.instance._dataService.getObject());
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
            case 1:
                // Simulate a provider to avoid connect with server
                let dataProvider = this._helperService.getDataServiceProvider({
                    fields: this._dataService.getProviderAttr('fields'),
                    route: {edit: {url: (
                        this._helperService.getAppVar('route') + 'admin/user/edit-password/'
                        + this._formService.getObject()['id']
                    )}},
                    search: this._dataService.getProviderAttr('search')
                });

                return {
                    module: AddFormPasswordModule,
                    component: 'AddFormPasswordComponent',
                    dataProvider: dataProvider
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
            case 1:
                return [
                    {provide: 'DataService', useClass: DataService},
                    FormService,
                    {provide: 'DataServiceProvider', useValue: data}
                ];
        }

        return null;
    }
}