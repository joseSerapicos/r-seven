import {Component, ElementRef, Inject, Renderer, QueryList, ViewContainerRef, ViewChildren, Optional} from '@angular/core';
import {Helper} from '../../../../../../../../AppBundle/Resources/public/ts/helper';
import {AccordionComponent, IAccordion, LazyLoadData, BaseProvider} from '../../../../../../../../AppBundle/Resources/public/accordion/ts/src/accordion.component';
import {NavManagerService} from '../../../../../../../../AppBundle/Resources/public/ts/nav-manager/nav-manager.service';
import {FormService} from '../../../../../../../../AppBundle/Resources/public/form/ts/form.service';
import {DataBoxExtensionModule} from '../../../../../../../../AppBundle/Resources/public/data-box/ts/src/data-box.extension-module';
import {DataService} from '../../../../../../../../AppBundle/Resources/public/ts/data-service/data.service';
import {ActionsService} from '../../../../../../../../AppBundle/Resources/public/ts/actions/actions.service';

// Parent id for dependencies
var parentId = Helper.getAppVar('conf')['object']
    ? (Helper.getAppVar('conf')['object']['entityObj'] // For entities descendants of "Entity"
        || Helper.getAppVar('conf')['object']['id']) // For raw "Entity"
    : 0;

// EntityAddress
import {EntityAddressEditExtModule} from './entity-address-edit.ext-module';
// EntityPhone
import {EntityPhoneEditExtModule} from './entity-phone-edit.ext-module';
// EntityEmail
import {EntityEmailEditExtModule} from './entity-email-edit.ext-module';
// EntityLink
import {EntityLinkEditExtModule} from './entity-link-edit.ext-module';


@Component({
    selector: '.js_contacts',
    templateUrl: '../templates/contacts.component.html'
})
export class ContactsComponent extends AccordionComponent implements IAccordion
{
    // For NavManagerService
    @ViewChildren('js_lazyLoadContainer', {read: ViewContainerRef}) lazyLoadViewContainerRefQL: QueryList<ViewContainerRef>;

    protected _dependenciesData: any[];

    constructor(
        elementRef: ElementRef,
        renderer: Renderer,
        @Optional() @Inject('Provider') provider: BaseProvider,
        @Inject('HelperService') helperService: any,
        navManagerService: NavManagerService
    ) {
        super(
            elementRef,
            renderer,
            provider || {},
            helperService,
            navManagerService
        );
        
        this._dependenciesData = (this._helperService.getAppVar('dependencies') || []);
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
                data['urlProvider'] = (this._helperService.getAppVar('route')
                    + 'bck/entities/entity-address/conf/' + parentId);
                break;
            case 1:
                data['dataProvider'] = (this._dependenciesData['entityPhone']
                    ? this._dependenciesData['entityPhone'] : null);
                data['urlProvider'] = (this._helperService.getAppVar('route')
                    + 'bck/entities/entity-phone/conf/' + parentId);
                break;
            case 2:
                data['dataProvider'] = (this._dependenciesData['entityEmail']
                    ? this._dependenciesData['entityEmail'] : null);
                data['urlProvider'] = (this._helperService.getAppVar('route')
                    + 'bck/entities/entity-email/conf/' + parentId);
                break;
            case 3:
                data['dataProvider'] = (this._dependenciesData['entityLink']
                    ? this._dependenciesData['entityLink'] : null);
                data['urlProvider'] = (this._helperService.getAppVar('route')
                    + 'bck/entities/entity-link/conf/' + parentId);
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
            {provide: 'LegendProvider', useValue: Helper.getLegendProvider(_app.conf)}
        ];

        switch (index) {
            case 0:
                providers.push({provide: 'Popups', useValue: {
                    module: EntityAddressEditExtModule,
                    component: 'EntityAddressEditComponent',
                    providers: [{provide: 'Provider', useValue: this._helperService.getFormProvider(data)}]
                }});
                break;
            case 1:
                providers.push({provide: 'Popups', useValue: {
                    module: EntityPhoneEditExtModule,
                    component: 'EntityPhoneEditComponent',
                    providers: [{provide: 'Provider', useValue: this._helperService.getFormProvider(data)}]
                }});
                break;
            case 2:
                providers.push({provide: 'Popups', useValue: {
                    module: EntityEmailEditExtModule,
                    component: 'EntityEmailEditComponent',
                    providers: [{provide: 'Provider', useValue: this._helperService.getFormProvider(data)}]
                }});
                break;
            case 3:
                providers.push({provide: 'Popups', useValue: {
                    module: EntityLinkEditExtModule,
                    component: 'EntityLinkEditComponent',
                    providers: [{provide: 'Provider', useValue: this._helperService.getFormProvider(data)}]
                }});
                break;
        }

        return providers;
    }
}