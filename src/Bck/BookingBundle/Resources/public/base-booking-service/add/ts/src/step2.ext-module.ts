import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {FieldTypesExtensionModule} from '../../../../../../../../AppBundle/Resources/public/form/ts/field-types/field-types.extension-module';
import {PopoverExtModule} from '../../../../../../../../AppBundle/Resources/public/popover/ts/popover.ext-module';
import {Step2Component} from './step2.component';


/**
 * Note: This file is never used. It's only here as example to check injection dependencies
 */
@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        NgbModule,
        FieldTypesExtensionModule,
        PopoverExtModule
    ],
    declarations: [
        Step2Component
    ],
    exports: [Step2Component]
})
export class Step2ExtModule {}