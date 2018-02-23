import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {ServiceObservationEditComponent} from './service-observation-edit.component';


@NgModule({
    imports: [CommonModule, FormsModule, ReactiveFormsModule],
    declarations: [
        ServiceObservationEditComponent
    ],
    exports: [ServiceObservationEditComponent]
})
export class ServiceObservationEditExtModule {}