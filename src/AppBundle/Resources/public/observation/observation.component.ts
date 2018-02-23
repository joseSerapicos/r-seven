import {Component, Inject, Injector, ViewContainerRef, Renderer} from '@angular/core';
import {DataService} from '../data-service/data.service';
import {ActionsService} from '../actions/actions.service';
import {DataBoxComponent, DataBoxProvider, Popups, Popup} from '../../data-box/ts/src/data-box.component';
import {ModalService} from '../../modal/ts/modal.service';
import {Helper} from '../helper';
import {TasksLoaderManagerService} from '../../../../../AppBundle/Resources/public/tasks-loader-manager/ts/tasks-loader-manager.service';


// Component
var baseRoute = Helper.getAppVar('route');
@Component({
    selector: '.js_observation',
    templateUrl: baseRoute + 'template/default/observation'
})
export class ObservationComponent extends DataBoxComponent
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
        super(
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