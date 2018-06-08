import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
// This module doesn't use "ReactiveFormsModule", but it needs to import this class
// to provide "formBuilder" when inject dependencies in child modules (like form)
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {SearchModule} from '../../../ts/search/search.module';
import {SearchPaginationModule} from '../../../ts/search/search-pagination.module';
import {ExpanderModule} from '../../../ts/expander/expander.module';
import {LegendExtModule} from "../../../legend/ts/src/legend.ext-module";
import {Helper} from '../../../ts/helper';
import {TasksLoaderManagerService} from '../../../tasks-loader-manager/ts/tasks-loader-manager.service';
import {PostService} from '../../../ts/post.service';
import {ModalService} from '../../../modal/ts/modal.service';
import {FormService} from '../../../form/ts/form.service';
import {FlashMessageService} from '../../../ts/flash-message.service';
import {DynamicComponentLoaderService} from '../../../ts/dynamic-component-loader.service';
import {DataService} from '../../../ts/data-service/data.service';
import {ActionsService} from '../../../ts/actions/actions.service';
import {NavManagerService} from '../../../ts/nav-manager/nav-manager.service';
import {WizardManagerService} from '../../../wizard/ts/src/wizard-manager.service';
import {MainExtModule as AppBasicsExtModule} from '../../../app-basics/default/ts/src/main.ext-module';
import {MainComponent as AppBasicsComponent} from '../../../app-basics/default/ts/src/main.component';
import {VideoComponent} from './video.component';
import {VideoFormPopupExtModule} from './video-form-popup.ext-module';

// Video form popup provider
// File form
import {VideoFormFileExtModule} from './video-form-file.ext-module';
// Url form (Vimeo and Youtube)
import {VideoFormUrlExtModule} from './video-form-url.ext-module';
// Provider
let videoFormPopupProvider = Helper.getWizardPopupProvider(_app.conf);
videoFormPopupProvider['modules'] = {
    videoFormFile: {module: VideoFormFileExtModule, component: 'VideoFormFileComponent'},
    videoFormUrl: {module: VideoFormUrlExtModule, component: 'VideoFormUrlComponent'}
};


/**
 * Note: This file is never used. It's only here as example to check injection dependencies
 */
@NgModule({
    imports: [
        BrowserModule,
        FormsModule,
        ReactiveFormsModule,
        AppBasicsExtModule,
        SearchModule,
        SearchPaginationModule,
        ExpanderModule,
        LegendExtModule
    ],
    declarations: [
        VideoComponent
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
        {provide: 'Provider', useValue: Helper.getDataBoxProvider(_app.conf)},
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
export class VideoModule {}