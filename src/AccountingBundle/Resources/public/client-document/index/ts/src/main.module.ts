import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
// This module doesn't use "ReactiveFormsModule", but it needs to import this class
// to provide "formBuilder" when inject dependencies in child modules (like form)
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {SearchModule} from '../../../../../../../AppBundle/Resources/public/ts/search/search.module';
import {SearchPaginationModule} from '../../../../../../../AppBundle/Resources/public/ts/search/search-pagination.module';
import {ExpanderModule} from '../../../../../../../AppBundle/Resources/public/ts/expander/expander.module';
import {Helper} from '../../../../../../../AppBundle/Resources/public/ts/helper';
import {TasksLoaderManagerService} from '../../../../../../../AppBundle/Resources/public/tasks-loader-manager/ts/tasks-loader-manager.service';
import {PostService} from '../../../../../../../AppBundle/Resources/public/ts/post.service';
import {ModalService} from '../../../../../../../AppBundle/Resources/public/modal/ts/modal.service';
import {FormService} from '../../../../../../../AppBundle/Resources/public/ts/form/form.service';
import {FlashMessageService} from '../../../../../../../AppBundle/Resources/public/ts/flash-message.service';
import {DynamicComponentLoaderService} from '../../../../../../../AppBundle/Resources/public/ts/dynamic-component-loader.service';
import {DataService} from '../../../../../../../AppBundle/Resources/public/ts/data-service/data.service';
import {ActionsService} from '../../../../../../../AppBundle/Resources/public/ts/actions/actions.service';
import {NavManagerService} from '../../../../../../../AppBundle/Resources/public/ts/nav-manager/nav-manager.service';
import {WizardManagerService} from '../../../../../../../AppBundle/Resources/public/wizard/ts/src/wizard-manager.service';
import {MainExtModule as AppBasicsExtModule} from '../../../../../../../AppBundle/Resources/public/app-basics/ts/src/main.ext-module';
import {MainComponent as AppBasicsComponent} from '../../../../../../../AppBundle/Resources/public/app-basics/ts/src/main.component';
import {MainComponent} from './main.component';


// Form Popups
// Add
import {FormPopupExtModule as ClientDocumentAddFormPopupExtModule} from '../../../add/ts/src/form-popup.ext-module';
// Edit
import {FormPopupExtModule as ClientDocumentEditFormPopupExtModule} from '../../../edit/ts/src/form-popup.ext-module';


// Auto-complete
import {EntityAddressEditExtModule} from '../../../../../../../EntitiesBundle/Resources/public/entity/detail/ts/src/entity-address-edit.ext-module';
import {EditExtModule as EntitiesEntityEditExtModule} from '../../../../../../../EntitiesBundle/Resources/public/entity/index/ts/src/edit.ext-module';
import {EditExtModule as EntitiesClientEditExtModule} from '../../../../../../../EntitiesBundle/Resources/public/client/index/ts/src/edit.ext-module';
import {EditExtModule as EntitiesSupplierEditExtModule} from '../../../../../../../EntitiesBundle/Resources/public/supplier/index/ts/src/edit.ext-module';

let autoCompleteProviders = {
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
    },
    supplierObj: {
        urlConf: (Helper.getAppVar('route') + 'entities/supplier/conf'),
        control: 'edit',
        popups: {
            module: EntitiesSupplierEditExtModule,
            component: 'EditComponent',
            providers: [
                {provide: 'Provider', useValue: Helper.getFormProvider({label: 'Supplier'})},
                FormService,
                // Reset FormServiceProvider to use DataServiceProvider as default values
                {provide: 'FormServiceProvider', useValue: {}}
            ]
        }
    },
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
    entityAddressObj: {
        urlConf: (Helper.getAppVar('route') + 'entities/entity-address/conf/0'),
        control: 'edit',
        popups: {
            module: EntityAddressEditExtModule,
            component: 'EntityAddressEditComponent',
            providers: [
                {provide: 'Provider', useValue: Helper.getFormProvider({label: 'Address'})},
                FormService,
                // Reset FormServiceProvider to use DataServiceProvider as default values
                {provide: 'FormServiceProvider', useValue: {}}
            ]
        }
    }
};


// For add form wizard popup
let formProvider = Helper.getFormProvider(_app.conf);
// To avoid conflicts between forms in steps of the wizard
// (form should override object without notify user)
formProvider['preventObjectOverride'] = false;


@NgModule({
    imports: [
        BrowserModule,
        FormsModule,
        ReactiveFormsModule,
        NgbModule.forRoot(),
        AppBasicsExtModule,
        SearchModule,
        SearchPaginationModule,
        ExpanderModule
    ],
    declarations: [
        MainComponent
    ],
    providers: [
        PostService,
        ModalService,
        FlashMessageService,
        DynamicComponentLoaderService,
        {provide: 'DataService', useClass: DataService},
        {provide: 'ParentDataService', useValue: null}, // Not necessary in this context
        //{provide: 'ParentDataService', useExisting: 'DataService'},
        ActionsService,
        {provide: 'HelperService', useValue: Helper},
        TasksLoaderManagerService,
        {provide: 'DataServiceProvider', useValue: Helper.getDataServiceProvider(_app.conf)},
        {provide: 'Provider', useValue: Helper.getDataBoxProvider(_app.conf)},
        {provide: 'ActionsServiceProvider', useValue: Helper.getActionsServiceProvider(_app.conf)},
        {provide: 'Popups', useValue: {
            add: {
                module: ClientDocumentAddFormPopupExtModule,
                component: 'FormPopupComponent',
                providers: [
                    // Set field for wizard form first step
                    {provide: 'FormServiceProvider', useValue: {fields: ['clientDocumentTypeObj', 'clientObj']}},
                    {provide: 'Provider', useValue: formProvider},
                    NavManagerService,
                    WizardManagerService,
                    {provide: 'WizardManagerServiceProvider', useValue: {rebuildNextStepComponents: true}},
                    // Each FormService has your own provider, so we need different FormService for popup
                    FormService
                ]
            },
            edit: {
                module: ClientDocumentEditFormPopupExtModule,
                component: 'FormPopupComponent',
                providers: [{provide: 'Provider', useValue: Helper.getFormProvider(_app.conf)}],
                FormService
            }
        }},
        {provide: 'AutoCompleteProviders', useValue: autoCompleteProviders},
        // FormService needs to be here for AutoCompleteProviders, however it will be redefined in Popups
        // (so we can reuse the same AutoCompleteProviders for all injectors)
        FormService
    ],
    bootstrap: [AppBasicsComponent, MainComponent]
})
export class MainModule {}