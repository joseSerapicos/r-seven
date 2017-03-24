import {Component, ElementRef, Inject} from '@angular/core';
import {Helper} from '../helper';
import {FileFormComponent, FileUploadProvider} from '../file/file-form.component';


@Component({
    selector: '#js_entityVideoFile',
    templateUrl: Helper.getRuntimeVar('templateUrl')
})
export class VideoFormFileComponent extends FileFormComponent
{
    constructor(
        elementRef: ElementRef,
        @Inject('DataService') dataService: any,
        @Inject('Provider') provider: FileUploadProvider
    ) {
        // Call parent
        super(
            elementRef,
            dataService,
            provider
        );
    }
}