import {Component, ElementRef, Inject, Injector, Renderer, QueryList, Optional, ViewChildren, ViewContainerRef, ViewChild} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {FormService} from '../../../../../../../../AppBundle/Resources/public/form/ts/form.service';
import {DataService} from "../../../../../../../../AppBundle/Resources/public/ts/data-service/data.service";
import {WizardManagerService} from '../../../../../../../../AppBundle/Resources/public/wizard/ts/src/wizard-manager.service';
import {Step1Component as BaseBookingServiceAddStep1Component, BaseBookingServiceAddProvider} from '../../../../base-booking-service/add/ts/src/step1.component';
import {DynamicComponentLoaderService} from '../../../../../../../../AppBundle/Resources/public/ts/dynamic-component-loader.service';
import {PostService} from '../../../../../../../../AppBundle/Resources/public/ts/post.service';


@Component({
    selector: '.js_bookingServiceAddFormPopup',
    templateUrl: '../templates/step1.component.html'
})
export class Step1Component extends BaseBookingServiceAddStep1Component
{
    constructor(
        elementRef: ElementRef,
        renderer: Renderer,
        @Inject('Provider') provider: BaseBookingServiceAddProvider,
        wizardManagerService: WizardManagerService,
        formService: FormService,
        dynamicComponentLoaderService: DynamicComponentLoaderService,
        postService: PostService,
        injector: Injector,
        @Inject('HelperService') helperService: any,
        @Inject('DataService') dataService: any,
        @Inject('ParentDataService') parentDataService: any
    ) {
        // Call parent
        super(
            elementRef,
            renderer,
            provider,
            wizardManagerService,
            formService,
            dynamicComponentLoaderService,
            postService,
            injector,
            helperService,
            dataService,
            parentDataService
        );
    }
}