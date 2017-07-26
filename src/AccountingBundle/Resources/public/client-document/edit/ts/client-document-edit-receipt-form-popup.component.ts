import {Component, ElementRef, Inject, Optional, Injector, ReflectiveInjector, Renderer, ViewChild, ViewContainerRef} from '@angular/core';
import {FormBuilder} from '@angular/forms';
import {Helper} from '../../../../../../AppBundle/Resources/public/ts/helper';
import {FormPopupExtensionComponent, FormProvider} from '../../../../../../AppBundle/Resources/public/ts/form/form-popup.extension-component';
import {DataService} from '../../../../../../AppBundle/Resources/public/ts/data-service/data.service';
import {ActionsService} from '../../../../../../AppBundle/Resources/public/ts/actions/actions.service';
import {FormService} from '../../../../../../AppBundle/Resources/public/ts/form/form.service';
import {DynamicComponentLoaderService} from '../../../../../../AppBundle/Resources/public/ts/dynamic-component-loader.service';
import {PostService} from '../../../../../../AppBundle/Resources/public/ts/post.service';
import {BaseClientReceiptDocumentFormPopupExtComponent} from '../../ts/base-client-receipt-document-form-popup.ext-component';


@Component({
    selector: '.js_clientDocumentEditFormPopup',
    templateUrl: Helper.getRuntimeVar('templateUrl')
})
export class ClientDocumentEditReceiptFormPopupComponent extends BaseClientReceiptDocumentFormPopupExtComponent
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
        super.initBaseClientReceiptDocumentFormPopupExtComponent(
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