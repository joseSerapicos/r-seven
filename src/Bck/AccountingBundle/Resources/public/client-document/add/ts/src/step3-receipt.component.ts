import {Component, ElementRef, Inject, Optional, Injector, ReflectiveInjector, Renderer, ViewChild, ViewContainerRef} from '@angular/core';
import {FormBuilder} from '@angular/forms';
import {FormProvider} from '../../../../../../../../AppBundle/Resources/public/form/ts/form-popup.extension-component';
import {DataService} from '../../../../../../../../AppBundle/Resources/public/ts/data-service/data.service';
import {FormService} from '../../../../../../../../AppBundle/Resources/public/form/ts/form.service';
import {NavManagerService} from '../../../../../../../../AppBundle/Resources/public/ts/nav-manager/nav-manager.service';
import {WizardManagerService} from '../../../../../../../../AppBundle/Resources/public/wizard/ts/src/wizard-manager.service';
import {DynamicComponentLoaderService} from '../../../../../../../../AppBundle/Resources/public/ts/dynamic-component-loader.service';
import {PostService} from '../../../../../../../../AppBundle/Resources/public/ts/post.service';
import {BaseReceiptDocumentFormPopupExtComponent, Popups, Popup} from '../../../ts/base-receipt-document-form-popup.ext-component';

/* Import dependencies */
import {FormPopupExtModule as ClientDocumentPaymentEditFormPopupExtModule} from "../../../../client-document-payment/edit/ts/src/form-popup.ext-module";
import {FormPopupExtModule as ClientDocumentPaymentAddFormPopupExtModule} from "../../../../client-document-payment/add/ts/src/form-popup.ext-module";
/* /Import dependencies */


@Component({
    selector: '.js_addDetailFormPopup',
    templateUrl: '../templates/step3-receipt.component.html'
})
export class Step3ReceiptComponent extends BaseReceiptDocumentFormPopupExtComponent
{
    constructor(
        elementRef: ElementRef,
        renderer: Renderer,
        @Inject('Provider') provider: FormProvider,
        formService: FormService,
        @Inject('DataService') dataService: any,
        injector: Injector,
        @Inject('ParentDataService') parentDataService: any,
        @Inject('HelperService') helperService: any,
        dynamicComponentLoaderService: DynamicComponentLoaderService,
        postService: PostService
    ) {
        super();
        super.initBaseReceiptDocumentFormPopupExtComponent(
            elementRef,
            renderer,
            provider,
            formService,
            dataService,
            injector,
            parentDataService,
            helperService,
            dynamicComponentLoaderService,
            postService
        );
    }

    /**
     * Get payment dependency popups provider
     * Using this method, each child component can redefine the payment popups
     * @param data
     * @returns {Popups}
     */
    protected getPaymentDependencyPopupsProvider(data): Popups | Popup {
        // Not returned directly to avoid the IDE error (method override error)

        // Edit form
        let popups: Popup | Popups = {
            module: ClientDocumentPaymentEditFormPopupExtModule,
            component: 'FormPopupComponent',
            providers: [
                FormService,
                {provide: 'FormServiceProvider', useValue: {}},
                {provide: 'Provider', useValue: this._helperService.getFormProvider(data)}
            ]
        };

        // Edit and add
        if ((this._formService.getObject()['documentType_type'] == 'RECEIPT') &&
            (this._formService.getObject()['documentType_operation'] == 'CREDIT')) {
            popups = {
                add: {
                    module: ClientDocumentPaymentAddFormPopupExtModule,
                    component: 'FormPopupComponent',
                    providers: [
                        FormService,
                        {provide: 'FormServiceProvider', useValue: {}},
                        {provide: 'Provider', useValue: this._helperService.getFormProvider(data)},
                        {provide: 'ParentFormService', useValue: this._formService},
                        NavManagerService,
                        WizardManagerService,

                    ]
                },
                edit: popups
            };
        }

        return popups;
    }
}