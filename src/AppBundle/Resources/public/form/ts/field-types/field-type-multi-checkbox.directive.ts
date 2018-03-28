import {Directive, ElementRef, HostListener, Input} from '@angular/core';
import {FormService} from '../form.service';

/**
 * Handles with multiple checkbox select control
 */
@Directive({
    selector: '[multiCheckbox]'
})
export class FieldTypeMultiCheckboxDirective {

    protected _onObjectChangeSubscription: any; // To get notify about changes on object over the FormService
    protected _controlObj: any;// Control (object field value) object where the select values are kept

    constructor(
        protected _elementRef: ElementRef,
        protected _formService: FormService
    ) {
        // Object change event subscription
        this._onObjectChangeSubscription = this._formService.getOnObjectChangeEmitter()
            .subscribe(object => this.reset(object));
    }

    @Input('multiCheckbox') field: string;

    @HostListener('click', ['$event']) onMouseClick($event) {
        let value = $event.target.value;

        if (value) {
            if (value) {
                if (value in this._controlObj) {
                    delete this._controlObj[value]; // Remove
                } else {
                    this._controlObj[value] = value; // Add
                }
            }
        }
    }

    /**
     * Reset object
     * @param object
     * @returns {FieldTypeMultiCheckboxDirective}
     */
    reset(object: any = null): FieldTypeMultiCheckboxDirective
    {
        this._controlObj = this._formService.getObject()[this.field];

        // Init the controlObj (when creates a new object)
        if (!this._controlObj) {
            this._controlObj = {};
        }

        // Set "selected" property
        let $elements: any = $(this._elementRef.nativeElement).find('input');
        if ($elements.length > 0) {
            for (let el of $elements) {
                let $el = $(el);
                $el.prop('checked', ($el.val() in this._controlObj));
            }
        }

        return this;
    }

    /**
     * Lifecycle callback
     */
    ngOnInit()
    {
        this.reset();
    }

    /**
     * Lifecycle callback
     */
    ngOnDestroy()
    {
        this._onObjectChangeSubscription.unsubscribe();
    }
}