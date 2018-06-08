import {Component, ElementRef, Inject, Optional, Injector, ViewChild, EventEmitter, Renderer} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {IModalPopup} from '../../modal/ts/modal.service';
import {FormService} from './form.service';
import {DataService} from "../../ts/data-service/data.service";
import {FormExtensionComponent, FormProvider} from './form.extension-component';

// Re-exports
export {FormProvider};


@Component({
    selector: '.js_formPopup',
    template: ''
})
export abstract class FormPopupExtensionComponent extends FormExtensionComponent implements IModalPopup
{
    // Modal parameters
    onDismissEmitter: EventEmitter<any> = new EventEmitter();

    constructor() { super(); }

    /**
     * Initialization of component (replace the original constructor to avoid angular injection inheritance bug)
     * @param elementRef
     * @param renderer
     * @param provider
     * @param formService
     * @param dataService
     */
    public initFormPopupExtensionComponent(
        elementRef: any,
        renderer: any,
        provider: FormProvider,
        formService: any,
        dataService: any
    ) {
        super.initFormExtensionComponent(
            elementRef,
            renderer,
            provider,
            formService,
            dataService
        );
    }

    /**
     * Save and enter to detail action.
     * This method should be called from view/template.
     * @param $event
     */
    public saveAndEnterAction($event: any = null): void
    {
        this._formService.saveAndEnterAction($event);
    }

    /**
     * Save and add a new entry.
     * This method should be called from view/template.
     * @param $event
     */
    public saveAndNewAction($event: any = null): void
    {
        this._formService.saveAndNewAction($event);
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
        this.closeAction($event);
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
}