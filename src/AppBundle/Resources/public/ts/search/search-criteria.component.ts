import {Component, Inject, ElementRef, Input, Optional} from '@angular/core';
import {DataService} from '../data-service/data.service';


/**
 * Class provider for search criteria expressions and default values
 */
export class SearchCriteriaMap {
    // Expressions mapping.
    protected _exprMap = [
        { key: 'lrlike', label: '?' },
        { key: 'eq', label: '=' },
        { key: 'gte', label: '>=' },
        { key: 'lte', label: '<=' }
    ];

    // Default value mapping for field type.
    protected _defaultValueMap = {
        'date': ((new Date()).toISOString().slice(0,10)), // Current date (yyyy-mm-dd)
        'boolean': 1
    };

    // Default expression mapping for field type.
    protected _defaultExprMap = {
        'text': 'lrlike',
        'code': 'lrlike',
        'date': 'gte',
        'boolean': 'eq'
    };

    /**
     * Get expressions mapping
     * @returns {any}
     */
    public getExprMap(): any
    {
        return this._exprMap;
    }

    /**
     * Get default expression
     * @param type
     * @returns {any}
     */
    public getDefaultExpr(type: string = null): string
    {
        return ((type && this._defaultExprMap[type]) ? this._defaultExprMap[type] : 'eq');
    }

    /**
     * Get default value
     * @param type
     * @returns {any}
     */
    public getDefaultValue(type: string = null): string
    {
        return ((type && this._defaultValueMap[type]) ? this._defaultValueMap[type] : '');
    }
}

// Component
@Component({
    selector: 'js_searchCriteria',
    template: `
    <js_expander [label]="'Filter'" [hasIcon]="false" [customClass]="'action'" (onChange)="toggleIsExpanded($event, 'fields')"></js_expander>
    <div [hidden]="!_isExpanded" class="col-xs-12 col-sm-12 white-dropdown search-criteria">
        <template ngFor let-criteria [ngForOf]="_criteriaArr" let-i="index">
            <div class="col-sm-6 controller">
                <div class="select">
                    <select [(ngModel)]="criteria['field']"
                            (change)="onFieldChange($event, criteria)"
                            class="form-control">
                        <template ngFor let-field [ngForOf]="_fields">
                            <option *ngIf="!_helperService.inArray(_fieldsMetadata[field]['type'], _deniedTypes) && !_fieldsMetadata[field]['isObject']"
                                    value="{{field}}">{{_fieldsMetadata[field]['label']}}</option>
                        </template>
                    </select>
                    <!-- ng switch should be here -->
                    <template [ngIf]="(_fieldsMetadata[criteria['field']]) && (_fieldsMetadata[criteria['field']]['type'] == 'boolean')">
                        <select [(ngModel)]="criteria['value']"
                                class="form-control">
                            <option *ngFor="let value of [{key: 1, label: 'Yes'}, {key: 0, label: 'No'}]"
                                    value="{{value['key']}}">{{value['label']}}</option>
                        </select>
                    </template>
                    <template [ngIf]="(!_fieldsMetadata[criteria['field']]) || (_fieldsMetadata[criteria['field']]['type'] != 'boolean')">
                        <select [(ngModel)]="criteria['expr']"
                                class="form-control">
                            <option *ngFor="let expr of _searchCriteriaMap.getExprMap()"
                                    value="{{expr['key']}}">{{expr['label']}}</option>
                        </select>
                        <input [(ngModel)]="criteria['value']"
                               class="form-control" type="text">
                    </template>
                </div>
                <div class="actions">
                    <a *ngIf="_criteriaArr.length > 1" class="fa fa-trash-o" (click)="del($event, i)"></a>
                    <a *ngIf="(i+1) == _criteriaArr.length" class="fa fa-plus" (click)="add($event)"></a>
                </div>
            </div>
        </template>
    </div>
    `,
    host: {
        '(document:click)': 'onDocumentClick($event)',
    }
})
export class SearchCriteriaComponent {
    // Injector to get dependencies. Used when injector comes from child component (like accordion)
    @Input() injector: any = null;

    // Denied types. Doesn't make sense to search for this filed types.
    protected _deniedTypes: string[] = ['file', 'icon', 'img', 'password', 'avatar'];
    protected _criteriaArr: any;
    protected _fields: any;
    protected _fieldsMetadata: any;
    protected _isExpanded: boolean = false;
    protected _searchCriteriaMap: SearchCriteriaMap;

    constructor(
        protected _elementRef: ElementRef,
        @Inject('HelperService') private _helperService: any,
        @Optional() @Inject('DataService') protected _dataService: any
    ) {
        this._searchCriteriaMap = new SearchCriteriaMap();
    }

    /**
     * Set default values
     * @param criteria
     * @param field (field to override criteria['field'], because select change event was not update it yet)
     */
    protected setDefaults(criteria: any, field: string = null): void
    {
        field = (field || criteria['field']);
        if (field in this._fieldsMetadata) {
            criteria['expr'] = this._searchCriteriaMap.getDefaultExpr(this._fieldsMetadata[field]['type']);
            criteria['value'] = this._searchCriteriaMap.getDefaultValue(this._fieldsMetadata[field]['type']);
        }
    }

    /**
     * Add criteria
     * @param $event
     */
    protected add($event = null): void
    {
        if ($event) {
            $event.preventDefault();
            $event.stopPropagation();
        }

        let criteria = {
            field: (this._fields[0] ? this._fields[0] : null),
            expr: null,
            value: null
        };

        this.setDefaults(criteria, null);

        this._criteriaArr.push(criteria);
    }

    /**
     * Delete criteria
     * @param $event
     * @param index
     */
    protected del($event, index: number): void
    {
        $event.preventDefault();
        $event.stopPropagation();
        this._criteriaArr.splice(index, 1);
    }

    /**
     * Toggle isExpanded
     * @param $event (value returned by expander directive)
     */
    protected toggleIsExpanded($event): void
    {
        this._isExpanded = !this._isExpanded;
    }

    /**
     * On field change
     * @param $event
     * @param criteria
     */
    protected onFieldChange($event, criteria: any): void
    {
        // Field to override criteria['field'], because select change event was not update it yet
        let field = $event.target.value || null;
        this.setDefaults(criteria, field);
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

        this._criteriaArr = this._dataService.getCandidateSearchAttr('criteria');
        this._fields = (this._dataService.getFields('view') || []);
        this._fieldsMetadata = (this._dataService.getFields('metadata') || {});

        if (this._criteriaArr.length < 1) {
            this.add();
        }
    }
}