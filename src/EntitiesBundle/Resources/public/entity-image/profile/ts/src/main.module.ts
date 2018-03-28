import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
// This module doesn't use "ReactiveFormsModule", but it needs to import this class
// to provide "formBuilder" when inject dependencies in child modules (like form)
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {Helper} from '../../../../../../../AppBundle/Resources/public/ts/helper';
import {TasksLoaderManagerService} from '../../../../../../../AppBundle/Resources/public/tasks-loader-manager/ts/tasks-loader-manager.service';
import {PostService} from '../../../../../../../AppBundle/Resources/public/ts/post.service';
import {ModalService} from '../../../../../../../AppBundle/Resources/public/modal/ts/modal.service';
import {FormService} from '../../../../../../../AppBundle/Resources/public/form/ts/form.service';
import {FlashMessageService} from '../../../../../../../AppBundle/Resources/public/ts/flash-message.service';
import {DynamicComponentLoaderService} from '../../../../../../../AppBundle/Resources/public/ts/dynamic-component-loader.service';
import {DataService} from '../../../../../../../AppBundle/Resources/public/ts/data-service/data.service';
import {ActionsService} from '../../../../../../../AppBundle/Resources/public/ts/actions/actions.service';
import {MainExtModule as AppBasicsExtModule} from '../../../../../../../AppBundle/Resources/public/app-basics/default/ts/src/main.ext-module';
import {MainComponent as AppBasicsComponent} from '../../../../../../../AppBundle/Resources/public/app-basics/default/ts/src/main.component';
import {ImageSlideExtModule} from '../../../../../../../AppBundle/Resources/public/image/ts/src/image-slide.ext-module';
import {ImageSlideComponent} from '../../../../../../../AppBundle/Resources/public/image/ts/src/image-slide.component';
import {EditExtModule} from '../../../index/ts/src/edit.ext-module';

// Define templateUrl to component at runtime
import {ImageCropPopupExtModule} from '../../../index/ts/src/image-crop-popup.ext-module';
let localData = {
    imageCropPopupModule: ImageCropPopupExtModule,
    imageCropPopupComponent: 'ImageCropPopupComponent'
};


@NgModule({
    imports: [
        BrowserModule,
        FormsModule,
        ReactiveFormsModule,
        AppBasicsExtModule,
        ImageSlideExtModule
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
        {provide: 'Provider', useValue: Helper.getImageProvider(_app.conf, localData)},
        {provide: 'ActionsServiceProvider', useValue: Helper.getActionsServiceProvider(_app.conf)},
        {provide: 'LegendProvider', useValue: Helper.getLegendProvider(_app.conf)},
        {provide: 'Popups', useValue: {
            module: EditExtModule,
            component: 'EditComponent',
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
export class MainModule {}