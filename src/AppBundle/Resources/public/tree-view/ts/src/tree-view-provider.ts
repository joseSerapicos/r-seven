import {DataBoxProvider} from '../../../data-box/ts/src/data-box-provider';

// Provider interface
export interface TreeViewProvider extends DataBoxProvider {
    // Default icon to use when no mapping is available (ie: 'fa-guest')
    iconDefault?: string,
    // Field in object that represent the icon (ie: userRole => String<'user', 'admin', null>)
    iconField?: string,
    // Object that maps the values of iconField in valid icon names (ie: {user: 'fa-user', admin: 'fa-admin'})
    iconFieldMap?: any
    // Parent target field (of child foreign key). Field used as target in parent, by default is used the 'id')
    parentTargetField?: string
}