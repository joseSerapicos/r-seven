import {Component, Inject, Injector, ViewContainerRef, Renderer} from '@angular/core';
import {DataService} from '../../../../../../AppBundle/Resources/public/ts/data-service/data.service';
import {ActionsService} from '../../../../../../AppBundle/Resources/public/ts/actions/actions.service';
import {DataBoxExtensionComponent, DataBoxProvider, Popups, Popup} from '../../../../../../AppBundle/Resources/public/ts/data-box/data-box.extension-component';
import {ModalService} from '../../../../../../AppBundle/Resources/public/modal/ts/modal.service';
import {Helper} from '../../../../../../AppBundle/Resources/public/ts/helper';

// Component
@Component({
    selector: '.js_clientDocumentInvoiceDetail',
    templateUrl: Helper.getGlobalVar('route') + 'template/index/base-document-invoice-detail/accounting'
})
export class ClientDocumentInvoiceDetailComponent extends DataBoxExtensionComponent
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
        @Inject('ParentDataService') protected _parentDataService: any // Used in view
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
}