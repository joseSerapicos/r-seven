import {Component, Input, Inject} from '@angular/core';
import {DataService} from '../data-service/data.service';

// Component
@Component({
    selector: 'js_searchPagination',
    template: `
    <div *ngIf="(_dataService.getProviderAttr('objects') || []).length > 0"
         class="search-pagination no-user-select">
        <span>{{(_dataService.getProviderAttr('objects').length)}} Results</span>
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