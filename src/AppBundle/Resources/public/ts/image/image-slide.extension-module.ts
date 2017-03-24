import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {SearchModule} from '../search/search.module';
import {SearchPaginationModule} from '../search/search-pagination.module';
import {ExpanderModule} from '../expander/expander.module';
import {ImageSlideComponent} from './image-slide.component';


@NgModule({
    imports: [
        CommonModule,
        SearchModule,
        SearchPaginationModule,
        ExpanderModule
    ],
    declarations: [ImageSlideComponent],
    exports: [ImageSlideComponent]
})
export class ImageSlideExtensionModule {}