import {Component, ElementRef, Inject, Injector, Renderer, QueryList, Optional, ViewChildren, ViewContainerRef, ViewChild} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {FormService} from '../../../../../../../AppBundle/Resources/public/form/ts/form.service';
import {Helper} from '../../../../../../../AppBundle/Resources/public/ts/helper';
import {DataService} from "../../../../../../../AppBundle/Resources/public/ts/data-service/data.service";
import {WizardPopupProvider, LazyLoadData} from '../../../../../../../AppBundle/Resources/public/wizard/ts/src/wizard-form-popup.ext-component';
import {WizardManagerService} from '../../../../../../../AppBundle/Resources/public/wizard/ts/src/wizard-manager.service';
import {FormPopupExtComponent as BaseDocumentRectificationAddFormPopupExtComponent} from '../../../../base-document-rectification/add/ts/form-popup.ext-component';


/* Import dependencies */

// Booking Parent, used when the document is aggregated to one booking
// (this code is putted here to avoid to repeat this module in the booking bundle, so we can reuse the same modules)
var bookingContext = ((Helper.getAppVar('conf')['localData']['data']['bookingContext'])
            ? Helper.getAppVar('conf')['localData']['data']['bookingContext'] :
            null
    ),
    bookingId = (bookingContext ? Helper.getAppVar('conf')['object']['id'] : null);

// RECTIFICATION DOCUMENT CHOICES
import {TreeViewExtModule} from '../../../../../../../AppBundle/Resources/public/tree-view/default/ts/src/tree-view.ext-module';
// EDIT FORM
import {Step2FormPopupExtModule} from "./step2-form-popup.ext-module";

/* /Import dependencies */


@Component({
    selector: '.js_addFormPopup',
    templateUrl: '../templates/form-popup.component.html'
})
export class FormPopupComponent extends BaseDocumentRectificationAddFormPopupExtComponent
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
        super.initBaseDocumentRectificationAddFormPopupExtComponent(
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
                    urlProvider: (this._helperService.getAppVar('route') + 'accounting/supplier-document-invoice-rectification/data-for-rectification/' + this._parentFormService.getObject()['id'] + (bookingContext ? ('/' + bookingId) : ''))
                };
            case 1:
                return {
                    module: Step2FormPopupExtModule,
                    component: 'Step2FormPopupComponent'
                };
        }

        return null;
    }
}