import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
// This module doesn't use "ReactiveFormsModule", but it needs to import this class
// to provide "formBuilder" when inject dependencies in child modules (like form)
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {Helper} from '../../../../../../AppBundle/Resources/public/ts/helper';
import {PostService} from '../../../../../../AppBundle/Resources/public/ts/post.service';
import {ModalService} from '../../../../../../AppBundle/Resources/public/modal/ts/modal.service';
import {FormService} from '../../../../../../AppBundle/Resources/public/ts/form/form.service';
import {FlashMessageService} from '../../../../../../AppBundle/Resources/public/ts/flash-message.service';
import {DynamicComponentLoaderService} from '../../../../../../AppBundle/Resources/public/ts/dynamic-component-loader.service';
import {NavManagerService} from '../../../../../../AppBundle/Resources/public/ts/nav-manager/nav-manager.service';
import {WizardManagerService} from '../../../../../../AppBundle/Resources/public/ts/wizard/wizard-manager.service';
import {DataService} from '../../../../../../AppBundle/Resources/public/ts/data-service/data.service';
import {ActionsService} from '../../../../../../AppBundle/Resources/public/ts/actions/actions.service';
import {SearchModule} from '../../../../../../AppBundle/Resources/public/ts/search/search.module';
import {SearchPaginationModule} from '../../../../../../AppBundle/Resources/public/ts/search/search-pagination.module';
import {ExpanderModule} from '../../../../../../AppBundle/Resources/public/ts/expander/expander.module';
import {DataBoxComponent} from '../../../../../../AppBundle/Resources/public/ts/data-box/data-box.component';

// Define templateUrl to component at runtime
Helper.setRuntimeVar('templateUrl', _app.conf.route['edit']['url']);
import {FormPopupExtensionModule} from '../../../../../../AppBundle/Resources/public/ts/form/form-popup.extension-module';
Helper.setRuntimeVar('templateUrl', _app.conf.route['add']['url']);
import {AddFormPopupExtensionModule} from './add-form-popup.extension-module';


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
        DataBoxComponent
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
            'add': {
                module: AddFormPopupExtensionModule,
                component: 'AddFormPopupComponent',
                providers: [
                    {provide: 'Provider', useValue: Helper.getWizardPopupProvider(_app.conf)},
                    NavManagerService,
                    WizardManagerService
                ]
            },
            'edit': {
                module: FormPopupExtensionModule,
                component: 'FormPopupComponent',
                providers: [{provide: 'Provider', useValue: Helper.getFormProvider(_app.conf)}]
            }
        }}
    ],
    bootstrap: [DataBoxComponent]
})
export class MainModule {}