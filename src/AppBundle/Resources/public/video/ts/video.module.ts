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
import {NavManagerService} from '../../../../../AppBundle/Resources/public/ts/nav-manager/nav-manager.service';
import {WizardManagerService} from '../../../../../AppBundle/Resources/public/ts/wizard/wizard-manager.service';
import {VideoComponent} from '../../ts/video/video.component';


// Define templateUrl to component at runtime
Helper.setRuntimeVar('templateUrl', _app.conf.route['add']['url']);
import {VideoFormPopupModule} from '../../ts/video/video-form-popup.module';


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
        {provide: 'DataServiceProvider', useValue: Helper.getDataServiceProvider(_app.conf)},
        {provide: 'Provider', useValue: Helper.getDataBoxProvider(_app.conf)},
        {provide: 'ActionsServiceProvider', useValue: Helper.getActionsServiceProvider(_app.conf)},
        {provide: 'Popups', useValue: {
            module: VideoFormPopupModule,
            component: 'VideoFormPopupComponent',
            providers: [
                {provide: 'DataService', useClass: DataService},
                FormService,
                NavManagerService,
                WizardManagerService,
                {provide: 'Provider', useValue: Helper.getWizardPopupProvider(_app.conf)}
            ]
        }}
    ],
    bootstrap: [VideoComponent]
})
export class VideoModule {}