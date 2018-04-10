import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {EntityPhoneEditComponent} from './entity-phone-edit.component';


@NgModule({
    imports: [CommonModule, FormsModule, ReactiveFormsModule],
    declarations: [
        EntityPhoneEditComponent
    ],
    exports: [EntityPhoneEditComponent]
})
export class EntityPhoneEditExtModule {}