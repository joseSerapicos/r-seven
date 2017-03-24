import {ViewChild, ElementRef, EventEmitter, Renderer} from '@angular/core';
import {BaseExtensionComponent, BaseProvider} from '../../ts/base/base.extension-component';

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
 * BaseModalPopup
 * Base class for custom popups.
 * All popups should extend this class.
 */
export abstract class BaseModalPopup extends BaseExtensionComponent implements IModalPopup
{
    onDismissEmitter: EventEmitter<any> = new EventEmitter();
    
    constructor(
        elementRef: ElementRef,
        renderer: Renderer,
        // This provider can becomes any provider defined by your child
        // (don't need the "inject" because it's a static class, so will be provider by children components)
        provider: BaseProvider
    ) {
        // Call parent construct
        super();
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