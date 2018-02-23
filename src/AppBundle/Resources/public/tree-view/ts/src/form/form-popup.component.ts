import {Component, Inject, Injector, ViewContainerRef, EventEmitter, Renderer} from '@angular/core';
import {IModalPopup} from '../../../../modal/ts/modal.service';
import {TreeViewDataService as DataService} from '../../../../ts/data-service/tree-view-data.service';
import {ActionsService} from '../../../../ts/actions/actions.service';
import {Popups, Popup} from '../../../../data-box/ts/src/data-box.component';
import {ModalService} from '../../../../modal/ts/modal.service';
import {FormService} from '../../../../ts/form/form.service';
import {TreeViewProvider} from '../tree-view-provider';
import {FormPopupExtComponent} from './form-popup.ext-component';


@Component({
    selector: '.js_formPopup',
    template: '' // Define template in child component
})
export class FormPopupComponent extends FormPopupExtComponent implements IModalPopup
{
    constructor(
        viewContainerRef: ViewContainerRef,
        renderer: Renderer,
        @Inject('Provider') provider: TreeViewProvider,
        @Inject('DataService') dataService: any, // Any is used, otherwise you get an error "[Class] is not defined"
        actionsService: ActionsService, // Any is used, otherwise you get an error "[Class] is not defined"
        modalService: ModalService, // Any is used, otherwise you get an error "[Class] is not defined"
        @Inject('Popups') popups: Popups | Popup,
        injector: Injector,
        formService: FormService, // Any is used, otherwise you get an error "[Class] is not defined"
    ) {
        // Call parent
        super();
        super.initFormPopupExtComponent(
            viewContainerRef,
            renderer,
            provider,
            dataService,
            actionsService,
            modalService,
            popups,
            injector,
            formService
        );
    }
}