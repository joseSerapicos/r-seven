import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {VideoFormUrlComponent} from './video-form-url.component';


@NgModule({
    imports: [CommonModule, FormsModule, ReactiveFormsModule],
    declarations: [
        VideoFormUrlComponent
    ],
    exports: [VideoFormUrlComponent]
})
export class VideoFormUrlModule {}