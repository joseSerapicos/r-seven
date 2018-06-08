import {Component, Inject, Injector, ReflectiveInjector, ViewContainerRef, Renderer} from '@angular/core';
import {DataBoxExtensionComponent, DataBoxProvider, Popup, Popups, PopupTypes} from '../../../data-box/ts/src/data-box.extension-component';
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

    /**
     * Edit action
     * @param $event
     * @param data
     */
    public editAction($event: any, data: any): void
    {
        if ($event) { $event.preventDefault(); }

        // Check ACL
        if (!this._actionsService.getActionAttr('edit', 'isEnabled')) {
            return;
        }

        let that = this;
        this._dataService.selectObject(data).then(
            data => { return; },
            errors => { console.log(errors); return; }
        );
    }

    /**
     * Add action
     * @param $event
     */
    public addAction($event:any = null): void
    {
        return;
    }

    /**
     * Copy action. Create a new object from another object
     * @param $event
     * @param data
     */
    public copyAction($event:any = null, data: any): void
    {
        if ($event) { $event.preventDefault(); }

        let that = this;
        this._dataService.newObject(data).then(
            data => { return; },
            errors => { console.log(errors); return; }
        );
    }

    /**
     * Email action.
     * @param $event
     * @param data
     */
    public emailAction($event: any, data: any): void
    {
        return;
    }

    /**
     * Open popup
     * @param popupType
     * @returns {DataBoxExtensionComponent}
     */
    protected openPopup(popupType = PopupTypes.edit): DataBoxExtensionComponent
    {
        return this;
    }
}