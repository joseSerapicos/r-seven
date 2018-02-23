import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {ServiceObservationPopupComponent} from './service-observation-popup.component';


@NgModule({
    imports: [CommonModule, FormsModule, ReactiveFormsModule],
    declarations: [
        ServiceObservationPopupComponent
    ],
    exports: [ServiceObservationPopupComponent]
})
export class ServiceObservationPopupModule {}