import {Component, Inject, Injector, ViewContainerRef, Renderer} from '@angular/core';
import {TreeViewDataService as DataService} from '../../../../../../../AppBundle/Resources/public/ts/data-service/tree-view-data.service';
import {ActionsService} from '../../../../../../../AppBundle/Resources/public/ts/actions/actions.service';
import {TasksLoaderManagerService} from '../../../../../../../AppBundle/Resources/public/tasks-loader-manager/ts/tasks-loader-manager.service';
import {Popup, Popups} from '../../../../../../../AppBundle/Resources/public/data-box/ts/src/data-box.component';
import {ModalService} from '../../../../../../../AppBundle/Resources/public/modal/ts/modal.service';
import {TreeViewControlComponent, TreeViewProvider} from '../../../../../../../AppBundle/Resources/public/tree-view/default/ts/src/tree-view-control.component';


@Component({
    selector: '.js_userGroupAclMenu',
    templateUrl: '../templates/user-group-acl-menu.component.html'
})
export class UserGroupAclMenuComponent extends TreeViewControlComponent
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
        super(
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