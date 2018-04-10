import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {EmailTemplateDefaultEditComponent} from './email-template-default-edit.component';


@NgModule({
    imports: [CommonModule, FormsModule, ReactiveFormsModule],
    declarations: [
        EmailTemplateDefaultEditComponent
    ],
    exports: [EmailTemplateDefaultEditComponent]
})
export class EmailTemplateDefaultEditExtModule {}