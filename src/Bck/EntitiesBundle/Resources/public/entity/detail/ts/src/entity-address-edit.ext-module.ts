import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {EntityAddressEditComponent} from './entity-address-edit.component';


@NgModule({
    imports: [CommonModule, FormsModule, ReactiveFormsModule],
    declarations: [
        EntityAddressEditComponent
    ],
    exports: [EntityAddressEditComponent]
})
export class EntityAddressEditExtModule {}