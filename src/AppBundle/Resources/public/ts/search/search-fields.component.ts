import {Component, Inject, ElementRef, Input, Optional} from '@angular/core';
import {DataService} from '../data-service/data.service';

// Component
@Component({
    selector: 'js_searchFields',
    template: `
    <js_expander [label]="'Fields'" [hasIcon]="false" [customClass]="'action'" (onChange)="toggleIsExpanded($event, 'fields')"></js_expander>
    <div [hidden]="!_isExpanded" class="col-xs-12 col-sm-12 white-dropdown search-fields">
        <select multiple size="6" [(ngModel)]="_search['fields']" class="form-control">
            <template ngFor let-field [ngForOf]="_fields">
                <option *ngIf="!_helperService.inArray(_fieldsMetadata[field]['type'], _deniedTypes)"
                        value="{{field}}">{{_fieldsMetadata[field]['label']}}</option>
            </template>
        </select>
    </div>
    `,
    host: {
        '(document:click)': 'onDocumentClick($event)',
    }
})
export class SearchFieldsComponent {
    // Injector to get dependencies. Used when injector comes from child component (like accordion)
    @Input() injector: any = null;

    // Denied types. Doesn't make sense to show this filed types.
    protected _deniedTypes: string[] = ['password'];
    protected _search: any;
    protected _fields: any;
    protected _fieldsMetadata: any;
    protected _isExpanded: boolean = false;

    constructor(
        protected _elementRef: ElementRef,
        @Inject('HelperService') private _helperService: any,
        @Optional() @Inject('DataService') protected _dataService: any
    ) {}

    /**
     * Toggle isExpanded
     * @param $event (value returned by expander directive)
     */
    protected toggleIsExpanded($event): void
    {
        this._isExpanded = !this._isExpanded;
    }

    /**
     * Host event
     * @param $event
     */
    protected onDocumentClick($event): void
    {
        if (!this._elementRef.nativeElement.contains($event.target)) {
            this._isExpanded = false;
        }
    }

    /**
     * Lifecycle callback
     */
    ngOnInit()
    {
        // If injector is provided, override dependencies
        if (this.injector) {
            this._dataService = this.injector.get('DataService');
        }

        this._search = this._dataService.getCandidateSearch();
        this._fields = (this._dataService.getFields('view') || []);
        this._fieldsMetadata = (this._dataService.getFields('metadata') || {});
    }
}