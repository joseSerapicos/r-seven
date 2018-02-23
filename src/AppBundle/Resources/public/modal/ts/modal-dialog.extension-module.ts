import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule} from '@angular/forms';
import {ModalDialogComponent} from './modal-dialog.component';


@NgModule({
    imports: [CommonModule],
    declarations: [ModalDialogComponent],
    exports: [ModalDialogComponent]
})
export class ModalDialogExtensionModule {}