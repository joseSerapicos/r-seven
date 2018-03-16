import {BaseProvider} from '../../../ts/base/base-provider';

// Provider interface
export interface EntityDetailPreviewProvider extends BaseProvider {
    object: any,
    fields: any,
    fieldsChoices: any,
    dependencies?: [{
        label: string,
        objects: any,
        fields: any,
        fieldsChoices: any,
    }]
}