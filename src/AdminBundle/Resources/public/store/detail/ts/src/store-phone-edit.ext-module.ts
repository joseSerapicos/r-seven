import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {StorePhoneEditComponent} from './store-phone-edit.component';


@NgModule({
    imports: [CommonModule, FormsModule, ReactiveFormsModule],
    declarations: [
        StorePhoneEditComponent
    ],
    exports: [StorePhoneEditComponent]
})
export class StorePhoneEditExtModule {}