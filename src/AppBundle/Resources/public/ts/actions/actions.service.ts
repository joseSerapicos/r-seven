import {Injectable, Inject} from '@angular/core';
import {ActionsServiceProvider} from './actions-service-provider';

// Re-exports
export {ActionsServiceProvider};


@Injectable()
export class ActionsService {
    // Default actions values (you can use set and get methods to change defaults)
    // (this protected properties doesn't are prefixed by '_' for rapid and simple access by this[action])
    protected edit = {
        icon: 'fa-pencil',
        isEnabled: false
    };
    protected add = {
        icon: 'fa-plus',
        isEnabled: false
    };
    protected copy = {
        icon: 'fa-copy',
        isEnabled: false
    };
    protected email = {
        icon: 'fa-envelope-o',
        isEnabled: false
    };
    protected pdf = {
        icon: 'fa-file-pdf-o',
        isEnabled: false
    };
    protected thumbnail = {
        icon: 'fa-picture-o',
        isEnabled: false
    };
    protected avatar = {
        icon: 'fa-user',
        isEnabled: false
    };
    protected detail = {
        icon: 'fa-eye',
        isEnabled: false
    };
    protected cancel = {
        icon: 'fa-ban',
        isEnabled: false
    };
    protected delete = {
        icon: 'fa-trash-o',
        isEnabled: false
    };
    protected search = {
        icon: 'fa-search',
        isEnabled: false
    };
    protected refresh = {
        icon: 'fa-refresh',
        isEnabled: true
    };
    protected collapse = {
        isEnabled: false
    };
    protected deleteAll = {
        icon: 'fa-trash-o',
        isEnabled: false
    };
    protected radioChoice = {
        icon: null,
        isEnabled: false
    };
    protected checkAll = {
        icon: 'fa-check-square-o',
        isEnabled: false
    };
    protected orderUp = {
        icon: 'fa-angle-double-up',
        isEnabled: false
    };
    protected orderDown = {
        icon: 'fa-angle-double-down',
        isEnabled: false
    };

    // Default actions for massive objects
    protected _headActions: string[] = ['refresh', 'deleteAll', 'add', 'checkAll'];
    // Default actions for single object
    protected _detailActions: string[] = ['orderUp', 'orderDown', 'detail', 'email', 'pdf', 'thumbnail', 'avatar',
        'cancel', 'delete', 'copy', 'edit'];

    constructor(
        @Inject('ActionsServiceProvider') private _provider: ActionsServiceProvider
    ) {
        if(this._provider) {
            for (let action in this._provider) {
                switch (action) {
                    case 'order':
                        this['orderUp']['isEnabled'] = this._provider[action];
                        this['orderDown']['isEnabled'] = this._provider[action];
                        break;
                    default:
                        if (this[action]) {
                            this[action]['isEnabled'] = this._provider[action];
                        }
                }
            }
        }
    }

    /**
     * Get action attribute
     * @param action
     * @param attribute
     * @returns {any}
     */
    public getActionAttr(action: string, attribute: string)
    {
        if(this[action] && (attribute in this[action])) {
            return this[action][attribute];
        }
        return null;
    }

    /**
     * Get head actions (actions for objects head)
     * @returns {any}
     */
    public getHeadActions()
    {
        return this._headActions;
    }

    /**
     * Get detail actions (actions for objects detail)
     * @returns {any}
     */
    public getDetailActions()
    {
        return this._detailActions;
    }
}