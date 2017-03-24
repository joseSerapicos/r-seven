import {Component, Inject, Injector, ViewContainerRef, Renderer} from '@angular/core';
import {TreeViewDataService as DataService} from '../data-service/tree-view-data.service';
import {ActionsService} from '../actions/actions.service';
import {DataBoxComponent, Popups, Popup} from '../data-box/data-box.component';
import {ModalService} from '../../modal/ts/modal.service';
import {Helper} from '../helper.ts';
import {TreeViewProvider} from './tree-view-provider';

// Re-exports
export {TreeViewProvider};


@Component({
    selector: '.js_treeView',
    templateUrl: Helper.getGlobalVar('route') + 'template/default/tree-view'
})
export class TreeViewComponent extends DataBoxComponent
{
    protected _parentComponent: TreeViewComponent;
    protected _expanded: any;

    constructor(
        viewContainerRef: ViewContainerRef,
        renderer: Renderer,
        @Inject('Provider') provider: TreeViewProvider,
        @Inject('DataService') dataService: any,
        actionsService: ActionsService,
        modalService: ModalService,
        @Inject('Popups') popups: Popups | Popup,
        injector: Injector
    ) {
        // Call parent
        super(
            viewContainerRef,
            renderer,
            provider,
            dataService,
            actionsService,
            modalService,
            popups,
            injector
        );

        this._parentComponent = this;
        this._expanded = {};
    }

    /**
     * Get nodes
     * @param index
     * @returns {*|null}
     */
    protected getNodes(index = null): any
    {
        if (index === null) {
            return this._dataService.getProviderAttr('objects');
        }
        return (
            (this._dataService.getProviderAttr('objects')[index]
            && (this._dataService.getProviderAttr('objects')[index].length > 0))
                ? this._dataService.getProviderAttr('objects')[index]
                : null
        );
    }

    /**
     * Toggle expanded
     * @param index
     */
    protected toggleExpanded(index: number): void
    {
        this._expanded[index] = (this._expanded[index] ? false : true);
    }

    /**
     * Get icon
     * @param object
     * @returns {any}
     */
    protected getIcon(object: any): string
    {
        let iconField = this.getProviderAttr('iconField');

        if(iconField && object[iconField]) {
            let iconFieldMap = (this.getProviderAttr('iconFieldMap') || {});
            return (iconFieldMap[object[iconField]] || object[iconField]);
        }
        return (this.getProviderAttr('iconDefault') || 'fa-minus');
    }
}