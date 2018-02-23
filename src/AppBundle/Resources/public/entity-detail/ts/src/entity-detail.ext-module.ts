import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule} from '@angular/forms';
import {ExpanderModule} from '../../../ts/expander/expander.module';
import {EntityDetailComponent} from './entity-detail.component';


@NgModule({
    imports: [CommonModule, FormsModule, ExpanderModule],
    declarations: [
        EntityDetailComponent
    ],
    exports: [EntityDetailComponent]
})
export class EntityDetailExtModule {}