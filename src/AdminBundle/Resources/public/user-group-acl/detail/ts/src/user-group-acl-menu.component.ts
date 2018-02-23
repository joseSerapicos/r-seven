import {Component, Inject, Injector, ViewContainerRef, Renderer} from '@angular/core';
import {TreeViewDataService as DataService} from '../../../../../../../AppBundle/Resources/public/ts/data-service/tree-view-data.service';
import {ActionsService} from '../../../../../../../AppBundle/Resources/public/ts/actions/actions.service';
import {Popup, Popups} from '../../../../../../../AppBundle/Resources/public/data-box/ts/src/data-box.component';
import {ModalService} from '../../../../../../../AppBundle/Resources/public/modal/ts/modal.service';
import {TreeViewControlComponent, TreeViewProvider} from '../../../../../../../AppBundle/Resources/public/tree-view/ts/src/tree-view-control.component';


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
        actionsService: ActionsService,
        modalService: ModalService,
        @Inject('Popups') popups: Popups | Popup,
        injector: Injector,
        @Inject('HelperService') helperService: any
    ) {
        // Call parent
        super(
            viewContainerRef,
            renderer,
            provider,
            dataService,
            actionsService,
            modalService,
            popups,
            injector,
            helperService
        );
    }
}