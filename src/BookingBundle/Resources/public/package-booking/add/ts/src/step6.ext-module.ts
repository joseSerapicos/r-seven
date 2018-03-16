import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule} from '@angular/forms';
import {Step6Component} from './step6.component';


/**
 * Note: This file is never used. It's only here as example to check injection dependencies
 */
@NgModule({
    imports: [CommonModule, FormsModule],
    declarations: [
        Step6Component
    ],
    exports: [Step6Component]
})
export class Step6ExtModule {}