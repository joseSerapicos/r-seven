import {Component, Inject, Injector, ReflectiveInjector, ViewContainerRef, Renderer} from '@angular/core';
import {DataBoxExtensionComponent, DataBoxProvider, Popup, Popups, PopupTypes} from './data-box.extension-component';
import {ModalService} from '../../../modal/ts/modal.service';
import {DataService, OrderTypes} from '../../../ts/data-service/data.service';
import {ActionsService} from "../../../ts/actions/actions.service";
import {TasksLoaderManagerService} from '../../../tasks-loader-manager/ts/tasks-loader-manager.service';

// Reexports
export {DataBoxProvider, Popup, Popups, PopupTypes};


// Component
@Component({
    selector: '.js_dataBox',
    templateUrl: '../templates/data-box.component.html'
})
export class DataBoxComponent extends DataBoxExtensionComponent
{
    constructor(
        viewContainerRef: ViewContainerRef,
        renderer: Renderer,
        @Inject('Provider') provider: DataBoxProvider,
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
            provider,
            dataService,
            tasksLoaderManagerService,
            helperService,
            actionsService,
            modalService,
            popups,
            injector
        );
    }
}