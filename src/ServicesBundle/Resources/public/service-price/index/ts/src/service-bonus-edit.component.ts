import {Component, ElementRef, Inject, Optional, Injector, Renderer} from '@angular/core';
import {FormBuilder} from '@angular/forms';
import {FormPopupExtensionComponent, FormProvider} from '../../../../../../../AppBundle/Resources/public/ts/form/form-popup.extension-component';
import {DataService} from '../../../../../../../AppBundle/Resources/public/ts/data-service/data.service';
import {FormService} from '../../../../../../../AppBundle/Resources/public/ts/form/form.service';


@Component({
    selector: '#js_serviceBonusEdit',
    templateUrl: '../templates/service-bonus-edit.component.html'
})
export class ServiceBonusEditComponent extends FormPopupExtensionComponent
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
        this.setValue('BONUS');
    }

    /**
     * onBonusMethodChange
     * @param value
     */
    protected onBonusMethodChange(value: string): void
    {
        this._formService.getObject()['bonusMethod'] = value;
        this.setValue('BONUS');
    }

    /**
     * onBonusValueEnterKey
     * @param value
     */
    protected onBonusValueEnterKey(value: any): void
    {
        this._formService.getObject()['user_bonusValue'] = value;
        this.setValue('BONUS');
    }

    /**
     * Set value
     * @param field ([BONUS])
     * @returns any
     */
    protected setValue(field: string): any
    {
        let fields = {
                BONUS: {user_value: 'user_bonusValue', value: 'bonusValue', method: 'bonusMethod'}
            },
            obj = this._formService.getObject(),
            isVatIncluded = obj['isVatIncluded'],
            vatPercentage = parseFloat(obj['bonusVatCode_percentage'] || '0'),
            method = obj[fields[field]['method']],
            user_value = parseFloat(obj[fields[field]['user_value']] || '0');

        // Normalize decimals and update inputs with rounded values (with or without VAT, according with user preferences)
        // @TODO update only when the user leaves the input,
        // otherwise user can not fill the input with more that one digit at a time (commented bellow).
        user_value = parseFloat(/*obj[fields[field]['user_value']] = */  (Math.round(
                user_value * this.decimalConf.unit.iterator) / this.decimalConf.unit.iterator
            ).toFixed(this.decimalConf.unit.value)
        );

        // If used method is "FIXED", then the value represents the bonus value
        // (the others methods are percentages not values),
        // so we need to calc the value according with isVatIncluded user preferences.
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