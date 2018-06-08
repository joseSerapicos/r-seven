import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
// This module doesn't use "ReactiveFormsModule", but it needs to import this class
// to provide "formBuilder" when inject dependencies in child modules (like form)
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {Helper} from '../../../../../../../../AppBundle/Resources/public/ts/helper';
import {TasksLoaderManagerService} from '../../../../../../../../AppBundle/Resources/public/tasks-loader-manager/ts/tasks-loader-manager.service';
import {PostService} from '../../../../../../../../AppBundle/Resources/public/ts/post.service';
import {ModalService} from '../../../../../../../../AppBundle/Resources/public/modal/ts/modal.service';
import {DataService} from '../../../../../../../../AppBundle/Resources/public/ts/data-service/data.service';
import {FlashMessageService} from '../../../../../../../../AppBundle/Resources/public/ts/flash-message.service';
import {DynamicComponentLoaderService} from '../../../../../../../../AppBundle/Resources/public/ts/dynamic-component-loader.service';
import {NavManagerService} from '../../../../../../../../AppBundle/Resources/public/ts/nav-manager/nav-manager.service';
import {MainExtModule as AppBasicsExtModule} from '../../../../../../../../AppBundle/Resources/public/app-basics/default/ts/src/main.ext-module';
import {MainComponent as AppBasicsComponent} from '../../../../../../../../AppBundle/Resources/public/app-basics/default/ts/src/main.component';
import {MainComponent} from './main.component';


// Base Service Price Provider
import {ServiceAvailabilityEditExtModule} from '../../../../service-price/index/ts/src/service-availability-edit.ext-module';
import {ServiceAllotEditExtModule} from '../../../../service-price/index/ts/src/service-allot-edit.ext-module';
import {ServicePriceEditExtModule} from '../../../../service-price/index/ts/src/service-price-edit.ext-module';
import {ServiceFixedCostEditExtModule} from '../../../../service-price/index/ts/src/service-fixed-cost-edit.ext-module';
import {ServiceSupplementEditExtModule} from '../../../../service-price/index/ts/src/service-supplement-edit.ext-module';
import {ServiceDiscountEditExtModule} from '../../../../service-price/index/ts/src/service-discount-edit.ext-module';
import {ServiceBonusEditExtModule} from '../../../../service-price/index/ts/src/service-bonus-edit.ext-module';
let baseServicePriceProvider = {modules: {
    serviceAvailabilityEdit: {module: ServiceAvailabilityEditExtModule, component: 'ServiceAvailabilityEditComponent'},
    serviceAllotEdit: {module: ServiceAllotEditExtModule, component: 'ServiceAllotEditComponent'},
    servicePriceEdit: {module: ServicePriceEditExtModule, component: 'ServicePriceEditComponent'},
    serviceFixedCostEdit: {module: ServiceFixedCostEditExtModule, component: 'ServiceFixedCostEditComponent'},
    serviceSupplementEdit: {module: ServiceSupplementEditExtModule, component: 'ServiceSupplementEditComponent'},
    serviceDiscountEdit: {module: ServiceDiscountEditExtModule, component: 'ServiceDiscountEditComponent'},
    serviceBonusEdit: {module: ServiceBonusEditExtModule, component: 'ServiceBonusEditComponent'}
}};


// Base Service Provider (provider can be merged now, because it's a main provider)
let baseServiceProvider = Helper.getBaseProvider(_app.conf);
import {PriceExtModule as RegularServicePriceExtModule} from '../../../../regular-service-price/index/ts/src/price.ext-module';
import {ServiceObservationEditExtModule} from '../../../../service-observation/index/ts/src/service-observation-edit.ext-module';
import {ServiceFileEditExtModule} from '../../../../service-file/index/ts/src/service-file-edit.ext-module';
import {ImageCropPopupExtModule as ServiceImageCropPopupExtModule} from '../../../../service-image/index/ts/src/image-crop-popup.ext-module';
import {ServiceImageEditExtModule} from '../../../../service-image/index/ts/src/service-image-edit.ext-module';
baseServiceProvider['modules'] = {
    price: {module: RegularServicePriceExtModule, component: 'PriceComponent'},
    serviceObservationEdit: {module: ServiceObservationEditExtModule, component: 'ServiceObservationEditComponent'},
    serviceFileEdit: {module: ServiceFileEditExtModule, component: 'ServiceFileEditComponent'},
    serviceImageCropPopup: {module: ServiceImageCropPopupExtModule, component: 'ServiceImageCropPopupComponent'},
    serviceImageEdit: {module: ServiceImageEditExtModule, component: 'ServiceImageEditComponent'}
};


@NgModule({
    imports: [
        BrowserModule,
        FormsModule,
        ReactiveFormsModule,
        NgbModule.forRoot(),
        AppBasicsExtModule
    ],
    declarations: [
        MainComponent
    ],
    providers: [
        PostService,
        ModalService,
        {provide: 'DataService', useClass: DataService},
        FlashMessageService,
        DynamicComponentLoaderService,
        NavManagerService,
        {provide: 'HelperService', useValue: Helper},
        TasksLoaderManagerService,
        {provide: 'Provider', useValue: baseServiceProvider},
        {provide: 'DataServiceProvider', useValue: Helper.getDataServiceProvider(_app.conf)},
        {provide: 'BaseServicePriceProvider', useValue: baseServicePriceProvider}
    ],
    bootstrap: [AppBasicsComponent, MainComponent]
})
export class MainModule {}