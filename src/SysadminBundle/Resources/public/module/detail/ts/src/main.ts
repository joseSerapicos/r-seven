import {enableProdMode} from '@angular/core';
import {platformBrowserDynamic} from '@angular/platform-browser-dynamic'; // The browser platform with a compiler
import {environment} from '../../../../../../../../angular_cli_conf/environments/environment'; // Get environment
import {MainModule} from '../../../../module-menu/index/ts/src/main.module';  // Use the ModuleMenu Index for now

// Enable production environment
if (environment.production) {
    enableProdMode();
}

// Compile and launch the module
platformBrowserDynamic().bootstrapModule(MainModule)
    .catch(err => console.log(err));