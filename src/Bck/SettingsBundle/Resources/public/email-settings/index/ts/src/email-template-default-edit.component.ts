import {Component, ElementRef, Inject, Optional, Injector, Renderer} from '@angular/core';
import {FormBuilder} from '@angular/forms';
import {FormPopupComponent, FormProvider} from '../../../../../../../../AppBundle/Resources/public/form/ts/form-popup.component';
import {DataService} from '../../../../../../../../AppBundle/Resources/public/ts/data-service/data.service';
import {FormService} from '../../../../../../../../AppBundle/Resources/public/form/ts/form.service';


@Component({
    selector: '#js_emailTemplateDefaultEdit',
    templateUrl: '../templates/email-template-default-edit.component.html'
})
export class EmailTemplateDefaultEditComponent extends FormPopupComponent
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