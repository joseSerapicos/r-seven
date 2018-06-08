import {Component, ElementRef, Inject, Optional, Injector, Renderer} from '@angular/core';
import {FormBuilder} from '@angular/forms';
import {FormPopupExtensionComponent, FormProvider} from '../../../form/ts/form-popup.extension-component';
import {DataService} from '../../../ts/data-service/data.service';
import {FormService} from '../../../form/ts/form.service';

// Re-exports
export {FormProvider};


@Component({
    selector: '#js_priceFormPopup',
    template: '' // Define template in child component
})
export class PriceFormPopupComponent extends FormPopupExtensionComponent
{
    // Configure number of decimals to use and to round
    protected decimalConf: any;

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
     * onIsVatIncludedChange
     * @param value
     */
    protected onIsVatIncludedChange(value: any): void
    {
        this._formService.getObject()['isVatIncluded'] = value;
        this.setPriceValue();
    }

    /**
     * onMarginMethodChange
     * @param value
     */
    protected onMarginMethodChange(value: string): void
    {
        this._formService.getObject()['marginMethod'] = value;
        this.setPriceValue();
    }

    /**
     * onMarginValueEnterKey
     * @param value
     */
    protected onMarginValueEnterKey(value: any): void
    {
        this._formService.getObject()['marginValue'] = value;
        this.setPriceValue();
    }

    /**
     * onCostValueEnterKey
     * @param value
     */
    protected onCostValueEnterKey(value: any): void
    {
        this._formService.getObject()['user_costValue'] = value;
        this.setPriceValue('COST');
    }

    /**
     * onSellValueEnterKey
     * @param value
     */
    protected onSellValueEnterKey(value: any): void
    {
        this._formService.getObject()['user_sellValue'] = value;
        this.setPriceValue('SELL');
    }

    /**
     * Set price value
     * @param baseField ([COST, SELL])
     * @returns any
     */
    protected setPriceValue(baseField = null): any
    {
        let obj = this._formService.getObject();

        // Determine base field if is not provided
        if (!baseField) {
            // Try to set 'COST' by default
            if (parseFloat(obj['user_costValue'] || '0') > 0) {
                baseField = 'COST';
            } else {
                baseField = 'SELL';
            }
        }

        let fields = {
                COST: {user_value: 'user_costValue', value: 'costValue'},
                SELL: {user_value: 'user_sellValue', value: 'sellValue'}
            },
            fieldToSet = ((baseField == 'COST') ? 'SELL' : 'COST'),
            marginMethod = obj['marginMethod'],
            isVatIncluded = obj['isVatIncluded'],
            vatPercentage = parseFloat(obj['vatCode_percentage'] || '0'),
            user_baseValue = parseFloat(obj[fields[baseField]['user_value']] || '0'),
            user_valueToSet = 0, // Will be calculated
            marginValue = parseFloat(obj['marginValue'] || '0'),
            vatValueToSet = 0;

        // Normalize decimals and update inputs with rounded values (with or without VAT, according with user preferences)
        // @TODO update only when the user leaves the input,
        // otherwise user can not fill the input with more that one digit at a time (commented bellow).
        user_baseValue = parseFloat(/*obj[fields[baseField]['user_value']] = */  (Math.round(
                    user_baseValue * this.decimalConf.unit.iterator) / this.decimalConf.unit.iterator
            ).toFixed(this.decimalConf.unit.value)
        );
        marginValue = parseFloat(/*obj['marginValue'] = */  (Math.round(
                    marginValue * this.decimalConf.unit.iterator) / this.decimalConf.unit.iterator
            ).toFixed(this.decimalConf.unit.value)
        );

        obj['userFieldTyped'] = baseField;

        // Calc base value without VAT
        if ((vatPercentage > 0) && isVatIncluded) {
            user_baseValue = parseFloat((Math.round(
                        (user_baseValue / (1 + (vatPercentage / 100)))
                        * this.decimalConf.unit.iterator) / this.decimalConf.unit.iterator
                ).toFixed(this.decimalConf.unit.value)
            );
        }

        // Set real value (unit value without VAT)
        obj[fields[baseField]['value']] = (Math.round(
                user_baseValue * this.decimalConf.unit.iterator) / this.decimalConf.unit.iterator
        ).toFixed(this.decimalConf.unit.value);

        // Note: Value to set is determined from base value without VAT
        switch (marginMethod) {
            case 'MARGIN':
                // Avoid that margin exceed the limit (100)
                marginValue = ((marginValue < 100) ? marginValue : 99.9999); // Avoid division by zero
                if (baseField == 'COST') {
                    user_valueToSet = parseFloat((Math.round(
                                (user_baseValue / (1 - (marginValue / 100))) * this.decimalConf.unit.iterator) / this.decimalConf.unit.iterator
                        ).toFixed(this.decimalConf.unit.value)
                    );
                } else {
                    user_valueToSet = parseFloat((Math.round(
                                (user_baseValue * (1 - (marginValue / 100))) * this.decimalConf.unit.iterator) / this.decimalConf.unit.iterator
                        ).toFixed(this.decimalConf.unit.value)
                    );
                }
                break;
            case 'MARKUP':
                if (baseField == 'COST') {
                    user_valueToSet = parseFloat((Math.round(
                                (user_baseValue * (1 + (marginValue / 100))) * this.decimalConf.unit.iterator) / this.decimalConf.unit.iterator
                        ).toFixed(this.decimalConf.unit.value)
                    );
                } else {
                    user_valueToSet = parseFloat((Math.round(
                                (user_baseValue / (1 + (marginValue / 100))) * this.decimalConf.unit.iterator) / this.decimalConf.unit.iterator
                        ).toFixed(this.decimalConf.unit.value)
                    );
                }
                break;
            case 'FIXED':
                if (baseField == 'COST') {
                    user_valueToSet = parseFloat((Math.round(
                                (user_baseValue + marginValue) * this.decimalConf.unit.iterator) / this.decimalConf.unit.iterator
                        ).toFixed(this.decimalConf.unit.value)
                    );
                } else {
                    user_valueToSet = parseFloat((Math.round(
                                (user_baseValue - marginValue) * this.decimalConf.unit.iterator) / this.decimalConf.unit.iterator
                        ).toFixed(this.decimalConf.unit.value)
                    );
                }
                break;
            default: // No margin was defined, so calculate the value to set only based on VAT
                user_valueToSet = parseFloat(obj[fields[fieldToSet]['user_value']] || '0');

                // Normalize decimals and update inputs with rounded values (with or without VAT, according with user preferences)
                // @TODO update only when the user leaves the input,
                // otherwise user can not fill the input with more that one digit at a time (commented bellow).
                user_valueToSet = parseFloat(/*obj[fields[fieldToSet]['user_value']] = */  (Math.round(
                            user_valueToSet * this.decimalConf.unit.iterator) / this.decimalConf.unit.iterator
                    ).toFixed(this.decimalConf.unit.value)
                );

                // Calc base value without VAT
                if ((vatPercentage > 0) && isVatIncluded) {
                    user_valueToSet = parseFloat((Math.round(
                                (user_valueToSet / (1 + (vatPercentage / 100)))
                                * this.decimalConf.unit.iterator) / this.decimalConf.unit.iterator
                        ).toFixed(this.decimalConf.unit.value)
                    );
                }
        }

        // Set real value (unit value without VAT)
        obj[fields[fieldToSet]['value']] = (Math.round(
                user_valueToSet * this.decimalConf.unit.iterator) / this.decimalConf.unit.iterator
        ).toFixed(this.decimalConf.unit.value);

        // Calc value to set VAT
        if((vatPercentage > 0) && isVatIncluded) {
            vatValueToSet = parseFloat((Math.round(
                        (user_valueToSet * (vatPercentage / 100))
                        * this.decimalConf.unit.iterator) / this.decimalConf.unit.iterator
                ).toFixed(this.decimalConf.unit.value)
            );
        }

        // Update inputs with rounded values (with or without VAT, according with user preferences)
        obj[fields[fieldToSet]['user_value']] = (Math.round(
                (user_valueToSet + vatValueToSet)
                * this.decimalConf.unit.iterator) / this.decimalConf.unit.iterator
        ).toFixed(this.decimalConf.unit.value);

        // Callback
        this.postPriceUpdate();

        return this;
    }


    ////////
    // Events/Callbacks
    ////////////////////////////////


    /**
     * Post (after) price update event. Use this function to handle event.
     * @return any
     */
    protected postPriceUpdate()
    {
        return this;
    }
}