import {Component, ElementRef, Inject, Optional, Injector, Renderer} from '@angular/core';
import {FormBuilder} from '@angular/forms';
import {FormExtensionComponent, FormProvider} from '../../../../../../../../AppBundle/Resources/public/form/ts/form.extension-component';
import {DataService} from '../../../../../../../../AppBundle/Resources/public/ts/data-service/data.service';
import {FormService} from '../../../../../../../../AppBundle/Resources/public/form/ts/form.service';

// Re-exports
export {FormProvider}


@Component({
    selector: '#js_edit',
    templateUrl: '../templates/edit.component.html'
})
export class EditComponent extends FormExtensionComponent
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
        super.initFormExtensionComponent(
            elementRef,
            renderer,
            provider,
            formService,
            dataService
        );
    }

    /**
     * On entity address change event
     * @param value
     */
    public onEntityAddressChange(value: any): void
    {
        console.log(value);
    }

    /**
     * On entity phone change event
     * @param value
     */
    public onEntityPhoneChange(value: any): void {
        console.log(value);
    }

    /**
     * On entity address change event
     * @param value
     */
    public onEntityEmailChange(value: any): void
    {
        console.log(value);
    }
}