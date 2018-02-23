import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule} from '@angular/forms';
import {PopoverDirective} from './popover.directive';


@NgModule({
    imports: [CommonModule, FormsModule],
    declarations: [
        PopoverDirective
    ],
    exports: [
        PopoverDirective
    ]
})
export class PopoverExtModule {}