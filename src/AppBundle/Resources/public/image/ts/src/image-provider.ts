import {DataBoxProvider} from '../../../data-box/ts/src/data-box-provider';

// Provider interface
export interface ImageProvider extends DataBoxProvider {
    imageCropPopupModule: any,
    imageCropPopupComponent: string
}