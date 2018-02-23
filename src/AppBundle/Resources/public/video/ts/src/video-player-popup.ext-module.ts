import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {VideoPlayerPopupComponent} from './video-player-popup.component';


@NgModule({
    imports: [
        CommonModule
    ],
    declarations: [VideoPlayerPopupComponent],
    exports: [VideoPlayerPopupComponent]
})
export class VideoPlayerPopupExtModule {}