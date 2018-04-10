import {Component, ElementRef, Inject, Injector, Renderer, QueryList, Optional, ViewChildren, ViewContainerRef, ViewChild} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {FormService} from '../../../../../../AppBundle/Resources/public/form/ts/form.service';
import {DataService} from "../../../../../../AppBundle/Resources/public/ts/data-service/data.service";
import {TreeViewDataService} from "../../../../../../AppBundle/Resources/public/ts/data-service/tree-view-data.service";
import {ActionsService} from '../../../../../../AppBundle/Resources/public/ts/actions/actions.service';
import {WizardFormPopupExtComponent, WizardPopupProvider, IWizard, LazyLoadData} from '../../../../../../AppBundle/Resources/public/wizard/ts/src/wizard-form-popup.ext-component';


@Component({
    selector: '.js_addFormPopup',
    template: ''
})
export abstract class FormPopupExtComponent extends WizardFormPopupExtComponent implements IWizard
{
    // For NavManagerService
    @ViewChildren('js_lazyLoadContainer', {read: ViewContainerRef}) lazyLoadViewContainerRefQL: QueryList<ViewContainerRef>;

    // Constructor vars
    protected _helperService: any;
    protected _dataService: any;
    protected _injector: Injector;

    constructor() { super(); }

    public initBaseDocumentAddFormPopupExtComponent(
        elementRef: any,
        renderer: any,
        @Inject('Provider') provider: WizardPopupProvider,
        wizardManagerService: any,
        formService: any,
        @Inject('HelperService') helperService: any,
        @Inject('DataService') dataService: any,
        injector: any
    ) {
        // Call parent
        super.initWizardFormPopupExtComponent(
            elementRef,
            renderer,
            provider,
            wizardManagerService,
            formService
        );

        // Constructor vars
        this._helperService = helperService;
        this._dataService = dataService;
        this._injector = injector;
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
                    route = (that._dataService.getRoute('addStep1'));

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

                    // PAYMENT
                    if (that._formService.getObject()['documentType_type'] == 'PAYMENT') {
                        return componentRef.instance._formService.save().then(
                            data => {
                                that._dataService.refreshObject();
                                return resolve(true);
                            },
                            errors => { return reject(false); }
                        );
                    }

                    route = (that._dataService.getRoute('addStep2') + '/' + that._formService.getObject()['id']);
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

                    switch (that._formService.getObject()['documentType_type']) {
                        case 'RECEIPT':
                            route = (that._dataService.getRoute('addStep3Receipt'));
                            break;
                        case 'PAYMENT':
                            route = (that._dataService.getRoute('addStep3Payment'));
                            break;
                        case 'SETTLEMENT':
                            route = (that._dataService.getRoute('addStep3Settlement'));
                            break;
                        default:
                            route = (that._dataService.getRoute('addStep3Invoice'));
                            break;
                    }

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
    abstract getNavData(index: number): LazyLoadData

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
                let providers = [];
                switch (this._formService.getObject()['documentType_type']) {
                    case 'INVOICE':
                    case 'RECTIFICATION':
                        providers = [
                            {provide: 'DataService', useClass: TreeViewDataService},
                            {provide: 'DataServiceProvider', useValue: this._helperService.getTreeViewDataServiceProvider(data)},
                            {provide: 'Provider', useValue: this._helperService.getTreeViewProvider(data)},
                        ];
                        break;
                    case 'PAYMENT':
                        return [
                            {provide: 'DataService', useClass: DataService},
                            {provide: 'DataServiceProvider', useValue: this._helperService.getDataServiceProvider(data)},
                            {provide: 'LegendProvider', useValue: this._helperService.getLegendProvider(data)},
                            // Reset FormServiceProvider to use DataServiceProvider as default values
                            {provide: 'FormServiceProvider', useValue: {}},
                            FormService
                        ];
                    default:
                        providers = [
                            {provide: 'DataService', useClass: DataService},
                            {provide: 'DataServiceProvider', useValue: this._helperService.getDataServiceProvider(data)},
                            {provide: 'Provider', useValue: this._helperService.getDataBoxProvider(data)},
                        ];
                }

                return providers.concat([
                    ActionsService,
                    {provide: 'ActionsServiceProvider', useValue: this._helperService.getActionsServiceProvider(data)},
                    {provide: 'LegendProvider', useValue: this._helperService.getLegendProvider(data)},
                    {provide: 'Popups', useValue: null}
                ]);
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