import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {ServiceFileEditComponent} from './service-file-edit.component';


@NgModule({
    imports: [CommonModule, FormsModule, ReactiveFormsModule],
    declarations: [
        ServiceFileEditComponent
    ],
    exports: [ServiceFileEditComponent]
})
export class ServiceFileEditExtModule {}