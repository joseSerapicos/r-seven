import {Component, ElementRef, Inject, Optional, Injector, Renderer, ViewContainerRef, QueryList, ViewChild, ViewChildren} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {FormService, IForm} from '../../../form/ts/form.service';
import {WizardManagerService, IWizardManager as IWizard, LazyLoadData} from './wizard-manager.service';
import {WizardFormPopupExtComponent, WizardPopupProvider} from './wizard-form-popup.ext-component';

// Reexports
export {WizardPopupProvider, IWizard, LazyLoadData};


@Component({
    selector: '.js_wizard',
    template: '' // Define template in child component
})
export abstract class WizardFormPopupComponent extends WizardFormPopupExtComponent implements IForm
{
    constructor(
        elementRef: ElementRef,
        renderer: Renderer,
        @Inject('Provider') provider: WizardPopupProvider,
        wizardManagerService: WizardManagerService,
        formService: FormService
    ) {
        // Call parent
        super();
        super.initWizardFormPopupExtComponent(
            elementRef,
            renderer,
            provider,
            wizardManagerService,
            formService
        );
    }
}