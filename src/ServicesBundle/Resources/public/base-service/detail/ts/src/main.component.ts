import {Component, Optional, ElementRef, Inject, Injector, Renderer, QueryList, ViewContainerRef, ViewChildren} from '@angular/core';
import {DataService} from '../../../../../../../AppBundle/Resources/public/ts/data-service/data.service';
import {ActionsService} from '../../../../../../../AppBundle/Resources/public/ts/actions/actions.service';
import {Helper} from '../../../../../../../AppBundle/Resources/public/ts/helper';
import {ModalService} from '../../../../../../../AppBundle/Resources/public/modal/ts/modal.service';
import {FormService} from '../../../../../../../AppBundle/Resources/public/form/ts/form.service';
import {NavManagerService} from '../../../../../../../AppBundle/Resources/public/ts/nav-manager/nav-manager.service';
import {TabsComponent, ITabs, LazyLoadData, BaseProvider} from '../../../../../../../AppBundle/Resources/public/tabs/ts/src/tabs.component';


// Interface provider
export interface BaseServiceProvider extends BaseProvider {
    modules: { // Put here modules dependencies
        price: {module: any, component: string},
        serviceObservationEdit: {module: any, component: string},
        serviceFileEdit: {module: any, component: string},
        serviceImageCropPopup: {module: any, component: string},
        serviceImageEdit: {module: any, component: string}
    }
}


/* Import dependencies */

// Get service context
let serviceContext = Helper.getGlobalVar('serviceContext');

// Parent id for dependencies
var parentId = Helper.getAppVar('conf')['object']['serviceObj'];

// ServiceObservation
import {ObservationExtModule} from '../../../../../../../AppBundle/Resources/public/observation/ts/src/observation.ext-module';

// ServiceFile
import {FileExtModule} from '../../../../../../../AppBundle/Resources/public/file/ts/src/file.ext-module';

// ServiceImage
import {ImageSlideExtModule} from '../../../../../../../AppBundle/Resources/public/image/ts/src/image-slide.ext-module';

// ServiceVideo (add is always for all service types)
import {VideoExtModule} from '../../../../../../../AppBundle/Resources/public/video/ts/src/video.ext-module';
import {VideoFormPopupExtModule} from '../../../../../../../AppBundle/Resources/public/video/ts/src/video-form-popup.ext-module';
import {AddFileExtModule as ServiceVideoAddFileExtModule} from '../../../../service-video/index/ts/src/add-file.ext-module';
import {AddUrlExtModule as ServiceVideoAddUrlExtModule} from '../../../../service-video/index/ts/src/add-url.ext-module';
import {WizardManagerService} from "../../../../../../../AppBundle/Resources/public/wizard/ts/src/wizard-manager.service";

/* /Import dependencies */


@Component({
    selector: '#js_main',
    template: ''
})
export class MainComponent extends TabsComponent implements ITabs
{
    protected _dependenciesData: any[];

    constructor(
        elementRef: ElementRef,
        renderer: Renderer,
        @Optional() @Inject('Provider') provider: BaseServiceProvider,
        @Inject('HelperService') helperService: any,
        navManagerService: NavManagerService,
        protected _modalService: ModalService,
        protected viewContainerRef: ViewContainerRef,
        protected _injector: Injector
    ) {
        super(
            elementRef,
            renderer,
            (provider || null),
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
                    module: this._provider['modules']['price']['module'],
                    component: this._provider['modules']['price']['component']
                };
            case 1:
                return {
                    module: ObservationExtModule,
                    component: 'ObservationComponent',
                    urlProvider: (this._helperService.getAppVar('route') + 'services/service-observation/data/' + parentId)
                };
            case 2:
                return {
                    module: FileExtModule,
                    component: 'FileComponent',
                    urlProvider: (this._helperService.getAppVar('route') + 'services/service-file/data/' + parentId)
                };
            case 3:
                return {
                    module: ImageSlideExtModule,
                    component: 'ImageSlideComponent',
                    urlProvider: (this._helperService.getAppVar('route') + 'services/service-image/data/' + parentId)
                };
            case 4:
                return {
                    module: VideoExtModule,
                    component: 'VideoComponent',
                    urlProvider: (this._helperService.getAppVar('route') + 'services/service-video/data/' + parentId)
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
                // Merge the providers to get the complete "BaseServicePriceProvider"
                let provider = this._injector.get('BaseServicePriceProvider');

                return [
                    NavManagerService,
                    {provide: 'Provider', useValue: provider}
                ];
            case 1:
                providers = [
                    {provide: 'Provider', useValue: this._helperService.getDataBoxProvider(data)},
                    {provide: 'Popups', useValue: {
                        module: this._provider['modules']['serviceObservationEdit']['module'],
                        component: this._provider['modules']['serviceObservationEdit']['component'],
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
                        module: this._provider['modules']['serviceFileEdit']['module'],
                        component: this._provider['modules']['serviceFileEdit']['component'],
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
                    imageCropPopupModule: this._provider['modules']['serviceImageCropPopup']['module'],
                    imageCropPopupComponent: 'ImageCropPopupComponent'
                };
                providers = [
                    {provide: 'Provider', useValue: this._helperService.getImageProvider(data, localData)},
                    {provide: 'Popups', useValue: {
                        module: this._provider['modules']['serviceImageEdit']['module'],
                        component: this._provider['modules']['serviceImageEdit']['component'],
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
                // Video Form Popup Provider
                let videoFormPopupProvider = Helper.getWizardPopupProvider(data);
                videoFormPopupProvider['modules'] = {
                    videoFormFile: {module: ServiceVideoAddFileExtModule, component: 'AddFileComponent'},
                    videoFormUrl: {module: ServiceVideoAddUrlExtModule, component: 'AddUrlComponent'}
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