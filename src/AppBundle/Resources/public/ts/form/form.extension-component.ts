import {Component, ElementRef, Inject, Optional, Injector, Renderer} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {FormService, IForm} from './form.service';
import {FormProvider} from './form-provider';
import {BaseExtensionComponent} from '../base/base.extension-component';
import {DataService} from "../data-service/data.service";

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
     * Lifecycle callback
     */
    ngAfterViewInit()
    {
        this._formService.init(this);
    }
}