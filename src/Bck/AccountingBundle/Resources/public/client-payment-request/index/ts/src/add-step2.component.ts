import {Component, ElementRef, Inject, Optional, Injector, Renderer} from '@angular/core';
import {FormBuilder} from '@angular/forms';
import {EditComponent, FormProvider} from './edit.component';
import {DataService} from '../../../../../../../../AppBundle/Resources/public/ts/data-service/data.service';
import {FormService} from '../../../../../../../../AppBundle/Resources/public/form/ts/form.service';

// Re-exports
export {FormProvider}


@Component({
    selector: '#js_addStep2',
    templateUrl: '../templates/add-step2.component.html'
})
export class AddStep2Component extends EditComponent
{
    constructor(
        elementRef: ElementRef,
        renderer: Renderer,
        @Inject('Provider') provider: FormProvider,
        formService: FormService,
        @Inject('DataService') dataService: any,
        @Inject('HelperService') helperService: any,
        @Inject('AutoCompleteProviders') autoCompleteProviders: any
    ) {
        super(
            elementRef,
            renderer,
            provider,
            formService,
            dataService,
            helperService,
            autoCompleteProviders
        );
    }
}