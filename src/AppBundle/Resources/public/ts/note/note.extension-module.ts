import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
// This module doesn't use "ReactiveFormsModule", but it needs to import this class
// to provide "formBuilder" when inject dependencies in child modules (like form)
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {SearchModule} from '../search/search.module';
import {ExpanderModule} from '../expander/expander.module';
import {SearchPaginationModule} from '../search/search-pagination.module';
import {NoteComponent} from './note.component';


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
        NoteComponent
    ],
    exports: [NoteComponent]
})
export class NoteExtensionModule {}