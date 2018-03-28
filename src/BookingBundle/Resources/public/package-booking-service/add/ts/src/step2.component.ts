import {Component, ElementRef, Inject, Optional, Injector, Renderer} from '@angular/core';
import {FormBuilder} from '@angular/forms';
import {DataService} from '../../../../../../../AppBundle/Resources/public/ts/data-service/data.service';
import {FormService} from '../../../../../../../AppBundle/Resources/public/form/ts/form.service';
import {ModalService} from '../../../../../../../AppBundle/Resources/public/modal/ts/modal.service';
import {Step2Component as BaseBookingServiceAddStep2Component, FormProvider} from '../../../../base-booking-service/add/ts/src/step2.component';


@Component({
    selector: '#js_addStep2',
    templateUrl: '../templates/step2.component.html'
})
export class Step2Component extends BaseBookingServiceAddStep2Component
{
    constructor(
        elementRef: ElementRef,
        renderer: Renderer,
        @Inject('Provider') provider: FormProvider,
        formService: FormService,
        @Inject('DataService') dataService: any,
        modalService: ModalService,
        injector: Injector,
        @Inject('HelperService') helperService: any
    ) {
        super(
            elementRef,
            renderer,
            provider,
            formService,
            dataService,
            modalService,
            injector,
            helperService
        );
    }
}