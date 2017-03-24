import {NgModule} from '@angular/core';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {BrowserModule} from '@angular/platform-browser';
// This module doesn't use "ReactiveFormsModule", but it needs to import this class
// to provide "formBuilder" when inject dependencies in child modules (like form)
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {SearchModule} from '../../../../../../AppBundle/Resources/public/ts/search/search.module';
import {ExpanderModule} from '../../../../../../AppBundle/Resources/public/ts/expander/expander.module';
import {Helper} from '../../../../../../AppBundle/Resources/public/ts/helper';
import {PostService} from '../../../../../../AppBundle/Resources/public/ts/post.service';
import {ModalService} from '../../../../../../AppBundle/Resources/public/modal/ts/modal.service';
import {FlashMessageService} from '../../../../../../AppBundle/Resources/public/ts/flash-message.service';
import {DynamicComponentLoaderService} from '../../../../../../AppBundle/Resources/public/ts/dynamic-component-loader.service';
import {NavManagerService} from '../../../../../../AppBundle/Resources/public/ts/nav-manager/nav-manager.service';
import {WizardManagerService} from '../../../../../../AppBundle/Resources/public/ts/wizard/wizard-manager.service';
import {DataService} from '../../../../../../AppBundle/Resources/public/ts/data-service/data.service';
import {ActionsService} from '../../../../../../AppBundle/Resources/public/ts/actions/actions.service';
import {FormService} from '../../../../../../AppBundle/Resources/public/ts/form/form.service';
import {SearchPaginationModule} from '../../../../../../AppBundle/Resources/public/ts/search/search-pagination.module';
import {DataBoxComponent} from '../../../../../../AppBundle/Resources/public/ts/data-box/data-box.component';
import {DataBoxExtensionModule} from '../../../../../../AppBundle/Resources/public/ts/data-box/data-box.extension-module';

// Define templateUrl to component at runtime
Helper.setRuntimeVar('templateUrl', _app.conf.route['edit']['url']);
import {AddFormPopupModule} from './add-form-popup.module';
Helper.setRuntimeVar('templateUrl', _app.conf.route['edit']['url'] + '/0');
import {FormPopupExtensionModule} from '../../../../../../AppBundle/Resources/public/ts/form/form-popup.extension-module';

@NgModule({
    imports: [
        BrowserModule,
        FormsModule,
        ReactiveFormsModule,
        NgbModule.forRoot(),
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
        {provide: 'DataServiceProvider', useValue: Helper.getDataServiceProvider(_app.conf)},
        {provide: 'Provider', useValue: Helper.getDataBoxProvider(_app.conf)},
        {provide: 'ActionsServiceProvider', useValue: Helper.getActionsServiceProvider(_app.conf)},
        {provide: 'Popups', useValue: {
            add: {
                module: AddFormPopupModule,
                component: 'AddFormPopupComponent',
                providers: [
                    {provide: 'Provider', useValue: Helper.getWizardPopupProvider(_app.conf)},
                    NavManagerService,
                    WizardManagerService,
                    FormService
                ]
            },
            edit: {
                module: FormPopupExtensionModule,
                component: 'FormPopupComponent',
                providers: [
                    {provide: 'Provider', useValue: Helper.getFormProvider(_app.conf)},
                    FormService
                ]
            }
        }}
    ],
    bootstrap: [DataBoxComponent]
})
export class MainModule {}