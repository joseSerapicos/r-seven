import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {SearchModule} from '../search/search.module';
import {SearchPaginationModule} from '../search/search-pagination.module';
import {ExpanderModule} from '../expander/expander.module';
import {FileComponent} from './file.component';


@NgModule({
    imports: [
        CommonModule,
        SearchModule,
        SearchPaginationModule,
        ExpanderModule
    ],
    declarations: [FileComponent],
    exports: [FileComponent]
})
export class FileModule {}