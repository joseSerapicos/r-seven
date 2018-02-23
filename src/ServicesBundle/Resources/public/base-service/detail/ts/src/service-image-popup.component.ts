import {Component, Inject, Optional, Injector, ElementRef, Renderer} from '@angular/core';
import {Helper} from '../../../../../../AppBundle/Resources/public/ts/helper';
import {FileFormProvider} from '../../../../../../AppBundle/Resources/public/file/ts/src/file-form.component';
import {FileFormPopupComponent} from '../../../../../../AppBundle/Resources/public/file/ts/src/file-form-popup.component';

var templateUrl = Helper.getGlobalVar('templateUrl');
@Component({
    selector: '#js_serviceImagePopup',
    templateUrl: templateUrl
})
export class ServiceImagePopupComponent extends FileFormPopupComponent
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