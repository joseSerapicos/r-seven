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
import {DataService} from '../../../../../../../../AppBundle/Resources/public/ts/data-service/data.service';
import {ActionsService} from '../../../../../../../../AppBundle/Resources/public/ts/actions/actions.service';
import {FormService} from '../../../../../../../../AppBundle/Resources/public/form/ts/form.service';
import {FlashMessageService} from '../../../../../../../../AppBundle/Resources/public/ts/flash-message.service';
import {DynamicComponentLoaderService} from '../../../../../../../../AppBundle/Resources/public/ts/dynamic-component-loader.service';
import {NavManagerService} from '../../../../../../../../AppBundle/Resources/public/ts/nav-manager/nav-manager.service';
import {MainExtModule as AppBasicsExtModule} from '../../../../../../../../AppBundle/Resources/public/app-basics/default/ts/src/main.ext-module';
import {MainComponent as AppBasicsComponent} from '../../../../../../../../AppBundle/Resources/public/app-basics/default/ts/src/main.component';
import {MainComponent} from './main.component';

// Dynamic entity detail
import {EntityDetailExtModule} from '../../../../../../../../AppBundle/Resources/public/entity-detail/ts/src/entity-detail.ext-module';
import {EditExtModule} from '../../../index/ts/src/edit.ext-module';

// Contacts dependency
import {ContactsExtModule} from "../../../../../../../EntitiesBundle/Resources/public/entity/detail/ts/src/contacts.ext-module";


@NgModule({
    imports: [
        BrowserModule,
        FormsModule,
        ReactiveFormsModule,
        NgbModule.forRoot(),
        AppBasicsExtModule,
        EntityDetailExtModule,
        ContactsExtModule
    ],
    declarations: [
        MainComponent
    ],
    providers: [
        PostService,
        ModalService,
        {provide: 'DataService', useClass: DataService},
        ActionsService,
        FlashMessageService,
        DynamicComponentLoaderService,
        NavManagerService,
        {provide: 'HelperService', useValue: Helper},
        TasksLoaderManagerService,
        {provide: 'Provider', useValue: Helper.getBaseProvider(_app.conf)},
        {provide: 'EntityDetailProvider', useValue: Helper.getEntityDetailProvider(_app.conf)},
        {provide: 'DataServiceProvider', useValue: Helper.getDataServiceProvider(_app.conf)},
        {provide: 'ActionsServiceProvider', useValue: Helper.getActionsServiceProvider(_app.conf)},
        {provide: 'Popup', useValue: {
            module: EditExtModule,
            component: 'EditComponent',
            providers: [
                FormService,
                {provide: 'Provider', useValue: Helper.getFormProvider(_app.conf)}
            ]
        }}
    ],
    bootstrap: [AppBasicsComponent, MainComponent]
})
export class MainModule {}