import {Component, Inject, ElementRef, Renderer, ViewChild, ViewChildren, ViewContainerRef, QueryList} from '@angular/core';
import {IWizardManager as IWizard, LazyLoadData} from './wizard-manager.service';
import {BaseModalPopupExt} from '../../../modal/ts/modal.service';
import {WizardPopupProvider} from './wizard-popup-provider';

// Reexports
export {WizardPopupProvider, IWizard, LazyLoadData};


@Component({
    selector: '.js_wizard',
    template: '' // Define template in child component
})
export class WizardPopupExtComponent extends BaseModalPopupExt
{
    // Constructor vars
    protected _wizardManagerService: any;

    // For NavManagerService
    @ViewChildren('js_lazyLoadContainer', {read: ViewContainerRef}) lazyLoadViewContainerRefQL: QueryList<ViewContainerRef>;

    constructor() { super(); }

    public initWizardPopupExtComponent(
        elementRef: any,
        renderer: any,
        @Inject('Provider') provider: WizardPopupProvider,
        wizardManagerService: any, // Any is used, otherwise you get an error "[Class] is not defined"
    ) {
        super.initBaseModalPopupExt(
            elementRef,
            renderer,
            provider
        );
        this._wizardManagerService = wizardManagerService;
    }

    /**
     * Lifecycle callback
     */
    ngAfterViewInit()
    {
        // Initializes the children navigation manager service
        this._wizardManagerService.init(this, this.lazyLoadViewContainerRefQL);
    }

    /**
     * Lifecycle callback
     */
    ngOnDestroy()
    {
        // Free variables
        this._wizardManagerService.reset();
    }
}