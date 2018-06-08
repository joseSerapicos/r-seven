import {Component, ElementRef, Inject, Renderer, Optional} from '@angular/core';
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
    public _elementRef: any; // Public because the children that implement "IForm"
    protected _renderer: any;
    protected _provider: BaseProvider | any;
    //protected _dataService: any;


    /**
     * Initialization of component (replace the original constructor to avoid angular injection inheritance bug)
     * @param elementRef
     * @param renderer
     * @param provider
     * //@param dataService
     */
    public initBaseExtensionComponent(
        elementRef: any,
        renderer: any,
        // This provider can becomes any provider defined by your child
        // (don't need the "inject" because it's a static class, so will be provider by children components)
        provider: BaseProvider
        // @TODO: Disabled for now, but is here to analise later how dataservice can handle with lazy loader
        //@Optional() @Inject('DataService') dataService: any = null
    ) {
        // Constructor vars
        this._elementRef = elementRef;
        this._renderer = renderer;
        this._provider = provider;
        //this._dataService = dataService;

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
     * Set provider attribute
     * @param attribute
     * @param value
     * @returns {any|null}
     */
    protected setProviderAttr(attribute: string, value: any): any
    {
        this._provider[attribute] = value;
        return this;
    }

    /**
     * Get provider attribute
     * @param attribute
     * @returns {any|null}
     */
    protected getProviderAttr(attribute: string): any
    {
        return ((this._provider[attribute] === undefined) ? null : this._provider[attribute]); // Can be zero
    }

    /**
     * Get lang
     * @param key
     * @returns {any}
     */
    public getLang(key): any
    {
        return ((!this._provider['language'] || (this._provider['language'][key] === undefined))
                ? key
                : this._provider['language'][key] // Can be zero
        );
    }

    /**
     * Get "localData" attribute
     * @param attribute
     * @returns any
     */
    public getLocalDataAttr(attribute: string): any
    {
        return (this._provider['localData'][attribute] || null);
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

    /**
     * Lifecycle callback
     */
    ngAfterViewInit()
    {
        // Start loading lazy images
        // @TODO: This method should be called from DataService each time that objects are updated
        //$(this._elementRef.nativeElement).find('.js_lazy').Lazy();
    }
}