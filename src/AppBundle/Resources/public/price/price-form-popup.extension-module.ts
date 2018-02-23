import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {PriceFormPopupComponent} from './price-form-popup.component';
import {FieldTypesExtensionModule} from '../ts/form/field-types/field-types.extension-module';


@NgModule({
    imports: [CommonModule, FormsModule, ReactiveFormsModule,
        FieldTypesExtensionModule,
        NgbModule
    ],
    declarations: [
        PriceFormPopupComponent
    ],
    exports: [PriceFormPopupComponent]
})
export class PriceFormPopupExtensionModule {}