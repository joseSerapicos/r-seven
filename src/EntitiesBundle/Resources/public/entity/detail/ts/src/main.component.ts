import {Component, ElementRef, Inject, Renderer, QueryList, ViewContainerRef, ViewChildren} from '@angular/core';
import {DataService} from '../../../../../../../AppBundle/Resources/public/ts/data-service/data.service';
import {ActionsService} from '../../../../../../../AppBundle/Resources/public/ts/actions/actions.service';
import {Helper} from '../../../../../../../AppBundle/Resources/public/ts/helper';
import {ModalService} from '../../../../../../../AppBundle/Resources/public/modal/ts/modal.service';
import {FormService} from '../../../../../../../AppBundle/Resources/public/form/ts/form.service';
import {NavManagerService} from '../../../../../../../AppBundle/Resources/public/ts/nav-manager/nav-manager.service';
import {TabsComponent, ITabs, LazyLoadData} from '../../../../../../../AppBundle/Resources/public/tabs/ts/src/tabs.component';

// Parent id for dependencies
var parentId = (
    Helper.getAppVar('conf')['object']['entityObj'] // For entities bases on "Entity"
    || Helper.getAppVar('conf')['object']['id'] // For raw "Entity"
);

// Contacts
import {ContactsExtModule} from "./contacts.ext-module";

// EntityNote
import {NoteExtModule} from '../../../../../../../AppBundle/Resources/public/note/ts/src/note.ext-module';
import {EditExtModule as EntitiesEntityNoteEditExtModule} from '../../../../entity-note/index/ts/src/edit.ext-module';

// EntityFile
import {FileExtModule} from '../../../../../../../AppBundle/Resources/public/file/ts/src/file.ext-module';
import {EditExtModule as EntitiesEntityFileEditExtModule} from '../../../../entity-file/index/ts/src/edit.ext-module';

// EntityImage
import {ImageSlideExtModule} from '../../../../../../../AppBundle/Resources/public/image/ts/src/image-slide.ext-module';
import {EditExtModule as EntitiesEntityImageEditExtModule} from '../../../../entity-image/index/ts/src/edit.ext-module';
import {ImageCropPopupExtModule as EntitiesEntityImageCropPopupExtModule} from '../../../../entity-image/index/ts/src/image-crop-popup.ext-module';

// EntityVideo
import {VideoModule} from '../../../../../../../AppBundle/Resources/public/video/ts/src/video.module';
import {VideoFormPopupExtModule} from '../../../../../../../AppBundle/Resources/public/video/ts/src/video-form-popup.ext-module';
import {WizardManagerService} from "../../../../../../../AppBundle/Resources/public/wizard/ts/src/wizard-manager.service";
// Video form popup provider
// File form
import {AddFileExtModule as EntitiesEntityVideoAddFileExtModule} from '../../../../entity-video/index/ts/src/add-file.ext-module';
// Url form
import {AddUrlExtModule as EntitiesEntityVideoAddUrlExtModule} from '../../../../entity-video/index/ts/src/add-url.ext-module';
// Provider

@Component({
    selector: '.js_app',
    templateUrl: '../templates/main.component.html'
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
        this._dependenciesData = this._helperService.getAppVar('dependency');
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
                    module: ContactsExtModule,
                    component: 'ContactsComponent'
                };
            case 1:
                return {
                    module: NoteExtModule,
                    component: 'NoteComponent',
                    urlProvider: (this._helperService.getAppVar('route') + 'entities/entity-note/data/' + parentId)
                };
            case 2:
                return {
                    module: FileExtModule,
                    component: 'FileComponent',
                    urlProvider: (this._helperService.getAppVar('route') + 'entities/entity-file/data/' + parentId)
                };
            case 3:
                return {
                    module: ImageSlideExtModule,
                    component: 'ImageSlideComponent',
                    urlProvider: (this._helperService.getAppVar('route') + 'entities/entity-image/data/' + parentId)
                };
            case 4:
                return {
                    module: VideoModule,
                    component: 'VideoComponent',
                    urlProvider: (this._helperService.getAppVar('route') + 'entities/entity-video/data/' + parentId)
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
                        module: EntitiesEntityNoteEditExtModule,
                        component: 'EditComponent',
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
                        module: EntitiesEntityFileEditExtModule,
                        component: 'EditComponent',
                        providers: [
                            {provide: 'FileFormProvider', useValue: {
                                label: data['label'],
                                url: data['route']['edit']['url']
                            }}
                        ]
                    }}
                ];
                break;
            case 3:
                let localData = {
                    imageCropPopupModule: EntitiesEntityImageCropPopupExtModule,
                    imageCropPopupComponent: 'ImageCropPopupComponent'
                };
                providers = [
                    {provide: 'Provider', useValue: this._helperService.getImageProvider(data, localData)},
                    {provide: 'Popups', useValue: {
                        module: EntitiesEntityImageEditExtModule,
                        component: 'EditComponent',
                        providers: [
                            {provide: 'FileFormProvider', useValue: {
                                label: data['label'],
                                url: data['route']['edit']['url']
                            }}
                        ]
                    }}
                ];
                break;
            case 4:
                let videoFormPopupProvider = this._helperService.getWizardPopupProvider(data);
                videoFormPopupProvider['modules'] = {
                    videoFormFile: {module: EntitiesEntityVideoAddFileExtModule, component: 'AddFileComponent'},
                    videoFormUrl: {module: EntitiesEntityVideoAddUrlExtModule, component: 'AddUrlComponent'}
                };

                providers = [
                    {provide: 'Provider', useValue: this._helperService.getDataBoxProvider(data)},
                    {provide: 'Popups', useValue: {
                        module: VideoFormPopupExtModule,
                        component: 'VideoFormPopupComponent',
                        providers: [
                            {provide: 'DataService', useClass: DataService},
                            FormService,
                            NavManagerService,
                            WizardManagerService,
                            {provide: 'Provider', useValue: videoFormPopupProvider}
                        ]
                    }}
                ];
                break;
        }

        providers = providers.concat([
            {provide: 'DataService', useClass: DataService},
            ActionsService,
            {provide: 'DataServiceProvider', useValue: this._helperService.getDataServiceProvider(data)},
            {provide: 'ActionsServiceProvider', useValue: this._helperService.getActionsServiceProvider(data)},
            {provide: 'LegendProvider', useValue: this._helperService.getLegendProvider(data)}
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