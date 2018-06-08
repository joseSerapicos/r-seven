import {Component, ElementRef, Inject, Renderer, QueryList, ViewContainerRef, ViewChildren} from '@angular/core';
import {DataService} from '../../../../../../../../AppBundle/Resources/public/ts/data-service/data.service';
import {ActionsService} from '../../../../../../../../AppBundle/Resources/public/ts/actions/actions.service';
import {Helper} from '../../../../../../../../AppBundle/Resources/public/ts/helper';
import {ModalService} from '../../../../../../../../AppBundle/Resources/public/modal/ts/modal.service';
import {NavManagerService} from '../../../../../../../../AppBundle/Resources/public/ts/nav-manager/nav-manager.service';
import {TabsComponent, ITabs, LazyLoadData} from '../../../../../../../../AppBundle/Resources/public/tabs/ts/src/tabs.component';


/* Import dependencies */

// Parent id for dependencies
var parentId = Helper.getAppVar('conf')['object']['id'];

// Contacts
import {ContactsExtModule} from "./contacts.ext-module";
// Logo Image
import {CropPopupExtModule as StoreLogoImageCropPopupExtModule} from "../../../../store-logo-image/index/ts/src/crop-popup.ext-module";
import {EditExtModule as StoreLogoImageEditExtModule} from "../../../../store-logo-image/index/ts/src/edit.ext-module";
import {ImageSlideExtModule} from '../../../../../../../../AppBundle/Resources/public/image/ts/src/image-slide.ext-module';

/* /Import dependencies */


@Component({
    selector: '#js_main',
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
        this._dependenciesData = this._helperService.getAppVar('dependencies');
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
                    module: ImageSlideExtModule,
                    component: 'ImageSlideComponent',
                    urlProvider: (this._helperService.getAppVar('route') + 'bck/admin/store-logo-image/data/' + parentId)
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
        switch (index) {
            case 0:
                return [
                    NavManagerService
                ];
            case 1:
                let localData = {
                    imageCropPopupModule: StoreLogoImageCropPopupExtModule,
                    imageCropPopupComponent: 'CropPopupComponent'
                };
                return [
                    {provide: 'DataService', useClass: DataService},
                    ActionsService,
                    {provide: 'DataServiceProvider', useValue: this._helperService.getDataServiceProvider(data)},
                    {provide: 'ActionsServiceProvider', useValue: this._helperService.getActionsServiceProvider(data)},
                    {provide: 'Provider', useValue: this._helperService.getImageProvider(data, localData)},
                    {provide: 'LegendProvider', useValue: this._helperService.getLegendProvider(data)},
                    {provide: 'Popups', useValue: {
                        module: StoreLogoImageEditExtModule,
                        component: 'EditComponent',
                        providers: [
                            {provide: 'FileFormProvider', useValue: {
                                label: data['label'],
                                url: data['route']['edit']['url']
                            }}
                        ]
                    }}
                ];
        }

        return null;
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