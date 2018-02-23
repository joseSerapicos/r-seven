import {Component, ElementRef, Inject, Injector, Optional, Renderer} from '@angular/core';
import {FormBuilder} from '@angular/forms';
import {FormPopupExtensionComponent, FormProvider} from '../../../../../../../AppBundle/Resources/public/ts/form/form-popup.extension-component';
import {DataService} from '../../../../../../../AppBundle/Resources/public/ts/data-service/data.service';
import {FormService} from '../../../../../../../AppBundle/Resources/public/ts/form/form.service';


@Component({
    selector: '.js_edit',
    templateUrl: '../templates/edit.component.html'
})
export class EditComponent extends FormPopupExtensionComponent
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

    /**
     * onEntityChange
     * @param data
     */
    protected onEntityChange(data: any): void {
        // Refresh object if has been edited in auto-complete popup (with the same id, to update associated data)
        if (this._formService.getOriginalObject()['entityObj'] == data) {
            this._dataService.refreshObject();
        }
    }
}