import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {AddFormPopupComponent} from './add-form-popup.component';


@NgModule({
    imports: [CommonModule, FormsModule, ReactiveFormsModule],
    declarations: [
        AddFormPopupComponent
    ],
    exports: [AddFormPopupComponent]
})
export class AddFormPopupExtensionModule {}