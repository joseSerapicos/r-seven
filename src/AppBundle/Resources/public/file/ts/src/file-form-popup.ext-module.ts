import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {FileFormPopupComponent} from './file-form-popup.component';


/**
 * Note: This file is never used. It's only here as example to check injection dependencies
 */
@NgModule({
    imports: [CommonModule, FormsModule, ReactiveFormsModule],
    declarations: [
        FileFormPopupComponent
    ],
    exports: [FileFormPopupComponent]
})
export class FileFormPopupExtModule {}