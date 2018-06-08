import {Component, ElementRef, Inject, Optional, Injector, Renderer} from '@angular/core';
import {FormBuilder} from '@angular/forms';
import {FormPopupExtensionComponent, FormProvider} from '../../../../../../../../AppBundle/Resources/public/form/ts/form-popup.extension-component';
import {DataService} from '../../../../../../../../AppBundle/Resources/public/ts/data-service/data.service';
import {FormService} from '../../../../../../../../AppBundle/Resources/public/form/ts/form.service';


@Component({
    selector: '#js_clientDocumentReceiptPaymentFormPopup',
    templateUrl: '../templates/form-popup.component.html'
})
export class FormPopupComponent extends FormPopupExtensionComponent {
    constructor(elementRef: ElementRef,
                renderer: Renderer,
                @Inject('Provider') provider: FormProvider,
                formService: FormService,
                @Inject('DataService') dataService: any,
                @Inject('HelperService') protected _helperService: any) {
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