import {platformBrowserDynamic} from '@angular/platform-browser-dynamic'; // The browser platform with a compiler
import {enableProdMode} from '@angular/core';
import {AppModule} from './app.module';

// Log debug
if (!_app.isDebug) {
    enableProdMode();
}

// Compile and launch the module
platformBrowserDynamic().bootstrapModule(AppModule);