import {Component, Inject, Injector, ReflectiveInjector, ViewContainerRef, Renderer} from '@angular/core';
import {DataBoxExtensionComponent, DataBoxProvider, Popup, Popups, PopupTypes} from './data-box.extension-component';
import {ModalService} from '../../modal/ts/modal.service';
import {DataService, OrderTypes} from '../data-service/data.service';
import {Helper} from '../helper';
import {ActionsService} from "../actions/actions.service";

// Reexports
export {DataBoxProvider, Popup, Popups, PopupTypes};


// Component
@Component({
    selector: '.js_dataBox',
    templateUrl: Helper.getGlobalVar('route') + 'template/default/data-box'
})
export class DataBoxComponent extends DataBoxExtensionComponent
{
    constructor(
        viewContainerRef: ViewContainerRef,
        renderer: Renderer,
        @Inject('Provider') provider: DataBoxProvider,
        @Inject('DataService') dataService: any,
        actionsService: ActionsService,
        modalService: ModalService,
        @Inject('Popups') popups: Popups | Popup,
        injector: Injector
    ) {
        // Call parent
        super();
        super.initDataBoxExtensionComponent(
            viewContainerRef,
            renderer,
            provider,
            dataService,
            actionsService,
            modalService,
            popups,
            injector
        );
    }
}