import {Component, ElementRef, Inject, Optional, Injector, Renderer, ViewContainerRef, QueryList, ViewChild, ViewChildren} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {IForm} from '../../../ts/form/form.service';
import {IWizardManager as IWizard, LazyLoadData} from './wizard-manager.service';
import {WizardPopupExtComponent, WizardPopupProvider} from './wizard-popup.ext-component';

// Reexports
export {WizardPopupProvider, IWizard, LazyLoadData};


@Component({
    selector: '.js_wizard',
    template: '' // Define template in child component
})
export abstract class WizardFormPopupExtComponent extends WizardPopupExtComponent implements IForm
{
    // Constructor vars
    protected _formService: any; // Form Service should be shared between all steps

    // For NavManagerService
    @ViewChildren('js_lazyLoadContainer', {read: ViewContainerRef}) lazyLoadViewContainerRefQL: QueryList<ViewContainerRef>;

    constructor() { super(); }

    /**
     * Initialization of component (replace the original constructor to avoid angular injection inheritance bug)
     * @param elementRef
     * @param renderer
     * @param provider
     * @param wizardManagerService
     * @param formService
     */
    public initWizardFormPopupExtComponent(
        elementRef: any,
        renderer: any,
        @Inject('Provider') provider: WizardPopupProvider,
        wizardManagerService: any, // Any is used, otherwise you get an error "[Class] is not defined"
        formService: any // Any is used, otherwise you get an error "[Class] is not defined"

    ) {
        // Parent init (construct)
        super.initWizardPopupExtComponent(
            elementRef,
            renderer,
            provider,
            wizardManagerService
        );

        this._formService = formService;
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