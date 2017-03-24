var Dropzone = require("dropzone");
import {Component, Inject, Optional, Injector, ElementRef, Renderer} from '@angular/core';
import {BaseModalPopup} from '../../modal/ts/modal.service';
import {Helper} from '../helper';
import {FileUploadProvider} from './file-form.component';

// Component
@Component({
    selector: '.js_fileUploadPopup',
    templateUrl: Helper.getRuntimeVar('templateUrl')
})
export class FileFormPopupComponent extends BaseModalPopup
{
    constructor(
        elementRef: ElementRef,
        renderer: Renderer,
        @Inject('FileUploadProvider') provider: FileUploadProvider,
        @Inject('DataService') protected _dataService: any
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