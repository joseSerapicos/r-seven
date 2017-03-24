import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {StorePhonePopupComponent} from './store-phone-popup.component';


@NgModule({
    imports: [CommonModule, FormsModule, ReactiveFormsModule],
    declarations: [
        StorePhonePopupComponent
    ],
    exports: [StorePhonePopupComponent]
})
export class StorePhonePopupModule {}