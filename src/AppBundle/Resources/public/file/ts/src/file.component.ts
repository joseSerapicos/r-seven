import {Component, Inject, Injector, ViewContainerRef, Renderer} from '@angular/core';
import {DataService} from '../../../ts/data-service/data.service';
import {ActionsService} from '../../../ts/actions/actions.service';
import {DataBoxComponent, DataBoxProvider, Popups, Popup} from '../../../data-box/ts/src/data-box.component';
import {ModalService} from '../../../modal/ts/modal.service';
import {TasksLoaderManagerService} from '../../../../../../AppBundle/Resources/public/tasks-loader-manager/ts/tasks-loader-manager.service';


@Component({
    selector: '.js_file',
    templateUrl: '../templates/file.component.html'
})
export class FileComponent extends DataBoxComponent
{
    constructor(
        viewContainerRef: ViewContainerRef,
        renderer: Renderer,
        @Inject('Provider') provider: DataBoxProvider,
        @Inject('DataService') dataService: any,
        tasksLoaderManagerService: TasksLoaderManagerService,
        actionsService: ActionsService,
        modalService: ModalService,
        @Inject('Popups') popups: Popups | Popup,
        injector: Injector,
        @Inject('HelperService') protected _helperService: any
    ) {
        // Call parent
        super(
            viewContainerRef,
            renderer,
            provider,
            dataService,
            tasksLoaderManagerService,
            actionsService,
            modalService,
            popups,
            injector
        );
    }

    /**
     * Get web path
     * @param path
     * @returns {string}
     */
    protected getWebPath(path): string
    {
        return this._helperService.getUploadWebPath(path);
    }
}