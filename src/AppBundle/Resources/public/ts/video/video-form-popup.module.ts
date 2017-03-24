import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule} from '@angular/forms';
import {DynamicComponentLoaderService} from '../dynamic-component-loader.service';
import {VideoFormPopupComponent} from './video-form-popup.component';


@NgModule({
    imports: [
        CommonModule,
        FormsModule
    ],
    declarations: [VideoFormPopupComponent],
    providers: [
        DynamicComponentLoaderService
    ],
    exports: [VideoFormPopupComponent]
})
export class VideoFormPopupModule {}