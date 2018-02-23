import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
// This module doesn't use "ReactiveFormsModule", but it needs to import this class
// to provide "formBuilder" when inject dependencies in child modules (like form)
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {SearchModule} from '../../../ts/search/search.module';
import {SearchPaginationModule} from '../../../ts/search/search-pagination.module';
import {ExpanderModule} from '../../../ts/expander/expander.module';
import {Helper} from '../../../ts/helper';
import {TasksLoaderManagerService} from '../../../tasks-loader-manager/ts/tasks-loader-manager.service';
import {PostService} from '../../../ts/post.service';
import {ModalService} from '../../../modal/ts/modal.service';
import {FormService} from '../../../ts/form/form.service';
import {FlashMessageService} from '../../../ts/flash-message.service';
import {DynamicComponentLoaderService} from '../../../ts/dynamic-component-loader.service';
import {DataService} from '../../../ts/data-service/data.service';
import {ActionsService} from '../../../ts/actions/actions.service';
import {MainExtModule as AppBasicsExtModule} from '../../../app-basics/ts/src/main.ext-module';
import {MainComponent as AppBasicsComponent} from '../../../app-basics/ts/src/main.component';
import {ImageSlideComponent} from './image-slide.component';

// You need extend this component to define "templateUrl"
import {FileFormPopupExtModule} from '../../../file/ts/src/file-form-popup.ext-module';

import {ImageCropPopupExtModule} from './image-crop-popup.ext-module';
let localData = {
    imageCropPopupModule: ImageCropPopupExtModule
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
        ExpanderModule
    ],
    declarations: [
        ImageSlideComponent
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
        {provide: 'Provider', useValue: Helper.getImageProvider(_app.conf, localData)},
        {provide: 'ActionsServiceProvider', useValue: Helper.getActionsServiceProvider(_app.conf)},
        {provide: 'Popups', useValue: {
            module: FileFormPopupExtModule,
            component: 'FileFormPopupComponent',
            providers: [
                {provide: 'FileFormProvider', useValue: {
                    label: _app.conf['label'],
                    url: _app.conf['route']['edit']['url']
                }}
            ]
        }}
    ],
    bootstrap: [AppBasicsComponent, ImageSlideComponent]
})
export class ImageSlideModule {}