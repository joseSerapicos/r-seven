import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
// This module doesn't use "ReactiveFormsModule", but it needs to import this class
// to provide "formBuilder" when inject dependencies in child modules (like form)
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {ExpanderModule} from '../../../../../../AppBundle/Resources/public/ts/expander/expander.module';
import {Helper} from '../../../../../../AppBundle/Resources/public/ts/helper';
import {PostService} from '../../../../../../AppBundle/Resources/public/ts/post.service';
import {ModalService} from '../../../../../../AppBundle/Resources/public/modal/ts/modal.service';
import {FormService} from '../../../../../../AppBundle/Resources/public/ts/form/form.service';
import {FlashMessageService} from '../../../../../../AppBundle/Resources/public/ts/flash-message.service';
import {DynamicComponentLoaderService} from '../../../../../../AppBundle/Resources/public/ts/dynamic-component-loader.service';
import {DataService} from '../../../../../../AppBundle/Resources/public/ts/data-service/data.service';
import {ActionsService} from '../../../../../../AppBundle/Resources/public/ts/actions/actions.service';
import {CalendarComponent} from '../../../../../../AppBundle/Resources/public/calendar/ts/calendar.component';

// Define templateUrl to component at runtime
Helper.setRuntimeVar('templateUrl', _app.dependency['userCalendar'].route['edit']['url']);
import {FormPopupExtensionModule} from '../../../../../../AppBundle/Resources/public/calendar/ts/form-popup.extension-module';


@NgModule({
    imports: [
        BrowserModule,
        FormsModule,
        ReactiveFormsModule,
        ExpanderModule
    ],
    declarations: [
        CalendarComponent
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
        {provide: 'DataServiceProvider', useValue: Helper.getDataServiceProvider(_app.dependency['userCalendar'])},
        {provide: 'Provider', useValue: Helper.getImageProvider(_app.dependency['userCalendar'], {})},
        {provide: 'ActionsServiceProvider', useValue: Helper.getActionsServiceProvider(_app.dependency['userCalendar'])},
        {provide: 'Popups', useValue: {
            module: FormPopupExtensionModule,
            component: 'FormPopupComponent',
            providers: [
                FormService,
                {provide: 'Provider', useValue: Helper.getFormProvider(_app.dependency['userCalendar'])}
            ]
        }}
    ],
    bootstrap: [CalendarComponent]
})
export class UserCalendarModule {}