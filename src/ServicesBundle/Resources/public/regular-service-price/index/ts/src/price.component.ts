import {Component, Optional, ElementRef, Inject, Renderer, QueryList, ViewContainerRef, ViewChildren} from '@angular/core';
import {NavManagerService} from '../../../../../../../AppBundle/Resources/public/ts/nav-manager/nav-manager.service';
import {DataService} from '../../../../../../../AppBundle/Resources/public/ts/data-service/data.service';
import {PriceComponent as BaseServicePriceComponent, BaseServicePriceProvider} from '../../../../base-service-price/index/ts/src/price.component';


@Component({
    selector: '.js_controls',
    templateUrl: '../templates/price.component.html'
})
export class PriceComponent extends BaseServicePriceComponent
{
    constructor(
        elementRef: ElementRef,
        renderer: Renderer,
        @Optional() @Inject('Provider') provider: BaseServicePriceProvider,
        @Inject('HelperService') helperService: any,
        navManagerService: NavManagerService,
        @Inject('DataService') dataService: DataService
    ) {
        super(
            elementRef,
            renderer,
            provider || null,
            helperService,
            navManagerService,
            dataService
        );
    }
}