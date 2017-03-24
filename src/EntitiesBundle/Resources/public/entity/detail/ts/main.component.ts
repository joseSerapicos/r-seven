import {Component, ElementRef, Inject, Renderer, QueryList, ViewContainerRef, ViewChildren} from '@angular/core';
import {DataService} from '../../../../../../AppBundle/Resources/public/ts/data-service/data.service';
import {ActionsService} from '../../../../../../AppBundle/Resources/public/ts/actions/actions.service';
import {Helper} from '../../../../../../AppBundle/Resources/public/ts/helper';
import {ModalService} from '../../../../../../AppBundle/Resources/public/modal/ts/modal.service';
import {FormService} from '../../../../../../AppBundle/Resources/public/ts/form/form.service';
import {NavManagerService} from '../../../../../../AppBundle/Resources/public/ts/nav-manager/nav-manager.service';
import {TabsComponent, ITabs, LazyLoadData} from '../../../../../../AppBundle/Resources/public/ts/tabs/tabs.component';

/* Import dependencies */
// Save last templateUrl
let tmpTemplateUrl = Helper.getRuntimeVar('templateUrl');

// Parent id of dependencies
var parentId = (
    Helper.getGlobalVar('conf')['object']['entityObj'] // For entities bases on "Entity"
    || Helper.getGlobalVar('conf')['object']['id'] // For raw "Entity"
);

// Contacts
Helper.setRuntimeVar('templateUrl', Helper.getGlobalVar('route') + 'entities/entity/contacts');
import {ContactsModule} from "./contacts.module";

// EntityNote
Helper.setRuntimeVar('templateUrl', Helper.getGlobalVar('route') + 'entities/entity-note/edit/' + parentId);
import {NoteExtensionModule} from '../../../../../../AppBundle/Resources/public/ts/note/note.extension-module';
import {EntityNotePopupModule} from './entity-note-popup.module';

// EntityFile
Helper.setRuntimeVar('templateUrl', Helper.getGlobalVar('route') + 'entities/entity-file/edit/' + parentId);
import {FileModule} from '../../../../../../AppBundle/Resources/public/ts/file/file.module';
import {EntityFilePopupModule} from './entity-file-popup.module';

// EntityImage
// Define templateUrl to component at runtime
//Helper.setRuntimeVar('templateUrl', _app.conf.route['thumbnail']['url']);
// Set static for children (client, supplier and user)
Helper.setRuntimeVar('templateUrl', Helper.getGlobalVar('route') + 'entities/entity/thumbnail/' + parentId);
import {ImageCropPopupModule} from '../../../../../../AppBundle/Resources/public/ts/image/image-crop-popup.module';
import {ImageSlideExtensionModule} from '../../../../../../AppBundle/Resources/public/ts/image/image-slide.extension-module';
Helper.setRuntimeVar('templateUrl', Helper.getGlobalVar('route') + 'entities/entity-image/edit/' + parentId);
import {EntityImagePopupModule} from './entity-image-popup.module';

// EntityVideo
Helper.setRuntimeVar('templateUrl', Helper.getGlobalVar('route') + 'entities/entity-video/add/' + parentId);
import {VideoModule} from '../../../../../../AppBundle/Resources/public/ts/video/video.module';
import {EntityVideoPopupModule} from './entity-video-popup.module';
import {WizardManagerService} from "../../../../../../AppBundle/Resources/public/ts/wizard/wizard-manager.service";

// Restore last templateUrl
Helper.setRuntimeVar('templateUrl', tmpTemplateUrl);
/* /Import dependencies */


@Component({
    selector: '#js_main',
    templateUrl: Helper.getGlobalVar('route') + 'entities/entity/detail-tabs'
})
export class MainComponent extends TabsComponent implements ITabs
{
    protected _dependenciesData: any[];

    constructor(
        elementRef: ElementRef,
        renderer: Renderer,
        @Inject('Provider') provider: any,
        @Inject('HelperService') helperService: any,
        navManagerService: NavManagerService,
        protected _modalService: ModalService,
        protected viewContainerRef: ViewContainerRef
    ) {
        super(
            elementRef,
            renderer,
            provider,
            helperService,
            navManagerService
        );

        this._modalService.init(viewContainerRef);
        this._dependenciesData = this._helperService.getGlobalVar('dependency');
    }

    /**
     * Get navigation data (needed data to lazy load container)
     * @param index (index to load)
     * @returns NavData
     */
    public getNavData(index: number): LazyLoadData
    {
        switch (index) {
            case 0:
                return {
                    module: ContactsModule,
                    component: 'ContactsComponent'
                };
            case 1:
                return {
                    module: NoteExtensionModule,
                    component: 'NoteComponent',
                    urlProvider: (this._helperService.getGlobalVar('route') + 'entities/entity-note/data/' + parentId)
                };
            case 2:
                return {
                    module: FileModule,
                    component: 'FileComponent',
                    urlProvider: (this._helperService.getGlobalVar('route') + 'entities/entity-file/data/' + parentId)
                };
            case 3:
                return {
                    module: ImageSlideExtensionModule,
                    component: 'ImageSlideComponent',
                    urlProvider: (this._helperService.getGlobalVar('route') + 'entities/entity-image/data/' + parentId)
                };
            case 4:
                return {
                    module: VideoModule,
                    component: 'VideoComponent',
                    urlProvider: (this._helperService.getGlobalVar('route') + 'entities/entity-video/data/' + parentId)
                };
        }

        return null;
    }

    /**
     * Get nav providers (to lazy load components in container with dependency injection)
     * @param index (index to load)
     * @param data (data to resolve all providers)
     * @returns {Array}
     */
    public getNavProviders(index: number, data = null): any
    {
        let providers = [];

        switch (index) {
            case 0:
                return [
                    NavManagerService
                ];
            case 1:
                providers = [
                    {provide: 'Provider', useValue: this._helperService.getDataBoxProvider(data)},
                    {provide: 'Popups', useValue: {
                        module: EntityNotePopupModule,
                        component: 'EntityNotePopupComponent',
                        providers: [
                            FormService,
                            {provide: 'Provider', useValue: this._helperService.getFormProvider(data)}
                        ]
                    }}
                ];
                break;
            case 2:
                providers = [
                    {provide: 'Provider', useValue: this._helperService.getDataBoxProvider(data)},
                    {provide: 'Popups', useValue: {
                        module: EntityFilePopupModule,
                        component: 'EntityFilePopupComponent',
                        providers: [
                            {provide: 'FileUploadProvider', useValue: {
                                label: data['label'],
                                url: data['route']['edit']['url']
                            }}
                        ]
                    }}
                ];
                break;
            case 3:
                let localData = {
                    imageCropPopupModule: ImageCropPopupModule
                };
                providers = [
                    {provide: 'Provider', useValue: this._helperService.getImageProvider(data, localData)},
                    {provide: 'Popups', useValue: {
                        module: EntityImagePopupModule,
                        component: 'EntityImagePopupComponent',
                        providers: [
                            {provide: 'FileUploadProvider', useValue: {
                                label: data['label'],
                                url: data['route']['edit']['url']
                            }}
                        ]
                    }}
                ];
                break;
            case 4:
                providers = [
                    {provide: 'Provider', useValue: this._helperService.getDataBoxProvider(data)},
                    {provide: 'Popups', useValue: {
                        module: EntityVideoPopupModule,
                        component: 'EntityVideoPopupComponent',
                        providers: [
                            {provide: 'DataService', useClass: DataService},
                            FormService,
                            NavManagerService,
                            WizardManagerService,
                            {provide: 'Provider', useValue: this._helperService.getWizardPopupProvider(data)}
                        ]
                    }}
                ];
                break;
        }

        providers = providers.concat([
            {provide: 'DataService', useClass: DataService},
            ActionsService,
            {provide: 'DataServiceProvider', useValue: this._helperService.getDataServiceProvider(data)},
            {provide: 'ActionsServiceProvider', useValue: this._helperService.getActionsServiceProvider(data)}
        ]);

        return providers;
    }

    /**
     * Lifecycle callback
     */
    ngAfterViewInit()
    {
        super.ngAfterViewInit();

        // Open the first tab
        this._navManagerService.navTo(0);
    }
}