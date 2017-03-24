import {Component, ElementRef, Inject, Optional, Injector, Renderer} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {DataService} from '../../../../../../AppBundle/Resources/public/ts/data-service/data.service';
import {Helper} from '../../../../../../AppBundle/Resources/public/ts/helper';
import {PostService} from '../../../../../../AppBundle/Resources/public/ts/post.service';
import {WizardFormPopupComponent, WizardPopupProvider, IWizard} from '../../../../../../AppBundle/Resources/public/ts/wizard/wizard-form-popup.component';
import {WizardManagerService} from '../../../../../../AppBundle/Resources/public/ts/wizard/wizard-manager.service';
import {FormService} from '../../../../../../AppBundle/Resources/public/ts/form/form.service';


@Component({
    selector: 'js_dataBoxFormPopup',
    templateUrl: Helper.getRuntimeVar('templateUrl')
})
export class AddFormPopupComponent extends WizardFormPopupComponent implements IWizard
{
    protected _lastLoadedObj: number = null; // To avoid load multiple times the same object

    constructor(
        elementRef: ElementRef,
        renderer: Renderer,
        @Inject('Provider') provider: WizardPopupProvider,
        wizardManagerService: WizardManagerService,
        formService: FormService,
        protected _postService: PostService,
        @Inject('DataService') protected _dataService: any
    ) {
        // Call parent
        super(
            elementRef,
            renderer,
            provider,
            wizardManagerService,
            formService
        );
    }

    /**
     * Submit navigation (when leave one container to navigate in other one)
     * @param index (index to validate)
     * @returns {Promise<boolean>}
     */
    public submitNav(index: number): Promise<boolean>
    {
        let that = this;
        this._formService.setErrors(null);

        return new Promise(function(resolve, reject) {
            switch (index) {
                case 0:
                    let appDependencyFieldKey = that._dataService.getProviderExtraDataAttr('appDependencyFieldKey');
                    if (that._formService.getForm().controls[appDependencyFieldKey].valid) {
                        // Load object to default data
                        let value = that._formService.getObject()[appDependencyFieldKey];
                        if (that._lastLoadedObj != value) {
                            // Get original app dependency object
                            return that._postService.post(
                                (that._dataService.getProviderExtraDataAttr('appDependencyRouteGetUrl') + '/' + value),
                                null
                            ).then(
                                data => {
                                    data.object = data.object || null;
                                    for (let field of ['name', 'priority', 'isEnabled']) {
                                        if ((field in that._formService.getObject()) && (field in data.object)) {
                                            that._formService.setFormFieldValue(field, data.object[field]);
                                        }
                                    }
                                    that._lastLoadedObj = value;
                                    return resolve(true);
                                },
                                errors => { console.log(errors); return reject(false); }
                            );
                        }
                        return resolve(true);
                    } else {
                        let errors = {};
                        errors[appDependencyFieldKey] = ['Please select an option'];
                        that._formService.setErrors(errors);
                        return reject(false);
                    }
                case 1:
                    return that._formService.save().then(
                        data => { return resolve(true); },
                        errors => { return reject(false); }
                    );
            }

            // Nothing to do
            return resolve(true);
        });
    }
}