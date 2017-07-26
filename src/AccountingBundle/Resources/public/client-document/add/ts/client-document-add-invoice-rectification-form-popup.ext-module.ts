import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {FieldTypesExtensionModule} from '../../../../../../AppBundle/Resources/public/ts/form/field-types/field-types.extension-module';
import {ClientDocumentAddInvoiceRectificationFormPopupComponent} from './client-document-add-invoice-rectification-form-popup.component';


@NgModule({
    imports: [CommonModule, FormsModule, ReactiveFormsModule, NgbModule, FieldTypesExtensionModule],
    declarations: [
        ClientDocumentAddInvoiceRectificationFormPopupComponent
    ],
    exports: [ClientDocumentAddInvoiceRectificationFormPopupComponent]
})
export class ClientDocumentAddInvoiceRectificationFormPopupExtModule {}