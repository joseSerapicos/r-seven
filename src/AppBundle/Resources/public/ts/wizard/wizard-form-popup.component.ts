import {Component, ElementRef, Inject, Optional, Injector, Renderer, ViewContainerRef, QueryList, ViewChild, ViewChildren} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {FormService, IForm} from '../form/form.service';
import {Helper} from '../helper';
import {WizardManagerService, IWizardManager as IWizard, LazyLoadData} from './wizard-manager.service';
import {WizardPopupComponent, WizardPopupProvider} from './wizard-popup.component';

// Reexports
export {WizardPopupProvider, IWizard, LazyLoadData};


@Component({
    selector: '.js_wizard',
    templateUrl: Helper.getRuntimeVar('templateUrl')
})
export abstract class WizardFormPopupComponent extends WizardPopupComponent implements IForm
{
    // For NavManagerService
    @ViewChildren('js_lazyLoadContainer', {read: ViewContainerRef}) lazyLoadViewContainerRefQL: QueryList<ViewContainerRef>;

    constructor(
        elementRef: ElementRef,
        renderer: Renderer,
        @Inject('Provider') provider: WizardPopupProvider,
        wizardManagerService: WizardManagerService,
        protected _formService: FormService // Form Service should be shared between all steps

    ) {
        // Call parent
        super(
            elementRef,
            renderer,
            provider,
            wizardManagerService
        );
    }

    /**
     * Close action.
     * @param $event
     */
    public closeAction($event: any = null): void
    {
        if ($event) { $event.preventDefault(); }

        // Current form object has changes from user?
        this._formService.reset().then(
            data => {
                this.onDismissEmitter.emit(data);
                return;
            },
            errors => { return; }
        );
    }

    /**
     * Lifecycle callback
     */
    ngAfterViewInit()
    {
        super.ngAfterViewInit();
        this._formService.init(this);
    }
}