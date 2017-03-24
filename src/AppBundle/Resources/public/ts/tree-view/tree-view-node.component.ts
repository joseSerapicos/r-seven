import {Component, Input} from '@angular/core';
import {TreeViewComponent} from './tree-view.component';
import {TreeViewFormComponent} from './tree-view-form.component';

// Component
@Component({
    selector: 'js_treeViewNode',
    template: `
    <li *ngFor="let obj of nodes; let objIndex = index">
        <a class="no-user-select"
           *ngIf="parentComponent.getNodes(obj['id'])"
           (click)="parentComponent.toggleExpanded(obj['id'])"><i
                [ngClass]="['fa', (parentComponent._expanded[obj['id']] ? 'fa-angle-down' : 'fa-angle-right')]"></i><i
                    [ngClass]="['fa', parentComponent.getIcon(obj)]"></i><span>{{obj['name']}}</span></a>
        <span *ngIf="!parentComponent.getNodes(obj['id'])"><i
                    [ngClass]="['fa', parentComponent.getIcon(obj)]"></i><span>{{obj['name']}}</span></span>
        <js_treeViewControl [parentComponent]="parentComponent" [objectIndex]="objIndex" [nodesIndex]="nodesIndex"></js_treeViewControl>
        <ul *ngIf="parentComponent.getNodes(obj['id']) && parentComponent._expanded[obj['id']]">
            <js_treeViewNode [nodes]="parentComponent.getNodes(obj['id'])"
                             [nodesIndex]="obj['id']"
                             [parentComponent]="parentComponent"></js_treeViewNode>
        </ul>
    </li>
    `
})
export class TreeViewNodeComponent
{
    @Input() nodes: any;
    @Input() nodesIndex: number;
    @Input() parentComponent: TreeViewComponent | TreeViewFormComponent;
}