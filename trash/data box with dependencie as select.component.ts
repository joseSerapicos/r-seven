import {Component, ElementRef, Injector, Inject, Renderer, ViewContainerRef} from '@angular/core';
import {DataService} from '../../../../../../AppBundle/Resources/public/ts/data-service/data.service';
import {Helper} from '../../../../../../AppBundle/Resources/public/ts/helper';
import {ModalService} from '../../../../../../AppBundle/Resources/public/modal/ts/modal.service';
import {FormService, IForm} from '../../../../../../AppBundle/Resources/public/form/ts/form.service';
import {TreeViewFormComponent, TreeViewProvider} from '../../../../../../AppBundle/Resources/public/tree-view/default/ts/tree-view-form.component';
import {Actions, Popups, Popup} from '../../../../../../AppBundle/Resources/public/data-box/ts/src/data-box.component';


@Component({
    selector: '#js_main',
    templateUrl: Helper.getAppVar('route') + 'admin/user-group-acl-menu/edit/0/0'
})
export class MainComponent extends TreeViewFormComponent implements IForm
{
    protected _baseRoute: string; // Base route to submit form
    
    constructor(
        viewContainerRef: ViewContainerRef,
        renderer: Renderer,
        @Inject('Provider') provider: TreeViewProvider,
        @Inject('DataService') dataService: any,
        modalService: ModalService,
        @Inject('Actions') actions: Actions,
        @Inject('Popups') popups: Popups | Popup,
        injector: Injector,
        @Inject('HelperService') helperService: any,
        public _elementRef: ElementRef,
        protected _formService: FormService
    ) {
        super(
            viewContainerRef,
            renderer,
            provider,
            dataService,
            modalService,
            actions,
            popups,
            injector,
            helperService
        );

        // Base route
        let route = this._dataService.getRoute('edit');
        this._baseRoute = route.substr(0, route.length - 8);
    }

    /**
     * Load action
     * @param $event
     */
    protected loadAction($event): void
    {
        $event.preventDefault();

        // Load only if form has changed
        if(this._formService.hasChanges()) {
            let that = this;

            // Before load, check if the current object has unsaved changes
            this.reset().then(
                data => {
                    that.getUserAcl();
                    return;
                },
                errors => { that._formService.reset(false); return; }
            );
        }
    }

    /**
     * Get user-group-acl-menu objects.
     * @returns {MainComponent}
     */
    protected getUserAcl(): MainComponent
    {
        // Update route with parents info
        let parentsPartialRoute = (
            '\\' + this._helperService.getAppVar('conf')['object'][0]['id']
            + '\\' + this._formService.getObject()['storeObj']
        );
        this._dataService.setRoute('edit', this._baseRoute + 'edit' + parentsPartialRoute); // To save
        this._dataService.setRoute('get', this._baseRoute + 'get' + parentsPartialRoute); // To refresh

        // Update object in FormService (to avoid multiple search for the same data)
        this._formService.setObject(this._formService.getObject());

        // Refresh DataService to get user-acl objects
        this._dataService.refresh();

        return this;
    }

    /**
     * Lifecycle callback
     */
    ngAfterViewInit()
    {
        this._formService.init(this);
    }
}