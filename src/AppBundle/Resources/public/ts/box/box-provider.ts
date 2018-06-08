import {BaseProvider} from '../base/base-provider';
import {LegendProvider} from '../../legend/ts/src/legent-provider';

// Provider interface
export interface BoxProvider extends BaseProvider {
    label: string,
    labelCount?: number,
    labelIcon?: string,
    controls: {
        expander: {
            isEnabled: boolean,
            isExpanded: boolean
        },
        resizable: boolean,
        legend: LegendProvider
    }
}