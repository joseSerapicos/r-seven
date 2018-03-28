var videojs = require('video.js');
import {Component, Inject, ElementRef, Renderer} from '@angular/core';
import {SafeResourceUrl, DomSanitizer} from '@angular/platform-browser';
import {BaseProvider} from '../../../ts/base/base-provider';
import {BaseModalPopup} from '../../../modal/ts/modal.service';

// Interface provider
export interface VideoPlayerProvider extends BaseProvider {
    path: string,
    extension: string,
    source: string
}


@Component({
    selector: '.js_videoPlayerPopup',
    templateUrl: '../templates/video-player-popup.component.html'
})
export class VideoPlayerPopupComponent extends BaseModalPopup
{
    protected _url: any;//SafeResourceUrl;
    protected _playerInstance: any = null; // Player instance, used when source is 'file'

    constructor(
        elementRef: ElementRef,
        renderer: Renderer,
        @Inject('VideoPlayerProvider') provider: VideoPlayerProvider,
        domSanitizationService: DomSanitizer,
        @Inject('HelperService') protected _helperService: any
    ) {
        super(
            elementRef,
            renderer,
            provider
        );

        // Set url
        switch (this.getProviderAttr('source')) {
            case 'file':
                this._url = domSanitizationService.bypassSecurityTrustUrl(
                    this._helperService.getUploadWebPath(this.getProviderAttr('path'))
                );
                break;
            case 'youtube':
                this._url = domSanitizationService.bypassSecurityTrustResourceUrl(
                    'https://www.youtube.com/embed/' + this.getProviderAttr('path')
                );
                break;
            case 'vimeo':
                this._url = domSanitizationService.bypassSecurityTrustResourceUrl(
                    'https://player.vimeo.com/video/' + this.getProviderAttr('path')
                );
                break;
        }
    }

    /**
     * Get extension
     * @returns {string}
     */
    protected getExtension(): string
    {
        return this.getProviderAttr('extension');
    }

    /**
     * Lifecycle callback
     */
    ngAfterViewInit()
    {
        // Add class to allow fullscreen video
        // (set animation to none, ans opacity to 1, animation is not compatible with fullscreen)
        $(this._elementRef.nativeElement).closest('.modal').on(
            "animationend webkitAnimationEnd oAnimationEnd MSAnimationEnd",
            function() {
                $(this).addClass('fullscreen-video');
            }
        );

        // Instantiate player for flv videos
        if (this.getProviderAttr('source') == 'file') {
            this._playerInstance = videojs(
                $(this._elementRef.nativeElement).find('.js_flvPlayer')[0], // Use the first element
                {},
                function() {}
            );
            // this._playerInstance.play(); // Auto play
        }
    }
}