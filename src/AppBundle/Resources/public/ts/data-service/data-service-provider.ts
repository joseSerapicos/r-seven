// Interface (template for data object)
export interface Search {
    fields: any,
    criteria: any,
    orderBy: any,
    limit: number,
    offset: number,
    hasMore: boolean
}

// Provider interface
export interface DataServiceProvider {
    fieldsChoices: any,
    fields: {
        view: string[],
        form: string[],
        metadata: any
    },
    route: any,
    search: Search,
    object: any,
    objects: any,
    extraData: any,
    // Local specific custom data from controller
    localData: any,
    // Pin provider, tell to DataService to turning provider on an exclusive copy for it.
    // It's useful when you have multiple DataServices in the same injector, so you can have multiple
    // problems if you share the same DataServiceProvider between them.
    pin?: boolean
}