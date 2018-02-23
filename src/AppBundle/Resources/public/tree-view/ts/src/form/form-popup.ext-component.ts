import {Component, Inject, Injector, ViewContainerRef, EventEmitter, Renderer} from '@angular/core';
import {IModalPopup} from '../../../../modal/ts/modal.service';
import {TreeViewDataService as DataService} from '../../../../ts/data-service/tree-view-data.service';
import {Popups, Popup} from '../../../../data-box/ts/src/data-box.component';
import {FormService} from '../../../../ts/form/form.service';
import {TreeViewExtComponent, TreeViewProvider} from '../tree-view.ext-component';


@Component({
    selector: '.js_formPopup',
    template: ''
})
export class FormPopupExtComponent extends TreeViewExtComponent implements IModalPopup
{
    // Constructor vars
    protected _formService: FormService; // FormService of parent (not a new FormService)

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
     */
    public initFormPopupExtComponent(
        viewContainerRef: any, // Any is used, otherwise you get an error "[Class] is not defined"
        renderer: any, // Any is used, otherwise you get an error "[Class] is not defined"
        @Inject('Provider') provider: TreeViewProvider,
        @Inject('DataService') dataService: any, // Any is used, otherwise you get an error "[Class] is not defined"
        tasksLoaderManagerService: any,
        actionsService: any, // Any is used, otherwise you get an error "[Class] is not defined"
        modalService: any, // Any is used, otherwise you get an error "[Class] is not defined"
        @Inject('Popups') popups: Popups | Popup,
        injector: any,
        // FormService of parent (not a new FormService)
        formService: any,  // Any is used, otherwise you get an error "[Class] is not defined"
    ) {
        // Call parent
        super.initTreeViewExtComponent(
            viewContainerRef,
            renderer,
            provider,
            dataService,
            tasksLoaderManagerService,
            actionsService,
            modalService,
            popups,
            injector
        );

        // Constructor vars
        this._formService = formService;

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
                data => { return resolve(data); },
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