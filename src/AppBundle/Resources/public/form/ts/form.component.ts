import {Component, ElementRef, Inject, Optional, Injector, Renderer} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {FormService} from './form.service';
import {FormExtensionComponent, FormProvider} from './form.extension-component';
import {DataService} from "../../ts/data-service/data.service";

// Re-exports
export {FormProvider};


// Component
@Component({
    selector: '.js_form',
    template: '' // Define template in child component
})
export class FormComponent extends FormExtensionComponent
{
    constructor(
        elementRef: ElementRef,
        renderer: Renderer,
        @Inject('Provider') provider: FormProvider,
        formService: FormService,
        @Inject('DataService') dataService: any
    ) {
        // Parent construct
        super();
        super.initFormExtensionComponent(
            elementRef,
            renderer,
            provider,
            formService,
            dataService
        );
    }
}