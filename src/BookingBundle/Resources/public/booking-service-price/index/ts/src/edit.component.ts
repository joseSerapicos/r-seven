import {Component, ElementRef, Inject, Optional, Injector, Renderer} from '@angular/core';
import {FormBuilder} from '@angular/forms';
import {PriceFormPopupComponent, FormProvider} from '../../../../../../../AppBundle/Resources/public/price/ts/src/price-form-popup.component';
import {DataService} from '../../../../../../../AppBundle/Resources/public/ts/data-service/data.service';
import {FormService} from '../../../../../../../AppBundle/Resources/public/ts/form/form.service';

// Re-exports
export {FormProvider}


@Component({
    selector: '#js_edit',
    templateUrl: '../templates/edit.component.html'
})
export class EditComponent extends PriceFormPopupComponent
{
    constructor(
        elementRef: ElementRef,
        renderer: Renderer,
        @Inject('Provider') provider: FormProvider,
        formService: FormService,
        @Inject('DataService') dataService: any,
        @Inject('HelperService') helperService: any,
        @Inject('ParentDataService') protected _parentDataService: any
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
            formObj['vatCodeObj'] = parentObj['vatCodeObj'];
            formObj['vatCode_name'] = parentObj['vatCode_name'];
            formObj['vatCode_percentage'] = parentObj['vatCode_percentage'];
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
     * @returns any
     */
    protected setSellValue(): any
    {
        super.setSellValue();
        this.setTotals();
        return this;
    }

    /**
     * Overrides parent method
     * @returns any
     */
    protected setCostValue(): any
    {
        super.setCostValue();
        this.setTotals();
        return this;
    }

    /**
     * Set totals
     * @returns any
     */
    protected setTotals(): any
    {
        let obj = this._formService.getObject(),
            quantity = parseFloat(obj['quantity'] || '0'),
            isVatIncluded = obj['isVatIncluded'],
            vatPercentage = parseFloat(obj['vatCode_percentage'] || '0'),
            costValue = parseFloat(obj['costValue'] || '0'), // No VAT included
            sellValue = parseFloat(obj['sellValue'] || '0'), // No VAT included
            vatValueCost = 0,
            vatValueSell = 0;

        // VAT value
        if (vatPercentage > 0) {
            vatValueCost = parseFloat((Math.round(
                        (costValue * (vatPercentage / 100))
                        * this.decimalConf.unit.iterator) / this.decimalConf.unit.iterator
                ).toFixed(this.decimalConf.unit.value)
            );
            vatValueSell = parseFloat((Math.round(
                        (sellValue * (vatPercentage / 100))
                        * this.decimalConf.unit.iterator) / this.decimalConf.unit.iterator
                ).toFixed(this.decimalConf.unit.value)
            );
        }

        // Total vat
        obj['totalVatCost'] = (Math.round(
                (vatValueCost * quantity)
                * this.decimalConf.total.iterator) / this.decimalConf.total.iterator
        ).toFixed(this.decimalConf.total.value);
        obj['totalVatSell'] = (Math.round(
                (vatValueSell * quantity)
                * this.decimalConf.total.iterator) / this.decimalConf.total.iterator
        ).toFixed(this.decimalConf.total.value);

        /* Total unit (disabled for now)
        obj['totalUnitSell'] = (Math.round(
                (sellValue + vatValueSell)
                * this.decimalConf.total.iterator) / this.decimalConf.total.iterator
        ).toFixed(this.decimalConf.total.value);*/

        let totalUnitCost = parseFloat((Math.round(
                    (costValue + vatValueCost)
                    * this.decimalConf.total.iterator) / this.decimalConf.total.iterator
            ).toFixed(this.decimalConf.total.value)),
            totalUnitSell = parseFloat((Math.round(
                    (sellValue + vatValueSell)
                    * this.decimalConf.total.iterator) / this.decimalConf.total.iterator
            ).toFixed(this.decimalConf.total.value));

        // Total
        // Do not use "subTotal" nor "totalVat" to get the "total", because this values are already rounded,
        // and in some cases the sum of 2 rounded values cause inquiries.
        // Before multiply round the sum to get a coherent total unit value
        obj['totalCost'] = (Math.round(
                (totalUnitCost * quantity)
                * this.decimalConf.total.iterator) / this.decimalConf.total.iterator
        ).toFixed(this.decimalConf.total.value);
        obj['totalSell'] = (Math.round(
                (totalUnitSell * quantity)
                * this.decimalConf.total.iterator) / this.decimalConf.total.iterator
        ).toFixed(this.decimalConf.total.value);

        // Sub total
        // Sub total is determined in this way, because in some cases the sum of "subTotal" and "totalVat"
        // rounded does not match with the correct total, given that this values are rounded to 2 decimals
        // and lost precision, so in this way we keep the calculus with coherence giving preference to keep
        // "totalVat" untouched (legal values).
        obj['subTotalCost'] = (Math.round(
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