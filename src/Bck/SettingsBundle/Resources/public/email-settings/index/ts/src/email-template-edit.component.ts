import {Component, ElementRef, Inject, Optional, Injector, Renderer} from '@angular/core';
import {FormBuilder} from '@angular/forms';
import {FormPopupComponent, FormProvider} from '../../../../../../../../AppBundle/Resources/public/form/ts/form-popup.component';
import {DataService} from '../../../../../../../../AppBundle/Resources/public/ts/data-service/data.service';
import {FormService} from '../../../../../../../../AppBundle/Resources/public/form/ts/form.service';


@Component({
    selector: '#js_emailTemplateEdit',
    templateUrl: '../templates/email-template-edit.component.html'
})
export class EmailTemplateEditComponent extends FormPopupComponent
{
    protected _$selectBox = null;

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

    /**
     * Add key action
     * @param $event
     */
    public addKeyAction($event: any = null): void
    {
        if ($event) { $event.preventDefault(); }

        if (!this._$selectBox) {
            this._$selectBox = $('.js_addKey');
        }

        let key = this._$selectBox.val();

        if (key && (key != '')) {
            let text = (this._formService.getObject()['text'] || ''); // To avoid concat with "null"
            this._formService.getObject()['text'] = (text+' %'+key+'%');
        }
    }
}