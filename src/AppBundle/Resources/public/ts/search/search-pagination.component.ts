import {Component, Input, Inject} from '@angular/core';
import {DataService} from '../data-service/data.service';

// Component
@Component({
    selector: 'js_searchPagination',
    template: `
    <div *ngIf="_dataService.countObjects() > 0"
         class="search-pagination no-user-select">
        <span>{{_dataService.countObjects()}} Results</span>
        <a class="search-has-more -note"
           *ngIf="_dataService.getProviderAttr('search')['hasMore']"
           (click)="getMoreObjects($event)"
           href="#"
           title="Load more results...">...</a>
    </div>
    `
})
export class SearchPaginationComponent {

    constructor(
        @Inject('DataService') protected _dataService: any,
        @Inject('HelperService') protected _helperService: any
    ) {}

    /**
     * Get more objects (pagination)
     * @param $event
     */
    protected getMoreObjects($event): void
    {
        $event.preventDefault();
        this._dataService.getMoreObjects();
    }
}