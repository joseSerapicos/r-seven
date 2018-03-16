import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
// This module doesn't use "ReactiveFormsModule", but it needs to import this class
// to provide "formBuilder" when inject dependencies in child modules (like form)
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {Helper} from '../../../../../../../AppBundle/Resources/public/ts/helper';
import {TasksLoaderManagerService} from '../../../../../../../AppBundle/Resources/public/tasks-loader-manager/ts/tasks-loader-manager.service';
import {PostService} from '../../../../../../../AppBundle/Resources/public/ts/post.service';
import {ModalService} from '../../../../../../../AppBundle/Resources/public/modal/ts/modal.service';
import {DataService} from '../../../../../../../AppBundle/Resources/public/ts/data-service/data.service';
import {ActionsService} from '../../../../../../../AppBundle/Resources/public/ts/actions/actions.service';
import {FormService} from '../../../../../../../AppBundle/Resources/public/ts/form/form.service';
import {FlashMessageService} from '../../../../../../../AppBundle/Resources/public/ts/flash-message.service';
import {DynamicComponentLoaderService} from '../../../../../../../AppBundle/Resources/public/ts/dynamic-component-loader.service';
import {NavManagerService} from '../../../../../../../AppBundle/Resources/public/ts/nav-manager/nav-manager.service';
import {MainExtModule as AppBasicsExtModule} from '../../../../../../../AppBundle/Resources/public/app-basics/ts/src/main.ext-module';
import {MainComponent as AppBasicsComponent} from '../../../../../../../AppBundle/Resources/public/app-basics/ts/src/main.component';
import {MainComponent} from './main.component';
import {AutoCompleteProviders} from '../../../../../../../AppBundle/Resources/public/ts/form/field-types/field-type-auto-complete.component';


// Dynamic entity detail
import {EntityDetailExtModule} from '../../../../../../../AppBundle/Resources/public/entity-detail/ts/src/entity-detail.ext-module';
import {EditExtModule} from '../../../index/ts/src/edit.ext-module';
// Provider
let entityDetailProvider = Helper.getEntityDetailProvider(_app.conf);
entityDetailProvider.popup = {
    module: EditExtModule,
    component: 'EditComponent',
    providers: [
        {provide: 'Provider', useValue: Helper.getFormProvider(_app.conf)},
        FormService
    ]
};


// Auto-complete
import {EditExtModule as EntitiesEntityEditExtModule} from '../../../../../../../EntitiesBundle/Resources/public/entity/index/ts/src/edit.ext-module';
import {EditExtModule as EntitiesClientEditExtModule} from '../../../../../../../EntitiesBundle/Resources/public/client/index/ts/src/edit.ext-module';
import {EditExtModule as EntitiesSupplierEditExtModule} from '../../../../../../../EntitiesBundle/Resources/public/supplier/index/ts/src/edit.ext-module';
import {EditExtModule as CommonPlaceEditExtModule} from '../../../../../../../CommonBundle/Resources/public/place/index/ts/src/edit.ext-module';
import {EditExtModule as CommonCountryEditExtModule} from '../../../../../../../CommonBundle/Resources/public/country/index/ts/src/edit.ext-module';
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
    }
};


// Base Booking Service Add Provider
import {EditExtModule as BookingServicePriceEditExtModule} from '../../../../booking-service-price/index/ts/src/edit.ext-module';
import {Step2ExtModule as PackageBookingServiceAddStep2ExtModule} from '../../../../package-booking-service/add/ts/src/step2.ext-module';
import {Step3ExtModule as PackageBookingServiceAddStep3ExtModule} from '../../../../package-booking-service/add/ts/src/step3.ext-module';
let baseBookingServiceAddProvider = {
    servicesUrlProvider: (Helper.getAppVar('route') + 'services/regular-service/data-for-booking-service'),
    modules: { // Put here modules dependencies
        step2: {module: PackageBookingServiceAddStep2ExtModule, component: 'Step2Component'},
        step3: {module: PackageBookingServiceAddStep3ExtModule, component: 'Step3Component'},
        bookingServicePriceEdit: {module: BookingServicePriceEditExtModule, component: 'EditComponent'}
    }
};


// Base Booking Service Edit Provider
let baseBookingServiceEditProvider = {modules: {
    bookingServicePriceEdit: {module: BookingServicePriceEditExtModule, component: 'EditComponent'}
}};


// Base Booking Detail Provider (provider can be merged now, because it's a main provider)
let baseBookingDetailProvider = Helper.getBaseProvider(_app.conf);
import {BookingPaxEditExtModule as PackageBookingDetailBookingPaxEditExtModule} from '../../../../package-booking/detail/ts/src/booking-pax-edit.ext-module';
import {Step1ExtModule as PackageBookingServiceAddStep1} from '../../../../package-booking-service/add/ts/src/step1.ext-module';
import {BookingServiceEditExtModule as PackageBookingServiceEditExtModule} from '../../../../package-booking-service/edit/ts/src/booking-service-edit.ext-module';
import {CurrentAccountsExtModule as PackageBookingDetailCurrentAccountsExtModule} from '../../../../package-booking/detail/ts/src/current-accounts.ext-module';
baseBookingDetailProvider['modules'] = {
    bookingPaxEdit: {module: PackageBookingDetailBookingPaxEditExtModule, component: 'BookingPaxEditComponent'},
    bookingServiceAddStep1: {module: PackageBookingServiceAddStep1, component: 'Step1Component'},
    bookingServiceEdit: {module: PackageBookingServiceEditExtModule, component: 'BookingServiceEditComponent'},
    currentAccounts: {module: PackageBookingDetailCurrentAccountsExtModule, component: 'CurrentAccountsComponent'}
};


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
        {provide: 'DataService', useClass: DataService},
        ActionsService,
        FlashMessageService,
        DynamicComponentLoaderService,
        NavManagerService,
        {provide: 'HelperService', useValue: Helper},
        TasksLoaderManagerService,
        {provide: 'EntityDetailProvider', useValue: entityDetailProvider},
        {provide: 'Provider', useValue: baseBookingDetailProvider},
        {provide: 'BaseBookingServiceAddProvider', useValue: baseBookingServiceAddProvider},
        {provide: 'BaseBookingServiceEditProvider', useValue: baseBookingServiceEditProvider},
        {provide: 'DataServiceProvider', useValue: Helper.getDataServiceProvider(_app.conf)},
        {provide: 'ActionsServiceProvider', useValue: Helper.getActionsServiceProvider(_app.conf)},
        // Used by "booking" edit, "bookingService" edit and "currentAccounts" edit
        {provide: 'AutoCompleteProviders', useValue: autoCompleteProviders}
    ],
    bootstrap: [AppBasicsComponent, MainComponent]
})
export class MainModule {}