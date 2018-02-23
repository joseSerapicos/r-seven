import {Component} from '@angular/core';


@Component({
    selector: '#js_main',
    template: `
    <div class="row page-heading border-bottom white-bg main-head-container"><div class="col-lg-12">
        <div class="js_entityDetail"></div>
    </div></div>
    
    <div class="row wrapper-content main-body-container"><div class="col-lg-12">
        <div class="js_contacts accordion-white m-b-md"></div>
    </div></div>
    `
})
export class MainComponent
{
    constructor(
    ) {}
}