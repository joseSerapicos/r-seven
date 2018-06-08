import {Component, ElementRef, Inject, Optional, Injector, Renderer} from '@angular/core';
import {FormBuilder} from '@angular/forms';
import {FormPopupExtensionComponent, FormProvider} from '../../../../../../../../AppBundle/Resources/public/form/ts/form-popup.extension-component';
import {DataService} from '../../../../../../../../AppBundle/Resources/public/ts/data-service/data.service';
import {FormService} from '../../../../../../../../AppBundle/Resources/public/form/ts/form.service';


@Component({
    selector: '#js_supplierDocumentReceiptSettlementFormPopup',
    templateUrl: '../templates/form-popup.component.html'
})
export class FormPopupComponent extends FormPopupExtensionComponent
{
    constructor(
        elementRef: ElementRef,
        renderer: Renderer,
        @Inject('Provider') provider: FormProvider,
        formService: FormService,
        @Inject('DataService') dataService: any
    ) {
        super();
        super.initFormPopupExtensionComponent(
            elementRef,
            renderer,
            provider,
            formService,
            dataService
        );
    }

    /**
     * Lifecycle callback
     */
    ngOnDestroy()
    {
        // If is a '_isSessionStorage' object, the object is ignored, so we need to update manually all objects
        // (occurs in add mode)
        if (this._dataService.getObject()['_isSessionStorage']
            && this._formService.getObject()['id']
        ) {
            this._dataService.refresh();
        }
    }
}