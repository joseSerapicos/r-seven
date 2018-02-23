import {Component, ElementRef, Inject, Injector, Renderer, QueryList, Optional, ViewChildren, ViewContainerRef, ViewChild} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
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
    protected _parentFormService: any;
    protected _injector: Injector;

    constructor() { super(); }

    initBaseDocumentRectificationAddFormPopupExtComponent(
        elementRef: any,
        renderer: any,
        @Inject('Provider') provider: WizardPopupProvider,
        wizardManagerService: any,
        formService: any,
        @Inject('HelperService') helperService: any,
        @Inject('DataService') dataService: any,
        @Inject('ParentFormService') parentFormService: any, // To get parent object
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
        this._parentFormService = parentFormService;
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
                    // Submit values
                    componentRef = that._wizardManagerService.getComponentRef(index);
                    if (componentRef) {
                        route = that._dataService.getRoute('addStep1Submit');

                        return componentRef.instance.submitChoices(route, true).then(
                            data => {
                                if (data['object']) {
                                    // Reset new object
                                    that._dataService.newObject(null, data['object']);
                                    return resolve(true);
                                }
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
            case 0:
                // Set actions
                data['actions'] = {search: true, radioChoice: true};
                return [
                    {provide: 'DataService', useClass: TreeViewDataService},
                    {provide: 'DataServiceProvider', useValue: this._helperService.getTreeViewDataServiceProvider(data)},
                    {provide: 'Provider', useValue: this._helperService.getTreeViewProvider(data)},
                    ActionsService,
                    {provide: 'ActionsServiceProvider', useValue: this._helperService.getActionsServiceProvider(data)},
                    {provide: 'Popups', useValue: null}
                ];
            case 1:
                return [];
        }

        return null;
    }


    /**
     * Lifecycle callback
     */
    ngAfterViewInit()
    {
        super.ngAfterViewInit();

        // Open the first tab
        this._wizardManagerService.navTo(0);
    }
}