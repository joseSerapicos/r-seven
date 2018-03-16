import {Component, ElementRef, Injector, Inject, Renderer, ViewContainerRef} from '@angular/core';
import {DataService} from '../../../../../../../AppBundle/Resources/public/ts/data-service/data.service';
import {ActionsService} from '../../../../../../../AppBundle/Resources/public/ts/actions/actions.service';
import {ModalService} from '../../../../../../../AppBundle/Resources/public/modal/ts/modal.service';
import {FormService, IForm} from '../../../../../../../AppBundle/Resources/public/ts/form/form.service';
import {DataBoxComponent, DataBoxProvider, Popups, Popup} from '../../../../../../../AppBundle/Resources/public/data-box/ts/src/data-box.component';
import {TasksLoaderManagerService} from '../../../../../../../AppBundle/Resources/public/tasks-loader-manager/ts/tasks-loader-manager.service';


@Component({
    selector: '.js_edit',
    templateUrl: '../templates/edit.component.html'
})
export class EditComponent extends DataBoxComponent implements IForm {

    constructor(
        viewContainerRef: ViewContainerRef,
        renderer: Renderer,
        @Inject('Provider') provider: DataBoxProvider,
        @Inject('DataService') dataService: any,
        tasksLoaderManagerService: TasksLoaderManagerService,
        @Inject('HelperService') helperService: any,
        actionsService: ActionsService,
        modalService: ModalService,
        @Inject('Popups') popups: Popups | Popup,
        injector: Injector,
        public _elementRef: ElementRef,
        protected _formService: FormService
    ) {
        super(
            viewContainerRef,
            renderer,
            provider,
            dataService,
            tasksLoaderManagerService,
            helperService,
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