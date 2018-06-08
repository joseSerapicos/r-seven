import {Component, ElementRef, Renderer} from '@angular/core';
import {BaseExtensionComponent} from '../base/base.extension-component';
import {BoxProvider} from './box-provider';

// Re-exports
export {BoxProvider};


/**
 * Box (simple base box)
 */
@Component({
    selector: '.js_box',
    template: ''
})
export abstract class BoxExtensionComponent extends BaseExtensionComponent {
    // Controls the toggle of the show/hide content.
    // It starts "true" otherwise the content may not be rendered correctly.
    protected _isExpanded: boolean = true;

    /**
     * Initialization of component (replace the original constructor to avoid angular injection inheritance bug)
     * @param elementRef
     * @param renderer
     * @param provider
     */
    public initBoxExtensionComponent(
        elementRef: ElementRef,
        renderer: Renderer,
        provider: BoxProvider
    ) {
        super.initBaseExtensionComponent(
            elementRef,
            renderer,
            provider
        );

        let expanderControl = this.getProviderAttr('controls')['expander'];
        this._isExpanded = (!expanderControl['isEnabled'] || expanderControl['isExpanded']);
    }

    /**
     * Expander action. Used by expanded directive output.
     * @param isExpanded (value returned by the expander directive on change)
     */
    protected expanderAction(isExpanded: boolean): void
    {
        this._isExpanded = isExpanded;
    }
}