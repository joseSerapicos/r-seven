import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {SearchModule} from '../search/search.module';
import {SearchPaginationModule} from '../search/search-pagination.module';
import {ExpanderModule} from '../expander/expander.module';
import {VideoComponent} from './video.component';


@NgModule({
    imports: [
        CommonModule,
        SearchModule,
        SearchPaginationModule,
        ExpanderModule
    ],
    declarations: [VideoComponent],
    exports: [VideoComponent]
})
export class VideoModule {}