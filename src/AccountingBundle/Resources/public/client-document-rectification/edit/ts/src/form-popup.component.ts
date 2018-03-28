import {Component, ElementRef, Inject, Optional, Injector, Renderer} from '@angular/core';
import {FormBuilder} from '@angular/forms';
import {FormProvider} from '../../../../../../../AppBundle/Resources/public/form/ts/form-popup.extension-component';
import {DataService} from '../../../../../../../AppBundle/Resources/public/ts/data-service/data.service';
import {FormService} from '../../../../../../../AppBundle/Resources/public/form/ts/form.service';
import {FormPopupExtComponent as BaseDocumentRectificationEditFormPopupExtComponent} from '../../../../base-document-rectification/edit/ts/form-popup.ext-component';


@Component({
    selector: '#js_clientDocumentInvoiceRectificationFormPopup',
    templateUrl: '../templates/form-popup.component.html'
})
export class FormPopupComponent extends BaseDocumentRectificationEditFormPopupExtComponent
{
    constructor(
        elementRef: ElementRef,
        renderer: Renderer,
        @Inject('Provider') provider: FormProvider,
        formService: FormService,
        @Inject('DataService') dataService: any,
        @Inject('HelperService') helperService: any
    ) {
        super();
        super.initBaseDocumentRectificationEditFormPopupExtComponent(
            elementRef,
            renderer,
            provider,
            formService,
            dataService,
            helperService
        );
    }
}