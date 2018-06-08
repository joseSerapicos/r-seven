import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
// This module doesn't use "ReactiveFormsModule", but it needs to import this class
// to provide "formBuilder" when inject dependencies in child modules (like form)
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {Helper} from '../../../../../../../../AppBundle/Resources/public/ts/helper';
import {TasksLoaderManagerService} from '../../../../../../../../AppBundle/Resources/public/tasks-loader-manager/ts/tasks-loader-manager.service';
import {PostService} from '../../../../../../../../AppBundle/Resources/public/ts/post.service';
import {ModalService} from '../../../../../../../../AppBundle/Resources/public/modal/ts/modal.service';
import {FormService} from '../../../../../../../../AppBundle/Resources/public/form/ts/form.service';
import {FlashMessageService} from '../../../../../../../../AppBundle/Resources/public/ts/flash-message.service';
import {DynamicComponentLoaderService} from '../../../../../../../../AppBundle/Resources/public/ts/dynamic-component-loader.service';
import {DataService} from '../../../../../../../../AppBundle/Resources/public/ts/data-service/data.service';
import {ActionsService} from '../../../../../../../../AppBundle/Resources/public/ts/actions/actions.service';
import {NavManagerService} from '../../../../../../../../AppBundle/Resources/public/ts/nav-manager/nav-manager.service';
import {WizardManagerService} from '../../../../../../../../AppBundle/Resources/public/wizard/ts/src/wizard-manager.service';
import {MainExtModule as AppBasicsExtModule} from '../../../../../../../../AppBundle/Resources/public/app-basics/default/ts/src/main.ext-module';
import {MainComponent as AppBasicsComponent} from '../../../../../../../../AppBundle/Resources/public/app-basics/default/ts/src/main.component';
import {VideoExtModule} from '../../../../../../../../AppBundle/Resources/public/video/ts/src/video.ext-module';
import {VideoComponent} from '../../../../../../../../AppBundle/Resources/public/video/ts/src/video.component';
import {VideoFormPopupExtModule} from '../../../../../../../../AppBundle/Resources/public/video/ts/src/video-form-popup.ext-module';

// Video form popup provider
// File form
import {AddFileExtModule} from '../../../index/ts/src/add-file.ext-module';
// Url form
import {AddUrlExtModule} from '../../../index/ts/src/add-url.ext-module';
// Provider
let videoFormPopupProvider = Helper.getWizardPopupProvider(_app.conf);
videoFormPopupProvider['modules'] = {
    videoFormFile: {module: AddFileExtModule, component: 'AddFileComponent'},
    videoFormUrl: {module: AddUrlExtModule, component: 'AddUrlComponent'}
};

@NgModule({
    imports: [
        BrowserModule,
        FormsModule,
        ReactiveFormsModule,
        AppBasicsExtModule,
        VideoExtModule
    ],
    declarations: [
    ],
    providers: [
        PostService,
        ModalService,
        FormService,
        FlashMessageService,
        DynamicComponentLoaderService,
        {provide: 'DataService', useClass: DataService},
        ActionsService,
        {provide: 'HelperService', useValue: Helper},
        TasksLoaderManagerService,
        {provide: 'DataServiceProvider', useValue: Helper.getDataServiceProvider(_app.conf)},
        {provide: 'Provider', useValue: Helper.getImageProvider(_app.conf, {})},
        {provide: 'ActionsServiceProvider', useValue: Helper.getActionsServiceProvider(_app.conf)},
        {provide: 'LegendProvider', useValue: Helper.getLegendProvider(_app.conf)},
        {provide: 'Popups', useValue: {
            module: VideoFormPopupExtModule,
            component: 'VideoFormPopupComponent',
            providers: [
                {provide: 'DataService', useClass: DataService},
                FormService,
                NavManagerService,
                WizardManagerService,
                {provide: 'Provider', useValue: videoFormPopupProvider}
            ]
        }}
    ],
    bootstrap: [AppBasicsComponent, VideoComponent]
})
export class MainModule {}