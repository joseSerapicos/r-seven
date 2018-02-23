import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {FieldTypesExtensionModule} from '../../../ts/form/field-types/field-types.extension-module';
import {CostWithVatPopupComponent} from './cost-with-vat-popup.component';


/**
 * Note: This file is never used. It's only here as example to check injection dependencies
 */
@NgModule({
    imports: [CommonModule, FormsModule, ReactiveFormsModule,
        FieldTypesExtensionModule,
        NgbModule
    ],
    declarations: [
        CostWithVatPopupComponent
    ],
    exports: [CostWithVatPopupComponent]
})
export class CostWithVatPopupExtModule {}