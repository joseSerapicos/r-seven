import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {EmailTemplateEditComponent} from './email-template-edit.component';


@NgModule({
    imports: [CommonModule, FormsModule, ReactiveFormsModule],
    declarations: [
        EmailTemplateEditComponent
    ],
    exports: [EmailTemplateEditComponent]
})
export class EmailTemplateEditExtModule {}