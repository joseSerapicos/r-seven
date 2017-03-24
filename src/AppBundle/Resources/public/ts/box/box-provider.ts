import {BaseProvider} from '../base/base-provider';

// Provider interface
export interface BoxProvider extends BaseProvider {
    label: string,
    controls: {
        expander: boolean,
        resizable: boolean
    }
}