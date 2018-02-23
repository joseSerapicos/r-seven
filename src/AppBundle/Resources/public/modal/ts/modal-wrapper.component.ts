import {Component, ViewChild, ViewContainerRef, ElementRef, Host} from '@angular/core';


// Modal sizes
export var ModalSizes = {
    sm: 'sm',
    lg: 'lg'
};


/**
 * Modal wrapper
 * Modal uses the bootstrap classes
 */
@Component({
    selector: 'js_modal',
    template: `
    <div class="modal-backdrop"></div>
    <div class="modal animated">
        <div class="modal-dialog modal-{{_size}}">
            <div class="modal-content">
                <ng-template #js_modalContainer></ng-template>
            </div>
        </div>
    </div>
    `,
    host: {
        '(document:click)': 'onDocumentClick($event)',
    }
})
export class ModalWrapperComponent {
    // ViewContainerRef to load child
    @ViewChild('js_modalContainer', {read: ViewContainerRef}) viewContainerRef: ViewContainerRef;

    protected _size: string; // Modal size (sm, lg)

    constructor(
        protected _elementRef: ElementRef
    ) {}

    /**
     * Get modal container ref
     * @returns {ViewContainerRef}
     */
    public setSize(size: string): ModalWrapperComponent
    {
        this._size = this.normalizeModalSize(size);
        return this;
    }

    /**
     * Get modal container ref
     * @returns {ViewContainerRef}
     */
    public getModalContainerRef(): ViewContainerRef
    {
        return this.viewContainerRef;
    }

    /**
     * Show modal
     */
    public show(): void
    {
        // Fade in animation
        $(this._elementRef.nativeElement).find('.modal').addClass('fadeInDown');
    }

    /**
     * Normalize modal size to a valid option
     * @param size
     * @returns {string}
     */
    protected normalizeModalSize(size: string) {
        return (ModalSizes[size] || ModalSizes.lg);
    }

    /**
     * On document click event
     */
    protected onDocumentClick(): void
    {
        // @TODO implement "Esc" key and click over backdrop, get from viewcontainerref, index 0
        //console.log("click");
        return;
    }
}