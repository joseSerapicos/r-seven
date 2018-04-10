import {BaseProvider} from '../../../ts/base/base-provider';

// Interface provider
export interface FileFormProvider extends BaseProvider {
    label?: string, // Only used in popup
    url: string
}