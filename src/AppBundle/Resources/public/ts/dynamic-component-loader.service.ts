import {Injectable, Compiler, ReflectiveInjector, ViewContainerRef, Injector} from '@angular/core';

// Service
@Injectable()
export class DynamicComponentLoaderService {
    constructor(
        protected _compiler: Compiler
    ) {}

    /**
     * Load component into ViewContainerRef
     * @param module
     * @param component (component name)
     * @param viewContainerRef
     * @param injector (result of:
     *     injector = ReflectiveInjector.fromResolvedProviders(
     *         ReflectiveInjector.resolve([
     *             MyService,
     *             {provide: 'MyProvider', useValue: null}
     *         ]),
     *         this._injector
     *     );
     * )
     * @returns {Promise<T>}
     */
    public load(module: any, component: string, viewContainerRef: ViewContainerRef, injector: Injector = null): Promise<any>
    {
        let that = this;

        return new Promise(function(resolve, reject) {
            that.getComponentFactory(module, component).then(
                componentFactory => {
                    let componentRef = viewContainerRef.createComponent(componentFactory, 0, injector, []);
                    return resolve(componentRef);
                });
        });
    }

    /**
     * Get component factory
     * @param module
     * @param component (component name)
     * @returns {Promise<T>}
     */
    public getComponentFactory(module: any, component: string): Promise<any>
    {
        let that = this;

        return new Promise(function(resolve, reject) {
            that._compiler.compileModuleAndAllComponentsAsync(module).then(
                moduleFactory => {
                    let componentFactory = moduleFactory.componentFactories.find(
                        tmpComponentFactory => tmpComponentFactory.componentType['name'] === component
                    );
                    return resolve(componentFactory);
                });
        });
    }
}