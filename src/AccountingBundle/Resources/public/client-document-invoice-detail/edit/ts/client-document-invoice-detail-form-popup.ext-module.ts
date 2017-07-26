import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {FieldTypesExtensionModule} from '../../../../../../AppBundle/Resources/public/ts/form/field-types/field-types.extension-module';
import {ClientDocumentInvoiceDetailFormPopupComponent} from './client-document-invoice-detail-form-popup.component';


@NgModule({
    imports: [CommonModule, FormsModule, ReactiveFormsModule, NgbModule, FieldTypesExtensionModule],
    declarations: [
        ClientDocumentInvoiceDetailFormPopupComponent
    ],
    exports: [ClientDocumentInvoiceDetailFormPopupComponent]
})
export class ClientDocumentInvoiceDetailFormPopupExtModule {}