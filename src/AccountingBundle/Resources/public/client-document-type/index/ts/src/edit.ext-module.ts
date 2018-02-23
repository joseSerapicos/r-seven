import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {EditComponent} from './edit.component';

@NgModule({
    imports: [CommonModule, FormsModule, ReactiveFormsModule],
    declarations: [
        EditComponent
    ],
    exports: [EditComponent]
})
export class EditExtModule {}