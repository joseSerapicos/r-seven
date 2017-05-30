import {Component, ElementRef, Inject, Optional, Injector, Renderer} from '@angular/core';
import {FormBuilder} from '@angular/forms';
import {Helper} from '../ts/helper';
import {FormPopupExtensionComponent, FormProvider} from '../ts/form/form-popup.extension-component';
import {DataService} from '../ts/data-service/data.service';
import {FormService} from '../ts/form/form.service';

// Re-exports
export {FormProvider};


@Component({
    selector: '#js_priceFormPopup',
    templateUrl: Helper.getRuntimeVar('templateUrl')
})
export class PriceFormPopupComponent extends FormPopupExtensionComponent
{
    // Configure number of decimals to use and to round
    protected decimalConf: any;

    // Iterator for round calc
    protected decimalIteratorConf: any;

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

        this.decimalConf = this._helperService.getDecimalConf();
    }

    /**
     * onMarginMethodChange
     * @param value
     */
    protected onMarginMethodChange(value: string): void
    {
        this._formService.getObject()['marginMethod'] = value;
        this.setSellValue();
    }

    /**
     * onMarginValueEnterKey
     * @param value
     */
    protected onMarginValueEnterKey(value: any): void
    {
        this._formService.getObject()['marginValue'] = value;
        this.setSellValue();
    }

    /**
     * onCostValueEnterKey
     * @param value
     */
    protected onCostValueEnterKey(value: any): void
    {
        this._formService.getObject()['costValue'] = value;
        this.setSellValue();
    }

    /**
     * onSellValueEnterKey
     * @param value
     */
    protected onSellValueEnterKey(value: any): void
    {
        this._formService.getObject()['sellValue'] = value;
        this.setCostValue();
    }

    /**
     * Set cost price
     * @param costField
     * @param sellField
     * @returns {PriceFormPopupComponent}
     */
    protected setCostValue(costField = 'costValue', sellField = 'sellValue'): PriceFormPopupComponent
    {
        let obj = this._formService.getObject();

        let sell = (Math.round(
                    parseFloat(obj[sellField] || '0') * this.decimalConf.unit.iterator) / this.decimalConf.unit.iterator
            ).toFixed(this.decimalConf.unit.value),
            margin = (Math.round(
                    parseFloat(obj['marginValue'] || '0') * this.decimalConf.unit.iterator) / this.decimalConf.unit.iterator
            ).toFixed(this.decimalConf.unit.value),
            sellFloat = parseFloat(sell),
            marginFloat = parseFloat(margin);

        // Update inputs with rounded values
        obj[sellField] = sell;
        obj['marginValue'] = margin;
        obj['userFieldTyped'] = 'SELL';

        switch (obj['marginMethod']) {
            case 'MARGIN':
                // Avoid that margin exceed the limit (100)
                marginFloat = ((marginFloat < 100) ? marginFloat : 99.9999); // Avoid division by zero
                obj[costField] = (Math.round(
                    (sellFloat * (1 - (marginFloat / 100))) * this.decimalConf.unit.iterator) / this.decimalConf.unit.iterator
                ).toFixed(this.decimalConf.unit.value);
                break;
            case 'MARKUP':
                obj[costField] = (Math.round(
                    (sellFloat / (1 + (marginFloat / 100))) * this.decimalConf.unit.iterator) / this.decimalConf.unit.iterator
                ).toFixed(this.decimalConf.unit.value);
                break;
            case 'FIXED':
                obj[costField] = (Math.round(
                    (sellFloat - marginFloat) * this.decimalConf.unit.iterator) / this.decimalConf.unit.iterator
                ).toFixed(this.decimalConf.unit.value);
                break;
        }

        return this;
    }

    /**
     * Set cost price
     * @param costField
     * @param sellField
     * @returns {PriceFormPopupComponent}
     */
    protected setSellValue(costField = 'costValue', sellField = 'sellValue'): PriceFormPopupComponent
    {
        let obj = this._formService.getObject();

        let cost = (Math.round(
                parseFloat(obj[costField] || '0') * this.decimalConf.unit.iterator) / this.decimalConf.unit.iterator
        ).toFixed(this.decimalConf.unit.value),
            margin = (Math.round(
                parseFloat(obj['marginValue'] || '0') * this.decimalConf.unit.iterator) / this.decimalConf.unit.iterator
            ).toFixed(this.decimalConf.unit.value),
            costFloat = parseFloat(cost),
            marginFloat = parseFloat(margin);

        // Update inputs with rounded values
        obj[costField] = cost;
        obj['marginValue'] = margin;
        obj['userFieldTyped'] = 'COST';

        switch (obj['marginMethod']) {
            case 'MARGIN':
                // Avoid that margin exceed the limit (100)
                marginFloat = ((marginFloat < 100) ? marginFloat : 99.9999); // Avoid division by zero
                obj[sellField] = (Math.round(
                    (costFloat / (1 - (marginFloat / 100))) * this.decimalConf.unit.iterator) / this.decimalConf.unit.iterator
                ).toFixed(this.decimalConf.unit.value);
                break;
            case 'MARKUP':
                obj[sellField] = (Math.round(
                    (costFloat * (1 + (marginFloat / 100))) * this.decimalConf.unit.iterator) / this.decimalConf.unit.iterator
                ).toFixed(this.decimalConf.unit.value);
                break;
            case 'FIXED':
                obj[sellField] = (Math.round(
                    (costFloat + marginFloat) * this.decimalConf.unit.iterator) / this.decimalConf.unit.iterator
                ).toFixed(this.decimalConf.unit.value);
                break;
        }

        return this;
    }
}