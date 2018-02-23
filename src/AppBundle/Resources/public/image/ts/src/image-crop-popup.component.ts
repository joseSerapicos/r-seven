import {Component, Inject, Injector, ElementRef, Renderer} from '@angular/core';
import {BaseProvider} from '../../../ts/base/base-provider';
import {PostService} from '../../../ts/post.service';
import {BaseModalPopup} from '../../../modal/ts/modal.service';


// Provider interface
export interface ImageCropProvider extends BaseProvider {
    label: string,
    url: string,
    path: string
}


@Component({
    selector: '.js_imageCropPopup',
    template: '' // Define template in child component
})
export class ImageCropPopupComponent extends BaseModalPopup
{
    protected _$form: any;
    protected _$element: any;

    constructor(
        elementRef: ElementRef,
        renderer: Renderer,
        @Inject('ImageCropProvider') protected provider: ImageCropProvider,
        protected _postService: PostService,
        @Inject('HelperService') protected _helperService: any
    ) {
        super(
            elementRef,
            renderer,
            provider
        );
    }

    /**
     * Get web path
     * @returns {string}
     */
    protected getWebPath(): string
    {
        return this._helperService.getUploadWebPath(this.getProviderAttr('path'));
    }

    /**
     * Save.
     * @param $event
     */
    protected saveAction($event): void
    {
        $event.preventDefault();

        // Get data from cropper
        let data = this._$element.cropper('getData', true);

        // Set form
        this._$form.find('.path').val(this.getProviderAttr('path'));
        this._$form.find('.width').val(data['width']);
        this._$form.find('.height').val(data['height']);
        this._$form.find('.x').val(data['x']);
        this._$form.find('.y').val(data['y']);

        // Set the valid token
        this._helperService.setFormToken(this._$form);
        // Get data from form
        data = this._$form.serialize();

        let that = this;

        that._postService.post(
            that.getProviderAttr('url'),
            data
        ).then(function(data) {
            that.closeAction();
        }, function(errors) {
            console.log(errors);
        });
    }

    /**
     * Close action.
     * @param $event
     */
    public closeAction($event: any = null): void
    {
        if ($event) { $event.preventDefault(); }

        this._$element.cropper('destroy');

        super.closeAction(null);
    }

    /**
     * Lifecycle callback
     */
    ngAfterViewInit()
    {
        this._$form = $(this._elementRef.nativeElement).find('form');
        this._$element = this._$form.find('.image');

        this._$element.cropper({
            viewMode: 1,
            preview: '.image-preview',
            autoCropArea: 0.6,
            aspectRatio: 1,
            rotatable: false,
            zoomOnWheel: false
        });
    }
}