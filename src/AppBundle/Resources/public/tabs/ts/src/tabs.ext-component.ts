import {Component, Optional, ElementRef, Inject, Renderer, QueryList, ViewContainerRef, ViewChildren} from '@angular/core';
import {BaseExtensionComponent, BaseProvider} from '../../../ts/base/base.extension-component';
import {INavManager as ITabs, LazyLoadData} from '../../../ts/nav-manager/nav-manager.service';

// Reexports
export {ITabs, LazyLoadData, BaseProvider};


@Component({
    selector: '.js_tabs',
    template: ''
})
export abstract class TabsExtComponent extends BaseExtensionComponent {
    // Constructor vars
    protected _helperService: any;
    protected _navManagerService: any;

    // For NavManagerService
    @ViewChildren('js_lazyLoadContainer', {read: ViewContainerRef}) lazyLoadViewContainerRefQL: QueryList<ViewContainerRef>;


    constructor() { super(); }

    initTabsExtComponent(
        elementRef: ElementRef,
        renderer: Renderer,
        provider: BaseProvider,
        helperService: any,
        navManagerService: any
    ) {
        super.initBaseExtensionComponent(
            elementRef,
            renderer,
            provider || null
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

        // Open the first tab
        this._navManagerService.navTo(0);
    }
}