import {Component, Optional, ElementRef, Inject, Renderer, QueryList, ViewContainerRef, ViewChildren} from '@angular/core';
import {Helper} from './../../../../../AppBundle/Resources/public/ts/helper';
import {BaseComponent} from './../../../../../AppBundle/Resources/public/ts/base/base.component';
import {NavManagerService, INavManager as IAccordion, LazyLoadData} from '../../ts/nav-manager/nav-manager.service';

// Reexports
export {IAccordion, LazyLoadData};


@Component({
    selector: 'js_accordion',
    templateUrl: Helper.getRuntimeVar('templateUrl')
})
export abstract class AccordionComponent extends BaseComponent {
    // For NavManagerService
    @ViewChildren('js_lazyLoadContainer', {read: ViewContainerRef}) lazyLoadViewContainerRefQL: QueryList<ViewContainerRef>;

    constructor(
        elementRef: ElementRef,
        renderer: Renderer,
        @Optional() @Inject('Provider') provider: any,
        @Inject('HelperService') protected _helperService: any,
        protected _navManagerService: NavManagerService
    ) {
        super(
            elementRef,
            renderer,
            provider || null
        );
    }

    /**
     * Lifecycle callback
     */
    ngAfterViewInit()
    {
        // Initializes the children navigation manager service
        this._navManagerService.init(this, this.lazyLoadViewContainerRefQL);
    }
}