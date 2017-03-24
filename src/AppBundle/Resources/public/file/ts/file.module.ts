import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
// This module doesn't use "ReactiveFormsModule", but it needs to import this class
// to provide "formBuilder" when inject dependencies in child modules (like form)
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {SearchModule} from '../../ts/search/search.module';
import {SearchPaginationModule} from '../../ts/search/search-pagination.module';
import {ExpanderModule} from '../../ts/expander/expander.module';
import {Helper} from '../../ts/helper';
import {PostService} from '../../ts/post.service';
import {ModalService} from '../../modal/ts/modal.service';
import {FormService} from '../../ts/form/form.service';
import {FlashMessageService} from '../../ts/flash-message.service';
import {DynamicComponentLoaderService} from '../../ts/dynamic-component-loader.service';
import {DataService} from '../../ts/data-service/data.service';
import {ActionsService} from '../../ts/actions/actions.service';
import {FileComponent} from '../../ts/file/file.component';


// Define templateUrl to component at runtime
Helper.setRuntimeVar('templateUrl', _app.conf.route['edit']['url']);
import {FileFormPopupModule} from '../../ts/file/file-form-popup.extension-module';


@NgModule({
    imports: [
        BrowserModule,
        FormsModule,
        ReactiveFormsModule,
        SearchModule,
        SearchPaginationModule,
        ExpanderModule
    ],
    declarations: [
        FileComponent
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
        {provide: 'DataServiceProvider', useValue: Helper.getDataServiceProvider(_app.conf)},
        {provide: 'Provider', useValue: Helper.getDataBoxProvider(_app.conf)},
        {provide: 'ActionsServiceProvider', useValue: Helper.getActionsServiceProvider(_app.conf)},
        {provide: 'Popups', useValue: {
            module: FileFormPopupModule,
            component: 'FileFormPopupComponent',
            providers: [
                {provide: 'FileUploadProvider', useValue: {
                    label: _app.conf['label'],
                    url: _app.conf['route']['edit']['url']
                }}
            ]
        }}
    ],
    bootstrap: [FileComponent]
})
export class FileModule {}