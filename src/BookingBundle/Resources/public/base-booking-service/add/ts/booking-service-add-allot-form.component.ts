import {Component, ElementRef, Inject, Optional, Injector, Renderer} from '@angular/core';
import {FormBuilder} from '@angular/forms';
import {Helper} from '../../../../../../AppBundle/Resources/public/ts/helper';
import {FormExtensionComponent, FormProvider} from '../../../../../../AppBundle/Resources/public/ts/form/form.extension-component';
import {DataService} from '../../../../../../AppBundle/Resources/public/ts/data-service/data.service';
import {FormService} from '../../../../../../AppBundle/Resources/public/ts/form/form.service';

@Component({
    selector: '#js_bookingServiceAddAllotForm',
    templateUrl: Helper.getRuntimeVar('templateUrl')
})
export class BookingServiceAddAllotFormComponent extends FormExtensionComponent
{
    protected _statusMap = {'NO': 'danger', 'PARTIAL': 'warning', 'YES': 'primary'};

    constructor(
        elementRef: ElementRef,
        renderer: Renderer,
        @Inject('Provider') provider: FormProvider,
        formService: FormService,
        @Inject('DataService') dataService: any
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
}