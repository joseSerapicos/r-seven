import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {FieldTypesExtensionModule} from '../../../../../../../AppBundle/Resources/public/ts/form/field-types/field-types.extension-module';
import {AddFormPasswordComponent} from './add-form-password.component';


@NgModule({
    imports: [CommonModule, FormsModule, ReactiveFormsModule, FieldTypesExtensionModule],
    declarations: [
        AddFormPasswordComponent
    ],
    exports: [AddFormPasswordComponent]
})
export class AddFormPasswordModule {}