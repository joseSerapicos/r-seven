import {DataServiceProvider} from './data-service/data-service-provider';
import {TreeViewProvider} from '../tree-view/ts/src/tree-view-provider';
import {DataBoxProvider} from '../data-box/ts/src/data-box-provider';
import {ImageProvider} from '../image/ts/src/image-provider';
import {BaseProvider} from './base/base-provider';
import {BoxProvider} from './box/box-provider';
import {FormProvider} from './form/form-provider';
import {WizardPopupProvider} from '../wizard/ts/src/wizard-popup-provider';
import {EntityDetailProvider} from '../entity-detail/ts/src/entity-detail-provider';
import {ActionsServiceProvider} from './actions/actions-service-provider';


/**
 * Helper with common functions
 */
export class Helper {
    // Object to use in angular modules at runtime to define global variables.
    private static globalVar = {};

    // Controls the generation of a unique incremental number,
    // to be used as unique identifier by any feature instance ensuring that there is no duplication.
    private static uniqueIdCounter = 0;


    // Get an unique incremental number to be used as unique identifier
    public static getUniqueId(): number
    {
        return (Helper.uniqueIdCounter++);
    }

    /**
     * Get decimal configuration
     * @returns {{unit: {value: number, iterator: number}, total: {value: number, iterator: number}}}
     */
    public static getDecimalConf(): any
    {
        // Configure number of decimals to use and to round
        let decimalConf = {unit: {value: 4, iterator: 0}, total: {value: 2, iterator: 0}};

        decimalConf.unit.iterator = Math.pow(10, decimalConf.unit.value);
        decimalConf.total.iterator = Math.pow(10, decimalConf.total.value);

        return decimalConf;
    }

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
     * Var Count (count only is a reserved word)
     * @param variable
     * @returns {number}
     */
    public static varCount(variable: any): number
    {
        return Object.keys(variable || {}).length;
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
     * Set app var
     * @param index
     * @param value
     * @returns {Helper}
     */
    public static setAppVar(index: string, value: any): Helper
    {
        return Helper.setVar(_app, index, value);
    }

    /**
     * Get app var
     * @param index
     * @param defaultValue
     * @returns {any}
     */
    public static getAppVar(index: string, defaultValue = null): string
    {
        return Helper.getVar(_app, index, defaultValue);
    }

    /**
     * Delete app var
     * @param index
     * @param defaultValue
     * @returns {Helper}
     */
    public static deleteAppVar(index: string): Helper
    {
        return Helper.deleteVar(_app, index);
    }

    /**
     * Get data service provider
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
     * Get tree-view data service provider
     * @param data
     * @returns any
     */
    public static getTreeViewDataServiceProvider(data: any): any
    {
        return Helper.mergeObjects(
            Helper.getDataServiceProvider(data),
            {
                localParentField: (data.treeView.localParentField)
            }
        );
    }

    /**
     * Get tree-view provider
     * @param data
     * @returns any
     */
    public static getTreeViewProvider(data: any): any
    {
        if (data.treeView) {
            return Helper.mergeObjects(
                Helper.getDataBoxProvider(data),
                {
                    iconDefault: (data.treeView.iconDefault || null),
                    iconField: (data.treeView.iconField || null),
                    iconFieldMap: (data.treeView.iconFieldMap || {}),
                    parentTargetField: (data.treeView.parentTargetField || 'id')
                }
            );
        }

        return Helper.getDataBoxProvider(data);
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
            label: data.label || '',
            preventObjectOverride: true
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
     * Set global var
     * @param index
     * @param value
     * @returns {Helper}
     */
    public static setGlobalVar(index: string, value: any): Helper
    {
        return Helper.setVar(Helper.globalVar, index, value);
    }

    /**
     * Get global var
     * @param index
     * @param defaultValue
     * @returns {any}
     */
    public static getGlobalVar(index: string, defaultValue = null): string
    {
        return Helper.getVar(Helper.globalVar, index, defaultValue);
    }

    /**
     * Delete global var
     * @param index
     * @param defaultValue
     * @returns {Helper}
     */
    public static deleteGlobalVar(index: string): Helper
    {
        return Helper.deleteVar(Helper.globalVar, index);
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

    /**
     * Upper case first
     * @param string
     * @returns {string}
     */
    public static uCFirst(string: string) {
        return string.charAt(0).toUpperCase() + string.slice(1);
    }

    /**
     * Get var
     * @param object
     * @param index
     * @param defaultValue
     * @returns {any}
     */
    public static getVar(object: any, index: string, defaultValue = null): any
    {
        if (index in object) {
            return object[index];
        }
        return defaultValue;
    }

    /**
     * Set var
     * @param object
     * @param index
     * @param value
     * @returns {Helper}
     */
    public static setVar(object: any, index: string, value: any): Helper
    {
        object[index] = value;
        return Helper;
    }

    /**
     * Delete var
     * @param object
     * @param index
     * @returns {Helper}
     */
    public static deleteVar(object: any, index: string): Helper
    {
        if (index in object) {
            delete object[index];
        }
        return Helper;
    }

    /**
     * Set Form Token
     * @param $form
     * @returns {Helper}
     */
    public static setFormToken($form: any): Helper
    {
        let $tokenField = $form.find('#form__token');
        if ($tokenField) {
            $tokenField.val(_app.csrfToken);
        }
        return Helper;
    }

    /**
     * Get Status Map
     * @returns any
     */
    public static getStatusMap()
    {
        return {'NO': 'danger', 'PARTIAL': 'warning', 'YES': 'primary'};
    }
}