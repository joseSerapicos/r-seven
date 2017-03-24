import {Component, ElementRef, Inject, Optional, Injector, Renderer} from '@angular/core';
import {FormBuilder} from '@angular/forms';
import {Helper} from '../helper';
import {FormExtensionComponent, FormProvider} from '../form/form.extension-component';
import {DataService} from '../data-service/data.service';
import {FormService} from '../form/form.service';

@Component({
    selector: '#js_entityVideoUrl',
    templateUrl: Helper.getRuntimeVar('templateUrl')
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