import {Component, ElementRef, Inject, Optional, Injector, Renderer} from '@angular/core';
import {FormBuilder} from '@angular/forms';
import {VideoFormUrlComponent, FormProvider} from '../../../../../../../AppBundle/Resources/public/video/ts/src/video-form-url.component';
import {FormService} from '../../../../../../../AppBundle/Resources/public/form/ts/form.service';


@Component({
    selector: '#js_addUrl',
    templateUrl: '../templates/add-url.component.html'
})
export class AddUrlComponent extends VideoFormUrlComponent
{
    constructor(
        elementRef: ElementRef,
        renderer: Renderer,
        @Inject('Provider') provider: FormProvider,
        formService: FormService,
        @Inject('DataService') dataService: any
    ) {
        super(
            elementRef,
            renderer,
            provider,
            formService,
            dataService
        );
    }
}