import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {BookingFileFormPopupComponent} from './booking-file-form-popup.component';


@NgModule({
    imports: [CommonModule, FormsModule, ReactiveFormsModule],
    declarations: [
        BookingFileFormPopupComponent
    ],
    exports: [BookingFileFormPopupComponent]
})
export class BookingFileFormPopupExtensionModule {}