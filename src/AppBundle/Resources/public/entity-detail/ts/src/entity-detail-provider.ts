import {BaseProvider} from '../../../ts/base/base-provider';
import {Popup} from '../../../data-box/ts/src/data-box.component';

// Provider interface
export interface EntityDetailProvider extends BaseProvider {
    hasInsertInfo?: boolean // Determines if insert info is shown
}