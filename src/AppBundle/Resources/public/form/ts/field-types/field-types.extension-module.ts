import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule} from '@angular/forms';
import {FieldTypeAutoCompleteComponent} from './field-type-auto-complete.component';
import {FieldTypePasswordComponent} from './password.component';
import {FieldTypeMultiCheckboxDirective} from './field-type-multi-checkbox.directive';
import {FieldTypeHtmlSelectDirective} from './field-type-html-select.directive';
import {FieldTypeDatePickerDirective} from './field-type-date-picker.directive';


@NgModule({
    imports: [CommonModule, FormsModule],
    declarations: [
        FieldTypeAutoCompleteComponent,
        FieldTypePasswordComponent,
        FieldTypeMultiCheckboxDirective,
        FieldTypeHtmlSelectDirective,
        FieldTypeDatePickerDirective
    ],
    exports: [
        FieldTypeAutoCompleteComponent,
        FieldTypePasswordComponent,
        FieldTypeMultiCheckboxDirective,
        FieldTypeHtmlSelectDirective,
        FieldTypeDatePickerDirective
    ]
})
export class FieldTypesExtensionModule {}