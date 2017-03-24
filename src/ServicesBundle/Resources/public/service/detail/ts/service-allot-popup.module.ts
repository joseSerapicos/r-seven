import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {ServiceAllotPopupComponent} from './service-allot-popup.component';
import {FieldTypesExtensionModule} from '../../../../../../AppBundle/Resources/public/ts/form/field-types/field-types.extension-module';


@NgModule({
    imports: [CommonModule, FormsModule, ReactiveFormsModule,
        FieldTypesExtensionModule,
        NgbModule
    ],
    declarations: [
        ServiceAllotPopupComponent
    ],
    exports: [ServiceAllotPopupComponent]
})
export class ServiceAllotPopupModule {}