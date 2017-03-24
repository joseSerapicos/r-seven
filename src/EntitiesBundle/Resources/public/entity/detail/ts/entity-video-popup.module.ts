import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule} from '@angular/forms';
import {EntityVideoPopupComponent} from './entity-video-popup.component';


@NgModule({
    imports: [CommonModule, FormsModule],
    declarations: [
        EntityVideoPopupComponent
    ],
    exports: [EntityVideoPopupComponent]
})
export class EntityVideoPopupModule {}