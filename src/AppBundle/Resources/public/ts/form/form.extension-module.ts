import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {FieldTypesExtensionModule} from './field-types/field-types.extension-module';
import {FormComponent} from './form.component';


@NgModule({
    imports: [CommonModule, FormsModule, ReactiveFormsModule, FieldTypesExtensionModule],
    declarations: [
        FormComponent
    ],
    exports: [FormComponent]
})
export class FormExtensionModule {}