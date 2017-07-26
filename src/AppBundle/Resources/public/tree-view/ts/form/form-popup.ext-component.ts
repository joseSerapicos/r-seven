import {Component, Inject, Injector, ViewContainerRef, EventEmitter, Renderer} from '@angular/core';
import {IModalPopup} from '../../../modal/ts/modal.service';
import {TreeViewDataService as DataService} from '../../../ts/data-service/tree-view-data.service';
import {ActionsService} from '../../../ts/actions/actions.service';
import {Popups, Popup} from '../../../ts/data-box/data-box.component';
import {ModalService} from '../../../modal/ts/modal.service';
import {Helper} from '../../../ts/helper.ts';
import {FormService} from '../../../ts/form/form.service';
import {TreeViewExtComponent, TreeViewProvider} from '../../../tree-view/ts/tree-view.ext-component';


@Component({
    selector: '.js_formPopup',
    template: ''
})
export class FormPopupExtComponent extends TreeViewExtComponent implements IModalPopup
{
    // Constructor vars
    protected _formService: FormService; // FormService of parent (not a new FormService)
    protected _targetDataService: DataService; // Target DataService to refresh objects after add the new entries

    // Modal parameters
    onDismissEmitter: EventEmitter<any> = new EventEmitter();

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
     * @param formService
     * @param targetDataService
     */
    public initFormPopupExtComponent(
        viewContainerRef: ViewContainerRef,
        renderer: Renderer,
        @Inject('Provider') provider: TreeViewProvider,
        @Inject('DataService') dataService: any, // Any is used, otherwise you get an error "[Class] is not defined"
        actionsService: any, // Any is used, otherwise you get an error "[Class] is not defined"
        modalService: any, // Any is used, otherwise you get an error "[Class] is not defined"
        @Inject('Popups') popups: Popups | Popup,
        injector: Injector,
        // FormService of parent (not a new FormService)
        formService: any,  // Any is used, otherwise you get an error "[Class] is not defined"
        @Inject('TargetDataService') targetDataService: any // Any is used, otherwise you get an error "[Class] is not defined"
    ) {
        // Call parent
        super.initTreeViewExtComponent(
            viewContainerRef,
            renderer,
            provider,
            dataService,
            actionsService,
            modalService,
            popups,
            injector
        );

        // Constructor vars
        this._formService = formService;
        this._targetDataService = targetDataService;

        // Get first object for tree view
        this._dataService.getMoreObjects();
    }

    /**
     * Save object. Handle submit form.
     * This override add a closePopup behavior.
     * This method should be called from child component.
     * @returns {Promise}
     */
    public save(): Promise<any>
    {
        let that = this;

        return new Promise(function(resolve, reject) {
            let route = that._dataService.getRoute('add');

            that.submitChoices(route).then(
                data => {
                    that._targetDataService.refresh();
                    return resolve(data);
                },
                errors => { return reject(errors); }
            );
        });
    }

    /**
     * Save and close popup action.
     * This method should be called from view/template.
     * @param $event
     */
    public saveAndCloseAction($event: any = null): void
    {
        if ($event) { $event.preventDefault(); }
        this.save().then(
            data => { this.closeAction(); return; },
            errors => { return; }
        );
    }

    /**
     * Cancel action.
     * This method should be called from view/template.
     * @param $event
     */
    public cancelAction($event: any = null): void
    {
        if ($event) { $event.preventDefault(); }
        this.closeAction($event);
    }

    /**
     * Close action.
     * @param $event
     */
    public closeAction($event: any = null): void
    {
        if ($event) { $event.preventDefault(); }
        this.onDismissEmitter.emit(null);
    }
}