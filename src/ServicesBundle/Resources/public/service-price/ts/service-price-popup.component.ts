import {Component, ElementRef, Inject, Optional, Injector, Renderer} from '@angular/core';
import {FormBuilder} from '@angular/forms';
import {Helper} from '../../../../../AppBundle/Resources/public/ts/helper';
import {PriceFormPopupComponent, FormProvider} from '../../../../../AppBundle/Resources/public/price/price-form-popup.component';
import {DataService} from '../../../../../AppBundle/Resources/public/ts/data-service/data.service';
import {FormService} from '../../../../../AppBundle/Resources/public/ts/form/form.service';

@Component({
    selector: '#js_servicePricePopup',
    templateUrl: Helper.getRuntimeVar('templateUrl')
})
export class ServicePricePopupComponent extends PriceFormPopupComponent
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

        this.costDecimalIterator = Math.pow(10, this.costDecimals);
        this.marginDecimalIterator = Math.pow(10, this.marginDecimals);
        this.sellDecimalIterator = Math.pow(10, this.sellDecimals);
    }
}