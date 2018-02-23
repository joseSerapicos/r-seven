import {Component, ElementRef, Inject, Optional, Injector, Renderer} from '@angular/core';
import {FormBuilder} from '@angular/forms';
import {FormPopupExtensionComponent, FormProvider} from '../../../../../AppBundle/Resources/public/ts/form/form-popup.extension-component';


@Component({
    selector: '#js_serviceSupplementPopup',
    template: ''
})
export class EditExtComponent extends FormPopupExtensionComponent
{
    // Constructor vars
    protected _helperService: any;

    // Configure number of decimals to use and to round
    protected decimalConf: any;


    constructor() { super(); }

    public initBaseServicePriceExceptionEditExtComponent(
        elementRef: any,
        renderer: any,
        provider: FormProvider,
        formService: any,
        dataService: any,
        helperService
    ) {
        super.initFormPopupExtensionComponent(
            elementRef,
            renderer,
            provider,
            formService,
            dataService
        );

        // Constructor vars
        this._helperService = helperService;

        this.decimalConf = this._helperService.getDecimalConf();
    }

    /**
     * onIsVatIncludedChange
     * @param value
     */
    protected onIsVatIncludedChange(value: any): void
    {
        this._formService.getObject()['isVatIncluded'] = value;
        this.setValue('COST');
        this.setValue('MARGIN');
    }

    /**
     * onCostMethodChange
     * @param value
     */
    protected onCostMethodChange(value: string): void
    {
        this._formService.getObject()['costMethod'] = value;
        this.setValue('COST');
    }

    /**
     * onMarginMethodChange
     * @param value
     */
    protected onMarginMethodChange(value: string): void
    {
        this._formService.getObject()['marginMethod'] = value;
        this.setValue('MARGIN');
    }

    /**
     * onCostValueEnterKey
     * @param value
     */
    protected onCostValueEnterKey(value: any): void
    {
        this._formService.getObject()['user_costValue'] = value;
        this.setValue('COST');
    }

    /**
     * onMarginValueEnterKey
     * @param value
     */
    protected onMarginValueEnterKey(value: any): void
    {
        this._formService.getObject()['user_marginValue'] = value;
        this.setValue('MARGIN');
    }

    /**
     * Set value
     * @param field ([COST, MARGIN])
     * @returns any
     */
    protected setValue(field: string): any
    {
        let fields = {
                COST: {user_value: 'user_costValue', value: 'costValue', method: 'costMethod'},
                MARGIN: {user_value: 'user_marginValue', value: 'marginValue', method: 'marginMethod'}
            },
            obj = this._formService.getObject(),
            isVatIncluded = obj['isVatIncluded'],
            vatPercentage = parseFloat(obj['vatCode_percentage'] || '0'),
            method = obj[fields[field]['method']],
            user_value = parseFloat(obj[fields[field]['user_value']] || '0');

        // Normalize decimals and update inputs with rounded values (with or without VAT, according with user preferences)
        // @TODO update only when the user leaves the input,
        // otherwise user can not fill the input with more that one digit at a time (commented bellow).
        user_value = parseFloat(/*obj[fields[field]['user_value']] = */  (Math.round(
                user_value * this.decimalConf.unit.iterator) / this.decimalConf.unit.iterator
            ).toFixed(this.decimalConf.unit.value)
        );

        // If used method is "FIXED", then value is used directly,
        // so we need to calc value according with isVatIncluded user preferences.
        if (method == 'FIXED') {
            // Calc values without VAT
            if (vatPercentage > 0) {
                if (isVatIncluded) {
                    user_value = parseFloat((Math.round(
                                (user_value / (1 + (vatPercentage / 100)))
                                * this.decimalConf.unit.iterator) / this.decimalConf.unit.iterator
                        ).toFixed(this.decimalConf.unit.value)
                    );
                }
            }
        }

        // Set real values (unit value without VAT)
        obj[fields[field]['value']] = (Math.round(
                user_value * this.decimalConf.unit.iterator) / this.decimalConf.unit.iterator
        ).toFixed(this.decimalConf.unit.value);

        return this;
    }
}