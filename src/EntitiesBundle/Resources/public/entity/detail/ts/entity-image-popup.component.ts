import {Component, Inject, Optional, Injector, ElementRef, Renderer} from '@angular/core';
import {Helper} from '../../../../../../AppBundle/Resources/public/ts/helper';
import {FileUploadProvider} from '../../../../../../AppBundle/Resources/public/ts/file/file-form.component';
import {FileFormPopupComponent} from '../../../../../../AppBundle/Resources/public/ts/file/file-form-popup.component';


@Component({
    selector: '#js_entityImagePopup',
    templateUrl: Helper.getRuntimeVar('templateUrl')
})
export class EntityImagePopupComponent extends FileFormPopupComponent
{
    constructor(
        elementRef: ElementRef,
        renderer: Renderer,
        @Inject('FileUploadProvider') provider: FileUploadProvider,
        @Inject('DataService') dataService: any
    ) {
        // Call parent
        super(
            elementRef,
            renderer,
            provider,
            dataService
        );
    }
}