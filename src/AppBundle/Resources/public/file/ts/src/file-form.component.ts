var Dropzone = require("dropzone");
import {Component, ElementRef, Inject} from '@angular/core';
import {FileFormProvider} from './file-form-provider';

// Re-exports
export {FileFormProvider}


// Component
@Component({
    selector: '.js_fileUpload',
    template: '' // Define template in child component
})
export class FileFormComponent
{
    constructor(
        protected _elementRef: ElementRef,
        @Inject('DataService') protected _dataService: any,
        @Inject('FileFormProvider') private _fileFormProvider: FileFormProvider,
        @Inject('HelperService') protected _helperService: any
    ) {}

    /**
     * Lifecycle callback
     */
    ngOnInit()
    {
        let that = this,
            $form = $(this._elementRef.nativeElement).find('form');

        // Set the valid token
        this._helperService.setFormToken($form);

        $form.dropzone({
            url: this._fileFormProvider.url,
            paramName: "form[file]",
            success: function(file, response) {
                // Add object to objects array provider
                that._dataService.setObject(response['data']['object']);
            },
        });
    }
}