import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {ServiceImagePopupComponent} from './service-image-popup.component';


@NgModule({
    imports: [CommonModule, FormsModule, ReactiveFormsModule],
    declarations: [
        ServiceImagePopupComponent
    ],
    exports: [ServiceImagePopupComponent]
})
export class ServiceImagePopupModule {}