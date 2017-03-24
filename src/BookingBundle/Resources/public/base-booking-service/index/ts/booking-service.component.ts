import {Component, Inject, Injector, ViewContainerRef, Renderer} from '@angular/core';
import {DataService} from '../../../../../../AppBundle/Resources/public/ts/data-service/data.service';
import {ActionsService} from '../../../../../../AppBundle/Resources/public/ts/actions/actions.service';
import {DataBoxExtensionComponent, DataBoxProvider, Popups, Popup} from '../../../../../../AppBundle/Resources/public/ts/data-box/data-box.extension-component';
import {ModalService} from '../../../../../../AppBundle/Resources/public/modal/ts/modal.service';
import {Helper} from '../../../../../../AppBundle/Resources/public/ts/helper';

// Component
@Component({
    selector: '.js_bookingService',
    templateUrl: Helper.getGlobalVar('route') + 'template/default/data-box' // Personalize here the booking pax template
})
export class BookingServiceComponent extends DataBoxExtensionComponent
{
    constructor(
        viewContainerRef: ViewContainerRef,
        renderer: Renderer,
        @Inject('Provider') dataBoxProvider: DataBoxProvider,
        @Inject('DataService') dataService: any,
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
            actionsService,
            modalService,
            popups,
            injector
        );
    }

    /**
     * Overrides parent
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
                            that._parentDataService.refreshObject();
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
}