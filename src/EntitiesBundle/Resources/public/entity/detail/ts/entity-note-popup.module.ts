import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {EntityNotePopupComponent} from './entity-note-popup.component';


@NgModule({
    imports: [CommonModule, FormsModule, ReactiveFormsModule],
    declarations: [
        EntityNotePopupComponent
    ],
    exports: [EntityNotePopupComponent]
})
export class EntityNotePopupModule {}