import {Component, ElementRef, Inject, Optional, Injector, Renderer} from '@angular/core';
import {FormBuilder} from '@angular/forms';
import {Helper} from '../../../../../AppBundle/Resources/public/ts/helper';
import {FormPopupExtensionComponent, FormProvider} from '../../../../../AppBundle/Resources/public/ts/form/form-popup.extension-component';
import {DataService} from '../../../../../AppBundle/Resources/public/ts/data-service/data.service';
import {FormService} from '../../../../../AppBundle/Resources/public/ts/form/form.service';

@Component({
    selector: '#js_supplierDocumentTypeFormPopup',
    templateUrl: Helper.getRuntimeVar('templateUrl')
})
export class SupplierDocumentTypeFormPopupComponent extends FormPopupExtensionComponent
{
    protected _userRole = (_app.userRole || null); // Used in view

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
}