import {Component, ElementRef, Inject, Injector, Optional, Renderer} from '@angular/core';
import {FormBuilder} from '@angular/forms';
import {Helper} from '../../../../../../AppBundle/Resources/public/ts/helper';
import {FormPopupExtensionComponent, FormProvider} from '../../../../../../AppBundle/Resources/public/ts/form/form-popup.extension-component';
import {DataService} from '../../../../../../AppBundle/Resources/public/ts/data-service/data.service';
import {FormService} from '../../../../../../AppBundle/Resources/public/ts/form/form.service';

@Component({
    selector: '.js_localFormPopup',
    templateUrl: Helper.getRuntimeVar('templateUrl')
})
export class LocalFormPopupComponent extends FormPopupExtensionComponent
{
    constructor(
        elementRef: ElementRef,
        renderer: Renderer,
        @Inject('Provider') provider: FormProvider,
        formService: FormService,
        @Inject('DataService') dataService: any,
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