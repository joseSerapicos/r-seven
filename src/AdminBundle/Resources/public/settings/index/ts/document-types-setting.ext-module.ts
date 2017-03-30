import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {SearchModule} from '../../../../../../AppBundle/Resources/public/ts/search/search.module';
import {DocumentTypesSettingComponent} from './document-types-setting.component';


@NgModule({
    imports: [CommonModule, FormsModule, ReactiveFormsModule, SearchModule],
    declarations: [
        DocumentTypesSettingComponent
    ],
    exports: [DocumentTypesSettingComponent]
})
export class DocumentTypesSettingExtModule {}