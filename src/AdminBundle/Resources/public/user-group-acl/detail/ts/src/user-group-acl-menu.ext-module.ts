import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule} from '@angular/forms';
import {SearchModule} from '../../../../../../../AppBundle/Resources/public/ts/search/search.module';
import {ExpanderModule} from '../../../../../../../AppBundle/Resources/public/ts/expander/expander.module';
import {TreeViewNodeComponent} from '../../../../../../../AppBundle/Resources/public/tree-view/ts/src/nodes/tree-view-node.component';
import {TreeViewControlFormTypeAclComponent} from '../../../../../../../AppBundle/Resources/public/tree-view/ts/src/controls/tree-view-control-form-type-acl.component';
import {UserGroupAclMenuComponent} from './user-group-acl-menu.component';


@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        SearchModule,
        ExpanderModule
    ],
    declarations: [
        UserGroupAclMenuComponent,
        TreeViewNodeComponent,
        TreeViewControlFormTypeAclComponent
    ],
    exports: [UserGroupAclMenuComponent]
})
export class UserGroupAclMenuExtModule {}