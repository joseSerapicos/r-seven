import {Component, Optional, ElementRef, Inject, Injector, Renderer, QueryList, ViewContainerRef, ViewChildren} from '@angular/core';
import {DataService} from '../../../../../../../AppBundle/Resources/public/ts/data-service/data.service';
import {ActionsService} from '../../../../../../../AppBundle/Resources/public/ts/actions/actions.service';
import {Helper} from '../../../../../../../AppBundle/Resources/public/ts/helper';
import {ModalService} from '../../../../../../../AppBundle/Resources/public/modal/ts/modal.service';
import {FormService} from '../../../../../../../AppBundle/Resources/public/form/ts/form.service';
import {NavManagerService} from '../../../../../../../AppBundle/Resources/public/ts/nav-manager/nav-manager.service';
import {LazyLoadData} from '../../../../../../../AppBundle/Resources/public/tabs/ts/src/tabs.component';
import {MainComponent as BaseServiceComponent, BaseServiceProvider} from '../../../../base-service/detail/ts/src/main.component';


/* Import dependencies */

// Parent id for dependencies
var parentId = Helper.getAppVar('conf')['object']['id'];

// PackageServiceService
import {MainExtModule as PackageServiceServiceExtModule} from '../../../../package-service-service/index/ts/src/main.ext-module';
import {EditExtModule as PackageServiceServiceEditExtModule} from '../../../../package-service-service/index/ts/src/edit.ext-module';

/* /Import dependencies */


@Component({
    selector: '.js_app',
    templateUrl: '../templates/main.component.html'
})
export class MainComponent extends BaseServiceComponent
{
    constructor(
        elementRef: ElementRef,
        renderer: Renderer,
        @Optional() @Inject('Provider') provider: BaseServiceProvider,
        @Inject('HelperService') helperService: any,
        navManagerService: NavManagerService,
        modalService: ModalService,
        viewContainerRef: ViewContainerRef,
        injector: Injector
    ) {
        super(
            elementRef,
            renderer,
            (provider || null),
            helperService,
            navManagerService,
            modalService,
            viewContainerRef,
            injector
        );
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
                    module: PackageServiceServiceExtModule,
                    component: 'MainComponent',
                    dataProvider: this._dependenciesData['packageServiceService']
                };
        }

        // Fallback to parent with changed index
        return super.getNavData(index - 1);
    }

    /**
     * Get nav providers (to lazy load components in container with dependency injection)
     * @param index (index to load)
     * @param data (data to resolve all providers)
     * @returns {Array}
     */
    public getNavProviders(index: number, data = null): any
    {
        switch (index) {
            case 0:
                return [
                    {provide: 'DataService', useClass: DataService},
                    ActionsService,
                    {provide: 'DataServiceProvider', useValue: this._helperService.getDataServiceProvider(data)},
                    {provide: 'ActionsServiceProvider', useValue: this._helperService.getActionsServiceProvider(data)},
                    {provide: 'LegendProvider', useValue: this._helperService.getLegendProvider(data)},
                    {provide: 'Provider', useValue: this._helperService.getDataBoxProvider(data)},
                    {provide: 'Popups', useValue: {
                        module: PackageServiceServiceEditExtModule,
                        component: 'EditComponent',
                        providers: [
                            FormService,
                            {provide: 'Provider', useValue: this._helperService.getFormProvider(data)}
                        ]
                    }}
                ];
        }

        // Fallback to parent with changed index
        return super.getNavProviders(index - 1, data);
    }
}