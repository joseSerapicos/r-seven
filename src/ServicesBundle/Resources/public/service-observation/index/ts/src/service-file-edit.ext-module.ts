import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {ServiceFilePopupComponent} from './service-file-popup.component';


@NgModule({
    imports: [CommonModule, FormsModule, ReactiveFormsModule],
    declarations: [
        ServiceFilePopupComponent
    ],
    exports: [ServiceFilePopupComponent]
})
export class ServiceFilePopupModule {}