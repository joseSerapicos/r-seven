import {Injectable, ElementRef} from '@angular/core';

// Service
@Injectable()
export class AssetsLazyLoaderManagerService {
    protected _selector: string = '.js_lazy'; // Lazy loader plugin instance


    constructor() {}

    /**
     * Load
     * @TODO: Not used for now
     * @returns {AssetsLazyLoaderManagerService}
     */
    public load(): any
    {
        $(this._selector).Lazy();
        return this;
    }
}