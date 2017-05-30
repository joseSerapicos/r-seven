import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {FieldTypesExtensionModule} from '../../../../../../AppBundle/Resources/public/ts/form/field-types/field-types.extension-module';
import {StoreLinkPopupComponent} from './store-link-popup.component';


@NgModule({
    imports: [CommonModule, FormsModule, FieldTypesExtensionModule, ReactiveFormsModule],
    declarations: [
        StoreLinkPopupComponent
    ],
    exports: [StoreLinkPopupComponent]
})
export class StoreLinkPopupModule {}