import {Component, ElementRef, Inject, Optional, Injector, Renderer} from '@angular/core';
import {FormBuilder} from '@angular/forms';
import {Helper} from '../../../../../../../AppBundle/Resources/public/ts/helper';
import {FormProvider} from '../../../../../../../AppBundle/Resources/public/ts/form/form-popup.extension-component';
import {FormPopupComponent as SupplierDocumentRectificationEditFormPopupComponent} from '../../../edit/ts/src/form-popup.component';
import {DataService} from '../../../../../../../AppBundle/Resources/public/ts/data-service/data.service';
import {FormService} from '../../../../../../../AppBundle/Resources/public/ts/form/form.service';


/**
 * This class is necessary to redefine the template url for add step 2
 */
var templateUrl = Helper.getGlobalVar('templateUrl');
@Component({
    selector: '#js_supplierDocumentReceiptSettlementFormPopup',
    templateUrl: '../templates/step2-form-popup.component.html'
})
export class Step2FormPopupComponent extends SupplierDocumentRectificationEditFormPopupComponent
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