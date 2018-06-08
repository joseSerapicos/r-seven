import {Component, Inject, Injector, ViewContainerRef, Renderer} from '@angular/core';
import {DataService} from '../../../../../../../../AppBundle/Resources/public/ts/data-service/data.service';
import {ActionsService} from '../../../../../../../../AppBundle/Resources/public/ts/actions/actions.service';
import {DataBoxExtensionComponent, DataBoxProvider, Popups, Popup} from '../../../../../../../../AppBundle/Resources/public/data-box/ts/src/data-box.extension-component';
import {NavManagerService} from '../../../../../../../../AppBundle/Resources/public/ts/nav-manager/nav-manager.service';
import {ModalService} from '../../../../../../../../AppBundle/Resources/public/modal/ts/modal.service';
import {TasksLoaderManagerService} from '../../../../../../../../AppBundle/Resources/public/tasks-loader-manager/ts/tasks-loader-manager.service';

/* Import dependencies */

import {Step2FieldDebugExtModule} from '../../../../base-booking-service/add/ts/src/step2-field-debug.ext-module';

/* /Import dependencies */


// Component
@Component({
    selector: '.js_addStep4',
    templateUrl: '../templates/step4.component.html'
})
export class Step4Component extends DataBoxExtensionComponent
{
    // USed by template
    protected _statusMap: any;


    constructor(
        viewContainerRef: ViewContainerRef,
        renderer: Renderer,
        @Inject('Provider') dataBoxProvider: DataBoxProvider,
        @Inject('DataService') dataService: any,
        tasksLoaderManagerService: TasksLoaderManagerService,
        @Inject('HelperService') helperService: any,
        actionsService: ActionsService,
        modalService: ModalService,
        @Inject('Popups') popups: Popups | Popup,
        injector: Injector
    ) {
        // Call parent
        super();
        super.initDataBoxExtensionComponent(
            viewContainerRef,
            renderer,
            dataBoxProvider,
            dataService,
            tasksLoaderManagerService,
            helperService,
            actionsService,
            modalService,
            popups,
            injector
        );

        this._statusMap = this._helperService.getStatusMap();
    }

    /**
     * Get form control
     * @param index (index in array of child services)
     * @param control (booking service attribute)
     * @returns {Array}
     */
    public getFormControl(index: number, control: string)
    {
        let objects = this._dataService.getProviderAttr('objects'),
            object = objects[index] || null;

        if (object && (control in object)) {
            return (object[control] || null);
        }

        return null;
    }

    /**
     * Change data submitting to server
     * @returns {Promise}
     */
    public change(): Promise<any>
    {
        let that = this;

        let route = (this._dataService.getRoute('addStep4ForBooking') + '/' + this._dataService.getObject()['id']);

        // Send objects (changed by user) instead of form, because we can't control the form name when we use "ngModel"
        let data = this._dataService.getProviderAttr('objects');

        return new Promise(function(resolve, reject) {
            return that._dataService.runAction(route, data, true).then(
                data => { return resolve(true); },
                errors => { return reject(false); }
            );
        });
    }

    /**
     * Change data submitting to server
     * @param $event
     */
    public changeAction($event: any = null): void
    {
        if ($event) { $event.preventDefault(); }
        this.change().then(
            data => { return; },
            errors => { return; }
        );
    }

    /**
     * Show field debug action (change the submitted data).
     * @param index (index in array of child services)
     * @param $event
     */
    public debugAction(index: number, $event: any = null): void
    {
        if ($event) { $event.preventDefault(); }

        let popup: Popup = {
            module: Step2FieldDebugExtModule,
            component: 'Step2FieldDebugComponent',
            providers: [
                NavManagerService,
                {provide: 'Provider', useValue: {
                    label: this.getFormControl(index, 'name'),
                    data: {
                        availability: (this.getFormControl(index, 'isAutoAvailability')
                                ? this.getControlDebug(index, 'availabilityDebug')
                                : null
                        ),
                        allot: (this.getFormControl(index, 'isAutoAllot')
                                ? this.getControlDebug(index, 'allotDebug')
                                : null
                        ),
                        price: (this.getFormControl(index, 'isAutoPrice')
                                ? this.getControlDebug(index, 'priceDebug')
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
     * @param index (index in array of child services)
     * @param control
     * @returns {Array}
     */
    public getControlDebug(index: number, control: string)
    {
        let bookingServiceId = this.getFormControl(index, 'bookingServiceObj');
        if (!bookingServiceId) { return []; }

        return this._dataService.getLocalDataAttr(bookingServiceId)[control];
    }
}