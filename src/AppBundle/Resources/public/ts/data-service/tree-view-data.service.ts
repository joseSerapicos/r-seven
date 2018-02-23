import {Injectable, Inject, EventEmitter} from '@angular/core';
import {DomSanitizer} from '@angular/platform-browser';
import {PostService} from '../post.service';
import {DataService} from './data.service';
import {TreeViewDataServiceProvider, Search} from './tree-view-data-service-provider';

// Re-exports
export {TreeViewDataServiceProvider};


/**
 * This class handles with data in tree-view context.
 * Tree-view are a different objects array structure (hierarchical) than a regular DataService.
 */
@Injectable()
export class TreeViewDataService extends DataService
{
    // Index in _provider.objects that contents the partial _objectsProvider of _provider.objects
    // where the object is housed
    protected _objectsProviderIndex: number = null;

    constructor(
        postService: PostService,
        @Inject('HelperService') helperService: any,
        @Inject('DataServiceProvider') provider: TreeViewDataServiceProvider,
        sanitizer: DomSanitizer
    ) {
        super(
            postService,
            helperService,
            provider,
            sanitizer
        );
    }

    /**
     * Get object index
     * @returns any
     */
    public getObjectIndex(): any
    {
        return {'objIndex': this._objectIndex, 'parentNodeIndex': this._objectsProviderIndex};
    }

    /**
     * Count objects (used in pagination)
     * @returns {number}
     */
    public countObjects(): number
    {
        let objects = (this._provider.objects || {}),
            includeRootIndex = false,
            total = 0;

        // Check if root nodes (at index 0) has id, if no is id provided, then this objects are not able to check
        if (objects[0] && objects[0][0] && objects[0][0]['id']) {
            includeRootIndex = true;
        }

        for (let index in objects) {
            if ((parseInt(index, 10) != 0) || includeRootIndex) {
                total += this._helperService.varCount(objects[index] || []);
            }
        }

        return total;
    }

    /**
     * Select object
     * @param index
     * @returns {Promise}
     */
    public selectObject(index: any): Promise<any>
    {
        let that = this,
            objIndex = (index ? index['objIndex'] : null),
            parentNodeIndex = (index ? index['parentNodeIndex'] : null);

        return new Promise(function(resolve, reject) {
            // Set only if object is different
            if((objIndex != that._objectIndex) || (parentNodeIndex != that._objectsProviderIndex)) {
                let objectsProvider = that._provider.objects[parentNodeIndex];

                that._postService.post(
                    that._provider.route['get']['url'] + '/' + objectsProvider[objIndex]['id'],
                    that.getRequestData()
                ).then(
                    data => {
                        // The index of original object that was selected
                        that._objectIndex = objIndex;
                        that._objectsProviderIndex = parentNodeIndex;

                        that.setLocalObject(data.object);
                        that._normalizedObject = objectsProvider[objIndex];
                        return resolve(true);
                    },
                    errors => { console.log(errors); reject(false); });
            } else {
                return resolve(true);
            }
        });
    }

    /**
     * Set object (when the object is changed out of the objects array from _provider,
     * can be an external order)
     * @param object
     * @param index (can be only an index from DataService, or and object from out of service)
     * @returns any
     */
    public setObject(object: any, index: any = null): any
    {
        if (object) {
            let objIndex = null;

            // Objects stored in session does not be considered really objects.
            if (!object['_isSessionStorage']) {
                objIndex = ((index && index['objIndex'])
                        ? index['objIndex'] // From out of service
                        : index // From DataService or not defined
                );

                let oldParentNodeIndex = ((index && index['parentNodeIndex'])
                        ? index['parentNodeIndex'] // From out of service
                        : ((index != null)
                            ? this._objectsProviderIndex // From DataService
                            : null // Not defined
                    )
                );
                let newParentNodeIndex = (object[this._provider['localParentField']] || 0);

                // Create a new array entry for parent node, if not exist yet
                if (!(newParentNodeIndex in this._provider.objects)) {
                    this._provider.objects[newParentNodeIndex] = [];
                }

                // Remove from old parent node
                if ((oldParentNodeIndex != null) && (oldParentNodeIndex != newParentNodeIndex)) {
                    this._objectsProvider = this._provider.objects[oldParentNodeIndex];
                    this.pullFromObjects(objIndex);
                    this._provider.objects[newParentNodeIndex].unshift(object); // Add new entry in new parent node
                    objIndex = 0; // Index of new entry in parent (to be marked as edited)
                }

                // Update objects provider
                this._objectsProviderIndex = newParentNodeIndex;
                this._objectsProvider = this._provider.objects[newParentNodeIndex];
            }

            super.setObject(object, objIndex);
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

        // Object with nodes
        if (typeof objects == 'object') {
            for (let objNodes of objects) {
                super.normalizeObjectsToTemplate(objNodes, fields);
            }
        } else { // Sample array of objects
            super.normalizeObjectsToTemplate(objects, fields);
        }

        return this;
    }

    /**
     * New object (call this function to create a new object)
     * @param index
     * @returns {Promise}
     */
    public newObject(index: any = null): Promise<any> {
        let objIndex = (index ? index['objIndex'] : null),
            parentNodeIndex = (index ? index['parentNodeIndex'] : null);

        this._objectsProvider = ((parentNodeIndex != null) ? this._provider.objects[parentNodeIndex] : null);

        return super.newObject(objIndex);
    }

    /**
     * Delete object.
     * @param index
     * @returns {Promise}
     */
    public delete(index: any): Promise<any>
    {
        let objIndex = (index ? index['objIndex'] : null),
            parentNodeIndex = (index ? index['parentNodeIndex'] : null);

        this._objectsProvider = ((parentNodeIndex != null) ? this._provider.objects[parentNodeIndex] : null);

        return super.delete(objIndex);
    }

    /**
     * Detail object.
     * @param index
     */
    public detail(index: any = null): void
    {
        let objIndex = (index ? index['objIndex'] : this._objectIndex),
            parentNodeIndex = (index ? index['parentNodeIndex'] : this._objectsProviderIndex);

        this._objectsProvider = ((parentNodeIndex != null) ? this._provider.objects[parentNodeIndex] : null);

        super.detail(objIndex);

        return;
    }

    /**
     * Set objects
     * @param objects
     * @param isMerge (if true merge objects, otherwise replace them)
     * @returns any
     */
    public setObjects(objects: any, isMerge: boolean = false): any
    {
        objects = (objects || {});

        this.normalizeObjectsToTemplate(objects);

        this.resetObjects();

        for (let objNodesIndex in objects) {
            this._objectsProvider = [];
            this.pushToObjects(objects[objNodesIndex]);
            this._provider.objects[objNodesIndex] = this._objectsProvider;
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
        super.resetObjects();
        this._provider.objects = {};
        return this;
    }

    /**
     * Submit indexes id
     * @param route
     * @param indexes (index in the format "parentIndex::childIndex")
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
                    let indexArr = index.value.split("::");
                    if (objects[indexArr[0]] && objects[indexArr[0]][indexArr[1]]) {
                        idArr.push(objects[indexArr[0]][indexArr[1]]['id']);
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
     * Delete objects from array by index.
     * @param indexes (index in the format "parentIndex::childIndex")
     * @returns {DataService}
     */
    public deleteArray(indexes: any): DataService
    {
        let that = this;
        let objects = this._provider.objects;
        let idArr = [];

        if (objects && indexes && (indexes.length > 0)) {
            for (let index of indexes) {
                let indexArr = index.value.split("::");
                if (objects[indexArr[0]] && objects[indexArr[0]][indexArr[1]]) {
                    idArr.push(objects[indexArr[0]][indexArr[1]]['id']);
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
                let indexCorrection = {};
                for (let index of indexes) {
                    let indexArr = index.value.split("::");
                    if (objects[indexArr[0]] && objects[indexArr[0]][indexArr[1]]) {
                        that._objectsProvider = that._provider.objects[indexArr[0]];
                        indexCorrection[indexArr[0]] = (indexCorrection[indexArr[0]] || 0);
                        that.pullFromObjects(indexArr[1] - indexCorrection[indexArr[0]]);
                        indexCorrection[indexArr[0]]++;
                    }
                }
            },
            errors => { console.log(errors); }
        );

        return this;
    }
}