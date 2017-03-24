import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {EntityEmailPopupComponent} from './entity-email-popup.component';


@NgModule({
    imports: [CommonModule, FormsModule, ReactiveFormsModule],
    declarations: [
        EntityEmailPopupComponent
    ],
    exports: [EntityEmailPopupComponent]
})
export class EntityEmailPopupModule {}