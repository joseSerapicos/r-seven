import {Component, Optional, ElementRef, Inject, Injector, Renderer, QueryList, ViewContainerRef, ViewChildren} from '@angular/core';
import {ModalService} from '../../../../../../../AppBundle/Resources/public/modal/ts/modal.service';
import {NavManagerService} from '../../../../../../../AppBundle/Resources/public/ts/nav-manager/nav-manager.service';
import {MainComponent as BaseServiceComponent, BaseServiceProvider} from '../../../../base-service/detail/ts/src/main.component';


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
}