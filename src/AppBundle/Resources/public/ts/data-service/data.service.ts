import {Injectable, Inject, EventEmitter, Optional} from '@angular/core';
import {DomSanitizer} from '@angular/platform-browser';
import {PostService} from '../post.service';
//import {AssetsLazyLoaderManagerService} from '../assets-lazy-loader-manager.service';
import {DataServiceProvider, Search} from './data-service-provider';

// Re-exports
// This classes are in different file because import loops
// (HelperServices uses DataServiceProvider and DataService uses HelperService)
export {DataServiceProvider, Search};

// OrderTypes
export var OrderTypes = {
    up: 'up',
    down: 'down'
};


@Injectable()
export class DataService {
    // Current object (used by form)
    protected _objectIndex: number = null; // Index of object in provider.objects (or in _objectsProvider if defined)
    protected _object: any = null; // Raw object
    protected _normalizedObject: any = null; // Object normalized to template

    // Objects provider is the context to work/handle with object instead of provider.objects
    // (used in TreeViewDataService, in this case the context is always provider.objects)
    protected _objectsProvider: any = null;

    protected _objectsIds: number[] = []; // Array of "ids" of objects in provider.objects.value to avoid duplications
    protected _newObjectsIds: number[] = []; // Array of "ids" with new objects added by the user

    protected _onObjectChangeEmitter: EventEmitter<any>; // When the selected object change
    protected _onObjectsRefreshEmitter: EventEmitter<any>; // When list of objects change
    protected _onObjectsChangeEmitter: EventEmitter<any>; // When objects change, from add, refresh, delete, etc (useful when you need to update parent)

    protected _candidateSearch: Search; // Candidate to new search with modified parameters

    // Handles with assets lazy loader.
    // DataService it's that normalize data, so nobody better than him to knows when AssetsLazyLoaderManager should be called.
    // Assets lazy loader is called only for objects provided in construct, because in the other cases we cannot
    // control the template rendering to call the lazy loader at the right time.
    protected _hasAssetsLazyLoader: boolean = true; // Controls if this feature should be used


    constructor(
        protected _postService: PostService,
        @Inject('HelperService') protected _helperService: any,
        @Inject('DataServiceProvider') protected _provider: DataServiceProvider,
        private _sanitizer: DomSanitizer
        //@Optional() protected _assetsLazyLoaderManagerService: AssetsLazyLoaderManagerService, // @TODO
    ) {
        if (this._provider['pin']) {
            this.pinProvider();
        }

        this._onObjectChangeEmitter = new EventEmitter();
        this._onObjectsRefreshEmitter = new EventEmitter();
        this._onObjectsChangeEmitter = new EventEmitter();

        this.setObjects(this._provider.objects || []);

        // Initialize the search
        this.initSearch();
    }

    /**
     * Pin provider, turning provider on an exclusive copy for this service.
     * It's useful when you have multiple DataServices in the same injector, so you can have multiple
     * problems if you share the same DataServiceProvider between them.
     * @returns {DataService}
     */
    protected pinProvider(): DataService
    {
        this._provider = this._helperService.cloneObject(this._provider, true);
        return this;
    }

    /**
     * Count objects (used in pagination)
     * @returns {number}
     */
    public countObjects(): number
    {
        return this._helperService.varCount(this._provider.objects || []);
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
     * Get object index
     * @returns any
     */
    public getObjectIndex(): any
    {
        return this._objectIndex;
    }

    /**
     * Get selected object (object normalized to view)
     * @returns {any}
     */
    public getNormalizedObject(): any
    {
        return this._normalizedObject;
    }

    /**
     * Get new objects
     * @returns {any}
     */
    public getNewObjects(): any
    {
        return this._newObjectsIds;
    }

    /**
     * Get selected object emitter to tell all subscribers about changes
     * @returns {EventEmitter<any>}
     */
    public getOnObjectChangeEmitter() {
        return this._onObjectChangeEmitter;
    }

    /**
     * Get on objects refresh emitter to tell all subscribers about changes
     * @returns {EventEmitter<any>}
     */
    public getOnObjectsRefreshEmitter() {
        return this._onObjectsRefreshEmitter;
    }

    /**
     * Get on objects change emitter to tell all subscribers about changes (add, refresh, delete, etc)
     * @returns {EventEmitter<any>}
     */
    public getOnObjectsChangeEmitter() {
        return this._onObjectsChangeEmitter;
    }

    /**
     * Get route
     * @param route
     * @returns {null}
     */
    public getRoute(route: string)
    {
        if (route in this._provider.route) {
            return this._provider.route[route]['url'];
        }
        return null;
    }

    /**
     * Set route
     * @param index
     * @param url
     * @param name
     * @returns {DataService}
     */
    public setRoute(index: string, url: string, name: string = null): DataService
    {
        // Set new route if not exists
        if (!(index in this._provider.route)) {
            this._provider.route[index] = {name: null, route: null};
        }

        // Set values
        if (name) { this._provider.route[index]['name'] = name; }
        if (url) { this._provider.route[index]['url'] = url; }

        return this;
    }

    /**
     * Refresh selected object
     * @returns {DataService}
     */
    public refreshObject(): DataService
    {
        let id = (this._object ? this._object['id'] : null);

        if (id) {
            let that = this,
                route = (this._provider.route['get']['url'] + '/' + id);

            this._postService.post(route, this.getRequestData(null, false, false)).then(
                data => { that.handleResponse(data); },
                errors => { console.log(errors); }
            );
        }

        return this;
    }

    /**
     * Select object
     * @param index
     * @returns {Promise}
     */
    public selectObject(index: any): Promise<any>
    {
        let that = this;

        return new Promise(function(resolve, reject) {
            // Set only if object is different
            if(index != that._objectIndex) {
                let objectsProvider = (that._objectsProvider || that._provider.objects);

                that._postService.post(
                    that._provider.route['get']['url'] + '/' + objectsProvider[index]['id'],
                    that.getRequestData(null, false, false)
                ).then(
                    data => {
                        // Local data (do not override, merge data)
                        if (data['localData']) {
                            that.setLocalData(data['localData']);
                        }

                        // Object
                        that._objectIndex = index; // The index of original object that was selected
                        that.setLocalObject(data.object);

                        // Now object has all of fields with the values, is not limited to the search selected field,
                        // so we need normalize the object, because now it can has new values.
                        that.setNormalizedObject();

                        return resolve(true);
                    },
                    errors => { reject(false); });
            } else {
                return resolve(true);
            }
        });
    }

    /**
     * Set object (when the object is changed out of the objects array from _provider,
     * can be an external order)
     * @param object
     * @param index
     * @returns any
     */
    public setObject(object: any, index: any = null): any
    {
        if (object) {
            // Normalize object to template
            this._normalizedObject = this._helperService.cloneObject(object, true);
            this.normalizeObjectsToTemplate([this._normalizedObject]);

            // Objects stored in session does not be considered really objects.
            if (object['id'] && !object['_isSessionStorage']) {
                let objectsProvider = (this._objectsProvider || this._provider.objects);

                // Refresh objects array
                if ((index != null) && objectsProvider[index]) {
                    // Update existent object
                    this._objectIndex = index;
                    this._normalizedObject['_isEdited'] = true; // Flag to use in template
                    objectsProvider[index] = this._normalizedObject;
                    // Emmit changes (object has been edited in objects list)
                    this._onObjectsChangeEmitter.emit(null);
                } else {
                    // Add new object at first of array (to best user experience)
                    this._objectIndex = 0; // Update index to the new index
                    this._normalizedObject['_isNew'] = true; // Flag to use in template
                    this.pushToObjects([this._normalizedObject], true);
                    this._newObjectsIds.push(object['id']); // New object added
                }
            }

            this.setLocalObject(object);
        }

        return this;
    }

    /**
     * Set normalized object (can be called out of the service).
     * Used by "auto-complete".
     * @param object
     * @returns any
     */
    public setNormalizedObject(object: any = null): any
    {
        let objectsProvider = (this._objectsProvider || this._provider.objects);
        object = (object || this._object);

        if (object) {
            // Normalize object to template
            this._normalizedObject = this._helperService.cloneObject(object, true);
            this.normalizeObjectsToTemplate([this._normalizedObject]);

            // Update normalized object in objects provider
            if ((this._objectIndex != null) && objectsProvider[this._objectIndex]) {
                objectsProvider[this._objectIndex] = this._normalizedObject;
            }
        }

        return this;
    }

    /**
     * Set local object (when the object is changed based in the objects array from _provider,
     * always is an internal order)
     * @param object
     * @returns {DataService}
     */
    protected setLocalObject(object: any): DataService
    {
        this._object = object;
        this._onObjectChangeEmitter.emit(this._object);
        return this;
    }

    /**
     * Search initialization
     * @returns {DataService}
     */
    protected initSearch(): DataService
    {
        this._candidateSearch = this._helperService.cloneObject(this._provider['search'], true);
        return this;
    }

    /**
     * Set search
     * @param value
     * @param attribute
     * @returns {DataService}
     */
    public setSearch(value: any, attribute: string = null): DataService
    {
        if (attribute && (attribute in this._provider.search)) {
            this._provider.search[attribute] = value;
        } else if (attribute) {
            return this; // Unknown attribute
        } else {
            this._provider.search = value;
        }

        // Reinitialize the search
        this.initSearch();
        
        return this;
    }

    /**
     * Get search
     * @param attribute
     * @returns any
     */
    public getSearch(attribute: string = null): any
    {
        if (attribute && (attribute in this._provider.search)) {
            return this._provider.search[attribute];
        } else if (attribute) {
            return null; // Unknown attribute
        }
        return this._provider.search;
    }

    /**
     * Get fields
     * @param attribute
     * @returns any
     */
    public getFields(attribute: string = null): any
    {
        if (attribute && (attribute in this._provider.fields)) {
            return this._provider.fields[attribute];
        } else if (attribute) {
            return null; // Unknown attribute
        }
        return this._provider.fields;
    }

    /**
     * Set objects
     * @param objects
     * @param isMerge (if true merge objects, otherwise replace them)
     * @returns any
     */
    public setObjects(objects: any, isMerge: boolean = false): any
    {
        objects = (objects || []);

        this.normalizeObjectsToTemplate(objects);

        // Merge objects
        if (isMerge) {
            this.pushToObjects(objects);
        } else { // Replace objects
            this.resetObjects();
            this.pushToObjects(objects);
        }

        // Emmit changes
        this._onObjectsRefreshEmitter.emit(objects);

        return this;
    }

    /**
     * Reset objects
     * @returns {DataService}
     */
    protected resetObjects() {
        this._provider.objects = [];
        this._objectsIds = [];
        this._newObjectsIds = [];
        this._objectIndex = null; // Reset object index
        return this;
    }

    /**
     * Push to objects
     * @param objects
     * @param isFirst (determines if objects should be at first)
     * @returns any
     */
    protected pushToObjects(objects: any, isFirst: boolean = false): any
    {
        let //hasChanges = false, // To control the changes emitter
            objectsProvider = (this._objectsProvider || this._provider.objects);

        for (let obj of objects) {
            if (!this._helperService.inArray(parseInt(obj['id']), this._objectsIds)) {
                if (isFirst) {
                    objectsProvider.unshift(obj);
                } else {
                    objectsProvider.push(obj);
                }
                this._objectsIds.push(parseInt(obj['id']));
                //hasChanges = true;
            }
        }

        // Emmit changes (object has been added)
        this._onObjectsChangeEmitter.emit(null);

        return this;
    }

    /**
     * Pull from objects
     * @param index
     * @returns any
     */
    protected pullFromObjects(index: any): any
    {
        let objectsProvider = (this._objectsProvider || this._provider.objects),
            objId = parseInt(objectsProvider[index]['id']);

        objectsProvider.splice(index, 1);

        if ((index = this._helperService.arraySearch(objId, this._objectsIds)) != null) {
            this._objectsIds.splice(index, 1);
        }
        if ((index = this._helperService.arraySearch(objId, this._newObjectsIds)) != null) {
            this._newObjectsIds.splice(index, 1);
        }

        // Emmit changes (object has been deleted)
        this._onObjectsChangeEmitter.emit(null);

        return this;
    }

    /**
     * Get field choice
     * @param field
     * @param key (key of field choice)
     * @returns {*|null}
     */
    public getFieldChoice(field: string, key = null)
    {
        // Return a specific field choice by key
        if (key in this._provider.fieldsChoices[field]['value']) {
            return this._provider.fieldsChoices[field]['value'][key];
        }
        return null
    }

    /**
     * Get field choices attribute
     * @param field
     * @param attribute
     * @returns {any}
     */
    public getFieldChoicesAttr(field: string, attribute: string)
    {
        // Return a specific attribute of field choices
        if (this._provider.fieldsChoices[field] && (attribute in this._provider.fieldsChoices[field])) {
            return this._provider.fieldsChoices[field][attribute];
        }
        return null
    }

    /**
     * Get field choices
     * @param field
     * @returns {*|null}
     */
    public getFieldChoices(field: string)
    {
        return this._provider.fieldsChoices[field]['value'] || null;
    }

    /**
     * Set fields choices.
     * @param fieldsChoices
     * @returns {DataService}
     */
    public setFieldsChoices(fieldsChoices): DataService
    {
        this._provider.fieldsChoices = fieldsChoices;
        return this;
    }

    /**
     * Merge provider attribute
     * @param attribute
     * @param value
     * @returns {DataService}
     */
    public mergeProviderAttr(attribute: string, value: any): DataService
    {
        if (attribute in this._provider) {
            this._provider[attribute] =
                this._helperService.mergeObjects(this._provider[attribute], value);
        }
        return this;
    }

    /**
     * Set provider attribute
     * @param attribute
     * @param value
     * @returns {DataService}
     */
    public setProviderAttr(attribute: string, value: any): DataService
    {
        if (attribute in this._provider) {
            this._provider[attribute] = value;
        }
        return this;
    }

    /**
     * Get provider attribute
     * @param attribute
     * @returns {any|null}
     */
    public getProviderAttr(attribute: string): any
    {
        return (this._provider[attribute] || null);
    }

    /**
     * Get "localData" attribute
     * @param attribute
     * @returns any
     */
    public getLocalDataAttr(attribute: string = null): any
    {
        return (this._provider['localData']['data'][attribute] || null);
    }

    /**
     * Get provider extra data attribute
     * @param attribute
     * @returns {any|null}
     */
    public getProviderExtraDataAttr(attribute: string): any
    {
        return (
            (this._provider['extraData'] && this._provider['extraData'][attribute])
                ? this._provider['extraData'][attribute]
                : null
        );
    }

    /**
     * Get candidate search
     * @returns any
     */
    public getCandidateSearch(): any
    {
        return (this._candidateSearch || null);
    }

    /**
     * Get candidate search attribute
     * @param attribute
     * @returns any
     */
    public getCandidateSearchAttr(attribute: string): any
    {
        return this._candidateSearch[attribute] || null;
    }

    /**
     * Reset extra fields
     * @returns {DataService}
     */
    protected resetExtraFields(): DataService
    {
        if (this.getProviderExtraDataAttr('fields')) {
            for (let field in this.getProviderExtraDataAttr('fields')) {
                this._provider.extraData.fields[field] = null;
            }
        }
        return this;
    }

    /**
     * Normalize objects to show in template
     * Detect fields that needs to be rendered to view/template
     * @param objects
     * @param fields
     * @returns any
     */
    protected normalizeObjectsToTemplate(objects: any = null, fields: any[] = null): any
    {
        objects = (objects || this._provider.objects);
        fields = (fields || this._provider.fields['view']);

        if(objects && fields) {
            for (let field of fields) {
                let fieldMetadata = this._provider.fields['metadata'][field];
                if (fieldMetadata['skipNormalizer']) { continue; }

                switch (fieldMetadata['type']) {
                    case 'img':
                    case 'avatar':
                    case 'boolean':
                    case 'code':
                    case 'percentage':
                    case 'monetary':
                    case 'icon':
                    case 'link':
                    case 'status':
                        for (let obj of objects) {
                            if (typeof obj[field] != 'undefined') { // Can be undefined, if the search doest have the field selected
                                obj[field] = this.renderField(field, obj);
                            }
                        }
                        break;
                }

                // For "enum" type (key is the label, pattern of Symfony ChoiceType)
                if (this._provider.fieldsChoices
                    && this._provider.fieldsChoices[field]
                    && this._provider.fieldsChoices[field]['value']
                ) {
                    let enumObj = this._provider.fieldsChoices[field]['value'];
                    for (let obj of objects) {
                        for (let enumKey in enumObj) {
                            if (enumObj[enumKey] == obj[field]) {
                                obj[field] = enumKey;
                            }
                        }
                    }
                }
            }

            // @TODO: Analise better how lazy loader should be handled
            if (this._hasAssetsLazyLoader) {
                this._hasAssetsLazyLoader = false;
            }
        }
        return this;
    }

    /**
     * Set Has Assets Lazy Loader
     * @TODO: Not used for now, it's here to analise better in future how lazy loader should be handled
     * @param hasAssetsLazyLoader
     */
    /*public setHasAssetsLazyLoader (hasAssetsLazyLoader: boolean)
    {
        this._hasAssetsLazyLoader = hasAssetsLazyLoader;
    }*/
    /**
     * Run Assets Lazy Loader
     * @TODO: Not used for now, it's here to analise better in future how lazy loader should be handled
     */
    /*public runAssetsLazyLoader()
    {
        // Only can be used in the first load (check out the comment above)
        if (this._hasAssetsLazyLoader) {
            this._hasAssetsLazyLoader = false;
            this._assetsLazyLoaderManagerService.load();
            console.log("Lazy load called in dataservice");
        }
    }*/

    /**
     * Render field
     * @param field
     * @param object
     * @returns {string}
     */
    public renderField(field: string, object: any): any
    {
        // Get field metadata
        let fieldMetadata = (this._provider.fields['metadata'][field] || null),
            value = object[field];

        // Render field to the view/template
        if(fieldMetadata) {
            switch (fieldMetadata['type']) {
                case 'boolean':
                    if (this._helperService.castToBoolean(value)) {
                        return ('<i class="fa fa-check"></i>');
                    } else {
                        return ('<i class="fa fa-ban"></i>');
                    }
                case 'code':
                    if (object['storeObj']
                        && this._helperService.getAppVar('stores')
                        && this._helperService.getAppVar('stores')[object['storeObj']]
                    ) {
                        return this._sanitizer.bypassSecurityTrustHtml( // Used to allow the style attr
                            '<span class="store" style="background-color: '
                            + this._helperService.getAppVar('stores')[object['storeObj']]['color']
                            + '">' + value + '</span>'
                        );
                    }
                    return (value);
                case 'percentage':
                    return (value + '%');
                case 'monetary':
                    return (value + '€');
                case 'icon':
                    return ('<i class="fa ' + value + '"></i>');
                case 'link':
                    return ('<a href="' + value + '" target="_blank">' + value + '</a>');
                case 'img':
                case 'avatar':
                    let extraClass = ((fieldMetadata['type'] == 'avatar') ? 'img-circle' : 'thumbnail');

                    // No image is provided
                    if (!value) {
                        return (
                            '<img alt="' + fieldMetadata['label'] + '" class="' + extraClass
                            + '" src="/assets/img/dummy-48x48.png">'
                        );
                    }

                    // Regular load
                    if (!this._hasAssetsLazyLoader) {
                        return (
                            '<img alt="' + fieldMetadata['label'] + '" class="' + extraClass
                            + '" src="' + (this._helperService.getUploadWebPath(value) || value) + '">'
                        );
                    }

                    // Use lazy loader
                    return this._sanitizer.bypassSecurityTrustHtml(
                        '<img alt="' + fieldMetadata['label'] + '" class="js_lazy ' + extraClass
                        + '" src="/assets/img/dummy-48x48.png" data-src="'
                        + (this._helperService.getUploadWebPath(value) || value) + '">'
                    );

                case 'status':
                    let statusMap = {'NO': 'danger', 'PARTIAL': 'warning', 'YES': 'primary'};
                    return ('<span class="status -' + (statusMap[value] || 'danger') + '"></span>');
            }
        }

        return value;
    }

    /**
     * New object (call this function to create a new object)
     * @param index (to create object based on another)
     * @param object (to create object based on a pre existent object)
     * @returns {Promise}
     */
    public newObject(index: any = null, object: any = null): Promise<any> {
        let that = this;

        return new Promise(function(resolve, reject) {
            if (object) {
                // Objects has pre existent data (for example can be from backend session storage)
                that.setNewObject(object);
                return resolve(true);
            }

            let newObj = {};
            // Create by copy
            if (index != null) {
                let objectsProvider = (that._objectsProvider || that._provider.objects);

                return that._postService.post(
                    that._provider.route['get']['url'] + '/' + objectsProvider[index]['id'],
                    that.getRequestData()
                ).then(
                    data => {
                        for (let field of that._provider.fields['form']) {
                            newObj[field] = ((that._provider.fields['metadata'][field]['acl'] === 'read')
                                    ? (that._provider.fields['metadata'][field]['default'] || null)
                                    : (data.object[field] || null)
                            );
                            // "fieldInView" (for auto-complete, html-select, etc.)
                            if (that._provider.fields['metadata'][field]['fieldInView'] && newObj[field]) {
                                let fieldInView = that._provider.fields['metadata'][field]['fieldInView'];
                                newObj[fieldInView] = data.object[fieldInView];
                            }
                        }
                        that.setNewObject(newObj);
                        return resolve(true);
                    },
                    errors => { console.log(errors); return reject(false); }
                );
            } else {
                // Create by server action
                if (that._provider.route['new']) {
                    return that._postService.post(
                        that._provider.route['new']['url'],
                        that.getRequestData()
                    ).then(
                        data => {
                            // Local data (do not override, merge data)
                            if (data['localData']) {
                                that.setLocalData(data['localData']);
                            }

                            // Object
                            that.setNewObject(data.object);

                            return resolve(true);
                        },
                        errors => { console.log(errors); return reject(false); }
                    );
                }
                // Create empty object
                else {
                    for (let field of that._provider.fields['form']) {
                        newObj[field] = (that._provider.fields['metadata'][field]['default'] || null);
                    }
                    that.setNewObject(newObj);
                    return resolve(true);
                }
            }
        });
    }

    /**
     * Set new object
     * @param object
     * @returns {DataService}
     */
    protected setNewObject(object: any) {
        // Normalize object to template
        this._normalizedObject = this._helperService.cloneObject(object, true);
        this.normalizeObjectsToTemplate([this._normalizedObject]);

        // Set object
        this._objectIndex = null;
        this.setLocalObject(object);

        this.resetExtraFields();

        return this;
    }

    /**
     * Save object.
     * @param data
     * @param id
     * @param route (specific route to save)
     * @returns {Promise}
     */
    public save(data: any, id = null, route = null): Promise<any>
    {
        let that = this;

        return new Promise(function(resolve, reject) {
            // Set route (if id is provided, use 'edit', else try 'add')
            if (!route) {
                let routeName = (id ? 'edit' : (that._provider.route['add'] ? 'add' : 'edit'));
                route = (that._provider.route[routeName] ? that._provider.route[routeName]['url'] : null);
                if (!route) {
                    console.log('Error: No route was defined!');
                    return reject({});
                }
            }
            if (id) { route += ('/' + id); }

            that._postService.post(route, that.getRequestData(data)).then(
                data => {
                    that.handleResponse(data);
                    return resolve(data['object'] || null);
                },
                errors => {
                    // Local data (do not override, merge data). Exception in errors list used in some cases.
                    if (errors['localData']) {
                        that.setLocalData(errors['localData']);
                        delete errors['localData']; // It's no more necessary
                    }

                    // Refresh object
                    if (errors['object']) {
                        that.setObject(errors['object'], that._objectIndex);
                        delete errors['object']; // It's no more necessary
                    }

                    return reject(errors);
                }
            );
        });
    }

    /**
     * Search objects
     * @returns {DataService}
     */
    public search(): DataService
    {
        // Only search if parameters have changed
        if (this._helperService.isEqualObject(this._provider['search'], this._candidateSearch)) {
            return this;
        }

        // Update search
        this._provider['search'] = this._helperService.cloneObject(this._candidateSearch, true);
        // Refresh objects
        return this.refresh();
    }

    /**
     * Refresh list of objects
     * @returns {DataService}
     */
    public refresh(): DataService
    {
        let that = this;

        // Reset pagination for new search
        this.resetPagination();

        this._postService.post(
            this._provider.route['get']['url'],
            this.getRequestData(null, false)
        ).then(
            data => { that.handleResponse(data); },
            errors => { console.log(errors); }
        );

        return this;
    }

    /**
     * Get more objects (pagination)
     * @returns {DataService}
     */
    public getMoreObjects(): DataService
    {
        let that = this;

        this._postService.post(
            this._provider.route['get']['url'],
            this.getRequestData()
        ).then(
            data => {
                // Update objects
                data.objects = (data.objects || []);
                that.handleResponse(data, null, true);
            },
            errors => { console.log(errors); }
        );

        return this;
    }

    /**
     * Get choices of entity based on search configuration (for select, auto-complete, etc.)
     * @returns {DataService}
     */
    public choices(): DataService
    {
        let that = this,
            noReset = true;

        // Only search if parameters have changed (only criteria is changed)
        if (!this._helperService.isEqualObject(this._provider['search']['criteria'], this._candidateSearch['criteria'])) {
            // Update search
            this._provider['search']['criteria'] = this._helperService.cloneObject(this._candidateSearch['criteria'], true);
            // Reset pagination for new search
            this.resetPagination();
            // To reset objects
            noReset = false;
        }

        // No field is necessary, is returned the choices pattern (minimizes data sent)
        this._provider['search']['fields'] = [];

        this._postService.post(
            this._provider.route['choices']['url'],
            this.getRequestData(null, noReset)
        ).then(
            data => {
                data.objects = (data.objects || []);
                that.handleResponse(data, null, noReset);
            },
            errors => { console.log(errors); }
        );

        return this;
    }

    /**
     * Order object (change priority value).
     * @param index
     * @param type
     * @returns any
     */
    public order(index: any, type: string): any
    {
        let that = this,
            objectsProvider = (this._objectsProvider || this._provider.objects);

        if (OrderTypes[type] // Validate order type
            // If priority is already in the max value (0), then 'up' doesn't make sense.
            && ((objectsProvider[index]['priority'] > 0) || (OrderTypes[type] == 'down'))
        ) {
            this._postService.post(
                (this._provider.route['order']['url'] + '/' + objectsProvider[index]['id'] + '/' + OrderTypes[type]),
                that.getRequestData()
            ).then(
                data => {
                    that.handleResponse(data, index);

                    // If objects are not returned, then order objects by "search" "orderBy" provider
                    if (data.object) {
                        if (!data.objects) {
                            // Get fields from search
                            let orderFields = that._provider.search.orderBy.map(function($item) {
                                return $item['field'];
                            });
                            that._helperService.orderObjects(that._provider.objects, orderFields);
                        }
                    }
                },
                errors => {
                    console.log(errors);
                }
            );
        }

        return this;
    }

    /**
     * Cancel object.
     * @param index
     * @returns {Promise}
     */
    public cancel(index: any): Promise<any>
    {
        let that = this,
            objectsProvider = (this._objectsProvider || this._provider.objects);

        return new Promise(function(resolve, reject) {
            that._postService.post(
                that._provider.route['cancel']['url'] + '/' + objectsProvider[index]['id'],
                that.getRequestData()
            ).then(
                data => {
                    that.handleResponse(data, index);
                    return resolve(true);
                },
                errors => { return reject(false); }
            );
        });
    }

    /**
     * Delete object.
     * @param index
     * @returns {Promise}
     */
    public delete(index: any): Promise<any>
    {
        let that = this,
            objectsProvider = (this._objectsProvider || this._provider.objects);

        return new Promise(function(resolve, reject) {
            that._postService.post(
                that._provider.route['delete']['url'] + '/' + objectsProvider[index]['id'],
                that.getRequestData()
            ).then(
                data => {
                    // Refresh objects array removing the removed object
                    if (!data.objects) {
                        that.pullFromObjects(index);
                    }

                    // Reset object index
                    that._objectIndex = null;

                    that.handleResponse(data);

                    return resolve(true);
                },
                errors => { return reject(false); }
            );
        });
    }

    /**
     * Delete objects from array by index.
     * @param indexes
     * @returns {DataService}
     */
    public deleteArray(indexes: any): DataService
    {
        let that = this;
        let objects = this._provider.objects;
        let idArr = [];

        if (objects && indexes && (indexes.length > 0)) {
            for (let index of indexes) {
                index = index.value;
                if (objects[index]) {
                    idArr.push(objects[index]['id']);
                }
            }
        }

        this._postService.post(
            this._provider.route['delete']['url'],
            this.getRequestData({id: idArr})
        ).then(
            data => {
                that.handleResponse(data);

                // Refresh objects array
                // Correction for index (each time you remove an index, all indices needs to be corrected)
                let indexCorrection = 0;
                for (let index of indexes) {
                    index = index.value;
                    if (objects[index]) {
                        that.pullFromObjects(index - indexCorrection);
                        indexCorrection++;
                    }
                }
            },
            errors => { console.log(errors); }
        );

        return this;
    }

    /**
     * Detail object.
     * @param index
     */
    public detail(index: any = null): void
    {
        return this.redirect('detail', index);
    }

    /**
     * Redirect page.
     * @param route
     * @param index
     */
    public redirect(route: string, index: any = null): void
    {
        index = ((index == null) ? this._objectIndex : index);
        let objectsProvider = (this._objectsProvider || this._provider.objects);

        location.href = (this._provider.route[route]['url'] + '/' + objectsProvider[index]['id']);
        return;
    }

    /**
     * Run/Execute action. Execute action directly.
     * @param route
     * @param data
     * @param updateData
     * @returns {Promise}
     */
    public runAction(route: string, data: any = null, updateData: boolean = false): Promise<any> {
        let that = this;

        return new Promise(function(resolve, reject) {
            return that._postService.post(route, that.getRequestData(data, false, false)).then(
                data => {
                    if (updateData) {
                        that.handleResponse(data);
                    }

                    return resolve(data);
                },
                errors => { return reject(errors); }
            );
        });
    }

    /**
     * Submit indexes id
     * @param route
     * @param indexes
     * @param allowEmptySubmit (allow submit when data is empty,
     * some cases it is necessary to inform that the user does not select any choice)
     * @returns {Promise}
     */
    public submitIndexesId(route: string, indexes: any, allowEmptySubmit: boolean = false): Promise<any>
    {
        let that = this;
        let objects = this._provider.objects;
        let idArr = [];

        return new Promise(function(resolve, reject) {
            if (objects && indexes && (indexes.length > 0)) {
                for (let index of indexes) {
                    if (objects[index.value]) {
                        idArr.push(objects[index.value]['id']);
                    }
                }
            }

            if  ((idArr.length > 0) || allowEmptySubmit) {
                // Submit to provided route
                return that.runAction(route, {id: idArr}).then(
                    data => { return resolve(data); },
                    errors => { return reject(errors); }
                );
            } else {
                // No indexes to submit
                return resolve(null);
            }
        });
    }

    /**
     * Get data to request
     * @param data
     * @param updatePagination (determines if pagination should be updated before return request data)
     * @param hasSearch (determines if search is sent)
     * @returns {any}
     */
    public getRequestData(data: any = null, updatePagination: boolean = true, hasSearch: boolean = true): any
    {
        // Update pagination
        if (updatePagination) {
            this.updatePagination();
        }

        if (!data || (typeof data == 'object')) {
            return {
                csrfToken: this._helperService.getAppVar('csrfToken'),
                search: (hasSearch ? this._provider['search'] : null),
                data: data
            }
        }

        // If data is provided it's assume that is a serialized form
        return (data + '&search=' + JSON.stringify(this._provider['search']));
    }

    /**
     * Reset pagination offset
     * @returns {DataService}
     */
    protected resetPagination(): DataService
    {
        this._provider.search.offset = 0;
        return this;
    }

    /**
     * Reset pagination offset
     * @returns {DataService}
     */
    protected updatePagination(): DataService
    {
        this._provider.search.offset = (this._provider.objects.length - this._newObjectsIds.length);
        return this;
    }

    /**
     * Set local data
     * @param localData
     */
    protected setLocalData(localData: any)
    {
        // Local data (do not override, merge data)
        if (localData) {
            if (localData['data']) {
                this._provider.localData['data'] = this._helperService.mergeObjects(
                    this._provider.localData['data'],
                    localData['data']
                );
            }
            if (localData['template']) {
                this._provider.localData['template'] = this._helperService.mergeObjects(
                    this._provider.localData['template'],
                    localData['template']
                );
            }
        }
    }

    /**
     * Handle with regular server responses
     * @param response
     * @param objectIndex (object index to update object)
     * @param hasMergeObjects (merge array of objects, otherwise will be override)
     * @returns {DataService}
     */
    protected handleResponse(response: any, objectIndex: number = null, hasMergeObjects: boolean = false)
    {
        // Set default object index (this can be done in method signature)
        if (objectIndex === null) { objectIndex = this._objectIndex; }

        // Refresh all objects
        if (response['objects']) {
            this.setObjects(response['objects'], hasMergeObjects);
        }

        // Refresh object
        if (response['object']) {
            this.setObject(response['object'], objectIndex);
        }

        // Local data (do not override, merge data)
        if (response['localData']) {
            this.setLocalData(response['localData']);
        }

        // Refresh fields choices
        if (response['fieldsChoices']) {
            this.setFieldsChoices(response['fieldsChoices']);
        }

        // Update search pagination
        if (response['search'] && (typeof response['search']['hasMore'] != 'undefined')) {
            // Equals search in provider and candidate search to avoid return false
            // in comparisons doing unnecessary searches.
            this._candidateSearch.hasMore = this._provider.search.hasMore
                = this._helperService.castToBoolean(response['search']['hasMore']);
            this._candidateSearch.offset = this._provider.search.offset
                = (response['search']['offset'] || 0);
        }

        return this;
    }
}