import {Component, Inject, Optional, Injector, ElementRef, Renderer} from '@angular/core';
import {FileFormProvider} from '../../../../../../../AppBundle/Resources/public/file/ts/src/file-form.component';
import {FileFormPopupComponent} from '../../../../../../../AppBundle/Resources/public/file/ts/src/file-form-popup.component';


@Component({
    selector: '#js_serviceFileEdit',
    templateUrl: '../templates/service-file-edit.component.html'
})
export class ServiceFileEditComponent extends FileFormPopupComponent
{
    constructor(
        elementRef: ElementRef,
        renderer: Renderer,
        @Inject('FileFormProvider') provider: FileFormProvider,
        @Inject('DataService') dataService: any,
        @Inject('HelperService') helperService: any
    ) {
        // Call parent
        super(
            elementRef,
            renderer,
            provider,
            dataService,
            helperService
        );
    }
}