import {Component, ElementRef, Inject, Injector, Renderer} from '@angular/core';
import {FormBuilder} from '@angular/forms';
import {DataService} from '../../../../../../../AppBundle/Resources/public/ts/data-service/data.service';
import {FormService} from '../../../../../../../AppBundle/Resources/public/form/ts/form.service';
import {FormProvider} from '../../../../../../../AppBundle/Resources/public/form/ts/form-provider';
import {FormExtensionComponent} from '../../../../../../../AppBundle/Resources/public/form/ts/form.extension-component';


// Component
@Component({
    selector: '.js_editPassword',
    templateUrl: '../templates/edit-password.component.html'
})
export class EditPasswordComponent extends FormExtensionComponent
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