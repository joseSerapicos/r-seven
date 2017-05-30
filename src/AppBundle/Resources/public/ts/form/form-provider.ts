// Interface provider
export interface FormProvider {
    label: string,
    // Confirm object override by user to prevent data loss (when the object is changed in DataService)
    preventObjectOverride?: boolean
}