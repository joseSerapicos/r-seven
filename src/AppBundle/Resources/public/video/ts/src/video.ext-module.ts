import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {SearchModule} from '../../../ts/search/search.module';
import {SearchPaginationModule} from '../../../ts/search/search-pagination.module';
import {ExpanderModule} from '../../../ts/expander/expander.module';
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
export class VideoExtModule {}