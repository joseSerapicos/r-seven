import {Injectable, Inject, ViewContainerRef} from '@angular/core';


/**
 * Tasks Loader Manager manager.
 * This service manages the load/run of tasks. It controls tasks duplication (like form save, module loading, ect.),
 * and the loading panel (show and hide) according with pendent tasks.
 */
@Injectable()
export class TasksLoaderManagerService
{
    // Local variables
    protected _runningTasks: string[] = []; // Keep the running tasks to avoid task duplication (like save, etc.)
    protected _loadingTasks: string[] = []; // Keep the loading tasks to controls the loading panel

    protected _$loader: any; // Loading element to controls loading
    protected _hasLoader: boolean = false;

    constructor(
        @Inject('HelperService') protected _helperService: any
    ) {
        this._$loader = $('.js_loader');
    }


    /**
     * Add Task
     * @param task (use uppercase keys separated by "_" as convection)
     * @param hasLoading
     * @returns {boolean}
     */
    public addTask(task: string, hasLoading: boolean = true): boolean
    {
        if (this._helperService.inArray(task, this._runningTasks)) {
            // Task already is running, so we reject the duplication
            return false;
        }

        // Register running task
        this._runningTasks.push(task);
        if (hasLoading) {
            // Add task to loading tasks to show the loading panel
            this._loadingTasks.push(task);
            this.toggleLoading();
        }

        return true;
    }

    /**
     * Delete Task
     * @param task (use uppercase keys separated by "_" as convection)
     * @returns {boolean}
     */
    public delTask(task: string): boolean
    {
        let index = null;

        if ((index = this._helperService.arraySearch(task, this._runningTasks)) != null) {
            // Remove from tasks
            this._runningTasks.splice(index, 1);

            // Remove from loading tasks to hide the loading panel
            if ((index = this._helperService.arraySearch(task, this._loadingTasks)) != null) {
                this._loadingTasks.splice(index, 1);
                this.toggleLoading();
            }

            return true;
        }

        // Task does not exists
        return false;
    }

    /**
     * Has Task
     * @param task (use uppercase keys separated by "_" as convection)
     * @returns {boolean}
     */
    public hasTask(task: string): boolean
    {
        return ((this._helperService.arraySearch(task, this._runningTasks)) != null);
    }

    /**
     * Toggle Loading
     * @returns any
     */
    protected toggleLoading(): any
    {
        if ((this._loadingTasks.length > 0) && !this._hasLoader) {
            this._$loader.show();
            this._hasLoader = true;
        } else if ((this._loadingTasks.length < 1) && this._hasLoader) {
            this._$loader.hide();
            this._hasLoader = false;
        }

        return this;
    }
}