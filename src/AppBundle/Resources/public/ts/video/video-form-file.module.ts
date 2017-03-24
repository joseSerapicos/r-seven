import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {VideoFormFileComponent} from './video-form-file.component';


@NgModule({
    imports: [CommonModule],
    declarations: [
        VideoFormFileComponent
    ],
    exports: [VideoFormFileComponent]
})
export class VideoFormFileModule {}