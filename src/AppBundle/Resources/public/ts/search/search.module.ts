import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule} from '@angular/forms';
import {ExpanderModule} from '../expander/expander.module';
import {SearchFieldsComponent} from './search-fields.component';
import {SearchOrderByComponent} from './search-order-by.component';
import {SearchCriteriaComponent} from './search-criteria.component';
import {SearchComponent} from './search.component';


@NgModule({
    imports: [CommonModule, FormsModule, ExpanderModule],
    declarations: [
        SearchComponent,
        SearchCriteriaComponent,
        SearchOrderByComponent,
        SearchFieldsComponent
    ],
    exports: [SearchComponent]
})
export class SearchModule {}