import {Component, ElementRef, Inject, Optional, Injector, ReflectiveInjector, Renderer, ViewChild, ViewContainerRef} from '@angular/core';
import {FormBuilder} from '@angular/forms';
import {DataService} from '../../../../../../../AppBundle/Resources/public/ts/data-service/data.service';
import {FormService} from '../../../../../../../AppBundle/Resources/public/form/ts/form.service';
import {DynamicComponentLoaderService} from '../../../../../../../AppBundle/Resources/public/ts/dynamic-component-loader.service';
import {PostService} from '../../../../../../../AppBundle/Resources/public/ts/post.service';
import {BookingServiceEditComponent as BaseBookingServiceEditComponent, BaseBookingServiceEditProvider} from '../../../../base-booking-service/edit/ts/src/booking-service-edit.component';


@Component({
    selector: '#js_bookingServiceEdit',
    templateUrl: '../templates/booking-service-edit.component.html'
})
export class BookingServiceEditComponent extends BaseBookingServiceEditComponent
{
    constructor(
        elementRef: ElementRef,
        renderer: Renderer,
        @Inject('Provider') provider: BaseBookingServiceEditProvider,
        formService: FormService,
        @Inject('DataService') dataService: any,
        @Inject('ParentDataService') parentDataService: any,
        @Inject('HelperService') helperService: any,
        dynamicComponentLoaderService: DynamicComponentLoaderService,
        postService: PostService,
        injector: Injector
    ) {
        super(
            elementRef,
            renderer,
            provider,
            formService,
            dataService,
            parentDataService,
            helperService,
            dynamicComponentLoaderService,
            postService,
            injector
        );
    }
}