interface AppInterface {
  userRole: string,
  isDebug: boolean,
  csrfToken: string,
  route: string,
  modules: any,
  flashMessages: any,
  conf: {
    selectedMenu: {
      route: string,
      module: number,
      menu: number
    },
    label: string,
    fieldsChoices: any,
    fields: {
      view: string[],
      form: string[],
      metadata: any
    },
    route: any,
    search: {
      fields: any,
      criteria: any,
      orderBy: any,
      limit: number,
      offset: number
    },
    actions: any,
    objects?: any,
    object?: any,
    treeView?: any,
    extraData?: any,
    localData: any
  },
  templates: any,
  dependency: AppInterface
}

// Global varibles (defined in template/view)
declare var _app: AppInterface;

// JQuery plugin (required in template/view)
declare var $: any;

// Blueimp plugin (required in template/view)
declare var blueimp: any;

// Node
declare function require(path: string) : any;

/* SystemJS module definition. Created by angular cli new project */
declare var module: NodeModule;
interface NodeModule {
  id: string;
}