import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {SearchModule} from '../../../ts/search/search.module';
import {SearchPaginationModule} from '../../../ts/search/search-pagination.module';
import {ExpanderModule} from '../../../ts/expander/expander.module';
import {LegendExtModule} from '../../../legend/ts/src/legend.ext-module';
import {ImageSlideComponent} from './image-slide.component';


@NgModule({
    imports: [
        CommonModule,
        SearchModule,
        SearchPaginationModule,
        ExpanderModule,
        LegendExtModule
    ],
    declarations: [ImageSlideComponent],
    exports: [ImageSlideComponent]
})
export class ImageSlideExtModule {}