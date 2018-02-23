import {Component, ElementRef, Inject, Optional, Injector, Renderer} from '@angular/core';
import {FormBuilder} from '@angular/forms';
import {FormExtensionComponent, FormProvider} from '../../../../../../../AppBundle/Resources/public/ts/form/form.extension-component';
import {NavManagerService} from '../../../../../../../AppBundle/Resources/public/ts/nav-manager/nav-manager.service';
import {ModalService, Popup} from '../../../../../../../AppBundle/Resources/public/modal/ts/modal.service';
import {DataService} from '../../../../../../../AppBundle/Resources/public/ts/data-service/data.service';
import {FormService} from '../../../../../../../AppBundle/Resources/public/ts/form/form.service';

// Re-exports
export {FormProvider}

/* Import dependencies */

import {Step2FieldDebugExtModule} from './step2-field-debug.ext-module';

/* /Import dependencies */


@Component({
    selector: '#js_addStep2',
    template: '' // Define template in child component
})
export class Step2Component extends FormExtensionComponent
{
    // USed by template
    protected _statusMap: any;


    constructor(
        elementRef: ElementRef,
        renderer: Renderer,
        @Inject('Provider') provider: FormProvider,
        formService: FormService,
        @Inject('DataService') dataService: any,
        protected _modalService: ModalService,
        protected _injector: Injector,
        @Inject('HelperService') protected _helperService: any
    ) {
        super();
        super.initFormExtensionComponent(
            elementRef,
            renderer,
            provider,
            formService,
            dataService
        );

        this._statusMap = this._helperService.getStatusMap();
    }

    /**
     * Change action (change the submitted data).
     * This method should be called from view/template to change the submitted data.
     * @param $event
     */
    public changeAction($event: any = null): void
    {
        if ($event) { $event.preventDefault(); }

        let route = this._dataService.getRoute('addStep2');

        this._formService.save(route).then(
            data => { return; },
            errors => { return; }
        );
    }

    /**
     * Show field debug action (change the submitted data).
     * @param $event
     */
    public debugAction($event: any = null): void
    {
        if ($event) { $event.preventDefault(); }

        let popup: Popup = {
            module: Step2FieldDebugExtModule,
            component: 'Step2FieldDebugComponent',
            providers: [
                NavManagerService,
                {provide: 'Provider', useValue: {
                    label: this._formService.getObject()['name'],
                    data: {
                        availability: (this._formService.getObject()['isAutoAvailability']
                                ? this.getControlDebug('availabilityDebug')
                                : null
                        ),
                        allot: (this._formService.getObject()['isAutoAllot']
                                ? this.getControlDebug('allotDebug')
                                : null
                        ),
                        price: (this._formService.getObject()['isAutoPrice']
                                ? this.getControlDebug('priceDebug')
                                : null
                        )
                    }
                }}
            ]
        };

        // Open popup
        this._modalService.popup(popup, this._injector).then(
            data => { return; },
            errors => { console.log(errors); return; }
        );
    }

    /**
     * Get control debug
     * @param control
     * @returns {Array}
     */
    public getControlDebug(control: string)
    {
        let bookingServiceId = (this._formService.getObject()['bookingServiceObj'] || null);
        if (!bookingServiceId) { return []; }

        return this._dataService.getLocalDataAttr(bookingServiceId)[control];
    }
}