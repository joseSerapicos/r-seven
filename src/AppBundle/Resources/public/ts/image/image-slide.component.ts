var Slide = require("blueimp-gallery");
import {Component, Inject, Injector, ViewContainerRef, Renderer} from '@angular/core';
import {DataService} from '../data-service/data.service';
import {ActionsService} from '../actions/actions.service';
import {Popups, Popup} from '../data-box/data-box.component';
import {ModalService} from '../../modal/ts/modal.service';
import {ImageComponent, ImageProvider} from './image.component';
import {Helper} from '../helper.ts';

// Reexports
export {ImageProvider};


@Component({
    selector: '.js_image',
    templateUrl: Helper.getGlobalVar('route') + 'template/slide/image'
})
export class ImageSlideComponent extends ImageComponent
{
    constructor(
        viewContainerRef: ViewContainerRef,
        renderer: Renderer,
        @Inject('Provider') provider: ImageProvider,
        @Inject('DataService') dataService: any,
        actionsService: ActionsService,
        modalService: ModalService,
        @Inject('Popups') popups: Popups | Popup,
        injector: Injector,
        @Inject('HelperService') helperService: any
    ) {
        // Call parent
        super(
            viewContainerRef,
            renderer,
            provider,
            dataService,
            actionsService,
            modalService,
            popups,
            injector,
            helperService
        );
    }

    /**
     * Get web path
     * @param path
     * @returns {string}
     */
    protected getWebPath(path): string
    {
        return this._helperService.getUploadWebPath(path);
    }

    /**
     * Run slide
     * @param $event
     */
    protected runSlide($event: any): void
    {
        $event.preventDefault();

        $event = $event || window.event;

        let target = $event.target || $event.srcElement,
            link = target.src ? target.parentNode : target,
            $links = $event.currentTarget.getElementsByClassName('js_gallery-item'),
            options = {index: link, event: $event};

        Slide($links, options);
    }
}