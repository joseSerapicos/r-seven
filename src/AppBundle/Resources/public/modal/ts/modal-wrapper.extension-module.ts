import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ModalWrapperComponent} from './modal-wrapper.component';


@NgModule({
    imports: [CommonModule],
    declarations: [ModalWrapperComponent],
    exports: [ModalWrapperComponent]
})
export class ModalWrapperExtensionModule {}