import {Component, Inject, Injector, ViewContainerRef, Renderer} from '@angular/core';
import {DataService} from '../../../../../../../AppBundle/Resources/public/ts/data-service/data.service';
import {ActionsService} from '../../../../../../../AppBundle/Resources/public/ts/actions/actions.service';
import {DataBoxExtensionComponent, DataBoxProvider, Popups, Popup} from '../../../../../../../AppBundle/Resources/public/data-box/ts/src/data-box.extension-component';
import {ModalService} from '../../../../../../../AppBundle/Resources/public/modal/ts/modal.service';
import {TasksLoaderManagerService} from '../../../../../../../AppBundle/Resources/public/tasks-loader-manager/ts/tasks-loader-manager.service';


// Component
@Component({
    selector: '.js_bookingServicePrice',
    templateUrl: '../templates/booking-service-price.component.html'
})
export class BookingServicePriceComponent extends DataBoxExtensionComponent
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
            actionsService,
            modalService,
            popups,
            injector
        );
    }
}