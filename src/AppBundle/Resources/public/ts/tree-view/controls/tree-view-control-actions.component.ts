import {Component, Input, Inject} from '@angular/core';
import {TreeViewComponent} from '../tree-view.component';

// Component
@Component({
    selector: 'js_treeViewControl',
    template: `
    <span *ngIf="_object['_isNew']" class="badge badge-info">New</span>
    <span *ngIf="_object['_isEdited']" class="badge badge-info">Edited</span>
    <div class="txt-align-r actions no-user-select">
        <template ngFor let-action [ngForOf]="parentComponent._actionsService.getDetailActions()">
            <a *ngIf="parentComponent._actionsService.getActionAttr(action, 'isEnabled')"
               (click)="parentComponent.triggerAction($event, action, {objIndex: objectIndex, parentNodeIndex: nodesIndex})"
               [ngClass]="[parentComponent._actionsService.getActionAttr(action, 'icon')]"
               class="fa"></a>
        </template>
    </div>
    `
})
export class TreeViewControlActionsComponent
{//pull-right
    @Input() objectIndex: any;
    @Input() nodesIndex: number;
    @Input() parentComponent: TreeViewComponent;

    protected _object: any;

    constructor(
        @Inject('DataService') protected _dataService: any
    ) {}

    /**
     * Lifecycle callback
     */
    ngOnInit()
    {
        this._object = this._dataService.getProviderAttr('objects')[this.nodesIndex][this.objectIndex];
    }
}