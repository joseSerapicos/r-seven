import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {EntityLinkEditComponent} from './entity-link-edit.component';
import {FieldTypesExtensionModule} from '../../../../../../../AppBundle/Resources/public/ts/form/field-types/field-types.extension-module';


@NgModule({
    imports: [CommonModule, FormsModule, ReactiveFormsModule, FieldTypesExtensionModule],
    declarations: [
        EntityLinkEditComponent
    ],
    exports: [EntityLinkEditComponent]
})
export class EntityLinkEditExtModule {}