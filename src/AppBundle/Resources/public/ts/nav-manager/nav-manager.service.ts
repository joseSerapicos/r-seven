import {Injectable, Inject, Injector, ReflectiveInjector, ViewContainerRef, QueryList} from '@angular/core';
import {DynamicComponentLoaderService} from '../dynamic-component-loader.service';
import {PostService} from '../post.service';


/**
 * Interface to be implemented by parent component
 */
export interface INavManager {
    /**
     * Submit navigation (when leave one container to navigate in other one)
     * @param index (index to validate)
     * @returns {Promise<boolean>}
     */
    submitNav?(index: number): Promise<boolean>;

    /**
     * Get navigation data (needed data to lazy load container)
     * @param index (index to load)
     * @returns NavData
     */
    getNavData?(index: number): LazyLoadData;

    /**
     * Get nav providers (to lazy load components in container with dependency injection)
     * @param index (index to load)
     * @param data (data to resolve all providers)
     * @returns {Array}
     */
    getNavProviders?(index: number, data?: any): any;
}


/**
 * Interface for lazy load data
  */
export interface LazyLoadData {
    module: any,
    component: string,
    dataProvider?: any, // All necessary data to resolve providers
    urlProvider?: string // Url to get all necessary data to resolve providers (usually the ConfAction or DataAction)
}


/**
 * Navigation manager.
 * Use this class to manage the navigation between multiple containers.
 * Containers can be static or lazy load.
 * This class is defined as service because the components that use it already extends another class.
 * The component that use this service should implements the "INavManager" interface.
 * The init of this service should be called in "ngAfterViewInit" method when you have lazy load containers,
 * so the template has been rendered.
 * NOTE: Prefix "ll" means "Lazy load"
 */
@Injectable()
export class NavManagerService
{
    // Local variables
    protected _component: any; // Parent component that uses and implement this service
    protected _llViewContainerRefArr: ViewContainerRef[] = [];
    protected _llComponentRefArr: any = {}; // Array of ComponentRef with loaded containers
    protected _currentIndex: number = 0; // Index of current container

    constructor(
        @Inject('HelperService') protected _helperService: any,
        protected _injector: Injector,
        protected _dynamicComponentLoaderService: DynamicComponentLoaderService,
        protected _postService: PostService
    ) {}

    /**
     * Initialization of service.
     * This method should be called in "ngAfterViewInit" method of parent component when you have lazy load containers,
     * so the template has been rendered.
     * @param component (parent component)
     * @param lazyLoadViewContainerRefQL
     * @returns {NavManagerService}
     */
    public init(component: any, lazyLoadViewContainerRefQL: QueryList<ViewContainerRef> = null): NavManagerService
    {
        // Local variables
        this._component = component;

        if (lazyLoadViewContainerRefQL) {
            // Get array of ViewContainerRef for lazy loader containers
            this._llViewContainerRefArr = lazyLoadViewContainerRefQL.toArray();
        }

        return this;
    }

    /**
     * Reset of service.
     * This method should be called in "ngOnDestroy" method of parent component, so variables can be reset (free data)
     * and the service be able to be reused.
     */
    public reset(): NavManagerService
    {
        // Local variables
        // Needs to be reset (free data),
        // because the service is reused and not created a new when parent component is instantiated
        this._component = null;
        this._llViewContainerRefArr = [];
        this._llComponentRefArr = {};
        this._currentIndex = 0;

        return this;
    }

    /**
     * Get current index
     * @returns {any}
     */
    public getIndex(): number
    {
        return this._currentIndex;
    }

    /**
     * Get componentRef of current index (if index is not provided)
     * @param index (index of container)
     * @returns {any}
     */
    public getComponentRef(index: number = null): any
    {
        if (index == null) {
            index = this._currentIndex;
        }
        return this._llComponentRefArr[index];
    }

    /**
     * Unset componentRef of current index (if index is not provided)
     * @param index (index of container)
     * @returns NavManagerService
     */
    public unsetComponentRef(index: number = null): NavManagerService
    {
        index = (index || this._currentIndex);

        this._llComponentRefArr[index].destroy();
        this._llComponentRefArr[index] = null;

        return this;
    }

    /**
     * Navigate to container.
     * This method should be called from child component.
     * @param index (index of container)
     * @param hasSubmit (determines if submit should be called)
     * @returns {Promise<boolean>}
     */
    public navTo(index: number, hasSubmit: boolean = true): Promise<boolean>
    {
        let that = this;
            
        return new Promise(function(resolve, reject) {
            // Send current container to validation before load the other one
            if (that._component['submitNav'] && hasSubmit) {
                return that._component.submitNav(that._currentIndex).then(
                    data => {
                        return that.loadNav(index).then(
                            data => { return resolve(true); },
                            errors => { console.log(errors); return reject(false); }
                        );
                    },
                    errors => { return reject(false); }
                );
            }

            return that.loadNav(index).then(
                data => { return resolve(true); },
                errors => { console.log(errors); return reject(false); }
            );
        });
    }

    /**
     * Navigate to container action.
     * This method should be called from view/template.
     * @param index (index of container)
     * @param hasSubmit (determines if submit should be called)
     */
    public navToAction(index: number, hasSubmit: boolean = true): void
    {
        this.navTo(index, hasSubmit).then(
            data => { return; },
            errors => { return; }
        );
    }

    /**
     * Load navigation container
     * @param index
     * @returns {Promise<boolean>}
     */
    private loadNav(index): Promise<boolean>
    {
        let that = this;

        return new Promise(function(resolve, reject) {
            let llViewIndex = null,
                llClass = ('js_lazyLoadContainer_' + index); // Lazy load class

            // Check if is a lazy load container (by its index in class)
            for (let index in that._llViewContainerRefArr) {
                if ($(that._llViewContainerRefArr[index].element.nativeElement).parent().hasClass(llClass)) {
                    llViewIndex = index;
                    break;
                }
            }

            if ((llViewIndex === null) // No lazy load view
                || that._llComponentRefArr[index] // Container has been loaded
                || !that._component['getNavData'] // Component doesn't have the necessary implementation to lazy load
            ) {
                that._currentIndex = index;
                return resolve(true);
            }

            // Get child data
            let lazyLoadData: LazyLoadData = that._component.getNavData(index);

            // Load child data from url
            if (!lazyLoadData.dataProvider && lazyLoadData.urlProvider) {
                return that._postService.post(lazyLoadData.urlProvider, null).then(
                    data => {
                        lazyLoadData.dataProvider = data;

                        // Load container
                        return that.loadContainer(
                            index,
                            llViewIndex,
                            lazyLoadData
                        ).then(
                            data => { return resolve(true); },
                            errors => { console.log(errors); return reject(false); }
                        );
                    },
                    errors => { console.log(errors); return reject(false); }
                );
            }

            // Load container
            return that.loadContainer(
                index,
                llViewIndex,
                lazyLoadData
            ).then(
                data => { return resolve(true); },
                errors => { console.log(errors); return reject(false); }
            );
        });
    }

    /**
     * Load container
     * @param index
     * @param lazyLoadViewIndex (lazy load view index)
     * @param lazyLoadData
     * @returns {Promise<boolean>}
     */
    private loadContainer(index, lazyLoadViewIndex, lazyLoadData: LazyLoadData): Promise<boolean>
    {
        let providers = (this._component['getNavProviders']
                ? this._component.getNavProviders(index, lazyLoadData.dataProvider)
                : null
        );

        let viewContainerRef: ViewContainerRef = this._llViewContainerRefArr[lazyLoadViewIndex];

        let injector = null;
        if (providers) {
            injector = ReflectiveInjector.fromResolvedProviders(
                ReflectiveInjector.resolve(providers),
                this._injector
            );
        }

        let that = this;

        return this._dynamicComponentLoaderService.load(
            lazyLoadData.module,
            lazyLoadData.component,
            viewContainerRef,
            injector
        ).then(
            componentRef => {
                that._llComponentRefArr[index] = componentRef;
                that._currentIndex = index;
                return true;
            },
            errors => { console.log(errors); return null; }
        );
    }
}