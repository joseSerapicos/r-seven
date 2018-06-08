import {Component, ElementRef, Inject, Optional, Injector, Renderer} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {FormService, IForm} from './form.service';
import {FormProvider} from './form-provider';
import {BaseExtensionComponent} from '../../ts/base/base.extension-component';
import {DataService} from "../../ts/data-service/data.service";

// Re-exports
export {FormProvider};


// Component
@Component({
    selector: '.js_form',
    template: ''
})
export abstract class FormExtensionComponent extends BaseExtensionComponent implements IForm
{
    // Constructor vars
    protected _formService: any;
    protected _dataService: any;

    constructor() { super(); }

    /**
     * Initialization of component (replace the original constructor to avoid angular injection inheritance bug)
     * @param elementRef
     * @param renderer
     * @param provider
     * @param formService
     * @param dataService
     */
    public initFormExtensionComponent(
        elementRef: any,
        renderer: any,
        provider: FormProvider,
        formService: any,
        dataService: any
    ) {
        // Parent init (construct)
        super.initBaseExtensionComponent(
            elementRef,
            renderer,
            provider
        );

        // Constructor vars
        this._formService = formService;
        this._dataService = dataService;
    }

    /**
     * Save object. Handle submit form.
     * This override add a closePopup behavior.
     * This method should be called from child component.
     * @returns {Promise}
     */
    public save(): Promise<any>
    {
        let that = this;

        return new Promise(function(resolve, reject) {
            that._formService.save().then(
                data => { return resolve(data); },
                errors => { return reject(errors); }
            );
        });
    }

    /**
     * Save action.
     * This method should be called from view/template.
     * @param $event
     */
    public saveAction($event: any = null): void
    {
        if ($event) { $event.preventDefault(); }
        this.save().then(
            data => { return; },
            errors => { return; }
        );
    }

    /**
     * Reset action.
     * This method should be called from view/template.
     * @param $event
     */
    public resetAction($event: any = null): void
    {
        this._formService.resetAction($event);
    }

    /**
     * Lifecycle callback
     */
    ngAfterViewInit()
    {
        this._formService.init(this);
    }
}