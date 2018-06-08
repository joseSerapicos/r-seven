import {Component, ElementRef, Inject, Optional, Injector, Renderer} from '@angular/core';
import {FormBuilder} from '@angular/forms';
import {FormPopupExtensionComponent, FormProvider} from '../../../form/ts/form-popup.extension-component';
import {DataService} from '../../../ts/data-service/data.service';
import {FormService} from '../../../form/ts/form.service';

// Re-exports
export {FormProvider};


@Component({
    selector: '#js_costWithVatPopup',
    template: '' // Define template in child component
})
export class CostWithVatPopupComponent extends FormPopupExtensionComponent
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
    public onIsVatIncludedChange(value: any): void
    {
        this._formService.getObject()['isVatIncluded'] = value;
        this.setPriceValue();
    }

    /**
     * onVatCodeChange
     * @param value
     */
    protected onVatCodeChange(value: string): void
    {
        let that = this;

        this._dataService.runAction(
            (this._helperService.getAppVar('route')
                + 'bck/accounting/vat-code/get-percentage/'
                + value
            )
        ).then(
            data => {
                if (data['localData'] && data['localData']['data']) {
                    that._formService.getObject()['vatCode_percentage']
                        = (data['localData']['data']['percentage'] || null);
                    that.setPriceValue();
                }
            },
            errors => { console.log(errors); return; }
        );
    }

    /**
     * onCostValueEnterKey
     * @param value
     */
    public onCostValueEnterKey(value: any): void
    {
        this._formService.getObject()['user_costValue'] = value;
        this.setPriceValue();
    }

    /**
     * Set price
     * @returns any
     */
    protected setPriceValue(): any
    {
        let obj = this._formService.getObject(),
            isVatIncluded = obj['isVatIncluded'],
            vatPercentage = parseFloat(obj['vatCode_percentage'] || '0'),
            user_costValue = parseFloat(obj['user_costValue'] || '0'),
            vatValueCost = 0;

        // Normalize decimals and update inputs with rounded values (with or without VAT, according with user preferences)
        // @TODO update only when the user leaves the input,
        // otherwise user can not fill the input with more that one digit at a time (commented bellow).
        user_costValue = parseFloat(/*obj[fields[baseField]['user_value']] = */  (Math.round(
                    user_costValue * this.decimalConf.unit.iterator) / this.decimalConf.unit.iterator
            ).toFixed(this.decimalConf.unit.value)
        );

        // Calc value without VAT
        if (isVatIncluded && (vatPercentage > 0)) {
            user_costValue = parseFloat((Math.round(
                        (user_costValue / (1 + (vatPercentage / 100)))
                        * this.decimalConf.unit.iterator) / this.decimalConf.unit.iterator
                ).toFixed(this.decimalConf.unit.value)
            );
        }

        // Set real values (unit value without VAT)
        obj['costValue'] = (Math.round(
                user_costValue * this.decimalConf.unit.iterator) / this.decimalConf.unit.iterator
        ).toFixed(this.decimalConf.unit.value);

        // Calc VAT
        if (vatPercentage > 0) {
            vatValueCost = parseFloat((Math.round(
                        (user_costValue * (vatPercentage / 100))
                        * this.decimalConf.unit.iterator) / this.decimalConf.unit.iterator
                ).toFixed(this.decimalConf.unit.value)
            );
        }

        // Update input with VAT
        obj['vatValueCost'] = (Math.round(
                vatValueCost
                * this.decimalConf.unit.iterator) / this.decimalConf.unit.iterator
        ).toFixed(this.decimalConf.unit.value);

        // Update total
        obj['totalCost'] = (Math.round(
                (user_costValue + vatValueCost)
                * this.decimalConf.total.iterator) / this.decimalConf.total.iterator
        ).toFixed(this.decimalConf.total.value);

        return this;
    }
}