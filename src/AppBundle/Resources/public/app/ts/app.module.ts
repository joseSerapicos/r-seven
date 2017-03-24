import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser'; // Common directives (NgIf, NgFor, etc.)
import {FlashMessageService} from '../../ts/flash-message.service';
import {AppComponent} from './app.component';


@NgModule({
    imports: [BrowserModule],
    declarations: [AppComponent],
    providers: [
        FlashMessageService
    ],
    bootstrap: [AppComponent],
})
export class AppModule {}