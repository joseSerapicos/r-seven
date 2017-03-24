import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {FieldTypesExtensionModule} from '../../../../../AppBundle/Resources/public/ts/form/field-types/field-types.extension-module';
import {BookingPlaceFormPopupComponent} from './booking-place-form-popup.component';


@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        FieldTypesExtensionModule
    ],
    declarations: [
        BookingPlaceFormPopupComponent
    ],
    exports: [BookingPlaceFormPopupComponent]
})
export class BookingPlaceFormPopupExtensionModule {}