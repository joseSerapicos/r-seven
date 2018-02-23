import {Component, Inject, ElementRef, Renderer} from '@angular/core';
import {BoxExtensionComponent, BoxProvider} from './box.extension-component';
import {Helper} from '../helper';

// Re-exports
export {BoxProvider};


/**
 * Box (simple base box)
 */
var baseRoute = Helper.getAppVar('route');
@Component({
    selector: '.js_box',
    templateUrl: baseRoute + 'template/box'
})
export class BoxComponent extends BoxExtensionComponent {
    constructor(
        elementRef: ElementRef,
        renderer: Renderer,
        @Inject('BoxProvider') boxProvider: BoxProvider
    ) {
        super();
        super.initBoxExtensionComponent(
            elementRef,
            renderer,
            boxProvider
        );
    }
}