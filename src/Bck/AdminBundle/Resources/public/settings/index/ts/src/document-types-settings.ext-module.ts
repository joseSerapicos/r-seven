import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {SearchModule} from '../../../../../../../../AppBundle/Resources/public/ts/search/search.module';
import {DocumentTypesSettingsComponent} from './document-types-settings.component';


@NgModule({
    imports: [CommonModule, FormsModule, ReactiveFormsModule, SearchModule],
    declarations: [
        DocumentTypesSettingsComponent
    ],
    exports: [DocumentTypesSettingsComponent]
})
export class DocumentTypesSettingsExtModule {}