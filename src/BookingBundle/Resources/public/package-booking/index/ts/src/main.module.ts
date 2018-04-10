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
import {PostService} from '../../../../../../../AppBundle/Resources/public/ts/post.service';
import {ModalService} from '../../../../../../../AppBundle/Resources/public/modal/ts/modal.service';
import {FlashMessageService} from '../../../../../../../AppBundle/Resources/public/ts/flash-message.service';
import {TasksLoaderManagerService} from '../../../../../../../AppBundle/Resources/public/tasks-loader-manager/ts/tasks-loader-manager.service';
import {DynamicComponentLoaderService} from '../../../../../../../AppBundle/Resources/public/ts/dynamic-component-loader.service';
import {DataService} from '../../../../../../../AppBundle/Resources/public/ts/data-service/data.service';
import {ActionsService} from '../../../../../../../AppBundle/Resources/public/ts/actions/actions.service';
import {SearchPaginationModule} from '../../../../../../../AppBundle/Resources/public/ts/search/search-pagination.module';
import {FormService} from '../../../../../../../AppBundle/Resources/public/form/ts/form.service';
import {MainExtModule as AppBasicsExtModule} from '../../../../../../../AppBundle/Resources/public/app-basics/default/ts/src/main.ext-module';
import {MainComponent as AppBasicsComponent} from '../../../../../../../AppBundle/Resources/public/app-basics/default/ts/src/main.component';
import {AutoCompleteProviders} from '../../../../../../../AppBundle/Resources/public/form/ts/field-types/field-type-auto-complete.component';
import {NavManagerService} from '../../../../../../../AppBundle/Resources/public/ts/nav-manager/nav-manager.service';
import {WizardManagerService} from '../../../../../../../AppBundle/Resources/public/wizard/ts/src/wizard-manager.service';
import {MainComponent} from './main.component';
import {Step1ExtModule as AddExtModule} from '../../../add/ts/src/step1.ext-module';
import {EditExtModule} from './edit.ext-module';


// Auto-complete
import {EditExtModule as EntitiesClientEditExtModule} from '../../../../../../../EntitiesBundle/Resources/public/client/index/ts/src/edit.ext-module';
import {EditExtModule as EntitiesSupplierEditExtModule} from '../../../../../../../EntitiesBundle/Resources/public/supplier/index/ts/src/edit.ext-module';
import {EditExtModule as CommonPlaceEditExtModule} from '../../../../../../../CommonBundle/Resources/public/place/index/ts/src/edit.ext-module';
import {EditExtModule as CommonCountryEditExtModule} from '../../../../../../../CommonBundle/Resources/public/country/index/ts/src/edit.ext-module';
let autoCompleteProviders = {
    selectEntityObj: {
        urlConf: (Helper.getAppVar('route') + 'entities/entity/conf'),
        control: 'none'
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
    placeObj: {
        urlConf: (Helper.getAppVar('route') + 'booking/place/conf'),
        control: 'edit',
        popups: {
            module: CommonPlaceEditExtModule,
            component: 'EditComponent',
            providers: [
                {provide: 'Provider', useValue: Helper.getFormProvider({label: 'Place'})},
                FormService
            ]
        }
    },
    placeToObj: {
        urlConf: (Helper.getAppVar('route') + 'booking/place/conf'),
        control: 'edit',
        popups: {
            module: CommonPlaceEditExtModule,
            component: 'EditComponent',
            providers: [
                {provide: 'Provider', useValue: Helper.getFormProvider({label: 'Place'})},
                FormService
            ]
        }
    },
    countryObj: {
        urlConf: (Helper.getAppVar('route') + 'booking/country/conf'),
        control: 'edit',
        popups: {
            module: CommonCountryEditExtModule,
            component: 'EditComponent',
            providers: [
                {provide: 'Provider', useValue: Helper.getFormProvider({label: 'Country'})},
                FormService
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
        SearchModule,
        SearchPaginationModule,
        ExpanderModule,
        LegendExtModule
    ],
    declarations: [
        MainComponent
    ],
    providers: [
        PostService,
        ModalService,
        FlashMessageService,
        TasksLoaderManagerService,
        DynamicComponentLoaderService,
        {provide: 'DataService', useClass: DataService},
        ActionsService,
        {provide: 'HelperService', useValue: Helper},
        {provide: 'DataServiceProvider', useValue: Helper.getDataServiceProvider(_app.conf)},
        {provide: 'Provider', useValue: Helper.getDataBoxProvider(_app.conf)},
        {provide: 'ActionsServiceProvider', useValue: Helper.getActionsServiceProvider(_app.conf)},
        {provide: 'LegendProvider', useValue: Helper.getLegendProvider(_app.conf)},
        {provide: 'AutoCompleteProviders', useValue: autoCompleteProviders}, // User by add and edit
        {provide: 'Popups', useValue: {
            'add': {
                module: AddExtModule,
                component: 'Step1Component',
                providers: [
                    // Set field for wizard form first step
                    {provide: 'Provider', useValue: Helper.getFormProvider(_app.conf)},
                    {provide: 'FormServiceProvider', useValue: {fields: ['userObj', 'clientObj', 'clientIsPax']}},
                    FormService,
                    NavManagerService,
                    WizardManagerService
                ]
            },
            'edit': {
                module: EditExtModule,
                component: 'EditComponent',
                providers: [
                    {provide: 'Provider', useValue: Helper.getFormProvider(_app.conf)},
                    FormService
                ]
            }
        }}
    ],
    bootstrap: [AppBasicsComponent, MainComponent]
})
export class MainModule {}