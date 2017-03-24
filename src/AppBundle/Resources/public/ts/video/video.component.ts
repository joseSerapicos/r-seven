import {Component, Inject, Injector, ReflectiveInjector, ViewContainerRef, Renderer} from '@angular/core';
import {ModalService} from '../../modal/ts/modal.service';
import {DataService} from '../data-service/data.service';
import {ActionsService} from '../actions/actions.service';
import {DataBoxComponent, DataBoxProvider, Popups, Popup} from '../data-box/data-box.component';
import {VideoPlayerPopupModule} from './video-player-popup.module';
import {Helper} from '../helper';

// Component
@Component({
    selector: '.js_video',
    templateUrl: Helper.getGlobalVar('route') + 'template/default/video'
})
export class VideoComponent extends DataBoxComponent
{
    constructor(
        viewContainerRef: ViewContainerRef,
        renderer: Renderer,
        @Inject('Provider') provider: DataBoxProvider,
        @Inject('DataService') dataService: any,
        actionsService: ActionsService,
        modalService: ModalService,
        @Inject('Popups') popups: Popups | Popup,
        injector: Injector,
        @Inject('HelperService') protected _helperService: any
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
            injector
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
     * Play video
     * @param $event
     */
    protected playAction($event, object): void
    {
        $event.preventDefault();

        let providers = [
                {provide: 'VideoPlayerProvider', useValue: {
                    path: object['path'],
                    extension: object['extension'],
                    source: object['source']
                }}
            ],
            popup: Popup = {
                module: VideoPlayerPopupModule,
                component: 'VideoPlayerPopupComponent',
                providers: providers,
                size: 'lg'
            };

        this._modalService.popup(popup, this._injector).then(
            data => { return; },
            errors => { console.log(errors); return; }
        );
    }

    /**
     * Trigger action
     * @param $event
     * @param action (can be provided by $event or directly in the call)
     * @param data (can be provided by $event or directly in the call)
     */
    protected triggerAction($event: any, action: string = null, data: any = null): void
    {
        if ($event) {
            $event.preventDefault();
            $event.stopPropagation(); // Prevent to open the slide show
        }

        super.triggerAction($event, action, data);
    }
}