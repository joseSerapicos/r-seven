import {Component, ElementRef, Renderer} from '@angular/core';
import {BaseProvider} from './base-provider';

// Re-exports
export {BaseProvider}


/**
 * Used only as base component to be extended for others components
 */
@Component({
    selector: '.js_base',
    template: ''
})
export abstract class BaseExtensionComponent {
    // Constructor vars
    public _elementRef: ElementRef; // Public because the children that implement "IForm"
    protected _renderer: Renderer;
    protected _provider: BaseProvider;

    /**
     * Initialization of component (replace the original constructor to avoid angular injection inheritance bug)
     * @param elementRef
     * @param renderer
     * @param provider
     */
    public initBaseExtensionComponent(
        elementRef: ElementRef,
        renderer: Renderer,
        // This provider can becomes any provider defined by your child
        // (don't need the "inject" because it's a static class, so will be provider by children components)
        provider: BaseProvider
    ) {
        // Constructor vars
        this._elementRef = elementRef;
        this._renderer = renderer;
        this._provider = provider;

        // Set defaults
        if (!this._provider) {
            this._provider = [];
        }

        // Set main class
        let mainClass = this.getProviderExtraDataAttr('class');
        if (mainClass) {
            this._renderer.setElementClass(
                this._elementRef.nativeElement,
                mainClass,
                true
            );
        }
    }

    /**
     * Get provider attribute
     * @param attribute
     * @returns {any|null}
     */
    protected getProviderAttr(attribute: string): any
    {
        return this._provider[attribute] || null;
    }

    /**
     * Get provider extra data attribute
     * @param attribute
     * @returns {any|null}
     */
    public getProviderExtraDataAttr(attribute: string): any
    {
        return (
            (this._provider['extraData'] && this._provider['extraData'][attribute])
                ? this._provider['extraData'][attribute]
                : null
        );
    }
}