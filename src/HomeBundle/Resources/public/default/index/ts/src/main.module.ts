import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser'; // Common directives (NgIf, NgFor, etc.)
// This module doesn't use "ReactiveFormsModule", but it needs to import this class
// to provide "formBuilder" when inject dependencies in child modules (like form)
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {ExpanderModule} from '../../../../../../../AppBundle/Resources/public/ts/expander/expander.module';
import {Helper} from '../../../../../../../AppBundle/Resources/public/ts/helper';
import {TasksLoaderManagerService} from '../../../../../../../AppBundle/Resources/public/tasks-loader-manager/ts/tasks-loader-manager.service';
import {PostService} from '../../../../../../../AppBundle/Resources/public/ts/post.service';
import {ModalService} from '../../../../../../../AppBundle/Resources/public/modal/ts/modal.service';
import {FormService} from '../../../../../../../AppBundle/Resources/public/form/ts/form.service';
import {FlashMessageService} from '../../../../../../../AppBundle/Resources/public/ts/flash-message.service';
import {DynamicComponentLoaderService} from '../../../../../../../AppBundle/Resources/public/ts/dynamic-component-loader.service';
import {DataService} from '../../../../../../../AppBundle/Resources/public/ts/data-service/data.service';
import {ActionsService} from '../../../../../../../AppBundle/Resources/public/ts/actions/actions.service';
import {UserCalendarExtModule} from './user-calendar.ext-module';
import {EditExtModule as UserCalendarEditExtModule} from '../../../../../../../UserBundle/Resources/public/user-calendar/index/ts/src/edit.ext-module';
import {MainExtModule as AppBasicsExtModule} from '../../../../../../../AppBundle/Resources/public/app-basics/default/ts/src/main.ext-module';
import {MainComponent as AppBasicsComponent} from '../../../../../../../AppBundle/Resources/public/app-basics/default/ts/src/main.component';
import {MainComponent} from './main.component';


@NgModule({
    imports: [
        BrowserModule,
        FormsModule,
        ReactiveFormsModule,
        AppBasicsExtModule,
        ExpanderModule,
        UserCalendarExtModule
    ],
    declarations: [
        MainComponent
    ],
    providers: [
        PostService,
        ModalService,
        FormService,
        FlashMessageService,
        DynamicComponentLoaderService,
        {provide: 'DataService', useClass: DataService},
        ActionsService,
        {provide: 'HelperService', useValue: Helper},
        TasksLoaderManagerService,
        {provide: 'DataServiceProvider', useValue: Helper.getDataServiceProvider(_app.dependency['userCalendar'])},
        {provide: 'Provider', useValue: Helper.getImageProvider(_app.dependency['userCalendar'], {})},
        {provide: 'ActionsServiceProvider', useValue: Helper.getActionsServiceProvider(_app.dependency['userCalendar'])},
        {provide: 'Popups', useValue: {
            module: UserCalendarEditExtModule,
            component: 'EditComponent',
            providers: [
                FormService,
                {provide: 'Provider', useValue: Helper.getFormProvider(_app.dependency['userCalendar'])}
            ]
        }}
    ],
    bootstrap: [AppBasicsComponent, MainComponent]
})
export class MainModule {}