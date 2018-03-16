import {Component, Inject, ElementRef, Renderer, ReflectiveInjector, Injector, ViewContainerRef} from '@angular/core';
import {BaseExtensionComponent} from '../../../ts/base/base.extension-component';
import {EntityDetailPreviewProvider} from './entity-detail-preview-provider';


// Reexports
export {EntityDetailPreviewProvider};


@Component({
    selector: '#js_entityDetailPreview',
    templateUrl: '../templates/entity-detail-preview.component.html'
})
export class EntityDetailPreviewComponent extends BaseExtensionComponent
{
    protected _object;
    protected _fields;
    protected _dependencies;
    protected _dependenciesArr; // For ngFor in view


    constructor(
        elementRef: ElementRef,
        renderer: Renderer,
        @Inject('Provider') provider: EntityDetailPreviewProvider,
        @Inject('DataService') protected _dataService: any, // Only used to normalize objects to view
        @Inject('HelperService') protected _helperService: any
    ) {
        super();
        super.initBaseExtensionComponent(
            elementRef,
            renderer,
            provider
        );

        this.init(this._provider);
    }

    /**
     * Initialize data
     * @param data
     */
    public init(data: any)
    {
        this._provider = this._helperService.mergeObjects(this._provider, data);

        this._fields = this._provider.fields;
        this._object = this._provider.object;
        this._dataService.normalizeObjectsToTemplate(
            [this._object],
            this._fields['view'],
            this._fields['metadata'],
            this._provider.fieldsChoices
        );

        this._dependenciesArr = [];
        this._dependencies = (this._provider.dependencies || null);
        if (this._dependencies) {
            for (let dependency in this._dependencies) {
                this._dependenciesArr.push(dependency);
                this._dataService.normalizeObjectsToTemplate(
                    this._dependencies[dependency]['objects'],
                    this._dependencies[dependency]['fields']['view'],
                    this._dependencies[dependency]['fields']['metadata'],
                    this._dependencies[dependency]['fieldsChoices']
                );
            }
        }
    }
}