import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
// This module doesn't use "ReactiveFormsModule", but it needs to import this class
// to provide "formBuilder" when inject dependencies in child modules (like form)
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {Helper} from '../../../../../../../../AppBundle/Resources/public/ts/helper';
import {TasksLoaderManagerService} from '../../../../../../../../AppBundle/Resources/public/tasks-loader-manager/ts/tasks-loader-manager.service';
import {PostService} from '../../../../../../../../AppBundle/Resources/public/ts/post.service';
import {ModalService} from '../../../../../../../../AppBundle/Resources/public/modal/ts/modal.service';
import {FlashMessageService} from '../../../../../../../../AppBundle/Resources/public/ts/flash-message.service';
import {DynamicComponentLoaderService} from '../../../../../../../../AppBundle/Resources/public/ts/dynamic-component-loader.service';
import {DataService} from '../../../../../../../../AppBundle/Resources/public/ts/data-service/data.service';
import {ActionsService} from '../../../../../../../../AppBundle/Resources/public/ts/actions/actions.service';
import {FormService} from '../../../../../../../../AppBundle/Resources/public/form/ts/form.service';
import {MainExtModule as AppBasicsExtModule} from '../../../../../../../../AppBundle/Resources/public/app-basics/default/ts/src/main.ext-module';
import {MainComponent as AppBasicsComponent} from '../../../../../../../../AppBundle/Resources/public/app-basics/default/ts/src/main.component';
import {DataBoxExtensionModule} from '../../../../../../../../AppBundle/Resources/public/data-box/ts/src/data-box.extension-module';
import {DataBoxComponent} from '../../../../../../../../AppBundle/Resources/public/data-box/ts/src/data-box.component';
import {EditExtModule} from './edit.ext-module';


// Auto-complete
import {AutoCompleteProviders} from '../../../../../../../../AppBundle/Resources/public/form/ts/field-types/field-type-auto-complete.component';
// Entity dependency
let autoCompleteProviders: AutoCompleteProviders = {
    selectEntityObj: {
        urlConf: (Helper.getAppVar('route') + 'bck/entities/entity/conf'),
        control: 'none'
    }
};


@NgModule({
    imports: [
        BrowserModule,
        FormsModule,
        ReactiveFormsModule,
        NgbModule.forRoot(),
        AppBasicsExtModule,
        DataBoxExtensionModule
    ],
    providers: [
        PostService,
        ModalService,
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
            module: EditExtModule,
            component: 'EditComponent',
            providers: [
                {provide: 'Provider', useValue: Helper.getFormProvider(_app.conf)},
                {provide: 'AutoCompleteProviders', useValue: autoCompleteProviders},
                FormService
            ]
        }}
    ],
    bootstrap: [AppBasicsComponent, DataBoxComponent]
})
export class MainModule {}