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
    constructor(
        elementRef: ElementRef,
        renderer: Renderer,
        @Inject('Provider') provider: FormProvider,
        formService: FormService,
        @Inject('DataService') dataService: any,
        @Inject('ParentDataService') protected _parentDataService: any,
        @Inject('HelperService') helperService: any
    ) {
        super(
            elementRef,
            renderer,
            provider,
            formService,
            dataService,
            helperService
        );

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
     * onIsVatIncludedChange
     * @param value
     */
    protected onIsVatIncludedChange(value: any): void
    {
        this._formService.getObject()['isVatIncluded'] = value;
        this.setTotals();
    }

    /**
     * onCostValueEnterKey
     * @param value
     */
    protected onCostValueEnterKey(value: any): void
    {
        this._formService.getObject()['user_costValue'] = value;
        this.setSellValue();
    }

    /**
     * onSellValueEnterKey
     * @param value
     */
    protected onSellValueEnterKey(value: any): void
    {
        this._formService.getObject()['user_sellValue'] = value;
        this.setCostValue();
    }

    /**
     * Overrides parent method
     * @param costField
     * @param sellField
     * @returns {BookingServicePriceFormPopupComponent}
     */
    protected setSellValue(costField = 'user_costValue', sellField = 'user_sellValue'): BookingServicePriceFormPopupComponent {
        super.setSellValue(costField, sellField);
        this.setTotals();
        return this;
    }

    /**
     * Overrides parent method
     * @param costField
     * @param sellField
     * @returns {BookingServicePriceFormPopupComponent}
     */
    protected setCostValue(costField = 'user_costValue', sellField = 'user_sellValue'): BookingServicePriceFormPopupComponent
    {
        super.setCostValue(costField, sellField);
        this.setTotals();
        return this;
    }

    /**
     * Set totals
     * @returns {BookingServicePriceFormPopupComponent}
     */
    protected setTotals(): BookingServicePriceFormPopupComponent {
        let obj = this._formService.getObject(),
            quantity = parseFloat(obj['quantity'] || '0'),
            user_costValue = parseFloat(obj['user_costValue'] || '0'),
            user_sellValue = parseFloat(obj['user_sellValue'] || '0'),
            isVatIncluded = obj['isVatIncluded'],
            vatPercentage = parseFloat(obj['vatCode_percentage'] || '0'),
            costValue = user_costValue,
            sellValue = user_sellValue,
            vatValueCost = 0,
            vatValueSell = 0;

        // Calc VAT value and value
        if (vatPercentage > 0) {
            if (isVatIncluded) {
                costValue = parseFloat((Math.round(
                            (user_costValue / (1 + (vatPercentage / 100)))
                            * this.decimalConf.unit.iterator) / this.decimalConf.unit.iterator
                    ).toFixed(this.decimalConf.unit.value)
                );
                vatValueCost = (user_costValue - costValue);

                sellValue = parseFloat((Math.round(
                            (user_sellValue / (1 + (vatPercentage / 100)))
                            * this.decimalConf.unit.iterator) / this.decimalConf.unit.iterator
                    ).toFixed(this.decimalConf.unit.value)
                );
                vatValueSell = (user_sellValue - sellValue);
            } else {
                vatValueCost = parseFloat((Math.round(
                            (user_costValue * (vatPercentage / 100))
                            * this.decimalConf.unit.iterator) / this.decimalConf.unit.iterator
                    ).toFixed(this.decimalConf.unit.value)
                );

                vatValueSell = parseFloat((Math.round(
                            (user_sellValue * (vatPercentage / 100))
                            * this.decimalConf.unit.iterator) / this.decimalConf.unit.iterator
                    ).toFixed(this.decimalConf.unit.value)
                );
            }
        }

        // Value (unit value without VAT)
        obj['costValue'] = costValue;
        obj['sellValue'] = sellValue;

        // Total vat
        obj['totalVatCost'] = (Math.round(
                (vatValueCost * quantity)
                * this.decimalConf.total.iterator) / this.decimalConf.total.iterator
        ).toFixed(this.decimalConf.total.value);
        obj['totalVatSell'] = (Math.round(
                (vatValueSell * quantity)
                * this.decimalConf.total.iterator) / this.decimalConf.total.iterator
        ).toFixed(this.decimalConf.total.value);

        // Total unit
        let totalUnitCost = parseFloat((Math.round(
                    (costValue + vatValueCost)
                    * this.decimalConf.total.iterator) / this.decimalConf.total.iterator
            ).toFixed(this.decimalConf.total.value)),
            totalUnitSell = parseFloat((Math.round(
                    (sellValue + vatValueSell)
                    * this.decimalConf.total.iterator) / this.decimalConf.total.iterator
            ).toFixed(this.decimalConf.total.value));

        // Total
        obj['totalCost'] = (Math.round(
                // Do not use "subTotal" nor "totalVat" to get the "total", because this values are already rounded,
                // and in some cases the sum of 2 rounded values cause inquiries.
                // Before multiply round the sum to get a coherent total unit value
                (totalUnitCost * quantity)
                * this.decimalConf.total.iterator) / this.decimalConf.total.iterator
        ).toFixed(this.decimalConf.total.value);
        obj['totalSell'] = (Math.round(
                (totalUnitSell * quantity)
                * this.decimalConf.total.iterator) / this.decimalConf.total.iterator
        ).toFixed(this.decimalConf.total.value);

        // Sub total
        obj['subTotalCost'] = (Math.round(
                // Sub total is determined in this way, because in some cases the sum of "subTotal" and "totalVat"
                // rounded does not match with the correct total, given that this values are rounded to 2 decimals
                // and lost precision, so in this way we keep the calculus with coherence giving preference to keep
                // "totalVat" untouched (legal values).
                (parseFloat(obj['totalCost'] || '0') - parseFloat(obj['totalVatCost'] || '0'))
                * this.decimalConf.total.iterator) / this.decimalConf.total.iterator
        ).toFixed(this.decimalConf.total.value);
        obj['subTotalSell'] = (Math.round(
                (parseFloat(obj['totalSell'] || '0') - parseFloat(obj['totalVatSell'] || '0'))
                * this.decimalConf.total.iterator) / this.decimalConf.total.iterator
        ).toFixed(this.decimalConf.total.value);
        return this;
    }
}