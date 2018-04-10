import {BaseProvider} from '../../../ts/base/base-provider';
import {Popup} from '../../../data-box/ts/src/data-box.component';

// Provider interface
export interface EntityDetailProvider extends BaseProvider {
    popup: Popup
}