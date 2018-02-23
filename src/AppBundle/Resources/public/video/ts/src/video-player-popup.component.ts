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
    template: `
    <div class="modal-body">
        <div class="form-wrapper gray-bg">
            <div class="row">
                <div class="col-lg-12">
                    <div class="ibox float-e-margins">
                        <div class="ibox-title">
                            <h5>Video Player</h5>
                            <div class="txt-align-r actions">
                                <a class="-round fa fa-times"
                                   (click)="closeAction($event)"></a>
                            </div>
                        </div>
                        <div class="ibox-content video-player">
                            <video *ngIf="getProviderAttr('source') == 'file'"
                                   class="js_flvPlayer video-js vjs-default-skin vjs-big-play-centered vjs-16-9"
                                   controls><source [src]="_url" type="video/{{getExtension()}}"></video>
                            <iframe *ngIf="getProviderAttr('source') == 'youtube'" [src]="_url" frameborder="0" allowfullscreen></iframe>
                            <iframe *ngIf="getProviderAttr('source') == 'vimeo'" [src]="_url" frameborder="0" allowfullscreen></iframe>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    `
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