import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {StoreEmailPopupComponent} from './store-email-popup.component';


@NgModule({
    imports: [CommonModule, FormsModule, ReactiveFormsModule],
    declarations: [
        StoreEmailPopupComponent
    ],
    exports: [StoreEmailPopupComponent]
})
export class StoreEmailPopupModule {}