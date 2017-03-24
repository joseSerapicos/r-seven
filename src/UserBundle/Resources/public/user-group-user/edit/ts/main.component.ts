import {Component, ElementRef, Injector, Inject, Renderer, ViewContainerRef} from '@angular/core';
import {DataService} from '../../../../../../AppBundle/Resources/public/ts/data-service/data.service';
import {ActionsService} from '../../../../../../AppBundle/Resources/public/ts/actions/actions.service';
import {Helper} from '../../../../../../AppBundle/Resources/public/ts/helper';
import {ModalService} from '../../../../../../AppBundle/Resources/public/modal/ts/modal.service';
import {FormService, IForm} from '../../../../../../AppBundle/Resources/public/ts/form/form.service';
import {DataBoxComponent, DataBoxProvider, Popups, Popup} from '../../../../../../AppBundle/Resources/public/ts/data-box/data-box.component';


@Component({
    selector: '.js_main',
    templateUrl: Helper.getGlobalVar('route') + 'user/user-group-user/edit/0'
})
export class MainComponent extends DataBoxComponent implements IForm {

    constructor(
        viewContainerRef: ViewContainerRef,
        renderer: Renderer,
        @Inject('Provider') provider: DataBoxProvider,
        @Inject('DataService') dataService: any,
        actionsService: ActionsService,
        modalService: ModalService,
        @Inject('Popups') popups: Popups | Popup,
        injector: Injector,
        @Inject('HelperService') protected _helperService: any,
        public _elementRef: ElementRef,
        protected _formService: FormService
    ) {
        super(
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

    /**
     * Lifecycle callback
     */
    ngAfterViewInit()
    {
        this._formService.init(this);
    }
}