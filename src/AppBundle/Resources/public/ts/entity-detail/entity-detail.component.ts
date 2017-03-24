import {Component, Inject, ElementRef, Renderer, ReflectiveInjector, Injector, ViewContainerRef} from '@angular/core';
import {DataService} from '../data-service/data.service';
import {ModalService} from '../../modal/ts/modal.service';
import {BaseExtensionComponent} from '../base/base.extension-component';
import {Helper} from '../helper';
import {EntityDetailProvider} from './entity-detail-provider';
import {ActionsService} from '../actions/actions.service';

// Reexports
export {EntityDetailProvider};


@Component({
    selector: '.js_entityDetail',
    templateUrl: Helper.getGlobalVar('route') + 'template/dynamic-entity-detail/partial'
})
export class EntityDetailComponent extends BaseExtensionComponent
{
    protected _object: any;
    protected _fields: any;
    protected _fieldsMetadata: any;
    protected _onObjectChangeSubscription: any; // To get notify about changes on object over the service

    constructor(
        protected _viewContainerRef: ViewContainerRef,
        renderer: Renderer,
        @Inject('EntityDetailProvider') provider: EntityDetailProvider,
        @Inject('DataService') protected _dataService: any,
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
        this._fields = (this._dataService.getFields('view') || []);
        this._fieldsMetadata = (this._dataService.getFields('metadata') || []);

        this._dataService.setObject(this._dataService.getProviderAttr('object'));

        this._onObjectChangeSubscription = this._dataService.getOnObjectChangeEmitter()
            .subscribe(object => this.refresh());
        
        this.refresh();
    }

    /**
     * Trigger action
     * @param $event
     * @param action (can be provided by $event or directly in the call)
     */
    protected triggerAction($event: any, action: string = null): void
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

        let popup = this.getProviderAttr('popup');

        if (!popup) {
            return;
        }

        // Open popup
        this._modalService.popup(popup, this._injector).then(
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