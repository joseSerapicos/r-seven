import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {EntityFilePopupComponent} from './entity-file-popup.component';


@NgModule({
    imports: [CommonModule, FormsModule, ReactiveFormsModule],
    declarations: [
        EntityFilePopupComponent
    ],
    exports: [EntityFilePopupComponent]
})
export class EntityFilePopupModule {}