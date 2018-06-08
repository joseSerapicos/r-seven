import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {FieldTypesExtensionModule} from '../../../../../../../../AppBundle/Resources/public/form/ts/field-types/field-types.extension-module';
import {AddStep1Component} from './add-step1.component';


@NgModule({
    imports: [CommonModule, FormsModule, ReactiveFormsModule, FieldTypesExtensionModule],
    declarations: [
        AddStep1Component
    ],
    exports: [AddStep1Component]
})
export class AddStep1ExtModule {}