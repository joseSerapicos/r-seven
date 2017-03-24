import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule} from '@angular/forms';
import {SearchModule} from '../search/search.module';
import {ExpanderModule} from '../expander/expander.module';
import {TreeViewFormComponent} from './tree-view-form.component';
import {TreeViewNodeComponent} from './tree-view-node.component';
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