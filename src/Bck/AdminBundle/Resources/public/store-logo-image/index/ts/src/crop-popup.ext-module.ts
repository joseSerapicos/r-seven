import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {CropPopupComponent} from './crop-popup.component';


@NgModule({
    imports: [
        CommonModule
    ],
    declarations: [CropPopupComponent],
    exports: [CropPopupComponent]
})
export class CropPopupExtModule {}