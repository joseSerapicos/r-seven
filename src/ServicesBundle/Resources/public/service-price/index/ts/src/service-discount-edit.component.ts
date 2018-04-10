import {Component, ElementRef, Inject, Optional, Injector, Renderer} from '@angular/core';
import {FormBuilder} from '@angular/forms';
import {FormProvider} from '../../../../../../../AppBundle/Resources/public/form/ts/form-popup.extension-component';
import {DataService} from '../../../../../../../AppBundle/Resources/public/ts/data-service/data.service';
import {FormService} from '../../../../../../../AppBundle/Resources/public/form/ts/form.service';
import {EditExtComponent as BaseServicePriceExceptionEditExtComponent} from '../../../../base-service-price-exception/ts/edit.ext-component';


@Component({
    selector: '#js_serviceDiscountEdit',
    templateUrl: '../templates/service-discount-edit.component.html'
})
export class ServiceDiscountEditComponent extends BaseServicePriceExceptionEditExtComponent
{
    constructor(
        elementRef: ElementRef,
        renderer: Renderer,
        @Inject('Provider') provider: FormProvider,
        formService: FormService,
        @Inject('DataService') dataService: any,
        @Inject('HelperService') helperService: any
    ) {
        super();
        super.initBaseServicePriceExceptionEditExtComponent(
            elementRef,
            renderer,
            provider,
            formService,
            dataService,
            helperService
        );
    }
}