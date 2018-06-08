import {Component, ElementRef, Inject, Injector, Renderer, QueryList, Optional, ViewChildren, ViewContainerRef, ViewChild} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {FormService} from '../../../../../../../../AppBundle/Resources/public/form/ts/form.service';
import {ActionsService} from '../../../../../../../../AppBundle/Resources/public/ts/actions/actions.service';
import {DataService} from "../../../../../../../../AppBundle/Resources/public/ts/data-service/data.service";
import {WizardManagerService} from '../../../../../../../../AppBundle/Resources/public/wizard/ts/src/wizard-manager.service';
import {WizardFormPopupExtComponent, WizardPopupProvider, IWizard, LazyLoadData} from '../../../../../../../../AppBundle/Resources/public/wizard/ts/src/wizard-form-popup.ext-component';


/* Import dependencies */
import {DataBoxExtensionModule} from '../../../../../../../../AppBundle/Resources/public/data-box/ts/src/data-box.extension-module';
import {Step2ExtModule as ClientDocumentInvoiceDetailAddStep2ExtModule} from './step2.ext-module';
/* /Import dependencies */


@Component({
    selector: '.js_addFormPopup',
    templateUrl: '../templates/form-popup.component.html'
})
export class FormPopupComponent extends WizardFormPopupExtComponent implements IWizard
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
        @Inject('DataService') protected _dataService: any,
        @Inject('ParentFormService') protected _parentFormService: any, // To get parent object
        injector: Injector
    ) {
        // Call parent
        super();
        super.initWizardFormPopupExtComponent(
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
        let that = this,
            route = null,
            componentRef = null;

        return new Promise(function(resolve, reject) {
            switch (index) {
                case 0:
                    // Submit values
                    componentRef = that._wizardManagerService.getComponentRef(index);
                    if (componentRef) {
                        route = that._dataService.getRoute('addStep1Submit');

                        return componentRef.instance.submitChoices(route).then(
                            data => {
                                if (data['object']) {
                                    that._formService.setObject(data['object']);
                                }
                                return resolve(true);
                            },
                            errors => { return reject(false); }
                        );
                    }
                    return reject(false);
                case 1:
                    // Save form changes

                    // Force form submit to save object into data base
                    // (at this time, object is stored in session)
                    that._formService.setForceSubmit(true);
                    route = that._dataService.getRoute('addStep2');

                    return that._formService.save(route).then(
                        data => { return resolve(true); },
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
                    module: DataBoxExtensionModule,
                    component: 'DataBoxComponent',
                    urlProvider: (this._helperService.getAppVar('route') + 'bck/accounting/client-payment-request/data-for-receipt/' + this._parentFormService.getObject()['clientObj'])
                };
            case 1:
                return {
                    module: ClientDocumentInvoiceDetailAddStep2ExtModule,
                    component: 'Step2Component'
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
                return [
                    {provide: 'DataService', useClass: DataService},
                    {provide: 'DataServiceProvider', useValue: this._helperService.getDataServiceProvider(data)},
                    {provide: 'Provider', useValue: this._helperService.getDataBoxProvider(data)},
                    ActionsService,
                    {provide: 'ActionsServiceProvider', useValue: this._helperService.getActionsServiceProvider(data)},
                    {provide: 'Popups', useValue: null}
                ];
            case 1:
                return [];
        }

        return null;
    }
}