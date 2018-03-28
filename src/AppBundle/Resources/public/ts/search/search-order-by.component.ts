import {Component, Inject, ElementRef, Input, Optional} from '@angular/core';
import {DataService} from '../data-service/data.service';

// Component
@Component({
    selector: 'js_searchOrderBy',
    template: `
    <js_expander [label]="'Order'" [hasIcon]="false" [customClass]="'action'" (onChange)="toggleIsExpanded($event, 'fields')"></js_expander>
    <div [hidden]="!_isExpanded" class="container-fluid py-3 rounded white-dropdown search-order-by">
        <div class="row">
        <ng-template ngFor let-orderBy [ngForOf]="_orderByArray" let-i="index">
            <div class="col col-md-6 controller">
                <div class="select">
                    <select [(ngModel)]="orderBy['field']" class="form-control">
                        <ng-template ngFor let-field [ngForOf]="_fields">
                            <option *ngIf="!_helperService.inArray(_fieldsMetadata[field]['type'], _deniedTypes) && !_fieldsMetadata[field]['isObject']"
                                    value="{{field}}">{{_fieldsMetadata[field]['label']}}</option>
                        </ng-template>
                    </select>
                    <select [(ngModel)]="orderBy['value']" class="form-control">
                        <option *ngFor="let value of [{key: 'ASC', label: 'Asc'}, {key: 'DESC', label: 'Desc'}]"
                                value="{{value['key']}}">{{value['label']}}</option>
                    </select>
                </div>
                <div class="actions">
                    <a *ngIf="_orderByArray.length > 1" class="fa fa-trash-o" (click)="del($event, i)"></a>
                    <a *ngIf="(i+1) == _orderByArray.length" class="fa fa-plus" (click)="add($event)"></a>
                </div>
            </div>
        </ng-template>
        </div>
    </div>
    `,
    host: {
        '(document:click)': 'onDocumentClick($event)',
    }
})
export class SearchOrderByComponent {
    // Injector to get dependencies. Used when injector comes from child component (like accordion)
    @Input() injector: any = null;

    // Denied types. Doesn't make sense to order by this filed types.
    protected _deniedTypes: string[] = ['file', 'icon', 'img', 'password', 'avatar'];
    protected _orderByArray: any;
    protected _fields: any;
    protected _fieldsMetadata: any;
    protected _isExpanded: boolean = false;

    constructor(
        protected _elementRef: ElementRef,
        @Inject('HelperService') private _helperService: any,
        @Optional() @Inject('DataService') protected _dataService: any
    ) {}

    /**
     * Add order by
     * @param $event
     */
    protected add($event = null): void
    {
        if ($event) {
            $event.preventDefault();
            $event.stopPropagation();
        }

        this._orderByArray.push({
            field: (this._fields[0] ? this._fields[0]['key'] : null),
            value: 'ASC',
        });
    }

    /**
     * Delete order by
     * @param $event
     * @param index
     */
    protected del($event, index: number): void
    {
        $event.preventDefault();
        $event.stopPropagation();
        this._orderByArray.splice(index, 1);
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

        this._orderByArray = this._dataService.getCandidateSearchAttr('orderBy');
        this._fields = (this._dataService.getFields('view') || []);
        this._fieldsMetadata = (this._dataService.getFields('metadata') || {});

        if (this._orderByArray.length < 1) {
            this.add();
        }
    }
}