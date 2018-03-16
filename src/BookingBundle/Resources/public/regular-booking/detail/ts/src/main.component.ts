import {Component, ElementRef, Injector, Inject, Renderer, QueryList, ViewContainerRef, ViewChildren} from '@angular/core';
import {DataService} from '../../../../../../../AppBundle/Resources/public/ts/data-service/data.service';
import {ModalService} from '../../../../../../../AppBundle/Resources/public/modal/ts/modal.service';
import {NavManagerService} from '../../../../../../../AppBundle/Resources/public/ts/nav-manager/nav-manager.service';
import {MainComponent as BaseBookingDetailComponent, BaseBookingDetailProvider} from '../../../../base-booking/detail/ts/src/main.component';


@Component({
    selector: '.js_app',
    templateUrl: '../templates/main.component.html'
})
export class MainComponent extends BaseBookingDetailComponent
{
    constructor(
        elementRef: ElementRef,
        renderer: Renderer,
        @Inject('Provider') provider: BaseBookingDetailProvider,
        @Inject('HelperService') helperService: any,
        navManagerService: NavManagerService,
        modalService: ModalService,
        viewContainerRef: ViewContainerRef,
        @Inject('DataService') dataService: any,
        injector: Injector
    ) {
        super(
            elementRef,
            renderer,
            provider,
            helperService,
            navManagerService,
            modalService,
            viewContainerRef,
            dataService,
            injector
        );
    }
}