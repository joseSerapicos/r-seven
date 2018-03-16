import {Component, ElementRef, Inject, Optional, Injector, Renderer} from '@angular/core';
import {FormBuilder} from '@angular/forms';
import {DataService} from '../../../../../../../AppBundle/Resources/public/ts/data-service/data.service';
import {FormService} from '../../../../../../../AppBundle/Resources/public/ts/form/form.service';
import {Step3Component as BaseBookingServiceAddStep3Component, FormProvider} from '../../../../base-booking-service/add/ts/src/step3.component';


@Component({
    selector: '#js_bookingServiceAddDatesForm',
    templateUrl: '../templates/step3.component.html'
})
export class Step3Component extends BaseBookingServiceAddStep3Component
{
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
}