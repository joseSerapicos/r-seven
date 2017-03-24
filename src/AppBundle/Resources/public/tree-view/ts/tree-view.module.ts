import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
// This module doesn't use "ReactiveFormsModule", but it needs to import this class
// to provide "formBuilder" when inject dependencies in child modules (like form)
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {SearchModule} from '../../ts/search/search.module';
import {ExpanderModule} from '../../ts/expander/expander.module';
import {Helper} from '../../ts/helper';
import {PostService} from '../../ts/post.service';
import {ModalService} from '../../modal/ts/modal.service';
import {FormService} from '../../ts/form/form.service';
import {FlashMessageService} from '../../ts/flash-message.service';
import {DynamicComponentLoaderService} from '../../ts/dynamic-component-loader.service';
import {TreeViewDataService as DataService} from '../../ts/data-service/tree-view-data.service';
import {ActionsService} from '../../ts/actions/actions.service';
import {TreeViewControlActionsComponent} from '../../ts/tree-view/controls/tree-view-control-actions.component';
import {TreeViewNodeComponent} from '../../ts/tree-view/tree-view-node.component';
import {TreeViewComponent} from '../../ts/tree-view/tree-view.component';


// Define templateUrl to component at runtime
Helper.setRuntimeVar('templateUrl', _app.conf.route['edit']['url']);
import {FormPopupExtensionModule} from '../../ts/form/form-popup.extension-module';


@NgModule({
    imports: [
        BrowserModule,
        FormsModule,
        ReactiveFormsModule,
        SearchModule,
        ExpanderModule
    ],
    declarations: [
        TreeViewComponent,
        TreeViewNodeComponent,
        TreeViewControlActionsComponent
    ],
    providers: [
        PostService,
        ModalService,
        FlashMessageService,
        DynamicComponentLoaderService,
        {provide: 'DataService', useClass: DataService},
        ActionsService,
        {provide: 'HelperService', useValue: Helper},
        {provide: 'DataServiceProvider', useValue: Helper.getDataServiceProvider(_app.conf)},
        {provide: 'Provider', useValue: Helper.getTreeViewProvider(_app.conf)},
        {provide: 'ActionsServiceProvider', useValue: Helper.getActionsServiceProvider(_app.conf)},
        {provide: 'Popups', useValue: {
            module: FormPopupExtensionModule,
            component: 'FormPopupComponent',
            providers: [
                FormService,
                {provide: 'Provider', useValue: Helper.getFormProvider(_app.conf)}
            ]
        }}
    ],
    bootstrap: [TreeViewComponent]
})
export class TreeViewModule {}