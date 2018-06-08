import {Component, ElementRef, Inject, Optional, Injector, Renderer} from '@angular/core';
import {DataService} from '../../../../../../../../AppBundle/Resources/public/ts/data-service/data.service';
import {FileFormPopupComponent, FileFormProvider} from '../../../../../../../../AppBundle/Resources/public/file/ts/src/file-form-popup.component';


@Component({
    selector: '#js_edit',
    templateUrl: '../templates/edit.component.html'
})
export class EditComponent extends FileFormPopupComponent
{
    constructor(
        elementRef: ElementRef,
        renderer: Renderer,
        @Inject('FileFormProvider') provider: FileFormProvider,
        @Inject('DataService') dataService: any,
        @Inject('HelperService') helperService: any
    ) {
        super(
            elementRef,
            renderer,
            provider,
            dataService,
            helperService
        );
    }
}