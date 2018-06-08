import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {ServiceImageEditComponent} from './service-image-edit.component';


@NgModule({
    imports: [CommonModule, FormsModule, ReactiveFormsModule],
    declarations: [
        ServiceImageEditComponent
    ],
    exports: [ServiceImageEditComponent]
})
export class ServiceImageEditExtModule {}