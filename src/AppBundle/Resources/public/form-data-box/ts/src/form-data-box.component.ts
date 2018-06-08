import {Component, ViewContainerRef, ViewChild, ElementRef, Inject, Optional, Injector, Renderer} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {FormService} from '../../../form/ts/form.service';
import {FormExtensionComponent, FormProvider} from '../../../form/ts/form.extension-component';
import {DynamicComponentLoaderService} from '../../../ts/dynamic-component-loader.service';
import {DataService} from "../../../ts/data-service/data.service";

// Re-exports
export {FormProvider};

/* Import dependencies */
import {DataBoxExtModule} from './data-box.ext-module';
/* /Import dependencies */


// Component
/**
 * NOTE: To use this component you need to extend this component to set the template in your local template file,
 * and provide resources like you do for "DataService" and "Form", but with "Popops" set to null
 */
@Component({
    selector: '.js_formDataBox',
    template: '' // Define template in child component
})
export class FormDataBoxComponent extends FormExtensionComponent
{
    // For dependency ("DataBox")
    @ViewChild('js_dataBox', {read: ViewContainerRef}) dataBoxViewContainerRef: ViewContainerRef;


    constructor(
        elementRef: ElementRef,
        renderer: Renderer,
        @Inject('Provider') provider: FormProvider,
        formService: FormService,
        @Inject('DataService') dataService: any,
        protected _dynamicComponentLoaderService: DynamicComponentLoaderService,
        protected _injector: Injector
    ) {
        // Parent construct
        super();
        super.initFormExtensionComponent(
            elementRef,
            renderer,
            provider,
            formService,
            dataService
        );
    }

    /**
     * Save action.
     * This method should be called from view/template.
     * @param $event
     */
    public saveAction($event: any = null): void
    {
        this._formService.saveAndNewAction($event);
    }

    /**
     * Lifecycle callback
     */
    ngAfterViewInit()
    {
        super.ngAfterViewInit();

        // Load dependency
        let that = this;

        that._dynamicComponentLoaderService.load(
            DataBoxExtModule,
            'DataBoxComponent',
            that.dataBoxViewContainerRef,
            that._injector
        ).then(
            componentRef => { return true; },
            errors => { console.log(errors); return null; }
        );
    }
}