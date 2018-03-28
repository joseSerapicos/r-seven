import {Directive, Input, Inject, ElementRef, Host} from '@angular/core';
import {FormService} from '../form.service';


// Interface for rule
interface Rule {
    expr: string, // <min, max, range>
    value: string, // Field to link the rule or index to get data ranges
    allowSkip?: boolean // Can be controlled by "_skipRulesControl"
}


@Directive({
    selector: '[datePicker]',
    host: {
        '(document:click)': 'onDocumentClick($event)',
    }
})
export class FieldTypeDatePickerDirective {
    @Input('datePicker') field: string; // Field in object
    @Input('control') control: any; // DataPicker control

    private _onObjectChangeSubscription: any; // When the object change in formService
    protected _fieldMetadata: any;
    // Control/Field in form that determines if rules should be ignored (it can be a form checkbox)
    protected _skipRulesControl: any;
    // Determines if the skip rules control value is inverted (using negation "!")
    protected _skipRulesControlInverseValue: boolean = false;

    constructor(
        protected _elementRef: ElementRef,
        protected _formService: FormService,
        @Inject('DataService') protected _dataService: any
    ) {
        // Object change event subscription
        this._onObjectChangeSubscription = this._formService.getOnObjectChangeEmitter()
            .subscribe(object => this.reset());
    }

    /**
     * Reset
     */
    protected reset()
    {
        this.setControlConf();
    }

    /**
     * Host event
     * @param $event
     */
    protected onDocumentClick($event): void
    {
        // It can't be used, because prevent all events (checkbox, etc.)
        //$event.preventDefault();

        // The click is inside of this data picker
        if (this._elementRef.nativeElement.contains($event.target)) {
            let isDropDown = ($($event.target).parents('.dropdown-menu').length > 0);

            // Let run the default behavior
            if (isDropDown) { return; }

            this.setControlConf(); // Set/Refresh conf (data picker will be opened or closed)
            this.control.toggle(); // Toggle data picker drop-down
        } else {
            // The click is outside of this data picker (close it)
            this.control.close();
        }
    }

    /**
     * Set/Refresh control configuration
     */
    protected setControlConf() {
        // Apply rules
        if (this._fieldMetadata['typeDetail'] && this._fieldMetadata['typeDetail']['rules']) {
            let skipRules = ((this._skipRulesControl
                && (this._skipRulesControl in (this._formService.getObject() || {})))
                    ? (this._skipRulesControlInverseValue
                        ? !this._formService.getObject()[this._skipRulesControl]
                        : this._formService.getObject()[this._skipRulesControl]
                    )
                    : false
            );

            for (let rule of this._fieldMetadata['typeDetail']['rules']) {
                switch (rule['expr']) {
                    case 'range':
                        if (skipRules && rule['allowSkip']) {
                            // Skip rule
                            this.control['markDisabled'] = null;
                            break;
                        }

                        // Limit available dates to ranges
                        let dateRanges = (this._dataService.getLocalDataAttr(rule['value']) || []);
                        // Function to check if date is valid (is in range)
                        this.control['markDisabled'] = (date: any) => {
                            let dateToCheck = new Date(date.year, date.month - 1, date.day);
                            for (let dateRange of dateRanges) {
                                // ' 00:00:00' is necessary to get the expected behavior
                                let dateFrom = new Date(dateRange['startDate'] + ' 00:00:00'),
                                    dateTo = new Date(dateRange['endDate'] + ' 00:00:00');
                                if ((dateToCheck.getTime() >= dateFrom.getTime())
                                    && (dateToCheck.getTime() <= dateTo.getTime())
                                ) {
                                    return false;
                                }
                            }
                            return true;
                        };
                        break;
                    case 'min':
                    case 'max':
                        if (skipRules && rule['allowSkip']) {
                            // Skip rule
                            this.control[rule['expr'] + 'Date'] = null;
                            break;
                        }

                        this.control[rule['expr'] + 'Date'] = this._formService.getObject()[rule['value']];
                        break;
                }
            }
        }
    }

    /**
     * Lifecycle callback
     */
    ngOnInit()
    {
        this._fieldMetadata = this._dataService.getProviderAttr('fields')['metadata'][this.field];

        this._skipRulesControl = ((this._fieldMetadata['typeDetail']
            && this._fieldMetadata['typeDetail']['skipRulesControl'])
                ? this._fieldMetadata['typeDetail']['skipRulesControl']
                : null
        );

        // Check how skip rules value should be used
        if (this._skipRulesControl && (this._skipRulesControl.substring(0, 1) == '!')) {
            // Value should be inverse, using negation (!)
            this._skipRulesControlInverseValue = true;
            this._skipRulesControl = this._skipRulesControl.substring(1); // Remove operator from control name
        }

        this.reset();
    }

    /**
     * Lifecycle callback
     */
    ngOnDestroy()
    {
        this._onObjectChangeSubscription.unsubscribe();
    }
}