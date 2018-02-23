import {Directive, Input, Inject, ElementRef, HostListener, Host} from '@angular/core';


@Directive({
    selector: '[popover]',
    host: {
        '(document:click)': 'onMouseClick($event)',
    }
})
export class PopoverDirective {
    // "popoverPosition" options: 'top', 'bottom', 'left', 'right'
    @Input('popover') popoverPosition: string;
    // "align" options: 'left', 'right', 'middle'
    @Input('align') align: string;
    // "elementTarget" options: 'prev', 'next', 'parent'
    // Element target to use as reference to position the popover
    @Input('elementTarget') elementTarget: string;

    protected _$body: any; // Body element to append/remove the popover
    protected _$popover: any; // Popover content defined by user
    protected _$reference: any; // Element for position reference
    protected _$isFixedPopover: boolean = false; // Fix popover to avoid hide on leave event


    constructor(
        protected _elementRef: ElementRef
    ) {}

    /**
     * Show popover
     */
    @HostListener('mouseenter') onMouseEnter() {
        let offsetReference = this._$reference.offset();
        let top = 0, left = 0, right = 0, bottom = 0;

        // Needs to be inserted here, otherwise element size is not available to make calculus bellow
        this._$popover.insertAfter(this._$body);

        switch (this.popoverPosition) {
            case 'bottom':
                let heightReference = this._$reference.outerHeight(true);
                left = offsetReference.left;
                top = (offsetReference.top + heightReference + 2);
                break;
            case 'top':
                left = offsetReference.left;
                bottom = (offsetReference.top + 2);
                break;
        }

        switch (this.align) {
            case 'left':
                left = offsetReference.left;
                break;
            case 'right':
                right = offsetReference.right;
                break;
            case 'middle':
                let widthReference = this._$reference.outerWidth(true),
                    width = this._$popover.outerWidth(true);
                left = (offsetReference.left + (widthReference/2) - (width/2));
                break;
        }

        this._$popover.css({
            left: (left || 'auto'),
            top: (top || 'auto'),
            right: (right || 'auto'),
            bottom: (bottom || 'auto')
        });
        this._$popover.show();
    }

    /**
     * Hide popover
     */
    @HostListener('mouseleave') onMouseLeave() {
        if (!this._$isFixedPopover) {
            this._$popover.hide(); // Use hide to avoid show immediately the popover before css attributes ate defined
            this._$popover.remove();
        }
    }

    /**
     * Toggle popover
     * @param $event
     */
    public onMouseClick($event) {
        // It can't be used, because prevent all events (checkbox, etc.)
        //if (event) { event.preventDefault(); }

        if (this._elementRef.nativeElement.contains($event.target) &&
            !this._$isFixedPopover
        ) {
            this.onMouseEnter(); // Show
            this._$isFixedPopover = true;
        } else if (this._$isFixedPopover) {
            this._$isFixedPopover = false;
            this.onMouseLeave(); // Hide
        }
    }

    /**
     * Lifecycle callback
     */
    ngOnInit()
    {
        this._$popover = $(this._elementRef.nativeElement).find('.js_popover');
        this._$body = $('body');

        // Element reference to position the popup
        this._$reference = null;
        if (this.elementTarget && (this.elementTarget != '')) {
            this._$reference = $(this._elementRef.nativeElement)[this.elementTarget]();
        }

        if (!this._$reference) {
            this._$reference = $(this._elementRef.nativeElement).find('.js_icon');
        }
    }
}