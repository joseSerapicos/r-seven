import {Directive, ElementRef, HostListener, Input, Host, Inject} from '@angular/core';
import {FormService} from '../form.service';

/**
 * Handles with html select box
 */
@Directive({
    selector: '[htmlSelect]',
    host: {
        '(document:click)': 'onDocumentClick($event)',
    }
})
export class FieldTypeHtmlSelectDirective {
    private _onObjectChangeSubscription: any; // When the object change in formService

    protected _$choices: any;
    protected _$label: any;
    protected _fieldInView: string; // Field that represents the object in template/view, to use as label of selected choice

    constructor(
        protected _elementRef: ElementRef,
        protected _formService: FormService,
        @Inject('DataService') protected _dataService: any
    ) {
        // Object change event subscription
        this._onObjectChangeSubscription = this._formService.getOnObjectChangeEmitter()
            .subscribe(object => this.reset());
    }

    @Input('htmlSelect') field: string;

    @HostListener('click', ['$event']) onMouseClick($event) {
        $event.preventDefault();
        $event.stopPropagation();

        this._$choices.toggle();

        let $target = $($event.target),
            value = $target.data('value');

        if (value) {
            this._formService.getObject()[this.field] = value;
            this._$label.html($target.html());
        }
    }

    /**
     * Reset
     * @returns {FieldTypeHtmlSelectDirective}
     */
    reset(): FieldTypeHtmlSelectDirective
    {
        let value = (this._formService.getObject()[this.field]),
            normalizedValue = '';

        if (value) {
            normalizedValue = ((this._fieldInView
                && this._dataService.getNormalizedObject()
                && this._dataService.getNormalizedObject()[this._fieldInView])
                    ? this._dataService.getNormalizedObject()[this._fieldInView]
                    : value
            );
        }

        this._$label.html(normalizedValue);

        return this;
    }

    /**
     * Host event
     * @param $event
     */
    protected onDocumentClick($event): void
    {
        this._$choices.hide();
    }

    /**
     * Lifecycle callback
     */
    ngOnInit()
    {
        this._$choices = $(this._elementRef.nativeElement).find('.js_choices');
        this._$label = $(this._elementRef.nativeElement).find('.js_label');

        this._$choices.hide();

        this._fieldInView = (this._dataService.getProviderAttr('fields')['metadata'][this.field]['fieldInView'] || null);

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