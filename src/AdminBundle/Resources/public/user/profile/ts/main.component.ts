import {Component} from '@angular/core';
import {Helper} from '../../../../../../AppBundle/Resources/public/ts/helper';


@Component({
    selector: '#js_main',
    templateUrl: Helper.getGlobalVar('route') + 'admin/user/profile-detail'
})
export class MainComponent
{
    constructor(
    ) {}
}