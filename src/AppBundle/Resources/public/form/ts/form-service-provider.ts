// Provider interface
// If defined overrides DataServiceProvider in FormService
export interface FormServiceProvider {
    fields?: string[],
    hasPreventObjectOverride?: boolean
}