import {Component, ElementRef, Inject} from '@angular/core';
import {VideoFormFileComponent, FileFormProvider} from '../../../../../../../../AppBundle/Resources/public/video/ts/src/video-form-file.component';


@Component({
    selector: '#js_addFile',
    templateUrl: '../templates/add-file.component.html'
})
export class AddFileComponent extends VideoFormFileComponent
{
    constructor(
        elementRef: ElementRef,
        @Inject('DataService') dataService: any,
        @Inject('Provider') provider: FileFormProvider,
        @Inject('HelperService') helperService: any
    ) {
        // Call parent
        super(
            elementRef,
            dataService,
            provider,
            helperService
        );
    }
}