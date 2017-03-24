import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {EntityPhonePopupComponent} from './entity-phone-popup.component';


@NgModule({
    imports: [CommonModule, FormsModule, ReactiveFormsModule],
    declarations: [
        EntityPhonePopupComponent
    ],
    exports: [EntityPhonePopupComponent]
})
export class EntityPhonePopupModule {}