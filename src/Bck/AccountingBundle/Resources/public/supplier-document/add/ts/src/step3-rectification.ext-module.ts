import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {FieldTypesExtensionModule} from '../../../../../../../../AppBundle/Resources/public/form/ts/field-types/field-types.extension-module';
import {Step3RectificationComponent} from './step3-rectification.component';


@NgModule({
    imports: [CommonModule, FormsModule, ReactiveFormsModule, NgbModule, FieldTypesExtensionModule],
    declarations: [
        Step3RectificationComponent
    ],
    exports: [Step3RectificationComponent]
})
export class Step3RectificationExtModule {}