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
import {NavManagerService} from '../../../../../../../AppBundle/Resources/public/ts/nav-manager/nav-manager.service';
import {WizardManagerService} from '../../../../../../../AppBundle/Resources/public/wizard/ts/src/wizard-manager.service';
import {FlashMessageService} from '../../../../../../../AppBundle/Resources/public/ts/flash-message.service';
import {DynamicComponentLoaderService} from '../../../../../../../AppBundle/Resources/public/ts/dynamic-component-loader.service';
import {DataService} from '../../../../../../../AppBundle/Resources/public/ts/data-service/data.service';
import {ActionsService} from '../../../../../../../AppBundle/Resources/public/ts/actions/actions.service';
import {MainExtModule as AppBasicsExtModule} from '../../../../../../../AppBundle/Resources/public/app-basics/default/ts/src/main.ext-module';
import {MainComponent as AppBasicsComponent} from '../../../../../../../AppBundle/Resources/public/app-basics/default/ts/src/main.component';
import {DataBoxExtensionModule} from '../../../../../../../AppBundle/Resources/public/data-box/ts/src/data-box.extension-module';
import {DataBoxComponent} from '../../../../../../../AppBundle/Resources/public/data-box/ts/src/data-box.component';
import {AddExtModule} from './add.ext-module';
import {EditExtModule} from './edit.ext-module';


@NgModule({
    imports: [
        BrowserModule,
        FormsModule,
        ReactiveFormsModule,
        AppBasicsExtModule,
        DataBoxExtensionModule
    ],
    declarations: [
    ],
    providers: [
        PostService,
        ModalService,
        FormService, // For both form popups
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
            'add': {
                module: AddExtModule,
                component: 'AddComponent',
                providers: [
                    {provide: 'Provider', useValue: Helper.getWizardPopupProvider(_app.conf)},
                    NavManagerService,
                    WizardManagerService
                ]
            },
            'edit': {
                module: EditExtModule,
                component: 'EditComponent',
                providers: [{provide: 'Provider', useValue: Helper.getFormProvider(_app.conf)}]
            }
        }}
    ],
    bootstrap: [AppBasicsComponent, DataBoxComponent]
})
export class MainModule {}