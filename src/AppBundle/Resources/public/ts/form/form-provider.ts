import {BaseProvider} from '../base/base-provider';

// Interface provider
export interface FormProvider extends BaseProvider {
    label: string,
    // Confirm object override by user to prevent data loss (when the object is changed in DataService)
    preventObjectOverride?: boolean
}