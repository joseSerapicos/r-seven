import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
// This module doesn't use "ReactiveFormsModule", but it needs to import this class
// to provide "formBuilder" when inject dependencies in child modules (like form)
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {SearchModule} from '../../../ts/search/search.module';
import {ExpanderModule} from '../../../ts/expander/expander.module';
import {SearchPaginationModule} from '../../../ts/search/search-pagination.module';
import {DataBoxComponent} from './data-box.component';


@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        SearchModule,
        SearchPaginationModule,
        ExpanderModule
    ],
    declarations: [
        DataBoxComponent
    ],
    exports: [DataBoxComponent]
})
export class DataBoxExtensionModule {}