import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {StoreLinkPopupComponent} from './store-link-popup.component';


@NgModule({
    imports: [CommonModule, FormsModule, ReactiveFormsModule],
    declarations: [
        StoreLinkPopupComponent
    ],
    exports: [StoreLinkPopupComponent]
})
export class StoreLinkPopupModule {}