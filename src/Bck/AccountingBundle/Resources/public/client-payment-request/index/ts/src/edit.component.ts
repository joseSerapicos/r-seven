import {Component, ElementRef, Inject, Optional, Injector, Renderer} from '@angular/core';
import {DataService} from '../../../../../../../../AppBundle/Resources/public/ts/data-service/data.service';
import {FormService} from '../../../../../../../../AppBundle/Resources/public/form/ts/form.service';
import {FormPopupExtensionComponent, FormProvider} from '../../../../../../../../AppBundle/Resources/public/form/ts/form-popup.extension-component';

// Re-exports
export {FormProvider}


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
        @Inject('HelperService') protected _helperService: any,
        @Inject('AutoCompleteProviders') protected _autoCompleteProviders: any
    ) {
        super();
        super.initFormPopupExtensionComponent(
            elementRef,
            renderer,
            provider,
            formService,
            dataService
        );

        // Set parameters for client document
        let clientId = this._formService.getObject()['clientObj'];
        this._autoCompleteProviders['clientDocumentObj']['urlChoicesParams'] = (clientId + '/CREDIT');
    }

    /**
     * onClientDocumentChange
     * @param value
     */
    public onClientDocumentChange(value: string): void
    {
        let that = this;

        this._dataService.runAction(
            (this._helperService.getAppVar('route')
                + 'bck/accounting/client-document/get-value/'
                + value
            )
        ).then(
            data => {
                if (data['localData'] && data['localData']['data'] && data['localData']['data']['clientDocument']) {
                    that._formService.getObject()['value'] = data['localData']['data']['clientDocument']['value'];
                    that._formService.getObject()['description'] = data['localData']['data']['clientDocument']['description'];
                }
            },
            errors => { console.log(errors); return; }
        );
    }
}