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
        @Inject('HelperService') helperService: any,
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
            helperService,
            actionsService,
            modalService,
            popups,
            injector
        );
    }

    /**
     * Overrides parent method
     * @param object
     * @returns {DataBoxExtensionComponent}
     */
    protected postCancelObject(object)
    {
        return this.postDeleteObject(object);
    }

    /**
     * Overrides parent method
     * @param object
     * @return any
     */
    protected postDeleteObject(object)
    {
        // Refresh parent values
        this._parentDataService.refreshObject();

        // If is a grouped service, so refresh all services to update the grouper service
        if (object['grouperBookingServiceObj']) {
            this._dataService.refresh();
        }
        return this;
    }
}