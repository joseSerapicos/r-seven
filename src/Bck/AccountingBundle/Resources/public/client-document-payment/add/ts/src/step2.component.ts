import {Component, ElementRef, Inject, Optional, Injector, Renderer} from '@angular/core';
import {FormBuilder} from '@angular/forms';
import {DataService} from '../../../../../../../../AppBundle/Resources/public/ts/data-service/data.service';
import {FormService} from '../../../../../../../../AppBundle/Resources/public/form/ts/form.service';
import {FormExtensionComponent, FormProvider} from '../../../../../../../../AppBundle/Resources/public/form/ts/form.extension-component';

@Component({
    selector: '#js_addStep2',
    templateUrl: '../templates/step2.component.html'
})
export class Step2Component extends FormExtensionComponent
{
    constructor(elementRef: ElementRef,
                renderer: Renderer,
                @Inject('Provider') provider: FormProvider,
                formService: FormService,
                @Inject('DataService') dataService: any,
                @Inject('HelperService') protected _helperService: any) {
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