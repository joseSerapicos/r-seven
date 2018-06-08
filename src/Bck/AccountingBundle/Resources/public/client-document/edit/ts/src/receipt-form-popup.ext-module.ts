import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {FieldTypesExtensionModule} from '../../../../../../../../AppBundle/Resources/public/form/ts/field-types/field-types.extension-module';
import {ReceiptFormPopupComponent} from './receipt-form-popup.component';


@NgModule({
    imports: [CommonModule, FormsModule, ReactiveFormsModule, NgbModule, FieldTypesExtensionModule],
    declarations: [
        ReceiptFormPopupComponent
    ],
    exports: [ReceiptFormPopupComponent]
})
export class ReceiptFormPopupExtModule {}