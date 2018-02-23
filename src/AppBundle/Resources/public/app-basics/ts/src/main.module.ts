import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser'; // Common directives (NgIf, NgFor, etc.)
import {FlashMessageService} from '../../../ts/flash-message.service';
import {MainComponent} from './main.component';


@NgModule({
    imports: [BrowserModule],
    declarations: [
        MainComponent
    ],
    providers: [
        FlashMessageService
    ],
    bootstrap: [MainComponent]
})
export class MainModule {}