import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {VideoFormFileComponent} from './video-form-file.component';


/**
 * Note: This file is never used. It's only here as example to check injection dependencies
 */
@NgModule({
    imports: [CommonModule],
    declarations: [
        VideoFormFileComponent
    ],
    exports: [VideoFormFileComponent]
})
export class VideoFormFileExtModule {}