import {Component, ElementRef, Inject, Optional, Injector, Renderer} from '@angular/core';
import {FormBuilder} from '@angular/forms';
import {FormPopupComponent, FormProvider} from '../../../../../../../AppBundle/Resources/public/form/ts/form-popup.component';
import {DataService} from '../../../../../../../AppBundle/Resources/public/ts/data-service/data.service';
import {FormService} from '../../../../../../../AppBundle/Resources/public/form/ts/form.service';


@Component({
    selector: '#js_emailEdit',
    templateUrl: '../templates/edit.component.html'
})
export class EditComponent extends FormPopupComponent
{
    constructor(
        elementRef: ElementRef,
        renderer: Renderer,
        @Inject('Provider') provider: FormProvider,
        formService: FormService,
        @Inject('DataService') dataService: any,
        @Inject('ParentDataService') protected _parentDataService: any
    ) {
        super(
            elementRef,
            renderer,
            provider,
            formService,
            dataService
        );
    }

    /**
     * Save and close popup action.
     * This method should be called from view/template.
     * @param $event
     */
    public saveAndCloseAction($event: any = null): void
    {
        if ($event) { $event.preventDefault(); }
        this.save().then(
            data => {
                // Update parent DataService
                let targetObj = this._dataService.getLocalDataAttr('targetObj');
                if (targetObj) {
                    this._parentDataService.setObject(targetObj, this._parentDataService.getObjectIndex());
                }

                this.closeAction();
                return;
            },
            errors => { return; }
        );
    }
}