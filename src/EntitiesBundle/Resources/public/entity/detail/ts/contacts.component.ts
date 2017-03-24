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
    ? (Helper.getGlobalVar('conf')['object']['entityObj'] // For entities descendants of "Entity"
        || Helper.getGlobalVar('conf')['object']['id']) // For raw "Entity"
    : 0;

// EntityAddress
Helper.setRuntimeVar('templateUrl', Helper.getGlobalVar('route') + 'entities/entity-address/edit/' + parentId);
import {EntityAddressPopupModule} from './entity-address-popup.module';

// EntityPhone
Helper.setRuntimeVar('templateUrl', Helper.getGlobalVar('route') + 'entities/entity-phone/edit/' + parentId);
import {EntityPhonePopupModule} from './entity-phone-popup.module';

// EntityEmail
Helper.setRuntimeVar('templateUrl', Helper.getGlobalVar('route') + 'entities/entity-email/edit/' + parentId);
import {EntityEmailPopupModule} from './entity-email-popup.module';

// EntityLink
Helper.setRuntimeVar('templateUrl', Helper.getGlobalVar('route') + 'entities/entity-link/edit/' + parentId);
import {EntityLinkPopupModule} from './entity-link-popup.module';

// Restore last templateUrl
Helper.setRuntimeVar('templateUrl', tmpTemplateUrl);
/* /Import dependencies */


@Component({
    selector: '.js_contacts',
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
                data['dataProvider'] = (this._dependenciesData['entityAddress']
                    ? this._dependenciesData['entityAddress'] : null);
                data['urlProvider'] = (this._helperService.getGlobalVar('route')
                    + 'entities/entity-address/conf/' + parentId);
                break;
            case 1:
                data['dataProvider'] = (this._dependenciesData['entityPhone']
                    ? this._dependenciesData['entityPhone'] : null);
                data['urlProvider'] = (this._helperService.getGlobalVar('route')
                    + 'entities/entity-phone/conf/' + parentId);
                break;
            case 2:
                data['dataProvider'] = (this._dependenciesData['entityEmail']
                    ? this._dependenciesData['entityEmail'] : null);
                data['urlProvider'] = (this._helperService.getGlobalVar('route')
                    + 'entities/entity-email/conf/' + parentId);
                break;
            case 3:
                data['dataProvider'] = (this._dependenciesData['entityLink']
                    ? this._dependenciesData['entityLink'] : null);
                data['urlProvider'] = (this._helperService.getGlobalVar('route')
                    + 'entities/entity-link/conf/' + parentId);
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
                    module: EntityAddressPopupModule,
                    component: 'EntityAddressPopupComponent',
                    providers: [{provide: 'Provider', useValue: this._helperService.getFormProvider(data)}]
                }});
                break;
            case 1:
                providers.push({provide: 'Popups', useValue: {
                    module: EntityPhonePopupModule,
                    component: 'EntityPhonePopupComponent',
                    providers: [{provide: 'Provider', useValue: this._helperService.getFormProvider(data)}]
                }});
                break;
            case 2:
                providers.push({provide: 'Popups', useValue: {
                    module: EntityEmailPopupModule,
                    component: 'EntityEmailPopupComponent',
                    providers: [{provide: 'Provider', useValue: this._helperService.getFormProvider(data)}]
                }});
                break;
            case 3:
                providers.push({provide: 'Popups', useValue: {
                    module: EntityLinkPopupModule,
                    component: 'EntityLinkPopupComponent',
                    providers: [{provide: 'Provider', useValue: this._helperService.getFormProvider(data)}]
                }});
                break;
        }

        return providers;
    }
}