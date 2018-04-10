var Dropzone = require("dropzone");
import {Component, Inject, Optional, Injector, ElementRef, Renderer} from '@angular/core';
import {BaseModalPopup} from '../../../modal/ts/modal.service';
import {FileFormProvider} from './file-form-provider';

// Re-exports
export {FileFormProvider}


// Component
@Component({
    selector: '.js_fileUploadPopup',
    template: '' // Define template in child component
})
export class FileFormPopupComponent extends BaseModalPopup
{
    constructor(
        elementRef: ElementRef,
        renderer: Renderer,
        @Inject('FileFormProvider') provider: FileFormProvider,
        @Inject('DataService') protected _dataService: any,
        @Inject('HelperService') protected _helperService: any
    ) {
        super(
            elementRef,
            renderer,
            provider
        );
    }

    /**
     * Lifecycle callback
     */
    ngOnInit()
    {
        let that = this,
            $form = $(this._elementRef.nativeElement).find('form.dropzone');

        // Set the valid token
        this._helperService.setFormToken($form);

        $form.dropzone({
            url: this.getProviderAttr('url'),
            paramName: "form[file]",
            success: function(file, response) {
                // Add object to objects array provider
                that._dataService.setObject(response['data']['object']);
            },
        });
    }
}