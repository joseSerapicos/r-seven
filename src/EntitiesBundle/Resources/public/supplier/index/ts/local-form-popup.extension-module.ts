import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {FieldTypesExtensionModule} from '../../../../../../AppBundle/Resources/public/ts/form/field-types/field-types.extension-module';
import {LocalFormPopupComponent} from './local-form-popup.component';


@NgModule({
    imports: [CommonModule, FormsModule, ReactiveFormsModule, FieldTypesExtensionModule],
    declarations: [
        LocalFormPopupComponent
    ],
    exports: [LocalFormPopupComponent]
})
export class LocalFormPopupExtensionModule {}