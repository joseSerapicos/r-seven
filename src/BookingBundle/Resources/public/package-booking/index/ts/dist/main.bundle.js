webpackJsonp(["main"],{

/***/ "../../../../../angular_cli_conf/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
var environment = {
    production: false
};


/***/ }),

/***/ "../../../../../src/AppBundle/Resources/public/accordion/ts/src/accordion.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AccordionComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__AppBundle_Resources_public_ts_base_base_extension_component__ = __webpack_require__("../../../../../src/AppBundle/Resources/public/ts/base/base.extension-component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ts_nav_manager_nav_manager_service__ = __webpack_require__("../../../../../src/AppBundle/Resources/public/ts/nav-manager/nav-manager.service.ts");
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};



var AccordionComponent = (function (_super) {
    __extends(AccordionComponent, _super);
    function AccordionComponent(elementRef, renderer, provider, _helperService, _navManagerService) {
        var _this = _super.call(this) || this;
        _this._helperService = _helperService;
        _this._navManagerService = _navManagerService;
        _super.prototype.initBaseExtensionComponent.call(_this, elementRef, renderer, provider || {});
        return _this;
    }
    /**
     * Lifecycle callback
     */
    AccordionComponent.prototype.ngAfterViewInit = function () {
        // Initializes the children navigation manager service
        this._navManagerService.init(this, this.lazyLoadViewContainerRefQL);
        this._navManagerService.setHasToggleContainer(true);
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChildren */])('js_lazyLoadContainer', { read: __WEBPACK_IMPORTED_MODULE_0__angular_core__["_9" /* ViewContainerRef */] }),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["S" /* QueryList */])
    ], AccordionComponent.prototype, "lazyLoadViewContainerRefQL", void 0);
    AccordionComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'js_accordion',
            template: '' // Define template in child component
        }),
        __param(2, Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["M" /* Optional */])()), __param(2, Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["y" /* Inject */])('Provider')),
        __param(3, Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["y" /* Inject */])('HelperService')),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_core__["t" /* ElementRef */],
            __WEBPACK_IMPORTED_MODULE_0__angular_core__["U" /* Renderer */], Object, Object, __WEBPACK_IMPORTED_MODULE_2__ts_nav_manager_nav_manager_service__["a" /* NavManagerService */]])
    ], AccordionComponent);
    return AccordionComponent;
}(__WEBPACK_IMPORTED_MODULE_1__AppBundle_Resources_public_ts_base_base_extension_component__["a" /* BaseExtensionComponent */]));



/***/ }),

/***/ "../../../../../src/AppBundle/Resources/public/app-basics/default/ts/src/main.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MainComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ts_flash_message_service__ = __webpack_require__("../../../../../src/AppBundle/Resources/public/ts/flash-message.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var MainComponent = (function () {
    function MainComponent(_flashMessageService) {
        this._flashMessageService = _flashMessageService;
    }
    /**
     * Throw flash messages
     * @returns any
     */
    MainComponent.prototype.throwFlashMessages = function () {
        if (_app.flashMessages != null) {
            for (var _i = 0, _a = _app.flashMessages; _i < _a.length; _i++) {
                var flashMessage = _a[_i];
                this._flashMessageService.message(flashMessage.body, flashMessage.head, flashMessage.type);
            }
        }
        return this;
    };
    /**
     * Life cycle callback
     */
    MainComponent.prototype.ngOnInit = function () {
        this.throwFlashMessages();
        delete _app.flashMessages; // It's no longer necessary
    };
    MainComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: '.js_appBasics',
            template: ''
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__ts_flash_message_service__["a" /* FlashMessageService */]])
    ], MainComponent);
    return MainComponent;
}());



/***/ }),

/***/ "../../../../../src/AppBundle/Resources/public/app-basics/default/ts/src/main.ext-module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MainExtModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("../../../common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__main_component__ = __webpack_require__("../../../../../src/AppBundle/Resources/public/app-basics/default/ts/src/main.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var MainExtModule = (function () {
    function MainExtModule() {
    }
    MainExtModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["H" /* NgModule */])({
            imports: [__WEBPACK_IMPORTED_MODULE_1__angular_common__["a" /* CommonModule */]],
            declarations: [__WEBPACK_IMPORTED_MODULE_2__main_component__["a" /* MainComponent */]],
            exports: [__WEBPACK_IMPORTED_MODULE_2__main_component__["a" /* MainComponent */]]
        })
    ], MainExtModule);
    return MainExtModule;
}());



/***/ }),

/***/ "../../../../../src/AppBundle/Resources/public/data-box/ts/src/data-box.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export DataBoxComponent */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__data_box_extension_component__ = __webpack_require__("../../../../../src/AppBundle/Resources/public/data-box/ts/src/data-box.extension-component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__modal_ts_modal_service__ = __webpack_require__("../../../../../src/AppBundle/Resources/public/modal/ts/modal.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ts_actions_actions_service__ = __webpack_require__("../../../../../src/AppBundle/Resources/public/ts/actions/actions.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__AppBundle_Resources_public_tasks_loader_manager_ts_tasks_loader_manager_service__ = __webpack_require__("../../../../../src/AppBundle/Resources/public/tasks-loader-manager/ts/tasks-loader-manager.service.ts");
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_1__data_box_extension_component__["b"]; });
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};





// Reexports

// Component
var DataBoxComponent = (function (_super) {
    __extends(DataBoxComponent, _super);
    function DataBoxComponent(viewContainerRef, renderer, provider, dataService, tasksLoaderManagerService, helperService, actionsService, modalService, popups, injector) {
        var _this = 
        // Call parent
        _super.call(this) || this;
        _super.prototype.initDataBoxExtensionComponent.call(_this, viewContainerRef, renderer, provider, dataService, tasksLoaderManagerService, helperService, actionsService, modalService, popups, injector);
        return _this;
    }
    DataBoxComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: '.js_dataBox',
            template: __webpack_require__("../../../../../src/AppBundle/Resources/public/data-box/ts/templates/data-box.component.html")
        }),
        __param(2, Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["y" /* Inject */])('Provider')),
        __param(3, Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["y" /* Inject */])('DataService')),
        __param(5, Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["y" /* Inject */])('HelperService')),
        __param(8, Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["y" /* Inject */])('Popups')),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_core__["_9" /* ViewContainerRef */],
            __WEBPACK_IMPORTED_MODULE_0__angular_core__["U" /* Renderer */], Object, Object, __WEBPACK_IMPORTED_MODULE_4__AppBundle_Resources_public_tasks_loader_manager_ts_tasks_loader_manager_service__["a" /* TasksLoaderManagerService */], Object, __WEBPACK_IMPORTED_MODULE_3__ts_actions_actions_service__["a" /* ActionsService */],
            __WEBPACK_IMPORTED_MODULE_2__modal_ts_modal_service__["b" /* ModalService */], Object, __WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Injector */]])
    ], DataBoxComponent);
    return DataBoxComponent;
}(__WEBPACK_IMPORTED_MODULE_1__data_box_extension_component__["a" /* DataBoxExtensionComponent */]));



/***/ }),

/***/ "../../../../../src/AppBundle/Resources/public/data-box/ts/src/data-box.extension-component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return PopupTypes; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DataBoxExtensionComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ts_data_service_data_service__ = __webpack_require__("../../../../../src/AppBundle/Resources/public/ts/data-service/data.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ts_box_box_extension_component__ = __webpack_require__("../../../../../src/AppBundle/Resources/public/ts/box/box.extension-component.ts");
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



// Popup Types
var PopupTypes = {
    edit: 'edit',
    add: 'add'
};
// Component
var DataBoxExtensionComponent = (function (_super) {
    __extends(DataBoxExtensionComponent, _super);
    function DataBoxExtensionComponent() {
        var _this = _super.call(this) || this;
        _this.checkAll = false; // Control check all action
        return _this;
    }
    /**
     * Initialization of component (replace the original constructor to avoid angular injection inheritance bug)
     * @param viewContainerRef
     * @param renderer
     * @param provider
     * @param dataService
     * @param tasksLoaderManagerService
     * @param actionsService
     * @param modalService
     * @param popups
     * @param injector
     */
    DataBoxExtensionComponent.prototype.initDataBoxExtensionComponent = function (viewContainerRef, renderer, provider, dataService, // Any is used, otherwise you get an error "[Class] is not defined"
        tasksLoaderManagerService, helperService, actionsService, modalService, 
        // You can provide a popup by action:
        // provide('Popups', {useValue: {
        //     add: Popup,
        //     edit: Popup
        // }})
        // Or a general popup for all actions:
        // provide('Popups', {useValue: Popup})
        popups, // Can be a list of popups by action, or only a popup
        // used to provide the correct injector to the popups
        injector) {
        // Parent init (construct)
        _super.prototype.initBoxExtensionComponent.call(this, viewContainerRef.element, renderer, provider);
        // Constructor vars
        this._viewContainerRef = viewContainerRef;
        this._dataService = dataService;
        this._tasksLoaderManagerService = tasksLoaderManagerService;
        this._helperService = helperService;
        this._actionsService = actionsService;
        this._modalService = modalService;
        this._popups = popups;
        this._injector = injector;
        this._modalService.init(this._viewContainerRef);
    };
    /**
     * Get column alignment.
     * @param field
     * @returns {any}
     */
    DataBoxExtensionComponent.prototype.getColAlign = function (field) {
        // @TODO call helperservice
        // return this.helperService.getColAlign(this._dataService.getFields('metadata')[field]['type']);
        switch (this._dataService.getFields('metadata')[field].type) {
            case 'number':
            case 'percentage':
            case 'monetary':
            case 'date':
            case 'datetime':
                return 'text-right';
            case 'boolean':
            case 'icon':
            case 'img':
            case 'status':
                return 'text-center';
            default:
                return 'text-left';
        }
    };
    /**
     * Get legend classes
     * @param object
     * @returns {string}
     */
    DataBoxExtensionComponent.prototype.getLegendClasses = function (object) {
        var legend = this._provider['controls']['legend'], hasClass;
        if (!object || !legend) {
            return '';
        }
        for (var _i = 0, legend_1 = legend; _i < legend_1.length; _i++) {
            var legendControl = legend_1[_i];
            hasClass = false;
            var field = legendControl['field'], expr = (legendControl['expr'] || 'notNull'), isExprNotNull = (expr == 'notNull'), 
            // Check in original field first if defined
            fieldValue = ((object['__' + field] !== undefined) ? object['__' + field] : object[field]);
            // Normalize value
            if (this._dataService.getFields('metadata')[field]) {
                switch (this._dataService.getFields('metadata')[field].type) {
                    case 'boolean':
                        fieldValue = this._helperService.castToBoolean(fieldValue);
                        break;
                }
            }
            if ((fieldValue && isExprNotNull) || (!fieldValue && !isExprNotNull)) {
                // Apply only the class of the first legend to avoid override of classes,
                // "Cancel" legend class should be priority and never override
                return legendControl['class'];
            }
        }
        return '';
    };
    /**
     * Trigger action
     * @param $event
     * @param action (can be provided by $event or directly in the call)
     * @param data (can be provided by $event or directly in the call)
     */
    DataBoxExtensionComponent.prototype.triggerAction = function ($event, action, data) {
        if (action === void 0) { action = null; }
        if (data === void 0) { data = null; }
        if ($event) {
            $event.preventDefault();
        }
        // Action to call
        action = (action || $event.target.getAttribute("data-action"));
        if (action) {
            // Data to send as parameter to action
            if (data == null) {
                data = ($event.target.getAttribute("data-value"));
            }
            // Call function
            var callback = (action + 'Action');
            if ($.isFunction(this[callback])) {
                if ((data != null) && (typeof data != 'undefined')) {
                    this[callback]($event, data);
                }
                else {
                    this[callback]($event);
                }
            }
        }
    };
    /**
     * Edit action
     * @param $event
     * @param data
     */
    DataBoxExtensionComponent.prototype.editAction = function ($event, data) {
        if ($event) {
            $event.preventDefault();
        }
        // Check ACL
        if (!this._actionsService.getActionAttr('edit', 'isEnabled')) {
            return;
        }
        var that = this;
        this._dataService.selectObject(data).then(function (data) { that.openPopup(PopupTypes.edit); }, function (errors) { console.log(errors); });
    };
    /**
     * Add action
     * @param $event
     */
    DataBoxExtensionComponent.prototype.addAction = function ($event) {
        if ($event === void 0) { $event = null; }
        if ($event) {
            $event.preventDefault();
        }
        var that = this;
        this._dataService.newObject().then(function (data) { that.openPopup(PopupTypes.add); }, function (errors) { console.log(errors); });
    };
    /**
     * Copy action. Create a new object from another object
     * @param $event
     * @param data
     */
    DataBoxExtensionComponent.prototype.copyAction = function ($event, data) {
        if ($event === void 0) { $event = null; }
        if ($event) {
            $event.preventDefault();
        }
        var that = this;
        this._dataService.newObject(data).then(function (data) { that.openPopup(PopupTypes.edit); }, function (errors) { console.log(errors); });
    };
    /**
     * Cancel action.
     * @param $event
     * @param data
     */
    DataBoxExtensionComponent.prototype.cancelAction = function ($event, data) {
        if ($event) {
            $event.preventDefault();
        }
        var that = this, object = this._dataService.getObject(data);
        // Dialog message
        this._modalService.dialog('Are you sure to cancel/enable?').then(function (hasConfirm) {
            if (hasConfirm) {
                that._dataService.cancel(data).then(function (data) {
                    that.postCancelObject(object);
                    return;
                }, function (errors) { return; });
            }
            else {
                return;
            }
        }, function (errors) {
            console.log(errors);
        });
    };
    /**
     * Delete action.
     * @param $event
     * @param data
     */
    DataBoxExtensionComponent.prototype.deleteAction = function ($event, data) {
        if ($event) {
            $event.preventDefault();
        }
        var that = this, object = this._dataService.getObject(data);
        // Dialog message
        this._modalService.dialog('Are you sure to remove?').then(function (hasConfirm) {
            if (hasConfirm) {
                that._dataService.delete(data).then(function (data) {
                    that.postDeleteObject(object);
                    return;
                }, function (errors) { return; });
            }
            else {
                return;
            }
        }, function (errors) {
            console.log(errors);
        });
    };
    /**
     * Order up action.
     * @param $event
     * @param data
     */
    DataBoxExtensionComponent.prototype.orderUpAction = function ($event, data) {
        if ($event) {
            $event.preventDefault();
        }
        this._dataService.order(data, __WEBPACK_IMPORTED_MODULE_1__ts_data_service_data_service__["b" /* OrderTypes */].up);
    };
    /**
     * Order down action.
     * @param $event
     * @param data
     */
    DataBoxExtensionComponent.prototype.orderDownAction = function ($event, data) {
        if ($event) {
            $event.preventDefault();
        }
        this._dataService.order(data, __WEBPACK_IMPORTED_MODULE_1__ts_data_service_data_service__["b" /* OrderTypes */].down);
    };
    /**
     * Delete all checked elements action.
     * @param $event
     */
    DataBoxExtensionComponent.prototype.deleteAllAction = function ($event) {
        var _this = this;
        if (!$event) {
            return;
        }
        $event.preventDefault();
        var $form = $($event.currentTarget).parents('.ibox').find('.ibox-content form');
        var data = $form.serializeArray();
        if (data.length) {
            // Dialog message
            this._modalService.dialog().then(function (hasConfirm) {
                if (hasConfirm) {
                    _this._dataService.deleteArray(data);
                }
                else {
                    return;
                }
            }, function (errors) {
                console.log(errors);
            });
        }
    };
    /**
     * Submit choices
     * @param route (route to submit choices)
     * @param allowEmptySubmit (allow submit when data is empty,
     * some cases it is necessary to inform that the user does not select any choice)
     * @returns {Promise}
     */
    DataBoxExtensionComponent.prototype.submitChoices = function (route, allowEmptySubmit) {
        if (allowEmptySubmit === void 0) { allowEmptySubmit = false; }
        var $form = $(this._elementRef.nativeElement).find('.ibox-content form'), data = $form.serializeArray(), that = this;
        return new Promise(function (resolve, reject) {
            return that._dataService.submitIndexesId(route, data, allowEmptySubmit).then(function (data) { return resolve(data); }, function (errors) { return reject(errors); });
        });
    };
    /**
     * Detail action.
     * @param $event
     * @param data
     */
    DataBoxExtensionComponent.prototype.detailAction = function ($event, data) {
        if ($event) {
            $event.preventDefault();
        }
        this._dataService.detail(data);
    };
    /**
     * Check all action.
     * @param $event
     */
    DataBoxExtensionComponent.prototype.checkAllAction = function ($event) {
        if ($event === void 0) { $event = null; }
        if ($event) {
            $event.preventDefault();
        }
        this.checkAll = !this.checkAll;
    };
    /**
     * Refresh all objects list.
     * @param $event
     */
    DataBoxExtensionComponent.prototype.refreshAction = function ($event) {
        if ($event === void 0) { $event = null; }
        if ($event) {
            $event.preventDefault();
        }
        this._dataService.refresh();
    };
    /**
     * Open popup
     * @param popupType
     * @returns {DataBoxExtensionComponent}
     */
    DataBoxExtensionComponent.prototype.openPopup = function (popupType) {
        if (popupType === void 0) { popupType = PopupTypes.edit; }
        // Set edit as default popup type if is not a valid entry
        popupType = (PopupTypes[popupType] || PopupTypes.edit);
        var popup = this._popups[popupType] || this._popups;
        // Open popup
        this._modalService.popup(popup, this._injector).then(function (data) { return; }, function (errors) { console.log(errors); return; });
        return this;
    };
    ////////
    // Events/Callbacks
    ////////////////////////////////
    /**
     * Post (after) cancel object event. Use this function to handle event.
     * @param object
     * @returns {DataBoxExtensionComponent}
     */
    DataBoxExtensionComponent.prototype.postCancelObject = function (object) {
        return this;
    };
    /**
     * Post (after) delete object event. Use this function to handle event.
     * @param object
     * @return any
     */
    DataBoxExtensionComponent.prototype.postDeleteObject = function (object) {
        return this;
    };
    DataBoxExtensionComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: '.js_dataBox',
            template: ''
        }),
        __metadata("design:paramtypes", [])
    ], DataBoxExtensionComponent);
    return DataBoxExtensionComponent;
}(__WEBPACK_IMPORTED_MODULE_2__ts_box_box_extension_component__["a" /* BoxExtensionComponent */]));



/***/ }),

/***/ "../../../../../src/AppBundle/Resources/public/data-box/ts/templates/data-box.component.html":
/***/ (function(module, exports) {

module.exports = "\n\n<div class=\"ibox\" >\n                        <div class=\"ibox-title\" *ngIf=\"!getProviderExtraDataAttr('hasMergeHeader')\">\n                <h5>\n                    <ng-template [ngIf]=\"getProviderAttr('controls')['expander']\"><js_expander\n                        [isExpanded]=\"_isExpanded || null\"\n                        [label]=\"getProviderAttr('label')\"\n                        (onChange)=\"expanderAction($event)\"></js_expander></ng-template>\n                    <ng-template [ngIf]=\"!getProviderAttr('controls')['expander']\">\n                        <span [innerHTML]=\"getProviderAttr('label')\"></span>\n                    </ng-template>\n                </h5>\n                <div *ngIf=\"_isExpanded\"\n                     class=\"txt-align-r hide-on-empty\">    <div class=\"row align-items-center\">\n        <div class=\"col ml-auto text-right actions no-user-select\">\n            <ng-template [ngIf]=\"_actionsService.getActionAttr('search', 'isEnabled')\"><js_search class=\"search\"></js_search></ng-template>\n            <div (click)=\"triggerAction($event)\">\n                <ng-template ngFor let-action [ngForOf]=\"_actionsService.getHeadActions()\">\n                    <a *ngIf=\"_actionsService.getActionAttr(action, 'isEnabled')\"\n                       [ngClass]=\"[_actionsService.getActionAttr(action, 'icon')]\"\n                       class=\"-round fa\"\n                       [attr.data-action]=\"action\"></a>\n                </ng-template>\n            </div>\n        </div>\n    </div>\n</div>\n            </div>\n            \n    <div [hidden]=\"!(_isExpanded)\" class=\"ibox-content hide-on-empty\">    <ng-template [ngIf]=\"(_dataService.getProviderAttr('objects') && _dataService.getProviderAttr('objects')[0])\">\n        <div class=\"table-responsive\">\n        <form>        <table class=\"data-table table table-hover dataTables-example table-bordered\">\n            <thead>\n            <tr>\n                <th *ngFor=\"let searchField of _dataService.getSearch('fields')\">{{ _dataService.getFields('metadata')[searchField].label }}</th>\n                <th>&nbsp;</th>\n            </tr>\n            </thead>            <tbody>\n            <ng-template ngFor let-obj [ngForOf]=\"_dataService.getProviderAttr('objects')\" let-objIndex=\"index\">\n            <tr (dblclick)=\"editAction($event, objIndex)\"                [ngClass]=\"getLegendClasses(obj)\">\n                                    <td *ngFor=\"let searchField of _dataService.getSearch('fields')\"\n                        [ngClass]=\"getColAlign(searchField)\"\n                        [innerHTML]=\"obj[searchField]\"></td>\n                                <td>\n                    <span *ngIf=\"obj['_isNew']\" class=\"badge badge-info\">New</span>\n                    <span *ngIf=\"obj['_isEdited']\" class=\"badge badge-info\">Edited</span>\n                    <input *ngIf=\"_actionsService.getActionAttr('radioChoice', 'isEnabled')\"\n                           class=\"pull-right action\"\n                           type=\"radio\"\n                           name=\"index[]\"\n                           value=\"{{objIndex}}\"/>\n                    <input *ngIf=\"_actionsService.getActionAttr('checkAll', 'isEnabled')\"\n                           class=\"pull-right action js_checkAll\"\n                           type=\"checkbox\"\n                           name=\"index[]\"\n                           value=\"{{objIndex}}\"\n                           [ngModel]=\"checkAll\"/>\n                    <div class=\"pull-right actions no-user-select text-secondary\" (click)=\"triggerAction($event)\">\n                        <ng-template ngFor let-action [ngForOf]=\"_actionsService.getDetailActions()\">\n                            <a *ngIf=\"_actionsService.getActionAttr(action, 'isEnabled')\"\n                               [ngClass]=\"[_actionsService.getActionAttr(action, 'icon')]\"\n                               class=\"fa\"\n                               [attr.data-action]=\"action\"\n                               [attr.data-value]=\"objIndex\"></a>\n                        </ng-template>\n                    </div>\n                </td>            </tr>\n            </ng-template>\n            </tbody>\n        </table>\n        </form>    </div>\n    </ng-template><p\n        class=\"text-center\"\n        *ngIf=\"!(_dataService.getProviderAttr('objects') && _dataService.getProviderAttr('objects')[0])\">No results.</p>\n</div>\n        <div class=\"ibox-footer\"\n         *ngIf=\"_dataService.countObjects() > 0\"><js_searchPagination></js_searchPagination></div>\n\n</div>\n\n<js_legend></js_legend>"

/***/ }),

/***/ "../../../../../src/AppBundle/Resources/public/entity-detail/ts/src/entity-detail-preview.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EntityDetailPreviewComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ts_base_base_extension_component__ = __webpack_require__("../../../../../src/AppBundle/Resources/public/ts/base/base.extension-component.ts");
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};


var EntityDetailPreviewComponent = (function (_super) {
    __extends(EntityDetailPreviewComponent, _super);
    function EntityDetailPreviewComponent(elementRef, renderer, provider, _dataService, // Only used to normalize objects to view
        _helperService) {
        var _this = _super.call(this) || this;
        _this._dataService = _dataService;
        _this._helperService = _helperService;
        _super.prototype.initBaseExtensionComponent.call(_this, elementRef, renderer, provider);
        _this.init(_this._provider);
        return _this;
    }
    /**
     * Initialize data
     * @param data
     */
    EntityDetailPreviewComponent.prototype.init = function (data) {
        this._provider = this._helperService.mergeObjects(this._provider, data);
        this._fields = this._provider.fields;
        this._object = this._provider.object;
        this._dataService.normalizeObjectsToTemplate([this._object], this._fields['view'], this._fields['metadata'], this._provider['fields']['choices']);
        this._dependenciesArr = [];
        this._dependencies = (this._provider.dependencies || null);
        if (this._dependencies) {
            for (var dependency in this._dependencies) {
                this._dependenciesArr.push(dependency);
                this._dataService.normalizeObjectsToTemplate(this._dependencies[dependency]['objects'], this._dependencies[dependency]['fields']['view'], this._dependencies[dependency]['fields']['metadata'], this._dependencies[dependency]['fields']['choices']);
            }
        }
    };
    EntityDetailPreviewComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: '#js_entityDetailPreview',
            template: __webpack_require__("../../../../../src/AppBundle/Resources/public/entity-detail/ts/templates/entity-detail-preview.component.html")
        }),
        __param(2, Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["y" /* Inject */])('Provider')),
        __param(3, Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["y" /* Inject */])('DataService')),
        __param(4, Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["y" /* Inject */])('HelperService')),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_core__["t" /* ElementRef */],
            __WEBPACK_IMPORTED_MODULE_0__angular_core__["U" /* Renderer */], Object, Object, Object])
    ], EntityDetailPreviewComponent);
    return EntityDetailPreviewComponent;
}(__WEBPACK_IMPORTED_MODULE_1__ts_base_base_extension_component__["a" /* BaseExtensionComponent */]));



/***/ }),

/***/ "../../../../../src/AppBundle/Resources/public/entity-detail/ts/templates/entity-detail-preview.component.html":
/***/ (function(module, exports) {

module.exports = "<ng-template [ngIf]=\"_object && _object['id']\">\n    <div class=\"container-fluid py-3\"><div class=\"row\">\n        <div class=\"col col-md-12\">\n            <div class=\"row\">\n                <h2 class=\"col-12 valign-div-container\" *ngIf=\"!_object['_isSessionStorage']\"><span [innerHTML]=\"_object['code'] || _object['id']\"></span><span *ngIf=\"_object['name']\">&nbsp;&nbsp;@&nbsp;&nbsp;{{ _object['name'] }}</span></h2>\n            </div>\n            <div class=\"row\">\n                <ng-template ngFor let-field [ngForOf]=\"_fields['view']\">\n                    <div class=\"col col-md-6\"\n                         *ngIf=\"!_helperService.inArray(field, ['id', 'code', 'name', 'isEnabled', 'insertTime', 'insertUser']) && _object[field]\">\n                        <p *ngIf=\"_helperService.inArray(_fields['metadata'][field]['type'], ['number', 'percentage', 'monetary', 'icon'])\"><strong>{{ _fields['metadata'][field]['label'] }}</strong>:&nbsp;<span [innerHTML]=\"_object[field]\"></span></p>\n                        <p *ngIf=\"_helperService.inArray(_fields['metadata'][field]['type'], ['boolean', 'status'])\"><span [innerHTML]=\"_object[field]\"></span>&nbsp;<strong>{{ _fields['metadata'][field]['label'] }}</strong></p>\n                        <p *ngIf=\"_helperService.inArray(_fields['metadata'][field]['type'], ['avatar', 'img'])\"><span [innerHTML]=\"_object[field]\"></span></p>\n                        <p *ngIf=\"!_helperService.inArray(_fields['metadata'][field]['type'], ['number', 'percentage', 'monetary', 'status', 'icon', 'boolean', 'avatar', 'img'])\"><strong>{{ _fields['metadata'][field]['label'] }}</strong><br/><span [innerHTML]=\"_object[field]\"></span></p>\n                    </div>\n                </ng-template>\n            </div>\n        </div>\n            </div></div>\n</ng-template>\n    <div class=\"table-responsive\" *ngFor=\"let dependency of _dependenciesArr\">\n        <h5 class=\"m-t-md\" [innerHTML]=\"_dependencies[dependency].label\"></h5>\n        <table class=\"data-table table table-striped table-hover dataTables-example table-bordered\">\n            <thead>\n            <tr>\n                <th *ngFor=\"let field of _dependencies[dependency].fields['view']\">{{ _dependencies[dependency].fields.metadata[field].label }}</th>\n            </tr>\n            </thead>\n            <tbody>\n            <ng-template ngFor let-obj [ngForOf]=\"_dependencies[dependency].objects\" let-index=\"index\">\n                <tr>\n                    <td *ngFor=\"let field of _dependencies[dependency].fields['view']\"\n                        [ngClass]=\"_helperService.getColAlign(_dependencies[dependency].fields['metadata'][field]['type'])\"\n                        [innerHTML]=\"obj[field]\"></td>\n                </tr>\n            </ng-template>\n            </tbody>\n        </table>\n    </div>\n"

/***/ }),

/***/ "../../../../../src/AppBundle/Resources/public/form/ts/field-types/field-type-auto-complete.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FieldTypeAutoCompleteComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ts_data_service_data_service__ = __webpack_require__("../../../../../src/AppBundle/Resources/public/ts/data-service/data.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__modal_ts_modal_service__ = __webpack_require__("../../../../../src/AppBundle/Resources/public/modal/ts/modal.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ts_post_service__ = __webpack_require__("../../../../../src/AppBundle/Resources/public/ts/post.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__form_service__ = __webpack_require__("../../../../../src/AppBundle/Resources/public/form/ts/form.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__data_box_ts_src_data_box_component__ = __webpack_require__("../../../../../src/AppBundle/Resources/public/data-box/ts/src/data-box.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__AppBundle_Resources_public_tasks_loader_manager_ts_tasks_loader_manager_service__ = __webpack_require__("../../../../../src/AppBundle/Resources/public/tasks-loader-manager/ts/tasks-loader-manager.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};







var FieldTypeAutoCompleteComponent = (function () {
    function FieldTypeAutoCompleteComponent(_postService, _modalService, _dataService, _tasksLoaderManagerService, _formService, _injector, _autoCompleteProviders, _helperService) {
        var _this = this;
        this._postService = _postService;
        this._modalService = _modalService;
        this._dataService = _dataService;
        this._tasksLoaderManagerService = _tasksLoaderManagerService;
        this._formService = _formService;
        this._injector = _injector;
        this._autoCompleteProviders = _autoCompleteProviders;
        this._helperService = _helperService;
        this.placeholder = ''; // Set empty as default, because value can be undefined
        this.onChange = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["v" /* EventEmitter */](); // When choice change or the data of current choice is edited
        this._isHidden = true;
        this._lastSelectedChoice = { id: null, label: '' };
        this._choices = [];
        this._search = { term: '', lastTerm: null };
        this._searchField = 'name';
        this._childCandidateSearch = null;
        // Object change event subscription
        this._onObjectChangeSubscription = this._formService.getOnObjectChangeEmitter()
            .subscribe(function (object) { return _this.reset(); });
    }
    /**
     * Reset object
     * @returns {FieldTypeAutoCompleteComponent}
     */
    FieldTypeAutoCompleteComponent.prototype.reset = function () {
        // Clear choices (can be from old object)
        if (this._childDataServiceChoices) {
            this._childDataServiceChoices.setObjects([]);
            this.resetChoices();
        }
        this._object = this._formService.getObject();
        var value = this._object[this.field], normalizedValue = '';
        if (value) {
            normalizedValue = ((this._fieldInView
                && this._dataService.getNormalizedObject()
                && this._dataService.getNormalizedObject()[this._fieldInView])
                ? this._dataService.getNormalizedObject()[this._fieldInView]
                : value);
        }
        this._lastSelectedChoice = { id: value, label: normalizedValue };
        this.setLabel();
        this.setControlMode();
        return this;
    };
    /**
     * Reset choices
     * @returns {FieldTypeAutoCompleteComponent}
     */
    FieldTypeAutoCompleteComponent.prototype.resetChoices = function () {
        this._choices = (this._childDataServiceChoices.getProviderAttr('objects') || []);
        this._isHidden = !this.hasChoices();
        return this;
    };
    /**
     * Host event
     * @param $event
     */
    FieldTypeAutoCompleteComponent.prototype.onDocumentClick = function ($event) {
        this._isHidden = true;
    };
    /**
     * onInputClick event (when enter in input).
     * @param $event
     */
    FieldTypeAutoCompleteComponent.prototype.onInputClick = function ($event) {
        $event.preventDefault();
        $event.stopPropagation();
        this._object[this.field] = null;
        this._isHidden = !this.hasChoices();
        this.setLabel();
        this.setControlMode();
    };
    /**
     * On enter key (pagination)
     * @param $event
     */
    FieldTypeAutoCompleteComponent.prototype.onEnterKey = function ($event) {
        this._search.term = $event.target.value;
        if ((this._search.term != this._search.lastTerm)
            && (this._search.term.length % 3 === 0) // Only submit with multiples of three
        ) {
            this._childCandidateSearch['criteria'] = [{
                    'field': this._searchField,
                    'expr': 'lrlike',
                    'value': this._search.term
                }];
            this._childDataServiceChoices.choices();
            this._search.lastTerm = this._search.term;
        }
    };
    /**
     * onControlClick (arrow of select control)
     * @param $event
     */
    FieldTypeAutoCompleteComponent.prototype.onControlClick = function ($event) {
        $event.preventDefault();
        $event.stopPropagation();
        if (this.hasChoices()) {
            this._isHidden = !this._isHidden;
        }
        else {
            this._childDataServiceChoices.choices();
        }
    };
    /**
     * onChoiceClick event
     * @param $event
     */
    FieldTypeAutoCompleteComponent.prototype.onChoiceClick = function ($event) {
        $event.preventDefault();
        var $target = $($event.target), choiceIndex = $target.data('index');
        if (typeof choiceIndex != 'undefined') {
            var choice = this._choices[choiceIndex];
            if (choice && (this._object[this.field] != choice['id'])) {
                this._object[this.field] = choice['id'];
                this._lastSelectedChoice = { id: choice.id, label: $target.text() }; // $target.text() to work with html choices
                this.setLabel();
                this.setControlMode();
                this.onChange.emit(choice['id']);
            }
        }
    };
    /**
     * Get more objects (pagination)
     * @param $event
     */
    FieldTypeAutoCompleteComponent.prototype.getMoreObjects = function ($event) {
        $event.preventDefault();
        $event.stopPropagation();
        this._childDataServiceChoices.choices();
    };
    /**
     * Trigger action
     * @param $event
     */
    FieldTypeAutoCompleteComponent.prototype.triggerAction = function ($event) {
        if ($event === void 0) { $event = null; }
        if ($event) {
            $event.preventDefault();
        }
        switch (this._controlMode) {
            case 'save':
                this._formService.saveAndNewAction(); // Save and add a new object
                break;
            case 'edit':
            case 'add':
                this.openPopup(this._controlMode);
                break;
        }
    };
    /**
     * Open popup
     * @param popupType
     * @returns {FieldTypeAutoCompleteComponent}
     */
    FieldTypeAutoCompleteComponent.prototype.openPopup = function (popupType) {
        var _this = this;
        if (popupType === void 0) { popupType = __WEBPACK_IMPORTED_MODULE_5__data_box_ts_src_data_box_component__["a" /* PopupTypes */].edit; }
        var that = this;
        // Inject object to edit in child DataService
        if (this._lastSelectedChoice.id) {
            // Simulate object
            var object = { id: this._lastSelectedChoice.id };
            // Set object to null to avoid emit the event "_onChildObjectChangeSubscription"
            this._childDataServicePopup.setObject({}, null);
            this._childDataServicePopup.setObjects([object]);
            this._childDataServicePopup.selectObject(0).then(function (data) {
                that.loadPopup(popupType);
                return _this;
            }, function (errors) { console.log(errors); return _this; });
        }
        else {
            // Create a new object in child DataService
            this._childDataServicePopup.newObject().then(function (data) { that.loadPopup(popupType); return _this; }, function (errors) { console.log(errors); return _this; });
        }
        return this;
    };
    /**
     * Load popup
     * @param popupType
     * @returns {FieldTypeAutoCompleteComponent}
     */
    FieldTypeAutoCompleteComponent.prototype.loadPopup = function (popupType) {
        if (popupType === void 0) { popupType = __WEBPACK_IMPORTED_MODULE_5__data_box_ts_src_data_box_component__["a" /* PopupTypes */].edit; }
        popupType = (__WEBPACK_IMPORTED_MODULE_5__data_box_ts_src_data_box_component__["a" /* PopupTypes */][popupType] || __WEBPACK_IMPORTED_MODULE_5__data_box_ts_src_data_box_component__["a" /* PopupTypes */].edit);
        var popup = (this._provider.popups[popupType] || this._provider.popups);
        this._modalService.popup(popup, this._childInjector).then(function (data) { return; }, function (errors) { console.log(errors); return; });
        return this;
    };
    /**
     * Set control mode
     * @returns {FieldTypeAutoCompleteComponent}
     */
    FieldTypeAutoCompleteComponent.prototype.setControlMode = function () {
        switch (this._provider.control) {
            case 'edit':
                if (this._object[this.field]) {
                    this._controlMode = 'edit';
                }
                else {
                    this._controlMode = 'add';
                }
                break;
            case 'save':
                this._controlMode = this._provider.control;
                break;
            default:
                this._controlMode = null;
        }
        return this;
    };
    /**
     * Set input label
     * @returns {FieldTypeAutoCompleteComponent}
     */
    FieldTypeAutoCompleteComponent.prototype.setLabel = function () {
        if (this._object[this.field] == this._lastSelectedChoice['id']) {
            this._label = this._lastSelectedChoice['label'];
        }
        else {
            this._label = this._search.term;
        }
        return this;
    };
    /**
     * check if has choices
     * @returns {any|boolean}
     */
    FieldTypeAutoCompleteComponent.prototype.hasChoices = function () {
        return (this._choices && (this._choices.length > 0));
    };
    /**
     * Lifecycle callback
     */
    FieldTypeAutoCompleteComponent.prototype.ngOnInit = function () {
        // Enable load while component initializes, to avoid use the component before init has finished causing errors
        this._tasksLoaderManagerService.addTask('INIT_AUTO_COMPLETE');
        // Initialize values
        this._provider = (this._autoCompleteProviders[this.field] || null);
        if (this._provider.field) {
            this._searchField = this._provider.field;
        }
        this._fieldInView = (this._dataService.getProviderAttr('fields')['metadata'][this.field]['fieldInView'] || null);
        this.reset();
        // Dependency conf previously saved in provider
        if (this._provider.childInjector) {
            this._childInjector = this._provider.childInjector;
            this.init();
            this._tasksLoaderManagerService.delTask('INIT_AUTO_COMPLETE');
            return;
        }
        // Dependency conf for first time
        var that = this;
        that._postService.post(this._provider.urlConf, null).then(function (data) {
            // Notice that both DataService share the same DataServiceProvider! It needs to be fixed.
            var dataServiceProvider = that._helperService.getDataServiceProvider(data);
            dataServiceProvider['pin'] = true;
            // Set child injector
            var resolvedProviders = __WEBPACK_IMPORTED_MODULE_0__angular_core__["T" /* ReflectiveInjector */].resolve([
                { provide: 'DataServiceChoices', useClass: __WEBPACK_IMPORTED_MODULE_1__ts_data_service_data_service__["a" /* DataService */] },
                { provide: 'DataService', useClass: __WEBPACK_IMPORTED_MODULE_1__ts_data_service_data_service__["a" /* DataService */] },
                { provide: 'DataServiceProvider', useValue: dataServiceProvider },
                { provide: 'Provider', useValue: that._helperService.getDataBoxProvider(data) }
            ]);
            that._childInjector = __WEBPACK_IMPORTED_MODULE_0__angular_core__["T" /* ReflectiveInjector */].fromResolvedProviders(resolvedProviders, that._injector);
            // Save childInjector (check out the context in the provider definition)
            that._provider.childInjector = that._childInjector;
            that.init();
            // Add parameter to action route
            if (that._provider.urlChoicesParams) {
                that._childDataServiceChoices.setRoute('choices', (that._childDataServiceChoices.getRoute('choices') + '/' + that._provider.urlChoicesParams));
            }
            that._tasksLoaderManagerService.delTask('INIT_AUTO_COMPLETE');
        }, function (errors) { console.log(errors); return; });
    };
    /**
     * Initialize variables and dependencies.
     * @returns {FieldTypeAutoCompleteComponent}
     */
    FieldTypeAutoCompleteComponent.prototype.init = function () {
        var _this = this;
        var that = this;
        this._childDataServicePopup = this._childInjector.get('DataService');
        this._onChildObjectChangeSubscription = this._childDataServicePopup.getOnObjectsChangeEmitter()
            .subscribe(function (data) {
            // Only emit event if there are a valid object
            if (that._childDataServicePopup.getObject() && that._childDataServicePopup.getObject()['id']) {
                that.onChange.emit(that._object[that.field]);
            }
        });
        this._childDataServiceChoices = this._childInjector.get('DataServiceChoices');
        this._onChildObjectsChangeSubscription = this._childDataServiceChoices.getOnObjectsRefreshEmitter()
            .subscribe(function (object) { return _this.resetChoices(); });
        this._childCandidateSearch = this._childDataServiceChoices.getCandidateSearch(); // To filter objects
        // @TODO simplify fields to avoid inject default fields sent from controller to template, use only needed fields
        return this;
    };
    /**
     * Lifecycle callback
     */
    FieldTypeAutoCompleteComponent.prototype.ngOnDestroy = function () {
        // Sometimes the component can be already destroyed, so test if exists first
        if (this._onObjectChangeSubscription) {
            this._onObjectChangeSubscription.unsubscribe();
        }
        if (this._onChildObjectChangeSubscription) {
            this._onChildObjectChangeSubscription.unsubscribe();
        }
        if (this._onChildObjectsChangeSubscription) {
            this._onChildObjectsChangeSubscription.unsubscribe();
        }
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Input */])(),
        __metadata("design:type", String)
    ], FieldTypeAutoCompleteComponent.prototype, "field", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Input */])(),
        __metadata("design:type", Boolean)
    ], FieldTypeAutoCompleteComponent.prototype, "hasSelfReference", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Input */])(),
        __metadata("design:type", String)
    ], FieldTypeAutoCompleteComponent.prototype, "placeholder", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["N" /* Output */])(),
        __metadata("design:type", Object)
    ], FieldTypeAutoCompleteComponent.prototype, "onChange", void 0);
    FieldTypeAutoCompleteComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'js_autoComplete',
            template: "\n    <div class=\"auto-complete\">\n        <div class=\"input-group\">\n            <input type=\"text\"\n                   class=\"form-control\"\n                   [placeholder]=\"placeholder\"\n                   (click)=\"onInputClick($event)\"\n                   (input)=\"onEnterKey($event)\"\n                   [ngModel]=\"_label\"\n                   [class.error]=\"_formService.getErrors()[field] && (_formService.getErrors()[field].length > 0)\">\n            <div class=\"input-group-append\"\n                 *ngIf=\"_controlMode\">\n                <button class=\"btn btn-primary\"\n                        type=\"button\"\n                        (click)=\"triggerAction($event)\"><i class=\"fa\"\n                                 [class.fa-check]=\"_controlMode == 'save'\"\n                                 [class.fa-plus]=\"_controlMode == 'add'\"\n                                 [class.fa-pencil]=\"_controlMode == 'edit'\"></i></button>\n            </div>\n            <a (click)=\"onControlClick($event)\"><i class=\"fa fa-angle-down\"></i></a>\n        </div>\n        <div class=\"choices\">\n            <ul [hidden]=\"_isHidden\"\n                (click)=\"onChoiceClick($event)\">\n                <ng-template [ngIf]=\"hasSelfReference\"><ng-template ngFor let-choice [ngForOf]=\"_choices\" let-choiceIndex=\"index\">\n                    <li *ngIf=\"choice['id'] != _object['id']\"\n                        [attr.data-index]=\"choiceIndex\"\n                        [innerHtml]=\"choice['label']\"></li>\n                </ng-template></ng-template>\n                <ng-template [ngIf]=\"!hasSelfReference\">\n                    <li *ngFor=\"let choice of _choices; let choiceIndex = index\"\n                        [attr.data-index]=\"choiceIndex\"\n                        [innerHtml]=\"choice['label']\"></li>\n                </ng-template>\n                <li *ngIf=\"_childCandidateSearch && _childCandidateSearch.hasMore\"\n                    (click)=\"getMoreObjects($event)\"\n                    class=\"-pagination\"\n                    title=\"Load more results...\"><span>...</span></li>\n            </ul>\n        </div>\n    </div>\n    ",
            host: {
                '(document:click)': 'onDocumentClick($event)',
            }
        }),
        __param(2, Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["y" /* Inject */])('DataService')),
        __param(6, Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["y" /* Inject */])('AutoCompleteProviders')),
        __param(7, Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["y" /* Inject */])('HelperService')),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3__ts_post_service__["a" /* PostService */],
            __WEBPACK_IMPORTED_MODULE_2__modal_ts_modal_service__["b" /* ModalService */], Object, __WEBPACK_IMPORTED_MODULE_6__AppBundle_Resources_public_tasks_loader_manager_ts_tasks_loader_manager_service__["a" /* TasksLoaderManagerService */],
            __WEBPACK_IMPORTED_MODULE_4__form_service__["a" /* FormService */],
            __WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Injector */], Object, Object])
    ], FieldTypeAutoCompleteComponent);
    return FieldTypeAutoCompleteComponent;
}());



/***/ }),

/***/ "../../../../../src/AppBundle/Resources/public/form/ts/field-types/field-type-date-picker.directive.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FieldTypeDatePickerDirective; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__form_service__ = __webpack_require__("../../../../../src/AppBundle/Resources/public/form/ts/form.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};


var FieldTypeDatePickerDirective = (function () {
    function FieldTypeDatePickerDirective(_elementRef, _formService, _dataService) {
        var _this = this;
        this._elementRef = _elementRef;
        this._formService = _formService;
        this._dataService = _dataService;
        // Determines if the skip rules control value is inverted (using negation "!")
        this._skipRulesControlInverseValue = false;
        // Object change event subscription
        this._onObjectChangeSubscription = this._formService.getOnObjectChangeEmitter()
            .subscribe(function (object) { return _this.reset(); });
    }
    /**
     * Reset
     */
    FieldTypeDatePickerDirective.prototype.reset = function () {
        this.setControlConf();
    };
    /**
     * Host event
     * @param $event
     */
    FieldTypeDatePickerDirective.prototype.onDocumentClick = function ($event) {
        // It can't be used, because prevent all events (checkbox, etc.)
        //$event.preventDefault();
        // The click is inside of this data picker
        if (this._elementRef.nativeElement.contains($event.target)) {
            var isDropDown = ($($event.target).parents('.dropdown-menu').length > 0);
            // Let run the default behavior
            if (isDropDown) {
                return;
            }
            this.setControlConf(); // Set/Refresh conf (data picker will be opened or closed)
            this.control.toggle(); // Toggle data picker drop-down
        }
        else {
            // The click is outside of this data picker (close it)
            this.control.close();
        }
    };
    /**
     * Set/Refresh control configuration
     */
    FieldTypeDatePickerDirective.prototype.setControlConf = function () {
        // Apply rules
        if (this._fieldMetadata['typeDetail'] && this._fieldMetadata['typeDetail']['rules']) {
            var skipRules = ((this._skipRulesControl
                && (this._skipRulesControl in (this._formService.getObject() || {})))
                ? (this._skipRulesControlInverseValue
                    ? !this._formService.getObject()[this._skipRulesControl]
                    : this._formService.getObject()[this._skipRulesControl])
                : false);
            var _loop_1 = function (rule) {
                switch (rule['expr']) {
                    case 'range':
                        if (skipRules && rule['allowSkip']) {
                            // Skip rule
                            this_1.control['markDisabled'] = null;
                            break;
                        }
                        // Limit available dates to ranges
                        var dateRanges_1 = (this_1._dataService.getLocalDataAttr(rule['value']) || []);
                        // Function to check if date is valid (is in range)
                        this_1.control['markDisabled'] = function (date) {
                            var dateToCheck = new Date(date.year, date.month - 1, date.day);
                            for (var _i = 0, dateRanges_2 = dateRanges_1; _i < dateRanges_2.length; _i++) {
                                var dateRange = dateRanges_2[_i];
                                // ' 00:00:00' is necessary to get the expected behavior
                                var dateFrom = new Date(dateRange['startDate'] + ' 00:00:00'), dateTo = new Date(dateRange['endDate'] + ' 00:00:00');
                                if ((dateToCheck.getTime() >= dateFrom.getTime())
                                    && (dateToCheck.getTime() <= dateTo.getTime())) {
                                    return false;
                                }
                            }
                            return true;
                        };
                        break;
                    case 'min':
                    case 'max':
                        if (skipRules && rule['allowSkip']) {
                            // Skip rule
                            this_1.control[rule['expr'] + 'Date'] = null;
                            break;
                        }
                        this_1.control[rule['expr'] + 'Date'] = this_1._formService.getObject()[rule['value']];
                        break;
                }
            };
            var this_1 = this;
            for (var _i = 0, _a = this._fieldMetadata['typeDetail']['rules']; _i < _a.length; _i++) {
                var rule = _a[_i];
                _loop_1(rule);
            }
        }
    };
    /**
     * Lifecycle callback
     */
    FieldTypeDatePickerDirective.prototype.ngOnInit = function () {
        this._fieldMetadata = this._dataService.getProviderAttr('fields')['metadata'][this.field];
        this._skipRulesControl = ((this._fieldMetadata['typeDetail']
            && this._fieldMetadata['typeDetail']['skipRulesControl'])
            ? this._fieldMetadata['typeDetail']['skipRulesControl']
            : null);
        // Check how skip rules value should be used
        if (this._skipRulesControl && (this._skipRulesControl.substring(0, 1) == '!')) {
            // Value should be inverse, using negation (!)
            this._skipRulesControlInverseValue = true;
            this._skipRulesControl = this._skipRulesControl.substring(1); // Remove operator from control name
        }
        this.reset();
    };
    /**
     * Lifecycle callback
     */
    FieldTypeDatePickerDirective.prototype.ngOnDestroy = function () {
        this._onObjectChangeSubscription.unsubscribe();
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Input */])('datePicker'),
        __metadata("design:type", String)
    ], FieldTypeDatePickerDirective.prototype, "field", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Input */])('control'),
        __metadata("design:type", Object)
    ], FieldTypeDatePickerDirective.prototype, "control", void 0);
    FieldTypeDatePickerDirective = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["s" /* Directive */])({
            selector: '[datePicker]',
            host: {
                '(document:click)': 'onDocumentClick($event)',
            }
        }),
        __param(2, Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["y" /* Inject */])('DataService')),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_core__["t" /* ElementRef */],
            __WEBPACK_IMPORTED_MODULE_1__form_service__["a" /* FormService */], Object])
    ], FieldTypeDatePickerDirective);
    return FieldTypeDatePickerDirective;
}());



/***/ }),

/***/ "../../../../../src/AppBundle/Resources/public/form/ts/field-types/field-type-html-select.directive.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FieldTypeHtmlSelectDirective; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__form_service__ = __webpack_require__("../../../../../src/AppBundle/Resources/public/form/ts/form.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};


/**
 * Handles with html select box
 */
var FieldTypeHtmlSelectDirective = (function () {
    function FieldTypeHtmlSelectDirective(_elementRef, _formService, _dataService) {
        var _this = this;
        this._elementRef = _elementRef;
        this._formService = _formService;
        this._dataService = _dataService;
        this.onChange = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["v" /* EventEmitter */]();
        // Object change event subscription
        this._onObjectChangeSubscription = this._formService.getOnObjectChangeEmitter()
            .subscribe(function (object) { return _this.reset(); });
    }
    FieldTypeHtmlSelectDirective.prototype.onMouseClick = function ($event) {
        $event.preventDefault();
        $event.stopPropagation();
        this._$choices.toggle();
        var $target = $($event.target), value = $target.data('value');
        if (value) {
            this._formService.getObject()[this.field] = value;
            this._$label.html($target.html());
            this.onChange.emit(value);
        }
    };
    /**
     * Reset
     * @returns {FieldTypeHtmlSelectDirective}
     */
    FieldTypeHtmlSelectDirective.prototype.reset = function () {
        var value = (this._formService.getObject()[this.field]), normalizedValue = '';
        if (value) {
            normalizedValue = ((this._fieldInView
                && this._dataService.getNormalizedObject()
                && this._dataService.getNormalizedObject()[this._fieldInView])
                ? this._dataService.getNormalizedObject()[this._fieldInView]
                : value);
        }
        this._$label.html(normalizedValue);
        return this;
    };
    /**
     * Host event
     * @param $event
     */
    FieldTypeHtmlSelectDirective.prototype.onDocumentClick = function ($event) {
        this._$choices.hide();
    };
    /**
     * Lifecycle callback
     */
    FieldTypeHtmlSelectDirective.prototype.ngOnInit = function () {
        this._$choices = $(this._elementRef.nativeElement).find('.js_choices');
        this._$label = $(this._elementRef.nativeElement).find('.js_label');
        this._$choices.hide();
        this._fieldInView = (this._dataService.getProviderAttr('fields')['metadata'][this.field]['fieldInView'] || null);
        this.reset();
    };
    /**
     * Lifecycle callback
     */
    FieldTypeHtmlSelectDirective.prototype.ngOnDestroy = function () {
        this._onObjectChangeSubscription.unsubscribe();
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Input */])('htmlSelect'),
        __metadata("design:type", String)
    ], FieldTypeHtmlSelectDirective.prototype, "field", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["N" /* Output */])(),
        __metadata("design:type", Object)
    ], FieldTypeHtmlSelectDirective.prototype, "onChange", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["x" /* HostListener */])('click', ['$event']),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Object]),
        __metadata("design:returntype", void 0)
    ], FieldTypeHtmlSelectDirective.prototype, "onMouseClick", null);
    FieldTypeHtmlSelectDirective = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["s" /* Directive */])({
            selector: '[htmlSelect]',
            host: {
                '(document:click)': 'onDocumentClick($event)',
            }
        }),
        __param(2, Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["y" /* Inject */])('DataService')),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_core__["t" /* ElementRef */],
            __WEBPACK_IMPORTED_MODULE_1__form_service__["a" /* FormService */], Object])
    ], FieldTypeHtmlSelectDirective);
    return FieldTypeHtmlSelectDirective;
}());



/***/ }),

/***/ "../../../../../src/AppBundle/Resources/public/form/ts/field-types/field-type-multi-checkbox.directive.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FieldTypeMultiCheckboxDirective; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__form_service__ = __webpack_require__("../../../../../src/AppBundle/Resources/public/form/ts/form.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/**
 * Handles with multiple checkbox select control
 */
var FieldTypeMultiCheckboxDirective = (function () {
    function FieldTypeMultiCheckboxDirective(_elementRef, _formService) {
        var _this = this;
        this._elementRef = _elementRef;
        this._formService = _formService;
        // Object change event subscription
        this._onObjectChangeSubscription = this._formService.getOnObjectChangeEmitter()
            .subscribe(function (object) { return _this.reset(object); });
    }
    FieldTypeMultiCheckboxDirective.prototype.onMouseClick = function ($event) {
        var value = $event.target.value;
        if (value) {
            if (value) {
                if (value in this._controlObj) {
                    delete this._controlObj[value]; // Remove
                }
                else {
                    this._controlObj[value] = value; // Add
                }
            }
        }
    };
    /**
     * Reset object
     * @param object
     * @returns {FieldTypeMultiCheckboxDirective}
     */
    FieldTypeMultiCheckboxDirective.prototype.reset = function (object) {
        if (object === void 0) { object = null; }
        this._controlObj = this._formService.getObject()[this.field];
        // Init the controlObj (when creates a new object)
        if (!this._controlObj) {
            this._controlObj = {};
        }
        // Set "selected" property
        var $elements = $(this._elementRef.nativeElement).find('input');
        if ($elements.length > 0) {
            for (var _i = 0, $elements_1 = $elements; _i < $elements_1.length; _i++) {
                var el = $elements_1[_i];
                var $el = $(el);
                $el.prop('checked', ($el.val() in this._controlObj));
            }
        }
        return this;
    };
    /**
     * Lifecycle callback
     */
    FieldTypeMultiCheckboxDirective.prototype.ngOnInit = function () {
        this.reset();
    };
    /**
     * Lifecycle callback
     */
    FieldTypeMultiCheckboxDirective.prototype.ngOnDestroy = function () {
        this._onObjectChangeSubscription.unsubscribe();
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Input */])('multiCheckbox'),
        __metadata("design:type", String)
    ], FieldTypeMultiCheckboxDirective.prototype, "field", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["x" /* HostListener */])('click', ['$event']),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Object]),
        __metadata("design:returntype", void 0)
    ], FieldTypeMultiCheckboxDirective.prototype, "onMouseClick", null);
    FieldTypeMultiCheckboxDirective = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["s" /* Directive */])({
            selector: '[multiCheckbox]'
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_core__["t" /* ElementRef */],
            __WEBPACK_IMPORTED_MODULE_1__form_service__["a" /* FormService */]])
    ], FieldTypeMultiCheckboxDirective);
    return FieldTypeMultiCheckboxDirective;
}());



/***/ }),

/***/ "../../../../../src/AppBundle/Resources/public/form/ts/field-types/field-types.extension-module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FieldTypesExtensionModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("../../../common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__field_type_auto_complete_component__ = __webpack_require__("../../../../../src/AppBundle/Resources/public/form/ts/field-types/field-type-auto-complete.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__password_component__ = __webpack_require__("../../../../../src/AppBundle/Resources/public/form/ts/field-types/password.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__field_type_multi_checkbox_directive__ = __webpack_require__("../../../../../src/AppBundle/Resources/public/form/ts/field-types/field-type-multi-checkbox.directive.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__field_type_html_select_directive__ = __webpack_require__("../../../../../src/AppBundle/Resources/public/form/ts/field-types/field-type-html-select.directive.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__field_type_date_picker_directive__ = __webpack_require__("../../../../../src/AppBundle/Resources/public/form/ts/field-types/field-type-date-picker.directive.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};








var FieldTypesExtensionModule = (function () {
    function FieldTypesExtensionModule() {
    }
    FieldTypesExtensionModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["H" /* NgModule */])({
            imports: [__WEBPACK_IMPORTED_MODULE_1__angular_common__["a" /* CommonModule */], __WEBPACK_IMPORTED_MODULE_2__angular_forms__["b" /* FormsModule */]],
            declarations: [
                __WEBPACK_IMPORTED_MODULE_3__field_type_auto_complete_component__["a" /* FieldTypeAutoCompleteComponent */],
                __WEBPACK_IMPORTED_MODULE_4__password_component__["a" /* FieldTypePasswordComponent */],
                __WEBPACK_IMPORTED_MODULE_5__field_type_multi_checkbox_directive__["a" /* FieldTypeMultiCheckboxDirective */],
                __WEBPACK_IMPORTED_MODULE_6__field_type_html_select_directive__["a" /* FieldTypeHtmlSelectDirective */],
                __WEBPACK_IMPORTED_MODULE_7__field_type_date_picker_directive__["a" /* FieldTypeDatePickerDirective */]
            ],
            exports: [
                __WEBPACK_IMPORTED_MODULE_3__field_type_auto_complete_component__["a" /* FieldTypeAutoCompleteComponent */],
                __WEBPACK_IMPORTED_MODULE_4__password_component__["a" /* FieldTypePasswordComponent */],
                __WEBPACK_IMPORTED_MODULE_5__field_type_multi_checkbox_directive__["a" /* FieldTypeMultiCheckboxDirective */],
                __WEBPACK_IMPORTED_MODULE_6__field_type_html_select_directive__["a" /* FieldTypeHtmlSelectDirective */],
                __WEBPACK_IMPORTED_MODULE_7__field_type_date_picker_directive__["a" /* FieldTypeDatePickerDirective */]
            ]
        })
    ], FieldTypesExtensionModule);
    return FieldTypesExtensionModule;
}());



/***/ }),

/***/ "../../../../../src/AppBundle/Resources/public/form/ts/field-types/password.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FieldTypePasswordComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__form_service__ = __webpack_require__("../../../../../src/AppBundle/Resources/public/form/ts/form.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


// Component
var FieldTypePasswordComponent = (function () {
    function FieldTypePasswordComponent(_formService) {
        this._formService = _formService;
        this._fields = { password: null, confirm: null };
    }
    /**
     * Validate fields
     * @param $event
     */
    FieldTypePasswordComponent.prototype.validateAction = function ($event) {
        if ($event === void 0) { $event = null; }
        var isValid = (this._fields.password == this._fields.confirm);
        this._formService.getObject()[this.field] = (isValid ? this._fields.password : null);
        this._formService.getErrors()[this.field] = (isValid ? null : ["Password confirmation does not match"]);
    };
    /**
     * Reset
     * @param $event
     */
    FieldTypePasswordComponent.prototype.resetAction = function ($event) {
        if ($event === void 0) { $event = null; }
        if (this._fields.password != this._fields.confirm) {
            this._fields.confirm = null;
            this.validateAction(null);
        }
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Input */])(),
        __metadata("design:type", String)
    ], FieldTypePasswordComponent.prototype, "field", void 0);
    FieldTypePasswordComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'js_password',
            template: "\n    <input (blur)=\"resetAction($event)\"\n           class=\"form-control\"\n           [class.error]=\"_formService.getErrors()[field] && (_formService.getErrors()[field].length > 0)\"\n           type=\"password\"\n           placeholder=\"Password\"\n           [(ngModel)]=\"_fields.password\">\n    <input (keyup)=\"validateAction($event)\"\n           class=\"form-control m-t\"\n           [class.error]=\"_formService.getErrors()[field] && (_formService.getErrors()[field].length > 0)\"\n           type=\"password\"\n           placeholder=\"Confirm password\"\n           [(ngModel)]=\"_fields.confirm\">\n    "
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__form_service__["a" /* FormService */]])
    ], FieldTypePasswordComponent);
    return FieldTypePasswordComponent;
}());



/***/ }),

/***/ "../../../../../src/AppBundle/Resources/public/form/ts/form-popup.extension-component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FormPopupExtensionComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__form_extension_component__ = __webpack_require__("../../../../../src/AppBundle/Resources/public/form/ts/form.extension-component.ts");
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var FormPopupExtensionComponent = (function (_super) {
    __extends(FormPopupExtensionComponent, _super);
    function FormPopupExtensionComponent() {
        var _this = _super.call(this) || this;
        // Modal parameters
        _this.onDismissEmitter = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["v" /* EventEmitter */]();
        return _this;
    }
    /**
     * Initialization of component (replace the original constructor to avoid angular injection inheritance bug)
     * @param elementRef
     * @param renderer
     * @param provider
     * @param formService
     * @param dataService
     */
    FormPopupExtensionComponent.prototype.initFormPopupExtensionComponent = function (elementRef, renderer, provider, formService, dataService) {
        _super.prototype.initFormExtensionComponent.call(this, elementRef, renderer, provider, formService, dataService);
    };
    /**
     * Save object. Handle submit form.
     * This override add a closePopup behavior.
     * This method should be called from child component.
     * @returns {Promise}
     */
    FormPopupExtensionComponent.prototype.save = function () {
        var that = this;
        return new Promise(function (resolve, reject) {
            that._formService.save().then(function (data) { return resolve(data); }, function (errors) { return reject(errors); });
        });
    };
    /**
     * Save action.
     * This method should be called from view/template.
     * @param $event
     */
    FormPopupExtensionComponent.prototype.saveAction = function ($event) {
        if ($event === void 0) { $event = null; }
        if ($event) {
            $event.preventDefault();
        }
        this.save().then(function (data) { return; }, function (errors) { return; });
    };
    /**
     * Save and enter to detail action.
     * This method should be called from view/template.
     * @param $event
     */
    FormPopupExtensionComponent.prototype.saveAndEnterAction = function ($event) {
        if ($event === void 0) { $event = null; }
        this._formService.saveAndEnterAction($event);
    };
    /**
     * Save and add a new entry.
     * This method should be called from view/template.
     * @param $event
     */
    FormPopupExtensionComponent.prototype.saveAndNewAction = function ($event) {
        if ($event === void 0) { $event = null; }
        this._formService.saveAndNewAction($event);
    };
    /**
     * Save and close popup action.
     * This method should be called from view/template.
     * @param $event
     */
    FormPopupExtensionComponent.prototype.saveAndCloseAction = function ($event) {
        var _this = this;
        if ($event === void 0) { $event = null; }
        if ($event) {
            $event.preventDefault();
        }
        this.save().then(function (data) { _this.closeAction(); return; }, function (errors) { return; });
    };
    /**
     * Reset action.
     * This method should be called from view/template.
     * @param $event
     */
    FormPopupExtensionComponent.prototype.resetAction = function ($event) {
        if ($event === void 0) { $event = null; }
        this._formService.resetAction($event);
    };
    /**
     * Cancel action.
     * This method should be called from view/template.
     * @param $event
     */
    FormPopupExtensionComponent.prototype.cancelAction = function ($event) {
        if ($event === void 0) { $event = null; }
        this.closeAction($event);
    };
    /**
     * Close action.
     * @param $event
     */
    FormPopupExtensionComponent.prototype.closeAction = function ($event) {
        var _this = this;
        if ($event === void 0) { $event = null; }
        if ($event) {
            $event.preventDefault();
        }
        // Current form object has changes from user?
        this._formService.reset().then(function (data) {
            _this.onDismissEmitter.emit(data);
            return;
        }, function (errors) { return; });
    };
    FormPopupExtensionComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: '.js_formPopup',
            template: ''
        }),
        __metadata("design:paramtypes", [])
    ], FormPopupExtensionComponent);
    return FormPopupExtensionComponent;
}(__WEBPACK_IMPORTED_MODULE_1__form_extension_component__["a" /* FormExtensionComponent */]));



/***/ }),

/***/ "../../../../../src/AppBundle/Resources/public/form/ts/form.extension-component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FormExtensionComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ts_base_base_extension_component__ = __webpack_require__("../../../../../src/AppBundle/Resources/public/ts/base/base.extension-component.ts");
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


// Component
var FormExtensionComponent = (function (_super) {
    __extends(FormExtensionComponent, _super);
    function FormExtensionComponent() {
        return _super.call(this) || this;
    }
    /**
     * Initialization of component (replace the original constructor to avoid angular injection inheritance bug)
     * @param elementRef
     * @param renderer
     * @param provider
     * @param formService
     * @param dataService
     */
    FormExtensionComponent.prototype.initFormExtensionComponent = function (elementRef, renderer, provider, formService, dataService) {
        // Parent init (construct)
        _super.prototype.initBaseExtensionComponent.call(this, elementRef, renderer, provider);
        // Constructor vars
        this._formService = formService;
        this._dataService = dataService;
    };
    /**
     * Lifecycle callback
     */
    FormExtensionComponent.prototype.ngAfterViewInit = function () {
        this._formService.init(this);
    };
    FormExtensionComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: '.js_form',
            template: ''
        }),
        __metadata("design:paramtypes", [])
    ], FormExtensionComponent);
    return FormExtensionComponent;
}(__WEBPACK_IMPORTED_MODULE_1__ts_base_base_extension_component__["a" /* BaseExtensionComponent */]));



/***/ }),

/***/ "../../../../../src/AppBundle/Resources/public/form/ts/form.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FormService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__modal_ts_modal_service__ = __webpack_require__("../../../../../src/AppBundle/Resources/public/modal/ts/modal.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__tasks_loader_manager_ts_tasks_loader_manager_service__ = __webpack_require__("../../../../../src/AppBundle/Resources/public/tasks-loader-manager/ts/tasks-loader-manager.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ts_helper__ = __webpack_require__("../../../../../src/AppBundle/Resources/public/ts/helper.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};





var FormService = (function () {
    function FormService(_modalService, formBuilder, _dataService, _helperService, _tasksLoaderManagerService, _provider) {
        var _this = this;
        this._modalService = _modalService;
        this._dataService = _dataService;
        this._helperService = _helperService;
        this._tasksLoaderManagerService = _tasksLoaderManagerService;
        this._provider = _provider;
        this._component = null; // Parent component that uses and implement this service
        this._originalObject = {}; // Original object to compare changes and reset object in DataService
        this._originalNormalizedObject = {}; // Original normalized (for form) object to compare changes and reset object in form
        this._object = {}; // Object used by form
        this._$form = null; // DOM form
        this._errors = {}; // Form errors validation
        // Set default values for provider
        if (!this._provider) {
            this._provider = {};
        }
        this._uniqueId = this._helperService.getUniqueId();
        this._onObjectChangeEmitter = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["v" /* EventEmitter */]();
        // Object change event subscription
        this._onObjectChangeSubscription = this._dataService.getOnObjectChangeEmitter()
            .subscribe(function (object) { return _this.onObjectChangeSubscription(object); });
        this._forceSubmit = false;
        this._preventObjectOverride = true;
        // Set object, if it has not been setted before open the form
        if (!this._dataService.getObject()) {
            // If object is not setted, create a new
            var that_1 = this;
            this.newObject().then(function (data) {
                that_1.setObject(_this._dataService.getObject());
                that_1.buildForm(formBuilder);
            }, function (errors) { return; });
        }
        else {
            this.setObject(this._dataService.getObject());
            this.buildForm(formBuilder);
        }
    }
    /**
     * Build form
     * @param formBuilder
     * @returns {FormService}
     */
    FormService.prototype.buildForm = function (formBuilder) {
        var formControls = {}, fields = (this._provider.fields || this._dataService.getFields('form') || []).concat(this._helperService.objectKeys(this._dataService.getProviderExtraDataAttr('fields')));
        // Set form controls
        for (var _i = 0, fields_1 = fields; _i < fields_1.length; _i++) {
            var field = fields_1[_i];
            formControls[field] = [this._object[field] || null];
        }
        this._form = formBuilder.group(formControls);
        return this;
    };
    /**
     * Initialization of service.
     * This method should be called in "ngOnInit" method of parent component,
     * so the template has been rendered.
     * @param component (parent component)
     * @returns {FormService}
     */
    FormService.prototype.init = function (component) {
        // Local variables
        this._component = component;
        // @TODO: discontinue this provider, and keep only the second verification
        this._preventObjectOverride = this._component.getProviderAttr('preventObjectOverride');
        if (this._preventObjectOverride) {
            this._preventObjectOverride = (!this._provider.hasOwnProperty('hasPreventObjectOverride')
                || this._provider['hasPreventObjectOverride']);
        }
        // Note: _$form needs to be setted each time that the component changes, otherwise if you set the form
        // only once, form loss your binding consistence from the second time that it is opened and setted a
        // different object. Ie: "BookingServicePriceEdit", field "isVatIncluded" and "markupValue" loss binding
        // consistence and the data is not correctly sent to server!!!!
        this._$form = $(this._component._elementRef.nativeElement).find('form');
        return this;
    };
    ///////////////////////////////////////////////
    // It's no more necessary, because we only create the form (open popup) after get the
    // promise successful response (get, new or clone object), so this code is kept here for future consideration.
    ///////////////////////////////////////////////
    /**
     * Is Initialized
     * Controls if FormService has been initialized the "formBuilder group",
     * to avoid the component render the template form before and break
     * @returns {boolean}
     */
    /*public isInitialized(): boolean
    {
        return (this.getForm() ? true : false);
    }*/
    /**
     * Get form object emitter to tell all subscribers about changes
     * @returns {EventEmitter<any>}
     */
    FormService.prototype.getOnObjectChangeEmitter = function () {
        return this._onObjectChangeEmitter;
    };
    /**
     * On object change subscription. Handle with object changes in DataService.
     * @param object
     */
    FormService.prototype.onObjectChangeSubscription = function (object) {
        if ((object != this._originalObject) // Set object only if is different
            && !this._tasksLoaderManagerService.hasTask('SAVE_' + this._uniqueId)) {
            // Form does not need to confirm object override
            if (!this._preventObjectOverride) {
                this.setObject(object);
                return;
            }
            // Confirm object override by user to prevent data loss
            this.confirmAndSetObject(object).then(function (data) { return; }, function (errors) { return; });
        }
    };
    /**
     * Set _preventObjectOverride
     * @param value
     * @returns {FormService}
     */
    FormService.prototype.setPreventObjectOverride = function (value) {
        this._preventObjectOverride = value;
        return this;
    };
    /**
     * Confirm and set object. Check for object changes and confirm with the user to discard them, then set
     * the object according with the ser response.
     * @param object
     * @returns {Promise}
     */
    FormService.prototype.confirmAndSetObject = function (object) {
        var that = this;
        return new Promise(function (resolve, reject) {
            // Current form object has changes from user?
            if (that.hasChanges()) {
                // Dialog message
                return that._modalService.dialog().then(function (hasConfirm) {
                    if (hasConfirm) {
                        that.setObject(object);
                        return resolve(true);
                    }
                    else {
                        // Keep the object in DataService
                        that._dataService.setObject(that._originalObject);
                        return reject(false);
                    }
                }, function (errors) { console.log(errors); return reject(false); });
            }
            else {
                that.setObject(object);
                return resolve(true);
            }
        });
    };
    /**
     * Set object
     * @param object
     * @returns {FormService}
     */
    FormService.prototype.setObject = function (object) {
        // Set only if is a different object
        if (object && (object != this._originalObject)) {
            // Keep the original object from dataService
            this._originalObject = object;
            this._tasksLoaderManagerService.delTask('SAVE_' + this._uniqueId); // Waiting mode for save process ends here, after update the original object.
            // Normalize object to form
            this._originalNormalizedObject = __WEBPACK_IMPORTED_MODULE_4__ts_helper__["a" /* Helper */].cloneObject(this._originalObject, true);
            this.normalizeObject(this._originalNormalizedObject);
            // Update form object
            this._object = __WEBPACK_IMPORTED_MODULE_4__ts_helper__["a" /* Helper */].cloneObject(this._originalNormalizedObject, true);
            // Reset errors
            this._errors = {};
            // This object is saved in session and needs to be confirmed by user before save them in database
            this._forceSubmit = (object['_isSessionStorage'] ? true : false);
            this._onObjectChangeEmitter.emit(this._object); // Object as changed to the original, notify subscribers
        }
        return this;
    };
    /**
     * Normalize objects to form
     * Detect fields that needs to be normalized
     * @param object
     * @param fields
     * @returns {FormService}
     */
    FormService.prototype.normalizeObject = function (object, fields) {
        if (fields === void 0) { fields = null; }
        fields = (fields || this._dataService.getProviderAttr('fields')['form']);
        if (object && fields) {
            var fieldsMetadata = this._dataService.getProviderAttr('fields')['metadata'];
            for (var _i = 0, fields_2 = fields; _i < fields_2.length; _i++) {
                var field = fields_2[_i];
                var fieldMetadata = fieldsMetadata[field];
                switch (fieldMetadata['type']) {
                    case 'date':
                        object[field] = this.normalizeValue(object[field], fieldMetadata['type']);
                        break;
                }
            }
        }
        return this;
    };
    /**
     * Normalize value to form
     * @param value
     * @param type
     * @returns any
     */
    FormService.prototype.normalizeValue = function (value, type) {
        switch (type) {
            case 'date':
                if (value && (typeof value == 'string')) {
                    var dateArr = value.split("-");
                    return {
                        year: parseInt(dateArr[0]),
                        month: parseInt(dateArr[1]),
                        day: parseInt(dateArr[2])
                    };
                }
                return value;
        }
    };
    /**
     * Get object
     * @returns any
     */
    FormService.prototype.getObject = function () {
        return this._object;
    };
    /**
     * Get originalObject
     * @returns any
     */
    FormService.prototype.getOriginalObject = function () {
        return this._originalNormalizedObject;
    };
    /**
     * Check if the object has changes from user
     * @returns {boolean|Boolean}
     */
    FormService.prototype.hasChanges = function () {
        return (!this._helperService.isEqualObject(this._object, this._originalNormalizedObject));
    };
    /**
     * Get form
     * @returns any
     */
    FormService.prototype.getForm = function () {
        return this._form;
    };
    /**
     * Set errors
     * @param errors
     * @returns {FormService}
     */
    FormService.prototype.setErrors = function (errors) {
        this._errors = (errors || {});
        return this;
    };
    /**
     * Get errors
     * @returns any
     */
    FormService.prototype.getErrors = function () {
        return this._errors;
    };
    /**
     * Set form field value
     * @param field
     * @param value
     */
    FormService.prototype.setFormFieldValue = function (field, value) {
        if (value && (field in this._object)) {
            this._object[field] = value;
        }
    };
    /**
     * Get view object (normalized object in DataService)
     * @returns {any|{}}
     */
    FormService.prototype.getViewObject = function () {
        return (this._dataService.getNormalizedObject() || {});
    };
    /**
     * Save form. Handle submit form.
     * This method should be called from child component.
     * @param route (optional route to overrides default route)
     * @param hasValidation
     * @returns {Promise}
     */
    FormService.prototype.save = function (route, hasValidation) {
        if (route === void 0) { route = null; }
        if (hasValidation === void 0) { hasValidation = true; }
        var that = this;
        return new Promise(function (resolve, reject) {
            if (!that._tasksLoaderManagerService.addTask('SAVE_' + that._uniqueId)) {
                // Form is already in save process
                return reject(false);
            }
            // Current form object has changes from user?
            // Note: Objects in session storage enables the "_forceSubmit" by default
            if (that._forceSubmit || !that._object['id'] || that.hasChanges()) {
                // Validate form
                if (hasValidation) {
                    that._errors = {};
                    for (var control in that._form.controls) {
                        if (!that._form.controls[control].valid) {
                            that._errors[control] = ['Required'];
                        }
                    }
                    if (that._helperService.objectLength(that._errors) > 0) {
                        that._tasksLoaderManagerService.delTask('SAVE_' + that._uniqueId); // Cancel save, form has errors
                        return reject(false);
                    }
                }
                // Set the valid token
                that._helperService.setFormToken(that._$form);
                // Get form data
                var data = that._$form.serialize();
                var id = that._object['id'] ? that._object['id'] : null;
                // Save form
                return that._dataService.save(data, id, route).then(function (object) {
                    // Force submit is reset, each activation is valid  only once
                    that._forceSubmit = false;
                    // Update form with updated object
                    that.setObject(object);
                    return resolve(true);
                }, function (errors) {
                    if (errors) {
                        that._errors = errors;
                    }
                    that._tasksLoaderManagerService.delTask('SAVE_' + that._uniqueId);
                    return reject(errors);
                });
            }
            else {
                that._tasksLoaderManagerService.delTask('SAVE_' + that._uniqueId);
                return resolve(true);
            }
        });
    };
    /**
     * Save action.
     * This method should be called from view/template.
     * @param $event
     */
    FormService.prototype.saveAction = function ($event) {
        if ($event === void 0) { $event = null; }
        if ($event) {
            $event.preventDefault();
        }
        this.save().then(function (data) { return; }, function (errors) { return; });
    };
    /**
     * Save and enter to detail action.
     * This method should be called from view/template.
     * @param $event
     */
    FormService.prototype.saveAndEnterAction = function ($event) {
        if ($event === void 0) { $event = null; }
        if ($event) {
            $event.preventDefault();
        }
        var that = this;
        this.save().then(function (data) {
            that.newAction();
            return;
        }, function (errors) { return; });
    };
    /**
     * Add a new entry (newObject is used in name because new is a reserved word).
     * @returns {Promise}
     */
    FormService.prototype.newObject = function () {
        var that = this;
        return new Promise(function (resolve, reject) {
            that._dataService.newObject().then(function (data) { return resolve(data); }, function (errors) { return reject(errors); });
        });
    };
    /**
     * Add a new entry action.
     * This method should be called when the form is initialized.
     * @param $event
     */
    FormService.prototype.newAction = function ($event) {
        if ($event === void 0) { $event = null; }
        if ($event) {
            $event.preventDefault();
        }
        this.newObject().then(function (data) { return; }, function (errors) { return; });
    };
    /**
     * Save and add a new entry.
     * This method should be called from view/template.
     * @param $event
     */
    FormService.prototype.saveAndNewAction = function ($event) {
        if ($event === void 0) { $event = null; }
        if ($event) {
            $event.preventDefault();
        }
        var that = this;
        this.save().then(function (data) { that.newAction(); return; }, function (errors) { return; });
    };
    /**
     * Reset object.
     * This method should be called from child component.
     * @param hasConfirm (launch confirm to user if object has unsaved changes)
     * @returns {Promise}
     */
    FormService.prototype.reset = function (hasConfirm) {
        if (hasConfirm === void 0) { hasConfirm = true; }
        var that = this;
        return new Promise(function (resolve, reject) {
            if (that.hasChanges()) {
                if (hasConfirm) {
                    return that.confirmAndSetObject(that._originalNormalizedObject).then(function (data) { return resolve(true); }, function (errors) { return reject(false); });
                }
                else {
                    that.setObject(that._originalNormalizedObject);
                    return resolve(true);
                }
            }
            else {
                return resolve(true);
            }
        });
    };
    /**
     * Reset action.
     * This method should be called from view/template.
     * @param $event
     */
    FormService.prototype.resetAction = function ($event) {
        if ($event === void 0) { $event = null; }
        if ($event) {
            $event.preventDefault();
        }
        this.reset().then(function (data) { return; }, function (errors) { return; });
    };
    /**
     * Set forceSubmit
     * @param forceSubmit
     * @returns {FormService}
     */
    FormService.prototype.setForceSubmit = function (forceSubmit) {
        if (forceSubmit === void 0) { forceSubmit = true; }
        this._forceSubmit = forceSubmit;
        return this;
    };
    FormService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["z" /* Injectable */])(),
        __param(2, Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["y" /* Inject */])('DataService')),
        __param(3, Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["y" /* Inject */])('HelperService')),
        __param(5, Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["M" /* Optional */])()), __param(5, Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["y" /* Inject */])('FormServiceProvider')),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__modal_ts_modal_service__["b" /* ModalService */],
            __WEBPACK_IMPORTED_MODULE_1__angular_forms__["a" /* FormBuilder */], Object, Object, __WEBPACK_IMPORTED_MODULE_3__tasks_loader_manager_ts_tasks_loader_manager_service__["a" /* TasksLoaderManagerService */], Object])
    ], FormService);
    return FormService;
}());



/***/ }),

/***/ "../../../../../src/AppBundle/Resources/public/legend/ts/src/legend.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LegendComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};

// Component
var LegendComponent = (function () {
    function LegendComponent(_provider) {
        this._provider = _provider;
    }
    LegendComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'js_legend',
            template: "\n    <dl *ngIf=\"_provider.length > 0\" class=\"row legend\">\n        <ng-template ngFor let-legend [ngForOf]=\"_provider\" let-i=\"index\">\n          <div class=\"col-auto mr-auto\"><dt [ngClass]=\"legend['class']\"></dt><dd>{{legend['label']}}</dd></div>\n        </ng-template>\n    </dl>\n    "
        }),
        __param(0, Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["y" /* Inject */])('LegendProvider')),
        __metadata("design:paramtypes", [Object])
    ], LegendComponent);
    return LegendComponent;
}());



/***/ }),

/***/ "../../../../../src/AppBundle/Resources/public/legend/ts/src/legend.ext-module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LegendExtModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("../../../common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__legend_component__ = __webpack_require__("../../../../../src/AppBundle/Resources/public/legend/ts/src/legend.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var LegendExtModule = (function () {
    function LegendExtModule() {
    }
    LegendExtModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["H" /* NgModule */])({
            imports: [__WEBPACK_IMPORTED_MODULE_1__angular_common__["a" /* CommonModule */]],
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__legend_component__["a" /* LegendComponent */]
            ],
            exports: [__WEBPACK_IMPORTED_MODULE_2__legend_component__["a" /* LegendComponent */]]
        })
    ], LegendExtModule);
    return LegendExtModule;
}());



/***/ }),

/***/ "../../../../../src/AppBundle/Resources/public/modal/ts/base-modal-popup.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return BaseModalPopupExt; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BaseModalPopup; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ts_base_base_extension_component__ = __webpack_require__("../../../../../src/AppBundle/Resources/public/ts/base/base.extension-component.ts");
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();


/**
 * BaseModalPopupExt
 * Base class for custom popups.
 * All popups should extend this class.
 */
var BaseModalPopupExt = (function (_super) {
    __extends(BaseModalPopupExt, _super);
    function BaseModalPopupExt() {
        var _this = _super.call(this) || this;
        _this.onDismissEmitter = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["v" /* EventEmitter */]();
        return _this;
    }
    /**
     * Initialization of component (replace the original constructor to avoid angular injection inheritance bug)
     * @param elementRef
     * @param renderer
     * @param provider
     */
    BaseModalPopupExt.prototype.initBaseModalPopupExt = function (elementRef, renderer, 
        // This provider can becomes any provider defined by your child
        // (don't need the "inject" because it's a static class, so will be provider by children components)
        provider) {
        // Call parent construct
        _super.prototype.initBaseExtensionComponent.call(this, elementRef, renderer, provider);
    };
    /**
     * Close action.
     * @param $event
     * @param data (data to return on resolve component)
     */
    BaseModalPopupExt.prototype.closeAction = function ($event, data) {
        if ($event === void 0) { $event = null; }
        if (data === void 0) { data = null; }
        if ($event) {
            $event.preventDefault();
        }
        this.onDismissEmitter.emit(data);
    };
    return BaseModalPopupExt;
}(__WEBPACK_IMPORTED_MODULE_1__ts_base_base_extension_component__["a" /* BaseExtensionComponent */]));

/**
 * BaseModalPopup
 * Base class for custom popups.
 * All popups should extend this class.
 */
var BaseModalPopup = (function (_super) {
    __extends(BaseModalPopup, _super);
    function BaseModalPopup(elementRef, renderer, 
        // This provider can becomes any provider defined by your child
        // (don't need the "inject" because it's a static class, so will be provider by children components)
        provider) {
        var _this = 
        // Call parent construct
        _super.call(this) || this;
        _super.prototype.initBaseModalPopupExt.call(_this, elementRef, renderer, provider);
        return _this;
    }
    return BaseModalPopup;
}(BaseModalPopupExt));



/***/ }),

/***/ "../../../../../src/AppBundle/Resources/public/modal/ts/modal-dialog.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ModalDialogComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__base_modal_popup__ = __webpack_require__("../../../../../src/AppBundle/Resources/public/modal/ts/base-modal-popup.ts");
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ModalDialogComponent = (function (_super) {
    __extends(ModalDialogComponent, _super);
    function ModalDialogComponent(elementRef, renderer) {
        var _this = _super.call(this, elementRef, renderer, null) || this;
        _this.title = 'Warning';
        _this.body = 'Are you sure';
        _this.isDialog = true;
        return _this;
    }
    /**
     * Set title
     * @param title
     * @returns {ModalDialogComponent}
     */
    ModalDialogComponent.prototype.setTitle = function (title) {
        this.title = title;
        return this;
    };
    /**
     * Set body
     * @param body
     * @returns {ModalDialogComponent}
     */
    ModalDialogComponent.prototype.setBody = function (body) {
        this.body = body;
        return this;
    };
    /**
     * Set isDialog
     * @param isDialog
     * @returns {ModalDialogComponent}
     */
    ModalDialogComponent.prototype.setIsDialog = function (isDialog) {
        this.isDialog = isDialog;
        return this;
    };
    ModalDialogComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: '.js_modalDialog',
            template: "<div class=\"modal-header\">\n        <h3 class=\"modal-title\">{{title}}</h3>\n    </div>\n    <div class=\"modal-body\">{{body}}</div>\n    <div class=\"modal-footer\">\n        <div class=\"row\">\n            <div class=\"col-auto ml-auto\">\n                <button *ngIf=\"isDialog\" class=\"btn btn-light\" (click)=\"closeAction($event, false)\">Cancel</button>\n                <button class=\"btn btn-primary\" (click)=\"closeAction($event, true)\">Ok</button>\n            </div>\n        </div>\n    </div>\n    "
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_core__["t" /* ElementRef */],
            __WEBPACK_IMPORTED_MODULE_0__angular_core__["U" /* Renderer */]])
    ], ModalDialogComponent);
    return ModalDialogComponent;
}(__WEBPACK_IMPORTED_MODULE_1__base_modal_popup__["a" /* BaseModalPopup */]));



/***/ }),

/***/ "../../../../../src/AppBundle/Resources/public/modal/ts/modal-dialog.extension-module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ModalDialogExtensionModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("../../../common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__modal_dialog_component__ = __webpack_require__("../../../../../src/AppBundle/Resources/public/modal/ts/modal-dialog.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var ModalDialogExtensionModule = (function () {
    function ModalDialogExtensionModule() {
    }
    ModalDialogExtensionModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["H" /* NgModule */])({
            imports: [__WEBPACK_IMPORTED_MODULE_1__angular_common__["a" /* CommonModule */]],
            declarations: [__WEBPACK_IMPORTED_MODULE_2__modal_dialog_component__["a" /* ModalDialogComponent */]],
            exports: [__WEBPACK_IMPORTED_MODULE_2__modal_dialog_component__["a" /* ModalDialogComponent */]]
        })
    ], ModalDialogExtensionModule);
    return ModalDialogExtensionModule;
}());



/***/ }),

/***/ "../../../../../src/AppBundle/Resources/public/modal/ts/modal-wrapper.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ModalSizes; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return ModalWrapperComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

// Modal sizes
var ModalSizes = {
    sm: 'sm',
    lg: 'lg'
};
/**
 * Modal wrapper
 * Modal uses the bootstrap classes
 */
var ModalWrapperComponent = (function () {
    function ModalWrapperComponent(_elementRef) {
        this._elementRef = _elementRef;
    }
    /**
     * Get modal container ref
     * @returns {ViewContainerRef}
     */
    ModalWrapperComponent.prototype.setSize = function (size) {
        this._size = this.normalizeModalSize(size);
        return this;
    };
    /**
     * Get modal container ref
     * @returns {ViewContainerRef}
     */
    ModalWrapperComponent.prototype.getModalContainerRef = function () {
        return this.viewContainerRef;
    };
    /**
     * Show modal
     */
    ModalWrapperComponent.prototype.show = function () {
        // Fade in animation
        $(this._elementRef.nativeElement).find('.modal').addClass('fadeInDown');
    };
    /**
     * Normalize modal size to a valid option
     * @param size
     * @returns {string}
     */
    ModalWrapperComponent.prototype.normalizeModalSize = function (size) {
        return (ModalSizes[size] || ModalSizes.lg);
    };
    /**
     * On document click event
     */
    ModalWrapperComponent.prototype.onDocumentClick = function () {
        // @TODO implement "Esc" key and click over backdrop, get from viewcontainerref, index 0
        //console.log("click");
        return;
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_7" /* ViewChild */])('js_modalContainer', { read: __WEBPACK_IMPORTED_MODULE_0__angular_core__["_9" /* ViewContainerRef */] }),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["_9" /* ViewContainerRef */])
    ], ModalWrapperComponent.prototype, "viewContainerRef", void 0);
    ModalWrapperComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'js_modal',
            template: "\n    <div class=\"modal-backdrop\"></div>\n    <div class=\"modal animated\">\n        <div class=\"modal-dialog modal-{{_size}}\">\n            <div class=\"modal-content\">\n                <ng-template #js_modalContainer></ng-template>\n            </div>\n        </div>\n    </div>\n    ",
            host: {
                '(document:click)': 'onDocumentClick($event)',
            }
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_core__["t" /* ElementRef */]])
    ], ModalWrapperComponent);
    return ModalWrapperComponent;
}());



/***/ }),

/***/ "../../../../../src/AppBundle/Resources/public/modal/ts/modal-wrapper.extension-module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ModalWrapperExtensionModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("../../../common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__modal_wrapper_component__ = __webpack_require__("../../../../../src/AppBundle/Resources/public/modal/ts/modal-wrapper.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var ModalWrapperExtensionModule = (function () {
    function ModalWrapperExtensionModule() {
    }
    ModalWrapperExtensionModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["H" /* NgModule */])({
            imports: [__WEBPACK_IMPORTED_MODULE_1__angular_common__["a" /* CommonModule */]],
            declarations: [__WEBPACK_IMPORTED_MODULE_2__modal_wrapper_component__["b" /* ModalWrapperComponent */]],
            exports: [__WEBPACK_IMPORTED_MODULE_2__modal_wrapper_component__["b" /* ModalWrapperComponent */]]
        })
    ], ModalWrapperExtensionModule);
    return ModalWrapperExtensionModule;
}());



/***/ }),

/***/ "../../../../../src/AppBundle/Resources/public/modal/ts/modal.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export AlertTypes */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return ModalService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ts_dynamic_component_loader_service__ = __webpack_require__("../../../../../src/AppBundle/Resources/public/ts/dynamic-component-loader.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__modal_dialog_extension_module__ = __webpack_require__("../../../../../src/AppBundle/Resources/public/modal/ts/modal-dialog.extension-module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__base_modal_popup__ = __webpack_require__("../../../../../src/AppBundle/Resources/public/modal/ts/base-modal-popup.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__modal_wrapper_component__ = __webpack_require__("../../../../../src/AppBundle/Resources/public/modal/ts/modal-wrapper.component.ts");
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_3__base_modal_popup__["b"]; });
/* unused harmony reexport BaseModalPopup */
/* unused harmony reexport ModalSizes */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__modal_wrapper_extension_module__ = __webpack_require__("../../../../../src/AppBundle/Resources/public/modal/ts/modal-wrapper.extension-module.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





// Re-exports

// Alert types
var AlertTypes = {
    success: 'success',
    info: 'info',
    warning: 'warning',
    error: 'error'
};
// Modal wrapper module

/**
 * Service
 * Modal uses the Bootstrap classes
 * NOTE: In modal service it's no use implementing the TaskLoaderManagerService because not works! Modal
 * are duplicated in the same way, because all clicks are processes one after finish the other and not at same time!
 */
var ModalService = (function () {
    function ModalService(_dynamicComponentLoaderService) {
        this._dynamicComponentLoaderService = _dynamicComponentLoaderService;
        this._modalCounter = 0; // Count existent modals to controls the body scrollbar
        this._hasInit = false; // Controls initialization
    }
    /**
     * Initialization
     * Init modal always in the main component (so we can ensure that the mainViewContainerRef is always active,
     * others component can be hidden or destroyed)
     * @param viewContainerRef
     * @returns {ModalService}
     */
    ModalService.prototype.init = function (viewContainerRef) {
        // Initializes only once
        if (this._hasInit) {
            return this;
        }
        var that = this;
        // Get factory for modal wrapper
        this._dynamicComponentLoaderService.getComponentFactory(__WEBPACK_IMPORTED_MODULE_5__modal_wrapper_extension_module__["a" /* ModalWrapperExtensionModule */], 'ModalWrapperComponent').then(function (componentFactory) {
            that._modalComponentFactory = componentFactory;
        });
        // Set main viewContainerRef
        this._mainViewContainerRef = viewContainerRef;
        // Set body element
        this._$body = $('body');
        this._hasInit = true;
        return this;
    };
    /**
     * Popup. Render component inside the popup.
     * @param popup
     * @param injector
     * @returns {Promise<T>}
     *
     * Handling with return:
     * ModalService.popup([parameters]).then(
     *     data => {
     *         data.componentRef.instance....
     *         data.dismissPromise.then(
     *             dismissData => {
     *                 ...
     *             },
     *             errors => { console.log(errors); }
     *         );
     *     },
     *     errors => { console.log(errors); }
     * );
     */
    ModalService.prototype.popup = function (popup, injector) {
        if (injector === void 0) { injector = null; }
        var that = this, modalComponentRef = this._mainViewContainerRef.createComponent(this._modalComponentFactory, this._mainViewContainerRef.length, null, []), modalComponentInstance = modalComponentRef.instance;
        /* IMPORTANT: Use this code if you need to put the component in body (to avoided positioned parent troubling)
        let $modal = $(modalComponentInstance._elementRef.nativeElement);
        $modal.appendTo('body');*/
        // Set modal size
        modalComponentInstance.setSize(popup.size);
        // Update counter
        if (this._modalCounter === 0) {
            // Remove body scrollbar
            $(this._$body).addClass('no-overflow');
        }
        this._modalCounter++;
        // Define injector
        if (injector && !popup.injector) {
            var unresolvedProviders = (popup.providers || []), resolvedProviders = __WEBPACK_IMPORTED_MODULE_0__angular_core__["T" /* ReflectiveInjector */].resolve(unresolvedProviders);
            popup.injector = __WEBPACK_IMPORTED_MODULE_0__angular_core__["T" /* ReflectiveInjector */].fromResolvedProviders(resolvedProviders, injector);
        }
        // Create popup
        return new Promise(function (resolve, reject) {
            return that._dynamicComponentLoaderService.load(popup.module, popup.component, modalComponentInstance.getModalContainerRef(), (popup.injector || null)).then(function (componentRef) {
                var dismissPromise = new Promise(function (resolve, reject) {
                    // Dismiss emitter
                    var onDismissSubscription = componentRef.instance.onDismissEmitter.subscribe(function (data) {
                        onDismissSubscription.unsubscribe();
                        // Remove component
                        that._mainViewContainerRef.remove(that._mainViewContainerRef.length - 1);
                        // It's used the "remove" method of "ViewContainerRef" instead
                        // modalComponentRef.destroy();
                        // Update counter
                        that._modalCounter--;
                        if (that._modalCounter === 0) {
                            // Restore body scrollbar
                            $(that._$body).removeClass('no-overflow');
                        }
                        return resolve(data);
                    });
                });
                // Show modal
                modalComponentInstance.show();
                return resolve({
                    componentRef: componentRef,
                    dismissPromise: dismissPromise
                });
            }, function (errors) {
                console.log(errors);
                return reject(null);
            });
        });
    };
    /**
     * Dialog
     * @param body
     * @param title
     * @param size
     * @returns {Promise<T>}
     */
    ModalService.prototype.dialog = function (body, title, size) {
        if (body === void 0) { body = 'Are you sure?'; }
        if (title === void 0) { title = 'Warning'; }
        if (size === void 0) { size = __WEBPACK_IMPORTED_MODULE_4__modal_wrapper_component__["a" /* ModalSizes */].sm; }
        return this.modalDialog(body, title, true, size);
    };
    /**
     * Alert
     * @param body
     * @param title
     * @param size
     * @returns {Promise<T>}
     */
    ModalService.prototype.alert = function (body, title, size) {
        if (body === void 0) { body = 'Are you sure?'; }
        if (title === void 0) { title = 'Warning'; }
        if (size === void 0) { size = __WEBPACK_IMPORTED_MODULE_4__modal_wrapper_component__["a" /* ModalSizes */].sm; }
        return this.modalDialog(body, title, false, size);
    };
    /**
     * Modal Dialog (default component)
     * @param body
     * @param title
     * @param isDialog
     * @param size
     * @returns {Promise<T>}
     *
     * Handling with return:
     * ModalService.modalDialog([parameters]).then(
     *     hasConfirm => {
     *         // Popup response
     *     },
     *     errors => {
     *         console.log(errors);
     *     }
     * );
     */
    ModalService.prototype.modalDialog = function (body, title, isDialog, size) {
        if (body === void 0) { body = 'Are you sure?'; }
        if (title === void 0) { title = 'Warning'; }
        if (isDialog === void 0) { isDialog = true; }
        if (size === void 0) { size = __WEBPACK_IMPORTED_MODULE_4__modal_wrapper_component__["a" /* ModalSizes */].sm; }
        var that = this;
        return new Promise(function (resolve, reject) {
            var popup = {
                module: __WEBPACK_IMPORTED_MODULE_2__modal_dialog_extension_module__["a" /* ModalDialogExtensionModule */],
                component: 'ModalDialogComponent',
                size: size
            };
            that.popup(popup).then(function (data) {
                // Set modal properties
                data.componentRef.instance.setTitle(title).setBody(body).setIsDialog(isDialog);
                data.dismissPromise.then(function (dismissData) { return resolve(dismissData); }, function (errors) { console.log(errors); return reject(false); });
            }, function (errors) { console.log(errors); return reject(false); });
        });
    };
    /**
     * Normalize alert type to a valid option
     * @param type
     * @returns {string}
     */
    ModalService.prototype.normalizeAlertType = function (type) {
        return (AlertTypes[type] || AlertTypes.info);
    };
    ModalService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["z" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__ts_dynamic_component_loader_service__["a" /* DynamicComponentLoaderService */]])
    ], ModalService);
    return ModalService;
}());



/***/ }),

/***/ "../../../../../src/AppBundle/Resources/public/popover/ts/popover.directive.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PopoverDirective; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var PopoverDirective = (function () {
    function PopoverDirective(_elementRef) {
        this._elementRef = _elementRef;
        this._$isFixedPopover = false; // Fix popover to avoid hide on leave event
    }
    /**
     * Show popover
     */
    PopoverDirective.prototype.onMouseEnter = function () {
        var offsetReference = this._$reference.offset();
        var top = 0, left = 0, right = 0, bottom = 0;
        // Needs to be inserted here, otherwise element size is not available to make calculus bellow
        this._$popover.insertAfter(this._$body);
        switch (this.popoverPosition) {
            case 'bottom':
                var heightReference = this._$reference.outerHeight(true);
                left = offsetReference.left;
                top = (offsetReference.top + heightReference + 2);
                break;
            case 'top':
                left = offsetReference.left;
                bottom = (offsetReference.top + 2);
                break;
        }
        switch (this.align) {
            case 'left':
                left = offsetReference.left;
                break;
            case 'right':
                right = offsetReference.right;
                break;
            case 'middle':
                var widthReference = this._$reference.outerWidth(true), width = this._$popover.outerWidth(true);
                left = (offsetReference.left + (widthReference / 2) - (width / 2));
                break;
        }
        this._$popover.css({
            left: (left || 'auto'),
            top: (top || 'auto'),
            right: (right || 'auto'),
            bottom: (bottom || 'auto')
        });
        this._$popover.show();
    };
    /**
     * Hide popover
     */
    PopoverDirective.prototype.onMouseLeave = function () {
        if (!this._$isFixedPopover) {
            this._$popover.hide(); // Use hide to avoid show immediately the popover before css attributes ate defined
            this._$popover.remove();
        }
    };
    /**
     * Toggle popover
     * @param $event
     */
    PopoverDirective.prototype.onMouseClick = function ($event) {
        // It can't be used, because prevent all events (checkbox, etc.)
        //if (event) { event.preventDefault(); }
        if (this._elementRef.nativeElement.contains($event.target) &&
            !this._$isFixedPopover) {
            this.onMouseEnter(); // Show
            this._$isFixedPopover = true;
        }
        else if (this._$isFixedPopover) {
            this._$isFixedPopover = false;
            this.onMouseLeave(); // Hide
        }
    };
    /**
     * Lifecycle callback
     */
    PopoverDirective.prototype.ngOnInit = function () {
        this._$popover = $(this._elementRef.nativeElement).find('.js_popover');
        this._$body = $('body');
        // Element reference to position the popup
        this._$reference = null;
        if (this.elementTarget && (this.elementTarget != '')) {
            this._$reference = $(this._elementRef.nativeElement)[this.elementTarget]();
        }
        if (!this._$reference) {
            this._$reference = $(this._elementRef.nativeElement).find('.js_icon');
        }
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Input */])('popover'),
        __metadata("design:type", String)
    ], PopoverDirective.prototype, "popoverPosition", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Input */])('align'),
        __metadata("design:type", String)
    ], PopoverDirective.prototype, "align", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Input */])('elementTarget'),
        __metadata("design:type", String)
    ], PopoverDirective.prototype, "elementTarget", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["x" /* HostListener */])('mouseenter'),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", void 0)
    ], PopoverDirective.prototype, "onMouseEnter", null);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["x" /* HostListener */])('mouseleave'),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", void 0)
    ], PopoverDirective.prototype, "onMouseLeave", null);
    PopoverDirective = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["s" /* Directive */])({
            selector: '[popover]',
            host: {
                '(document:click)': 'onMouseClick($event)',
            }
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_core__["t" /* ElementRef */]])
    ], PopoverDirective);
    return PopoverDirective;
}());



/***/ }),

/***/ "../../../../../src/AppBundle/Resources/public/popover/ts/popover.ext-module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PopoverExtModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("../../../common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__popover_directive__ = __webpack_require__("../../../../../src/AppBundle/Resources/public/popover/ts/popover.directive.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var PopoverExtModule = (function () {
    function PopoverExtModule() {
    }
    PopoverExtModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["H" /* NgModule */])({
            imports: [__WEBPACK_IMPORTED_MODULE_1__angular_common__["a" /* CommonModule */], __WEBPACK_IMPORTED_MODULE_2__angular_forms__["b" /* FormsModule */]],
            declarations: [
                __WEBPACK_IMPORTED_MODULE_3__popover_directive__["a" /* PopoverDirective */]
            ],
            exports: [
                __WEBPACK_IMPORTED_MODULE_3__popover_directive__["a" /* PopoverDirective */]
            ]
        })
    ], PopoverExtModule);
    return PopoverExtModule;
}());



/***/ }),

/***/ "../../../../../src/AppBundle/Resources/public/tasks-loader-manager/ts/tasks-loader-manager.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TasksLoaderManagerService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};

/**
 * Tasks Loader Manager manager.
 * This service manages the load/run of tasks. It controls tasks duplication (like form save, module loading, ect.),
 * and the loading panel (show and hide) according with pendent tasks.
 */
var TasksLoaderManagerService = (function () {
    function TasksLoaderManagerService(_helperService) {
        this._helperService = _helperService;
        // Local variables
        this._runningTasks = []; // Keep the running tasks to avoid task duplication (like save, etc.)
        this._loadingTasks = []; // Keep the loading tasks to controls the loading panel
        this._hasLoader = false;
        this._$loader = $('.js_loader');
    }
    /**
     * Add Task
     * @param task (use uppercase keys separated by "_" as convection)
     * @param hasLoading
     * @returns {boolean}
     */
    TasksLoaderManagerService.prototype.addTask = function (task, hasLoading) {
        if (hasLoading === void 0) { hasLoading = true; }
        if (this._helperService.inArray(task, this._runningTasks)) {
            // Task already is running, so we reject the duplication
            return false;
        }
        // Register running task
        this._runningTasks.push(task);
        if (hasLoading) {
            // Add task to loading tasks to show the loading panel
            this._loadingTasks.push(task);
            this.toggleLoading();
        }
        return true;
    };
    /**
     * Delete Task
     * @param task (use uppercase keys separated by "_" as convection)
     * @returns {boolean}
     */
    TasksLoaderManagerService.prototype.delTask = function (task) {
        var index = null;
        if ((index = this._helperService.arraySearch(task, this._runningTasks)) != null) {
            // Remove from tasks
            this._runningTasks.splice(index, 1);
            // Remove from loading tasks to hide the loading panel
            if ((index = this._helperService.arraySearch(task, this._loadingTasks)) != null) {
                this._loadingTasks.splice(index, 1);
                this.toggleLoading();
            }
            return true;
        }
        // Task does not exists
        return false;
    };
    /**
     * Has Task
     * @param task (use uppercase keys separated by "_" as convection)
     * @returns {boolean}
     */
    TasksLoaderManagerService.prototype.hasTask = function (task) {
        return ((this._helperService.arraySearch(task, this._runningTasks)) != null);
    };
    /**
     * Toggle Loading
     * @returns any
     */
    TasksLoaderManagerService.prototype.toggleLoading = function () {
        if ((this._loadingTasks.length > 0) && !this._hasLoader) {
            this._$loader.show();
            this._hasLoader = true;
        }
        else if ((this._loadingTasks.length < 1) && this._hasLoader) {
            this._$loader.hide();
            this._hasLoader = false;
        }
        return this;
    };
    TasksLoaderManagerService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["z" /* Injectable */])(),
        __param(0, Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["y" /* Inject */])('HelperService')),
        __metadata("design:paramtypes", [Object])
    ], TasksLoaderManagerService);
    return TasksLoaderManagerService;
}());



/***/ }),

/***/ "../../../../../src/AppBundle/Resources/public/ts/actions/actions.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ActionsService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};

var ActionsService = (function () {
    function ActionsService(_provider) {
        this._provider = _provider;
        // Default actions values (you can use set and get methods to change defaults)
        // (this protected properties doesn't are prefixed by '_' for rapid and simple access by this[action])
        this.edit = {
            icon: 'fa-pencil',
            isEnabled: false
        };
        this.add = {
            icon: 'fa-plus',
            isEnabled: false
        };
        this.copy = {
            icon: 'fa-copy',
            isEnabled: false
        };
        this.email = {
            icon: 'fa-envelope-o',
            isEnabled: false
        };
        this.pdf = {
            icon: 'fa-file-pdf-o',
            isEnabled: false
        };
        this.thumbnail = {
            icon: 'fa-picture-o',
            isEnabled: false
        };
        this.avatar = {
            icon: 'fa-user',
            isEnabled: false
        };
        this.detail = {
            icon: 'fa-eye',
            isEnabled: false
        };
        this.cancel = {
            icon: 'fa-ban',
            isEnabled: false
        };
        this.delete = {
            icon: 'fa-trash-o',
            isEnabled: false
        };
        this.search = {
            icon: 'fa-search',
            isEnabled: false
        };
        this.refresh = {
            icon: 'fa-refresh',
            isEnabled: true
        };
        this.collapse = {
            isEnabled: false
        };
        this.deleteAll = {
            icon: 'fa-trash-o',
            isEnabled: false
        };
        this.radioChoice = {
            icon: null,
            isEnabled: false
        };
        this.checkAll = {
            icon: 'fa-check-square-o',
            isEnabled: false
        };
        this.orderUp = {
            icon: 'fa-angle-double-up',
            isEnabled: false
        };
        this.orderDown = {
            icon: 'fa-angle-double-down',
            isEnabled: false
        };
        // Default actions for massive objects
        this._headActions = ['refresh', 'deleteAll', 'add', 'checkAll'];
        // Default actions for single object
        this._detailActions = ['orderUp', 'orderDown', 'detail', 'email', 'pdf', 'thumbnail', 'avatar',
            'cancel', 'delete', 'copy', 'edit'];
        if (this._provider) {
            for (var action in this._provider) {
                switch (action) {
                    case 'order':
                        this['orderUp']['isEnabled'] = this._provider[action];
                        this['orderDown']['isEnabled'] = this._provider[action];
                        break;
                    default:
                        if (this[action]) {
                            this[action]['isEnabled'] = this._provider[action];
                        }
                }
            }
        }
    }
    /**
     * Get action attribute
     * @param action
     * @param attribute
     * @returns {any}
     */
    ActionsService.prototype.getActionAttr = function (action, attribute) {
        if (this[action] && (attribute in this[action])) {
            return this[action][attribute];
        }
        return null;
    };
    /**
     * Get head actions (actions for objects head)
     * @returns {any}
     */
    ActionsService.prototype.getHeadActions = function () {
        return this._headActions;
    };
    /**
     * Get detail actions (actions for objects detail)
     * @returns {any}
     */
    ActionsService.prototype.getDetailActions = function () {
        return this._detailActions;
    };
    ActionsService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["z" /* Injectable */])(),
        __param(0, Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["y" /* Inject */])('ActionsServiceProvider')),
        __metadata("design:paramtypes", [Object])
    ], ActionsService);
    return ActionsService;
}());



/***/ }),

/***/ "../../../../../src/AppBundle/Resources/public/ts/base/base.extension-component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BaseExtensionComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

/**
 * Used only as base component to be extended for others components
 */
var BaseExtensionComponent = (function () {
    function BaseExtensionComponent() {
    }
    //protected _dataService: any;
    /**
     * Initialization of component (replace the original constructor to avoid angular injection inheritance bug)
     * @param elementRef
     * @param renderer
     * @param provider
     * //@param dataService
     */
    BaseExtensionComponent.prototype.initBaseExtensionComponent = function (elementRef, renderer, 
        // This provider can becomes any provider defined by your child
        // (don't need the "inject" because it's a static class, so will be provider by children components)
        provider
        // @TODO: Disabled for now, but is here to analise later how dataservice can handle with lazy loader
        //@Optional() @Inject('DataService') dataService: any = null
    ) {
        // Constructor vars
        this._elementRef = elementRef;
        this._renderer = renderer;
        this._provider = provider;
        //this._dataService = dataService;
        // Set defaults
        if (!this._provider) {
            this._provider = {};
        }
        // Set main class
        var mainClass = this.getProviderExtraDataAttr('class');
        if (mainClass) {
            this._renderer.setElementClass(this._elementRef.nativeElement, mainClass, true);
        }
    };
    /**
     * Set provider attribute
     * @param attribute
     * @param value
     * @returns {any|null}
     */
    BaseExtensionComponent.prototype.setProviderAttr = function (attribute, value) {
        this._provider[attribute] = value;
        return this;
    };
    /**
     * Get provider attribute
     * @param attribute
     * @returns {any|null}
     */
    BaseExtensionComponent.prototype.getProviderAttr = function (attribute) {
        return this._provider[attribute] || null;
    };
    /**
     * Get "localData" attribute
     * @param attribute
     * @returns any
     */
    BaseExtensionComponent.prototype.getLocalDataAttr = function (attribute) {
        return (this._provider['localData'][attribute] || null);
    };
    /**
     * Get provider extra data attribute
     * @param attribute
     * @returns {any|null}
     */
    BaseExtensionComponent.prototype.getProviderExtraDataAttr = function (attribute) {
        return ((this._provider['extraData'] && this._provider['extraData'][attribute])
            ? this._provider['extraData'][attribute]
            : null);
    };
    /**
     * Lifecycle callback
     */
    BaseExtensionComponent.prototype.ngAfterViewInit = function () {
        // Start loading lazy images
        // @TODO: This method should be called from DataService each time that objects are updated
        $(this._elementRef.nativeElement).find('.js_lazy').Lazy();
    };
    BaseExtensionComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: '.js_base',
            template: ''
        })
    ], BaseExtensionComponent);
    return BaseExtensionComponent;
}());



/***/ }),

/***/ "../../../../../src/AppBundle/Resources/public/ts/box/box.extension-component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BoxExtensionComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__base_base_extension_component__ = __webpack_require__("../../../../../src/AppBundle/Resources/public/ts/base/base.extension-component.ts");
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


/**
 * Box (simple base box)
 */
var BoxExtensionComponent = (function (_super) {
    __extends(BoxExtensionComponent, _super);
    function BoxExtensionComponent() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        // Controls the toggle of the show/hide content.
        // It starts "true" otherwise the content may not be rendered correctly.
        _this._isExpanded = true;
        return _this;
    }
    /**
     * Initialization of component (replace the original constructor to avoid angular injection inheritance bug)
     * @param elementRef
     * @param renderer
     * @param provider
     */
    BoxExtensionComponent.prototype.initBoxExtensionComponent = function (elementRef, renderer, provider) {
        _super.prototype.initBaseExtensionComponent.call(this, elementRef, renderer, provider);
    };
    /**
     * Expander action. Used by expanded directive output.
     * @param isExpanded (value returned by the expander directive on change)
     */
    BoxExtensionComponent.prototype.expanderAction = function (isExpanded) {
        this._isExpanded = isExpanded;
    };
    BoxExtensionComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: '.js_box',
            template: ''
        })
    ], BoxExtensionComponent);
    return BoxExtensionComponent;
}(__WEBPACK_IMPORTED_MODULE_1__base_base_extension_component__["a" /* BaseExtensionComponent */]));



/***/ }),

/***/ "../../../../../src/AppBundle/Resources/public/ts/data-service/data.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return OrderTypes; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DataService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__ = __webpack_require__("../../../platform-browser/esm5/platform-browser.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__post_service__ = __webpack_require__("../../../../../src/AppBundle/Resources/public/ts/post.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};



// OrderTypes
var OrderTypes = {
    up: 'up',
    down: 'down'
};
var DataService = (function () {
    function DataService(_postService, _helperService, _provider, _sanitizer
        //@Optional() protected _assetsLazyLoaderManagerService: AssetsLazyLoaderManagerService, // @TODO
    ) {
        this._postService = _postService;
        this._helperService = _helperService;
        this._provider = _provider;
        this._sanitizer = _sanitizer;
        // Current object (used by form)
        this._objectIndex = null; // Index of object in provider.objects (or in _objectsProvider if defined)
        this._object = null; // Raw object
        this._normalizedObject = null; // Object normalized to template
        // Objects provider is the context to work/handle with object instead of provider.objects
        // (used in TreeViewDataService, in this case the context is always provider.objects)
        this._objectsProvider = null;
        this._objectsIds = []; // Array of "ids" of objects in provider.objects.value to avoid duplications
        this._newObjectsIds = []; // Array of "ids" with new objects added by the user
        // Handles with assets lazy loader.
        // DataService it's that normalize data, so nobody better than him to knows when AssetsLazyLoaderManager should be called.
        // Assets lazy loader is called only for objects provided in construct, because in the other cases we cannot
        // control the template rendering to call the lazy loader at the right time.
        this._hasAssetsLazyLoader = true; // Controls if this feature should be used
        if (this._provider['pin']) {
            this.pinProvider();
        }
        this._onObjectChangeEmitter = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["v" /* EventEmitter */]();
        this._onObjectsRefreshEmitter = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["v" /* EventEmitter */]();
        this._onObjectsChangeEmitter = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["v" /* EventEmitter */]();
        this.setObjects(this._provider.objects || []);
        // Initialize the search
        this.initSearch();
    }
    /**
     * Pin provider, turning provider on an exclusive copy for this service.
     * It's useful when you have multiple DataServices in the same injector, so you can have multiple
     * problems if you share the same DataServiceProvider between them.
     * @returns {DataService}
     */
    DataService.prototype.pinProvider = function () {
        this._provider = this._helperService.cloneObject(this._provider, true);
        return this;
    };
    /**
     * Count objects (used in pagination)
     * @returns {number}
     */
    DataService.prototype.countObjects = function () {
        return this._helperService.varCount(this._provider.objects || []);
    };
    /**
     * Get object
     * @param index
     * @returns any
     */
    DataService.prototype.getObject = function (index) {
        if (index === void 0) { index = null; }
        if (index !== null) {
            var objectsProvider = (this._objectsProvider || this._provider.objects || []);
            return (objectsProvider[index] || null);
        }
        return this._object;
    };
    /**
     * Get object index
     * @returns any
     */
    DataService.prototype.getObjectIndex = function () {
        return this._objectIndex;
    };
    /**
     * Get selected object (object normalized to view)
     * @returns {any}
     */
    DataService.prototype.getNormalizedObject = function () {
        return this._normalizedObject;
    };
    /**
     * Get new objects
     * @returns {any}
     */
    DataService.prototype.getNewObjects = function () {
        return this._newObjectsIds;
    };
    /**
     * Get selected object emitter to tell all subscribers about changes
     * @returns {EventEmitter<any>}
     */
    DataService.prototype.getOnObjectChangeEmitter = function () {
        return this._onObjectChangeEmitter;
    };
    /**
     * Get on objects refresh emitter to tell all subscribers about changes
     * @returns {EventEmitter<any>}
     */
    DataService.prototype.getOnObjectsRefreshEmitter = function () {
        return this._onObjectsRefreshEmitter;
    };
    /**
     * Get on objects change emitter to tell all subscribers about changes (add, refresh, delete, etc)
     * @returns {EventEmitter<any>}
     */
    DataService.prototype.getOnObjectsChangeEmitter = function () {
        return this._onObjectsChangeEmitter;
    };
    /**
     * Get route
     * @param route
     * @returns {null}
     */
    DataService.prototype.getRoute = function (route) {
        if (route in this._provider.route) {
            return this._provider.route[route]['url'];
        }
        return null;
    };
    /**
     * Set route
     * @param index
     * @param url
     * @param name
     * @returns {DataService}
     */
    DataService.prototype.setRoute = function (index, url, name) {
        if (name === void 0) { name = null; }
        // Set new route if not exists
        if (!(index in this._provider.route)) {
            this._provider.route[index] = { name: null, route: null };
        }
        // Set values
        if (name) {
            this._provider.route[index]['name'] = name;
        }
        if (url) {
            this._provider.route[index]['url'] = url;
        }
        return this;
    };
    /**
     * Refresh selected object
     * @returns {DataService}
     */
    DataService.prototype.refreshObject = function () {
        var id = (this._object ? this._object['id'] : null);
        if (id) {
            var that_1 = this, route = (this._provider.route['get']['url'] + '/' + id);
            this._postService.post(route, this.getRequestData(null, false, false)).then(function (data) { that_1.handleResponse(data); }, function (errors) { console.log(errors); });
        }
        return this;
    };
    /**
     * Select object
     * @param index
     * @returns {Promise}
     */
    DataService.prototype.selectObject = function (index) {
        var that = this;
        return new Promise(function (resolve, reject) {
            // Set only if object is different
            if (index != that._objectIndex) {
                var objectsProvider = (that._objectsProvider || that._provider.objects);
                that._postService.post(that._provider.route['get']['url'] + '/' + objectsProvider[index]['id'], that.getRequestData(null, false, false)).then(function (data) {
                    // Local data (do not override, merge data)
                    if (data['localData']) {
                        that.setLocalData(data['localData']);
                    }
                    // Object
                    that._objectIndex = index; // The index of original object that was selected
                    that.setLocalObject(data.object);
                    // Now object has all of fields with the values, is not limited to the search selected field,
                    // so we need normalize the object, because now it can has new values.
                    that.setNormalizedObject();
                    return resolve(true);
                }, function (errors) { reject(false); });
            }
            else {
                return resolve(true);
            }
        });
    };
    /**
     * Set object (when the object is changed out of the objects array from _provider,
     * can be an external order)
     * @param object
     * @param index
     * @returns any
     */
    DataService.prototype.setObject = function (object, index) {
        if (index === void 0) { index = null; }
        if (object) {
            // Normalize object to template
            this._normalizedObject = this._helperService.cloneObject(object, true);
            this.normalizeObjectsToTemplate([this._normalizedObject]);
            // Objects stored in session does not be considered really objects.
            if (object['id'] && !object['_isSessionStorage']) {
                var objectsProvider = (this._objectsProvider || this._provider.objects);
                // Refresh objects array
                if ((index != null) && objectsProvider[index]) {
                    // Update existent object
                    this._objectIndex = index;
                    this._normalizedObject['_isEdited'] = true; // Flag to use in template
                    objectsProvider[index] = this._normalizedObject;
                    // Emmit changes (object has been edited in objects list)
                    this._onObjectsChangeEmitter.emit(null);
                }
                else {
                    // Add new object at first of array (to best user experience)
                    this._objectIndex = 0; // Update index to the new index
                    this._normalizedObject['_isNew'] = true; // Flag to use in template
                    this.pushToObjects([this._normalizedObject], true);
                    this._newObjectsIds.push(object['id']); // New object added
                }
            }
            this.setLocalObject(object);
        }
        return this;
    };
    /**
     * Set normalized object (can be called out of the service).
     * Used by "auto-complete".
     * @param object
     * @returns any
     */
    DataService.prototype.setNormalizedObject = function (object) {
        if (object === void 0) { object = null; }
        var objectsProvider = (this._objectsProvider || this._provider.objects);
        object = (object || this._object);
        if (object) {
            // Normalize object to template
            this._normalizedObject = this._helperService.cloneObject(object, true);
            this.normalizeObjectsToTemplate([this._normalizedObject]);
            // Update normalized object in objects provider
            if ((this._objectIndex != null) && objectsProvider[this._objectIndex]) {
                objectsProvider[this._objectIndex] = this._normalizedObject;
            }
        }
        return this;
    };
    /**
     * Set local object (when the object is changed based in the objects array from _provider,
     * always is an internal order)
     * @param object
     * @returns {DataService}
     */
    DataService.prototype.setLocalObject = function (object) {
        this._object = object;
        this._onObjectChangeEmitter.emit(this._object);
        return this;
    };
    /**
     * Search initialization
     * @returns {DataService}
     */
    DataService.prototype.initSearch = function () {
        this._candidateSearch = this._helperService.cloneObject(this._provider['search'], true);
        return this;
    };
    /**
     * Set search
     * @param value
     * @param attribute
     * @returns {DataService}
     */
    DataService.prototype.setSearch = function (value, attribute) {
        if (attribute === void 0) { attribute = null; }
        if (attribute && (attribute in this._provider.search)) {
            this._provider.search[attribute] = value;
        }
        else if (attribute) {
            return this; // Unknown attribute
        }
        else {
            this._provider.search = value;
        }
        // Reinitialize the search
        this.initSearch();
        return this;
    };
    /**
     * Get search
     * @param attribute
     * @returns any
     */
    DataService.prototype.getSearch = function (attribute) {
        if (attribute === void 0) { attribute = null; }
        if (attribute && (attribute in this._provider.search)) {
            return this._provider.search[attribute];
        }
        else if (attribute) {
            return null; // Unknown attribute
        }
        return this._provider.search;
    };
    /**
     * Get fields
     * @param attribute
     * @returns any
     */
    DataService.prototype.getFields = function (attribute) {
        if (attribute === void 0) { attribute = null; }
        if (attribute && (attribute in this._provider.fields)) {
            return this._provider.fields[attribute];
        }
        else if (attribute) {
            return null; // Unknown attribute
        }
        return this._provider.fields;
    };
    /**
     * Set objects
     * @param objects
     * @param isMerge (if true merge objects, otherwise replace them)
     * @returns any
     */
    DataService.prototype.setObjects = function (objects, isMerge) {
        if (isMerge === void 0) { isMerge = false; }
        objects = (objects || []);
        this.normalizeObjectsToTemplate(objects);
        // Merge objects
        if (isMerge) {
            this.pushToObjects(objects);
        }
        else {
            this.resetObjects();
            this.pushToObjects(objects);
        }
        // Emmit changes
        this._onObjectsRefreshEmitter.emit(objects);
        return this;
    };
    /**
     * Reset objects
     * @returns {DataService}
     */
    DataService.prototype.resetObjects = function () {
        this._provider.objects = [];
        this._objectsIds = [];
        this._newObjectsIds = [];
        this._objectIndex = null; // Reset object index
        return this;
    };
    /**
     * Push to objects
     * @param objects
     * @param isFirst (determines if objects should be at first)
     * @returns any
     */
    DataService.prototype.pushToObjects = function (objects, isFirst) {
        if (isFirst === void 0) { isFirst = false; }
        var //hasChanges = false, // To control the changes emitter
        objectsProvider = (this._objectsProvider || this._provider.objects);
        for (var _i = 0, objects_1 = objects; _i < objects_1.length; _i++) {
            var obj = objects_1[_i];
            if (!this._helperService.inArray(parseInt(obj['id']), this._objectsIds)) {
                if (isFirst) {
                    objectsProvider.unshift(obj);
                }
                else {
                    objectsProvider.push(obj);
                }
                this._objectsIds.push(parseInt(obj['id']));
                //hasChanges = true;
            }
        }
        // Emmit changes (object has been added)
        this._onObjectsChangeEmitter.emit(null);
        return this;
    };
    /**
     * Pull from objects
     * @param index
     * @returns any
     */
    DataService.prototype.pullFromObjects = function (index) {
        var objectsProvider = (this._objectsProvider || this._provider.objects), objId = parseInt(objectsProvider[index]['id']);
        objectsProvider.splice(index, 1);
        if ((index = this._helperService.arraySearch(objId, this._objectsIds)) != null) {
            this._objectsIds.splice(index, 1);
        }
        if ((index = this._helperService.arraySearch(objId, this._newObjectsIds)) != null) {
            this._newObjectsIds.splice(index, 1);
        }
        // Emmit changes (object has been deleted)
        this._onObjectsChangeEmitter.emit(null);
        return this;
    };
    /**
     * Get field choice
     * @param field
     * @param key (key of field choice)
     * @returns {*|null}
     */
    DataService.prototype.getFieldChoice = function (field, key) {
        if (key === void 0) { key = null; }
        // Return a specific field choice by key
        if (key in this._provider.fields.choices[field]['value']) {
            return this._provider.fields.choices[field]['value'][key];
        }
        return null;
    };
    /**
     * Get field choices attribute
     * @param field
     * @param attribute
     * @returns {any}
     */
    DataService.prototype.getFieldChoicesAttr = function (field, attribute) {
        // Return a specific attribute of field choices
        if (this._provider.fields.choices[field] && (attribute in this._provider.fields.choices[field])) {
            return this._provider.fields.choices[field][attribute];
        }
        return null;
    };
    /**
     * Get field choices
     * @param field
     * @returns {*|null}
     */
    DataService.prototype.getFieldChoices = function (field) {
        return this._provider.fields.choices[field]['value'] || null;
    };
    /**
     * Set fields choices.
     * @param fieldsChoices
     * @returns {DataService}
     */
    DataService.prototype.setFieldsChoices = function (fieldsChoices) {
        // Merge only defined fields (generally foreign key object with sef reference)
        this._provider['fields']['choices'] = this._helperService.mergeObjects(this._provider['fields']['choices'], fieldsChoices || {});
        return this;
    };
    /**
     * Merge provider attribute
     * @param attribute
     * @param value
     * @returns {DataService}
     */
    DataService.prototype.mergeProviderAttr = function (attribute, value) {
        if (attribute in this._provider) {
            this._provider[attribute] =
                this._helperService.mergeObjects(this._provider[attribute], value);
        }
        return this;
    };
    /**
     * Set provider attribute
     * @param attribute
     * @param value
     * @returns {DataService}
     */
    DataService.prototype.setProviderAttr = function (attribute, value) {
        if (attribute in this._provider) {
            this._provider[attribute] = value;
        }
        return this;
    };
    /**
     * Get provider attribute
     * @param attribute
     * @returns {any|null}
     */
    DataService.prototype.getProviderAttr = function (attribute) {
        return (this._provider[attribute] || null);
    };
    /**
     * Get "localData" attribute
     * @param attribute
     * @returns any
     */
    DataService.prototype.getLocalDataAttr = function (attribute) {
        if (attribute === void 0) { attribute = null; }
        return (this._provider['localData']['data'][attribute] || null);
    };
    /**
     * Get provider extra data attribute
     * @param attribute
     * @returns {any|null}
     */
    DataService.prototype.getProviderExtraDataAttr = function (attribute) {
        return ((this._provider['extraData'] && this._provider['extraData'][attribute])
            ? this._provider['extraData'][attribute]
            : null);
    };
    /**
     * Get candidate search
     * @returns any
     */
    DataService.prototype.getCandidateSearch = function () {
        return (this._candidateSearch || null);
    };
    /**
     * Get candidate search attribute
     * @param attribute
     * @returns any
     */
    DataService.prototype.getCandidateSearchAttr = function (attribute) {
        return this._candidateSearch[attribute] || null;
    };
    /**
     * Reset extra fields
     * @returns {DataService}
     */
    DataService.prototype.resetExtraFields = function () {
        if (this.getProviderExtraDataAttr('fields')) {
            for (var field in this.getProviderExtraDataAttr('fields')) {
                this._provider.extraData.fields[field] = null;
            }
        }
        return this;
    };
    /**
     * Normalize objects to show in template
     * Detect fields that needs to be rendered to view/template
     * @param objects
     * @param fields
     * @param fieldsMetadata
     * @param fieldsChoices
     * @returns any
     */
    DataService.prototype.normalizeObjectsToTemplate = function (objects, fields, fieldsMetadata, fieldsChoices) {
        if (objects === void 0) { objects = null; }
        if (fields === void 0) { fields = null; }
        if (fieldsMetadata === void 0) { fieldsMetadata = null; }
        if (fieldsChoices === void 0) { fieldsChoices = null; }
        objects = (objects || this._provider.objects);
        fields = (fields || this._provider.fields['view']);
        fieldsMetadata = (fieldsMetadata || this._provider.fields['metadata'] || {});
        fieldsChoices = (fieldsChoices || this._provider.fields.choices || null);
        if (objects && fields) {
            for (var _i = 0, fields_1 = fields; _i < fields_1.length; _i++) {
                var field = fields_1[_i];
                var fieldMetadata = fieldsMetadata[field];
                if (fieldMetadata['skipNormalizer']) {
                    continue;
                }
                switch (fieldMetadata['type']) {
                    case 'img':
                    case 'avatar':
                    case 'boolean':
                    case 'code':
                    case 'percentage':
                    case 'monetary':
                    case 'icon':
                    case 'link':
                    case 'status':
                        for (var _a = 0, objects_2 = objects; _a < objects_2.length; _a++) {
                            var obj = objects_2[_a];
                            if (typeof obj[field] != 'undefined') {
                                // Keep a copy of original value (usually boolean and monetary field to use in controls)
                                if (fieldMetadata['keepOriginalNormalizer']) {
                                    obj['__' + field] = obj[field];
                                }
                                obj[field] = this.renderField(field, obj, fieldsMetadata);
                            }
                        }
                        break;
                }
                // For "enum" type (key is the label, pattern of Symfony ChoiceType)
                if (fieldsChoices && fieldsChoices[field] && fieldsChoices[field]['value']) {
                    var enumObj = fieldsChoices[field]['value'];
                    for (var _b = 0, objects_3 = objects; _b < objects_3.length; _b++) {
                        var obj = objects_3[_b];
                        for (var enumKey in enumObj) {
                            if (enumObj[enumKey] == obj[field]) {
                                obj[field] = enumKey;
                            }
                        }
                    }
                }
            }
            // @TODO: Analise better how lazy loader should be handled
            if (this._hasAssetsLazyLoader) {
                this._hasAssetsLazyLoader = false;
            }
        }
        return this;
    };
    /**
     * Set Has Assets Lazy Loader
     * @TODO: Not used for now, it's here to analise better in future how lazy loader should be handled
     * @param hasAssetsLazyLoader
     */
    /*public setHasAssetsLazyLoader (hasAssetsLazyLoader: boolean)
    {
        this._hasAssetsLazyLoader = hasAssetsLazyLoader;
    }*/
    /**
     * Run Assets Lazy Loader
     * @TODO: Not used for now, it's here to analise better in future how lazy loader should be handled
     */
    /*public runAssetsLazyLoader()
    {
        // Only can be used in the first load (check out the comment above)
        if (this._hasAssetsLazyLoader) {
            this._hasAssetsLazyLoader = false;
            this._assetsLazyLoaderManagerService.load();
            console.log("Lazy load called in dataservice");
        }
    }*/
    /**
     * Render field
     * @param field
     * @param object
     * @param fieldsMetadata
     * @returns {string}
     */
    DataService.prototype.renderField = function (field, object, fieldsMetadata) {
        if (fieldsMetadata === void 0) { fieldsMetadata = null; }
        // Get field metadata
        fieldsMetadata = (fieldsMetadata || this._provider.fields['metadata'] || {});
        var fieldMetadata = (fieldsMetadata[field] || null), value = object[field];
        // Render field to the view/template
        if (fieldMetadata) {
            switch (fieldMetadata['type']) {
                case 'boolean':
                    if (this._helperService.castToBoolean(value)) {
                        return ('<i class="fa fa-check"></i>');
                    }
                    else {
                        return ('<i class="fa fa-ban"></i>');
                    }
                case 'code':
                    if (object['storeObj']
                        && this._helperService.getAppVar('stores')
                        && this._helperService.getAppVar('stores')[object['storeObj']]) {
                        return this._sanitizer.bypassSecurityTrustHtml(// Used to allow the style attr
                        '<span class="store" style="background-color: '
                            + this._helperService.getAppVar('stores')[object['storeObj']]['color']
                            + '">' + value + '</span>');
                    }
                    return (value);
                case 'percentage':
                    return (value + '%');
                case 'monetary':
                    return (value + '€');
                case 'icon':
                    return ('<i class="fa ' + value + '"></i>');
                case 'link':
                    return ('<a href="' + value + '" target="_blank" class="text-base">' + value + '</a>');
                case 'img':
                case 'avatar':
                    var extraClass = ((fieldMetadata['type'] == 'avatar') ? 'img-circle' : 'thumbnail');
                    // No image is provided
                    if (!value) {
                        return ('<img alt="' + fieldMetadata['label'] + '" class="' + extraClass
                            + '" src="/assets/img/dummy-48x48.png">');
                    }
                    // Regular load
                    if (!this._hasAssetsLazyLoader) {
                        return ('<img alt="' + fieldMetadata['label'] + '" class="' + extraClass
                            + '" src="' + (this._helperService.getUploadWebPath(value) || value) + '">');
                    }
                    // Use lazy loader
                    return this._sanitizer.bypassSecurityTrustHtml('<img alt="' + fieldMetadata['label'] + '" class="js_lazy ' + extraClass
                        + '" src="/assets/img/dummy-48x48.png" data-src="'
                        + (this._helperService.getUploadWebPath(value) || value) + '">');
                case 'status':
                    var statusMap = { 'NO': 'danger', 'PARTIAL': 'warning', 'YES': 'primary' };
                    return ('<span class="status -' + (statusMap[value] || 'danger') + '"></span>');
            }
        }
        return value;
    };
    /**
     * New object (call this function to create a new object)
     * @param index (to create object based on another)
     * @param object (to create object based on a pre existent object)
     * @returns {Promise}
     */
    DataService.prototype.newObject = function (index, object) {
        if (index === void 0) { index = null; }
        if (object === void 0) { object = null; }
        var that = this;
        return new Promise(function (resolve, reject) {
            if (object) {
                // Object has pre existent data (for example can be from backend session storage)
                that.setNewObject(object);
                return resolve(true);
            }
            var newObj = {};
            // Create by copy
            if (index != null) {
                var objectsProvider = (that._objectsProvider || that._provider.objects);
                return that._postService.post(that._provider.route['get']['url'] + '/' + objectsProvider[index]['id'], that.getRequestData()).then(function (data) {
                    for (var _i = 0, _a = that._provider.fields['form']; _i < _a.length; _i++) {
                        var field = _a[_i];
                        newObj[field] = ((that._provider.fields['metadata'][field]['acl'] === 'read')
                            ? (that._provider.fields['metadata'][field]['default'] || null)
                            : (data.object[field] || null));
                        // "fieldInView" (for auto-complete, html-select, etc.)
                        if (that._provider.fields['metadata'][field]['fieldInView'] && newObj[field]) {
                            var fieldInView = that._provider.fields['metadata'][field]['fieldInView'];
                            newObj[fieldInView] = data.object[fieldInView];
                        }
                    }
                    that.setNewObject(newObj);
                    return resolve(true);
                }, function (errors) { console.log(errors); return reject(false); });
            }
            else {
                // Create by server action
                if (that._provider.route['new']) {
                    return that._postService.post(that._provider.route['new']['url'], that.getRequestData()).then(function (data) {
                        // Local data (do not override, merge data)
                        if (data['localData']) {
                            that.setLocalData(data['localData']);
                        }
                        // Object
                        that.setNewObject(data.object);
                        return resolve(true);
                    }, function (errors) { console.log(errors); return reject(false); });
                }
                else {
                    for (var _i = 0, _a = that._provider.fields['form']; _i < _a.length; _i++) {
                        var field = _a[_i];
                        newObj[field] = (that._provider.fields['metadata'][field]['default'] || null);
                    }
                    that.setNewObject(newObj);
                    return resolve(true);
                }
            }
        });
    };
    /**
     * Set new object
     * @param object
     * @returns {DataService}
     */
    DataService.prototype.setNewObject = function (object) {
        // Normalize object to template
        this._normalizedObject = this._helperService.cloneObject(object, true);
        this.normalizeObjectsToTemplate([this._normalizedObject]);
        // Set object
        this._objectIndex = null;
        this.setLocalObject(object);
        this.resetExtraFields();
        return this;
    };
    /**
     * Save object.
     * @param data
     * @param id
     * @param route (specific route to save)
     * @returns {Promise}
     */
    DataService.prototype.save = function (data, id, route) {
        if (id === void 0) { id = null; }
        if (route === void 0) { route = null; }
        var that = this;
        return new Promise(function (resolve, reject) {
            // Set route (if id is provided, use 'edit', else try 'add')
            if (!route) {
                var routeName = (id ? 'edit' : (that._provider.route['add'] ? 'add' : 'edit'));
                route = (that._provider.route[routeName] ? that._provider.route[routeName]['url'] : null);
                if (!route) {
                    console.log('Error: No route was defined!');
                    return reject({});
                }
            }
            if (id) {
                route += ('/' + id);
            }
            that._postService.post(route, that.getRequestData(data)).then(function (data) {
                that.handleResponse(data);
                return resolve(data['object'] || null);
            }, function (errors) {
                if (errors['data']) {
                    that.handleResponse(errors['data']);
                }
                return reject(errors['errors'] || {});
            });
        });
    };
    /**
     * Search objects
     * @returns {DataService}
     */
    DataService.prototype.search = function () {
        // Only search if parameters have changed
        if (this._helperService.isEqualObject(this._provider['search'], this._candidateSearch)) {
            return this;
        }
        // Update search
        this._provider['search'] = this._helperService.cloneObject(this._candidateSearch, true);
        // Refresh objects
        return this.refresh();
    };
    /**
     * Refresh list of objects
     * @returns {DataService}
     */
    DataService.prototype.refresh = function () {
        var that = this;
        // Reset pagination for new search
        this.resetPagination();
        this._postService.post(this._provider.route['get']['url'], this.getRequestData(null, false)).then(function (data) { that.handleResponse(data); }, function (errors) { console.log(errors); });
        return this;
    };
    /**
     * Get more objects (pagination)
     * @returns {DataService}
     */
    DataService.prototype.getMoreObjects = function () {
        var that = this;
        this._postService.post(this._provider.route['get']['url'], this.getRequestData()).then(function (data) {
            // Update objects
            data.objects = (data.objects || []);
            that.handleResponse(data, null, true);
        }, function (errors) { console.log(errors); });
        return this;
    };
    /**
     * Get choices of entity based on search configuration (for select, auto-complete, etc.)
     * @returns {DataService}
     */
    DataService.prototype.choices = function () {
        var that = this, noReset = true;
        // Only search if parameters have changed (only criteria is changed)
        if (!this._helperService.isEqualObject(this._provider['search']['criteria'], this._candidateSearch['criteria'])) {
            // Update search
            this._provider['search']['criteria'] = this._candidateSearch['criteria'].slice(0);
            console.log(this._provider['search']['criteria']);
            console.log(this._candidateSearch['criteria']);
            // Reset pagination for new search
            this.resetPagination();
            // To reset objects
            noReset = false;
        }
        // No field is necessary, is returned the choices pattern (minimizes data sent)
        this._provider['search']['fields'] = [];
        this._postService.post(this._provider.route['choices']['url'], this.getRequestData(null, noReset)).then(function (data) {
            data.objects = (data.objects || []);
            that.handleResponse(data, null, noReset);
        }, function (errors) { console.log(errors); });
        return this;
    };
    /**
     * Order object (change priority value).
     * @param index
     * @param type
     * @returns any
     */
    DataService.prototype.order = function (index, type) {
        var that = this, objectsProvider = (this._objectsProvider || this._provider.objects);
        if (OrderTypes[type] // Validate order type
            && ((objectsProvider[index]['priority'] > 0) || (OrderTypes[type] == 'down'))) {
            this._postService.post((this._provider.route['order']['url'] + '/' + objectsProvider[index]['id'] + '/' + OrderTypes[type]), that.getRequestData()).then(function (data) {
                that.handleResponse(data, index);
                // If objects are not returned, then order objects by "search" "orderBy" provider
                if (data.object) {
                    if (!data.objects) {
                        // Get fields from search
                        var orderFields = that._provider.search.orderBy.map(function ($item) {
                            return $item['field'];
                        });
                        that._helperService.orderObjects(that._provider.objects, orderFields);
                    }
                }
            }, function (errors) {
                console.log(errors);
            });
        }
        return this;
    };
    /**
     * Cancel object.
     * @param index
     * @returns {Promise}
     */
    DataService.prototype.cancel = function (index) {
        var that = this, objectsProvider = (this._objectsProvider || this._provider.objects);
        return new Promise(function (resolve, reject) {
            that._postService.post(that._provider.route['cancel']['url'] + '/' + objectsProvider[index]['id'], that.getRequestData()).then(function (data) {
                that.handleResponse(data, index);
                return resolve(true);
            }, function (errors) { return reject(false); });
        });
    };
    /**
     * Delete object.
     * @param index
     * @returns {Promise}
     */
    DataService.prototype.delete = function (index) {
        var that = this, objectsProvider = (this._objectsProvider || this._provider.objects);
        return new Promise(function (resolve, reject) {
            that._postService.post(that._provider.route['delete']['url'] + '/' + objectsProvider[index]['id'], that.getRequestData()).then(function (data) {
                // Refresh objects array removing the removed object
                if (!data.objects) {
                    that.pullFromObjects(index);
                }
                // Reset object index
                that._objectIndex = null;
                that.handleResponse(data);
                return resolve(true);
            }, function (errors) { return reject(false); });
        });
    };
    /**
     * Delete objects from array by index.
     * @param indexes
     * @returns {DataService}
     */
    DataService.prototype.deleteArray = function (indexes) {
        var that = this;
        var objects = this._provider.objects;
        var idArr = [];
        if (objects && indexes && (indexes.length > 0)) {
            for (var _i = 0, indexes_1 = indexes; _i < indexes_1.length; _i++) {
                var index = indexes_1[_i];
                index = index.value;
                if (objects[index]) {
                    idArr.push(objects[index]['id']);
                }
            }
        }
        this._postService.post(this._provider.route['delete']['url'], this.getRequestData({ id: idArr })).then(function (data) {
            that.handleResponse(data);
            // Refresh objects array
            // Correction for index (each time you remove an index, all indices needs to be corrected)
            var indexCorrection = 0;
            for (var _i = 0, indexes_2 = indexes; _i < indexes_2.length; _i++) {
                var index = indexes_2[_i];
                index = index.value;
                if (objects[index]) {
                    that.pullFromObjects(index - indexCorrection);
                    indexCorrection++;
                }
            }
        }, function (errors) { console.log(errors); });
        return this;
    };
    /**
     * Detail object.
     * @param index
     */
    DataService.prototype.detail = function (index) {
        if (index === void 0) { index = null; }
        return this.redirect('detail', index);
    };
    /**
     * Redirect page.
     * @param route
     * @param index
     */
    DataService.prototype.redirect = function (route, index) {
        if (index === void 0) { index = null; }
        index = ((index == null) ? this._objectIndex : index);
        var objectsProvider = (this._objectsProvider || this._provider.objects), idField = (this._provider.route[route]['idField'] || 'id');
        location.href = (this._provider.route[route]['url'] + '/' + objectsProvider[index][idField]);
        return;
    };
    /**
     * Run/Execute action. Execute action directly.
     * @param route
     * @param data
     * @param updateData
     * @returns {Promise}
     */
    DataService.prototype.runAction = function (route, data, updateData) {
        if (data === void 0) { data = null; }
        if (updateData === void 0) { updateData = false; }
        var that = this;
        return new Promise(function (resolve, reject) {
            return that._postService.post(route, that.getRequestData(data, false, false)).then(function (data) {
                if (updateData) {
                    that.handleResponse(data);
                }
                return resolve(data);
            }, function (errors) {
                if (updateData && errors['data']) {
                    that.handleResponse(errors['data']);
                }
                return reject(errors['errors'] || {});
            });
        });
    };
    /**
     * Submit indexes id
     * @param route
     * @param indexes
     * @param allowEmptySubmit (allow submit when data is empty,
     * some cases it is necessary to inform that the user does not select any choice)
     * @returns {Promise}
     */
    DataService.prototype.submitIndexesId = function (route, indexes, allowEmptySubmit) {
        if (allowEmptySubmit === void 0) { allowEmptySubmit = false; }
        var that = this;
        var objects = this._provider.objects;
        var idArr = [];
        return new Promise(function (resolve, reject) {
            if (objects && indexes && (indexes.length > 0)) {
                for (var _i = 0, indexes_3 = indexes; _i < indexes_3.length; _i++) {
                    var index = indexes_3[_i];
                    if (objects[index.value]) {
                        idArr.push(objects[index.value]['id']);
                    }
                }
            }
            if ((idArr.length > 0) || allowEmptySubmit) {
                // Submit to provided route
                return that.runAction(route, { id: idArr }).then(function (data) { return resolve(data); }, function (errors) { return reject(errors); });
            }
            else {
                // No indexes to submit
                return resolve(null);
            }
        });
    };
    /**
     * Get data to request
     * @param data
     * @param updatePagination (determines if pagination should be updated before return request data)
     * @param hasSearch (determines if search is sent)
     * @returns {any}
     */
    DataService.prototype.getRequestData = function (data, updatePagination, hasSearch) {
        if (data === void 0) { data = null; }
        if (updatePagination === void 0) { updatePagination = true; }
        if (hasSearch === void 0) { hasSearch = true; }
        // Update pagination
        if (updatePagination) {
            this.updatePagination();
        }
        if (!data || (typeof data == 'object')) {
            return {
                csrfToken: this._helperService.getAppVar('csrfToken'),
                search: (hasSearch ? this._provider['search'] : null),
                data: data
            };
        }
        // If data is provided it's assume that is a serialized form
        return (data + '&search=' + JSON.stringify(this._provider['search']));
    };
    /**
     * Reset pagination offset
     * @returns {DataService}
     */
    DataService.prototype.resetPagination = function () {
        this._provider.search.offset = 0;
        return this;
    };
    /**
     * Reset pagination offset
     * @returns {DataService}
     */
    DataService.prototype.updatePagination = function () {
        this._provider.search.offset = (this._provider.objects.length - this._newObjectsIds.length);
        return this;
    };
    /**
     * Set local data
     * @param localData
     */
    DataService.prototype.setLocalData = function (localData) {
        // Local data (do not override, merge data)
        if (localData) {
            if (localData['data']) {
                this._provider.localData['data'] = this._helperService.mergeObjects(this._provider.localData['data'], localData['data']);
            }
            if (localData['template']) {
                this._provider.localData['template'] = this._helperService.mergeObjects(this._provider.localData['template'], localData['template']);
            }
        }
    };
    /**
     * Handle with regular server responses
     * @param response
     * @param objectIndex (object index to update object)
     * @param hasMergeObjects (merge array of objects, otherwise will be override)
     * @returns {DataService}
     */
    DataService.prototype.handleResponse = function (response, objectIndex, hasMergeObjects) {
        if (objectIndex === void 0) { objectIndex = null; }
        if (hasMergeObjects === void 0) { hasMergeObjects = false; }
        // Set default object index (this can be done in method signature)
        if (objectIndex === null) {
            objectIndex = this._objectIndex;
        }
        // Refresh all objects
        if (response['objects']) {
            this.setObjects(response['objects'], hasMergeObjects);
        }
        // Refresh object
        if (response['object']) {
            this.setObject(response['object'], objectIndex);
        }
        // Local data (do not override, merge data)
        if (response['localData']) {
            this.setLocalData(response['localData']);
        }
        // Refresh fields choices
        if (response['fields'] && response['fields']['choices']) {
            this.setFieldsChoices(response['fields']['choices']);
        }
        // Update search pagination
        if (response['search'] && (typeof response['search']['hasMore'] != 'undefined')) {
            // Equals search in provider and candidate search to avoid return false
            // in comparisons doing unnecessary searches.
            this._candidateSearch.hasMore = this._provider.search.hasMore
                = this._helperService.castToBoolean(response['search']['hasMore']);
            this._candidateSearch.offset = this._provider.search.offset
                = (response['search']['offset'] || 0);
        }
        return this;
    };
    DataService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["z" /* Injectable */])(),
        __param(1, Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["y" /* Inject */])('HelperService')),
        __param(2, Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["y" /* Inject */])('DataServiceProvider')),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__post_service__["a" /* PostService */], Object, Object, __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__["b" /* DomSanitizer */]
            //@Optional() protected _assetsLazyLoaderManagerService: AssetsLazyLoaderManagerService, // @TODO
        ])
    ], DataService);
    return DataService;
}());



/***/ }),

/***/ "../../../../../src/AppBundle/Resources/public/ts/dynamic-component-loader.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DynamicComponentLoaderService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__tasks_loader_manager_ts_tasks_loader_manager_service__ = __webpack_require__("../../../../../src/AppBundle/Resources/public/tasks-loader-manager/ts/tasks-loader-manager.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


// Service
var DynamicComponentLoaderService = (function () {
    function DynamicComponentLoaderService(_compiler, _tasksLoaderManagerService) {
        this._compiler = _compiler;
        this._tasksLoaderManagerService = _tasksLoaderManagerService;
    }
    /**
     * Load component into ViewContainerRef
     * @param module
     * @param component (component name)
     * @param viewContainerRef
     * @param injector (result of:
     *     injector = ReflectiveInjector.fromResolvedProviders(
     *         ReflectiveInjector.resolve([
     *             MyService,
     *             {provide: 'MyProvider', useValue: null}
     *         ]),
     *         this._injector
     *     );
     * )
     * @returns {Promise<T>}
     */
    DynamicComponentLoaderService.prototype.load = function (module, component, viewContainerRef, injector) {
        if (injector === void 0) { injector = null; }
        this._tasksLoaderManagerService.addTask('DYNAMIC_COMPONENT_LOADING');
        var that = this;
        return new Promise(function (resolve, reject) {
            that.getComponentFactory(module, component).then(function (componentFactory) {
                var componentRef = viewContainerRef.createComponent(componentFactory, 0, injector, []);
                that._tasksLoaderManagerService.delTask('DYNAMIC_COMPONENT_LOADING');
                return resolve(componentRef);
            });
        });
    };
    /**
     * Get component factory
     * @param module
     * @param component (component name)
     * @returns {Promise<T>}
     */
    DynamicComponentLoaderService.prototype.getComponentFactory = function (module, component) {
        var that = this;
        return new Promise(function (resolve, reject) {
            that._compiler.compileModuleAndAllComponentsAsync(module).then(function (moduleFactory) {
                var componentFactory = moduleFactory.componentFactories.find(function (tmpComponentFactory) { return tmpComponentFactory.componentType['name'] === component; });
                return resolve(componentFactory);
            });
        });
    };
    DynamicComponentLoaderService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["z" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_core__["k" /* Compiler */],
            __WEBPACK_IMPORTED_MODULE_1__tasks_loader_manager_ts_tasks_loader_manager_service__["a" /* TasksLoaderManagerService */]])
    ], DynamicComponentLoaderService);
    return DynamicComponentLoaderService;
}());



/***/ }),

/***/ "../../../../../src/AppBundle/Resources/public/ts/expander/expander.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ExpanderComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

// Component
var ExpanderComponent = (function () {
    function ExpanderComponent() {
        this.isExpanded = false;
        this.hasIcon = true;
        this.customClass = ''; // customClass instead of class because is a reserved word
        this.onChange = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["v" /* EventEmitter */]();
    }
    /**
     * Toggle expanded
     * @param $event
     */
    ExpanderComponent.prototype.toggleAction = function ($event) {
        $event.preventDefault();
        this.isExpanded = !this.isExpanded;
        this.onChange.emit(this.isExpanded);
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Input */])(),
        __metadata("design:type", Boolean)
    ], ExpanderComponent.prototype, "isExpanded", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Input */])(),
        __metadata("design:type", String)
    ], ExpanderComponent.prototype, "label", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Input */])(),
        __metadata("design:type", Boolean)
    ], ExpanderComponent.prototype, "hasIcon", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Input */])(),
        __metadata("design:type", String)
    ], ExpanderComponent.prototype, "customClass", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["N" /* Output */])(),
        __metadata("design:type", Object)
    ], ExpanderComponent.prototype, "onChange", void 0);
    ExpanderComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'js_expander',
            template: "\n    <a [ngClass]=\"['no-user-select', 'expander', customClass]\"\n       (click)=\"toggleAction($event)\">\n        <i *ngIf=\"hasIcon\" [ngClass]=\"['fa', (isExpanded ? 'fa-angle-down' : 'fa-angle-right')]\"></i>\n        <span [innerHTML]=\"label\"></span></a>\n    "
        })
    ], ExpanderComponent);
    return ExpanderComponent;
}());



/***/ }),

/***/ "../../../../../src/AppBundle/Resources/public/ts/expander/expander.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ExpanderModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("../../../common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__expander_component__ = __webpack_require__("../../../../../src/AppBundle/Resources/public/ts/expander/expander.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var ExpanderModule = (function () {
    function ExpanderModule() {
    }
    ExpanderModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["H" /* NgModule */])({
            imports: [__WEBPACK_IMPORTED_MODULE_1__angular_common__["a" /* CommonModule */]],
            declarations: [__WEBPACK_IMPORTED_MODULE_2__expander_component__["a" /* ExpanderComponent */]],
            exports: [__WEBPACK_IMPORTED_MODULE_2__expander_component__["a" /* ExpanderComponent */]]
        })
    ], ExpanderModule);
    return ExpanderModule;
}());



/***/ }),

/***/ "../../../../../src/AppBundle/Resources/public/ts/flash-message.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return FlashMessageTypes; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FlashMessageService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var toastr = __webpack_require__("../../../../toastr/toastr.js");

// FlashMessageTypes
var FlashMessageTypes = {
    success: 'success',
    info: 'info',
    warning: 'warning',
    error: 'error'
};
// Service
var FlashMessageService = (function () {
    function FlashMessageService() {
        toastr.options = {
            "closeButton": true,
            "debug": false,
            "progressBar": true,
            "preventDuplicates": false,
            "positionClass": "toast-top-left",
            "onclick": null,
            "showDuration": "300",
            "hideDuration": "1000",
            "timeOut": "5000",
            "extendedTimeOut": "1000",
            "showEasing": "swing",
            "hideEasing": "linear",
            "showMethod": "slideDown",
            "hideMethod": "fadeOut"
        };
    }
    /**
     * Message
     * @param body
     * @param head
     * @param type
     */
    FlashMessageService.prototype.message = function (body, head, type) {
        if (head === void 0) { head = ''; }
        if (type === void 0) { type = FlashMessageTypes.info; }
        // Set info as default type if is not a valid entry
        type = (FlashMessageTypes[type] || FlashMessageTypes.info);
        toastr[type](body, head);
    };
    FlashMessageService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["z" /* Injectable */])(),
        __metadata("design:paramtypes", [])
    ], FlashMessageService);
    return FlashMessageService;
}());



/***/ }),

/***/ "../../../../../src/AppBundle/Resources/public/ts/helper.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Helper; });
/**
 * Helper with common functions
 */
var Helper = (function () {
    function Helper() {
    }
    // Get an unique incremental number to be used as unique identifier
    Helper.getUniqueId = function () {
        return (Helper.uniqueIdCounter++);
    };
    /**
     * Get decimal configuration
     * @returns {{unit: {value: number, iterator: number}, total: {value: number, iterator: number}}}
     */
    Helper.getDecimalConf = function () {
        // Configure number of decimals to use and to round
        var decimalConf = { unit: { value: 4, iterator: 0 }, total: { value: 2, iterator: 0 } };
        decimalConf.unit.iterator = Math.pow(10, decimalConf.unit.value);
        decimalConf.total.iterator = Math.pow(10, decimalConf.total.value);
        return decimalConf;
    };
    /**
     * Get object length
     * @param object
     * @returns {number}
     */
    Helper.objectLength = function (object) {
        return Object.keys(object || {}).length;
    };
    /**
     * Get object keys
     * @param object
     * @returns {string[]|Array}
     */
    Helper.objectKeys = function (object) {
        return Object.keys(object || {}) || [];
    };
    /**
     * Convert a list of object to an array
     * @param objects
     * @returns {string[]|Array}
     */
    Helper.objectsToArray = function (objects) {
        var objectsArray = [];
        for (var key in (objects || {})) {
            objectsArray.push({ key: key, value: objects[key] });
        }
        return objectsArray;
    };
    /**
     * Compare if object1 is equal to object2
     * @param object1
     * @param object2
     * @returns {boolean}
     */
    Helper.isEqualObject = function (object1, object2) {
        return (JSON.stringify(object1) === JSON.stringify(object2));
    };
    /**
     * Var Count (count only is a reserved word)
     * @param variable
     * @returns {number}
     */
    Helper.varCount = function (variable) {
        return Object.keys(variable || {}).length;
    };
    /**
     * Cast to boolean
     * @param value
     * @returns {boolean}
     */
    Helper.castToBoolean = function (value) {
        return Helper.inArray(value, ['true', 1, true, '1']);
    };
    /**
     * Clone object
     * @param object
     * @param recursive
     * @returns {any}
     */
    Helper.cloneObject = function (object, recursive) {
        if (recursive === void 0) { recursive = false; }
        return $.extend(recursive, {}, object);
    };
    /**
     * Merge objects into a new object
     * @param object1
     * @param object2
     * @param recursive
     * @returns {any}
     */
    Helper.mergeObjects = function (object1, object2, recursive) {
        if (recursive === void 0) { recursive = false; }
        return $.extend(recursive, object1, object2);
    };
    /**
     * Check if value exists in array
     * @param value
     * @param array
     */
    Helper.inArray = function (value, array) {
        return (($.inArray(value, array) >= 0) ? true : false);
    };
    /**
     * Search value in array
     * @param value
     * @param array
     */
    Helper.arraySearch = function (value, array) {
        var index = $.inArray(value, array);
        return ((index >= 0) ? index : null);
    };
    /**
     * Order objects by key
     * @param objects
     * @param keys
     * @returns {any}
     */
    Helper.orderObjects = function (objects, keys) {
        var prevKey = null;
        if (objects && keys) {
            var _loop_1 = function (key) {
                objects.sort(function (obj1, obj2) {
                    if (!prevKey || (obj1[prevKey] == obj2[prevKey])) {
                        // If key is equal, then sort by id "DESC"
                        var orderKey = ((obj1[key] == obj2[key]) ? 'id' : key);
                        return ((obj1[orderKey] > obj2[orderKey]) ? 1 : 0);
                    }
                    return 0;
                });
                prevKey = key;
            };
            for (var _i = 0, keys_1 = keys; _i < keys_1.length; _i++) {
                var key = keys_1[_i];
                _loop_1(key);
            }
        }
        return objects;
    };
    /**
     * Set app var
     * @param index
     * @param value
     * @returns {Helper}
     */
    Helper.setAppVar = function (index, value) {
        return Helper.setVar(_app, index, value);
    };
    /**
     * Get app var
     * @param index
     * @param defaultValue
     * @returns {any}
     */
    Helper.getAppVar = function (index, defaultValue) {
        if (defaultValue === void 0) { defaultValue = null; }
        return Helper.getVar(_app, index, defaultValue);
    };
    /**
     * Delete app var
     * @param index
     * @param defaultValue
     * @returns {Helper}
     */
    Helper.deleteAppVar = function (index) {
        return Helper.deleteVar(_app, index);
    };
    /**
     * Get data service provider
     * @param data
     * @returns any
     */
    Helper.getDataServiceProvider = function (data) {
        return {
            fields: data.fields || null,
            search: data.search || null,
            object: data.object || null,
            objects: data.objects || null,
            route: data.route || null,
            extraData: ((data.extraData && data.extraData.service) ? data.extraData.service : null),
            localData: (data.localData || null),
        };
    };
    /**
     * Get tree-view data service provider
     * @param data
     * @returns any
     */
    Helper.getTreeViewDataServiceProvider = function (data) {
        return Helper.mergeObjects(Helper.getDataServiceProvider(data), {
            localParentField: (data.treeView.localParentField)
        });
    };
    /**
     * Get tree-view provider
     * @param data
     * @returns any
     */
    Helper.getTreeViewProvider = function (data) {
        if (data.treeView) {
            return Helper.mergeObjects(Helper.getDataBoxProvider(data), {
                iconDefault: (data.treeView.iconDefault || null),
                iconField: (data.treeView.iconField || null),
                iconFieldMap: (data.treeView.iconFieldMap || {}),
                parentTargetField: (data.treeView.parentTargetField || 'id')
            });
        }
        return Helper.getDataBoxProvider(data);
    };
    /**
     * Get image provider
     * @param data
     * @param localData supplied by module/component
     * @returns any
     */
    Helper.getImageProvider = function (data, localData) {
        return Helper.mergeObjects(Helper.getDataBoxProvider(data), {
            imageCropPopupModule: localData['imageCropPopupModule'],
            imageCropPopupComponent: localData['imageCropPopupComponent']
        });
    };
    /**
     * Get data-box provider
     * @param data
     * @returns any
     */
    Helper.getDataBoxProvider = function (data) {
        return Helper.getBoxProvider(data);
    };
    /**
     * Get box provider
     * @param data
     * @returns any
     */
    Helper.getBoxProvider = function (data) {
        return Helper.mergeObjects(Helper.getBaseProvider(data), {
            label: data.label || '',
            controls: {
                expander: (data.controls && data.controls.expander),
                legend: ((data['controls'] && data['controls']['legend']) ? data['controls']['legend'] : [])
            }
        });
    };
    /**
     * Get box provider
     * @param data
     * @returns any
     */
    Helper.getEntityDetailProvider = function (data) {
        return Helper.mergeObjects(Helper.getBaseProvider(data), {
            popup: null // Create this value in component
        });
    };
    /**
     * Get Entity Detail Preview Provider
     * @param data
     * @returns any
     */
    Helper.getEntityDetailPreviewProvider = function (data) {
        return Helper.mergeObjects(Helper.getBaseProvider(data), {
            object: data['object'] || null,
            fields: data['fields'] || null,
            dependencies: data['dependencies'] || null
        });
    };
    /**
     * Get base provider
     * @param data
     * @returns any
     */
    Helper.getBaseProvider = function (data) {
        return {
            localData: ((data.localData && data.localData.template) ? data.localData.template : {}),
            extraData: ((data.extraData && data.extraData.template) ? data.extraData.template : null)
        };
    };
    /**
     * Get data box form provider
     * @param data
     * @returns any
     */
    Helper.getFormProvider = function (data) {
        return {
            label: data.label || '',
            preventObjectOverride: true
        };
    };
    /**
     * Get data box form provider
     * @param data
     * @returns any
     */
    Helper.getWizardPopupProvider = function (data) {
        return {
            label: data.label || ''
        };
    };
    /**
     * Get actions provider
     * @param data
     * @returns {any}
     */
    Helper.getActionsServiceProvider = function (data) {
        return (data.actions);
    };
    /**
     * Get legend provider
     * @param data
     * @returns {any}
     */
    Helper.getLegendProvider = function (data) {
        return ((data['controls'] && data['controls']['legend']) ? data['controls']['legend'] : []);
    };
    /**
     * Set global var
     * @param index
     * @param value
     * @returns {Helper}
     */
    Helper.setGlobalVar = function (index, value) {
        return Helper.setVar(Helper.globalVar, index, value);
    };
    /**
     * Get global var
     * @param index
     * @param defaultValue
     * @returns {any}
     */
    Helper.getGlobalVar = function (index, defaultValue) {
        if (defaultValue === void 0) { defaultValue = null; }
        return Helper.getVar(Helper.globalVar, index, defaultValue);
    };
    /**
     * Delete global var
     * @param index
     * @param defaultValue
     * @returns {Helper}
     */
    Helper.deleteGlobalVar = function (index) {
        return Helper.deleteVar(Helper.globalVar, index);
    };
    /**
     * Get column alignment.
     * @param type
     * @returns string
     */
    Helper.getColAlign = function (type) {
        switch (type) {
            case 'number':
            case 'percentage':
            case 'monetary':
            case 'date':
            case 'datetime':
                return 'txt-align-r';
            case 'boolean':
            case 'icon':
            case 'img':
            case 'status':
                return 'txt-align-c';
            default:
                return 'txt-align-l';
        }
    };
    /**
     * Get upload web path
     * @param path
     * @param imageFormat (format of image to return)
     * @returns string
     */
    Helper.getUploadWebPath = function (path, imageFormat) {
        if (imageFormat === void 0) { imageFormat = null; }
        if (path && path.indexOf("/upload/")) {
            path = (path.substring(path.indexOf("/upload/"), path.length));
        }
        if (imageFormat) {
            var firstPartialPath = path.substring(0, path.lastIndexOf(".")), lastPartialPath = path.substring(path.lastIndexOf("."), path.length);
            return (firstPartialPath + '.' + imageFormat + lastPartialPath);
        }
        return path;
    };
    /**
     * Upper case first
     * @param string
     * @returns {string}
     */
    Helper.uCFirst = function (string) {
        return string.charAt(0).toUpperCase() + string.slice(1);
    };
    /**
     * Get var
     * @param object
     * @param index
     * @param defaultValue
     * @returns {any}
     */
    Helper.getVar = function (object, index, defaultValue) {
        if (defaultValue === void 0) { defaultValue = null; }
        if (index in object) {
            return object[index];
        }
        return defaultValue;
    };
    /**
     * Set var
     * @param object
     * @param index
     * @param value
     * @returns {Helper}
     */
    Helper.setVar = function (object, index, value) {
        object[index] = value;
        return Helper;
    };
    /**
     * Delete var
     * @param object
     * @param index
     * @returns {Helper}
     */
    Helper.deleteVar = function (object, index) {
        if (index in object) {
            delete object[index];
        }
        return Helper;
    };
    /**
     * Set Form Token
     * @param $form
     * @returns {Helper}
     */
    Helper.setFormToken = function ($form) {
        var $tokenField = $form.find('#form__token');
        if ($tokenField) {
            $tokenField.val(_app.csrfToken);
        }
        return Helper;
    };
    /**
     * Get Status Map
     * @returns any
     */
    Helper.getStatusMap = function () {
        return { 'NO': 'danger', 'PARTIAL': 'warning', 'YES': 'primary' };
    };
    // Object to use in angular modules at runtime to define global variables.
    Helper.globalVar = {};
    // Controls the generation of a unique incremental number,
    // to be used as unique identifier by any feature instance ensuring that there is no duplication.
    Helper.uniqueIdCounter = 0;
    return Helper;
}());



/***/ }),

/***/ "../../../../../src/AppBundle/Resources/public/ts/nav-manager/nav-manager.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NavManagerService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__dynamic_component_loader_service__ = __webpack_require__("../../../../../src/AppBundle/Resources/public/ts/dynamic-component-loader.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__tasks_loader_manager_ts_tasks_loader_manager_service__ = __webpack_require__("../../../../../src/AppBundle/Resources/public/tasks-loader-manager/ts/tasks-loader-manager.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__post_service__ = __webpack_require__("../../../../../src/AppBundle/Resources/public/ts/post.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};




/**
 * Navigation manager.
 * Use this class to manage the navigation between multiple containers.
 * Containers can be static or lazy load.
 * This class is defined as service because the components that use it already extends another class.
 * The component that use this service should implements the "INavManager" interface.
 * The init of this service should be called in "ngAfterViewInit" method when you have lazy load containers,
 * so the template has been rendered.
 * NOTE: Prefix "ll" means "Lazy load"
 */
var NavManagerService = (function () {
    function NavManagerService(_helperService, _tasksLoaderManagerService, _injector, _dynamicComponentLoaderService, _postService) {
        this._helperService = _helperService;
        this._tasksLoaderManagerService = _tasksLoaderManagerService;
        this._injector = _injector;
        this._dynamicComponentLoaderService = _dynamicComponentLoaderService;
        this._postService = _postService;
        this._llViewContainerRefArr = [];
        this._llComponentRefArr = {}; // Array of ComponentRef with loaded containers
        this._currentIndex = null; // Index of current container
        this._hasToggleContainer = false; // Determines if has toggle in container when it is already selected
    }
    /**
     * Initialization of service.
     * This method should be called in "ngAfterViewInit" method of parent component when you have lazy load containers,
     * so the template has been rendered.
     * @param component (parent component)
     * @param lazyLoadViewContainerRefQL
     * @returns {NavManagerService}
     */
    NavManagerService.prototype.init = function (component, lazyLoadViewContainerRefQL) {
        if (lazyLoadViewContainerRefQL === void 0) { lazyLoadViewContainerRefQL = null; }
        // Local variables
        this._component = component;
        if (lazyLoadViewContainerRefQL) {
            // Get array of ViewContainerRef for lazy loader containers
            this._llViewContainerRefArr = lazyLoadViewContainerRefQL.toArray();
        }
        return this;
    };
    /**
     * Reset of service.
     * This method should be called in "ngOnDestroy" method of parent component, so variables can be reset (free data)
     * and the service be able to be reused.
     */
    NavManagerService.prototype.reset = function () {
        // Local variables
        // Needs to be reset (free data),
        // because the service is reused and not created a new when parent component is instantiated
        this._component = null;
        this._llViewContainerRefArr = [];
        this._llComponentRefArr = {};
        this._currentIndex = null;
        return this;
    };
    /**
     * Set Has Toggle Container
     * @param hasToggleContainer
     * @returns {NavManagerService}
     */
    NavManagerService.prototype.setHasToggleContainer = function (hasToggleContainer) {
        if (hasToggleContainer === void 0) { hasToggleContainer = true; }
        this._hasToggleContainer = hasToggleContainer;
        return this;
    };
    /**
     * Get current index
     * @returns {any}
     */
    NavManagerService.prototype.getIndex = function () {
        return this._currentIndex;
    };
    /**
     * Get componentRef of current index (if index is not provided)
     * @param index (index of container)
     * @returns {any}
     */
    NavManagerService.prototype.getComponentRef = function (index) {
        if (index === void 0) { index = null; }
        if (index == null) {
            index = this._currentIndex;
        }
        return (this._llComponentRefArr[index] || null);
    };
    /**
     * Unset componentRef of current index (if index is not provided)
     * @param index (index of container)
     * @returns NavManagerService
     */
    NavManagerService.prototype.unsetComponentRef = function (index) {
        if (index === void 0) { index = null; }
        index = (index || this._currentIndex);
        if (this._llComponentRefArr[index]) {
            this._llComponentRefArr[index].destroy();
            this._llComponentRefArr[index] = null;
        }
        return this;
    };
    /**
     * Navigate to container.
     * This method should be called from child component.
     * @param index (index of container)
     * @param hasSubmit (determines if submit should be called)
     * @returns {Promise<boolean>}
     */
    NavManagerService.prototype.navTo = function (index, hasSubmit) {
        if (hasSubmit === void 0) { hasSubmit = true; }
        var that = this;
        return new Promise(function (resolve, reject) {
            // Used in accordion, if the index is the same, then reset the index closing the current container
            if ((index === that.getIndex()) && that._hasToggleContainer) {
                that._currentIndex = null;
                return resolve(true);
            }
            // Only load module, if module is not yet loading (avoid task duplication)
            if (!that._tasksLoaderManagerService.addTask('LOAD')) {
                return reject(false);
            }
            // Send current container to validation before load the other one
            if (that._component['submitNav'] && hasSubmit) {
                return that._component.submitNav(that._currentIndex).then(function (data) {
                    return that.loadNav(index).then(function (data) {
                        that._tasksLoaderManagerService.delTask('LOAD');
                        return resolve(true);
                    }, function (errors) {
                        console.log(errors);
                        that._tasksLoaderManagerService.delTask('LOAD');
                        return reject(false);
                    });
                }, function (errors) {
                    that._tasksLoaderManagerService.delTask('LOAD');
                    return reject(false);
                });
            }
            return that.loadNav(index).then(function (data) {
                that._tasksLoaderManagerService.delTask('LOAD');
                return resolve(true);
            }, function (errors) {
                console.log(errors);
                that._tasksLoaderManagerService.delTask('LOAD');
                return reject(false);
            });
        });
    };
    /**
     * Navigate to container action.
     * This method should be called from view/template.
     * @param index (index of container)
     * @param hasSubmit (determines if submit should be called)
     */
    NavManagerService.prototype.navToAction = function (index, hasSubmit) {
        if (hasSubmit === void 0) { hasSubmit = true; }
        this.navTo(index, hasSubmit).then(function (data) { return; }, function (errors) { return; });
    };
    /**
     * Load navigation container
     * @param index
     * @returns {Promise<boolean>}
     */
    NavManagerService.prototype.loadNav = function (index) {
        var that = this;
        return new Promise(function (resolve, reject) {
            if (that._llComponentRefArr[index] // Container has been loaded
                || !that._component['getNavData'] // Component doesn't have the necessary implementation to lazy load
            ) {
                that._currentIndex = index;
                return resolve(true);
            }
            // Get lazy load view
            var llViewIndex = null, llClass = ('js_lazyLoadContainer_' + index); // Lazy load class
            // Check if is a lazy load container (by its index in class)
            for (var index_1 in that._llViewContainerRefArr) {
                if ($(that._llViewContainerRefArr[index_1].element.nativeElement).parent().hasClass(llClass)) {
                    llViewIndex = index_1;
                    break;
                }
            }
            if (llViewIndex === null) {
                that._currentIndex = index;
                return resolve(true);
            }
            // Get child data
            var lazyLoadData = that._component.getNavData(index);
            // Load child data from url
            if (!lazyLoadData.dataProvider && lazyLoadData.urlProvider) {
                return that._postService.post(lazyLoadData.urlProvider, null).then(function (data) {
                    lazyLoadData.dataProvider = data;
                    // Load container
                    return that.loadContainer(index, llViewIndex, lazyLoadData).then(function (data) { return resolve(true); }, function (errors) { console.log(errors); return reject(false); });
                }, function (errors) { console.log(errors); return reject(false); });
            }
            // Load container
            return that.loadContainer(index, llViewIndex, lazyLoadData).then(function (data) { return resolve(true); }, function (errors) { console.log(errors); return reject(false); });
        });
    };
    /**
     * Load container
     * @param index
     * @param lazyLoadViewIndex (lazy load view index)
     * @param lazyLoadData
     * @returns {Promise<boolean>}
     */
    NavManagerService.prototype.loadContainer = function (index, lazyLoadViewIndex, lazyLoadData) {
        var providers = (this._component['getNavProviders']
            ? this._component.getNavProviders(index, lazyLoadData.dataProvider)
            : null);
        var viewContainerRef = this._llViewContainerRefArr[lazyLoadViewIndex];
        var injector = null;
        if (providers) {
            injector = __WEBPACK_IMPORTED_MODULE_0__angular_core__["T" /* ReflectiveInjector */].fromResolvedProviders(__WEBPACK_IMPORTED_MODULE_0__angular_core__["T" /* ReflectiveInjector */].resolve(providers), 
            // Use in firs instance the injector of the component (is more refined)
            (lazyLoadData.injector || this._component['_injector'] || this._injector));
        }
        var that = this;
        return this._dynamicComponentLoaderService.load(lazyLoadData.module, lazyLoadData.component, viewContainerRef, injector).then(function (componentRef) {
            that._llComponentRefArr[index] = componentRef;
            that._currentIndex = index;
            // Call component postLoad callback if exists
            if (that._component['postLoad']) {
                that._component.postLoad(index, componentRef, injector);
            }
            return true;
        }, function (errors) { console.log(errors); return null; });
    };
    NavManagerService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["z" /* Injectable */])(),
        __param(0, Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["y" /* Inject */])('HelperService')),
        __metadata("design:paramtypes", [Object, __WEBPACK_IMPORTED_MODULE_2__tasks_loader_manager_ts_tasks_loader_manager_service__["a" /* TasksLoaderManagerService */],
            __WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Injector */],
            __WEBPACK_IMPORTED_MODULE_1__dynamic_component_loader_service__["a" /* DynamicComponentLoaderService */],
            __WEBPACK_IMPORTED_MODULE_3__post_service__["a" /* PostService */]])
    ], NavManagerService);
    return NavManagerService;
}());



/***/ }),

/***/ "../../../../../src/AppBundle/Resources/public/ts/post.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PostService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__flash_message_service__ = __webpack_require__("../../../../../src/AppBundle/Resources/public/ts/flash-message.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__tasks_loader_manager_ts_tasks_loader_manager_service__ = __webpack_require__("../../../../../src/AppBundle/Resources/public/tasks-loader-manager/ts/tasks-loader-manager.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



// Service
var PostService = (function () {
    function PostService(_flashMessageService, _tasksLoaderManagerService) {
        this._flashMessageService = _flashMessageService;
        this._tasksLoaderManagerService = _tasksLoaderManagerService;
    }
    /**
     * Post. Send data to server
     * @param url
     * @param data
     * @returns {Promise}
     */
    PostService.prototype.post = function (url, data) {
        if (data === void 0) { data = null; }
        this._tasksLoaderManagerService.addTask('POSTING_DATA');
        var that = this;
        return new Promise(function (resolve, reject) {
            return $.post(url, data, function (postResponse) {
                // Unknown response, generally html responses (debug, exceptions, etc.)
                if (!postResponse || (typeof postResponse !== 'object')) {
                    that._tasksLoaderManagerService.delTask('POSTING_DATA');
                    that.handleFlashMessages({});
                    return reject({});
                }
                // Regular response
                that.handleFlashMessages(postResponse);
                var isSuccess = (postResponse.status == 1);
                delete postResponse.status; // Is no more necessary
                // Success
                if (isSuccess) {
                    that._tasksLoaderManagerService.delTask('POSTING_DATA');
                    return resolve(postResponse['data'] || null);
                }
                // Error
                var errors = {
                    errors: (postResponse['errors'] || {}),
                    data: (postResponse['data'] || {})
                };
                that._tasksLoaderManagerService.delTask('POSTING_DATA');
                return reject(errors);
            }).fail(function (errors) {
                that._tasksLoaderManagerService.delTask('POSTING_DATA');
                that.handleFlashMessages({});
                return reject({});
            });
        });
        /*let headers = new Headers();
         headers.append('Content-Type', 'application/json');

         this._http.post(
         url,
         data,
         { headers: headers }
         )
         .map(response => response.json())
         .subscribe(
         response => console.log(response)
         );*/
    };
    /**
     * Handle handleFlashMessages from server
     * @param postResponse
     * @returns {PostResponse}
     */
    PostService.prototype.handleFlashMessages = function (postResponse) {
        // Request failed, no response has been returned.
        if (!('status' in postResponse)) {
            console.log(postResponse);
            this._flashMessageService.message('Something went wrong, no response has been returned.', 'Unknown error', __WEBPACK_IMPORTED_MODULE_1__flash_message_service__["b" /* FlashMessageTypes */].error);
        }
        // Flash Messages
        if (postResponse.flashMessages) {
            for (var _i = 0, _a = postResponse.flashMessages; _i < _a.length; _i++) {
                var flashMessage = _a[_i];
                this._flashMessageService.message(flashMessage.body, flashMessage.head, flashMessage.type);
            }
            delete postResponse.flashMessages; // It's no more necessary
        }
        return postResponse;
    };
    PostService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["z" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__flash_message_service__["a" /* FlashMessageService */],
            __WEBPACK_IMPORTED_MODULE_2__tasks_loader_manager_ts_tasks_loader_manager_service__["a" /* TasksLoaderManagerService */]])
    ], PostService);
    return PostService;
}());



/***/ }),

/***/ "../../../../../src/AppBundle/Resources/public/ts/search/search-criteria.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export SearchCriteriaMap */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SearchCriteriaComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};

/**
 * Class provider for search criteria expressions and default values
 */
var SearchCriteriaMap = (function () {
    function SearchCriteriaMap() {
        // Expressions mapping.
        this._exprMap = [
            { key: 'lrlike', label: '?' },
            { key: 'eq', label: '=' },
            { key: 'neq', label: '<>' },
            { key: 'gte', label: '>=' },
            { key: 'lte', label: '<=' }
        ];
        // Default value mapping for field type.
        this._defaultValueMap = {
            'date': ((new Date()).toISOString().slice(0, 10)),
            'boolean': 1
        };
        // Default expression mapping for field type.
        this._defaultExprMap = {
            'text': 'lrlike',
            'code': 'lrlike',
            'date': 'gte',
            'boolean': 'eq'
        };
    }
    /**
     * Get expressions mapping
     * @returns {any}
     */
    SearchCriteriaMap.prototype.getExprMap = function () {
        return this._exprMap;
    };
    /**
     * Get default expression
     * @param type
     * @returns {any}
     */
    SearchCriteriaMap.prototype.getDefaultExpr = function (type) {
        if (type === void 0) { type = null; }
        return ((type && this._defaultExprMap[type]) ? this._defaultExprMap[type] : 'eq');
    };
    /**
     * Get default value
     * @param type
     * @returns {any}
     */
    SearchCriteriaMap.prototype.getDefaultValue = function (type) {
        if (type === void 0) { type = null; }
        return ((type && this._defaultValueMap[type]) ? this._defaultValueMap[type] : '');
    };
    return SearchCriteriaMap;
}());

// Component
var SearchCriteriaComponent = (function () {
    function SearchCriteriaComponent(_elementRef, _helperService, _dataService) {
        this._elementRef = _elementRef;
        this._helperService = _helperService;
        this._dataService = _dataService;
        // Injector to get dependencies. Used when injector comes from child component (like accordion)
        this.injector = null;
        // Denied types. Doesn't make sense to search for this filed types.
        this._deniedTypes = ['file', 'icon', 'img', 'password', 'avatar'];
        this._isExpanded = false;
        this._searchCriteriaMap = new SearchCriteriaMap();
    }
    /**
     * Set default values
     * @param criteria
     * @param field (field to override criteria['field'], because select change event was not update it yet)
     */
    SearchCriteriaComponent.prototype.setDefaults = function (criteria, field) {
        if (field === void 0) { field = null; }
        field = (field || criteria['field']);
        if (field in this._fieldsMetadata) {
            criteria['expr'] = this._searchCriteriaMap.getDefaultExpr(this._fieldsMetadata[field]['type']);
            criteria['value'] = this._searchCriteriaMap.getDefaultValue(this._fieldsMetadata[field]['type']);
        }
    };
    /**
     * Add criteria
     * @param $event
     */
    SearchCriteriaComponent.prototype.add = function ($event) {
        if ($event === void 0) { $event = null; }
        if ($event) {
            $event.preventDefault();
            $event.stopPropagation();
        }
        var criteria = {
            field: (this._fields[0] ? this._fields[0] : null),
            expr: null,
            value: null
        };
        this.setDefaults(criteria, null);
        this._criteriaArr.push(criteria);
    };
    /**
     * Delete criteria
     * @param $event
     * @param index
     */
    SearchCriteriaComponent.prototype.del = function ($event, index) {
        $event.preventDefault();
        $event.stopPropagation();
        this._criteriaArr.splice(index, 1);
    };
    /**
     * Toggle isExpanded
     * @param $event (value returned by expander directive)
     */
    SearchCriteriaComponent.prototype.toggleIsExpanded = function ($event) {
        this._isExpanded = !this._isExpanded;
    };
    /**
     * On field change
     * @param $event
     * @param criteria
     */
    SearchCriteriaComponent.prototype.onFieldChange = function ($event, criteria) {
        // Field to override criteria['field'], because select change event was not update it yet
        var field = $event.target.value || null;
        this.setDefaults(criteria, field);
    };
    /**
     * Host event
     * @param $event
     */
    SearchCriteriaComponent.prototype.onDocumentClick = function ($event) {
        if (!this._elementRef.nativeElement.contains($event.target)) {
            this._isExpanded = false;
        }
    };
    /**
     * Lifecycle callback
     */
    SearchCriteriaComponent.prototype.ngOnInit = function () {
        // If injector is provided, override dependencies
        if (this.injector) {
            this._dataService = this.injector.get('DataService');
        }
        this._criteriaArr = this._dataService.getCandidateSearchAttr('criteria');
        this._fields = (this._dataService.getFields('view') || []);
        this._fieldsMetadata = (this._dataService.getFields('metadata') || {});
        if (this._criteriaArr.length < 1) {
            this.add();
        }
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Input */])(),
        __metadata("design:type", Object)
    ], SearchCriteriaComponent.prototype, "injector", void 0);
    SearchCriteriaComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'js_searchCriteria',
            template: "\n    <js_expander [label]=\"'Filter'\" [hasIcon]=\"false\" [customClass]=\"'action'\" (onChange)=\"toggleIsExpanded($event, 'fields')\"></js_expander>\n    <div [hidden]=\"!_isExpanded\" class=\"container-fluid py-3 rounded white-dropdown search-criteria\">\n        <div class=\"row\">\n        <ng-template ngFor let-criteria [ngForOf]=\"_criteriaArr\" let-i=\"index\">\n            <div class=\"col col-md-6 controller\">\n                <div class=\"select\">\n                    <select [(ngModel)]=\"criteria['field']\"\n                            (change)=\"onFieldChange($event, criteria)\"\n                            class=\"form-control\">\n                        <ng-template ngFor let-field [ngForOf]=\"_fields\">\n                            <option *ngIf=\"!_helperService.inArray(_fieldsMetadata[field]['type'], _deniedTypes) && !_fieldsMetadata[field]['isObject']\"\n                                    value=\"{{field}}\">{{_fieldsMetadata[field]['label']}}</option>\n                        </ng-template>\n                    </select>\n                    <!-- ng switch should be here -->\n                    <ng-template [ngIf]=\"(_fieldsMetadata[criteria['field']]) && (_fieldsMetadata[criteria['field']]['type'] == 'boolean')\">\n                        <select [(ngModel)]=\"criteria['value']\"\n                                class=\"form-control\">\n                            <option *ngFor=\"let value of [{key: 1, label: 'Yes'}, {key: 0, label: 'No'}]\"\n                                    value=\"{{value['key']}}\">{{value['label']}}</option>\n                        </select>\n                    </ng-template>\n                    <ng-template [ngIf]=\"(!_fieldsMetadata[criteria['field']]) || (_fieldsMetadata[criteria['field']]['type'] != 'boolean')\">\n                        <select [(ngModel)]=\"criteria['expr']\"\n                                class=\"form-control\">\n                            <option *ngFor=\"let expr of _searchCriteriaMap.getExprMap()\"\n                                    value=\"{{expr['key']}}\">{{expr['label']}}</option>\n                        </select>\n                        <input [(ngModel)]=\"criteria['value']\"\n                               class=\"form-control\" type=\"text\">\n                    </ng-template>\n                </div>\n                <div class=\"actions\">\n                    <a *ngIf=\"_criteriaArr.length > 1\" class=\"fa fa-trash-o\" (click)=\"del($event, i)\"></a>\n                    <a *ngIf=\"(i+1) == _criteriaArr.length\" class=\"fa fa-plus\" (click)=\"add($event)\"></a>\n                </div>\n            </div>\n        </ng-template>\n        </div>\n    </div>\n    ",
            host: {
                '(document:click)': 'onDocumentClick($event)',
            }
        }),
        __param(1, Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["y" /* Inject */])('HelperService')),
        __param(2, Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["M" /* Optional */])()), __param(2, Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["y" /* Inject */])('DataService')),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_core__["t" /* ElementRef */], Object, Object])
    ], SearchCriteriaComponent);
    return SearchCriteriaComponent;
}());



/***/ }),

/***/ "../../../../../src/AppBundle/Resources/public/ts/search/search-fields.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SearchFieldsComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};

// Component
var SearchFieldsComponent = (function () {
    function SearchFieldsComponent(_elementRef, _helperService, _dataService) {
        this._elementRef = _elementRef;
        this._helperService = _helperService;
        this._dataService = _dataService;
        // Injector to get dependencies. Used when injector comes from child component (like accordion)
        this.injector = null;
        // Denied types. Doesn't make sense to show this filed types.
        this._deniedTypes = ['password'];
        this._isExpanded = false;
    }
    /**
     * Toggle isExpanded
     * @param $event (value returned by expander directive)
     */
    SearchFieldsComponent.prototype.toggleIsExpanded = function ($event) {
        this._isExpanded = !this._isExpanded;
    };
    /**
     * Host event
     * @param $event
     */
    SearchFieldsComponent.prototype.onDocumentClick = function ($event) {
        if (!this._elementRef.nativeElement.contains($event.target)) {
            this._isExpanded = false;
        }
    };
    /**
     * Lifecycle callback
     */
    SearchFieldsComponent.prototype.ngOnInit = function () {
        // If injector is provided, override dependencies
        if (this.injector) {
            this._dataService = this.injector.get('DataService');
        }
        this._search = this._dataService.getCandidateSearch();
        this._fields = (this._dataService.getFields('view') || []);
        this._fieldsMetadata = (this._dataService.getFields('metadata') || {});
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Input */])(),
        __metadata("design:type", Object)
    ], SearchFieldsComponent.prototype, "injector", void 0);
    SearchFieldsComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'js_searchFields',
            template: "\n    <js_expander [label]=\"'Fields'\" [hasIcon]=\"false\" [customClass]=\"'action'\" (onChange)=\"toggleIsExpanded($event, 'fields')\"></js_expander>\n    <div [hidden]=\"!_isExpanded\" class=\"container-fluid py-3 rounded white-dropdown search-fields\">\n        <div class=\"row\"><div class=\"col\">\n            <select multiple size=\"6\" [(ngModel)]=\"_search['fields']\" class=\"form-control\">\n                <ng-template ngFor let-field [ngForOf]=\"_fields\">\n                    <option *ngIf=\"!_helperService.inArray(_fieldsMetadata[field]['type'], _deniedTypes)\"\n                            value=\"{{field}}\">{{_fieldsMetadata[field]['label']}}</option>\n                </ng-template>\n            </select>\n        </div></div>\n    </div>\n    ",
            host: {
                '(document:click)': 'onDocumentClick($event)',
            }
        }),
        __param(1, Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["y" /* Inject */])('HelperService')),
        __param(2, Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["M" /* Optional */])()), __param(2, Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["y" /* Inject */])('DataService')),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_core__["t" /* ElementRef */], Object, Object])
    ], SearchFieldsComponent);
    return SearchFieldsComponent;
}());



/***/ }),

/***/ "../../../../../src/AppBundle/Resources/public/ts/search/search-order-by.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SearchOrderByComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};

// Component
var SearchOrderByComponent = (function () {
    function SearchOrderByComponent(_elementRef, _helperService, _dataService) {
        this._elementRef = _elementRef;
        this._helperService = _helperService;
        this._dataService = _dataService;
        // Injector to get dependencies. Used when injector comes from child component (like accordion)
        this.injector = null;
        // Denied types. Doesn't make sense to order by this filed types.
        this._deniedTypes = ['file', 'icon', 'img', 'password', 'avatar'];
        this._isExpanded = false;
    }
    /**
     * Add order by
     * @param $event
     */
    SearchOrderByComponent.prototype.add = function ($event) {
        if ($event === void 0) { $event = null; }
        if ($event) {
            $event.preventDefault();
            $event.stopPropagation();
        }
        this._orderByArray.push({
            field: (this._fields[0] ? this._fields[0]['key'] : null),
            value: 'ASC',
        });
    };
    /**
     * Delete order by
     * @param $event
     * @param index
     */
    SearchOrderByComponent.prototype.del = function ($event, index) {
        $event.preventDefault();
        $event.stopPropagation();
        this._orderByArray.splice(index, 1);
    };
    /**
     * Toggle isExpanded
     * @param $event (value returned by expander directive)
     */
    SearchOrderByComponent.prototype.toggleIsExpanded = function ($event) {
        this._isExpanded = !this._isExpanded;
    };
    /**
     * Host event
     * @param $event
     */
    SearchOrderByComponent.prototype.onDocumentClick = function ($event) {
        if (!this._elementRef.nativeElement.contains($event.target)) {
            this._isExpanded = false;
        }
    };
    /**
     * Lifecycle callback
     */
    SearchOrderByComponent.prototype.ngOnInit = function () {
        // If injector is provided, override dependencies
        if (this.injector) {
            this._dataService = this.injector.get('DataService');
        }
        this._orderByArray = this._dataService.getCandidateSearchAttr('orderBy');
        this._fields = (this._dataService.getFields('view') || []);
        this._fieldsMetadata = (this._dataService.getFields('metadata') || {});
        if (this._orderByArray.length < 1) {
            this.add();
        }
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Input */])(),
        __metadata("design:type", Object)
    ], SearchOrderByComponent.prototype, "injector", void 0);
    SearchOrderByComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'js_searchOrderBy',
            template: "\n    <js_expander [label]=\"'Order'\" [hasIcon]=\"false\" [customClass]=\"'action'\" (onChange)=\"toggleIsExpanded($event, 'fields')\"></js_expander>\n    <div [hidden]=\"!_isExpanded\" class=\"container-fluid py-3 rounded white-dropdown search-order-by\">\n        <div class=\"row\">\n        <ng-template ngFor let-orderBy [ngForOf]=\"_orderByArray\" let-i=\"index\">\n            <div class=\"col col-md-6 controller\">\n                <div class=\"select\">\n                    <select [(ngModel)]=\"orderBy['field']\" class=\"form-control\">\n                        <ng-template ngFor let-field [ngForOf]=\"_fields\">\n                            <option *ngIf=\"!_helperService.inArray(_fieldsMetadata[field]['type'], _deniedTypes) && !_fieldsMetadata[field]['isObject']\"\n                                    value=\"{{field}}\">{{_fieldsMetadata[field]['label']}}</option>\n                        </ng-template>\n                    </select>\n                    <select [(ngModel)]=\"orderBy['value']\" class=\"form-control\">\n                        <option *ngFor=\"let value of [{key: 'ASC', label: 'Asc'}, {key: 'DESC', label: 'Desc'}]\"\n                                value=\"{{value['key']}}\">{{value['label']}}</option>\n                    </select>\n                </div>\n                <div class=\"actions\">\n                    <a *ngIf=\"_orderByArray.length > 1\" class=\"fa fa-trash-o\" (click)=\"del($event, i)\"></a>\n                    <a *ngIf=\"(i+1) == _orderByArray.length\" class=\"fa fa-plus\" (click)=\"add($event)\"></a>\n                </div>\n            </div>\n        </ng-template>\n        </div>\n    </div>\n    ",
            host: {
                '(document:click)': 'onDocumentClick($event)',
            }
        }),
        __param(1, Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["y" /* Inject */])('HelperService')),
        __param(2, Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["M" /* Optional */])()), __param(2, Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["y" /* Inject */])('DataService')),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_core__["t" /* ElementRef */], Object, Object])
    ], SearchOrderByComponent);
    return SearchOrderByComponent;
}());



/***/ }),

/***/ "../../../../../src/AppBundle/Resources/public/ts/search/search-pagination.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SearchPaginationComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};

// Component
var SearchPaginationComponent = (function () {
    function SearchPaginationComponent(_dataService, _helperService) {
        this._dataService = _dataService;
        this._helperService = _helperService;
    }
    /**
     * Get more objects (pagination)
     * @param $event
     */
    SearchPaginationComponent.prototype.getMoreObjects = function ($event) {
        $event.preventDefault();
        this._dataService.getMoreObjects();
    };
    SearchPaginationComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'js_searchPagination',
            template: "\n    <div *ngIf=\"_dataService.countObjects() > 0\"\n         class=\"search-pagination no-user-select\">\n        <span>{{_dataService.countObjects()}} Results</span>\n        <a class=\"search-has-more -note\"\n           *ngIf=\"_dataService.getProviderAttr('search')['hasMore']\"\n           (click)=\"getMoreObjects($event)\"\n           href=\"#\"\n           title=\"Load more results...\">...</a>\n    </div>\n    "
        }),
        __param(0, Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["y" /* Inject */])('DataService')),
        __param(1, Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["y" /* Inject */])('HelperService')),
        __metadata("design:paramtypes", [Object, Object])
    ], SearchPaginationComponent);
    return SearchPaginationComponent;
}());



/***/ }),

/***/ "../../../../../src/AppBundle/Resources/public/ts/search/search-pagination.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SearchPaginationModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("../../../common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__search_pagination_component__ = __webpack_require__("../../../../../src/AppBundle/Resources/public/ts/search/search-pagination.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var SearchPaginationModule = (function () {
    function SearchPaginationModule() {
    }
    SearchPaginationModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["H" /* NgModule */])({
            imports: [__WEBPACK_IMPORTED_MODULE_1__angular_common__["a" /* CommonModule */]],
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__search_pagination_component__["a" /* SearchPaginationComponent */]
            ],
            exports: [__WEBPACK_IMPORTED_MODULE_2__search_pagination_component__["a" /* SearchPaginationComponent */]]
        })
    ], SearchPaginationModule);
    return SearchPaginationModule;
}());



/***/ }),

/***/ "../../../../../src/AppBundle/Resources/public/ts/search/search.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SearchComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__actions_actions_service__ = __webpack_require__("../../../../../src/AppBundle/Resources/public/ts/actions/actions.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};


// Component
var SearchComponent = (function () {
    function SearchComponent(_dataService, _actionsService) {
        this._dataService = _dataService;
        this._actionsService = _actionsService;
        // Injector to get dependencies. Used when injector comes from child component (like accordion)
        this.injector = null;
    }
    /**
     * Search objects.
     * @param $event
     */
    SearchComponent.prototype.searchAction = function ($event) {
        $event.preventDefault();
        this._dataService.search();
    };
    /**
     * Lifecycle callback
     */
    SearchComponent.prototype.ngOnInit = function () {
        // If injector is provided, override dependencies
        if (this.injector) {
            this._dataService = this.injector.get('DataService');
            this._actionsService = this.injector.get(__WEBPACK_IMPORTED_MODULE_1__actions_actions_service__["a" /* ActionsService */]);
        }
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Input */])(),
        __metadata("design:type", Object)
    ], SearchComponent.prototype, "injector", void 0);
    SearchComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'js_search',
            template: "\n    <js_searchCriteria [injector]=\"injector\"></js_searchCriteria>\n    <js_searchOrderBy [injector]=\"injector\"></js_searchOrderBy>\n    <js_searchFields [injector]=\"injector\"></js_searchFields>\n    <a class=\"action -round fa\"\n       [ngClass]=\"[_actionsService.getActionAttr('search', 'icon')]\"\n       (click)=\"searchAction($event)\"></a>\n    "
        }),
        __param(0, Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["M" /* Optional */])()), __param(0, Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["y" /* Inject */])('DataService')),
        __param(1, Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["M" /* Optional */])()),
        __metadata("design:paramtypes", [Object, __WEBPACK_IMPORTED_MODULE_1__actions_actions_service__["a" /* ActionsService */]])
    ], SearchComponent);
    return SearchComponent;
}());



/***/ }),

/***/ "../../../../../src/AppBundle/Resources/public/ts/search/search.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SearchModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("../../../common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__expander_expander_module__ = __webpack_require__("../../../../../src/AppBundle/Resources/public/ts/expander/expander.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__search_fields_component__ = __webpack_require__("../../../../../src/AppBundle/Resources/public/ts/search/search-fields.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__search_order_by_component__ = __webpack_require__("../../../../../src/AppBundle/Resources/public/ts/search/search-order-by.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__search_criteria_component__ = __webpack_require__("../../../../../src/AppBundle/Resources/public/ts/search/search-criteria.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__search_component__ = __webpack_require__("../../../../../src/AppBundle/Resources/public/ts/search/search.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};








var SearchModule = (function () {
    function SearchModule() {
    }
    SearchModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["H" /* NgModule */])({
            imports: [__WEBPACK_IMPORTED_MODULE_1__angular_common__["a" /* CommonModule */], __WEBPACK_IMPORTED_MODULE_2__angular_forms__["b" /* FormsModule */], __WEBPACK_IMPORTED_MODULE_3__expander_expander_module__["a" /* ExpanderModule */]],
            declarations: [
                __WEBPACK_IMPORTED_MODULE_7__search_component__["a" /* SearchComponent */],
                __WEBPACK_IMPORTED_MODULE_6__search_criteria_component__["a" /* SearchCriteriaComponent */],
                __WEBPACK_IMPORTED_MODULE_5__search_order_by_component__["a" /* SearchOrderByComponent */],
                __WEBPACK_IMPORTED_MODULE_4__search_fields_component__["a" /* SearchFieldsComponent */]
            ],
            exports: [__WEBPACK_IMPORTED_MODULE_7__search_component__["a" /* SearchComponent */]]
        })
    ], SearchModule);
    return SearchModule;
}());



/***/ }),

/***/ "../../../../../src/AppBundle/Resources/public/wizard/ts/src/wizard-form-popup.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return WizardFormPopupComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__form_ts_form_service__ = __webpack_require__("../../../../../src/AppBundle/Resources/public/form/ts/form.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__wizard_manager_service__ = __webpack_require__("../../../../../src/AppBundle/Resources/public/wizard/ts/src/wizard-manager.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__wizard_form_popup_ext_component__ = __webpack_require__("../../../../../src/AppBundle/Resources/public/wizard/ts/src/wizard-form-popup.ext-component.ts");
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};




var WizardFormPopupComponent = (function (_super) {
    __extends(WizardFormPopupComponent, _super);
    function WizardFormPopupComponent(elementRef, renderer, provider, wizardManagerService, formService) {
        var _this = 
        // Call parent
        _super.call(this) || this;
        _super.prototype.initWizardFormPopupExtComponent.call(_this, elementRef, renderer, provider, wizardManagerService, formService);
        return _this;
    }
    WizardFormPopupComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: '.js_wizard',
            template: '' // Define template in child component
        }),
        __param(2, Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["y" /* Inject */])('Provider')),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_core__["t" /* ElementRef */],
            __WEBPACK_IMPORTED_MODULE_0__angular_core__["U" /* Renderer */], Object, __WEBPACK_IMPORTED_MODULE_2__wizard_manager_service__["a" /* WizardManagerService */],
            __WEBPACK_IMPORTED_MODULE_1__form_ts_form_service__["a" /* FormService */]])
    ], WizardFormPopupComponent);
    return WizardFormPopupComponent;
}(__WEBPACK_IMPORTED_MODULE_3__wizard_form_popup_ext_component__["a" /* WizardFormPopupExtComponent */]));



/***/ }),

/***/ "../../../../../src/AppBundle/Resources/public/wizard/ts/src/wizard-form-popup.ext-component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return WizardFormPopupExtComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__wizard_popup_ext_component__ = __webpack_require__("../../../../../src/AppBundle/Resources/public/wizard/ts/src/wizard-popup.ext-component.ts");
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};


var WizardFormPopupExtComponent = (function (_super) {
    __extends(WizardFormPopupExtComponent, _super);
    function WizardFormPopupExtComponent() {
        return _super.call(this) || this;
    }
    /**
     * Initialization of component (replace the original constructor to avoid angular injection inheritance bug)
     * @param elementRef
     * @param renderer
     * @param provider
     * @param wizardManagerService
     * @param formService
     */
    WizardFormPopupExtComponent.prototype.initWizardFormPopupExtComponent = function (elementRef, renderer, provider, wizardManagerService, // Any is used, otherwise you get an error "[Class] is not defined"
        formService // Any is used, otherwise you get an error "[Class] is not defined"
    ) {
        // Parent init (construct)
        _super.prototype.initWizardPopupExtComponent.call(this, elementRef, renderer, provider, wizardManagerService);
        this._formService = formService;
    };
    /**
     * Close action.
     * @param $event
     */
    WizardFormPopupExtComponent.prototype.closeAction = function ($event) {
        var _this = this;
        if ($event === void 0) { $event = null; }
        if ($event) {
            $event.preventDefault();
        }
        // Current form object has changes from user?
        this._formService.reset().then(function (data) {
            _this.onDismissEmitter.emit(data);
            return;
        }, function (errors) { return; });
    };
    /**
     * Lifecycle callback
     */
    WizardFormPopupExtComponent.prototype.ngAfterViewInit = function () {
        _super.prototype.ngAfterViewInit.call(this);
        this._formService.init(this);
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChildren */])('js_lazyLoadContainer', { read: __WEBPACK_IMPORTED_MODULE_0__angular_core__["_9" /* ViewContainerRef */] }),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["S" /* QueryList */])
    ], WizardFormPopupExtComponent.prototype, "lazyLoadViewContainerRefQL", void 0);
    __decorate([
        __param(2, Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["y" /* Inject */])('Provider')),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Object, Object, Object, Object, Object]),
        __metadata("design:returntype", void 0)
    ], WizardFormPopupExtComponent.prototype, "initWizardFormPopupExtComponent", null);
    WizardFormPopupExtComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: '.js_wizard',
            template: '' // Define template in child component
        }),
        __metadata("design:paramtypes", [])
    ], WizardFormPopupExtComponent);
    return WizardFormPopupExtComponent;
}(__WEBPACK_IMPORTED_MODULE_1__wizard_popup_ext_component__["a" /* WizardPopupExtComponent */]));



/***/ }),

/***/ "../../../../../src/AppBundle/Resources/public/wizard/ts/src/wizard-manager.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return WizardManagerService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ts_nav_manager_nav_manager_service__ = __webpack_require__("../../../../../src/AppBundle/Resources/public/ts/nav-manager/nav-manager.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__tasks_loader_manager_ts_tasks_loader_manager_service__ = __webpack_require__("../../../../../src/AppBundle/Resources/public/tasks-loader-manager/ts/tasks-loader-manager.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};



/**
 * Wizard manager.
 * Use this class to manage the navigation between multiple containers in wizard mode.
 * Containers can be static or lazy load.
 * This class is defined as service because the components that use it already extends another class.
 * The component that use this service should implements the "IWizardManager" interface.
 * The init of this service should be called in "ngAfterViewInit" method when you have lazy load containers,
 * so the template has been rendered.
 */
var WizardManagerService = (function () {
    function WizardManagerService(_navManagerService, _tasksLoaderManagerService, _provider) {
        this._navManagerService = _navManagerService;
        this._tasksLoaderManagerService = _tasksLoaderManagerService;
        this._provider = _provider;
        // Local variables
        this._component = null; // Parent component that uses and implement this service
        // Set default values for provider
        if (!this._provider) {
            this._provider = {};
        }
    }
    /**
     * Initialization of service.
     * This method should be called in "ngAfterViewInit" method of parent component when you have lazy load containers,
     * so the template has been rendered.
     * @param component (parent component)
     * @param lazyLoadViewContainerRefQL
     */
    WizardManagerService.prototype.init = function (component, lazyLoadViewContainerRefQL) {
        if (lazyLoadViewContainerRefQL === void 0) { lazyLoadViewContainerRefQL = null; }
        // Local variables
        this._component = component;
        // Initializes the NavManagerService
        this._navManagerService.init(component, lazyLoadViewContainerRefQL);
        this._navManagerService.navTo(0);
    };
    /**
     * Reset of service.
     * This method should be called in "ngOnDestroy" method of parent component, so variables can be reset (free data)
     * and the service be able to be reused.
     */
    WizardManagerService.prototype.reset = function () {
        // Local variables
        this._component = null;
        // Reset the NavManagerService
        this._navManagerService.reset();
    };
    /**
     * Next action.
     * @param $event
     */
    WizardManagerService.prototype.nextAction = function ($event) {
        if ($event === void 0) { $event = null; }
        // Avoid task duplication
        if (this._tasksLoaderManagerService.hasTask('LOAD')) {
            return;
        }
        if ($event) {
            $event.preventDefault();
        }
        var nextIndex = (this._navManagerService.getIndex() + 1);
        // Force to rebuild all components
        if (this._provider.rebuildNextStepComponents) {
            this._navManagerService.unsetComponentRef(nextIndex);
        }
        this._navManagerService.navTo(nextIndex).then(function (data) { return; }, function (errors) { return; });
    };
    /**
     * Previous action.
     * @param $event
     */
    WizardManagerService.prototype.prevAction = function ($event) {
        if ($event === void 0) { $event = null; }
        // Avoid task duplication
        if (this._tasksLoaderManagerService.hasTask('LOAD')) {
            return;
        }
        if ($event) {
            $event.preventDefault();
        }
        // Skip submit to go into the prev container
        this._navManagerService.navTo(this._navManagerService.getIndex() - 1, false).then(function (data) { return; }, function (errors) { return; });
    };
    /**
     * Finish action.
     * @param $event
     */
    WizardManagerService.prototype.finishAction = function ($event) {
        if ($event === void 0) { $event = null; }
        // Avoid task duplication
        if (this._tasksLoaderManagerService.hasTask('LOAD')) {
            return;
        }
        if ($event) {
            $event.preventDefault();
        }
        var that = this;
        // Called only to check te current container (submit)
        this._navManagerService.navTo(this._navManagerService.getIndex()).then(function (data) { return that._component.closeAction(); }, function (errors) { return; });
    };
    /**
     * Cancel action.
     * @param $event
     */
    WizardManagerService.prototype.cancelAction = function ($event) {
        if ($event === void 0) { $event = null; }
        if ($event) {
            $event.preventDefault();
        }
        this._component.closeAction();
    };
    /* NAVIGATION MANAGER SERVICE METHODS */
    WizardManagerService.prototype.getIndex = function () {
        return this._navManagerService.getIndex();
    };
    WizardManagerService.prototype.getComponentRef = function (index) {
        if (index === void 0) { index = null; }
        return this._navManagerService.getComponentRef(index);
    };
    WizardManagerService.prototype.unsetComponentRef = function (index) {
        if (index === void 0) { index = null; }
        this._navManagerService.unsetComponentRef(index);
        return this;
    };
    WizardManagerService.prototype.navTo = function (index, hasSubmit) {
        if (hasSubmit === void 0) { hasSubmit = false; }
        return this._navManagerService.navToAction(index, hasSubmit);
    };
    WizardManagerService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["z" /* Injectable */])(),
        __param(2, Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["M" /* Optional */])()), __param(2, Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["y" /* Inject */])('WizardManagerServiceProvider')),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__ts_nav_manager_nav_manager_service__["a" /* NavManagerService */],
            __WEBPACK_IMPORTED_MODULE_2__tasks_loader_manager_ts_tasks_loader_manager_service__["a" /* TasksLoaderManagerService */], Object])
    ], WizardManagerService);
    return WizardManagerService;
}());



/***/ }),

/***/ "../../../../../src/AppBundle/Resources/public/wizard/ts/src/wizard-popup.ext-component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return WizardPopupExtComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__modal_ts_modal_service__ = __webpack_require__("../../../../../src/AppBundle/Resources/public/modal/ts/modal.service.ts");
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};


var WizardPopupExtComponent = (function (_super) {
    __extends(WizardPopupExtComponent, _super);
    function WizardPopupExtComponent() {
        return _super.call(this) || this;
    }
    WizardPopupExtComponent.prototype.initWizardPopupExtComponent = function (elementRef, renderer, provider, wizardManagerService) {
        _super.prototype.initBaseModalPopupExt.call(this, elementRef, renderer, provider);
        this._wizardManagerService = wizardManagerService;
    };
    /**
     * Lifecycle callback
     */
    WizardPopupExtComponent.prototype.ngAfterViewInit = function () {
        // Initializes the children navigation manager service
        this._wizardManagerService.init(this, this.lazyLoadViewContainerRefQL);
    };
    /**
     * Lifecycle callback
     */
    WizardPopupExtComponent.prototype.ngOnDestroy = function () {
        // Free variables
        this._wizardManagerService.reset();
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChildren */])('js_lazyLoadContainer', { read: __WEBPACK_IMPORTED_MODULE_0__angular_core__["_9" /* ViewContainerRef */] }),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["S" /* QueryList */])
    ], WizardPopupExtComponent.prototype, "lazyLoadViewContainerRefQL", void 0);
    __decorate([
        __param(2, Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["y" /* Inject */])('Provider')),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Object, Object, Object, Object]),
        __metadata("design:returntype", void 0)
    ], WizardPopupExtComponent.prototype, "initWizardPopupExtComponent", null);
    WizardPopupExtComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: '.js_wizard',
            template: '' // Define template in child component
        }),
        __metadata("design:paramtypes", [])
    ], WizardPopupExtComponent);
    return WizardPopupExtComponent;
}(__WEBPACK_IMPORTED_MODULE_1__modal_ts_modal_service__["a" /* BaseModalPopupExt */]));



/***/ }),

/***/ "../../../../../src/BookingBundle/Resources/public/base-booking-service/add/ts/src/step2-field-debug.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Step2FieldDebugComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__AppBundle_Resources_public_accordion_ts_src_accordion_component__ = __webpack_require__("../../../../../src/AppBundle/Resources/public/accordion/ts/src/accordion.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__AppBundle_Resources_public_ts_nav_manager_nav_manager_service__ = __webpack_require__("../../../../../src/AppBundle/Resources/public/ts/nav-manager/nav-manager.service.ts");
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};



var Step2FieldDebugComponent = (function (_super) {
    __extends(Step2FieldDebugComponent, _super);
    function Step2FieldDebugComponent(elementRef, renderer, provider, helperService, navManagerService) {
        var _this = _super.call(this, elementRef, renderer, provider || null, helperService, navManagerService) || this;
        // Modal parameters
        _this.onDismissEmitter = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["v" /* EventEmitter */]();
        _this._statusMap = _this._helperService.getStatusMap();
        return _this;
    }
    /**
     * Get navigation data (needed data to lazy load container)
     * @param index (index to load)
     * @returns NavData
     */
    Step2FieldDebugComponent.prototype.getNavData = function (index) {
        return null;
    };
    /**
     * Get nav providers (to lazy load components in container with dependency injection)
     * @param index (index to load)
     * @param data (data to resolve all providers)
     * @returns {Array}
     */
    Step2FieldDebugComponent.prototype.getNavProviders = function (index, data) {
        if (data === void 0) { data = null; }
        return [];
    };
    /**
     * Close action.
     * @param $event
     */
    Step2FieldDebugComponent.prototype.closeAction = function ($event) {
        if ($event === void 0) { $event = null; }
        if ($event) {
            $event.preventDefault();
        }
        this.onDismissEmitter.emit(null);
    };
    Step2FieldDebugComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: '#js_addStep2FieldDebug',
            template: __webpack_require__("../../../../../src/BookingBundle/Resources/public/base-booking-service/add/ts/templates/step2-field-debug.component.html")
        }),
        __param(2, Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["M" /* Optional */])()), __param(2, Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["y" /* Inject */])('Provider')),
        __param(3, Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["y" /* Inject */])('HelperService')),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_core__["t" /* ElementRef */],
            __WEBPACK_IMPORTED_MODULE_0__angular_core__["U" /* Renderer */], Object, Object, __WEBPACK_IMPORTED_MODULE_2__AppBundle_Resources_public_ts_nav_manager_nav_manager_service__["a" /* NavManagerService */]])
    ], Step2FieldDebugComponent);
    return Step2FieldDebugComponent;
}(__WEBPACK_IMPORTED_MODULE_1__AppBundle_Resources_public_accordion_ts_src_accordion_component__["a" /* AccordionComponent */]));



/***/ }),

/***/ "../../../../../src/BookingBundle/Resources/public/base-booking-service/add/ts/src/step2-field-debug.ext-module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Step2FieldDebugExtModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("../../../common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__step2_field_debug_component__ = __webpack_require__("../../../../../src/BookingBundle/Resources/public/base-booking-service/add/ts/src/step2-field-debug.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




/**
 * Note: This file is never used. It's only here as example to check injection dependencies
 */
var Step2FieldDebugExtModule = (function () {
    function Step2FieldDebugExtModule() {
    }
    Step2FieldDebugExtModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["H" /* NgModule */])({
            imports: [__WEBPACK_IMPORTED_MODULE_1__angular_common__["a" /* CommonModule */], __WEBPACK_IMPORTED_MODULE_2__angular_forms__["b" /* FormsModule */]],
            declarations: [
                __WEBPACK_IMPORTED_MODULE_3__step2_field_debug_component__["a" /* Step2FieldDebugComponent */]
            ],
            exports: [__WEBPACK_IMPORTED_MODULE_3__step2_field_debug_component__["a" /* Step2FieldDebugComponent */]]
        })
    ], Step2FieldDebugExtModule);
    return Step2FieldDebugExtModule;
}());



/***/ }),

/***/ "../../../../../src/BookingBundle/Resources/public/base-booking-service/add/ts/src/step2.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Step2Component; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__AppBundle_Resources_public_form_ts_form_extension_component__ = __webpack_require__("../../../../../src/AppBundle/Resources/public/form/ts/form.extension-component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__AppBundle_Resources_public_ts_nav_manager_nav_manager_service__ = __webpack_require__("../../../../../src/AppBundle/Resources/public/ts/nav-manager/nav-manager.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__AppBundle_Resources_public_modal_ts_modal_service__ = __webpack_require__("../../../../../src/AppBundle/Resources/public/modal/ts/modal.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__AppBundle_Resources_public_form_ts_form_service__ = __webpack_require__("../../../../../src/AppBundle/Resources/public/form/ts/form.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__step2_field_debug_ext_module__ = __webpack_require__("../../../../../src/BookingBundle/Resources/public/base-booking-service/add/ts/src/step2-field-debug.ext-module.ts");
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};





/* Import dependencies */

/* /Import dependencies */
var Step2Component = (function (_super) {
    __extends(Step2Component, _super);
    function Step2Component(elementRef, renderer, provider, formService, dataService, _modalService, _injector, _helperService) {
        var _this = _super.call(this) || this;
        _this._modalService = _modalService;
        _this._injector = _injector;
        _this._helperService = _helperService;
        _super.prototype.initFormExtensionComponent.call(_this, elementRef, renderer, provider, formService, dataService);
        _this._statusMap = _this._helperService.getStatusMap();
        return _this;
    }
    /**
     * Change action (change the submitted data).
     * This method should be called from view/template to change the submitted data.
     * @param $event
     */
    Step2Component.prototype.changeAction = function ($event) {
        if ($event === void 0) { $event = null; }
        if ($event) {
            $event.preventDefault();
        }
        var route = this._dataService.getRoute('addStep2');
        this._formService.save(route).then(function (data) { return; }, function (errors) { return; });
    };
    /**
     * Show field debug action (change the submitted data).
     * @param $event
     */
    Step2Component.prototype.debugAction = function ($event) {
        if ($event === void 0) { $event = null; }
        if ($event) {
            $event.preventDefault();
        }
        var popup = {
            module: __WEBPACK_IMPORTED_MODULE_5__step2_field_debug_ext_module__["a" /* Step2FieldDebugExtModule */],
            component: 'Step2FieldDebugComponent',
            providers: [
                __WEBPACK_IMPORTED_MODULE_2__AppBundle_Resources_public_ts_nav_manager_nav_manager_service__["a" /* NavManagerService */],
                { provide: 'Provider', useValue: {
                        label: this._formService.getObject()['name'],
                        data: {
                            availability: (this._formService.getObject()['isAutoAvailability']
                                ? this.getControlDebug('availabilityDebug')
                                : null),
                            allot: (this._formService.getObject()['isAutoAllot']
                                ? this.getControlDebug('allotDebug')
                                : null),
                            price: (this._formService.getObject()['isAutoPrice']
                                ? this.getControlDebug('priceDebug')
                                : null)
                        }
                    } }
            ]
        };
        // Open popup
        this._modalService.popup(popup, this._injector).then(function (data) { return; }, function (errors) { console.log(errors); return; });
    };
    /**
     * Get control debug
     * @param control
     * @returns {Array}
     */
    Step2Component.prototype.getControlDebug = function (control) {
        var bookingServiceId = (this._formService.getObject()['bookingServiceObj'] || null);
        if (!bookingServiceId) {
            return [];
        }
        return this._dataService.getLocalDataAttr(bookingServiceId)[control];
    };
    Step2Component = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: '#js_addStep2',
            template: '' // Define template in child component
        }),
        __param(2, Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["y" /* Inject */])('Provider')),
        __param(4, Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["y" /* Inject */])('DataService')),
        __param(7, Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["y" /* Inject */])('HelperService')),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_core__["t" /* ElementRef */],
            __WEBPACK_IMPORTED_MODULE_0__angular_core__["U" /* Renderer */], Object, __WEBPACK_IMPORTED_MODULE_4__AppBundle_Resources_public_form_ts_form_service__["a" /* FormService */], Object, __WEBPACK_IMPORTED_MODULE_3__AppBundle_Resources_public_modal_ts_modal_service__["b" /* ModalService */],
            __WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Injector */], Object])
    ], Step2Component);
    return Step2Component;
}(__WEBPACK_IMPORTED_MODULE_1__AppBundle_Resources_public_form_ts_form_extension_component__["a" /* FormExtensionComponent */]));



/***/ }),

/***/ "../../../../../src/BookingBundle/Resources/public/base-booking-service/add/ts/src/step3.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Step3Component; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__AppBundle_Resources_public_form_ts_form_extension_component__ = __webpack_require__("../../../../../src/AppBundle/Resources/public/form/ts/form.extension-component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__AppBundle_Resources_public_form_ts_form_service__ = __webpack_require__("../../../../../src/AppBundle/Resources/public/form/ts/form.service.ts");
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};



var Step3Component = (function (_super) {
    __extends(Step3Component, _super);
    function Step3Component(elementRef, renderer, provider, formService, dataService) {
        var _this = _super.call(this) || this;
        _super.prototype.initFormExtensionComponent.call(_this, elementRef, renderer, provider, formService, dataService);
        return _this;
    }
    Step3Component = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: '#js_addStep3',
            template: '' // Define template in child component
        }),
        __param(2, Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["y" /* Inject */])('Provider')),
        __param(4, Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["y" /* Inject */])('DataService')),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_core__["t" /* ElementRef */],
            __WEBPACK_IMPORTED_MODULE_0__angular_core__["U" /* Renderer */], Object, __WEBPACK_IMPORTED_MODULE_2__AppBundle_Resources_public_form_ts_form_service__["a" /* FormService */], Object])
    ], Step3Component);
    return Step3Component;
}(__WEBPACK_IMPORTED_MODULE_1__AppBundle_Resources_public_form_ts_form_extension_component__["a" /* FormExtensionComponent */]));



/***/ }),

/***/ "../../../../../src/BookingBundle/Resources/public/base-booking-service/add/ts/templates/step2-field-debug.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"modal-header\">\n    <div class=\"row align-items-center\">\n        <h3 class=\"col-auto mr-auto modal-title\">Debug&nbsp;<small>{{getProviderAttr('label')}}</small></h3>\n        <div class=\"col-auto text-right actions\"><a\n                class=\"-round fa fa-times\"\n                (click)=\"closeAction($event)\"></a></div>\n    </div>\n</div>\n<div class=\"modal-body\">\n    <div class=\"row\">\n        <div class=\"col-12\">    <div class=\"accordion\" id=\"accordion\">\n        <ng-template ngFor let-panel [ngForOf]=\"[&#039;availability&#039;, &#039;allot&#039;, &#039;price&#039;]\" let-index=\"index\">\n        <ng-template [ngIf]=\"getProviderAttr('data')[panel]\">        <div class=\"card\">\n            <div class=\"card-header\"><div class=\"row align-items-center\">\n                    <h5 class=\"col\"\n                        (click)=\"_navManagerService.navToAction(index)\"><span class=\"status -{{ _statusMap[getProviderAttr('data')[panel]['status']] || 'danger' }}\"></span>&nbsp;{{_helperService.uCFirst(panel)}}</h5>\n                </div></div>\n            <div class=\"collapse\"\n                 [class.show]=\"index === _navManagerService.getIndex()\">\n                <div class=\"card-body\">\n                                <ul class=\"no-bullets\"><li class=\"p-xxs\" *ngFor=\"let debugDetail of getProviderAttr('data')[panel]['detail'];\">\n                    <span class=\"status -{{ _statusMap[debugDetail['status']] || 'danger' }}\"></span><span\n                    >&nbsp;{{debugDetail['date']}}</span>\n\n                    <span *ngIf=\"panel == 'allot'\">&nbsp;({{debugDetail['free']}}/{{debugDetail['total']}} - <span [innerHTML]=\"debugDetail['type']\"></span>)</span>\n                    <ul *ngIf=\"panel == 'price'\"><li *ngFor=\"let priceDetail of debugDetail['price'];\">\n                            {{priceDetail['description']}}:&nbsp;\n                            <strong>Cost:</strong>&nbsp;{{priceDetail['costValue']}}&nbsp;<strong>Sell:</strong>&nbsp;{{priceDetail['sellValue']}}\n                        </li></ul>\n                </li></ul>\n                        </div>\n            </div>\n        </div>\n        </ng-template>    </ng-template>\n</div></div>\n    </div>\n</div>\n<div class=\"modal-footer hide-on-empty\">\n            <div class=\"row\"><div class=\"col-auto ml-auto\">\n            <button type=\"button\" class=\"btn btn-primary\" (click)=\"closeAction($event, true)\">Ok</button>\n        </div></div>\n    </div>"

/***/ }),

/***/ "../../../../../src/BookingBundle/Resources/public/package-booking/add/ts/src/step1.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Step1Component; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__AppBundle_Resources_public_form_ts_form_service__ = __webpack_require__("../../../../../src/AppBundle/Resources/public/form/ts/form.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__AppBundle_Resources_public_ts_data_service_data_service__ = __webpack_require__("../../../../../src/AppBundle/Resources/public/ts/data-service/data.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__AppBundle_Resources_public_ts_actions_actions_service__ = __webpack_require__("../../../../../src/AppBundle/Resources/public/ts/actions/actions.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__AppBundle_Resources_public_wizard_ts_src_wizard_form_popup_component__ = __webpack_require__("../../../../../src/AppBundle/Resources/public/wizard/ts/src/wizard-form-popup.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__AppBundle_Resources_public_wizard_ts_src_wizard_manager_service__ = __webpack_require__("../../../../../src/AppBundle/Resources/public/wizard/ts/src/wizard-manager.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__AppBundle_Resources_public_ts_dynamic_component_loader_service__ = __webpack_require__("../../../../../src/AppBundle/Resources/public/ts/dynamic-component-loader.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__AppBundle_Resources_public_ts_post_service__ = __webpack_require__("../../../../../src/AppBundle/Resources/public/ts/post.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__step2_ext_module__ = __webpack_require__("../../../../../src/BookingBundle/Resources/public/package-booking/add/ts/src/step2.ext-module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__step3_ext_module__ = __webpack_require__("../../../../../src/BookingBundle/Resources/public/package-booking/add/ts/src/step3.ext-module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__step4_ext_module__ = __webpack_require__("../../../../../src/BookingBundle/Resources/public/package-booking/add/ts/src/step4.ext-module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__step5_ext_module__ = __webpack_require__("../../../../../src/BookingBundle/Resources/public/package-booking/add/ts/src/step5.ext-module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__step6_ext_module__ = __webpack_require__("../../../../../src/BookingBundle/Resources/public/package-booking/add/ts/src/step6.ext-module.ts");
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};








/* Import dependencies */
// Step1 Package Service





/* /Import dependencies */
var Step1Component = (function (_super) {
    __extends(Step1Component, _super);
    function Step1Component(elementRef, renderer, provider, wizardManagerService, formService, _dynamicComponentLoaderService, _postService, _injector, _helperService, _dataService) {
        var _this = 
        // Call parent
        _super.call(this, elementRef, renderer, provider, wizardManagerService, formService) || this;
        _this._dynamicComponentLoaderService = _dynamicComponentLoaderService;
        _this._postService = _postService;
        _this._injector = _injector;
        _this._helperService = _helperService;
        _this._dataService = _dataService;
        // Variables for components and services to handle with BookingService objects
        _this._packageBookingService_injector = null;
        _this._packageBookingService_formService = null;
        _this._packageBookingService_dataService = null;
        _this._packageBookingService_dataProvider = null;
        return _this;
    }
    /**
     * Submit navigation (when leave one container to navigate in other one)
     * @param index (index to validate)
     * @returns {Promise<boolean>}
     */
    Step1Component.prototype.submitNav = function (index) {
        var that = this, route = null, componentRef = null;
        return new Promise(function (resolve, reject) {
            switch (index) {
                case 0:
                    // Save form
                    route = (that._dataService.getRoute('addStep1'));
                    return that._formService.save(route).then(function (data) { return resolve(true); }, function (errors) { return reject(false); });
                case 1:
                    // Check service selection
                    // It's a hidden field, so does not can be checked by angular control
                    if (!that._packageBookingService_formService.getObject()['serviceObj']) {
                        var errors = {};
                        errors['serviceObj'] = ['Please select an option'];
                        that._packageBookingService_formService.setErrors(errors);
                        return reject(false);
                    }
                    // Save form
                    route = (that._packageBookingService_dataService.getRoute('addStep2ForBooking'));
                    return that._packageBookingService_formService.save(route).then(function (data) { return resolve(true); }, function (errors) { return reject(false); });
                case 2:
                    // Save form
                    componentRef = that._wizardManagerService.getComponentRef(index);
                    route = (that._packageBookingService_dataService.getRoute('addStep3ForBooking'));
                    return componentRef.instance._formService.save(route).then(function (data) { return resolve(true); }, function (errors) { return reject(false); });
                case 3:
                    // Submit data
                    componentRef = that._wizardManagerService.getComponentRef(index);
                    // Cal the same method of change button
                    return componentRef.instance.change().then(function (data) { return resolve(true); }, function (errors) { return reject(false); });
                case 4:
                    // Save form
                    componentRef = that._wizardManagerService.getComponentRef(index);
                    route = (that._packageBookingService_dataService.getRoute('addStep5ForBooking'));
                    return componentRef.instance._formService.save(route).then(function (data) {
                        // Update preview info
                        componentRef = that._wizardManagerService.getComponentRef(index + 1);
                        if (componentRef) {
                            componentRef.instance.init(that._packageBookingService_dataService.getLocalDataAttr('preview'));
                        }
                        return resolve(true);
                    }, function (errors) { return reject(false); });
                case 5:
                    // Confirm all data to save from session storage to database
                    route = (that._dataService.getRoute('addStep6')
                        + '/' + that._formService.getObject()['id']
                        + '/' + that._packageBookingService_formService.getObject()['id']);
                    return that._dataService.runAction(route, null, true).then(function (data) { return resolve(true); }, function (errors) { return reject(false); });
            }
            // Nothing to do
            return resolve(true);
        });
    };
    /**
     * Get navigation data (needed data to lazy load container)
     * @param index (index to load)
     * @returns NavData
     */
    Step1Component.prototype.getNavData = function (index) {
        switch (index) {
            case 1:
                return {
                    module: __WEBPACK_IMPORTED_MODULE_8__step2_ext_module__["a" /* Step2ExtModule */],
                    component: 'Step2Component',
                    urlProvider: (this._helperService.getAppVar('route')
                        + 'booking/package-booking-service/conf-for-booking/'
                        + this._formService.getObject()['bookingObj'] // Parent is the Booking
                    )
                };
            case 2:
                return {
                    module: __WEBPACK_IMPORTED_MODULE_9__step3_ext_module__["a" /* Step3ExtModule */],
                    component: 'Step3Component',
                    dataProvider: this._packageBookingService_dataProvider,
                    injector: this._packageBookingService_injector
                };
            case 3:
                return {
                    module: __WEBPACK_IMPORTED_MODULE_10__step4_ext_module__["a" /* Step4ExtModule */],
                    component: 'Step4Component',
                    dataProvider: this._packageBookingService_dataProvider,
                    injector: this._packageBookingService_injector
                };
            case 4:
                return {
                    module: __WEBPACK_IMPORTED_MODULE_11__step5_ext_module__["a" /* Step5ExtModule */],
                    component: 'Step5Component',
                    dataProvider: this._packageBookingService_dataProvider,
                    injector: this._packageBookingService_injector
                };
            case 5:
                return {
                    module: __WEBPACK_IMPORTED_MODULE_12__step6_ext_module__["a" /* Step6ExtModule */],
                    component: 'Step6Component',
                    dataProvider: this._packageBookingService_dataProvider,
                    injector: this._packageBookingService_injector
                };
        }
        return null;
    };
    /**
     * Get nav providers (to lazy load components in container with dependency injection)
     * @param index (index to load)
     * @param data (data to resolve all providers)
     * @returns {Array}
     */
    Step1Component.prototype.getNavProviders = function (index, data) {
        if (data === void 0) { data = null; }
        switch (index) {
            case 1:
                this._packageBookingService_dataProvider = data; // To use in other BookingService panels
                return [
                    { provide: 'DataService', useClass: __WEBPACK_IMPORTED_MODULE_2__AppBundle_Resources_public_ts_data_service_data_service__["a" /* DataService */] },
                    { provide: 'DataServiceProvider', useValue: this._helperService.getDataServiceProvider(data) },
                    __WEBPACK_IMPORTED_MODULE_1__AppBundle_Resources_public_form_ts_form_service__["a" /* FormService */],
                    { provide: 'Provider', useValue: this._helperService.getFormProvider(data) },
                    // Reset FormServiceProvider to use DataServiceProvider as default values
                    { provide: 'FormServiceProvider', useValue: {} }
                ];
            case 2:
            case 4:
                return [
                    __WEBPACK_IMPORTED_MODULE_1__AppBundle_Resources_public_form_ts_form_service__["a" /* FormService */],
                    { provide: 'Provider', useValue: this._helperService.getFormProvider(data) },
                    // Reset FormServiceProvider to use DataServiceProvider as default values
                    { provide: 'FormServiceProvider', useValue: { fields: null, hasPreventObjectOverride: false } }
                ];
            case 3:
                // Uses the same DataService that step 1 and 2
                return [
                    __WEBPACK_IMPORTED_MODULE_3__AppBundle_Resources_public_ts_actions_actions_service__["a" /* ActionsService */],
                    { provide: 'ActionsServiceProvider', useValue: this._helperService.getActionsServiceProvider(data) },
                    { provide: 'Provider', useValue: this._helperService.getDataBoxProvider(data) },
                    { provide: 'Popups', useValue: null }
                ];
            case 5:
                return [
                    { provide: 'Provider', useValue: this._helperService.getEntityDetailPreviewProvider(data['localData']['data']['preview']) },
                ];
        }
        return null;
    };
    /**
     * Get Selected Service Attribute
     * Used by view
     * @param attribute
     * @returns {any|string}
     */
    Step1Component.prototype.getSelectedServiceAttr = function (attribute) {
        // Check if FormService has been setted
        if (!this._packageBookingService_formService) {
            return null;
        }
        switch (attribute) {
            case 'totalSell':// Sum all services
                var totalSell = (this._packageBookingService_formService.getViewObject()['__totalSell'] || 0), objects = this._packageBookingService_dataService.getProviderAttr('objects');
                if (objects && (objects.length > 0)) {
                    for (var _i = 0, objects_1 = objects; _i < objects_1.length; _i++) {
                        var object = objects_1[_i];
                        // Only objects enabled and not grouped (if grouped your value is sum in the grouped service)
                        if (object['hasService'] && !object['grouperBookingServiceObj']) {
                            totalSell += (object['__totalSell'] || 0);
                        }
                    }
                }
                return (totalSell + '€');
            default:
                return (this._packageBookingService_formService.getViewObject()[attribute] || null);
        }
    };
    /**
     * Post (after) load callback
     * @param index
     * @param componentRef
     * @param injector
     */
    Step1Component.prototype.postLoad = function (index, componentRef, injector) {
        switch (index) {
            case 1:
                this._packageBookingService_injector = injector;
                this._packageBookingService_formService = injector.get(__WEBPACK_IMPORTED_MODULE_1__AppBundle_Resources_public_form_ts_form_service__["a" /* FormService */]);
                this._packageBookingService_dataService = injector.get('DataService');
                break;
        }
        return;
    };
    /**
     * Lifecycle callback
     */
    Step1Component.prototype.ngOnDestroy = function () {
        _super.prototype.ngOnDestroy.call(this);
        // Reset debug (auto add price, dates and allot)
        this._dataService.setProviderAttr('localData', {});
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChildren */])('js_lazyLoadContainer', { read: __WEBPACK_IMPORTED_MODULE_0__angular_core__["_9" /* ViewContainerRef */] }),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["S" /* QueryList */])
    ], Step1Component.prototype, "lazyLoadViewContainerRefQL", void 0);
    Step1Component = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: '#js_add',
            template: __webpack_require__("../../../../../src/BookingBundle/Resources/public/package-booking/add/ts/templates/step1.component.html")
        }),
        __param(2, Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["y" /* Inject */])('Provider')),
        __param(8, Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["y" /* Inject */])('HelperService')),
        __param(9, Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["y" /* Inject */])('DataService')),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_core__["t" /* ElementRef */],
            __WEBPACK_IMPORTED_MODULE_0__angular_core__["U" /* Renderer */], Object, __WEBPACK_IMPORTED_MODULE_5__AppBundle_Resources_public_wizard_ts_src_wizard_manager_service__["a" /* WizardManagerService */],
            __WEBPACK_IMPORTED_MODULE_1__AppBundle_Resources_public_form_ts_form_service__["a" /* FormService */],
            __WEBPACK_IMPORTED_MODULE_6__AppBundle_Resources_public_ts_dynamic_component_loader_service__["a" /* DynamicComponentLoaderService */],
            __WEBPACK_IMPORTED_MODULE_7__AppBundle_Resources_public_ts_post_service__["a" /* PostService */],
            __WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Injector */], Object, Object])
    ], Step1Component);
    return Step1Component;
}(__WEBPACK_IMPORTED_MODULE_4__AppBundle_Resources_public_wizard_ts_src_wizard_form_popup_component__["a" /* WizardFormPopupComponent */]));



/***/ }),

/***/ "../../../../../src/BookingBundle/Resources/public/package-booking/add/ts/src/step1.ext-module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Step1ExtModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("../../../common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__AppBundle_Resources_public_form_ts_field_types_field_types_extension_module__ = __webpack_require__("../../../../../src/AppBundle/Resources/public/form/ts/field-types/field-types.extension-module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__step1_component__ = __webpack_require__("../../../../../src/BookingBundle/Resources/public/package-booking/add/ts/src/step1.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





var Step1ExtModule = (function () {
    function Step1ExtModule() {
    }
    Step1ExtModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["H" /* NgModule */])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_common__["a" /* CommonModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_forms__["b" /* FormsModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_forms__["e" /* ReactiveFormsModule */],
                __WEBPACK_IMPORTED_MODULE_3__AppBundle_Resources_public_form_ts_field_types_field_types_extension_module__["a" /* FieldTypesExtensionModule */]
            ],
            declarations: [
                __WEBPACK_IMPORTED_MODULE_4__step1_component__["a" /* Step1Component */]
            ],
            exports: [__WEBPACK_IMPORTED_MODULE_4__step1_component__["a" /* Step1Component */]]
        })
    ], Step1ExtModule);
    return Step1ExtModule;
}());



/***/ }),

/***/ "../../../../../src/BookingBundle/Resources/public/package-booking/add/ts/src/step2-service.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Step2ServiceComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__AppBundle_Resources_public_ts_actions_actions_service__ = __webpack_require__("../../../../../src/AppBundle/Resources/public/ts/actions/actions.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__AppBundle_Resources_public_data_box_ts_src_data_box_extension_component__ = __webpack_require__("../../../../../src/AppBundle/Resources/public/data-box/ts/src/data-box.extension-component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__AppBundle_Resources_public_modal_ts_modal_service__ = __webpack_require__("../../../../../src/AppBundle/Resources/public/modal/ts/modal.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__AppBundle_Resources_public_tasks_loader_manager_ts_tasks_loader_manager_service__ = __webpack_require__("../../../../../src/AppBundle/Resources/public/tasks-loader-manager/ts/tasks-loader-manager.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__AppBundle_Resources_public_form_ts_form_service__ = __webpack_require__("../../../../../src/AppBundle/Resources/public/form/ts/form.service.ts");
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};






// Component
var Step2ServiceComponent = (function (_super) {
    __extends(Step2ServiceComponent, _super);
    function Step2ServiceComponent(viewContainerRef, renderer, dataBoxProvider, dataService, tasksLoaderManagerService, helperService, actionsService, modalService, popups, injector, _formService) {
        var _this = 
        // Call parent
        _super.call(this) || this;
        _this._formService = _formService;
        _super.prototype.initDataBoxExtensionComponent.call(_this, viewContainerRef, renderer, dataBoxProvider, dataService, tasksLoaderManagerService, helperService, actionsService, modalService, popups, injector);
        return _this;
    }
    Step2ServiceComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: '.js_step2Service',
            template: __webpack_require__("../../../../../src/BookingBundle/Resources/public/package-booking/add/ts/templates/step2-service.component.html")
        }),
        __param(2, Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["y" /* Inject */])('Provider')),
        __param(3, Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["y" /* Inject */])('DataService')),
        __param(5, Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["y" /* Inject */])('HelperService')),
        __param(8, Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["y" /* Inject */])('Popups')),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_core__["_9" /* ViewContainerRef */],
            __WEBPACK_IMPORTED_MODULE_0__angular_core__["U" /* Renderer */], Object, Object, __WEBPACK_IMPORTED_MODULE_4__AppBundle_Resources_public_tasks_loader_manager_ts_tasks_loader_manager_service__["a" /* TasksLoaderManagerService */], Object, __WEBPACK_IMPORTED_MODULE_1__AppBundle_Resources_public_ts_actions_actions_service__["a" /* ActionsService */],
            __WEBPACK_IMPORTED_MODULE_3__AppBundle_Resources_public_modal_ts_modal_service__["b" /* ModalService */], Object, __WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Injector */],
            __WEBPACK_IMPORTED_MODULE_5__AppBundle_Resources_public_form_ts_form_service__["a" /* FormService */]])
    ], Step2ServiceComponent);
    return Step2ServiceComponent;
}(__WEBPACK_IMPORTED_MODULE_2__AppBundle_Resources_public_data_box_ts_src_data_box_extension_component__["a" /* DataBoxExtensionComponent */]));



/***/ }),

/***/ "../../../../../src/BookingBundle/Resources/public/package-booking/add/ts/src/step2-service.ext-module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Step2ServiceExtModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("../../../common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__AppBundle_Resources_public_ts_search_search_module__ = __webpack_require__("../../../../../src/AppBundle/Resources/public/ts/search/search.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__AppBundle_Resources_public_ts_expander_expander_module__ = __webpack_require__("../../../../../src/AppBundle/Resources/public/ts/expander/expander.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__AppBundle_Resources_public_ts_search_search_pagination_module__ = __webpack_require__("../../../../../src/AppBundle/Resources/public/ts/search/search-pagination.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__step2_service_component__ = __webpack_require__("../../../../../src/BookingBundle/Resources/public/package-booking/add/ts/src/step2-service.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


// This module doesn't use "ReactiveFormsModule", but it needs to import this class
// to provide "formBuilder" when inject dependencies in child modules (like form)





var Step2ServiceExtModule = (function () {
    function Step2ServiceExtModule() {
    }
    Step2ServiceExtModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["H" /* NgModule */])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_common__["a" /* CommonModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_forms__["b" /* FormsModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_forms__["e" /* ReactiveFormsModule */],
                __WEBPACK_IMPORTED_MODULE_3__AppBundle_Resources_public_ts_search_search_module__["a" /* SearchModule */],
                __WEBPACK_IMPORTED_MODULE_5__AppBundle_Resources_public_ts_search_search_pagination_module__["a" /* SearchPaginationModule */],
                __WEBPACK_IMPORTED_MODULE_4__AppBundle_Resources_public_ts_expander_expander_module__["a" /* ExpanderModule */]
            ],
            declarations: [
                __WEBPACK_IMPORTED_MODULE_6__step2_service_component__["a" /* Step2ServiceComponent */]
            ],
            exports: [__WEBPACK_IMPORTED_MODULE_6__step2_service_component__["a" /* Step2ServiceComponent */]]
        })
    ], Step2ServiceExtModule);
    return Step2ServiceExtModule;
}());



/***/ }),

/***/ "../../../../../src/BookingBundle/Resources/public/package-booking/add/ts/src/step2.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Step2Component; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__AppBundle_Resources_public_form_ts_form_service__ = __webpack_require__("../../../../../src/AppBundle/Resources/public/form/ts/form.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__AppBundle_Resources_public_ts_data_service_data_service__ = __webpack_require__("../../../../../src/AppBundle/Resources/public/ts/data-service/data.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__AppBundle_Resources_public_ts_actions_actions_service__ = __webpack_require__("../../../../../src/AppBundle/Resources/public/ts/actions/actions.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__AppBundle_Resources_public_ts_dynamic_component_loader_service__ = __webpack_require__("../../../../../src/AppBundle/Resources/public/ts/dynamic-component-loader.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__AppBundle_Resources_public_ts_post_service__ = __webpack_require__("../../../../../src/AppBundle/Resources/public/ts/post.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__AppBundle_Resources_public_form_ts_form_extension_component__ = __webpack_require__("../../../../../src/AppBundle/Resources/public/form/ts/form.extension-component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__step2_service_ext_module__ = __webpack_require__("../../../../../src/BookingBundle/Resources/public/package-booking/add/ts/src/step2-service.ext-module.ts");
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};







/* Import dependencies */
// Step1 Package Service

/* /Import dependencies */
var Step2Component = (function (_super) {
    __extends(Step2Component, _super);
    function Step2Component(elementRef, renderer, provider, formService, dataService, _dynamicComponentLoaderService, _postService, _injector, _helperService) {
        var _this = _super.call(this) || this;
        _this._dynamicComponentLoaderService = _dynamicComponentLoaderService;
        _this._postService = _postService;
        _this._injector = _injector;
        _this._helperService = _helperService;
        _super.prototype.initFormExtensionComponent.call(_this, elementRef, renderer, provider, formService, dataService);
        return _this;
    }
    /**
     * Lifecycle callback
     */
    Step2Component.prototype.ngAfterViewInit = function () {
        _super.prototype.ngAfterViewInit.call(this);
        // Load dependency
        var that = this, dependencyUrlProvider = (this._helperService.getAppVar('route')
            + 'services/package-service/data-for-booking-service');
        this._postService.post(dependencyUrlProvider).then(function (data) {
            var providers = [
                { provide: 'DataService', useClass: __WEBPACK_IMPORTED_MODULE_2__AppBundle_Resources_public_ts_data_service_data_service__["a" /* DataService */] },
                __WEBPACK_IMPORTED_MODULE_3__AppBundle_Resources_public_ts_actions_actions_service__["a" /* ActionsService */],
                { provide: 'DataServiceProvider', useValue: that._helperService.getDataServiceProvider(data) },
                { provide: 'ActionsServiceProvider', useValue: that._helperService.getActionsServiceProvider(data) },
                { provide: 'Provider', useValue: that._helperService.getDataBoxProvider(data) }
            ], injector = __WEBPACK_IMPORTED_MODULE_0__angular_core__["T" /* ReflectiveInjector */].fromResolvedProviders(__WEBPACK_IMPORTED_MODULE_0__angular_core__["T" /* ReflectiveInjector */].resolve(providers), that._injector);
            that._dynamicComponentLoaderService.load(__WEBPACK_IMPORTED_MODULE_7__step2_service_ext_module__["a" /* Step2ServiceExtModule */], 'Step2ServiceComponent', that.lazyLoadViewContainerRefDependency, injector).then(function (componentRef) { return true; }, function (errors) { console.log(errors); return null; });
        }, function (errors) { console.log(errors); return false; });
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_7" /* ViewChild */])('js_step1Service', { read: __WEBPACK_IMPORTED_MODULE_0__angular_core__["_9" /* ViewContainerRef */] }),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["_9" /* ViewContainerRef */])
    ], Step2Component.prototype, "lazyLoadViewContainerRefDependency", void 0);
    Step2Component = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: '#js_addStep2',
            template: __webpack_require__("../../../../../src/BookingBundle/Resources/public/package-booking/add/ts/templates/step2.component.html")
        }),
        __param(2, Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["y" /* Inject */])('Provider')),
        __param(4, Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["y" /* Inject */])('DataService')),
        __param(8, Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["y" /* Inject */])('HelperService')),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_core__["t" /* ElementRef */],
            __WEBPACK_IMPORTED_MODULE_0__angular_core__["U" /* Renderer */], Object, __WEBPACK_IMPORTED_MODULE_1__AppBundle_Resources_public_form_ts_form_service__["a" /* FormService */], Object, __WEBPACK_IMPORTED_MODULE_4__AppBundle_Resources_public_ts_dynamic_component_loader_service__["a" /* DynamicComponentLoaderService */],
            __WEBPACK_IMPORTED_MODULE_5__AppBundle_Resources_public_ts_post_service__["a" /* PostService */],
            __WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Injector */], Object])
    ], Step2Component);
    return Step2Component;
}(__WEBPACK_IMPORTED_MODULE_6__AppBundle_Resources_public_form_ts_form_extension_component__["a" /* FormExtensionComponent */]));



/***/ }),

/***/ "../../../../../src/BookingBundle/Resources/public/package-booking/add/ts/src/step2.ext-module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Step2ExtModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("../../../common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__step2_component__ = __webpack_require__("../../../../../src/BookingBundle/Resources/public/package-booking/add/ts/src/step2.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var Step2ExtModule = (function () {
    function Step2ExtModule() {
    }
    Step2ExtModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["H" /* NgModule */])({
            imports: [__WEBPACK_IMPORTED_MODULE_1__angular_common__["a" /* CommonModule */], __WEBPACK_IMPORTED_MODULE_2__angular_forms__["b" /* FormsModule */], __WEBPACK_IMPORTED_MODULE_2__angular_forms__["e" /* ReactiveFormsModule */]],
            declarations: [
                __WEBPACK_IMPORTED_MODULE_3__step2_component__["a" /* Step2Component */]
            ],
            exports: [__WEBPACK_IMPORTED_MODULE_3__step2_component__["a" /* Step2Component */]]
        })
    ], Step2ExtModule);
    return Step2ExtModule;
}());



/***/ }),

/***/ "../../../../../src/BookingBundle/Resources/public/package-booking/add/ts/src/step3.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Step3Component; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__AppBundle_Resources_public_form_ts_form_service__ = __webpack_require__("../../../../../src/AppBundle/Resources/public/form/ts/form.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__AppBundle_Resources_public_modal_ts_modal_service__ = __webpack_require__("../../../../../src/AppBundle/Resources/public/modal/ts/modal.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__base_booking_service_add_ts_src_step2_component__ = __webpack_require__("../../../../../src/BookingBundle/Resources/public/base-booking-service/add/ts/src/step2.component.ts");
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};




var Step3Component = (function (_super) {
    __extends(Step3Component, _super);
    function Step3Component(elementRef, renderer, provider, formService, dataService, modalService, injector, helperService) {
        return _super.call(this, elementRef, renderer, provider, formService, dataService, modalService, injector, helperService) || this;
    }
    /**
     * Change action (change the submitted data).
     * This method should be called from view/template to change the submitted data.
     * @param $event
     */
    Step3Component.prototype.changeAction = function ($event) {
        if ($event === void 0) { $event = null; }
        if ($event) {
            $event.preventDefault();
        }
        var route = this._dataService.getRoute('addStep3ForBookingChange');
        this._formService.save(route).then(function (data) { return; }, function (errors) { return; });
    };
    Step3Component = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: '#js_addStep2',
            template: __webpack_require__("../../../../../src/BookingBundle/Resources/public/package-booking/add/ts/templates/step3.component.html")
        }),
        __param(2, Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["y" /* Inject */])('Provider')),
        __param(4, Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["y" /* Inject */])('DataService')),
        __param(7, Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["y" /* Inject */])('HelperService')),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_core__["t" /* ElementRef */],
            __WEBPACK_IMPORTED_MODULE_0__angular_core__["U" /* Renderer */], Object, __WEBPACK_IMPORTED_MODULE_1__AppBundle_Resources_public_form_ts_form_service__["a" /* FormService */], Object, __WEBPACK_IMPORTED_MODULE_2__AppBundle_Resources_public_modal_ts_modal_service__["b" /* ModalService */],
            __WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Injector */], Object])
    ], Step3Component);
    return Step3Component;
}(__WEBPACK_IMPORTED_MODULE_3__base_booking_service_add_ts_src_step2_component__["a" /* Step2Component */]));



/***/ }),

/***/ "../../../../../src/BookingBundle/Resources/public/package-booking/add/ts/src/step3.ext-module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Step3ExtModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("../../../common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ng_bootstrap_ng_bootstrap__ = __webpack_require__("../../../../@ng-bootstrap/ng-bootstrap/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__AppBundle_Resources_public_form_ts_field_types_field_types_extension_module__ = __webpack_require__("../../../../../src/AppBundle/Resources/public/form/ts/field-types/field-types.extension-module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__AppBundle_Resources_public_popover_ts_popover_ext_module__ = __webpack_require__("../../../../../src/AppBundle/Resources/public/popover/ts/popover.ext-module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__step3_component__ = __webpack_require__("../../../../../src/BookingBundle/Resources/public/package-booking/add/ts/src/step3.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};







var Step3ExtModule = (function () {
    function Step3ExtModule() {
    }
    Step3ExtModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["H" /* NgModule */])({
            imports: [__WEBPACK_IMPORTED_MODULE_1__angular_common__["a" /* CommonModule */], __WEBPACK_IMPORTED_MODULE_2__angular_forms__["b" /* FormsModule */], __WEBPACK_IMPORTED_MODULE_2__angular_forms__["e" /* ReactiveFormsModule */], __WEBPACK_IMPORTED_MODULE_3__ng_bootstrap_ng_bootstrap__["a" /* NgbModule */], __WEBPACK_IMPORTED_MODULE_4__AppBundle_Resources_public_form_ts_field_types_field_types_extension_module__["a" /* FieldTypesExtensionModule */], __WEBPACK_IMPORTED_MODULE_5__AppBundle_Resources_public_popover_ts_popover_ext_module__["a" /* PopoverExtModule */]],
            declarations: [
                __WEBPACK_IMPORTED_MODULE_6__step3_component__["a" /* Step3Component */]
            ],
            exports: [__WEBPACK_IMPORTED_MODULE_6__step3_component__["a" /* Step3Component */]]
        })
    ], Step3ExtModule);
    return Step3ExtModule;
}());



/***/ }),

/***/ "../../../../../src/BookingBundle/Resources/public/package-booking/add/ts/src/step4.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Step4Component; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__AppBundle_Resources_public_ts_actions_actions_service__ = __webpack_require__("../../../../../src/AppBundle/Resources/public/ts/actions/actions.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__AppBundle_Resources_public_data_box_ts_src_data_box_extension_component__ = __webpack_require__("../../../../../src/AppBundle/Resources/public/data-box/ts/src/data-box.extension-component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__AppBundle_Resources_public_ts_nav_manager_nav_manager_service__ = __webpack_require__("../../../../../src/AppBundle/Resources/public/ts/nav-manager/nav-manager.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__AppBundle_Resources_public_modal_ts_modal_service__ = __webpack_require__("../../../../../src/AppBundle/Resources/public/modal/ts/modal.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__AppBundle_Resources_public_tasks_loader_manager_ts_tasks_loader_manager_service__ = __webpack_require__("../../../../../src/AppBundle/Resources/public/tasks-loader-manager/ts/tasks-loader-manager.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__base_booking_service_add_ts_src_step2_field_debug_ext_module__ = __webpack_require__("../../../../../src/BookingBundle/Resources/public/base-booking-service/add/ts/src/step2-field-debug.ext-module.ts");
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};






/* Import dependencies */

/* /Import dependencies */
// Component
var Step4Component = (function (_super) {
    __extends(Step4Component, _super);
    function Step4Component(viewContainerRef, renderer, dataBoxProvider, dataService, tasksLoaderManagerService, helperService, actionsService, modalService, popups, injector) {
        var _this = 
        // Call parent
        _super.call(this) || this;
        _super.prototype.initDataBoxExtensionComponent.call(_this, viewContainerRef, renderer, dataBoxProvider, dataService, tasksLoaderManagerService, helperService, actionsService, modalService, popups, injector);
        _this._statusMap = _this._helperService.getStatusMap();
        return _this;
    }
    /**
     * Get form control
     * @param index (index in array of child services)
     * @param control (booking service attribute)
     * @returns {Array}
     */
    Step4Component.prototype.getFormControl = function (index, control) {
        var objects = this._dataService.getProviderAttr('objects'), object = objects[index] || null;
        if (object && (control in object)) {
            return (object[control] || null);
        }
        return null;
    };
    /**
     * Change data submitting to server
     * @returns {Promise}
     */
    Step4Component.prototype.change = function () {
        var that = this;
        var route = (this._dataService.getRoute('addStep4ForBooking') + '/' + this._dataService.getObject()['id']);
        // Send objects (changed by user) instead of form, because we can't control the form name when we use "ngModel"
        var data = this._dataService.getProviderAttr('objects');
        return new Promise(function (resolve, reject) {
            return that._dataService.runAction(route, data, true).then(function (data) { return resolve(true); }, function (errors) { return reject(false); });
        });
    };
    /**
     * Change data submitting to server
     * @param $event
     */
    Step4Component.prototype.changeAction = function ($event) {
        if ($event === void 0) { $event = null; }
        if ($event) {
            $event.preventDefault();
        }
        this.change().then(function (data) { return; }, function (errors) { return; });
    };
    /**
     * Show field debug action (change the submitted data).
     * @param index (index in array of child services)
     * @param $event
     */
    Step4Component.prototype.debugAction = function (index, $event) {
        if ($event === void 0) { $event = null; }
        if ($event) {
            $event.preventDefault();
        }
        var popup = {
            module: __WEBPACK_IMPORTED_MODULE_6__base_booking_service_add_ts_src_step2_field_debug_ext_module__["a" /* Step2FieldDebugExtModule */],
            component: 'Step2FieldDebugComponent',
            providers: [
                __WEBPACK_IMPORTED_MODULE_3__AppBundle_Resources_public_ts_nav_manager_nav_manager_service__["a" /* NavManagerService */],
                { provide: 'Provider', useValue: {
                        label: this.getFormControl(index, 'name'),
                        data: {
                            availability: (this.getFormControl(index, 'isAutoAvailability')
                                ? this.getControlDebug(index, 'availabilityDebug')
                                : null),
                            allot: (this.getFormControl(index, 'isAutoAllot')
                                ? this.getControlDebug(index, 'allotDebug')
                                : null),
                            price: (this.getFormControl(index, 'isAutoPrice')
                                ? this.getControlDebug(index, 'priceDebug')
                                : null)
                        }
                    } }
            ]
        };
        // Open popup
        this._modalService.popup(popup, this._injector).then(function (data) { return; }, function (errors) { console.log(errors); return; });
    };
    /**
     * Get control debug
     * @param index (index in array of child services)
     * @param control
     * @returns {Array}
     */
    Step4Component.prototype.getControlDebug = function (index, control) {
        var bookingServiceId = this.getFormControl(index, 'bookingServiceObj');
        if (!bookingServiceId) {
            return [];
        }
        return this._dataService.getLocalDataAttr(bookingServiceId)[control];
    };
    Step4Component = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: '.js_addStep4',
            template: __webpack_require__("../../../../../src/BookingBundle/Resources/public/package-booking/add/ts/templates/step4.component.html")
        }),
        __param(2, Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["y" /* Inject */])('Provider')),
        __param(3, Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["y" /* Inject */])('DataService')),
        __param(5, Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["y" /* Inject */])('HelperService')),
        __param(8, Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["y" /* Inject */])('Popups')),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_core__["_9" /* ViewContainerRef */],
            __WEBPACK_IMPORTED_MODULE_0__angular_core__["U" /* Renderer */], Object, Object, __WEBPACK_IMPORTED_MODULE_5__AppBundle_Resources_public_tasks_loader_manager_ts_tasks_loader_manager_service__["a" /* TasksLoaderManagerService */], Object, __WEBPACK_IMPORTED_MODULE_1__AppBundle_Resources_public_ts_actions_actions_service__["a" /* ActionsService */],
            __WEBPACK_IMPORTED_MODULE_4__AppBundle_Resources_public_modal_ts_modal_service__["b" /* ModalService */], Object, __WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Injector */]])
    ], Step4Component);
    return Step4Component;
}(__WEBPACK_IMPORTED_MODULE_2__AppBundle_Resources_public_data_box_ts_src_data_box_extension_component__["a" /* DataBoxExtensionComponent */]));



/***/ }),

/***/ "../../../../../src/BookingBundle/Resources/public/package-booking/add/ts/src/step4.ext-module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Step4ExtModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("../../../common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__AppBundle_Resources_public_ts_search_search_module__ = __webpack_require__("../../../../../src/AppBundle/Resources/public/ts/search/search.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__AppBundle_Resources_public_ts_expander_expander_module__ = __webpack_require__("../../../../../src/AppBundle/Resources/public/ts/expander/expander.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__AppBundle_Resources_public_ts_search_search_pagination_module__ = __webpack_require__("../../../../../src/AppBundle/Resources/public/ts/search/search-pagination.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__AppBundle_Resources_public_popover_ts_popover_ext_module__ = __webpack_require__("../../../../../src/AppBundle/Resources/public/popover/ts/popover.ext-module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__step4_component__ = __webpack_require__("../../../../../src/BookingBundle/Resources/public/package-booking/add/ts/src/step4.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


// This module doesn't use "ReactiveFormsModule", but it needs to import this class
// to provide "formBuilder" when inject dependencies in child modules (like form)






var Step4ExtModule = (function () {
    function Step4ExtModule() {
    }
    Step4ExtModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["H" /* NgModule */])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_common__["a" /* CommonModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_forms__["b" /* FormsModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_forms__["e" /* ReactiveFormsModule */],
                __WEBPACK_IMPORTED_MODULE_3__AppBundle_Resources_public_ts_search_search_module__["a" /* SearchModule */],
                __WEBPACK_IMPORTED_MODULE_5__AppBundle_Resources_public_ts_search_search_pagination_module__["a" /* SearchPaginationModule */],
                __WEBPACK_IMPORTED_MODULE_4__AppBundle_Resources_public_ts_expander_expander_module__["a" /* ExpanderModule */],
                __WEBPACK_IMPORTED_MODULE_6__AppBundle_Resources_public_popover_ts_popover_ext_module__["a" /* PopoverExtModule */]
            ],
            declarations: [
                __WEBPACK_IMPORTED_MODULE_7__step4_component__["a" /* Step4Component */]
            ],
            exports: [__WEBPACK_IMPORTED_MODULE_7__step4_component__["a" /* Step4Component */]]
        })
    ], Step4ExtModule);
    return Step4ExtModule;
}());



/***/ }),

/***/ "../../../../../src/BookingBundle/Resources/public/package-booking/add/ts/src/step5.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Step5Component; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__AppBundle_Resources_public_form_ts_form_service__ = __webpack_require__("../../../../../src/AppBundle/Resources/public/form/ts/form.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__base_booking_service_add_ts_src_step3_component__ = __webpack_require__("../../../../../src/BookingBundle/Resources/public/base-booking-service/add/ts/src/step3.component.ts");
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};



var Step5Component = (function (_super) {
    __extends(Step5Component, _super);
    function Step5Component(elementRef, renderer, provider, formService, dataService) {
        return _super.call(this, elementRef, renderer, provider, formService, dataService) || this;
    }
    Step5Component = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: '#js_addStep5',
            template: __webpack_require__("../../../../../src/BookingBundle/Resources/public/package-booking/add/ts/templates/step5.component.html")
        }),
        __param(2, Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["y" /* Inject */])('Provider')),
        __param(4, Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["y" /* Inject */])('DataService')),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_core__["t" /* ElementRef */],
            __WEBPACK_IMPORTED_MODULE_0__angular_core__["U" /* Renderer */], Object, __WEBPACK_IMPORTED_MODULE_1__AppBundle_Resources_public_form_ts_form_service__["a" /* FormService */], Object])
    ], Step5Component);
    return Step5Component;
}(__WEBPACK_IMPORTED_MODULE_2__base_booking_service_add_ts_src_step3_component__["a" /* Step3Component */]));



/***/ }),

/***/ "../../../../../src/BookingBundle/Resources/public/package-booking/add/ts/src/step5.ext-module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Step5ExtModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("../../../common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ng_bootstrap_ng_bootstrap__ = __webpack_require__("../../../../@ng-bootstrap/ng-bootstrap/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__AppBundle_Resources_public_form_ts_field_types_field_types_extension_module__ = __webpack_require__("../../../../../src/AppBundle/Resources/public/form/ts/field-types/field-types.extension-module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__step5_component__ = __webpack_require__("../../../../../src/BookingBundle/Resources/public/package-booking/add/ts/src/step5.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






/**
 * Note: This file is never used. It's only here as example to check injection dependencies
 */
var Step5ExtModule = (function () {
    function Step5ExtModule() {
    }
    Step5ExtModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["H" /* NgModule */])({
            imports: [__WEBPACK_IMPORTED_MODULE_1__angular_common__["a" /* CommonModule */], __WEBPACK_IMPORTED_MODULE_2__angular_forms__["b" /* FormsModule */], __WEBPACK_IMPORTED_MODULE_2__angular_forms__["e" /* ReactiveFormsModule */], __WEBPACK_IMPORTED_MODULE_3__ng_bootstrap_ng_bootstrap__["a" /* NgbModule */], __WEBPACK_IMPORTED_MODULE_4__AppBundle_Resources_public_form_ts_field_types_field_types_extension_module__["a" /* FieldTypesExtensionModule */]],
            declarations: [
                __WEBPACK_IMPORTED_MODULE_5__step5_component__["a" /* Step5Component */]
            ],
            exports: [__WEBPACK_IMPORTED_MODULE_5__step5_component__["a" /* Step5Component */]]
        })
    ], Step5ExtModule);
    return Step5ExtModule;
}());



/***/ }),

/***/ "../../../../../src/BookingBundle/Resources/public/package-booking/add/ts/src/step6.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Step6Component; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__AppBundle_Resources_public_entity_detail_ts_src_entity_detail_preview_component__ = __webpack_require__("../../../../../src/AppBundle/Resources/public/entity-detail/ts/src/entity-detail-preview.component.ts");
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};


var Step6Component = (function (_super) {
    __extends(Step6Component, _super);
    function Step6Component(elementRef, renderer, provider, dataService, helperService) {
        return _super.call(this, elementRef, renderer, provider, dataService, helperService) || this;
    }
    Step6Component = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: '#js_addStep6',
            template: __webpack_require__("../../../../../src/BookingBundle/Resources/public/package-booking/add/ts/templates/step6.component.html")
        }),
        __param(2, Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["y" /* Inject */])('Provider')),
        __param(3, Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["y" /* Inject */])('DataService')),
        __param(4, Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["y" /* Inject */])('HelperService')),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_core__["t" /* ElementRef */],
            __WEBPACK_IMPORTED_MODULE_0__angular_core__["U" /* Renderer */], Object, Object, Object])
    ], Step6Component);
    return Step6Component;
}(__WEBPACK_IMPORTED_MODULE_1__AppBundle_Resources_public_entity_detail_ts_src_entity_detail_preview_component__["a" /* EntityDetailPreviewComponent */]));



/***/ }),

/***/ "../../../../../src/BookingBundle/Resources/public/package-booking/add/ts/src/step6.ext-module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Step6ExtModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("../../../common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__step6_component__ = __webpack_require__("../../../../../src/BookingBundle/Resources/public/package-booking/add/ts/src/step6.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




/**
 * Note: This file is never used. It's only here as example to check injection dependencies
 */
var Step6ExtModule = (function () {
    function Step6ExtModule() {
    }
    Step6ExtModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["H" /* NgModule */])({
            imports: [__WEBPACK_IMPORTED_MODULE_1__angular_common__["a" /* CommonModule */], __WEBPACK_IMPORTED_MODULE_2__angular_forms__["b" /* FormsModule */]],
            declarations: [
                __WEBPACK_IMPORTED_MODULE_3__step6_component__["a" /* Step6Component */]
            ],
            exports: [__WEBPACK_IMPORTED_MODULE_3__step6_component__["a" /* Step6Component */]]
        })
    ], Step6ExtModule);
    return Step6ExtModule;
}());



/***/ }),

/***/ "../../../../../src/BookingBundle/Resources/public/package-booking/add/ts/templates/step1.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"modal-header\">\n    <div class=\"row align-items-center\">\n        <h3 class=\"col-auto mr-auto modal-title\">Form&nbsp;{{getProviderAttr('label')}}<small>&nbsp;({{(_formService && _formService.getObject() && _formService.getObject().id) ? 'edit' : 'add'}})</small></h3>\n        <div class=\"col-auto text-right actions\"><a\n                class=\"-round fa fa-times\"\n                (click)=\"closeAction($event)\"></a></div>\n    </div>\n</div>\n<div class=\"modal-body\">\n    <div class=\"row\">\n        <div class=\"col-12\">    <div *ngIf=\"getSelectedServiceAttr('id')\" class=\"row mb-1\">\n    <div class=\"col-sm-8\">\n        <div class=\"row no-gutters widget gray-bg height104\">\n            <div class=\"col-sm-3\">\n                <div [innerHTML]=\"getSelectedServiceAttr('thumbnail')\"></div>\n            </div>\n            <div class=\"col-sm-9\">\n                <div>\n                    <span [innerHTML]=\"getSelectedServiceAttr('icon')\"></span>\n                    <span class=\"font-bold\" [innerHTML]=\"getSelectedServiceAttr('name')\"></span>\n                </div>\n                <div class=\"height52\" [innerHTML]=\"getSelectedServiceAttr('description')\"></div>\n            </div>\n        </div>\n    </div>\n    <div class=\"col-sm-4\">\n        <div class=\"widget bg-success text-white height104 text-center\">\n            <h2 [innerHTML]=\"getSelectedServiceAttr('totalSell')\"></h2>\n            <div><span [innerHTML]=\"getSelectedServiceAttr('quantity')\" class=\"font-bold\"></span>&nbsp;Pax</div>\n            <div><span [innerHTML]=\"getSelectedServiceAttr('durationDays')\" class=\"font-bold\"></span>&nbsp;Days</div>\n        </div>\n    </div>\n</div>\n\n                        <ul class=\"row mb-3 no-gutters wizard-nav\">\n                                    <li class=\"col-auto wizard-step\"\n                        [class.step-active]=\"0 == _wizardManagerService.getIndex()\">\n                        <span class=\"step-number\">1</span>\n                        <span class=\"step-text\">Client</span>\n                    </li>\n                                    <li class=\"col-auto wizard-step\"\n                        [class.step-active]=\"1 == _wizardManagerService.getIndex()\">\n                        <span class=\"step-number\">2</span>\n                        <span class=\"step-text\">Package</span>\n                    </li>\n                                    <li class=\"col-auto wizard-step\"\n                        [class.step-active]=\"2 == _wizardManagerService.getIndex()\">\n                        <span class=\"step-number\">3</span>\n                        <span class=\"step-text\">Dates</span>\n                    </li>\n                                    <li class=\"col-auto wizard-step\"\n                        [class.step-active]=\"3 == _wizardManagerService.getIndex()\">\n                        <span class=\"step-number\">4</span>\n                        <span class=\"step-text\">Services</span>\n                    </li>\n                                    <li class=\"col-auto wizard-step\"\n                        [class.step-active]=\"4 == _wizardManagerService.getIndex()\">\n                        <span class=\"step-number\">5</span>\n                        <span class=\"step-text\">Detail</span>\n                    </li>\n                                    <li class=\"col-auto wizard-step\"\n                        [class.step-active]=\"5 == _wizardManagerService.getIndex()\">\n                        <span class=\"step-number\">6</span>\n                        <span class=\"step-text\">Preview</span>\n                    </li>\n                            </ul>\n\n            \n                                            <section [hidden]=\"_wizardManagerService.getIndex() != 0\">        \n        \n\n    <form name=\"form\" method=\"post\" (ngSubmit)=\"saveAction($event)\" [formGroup]=\"_formService.getForm()\" class=\"form-horizontal\">\n\n\n                            \n                    \n                                            \n\n                <div class=\"row form-group\" >\n\n                        <label class=\"col-sm-2 control-label\" for=\"form_bookingObj_userObj\">User/Operator</label>\n    \n            <div class=\"col-sm-10\">\n                                                                            <select [(ngModel)]=\"_formService.getObject().userObj\"\n            formControlName = userObj\n            class=\"form-control\"\n            [class.error]=\"_formService.getErrors().userObj && (_formService.getErrors().userObj.length > 0)\"\n            id=\"form_bookingObj_userObj\"\n            name=\"form[bookingObj][userObj]\"\n            >\n        <option value=\"\"></option>\n                    <option *ngFor=\"let choice of _dataService.getFieldChoices('userObj')\"\n                    value=\"{{choice['id']}}\">{{choice['label']}}</option>\n            </select>\n                                <label class=\"error\" *ngFor=\"let error of _formService.getErrors().userObj\">{{error}}</label>\n            </div>\n        </div>\n                                        \n                    \n                                            \n                        <div class=\"row form-group\">\n                                        <label class=\"col-sm-2 control-label required\" for=\"form_bookingObj_clientObj\">Client</label>\n                                <div class=\"col-sm-10\"><div class=\"row\">\n                                    <div class=\"col-sm-8\">\n                                                                    <input [(ngModel)]=\"_formService.getObject().clientObj\"\n           formControlName = clientObj\n           name=\"form[bookingObj][clientObj]\"\n           required=\"required\"           type=\"hidden\">\n    <js_autoComplete [field]=\"'clientObj'\"\n                     [hasSelfReference]=\"_dataService.getFieldChoicesAttr('clientObj', 'hasSelfReference')\"\n                                                                       ></js_autoComplete>\n                    <label class=\"error\" *ngFor=\"let error of _formService.getErrors().clientObj\">{{error}}</label>\n                                    </div>\n                                    <div class=\"col-sm-4\">\n                                                                    <div class=\"checkbox\">                                        <label><input type=\"checkbox\" id=\"form_bookingObj_clientIsPax\" name=\"form[bookingObj][clientIsPax]\" [(ngModel)]=\"_formService.getObject().clientIsPax\" formControlName=\"clientIsPax\" [class.error]=\"_formService.getErrors().clientIsPax &amp;&amp; _formService.getErrors().clientIsPax.length &gt; 0\" value=\"1\" /> Client is pax</label>\n    </div>\n                <label class=\"error\" *ngFor=\"let error of _formService.getErrors().clientIsPax\">{{error}}</label>\n                                    </div>\n                                </div></div>\n                        </div>\n                                    \n                    \n                                                \n        \n\n    \n\n    <input type=\"hidden\" id=\"form__token\" name=\"form[_token]\" value=\"sEeUTtNqE_lLiY0RIyodAt-zpCXEmA5IHyk5lwPbGSo\" /></form>\n    </section>                                <section [hidden]=\"_wizardManagerService.getIndex() != 1\"\n         class=\"js_lazyLoadContainer_1\">\n    <ng-template #js_lazyLoadContainer></ng-template>\n</section>                                <section [hidden]=\"_wizardManagerService.getIndex() != 2\"\n         class=\"js_lazyLoadContainer_2\">\n    <ng-template #js_lazyLoadContainer></ng-template>\n</section>                                <section [hidden]=\"_wizardManagerService.getIndex() != 3\"\n         class=\"js_lazyLoadContainer_3\">\n    <ng-template #js_lazyLoadContainer></ng-template>\n</section>                                <section [hidden]=\"_wizardManagerService.getIndex() != 4\"\n         class=\"js_lazyLoadContainer_4\">\n    <ng-template #js_lazyLoadContainer></ng-template>\n</section>                                <section [hidden]=\"_wizardManagerService.getIndex() != 5\"\n         class=\"js_lazyLoadContainer_5\">\n    <ng-template #js_lazyLoadContainer></ng-template>\n</section>            \n            \n            \n    </div>\n    </div>\n</div>\n<div class=\"modal-footer hide-on-empty\">\n        <div class=\"row justify-content-center\">\n        <div class=\"col-auto\">\n            <button type=\"button\" class=\"btn-light btn\" (click)=\"_wizardManagerService.cancelAction($event)\">Cancel</button>\n            <button type=\"button\" class=\"btn-primary btn\" (click)=\"_wizardManagerService.prevAction($event)\"\n                    *ngIf=\"0 < _wizardManagerService.getIndex()\">Prev</button>\n            <button type=\"button\" class=\"btn-primary btn\" (click)=\"_wizardManagerService.nextAction($event)\"\n                    *ngIf=\"5 > _wizardManagerService.getIndex()\">Next</button>\n                            <button type=\"button\" class=\"btn-primary btn\" (click)=\"_wizardManagerService.finishAction($event)\"\n                        *ngIf=\"5 == _wizardManagerService.getIndex()\">Finish</button>\n                    </div>\n    </div>\n</div>"

/***/ }),

/***/ "../../../../../src/BookingBundle/Resources/public/package-booking/add/ts/templates/step2-service.component.html":
/***/ (function(module, exports) {

module.exports = "\n\n<div class=\"ibox form-control-box -embed-form\" [ngClass]=\"{&#039;error&#039;: _formService.getErrors()[&#039;serviceObj&#039;] &amp;&amp; (_formService.getErrors()[&#039;serviceObj&#039;].length &gt; 0)}\">\n                        <div class=\"ibox-title\" *ngIf=\"!getProviderExtraDataAttr('hasMergeHeader')\">\n                <h5>\n                    <ng-template [ngIf]=\"getProviderAttr('controls')['expander']\"><js_expander\n                        [isExpanded]=\"_isExpanded || null\"\n                        [label]=\"getProviderAttr('label')\"\n                        (onChange)=\"expanderAction($event)\"></js_expander></ng-template>\n                    <ng-template [ngIf]=\"!getProviderAttr('controls')['expander']\">\n                        <span [innerHTML]=\"getProviderAttr('label')\"></span>\n                    </ng-template>\n                </h5>\n                <div *ngIf=\"_isExpanded\"\n                     class=\"txt-align-r hide-on-empty\">    <div class=\"row align-items-center\">\n        <div class=\"col ml-auto text-right actions no-user-select\">\n            <ng-template [ngIf]=\"_actionsService.getActionAttr('search', 'isEnabled')\"><js_search class=\"search\"></js_search></ng-template>\n            <div (click)=\"triggerAction($event)\">\n                <ng-template ngFor let-action [ngForOf]=\"_actionsService.getHeadActions()\">\n                    <a *ngIf=\"_actionsService.getActionAttr(action, 'isEnabled')\"\n                       [ngClass]=\"[_actionsService.getActionAttr(action, 'icon')]\"\n                       class=\"-round fa\"\n                       [attr.data-action]=\"action\"></a>\n                </ng-template>\n            </div>\n        </div>\n    </div>\n</div>\n            </div>\n            \n    <div [hidden]=\"!(_isExpanded)\" class=\"ibox-content hide-on-empty\">    <ng-template [ngIf]=\"(_dataService.getProviderAttr('objects') && _dataService.getProviderAttr('objects')[0])\">\n        <div class=\"table-responsive\">\n                <table class=\"data-table table table-hover dataTables-example\">\n                        <tbody>\n            <ng-template ngFor let-obj [ngForOf]=\"_dataService.getProviderAttr('objects')\" let-objIndex=\"index\">\n            <tr                 [ngClass]=\"getLegendClasses(obj)\">\n                        <td [innerHTML]=\"obj['thumbnail']\"></td>\n    <td>\n        <div [innerHTML]=\"obj['name']\"></div>\n        <div [innerHTML]=\"obj['description']\"></div>\n    </td>\n    <td>\n        <div>\n            <div *ngIf=\"_helperService.castToBoolean(obj['hasFixedDuration'])\"><span [innerHTML]=\"obj['durationDays']\"></span>&nbsp;Days</div>\n            <div>From&nbsp;<span [innerHTML]=\"obj['priceFrom']\"></span></div>\n        </div>\n    </td>\n    <td (click)=\"_formService.setFormFieldValue('serviceObj', $event.target.value)\">\n        <div class=\"radio\"><label><input type=\"radio\"\n                 value=\"{{obj['serviceObj']}}\"\n                 [checked]=\"_formService.getObject().serviceObj == obj['serviceObj']\"></label></div>\n    </td>\n                            </tr>\n            </ng-template>\n            </tbody>\n        </table>\n            </div>\n    </ng-template><p\n        class=\"text-center\"\n        *ngIf=\"!(_dataService.getProviderAttr('objects') && _dataService.getProviderAttr('objects')[0])\">No results.</p>\n</div>\n        <div class=\"ibox-footer\"\n         *ngIf=\"_dataService.countObjects() > 0\"><js_searchPagination></js_searchPagination></div>\n\n</div>\n\n"

/***/ }),

/***/ "../../../../../src/BookingBundle/Resources/public/package-booking/add/ts/templates/step2.component.html":
/***/ (function(module, exports) {

module.exports = "\n\n    <form name=\"form\" method=\"post\" (ngSubmit)=\"saveAction($event)\" [formGroup]=\"_formService.getForm()\" class=\"form-horizontal\">\n\n    \n        \n                    <ng-template #js_step1Service></ng-template>\n            \n\n                                            <input [(ngModel)]=\"_formService.getObject().serviceObj\"\n           formControlName = serviceObj\n           id=\"form_bookingServiceObj_serviceObj\"\n           name=\"form[bookingServiceObj][serviceObj]\"\n           required=\"required\"           type=\"hidden\">\n                    <label class=\"error\" *ngFor=\"let error of _formService.getErrors().serviceObj\">{{error}}</label>\n                \n\n    \n\n    <input type=\"hidden\" id=\"form__token\" name=\"form[_token]\" value=\"sEeUTtNqE_lLiY0RIyodAt-zpCXEmA5IHyk5lwPbGSo\" /></form>\n"

/***/ }),

/***/ "../../../../../src/BookingBundle/Resources/public/package-booking/add/ts/templates/step3.component.html":
/***/ (function(module, exports) {

module.exports = "\n\n    <form name=\"form\" method=\"post\" (ngSubmit)=\"saveAction($event)\" [formGroup]=\"_formService.getForm()\" class=\"form-horizontal\">\n\n            \n                                        <div class=\"row form-group\">\n                                <label class=\"col-sm-2 control-label required\" for=\"form_bookingServiceObj_startDateManual\">Start Date</label>\n                        <div class=\"col-sm-10\">\n                                                \n    <div class=\"input-group js_dataPicker\"\n         [datePicker]=\"'startDateManual'\"\n         #dpk_startDateManual=\"\" [control]=\"dpk_startDateManual\">\n        <input type=\"text\"\n               class=\"form-control\"\n               placeholder=\"yyyy-mm-dd\"\n               [(ngModel)]=\"_formService.getObject().startDateManual\"\n               formControlName = startDateManual\n               name=\"form[bookingServiceObj][startDateManual]\"\n               required=\"required\"               [class.error]=\"_formService.getErrors()['startDateManual'] && (_formService.getErrors()['startDateManual'].length > 0)\"\n               ngbDatepicker #dpk_startDateManual=\"ngbDatepicker\">\n        <div class=\"input-group-append\">\n            <button class=\"btn\" type=\"button\"><a class=\"fa fa-calendar\"></a></button>\n        </div>\n    </div>\n    \n                <label class=\"error\" *ngFor=\"let error of _formService.getErrors().startDateManual\">{{error}}</label>\n                        <ng-template [ngIf]=\"_formService.getObject()['isAutoAvailability']\">\n                            \n<span class=\"\" [popover]=\"'bottom'\" [align]=\"'left'\" [elementTarget]=\"'prev'\">\n    <i class=\"fa fa-info-circle txt-lg text-info js_icon\"></i>\n    <div class=\"popover bs-popover-bottom js_popover\">\n        <div class=\"arrow arrow-left\"></div>\n        <h3 class=\"popover-header\">Available dates</h3>\n        <div class=\"popover-body\">                                    <ng-template [ngIf]=\"getControlDebug('availability')\">\n                                        <div *ngFor=\"let dataRange of getControlDebug('availability');\">\n                                            <strong>From</strong>&nbsp;{{dataRange['startDate']}}&nbsp;<strong>To</strong>&nbsp;{{dataRange['endDate']}}\n                                        </div>\n                                    </ng-template>\n                                </div>\n    </div>\n</span>                        </ng-template>\n                    </div>\n                </div>\n                                                    <ng-template [ngIf]=\"!_formService.getObject()['hasFixedDuration']\">\n        \n\n                <div class=\"row form-group\" >\n\n                        <label class=\"col-sm-2 control-label required\" for=\"form_bookingServiceObj_endDateManual\">End Date</label>\n    \n            <div class=\"col-sm-10\">\n                                        \n    <div class=\"input-group js_dataPicker\"\n         [datePicker]=\"'endDateManual'\"\n         #dpk_endDateManual=\"\" [control]=\"dpk_endDateManual\">\n        <input type=\"text\"\n               class=\"form-control\"\n               placeholder=\"yyyy-mm-dd\"\n               [(ngModel)]=\"_formService.getObject().endDateManual\"\n               formControlName = endDateManual\n               name=\"form[bookingServiceObj][endDateManual]\"\n               required=\"required\"               [class.error]=\"_formService.getErrors()['endDateManual'] && (_formService.getErrors()['endDateManual'].length > 0)\"\n               ngbDatepicker #dpk_endDateManual=\"ngbDatepicker\">\n        <div class=\"input-group-append\">\n            <button class=\"btn\" type=\"button\"><a class=\"fa fa-calendar\"></a></button>\n        </div>\n    </div>\n    \n                <label class=\"error\" *ngFor=\"let error of _formService.getErrors().endDateManual\">{{error}}</label>\n            </div>\n        </div>\n        </ng-template>\n                                                <div class=\"row form-group\">\n                                <label class=\"col-sm-2 control-label\" for=\"form_bookingServiceObj_quantityManual\">Quantity</label>\n                        <div class=\"col-sm-10\">\n                                                    <input type=\"text\" id=\"form_bookingServiceObj_quantityManual\" name=\"form[bookingServiceObj][quantityManual]\" [(ngModel)]=\"_formService.getObject().quantityManual\" formControlName=\"quantityManual\" [class.error]=\"_formService.getErrors().quantityManual &amp;&amp; _formService.getErrors().quantityManual.length &gt; 0\" class=\"form-control\" />\n                <label class=\"error\" *ngFor=\"let error of _formService.getErrors().quantityManual\">{{error}}</label>\n                        <ng-template [ngIf]=\"_formService.getObject()['isAutoAllot']\n                                             && getControlDebug('allotDebug')['detail']\n                                             && (getControlDebug('allotDebug')['status'] != 'YES')\">\n                            \n<span class=\"\" [popover]=\"'bottom'\" [align]=\"'left'\" [elementTarget]=\"'prev'\">\n    <i class=\"fa fa-info-circle txt-lg text-info js_icon\"></i>\n    <div class=\"popover bs-popover-bottom js_popover\">\n        <div class=\"arrow arrow-left\"></div>\n        <h3 class=\"popover-header\">Missing allot</h3>\n        <div class=\"popover-body\">                                        <div *ngFor=\"let debugDetail of getControlDebug('allotDebug')['detail'];\">\n                                            <ng-template [ngIf]=\"debugDetail['status'] != 'YES'\">\n                                                <span class=\"status -{{ _statusMap[debugDetail['status']] || 'danger' }}\"></span><span\n                                                >&nbsp;{{debugDetail['date']}}</span><span\n                                                >&nbsp;({{debugDetail['free'] - _formService.getObject()['quantityManual']}})</span>\n                                            </ng-template>\n                                        </div>\n                                </div>\n    </div>\n</span>                        </ng-template>\n                    </div>\n                </div>\n                                                <div class=\"row form-group\">\n                                <label class=\"col-sm-2 control-label required\" for=\"form_bookingServiceObj_confirmationStatus\">Confirmation</label>\n                        <div class=\"col-sm-10\"\n                         [hidden]=\"!_formService.getObject()['isEnabledAllot'] || !_formService.getObject()['isAutoAllot']\">\n                                                <p id=\"form_bookingServiceObj_confirmationStatus\"\n               class=\"form-control-static\"\n               [innerHTML]=\"_formService.getViewObject().confirmationStatus\"></p>\n                        <label class=\"error\" *ngFor=\"let error of _formService.getErrors().confirmationStatus\">{{error}}</label>\n                    </div>\n                    <div class=\"col-sm-10\"\n                         [hidden]=\"_formService.getObject()['isEnabledAllot'] && _formService.getObject()['isAutoAllot']\">\n                                                                                <div class=\"html-select\"\n         [htmlSelect]=\"'confirmationStatusManual'\"\n                               >\n        <div class=\"input-group-control\"\n             [class.error]=\"_formService.getErrors()['confirmationStatusManual'] && (_formService.getErrors()['confirmationStatusManual'].length > 0)\">\n            <span class=\"js_label form-control\"></span>\n            <a class=\"pull-right\"><i class=\"fa fa-angle-down\"></i></a>\n        </div>\n        <div class=\"choices js_choices\">\n            <ul class=\"form-control-box\">                    <li data-value=\"NO\"><span class=\"status -danger\"></span></li>\n                    <li data-value=\"PARTIAL\"><span class=\"status -warning\"></span></li>\n                    <li data-value=\"YES\"><span class=\"status -primary\"></span></li>\n            </ul>\n        </div>\n    </div>\n    <input [(ngModel)]=\"_formService.getObject().confirmationStatusManual\"\n           formControlName = confirmationStatusManual\n           name=\"form[bookingServiceObj][confirmationStatusManual]\"\n           required=\"required\"           type=\"hidden\">\n                                <label class=\"error\" *ngFor=\"let error of _formService.getErrors().confirmationStatusManual\">{{error}}</label>\n                    </div>\n                </div>\n                                                                    <div class=\"row form-group\"\n                     *ngIf=\"_formService.getObject()['isEnabledAvailability'] ||\n                            _formService.getObject()['isEnabledAllot'] ||\n                            _formService.getObject()['isEnabledPrice']\">\n                    <div class=\"col-sm-3\">\n                                <button                                     class=\"btn\"\n                                    (click)=\"debugAction($event)\"\n                                        id=\"form_bookingServiceObj_debug\"\n            name=\"form[bookingServiceObj][debug]\"\n            type=\"button\">Debug</button>\n                        </div>\n                    <div class=\"col-sm-3 chkStatus\" *ngIf=\"_formService.getObject()['isEnabledAvailability']\">\n                                                    <div class=\"checkbox\">                                        <label><input type=\"checkbox\" id=\"form_bookingServiceObj_isAutoAvailability\" name=\"form[bookingServiceObj][isAutoAvailability]\" [(ngModel)]=\"_formService.getObject().isAutoAvailability\" formControlName=\"isAutoAvailability\" [class.error]=\"_formService.getErrors().isAutoAvailability &amp;&amp; _formService.getErrors().isAutoAvailability.length &gt; 0\" value=\"1\" /> Is auto availability</label>\n    </div>\n                <label class=\"error\" *ngFor=\"let error of _formService.getErrors().isAutoAvailability\">{{error}}</label>\n                        &nbsp;<span\n                            *ngIf=\"_formService.getObject()['isAutoAvailability']\"\n                            class=\"status -{{ _statusMap[getControlDebug('availabilityDebug')['status']] || 'danger' }}\"></span>\n                    </div>\n                    <div class=\"col-sm-3 chkStatus\" *ngIf=\"_formService.getObject()['isEnabledAllot']\">\n                                                    <div class=\"checkbox\">                                        <label><input type=\"checkbox\" id=\"form_bookingServiceObj_isAutoAllot\" name=\"form[bookingServiceObj][isAutoAllot]\" [(ngModel)]=\"_formService.getObject().isAutoAllot\" formControlName=\"isAutoAllot\" [class.error]=\"_formService.getErrors().isAutoAllot &amp;&amp; _formService.getErrors().isAutoAllot.length &gt; 0\" value=\"1\" /> Is auto allot</label>\n    </div>\n                <label class=\"error\" *ngFor=\"let error of _formService.getErrors().isAutoAllot\">{{error}}</label>\n                        &nbsp;<span\n                            *ngIf=\"_formService.getObject()['isAutoAllot']\"\n                            class=\"status -{{ _statusMap[getControlDebug('allotDebug')['status']] || 'danger' }}\"></span>\n                    </div>\n                    <div class=\"col-sm-3 chkStatus\" *ngIf=\"_formService.getObject()['isEnabledPrice']\">\n                                                    <div class=\"checkbox\">                                        <label><input type=\"checkbox\" id=\"form_bookingServiceObj_isAutoPrice\" name=\"form[bookingServiceObj][isAutoPrice]\" [(ngModel)]=\"_formService.getObject().isAutoPrice\" formControlName=\"isAutoPrice\" [class.error]=\"_formService.getErrors().isAutoPrice &amp;&amp; _formService.getErrors().isAutoPrice.length &gt; 0\" value=\"1\" /> Is auto price</label>\n    </div>\n                <label class=\"error\" *ngFor=\"let error of _formService.getErrors().isAutoPrice\">{{error}}</label>\n                        &nbsp;<span\n                            *ngIf=\"_formService.getObject()['isAutoPrice']\"\n                            class=\"status -{{ _statusMap[getControlDebug('priceDebug')['status']] || 'danger' }}\"></span>\n                    </div>\n                </div>\n                <div class=\"row form-group\">\n                    <div class=\"col-sm-12\">\n                                <button                                     class=\"btn btn-primary\"\n                                    (click)=\"changeAction($event)\"\n                                        id=\"form_bookingServiceObj_change\"\n            name=\"form[bookingServiceObj][change]\"\n            type=\"button\"><i class=\"fa fa-check\"></i>&nbsp;Change</button>\n                        </div>\n                </div>\n                                                            \n        PAX HERE TO DETERMINE AGES, SO YOU CAN DETERMINE PRICE\n\n    \n\n    \n\n    <input type=\"hidden\" id=\"form__token\" name=\"form[_token]\" value=\"sEeUTtNqE_lLiY0RIyodAt-zpCXEmA5IHyk5lwPbGSo\" /></form>\n"

/***/ }),

/***/ "../../../../../src/BookingBundle/Resources/public/package-booking/add/ts/templates/step4.component.html":
/***/ (function(module, exports) {

module.exports = "\n\n<div class=\"ibox form-horizontal form-control-box -embed-form\" >\n                \n    <div [hidden]=\"!(_isExpanded)\" class=\"ibox-content hide-on-empty\">    <ng-template [ngIf]=\"(_dataService.getProviderAttr('objects') && _dataService.getProviderAttr('objects')[0])\">\n        <div class=\"table-responsive\">\n        <form>        <table class=\"data-table table table-hover dataTables-example\">\n                        <tbody>\n            <ng-template ngFor let-obj [ngForOf]=\"_dataService.getProviderAttr('objects')\" let-objIndex=\"index\">\n            <tr                 [ngClass]=\"getLegendClasses(obj)\">\n                    <td class=\"container-fluid\">\n        <div class=\"row form-group\">\n            <div class=\"col-12\">\n                <div class=\"badge badge-primary -badge-md pull-right\">\n                    <ng-template [ngIf]=\"obj['isOptional']\">\n                        <label><input type=\"checkbox\"\n                               [name]=\"'form[isOptional][' + obj['packageServiceServiceObj'] + ']'\"\n                               value=\"1\"\n                               [(ngModel)]=\"obj['hasService']\"/><span class=\"txt-normal\">&nbsp;Include</span></label>\n                    </ng-template>\n                    <ng-template [ngIf]=\"!obj['isOptional']\">\n                        <i class=\"fa fa-check\"></i><span class=\"txt-normal\">&nbsp;Included</span>\n                    </ng-template>\n                </div>\n            </div>\n        </div>\n        <div class=\"row form-group\">\n            <div class=\"col col-sm-3\" [innerHTML]=\"obj['thumbnail']\"></div>\n            <div class=\"col col-sm-9\">\n                <span [innerHTML]=\"obj['icon']\"></span>\n                <span class=\"font-bold\" [innerHTML]=\"obj['name']\"></span>\n                <div class=\"height52\" [innerHTML]=\"obj['description']\"></div>\n            </div>\n        </div>\n        <div class=\"row form-group\">\n            <div class=\"col col-sm-3\">\n                <strong>From</strong>\n                <div>\n                    <div class=\"dsp-inline-block\" [innerHTML]=\"obj['startDate']\"></div>\n                    <ng-template [ngIf]=\"obj['isAutoAvailability']\n                                         && obj['isEnabledAvailability']\">\n                        \n<span class=\"dsp-inline-block valign-top\" [popover]=\"'bottom'\" [align]=\"'left'\" [elementTarget]=\"'prev'\">\n    <i class=\"fa fa-info-circle txt-lg text-info js_icon\"></i>\n    <div class=\"popover bs-popover-bottom js_popover\">\n        <div class=\"arrow arrow-left\"></div>\n        <h3 class=\"popover-header\">Available dates</h3>\n        <div class=\"popover-body\">                                <ng-template [ngIf]=\"getControlDebug(objIndex, 'availability')\">\n                                    <div *ngFor=\"let dataRange of getControlDebug(objIndex, 'availability');\">\n                                        <strong>From</strong>&nbsp;{{dataRange['startDate']}}&nbsp;<strong>To</strong>&nbsp;{{dataRange['endDate']}}\n                                    </div>\n                                </ng-template>\n                            </div>\n    </div>\n</span>                    </ng-template>\n                </div>\n            </div>\n            <div class=\"col col-sm-3\">\n                <strong>To</strong><div [innerHTML]=\"obj['endDate']\"></div>\n            </div>\n            <div class=\"col-sm-3 txt-align-r\">\n                <strong>Quantity</strong>\n                <div>\n                    <div class=\"dsp-inline-block\">\n                        <span *ngIf=\"obj['quantityType'] != 'FREE'\">{{obj['quantity']}}</span>\n                        <input type=\"number\"\n                               class=\"form-control\"\n                               *ngIf=\"obj['quantityType']== 'FREE'\"\n                               [name]=\"'form[quantity][' + obj['packageServiceServiceObj'] + ']'\"\n                               [(ngModel)]=\"obj['quantity']\">\n                    </div>\n                    <ng-template [ngIf]=\"obj['isAutoAllot']\n                                         && getControlDebug(objIndex, 'allotDebug')['status']\n                                         && (getControlDebug(objIndex, 'allotDebug')['status'] != 'YES')\">\n                        \n<span class=\"dsp-inline-block valign-top\" [popover]=\"'bottom'\" [align]=\"'middle'\" [elementTarget]=\"'prev'\">\n    <i class=\"fa fa-info-circle txt-lg text-info js_icon\"></i>\n    <div class=\"popover bs-popover-bottom js_popover\">\n        <div class=\"arrow arrow-middle\"></div>\n        <h3 class=\"popover-header\">Missing allot</h3>\n        <div class=\"popover-body\">                                <div *ngFor=\"let debugDetail of getControlDebug(objIndex, 'allotDebug')['detail'];\">\n                                    <ng-template [ngIf]=\"debugDetail['status'] != 'YES'\">\n                                        <span class=\"status -{{ _statusMap[debugDetail['status']] || 'danger' }}\"></span><span\n                                        >&nbsp;{{debugDetail['date']}}</span><span\n                                        >&nbsp;({{debugDetail['free'] - obj['quantity']}})</span>\n                                    </ng-template>\n                                </div>\n                            </div>\n    </div>\n</span>                    </ng-template>\n                </div>\n            </div>\n            <div class=\"col col-sm-3 txt-align-r\">\n                <strong>Total</strong><div [innerHTML]=\"obj['totalSell']\"></div>\n            </div>\n        </div>\n        <div class=\"row form-group\" *ngIf=\"obj['isEnabledAvailability'] || obj['isEnabledAllot'] || obj['isEnabledPrice']\">\n            <div class=\"col col-sm-3\">\n                <button class=\"btn\"\n                        type=\"button\"\n                        (click)=\"debugAction(objIndex, $event)\">Debug</button>\n            </div>\n            <div class=\"col col-sm-3 chkStatus\" *ngIf=\"obj['isEnabledAvailability']\">\n                <div class=\"checkbox\"><label><input type=\"checkbox\"\n                                                    [name]=\"'form[isAutoAvailability][' + obj['packageServiceServiceObj'] + ']'\"\n                                                    value=\"1\"\n                                                    [(ngModel)]=\"obj['isAutoAvailability']\">&nbsp;Is auto availability</label></div>\n                &nbsp;<span\n                            *ngIf=\"obj['isAutoAvailability']\"\n                            class=\"status -{{ _statusMap[getControlDebug(objIndex, 'availabilityDebug')['status']] || 'danger' }}\"></span>\n            </div>\n            <div class=\"col col-sm-3 chkStatus\" *ngIf=\"obj['isEnabledAllot']\">\n                <div class=\"checkbox\"><label><input type=\"checkbox\"\n                                                    [name]=\"'form[isAutoAllot][' + obj['packageServiceServiceObj'] + ']'\"\n                                                    value=\"1\"\n                                                    [(ngModel)]=\"obj['isAutoAllot']\">&nbsp;Is auto allot</label></div>\n                &nbsp;<span\n                            *ngIf=\"obj['isAutoAllot']\"\n                            class=\"status -{{ _statusMap[getControlDebug(objIndex, 'allotDebug')['status']] || 'danger' }}\"></span>\n            </div>\n            <div class=\"col col-sm-3 chkStatus\" *ngIf=\"obj['isEnabledPrice']\">\n                <div class=\"checkbox\"><label><input type=\"checkbox\"\n                                                    [name]=\"'form[isAutoPrice][' + obj['packageServiceServiceObj'] + ']'\"\n                                                    value=\"1\"\n                                                    [(ngModel)]=\"obj['isAutoPrice']\">&nbsp;Is auto price</label></div>\n                &nbsp;<span\n                            *ngIf=\"obj['isAutoPrice']\"\n                            class=\"status -{{ _statusMap[getControlDebug(objIndex, 'priceDebug')['status']] || 'danger' }}\"></span>\n            </div>\n        </div>\n    </td>\n                            </tr>\n            </ng-template>\n            </tbody>\n        </table>\n        </form>    </div>\n    </ng-template><p\n        class=\"text-center\"\n        *ngIf=\"!(_dataService.getProviderAttr('objects') && _dataService.getProviderAttr('objects')[0])\">No results.</p>\n</div>\n    \n</div>\n\n    <div class=\"row m-t-md\">\n        <div class=\"col-sm-10 col-sm-offset-2\">\n            <button class=\"btn-primary btn\"\n                    type=\"button\"\n                    (click)=\"changeAction($event)\"><i class=\"fa fa-check\"></i>&nbsp;Change</button>\n        </div>\n    </div>\n"

/***/ }),

/***/ "../../../../../src/BookingBundle/Resources/public/package-booking/add/ts/templates/step5.component.html":
/***/ (function(module, exports) {

module.exports = "\n\n    <form name=\"form\" method=\"post\" (ngSubmit)=\"saveAction($event)\" [formGroup]=\"_formService.getForm()\" class=\"form-horizontal\">\n\n        \n                                        \n\n                <div class=\"row form-group\" *ngIf=\"_formService.getObject().icon\">\n\n                        <label class=\"col-sm-2 control-label\" for=\"form_bookingServiceObj_icon\">Icon</label>\n    \n            <div class=\"col-sm-10\">\n                                        <p id=\"form_bookingServiceObj_icon\"\n               class=\"form-control-static\"\n               [innerHTML]=\"_formService.getViewObject().icon\"></p>\n                        <label class=\"error\" *ngFor=\"let error of _formService.getErrors().icon\">{{error}}</label>\n            </div>\n        </div>\n                                                    \n\n                <div class=\"row form-group\" *ngIf=\"_formService.getObject().name\">\n\n                        <label class=\"col-sm-2 control-label\" for=\"form_bookingServiceObj_name\">Name</label>\n    \n            <div class=\"col-sm-10\">\n                                        <p id=\"form_bookingServiceObj_name\"\n               class=\"form-control-static\"\n               [innerHTML]=\"_formService.getViewObject().name\"></p>\n                        <label class=\"error\" *ngFor=\"let error of _formService.getErrors().name\">{{error}}</label>\n            </div>\n        </div>\n                                                    \n\n                <div class=\"row form-group\" >\n\n                        <label class=\"col-sm-2 control-label required\" for=\"form_bookingServiceObj_description\">Description</label>\n    \n            <div class=\"col-sm-10\">\n                                            <input type=\"text\" id=\"form_bookingServiceObj_description\" name=\"form[bookingServiceObj][description]\" required=\"required\" maxlength=\"256\" [(ngModel)]=\"_formService.getObject().description\" formControlName=\"description\" [class.error]=\"_formService.getErrors().description &amp;&amp; _formService.getErrors().description.length &gt; 0\" class=\"form-control\" />\n                <label class=\"error\" *ngFor=\"let error of _formService.getErrors().description\">{{error}}</label>\n            </div>\n        </div>\n                                                    \n\n                <div class=\"row form-group\" >\n\n                        <label class=\"col-sm-2 control-label\" for=\"form_bookingServiceObj_supplierObj\">Supplier</label>\n    \n            <div class=\"col-sm-10\">\n                                            <input [(ngModel)]=\"_formService.getObject().supplierObj\"\n           formControlName = supplierObj\n           name=\"form[bookingServiceObj][supplierObj]\"\n                      type=\"hidden\">\n    <js_autoComplete [field]=\"'supplierObj'\"\n                     [hasSelfReference]=\"_dataService.getFieldChoicesAttr('supplierObj', 'hasSelfReference')\"\n                                                                       ></js_autoComplete>\n                    <label class=\"error\" *ngFor=\"let error of _formService.getErrors().supplierObj\">{{error}}</label>\n            </div>\n        </div>\n                                                    \n\n                <div class=\"row form-group\" >\n\n                        <label class=\"col-sm-2 control-label\" for=\"form_bookingServiceObj_reference\">Reference</label>\n    \n            <div class=\"col-sm-10\">\n                                            <input type=\"text\" id=\"form_bookingServiceObj_reference\" name=\"form[bookingServiceObj][reference]\" maxlength=\"32\" [(ngModel)]=\"_formService.getObject().reference\" formControlName=\"reference\" [class.error]=\"_formService.getErrors().reference &amp;&amp; _formService.getErrors().reference.length &gt; 0\" class=\"form-control\" />\n                <label class=\"error\" *ngFor=\"let error of _formService.getErrors().reference\">{{error}}</label>\n            </div>\n        </div>\n                                                    <ng-template [ngIf]=\"_formService.getObject()['type'] == 'TRAVEL'\">\n                    \n\n                <div class=\"row form-group\" >\n\n                        <label class=\"col-sm-2 control-label\" for=\"form_bookingServiceObj_placeObj\">From</label>\n    \n            <div class=\"col-sm-10\">\n                                            <input [(ngModel)]=\"_formService.getObject().placeObj\"\n           formControlName = placeObj\n           name=\"form[bookingServiceObj][placeObj]\"\n                      type=\"hidden\">\n    <js_autoComplete [field]=\"'placeObj'\"\n                     [hasSelfReference]=\"_dataService.getFieldChoicesAttr('placeObj', 'hasSelfReference')\"\n                                                                       ></js_autoComplete>\n                    <label class=\"error\" *ngFor=\"let error of _formService.getErrors().placeObj\">{{error}}</label>\n            </div>\n        </div>\n                        \n\n                <div class=\"row form-group\" >\n\n                        <label class=\"col-sm-2 control-label\" for=\"form_bookingServiceObj_placeToObj\">To</label>\n    \n            <div class=\"col-sm-10\">\n                                            <input [(ngModel)]=\"_formService.getObject().placeToObj\"\n           formControlName = placeToObj\n           name=\"form[bookingServiceObj][placeToObj]\"\n                      type=\"hidden\">\n    <js_autoComplete [field]=\"'placeToObj'\"\n                     [hasSelfReference]=\"_dataService.getFieldChoicesAttr('placeToObj', 'hasSelfReference')\"\n                                                                       ></js_autoComplete>\n                    <label class=\"error\" *ngFor=\"let error of _formService.getErrors().placeToObj\">{{error}}</label>\n            </div>\n        </div>\n                    </ng-template>\n                                            \n\n    \n\n    <input type=\"hidden\" id=\"form__token\" name=\"form[_token]\" value=\"sEeUTtNqE_lLiY0RIyodAt-zpCXEmA5IHyk5lwPbGSo\" /></form>\n"

/***/ }),

/***/ "../../../../../src/BookingBundle/Resources/public/package-booking/add/ts/templates/step6.component.html":
/***/ (function(module, exports) {

module.exports = "<ng-template [ngIf]=\"_object && _object['id']\">\n    <div class=\"container-fluid py-3\"><div class=\"row\">\n        <div class=\"col col-md-12\">\n            <div class=\"row\">\n                <h2 class=\"col-12 valign-div-container\" *ngIf=\"!_object['_isSessionStorage']\"><span [innerHTML]=\"_object['code'] || _object['id']\"></span><span *ngIf=\"_object['name']\">&nbsp;&nbsp;@&nbsp;&nbsp;{{ _object['name'] }}</span></h2>\n            </div>\n            <div class=\"row\">\n                <ng-template ngFor let-field [ngForOf]=\"_fields['view']\">\n                    <div class=\"col col-md-6\"\n                         *ngIf=\"!_helperService.inArray(field, ['id', 'code', 'name', 'isEnabled', 'insertTime', 'insertUser']) && _object[field]\">\n                        <p *ngIf=\"_helperService.inArray(_fields['metadata'][field]['type'], ['number', 'percentage', 'monetary', 'icon'])\"><strong>{{ _fields['metadata'][field]['label'] }}</strong>:&nbsp;<span [innerHTML]=\"_object[field]\"></span></p>\n                        <p *ngIf=\"_helperService.inArray(_fields['metadata'][field]['type'], ['boolean', 'status'])\"><span [innerHTML]=\"_object[field]\"></span>&nbsp;<strong>{{ _fields['metadata'][field]['label'] }}</strong></p>\n                        <p *ngIf=\"_helperService.inArray(_fields['metadata'][field]['type'], ['avatar', 'img'])\"><span [innerHTML]=\"_object[field]\"></span></p>\n                        <p *ngIf=\"!_helperService.inArray(_fields['metadata'][field]['type'], ['number', 'percentage', 'monetary', 'status', 'icon', 'boolean', 'avatar', 'img'])\"><strong>{{ _fields['metadata'][field]['label'] }}</strong><br/><span [innerHTML]=\"_object[field]\"></span></p>\n                    </div>\n                </ng-template>\n            </div>\n        </div>\n            </div></div>\n</ng-template>\n    <div class=\"table-responsive\" *ngFor=\"let dependency of _dependenciesArr\">\n        <h5 class=\"m-t-md\" [innerHTML]=\"_dependencies[dependency].label\"></h5>\n        <table class=\"data-table table table-striped table-hover dataTables-example table-bordered\">\n            <thead>\n            <tr>\n                <th *ngFor=\"let field of _dependencies[dependency].fields['view']\">{{ _dependencies[dependency].fields.metadata[field].label }}</th>\n            </tr>\n            </thead>\n            <tbody>\n            <ng-template ngFor let-obj [ngForOf]=\"_dependencies[dependency].objects\" let-index=\"index\">\n                <tr>\n                    <td *ngFor=\"let field of _dependencies[dependency].fields['view']\"\n                        [ngClass]=\"_helperService.getColAlign(_dependencies[dependency].fields['metadata'][field]['type'])\"\n                        [innerHTML]=\"obj[field]\"></td>\n                </tr>\n            </ng-template>\n            </tbody>\n        </table>\n    </div>\n"

/***/ }),

/***/ "../../../../../src/BookingBundle/Resources/public/package-booking/index/ts/$$_lazy_route_resource lazy recursive":
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "../../../../../src/BookingBundle/Resources/public/package-booking/index/ts/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "../../../../../src/BookingBundle/Resources/public/package-booking/index/ts/src/edit.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EditComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__AppBundle_Resources_public_form_ts_form_service__ = __webpack_require__("../../../../../src/AppBundle/Resources/public/form/ts/form.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__AppBundle_Resources_public_form_ts_form_popup_extension_component__ = __webpack_require__("../../../../../src/AppBundle/Resources/public/form/ts/form-popup.extension-component.ts");
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};



var EditComponent = (function (_super) {
    __extends(EditComponent, _super);
    function EditComponent(elementRef, renderer, provider, formService, dataService) {
        var _this = _super.call(this) || this;
        _super.prototype.initFormPopupExtensionComponent.call(_this, elementRef, renderer, provider, formService, dataService);
        return _this;
    }
    EditComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: '#js_edit',
            template: __webpack_require__("../../../../../src/BookingBundle/Resources/public/package-booking/index/ts/templates/edit.component.html")
        }),
        __param(2, Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["y" /* Inject */])('Provider')),
        __param(4, Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["y" /* Inject */])('DataService')),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_core__["t" /* ElementRef */],
            __WEBPACK_IMPORTED_MODULE_0__angular_core__["U" /* Renderer */], Object, __WEBPACK_IMPORTED_MODULE_1__AppBundle_Resources_public_form_ts_form_service__["a" /* FormService */], Object])
    ], EditComponent);
    return EditComponent;
}(__WEBPACK_IMPORTED_MODULE_2__AppBundle_Resources_public_form_ts_form_popup_extension_component__["a" /* FormPopupExtensionComponent */]));



/***/ }),

/***/ "../../../../../src/BookingBundle/Resources/public/package-booking/index/ts/src/edit.ext-module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EditExtModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("../../../common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__AppBundle_Resources_public_form_ts_field_types_field_types_extension_module__ = __webpack_require__("../../../../../src/AppBundle/Resources/public/form/ts/field-types/field-types.extension-module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__edit_component__ = __webpack_require__("../../../../../src/BookingBundle/Resources/public/package-booking/index/ts/src/edit.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





var EditExtModule = (function () {
    function EditExtModule() {
    }
    EditExtModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["H" /* NgModule */])({
            imports: [__WEBPACK_IMPORTED_MODULE_1__angular_common__["a" /* CommonModule */], __WEBPACK_IMPORTED_MODULE_2__angular_forms__["b" /* FormsModule */], __WEBPACK_IMPORTED_MODULE_2__angular_forms__["e" /* ReactiveFormsModule */], __WEBPACK_IMPORTED_MODULE_3__AppBundle_Resources_public_form_ts_field_types_field_types_extension_module__["a" /* FieldTypesExtensionModule */]],
            declarations: [
                __WEBPACK_IMPORTED_MODULE_4__edit_component__["a" /* EditComponent */]
            ],
            exports: [__WEBPACK_IMPORTED_MODULE_4__edit_component__["a" /* EditComponent */]]
        })
    ], EditExtModule);
    return EditExtModule;
}());



/***/ }),

/***/ "../../../../../src/BookingBundle/Resources/public/package-booking/index/ts/src/main.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MainComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__AppBundle_Resources_public_ts_actions_actions_service__ = __webpack_require__("../../../../../src/AppBundle/Resources/public/ts/actions/actions.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__AppBundle_Resources_public_data_box_ts_src_data_box_extension_component__ = __webpack_require__("../../../../../src/AppBundle/Resources/public/data-box/ts/src/data-box.extension-component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__AppBundle_Resources_public_modal_ts_modal_service__ = __webpack_require__("../../../../../src/AppBundle/Resources/public/modal/ts/modal.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__AppBundle_Resources_public_tasks_loader_manager_ts_tasks_loader_manager_service__ = __webpack_require__("../../../../../src/AppBundle/Resources/public/tasks-loader-manager/ts/tasks-loader-manager.service.ts");
/* unused harmony reexport PopupTypes */
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};





// Reexports

// Component
var MainComponent = (function (_super) {
    __extends(MainComponent, _super);
    function MainComponent(viewContainerRef, renderer, provider, dataService, tasksLoaderManagerService, helperService, actionsService, modalService, popups, injector) {
        var _this = 
        // Call parent
        _super.call(this) || this;
        _super.prototype.initDataBoxExtensionComponent.call(_this, viewContainerRef, renderer, provider, dataService, tasksLoaderManagerService, helperService, actionsService, modalService, popups, injector);
        return _this;
    }
    MainComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: '.js_dataBox',
            template: __webpack_require__("../../../../../src/BookingBundle/Resources/public/package-booking/index/ts/templates/main.component.html")
        }),
        __param(2, Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["y" /* Inject */])('Provider')),
        __param(3, Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["y" /* Inject */])('DataService')),
        __param(5, Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["y" /* Inject */])('HelperService')),
        __param(8, Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["y" /* Inject */])('Popups')),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_core__["_9" /* ViewContainerRef */],
            __WEBPACK_IMPORTED_MODULE_0__angular_core__["U" /* Renderer */], Object, Object, __WEBPACK_IMPORTED_MODULE_4__AppBundle_Resources_public_tasks_loader_manager_ts_tasks_loader_manager_service__["a" /* TasksLoaderManagerService */], Object, __WEBPACK_IMPORTED_MODULE_1__AppBundle_Resources_public_ts_actions_actions_service__["a" /* ActionsService */],
            __WEBPACK_IMPORTED_MODULE_3__AppBundle_Resources_public_modal_ts_modal_service__["b" /* ModalService */], Object, __WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Injector */]])
    ], MainComponent);
    return MainComponent;
}(__WEBPACK_IMPORTED_MODULE_2__AppBundle_Resources_public_data_box_ts_src_data_box_extension_component__["a" /* DataBoxExtensionComponent */]));



/***/ }),

/***/ "../../../../../src/BookingBundle/Resources/public/package-booking/index/ts/src/main.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MainModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__ = __webpack_require__("../../../platform-browser/esm5/platform-browser.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ng_bootstrap_ng_bootstrap__ = __webpack_require__("../../../../@ng-bootstrap/ng-bootstrap/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__AppBundle_Resources_public_ts_search_search_module__ = __webpack_require__("../../../../../src/AppBundle/Resources/public/ts/search/search.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__AppBundle_Resources_public_ts_expander_expander_module__ = __webpack_require__("../../../../../src/AppBundle/Resources/public/ts/expander/expander.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__AppBundle_Resources_public_legend_ts_src_legend_ext_module__ = __webpack_require__("../../../../../src/AppBundle/Resources/public/legend/ts/src/legend.ext-module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__AppBundle_Resources_public_ts_helper__ = __webpack_require__("../../../../../src/AppBundle/Resources/public/ts/helper.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__AppBundle_Resources_public_ts_post_service__ = __webpack_require__("../../../../../src/AppBundle/Resources/public/ts/post.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__AppBundle_Resources_public_modal_ts_modal_service__ = __webpack_require__("../../../../../src/AppBundle/Resources/public/modal/ts/modal.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__AppBundle_Resources_public_ts_flash_message_service__ = __webpack_require__("../../../../../src/AppBundle/Resources/public/ts/flash-message.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__AppBundle_Resources_public_tasks_loader_manager_ts_tasks_loader_manager_service__ = __webpack_require__("../../../../../src/AppBundle/Resources/public/tasks-loader-manager/ts/tasks-loader-manager.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__AppBundle_Resources_public_ts_dynamic_component_loader_service__ = __webpack_require__("../../../../../src/AppBundle/Resources/public/ts/dynamic-component-loader.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__AppBundle_Resources_public_ts_data_service_data_service__ = __webpack_require__("../../../../../src/AppBundle/Resources/public/ts/data-service/data.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__AppBundle_Resources_public_ts_actions_actions_service__ = __webpack_require__("../../../../../src/AppBundle/Resources/public/ts/actions/actions.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__AppBundle_Resources_public_ts_search_search_pagination_module__ = __webpack_require__("../../../../../src/AppBundle/Resources/public/ts/search/search-pagination.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__AppBundle_Resources_public_form_ts_form_service__ = __webpack_require__("../../../../../src/AppBundle/Resources/public/form/ts/form.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__AppBundle_Resources_public_app_basics_default_ts_src_main_ext_module__ = __webpack_require__("../../../../../src/AppBundle/Resources/public/app-basics/default/ts/src/main.ext-module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__AppBundle_Resources_public_app_basics_default_ts_src_main_component__ = __webpack_require__("../../../../../src/AppBundle/Resources/public/app-basics/default/ts/src/main.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__AppBundle_Resources_public_ts_nav_manager_nav_manager_service__ = __webpack_require__("../../../../../src/AppBundle/Resources/public/ts/nav-manager/nav-manager.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__AppBundle_Resources_public_wizard_ts_src_wizard_manager_service__ = __webpack_require__("../../../../../src/AppBundle/Resources/public/wizard/ts/src/wizard-manager.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__main_component__ = __webpack_require__("../../../../../src/BookingBundle/Resources/public/package-booking/index/ts/src/main.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__add_ts_src_step1_ext_module__ = __webpack_require__("../../../../../src/BookingBundle/Resources/public/package-booking/add/ts/src/step1.ext-module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__edit_ext_module__ = __webpack_require__("../../../../../src/BookingBundle/Resources/public/package-booking/index/ts/src/edit.ext-module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24__EntitiesBundle_Resources_public_client_index_ts_src_edit_ext_module__ = __webpack_require__("../../../../../src/EntitiesBundle/Resources/public/client/index/ts/src/edit.ext-module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_25__EntitiesBundle_Resources_public_supplier_index_ts_src_edit_ext_module__ = __webpack_require__("../../../../../src/EntitiesBundle/Resources/public/supplier/index/ts/src/edit.ext-module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_26__CommonBundle_Resources_public_place_index_ts_src_edit_ext_module__ = __webpack_require__("../../../../../src/CommonBundle/Resources/public/place/index/ts/src/edit.ext-module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_27__CommonBundle_Resources_public_country_index_ts_src_edit_ext_module__ = __webpack_require__("../../../../../src/CommonBundle/Resources/public/country/index/ts/src/edit.ext-module.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


// This module doesn't use "ReactiveFormsModule", but it needs to import this class
// to provide "formBuilder" when inject dependencies in child modules (like form)






















// Auto-complete




var autoCompleteProviders = {
    selectEntityObj: {
        urlConf: (__WEBPACK_IMPORTED_MODULE_7__AppBundle_Resources_public_ts_helper__["a" /* Helper */].getAppVar('route') + 'entities/entity/conf'),
        control: 'none'
    },
    clientObj: {
        urlConf: (__WEBPACK_IMPORTED_MODULE_7__AppBundle_Resources_public_ts_helper__["a" /* Helper */].getAppVar('route') + 'entities/client/conf'),
        control: 'edit',
        popups: {
            module: __WEBPACK_IMPORTED_MODULE_24__EntitiesBundle_Resources_public_client_index_ts_src_edit_ext_module__["a" /* EditExtModule */],
            component: 'EditComponent',
            providers: [
                { provide: 'Provider', useValue: __WEBPACK_IMPORTED_MODULE_7__AppBundle_Resources_public_ts_helper__["a" /* Helper */].getFormProvider({ label: 'Client' }) },
                __WEBPACK_IMPORTED_MODULE_16__AppBundle_Resources_public_form_ts_form_service__["a" /* FormService */],
                // Reset FormServiceProvider to use DataServiceProvider as default values
                { provide: 'FormServiceProvider', useValue: {} }
            ]
        }
    },
    supplierObj: {
        urlConf: (__WEBPACK_IMPORTED_MODULE_7__AppBundle_Resources_public_ts_helper__["a" /* Helper */].getAppVar('route') + 'entities/supplier/conf'),
        control: 'edit',
        popups: {
            module: __WEBPACK_IMPORTED_MODULE_25__EntitiesBundle_Resources_public_supplier_index_ts_src_edit_ext_module__["a" /* EditExtModule */],
            component: 'EditComponent',
            providers: [
                { provide: 'Provider', useValue: __WEBPACK_IMPORTED_MODULE_7__AppBundle_Resources_public_ts_helper__["a" /* Helper */].getFormProvider({ label: 'Supplier' }) },
                __WEBPACK_IMPORTED_MODULE_16__AppBundle_Resources_public_form_ts_form_service__["a" /* FormService */],
                // Reset FormServiceProvider to use DataServiceProvider as default values
                { provide: 'FormServiceProvider', useValue: {} }
            ]
        }
    },
    placeObj: {
        urlConf: (__WEBPACK_IMPORTED_MODULE_7__AppBundle_Resources_public_ts_helper__["a" /* Helper */].getAppVar('route') + 'booking/place/conf'),
        control: 'edit',
        popups: {
            module: __WEBPACK_IMPORTED_MODULE_26__CommonBundle_Resources_public_place_index_ts_src_edit_ext_module__["a" /* EditExtModule */],
            component: 'EditComponent',
            providers: [
                { provide: 'Provider', useValue: __WEBPACK_IMPORTED_MODULE_7__AppBundle_Resources_public_ts_helper__["a" /* Helper */].getFormProvider({ label: 'Place' }) },
                __WEBPACK_IMPORTED_MODULE_16__AppBundle_Resources_public_form_ts_form_service__["a" /* FormService */]
            ]
        }
    },
    placeToObj: {
        urlConf: (__WEBPACK_IMPORTED_MODULE_7__AppBundle_Resources_public_ts_helper__["a" /* Helper */].getAppVar('route') + 'booking/place/conf'),
        control: 'edit',
        popups: {
            module: __WEBPACK_IMPORTED_MODULE_26__CommonBundle_Resources_public_place_index_ts_src_edit_ext_module__["a" /* EditExtModule */],
            component: 'EditComponent',
            providers: [
                { provide: 'Provider', useValue: __WEBPACK_IMPORTED_MODULE_7__AppBundle_Resources_public_ts_helper__["a" /* Helper */].getFormProvider({ label: 'Place' }) },
                __WEBPACK_IMPORTED_MODULE_16__AppBundle_Resources_public_form_ts_form_service__["a" /* FormService */]
            ]
        }
    },
    countryObj: {
        urlConf: (__WEBPACK_IMPORTED_MODULE_7__AppBundle_Resources_public_ts_helper__["a" /* Helper */].getAppVar('route') + 'booking/country/conf'),
        control: 'edit',
        popups: {
            module: __WEBPACK_IMPORTED_MODULE_27__CommonBundle_Resources_public_country_index_ts_src_edit_ext_module__["a" /* EditExtModule */],
            component: 'EditComponent',
            providers: [
                { provide: 'Provider', useValue: __WEBPACK_IMPORTED_MODULE_7__AppBundle_Resources_public_ts_helper__["a" /* Helper */].getFormProvider({ label: 'Country' }) },
                __WEBPACK_IMPORTED_MODULE_16__AppBundle_Resources_public_form_ts_form_service__["a" /* FormService */]
            ]
        }
    }
};
var MainModule = (function () {
    function MainModule() {
    }
    MainModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["H" /* NgModule */])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_forms__["b" /* FormsModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_forms__["e" /* ReactiveFormsModule */],
                __WEBPACK_IMPORTED_MODULE_3__ng_bootstrap_ng_bootstrap__["a" /* NgbModule */].forRoot(),
                __WEBPACK_IMPORTED_MODULE_17__AppBundle_Resources_public_app_basics_default_ts_src_main_ext_module__["a" /* MainExtModule */],
                __WEBPACK_IMPORTED_MODULE_4__AppBundle_Resources_public_ts_search_search_module__["a" /* SearchModule */],
                __WEBPACK_IMPORTED_MODULE_15__AppBundle_Resources_public_ts_search_search_pagination_module__["a" /* SearchPaginationModule */],
                __WEBPACK_IMPORTED_MODULE_5__AppBundle_Resources_public_ts_expander_expander_module__["a" /* ExpanderModule */],
                __WEBPACK_IMPORTED_MODULE_6__AppBundle_Resources_public_legend_ts_src_legend_ext_module__["a" /* LegendExtModule */]
            ],
            declarations: [
                __WEBPACK_IMPORTED_MODULE_21__main_component__["a" /* MainComponent */]
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_8__AppBundle_Resources_public_ts_post_service__["a" /* PostService */],
                __WEBPACK_IMPORTED_MODULE_9__AppBundle_Resources_public_modal_ts_modal_service__["b" /* ModalService */],
                __WEBPACK_IMPORTED_MODULE_10__AppBundle_Resources_public_ts_flash_message_service__["a" /* FlashMessageService */],
                __WEBPACK_IMPORTED_MODULE_11__AppBundle_Resources_public_tasks_loader_manager_ts_tasks_loader_manager_service__["a" /* TasksLoaderManagerService */],
                __WEBPACK_IMPORTED_MODULE_12__AppBundle_Resources_public_ts_dynamic_component_loader_service__["a" /* DynamicComponentLoaderService */],
                { provide: 'DataService', useClass: __WEBPACK_IMPORTED_MODULE_13__AppBundle_Resources_public_ts_data_service_data_service__["a" /* DataService */] },
                __WEBPACK_IMPORTED_MODULE_14__AppBundle_Resources_public_ts_actions_actions_service__["a" /* ActionsService */],
                { provide: 'HelperService', useValue: __WEBPACK_IMPORTED_MODULE_7__AppBundle_Resources_public_ts_helper__["a" /* Helper */] },
                { provide: 'DataServiceProvider', useValue: __WEBPACK_IMPORTED_MODULE_7__AppBundle_Resources_public_ts_helper__["a" /* Helper */].getDataServiceProvider(_app.conf) },
                { provide: 'Provider', useValue: __WEBPACK_IMPORTED_MODULE_7__AppBundle_Resources_public_ts_helper__["a" /* Helper */].getDataBoxProvider(_app.conf) },
                { provide: 'ActionsServiceProvider', useValue: __WEBPACK_IMPORTED_MODULE_7__AppBundle_Resources_public_ts_helper__["a" /* Helper */].getActionsServiceProvider(_app.conf) },
                { provide: 'LegendProvider', useValue: __WEBPACK_IMPORTED_MODULE_7__AppBundle_Resources_public_ts_helper__["a" /* Helper */].getLegendProvider(_app.conf) },
                { provide: 'AutoCompleteProviders', useValue: autoCompleteProviders },
                { provide: 'Popups', useValue: {
                        'add': {
                            module: __WEBPACK_IMPORTED_MODULE_22__add_ts_src_step1_ext_module__["a" /* Step1ExtModule */],
                            component: 'Step1Component',
                            providers: [
                                // Set field for wizard form first step
                                { provide: 'Provider', useValue: __WEBPACK_IMPORTED_MODULE_7__AppBundle_Resources_public_ts_helper__["a" /* Helper */].getFormProvider(_app.conf) },
                                { provide: 'FormServiceProvider', useValue: { fields: ['userObj', 'clientObj', 'clientIsPax'] } },
                                __WEBPACK_IMPORTED_MODULE_16__AppBundle_Resources_public_form_ts_form_service__["a" /* FormService */],
                                __WEBPACK_IMPORTED_MODULE_19__AppBundle_Resources_public_ts_nav_manager_nav_manager_service__["a" /* NavManagerService */],
                                __WEBPACK_IMPORTED_MODULE_20__AppBundle_Resources_public_wizard_ts_src_wizard_manager_service__["a" /* WizardManagerService */]
                            ]
                        },
                        'edit': {
                            module: __WEBPACK_IMPORTED_MODULE_23__edit_ext_module__["a" /* EditExtModule */],
                            component: 'EditComponent',
                            providers: [
                                { provide: 'Provider', useValue: __WEBPACK_IMPORTED_MODULE_7__AppBundle_Resources_public_ts_helper__["a" /* Helper */].getFormProvider(_app.conf) },
                                __WEBPACK_IMPORTED_MODULE_16__AppBundle_Resources_public_form_ts_form_service__["a" /* FormService */]
                            ]
                        }
                    } }
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_18__AppBundle_Resources_public_app_basics_default_ts_src_main_component__["a" /* MainComponent */], __WEBPACK_IMPORTED_MODULE_21__main_component__["a" /* MainComponent */]]
        })
    ], MainModule);
    return MainModule;
}());



/***/ }),

/***/ "../../../../../src/BookingBundle/Resources/public/package-booking/index/ts/src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("../../../platform-browser-dynamic/esm5/platform-browser-dynamic.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_cli_conf_environments_environment__ = __webpack_require__("../../../../../angular_cli_conf/environments/environment.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__main_module__ = __webpack_require__("../../../../../src/BookingBundle/Resources/public/package-booking/index/ts/src/main.module.ts");

 // The browser platform with a compiler
 // Get environment

// Enable production environment
if (__WEBPACK_IMPORTED_MODULE_2__angular_cli_conf_environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_13" /* enableProdMode */])();
}
// Compile and launch the module
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_3__main_module__["a" /* MainModule */])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ "../../../../../src/BookingBundle/Resources/public/package-booking/index/ts/templates/edit.component.html":
/***/ (function(module, exports) {

module.exports = "    \n    <form name=\"form\" method=\"post\" (ngSubmit)=\"saveAction($event)\" [formGroup]=\"_formService.getForm()\" class=\"form-horizontal\">\n<div class=\"modal-header\">\n    <div class=\"row align-items-center\">\n        <h3 class=\"col-auto mr-auto modal-title\">Form&nbsp;{{getProviderAttr('label')}}<small>&nbsp;({{(_formService && _formService.getObject() && _formService.getObject().id) ? 'edit' : 'add'}})</small></h3>\n        <div class=\"col-auto text-right actions\"><a\n                class=\"-round fa fa-times\"\n                (click)=\"closeAction($event)\"></a></div>\n    </div>\n</div>\n<div class=\"modal-body\">\n    <div class=\"row\">\n        <div class=\"col-12\">        \n            \n            \n                            \n\n                <div class=\"row form-group\" *ngIf=\"_formService.getObject().code\">\n\n                        <label class=\"col-sm-2 control-label\" for=\"form_bookingObj_code\">Code</label>\n    \n            <div class=\"col-sm-10\">\n                                        <p id=\"form_bookingObj_code\"\n               class=\"form-control-static\"\n               [innerHTML]=\"_formService.getViewObject().code\"></p>\n                        <label class=\"error\" *ngFor=\"let error of _formService.getErrors().code\">{{error}}</label>\n            </div>\n        </div>\n                        \n            \n                            \n\n                <div class=\"row form-group\" >\n\n                        <label class=\"col-sm-2 control-label\" for=\"form_bookingObj_userObj\">User/Operator</label>\n    \n            <div class=\"col-sm-10\">\n                                                                            <select [(ngModel)]=\"_formService.getObject().userObj\"\n            formControlName = userObj\n            class=\"form-control\"\n            [class.error]=\"_formService.getErrors().userObj && (_formService.getErrors().userObj.length > 0)\"\n            id=\"form_bookingObj_userObj\"\n            name=\"form[bookingObj][userObj]\"\n            >\n        <option value=\"\"></option>\n                    <option *ngFor=\"let choice of _dataService.getFieldChoices('userObj')\"\n                    value=\"{{choice['id']}}\">{{choice['label']}}</option>\n            </select>\n                                <label class=\"error\" *ngFor=\"let error of _formService.getErrors().userObj\">{{error}}</label>\n            </div>\n        </div>\n                        \n            \n            \n                \n                <div class=\"row form-group\">\n                                <label class=\"col-sm-2 control-label required\" for=\"form_bookingObj_clientObj\">Client</label>\n                        <div class=\"col-sm-10\"><div class=\"row\">\n                        <div class=\"col-sm-8\">\n                                                        <input [(ngModel)]=\"_formService.getObject().clientObj\"\n           formControlName = clientObj\n           name=\"form[bookingObj][clientObj]\"\n           required=\"required\"           type=\"hidden\">\n    <js_autoComplete [field]=\"'clientObj'\"\n                     [hasSelfReference]=\"_dataService.getFieldChoicesAttr('clientObj', 'hasSelfReference')\"\n                                                                       ></js_autoComplete>\n                    <label class=\"error\" *ngFor=\"let error of _formService.getErrors().clientObj\">{{error}}</label>\n                        </div>\n                        <div class=\"col-sm-4\">\n                                                        <div class=\"checkbox\">                                        <label><input type=\"checkbox\" id=\"form_bookingObj_clientIsPax\" name=\"form[bookingObj][clientIsPax]\" [(ngModel)]=\"_formService.getObject().clientIsPax\" formControlName=\"clientIsPax\" [class.error]=\"_formService.getErrors().clientIsPax &amp;&amp; _formService.getErrors().clientIsPax.length &gt; 0\" value=\"1\" /> Client is pax</label>\n    </div>\n                <label class=\"error\" *ngFor=\"let error of _formService.getErrors().clientIsPax\">{{error}}</label>\n                        </div>\n                    </div></div>\n                </div>\n                    \n            \n                            \n\n                                            <label class=\"error\" *ngFor=\"let error of _formService.getErrors().bookingPaxObj\">{{error}}</label>\n                        \n            \n                    \n            \n                            \n\n                <div class=\"row form-group\" *ngIf=\"_formService.getObject().startDate\">\n\n                        <label class=\"col-sm-2 control-label required\" for=\"form_bookingObj_startDate\">Start Date</label>\n    \n            <div class=\"col-sm-10\">\n                                        <p id=\"form_bookingObj_startDate\"\n               class=\"form-control-static\"\n               [innerHTML]=\"_formService.getViewObject().startDate\"></p>\n                        <label class=\"error\" *ngFor=\"let error of _formService.getErrors().startDate\">{{error}}</label>\n            </div>\n        </div>\n                        \n            \n                            \n\n                <div class=\"row form-group\" *ngIf=\"_formService.getObject().endDate\">\n\n                        <label class=\"col-sm-2 control-label required\" for=\"form_bookingObj_endDate\">End Date</label>\n    \n            <div class=\"col-sm-10\">\n                                        <p id=\"form_bookingObj_endDate\"\n               class=\"form-control-static\"\n               [innerHTML]=\"_formService.getViewObject().endDate\"></p>\n                        <label class=\"error\" *ngFor=\"let error of _formService.getErrors().endDate\">{{error}}</label>\n            </div>\n        </div>\n                        \n            \n                            \n\n                <div class=\"row form-group\" *ngIf=\"_formService.getObject().invoiceStatus\">\n\n                        <label class=\"col-sm-2 control-label required\" for=\"form_bookingObj_invoiceStatus\">Invoice</label>\n    \n            <div class=\"col-sm-10\">\n                                        <p id=\"form_bookingObj_invoiceStatus\"\n               class=\"form-control-static\"\n               [innerHTML]=\"_formService.getViewObject().invoiceStatus\"></p>\n                        <label class=\"error\" *ngFor=\"let error of _formService.getErrors().invoiceStatus\">{{error}}</label>\n            </div>\n        </div>\n                        \n            \n                            \n\n                <div class=\"row form-group\" *ngIf=\"_formService.getObject().confirmationStatus\">\n\n                        <label class=\"col-sm-2 control-label required\" for=\"form_bookingObj_confirmationStatus\">Confirmation</label>\n    \n            <div class=\"col-sm-10\">\n                                        <p id=\"form_bookingObj_confirmationStatus\"\n               class=\"form-control-static\"\n               [innerHTML]=\"_formService.getViewObject().confirmationStatus\"></p>\n                        <label class=\"error\" *ngFor=\"let error of _formService.getErrors().confirmationStatus\">{{error}}</label>\n            </div>\n        </div>\n                        \n            \n                            \n\n                <div class=\"row form-group\" *ngIf=\"_formService.getObject().totalCost\">\n\n                        <label class=\"col-sm-2 control-label\" for=\"form_bookingObj_totalCost\">Total Cost</label>\n    \n            <div class=\"col-sm-10\">\n                                        <p id=\"form_bookingObj_totalCost\"\n               class=\"form-control-static\"\n               [innerHTML]=\"_formService.getViewObject().totalCost\"></p>\n                        <label class=\"error\" *ngFor=\"let error of _formService.getErrors().totalCost\">{{error}}</label>\n            </div>\n        </div>\n                        \n            \n                            \n\n                <div class=\"row form-group\" *ngIf=\"_formService.getObject().totalSell\">\n\n                        <label class=\"col-sm-2 control-label\" for=\"form_bookingObj_totalSell\">Total Sell</label>\n    \n            <div class=\"col-sm-10\">\n                                        <p id=\"form_bookingObj_totalSell\"\n               class=\"form-control-static\"\n               [innerHTML]=\"_formService.getViewObject().totalSell\"></p>\n                        <label class=\"error\" *ngFor=\"let error of _formService.getErrors().totalSell\">{{error}}</label>\n            </div>\n        </div>\n                        \n            \n                            \n\n                <div class=\"row form-group\" *ngIf=\"_formService.getObject().totalMargin\">\n\n                        <label class=\"col-sm-2 control-label required\" for=\"form_bookingObj_totalMargin\">Margin (net)</label>\n    \n            <div class=\"col-sm-10\">\n                                        <p id=\"form_bookingObj_totalMargin\"\n               class=\"form-control-static\"\n               [innerHTML]=\"_formService.getViewObject().totalMargin\"></p>\n                        <label class=\"error\" *ngFor=\"let error of _formService.getErrors().totalMargin\">{{error}}</label>\n            </div>\n        </div>\n                        \n            \n                            \n\n                <div class=\"row form-group\" *ngIf=\"_formService.getObject().totalMarkup\">\n\n                        <label class=\"col-sm-2 control-label required\" for=\"form_bookingObj_totalMarkup\">Markup (net)</label>\n    \n            <div class=\"col-sm-10\">\n                                        <p id=\"form_bookingObj_totalMarkup\"\n               class=\"form-control-static\"\n               [innerHTML]=\"_formService.getViewObject().totalMarkup\"></p>\n                        <label class=\"error\" *ngFor=\"let error of _formService.getErrors().totalMarkup\">{{error}}</label>\n            </div>\n        </div>\n                        \n            \n                            \n\n                <div class=\"row form-group\" *ngIf=\"_formService.getObject().totalProfit\">\n\n                        <label class=\"col-sm-2 control-label required\" for=\"form_bookingObj_totalProfit\">Profit (net)</label>\n    \n            <div class=\"col-sm-10\">\n                                        <p id=\"form_bookingObj_totalProfit\"\n               class=\"form-control-static\"\n               [innerHTML]=\"_formService.getViewObject().totalProfit\"></p>\n                        <label class=\"error\" *ngFor=\"let error of _formService.getErrors().totalProfit\">{{error}}</label>\n            </div>\n        </div>\n                        \n            \n                            \n\n                <div class=\"row form-group\" *ngIf=\"_formService.getObject().insertTime\">\n\n                        <label class=\"col-sm-2 control-label required\" for=\"form_insertTime\">Insert Time</label>\n    \n            <div class=\"col-sm-10\">\n                                        <p id=\"form_insertTime\"\n               class=\"form-control-static\"\n               [innerHTML]=\"_formService.getViewObject().insertTime\"></p>\n                        <label class=\"error\" *ngFor=\"let error of _formService.getErrors().insertTime\">{{error}}</label>\n            </div>\n        </div>\n                        \n            \n                            \n\n                <div class=\"row form-group\" *ngIf=\"_formService.getObject().insertUser\">\n\n                        <label class=\"col-sm-2 control-label required\" for=\"form_insertUser\">Insert User</label>\n    \n            <div class=\"col-sm-10\">\n                                        <p id=\"form_insertUser\"\n               class=\"form-control-static\"\n               [innerHTML]=\"_formService.getViewObject().insertUser\"></p>\n                        <label class=\"error\" *ngFor=\"let error of _formService.getErrors().insertUser\">{{error}}</label>\n            </div>\n        </div>\n                            </div>\n    </div>\n</div>\n<div class=\"modal-footer hide-on-empty\">\n        \n                    <div class=\"row\">\n            <div class=\"col-auto ml-auto\">\n                                            <button                                     class=\"btn btn-light\"\n                                    (click)=\"cancelAction($event)\"\n                                        id=\"form_cancel\"\n            name=\"form[cancel]\"\n            type=\"button\"><i class=\"fa fa-times\"></i>&nbsp;Cancel</button>\n                                                <button                                     class=\"btn btn-light\"\n                                    (click)=\"resetAction($event)\"\n                                        id=\"form_reset\"\n            name=\"form[reset]\"\n            type=\"button\"><i class=\"fa fa-ban\"></i>&nbsp;Reset</button>\n                                                <button                                     class=\"btn btn-primary\"\n                                    (click)=\"saveAction($event)\"\n                                        id=\"form_save\"\n            name=\"form[save]\"\n            type=\"button\"><i class=\"fa fa-check\"></i>&nbsp;Save</button>\n                                                <button                                     class=\"btn btn-primary\"\n                                    (click)=\"saveAndCloseAction($event)\"\n                                        id=\"form_saveAndClose\"\n            name=\"form[saveAndClose]\"\n            type=\"button\"><i class=\"fa fa-times\"></i>&nbsp;Save and Close</button>\n                                </div>\n        </div>\n    </div>    \n    <input type=\"hidden\" id=\"form__token\" name=\"form[_token]\" value=\"sEeUTtNqE_lLiY0RIyodAt-zpCXEmA5IHyk5lwPbGSo\" /></form>\n"

/***/ }),

/***/ "../../../../../src/BookingBundle/Resources/public/package-booking/index/ts/templates/main.component.html":
/***/ (function(module, exports) {

module.exports = "\n\n<div class=\"ibox\" >\n                        <div class=\"ibox-title\" *ngIf=\"!getProviderExtraDataAttr('hasMergeHeader')\">\n                <h5>\n                    <ng-template [ngIf]=\"getProviderAttr('controls')['expander']\"><js_expander\n                        [isExpanded]=\"_isExpanded || null\"\n                        [label]=\"getProviderAttr('label')\"\n                        (onChange)=\"expanderAction($event)\"></js_expander></ng-template>\n                    <ng-template [ngIf]=\"!getProviderAttr('controls')['expander']\">\n                        <span [innerHTML]=\"getProviderAttr('label')\"></span>\n                    </ng-template>\n                </h5>\n                <div *ngIf=\"_isExpanded\"\n                     class=\"txt-align-r hide-on-empty\">    <div class=\"row align-items-center\">\n        <div class=\"col ml-auto text-right actions no-user-select\">\n            <ng-template [ngIf]=\"_actionsService.getActionAttr('search', 'isEnabled')\"><js_search class=\"search\"></js_search></ng-template>\n            <div (click)=\"triggerAction($event)\">\n                <ng-template ngFor let-action [ngForOf]=\"_actionsService.getHeadActions()\">\n                    <a *ngIf=\"_actionsService.getActionAttr(action, 'isEnabled')\"\n                       [ngClass]=\"[_actionsService.getActionAttr(action, 'icon')]\"\n                       class=\"-round fa\"\n                       [attr.data-action]=\"action\"></a>\n                </ng-template>\n            </div>\n        </div>\n    </div>\n</div>\n            </div>\n            \n    <div [hidden]=\"!(_isExpanded)\" class=\"ibox-content hide-on-empty\">    <ng-template [ngIf]=\"(_dataService.getProviderAttr('objects') && _dataService.getProviderAttr('objects')[0])\">\n        <div class=\"table-responsive\">\n        <form>        <table class=\"data-table table table-hover dataTables-example table-bordered\">\n            <thead>\n            <tr>\n                <th *ngFor=\"let searchField of _dataService.getSearch('fields')\">{{ _dataService.getFields('metadata')[searchField].label }}</th>\n                <th>&nbsp;</th>\n            </tr>\n            </thead>            <tbody>\n            <ng-template ngFor let-obj [ngForOf]=\"_dataService.getProviderAttr('objects')\" let-objIndex=\"index\">\n            <tr (dblclick)=\"editAction($event, objIndex)\"                [ngClass]=\"getLegendClasses(obj)\">\n                                    <td *ngFor=\"let searchField of _dataService.getSearch('fields')\"\n                        [ngClass]=\"getColAlign(searchField)\"\n                        [innerHTML]=\"obj[searchField]\"></td>\n                                <td>\n                    <span *ngIf=\"obj['_isNew']\" class=\"badge badge-info\">New</span>\n                    <span *ngIf=\"obj['_isEdited']\" class=\"badge badge-info\">Edited</span>\n                    <input *ngIf=\"_actionsService.getActionAttr('radioChoice', 'isEnabled')\"\n                           class=\"pull-right action\"\n                           type=\"radio\"\n                           name=\"index[]\"\n                           value=\"{{objIndex}}\"/>\n                    <input *ngIf=\"_actionsService.getActionAttr('checkAll', 'isEnabled')\"\n                           class=\"pull-right action js_checkAll\"\n                           type=\"checkbox\"\n                           name=\"index[]\"\n                           value=\"{{objIndex}}\"\n                           [ngModel]=\"checkAll\"/>\n                    <div class=\"pull-right actions no-user-select text-secondary\" (click)=\"triggerAction($event)\">\n                        <ng-template ngFor let-action [ngForOf]=\"_actionsService.getDetailActions()\">\n                            <a *ngIf=\"_actionsService.getActionAttr(action, 'isEnabled')\"\n                               [ngClass]=\"[_actionsService.getActionAttr(action, 'icon')]\"\n                               class=\"fa\"\n                               [attr.data-action]=\"action\"\n                               [attr.data-value]=\"objIndex\"></a>\n                        </ng-template>\n                    </div>\n                </td>            </tr>\n            </ng-template>\n            </tbody>\n        </table>\n        </form>    </div>\n    </ng-template><p\n        class=\"text-center\"\n        *ngIf=\"!(_dataService.getProviderAttr('objects') && _dataService.getProviderAttr('objects')[0])\">No results.</p>\n</div>\n        <div class=\"ibox-footer\"\n         *ngIf=\"_dataService.countObjects() > 0\"><js_searchPagination></js_searchPagination></div>\n\n</div>\n\n<js_legend></js_legend>"

/***/ }),

/***/ "../../../../../src/CommonBundle/Resources/public/country/index/ts/src/edit.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EditComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__AppBundle_Resources_public_form_ts_form_popup_extension_component__ = __webpack_require__("../../../../../src/AppBundle/Resources/public/form/ts/form-popup.extension-component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__AppBundle_Resources_public_form_ts_form_service__ = __webpack_require__("../../../../../src/AppBundle/Resources/public/form/ts/form.service.ts");
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};



var EditComponent = (function (_super) {
    __extends(EditComponent, _super);
    function EditComponent(elementRef, renderer, provider, formService, dataService) {
        var _this = _super.call(this) || this;
        _super.prototype.initFormPopupExtensionComponent.call(_this, elementRef, renderer, provider, formService, dataService);
        return _this;
    }
    EditComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: '#js_countryFormPopup',
            template: __webpack_require__("../../../../../src/CommonBundle/Resources/public/country/index/ts/templates/edit.component.html")
        }),
        __param(2, Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["y" /* Inject */])('Provider')),
        __param(4, Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["y" /* Inject */])('DataService')),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_core__["t" /* ElementRef */],
            __WEBPACK_IMPORTED_MODULE_0__angular_core__["U" /* Renderer */], Object, __WEBPACK_IMPORTED_MODULE_2__AppBundle_Resources_public_form_ts_form_service__["a" /* FormService */], Object])
    ], EditComponent);
    return EditComponent;
}(__WEBPACK_IMPORTED_MODULE_1__AppBundle_Resources_public_form_ts_form_popup_extension_component__["a" /* FormPopupExtensionComponent */]));



/***/ }),

/***/ "../../../../../src/CommonBundle/Resources/public/country/index/ts/src/edit.ext-module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EditExtModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("../../../common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__AppBundle_Resources_public_form_ts_field_types_field_types_extension_module__ = __webpack_require__("../../../../../src/AppBundle/Resources/public/form/ts/field-types/field-types.extension-module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__edit_component__ = __webpack_require__("../../../../../src/CommonBundle/Resources/public/country/index/ts/src/edit.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





var EditExtModule = (function () {
    function EditExtModule() {
    }
    EditExtModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["H" /* NgModule */])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_common__["a" /* CommonModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_forms__["b" /* FormsModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_forms__["e" /* ReactiveFormsModule */],
                __WEBPACK_IMPORTED_MODULE_3__AppBundle_Resources_public_form_ts_field_types_field_types_extension_module__["a" /* FieldTypesExtensionModule */]
            ],
            declarations: [
                __WEBPACK_IMPORTED_MODULE_4__edit_component__["a" /* EditComponent */]
            ],
            exports: [__WEBPACK_IMPORTED_MODULE_4__edit_component__["a" /* EditComponent */]]
        })
    ], EditExtModule);
    return EditExtModule;
}());



/***/ }),

/***/ "../../../../../src/CommonBundle/Resources/public/country/index/ts/templates/edit.component.html":
/***/ (function(module, exports) {

module.exports = "<!DOCTYPE html>\n<html>\n    <head>\n        <meta charset=\"UTF-8\" />\n        <meta name=\"robots\" content=\"noindex,nofollow\" />\n        <title>    You have requested a non-existent service &quot;common.service.repository&quot;. Did you mean one of these: &quot;sysadmin.service.repository&quot;, &quot;login.service.repository&quot;? (500 Internal Server Error)\n</title>\n        <link href=\"http://weboffice.whs.dev.com/bundles/framework/css/structure.css\" rel=\"stylesheet\" />\n        <link href=\"http://weboffice.whs.dev.com/bundles/framework/css/body.css\" rel=\"stylesheet\" />\n            <link href=\"http://weboffice.whs.dev.com/bundles/framework/css/exception.css\" rel=\"stylesheet\" type=\"text/css\" media=\"all\" />\n    </head>\n    <body>\n        <div id=\"content\">\n            <div class=\"header clear-fix\">\n                <div class=\"header-logo\">\n                    <img src=\"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAALYAAAA+CAMAAACxzRGDAAAAUVBMVEX////Ly8yko6WLioxkYmVXVVkwLjLl5eWxsLJKSEzy8vJxcHLY2Ni+vb89Oz9XVVh+fH+Yl5n///+xsbLY2Nlxb3KkpKWXlph+fX+LiYy+vr/IZP61AAAAAXRSTlMAQObYZgAABRBJREFUeNrVmtuWoyAQRS1FEEQSzQU7//+hYxUiXsKQZLJWM+chsUloN+WhCuguYoKyYqzmvGasKqH4HyRKxndipcgcumH8qViTM7TkUclcwaHmf5XM0eWq4km1KjdqXfMXJHVe1J3hL8lk5fCGv6wmT+o0d87U+XNrk0Y9nfv+7LM6ZJH5ZBL6LAbSxQ3Q5FDr22Skr8PQSy4n7isnsQxSX4r6pobhjCHHeDNOKrO3yGmCvZOjV9jmt8ulTdXFKdbKLNh+kOMvBzuVRa4Y7MUsdEUSWQe7xxCfZmcwjHU83LqzFvSbJQOXQvptbPnEFoyZtUUGwTeKuLuTHyT1kaP0P6cR01OKvv448gtl61dqZfmJezQmU/t+1R2fJLtBwXV6uWGwB9SZPrn0fKO2WAvQN1PUhHjTom3xgXYTkvlSKHs19OhslETq6X3HrXbjt8XbGj9b4Gi+lUAnL6XxQj8Pyk9N4Bt1xUrsLVN/3isYMug8rODMdbgOvoHs8uAb2fcANIAzkKCLYy+AXRpSU8sr1r4P67xhLgPp7vM32zlqt7Bhq2fI1Hwp+VgANxok59SsGV3oqdUL0YVDMRY7Yg8QLbVUU4NZNoOq5hJHuxEM28Sh/IyUZ8D3reR+yc58EGvOy2U0HQL6G9V+kWyEWHmzaMx6t4o9RhOm/riUiYrzqij4Ptqkn7AaCXqc+F47m04ahfde7YIz8RHEBN6BdVwdIGRVdNbKqYu1Hc0x0wBY4wqC8+XUgBGnj81SZsQB+0yAS1x/BlI/6ebHHk0lauQLuPDpu6EwAVJ7T0rl2uXa23jcqNyOZekhqYHRz3JOANrF4wCCmEs1f9D1lUe0n4NAATed80Y5e0Q7CO2TezM/BR6wKdgQzKbCF4uOQC3Bk0fKAzbFlyRWg3gksA/gmm7eOjrpaKX7fHlEW2xLbE6GZsPiCiShVzN7RG2xTz2G+OJtEqzdJ7APxy3MrSsV0VukXbKMp9lhs5BN6dr3CN+sySUaoxGwfRUM3I/gdPYONgVU+PLX4vUWm32AvUySarbONvcpV2RQEPKKjEBHFk01kQDGRblnn8ZuE9g+JUl8OWAPbkFK2K6JxhJVvF47FzYYnAN22ttwxKYCoH36rheEB7KG/HF/YUaa2G5JF+55tpyrl7B1WHM39HuP2N2EXPl1UBu8vbj4OjvD+NoTE4ssF+ScARgaJY1N7+u8bY/Y9BSM5PKwJbvMVab32YP5FB5TtcYVrGoASolVLTzI7kVsYVxRtAb5n2JXq1vCdtd47XtYItynrN0835PasLg0y13aOPbmPI+on2Lr9e5tjSHvgkAvclUjL3Fsdaw03IzgTR62yYClk7QMah4IQ0qSsoYYbOix6zJR1ZGDNMOY3Bb6W5S6jiyovep3t7bUPyoq7OkjYumrfESp8zSBc/OLosVf+nTnnKjsqR16++WDwpI8FxJWRFTlI6NKnqYJaL96TqjAbo9Toi5QiWBDcmfdFV+T8dkvFe5bItgstbM2X6QG2mVun+cazfRwOS0eiaeRRJKgLfc3BQAqfnhJyz8lfR6580SF/FXVu83Nz1xrrnFqqXL6Qxl47DNSm4RFflvN5sABDD8peouqLLKQXVdGbnqf+qIpOxON4ZyYdJEJ6sy4zS2c5eRPTT4Jyp46qDE5/ptAWqJOQ9e6yE82FXBbZCk1/tXVoshVoopE3CB0zmraI3nbqCJ/gW3ZMgtbC5nh/QHlOoOZBxQCRgAAAABJRU5ErkJggg==\" alt=\"Symfony\" />\n                </div>\n\n                <div class=\"search\">\n                    <form method=\"get\" action=\"https://symfony.com/search\" target=\"_blank\">\n                        <div class=\"form-row\">\n                            <label for=\"search-id\">\n                                <img src=\"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAQAAAC1+jfqAAABUElEQVQoz2NgAIJ29iBdD0d7X2cPb+tY2f9MDMjgP2O2hKu7vS8CBlisZUNSMJ3fxRMkXO61wm2ue6I3iB1q8Z8ZriDZFCS03fm/wX+1/xp/TBo8QPxeqf+MUAW+QIFKj/+q/wX/c/3n/i/6Qd/bx943z/Q/K1SBI1D9fKv/AhCn/Wf5L5EHdFGKw39OqAIXoPpOMziX4T9/DFBBnuN/HqhAEtCKCNf/XDA/rZRyAmrpsvrPDVUw3wrkqCiLaewg6TohX1d7X0ffs5r/OaAKfinmgt3t4ulr4+Xg4ANip3j+l/zPArNT4LNOD0pAgWCSOUIBy3+h/+pXbBa5tni0eMx23+/mB1YSYnENroT5Pw/QSOX/mkCo+l/jgo0v2KJA643s8PgAmsMBDCbu/5xALHPB2husxN9uCzsDOgAq5kAoaZVnYMCh5Ky1r88Eh/+iABM8jUk7ClYIAAAAAElFTkSuQmCC\" alt=\"Search on Symfony website\" />\n                            </label>\n\n                            <input name=\"q\" id=\"search-id\" type=\"search\" placeholder=\"Search on Symfony website\" />\n\n                            <button type=\"submit\" class=\"sf-button\">\n                                <span class=\"border-l\">\n                                    <span class=\"border-r\">\n                                        <span class=\"btn-bg\">OK</span>\n                                    </span>\n                                </span>\n                            </button>\n                        </div>\n                   </form>\n                </div>\n            </div>\n\n            <div class=\"sf-reset\">\n                    <div class=\"block-exception\">\n    <div class=\"block-exception-detected clear-fix\">\n        <div class=\"illustration-exception\">\n            <img alt=\"Exception detected!\" src=\"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAHAAAAB8CAMAAACG/MQCAAADAFBMVEX29vbt8eLn7tTY5rPT46nI3ZHC2oO51XDH3I3J3pPe6cHy9O7y9Ozg6sXQ4aLA2X+w0FyqzU6202jF24nV5K3k7M7q8NzS46a/2Xqv0FrD24Xb6Lvw8+jx8+rU5Ku31Gz19vTl7dHE24eszlLN4Jvj7My913js8eDo7ta813arzVC61nLz9fCuz1bZ57br8N631Wnc6L2tz1S102ay0WDh68r09fLO4J3L4JOx0V3a6bL////k78fX5bC002PI34z8/fnS5aHV5qjt9Nro8c/F3Ybp79qx0V7d67i713Gz0mGy0l/2+uzy9+Tc6raw0Vrp8tHH3ori7sPn8c2v0Fj9/vv1+erw9uDB2374+/DA2nzX56zm8Mvx9+K+2XjP45vq89PT5aPZ6bD+/v3Y6K7s9Ne82HPW56rf7LyrzlDK3pbD3IK21Gfu9dzr89XM4ZW92Ha61m/3+u7E3ITC24Cuz1jQ4535+/PO4pnG3Yj0+eje7LrJ34+51m36/PX7/ffv9t7j78XK4JHh7cHN4pfR5J+41Wvz+Obb6rTg7b7G3Iva57nP4Z+71nTU5qW+2HnI3Y/B2oHh6sfp79ju8uSz0mLf6cPv8ua/2X200mT29vbl5eW+vr6SkpJoaGhkZGREREQ/Pz9YWFh7e3uoqKjU1NTy8vK1tbVmZmZKSkqOjo7e3t7w8PCamppMTExzc3PX19fQ0NBbW1ucnJygoKBBQUFgYGDh4eHj4+NjY2OMjIyIiIh1dXV3d3e8vLxwcHDn5+f8/Pz7+/vZ2dldXV34+Pj6+vpGRkbq6ur5+fn39/f19fWGhoZRUVHb29uKiopqamrMzMxISEjp6ens7OyUlJSkpKSCgoLExMTa2trx8fGysrLCwsLr6+vBwcH09PTHx8dTU1OYmJienp5OTk6srKyvr6+AgIDt7e3KysqXl5dubm7Y2NiEhITPz8/R0dHS0tKQkJDz8/NVVVXi4uKxsbFsbGyioqJWVlarq6t+fn59fX3c3Nzv7++6urq4uLhQzU1ZAAAAAXRSTlMAQObYZgAACuNJREFUeNrtmX1cFWUWx8dcU9wyj72Brpt1215UisA24JQgYAsKggmISvhyEbkJQkgQmoCBmW3Zm9vujoo+YIj4UiqQGaVcHfSOr1ipWZZllmWbprm71lZ7nvF+7n2QvThzmfhrv3/APDPw/J5z5pznnJmRdNDliq6/6dbtyu6cHt18uva84rfSr8VVV/e6pje0pc+1111vvtoNN/pCO/j17fc7E9X6//4muDzX9BxgjtzNt1hAH71vNcHMP9wGBrB0u71jcnfcCQYZ6NO/A3HpMxCM49fVW72efuAdg27wRm6wD3iN/13G9e4OgI5w7WCjwekHHWOQsQy5JxA6StDdBvT6gQn01h86PQeCGQzpolPvXguYQ5C++3i7H5jFbXq28z92B/O4T4egD5jJ1ZfVux4M4x8c4jlwLteBDPDCoaF4v/dOfQCMMBQ4YeHDwEVgRGTUcLFCPth+xPwJDBCNMcAZMQJgZHRs3Kh4gAQkRou7aruCXcEID+GY6Mi4iMSkOIhPRmJsYgqOGz8Bk8WK3F76D+gDAimpD6d56CQmRk2a7A9TkDPGglZLOk4NyBiL04IxE2xWTAQ3j7S3x4DAMEQME0SmZwEMj7JmB4NlEhJx8RNxRk7uowB5OHQGjgeYiQn5mAqQjGJte6ydStUD3BRg+DQKipBEMjXTAr6FmA05yMl/HPOKwmZhehGfffRsWzamReETQJfHzMGxADMwBQTu8exRPyHaipEHm39JKUAqTg8pwdIwSzEOm4ux8XPxSQBfjMxAuliKGfdjWAEWRoQmYVgiFgKU0XVdYXMzuMnFkpwJ0eWWcMyIj8W0eRhlg6dwfj6Gx0AqX8t4LA0Mt4aFWa0jQ3Ge7X4kMm2QOgYgAkNBwM+j4HXgZjpyxsEoRCs+bKE5AYKwMGbSTJ4OE2HmfEyHaUg8DTk0huHR0XRJIw2TFtCxC4+F8RlwMwetsyfnBIElFhHnjyzHUkqySCwtKCiAyZhOUjMSAcqzpxYAwKPQmqeRPOvmz54ExW3NNgunATEeS0LjMNQ/Ga2RuVl5SAx9Ah/yTS0IBM+k5OQKo2c9CfYGgZmUYQX5lmmk+yjGQRalQjkkTowOHU7xMhWM8IwnQWjFk8WIGBxMN8/2EN8sQ1zJlYXJYARffYIQP2zB00GWDGiDLS4KjHCnR0FTyC2LT0nKAYGbfl3BaCwPxjIQeM6ToAXMYCFOSMFJIPC85yg1zIhL7/voGDIvAGfp2tsGgVGmoDOmbNNDC54CvsXHknn+mAR68vAFMEYiZGJU9KTsKeA/BhGtRfGFOH8mN68QR+opF9dBG4rGuWrwAlerFBLDmxmqtxERyEmAdMzLpKTNwSgLcPMSwuPBzYN6qoWTCehqkIpxes6wUVkQOJc0yvznhOO4omCM1EpwMqY9jKnAtyWwJWGgJQvc9PZcD4fApZTjKIDAouiFATAWOenUyZTEIvouwDIbpJB1kJ9pScIM61h/GE3bPBRgHMzDCCFmdHfduenlM2ndI7NJKCk/FWdFpweHZGFJ7ixcAKW8ZQvA+bxR852EmTGJVFri0EqLKYLZOFu4hTp7GsixYl4MlkIZzi9DHD0KHwdIi0nBqeUYaYEo7mxbIQYXFWNARjgS+TCCgie5iHzia3M35oPb6dqCwE1WEk4JGomFthKMycNoGIYTwBI+biiGZ8wLuVhNFlq0qFlAzkiw4gzKC7AEwCW8IBF64nSitj8lYbw1aY41wQLTcYbNF2NhLlXG7DE2mGxFTIPHIyMXWqA92m29r/IT27ZoWnCS1T8bM+cMpegch8WIUyCR51xxIsCI4OFweV6UJJ0mZmD4kzFlGAm5SUiMh4w4TBrFrQlIiUkEnQy84zKPo0FiZ0KUZAD4JpTkRY0AsskfjOIjXYaXhDqbE5ld9hR0CL/+nfwE3FPHO7Y+YB7dJB28/BiYxaDB+t7TDARzGLJI0kdXk/Qo5TtT8S9GXn/f1XGv9ukiGeEVf+gYN/1VMsbLQdAR+l5l/HPMleA1/v0kb+jnbULe5u3XkkXPeGXejQMkr3nwFjBI4CP9O/gx6EUwgMWHgrOjXPE33c706SKZQpdef9fz2NnVzK+z19/XftV6/oFFktksuqdXXw9fSnuYrSYGUb9nu93SvbuYopZXpF+fa8HNjVIncKuQeYM7Q/Bq8Qm+ExCfQnrQsFNN7Ct1Dve5WjOpFfLiJUsrli1njFUuq1rxqmyOmvgKwiIGTfXKGtaKVbWrTdP8vbPxecl1Zs3adawtr71uluQdg1q9nZTXb2D/k+UbqyWT6PccT8T+F/Xq6pknGt4wza+39xoCvTS9tawdKjeZGD33PjKA28c4b25+q5VfVzVufnudprhYlsxEfocRW7Y22e1N27YzJ/V1SpO9qXnFDjquqTZVcCc3o87uUFRFad61m2nsWa+dcDTvraTRWtlMA5fSjPvsiirTMUnsZ5yWZhrzE45ttBEcMNOp7/IJ31Nkp7zyKiOqNL2LirU0ft88QfkgzXfI4ZpQdTTQicN8Ac4VfEDjdUdME1S5Cz9U3AtQuEVHVMm9ggN04iPnAo4u+dg7Yz9ZuvQdWZuhnk+nCiuoo4xwyMIKeOTWqtrxsU8Z+8wbRfkwTbL/EzpoYZcKHqd7qkhuNMH92l/s+pwOP1W9ceQJRqyWnQdfqJK8qYrVf7mVLm2mEydpKV81sHXH+Zq4S1cpml+4OyoVbwQ/4pEgk+DXjDikStVvMuLUJ5LaoN0yeTXXYcdl+RvGOaoZy5PyHwYF5WMHKtar79FaaxUSrGXEjp3kY41v5dNaWqgyXeCWqWQxZ5P8xkeycor/iWrQOPqn+hWOtxk7o9LoEON8p65kBL+bW7SN7TRd0DiydwfjfLN6Ofta2cdYhcOg4Fltgn2Ufu8uqTp3xDnvh9/Xa+Vv51JniVh9nnGWLW5gGtveXcXY7irGlpw5UbvbyOZKN56z6uKvxSSosfl9RqxtdNWKj/9JPw8c3OMcf6O0CC1BnQFBZTdzs0XhghrnKnYc2C62Gfsb2OfcPKeg6tj5r3PMyR4j91D+orHm0MYKWuax7+0OEtQDCaoOewVZro0qjESp0mynSkeuOtzsUBTdgrIsK/9m7ALfChuPGsoLVVXUXTzpzsqyql9Qknkkn2g6c3693XDuy1sZseHEGv2CassPjNjocJBjZMOC8nLGWVdVyVycammt3nJUuPjjBmf+qLIqG9ajG7mZtWFJ8wlxuPxk85fsUtadVL0sg9WNbQVVSm43VbJS0UbvW8GbBk20H/uB0krkoCpdEAz8j/TTjtZd+KmDa/i+5q2iw960+OPzghFbaLKNrtl/5t2Hm+PnX29uauatlteKKu8C7WKctNBshz9nnO0tkvy96OC9FJtcrkNQGiqi4Lm9NGH1krq3Vpymi7RtC2zjsWkCrfNwVd1PrsX8/OmliS+ZLkgsf63uRMuZMys/o7TrBEGR/wuaL1jPRD4wS7DVnrpHHFQykU1mCX7NBE6Jg31MZI1Zgh8ygQvi4HUxEc8pZgluY24OnBWaqBq72G0dUiRzkB1vMhe1zYKDVzpOtypdZgkqx9whs1U56XJjY7PqcJt4SlElk1AdF5zxv2GvQ1X2VjoVqhVZUX906lXwR3KTkNXmbd/VNNQ0nt/loHbFcfb8azXL3v7FTgpUpL96q2Z7TdUvDm6geYpUiZua7Ly40oC6Vm0ga/52Xmqr91/J+SF/sBcvugAAAABJRU5ErkJggg==\" />\n        </div>\n        <div class=\"text-exception\">\n            <div class=\"open-quote\">\n                <img alt=\"\" src=\"data:image/gif;base64,R0lGODlhHAAWAMQQANra2+bl5s3Mzevr6/Pz8+jo6O3t7fHx8c/Oz+Pj49PS093d3djX2NXV1eDf4MrJyvb29gAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACH5BAEAABAALAAAAAAcABYAQAWWICSOEDE4AamqRuAsT5yu6hA/wNrcfNysjl5PBOAJAAUDDRLoNRKDndAHnN6k058qaH2QuNelqCAYIm45MfGmIJCkAvUIPNB1td/uAyvEz/UqB0VUagQOZTEjgzx+Kk1CEAU8DAdqB4gPCHVjNwhucphKbzefamAFdlaNEGBZd1V3r1t6fE6wqrJ5XS4Ovb69MyQnv8QhADs=\" />\n            </div>\n\n            <h1>\n                You have requested a non-existent service &quot;common.service.repository&quot;. Did you mean one of these: &quot;sysadmin.service.repository&quot;, &quot;login.service.repository&quot;?\n            </h1>\n\n            <div>\n                <strong>500</strong> Internal Server Error - <abbr title=\"Symfony\\Component\\DependencyInjection\\Exception\\ServiceNotFoundException\">ServiceNotFoundException</abbr>\n            </div>\n\n                        \n            <div class=\"close-quote\">\n                <img alt=\"\" src=\"data:image/gif;base64,R0lGODlhHAAWAMQQANra2+bl5s3Mzevr6/Pz8+jo6O3t7fHx8c/Oz+Pj49PS093d3djX2NXV1eDf4MrJyvb29gAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACH5BAEAABAALAAAAAAcABYAQAWZoCOO5ACdaECuweO+sIOiDWw36IC8wjH/kAMDVoDYbLJf7ejC/QqvJHBGeC0fAgdhOrsCfDNmFHg9lo9SmvhxRpLXTpSBx6XuXNBjoN4GoNYPaSdtVoCCEIRNhm9iiS6Hjo6BjExxOWN1KAJNQAAvJpkQLS4LVAovfqGeLggQAwlne1MGBQCbqCc2AkV8bigOAQahKQ4DW0AhADs=\" />\n            </div>\n        </div>\n    </div>\n</div>\n\n    <div class=\"block\">\n            <h2>Stack Trace</h2>\n    \n    <a id=\"traces-link-0\"></a>\n    <ol class=\"traces list-exception\" id=\"traces-0\" style=\"display: block\">\n                    <li>\n                \n    \n    in <abbr title=\"/usr/share/nginx/html/weboffice/vendor\">vendor</abbr>/symfony/symfony/src/Symfony/Component/DependencyInjection/Container.php at line 266&nbsp;\n    <a href=\"#\" onclick=\"toggle('trace-0-0'); switchIcons('icon-0-0-open', 'icon-0-0-close'); return false;\"><img class=\"toggle\" id=\"icon-0-0-close\" alt=\"-\" src=\"data:image/gif;base64,R0lGODlhEgASAMQSANft94TG57Hb8GS44ez1+mC24IvK6ePx+Wa44dXs92+942e54o3L6W2844/M6dnu+P/+/l614P///wAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACH5BAEAABIALAAAAAASABIAQAVCoCQBTBOd6Kk4gJhGBCTPxysJb44K0qD/ER/wlxjmisZkMqBEBW5NHrMZmVKvv9hMVsO+hE0EoNAstEYGxG9heIhCADs=\" style=\"display: inline\" /><img class=\"toggle\" id=\"icon-0-0-open\" alt=\"+\" src=\"data:image/gif;base64,R0lGODlhEgASAMQTANft99/v+Ga44bHb8ITG52S44dXs9+z1+uPx+YvK6WC24G+944/M6W28443L6dnu+Ge54v/+/l614P///wAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACH5BAEAABMALAAAAAASABIAQAVS4DQBTiOd6LkwgJgeUSzHSDoNaZ4PU6FLgYBA5/vFID/DbylRGiNIZu74I0h1hNsVxbNuUV4d9SsZM2EzWe1qThVzwWFOAFCQFa1RQq6DJB4iIQA7\" style=\"display: none\" /></a>    <div id=\"trace-0-0\" style=\"display: block\" class=\"trace\">\n        <ol start=\"263\"><li><code>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;}</code></li>\n<li><code>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;}</code></li>\n<li><code></code></li>\n<li class=\"selected\"><code>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;throw&nbsp;new&nbsp;<span style=\"color: #0000BB\">ServiceNotFoundException</span><span style=\"color: #007700\">(</span><span style=\"color: #0000BB\">$id</span><span style=\"color: #007700\">,&nbsp;</span><span style=\"color: #0000BB\">null</span><span style=\"color: #007700\">,&nbsp;</span><span style=\"color: #0000BB\">null</span><span style=\"color: #007700\">,&nbsp;</span><span style=\"color: #0000BB\">$alternatives</span><span style=\"color: #007700\">);</span></code></li>\n<li><code>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;}</code></li>\n<li><code></code></li>\n<li><code>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;return;</code></li></ol>\n    </div>\n            </li>\n                    <li>\n                    at\n    <strong>\n        <abbr title=\"Symfony\\Component\\DependencyInjection\\Container\">Container</abbr>\n        -&gt;get\n    </strong>\n    ('common.service.repository')\n\n    <br />\n    in <abbr title=\"/usr/share/nginx/html/weboffice/vendor\">vendor</abbr>/symfony/symfony/src/Symfony/Bundle/FrameworkBundle/Controller/Controller.php at line 363&nbsp;\n    <a href=\"#\" onclick=\"toggle('trace-0-1'); switchIcons('icon-0-1-open', 'icon-0-1-close'); return false;\"><img class=\"toggle\" id=\"icon-0-1-close\" alt=\"-\" src=\"data:image/gif;base64,R0lGODlhEgASAMQSANft94TG57Hb8GS44ez1+mC24IvK6ePx+Wa44dXs92+942e54o3L6W2844/M6dnu+P/+/l614P///wAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACH5BAEAABIALAAAAAASABIAQAVCoCQBTBOd6Kk4gJhGBCTPxysJb44K0qD/ER/wlxjmisZkMqBEBW5NHrMZmVKvv9hMVsO+hE0EoNAstEYGxG9heIhCADs=\" style=\"display: none\" /><img class=\"toggle\" id=\"icon-0-1-open\" alt=\"+\" src=\"data:image/gif;base64,R0lGODlhEgASAMQTANft99/v+Ga44bHb8ITG52S44dXs9+z1+uPx+YvK6WC24G+944/M6W28443L6dnu+Ge54v/+/l614P///wAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACH5BAEAABMALAAAAAASABIAQAVS4DQBTiOd6LkwgJgeUSzHSDoNaZ4PU6FLgYBA5/vFID/DbylRGiNIZu74I0h1hNsVxbNuUV4d9SsZM2EzWe1qThVzwWFOAFCQFa1RQq6DJB4iIQA7\" style=\"display: inline\" /></a>    <div id=\"trace-0-1\" style=\"display: none\" class=\"trace\">\n        <ol start=\"360\"><li><code>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;*/</code></li>\n<li><code>&nbsp;&nbsp;&nbsp;&nbsp;<span style=\"color: #007700\">protected&nbsp;function&nbsp;</span><span style=\"color: #0000BB\">get</span><span style=\"color: #007700\">(</span><span style=\"color: #0000BB\">$id</span><span style=\"color: #007700\">)</span></code></li>\n<li><code>&nbsp;&nbsp;&nbsp;&nbsp;{</code></li>\n<li class=\"selected\"><code>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;return&nbsp;<span style=\"color: #0000BB\">$this</span><span style=\"color: #007700\">-&gt;</span><span style=\"color: #0000BB\">container</span><span style=\"color: #007700\">-&gt;</span><span style=\"color: #0000BB\">get</span><span style=\"color: #007700\">(</span><span style=\"color: #0000BB\">$id</span><span style=\"color: #007700\">);</span></code></li>\n<li><code>&nbsp;&nbsp;&nbsp;&nbsp;}</code></li>\n<li><code></code></li>\n<li><code>&nbsp;&nbsp;&nbsp;&nbsp;<span style=\"color: #FF8000\">/**</span></code></li></ol>\n    </div>\n            </li>\n                    <li>\n                    at\n    <strong>\n        <abbr title=\"Symfony\\Bundle\\FrameworkBundle\\Controller\\Controller\">Controller</abbr>\n        -&gt;get\n    </strong>\n    ('common.service.repository')\n\n    <br />\n    in <abbr title=\"/usr/share/nginx/html/weboffice/src\">src</abbr>/AppBundle/Controller/BaseEntityController.php at line 1703&nbsp;\n    <a href=\"#\" onclick=\"toggle('trace-0-2'); switchIcons('icon-0-2-open', 'icon-0-2-close'); return false;\"><img class=\"toggle\" id=\"icon-0-2-close\" alt=\"-\" src=\"data:image/gif;base64,R0lGODlhEgASAMQSANft94TG57Hb8GS44ez1+mC24IvK6ePx+Wa44dXs92+942e54o3L6W2844/M6dnu+P/+/l614P///wAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACH5BAEAABIALAAAAAASABIAQAVCoCQBTBOd6Kk4gJhGBCTPxysJb44K0qD/ER/wlxjmisZkMqBEBW5NHrMZmVKvv9hMVsO+hE0EoNAstEYGxG9heIhCADs=\" style=\"display: none\" /><img class=\"toggle\" id=\"icon-0-2-open\" alt=\"+\" src=\"data:image/gif;base64,R0lGODlhEgASAMQTANft99/v+Ga44bHb8ITG52S44dXs9+z1+uPx+YvK6WC24G+944/M6W28443L6dnu+Ge54v/+/l614P///wAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACH5BAEAABMALAAAAAASABIAQAVS4DQBTiOd6LkwgJgeUSzHSDoNaZ4PU6FLgYBA5/vFID/DbylRGiNIZu74I0h1hNsVxbNuUV4d9SsZM2EzWe1qThVzwWFOAFCQFa1RQq6DJB4iIQA7\" style=\"display: inline\" /></a>    <div id=\"trace-0-2\" style=\"display: none\" class=\"trace\">\n        <ol start=\"1700\"><li><code>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;*/</code></li>\n<li><code>&nbsp;&nbsp;&nbsp;&nbsp;<span style=\"color: #007700\">protected&nbsp;function&nbsp;</span><span style=\"color: #0000BB\">getRepositoryService</span><span style=\"color: #007700\">(</span><span style=\"color: #0000BB\">$entity</span><span style=\"color: #007700\">,&nbsp;</span><span style=\"color: #0000BB\">$Bundle</span><span style=\"color: #007700\">)</span></code></li>\n<li><code>&nbsp;&nbsp;&nbsp;&nbsp;{</code></li>\n<li class=\"selected\"><code>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;return&nbsp;<span style=\"color: #0000BB\">$this</span><span style=\"color: #007700\">-&gt;</span><span style=\"color: #0000BB\">get</span><span style=\"color: #007700\">(</span><span style=\"color: #0000BB\">HelperService</span><span style=\"color: #007700\">::</span><span style=\"color: #0000BB\">camelCaseToSnakeCase</span><span style=\"color: #007700\">(</span><span style=\"color: #0000BB\">substr</span><span style=\"color: #007700\">(</span><span style=\"color: #0000BB\">$Bundle</span><span style=\"color: #007700\">,&nbsp;</span><span style=\"color: #0000BB\">0</span><span style=\"color: #007700\">,&nbsp;-</span><span style=\"color: #0000BB\">6</span><span style=\"color: #007700\">)).</span><span style=\"color: #DD0000\">'.service.repository'</span><span style=\"color: #007700\">)</span></code></li>\n<li><code>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;-&gt;<span style=\"color: #0000BB\">setEntityRepository</span><span style=\"color: #007700\">(</span><span style=\"color: #0000BB\">$Bundle</span><span style=\"color: #007700\">.</span><span style=\"color: #DD0000\">':'</span><span style=\"color: #007700\">.</span><span style=\"color: #0000BB\">$entity</span><span style=\"color: #007700\">);</span></code></li>\n<li><code>&nbsp;&nbsp;&nbsp;&nbsp;}</code></li>\n<li><code></code></li></ol>\n    </div>\n            </li>\n                    <li>\n                    at\n    <strong>\n        <abbr title=\"AppBundle\\Controller\\BaseEntityController\">BaseEntityController</abbr>\n        -&gt;getRepositoryService\n    </strong>\n    ('Country', 'CommonBundle')\n\n    <br />\n    in <abbr title=\"/usr/share/nginx/html/weboffice/src\">src</abbr>/AppBundle/Controller/BaseEntityController.php at line 1717&nbsp;\n    <a href=\"#\" onclick=\"toggle('trace-0-3'); switchIcons('icon-0-3-open', 'icon-0-3-close'); return false;\"><img class=\"toggle\" id=\"icon-0-3-close\" alt=\"-\" src=\"data:image/gif;base64,R0lGODlhEgASAMQSANft94TG57Hb8GS44ez1+mC24IvK6ePx+Wa44dXs92+942e54o3L6W2844/M6dnu+P/+/l614P///wAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACH5BAEAABIALAAAAAASABIAQAVCoCQBTBOd6Kk4gJhGBCTPxysJb44K0qD/ER/wlxjmisZkMqBEBW5NHrMZmVKvv9hMVsO+hE0EoNAstEYGxG9heIhCADs=\" style=\"display: none\" /><img class=\"toggle\" id=\"icon-0-3-open\" alt=\"+\" src=\"data:image/gif;base64,R0lGODlhEgASAMQTANft99/v+Ga44bHb8ITG52S44dXs9+z1+uPx+YvK6WC24G+944/M6W28443L6dnu+Ge54v/+/l614P///wAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACH5BAEAABMALAAAAAASABIAQAVS4DQBTiOd6LkwgJgeUSzHSDoNaZ4PU6FLgYBA5/vFID/DbylRGiNIZu74I0h1hNsVxbNuUV4d9SsZM2EzWe1qThVzwWFOAFCQFa1RQq6DJB4iIQA7\" style=\"display: inline\" /></a>    <div id=\"trace-0-3\" style=\"display: none\" class=\"trace\">\n        <ol start=\"1714\"><li><code>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style=\"color: #0000BB\">$entity&nbsp;</span><span style=\"color: #007700\">=&nbsp;</span><span style=\"color: #0000BB\">$this</span><span style=\"color: #007700\">-&gt;</span><span style=\"color: #0000BB\">localConf</span><span style=\"color: #007700\">[</span><span style=\"color: #DD0000\">'entity'</span><span style=\"color: #007700\">];</span></code></li>\n<li><code>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style=\"color: #0000BB\">$Bundle&nbsp;</span><span style=\"color: #007700\">=&nbsp;</span><span style=\"color: #0000BB\">$this</span><span style=\"color: #007700\">-&gt;</span><span style=\"color: #0000BB\">localConf</span><span style=\"color: #007700\">[</span><span style=\"color: #DD0000\">'Bundle'</span><span style=\"color: #007700\">];</span></code></li>\n<li><code></code></li>\n<li class=\"selected\"><code>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;return&nbsp;<span style=\"color: #0000BB\">$this</span><span style=\"color: #007700\">-&gt;</span><span style=\"color: #0000BB\">getRepositoryService</span><span style=\"color: #007700\">(</span><span style=\"color: #0000BB\">$entity</span><span style=\"color: #007700\">,&nbsp;</span><span style=\"color: #0000BB\">$Bundle</span><span style=\"color: #007700\">);</span></code></li>\n<li><code>&nbsp;&nbsp;&nbsp;&nbsp;}</code></li>\n<li><code></code></li>\n<li><code>&nbsp;&nbsp;&nbsp;&nbsp;<span style=\"color: #FF8000\">/**</span></code></li></ol>\n    </div>\n            </li>\n                    <li>\n                    at\n    <strong>\n        <abbr title=\"AppBundle\\Controller\\BaseEntityController\">BaseEntityController</abbr>\n        -&gt;getLocalRepositoryService\n    </strong>\n    ()\n\n    <br />\n    in <abbr title=\"/usr/share/nginx/html/weboffice/src\">src</abbr>/AppBundle/Controller/BaseEntityController.php at line 78&nbsp;\n    <a href=\"#\" onclick=\"toggle('trace-0-4'); switchIcons('icon-0-4-open', 'icon-0-4-close'); return false;\"><img class=\"toggle\" id=\"icon-0-4-close\" alt=\"-\" src=\"data:image/gif;base64,R0lGODlhEgASAMQSANft94TG57Hb8GS44ez1+mC24IvK6ePx+Wa44dXs92+942e54o3L6W2844/M6dnu+P/+/l614P///wAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACH5BAEAABIALAAAAAASABIAQAVCoCQBTBOd6Kk4gJhGBCTPxysJb44K0qD/ER/wlxjmisZkMqBEBW5NHrMZmVKvv9hMVsO+hE0EoNAstEYGxG9heIhCADs=\" style=\"display: none\" /><img class=\"toggle\" id=\"icon-0-4-open\" alt=\"+\" src=\"data:image/gif;base64,R0lGODlhEgASAMQTANft99/v+Ga44bHb8ITG52S44dXs9+z1+uPx+YvK6WC24G+944/M6W28443L6dnu+Ge54v/+/l614P///wAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACH5BAEAABMALAAAAAASABIAQAVS4DQBTiOd6LkwgJgeUSzHSDoNaZ4PU6FLgYBA5/vFID/DbylRGiNIZu74I0h1hNsVxbNuUV4d9SsZM2EzWe1qThVzwWFOAFCQFa1RQq6DJB4iIQA7\" style=\"display: inline\" /></a>    <div id=\"trace-0-4\" style=\"display: none\" class=\"trace\">\n        <ol start=\"75\"><li><code>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style=\"color: #007700\">}</span></code></li>\n<li><code>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style=\"color: #0000BB\">$this</span><span style=\"color: #007700\">-&gt;</span><span style=\"color: #0000BB\">localConf</span><span style=\"color: #007700\">[</span><span style=\"color: #DD0000\">'entityClass'</span><span style=\"color: #007700\">]&nbsp;=&nbsp;(</span><span style=\"color: #0000BB\">$this</span><span style=\"color: #007700\">-&gt;</span><span style=\"color: #0000BB\">localConf</span><span style=\"color: #007700\">[</span><span style=\"color: #DD0000\">'Bundle'</span><span style=\"color: #007700\">].</span><span style=\"color: #DD0000\">'\\Entity\\\\'</span><span style=\"color: #007700\">.</span><span style=\"color: #0000BB\">$this</span><span style=\"color: #007700\">-&gt;</span><span style=\"color: #0000BB\">localConf</span><span style=\"color: #007700\">[</span><span style=\"color: #DD0000\">'entity'</span><span style=\"color: #007700\">]);</span></code></li>\n<li><code>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;if&nbsp;(empty(<span style=\"color: #0000BB\">$this</span><span style=\"color: #007700\">-&gt;</span><span style=\"color: #0000BB\">localConf</span><span style=\"color: #007700\">[</span><span style=\"color: #DD0000\">'entityFields'</span><span style=\"color: #007700\">]))&nbsp;{&nbsp;</span><span style=\"color: #FF8000\">//&nbsp;Can&nbsp;be&nbsp;initialized&nbsp;and&nbsp;handled&nbsp;in&nbsp;child&nbsp;controller</span></code></li>\n<li class=\"selected\"><code>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style=\"color: #0000BB\">$this</span><span style=\"color: #007700\">-&gt;</span><span style=\"color: #0000BB\">localConf</span><span style=\"color: #007700\">[</span><span style=\"color: #DD0000\">'entityFields'</span><span style=\"color: #007700\">]&nbsp;=&nbsp;</span><span style=\"color: #0000BB\">$this</span><span style=\"color: #007700\">-&gt;</span><span style=\"color: #0000BB\">getLocalRepositoryService</span><span style=\"color: #007700\">()-&gt;</span><span style=\"color: #0000BB\">execute</span><span style=\"color: #007700\">(</span><span style=\"color: #DD0000\">'getMetadata'</span><span style=\"color: #007700\">);</span></code></li>\n<li><code>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;}</code></li>\n<li><code>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style=\"color: #0000BB\">$this</span><span style=\"color: #007700\">-&gt;</span><span style=\"color: #0000BB\">localConf</span><span style=\"color: #007700\">[</span><span style=\"color: #DD0000\">'entityTable'</span><span style=\"color: #007700\">]&nbsp;=&nbsp;(((</span><span style=\"color: #0000BB\">$this</span><span style=\"color: #007700\">-&gt;</span><span style=\"color: #0000BB\">localConf</span><span style=\"color: #007700\">[</span><span style=\"color: #DD0000\">'bundle'</span><span style=\"color: #007700\">]&nbsp;==&nbsp;</span><span style=\"color: #DD0000\">'sysadmin'</span><span style=\"color: #007700\">)</span></code></li>\n<li><code>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;?&nbsp;<span style=\"color: #DD0000\">'app_'&nbsp;</span><span style=\"color: #007700\">:&nbsp;</span><span style=\"color: #DD0000\">''</span><span style=\"color: #007700\">)&nbsp;.&nbsp;</span><span style=\"color: #0000BB\">lcfirst</span><span style=\"color: #007700\">(</span><span style=\"color: #0000BB\">$this</span><span style=\"color: #007700\">-&gt;</span><span style=\"color: #0000BB\">localConf</span><span style=\"color: #007700\">[</span><span style=\"color: #DD0000\">'entity'</span><span style=\"color: #007700\">]));&nbsp;</span><span style=\"color: #FF8000\">//&nbsp;lowerCamelCase</span></code></li></ol>\n    </div>\n            </li>\n                    <li>\n                    at\n    <strong>\n        <abbr title=\"AppBundle\\Controller\\BaseEntityController\">BaseEntityController</abbr>\n        -&gt;setLocalConf\n    </strong>\n    ()\n\n    <br />\n    in <abbr title=\"/usr/share/nginx/html/weboffice/src\">src</abbr>/AppBundle/Controller/BaseEntityController.php at line 31&nbsp;\n    <a href=\"#\" onclick=\"toggle('trace-0-5'); switchIcons('icon-0-5-open', 'icon-0-5-close'); return false;\"><img class=\"toggle\" id=\"icon-0-5-close\" alt=\"-\" src=\"data:image/gif;base64,R0lGODlhEgASAMQSANft94TG57Hb8GS44ez1+mC24IvK6ePx+Wa44dXs92+942e54o3L6W2844/M6dnu+P/+/l614P///wAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACH5BAEAABIALAAAAAASABIAQAVCoCQBTBOd6Kk4gJhGBCTPxysJb44K0qD/ER/wlxjmisZkMqBEBW5NHrMZmVKvv9hMVsO+hE0EoNAstEYGxG9heIhCADs=\" style=\"display: none\" /><img class=\"toggle\" id=\"icon-0-5-open\" alt=\"+\" src=\"data:image/gif;base64,R0lGODlhEgASAMQTANft99/v+Ga44bHb8ITG52S44dXs9+z1+uPx+YvK6WC24G+944/M6W28443L6dnu+Ge54v/+/l614P///wAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACH5BAEAABMALAAAAAASABIAQAVS4DQBTiOd6LkwgJgeUSzHSDoNaZ4PU6FLgYBA5/vFID/DbylRGiNIZu74I0h1hNsVxbNuUV4d9SsZM2EzWe1qThVzwWFOAFCQFa1RQq6DJB4iIQA7\" style=\"display: inline\" /></a>    <div id=\"trace-0-5\" style=\"display: none\" class=\"trace\">\n        <ol start=\"28\"><li><code>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style=\"color: #0000BB\">$this</span><span style=\"color: #007700\">-&gt;</span><span style=\"color: #0000BB\">setFlags</span><span style=\"color: #007700\">();</span></code></li>\n<li><code></code></li>\n<li><code>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style=\"color: #FF8000\">//&nbsp;Local&nbsp;configuration</span></code></li>\n<li class=\"selected\"><code>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style=\"color: #0000BB\">$this</span><span style=\"color: #007700\">-&gt;</span><span style=\"color: #0000BB\">setLocalConf</span><span style=\"color: #007700\">();</span></code></li>\n<li><code></code></li>\n<li><code>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style=\"color: #FF8000\">//&nbsp;Template&nbsp;configuration</span></code></li>\n<li><code>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style=\"color: #0000BB\">$this</span><span style=\"color: #007700\">-&gt;</span><span style=\"color: #0000BB\">setTemplateConf</span><span style=\"color: #007700\">();</span></code></li></ol>\n    </div>\n            </li>\n                    <li>\n                    at\n    <strong>\n        <abbr title=\"AppBundle\\Controller\\BaseEntityController\">BaseEntityController</abbr>\n        -&gt;init\n    </strong>\n    (<em>object</em>(<abbr title=\"Symfony\\Component\\HttpFoundation\\Request\">Request</abbr>))\n\n    <br />\n    in <abbr title=\"/usr/share/nginx/html/weboffice/src\">src</abbr>/CommonBundle/Controller/CountryController.php at line 38&nbsp;\n    <a href=\"#\" onclick=\"toggle('trace-0-6'); switchIcons('icon-0-6-open', 'icon-0-6-close'); return false;\"><img class=\"toggle\" id=\"icon-0-6-close\" alt=\"-\" src=\"data:image/gif;base64,R0lGODlhEgASAMQSANft94TG57Hb8GS44ez1+mC24IvK6ePx+Wa44dXs92+942e54o3L6W2844/M6dnu+P/+/l614P///wAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACH5BAEAABIALAAAAAASABIAQAVCoCQBTBOd6Kk4gJhGBCTPxysJb44K0qD/ER/wlxjmisZkMqBEBW5NHrMZmVKvv9hMVsO+hE0EoNAstEYGxG9heIhCADs=\" style=\"display: none\" /><img class=\"toggle\" id=\"icon-0-6-open\" alt=\"+\" src=\"data:image/gif;base64,R0lGODlhEgASAMQTANft99/v+Ga44bHb8ITG52S44dXs9+z1+uPx+YvK6WC24G+944/M6W28443L6dnu+Ge54v/+/l614P///wAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACH5BAEAABMALAAAAAASABIAQAVS4DQBTiOd6LkwgJgeUSzHSDoNaZ4PU6FLgYBA5/vFID/DbylRGiNIZu74I0h1hNsVxbNuUV4d9SsZM2EzWe1qThVzwWFOAFCQFa1RQq6DJB4iIQA7\" style=\"display: inline\" /></a>    <div id=\"trace-0-6\" style=\"display: none\" class=\"trace\">\n        <ol start=\"35\"><li><code>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style=\"color: #007700\">)</span></code></li>\n<li><code>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;);</code></li>\n<li><code></code></li>\n<li class=\"selected\"><code>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style=\"color: #0000BB\">parent</span><span style=\"color: #007700\">::</span><span style=\"color: #0000BB\">init</span><span style=\"color: #007700\">(</span><span style=\"color: #0000BB\">$request</span><span style=\"color: #007700\">);</span></code></li>\n<li><code></code></li>\n<li><code>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style=\"color: #FF8000\">//&nbsp;Search</span></code></li>\n<li><code>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style=\"color: #0000BB\">$this</span><span style=\"color: #007700\">-&gt;</span><span style=\"color: #0000BB\">templateConf</span><span style=\"color: #007700\">[</span><span style=\"color: #DD0000\">'search'</span><span style=\"color: #007700\">][</span><span style=\"color: #DD0000\">'fields'</span><span style=\"color: #007700\">]&nbsp;=&nbsp;</span><span style=\"color: #0000BB\">$this</span><span style=\"color: #007700\">-&gt;</span><span style=\"color: #0000BB\">templateConf</span><span style=\"color: #007700\">[</span><span style=\"color: #DD0000\">'fields'</span><span style=\"color: #007700\">][</span><span style=\"color: #DD0000\">'view'</span><span style=\"color: #007700\">];</span></code></li></ol>\n    </div>\n            </li>\n                    <li>\n                    at\n    <strong>\n        <abbr title=\"CommonBundle\\Controller\\CountryController\">CountryController</abbr>\n        -&gt;init\n    </strong>\n    (<em>object</em>(<abbr title=\"Symfony\\Component\\HttpFoundation\\Request\">Request</abbr>))\n\n    <br />\n    in <abbr title=\"/usr/share/nginx/html/weboffice/src\">src</abbr>/AppBundle/Controller/BaseEntityController.php at line 549&nbsp;\n    <a href=\"#\" onclick=\"toggle('trace-0-7'); switchIcons('icon-0-7-open', 'icon-0-7-close'); return false;\"><img class=\"toggle\" id=\"icon-0-7-close\" alt=\"-\" src=\"data:image/gif;base64,R0lGODlhEgASAMQSANft94TG57Hb8GS44ez1+mC24IvK6ePx+Wa44dXs92+942e54o3L6W2844/M6dnu+P/+/l614P///wAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACH5BAEAABIALAAAAAASABIAQAVCoCQBTBOd6Kk4gJhGBCTPxysJb44K0qD/ER/wlxjmisZkMqBEBW5NHrMZmVKvv9hMVsO+hE0EoNAstEYGxG9heIhCADs=\" style=\"display: none\" /><img class=\"toggle\" id=\"icon-0-7-open\" alt=\"+\" src=\"data:image/gif;base64,R0lGODlhEgASAMQTANft99/v+Ga44bHb8ITG52S44dXs9+z1+uPx+YvK6WC24G+944/M6W28443L6dnu+Ge54v/+/l614P///wAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACH5BAEAABMALAAAAAASABIAQAVS4DQBTiOd6LkwgJgeUSzHSDoNaZ4PU6FLgYBA5/vFID/DbylRGiNIZu74I0h1hNsVxbNuUV4d9SsZM2EzWe1qThVzwWFOAFCQFa1RQq6DJB4iIQA7\" style=\"display: inline\" /></a>    <div id=\"trace-0-7\" style=\"display: none\" class=\"trace\">\n        <ol start=\"546\"><li><code>&nbsp;&nbsp;&nbsp;&nbsp;{</code></li>\n<li><code>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style=\"color: #FF8000\">//&nbsp;Set&nbsp;configuration</span></code></li>\n<li><code>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style=\"color: #0000BB\">$this</span><span style=\"color: #007700\">-&gt;</span><span style=\"color: #0000BB\">flags</span><span style=\"color: #007700\">[</span><span style=\"color: #DD0000\">'hasForm'</span><span style=\"color: #007700\">]&nbsp;=&nbsp;</span><span style=\"color: #0000BB\">true</span><span style=\"color: #007700\">;</span></code></li>\n<li class=\"selected\"><code>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style=\"color: #0000BB\">$this</span><span style=\"color: #007700\">-&gt;</span><span style=\"color: #0000BB\">init</span><span style=\"color: #007700\">(</span><span style=\"color: #0000BB\">$request</span><span style=\"color: #007700\">);</span></code></li>\n<li><code></code></li>\n<li><code>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style=\"color: #FF8000\">//&nbsp;Get&nbsp;object</span></code></li>\n<li><code>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style=\"color: #0000BB\">$obj&nbsp;</span><span style=\"color: #007700\">=&nbsp;</span><span style=\"color: #0000BB\">$this</span><span style=\"color: #007700\">-&gt;</span><span style=\"color: #0000BB\">getObject</span><span style=\"color: #007700\">(</span><span style=\"color: #0000BB\">$id</span><span style=\"color: #007700\">);</span></code></li></ol>\n    </div>\n            </li>\n                    <li>\n                    at\n    <strong>\n        <abbr title=\"AppBundle\\Controller\\BaseEntityController\">BaseEntityController</abbr>\n        -&gt;editAction\n    </strong>\n    (<em>object</em>(<abbr title=\"Symfony\\Component\\HttpFoundation\\Request\">Request</abbr>), <em>null</em>)\n\n    <br />\n    in <abbr title=\"/usr/share/nginx/html/weboffice/src\">src</abbr>/CommonBundle/Controller/CountryController.php at line 104&nbsp;\n    <a href=\"#\" onclick=\"toggle('trace-0-8'); switchIcons('icon-0-8-open', 'icon-0-8-close'); return false;\"><img class=\"toggle\" id=\"icon-0-8-close\" alt=\"-\" src=\"data:image/gif;base64,R0lGODlhEgASAMQSANft94TG57Hb8GS44ez1+mC24IvK6ePx+Wa44dXs92+942e54o3L6W2844/M6dnu+P/+/l614P///wAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACH5BAEAABIALAAAAAASABIAQAVCoCQBTBOd6Kk4gJhGBCTPxysJb44K0qD/ER/wlxjmisZkMqBEBW5NHrMZmVKvv9hMVsO+hE0EoNAstEYGxG9heIhCADs=\" style=\"display: none\" /><img class=\"toggle\" id=\"icon-0-8-open\" alt=\"+\" src=\"data:image/gif;base64,R0lGODlhEgASAMQTANft99/v+Ga44bHb8ITG52S44dXs9+z1+uPx+YvK6WC24G+944/M6W28443L6dnu+Ge54v/+/l614P///wAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACH5BAEAABMALAAAAAASABIAQAVS4DQBTiOd6LkwgJgeUSzHSDoNaZ4PU6FLgYBA5/vFID/DbylRGiNIZu74I0h1hNsVxbNuUV4d9SsZM2EzWe1qThVzwWFOAFCQFa1RQq6DJB4iIQA7\" style=\"display: inline\" /></a>    <div id=\"trace-0-8\" style=\"display: none\" class=\"trace\">\n        <ol start=\"101\"><li><code>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;*/</code></li>\n<li><code>&nbsp;&nbsp;&nbsp;&nbsp;<span style=\"color: #007700\">public&nbsp;function&nbsp;</span><span style=\"color: #0000BB\">editAction</span><span style=\"color: #007700\">(</span><span style=\"color: #0000BB\">Request&nbsp;$request</span><span style=\"color: #007700\">,&nbsp;</span><span style=\"color: #0000BB\">$id</span><span style=\"color: #007700\">)</span></code></li>\n<li><code>&nbsp;&nbsp;&nbsp;&nbsp;{</code></li>\n<li class=\"selected\"><code>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;return&nbsp;<span style=\"color: #0000BB\">parent</span><span style=\"color: #007700\">::</span><span style=\"color: #0000BB\">editAction</span><span style=\"color: #007700\">(</span><span style=\"color: #0000BB\">$request</span><span style=\"color: #007700\">,&nbsp;</span><span style=\"color: #0000BB\">$id</span><span style=\"color: #007700\">);</span></code></li>\n<li><code>&nbsp;&nbsp;&nbsp;&nbsp;}</code></li>\n<li><code></code></li>\n<li><code>&nbsp;&nbsp;&nbsp;&nbsp;<span style=\"color: #FF8000\">/**</span></code></li></ol>\n    </div>\n            </li>\n                    <li>\n                    at\n    <strong>\n        <abbr title=\"CommonBundle\\Controller\\CountryController\">CountryController</abbr>\n        -&gt;editAction\n    </strong>\n    (<em>object</em>(<abbr title=\"Symfony\\Component\\HttpFoundation\\Request\">Request</abbr>), <em>null</em>)\n\n            </li>\n                    <li>\n                    at\n    <strong>\n        <abbr title=\"\"></abbr>\n        call_user_func_array\n    </strong>\n    (<em>array</em>(<em>object</em>(<abbr title=\"CommonBundle\\Controller\\CountryController\">CountryController</abbr>), 'editAction'), <em>array</em>(<em>object</em>(<abbr title=\"Symfony\\Component\\HttpFoundation\\Request\">Request</abbr>), <em>null</em>))\n\n    <br />\n    in <abbr title=\"/usr/share/nginx/html/weboffice/vendor\">vendor</abbr>/symfony/symfony/src/Symfony/Component/HttpKernel/HttpKernel.php at line 144&nbsp;\n    <a href=\"#\" onclick=\"toggle('trace-0-10'); switchIcons('icon-0-10-open', 'icon-0-10-close'); return false;\"><img class=\"toggle\" id=\"icon-0-10-close\" alt=\"-\" src=\"data:image/gif;base64,R0lGODlhEgASAMQSANft94TG57Hb8GS44ez1+mC24IvK6ePx+Wa44dXs92+942e54o3L6W2844/M6dnu+P/+/l614P///wAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACH5BAEAABIALAAAAAASABIAQAVCoCQBTBOd6Kk4gJhGBCTPxysJb44K0qD/ER/wlxjmisZkMqBEBW5NHrMZmVKvv9hMVsO+hE0EoNAstEYGxG9heIhCADs=\" style=\"display: none\" /><img class=\"toggle\" id=\"icon-0-10-open\" alt=\"+\" src=\"data:image/gif;base64,R0lGODlhEgASAMQTANft99/v+Ga44bHb8ITG52S44dXs9+z1+uPx+YvK6WC24G+944/M6W28443L6dnu+Ge54v/+/l614P///wAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACH5BAEAABMALAAAAAASABIAQAVS4DQBTiOd6LkwgJgeUSzHSDoNaZ4PU6FLgYBA5/vFID/DbylRGiNIZu74I0h1hNsVxbNuUV4d9SsZM2EzWe1qThVzwWFOAFCQFa1RQq6DJB4iIQA7\" style=\"display: inline\" /></a>    <div id=\"trace-0-10\" style=\"display: none\" class=\"trace\">\n        <ol start=\"141\"><li><code>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style=\"color: #0000BB\">$arguments&nbsp;</span><span style=\"color: #007700\">=&nbsp;</span><span style=\"color: #0000BB\">$this</span><span style=\"color: #007700\">-&gt;</span><span style=\"color: #0000BB\">resolver</span><span style=\"color: #007700\">-&gt;</span><span style=\"color: #0000BB\">getArguments</span><span style=\"color: #007700\">(</span><span style=\"color: #0000BB\">$request</span><span style=\"color: #007700\">,&nbsp;</span><span style=\"color: #0000BB\">$controller</span><span style=\"color: #007700\">);</span></code></li>\n<li><code></code></li>\n<li><code>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style=\"color: #FF8000\">//&nbsp;call&nbsp;controller</span></code></li>\n<li class=\"selected\"><code>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style=\"color: #0000BB\">$response&nbsp;</span><span style=\"color: #007700\">=&nbsp;</span><span style=\"color: #0000BB\">call_user_func_array</span><span style=\"color: #007700\">(</span><span style=\"color: #0000BB\">$controller</span><span style=\"color: #007700\">,&nbsp;</span><span style=\"color: #0000BB\">$arguments</span><span style=\"color: #007700\">);</span></code></li>\n<li><code></code></li>\n<li><code>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style=\"color: #FF8000\">//&nbsp;view</span></code></li>\n<li><code>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style=\"color: #007700\">if&nbsp;(!</span><span style=\"color: #0000BB\">$response&nbsp;</span><span style=\"color: #007700\">instanceof&nbsp;</span><span style=\"color: #0000BB\">Response</span><span style=\"color: #007700\">)&nbsp;{</span></code></li></ol>\n    </div>\n            </li>\n                    <li>\n                    at\n    <strong>\n        <abbr title=\"Symfony\\Component\\HttpKernel\\HttpKernel\">HttpKernel</abbr>\n        -&gt;handleRaw\n    </strong>\n    (<em>object</em>(<abbr title=\"Symfony\\Component\\HttpFoundation\\Request\">Request</abbr>), '1')\n\n    <br />\n    in <abbr title=\"/usr/share/nginx/html/weboffice/vendor\">vendor</abbr>/symfony/symfony/src/Symfony/Component/HttpKernel/HttpKernel.php at line 64&nbsp;\n    <a href=\"#\" onclick=\"toggle('trace-0-11'); switchIcons('icon-0-11-open', 'icon-0-11-close'); return false;\"><img class=\"toggle\" id=\"icon-0-11-close\" alt=\"-\" src=\"data:image/gif;base64,R0lGODlhEgASAMQSANft94TG57Hb8GS44ez1+mC24IvK6ePx+Wa44dXs92+942e54o3L6W2844/M6dnu+P/+/l614P///wAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACH5BAEAABIALAAAAAASABIAQAVCoCQBTBOd6Kk4gJhGBCTPxysJb44K0qD/ER/wlxjmisZkMqBEBW5NHrMZmVKvv9hMVsO+hE0EoNAstEYGxG9heIhCADs=\" style=\"display: none\" /><img class=\"toggle\" id=\"icon-0-11-open\" alt=\"+\" src=\"data:image/gif;base64,R0lGODlhEgASAMQTANft99/v+Ga44bHb8ITG52S44dXs9+z1+uPx+YvK6WC24G+944/M6W28443L6dnu+Ge54v/+/l614P///wAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACH5BAEAABMALAAAAAASABIAQAVS4DQBTiOd6LkwgJgeUSzHSDoNaZ4PU6FLgYBA5/vFID/DbylRGiNIZu74I0h1hNsVxbNuUV4d9SsZM2EzWe1qThVzwWFOAFCQFa1RQq6DJB4iIQA7\" style=\"display: inline\" /></a>    <div id=\"trace-0-11\" style=\"display: none\" class=\"trace\">\n        <ol start=\"61\"><li><code>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style=\"color: #0000BB\">$request</span><span style=\"color: #007700\">-&gt;</span><span style=\"color: #0000BB\">headers</span><span style=\"color: #007700\">-&gt;</span><span style=\"color: #0000BB\">set</span><span style=\"color: #007700\">(</span><span style=\"color: #DD0000\">'X-Php-Ob-Level'</span><span style=\"color: #007700\">,&nbsp;</span><span style=\"color: #0000BB\">ob_get_level</span><span style=\"color: #007700\">());</span></code></li>\n<li><code></code></li>\n<li><code>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;try&nbsp;{</code></li>\n<li class=\"selected\"><code>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;return&nbsp;<span style=\"color: #0000BB\">$this</span><span style=\"color: #007700\">-&gt;</span><span style=\"color: #0000BB\">handleRaw</span><span style=\"color: #007700\">(</span><span style=\"color: #0000BB\">$request</span><span style=\"color: #007700\">,&nbsp;</span><span style=\"color: #0000BB\">$type</span><span style=\"color: #007700\">);</span></code></li>\n<li><code>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;}&nbsp;catch&nbsp;(\\<span style=\"color: #0000BB\">Exception&nbsp;$e</span><span style=\"color: #007700\">)&nbsp;{</span></code></li>\n<li><code>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;if&nbsp;(<span style=\"color: #0000BB\">$e&nbsp;</span><span style=\"color: #007700\">instanceof&nbsp;</span><span style=\"color: #0000BB\">ConflictingHeadersException</span><span style=\"color: #007700\">)&nbsp;{</span></code></li>\n<li><code>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style=\"color: #0000BB\">$e&nbsp;</span><span style=\"color: #007700\">=&nbsp;new&nbsp;</span><span style=\"color: #0000BB\">BadRequestHttpException</span><span style=\"color: #007700\">(</span><span style=\"color: #DD0000\">'The&nbsp;request&nbsp;headers&nbsp;contain&nbsp;conflicting&nbsp;information&nbsp;regarding&nbsp;the&nbsp;origin&nbsp;of&nbsp;this&nbsp;request.'</span><span style=\"color: #007700\">,&nbsp;</span><span style=\"color: #0000BB\">$e</span><span style=\"color: #007700\">);</span></code></li></ol>\n    </div>\n            </li>\n                    <li>\n                    at\n    <strong>\n        <abbr title=\"Symfony\\Component\\HttpKernel\\HttpKernel\">HttpKernel</abbr>\n        -&gt;handle\n    </strong>\n    (<em>object</em>(<abbr title=\"Symfony\\Component\\HttpFoundation\\Request\">Request</abbr>), '1', <em>true</em>)\n\n    <br />\n    in <abbr title=\"/usr/share/nginx/html/weboffice/vendor\">vendor</abbr>/symfony/symfony/src/Symfony/Component/HttpKernel/Kernel.php at line 169&nbsp;\n    <a href=\"#\" onclick=\"toggle('trace-0-12'); switchIcons('icon-0-12-open', 'icon-0-12-close'); return false;\"><img class=\"toggle\" id=\"icon-0-12-close\" alt=\"-\" src=\"data:image/gif;base64,R0lGODlhEgASAMQSANft94TG57Hb8GS44ez1+mC24IvK6ePx+Wa44dXs92+942e54o3L6W2844/M6dnu+P/+/l614P///wAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACH5BAEAABIALAAAAAASABIAQAVCoCQBTBOd6Kk4gJhGBCTPxysJb44K0qD/ER/wlxjmisZkMqBEBW5NHrMZmVKvv9hMVsO+hE0EoNAstEYGxG9heIhCADs=\" style=\"display: none\" /><img class=\"toggle\" id=\"icon-0-12-open\" alt=\"+\" src=\"data:image/gif;base64,R0lGODlhEgASAMQTANft99/v+Ga44bHb8ITG52S44dXs9+z1+uPx+YvK6WC24G+944/M6W28443L6dnu+Ge54v/+/l614P///wAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACH5BAEAABMALAAAAAASABIAQAVS4DQBTiOd6LkwgJgeUSzHSDoNaZ4PU6FLgYBA5/vFID/DbylRGiNIZu74I0h1hNsVxbNuUV4d9SsZM2EzWe1qThVzwWFOAFCQFa1RQq6DJB4iIQA7\" style=\"display: inline\" /></a>    <div id=\"trace-0-12\" style=\"display: none\" class=\"trace\">\n        <ol start=\"166\"><li><code>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style=\"color: #0000BB\">$this</span><span style=\"color: #007700\">-&gt;</span><span style=\"color: #0000BB\">boot</span><span style=\"color: #007700\">();</span></code></li>\n<li><code>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;}</code></li>\n<li><code></code></li>\n<li class=\"selected\"><code>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;return&nbsp;<span style=\"color: #0000BB\">$this</span><span style=\"color: #007700\">-&gt;</span><span style=\"color: #0000BB\">getHttpKernel</span><span style=\"color: #007700\">()-&gt;</span><span style=\"color: #0000BB\">handle</span><span style=\"color: #007700\">(</span><span style=\"color: #0000BB\">$request</span><span style=\"color: #007700\">,&nbsp;</span><span style=\"color: #0000BB\">$type</span><span style=\"color: #007700\">,&nbsp;</span><span style=\"color: #0000BB\">$catch</span><span style=\"color: #007700\">);</span></code></li>\n<li><code>&nbsp;&nbsp;&nbsp;&nbsp;}</code></li>\n<li><code></code></li>\n<li><code>&nbsp;&nbsp;&nbsp;&nbsp;<span style=\"color: #FF8000\">/**</span></code></li></ol>\n    </div>\n            </li>\n                    <li>\n                    at\n    <strong>\n        <abbr title=\"Symfony\\Component\\HttpKernel\\Kernel\">Kernel</abbr>\n        -&gt;handle\n    </strong>\n    (<em>object</em>(<abbr title=\"Symfony\\Component\\HttpFoundation\\Request\">Request</abbr>))\n\n    <br />\n    in <abbr title=\"/usr/share/nginx/html/weboffice/web\">web</abbr>/app_dev.php at line 31&nbsp;\n    <a href=\"#\" onclick=\"toggle('trace-0-13'); switchIcons('icon-0-13-open', 'icon-0-13-close'); return false;\"><img class=\"toggle\" id=\"icon-0-13-close\" alt=\"-\" src=\"data:image/gif;base64,R0lGODlhEgASAMQSANft94TG57Hb8GS44ez1+mC24IvK6ePx+Wa44dXs92+942e54o3L6W2844/M6dnu+P/+/l614P///wAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACH5BAEAABIALAAAAAASABIAQAVCoCQBTBOd6Kk4gJhGBCTPxysJb44K0qD/ER/wlxjmisZkMqBEBW5NHrMZmVKvv9hMVsO+hE0EoNAstEYGxG9heIhCADs=\" style=\"display: none\" /><img class=\"toggle\" id=\"icon-0-13-open\" alt=\"+\" src=\"data:image/gif;base64,R0lGODlhEgASAMQTANft99/v+Ga44bHb8ITG52S44dXs9+z1+uPx+YvK6WC24G+944/M6W28443L6dnu+Ge54v/+/l614P///wAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACH5BAEAABMALAAAAAASABIAQAVS4DQBTiOd6LkwgJgeUSzHSDoNaZ4PU6FLgYBA5/vFID/DbylRGiNIZu74I0h1hNsVxbNuUV4d9SsZM2EzWe1qThVzwWFOAFCQFa1RQq6DJB4iIQA7\" style=\"display: inline\" /></a>    <div id=\"trace-0-13\" style=\"display: none\" class=\"trace\">\n        <ol start=\"28\"><li><code><span style=\"color: #0000BB\">$kernel&nbsp;</span><span style=\"color: #007700\">=&nbsp;new&nbsp;</span><span style=\"color: #0000BB\">AppKernel</span><span style=\"color: #007700\">(</span><span style=\"color: #DD0000\">'dev'</span><span style=\"color: #007700\">,&nbsp;</span><span style=\"color: #0000BB\">true</span><span style=\"color: #007700\">);</span></code></li>\n<li><code><span style=\"color: #0000BB\">$kernel</span><span style=\"color: #007700\">-&gt;</span><span style=\"color: #0000BB\">loadClassCache</span><span style=\"color: #007700\">();</span></code></li>\n<li><code><span style=\"color: #0000BB\">$request&nbsp;</span><span style=\"color: #007700\">=&nbsp;</span><span style=\"color: #0000BB\">Request</span><span style=\"color: #007700\">::</span><span style=\"color: #0000BB\">createFromGlobals</span><span style=\"color: #007700\">();</span></code></li>\n<li class=\"selected\"><code><span style=\"color: #0000BB\">$response&nbsp;</span><span style=\"color: #007700\">=&nbsp;</span><span style=\"color: #0000BB\">$kernel</span><span style=\"color: #007700\">-&gt;</span><span style=\"color: #0000BB\">handle</span><span style=\"color: #007700\">(</span><span style=\"color: #0000BB\">$request</span><span style=\"color: #007700\">);</span></code></li>\n<li><code><span style=\"color: #0000BB\">$response</span><span style=\"color: #007700\">-&gt;</span><span style=\"color: #0000BB\">send</span><span style=\"color: #007700\">();</span></code></li>\n<li><code><span style=\"color: #0000BB\">$kernel</span><span style=\"color: #007700\">-&gt;</span><span style=\"color: #0000BB\">terminate</span><span style=\"color: #007700\">(</span><span style=\"color: #0000BB\">$request</span><span style=\"color: #007700\">,&nbsp;</span><span style=\"color: #0000BB\">$response</span><span style=\"color: #007700\">);</span></code></li>\n<li><code>\n</code></li></ol>\n    </div>\n            </li>\n            </ol>\n</div>\n\n    <div class=\"block\">\n        <div class=\"logs clear-fix\">\n            <h2>\n                Logs&nbsp;\n                <a href=\"#\" onclick=\"toggle('logs'); switchIcons('icon-logs-open', 'icon-logs-close'); return false;\"><img class=\"toggle\" id=\"icon-logs-open\" alt=\"+\" src=\"data:image/gif;base64,R0lGODlhEgASAMQTANft99/v+Ga44bHb8ITG52S44dXs9+z1+uPx+YvK6WC24G+944/M6W28443L6dnu+Ge54v/+/l614P///wAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACH5BAEAABMALAAAAAASABIAQAVS4DQBTiOd6LkwgJgeUSzHSDoNaZ4PU6FLgYBA5/vFID/DbylRGiNIZu74I0h1hNsVxbNuUV4d9SsZM2EzWe1qThVzwWFOAFCQFa1RQq6DJB4iIQA7\" style=\"display: none\" /><img class=\"toggle\" id=\"icon-logs-close\" alt=\"-\" src=\"data:image/gif;base64,R0lGODlhEgASAMQSANft94TG57Hb8GS44ez1+mC24IvK6ePx+Wa44dXs92+942e54o3L6W2844/M6dnu+P/+/l614P///wAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACH5BAEAABIALAAAAAASABIAQAVCoCQBTBOd6Kk4gJhGBCTPxysJb44K0qD/ER/wlxjmisZkMqBEBW5NHrMZmVKvv9hMVsO+hE0EoNAstEYGxG9heIhCADs=\" style=\"display: inline\" /></a></h2>\n                            <div class=\"error-count\">\n                    <span>\n                        1 error\n                    </span>\n                </div>\n                    </div>\n\n        <div id=\"logs\">\n            <ol class=\"traces logs\">\n            <li>\n            INFO - Using &quot;filename&quot; as the default strategy is deprecated since version 1.27. Use &quot;name&quot; instead.\n        </li>\n            <li>\n            INFO - Referencing the &quot;core&quot; extension by its name (defined by getName()) is deprecated since 1.26 and will be removed in Twig 2.0. Use the Fully Qualified Extension Class Name instead.\n        </li>\n            <li>\n            INFO - Referencing the &quot;core&quot; extension by its name (defined by getName()) is deprecated since 1.26 and will be removed in Twig 2.0. Use the Fully Qualified Extension Class Name instead.\n        </li>\n            <li>\n            INFO - The Twig_Function_Method class is deprecated since version 1.12 and will be removed in 2.0. Use Twig_SimpleFunction instead.\n        </li>\n            <li>\n            INFO - The Twig_Function class is deprecated since version 1.12 and will be removed in 2.0. Use Twig_SimpleFunction instead.\n        </li>\n            <li>\n            INFO - Using an instance of &quot;Twig_Function_Method&quot; for function &quot;asset_exists&quot; is deprecated since version 1.21. Use Twig_SimpleFunction instead.\n        </li>\n            <li>\n            INFO - Matched route &quot;_common__country__edit&quot;.\n        </li>\n            <li>\n            DEBUG - Read existing security token from the session.\n        </li>\n            <li>\n            DEBUG - SELECT t0.name AS name_1, t0.dbHost AS dbHost_2, t0.dbName AS dbName_3, t0.dbUsername AS dbUsername_4, t0.dbPassword AS dbPassword_5, t0.id AS id_6, t0.insertTime AS insertTime_7, t0.insertUser AS insertUser_8, t0.isEnabled AS isEnabled_9 FROM wo_app.app_system t0 WHERE t0.id = ?\n        </li>\n            <li>\n            DEBUG - SELECT u0_.username AS username_0, u0_.password AS password_1, u0_.role AS role_2, u0_.isActive AS isActive_3, u0_.id AS id_4, u0_.insertTime AS insertTime_5, u0_.insertUser AS insertUser_6, u0_.isEnabled AS isEnabled_7, u0_.fk_entity AS fk_entity_8, u0_.fkApp_language AS fkApp_language_9 FROM user u0_ WHERE u0_.username = ? AND u0_.password &lt;&gt; ?\n        </li>\n            <li>\n            DEBUG - User was reloaded from a user provider.\n        </li>\n            <li>\n            DEBUG - Notified event &quot;kernel.request&quot; to listener &quot;Symfony\\Component\\HttpKernel\\EventListener\\DebugHandlersListener::configure&quot;.\n        </li>\n            <li>\n            DEBUG - Notified event &quot;kernel.request&quot; to listener &quot;Symfony\\Component\\HttpKernel\\EventListener\\DumpListener::configure&quot;.\n        </li>\n            <li>\n            DEBUG - Notified event &quot;kernel.request&quot; to listener &quot;Symfony\\Component\\HttpKernel\\EventListener\\ValidateRequestListener::onKernelRequest&quot;.\n        </li>\n            <li>\n            DEBUG - Notified event &quot;kernel.request&quot; to listener &quot;Symfony\\Bundle\\FrameworkBundle\\EventListener\\SessionListener::onKernelRequest&quot;.\n        </li>\n            <li>\n            DEBUG - Notified event &quot;kernel.request&quot; to listener &quot;Symfony\\Component\\HttpKernel\\EventListener\\FragmentListener::onKernelRequest&quot;.\n        </li>\n            <li>\n            DEBUG - Notified event &quot;kernel.request&quot; to listener &quot;Symfony\\Component\\HttpKernel\\EventListener\\RouterListener::onKernelRequest&quot;.\n        </li>\n            <li>\n            DEBUG - Notified event &quot;kernel.request&quot; to listener &quot;Symfony\\Component\\HttpKernel\\EventListener\\LocaleListener::onKernelRequest&quot;.\n        </li>\n            <li>\n            DEBUG - Notified event &quot;kernel.request&quot; to listener &quot;Symfony\\Component\\HttpKernel\\EventListener\\TranslatorListener::onKernelRequest&quot;.\n        </li>\n            <li>\n            DEBUG - Notified event &quot;kernel.request&quot; to listener &quot;Symfony\\Component\\Security\\Http\\Firewall::onKernelRequest&quot;.\n        </li>\n            <li>\n            DEBUG - Notified event &quot;kernel.request&quot; to listener &quot;Symfony\\Bundle\\AsseticBundle\\EventListener\\RequestListener::onKernelRequest&quot;.\n        </li>\n            <li>\n            DEBUG - Notified event &quot;kernel.controller&quot; to listener &quot;Symfony\\Bundle\\FrameworkBundle\\DataCollector\\RouterDataCollector::onKernelController&quot;.\n        </li>\n            <li>\n            DEBUG - Notified event &quot;kernel.controller&quot; to listener &quot;Symfony\\Component\\HttpKernel\\DataCollector\\RequestDataCollector::onKernelController&quot;.\n        </li>\n            <li>\n            DEBUG - Notified event &quot;kernel.controller&quot; to listener &quot;Sensio\\Bundle\\FrameworkExtraBundle\\EventListener\\ControllerListener::onKernelController&quot;.\n        </li>\n            <li>\n            DEBUG - Notified event &quot;kernel.controller&quot; to listener &quot;Sensio\\Bundle\\FrameworkExtraBundle\\EventListener\\ParamConverterListener::onKernelController&quot;.\n        </li>\n            <li>\n            DEBUG - Notified event &quot;kernel.controller&quot; to listener &quot;Sensio\\Bundle\\FrameworkExtraBundle\\EventListener\\HttpCacheListener::onKernelController&quot;.\n        </li>\n            <li>\n            DEBUG - Notified event &quot;kernel.controller&quot; to listener &quot;Sensio\\Bundle\\FrameworkExtraBundle\\EventListener\\SecurityListener::onKernelController&quot;.\n        </li>\n            <li>\n            DEBUG - Notified event &quot;kernel.controller&quot; to listener &quot;Sensio\\Bundle\\FrameworkExtraBundle\\EventListener\\TemplateListener::onKernelController&quot;.\n        </li>\n            <li class=\"error\">\n            CRITICAL - Uncaught PHP Exception Symfony\\Component\\DependencyInjection\\Exception\\ServiceNotFoundException: &quot;You have requested a non-existent service &quot;common.service.repository&quot;. Did you mean one of these: &quot;sysadmin.service.repository&quot;, &quot;login.service.repository&quot;?&quot; at /usr/share/nginx/html/weboffice/vendor/symfony/symfony/src/Symfony/Component/DependencyInjection/Container.php line 266\n        </li>\n            <li>\n            DEBUG - Notified event &quot;kernel.request&quot; to listener &quot;Symfony\\Component\\HttpKernel\\EventListener\\DebugHandlersListener::configure&quot;.\n        </li>\n            <li>\n            DEBUG - Notified event &quot;kernel.request&quot; to listener &quot;Symfony\\Component\\HttpKernel\\EventListener\\DumpListener::configure&quot;.\n        </li>\n            <li>\n            DEBUG - Notified event &quot;kernel.request&quot; to listener &quot;Symfony\\Component\\HttpKernel\\EventListener\\ValidateRequestListener::onKernelRequest&quot;.\n        </li>\n            <li>\n            DEBUG - Notified event &quot;kernel.request&quot; to listener &quot;Symfony\\Bundle\\FrameworkBundle\\EventListener\\SessionListener::onKernelRequest&quot;.\n        </li>\n            <li>\n            DEBUG - Notified event &quot;kernel.request&quot; to listener &quot;Symfony\\Component\\HttpKernel\\EventListener\\FragmentListener::onKernelRequest&quot;.\n        </li>\n            <li>\n            DEBUG - Notified event &quot;kernel.request&quot; to listener &quot;Symfony\\Component\\HttpKernel\\EventListener\\RouterListener::onKernelRequest&quot;.\n        </li>\n            <li>\n            DEBUG - Notified event &quot;kernel.request&quot; to listener &quot;Symfony\\Component\\HttpKernel\\EventListener\\LocaleListener::onKernelRequest&quot;.\n        </li>\n            <li>\n            DEBUG - Notified event &quot;kernel.request&quot; to listener &quot;Symfony\\Component\\HttpKernel\\EventListener\\TranslatorListener::onKernelRequest&quot;.\n        </li>\n            <li>\n            DEBUG - Notified event &quot;kernel.request&quot; to listener &quot;Symfony\\Component\\Security\\Http\\Firewall::onKernelRequest&quot;.\n        </li>\n            <li>\n            DEBUG - Notified event &quot;kernel.request&quot; to listener &quot;Symfony\\Bundle\\AsseticBundle\\EventListener\\RequestListener::onKernelRequest&quot;.\n        </li>\n            <li>\n            DEBUG - Notified event &quot;kernel.controller&quot; to listener &quot;Symfony\\Bundle\\FrameworkBundle\\DataCollector\\RouterDataCollector::onKernelController&quot;.\n        </li>\n            <li>\n            DEBUG - Notified event &quot;kernel.controller&quot; to listener &quot;Symfony\\Component\\HttpKernel\\DataCollector\\RequestDataCollector::onKernelController&quot;.\n        </li>\n            <li>\n            DEBUG - Notified event &quot;kernel.controller&quot; to listener &quot;Sensio\\Bundle\\FrameworkExtraBundle\\EventListener\\ControllerListener::onKernelController&quot;.\n        </li>\n            <li>\n            DEBUG - Notified event &quot;kernel.controller&quot; to listener &quot;Sensio\\Bundle\\FrameworkExtraBundle\\EventListener\\ParamConverterListener::onKernelController&quot;.\n        </li>\n            <li>\n            DEBUG - Notified event &quot;kernel.controller&quot; to listener &quot;Sensio\\Bundle\\FrameworkExtraBundle\\EventListener\\HttpCacheListener::onKernelController&quot;.\n        </li>\n            <li>\n            DEBUG - Notified event &quot;kernel.controller&quot; to listener &quot;Sensio\\Bundle\\FrameworkExtraBundle\\EventListener\\SecurityListener::onKernelController&quot;.\n        </li>\n            <li>\n            DEBUG - Notified event &quot;kernel.controller&quot; to listener &quot;Sensio\\Bundle\\FrameworkExtraBundle\\EventListener\\TemplateListener::onKernelController&quot;.\n        </li>\n            <li>\n            INFO - Defining the getGlobals() method in the &quot;appConf&quot; extension without explicitly implementing Twig_Extension_GlobalsInterface is deprecated since version 1.23.\n        </li>\n    </ol>\n        </div>\n    </div>\n\n\n<div class=\"block\">\n    <h2>\n        Stack Trace (Plain Text)&nbsp;\n        <a href=\"#\" onclick=\"toggle('traces-text'); switchIcons('icon-traces-text-open', 'icon-traces-text-close'); return false;\"><img class=\"toggle\" id=\"icon-traces-text-close\" alt=\"-\" src=\"data:image/gif;base64,R0lGODlhEgASAMQSANft94TG57Hb8GS44ez1+mC24IvK6ePx+Wa44dXs92+942e54o3L6W2844/M6dnu+P/+/l614P///wAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACH5BAEAABIALAAAAAASABIAQAVCoCQBTBOd6Kk4gJhGBCTPxysJb44K0qD/ER/wlxjmisZkMqBEBW5NHrMZmVKvv9hMVsO+hE0EoNAstEYGxG9heIhCADs=\" style=\"display: none\" /><img class=\"toggle\" id=\"icon-traces-text-open\" alt=\"+\" src=\"data:image/gif;base64,R0lGODlhEgASAMQTANft99/v+Ga44bHb8ITG52S44dXs9+z1+uPx+YvK6WC24G+944/M6W28443L6dnu+Ge54v/+/l614P///wAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACH5BAEAABMALAAAAAASABIAQAVS4DQBTiOd6LkwgJgeUSzHSDoNaZ4PU6FLgYBA5/vFID/DbylRGiNIZu74I0h1hNsVxbNuUV4d9SsZM2EzWe1qThVzwWFOAFCQFa1RQq6DJB4iIQA7\" style=\"display: inline\" /></a>    </h2>\n\n    <div id=\"traces-text\" class=\"trace\" style=\"display: none;\">\n<pre>[1] Symfony\\Component\\DependencyInjection\\Exception\\ServiceNotFoundException: You have requested a non-existent service &quot;common.service.repository&quot;. Did you mean one of these: &quot;sysadmin.service.repository&quot;, &quot;login.service.repository&quot;?\n    at n/a\n        in /usr/share/nginx/html/weboffice/vendor/symfony/symfony/src/Symfony/Component/DependencyInjection/Container.php line 266\n\n    at Symfony\\Component\\DependencyInjection\\Container->get('common.service.repository')\n        in /usr/share/nginx/html/weboffice/vendor/symfony/symfony/src/Symfony/Bundle/FrameworkBundle/Controller/Controller.php line 363\n\n    at Symfony\\Bundle\\FrameworkBundle\\Controller\\Controller->get('common.service.repository')\n        in /usr/share/nginx/html/weboffice/src/AppBundle/Controller/BaseEntityController.php line 1703\n\n    at AppBundle\\Controller\\BaseEntityController->getRepositoryService('Country', 'CommonBundle')\n        in /usr/share/nginx/html/weboffice/src/AppBundle/Controller/BaseEntityController.php line 1717\n\n    at AppBundle\\Controller\\BaseEntityController->getLocalRepositoryService()\n        in /usr/share/nginx/html/weboffice/src/AppBundle/Controller/BaseEntityController.php line 78\n\n    at AppBundle\\Controller\\BaseEntityController->setLocalConf()\n        in /usr/share/nginx/html/weboffice/src/AppBundle/Controller/BaseEntityController.php line 31\n\n    at AppBundle\\Controller\\BaseEntityController->init(object(Request))\n        in /usr/share/nginx/html/weboffice/src/CommonBundle/Controller/CountryController.php line 38\n\n    at CommonBundle\\Controller\\CountryController->init(object(Request))\n        in /usr/share/nginx/html/weboffice/src/AppBundle/Controller/BaseEntityController.php line 549\n\n    at AppBundle\\Controller\\BaseEntityController->editAction(object(Request), null)\n        in /usr/share/nginx/html/weboffice/src/CommonBundle/Controller/CountryController.php line 104\n\n    at CommonBundle\\Controller\\CountryController->editAction(object(Request), null)\n        in  line \n\n    at call_user_func_array(array(object(CountryController), 'editAction'), array(object(Request), null))\n        in /usr/share/nginx/html/weboffice/vendor/symfony/symfony/src/Symfony/Component/HttpKernel/HttpKernel.php line 144\n\n    at Symfony\\Component\\HttpKernel\\HttpKernel->handleRaw(object(Request), '1')\n        in /usr/share/nginx/html/weboffice/vendor/symfony/symfony/src/Symfony/Component/HttpKernel/HttpKernel.php line 64\n\n    at Symfony\\Component\\HttpKernel\\HttpKernel->handle(object(Request), '1', true)\n        in /usr/share/nginx/html/weboffice/vendor/symfony/symfony/src/Symfony/Component/HttpKernel/Kernel.php line 169\n\n    at Symfony\\Component\\HttpKernel\\Kernel->handle(object(Request))\n        in /usr/share/nginx/html/weboffice/web/app_dev.php line 31\n\n</pre>\n    </div>\n</div>\n\n<script type=\"text/javascript\">//<![CDATA[\n    function toggle(id, clazz) {\n        var el = document.getElementById(id),\n            current = el.style.display,\n            i;\n\n        if (clazz) {\n            var tags = document.getElementsByTagName('*');\n            for (i = tags.length - 1; i >= 0; i--) {\n                if (tags[i].className === clazz) {\n                    tags[i].style.display = 'none';\n                }\n            }\n        }\n\n        el.style.display = current === 'none' ? 'block' : 'none';\n    }\n\n    function switchIcons(id1, id2) {\n        var icon1, icon2, display1, display2;\n\n        icon1 = document.getElementById(id1);\n        icon2 = document.getElementById(id2);\n\n        display1 = icon1.style.display;\n        display2 = icon2.style.display;\n\n        icon1.style.display = display2;\n        icon2.style.display = display1;\n    }\n//]]></script>\n            </div>\n        </div>\n    </body>\n</html>\n"

/***/ }),

/***/ "../../../../../src/CommonBundle/Resources/public/place/index/ts/src/edit.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EditComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__AppBundle_Resources_public_form_ts_form_popup_extension_component__ = __webpack_require__("../../../../../src/AppBundle/Resources/public/form/ts/form-popup.extension-component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__AppBundle_Resources_public_form_ts_form_service__ = __webpack_require__("../../../../../src/AppBundle/Resources/public/form/ts/form.service.ts");
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};



var EditComponent = (function (_super) {
    __extends(EditComponent, _super);
    function EditComponent(elementRef, renderer, provider, formService, dataService) {
        var _this = _super.call(this) || this;
        _super.prototype.initFormPopupExtensionComponent.call(_this, elementRef, renderer, provider, formService, dataService);
        return _this;
    }
    EditComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: '#js_placeFormPopup',
            template: __webpack_require__("../../../../../src/CommonBundle/Resources/public/place/index/ts/templates/edit.component.html")
        }),
        __param(2, Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["y" /* Inject */])('Provider')),
        __param(4, Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["y" /* Inject */])('DataService')),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_core__["t" /* ElementRef */],
            __WEBPACK_IMPORTED_MODULE_0__angular_core__["U" /* Renderer */], Object, __WEBPACK_IMPORTED_MODULE_2__AppBundle_Resources_public_form_ts_form_service__["a" /* FormService */], Object])
    ], EditComponent);
    return EditComponent;
}(__WEBPACK_IMPORTED_MODULE_1__AppBundle_Resources_public_form_ts_form_popup_extension_component__["a" /* FormPopupExtensionComponent */]));



/***/ }),

/***/ "../../../../../src/CommonBundle/Resources/public/place/index/ts/src/edit.ext-module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EditExtModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("../../../common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__AppBundle_Resources_public_form_ts_field_types_field_types_extension_module__ = __webpack_require__("../../../../../src/AppBundle/Resources/public/form/ts/field-types/field-types.extension-module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__edit_component__ = __webpack_require__("../../../../../src/CommonBundle/Resources/public/place/index/ts/src/edit.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





var EditExtModule = (function () {
    function EditExtModule() {
    }
    EditExtModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["H" /* NgModule */])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_common__["a" /* CommonModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_forms__["b" /* FormsModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_forms__["e" /* ReactiveFormsModule */],
                __WEBPACK_IMPORTED_MODULE_3__AppBundle_Resources_public_form_ts_field_types_field_types_extension_module__["a" /* FieldTypesExtensionModule */]
            ],
            declarations: [
                __WEBPACK_IMPORTED_MODULE_4__edit_component__["a" /* EditComponent */]
            ],
            exports: [__WEBPACK_IMPORTED_MODULE_4__edit_component__["a" /* EditComponent */]]
        })
    ], EditExtModule);
    return EditExtModule;
}());



/***/ }),

/***/ "../../../../../src/CommonBundle/Resources/public/place/index/ts/templates/edit.component.html":
/***/ (function(module, exports) {

module.exports = "<!DOCTYPE html>\n<html>\n    <head>\n        <meta charset=\"UTF-8\" />\n        <meta name=\"robots\" content=\"noindex,nofollow\" />\n        <title>    You have requested a non-existent service &quot;common.service.repository&quot;. Did you mean one of these: &quot;sysadmin.service.repository&quot;, &quot;login.service.repository&quot;? (500 Internal Server Error)\n</title>\n        <link href=\"http://weboffice.whs.dev.com/bundles/framework/css/structure.css\" rel=\"stylesheet\" />\n        <link href=\"http://weboffice.whs.dev.com/bundles/framework/css/body.css\" rel=\"stylesheet\" />\n            <link href=\"http://weboffice.whs.dev.com/bundles/framework/css/exception.css\" rel=\"stylesheet\" type=\"text/css\" media=\"all\" />\n    </head>\n    <body>\n        <div id=\"content\">\n            <div class=\"header clear-fix\">\n                <div class=\"header-logo\">\n                    <img src=\"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAALYAAAA+CAMAAACxzRGDAAAAUVBMVEX////Ly8yko6WLioxkYmVXVVkwLjLl5eWxsLJKSEzy8vJxcHLY2Ni+vb89Oz9XVVh+fH+Yl5n///+xsbLY2Nlxb3KkpKWXlph+fX+LiYy+vr/IZP61AAAAAXRSTlMAQObYZgAABRBJREFUeNrVmtuWoyAQRS1FEEQSzQU7//+hYxUiXsKQZLJWM+chsUloN+WhCuguYoKyYqzmvGasKqH4HyRKxndipcgcumH8qViTM7TkUclcwaHmf5XM0eWq4km1KjdqXfMXJHVe1J3hL8lk5fCGv6wmT+o0d87U+XNrk0Y9nfv+7LM6ZJH5ZBL6LAbSxQ3Q5FDr22Skr8PQSy4n7isnsQxSX4r6pobhjCHHeDNOKrO3yGmCvZOjV9jmt8ulTdXFKdbKLNh+kOMvBzuVRa4Y7MUsdEUSWQe7xxCfZmcwjHU83LqzFvSbJQOXQvptbPnEFoyZtUUGwTeKuLuTHyT1kaP0P6cR01OKvv448gtl61dqZfmJezQmU/t+1R2fJLtBwXV6uWGwB9SZPrn0fKO2WAvQN1PUhHjTom3xgXYTkvlSKHs19OhslETq6X3HrXbjt8XbGj9b4Gi+lUAnL6XxQj8Pyk9N4Bt1xUrsLVN/3isYMug8rODMdbgOvoHs8uAb2fcANIAzkKCLYy+AXRpSU8sr1r4P67xhLgPp7vM32zlqt7Bhq2fI1Hwp+VgANxok59SsGV3oqdUL0YVDMRY7Yg8QLbVUU4NZNoOq5hJHuxEM28Sh/IyUZ8D3reR+yc58EGvOy2U0HQL6G9V+kWyEWHmzaMx6t4o9RhOm/riUiYrzqij4Ptqkn7AaCXqc+F47m04ahfde7YIz8RHEBN6BdVwdIGRVdNbKqYu1Hc0x0wBY4wqC8+XUgBGnj81SZsQB+0yAS1x/BlI/6ebHHk0lauQLuPDpu6EwAVJ7T0rl2uXa23jcqNyOZekhqYHRz3JOANrF4wCCmEs1f9D1lUe0n4NAATed80Y5e0Q7CO2TezM/BR6wKdgQzKbCF4uOQC3Bk0fKAzbFlyRWg3gksA/gmm7eOjrpaKX7fHlEW2xLbE6GZsPiCiShVzN7RG2xTz2G+OJtEqzdJ7APxy3MrSsV0VukXbKMp9lhs5BN6dr3CN+sySUaoxGwfRUM3I/gdPYONgVU+PLX4vUWm32AvUySarbONvcpV2RQEPKKjEBHFk01kQDGRblnn8ZuE9g+JUl8OWAPbkFK2K6JxhJVvF47FzYYnAN22ttwxKYCoH36rheEB7KG/HF/YUaa2G5JF+55tpyrl7B1WHM39HuP2N2EXPl1UBu8vbj4OjvD+NoTE4ssF+ScARgaJY1N7+u8bY/Y9BSM5PKwJbvMVab32YP5FB5TtcYVrGoASolVLTzI7kVsYVxRtAb5n2JXq1vCdtd47XtYItynrN0835PasLg0y13aOPbmPI+on2Lr9e5tjSHvgkAvclUjL3Fsdaw03IzgTR62yYClk7QMah4IQ0qSsoYYbOix6zJR1ZGDNMOY3Bb6W5S6jiyovep3t7bUPyoq7OkjYumrfESp8zSBc/OLosVf+nTnnKjsqR16++WDwpI8FxJWRFTlI6NKnqYJaL96TqjAbo9Toi5QiWBDcmfdFV+T8dkvFe5bItgstbM2X6QG2mVun+cazfRwOS0eiaeRRJKgLfc3BQAqfnhJyz8lfR6580SF/FXVu83Nz1xrrnFqqXL6Qxl47DNSm4RFflvN5sABDD8peouqLLKQXVdGbnqf+qIpOxON4ZyYdJEJ6sy4zS2c5eRPTT4Jyp46qDE5/ptAWqJOQ9e6yE82FXBbZCk1/tXVoshVoopE3CB0zmraI3nbqCJ/gW3ZMgtbC5nh/QHlOoOZBxQCRgAAAABJRU5ErkJggg==\" alt=\"Symfony\" />\n                </div>\n\n                <div class=\"search\">\n                    <form method=\"get\" action=\"https://symfony.com/search\" target=\"_blank\">\n                        <div class=\"form-row\">\n                            <label for=\"search-id\">\n                                <img src=\"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAQAAAC1+jfqAAABUElEQVQoz2NgAIJ29iBdD0d7X2cPb+tY2f9MDMjgP2O2hKu7vS8CBlisZUNSMJ3fxRMkXO61wm2ue6I3iB1q8Z8ZriDZFCS03fm/wX+1/xp/TBo8QPxeqf+MUAW+QIFKj/+q/wX/c/3n/i/6Qd/bx943z/Q/K1SBI1D9fKv/AhCn/Wf5L5EHdFGKw39OqAIXoPpOMziX4T9/DFBBnuN/HqhAEtCKCNf/XDA/rZRyAmrpsvrPDVUw3wrkqCiLaewg6TohX1d7X0ffs5r/OaAKfinmgt3t4ulr4+Xg4ANip3j+l/zPArNT4LNOD0pAgWCSOUIBy3+h/+pXbBa5tni0eMx23+/mB1YSYnENroT5Pw/QSOX/mkCo+l/jgo0v2KJA643s8PgAmsMBDCbu/5xALHPB2husxN9uCzsDOgAq5kAoaZVnYMCh5Ky1r88Eh/+iABM8jUk7ClYIAAAAAElFTkSuQmCC\" alt=\"Search on Symfony website\" />\n                            </label>\n\n                            <input name=\"q\" id=\"search-id\" type=\"search\" placeholder=\"Search on Symfony website\" />\n\n                            <button type=\"submit\" class=\"sf-button\">\n                                <span class=\"border-l\">\n                                    <span class=\"border-r\">\n                                        <span class=\"btn-bg\">OK</span>\n                                    </span>\n                                </span>\n                            </button>\n                        </div>\n                   </form>\n                </div>\n            </div>\n\n            <div class=\"sf-reset\">\n                    <div class=\"block-exception\">\n    <div class=\"block-exception-detected clear-fix\">\n        <div class=\"illustration-exception\">\n            <img alt=\"Exception detected!\" src=\"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAHAAAAB8CAMAAACG/MQCAAADAFBMVEX29vbt8eLn7tTY5rPT46nI3ZHC2oO51XDH3I3J3pPe6cHy9O7y9Ozg6sXQ4aLA2X+w0FyqzU6202jF24nV5K3k7M7q8NzS46a/2Xqv0FrD24Xb6Lvw8+jx8+rU5Ku31Gz19vTl7dHE24eszlLN4Jvj7My913js8eDo7ta813arzVC61nLz9fCuz1bZ57br8N631Wnc6L2tz1S102ay0WDh68r09fLO4J3L4JOx0V3a6bL////k78fX5bC002PI34z8/fnS5aHV5qjt9Nro8c/F3Ybp79qx0V7d67i713Gz0mGy0l/2+uzy9+Tc6raw0Vrp8tHH3ori7sPn8c2v0Fj9/vv1+erw9uDB2374+/DA2nzX56zm8Mvx9+K+2XjP45vq89PT5aPZ6bD+/v3Y6K7s9Ne82HPW56rf7LyrzlDK3pbD3IK21Gfu9dzr89XM4ZW92Ha61m/3+u7E3ITC24Cuz1jQ4535+/PO4pnG3Yj0+eje7LrJ34+51m36/PX7/ffv9t7j78XK4JHh7cHN4pfR5J+41Wvz+Obb6rTg7b7G3Iva57nP4Z+71nTU5qW+2HnI3Y/B2oHh6sfp79ju8uSz0mLf6cPv8ua/2X200mT29vbl5eW+vr6SkpJoaGhkZGREREQ/Pz9YWFh7e3uoqKjU1NTy8vK1tbVmZmZKSkqOjo7e3t7w8PCamppMTExzc3PX19fQ0NBbW1ucnJygoKBBQUFgYGDh4eHj4+NjY2OMjIyIiIh1dXV3d3e8vLxwcHDn5+f8/Pz7+/vZ2dldXV34+Pj6+vpGRkbq6ur5+fn39/f19fWGhoZRUVHb29uKiopqamrMzMxISEjp6ens7OyUlJSkpKSCgoLExMTa2trx8fGysrLCwsLr6+vBwcH09PTHx8dTU1OYmJienp5OTk6srKyvr6+AgIDt7e3KysqXl5dubm7Y2NiEhITPz8/R0dHS0tKQkJDz8/NVVVXi4uKxsbFsbGyioqJWVlarq6t+fn59fX3c3Nzv7++6urq4uLhQzU1ZAAAAAXRSTlMAQObYZgAACuNJREFUeNrtmX1cFWUWx8dcU9wyj72Brpt1215UisA24JQgYAsKggmISvhyEbkJQkgQmoCBmW3Zm9vujoo+YIj4UiqQGaVcHfSOr1ipWZZllmWbprm71lZ7nvF+7n2QvThzmfhrv3/APDPw/J5z5pznnJmRdNDliq6/6dbtyu6cHt18uva84rfSr8VVV/e6pje0pc+1111vvtoNN/pCO/j17fc7E9X6//4muDzX9BxgjtzNt1hAH71vNcHMP9wGBrB0u71jcnfcCQYZ6NO/A3HpMxCM49fVW72efuAdg27wRm6wD3iN/13G9e4OgI5w7WCjwekHHWOQsQy5JxA6StDdBvT6gQn01h86PQeCGQzpolPvXguYQ5C++3i7H5jFbXq28z92B/O4T4egD5jJ1ZfVux4M4x8c4jlwLteBDPDCoaF4v/dOfQCMMBQ4YeHDwEVgRGTUcLFCPth+xPwJDBCNMcAZMQJgZHRs3Kh4gAQkRou7aruCXcEID+GY6Mi4iMSkOIhPRmJsYgqOGz8Bk8WK3F76D+gDAimpD6d56CQmRk2a7A9TkDPGglZLOk4NyBiL04IxE2xWTAQ3j7S3x4DAMEQME0SmZwEMj7JmB4NlEhJx8RNxRk7uowB5OHQGjgeYiQn5mAqQjGJte6ydStUD3BRg+DQKipBEMjXTAr6FmA05yMl/HPOKwmZhehGfffRsWzamReETQJfHzMGxADMwBQTu8exRPyHaipEHm39JKUAqTg8pwdIwSzEOm4ux8XPxSQBfjMxAuliKGfdjWAEWRoQmYVgiFgKU0XVdYXMzuMnFkpwJ0eWWcMyIj8W0eRhlg6dwfj6Gx0AqX8t4LA0Mt4aFWa0jQ3Ge7X4kMm2QOgYgAkNBwM+j4HXgZjpyxsEoRCs+bKE5AYKwMGbSTJ4OE2HmfEyHaUg8DTk0huHR0XRJIw2TFtCxC4+F8RlwMwetsyfnBIElFhHnjyzHUkqySCwtKCiAyZhOUjMSAcqzpxYAwKPQmqeRPOvmz54ExW3NNgunATEeS0LjMNQ/Ga2RuVl5SAx9Ah/yTS0IBM+k5OQKo2c9CfYGgZmUYQX5lmmk+yjGQRalQjkkTowOHU7xMhWM8IwnQWjFk8WIGBxMN8/2EN8sQ1zJlYXJYARffYIQP2zB00GWDGiDLS4KjHCnR0FTyC2LT0nKAYGbfl3BaCwPxjIQeM6ToAXMYCFOSMFJIPC85yg1zIhL7/voGDIvAGfp2tsGgVGmoDOmbNNDC54CvsXHknn+mAR68vAFMEYiZGJU9KTsKeA/BhGtRfGFOH8mN68QR+opF9dBG4rGuWrwAlerFBLDmxmqtxERyEmAdMzLpKTNwSgLcPMSwuPBzYN6qoWTCehqkIpxes6wUVkQOJc0yvznhOO4omCM1EpwMqY9jKnAtyWwJWGgJQvc9PZcD4fApZTjKIDAouiFATAWOenUyZTEIvouwDIbpJB1kJ9pScIM61h/GE3bPBRgHMzDCCFmdHfduenlM2ndI7NJKCk/FWdFpweHZGFJ7ixcAKW8ZQvA+bxR852EmTGJVFri0EqLKYLZOFu4hTp7GsixYl4MlkIZzi9DHD0KHwdIi0nBqeUYaYEo7mxbIQYXFWNARjgS+TCCgie5iHzia3M35oPb6dqCwE1WEk4JGomFthKMycNoGIYTwBI+biiGZ8wLuVhNFlq0qFlAzkiw4gzKC7AEwCW8IBF64nSitj8lYbw1aY41wQLTcYbNF2NhLlXG7DE2mGxFTIPHIyMXWqA92m29r/IT27ZoWnCS1T8bM+cMpegch8WIUyCR51xxIsCI4OFweV6UJJ0mZmD4kzFlGAm5SUiMh4w4TBrFrQlIiUkEnQy84zKPo0FiZ0KUZAD4JpTkRY0AsskfjOIjXYaXhDqbE5ld9hR0CL/+nfwE3FPHO7Y+YB7dJB28/BiYxaDB+t7TDARzGLJI0kdXk/Qo5TtT8S9GXn/f1XGv9ukiGeEVf+gYN/1VMsbLQdAR+l5l/HPMleA1/v0kb+jnbULe5u3XkkXPeGXejQMkr3nwFjBI4CP9O/gx6EUwgMWHgrOjXPE33c706SKZQpdef9fz2NnVzK+z19/XftV6/oFFktksuqdXXw9fSnuYrSYGUb9nu93SvbuYopZXpF+fa8HNjVIncKuQeYM7Q/Bq8Qm+ExCfQnrQsFNN7Ct1Dve5WjOpFfLiJUsrli1njFUuq1rxqmyOmvgKwiIGTfXKGtaKVbWrTdP8vbPxecl1Zs3adawtr71uluQdg1q9nZTXb2D/k+UbqyWT6PccT8T+F/Xq6pknGt4wza+39xoCvTS9tawdKjeZGD33PjKA28c4b25+q5VfVzVufnudprhYlsxEfocRW7Y22e1N27YzJ/V1SpO9qXnFDjquqTZVcCc3o87uUFRFad61m2nsWa+dcDTvraTRWtlMA5fSjPvsiirTMUnsZ5yWZhrzE45ttBEcMNOp7/IJ31Nkp7zyKiOqNL2LirU0ft88QfkgzXfI4ZpQdTTQicN8Ac4VfEDjdUdME1S5Cz9U3AtQuEVHVMm9ggN04iPnAo4u+dg7Yz9ZuvQdWZuhnk+nCiuoo4xwyMIKeOTWqtrxsU8Z+8wbRfkwTbL/EzpoYZcKHqd7qkhuNMH92l/s+pwOP1W9ceQJRqyWnQdfqJK8qYrVf7mVLm2mEydpKV81sHXH+Zq4S1cpml+4OyoVbwQ/4pEgk+DXjDikStVvMuLUJ5LaoN0yeTXXYcdl+RvGOaoZy5PyHwYF5WMHKtar79FaaxUSrGXEjp3kY41v5dNaWqgyXeCWqWQxZ5P8xkeycor/iWrQOPqn+hWOtxk7o9LoEON8p65kBL+bW7SN7TRd0DiydwfjfLN6Ofta2cdYhcOg4Fltgn2Ufu8uqTp3xDnvh9/Xa+Vv51JniVh9nnGWLW5gGtveXcXY7irGlpw5UbvbyOZKN56z6uKvxSSosfl9RqxtdNWKj/9JPw8c3OMcf6O0CC1BnQFBZTdzs0XhghrnKnYc2C62Gfsb2OfcPKeg6tj5r3PMyR4j91D+orHm0MYKWuax7+0OEtQDCaoOewVZro0qjESp0mynSkeuOtzsUBTdgrIsK/9m7ALfChuPGsoLVVXUXTzpzsqyql9Qknkkn2g6c3693XDuy1sZseHEGv2CassPjNjocJBjZMOC8nLGWVdVyVycammt3nJUuPjjBmf+qLIqG9ajG7mZtWFJ8wlxuPxk85fsUtadVL0sg9WNbQVVSm43VbJS0UbvW8GbBk20H/uB0krkoCpdEAz8j/TTjtZd+KmDa/i+5q2iw960+OPzghFbaLKNrtl/5t2Hm+PnX29uauatlteKKu8C7WKctNBshz9nnO0tkvy96OC9FJtcrkNQGiqi4Lm9NGH1krq3Vpymi7RtC2zjsWkCrfNwVd1PrsX8/OmliS+ZLkgsf63uRMuZMys/o7TrBEGR/wuaL1jPRD4wS7DVnrpHHFQykU1mCX7NBE6Jg31MZI1Zgh8ygQvi4HUxEc8pZgluY24OnBWaqBq72G0dUiRzkB1vMhe1zYKDVzpOtypdZgkqx9whs1U56XJjY7PqcJt4SlElk1AdF5zxv2GvQ1X2VjoVqhVZUX906lXwR3KTkNXmbd/VNNQ0nt/loHbFcfb8azXL3v7FTgpUpL96q2Z7TdUvDm6geYpUiZua7Ly40oC6Vm0ga/52Xmqr91/J+SF/sBcvugAAAABJRU5ErkJggg==\" />\n        </div>\n        <div class=\"text-exception\">\n            <div class=\"open-quote\">\n                <img alt=\"\" src=\"data:image/gif;base64,R0lGODlhHAAWAMQQANra2+bl5s3Mzevr6/Pz8+jo6O3t7fHx8c/Oz+Pj49PS093d3djX2NXV1eDf4MrJyvb29gAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACH5BAEAABAALAAAAAAcABYAQAWWICSOEDE4AamqRuAsT5yu6hA/wNrcfNysjl5PBOAJAAUDDRLoNRKDndAHnN6k058qaH2QuNelqCAYIm45MfGmIJCkAvUIPNB1td/uAyvEz/UqB0VUagQOZTEjgzx+Kk1CEAU8DAdqB4gPCHVjNwhucphKbzefamAFdlaNEGBZd1V3r1t6fE6wqrJ5XS4Ovb69MyQnv8QhADs=\" />\n            </div>\n\n            <h1>\n                You have requested a non-existent service &quot;common.service.repository&quot;. Did you mean one of these: &quot;sysadmin.service.repository&quot;, &quot;login.service.repository&quot;?\n            </h1>\n\n            <div>\n                <strong>500</strong> Internal Server Error - <abbr title=\"Symfony\\Component\\DependencyInjection\\Exception\\ServiceNotFoundException\">ServiceNotFoundException</abbr>\n            </div>\n\n                        \n            <div class=\"close-quote\">\n                <img alt=\"\" src=\"data:image/gif;base64,R0lGODlhHAAWAMQQANra2+bl5s3Mzevr6/Pz8+jo6O3t7fHx8c/Oz+Pj49PS093d3djX2NXV1eDf4MrJyvb29gAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACH5BAEAABAALAAAAAAcABYAQAWZoCOO5ACdaECuweO+sIOiDWw36IC8wjH/kAMDVoDYbLJf7ejC/QqvJHBGeC0fAgdhOrsCfDNmFHg9lo9SmvhxRpLXTpSBx6XuXNBjoN4GoNYPaSdtVoCCEIRNhm9iiS6Hjo6BjExxOWN1KAJNQAAvJpkQLS4LVAovfqGeLggQAwlne1MGBQCbqCc2AkV8bigOAQahKQ4DW0AhADs=\" />\n            </div>\n        </div>\n    </div>\n</div>\n\n    <div class=\"block\">\n            <h2>Stack Trace</h2>\n    \n    <a id=\"traces-link-0\"></a>\n    <ol class=\"traces list-exception\" id=\"traces-0\" style=\"display: block\">\n                    <li>\n                \n    \n    in <abbr title=\"/usr/share/nginx/html/weboffice/vendor\">vendor</abbr>/symfony/symfony/src/Symfony/Component/DependencyInjection/Container.php at line 266&nbsp;\n    <a href=\"#\" onclick=\"toggle('trace-0-0'); switchIcons('icon-0-0-open', 'icon-0-0-close'); return false;\"><img class=\"toggle\" id=\"icon-0-0-close\" alt=\"-\" src=\"data:image/gif;base64,R0lGODlhEgASAMQSANft94TG57Hb8GS44ez1+mC24IvK6ePx+Wa44dXs92+942e54o3L6W2844/M6dnu+P/+/l614P///wAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACH5BAEAABIALAAAAAASABIAQAVCoCQBTBOd6Kk4gJhGBCTPxysJb44K0qD/ER/wlxjmisZkMqBEBW5NHrMZmVKvv9hMVsO+hE0EoNAstEYGxG9heIhCADs=\" style=\"display: inline\" /><img class=\"toggle\" id=\"icon-0-0-open\" alt=\"+\" src=\"data:image/gif;base64,R0lGODlhEgASAMQTANft99/v+Ga44bHb8ITG52S44dXs9+z1+uPx+YvK6WC24G+944/M6W28443L6dnu+Ge54v/+/l614P///wAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACH5BAEAABMALAAAAAASABIAQAVS4DQBTiOd6LkwgJgeUSzHSDoNaZ4PU6FLgYBA5/vFID/DbylRGiNIZu74I0h1hNsVxbNuUV4d9SsZM2EzWe1qThVzwWFOAFCQFa1RQq6DJB4iIQA7\" style=\"display: none\" /></a>    <div id=\"trace-0-0\" style=\"display: block\" class=\"trace\">\n        <ol start=\"263\"><li><code>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;}</code></li>\n<li><code>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;}</code></li>\n<li><code></code></li>\n<li class=\"selected\"><code>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;throw&nbsp;new&nbsp;<span style=\"color: #0000BB\">ServiceNotFoundException</span><span style=\"color: #007700\">(</span><span style=\"color: #0000BB\">$id</span><span style=\"color: #007700\">,&nbsp;</span><span style=\"color: #0000BB\">null</span><span style=\"color: #007700\">,&nbsp;</span><span style=\"color: #0000BB\">null</span><span style=\"color: #007700\">,&nbsp;</span><span style=\"color: #0000BB\">$alternatives</span><span style=\"color: #007700\">);</span></code></li>\n<li><code>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;}</code></li>\n<li><code></code></li>\n<li><code>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;return;</code></li></ol>\n    </div>\n            </li>\n                    <li>\n                    at\n    <strong>\n        <abbr title=\"Symfony\\Component\\DependencyInjection\\Container\">Container</abbr>\n        -&gt;get\n    </strong>\n    ('common.service.repository')\n\n    <br />\n    in <abbr title=\"/usr/share/nginx/html/weboffice/vendor\">vendor</abbr>/symfony/symfony/src/Symfony/Bundle/FrameworkBundle/Controller/Controller.php at line 363&nbsp;\n    <a href=\"#\" onclick=\"toggle('trace-0-1'); switchIcons('icon-0-1-open', 'icon-0-1-close'); return false;\"><img class=\"toggle\" id=\"icon-0-1-close\" alt=\"-\" src=\"data:image/gif;base64,R0lGODlhEgASAMQSANft94TG57Hb8GS44ez1+mC24IvK6ePx+Wa44dXs92+942e54o3L6W2844/M6dnu+P/+/l614P///wAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACH5BAEAABIALAAAAAASABIAQAVCoCQBTBOd6Kk4gJhGBCTPxysJb44K0qD/ER/wlxjmisZkMqBEBW5NHrMZmVKvv9hMVsO+hE0EoNAstEYGxG9heIhCADs=\" style=\"display: none\" /><img class=\"toggle\" id=\"icon-0-1-open\" alt=\"+\" src=\"data:image/gif;base64,R0lGODlhEgASAMQTANft99/v+Ga44bHb8ITG52S44dXs9+z1+uPx+YvK6WC24G+944/M6W28443L6dnu+Ge54v/+/l614P///wAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACH5BAEAABMALAAAAAASABIAQAVS4DQBTiOd6LkwgJgeUSzHSDoNaZ4PU6FLgYBA5/vFID/DbylRGiNIZu74I0h1hNsVxbNuUV4d9SsZM2EzWe1qThVzwWFOAFCQFa1RQq6DJB4iIQA7\" style=\"display: inline\" /></a>    <div id=\"trace-0-1\" style=\"display: none\" class=\"trace\">\n        <ol start=\"360\"><li><code>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;*/</code></li>\n<li><code>&nbsp;&nbsp;&nbsp;&nbsp;<span style=\"color: #007700\">protected&nbsp;function&nbsp;</span><span style=\"color: #0000BB\">get</span><span style=\"color: #007700\">(</span><span style=\"color: #0000BB\">$id</span><span style=\"color: #007700\">)</span></code></li>\n<li><code>&nbsp;&nbsp;&nbsp;&nbsp;{</code></li>\n<li class=\"selected\"><code>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;return&nbsp;<span style=\"color: #0000BB\">$this</span><span style=\"color: #007700\">-&gt;</span><span style=\"color: #0000BB\">container</span><span style=\"color: #007700\">-&gt;</span><span style=\"color: #0000BB\">get</span><span style=\"color: #007700\">(</span><span style=\"color: #0000BB\">$id</span><span style=\"color: #007700\">);</span></code></li>\n<li><code>&nbsp;&nbsp;&nbsp;&nbsp;}</code></li>\n<li><code></code></li>\n<li><code>&nbsp;&nbsp;&nbsp;&nbsp;<span style=\"color: #FF8000\">/**</span></code></li></ol>\n    </div>\n            </li>\n                    <li>\n                    at\n    <strong>\n        <abbr title=\"Symfony\\Bundle\\FrameworkBundle\\Controller\\Controller\">Controller</abbr>\n        -&gt;get\n    </strong>\n    ('common.service.repository')\n\n    <br />\n    in <abbr title=\"/usr/share/nginx/html/weboffice/src\">src</abbr>/AppBundle/Controller/BaseEntityController.php at line 1703&nbsp;\n    <a href=\"#\" onclick=\"toggle('trace-0-2'); switchIcons('icon-0-2-open', 'icon-0-2-close'); return false;\"><img class=\"toggle\" id=\"icon-0-2-close\" alt=\"-\" src=\"data:image/gif;base64,R0lGODlhEgASAMQSANft94TG57Hb8GS44ez1+mC24IvK6ePx+Wa44dXs92+942e54o3L6W2844/M6dnu+P/+/l614P///wAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACH5BAEAABIALAAAAAASABIAQAVCoCQBTBOd6Kk4gJhGBCTPxysJb44K0qD/ER/wlxjmisZkMqBEBW5NHrMZmVKvv9hMVsO+hE0EoNAstEYGxG9heIhCADs=\" style=\"display: none\" /><img class=\"toggle\" id=\"icon-0-2-open\" alt=\"+\" src=\"data:image/gif;base64,R0lGODlhEgASAMQTANft99/v+Ga44bHb8ITG52S44dXs9+z1+uPx+YvK6WC24G+944/M6W28443L6dnu+Ge54v/+/l614P///wAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACH5BAEAABMALAAAAAASABIAQAVS4DQBTiOd6LkwgJgeUSzHSDoNaZ4PU6FLgYBA5/vFID/DbylRGiNIZu74I0h1hNsVxbNuUV4d9SsZM2EzWe1qThVzwWFOAFCQFa1RQq6DJB4iIQA7\" style=\"display: inline\" /></a>    <div id=\"trace-0-2\" style=\"display: none\" class=\"trace\">\n        <ol start=\"1700\"><li><code>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;*/</code></li>\n<li><code>&nbsp;&nbsp;&nbsp;&nbsp;<span style=\"color: #007700\">protected&nbsp;function&nbsp;</span><span style=\"color: #0000BB\">getRepositoryService</span><span style=\"color: #007700\">(</span><span style=\"color: #0000BB\">$entity</span><span style=\"color: #007700\">,&nbsp;</span><span style=\"color: #0000BB\">$Bundle</span><span style=\"color: #007700\">)</span></code></li>\n<li><code>&nbsp;&nbsp;&nbsp;&nbsp;{</code></li>\n<li class=\"selected\"><code>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;return&nbsp;<span style=\"color: #0000BB\">$this</span><span style=\"color: #007700\">-&gt;</span><span style=\"color: #0000BB\">get</span><span style=\"color: #007700\">(</span><span style=\"color: #0000BB\">HelperService</span><span style=\"color: #007700\">::</span><span style=\"color: #0000BB\">camelCaseToSnakeCase</span><span style=\"color: #007700\">(</span><span style=\"color: #0000BB\">substr</span><span style=\"color: #007700\">(</span><span style=\"color: #0000BB\">$Bundle</span><span style=\"color: #007700\">,&nbsp;</span><span style=\"color: #0000BB\">0</span><span style=\"color: #007700\">,&nbsp;-</span><span style=\"color: #0000BB\">6</span><span style=\"color: #007700\">)).</span><span style=\"color: #DD0000\">'.service.repository'</span><span style=\"color: #007700\">)</span></code></li>\n<li><code>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;-&gt;<span style=\"color: #0000BB\">setEntityRepository</span><span style=\"color: #007700\">(</span><span style=\"color: #0000BB\">$Bundle</span><span style=\"color: #007700\">.</span><span style=\"color: #DD0000\">':'</span><span style=\"color: #007700\">.</span><span style=\"color: #0000BB\">$entity</span><span style=\"color: #007700\">);</span></code></li>\n<li><code>&nbsp;&nbsp;&nbsp;&nbsp;}</code></li>\n<li><code></code></li></ol>\n    </div>\n            </li>\n                    <li>\n                    at\n    <strong>\n        <abbr title=\"AppBundle\\Controller\\BaseEntityController\">BaseEntityController</abbr>\n        -&gt;getRepositoryService\n    </strong>\n    ('Place', 'CommonBundle')\n\n    <br />\n    in <abbr title=\"/usr/share/nginx/html/weboffice/src\">src</abbr>/AppBundle/Controller/BaseEntityController.php at line 1717&nbsp;\n    <a href=\"#\" onclick=\"toggle('trace-0-3'); switchIcons('icon-0-3-open', 'icon-0-3-close'); return false;\"><img class=\"toggle\" id=\"icon-0-3-close\" alt=\"-\" src=\"data:image/gif;base64,R0lGODlhEgASAMQSANft94TG57Hb8GS44ez1+mC24IvK6ePx+Wa44dXs92+942e54o3L6W2844/M6dnu+P/+/l614P///wAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACH5BAEAABIALAAAAAASABIAQAVCoCQBTBOd6Kk4gJhGBCTPxysJb44K0qD/ER/wlxjmisZkMqBEBW5NHrMZmVKvv9hMVsO+hE0EoNAstEYGxG9heIhCADs=\" style=\"display: none\" /><img class=\"toggle\" id=\"icon-0-3-open\" alt=\"+\" src=\"data:image/gif;base64,R0lGODlhEgASAMQTANft99/v+Ga44bHb8ITG52S44dXs9+z1+uPx+YvK6WC24G+944/M6W28443L6dnu+Ge54v/+/l614P///wAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACH5BAEAABMALAAAAAASABIAQAVS4DQBTiOd6LkwgJgeUSzHSDoNaZ4PU6FLgYBA5/vFID/DbylRGiNIZu74I0h1hNsVxbNuUV4d9SsZM2EzWe1qThVzwWFOAFCQFa1RQq6DJB4iIQA7\" style=\"display: inline\" /></a>    <div id=\"trace-0-3\" style=\"display: none\" class=\"trace\">\n        <ol start=\"1714\"><li><code>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style=\"color: #0000BB\">$entity&nbsp;</span><span style=\"color: #007700\">=&nbsp;</span><span style=\"color: #0000BB\">$this</span><span style=\"color: #007700\">-&gt;</span><span style=\"color: #0000BB\">localConf</span><span style=\"color: #007700\">[</span><span style=\"color: #DD0000\">'entity'</span><span style=\"color: #007700\">];</span></code></li>\n<li><code>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style=\"color: #0000BB\">$Bundle&nbsp;</span><span style=\"color: #007700\">=&nbsp;</span><span style=\"color: #0000BB\">$this</span><span style=\"color: #007700\">-&gt;</span><span style=\"color: #0000BB\">localConf</span><span style=\"color: #007700\">[</span><span style=\"color: #DD0000\">'Bundle'</span><span style=\"color: #007700\">];</span></code></li>\n<li><code></code></li>\n<li class=\"selected\"><code>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;return&nbsp;<span style=\"color: #0000BB\">$this</span><span style=\"color: #007700\">-&gt;</span><span style=\"color: #0000BB\">getRepositoryService</span><span style=\"color: #007700\">(</span><span style=\"color: #0000BB\">$entity</span><span style=\"color: #007700\">,&nbsp;</span><span style=\"color: #0000BB\">$Bundle</span><span style=\"color: #007700\">);</span></code></li>\n<li><code>&nbsp;&nbsp;&nbsp;&nbsp;}</code></li>\n<li><code></code></li>\n<li><code>&nbsp;&nbsp;&nbsp;&nbsp;<span style=\"color: #FF8000\">/**</span></code></li></ol>\n    </div>\n            </li>\n                    <li>\n                    at\n    <strong>\n        <abbr title=\"AppBundle\\Controller\\BaseEntityController\">BaseEntityController</abbr>\n        -&gt;getLocalRepositoryService\n    </strong>\n    ()\n\n    <br />\n    in <abbr title=\"/usr/share/nginx/html/weboffice/src\">src</abbr>/AppBundle/Controller/BaseEntityController.php at line 78&nbsp;\n    <a href=\"#\" onclick=\"toggle('trace-0-4'); switchIcons('icon-0-4-open', 'icon-0-4-close'); return false;\"><img class=\"toggle\" id=\"icon-0-4-close\" alt=\"-\" src=\"data:image/gif;base64,R0lGODlhEgASAMQSANft94TG57Hb8GS44ez1+mC24IvK6ePx+Wa44dXs92+942e54o3L6W2844/M6dnu+P/+/l614P///wAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACH5BAEAABIALAAAAAASABIAQAVCoCQBTBOd6Kk4gJhGBCTPxysJb44K0qD/ER/wlxjmisZkMqBEBW5NHrMZmVKvv9hMVsO+hE0EoNAstEYGxG9heIhCADs=\" style=\"display: none\" /><img class=\"toggle\" id=\"icon-0-4-open\" alt=\"+\" src=\"data:image/gif;base64,R0lGODlhEgASAMQTANft99/v+Ga44bHb8ITG52S44dXs9+z1+uPx+YvK6WC24G+944/M6W28443L6dnu+Ge54v/+/l614P///wAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACH5BAEAABMALAAAAAASABIAQAVS4DQBTiOd6LkwgJgeUSzHSDoNaZ4PU6FLgYBA5/vFID/DbylRGiNIZu74I0h1hNsVxbNuUV4d9SsZM2EzWe1qThVzwWFOAFCQFa1RQq6DJB4iIQA7\" style=\"display: inline\" /></a>    <div id=\"trace-0-4\" style=\"display: none\" class=\"trace\">\n        <ol start=\"75\"><li><code>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style=\"color: #007700\">}</span></code></li>\n<li><code>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style=\"color: #0000BB\">$this</span><span style=\"color: #007700\">-&gt;</span><span style=\"color: #0000BB\">localConf</span><span style=\"color: #007700\">[</span><span style=\"color: #DD0000\">'entityClass'</span><span style=\"color: #007700\">]&nbsp;=&nbsp;(</span><span style=\"color: #0000BB\">$this</span><span style=\"color: #007700\">-&gt;</span><span style=\"color: #0000BB\">localConf</span><span style=\"color: #007700\">[</span><span style=\"color: #DD0000\">'Bundle'</span><span style=\"color: #007700\">].</span><span style=\"color: #DD0000\">'\\Entity\\\\'</span><span style=\"color: #007700\">.</span><span style=\"color: #0000BB\">$this</span><span style=\"color: #007700\">-&gt;</span><span style=\"color: #0000BB\">localConf</span><span style=\"color: #007700\">[</span><span style=\"color: #DD0000\">'entity'</span><span style=\"color: #007700\">]);</span></code></li>\n<li><code>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;if&nbsp;(empty(<span style=\"color: #0000BB\">$this</span><span style=\"color: #007700\">-&gt;</span><span style=\"color: #0000BB\">localConf</span><span style=\"color: #007700\">[</span><span style=\"color: #DD0000\">'entityFields'</span><span style=\"color: #007700\">]))&nbsp;{&nbsp;</span><span style=\"color: #FF8000\">//&nbsp;Can&nbsp;be&nbsp;initialized&nbsp;and&nbsp;handled&nbsp;in&nbsp;child&nbsp;controller</span></code></li>\n<li class=\"selected\"><code>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style=\"color: #0000BB\">$this</span><span style=\"color: #007700\">-&gt;</span><span style=\"color: #0000BB\">localConf</span><span style=\"color: #007700\">[</span><span style=\"color: #DD0000\">'entityFields'</span><span style=\"color: #007700\">]&nbsp;=&nbsp;</span><span style=\"color: #0000BB\">$this</span><span style=\"color: #007700\">-&gt;</span><span style=\"color: #0000BB\">getLocalRepositoryService</span><span style=\"color: #007700\">()-&gt;</span><span style=\"color: #0000BB\">execute</span><span style=\"color: #007700\">(</span><span style=\"color: #DD0000\">'getMetadata'</span><span style=\"color: #007700\">);</span></code></li>\n<li><code>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;}</code></li>\n<li><code>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style=\"color: #0000BB\">$this</span><span style=\"color: #007700\">-&gt;</span><span style=\"color: #0000BB\">localConf</span><span style=\"color: #007700\">[</span><span style=\"color: #DD0000\">'entityTable'</span><span style=\"color: #007700\">]&nbsp;=&nbsp;(((</span><span style=\"color: #0000BB\">$this</span><span style=\"color: #007700\">-&gt;</span><span style=\"color: #0000BB\">localConf</span><span style=\"color: #007700\">[</span><span style=\"color: #DD0000\">'bundle'</span><span style=\"color: #007700\">]&nbsp;==&nbsp;</span><span style=\"color: #DD0000\">'sysadmin'</span><span style=\"color: #007700\">)</span></code></li>\n<li><code>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;?&nbsp;<span style=\"color: #DD0000\">'app_'&nbsp;</span><span style=\"color: #007700\">:&nbsp;</span><span style=\"color: #DD0000\">''</span><span style=\"color: #007700\">)&nbsp;.&nbsp;</span><span style=\"color: #0000BB\">lcfirst</span><span style=\"color: #007700\">(</span><span style=\"color: #0000BB\">$this</span><span style=\"color: #007700\">-&gt;</span><span style=\"color: #0000BB\">localConf</span><span style=\"color: #007700\">[</span><span style=\"color: #DD0000\">'entity'</span><span style=\"color: #007700\">]));&nbsp;</span><span style=\"color: #FF8000\">//&nbsp;lowerCamelCase</span></code></li></ol>\n    </div>\n            </li>\n                    <li>\n                    at\n    <strong>\n        <abbr title=\"AppBundle\\Controller\\BaseEntityController\">BaseEntityController</abbr>\n        -&gt;setLocalConf\n    </strong>\n    ()\n\n    <br />\n    in <abbr title=\"/usr/share/nginx/html/weboffice/src\">src</abbr>/AppBundle/Controller/BaseEntityController.php at line 31&nbsp;\n    <a href=\"#\" onclick=\"toggle('trace-0-5'); switchIcons('icon-0-5-open', 'icon-0-5-close'); return false;\"><img class=\"toggle\" id=\"icon-0-5-close\" alt=\"-\" src=\"data:image/gif;base64,R0lGODlhEgASAMQSANft94TG57Hb8GS44ez1+mC24IvK6ePx+Wa44dXs92+942e54o3L6W2844/M6dnu+P/+/l614P///wAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACH5BAEAABIALAAAAAASABIAQAVCoCQBTBOd6Kk4gJhGBCTPxysJb44K0qD/ER/wlxjmisZkMqBEBW5NHrMZmVKvv9hMVsO+hE0EoNAstEYGxG9heIhCADs=\" style=\"display: none\" /><img class=\"toggle\" id=\"icon-0-5-open\" alt=\"+\" src=\"data:image/gif;base64,R0lGODlhEgASAMQTANft99/v+Ga44bHb8ITG52S44dXs9+z1+uPx+YvK6WC24G+944/M6W28443L6dnu+Ge54v/+/l614P///wAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACH5BAEAABMALAAAAAASABIAQAVS4DQBTiOd6LkwgJgeUSzHSDoNaZ4PU6FLgYBA5/vFID/DbylRGiNIZu74I0h1hNsVxbNuUV4d9SsZM2EzWe1qThVzwWFOAFCQFa1RQq6DJB4iIQA7\" style=\"display: inline\" /></a>    <div id=\"trace-0-5\" style=\"display: none\" class=\"trace\">\n        <ol start=\"28\"><li><code>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style=\"color: #0000BB\">$this</span><span style=\"color: #007700\">-&gt;</span><span style=\"color: #0000BB\">setFlags</span><span style=\"color: #007700\">();</span></code></li>\n<li><code></code></li>\n<li><code>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style=\"color: #FF8000\">//&nbsp;Local&nbsp;configuration</span></code></li>\n<li class=\"selected\"><code>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style=\"color: #0000BB\">$this</span><span style=\"color: #007700\">-&gt;</span><span style=\"color: #0000BB\">setLocalConf</span><span style=\"color: #007700\">();</span></code></li>\n<li><code></code></li>\n<li><code>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style=\"color: #FF8000\">//&nbsp;Template&nbsp;configuration</span></code></li>\n<li><code>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style=\"color: #0000BB\">$this</span><span style=\"color: #007700\">-&gt;</span><span style=\"color: #0000BB\">setTemplateConf</span><span style=\"color: #007700\">();</span></code></li></ol>\n    </div>\n            </li>\n                    <li>\n                    at\n    <strong>\n        <abbr title=\"AppBundle\\Controller\\BaseEntityController\">BaseEntityController</abbr>\n        -&gt;init\n    </strong>\n    (<em>object</em>(<abbr title=\"Symfony\\Component\\HttpFoundation\\Request\">Request</abbr>))\n\n    <br />\n    in <abbr title=\"/usr/share/nginx/html/weboffice/src\">src</abbr>/CommonBundle/Controller/PlaceController.php at line 38&nbsp;\n    <a href=\"#\" onclick=\"toggle('trace-0-6'); switchIcons('icon-0-6-open', 'icon-0-6-close'); return false;\"><img class=\"toggle\" id=\"icon-0-6-close\" alt=\"-\" src=\"data:image/gif;base64,R0lGODlhEgASAMQSANft94TG57Hb8GS44ez1+mC24IvK6ePx+Wa44dXs92+942e54o3L6W2844/M6dnu+P/+/l614P///wAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACH5BAEAABIALAAAAAASABIAQAVCoCQBTBOd6Kk4gJhGBCTPxysJb44K0qD/ER/wlxjmisZkMqBEBW5NHrMZmVKvv9hMVsO+hE0EoNAstEYGxG9heIhCADs=\" style=\"display: none\" /><img class=\"toggle\" id=\"icon-0-6-open\" alt=\"+\" src=\"data:image/gif;base64,R0lGODlhEgASAMQTANft99/v+Ga44bHb8ITG52S44dXs9+z1+uPx+YvK6WC24G+944/M6W28443L6dnu+Ge54v/+/l614P///wAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACH5BAEAABMALAAAAAASABIAQAVS4DQBTiOd6LkwgJgeUSzHSDoNaZ4PU6FLgYBA5/vFID/DbylRGiNIZu74I0h1hNsVxbNuUV4d9SsZM2EzWe1qThVzwWFOAFCQFa1RQq6DJB4iIQA7\" style=\"display: inline\" /></a>    <div id=\"trace-0-6\" style=\"display: none\" class=\"trace\">\n        <ol start=\"35\"><li><code>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style=\"color: #007700\">)</span></code></li>\n<li><code>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;);</code></li>\n<li><code></code></li>\n<li class=\"selected\"><code>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style=\"color: #0000BB\">parent</span><span style=\"color: #007700\">::</span><span style=\"color: #0000BB\">init</span><span style=\"color: #007700\">(</span><span style=\"color: #0000BB\">$request</span><span style=\"color: #007700\">);</span></code></li>\n<li><code></code></li>\n<li><code>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style=\"color: #FF8000\">//&nbsp;Search</span></code></li>\n<li><code>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style=\"color: #0000BB\">$this</span><span style=\"color: #007700\">-&gt;</span><span style=\"color: #0000BB\">templateConf</span><span style=\"color: #007700\">[</span><span style=\"color: #DD0000\">'search'</span><span style=\"color: #007700\">][</span><span style=\"color: #DD0000\">'fields'</span><span style=\"color: #007700\">]&nbsp;=&nbsp;</span><span style=\"color: #0000BB\">$this</span><span style=\"color: #007700\">-&gt;</span><span style=\"color: #0000BB\">templateConf</span><span style=\"color: #007700\">[</span><span style=\"color: #DD0000\">'fields'</span><span style=\"color: #007700\">][</span><span style=\"color: #DD0000\">'view'</span><span style=\"color: #007700\">];</span></code></li></ol>\n    </div>\n            </li>\n                    <li>\n                    at\n    <strong>\n        <abbr title=\"CommonBundle\\Controller\\PlaceController\">PlaceController</abbr>\n        -&gt;init\n    </strong>\n    (<em>object</em>(<abbr title=\"Symfony\\Component\\HttpFoundation\\Request\">Request</abbr>))\n\n    <br />\n    in <abbr title=\"/usr/share/nginx/html/weboffice/src\">src</abbr>/AppBundle/Controller/BaseEntityController.php at line 549&nbsp;\n    <a href=\"#\" onclick=\"toggle('trace-0-7'); switchIcons('icon-0-7-open', 'icon-0-7-close'); return false;\"><img class=\"toggle\" id=\"icon-0-7-close\" alt=\"-\" src=\"data:image/gif;base64,R0lGODlhEgASAMQSANft94TG57Hb8GS44ez1+mC24IvK6ePx+Wa44dXs92+942e54o3L6W2844/M6dnu+P/+/l614P///wAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACH5BAEAABIALAAAAAASABIAQAVCoCQBTBOd6Kk4gJhGBCTPxysJb44K0qD/ER/wlxjmisZkMqBEBW5NHrMZmVKvv9hMVsO+hE0EoNAstEYGxG9heIhCADs=\" style=\"display: none\" /><img class=\"toggle\" id=\"icon-0-7-open\" alt=\"+\" src=\"data:image/gif;base64,R0lGODlhEgASAMQTANft99/v+Ga44bHb8ITG52S44dXs9+z1+uPx+YvK6WC24G+944/M6W28443L6dnu+Ge54v/+/l614P///wAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACH5BAEAABMALAAAAAASABIAQAVS4DQBTiOd6LkwgJgeUSzHSDoNaZ4PU6FLgYBA5/vFID/DbylRGiNIZu74I0h1hNsVxbNuUV4d9SsZM2EzWe1qThVzwWFOAFCQFa1RQq6DJB4iIQA7\" style=\"display: inline\" /></a>    <div id=\"trace-0-7\" style=\"display: none\" class=\"trace\">\n        <ol start=\"546\"><li><code>&nbsp;&nbsp;&nbsp;&nbsp;{</code></li>\n<li><code>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style=\"color: #FF8000\">//&nbsp;Set&nbsp;configuration</span></code></li>\n<li><code>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style=\"color: #0000BB\">$this</span><span style=\"color: #007700\">-&gt;</span><span style=\"color: #0000BB\">flags</span><span style=\"color: #007700\">[</span><span style=\"color: #DD0000\">'hasForm'</span><span style=\"color: #007700\">]&nbsp;=&nbsp;</span><span style=\"color: #0000BB\">true</span><span style=\"color: #007700\">;</span></code></li>\n<li class=\"selected\"><code>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style=\"color: #0000BB\">$this</span><span style=\"color: #007700\">-&gt;</span><span style=\"color: #0000BB\">init</span><span style=\"color: #007700\">(</span><span style=\"color: #0000BB\">$request</span><span style=\"color: #007700\">);</span></code></li>\n<li><code></code></li>\n<li><code>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style=\"color: #FF8000\">//&nbsp;Get&nbsp;object</span></code></li>\n<li><code>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style=\"color: #0000BB\">$obj&nbsp;</span><span style=\"color: #007700\">=&nbsp;</span><span style=\"color: #0000BB\">$this</span><span style=\"color: #007700\">-&gt;</span><span style=\"color: #0000BB\">getObject</span><span style=\"color: #007700\">(</span><span style=\"color: #0000BB\">$id</span><span style=\"color: #007700\">);</span></code></li></ol>\n    </div>\n            </li>\n                    <li>\n                    at\n    <strong>\n        <abbr title=\"AppBundle\\Controller\\BaseEntityController\">BaseEntityController</abbr>\n        -&gt;editAction\n    </strong>\n    (<em>object</em>(<abbr title=\"Symfony\\Component\\HttpFoundation\\Request\">Request</abbr>), <em>null</em>)\n\n    <br />\n    in <abbr title=\"/usr/share/nginx/html/weboffice/src\">src</abbr>/CommonBundle/Controller/PlaceController.php at line 104&nbsp;\n    <a href=\"#\" onclick=\"toggle('trace-0-8'); switchIcons('icon-0-8-open', 'icon-0-8-close'); return false;\"><img class=\"toggle\" id=\"icon-0-8-close\" alt=\"-\" src=\"data:image/gif;base64,R0lGODlhEgASAMQSANft94TG57Hb8GS44ez1+mC24IvK6ePx+Wa44dXs92+942e54o3L6W2844/M6dnu+P/+/l614P///wAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACH5BAEAABIALAAAAAASABIAQAVCoCQBTBOd6Kk4gJhGBCTPxysJb44K0qD/ER/wlxjmisZkMqBEBW5NHrMZmVKvv9hMVsO+hE0EoNAstEYGxG9heIhCADs=\" style=\"display: none\" /><img class=\"toggle\" id=\"icon-0-8-open\" alt=\"+\" src=\"data:image/gif;base64,R0lGODlhEgASAMQTANft99/v+Ga44bHb8ITG52S44dXs9+z1+uPx+YvK6WC24G+944/M6W28443L6dnu+Ge54v/+/l614P///wAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACH5BAEAABMALAAAAAASABIAQAVS4DQBTiOd6LkwgJgeUSzHSDoNaZ4PU6FLgYBA5/vFID/DbylRGiNIZu74I0h1hNsVxbNuUV4d9SsZM2EzWe1qThVzwWFOAFCQFa1RQq6DJB4iIQA7\" style=\"display: inline\" /></a>    <div id=\"trace-0-8\" style=\"display: none\" class=\"trace\">\n        <ol start=\"101\"><li><code>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;*/</code></li>\n<li><code>&nbsp;&nbsp;&nbsp;&nbsp;<span style=\"color: #007700\">public&nbsp;function&nbsp;</span><span style=\"color: #0000BB\">editAction</span><span style=\"color: #007700\">(</span><span style=\"color: #0000BB\">Request&nbsp;$request</span><span style=\"color: #007700\">,&nbsp;</span><span style=\"color: #0000BB\">$id</span><span style=\"color: #007700\">)</span></code></li>\n<li><code>&nbsp;&nbsp;&nbsp;&nbsp;{</code></li>\n<li class=\"selected\"><code>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;return&nbsp;<span style=\"color: #0000BB\">parent</span><span style=\"color: #007700\">::</span><span style=\"color: #0000BB\">editAction</span><span style=\"color: #007700\">(</span><span style=\"color: #0000BB\">$request</span><span style=\"color: #007700\">,&nbsp;</span><span style=\"color: #0000BB\">$id</span><span style=\"color: #007700\">);</span></code></li>\n<li><code>&nbsp;&nbsp;&nbsp;&nbsp;}</code></li>\n<li><code></code></li>\n<li><code>&nbsp;&nbsp;&nbsp;&nbsp;<span style=\"color: #FF8000\">/**</span></code></li></ol>\n    </div>\n            </li>\n                    <li>\n                    at\n    <strong>\n        <abbr title=\"CommonBundle\\Controller\\PlaceController\">PlaceController</abbr>\n        -&gt;editAction\n    </strong>\n    (<em>object</em>(<abbr title=\"Symfony\\Component\\HttpFoundation\\Request\">Request</abbr>), <em>null</em>)\n\n            </li>\n                    <li>\n                    at\n    <strong>\n        <abbr title=\"\"></abbr>\n        call_user_func_array\n    </strong>\n    (<em>array</em>(<em>object</em>(<abbr title=\"CommonBundle\\Controller\\PlaceController\">PlaceController</abbr>), 'editAction'), <em>array</em>(<em>object</em>(<abbr title=\"Symfony\\Component\\HttpFoundation\\Request\">Request</abbr>), <em>null</em>))\n\n    <br />\n    in <abbr title=\"/usr/share/nginx/html/weboffice/vendor\">vendor</abbr>/symfony/symfony/src/Symfony/Component/HttpKernel/HttpKernel.php at line 144&nbsp;\n    <a href=\"#\" onclick=\"toggle('trace-0-10'); switchIcons('icon-0-10-open', 'icon-0-10-close'); return false;\"><img class=\"toggle\" id=\"icon-0-10-close\" alt=\"-\" src=\"data:image/gif;base64,R0lGODlhEgASAMQSANft94TG57Hb8GS44ez1+mC24IvK6ePx+Wa44dXs92+942e54o3L6W2844/M6dnu+P/+/l614P///wAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACH5BAEAABIALAAAAAASABIAQAVCoCQBTBOd6Kk4gJhGBCTPxysJb44K0qD/ER/wlxjmisZkMqBEBW5NHrMZmVKvv9hMVsO+hE0EoNAstEYGxG9heIhCADs=\" style=\"display: none\" /><img class=\"toggle\" id=\"icon-0-10-open\" alt=\"+\" src=\"data:image/gif;base64,R0lGODlhEgASAMQTANft99/v+Ga44bHb8ITG52S44dXs9+z1+uPx+YvK6WC24G+944/M6W28443L6dnu+Ge54v/+/l614P///wAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACH5BAEAABMALAAAAAASABIAQAVS4DQBTiOd6LkwgJgeUSzHSDoNaZ4PU6FLgYBA5/vFID/DbylRGiNIZu74I0h1hNsVxbNuUV4d9SsZM2EzWe1qThVzwWFOAFCQFa1RQq6DJB4iIQA7\" style=\"display: inline\" /></a>    <div id=\"trace-0-10\" style=\"display: none\" class=\"trace\">\n        <ol start=\"141\"><li><code>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style=\"color: #0000BB\">$arguments&nbsp;</span><span style=\"color: #007700\">=&nbsp;</span><span style=\"color: #0000BB\">$this</span><span style=\"color: #007700\">-&gt;</span><span style=\"color: #0000BB\">resolver</span><span style=\"color: #007700\">-&gt;</span><span style=\"color: #0000BB\">getArguments</span><span style=\"color: #007700\">(</span><span style=\"color: #0000BB\">$request</span><span style=\"color: #007700\">,&nbsp;</span><span style=\"color: #0000BB\">$controller</span><span style=\"color: #007700\">);</span></code></li>\n<li><code></code></li>\n<li><code>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style=\"color: #FF8000\">//&nbsp;call&nbsp;controller</span></code></li>\n<li class=\"selected\"><code>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style=\"color: #0000BB\">$response&nbsp;</span><span style=\"color: #007700\">=&nbsp;</span><span style=\"color: #0000BB\">call_user_func_array</span><span style=\"color: #007700\">(</span><span style=\"color: #0000BB\">$controller</span><span style=\"color: #007700\">,&nbsp;</span><span style=\"color: #0000BB\">$arguments</span><span style=\"color: #007700\">);</span></code></li>\n<li><code></code></li>\n<li><code>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style=\"color: #FF8000\">//&nbsp;view</span></code></li>\n<li><code>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style=\"color: #007700\">if&nbsp;(!</span><span style=\"color: #0000BB\">$response&nbsp;</span><span style=\"color: #007700\">instanceof&nbsp;</span><span style=\"color: #0000BB\">Response</span><span style=\"color: #007700\">)&nbsp;{</span></code></li></ol>\n    </div>\n            </li>\n                    <li>\n                    at\n    <strong>\n        <abbr title=\"Symfony\\Component\\HttpKernel\\HttpKernel\">HttpKernel</abbr>\n        -&gt;handleRaw\n    </strong>\n    (<em>object</em>(<abbr title=\"Symfony\\Component\\HttpFoundation\\Request\">Request</abbr>), '1')\n\n    <br />\n    in <abbr title=\"/usr/share/nginx/html/weboffice/vendor\">vendor</abbr>/symfony/symfony/src/Symfony/Component/HttpKernel/HttpKernel.php at line 64&nbsp;\n    <a href=\"#\" onclick=\"toggle('trace-0-11'); switchIcons('icon-0-11-open', 'icon-0-11-close'); return false;\"><img class=\"toggle\" id=\"icon-0-11-close\" alt=\"-\" src=\"data:image/gif;base64,R0lGODlhEgASAMQSANft94TG57Hb8GS44ez1+mC24IvK6ePx+Wa44dXs92+942e54o3L6W2844/M6dnu+P/+/l614P///wAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACH5BAEAABIALAAAAAASABIAQAVCoCQBTBOd6Kk4gJhGBCTPxysJb44K0qD/ER/wlxjmisZkMqBEBW5NHrMZmVKvv9hMVsO+hE0EoNAstEYGxG9heIhCADs=\" style=\"display: none\" /><img class=\"toggle\" id=\"icon-0-11-open\" alt=\"+\" src=\"data:image/gif;base64,R0lGODlhEgASAMQTANft99/v+Ga44bHb8ITG52S44dXs9+z1+uPx+YvK6WC24G+944/M6W28443L6dnu+Ge54v/+/l614P///wAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACH5BAEAABMALAAAAAASABIAQAVS4DQBTiOd6LkwgJgeUSzHSDoNaZ4PU6FLgYBA5/vFID/DbylRGiNIZu74I0h1hNsVxbNuUV4d9SsZM2EzWe1qThVzwWFOAFCQFa1RQq6DJB4iIQA7\" style=\"display: inline\" /></a>    <div id=\"trace-0-11\" style=\"display: none\" class=\"trace\">\n        <ol start=\"61\"><li><code>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style=\"color: #0000BB\">$request</span><span style=\"color: #007700\">-&gt;</span><span style=\"color: #0000BB\">headers</span><span style=\"color: #007700\">-&gt;</span><span style=\"color: #0000BB\">set</span><span style=\"color: #007700\">(</span><span style=\"color: #DD0000\">'X-Php-Ob-Level'</span><span style=\"color: #007700\">,&nbsp;</span><span style=\"color: #0000BB\">ob_get_level</span><span style=\"color: #007700\">());</span></code></li>\n<li><code></code></li>\n<li><code>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;try&nbsp;{</code></li>\n<li class=\"selected\"><code>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;return&nbsp;<span style=\"color: #0000BB\">$this</span><span style=\"color: #007700\">-&gt;</span><span style=\"color: #0000BB\">handleRaw</span><span style=\"color: #007700\">(</span><span style=\"color: #0000BB\">$request</span><span style=\"color: #007700\">,&nbsp;</span><span style=\"color: #0000BB\">$type</span><span style=\"color: #007700\">);</span></code></li>\n<li><code>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;}&nbsp;catch&nbsp;(\\<span style=\"color: #0000BB\">Exception&nbsp;$e</span><span style=\"color: #007700\">)&nbsp;{</span></code></li>\n<li><code>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;if&nbsp;(<span style=\"color: #0000BB\">$e&nbsp;</span><span style=\"color: #007700\">instanceof&nbsp;</span><span style=\"color: #0000BB\">ConflictingHeadersException</span><span style=\"color: #007700\">)&nbsp;{</span></code></li>\n<li><code>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style=\"color: #0000BB\">$e&nbsp;</span><span style=\"color: #007700\">=&nbsp;new&nbsp;</span><span style=\"color: #0000BB\">BadRequestHttpException</span><span style=\"color: #007700\">(</span><span style=\"color: #DD0000\">'The&nbsp;request&nbsp;headers&nbsp;contain&nbsp;conflicting&nbsp;information&nbsp;regarding&nbsp;the&nbsp;origin&nbsp;of&nbsp;this&nbsp;request.'</span><span style=\"color: #007700\">,&nbsp;</span><span style=\"color: #0000BB\">$e</span><span style=\"color: #007700\">);</span></code></li></ol>\n    </div>\n            </li>\n                    <li>\n                    at\n    <strong>\n        <abbr title=\"Symfony\\Component\\HttpKernel\\HttpKernel\">HttpKernel</abbr>\n        -&gt;handle\n    </strong>\n    (<em>object</em>(<abbr title=\"Symfony\\Component\\HttpFoundation\\Request\">Request</abbr>), '1', <em>true</em>)\n\n    <br />\n    in <abbr title=\"/usr/share/nginx/html/weboffice/vendor\">vendor</abbr>/symfony/symfony/src/Symfony/Component/HttpKernel/Kernel.php at line 169&nbsp;\n    <a href=\"#\" onclick=\"toggle('trace-0-12'); switchIcons('icon-0-12-open', 'icon-0-12-close'); return false;\"><img class=\"toggle\" id=\"icon-0-12-close\" alt=\"-\" src=\"data:image/gif;base64,R0lGODlhEgASAMQSANft94TG57Hb8GS44ez1+mC24IvK6ePx+Wa44dXs92+942e54o3L6W2844/M6dnu+P/+/l614P///wAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACH5BAEAABIALAAAAAASABIAQAVCoCQBTBOd6Kk4gJhGBCTPxysJb44K0qD/ER/wlxjmisZkMqBEBW5NHrMZmVKvv9hMVsO+hE0EoNAstEYGxG9heIhCADs=\" style=\"display: none\" /><img class=\"toggle\" id=\"icon-0-12-open\" alt=\"+\" src=\"data:image/gif;base64,R0lGODlhEgASAMQTANft99/v+Ga44bHb8ITG52S44dXs9+z1+uPx+YvK6WC24G+944/M6W28443L6dnu+Ge54v/+/l614P///wAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACH5BAEAABMALAAAAAASABIAQAVS4DQBTiOd6LkwgJgeUSzHSDoNaZ4PU6FLgYBA5/vFID/DbylRGiNIZu74I0h1hNsVxbNuUV4d9SsZM2EzWe1qThVzwWFOAFCQFa1RQq6DJB4iIQA7\" style=\"display: inline\" /></a>    <div id=\"trace-0-12\" style=\"display: none\" class=\"trace\">\n        <ol start=\"166\"><li><code>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style=\"color: #0000BB\">$this</span><span style=\"color: #007700\">-&gt;</span><span style=\"color: #0000BB\">boot</span><span style=\"color: #007700\">();</span></code></li>\n<li><code>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;}</code></li>\n<li><code></code></li>\n<li class=\"selected\"><code>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;return&nbsp;<span style=\"color: #0000BB\">$this</span><span style=\"color: #007700\">-&gt;</span><span style=\"color: #0000BB\">getHttpKernel</span><span style=\"color: #007700\">()-&gt;</span><span style=\"color: #0000BB\">handle</span><span style=\"color: #007700\">(</span><span style=\"color: #0000BB\">$request</span><span style=\"color: #007700\">,&nbsp;</span><span style=\"color: #0000BB\">$type</span><span style=\"color: #007700\">,&nbsp;</span><span style=\"color: #0000BB\">$catch</span><span style=\"color: #007700\">);</span></code></li>\n<li><code>&nbsp;&nbsp;&nbsp;&nbsp;}</code></li>\n<li><code></code></li>\n<li><code>&nbsp;&nbsp;&nbsp;&nbsp;<span style=\"color: #FF8000\">/**</span></code></li></ol>\n    </div>\n            </li>\n                    <li>\n                    at\n    <strong>\n        <abbr title=\"Symfony\\Component\\HttpKernel\\Kernel\">Kernel</abbr>\n        -&gt;handle\n    </strong>\n    (<em>object</em>(<abbr title=\"Symfony\\Component\\HttpFoundation\\Request\">Request</abbr>))\n\n    <br />\n    in <abbr title=\"/usr/share/nginx/html/weboffice/web\">web</abbr>/app_dev.php at line 31&nbsp;\n    <a href=\"#\" onclick=\"toggle('trace-0-13'); switchIcons('icon-0-13-open', 'icon-0-13-close'); return false;\"><img class=\"toggle\" id=\"icon-0-13-close\" alt=\"-\" src=\"data:image/gif;base64,R0lGODlhEgASAMQSANft94TG57Hb8GS44ez1+mC24IvK6ePx+Wa44dXs92+942e54o3L6W2844/M6dnu+P/+/l614P///wAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACH5BAEAABIALAAAAAASABIAQAVCoCQBTBOd6Kk4gJhGBCTPxysJb44K0qD/ER/wlxjmisZkMqBEBW5NHrMZmVKvv9hMVsO+hE0EoNAstEYGxG9heIhCADs=\" style=\"display: none\" /><img class=\"toggle\" id=\"icon-0-13-open\" alt=\"+\" src=\"data:image/gif;base64,R0lGODlhEgASAMQTANft99/v+Ga44bHb8ITG52S44dXs9+z1+uPx+YvK6WC24G+944/M6W28443L6dnu+Ge54v/+/l614P///wAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACH5BAEAABMALAAAAAASABIAQAVS4DQBTiOd6LkwgJgeUSzHSDoNaZ4PU6FLgYBA5/vFID/DbylRGiNIZu74I0h1hNsVxbNuUV4d9SsZM2EzWe1qThVzwWFOAFCQFa1RQq6DJB4iIQA7\" style=\"display: inline\" /></a>    <div id=\"trace-0-13\" style=\"display: none\" class=\"trace\">\n        <ol start=\"28\"><li><code><span style=\"color: #0000BB\">$kernel&nbsp;</span><span style=\"color: #007700\">=&nbsp;new&nbsp;</span><span style=\"color: #0000BB\">AppKernel</span><span style=\"color: #007700\">(</span><span style=\"color: #DD0000\">'dev'</span><span style=\"color: #007700\">,&nbsp;</span><span style=\"color: #0000BB\">true</span><span style=\"color: #007700\">);</span></code></li>\n<li><code><span style=\"color: #0000BB\">$kernel</span><span style=\"color: #007700\">-&gt;</span><span style=\"color: #0000BB\">loadClassCache</span><span style=\"color: #007700\">();</span></code></li>\n<li><code><span style=\"color: #0000BB\">$request&nbsp;</span><span style=\"color: #007700\">=&nbsp;</span><span style=\"color: #0000BB\">Request</span><span style=\"color: #007700\">::</span><span style=\"color: #0000BB\">createFromGlobals</span><span style=\"color: #007700\">();</span></code></li>\n<li class=\"selected\"><code><span style=\"color: #0000BB\">$response&nbsp;</span><span style=\"color: #007700\">=&nbsp;</span><span style=\"color: #0000BB\">$kernel</span><span style=\"color: #007700\">-&gt;</span><span style=\"color: #0000BB\">handle</span><span style=\"color: #007700\">(</span><span style=\"color: #0000BB\">$request</span><span style=\"color: #007700\">);</span></code></li>\n<li><code><span style=\"color: #0000BB\">$response</span><span style=\"color: #007700\">-&gt;</span><span style=\"color: #0000BB\">send</span><span style=\"color: #007700\">();</span></code></li>\n<li><code><span style=\"color: #0000BB\">$kernel</span><span style=\"color: #007700\">-&gt;</span><span style=\"color: #0000BB\">terminate</span><span style=\"color: #007700\">(</span><span style=\"color: #0000BB\">$request</span><span style=\"color: #007700\">,&nbsp;</span><span style=\"color: #0000BB\">$response</span><span style=\"color: #007700\">);</span></code></li>\n<li><code>\n</code></li></ol>\n    </div>\n            </li>\n            </ol>\n</div>\n\n    <div class=\"block\">\n        <div class=\"logs clear-fix\">\n            <h2>\n                Logs&nbsp;\n                <a href=\"#\" onclick=\"toggle('logs'); switchIcons('icon-logs-open', 'icon-logs-close'); return false;\"><img class=\"toggle\" id=\"icon-logs-open\" alt=\"+\" src=\"data:image/gif;base64,R0lGODlhEgASAMQTANft99/v+Ga44bHb8ITG52S44dXs9+z1+uPx+YvK6WC24G+944/M6W28443L6dnu+Ge54v/+/l614P///wAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACH5BAEAABMALAAAAAASABIAQAVS4DQBTiOd6LkwgJgeUSzHSDoNaZ4PU6FLgYBA5/vFID/DbylRGiNIZu74I0h1hNsVxbNuUV4d9SsZM2EzWe1qThVzwWFOAFCQFa1RQq6DJB4iIQA7\" style=\"display: none\" /><img class=\"toggle\" id=\"icon-logs-close\" alt=\"-\" src=\"data:image/gif;base64,R0lGODlhEgASAMQSANft94TG57Hb8GS44ez1+mC24IvK6ePx+Wa44dXs92+942e54o3L6W2844/M6dnu+P/+/l614P///wAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACH5BAEAABIALAAAAAASABIAQAVCoCQBTBOd6Kk4gJhGBCTPxysJb44K0qD/ER/wlxjmisZkMqBEBW5NHrMZmVKvv9hMVsO+hE0EoNAstEYGxG9heIhCADs=\" style=\"display: inline\" /></a></h2>\n                            <div class=\"error-count\">\n                    <span>\n                        1 error\n                    </span>\n                </div>\n                    </div>\n\n        <div id=\"logs\">\n            <ol class=\"traces logs\">\n            <li>\n            INFO - Using &quot;filename&quot; as the default strategy is deprecated since version 1.27. Use &quot;name&quot; instead.\n        </li>\n            <li>\n            INFO - Referencing the &quot;core&quot; extension by its name (defined by getName()) is deprecated since 1.26 and will be removed in Twig 2.0. Use the Fully Qualified Extension Class Name instead.\n        </li>\n            <li>\n            INFO - Referencing the &quot;core&quot; extension by its name (defined by getName()) is deprecated since 1.26 and will be removed in Twig 2.0. Use the Fully Qualified Extension Class Name instead.\n        </li>\n            <li>\n            INFO - The Twig_Function_Method class is deprecated since version 1.12 and will be removed in 2.0. Use Twig_SimpleFunction instead.\n        </li>\n            <li>\n            INFO - The Twig_Function class is deprecated since version 1.12 and will be removed in 2.0. Use Twig_SimpleFunction instead.\n        </li>\n            <li>\n            INFO - Using an instance of &quot;Twig_Function_Method&quot; for function &quot;asset_exists&quot; is deprecated since version 1.21. Use Twig_SimpleFunction instead.\n        </li>\n            <li>\n            INFO - Matched route &quot;_common__place__edit&quot;.\n        </li>\n            <li>\n            DEBUG - Read existing security token from the session.\n        </li>\n            <li>\n            DEBUG - SELECT t0.name AS name_1, t0.dbHost AS dbHost_2, t0.dbName AS dbName_3, t0.dbUsername AS dbUsername_4, t0.dbPassword AS dbPassword_5, t0.id AS id_6, t0.insertTime AS insertTime_7, t0.insertUser AS insertUser_8, t0.isEnabled AS isEnabled_9 FROM wo_app.app_system t0 WHERE t0.id = ?\n        </li>\n            <li>\n            DEBUG - SELECT u0_.username AS username_0, u0_.password AS password_1, u0_.role AS role_2, u0_.isActive AS isActive_3, u0_.id AS id_4, u0_.insertTime AS insertTime_5, u0_.insertUser AS insertUser_6, u0_.isEnabled AS isEnabled_7, u0_.fk_entity AS fk_entity_8, u0_.fkApp_language AS fkApp_language_9 FROM user u0_ WHERE u0_.username = ? AND u0_.password &lt;&gt; ?\n        </li>\n            <li>\n            DEBUG - User was reloaded from a user provider.\n        </li>\n            <li>\n            DEBUG - Notified event &quot;kernel.request&quot; to listener &quot;Symfony\\Component\\HttpKernel\\EventListener\\DebugHandlersListener::configure&quot;.\n        </li>\n            <li>\n            DEBUG - Notified event &quot;kernel.request&quot; to listener &quot;Symfony\\Component\\HttpKernel\\EventListener\\DumpListener::configure&quot;.\n        </li>\n            <li>\n            DEBUG - Notified event &quot;kernel.request&quot; to listener &quot;Symfony\\Component\\HttpKernel\\EventListener\\ValidateRequestListener::onKernelRequest&quot;.\n        </li>\n            <li>\n            DEBUG - Notified event &quot;kernel.request&quot; to listener &quot;Symfony\\Bundle\\FrameworkBundle\\EventListener\\SessionListener::onKernelRequest&quot;.\n        </li>\n            <li>\n            DEBUG - Notified event &quot;kernel.request&quot; to listener &quot;Symfony\\Component\\HttpKernel\\EventListener\\FragmentListener::onKernelRequest&quot;.\n        </li>\n            <li>\n            DEBUG - Notified event &quot;kernel.request&quot; to listener &quot;Symfony\\Component\\HttpKernel\\EventListener\\RouterListener::onKernelRequest&quot;.\n        </li>\n            <li>\n            DEBUG - Notified event &quot;kernel.request&quot; to listener &quot;Symfony\\Component\\HttpKernel\\EventListener\\LocaleListener::onKernelRequest&quot;.\n        </li>\n            <li>\n            DEBUG - Notified event &quot;kernel.request&quot; to listener &quot;Symfony\\Component\\HttpKernel\\EventListener\\TranslatorListener::onKernelRequest&quot;.\n        </li>\n            <li>\n            DEBUG - Notified event &quot;kernel.request&quot; to listener &quot;Symfony\\Component\\Security\\Http\\Firewall::onKernelRequest&quot;.\n        </li>\n            <li>\n            DEBUG - Notified event &quot;kernel.request&quot; to listener &quot;Symfony\\Bundle\\AsseticBundle\\EventListener\\RequestListener::onKernelRequest&quot;.\n        </li>\n            <li>\n            DEBUG - Notified event &quot;kernel.controller&quot; to listener &quot;Symfony\\Bundle\\FrameworkBundle\\DataCollector\\RouterDataCollector::onKernelController&quot;.\n        </li>\n            <li>\n            DEBUG - Notified event &quot;kernel.controller&quot; to listener &quot;Symfony\\Component\\HttpKernel\\DataCollector\\RequestDataCollector::onKernelController&quot;.\n        </li>\n            <li>\n            DEBUG - Notified event &quot;kernel.controller&quot; to listener &quot;Sensio\\Bundle\\FrameworkExtraBundle\\EventListener\\ControllerListener::onKernelController&quot;.\n        </li>\n            <li>\n            DEBUG - Notified event &quot;kernel.controller&quot; to listener &quot;Sensio\\Bundle\\FrameworkExtraBundle\\EventListener\\ParamConverterListener::onKernelController&quot;.\n        </li>\n            <li>\n            DEBUG - Notified event &quot;kernel.controller&quot; to listener &quot;Sensio\\Bundle\\FrameworkExtraBundle\\EventListener\\HttpCacheListener::onKernelController&quot;.\n        </li>\n            <li>\n            DEBUG - Notified event &quot;kernel.controller&quot; to listener &quot;Sensio\\Bundle\\FrameworkExtraBundle\\EventListener\\SecurityListener::onKernelController&quot;.\n        </li>\n            <li>\n            DEBUG - Notified event &quot;kernel.controller&quot; to listener &quot;Sensio\\Bundle\\FrameworkExtraBundle\\EventListener\\TemplateListener::onKernelController&quot;.\n        </li>\n            <li class=\"error\">\n            CRITICAL - Uncaught PHP Exception Symfony\\Component\\DependencyInjection\\Exception\\ServiceNotFoundException: &quot;You have requested a non-existent service &quot;common.service.repository&quot;. Did you mean one of these: &quot;sysadmin.service.repository&quot;, &quot;login.service.repository&quot;?&quot; at /usr/share/nginx/html/weboffice/vendor/symfony/symfony/src/Symfony/Component/DependencyInjection/Container.php line 266\n        </li>\n            <li>\n            DEBUG - Notified event &quot;kernel.request&quot; to listener &quot;Symfony\\Component\\HttpKernel\\EventListener\\DebugHandlersListener::configure&quot;.\n        </li>\n            <li>\n            DEBUG - Notified event &quot;kernel.request&quot; to listener &quot;Symfony\\Component\\HttpKernel\\EventListener\\DumpListener::configure&quot;.\n        </li>\n            <li>\n            DEBUG - Notified event &quot;kernel.request&quot; to listener &quot;Symfony\\Component\\HttpKernel\\EventListener\\ValidateRequestListener::onKernelRequest&quot;.\n        </li>\n            <li>\n            DEBUG - Notified event &quot;kernel.request&quot; to listener &quot;Symfony\\Bundle\\FrameworkBundle\\EventListener\\SessionListener::onKernelRequest&quot;.\n        </li>\n            <li>\n            DEBUG - Notified event &quot;kernel.request&quot; to listener &quot;Symfony\\Component\\HttpKernel\\EventListener\\FragmentListener::onKernelRequest&quot;.\n        </li>\n            <li>\n            DEBUG - Notified event &quot;kernel.request&quot; to listener &quot;Symfony\\Component\\HttpKernel\\EventListener\\RouterListener::onKernelRequest&quot;.\n        </li>\n            <li>\n            DEBUG - Notified event &quot;kernel.request&quot; to listener &quot;Symfony\\Component\\HttpKernel\\EventListener\\LocaleListener::onKernelRequest&quot;.\n        </li>\n            <li>\n            DEBUG - Notified event &quot;kernel.request&quot; to listener &quot;Symfony\\Component\\HttpKernel\\EventListener\\TranslatorListener::onKernelRequest&quot;.\n        </li>\n            <li>\n            DEBUG - Notified event &quot;kernel.request&quot; to listener &quot;Symfony\\Component\\Security\\Http\\Firewall::onKernelRequest&quot;.\n        </li>\n            <li>\n            DEBUG - Notified event &quot;kernel.request&quot; to listener &quot;Symfony\\Bundle\\AsseticBundle\\EventListener\\RequestListener::onKernelRequest&quot;.\n        </li>\n            <li>\n            DEBUG - Notified event &quot;kernel.controller&quot; to listener &quot;Symfony\\Bundle\\FrameworkBundle\\DataCollector\\RouterDataCollector::onKernelController&quot;.\n        </li>\n            <li>\n            DEBUG - Notified event &quot;kernel.controller&quot; to listener &quot;Symfony\\Component\\HttpKernel\\DataCollector\\RequestDataCollector::onKernelController&quot;.\n        </li>\n            <li>\n            DEBUG - Notified event &quot;kernel.controller&quot; to listener &quot;Sensio\\Bundle\\FrameworkExtraBundle\\EventListener\\ControllerListener::onKernelController&quot;.\n        </li>\n            <li>\n            DEBUG - Notified event &quot;kernel.controller&quot; to listener &quot;Sensio\\Bundle\\FrameworkExtraBundle\\EventListener\\ParamConverterListener::onKernelController&quot;.\n        </li>\n            <li>\n            DEBUG - Notified event &quot;kernel.controller&quot; to listener &quot;Sensio\\Bundle\\FrameworkExtraBundle\\EventListener\\HttpCacheListener::onKernelController&quot;.\n        </li>\n            <li>\n            DEBUG - Notified event &quot;kernel.controller&quot; to listener &quot;Sensio\\Bundle\\FrameworkExtraBundle\\EventListener\\SecurityListener::onKernelController&quot;.\n        </li>\n            <li>\n            DEBUG - Notified event &quot;kernel.controller&quot; to listener &quot;Sensio\\Bundle\\FrameworkExtraBundle\\EventListener\\TemplateListener::onKernelController&quot;.\n        </li>\n            <li>\n            INFO - Defining the getGlobals() method in the &quot;appConf&quot; extension without explicitly implementing Twig_Extension_GlobalsInterface is deprecated since version 1.23.\n        </li>\n    </ol>\n        </div>\n    </div>\n\n\n<div class=\"block\">\n    <h2>\n        Stack Trace (Plain Text)&nbsp;\n        <a href=\"#\" onclick=\"toggle('traces-text'); switchIcons('icon-traces-text-open', 'icon-traces-text-close'); return false;\"><img class=\"toggle\" id=\"icon-traces-text-close\" alt=\"-\" src=\"data:image/gif;base64,R0lGODlhEgASAMQSANft94TG57Hb8GS44ez1+mC24IvK6ePx+Wa44dXs92+942e54o3L6W2844/M6dnu+P/+/l614P///wAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACH5BAEAABIALAAAAAASABIAQAVCoCQBTBOd6Kk4gJhGBCTPxysJb44K0qD/ER/wlxjmisZkMqBEBW5NHrMZmVKvv9hMVsO+hE0EoNAstEYGxG9heIhCADs=\" style=\"display: none\" /><img class=\"toggle\" id=\"icon-traces-text-open\" alt=\"+\" src=\"data:image/gif;base64,R0lGODlhEgASAMQTANft99/v+Ga44bHb8ITG52S44dXs9+z1+uPx+YvK6WC24G+944/M6W28443L6dnu+Ge54v/+/l614P///wAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACH5BAEAABMALAAAAAASABIAQAVS4DQBTiOd6LkwgJgeUSzHSDoNaZ4PU6FLgYBA5/vFID/DbylRGiNIZu74I0h1hNsVxbNuUV4d9SsZM2EzWe1qThVzwWFOAFCQFa1RQq6DJB4iIQA7\" style=\"display: inline\" /></a>    </h2>\n\n    <div id=\"traces-text\" class=\"trace\" style=\"display: none;\">\n<pre>[1] Symfony\\Component\\DependencyInjection\\Exception\\ServiceNotFoundException: You have requested a non-existent service &quot;common.service.repository&quot;. Did you mean one of these: &quot;sysadmin.service.repository&quot;, &quot;login.service.repository&quot;?\n    at n/a\n        in /usr/share/nginx/html/weboffice/vendor/symfony/symfony/src/Symfony/Component/DependencyInjection/Container.php line 266\n\n    at Symfony\\Component\\DependencyInjection\\Container->get('common.service.repository')\n        in /usr/share/nginx/html/weboffice/vendor/symfony/symfony/src/Symfony/Bundle/FrameworkBundle/Controller/Controller.php line 363\n\n    at Symfony\\Bundle\\FrameworkBundle\\Controller\\Controller->get('common.service.repository')\n        in /usr/share/nginx/html/weboffice/src/AppBundle/Controller/BaseEntityController.php line 1703\n\n    at AppBundle\\Controller\\BaseEntityController->getRepositoryService('Place', 'CommonBundle')\n        in /usr/share/nginx/html/weboffice/src/AppBundle/Controller/BaseEntityController.php line 1717\n\n    at AppBundle\\Controller\\BaseEntityController->getLocalRepositoryService()\n        in /usr/share/nginx/html/weboffice/src/AppBundle/Controller/BaseEntityController.php line 78\n\n    at AppBundle\\Controller\\BaseEntityController->setLocalConf()\n        in /usr/share/nginx/html/weboffice/src/AppBundle/Controller/BaseEntityController.php line 31\n\n    at AppBundle\\Controller\\BaseEntityController->init(object(Request))\n        in /usr/share/nginx/html/weboffice/src/CommonBundle/Controller/PlaceController.php line 38\n\n    at CommonBundle\\Controller\\PlaceController->init(object(Request))\n        in /usr/share/nginx/html/weboffice/src/AppBundle/Controller/BaseEntityController.php line 549\n\n    at AppBundle\\Controller\\BaseEntityController->editAction(object(Request), null)\n        in /usr/share/nginx/html/weboffice/src/CommonBundle/Controller/PlaceController.php line 104\n\n    at CommonBundle\\Controller\\PlaceController->editAction(object(Request), null)\n        in  line \n\n    at call_user_func_array(array(object(PlaceController), 'editAction'), array(object(Request), null))\n        in /usr/share/nginx/html/weboffice/vendor/symfony/symfony/src/Symfony/Component/HttpKernel/HttpKernel.php line 144\n\n    at Symfony\\Component\\HttpKernel\\HttpKernel->handleRaw(object(Request), '1')\n        in /usr/share/nginx/html/weboffice/vendor/symfony/symfony/src/Symfony/Component/HttpKernel/HttpKernel.php line 64\n\n    at Symfony\\Component\\HttpKernel\\HttpKernel->handle(object(Request), '1', true)\n        in /usr/share/nginx/html/weboffice/vendor/symfony/symfony/src/Symfony/Component/HttpKernel/Kernel.php line 169\n\n    at Symfony\\Component\\HttpKernel\\Kernel->handle(object(Request))\n        in /usr/share/nginx/html/weboffice/web/app_dev.php line 31\n\n</pre>\n    </div>\n</div>\n\n<script type=\"text/javascript\">//<![CDATA[\n    function toggle(id, clazz) {\n        var el = document.getElementById(id),\n            current = el.style.display,\n            i;\n\n        if (clazz) {\n            var tags = document.getElementsByTagName('*');\n            for (i = tags.length - 1; i >= 0; i--) {\n                if (tags[i].className === clazz) {\n                    tags[i].style.display = 'none';\n                }\n            }\n        }\n\n        el.style.display = current === 'none' ? 'block' : 'none';\n    }\n\n    function switchIcons(id1, id2) {\n        var icon1, icon2, display1, display2;\n\n        icon1 = document.getElementById(id1);\n        icon2 = document.getElementById(id2);\n\n        display1 = icon1.style.display;\n        display2 = icon2.style.display;\n\n        icon1.style.display = display2;\n        icon2.style.display = display1;\n    }\n//]]></script>\n            </div>\n        </div>\n    </body>\n</html>\n"

/***/ }),

/***/ "../../../../../src/EntitiesBundle/Resources/public/client/index/ts/src/edit.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EditComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__AppBundle_Resources_public_form_ts_form_popup_extension_component__ = __webpack_require__("../../../../../src/AppBundle/Resources/public/form/ts/form-popup.extension-component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__AppBundle_Resources_public_form_ts_form_service__ = __webpack_require__("../../../../../src/AppBundle/Resources/public/form/ts/form.service.ts");
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};



var EditComponent = (function (_super) {
    __extends(EditComponent, _super);
    function EditComponent(elementRef, renderer, provider, formService, dataService, _helperService) {
        var _this = _super.call(this) || this;
        _this._helperService = _helperService;
        _super.prototype.initFormPopupExtensionComponent.call(_this, elementRef, renderer, provider, formService, dataService);
        return _this;
    }
    /**
     * onEntityChange
     * @param value
     */
    EditComponent.prototype.onEntityChange = function (value) {
        var that = this;
        this._dataService.runAction((this._helperService.getAppVar('route')
            + 'entities/client/change-entity/'
            + value
            + (this._formService.getObject()['id'] ? ('/' + this._formService.getObject()['id']) : ''))).then(function (data) {
            if (data['object']) {
                that._dataService.setObject(data['object']);
            }
        }, function (errors) { console.log(errors); return; });
    };
    EditComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: '.js_edit',
            template: __webpack_require__("../../../../../src/EntitiesBundle/Resources/public/client/index/ts/templates/edit.component.html")
        }),
        __param(2, Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["y" /* Inject */])('Provider')),
        __param(4, Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["y" /* Inject */])('DataService')),
        __param(5, Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["y" /* Inject */])('HelperService')),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_core__["t" /* ElementRef */],
            __WEBPACK_IMPORTED_MODULE_0__angular_core__["U" /* Renderer */], Object, __WEBPACK_IMPORTED_MODULE_2__AppBundle_Resources_public_form_ts_form_service__["a" /* FormService */], Object, Object])
    ], EditComponent);
    return EditComponent;
}(__WEBPACK_IMPORTED_MODULE_1__AppBundle_Resources_public_form_ts_form_popup_extension_component__["a" /* FormPopupExtensionComponent */]));



/***/ }),

/***/ "../../../../../src/EntitiesBundle/Resources/public/client/index/ts/src/edit.ext-module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EditExtModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("../../../common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ng_bootstrap_ng_bootstrap__ = __webpack_require__("../../../../@ng-bootstrap/ng-bootstrap/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__AppBundle_Resources_public_form_ts_field_types_field_types_extension_module__ = __webpack_require__("../../../../../src/AppBundle/Resources/public/form/ts/field-types/field-types.extension-module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__edit_component__ = __webpack_require__("../../../../../src/EntitiesBundle/Resources/public/client/index/ts/src/edit.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






var EditExtModule = (function () {
    function EditExtModule() {
    }
    EditExtModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["H" /* NgModule */])({
            imports: [__WEBPACK_IMPORTED_MODULE_1__angular_common__["a" /* CommonModule */], __WEBPACK_IMPORTED_MODULE_2__angular_forms__["b" /* FormsModule */], __WEBPACK_IMPORTED_MODULE_2__angular_forms__["e" /* ReactiveFormsModule */], __WEBPACK_IMPORTED_MODULE_3__ng_bootstrap_ng_bootstrap__["a" /* NgbModule */], __WEBPACK_IMPORTED_MODULE_4__AppBundle_Resources_public_form_ts_field_types_field_types_extension_module__["a" /* FieldTypesExtensionModule */]],
            declarations: [
                __WEBPACK_IMPORTED_MODULE_5__edit_component__["a" /* EditComponent */]
            ],
            exports: [__WEBPACK_IMPORTED_MODULE_5__edit_component__["a" /* EditComponent */]]
        })
    ], EditExtModule);
    return EditExtModule;
}());



/***/ }),

/***/ "../../../../../src/EntitiesBundle/Resources/public/client/index/ts/templates/edit.component.html":
/***/ (function(module, exports) {

module.exports = "    \n    <form name=\"form\" method=\"post\" (ngSubmit)=\"saveAction($event)\" [formGroup]=\"_formService.getForm()\" class=\"form-horizontal\">\n<div class=\"modal-header\">\n    <div class=\"row align-items-center\">\n        <h3 class=\"col-auto mr-auto modal-title\">Form&nbsp;{{getProviderAttr('label')}}<small>&nbsp;({{(_formService && _formService.getObject() && _formService.getObject().id) ? 'edit' : 'add'}})</small></h3>\n        <div class=\"col-auto text-right actions\"><a\n                class=\"-round fa fa-times\"\n                (click)=\"closeAction($event)\"></a></div>\n    </div>\n</div>\n<div class=\"modal-body\">\n    <div class=\"row\">\n        <div class=\"col-12\">    \n            \n\n                <div class=\"row form-group\" *ngIf=\"_formService.getObject().code\">\n\n                        <label class=\"col-sm-2 control-label\" for=\"form_code\">Code</label>\n    \n            <div class=\"col-sm-10\">\n                                        <p id=\"form_code\"\n               class=\"form-control-static\"\n               [innerHTML]=\"_formService.getViewObject().code\"></p>\n                        <label class=\"error\" *ngFor=\"let error of _formService.getErrors().code\">{{error}}</label>\n            </div>\n        </div>\n                \n\n                <div class=\"row form-group\" >\n\n                        <label class=\"col-sm-2 control-label\" for=\"form_selectEntityObj\">Entity</label>\n    \n            <div class=\"col-sm-10\">\n                                            <input [(ngModel)]=\"_formService.getObject().selectEntityObj\"\n           formControlName = selectEntityObj\n           name=\"form[selectEntityObj]\"\n                      type=\"hidden\">\n    <js_autoComplete [field]=\"'selectEntityObj'\"\n                     [hasSelfReference]=\"_dataService.getFieldChoicesAttr('selectEntityObj', 'hasSelfReference')\"\n                                              (onChange)=\"onEntityChange($event)\"[placeholder]=\"&#039;Entity&#039;\"                         ></js_autoComplete>\n                    <label class=\"error\" *ngFor=\"let error of _formService.getErrors().selectEntityObj\">{{error}}</label>\n            </div>\n        </div>\n                \n\n                <div class=\"row form-group\" *ngIf=\"_formService.getObject().avatar\">\n\n                        <label class=\"col-sm-2 control-label\" for=\"form_entityObj_avatar\">Avatar</label>\n    \n            <div class=\"col-sm-10\">\n                                        <p id=\"form_entityObj_avatar\"\n               class=\"form-control-static\"\n               [innerHTML]=\"_formService.getViewObject().avatar\"></p>\n                        <label class=\"error\" *ngFor=\"let error of _formService.getErrors().avatar\">{{error}}</label>\n            </div>\n        </div>\n                \n\n                <div class=\"row form-group\" >\n\n                        <label class=\"col-sm-2 control-label required\" for=\"form_entityObj_title\">Title</label>\n    \n            <div class=\"col-sm-10\">\n                                                                    \n        <select id=\"form_entityObj_title\" name=\"form[entityObj][title]\" [(ngModel)]=\"_formService.getObject().title\" formControlName=\"title\" [class.error]=\"_formService.getErrors().title &amp;&amp; _formService.getErrors().title.length &gt; 0\" class=\"form-control\">            <option value=\"Mr.\" >Mr.</option>            <option value=\"Ms.\" >Ms.</option></select>\n    <input [(ngModel)]=\"_formService.getObject().title\"\n           formControlName = title\n           required=\"required\"           type=\"hidden\">\n\n                            <label class=\"error\" *ngFor=\"let error of _formService.getErrors().title\">{{error}}</label>\n            </div>\n        </div>\n                \n\n                <div class=\"row form-group\" >\n\n                        <label class=\"col-sm-2 control-label required\" for=\"form_entityObj_name\">Name</label>\n    \n            <div class=\"col-sm-10\">\n                                            <input type=\"text\" id=\"form_entityObj_name\" name=\"form[entityObj][name]\" required=\"required\" maxlength=\"64\" [(ngModel)]=\"_formService.getObject().name\" formControlName=\"name\" [class.error]=\"_formService.getErrors().name &amp;&amp; _formService.getErrors().name.length &gt; 0\" class=\"form-control\" />\n                <label class=\"error\" *ngFor=\"let error of _formService.getErrors().name\">{{error}}</label>\n            </div>\n        </div>\n                \n\n                <div class=\"row form-group\" >\n\n                        <label class=\"col-sm-2 control-label required\" for=\"form_entityObj_surname\">Surname</label>\n    \n            <div class=\"col-sm-10\">\n                                            <input type=\"text\" id=\"form_entityObj_surname\" name=\"form[entityObj][surname]\" required=\"required\" maxlength=\"64\" [(ngModel)]=\"_formService.getObject().surname\" formControlName=\"surname\" [class.error]=\"_formService.getErrors().surname &amp;&amp; _formService.getErrors().surname.length &gt; 0\" class=\"form-control\" />\n                <label class=\"error\" *ngFor=\"let error of _formService.getErrors().surname\">{{error}}</label>\n            </div>\n        </div>\n                \n\n                <div class=\"row form-group\" >\n\n                        <label class=\"col-sm-2 control-label\" for=\"form_entityObj_legalName\">Legal Name</label>\n    \n            <div class=\"col-sm-10\">\n                                            <input type=\"text\" id=\"form_entityObj_legalName\" name=\"form[entityObj][legalName]\" maxlength=\"128\" [(ngModel)]=\"_formService.getObject().legalName\" formControlName=\"legalName\" [class.error]=\"_formService.getErrors().legalName &amp;&amp; _formService.getErrors().legalName.length &gt; 0\" class=\"form-control\" />\n                <label class=\"error\" *ngFor=\"let error of _formService.getErrors().legalName\">{{error}}</label>\n            </div>\n        </div>\n                \n\n                <div class=\"row form-group\" >\n\n                        <label class=\"col-sm-2 control-label\" for=\"form_entityObj_birthDate\">Birth Date</label>\n    \n            <div class=\"col-sm-10\">\n                                        \n    <div class=\"input-group js_dataPicker\"\n         [datePicker]=\"'birthDate'\"\n         #dpk_birthDate=\"\" [control]=\"dpk_birthDate\">\n        <input type=\"text\"\n               class=\"form-control\"\n               placeholder=\"yyyy-mm-dd\"\n               [(ngModel)]=\"_formService.getObject().birthDate\"\n               formControlName = birthDate\n               name=\"form[entityObj][birthDate]\"\n                              [class.error]=\"_formService.getErrors()['birthDate'] && (_formService.getErrors()['birthDate'].length > 0)\"\n               ngbDatepicker #dpk_birthDate=\"ngbDatepicker\">\n        <div class=\"input-group-append\">\n            <button class=\"btn\" type=\"button\"><a class=\"fa fa-calendar\"></a></button>\n        </div>\n    </div>\n    \n                <label class=\"error\" *ngFor=\"let error of _formService.getErrors().birthDate\">{{error}}</label>\n            </div>\n        </div>\n                \n\n                <div class=\"row form-group\" >\n\n                        <label class=\"col-sm-2 control-label\" for=\"form_entityObj_taxNumber\">Tax Number</label>\n    \n            <div class=\"col-sm-10\">\n                                            <input type=\"text\" id=\"form_entityObj_taxNumber\" name=\"form[entityObj][taxNumber]\" maxlength=\"16\" [(ngModel)]=\"_formService.getObject().taxNumber\" formControlName=\"taxNumber\" [class.error]=\"_formService.getErrors().taxNumber &amp;&amp; _formService.getErrors().taxNumber.length &gt; 0\" class=\"form-control\" />\n                <label class=\"error\" *ngFor=\"let error of _formService.getErrors().taxNumber\">{{error}}</label>\n            </div>\n        </div>\n                \n\n                <div class=\"row form-group\" *ngIf=\"_formService.getObject().insertTime\">\n\n                        <label class=\"col-sm-2 control-label required\" for=\"form_insertTime\">Insert Time</label>\n    \n            <div class=\"col-sm-10\">\n                                        <p id=\"form_insertTime\"\n               class=\"form-control-static\"\n               [innerHTML]=\"_formService.getViewObject().insertTime\"></p>\n                        <label class=\"error\" *ngFor=\"let error of _formService.getErrors().insertTime\">{{error}}</label>\n            </div>\n        </div>\n                \n\n                <div class=\"row form-group\" *ngIf=\"_formService.getObject().insertUser\">\n\n                        <label class=\"col-sm-2 control-label required\" for=\"form_insertUser\">Insert User</label>\n    \n            <div class=\"col-sm-10\">\n                                        <p id=\"form_insertUser\"\n               class=\"form-control-static\"\n               [innerHTML]=\"_formService.getViewObject().insertUser\"></p>\n                        <label class=\"error\" *ngFor=\"let error of _formService.getErrors().insertUser\">{{error}}</label>\n            </div>\n        </div>\n                \n\n                <div class=\"row form-group\" >\n\n                        <label class=\"col-sm-2 control-label\">Enabled</label>\n    \n            <div class=\"col-sm-10\">\n                                            <div class=\"checkbox\">                                        <label><input type=\"checkbox\" id=\"form_isEnabled\" name=\"form[isEnabled]\" [(ngModel)]=\"_formService.getObject().isEnabled\" formControlName=\"isEnabled\" [class.error]=\"_formService.getErrors().isEnabled &amp;&amp; _formService.getErrors().isEnabled.length &gt; 0\" value=\"1\" checked=\"checked\" /> Is enabled</label>\n    </div>\n                <label class=\"error\" *ngFor=\"let error of _formService.getErrors().isEnabled\">{{error}}</label>\n            </div>\n        </div>\n        </div>\n    </div>\n</div>\n<div class=\"modal-footer hide-on-empty\">\n        \n                    <div class=\"row\">\n            <div class=\"col-auto ml-auto\">\n                                            <button                                     class=\"btn btn-light\"\n                                    (click)=\"cancelAction($event)\"\n                                        id=\"form_cancel\"\n            name=\"form[cancel]\"\n            type=\"button\"><i class=\"fa fa-times\"></i>&nbsp;Cancel</button>\n                                                <button                                     class=\"btn btn-light\"\n                                    (click)=\"resetAction($event)\"\n                                        id=\"form_reset\"\n            name=\"form[reset]\"\n            type=\"button\"><i class=\"fa fa-ban\"></i>&nbsp;Reset</button>\n                                                <button                                     class=\"btn btn-primary\"\n                                    (click)=\"saveAction($event)\"\n                                        id=\"form_save\"\n            name=\"form[save]\"\n            type=\"button\"><i class=\"fa fa-check\"></i>&nbsp;Save</button>\n                                                <button                                     class=\"btn btn-primary\"\n                                    (click)=\"saveAndCloseAction($event)\"\n                                        id=\"form_saveAndClose\"\n            name=\"form[saveAndClose]\"\n            type=\"button\"><i class=\"fa fa-times\"></i>&nbsp;Save and Close</button>\n                                </div>\n        </div>\n    </div>    \n    <input type=\"hidden\" id=\"form__token\" name=\"form[_token]\" value=\"sEeUTtNqE_lLiY0RIyodAt-zpCXEmA5IHyk5lwPbGSo\" /></form>\n"

/***/ }),

/***/ "../../../../../src/EntitiesBundle/Resources/public/supplier/index/ts/src/edit.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EditComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__AppBundle_Resources_public_form_ts_form_popup_extension_component__ = __webpack_require__("../../../../../src/AppBundle/Resources/public/form/ts/form-popup.extension-component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__AppBundle_Resources_public_form_ts_form_service__ = __webpack_require__("../../../../../src/AppBundle/Resources/public/form/ts/form.service.ts");
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};



var EditComponent = (function (_super) {
    __extends(EditComponent, _super);
    function EditComponent(elementRef, renderer, provider, formService, dataService, _helperService) {
        var _this = _super.call(this) || this;
        _this._helperService = _helperService;
        _super.prototype.initFormPopupExtensionComponent.call(_this, elementRef, renderer, provider, formService, dataService);
        return _this;
    }
    /**
     * onEntityChange
     * @param value
     */
    EditComponent.prototype.onEntityChange = function (value) {
        var that = this;
        this._dataService.runAction((this._helperService.getAppVar('route')
            + 'entities/client/change-entity/'
            + value
            + (this._formService.getObject()['id'] ? ('/' + this._formService.getObject()['id']) : ''))).then(function (data) {
            if (data['object']) {
                that._dataService.setObject(data['object']);
            }
        }, function (errors) { console.log(errors); return; });
    };
    EditComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: '.js_edit',
            template: __webpack_require__("../../../../../src/EntitiesBundle/Resources/public/supplier/index/ts/templates/edit.component.html")
        }),
        __param(2, Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["y" /* Inject */])('Provider')),
        __param(4, Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["y" /* Inject */])('DataService')),
        __param(5, Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["y" /* Inject */])('HelperService')),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_core__["t" /* ElementRef */],
            __WEBPACK_IMPORTED_MODULE_0__angular_core__["U" /* Renderer */], Object, __WEBPACK_IMPORTED_MODULE_2__AppBundle_Resources_public_form_ts_form_service__["a" /* FormService */], Object, Object])
    ], EditComponent);
    return EditComponent;
}(__WEBPACK_IMPORTED_MODULE_1__AppBundle_Resources_public_form_ts_form_popup_extension_component__["a" /* FormPopupExtensionComponent */]));



/***/ }),

/***/ "../../../../../src/EntitiesBundle/Resources/public/supplier/index/ts/src/edit.ext-module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EditExtModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("../../../common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ng_bootstrap_ng_bootstrap__ = __webpack_require__("../../../../@ng-bootstrap/ng-bootstrap/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__AppBundle_Resources_public_form_ts_field_types_field_types_extension_module__ = __webpack_require__("../../../../../src/AppBundle/Resources/public/form/ts/field-types/field-types.extension-module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__edit_component__ = __webpack_require__("../../../../../src/EntitiesBundle/Resources/public/supplier/index/ts/src/edit.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






var EditExtModule = (function () {
    function EditExtModule() {
    }
    EditExtModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["H" /* NgModule */])({
            imports: [__WEBPACK_IMPORTED_MODULE_1__angular_common__["a" /* CommonModule */], __WEBPACK_IMPORTED_MODULE_2__angular_forms__["b" /* FormsModule */], __WEBPACK_IMPORTED_MODULE_2__angular_forms__["e" /* ReactiveFormsModule */], __WEBPACK_IMPORTED_MODULE_3__ng_bootstrap_ng_bootstrap__["a" /* NgbModule */], __WEBPACK_IMPORTED_MODULE_4__AppBundle_Resources_public_form_ts_field_types_field_types_extension_module__["a" /* FieldTypesExtensionModule */]],
            declarations: [
                __WEBPACK_IMPORTED_MODULE_5__edit_component__["a" /* EditComponent */]
            ],
            exports: [__WEBPACK_IMPORTED_MODULE_5__edit_component__["a" /* EditComponent */]]
        })
    ], EditExtModule);
    return EditExtModule;
}());



/***/ }),

/***/ "../../../../../src/EntitiesBundle/Resources/public/supplier/index/ts/templates/edit.component.html":
/***/ (function(module, exports) {

module.exports = "    \n    <form name=\"form\" method=\"post\" (ngSubmit)=\"saveAction($event)\" [formGroup]=\"_formService.getForm()\" class=\"form-horizontal\">\n<div class=\"modal-header\">\n    <div class=\"row align-items-center\">\n        <h3 class=\"col-auto mr-auto modal-title\">Form&nbsp;{{getProviderAttr('label')}}<small>&nbsp;({{(_formService && _formService.getObject() && _formService.getObject().id) ? 'edit' : 'add'}})</small></h3>\n        <div class=\"col-auto text-right actions\"><a\n                class=\"-round fa fa-times\"\n                (click)=\"closeAction($event)\"></a></div>\n    </div>\n</div>\n<div class=\"modal-body\">\n    <div class=\"row\">\n        <div class=\"col-12\">    \n            \n\n                <div class=\"row form-group\" *ngIf=\"_formService.getObject().code\">\n\n                        <label class=\"col-sm-2 control-label\" for=\"form_code\">Code</label>\n    \n            <div class=\"col-sm-10\">\n                                        <p id=\"form_code\"\n               class=\"form-control-static\"\n               [innerHTML]=\"_formService.getViewObject().code\"></p>\n                        <label class=\"error\" *ngFor=\"let error of _formService.getErrors().code\">{{error}}</label>\n            </div>\n        </div>\n                \n\n                <div class=\"row form-group\" >\n\n                        <label class=\"col-sm-2 control-label\" for=\"form_selectEntityObj\">Entity</label>\n    \n            <div class=\"col-sm-10\">\n                                            <input [(ngModel)]=\"_formService.getObject().selectEntityObj\"\n           formControlName = selectEntityObj\n           name=\"form[selectEntityObj]\"\n                      type=\"hidden\">\n    <js_autoComplete [field]=\"'selectEntityObj'\"\n                     [hasSelfReference]=\"_dataService.getFieldChoicesAttr('selectEntityObj', 'hasSelfReference')\"\n                                              (onChange)=\"onEntityChange($event)\"[placeholder]=\"&#039;Entity&#039;\"                         ></js_autoComplete>\n                    <label class=\"error\" *ngFor=\"let error of _formService.getErrors().selectEntityObj\">{{error}}</label>\n            </div>\n        </div>\n                \n\n                <div class=\"row form-group\" *ngIf=\"_formService.getObject().avatar\">\n\n                        <label class=\"col-sm-2 control-label\" for=\"form_entityObj_avatar\">Avatar</label>\n    \n            <div class=\"col-sm-10\">\n                                        <p id=\"form_entityObj_avatar\"\n               class=\"form-control-static\"\n               [innerHTML]=\"_formService.getViewObject().avatar\"></p>\n                        <label class=\"error\" *ngFor=\"let error of _formService.getErrors().avatar\">{{error}}</label>\n            </div>\n        </div>\n                \n\n                <div class=\"row form-group\" >\n\n                        <label class=\"col-sm-2 control-label required\" for=\"form_entityObj_title\">Title</label>\n    \n            <div class=\"col-sm-10\">\n                                                                    \n        <select id=\"form_entityObj_title\" name=\"form[entityObj][title]\" [(ngModel)]=\"_formService.getObject().title\" formControlName=\"title\" [class.error]=\"_formService.getErrors().title &amp;&amp; _formService.getErrors().title.length &gt; 0\" class=\"form-control\">            <option value=\"Mr.\" >Mr.</option>            <option value=\"Ms.\" >Ms.</option></select>\n    <input [(ngModel)]=\"_formService.getObject().title\"\n           formControlName = title\n           required=\"required\"           type=\"hidden\">\n\n                            <label class=\"error\" *ngFor=\"let error of _formService.getErrors().title\">{{error}}</label>\n            </div>\n        </div>\n                \n\n                <div class=\"row form-group\" >\n\n                        <label class=\"col-sm-2 control-label required\" for=\"form_entityObj_name\">Name</label>\n    \n            <div class=\"col-sm-10\">\n                                            <input type=\"text\" id=\"form_entityObj_name\" name=\"form[entityObj][name]\" required=\"required\" maxlength=\"64\" [(ngModel)]=\"_formService.getObject().name\" formControlName=\"name\" [class.error]=\"_formService.getErrors().name &amp;&amp; _formService.getErrors().name.length &gt; 0\" class=\"form-control\" />\n                <label class=\"error\" *ngFor=\"let error of _formService.getErrors().name\">{{error}}</label>\n            </div>\n        </div>\n                \n\n                <div class=\"row form-group\" >\n\n                        <label class=\"col-sm-2 control-label required\" for=\"form_entityObj_surname\">Surname</label>\n    \n            <div class=\"col-sm-10\">\n                                            <input type=\"text\" id=\"form_entityObj_surname\" name=\"form[entityObj][surname]\" required=\"required\" maxlength=\"64\" [(ngModel)]=\"_formService.getObject().surname\" formControlName=\"surname\" [class.error]=\"_formService.getErrors().surname &amp;&amp; _formService.getErrors().surname.length &gt; 0\" class=\"form-control\" />\n                <label class=\"error\" *ngFor=\"let error of _formService.getErrors().surname\">{{error}}</label>\n            </div>\n        </div>\n                \n\n                <div class=\"row form-group\" >\n\n                        <label class=\"col-sm-2 control-label\" for=\"form_entityObj_legalName\">Legal Name</label>\n    \n            <div class=\"col-sm-10\">\n                                            <input type=\"text\" id=\"form_entityObj_legalName\" name=\"form[entityObj][legalName]\" maxlength=\"128\" [(ngModel)]=\"_formService.getObject().legalName\" formControlName=\"legalName\" [class.error]=\"_formService.getErrors().legalName &amp;&amp; _formService.getErrors().legalName.length &gt; 0\" class=\"form-control\" />\n                <label class=\"error\" *ngFor=\"let error of _formService.getErrors().legalName\">{{error}}</label>\n            </div>\n        </div>\n                \n\n                <div class=\"row form-group\" >\n\n                        <label class=\"col-sm-2 control-label\" for=\"form_entityObj_birthDate\">Birth Date</label>\n    \n            <div class=\"col-sm-10\">\n                                        \n    <div class=\"input-group js_dataPicker\"\n         [datePicker]=\"'birthDate'\"\n         #dpk_birthDate=\"\" [control]=\"dpk_birthDate\">\n        <input type=\"text\"\n               class=\"form-control\"\n               placeholder=\"yyyy-mm-dd\"\n               [(ngModel)]=\"_formService.getObject().birthDate\"\n               formControlName = birthDate\n               name=\"form[entityObj][birthDate]\"\n                              [class.error]=\"_formService.getErrors()['birthDate'] && (_formService.getErrors()['birthDate'].length > 0)\"\n               ngbDatepicker #dpk_birthDate=\"ngbDatepicker\">\n        <div class=\"input-group-append\">\n            <button class=\"btn\" type=\"button\"><a class=\"fa fa-calendar\"></a></button>\n        </div>\n    </div>\n    \n                <label class=\"error\" *ngFor=\"let error of _formService.getErrors().birthDate\">{{error}}</label>\n            </div>\n        </div>\n                \n\n                <div class=\"row form-group\" >\n\n                        <label class=\"col-sm-2 control-label\" for=\"form_entityObj_taxNumber\">Tax Number</label>\n    \n            <div class=\"col-sm-10\">\n                                            <input type=\"text\" id=\"form_entityObj_taxNumber\" name=\"form[entityObj][taxNumber]\" maxlength=\"16\" [(ngModel)]=\"_formService.getObject().taxNumber\" formControlName=\"taxNumber\" [class.error]=\"_formService.getErrors().taxNumber &amp;&amp; _formService.getErrors().taxNumber.length &gt; 0\" class=\"form-control\" />\n                <label class=\"error\" *ngFor=\"let error of _formService.getErrors().taxNumber\">{{error}}</label>\n            </div>\n        </div>\n                \n\n                <div class=\"row form-group\" *ngIf=\"_formService.getObject().insertTime\">\n\n                        <label class=\"col-sm-2 control-label required\" for=\"form_insertTime\">Insert Time</label>\n    \n            <div class=\"col-sm-10\">\n                                        <p id=\"form_insertTime\"\n               class=\"form-control-static\"\n               [innerHTML]=\"_formService.getViewObject().insertTime\"></p>\n                        <label class=\"error\" *ngFor=\"let error of _formService.getErrors().insertTime\">{{error}}</label>\n            </div>\n        </div>\n                \n\n                <div class=\"row form-group\" *ngIf=\"_formService.getObject().insertUser\">\n\n                        <label class=\"col-sm-2 control-label required\" for=\"form_insertUser\">Insert User</label>\n    \n            <div class=\"col-sm-10\">\n                                        <p id=\"form_insertUser\"\n               class=\"form-control-static\"\n               [innerHTML]=\"_formService.getViewObject().insertUser\"></p>\n                        <label class=\"error\" *ngFor=\"let error of _formService.getErrors().insertUser\">{{error}}</label>\n            </div>\n        </div>\n                \n\n                <div class=\"row form-group\" >\n\n                        <label class=\"col-sm-2 control-label\">Enabled</label>\n    \n            <div class=\"col-sm-10\">\n                                            <div class=\"checkbox\">                                        <label><input type=\"checkbox\" id=\"form_isEnabled\" name=\"form[isEnabled]\" [(ngModel)]=\"_formService.getObject().isEnabled\" formControlName=\"isEnabled\" [class.error]=\"_formService.getErrors().isEnabled &amp;&amp; _formService.getErrors().isEnabled.length &gt; 0\" value=\"1\" checked=\"checked\" /> Is enabled</label>\n    </div>\n                <label class=\"error\" *ngFor=\"let error of _formService.getErrors().isEnabled\">{{error}}</label>\n            </div>\n        </div>\n        </div>\n    </div>\n</div>\n<div class=\"modal-footer hide-on-empty\">\n        \n                    <div class=\"row\">\n            <div class=\"col-auto ml-auto\">\n                                            <button                                     class=\"btn btn-light\"\n                                    (click)=\"cancelAction($event)\"\n                                        id=\"form_cancel\"\n            name=\"form[cancel]\"\n            type=\"button\"><i class=\"fa fa-times\"></i>&nbsp;Cancel</button>\n                                                <button                                     class=\"btn btn-light\"\n                                    (click)=\"resetAction($event)\"\n                                        id=\"form_reset\"\n            name=\"form[reset]\"\n            type=\"button\"><i class=\"fa fa-ban\"></i>&nbsp;Reset</button>\n                                                <button                                     class=\"btn btn-primary\"\n                                    (click)=\"saveAction($event)\"\n                                        id=\"form_save\"\n            name=\"form[save]\"\n            type=\"button\"><i class=\"fa fa-check\"></i>&nbsp;Save</button>\n                                                <button                                     class=\"btn btn-primary\"\n                                    (click)=\"saveAndCloseAction($event)\"\n                                        id=\"form_saveAndClose\"\n            name=\"form[saveAndClose]\"\n            type=\"button\"><i class=\"fa fa-times\"></i>&nbsp;Save and Close</button>\n                                </div>\n        </div>\n    </div>    \n    <input type=\"hidden\" id=\"form__token\" name=\"form[_token]\" value=\"sEeUTtNqE_lLiY0RIyodAt-zpCXEmA5IHyk5lwPbGSo\" /></form>\n"

/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("../../../../../src/BookingBundle/Resources/public/package-booking/index/ts/src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map