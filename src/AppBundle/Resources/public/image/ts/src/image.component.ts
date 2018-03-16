import {Component, Inject, Injector, ReflectiveInjector, ViewContainerRef, Renderer} from '@angular/core';
import {DataService} from '../../../ts/data-service/data.service';
import {ActionsService} from '../../../ts/actions/actions.service';
import {DataBoxComponent, Popups, Popup} from '../../../data-box/ts/src/data-box.component';
import {ModalService} from '../../../modal/ts/modal.service';
import {ImageProvider} from './image-provider';
import {TasksLoaderManagerService} from '../../../../../../AppBundle/Resources/public/tasks-loader-manager/ts/tasks-loader-manager.service';


// Reexports
export {ImageProvider};


// Component
@Component({
    selector: '.js_dataBoxImage',
    templateUrl: '../templates/image.component.html'
})
export class ImageComponent extends DataBoxComponent
{
    constructor(
        viewContainerRef: ViewContainerRef,
        renderer: Renderer,
        @Inject('Provider') provider: ImageProvider,
        @Inject('DataService') dataService: any,
        tasksLoaderManagerService: TasksLoaderManagerService,
        @Inject('HelperService') helperService: any,
        actionsService: ActionsService,
        modalService: ModalService,
        @Inject('Popups') popups: Popups | Popup,
        injector: Injector
    ) {
        // Call parent
        super(
            viewContainerRef,
            renderer,
            provider,
            dataService,
            tasksLoaderManagerService,
            helperService,
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

        return (firstPartialPath+'.thumbnail_128'+lastPartialPath);
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
                component: this.getProviderAttr('imageCropPopupComponent'),
                providers: providers
            };

        this._modalService.popup(popup, this._injector).then(
            data => { return; },
            errors => { console.log(errors); return; }
        );
    }
}