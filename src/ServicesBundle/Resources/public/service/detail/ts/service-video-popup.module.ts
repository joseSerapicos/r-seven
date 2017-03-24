import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule} from '@angular/forms';
import {ServiceVideoPopupComponent} from './service-video-popup.component';


@NgModule({
    imports: [CommonModule, FormsModule],
    declarations: [
        ServiceVideoPopupComponent
    ],
    exports: [ServiceVideoPopupComponent]
})
export class ServiceVideoPopupModule {}