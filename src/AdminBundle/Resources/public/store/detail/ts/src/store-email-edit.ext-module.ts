import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {StoreEmailEditComponent} from './store-email-edit.component';


@NgModule({
    imports: [CommonModule, FormsModule, ReactiveFormsModule],
    declarations: [
        StoreEmailEditComponent
    ],
    exports: [StoreEmailEditComponent]
})
export class StoreEmailEditExtModule {}