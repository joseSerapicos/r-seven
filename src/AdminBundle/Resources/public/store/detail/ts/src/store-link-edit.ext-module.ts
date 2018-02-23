import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {FieldTypesExtensionModule} from '../../../../../../../AppBundle/Resources/public/ts/form/field-types/field-types.extension-module';
import {StoreLinkEditComponent} from './store-link-edit.component';


@NgModule({
    imports: [CommonModule, FormsModule, FieldTypesExtensionModule, ReactiveFormsModule],
    declarations: [
        StoreLinkEditComponent
    ],
    exports: [StoreLinkEditComponent]
})
export class StoreLinkEditExtModule {}