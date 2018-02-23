import {ViewChild, ElementRef, EventEmitter, Renderer} from '@angular/core';
import {BaseExtensionComponent, BaseProvider} from '../../ts/base/base.extension-component';

// Re-exports
export {BaseProvider}

/**
 * This interface should be extended by all components that use popup but not extends "BaseModalPopup" class
 */
export interface IModalPopup {
    onDismissEmitter: EventEmitter<any>;

    /**
     * Close popup.
     * @param $event
     * @param data (data to return on resolve component)
     */
    closeAction($event: any, data?: any): void;
}

/**
 * BaseModalPopupExt
 * Base class for custom popups.
 * All popups should extend this class.
 */
export abstract class BaseModalPopupExt extends BaseExtensionComponent implements IModalPopup
{
    onDismissEmitter: EventEmitter<any> = new EventEmitter();

    constructor() { super(); }

    /**
     * Initialization of component (replace the original constructor to avoid angular injection inheritance bug)
     * @param elementRef
     * @param renderer
     * @param provider
     */
    initBaseModalPopupExt(
        elementRef: ElementRef,
        renderer: Renderer,
        // This provider can becomes any provider defined by your child
        // (don't need the "inject" because it's a static class, so will be provider by children components)
        provider: BaseProvider
    ) {
        // Call parent construct
        super.initBaseExtensionComponent(
            elementRef,
            renderer,
            provider
        );
    }

    /**
     * Close action.
     * @param $event
     * @param data (data to return on resolve component)
     */
    public closeAction($event: any = null, data: any = null): void
    {
        if ($event) { $event.preventDefault(); }
        this.onDismissEmitter.emit(data);
    }
}

/**
 * BaseModalPopup
 * Base class for custom popups.
 * All popups should extend this class.
 */
export abstract class BaseModalPopup extends BaseModalPopupExt
{
    constructor(
        elementRef: ElementRef,
        renderer: Renderer,
        // This provider can becomes any provider defined by your child
        // (don't need the "inject" because it's a static class, so will be provider by children components)
        provider: BaseProvider
    ) {
        // Call parent construct
        super();
        super.initBaseModalPopupExt(
            elementRef,
            renderer,
            provider
        );
    }
}