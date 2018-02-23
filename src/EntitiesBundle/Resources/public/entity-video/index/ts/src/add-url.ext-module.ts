import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {AddUrlComponent} from './add-url.component';


@NgModule({
    imports: [CommonModule, FormsModule, ReactiveFormsModule],
    declarations: [
        AddUrlComponent
    ],
    exports: [AddUrlComponent]
})
export class AddUrlExtModule {}