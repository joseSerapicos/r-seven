import {Component, ElementRef, Inject} from '@angular/core';
import {FileFormComponent, FileFormProvider} from '../../../file/ts/src/file-form.component';

// Re-exports
export {FileFormProvider}


@Component({
    selector: '#js_entityVideoFile',
    template: '' // Define template in child component
})
export class VideoFormFileComponent extends FileFormComponent
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