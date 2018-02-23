import {enableProdMode} from '@angular/core';
import {platformBrowserDynamic} from '@angular/platform-browser-dynamic'; // The browser platform with a compiler
import {environment} from '../../../../../../angular_cli_conf/environments/environment'; // Get environment
import {FileModule} from './file.module';

// Enable production environment
if (environment.production) {
    enableProdMode();
}

// Compile and launch the module
platformBrowserDynamic().bootstrapModule(FileModule)
    .catch(err => console.log(err));