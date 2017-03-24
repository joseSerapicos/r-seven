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
    protected costDecimals: number = 4;
    protected marginDecimals: number = 4;
    protected sellDecimals: number = 4;

    // Iterator for round calc
    protected costDecimalIterator: number;
    protected marginDecimalIterator: number;
    protected sellDecimalIterator: number;

    constructor(
        elementRef: ElementRef,
        renderer: Renderer,
        @Inject('Provider') provider: FormProvider,
        formService: FormService,
        @Inject('DataService') dataService: any
    ) {
        super();
        super.initFormPopupExtensionComponent(
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
     * @returns {PriceFormPopupComponent}
     */
    protected setCostValue(): PriceFormPopupComponent
    {
        let obj = this._formService.getObject();

        let sell = (Math.round(
                    parseFloat(obj['sellValue'] || '0') * this.sellDecimalIterator) / this.sellDecimalIterator
            ).toFixed(this.sellDecimals),
            margin = (Math.round(
                    parseFloat(obj['marginValue'] || '0') * this.marginDecimalIterator) / this.marginDecimalIterator
            ).toFixed(this.marginDecimals),
            sellFloat = parseFloat(sell),
            marginFloat = parseFloat(margin);

        // Update inputs with rounded values
        obj['sellValue'] = sell;
        obj['marginValue'] = margin;
        obj['userFieldTyped'] = 'SELL';

        switch (obj['marginMethod']) {
            case 'MARGIN':
                // Avoid that margin exceed the limit (100)
                marginFloat = ((marginFloat < 100) ? marginFloat : 99.9999); // Avoid division by zero
                obj['costValue'] = (Math.round(
                    (sellFloat * (1 - (marginFloat / 100))) * this.costDecimalIterator) / this.costDecimalIterator
                ).toFixed(this.costDecimals);
                break;
            case 'MARKUP':
                obj['costValue'] = (Math.round(
                    (sellFloat / (1 + (marginFloat / 100))) * this.costDecimalIterator) / this.costDecimalIterator
                ).toFixed(this.costDecimals);
                break;
            case 'FIXED':
                obj['costValue'] = (Math.round(
                    (sellFloat - marginFloat) * this.costDecimalIterator) / this.costDecimalIterator
                ).toFixed(this.costDecimals);
                break;
        }

        return this;
    }

    /**
     * Set sell price
     * @returns {PriceFormPopupComponent}
     */
    protected setSellValue(): PriceFormPopupComponent
    {
        let obj = this._formService.getObject();

        let cost = (Math.round(
                parseFloat(obj['costValue'] || '0') * this.costDecimalIterator) / this.costDecimalIterator
            ).toFixed(this.costDecimals),
            margin = (Math.round(
                parseFloat(obj['marginValue'] || '0') * this.marginDecimalIterator) / this.marginDecimalIterator
            ).toFixed(this.marginDecimals),
            costFloat = parseFloat(cost),
            marginFloat = parseFloat(margin);

        // Update inputs with rounded values
        obj['costValue'] = cost;
        obj['marginValue'] = margin;
        obj['userFieldTyped'] = 'COST';

        switch (obj['marginMethod']) {
            case 'MARGIN':
                // Avoid that margin exceed the limit (100)
                marginFloat = ((marginFloat < 100) ? marginFloat : 99.9999); // Avoid division by zero
                obj['sellValue'] = (Math.round(
                    (costFloat / (1 - (marginFloat / 100))) * this.sellDecimalIterator) / this.sellDecimalIterator
                ).toFixed(this.sellDecimals);
                break;
            case 'MARKUP':
                obj['sellValue'] = (Math.round(
                    (costFloat * (1 + (marginFloat / 100))) * this.sellDecimalIterator) / this.sellDecimalIterator
                ).toFixed(this.sellDecimals);
                break;
            case 'FIXED':
                obj['sellValue'] = (Math.round(
                    (costFloat + marginFloat) * this.sellDecimalIterator) / this.sellDecimalIterator
                ).toFixed(this.sellDecimals);
                break;
        }

        return this;
    }
}