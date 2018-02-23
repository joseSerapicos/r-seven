import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {FieldTypesExtensionModule} from '../../../../../../../AppBundle/Resources/public/ts/form/field-types/field-types.extension-module';
import {BaseBookingServiceEditProvider} from './booking-service-edit.component';


/**
 * Note: This file is never used. It's only here as example to check injection dependencies
 */
@NgModule({
    imports: [CommonModule, FormsModule, ReactiveFormsModule, NgbModule, FieldTypesExtensionModule],
    declarations: [
        BaseBookingServiceEditProvider
    ],
    exports: [BaseBookingServiceEditProvider]
})
export class BookingServiceEditExtModule {}