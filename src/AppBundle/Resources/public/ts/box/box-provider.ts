import {BaseProvider} from '../base/base-provider';
import {LegendProvider} from '../../legend/ts/src/legent-provider';

// Provider interface
export interface BoxProvider extends BaseProvider {
    label: string,
    controls: {
        expander: boolean,
        resizable: boolean,
        legend: LegendProvider
    }
}