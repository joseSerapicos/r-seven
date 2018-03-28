import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {FieldTypesExtensionModule} from './field-types/field-types.extension-module';
import {FormPopupComponent} from './form-popup.component';


@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        NgbModule,
        FieldTypesExtensionModule
    ],
    declarations: [
        FormPopupComponent
    ],
    exports: [FormPopupComponent]
})
export class FormPopupExtensionModule {}