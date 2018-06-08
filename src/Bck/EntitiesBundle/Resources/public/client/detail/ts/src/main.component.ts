import {Component, ElementRef, Inject, Renderer, QueryList, ViewContainerRef, ViewChildren} from '@angular/core';
import {DataService} from '../../../../../../../../AppBundle/Resources/public/ts/data-service/data.service';
import {ActionsService} from '../../../../../../../../AppBundle/Resources/public/ts/actions/actions.service';
import {Helper} from '../../../../../../../../AppBundle/Resources/public/ts/helper';
import {ModalService} from '../../../../../../../../AppBundle/Resources/public/modal/ts/modal.service';
import {FormService} from '../../../../../../../../AppBundle/Resources/public/form/ts/form.service';
import {NavManagerService} from '../../../../../../../../AppBundle/Resources/public/ts/nav-manager/nav-manager.service';
import {LazyLoadData} from '../../../../../../../../AppBundle/Resources/public/tabs/ts/src/tabs.component';
import {MainComponent as EntityDetailComponent} from '../../../../entity/detail/ts/src/main.component';


// Parent id for dependencies
var parentId = (
    Helper.getAppVar('conf')['object']['entityObj'] // For entities bases on "Entity"
    || Helper.getAppVar('conf')['object']['id'] // For raw "Entity"
);

// User (password)
import {EditLoginExtModule as UserEditLoginExtModule} from '../../../../../../../../LoginBundle/Resources/public/user/index/ts/src/edit-login.ext-module';


@Component({
    selector: '.js_app',
    templateUrl: '../templates/main.component.html'
})
export class MainComponent extends EntityDetailComponent
{
    constructor(
        elementRef: ElementRef,
        renderer: Renderer,
        @Inject('Provider') provider: any,
        @Inject('HelperService') helperService: any,
        navManagerService: NavManagerService,
        modalService: ModalService,
        viewContainerRef: ViewContainerRef
    ) {
        super(
            elementRef,
            renderer,
            provider,
            helperService,
            navManagerService,
            modalService,
            viewContainerRef
        );
    }

    /**
     * Get navigation data (needed data to lazy load container)
     * @param index (index to load)
     * @returns NavData
     */
    public getNavData(index: number): LazyLoadData
    {
        if (index < 5) {
            return super.getNavData(index);
        }

        switch (index) {
            case 5:
                return {
                    module: UserEditLoginExtModule,
                    component: 'EditLoginComponent',
                    urlProvider: (this._helperService.getAppVar('route') + 'login/user/conf/' + parentId + '/1')
                };
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
        if (index < 5) {
            return super.getNavProviders(index, data);
        }

        let providers = [];

        switch (index) {
            case 5:
                return [
                    {provide: 'DataService', useClass: DataService},
                    {provide: 'DataServiceProvider', useValue: this._helperService.getDataServiceProvider(data)},
                    FormService,
                    {provide: 'FormServiceProvider', useValue: {fields: ['username', 'password', 'isSent']}},
                    {provide: 'Provider', useValue: this._helperService.getFormProvider(data)}
                ];
        }

        return providers;
    }
}