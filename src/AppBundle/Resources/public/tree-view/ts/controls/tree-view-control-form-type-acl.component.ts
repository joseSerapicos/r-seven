import {Component, Input, Inject} from '@angular/core';
import {TreeViewFormComponent} from '../tree-view-form.component';
import {TreeViewDataService as DataService} from '../../../ts/data-service/tree-view-data.service';

// Component
@Component({
    selector: 'js_treeViewControl',
    template: `
    <div *ngIf="_object.hasOwnProperty('acl')"
         class="actions no-user-select horizontal-group-box"
         (mouseover)="setCandidateAcl($event)" (mouseout)="resetCandidateAcl()" (click)="setAcl($event)">
        <a [class.active]="_candidateAcl == 0"
           data-value="0"
           title="No access"
           class="fa fa-ban -r-divider"></a>
        <a [class.active]="_candidateAcl > 0"
           data-value="1"
           title="Read only"
           class="fa fa-eye"></a>
        <a [class.active]="_candidateAcl > 1"
           data-value="2"
           title="Read and edit"
           class="fa fa-pencil"></a>
        <a [class.active]="_candidateAcl > 3"
           data-value="4"
           title="Read, edit and add"
           class="fa fa-plus"></a>
        <a [class.active]="_candidateAcl > 7"
           data-value="8"
           title="Read, edit, add and remove"
           class="fa fa-times"></a>
        <input type="hidden" name="acl[{{_object['id']}}]" value="{{_object['acl']}}">
    </div>
    `
})
export class TreeViewControlFormTypeAclComponent
{
    @Input() objectIndex: any;
    @Input() nodesIndex: number;
    @Input() treeViewComponent: TreeViewFormComponent;

    protected _object: any;
    protected _candidateAcl: number;

    constructor(
        @Inject('DataService') protected _dataService: any
    ) {}

    /**
     * Reset candidate acl
     */
    protected resetCandidateAcl(): void
    {
        this._candidateAcl = (this._object['acl'] || 0);
    }

    /**
     * Set candidate acl
     ** @param $event
     */
    protected setCandidateAcl($event): void
    {
        let value = $event.target.getAttribute("data-value");
        this._candidateAcl = value;
    }

    /**
     * Set acl
     * @param $event
     */
    protected setAcl($event): void
    {
        $event.preventDefault();

        let value = $event.target.getAttribute("data-value");
        this._object['acl'] = value;
    }

    /**
     * Lifecycle callback
     */
    ngOnInit()
    {
        this._object = this.treeViewComponent.getNodes(this.nodesIndex)[this.objectIndex];
        this.resetCandidateAcl();
    }
}