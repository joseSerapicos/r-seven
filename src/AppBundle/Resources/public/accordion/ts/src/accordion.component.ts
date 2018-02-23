import {Component, ElementRef, Inject, Renderer, QueryList, ViewContainerRef, ViewChildren, Optional} from '@angular/core';
import {BaseComponent, BaseProvider} from '../../../../../../AppBundle/Resources/public/ts/base/base.component';
import {NavManagerService, INavManager as IAccordion, LazyLoadData} from '../../../ts/nav-manager/nav-manager.service';

// Reexports
export {IAccordion, LazyLoadData, BaseProvider};


@Component({
    selector: 'js_accordion',
    template: '' // Define template in child component
})
export abstract class AccordionComponent extends BaseComponent {
    // For NavManagerService
    @ViewChildren('js_lazyLoadContainer', {read: ViewContainerRef}) lazyLoadViewContainerRefQL: QueryList<ViewContainerRef>;

    constructor(
        elementRef: ElementRef,
        renderer: Renderer,
        @Optional() @Inject('Provider') provider: BaseProvider,
        @Inject('HelperService') protected _helperService: any,
        protected _navManagerService: NavManagerService
    ) {
        super(
            elementRef,
            renderer,
            provider || {}
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