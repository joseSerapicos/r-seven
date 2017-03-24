import {Component, Inject, Injector, ViewContainerRef, Renderer} from '@angular/core';
import {DataService} from '../data-service/data.service';
import {ActionsService} from '../actions/actions.service';
import {DataBoxComponent, DataBoxProvider, Popups, Popup} from '../data-box/data-box.component';
import {ModalService} from '../../modal/ts/modal.service';
import {Helper} from '../helper';

// Component
@Component({
    selector: '.js_observation',
    templateUrl: Helper.getGlobalVar('route') + 'template/default/observation'
})
export class ObservationComponent extends DataBoxComponent
{
    constructor(
        viewContainerRef: ViewContainerRef,
        renderer: Renderer,
        @Inject('Provider') dataBoxProvider: DataBoxProvider,
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
            dataBoxProvider,
            dataService,
            actionsService,
            modalService,
            popups,
            injector
        );
    }
}