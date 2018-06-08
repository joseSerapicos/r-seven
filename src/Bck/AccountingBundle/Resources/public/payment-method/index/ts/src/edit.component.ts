import {Component, ElementRef, Inject, Optional, Injector, Renderer} from '@angular/core';
import {DataService} from '../../../../../../../../AppBundle/Resources/public/ts/data-service/data.service';
import {FormService} from '../../../../../../../../AppBundle/Resources/public/form/ts/form.service';
import {FormPopupExtensionComponent, FormProvider} from '../../../../../../../../AppBundle/Resources/public/form/ts/form-popup.extension-component';


@Component({
    selector: '#js_edit',
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
     * Save action.
     * This method should be called from view/template.
     * @param $event
     */
    public saveAction($event: any = null): void
    {
        // Enable force submit attribute, because the detail is not linked to the object,
        // so detail changes are not recognized by the form.
        this._formService.setForceSubmit(true);

        super.saveAction($event);
    }

    /**
     * Save and close popup action.
     * This method should be called from view/template.
     * @param $event
     */
    public saveAndCloseAction($event: any = null): void
    {
        // Enable force submit attribute, because the detail is not linked to the object,
        // so detail changes are not recognized by the form.
        this._formService.setForceSubmit(true);

        super.saveAndCloseAction($event);
    }

    /**
     * onVatCodeChange
     * @param value
     */
    public onPaymentMethodChange(value: string): void
    {
        let that = this;

        this._dataService.runAction(
            (this._helperService.getAppVar('route')
                + 'bck/sysadmin/payment-method/get-payment-method-info/'
                + value
            )
        ).then(
            data => {
                if (data['localData'] && data['localData']['data']) {
                    that._formService.getObject()['name'] = data['localData']['data']['name'];
                    that._formService.getObject()['description'] = data['localData']['data']['description'];
                    that._dataService.setLocalData(data['localData']);
                }
            },
            errors => { console.log(errors); return; }
        );
    }
}