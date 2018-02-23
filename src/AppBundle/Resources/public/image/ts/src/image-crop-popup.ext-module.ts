import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ImageCropPopupComponent} from './image-crop-popup.component';


/**
 * Note: This file is never used. It's only here as example to check injection dependencies
 */
@NgModule({
    imports: [
        CommonModule
    ],
    declarations: [ImageCropPopupComponent],
    exports: [ImageCropPopupComponent]
})
export class ImageCropPopupExtModule {}