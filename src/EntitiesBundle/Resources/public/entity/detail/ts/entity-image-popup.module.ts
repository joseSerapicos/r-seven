import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {EntityImagePopupComponent} from './entity-image-popup.component';


@NgModule({
    imports: [CommonModule, FormsModule, ReactiveFormsModule],
    declarations: [
        EntityImagePopupComponent
    ],
    exports: [EntityImagePopupComponent]
})
export class EntityImagePopupModule {}