import {Component, ElementRef, Inject, Optional, Injector, Renderer} from '@angular/core';
import {FormBuilder} from '@angular/forms';
import {Helper} from '../../../../../AppBundle/Resources/public/ts/helper';
import {PriceFormPopupComponent, FormProvider} from '../../../../../AppBundle/Resources/public/price/price-form-popup.component';
import {DataService} from '../../../../../AppBundle/Resources/public/ts/data-service/data.service';
import {FormService} from '../../../../../AppBundle/Resources/public/ts/form/form.service';

@Component({
    selector: '#js_bookingServicePriceFormPopup',
    templateUrl: Helper.getRuntimeVar('templateUrl')
})
export class BookingServicePriceFormPopupComponent extends PriceFormPopupComponent
{
    // Configure number of decimals to use and to round
    protected totalDecimals: number = 2;

    // Iterator for round calc
    protected totalDecimalIterator: number;

    constructor(
        elementRef: ElementRef,
        renderer: Renderer,
        @Inject('Provider') provider: FormProvider,
        formService: FormService,
        @Inject('DataService') dataService: any,
        @Inject('ParentDataService') protected _parentDataService: any
    ) {
        super(
            elementRef,
            renderer,
            provider,
            formService,
            dataService
        );

        this.totalDecimalIterator = Math.pow(10, this.totalDecimals);

        // Set default values for new objects
        let formObj = this._formService.getObject();
        if (!formObj['id']) {
            let parentObj = this._parentDataService.getObject();
            formObj['description'] = parentObj['description'];
            formObj['postingType'] = 'DEBIT';
            formObj['quantity'] = parentObj['quantity'];
            formObj['marginMethod'] = 'MARKUP';
        }
    }

    /**
     * onSellValueEnterKey
     * @param value
     */
    protected onQuantityEnterKey(value: any): void
    {
        this._formService.getObject()['quantity'] = value; // Value is not yet setted in object
        this.setTotals();
    }

    /**
     * Overrides parent method
     * @returns {BookingServicePriceFormPopupComponent}
     */
    protected setSellValue(): BookingServicePriceFormPopupComponent {
        super.setSellValue();
        this.setTotals();
        return this;
    }

    /**
     * Overrides parent method
     * @returns {BookingServicePriceFormPopupComponent}
     */
    protected setCostValue(): BookingServicePriceFormPopupComponent
    {
        super.setCostValue();
        this.setTotals();
        return this;
    }

    /**
     * Set totals
     * @returns {BookingServicePriceFormPopupComponent}
     */
    protected setTotals(): BookingServicePriceFormPopupComponent {
        let obj = this._formService.getObject();

        obj['totalCost'] = (Math.round(
                (parseFloat(obj['costValue'] || '0') * parseFloat(obj['quantity'] || '0'))
                * this.totalDecimalIterator) / this.totalDecimalIterator
        ).toFixed(this.totalDecimals);

        obj['totalSell'] = (Math.round(
                (parseFloat(obj['sellValue'] || '0') * parseFloat(obj['quantity'] || '0'))
                * this.totalDecimalIterator) / this.totalDecimalIterator
        ).toFixed(this.totalDecimals);

        return this;
    }
}