import {Component, ElementRef, Inject, Optional, Injector, Renderer} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {Helper} from '../helper';
import {FormService} from './form.service';
import {FormExtensionComponent, FormProvider} from './form.extension-component';
import {DataService} from "../data-service/data.service";

// Re-exports
export {FormProvider};


// Component
var templateUrl = Helper.getGlobalVar('templateUrl');
@Component({
    selector: '.js_form',
    templateUrl: templateUrl
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