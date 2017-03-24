import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
// This module doesn't use "ReactiveFormsModule", but it needs to import this class
// to provide "formBuilder" when inject dependencies in child modules (like form)
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {SearchModule} from '../../../../../../AppBundle/Resources/public/ts/search/search.module';
import {ExpanderModule} from '../../../../../../AppBundle/Resources/public/ts/expander/expander.module';
import {PostService} from '../../../../../../AppBundle/Resources/public/ts/post.service';
import {ModalService} from '../../../../../../AppBundle/Resources/public/modal/ts/modal.service';
import {FlashMessageService} from '../../../../../../AppBundle/Resources/public/ts/flash-message.service';
import {DynamicComponentLoaderService} from '../../../../../../AppBundle/Resources/public/ts/dynamic-component-loader.service';
import {DataService} from '../../../../../../AppBundle/Resources/public/ts/data-service/data.service';
import {NavManagerService} from '../../../../../../AppBundle/Resources/public/ts/nav-manager/nav-manager.service';
import {Helper} from '../../../../../../AppBundle/Resources/public/ts/helper';
import {MainComponent} from './main.component';


@NgModule({
    imports: [
        BrowserModule,
        FormsModule,
        ReactiveFormsModule,
        SearchModule,
        ExpanderModule
    ],
    declarations: [
        MainComponent
    ],
    providers: [
        PostService,
        ModalService,
        FlashMessageService,
        DynamicComponentLoaderService,
        {provide: 'DataService', useClass: DataService},
        NavManagerService,
        {provide: 'HelperService', useValue: Helper}
    ],
    bootstrap: [MainComponent]
})
export class MainModule {}