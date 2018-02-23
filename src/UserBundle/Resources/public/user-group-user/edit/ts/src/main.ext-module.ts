import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {FieldTypesExtensionModule} from '../../../../../../../AppBundle/Resources/public/ts/form/field-types/field-types.extension-module';
import {SearchModule} from '../../../../../../../AppBundle/Resources/public/ts/search/search.module';
import {ExpanderModule} from '../../../../../../../AppBundle/Resources/public/ts/expander/expander.module';
import {MainComponent} from './main.component';


@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        FieldTypesExtensionModule,
        SearchModule,
        ExpanderModule
    ],
    declarations: [
        MainComponent
    ],
    exports: [MainComponent]
})
export class MainExtModule {}