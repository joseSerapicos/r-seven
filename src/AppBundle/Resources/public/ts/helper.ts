import {DataServiceProvider} from './data-service/data-service-provider';
import {TreeViewProvider} from './tree-view/tree-view-provider';
import {DataBoxProvider} from './data-box/data-box-provider';
import {ImageProvider} from './image/image-provider';
import {BaseProvider} from './base/base-provider';
import {BoxProvider} from './box/box-provider';
import {FormProvider} from './form/form-provider';
import {WizardPopupProvider} from './wizard/wizard-popup-provider';
import {EntityDetailProvider} from './entity-detail/entity-detail-provider';
import {ActionsServiceProvider} from './actions/actions-service-provider';

/**
 * Helper with common functions
 */
export class Helper {
    // Object to use in angular component at runtime.
    private static runtimeVar = {};

    /**
     * Get object length
     * @param object
     * @returns {number}
     */
    public static objectLength(object: any): number
    {
        return Object.keys(object || {}).length;
    }

    /**
     * Get object keys
     * @param object
     * @returns {string[]|Array}
     */
    public static objectKeys(object: any): any
    {
        return Object.keys(object || {}) || [];
    }

    /**
     * Convert a list of object to an array
     * @param objects
     * @returns {string[]|Array}
     */
    public static objectsToArray(objects: any): any
    {
        let objectsArray = [];
        for (let key in (objects || {})) {
            objectsArray.push({key: key, value: objects[key]});
        }
        return objectsArray;
    }

    /**
     * Compare if object1 is equal to object2
     * @param object1
     * @param object2
     * @returns {boolean}
     */
    public static isEqualObject(object1: any, object2: any): boolean
    {
        return (JSON.stringify(object1) === JSON.stringify(object2));
    }

    /**
     * Cast to boolean
     * @param value
     * @returns {boolean}
     */
    public static castToBoolean(value): boolean
    {
        return Helper.inArray(value, ['true', 1, true, '1'])
    }

    /**
     * Clone object
     * @param object
     * @param recursive
     * @returns {any}
     */
    public static cloneObject(object: any, recursive = false): any
    {
        return $.extend(recursive, {}, object);
    }

    /**
     * Merge objects into a new object
     * @param object1
     * @param object2
     * @param recursive
     * @returns {any}
     */
    public static mergeObjects(object1: any, object2: any, recursive = false): any
    {
        return $.extend(recursive, object1, object2);
    }

    /**
     * Check if value exists in array
     * @param value
     * @param array
     */
    public static inArray(value: any, array: any): boolean
    {
        return (($.inArray(value, array) >= 0) ? true : false);
    }

    /**
     * Search value in array
     * @param value
     * @param array
     */
    public static arraySearch(value: any, array: any): number
    {
        let index = $.inArray(value, array);
        return ((index >= 0) ? index : null);
    }

    /**
     * Order objects by key
     * @param objects
     * @param keys
     * @returns {any}
     */
    public static orderObjects(objects: any, keys: string[]): any
    {
        let prevKey = null;

        if (objects && keys) {
            for (let key of keys) {
                objects.sort(function (obj1, obj2) {
                    if (!prevKey || (obj1[prevKey] == obj2[prevKey])) {
                        // If key is equal, then sort by id "DESC"
                        let orderKey = ((obj1[key] == obj2[key]) ? 'id' : key);
                        return ((obj1[orderKey] > obj2[orderKey]) ? 1 : 0);
                    }
                    return 0;
                });
                prevKey = key;
            }
        }

        return objects;
    }

    /**
     * Get global var
     * @param index
     * @returns {any}
     */
    public static getGlobalVar(index: string): any
    {
        if (index in _app) {
            return _app[index];
        }
        return null;
    }

    /**
     * Set global var
     * @param index
     * @param value
     * @returns {Helper}
     */
    public static setGlobalVar(index: string, value: any): Helper
    {
        _app[index] = value;
        return Helper;
    }

    /**
     * Delete global var
     * @param index
     * @returns {Helper}
     */
    public static deleteGlobalVar(index: string): Helper
    {
        if (index in _app) {
            delete _app[index];
        }
        return Helper;
    }

    /**
     * Get data-box service provider
     * @param data
     * @returns any
     */
    public static getDataServiceProvider(data: any): DataServiceProvider
    {
        return {
            fields: data.fields || null,
            fieldsChoices: data.fieldsChoices || null,
            search: data.search || null,
            object: data.object || null,
            objects: data.objects || null,
            route: data.route || null,
            extraData: ((data.extraData && data.extraData.service) ? data.extraData.service : null),
            localData: (data.localData || null),
        };
    }

    /**
     * Get tree-view provider
     * @param data
     * @returns any
     */
    public static getTreeViewProvider(data: any): TreeViewProvider
    {
        return Helper.mergeObjects(
            Helper.getDataBoxProvider(data),
            {
                iconDefault: (data.treeView.iconDefault || null),
                iconField: (data.treeView.iconField || null),
                iconFieldMap: (data.treeView.iconFieldMap || {})
            }
        );
    }

    /**
     * Get image provider
     * @param data
     * @param localData supplied by module/component
     * @returns any
     */
    public static getImageProvider(data: any, localData: any): ImageProvider
    {
        return Helper.mergeObjects(
            Helper.getDataBoxProvider(data),
            {
                imageCropPopupModule: localData['imageCropPopupModule']
            }
        );
    }

    /**
     * Get data-box provider
     * @param data
     * @returns any
     */
    public static getDataBoxProvider(data: any): DataBoxProvider
    {
        return Helper.getBoxProvider(data);
    }

    /**
     * Get box provider
     * @param data
     * @returns any
     */
    public static getBoxProvider(data: any): BoxProvider
    {
        return Helper.mergeObjects(
            Helper.getBaseProvider(data),
            {
                label: data.label || '',
                controls: {
                    expander: (data.controls && data.controls.expander),
                    resizable: (data.controls && data.controls.resizable),
                }
            }
        );
    }

    /**
     * Get box provider
     * @param data
     * @returns any
     */
    public static getEntityDetailProvider(data: any): EntityDetailProvider
    {
        return Helper.mergeObjects(
            Helper.getBaseProvider(data),
            {
                popup: null // Create this value in component
            }
        );
    }

    /**
     * Get base provider
     * @param data
     * @returns any
     */
    public static getBaseProvider(data: any): BaseProvider
    {
        return {
            extraData: ((data.extraData && data.extraData.template) ? data.extraData.template : null)
        };
    }

    /**
     * Get data box form provider
     * @param data
     * @returns any
     */
    public static getFormProvider(data: any): FormProvider
    {
        return {
            label: data.label || ''
        };
    }

    /**
     * Get data box form provider
     * @param data
     * @returns any
     */
    public static getWizardPopupProvider(data: any): WizardPopupProvider
    {
        return {
            label: data.label || ''
        };
    }

    /**
     * Get actions provider
     * @param data
     * @returns {any}
     */
    public static getActionsServiceProvider(data: any): ActionsServiceProvider
    {
        return (data.actions);
    }

    /**
     * Set runtime var
     * @param key
     * @param value
     * @returns {Helper}
     */
    public static setRuntimeVar(key: string, value: any): Helper
    {
        Helper.runtimeVar[key] = value;
        return Helper;
    }

    /**
     * Get runtime var
     * @param key
     * @param defaultValue
     * @returns {any}
     */
    public static getRuntimeVar(key: string, defaultValue = null): string
    {
        if (key in Helper.runtimeVar) {
            return Helper.runtimeVar[key];
        }
        return defaultValue;
    }

    /**
     * Get upload web path
     * @param path
     * @returns string
     */
    public static getUploadWebPath(path: string): string
    {
        if (path && path.indexOf("/upload/")) {
            return (path.substring(path.indexOf("/upload/"), path.length));
        }
        return path;
    }
}