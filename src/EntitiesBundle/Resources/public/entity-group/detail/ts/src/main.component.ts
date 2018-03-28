import {Component, ElementRef, Injector, Inject, Renderer, ViewContainerRef} from '@angular/core';
import {DataService} from '../../../../../../../AppBundle/Resources/public/ts/data-service/data.service';
import {ActionsService} from '../../../../../../../AppBundle/Resources/public/ts/actions/actions.service';
import {Helper} from '../../../../../../../AppBundle/Resources/public/ts/helper';
import {ModalService} from '../../../../../../../AppBundle/Resources/public/modal/ts/modal.service';
import {NavManagerService} from '../../../../../../../AppBundle/Resources/public/ts/nav-manager/nav-manager.service';
import {FormService} from '../../../../../../../AppBundle/Resources/public/form/ts/form.service';
import {TabsComponent, ITabs, LazyLoadData} from '../../../../../../../AppBundle/Resources/public/tabs/ts/src/tabs.component';

// EntityGroupEntity
Helper.setGlobalVar('templateUrl', _app.dependency['entityGroupEntity']['route']['edit']['url']);
import {EditExtModule as EntitiesEntityGroupEntityEditExtModule} from '../../../../entity-group-entity/index/ts/src/edit.ext-module';


@Component({
    selector: '.js_app',
    templateUrl: '../templates/main.component.html'
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
        this._dependenciesData = this._helperService.getAppVar('dependency');
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
                    module: EntitiesEntityGroupEntityEditExtModule,
                    component: 'EditComponent',
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
                    {provide: 'LegendProvider', useValue: this._helperService.getLegendProvider(data)},
                    {provide: 'AutoCompleteProviders', useValue: {
                        entityObj: {
                            urlConf: (Helper.getAppVar('route') + 'entities/entity/conf'),
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