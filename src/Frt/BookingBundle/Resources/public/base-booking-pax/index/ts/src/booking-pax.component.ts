import {Component, Inject, Injector, ViewContainerRef, Renderer} from '@angular/core';
import {DataService} from '../../../../../../../../AppBundle/Resources/public/ts/data-service/data.service';
import {ActionsService} from '../../../../../../../../AppBundle/Resources/public/ts/actions/actions.service';
import {DataBoxExtensionComponent, DataBoxProvider, Popups, Popup} from '../../../../../../../../AppBundle/Resources/public/data-box/ts/src/data-box.extension-component';
import {ModalService} from '../../../../../../../../AppBundle/Resources/public/modal/ts/modal.service';
import {TasksLoaderManagerService} from '../../../../../../../../AppBundle/Resources/public/tasks-loader-manager/ts/tasks-loader-manager.service';


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

    // Copy of client pax fields to controls when this property change in parent object
    protected _clientPax: {clientIsPax: boolean; bookingPaxObj: any};

    constructor(
        viewContainerRef: ViewContainerRef,
        renderer: Renderer,
        @Inject('Provider') dataBoxProvider: DataBoxProvider,
        @Inject('DataService') dataService: any,
        tasksLoaderManagerService: TasksLoaderManagerService,
        @Inject('HelperService') helperService: any,
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
            helperService,
            actionsService,
            modalService,
            popups,
            injector
        );

        // Save initial value
        this._clientPax = {
            clientIsPax: this._parentDataService.getObject()['clientIsPax'],
            bookingPaxObj: this._parentDataService.getObject()['bookingPaxObj']
        };
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
        if (this._clientPax.clientIsPax != object['clientIsPax']) {
            // Update fields
            this._clientPax.clientIsPax = object['clientIsPax'];
            this._clientPax.bookingPaxObj = object['bookingPaxObj'];

            // Refresh objects, because parent change pax
            this._dataService.refresh();
        }
    }

    /**
     * Post (after) delete object event. Use this function to handle event.
     * @param object
     * @return any
     */
    protected postDeleteObject(object)
    {
        // Only make sense if clientIsPax is active and is the client pax object
        if (this._clientPax.clientIsPax &&
            (this._clientPax.bookingPaxObj == object['bookingPaxObj'])) {
            this._parentDataService.refreshObject();
        }

        return this;
    }

    /**
     * Lifecycle callback
     */
    ngOnDestroy()
    {
        this._onParentObjectChangeSubscription.unsubscribe();
    }
}