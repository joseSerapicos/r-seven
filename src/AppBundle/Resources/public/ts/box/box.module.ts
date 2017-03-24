import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {Helper} from '../helper';
import {ExpanderModule} from '../expander/expander.module';
import {BoxComponent, BoxProvider} from './box.component';


@NgModule({
    imports: [CommonModule, ExpanderModule],
    declarations: [BoxComponent]
    /*providers: [
        {provide: 'BoxProvider', useValue: Helper.getBoxProvider(_app.conf)}
    ],
    bootstrap: [BoxComponent]*/
})
export class BoxModule {}