import {Component, ElementRef, Inject, Optional, Injector, Renderer} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {DataService} from '../../../../../../../AppBundle/Resources/public/ts/data-service/data.service';
import {PostService} from '../../../../../../../AppBundle/Resources/public/ts/post.service';
import {WizardPopupProvider} from '../../../../../../../AppBundle/Resources/public/wizard/ts/src/wizard-form-popup.component';
import {WizardManagerService} from '../../../../../../../AppBundle/Resources/public/wizard/ts/src/wizard-manager.service';
import {AddComponent as ModuleIndexAddComponent} from '../../../../module/index/ts/src/add.component';
import {FormService} from '../../../../../../../AppBundle/Resources/public/form/ts/form.service';


@Component({
    selector: 'js_dataBoxFormPopup',
    templateUrl: '../templates/add.component.html'
})
export class AddComponent extends ModuleIndexAddComponent
{
    constructor(
        elementRef: ElementRef,
        renderer: Renderer,
        @Inject('Provider') provider: WizardPopupProvider,
        wizardManagerService: WizardManagerService,
        formService: FormService,
        postService: PostService,
        @Inject('DataService') dataService: any
    ) {
        // Call parent
        super(
            elementRef,
            renderer,
            provider,
            wizardManagerService,
            formService,
            postService,
            dataService
        );
    }
}