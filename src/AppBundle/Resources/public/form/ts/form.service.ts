import {Injectable, ElementRef, Inject, Injector, Renderer, EventEmitter, Optional} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {DataService} from '../../ts/data-service/data.service';
import {ModalService} from '../../modal/ts/modal.service';
import {TasksLoaderManagerService} from '../../tasks-loader-manager/ts/tasks-loader-manager.service';
import {Helper} from '../../ts/helper';
import {FormServiceProvider} from './form-service-provider';

// Re-exports
// This classes are in different file because import loops
// (HelperServices uses FormServiceProvider and FormService uses HelperService)
export {FormServiceProvider};

/**
 * Interface to be implemented by parent component
 */
export interface IForm {
    /**
     * ElementRef to handle with DOM
     */
    _elementRef: ElementRef; // For component that not extends the popup
}


@Injectable()
export class FormService
{
    // Local variables

    // Unique identifier of this feature instance. Used to identify your own tasks,
    // otherwise tasks can be confused with task of others instances and cause problems.
    // IE: The 'SAVE' task, when multiple forms are using the same DataService, all forms stay waiting for save
    // and does not update the object when DataService emits the change (like the wizard in "BookingService" "Add").
    protected _uniqueId: any;
    protected _component: any = null; // Parent component that uses and implement this service
    protected _originalObject: any = {}; // Original object to compare changes and reset object in DataService
    protected _originalNormalizedObject: any = {}; // Original normalized (for form) object to compare changes and reset object in form
    protected _object: any = {}; // Object used by form
    protected _onObjectChangeSubscription: any; // To get notify about changes on object over the service
    protected _$form: any = null; // DOM form
    protected _form: FormGroup; // Angular Form
    protected _errors: any = {}; // Form errors validation
    // Used to force form to submit,
    // generally when you need that user confirm the date, but the data has no changes.
    protected _forceSubmit: boolean;
    // Confirm object override by user to prevent data loss (when the object is changed from DataService).
    // It is useful when you have multiples forms to handle the same object, and the object is changed from any form
    // (like wizard using the same object and the same DataServiceInstance),
    // in this described case maybe you do not want this property enabled
    protected _preventObjectOverride: boolean;

    // Subscribed for FieldTypes
    private _onObjectChangeEmitter: EventEmitter<any>; // When the object change

    constructor(
        protected _modalService: ModalService,
        formBuilder: FormBuilder,
        @Inject('DataService') protected _dataService: any,
        @Inject('HelperService') protected _helperService: any,
        protected _tasksLoaderManagerService: TasksLoaderManagerService,
        @Optional() @Inject('FormServiceProvider') protected _provider: FormServiceProvider
    ) {
        // Set default values for provider
        if (!this._provider) {
            this._provider = {};
        }

        this._uniqueId = this._helperService.getUniqueId();

        this._onObjectChangeEmitter = new EventEmitter();

        // Object change event subscription
        this._onObjectChangeSubscription = this._dataService.getOnObjectChangeEmitter()
            .subscribe(object => this.onObjectChangeSubscription(object));

        this._forceSubmit = false;
        this._preventObjectOverride = true;

        // Set object, if it has not been setted before open the form
        if (!this._dataService.getObject()) {
            // If object is not setted, create a new
            let that = this;
            this.newObject().then(
                data => {
                    that.setObject(this._dataService.getObject());
                    that.buildForm(formBuilder);
                },
                errors => { return; }
            );
        } else {
            this.setObject(this._dataService.getObject());
            this.buildForm(formBuilder);
        }
    }

    /**
     * Build form
     * @param formBuilder
     * @returns {FormService}
     */
    protected buildForm(formBuilder: FormBuilder) {
        let formControls = {},
            fields = (this._provider.fields || this._dataService.getFields('form') || []).concat(
                this._helperService.objectKeys(this._dataService.getProviderExtraDataAttr('fields'))
            );

        // Set form controls
        for (let field of fields) {
            formControls[field] = [this._object[field] || null];
        }
        this._form = formBuilder.group(formControls);

        return this;
    }

    /**
     * Initialization of service.
     * This method should be called in "ngOnInit" method of parent component,
     * so the template has been rendered.
     * @param component (parent component)
     * @returns {FormService}
     */
    public init(component: any): FormService
    {
        // Local variables
        this._component = component;
        // @TODO: discontinue this provider, and keep only the second verification
        this._preventObjectOverride = this._component.getProviderAttr('preventObjectOverride');
        if (this._preventObjectOverride) { // Optional provider attribute
            this._preventObjectOverride = (!this._provider.hasOwnProperty('hasPreventObjectOverride')
                || this._provider['hasPreventObjectOverride']
            );
        }

        // Note: _$form needs to be setted each time that the component changes, otherwise if you set the form
        // only once, form loss your binding consistence from the second time that it is opened and setted a
        // different object. Ie: "BookingServicePriceEdit", field "isVatIncluded" and "markupValue" loss binding
        // consistence and the data is not correctly sent to server!!!!
        this._$form = $(this._component._elementRef.nativeElement).find('form');

        return this;
    }


    ///////////////////////////////////////////////
    // It's no more necessary, because we only create the form (open popup) after get the
    // promise successful response (get, new or clone object), so this code is kept here for future consideration.
    ///////////////////////////////////////////////
    /**
     * Is Initialized
     * Controls if FormService has been initialized the "formBuilder group",
     * to avoid the component render the template form before and break
     * @returns {boolean}
     */
    /*public isInitialized(): boolean
    {
        return (this.getForm() ? true : false);
    }*/


    /**
     * Get form object emitter to tell all subscribers about changes
     * @returns {EventEmitter<any>}
     */
    public getOnObjectChangeEmitter() {
        return this._onObjectChangeEmitter;
    }

    /**
     * On object change subscription. Handle with object changes in DataService.
     * @param object
     */
    public onObjectChangeSubscription(object: any): void
    {
        if ((object != this._originalObject) // Set object only if is different
            // If form is in saving process, object will be setted by the save method where there are some correct procedures
            && !this._tasksLoaderManagerService.hasTask('SAVE_'+this._uniqueId)
        ) {
            // Form does not need to confirm object override
            if (!this._preventObjectOverride) {
                this.setObject(object);
                return;
            }

            // Confirm object override by user to prevent data loss
            this.confirmAndSetObject(object).then(
                data => { return; },
                errors => { return; }
            );
        }
    }

    /**
     * Set _preventObjectOverride
     * @param value
     * @returns {FormService}
     */
    public setPreventObjectOverride(value) {
        this._preventObjectOverride = value;
        return this;
    }

    /**
     * Confirm and set object. Check for object changes and confirm with the user to discard them, then set
     * the object according with the ser response.
     * @param object
     * @returns {Promise}
     */
    public confirmAndSetObject(object: any): Promise<any>
    {
        let that = this;

        return new Promise(function(resolve, reject) {
            // Current form object has changes from user?
            if(that.hasChanges()) {
                // Dialog message
                return that._modalService.dialog().then(
                    hasConfirm => {
                        if (hasConfirm) {
                            that.setObject(object);
                            return resolve(true);
                        } else {
                            // Keep the object in DataService
                            that._dataService.setObject(that._originalObject);
                            return reject(false);
                        }
                    },
                    errors => { console.log(errors); return reject(false); }
                );
            } else {
                that.setObject(object);
                return resolve(true);
            }
        });
    }

    /**
     * Set object
     * @param object
     * @returns {FormService}
     */
    public setObject(object: any): FormService
    {
        // Set only if is a different object
        if (object && (object != this._originalObject)) {
            // Keep the original object from dataService
            this._originalObject = object;

            // Normalize object to form
            this._originalNormalizedObject = Helper.cloneObject(this._originalObject, true);
            this.normalizeObject(this._originalNormalizedObject);

            // Update form object
            this._object = Helper.cloneObject(this._originalNormalizedObject, true);

            // Reset errors
            this._errors = {};

            // This object is saved in session and needs to be confirmed by user before save them in database
            this._forceSubmit = (object['_isSessionStorage'] ? true : false);

            this._onObjectChangeEmitter.emit(this._object); // Object as changed to the original, notify subscribers
        }

        // Waiting mode for save process ends here, after update the original object.
        // Prevents the object being updated two times, by the "Form" "save" and the "DataService" object change emitter.
        this._tasksLoaderManagerService.delTask('SAVE_'+this._uniqueId);

        return this;
    }

    /**
     * Normalize objects to form
     * Detect fields that needs to be normalized
     * @param object
     * @param fields
     * @returns {FormService}
     */
    protected normalizeObject(object, fields: any = null): FormService
    {
        fields = (fields || this._dataService.getProviderAttr('fields')['form']);

        if(object && fields) {
            let fieldsMetadata = this._dataService.getProviderAttr('fields')['metadata'];

            for (let field of fields) {
                let fieldMetadata = fieldsMetadata[field];

                switch (fieldMetadata['type']) {
                    case 'date':
                        object[field] = this.normalizeValue(object[field], fieldMetadata['type']);
                        break;
                }
            }
        }
        return this;
    }

    /**
     * Normalize value to form
     * @param value
     * @param type
     * @returns any
     */
    protected normalizeValue(value, type): any
    {
        switch (type) {
            case 'date':
                if (value && (typeof value == 'string')) {
                    let dateArr = value.split("-");
                    return {
                        year: parseInt(dateArr[0]),
                        month: parseInt(dateArr[1]),
                        day: parseInt(dateArr[2])
                    };
                }
                return value;
        }
    }

    /**
     * Get object
     * @returns any
     */
    public getObject(): any
    {
        return this._object;
    }

    /**
     * Get originalObject
     * @returns any
     */
    public getOriginalObject(): any
    {
        return this._originalNormalizedObject;
    }

    /**
     * Check if the object has changes from user
     * @returns {boolean|Boolean}
     */
    public hasChanges(): boolean|Boolean
    {
        // Compare the working object "this._object" that it's a clone of "this._originalNormalizedObject" with your
        // original object of cloning "this._originalNormalizedObject"
        return (!this._helperService.isEqualObject(this._object, this._originalNormalizedObject));
    }

    /**
     * Get form
     * @returns any
     */
    public getForm(): any
    {
        return this._form;
    }

    /**
     * Set errors
     * @param errors
     * @returns {FormService}
     */
    public setErrors(errors: any): FormService
    {
        this._errors = (errors || {});
        return this;
    }

    /**
     * Get errors
     * @returns any
     */
    public getErrors(): any
    {
        return this._errors;
    }

    /**
     * Set form field value
     * @param field
     * @param value
     */
    public setFormFieldValue(field: string, value: any): void
    {
        if (value === undefined) {
            return; // Possible wrong element of the click event
        }

        // Accept null values to set null some fields, like not mandatory fields
        value = (value || null);
        if (field in this._object) {
            this._object[field] = value;
        }
    }

    /**
     * Get view object (normalized object in DataService)
     * @returns {any|{}}
     */
    public getViewObject(): any
    {
        return (this._dataService.getNormalizedObject() || {});
    }

    /**
     * Validate form
     * @returns {boolean}
     */
    public validate()
    {
        this._errors = {};

        for (let control in this._form.controls) {
            if (!this._form.controls[control].valid) {
                this._errors[control] = ['Required'];
            }
        }

        return !(this._helperService.objectLength(this._errors) > 0);
    }

    /**
     * Save form. Handle submit form.
     * This method should be called from child component.
     * @param route (optional route to overrides default route)
     * @param hasValidation
     * @returns {Promise}
     */
    public save(route: string = null, hasValidation: boolean = true): Promise<any>
    {
        let that = this;

        return new Promise(function(resolve, reject) {
            if (!that._tasksLoaderManagerService.addTask('SAVE_'+that._uniqueId)) {
                // Form is already in save process
                return reject(false);
            }

            // Current form object has changes from user?
            // Note: Objects in session storage enables the "_forceSubmit" by default
            if(that._forceSubmit || !that._object['id'] || that.hasChanges()) {
                // Validate form
                if (hasValidation && !that.validate()) {
                    that._tasksLoaderManagerService.delTask('SAVE_'+that._uniqueId); // Cancel save, form has errors
                    return reject(false);
                }

                // Set the valid token
                that._helperService.setFormToken(that._$form);

                // Get form data
                let data = that._$form.serialize();
                let id = that._object['id'] ? that._object['id'] : null;

                // Save form
                return that._dataService.save(data, id, route).then(
                    object => {
                        // Force submit is reset, each activation is valid  only once
                        that._forceSubmit = false;
                        // Update form with updated object
                        that.setObject(object);
                        // Task removed in "setObject" method to prevent multiple updates of it
                        //that._tasksLoaderManagerService.delTask('SAVE_'+that._uniqueId);
                        return resolve(true);
                    },
                    errors => {
                        if (errors) { that._errors = errors; }
                        that._tasksLoaderManagerService.delTask('SAVE_'+that._uniqueId);
                        return reject(errors);
                    }
                );
            } else {
                that._tasksLoaderManagerService.delTask('SAVE_'+that._uniqueId);
                return resolve(true);
            }
        });
    }

    /**
     * Save action.
     * This method should be called from view/template.
     * @param $event
     */
    public saveAction($event: any = null): void
    {
        if ($event) { $event.preventDefault(); }
        this.save().then(
            data => { return; },
            errors => { return; }
        );
    }

    /**
     * Save and enter to detail action.
     * This method should be called from view/template.
     * @param $event
     */
    public saveAndEnterAction($event: any = null): void
    {
        if ($event) { $event.preventDefault(); }

        let that = this;

        this.save().then(
            data => {
                that.newAction();
                return;
            },
            errors => { return; }
        );
    }

    /**
     * Add a new entry (newObject is used in name because new is a reserved word).
     * @returns {Promise}
     */
    public newObject(): Promise<any>
    {
        let that = this;

        return new Promise(function(resolve, reject) {
            that._dataService.newObject().then(
                data => { return resolve(data); },
                errors => { return reject(errors); }
            );
        });
    }

    /**
     * Add a new entry action.
     * This method should be called when the form is initialized.
     * @param $event
     */
    public newAction($event: any = null): void
    {
        if ($event) { $event.preventDefault(); }
        this.newObject().then(
            data => { return; },
            errors => { return; }
        );
    }

    /**
     * Save and add a new entry.
     * This method should be called from view/template.
     * @param $event
     */
    public saveAndNewAction($event: any = null): void
    {
        if ($event) { $event.preventDefault(); }

        let that = this;

        this.save().then(
            data => { that.newAction(); return; },
            errors => { return; }
        );
    }

    /**
     * Reset object.
     * This method should be called from child component.
     * @param hasConfirm (launch confirm to user if object has unsaved changes)
     * @returns {Promise}
     */
    public reset(hasConfirm: boolean = true): Promise<any>
    {
        let that = this;

        return new Promise(function(resolve, reject) {
            if (that.hasChanges()) {
                if (hasConfirm) {
                    return that.confirmAndSetObject(that._originalNormalizedObject).then(
                        data => { return resolve(true); },
                        errors => { return reject(false); }
                    );
                } else {
                    that.setObject(that._originalNormalizedObject);
                    return resolve(true);
                }
            } else {
                return resolve(true);
            }
        });
    }

    /**
     * Reset action.
     * This method should be called from view/template.
     * @param $event
     */
    public resetAction($event: any = null): void
    {
        if ($event) { $event.preventDefault(); }
        this.reset().then(
            data => { return; },
            errors => { return; }
        );
    }

    /**
     * Set forceSubmit
     * @param forceSubmit
     * @returns {FormService}
     */
    public setForceSubmit(forceSubmit = true) {
        this._forceSubmit = forceSubmit;
        return this;
    }
}