import {Component} from '@angular/core';


@Component({
    selector: '#js_main',
    template: `
    <div class="row border-bottom white-bg"><div class="col-12">
        <div class="js_entityDetail"></div>
    </div></div>
    
    <div class="row wrapper-content main-body-container"><div class="col-12">
        <div class="js_contacts white-accordion"></div>
    </div></div>
    `
})
export class MainComponent
{
    constructor(
    ) {}
}