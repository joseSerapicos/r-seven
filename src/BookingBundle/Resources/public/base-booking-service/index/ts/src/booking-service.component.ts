import {Component, Inject, Injector, ViewContainerRef, Renderer} from '@angular/core';
import {DataService} from '../../../../../../../AppBundle/Resources/public/ts/data-service/data.service';
import {ActionsService} from '../../../../../../../AppBundle/Resources/public/ts/actions/actions.service';
import {DataBoxExtensionComponent, DataBoxProvider, Popups, Popup} from '../../../../../../../AppBundle/Resources/public/data-box/ts/src/data-box.extension-component';
import {ModalService} from '../../../../../../../AppBundle/Resources/public/modal/ts/modal.service';
import {TasksLoaderManagerService} from '../../../../../../../AppBundle/Resources/public/tasks-loader-manager/ts/tasks-loader-manager.service';


// Component
@Component({
    selector: '.js_bookingService',
    templateUrl: '../templates/booking-service.component.html'
})
export class BookingServiceComponent extends DataBoxExtensionComponent
{
    constructor(
        viewContainerRef: ViewContainerRef,
        renderer: Renderer,
        @Inject('Provider') dataBoxProvider: DataBoxProvider,
        @Inject('DataService') dataService: any,
        tasksLoaderManagerService: TasksLoaderManagerService,
        actionsService: ActionsService,
        modalService: ModalService,
        @Inject('Popups') popups: Popups | Popup,
        injector: Injector,
        @Inject('ParentDataService') protected _parentDataService: any
    ) {
        // Call parent
        super();
        super.initDataBoxExtensionComponent(
            viewContainerRef,
            renderer,
            dataBoxProvider,
            dataService,
            tasksLoaderManagerService,
            actionsService,
            modalService,
            popups,
            injector
        );
    }

    /**
     * Overrides parent
     * @param $event
     * @param data
     */
    public deleteAction($event: any, data: any): void
    {
        if ($event) { $event.preventDefault(); }

        let that = this;

        // Dialog message
        this._modalService.dialog('Are you sure to remove?').then(
            hasConfirm => {
                if (hasConfirm) {
                    that._dataService.delete(data).then(
                        data => {
                            that._parentDataService.refreshObject();
                            return;
                        },
                        errors => { return; }
                    );
                } else {
                    return;
                }
            },
            errors => {
                console.log(errors);
            }
        );
    }
}