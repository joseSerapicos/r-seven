import {Component, ElementRef, Inject, Optional, Injector, Renderer} from '@angular/core';
import {FormBuilder} from '@angular/forms';
import {FormExtensionComponent, FormProvider} from '../../../../../../../AppBundle/Resources/public/ts/form/form.extension-component';
import {DataService} from '../../../../../../../AppBundle/Resources/public/ts/data-service/data.service';
import {FormService} from '../../../../../../../AppBundle/Resources/public/ts/form/form.service';


@Component({
    selector: '#js_form',
    templateUrl: '../templates/form.component.html'
})
export class FormComponent extends FormExtensionComponent
{
    constructor(
        elementRef: ElementRef,
        renderer: Renderer,
        @Inject('Provider') provider: FormProvider,
        formService: FormService,
        @Inject('DataService') dataService: any,
        @Inject('HelperService') protected _helperService: any
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