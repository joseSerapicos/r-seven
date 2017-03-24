import {Component, Optional, ElementRef, Inject, Renderer, QueryList, ViewContainerRef, ViewChildren} from '@angular/core';
import {Helper} from '../../../../../../AppBundle/Resources/public/ts/helper';
import {AccordionComponent, IAccordion, LazyLoadData} from '../../../../../../AppBundle/Resources/public/accordion/ts/accordion.component';
import {NavManagerService} from '../../../../../../AppBundle/Resources/public/ts/nav-manager/nav-manager.service';
import {FormService} from '../../../../../../AppBundle/Resources/public/ts/form/form.service';
import {DataBoxExtensionModule} from '../../../../../../AppBundle/Resources/public/ts/data-box/data-box.extension-module';
import {DataService} from '../../../../../../AppBundle/Resources/public/ts/data-service/data.service';
import {ActionsService} from '../../../../../../AppBundle/Resources/public/ts/actions/actions.service';

/* Import dependencies */
// Save last templateUrl
let tmpTemplateUrl = Helper.getRuntimeVar('templateUrl');

// Parent id of dependencies
var parentId = (Helper.getGlobalVar('conf')['object'] ? Helper.getGlobalVar('conf')['object']['id'] : 0);

// ServiceAvailability
Helper.setRuntimeVar('templateUrl', Helper.getGlobalVar('route') + 'services/service-availability/edit/' + parentId);
import {ServiceAvailabilityPopupModule} from './service-availability-popup.module';

// ServiceAllot
Helper.setRuntimeVar('templateUrl', Helper.getGlobalVar('route') + 'services/service-allot/edit/' + parentId);
import {ServiceAllotPopupModule} from './service-allot-popup.module';

// ServicePrice
Helper.setRuntimeVar('templateUrl', Helper.getGlobalVar('route') + 'services/service-price/edit/' + parentId);
import {ServicePricePopupModule} from '../../../service-price/ts/service-price-popup.module';

// ServiceSupplement
Helper.setRuntimeVar('templateUrl', Helper.getGlobalVar('route') + 'services/service-supplement/edit/' + parentId);
import {ServiceSupplementPopupModule} from '../../../service-supplement/ts/service-supplement-popup.module';

// ServiceSupplement
Helper.setRuntimeVar('templateUrl', Helper.getGlobalVar('route') + 'services/service-discount/edit/' + parentId);
import {ServiceDiscountPopupModule} from '../../../service-discount/ts/service-discount-popup.module';

// ServiceSupplement
Helper.setRuntimeVar('templateUrl', Helper.getGlobalVar('route') + 'services/service-bonus/edit/' + parentId);
import {ServiceBonusPopupModule} from '../../../service-bonus/ts/service-bonus-popup.module';

// Restore last templateUrl
Helper.setRuntimeVar('templateUrl', tmpTemplateUrl);
/* /Import dependencies */


@Component({
    selector: '.js_controls',
    templateUrl: Helper.getRuntimeVar('templateUrl')
})
export class ControlsComponent extends AccordionComponent implements IAccordion
{
    // For NavManagerService
    @ViewChildren('js_lazyLoadContainer', {read: ViewContainerRef}) lazyLoadViewContainerRefQL: QueryList<ViewContainerRef>;

    protected _dependenciesData: any[];

    constructor(
        elementRef: ElementRef,
        renderer: Renderer,
        @Optional() @Inject('Provider') provider: any,
        @Inject('HelperService') helperService: any,
        navManagerService: NavManagerService
    ) {
        super(
            elementRef,
            renderer,
            provider || null,
            helperService,
            navManagerService
        );
        
        this._dependenciesData = (this._helperService.getGlobalVar('dependency') || []);
    }

    /**
     * Get navigation data (needed data to lazy load container)
     * @param index (index to load)
     * @returns NavData
     */
    public getNavData(index: number): LazyLoadData
    {
        let data = {
            module: DataBoxExtensionModule,
            component: 'DataBoxComponent'
        };

        switch (index) {
            case 0:
                data['dataProvider'] = this._dependenciesData['serviceAvailability'];
                break;
            case 1:
                data['dataProvider'] = this._dependenciesData['serviceAllot'];
                break;
            case 2:
                data['dataProvider'] = this._dependenciesData['servicePrice'];
                break;
            case 3:
                data['dataProvider'] = this._dependenciesData['serviceSupplement'];
                break;
            case 4:
                data['dataProvider'] = this._dependenciesData['serviceDiscount'];
                break;
            case 5:
                data['dataProvider'] = this._dependenciesData['serviceBonus'];
                break;
        }

        return data;
    }

    /**
     * Get nav providers (to lazy load components in container with dependency injection)
     * @param index (index to load)
     * @param data (data to resolve all providers)
     * @returns {Array}
     */
    public getNavProviders(index: number, data = null): any
    {
        let providers: any[] = [
            FormService,
            {provide: 'DataService', useClass: DataService},
            ActionsService,
            {provide: 'DataServiceProvider', useValue: this._helperService.getDataServiceProvider(data)},
            {provide: 'Provider', useValue: this._helperService.getDataBoxProvider(data)},
            {provide: 'ActionsServiceProvider', useValue: this._helperService.getActionsServiceProvider(data)}
        ];

        switch (index) {
            case 0:
                providers.push({provide: 'Popups', useValue: {
                    module: ServiceAvailabilityPopupModule,
                    component: 'ServiceAvailabilityPopupComponent',
                    providers: [{provide: 'Provider', useValue: this._helperService.getFormProvider(data)}]
                }});
                break;
            case 1:
                providers.push({provide: 'Popups', useValue: {
                    module: ServiceAllotPopupModule,
                    component: 'ServiceAllotPopupComponent',
                    providers: [{provide: 'Provider', useValue: this._helperService.getFormProvider(data)}]
                }});
                break;
            case 2:
                providers.push({provide: 'Popups', useValue: {
                    module: ServicePricePopupModule,
                    component: 'ServicePricePopupComponent',
                    providers: [{provide: 'Provider', useValue: this._helperService.getFormProvider(data)}]
                }});
                break;
            case 3:
                providers.push({provide: 'Popups', useValue: {
                    module: ServiceSupplementPopupModule,
                    component: 'ServiceSupplementPopupComponent',
                    providers: [{provide: 'Provider', useValue: this._helperService.getFormProvider(data)}]
                }});
                break;
            case 4:
                providers.push({provide: 'Popups', useValue: {
                    module: ServiceDiscountPopupModule,
                    component: 'ServiceDiscountPopupComponent',
                    providers: [{provide: 'Provider', useValue: this._helperService.getFormProvider(data)}]
                }});
                break;
            case 5:
                providers.push({provide: 'Popups', useValue: {
                    module: ServiceBonusPopupModule,
                    component: 'ServiceBonusPopupComponent',
                    providers: [{provide: 'Provider', useValue: this._helperService.getFormProvider(data)}]
                }});
                break;
        }

        return providers;
    }
}