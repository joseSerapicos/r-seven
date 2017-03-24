import {Component, ElementRef, Inject, Optional, Injector, Renderer} from '@angular/core';
import {Helper} from '../../ts/helper';
import {FormPopupExtensionComponent, FormProvider} from '../../ts/form/form-popup.extension-component';
import {DataService} from '../../ts/data-service/data.service';
import {FormService} from '../../ts/form/form.service';

@Component({
    selector: '#js_entityNotePopup',
    templateUrl: Helper.getRuntimeVar('templateUrl')
})
export class FormPopupComponent extends FormPopupExtensionComponent
{
    constructor(
        elementRef: ElementRef,
        renderer: Renderer,
        @Inject('Provider') provider: FormProvider,
        formService: FormService,
        @Inject('DataService') dataService: any,
        @Optional() @Inject('TimeSelection') protected _timeSelection: any = null
    ) {
        super();
        super.initFormPopupExtensionComponent(
            elementRef,
            renderer,
            provider,
            formService,
            dataService
        );

        if (this._timeSelection && this._timeSelection['start'] && this._timeSelection['end']) {
            let obj = this._formService.getObject();
            obj['startTime'] = this._timeSelection['start'];
            obj['endTime'] = this._timeSelection['end'];
        }
    }
}