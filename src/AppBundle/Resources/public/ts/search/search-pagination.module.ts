import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {SearchPaginationComponent} from './search-pagination.component';


@NgModule({
    imports: [CommonModule],
    declarations: [
        SearchPaginationComponent
    ],
    exports: [SearchPaginationComponent]
})
export class SearchPaginationModule {}