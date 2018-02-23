import {Component, Inject, ElementRef, Renderer, ViewChild, ViewChildren, ViewContainerRef, QueryList} from '@angular/core';
import {WizardManagerService, IWizardManager as IWizard, LazyLoadData} from './wizard-manager.service';
import {WizardPopupExtComponent} from './wizard-popup.ext-component';
import {WizardPopupProvider} from './wizard-popup-provider';

// Reexports
export {WizardPopupProvider, IWizard, LazyLoadData};


@Component({
    selector: '.js_wizard',
    template: '' // Define template in child component
})
export class WizardPopupComponent extends WizardPopupExtComponent
{
    constructor(
        elementRef: ElementRef,
        renderer: Renderer,
        @Inject('Provider') provider: WizardPopupProvider,
        wizardManagerService: WizardManagerService
    ) {
        super();
        super.initWizardPopupExtComponent(
            elementRef,
            renderer,
            provider,
            wizardManagerService
        );
    }
}