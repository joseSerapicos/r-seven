import {Component, Inject, Injector, ViewContainerRef, Renderer} from '@angular/core';
import {TreeViewDataService as DataService} from '../../../ts/data-service/tree-view-data.service';
import {ActionsService} from '../../../ts/actions/actions.service';
import {DataBoxExtensionComponent, Popups, Popup} from '../../../data-box/ts/src/data-box.extension-component';
import {ModalService} from '../../../modal/ts/modal.service';
import {TreeViewProvider} from './tree-view-provider';

// Re-exports
export {TreeViewProvider};


@Component({
    selector: '.js_treeView',
    template: ''
})
export class TreeViewExtComponent extends DataBoxExtensionComponent
{
    protected _treeViewComponent: any;
    protected _expanded: any;

    constructor() { super(); }

    /**
     * Initialization of component (replace the original constructor to avoid angular injection inheritance bug)
     * @param viewContainerRef
     * @param renderer
     * @param provider
     * @param dataService
     * @param actionsService
     * @param modalService
     * @param popups
     * @param injector
     */
    public initTreeViewExtComponent(
        viewContainerRef: any, // Any is used, otherwise you get an error "[Class] is not defined"
        renderer: any,
        @Inject('Provider') provider: TreeViewProvider,
        @Inject('DataService') dataService: any, // Any is used, otherwise you get an error "[Class] is not defined"
        tasksLoaderManagerService: any,
        @Inject('HelperService') helperService: any,
        actionsService: any, // Any is used, otherwise you get an error "[Class] is not defined"
        modalService: any, // Any is used, otherwise you get an error "[Class] is not defined"
        @Inject('Popups') popups: Popups | Popup,
        injector: any
    ) {
        super.initDataBoxExtensionComponent(
            viewContainerRef,
            renderer,
            provider,
            dataService,
            tasksLoaderManagerService,
            helperService,
            actionsService,
            modalService,
            popups,
            injector
        );

        this._treeViewComponent = this;
        this._expanded = {};
    }

    /**
     * Get nodes
     * @param index
     * @returns {*|null}
     */
    protected getNodes(index): any
    {
        return (
            ((index !== null)
            && this._dataService.getProviderAttr('objects')[index]
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

        if (iconField && object[iconField]) {
            let iconFieldMap = (this.getProviderAttr('iconFieldMap') || {});
            return (iconFieldMap[object[iconField]] || object[iconField]);
        }
        return (this.getProviderAttr('iconDefault') || null);
    }
}