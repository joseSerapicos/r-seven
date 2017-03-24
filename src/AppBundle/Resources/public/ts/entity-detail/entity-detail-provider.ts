import {BaseProvider} from '../base/base-provider';
import {Popup} from '../data-box/data-box.component';

// Provider interface
export interface EntityDetailProvider extends BaseProvider {
    popup: Popup
}