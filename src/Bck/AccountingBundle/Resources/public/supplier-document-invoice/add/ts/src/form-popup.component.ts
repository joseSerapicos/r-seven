import {Component, ElementRef, Inject, Injector, Renderer, QueryList, Optional, ViewChildren, ViewContainerRef, ViewChild} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {FormService} from '../../../../../../../../AppBundle/Resources/public/form/ts/form.service';
import {Helper} from '../../../../../../../../AppBundle/Resources/public/ts/helper';
import {DataService} from "../../../../../../../../AppBundle/Resources/public/ts/data-service/data.service";
import {WizardPopupProvider, LazyLoadData} from '../../../../../../../../AppBundle/Resources/public/wizard/ts/src/wizard-form-popup.ext-component';
import {WizardManagerService} from '../../../../../../../../AppBundle/Resources/public/wizard/ts/src/wizard-manager.service';
import {FormPopupExtComponent} from '../../../../base-document-invoice/add/ts/form-popup.ext-component';


/* Import dependencies */

// Booking Parent, used when the document is aggregated to one booking
// (this code is putted here to avoid to repeat this module in the booking bundle, so we can reuse the same modules)
var bookingContext = ((Helper.getAppVar('conf')['localData']['data']['bookingContext'])
            ? Helper.getAppVar('conf')['localData']['data']['bookingContext'] :
            null
    ),
    bookingId = (bookingContext ? Helper.getAppVar('conf')['object']['id'] : null);

// BOOKING SERVICE PRICE CHOICES
import {TreeViewExtModule} from '../../../../../../../../AppBundle/Resources/public/tree-view/default/ts/src/tree-view.ext-module';
// Form edit
import {Step2ExtModule as SupplierDocumentInvoiceDetailAddStep2ExtModule} from './step2.ext-module';

/* /Import dependencies */


@Component({
    selector: '.js_addFormPopup',
    templateUrl: '../templates/form-popup.component.html'
})
export class FormPopupComponent extends FormPopupExtComponent
{
    constructor(
        elementRef: ElementRef,
        renderer: Renderer,
        @Inject('Provider') provider: WizardPopupProvider,
        wizardManagerService: WizardManagerService,
        formService: FormService,
        @Inject('HelperService') helperService: any,
        @Inject('DataService') dataService: any,
        @Inject('ParentFormService') parentFormService: any, // To get parent object
        injector: Injector
    ) {
        // Call parent
        super();
        super.initBaseDocumentInvoiceAddFormPopupExtComponent(
            elementRef,
            renderer,
            provider,
            wizardManagerService,
            formService,
            helperService,
            dataService,
            parentFormService,
            injector
        );
    }

    /**
     * Get navigation data (needed data to lazy load container)
     * @param index (index to load)
     * @returns NavData
     */
    public getNavData(index: number): LazyLoadData
    {
        switch (index) {
            case 0:
                return {
                    module: TreeViewExtModule,
                    component: 'TreeViewComponent',
                    urlProvider: (this._helperService.getAppVar('route') + 'bck/booking/booking-service-price/data-for-invoice-supplier/' + this._parentFormService.getObject()['supplierObj'] + (bookingContext ? ('/' + bookingId) : ''))
                };
            case 1:
                return {
                    module: SupplierDocumentInvoiceDetailAddStep2ExtModule,
                    component: 'Step2Component'
                };
        }

        return null;
    }
}