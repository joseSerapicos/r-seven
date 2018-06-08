import {Component, Optional, ElementRef, Inject, Injector, Renderer, QueryList, ViewContainerRef, ViewChildren} from '@angular/core';
import {NavManagerService} from '../../../../../../../../AppBundle/Resources/public/ts/nav-manager/nav-manager.service';
import {DataService} from '../../../../../../../../AppBundle/Resources/public/ts/data-service/data.service';
import {CurrentAccountsComponent as BaseBookingDetailCurrentAccountsComponent} from '../../../../base-booking/detail/ts/src/current-accounts.component';


@Component({
    selector: '.js_currentAccounts',
    templateUrl: '../templates/current-accounts.component.html'
})
export class CurrentAccountsComponent extends BaseBookingDetailCurrentAccountsComponent
{
    constructor(
        elementRef: ElementRef,
        renderer: Renderer,
        @Optional() @Inject('Provider') provider: any,
        @Inject('HelperService') helperService: any,
        navManagerService: NavManagerService,
        @Inject('DataService') dataService: any,
        injector: Injector
    ) {
        super(
            elementRef,
            renderer,
            provider || null,
            helperService,
            navManagerService,
            dataService,
            injector
        );
    }
}