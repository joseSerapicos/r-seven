import {Component, ElementRef, Inject, Injector, ReflectiveInjector, Renderer, QueryList, Optional, ViewChildren, ViewContainerRef, ViewChild} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {DataService} from '../../../../../../../../AppBundle/Resources/public/ts/data-service/data.service';
import {WizardFormPopupComponent, WizardPopupProvider, IWizard, LazyLoadData} from '../../../../../../../../AppBundle/Resources/public/wizard/ts/src/wizard-form-popup.component';
import {WizardManagerService} from '../../../../../../../../AppBundle/Resources/public/wizard/ts/src/wizard-manager.service';
import {PostService} from '../../../../../../../../AppBundle/Resources/public/ts/post.service';
import {FormService} from '../../../../../../../../AppBundle/Resources/public/form/ts/form.service';


/* Import dependencies */
import {AddStep2ExtModule} from './add-step2.ext-module';
/* /Import dependencies */


@Component({
    selector: '#js_add',
    templateUrl: '../templates/add-step1.component.html'
})
export class AddStep1Component extends WizardFormPopupComponent implements IWizard
{
    // For NavManagerService
    @ViewChildren('js_lazyLoadContainer', {read: ViewContainerRef}) lazyLoadViewContainerRefQL: QueryList<ViewContainerRef>;


    constructor(
        elementRef: ElementRef,
        renderer: Renderer,
        @Inject('Provider') provider: WizardPopupProvider,
        wizardManagerService: WizardManagerService,
        formService: FormService,
        protected _postService: PostService,
        @Inject('DataService') protected _dataService: any,
        @Inject('AutoCompleteProviders') protected _autoCompleteProviders: any
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
     * onEntityChange
     * @param value
     */
    public onEntityChange(value: string): void
    {
        this._autoCompleteProviders['clientDocumentObj']['urlChoicesParams'] = (value + '/CREDIT');
        this._formService.getObject()['clientDocumentObj'] = null;
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

        this._formService.setErrors(null);

        return new Promise(function(resolve, reject) {
            switch (index) {
                case 0:
                    // Save form
                    route = (that._dataService.getRoute('addStep1'));
                    return that._formService.save(route).then(
                        data => { return resolve(true); },
                        errors => { return reject(false); }
                    );
                case 1:
                    // Save form
                    componentRef = that._wizardManagerService.getComponentRef(index);
                    route = (that._dataService.getRoute('addStep2'));
                    return componentRef.instance._formService.save(route).then(
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
            case 1:
                return {
                    module: AddStep2ExtModule,
                    component: 'AddStep2Component'
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
                    // Reset FormServiceProvider to use DataServiceProvider as default values
                    {provide: 'FormServiceProvider', useValue: {
                        fields: ['clientDocumentObj', 'reference', 'description', 'value', 'paymentMethodObj'],
                        hasPreventObjectOverride: false
                    }},
                    FormService
                ];
        }

        return null;
    }
}