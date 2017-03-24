import {Component, Inject, Injector, ReflectiveInjector, ViewContainerRef, Renderer} from '@angular/core';
import {DataService} from '../data-service/data.service';
import {ActionsService} from '../actions/actions.service';
import {DataBoxComponent, Popups, Popup} from '../data-box/data-box.component';
import {ModalService} from '../../modal/ts/modal.service';
import {Helper} from '../helper';
import {ImageProvider} from './image-provider';

// Reexports
export {ImageProvider};


// Component
@Component({
    selector: '.js_dataBoxImage',
    templateUrl: Helper.getGlobalVar('route') + 'template/default/image'
})
export class ImageComponent extends DataBoxComponent
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
     * Get thumbnail path
     * @param path
     * @returns {string}
     */
    protected getThumbnailPath(path): string
    {
        let partialPath = this._helperService.getUploadWebPath(path),
            firstPartialPath = partialPath.substring(0, partialPath.lastIndexOf(".")),
            lastPartialPath = partialPath.substring(partialPath.lastIndexOf("."), partialPath.length);

        return (firstPartialPath+'.thumbnail-128'+lastPartialPath);
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

    /**
     * Avatar action
     * @param $event
     * @param index
     */
    public avatarAction($event: any, index: number): void
    {
        return this.thumbnailAction($event, index);
    }

    /**
     * Thumbnail action
     * @param $event
     * @param index
     */
    public thumbnailAction($event: any, index: number): void
    {
        if ($event) { $event.preventDefault(); }

        let imageCropProvider = this.getProviderExtraDataAttr('imageCrop'),
            providers = [
                {provide: 'ImageCropProvider', useValue: {
                    label: imageCropProvider['label'],
                    url: imageCropProvider['ActionUrl'],
                    path: this._dataService.getProviderAttr('objects')[index]['path']
                }}
            ],
            popup: Popup = {
                // Needs to be provided by provider to set the correct "templateUrl"
                module: this.getProviderAttr('imageCropPopupModule'),
                component: 'ImageCropPopupComponent',
                providers: providers
            };

        this._modalService.popup(popup, this._injector).then(
            data => { return; },
            errors => { console.log(errors); return; }
        );
    }
}