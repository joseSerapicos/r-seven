import {Component, ElementRef, Inject, Optional, Injector, Renderer, ReflectiveInjector, ViewChild, ViewContainerRef} from '@angular/core';
import {FormBuilder} from '@angular/forms';
import {FormService} from '../../../../../../../AppBundle/Resources/public/form/ts/form.service';
import {DataService} from "../../../../../../../AppBundle/Resources/public/ts/data-service/data.service";
import {ActionsService} from '../../../../../../../AppBundle/Resources/public/ts/actions/actions.service';
import {DynamicComponentLoaderService} from '../../../../../../../AppBundle/Resources/public/ts/dynamic-component-loader.service';
import {PostService} from '../../../../../../../AppBundle/Resources/public/ts/post.service';
import {FormExtensionComponent, FormProvider} from '../../../../../../../AppBundle/Resources/public/form/ts/form.extension-component';


// Re-exports
export {FormProvider}

/* Import dependencies */

// Step1 Package Service
import {Step2ServiceExtModule} from './step2-service.ext-module';
/* /Import dependencies */


@Component({
    selector: '#js_addStep2',
    templateUrl: '../templates/step2.component.html'
})
export class Step2Component extends FormExtensionComponent
{
    // For dependency ("Step1ServiceExtModule")
    @ViewChild('js_step1Service', {read: ViewContainerRef}) lazyLoadViewContainerRefDependency: ViewContainerRef;


    constructor(
        elementRef: ElementRef,
        renderer: Renderer,
        @Inject('Provider') provider: FormProvider,
        formService: FormService,
        @Inject('DataService') dataService: any,
        protected _dynamicComponentLoaderService: DynamicComponentLoaderService,
        protected _postService: PostService,
        protected _injector: Injector,
        @Inject('HelperService') protected _helperService: any
    ) {
        super();
        super.initFormExtensionComponent(
            elementRef,
            renderer,
            provider,
            formService,
            dataService
        );
    }

    /**
     * Lifecycle callback
     */
    ngAfterViewInit()
    {
        super.ngAfterViewInit();

        // Load dependency
        let that = this,
            dependencyUrlProvider = (
                this._helperService.getAppVar('route')
                + 'services/package-service/data-for-booking-service'
            );

        this._postService.post(dependencyUrlProvider).then(
            data => {
                let providers = [
                        {provide: 'DataService', useClass: DataService},
                        ActionsService,
                        {provide: 'DataServiceProvider', useValue: that._helperService.getDataServiceProvider(data)},
                        {provide: 'ActionsServiceProvider', useValue: that._helperService.getActionsServiceProvider(data)},
                        {provide: 'Provider', useValue: that._helperService.getDataBoxProvider(data)}
                    ],
                    injector = ReflectiveInjector.fromResolvedProviders(
                        ReflectiveInjector.resolve(providers),
                        that._injector
                    );

                that._dynamicComponentLoaderService.load(
                    Step2ServiceExtModule,
                    'Step2ServiceComponent',
                    that.lazyLoadViewContainerRefDependency,
                    injector
                ).then(
                    componentRef => { return true; },
                    errors => { console.log(errors); return null; }
                );
            },
            errors => { console.log(errors); return false; }
        );
    }
}