import {Component, ElementRef, Renderer, Inject} from '@angular/core';
import {EntityDetailPreviewComponent, EntityDetailPreviewProvider} from '../../../../../../../../AppBundle/Resources/public/entity-detail/ts/src/entity-detail-preview.component';


@Component({
    selector: '#js_addStep6',
    templateUrl: '../templates/step6.component.html'
})
export class Step6Component extends EntityDetailPreviewComponent
{
    constructor(
        elementRef: ElementRef,
        renderer: Renderer,
        @Inject('Provider') provider: EntityDetailPreviewProvider,
        @Inject('DataService') dataService: any,
        @Inject('HelperService') helperService: any
    ) {
        super(
            elementRef,
            renderer,
            provider,
            dataService,
            helperService
        );
    }
}