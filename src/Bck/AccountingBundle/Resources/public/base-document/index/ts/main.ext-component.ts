import {Component, Inject, Injector, ViewContainerRef, Renderer} from '@angular/core';
import {DataService} from '../../../../../../../AppBundle/Resources/public/ts/data-service/data.service';
import {DataBoxExtensionComponent, DataBoxProvider, Popups, Popup} from '../../../../../../../AppBundle/Resources/public/data-box/ts/src/data-box.extension-component';


// Component
@Component({
    selector: '.js_document',
    template: ''
})
export class MainExtComponent extends DataBoxExtensionComponent
{
    constructor() { super(); }

    initBaseDocumentIndexMainExtComponent(
        viewContainerRef: any,
        renderer: any,
        @Inject('Provider') dataBoxProvider: DataBoxProvider,
        @Inject('DataService') dataService: any,
        tasksLoaderManagerService: any,
        @Inject('HelperService') helperService: any,
        actionsService: any,
        modalService: any,
        @Inject('Popups') popups: Popups | Popup,
        injector: any
    ) {
        // Call parent
        super.initDataBoxExtensionComponent(
            viewContainerRef,
            renderer,
            dataBoxProvider,
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
     * Overrides parent
     * @returns any
     */
    protected postCancelObject(): any
    {
        return this;
    }

    /**
     * Overrides parent
     * @returns any
     */
    protected postDeleteObject(): any
    {
        return this.postCancelObject();
    }
}