import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {FieldTypesExtensionModule} from '../../../../../AppBundle/Resources/public/ts/form/field-types/field-types.extension-module';
import {BookingCountryFormPopupComponent} from './booking-country-form-popup.component';


@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        FieldTypesExtensionModule
    ],
    declarations: [
        BookingCountryFormPopupComponent
    ],
    exports: [BookingCountryFormPopupComponent]
})
export class BookingCountryFormPopupExtensionModule {}