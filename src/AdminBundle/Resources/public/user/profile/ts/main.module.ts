import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
// This module doesn't use "ReactiveFormsModule", but it needs to import this class
// to provide "formBuilder" when inject dependencies in child modules (like form)
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {Helper} from '../../../../../../AppBundle/Resources/public/ts/helper';
import {PostService} from '../../../../../../AppBundle/Resources/public/ts/post.service';
import {ModalService} from '../../../../../../AppBundle/Resources/public/modal/ts/modal.service';
import {DataService} from '../../../../../../AppBundle/Resources/public/ts/data-service/data.service';
import {ActionsService} from '../../../../../../AppBundle/Resources/public/ts/actions/actions.service';
import {FormService} from '../../../../../../AppBundle/Resources/public/ts/form/form.service';
import {FlashMessageService} from '../../../../../../AppBundle/Resources/public/ts/flash-message.service';
import {DynamicComponentLoaderService} from '../../../../../../AppBundle/Resources/public/ts/dynamic-component-loader.service';
import {NavManagerService} from '../../../../../../AppBundle/Resources/public/ts/nav-manager/nav-manager.service';
import {MainComponent} from './main.component';


// Dynamic entity detail
import {EntityDetailModule} from '../../../../../../AppBundle/Resources/public/ts/entity-detail/entity-detail.module';
// Form for popup
Helper.setRuntimeVar('templateUrl', _app.conf.route['edit']['url'] + '/' + _app.conf.object['id']);
import {FormPopupExtensionModule} from '../../../../../../AppBundle/Resources/public/ts/form/form-popup.extension-module';
// Provider
let entityDetailProvider = Helper.getEntityDetailProvider(_app.conf);
entityDetailProvider.popup = {
    module: FormPopupExtensionModule,
    component: 'FormPopupComponent',
    providers: [
        FormService,
        {provide: 'Provider', useValue: Helper.getFormProvider(_app.conf)}
    ]
};

// Contacts dependency
Helper.setRuntimeVar('templateUrl', Helper.getGlobalVar('route') + 'entities/entity/contacts');
import {ContactsModule} from "../../../../../../EntitiesBundle/Resources/public/entity/detail/ts/contacts.module";


@NgModule({
    imports: [
        BrowserModule,
        FormsModule,
        ReactiveFormsModule,
        NgbModule.forRoot(),
        EntityDetailModule,
        ContactsModule
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
        {provide: 'EntityDetailProvider', useValue: entityDetailProvider},
        {provide: 'DataServiceProvider', useValue: Helper.getDataServiceProvider(_app.conf)},
        {provide: 'ActionsServiceProvider', useValue: Helper.getActionsServiceProvider(_app.conf)}
    ],
    bootstrap: [MainComponent]
})
export class MainModule {}