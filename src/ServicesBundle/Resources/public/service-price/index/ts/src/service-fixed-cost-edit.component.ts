import {Component, ElementRef, Inject, Optional, Injector, Renderer} from '@angular/core';
import {FormBuilder} from '@angular/forms';
import {CostWithVatPopupComponent, FormProvider} from '../../../../../../../AppBundle/Resources/public/price/ts/src/cost-with-vat-popup.component';
import {DataService} from '../../../../../../../AppBundle/Resources/public/ts/data-service/data.service';
import {FormService} from '../../../../../../../AppBundle/Resources/public/ts/form/form.service';


@Component({
    selector: '#js_servicePricePopup',
    templateUrl: '../templates/service-fixed-cost-edit.component.html'
})
export class ServiceFixedCostEditComponent extends CostWithVatPopupComponent
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
        }
    }
}