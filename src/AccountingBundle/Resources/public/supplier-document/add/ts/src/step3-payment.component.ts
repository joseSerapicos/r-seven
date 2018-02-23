import {Component, ElementRef, Inject, Optional, Injector, ReflectiveInjector, Renderer, ViewChild, ViewContainerRef} from '@angular/core';
import {FormBuilder} from '@angular/forms';
import {FormProvider} from '../../../../../../../AppBundle/Resources/public/ts/form/form-popup.extension-component';
import {DataService} from '../../../../../../../AppBundle/Resources/public/ts/data-service/data.service';
import {FormService} from '../../../../../../../AppBundle/Resources/public/ts/form/form.service';
import {DynamicComponentLoaderService} from '../../../../../../../AppBundle/Resources/public/ts/dynamic-component-loader.service';
import {PostService} from '../../../../../../../AppBundle/Resources/public/ts/post.service';
import {BaseReceiptPaymentDocumentFormPopupExtComponent} from '../../../ts/base-receipt-payment-document-form-popup.ext-component';


@Component({
    selector: '.js_addDetailFormPopup',
    templateUrl: '../templates/step3-payment.component.html'
})
export class Step3PaymentComponent extends BaseReceiptPaymentDocumentFormPopupExtComponent
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
        super.initBaseReceiptPaymentDocumentFormPopupExtComponent(
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
}