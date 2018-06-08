import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {FieldTypesExtensionModule} from '../../../../../../../../AppBundle/Resources/public/form/ts/field-types/field-types.extension-module';
import {EditComponent} from './edit.component';


@NgModule({
    imports: [CommonModule, FormsModule, ReactiveFormsModule, FieldTypesExtensionModule],
    declarations: [
        EditComponent
    ],
    exports: [EditComponent]
})
export class EditExtModule {}