import {Component, Inject, Injector, Input, Optional} from '@angular/core';
import {DataService} from '../data-service/data.service';
import {ActionsService} from '../actions/actions.service';

// Component
@Component({
    selector: 'js_search',
    template: `
    <js_searchCriteria [injector]="injector"></js_searchCriteria>
    <js_searchOrderBy [injector]="injector"></js_searchOrderBy>
    <js_searchFields [injector]="injector"></js_searchFields>
    <a class="action -round fa"
       [ngClass]="[_actionsService.getActionAttr('search', 'icon')]"
       (click)="searchAction($event)"></a>
    `
})
export class SearchComponent {
    // Injector to get dependencies. Used when injector comes from child component (like accordion)
    @Input() injector: any = null;

    constructor(
        @Optional() @Inject('DataService') protected _dataService: any,
        @Optional() protected _actionsService: ActionsService
    ) {}

    /**
     * Search objects.
     * @param $event
     */
    public searchAction($event: any): void
    {
        $event.preventDefault();
        this._dataService.search();
    }

    /**
     * Lifecycle callback
     */
    ngOnInit()
    {
        // If injector is provided, override dependencies
        if (this.injector) {
            this._dataService = this.injector.get('DataService');
            this._actionsService = this.injector.get(ActionsService);
        }
    }
}