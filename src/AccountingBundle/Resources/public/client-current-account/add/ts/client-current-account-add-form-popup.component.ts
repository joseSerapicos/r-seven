import {Component, ElementRef, Inject, Injector, Renderer, QueryList, Optional, ViewChildren, ViewContainerRef, ViewChild} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {FormService} from '../../../../../../AppBundle/Resources/public/ts/form/form.service';
import {Helper} from '../../../../../../AppBundle/Resources/public/ts/helper';
import {DataService} from "../../../../../../AppBundle/Resources/public/ts/data-service/data.service";
import {ActionsService} from '../../../../../../AppBundle/Resources/public/ts/actions/actions.service';
import {WizardFormPopupComponent, WizardPopupProvider, IWizard, LazyLoadData} from '../../../../../../AppBundle/Resources/public/ts/wizard/wizard-form-popup.component';
import {WizardManagerService} from '../../../../../../AppBundle/Resources/public/ts/wizard/wizard-manager.service';


/* Import dependencies */
// Parent id for dependencies
var parentId = Helper.getGlobalVar('conf')['object']['id'],
    parentController = Helper.getGlobalVar('conf')['localData']['controller']; // Determines the type of booking

// Default Detail
import {BookingServicePriceExtModule} from '../../../../../../BookingBundle/Resources/public/base-booking-service-price/index/ts/booking-service-price.ext-module';

// Detail
Helper.setRuntimeVar('templateUrl', Helper.getGlobalVar('route') + 'booking/' + parentController + '-client-current-account/add-detail/' + parentId);
import {ClientCurrentAccountAddDetailFormPopupExtModule} from './client-current-account-add-detail-form-popup.ext-module';
/* /Import dependencies */


@Component({
    selector: '.js_clientCurrentAccountAddFormPopup',
    templateUrl: Helper.getGlobalVar('route') + 'booking/' + parentController + '-client-current-account/add/' + parentId
})
export class ClientCurrentAccountAddFormPopupComponent extends WizardFormPopupComponent implements IWizard
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
        @Inject('ParentDataService') protected _parentDataService: any,
        protected _injector: Injector
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
        let that = this,
            route = null,
            componentRef = null;

        return new Promise(function(resolve, reject) {
            switch (index) {
                case 0:
                    // Save form
                    route = (that._dataService.getRoute('add'));
                    return that._formService.save(route).then(
                        data => {
                            // Update entityAddress autoCompleteProvider choices route to the updated entity
                            let autoCompleteProviders = that._injector.get('AutoCompleteProviders');
                            if (autoCompleteProviders['entityAddressObj']['childInjector']) {
                                let choicesDataService = autoCompleteProviders['entityAddressObj']['childInjector'].get('DataServiceChoices'),
                                    choicesRoute = choicesDataService.getRoute('choices');
                                choicesRoute = (choicesRoute.substr(0, choicesRoute.lastIndexOf('/') + 1)
                                    + that._formService.getObject()['entityObj']
                                );
                                choicesDataService.setRoute('choices', choicesRoute);
                            }

                            return resolve(true);
                        },
                        errors => { return reject(false); }
                    );
                case 1:
                    // Submit values
                    componentRef = that._wizardManagerService.getComponentRef(index);
                    route = (that._dataService.getRoute('add-default-detail') + '/' + that._formService.getObject()['id']);
                    return componentRef.instance.submitChoices(route, true).then(
                        data => {
                            that._dataService.refreshObject();
                            return resolve(true);
                        },
                        errors => { return reject(false); }
                    );
                case 2:
                    // Save form
                    componentRef = that._wizardManagerService.getComponentRef(index);
                    route = (that._dataService.getRoute('add-detail'));
                    that._formService.setForceSubmit(false); // Disable force submit, at this time the user is finishing
                    // the process and submitting the form (this procedure avoid form to question the user when
                    // the saved object is returned, because we have two FormServices here using the same DataService)
                    return componentRef.instance._formService.save(route).then(
                        data => { return resolve(true); },
                        errors => {
                            that._formService.setForceSubmit(true); // If error put again form waiting for submit
                            return reject(false);
                        }
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
                // @TODO Change module according with document type (receipt will be another)
                return {
                    module: BookingServicePriceExtModule,
                    component: 'BookingServicePriceComponent',
                    urlProvider: (this._helperService.getGlobalVar('route') + 'booking/' + parentController + '-client-current-account-detail/data-for-invoice/' + parentId)
                };
            case 2:
                return {
                    module: ClientCurrentAccountAddDetailFormPopupExtModule,
                    component: 'ClientCurrentAccountAddDetailFormPopupComponent',
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
                    ActionsService,
                    {provide: 'DataServiceProvider', useValue: this._helperService.getDataServiceProvider(data)},
                    {provide: 'ActionsServiceProvider', useValue: this._helperService.getActionsServiceProvider(data)},
                    {provide: 'Provider', useValue: this._helperService.getDataBoxProvider(data)},
                    {provide: 'Popups', useValue: null}
                ];
            case 2:
                return [
                    // Reset FormServiceProvider to use DataServiceProvider as default values
                    {provide: 'FormServiceProvider', useValue: {}},
                    FormService
                ];
        }

        return null;
    }
}