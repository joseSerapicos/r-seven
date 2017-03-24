import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {EntityAddressPopupComponent} from './entity-address-popup.component';


@NgModule({
    imports: [CommonModule, FormsModule, ReactiveFormsModule],
    declarations: [
        EntityAddressPopupComponent
    ],
    exports: [EntityAddressPopupComponent]
})
export class EntityAddressPopupModule {}