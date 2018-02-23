import {Component, ElementRef, Inject, Optional, Injector, Renderer} from '@angular/core';
import {FormBuilder} from '@angular/forms';
import {FormProvider} from '../../../../../../../AppBundle/Resources/public/ts/form/form-popup.extension-component';
import {DataService} from '../../../../../../../AppBundle/Resources/public/ts/data-service/data.service';
import {FormService} from '../../../../../../../AppBundle/Resources/public/ts/form/form.service';
import {FormPopupComponent as SupplierDocumentInvoiceEditFormPopupComponent} from '../../../edit/ts/src/form-popup.component';


@Component({
    selector: '#js_addStep2',
    templateUrl: '../templates/step2.component.html'
})
export class Step2Component extends SupplierDocumentInvoiceEditFormPopupComponent
{
    constructor(
        elementRef: ElementRef,
        renderer: Renderer,
        @Inject('Provider') provider: FormProvider,
        formService: FormService,
        @Inject('DataService') dataService: any,
        @Inject('HelperService') helperService: any
    ) {
        super(
            elementRef,
            renderer,
            provider,
            formService,
            dataService,
            helperService
        );
    }
}