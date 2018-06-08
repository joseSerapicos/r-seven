import {Component, ElementRef, Inject, Injector, Optional, Renderer} from '@angular/core';
import {FormBuilder} from '@angular/forms';
import {FormPopupExtensionComponent, FormProvider} from '../../../../../../../../AppBundle/Resources/public/form/ts/form-popup.extension-component';
import {DataService} from '../../../../../../../../AppBundle/Resources/public/ts/data-service/data.service';
import {FormService} from '../../../../../../../../AppBundle/Resources/public/form/ts/form.service';


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
        @Inject('HelperService') protected _helperService: any
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
     * @param value
     */
    protected onEntityChange(value: any): void {
        let that = this;

        this._dataService.runAction(
            (this._helperService.getAppVar('route')
                + 'bck/entities/client/change-entity/'
                + value
                + (this._formService.getObject()['id'] ? ('/' + this._formService.getObject()['id']) : '')
            )
        ).then(
            data => {
                if (data['object']) {
                    that._dataService.setObject(data['object']);
                }
            },
            errors => { console.log(errors); return; }
        );
    }
}