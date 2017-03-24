import {Component, Inject, Injector, ViewContainerRef, Renderer} from '@angular/core';
import {TreeViewDataService as DataService} from '../data-service/tree-view-data.service';
import {ActionsService} from '../actions/actions.service';
import {Popup, Popups} from '../data-box/data-box.component';
import {ModalService} from '../../modal/ts/modal.service';
import {TreeViewComponent, TreeViewProvider} from './tree-view.component';
import {Helper} from '../helper.ts';

// Re-exports
export {TreeViewProvider}


@Component({
    selector: '.js_treeViewForm',
    templateUrl: Helper.getRuntimeVar('templateUrl')
})
export class TreeViewFormComponent extends TreeViewComponent
{
    protected _$form = null; // Object form
    protected _nodes: any; // Copy of objects to control user changes
    protected _onObjectsChangeSubscription: any; // To get notify about changes on objects over the service

    constructor(
        viewContainerRef: ViewContainerRef,
        renderer: Renderer,
        @Inject('Provider') provider: TreeViewProvider,
        @Inject('DataService') dataService: any,
        actionsService: ActionsService,
        modalService: ModalService,
        @Inject('Popups') popups: Popups | Popup,
        injector: Injector,
        @Inject('HelperService') protected _helperService: any
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
        this.setNodes();
        this._onObjectsChangeSubscription = this._dataService.getOnObjectsChangeEmitter()
            .subscribe(objects => this.setNodes(objects));
    }

    /**
     * Get nodes
     * @param index
     * @returns {*|null}
     */
    public getNodes(index = null): any
    {
        if (index === null) {
            return this._nodes;
        }
        return this._nodes[index] || null;
    }

    /**
     * Set nodes
     * @returns {TreeViewFormComponent}
     * @param objects
     */
    protected setNodes(objects = null): TreeViewFormComponent
    {
        objects = (objects ? objects : this._dataService.getProviderAttr('objects'));
        this._nodes = {};

        for (let objsKey in objects) {
            this._nodes[objsKey] = [];
            for (let objKey in objects[objsKey]) {
                // Clone objects, otherwise wen the object is in edition, the original object is changed also
                // (the reference is the same)
                this._nodes[objsKey].push(this._helperService.cloneObject(objects[objsKey][objKey]));
            }
        }
        return this;
    }

    /**
     * Save object. Handle submit form.
     * This method should be called from child component.
     * @returns {Promise}
     */
    protected save(): Promise<any>
    {
        let that = this;

        return new Promise(function(resolve, reject) {
            // Current form object has changes from user?
            if(!Helper.isEqualObject(that._nodes, that._dataService.getProviderAttr('objects'))) {
                // Get form data
                let formData = that._$form.serialize();

                // Save form
                return that._dataService.save(formData);
            }
            return resolve(true);
        });
    }

    /**
     * Save action.
     * This method should be called from view/template.
     * @param $event
     * @param closePopup
     */
    public saveAction($event: any = null, closePopup = false): void
    {
        if ($event) { $event.preventDefault(); }
        this.save().then(
            data => { return; },
            errors => { console.log(errors); return; }
        );
    }

    /**
     * Reset form. This method should be called from child component.
     * @returns {Promise<T>}
     */
    protected reset(): Promise<any>
    {
        let that = this;

        return new Promise(function(resolve, reject) {
            // Current form object has changes from user?
            if (!that._helperService.isEqualObject(that._nodes, that._dataService.getProviderAttr('objects'))
                && (that._helperService.objectLength(that._nodes) > 0) // {} != [] But doesn't make sense to ask the user!
            ) {
                // Dialog message
                return that._modalService.dialog().then(
                    hasConfirm => {
                        if (hasConfirm) {
                            that.setNodes();
                            return resolve(true);
                        } else {
                            return reject(false);
                        }
                    },
                    errors => { console.log(errors); return reject(false); }
                );
            } else {
                return resolve(true);
            }
        });
    }

    /**
     * Reset action. This method should be called from view/template.
     * @param $event
     */
    protected resetAction($event: any = null): void
    {
        if ($event) { $event.preventDefault(); }
        this.reset().then(
            data => { return; },
            errors => { console.log(errors); return; }
        );
    }

    /**
     * Lifecycle callback
     */
    ngOnInit()
    {
        this._$form = $(this._viewContainerRef.element.nativeElement).find('form');
    }

    /**
     * Lifecycle callback
     */
    ngOnDestroy()
    {
        this._onObjectsChangeSubscription.unsubscribe();
    }
}