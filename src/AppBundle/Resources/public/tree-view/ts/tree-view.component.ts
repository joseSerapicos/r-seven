import {Component, Inject, Injector, ViewContainerRef, Renderer} from '@angular/core';
import {TreeViewDataService as DataService} from '../../ts/data-service/tree-view-data.service';
import {ActionsService} from '../../ts/actions/actions.service';
import {Popups, Popup} from '../../ts/data-box/data-box.component';
import {ModalService} from '../../modal/ts/modal.service';
import {Helper} from '../../ts/helper.ts';
import {TreeViewExtComponent, TreeViewProvider} from './tree-view.ext-component';

// Re-exports
export {TreeViewProvider};


@Component({
    selector: '.js_treeView',
    templateUrl: Helper.getGlobalVar('route') + 'template/default/tree-view'
})
export class TreeViewComponent extends TreeViewExtComponent
{
    constructor(
        viewContainerRef: ViewContainerRef,
        renderer: Renderer,
        @Inject('Provider') provider: TreeViewProvider,
        @Inject('DataService') dataService: any,
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
            actionsService,
            modalService,
            popups,
            injector
        );
    }
}