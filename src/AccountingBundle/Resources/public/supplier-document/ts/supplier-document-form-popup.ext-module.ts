import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {SupplierDocumentFormPopupComponent} from './supplier-document-form-popup.component';
import {FieldTypesExtensionModule} from '../../../../../AppBundle/Resources/public/ts/form/field-types/field-types.extension-module';


@NgModule({
    imports: [CommonModule, FormsModule, ReactiveFormsModule,
        FieldTypesExtensionModule,
        NgbModule
    ],
    declarations: [
        SupplierDocumentFormPopupComponent
    ],
    exports: [SupplierDocumentFormPopupComponent]
})
export class SupplierDocumentFormPopupExtModule {}