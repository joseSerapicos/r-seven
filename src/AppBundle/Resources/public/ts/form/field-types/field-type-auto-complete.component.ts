import {Component, Inject, Injector, ReflectiveInjector, Input, Output, Host, EventEmitter} from '@angular/core';
import {DataService} from '../../data-service/data.service';
import {ModalService} from '../../../modal/ts/modal.service';
import {PostService} from '../../post.service';
import {FormService} from '../../../../../../AppBundle/Resources/public/ts/form/form.service';
import {PopupTypes, Popups, Popup} from '../../../data-box/ts/src/data-box.component';
import {TasksLoaderManagerService} from '../../../../../../AppBundle/Resources/public/tasks-loader-manager/ts/tasks-loader-manager.service';


/**
 * Multiple AutoComplete instances can be released together,
 * so we need to be able to define multiple AutoComplete Providers in the same context.
 * Each entry of AutoCompleteProviders is one specific provider for one specific AutoComplete instance.
 */
export interface AutoCompleteProviders {
     [field: string]: {
         urlConf: string, // To get dependency conf
         urlChoicesParams?: string, // Parameters to add to choices url
         field?: string, // Field to use to filter in search (default is "name")
         control?: string, // Control to use ('save', 'edit', 'none')
         popups?: Popups | Popup, // Popups to add or edit objects from dependency (necessary when control = edit)
         // Used only by FieldTypeAutoCompleteComponent to avoid create new instances of classes (services, etc.),
         // get again the conf from the server, and create new injectors for the same component.
         // Once created it is saved to use in the next few
         childInjector?: any,
     }
 }


@Component({
    selector: 'js_autoComplete',
    template: `
    <div class="auto-complete">
        <div class="input-group">
            <span class="control">
                <input class="form-control"
                       (click)="onInputClick($event)"
                       (input)="onEnterKey($event)"
                       [ngModel]="_label"
                       [class.error]="_formService.getErrors()[field] && (_formService.getErrors()[field].length > 0)"
                       type="text"
                       [placeholder]="placeholder">
                <a (click)="onControlClick($event)"><i class="fa fa-angle-down"></i></a>
            </span>
            <span class="input-group-btn" *ngIf="_controlMode">
                <button (click)="triggerAction($event)"
                        class="btn btn-primary"
                        type="button"><i class="fa"
                                         [class.fa-check]="_controlMode == 'save'"
                                         [class.fa-plus]="_controlMode == 'add'"
                                         [class.fa-pencil]="_controlMode == 'edit'"></i></button>
            </span>
        </div>
        <div class="choices">
            <ul [hidden]="_isHidden"
                (click)="onChoiceClick($event)">
                <ng-template [ngIf]="selfReference"><ng-template ngFor let-choice [ngForOf]="_choices" let-choiceIndex="index">
                    <li *ngIf="choice['id'] != _object['id']"
                        [attr.data-index]="choiceIndex">{{choice['label']}}</li>
                </ng-template></ng-template>
                <ng-template [ngIf]="!selfReference">
                    <li *ngFor="let choice of _choices; let choiceIndex = index"
                        [attr.data-index]="choiceIndex">{{choice['label']}}</li>
                </ng-template>
                <li *ngIf="_childCandidateSearch && _childCandidateSearch.hasMore"
                    (click)="getMoreObjects($event)"
                    class="-pagination"
                    title="Load more results..."><span>...</span></li>
            </ul>
        </div>
    </div>
    `,
    host: {
        '(document:click)': 'onDocumentClick($event)',
    }
})
export class FieldTypeAutoCompleteComponent {
    @Input() field: string; // Field to handle object and to get the respective data from AutoCompleteProviders
    @Input() selfReference: boolean;
    @Input() placeholder: string = ''; // Set empty as default, because value can be undefined

    @Output() onChange = new EventEmitter(); // When choice change or the data of current choice is edited

    private _onObjectChangeSubscription: any; // When the object change in main formService
    private _onChildObjectsChangeSubscription: any; // When the objects list change in choices dataService (pagination)
    private _onChildObjectChangeSubscription: any; // When the object change in popup dataService (edit)

    protected _provider: any;
    protected _object: any; // From object
    protected _controlMode: string;
    protected _isHidden: boolean = true;
    protected _lastSelectedChoice: {id: number, label: string} = {id: null, label: ''};
    protected _label: string;
    protected _fieldInView: string; // Field that represents the object in template/view, to use as label of selected choice
    protected _choices: any[] = [];
    protected _search: {term: string, lastTerm: string} = {term: '', lastTerm: null};
    protected _searchField: string = 'name';

    // Dependency data
    protected _childInjector: Injector;
    protected _childDataServicePopup: DataService; // Handle with add and edit object in popup
    protected _childDataServiceChoices: DataService; // Handle with choices
    protected _childCandidateSearch: any = null;

    constructor(
        protected _postService: PostService,
        protected _modalService: ModalService,
        @Inject('DataService') protected _dataService: any,
        protected _tasksLoaderManagerService: TasksLoaderManagerService,
        protected _formService: FormService,
        protected _injector: Injector,
        @Inject('AutoCompleteProviders') protected _autoCompleteProviders: any,
        @Inject('HelperService') protected _helperService: any
    ) {
        // Object change event subscription
        this._onObjectChangeSubscription = this._formService.getOnObjectChangeEmitter()
            .subscribe(object => this.reset());
    }

    /**
     * Reset object
     * @returns {FieldTypeAutoCompleteComponent}
     */
    reset(): FieldTypeAutoCompleteComponent
    {
        // Clear choices (can be from old object)
        if (this._childDataServiceChoices) {
            this._childDataServiceChoices.setObjects([]);
            this.resetChoices();
        }

        this._object = this._formService.getObject();

        let value = this._object[this.field],
            normalizedValue = '';

        if (value) {
            normalizedValue = ((this._fieldInView
                && this._dataService.getNormalizedObject()
                && this._dataService.getNormalizedObject()[this._fieldInView])
                    ? this._dataService.getNormalizedObject()[this._fieldInView]
                    : value
            );
        }

        this._lastSelectedChoice = {id: value, label: normalizedValue};
        this.setLabel();

        this.setControlMode();

        return this;
    }

    /**
     * Reset choices
     * @returns {FieldTypeAutoCompleteComponent}
     */
    resetChoices(): FieldTypeAutoCompleteComponent
    {
        this._choices = (this._childDataServiceChoices.getProviderAttr('objects') || []);
        this._isHidden = !this.hasChoices();

        return this;
    }

    /**
     * Host event
     * @param $event
     */
    protected onDocumentClick($event): void
    {
        this._isHidden = true;
    }

    /**
     * onInputClick event (when enter in input).
     * @param $event
     */
    protected onInputClick($event): void
    {
        $event.preventDefault();
        $event.stopPropagation();

        this._object[this.field] = null;
        this._isHidden = !this.hasChoices();
        this.setLabel();
        this.setControlMode();
    }

    /**
     * On enter key (pagination)
     * @param $event
     */
    protected onEnterKey($event) {
        this._search.term = $event.target.value;

        if ((this._search.term != this._search.lastTerm)
            && (this._search.term.length % 3 === 0) // Only submit with multiples of three
        ) {
            this._childCandidateSearch['criteria'] = [{
                'field': this._searchField,
                'expr': 'lrlike',
                'value': this._search.term
            }];
            this._childDataServiceChoices.choices();
            this._search.lastTerm = this._search.term;
        }
    }

    /**
     * onControlClick (arrow of select control)
     * @param $event
     */
    protected onControlClick($event): void
    {
        $event.preventDefault();
        $event.stopPropagation();

        if (this.hasChoices()) {
            this._isHidden = !this._isHidden;
        } else {
            this._childDataServiceChoices.choices();
        }
    }

    /**
     * onChoiceClick event
     * @param $event
     */
    protected onChoiceClick($event): void
    {
        $event.preventDefault();

        let $target = $($event.target),
            choiceIndex = $target.data('index');

        if (typeof choiceIndex != 'undefined') { // Can be 0
            let choice = this._choices[choiceIndex];

            if (choice && (this._object[this.field] != choice['id'])) {
                this._object[this.field] = choice['id'];
                this._lastSelectedChoice = {id: choice.id, label: choice.label};
                this.setLabel();
                this.setControlMode();
                this.onChange.emit(choice['id']);
            }
        }
    }

    /**
     * Get more objects (pagination)
     * @param $event
     */
    protected getMoreObjects($event) {
        $event.preventDefault();
        $event.stopPropagation();

        this._childDataServiceChoices.choices();
    }

    /**
     * Trigger action
     * @param $event
     */
    protected triggerAction($event: any = null): void
    {
        if ($event) { $event.preventDefault(); }

        switch (this._controlMode) {
            case 'save':
                this._formService.saveAndNewAction(); // Save and add a new object
                break;
            case 'edit':
            case 'add':
                this.openPopup(this._controlMode);
                break;
        }
    }

    /**
     * Open popup
     * @param popupType
     * @returns {FieldTypeAutoCompleteComponent}
     */
    protected openPopup(popupType = PopupTypes.edit): FieldTypeAutoCompleteComponent
    {
        let that = this;

        // Inject object to edit in child DataService
        if (this._object[this.field]) {
            // Simulate object
            let object = {id: this._object[this.field]};
            // Set object to null to avoid emit the event "_onChildObjectChangeSubscription"
            this._childDataServicePopup.setObject({}, null);
            this._childDataServicePopup.setObjects([object]);
            this._childDataServicePopup.selectObject(0).then(
                data => {
                    that.loadPopup(popupType);
                    return this;
                },
                errors => { console.log(errors); return this; }
            );
        } else {
            // Create a new object in child DataService
            this._childDataServicePopup.newObject().then(
                data => { that.loadPopup(popupType); return this; },
                errors => { console.log(errors); return this; }
            );
        }

        return this;
    }

    /**
     * Load popup
     * @param popupType
     * @returns {FieldTypeAutoCompleteComponent}
     */
    protected loadPopup(popupType = PopupTypes.edit): FieldTypeAutoCompleteComponent
    {
        popupType = (PopupTypes[popupType] || PopupTypes.edit);
        let popup: Popup = (this._provider.popups[popupType] || this._provider.popups);

        this._modalService.popup(popup, this._childInjector).then(
            data => { return; },
            errors => { console.log(errors); return; }
        );

        return this;
    }

    /**
     * Set control mode
     * @returns {FieldTypeAutoCompleteComponent}
     */
    protected setControlMode(): FieldTypeAutoCompleteComponent
    {
        switch (this._provider.control) {
            case 'edit':
                if (this._object[this.field]) {
                    this._controlMode = 'edit';
                } else {
                    this._controlMode = 'add';
                }
                break;
            case 'save':
                this._controlMode = this._provider.control;
                break;
            default:
                this._controlMode = null;
        }

        return this;
    }

    /**
     * Set input label
     * @returns {FieldTypeAutoCompleteComponent}
     */
    public setLabel(): FieldTypeAutoCompleteComponent
    {
        if (this._object[this.field] == this._lastSelectedChoice['id']) {
            this._label = this._lastSelectedChoice['label'];
        } else {
            this._label = this._search.term;
        }

        return this;
    }

    /**
     * check if has choices
     * @returns {any|boolean}
     */
    protected hasChoices(): boolean {
        return (this._choices && (this._choices.length > 0));
    }

    /**
     * Lifecycle callback
     */
    ngOnInit()
    {
        // Enable load while component initializes, to avoid use the component before init has finished causing errors
        this._tasksLoaderManagerService.addTask('INIT_AUTO_COMPLETE');

        // Initialize values
        this._provider = (this._autoCompleteProviders[this.field] || null);
        if (this._provider.field) {
            this._searchField = this._provider.field;
        }
        this._fieldInView = (this._dataService.getProviderAttr('fields')['metadata'][this.field]['fieldInView'] || null);
        this.reset();

        // Dependency conf previously saved in provider
        if (this._provider.childInjector) {
            this._childInjector = this._provider.childInjector;
            this.init();
            this._tasksLoaderManagerService.delTask('INIT_AUTO_COMPLETE');
            return;
        }

        // Dependency conf for first time
        let that = this;
        that._postService.post(
            this._provider.urlConf,
            null
        ).then(
            data => {
                // Notice that both DataService share the same DataServiceProvider! It needs to be fixed.
                let dataServiceProvider = that._helperService.getDataServiceProvider(data);
                dataServiceProvider['pin'] = true;

                // Set child injector
                let resolvedProviders = ReflectiveInjector.resolve([
                    {provide: 'DataServiceChoices', useClass: DataService},
                    {provide: 'DataService', useClass: DataService},
                    {provide: 'DataServiceProvider', useValue: dataServiceProvider},
                    {provide: 'Provider', useValue: that._helperService.getDataBoxProvider(data)}
                ]);
                that._childInjector = ReflectiveInjector.fromResolvedProviders(resolvedProviders, that._injector);
                // Save childInjector (check out the context in the provider definition)
                that._provider.childInjector = that._childInjector;

                that.init();

                // Add parameter to action route
                if (that._provider.urlChoicesParams) {
                    that._childDataServiceChoices.setRoute(
                        'choices',
                        (that._childDataServiceChoices.getRoute('choices') + '/' + that._provider.urlChoicesParams)
                    );
                }
                that._tasksLoaderManagerService.delTask('INIT_AUTO_COMPLETE');
            },
            errors => { console.log(errors); return; }
        );
    }

    /**
     * Initialize variables and dependencies.
     * @returns {FieldTypeAutoCompleteComponent}
     */
    protected init(): FieldTypeAutoCompleteComponent
    {
        let that = this;

        this._childDataServicePopup = this._childInjector.get('DataService');
        this._onChildObjectChangeSubscription = this._childDataServicePopup.getOnObjectsChangeEmitter()
            .subscribe(data => {
                // Only emit event if there are a valid object
                if (that._childDataServicePopup.getObject() && that._childDataServicePopup.getObject()['id']) {
                    that.onChange.emit(that._object[that.field]);
                }
            });

        this._childDataServiceChoices = this._childInjector.get('DataServiceChoices');
        this._onChildObjectsChangeSubscription = this._childDataServiceChoices.getOnObjectsRefreshEmitter()
            .subscribe(object => this.resetChoices());

        this._childCandidateSearch = this._childDataServiceChoices.getCandidateSearch(); // To filter objects
        // Reset criteria to avoid inject default criteria sent from controller to template
        this._childCandidateSearch['criteria'] = [];
        // @TODO simplify fields to avoid inject default fields sent from controller to template, use only needed fields

        return this;
    }

    /**
     * Lifecycle callback
     */
    ngOnDestroy()
    {
        // Sometimes the component can be already destroyed, so test if exists first
        if (this._onObjectChangeSubscription) {
            this._onObjectChangeSubscription.unsubscribe();
        }
        if (this._onChildObjectChangeSubscription) {
            this._onChildObjectChangeSubscription.unsubscribe();
        }
        if (this._onChildObjectsChangeSubscription) {
            this._onChildObjectsChangeSubscription.unsubscribe();
        }
    }
}