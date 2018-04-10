import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {EntityEmailEditComponent} from './entity-email-edit.component';


@NgModule({
    imports: [CommonModule, FormsModule, ReactiveFormsModule],
    declarations: [
        EntityEmailEditComponent
    ],
    exports: [EntityEmailEditComponent]
})
export class EntityEmailEditExtModule {}