import {Component, ElementRef, Renderer, Optional} from '@angular/core';
import {BaseProvider} from './base-provider';

// Re-exports
export {BaseProvider}


/**
 * Used only as base component to be extended for others components
 */
// Component
@Component({
    selector: '.js_base',
    template: ''
})
export abstract class BaseComponent {
    constructor(
        protected _elementRef: ElementRef,
        protected _renderer: Renderer,
        // This provider can becomes any provider defined by your child
        // (don't need the "inject" because it's a static class, so will be provider by children components)
        @Optional() protected _provider: BaseProvider = {}
    ) {
        // Set defaults
        if (!this._provider) {
            this._provider = {};
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