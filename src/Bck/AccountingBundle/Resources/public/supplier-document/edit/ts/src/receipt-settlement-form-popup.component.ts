import {Component, ElementRef, Inject, Optional, Injector, ReflectiveInjector, Renderer, ViewChild, ViewContainerRef} from '@angular/core';
import {FormBuilder} from '@angular/forms';
import {FormProvider} from '../../../../../../../../AppBundle/Resources/public/form/ts/form-popup.extension-component';
import {DataService} from '../../../../../../../../AppBundle/Resources/public/ts/data-service/data.service';
import {FormService} from '../../../../../../../../AppBundle/Resources/public/form/ts/form.service';
import {DynamicComponentLoaderService} from '../../../../../../../../AppBundle/Resources/public/ts/dynamic-component-loader.service';
import {PostService} from '../../../../../../../../AppBundle/Resources/public/ts/post.service';
import {BaseReceiptSettlementDocumentFormPopupExtComponent} from '../../../../supplier-document/ts/base-receipt-settlement-document-form-popup.ext-component';


@Component({
    selector: '.js_documentEditFormPopup',
    templateUrl: '../templates/receipt-settlement-form-popup.component.html'
})
export class ReceiptSettlementFormPopupComponent extends BaseReceiptSettlementDocumentFormPopupExtComponent
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
        super.initBaseReceiptSettlementDocumentFormPopupExtComponent(
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