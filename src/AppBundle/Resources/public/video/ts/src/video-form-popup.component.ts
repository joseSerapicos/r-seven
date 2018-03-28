import {Component, ElementRef, Renderer, Inject, Optional, Injector, ViewContainerRef, QueryList, ViewChild, ViewChildren} from '@angular/core';
import {DataService} from '../../../ts/data-service/data.service';
import {FormService} from '../../../form/ts/form.service';
import {WizardManagerService} from '../../../wizard/ts/src/wizard-manager.service';
import {WizardPopupExtComponent, WizardPopupProvider, IWizard, LazyLoadData} from '../../../wizard/ts/src/wizard-popup.ext-component';

// Interface provider
export interface VideoFormPopupProvider extends WizardPopupProvider {
    modules: { // Put here modules dependencies
        videoFormFile: {module: any, component: string},
        videoFormUrl: {module: any, component: string}
    }
}


@Component({
    selector: 'js_videoUploadPopup',
    templateUrl: '../templates/video-form-popup.component.html'
})
export class VideoFormPopupComponent extends WizardPopupExtComponent implements IWizard
{
    // For NavManagerService
    @ViewChildren('js_lazyLoadContainer', {read: ViewContainerRef}) lazyLoadViewContainerRefQL: QueryList<ViewContainerRef>;

    //Local variables
    protected errors: any = {};
    protected _source: string = null;
    protected _loadedSource: string = null;

    constructor(
        elementRef: ElementRef,
        renderer: Renderer,
        @Inject('Provider') provider: VideoFormPopupProvider,
        wizardManagerService: WizardManagerService,
        @Optional() protected _formService: FormService,
        @Inject('DataService') protected _dataService: any
    ) {
        super();
        super.initWizardPopupExtComponent(
            elementRef,
            renderer,
            provider,
            wizardManagerService
        );
    }

    /**
     * Submit navigation (when leave one container to navigate in other one)
     * @param index (index to validate)
     * @returns {Promise<boolean>}
     */
    public submitNav(index: number): Promise<boolean>
    {
        let that = this;
        this.errors = {}; // Form errors

        return new Promise(function(resolve, reject) {
            switch (index) {
                case 0:
                    if (!that._source) {
                        that.errors = {source: ['Please select an option']};
                        return reject(false);
                    }

                    if (that._loadedSource != that._source) {
                        // Clear container to load the new source
                        if (that._wizardManagerService.getComponentRef(index +1 )) {
                            that._wizardManagerService.unsetComponentRef(index +1);
                            that._loadedSource = that._source;
                        }
                    }

                    return resolve(true);
                case 1:
                    if (that._source == 'file') {
                        // It's saved automatically by the plugin
                        return resolve(true);
                    }

                    // Update route
                    let originalRoute = that._dataService.getRoute('add');
                    that._dataService.setRoute('add', originalRoute + '/' + that._source);

                    // Save form
                    that._wizardManagerService.getComponentRef(index).instance._formService.save().then(
                        data => { resolve(true); },
                        errors => { reject(false); }
                    );

                    // Restore original route
                    that._dataService.setRoute('add', originalRoute);

                    return;
            }

            // Nothing to do
            return resolve(true);
        });
    }

    /**
     * Get navigation data (needed data to lazy load container)
     * @param index (index to load)
     * @returns NavData
     */
    public getNavData(index: number): LazyLoadData
    {
        switch (index) {
            case 1:
                if (this._source == 'file') {
                    return {
                        module: this._provider['modules']['videoFormFile']['module'],
                        component: this._provider['modules']['videoFormFile']['component']
                    };
                } else {
                    return {
                        module: this._provider['modules']['videoFormUrl']['module'],
                        component: this._provider['modules']['videoFormUrl']['component'],
                    };
                }
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
            case 1:
                return [
                    {provide: 'Provider', useValue: {
                        label: this.getProviderAttr('label'),
                        url: (this._dataService.getRoute('add') + '/' + this._source)
                    }}
                ];
        }

        return null;
    }

    /**
     * Set source
     * @param $event
     * @param value
     */
    private setSource($event: any, value: string): void
    {
        this._source = value;
    }
}