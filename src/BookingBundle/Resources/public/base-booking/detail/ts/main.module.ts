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
import {AutoCompleteProviders} from '../../../../../../AppBundle/Resources/public/ts/form/field-types/field-type-auto-complete.component';


// Dynamic entity detail
import {EntityDetailModule} from '../../../../../../AppBundle/Resources/public/ts/entity-detail/entity-detail.module';
// Auto-complete
Helper.setRuntimeVar('templateUrl', Helper.getGlobalVar('route') + 'entities/client/edit');
import {LocalFormPopupExtensionModule} from '../../../../../../EntitiesBundle/Resources/public/client/index/ts/local-form-popup.extension-module';
Helper.setRuntimeVar('templateUrl', Helper.getGlobalVar('route') + 'entities/supplier/edit');
import {LocalFormPopupExtensionModule as SupplierFormPopupExtensionModule} from '../../../../../../EntitiesBundle/Resources/public/supplier/index/ts/local-form-popup.extension-module';
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
    supplierObj: {
        urlConf: (Helper.getGlobalVar('route') + 'entities/supplier/conf'),
        control: 'edit',
        popups: {
            module: SupplierFormPopupExtensionModule,
            component: 'LocalFormPopupComponent',
            providers: [
                {provide: 'Provider', useValue: Helper.getFormProvider({label: 'Supplier'})},
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
// Form for popup
Helper.setRuntimeVar('templateUrl', _app.conf.route['edit']['url'] + '/' + _app.conf.object['id']);
import {BookingFormPopupExtensionModule} from '../../index/ts/booking-form-popup.extension-module';
// Provider
let entityDetailProvider = Helper.getEntityDetailProvider(_app.conf);
entityDetailProvider.popup = {
    module: BookingFormPopupExtensionModule,
    component: 'BookingFormPopupComponent',
    providers: [
        {provide: 'Provider', useValue: Helper.getFormProvider(_app.conf)},
        FormService
    ]
};


@NgModule({
    imports: [
        BrowserModule,
        FormsModule,
        ReactiveFormsModule,
        NgbModule.forRoot(),
        EntityDetailModule
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
        {provide: 'Provider', useValue: Helper.getBaseProvider(_app.conf)},
        {provide: 'DataServiceProvider', useValue: Helper.getDataServiceProvider(_app.conf)},
        {provide: 'ActionsServiceProvider', useValue: Helper.getActionsServiceProvider(_app.conf)},
        // Used by "booking" edit, "bookingService" edit and "currentAccounts" edit
        {provide: 'AutoCompleteProviders', useValue: autoCompleteProviders}
    ],
    bootstrap: [MainComponent]
})
export class MainModule {}