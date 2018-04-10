import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {AddFileComponent} from './add-file.component';


@NgModule({
    imports: [CommonModule],
    declarations: [
        AddFileComponent
    ],
    exports: [AddFileComponent]
})
export class AddFileExtModule {}