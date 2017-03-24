import {Component, Optional, ElementRef, Inject, Renderer, QueryList, ViewContainerRef, ViewChildren} from '@angular/core';
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
var parentId = Helper.getGlobalVar('conf')['object']['id'];

// Prices
Helper.setRuntimeVar('templateUrl', Helper.getGlobalVar('route') + 'services/service/controls');
import {ControlsModule} from "./controls.module";

// ServiceObservation
Helper.setRuntimeVar('templateUrl', Helper.getGlobalVar('route') + 'services/service-observation/edit/' + parentId);
import {ObservationExtensionModule} from '../../../../../../AppBundle/Resources/public/ts/observation/observation.extension-module';
import {ServiceObservationPopupModule} from './service-observation-popup.module';

// ServiceFile
Helper.setRuntimeVar('templateUrl', Helper.getGlobalVar('route') + 'services/service-file/edit/' + parentId);
import {FileModule} from '../../../../../../AppBundle/Resources/public/ts/file/file.module';
import {ServiceFilePopupModule} from './service-file-popup.module';

// ServiceImage
// Define templateUrl to component at runtime
Helper.setRuntimeVar('templateUrl', _app.conf.route['thumbnail']['url']);
import {ImageCropPopupModule} from '../../../../../../AppBundle/Resources/public/ts/image/image-crop-popup.module';
import {ImageSlideExtensionModule} from '../../../../../../AppBundle/Resources/public/ts/image/image-slide.extension-module';
Helper.setRuntimeVar('templateUrl', Helper.getGlobalVar('route') + 'services/service-image/edit/' + parentId);
import {ServiceImagePopupModule} from './service-image-popup.module';

// ServiceVideo
Helper.setRuntimeVar('templateUrl', Helper.getGlobalVar('route') + 'services/service-video/add/' + parentId);
import {VideoModule} from '../../../../../../AppBundle/Resources/public/ts/video/video.module';
import {ServiceVideoPopupModule} from './service-video-popup.module';
import {WizardManagerService} from "../../../../../../AppBundle/Resources/public/ts/wizard/wizard-manager.service";

// Restore last templateUrl
Helper.setRuntimeVar('templateUrl', tmpTemplateUrl);
/* /Import dependencies */


@Component({
    selector: '#js_main',
    templateUrl: Helper.getGlobalVar('route') + 'services/service/detail-tabs'
})
export class MainComponent extends TabsComponent implements ITabs
{
    protected _dependenciesData: any[];

    constructor(
        elementRef: ElementRef,
        renderer: Renderer,
        @Optional() @Inject('Provider') provider: any,
        @Inject('HelperService') helperService: any,
        navManagerService: NavManagerService,
        protected _modalService: ModalService,
        protected viewContainerRef: ViewContainerRef
    ) {
        super(
            elementRef,
            renderer,
            (provider || null),
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
                    module: ControlsModule,
                    component: 'ControlsComponent'
                };
            case 1:
                return {
                    module: ObservationExtensionModule,
                    component: 'ObservationComponent',
                    urlProvider: (this._helperService.getGlobalVar('route') + 'services/service-observation/data/' + parentId)
                };
            case 2:
                return {
                    module: FileModule,
                    component: 'FileComponent',
                    urlProvider: (this._helperService.getGlobalVar('route') + 'services/service-file/data/' + parentId)
                };
            case 3:
                return {
                    module: ImageSlideExtensionModule,
                    component: 'ImageSlideComponent',
                    urlProvider: (this._helperService.getGlobalVar('route') + 'services/service-image/data/' + parentId)
                };
            case 4:
                return {
                    module: VideoModule,
                    component: 'VideoComponent',
                    urlProvider: (this._helperService.getGlobalVar('route') + 'services/service-video/data/' + parentId)
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
                        module: ServiceObservationPopupModule,
                        component: 'ServiceObservationPopupComponent',
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
                        module: ServiceFilePopupModule,
                        component: 'ServiceFilePopupComponent',
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
                        module: ServiceImagePopupModule,
                        component: 'ServiceImagePopupComponent',
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
                        module: ServiceVideoPopupModule,
                        component: 'ServiceVideoPopupComponent',
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