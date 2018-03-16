import {Component, ElementRef, Inject, Optional, Injector, Renderer} from '@angular/core';
import {FormPopupExtensionComponent, FormProvider} from '../../../../../../../AppBundle/Resources/public/ts/form/form-popup.extension-component';
import {DataService} from '../../../../../../../AppBundle/Resources/public/ts/data-service/data.service';
import {FormService} from '../../../../../../../AppBundle/Resources/public/ts/form/form.service';


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
     * onServiceChange
     * @param value
     */
    protected onServiceChange(value: string): void
    {
        let that = this;

        this._dataService.runAction(
            (this._helperService.getAppVar('route')
                + 'services/regular-service/get-description/'
                + value
            )
        ).then(
            data => {
                if (data['localData'] && data['localData']['data']) {
                    that._formService.getObject()['description']
                        = (data['localData']['data']['description'] || null);
                }
            },
            errors => { console.log(errors); return; }
        );
    }
}