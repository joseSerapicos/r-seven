import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
// This module doesn't use "ReactiveFormsModule", but it needs to import this class
// to provide "formBuilder" when inject dependencies in child modules (like form)
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {SearchModule} from '../../../../../../../AppBundle/Resources/public/ts/search/search.module';
import {ExpanderModule} from '../../../../../../../AppBundle/Resources/public/ts/expander/expander.module';
import {LegendExtModule} from '../../../../../../../AppBundle/Resources/public/legend/ts/src/legend.ext-module';
import {Helper} from '../../../../../../../AppBundle/Resources/public/ts/helper';
import {TasksLoaderManagerService} from '../../../../../../../AppBundle/Resources/public/tasks-loader-manager/ts/tasks-loader-manager.service';
import {PostService} from '../../../../../../../AppBundle/Resources/public/ts/post.service';
import {ModalService} from '../../../../../../../AppBundle/Resources/public/modal/ts/modal.service';
import {FlashMessageService} from '../../../../../../../AppBundle/Resources/public/ts/flash-message.service';
import {DynamicComponentLoaderService} from '../../../../../../../AppBundle/Resources/public/ts/dynamic-component-loader.service';
import {DataService} from '../../../../../../../AppBundle/Resources/public/ts/data-service/data.service';
import {ActionsService} from '../../../../../../../AppBundle/Resources/public/ts/actions/actions.service';
import {SearchPaginationModule} from '../../../../../../../AppBundle/Resources/public/ts/search/search-pagination.module';
import {FormService} from '../../../../../../../AppBundle/Resources/public/ts/form/form.service';
import {DataBoxExtensionModule} from '../../../../../../../AppBundle/Resources/public/data-box/ts/src/data-box.extension-module';
import {MainExtModule as AppBasicsExtModule} from '../../../../../../../AppBundle/Resources/public/app-basics/ts/src/main.ext-module';
import {MainComponent as AppBasicsComponent} from '../../../../../../../AppBundle/Resources/public/app-basics/ts/src/main.component';
import {DataBoxComponent} from '../../../../../../../AppBundle/Resources/public/data-box/ts/src/data-box.component';
import {AutoCompleteProviders} from '../../../../../../../AppBundle/Resources/public/ts/form/field-types/field-type-auto-complete.component';
import {EditExtModule} from './edit.ext-module';


// Auto-complete
import {EditExtModule as EntitiesEntityEditExtModule} from '../../../../../../../EntitiesBundle/Resources/public/entity/index/ts/src/edit.ext-module';
import {EditExtModule as EntitiesClientEditExtModule} from '../../../../../../../EntitiesBundle/Resources/public/client/index/ts/src/edit.ext-module';


let autoCompleteProviders = {
    entityObj: {
        urlConf: (Helper.getAppVar('route') + 'entities/entity/conf'),
        control: 'edit',
        popups: {
            module: EntitiesEntityEditExtModule,
            component: 'EditComponent',
            providers: [
                {provide: 'Provider', useValue: Helper.getFormProvider({label: 'Entity'})},
                FormService,
                // Reset FormServiceProvider to use DataServiceProvider as default values
                {provide: 'FormServiceProvider', useValue: {}}
            ]
        }
    },
    clientObj: {
        urlConf: (Helper.getAppVar('route') + 'entities/client/conf'),
        control: 'edit',
        popups: {
            module: EntitiesClientEditExtModule,
            component: 'EditComponent',
            providers: [
                {provide: 'Provider', useValue: Helper.getFormProvider({label: 'Client'})},
                FormService,
                // Reset FormServiceProvider to use DataServiceProvider as default values
                {provide: 'FormServiceProvider', useValue: {}}
            ]
        }
    }
};


@NgModule({
    imports: [
        BrowserModule,
        FormsModule,
        ReactiveFormsModule,
        NgbModule.forRoot(),
        AppBasicsExtModule,
        DataBoxExtensionModule,
        SearchModule,
        SearchPaginationModule,
        ExpanderModule
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