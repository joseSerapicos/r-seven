var Dropzone = require("dropzone");
import {Component, ElementRef, Inject} from '@angular/core';
import {Helper} from '../helper';

// Provider interface
export interface FileUploadProvider {
    label?: string, // Only used in popup
    url: string
}

// Component
@Component({
    selector: '.js_fileUpload',
    templateUrl: Helper.getRuntimeVar('templateUrl')
})
export class FileFormComponent
{
    constructor(
        protected _elementRef: ElementRef,
        @Inject('DataService') protected _dataService: any,
        @Inject('FileUploadProvider') private _fileUploadProvider: FileUploadProvider
    ) {}

    /**
     * Lifecycle callback
     */
    ngOnInit()
    {
        let that = this,
            $form = $(this._elementRef.nativeElement).find('form');

        $form.dropzone({
            url: this._fileUploadProvider.url,
            paramName: "form[file]",
            success: function(file, response) {
                // Add object to objects array provider
                that._dataService.setObject(response['data']['object']);
            },
        });
    }
}