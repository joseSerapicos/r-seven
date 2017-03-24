import {Component, ElementRef, Injector, Inject, Renderer, ViewContainerRef} from '@angular/core';
import {DataService} from '../../../../../../AppBundle/Resources/public/ts/data-service/data.service';
import {ActionsService} from '../../../../../../AppBundle/Resources/public/ts/actions/actions.service';
import {Helper} from '../../../../../../AppBundle/Resources/public/ts/helper';
import {ModalService} from '../../../../../../AppBundle/Resources/public/modal/ts/modal.service';
import {NavManagerService} from '../../../../../../AppBundle/Resources/public/ts/nav-manager/nav-manager.service';
import {FormService} from '../../../../../../AppBundle/Resources/public/ts/form/form.service';
import {TabsComponent, ITabs, LazyLoadData} from '../../../../../../AppBundle/Resources/public/ts/tabs/tabs.component';

/* Import dependencies */
// Save last templateUrl
let tmpTemplateUrl = Helper.getRuntimeVar('templateUrl');

// EntityGroupEntity
Helper.setRuntimeVar('templateUrl', _app.dependency['entityGroupEntity']['route']['edit']['url']);
import {MainExtensionModule as EntityGroupEntityModule} from '../../../entity-group-entity/ts/main.extension-module';

// Restore last templateUrl
Helper.setRuntimeVar('templateUrl', tmpTemplateUrl);
/* /Import dependencies */


@Component({
    selector: '#js_main',
    templateUrl: Helper.getGlobalVar('route') + 'entities/entity-group/detail-tabs'
})
export class MainComponent extends TabsComponent implements ITabs
{
    protected _dependenciesData: any[];

    constructor(
        elementRef: ElementRef,
        renderer: Renderer,
        @Inject('Provider') provider: any,
        @Inject('HelperService') helperService: any,
        navManagerService: NavManagerService,
        protected _modalService: ModalService,
        protected viewContainerRef: ViewContainerRef
    ) {
        super(
            elementRef,
            renderer,
            provider,
            helperService,
            navManagerService
        );

        this._modalService.init(viewContainerRef);
        this._dependenciesData = this._helperService.getGlobalVar('dependency');
    }
    
    /**
     * Get navigation data (needed data to lazy load container)
     * @param index (index to load)
     * @returns NavData
     */
    public getNavData(index: number): LazyLoadData
    {
        switch (index) {
            case 0:
                return {
                    module: EntityGroupEntityModule,
                    component: 'MainComponent',
                    dataProvider: this._dependenciesData['entityGroupEntity']
                }
        }

        return null;
    }

    /**
     * Get nav providers (to lazy load components in container with dependency injection)
     * @param index (index to load)
     * @param data (data to resolve all providers)
     * @returns {Array}
     */
    public getNavProviders(index: number, data = null): any
    {
        let providers = [];

        switch (index) {
            case 0:
                providers = [
                    FormService,
                    {provide: 'Provider', useValue: this._helperService.getDataBoxProvider(data)},
                    {provide: 'AutoCompleteProviders', useValue: {
                        entityObj: {
                            urlConf: (Helper.getGlobalVar('route') + 'entities/entity/conf'),
                            control: 'save'
                        }
                    }}
                ];
                break;
        }

        providers = providers.concat([
            {provide: 'DataService', useClass: DataService},
            ActionsService,
            {provide: 'Popups', useValue: null},
            {provide: 'DataServiceProvider', useValue: this._helperService.getDataServiceProvider(data)},
            {provide: 'ActionsServiceProvider', useValue: this._helperService.getActionsServiceProvider(data)}
        ]);

        return providers;
    }

    /**
     * Lifecycle callback
     */
    ngAfterViewInit()
    {
        super.ngAfterViewInit();

        // Open the first tab
        this._navManagerService.navTo(0);
    }
}