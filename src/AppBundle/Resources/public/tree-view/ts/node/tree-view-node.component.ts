import {Component, Input} from '@angular/core';
import {TreeViewComponent} from '../tree-view.component';
import {TreeViewFormComponent} from '../tree-view-form.component';

// Component
@Component({
    selector: 'js_treeViewNode',
    template: `
    <li *ngFor="let obj of nodes; let objIndex = index">
        <a class="no-user-select"
           *ngIf="treeViewComponent.getNodes(obj[parentTargetField])"
           (click)="treeViewComponent.toggleExpanded(obj[parentTargetField])"><i
                [ngClass]="['fa', (treeViewComponent._expanded[obj[parentTargetField]] ? 'fa-angle-down' : 'fa-angle-right')]"></i><i
                    *ngIf="treeViewComponent.getIcon(obj)"
                    [ngClass]="['fa', treeViewComponent.getIcon(obj)]"></i><span>{{obj['name']}}</span></a>
        <span *ngIf="!treeViewComponent.getNodes(obj[parentTargetField])"><i
                    *ngIf="treeViewComponent.getIcon(obj)"
                    [ngClass]="['fa', treeViewComponent.getIcon(obj)]"></i><span>{{obj['name']}}</span></span>
        <js_treeViewControl [treeViewComponent]="treeViewComponent" [objectIndex]="objIndex" [nodesIndex]="nodesIndex"></js_treeViewControl>
        <ul *ngIf="treeViewComponent.getNodes(obj[parentTargetField]) && treeViewComponent._expanded[obj[parentTargetField]]">
            <js_treeViewNode [nodes]="treeViewComponent.getNodes(obj[parentTargetField])"
                             [nodesIndex]="obj[parentTargetField]"
                             [parentTargetField]="parentTargetField"
                             [treeViewComponent]="treeViewComponent"></js_treeViewNode>
        </ul>
    </li>
    `
})
export class TreeViewNodeComponent
{
    @Input() nodes: any;
    @Input() nodesIndex: number;
    @Input() parentTargetField: string;
    @Input() treeViewComponent: TreeViewComponent | TreeViewFormComponent;
}