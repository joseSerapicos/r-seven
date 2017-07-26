import {Component, Input, Inject} from '@angular/core';
import {TreeViewFormComponent} from '../tree-view-form.component';
import {TreeViewDataService as DataService} from '../../../ts/data-service/tree-view-data.service';

// Component
@Component({
    selector: 'js_treeViewControl',
    template: `
    <input type="checkbox" name="id[]" value="{{ _object['id'] }}" [(ngModel)]="_object['isChecked']"/>
    `
})
export class TreeViewControlFormTypeCheckboxComponent
{
    @Input() objectIndex: any;
    @Input() nodesIndex: number;
    @Input() treeViewComponent: TreeViewFormComponent;

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