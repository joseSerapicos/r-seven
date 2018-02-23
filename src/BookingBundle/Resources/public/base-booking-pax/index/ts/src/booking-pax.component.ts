import {Component, Inject, Injector, ViewContainerRef, Renderer} from '@angular/core';
import {DataService} from '../../../../../../../AppBundle/Resources/public/ts/data-service/data.service';
import {ActionsService} from '../../../../../../../AppBundle/Resources/public/ts/actions/actions.service';
import {DataBoxExtensionComponent, DataBoxProvider, Popups, Popup} from '../../../../../../../AppBundle/Resources/public/data-box/ts/src/data-box.extension-component';
import {ModalService} from '../../../../../../../AppBundle/Resources/public/modal/ts/modal.service';
import {TasksLoaderManagerService} from '../../../../../../../AppBundle/Resources/public/tasks-loader-manager/ts/tasks-loader-manager.service';


// Component
@Component({
    selector: '.js_bookingPax',
    templateUrl: '../templates/booking-pax.component.html'
})
export class BookingPaxComponent extends DataBoxExtensionComponent
{
    // To get notify about changes on parent object,
    // so we can refresh the objects and keep them updated (feature "clientIsPax" in parent can change booking pax data)
    protected _onParentObjectChangeSubscription: any;

    protected _clientIsPax: boolean; // Copy of field to controls when this property change in parent object

    constructor(
        viewContainerRef: ViewContainerRef,
        renderer: Renderer,
        @Inject('Provider') dataBoxProvider: DataBoxProvider,
        @Inject('DataService') dataService: any,
        tasksLoaderManagerService: TasksLoaderManagerService,
        actionsService: ActionsService,
        modalService: ModalService,
        @Inject('Popups') popups: Popups | Popup,
        injector: Injector,
        @Inject('ParentDataService') protected _parentDataService: any
    ) {
        // Call parent
        super();
        super.initDataBoxExtensionComponent(
            viewContainerRef,
            renderer,
            dataBoxProvider,
            dataService,
            tasksLoaderManagerService,
            actionsService,
            modalService,
            popups,
            injector
        );

        this._clientIsPax = this._parentDataService.getObject()['clientIsPax']; // Save initial value
        this._onParentObjectChangeSubscription = this._parentDataService.getOnObjectChangeEmitter()
            .subscribe(object => this.onParentObjectChange(object));
    }


    /**
     * On parent object change
     * @param object
     */
    protected onParentObjectChange(object): void
    {
        // Check if "clientIsPax" change
        if (this._clientIsPax != object['clientIsPax']) {
            this._clientIsPax = object['clientIsPax'];
            // Refresh objects, because parent change pax
            this._dataService.refresh();
        }
    }

    /**
     * Overrides parent.
     * If pax was removed, the removed pax can be the "clientIsPax" of bookingObj, so we need to refresh the bookingObj
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
                            data => {
                                // Only make sense if clientIsPax is active
                                if (that._clientIsPax) {
                                    that._parentDataService.refreshObject();
                                }
                                return;
                            },
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
     * Lifecycle callback
     */
    ngOnDestroy()
    {
        this._onParentObjectChangeSubscription.unsubscribe();
    }
}