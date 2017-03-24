import {Component, Inject, ElementRef, Renderer, ViewChild, ViewChildren, ViewContainerRef, QueryList} from '@angular/core';
import {WizardManagerService, IWizardManager as IWizard, LazyLoadData} from './wizard-manager.service';
import {Helper} from '../helper';
import {BaseModalPopup} from '../../modal/ts/modal.service';
import {WizardPopupProvider} from './wizard-popup-provider';

// Reexports
export {WizardPopupProvider, IWizard, LazyLoadData};


@Component({
    selector: '.js_wizard',
    templateUrl: Helper.getRuntimeVar('templateUrl')
})
export class WizardPopupComponent extends BaseModalPopup
{
    // For NavManagerService
    @ViewChildren('js_lazyLoadContainer', {read: ViewContainerRef}) lazyLoadViewContainerRefQL: QueryList<ViewContainerRef>;

    constructor(
        elementRef: ElementRef,
        renderer: Renderer,
        @Inject('Provider') provider: WizardPopupProvider,
        protected _wizardManagerService: WizardManagerService
    ) {
        super(
            elementRef,
            renderer,
            provider
        );
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