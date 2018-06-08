import {Component, ElementRef, Inject, Optional, Injector, ReflectiveInjector, Renderer, ViewChildren, QueryList, ViewContainerRef} from '@angular/core';
import {DataService} from '../../../../../../../../AppBundle/Resources/public/ts/data-service/data.service';
import {ActionsService} from '../../../../../../../../AppBundle/Resources/public/ts/actions/actions.service';
import {FormService} from '../../../../../../../../AppBundle/Resources/public/form/ts/form.service';
import {DynamicComponentLoaderService} from '../../../../../../../../AppBundle/Resources/public/ts/dynamic-component-loader.service';
import {ModalService} from "../../../../../../../../AppBundle/Resources/public/modal/ts/modal.service";
import {PostService} from '../../../../../../../../AppBundle/Resources/public/ts/post.service';


/* Import dependencies */

// Calendar
import {CalendarExtModule as UserCalendarExtModule} from '../../../../../../../../AppBundle/Resources/public/calendar/ts/src/calendar.ext-module';
import {EditExtModule as UserCalendarEditExtModule} from '../../../../../../../UserBundle/Resources/public/user-calendar/index/ts/src/edit.ext-module';
// Booking
import {DataBoxExtensionModule} from '../../../../../../../../AppBundle/Resources/public/data-box/ts/src/data-box.extension-module';

/* /Import dependencies */


@Component({
    selector: '.js_app',
    template: `
    <div class="row">
        <div class="col-sm-12">
            <ng-template #js_homeComponent></ng-template>
        </div>
        <div class="col-sm-12">
            <ng-template #js_homeComponent></ng-template>
        </div>
        <div class="col-sm-12">
            <ng-template #js_homeComponent></ng-template>
        </div>
        <div class="col-sm-12">
            <ng-template #js_homeComponent></ng-template>
        </div>
        <div class="col-sm-12">
            <ng-template #js_homeComponent></ng-template>
        </div>
    </div>
    `
})
export class MainComponent
{
    // To load components
    @ViewChildren('js_homeComponent', {read: ViewContainerRef}) componentsViewContainerRefQL: QueryList<ViewContainerRef>;
    protected _componentsViewContainerRefArr: ViewContainerRef[] = [];

    // @TODO: Provide dependencies from provider according with the user acl
    protected _dependencies = [
        'userCalendar', // To show user calendar events
        'userBooking', // To show pendent booking of the user and booking without user (operator)
        'client', // To show client anniversary
        'clientDocument', // To show expired client documents
        'supplierDocument' // To show expired supplier documents
    ];

    constructor(
        protected _elementRef: ElementRef,
        protected _injector: Injector,
        protected _dynamicComponentLoaderService: DynamicComponentLoaderService,
        protected _postService: PostService,
        protected _modalService: ModalService,
        @Inject('HelperService') protected _helperService: any,
        protected viewContainerRef: ViewContainerRef
    ) {
        this._modalService.init(viewContainerRef);
    }

    /**
     * Load dependency
     * @returns {Object}
     */
    protected loadDependency(dependency)
    {
        // Load dependency
        let that = this,
            dependencyIndex = null,
            module = null,
            component = null,
            componentProviders = null,
            popupsProvider = null,
            data = {};

        switch (dependency) {
            case 'userCalendar':
                dependencyIndex = 0;
                module = UserCalendarExtModule;
                component = 'CalendarComponent';
                data = _app.dependencies['userCalendar'];

                // Popups provider (the user can manage the calendar here)
                popupsProvider = {provide: 'Popups', useValue: {
                    module: UserCalendarEditExtModule,
                    component: 'EditComponent',
                    providers: [
                        FormService,
                        {provide: 'Provider', useValue: this._helperService.getFormProvider(data)}
                    ]
                }};
                break;
            case 'userBooking':
                dependencyIndex = 1;
                module = DataBoxExtensionModule;
                component = 'DataBoxComponent';
                data = _app.dependencies['userBooking'];
                break;
            case 'client':
                dependencyIndex = 2;
                module = DataBoxExtensionModule;
                component = 'DataBoxComponent';
                data = _app.dependencies['client'];
                break;
            case 'clientDocument':
                dependencyIndex = 3;
                module = DataBoxExtensionModule;
                component = 'DataBoxComponent';
                data = _app.dependencies['clientDocument'];
                break;
            case 'supplierDocument':
                dependencyIndex = 4;
                module = DataBoxExtensionModule;
                component = 'DataBoxComponent';
                data = _app.dependencies['supplierDocument'];
                break;
        }

        let providers = [
            {provide: 'DataService', useClass: DataService},
            ActionsService,
            {provide: 'DataServiceProvider', useValue: this._helperService.getDataServiceProvider(data)},
            {provide: 'Provider', useValue: this._helperService.getDataBoxProvider(data)},
            {provide: 'ActionsServiceProvider', useValue: this._helperService.getActionsServiceProvider(data)},
            {provide: 'LegendProvider', useValue: this._helperService.getLegendProvider(data)},
            // No popups are provided by default, to make this component lighter,
            // to handle with each component the user should go to the specific component
            popupsProvider ? popupsProvider : {provide: 'Popups', useValue: null}
        ];

        // Specific component providers
        if (componentProviders) {
            providers = providers.concat(componentProviders);
        }

        // Set injector
        let injector = ReflectiveInjector.fromResolvedProviders(
            ReflectiveInjector.resolve(providers),
            that._injector
        );

        // Load component
        that._dynamicComponentLoaderService.load(
            module,
            component,
            this._componentsViewContainerRefArr[dependencyIndex],
            injector
        ).then(
            componentRef => { return true; },
            errors => { console.log(errors); return null; }
        );

        return this;
    }

    /**
     * Lifecycle callback
     */
    ngAfterViewInit()
    {
        // Get array of ViewContainerRef
        this._componentsViewContainerRefArr = this.componentsViewContainerRefQL.toArray();

        for (let dependency of this._dependencies) {
            this.loadDependency(dependency);
        }
    }
}