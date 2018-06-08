import {Component, ElementRef, Renderer, QueryList, ViewContainerRef, ViewChildren} from '@angular/core';
import {BoxExtensionComponent, BoxProvider} from '../../../../../../../AppBundle/Resources/public/ts/box/box.extension-component';
import {NavManagerService, INavManager as IAccordion, LazyLoadData} from '../../../ts/nav-manager/nav-manager.service';

// Reexports
export {IAccordion, LazyLoadData};


@Component({
    selector: 'js_accordion',
    template: ''
})
export abstract class AccordionBoxExtComponent extends BoxExtensionComponent {
    // For NavManagerService
    @ViewChildren('js_lazyLoadContainer', {read: ViewContainerRef}) lazyLoadViewContainerRefQL: QueryList<ViewContainerRef>;

    // Constructor vars
    protected _helperService: any;
    protected _navManagerService: NavManagerService;

    constructor() { super(); }

    public initAccordionBoxExtComponent(
        elementRef: ElementRef,
        renderer: Renderer,
        provider: BoxProvider,
        helperService: any,
        navManagerService: NavManagerService
    ) {
        // Parent construct
        super.initBoxExtensionComponent(
            elementRef,
            renderer,
            provider
        );

        // Constructor vars
        this._helperService = helperService;
        this._navManagerService = navManagerService;
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