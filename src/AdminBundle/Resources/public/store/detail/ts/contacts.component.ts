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
var parentId = Helper.getGlobalVar('conf')['object']
    ? Helper.getGlobalVar('conf')['object']['id']
    : 0;

// StorePhone
Helper.setRuntimeVar('templateUrl', Helper.getGlobalVar('route') + 'admin/store-phone/edit/' + parentId);
import {StorePhonePopupModule} from './store-phone-popup.module';

// StoreEmail
Helper.setRuntimeVar('templateUrl', Helper.getGlobalVar('route') + 'admin/store-email/edit/' + parentId);
import {StoreEmailPopupModule} from './store-email-popup.module';

// StoreLink
Helper.setRuntimeVar('templateUrl', Helper.getGlobalVar('route') + 'admin/store-link/edit/' + parentId);
import {StoreLinkPopupModule} from './store-link-popup.module';

// Restore last templateUrl
Helper.setRuntimeVar('templateUrl', tmpTemplateUrl);
/* /Import dependencies */


@Component({
    selector: 'js_contacts',
    templateUrl: Helper.getRuntimeVar('templateUrl')
})
export class ContactsComponent extends AccordionComponent implements IAccordion
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
                data['dataProvider'] = this._dependenciesData['storePhone'];
                break;
            case 1:
                data['dataProvider'] = this._dependenciesData['storeEmail'];
                break;
            case 2:
                data['dataProvider'] = this._dependenciesData['storeLink'];
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
                    module: StorePhonePopupModule,
                    component: 'StorePhonePopupComponent',
                    providers: [{provide: 'Provider', useValue: this._helperService.getFormProvider(data)}]
                }});
                break;
            case 1:
                providers.push({provide: 'Popups', useValue: {
                    module: StoreEmailPopupModule,
                    component: 'StoreEmailPopupComponent',
                    providers: [{provide: 'Provider', useValue: this._helperService.getFormProvider(data)}]
                }});
                break;
            case 2:
                providers.push({provide: 'Popups', useValue: {
                    module: StoreLinkPopupModule,
                    component: 'StoreLinkPopupComponent',
                    providers: [{provide: 'Provider', useValue: this._helperService.getFormProvider(data)}]
                }});
                break;
        }

        return providers;
    }
}