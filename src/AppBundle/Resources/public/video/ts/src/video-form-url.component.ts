import {Component, ElementRef, Inject, Optional, Injector, Renderer} from '@angular/core';
import {FormBuilder} from '@angular/forms';
import {FormExtensionComponent, FormProvider} from '../../../ts/form/form.extension-component';
import {FormService} from '../../../ts/form/form.service';

// Re-exports
export {FormProvider}


@Component({
    selector: '#js_entityVideoUrl',
    template: '' // Define template in child component
})
export class VideoFormUrlComponent extends FormExtensionComponent
{
    constructor(
        elementRef: ElementRef,
        renderer: Renderer,
        @Inject('Provider') provider: FormProvider,
        formService: FormService,
        @Inject('DataService') dataService: any
    ) {
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