import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule} from '@angular/forms';
import {Step2FieldDebugComponent} from './step2-field-debug.component';


/**
 * Note: This file is never used. It's only here as example to check injection dependencies
 */
@NgModule({
    imports: [CommonModule, FormsModule],
    declarations: [
        Step2FieldDebugComponent
    ],
    exports: [Step2FieldDebugComponent]
})
export class Step2FieldDebugExtModule {}