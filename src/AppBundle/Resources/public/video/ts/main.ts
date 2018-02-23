import {enableProdMode} from '@angular/core';
import {platformBrowserDynamic} from '@angular/platform-browser-dynamic'; // The browser platform with a compiler
import {environment} from '../../../../../../angular_cli_conf/environments/environment'; // Get environment
import {VideoModule} from './video.module';

// Enable production environment
if (environment.production) {
    enableProdMode();
}

// Compile and launch the module
platformBrowserDynamic().bootstrapModule(VideoModule)
    .catch(err => console.log(err));