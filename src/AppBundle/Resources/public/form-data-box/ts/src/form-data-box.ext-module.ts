import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {FieldTypesExtensionModule} from '../../../form/ts/field-types/field-types.extension-module';
import {FormDataBoxComponent} from './form-data-box.component';


@NgModule({
    imports: [CommonModule, FormsModule, ReactiveFormsModule, FieldTypesExtensionModule],
    declarations: [
        FormDataBoxComponent
    ],
    exports: [FormDataBoxComponent]
})
export class FormDataBoxExtModule {}