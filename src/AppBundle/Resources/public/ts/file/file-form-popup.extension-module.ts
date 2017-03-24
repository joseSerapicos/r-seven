import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {FileFormPopupComponent} from './file-form-popup.component';


@NgModule({
    imports: [CommonModule, FormsModule, ReactiveFormsModule],
    declarations: [
        FileFormPopupComponent
    ],
    exports: [FileFormPopupComponent]
})
export class FileFormPopupModule {}