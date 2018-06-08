import {Component, Inject, Injector, ElementRef, Renderer} from '@angular/core';
import {PostService} from '../../../../../../../../AppBundle/Resources/public/ts/post.service';
import {ImageCropPopupComponent as ImageImageCropPopupComponent, ImageCropProvider} from '../../../../../../../../AppBundle/Resources/public/image/ts/src/image-crop-popup.component';


@Component({
    selector: '.js_cropPopup',
    templateUrl: '../templates/crop-popup.component.html'
})
export class CropPopupComponent extends ImageImageCropPopupComponent
{
    constructor(
        elementRef: ElementRef,
        renderer: Renderer,
        @Inject('ImageCropProvider') provider: ImageCropProvider,
        postService: PostService,
        @Inject('HelperService') helperService: any
    ) {
        super(
            elementRef,
            renderer,
            provider,
            postService,
            helperService
        );
    }
}