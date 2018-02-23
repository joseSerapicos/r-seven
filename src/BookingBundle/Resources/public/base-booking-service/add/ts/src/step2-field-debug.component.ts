import {Component, ElementRef, Inject, Optional, Injector, Renderer, EventEmitter} from '@angular/core';
import {FormBuilder} from '@angular/forms';
import {AccordionComponent, IAccordion, LazyLoadData} from '../../../../../../../AppBundle/Resources/public/accordion/ts/src/accordion.component';
import {NavManagerService} from '../../../../../../../AppBundle/Resources/public/ts/nav-manager/nav-manager.service';
import {BaseProvider, IModalPopup} from '../../../../../../../AppBundle/Resources/public/modal/ts/modal.service';


// Interface provider
export interface Step2FieldDebugProvider extends BaseProvider {
    modules: { // Put here modules dependencies
        label: string,
        data: {
            availability?: any,
            allot?: any,
            price?: any
        }
    }
}


@Component({
    selector: '#js_addStep2FieldDebug',
    templateUrl: '../templates/step2-field-debug.component.html'
})
export class Step2FieldDebugComponent extends AccordionComponent implements IAccordion, IModalPopup
{
    // Modal parameters
    onDismissEmitter: EventEmitter<any> = new EventEmitter();

    // USed by template
    protected _statusMap: any;


    constructor(
        elementRef: ElementRef,
        renderer: Renderer,
        @Optional() @Inject('Provider') provider: any,
        @Inject('HelperService') helperService: any,
        navManagerService: NavManagerService
    ) {
        super(
            elementRef,
            renderer,
            provider || null,
            helperService,
            navManagerService
        );

        this._statusMap = this._helperService.getStatusMap();
    }

    /**
     * Get navigation data (needed data to lazy load container)
     * @param index (index to load)
     * @returns NavData
     */
    public getNavData(index: number): LazyLoadData
    {
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
        return [];
    }

    /**
     * Close action.
     * @param $event
     */
    public closeAction($event: any = null): void
    {
        if ($event) { $event.preventDefault(); }
        this.onDismissEmitter.emit(null);
    }
}