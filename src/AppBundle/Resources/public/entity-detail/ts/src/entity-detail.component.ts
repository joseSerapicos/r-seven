import {Component, Inject, ElementRef, Renderer, ReflectiveInjector, Injector, ViewContainerRef} from '@angular/core';
import {DataService} from '../../../ts/data-service/data.service';
import {ModalService, Popup} from '../../../modal/ts/modal.service';
import {BaseExtensionComponent} from '../../../ts/base/base.extension-component';
import {EntityDetailProvider} from './entity-detail-provider';
import {ActionsService} from '../../../ts/actions/actions.service';
import {TasksLoaderManagerService} from '../../../tasks-loader-manager/ts/tasks-loader-manager.service';

// Reexports
export {EntityDetailProvider};


@Component({
    selector: '.js_entityDetail',
    templateUrl: '../templates/entity-detail.component.html'
})
export class EntityDetailComponent extends BaseExtensionComponent
{
    protected hasInsertInfo: boolean = true;
    protected _object: any;
    protected _fields: any;
    protected _onObjectChangeSubscription: any; // To get notify about changes on object over the service

    constructor(
        protected _viewContainerRef: ViewContainerRef,
        renderer: Renderer,
        @Inject('EntityDetailProvider') provider: EntityDetailProvider,
        @Inject('Popup') protected _popup: Popup,
        @Inject('DataService') protected _dataService: any,
        protected _tasksLoaderManagerService: TasksLoaderManagerService,
        protected _actionsService: ActionsService,
        protected _modalService: ModalService,
        @Inject('HelperService') private _helperService: any, // Used in template
        protected _injector: Injector
    ) {
        super();
        this.initBaseExtensionComponent(
            _viewContainerRef.element,
            renderer,
            provider
        );

        this._modalService.init(this._viewContainerRef);

        // Get fields from DataService
        this._fields = (this._dataService.getProviderAttr('fields') || {});

        this._onObjectChangeSubscription = this._dataService.getOnObjectChangeEmitter()
            .subscribe(object => this.refresh());

        if (this._provider['hasInsertInfo'] !== undefined) {
            this.hasInsertInfo = this._provider['hasInsertInfo'];
        }

        this.refresh();
    }

    /**
     * Trigger action
     * @param $event
     * @param action (can be provided by $event or directly in the call)
     */
    public triggerAction($event: any, action: string = null): void
    {
        if ($event) { $event.preventDefault(); }

        // Action to call
        action = (action || $event.target.getAttribute("data-action"));

        if (action) {
            // Call function
            let callback = (action + 'Action');
            if ($.isFunction(this[callback])) {
                this[callback]($event);
            }
        }
    }

    /**
     * Edit action
     * @param $event
     */
    protected editAction($event:any = null): void
    {
        if ($event) { $event.preventDefault(); }

        if (!this._popup) {
            return;
        }

        // Open popup
        this._modalService.popup(this._popup, this._injector).then(
            data => { return; },
            errors => { console.log(errors); return; }
        );
    }

    /**
     * Refresh
     */
    protected refresh(): void
    {
        this._object = this._dataService.getNormalizedObject();
    }

    /**
     * Lifecycle callback
     */
    ngOnDestroy()
    {
        this._onObjectChangeSubscription.unsubscribe();
    }
}