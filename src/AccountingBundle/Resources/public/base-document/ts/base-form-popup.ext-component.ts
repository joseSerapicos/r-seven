import {Component, ElementRef, Inject, Optional, Injector, ReflectiveInjector, Renderer, ViewChild, ViewContainerRef} from '@angular/core';
import {FormBuilder} from '@angular/forms';
import {FormPopupExtensionComponent, FormProvider} from '../../../../../AppBundle/Resources/public/ts/form/form-popup.extension-component';


// Re-exports
export {FormProvider}


@Component({
    selector: '.js_baseFormPopup',
    template: ''
})
export class BaseFormPopupExtComponent extends FormPopupExtensionComponent
{
    // Constructor vars
    protected _injector: Injector;

    // To check if object has changed to refresh parent
    protected _object: any;

    constructor() { super(); }

    public initBaseFormPopupExtComponent(
        elementRef: any,
        renderer: any,
        provider: FormProvider,
        formService: any,
        dataService: any,
        injector: any,
    ) {
        super.initFormPopupExtensionComponent(
            elementRef,
            renderer,
            provider,
            formService,
            dataService
        );

        // Constructor vars
        this._injector = injector;

        // Set choices route according with the entity
        this.updateEntityAddressAutoCompleteProviderChoicesRoute();
    }

    /**
     * Update Entity Address Auto Complete Provider Choices Route
     * Set choices route according with the entity
     * @returns any
     */
    protected updateEntityAddressAutoCompleteProviderChoicesRoute()
    {
        // Update entityAddress autoCompleteProvider choices route to the updated entity
        let autoCompleteProviders = this._injector.get('AutoCompleteProviders');
        if (autoCompleteProviders['entityAddressObj']['childInjector']) {
            let choicesDataService = autoCompleteProviders['entityAddressObj']['childInjector'].get('DataServiceChoices'),
                choicesRoute = choicesDataService.getRoute('choices');
            choicesRoute = (choicesRoute.substr(0, choicesRoute.lastIndexOf('/') + 1)
                + this._formService.getObject()['entityObj']
            );
            choicesDataService.setRoute('choices', choicesRoute);
        } else {
            autoCompleteProviders['entityAddressObj']['urlConf'] = (
                autoCompleteProviders['entityAddressObj']['urlConf'].substr(
                    0,
                    (autoCompleteProviders['entityAddressObj']['urlConf'].lastIndexOf('/') + 1)
                )
                + this._formService.getObject()['entityObj']
            );
        }

        return this;
    }

    /**
     * onEntityAddressChange
     * @param value
     */
    protected onEntityAddressChange(value: string): void
    {
        this._dataService.runAction(
            (this._dataService.getRoute('edit-entity-address')
                + '\\'
                + this._formService.getObject()['id']
            ),
            {entityAddressObj: value}
        ).then(
            data => {
                if (data['object']) {
                    // Copy values instead of set the updated object to avoid lost user changes like dates, comment, etc.
                    let obj = this._formService.getObject();
                    let originalObj = this._formService.getOriginalObject();
                    for (let field of ['entityAddressObj', 'entityStreet1', 'entityStreet2', 'entityPostCode', 'entityCity', 'entityRegion']) {
                        obj[field] = (data['object'][field] || null);
                        // Update original object yet, because this changes are already saved in database,
                        // otherwise user will be asked when close the form, because objects are different (have changes),
                        // and user can wrongly reset the object for the previous address when this procedure is no more
                        // possible because object is updated in database
                        originalObj[field] = obj[field];
                    }
                }
                return;
            },
            errors => { console.log(errors); return; }
        );
    }
}