import {Component, Inject, Injector, ViewContainerRef, Renderer} from '@angular/core';
import {TreeViewDataService as DataService} from '../../../ts/data-service/tree-view-data.service';
import {ActionsService} from '../../../ts/actions/actions.service';
import {Popups, Popup} from '../../../data-box/ts/src/data-box.component';
import {ModalService} from '../../../modal/ts/modal.service';
import {TreeViewExtComponent, TreeViewProvider} from './tree-view.ext-component';
import {TasksLoaderManagerService} from '../../../tasks-loader-manager/ts/tasks-loader-manager.service';

// Re-exports
export {TreeViewProvider};


@Component({
    selector: '.js_treeView',
    templateUrl: '../templates/tree-view.component.html'
})
export class TreeViewComponent extends TreeViewExtComponent
{
    constructor(
        viewContainerRef: ViewContainerRef,
        renderer: Renderer,
        @Inject('Provider') provider: TreeViewProvider,
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
        super.initTreeViewExtComponent(
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