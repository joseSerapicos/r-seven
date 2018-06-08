import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ImageCropPopupComponent} from './image-crop-popup.component';


@NgModule({
    imports: [
        CommonModule
    ],
    declarations: [ImageCropPopupComponent],
    exports: [ImageCropPopupComponent]
})
export class ImageCropPopupExtModule {}