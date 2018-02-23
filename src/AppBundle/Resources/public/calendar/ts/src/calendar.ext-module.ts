import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
// This module doesn't use "ReactiveFormsModule", but it needs to import this class
// to provide "formBuilder" when inject dependencies in child modules (like form)
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {ExpanderModule} from '../../../ts/expander/expander.module';
import {CalendarComponent} from './calendar.component';


@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        ExpanderModule
    ],
    declarations: [
        CalendarComponent
    ],
    exports: [CalendarComponent]
})
export class CalendarExtModule {}