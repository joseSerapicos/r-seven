import {Component, ElementRef, Injector, Inject, Renderer, ViewContainerRef} from '@angular/core';
import {DataService} from '../../../../../../../../AppBundle/Resources/public/ts/data-service/data.service';
import {TreeViewDataService} from '../../../../../../../../AppBundle/Resources/public/ts/data-service/tree-view-data.service';
import {ActionsService} from '../../../../../../../../AppBundle/Resources/public/ts/actions/actions.service';
import {ModalService} from '../../../../../../../../AppBundle/Resources/public/modal/ts/modal.service';
import {NavManagerService} from '../../../../../../../../AppBundle/Resources/public/ts/nav-manager/nav-manager.service';
import {FormService} from '../../../../../../../../AppBundle/Resources/public/form/ts/form.service';
import {TabsComponent, ITabs, LazyLoadData} from '../../../../../../../../AppBundle/Resources/public/tabs/ts/src/tabs.component';

// UserGroupAclMenu
import {UserGroupAclMenuExtModule} from './user-group-acl-menu.ext-module';
// UserGroupAclUser
import {MainExtModule as UserGroupAclUserExtModule} from '../../../../user-group-acl-user/index/ts/src/main.ext-module';


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
        this._dependenciesData = this._helperService.getAppVar('dependencies');
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
                    module: UserGroupAclMenuExtModule,
                    component: 'UserGroupAclMenuComponent',
                    dataProvider: this._dependenciesData['userGroupAclMenu']
                };
            case 1:
                return {
                    module: UserGroupAclUserExtModule,
                    component: 'MainComponent',
                    dataProvider: this._dependenciesData['userGroupAclUser']
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
                    {provide: 'DataService', useClass: TreeViewDataService},
                    {provide: 'DataServiceProvider', useValue: this._helperService.getTreeViewDataServiceProvider(data)},
                    {provide: 'Provider', useValue: this._helperService.getTreeViewProvider(data)}
                ];
                break;
            case 1:
                providers = [
                    {provide: 'DataService', useClass: DataService},
                    {provide: 'DataServiceProvider', useValue: this._helperService.getDataServiceProvider(data)},
                    FormService,
                    {provide: 'Provider', useValue: this._helperService.getDataBoxProvider(data)},
                    {provide: 'LegendProvider', useValue: this._helperService.getLegendProvider(data)},
                    {provide: 'AutoCompleteProviders', useValue: {
                        userObj: {
                            urlConf: (this._helperService.getAppVar('route') + 'bck/admin/user/conf'),
                            urlChoicesParams: '1',
                            control: 'save'
                        }
                    }}
                ];
                break;
        }

        providers = providers.concat([
            ActionsService,
            {provide: 'Popups', useValue: null},
            {provide: 'ActionsServiceProvider', useValue: this._helperService.getActionsServiceProvider(data)}
        ]);

        return providers;
    }
}