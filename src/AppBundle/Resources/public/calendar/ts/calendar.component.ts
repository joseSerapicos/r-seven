var moment = require('moment');
import {Component, Inject, Injector, ViewContainerRef, Renderer} from '@angular/core';
import {DataService} from '../../ts/data-service/data.service';
import {ActionsService} from '../../ts/actions/actions.service';
import {Popups, Popup} from '../../ts/data-box/data-box.component';
import {ModalService} from '../../modal/ts/modal.service';
import {Helper} from '../../ts/helper.ts';
import {DataBoxComponent, DataBoxProvider} from '../../ts/data-box/data-box.component';


@Component({
    selector: '.js_calendarComponent',
    templateUrl: Helper.getGlobalVar('route') + 'template/box/calendar'
})
export class CalendarComponent extends DataBoxComponent
{
    // To get notify about changes over the service
    protected _onObjectChangeSubscription: any;
    protected _onObjectsChangeSubscription: any;

    protected _lastMonthSearched: string;
    protected _candidateSearch: any;

    protected _$calendar: any;

    constructor(
        viewContainerRef: ViewContainerRef,
        renderer: Renderer,
        @Inject('Provider') provider: DataBoxProvider,
        @Inject('DataService') dataService: any,
        actionsService: ActionsService,
        modalService: ModalService,
        @Inject('Popups') popups: Popups | Popup,
        injector: Injector
    ) {
        // Call parent
        super(
            viewContainerRef,
            renderer,
            provider,
            dataService,
            actionsService,
            modalService,
            popups,
            injector
        );

        // Service changes subscriptions
        this._onObjectChangeSubscription = this._dataService.getOnObjectChangeEmitter()
            .subscribe(object => this.refreshCalendar());
        // Object change event subscription
        this._onObjectsChangeSubscription = this._dataService.getOnObjectsChangeEmitter()
            .subscribe(objects => this.refreshCalendar());

        this._lastMonthSearched = moment().format('YYYY-MM');
        this._candidateSearch = this._dataService.getCandidateSearch();
    }

    /**
     * Refresh calendar objects (events)
     */
    protected refreshCalendar(): void
    {
        this._$calendar.fullCalendar('removeEvents');
        this._$calendar.fullCalendar('addEventSource', this.getEvents());
    }

    /**
     * Get events normalized for Fullcalendar
     * @returns {{title: any, start: any, end: any}[]}
     */
    protected getEvents()
    {
        let events = (this._dataService.getProviderAttr('objects') || []),
            whiteColorValuesRange = ['#FFF', '#FFFFFF', '#fff', '#ffffff'],
            trueValuesRange = ['1', 1, 'true', true];

        let index = (-1);
        return events.map(function(obj) {
            index++;

            return {
                id: obj['id'],
                title: obj['name'],
                description: obj['description'],
                start: obj['startTime'],
                end: obj['endTime'],
                allDay: (
                    (moment(obj['startTime']).format('HH:mm:ss') == '00:00:00') // Start at begin of day
                    && ((moment.duration(moment(obj['endTime']).diff(obj['startTime'])).asDays() % 1) == 0) // Whole days
                ),
                insertUser: obj['insertUser'],
                backgroundColor: obj['color'],
                borderColor: ((whiteColorValuesRange.indexOf(obj['color']) >= 0) ? '#000000' : obj['color']),
                textColor: ((whiteColorValuesRange.indexOf(obj['color']) >= 0) ? '#000000' : '#FFFFFF'),
                allowEdit: ((trueValuesRange.indexOf(obj['allowEdit']) >= 0) || obj['_isNew'] || obj['_isEdited']),
                index: index, // Index to edit and remove objects in service
                className: (((trueValuesRange.indexOf(obj['allowEdit']) >= 0) || obj['_isNew'] || obj['_isEdited'])
                        ? 'js_remove'
                        : null
                )
            };
        });
    }

    /**
     * Lifecycle callback
     */
    ngAfterViewInit()
    {
        let that = this;
        this._$calendar = $(this._elementRef.nativeElement).find('.js_calendarControl');

        this._$calendar.fullCalendar({
            header: {
                left: 'prevYear prev,next nextYear today',
                center: 'title',
                right: 'month,agendaWeek,agendaDay'
            },
            defaultView: 'agendaWeek',
            selectable: true,
            selectHelper: true,
            eventLimit: true, // allow "more" link when too many events
            events: that.getEvents(),
            viewRender: function(view, element) {
                let currentTime = that._$calendar.fullCalendar('getDate'),
                    currentMonth = currentTime.format('YYYY-MM');

                // Retrieve objects when month was changed
                if (currentMonth != that._lastMonthSearched) {
                    let startTime = moment(currentTime).startOf("month").format('YYYY-MM-DD HH:mm:ss'),
                        endTime = moment(currentTime).endOf('month').format('YYYY-MM-DD HH:mm:ss');

                    that._candidateSearch['criteria'] = [
                        {
                            field: "startTime",
                            expr: "between",
                            value: [startTime, endTime]
                        },
                        {
                            method: "or",
                            field: "endTime",
                            expr: "between",
                            value: [startTime, endTime]
                        }
                    ];

                    that._dataService.search();
                    that._lastMonthSearched = currentMonth;
                }
            },
            select: function(start, end, jsEvent, view) {
                that.setProvider(start, end);
                that.addAction();
            },
            eventClick: function(event, jsEvent, view) {
                let $target = $(jsEvent.target);

                if (event['allowEdit']) {
                    if ($target.hasClass('js_remove') || $target.hasClass('fc-bg')) { // Remove
                        that.deleteAction(null, event['index'])
                    } else { // Edit
                        that.setProvider();
                        that.editAction(null, event['index']);
                    }
                } else {
                    that._modalService.alert(
                        (
                            event['title']
                            + (event['description'] ? (' - ' + event['description']) : '')
                            + ' @' + event['insertUser']
                        ),
                        "Event info"
                    );
                }
            }
        });
    }

    /**
     * Set provider
     * @param start
     * @param end
     * @returns {CalendarComponent}
     */
    protected setProvider(start: any = null, end: any = null) : CalendarComponent
    {
        if (start && end) {
            start = start.format('YYYY-MM-DD HH:mm:ss');
            end = end.format('YYYY-MM-DD HH:mm:ss');
        }

        // Injector already defined (redefine provider)
        if (this._popups['injector']) {
            let timeSelection = this._popups['injector'].get('TimeSelection');
            timeSelection['start'] = start;
            timeSelection['end'] = end;
        } else { // Injector not defined yet (define provider)
            this._popups['providers'].push({
                provide: 'TimeSelection',
                useValue: {
                    start: start,
                    end: end
                }
            });
        }

        return this;
    }

    /**
     * Lifecycle callback
     */
    ngOnDestroy()
    {
        this._onObjectChangeSubscription.unsubscribe();
        this._onObjectsChangeSubscription.unsubscribe();
    }
}