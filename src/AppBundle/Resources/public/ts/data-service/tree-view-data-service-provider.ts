import {DataServiceProvider, Search} from './data-service-provider';

// Re-exports
export {Search};

// Provider interface
export interface TreeViewDataServiceProvider extends DataServiceProvider {
    // Local parent (foreign key) field. Uses in TreeViewDataService to update objects
    localParentField: string
}