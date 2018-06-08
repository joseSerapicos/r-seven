import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {SearchModule} from '../../../../../../../../AppBundle/Resources/public/ts/search/search.module';
import {PriceComponent} from './price.component';


@NgModule({
    imports: [CommonModule, FormsModule, ReactiveFormsModule, SearchModule],
    declarations: [
        PriceComponent
    ],
    exports: [PriceComponent]
})
export class PriceExtModule {}