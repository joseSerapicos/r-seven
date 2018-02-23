import {Component, ElementRef, Inject, Optional, Injector, ViewChild, EventEmitter, Renderer} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {FormService} from './form.service';
import {DataService} from "../data-service/data.service";
import {FormPopupExtensionComponent, FormProvider} from './form-popup.extension-component';

// Re-exports
export {FormProvider};


@Component({
    selector: '.js_formPopup',
    template: '' // Define template in child component
})
export class FormPopupComponent extends FormPopupExtensionComponent
{
    constructor(
        elementRef: ElementRef,
        renderer: Renderer,
        @Inject('Provider') provider: FormProvider,
        formService: FormService,
        @Inject('DataService') dataService: any
    ) {
        super();
        super.initFormPopupExtensionComponent(
            elementRef,
            renderer,
            provider,
            formService,
            dataService
        );
    }
}