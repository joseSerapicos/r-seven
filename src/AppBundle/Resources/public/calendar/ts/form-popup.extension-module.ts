import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {FormPopupComponent} from './form-popup.component';


@NgModule({
    imports: [CommonModule, FormsModule, ReactiveFormsModule],
    declarations: [
        FormPopupComponent
    ],
    exports: [FormPopupComponent]
})
export class FormPopupExtensionModule {}