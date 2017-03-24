import {Component, Inject, Optional, Injector, ElementRef, Renderer} from '@angular/core';
import {WizardManagerService} from '../../../../../../AppBundle/Resources/public/ts/wizard/wizard-manager.service';
import {DataService} from '../../../../../../AppBundle/Resources/public/ts/data-service/data.service';
import {Helper} from '../../../../../../AppBundle/Resources/public/ts/helper';
import {FormService} from '../../../../../../AppBundle/Resources/public/ts/form/form.service';
import {WizardPopupProvider} from '../../../../../../AppBundle/Resources/public/ts/wizard/wizard-popup.component';
import {VideoFormPopupComponent} from '../../../../../../AppBundle/Resources/public/ts/video/video-form-popup.component';


@Component({
    selector: '#js_serviceVideoPopup',
    templateUrl: Helper.getGlobalVar('route') + 'template/form-popup/video'
})
export class ServiceVideoPopupComponent extends VideoFormPopupComponent
{
    constructor(
        elementRef: ElementRef,
        renderer: Renderer,
        @Inject('Provider') provider: WizardPopupProvider,
        wizardManagerService: WizardManagerService,
        @Optional() formService: FormService,
        @Inject('DataService') dataService: any
    ) {
        // Call parent
        super(
            elementRef,
            renderer,
            provider,
            wizardManagerService,
            formService,
            dataService
        );
    }
}