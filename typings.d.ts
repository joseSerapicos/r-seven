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
    fields: {
      view: string[],
      form: string[],
      metadata: any,
      choices: any
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
    'controls': {
      expander: boolean,
      legend: {
        'label': string,
        'class': string,
        'field': string,
        'expr': string
      }[]
    },
    objects?: any,
    object?: any,
    treeView?: any,
    extraData?: any,
    localData: any,
    language ?: any
  },
  templates: any,
  dependencies: AppInterface
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

// Paypal
declare var paypal: any;