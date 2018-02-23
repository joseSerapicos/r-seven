import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
// This module doesn't use "ReactiveFormsModule", but it needs to import this class
// to provide "formBuilder" when inject dependencies in child modules (like form)
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {Helper} from '../../../../../../../AppBundle/Resources/public/ts/helper';
import {TasksLoaderManagerService} from '../../../../../../../AppBundle/Resources/public/tasks-loader-manager/ts/tasks-loader-manager.service';
import {PostService} from '../../../../../../../AppBundle/Resources/public/ts/post.service';
import {ModalService} from '../../../../../../../AppBundle/Resources/public/modal/ts/modal.service';
import {FlashMessageService} from '../../../../../../../AppBundle/Resources/public/ts/flash-message.service';
import {DynamicComponentLoaderService} from '../../../../../../../AppBundle/Resources/public/ts/dynamic-component-loader.service';
import {NavManagerService} from '../../../../../../../AppBundle/Resources/public/ts/nav-manager/nav-manager.service';
import {MainExtModule as AppBasicsExtModule} from '../../../../../../../AppBundle/Resources/public/app-basics/ts/src/main.ext-module';
import {MainComponent as AppBasicsComponent} from '../../../../../../../AppBundle/Resources/public/app-basics/ts/src/main.component';
import {MainComponent} from './main.component';


// Base Service Provider
let baseServiceProvider = Helper.getBaseProvider(_app.conf);
baseServiceProvider['modules'] = {
    price: {module: '', component: ''},
    serviceObservationEdit: {module: '', component: ''},
    serviceFileEdit: {module: '', component: ''},
    serviceImageCropPopup: {module: '', component: ''},
    serviceImageEdit: {module: '', component: ''}
};

// Price Provider
let baseServicePriceProvider = Helper.getBaseProvider(_app.conf);
baseServicePriceProvider['modules'] = {
    serviceAvailabilityEdit: {module: '', component: ''},
    serviceAllotEdit: {module: '', component: ''},
    servicePriceEdit: {module: '', component: ''},
    serviceSupplementEdit: {module: '', component: ''},
    serviceDiscountEdit: {module: '', component: ''},
    serviceBonusEdit: {module: '', component: ''}
};


@NgModule({
    imports: [
        BrowserModule,
        FormsModule,
        ReactiveFormsModule,
        NgbModule.forRoot(),
        AppBasicsExtModule
    ],
    declarations: [
        MainComponent
    ],
    providers: [
        PostService,
        ModalService,
        FlashMessageService,
        DynamicComponentLoaderService,
        NavManagerService,
        {provide: 'HelperService', useValue: Helper},
        TasksLoaderManagerService,
        {provide: 'Provider', useValue: baseServiceProvider},
        {provide: 'BaseServicePriceProvider', useValue: baseServicePriceProvider}
    ],
    bootstrap: [AppBasicsComponent, MainComponent]
})
export class MainModule {}