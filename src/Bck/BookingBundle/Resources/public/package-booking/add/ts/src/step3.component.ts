import {Component, ElementRef, Inject, Optional, Injector, Renderer} from '@angular/core';
import {FormBuilder} from '@angular/forms';
import {DataService} from '../../../../../../../../AppBundle/Resources/public/ts/data-service/data.service';
import {FormService} from '../../../../../../../../AppBundle/Resources/public/form/ts/form.service';
import {ModalService} from '../../../../../../../../AppBundle/Resources/public/modal/ts/modal.service';
import {DynamicComponentLoaderService} from '../../../../../../../../AppBundle/Resources/public/ts/dynamic-component-loader.service';
import {PostService} from '../../../../../../../../AppBundle/Resources/public/ts/post.service';
import {Step2Component as BaseBookingServiceAddStep2Component, FormProvider} from '../../../../base-booking-service/add/ts/src/step2.component';


/* Import dependencies */
import {Step2PaxExtModule} from '../../../../package-booking-service/add/ts/src/step2-pax.ext-module';
import {BookingPaxEditExtModule} from '../../../../package-booking/detail/ts/src/booking-pax-edit.ext-module';
/* /Import dependencies */


@Component({
    selector: '#js_addStep2',
    templateUrl: '../templates/step3.component.html'
})
export class Step3Component extends BaseBookingServiceAddStep2Component
{
    constructor(
        elementRef: ElementRef,
        renderer: Renderer,
        @Inject('Provider') provider: FormProvider,
        formService: FormService,
        @Inject('DataService') dataService: any,
        modalService: ModalService,
        dynamicComponentLoaderService: DynamicComponentLoaderService,
        postService: PostService,
        injector: Injector,
        @Inject('HelperService') helperService: any
    ) {
        super(
            elementRef,
            renderer,
            provider,
            formService,
            dataService,
            modalService,
            dynamicComponentLoaderService,
            postService,
            injector,
            helperService
        );
    }

    /**
     * Change action (change the submitted data).
     * This method should be called from view/template to change the submitted data.
     * @param $event
     */
    public changeAction($event: any = null): void
    {
        if ($event) { $event.preventDefault(); }

        let route = this._dataService.getRoute('addStep3ForBookingChange');

        this._formService.save(route).then(
            data => { return; },
            errors => { return; }
        );
    }

    /**
     * Method implementation
     */
    protected getPaxDataBoxExtModule()
    {
        return Step2PaxExtModule;
    }

    /**
     * Method implementation
     */
    protected getPaxEditFormExtModule()
    {
        return BookingPaxEditExtModule;
    }

    /**
     * Method implementation
     */
    protected getPaxDataBoxUrlProvider() {
        return (this._helperService.getAppVar('route')
            + 'bck/booking/package-booking-pax/data-for-add-service/'
            + this._formService.getObject()['bookingObj']
        );
    }
}