import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {FieldTypesExtensionModule} from '../../../../../../../AppBundle/Resources/public/form/ts/field-types/field-types.extension-module';
import {PopoverExtModule} from '../../../../../../../AppBundle/Resources/public/popover/ts/popover.ext-module';
import {Step3Component} from './step3.component';


@NgModule({
    imports: [CommonModule, FormsModule, ReactiveFormsModule, NgbModule, FieldTypesExtensionModule, PopoverExtModule],
    declarations: [
        Step3Component
    ],
    exports: [Step3Component]
})
export class Step3ExtModule {}