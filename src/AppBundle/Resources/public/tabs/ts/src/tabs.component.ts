import {Component, Optional, ElementRef, Inject, Renderer, QueryList, ViewContainerRef, ViewChildren} from '@angular/core';
import {TabsExtComponent, BaseProvider} from './tabs.ext-component';
import {NavManagerService, INavManager as ITabs, LazyLoadData} from '../../../ts/nav-manager/nav-manager.service';

// Reexports
export {ITabs, LazyLoadData, BaseProvider};


@Component({
    selector: '.js_tabs',
    template: '' // Define template in child component
})
export abstract class TabsComponent extends TabsExtComponent {
    // For NavManagerService
    @ViewChildren('js_lazyLoadContainer', {read: ViewContainerRef}) lazyLoadViewContainerRefQL: QueryList<ViewContainerRef>;
    
    constructor(
        elementRef: ElementRef,
        renderer: Renderer,
        @Optional() @Inject('Provider') provider: BaseProvider,
        @Inject('HelperService') helperService: any,
        navManagerService: NavManagerService
    ) {
        super();
        super.initTabsExtComponent(
            elementRef,
            renderer,
            provider || null,
            helperService,
            navManagerService
        );
    }
}