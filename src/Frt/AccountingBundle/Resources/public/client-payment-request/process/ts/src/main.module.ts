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
import {FormService} from '../../../../../../../../AppBundle/Resources/public/form/ts/form.service';
import {NavManagerService} from '../../../../../../../../AppBundle/Resources/public/ts/nav-manager/nav-manager.service';
import {WizardManagerService} from '../../../../../../../../AppBundle/Resources/public/wizard/ts/src/wizard-manager.service';
import {FlashMessageService} from '../../../../../../../../AppBundle/Resources/public/ts/flash-message.service';
import {DynamicComponentLoaderService} from '../../../../../../../../AppBundle/Resources/public/ts/dynamic-component-loader.service';
import {DataService} from '../../../../../../../../AppBundle/Resources/public/ts/data-service/data.service';
import {ActionsService} from '../../../../../../../../AppBundle/Resources/public/ts/actions/actions.service';
import {MainExtModule as AppBasicsExtModule} from '../../../../../../../../AppBundle/Resources/public/app-basics/default/ts/src/main.ext-module';
import {MainComponent as AppBasicsComponent} from '../../../../../../../../AppBundle/Resources/public/app-basics/default/ts/src/main.component';
import {MainComponent} from './main.component';


// Dynamic entity detail
import {EntityDetailExtModule} from '../../../../../../../../AppBundle/Resources/public/entity-detail/ts/src/entity-detail.ext-module';
import {EntityDetailComponent} from '../../../../../../../../AppBundle/Resources/public/entity-detail/ts/src/entity-detail.component';
import {EditExtModule as ClientEditExtModule} from '../../../../../../../../Frt/EntitiesBundle/Resources/public/client/index/ts/src/edit.ext-module';

let dependencies = _app.dependencies,
    entityDetailProvider = Helper.getEntityDetailProvider(dependencies['client']);
entityDetailProvider['hasInsertInfo'] = false;


@NgModule({
    imports: [
        BrowserModule,
        FormsModule,
        ReactiveFormsModule,
        NgbModule.forRoot(),
        AppBasicsExtModule,
        EntityDetailExtModule
    ],
    declarations: [
        MainComponent
    ],
    providers: [
        PostService,
        ModalService,
        NavManagerService,
        WizardManagerService,
        FlashMessageService,
        DynamicComponentLoaderService,
        {provide: 'DataService', useClass: DataService},
        ActionsService,
        {provide: 'HelperService', useValue: Helper},
        TasksLoaderManagerService,
        {provide: 'DataServiceProvider', useValue: Helper.getDataServiceProvider(dependencies['client'])},
        {provide: 'EntityDetailProvider', useValue: entityDetailProvider},
        {provide: 'Provider', useValue: Helper.getWizardPopupProvider(_app.conf)},
        {provide: 'ActionsServiceProvider', useValue: Helper.getActionsServiceProvider(dependencies['client'])},
        {provide: 'Popup', useValue: {
            module: ClientEditExtModule,
            component: 'EditComponent',
            providers: [
                {provide: 'Provider', useValue: Helper.getFormProvider(dependencies['client'])},
                {provide: 'FormServiceProvider', useValue: {fields: ['code', 'avatar', 'title', 'name', 'surname',
                    'legalName', 'birthDate', 'taxNumber']}},
                FormService
            ]
        }}
    ],
    bootstrap: [AppBasicsComponent, EntityDetailComponent, MainComponent]
})
export class MainModule {}