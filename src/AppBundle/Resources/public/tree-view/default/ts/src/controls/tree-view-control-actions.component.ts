import {Component, Input, Inject} from '@angular/core';
import {TreeViewComponent} from '../tree-view.component';

// Component
@Component({
    selector: 'js_treeViewControl',
    template: `
    <span *ngIf="_object['_isNew']" class="badge badge-info">New</span>
    <span *ngIf="_object['_isEdited']" class="badge badge-info">Edited</span>
    <input *ngIf="treeViewComponent._actionsService.getActionAttr('radioChoice', 'isEnabled') && treeViewComponent.getNodes(nodesIndex)[objectIndex]['id']"
           class="pull-right action"
           type="radio"
           name="index[]"
           value="{{nodesIndex}}::{{objectIndex}}"/>
    <input *ngIf="treeViewComponent._actionsService.getActionAttr('checkAll', 'isEnabled') && treeViewComponent.getNodes(nodesIndex)[objectIndex]['id']"
           class="pull-right action js_checkAll"
           type="checkbox"
           name="index[]"
           value="{{nodesIndex}}::{{objectIndex}}"
           [ngModel]="treeViewComponent.checkAll"/>
    <div class="txt-align-r actions no-user-select text-secondary">
        <ng-template ngFor let-action [ngForOf]="treeViewComponent._actionsService.getDetailActions()">
            <a *ngIf="treeViewComponent._actionsService.getActionAttr(action, 'isEnabled')"
               (click)="treeViewComponent.triggerAction($event, action, {objIndex: objectIndex, parentNodeIndex: nodesIndex})"
               [ngClass]="[treeViewComponent._actionsService.getActionAttr(action, 'icon')]"
               class="fa"></a>
        </ng-template>
    </div>
    `
})
export class TreeViewControlActionsComponent
{
    @Input() objectIndex: any;
    @Input() nodesIndex: number;
    @Input() treeViewComponent: TreeViewComponent;

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