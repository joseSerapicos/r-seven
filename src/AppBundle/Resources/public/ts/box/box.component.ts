import {Component, Inject, ElementRef, Renderer} from '@angular/core';
import {BoxExtensionComponent, BoxProvider} from './box.extension-component';
import {Helper} from '../helper';

// Re-exports
export {BoxProvider};


/**
 * Box (simple base box)
 */
@Component({
    selector: '.js_box',
    templateUrl: Helper.getGlobalVar('route') + 'template/box'
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