import {Injectable, ViewContainerRef, QueryList, Optional, Inject} from '@angular/core';
import {NavManagerService, INavManager as IWizardManager, LazyLoadData} from '../../../ts/nav-manager/nav-manager.service';
import {WizardManagerServiceProvider} from './wizard-manager-service-provider';
import {TasksLoaderManagerService} from '../../../tasks-loader-manager/ts/tasks-loader-manager.service';

// Reexports
export {IWizardManager, LazyLoadData};


/**
 * Wizard manager.
 * Use this class to manage the navigation between multiple containers in wizard mode.
 * Containers can be static or lazy load.
 * This class is defined as service because the components that use it already extends another class.
 * The component that use this service should implements the "IWizardManager" interface.
 * The init of this service should be called in "ngAfterViewInit" method when you have lazy load containers,
 * so the template has been rendered.
 */
@Injectable()
export class WizardManagerService
{
    // Local variables
    protected _component: any = null; // Parent component that uses and implement this service

    constructor(
        protected _navManagerService: NavManagerService,
        protected _tasksLoaderManagerService: TasksLoaderManagerService,
        @Optional() @Inject('WizardManagerServiceProvider') protected _provider: WizardManagerServiceProvider
    ) {
        // Set default values for provider
        if (!this._provider) {
            this._provider = {};
        }
    }

    /**
     * Initialization of service.
     * This method should be called in "ngAfterViewInit" method of parent component when you have lazy load containers,
     * so the template has been rendered.
     * @param component (parent component)
     * @param lazyLoadViewContainerRefQL
     */
    public init(component: any, lazyLoadViewContainerRefQL: QueryList<ViewContainerRef> = null): void
    {
        // Local variables
        this._component = component;
        
        // Initializes the NavManagerService
        this._navManagerService.init(component, lazyLoadViewContainerRefQL);
        this._navManagerService.navTo(0);
    }

    /**
     * Reset of service.
     * This method should be called in "ngOnDestroy" method of parent component, so variables can be reset (free data)
     * and the service be able to be reused.
     */
    public reset(): void
    {
        // Local variables
        this._component = null;

        // Reset the NavManagerService
        this._navManagerService.reset();
    }

    /**
     * Next action.
     * @param $event
     */
    public nextAction($event: any = null): void
    {
        // Avoid task duplication
        if (this._tasksLoaderManagerService.hasTask('LOAD')) {
            return;
        }

        if ($event) { $event.preventDefault(); }

        let nextIndex = (this._navManagerService.getIndex() + 1);

        // Force to rebuild all components
        if (this._provider.rebuildNextStepComponents) {
            this._navManagerService.unsetComponentRef(nextIndex);
        }

        this._navManagerService.navTo(nextIndex).then(
            data => { return; },
            errors => { return; }
        );
    }

    /**
     * Previous action.
     * @param $event
     */
    public prevAction($event: any = null): void
    {
        // Avoid task duplication
        if (this._tasksLoaderManagerService.hasTask('LOAD')) {
            return;
        }

        if ($event) { $event.preventDefault(); }

        // Skip submit to go into the prev container
        this._navManagerService.navTo(this._navManagerService.getIndex() - 1, false).then(
            data => { return; },
            errors => { return; }
        );
    }

    /**
     * Finish action.
     * @param $event
     */
    public finishAction($event: any = null): void
    {
        // Avoid task duplication
        if (this._tasksLoaderManagerService.hasTask('LOAD')) {
            return;
        }

        if ($event) { $event.preventDefault(); }

        let that = this;

        // Called only to check te current container (submit)
        this._navManagerService.navTo(this._navManagerService.getIndex()).then(
            data => { return that._component.closeAction(); },
            errors => { return; }
        );
    }

    /**
     * Cancel action.
     * @param $event
     */
    public cancelAction($event: any = null): void
    {
        if ($event) { $event.preventDefault(); }
        this._component.closeAction();
    }


    /* NAVIGATION MANAGER SERVICE METHODS */

    public getIndex(): number {
        return this._navManagerService.getIndex();
    }

    public getComponentRef(index: number = null): any {
        return this._navManagerService.getComponentRef(index);
    }

    public unsetComponentRef(index: number = null): WizardManagerService
    {
        this._navManagerService.unsetComponentRef(index);
        return this;
    }

    public navTo(index: number, hasSubmit: boolean = false): void
    {
        return this._navManagerService.navToAction(index, hasSubmit);
    }
}