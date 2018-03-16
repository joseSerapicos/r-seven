// Provider interface
export interface BaseProvider {
    localData?: {
        'class'?: string,
        [index: string]: any
    },
    extraData?: {
        'class'?: string,
        [index: string]: any
    }
}