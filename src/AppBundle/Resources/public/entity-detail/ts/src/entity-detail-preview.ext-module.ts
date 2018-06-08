import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule} from '@angular/forms';
import {ExpanderModule} from '../../../ts/expander/expander.module';
import {EntityDetailPreviewComponent} from './entity-detail-preview.component';


@NgModule({
    imports: [CommonModule, FormsModule, ExpanderModule],
    declarations: [
        EntityDetailPreviewComponent
    ],
    exports: [EntityDetailPreviewComponent]
})
export class EntityDetailPreviewExtModule {}