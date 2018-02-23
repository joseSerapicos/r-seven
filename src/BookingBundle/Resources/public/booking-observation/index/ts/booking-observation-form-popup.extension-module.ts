import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {BookingObservationFormPopupComponent} from './booking-observation-form-popup.component';


@NgModule({
    imports: [CommonModule, FormsModule, ReactiveFormsModule],
    declarations: [
        BookingObservationFormPopupComponent
    ],
    exports: [BookingObservationFormPopupComponent]
})
export class BookingObservationFormPopupExtensionModule {}