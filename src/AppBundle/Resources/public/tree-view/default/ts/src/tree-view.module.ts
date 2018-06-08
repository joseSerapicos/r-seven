import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
// This module doesn't use "ReactiveFormsModule", but it needs to import this class
// to provide "formBuilder" when inject dependencies in child modules (like form)
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {SearchModule} from '../../../../ts/search/search.module';
import {SearchPaginationModule} from '../../../../ts/search/search-pagination.module';
import {ExpanderModule} from '../../../../ts/expander/expander.module';
import {LegendExtModule} from '../../../../../../../../AppBundle/Resources/public/legend/ts/src/legend.ext-module';
import {Helper} from '../../../../ts/helper';
import {TasksLoaderManagerService} from '../../../../tasks-loader-manager/ts/tasks-loader-manager.service';
import {PostService} from '../../../../ts/post.service';
import {ModalService} from '../../../../modal/ts/modal.service';
import {FormService} from '../../../../form/ts/form.service';
import {FlashMessageService} from '../../../../ts/flash-message.service';
import {DynamicComponentLoaderService} from '../../../../ts/dynamic-component-loader.service';
import {TreeViewDataService as DataService} from '../../../../ts/data-service/tree-view-data.service';
import {ActionsService} from '../../../../ts/actions/actions.service';
import {MainExtModule as AppBasicsExtModule} from '../../../../app-basics/default/ts/src/main.ext-module';
import {MainComponent as AppBasicsComponent} from '../../../../app-basics/default/ts/src/main.component';
import {TreeViewControlActionsComponent} from './controls/tree-view-control-actions.component';
import {TreeViewNodeComponent} from './nodes/tree-view-node.component';
import {TreeViewComponent} from './tree-view.component';
import {FormPopupExtensionModule} from '../../../../form/ts/form-popup.extension-module';


/**
 * Note: This file is never used. It's only here as example to check injection dependencies
 */
@NgModule({
    imports: [
        BrowserModule,
        FormsModule,
        ReactiveFormsModule,
        AppBasicsExtModule,
        SearchModule,
        SearchPaginationModule,
        ExpanderModule,
        LegendExtModule
    ],
    declarations: [
        TreeViewComponent,
        // Check if is necessary
        //TreeViewNodeComponent,
        //TreeViewControlActionsComponent
    ],
    providers: [
        PostService,
        ModalService,
        FlashMessageService,
        DynamicComponentLoaderService,
        {provide: 'DataService', useClass: DataService},
        ActionsService,
        {provide: 'HelperService', useValue: Helper},
        TasksLoaderManagerService,
        {provide: 'DataServiceProvider', useValue: Helper.getTreeViewDataServiceProvider(_app.conf)},
        {provide: 'Provider', useValue: Helper.getTreeViewProvider(_app.conf)},
        {provide: 'ActionsServiceProvider', useValue: Helper.getActionsServiceProvider(_app.conf)},
        {provide: 'LegendProvider', useValue: Helper.getLegendProvider(_app.conf)},
        {provide: 'Popups', useValue: {
            module: FormPopupExtensionModule,
            component: 'FormPopupComponent',
            providers: [
                FormService,
                {provide: 'Provider', useValue: Helper.getFormProvider(_app.conf)}
            ]
        }}
    ],
    bootstrap: [AppBasicsComponent, TreeViewComponent]
})
export class TreeViewModule {}