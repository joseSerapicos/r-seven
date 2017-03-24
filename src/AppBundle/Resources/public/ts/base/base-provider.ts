// Provider interface
export interface BaseProvider {
    extraData?: {
        'class'?: string,
        [index: string]: any
    }
}