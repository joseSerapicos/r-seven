import {Component, ElementRef, Inject, Optional, Injector, Renderer} from '@angular/core';
import {FormProvider} from '../../../../../../../AppBundle/Resources/public/form/ts/form-popup.extension-component';
import {DataService} from '../../../../../../../AppBundle/Resources/public/ts/data-service/data.service';
import {FormService} from '../../../../../../../AppBundle/Resources/public/form/ts/form.service';
import {FormPopupComponent as CalendarEditComponent} from '../../../../../../../AppBundle/Resources/public/calendar/ts/src/form-popup.component';


@Component({
    selector: '#js_edit',
    templateUrl: '../templates/edit.component.html'
})
export class EditComponent extends CalendarEditComponent
{
    constructor(
        elementRef: ElementRef,
        renderer: Renderer,
        @Inject('Provider') provider: FormProvider,
        formService: FormService,
        @Inject('DataService') dataService: any,
        @Optional() @Inject('TimeSelection') timeSelection: any = null
    ) {
        super(
            elementRef,
            renderer,
            provider,
            formService,
            dataService,
            timeSelection
        );
    }
}