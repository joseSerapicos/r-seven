import {Component, Optional, ElementRef, Inject, Renderer, QueryList, ViewContainerRef, ViewChildren} from '@angular/core';
import {AccordionComponent, IAccordion, LazyLoadData, BaseProvider} from '../../../../../../../AppBundle/Resources/public/accordion/ts/src/accordion.component';
import {NavManagerService} from '../../../../../../../AppBundle/Resources/public/ts/nav-manager/nav-manager.service';
import {Helper} from '../../../../../../../AppBundle/Resources/public/ts/helper';
import {FormService} from '../../../../../../../AppBundle/Resources/public/form/ts/form.service';
import {DataBoxExtensionModule} from '../../../../../../../AppBundle/Resources/public/data-box/ts/src/data-box.extension-module';
import {DataService} from '../../../../../../../AppBundle/Resources/public/ts/data-service/data.service';
import {ActionsService} from '../../../../../../../AppBundle/Resources/public/ts/actions/actions.service';


// Interface provider
export interface BaseServicePriceProvider extends BaseProvider {
    modules: { // Put here modules dependencies
        serviceAvailabilityEdit: {module: any, component: string},
        serviceAllotEdit: {module: any, component: string},
        servicePriceEdit: {module: any, component: string},
        serviceFixedCostEdit: {module: any, component: string},
        serviceSupplementEdit: {module: any, component: string},
        serviceDiscountEdit: {module: any, component: string},
        serviceBonusEdit: {module: any, component: string}
    }
}


// Parent id for dependencies
var parentId = Helper.getAppVar('conf')['object']['serviceObj'];


@Component({
    selector: '.js_controls',
    template: '' // Define template in child component
})
export class PriceComponent extends AccordionComponent implements IAccordion
{
    // For NavManagerService
    @ViewChildren('js_lazyLoadContainer', {read: ViewContainerRef}) lazyLoadViewContainerRefQL: QueryList<ViewContainerRef>;

    protected _dependenciesData: any[];

    constructor(
        elementRef: ElementRef,
        renderer: Renderer,
        @Optional() @Inject('Provider') provider: BaseServicePriceProvider,
        @Inject('HelperService') helperService: any,
        navManagerService: NavManagerService,
        @Inject('DataService') protected _dataService: any
    ) {
        super(
            elementRef,
            renderer,
            provider || null,
            helperService,
            navManagerService
        );
        
        this._dependenciesData = (this._helperService.getAppVar('dependency') || []);

        // @TODO remove this when detail entity is dynamic
        // Set object to DataService
        this._dataService.setObject(this._dataService.getProviderAttr('object'));
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
                data['urlProvider'] = (this._helperService.getAppVar('route') + 'services/service-availability/data/' + parentId);
                break;
            case 1:
                data['urlProvider'] = (this._helperService.getAppVar('route') + 'services/service-allot/data/' + parentId);
                break;
            case 2:
                data['urlProvider'] = (this._helperService.getAppVar('route') + 'services/service-price/data/' + parentId);
                break;
            case 3:
                data['urlProvider'] = (this._helperService.getAppVar('route') + 'services/service-fixed-cost/data/' + parentId);
                break;
            case 4:
                data['urlProvider'] = (this._helperService.getAppVar('route') + 'services/service-supplement/data/' + parentId);
                break;
            case 5:
                data['urlProvider'] = (this._helperService.getAppVar('route') + 'services/service-discount/data/' + parentId);
                break;
            case 6:
                data['urlProvider'] = (this._helperService.getAppVar('route') + 'services/service-bonus/data/' + parentId);
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
            {provide: 'ActionsServiceProvider', useValue: this._helperService.getActionsServiceProvider(data)},
            {provide: 'LegendProvider', useValue: this._helperService.getLegendProvider(data)}
        ];

        switch (index) {
            case 0:
                providers.push({provide: 'Popups', useValue: {
                    module: this._provider['modules']['serviceAvailabilityEdit']['module'],
                    component: this._provider['modules']['serviceAvailabilityEdit']['component'],
                    providers: [{provide: 'Provider', useValue: this._helperService.getFormProvider(data)}]
                }});
                break;
            case 1:
                providers.push({provide: 'Popups', useValue: {
                    module: this._provider['modules']['serviceAllotEdit']['module'],
                    component: this._provider['modules']['serviceAllotEdit']['component'],
                    providers: [{provide: 'Provider', useValue: this._helperService.getFormProvider(data)}]
                }});
                break;
            case 2:
                providers.push({provide: 'Popups', useValue: {
                    module: this._provider['modules']['servicePriceEdit']['module'],
                    component: this._provider['modules']['servicePriceEdit']['component'],
                    providers: [{provide: 'Provider', useValue: this._helperService.getFormProvider(data)}]
                }});
                break;
            case 3:
                providers.push({provide: 'Popups', useValue: {
                    module: this._provider['modules']['serviceFixedCostEdit']['module'],
                    component: this._provider['modules']['serviceFixedCostEdit']['component'],
                    providers: [
                        {provide: 'Provider', useValue: this._helperService.getFormProvider(data)},
                        {provide: 'ParentDataService', useValue: this._dataService}
                    ]
                }});
                break;
            case 4:
                providers.push({provide: 'Popups', useValue: {
                    module: this._provider['modules']['serviceSupplementEdit']['module'],
                    component: this._provider['modules']['serviceSupplementEdit']['component'],
                    providers: [{provide: 'Provider', useValue: this._helperService.getFormProvider(data)}]
                }});
                break;
            case 5:
                providers.push({provide: 'Popups', useValue: {
                    module: this._provider['modules']['serviceDiscountEdit']['module'],
                    component: this._provider['modules']['serviceDiscountEdit']['component'],
                    providers: [{provide: 'Provider', useValue: this._helperService.getFormProvider(data)}]
                }});
                break;
            case 6:
                providers.push({provide: 'Popups', useValue: {
                    module: this._provider['modules']['serviceBonusEdit']['module'],
                    component: this._provider['modules']['serviceBonusEdit']['component'],
                    providers: [{provide: 'Provider', useValue: this._helperService.getFormProvider(data)}]
                }});
                break;
        }

        return providers;
    }
}