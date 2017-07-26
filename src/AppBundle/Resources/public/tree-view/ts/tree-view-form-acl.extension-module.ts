import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule} from '@angular/forms';
import {SearchModule} from '../../ts/search/search.module';
import {ExpanderModule} from '../../ts/expander/expander.module';
import {TreeViewFormComponent} from './tree-view-form.component';
import {TreeViewNodeComponent} from './node/tree-view-node.component';
import {TreeViewControlFormTypeAclComponent} from './controls/tree-view-control-form-type-acl.component';


@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        SearchModule,
        ExpanderModule
    ],
    declarations: [
        TreeViewFormComponent,
        TreeViewNodeComponent,
        TreeViewControlFormTypeAclComponent
    ],
    exports: [TreeViewFormComponent]
})
export class TreeViewFormAclExtensionModule {}