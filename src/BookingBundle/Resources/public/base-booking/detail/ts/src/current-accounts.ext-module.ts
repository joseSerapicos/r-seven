import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {SearchModule} from '../../../../../../../AppBundle/Resources/public/ts/search/search.module';
import {CurrentAccountsComponent} from './current-accounts.component';


/**
 * Note: This file is never used. It's only here as example to check injection dependencies
 */
@NgModule({
    imports: [CommonModule, FormsModule, ReactiveFormsModule, SearchModule],
    declarations: [
        CurrentAccountsComponent
    ],
    exports: [CurrentAccountsComponent]
})
export class CurrentAccountsExtModule {}