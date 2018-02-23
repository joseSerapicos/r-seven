import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
// This module doesn't use "ReactiveFormsModule", but it needs to import this class
// to provide "formBuilder" when inject dependencies in child modules (like form)
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {SearchModule} from '../../../../../../../AppBundle/Resources/public/ts/search/search.module';
import {ExpanderModule} from '../../../../../../../AppBundle/Resources/public/ts/expander/expander.module';
import {SearchPaginationModule} from '../../../../../../../AppBundle/Resources/public/ts/search/search-pagination.module';
import {PopoverExtModule} from '../../../../../../../AppBundle/Resources/public/popover/ts/popover.ext-module';
import {Step4Component} from './step4.component';


@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        SearchModule,
        SearchPaginationModule,
        ExpanderModule,
        PopoverExtModule
    ],
    declarations: [
        Step4Component
    ],
    exports: [Step4Component]
})
export class Step4ExtModule {}