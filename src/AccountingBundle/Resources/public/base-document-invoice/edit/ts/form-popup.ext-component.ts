import {Component, ElementRef, Inject, Optional, Injector, Renderer} from '@angular/core';
import {FormBuilder} from '@angular/forms';
import {FormPopupExtensionComponent, FormProvider} from '../../../../../../AppBundle/Resources/public/ts/form/form-popup.extension-component';
import {DataService} from '../../../../../../AppBundle/Resources/public/ts/data-service/data.service';


@Component({
    selector: '#js_documentInvoiceDetailFormPopup',
    template: ''
})
export class FormPopupExtComponent extends FormPopupExtensionComponent
{
    // Constructor vars
    protected _helperService: any;

    // Configure number of decimals to use and to round
    protected decimalConf: any;

    constructor() { super(); }

    initBaseDocumentInvoiceEditFormPopupExtComponent(
        elementRef: any,
        renderer: any,
        @Inject('Provider') provider: FormProvider,
        formService: any,
        @Inject('DataService') dataService: any,
        @Inject('HelperService') helperService: any
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
     * onServiceChange
     * @param value
     */
    protected onServiceChange(value: string): void
    {
        let that = this;

        this._dataService.runAction(
            (this._helperService.getAppVar('route')
                + 'services/service/get-vat-code-percentage/'
                + value
            )
        ).then(
            data => {
                if (data['localData']) {
                    that._formService.getObject()['vatCode_percentage']
                        = (data['localData']['vatCodePercentage'] || null);
                    that.setTotals();
                }
            },
            errors => { console.log(errors); return; }
        );
    }

    /**
     * onQuantityEnterKey
     * @param value
     */
    protected onQuantityEnterKey(value: any): void
    {
        this._formService.getObject()['quantity'] = value; // Value is not yet setted in object
        this.setTotals();
    }

    /**
     * onValueEnterKey
     * @param value
     */
    protected onValueEnterKey(value: any): void
    {
        this._formService.getObject()['user_value'] = value;
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
     * Set totals
     * @returns any
     */
    protected setTotals(): any {
        let obj = this._formService.getObject(),
            quantity = parseFloat(obj['quantity'] || '0'),
            user_value = parseFloat(obj['user_value'] || '0'),
            isVatIncluded = obj['isVatIncluded'],
            vatPercentage = parseFloat(obj['vatCode_percentage'] || '0'),
            vatValue = 0;

        // Normalize decimals and update inputs with rounded values (with or without VAT, according with user preferences)
        // @TODO update only when the user leaves the input,
        // otherwise user can not fill the input with more that one digit at a time (commented bellow).
        user_value = parseFloat(/*obj['user_value'] = */  (Math.round(
                user_value * this.decimalConf.unit.iterator) / this.decimalConf.unit.iterator
            ).toFixed(this.decimalConf.unit.value)
        );

        // Calc VAT value and value
        if (vatPercentage > 0) {
            if (isVatIncluded) {
                // KEEP SAME METHOD THAT PHP FUNCTIONS
                // We need to adjust the VAT value.
                // Sometimes the rounded value can produce a different VAT value when it is calculated again
                // based on the rounded value, since that all forms use the value (rounded without VAT) to make all
                // calculus, this issue can cause inquiries between forms when try to calc the VAT value again, so we
                // need to adjust the VAT value according with the rounded value
                user_value = parseFloat((Math.round(
                            (user_value / (1 + (vatPercentage / 100)))
                            * this.decimalConf.unit.iterator) / this.decimalConf.unit.iterator
                    ).toFixed(this.decimalConf.unit.value)
                );
            }
            vatValue = parseFloat((Math.round(
                        (user_value * (vatPercentage / 100))
                        * this.decimalConf.unit.iterator) / this.decimalConf.unit.iterator
                ).toFixed(this.decimalConf.unit.value)
            );
        }

        // Value (unit value without VAT)
        obj['value'] = parseFloat(user_value.toFixed(this.decimalConf.unit.value));

        // Total vat
        obj['totalVat'] = (Math.round(
                    (vatValue * quantity)
                    * this.decimalConf.total.iterator) / this.decimalConf.total.iterator
            ).toFixed(this.decimalConf.total.value);

        // Total unit
        let totalUnit = parseFloat((Math.round(
                    (parseFloat(obj['value'] || 0) + vatValue)
                    * this.decimalConf.total.iterator) / this.decimalConf.total.iterator
            ).toFixed(this.decimalConf.total.value)
        );

        // Total
        obj['total'] = (Math.round(
                // Do not use "subTotal" nor "totalVat" to get the "total", because this values are already rounded,
                // and in some cases the sum of 2 rounded values cause inquiries.
                // Before multiply round the sum to get a coherent total unit value
                (totalUnit * quantity)
                * this.decimalConf.total.iterator) / this.decimalConf.total.iterator
        ).toFixed(this.decimalConf.total.value);

        // Sub total
        obj['subTotal'] = (Math.round(
                // Sub total is determined in this way, because in some cases the sum of "subTotal" and "totalVat"
                // rounded does not match with the correct total, given that this values are rounded to 2 decimals
                // and lost precision, so in this way we keep the calculus with coherence giving preference to keep
                // "totalVat" untouched (legal values).
                (parseFloat(obj['total'] || '0') - parseFloat(obj['totalVat'] || '0'))
                * this.decimalConf.total.iterator) / this.decimalConf.total.iterator
        ).toFixed(this.decimalConf.total.value);

        return this;
    }
}