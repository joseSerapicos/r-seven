import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
// This module doesn't use "ReactiveFormsModule", but it needs to import this class
// to provide "formBuilder" when inject dependencies in child modules (like form)
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {SearchModule} from '../../../../../../AppBundle/Resources/public/ts/search/search.module';
import {ExpanderModule} from '../../../../../../AppBundle/Resources/public/ts/expander/expander.module';
import {Helper} from '../../../../../../AppBundle/Resources/public/ts/helper';
import {PostService} from '../../../../../../AppBundle/Resources/public/ts/post.service';
import {ModalService} from '../../../../../../AppBundle/Resources/public/modal/ts/modal.service';
import {FlashMessageService} from '../../../../../../AppBundle/Resources/public/ts/flash-message.service';
import {DynamicComponentLoaderService} from '../../../../../../AppBundle/Resources/public/ts/dynamic-component-loader.service';
import {DataService} from '../../../../../../AppBundle/Resources/public/ts/data-service/data.service';
import {ActionsService} from '../../../../../../AppBundle/Resources/public/ts/actions/actions.service';
import {SearchPaginationModule} from '../../../../../../AppBundle/Resources/public/ts/search/search-pagination.module';
import {FormService} from '../../../../../../AppBundle/Resources/public/ts/form/form.service';
import {DataBoxExtensionModule} from '../../../../../../AppBundle/Resources/public/ts/data-box/data-box.extension-module';
import {DataBoxComponent} from '../../../../../../AppBundle/Resources/public/ts/data-box/data-box.component';
import {AutoCompleteProviders} from '../../../../../../AppBundle/Resources/public/ts/form/field-types/field-type-auto-complete.component';


// Define templateUrl to component at runtime
Helper.setRuntimeVar('templateUrl', _app.conf.route['edit']['url']);
import {BookingFormPopupExtensionModule} from './booking-form-popup.extension-module';


// Auto-complete
Helper.setRuntimeVar('templateUrl', Helper.getGlobalVar('route') + 'entities/client/edit');
import {LocalFormPopupExtensionModule} from '../../../../../../EntitiesBundle/Resources/public/client/index/ts/local-form-popup.extension-module';
Helper.setRuntimeVar('templateUrl', Helper.getGlobalVar('route') + 'entities/entity/edit');
import {FormPopupExtensionModule} from '../../../../../../AppBundle/Resources/public/ts/form/form-popup.extension-module';
let autoCompleteProviders: AutoCompleteProviders = {
    clientObj: {
        urlConf: (Helper.getGlobalVar('route') + 'entities/client/conf'),
        control: 'edit',
        popups: {
            module: LocalFormPopupExtensionModule,
            component: 'LocalFormPopupComponent',
            providers: [
                {provide: 'Provider', useValue: Helper.getFormProvider({label: 'Client'})},
                FormService
            ]
        }
    },
    entityObj: {
        urlConf: (Helper.getGlobalVar('route') + 'entities/entity/conf'),
        control: 'edit',
        popups: {
            module: FormPopupExtensionModule,
            component: 'FormPopupComponent',
            providers: [
                {provide: 'Provider', useValue: Helper.getFormProvider({label: 'Entity'})},
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
            module: BookingFormPopupExtensionModule,
            component: 'BookingFormPopupComponent',
            providers: [
                {provide: 'Provider', useValue: Helper.getFormProvider(_app.conf)},
                {provide: 'AutoCompleteProviders', useValue: autoCompleteProviders},
                FormService
            ]
        }}
    ],
    bootstrap: [DataBoxComponent]
})
export class MainModule {}