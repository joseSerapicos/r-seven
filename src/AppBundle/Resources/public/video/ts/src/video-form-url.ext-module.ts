import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {VideoFormUrlComponent} from './video-form-url.component';


/**
 * Note: This file is never used. It's only here as example to check injection dependencies
 */
@NgModule({
    imports: [CommonModule, FormsModule, ReactiveFormsModule],
    declarations: [
        VideoFormUrlComponent
    ],
    exports: [VideoFormUrlComponent]
})
export class VideoFormUrlExtModule {}