import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule} from '@angular/forms';
import {SearchModule} from '../../../ts/search/search.module';
import {ExpanderModule} from '../../../ts/expander/expander.module';
import {SearchPaginationModule} from '../../../ts/search/search-pagination.module';
import {TreeViewNodeActionsExtModule} from '../node/tree-view-node-actions.ext-module';
import {FormPopupComponent} from './form-popup.component';


@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        SearchModule,
        SearchPaginationModule,
        ExpanderModule,
        TreeViewNodeActionsExtModule
    ],
    declarations: [
        FormPopupComponent
    ],
    exports: [FormPopupComponent]
})
export class FormPopupExtModule {}