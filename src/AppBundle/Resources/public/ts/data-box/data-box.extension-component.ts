import {Component, Inject, Injector, ReflectiveInjector, ViewContainerRef, Renderer} from '@angular/core';
import {DataBoxProvider as DataBoxProvider} from './data-box-provider';
import {ModalService, Popup} from '../../modal/ts/modal.service';
import {DataService, OrderTypes} from '../data-service/data.service';
import {Helper} from '../helper';
import {BoxExtensionComponent} from '../box/box.extension-component';
import {ActionsService} from "../actions/actions.service";

// Reexports
export {Popup, DataBoxProvider};


// Popup Types
export var PopupTypes = {
    edit: 'edit',
    add: 'add'
};
// Popups interface (array of popups)
export interface Popups {
    [type: string]: Popup
}


// Component
@Component({
    selector: '.js_dataBox',
    template: ''
})
export abstract class DataBoxExtensionComponent extends BoxExtensionComponent {
    // Constructor vars
    protected _viewContainerRef: ViewContainerRef;
    protected _dataService: any;
    protected _actionsService: ActionsService;
    protected _modalService: ModalService;
    protected _popups: Popups | Popup;
    protected _injector: Injector;

    protected checkAll: boolean = false; // Control check all action

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
    public initDataBoxExtensionComponent(
        viewContainerRef: ViewContainerRef,
        renderer: Renderer,
        provider: DataBoxProvider,
        dataService: any, // Any is used, otherwise you get an error "[Class] is not defined"
        actionsService: ActionsService,
        modalService: ModalService,
        // You can provide a popup by action:
        // provide('Popups', {useValue: {
        //     add: Popup,
        //     edit: Popup
        // }})
        // Or a general popup for all actions:
        // provide('Popups', {useValue: Popup})
        popups: Popups | Popup, // Can be a list of popups by action, or only a popup
        // used to provide the correct injector to the popups
        injector: Injector
    ) {
        // Parent init (construct)
        super.initBoxExtensionComponent(
            viewContainerRef.element,
            renderer,
            provider
        );

        // Constructor vars
        this._viewContainerRef = viewContainerRef;
        this._dataService = dataService;
        this._actionsService = actionsService;
        this._modalService = modalService;
        this._popups = popups;
        this._injector = injector;

        this._modalService.init(this._viewContainerRef);
    }

    /**
     * Get column alignment.
     * @param field
     * @returns {any}
     */
    protected getColAlign(field: string): string
    {
        switch (this._dataService.getFields('metadata')[field].type) {
            case 'number':
            case 'percentage':
            case 'monetary':
            case 'date':
            case 'datetime':
                return 'txt-align-r';
            case 'boolean':
            case 'icon':
            case 'img':
            case 'status':
                return 'txt-align-c';
            default:
                return 'txt-align-l';
        }
    }

    /**
     * Trigger action
     * @param $event
     * @param action (can be provided by $event or directly in the call)
     * @param data (can be provided by $event or directly in the call)
     */
    protected triggerAction($event: any, action: string = null, data: any = null): void
    {
        if ($event) { $event.preventDefault(); }

        // Action to call
        action = (action || $event.target.getAttribute("data-action"));

        if (action) {
            // Data to send as parameter to action
            if (data == null) {
                data = ($event.target.getAttribute("data-value"));
            }

            // Call function
            let callback = (action + 'Action');
            if ($.isFunction(this[callback])) {
                if ((data != null) && (typeof data != 'undefined')) { // Can be 0 or ''
                    this[callback]($event, data);
                } else {
                    this[callback]($event);
                }
            }
        }
    }

    /**
     * Edit action
     * @param $event
     * @param data
     */
    public editAction($event: any, data: any): void
    {
        if ($event) { $event.preventDefault(); }

        // Check ACL
        if (!this._actionsService.getActionAttr('edit', 'isEnabled')) {
            return;
        }

        let that = this;
        this._dataService.selectObject(data).then(function(data) {
            that.openPopup(PopupTypes.edit);
        });
    }

    /**
     * Add action
     * @param $event
     */
    public addAction($event:any = null): void
    {
        if ($event) { $event.preventDefault(); }

        this._dataService.newObject();
        this.openPopup(PopupTypes.add);
    }

    /**
     * Copy action. Create a new object from another object
     * @param $event
     * @param data
     */
    public copyAction($event:any = null, data: any): void
    {
        if ($event) { $event.preventDefault(); }

        let that = this;
        this._dataService.newObject(data).then(
            data => {
                that.openPopup(PopupTypes.edit);
            },
            errors => { console.log(errors); }
        );
    }

    /**
     * Delete action.
     * @param $event
     * @param data
     */
    public deleteAction($event: any, data: any): void
    {
        if ($event) { $event.preventDefault(); }

        let that = this;

        // Dialog message
        this._modalService.dialog('Are you sure to remove?').then(
            hasConfirm => {
                if (hasConfirm) {
                    that._dataService.delete(data).then(
                        data => { return; },
                        errors => { return; }
                    );
                } else {
                    return;
                }
            },
            errors => {
                console.log(errors);
            }
        );
    }

    /**
     * Order up action.
     * @param $event
     * @param data
     */
    public orderUpAction($event: any, data: any): void
    {
        if ($event) { $event.preventDefault(); }
        this._dataService.order(data, OrderTypes.up);
    }

    /**
     * Order down action.
     * @param $event
     * @param data
     */
    public orderDownAction($event: any, data: any): void
    {
        if ($event) { $event.preventDefault(); }
        this._dataService.order(data, OrderTypes.down);
    }

    /**
     * Delete all checked elements action.
     * @param $event
     */
    public deleteAllAction($event: any): void
    {
        if (!$event) { return; }
        $event.preventDefault();

        let $form = $($event.currentTarget).parents('.ibox').find('.ibox-content form');
        let data = $form.serializeArray();

        if(data.length) {
            // Dialog message
            this._modalService.dialog().then(
                hasConfirm => {
                    if (hasConfirm) {
                        this._dataService.deleteArray(data);
                    } else {
                        return;
                    }
                },
                errors => {
                    console.log(errors);
                }
            );
        }
    }

    /**
     * Submit choices
     * @param route (route to submit choices)
     * @param allowEmptySubmit (allow submit when data is empty,
     * some cases it is necessary to inform that the user does not select any choice)
     * @returns {Promise}
     */
    public submitChoices(route: string, allowEmptySubmit: boolean = false): Promise<any>
    {
        let $form = $(this._elementRef.nativeElement).find('.ibox-content form'),
            data = $form.serializeArray(),
            that = this;

        return new Promise(function(resolve, reject) {
            return that._dataService.submitIndexesId(route, data, allowEmptySubmit).then(
                data => { return resolve(data); },
                errors => { console.log(errors); return reject(errors); }
            );
        });
    }

    /**
     * Detail action.
     * @param $event
     * @param data
     */
    public detailAction($event: any, data: any): void
    {
        if ($event) { $event.preventDefault(); }
        this._dataService.detail(data);
    }

    /**
     * Check all action.
     * @param $event
     */
    protected checkAllAction($event: any = null): void
    {
        if ($event) { $event.preventDefault(); }
        this.checkAll = !this.checkAll;
    }

    /**
     * Refresh all objects list.
     * @param $event
     */
    public refreshAction($event: any = null): void
    {
        if ($event) { $event.preventDefault(); }
        this._dataService.refresh();
    }

    /**
     * Open popup
     * @param popupType
     * @returns {DataBoxExtensionComponent}
     */
    protected openPopup(popupType = PopupTypes.edit): DataBoxExtensionComponent
    {
        // Set edit as default popup type if is not a valid entry
        popupType = (PopupTypes[popupType] || PopupTypes.edit);
        let popup: Popup = this._popups[popupType] || this._popups;

        // Open popup
        this._modalService.popup(popup, this._injector).then(
            data => { return; },
            errors => { console.log(errors); return; }
        );

        return this;
    }
}