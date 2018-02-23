import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule} from '@angular/forms';
import {SearchModule} from '../../../ts/search/search.module';
import {ExpanderModule} from '../../../ts/expander/expander.module';
import {TreeViewControlComponent} from './tree-view-control.component';
import {TreeViewNodeComponent} from './nodes/tree-view-node.component';
import {TreeViewControlFormTypeAclComponent} from './controls/tree-view-control-form-type-acl.component';


/**
 * Note: This file is never used. It's only here as example to check injection dependencies
 */
@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        SearchModule,
        ExpanderModule
    ],
    declarations: [
        TreeViewControlComponent,
        TreeViewNodeComponent,
        TreeViewControlFormTypeAclComponent
    ],
    exports: [TreeViewControlComponent]
})
export class TreeViewControlAclExtModule {}