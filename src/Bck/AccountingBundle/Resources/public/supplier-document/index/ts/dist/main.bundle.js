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
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DataBoxComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__data_box_extension_component__ = __webpack_require__("../../../../../src/AppBundle/Resources/public/data-box/ts/src/data-box.extension-component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__modal_ts_modal_service__ = __webpack_require__("../../../../../src/AppBundle/Resources/public/modal/ts/modal.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ts_actions_actions_service__ = __webpack_require__("../../../../../src/AppBundle/Resources/public/ts/actions/actions.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__tasks_loader_manager_ts_tasks_loader_manager_service__ = __webpack_require__("../../../../../src/AppBundle/Resources/public/tasks-loader-manager/ts/tasks-loader-manager.service.ts");
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return __WEBPACK_IMPORTED_MODULE_1__data_box_extension_component__["b"]; });
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
            __WEBPACK_IMPORTED_MODULE_0__angular_core__["U" /* Renderer */], Object, Object, __WEBPACK_IMPORTED_MODULE_4__tasks_loader_manager_ts_tasks_loader_manager_service__["a" /* TasksLoaderManagerService */], Object, __WEBPACK_IMPORTED_MODULE_3__ts_actions_actions_service__["a" /* ActionsService */],
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
    add: 'add',
    email: 'email'
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
     * @param target (element target to check the legend)
     * @param exprField (field on which the expression is checked,
     *     it's used when the field is not provided in legend, like in actions legend)
     * @returns {string}
     */
    DataBoxExtensionComponent.prototype.getLegendClasses = function (object, target, exprField) {
        if (exprField === void 0) { exprField = null; }
        var legend = this._provider['controls']['legend'];
        if (!object || !legend) {
            return '';
        }
        for (var _i = 0, legend_1 = legend; _i < legend_1.length; _i++) {
            var legendControl = legend_1[_i];
            var legendExprField = (legendControl['field'] || exprField), legendTarget = (legendControl['target'] || 'tr');
            // Check target, if is not the same jump the loop
            if ((legendTarget != target) || (!legendExprField) || (legendExprField == '')) {
                continue;
            }
            var expr = (legendControl['expr'] || 'notNull'), isExprNotNull = (expr == 'notNull'), 
            // Check in original field first if defined
            fieldValue = ((object['__' + legendExprField] !== undefined) ? object['__' + legendExprField] : object[legendExprField]);
            // Normalize value
            if (this._dataService.getFields('metadata')[legendExprField]) {
                switch (this._dataService.getFields('metadata')[legendExprField].type) {
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
     * Get actions legend classes
     * @param object
     * @param action (action to check the legend)
     * @returns {string}
     */
    DataBoxExtensionComponent.prototype.getActionsLegendClasses = function (object, action) {
        var field = null, classes = '';
        switch (action) {
            case 'pdf':
                field = 'isAccessed';
                break;
            case 'email':
                field = 'isSent';
                break;
        }
        if (field) {
            classes = this.getLegendClasses(object, 'actions', field);
        }
        return (classes == '') ? classes : (' ' + classes); // Add space to put legend classes after icon class
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
     * Pdf action.
     * @param $event
     * @param data
     */
    DataBoxExtensionComponent.prototype.pdfAction = function ($event, data) {
        if ($event) {
            $event.preventDefault();
        }
        this._dataService.pdf(data);
    };
    /**
     * Email action.
     * @param $event
     * @param data
     */
    DataBoxExtensionComponent.prototype.emailAction = function ($event, data) {
        var _this = this;
        if ($event) {
            $event.preventDefault();
        }
        // Select object index in DataService to update object after sent email
        if (!this._dataService.setObjectIndex(data)) {
            return;
        }
        var that = this, popup = this._popups['email'], object = this._dataService.getObject(data);
        if (!popup['injector']) {
            // It's the firs time that popup is open, so we need to supply the providers
            var context_1 = popup['localData']['context'], route = (this._helperService.getAppVar('route') + 'bck/common/email/conf');
            this._dataService.runAction(route).then(function (data) {
                // Update route of "new" action
                data['route']['new']['url'] = (data['route']['new']['url'] + '/' + context_1 + '/' + object['id']);
                popup['providers'] = popup['providers'].concat([
                    { provide: 'DataServiceProvider', useValue: that._helperService.getDataServiceProvider(data) },
                    { provide: 'Provider', useValue: that._helperService.getFormProvider(data) },
                    { provide: 'ParentDataService', useValue: _this._dataService }
                ]);
                var resolvedProviders = __WEBPACK_IMPORTED_MODULE_0__angular_core__["T" /* ReflectiveInjector */].resolve(popup['providers']);
                popup['injector'] = __WEBPACK_IMPORTED_MODULE_0__angular_core__["T" /* ReflectiveInjector */].fromResolvedProviders(resolvedProviders, that._injector);
                var emailDataService = popup['injector'].get('DataService');
                emailDataService.newObject().then(function (data) { that.openPopup('email'); }, function (errors) { console.log(errors); });
            }, function (errors) { console.log(errors); });
        }
        else {
            // Update route of "new" action
            var emailDataService = popup['injector'].get('DataService'), newEmailRoute = emailDataService.getRoute('new');
            newEmailRoute = (newEmailRoute.substring(0, newEmailRoute.lastIndexOf("/")) + '/' + object['id']);
            emailDataService.setRoute('new', newEmailRoute);
            emailDataService.newObject().then(function (data) { that.openPopup('email'); }, function (errors) { console.log(errors); });
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

/***/ "../../../../../src/AppBundle/Resources/public/data-box/ts/src/data-box.extension-module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DataBoxExtensionModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("../../../common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ts_search_search_module__ = __webpack_require__("../../../../../src/AppBundle/Resources/public/ts/search/search.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ts_expander_expander_module__ = __webpack_require__("../../../../../src/AppBundle/Resources/public/ts/expander/expander.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ts_search_search_pagination_module__ = __webpack_require__("../../../../../src/AppBundle/Resources/public/ts/search/search-pagination.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__legend_ts_src_legend_ext_module__ = __webpack_require__("../../../../../src/AppBundle/Resources/public/legend/ts/src/legend.ext-module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__data_box_component__ = __webpack_require__("../../../../../src/AppBundle/Resources/public/data-box/ts/src/data-box.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


// This module doesn't use "ReactiveFormsModule", but it needs to import this class
// to provide "formBuilder" when inject dependencies in child modules (like form)






var DataBoxExtensionModule = (function () {
    function DataBoxExtensionModule() {
    }
    DataBoxExtensionModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["H" /* NgModule */])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_common__["a" /* CommonModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_forms__["b" /* FormsModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_forms__["e" /* ReactiveFormsModule */],
                __WEBPACK_IMPORTED_MODULE_3__ts_search_search_module__["a" /* SearchModule */],
                __WEBPACK_IMPORTED_MODULE_5__ts_search_search_pagination_module__["a" /* SearchPaginationModule */],
                __WEBPACK_IMPORTED_MODULE_4__ts_expander_expander_module__["a" /* ExpanderModule */],
                __WEBPACK_IMPORTED_MODULE_6__legend_ts_src_legend_ext_module__["a" /* LegendExtModule */]
            ],
            declarations: [
                __WEBPACK_IMPORTED_MODULE_7__data_box_component__["a" /* DataBoxComponent */]
            ],
            exports: [__WEBPACK_IMPORTED_MODULE_7__data_box_component__["a" /* DataBoxComponent */]]
        })
    ], DataBoxExtensionModule);
    return DataBoxExtensionModule;
}());



/***/ }),

/***/ "../../../../../src/AppBundle/Resources/public/data-box/ts/templates/data-box.component.html":
/***/ (function(module, exports) {

module.exports = "\n\n<div class=\"ibox\" >\n                        <div class=\"ibox-title\" *ngIf=\"!getProviderExtraDataAttr('hasMergeHeader')\">\n                <h5>\n                    <ng-template [ngIf]=\"getProviderAttr('controls')['expander']['isEnabled']\"><js_expander\n                        [isExpanded]=\"_isExpanded || null\"\n                        [label]=\"getLang(getProviderAttr('label'))\"\n                        [labelCount]=\"getProviderAttr('labelCount')\"\n                        [labelIcon]=\"getProviderAttr('labelIcon')\"\n                        (onChange)=\"expanderAction($event)\"></js_expander></ng-template>\n                    <ng-template [ngIf]=\"!getProviderAttr('controls')['expander']['isEnabled']\">\n                        <span [innerHTML]=\"getProviderAttr('label')\"></span>\n                    </ng-template>\n                </h5>\n                <div *ngIf=\"_isExpanded\"\n                     class=\"txt-align-r hide-on-empty\">    <div class=\"row align-items-center\">\n        <div class=\"col ml-auto text-right actions no-user-select\">\n            <ng-template [ngIf]=\"_actionsService.getActionAttr('search', 'isEnabled')\"><js_search class=\"search\"></js_search></ng-template>\n            <div (click)=\"triggerAction($event)\">\n                <ng-template ngFor let-action [ngForOf]=\"_actionsService.getHeadActions()\">\n                    <a *ngIf=\"_actionsService.getActionAttr(action, 'isEnabled')\"\n                       [ngClass]=\"[_actionsService.getActionAttr(action, 'icon')]\"\n                       class=\"-round fa\"\n                       [attr.data-action]=\"action\"></a>\n                </ng-template>\n            </div>\n        </div>\n    </div>\n</div>\n            </div>\n            \n    <div [hidden]=\"!(_isExpanded)\" class=\"ibox-content hide-on-empty\">    <ng-template [ngIf]=\"(_dataService.getProviderAttr('objects') && _dataService.getProviderAttr('objects')[0])\">\n                \n    <div class=\"table-responsive\">\n    <form>    <table class=\"data-table table table-hover dataTables-example table-bordered\">\n        <thead>\n        <tr>\n            <th *ngFor=\"let searchField of _dataService.getSearch('fields')\">{{ getLang(_dataService.getFields('metadata')[searchField].label) }}</th>\n            <th>&nbsp;</th>\n        </tr>\n        </thead>        <tbody>\n        <ng-template ngFor let-obj [ngForOf]=\"_dataService.getProviderAttr('objects')\" let-objIndex=\"index\">\n        <tr (dblclick)=\"editAction($event, objIndex)\"            [ngClass]=\"getLegendClasses(obj, 'tr')\">                    <td *ngFor=\"let searchField of _dataService.getSearch('fields')\"\n    [ngClass]=\"getColAlign(searchField)\"\n    [innerHTML]=\"obj[searchField]\"></td>                        <td>\n                <span *ngIf=\"obj['_isNew']\" class=\"badge badge-info\">New</span>\n                <span *ngIf=\"obj['_isEdited']\" class=\"badge badge-info\">Edited</span>\n                <input *ngIf=\"_actionsService.getActionAttr('radioChoice', 'isEnabled')\"\n                       class=\"pull-right action\"\n                       type=\"radio\"\n                       name=\"index[]\"\n                       value=\"{{objIndex}}\"/>\n                <input *ngIf=\"_actionsService.getActionAttr('checkAll', 'isEnabled')\"\n                       class=\"pull-right action js_checkAll\"\n                       type=\"checkbox\"\n                       name=\"index[]\"\n                       value=\"{{objIndex}}\"\n                       [ngModel]=\"checkAll\"/>\n                <div class=\"pull-right actions no-user-select text-secondary\" (click)=\"triggerAction($event)\">\n                    <ng-template ngFor let-action [ngForOf]=\"_actionsService.getDetailActions()\">\n                        <a *ngIf=\"_actionsService.getActionAttr(action, 'isEnabled')\"\n                           [ngClass]=\"[_actionsService.getActionAttr(action, 'icon') + getActionsLegendClasses(obj, action)]\"\n                           class=\"fa\"\n                           [attr.data-action]=\"action\"\n                           [attr.data-value]=\"objIndex\"></a>\n                    </ng-template>\n                </div>\n            </td>        </tr>\n        </ng-template>\n        </tbody>\n    </table>\n    </form></div>    </ng-template><p\n        class=\"text-center\"\n        *ngIf=\"!(_dataService.getProviderAttr('objects') && _dataService.getProviderAttr('objects')[0])\">No results.</p>\n</div>\n        <div [hidden]=\"!(_isExpanded)\"\n         class=\"ibox-footer\"\n         *ngIf=\"_dataService.countObjects() > 0\"><js_searchPagination></js_searchPagination></div>\n\n</div>\n\n<js_legend></js_legend>"

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
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__tasks_loader_manager_ts_tasks_loader_manager_service__ = __webpack_require__("../../../../../src/AppBundle/Resources/public/tasks-loader-manager/ts/tasks-loader-manager.service.ts");
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
    function FieldTypeAutoCompleteComponent(_postService, _modalService, _dataService, _tasksLoaderManagerService, _formService, _injector, _autoCompleteProviders, _helperService, _elementRef) {
        var _this = this;
        this._postService = _postService;
        this._modalService = _modalService;
        this._dataService = _dataService;
        this._tasksLoaderManagerService = _tasksLoaderManagerService;
        this._formService = _formService;
        this._injector = _injector;
        this._autoCompleteProviders = _autoCompleteProviders;
        this._helperService = _helperService;
        this._elementRef = _elementRef;
        this.placeholder = ''; // Set empty as default, because value can be undefined
        this.onChange = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["v" /* EventEmitter */](); // When choice change or the data of current choice is edited
        this._isInitialized = false; // Controls if the component was already initialized.
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
        if (this._childDataServiceChoices) {
            this._choices = (this._childDataServiceChoices.getProviderAttr('objects') || []);
        }
        else {
            this._choices = [];
        }
        this._isHidden = !this.hasChoices();
        return this;
    };
    /**
     * Host event
     * @param $event
     */
    FieldTypeAutoCompleteComponent.prototype.onDocumentClick = function ($event) {
        if (!this._elementRef.nativeElement.contains($event.target)) {
            this._isHidden = true;
        }
    };
    /**
     * onInputClick event (when enter in input).
     * @param $event
     */
    FieldTypeAutoCompleteComponent.prototype.onInputClick = function ($event) {
        $event.preventDefault();
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
        var that = this;
        // Init component
        this.init().then(function (data) {
            that._search.term = $event.target.value;
            if ((that._search.term != that._search.lastTerm)
                && (that._search.term.length % 3 === 0) // Only submit with multiples of three
            ) {
                that._childCandidateSearch['criteria'] = [{
                        'field': that._searchField,
                        'expr': 'lrlike',
                        'value': that._search.term
                    }];
                var route = that.getChoicesRoute();
                that._childDataServiceChoices.choices(route);
                that._search.lastTerm = that._search.term;
            }
        }, function (errors) { return; });
    };
    /**
     * onControlClick (arrow of select control)
     * @param $event
     */
    FieldTypeAutoCompleteComponent.prototype.onControlClick = function ($event) {
        $event.preventDefault();
        var that = this;
        if (this.hasChoices()) {
            this._isHidden = !this._isHidden;
        }
        else {
            // Init component
            this.init().then(function (data) {
                var route = that.getChoicesRoute();
                that._childDataServiceChoices.choices(route);
            }, function (errors) { return; });
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
        // After select, hide choices box
        this._isHidden = true;
    };
    /**
     * Get more objects (pagination)
     * @param $event
     */
    FieldTypeAutoCompleteComponent.prototype.getMoreObjects = function ($event) {
        $event.preventDefault();
        $event.stopPropagation(); // Here the stop propagation can be used, because we click inside of choices box
        var route = this.getChoicesRoute();
        this._childDataServiceChoices.choices(route);
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
                var that_1 = this;
                // Init component
                this.init().then(function (data) {
                    that_1.openPopup(that_1._controlMode);
                }, function (errors) { return; });
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
        if (popupType === void 0) { popupType = __WEBPACK_IMPORTED_MODULE_5__data_box_ts_src_data_box_component__["b" /* PopupTypes */].edit; }
        var that = this, fieldValue = this._object[this.field];
        // Inject object to edit in child DataService
        if (fieldValue) {
            // Simulate object
            var object = { id: fieldValue };
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
        if (popupType === void 0) { popupType = __WEBPACK_IMPORTED_MODULE_5__data_box_ts_src_data_box_component__["b" /* PopupTypes */].edit; }
        popupType = (__WEBPACK_IMPORTED_MODULE_5__data_box_ts_src_data_box_component__["b" /* PopupTypes */][popupType] || __WEBPACK_IMPORTED_MODULE_5__data_box_ts_src_data_box_component__["b" /* PopupTypes */].edit);
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
     * Get choices route
     * Choices routes need to be set each time that route is called, because params can change dinamically
     * (like occurs on "ClientPaymentRequest > Edit" )
     * @returns string
     */
    FieldTypeAutoCompleteComponent.prototype.getChoicesRoute = function () {
        var route = this._childDataServiceChoices.getRoute('choices');
        // Add parameter to action route
        if (this._provider.urlChoicesParams) {
            route += ('/' + this._provider.urlChoicesParams);
        }
        return route;
    };
    /**
     * Initialize variables and dependencies.
     * @returns {Promise<boolean>}
     */
    FieldTypeAutoCompleteComponent.prototype.init = function () {
        var that = this;
        return new Promise(function (resolve, reject) {
            // Set configuration only once. Avoid to set configuration unnecessarily.
            if (that._isInitialized) {
                return resolve(true);
            }
            // Only init, if init is not yet running (avoid task duplication)
            if (!that._tasksLoaderManagerService.addTask('INIT_AUTO_COMPLETE')) {
                return reject(false);
            }
            // Dependency conf previously saved in provider
            if (that._provider.childInjector) {
                that._childInjector = that._provider.childInjector;
                that.initVariables();
                that._isInitialized = true;
                that._tasksLoaderManagerService.delTask('INIT_AUTO_COMPLETE');
                return resolve(true);
            }
            // Dependency conf for first time
            return that._postService.post(that._provider.urlConf, null).then(function (data) {
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
                that.initVariables();
                that._isInitialized = true;
                that._tasksLoaderManagerService.delTask('INIT_AUTO_COMPLETE');
                return resolve(true);
            }, function (errors) {
                console.log(errors);
                that._tasksLoaderManagerService.delTask('INIT_AUTO_COMPLETE');
                return reject(false);
            });
        });
    };
    /**
     * Initialize variables.
     * @returns {FieldTypeAutoCompleteComponent}
     */
    FieldTypeAutoCompleteComponent.prototype.initVariables = function () {
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
        // Reset criteria to avoid filter by default criteria (defined in php controller)
        this._childCandidateSearch['criteria'] = [];
        return this;
    };
    /**
     * Lifecycle callback
     */
    FieldTypeAutoCompleteComponent.prototype.ngOnInit = function () {
        // Initialize values
        this._provider = (this._autoCompleteProviders[this.field] || null);
        if (this._provider.field) {
            this._searchField = this._provider.field;
        }
        this._fieldInView = (this._dataService.getProviderAttr('fields')['metadata'][this.field]['fieldInView'] || null);
        this.reset();
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
            __WEBPACK_IMPORTED_MODULE_2__modal_ts_modal_service__["b" /* ModalService */], Object, __WEBPACK_IMPORTED_MODULE_6__tasks_loader_manager_ts_tasks_loader_manager_service__["a" /* TasksLoaderManagerService */],
            __WEBPACK_IMPORTED_MODULE_4__form_service__["a" /* FormService */],
            __WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Injector */], Object, Object, __WEBPACK_IMPORTED_MODULE_0__angular_core__["t" /* ElementRef */]])
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
     * Save object. Handle submit form.
     * This override add a closePopup behavior.
     * This method should be called from child component.
     * @returns {Promise}
     */
    FormExtensionComponent.prototype.save = function () {
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
    FormExtensionComponent.prototype.saveAction = function ($event) {
        if ($event === void 0) { $event = null; }
        if ($event) {
            $event.preventDefault();
        }
        this.save().then(function (data) { return; }, function (errors) { return; });
    };
    /**
     * Reset action.
     * This method should be called from view/template.
     * @param $event
     */
    FormExtensionComponent.prototype.resetAction = function ($event) {
        if ($event === void 0) { $event = null; }
        this._formService.resetAction($event);
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
        // Waiting mode for save process ends here, after update the original object.
        // Prevents the object being updated two times, by the "Form" "save" and the "DataService" object change emitter.
        this._tasksLoaderManagerService.delTask('SAVE_' + this._uniqueId);
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
        // Compare the working object "this._object" that it's a clone of "this._originalNormalizedObject" with your
        // original object of cloning "this._originalNormalizedObject"
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
        if (value === undefined) {
            return; // Possible wrong element of the click event
        }
        // Accept null values to set null some fields, like not mandatory fields
        value = (value || null);
        if (field in this._object) {
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
     * Validate form
     * @returns {boolean}
     */
    FormService.prototype.validate = function () {
        this._errors = {};
        for (var control in this._form.controls) {
            if (!this._form.controls[control].valid) {
                this._errors[control] = ['Required'];
            }
        }
        return !(this._helperService.objectLength(this._errors) > 0);
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
                if (hasValidation && !that.validate()) {
                    that._tasksLoaderManagerService.delTask('SAVE_' + that._uniqueId); // Cancel save, form has errors
                    return reject(false);
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
                    // Task removed in "setObject" method to prevent multiple updates of it
                    //that._tasksLoaderManagerService.delTask('SAVE_'+that._uniqueId);
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

/***/ "../../../../../src/AppBundle/Resources/public/tree-view/default/ts/src/controls/tree-view-control-actions.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TreeViewControlActionsComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__tree_view_component__ = __webpack_require__("../../../../../src/AppBundle/Resources/public/tree-view/default/ts/src/tree-view.component.ts");
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
var TreeViewControlActionsComponent = (function () {
    function TreeViewControlActionsComponent(_dataService) {
        this._dataService = _dataService;
    }
    /**
     * Lifecycle callback
     */
    TreeViewControlActionsComponent.prototype.ngOnInit = function () {
        this._object = this._dataService.getProviderAttr('objects')[this.nodesIndex][this.objectIndex];
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Input */])(),
        __metadata("design:type", Object)
    ], TreeViewControlActionsComponent.prototype, "objectIndex", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Input */])(),
        __metadata("design:type", Number)
    ], TreeViewControlActionsComponent.prototype, "nodesIndex", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Input */])(),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1__tree_view_component__["a" /* TreeViewComponent */])
    ], TreeViewControlActionsComponent.prototype, "treeViewComponent", void 0);
    TreeViewControlActionsComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'js_treeViewControl',
            template: "\n    <span *ngIf=\"_object['_isNew']\" class=\"badge badge-info\">New</span>\n    <span *ngIf=\"_object['_isEdited']\" class=\"badge badge-info\">Edited</span>\n    <input *ngIf=\"treeViewComponent._actionsService.getActionAttr('radioChoice', 'isEnabled') && treeViewComponent.getNodes(nodesIndex)[objectIndex]['id']\"\n           class=\"pull-right action\"\n           type=\"radio\"\n           name=\"index[]\"\n           value=\"{{nodesIndex}}::{{objectIndex}}\"/>\n    <input *ngIf=\"treeViewComponent._actionsService.getActionAttr('checkAll', 'isEnabled') && treeViewComponent.getNodes(nodesIndex)[objectIndex]['id']\"\n           class=\"pull-right action js_checkAll\"\n           type=\"checkbox\"\n           name=\"index[]\"\n           value=\"{{nodesIndex}}::{{objectIndex}}\"\n           [ngModel]=\"treeViewComponent.checkAll\"/>\n    <div class=\"txt-align-r actions no-user-select text-secondary\">\n        <ng-template ngFor let-action [ngForOf]=\"treeViewComponent._actionsService.getDetailActions()\">\n            <a *ngIf=\"treeViewComponent._actionsService.getActionAttr(action, 'isEnabled')\"\n               (click)=\"treeViewComponent.triggerAction($event, action, {objIndex: objectIndex, parentNodeIndex: nodesIndex})\"\n               [ngClass]=\"[treeViewComponent._actionsService.getActionAttr(action, 'icon')]\"\n               class=\"fa\"></a>\n        </ng-template>\n    </div>\n    "
        }),
        __param(0, Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["y" /* Inject */])('DataService')),
        __metadata("design:paramtypes", [Object])
    ], TreeViewControlActionsComponent);
    return TreeViewControlActionsComponent;
}());



/***/ }),

/***/ "../../../../../src/AppBundle/Resources/public/tree-view/default/ts/src/nodes/tree-view-node-actions.ext-module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TreeViewNodeActionsExtModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("../../../common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ts_search_search_module__ = __webpack_require__("../../../../../src/AppBundle/Resources/public/ts/search/search.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ts_expander_expander_module__ = __webpack_require__("../../../../../src/AppBundle/Resources/public/ts/expander/expander.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ts_search_search_pagination_module__ = __webpack_require__("../../../../../src/AppBundle/Resources/public/ts/search/search-pagination.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__tree_view_node_component__ = __webpack_require__("../../../../../src/AppBundle/Resources/public/tree-view/default/ts/src/nodes/tree-view-node.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__controls_tree_view_control_actions_component__ = __webpack_require__("../../../../../src/AppBundle/Resources/public/tree-view/default/ts/src/controls/tree-view-control-actions.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


// This module doesn't use "ReactiveFormsModule", but it needs to import this class
// to provide "formBuilder" when inject dependencies in child modules (like form)






var TreeViewNodeActionsExtModule = (function () {
    function TreeViewNodeActionsExtModule() {
    }
    TreeViewNodeActionsExtModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["H" /* NgModule */])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_common__["a" /* CommonModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_forms__["b" /* FormsModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_forms__["e" /* ReactiveFormsModule */],
                __WEBPACK_IMPORTED_MODULE_3__ts_search_search_module__["a" /* SearchModule */],
                __WEBPACK_IMPORTED_MODULE_5__ts_search_search_pagination_module__["a" /* SearchPaginationModule */],
                __WEBPACK_IMPORTED_MODULE_4__ts_expander_expander_module__["a" /* ExpanderModule */]
            ],
            declarations: [
                __WEBPACK_IMPORTED_MODULE_6__tree_view_node_component__["a" /* TreeViewNodeComponent */],
                __WEBPACK_IMPORTED_MODULE_7__controls_tree_view_control_actions_component__["a" /* TreeViewControlActionsComponent */]
            ],
            exports: [__WEBPACK_IMPORTED_MODULE_6__tree_view_node_component__["a" /* TreeViewNodeComponent */]]
        })
    ], TreeViewNodeActionsExtModule);
    return TreeViewNodeActionsExtModule;
}());



/***/ }),

/***/ "../../../../../src/AppBundle/Resources/public/tree-view/default/ts/src/nodes/tree-view-node.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TreeViewNodeComponent; });
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
/**
 * Component
 * Recursive node of tree view.
 * The node works with a specific control of ./controls/
 */
var TreeViewNodeComponent = (function () {
    function TreeViewNodeComponent() {
    }
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Input */])(),
        __metadata("design:type", Object)
    ], TreeViewNodeComponent.prototype, "nodes", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Input */])(),
        __metadata("design:type", Number)
    ], TreeViewNodeComponent.prototype, "nodesIndex", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Input */])(),
        __metadata("design:type", String)
    ], TreeViewNodeComponent.prototype, "parentTargetField", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Input */])(),
        __metadata("design:type", Object)
    ], TreeViewNodeComponent.prototype, "treeViewComponent", void 0);
    TreeViewNodeComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'js_treeViewNode',
            template: "\n    <li *ngFor=\"let obj of nodes; let objIndex = index\">\n        <a class=\"no-user-select\"\n           *ngIf=\"treeViewComponent.getNodes(obj[parentTargetField])\"\n           (click)=\"treeViewComponent.toggleExpanded(obj[parentTargetField])\"><i\n                [ngClass]=\"['fa', (treeViewComponent._expanded[obj[parentTargetField]] ? 'fa-angle-down' : 'fa-angle-right')]\"></i><i\n                    *ngIf=\"treeViewComponent.getIcon(obj)\"\n                    [ngClass]=\"['fa', treeViewComponent.getIcon(obj)]\"></i><span [innerHTML]=\"obj['name']\"></span></a>\n        <span *ngIf=\"!treeViewComponent.getNodes(obj[parentTargetField])\"><i\n                    *ngIf=\"treeViewComponent.getIcon(obj)\"\n                    [ngClass]=\"['fa', treeViewComponent.getIcon(obj)]\"></i><span [innerHTML]=\"obj['name']\"></span></span>\n        <js_treeViewControl [treeViewComponent]=\"treeViewComponent\" [objectIndex]=\"objIndex\" [nodesIndex]=\"nodesIndex\"></js_treeViewControl>\n        <ul *ngIf=\"treeViewComponent.getNodes(obj[parentTargetField]) && treeViewComponent._expanded[obj[parentTargetField]]\">\n            <js_treeViewNode [nodes]=\"treeViewComponent.getNodes(obj[parentTargetField])\"\n                             [nodesIndex]=\"obj[parentTargetField]\"\n                             [parentTargetField]=\"parentTargetField\"\n                             [treeViewComponent]=\"treeViewComponent\"></js_treeViewNode>\n        </ul>\n    </li>\n    "
        })
    ], TreeViewNodeComponent);
    return TreeViewNodeComponent;
}());



/***/ }),

/***/ "../../../../../src/AppBundle/Resources/public/tree-view/default/ts/src/tree-view.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TreeViewComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ts_actions_actions_service__ = __webpack_require__("../../../../../src/AppBundle/Resources/public/ts/actions/actions.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__modal_ts_modal_service__ = __webpack_require__("../../../../../src/AppBundle/Resources/public/modal/ts/modal.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__tree_view_ext_component__ = __webpack_require__("../../../../../src/AppBundle/Resources/public/tree-view/default/ts/src/tree-view.ext-component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__tasks_loader_manager_ts_tasks_loader_manager_service__ = __webpack_require__("../../../../../src/AppBundle/Resources/public/tasks-loader-manager/ts/tasks-loader-manager.service.ts");
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





var TreeViewComponent = (function (_super) {
    __extends(TreeViewComponent, _super);
    function TreeViewComponent(viewContainerRef, renderer, provider, dataService, tasksLoaderManagerService, helperService, actionsService, modalService, popups, injector) {
        var _this = 
        // Call parent
        _super.call(this) || this;
        _super.prototype.initTreeViewExtComponent.call(_this, viewContainerRef, renderer, provider, dataService, tasksLoaderManagerService, helperService, actionsService, modalService, popups, injector);
        return _this;
    }
    TreeViewComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: '.js_treeView',
            template: __webpack_require__("../../../../../src/AppBundle/Resources/public/tree-view/default/ts/templates/tree-view.component.html")
        }),
        __param(2, Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["y" /* Inject */])('Provider')),
        __param(3, Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["y" /* Inject */])('DataService')),
        __param(5, Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["y" /* Inject */])('HelperService')),
        __param(8, Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["y" /* Inject */])('Popups')),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_core__["_9" /* ViewContainerRef */],
            __WEBPACK_IMPORTED_MODULE_0__angular_core__["U" /* Renderer */], Object, Object, __WEBPACK_IMPORTED_MODULE_4__tasks_loader_manager_ts_tasks_loader_manager_service__["a" /* TasksLoaderManagerService */], Object, __WEBPACK_IMPORTED_MODULE_1__ts_actions_actions_service__["a" /* ActionsService */],
            __WEBPACK_IMPORTED_MODULE_2__modal_ts_modal_service__["b" /* ModalService */], Object, __WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Injector */]])
    ], TreeViewComponent);
    return TreeViewComponent;
}(__WEBPACK_IMPORTED_MODULE_3__tree_view_ext_component__["a" /* TreeViewExtComponent */]));



/***/ }),

/***/ "../../../../../src/AppBundle/Resources/public/tree-view/default/ts/src/tree-view.ext-component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TreeViewExtComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__data_box_ts_src_data_box_extension_component__ = __webpack_require__("../../../../../src/AppBundle/Resources/public/data-box/ts/src/data-box.extension-component.ts");
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


var TreeViewExtComponent = (function (_super) {
    __extends(TreeViewExtComponent, _super);
    function TreeViewExtComponent() {
        return _super.call(this) || this;
    }
    /**
     * Initialization of component (replace the original constructor to avoid angular injection inheritance bug)
     * @param viewContainerRef
     * @param renderer
     * @param provider
     * @param dataService
     * @param actionsService
     * @param modalService
     * @param popups
     * @param injector
     */
    TreeViewExtComponent.prototype.initTreeViewExtComponent = function (viewContainerRef, // Any is used, otherwise you get an error "[Class] is not defined"
        renderer, provider, dataService, // Any is used, otherwise you get an error "[Class] is not defined"
        tasksLoaderManagerService, helperService, actionsService, // Any is used, otherwise you get an error "[Class] is not defined"
        modalService, // Any is used, otherwise you get an error "[Class] is not defined"
        popups, injector) {
        _super.prototype.initDataBoxExtensionComponent.call(this, viewContainerRef, renderer, provider, dataService, tasksLoaderManagerService, helperService, actionsService, modalService, popups, injector);
        this._treeViewComponent = this;
        this._expanded = {};
    };
    /**
     * Get nodes
     * @param index
     * @returns {*|null}
     */
    TreeViewExtComponent.prototype.getNodes = function (index) {
        return (((index !== null)
            && this._dataService.getProviderAttr('objects')[index]
            && (this._dataService.getProviderAttr('objects')[index].length > 0))
            ? this._dataService.getProviderAttr('objects')[index]
            : null);
    };
    /**
     * Toggle expanded
     * @param index
     */
    TreeViewExtComponent.prototype.toggleExpanded = function (index) {
        this._expanded[index] = (this._expanded[index] ? false : true);
    };
    /**
     * Get icon
     * @param object
     * @returns {any}
     */
    TreeViewExtComponent.prototype.getIcon = function (object) {
        var iconField = this.getProviderAttr('iconField');
        if (iconField && object[iconField]) {
            var iconFieldMap = (this.getProviderAttr('iconFieldMap') || {});
            return (iconFieldMap[object[iconField]] || object[iconField]);
        }
        return (this.getProviderAttr('iconDefault') || null);
    };
    __decorate([
        __param(2, Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["y" /* Inject */])('Provider')),
        __param(3, Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["y" /* Inject */])('DataService')),
        __param(5, Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["y" /* Inject */])('HelperService')),
        __param(8, Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["y" /* Inject */])('Popups')),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Object, Object, Object, Object, Object, Object, Object, Object, Object, Object]),
        __metadata("design:returntype", void 0)
    ], TreeViewExtComponent.prototype, "initTreeViewExtComponent", null);
    TreeViewExtComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: '.js_treeView',
            template: ''
        }),
        __metadata("design:paramtypes", [])
    ], TreeViewExtComponent);
    return TreeViewExtComponent;
}(__WEBPACK_IMPORTED_MODULE_1__data_box_ts_src_data_box_extension_component__["a" /* DataBoxExtensionComponent */]));



/***/ }),

/***/ "../../../../../src/AppBundle/Resources/public/tree-view/default/ts/src/tree-view.ext-module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TreeViewExtModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("../../../common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ts_search_search_module__ = __webpack_require__("../../../../../src/AppBundle/Resources/public/ts/search/search.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ts_expander_expander_module__ = __webpack_require__("../../../../../src/AppBundle/Resources/public/ts/expander/expander.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__legend_ts_src_legend_ext_module__ = __webpack_require__("../../../../../src/AppBundle/Resources/public/legend/ts/src/legend.ext-module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__ts_search_search_pagination_module__ = __webpack_require__("../../../../../src/AppBundle/Resources/public/ts/search/search-pagination.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__nodes_tree_view_node_actions_ext_module__ = __webpack_require__("../../../../../src/AppBundle/Resources/public/tree-view/default/ts/src/nodes/tree-view-node-actions.ext-module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__tree_view_component__ = __webpack_require__("../../../../../src/AppBundle/Resources/public/tree-view/default/ts/src/tree-view.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


// This module doesn't use "ReactiveFormsModule", but it needs to import this class
// to provide "formBuilder" when inject dependencies in child modules (like form)







var TreeViewExtModule = (function () {
    function TreeViewExtModule() {
    }
    TreeViewExtModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["H" /* NgModule */])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_common__["a" /* CommonModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_forms__["b" /* FormsModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_forms__["e" /* ReactiveFormsModule */],
                __WEBPACK_IMPORTED_MODULE_3__ts_search_search_module__["a" /* SearchModule */],
                __WEBPACK_IMPORTED_MODULE_6__ts_search_search_pagination_module__["a" /* SearchPaginationModule */],
                __WEBPACK_IMPORTED_MODULE_4__ts_expander_expander_module__["a" /* ExpanderModule */],
                __WEBPACK_IMPORTED_MODULE_5__legend_ts_src_legend_ext_module__["a" /* LegendExtModule */],
                __WEBPACK_IMPORTED_MODULE_7__nodes_tree_view_node_actions_ext_module__["a" /* TreeViewNodeActionsExtModule */]
            ],
            declarations: [
                __WEBPACK_IMPORTED_MODULE_8__tree_view_component__["a" /* TreeViewComponent */]
            ],
            exports: [__WEBPACK_IMPORTED_MODULE_8__tree_view_component__["a" /* TreeViewComponent */]]
        })
    ], TreeViewExtModule);
    return TreeViewExtModule;
}());



/***/ }),

/***/ "../../../../../src/AppBundle/Resources/public/tree-view/default/ts/templates/tree-view.component.html":
/***/ (function(module, exports) {

module.exports = "\n\n<div class=\"ibox\" >\n                        <div class=\"ibox-title\" *ngIf=\"!getProviderExtraDataAttr('hasMergeHeader')\">\n                <h5>\n                    <ng-template [ngIf]=\"getProviderAttr('controls')['expander']['isEnabled']\"><js_expander\n                        [isExpanded]=\"_isExpanded || null\"\n                        [label]=\"getLang(getProviderAttr('label'))\"\n                        [labelCount]=\"getProviderAttr('labelCount')\"\n                        [labelIcon]=\"getProviderAttr('labelIcon')\"\n                        (onChange)=\"expanderAction($event)\"></js_expander></ng-template>\n                    <ng-template [ngIf]=\"!getProviderAttr('controls')['expander']['isEnabled']\">\n                        <span [innerHTML]=\"getProviderAttr('label')\"></span>\n                    </ng-template>\n                </h5>\n                <div *ngIf=\"_isExpanded\"\n                     class=\"txt-align-r hide-on-empty\">    <div class=\"row align-items-center\">\n        <div class=\"col ml-auto text-right actions no-user-select\">\n            <ng-template [ngIf]=\"_actionsService.getActionAttr('search', 'isEnabled')\"><js_search class=\"search\"></js_search></ng-template>\n            <div (click)=\"triggerAction($event)\">\n                <ng-template ngFor let-action [ngForOf]=\"_actionsService.getHeadActions()\">\n                    <a *ngIf=\"_actionsService.getActionAttr(action, 'isEnabled')\"\n                       [ngClass]=\"[_actionsService.getActionAttr(action, 'icon')]\"\n                       class=\"-round fa\"\n                       [attr.data-action]=\"action\"></a>\n                </ng-template>\n            </div>\n        </div>\n    </div>\n</div>\n            </div>\n            \n    <div [hidden]=\"!(_isExpanded)\" class=\"ibox-content hide-on-empty\">    <ng-template [ngIf]=\"(_dataService.getProviderAttr('objects') && _dataService.getProviderAttr('objects')[0])\">\n        <form>\n    <ul class=\"tree-view\">\n        <js_treeViewNode [nodes]=\"getNodes(0)\"\n                         [nodesIndex]=\"0\"\n                         [parentTargetField]=\"_provider['parentTargetField']\"\n                         [treeViewComponent]=\"_treeViewComponent\"></js_treeViewNode>\n    </ul>\n</form>    </ng-template><p\n        class=\"text-center\"\n        *ngIf=\"!(_dataService.getProviderAttr('objects') && _dataService.getProviderAttr('objects')[0])\">No results.</p>\n</div>\n    \n</div>\n\n<js_legend></js_legend>"

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
        return ((this._provider[attribute] === undefined) ? null : this._provider[attribute]); // Can be zero
    };
    /**
     * Get lang
     * @param key
     * @returns {any}
     */
    BaseExtensionComponent.prototype.getLang = function (key) {
        return ((!this._provider['language'] || (this._provider['language'][key] === undefined))
            ? key
            : this._provider['language'][key] // Can be zero
        );
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
        //$(this._elementRef.nativeElement).find('.js_lazy').Lazy();
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
        var expanderControl = this.getProviderAttr('controls')['expander'];
        this._isExpanded = (!expanderControl['isEnabled'] || expanderControl['isExpanded']);
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
        // If object is defined, then set the object (used by dynamic entity detail and login flat form)
        if (this._provider.object) {
            this.setLocalObject(this._provider.object);
        }
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
                    that.setLocalObject(data.object, false);
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
            this.setLocalObject(object);
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
     * @param hasTemplateNormalization
     * @returns {DataService}
     */
    DataService.prototype.setLocalObject = function (object, hasTemplateNormalization) {
        if (hasTemplateNormalization === void 0) { hasTemplateNormalization = true; }
        if (hasTemplateNormalization) {
            // Normalize object to template
            this._normalizedObject = this._helperService.cloneObject(object, true);
            this.normalizeObjectsToTemplate([this._normalizedObject]);
        }
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
     * Set object index
     * @param index
     */
    DataService.prototype.setObjectIndex = function (index) {
        var objectsProvider = (this._objectsProvider || this._provider.objects);
        if (index && objectsProvider[index]) {
            this._objectIndex = index;
            // Set the object to emit the object change for any process pendent
            this.setLocalObject(objectsProvider[index], false);
            return true;
        }
        return false;
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
                    var enumChoices = fieldsChoices[field]['value'];
                    for (var _b = 0, objects_3 = objects; _b < objects_3.length; _b++) {
                        var obj = objects_3[_b];
                        for (var _c = 0, enumChoices_1 = enumChoices; _c < enumChoices_1.length; _c++) {
                            var enumChoice = enumChoices_1[_c];
                            if (enumChoice['id'] == obj[field]) {
                                obj[field] = enumChoice['label'];
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
                    var iconText = (fieldMetadata['fieldInView'] && object[fieldMetadata['fieldInView']]
                        ? ' <span>' + object[fieldMetadata['fieldInView']] + '</span>'
                        : '');
                    return ('<i class="fa ' + value + '"></i>' + iconText);
                case 'link':
                    return ('<a href="' + value + '" target="_blank" class="text-base">' + value + '</a>');
                case 'img':
                case 'avatar':
                    var extraClass = ((fieldMetadata['type'] == 'avatar') ? 'img-circle' : 'thumbnail'), imageLabel = (fieldMetadata['fieldInView'] && object[fieldMetadata['fieldInView']]
                        ? '<div><small>' + object[fieldMetadata['fieldInView']] + '</small></div>'
                        : '');
                    // No image is provided
                    if (!value) {
                        return ('<img alt="' + fieldMetadata['label'] + '" class="' + extraClass
                            + '" src="/assets/img/dummy-48x48.png" width="48" height="48">' + imageLabel);
                    }
                    // @TODO NOTE: Image lazy load is disabled, needs to be checked later
                    // Regular load
                    //if (!this._hasAssetsLazyLoader) {
                    return ('<img alt="' + fieldMetadata['label'] + '" class="' + extraClass
                        + '" src="' + (this._helperService.getUploadWebPath(value) || value)
                        + '" width="48" height="48">' + imageLabel);
                //}
                // Use lazy loader
                /*return this._sanitizer.bypassSecurityTrustHtml(
                    '<img alt="' + fieldMetadata['label'] + '" class="js_lazy ' + extraClass
                    + '" src="/assets/img/dummy-48x48.png" data-src="'
                    + (this._helperService.getUploadWebPath(value) || value)
                    + '" width="48" height="48">' + imageLabel
                );*/
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
     * @param route
     * @returns {DataService}
     */
    DataService.prototype.choices = function (route) {
        if (route === void 0) { route = null; }
        var that = this, noReset = true;
        // Only search if parameters have changed (only criteria is changed)
        if (!this._helperService.isEqualObject(this._provider['search']['criteria'], this._candidateSearch['criteria'])) {
            // Update search
            this._provider['search']['criteria'] = this._candidateSearch['criteria'].slice(0);
            // Reset pagination for new search
            this.resetPagination();
            // To reset objects
            noReset = false;
        }
        // No field is necessary, is returned the choices pattern (minimizes data sent)
        this._provider['search']['fields'] = [];
        route = (route || this._provider.route['choices']['url']);
        this._postService.post(route, this.getRequestData(null, noReset)).then(function (data) {
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
     * Get pdf
     * @param index
     * @returns any
     */
    DataService.prototype.pdf = function (index) {
        var objectsProvider = (this._objectsProvider || this._provider.objects), object = (objectsProvider[index] || null);
        if (object) {
            // Update "isAccessed" value of object,
            // in this case does not matter if object is really updated with success in database
            if (object['__isAccessed'] !== undefined) {
                object['__isAccessed'] = true;
            }
            return this.redirect('pdf', index);
        }
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
        var objectId = null, idField = (this._provider.route[route]['idField'] || 'id');
        // Get index from last selected object if not defined
        index = ((index == null) ? this._objectIndex : index);
        if (index !== null) {
            var objectsProvider = (this._objectsProvider || this._provider.objects);
            objectId = objectsProvider[index][idField];
        }
        else if (this._object) {
            // Id from provider object (defined on constructor)
            objectId = this._object[idField];
        }
        location.href = (this._provider.route[route]['url'] + (objectId ? ('/' + objectId) : ''));
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
                return resolve({});
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

/***/ "../../../../../src/AppBundle/Resources/public/ts/data-service/tree-view-data.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TreeViewDataService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__ = __webpack_require__("../../../platform-browser/esm5/platform-browser.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__post_service__ = __webpack_require__("../../../../../src/AppBundle/Resources/public/ts/post.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__data_service__ = __webpack_require__("../../../../../src/AppBundle/Resources/public/ts/data-service/data.service.ts");
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




/**
 * This class handles with data in tree-view context.
 * Tree-view are a different objects array structure (hierarchical) than a regular DataService.
 */
var TreeViewDataService = (function (_super) {
    __extends(TreeViewDataService, _super);
    function TreeViewDataService(postService, helperService, provider, sanitizer) {
        var _this = _super.call(this, postService, helperService, provider, sanitizer) || this;
        // Index in _provider.objects that contents the partial _objectsProvider of _provider.objects
        // where the object is housed
        _this._objectsProviderIndex = null;
        return _this;
    }
    /**
     * Get object index
     * @returns any
     */
    TreeViewDataService.prototype.getObjectIndex = function () {
        return { 'objIndex': this._objectIndex, 'parentNodeIndex': this._objectsProviderIndex };
    };
    /**
     * Count objects (used in pagination)
     * @returns {number}
     */
    TreeViewDataService.prototype.countObjects = function () {
        var objects = (this._provider.objects || {}), includeRootIndex = false, total = 0;
        // Check if root nodes (at index 0) has id, if no is id provided, then this objects are not able to check
        if (objects[0] && objects[0][0] && objects[0][0]['id']) {
            includeRootIndex = true;
        }
        for (var index in objects) {
            if ((parseInt(index, 10) != 0) || includeRootIndex) {
                total += this._helperService.varCount(objects[index] || []);
            }
        }
        return total;
    };
    /**
     * Select object
     * @param index
     * @returns {Promise}
     */
    TreeViewDataService.prototype.selectObject = function (index) {
        var that = this, objIndex = (index ? index['objIndex'] : null), parentNodeIndex = (index ? index['parentNodeIndex'] : null);
        return new Promise(function (resolve, reject) {
            // Set only if object is different
            if ((objIndex != that._objectIndex) || (parentNodeIndex != that._objectsProviderIndex)) {
                var objectsProvider_1 = that._provider.objects[parentNodeIndex];
                that._postService.post(that._provider.route['get']['url'] + '/' + objectsProvider_1[objIndex]['id'], that.getRequestData()).then(function (data) {
                    // The index of original object that was selected
                    that._objectIndex = objIndex;
                    that._objectsProviderIndex = parentNodeIndex;
                    that._objectsProvider = objectsProvider_1; // Necessary to set normalized object correctly
                    that.setLocalObject(data.object);
                    // Now object has all of fields with the values, is not limited to the search selected field,
                    // so we need normalize the object, because now it can has new values.
                    that.setNormalizedObject();
                    return resolve(true);
                }, function (errors) { console.log(errors); reject(false); });
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
     * @param index (can be only an index from DataService, or and object from out of service)
     * @returns any
     */
    TreeViewDataService.prototype.setObject = function (object, index) {
        if (index === void 0) { index = null; }
        if (object) {
            var objIndex = null;
            // Objects stored in session does not be considered really objects.
            if (!object['_isSessionStorage']) {
                objIndex = ((index && index['objIndex'])
                    ? index['objIndex'] // From out of service
                    : index // From DataService or not defined
                );
                var oldParentNodeIndex = ((index && index['parentNodeIndex'])
                    ? index['parentNodeIndex'] // From out of service
                    : ((index != null)
                        ? this._objectsProviderIndex // From DataService
                        : null // Not defined
                    ));
                var newParentNodeIndex = (object[this._provider['localParentField']] || 0);
                // Create a new array entry for parent node, if not exist yet
                if (!(newParentNodeIndex in this._provider.objects)) {
                    this._provider.objects[newParentNodeIndex] = [];
                }
                // Remove from old parent node
                if ((oldParentNodeIndex != null) && (oldParentNodeIndex != newParentNodeIndex)) {
                    this._objectsProvider = this._provider.objects[oldParentNodeIndex];
                    this.pullFromObjects(objIndex);
                    this._provider.objects[newParentNodeIndex].unshift(object); // Add new entry in new parent node
                    objIndex = 0; // Index of new entry in parent (to be marked as edited)
                }
                // Update objects provider
                this._objectsProviderIndex = newParentNodeIndex;
                this._objectsProvider = this._provider.objects[newParentNodeIndex];
            }
            _super.prototype.setObject.call(this, object, objIndex);
        }
        return this;
    };
    /**
     * Normalize objects to show in template
     * Detect fields that needs to be rendered to view/template
     * @param objects
     * @param fields
     * @returns any
     */
    TreeViewDataService.prototype.normalizeObjectsToTemplate = function (objects, fields) {
        if (objects === void 0) { objects = null; }
        if (fields === void 0) { fields = null; }
        objects = (objects || this._provider.objects);
        // Object with nodes
        if (typeof objects == 'object') {
            for (var _i = 0, objects_1 = objects; _i < objects_1.length; _i++) {
                var objNodes = objects_1[_i];
                _super.prototype.normalizeObjectsToTemplate.call(this, objNodes, fields);
            }
        }
        else {
            _super.prototype.normalizeObjectsToTemplate.call(this, objects, fields);
        }
        return this;
    };
    /**
     * New object (call this function to create a new object)
     * @param index
     * @returns {Promise}
     */
    TreeViewDataService.prototype.newObject = function (index) {
        if (index === void 0) { index = null; }
        var objIndex = (index ? index['objIndex'] : null), parentNodeIndex = (index ? index['parentNodeIndex'] : null);
        this._objectsProvider = ((parentNodeIndex != null) ? this._provider.objects[parentNodeIndex] : null);
        return _super.prototype.newObject.call(this, objIndex);
    };
    /**
     * Delete object.
     * @param index
     * @returns {Promise}
     */
    TreeViewDataService.prototype.delete = function (index) {
        var objIndex = (index ? index['objIndex'] : null), parentNodeIndex = (index ? index['parentNodeIndex'] : null);
        this._objectsProvider = ((parentNodeIndex != null) ? this._provider.objects[parentNodeIndex] : null);
        return _super.prototype.delete.call(this, objIndex);
    };
    /**
     * Detail object.
     * @param index
     */
    TreeViewDataService.prototype.detail = function (index) {
        if (index === void 0) { index = null; }
        var objIndex = (index ? index['objIndex'] : this._objectIndex), parentNodeIndex = (index ? index['parentNodeIndex'] : this._objectsProviderIndex);
        this._objectsProvider = ((parentNodeIndex != null) ? this._provider.objects[parentNodeIndex] : null);
        _super.prototype.detail.call(this, objIndex);
        return;
    };
    /**
     * Set objects
     * @param objects
     * @param isMerge (if true merge objects, otherwise replace them)
     * @returns any
     */
    TreeViewDataService.prototype.setObjects = function (objects, isMerge) {
        if (isMerge === void 0) { isMerge = false; }
        objects = (objects || {});
        this.normalizeObjectsToTemplate(objects);
        this.resetObjects();
        for (var objNodesIndex in objects) {
            this._objectsProvider = [];
            this.pushToObjects(objects[objNodesIndex]);
            this._provider.objects[objNodesIndex] = this._objectsProvider;
        }
        // Emmit changes
        this._onObjectsRefreshEmitter.emit(objects);
        return this;
    };
    /**
     * Reset objects
     * @returns {DataService}
     */
    TreeViewDataService.prototype.resetObjects = function () {
        _super.prototype.resetObjects.call(this);
        this._provider.objects = {};
        return this;
    };
    /**
     * Submit indexes id
     * @param route
     * @param indexes (index in the format "parentIndex::childIndex")
     * @param allowEmptySubmit (allow submit when data is empty,
     * some cases it is necessary to inform that the user does not select any choice)
     * @returns {Promise}
     */
    TreeViewDataService.prototype.submitIndexesId = function (route, indexes, allowEmptySubmit) {
        if (allowEmptySubmit === void 0) { allowEmptySubmit = false; }
        var that = this;
        var objects = this._provider.objects;
        var idArr = [];
        return new Promise(function (resolve, reject) {
            if (objects && indexes && (indexes.length > 0)) {
                for (var _i = 0, indexes_1 = indexes; _i < indexes_1.length; _i++) {
                    var index = indexes_1[_i];
                    var indexArr = index.value.split("::");
                    if (objects[indexArr[0]] && objects[indexArr[0]][indexArr[1]]) {
                        idArr.push(objects[indexArr[0]][indexArr[1]]['id']);
                    }
                }
            }
            if ((idArr.length > 0) || allowEmptySubmit) {
                // Submit to provided route
                return that.runAction(route, { id: idArr }).then(function (data) { return resolve(data); }, function (errors) { return reject(errors); });
            }
            else {
                // No indexes to submit
                return resolve({});
            }
        });
    };
    /**
     * Delete objects from array by index.
     * @param indexes (index in the format "parentIndex::childIndex")
     * @returns {DataService}
     */
    TreeViewDataService.prototype.deleteArray = function (indexes) {
        var that = this;
        var objects = this._provider.objects;
        var idArr = [];
        if (objects && indexes && (indexes.length > 0)) {
            for (var _i = 0, indexes_2 = indexes; _i < indexes_2.length; _i++) {
                var index = indexes_2[_i];
                var indexArr = index.value.split("::");
                if (objects[indexArr[0]] && objects[indexArr[0]][indexArr[1]]) {
                    idArr.push(objects[indexArr[0]][indexArr[1]]['id']);
                }
            }
        }
        this._postService.post(this._provider.route['delete']['url'], this.getRequestData({ id: idArr })).then(function (data) {
            that.handleResponse(data);
            // Refresh objects array
            // Correction for index (each time you remove an index, all indices needs to be corrected)
            var indexCorrection = {};
            for (var _i = 0, indexes_3 = indexes; _i < indexes_3.length; _i++) {
                var index = indexes_3[_i];
                var indexArr = index.value.split("::");
                if (objects[indexArr[0]] && objects[indexArr[0]][indexArr[1]]) {
                    that._objectsProvider = that._provider.objects[indexArr[0]];
                    indexCorrection[indexArr[0]] = (indexCorrection[indexArr[0]] || 0);
                    that.pullFromObjects(indexArr[1] - indexCorrection[indexArr[0]]);
                    indexCorrection[indexArr[0]]++;
                }
            }
        }, function (errors) { console.log(errors); });
        return this;
    };
    TreeViewDataService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["z" /* Injectable */])(),
        __param(1, Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["y" /* Inject */])('HelperService')),
        __param(2, Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["y" /* Inject */])('DataServiceProvider')),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__post_service__["a" /* PostService */], Object, Object, __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__["b" /* DomSanitizer */]])
    ], TreeViewDataService);
    return TreeViewDataService;
}(__WEBPACK_IMPORTED_MODULE_3__data_service__["a" /* DataService */]));



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
        this.labelCount = null;
        this.labelIcon = null;
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
        __metadata("design:type", Number)
    ], ExpanderComponent.prototype, "labelCount", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Input */])(),
        __metadata("design:type", String)
    ], ExpanderComponent.prototype, "labelIcon", void 0);
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
            template: "\n    <a [ngClass]=\"['no-user-select', 'expander', customClass]\"\n       (click)=\"toggleAction($event)\">\n        <i *ngIf=\"hasIcon\" [ngClass]=\"['mr-2 fa', (isExpanded ? 'fa-angle-down' : 'fa-angle-right')]\"></i>\n        <i *ngIf=\"labelIcon\" [ngClass]=\"['mr-2 fa', labelIcon]\"></i><span [innerHTML]=\"label\"></span><span *ngIf=\"labelCount !== undefined\" class=\"badge badge-info ml-2\">{{labelCount}}</span></a>\n    "
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
     * Search objectKey value in array of objects
     * @param value
     * @param objectKey
     * @param array
     */
    Helper.arraySearchObj = function (value, objectKey, array) {
        for (var i = 0; i < array.length; i++) {
            if (array[i][objectKey] && (array[i][objectKey] == value)) {
                return i;
            }
        }
        return null;
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
            localData: (data.localData || { data: {}, template: {} }),
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
            labelCount: ((data.labelCount === undefined) ? null : data.labelCount),
            labelIcon: data.labelIcon || null,
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
        return Helper.getBaseProvider(data);
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
            extraData: ((data.extraData && data.extraData.template) ? data.extraData.template : null),
            language: (data.language ? data.language : {})
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
            template: "\n    <js_expander [label]=\"'Filter'\" [hasIcon]=\"false\" [customClass]=\"'action'\" (onChange)=\"toggleIsExpanded($event, 'fields')\"></js_expander>\n    <div [hidden]=\"!_isExpanded\" class=\"container-fluid py-3 rounded white-dropdown search-criteria\">\n        <div class=\"row\">\n        <ng-template ngFor let-criteria [ngForOf]=\"_criteriaArr\" let-i=\"index\">\n            <div class=\"col col-md-6 controller\">\n                <div class=\"select\">\n                    <select [(ngModel)]=\"criteria['field']\"\n                            (change)=\"onFieldChange($event, criteria)\"\n                            class=\"form-control\">\n                        <ng-template ngFor let-field [ngForOf]=\"_fields\">\n                            <option *ngIf=\"!_helperService.inArray(_fieldsMetadata[field]['type'], _deniedTypes) && !_fieldsMetadata[field]['isObject']\"\n                                    value=\"{{field}}\">{{_fieldsMetadata[field]['label']}}</option>\n                        </ng-template>\n                    </select>\n                    <!-- ng switch should be here -->\n                    <ng-template [ngIf]=\"(_fieldsMetadata[criteria['field']]) && (_fieldsMetadata[criteria['field']]['type'] == 'boolean')\">\n                        <select [(ngModel)]=\"criteria['value']\"\n                                class=\"form-control\">\n                            <option *ngFor=\"let value of [{key: 1, label: 'Yes'}, {key: 0, label: 'No'}]\"\n                                    value=\"{{value['key']}}\">{{value['label']}}</option>\n                        </select>\n                    </ng-template>\n                    <ng-template [ngIf]=\"(!_fieldsMetadata[criteria['field']]) || (_fieldsMetadata[criteria['field']]['type'] != 'boolean')\">\n                        <select [(ngModel)]=\"criteria['expr']\"\n                                class=\"form-control\">\n                            <option *ngFor=\"let expr of _searchCriteriaMap.getExprMap()\"\n                                    value=\"{{expr['key']}}\">{{expr['label']}}</option>\n                        </select>\n                        <input [(ngModel)]=\"criteria['value']\"\n                               class=\"form-control\" type=\"text\">\n                    </ng-template>\n                </div>\n                <div class=\"actions\">\n                    <a class=\"fa fa-trash-o\" (click)=\"del($event, i)\"></a>\n                    <a *ngIf=\"(i+1) == _criteriaArr.length\" class=\"fa fa-plus\" (click)=\"add($event)\"></a>\n                </div>\n            </div>\n        </ng-template>\n        <div class=\"col controller\"\n             *ngIf=\"_criteriaArr.length < 1\">\n            <div class=\"actions\">\n                <a class=\"fa fa-plus\" (click)=\"add($event)\"></a>\n            </div>\n        </div>\n    </div>\n    ",
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

/***/ "../../../../../src/Bck/AccountingBundle/Resources/public/base-document-invoice/add/ts/form-popup.ext-component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FormPopupExtComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__AppBundle_Resources_public_ts_data_service_tree_view_data_service__ = __webpack_require__("../../../../../src/AppBundle/Resources/public/ts/data-service/tree-view-data.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__AppBundle_Resources_public_ts_actions_actions_service__ = __webpack_require__("../../../../../src/AppBundle/Resources/public/ts/actions/actions.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__AppBundle_Resources_public_wizard_ts_src_wizard_form_popup_ext_component__ = __webpack_require__("../../../../../src/AppBundle/Resources/public/wizard/ts/src/wizard-form-popup.ext-component.ts");
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




var FormPopupExtComponent = (function (_super) {
    __extends(FormPopupExtComponent, _super);
    function FormPopupExtComponent() {
        return _super.call(this) || this;
    }
    FormPopupExtComponent.prototype.initBaseDocumentInvoiceAddFormPopupExtComponent = function (elementRef, renderer, provider, wizardManagerService, formService, helperService, dataService, parentFormService, // To get parent object
        injector) {
        // Call parent
        _super.prototype.initWizardFormPopupExtComponent.call(this, elementRef, renderer, provider, wizardManagerService, formService);
        // Constructor vars
        this._helperService = helperService;
        this._dataService = dataService;
        this._parentFormService = parentFormService;
        this._injector = injector;
    };
    /**
     * Submit navigation (when leave one container to navigate in other one)
     * @param index (index to validate)
     * @returns {Promise<boolean>}
     */
    FormPopupExtComponent.prototype.submitNav = function (index) {
        var that = this, route = null, componentRef = null;
        return new Promise(function (resolve, reject) {
            switch (index) {
                case 0:
                    // Submit values
                    componentRef = that._wizardManagerService.getComponentRef(index);
                    if (componentRef) {
                        route = that._dataService.getRoute('addStep1Submit');
                        return componentRef.instance.submitChoices(route, true).then(function (data) {
                            if (data['object']) {
                                that._formService.setObject(data['object']);
                                return resolve(true);
                            }
                        }, function (errors) { return reject(false); });
                    }
                    return reject(false);
                case 1:
                    // Save form changes
                    // Force form submit to save object into data base
                    // (at this time, object is stored in session)
                    that._formService.setForceSubmit(true);
                    route = that._dataService.getRoute('addStep2');
                    return that._formService.save(route).then(function (data) { return resolve(true); }, function (errors) { return reject(false); });
            }
            // Nothing to do
            return resolve(true);
        });
    };
    /**
     * Get nav providers (to lazy load components in container with dependency injection)
     * @param index (index to load)
     * @param data (data to resolve all providers)
     * @returns {Array}
     */
    FormPopupExtComponent.prototype.getNavProviders = function (index, data) {
        if (data === void 0) { data = null; }
        switch (index) {
            case 0:
                // Set actions
                data['actions'] = { search: true, radioChoice: true };
                return [
                    { provide: 'DataService', useClass: __WEBPACK_IMPORTED_MODULE_1__AppBundle_Resources_public_ts_data_service_tree_view_data_service__["a" /* TreeViewDataService */] },
                    { provide: 'DataServiceProvider', useValue: this._helperService.getTreeViewDataServiceProvider(data) },
                    { provide: 'Provider', useValue: this._helperService.getTreeViewProvider(data) },
                    __WEBPACK_IMPORTED_MODULE_2__AppBundle_Resources_public_ts_actions_actions_service__["a" /* ActionsService */],
                    { provide: 'ActionsServiceProvider', useValue: this._helperService.getActionsServiceProvider(data) },
                    { provide: 'Popups', useValue: null }
                ];
            case 1:
                return [];
        }
        return null;
    };
    /**
     * Lifecycle callback
     */
    FormPopupExtComponent.prototype.ngAfterViewInit = function () {
        _super.prototype.ngAfterViewInit.call(this);
        // Open the first tab
        this._wizardManagerService.navTo(0);
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChildren */])('js_lazyLoadContainer', { read: __WEBPACK_IMPORTED_MODULE_0__angular_core__["_9" /* ViewContainerRef */] }),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["S" /* QueryList */])
    ], FormPopupExtComponent.prototype, "lazyLoadViewContainerRefQL", void 0);
    __decorate([
        __param(2, Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["y" /* Inject */])('Provider')),
        __param(5, Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["y" /* Inject */])('HelperService')),
        __param(6, Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["y" /* Inject */])('DataService')),
        __param(7, Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["y" /* Inject */])('ParentFormService')),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Object, Object, Object, Object, Object, Object, Object, Object, Object]),
        __metadata("design:returntype", void 0)
    ], FormPopupExtComponent.prototype, "initBaseDocumentInvoiceAddFormPopupExtComponent", null);
    FormPopupExtComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: '.js_addFormPopup',
            template: ''
        }),
        __metadata("design:paramtypes", [])
    ], FormPopupExtComponent);
    return FormPopupExtComponent;
}(__WEBPACK_IMPORTED_MODULE_3__AppBundle_Resources_public_wizard_ts_src_wizard_form_popup_ext_component__["a" /* WizardFormPopupExtComponent */]));



/***/ }),

/***/ "../../../../../src/Bck/AccountingBundle/Resources/public/base-document-invoice/edit/ts/form-popup.ext-component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FormPopupExtComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__AppBundle_Resources_public_form_ts_form_popup_extension_component__ = __webpack_require__("../../../../../src/AppBundle/Resources/public/form/ts/form-popup.extension-component.ts");
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


var FormPopupExtComponent = (function (_super) {
    __extends(FormPopupExtComponent, _super);
    function FormPopupExtComponent() {
        return _super.call(this) || this;
    }
    FormPopupExtComponent.prototype.initBaseDocumentInvoiceEditFormPopupExtComponent = function (elementRef, renderer, provider, formService, dataService, helperService) {
        _super.prototype.initFormPopupExtensionComponent.call(this, elementRef, renderer, provider, formService, dataService);
        // Constructor vars
        this._helperService = helperService;
        this.decimalConf = this._helperService.getDecimalConf();
    };
    /**
     * onServiceChange
     * @param value
     */
    FormPopupExtComponent.prototype.onServiceChange = function (value) {
        var that = this;
        this._dataService.runAction((this._helperService.getAppVar('route')
            + 'bck/services/regular-service/get-vat-code-percentage/'
            + value)).then(function (data) {
            if (data['localData']) {
                that._formService.getObject()['vatCode_percentage']
                    = (data['localData']['data']['vatCodePercentage'] || null);
                that.setTotals();
            }
        }, function (errors) { console.log(errors); return; });
    };
    /**
     * onQuantityEnterKey
     * @param value
     */
    FormPopupExtComponent.prototype.onQuantityEnterKey = function (value) {
        this._formService.getObject()['quantity'] = value; // Value is not yet setted in object
        this.setTotals();
    };
    /**
     * onValueEnterKey
     * @param value
     */
    FormPopupExtComponent.prototype.onValueEnterKey = function (value) {
        this._formService.getObject()['user_value'] = value;
        this.setTotals();
    };
    /**
     * onIsVatIncludedChange
     * @param value
     */
    FormPopupExtComponent.prototype.onIsVatIncludedChange = function (value) {
        this._formService.getObject()['isVatIncluded'] = value;
        this.setTotals();
    };
    /**
     * Set totals
     * @returns any
     */
    FormPopupExtComponent.prototype.setTotals = function () {
        var obj = this._formService.getObject(), quantity = parseFloat(obj['quantity'] || '0'), user_value = parseFloat(obj['user_value'] || '0'), isVatIncluded = obj['isVatIncluded'], vatPercentage = parseFloat(obj['vatCode_percentage'] || '0'), vatValue = 0;
        // Normalize decimals and update inputs with rounded values (with or without VAT, according with user preferences)
        // @TODO update only when the user leaves the input,
        // otherwise user can not fill the input with more that one digit at a time (commented bellow).
        user_value = parseFloat(/*obj['user_value'] = */ (Math.round(user_value * this.decimalConf.unit.iterator) / this.decimalConf.unit.iterator).toFixed(this.decimalConf.unit.value));
        // Calc VAT value and value
        if (vatPercentage > 0) {
            if (isVatIncluded) {
                // KEEP SAME METHOD THAT PHP FUNCTIONS
                // We need to adjust the VAT value.
                // Sometimes the rounded value can produce a different VAT value when it is calculated again
                // based on the rounded value, since that all forms use the value (rounded without VAT) to make all
                // calculus, this issue can cause inquiries between forms when try to calc the VAT value again, so we
                // need to adjust the VAT value according with the rounded value
                user_value = parseFloat((Math.round((user_value / (1 + (vatPercentage / 100)))
                    * this.decimalConf.unit.iterator) / this.decimalConf.unit.iterator).toFixed(this.decimalConf.unit.value));
            }
            vatValue = parseFloat((Math.round((user_value * (vatPercentage / 100))
                * this.decimalConf.unit.iterator) / this.decimalConf.unit.iterator).toFixed(this.decimalConf.unit.value));
        }
        // Value (unit value without VAT)
        obj['value'] = parseFloat(user_value.toFixed(this.decimalConf.unit.value));
        // Total vat
        obj['totalVat'] = (Math.round((vatValue * quantity)
            * this.decimalConf.total.iterator) / this.decimalConf.total.iterator).toFixed(this.decimalConf.total.value);
        // Total unit
        var totalUnit = parseFloat((Math.round((parseFloat(obj['value'] || 0) + vatValue)
            * this.decimalConf.total.iterator) / this.decimalConf.total.iterator).toFixed(this.decimalConf.total.value));
        // Total
        obj['total'] = (Math.round(
        // Do not use "subTotal" nor "totalVat" to get the "total", because this values are already rounded,
        // and in some cases the sum of 2 rounded values cause inquiries.
        // Before multiply round the sum to get a coherent total unit value
        (totalUnit * quantity)
            * this.decimalConf.total.iterator) / this.decimalConf.total.iterator).toFixed(this.decimalConf.total.value);
        // Sub total
        obj['subTotal'] = (Math.round(
        // Sub total is determined in this way, because in some cases the sum of "subTotal" and "totalVat"
        // rounded does not match with the correct total, given that this values are rounded to 2 decimals
        // and lost precision, so in this way we keep the calculus with coherence giving preference to keep
        // "totalVat" untouched (legal values).
        (parseFloat(obj['total'] || '0') - parseFloat(obj['totalVat'] || '0'))
            * this.decimalConf.total.iterator) / this.decimalConf.total.iterator).toFixed(this.decimalConf.total.value);
        return this;
    };
    /**
     * Lifecycle callback
     */
    FormPopupExtComponent.prototype.ngOnDestroy = function () {
        // If is a '_isSessionStorage' object, the object is ignored, so we need to update manually all objects
        // (occurs in add mode)
        if (this._dataService.getObject()['_isSessionStorage']
            && this._formService.getObject()['id']) {
            this._dataService.refresh();
        }
    };
    __decorate([
        __param(2, Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["y" /* Inject */])('Provider')),
        __param(4, Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["y" /* Inject */])('DataService')),
        __param(5, Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["y" /* Inject */])('HelperService')),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Object, Object, Object, Object, Object, Object]),
        __metadata("design:returntype", void 0)
    ], FormPopupExtComponent.prototype, "initBaseDocumentInvoiceEditFormPopupExtComponent", null);
    FormPopupExtComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: '#js_documentInvoiceDetailFormPopup',
            template: ''
        }),
        __metadata("design:paramtypes", [])
    ], FormPopupExtComponent);
    return FormPopupExtComponent;
}(__WEBPACK_IMPORTED_MODULE_1__AppBundle_Resources_public_form_ts_form_popup_extension_component__["a" /* FormPopupExtensionComponent */]));



/***/ }),

/***/ "../../../../../src/Bck/AccountingBundle/Resources/public/base-document-rectification/add/ts/form-popup.ext-component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FormPopupExtComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__AppBundle_Resources_public_ts_data_service_tree_view_data_service__ = __webpack_require__("../../../../../src/AppBundle/Resources/public/ts/data-service/tree-view-data.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__AppBundle_Resources_public_ts_actions_actions_service__ = __webpack_require__("../../../../../src/AppBundle/Resources/public/ts/actions/actions.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__AppBundle_Resources_public_wizard_ts_src_wizard_form_popup_ext_component__ = __webpack_require__("../../../../../src/AppBundle/Resources/public/wizard/ts/src/wizard-form-popup.ext-component.ts");
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




var FormPopupExtComponent = (function (_super) {
    __extends(FormPopupExtComponent, _super);
    function FormPopupExtComponent() {
        return _super.call(this) || this;
    }
    FormPopupExtComponent.prototype.initBaseDocumentRectificationAddFormPopupExtComponent = function (elementRef, renderer, provider, wizardManagerService, formService, helperService, dataService, parentFormService, // To get parent object
        injector) {
        // Call parent
        _super.prototype.initWizardFormPopupExtComponent.call(this, elementRef, renderer, provider, wizardManagerService, formService);
        // Constructor vars
        this._helperService = helperService;
        this._dataService = dataService;
        this._parentFormService = parentFormService;
        this._injector = injector;
    };
    /**
     * Submit navigation (when leave one container to navigate in other one)
     * @param index (index to validate)
     * @returns {Promise<boolean>}
     */
    FormPopupExtComponent.prototype.submitNav = function (index) {
        var that = this, route = null, componentRef = null;
        return new Promise(function (resolve, reject) {
            switch (index) {
                case 0:
                    // Submit values
                    componentRef = that._wizardManagerService.getComponentRef(index);
                    if (componentRef) {
                        route = that._dataService.getRoute('addStep1Submit');
                        return componentRef.instance.submitChoices(route, true).then(function (data) {
                            if (data['object']) {
                                // Reset new object
                                that._dataService.newObject(null, data['object']);
                                return resolve(true);
                            }
                        }, function (errors) { return reject(false); });
                    }
                    return reject(false);
                case 1:
                    // Save form changes
                    // Force form submit to save object into data base
                    // (at this time, object is stored in session)
                    that._formService.setForceSubmit(true);
                    route = that._dataService.getRoute('addStep2');
                    return that._formService.save(route).then(function (data) { return resolve(true); }, function (errors) { return reject(false); });
            }
            // Nothing to do
            return resolve(true);
        });
    };
    /**
     * Get nav providers (to lazy load components in container with dependency injection)
     * @param index (index to load)
     * @param data (data to resolve all providers)
     * @returns {Array}
     */
    FormPopupExtComponent.prototype.getNavProviders = function (index, data) {
        if (data === void 0) { data = null; }
        switch (index) {
            case 0:
                // Set actions
                data['actions'] = { search: true, radioChoice: true };
                return [
                    { provide: 'DataService', useClass: __WEBPACK_IMPORTED_MODULE_1__AppBundle_Resources_public_ts_data_service_tree_view_data_service__["a" /* TreeViewDataService */] },
                    { provide: 'DataServiceProvider', useValue: this._helperService.getTreeViewDataServiceProvider(data) },
                    { provide: 'Provider', useValue: this._helperService.getTreeViewProvider(data) },
                    __WEBPACK_IMPORTED_MODULE_2__AppBundle_Resources_public_ts_actions_actions_service__["a" /* ActionsService */],
                    { provide: 'ActionsServiceProvider', useValue: this._helperService.getActionsServiceProvider(data) },
                    { provide: 'Popups', useValue: null }
                ];
            case 1:
                return [];
        }
        return null;
    };
    /**
     * Lifecycle callback
     */
    FormPopupExtComponent.prototype.ngAfterViewInit = function () {
        _super.prototype.ngAfterViewInit.call(this);
        // Open the first tab
        this._wizardManagerService.navTo(0);
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChildren */])('js_lazyLoadContainer', { read: __WEBPACK_IMPORTED_MODULE_0__angular_core__["_9" /* ViewContainerRef */] }),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["S" /* QueryList */])
    ], FormPopupExtComponent.prototype, "lazyLoadViewContainerRefQL", void 0);
    __decorate([
        __param(2, Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["y" /* Inject */])('Provider')),
        __param(5, Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["y" /* Inject */])('HelperService')),
        __param(6, Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["y" /* Inject */])('DataService')),
        __param(7, Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["y" /* Inject */])('ParentFormService')),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Object, Object, Object, Object, Object, Object, Object, Object, Object]),
        __metadata("design:returntype", void 0)
    ], FormPopupExtComponent.prototype, "initBaseDocumentRectificationAddFormPopupExtComponent", null);
    FormPopupExtComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: '.js_addFormPopup',
            template: ''
        }),
        __metadata("design:paramtypes", [])
    ], FormPopupExtComponent);
    return FormPopupExtComponent;
}(__WEBPACK_IMPORTED_MODULE_3__AppBundle_Resources_public_wizard_ts_src_wizard_form_popup_ext_component__["a" /* WizardFormPopupExtComponent */]));



/***/ }),

/***/ "../../../../../src/Bck/AccountingBundle/Resources/public/base-document-rectification/edit/ts/form-popup.ext-component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FormPopupExtComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__AppBundle_Resources_public_form_ts_form_popup_extension_component__ = __webpack_require__("../../../../../src/AppBundle/Resources/public/form/ts/form-popup.extension-component.ts");
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


var FormPopupExtComponent = (function (_super) {
    __extends(FormPopupExtComponent, _super);
    function FormPopupExtComponent() {
        return _super.call(this) || this;
    }
    FormPopupExtComponent.prototype.initBaseDocumentRectificationEditFormPopupExtComponent = function (elementRef, renderer, provider, formService, dataService, helperService) {
        _super.prototype.initFormPopupExtensionComponent.call(this, elementRef, renderer, provider, formService, dataService);
        // Constructor vars
        this._helperService = helperService;
        this.decimalConf = this._helperService.getDecimalConf();
    };
    /**
     * onServiceChange
     * @param value
     */
    FormPopupExtComponent.prototype.onServiceChange = function (value) {
        var that = this;
        this._dataService.runAction((this._helperService.getAppVar('route')
            + 'bck/services/regular-service/get-vat-code-percentage/'
            + value)).then(function (data) {
            if (data['localData']) {
                that._formService.getObject()['vatCode_percentage']
                    = (data['localData']['data']['vatCodePercentage'] || null);
                that.setTotals();
            }
        }, function (errors) { console.log(errors); return; });
    };
    /**
     * onQuantityEnterKey
     * @param value
     */
    FormPopupExtComponent.prototype.onQuantityEnterKey = function (value) {
        this._formService.getObject()['quantity'] = value; // Value is not yet setted in object
        this.setTotals();
    };
    /**
     * onValueEnterKey
     * @param value
     */
    FormPopupExtComponent.prototype.onValueEnterKey = function (value) {
        this._formService.getObject()['user_value'] = value;
        this.setTotals();
    };
    /**
     * onIsVatIncludedChange
     * @param value
     */
    FormPopupExtComponent.prototype.onIsVatIncludedChange = function (value) {
        this._formService.getObject()['isVatIncluded'] = value;
        this.setTotals();
    };
    /**
     * Set totals
     * @returns any
     */
    FormPopupExtComponent.prototype.setTotals = function () {
        var obj = this._formService.getObject(), quantity = parseFloat(obj['quantity'] || '0'), user_value = parseFloat(obj['user_value'] || '0'), isVatIncluded = obj['isVatIncluded'], vatPercentage = parseFloat(obj['vatCode_percentage'] || '0'), vatValue = 0;
        // Normalize decimals and update inputs with rounded values (with or without VAT, according with user preferences)
        // @TODO update only when the user leaves the input,
        // otherwise user can not fill the input with more that one digit at a time (commented bellow).
        user_value = parseFloat(/*obj['user_value'] = */ (Math.round(user_value * this.decimalConf.unit.iterator) / this.decimalConf.unit.iterator).toFixed(this.decimalConf.unit.value));
        // Calc VAT value and value
        if (vatPercentage > 0) {
            if (isVatIncluded) {
                // KEEP SAME METHOD THAT PHP FUNCTIONS
                // We need to adjust the VAT value.
                // Sometimes the rounded value can produce a different VAT value when it is calculated again
                // based on the rounded value, since that all forms use the value (rounded without VAT) to make all
                // calculus, this issue can cause inquiries between forms when try to calc the VAT value again, so we
                // need to adjust the VAT value according with the rounded value
                user_value = parseFloat((Math.round((user_value / (1 + (vatPercentage / 100)))
                    * this.decimalConf.unit.iterator) / this.decimalConf.unit.iterator).toFixed(this.decimalConf.unit.value));
            }
            vatValue = parseFloat((Math.round((user_value * (vatPercentage / 100))
                * this.decimalConf.unit.iterator) / this.decimalConf.unit.iterator).toFixed(this.decimalConf.unit.value));
        }
        // Value (unit value without VAT)
        obj['value'] = parseFloat(user_value.toFixed(this.decimalConf.unit.value));
        // Total vat
        obj['totalVat'] = (Math.round((vatValue * quantity)
            * this.decimalConf.total.iterator) / this.decimalConf.total.iterator).toFixed(this.decimalConf.total.value);
        // Total unit
        var totalUnit = parseFloat((Math.round((parseFloat(obj['value'] || 0) + vatValue)
            * this.decimalConf.total.iterator) / this.decimalConf.total.iterator).toFixed(this.decimalConf.total.value));
        // Total
        obj['total'] = (Math.round(
        // Do not use "subTotal" nor "totalVat" to get the "total", because this values are already rounded,
        // and in some cases the sum of 2 rounded values cause inquiries.
        // Before multiply round the sum to get a coherent total unit value
        (totalUnit * quantity)
            * this.decimalConf.total.iterator) / this.decimalConf.total.iterator).toFixed(this.decimalConf.total.value);
        // Sub total
        obj['subTotal'] = (Math.round(
        // Sub total is determined in this way, because in some cases the sum of "subTotal" and "totalVat"
        // rounded does not match with the correct total, given that this values are rounded to 2 decimals
        // and lost precision, so in this way we keep the calculus with coherence giving preference to keep
        // "totalVat" untouched (legal values).
        (parseFloat(obj['total'] || '0') - parseFloat(obj['totalVat'] || '0'))
            * this.decimalConf.total.iterator) / this.decimalConf.total.iterator).toFixed(this.decimalConf.total.value);
        return this;
    };
    /**
     * Lifecycle callback
     */
    FormPopupExtComponent.prototype.ngOnDestroy = function () {
        // If is a '_isSessionStorage' object, the object is ignored, so we need to update manually all objects
        // (occurs in add mode)
        if (this._dataService.getObject()['_isSessionStorage']
            && this._formService.getObject()['id']) {
            this._dataService.refresh();
        }
    };
    __decorate([
        __param(2, Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["y" /* Inject */])('Provider')),
        __param(4, Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["y" /* Inject */])('DataService')),
        __param(5, Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["y" /* Inject */])('HelperService')),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Object, Object, Object, Object, Object, Object]),
        __metadata("design:returntype", void 0)
    ], FormPopupExtComponent.prototype, "initBaseDocumentRectificationEditFormPopupExtComponent", null);
    FormPopupExtComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: '#js_documentInvoiceRectificationFormPopup',
            template: ''
        }),
        __metadata("design:paramtypes", [])
    ], FormPopupExtComponent);
    return FormPopupExtComponent;
}(__WEBPACK_IMPORTED_MODULE_1__AppBundle_Resources_public_form_ts_form_popup_extension_component__["a" /* FormPopupExtensionComponent */]));



/***/ }),

/***/ "../../../../../src/Bck/AccountingBundle/Resources/public/base-document-settlement/add/ts/form-popup.ext-component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FormPopupExtComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__AppBundle_Resources_public_ts_data_service_data_service__ = __webpack_require__("../../../../../src/AppBundle/Resources/public/ts/data-service/data.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__AppBundle_Resources_public_ts_actions_actions_service__ = __webpack_require__("../../../../../src/AppBundle/Resources/public/ts/actions/actions.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__AppBundle_Resources_public_wizard_ts_src_wizard_form_popup_ext_component__ = __webpack_require__("../../../../../src/AppBundle/Resources/public/wizard/ts/src/wizard-form-popup.ext-component.ts");
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




var FormPopupExtComponent = (function (_super) {
    __extends(FormPopupExtComponent, _super);
    function FormPopupExtComponent() {
        return _super.call(this) || this;
    }
    FormPopupExtComponent.prototype.initBaseDocumentSettlementAddFormPopupExtComponent = function (elementRef, renderer, provider, wizardManagerService, formService, helperService, dataService, parentFormService, // To get parent object
        injector) {
        // Call parent
        _super.prototype.initWizardFormPopupExtComponent.call(this, elementRef, renderer, provider, wizardManagerService, formService);
        // Constructor vars
        this._helperService = helperService;
        this._dataService = dataService;
        this._parentFormService = parentFormService;
        this._injector = injector;
    };
    /**
     * Submit navigation (when leave one container to navigate in other one)
     * @param index (index to validate)
     * @returns {Promise<boolean>}
     */
    FormPopupExtComponent.prototype.submitNav = function (index) {
        var that = this, route = null, componentRef = null;
        return new Promise(function (resolve, reject) {
            switch (index) {
                case 0:
                    // Submit values
                    componentRef = that._wizardManagerService.getComponentRef(index);
                    if (componentRef) {
                        route = that._dataService.getRoute('addStep1Submit');
                        return componentRef.instance.submitChoices(route, true).then(function (data) {
                            if (data['object']) {
                                // Reset new object
                                that._dataService.newObject(null, data['object']);
                                return resolve(true);
                            }
                        }, function (errors) {
                            return reject(false);
                        });
                    }
                    return reject(false);
                case 1:
                    // Save form changes
                    // Force form submit to save object into data base
                    // (at this time, object is stored in session)
                    that._formService.setForceSubmit(true);
                    route = that._dataService.getRoute('addStep2');
                    return that._formService.save(route).then(function (data) { return resolve(true); }, function (errors) { return reject(false); });
            }
            // Nothing to do
            return resolve(true);
        });
    };
    /**
     * Get nav providers (to lazy load components in container with dependency injection)
     * @param index (index to load)
     * @param data (data to resolve all providers)
     * @returns {Array}
     */
    FormPopupExtComponent.prototype.getNavProviders = function (index, data) {
        if (data === void 0) { data = null; }
        switch (index) {
            case 0:
                // Set actions
                data['actions'] = { search: true, radioChoice: true };
                return [
                    { provide: 'DataService', useClass: __WEBPACK_IMPORTED_MODULE_1__AppBundle_Resources_public_ts_data_service_data_service__["a" /* DataService */] },
                    { provide: 'DataServiceProvider', useValue: this._helperService.getDataServiceProvider(data) },
                    { provide: 'Provider', useValue: this._helperService.getDataBoxProvider(data) },
                    __WEBPACK_IMPORTED_MODULE_2__AppBundle_Resources_public_ts_actions_actions_service__["a" /* ActionsService */],
                    { provide: 'ActionsServiceProvider', useValue: this._helperService.getActionsServiceProvider(data) },
                    { provide: 'Popups', useValue: null }
                ];
            case 1:
                return [];
        }
        return null;
    };
    /**
     * Lifecycle callback
     */
    FormPopupExtComponent.prototype.ngAfterViewInit = function () {
        _super.prototype.ngAfterViewInit.call(this);
        // Open the first tab
        this._wizardManagerService.navTo(0);
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChildren */])('js_lazyLoadContainer', { read: __WEBPACK_IMPORTED_MODULE_0__angular_core__["_9" /* ViewContainerRef */] }),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["S" /* QueryList */])
    ], FormPopupExtComponent.prototype, "lazyLoadViewContainerRefQL", void 0);
    __decorate([
        __param(2, Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["y" /* Inject */])('Provider')),
        __param(5, Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["y" /* Inject */])('HelperService')),
        __param(6, Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["y" /* Inject */])('DataService')),
        __param(7, Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["y" /* Inject */])('ParentFormService')),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Object, Object, Object, Object, Object, Object, Object, Object, Object]),
        __metadata("design:returntype", void 0)
    ], FormPopupExtComponent.prototype, "initBaseDocumentSettlementAddFormPopupExtComponent", null);
    FormPopupExtComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: '.js_addFormPopup',
            template: ''
        }),
        __metadata("design:paramtypes", [])
    ], FormPopupExtComponent);
    return FormPopupExtComponent;
}(__WEBPACK_IMPORTED_MODULE_3__AppBundle_Resources_public_wizard_ts_src_wizard_form_popup_ext_component__["a" /* WizardFormPopupExtComponent */]));



/***/ }),

/***/ "../../../../../src/Bck/AccountingBundle/Resources/public/base-document/add/ts/form-popup.ext-component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FormPopupExtComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__AppBundle_Resources_public_form_ts_form_service__ = __webpack_require__("../../../../../src/AppBundle/Resources/public/form/ts/form.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__AppBundle_Resources_public_ts_data_service_data_service__ = __webpack_require__("../../../../../src/AppBundle/Resources/public/ts/data-service/data.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__AppBundle_Resources_public_ts_data_service_tree_view_data_service__ = __webpack_require__("../../../../../src/AppBundle/Resources/public/ts/data-service/tree-view-data.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__AppBundle_Resources_public_ts_actions_actions_service__ = __webpack_require__("../../../../../src/AppBundle/Resources/public/ts/actions/actions.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__AppBundle_Resources_public_wizard_ts_src_wizard_form_popup_ext_component__ = __webpack_require__("../../../../../src/AppBundle/Resources/public/wizard/ts/src/wizard-form-popup.ext-component.ts");
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






var FormPopupExtComponent = (function (_super) {
    __extends(FormPopupExtComponent, _super);
    function FormPopupExtComponent() {
        return _super.call(this) || this;
    }
    FormPopupExtComponent.prototype.initBaseDocumentAddFormPopupExtComponent = function (elementRef, renderer, provider, wizardManagerService, formService, helperService, dataService, injector) {
        // Call parent
        _super.prototype.initWizardFormPopupExtComponent.call(this, elementRef, renderer, provider, wizardManagerService, formService);
        // Constructor vars
        this._helperService = helperService;
        this._dataService = dataService;
        this._injector = injector;
    };
    /**
     * Submit navigation (when leave one container to navigate in other one)
     * @param index (index to validate)
     * @returns {Promise<boolean>}
     */
    FormPopupExtComponent.prototype.submitNav = function (index) {
        var that = this, route = null, componentRef = null;
        return new Promise(function (resolve, reject) {
            switch (index) {
                case 0:
                    // Save form
                    route = (that._dataService.getRoute('addStep1'));
                    return that._formService.save(route).then(function (data) {
                        // Update entityAddress autoCompleteProvider choices route to the updated entity
                        var autoCompleteProviders = that._injector.get('AutoCompleteProviders');
                        if (autoCompleteProviders['entityAddressObj']['childInjector']) {
                            var choicesDataService = autoCompleteProviders['entityAddressObj']['childInjector'].get('DataServiceChoices'), choicesRoute = choicesDataService.getRoute('choices');
                            choicesRoute = (choicesRoute.substr(0, choicesRoute.lastIndexOf('/') + 1)
                                + that._formService.getObject()['entityObj']);
                            choicesDataService.setRoute('choices', choicesRoute);
                        }
                        return resolve(true);
                    }, function (errors) { return reject(false); });
                case 1:
                    // Submit values
                    componentRef = that._wizardManagerService.getComponentRef(index);
                    // PAYMENT
                    if (that._formService.getObject()['documentType_type'] == 'PAYMENT') {
                        return componentRef.instance._formService.save().then(function (data) {
                            that._dataService.refreshObject();
                            return resolve(true);
                        }, function (errors) { return reject(false); });
                    }
                    route = (that._dataService.getRoute('addStep2') + '/' + that._formService.getObject()['id']);
                    return componentRef.instance.submitChoices(route, true).then(function (data) {
                        that._dataService.refreshObject();
                        return resolve(true);
                    }, function (errors) { return reject(false); });
                case 2:
                    // Save form
                    componentRef = that._wizardManagerService.getComponentRef(index);
                    switch (that._formService.getObject()['documentType_type']) {
                        case 'RECEIPT':
                            route = (that._dataService.getRoute('addStep3Receipt'));
                            break;
                        case 'PAYMENT':
                            route = (that._dataService.getRoute('addStep3Payment'));
                            break;
                        case 'SETTLEMENT':
                            route = (that._dataService.getRoute('addStep3Settlement'));
                            break;
                        default:
                            route = (that._dataService.getRoute('addStep3Invoice'));
                            break;
                    }
                    that._formService.setForceSubmit(false); // Disable force submit, at this time the user is finishing
                    // the process and submitting the form (this procedure avoid form to question the user when
                    // the saved object is returned, because we have two FormServices here using the same DataService)
                    return componentRef.instance._formService.save(route).then(function (data) { return resolve(true); }, function (errors) {
                        that._formService.setForceSubmit(true); // If error put again form waiting for submit
                        return reject(false);
                    });
            }
            // Nothing to do
            return resolve(true);
        });
    };
    /**
     * Get nav providers (to lazy load components in container with dependency injection)
     * @param index (index to load)
     * @param data (data to resolve all providers)
     * @returns {Array}
     */
    FormPopupExtComponent.prototype.getNavProviders = function (index, data) {
        if (data === void 0) { data = null; }
        switch (index) {
            case 1:
                var providers = [];
                switch (this._formService.getObject()['documentType_type']) {
                    case 'INVOICE':
                    case 'RECTIFICATION':
                        providers = [
                            { provide: 'DataService', useClass: __WEBPACK_IMPORTED_MODULE_3__AppBundle_Resources_public_ts_data_service_tree_view_data_service__["a" /* TreeViewDataService */] },
                            { provide: 'DataServiceProvider', useValue: this._helperService.getTreeViewDataServiceProvider(data) },
                            { provide: 'Provider', useValue: this._helperService.getTreeViewProvider(data) },
                        ];
                        break;
                    case 'PAYMENT':
                        return [
                            { provide: 'DataService', useClass: __WEBPACK_IMPORTED_MODULE_2__AppBundle_Resources_public_ts_data_service_data_service__["a" /* DataService */] },
                            { provide: 'DataServiceProvider', useValue: this._helperService.getDataServiceProvider(data) },
                            { provide: 'LegendProvider', useValue: this._helperService.getLegendProvider(data) },
                            // Reset FormServiceProvider to use DataServiceProvider as default values
                            { provide: 'FormServiceProvider', useValue: {} },
                            __WEBPACK_IMPORTED_MODULE_1__AppBundle_Resources_public_form_ts_form_service__["a" /* FormService */]
                        ];
                    default:
                        providers = [
                            { provide: 'DataService', useClass: __WEBPACK_IMPORTED_MODULE_2__AppBundle_Resources_public_ts_data_service_data_service__["a" /* DataService */] },
                            { provide: 'DataServiceProvider', useValue: this._helperService.getDataServiceProvider(data) },
                            { provide: 'Provider', useValue: this._helperService.getDataBoxProvider(data) },
                        ];
                }
                return providers.concat([
                    __WEBPACK_IMPORTED_MODULE_4__AppBundle_Resources_public_ts_actions_actions_service__["a" /* ActionsService */],
                    { provide: 'ActionsServiceProvider', useValue: this._helperService.getActionsServiceProvider(data) },
                    { provide: 'LegendProvider', useValue: this._helperService.getLegendProvider(data) },
                    { provide: 'Popups', useValue: null }
                ]);
            case 2:
                return [
                    // Reset FormServiceProvider to use DataServiceProvider as default values
                    { provide: 'FormServiceProvider', useValue: {} },
                    __WEBPACK_IMPORTED_MODULE_1__AppBundle_Resources_public_form_ts_form_service__["a" /* FormService */]
                ];
        }
        return null;
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChildren */])('js_lazyLoadContainer', { read: __WEBPACK_IMPORTED_MODULE_0__angular_core__["_9" /* ViewContainerRef */] }),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["S" /* QueryList */])
    ], FormPopupExtComponent.prototype, "lazyLoadViewContainerRefQL", void 0);
    __decorate([
        __param(2, Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["y" /* Inject */])('Provider')),
        __param(5, Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["y" /* Inject */])('HelperService')),
        __param(6, Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["y" /* Inject */])('DataService')),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Object, Object, Object, Object, Object, Object, Object, Object]),
        __metadata("design:returntype", void 0)
    ], FormPopupExtComponent.prototype, "initBaseDocumentAddFormPopupExtComponent", null);
    FormPopupExtComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: '.js_addFormPopup',
            template: ''
        }),
        __metadata("design:paramtypes", [])
    ], FormPopupExtComponent);
    return FormPopupExtComponent;
}(__WEBPACK_IMPORTED_MODULE_5__AppBundle_Resources_public_wizard_ts_src_wizard_form_popup_ext_component__["a" /* WizardFormPopupExtComponent */]));



/***/ }),

/***/ "../../../../../src/Bck/AccountingBundle/Resources/public/base-document/index/ts/main.ext-component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MainExtComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__AppBundle_Resources_public_data_box_ts_src_data_box_extension_component__ = __webpack_require__("../../../../../src/AppBundle/Resources/public/data-box/ts/src/data-box.extension-component.ts");
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
var MainExtComponent = (function (_super) {
    __extends(MainExtComponent, _super);
    function MainExtComponent() {
        return _super.call(this) || this;
    }
    MainExtComponent.prototype.initBaseDocumentIndexMainExtComponent = function (viewContainerRef, renderer, dataBoxProvider, dataService, tasksLoaderManagerService, helperService, actionsService, modalService, popups, injector) {
        // Call parent
        _super.prototype.initDataBoxExtensionComponent.call(this, viewContainerRef, renderer, dataBoxProvider, dataService, tasksLoaderManagerService, helperService, actionsService, modalService, popups, injector);
    };
    /**
     * Overrides parent
     * @returns any
     */
    MainExtComponent.prototype.postCancelObject = function () {
        return this;
    };
    /**
     * Overrides parent
     * @returns any
     */
    MainExtComponent.prototype.postDeleteObject = function () {
        return this.postCancelObject();
    };
    __decorate([
        __param(2, Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["y" /* Inject */])('Provider')),
        __param(3, Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["y" /* Inject */])('DataService')),
        __param(5, Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["y" /* Inject */])('HelperService')),
        __param(8, Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["y" /* Inject */])('Popups')),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Object, Object, Object, Object, Object, Object, Object, Object, Object, Object]),
        __metadata("design:returntype", void 0)
    ], MainExtComponent.prototype, "initBaseDocumentIndexMainExtComponent", null);
    MainExtComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: '.js_document',
            template: ''
        }),
        __metadata("design:paramtypes", [])
    ], MainExtComponent);
    return MainExtComponent;
}(__WEBPACK_IMPORTED_MODULE_1__AppBundle_Resources_public_data_box_ts_src_data_box_extension_component__["a" /* DataBoxExtensionComponent */]));



/***/ }),

/***/ "../../../../../src/Bck/AccountingBundle/Resources/public/base-document/ts/base-form-popup.ext-component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BaseFormPopupExtComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__AppBundle_Resources_public_form_ts_form_popup_extension_component__ = __webpack_require__("../../../../../src/AppBundle/Resources/public/form/ts/form-popup.extension-component.ts");
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


var BaseFormPopupExtComponent = (function (_super) {
    __extends(BaseFormPopupExtComponent, _super);
    function BaseFormPopupExtComponent() {
        return _super.call(this) || this;
    }
    BaseFormPopupExtComponent.prototype.initBaseFormPopupExtComponent = function (elementRef, renderer, provider, formService, dataService, injector) {
        _super.prototype.initFormPopupExtensionComponent.call(this, elementRef, renderer, provider, formService, dataService);
        // Constructor vars
        this._injector = injector;
        // Set choices route according with the entity
        this.updateEntityAddressAutoCompleteProviderChoicesRoute();
    };
    /**
     * Update Entity Address Auto Complete Provider Choices Route
     * Set choices route according with the entity
     * @returns any
     */
    BaseFormPopupExtComponent.prototype.updateEntityAddressAutoCompleteProviderChoicesRoute = function () {
        // Update entityAddress autoCompleteProvider choices route to the updated entity
        var autoCompleteProviders = this._injector.get('AutoCompleteProviders');
        if (autoCompleteProviders['entityAddressObj']['childInjector']) {
            var choicesDataService = autoCompleteProviders['entityAddressObj']['childInjector'].get('DataServiceChoices'), choicesRoute = choicesDataService.getRoute('choices');
            choicesRoute = (choicesRoute.substr(0, choicesRoute.lastIndexOf('/') + 1)
                + this._formService.getObject()['entityObj']);
            choicesDataService.setRoute('choices', choicesRoute);
        }
        else {
            autoCompleteProviders['entityAddressObj']['urlConf'] = (autoCompleteProviders['entityAddressObj']['urlConf'].substr(0, (autoCompleteProviders['entityAddressObj']['urlConf'].lastIndexOf('/') + 1))
                + this._formService.getObject()['entityObj']);
        }
        return this;
    };
    /**
     * onEntityAddressChange
     * @param value
     */
    BaseFormPopupExtComponent.prototype.onEntityAddressChange = function (value) {
        var _this = this;
        this._dataService.runAction((this._dataService.getRoute('edit-entity-address')
            + '\\'
            + this._formService.getObject()['id']), { entityAddressObj: value }).then(function (data) {
            if (data['object']) {
                // Copy values instead of set the updated object to avoid lost user changes like dates, comment, etc.
                var obj = _this._formService.getObject();
                var originalObj = _this._formService.getOriginalObject();
                for (var _i = 0, _a = ['entityAddressObj', 'entityStreet1', 'entityStreet2', 'entityPostCode', 'entityCity', 'entityRegion']; _i < _a.length; _i++) {
                    var field = _a[_i];
                    obj[field] = (data['object'][field] || null);
                    // Update original object yet, because this changes are already saved in database,
                    // otherwise user will be asked when close the form, because objects are different (have changes),
                    // and user can wrongly reset the object for the previous address when this procedure is no more
                    // possible because object is updated in database
                    originalObj[field] = obj[field];
                }
            }
            return;
        }, function (errors) { console.log(errors); return; });
    };
    BaseFormPopupExtComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: '.js_baseFormPopup',
            template: ''
        }),
        __metadata("design:paramtypes", [])
    ], BaseFormPopupExtComponent);
    return BaseFormPopupExtComponent;
}(__WEBPACK_IMPORTED_MODULE_1__AppBundle_Resources_public_form_ts_form_popup_extension_component__["a" /* FormPopupExtensionComponent */]));



/***/ }),

/***/ "../../../../../src/Bck/AccountingBundle/Resources/public/supplier-document-invoice/add/ts/src/form-popup.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FormPopupComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__AppBundle_Resources_public_form_ts_form_service__ = __webpack_require__("../../../../../src/AppBundle/Resources/public/form/ts/form.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__AppBundle_Resources_public_ts_helper__ = __webpack_require__("../../../../../src/AppBundle/Resources/public/ts/helper.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__AppBundle_Resources_public_wizard_ts_src_wizard_manager_service__ = __webpack_require__("../../../../../src/AppBundle/Resources/public/wizard/ts/src/wizard-manager.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__base_document_invoice_add_ts_form_popup_ext_component__ = __webpack_require__("../../../../../src/Bck/AccountingBundle/Resources/public/base-document-invoice/add/ts/form-popup.ext-component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__AppBundle_Resources_public_tree_view_default_ts_src_tree_view_ext_module__ = __webpack_require__("../../../../../src/AppBundle/Resources/public/tree-view/default/ts/src/tree-view.ext-module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__step2_ext_module__ = __webpack_require__("../../../../../src/Bck/AccountingBundle/Resources/public/supplier-document-invoice/add/ts/src/step2.ext-module.ts");
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
// Booking Parent, used when the document is aggregated to one booking
// (this code is putted here to avoid to repeat this module in the booking bundle, so we can reuse the same modules)
var bookingContext = ((__WEBPACK_IMPORTED_MODULE_2__AppBundle_Resources_public_ts_helper__["a" /* Helper */].getAppVar('conf')['localData']['data']['bookingContext'])
    ? __WEBPACK_IMPORTED_MODULE_2__AppBundle_Resources_public_ts_helper__["a" /* Helper */].getAppVar('conf')['localData']['data']['bookingContext'] :
    null), bookingId = (bookingContext ? __WEBPACK_IMPORTED_MODULE_2__AppBundle_Resources_public_ts_helper__["a" /* Helper */].getAppVar('conf')['object']['id'] : null);
// BOOKING SERVICE PRICE CHOICES

// Form edit

/* /Import dependencies */
var FormPopupComponent = (function (_super) {
    __extends(FormPopupComponent, _super);
    function FormPopupComponent(elementRef, renderer, provider, wizardManagerService, formService, helperService, dataService, parentFormService, // To get parent object
        injector) {
        var _this = 
        // Call parent
        _super.call(this) || this;
        _super.prototype.initBaseDocumentInvoiceAddFormPopupExtComponent.call(_this, elementRef, renderer, provider, wizardManagerService, formService, helperService, dataService, parentFormService, injector);
        return _this;
    }
    /**
     * Get navigation data (needed data to lazy load container)
     * @param index (index to load)
     * @returns NavData
     */
    FormPopupComponent.prototype.getNavData = function (index) {
        switch (index) {
            case 0:
                return {
                    module: __WEBPACK_IMPORTED_MODULE_5__AppBundle_Resources_public_tree_view_default_ts_src_tree_view_ext_module__["a" /* TreeViewExtModule */],
                    component: 'TreeViewComponent',
                    urlProvider: (this._helperService.getAppVar('route') + 'bck/booking/booking-service-price/data-for-invoice-supplier/' + this._parentFormService.getObject()['supplierObj'] + (bookingContext ? ('/' + bookingId) : ''))
                };
            case 1:
                return {
                    module: __WEBPACK_IMPORTED_MODULE_6__step2_ext_module__["a" /* Step2ExtModule */],
                    component: 'Step2Component'
                };
        }
        return null;
    };
    FormPopupComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: '.js_addFormPopup',
            template: __webpack_require__("../../../../../src/Bck/AccountingBundle/Resources/public/supplier-document-invoice/add/ts/templates/form-popup.component.html")
        }),
        __param(2, Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["y" /* Inject */])('Provider')),
        __param(5, Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["y" /* Inject */])('HelperService')),
        __param(6, Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["y" /* Inject */])('DataService')),
        __param(7, Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["y" /* Inject */])('ParentFormService')),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_core__["t" /* ElementRef */],
            __WEBPACK_IMPORTED_MODULE_0__angular_core__["U" /* Renderer */], Object, __WEBPACK_IMPORTED_MODULE_3__AppBundle_Resources_public_wizard_ts_src_wizard_manager_service__["a" /* WizardManagerService */],
            __WEBPACK_IMPORTED_MODULE_1__AppBundle_Resources_public_form_ts_form_service__["a" /* FormService */], Object, Object, Object, __WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Injector */]])
    ], FormPopupComponent);
    return FormPopupComponent;
}(__WEBPACK_IMPORTED_MODULE_4__base_document_invoice_add_ts_form_popup_ext_component__["a" /* FormPopupExtComponent */]));



/***/ }),

/***/ "../../../../../src/Bck/AccountingBundle/Resources/public/supplier-document-invoice/add/ts/src/form-popup.ext-module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FormPopupExtModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("../../../common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ng_bootstrap_ng_bootstrap__ = __webpack_require__("../../../../@ng-bootstrap/ng-bootstrap/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__AppBundle_Resources_public_form_ts_field_types_field_types_extension_module__ = __webpack_require__("../../../../../src/AppBundle/Resources/public/form/ts/field-types/field-types.extension-module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__form_popup_component__ = __webpack_require__("../../../../../src/Bck/AccountingBundle/Resources/public/supplier-document-invoice/add/ts/src/form-popup.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






var FormPopupExtModule = (function () {
    function FormPopupExtModule() {
    }
    FormPopupExtModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["H" /* NgModule */])({
            imports: [__WEBPACK_IMPORTED_MODULE_1__angular_common__["a" /* CommonModule */], __WEBPACK_IMPORTED_MODULE_2__angular_forms__["b" /* FormsModule */], __WEBPACK_IMPORTED_MODULE_2__angular_forms__["e" /* ReactiveFormsModule */], __WEBPACK_IMPORTED_MODULE_3__ng_bootstrap_ng_bootstrap__["a" /* NgbModule */], __WEBPACK_IMPORTED_MODULE_4__AppBundle_Resources_public_form_ts_field_types_field_types_extension_module__["a" /* FieldTypesExtensionModule */]],
            declarations: [
                __WEBPACK_IMPORTED_MODULE_5__form_popup_component__["a" /* FormPopupComponent */]
            ],
            exports: [__WEBPACK_IMPORTED_MODULE_5__form_popup_component__["a" /* FormPopupComponent */]]
        })
    ], FormPopupExtModule);
    return FormPopupExtModule;
}());



/***/ }),

/***/ "../../../../../src/Bck/AccountingBundle/Resources/public/supplier-document-invoice/add/ts/src/step2.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Step2Component; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__AppBundle_Resources_public_form_ts_form_service__ = __webpack_require__("../../../../../src/AppBundle/Resources/public/form/ts/form.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__edit_ts_src_form_popup_component__ = __webpack_require__("../../../../../src/Bck/AccountingBundle/Resources/public/supplier-document-invoice/edit/ts/src/form-popup.component.ts");
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



var Step2Component = (function (_super) {
    __extends(Step2Component, _super);
    function Step2Component(elementRef, renderer, provider, formService, dataService, helperService) {
        return _super.call(this, elementRef, renderer, provider, formService, dataService, helperService) || this;
    }
    Step2Component = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: '#js_addStep2',
            template: __webpack_require__("../../../../../src/Bck/AccountingBundle/Resources/public/supplier-document-invoice/add/ts/templates/step2.component.html")
        }),
        __param(2, Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["y" /* Inject */])('Provider')),
        __param(4, Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["y" /* Inject */])('DataService')),
        __param(5, Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["y" /* Inject */])('HelperService')),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_core__["t" /* ElementRef */],
            __WEBPACK_IMPORTED_MODULE_0__angular_core__["U" /* Renderer */], Object, __WEBPACK_IMPORTED_MODULE_1__AppBundle_Resources_public_form_ts_form_service__["a" /* FormService */], Object, Object])
    ], Step2Component);
    return Step2Component;
}(__WEBPACK_IMPORTED_MODULE_2__edit_ts_src_form_popup_component__["a" /* FormPopupComponent */]));



/***/ }),

/***/ "../../../../../src/Bck/AccountingBundle/Resources/public/supplier-document-invoice/add/ts/src/step2.ext-module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Step2ExtModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("../../../common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ng_bootstrap_ng_bootstrap__ = __webpack_require__("../../../../@ng-bootstrap/ng-bootstrap/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__AppBundle_Resources_public_form_ts_field_types_field_types_extension_module__ = __webpack_require__("../../../../../src/AppBundle/Resources/public/form/ts/field-types/field-types.extension-module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__step2_component__ = __webpack_require__("../../../../../src/Bck/AccountingBundle/Resources/public/supplier-document-invoice/add/ts/src/step2.component.ts");
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
            imports: [__WEBPACK_IMPORTED_MODULE_1__angular_common__["a" /* CommonModule */], __WEBPACK_IMPORTED_MODULE_2__angular_forms__["b" /* FormsModule */], __WEBPACK_IMPORTED_MODULE_2__angular_forms__["e" /* ReactiveFormsModule */], __WEBPACK_IMPORTED_MODULE_3__ng_bootstrap_ng_bootstrap__["a" /* NgbModule */], __WEBPACK_IMPORTED_MODULE_4__AppBundle_Resources_public_form_ts_field_types_field_types_extension_module__["a" /* FieldTypesExtensionModule */]],
            declarations: [
                __WEBPACK_IMPORTED_MODULE_5__step2_component__["a" /* Step2Component */]
            ],
            exports: [__WEBPACK_IMPORTED_MODULE_5__step2_component__["a" /* Step2Component */]]
        })
    ], Step2ExtModule);
    return Step2ExtModule;
}());



/***/ }),

/***/ "../../../../../src/Bck/AccountingBundle/Resources/public/supplier-document-invoice/add/ts/templates/form-popup.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"modal-header\">\n    <div class=\"row align-items-center\">\n        <h3 class=\"col-auto mr-auto modal-title\">Form&nbsp;{{getProviderAttr('label')}}<small>&nbsp;({{(_formService && _formService.getObject() && _formService.getObject().id) ? 'edit' : 'add'}})</small></h3>\n        <div class=\"col-auto text-right actions\"><a\n                class=\"-round fa fa-times\"\n                (click)=\"closeAction($event)\"></a></div>\n    </div>\n</div>\n<div class=\"modal-body\">\n    <div class=\"row\">\n        <div class=\"col-12\">    \n                        <ul class=\"row mb-3 no-gutters wizard-nav\">\n                                    <li class=\"col-auto wizard-step\"\n                        [class.step-active]=\"0 == _wizardManagerService.getIndex()\">\n                        <span class=\"step-number\">1</span>\n                        <span class=\"step-text\">Booking Service</span>\n                    </li>\n                                    <li class=\"col-auto wizard-step\"\n                        [class.step-active]=\"1 == _wizardManagerService.getIndex()\">\n                        <span class=\"step-number\">2</span>\n                        <span class=\"step-text\">Preview</span>\n                    </li>\n                            </ul>\n\n            \n                <section [hidden]=\"_wizardManagerService.getIndex() != 0\"\n         class=\"js_lazyLoadContainer_0\">\n    <ng-template #js_lazyLoadContainer></ng-template>\n</section>\n    <section [hidden]=\"_wizardManagerService.getIndex() != 1\"\n         class=\"js_lazyLoadContainer_1\">\n    <ng-template #js_lazyLoadContainer></ng-template>\n</section>\n            \n            \n    </div>\n    </div>\n</div>\n<div class=\"modal-footer hide-on-empty\">\n        <div class=\"row justify-content-center\">\n    <div class=\"col-auto\">\n            <button type=\"button\" class=\"btn-light btn\" (click)=\"_wizardManagerService.cancelAction($event)\">Cancel</button>\n                <button type=\"button\" class=\"btn-primary btn\" (click)=\"_wizardManagerService.prevAction($event)\"\n                    *ngIf=\"0 < _wizardManagerService.getIndex()\">Prev</button>\n            <button type=\"button\" class=\"btn-primary btn\" (click)=\"_wizardManagerService.nextAction($event)\"\n                    *ngIf=\"1 > _wizardManagerService.getIndex()\">Next</button>\n            <button type=\"button\" class=\"btn-primary btn\" (click)=\"_wizardManagerService.finishAction($event)\"\n                    *ngIf=\"1 == _wizardManagerService.getIndex()\">Finish</button>\n        \n    </div>\n</div></div>"

/***/ }),

/***/ "../../../../../src/Bck/AccountingBundle/Resources/public/supplier-document-invoice/add/ts/templates/step2.component.html":
/***/ (function(module, exports) {

module.exports = "\n\n\n    <form name=\"form\" method=\"post\" (ngSubmit)=\"saveAction($event)\" [formGroup]=\"_formService.getForm()\" class=\"form-horizontal\">\n\n    \n\n                        \n\n                <div class=\"row form-group\" *ngIf=\"_formService.getObject().document_code\">\n\n                        <label class=\"col-sm-2 control-label\" for=\"form_document_code\">Doc. Code</label>\n    \n            <div class=\"col-sm-10\">\n                                        <p id=\"form_document_code\"\n               class=\"form-control-static\"\n               [innerHTML]=\"_formService.getViewObject().document_code\"></p>\n                        <label class=\"error\" *ngFor=\"let error of _formService.getErrors().document_code\">{{error}}</label>\n            </div>\n        </div>\n                                    \n\n                <div class=\"row form-group\" *ngIf=\"_formService.getObject().booking_code\">\n\n                        <label class=\"col-sm-2 control-label\" for=\"form_booking_code\">Booking</label>\n    \n            <div class=\"col-sm-10\">\n                                        <p id=\"form_booking_code\"\n               class=\"form-control-static\"\n               [innerHTML]=\"_formService.getViewObject().booking_code\"></p>\n                        <label class=\"error\" *ngFor=\"let error of _formService.getErrors().booking_code\">{{error}}</label>\n            </div>\n        </div>\n                                    \n\n                <div class=\"row form-group\" >\n\n                        <label class=\"col-sm-2 control-label required\" for=\"form_serviceObj\">Service</label>\n    \n            <div class=\"col-sm-10\">\n                                                                        <div class=\"html-select\"\n         [htmlSelect]=\"'serviceObj'\"\n                      (onChange)=\"onServiceChange($event)\"         >\n        <div class=\"input-group-control\"\n             [class.error]=\"_formService.getErrors()['serviceObj'] && (_formService.getErrors()['serviceObj'].length > 0)\">\n            <span class=\"js_label form-control\"></span>\n            <a class=\"pull-right\"><i class=\"fa fa-angle-down\"></i></a>\n        </div>\n        <div class=\"choices js_choices\">\n            <ul class=\"form-control-box\">        <ng-template ngFor let-choice [ngForOf]=\"_dataService.getFieldChoices('serviceObj')\">\n            <li [attr.data-value]=\"choice['id']\" [innerHtml]=\"choice['label']\"></li>\n        </ng-template>\n    </ul>\n        </div>\n    </div>\n    <input [(ngModel)]=\"_formService.getObject().serviceObj\"\n           formControlName = serviceObj\n           name=\"form[serviceObj]\"\n           required=\"required\"           type=\"hidden\">\n                                <label class=\"error\" *ngFor=\"let error of _formService.getErrors().serviceObj\">{{error}}</label>\n            </div>\n        </div>\n                                    \n\n                <div class=\"row form-group\" >\n\n                        <label class=\"col-sm-2 control-label required\" for=\"form_description\">Description</label>\n    \n            <div class=\"col-sm-10\">\n                                            <input type=\"text\" id=\"form_description\" name=\"form[description]\" required=\"required\" maxlength=\"256\" [(ngModel)]=\"_formService.getObject().description\" formControlName=\"description\" [class.error]=\"_formService.getErrors().description &amp;&amp; _formService.getErrors().description.length &gt; 0\" class=\"form-control\" />\n                <label class=\"error\" *ngFor=\"let error of _formService.getErrors().description\">{{error}}</label>\n            </div>\n        </div>\n                                    \n\n                <div class=\"row form-group\" >\n\n                        <label class=\"col-sm-2 control-label required\" for=\"form_quantity\">Quantity</label>\n    \n            <div class=\"col-sm-10\">\n                                            <input type=\"number\" id=\"form_quantity\" name=\"form[quantity]\" required=\"required\" (input)=\"onQuantityEnterKey($event.target.value)\" (focusout)=\"onQuantityEnterKey($event.target.value)\" [(ngModel)]=\"_formService.getObject().quantity\" formControlName=\"quantity\" [class.error]=\"_formService.getErrors().quantity &amp;&amp; _formService.getErrors().quantity.length &gt; 0\" class=\"form-control\" />\n                <label class=\"error\" *ngFor=\"let error of _formService.getErrors().quantity\">{{error}}</label>\n            </div>\n        </div>\n                                                \n\n                                            <input type=\"hidden\" id=\"form_value\" name=\"form[value]\" [(ngModel)]=\"_formService.getObject().value\" formControlName=\"value\" [class.error]=\"_formService.getErrors().value &amp;&amp; _formService.getErrors().value.length &gt; 0\" />\n                <label class=\"error\" *ngFor=\"let error of _formService.getErrors().value\">{{error}}</label>\n                                    <div class=\"row form-group\">\n                            <label class=\"col-sm-2 control-label\" for=\"form_user_value\">Value</label>\n                    <div class=\"col-sm-10\"><div class=\"row\">\n                    <div class=\"col-sm-8\">\n                                                    <input type=\"text\" id=\"form_user_value\" name=\"form[user_value]\" (input)=\"onValueEnterKey($event.target.value)\" (focusout)=\"onValueEnterKey($event.target.value)\" [(ngModel)]=\"_formService.getObject().user_value\" formControlName=\"user_value\" [class.error]=\"_formService.getErrors().user_value &amp;&amp; _formService.getErrors().user_value.length &gt; 0\" class=\"form-control\" />\n                <label class=\"error\" *ngFor=\"let error of _formService.getErrors().user_value\">{{error}}</label>\n                    </div>\n                    <div class=\"col-sm-4\">\n                                                    <div class=\"checkbox\">                                        <label for=\"form_isVatIncluded\"><input type=\"checkbox\" id=\"form_isVatIncluded\" name=\"form[isVatIncluded]\" (change)=\"onIsVatIncludedChange($event.target.checked)\" [(ngModel)]=\"_formService.getObject().isVatIncluded\" formControlName=\"isVatIncluded\" [class.error]=\"_formService.getErrors().isVatIncluded &amp;&amp; _formService.getErrors().isVatIncluded.length &gt; 0\" value=\"1\" /> Is vat included</label>\n    </div>\n                <label class=\"error\" *ngFor=\"let error of _formService.getErrors().isVatIncluded\">{{error}}</label>\n                    </div>\n                </div></div>\n            </div>\n                                \n\n                <div class=\"row form-group\" >\n\n                        <label class=\"col-sm-2 control-label\" for=\"form_subTotal\">Sub Total</label>\n    \n            <div class=\"col-sm-10\">\n                                            <input type=\"text\" id=\"form_subTotal\" name=\"form[subTotal]\" readonly=\"readonly\" [(ngModel)]=\"_formService.getObject().subTotal\" formControlName=\"subTotal\" [class.error]=\"_formService.getErrors().subTotal &amp;&amp; _formService.getErrors().subTotal.length &gt; 0\" class=\"form-control\" />\n                <label class=\"error\" *ngFor=\"let error of _formService.getErrors().subTotal\">{{error}}</label>\n            </div>\n        </div>\n                                    \n\n                <div class=\"row form-group\" >\n\n                        <label class=\"col-sm-2 control-label\" for=\"form_totalVat\">TAX</label>\n    \n            <div class=\"col-sm-10\">\n                                            <input type=\"text\" id=\"form_totalVat\" name=\"form[totalVat]\" readonly=\"readonly\" [(ngModel)]=\"_formService.getObject().totalVat\" formControlName=\"totalVat\" [class.error]=\"_formService.getErrors().totalVat &amp;&amp; _formService.getErrors().totalVat.length &gt; 0\" class=\"form-control\" />\n                <label class=\"error\" *ngFor=\"let error of _formService.getErrors().totalVat\">{{error}}</label>\n            </div>\n        </div>\n                                    \n\n                <div class=\"row form-group\" >\n\n                        <label class=\"col-sm-2 control-label\" for=\"form_total\">Total</label>\n    \n            <div class=\"col-sm-10\">\n                                            <input type=\"text\" id=\"form_total\" name=\"form[total]\" readonly=\"readonly\" [(ngModel)]=\"_formService.getObject().total\" formControlName=\"total\" [class.error]=\"_formService.getErrors().total &amp;&amp; _formService.getErrors().total.length &gt; 0\" class=\"form-control\" />\n                <label class=\"error\" *ngFor=\"let error of _formService.getErrors().total\">{{error}}</label>\n            </div>\n        </div>\n                                    \n\n                <div class=\"row form-group\" >\n\n                        <label class=\"col-sm-2 control-label\" [innerHTML]=\"getLang('Enabled')\"></label>\n    \n            <div class=\"col-sm-10\">\n                                            <div class=\"checkbox\">                                        <label for=\"form_isEnabled\"><input type=\"checkbox\" id=\"form_isEnabled\" name=\"form[isEnabled]\" [(ngModel)]=\"_formService.getObject().isEnabled\" formControlName=\"isEnabled\" [class.error]=\"_formService.getErrors().isEnabled &amp;&amp; _formService.getErrors().isEnabled.length &gt; 0\" value=\"1\" checked=\"checked\" /> Is enabled</label>\n    </div>\n                <label class=\"error\" *ngFor=\"let error of _formService.getErrors().isEnabled\">{{error}}</label>\n            </div>\n        </div>\n                \n\n    \n\n    <input type=\"hidden\" id=\"form__token\" name=\"form[_token]\" value=\"cEuu0f4SXmjfjYDFXIJO4B5Hkp8dRrRxqs-vEEkwqNE\" /></form>\n\n"

/***/ }),

/***/ "../../../../../src/Bck/AccountingBundle/Resources/public/supplier-document-invoice/edit/ts/src/form-popup.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FormPopupComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__AppBundle_Resources_public_form_ts_form_service__ = __webpack_require__("../../../../../src/AppBundle/Resources/public/form/ts/form.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__base_document_invoice_edit_ts_form_popup_ext_component__ = __webpack_require__("../../../../../src/Bck/AccountingBundle/Resources/public/base-document-invoice/edit/ts/form-popup.ext-component.ts");
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



var FormPopupComponent = (function (_super) {
    __extends(FormPopupComponent, _super);
    function FormPopupComponent(elementRef, renderer, provider, formService, dataService, helperService) {
        var _this = _super.call(this) || this;
        _super.prototype.initBaseDocumentInvoiceEditFormPopupExtComponent.call(_this, elementRef, renderer, provider, formService, dataService, helperService);
        return _this;
    }
    FormPopupComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: '#js_supplierDocumentInvoiceDetailFormPopup',
            template: __webpack_require__("../../../../../src/Bck/AccountingBundle/Resources/public/supplier-document-invoice/edit/ts/templates/form-popup.component.html")
        }),
        __param(2, Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["y" /* Inject */])('Provider')),
        __param(4, Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["y" /* Inject */])('DataService')),
        __param(5, Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["y" /* Inject */])('HelperService')),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_core__["t" /* ElementRef */],
            __WEBPACK_IMPORTED_MODULE_0__angular_core__["U" /* Renderer */], Object, __WEBPACK_IMPORTED_MODULE_1__AppBundle_Resources_public_form_ts_form_service__["a" /* FormService */], Object, Object])
    ], FormPopupComponent);
    return FormPopupComponent;
}(__WEBPACK_IMPORTED_MODULE_2__base_document_invoice_edit_ts_form_popup_ext_component__["a" /* FormPopupExtComponent */]));



/***/ }),

/***/ "../../../../../src/Bck/AccountingBundle/Resources/public/supplier-document-invoice/edit/ts/src/form-popup.ext-module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FormPopupExtModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("../../../common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ng_bootstrap_ng_bootstrap__ = __webpack_require__("../../../../@ng-bootstrap/ng-bootstrap/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__AppBundle_Resources_public_form_ts_field_types_field_types_extension_module__ = __webpack_require__("../../../../../src/AppBundle/Resources/public/form/ts/field-types/field-types.extension-module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__form_popup_component__ = __webpack_require__("../../../../../src/Bck/AccountingBundle/Resources/public/supplier-document-invoice/edit/ts/src/form-popup.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






var FormPopupExtModule = (function () {
    function FormPopupExtModule() {
    }
    FormPopupExtModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["H" /* NgModule */])({
            imports: [__WEBPACK_IMPORTED_MODULE_1__angular_common__["a" /* CommonModule */], __WEBPACK_IMPORTED_MODULE_2__angular_forms__["b" /* FormsModule */], __WEBPACK_IMPORTED_MODULE_2__angular_forms__["e" /* ReactiveFormsModule */], __WEBPACK_IMPORTED_MODULE_3__ng_bootstrap_ng_bootstrap__["a" /* NgbModule */], __WEBPACK_IMPORTED_MODULE_4__AppBundle_Resources_public_form_ts_field_types_field_types_extension_module__["a" /* FieldTypesExtensionModule */]],
            declarations: [
                __WEBPACK_IMPORTED_MODULE_5__form_popup_component__["a" /* FormPopupComponent */]
            ],
            exports: [__WEBPACK_IMPORTED_MODULE_5__form_popup_component__["a" /* FormPopupComponent */]]
        })
    ], FormPopupExtModule);
    return FormPopupExtModule;
}());



/***/ }),

/***/ "../../../../../src/Bck/AccountingBundle/Resources/public/supplier-document-invoice/edit/ts/templates/form-popup.component.html":
/***/ (function(module, exports) {

module.exports = "    \n    <form name=\"form\" method=\"post\" (ngSubmit)=\"saveAction($event)\" [formGroup]=\"_formService.getForm()\" class=\"form-horizontal\">\n<div class=\"modal-header\">\n    <div class=\"row align-items-center\">\n        <h3 class=\"col-auto mr-auto modal-title\">Form&nbsp;{{getProviderAttr('label')}}<small>&nbsp;({{(_formService && _formService.getObject() && _formService.getObject().id) ? 'edit' : 'add'}})</small></h3>\n        <div class=\"col-auto text-right actions\"><a\n                class=\"-round fa fa-times\"\n                (click)=\"closeAction($event)\"></a></div>\n    </div>\n</div>\n<div class=\"modal-body\">\n    <div class=\"row\">\n        <div class=\"col-12\">    \n\n                        \n\n                <div class=\"row form-group\" *ngIf=\"_formService.getObject().document_code\">\n\n                        <label class=\"col-sm-2 control-label\" for=\"form_document_code\">Doc. Code</label>\n    \n            <div class=\"col-sm-10\">\n                                        <p id=\"form_document_code\"\n               class=\"form-control-static\"\n               [innerHTML]=\"_formService.getViewObject().document_code\"></p>\n                        <label class=\"error\" *ngFor=\"let error of _formService.getErrors().document_code\">{{error}}</label>\n            </div>\n        </div>\n                                    \n\n                <div class=\"row form-group\" *ngIf=\"_formService.getObject().booking_code\">\n\n                        <label class=\"col-sm-2 control-label\" for=\"form_booking_code\">Booking</label>\n    \n            <div class=\"col-sm-10\">\n                                        <p id=\"form_booking_code\"\n               class=\"form-control-static\"\n               [innerHTML]=\"_formService.getViewObject().booking_code\"></p>\n                        <label class=\"error\" *ngFor=\"let error of _formService.getErrors().booking_code\">{{error}}</label>\n            </div>\n        </div>\n                                    \n\n                <div class=\"row form-group\" >\n\n                        <label class=\"col-sm-2 control-label required\" for=\"form_serviceObj\">Service</label>\n    \n            <div class=\"col-sm-10\">\n                                                                        <div class=\"html-select\"\n         [htmlSelect]=\"'serviceObj'\"\n                      (onChange)=\"onServiceChange($event)\"         >\n        <div class=\"input-group-control\"\n             [class.error]=\"_formService.getErrors()['serviceObj'] && (_formService.getErrors()['serviceObj'].length > 0)\">\n            <span class=\"js_label form-control\"></span>\n            <a class=\"pull-right\"><i class=\"fa fa-angle-down\"></i></a>\n        </div>\n        <div class=\"choices js_choices\">\n            <ul class=\"form-control-box\">        <ng-template ngFor let-choice [ngForOf]=\"_dataService.getFieldChoices('serviceObj')\">\n            <li [attr.data-value]=\"choice['id']\" [innerHtml]=\"choice['label']\"></li>\n        </ng-template>\n    </ul>\n        </div>\n    </div>\n    <input [(ngModel)]=\"_formService.getObject().serviceObj\"\n           formControlName = serviceObj\n           name=\"form[serviceObj]\"\n           required=\"required\"           type=\"hidden\">\n                                <label class=\"error\" *ngFor=\"let error of _formService.getErrors().serviceObj\">{{error}}</label>\n            </div>\n        </div>\n                                    \n\n                <div class=\"row form-group\" >\n\n                        <label class=\"col-sm-2 control-label required\" for=\"form_description\">Description</label>\n    \n            <div class=\"col-sm-10\">\n                                            <input type=\"text\" id=\"form_description\" name=\"form[description]\" required=\"required\" maxlength=\"256\" [(ngModel)]=\"_formService.getObject().description\" formControlName=\"description\" [class.error]=\"_formService.getErrors().description &amp;&amp; _formService.getErrors().description.length &gt; 0\" class=\"form-control\" />\n                <label class=\"error\" *ngFor=\"let error of _formService.getErrors().description\">{{error}}</label>\n            </div>\n        </div>\n                                    \n\n                <div class=\"row form-group\" >\n\n                        <label class=\"col-sm-2 control-label required\" for=\"form_quantity\">Quantity</label>\n    \n            <div class=\"col-sm-10\">\n                                            <input type=\"number\" id=\"form_quantity\" name=\"form[quantity]\" required=\"required\" (input)=\"onQuantityEnterKey($event.target.value)\" (focusout)=\"onQuantityEnterKey($event.target.value)\" [(ngModel)]=\"_formService.getObject().quantity\" formControlName=\"quantity\" [class.error]=\"_formService.getErrors().quantity &amp;&amp; _formService.getErrors().quantity.length &gt; 0\" class=\"form-control\" />\n                <label class=\"error\" *ngFor=\"let error of _formService.getErrors().quantity\">{{error}}</label>\n            </div>\n        </div>\n                                                \n\n                                            <input type=\"hidden\" id=\"form_value\" name=\"form[value]\" [(ngModel)]=\"_formService.getObject().value\" formControlName=\"value\" [class.error]=\"_formService.getErrors().value &amp;&amp; _formService.getErrors().value.length &gt; 0\" />\n                <label class=\"error\" *ngFor=\"let error of _formService.getErrors().value\">{{error}}</label>\n                                    <div class=\"row form-group\">\n                            <label class=\"col-sm-2 control-label\" for=\"form_user_value\">Value</label>\n                    <div class=\"col-sm-10\"><div class=\"row\">\n                    <div class=\"col-sm-8\">\n                                                    <input type=\"text\" id=\"form_user_value\" name=\"form[user_value]\" (input)=\"onValueEnterKey($event.target.value)\" (focusout)=\"onValueEnterKey($event.target.value)\" [(ngModel)]=\"_formService.getObject().user_value\" formControlName=\"user_value\" [class.error]=\"_formService.getErrors().user_value &amp;&amp; _formService.getErrors().user_value.length &gt; 0\" class=\"form-control\" />\n                <label class=\"error\" *ngFor=\"let error of _formService.getErrors().user_value\">{{error}}</label>\n                    </div>\n                    <div class=\"col-sm-4\">\n                                                    <div class=\"checkbox\">                                        <label for=\"form_isVatIncluded\"><input type=\"checkbox\" id=\"form_isVatIncluded\" name=\"form[isVatIncluded]\" (change)=\"onIsVatIncludedChange($event.target.checked)\" [(ngModel)]=\"_formService.getObject().isVatIncluded\" formControlName=\"isVatIncluded\" [class.error]=\"_formService.getErrors().isVatIncluded &amp;&amp; _formService.getErrors().isVatIncluded.length &gt; 0\" value=\"1\" /> Is vat included</label>\n    </div>\n                <label class=\"error\" *ngFor=\"let error of _formService.getErrors().isVatIncluded\">{{error}}</label>\n                    </div>\n                </div></div>\n            </div>\n                                \n\n                <div class=\"row form-group\" >\n\n                        <label class=\"col-sm-2 control-label\" for=\"form_subTotal\">Sub Total</label>\n    \n            <div class=\"col-sm-10\">\n                                            <input type=\"text\" id=\"form_subTotal\" name=\"form[subTotal]\" readonly=\"readonly\" [(ngModel)]=\"_formService.getObject().subTotal\" formControlName=\"subTotal\" [class.error]=\"_formService.getErrors().subTotal &amp;&amp; _formService.getErrors().subTotal.length &gt; 0\" class=\"form-control\" />\n                <label class=\"error\" *ngFor=\"let error of _formService.getErrors().subTotal\">{{error}}</label>\n            </div>\n        </div>\n                                    \n\n                <div class=\"row form-group\" >\n\n                        <label class=\"col-sm-2 control-label\" for=\"form_totalVat\">TAX</label>\n    \n            <div class=\"col-sm-10\">\n                                            <input type=\"text\" id=\"form_totalVat\" name=\"form[totalVat]\" readonly=\"readonly\" [(ngModel)]=\"_formService.getObject().totalVat\" formControlName=\"totalVat\" [class.error]=\"_formService.getErrors().totalVat &amp;&amp; _formService.getErrors().totalVat.length &gt; 0\" class=\"form-control\" />\n                <label class=\"error\" *ngFor=\"let error of _formService.getErrors().totalVat\">{{error}}</label>\n            </div>\n        </div>\n                                    \n\n                <div class=\"row form-group\" >\n\n                        <label class=\"col-sm-2 control-label\" for=\"form_total\">Total</label>\n    \n            <div class=\"col-sm-10\">\n                                            <input type=\"text\" id=\"form_total\" name=\"form[total]\" readonly=\"readonly\" [(ngModel)]=\"_formService.getObject().total\" formControlName=\"total\" [class.error]=\"_formService.getErrors().total &amp;&amp; _formService.getErrors().total.length &gt; 0\" class=\"form-control\" />\n                <label class=\"error\" *ngFor=\"let error of _formService.getErrors().total\">{{error}}</label>\n            </div>\n        </div>\n                                    \n\n                <div class=\"row form-group\" >\n\n                        <label class=\"col-sm-2 control-label\" [innerHTML]=\"getLang('Enabled')\"></label>\n    \n            <div class=\"col-sm-10\">\n                                            <div class=\"checkbox\">                                        <label for=\"form_isEnabled\"><input type=\"checkbox\" id=\"form_isEnabled\" name=\"form[isEnabled]\" [(ngModel)]=\"_formService.getObject().isEnabled\" formControlName=\"isEnabled\" [class.error]=\"_formService.getErrors().isEnabled &amp;&amp; _formService.getErrors().isEnabled.length &gt; 0\" value=\"1\" checked=\"checked\" /> Is enabled</label>\n    </div>\n                <label class=\"error\" *ngFor=\"let error of _formService.getErrors().isEnabled\">{{error}}</label>\n            </div>\n        </div>\n                </div>\n    </div>\n</div>\n<div class=\"modal-footer hide-on-empty\">\n        \n                    <div class=\"row\">\n            <div class=\"col-auto ml-auto\">\n                                            <button                                     class=\"btn btn-light\"\n                                    (click)=\"cancelAction($event)\"\n                                        id=\"form_cancel\"\n            name=\"form[cancel]\"\n            type=\"button\"><i class=\"fa fa-times\"></i>&nbsp;Cancel</button>\n                                                <button                                     class=\"btn btn-light\"\n                                    (click)=\"resetAction($event)\"\n                                        id=\"form_reset\"\n            name=\"form[reset]\"\n            type=\"button\"><i class=\"fa fa-ban\"></i>&nbsp;Reset</button>\n                                                <button                                     class=\"btn btn-primary\"\n                                    (click)=\"saveAction($event)\"\n                                        id=\"form_save\"\n            name=\"form[save]\"\n            type=\"button\"><i class=\"fa fa-check\"></i>&nbsp;Save</button>\n                                                <button                                     class=\"btn btn-primary\"\n                                    (click)=\"saveAndCloseAction($event)\"\n                                        id=\"form_saveAndClose\"\n            name=\"form[saveAndClose]\"\n            type=\"button\"><i class=\"fa fa-times\"></i>&nbsp;Save and Close</button>\n                                </div>\n        </div>\n    </div>    \n    <input type=\"hidden\" id=\"form__token\" name=\"form[_token]\" value=\"cEuu0f4SXmjfjYDFXIJO4B5Hkp8dRrRxqs-vEEkwqNE\" /></form>\n"

/***/ }),

/***/ "../../../../../src/Bck/AccountingBundle/Resources/public/supplier-document-invoice/index/ts/src/main.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MainComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__AppBundle_Resources_public_ts_actions_actions_service__ = __webpack_require__("../../../../../src/AppBundle/Resources/public/ts/actions/actions.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__AppBundle_Resources_public_data_box_ts_src_data_box_extension_component__ = __webpack_require__("../../../../../src/AppBundle/Resources/public/data-box/ts/src/data-box.extension-component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__AppBundle_Resources_public_modal_ts_modal_service__ = __webpack_require__("../../../../../src/AppBundle/Resources/public/modal/ts/modal.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__AppBundle_Resources_public_tasks_loader_manager_ts_tasks_loader_manager_service__ = __webpack_require__("../../../../../src/AppBundle/Resources/public/tasks-loader-manager/ts/tasks-loader-manager.service.ts");
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
var MainComponent = (function (_super) {
    __extends(MainComponent, _super);
    function MainComponent(viewContainerRef, renderer, dataBoxProvider, dataService, tasksLoaderManagerService, helperService, actionsService, modalService, popups, injector, _parentDataService // Used in view
    ) {
        var _this = 
        // Call parent
        _super.call(this) || this;
        _this._parentDataService = _parentDataService; // Used in view
        _super.prototype.initDataBoxExtensionComponent.call(_this, viewContainerRef, renderer, dataBoxProvider, dataService, tasksLoaderManagerService, helperService, actionsService, modalService, popups, injector);
        return _this;
    }
    MainComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: '.js_supplierDocumentInvoiceDetail',
            template: __webpack_require__("../../../../../src/Bck/AccountingBundle/Resources/public/supplier-document-invoice/index/ts/templates/main.component.html")
        }),
        __param(2, Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["y" /* Inject */])('Provider')),
        __param(3, Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["y" /* Inject */])('DataService')),
        __param(5, Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["y" /* Inject */])('HelperService')),
        __param(8, Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["y" /* Inject */])('Popups')),
        __param(10, Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["y" /* Inject */])('ParentDataService')),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_core__["_9" /* ViewContainerRef */],
            __WEBPACK_IMPORTED_MODULE_0__angular_core__["U" /* Renderer */], Object, Object, __WEBPACK_IMPORTED_MODULE_4__AppBundle_Resources_public_tasks_loader_manager_ts_tasks_loader_manager_service__["a" /* TasksLoaderManagerService */], Object, __WEBPACK_IMPORTED_MODULE_1__AppBundle_Resources_public_ts_actions_actions_service__["a" /* ActionsService */],
            __WEBPACK_IMPORTED_MODULE_3__AppBundle_Resources_public_modal_ts_modal_service__["b" /* ModalService */], Object, __WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Injector */], Object])
    ], MainComponent);
    return MainComponent;
}(__WEBPACK_IMPORTED_MODULE_2__AppBundle_Resources_public_data_box_ts_src_data_box_extension_component__["a" /* DataBoxExtensionComponent */]));



/***/ }),

/***/ "../../../../../src/Bck/AccountingBundle/Resources/public/supplier-document-invoice/index/ts/src/main.ext-module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MainExtModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("../../../common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__AppBundle_Resources_public_ts_search_search_module__ = __webpack_require__("../../../../../src/AppBundle/Resources/public/ts/search/search.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__AppBundle_Resources_public_ts_expander_expander_module__ = __webpack_require__("../../../../../src/AppBundle/Resources/public/ts/expander/expander.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__AppBundle_Resources_public_ts_search_search_pagination_module__ = __webpack_require__("../../../../../src/AppBundle/Resources/public/ts/search/search-pagination.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__AppBundle_Resources_public_legend_ts_src_legend_ext_module__ = __webpack_require__("../../../../../src/AppBundle/Resources/public/legend/ts/src/legend.ext-module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__main_component__ = __webpack_require__("../../../../../src/Bck/AccountingBundle/Resources/public/supplier-document-invoice/index/ts/src/main.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


// This module doesn't use "ReactiveFormsModule", but it needs to import this class
// to provide "formBuilder" when inject dependencies in child modules (like form)






var MainExtModule = (function () {
    function MainExtModule() {
    }
    MainExtModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["H" /* NgModule */])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_common__["a" /* CommonModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_forms__["b" /* FormsModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_forms__["e" /* ReactiveFormsModule */],
                __WEBPACK_IMPORTED_MODULE_3__AppBundle_Resources_public_ts_search_search_module__["a" /* SearchModule */],
                __WEBPACK_IMPORTED_MODULE_5__AppBundle_Resources_public_ts_search_search_pagination_module__["a" /* SearchPaginationModule */],
                __WEBPACK_IMPORTED_MODULE_4__AppBundle_Resources_public_ts_expander_expander_module__["a" /* ExpanderModule */],
                __WEBPACK_IMPORTED_MODULE_6__AppBundle_Resources_public_legend_ts_src_legend_ext_module__["a" /* LegendExtModule */]
            ],
            declarations: [
                __WEBPACK_IMPORTED_MODULE_7__main_component__["a" /* MainComponent */]
            ],
            exports: [__WEBPACK_IMPORTED_MODULE_7__main_component__["a" /* MainComponent */]]
        })
    ], MainExtModule);
    return MainExtModule;
}());



/***/ }),

/***/ "../../../../../src/Bck/AccountingBundle/Resources/public/supplier-document-invoice/index/ts/templates/main.component.html":
/***/ (function(module, exports) {

module.exports = "\n\n<div class=\"ibox\" >\n                        <div class=\"ibox-title\" *ngIf=\"!getProviderExtraDataAttr('hasMergeHeader')\">\n                <h5>\n                    <ng-template [ngIf]=\"getProviderAttr('controls')['expander']['isEnabled']\"><js_expander\n                        [isExpanded]=\"_isExpanded || null\"\n                        [label]=\"getLang(getProviderAttr('label'))\"\n                        [labelCount]=\"getProviderAttr('labelCount')\"\n                        [labelIcon]=\"getProviderAttr('labelIcon')\"\n                        (onChange)=\"expanderAction($event)\"></js_expander></ng-template>\n                    <ng-template [ngIf]=\"!getProviderAttr('controls')['expander']['isEnabled']\">\n                        <span [innerHTML]=\"getProviderAttr('label')\"></span>\n                    </ng-template>\n                </h5>\n                <div *ngIf=\"_isExpanded\"\n                     class=\"txt-align-r hide-on-empty\">    <div class=\"row align-items-center\">\n        <div class=\"col ml-auto text-right actions no-user-select\">\n            <ng-template [ngIf]=\"_actionsService.getActionAttr('search', 'isEnabled')\"><js_search class=\"search\"></js_search></ng-template>\n            <div (click)=\"triggerAction($event)\">\n                <ng-template ngFor let-action [ngForOf]=\"_actionsService.getHeadActions()\">\n                    <a *ngIf=\"_actionsService.getActionAttr(action, 'isEnabled')\"\n                       [ngClass]=\"[_actionsService.getActionAttr(action, 'icon')]\"\n                       class=\"-round fa\"\n                       [attr.data-action]=\"action\"></a>\n                </ng-template>\n            </div>\n        </div>\n    </div>\n</div>\n            </div>\n            \n    <div [hidden]=\"!(_isExpanded)\" class=\"ibox-content hide-on-empty\">    <ng-template [ngIf]=\"(_dataService.getProviderAttr('objects') && _dataService.getProviderAttr('objects')[0])\">\n            <div class=\"table-responsive m-t\">\n        <form>\n            <table class=\"table table-bordered\">\n                <thead>\n                <tr>\n                    <th *ngFor=\"let field of ['description', 'quantity', 'totalUnit', 'vatCode_name', 'total']\">{{ _dataService.getFields('metadata')[field].label }}</th>\n                    <th>&nbsp;</th>\n                </tr>\n                </thead>\n                <tbody>\n                <ng-template ngFor let-obj [ngForOf]=\"_dataService.getProviderAttr('objects')\" let-objIndex=\"index\"><tr\n                          (dblclick)=\"editAction($event, objIndex)\">\n                        <td class=\"txt-align-l\"><div><strong><span\n                            [innerHTML]=\"obj['service_icon']\" class=\"mr-1\"></span><span class=\"mr-1\"\n                            [innerHTML]=\"obj['service_name']\"></span><span *ngIf=\"obj['booking_code']\">(<span\n                            [innerHTML]=\"obj['booking_code']\"></span>)</span></strong></div><small><span\n                            [innerHTML]=\"obj['description']\"></span></small></td>\n                        <td *ngFor=\"let field of ['quantity', 'totalUnit', 'vatCode_name', 'total']\"\n                            [ngClass]=\"getColAlign(field)\"\n                            [innerHTML]=\"obj[field]\"></td>\n                        <td>\n                            <span *ngIf=\"obj['_isNew']\" class=\"badge badge-info\">New</span>\n                            <span *ngIf=\"obj['_isEdited']\" class=\"badge badge-info\">Edited</span>\n                            <input *ngIf=\"_actionsService.getActionAttr('radioChoice', 'isEnabled')\"\n                                   class=\"pull-right action\"\n                                   type=\"radio\"\n                                   name=\"index[]\"\n                                   value=\"{{objIndex}}\"/>\n                            <input *ngIf=\"_actionsService.getActionAttr('checkAll', 'isEnabled')\"\n                                   class=\"pull-right action js_checkAll\"\n                                   type=\"checkbox\"\n                                   name=\"index[]\"\n                                   value=\"{{objIndex}}\"\n                                   [ngModel]=\"checkAll\"/>\n                            <div class=\"pull-right actions no-user-select\" (click)=\"triggerAction($event)\">\n                                <ng-template ngFor let-action [ngForOf]=\"_actionsService.getDetailActions()\">\n                                    <a *ngIf=\"_actionsService.getActionAttr(action, 'isEnabled')\"\n                                       [ngClass]=\"[_actionsService.getActionAttr(action, 'icon')]\"\n                                       class=\"fa\"\n                                       [attr.data-action]=\"action\"\n                                       [attr.data-value]=\"objIndex\"></a>\n                                </ng-template>\n                            </div>\n                        </td>\n                    </tr></ng-template>\n                </tbody>\n            </table>\n        </form>\n    </div>\n    </ng-template><p\n        class=\"text-center\"\n        *ngIf=\"!(_dataService.getProviderAttr('objects') && _dataService.getProviderAttr('objects')[0])\">No results.</p>\n</div>\n        <div [hidden]=\"!(_isExpanded)\"\n         class=\"ibox-footer\"\n         *ngIf=\"_dataService.countObjects() > 0\"><js_searchPagination></js_searchPagination></div>\n\n</div>\n\n<js_legend></js_legend>"

/***/ }),

/***/ "../../../../../src/Bck/AccountingBundle/Resources/public/supplier-document-payment/edit/ts/src/form-popup.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FormPopupComponent; });
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



var FormPopupComponent = (function (_super) {
    __extends(FormPopupComponent, _super);
    function FormPopupComponent(elementRef, renderer, provider, formService, dataService, _helperService) {
        var _this = _super.call(this) || this;
        _this._helperService = _helperService;
        _super.prototype.initFormPopupExtensionComponent.call(_this, elementRef, renderer, provider, formService, dataService);
        return _this;
    }
    /**
     * Lifecycle callback
     */
    FormPopupComponent.prototype.ngOnDestroy = function () {
        // If is a '_isSessionStorage' object, the object is ignored, so we need to update manually all objects
        // (occurs in add mode)
        if (this._dataService.getObject()['_isSessionStorage']
            && this._formService.getObject()['id']) {
            this._dataService.refresh();
        }
    };
    FormPopupComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: '#js_supplierDocumentReceiptPaymentFormPopup',
            template: __webpack_require__("../../../../../src/Bck/AccountingBundle/Resources/public/supplier-document-payment/edit/ts/templates/form-popup.component.html")
        }),
        __param(2, Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["y" /* Inject */])('Provider')),
        __param(4, Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["y" /* Inject */])('DataService')),
        __param(5, Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["y" /* Inject */])('HelperService')),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_core__["t" /* ElementRef */],
            __WEBPACK_IMPORTED_MODULE_0__angular_core__["U" /* Renderer */], Object, __WEBPACK_IMPORTED_MODULE_2__AppBundle_Resources_public_form_ts_form_service__["a" /* FormService */], Object, Object])
    ], FormPopupComponent);
    return FormPopupComponent;
}(__WEBPACK_IMPORTED_MODULE_1__AppBundle_Resources_public_form_ts_form_popup_extension_component__["a" /* FormPopupExtensionComponent */]));



/***/ }),

/***/ "../../../../../src/Bck/AccountingBundle/Resources/public/supplier-document-payment/edit/ts/src/form-popup.ext-module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FormPopupExtModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("../../../common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ng_bootstrap_ng_bootstrap__ = __webpack_require__("../../../../@ng-bootstrap/ng-bootstrap/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__AppBundle_Resources_public_form_ts_field_types_field_types_extension_module__ = __webpack_require__("../../../../../src/AppBundle/Resources/public/form/ts/field-types/field-types.extension-module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__form_popup_component__ = __webpack_require__("../../../../../src/Bck/AccountingBundle/Resources/public/supplier-document-payment/edit/ts/src/form-popup.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






var FormPopupExtModule = (function () {
    function FormPopupExtModule() {
    }
    FormPopupExtModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["H" /* NgModule */])({
            imports: [__WEBPACK_IMPORTED_MODULE_1__angular_common__["a" /* CommonModule */], __WEBPACK_IMPORTED_MODULE_2__angular_forms__["b" /* FormsModule */], __WEBPACK_IMPORTED_MODULE_2__angular_forms__["e" /* ReactiveFormsModule */], __WEBPACK_IMPORTED_MODULE_3__ng_bootstrap_ng_bootstrap__["a" /* NgbModule */], __WEBPACK_IMPORTED_MODULE_4__AppBundle_Resources_public_form_ts_field_types_field_types_extension_module__["a" /* FieldTypesExtensionModule */]],
            declarations: [
                __WEBPACK_IMPORTED_MODULE_5__form_popup_component__["a" /* FormPopupComponent */]
            ],
            exports: [__WEBPACK_IMPORTED_MODULE_5__form_popup_component__["a" /* FormPopupComponent */]]
        })
    ], FormPopupExtModule);
    return FormPopupExtModule;
}());



/***/ }),

/***/ "../../../../../src/Bck/AccountingBundle/Resources/public/supplier-document-payment/edit/ts/src/form.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FormComponent; });
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



var FormComponent = (function (_super) {
    __extends(FormComponent, _super);
    function FormComponent(elementRef, renderer, provider, formService, dataService, _helperService) {
        var _this = _super.call(this) || this;
        _this._helperService = _helperService;
        _super.prototype.initFormExtensionComponent.call(_this, elementRef, renderer, provider, formService, dataService);
        return _this;
    }
    FormComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: '#js_form',
            template: __webpack_require__("../../../../../src/Bck/AccountingBundle/Resources/public/supplier-document-payment/edit/ts/templates/form.component.html")
        }),
        __param(2, Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["y" /* Inject */])('Provider')),
        __param(4, Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["y" /* Inject */])('DataService')),
        __param(5, Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["y" /* Inject */])('HelperService')),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_core__["t" /* ElementRef */],
            __WEBPACK_IMPORTED_MODULE_0__angular_core__["U" /* Renderer */], Object, __WEBPACK_IMPORTED_MODULE_2__AppBundle_Resources_public_form_ts_form_service__["a" /* FormService */], Object, Object])
    ], FormComponent);
    return FormComponent;
}(__WEBPACK_IMPORTED_MODULE_1__AppBundle_Resources_public_form_ts_form_extension_component__["a" /* FormExtensionComponent */]));



/***/ }),

/***/ "../../../../../src/Bck/AccountingBundle/Resources/public/supplier-document-payment/edit/ts/src/form.ext-module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FormExtModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("../../../common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ng_bootstrap_ng_bootstrap__ = __webpack_require__("../../../../@ng-bootstrap/ng-bootstrap/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__AppBundle_Resources_public_form_ts_field_types_field_types_extension_module__ = __webpack_require__("../../../../../src/AppBundle/Resources/public/form/ts/field-types/field-types.extension-module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__form_component__ = __webpack_require__("../../../../../src/Bck/AccountingBundle/Resources/public/supplier-document-payment/edit/ts/src/form.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






var FormExtModule = (function () {
    function FormExtModule() {
    }
    FormExtModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["H" /* NgModule */])({
            imports: [__WEBPACK_IMPORTED_MODULE_1__angular_common__["a" /* CommonModule */], __WEBPACK_IMPORTED_MODULE_2__angular_forms__["b" /* FormsModule */], __WEBPACK_IMPORTED_MODULE_2__angular_forms__["e" /* ReactiveFormsModule */], __WEBPACK_IMPORTED_MODULE_3__ng_bootstrap_ng_bootstrap__["a" /* NgbModule */], __WEBPACK_IMPORTED_MODULE_4__AppBundle_Resources_public_form_ts_field_types_field_types_extension_module__["a" /* FieldTypesExtensionModule */]],
            declarations: [
                __WEBPACK_IMPORTED_MODULE_5__form_component__["a" /* FormComponent */]
            ],
            exports: [__WEBPACK_IMPORTED_MODULE_5__form_component__["a" /* FormComponent */]]
        })
    ], FormExtModule);
    return FormExtModule;
}());



/***/ }),

/***/ "../../../../../src/Bck/AccountingBundle/Resources/public/supplier-document-payment/edit/ts/templates/form-popup.component.html":
/***/ (function(module, exports) {

module.exports = "    \n    <form name=\"form\" method=\"post\" (ngSubmit)=\"saveAction($event)\" [formGroup]=\"_formService.getForm()\" class=\"form-horizontal\">\n<div class=\"modal-header\">\n    <div class=\"row align-items-center\">\n        <h3 class=\"col-auto mr-auto modal-title\">Form&nbsp;{{getProviderAttr('label')}}<small>&nbsp;({{(_formService && _formService.getObject() && _formService.getObject().id) ? 'edit' : 'add'}})</small></h3>\n        <div class=\"col-auto text-right actions\"><a\n                class=\"-round fa fa-times\"\n                (click)=\"closeAction($event)\"></a></div>\n    </div>\n</div>\n<div class=\"modal-body\">\n    <div class=\"row\">\n        <div class=\"col-12\">    \n            \n\n                <div class=\"row form-group\" >\n\n                        <label class=\"col-sm-2 control-label required\" for=\"form_paymentMethodObj\">Payment Method</label>\n    \n            <div class=\"col-sm-10\">\n                                                                        <div class=\"html-select\"\n         [htmlSelect]=\"'paymentMethodObj'\"\n                               >\n        <div class=\"input-group-control\"\n             [class.error]=\"_formService.getErrors()['paymentMethodObj'] && (_formService.getErrors()['paymentMethodObj'].length > 0)\">\n            <span class=\"js_label form-control\"></span>\n            <a class=\"pull-right\"><i class=\"fa fa-angle-down\"></i></a>\n        </div>\n        <div class=\"choices js_choices\">\n            <ul class=\"form-control-box\">        <ng-template ngFor let-choice [ngForOf]=\"_dataService.getFieldChoices('paymentMethodObj')\">\n            <li [attr.data-value]=\"choice['id']\" [innerHtml]=\"choice['label']\"></li>\n        </ng-template>\n    </ul>\n        </div>\n    </div>\n    <input [(ngModel)]=\"_formService.getObject().paymentMethodObj\"\n           formControlName = paymentMethodObj\n           name=\"form[paymentMethodObj]\"\n           required=\"required\"           type=\"hidden\">\n                                <label class=\"error\" *ngFor=\"let error of _formService.getErrors().paymentMethodObj\">{{error}}</label>\n            </div>\n        </div>\n                \n\n                <div class=\"row form-group\" >\n\n                        <label class=\"col-sm-2 control-label\" for=\"form_reference\">Reference</label>\n    \n            <div class=\"col-sm-10\">\n                                            <input type=\"text\" id=\"form_reference\" name=\"form[reference]\" maxlength=\"64\" [(ngModel)]=\"_formService.getObject().reference\" formControlName=\"reference\" [class.error]=\"_formService.getErrors().reference &amp;&amp; _formService.getErrors().reference.length &gt; 0\" class=\"form-control\" />\n                <label class=\"error\" *ngFor=\"let error of _formService.getErrors().reference\">{{error}}</label>\n            </div>\n        </div>\n                \n\n                <div class=\"row form-group\" >\n\n                        <label class=\"col-sm-2 control-label\" for=\"form_description\">Description</label>\n    \n            <div class=\"col-sm-10\">\n                                            <input type=\"text\" id=\"form_description\" name=\"form[description]\" maxlength=\"256\" [(ngModel)]=\"_formService.getObject().description\" formControlName=\"description\" [class.error]=\"_formService.getErrors().description &amp;&amp; _formService.getErrors().description.length &gt; 0\" class=\"form-control\" />\n                <label class=\"error\" *ngFor=\"let error of _formService.getErrors().description\">{{error}}</label>\n            </div>\n        </div>\n                \n\n                <div class=\"row form-group\" >\n\n                        <label class=\"col-sm-2 control-label required\" for=\"form_value\">Value</label>\n    \n            <div class=\"col-sm-10\">\n                                            <input type=\"text\" id=\"form_value\" name=\"form[value]\" required=\"required\" [(ngModel)]=\"_formService.getObject().value\" formControlName=\"value\" [class.error]=\"_formService.getErrors().value &amp;&amp; _formService.getErrors().value.length &gt; 0\" class=\"form-control\" />\n                <label class=\"error\" *ngFor=\"let error of _formService.getErrors().value\">{{error}}</label>\n            </div>\n        </div>\n                \n\n                <div class=\"row form-group\" >\n\n                        <label class=\"col-sm-2 control-label\" [innerHTML]=\"getLang('Enabled')\"></label>\n    \n            <div class=\"col-sm-10\">\n                                            <div class=\"checkbox\">                                        <label for=\"form_isEnabled\"><input type=\"checkbox\" id=\"form_isEnabled\" name=\"form[isEnabled]\" [(ngModel)]=\"_formService.getObject().isEnabled\" formControlName=\"isEnabled\" [class.error]=\"_formService.getErrors().isEnabled &amp;&amp; _formService.getErrors().isEnabled.length &gt; 0\" value=\"1\" checked=\"checked\" /> Is enabled</label>\n    </div>\n                <label class=\"error\" *ngFor=\"let error of _formService.getErrors().isEnabled\">{{error}}</label>\n            </div>\n        </div>\n        </div>\n    </div>\n</div>\n<div class=\"modal-footer hide-on-empty\">\n        \n                    <div class=\"row\">\n            <div class=\"col-auto ml-auto\">\n                                            <button                                     class=\"btn btn-light\"\n                                    (click)=\"cancelAction($event)\"\n                                        id=\"form_cancel\"\n            name=\"form[cancel]\"\n            type=\"button\"><i class=\"fa fa-times\"></i>&nbsp;Cancel</button>\n                                                <button                                     class=\"btn btn-light\"\n                                    (click)=\"resetAction($event)\"\n                                        id=\"form_reset\"\n            name=\"form[reset]\"\n            type=\"button\"><i class=\"fa fa-ban\"></i>&nbsp;Reset</button>\n                                                <button                                     class=\"btn btn-primary\"\n                                    (click)=\"saveAction($event)\"\n                                        id=\"form_save\"\n            name=\"form[save]\"\n            type=\"button\"><i class=\"fa fa-check\"></i>&nbsp;Save</button>\n                                                <button                                     class=\"btn btn-primary\"\n                                    (click)=\"saveAndCloseAction($event)\"\n                                        id=\"form_saveAndClose\"\n            name=\"form[saveAndClose]\"\n            type=\"button\"><i class=\"fa fa-times\"></i>&nbsp;Save and Close</button>\n                                </div>\n        </div>\n    </div>    \n    <input type=\"hidden\" id=\"form__token\" name=\"form[_token]\" value=\"cEuu0f4SXmjfjYDFXIJO4B5Hkp8dRrRxqs-vEEkwqNE\" /></form>\n"

/***/ }),

/***/ "../../../../../src/Bck/AccountingBundle/Resources/public/supplier-document-payment/edit/ts/templates/form.component.html":
/***/ (function(module, exports) {

module.exports = "\n\n\n    <form name=\"form\" method=\"post\" (ngSubmit)=\"saveAction($event)\" [formGroup]=\"_formService.getForm()\" class=\"form-horizontal\">\n\n    \n            \n\n                <div class=\"row form-group\" >\n\n                        <label class=\"col-sm-2 control-label required\" for=\"form_paymentMethodObj\">Payment Method</label>\n    \n            <div class=\"col-sm-10\">\n                                                                        <div class=\"html-select\"\n         [htmlSelect]=\"'paymentMethodObj'\"\n                               >\n        <div class=\"input-group-control\"\n             [class.error]=\"_formService.getErrors()['paymentMethodObj'] && (_formService.getErrors()['paymentMethodObj'].length > 0)\">\n            <span class=\"js_label form-control\"></span>\n            <a class=\"pull-right\"><i class=\"fa fa-angle-down\"></i></a>\n        </div>\n        <div class=\"choices js_choices\">\n            <ul class=\"form-control-box\">        <ng-template ngFor let-choice [ngForOf]=\"_dataService.getFieldChoices('paymentMethodObj')\">\n            <li [attr.data-value]=\"choice['id']\" [innerHtml]=\"choice['label']\"></li>\n        </ng-template>\n    </ul>\n        </div>\n    </div>\n    <input [(ngModel)]=\"_formService.getObject().paymentMethodObj\"\n           formControlName = paymentMethodObj\n           name=\"form[paymentMethodObj]\"\n           required=\"required\"           type=\"hidden\">\n                                <label class=\"error\" *ngFor=\"let error of _formService.getErrors().paymentMethodObj\">{{error}}</label>\n            </div>\n        </div>\n                \n\n                <div class=\"row form-group\" >\n\n                        <label class=\"col-sm-2 control-label\" for=\"form_reference\">Reference</label>\n    \n            <div class=\"col-sm-10\">\n                                            <input type=\"text\" id=\"form_reference\" name=\"form[reference]\" maxlength=\"64\" [(ngModel)]=\"_formService.getObject().reference\" formControlName=\"reference\" [class.error]=\"_formService.getErrors().reference &amp;&amp; _formService.getErrors().reference.length &gt; 0\" class=\"form-control\" />\n                <label class=\"error\" *ngFor=\"let error of _formService.getErrors().reference\">{{error}}</label>\n            </div>\n        </div>\n                \n\n                <div class=\"row form-group\" >\n\n                        <label class=\"col-sm-2 control-label\" for=\"form_description\">Description</label>\n    \n            <div class=\"col-sm-10\">\n                                            <input type=\"text\" id=\"form_description\" name=\"form[description]\" maxlength=\"256\" [(ngModel)]=\"_formService.getObject().description\" formControlName=\"description\" [class.error]=\"_formService.getErrors().description &amp;&amp; _formService.getErrors().description.length &gt; 0\" class=\"form-control\" />\n                <label class=\"error\" *ngFor=\"let error of _formService.getErrors().description\">{{error}}</label>\n            </div>\n        </div>\n                \n\n                <div class=\"row form-group\" >\n\n                        <label class=\"col-sm-2 control-label required\" for=\"form_value\">Value</label>\n    \n            <div class=\"col-sm-10\">\n                                            <input type=\"text\" id=\"form_value\" name=\"form[value]\" required=\"required\" [(ngModel)]=\"_formService.getObject().value\" formControlName=\"value\" [class.error]=\"_formService.getErrors().value &amp;&amp; _formService.getErrors().value.length &gt; 0\" class=\"form-control\" />\n                <label class=\"error\" *ngFor=\"let error of _formService.getErrors().value\">{{error}}</label>\n            </div>\n        </div>\n                \n\n                <div class=\"row form-group\" >\n\n                        <label class=\"col-sm-2 control-label\" [innerHTML]=\"getLang('Enabled')\"></label>\n    \n            <div class=\"col-sm-10\">\n                                            <div class=\"checkbox\">                                        <label for=\"form_isEnabled\"><input type=\"checkbox\" id=\"form_isEnabled\" name=\"form[isEnabled]\" [(ngModel)]=\"_formService.getObject().isEnabled\" formControlName=\"isEnabled\" [class.error]=\"_formService.getErrors().isEnabled &amp;&amp; _formService.getErrors().isEnabled.length &gt; 0\" value=\"1\" checked=\"checked\" /> Is enabled</label>\n    </div>\n                <label class=\"error\" *ngFor=\"let error of _formService.getErrors().isEnabled\">{{error}}</label>\n            </div>\n        </div>\n        \n\n    \n\n    <input type=\"hidden\" id=\"form__token\" name=\"form[_token]\" value=\"cEuu0f4SXmjfjYDFXIJO4B5Hkp8dRrRxqs-vEEkwqNE\" /></form>\n\n"

/***/ }),

/***/ "../../../../../src/Bck/AccountingBundle/Resources/public/supplier-document-payment/index/ts/src/main.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MainComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__AppBundle_Resources_public_ts_actions_actions_service__ = __webpack_require__("../../../../../src/AppBundle/Resources/public/ts/actions/actions.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__AppBundle_Resources_public_data_box_ts_src_data_box_extension_component__ = __webpack_require__("../../../../../src/AppBundle/Resources/public/data-box/ts/src/data-box.extension-component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__AppBundle_Resources_public_modal_ts_modal_service__ = __webpack_require__("../../../../../src/AppBundle/Resources/public/modal/ts/modal.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__AppBundle_Resources_public_tasks_loader_manager_ts_tasks_loader_manager_service__ = __webpack_require__("../../../../../src/AppBundle/Resources/public/tasks-loader-manager/ts/tasks-loader-manager.service.ts");
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
var MainComponent = (function (_super) {
    __extends(MainComponent, _super);
    function MainComponent(viewContainerRef, renderer, dataBoxProvider, dataService, tasksLoaderManagerService, helperService, actionsService, modalService, popups, injector, _parentDataService // Used in view
    ) {
        var _this = 
        // Call parent
        _super.call(this) || this;
        _this._parentDataService = _parentDataService; // Used in view
        _super.prototype.initDataBoxExtensionComponent.call(_this, viewContainerRef, renderer, dataBoxProvider, dataService, tasksLoaderManagerService, helperService, actionsService, modalService, popups, injector);
        return _this;
    }
    MainComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: '.js_supplierDocumentReceiptPayment',
            template: __webpack_require__("../../../../../src/Bck/AccountingBundle/Resources/public/supplier-document-payment/index/ts/templates/main.component.html")
        }),
        __param(2, Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["y" /* Inject */])('Provider')),
        __param(3, Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["y" /* Inject */])('DataService')),
        __param(5, Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["y" /* Inject */])('HelperService')),
        __param(8, Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["y" /* Inject */])('Popups')),
        __param(10, Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["y" /* Inject */])('ParentDataService')),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_core__["_9" /* ViewContainerRef */],
            __WEBPACK_IMPORTED_MODULE_0__angular_core__["U" /* Renderer */], Object, Object, __WEBPACK_IMPORTED_MODULE_4__AppBundle_Resources_public_tasks_loader_manager_ts_tasks_loader_manager_service__["a" /* TasksLoaderManagerService */], Object, __WEBPACK_IMPORTED_MODULE_1__AppBundle_Resources_public_ts_actions_actions_service__["a" /* ActionsService */],
            __WEBPACK_IMPORTED_MODULE_3__AppBundle_Resources_public_modal_ts_modal_service__["b" /* ModalService */], Object, __WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Injector */], Object])
    ], MainComponent);
    return MainComponent;
}(__WEBPACK_IMPORTED_MODULE_2__AppBundle_Resources_public_data_box_ts_src_data_box_extension_component__["a" /* DataBoxExtensionComponent */]));



/***/ }),

/***/ "../../../../../src/Bck/AccountingBundle/Resources/public/supplier-document-payment/index/ts/src/main.ext-module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MainExtModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("../../../common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__AppBundle_Resources_public_ts_search_search_module__ = __webpack_require__("../../../../../src/AppBundle/Resources/public/ts/search/search.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__AppBundle_Resources_public_ts_expander_expander_module__ = __webpack_require__("../../../../../src/AppBundle/Resources/public/ts/expander/expander.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__AppBundle_Resources_public_ts_search_search_pagination_module__ = __webpack_require__("../../../../../src/AppBundle/Resources/public/ts/search/search-pagination.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__main_component__ = __webpack_require__("../../../../../src/Bck/AccountingBundle/Resources/public/supplier-document-payment/index/ts/src/main.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


// This module doesn't use "ReactiveFormsModule", but it needs to import this class
// to provide "formBuilder" when inject dependencies in child modules (like form)





var MainExtModule = (function () {
    function MainExtModule() {
    }
    MainExtModule = __decorate([
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
                __WEBPACK_IMPORTED_MODULE_6__main_component__["a" /* MainComponent */]
            ],
            exports: [__WEBPACK_IMPORTED_MODULE_6__main_component__["a" /* MainComponent */]]
        })
    ], MainExtModule);
    return MainExtModule;
}());



/***/ }),

/***/ "../../../../../src/Bck/AccountingBundle/Resources/public/supplier-document-payment/index/ts/templates/main.component.html":
/***/ (function(module, exports) {

module.exports = "\n\n<div class=\"ibox\" >\n                        <div class=\"ibox-title\" *ngIf=\"!getProviderExtraDataAttr('hasMergeHeader')\">\n                <h5>\n                    <ng-template [ngIf]=\"getProviderAttr('controls')['expander']['isEnabled']\"><js_expander\n                        [isExpanded]=\"_isExpanded || null\"\n                        [label]=\"getLang(getProviderAttr('label'))\"\n                        [labelCount]=\"getProviderAttr('labelCount')\"\n                        [labelIcon]=\"getProviderAttr('labelIcon')\"\n                        (onChange)=\"expanderAction($event)\"></js_expander></ng-template>\n                    <ng-template [ngIf]=\"!getProviderAttr('controls')['expander']['isEnabled']\">\n                        <span [innerHTML]=\"getProviderAttr('label')\"></span>\n                    </ng-template>\n                </h5>\n                <div *ngIf=\"_isExpanded\"\n                     class=\"txt-align-r hide-on-empty\">    <div class=\"row align-items-center\">\n        <div class=\"col ml-auto text-right actions no-user-select\">\n            <ng-template [ngIf]=\"_actionsService.getActionAttr('search', 'isEnabled')\"><js_search class=\"search\"></js_search></ng-template>\n            <div (click)=\"triggerAction($event)\">\n                <ng-template ngFor let-action [ngForOf]=\"_actionsService.getHeadActions()\">\n                    <a *ngIf=\"_actionsService.getActionAttr(action, 'isEnabled')\"\n                       [ngClass]=\"[_actionsService.getActionAttr(action, 'icon')]\"\n                       class=\"-round fa\"\n                       [attr.data-action]=\"action\"></a>\n                </ng-template>\n            </div>\n        </div>\n    </div>\n</div>\n            </div>\n            \n    <div [hidden]=\"!(_isExpanded)\" class=\"ibox-content hide-on-empty\">    <ng-template [ngIf]=\"(_dataService.getProviderAttr('objects') && _dataService.getProviderAttr('objects')[0])\">\n                \n    <div class=\"table-responsive\">\n    <form>    <table class=\"data-table table table-hover dataTables-example table-bordered\">\n        <thead>\n        <tr>\n            <th *ngFor=\"let searchField of _dataService.getSearch('fields')\">{{ getLang(_dataService.getFields('metadata')[searchField].label) }}</th>\n            <th>&nbsp;</th>\n        </tr>\n        </thead>        <tbody>\n        <ng-template ngFor let-obj [ngForOf]=\"_dataService.getProviderAttr('objects')\" let-objIndex=\"index\">\n        <tr (dblclick)=\"editAction($event, objIndex)\"            [ngClass]=\"getLegendClasses(obj, 'tr')\">                    <td *ngFor=\"let searchField of _dataService.getSearch('fields')\"\n    [ngClass]=\"getColAlign(searchField)\"\n    [innerHTML]=\"obj[searchField]\"></td>                        <td>\n                <span *ngIf=\"obj['_isNew']\" class=\"badge badge-info\">New</span>\n                <span *ngIf=\"obj['_isEdited']\" class=\"badge badge-info\">Edited</span>\n                <input *ngIf=\"_actionsService.getActionAttr('radioChoice', 'isEnabled')\"\n                       class=\"pull-right action\"\n                       type=\"radio\"\n                       name=\"index[]\"\n                       value=\"{{objIndex}}\"/>\n                <input *ngIf=\"_actionsService.getActionAttr('checkAll', 'isEnabled')\"\n                       class=\"pull-right action js_checkAll\"\n                       type=\"checkbox\"\n                       name=\"index[]\"\n                       value=\"{{objIndex}}\"\n                       [ngModel]=\"checkAll\"/>\n                <div class=\"pull-right actions no-user-select text-secondary\" (click)=\"triggerAction($event)\">\n                    <ng-template ngFor let-action [ngForOf]=\"_actionsService.getDetailActions()\">\n                        <a *ngIf=\"_actionsService.getActionAttr(action, 'isEnabled')\"\n                           [ngClass]=\"[_actionsService.getActionAttr(action, 'icon') + getActionsLegendClasses(obj, action)]\"\n                           class=\"fa\"\n                           [attr.data-action]=\"action\"\n                           [attr.data-value]=\"objIndex\"></a>\n                    </ng-template>\n                </div>\n            </td>        </tr>\n        </ng-template>\n        </tbody>\n    </table>\n    </form></div>    </ng-template><p\n        class=\"text-center\"\n        *ngIf=\"!(_dataService.getProviderAttr('objects') && _dataService.getProviderAttr('objects')[0])\">No results.</p>\n</div>\n        <div [hidden]=\"!(_isExpanded)\"\n         class=\"ibox-footer\"\n         *ngIf=\"_dataService.countObjects() > 0\"><js_searchPagination></js_searchPagination></div>\n\n</div>\n\n<js_legend></js_legend>"

/***/ }),

/***/ "../../../../../src/Bck/AccountingBundle/Resources/public/supplier-document-rectification/add/ts/src/form-popup.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FormPopupComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__AppBundle_Resources_public_form_ts_form_service__ = __webpack_require__("../../../../../src/AppBundle/Resources/public/form/ts/form.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__AppBundle_Resources_public_ts_helper__ = __webpack_require__("../../../../../src/AppBundle/Resources/public/ts/helper.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__AppBundle_Resources_public_wizard_ts_src_wizard_manager_service__ = __webpack_require__("../../../../../src/AppBundle/Resources/public/wizard/ts/src/wizard-manager.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__base_document_rectification_add_ts_form_popup_ext_component__ = __webpack_require__("../../../../../src/Bck/AccountingBundle/Resources/public/base-document-rectification/add/ts/form-popup.ext-component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__AppBundle_Resources_public_tree_view_default_ts_src_tree_view_ext_module__ = __webpack_require__("../../../../../src/AppBundle/Resources/public/tree-view/default/ts/src/tree-view.ext-module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__step2_form_popup_ext_module__ = __webpack_require__("../../../../../src/Bck/AccountingBundle/Resources/public/supplier-document-rectification/add/ts/src/step2-form-popup.ext-module.ts");
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
// Booking Parent, used when the document is aggregated to one booking
// (this code is putted here to avoid to repeat this module in the booking bundle, so we can reuse the same modules)
var bookingContext = ((__WEBPACK_IMPORTED_MODULE_2__AppBundle_Resources_public_ts_helper__["a" /* Helper */].getAppVar('conf')['localData']['data']['bookingContext'])
    ? __WEBPACK_IMPORTED_MODULE_2__AppBundle_Resources_public_ts_helper__["a" /* Helper */].getAppVar('conf')['localData']['data']['bookingContext'] :
    null), bookingId = (bookingContext ? __WEBPACK_IMPORTED_MODULE_2__AppBundle_Resources_public_ts_helper__["a" /* Helper */].getAppVar('conf')['object']['id'] : null);
// RECTIFICATION DOCUMENT CHOICES

// EDIT FORM

/* /Import dependencies */
var FormPopupComponent = (function (_super) {
    __extends(FormPopupComponent, _super);
    function FormPopupComponent(elementRef, renderer, provider, wizardManagerService, formService, helperService, dataService, parentFormService, // To get parent object
        injector) {
        var _this = 
        // Call parent
        _super.call(this) || this;
        _super.prototype.initBaseDocumentRectificationAddFormPopupExtComponent.call(_this, elementRef, renderer, provider, wizardManagerService, formService, helperService, dataService, parentFormService, injector);
        return _this;
    }
    /**
     * Get navigation data (needed data to lazy load container)
     * @param index (index to load)
     * @returns NavData
     */
    FormPopupComponent.prototype.getNavData = function (index) {
        switch (index) {
            case 0:
                return {
                    module: __WEBPACK_IMPORTED_MODULE_5__AppBundle_Resources_public_tree_view_default_ts_src_tree_view_ext_module__["a" /* TreeViewExtModule */],
                    component: 'TreeViewComponent',
                    urlProvider: (this._helperService.getAppVar('route') + 'bck/accounting/supplier-document-invoice-rectification/data-for-rectification/' + this._parentFormService.getObject()['id'] + (bookingContext ? ('/' + bookingId) : ''))
                };
            case 1:
                return {
                    module: __WEBPACK_IMPORTED_MODULE_6__step2_form_popup_ext_module__["a" /* Step2FormPopupExtModule */],
                    component: 'Step2FormPopupComponent'
                };
        }
        return null;
    };
    FormPopupComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: '.js_addFormPopup',
            template: __webpack_require__("../../../../../src/Bck/AccountingBundle/Resources/public/supplier-document-rectification/add/ts/templates/form-popup.component.html")
        }),
        __param(2, Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["y" /* Inject */])('Provider')),
        __param(5, Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["y" /* Inject */])('HelperService')),
        __param(6, Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["y" /* Inject */])('DataService')),
        __param(7, Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["y" /* Inject */])('ParentFormService')),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_core__["t" /* ElementRef */],
            __WEBPACK_IMPORTED_MODULE_0__angular_core__["U" /* Renderer */], Object, __WEBPACK_IMPORTED_MODULE_3__AppBundle_Resources_public_wizard_ts_src_wizard_manager_service__["a" /* WizardManagerService */],
            __WEBPACK_IMPORTED_MODULE_1__AppBundle_Resources_public_form_ts_form_service__["a" /* FormService */], Object, Object, Object, __WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Injector */]])
    ], FormPopupComponent);
    return FormPopupComponent;
}(__WEBPACK_IMPORTED_MODULE_4__base_document_rectification_add_ts_form_popup_ext_component__["a" /* FormPopupExtComponent */]));



/***/ }),

/***/ "../../../../../src/Bck/AccountingBundle/Resources/public/supplier-document-rectification/add/ts/src/form-popup.ext-module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FormPopupExtModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("../../../common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ng_bootstrap_ng_bootstrap__ = __webpack_require__("../../../../@ng-bootstrap/ng-bootstrap/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__AppBundle_Resources_public_form_ts_field_types_field_types_extension_module__ = __webpack_require__("../../../../../src/AppBundle/Resources/public/form/ts/field-types/field-types.extension-module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__form_popup_component__ = __webpack_require__("../../../../../src/Bck/AccountingBundle/Resources/public/supplier-document-rectification/add/ts/src/form-popup.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






var FormPopupExtModule = (function () {
    function FormPopupExtModule() {
    }
    FormPopupExtModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["H" /* NgModule */])({
            imports: [__WEBPACK_IMPORTED_MODULE_1__angular_common__["a" /* CommonModule */], __WEBPACK_IMPORTED_MODULE_2__angular_forms__["b" /* FormsModule */], __WEBPACK_IMPORTED_MODULE_2__angular_forms__["e" /* ReactiveFormsModule */], __WEBPACK_IMPORTED_MODULE_3__ng_bootstrap_ng_bootstrap__["a" /* NgbModule */], __WEBPACK_IMPORTED_MODULE_4__AppBundle_Resources_public_form_ts_field_types_field_types_extension_module__["a" /* FieldTypesExtensionModule */]],
            declarations: [
                __WEBPACK_IMPORTED_MODULE_5__form_popup_component__["a" /* FormPopupComponent */]
            ],
            exports: [__WEBPACK_IMPORTED_MODULE_5__form_popup_component__["a" /* FormPopupComponent */]]
        })
    ], FormPopupExtModule);
    return FormPopupExtModule;
}());



/***/ }),

/***/ "../../../../../src/Bck/AccountingBundle/Resources/public/supplier-document-rectification/add/ts/src/step2-form-popup.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Step2FormPopupComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__AppBundle_Resources_public_ts_helper__ = __webpack_require__("../../../../../src/AppBundle/Resources/public/ts/helper.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__edit_ts_src_form_popup_component__ = __webpack_require__("../../../../../src/Bck/AccountingBundle/Resources/public/supplier-document-rectification/edit/ts/src/form-popup.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__AppBundle_Resources_public_form_ts_form_service__ = __webpack_require__("../../../../../src/AppBundle/Resources/public/form/ts/form.service.ts");
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




/**
 * This class is necessary to redefine the template url for add step 2
 */
var templateUrl = __WEBPACK_IMPORTED_MODULE_1__AppBundle_Resources_public_ts_helper__["a" /* Helper */].getGlobalVar('templateUrl');
var Step2FormPopupComponent = (function (_super) {
    __extends(Step2FormPopupComponent, _super);
    function Step2FormPopupComponent(elementRef, renderer, provider, formService, dataService, helperService) {
        return _super.call(this, elementRef, renderer, provider, formService, dataService, helperService) || this;
    }
    Step2FormPopupComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: '#js_supplierDocumentReceiptSettlementFormPopup',
            template: __webpack_require__("../../../../../src/Bck/AccountingBundle/Resources/public/supplier-document-rectification/add/ts/templates/step2-form-popup.component.html")
        }),
        __param(2, Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["y" /* Inject */])('Provider')),
        __param(4, Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["y" /* Inject */])('DataService')),
        __param(5, Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["y" /* Inject */])('HelperService')),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_core__["t" /* ElementRef */],
            __WEBPACK_IMPORTED_MODULE_0__angular_core__["U" /* Renderer */], Object, __WEBPACK_IMPORTED_MODULE_3__AppBundle_Resources_public_form_ts_form_service__["a" /* FormService */], Object, Object])
    ], Step2FormPopupComponent);
    return Step2FormPopupComponent;
}(__WEBPACK_IMPORTED_MODULE_2__edit_ts_src_form_popup_component__["a" /* FormPopupComponent */]));



/***/ }),

/***/ "../../../../../src/Bck/AccountingBundle/Resources/public/supplier-document-rectification/add/ts/src/step2-form-popup.ext-module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Step2FormPopupExtModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("../../../common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ng_bootstrap_ng_bootstrap__ = __webpack_require__("../../../../@ng-bootstrap/ng-bootstrap/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__AppBundle_Resources_public_form_ts_field_types_field_types_extension_module__ = __webpack_require__("../../../../../src/AppBundle/Resources/public/form/ts/field-types/field-types.extension-module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__step2_form_popup_component__ = __webpack_require__("../../../../../src/Bck/AccountingBundle/Resources/public/supplier-document-rectification/add/ts/src/step2-form-popup.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






var Step2FormPopupExtModule = (function () {
    function Step2FormPopupExtModule() {
    }
    Step2FormPopupExtModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["H" /* NgModule */])({
            imports: [__WEBPACK_IMPORTED_MODULE_1__angular_common__["a" /* CommonModule */], __WEBPACK_IMPORTED_MODULE_2__angular_forms__["b" /* FormsModule */], __WEBPACK_IMPORTED_MODULE_2__angular_forms__["e" /* ReactiveFormsModule */], __WEBPACK_IMPORTED_MODULE_3__ng_bootstrap_ng_bootstrap__["a" /* NgbModule */], __WEBPACK_IMPORTED_MODULE_4__AppBundle_Resources_public_form_ts_field_types_field_types_extension_module__["a" /* FieldTypesExtensionModule */]],
            declarations: [
                __WEBPACK_IMPORTED_MODULE_5__step2_form_popup_component__["a" /* Step2FormPopupComponent */]
            ],
            exports: [__WEBPACK_IMPORTED_MODULE_5__step2_form_popup_component__["a" /* Step2FormPopupComponent */]]
        })
    ], Step2FormPopupExtModule);
    return Step2FormPopupExtModule;
}());



/***/ }),

/***/ "../../../../../src/Bck/AccountingBundle/Resources/public/supplier-document-rectification/add/ts/templates/form-popup.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"modal-header\">\n    <div class=\"row align-items-center\">\n        <h3 class=\"col-auto mr-auto modal-title\">Form&nbsp;{{getProviderAttr('label')}}<small>&nbsp;({{(_formService && _formService.getObject() && _formService.getObject().id) ? 'edit' : 'add'}})</small></h3>\n        <div class=\"col-auto text-right actions\"><a\n                class=\"-round fa fa-times\"\n                (click)=\"closeAction($event)\"></a></div>\n    </div>\n</div>\n<div class=\"modal-body\">\n    <div class=\"row\">\n        <div class=\"col-12\">    \n                        <ul class=\"row mb-3 no-gutters wizard-nav\">\n                                    <li class=\"col-auto wizard-step\"\n                        [class.step-active]=\"0 == _wizardManagerService.getIndex()\">\n                        <span class=\"step-number\">1</span>\n                        <span class=\"step-text\">Documents</span>\n                    </li>\n                                    <li class=\"col-auto wizard-step\"\n                        [class.step-active]=\"1 == _wizardManagerService.getIndex()\">\n                        <span class=\"step-number\">2</span>\n                        <span class=\"step-text\">Preview</span>\n                    </li>\n                            </ul>\n\n            \n                <section [hidden]=\"_wizardManagerService.getIndex() != 0\"\n         class=\"js_lazyLoadContainer_0\">\n    <ng-template #js_lazyLoadContainer></ng-template>\n</section>\n    <section [hidden]=\"_wizardManagerService.getIndex() != 1\"\n         class=\"js_lazyLoadContainer_1\">\n    <ng-template #js_lazyLoadContainer></ng-template>\n</section>\n            \n            \n    </div>\n    </div>\n</div>\n<div class=\"modal-footer hide-on-empty\">\n        <div class=\"row justify-content-center\">\n    <div class=\"col-auto\">\n            <button type=\"button\" class=\"btn-light btn\" (click)=\"_wizardManagerService.cancelAction($event)\">Cancel</button>\n                <button type=\"button\" class=\"btn-primary btn\" (click)=\"_wizardManagerService.prevAction($event)\"\n                    *ngIf=\"0 < _wizardManagerService.getIndex()\">Prev</button>\n            <button type=\"button\" class=\"btn-primary btn\" (click)=\"_wizardManagerService.nextAction($event)\"\n                    *ngIf=\"1 > _wizardManagerService.getIndex()\">Next</button>\n            <button type=\"button\" class=\"btn-primary btn\" (click)=\"_wizardManagerService.finishAction($event)\"\n                    *ngIf=\"1 == _wizardManagerService.getIndex()\">Finish</button>\n        \n    </div>\n</div></div>"

/***/ }),

/***/ "../../../../../src/Bck/AccountingBundle/Resources/public/supplier-document-rectification/add/ts/templates/step2-form-popup.component.html":
/***/ (function(module, exports) {

module.exports = "\n\n\n    <form name=\"form\" method=\"post\" (ngSubmit)=\"saveAction($event)\" [formGroup]=\"_formService.getForm()\" class=\"form-horizontal\">\n\n    \n\n                        <div class=\"row form-group -multiple-field\">\n                            <label class=\"col-sm-2 control-label\" for=\"form_originalDocument_code\">Original Doc.</label>\n                    <div class=\"col-sm-10\">\n                                            <p id=\"form_originalDocumentType_name\"\n               class=\"form-control-static\"\n               [innerHTML]=\"_formService.getViewObject().originalDocumentType_name\"></p>\n                        <label class=\"error\" *ngFor=\"let error of _formService.getErrors().originalDocumentType_name\">{{error}}</label>\n                                            <p id=\"form_originalDocument_code\"\n               class=\"form-control-static\"\n               [innerHTML]=\"_formService.getViewObject().originalDocument_code\"></p>\n                        <label class=\"error\" *ngFor=\"let error of _formService.getErrors().originalDocument_code\">{{error}}</label>\n                </div>\n            </div>\n                                            \n\n                <div class=\"row form-group\" *ngIf=\"_formService.getObject().document_code\">\n\n                        <label class=\"col-sm-2 control-label\" for=\"form_supplierDocumentInvoiceDetailObj_document_code\">Doc. Code</label>\n    \n            <div class=\"col-sm-10\">\n                                        <p id=\"form_supplierDocumentInvoiceDetailObj_document_code\"\n               class=\"form-control-static\"\n               [innerHTML]=\"_formService.getViewObject().document_code\"></p>\n                        <label class=\"error\" *ngFor=\"let error of _formService.getErrors().document_code\">{{error}}</label>\n            </div>\n        </div>\n                                    \n\n                <div class=\"row form-group\" *ngIf=\"_formService.getObject().booking_code\">\n\n                        <label class=\"col-sm-2 control-label\" for=\"form_supplierDocumentInvoiceDetailObj_booking_code\">Booking</label>\n    \n            <div class=\"col-sm-10\">\n                                        <p id=\"form_supplierDocumentInvoiceDetailObj_booking_code\"\n               class=\"form-control-static\"\n               [innerHTML]=\"_formService.getViewObject().booking_code\"></p>\n                        <label class=\"error\" *ngFor=\"let error of _formService.getErrors().booking_code\">{{error}}</label>\n            </div>\n        </div>\n                                    \n\n                <div class=\"row form-group\" >\n\n                        <label class=\"col-sm-2 control-label required\" for=\"form_supplierDocumentInvoiceDetailObj_description\">Description</label>\n    \n            <div class=\"col-sm-10\">\n                                            <input type=\"text\" id=\"form_supplierDocumentInvoiceDetailObj_description\" name=\"form[supplierDocumentInvoiceDetailObj][description]\" required=\"required\" maxlength=\"256\" [(ngModel)]=\"_formService.getObject().description\" formControlName=\"description\" [class.error]=\"_formService.getErrors().description &amp;&amp; _formService.getErrors().description.length &gt; 0\" class=\"form-control\" />\n                <label class=\"error\" *ngFor=\"let error of _formService.getErrors().description\">{{error}}</label>\n            </div>\n        </div>\n                                    \n\n                <div class=\"row form-group\" >\n\n                        <label class=\"col-sm-2 control-label required\" for=\"form_supplierDocumentInvoiceDetailObj_quantity\">Quantity</label>\n    \n            <div class=\"col-sm-10\">\n                                            <input type=\"number\" id=\"form_supplierDocumentInvoiceDetailObj_quantity\" name=\"form[supplierDocumentInvoiceDetailObj][quantity]\" required=\"required\" (input)=\"onQuantityEnterKey($event.target.value)\" (focusout)=\"onQuantityEnterKey($event.target.value)\" [(ngModel)]=\"_formService.getObject().quantity\" formControlName=\"quantity\" [class.error]=\"_formService.getErrors().quantity &amp;&amp; _formService.getErrors().quantity.length &gt; 0\" class=\"form-control\" />\n                <label class=\"error\" *ngFor=\"let error of _formService.getErrors().quantity\">{{error}}</label>\n            </div>\n        </div>\n                                                \n\n                                            <input type=\"hidden\" id=\"form_supplierDocumentInvoiceDetailObj_value\" name=\"form[supplierDocumentInvoiceDetailObj][value]\" [(ngModel)]=\"_formService.getObject().value\" formControlName=\"value\" [class.error]=\"_formService.getErrors().value &amp;&amp; _formService.getErrors().value.length &gt; 0\" />\n                <label class=\"error\" *ngFor=\"let error of _formService.getErrors().value\">{{error}}</label>\n                                    <div class=\"row form-group\">\n                            <label class=\"col-sm-2 control-label\" for=\"form_supplierDocumentInvoiceDetailObj_user_value\">Value</label>\n                    <div class=\"col-sm-10\"><div class=\"row\">\n                        <div class=\"col-sm-8\">\n                                                        <input type=\"text\" id=\"form_supplierDocumentInvoiceDetailObj_user_value\" name=\"form[supplierDocumentInvoiceDetailObj][user_value]\" (input)=\"onValueEnterKey($event.target.value)\" (focusout)=\"onValueEnterKey($event.target.value)\" [(ngModel)]=\"_formService.getObject().user_value\" formControlName=\"user_value\" [class.error]=\"_formService.getErrors().user_value &amp;&amp; _formService.getErrors().user_value.length &gt; 0\" class=\"form-control\" />\n                <label class=\"error\" *ngFor=\"let error of _formService.getErrors().user_value\">{{error}}</label>\n                        </div>\n                        <div class=\"col-sm-4\">\n                                                        <div class=\"checkbox\">                                        <label for=\"form_supplierDocumentInvoiceDetailObj_isVatIncluded\"><input type=\"checkbox\" id=\"form_supplierDocumentInvoiceDetailObj_isVatIncluded\" name=\"form[supplierDocumentInvoiceDetailObj][isVatIncluded]\" (change)=\"onIsVatIncludedChange($event.target.checked)\" [(ngModel)]=\"_formService.getObject().isVatIncluded\" formControlName=\"isVatIncluded\" [class.error]=\"_formService.getErrors().isVatIncluded &amp;&amp; _formService.getErrors().isVatIncluded.length &gt; 0\" value=\"1\" /> Is vat included</label>\n    </div>\n                <label class=\"error\" *ngFor=\"let error of _formService.getErrors().isVatIncluded\">{{error}}</label>\n                        </div>\n                    </div></div>\n            </div>\n                                \n\n                <div class=\"row form-group\" >\n\n                        <label class=\"col-sm-2 control-label\" for=\"form_supplierDocumentInvoiceDetailObj_subTotal\">Sub Total</label>\n    \n            <div class=\"col-sm-10\">\n                                            <input type=\"text\" id=\"form_supplierDocumentInvoiceDetailObj_subTotal\" name=\"form[supplierDocumentInvoiceDetailObj][subTotal]\" readonly=\"readonly\" [(ngModel)]=\"_formService.getObject().subTotal\" formControlName=\"subTotal\" [class.error]=\"_formService.getErrors().subTotal &amp;&amp; _formService.getErrors().subTotal.length &gt; 0\" class=\"form-control\" />\n                <label class=\"error\" *ngFor=\"let error of _formService.getErrors().subTotal\">{{error}}</label>\n            </div>\n        </div>\n                                    \n\n                <div class=\"row form-group\" >\n\n                        <label class=\"col-sm-2 control-label\" for=\"form_supplierDocumentInvoiceDetailObj_totalVat\">TAX</label>\n    \n            <div class=\"col-sm-10\">\n                                            <input type=\"text\" id=\"form_supplierDocumentInvoiceDetailObj_totalVat\" name=\"form[supplierDocumentInvoiceDetailObj][totalVat]\" readonly=\"readonly\" [(ngModel)]=\"_formService.getObject().totalVat\" formControlName=\"totalVat\" [class.error]=\"_formService.getErrors().totalVat &amp;&amp; _formService.getErrors().totalVat.length &gt; 0\" class=\"form-control\" />\n                <label class=\"error\" *ngFor=\"let error of _formService.getErrors().totalVat\">{{error}}</label>\n            </div>\n        </div>\n                                    \n\n                <div class=\"row form-group\" >\n\n                        <label class=\"col-sm-2 control-label\" for=\"form_supplierDocumentInvoiceDetailObj_total\">Total</label>\n    \n            <div class=\"col-sm-10\">\n                                            <input type=\"text\" id=\"form_supplierDocumentInvoiceDetailObj_total\" name=\"form[supplierDocumentInvoiceDetailObj][total]\" readonly=\"readonly\" [(ngModel)]=\"_formService.getObject().total\" formControlName=\"total\" [class.error]=\"_formService.getErrors().total &amp;&amp; _formService.getErrors().total.length &gt; 0\" class=\"form-control\" />\n                <label class=\"error\" *ngFor=\"let error of _formService.getErrors().total\">{{error}}</label>\n            </div>\n        </div>\n                                    \n\n                <div class=\"row form-group\" >\n\n                        <label class=\"col-sm-2 control-label\" [innerHTML]=\"getLang('Enabled')\"></label>\n    \n            <div class=\"col-sm-10\">\n                                            <div class=\"checkbox\">                                        <label for=\"form_isEnabled\"><input type=\"checkbox\" id=\"form_isEnabled\" name=\"form[isEnabled]\" [(ngModel)]=\"_formService.getObject().isEnabled\" formControlName=\"isEnabled\" [class.error]=\"_formService.getErrors().isEnabled &amp;&amp; _formService.getErrors().isEnabled.length &gt; 0\" value=\"1\" checked=\"checked\" /> Is enabled</label>\n    </div>\n                <label class=\"error\" *ngFor=\"let error of _formService.getErrors().isEnabled\">{{error}}</label>\n            </div>\n        </div>\n                                                <div class=\"row form-group -multiple-field\">\n                            <label class=\"col-sm-2 control-label\" for=\"form_service_name\">Service</label>\n                    <div class=\"col-sm-10\">\n                                            <p id=\"form_service_icon\"\n               class=\"form-control-static\"\n               [innerHTML]=\"_formService.getViewObject().service_icon\"></p>\n                        <label class=\"error\" *ngFor=\"let error of _formService.getErrors().service_icon\">{{error}}</label>\n                                            <p id=\"form_service_name\"\n               class=\"form-control-static\"\n               [innerHTML]=\"_formService.getViewObject().service_name\"></p>\n                        <label class=\"error\" *ngFor=\"let error of _formService.getErrors().service_name\">{{error}}</label>\n                </div>\n            </div>\n            \n\n    \n\n    <input type=\"hidden\" id=\"form__token\" name=\"form[_token]\" value=\"cEuu0f4SXmjfjYDFXIJO4B5Hkp8dRrRxqs-vEEkwqNE\" /></form>\n\n"

/***/ }),

/***/ "../../../../../src/Bck/AccountingBundle/Resources/public/supplier-document-rectification/edit/ts/src/form-popup.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FormPopupComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__AppBundle_Resources_public_form_ts_form_service__ = __webpack_require__("../../../../../src/AppBundle/Resources/public/form/ts/form.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__base_document_rectification_edit_ts_form_popup_ext_component__ = __webpack_require__("../../../../../src/Bck/AccountingBundle/Resources/public/base-document-rectification/edit/ts/form-popup.ext-component.ts");
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



var FormPopupComponent = (function (_super) {
    __extends(FormPopupComponent, _super);
    function FormPopupComponent(elementRef, renderer, provider, formService, dataService, helperService) {
        var _this = _super.call(this) || this;
        _super.prototype.initBaseDocumentRectificationEditFormPopupExtComponent.call(_this, elementRef, renderer, provider, formService, dataService, helperService);
        return _this;
    }
    FormPopupComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: '#js_supplierDocumentInvoiceRectificationFormPopup',
            template: __webpack_require__("../../../../../src/Bck/AccountingBundle/Resources/public/supplier-document-rectification/edit/ts/templates/form-popup.component.html")
        }),
        __param(2, Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["y" /* Inject */])('Provider')),
        __param(4, Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["y" /* Inject */])('DataService')),
        __param(5, Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["y" /* Inject */])('HelperService')),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_core__["t" /* ElementRef */],
            __WEBPACK_IMPORTED_MODULE_0__angular_core__["U" /* Renderer */], Object, __WEBPACK_IMPORTED_MODULE_1__AppBundle_Resources_public_form_ts_form_service__["a" /* FormService */], Object, Object])
    ], FormPopupComponent);
    return FormPopupComponent;
}(__WEBPACK_IMPORTED_MODULE_2__base_document_rectification_edit_ts_form_popup_ext_component__["a" /* FormPopupExtComponent */]));



/***/ }),

/***/ "../../../../../src/Bck/AccountingBundle/Resources/public/supplier-document-rectification/edit/ts/src/form-popup.ext-module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FormPopupExtModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("../../../common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ng_bootstrap_ng_bootstrap__ = __webpack_require__("../../../../@ng-bootstrap/ng-bootstrap/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__AppBundle_Resources_public_form_ts_field_types_field_types_extension_module__ = __webpack_require__("../../../../../src/AppBundle/Resources/public/form/ts/field-types/field-types.extension-module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__form_popup_component__ = __webpack_require__("../../../../../src/Bck/AccountingBundle/Resources/public/supplier-document-rectification/edit/ts/src/form-popup.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






var FormPopupExtModule = (function () {
    function FormPopupExtModule() {
    }
    FormPopupExtModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["H" /* NgModule */])({
            imports: [__WEBPACK_IMPORTED_MODULE_1__angular_common__["a" /* CommonModule */], __WEBPACK_IMPORTED_MODULE_2__angular_forms__["b" /* FormsModule */], __WEBPACK_IMPORTED_MODULE_2__angular_forms__["e" /* ReactiveFormsModule */], __WEBPACK_IMPORTED_MODULE_3__ng_bootstrap_ng_bootstrap__["a" /* NgbModule */], __WEBPACK_IMPORTED_MODULE_4__AppBundle_Resources_public_form_ts_field_types_field_types_extension_module__["a" /* FieldTypesExtensionModule */]],
            declarations: [
                __WEBPACK_IMPORTED_MODULE_5__form_popup_component__["a" /* FormPopupComponent */]
            ],
            exports: [__WEBPACK_IMPORTED_MODULE_5__form_popup_component__["a" /* FormPopupComponent */]]
        })
    ], FormPopupExtModule);
    return FormPopupExtModule;
}());



/***/ }),

/***/ "../../../../../src/Bck/AccountingBundle/Resources/public/supplier-document-rectification/edit/ts/templates/form-popup.component.html":
/***/ (function(module, exports) {

module.exports = "    \n    <form name=\"form\" method=\"post\" (ngSubmit)=\"saveAction($event)\" [formGroup]=\"_formService.getForm()\" class=\"form-horizontal\">\n<div class=\"modal-header\">\n    <div class=\"row align-items-center\">\n        <h3 class=\"col-auto mr-auto modal-title\">Form&nbsp;{{getProviderAttr('label')}}<small>&nbsp;({{(_formService && _formService.getObject() && _formService.getObject().id) ? 'edit' : 'add'}})</small></h3>\n        <div class=\"col-auto text-right actions\"><a\n                class=\"-round fa fa-times\"\n                (click)=\"closeAction($event)\"></a></div>\n    </div>\n</div>\n<div class=\"modal-body\">\n    <div class=\"row\">\n        <div class=\"col-12\">    \n\n                        <div class=\"row form-group -multiple-field\">\n                            <label class=\"col-sm-2 control-label\" for=\"form_originalDocument_code\">Original Doc.</label>\n                    <div class=\"col-sm-10\">\n                                            <p id=\"form_originalDocumentType_name\"\n               class=\"form-control-static\"\n               [innerHTML]=\"_formService.getViewObject().originalDocumentType_name\"></p>\n                        <label class=\"error\" *ngFor=\"let error of _formService.getErrors().originalDocumentType_name\">{{error}}</label>\n                                            <p id=\"form_originalDocument_code\"\n               class=\"form-control-static\"\n               [innerHTML]=\"_formService.getViewObject().originalDocument_code\"></p>\n                        <label class=\"error\" *ngFor=\"let error of _formService.getErrors().originalDocument_code\">{{error}}</label>\n                </div>\n            </div>\n                                            \n\n                <div class=\"row form-group\" *ngIf=\"_formService.getObject().document_code\">\n\n                        <label class=\"col-sm-2 control-label\" for=\"form_supplierDocumentInvoiceDetailObj_document_code\">Doc. Code</label>\n    \n            <div class=\"col-sm-10\">\n                                        <p id=\"form_supplierDocumentInvoiceDetailObj_document_code\"\n               class=\"form-control-static\"\n               [innerHTML]=\"_formService.getViewObject().document_code\"></p>\n                        <label class=\"error\" *ngFor=\"let error of _formService.getErrors().document_code\">{{error}}</label>\n            </div>\n        </div>\n                                    \n\n                <div class=\"row form-group\" *ngIf=\"_formService.getObject().booking_code\">\n\n                        <label class=\"col-sm-2 control-label\" for=\"form_supplierDocumentInvoiceDetailObj_booking_code\">Booking</label>\n    \n            <div class=\"col-sm-10\">\n                                        <p id=\"form_supplierDocumentInvoiceDetailObj_booking_code\"\n               class=\"form-control-static\"\n               [innerHTML]=\"_formService.getViewObject().booking_code\"></p>\n                        <label class=\"error\" *ngFor=\"let error of _formService.getErrors().booking_code\">{{error}}</label>\n            </div>\n        </div>\n                                    \n\n                <div class=\"row form-group\" >\n\n                        <label class=\"col-sm-2 control-label required\" for=\"form_supplierDocumentInvoiceDetailObj_description\">Description</label>\n    \n            <div class=\"col-sm-10\">\n                                            <input type=\"text\" id=\"form_supplierDocumentInvoiceDetailObj_description\" name=\"form[supplierDocumentInvoiceDetailObj][description]\" required=\"required\" maxlength=\"256\" [(ngModel)]=\"_formService.getObject().description\" formControlName=\"description\" [class.error]=\"_formService.getErrors().description &amp;&amp; _formService.getErrors().description.length &gt; 0\" class=\"form-control\" />\n                <label class=\"error\" *ngFor=\"let error of _formService.getErrors().description\">{{error}}</label>\n            </div>\n        </div>\n                                    \n\n                <div class=\"row form-group\" >\n\n                        <label class=\"col-sm-2 control-label required\" for=\"form_supplierDocumentInvoiceDetailObj_quantity\">Quantity</label>\n    \n            <div class=\"col-sm-10\">\n                                            <input type=\"number\" id=\"form_supplierDocumentInvoiceDetailObj_quantity\" name=\"form[supplierDocumentInvoiceDetailObj][quantity]\" required=\"required\" (input)=\"onQuantityEnterKey($event.target.value)\" (focusout)=\"onQuantityEnterKey($event.target.value)\" [(ngModel)]=\"_formService.getObject().quantity\" formControlName=\"quantity\" [class.error]=\"_formService.getErrors().quantity &amp;&amp; _formService.getErrors().quantity.length &gt; 0\" class=\"form-control\" />\n                <label class=\"error\" *ngFor=\"let error of _formService.getErrors().quantity\">{{error}}</label>\n            </div>\n        </div>\n                                                \n\n                                            <input type=\"hidden\" id=\"form_supplierDocumentInvoiceDetailObj_value\" name=\"form[supplierDocumentInvoiceDetailObj][value]\" [(ngModel)]=\"_formService.getObject().value\" formControlName=\"value\" [class.error]=\"_formService.getErrors().value &amp;&amp; _formService.getErrors().value.length &gt; 0\" />\n                <label class=\"error\" *ngFor=\"let error of _formService.getErrors().value\">{{error}}</label>\n                                    <div class=\"row form-group\">\n                            <label class=\"col-sm-2 control-label\" for=\"form_supplierDocumentInvoiceDetailObj_user_value\">Value</label>\n                    <div class=\"col-sm-10\"><div class=\"row\">\n                        <div class=\"col-sm-8\">\n                                                        <input type=\"text\" id=\"form_supplierDocumentInvoiceDetailObj_user_value\" name=\"form[supplierDocumentInvoiceDetailObj][user_value]\" (input)=\"onValueEnterKey($event.target.value)\" (focusout)=\"onValueEnterKey($event.target.value)\" [(ngModel)]=\"_formService.getObject().user_value\" formControlName=\"user_value\" [class.error]=\"_formService.getErrors().user_value &amp;&amp; _formService.getErrors().user_value.length &gt; 0\" class=\"form-control\" />\n                <label class=\"error\" *ngFor=\"let error of _formService.getErrors().user_value\">{{error}}</label>\n                        </div>\n                        <div class=\"col-sm-4\">\n                                                        <div class=\"checkbox\">                                        <label for=\"form_supplierDocumentInvoiceDetailObj_isVatIncluded\"><input type=\"checkbox\" id=\"form_supplierDocumentInvoiceDetailObj_isVatIncluded\" name=\"form[supplierDocumentInvoiceDetailObj][isVatIncluded]\" (change)=\"onIsVatIncludedChange($event.target.checked)\" [(ngModel)]=\"_formService.getObject().isVatIncluded\" formControlName=\"isVatIncluded\" [class.error]=\"_formService.getErrors().isVatIncluded &amp;&amp; _formService.getErrors().isVatIncluded.length &gt; 0\" value=\"1\" /> Is vat included</label>\n    </div>\n                <label class=\"error\" *ngFor=\"let error of _formService.getErrors().isVatIncluded\">{{error}}</label>\n                        </div>\n                    </div></div>\n            </div>\n                                \n\n                <div class=\"row form-group\" >\n\n                        <label class=\"col-sm-2 control-label\" for=\"form_supplierDocumentInvoiceDetailObj_subTotal\">Sub Total</label>\n    \n            <div class=\"col-sm-10\">\n                                            <input type=\"text\" id=\"form_supplierDocumentInvoiceDetailObj_subTotal\" name=\"form[supplierDocumentInvoiceDetailObj][subTotal]\" readonly=\"readonly\" [(ngModel)]=\"_formService.getObject().subTotal\" formControlName=\"subTotal\" [class.error]=\"_formService.getErrors().subTotal &amp;&amp; _formService.getErrors().subTotal.length &gt; 0\" class=\"form-control\" />\n                <label class=\"error\" *ngFor=\"let error of _formService.getErrors().subTotal\">{{error}}</label>\n            </div>\n        </div>\n                                    \n\n                <div class=\"row form-group\" >\n\n                        <label class=\"col-sm-2 control-label\" for=\"form_supplierDocumentInvoiceDetailObj_totalVat\">TAX</label>\n    \n            <div class=\"col-sm-10\">\n                                            <input type=\"text\" id=\"form_supplierDocumentInvoiceDetailObj_totalVat\" name=\"form[supplierDocumentInvoiceDetailObj][totalVat]\" readonly=\"readonly\" [(ngModel)]=\"_formService.getObject().totalVat\" formControlName=\"totalVat\" [class.error]=\"_formService.getErrors().totalVat &amp;&amp; _formService.getErrors().totalVat.length &gt; 0\" class=\"form-control\" />\n                <label class=\"error\" *ngFor=\"let error of _formService.getErrors().totalVat\">{{error}}</label>\n            </div>\n        </div>\n                                    \n\n                <div class=\"row form-group\" >\n\n                        <label class=\"col-sm-2 control-label\" for=\"form_supplierDocumentInvoiceDetailObj_total\">Total</label>\n    \n            <div class=\"col-sm-10\">\n                                            <input type=\"text\" id=\"form_supplierDocumentInvoiceDetailObj_total\" name=\"form[supplierDocumentInvoiceDetailObj][total]\" readonly=\"readonly\" [(ngModel)]=\"_formService.getObject().total\" formControlName=\"total\" [class.error]=\"_formService.getErrors().total &amp;&amp; _formService.getErrors().total.length &gt; 0\" class=\"form-control\" />\n                <label class=\"error\" *ngFor=\"let error of _formService.getErrors().total\">{{error}}</label>\n            </div>\n        </div>\n                                    \n\n                <div class=\"row form-group\" >\n\n                        <label class=\"col-sm-2 control-label\" [innerHTML]=\"getLang('Enabled')\"></label>\n    \n            <div class=\"col-sm-10\">\n                                            <div class=\"checkbox\">                                        <label for=\"form_isEnabled\"><input type=\"checkbox\" id=\"form_isEnabled\" name=\"form[isEnabled]\" [(ngModel)]=\"_formService.getObject().isEnabled\" formControlName=\"isEnabled\" [class.error]=\"_formService.getErrors().isEnabled &amp;&amp; _formService.getErrors().isEnabled.length &gt; 0\" value=\"1\" checked=\"checked\" /> Is enabled</label>\n    </div>\n                <label class=\"error\" *ngFor=\"let error of _formService.getErrors().isEnabled\">{{error}}</label>\n            </div>\n        </div>\n                                                <div class=\"row form-group -multiple-field\">\n                            <label class=\"col-sm-2 control-label\" for=\"form_service_name\">Service</label>\n                    <div class=\"col-sm-10\">\n                                            <p id=\"form_service_icon\"\n               class=\"form-control-static\"\n               [innerHTML]=\"_formService.getViewObject().service_icon\"></p>\n                        <label class=\"error\" *ngFor=\"let error of _formService.getErrors().service_icon\">{{error}}</label>\n                                            <p id=\"form_service_name\"\n               class=\"form-control-static\"\n               [innerHTML]=\"_formService.getViewObject().service_name\"></p>\n                        <label class=\"error\" *ngFor=\"let error of _formService.getErrors().service_name\">{{error}}</label>\n                </div>\n            </div>\n            </div>\n    </div>\n</div>\n<div class=\"modal-footer hide-on-empty\">\n        \n                    <div class=\"row\">\n            <div class=\"col-auto ml-auto\">\n                                            <button                                     class=\"btn btn-light\"\n                                    (click)=\"cancelAction($event)\"\n                                        id=\"form_cancel\"\n            name=\"form[cancel]\"\n            type=\"button\"><i class=\"fa fa-times\"></i>&nbsp;Cancel</button>\n                                                <button                                     class=\"btn btn-light\"\n                                    (click)=\"resetAction($event)\"\n                                        id=\"form_reset\"\n            name=\"form[reset]\"\n            type=\"button\"><i class=\"fa fa-ban\"></i>&nbsp;Reset</button>\n                                                <button                                     class=\"btn btn-primary\"\n                                    (click)=\"saveAction($event)\"\n                                        id=\"form_save\"\n            name=\"form[save]\"\n            type=\"button\"><i class=\"fa fa-check\"></i>&nbsp;Save</button>\n                                                <button                                     class=\"btn btn-primary\"\n                                    (click)=\"saveAndCloseAction($event)\"\n                                        id=\"form_saveAndClose\"\n            name=\"form[saveAndClose]\"\n            type=\"button\"><i class=\"fa fa-times\"></i>&nbsp;Save and Close</button>\n                                </div>\n        </div>\n    </div>    \n    <input type=\"hidden\" id=\"form__token\" name=\"form[_token]\" value=\"cEuu0f4SXmjfjYDFXIJO4B5Hkp8dRrRxqs-vEEkwqNE\" /></form>\n"

/***/ }),

/***/ "../../../../../src/Bck/AccountingBundle/Resources/public/supplier-document-rectification/index/ts/src/main.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MainComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__AppBundle_Resources_public_ts_actions_actions_service__ = __webpack_require__("../../../../../src/AppBundle/Resources/public/ts/actions/actions.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__AppBundle_Resources_public_data_box_ts_src_data_box_extension_component__ = __webpack_require__("../../../../../src/AppBundle/Resources/public/data-box/ts/src/data-box.extension-component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__AppBundle_Resources_public_modal_ts_modal_service__ = __webpack_require__("../../../../../src/AppBundle/Resources/public/modal/ts/modal.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__AppBundle_Resources_public_tasks_loader_manager_ts_tasks_loader_manager_service__ = __webpack_require__("../../../../../src/AppBundle/Resources/public/tasks-loader-manager/ts/tasks-loader-manager.service.ts");
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
var MainComponent = (function (_super) {
    __extends(MainComponent, _super);
    function MainComponent(viewContainerRef, renderer, dataBoxProvider, dataService, tasksLoaderManagerService, helperService, actionsService, modalService, popups, injector, _parentDataService // Used in view
    ) {
        var _this = 
        // Call parent
        _super.call(this) || this;
        _this._parentDataService = _parentDataService; // Used in view
        _super.prototype.initDataBoxExtensionComponent.call(_this, viewContainerRef, renderer, dataBoxProvider, dataService, tasksLoaderManagerService, helperService, actionsService, modalService, popups, injector);
        return _this;
    }
    MainComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: '.js_supplierDocumentInvoiceRectification',
            template: __webpack_require__("../../../../../src/Bck/AccountingBundle/Resources/public/supplier-document-rectification/index/ts/templates/main.component.html")
        }),
        __param(2, Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["y" /* Inject */])('Provider')),
        __param(3, Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["y" /* Inject */])('DataService')),
        __param(5, Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["y" /* Inject */])('HelperService')),
        __param(8, Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["y" /* Inject */])('Popups')),
        __param(10, Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["y" /* Inject */])('ParentDataService')),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_core__["_9" /* ViewContainerRef */],
            __WEBPACK_IMPORTED_MODULE_0__angular_core__["U" /* Renderer */], Object, Object, __WEBPACK_IMPORTED_MODULE_4__AppBundle_Resources_public_tasks_loader_manager_ts_tasks_loader_manager_service__["a" /* TasksLoaderManagerService */], Object, __WEBPACK_IMPORTED_MODULE_1__AppBundle_Resources_public_ts_actions_actions_service__["a" /* ActionsService */],
            __WEBPACK_IMPORTED_MODULE_3__AppBundle_Resources_public_modal_ts_modal_service__["b" /* ModalService */], Object, __WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Injector */], Object])
    ], MainComponent);
    return MainComponent;
}(__WEBPACK_IMPORTED_MODULE_2__AppBundle_Resources_public_data_box_ts_src_data_box_extension_component__["a" /* DataBoxExtensionComponent */]));



/***/ }),

/***/ "../../../../../src/Bck/AccountingBundle/Resources/public/supplier-document-rectification/index/ts/src/main.ext-module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MainExtModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("../../../common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__AppBundle_Resources_public_ts_search_search_module__ = __webpack_require__("../../../../../src/AppBundle/Resources/public/ts/search/search.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__AppBundle_Resources_public_ts_expander_expander_module__ = __webpack_require__("../../../../../src/AppBundle/Resources/public/ts/expander/expander.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__AppBundle_Resources_public_ts_search_search_pagination_module__ = __webpack_require__("../../../../../src/AppBundle/Resources/public/ts/search/search-pagination.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__main_component__ = __webpack_require__("../../../../../src/Bck/AccountingBundle/Resources/public/supplier-document-rectification/index/ts/src/main.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__AppBundle_Resources_public_legend_ts_src_legend_ext_module__ = __webpack_require__("../../../../../src/AppBundle/Resources/public/legend/ts/src/legend.ext-module.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


// This module doesn't use "ReactiveFormsModule", but it needs to import this class
// to provide "formBuilder" when inject dependencies in child modules (like form)






var MainExtModule = (function () {
    function MainExtModule() {
    }
    MainExtModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["H" /* NgModule */])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_common__["a" /* CommonModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_forms__["b" /* FormsModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_forms__["e" /* ReactiveFormsModule */],
                __WEBPACK_IMPORTED_MODULE_3__AppBundle_Resources_public_ts_search_search_module__["a" /* SearchModule */],
                __WEBPACK_IMPORTED_MODULE_5__AppBundle_Resources_public_ts_search_search_pagination_module__["a" /* SearchPaginationModule */],
                __WEBPACK_IMPORTED_MODULE_4__AppBundle_Resources_public_ts_expander_expander_module__["a" /* ExpanderModule */],
                __WEBPACK_IMPORTED_MODULE_7__AppBundle_Resources_public_legend_ts_src_legend_ext_module__["a" /* LegendExtModule */]
            ],
            declarations: [
                __WEBPACK_IMPORTED_MODULE_6__main_component__["a" /* MainComponent */]
            ],
            exports: [__WEBPACK_IMPORTED_MODULE_6__main_component__["a" /* MainComponent */]]
        })
    ], MainExtModule);
    return MainExtModule;
}());



/***/ }),

/***/ "../../../../../src/Bck/AccountingBundle/Resources/public/supplier-document-rectification/index/ts/templates/main.component.html":
/***/ (function(module, exports) {

module.exports = "\n\n<div class=\"ibox\" >\n                        <div class=\"ibox-title\" *ngIf=\"!getProviderExtraDataAttr('hasMergeHeader')\">\n                <h5>\n                    <ng-template [ngIf]=\"getProviderAttr('controls')['expander']['isEnabled']\"><js_expander\n                        [isExpanded]=\"_isExpanded || null\"\n                        [label]=\"getLang(getProviderAttr('label'))\"\n                        [labelCount]=\"getProviderAttr('labelCount')\"\n                        [labelIcon]=\"getProviderAttr('labelIcon')\"\n                        (onChange)=\"expanderAction($event)\"></js_expander></ng-template>\n                    <ng-template [ngIf]=\"!getProviderAttr('controls')['expander']['isEnabled']\">\n                        <span [innerHTML]=\"getProviderAttr('label')\"></span>\n                    </ng-template>\n                </h5>\n                <div *ngIf=\"_isExpanded\"\n                     class=\"txt-align-r hide-on-empty\">    <div class=\"row align-items-center\">\n        <div class=\"col ml-auto text-right actions no-user-select\">\n            <ng-template [ngIf]=\"_actionsService.getActionAttr('search', 'isEnabled')\"><js_search class=\"search\"></js_search></ng-template>\n            <div (click)=\"triggerAction($event)\">\n                <ng-template ngFor let-action [ngForOf]=\"_actionsService.getHeadActions()\">\n                    <a *ngIf=\"_actionsService.getActionAttr(action, 'isEnabled')\"\n                       [ngClass]=\"[_actionsService.getActionAttr(action, 'icon')]\"\n                       class=\"-round fa\"\n                       [attr.data-action]=\"action\"></a>\n                </ng-template>\n            </div>\n        </div>\n    </div>\n</div>\n            </div>\n            \n    <div [hidden]=\"!(_isExpanded)\" class=\"ibox-content hide-on-empty\">    <ng-template [ngIf]=\"(_dataService.getProviderAttr('objects') && _dataService.getProviderAttr('objects')[0])\">\n        <div class=\"table-responsive m-t\">\n        <form>\n            <table class=\"table table-bordered\">\n                <thead>\n                <tr>\n                    <th *ngFor=\"let field of ['description', 'quantity', 'value', 'vatCode_name', 'total']\">{{ _dataService.getFields('metadata')[field].label }}</th>\n                    <th>&nbsp;</th>\n                </tr>\n                </thead>\n                <tbody>\n                <ng-template ngFor let-obj [ngForOf]=\"_dataService.getProviderAttr('objects')\" let-objIndex=\"index\"><tr\n                          (dblclick)=\"editAction($event, objIndex)\">\n                        <td class=\"txt-align-l\"><small><span class=\"m-r-xs\">Original&nbsp;Doc:</span><span class=\"m-r-xs\"\n                            [innerHTML]=\"obj['originalDocumentType_name']\"></span><span class=\"m-r-xs\"\n                            [innerHTML]=\"obj['originalDocument_code']\"></span></small><div><strong><span\n                            [innerHTML]=\"obj['service_icon']\" class=\"m-r-xs\"></span><span\n                            [innerHTML]=\"obj['service_name']\"></span></strong></div><small><span\n                            [innerHTML]=\"obj['description']\"></span></small></td>\n                        <td *ngFor=\"let field of ['quantity', 'totalUnit', 'vatCode_name', 'total']\"\n                            [ngClass]=\"getColAlign(field)\"\n                            [innerHTML]=\"obj[field]\"></td>\n                        <td>\n                            <span *ngIf=\"obj['_isNew']\" class=\"badge badge-info\">New</span>\n                            <span *ngIf=\"obj['_isEdited']\" class=\"badge badge-info\">Edited</span>\n                            <input *ngIf=\"_actionsService.getActionAttr('checkAll', 'isEnabled')\"\n                                   class=\"pull-right action js_checkAll\"\n                                   type=\"checkbox\"\n                                   name=\"index[]\"\n                                   value=\"{{objIndex}}\"\n                                   [ngModel]=\"checkAll\"/>\n                            <div class=\"pull-right actions no-user-select\" (click)=\"triggerAction($event)\">\n                                <ng-template ngFor let-action [ngForOf]=\"_actionsService.getDetailActions()\">\n                                    <a *ngIf=\"_actionsService.getActionAttr(action, 'isEnabled')\"\n                                       [ngClass]=\"[_actionsService.getActionAttr(action, 'icon')]\"\n                                       class=\"fa\"\n                                       [attr.data-action]=\"action\"\n                                       [attr.data-value]=\"objIndex\"></a>\n                                </ng-template>\n                            </div>\n                        </td>\n                    </tr></ng-template>\n                </tbody>\n            </table>\n        </form>\n    </div>\n    </ng-template><p\n        class=\"text-center\"\n        *ngIf=\"!(_dataService.getProviderAttr('objects') && _dataService.getProviderAttr('objects')[0])\">No results.</p>\n</div>\n        <div [hidden]=\"!(_isExpanded)\"\n         class=\"ibox-footer\"\n         *ngIf=\"_dataService.countObjects() > 0\"><js_searchPagination></js_searchPagination></div>\n\n</div>\n\n<js_legend></js_legend>"

/***/ }),

/***/ "../../../../../src/Bck/AccountingBundle/Resources/public/supplier-document-settlement/add/ts/src/form-popup.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FormPopupComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__AppBundle_Resources_public_form_ts_form_service__ = __webpack_require__("../../../../../src/AppBundle/Resources/public/form/ts/form.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__AppBundle_Resources_public_ts_helper__ = __webpack_require__("../../../../../src/AppBundle/Resources/public/ts/helper.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__AppBundle_Resources_public_wizard_ts_src_wizard_manager_service__ = __webpack_require__("../../../../../src/AppBundle/Resources/public/wizard/ts/src/wizard-manager.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__base_document_settlement_add_ts_form_popup_ext_component__ = __webpack_require__("../../../../../src/Bck/AccountingBundle/Resources/public/base-document-settlement/add/ts/form-popup.ext-component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__AppBundle_Resources_public_data_box_ts_src_data_box_extension_module__ = __webpack_require__("../../../../../src/AppBundle/Resources/public/data-box/ts/src/data-box.extension-module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__step2_form_popup_ext_module__ = __webpack_require__("../../../../../src/Bck/AccountingBundle/Resources/public/supplier-document-settlement/add/ts/src/step2-form-popup.ext-module.ts");
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
// Booking Parent, used when the document is aggregated to one booking
// (this code is putted here to avoid to repeat this module in the booking bundle, so we can reuse the same modules)
var bookingContext = ((__WEBPACK_IMPORTED_MODULE_2__AppBundle_Resources_public_ts_helper__["a" /* Helper */].getAppVar('conf')['localData']['data']['bookingContext'])
    ? __WEBPACK_IMPORTED_MODULE_2__AppBundle_Resources_public_ts_helper__["a" /* Helper */].getAppVar('conf')['localData']['data']['bookingContext'] :
    null), bookingId = (bookingContext ? __WEBPACK_IMPORTED_MODULE_2__AppBundle_Resources_public_ts_helper__["a" /* Helper */].getAppVar('conf')['object']['id'] : null);
// SETTLEMENT DOCUMENT CHOICES

// EDIT FORM

/* /Import dependencies */
var FormPopupComponent = (function (_super) {
    __extends(FormPopupComponent, _super);
    function FormPopupComponent(elementRef, renderer, provider, wizardManagerService, formService, helperService, dataService, parentFormService, // To get parent object
        injector) {
        var _this = 
        // Call parent
        _super.call(this) || this;
        _super.prototype.initBaseDocumentSettlementAddFormPopupExtComponent.call(_this, elementRef, renderer, provider, wizardManagerService, formService, helperService, dataService, parentFormService, injector);
        return _this;
    }
    /**
     * Get navigation data (needed data to lazy load container)
     * @param index (index to load)
     * @returns NavData
     */
    FormPopupComponent.prototype.getNavData = function (index) {
        switch (index) {
            case 0:
                return {
                    module: __WEBPACK_IMPORTED_MODULE_5__AppBundle_Resources_public_data_box_ts_src_data_box_extension_module__["a" /* DataBoxExtensionModule */],
                    component: 'DataBoxComponent',
                    urlProvider: (this._helperService.getAppVar('route') + 'bck/accounting/supplier-document/data-for-settlement/' + this._parentFormService.getObject()['id'] + (bookingContext ? ('/' + bookingId) : ''))
                };
            case 1:
                return {
                    module: __WEBPACK_IMPORTED_MODULE_6__step2_form_popup_ext_module__["a" /* Step2FormPopupExtModule */],
                    component: 'Step2FormPopupComponent'
                };
        }
        return null;
    };
    FormPopupComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: '.js_addFormPopup',
            template: __webpack_require__("../../../../../src/Bck/AccountingBundle/Resources/public/supplier-document-settlement/add/ts/templates/form-popup.component.html")
        }),
        __param(2, Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["y" /* Inject */])('Provider')),
        __param(5, Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["y" /* Inject */])('HelperService')),
        __param(6, Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["y" /* Inject */])('DataService')),
        __param(7, Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["y" /* Inject */])('ParentFormService')),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_core__["t" /* ElementRef */],
            __WEBPACK_IMPORTED_MODULE_0__angular_core__["U" /* Renderer */], Object, __WEBPACK_IMPORTED_MODULE_3__AppBundle_Resources_public_wizard_ts_src_wizard_manager_service__["a" /* WizardManagerService */],
            __WEBPACK_IMPORTED_MODULE_1__AppBundle_Resources_public_form_ts_form_service__["a" /* FormService */], Object, Object, Object, __WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Injector */]])
    ], FormPopupComponent);
    return FormPopupComponent;
}(__WEBPACK_IMPORTED_MODULE_4__base_document_settlement_add_ts_form_popup_ext_component__["a" /* FormPopupExtComponent */]));



/***/ }),

/***/ "../../../../../src/Bck/AccountingBundle/Resources/public/supplier-document-settlement/add/ts/src/form-popup.ext-module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FormPopupExtModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("../../../common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ng_bootstrap_ng_bootstrap__ = __webpack_require__("../../../../@ng-bootstrap/ng-bootstrap/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__AppBundle_Resources_public_form_ts_field_types_field_types_extension_module__ = __webpack_require__("../../../../../src/AppBundle/Resources/public/form/ts/field-types/field-types.extension-module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__form_popup_component__ = __webpack_require__("../../../../../src/Bck/AccountingBundle/Resources/public/supplier-document-settlement/add/ts/src/form-popup.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






var FormPopupExtModule = (function () {
    function FormPopupExtModule() {
    }
    FormPopupExtModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["H" /* NgModule */])({
            imports: [__WEBPACK_IMPORTED_MODULE_1__angular_common__["a" /* CommonModule */], __WEBPACK_IMPORTED_MODULE_2__angular_forms__["b" /* FormsModule */], __WEBPACK_IMPORTED_MODULE_2__angular_forms__["e" /* ReactiveFormsModule */], __WEBPACK_IMPORTED_MODULE_3__ng_bootstrap_ng_bootstrap__["a" /* NgbModule */], __WEBPACK_IMPORTED_MODULE_4__AppBundle_Resources_public_form_ts_field_types_field_types_extension_module__["a" /* FieldTypesExtensionModule */]],
            declarations: [
                __WEBPACK_IMPORTED_MODULE_5__form_popup_component__["a" /* FormPopupComponent */]
            ],
            exports: [__WEBPACK_IMPORTED_MODULE_5__form_popup_component__["a" /* FormPopupComponent */]]
        })
    ], FormPopupExtModule);
    return FormPopupExtModule;
}());



/***/ }),

/***/ "../../../../../src/Bck/AccountingBundle/Resources/public/supplier-document-settlement/add/ts/src/step2-form-popup.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Step2FormPopupComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__edit_ts_src_form_popup_component__ = __webpack_require__("../../../../../src/Bck/AccountingBundle/Resources/public/supplier-document-settlement/edit/ts/src/form-popup.component.ts");
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



/**
 * This class is necessary to redefine the template url for add step 2
 */
var Step2FormPopupComponent = (function (_super) {
    __extends(Step2FormPopupComponent, _super);
    function Step2FormPopupComponent(elementRef, renderer, provider, formService, dataService) {
        return _super.call(this, elementRef, renderer, provider, formService, dataService) || this;
    }
    Step2FormPopupComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: '#js_supplierDocumentReceiptSettlementFormPopup',
            template: __webpack_require__("../../../../../src/Bck/AccountingBundle/Resources/public/supplier-document-settlement/add/ts/templates/step2-form-popup.component.html")
        }),
        __param(2, Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["y" /* Inject */])('Provider')),
        __param(4, Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["y" /* Inject */])('DataService')),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_core__["t" /* ElementRef */],
            __WEBPACK_IMPORTED_MODULE_0__angular_core__["U" /* Renderer */], Object, __WEBPACK_IMPORTED_MODULE_2__AppBundle_Resources_public_form_ts_form_service__["a" /* FormService */], Object])
    ], Step2FormPopupComponent);
    return Step2FormPopupComponent;
}(__WEBPACK_IMPORTED_MODULE_1__edit_ts_src_form_popup_component__["a" /* FormPopupComponent */]));



/***/ }),

/***/ "../../../../../src/Bck/AccountingBundle/Resources/public/supplier-document-settlement/add/ts/src/step2-form-popup.ext-module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Step2FormPopupExtModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("../../../common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ng_bootstrap_ng_bootstrap__ = __webpack_require__("../../../../@ng-bootstrap/ng-bootstrap/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__AppBundle_Resources_public_form_ts_field_types_field_types_extension_module__ = __webpack_require__("../../../../../src/AppBundle/Resources/public/form/ts/field-types/field-types.extension-module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__step2_form_popup_component__ = __webpack_require__("../../../../../src/Bck/AccountingBundle/Resources/public/supplier-document-settlement/add/ts/src/step2-form-popup.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






var Step2FormPopupExtModule = (function () {
    function Step2FormPopupExtModule() {
    }
    Step2FormPopupExtModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["H" /* NgModule */])({
            imports: [__WEBPACK_IMPORTED_MODULE_1__angular_common__["a" /* CommonModule */], __WEBPACK_IMPORTED_MODULE_2__angular_forms__["b" /* FormsModule */], __WEBPACK_IMPORTED_MODULE_2__angular_forms__["e" /* ReactiveFormsModule */], __WEBPACK_IMPORTED_MODULE_3__ng_bootstrap_ng_bootstrap__["a" /* NgbModule */], __WEBPACK_IMPORTED_MODULE_4__AppBundle_Resources_public_form_ts_field_types_field_types_extension_module__["a" /* FieldTypesExtensionModule */]],
            declarations: [
                __WEBPACK_IMPORTED_MODULE_5__step2_form_popup_component__["a" /* Step2FormPopupComponent */]
            ],
            exports: [__WEBPACK_IMPORTED_MODULE_5__step2_form_popup_component__["a" /* Step2FormPopupComponent */]]
        })
    ], Step2FormPopupExtModule);
    return Step2FormPopupExtModule;
}());



/***/ }),

/***/ "../../../../../src/Bck/AccountingBundle/Resources/public/supplier-document-settlement/add/ts/templates/form-popup.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"modal-header\">\n    <div class=\"row align-items-center\">\n        <h3 class=\"col-auto mr-auto modal-title\">Form&nbsp;{{getProviderAttr('label')}}<small>&nbsp;({{(_formService && _formService.getObject() && _formService.getObject().id) ? 'edit' : 'add'}})</small></h3>\n        <div class=\"col-auto text-right actions\"><a\n                class=\"-round fa fa-times\"\n                (click)=\"closeAction($event)\"></a></div>\n    </div>\n</div>\n<div class=\"modal-body\">\n    <div class=\"row\">\n        <div class=\"col-12\">    \n                        <ul class=\"row mb-3 no-gutters wizard-nav\">\n                                    <li class=\"col-auto wizard-step\"\n                        [class.step-active]=\"0 == _wizardManagerService.getIndex()\">\n                        <span class=\"step-number\">1</span>\n                        <span class=\"step-text\">Documents</span>\n                    </li>\n                                    <li class=\"col-auto wizard-step\"\n                        [class.step-active]=\"1 == _wizardManagerService.getIndex()\">\n                        <span class=\"step-number\">2</span>\n                        <span class=\"step-text\">Preview</span>\n                    </li>\n                            </ul>\n\n            \n                <section [hidden]=\"_wizardManagerService.getIndex() != 0\"\n         class=\"js_lazyLoadContainer_0\">\n    <ng-template #js_lazyLoadContainer></ng-template>\n</section>\n    <section [hidden]=\"_wizardManagerService.getIndex() != 1\"\n         class=\"js_lazyLoadContainer_1\">\n    <ng-template #js_lazyLoadContainer></ng-template>\n</section>\n            \n            \n    </div>\n    </div>\n</div>\n<div class=\"modal-footer hide-on-empty\">\n        <div class=\"row justify-content-center\">\n    <div class=\"col-auto\">\n            <button type=\"button\" class=\"btn-light btn\" (click)=\"_wizardManagerService.cancelAction($event)\">Cancel</button>\n                <button type=\"button\" class=\"btn-primary btn\" (click)=\"_wizardManagerService.prevAction($event)\"\n                    *ngIf=\"0 < _wizardManagerService.getIndex()\">Prev</button>\n            <button type=\"button\" class=\"btn-primary btn\" (click)=\"_wizardManagerService.nextAction($event)\"\n                    *ngIf=\"1 > _wizardManagerService.getIndex()\">Next</button>\n            <button type=\"button\" class=\"btn-primary btn\" (click)=\"_wizardManagerService.finishAction($event)\"\n                    *ngIf=\"1 == _wizardManagerService.getIndex()\">Finish</button>\n        \n    </div>\n</div></div>"

/***/ }),

/***/ "../../../../../src/Bck/AccountingBundle/Resources/public/supplier-document-settlement/add/ts/templates/step2-form-popup.component.html":
/***/ (function(module, exports) {

module.exports = "\n\n\n    <form name=\"form\" method=\"post\" (ngSubmit)=\"saveAction($event)\" [formGroup]=\"_formService.getForm()\" class=\"form-horizontal\">\n\n    \n\n\n    <form name=\"form\" method=\"post\" (ngSubmit)=\"saveAction($event)\" [formGroup]=\"_formService.getForm()\" class=\"form-horizontal\">\n\n    \n            \n\n                <div class=\"row form-group\" *ngIf=\"_formService.getObject().code\">\n\n                        <label class=\"col-sm-2 control-label\" for=\"form_code\">Code</label>\n    \n            <div class=\"col-sm-10\">\n                                        <p id=\"form_code\"\n               class=\"form-control-static\"\n               [innerHTML]=\"_formService.getViewObject().code\"></p>\n                        <label class=\"error\" *ngFor=\"let error of _formService.getErrors().code\">{{error}}</label>\n            </div>\n        </div>\n                \n\n                <div class=\"row form-group\" >\n\n                        <label class=\"col-sm-2 control-label required\" for=\"form_value\">Value</label>\n    \n            <div class=\"col-sm-10\">\n                                            <input type=\"text\" id=\"form_value\" name=\"form[value]\" required=\"required\" [(ngModel)]=\"_formService.getObject().value\" formControlName=\"value\" [class.error]=\"_formService.getErrors().value &amp;&amp; _formService.getErrors().value.length &gt; 0\" class=\"form-control\" />\n                <label class=\"error\" *ngFor=\"let error of _formService.getErrors().value\">{{error}}</label>\n            </div>\n        </div>\n                \n\n                <div class=\"row form-group\" >\n\n                        <label class=\"col-sm-2 control-label\" [innerHTML]=\"getLang('Enabled')\"></label>\n    \n            <div class=\"col-sm-10\">\n                                            <div class=\"checkbox\">                                        <label for=\"form_isEnabled\"><input type=\"checkbox\" id=\"form_isEnabled\" name=\"form[isEnabled]\" [(ngModel)]=\"_formService.getObject().isEnabled\" formControlName=\"isEnabled\" [class.error]=\"_formService.getErrors().isEnabled &amp;&amp; _formService.getErrors().isEnabled.length &gt; 0\" value=\"1\" checked=\"checked\" /> Is enabled</label>\n    </div>\n                <label class=\"error\" *ngFor=\"let error of _formService.getErrors().isEnabled\">{{error}}</label>\n            </div>\n        </div>\n        \n\n    \n\n    <input type=\"hidden\" id=\"form__token\" name=\"form[_token]\" value=\"cEuu0f4SXmjfjYDFXIJO4B5Hkp8dRrRxqs-vEEkwqNE\" /></form>\n\n\n\n    \n\n    </form>\n\n"

/***/ }),

/***/ "../../../../../src/Bck/AccountingBundle/Resources/public/supplier-document-settlement/edit/ts/src/form-popup.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FormPopupComponent; });
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



var FormPopupComponent = (function (_super) {
    __extends(FormPopupComponent, _super);
    function FormPopupComponent(elementRef, renderer, provider, formService, dataService) {
        var _this = _super.call(this) || this;
        _super.prototype.initFormPopupExtensionComponent.call(_this, elementRef, renderer, provider, formService, dataService);
        return _this;
    }
    /**
     * Lifecycle callback
     */
    FormPopupComponent.prototype.ngOnDestroy = function () {
        // If is a '_isSessionStorage' object, the object is ignored, so we need to update manually all objects
        // (occurs in add mode)
        if (this._dataService.getObject()['_isSessionStorage']
            && this._formService.getObject()['id']) {
            this._dataService.refresh();
        }
    };
    FormPopupComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: '#js_supplierDocumentReceiptSettlementFormPopup',
            template: __webpack_require__("../../../../../src/Bck/AccountingBundle/Resources/public/supplier-document-settlement/edit/ts/templates/form-popup.component.html")
        }),
        __param(2, Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["y" /* Inject */])('Provider')),
        __param(4, Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["y" /* Inject */])('DataService')),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_core__["t" /* ElementRef */],
            __WEBPACK_IMPORTED_MODULE_0__angular_core__["U" /* Renderer */], Object, __WEBPACK_IMPORTED_MODULE_2__AppBundle_Resources_public_form_ts_form_service__["a" /* FormService */], Object])
    ], FormPopupComponent);
    return FormPopupComponent;
}(__WEBPACK_IMPORTED_MODULE_1__AppBundle_Resources_public_form_ts_form_popup_extension_component__["a" /* FormPopupExtensionComponent */]));



/***/ }),

/***/ "../../../../../src/Bck/AccountingBundle/Resources/public/supplier-document-settlement/edit/ts/src/form-popup.ext-module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FormPopupExtModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("../../../common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ng_bootstrap_ng_bootstrap__ = __webpack_require__("../../../../@ng-bootstrap/ng-bootstrap/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__AppBundle_Resources_public_form_ts_field_types_field_types_extension_module__ = __webpack_require__("../../../../../src/AppBundle/Resources/public/form/ts/field-types/field-types.extension-module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__form_popup_component__ = __webpack_require__("../../../../../src/Bck/AccountingBundle/Resources/public/supplier-document-settlement/edit/ts/src/form-popup.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






var FormPopupExtModule = (function () {
    function FormPopupExtModule() {
    }
    FormPopupExtModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["H" /* NgModule */])({
            imports: [__WEBPACK_IMPORTED_MODULE_1__angular_common__["a" /* CommonModule */], __WEBPACK_IMPORTED_MODULE_2__angular_forms__["b" /* FormsModule */], __WEBPACK_IMPORTED_MODULE_2__angular_forms__["e" /* ReactiveFormsModule */], __WEBPACK_IMPORTED_MODULE_3__ng_bootstrap_ng_bootstrap__["a" /* NgbModule */], __WEBPACK_IMPORTED_MODULE_4__AppBundle_Resources_public_form_ts_field_types_field_types_extension_module__["a" /* FieldTypesExtensionModule */]],
            declarations: [
                __WEBPACK_IMPORTED_MODULE_5__form_popup_component__["a" /* FormPopupComponent */]
            ],
            exports: [__WEBPACK_IMPORTED_MODULE_5__form_popup_component__["a" /* FormPopupComponent */]]
        })
    ], FormPopupExtModule);
    return FormPopupExtModule;
}());



/***/ }),

/***/ "../../../../../src/Bck/AccountingBundle/Resources/public/supplier-document-settlement/edit/ts/templates/form-popup.component.html":
/***/ (function(module, exports) {

module.exports = "    \n    <form name=\"form\" method=\"post\" (ngSubmit)=\"saveAction($event)\" [formGroup]=\"_formService.getForm()\" class=\"form-horizontal\">\n<div class=\"modal-header\">\n    <div class=\"row align-items-center\">\n        <h3 class=\"col-auto mr-auto modal-title\">Form&nbsp;{{getProviderAttr('label')}}<small>&nbsp;({{(_formService && _formService.getObject() && _formService.getObject().id) ? 'edit' : 'add'}})</small></h3>\n        <div class=\"col-auto text-right actions\"><a\n                class=\"-round fa fa-times\"\n                (click)=\"closeAction($event)\"></a></div>\n    </div>\n</div>\n<div class=\"modal-body\">\n    <div class=\"row\">\n        <div class=\"col-12\">    \n            \n\n                <div class=\"row form-group\" *ngIf=\"_formService.getObject().code\">\n\n                        <label class=\"col-sm-2 control-label\" for=\"form_code\">Code</label>\n    \n            <div class=\"col-sm-10\">\n                                        <p id=\"form_code\"\n               class=\"form-control-static\"\n               [innerHTML]=\"_formService.getViewObject().code\"></p>\n                        <label class=\"error\" *ngFor=\"let error of _formService.getErrors().code\">{{error}}</label>\n            </div>\n        </div>\n                \n\n                <div class=\"row form-group\" >\n\n                        <label class=\"col-sm-2 control-label required\" for=\"form_value\">Value</label>\n    \n            <div class=\"col-sm-10\">\n                                            <input type=\"text\" id=\"form_value\" name=\"form[value]\" required=\"required\" [(ngModel)]=\"_formService.getObject().value\" formControlName=\"value\" [class.error]=\"_formService.getErrors().value &amp;&amp; _formService.getErrors().value.length &gt; 0\" class=\"form-control\" />\n                <label class=\"error\" *ngFor=\"let error of _formService.getErrors().value\">{{error}}</label>\n            </div>\n        </div>\n                \n\n                <div class=\"row form-group\" >\n\n                        <label class=\"col-sm-2 control-label\" [innerHTML]=\"getLang('Enabled')\"></label>\n    \n            <div class=\"col-sm-10\">\n                                            <div class=\"checkbox\">                                        <label for=\"form_isEnabled\"><input type=\"checkbox\" id=\"form_isEnabled\" name=\"form[isEnabled]\" [(ngModel)]=\"_formService.getObject().isEnabled\" formControlName=\"isEnabled\" [class.error]=\"_formService.getErrors().isEnabled &amp;&amp; _formService.getErrors().isEnabled.length &gt; 0\" value=\"1\" checked=\"checked\" /> Is enabled</label>\n    </div>\n                <label class=\"error\" *ngFor=\"let error of _formService.getErrors().isEnabled\">{{error}}</label>\n            </div>\n        </div>\n        </div>\n    </div>\n</div>\n<div class=\"modal-footer hide-on-empty\">\n        \n                    <div class=\"row\">\n            <div class=\"col-auto ml-auto\">\n                                            <button                                     class=\"btn btn-light\"\n                                    (click)=\"cancelAction($event)\"\n                                        id=\"form_cancel\"\n            name=\"form[cancel]\"\n            type=\"button\"><i class=\"fa fa-times\"></i>&nbsp;Cancel</button>\n                                                <button                                     class=\"btn btn-light\"\n                                    (click)=\"resetAction($event)\"\n                                        id=\"form_reset\"\n            name=\"form[reset]\"\n            type=\"button\"><i class=\"fa fa-ban\"></i>&nbsp;Reset</button>\n                                                <button                                     class=\"btn btn-primary\"\n                                    (click)=\"saveAction($event)\"\n                                        id=\"form_save\"\n            name=\"form[save]\"\n            type=\"button\"><i class=\"fa fa-check\"></i>&nbsp;Save</button>\n                                                <button                                     class=\"btn btn-primary\"\n                                    (click)=\"saveAndCloseAction($event)\"\n                                        id=\"form_saveAndClose\"\n            name=\"form[saveAndClose]\"\n            type=\"button\"><i class=\"fa fa-times\"></i>&nbsp;Save and Close</button>\n                                </div>\n        </div>\n    </div>    \n    <input type=\"hidden\" id=\"form__token\" name=\"form[_token]\" value=\"cEuu0f4SXmjfjYDFXIJO4B5Hkp8dRrRxqs-vEEkwqNE\" /></form>\n"

/***/ }),

/***/ "../../../../../src/Bck/AccountingBundle/Resources/public/supplier-document-settlement/index/ts/src/main.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MainComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__AppBundle_Resources_public_ts_actions_actions_service__ = __webpack_require__("../../../../../src/AppBundle/Resources/public/ts/actions/actions.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__AppBundle_Resources_public_data_box_ts_src_data_box_extension_component__ = __webpack_require__("../../../../../src/AppBundle/Resources/public/data-box/ts/src/data-box.extension-component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__AppBundle_Resources_public_modal_ts_modal_service__ = __webpack_require__("../../../../../src/AppBundle/Resources/public/modal/ts/modal.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__AppBundle_Resources_public_tasks_loader_manager_ts_tasks_loader_manager_service__ = __webpack_require__("../../../../../src/AppBundle/Resources/public/tasks-loader-manager/ts/tasks-loader-manager.service.ts");
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
var MainComponent = (function (_super) {
    __extends(MainComponent, _super);
    function MainComponent(viewContainerRef, renderer, dataBoxProvider, dataService, tasksLoaderManagerService, helperService, actionsService, modalService, popups, injector, _parentDataService // Used in view
    ) {
        var _this = 
        // Call parent
        _super.call(this) || this;
        _this._parentDataService = _parentDataService; // Used in view
        _super.prototype.initDataBoxExtensionComponent.call(_this, viewContainerRef, renderer, dataBoxProvider, dataService, tasksLoaderManagerService, helperService, actionsService, modalService, popups, injector);
        return _this;
    }
    MainComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: '.js_supplierDocumentReceiptSettlement',
            template: __webpack_require__("../../../../../src/Bck/AccountingBundle/Resources/public/supplier-document-settlement/index/ts/templates/main.component.html")
        }),
        __param(2, Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["y" /* Inject */])('Provider')),
        __param(3, Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["y" /* Inject */])('DataService')),
        __param(5, Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["y" /* Inject */])('HelperService')),
        __param(8, Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["y" /* Inject */])('Popups')),
        __param(10, Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["y" /* Inject */])('ParentDataService')),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_core__["_9" /* ViewContainerRef */],
            __WEBPACK_IMPORTED_MODULE_0__angular_core__["U" /* Renderer */], Object, Object, __WEBPACK_IMPORTED_MODULE_4__AppBundle_Resources_public_tasks_loader_manager_ts_tasks_loader_manager_service__["a" /* TasksLoaderManagerService */], Object, __WEBPACK_IMPORTED_MODULE_1__AppBundle_Resources_public_ts_actions_actions_service__["a" /* ActionsService */],
            __WEBPACK_IMPORTED_MODULE_3__AppBundle_Resources_public_modal_ts_modal_service__["b" /* ModalService */], Object, __WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Injector */], Object])
    ], MainComponent);
    return MainComponent;
}(__WEBPACK_IMPORTED_MODULE_2__AppBundle_Resources_public_data_box_ts_src_data_box_extension_component__["a" /* DataBoxExtensionComponent */]));



/***/ }),

/***/ "../../../../../src/Bck/AccountingBundle/Resources/public/supplier-document-settlement/index/ts/src/main.ext-module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MainExtModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("../../../common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__AppBundle_Resources_public_ts_search_search_module__ = __webpack_require__("../../../../../src/AppBundle/Resources/public/ts/search/search.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__AppBundle_Resources_public_ts_expander_expander_module__ = __webpack_require__("../../../../../src/AppBundle/Resources/public/ts/expander/expander.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__AppBundle_Resources_public_ts_search_search_pagination_module__ = __webpack_require__("../../../../../src/AppBundle/Resources/public/ts/search/search-pagination.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__main_component__ = __webpack_require__("../../../../../src/Bck/AccountingBundle/Resources/public/supplier-document-settlement/index/ts/src/main.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


// This module doesn't use "ReactiveFormsModule", but it needs to import this class
// to provide "formBuilder" when inject dependencies in child modules (like form)





var MainExtModule = (function () {
    function MainExtModule() {
    }
    MainExtModule = __decorate([
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
                __WEBPACK_IMPORTED_MODULE_6__main_component__["a" /* MainComponent */]
            ],
            exports: [__WEBPACK_IMPORTED_MODULE_6__main_component__["a" /* MainComponent */]]
        })
    ], MainExtModule);
    return MainExtModule;
}());



/***/ }),

/***/ "../../../../../src/Bck/AccountingBundle/Resources/public/supplier-document-settlement/index/ts/templates/main.component.html":
/***/ (function(module, exports) {

module.exports = "\n\n<div class=\"ibox\" >\n                        <div class=\"ibox-title\" *ngIf=\"!getProviderExtraDataAttr('hasMergeHeader')\">\n                <h5>\n                    <ng-template [ngIf]=\"getProviderAttr('controls')['expander']['isEnabled']\"><js_expander\n                        [isExpanded]=\"_isExpanded || null\"\n                        [label]=\"getLang(getProviderAttr('label'))\"\n                        [labelCount]=\"getProviderAttr('labelCount')\"\n                        [labelIcon]=\"getProviderAttr('labelIcon')\"\n                        (onChange)=\"expanderAction($event)\"></js_expander></ng-template>\n                    <ng-template [ngIf]=\"!getProviderAttr('controls')['expander']['isEnabled']\">\n                        <span [innerHTML]=\"getProviderAttr('label')\"></span>\n                    </ng-template>\n                </h5>\n                <div *ngIf=\"_isExpanded\"\n                     class=\"txt-align-r hide-on-empty\">    <div class=\"row align-items-center\">\n        <div class=\"col ml-auto text-right actions no-user-select\">\n            <ng-template [ngIf]=\"_actionsService.getActionAttr('search', 'isEnabled')\"><js_search class=\"search\"></js_search></ng-template>\n            <div (click)=\"triggerAction($event)\">\n                <ng-template ngFor let-action [ngForOf]=\"_actionsService.getHeadActions()\">\n                    <a *ngIf=\"_actionsService.getActionAttr(action, 'isEnabled')\"\n                       [ngClass]=\"[_actionsService.getActionAttr(action, 'icon')]\"\n                       class=\"-round fa\"\n                       [attr.data-action]=\"action\"></a>\n                </ng-template>\n            </div>\n        </div>\n    </div>\n</div>\n            </div>\n            \n    <div [hidden]=\"!(_isExpanded)\" class=\"ibox-content hide-on-empty\">    <ng-template [ngIf]=\"(_dataService.getProviderAttr('objects') && _dataService.getProviderAttr('objects')[0])\">\n                \n    <div class=\"table-responsive\">\n    <form>    <table class=\"data-table table table-hover dataTables-example table-bordered\">\n        <thead>\n        <tr>\n            <th *ngFor=\"let searchField of _dataService.getSearch('fields')\">{{ getLang(_dataService.getFields('metadata')[searchField].label) }}</th>\n            <th>&nbsp;</th>\n        </tr>\n        </thead>        <tbody>\n        <ng-template ngFor let-obj [ngForOf]=\"_dataService.getProviderAttr('objects')\" let-objIndex=\"index\">\n        <tr (dblclick)=\"editAction($event, objIndex)\"            [ngClass]=\"getLegendClasses(obj, 'tr')\">                    <td *ngFor=\"let searchField of _dataService.getSearch('fields')\"\n    [ngClass]=\"getColAlign(searchField)\"\n    [innerHTML]=\"obj[searchField]\"></td>                        <td>\n                <span *ngIf=\"obj['_isNew']\" class=\"badge badge-info\">New</span>\n                <span *ngIf=\"obj['_isEdited']\" class=\"badge badge-info\">Edited</span>\n                <input *ngIf=\"_actionsService.getActionAttr('radioChoice', 'isEnabled')\"\n                       class=\"pull-right action\"\n                       type=\"radio\"\n                       name=\"index[]\"\n                       value=\"{{objIndex}}\"/>\n                <input *ngIf=\"_actionsService.getActionAttr('checkAll', 'isEnabled')\"\n                       class=\"pull-right action js_checkAll\"\n                       type=\"checkbox\"\n                       name=\"index[]\"\n                       value=\"{{objIndex}}\"\n                       [ngModel]=\"checkAll\"/>\n                <div class=\"pull-right actions no-user-select text-secondary\" (click)=\"triggerAction($event)\">\n                    <ng-template ngFor let-action [ngForOf]=\"_actionsService.getDetailActions()\">\n                        <a *ngIf=\"_actionsService.getActionAttr(action, 'isEnabled')\"\n                           [ngClass]=\"[_actionsService.getActionAttr(action, 'icon') + getActionsLegendClasses(obj, action)]\"\n                           class=\"fa\"\n                           [attr.data-action]=\"action\"\n                           [attr.data-value]=\"objIndex\"></a>\n                    </ng-template>\n                </div>\n            </td>        </tr>\n        </ng-template>\n        </tbody>\n    </table>\n    </form></div>    </ng-template><p\n        class=\"text-center\"\n        *ngIf=\"!(_dataService.getProviderAttr('objects') && _dataService.getProviderAttr('objects')[0])\">No results.</p>\n</div>\n        <div [hidden]=\"!(_isExpanded)\"\n         class=\"ibox-footer\"\n         *ngIf=\"_dataService.countObjects() > 0\"><js_searchPagination></js_searchPagination></div>\n\n</div>\n\n<js_legend></js_legend>"

/***/ }),

/***/ "../../../../../src/Bck/AccountingBundle/Resources/public/supplier-document/add/ts/src/form-popup.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FormPopupComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__AppBundle_Resources_public_form_ts_form_service__ = __webpack_require__("../../../../../src/AppBundle/Resources/public/form/ts/form.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__AppBundle_Resources_public_ts_helper__ = __webpack_require__("../../../../../src/AppBundle/Resources/public/ts/helper.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__AppBundle_Resources_public_wizard_ts_src_wizard_manager_service__ = __webpack_require__("../../../../../src/AppBundle/Resources/public/wizard/ts/src/wizard-manager.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__base_document_add_ts_form_popup_ext_component__ = __webpack_require__("../../../../../src/Bck/AccountingBundle/Resources/public/base-document/add/ts/form-popup.ext-component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__AppBundle_Resources_public_tree_view_default_ts_src_tree_view_ext_module__ = __webpack_require__("../../../../../src/AppBundle/Resources/public/tree-view/default/ts/src/tree-view.ext-module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__AppBundle_Resources_public_data_box_ts_src_data_box_extension_module__ = __webpack_require__("../../../../../src/AppBundle/Resources/public/data-box/ts/src/data-box.extension-module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__supplier_document_payment_edit_ts_src_form_ext_module__ = __webpack_require__("../../../../../src/Bck/AccountingBundle/Resources/public/supplier-document-payment/edit/ts/src/form.ext-module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__step3_invoice_ext_module__ = __webpack_require__("../../../../../src/Bck/AccountingBundle/Resources/public/supplier-document/add/ts/src/step3-invoice.ext-module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__step3_rectification_ext_module__ = __webpack_require__("../../../../../src/Bck/AccountingBundle/Resources/public/supplier-document/add/ts/src/step3-rectification.ext-module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__step3_receipt_ext_module__ = __webpack_require__("../../../../../src/Bck/AccountingBundle/Resources/public/supplier-document/add/ts/src/step3-receipt.ext-module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__step3_payment_ext_module__ = __webpack_require__("../../../../../src/Bck/AccountingBundle/Resources/public/supplier-document/add/ts/src/step3-payment.ext-module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__step3_settlement_ext_module__ = __webpack_require__("../../../../../src/Bck/AccountingBundle/Resources/public/supplier-document/add/ts/src/step3-settlement.ext-module.ts");
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
// Booking Parent, used when the document is aggregated to one booking
// (this code is putted here to avoid to repeat this module in the booking bundle, so we can reuse the same modules)
var bookingContext = ((__WEBPACK_IMPORTED_MODULE_2__AppBundle_Resources_public_ts_helper__["a" /* Helper */].getAppVar('conf')['localData']['data']['bookingContext'])
    ? __WEBPACK_IMPORTED_MODULE_2__AppBundle_Resources_public_ts_helper__["a" /* Helper */].getAppVar('conf')['localData']['data']['bookingContext'] :
    null), bookingId = (bookingContext ? __WEBPACK_IMPORTED_MODULE_2__AppBundle_Resources_public_ts_helper__["a" /* Helper */].getAppVar('conf')['object']['id'] : null);
// STEP 2
// INVOICE and RECTIFICATION

// RECEIPT and SETTLEMENT

// PAYMENT (RECEIPT WITHOUT SETTLEMENT)

// STEP 3
// INVOICE

// RECTIFICATION

// RECEIPT

// PAYMENT

// SETTLEMENT

/* /Import dependencies */
var FormPopupComponent = (function (_super) {
    __extends(FormPopupComponent, _super);
    function FormPopupComponent(elementRef, renderer, provider, wizardManagerService, formService, helperService, dataService, injector) {
        var _this = 
        // Call parent
        _super.call(this) || this;
        _super.prototype.initBaseDocumentAddFormPopupExtComponent.call(_this, elementRef, renderer, provider, wizardManagerService, formService, helperService, dataService, injector);
        return _this;
    }
    /**
     * Get navigation data (needed data to lazy load container)
     * @param index (index to load)
     * @returns NavData
     */
    FormPopupComponent.prototype.getNavData = function (index) {
        switch (index) {
            case 1:
                switch (this._formService.getObject()['documentType_type']) {
                    case 'RECTIFICATION':
                        return {
                            module: __WEBPACK_IMPORTED_MODULE_5__AppBundle_Resources_public_tree_view_default_ts_src_tree_view_ext_module__["a" /* TreeViewExtModule */],
                            component: 'TreeViewComponent',
                            urlProvider: (this._helperService.getAppVar('route') + 'bck/accounting/supplier-document-invoice-rectification/data-for-rectification/' + this._formService.getObject()['id'] + (bookingContext ? ('/' + bookingId) : ''))
                        };
                    case 'RECEIPT':
                    case 'SETTLEMENT':
                        return {
                            module: __WEBPACK_IMPORTED_MODULE_6__AppBundle_Resources_public_data_box_ts_src_data_box_extension_module__["a" /* DataBoxExtensionModule */],
                            component: 'DataBoxComponent',
                            urlProvider: (this._helperService.getAppVar('route') + 'bck/accounting/supplier-document/data-for-settlement/' + this._formService.getObject()['id'] + (bookingContext ? ('/' + bookingId) : ''))
                        };
                    case 'PAYMENT':
                        return {
                            module: __WEBPACK_IMPORTED_MODULE_7__supplier_document_payment_edit_ts_src_form_ext_module__["a" /* FormExtModule */],
                            component: 'FormComponent',
                            urlProvider: (this._helperService.getAppVar('route') + 'bck/accounting/supplier-document-receipt-payment/conf/' + this._formService.getObject()['id'])
                        };
                    default:// INVOICE
                        return {
                            module: __WEBPACK_IMPORTED_MODULE_5__AppBundle_Resources_public_tree_view_default_ts_src_tree_view_ext_module__["a" /* TreeViewExtModule */],
                            component: 'TreeViewComponent',
                            urlProvider: (this._helperService.getAppVar('route') + 'bck/booking/booking-service-price/data-for-invoice-supplier/' + this._formService.getObject()['supplierObj'] + (bookingContext ? ('/' + bookingId) : ''))
                        };
                }
            case 2:
                switch (this._formService.getObject()['documentType_type']) {
                    case 'RECTIFICATION':
                        return {
                            module: __WEBPACK_IMPORTED_MODULE_9__step3_rectification_ext_module__["a" /* Step3RectificationExtModule */],
                            component: 'Step3RectificationComponent',
                        };
                    case 'RECEIPT':
                        return {
                            module: __WEBPACK_IMPORTED_MODULE_10__step3_receipt_ext_module__["a" /* Step3ReceiptExtModule */],
                            component: 'Step3ReceiptComponent',
                        };
                    case 'PAYMENT':
                        return {
                            module: __WEBPACK_IMPORTED_MODULE_11__step3_payment_ext_module__["a" /* Step3PaymentExtModule */],
                            component: 'Step3PaymentComponent',
                        };
                    case 'SETTLEMENT':
                        return {
                            module: __WEBPACK_IMPORTED_MODULE_12__step3_settlement_ext_module__["a" /* Step3SettlementExtModule */],
                            component: 'Step3SettlementComponent',
                        };
                    default:// INVOICE
                        return {
                            module: __WEBPACK_IMPORTED_MODULE_8__step3_invoice_ext_module__["a" /* Step3InvoiceExtModule */],
                            component: 'Step3InvoiceComponent',
                        };
                }
        }
        return null;
    };
    FormPopupComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: '.js_addFormPopup',
            template: __webpack_require__("../../../../../src/Bck/AccountingBundle/Resources/public/supplier-document/add/ts/templates/form-popup.component.html")
        }),
        __param(2, Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["y" /* Inject */])('Provider')),
        __param(5, Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["y" /* Inject */])('HelperService')),
        __param(6, Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["y" /* Inject */])('DataService')),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_core__["t" /* ElementRef */],
            __WEBPACK_IMPORTED_MODULE_0__angular_core__["U" /* Renderer */], Object, __WEBPACK_IMPORTED_MODULE_3__AppBundle_Resources_public_wizard_ts_src_wizard_manager_service__["a" /* WizardManagerService */],
            __WEBPACK_IMPORTED_MODULE_1__AppBundle_Resources_public_form_ts_form_service__["a" /* FormService */], Object, Object, __WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Injector */]])
    ], FormPopupComponent);
    return FormPopupComponent;
}(__WEBPACK_IMPORTED_MODULE_4__base_document_add_ts_form_popup_ext_component__["a" /* FormPopupExtComponent */]));



/***/ }),

/***/ "../../../../../src/Bck/AccountingBundle/Resources/public/supplier-document/add/ts/src/form-popup.ext-module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FormPopupExtModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("../../../common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ng_bootstrap_ng_bootstrap__ = __webpack_require__("../../../../@ng-bootstrap/ng-bootstrap/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__AppBundle_Resources_public_form_ts_field_types_field_types_extension_module__ = __webpack_require__("../../../../../src/AppBundle/Resources/public/form/ts/field-types/field-types.extension-module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__form_popup_component__ = __webpack_require__("../../../../../src/Bck/AccountingBundle/Resources/public/supplier-document/add/ts/src/form-popup.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






var FormPopupExtModule = (function () {
    function FormPopupExtModule() {
    }
    FormPopupExtModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["H" /* NgModule */])({
            imports: [__WEBPACK_IMPORTED_MODULE_1__angular_common__["a" /* CommonModule */], __WEBPACK_IMPORTED_MODULE_2__angular_forms__["b" /* FormsModule */], __WEBPACK_IMPORTED_MODULE_2__angular_forms__["e" /* ReactiveFormsModule */], __WEBPACK_IMPORTED_MODULE_3__ng_bootstrap_ng_bootstrap__["a" /* NgbModule */], __WEBPACK_IMPORTED_MODULE_4__AppBundle_Resources_public_form_ts_field_types_field_types_extension_module__["a" /* FieldTypesExtensionModule */]],
            declarations: [
                __WEBPACK_IMPORTED_MODULE_5__form_popup_component__["a" /* FormPopupComponent */]
            ],
            exports: [__WEBPACK_IMPORTED_MODULE_5__form_popup_component__["a" /* FormPopupComponent */]]
        })
    ], FormPopupExtModule);
    return FormPopupExtModule;
}());



/***/ }),

/***/ "../../../../../src/Bck/AccountingBundle/Resources/public/supplier-document/add/ts/src/step3-invoice.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Step3InvoiceComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__AppBundle_Resources_public_form_ts_form_service__ = __webpack_require__("../../../../../src/AppBundle/Resources/public/form/ts/form.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__AppBundle_Resources_public_ts_dynamic_component_loader_service__ = __webpack_require__("../../../../../src/AppBundle/Resources/public/ts/dynamic-component-loader.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__AppBundle_Resources_public_ts_post_service__ = __webpack_require__("../../../../../src/AppBundle/Resources/public/ts/post.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ts_base_invoice_document_form_popup_ext_component__ = __webpack_require__("../../../../../src/Bck/AccountingBundle/Resources/public/supplier-document/ts/base-invoice-document-form-popup.ext-component.ts");
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





var Step3InvoiceComponent = (function (_super) {
    __extends(Step3InvoiceComponent, _super);
    function Step3InvoiceComponent(elementRef, renderer, provider, formService, dataService, injector, parentDataService, helperService, dynamicComponentLoaderService, postService) {
        var _this = _super.call(this) || this;
        _super.prototype.initBaseInvoiceDocumentFormPopupExtComponent.call(_this, elementRef, renderer, provider, formService, dataService, injector, parentDataService, helperService, dynamicComponentLoaderService, postService);
        return _this;
    }
    Step3InvoiceComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: '.js_addInvoiceDetailFormPopup',
            template: __webpack_require__("../../../../../src/Bck/AccountingBundle/Resources/public/supplier-document/add/ts/templates/step3-invoice.component.html")
        }),
        __param(2, Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["y" /* Inject */])('Provider')),
        __param(4, Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["y" /* Inject */])('DataService')),
        __param(6, Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["y" /* Inject */])('ParentDataService')),
        __param(7, Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["y" /* Inject */])('HelperService')),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_core__["t" /* ElementRef */],
            __WEBPACK_IMPORTED_MODULE_0__angular_core__["U" /* Renderer */], Object, __WEBPACK_IMPORTED_MODULE_1__AppBundle_Resources_public_form_ts_form_service__["a" /* FormService */], Object, __WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Injector */], Object, Object, __WEBPACK_IMPORTED_MODULE_2__AppBundle_Resources_public_ts_dynamic_component_loader_service__["a" /* DynamicComponentLoaderService */],
            __WEBPACK_IMPORTED_MODULE_3__AppBundle_Resources_public_ts_post_service__["a" /* PostService */]])
    ], Step3InvoiceComponent);
    return Step3InvoiceComponent;
}(__WEBPACK_IMPORTED_MODULE_4__ts_base_invoice_document_form_popup_ext_component__["a" /* BaseInvoiceDocumentFormPopupExtComponent */]));



/***/ }),

/***/ "../../../../../src/Bck/AccountingBundle/Resources/public/supplier-document/add/ts/src/step3-invoice.ext-module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Step3InvoiceExtModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("../../../common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ng_bootstrap_ng_bootstrap__ = __webpack_require__("../../../../@ng-bootstrap/ng-bootstrap/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__AppBundle_Resources_public_form_ts_field_types_field_types_extension_module__ = __webpack_require__("../../../../../src/AppBundle/Resources/public/form/ts/field-types/field-types.extension-module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__step3_invoice_component__ = __webpack_require__("../../../../../src/Bck/AccountingBundle/Resources/public/supplier-document/add/ts/src/step3-invoice.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






var Step3InvoiceExtModule = (function () {
    function Step3InvoiceExtModule() {
    }
    Step3InvoiceExtModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["H" /* NgModule */])({
            imports: [__WEBPACK_IMPORTED_MODULE_1__angular_common__["a" /* CommonModule */], __WEBPACK_IMPORTED_MODULE_2__angular_forms__["b" /* FormsModule */], __WEBPACK_IMPORTED_MODULE_2__angular_forms__["e" /* ReactiveFormsModule */], __WEBPACK_IMPORTED_MODULE_3__ng_bootstrap_ng_bootstrap__["a" /* NgbModule */], __WEBPACK_IMPORTED_MODULE_4__AppBundle_Resources_public_form_ts_field_types_field_types_extension_module__["a" /* FieldTypesExtensionModule */]],
            declarations: [
                __WEBPACK_IMPORTED_MODULE_5__step3_invoice_component__["a" /* Step3InvoiceComponent */]
            ],
            exports: [__WEBPACK_IMPORTED_MODULE_5__step3_invoice_component__["a" /* Step3InvoiceComponent */]]
        })
    ], Step3InvoiceExtModule);
    return Step3InvoiceExtModule;
}());



/***/ }),

/***/ "../../../../../src/Bck/AccountingBundle/Resources/public/supplier-document/add/ts/src/step3-payment.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Step3PaymentComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__AppBundle_Resources_public_form_ts_form_service__ = __webpack_require__("../../../../../src/AppBundle/Resources/public/form/ts/form.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__AppBundle_Resources_public_ts_dynamic_component_loader_service__ = __webpack_require__("../../../../../src/AppBundle/Resources/public/ts/dynamic-component-loader.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__AppBundle_Resources_public_ts_post_service__ = __webpack_require__("../../../../../src/AppBundle/Resources/public/ts/post.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ts_base_receipt_payment_document_form_popup_ext_component__ = __webpack_require__("../../../../../src/Bck/AccountingBundle/Resources/public/supplier-document/ts/base-receipt-payment-document-form-popup.ext-component.ts");
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





var Step3PaymentComponent = (function (_super) {
    __extends(Step3PaymentComponent, _super);
    function Step3PaymentComponent(elementRef, renderer, provider, formService, dataService, injector, parentDataService, helperService, dynamicComponentLoaderService, postService) {
        var _this = _super.call(this) || this;
        _super.prototype.initBaseReceiptPaymentDocumentFormPopupExtComponent.call(_this, elementRef, renderer, provider, formService, dataService, injector, parentDataService, helperService, dynamicComponentLoaderService, postService);
        return _this;
    }
    Step3PaymentComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: '.js_addDetailFormPopup',
            template: __webpack_require__("../../../../../src/Bck/AccountingBundle/Resources/public/supplier-document/add/ts/templates/step3-payment.component.html")
        }),
        __param(2, Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["y" /* Inject */])('Provider')),
        __param(4, Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["y" /* Inject */])('DataService')),
        __param(6, Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["y" /* Inject */])('ParentDataService')),
        __param(7, Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["y" /* Inject */])('HelperService')),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_core__["t" /* ElementRef */],
            __WEBPACK_IMPORTED_MODULE_0__angular_core__["U" /* Renderer */], Object, __WEBPACK_IMPORTED_MODULE_1__AppBundle_Resources_public_form_ts_form_service__["a" /* FormService */], Object, __WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Injector */], Object, Object, __WEBPACK_IMPORTED_MODULE_2__AppBundle_Resources_public_ts_dynamic_component_loader_service__["a" /* DynamicComponentLoaderService */],
            __WEBPACK_IMPORTED_MODULE_3__AppBundle_Resources_public_ts_post_service__["a" /* PostService */]])
    ], Step3PaymentComponent);
    return Step3PaymentComponent;
}(__WEBPACK_IMPORTED_MODULE_4__ts_base_receipt_payment_document_form_popup_ext_component__["a" /* BaseReceiptPaymentDocumentFormPopupExtComponent */]));



/***/ }),

/***/ "../../../../../src/Bck/AccountingBundle/Resources/public/supplier-document/add/ts/src/step3-payment.ext-module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Step3PaymentExtModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("../../../common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ng_bootstrap_ng_bootstrap__ = __webpack_require__("../../../../@ng-bootstrap/ng-bootstrap/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__AppBundle_Resources_public_form_ts_field_types_field_types_extension_module__ = __webpack_require__("../../../../../src/AppBundle/Resources/public/form/ts/field-types/field-types.extension-module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__step3_payment_component__ = __webpack_require__("../../../../../src/Bck/AccountingBundle/Resources/public/supplier-document/add/ts/src/step3-payment.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






var Step3PaymentExtModule = (function () {
    function Step3PaymentExtModule() {
    }
    Step3PaymentExtModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["H" /* NgModule */])({
            imports: [__WEBPACK_IMPORTED_MODULE_1__angular_common__["a" /* CommonModule */], __WEBPACK_IMPORTED_MODULE_2__angular_forms__["b" /* FormsModule */], __WEBPACK_IMPORTED_MODULE_2__angular_forms__["e" /* ReactiveFormsModule */], __WEBPACK_IMPORTED_MODULE_3__ng_bootstrap_ng_bootstrap__["a" /* NgbModule */], __WEBPACK_IMPORTED_MODULE_4__AppBundle_Resources_public_form_ts_field_types_field_types_extension_module__["a" /* FieldTypesExtensionModule */]],
            declarations: [
                __WEBPACK_IMPORTED_MODULE_5__step3_payment_component__["a" /* Step3PaymentComponent */]
            ],
            exports: [__WEBPACK_IMPORTED_MODULE_5__step3_payment_component__["a" /* Step3PaymentComponent */]]
        })
    ], Step3PaymentExtModule);
    return Step3PaymentExtModule;
}());



/***/ }),

/***/ "../../../../../src/Bck/AccountingBundle/Resources/public/supplier-document/add/ts/src/step3-receipt.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Step3ReceiptComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__AppBundle_Resources_public_form_ts_form_service__ = __webpack_require__("../../../../../src/AppBundle/Resources/public/form/ts/form.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__AppBundle_Resources_public_ts_dynamic_component_loader_service__ = __webpack_require__("../../../../../src/AppBundle/Resources/public/ts/dynamic-component-loader.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__AppBundle_Resources_public_ts_post_service__ = __webpack_require__("../../../../../src/AppBundle/Resources/public/ts/post.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ts_base_receipt_document_form_popup_ext_component__ = __webpack_require__("../../../../../src/Bck/AccountingBundle/Resources/public/supplier-document/ts/base-receipt-document-form-popup.ext-component.ts");
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





var Step3ReceiptComponent = (function (_super) {
    __extends(Step3ReceiptComponent, _super);
    function Step3ReceiptComponent(elementRef, renderer, provider, formService, dataService, injector, parentDataService, helperService, dynamicComponentLoaderService, postService) {
        var _this = _super.call(this) || this;
        _super.prototype.initBaseReceiptDocumentFormPopupExtComponent.call(_this, elementRef, renderer, provider, formService, dataService, injector, parentDataService, helperService, dynamicComponentLoaderService, postService);
        return _this;
    }
    Step3ReceiptComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: '.js_addDetailFormPopup',
            template: __webpack_require__("../../../../../src/Bck/AccountingBundle/Resources/public/supplier-document/add/ts/templates/step3-receipt.component.html")
        }),
        __param(2, Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["y" /* Inject */])('Provider')),
        __param(4, Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["y" /* Inject */])('DataService')),
        __param(6, Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["y" /* Inject */])('ParentDataService')),
        __param(7, Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["y" /* Inject */])('HelperService')),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_core__["t" /* ElementRef */],
            __WEBPACK_IMPORTED_MODULE_0__angular_core__["U" /* Renderer */], Object, __WEBPACK_IMPORTED_MODULE_1__AppBundle_Resources_public_form_ts_form_service__["a" /* FormService */], Object, __WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Injector */], Object, Object, __WEBPACK_IMPORTED_MODULE_2__AppBundle_Resources_public_ts_dynamic_component_loader_service__["a" /* DynamicComponentLoaderService */],
            __WEBPACK_IMPORTED_MODULE_3__AppBundle_Resources_public_ts_post_service__["a" /* PostService */]])
    ], Step3ReceiptComponent);
    return Step3ReceiptComponent;
}(__WEBPACK_IMPORTED_MODULE_4__ts_base_receipt_document_form_popup_ext_component__["a" /* BaseReceiptDocumentFormPopupExtComponent */]));



/***/ }),

/***/ "../../../../../src/Bck/AccountingBundle/Resources/public/supplier-document/add/ts/src/step3-receipt.ext-module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Step3ReceiptExtModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("../../../common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ng_bootstrap_ng_bootstrap__ = __webpack_require__("../../../../@ng-bootstrap/ng-bootstrap/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__AppBundle_Resources_public_form_ts_field_types_field_types_extension_module__ = __webpack_require__("../../../../../src/AppBundle/Resources/public/form/ts/field-types/field-types.extension-module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__step3_receipt_component__ = __webpack_require__("../../../../../src/Bck/AccountingBundle/Resources/public/supplier-document/add/ts/src/step3-receipt.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






var Step3ReceiptExtModule = (function () {
    function Step3ReceiptExtModule() {
    }
    Step3ReceiptExtModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["H" /* NgModule */])({
            imports: [__WEBPACK_IMPORTED_MODULE_1__angular_common__["a" /* CommonModule */], __WEBPACK_IMPORTED_MODULE_2__angular_forms__["b" /* FormsModule */], __WEBPACK_IMPORTED_MODULE_2__angular_forms__["e" /* ReactiveFormsModule */], __WEBPACK_IMPORTED_MODULE_3__ng_bootstrap_ng_bootstrap__["a" /* NgbModule */], __WEBPACK_IMPORTED_MODULE_4__AppBundle_Resources_public_form_ts_field_types_field_types_extension_module__["a" /* FieldTypesExtensionModule */]],
            declarations: [
                __WEBPACK_IMPORTED_MODULE_5__step3_receipt_component__["a" /* Step3ReceiptComponent */]
            ],
            exports: [__WEBPACK_IMPORTED_MODULE_5__step3_receipt_component__["a" /* Step3ReceiptComponent */]]
        })
    ], Step3ReceiptExtModule);
    return Step3ReceiptExtModule;
}());



/***/ }),

/***/ "../../../../../src/Bck/AccountingBundle/Resources/public/supplier-document/add/ts/src/step3-rectification.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Step3RectificationComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__AppBundle_Resources_public_form_ts_form_service__ = __webpack_require__("../../../../../src/AppBundle/Resources/public/form/ts/form.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__AppBundle_Resources_public_ts_dynamic_component_loader_service__ = __webpack_require__("../../../../../src/AppBundle/Resources/public/ts/dynamic-component-loader.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__AppBundle_Resources_public_ts_post_service__ = __webpack_require__("../../../../../src/AppBundle/Resources/public/ts/post.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ts_base_invoice_rectification_document_form_popup_ext_component__ = __webpack_require__("../../../../../src/Bck/AccountingBundle/Resources/public/supplier-document/ts/base-invoice-rectification-document-form-popup.ext-component.ts");
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





var Step3RectificationComponent = (function (_super) {
    __extends(Step3RectificationComponent, _super);
    function Step3RectificationComponent(elementRef, renderer, provider, formService, dataService, injector, parentDataService, helperService, dynamicComponentLoaderService, postService) {
        var _this = _super.call(this) || this;
        _super.prototype.initBaseInvoiceRectificationDocumentFormPopupExtComponent.call(_this, elementRef, renderer, provider, formService, dataService, injector, parentDataService, helperService, dynamicComponentLoaderService, postService);
        return _this;
    }
    Step3RectificationComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: '.js_documentAddInvoiceRectificationFormPopup',
            template: __webpack_require__("../../../../../src/Bck/AccountingBundle/Resources/public/supplier-document/add/ts/templates/step3-rectification.component.html")
        }),
        __param(2, Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["y" /* Inject */])('Provider')),
        __param(4, Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["y" /* Inject */])('DataService')),
        __param(6, Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["y" /* Inject */])('ParentDataService')),
        __param(7, Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["y" /* Inject */])('HelperService')),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_core__["t" /* ElementRef */],
            __WEBPACK_IMPORTED_MODULE_0__angular_core__["U" /* Renderer */], Object, __WEBPACK_IMPORTED_MODULE_1__AppBundle_Resources_public_form_ts_form_service__["a" /* FormService */], Object, __WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Injector */], Object, Object, __WEBPACK_IMPORTED_MODULE_2__AppBundle_Resources_public_ts_dynamic_component_loader_service__["a" /* DynamicComponentLoaderService */],
            __WEBPACK_IMPORTED_MODULE_3__AppBundle_Resources_public_ts_post_service__["a" /* PostService */]])
    ], Step3RectificationComponent);
    return Step3RectificationComponent;
}(__WEBPACK_IMPORTED_MODULE_4__ts_base_invoice_rectification_document_form_popup_ext_component__["a" /* BaseInvoiceRectificationDocumentFormPopupExtComponent */]));



/***/ }),

/***/ "../../../../../src/Bck/AccountingBundle/Resources/public/supplier-document/add/ts/src/step3-rectification.ext-module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Step3RectificationExtModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("../../../common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ng_bootstrap_ng_bootstrap__ = __webpack_require__("../../../../@ng-bootstrap/ng-bootstrap/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__AppBundle_Resources_public_form_ts_field_types_field_types_extension_module__ = __webpack_require__("../../../../../src/AppBundle/Resources/public/form/ts/field-types/field-types.extension-module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__step3_rectification_component__ = __webpack_require__("../../../../../src/Bck/AccountingBundle/Resources/public/supplier-document/add/ts/src/step3-rectification.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






var Step3RectificationExtModule = (function () {
    function Step3RectificationExtModule() {
    }
    Step3RectificationExtModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["H" /* NgModule */])({
            imports: [__WEBPACK_IMPORTED_MODULE_1__angular_common__["a" /* CommonModule */], __WEBPACK_IMPORTED_MODULE_2__angular_forms__["b" /* FormsModule */], __WEBPACK_IMPORTED_MODULE_2__angular_forms__["e" /* ReactiveFormsModule */], __WEBPACK_IMPORTED_MODULE_3__ng_bootstrap_ng_bootstrap__["a" /* NgbModule */], __WEBPACK_IMPORTED_MODULE_4__AppBundle_Resources_public_form_ts_field_types_field_types_extension_module__["a" /* FieldTypesExtensionModule */]],
            declarations: [
                __WEBPACK_IMPORTED_MODULE_5__step3_rectification_component__["a" /* Step3RectificationComponent */]
            ],
            exports: [__WEBPACK_IMPORTED_MODULE_5__step3_rectification_component__["a" /* Step3RectificationComponent */]]
        })
    ], Step3RectificationExtModule);
    return Step3RectificationExtModule;
}());



/***/ }),

/***/ "../../../../../src/Bck/AccountingBundle/Resources/public/supplier-document/add/ts/src/step3-settlement.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Step3SettlementComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__AppBundle_Resources_public_form_ts_form_service__ = __webpack_require__("../../../../../src/AppBundle/Resources/public/form/ts/form.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__AppBundle_Resources_public_ts_dynamic_component_loader_service__ = __webpack_require__("../../../../../src/AppBundle/Resources/public/ts/dynamic-component-loader.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__AppBundle_Resources_public_ts_post_service__ = __webpack_require__("../../../../../src/AppBundle/Resources/public/ts/post.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ts_base_receipt_settlement_document_form_popup_ext_component__ = __webpack_require__("../../../../../src/Bck/AccountingBundle/Resources/public/supplier-document/ts/base-receipt-settlement-document-form-popup.ext-component.ts");
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





var Step3SettlementComponent = (function (_super) {
    __extends(Step3SettlementComponent, _super);
    function Step3SettlementComponent(elementRef, renderer, provider, formService, dataService, injector, parentDataService, helperService, dynamicComponentLoaderService, postService) {
        var _this = _super.call(this) || this;
        _super.prototype.initBaseReceiptSettlementDocumentFormPopupExtComponent.call(_this, elementRef, renderer, provider, formService, dataService, injector, parentDataService, helperService, dynamicComponentLoaderService, postService);
        return _this;
    }
    Step3SettlementComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: '.js_addDetailFormPopup',
            template: __webpack_require__("../../../../../src/Bck/AccountingBundle/Resources/public/supplier-document/add/ts/templates/step3-settlement.component.html")
        }),
        __param(2, Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["y" /* Inject */])('Provider')),
        __param(4, Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["y" /* Inject */])('DataService')),
        __param(6, Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["y" /* Inject */])('ParentDataService')),
        __param(7, Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["y" /* Inject */])('HelperService')),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_core__["t" /* ElementRef */],
            __WEBPACK_IMPORTED_MODULE_0__angular_core__["U" /* Renderer */], Object, __WEBPACK_IMPORTED_MODULE_1__AppBundle_Resources_public_form_ts_form_service__["a" /* FormService */], Object, __WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Injector */], Object, Object, __WEBPACK_IMPORTED_MODULE_2__AppBundle_Resources_public_ts_dynamic_component_loader_service__["a" /* DynamicComponentLoaderService */],
            __WEBPACK_IMPORTED_MODULE_3__AppBundle_Resources_public_ts_post_service__["a" /* PostService */]])
    ], Step3SettlementComponent);
    return Step3SettlementComponent;
}(__WEBPACK_IMPORTED_MODULE_4__ts_base_receipt_settlement_document_form_popup_ext_component__["a" /* BaseReceiptSettlementDocumentFormPopupExtComponent */]));



/***/ }),

/***/ "../../../../../src/Bck/AccountingBundle/Resources/public/supplier-document/add/ts/src/step3-settlement.ext-module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Step3SettlementExtModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("../../../common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ng_bootstrap_ng_bootstrap__ = __webpack_require__("../../../../@ng-bootstrap/ng-bootstrap/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__AppBundle_Resources_public_form_ts_field_types_field_types_extension_module__ = __webpack_require__("../../../../../src/AppBundle/Resources/public/form/ts/field-types/field-types.extension-module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__step3_settlement_component__ = __webpack_require__("../../../../../src/Bck/AccountingBundle/Resources/public/supplier-document/add/ts/src/step3-settlement.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






var Step3SettlementExtModule = (function () {
    function Step3SettlementExtModule() {
    }
    Step3SettlementExtModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["H" /* NgModule */])({
            imports: [__WEBPACK_IMPORTED_MODULE_1__angular_common__["a" /* CommonModule */], __WEBPACK_IMPORTED_MODULE_2__angular_forms__["b" /* FormsModule */], __WEBPACK_IMPORTED_MODULE_2__angular_forms__["e" /* ReactiveFormsModule */], __WEBPACK_IMPORTED_MODULE_3__ng_bootstrap_ng_bootstrap__["a" /* NgbModule */], __WEBPACK_IMPORTED_MODULE_4__AppBundle_Resources_public_form_ts_field_types_field_types_extension_module__["a" /* FieldTypesExtensionModule */]],
            declarations: [
                __WEBPACK_IMPORTED_MODULE_5__step3_settlement_component__["a" /* Step3SettlementComponent */]
            ],
            exports: [__WEBPACK_IMPORTED_MODULE_5__step3_settlement_component__["a" /* Step3SettlementComponent */]]
        })
    ], Step3SettlementExtModule);
    return Step3SettlementExtModule;
}());



/***/ }),

/***/ "../../../../../src/Bck/AccountingBundle/Resources/public/supplier-document/add/ts/templates/form-popup.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"modal-header\">\n    <div class=\"row align-items-center\">\n        <h3 class=\"col-auto mr-auto modal-title\">Form&nbsp;{{getProviderAttr('label')}}<small>&nbsp;({{(_formService && _formService.getObject() && _formService.getObject().id) ? 'edit' : 'add'}})</small></h3>\n        <div class=\"col-auto text-right actions\"><a\n                class=\"-round fa fa-times\"\n                (click)=\"closeAction($event)\"></a></div>\n    </div>\n</div>\n<div class=\"modal-body\">\n    <div class=\"row\">\n        <div class=\"col-12\">    \n                        <ul class=\"row mb-3 no-gutters wizard-nav\">\n                                    <li class=\"col-auto wizard-step\"\n                        [class.step-active]=\"0 == _wizardManagerService.getIndex()\">\n                        <span class=\"step-number\">1</span>\n                        <span class=\"step-text\">Document Type</span>\n                    </li>\n                                    <li class=\"col-auto wizard-step\"\n                        [class.step-active]=\"1 == _wizardManagerService.getIndex()\">\n                        <span class=\"step-number\">2</span>\n                        <span class=\"step-text\">Detail</span>\n                    </li>\n                                    <li class=\"col-auto wizard-step\"\n                        [class.step-active]=\"2 == _wizardManagerService.getIndex()\">\n                        <span class=\"step-number\">3</span>\n                        <span class=\"step-text\">Preview</span>\n                    </li>\n                            </ul>\n\n            \n                                                                        <section [hidden]=\"_wizardManagerService.getIndex() != 0\">                    \n\n\n    <form name=\"form\" method=\"post\" (ngSubmit)=\"saveAction($event)\" [formGroup]=\"_formService.getForm()\" class=\"form-horizontal\">\n\n    \n            \n\n                <div class=\"row form-group\" >\n\n                        <label class=\"col-sm-2 control-label required\" for=\"form_supplierDocumentTypeObj\">Document Type</label>\n    \n            <div class=\"col-sm-10\">\n                                                                            <select [(ngModel)]=\"_formService.getObject().supplierDocumentTypeObj\"\n            formControlName = supplierDocumentTypeObj\n            class=\"form-control\"\n            [class.error]=\"_formService.getErrors().supplierDocumentTypeObj && (_formService.getErrors().supplierDocumentTypeObj.length > 0)\"\n            id=\"form_supplierDocumentTypeObj\"\n            name=\"form[supplierDocumentTypeObj]\"\n            required=\"required\">\n        <option value=\"\"></option>\n                    <option *ngFor=\"let choice of _dataService.getFieldChoices('supplierDocumentTypeObj')\"\n                    value=\"{{choice['id']}}\">{{choice['label']}}</option>\n            </select>\n                                <label class=\"error\" *ngFor=\"let error of _formService.getErrors().supplierDocumentTypeObj\">{{error}}</label>\n            </div>\n        </div>\n                \n\n                <div class=\"row form-group\" >\n\n                        <label class=\"col-sm-2 control-label required\" for=\"form_supplierObj\">Supplier</label>\n    \n            <div class=\"col-sm-10\">\n                                            <input [(ngModel)]=\"_formService.getObject().supplierObj\"\n           formControlName = supplierObj\n           name=\"form[supplierObj]\"\n           required=\"required\"           type=\"hidden\">\n    <js_autoComplete [field]=\"'supplierObj'\"\n                     [hasSelfReference]=\"_dataService.getFieldChoicesAttr('supplierObj', 'hasSelfReference')\"\n                                                                       ></js_autoComplete>\n                    <label class=\"error\" *ngFor=\"let error of _formService.getErrors().supplierObj\">{{error}}</label>\n            </div>\n        </div>\n        \n\n    \n\n    <input type=\"hidden\" id=\"form__token\" name=\"form[_token]\" value=\"cEuu0f4SXmjfjYDFXIJO4B5Hkp8dRrRxqs-vEEkwqNE\" /></form>\n\n                </section>                                            <section [hidden]=\"_wizardManagerService.getIndex() != 1\"\n         class=\"js_lazyLoadContainer_1\">\n    <ng-template #js_lazyLoadContainer></ng-template>\n</section>                                <section [hidden]=\"_wizardManagerService.getIndex() != 2\"\n         class=\"js_lazyLoadContainer_2\">\n    <ng-template #js_lazyLoadContainer></ng-template>\n</section>            \n            \n            \n    </div>\n    </div>\n</div>\n<div class=\"modal-footer hide-on-empty\">\n        <div class=\"row justify-content-center\">\n    <div class=\"col-auto\">\n            <button type=\"button\" class=\"btn-light btn\" (click)=\"_wizardManagerService.cancelAction($event)\">Cancel</button>\n                <button type=\"button\" class=\"btn-primary btn\" (click)=\"_wizardManagerService.prevAction($event)\"\n                    *ngIf=\"0 < _wizardManagerService.getIndex()\">Prev</button>\n            <button type=\"button\" class=\"btn-primary btn\" (click)=\"_wizardManagerService.nextAction($event)\"\n                    *ngIf=\"2 > _wizardManagerService.getIndex()\">Next</button>\n            <button type=\"button\" class=\"btn-primary btn\" (click)=\"_wizardManagerService.finishAction($event)\"\n                    *ngIf=\"2 == _wizardManagerService.getIndex()\">Finish</button>\n        \n    </div>\n</div></div>"

/***/ }),

/***/ "../../../../../src/Bck/AccountingBundle/Resources/public/supplier-document/add/ts/templates/step3-invoice.component.html":
/***/ (function(module, exports) {

module.exports = "\n\n\n    <form name=\"form\" method=\"post\" (ngSubmit)=\"saveAction($event)\" [formGroup]=\"_formService.getForm()\" class=\"form-horizontal\">\n\n\n    \n    <div class=\"row\">\n        <div class=\"col-sm-6\">\n            <img *ngIf=\"_dataService.getLocalDataAttr('storeLogo')\"\n                 height=\"96\"\n                 alt=\"logo\"\n                 class=\"m-b-md\"\n                 [src]=\"_helperService.getUploadWebPath(_dataService.getLocalDataAttr('storeLogo'), 'resize_96')\">\n            <address>\n                <strong>{{_formService.getObject().storeLegalName}}</strong><br>\n                <ng-template\n                    [ngIf]=\"_formService.getObject().storeStreet1\"\n                    ><span>{{_formService.getObject().storeStreet1}}</span><br></ng-template><ng-template\n                    [ngIf]=\"_formService.getObject().storeStreet2\"\n                    ><span>{{_formService.getObject().storeStreet2}}</span><br></ng-template><ng-template\n                    [ngIf]=\"_formService.getObject().storePostCode\"\n                    ><span>{{_formService.getObject().storePostCode}} {{_formService.getObject().storeCity}}</span><br></ng-template><ng-template\n                    [ngIf]=\"_formService.getObject().storeRegion\"\n                    ><span>{{_formService.getObject().storeRegion}}</span><br></ng-template>            </address>\n            <ng-template ngFor let-field [ngForOf]=\"_dataService.getLocalDataAttr('storeInfo')\"><span\n                    [innerHtml]=\"field\"></span><br></ng-template>\n            <p class=\"m-t-sm\">Tax Number: {{_formService.getObject().storeTaxNumber}}</p>\n        </div>\n        <div class=\"col-sm-6\">\n            <h3 *ngIf=\"_formService.getObject().code\" class=\"document-number text-right\"><span>{{_formService.getObject().documentType_name}}:&nbsp;</span>                        <p id=\"form_code\"\n               class=\"form-control-static\"\n               [innerHTML]=\"_formService.getViewObject().code\"></p>\n                        <label class=\"error\" *ngFor=\"let error of _formService.getErrors().code\">{{error}}</label>\n</h3>\n            <table class=\"table document-dates\">\n                <tbody>\n                <tr>\n                    <td><strong>Date:</strong></td>\n                    <td>                        \n    <div class=\"input-group js_dataPicker\"\n         [datePicker]=\"'date'\"\n         #dpk_date=\"\" [control]=\"dpk_date\">\n        <input type=\"text\"\n               class=\"form-control\"\n               placeholder=\"yyyy-mm-dd\"\n               [(ngModel)]=\"_formService.getObject().date\"\n               formControlName = date\n               name=\"form[date]\"\n               required=\"required\"               [class.error]=\"_formService.getErrors()['date'] && (_formService.getErrors()['date'].length > 0)\"\n               ngbDatepicker #dpk_date=\"ngbDatepicker\">\n        <div class=\"input-group-append\">\n            <button class=\"btn\" type=\"button\"><a class=\"fa fa-calendar\"></a></button>\n        </div>\n    </div>\n    \n                <label class=\"error\" *ngFor=\"let error of _formService.getErrors().date\">{{error}}</label>\n</td>\n                </tr>\n                <tr>\n                    <td><strong>Due Date:</strong></td>\n                    <td>                        \n    <div class=\"input-group js_dataPicker\"\n         [datePicker]=\"'dueDate'\"\n         #dpk_dueDate=\"\" [control]=\"dpk_dueDate\">\n        <input type=\"text\"\n               class=\"form-control\"\n               placeholder=\"yyyy-mm-dd\"\n               [(ngModel)]=\"_formService.getObject().dueDate\"\n               formControlName = dueDate\n               name=\"form[dueDate]\"\n               required=\"required\"               [class.error]=\"_formService.getErrors()['dueDate'] && (_formService.getErrors()['dueDate'].length > 0)\"\n               ngbDatepicker #dpk_dueDate=\"ngbDatepicker\">\n        <div class=\"input-group-append\">\n            <button class=\"btn\" type=\"button\"><a class=\"fa fa-calendar\"></a></button>\n        </div>\n    </div>\n    \n                <label class=\"error\" *ngFor=\"let error of _formService.getErrors().dueDate\">{{error}}</label>\n</td>\n                </tr>                </tbody>\n            </table>\n\n            <div class=\"\">\n                <span class=\"\">To:</span>\n                <div class=\"document-entity mt-1\">\n                    <span *ngIf=\"_formService.getObject().entity_avatar\"\n                          [innerHTML]=\"_formService.getViewObject().entity_avatar\" class=\"pr-1\"></span>\n                    <address>\n                        <strong>{{_formService.getObject().entityLegalName}}</strong><br>\n                        <div class=\"m-t-xs m-b-xs\">\n                                                        <input [(ngModel)]=\"_formService.getObject().entityAddressObj\"\n           formControlName = entityAddressObj\n           name=\"form[entityAddressObj]\"\n                      type=\"hidden\">\n    <js_autoComplete [field]=\"'entityAddressObj'\"\n                     [hasSelfReference]=\"_dataService.getFieldChoicesAttr('entityAddressObj', 'hasSelfReference')\"\n                                              (onChange)=\"onEntityAddressChange($event)\"[placeholder]=\"&#039;Address&#039;\"                         ></js_autoComplete>\n                    <label class=\"error\" *ngFor=\"let error of _formService.getErrors().entityAddressObj\">{{error}}</label>\n                        </div>\n                        <ng-template\n                            [ngIf]=\"_formService.getObject().entityStreet1\"\n                            ><span>{{_formService.getObject().entityStreet1}}</span><br></ng-template><ng-template\n                            [ngIf]=\"_formService.getObject().entityStreet2\"\n                            ><span>{{_formService.getObject().entityStreet2}}</span><br></ng-template><ng-template\n                            [ngIf]=\"_formService.getObject().entityPostCode\"\n                            ><span>{{_formService.getObject().entityPostCode}} {{_formService.getObject().entityCity}}</span><br></ng-template><ng-template\n                            [ngIf]=\"_formService.getObject().entityRegion\"\n                            ><span>{{_formService.getObject().entityRegion}}</span><br></ng-template>                    </address>\n                </div>\n            </div>\n            <p class=\"mt-2\">Tax Number: {{_formService.getObject().entityTaxNumber}}</p>\n        </div>\n    </div>\n\n    <div class=\"mt-2 mb-4\">\n        <span>Comments</span>\n        <div class=\"border rounded document-comments\">                            <textarea id=\"form_comments\" name=\"form[comments]\" rows=\"3\" [(ngModel)]=\"_formService.getObject().comments\" formControlName=\"comments\" [class.error]=\"_formService.getErrors().comments &amp;&amp; _formService.getErrors().comments.length &gt; 0\" class=\"form-control\"></textarea>\n                <label class=\"error\" *ngFor=\"let error of _formService.getErrors().comments\">{{error}}</label>\n</div>\n    </div>\n\n            <section><ng-template #js_lazyLoadContainer></ng-template></section>\n    \n    <div class=\"row\">\n        <div class=\"col-sm-8\">\n            <ng-template [ngIf]=\"_dataService.getLocalDataAttr('totalVatSplitByCode')\">\n            <span>TAX Resume</span>\n            <div class=\"border rounded document-tax-resume\">\n                <table class=\"table\">\n                    <tbody>\n                    <tr>\n                        <th>Code</th>\n                        <th>Description</th>\n                        <th>Percentage</th>\n                        <th>Net</th>\n                        <th>TAX</th>\n                        <th>Total</th>\n                    </tr>\n                    <tr *ngFor=\"let obj of _dataService.getLocalDataAttr('totalVatSplitByCode')\">\n                        <td>{{ obj['name'] }}</td>\n                        <td>{{ obj['description'] }}</td>\n                        <td class=\"text-right\">{{ obj['percentage'] }}%</td>\n                        <td class=\"text-right\">{{ obj['subTotal'] }}</td>\n                        <td class=\"text-right\">{{ obj['totalVat'] }}</td>\n                        <td class=\"text-right\">{{ obj['total'] }}</td>\n                    </tr>\n                    </tbody>\n                </table>\n            </div>\n            </ng-template>\n        </div>\n        <div class=\"col-sm-4\">\n            <table class=\"table document-total\">\n                <tbody>\n                <tr>\n                    <td><strong>Sub Total:</strong></td>\n                    <td>                            <input type=\"text\" id=\"form_subTotal\" name=\"form[subTotal]\" readonly=\"readonly\" [(ngModel)]=\"_formService.getObject().subTotal\" formControlName=\"subTotal\" [class.error]=\"_formService.getErrors().subTotal &amp;&amp; _formService.getErrors().subTotal.length &gt; 0\" class=\"form-control\" value=\"0\" />\n                <label class=\"error\" *ngFor=\"let error of _formService.getErrors().subTotal\">{{error}}</label>\n</td>\n                </tr>\n                <tr>\n                    <td><strong>TAX:</strong></td>\n                    <td>                            <input type=\"text\" id=\"form_totalVat\" name=\"form[totalVat]\" readonly=\"readonly\" [(ngModel)]=\"_formService.getObject().totalVat\" formControlName=\"totalVat\" [class.error]=\"_formService.getErrors().totalVat &amp;&amp; _formService.getErrors().totalVat.length &gt; 0\" class=\"form-control\" value=\"0\" />\n                <label class=\"error\" *ngFor=\"let error of _formService.getErrors().totalVat\">{{error}}</label>\n</td>\n                </tr>\n                <tr>\n                    <td><strong>Total:</strong></td>\n                    <td>                            <input type=\"text\" id=\"form_total\" name=\"form[total]\" readonly=\"readonly\" [(ngModel)]=\"_formService.getObject().total\" formControlName=\"total\" [class.error]=\"_formService.getErrors().total &amp;&amp; _formService.getErrors().total.length &gt; 0\" class=\"form-control\" />\n                <label class=\"error\" *ngFor=\"let error of _formService.getErrors().total\">{{error}}</label>\n</td>\n                </tr>\n                </tbody>\n            </table>\n        </div>\n    </div>\n    <div *ngIf=\"_dataService.getLocalDataAttr('documentInfo') && _dataService.getLocalDataAttr('documentInfo')['footer']\"\n         class=\"mt-2 bg-light p-3\"\n         [innerHTML]=\"_dataService.getLocalDataAttr('documentInfo')['footer']\"></div>\n\n\n    \n\n    <input type=\"hidden\" id=\"form__token\" name=\"form[_token]\" value=\"cEuu0f4SXmjfjYDFXIJO4B5Hkp8dRrRxqs-vEEkwqNE\" /></form>\n\n"

/***/ }),

/***/ "../../../../../src/Bck/AccountingBundle/Resources/public/supplier-document/add/ts/templates/step3-payment.component.html":
/***/ (function(module, exports) {

module.exports = "\n\n\n    <form name=\"form\" method=\"post\" (ngSubmit)=\"saveAction($event)\" [formGroup]=\"_formService.getForm()\" class=\"form-horizontal\">\n\n\n    \n    <div class=\"row\">\n        <div class=\"col-sm-6\">\n            <img *ngIf=\"_dataService.getLocalDataAttr('storeLogo')\"\n                 height=\"96\"\n                 alt=\"logo\"\n                 class=\"m-b-md\"\n                 [src]=\"_helperService.getUploadWebPath(_dataService.getLocalDataAttr('storeLogo'), 'resize_96')\">\n            <address>\n                <strong>{{_formService.getObject().storeLegalName}}</strong><br>\n                <ng-template\n                    [ngIf]=\"_formService.getObject().storeStreet1\"\n                    ><span>{{_formService.getObject().storeStreet1}}</span><br></ng-template><ng-template\n                    [ngIf]=\"_formService.getObject().storeStreet2\"\n                    ><span>{{_formService.getObject().storeStreet2}}</span><br></ng-template><ng-template\n                    [ngIf]=\"_formService.getObject().storePostCode\"\n                    ><span>{{_formService.getObject().storePostCode}} {{_formService.getObject().storeCity}}</span><br></ng-template><ng-template\n                    [ngIf]=\"_formService.getObject().storeRegion\"\n                    ><span>{{_formService.getObject().storeRegion}}</span><br></ng-template>            </address>\n            <ng-template ngFor let-field [ngForOf]=\"_dataService.getLocalDataAttr('storeInfo')\"><span\n                    [innerHtml]=\"field\"></span><br></ng-template>\n            <p class=\"m-t-sm\">Tax Number: {{_formService.getObject().storeTaxNumber}}</p>\n        </div>\n        <div class=\"col-sm-6\">\n            <h3 *ngIf=\"_formService.getObject().code\" class=\"document-number text-right\"><span>{{_formService.getObject().documentType_name}}:&nbsp;</span>                        <p id=\"form_code\"\n               class=\"form-control-static\"\n               [innerHTML]=\"_formService.getViewObject().code\"></p>\n                        <label class=\"error\" *ngFor=\"let error of _formService.getErrors().code\">{{error}}</label>\n</h3>\n            <table class=\"table document-dates\">\n                <tbody>\n                <tr>\n                    <td><strong>Date:</strong></td>\n                    <td>                        \n    <div class=\"input-group js_dataPicker\"\n         [datePicker]=\"'date'\"\n         #dpk_date=\"\" [control]=\"dpk_date\">\n        <input type=\"text\"\n               class=\"form-control\"\n               placeholder=\"yyyy-mm-dd\"\n               [(ngModel)]=\"_formService.getObject().date\"\n               formControlName = date\n               name=\"form[date]\"\n               required=\"required\"               [class.error]=\"_formService.getErrors()['date'] && (_formService.getErrors()['date'].length > 0)\"\n               ngbDatepicker #dpk_date=\"ngbDatepicker\">\n        <div class=\"input-group-append\">\n            <button class=\"btn\" type=\"button\"><a class=\"fa fa-calendar\"></a></button>\n        </div>\n    </div>\n    \n                <label class=\"error\" *ngFor=\"let error of _formService.getErrors().date\">{{error}}</label>\n</td>\n                </tr>\n                                </tbody>\n            </table>\n\n            <div class=\"\">\n                <span class=\"\">To:</span>\n                <div class=\"document-entity mt-1\">\n                    <span *ngIf=\"_formService.getObject().entity_avatar\"\n                          [innerHTML]=\"_formService.getViewObject().entity_avatar\" class=\"pr-1\"></span>\n                    <address>\n                        <strong>{{_formService.getObject().entityLegalName}}</strong><br>\n                        <div class=\"m-t-xs m-b-xs\">\n                                                        <input [(ngModel)]=\"_formService.getObject().entityAddressObj\"\n           formControlName = entityAddressObj\n           name=\"form[entityAddressObj]\"\n                      type=\"hidden\">\n    <js_autoComplete [field]=\"'entityAddressObj'\"\n                     [hasSelfReference]=\"_dataService.getFieldChoicesAttr('entityAddressObj', 'hasSelfReference')\"\n                                              (onChange)=\"onEntityAddressChange($event)\"[placeholder]=\"&#039;Address&#039;\"                         ></js_autoComplete>\n                    <label class=\"error\" *ngFor=\"let error of _formService.getErrors().entityAddressObj\">{{error}}</label>\n                        </div>\n                        <ng-template\n                            [ngIf]=\"_formService.getObject().entityStreet1\"\n                            ><span>{{_formService.getObject().entityStreet1}}</span><br></ng-template><ng-template\n                            [ngIf]=\"_formService.getObject().entityStreet2\"\n                            ><span>{{_formService.getObject().entityStreet2}}</span><br></ng-template><ng-template\n                            [ngIf]=\"_formService.getObject().entityPostCode\"\n                            ><span>{{_formService.getObject().entityPostCode}} {{_formService.getObject().entityCity}}</span><br></ng-template><ng-template\n                            [ngIf]=\"_formService.getObject().entityRegion\"\n                            ><span>{{_formService.getObject().entityRegion}}</span><br></ng-template>                    </address>\n                </div>\n            </div>\n            <p class=\"mt-2\">Tax Number: {{_formService.getObject().entityTaxNumber}}</p>\n        </div>\n    </div>\n\n    <div class=\"mt-2 mb-4\">\n        <span>Comments</span>\n        <div class=\"border rounded document-comments\">                            <textarea id=\"form_comments\" name=\"form[comments]\" rows=\"3\" [(ngModel)]=\"_formService.getObject().comments\" formControlName=\"comments\" [class.error]=\"_formService.getErrors().comments &amp;&amp; _formService.getErrors().comments.length &gt; 0\" class=\"form-control\"></textarea>\n                <label class=\"error\" *ngFor=\"let error of _formService.getErrors().comments\">{{error}}</label>\n</div>\n    </div>\n\n    <section><ng-template #js_lazyLoadContainer></ng-template></section>\n    <div class=\"row\"><div class=\"col-md-4 offset-md-8\">\n    <table class=\"table document-total\">\n        <tbody>\n        <tr>\n    <td><strong>Total:</strong></td>\n    <td>                            <input type=\"text\" id=\"form_total\" name=\"form[total]\" readonly=\"readonly\" [(ngModel)]=\"_formService.getObject().total\" formControlName=\"total\" [class.error]=\"_formService.getErrors().total &amp;&amp; _formService.getErrors().total.length &gt; 0\" class=\"form-control\" />\n                <label class=\"error\" *ngFor=\"let error of _formService.getErrors().total\">{{error}}</label>\n</td>\n</tr>        </tbody>\n    </table>\n</div></div>\n    <div *ngIf=\"_dataService.getLocalDataAttr('documentInfo') && _dataService.getLocalDataAttr('documentInfo')['footer']\"\n         class=\"mt-2 bg-light p-3\"\n         [innerHTML]=\"_dataService.getLocalDataAttr('documentInfo')['footer']\"></div>\n\n\n    \n\n    <input type=\"hidden\" id=\"form__token\" name=\"form[_token]\" value=\"cEuu0f4SXmjfjYDFXIJO4B5Hkp8dRrRxqs-vEEkwqNE\" /></form>\n\n"

/***/ }),

/***/ "../../../../../src/Bck/AccountingBundle/Resources/public/supplier-document/add/ts/templates/step3-receipt.component.html":
/***/ (function(module, exports) {

module.exports = "\n\n\n    <form name=\"form\" method=\"post\" (ngSubmit)=\"saveAction($event)\" [formGroup]=\"_formService.getForm()\" class=\"form-horizontal\">\n\n\n    \n    <div class=\"row\">\n        <div class=\"col-sm-6\">\n            <img *ngIf=\"_dataService.getLocalDataAttr('storeLogo')\"\n                 height=\"96\"\n                 alt=\"logo\"\n                 class=\"m-b-md\"\n                 [src]=\"_helperService.getUploadWebPath(_dataService.getLocalDataAttr('storeLogo'), 'resize_96')\">\n            <address>\n                <strong>{{_formService.getObject().storeLegalName}}</strong><br>\n                <ng-template\n                    [ngIf]=\"_formService.getObject().storeStreet1\"\n                    ><span>{{_formService.getObject().storeStreet1}}</span><br></ng-template><ng-template\n                    [ngIf]=\"_formService.getObject().storeStreet2\"\n                    ><span>{{_formService.getObject().storeStreet2}}</span><br></ng-template><ng-template\n                    [ngIf]=\"_formService.getObject().storePostCode\"\n                    ><span>{{_formService.getObject().storePostCode}} {{_formService.getObject().storeCity}}</span><br></ng-template><ng-template\n                    [ngIf]=\"_formService.getObject().storeRegion\"\n                    ><span>{{_formService.getObject().storeRegion}}</span><br></ng-template>            </address>\n            <ng-template ngFor let-field [ngForOf]=\"_dataService.getLocalDataAttr('storeInfo')\"><span\n                    [innerHtml]=\"field\"></span><br></ng-template>\n            <p class=\"m-t-sm\">Tax Number: {{_formService.getObject().storeTaxNumber}}</p>\n        </div>\n        <div class=\"col-sm-6\">\n            <h3 *ngIf=\"_formService.getObject().code\" class=\"document-number text-right\"><span>{{_formService.getObject().documentType_name}}:&nbsp;</span>                        <p id=\"form_code\"\n               class=\"form-control-static\"\n               [innerHTML]=\"_formService.getViewObject().code\"></p>\n                        <label class=\"error\" *ngFor=\"let error of _formService.getErrors().code\">{{error}}</label>\n</h3>\n            <table class=\"table document-dates\">\n                <tbody>\n                <tr>\n                    <td><strong>Date:</strong></td>\n                    <td>                        \n    <div class=\"input-group js_dataPicker\"\n         [datePicker]=\"'date'\"\n         #dpk_date=\"\" [control]=\"dpk_date\">\n        <input type=\"text\"\n               class=\"form-control\"\n               placeholder=\"yyyy-mm-dd\"\n               [(ngModel)]=\"_formService.getObject().date\"\n               formControlName = date\n               name=\"form[date]\"\n               required=\"required\"               [class.error]=\"_formService.getErrors()['date'] && (_formService.getErrors()['date'].length > 0)\"\n               ngbDatepicker #dpk_date=\"ngbDatepicker\">\n        <div class=\"input-group-append\">\n            <button class=\"btn\" type=\"button\"><a class=\"fa fa-calendar\"></a></button>\n        </div>\n    </div>\n    \n                <label class=\"error\" *ngFor=\"let error of _formService.getErrors().date\">{{error}}</label>\n</td>\n                </tr>\n                                </tbody>\n            </table>\n\n            <div class=\"\">\n                <span class=\"\">To:</span>\n                <div class=\"document-entity mt-1\">\n                    <span *ngIf=\"_formService.getObject().entity_avatar\"\n                          [innerHTML]=\"_formService.getViewObject().entity_avatar\" class=\"pr-1\"></span>\n                    <address>\n                        <strong>{{_formService.getObject().entityLegalName}}</strong><br>\n                        <div class=\"m-t-xs m-b-xs\">\n                                                        <input [(ngModel)]=\"_formService.getObject().entityAddressObj\"\n           formControlName = entityAddressObj\n           name=\"form[entityAddressObj]\"\n                      type=\"hidden\">\n    <js_autoComplete [field]=\"'entityAddressObj'\"\n                     [hasSelfReference]=\"_dataService.getFieldChoicesAttr('entityAddressObj', 'hasSelfReference')\"\n                                              (onChange)=\"onEntityAddressChange($event)\"[placeholder]=\"&#039;Address&#039;\"                         ></js_autoComplete>\n                    <label class=\"error\" *ngFor=\"let error of _formService.getErrors().entityAddressObj\">{{error}}</label>\n                        </div>\n                        <ng-template\n                            [ngIf]=\"_formService.getObject().entityStreet1\"\n                            ><span>{{_formService.getObject().entityStreet1}}</span><br></ng-template><ng-template\n                            [ngIf]=\"_formService.getObject().entityStreet2\"\n                            ><span>{{_formService.getObject().entityStreet2}}</span><br></ng-template><ng-template\n                            [ngIf]=\"_formService.getObject().entityPostCode\"\n                            ><span>{{_formService.getObject().entityPostCode}} {{_formService.getObject().entityCity}}</span><br></ng-template><ng-template\n                            [ngIf]=\"_formService.getObject().entityRegion\"\n                            ><span>{{_formService.getObject().entityRegion}}</span><br></ng-template>                    </address>\n                </div>\n            </div>\n            <p class=\"mt-2\">Tax Number: {{_formService.getObject().entityTaxNumber}}</p>\n        </div>\n    </div>\n\n    <div class=\"mt-2 mb-4\">\n        <span>Comments</span>\n        <div class=\"border rounded document-comments\">                            <textarea id=\"form_comments\" name=\"form[comments]\" rows=\"3\" [(ngModel)]=\"_formService.getObject().comments\" formControlName=\"comments\" [class.error]=\"_formService.getErrors().comments &amp;&amp; _formService.getErrors().comments.length &gt; 0\" class=\"form-control\"></textarea>\n                <label class=\"error\" *ngFor=\"let error of _formService.getErrors().comments\">{{error}}</label>\n</div>\n    </div>\n\n    <section>\n    <ng-template #js_lazyLoadContainer></ng-template>\n    <ng-template #js_lazyLoadContainer></ng-template>\n</section>\n    <div class=\"row\"><div class=\"col-md-4 offset-md-8\">\n    <table class=\"table document-total\">\n        <tbody>\n        <tr>\n            <td><strong>DIFF:</strong></td>\n            <td><input class=\"form-control js_diffControl\"\n                       readonly=\"readonly\"\n                       type=\"text\"\n                       value=\"0\"></td>\n        </tr>        </tbody>\n    </table>\n</div></div>\n    <div *ngIf=\"_dataService.getLocalDataAttr('documentInfo') && _dataService.getLocalDataAttr('documentInfo')['footer']\"\n         class=\"mt-2 bg-light p-3\"\n         [innerHTML]=\"_dataService.getLocalDataAttr('documentInfo')['footer']\"></div>\n\n\n    \n\n    <input type=\"hidden\" id=\"form__token\" name=\"form[_token]\" value=\"cEuu0f4SXmjfjYDFXIJO4B5Hkp8dRrRxqs-vEEkwqNE\" /></form>\n\n"

/***/ }),

/***/ "../../../../../src/Bck/AccountingBundle/Resources/public/supplier-document/add/ts/templates/step3-rectification.component.html":
/***/ (function(module, exports) {

module.exports = "\n\n\n    <form name=\"form\" method=\"post\" (ngSubmit)=\"saveAction($event)\" [formGroup]=\"_formService.getForm()\" class=\"form-horizontal\">\n\n\n    \n    <div class=\"row\">\n        <div class=\"col-sm-6\">\n            <img *ngIf=\"_dataService.getLocalDataAttr('storeLogo')\"\n                 height=\"96\"\n                 alt=\"logo\"\n                 class=\"m-b-md\"\n                 [src]=\"_helperService.getUploadWebPath(_dataService.getLocalDataAttr('storeLogo'), 'resize_96')\">\n            <address>\n                <strong>{{_formService.getObject().storeLegalName}}</strong><br>\n                <ng-template\n                    [ngIf]=\"_formService.getObject().storeStreet1\"\n                    ><span>{{_formService.getObject().storeStreet1}}</span><br></ng-template><ng-template\n                    [ngIf]=\"_formService.getObject().storeStreet2\"\n                    ><span>{{_formService.getObject().storeStreet2}}</span><br></ng-template><ng-template\n                    [ngIf]=\"_formService.getObject().storePostCode\"\n                    ><span>{{_formService.getObject().storePostCode}} {{_formService.getObject().storeCity}}</span><br></ng-template><ng-template\n                    [ngIf]=\"_formService.getObject().storeRegion\"\n                    ><span>{{_formService.getObject().storeRegion}}</span><br></ng-template>            </address>\n            <ng-template ngFor let-field [ngForOf]=\"_dataService.getLocalDataAttr('storeInfo')\"><span\n                    [innerHtml]=\"field\"></span><br></ng-template>\n            <p class=\"m-t-sm\">Tax Number: {{_formService.getObject().storeTaxNumber}}</p>\n        </div>\n        <div class=\"col-sm-6\">\n            <h3 *ngIf=\"_formService.getObject().code\" class=\"document-number text-right\"><span>{{_formService.getObject().documentType_name}}:&nbsp;</span>                        <p id=\"form_code\"\n               class=\"form-control-static\"\n               [innerHTML]=\"_formService.getViewObject().code\"></p>\n                        <label class=\"error\" *ngFor=\"let error of _formService.getErrors().code\">{{error}}</label>\n</h3>\n            <table class=\"table document-dates\">\n                <tbody>\n                <tr>\n                    <td><strong>Date:</strong></td>\n                    <td>                        \n    <div class=\"input-group js_dataPicker\"\n         [datePicker]=\"'date'\"\n         #dpk_date=\"\" [control]=\"dpk_date\">\n        <input type=\"text\"\n               class=\"form-control\"\n               placeholder=\"yyyy-mm-dd\"\n               [(ngModel)]=\"_formService.getObject().date\"\n               formControlName = date\n               name=\"form[date]\"\n               required=\"required\"               [class.error]=\"_formService.getErrors()['date'] && (_formService.getErrors()['date'].length > 0)\"\n               ngbDatepicker #dpk_date=\"ngbDatepicker\">\n        <div class=\"input-group-append\">\n            <button class=\"btn\" type=\"button\"><a class=\"fa fa-calendar\"></a></button>\n        </div>\n    </div>\n    \n                <label class=\"error\" *ngFor=\"let error of _formService.getErrors().date\">{{error}}</label>\n</td>\n                </tr>\n                <tr>\n                    <td><strong>Due Date:</strong></td>\n                    <td>                        \n    <div class=\"input-group js_dataPicker\"\n         [datePicker]=\"'dueDate'\"\n         #dpk_dueDate=\"\" [control]=\"dpk_dueDate\">\n        <input type=\"text\"\n               class=\"form-control\"\n               placeholder=\"yyyy-mm-dd\"\n               [(ngModel)]=\"_formService.getObject().dueDate\"\n               formControlName = dueDate\n               name=\"form[dueDate]\"\n               required=\"required\"               [class.error]=\"_formService.getErrors()['dueDate'] && (_formService.getErrors()['dueDate'].length > 0)\"\n               ngbDatepicker #dpk_dueDate=\"ngbDatepicker\">\n        <div class=\"input-group-append\">\n            <button class=\"btn\" type=\"button\"><a class=\"fa fa-calendar\"></a></button>\n        </div>\n    </div>\n    \n                <label class=\"error\" *ngFor=\"let error of _formService.getErrors().dueDate\">{{error}}</label>\n</td>\n                </tr>                </tbody>\n            </table>\n\n            <div class=\"\">\n                <span class=\"\">To:</span>\n                <div class=\"document-entity mt-1\">\n                    <span *ngIf=\"_formService.getObject().entity_avatar\"\n                          [innerHTML]=\"_formService.getViewObject().entity_avatar\" class=\"pr-1\"></span>\n                    <address>\n                        <strong>{{_formService.getObject().entityLegalName}}</strong><br>\n                        <div class=\"m-t-xs m-b-xs\">\n                                                        <input [(ngModel)]=\"_formService.getObject().entityAddressObj\"\n           formControlName = entityAddressObj\n           name=\"form[entityAddressObj]\"\n                      type=\"hidden\">\n    <js_autoComplete [field]=\"'entityAddressObj'\"\n                     [hasSelfReference]=\"_dataService.getFieldChoicesAttr('entityAddressObj', 'hasSelfReference')\"\n                                              (onChange)=\"onEntityAddressChange($event)\"[placeholder]=\"&#039;Address&#039;\"                         ></js_autoComplete>\n                    <label class=\"error\" *ngFor=\"let error of _formService.getErrors().entityAddressObj\">{{error}}</label>\n                        </div>\n                        <ng-template\n                            [ngIf]=\"_formService.getObject().entityStreet1\"\n                            ><span>{{_formService.getObject().entityStreet1}}</span><br></ng-template><ng-template\n                            [ngIf]=\"_formService.getObject().entityStreet2\"\n                            ><span>{{_formService.getObject().entityStreet2}}</span><br></ng-template><ng-template\n                            [ngIf]=\"_formService.getObject().entityPostCode\"\n                            ><span>{{_formService.getObject().entityPostCode}} {{_formService.getObject().entityCity}}</span><br></ng-template><ng-template\n                            [ngIf]=\"_formService.getObject().entityRegion\"\n                            ><span>{{_formService.getObject().entityRegion}}</span><br></ng-template>                    </address>\n                </div>\n            </div>\n            <p class=\"mt-2\">Tax Number: {{_formService.getObject().entityTaxNumber}}</p>\n        </div>\n    </div>\n\n    <div class=\"mt-2 mb-4\">\n        <span>Comments</span>\n        <div class=\"border rounded document-comments\">                            <textarea id=\"form_comments\" name=\"form[comments]\" rows=\"3\" [(ngModel)]=\"_formService.getObject().comments\" formControlName=\"comments\" [class.error]=\"_formService.getErrors().comments &amp;&amp; _formService.getErrors().comments.length &gt; 0\" class=\"form-control\"></textarea>\n                <label class=\"error\" *ngFor=\"let error of _formService.getErrors().comments\">{{error}}</label>\n</div>\n    </div>\n\n            <section><ng-template #js_lazyLoadContainer></ng-template></section>\n    \n    <div class=\"row\">\n        <div class=\"col-sm-8\">\n            <ng-template [ngIf]=\"_dataService.getLocalDataAttr('totalVatSplitByCode')\">\n            <span>TAX Resume</span>\n            <div class=\"border rounded document-tax-resume\">\n                <table class=\"table\">\n                    <tbody>\n                    <tr>\n                        <th>Code</th>\n                        <th>Description</th>\n                        <th>Percentage</th>\n                        <th>Net</th>\n                        <th>TAX</th>\n                        <th>Total</th>\n                    </tr>\n                    <tr *ngFor=\"let obj of _dataService.getLocalDataAttr('totalVatSplitByCode')\">\n                        <td>{{ obj['name'] }}</td>\n                        <td>{{ obj['description'] }}</td>\n                        <td class=\"text-right\">{{ obj['percentage'] }}%</td>\n                        <td class=\"text-right\">{{ obj['subTotal'] }}</td>\n                        <td class=\"text-right\">{{ obj['totalVat'] }}</td>\n                        <td class=\"text-right\">{{ obj['total'] }}</td>\n                    </tr>\n                    </tbody>\n                </table>\n            </div>\n            </ng-template>\n        </div>\n        <div class=\"col-sm-4\">\n            <table class=\"table document-total\">\n                <tbody>\n                <tr>\n                    <td><strong>Sub Total:</strong></td>\n                    <td>                            <input type=\"text\" id=\"form_subTotal\" name=\"form[subTotal]\" readonly=\"readonly\" [(ngModel)]=\"_formService.getObject().subTotal\" formControlName=\"subTotal\" [class.error]=\"_formService.getErrors().subTotal &amp;&amp; _formService.getErrors().subTotal.length &gt; 0\" class=\"form-control\" value=\"0\" />\n                <label class=\"error\" *ngFor=\"let error of _formService.getErrors().subTotal\">{{error}}</label>\n</td>\n                </tr>\n                <tr>\n                    <td><strong>TAX:</strong></td>\n                    <td>                            <input type=\"text\" id=\"form_totalVat\" name=\"form[totalVat]\" readonly=\"readonly\" [(ngModel)]=\"_formService.getObject().totalVat\" formControlName=\"totalVat\" [class.error]=\"_formService.getErrors().totalVat &amp;&amp; _formService.getErrors().totalVat.length &gt; 0\" class=\"form-control\" value=\"0\" />\n                <label class=\"error\" *ngFor=\"let error of _formService.getErrors().totalVat\">{{error}}</label>\n</td>\n                </tr>\n                <tr>\n                    <td><strong>Total:</strong></td>\n                    <td>                            <input type=\"text\" id=\"form_total\" name=\"form[total]\" readonly=\"readonly\" [(ngModel)]=\"_formService.getObject().total\" formControlName=\"total\" [class.error]=\"_formService.getErrors().total &amp;&amp; _formService.getErrors().total.length &gt; 0\" class=\"form-control\" />\n                <label class=\"error\" *ngFor=\"let error of _formService.getErrors().total\">{{error}}</label>\n</td>\n                </tr>\n                </tbody>\n            </table>\n        </div>\n    </div>\n    <div *ngIf=\"_dataService.getLocalDataAttr('documentInfo') && _dataService.getLocalDataAttr('documentInfo')['footer']\"\n         class=\"mt-2 bg-light p-3\"\n         [innerHTML]=\"_dataService.getLocalDataAttr('documentInfo')['footer']\"></div>\n\n\n    \n\n    <input type=\"hidden\" id=\"form__token\" name=\"form[_token]\" value=\"cEuu0f4SXmjfjYDFXIJO4B5Hkp8dRrRxqs-vEEkwqNE\" /></form>\n\n"

/***/ }),

/***/ "../../../../../src/Bck/AccountingBundle/Resources/public/supplier-document/add/ts/templates/step3-settlement.component.html":
/***/ (function(module, exports) {

module.exports = "\n\n\n    <form name=\"form\" method=\"post\" (ngSubmit)=\"saveAction($event)\" [formGroup]=\"_formService.getForm()\" class=\"form-horizontal\">\n\n\n    \n    <div class=\"row\">\n        <div class=\"col-sm-6\">\n            <img *ngIf=\"_dataService.getLocalDataAttr('storeLogo')\"\n                 height=\"96\"\n                 alt=\"logo\"\n                 class=\"m-b-md\"\n                 [src]=\"_helperService.getUploadWebPath(_dataService.getLocalDataAttr('storeLogo'), 'resize_96')\">\n            <address>\n                <strong>{{_formService.getObject().storeLegalName}}</strong><br>\n                <ng-template\n                    [ngIf]=\"_formService.getObject().storeStreet1\"\n                    ><span>{{_formService.getObject().storeStreet1}}</span><br></ng-template><ng-template\n                    [ngIf]=\"_formService.getObject().storeStreet2\"\n                    ><span>{{_formService.getObject().storeStreet2}}</span><br></ng-template><ng-template\n                    [ngIf]=\"_formService.getObject().storePostCode\"\n                    ><span>{{_formService.getObject().storePostCode}} {{_formService.getObject().storeCity}}</span><br></ng-template><ng-template\n                    [ngIf]=\"_formService.getObject().storeRegion\"\n                    ><span>{{_formService.getObject().storeRegion}}</span><br></ng-template>            </address>\n            <ng-template ngFor let-field [ngForOf]=\"_dataService.getLocalDataAttr('storeInfo')\"><span\n                    [innerHtml]=\"field\"></span><br></ng-template>\n            <p class=\"m-t-sm\">Tax Number: {{_formService.getObject().storeTaxNumber}}</p>\n        </div>\n        <div class=\"col-sm-6\">\n            <h3 *ngIf=\"_formService.getObject().code\" class=\"document-number text-right\"><span>{{_formService.getObject().documentType_name}}:&nbsp;</span>                        <p id=\"form_code\"\n               class=\"form-control-static\"\n               [innerHTML]=\"_formService.getViewObject().code\"></p>\n                        <label class=\"error\" *ngFor=\"let error of _formService.getErrors().code\">{{error}}</label>\n</h3>\n            <table class=\"table document-dates\">\n                <tbody>\n                <tr>\n                    <td><strong>Date:</strong></td>\n                    <td>                        \n    <div class=\"input-group js_dataPicker\"\n         [datePicker]=\"'date'\"\n         #dpk_date=\"\" [control]=\"dpk_date\">\n        <input type=\"text\"\n               class=\"form-control\"\n               placeholder=\"yyyy-mm-dd\"\n               [(ngModel)]=\"_formService.getObject().date\"\n               formControlName = date\n               name=\"form[date]\"\n               required=\"required\"               [class.error]=\"_formService.getErrors()['date'] && (_formService.getErrors()['date'].length > 0)\"\n               ngbDatepicker #dpk_date=\"ngbDatepicker\">\n        <div class=\"input-group-append\">\n            <button class=\"btn\" type=\"button\"><a class=\"fa fa-calendar\"></a></button>\n        </div>\n    </div>\n    \n                <label class=\"error\" *ngFor=\"let error of _formService.getErrors().date\">{{error}}</label>\n</td>\n                </tr>\n                                </tbody>\n            </table>\n\n            <div class=\"\">\n                <span class=\"\">To:</span>\n                <div class=\"document-entity mt-1\">\n                    <span *ngIf=\"_formService.getObject().entity_avatar\"\n                          [innerHTML]=\"_formService.getViewObject().entity_avatar\" class=\"pr-1\"></span>\n                    <address>\n                        <strong>{{_formService.getObject().entityLegalName}}</strong><br>\n                        <div class=\"m-t-xs m-b-xs\">\n                                                        <input [(ngModel)]=\"_formService.getObject().entityAddressObj\"\n           formControlName = entityAddressObj\n           name=\"form[entityAddressObj]\"\n                      type=\"hidden\">\n    <js_autoComplete [field]=\"'entityAddressObj'\"\n                     [hasSelfReference]=\"_dataService.getFieldChoicesAttr('entityAddressObj', 'hasSelfReference')\"\n                                              (onChange)=\"onEntityAddressChange($event)\"[placeholder]=\"&#039;Address&#039;\"                         ></js_autoComplete>\n                    <label class=\"error\" *ngFor=\"let error of _formService.getErrors().entityAddressObj\">{{error}}</label>\n                        </div>\n                        <ng-template\n                            [ngIf]=\"_formService.getObject().entityStreet1\"\n                            ><span>{{_formService.getObject().entityStreet1}}</span><br></ng-template><ng-template\n                            [ngIf]=\"_formService.getObject().entityStreet2\"\n                            ><span>{{_formService.getObject().entityStreet2}}</span><br></ng-template><ng-template\n                            [ngIf]=\"_formService.getObject().entityPostCode\"\n                            ><span>{{_formService.getObject().entityPostCode}} {{_formService.getObject().entityCity}}</span><br></ng-template><ng-template\n                            [ngIf]=\"_formService.getObject().entityRegion\"\n                            ><span>{{_formService.getObject().entityRegion}}</span><br></ng-template>                    </address>\n                </div>\n            </div>\n            <p class=\"mt-2\">Tax Number: {{_formService.getObject().entityTaxNumber}}</p>\n        </div>\n    </div>\n\n    <div class=\"mt-2 mb-4\">\n        <span>Comments</span>\n        <div class=\"border rounded document-comments\">                            <textarea id=\"form_comments\" name=\"form[comments]\" rows=\"3\" [(ngModel)]=\"_formService.getObject().comments\" formControlName=\"comments\" [class.error]=\"_formService.getErrors().comments &amp;&amp; _formService.getErrors().comments.length &gt; 0\" class=\"form-control\"></textarea>\n                <label class=\"error\" *ngFor=\"let error of _formService.getErrors().comments\">{{error}}</label>\n</div>\n    </div>\n\n    <section><ng-template #js_lazyLoadContainer></ng-template></section>\n    <div class=\"row\"><div class=\"col-md-4 offset-md-8\">\n    <table class=\"table document-total\">\n        <tbody>\n        <tr>\n            <td><strong>DIFF:</strong></td>\n            <td><input class=\"form-control js_diffControl\"\n                       readonly=\"readonly\"\n                       type=\"text\"\n                       value=\"0\"></td>\n        </tr>        </tbody>\n    </table>\n</div></div>\n    <div *ngIf=\"_dataService.getLocalDataAttr('documentInfo') && _dataService.getLocalDataAttr('documentInfo')['footer']\"\n         class=\"mt-2 bg-light p-3\"\n         [innerHTML]=\"_dataService.getLocalDataAttr('documentInfo')['footer']\"></div>\n\n\n    \n\n    <input type=\"hidden\" id=\"form__token\" name=\"form[_token]\" value=\"cEuu0f4SXmjfjYDFXIJO4B5Hkp8dRrRxqs-vEEkwqNE\" /></form>\n\n"

/***/ }),

/***/ "../../../../../src/Bck/AccountingBundle/Resources/public/supplier-document/edit/ts/src/form-popup.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FormPopupComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__AppBundle_Resources_public_modal_ts_base_modal_popup__ = __webpack_require__("../../../../../src/AppBundle/Resources/public/modal/ts/base-modal-popup.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__AppBundle_Resources_public_ts_dynamic_component_loader_service__ = __webpack_require__("../../../../../src/AppBundle/Resources/public/ts/dynamic-component-loader.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__invoice_form_popup_ext_module__ = __webpack_require__("../../../../../src/Bck/AccountingBundle/Resources/public/supplier-document/edit/ts/src/invoice-form-popup.ext-module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__invoice_rectification_form_popup_ext_module__ = __webpack_require__("../../../../../src/Bck/AccountingBundle/Resources/public/supplier-document/edit/ts/src/invoice-rectification-form-popup.ext-module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__receipt_form_popup_ext_module__ = __webpack_require__("../../../../../src/Bck/AccountingBundle/Resources/public/supplier-document/edit/ts/src/receipt-form-popup.ext-module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__receipt_payment_form_popup_ext_module__ = __webpack_require__("../../../../../src/Bck/AccountingBundle/Resources/public/supplier-document/edit/ts/src/receipt-payment-form-popup.ext-module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__receipt_settlement_form_popup_ext_module__ = __webpack_require__("../../../../../src/Bck/AccountingBundle/Resources/public/supplier-document/edit/ts/src/receipt-settlement-form-popup.ext-module.ts");
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
// INVOICE

// RECTIFICATION

// RECEIPT

// PAYMENT

// SETTLEMENT

/* /Import dependencies */
var FormPopupComponent = (function (_super) {
    __extends(FormPopupComponent, _super);
    function FormPopupComponent(elementRef, renderer, _dynamicComponentLoaderService, _injector, _dataService) {
        var _this = _super.call(this, elementRef, renderer, null) || this;
        _this._dynamicComponentLoaderService = _dynamicComponentLoaderService;
        _this._injector = _injector;
        _this._dataService = _dataService;
        return _this;
    }
    /**
     * Lifecycle callback
     */
    FormPopupComponent.prototype.ngAfterViewInit = function () {
        var that = this, documentType = (this._dataService.getObject()['documentType_type'] || null), module = null, component = null;
        // Determine context
        switch (documentType) {
            case 'RECTIFICATION':
                module = __WEBPACK_IMPORTED_MODULE_4__invoice_rectification_form_popup_ext_module__["a" /* InvoiceRectificationFormPopupExtModule */];
                component = 'InvoiceRectificationFormPopupComponent';
                break;
            case 'RECEIPT':
                module = __WEBPACK_IMPORTED_MODULE_5__receipt_form_popup_ext_module__["a" /* ReceiptFormPopupExtModule */];
                component = 'ReceiptFormPopupComponent';
                break;
            case 'PAYMENT':
                module = __WEBPACK_IMPORTED_MODULE_6__receipt_payment_form_popup_ext_module__["a" /* ReceiptPaymentFormPopupExtModule */];
                component = 'ReceiptPaymentFormPopupComponent';
                break;
            case 'SETTLEMENT':
                module = __WEBPACK_IMPORTED_MODULE_7__receipt_settlement_form_popup_ext_module__["a" /* ReceiptSettlementFormPopupExtModule */];
                component = 'ReceiptSettlementFormPopupComponent';
                break;
            default:// INVOICE
                module = __WEBPACK_IMPORTED_MODULE_3__invoice_form_popup_ext_module__["a" /* InvoiceFormPopupExtModule */];
                component = 'InvoiceFormPopupComponent';
        }
        // Load dependency
        this._dynamicComponentLoaderService.load(module, component, this.lazyLoadViewContainerRef, this._injector).then(function (componentRef) {
            that._onDependencyDismissSubscription = componentRef.instance.onDismissEmitter.subscribe(function (data) {
                // Close popup
                that.closeAction();
            });
            return true;
        }, function (errors) {
            console.log(errors);
            return null;
        });
    };
    /**
     * Lifecycle callback
     */
    FormPopupComponent.prototype.ngOnDestroy = function () {
        // At this time, the component subscription is already destroyed, so does not need to unsubscribe.
        if (this._onDependencyDismissSubscription) {
            this._onDependencyDismissSubscription.unsubscribe();
        }
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_7" /* ViewChild */])('js_lazyLoadContainer', { read: __WEBPACK_IMPORTED_MODULE_0__angular_core__["_9" /* ViewContainerRef */] }),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["_9" /* ViewContainerRef */])
    ], FormPopupComponent.prototype, "lazyLoadViewContainerRef", void 0);
    FormPopupComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: '.js_documentEditFormPopup',
            template: "<ng-template #js_lazyLoadContainer></ng-template>"
        }),
        __param(4, Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["y" /* Inject */])('DataService')),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_core__["t" /* ElementRef */],
            __WEBPACK_IMPORTED_MODULE_0__angular_core__["U" /* Renderer */],
            __WEBPACK_IMPORTED_MODULE_2__AppBundle_Resources_public_ts_dynamic_component_loader_service__["a" /* DynamicComponentLoaderService */],
            __WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Injector */], Object])
    ], FormPopupComponent);
    return FormPopupComponent;
}(__WEBPACK_IMPORTED_MODULE_1__AppBundle_Resources_public_modal_ts_base_modal_popup__["a" /* BaseModalPopup */]));



/***/ }),

/***/ "../../../../../src/Bck/AccountingBundle/Resources/public/supplier-document/edit/ts/src/form-popup.ext-module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FormPopupExtModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("../../../common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ng_bootstrap_ng_bootstrap__ = __webpack_require__("../../../../@ng-bootstrap/ng-bootstrap/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__AppBundle_Resources_public_form_ts_field_types_field_types_extension_module__ = __webpack_require__("../../../../../src/AppBundle/Resources/public/form/ts/field-types/field-types.extension-module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__form_popup_component__ = __webpack_require__("../../../../../src/Bck/AccountingBundle/Resources/public/supplier-document/edit/ts/src/form-popup.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






var FormPopupExtModule = (function () {
    function FormPopupExtModule() {
    }
    FormPopupExtModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["H" /* NgModule */])({
            imports: [__WEBPACK_IMPORTED_MODULE_1__angular_common__["a" /* CommonModule */], __WEBPACK_IMPORTED_MODULE_2__angular_forms__["b" /* FormsModule */], __WEBPACK_IMPORTED_MODULE_2__angular_forms__["e" /* ReactiveFormsModule */], __WEBPACK_IMPORTED_MODULE_3__ng_bootstrap_ng_bootstrap__["a" /* NgbModule */], __WEBPACK_IMPORTED_MODULE_4__AppBundle_Resources_public_form_ts_field_types_field_types_extension_module__["a" /* FieldTypesExtensionModule */]],
            declarations: [
                __WEBPACK_IMPORTED_MODULE_5__form_popup_component__["a" /* FormPopupComponent */]
            ],
            exports: [__WEBPACK_IMPORTED_MODULE_5__form_popup_component__["a" /* FormPopupComponent */]]
        })
    ], FormPopupExtModule);
    return FormPopupExtModule;
}());



/***/ }),

/***/ "../../../../../src/Bck/AccountingBundle/Resources/public/supplier-document/edit/ts/src/invoice-form-popup.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return InvoiceFormPopupComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__AppBundle_Resources_public_form_ts_form_service__ = __webpack_require__("../../../../../src/AppBundle/Resources/public/form/ts/form.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__AppBundle_Resources_public_ts_dynamic_component_loader_service__ = __webpack_require__("../../../../../src/AppBundle/Resources/public/ts/dynamic-component-loader.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__AppBundle_Resources_public_ts_post_service__ = __webpack_require__("../../../../../src/AppBundle/Resources/public/ts/post.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ts_base_invoice_document_form_popup_ext_component__ = __webpack_require__("../../../../../src/Bck/AccountingBundle/Resources/public/supplier-document/ts/base-invoice-document-form-popup.ext-component.ts");
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





var InvoiceFormPopupComponent = (function (_super) {
    __extends(InvoiceFormPopupComponent, _super);
    function InvoiceFormPopupComponent(elementRef, renderer, provider, formService, dataService, injector, parentDataService, helperService, dynamicComponentLoaderService, postService) {
        var _this = _super.call(this) || this;
        _super.prototype.initBaseInvoiceDocumentFormPopupExtComponent.call(_this, elementRef, renderer, provider, formService, dataService, injector, parentDataService, helperService, dynamicComponentLoaderService, postService);
        return _this;
    }
    InvoiceFormPopupComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: '.js_documentEditFormPopup',
            template: __webpack_require__("../../../../../src/Bck/AccountingBundle/Resources/public/supplier-document/edit/ts/templates/invoice-form-popup.component.html")
        }),
        __param(2, Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["y" /* Inject */])('Provider')),
        __param(4, Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["y" /* Inject */])('DataService')),
        __param(6, Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["y" /* Inject */])('ParentDataService')),
        __param(7, Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["y" /* Inject */])('HelperService')),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_core__["t" /* ElementRef */],
            __WEBPACK_IMPORTED_MODULE_0__angular_core__["U" /* Renderer */], Object, __WEBPACK_IMPORTED_MODULE_1__AppBundle_Resources_public_form_ts_form_service__["a" /* FormService */], Object, __WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Injector */], Object, Object, __WEBPACK_IMPORTED_MODULE_2__AppBundle_Resources_public_ts_dynamic_component_loader_service__["a" /* DynamicComponentLoaderService */],
            __WEBPACK_IMPORTED_MODULE_3__AppBundle_Resources_public_ts_post_service__["a" /* PostService */]])
    ], InvoiceFormPopupComponent);
    return InvoiceFormPopupComponent;
}(__WEBPACK_IMPORTED_MODULE_4__ts_base_invoice_document_form_popup_ext_component__["a" /* BaseInvoiceDocumentFormPopupExtComponent */]));



/***/ }),

/***/ "../../../../../src/Bck/AccountingBundle/Resources/public/supplier-document/edit/ts/src/invoice-form-popup.ext-module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return InvoiceFormPopupExtModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("../../../common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ng_bootstrap_ng_bootstrap__ = __webpack_require__("../../../../@ng-bootstrap/ng-bootstrap/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__AppBundle_Resources_public_form_ts_field_types_field_types_extension_module__ = __webpack_require__("../../../../../src/AppBundle/Resources/public/form/ts/field-types/field-types.extension-module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__invoice_form_popup_component__ = __webpack_require__("../../../../../src/Bck/AccountingBundle/Resources/public/supplier-document/edit/ts/src/invoice-form-popup.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






var InvoiceFormPopupExtModule = (function () {
    function InvoiceFormPopupExtModule() {
    }
    InvoiceFormPopupExtModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["H" /* NgModule */])({
            imports: [__WEBPACK_IMPORTED_MODULE_1__angular_common__["a" /* CommonModule */], __WEBPACK_IMPORTED_MODULE_2__angular_forms__["b" /* FormsModule */], __WEBPACK_IMPORTED_MODULE_2__angular_forms__["e" /* ReactiveFormsModule */], __WEBPACK_IMPORTED_MODULE_3__ng_bootstrap_ng_bootstrap__["a" /* NgbModule */], __WEBPACK_IMPORTED_MODULE_4__AppBundle_Resources_public_form_ts_field_types_field_types_extension_module__["a" /* FieldTypesExtensionModule */]],
            declarations: [
                __WEBPACK_IMPORTED_MODULE_5__invoice_form_popup_component__["a" /* InvoiceFormPopupComponent */]
            ],
            exports: [__WEBPACK_IMPORTED_MODULE_5__invoice_form_popup_component__["a" /* InvoiceFormPopupComponent */]]
        })
    ], InvoiceFormPopupExtModule);
    return InvoiceFormPopupExtModule;
}());



/***/ }),

/***/ "../../../../../src/Bck/AccountingBundle/Resources/public/supplier-document/edit/ts/src/invoice-rectification-form-popup.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return InvoiceRectificationFormPopupComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__AppBundle_Resources_public_form_ts_form_service__ = __webpack_require__("../../../../../src/AppBundle/Resources/public/form/ts/form.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__AppBundle_Resources_public_ts_dynamic_component_loader_service__ = __webpack_require__("../../../../../src/AppBundle/Resources/public/ts/dynamic-component-loader.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__AppBundle_Resources_public_ts_post_service__ = __webpack_require__("../../../../../src/AppBundle/Resources/public/ts/post.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ts_base_invoice_rectification_document_form_popup_ext_component__ = __webpack_require__("../../../../../src/Bck/AccountingBundle/Resources/public/supplier-document/ts/base-invoice-rectification-document-form-popup.ext-component.ts");
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





var InvoiceRectificationFormPopupComponent = (function (_super) {
    __extends(InvoiceRectificationFormPopupComponent, _super);
    function InvoiceRectificationFormPopupComponent(elementRef, renderer, provider, formService, dataService, injector, parentDataService, helperService, dynamicComponentLoaderService, postService) {
        var _this = _super.call(this) || this;
        _super.prototype.initBaseInvoiceRectificationDocumentFormPopupExtComponent.call(_this, elementRef, renderer, provider, formService, dataService, injector, parentDataService, helperService, dynamicComponentLoaderService, postService);
        return _this;
    }
    InvoiceRectificationFormPopupComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: '.js_documentEditFormPopup',
            template: __webpack_require__("../../../../../src/Bck/AccountingBundle/Resources/public/supplier-document/edit/ts/templates/invoice-rectification-form-popup.component.html")
        }),
        __param(2, Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["y" /* Inject */])('Provider')),
        __param(4, Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["y" /* Inject */])('DataService')),
        __param(6, Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["y" /* Inject */])('ParentDataService')),
        __param(7, Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["y" /* Inject */])('HelperService')),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_core__["t" /* ElementRef */],
            __WEBPACK_IMPORTED_MODULE_0__angular_core__["U" /* Renderer */], Object, __WEBPACK_IMPORTED_MODULE_1__AppBundle_Resources_public_form_ts_form_service__["a" /* FormService */], Object, __WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Injector */], Object, Object, __WEBPACK_IMPORTED_MODULE_2__AppBundle_Resources_public_ts_dynamic_component_loader_service__["a" /* DynamicComponentLoaderService */],
            __WEBPACK_IMPORTED_MODULE_3__AppBundle_Resources_public_ts_post_service__["a" /* PostService */]])
    ], InvoiceRectificationFormPopupComponent);
    return InvoiceRectificationFormPopupComponent;
}(__WEBPACK_IMPORTED_MODULE_4__ts_base_invoice_rectification_document_form_popup_ext_component__["a" /* BaseInvoiceRectificationDocumentFormPopupExtComponent */]));



/***/ }),

/***/ "../../../../../src/Bck/AccountingBundle/Resources/public/supplier-document/edit/ts/src/invoice-rectification-form-popup.ext-module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return InvoiceRectificationFormPopupExtModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("../../../common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ng_bootstrap_ng_bootstrap__ = __webpack_require__("../../../../@ng-bootstrap/ng-bootstrap/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__AppBundle_Resources_public_form_ts_field_types_field_types_extension_module__ = __webpack_require__("../../../../../src/AppBundle/Resources/public/form/ts/field-types/field-types.extension-module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__invoice_rectification_form_popup_component__ = __webpack_require__("../../../../../src/Bck/AccountingBundle/Resources/public/supplier-document/edit/ts/src/invoice-rectification-form-popup.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






var InvoiceRectificationFormPopupExtModule = (function () {
    function InvoiceRectificationFormPopupExtModule() {
    }
    InvoiceRectificationFormPopupExtModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["H" /* NgModule */])({
            imports: [__WEBPACK_IMPORTED_MODULE_1__angular_common__["a" /* CommonModule */], __WEBPACK_IMPORTED_MODULE_2__angular_forms__["b" /* FormsModule */], __WEBPACK_IMPORTED_MODULE_2__angular_forms__["e" /* ReactiveFormsModule */], __WEBPACK_IMPORTED_MODULE_3__ng_bootstrap_ng_bootstrap__["a" /* NgbModule */], __WEBPACK_IMPORTED_MODULE_4__AppBundle_Resources_public_form_ts_field_types_field_types_extension_module__["a" /* FieldTypesExtensionModule */]],
            declarations: [
                __WEBPACK_IMPORTED_MODULE_5__invoice_rectification_form_popup_component__["a" /* InvoiceRectificationFormPopupComponent */]
            ],
            exports: [__WEBPACK_IMPORTED_MODULE_5__invoice_rectification_form_popup_component__["a" /* InvoiceRectificationFormPopupComponent */]]
        })
    ], InvoiceRectificationFormPopupExtModule);
    return InvoiceRectificationFormPopupExtModule;
}());



/***/ }),

/***/ "../../../../../src/Bck/AccountingBundle/Resources/public/supplier-document/edit/ts/src/receipt-form-popup.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ReceiptFormPopupComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__AppBundle_Resources_public_form_ts_form_service__ = __webpack_require__("../../../../../src/AppBundle/Resources/public/form/ts/form.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__AppBundle_Resources_public_ts_dynamic_component_loader_service__ = __webpack_require__("../../../../../src/AppBundle/Resources/public/ts/dynamic-component-loader.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__AppBundle_Resources_public_ts_post_service__ = __webpack_require__("../../../../../src/AppBundle/Resources/public/ts/post.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ts_base_receipt_document_form_popup_ext_component__ = __webpack_require__("../../../../../src/Bck/AccountingBundle/Resources/public/supplier-document/ts/base-receipt-document-form-popup.ext-component.ts");
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





var ReceiptFormPopupComponent = (function (_super) {
    __extends(ReceiptFormPopupComponent, _super);
    function ReceiptFormPopupComponent(elementRef, renderer, provider, formService, dataService, injector, parentDataService, helperService, dynamicComponentLoaderService, postService) {
        var _this = _super.call(this) || this;
        _super.prototype.initBaseReceiptDocumentFormPopupExtComponent.call(_this, elementRef, renderer, provider, formService, dataService, injector, parentDataService, helperService, dynamicComponentLoaderService, postService);
        return _this;
    }
    ReceiptFormPopupComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: '.js_documentEditFormPopup',
            template: __webpack_require__("../../../../../src/Bck/AccountingBundle/Resources/public/supplier-document/edit/ts/templates/receipt-form-popup.component.html")
        }),
        __param(2, Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["y" /* Inject */])('Provider')),
        __param(4, Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["y" /* Inject */])('DataService')),
        __param(6, Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["y" /* Inject */])('ParentDataService')),
        __param(7, Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["y" /* Inject */])('HelperService')),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_core__["t" /* ElementRef */],
            __WEBPACK_IMPORTED_MODULE_0__angular_core__["U" /* Renderer */], Object, __WEBPACK_IMPORTED_MODULE_1__AppBundle_Resources_public_form_ts_form_service__["a" /* FormService */], Object, __WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Injector */], Object, Object, __WEBPACK_IMPORTED_MODULE_2__AppBundle_Resources_public_ts_dynamic_component_loader_service__["a" /* DynamicComponentLoaderService */],
            __WEBPACK_IMPORTED_MODULE_3__AppBundle_Resources_public_ts_post_service__["a" /* PostService */]])
    ], ReceiptFormPopupComponent);
    return ReceiptFormPopupComponent;
}(__WEBPACK_IMPORTED_MODULE_4__ts_base_receipt_document_form_popup_ext_component__["a" /* BaseReceiptDocumentFormPopupExtComponent */]));



/***/ }),

/***/ "../../../../../src/Bck/AccountingBundle/Resources/public/supplier-document/edit/ts/src/receipt-form-popup.ext-module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ReceiptFormPopupExtModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("../../../common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ng_bootstrap_ng_bootstrap__ = __webpack_require__("../../../../@ng-bootstrap/ng-bootstrap/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__AppBundle_Resources_public_form_ts_field_types_field_types_extension_module__ = __webpack_require__("../../../../../src/AppBundle/Resources/public/form/ts/field-types/field-types.extension-module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__receipt_form_popup_component__ = __webpack_require__("../../../../../src/Bck/AccountingBundle/Resources/public/supplier-document/edit/ts/src/receipt-form-popup.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






var ReceiptFormPopupExtModule = (function () {
    function ReceiptFormPopupExtModule() {
    }
    ReceiptFormPopupExtModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["H" /* NgModule */])({
            imports: [__WEBPACK_IMPORTED_MODULE_1__angular_common__["a" /* CommonModule */], __WEBPACK_IMPORTED_MODULE_2__angular_forms__["b" /* FormsModule */], __WEBPACK_IMPORTED_MODULE_2__angular_forms__["e" /* ReactiveFormsModule */], __WEBPACK_IMPORTED_MODULE_3__ng_bootstrap_ng_bootstrap__["a" /* NgbModule */], __WEBPACK_IMPORTED_MODULE_4__AppBundle_Resources_public_form_ts_field_types_field_types_extension_module__["a" /* FieldTypesExtensionModule */]],
            declarations: [
                __WEBPACK_IMPORTED_MODULE_5__receipt_form_popup_component__["a" /* ReceiptFormPopupComponent */]
            ],
            exports: [__WEBPACK_IMPORTED_MODULE_5__receipt_form_popup_component__["a" /* ReceiptFormPopupComponent */]]
        })
    ], ReceiptFormPopupExtModule);
    return ReceiptFormPopupExtModule;
}());



/***/ }),

/***/ "../../../../../src/Bck/AccountingBundle/Resources/public/supplier-document/edit/ts/src/receipt-payment-form-popup.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ReceiptPaymentFormPopupComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__AppBundle_Resources_public_form_ts_form_service__ = __webpack_require__("../../../../../src/AppBundle/Resources/public/form/ts/form.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__AppBundle_Resources_public_ts_dynamic_component_loader_service__ = __webpack_require__("../../../../../src/AppBundle/Resources/public/ts/dynamic-component-loader.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__AppBundle_Resources_public_ts_post_service__ = __webpack_require__("../../../../../src/AppBundle/Resources/public/ts/post.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__supplier_document_ts_base_receipt_payment_document_form_popup_ext_component__ = __webpack_require__("../../../../../src/Bck/AccountingBundle/Resources/public/supplier-document/ts/base-receipt-payment-document-form-popup.ext-component.ts");
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





var ReceiptPaymentFormPopupComponent = (function (_super) {
    __extends(ReceiptPaymentFormPopupComponent, _super);
    function ReceiptPaymentFormPopupComponent(elementRef, renderer, provider, formService, dataService, injector, parentDataService, helperService, dynamicComponentLoaderService, postService) {
        var _this = _super.call(this) || this;
        _super.prototype.initBaseReceiptPaymentDocumentFormPopupExtComponent.call(_this, elementRef, renderer, provider, formService, dataService, injector, parentDataService, helperService, dynamicComponentLoaderService, postService);
        return _this;
    }
    ReceiptPaymentFormPopupComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: '.js_documentEditFormPopup',
            template: __webpack_require__("../../../../../src/Bck/AccountingBundle/Resources/public/supplier-document/edit/ts/templates/receipt-payment-form-popup.component.html")
        }),
        __param(2, Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["y" /* Inject */])('Provider')),
        __param(4, Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["y" /* Inject */])('DataService')),
        __param(6, Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["y" /* Inject */])('ParentDataService')),
        __param(7, Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["y" /* Inject */])('HelperService')),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_core__["t" /* ElementRef */],
            __WEBPACK_IMPORTED_MODULE_0__angular_core__["U" /* Renderer */], Object, __WEBPACK_IMPORTED_MODULE_1__AppBundle_Resources_public_form_ts_form_service__["a" /* FormService */], Object, __WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Injector */], Object, Object, __WEBPACK_IMPORTED_MODULE_2__AppBundle_Resources_public_ts_dynamic_component_loader_service__["a" /* DynamicComponentLoaderService */],
            __WEBPACK_IMPORTED_MODULE_3__AppBundle_Resources_public_ts_post_service__["a" /* PostService */]])
    ], ReceiptPaymentFormPopupComponent);
    return ReceiptPaymentFormPopupComponent;
}(__WEBPACK_IMPORTED_MODULE_4__supplier_document_ts_base_receipt_payment_document_form_popup_ext_component__["a" /* BaseReceiptPaymentDocumentFormPopupExtComponent */]));



/***/ }),

/***/ "../../../../../src/Bck/AccountingBundle/Resources/public/supplier-document/edit/ts/src/receipt-payment-form-popup.ext-module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ReceiptPaymentFormPopupExtModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("../../../common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ng_bootstrap_ng_bootstrap__ = __webpack_require__("../../../../@ng-bootstrap/ng-bootstrap/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__AppBundle_Resources_public_form_ts_field_types_field_types_extension_module__ = __webpack_require__("../../../../../src/AppBundle/Resources/public/form/ts/field-types/field-types.extension-module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__receipt_payment_form_popup_component__ = __webpack_require__("../../../../../src/Bck/AccountingBundle/Resources/public/supplier-document/edit/ts/src/receipt-payment-form-popup.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






var ReceiptPaymentFormPopupExtModule = (function () {
    function ReceiptPaymentFormPopupExtModule() {
    }
    ReceiptPaymentFormPopupExtModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["H" /* NgModule */])({
            imports: [__WEBPACK_IMPORTED_MODULE_1__angular_common__["a" /* CommonModule */], __WEBPACK_IMPORTED_MODULE_2__angular_forms__["b" /* FormsModule */], __WEBPACK_IMPORTED_MODULE_2__angular_forms__["e" /* ReactiveFormsModule */], __WEBPACK_IMPORTED_MODULE_3__ng_bootstrap_ng_bootstrap__["a" /* NgbModule */], __WEBPACK_IMPORTED_MODULE_4__AppBundle_Resources_public_form_ts_field_types_field_types_extension_module__["a" /* FieldTypesExtensionModule */]],
            declarations: [
                __WEBPACK_IMPORTED_MODULE_5__receipt_payment_form_popup_component__["a" /* ReceiptPaymentFormPopupComponent */]
            ],
            exports: [__WEBPACK_IMPORTED_MODULE_5__receipt_payment_form_popup_component__["a" /* ReceiptPaymentFormPopupComponent */]]
        })
    ], ReceiptPaymentFormPopupExtModule);
    return ReceiptPaymentFormPopupExtModule;
}());



/***/ }),

/***/ "../../../../../src/Bck/AccountingBundle/Resources/public/supplier-document/edit/ts/src/receipt-settlement-form-popup.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ReceiptSettlementFormPopupComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__AppBundle_Resources_public_form_ts_form_service__ = __webpack_require__("../../../../../src/AppBundle/Resources/public/form/ts/form.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__AppBundle_Resources_public_ts_dynamic_component_loader_service__ = __webpack_require__("../../../../../src/AppBundle/Resources/public/ts/dynamic-component-loader.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__AppBundle_Resources_public_ts_post_service__ = __webpack_require__("../../../../../src/AppBundle/Resources/public/ts/post.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__supplier_document_ts_base_receipt_settlement_document_form_popup_ext_component__ = __webpack_require__("../../../../../src/Bck/AccountingBundle/Resources/public/supplier-document/ts/base-receipt-settlement-document-form-popup.ext-component.ts");
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





var ReceiptSettlementFormPopupComponent = (function (_super) {
    __extends(ReceiptSettlementFormPopupComponent, _super);
    function ReceiptSettlementFormPopupComponent(elementRef, renderer, provider, formService, dataService, injector, parentDataService, helperService, dynamicComponentLoaderService, postService) {
        var _this = _super.call(this) || this;
        _super.prototype.initBaseReceiptSettlementDocumentFormPopupExtComponent.call(_this, elementRef, renderer, provider, formService, dataService, injector, parentDataService, helperService, dynamicComponentLoaderService, postService);
        return _this;
    }
    ReceiptSettlementFormPopupComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: '.js_documentEditFormPopup',
            template: __webpack_require__("../../../../../src/Bck/AccountingBundle/Resources/public/supplier-document/edit/ts/templates/receipt-settlement-form-popup.component.html")
        }),
        __param(2, Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["y" /* Inject */])('Provider')),
        __param(4, Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["y" /* Inject */])('DataService')),
        __param(6, Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["y" /* Inject */])('ParentDataService')),
        __param(7, Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["y" /* Inject */])('HelperService')),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_core__["t" /* ElementRef */],
            __WEBPACK_IMPORTED_MODULE_0__angular_core__["U" /* Renderer */], Object, __WEBPACK_IMPORTED_MODULE_1__AppBundle_Resources_public_form_ts_form_service__["a" /* FormService */], Object, __WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Injector */], Object, Object, __WEBPACK_IMPORTED_MODULE_2__AppBundle_Resources_public_ts_dynamic_component_loader_service__["a" /* DynamicComponentLoaderService */],
            __WEBPACK_IMPORTED_MODULE_3__AppBundle_Resources_public_ts_post_service__["a" /* PostService */]])
    ], ReceiptSettlementFormPopupComponent);
    return ReceiptSettlementFormPopupComponent;
}(__WEBPACK_IMPORTED_MODULE_4__supplier_document_ts_base_receipt_settlement_document_form_popup_ext_component__["a" /* BaseReceiptSettlementDocumentFormPopupExtComponent */]));



/***/ }),

/***/ "../../../../../src/Bck/AccountingBundle/Resources/public/supplier-document/edit/ts/src/receipt-settlement-form-popup.ext-module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ReceiptSettlementFormPopupExtModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("../../../common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ng_bootstrap_ng_bootstrap__ = __webpack_require__("../../../../@ng-bootstrap/ng-bootstrap/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__AppBundle_Resources_public_form_ts_field_types_field_types_extension_module__ = __webpack_require__("../../../../../src/AppBundle/Resources/public/form/ts/field-types/field-types.extension-module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__receipt_settlement_form_popup_component__ = __webpack_require__("../../../../../src/Bck/AccountingBundle/Resources/public/supplier-document/edit/ts/src/receipt-settlement-form-popup.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






var ReceiptSettlementFormPopupExtModule = (function () {
    function ReceiptSettlementFormPopupExtModule() {
    }
    ReceiptSettlementFormPopupExtModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["H" /* NgModule */])({
            imports: [__WEBPACK_IMPORTED_MODULE_1__angular_common__["a" /* CommonModule */], __WEBPACK_IMPORTED_MODULE_2__angular_forms__["b" /* FormsModule */], __WEBPACK_IMPORTED_MODULE_2__angular_forms__["e" /* ReactiveFormsModule */], __WEBPACK_IMPORTED_MODULE_3__ng_bootstrap_ng_bootstrap__["a" /* NgbModule */], __WEBPACK_IMPORTED_MODULE_4__AppBundle_Resources_public_form_ts_field_types_field_types_extension_module__["a" /* FieldTypesExtensionModule */]],
            declarations: [
                __WEBPACK_IMPORTED_MODULE_5__receipt_settlement_form_popup_component__["a" /* ReceiptSettlementFormPopupComponent */]
            ],
            exports: [__WEBPACK_IMPORTED_MODULE_5__receipt_settlement_form_popup_component__["a" /* ReceiptSettlementFormPopupComponent */]]
        })
    ], ReceiptSettlementFormPopupExtModule);
    return ReceiptSettlementFormPopupExtModule;
}());



/***/ }),

/***/ "../../../../../src/Bck/AccountingBundle/Resources/public/supplier-document/edit/ts/templates/invoice-form-popup.component.html":
/***/ (function(module, exports) {

module.exports = "    \n    <form name=\"form\" method=\"post\" (ngSubmit)=\"saveAction($event)\" [formGroup]=\"_formService.getForm()\" class=\"form-horizontal\">\n<div class=\"modal-header\">\n    <div class=\"row align-items-center\">\n        <h3 class=\"col-auto mr-auto modal-title\">Form&nbsp;{{getProviderAttr('label')}}<small>&nbsp;({{(_formService && _formService.getObject() && _formService.getObject().id) ? 'edit' : 'add'}})</small></h3>\n        <div class=\"col-auto text-right actions\"><a\n                class=\"-round fa fa-times\"\n                (click)=\"closeAction($event)\"></a></div>\n    </div>\n</div>\n<div class=\"modal-body\">\n    <div class=\"row\">\n        <div class=\"col-12\">\n    \n    <div class=\"row\">\n        <div class=\"col-sm-6\">\n            <img *ngIf=\"_dataService.getLocalDataAttr('storeLogo')\"\n                 height=\"96\"\n                 alt=\"logo\"\n                 class=\"m-b-md\"\n                 [src]=\"_helperService.getUploadWebPath(_dataService.getLocalDataAttr('storeLogo'), 'resize_96')\">\n            <address>\n                <strong>{{_formService.getObject().storeLegalName}}</strong><br>\n                <ng-template\n                    [ngIf]=\"_formService.getObject().storeStreet1\"\n                    ><span>{{_formService.getObject().storeStreet1}}</span><br></ng-template><ng-template\n                    [ngIf]=\"_formService.getObject().storeStreet2\"\n                    ><span>{{_formService.getObject().storeStreet2}}</span><br></ng-template><ng-template\n                    [ngIf]=\"_formService.getObject().storePostCode\"\n                    ><span>{{_formService.getObject().storePostCode}} {{_formService.getObject().storeCity}}</span><br></ng-template><ng-template\n                    [ngIf]=\"_formService.getObject().storeRegion\"\n                    ><span>{{_formService.getObject().storeRegion}}</span><br></ng-template>            </address>\n            <ng-template ngFor let-field [ngForOf]=\"_dataService.getLocalDataAttr('storeInfo')\"><span\n                    [innerHtml]=\"field\"></span><br></ng-template>\n            <p class=\"m-t-sm\">Tax Number: {{_formService.getObject().storeTaxNumber}}</p>\n        </div>\n        <div class=\"col-sm-6\">\n            <h3 *ngIf=\"_formService.getObject().code\" class=\"document-number text-right\"><span>{{_formService.getObject().documentType_name}}:&nbsp;</span>                        <p id=\"form_code\"\n               class=\"form-control-static\"\n               [innerHTML]=\"_formService.getViewObject().code\"></p>\n                        <label class=\"error\" *ngFor=\"let error of _formService.getErrors().code\">{{error}}</label>\n</h3>\n            <table class=\"table document-dates\">\n                <tbody>\n                <tr>\n                    <td><strong>Date:</strong></td>\n                    <td>                        \n    <div class=\"input-group js_dataPicker\"\n         [datePicker]=\"'date'\"\n         #dpk_date=\"\" [control]=\"dpk_date\">\n        <input type=\"text\"\n               class=\"form-control\"\n               placeholder=\"yyyy-mm-dd\"\n               [(ngModel)]=\"_formService.getObject().date\"\n               formControlName = date\n               name=\"form[date]\"\n               required=\"required\"               [class.error]=\"_formService.getErrors()['date'] && (_formService.getErrors()['date'].length > 0)\"\n               ngbDatepicker #dpk_date=\"ngbDatepicker\">\n        <div class=\"input-group-append\">\n            <button class=\"btn\" type=\"button\"><a class=\"fa fa-calendar\"></a></button>\n        </div>\n    </div>\n    \n                <label class=\"error\" *ngFor=\"let error of _formService.getErrors().date\">{{error}}</label>\n</td>\n                </tr>\n                <tr>\n                    <td><strong>Due Date:</strong></td>\n                    <td>                        \n    <div class=\"input-group js_dataPicker\"\n         [datePicker]=\"'dueDate'\"\n         #dpk_dueDate=\"\" [control]=\"dpk_dueDate\">\n        <input type=\"text\"\n               class=\"form-control\"\n               placeholder=\"yyyy-mm-dd\"\n               [(ngModel)]=\"_formService.getObject().dueDate\"\n               formControlName = dueDate\n               name=\"form[dueDate]\"\n               required=\"required\"               [class.error]=\"_formService.getErrors()['dueDate'] && (_formService.getErrors()['dueDate'].length > 0)\"\n               ngbDatepicker #dpk_dueDate=\"ngbDatepicker\">\n        <div class=\"input-group-append\">\n            <button class=\"btn\" type=\"button\"><a class=\"fa fa-calendar\"></a></button>\n        </div>\n    </div>\n    \n                <label class=\"error\" *ngFor=\"let error of _formService.getErrors().dueDate\">{{error}}</label>\n</td>\n                </tr>                </tbody>\n            </table>\n\n            <div class=\"\">\n                <span class=\"\">To:</span>\n                <div class=\"document-entity mt-1\">\n                    <span *ngIf=\"_formService.getObject().entity_avatar\"\n                          [innerHTML]=\"_formService.getViewObject().entity_avatar\" class=\"pr-1\"></span>\n                    <address>\n                        <strong>{{_formService.getObject().entityLegalName}}</strong><br>\n                        <div class=\"m-t-xs m-b-xs\">\n                                                        <input [(ngModel)]=\"_formService.getObject().entityAddressObj\"\n           formControlName = entityAddressObj\n           name=\"form[entityAddressObj]\"\n                      type=\"hidden\">\n    <js_autoComplete [field]=\"'entityAddressObj'\"\n                     [hasSelfReference]=\"_dataService.getFieldChoicesAttr('entityAddressObj', 'hasSelfReference')\"\n                                              (onChange)=\"onEntityAddressChange($event)\"[placeholder]=\"&#039;Address&#039;\"                         ></js_autoComplete>\n                    <label class=\"error\" *ngFor=\"let error of _formService.getErrors().entityAddressObj\">{{error}}</label>\n                        </div>\n                        <ng-template\n                            [ngIf]=\"_formService.getObject().entityStreet1\"\n                            ><span>{{_formService.getObject().entityStreet1}}</span><br></ng-template><ng-template\n                            [ngIf]=\"_formService.getObject().entityStreet2\"\n                            ><span>{{_formService.getObject().entityStreet2}}</span><br></ng-template><ng-template\n                            [ngIf]=\"_formService.getObject().entityPostCode\"\n                            ><span>{{_formService.getObject().entityPostCode}} {{_formService.getObject().entityCity}}</span><br></ng-template><ng-template\n                            [ngIf]=\"_formService.getObject().entityRegion\"\n                            ><span>{{_formService.getObject().entityRegion}}</span><br></ng-template>                    </address>\n                </div>\n            </div>\n            <p class=\"mt-2\">Tax Number: {{_formService.getObject().entityTaxNumber}}</p>\n        </div>\n    </div>\n\n    <div class=\"mt-2 mb-4\">\n        <span>Comments</span>\n        <div class=\"border rounded document-comments\">                            <textarea id=\"form_comments\" name=\"form[comments]\" rows=\"3\" [(ngModel)]=\"_formService.getObject().comments\" formControlName=\"comments\" [class.error]=\"_formService.getErrors().comments &amp;&amp; _formService.getErrors().comments.length &gt; 0\" class=\"form-control\"></textarea>\n                <label class=\"error\" *ngFor=\"let error of _formService.getErrors().comments\">{{error}}</label>\n</div>\n    </div>\n\n            <section><ng-template #js_lazyLoadContainer></ng-template></section>\n    \n    <div class=\"row\">\n        <div class=\"col-sm-8\">\n            <ng-template [ngIf]=\"_dataService.getLocalDataAttr('totalVatSplitByCode')\">\n            <span>TAX Resume</span>\n            <div class=\"border rounded document-tax-resume\">\n                <table class=\"table\">\n                    <tbody>\n                    <tr>\n                        <th>Code</th>\n                        <th>Description</th>\n                        <th>Percentage</th>\n                        <th>Net</th>\n                        <th>TAX</th>\n                        <th>Total</th>\n                    </tr>\n                    <tr *ngFor=\"let obj of _dataService.getLocalDataAttr('totalVatSplitByCode')\">\n                        <td>{{ obj['name'] }}</td>\n                        <td>{{ obj['description'] }}</td>\n                        <td class=\"text-right\">{{ obj['percentage'] }}%</td>\n                        <td class=\"text-right\">{{ obj['subTotal'] }}</td>\n                        <td class=\"text-right\">{{ obj['totalVat'] }}</td>\n                        <td class=\"text-right\">{{ obj['total'] }}</td>\n                    </tr>\n                    </tbody>\n                </table>\n            </div>\n            </ng-template>\n        </div>\n        <div class=\"col-sm-4\">\n            <table class=\"table document-total\">\n                <tbody>\n                <tr>\n                    <td><strong>Sub Total:</strong></td>\n                    <td>                            <input type=\"text\" id=\"form_subTotal\" name=\"form[subTotal]\" readonly=\"readonly\" [(ngModel)]=\"_formService.getObject().subTotal\" formControlName=\"subTotal\" [class.error]=\"_formService.getErrors().subTotal &amp;&amp; _formService.getErrors().subTotal.length &gt; 0\" class=\"form-control\" value=\"0\" />\n                <label class=\"error\" *ngFor=\"let error of _formService.getErrors().subTotal\">{{error}}</label>\n</td>\n                </tr>\n                <tr>\n                    <td><strong>TAX:</strong></td>\n                    <td>                            <input type=\"text\" id=\"form_totalVat\" name=\"form[totalVat]\" readonly=\"readonly\" [(ngModel)]=\"_formService.getObject().totalVat\" formControlName=\"totalVat\" [class.error]=\"_formService.getErrors().totalVat &amp;&amp; _formService.getErrors().totalVat.length &gt; 0\" class=\"form-control\" value=\"0\" />\n                <label class=\"error\" *ngFor=\"let error of _formService.getErrors().totalVat\">{{error}}</label>\n</td>\n                </tr>\n                <tr>\n                    <td><strong>Total:</strong></td>\n                    <td>                            <input type=\"text\" id=\"form_total\" name=\"form[total]\" readonly=\"readonly\" [(ngModel)]=\"_formService.getObject().total\" formControlName=\"total\" [class.error]=\"_formService.getErrors().total &amp;&amp; _formService.getErrors().total.length &gt; 0\" class=\"form-control\" />\n                <label class=\"error\" *ngFor=\"let error of _formService.getErrors().total\">{{error}}</label>\n</td>\n                </tr>\n                </tbody>\n            </table>\n        </div>\n    </div>\n    <div *ngIf=\"_dataService.getLocalDataAttr('documentInfo') && _dataService.getLocalDataAttr('documentInfo')['footer']\"\n         class=\"mt-2 bg-light p-3\"\n         [innerHTML]=\"_dataService.getLocalDataAttr('documentInfo')['footer']\"></div>\n</div>\n    </div>\n</div>\n<div class=\"modal-footer hide-on-empty\">\n        \n                    <div class=\"row\">\n            <div class=\"col-auto ml-auto\">\n                                            <button                                     class=\"btn btn-light\"\n                                    (click)=\"cancelAction($event)\"\n                                        id=\"form_cancel\"\n            name=\"form[cancel]\"\n            type=\"button\"><i class=\"fa fa-times\"></i>&nbsp;Cancel</button>\n                                                <button                                     class=\"btn btn-light\"\n                                    (click)=\"resetAction($event)\"\n                                        id=\"form_reset\"\n            name=\"form[reset]\"\n            type=\"button\"><i class=\"fa fa-ban\"></i>&nbsp;Reset</button>\n                                                <button                                     class=\"btn btn-primary\"\n                                    (click)=\"saveAction($event)\"\n                                        id=\"form_save\"\n            name=\"form[save]\"\n            type=\"button\"><i class=\"fa fa-check\"></i>&nbsp;Save</button>\n                                                <button                                     class=\"btn btn-primary\"\n                                    (click)=\"saveAndCloseAction($event)\"\n                                        id=\"form_saveAndClose\"\n            name=\"form[saveAndClose]\"\n            type=\"button\"><i class=\"fa fa-times\"></i>&nbsp;Save and Close</button>\n                                </div>\n        </div>\n    </div>    \n    <input type=\"hidden\" id=\"form__token\" name=\"form[_token]\" value=\"cEuu0f4SXmjfjYDFXIJO4B5Hkp8dRrRxqs-vEEkwqNE\" /></form>\n"

/***/ }),

/***/ "../../../../../src/Bck/AccountingBundle/Resources/public/supplier-document/edit/ts/templates/invoice-rectification-form-popup.component.html":
/***/ (function(module, exports) {

module.exports = "    \n    <form name=\"form\" method=\"post\" (ngSubmit)=\"saveAction($event)\" [formGroup]=\"_formService.getForm()\" class=\"form-horizontal\">\n<div class=\"modal-header\">\n    <div class=\"row align-items-center\">\n        <h3 class=\"col-auto mr-auto modal-title\">Form&nbsp;{{getProviderAttr('label')}}<small>&nbsp;({{(_formService && _formService.getObject() && _formService.getObject().id) ? 'edit' : 'add'}})</small></h3>\n        <div class=\"col-auto text-right actions\"><a\n                class=\"-round fa fa-times\"\n                (click)=\"closeAction($event)\"></a></div>\n    </div>\n</div>\n<div class=\"modal-body\">\n    <div class=\"row\">\n        <div class=\"col-12\">\n    \n    <div class=\"row\">\n        <div class=\"col-sm-6\">\n            <img *ngIf=\"_dataService.getLocalDataAttr('storeLogo')\"\n                 height=\"96\"\n                 alt=\"logo\"\n                 class=\"m-b-md\"\n                 [src]=\"_helperService.getUploadWebPath(_dataService.getLocalDataAttr('storeLogo'), 'resize_96')\">\n            <address>\n                <strong>{{_formService.getObject().storeLegalName}}</strong><br>\n                <ng-template\n                    [ngIf]=\"_formService.getObject().storeStreet1\"\n                    ><span>{{_formService.getObject().storeStreet1}}</span><br></ng-template><ng-template\n                    [ngIf]=\"_formService.getObject().storeStreet2\"\n                    ><span>{{_formService.getObject().storeStreet2}}</span><br></ng-template><ng-template\n                    [ngIf]=\"_formService.getObject().storePostCode\"\n                    ><span>{{_formService.getObject().storePostCode}} {{_formService.getObject().storeCity}}</span><br></ng-template><ng-template\n                    [ngIf]=\"_formService.getObject().storeRegion\"\n                    ><span>{{_formService.getObject().storeRegion}}</span><br></ng-template>            </address>\n            <ng-template ngFor let-field [ngForOf]=\"_dataService.getLocalDataAttr('storeInfo')\"><span\n                    [innerHtml]=\"field\"></span><br></ng-template>\n            <p class=\"m-t-sm\">Tax Number: {{_formService.getObject().storeTaxNumber}}</p>\n        </div>\n        <div class=\"col-sm-6\">\n            <h3 *ngIf=\"_formService.getObject().code\" class=\"document-number text-right\"><span>{{_formService.getObject().documentType_name}}:&nbsp;</span>                        <p id=\"form_code\"\n               class=\"form-control-static\"\n               [innerHTML]=\"_formService.getViewObject().code\"></p>\n                        <label class=\"error\" *ngFor=\"let error of _formService.getErrors().code\">{{error}}</label>\n</h3>\n            <table class=\"table document-dates\">\n                <tbody>\n                <tr>\n                    <td><strong>Date:</strong></td>\n                    <td>                        \n    <div class=\"input-group js_dataPicker\"\n         [datePicker]=\"'date'\"\n         #dpk_date=\"\" [control]=\"dpk_date\">\n        <input type=\"text\"\n               class=\"form-control\"\n               placeholder=\"yyyy-mm-dd\"\n               [(ngModel)]=\"_formService.getObject().date\"\n               formControlName = date\n               name=\"form[date]\"\n               required=\"required\"               [class.error]=\"_formService.getErrors()['date'] && (_formService.getErrors()['date'].length > 0)\"\n               ngbDatepicker #dpk_date=\"ngbDatepicker\">\n        <div class=\"input-group-append\">\n            <button class=\"btn\" type=\"button\"><a class=\"fa fa-calendar\"></a></button>\n        </div>\n    </div>\n    \n                <label class=\"error\" *ngFor=\"let error of _formService.getErrors().date\">{{error}}</label>\n</td>\n                </tr>\n                <tr>\n                    <td><strong>Due Date:</strong></td>\n                    <td>                        \n    <div class=\"input-group js_dataPicker\"\n         [datePicker]=\"'dueDate'\"\n         #dpk_dueDate=\"\" [control]=\"dpk_dueDate\">\n        <input type=\"text\"\n               class=\"form-control\"\n               placeholder=\"yyyy-mm-dd\"\n               [(ngModel)]=\"_formService.getObject().dueDate\"\n               formControlName = dueDate\n               name=\"form[dueDate]\"\n               required=\"required\"               [class.error]=\"_formService.getErrors()['dueDate'] && (_formService.getErrors()['dueDate'].length > 0)\"\n               ngbDatepicker #dpk_dueDate=\"ngbDatepicker\">\n        <div class=\"input-group-append\">\n            <button class=\"btn\" type=\"button\"><a class=\"fa fa-calendar\"></a></button>\n        </div>\n    </div>\n    \n                <label class=\"error\" *ngFor=\"let error of _formService.getErrors().dueDate\">{{error}}</label>\n</td>\n                </tr>                </tbody>\n            </table>\n\n            <div class=\"\">\n                <span class=\"\">To:</span>\n                <div class=\"document-entity mt-1\">\n                    <span *ngIf=\"_formService.getObject().entity_avatar\"\n                          [innerHTML]=\"_formService.getViewObject().entity_avatar\" class=\"pr-1\"></span>\n                    <address>\n                        <strong>{{_formService.getObject().entityLegalName}}</strong><br>\n                        <div class=\"m-t-xs m-b-xs\">\n                                                        <input [(ngModel)]=\"_formService.getObject().entityAddressObj\"\n           formControlName = entityAddressObj\n           name=\"form[entityAddressObj]\"\n                      type=\"hidden\">\n    <js_autoComplete [field]=\"'entityAddressObj'\"\n                     [hasSelfReference]=\"_dataService.getFieldChoicesAttr('entityAddressObj', 'hasSelfReference')\"\n                                              (onChange)=\"onEntityAddressChange($event)\"[placeholder]=\"&#039;Address&#039;\"                         ></js_autoComplete>\n                    <label class=\"error\" *ngFor=\"let error of _formService.getErrors().entityAddressObj\">{{error}}</label>\n                        </div>\n                        <ng-template\n                            [ngIf]=\"_formService.getObject().entityStreet1\"\n                            ><span>{{_formService.getObject().entityStreet1}}</span><br></ng-template><ng-template\n                            [ngIf]=\"_formService.getObject().entityStreet2\"\n                            ><span>{{_formService.getObject().entityStreet2}}</span><br></ng-template><ng-template\n                            [ngIf]=\"_formService.getObject().entityPostCode\"\n                            ><span>{{_formService.getObject().entityPostCode}} {{_formService.getObject().entityCity}}</span><br></ng-template><ng-template\n                            [ngIf]=\"_formService.getObject().entityRegion\"\n                            ><span>{{_formService.getObject().entityRegion}}</span><br></ng-template>                    </address>\n                </div>\n            </div>\n            <p class=\"mt-2\">Tax Number: {{_formService.getObject().entityTaxNumber}}</p>\n        </div>\n    </div>\n\n    <div class=\"mt-2 mb-4\">\n        <span>Comments</span>\n        <div class=\"border rounded document-comments\">                            <textarea id=\"form_comments\" name=\"form[comments]\" rows=\"3\" [(ngModel)]=\"_formService.getObject().comments\" formControlName=\"comments\" [class.error]=\"_formService.getErrors().comments &amp;&amp; _formService.getErrors().comments.length &gt; 0\" class=\"form-control\"></textarea>\n                <label class=\"error\" *ngFor=\"let error of _formService.getErrors().comments\">{{error}}</label>\n</div>\n    </div>\n\n            <section><ng-template #js_lazyLoadContainer></ng-template></section>\n    \n    <div class=\"row\">\n        <div class=\"col-sm-8\">\n            <ng-template [ngIf]=\"_dataService.getLocalDataAttr('totalVatSplitByCode')\">\n            <span>TAX Resume</span>\n            <div class=\"border rounded document-tax-resume\">\n                <table class=\"table\">\n                    <tbody>\n                    <tr>\n                        <th>Code</th>\n                        <th>Description</th>\n                        <th>Percentage</th>\n                        <th>Net</th>\n                        <th>TAX</th>\n                        <th>Total</th>\n                    </tr>\n                    <tr *ngFor=\"let obj of _dataService.getLocalDataAttr('totalVatSplitByCode')\">\n                        <td>{{ obj['name'] }}</td>\n                        <td>{{ obj['description'] }}</td>\n                        <td class=\"text-right\">{{ obj['percentage'] }}%</td>\n                        <td class=\"text-right\">{{ obj['subTotal'] }}</td>\n                        <td class=\"text-right\">{{ obj['totalVat'] }}</td>\n                        <td class=\"text-right\">{{ obj['total'] }}</td>\n                    </tr>\n                    </tbody>\n                </table>\n            </div>\n            </ng-template>\n        </div>\n        <div class=\"col-sm-4\">\n            <table class=\"table document-total\">\n                <tbody>\n                <tr>\n                    <td><strong>Sub Total:</strong></td>\n                    <td>                            <input type=\"text\" id=\"form_subTotal\" name=\"form[subTotal]\" readonly=\"readonly\" [(ngModel)]=\"_formService.getObject().subTotal\" formControlName=\"subTotal\" [class.error]=\"_formService.getErrors().subTotal &amp;&amp; _formService.getErrors().subTotal.length &gt; 0\" class=\"form-control\" value=\"0\" />\n                <label class=\"error\" *ngFor=\"let error of _formService.getErrors().subTotal\">{{error}}</label>\n</td>\n                </tr>\n                <tr>\n                    <td><strong>TAX:</strong></td>\n                    <td>                            <input type=\"text\" id=\"form_totalVat\" name=\"form[totalVat]\" readonly=\"readonly\" [(ngModel)]=\"_formService.getObject().totalVat\" formControlName=\"totalVat\" [class.error]=\"_formService.getErrors().totalVat &amp;&amp; _formService.getErrors().totalVat.length &gt; 0\" class=\"form-control\" value=\"0\" />\n                <label class=\"error\" *ngFor=\"let error of _formService.getErrors().totalVat\">{{error}}</label>\n</td>\n                </tr>\n                <tr>\n                    <td><strong>Total:</strong></td>\n                    <td>                            <input type=\"text\" id=\"form_total\" name=\"form[total]\" readonly=\"readonly\" [(ngModel)]=\"_formService.getObject().total\" formControlName=\"total\" [class.error]=\"_formService.getErrors().total &amp;&amp; _formService.getErrors().total.length &gt; 0\" class=\"form-control\" />\n                <label class=\"error\" *ngFor=\"let error of _formService.getErrors().total\">{{error}}</label>\n</td>\n                </tr>\n                </tbody>\n            </table>\n        </div>\n    </div>\n    <div *ngIf=\"_dataService.getLocalDataAttr('documentInfo') && _dataService.getLocalDataAttr('documentInfo')['footer']\"\n         class=\"mt-2 bg-light p-3\"\n         [innerHTML]=\"_dataService.getLocalDataAttr('documentInfo')['footer']\"></div>\n</div>\n    </div>\n</div>\n<div class=\"modal-footer hide-on-empty\">\n        \n                    <div class=\"row\">\n            <div class=\"col-auto ml-auto\">\n                                            <button                                     class=\"btn btn-light\"\n                                    (click)=\"cancelAction($event)\"\n                                        id=\"form_cancel\"\n            name=\"form[cancel]\"\n            type=\"button\"><i class=\"fa fa-times\"></i>&nbsp;Cancel</button>\n                                                <button                                     class=\"btn btn-light\"\n                                    (click)=\"resetAction($event)\"\n                                        id=\"form_reset\"\n            name=\"form[reset]\"\n            type=\"button\"><i class=\"fa fa-ban\"></i>&nbsp;Reset</button>\n                                                <button                                     class=\"btn btn-primary\"\n                                    (click)=\"saveAction($event)\"\n                                        id=\"form_save\"\n            name=\"form[save]\"\n            type=\"button\"><i class=\"fa fa-check\"></i>&nbsp;Save</button>\n                                                <button                                     class=\"btn btn-primary\"\n                                    (click)=\"saveAndCloseAction($event)\"\n                                        id=\"form_saveAndClose\"\n            name=\"form[saveAndClose]\"\n            type=\"button\"><i class=\"fa fa-times\"></i>&nbsp;Save and Close</button>\n                                </div>\n        </div>\n    </div>    \n    <input type=\"hidden\" id=\"form__token\" name=\"form[_token]\" value=\"cEuu0f4SXmjfjYDFXIJO4B5Hkp8dRrRxqs-vEEkwqNE\" /></form>\n"

/***/ }),

/***/ "../../../../../src/Bck/AccountingBundle/Resources/public/supplier-document/edit/ts/templates/receipt-form-popup.component.html":
/***/ (function(module, exports) {

module.exports = "    \n    <form name=\"form\" method=\"post\" (ngSubmit)=\"saveAction($event)\" [formGroup]=\"_formService.getForm()\" class=\"form-horizontal\">\n<div class=\"modal-header\">\n    <div class=\"row align-items-center\">\n        <h3 class=\"col-auto mr-auto modal-title\">Form&nbsp;{{getProviderAttr('label')}}<small>&nbsp;({{(_formService && _formService.getObject() && _formService.getObject().id) ? 'edit' : 'add'}})</small></h3>\n        <div class=\"col-auto text-right actions\"><a\n                class=\"-round fa fa-times\"\n                (click)=\"closeAction($event)\"></a></div>\n    </div>\n</div>\n<div class=\"modal-body\">\n    <div class=\"row\">\n        <div class=\"col-12\">\n    \n    <div class=\"row\">\n        <div class=\"col-sm-6\">\n            <img *ngIf=\"_dataService.getLocalDataAttr('storeLogo')\"\n                 height=\"96\"\n                 alt=\"logo\"\n                 class=\"m-b-md\"\n                 [src]=\"_helperService.getUploadWebPath(_dataService.getLocalDataAttr('storeLogo'), 'resize_96')\">\n            <address>\n                <strong>{{_formService.getObject().storeLegalName}}</strong><br>\n                <ng-template\n                    [ngIf]=\"_formService.getObject().storeStreet1\"\n                    ><span>{{_formService.getObject().storeStreet1}}</span><br></ng-template><ng-template\n                    [ngIf]=\"_formService.getObject().storeStreet2\"\n                    ><span>{{_formService.getObject().storeStreet2}}</span><br></ng-template><ng-template\n                    [ngIf]=\"_formService.getObject().storePostCode\"\n                    ><span>{{_formService.getObject().storePostCode}} {{_formService.getObject().storeCity}}</span><br></ng-template><ng-template\n                    [ngIf]=\"_formService.getObject().storeRegion\"\n                    ><span>{{_formService.getObject().storeRegion}}</span><br></ng-template>            </address>\n            <ng-template ngFor let-field [ngForOf]=\"_dataService.getLocalDataAttr('storeInfo')\"><span\n                    [innerHtml]=\"field\"></span><br></ng-template>\n            <p class=\"m-t-sm\">Tax Number: {{_formService.getObject().storeTaxNumber}}</p>\n        </div>\n        <div class=\"col-sm-6\">\n            <h3 *ngIf=\"_formService.getObject().code\" class=\"document-number text-right\"><span>{{_formService.getObject().documentType_name}}:&nbsp;</span>                        <p id=\"form_code\"\n               class=\"form-control-static\"\n               [innerHTML]=\"_formService.getViewObject().code\"></p>\n                        <label class=\"error\" *ngFor=\"let error of _formService.getErrors().code\">{{error}}</label>\n</h3>\n            <table class=\"table document-dates\">\n                <tbody>\n                <tr>\n                    <td><strong>Date:</strong></td>\n                    <td>                        \n    <div class=\"input-group js_dataPicker\"\n         [datePicker]=\"'date'\"\n         #dpk_date=\"\" [control]=\"dpk_date\">\n        <input type=\"text\"\n               class=\"form-control\"\n               placeholder=\"yyyy-mm-dd\"\n               [(ngModel)]=\"_formService.getObject().date\"\n               formControlName = date\n               name=\"form[date]\"\n               required=\"required\"               [class.error]=\"_formService.getErrors()['date'] && (_formService.getErrors()['date'].length > 0)\"\n               ngbDatepicker #dpk_date=\"ngbDatepicker\">\n        <div class=\"input-group-append\">\n            <button class=\"btn\" type=\"button\"><a class=\"fa fa-calendar\"></a></button>\n        </div>\n    </div>\n    \n                <label class=\"error\" *ngFor=\"let error of _formService.getErrors().date\">{{error}}</label>\n</td>\n                </tr>\n                                </tbody>\n            </table>\n\n            <div class=\"\">\n                <span class=\"\">To:</span>\n                <div class=\"document-entity mt-1\">\n                    <span *ngIf=\"_formService.getObject().entity_avatar\"\n                          [innerHTML]=\"_formService.getViewObject().entity_avatar\" class=\"pr-1\"></span>\n                    <address>\n                        <strong>{{_formService.getObject().entityLegalName}}</strong><br>\n                        <div class=\"m-t-xs m-b-xs\">\n                                                        <input [(ngModel)]=\"_formService.getObject().entityAddressObj\"\n           formControlName = entityAddressObj\n           name=\"form[entityAddressObj]\"\n                      type=\"hidden\">\n    <js_autoComplete [field]=\"'entityAddressObj'\"\n                     [hasSelfReference]=\"_dataService.getFieldChoicesAttr('entityAddressObj', 'hasSelfReference')\"\n                                              (onChange)=\"onEntityAddressChange($event)\"[placeholder]=\"&#039;Address&#039;\"                         ></js_autoComplete>\n                    <label class=\"error\" *ngFor=\"let error of _formService.getErrors().entityAddressObj\">{{error}}</label>\n                        </div>\n                        <ng-template\n                            [ngIf]=\"_formService.getObject().entityStreet1\"\n                            ><span>{{_formService.getObject().entityStreet1}}</span><br></ng-template><ng-template\n                            [ngIf]=\"_formService.getObject().entityStreet2\"\n                            ><span>{{_formService.getObject().entityStreet2}}</span><br></ng-template><ng-template\n                            [ngIf]=\"_formService.getObject().entityPostCode\"\n                            ><span>{{_formService.getObject().entityPostCode}} {{_formService.getObject().entityCity}}</span><br></ng-template><ng-template\n                            [ngIf]=\"_formService.getObject().entityRegion\"\n                            ><span>{{_formService.getObject().entityRegion}}</span><br></ng-template>                    </address>\n                </div>\n            </div>\n            <p class=\"mt-2\">Tax Number: {{_formService.getObject().entityTaxNumber}}</p>\n        </div>\n    </div>\n\n    <div class=\"mt-2 mb-4\">\n        <span>Comments</span>\n        <div class=\"border rounded document-comments\">                            <textarea id=\"form_comments\" name=\"form[comments]\" rows=\"3\" [(ngModel)]=\"_formService.getObject().comments\" formControlName=\"comments\" [class.error]=\"_formService.getErrors().comments &amp;&amp; _formService.getErrors().comments.length &gt; 0\" class=\"form-control\"></textarea>\n                <label class=\"error\" *ngFor=\"let error of _formService.getErrors().comments\">{{error}}</label>\n</div>\n    </div>\n\n    <section>\n    <ng-template #js_lazyLoadContainer></ng-template>\n    <ng-template #js_lazyLoadContainer></ng-template>\n</section>\n    <div class=\"row\"><div class=\"col-md-4 offset-md-8\">\n    <table class=\"table document-total\">\n        <tbody>\n        <tr>\n            <td><strong>DIFF:</strong></td>\n            <td><input class=\"form-control js_diffControl\"\n                       readonly=\"readonly\"\n                       type=\"text\"\n                       value=\"0\"></td>\n        </tr>        </tbody>\n    </table>\n</div></div>\n    <div *ngIf=\"_dataService.getLocalDataAttr('documentInfo') && _dataService.getLocalDataAttr('documentInfo')['footer']\"\n         class=\"mt-2 bg-light p-3\"\n         [innerHTML]=\"_dataService.getLocalDataAttr('documentInfo')['footer']\"></div>\n</div>\n    </div>\n</div>\n<div class=\"modal-footer hide-on-empty\">\n        \n                    <div class=\"row\">\n            <div class=\"col-auto ml-auto\">\n                                            <button                                     class=\"btn btn-light\"\n                                    (click)=\"cancelAction($event)\"\n                                        id=\"form_cancel\"\n            name=\"form[cancel]\"\n            type=\"button\"><i class=\"fa fa-times\"></i>&nbsp;Cancel</button>\n                                                <button                                     class=\"btn btn-light\"\n                                    (click)=\"resetAction($event)\"\n                                        id=\"form_reset\"\n            name=\"form[reset]\"\n            type=\"button\"><i class=\"fa fa-ban\"></i>&nbsp;Reset</button>\n                                                <button                                     class=\"btn btn-primary\"\n                                    (click)=\"saveAction($event)\"\n                                        id=\"form_save\"\n            name=\"form[save]\"\n            type=\"button\"><i class=\"fa fa-check\"></i>&nbsp;Save</button>\n                                                <button                                     class=\"btn btn-primary\"\n                                    (click)=\"saveAndCloseAction($event)\"\n                                        id=\"form_saveAndClose\"\n            name=\"form[saveAndClose]\"\n            type=\"button\"><i class=\"fa fa-times\"></i>&nbsp;Save and Close</button>\n                                </div>\n        </div>\n    </div>    \n    <input type=\"hidden\" id=\"form__token\" name=\"form[_token]\" value=\"cEuu0f4SXmjfjYDFXIJO4B5Hkp8dRrRxqs-vEEkwqNE\" /></form>\n"

/***/ }),

/***/ "../../../../../src/Bck/AccountingBundle/Resources/public/supplier-document/edit/ts/templates/receipt-payment-form-popup.component.html":
/***/ (function(module, exports) {

module.exports = "    \n    <form name=\"form\" method=\"post\" (ngSubmit)=\"saveAction($event)\" [formGroup]=\"_formService.getForm()\" class=\"form-horizontal\">\n<div class=\"modal-header\">\n    <div class=\"row align-items-center\">\n        <h3 class=\"col-auto mr-auto modal-title\">Form&nbsp;{{getProviderAttr('label')}}<small>&nbsp;({{(_formService && _formService.getObject() && _formService.getObject().id) ? 'edit' : 'add'}})</small></h3>\n        <div class=\"col-auto text-right actions\"><a\n                class=\"-round fa fa-times\"\n                (click)=\"closeAction($event)\"></a></div>\n    </div>\n</div>\n<div class=\"modal-body\">\n    <div class=\"row\">\n        <div class=\"col-12\">\n    \n    <div class=\"row\">\n        <div class=\"col-sm-6\">\n            <img *ngIf=\"_dataService.getLocalDataAttr('storeLogo')\"\n                 height=\"96\"\n                 alt=\"logo\"\n                 class=\"m-b-md\"\n                 [src]=\"_helperService.getUploadWebPath(_dataService.getLocalDataAttr('storeLogo'), 'resize_96')\">\n            <address>\n                <strong>{{_formService.getObject().storeLegalName}}</strong><br>\n                <ng-template\n                    [ngIf]=\"_formService.getObject().storeStreet1\"\n                    ><span>{{_formService.getObject().storeStreet1}}</span><br></ng-template><ng-template\n                    [ngIf]=\"_formService.getObject().storeStreet2\"\n                    ><span>{{_formService.getObject().storeStreet2}}</span><br></ng-template><ng-template\n                    [ngIf]=\"_formService.getObject().storePostCode\"\n                    ><span>{{_formService.getObject().storePostCode}} {{_formService.getObject().storeCity}}</span><br></ng-template><ng-template\n                    [ngIf]=\"_formService.getObject().storeRegion\"\n                    ><span>{{_formService.getObject().storeRegion}}</span><br></ng-template>            </address>\n            <ng-template ngFor let-field [ngForOf]=\"_dataService.getLocalDataAttr('storeInfo')\"><span\n                    [innerHtml]=\"field\"></span><br></ng-template>\n            <p class=\"m-t-sm\">Tax Number: {{_formService.getObject().storeTaxNumber}}</p>\n        </div>\n        <div class=\"col-sm-6\">\n            <h3 *ngIf=\"_formService.getObject().code\" class=\"document-number text-right\"><span>{{_formService.getObject().documentType_name}}:&nbsp;</span>                        <p id=\"form_code\"\n               class=\"form-control-static\"\n               [innerHTML]=\"_formService.getViewObject().code\"></p>\n                        <label class=\"error\" *ngFor=\"let error of _formService.getErrors().code\">{{error}}</label>\n</h3>\n            <table class=\"table document-dates\">\n                <tbody>\n                <tr>\n                    <td><strong>Date:</strong></td>\n                    <td>                        \n    <div class=\"input-group js_dataPicker\"\n         [datePicker]=\"'date'\"\n         #dpk_date=\"\" [control]=\"dpk_date\">\n        <input type=\"text\"\n               class=\"form-control\"\n               placeholder=\"yyyy-mm-dd\"\n               [(ngModel)]=\"_formService.getObject().date\"\n               formControlName = date\n               name=\"form[date]\"\n               required=\"required\"               [class.error]=\"_formService.getErrors()['date'] && (_formService.getErrors()['date'].length > 0)\"\n               ngbDatepicker #dpk_date=\"ngbDatepicker\">\n        <div class=\"input-group-append\">\n            <button class=\"btn\" type=\"button\"><a class=\"fa fa-calendar\"></a></button>\n        </div>\n    </div>\n    \n                <label class=\"error\" *ngFor=\"let error of _formService.getErrors().date\">{{error}}</label>\n</td>\n                </tr>\n                                </tbody>\n            </table>\n\n            <div class=\"\">\n                <span class=\"\">To:</span>\n                <div class=\"document-entity mt-1\">\n                    <span *ngIf=\"_formService.getObject().entity_avatar\"\n                          [innerHTML]=\"_formService.getViewObject().entity_avatar\" class=\"pr-1\"></span>\n                    <address>\n                        <strong>{{_formService.getObject().entityLegalName}}</strong><br>\n                        <div class=\"m-t-xs m-b-xs\">\n                                                        <input [(ngModel)]=\"_formService.getObject().entityAddressObj\"\n           formControlName = entityAddressObj\n           name=\"form[entityAddressObj]\"\n                      type=\"hidden\">\n    <js_autoComplete [field]=\"'entityAddressObj'\"\n                     [hasSelfReference]=\"_dataService.getFieldChoicesAttr('entityAddressObj', 'hasSelfReference')\"\n                                              (onChange)=\"onEntityAddressChange($event)\"[placeholder]=\"&#039;Address&#039;\"                         ></js_autoComplete>\n                    <label class=\"error\" *ngFor=\"let error of _formService.getErrors().entityAddressObj\">{{error}}</label>\n                        </div>\n                        <ng-template\n                            [ngIf]=\"_formService.getObject().entityStreet1\"\n                            ><span>{{_formService.getObject().entityStreet1}}</span><br></ng-template><ng-template\n                            [ngIf]=\"_formService.getObject().entityStreet2\"\n                            ><span>{{_formService.getObject().entityStreet2}}</span><br></ng-template><ng-template\n                            [ngIf]=\"_formService.getObject().entityPostCode\"\n                            ><span>{{_formService.getObject().entityPostCode}} {{_formService.getObject().entityCity}}</span><br></ng-template><ng-template\n                            [ngIf]=\"_formService.getObject().entityRegion\"\n                            ><span>{{_formService.getObject().entityRegion}}</span><br></ng-template>                    </address>\n                </div>\n            </div>\n            <p class=\"mt-2\">Tax Number: {{_formService.getObject().entityTaxNumber}}</p>\n        </div>\n    </div>\n\n    <div class=\"mt-2 mb-4\">\n        <span>Comments</span>\n        <div class=\"border rounded document-comments\">                            <textarea id=\"form_comments\" name=\"form[comments]\" rows=\"3\" [(ngModel)]=\"_formService.getObject().comments\" formControlName=\"comments\" [class.error]=\"_formService.getErrors().comments &amp;&amp; _formService.getErrors().comments.length &gt; 0\" class=\"form-control\"></textarea>\n                <label class=\"error\" *ngFor=\"let error of _formService.getErrors().comments\">{{error}}</label>\n</div>\n    </div>\n\n    <section><ng-template #js_lazyLoadContainer></ng-template></section>\n    <div class=\"row\"><div class=\"col-md-4 offset-md-8\">\n    <table class=\"table document-total\">\n        <tbody>\n        <tr>\n    <td><strong>Total:</strong></td>\n    <td>                            <input type=\"text\" id=\"form_total\" name=\"form[total]\" readonly=\"readonly\" [(ngModel)]=\"_formService.getObject().total\" formControlName=\"total\" [class.error]=\"_formService.getErrors().total &amp;&amp; _formService.getErrors().total.length &gt; 0\" class=\"form-control\" />\n                <label class=\"error\" *ngFor=\"let error of _formService.getErrors().total\">{{error}}</label>\n</td>\n</tr>        </tbody>\n    </table>\n</div></div>\n    <div *ngIf=\"_dataService.getLocalDataAttr('documentInfo') && _dataService.getLocalDataAttr('documentInfo')['footer']\"\n         class=\"mt-2 bg-light p-3\"\n         [innerHTML]=\"_dataService.getLocalDataAttr('documentInfo')['footer']\"></div>\n</div>\n    </div>\n</div>\n<div class=\"modal-footer hide-on-empty\">\n        \n                    <div class=\"row\">\n            <div class=\"col-auto ml-auto\">\n                                            <button                                     class=\"btn btn-light\"\n                                    (click)=\"cancelAction($event)\"\n                                        id=\"form_cancel\"\n            name=\"form[cancel]\"\n            type=\"button\"><i class=\"fa fa-times\"></i>&nbsp;Cancel</button>\n                                                <button                                     class=\"btn btn-light\"\n                                    (click)=\"resetAction($event)\"\n                                        id=\"form_reset\"\n            name=\"form[reset]\"\n            type=\"button\"><i class=\"fa fa-ban\"></i>&nbsp;Reset</button>\n                                                <button                                     class=\"btn btn-primary\"\n                                    (click)=\"saveAction($event)\"\n                                        id=\"form_save\"\n            name=\"form[save]\"\n            type=\"button\"><i class=\"fa fa-check\"></i>&nbsp;Save</button>\n                                                <button                                     class=\"btn btn-primary\"\n                                    (click)=\"saveAndCloseAction($event)\"\n                                        id=\"form_saveAndClose\"\n            name=\"form[saveAndClose]\"\n            type=\"button\"><i class=\"fa fa-times\"></i>&nbsp;Save and Close</button>\n                                </div>\n        </div>\n    </div>    \n    <input type=\"hidden\" id=\"form__token\" name=\"form[_token]\" value=\"cEuu0f4SXmjfjYDFXIJO4B5Hkp8dRrRxqs-vEEkwqNE\" /></form>\n"

/***/ }),

/***/ "../../../../../src/Bck/AccountingBundle/Resources/public/supplier-document/edit/ts/templates/receipt-settlement-form-popup.component.html":
/***/ (function(module, exports) {

module.exports = "    \n    <form name=\"form\" method=\"post\" (ngSubmit)=\"saveAction($event)\" [formGroup]=\"_formService.getForm()\" class=\"form-horizontal\">\n<div class=\"modal-header\">\n    <div class=\"row align-items-center\">\n        <h3 class=\"col-auto mr-auto modal-title\">Form&nbsp;{{getProviderAttr('label')}}<small>&nbsp;({{(_formService && _formService.getObject() && _formService.getObject().id) ? 'edit' : 'add'}})</small></h3>\n        <div class=\"col-auto text-right actions\"><a\n                class=\"-round fa fa-times\"\n                (click)=\"closeAction($event)\"></a></div>\n    </div>\n</div>\n<div class=\"modal-body\">\n    <div class=\"row\">\n        <div class=\"col-12\">\n    \n    <div class=\"row\">\n        <div class=\"col-sm-6\">\n            <img *ngIf=\"_dataService.getLocalDataAttr('storeLogo')\"\n                 height=\"96\"\n                 alt=\"logo\"\n                 class=\"m-b-md\"\n                 [src]=\"_helperService.getUploadWebPath(_dataService.getLocalDataAttr('storeLogo'), 'resize_96')\">\n            <address>\n                <strong>{{_formService.getObject().storeLegalName}}</strong><br>\n                <ng-template\n                    [ngIf]=\"_formService.getObject().storeStreet1\"\n                    ><span>{{_formService.getObject().storeStreet1}}</span><br></ng-template><ng-template\n                    [ngIf]=\"_formService.getObject().storeStreet2\"\n                    ><span>{{_formService.getObject().storeStreet2}}</span><br></ng-template><ng-template\n                    [ngIf]=\"_formService.getObject().storePostCode\"\n                    ><span>{{_formService.getObject().storePostCode}} {{_formService.getObject().storeCity}}</span><br></ng-template><ng-template\n                    [ngIf]=\"_formService.getObject().storeRegion\"\n                    ><span>{{_formService.getObject().storeRegion}}</span><br></ng-template>            </address>\n            <ng-template ngFor let-field [ngForOf]=\"_dataService.getLocalDataAttr('storeInfo')\"><span\n                    [innerHtml]=\"field\"></span><br></ng-template>\n            <p class=\"m-t-sm\">Tax Number: {{_formService.getObject().storeTaxNumber}}</p>\n        </div>\n        <div class=\"col-sm-6\">\n            <h3 *ngIf=\"_formService.getObject().code\" class=\"document-number text-right\"><span>{{_formService.getObject().documentType_name}}:&nbsp;</span>                        <p id=\"form_code\"\n               class=\"form-control-static\"\n               [innerHTML]=\"_formService.getViewObject().code\"></p>\n                        <label class=\"error\" *ngFor=\"let error of _formService.getErrors().code\">{{error}}</label>\n</h3>\n            <table class=\"table document-dates\">\n                <tbody>\n                <tr>\n                    <td><strong>Date:</strong></td>\n                    <td>                        \n    <div class=\"input-group js_dataPicker\"\n         [datePicker]=\"'date'\"\n         #dpk_date=\"\" [control]=\"dpk_date\">\n        <input type=\"text\"\n               class=\"form-control\"\n               placeholder=\"yyyy-mm-dd\"\n               [(ngModel)]=\"_formService.getObject().date\"\n               formControlName = date\n               name=\"form[date]\"\n               required=\"required\"               [class.error]=\"_formService.getErrors()['date'] && (_formService.getErrors()['date'].length > 0)\"\n               ngbDatepicker #dpk_date=\"ngbDatepicker\">\n        <div class=\"input-group-append\">\n            <button class=\"btn\" type=\"button\"><a class=\"fa fa-calendar\"></a></button>\n        </div>\n    </div>\n    \n                <label class=\"error\" *ngFor=\"let error of _formService.getErrors().date\">{{error}}</label>\n</td>\n                </tr>\n                                </tbody>\n            </table>\n\n            <div class=\"\">\n                <span class=\"\">To:</span>\n                <div class=\"document-entity mt-1\">\n                    <span *ngIf=\"_formService.getObject().entity_avatar\"\n                          [innerHTML]=\"_formService.getViewObject().entity_avatar\" class=\"pr-1\"></span>\n                    <address>\n                        <strong>{{_formService.getObject().entityLegalName}}</strong><br>\n                        <div class=\"m-t-xs m-b-xs\">\n                                                        <input [(ngModel)]=\"_formService.getObject().entityAddressObj\"\n           formControlName = entityAddressObj\n           name=\"form[entityAddressObj]\"\n                      type=\"hidden\">\n    <js_autoComplete [field]=\"'entityAddressObj'\"\n                     [hasSelfReference]=\"_dataService.getFieldChoicesAttr('entityAddressObj', 'hasSelfReference')\"\n                                              (onChange)=\"onEntityAddressChange($event)\"[placeholder]=\"&#039;Address&#039;\"                         ></js_autoComplete>\n                    <label class=\"error\" *ngFor=\"let error of _formService.getErrors().entityAddressObj\">{{error}}</label>\n                        </div>\n                        <ng-template\n                            [ngIf]=\"_formService.getObject().entityStreet1\"\n                            ><span>{{_formService.getObject().entityStreet1}}</span><br></ng-template><ng-template\n                            [ngIf]=\"_formService.getObject().entityStreet2\"\n                            ><span>{{_formService.getObject().entityStreet2}}</span><br></ng-template><ng-template\n                            [ngIf]=\"_formService.getObject().entityPostCode\"\n                            ><span>{{_formService.getObject().entityPostCode}} {{_formService.getObject().entityCity}}</span><br></ng-template><ng-template\n                            [ngIf]=\"_formService.getObject().entityRegion\"\n                            ><span>{{_formService.getObject().entityRegion}}</span><br></ng-template>                    </address>\n                </div>\n            </div>\n            <p class=\"mt-2\">Tax Number: {{_formService.getObject().entityTaxNumber}}</p>\n        </div>\n    </div>\n\n    <div class=\"mt-2 mb-4\">\n        <span>Comments</span>\n        <div class=\"border rounded document-comments\">                            <textarea id=\"form_comments\" name=\"form[comments]\" rows=\"3\" [(ngModel)]=\"_formService.getObject().comments\" formControlName=\"comments\" [class.error]=\"_formService.getErrors().comments &amp;&amp; _formService.getErrors().comments.length &gt; 0\" class=\"form-control\"></textarea>\n                <label class=\"error\" *ngFor=\"let error of _formService.getErrors().comments\">{{error}}</label>\n</div>\n    </div>\n\n    <section><ng-template #js_lazyLoadContainer></ng-template></section>\n    <div class=\"row\"><div class=\"col-md-4 offset-md-8\">\n    <table class=\"table document-total\">\n        <tbody>\n        <tr>\n            <td><strong>DIFF:</strong></td>\n            <td><input class=\"form-control js_diffControl\"\n                       readonly=\"readonly\"\n                       type=\"text\"\n                       value=\"0\"></td>\n        </tr>        </tbody>\n    </table>\n</div></div>\n    <div *ngIf=\"_dataService.getLocalDataAttr('documentInfo') && _dataService.getLocalDataAttr('documentInfo')['footer']\"\n         class=\"mt-2 bg-light p-3\"\n         [innerHTML]=\"_dataService.getLocalDataAttr('documentInfo')['footer']\"></div>\n</div>\n    </div>\n</div>\n<div class=\"modal-footer hide-on-empty\">\n        \n                    <div class=\"row\">\n            <div class=\"col-auto ml-auto\">\n                                            <button                                     class=\"btn btn-light\"\n                                    (click)=\"cancelAction($event)\"\n                                        id=\"form_cancel\"\n            name=\"form[cancel]\"\n            type=\"button\"><i class=\"fa fa-times\"></i>&nbsp;Cancel</button>\n                                                <button                                     class=\"btn btn-light\"\n                                    (click)=\"resetAction($event)\"\n                                        id=\"form_reset\"\n            name=\"form[reset]\"\n            type=\"button\"><i class=\"fa fa-ban\"></i>&nbsp;Reset</button>\n                                                <button                                     class=\"btn btn-primary\"\n                                    (click)=\"saveAction($event)\"\n                                        id=\"form_save\"\n            name=\"form[save]\"\n            type=\"button\"><i class=\"fa fa-check\"></i>&nbsp;Save</button>\n                                                <button                                     class=\"btn btn-primary\"\n                                    (click)=\"saveAndCloseAction($event)\"\n                                        id=\"form_saveAndClose\"\n            name=\"form[saveAndClose]\"\n            type=\"button\"><i class=\"fa fa-times\"></i>&nbsp;Save and Close</button>\n                                </div>\n        </div>\n    </div>    \n    <input type=\"hidden\" id=\"form__token\" name=\"form[_token]\" value=\"cEuu0f4SXmjfjYDFXIJO4B5Hkp8dRrRxqs-vEEkwqNE\" /></form>\n"

/***/ }),

/***/ "../../../../../src/Bck/AccountingBundle/Resources/public/supplier-document/index/ts/$$_lazy_route_resource lazy recursive":
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
webpackEmptyAsyncContext.id = "../../../../../src/Bck/AccountingBundle/Resources/public/supplier-document/index/ts/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "../../../../../src/Bck/AccountingBundle/Resources/public/supplier-document/index/ts/src/main.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MainComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__AppBundle_Resources_public_ts_actions_actions_service__ = __webpack_require__("../../../../../src/AppBundle/Resources/public/ts/actions/actions.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__AppBundle_Resources_public_modal_ts_modal_service__ = __webpack_require__("../../../../../src/AppBundle/Resources/public/modal/ts/modal.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__base_document_index_ts_main_ext_component__ = __webpack_require__("../../../../../src/Bck/AccountingBundle/Resources/public/base-document/index/ts/main.ext-component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__AppBundle_Resources_public_tasks_loader_manager_ts_tasks_loader_manager_service__ = __webpack_require__("../../../../../src/AppBundle/Resources/public/tasks-loader-manager/ts/tasks-loader-manager.service.ts");
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
var MainComponent = (function (_super) {
    __extends(MainComponent, _super);
    function MainComponent(viewContainerRef, renderer, dataBoxProvider, dataService, tasksLoaderManagerService, helperService, actionsService, modalService, popups, injector) {
        var _this = 
        // Call parent
        _super.call(this) || this;
        _super.prototype.initBaseDocumentIndexMainExtComponent.call(_this, viewContainerRef, renderer, dataBoxProvider, dataService, tasksLoaderManagerService, helperService, actionsService, modalService, popups, injector);
        return _this;
    }
    MainComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: '.js_dataBox',
            template: __webpack_require__("../../../../../src/Bck/AccountingBundle/Resources/public/supplier-document/index/ts/templates/main.component.html")
        }),
        __param(2, Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["y" /* Inject */])('Provider')),
        __param(3, Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["y" /* Inject */])('DataService')),
        __param(5, Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["y" /* Inject */])('HelperService')),
        __param(8, Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["y" /* Inject */])('Popups')),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_core__["_9" /* ViewContainerRef */],
            __WEBPACK_IMPORTED_MODULE_0__angular_core__["U" /* Renderer */], Object, Object, __WEBPACK_IMPORTED_MODULE_4__AppBundle_Resources_public_tasks_loader_manager_ts_tasks_loader_manager_service__["a" /* TasksLoaderManagerService */], Object, __WEBPACK_IMPORTED_MODULE_1__AppBundle_Resources_public_ts_actions_actions_service__["a" /* ActionsService */],
            __WEBPACK_IMPORTED_MODULE_2__AppBundle_Resources_public_modal_ts_modal_service__["b" /* ModalService */], Object, __WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Injector */]])
    ], MainComponent);
    return MainComponent;
}(__WEBPACK_IMPORTED_MODULE_3__base_document_index_ts_main_ext_component__["a" /* MainExtComponent */]));



/***/ }),

/***/ "../../../../../src/Bck/AccountingBundle/Resources/public/supplier-document/index/ts/src/main.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MainModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__ = __webpack_require__("../../../platform-browser/esm5/platform-browser.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ng_bootstrap_ng_bootstrap__ = __webpack_require__("../../../../@ng-bootstrap/ng-bootstrap/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__AppBundle_Resources_public_ts_search_search_module__ = __webpack_require__("../../../../../src/AppBundle/Resources/public/ts/search/search.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__AppBundle_Resources_public_ts_search_search_pagination_module__ = __webpack_require__("../../../../../src/AppBundle/Resources/public/ts/search/search-pagination.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__AppBundle_Resources_public_ts_expander_expander_module__ = __webpack_require__("../../../../../src/AppBundle/Resources/public/ts/expander/expander.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__AppBundle_Resources_public_legend_ts_src_legend_ext_module__ = __webpack_require__("../../../../../src/AppBundle/Resources/public/legend/ts/src/legend.ext-module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__AppBundle_Resources_public_ts_helper__ = __webpack_require__("../../../../../src/AppBundle/Resources/public/ts/helper.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__AppBundle_Resources_public_tasks_loader_manager_ts_tasks_loader_manager_service__ = __webpack_require__("../../../../../src/AppBundle/Resources/public/tasks-loader-manager/ts/tasks-loader-manager.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__AppBundle_Resources_public_ts_post_service__ = __webpack_require__("../../../../../src/AppBundle/Resources/public/ts/post.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__AppBundle_Resources_public_modal_ts_modal_service__ = __webpack_require__("../../../../../src/AppBundle/Resources/public/modal/ts/modal.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__AppBundle_Resources_public_form_ts_form_service__ = __webpack_require__("../../../../../src/AppBundle/Resources/public/form/ts/form.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__AppBundle_Resources_public_ts_flash_message_service__ = __webpack_require__("../../../../../src/AppBundle/Resources/public/ts/flash-message.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__AppBundle_Resources_public_ts_dynamic_component_loader_service__ = __webpack_require__("../../../../../src/AppBundle/Resources/public/ts/dynamic-component-loader.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__AppBundle_Resources_public_ts_data_service_data_service__ = __webpack_require__("../../../../../src/AppBundle/Resources/public/ts/data-service/data.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__AppBundle_Resources_public_ts_actions_actions_service__ = __webpack_require__("../../../../../src/AppBundle/Resources/public/ts/actions/actions.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__AppBundle_Resources_public_ts_nav_manager_nav_manager_service__ = __webpack_require__("../../../../../src/AppBundle/Resources/public/ts/nav-manager/nav-manager.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__AppBundle_Resources_public_wizard_ts_src_wizard_manager_service__ = __webpack_require__("../../../../../src/AppBundle/Resources/public/wizard/ts/src/wizard-manager.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__AppBundle_Resources_public_app_basics_default_ts_src_main_ext_module__ = __webpack_require__("../../../../../src/AppBundle/Resources/public/app-basics/default/ts/src/main.ext-module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__AppBundle_Resources_public_app_basics_default_ts_src_main_component__ = __webpack_require__("../../../../../src/AppBundle/Resources/public/app-basics/default/ts/src/main.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__main_component__ = __webpack_require__("../../../../../src/Bck/AccountingBundle/Resources/public/supplier-document/index/ts/src/main.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__add_ts_src_form_popup_ext_module__ = __webpack_require__("../../../../../src/Bck/AccountingBundle/Resources/public/supplier-document/add/ts/src/form-popup.ext-module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__edit_ts_src_form_popup_ext_module__ = __webpack_require__("../../../../../src/Bck/AccountingBundle/Resources/public/supplier-document/edit/ts/src/form-popup.ext-module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24__EntitiesBundle_Resources_public_entity_detail_ts_src_entity_address_edit_ext_module__ = __webpack_require__("../../../../../src/Bck/EntitiesBundle/Resources/public/entity/detail/ts/src/entity-address-edit.ext-module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_25__EntitiesBundle_Resources_public_client_index_ts_src_edit_ext_module__ = __webpack_require__("../../../../../src/Bck/EntitiesBundle/Resources/public/client/index/ts/src/edit.ext-module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_26__EntitiesBundle_Resources_public_supplier_index_ts_src_edit_ext_module__ = __webpack_require__("../../../../../src/Bck/EntitiesBundle/Resources/public/supplier/index/ts/src/edit.ext-module.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


// This module doesn't use "ReactiveFormsModule", but it needs to import this class
// to provide "formBuilder" when inject dependencies in child modules (like form)




















// Form Popups
// Add

// Edit

// Auto-complete



var autoCompleteProviders = {
    clientObj: {
        urlConf: (__WEBPACK_IMPORTED_MODULE_8__AppBundle_Resources_public_ts_helper__["a" /* Helper */].getAppVar('route') + 'bck/entities/client/conf'),
        control: 'edit',
        popups: {
            module: __WEBPACK_IMPORTED_MODULE_25__EntitiesBundle_Resources_public_client_index_ts_src_edit_ext_module__["a" /* EditExtModule */],
            component: 'EditComponent',
            providers: [
                { provide: 'Provider', useValue: __WEBPACK_IMPORTED_MODULE_8__AppBundle_Resources_public_ts_helper__["a" /* Helper */].getFormProvider({ label: 'Client' }) },
                __WEBPACK_IMPORTED_MODULE_12__AppBundle_Resources_public_form_ts_form_service__["a" /* FormService */],
                // Reset FormServiceProvider to use DataServiceProvider as default values
                { provide: 'FormServiceProvider', useValue: {} }
            ]
        }
    },
    supplierObj: {
        urlConf: (__WEBPACK_IMPORTED_MODULE_8__AppBundle_Resources_public_ts_helper__["a" /* Helper */].getAppVar('route') + 'bck/entities/supplier/conf'),
        control: 'edit',
        popups: {
            module: __WEBPACK_IMPORTED_MODULE_26__EntitiesBundle_Resources_public_supplier_index_ts_src_edit_ext_module__["a" /* EditExtModule */],
            component: 'EditComponent',
            providers: [
                { provide: 'Provider', useValue: __WEBPACK_IMPORTED_MODULE_8__AppBundle_Resources_public_ts_helper__["a" /* Helper */].getFormProvider({ label: 'Supplier' }) },
                __WEBPACK_IMPORTED_MODULE_12__AppBundle_Resources_public_form_ts_form_service__["a" /* FormService */],
                // Reset FormServiceProvider to use DataServiceProvider as default values
                { provide: 'FormServiceProvider', useValue: {} }
            ]
        }
    },
    selectEntityObj: {
        urlConf: (__WEBPACK_IMPORTED_MODULE_8__AppBundle_Resources_public_ts_helper__["a" /* Helper */].getAppVar('route') + 'bck/entities/entity/conf'),
        control: 'none'
    },
    entityAddressObj: {
        urlConf: (__WEBPACK_IMPORTED_MODULE_8__AppBundle_Resources_public_ts_helper__["a" /* Helper */].getAppVar('route') + 'bck/entities/entity-address/conf/0'),
        control: 'edit',
        popups: {
            module: __WEBPACK_IMPORTED_MODULE_24__EntitiesBundle_Resources_public_entity_detail_ts_src_entity_address_edit_ext_module__["a" /* EntityAddressEditExtModule */],
            component: 'EntityAddressEditComponent',
            providers: [
                { provide: 'Provider', useValue: __WEBPACK_IMPORTED_MODULE_8__AppBundle_Resources_public_ts_helper__["a" /* Helper */].getFormProvider({ label: 'Address' }) },
                __WEBPACK_IMPORTED_MODULE_12__AppBundle_Resources_public_form_ts_form_service__["a" /* FormService */],
                // Reset FormServiceProvider to use DataServiceProvider as default values
                { provide: 'FormServiceProvider', useValue: {} }
            ]
        }
    }
};
// For add form wizard popup
var formProvider = __WEBPACK_IMPORTED_MODULE_8__AppBundle_Resources_public_ts_helper__["a" /* Helper */].getFormProvider(_app.conf);
// To avoid conflicts between forms in steps of the wizard
// (form should override object without notify user)
formProvider['preventObjectOverride'] = false;
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
                __WEBPACK_IMPORTED_MODULE_19__AppBundle_Resources_public_app_basics_default_ts_src_main_ext_module__["a" /* MainExtModule */],
                __WEBPACK_IMPORTED_MODULE_4__AppBundle_Resources_public_ts_search_search_module__["a" /* SearchModule */],
                __WEBPACK_IMPORTED_MODULE_5__AppBundle_Resources_public_ts_search_search_pagination_module__["a" /* SearchPaginationModule */],
                __WEBPACK_IMPORTED_MODULE_6__AppBundle_Resources_public_ts_expander_expander_module__["a" /* ExpanderModule */],
                __WEBPACK_IMPORTED_MODULE_7__AppBundle_Resources_public_legend_ts_src_legend_ext_module__["a" /* LegendExtModule */]
            ],
            declarations: [
                __WEBPACK_IMPORTED_MODULE_21__main_component__["a" /* MainComponent */]
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_10__AppBundle_Resources_public_ts_post_service__["a" /* PostService */],
                __WEBPACK_IMPORTED_MODULE_11__AppBundle_Resources_public_modal_ts_modal_service__["b" /* ModalService */],
                __WEBPACK_IMPORTED_MODULE_13__AppBundle_Resources_public_ts_flash_message_service__["a" /* FlashMessageService */],
                __WEBPACK_IMPORTED_MODULE_14__AppBundle_Resources_public_ts_dynamic_component_loader_service__["a" /* DynamicComponentLoaderService */],
                { provide: 'DataService', useClass: __WEBPACK_IMPORTED_MODULE_15__AppBundle_Resources_public_ts_data_service_data_service__["a" /* DataService */] },
                { provide: 'ParentDataService', useValue: null },
                //{provide: 'ParentDataService', useExisting: 'DataService'},
                __WEBPACK_IMPORTED_MODULE_16__AppBundle_Resources_public_ts_actions_actions_service__["a" /* ActionsService */],
                { provide: 'HelperService', useValue: __WEBPACK_IMPORTED_MODULE_8__AppBundle_Resources_public_ts_helper__["a" /* Helper */] },
                __WEBPACK_IMPORTED_MODULE_9__AppBundle_Resources_public_tasks_loader_manager_ts_tasks_loader_manager_service__["a" /* TasksLoaderManagerService */],
                { provide: 'DataServiceProvider', useValue: __WEBPACK_IMPORTED_MODULE_8__AppBundle_Resources_public_ts_helper__["a" /* Helper */].getDataServiceProvider(_app.conf) },
                { provide: 'Provider', useValue: __WEBPACK_IMPORTED_MODULE_8__AppBundle_Resources_public_ts_helper__["a" /* Helper */].getDataBoxProvider(_app.conf) },
                { provide: 'ActionsServiceProvider', useValue: __WEBPACK_IMPORTED_MODULE_8__AppBundle_Resources_public_ts_helper__["a" /* Helper */].getActionsServiceProvider(_app.conf) },
                { provide: 'LegendProvider', useValue: __WEBPACK_IMPORTED_MODULE_8__AppBundle_Resources_public_ts_helper__["a" /* Helper */].getLegendProvider(_app.conf) },
                { provide: 'Popups', useValue: {
                        add: {
                            module: __WEBPACK_IMPORTED_MODULE_22__add_ts_src_form_popup_ext_module__["a" /* FormPopupExtModule */],
                            component: 'FormPopupComponent',
                            providers: [
                                // Set field for wizard form first step
                                { provide: 'FormServiceProvider', useValue: { fields: ['supplierDocumentTypeObj', 'supplierObj'] } },
                                { provide: 'Provider', useValue: formProvider },
                                __WEBPACK_IMPORTED_MODULE_17__AppBundle_Resources_public_ts_nav_manager_nav_manager_service__["a" /* NavManagerService */],
                                __WEBPACK_IMPORTED_MODULE_18__AppBundle_Resources_public_wizard_ts_src_wizard_manager_service__["a" /* WizardManagerService */],
                                { provide: 'WizardManagerServiceProvider', useValue: { rebuildNextStepComponents: true } },
                                // Each FormService has your own provider, so we need different FormService for popup
                                __WEBPACK_IMPORTED_MODULE_12__AppBundle_Resources_public_form_ts_form_service__["a" /* FormService */]
                            ]
                        },
                        edit: {
                            module: __WEBPACK_IMPORTED_MODULE_23__edit_ts_src_form_popup_ext_module__["a" /* FormPopupExtModule */],
                            component: 'FormPopupComponent',
                            providers: [{ provide: 'Provider', useValue: __WEBPACK_IMPORTED_MODULE_8__AppBundle_Resources_public_ts_helper__["a" /* Helper */].getFormProvider(_app.conf) }],
                            FormService: __WEBPACK_IMPORTED_MODULE_12__AppBundle_Resources_public_form_ts_form_service__["a" /* FormService */]
                        }
                    } },
                { provide: 'AutoCompleteProviders', useValue: autoCompleteProviders },
                // FormService needs to be here for AutoCompleteProviders, however it will be redefined in Popups
                // (so we can reuse the same AutoCompleteProviders for all injectors)
                __WEBPACK_IMPORTED_MODULE_12__AppBundle_Resources_public_form_ts_form_service__["a" /* FormService */]
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_20__AppBundle_Resources_public_app_basics_default_ts_src_main_component__["a" /* MainComponent */], __WEBPACK_IMPORTED_MODULE_21__main_component__["a" /* MainComponent */]]
        })
    ], MainModule);
    return MainModule;
}());



/***/ }),

/***/ "../../../../../src/Bck/AccountingBundle/Resources/public/supplier-document/index/ts/src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("../../../platform-browser-dynamic/esm5/platform-browser-dynamic.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_cli_conf_environments_environment__ = __webpack_require__("../../../../../angular_cli_conf/environments/environment.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__main_module__ = __webpack_require__("../../../../../src/Bck/AccountingBundle/Resources/public/supplier-document/index/ts/src/main.module.ts");

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

/***/ "../../../../../src/Bck/AccountingBundle/Resources/public/supplier-document/index/ts/templates/main.component.html":
/***/ (function(module, exports) {

module.exports = "\n\n<div class=\"ibox\" >\n                        <div class=\"ibox-title\" *ngIf=\"!getProviderExtraDataAttr('hasMergeHeader')\">\n                <h5>\n                    <ng-template [ngIf]=\"getProviderAttr('controls')['expander']['isEnabled']\"><js_expander\n                        [isExpanded]=\"_isExpanded || null\"\n                        [label]=\"getLang(getProviderAttr('label'))\"\n                        [labelCount]=\"getProviderAttr('labelCount')\"\n                        [labelIcon]=\"getProviderAttr('labelIcon')\"\n                        (onChange)=\"expanderAction($event)\"></js_expander></ng-template>\n                    <ng-template [ngIf]=\"!getProviderAttr('controls')['expander']['isEnabled']\">\n                        <span [innerHTML]=\"getProviderAttr('label')\"></span>\n                    </ng-template>\n                </h5>\n                <div *ngIf=\"_isExpanded\"\n                     class=\"txt-align-r hide-on-empty\">    <div class=\"row align-items-center\">\n        <div class=\"col ml-auto text-right actions no-user-select\">\n            <ng-template [ngIf]=\"_actionsService.getActionAttr('search', 'isEnabled')\"><js_search class=\"search\"></js_search></ng-template>\n            <div (click)=\"triggerAction($event)\">\n                <ng-template ngFor let-action [ngForOf]=\"_actionsService.getHeadActions()\">\n                    <a *ngIf=\"_actionsService.getActionAttr(action, 'isEnabled')\"\n                       [ngClass]=\"[_actionsService.getActionAttr(action, 'icon')]\"\n                       class=\"-round fa\"\n                       [attr.data-action]=\"action\"></a>\n                </ng-template>\n            </div>\n        </div>\n    </div>\n</div>\n            </div>\n            \n    <div [hidden]=\"!(_isExpanded)\" class=\"ibox-content hide-on-empty\">    <ng-template [ngIf]=\"(_dataService.getProviderAttr('objects') && _dataService.getProviderAttr('objects')[0])\">\n                \n    <div class=\"table-responsive\">\n    <form>    <table class=\"data-table table table-hover dataTables-example table-bordered\">\n        <thead>\n        <tr>\n            <th *ngFor=\"let searchField of _dataService.getSearch('fields')\">{{ getLang(_dataService.getFields('metadata')[searchField].label) }}</th>\n            <th>&nbsp;</th>\n        </tr>\n        </thead>        <tbody>\n        <ng-template ngFor let-obj [ngForOf]=\"_dataService.getProviderAttr('objects')\" let-objIndex=\"index\">\n        <tr (dblclick)=\"editAction($event, objIndex)\"            [ngClass]=\"getLegendClasses(obj, 'tr')\">                    <td *ngFor=\"let searchField of _dataService.getSearch('fields')\"\n    [ngClass]=\"getColAlign(searchField)\"\n    [innerHTML]=\"obj[searchField]\"></td>                        <td>\n                <span *ngIf=\"obj['_isNew']\" class=\"badge badge-info\">New</span>\n                <span *ngIf=\"obj['_isEdited']\" class=\"badge badge-info\">Edited</span>\n                <input *ngIf=\"_actionsService.getActionAttr('radioChoice', 'isEnabled')\"\n                       class=\"pull-right action\"\n                       type=\"radio\"\n                       name=\"index[]\"\n                       value=\"{{objIndex}}\"/>\n                <input *ngIf=\"_actionsService.getActionAttr('checkAll', 'isEnabled')\"\n                       class=\"pull-right action js_checkAll\"\n                       type=\"checkbox\"\n                       name=\"index[]\"\n                       value=\"{{objIndex}}\"\n                       [ngModel]=\"checkAll\"/>\n                <div class=\"pull-right actions no-user-select text-secondary\" (click)=\"triggerAction($event)\">\n                    <ng-template ngFor let-action [ngForOf]=\"_actionsService.getDetailActions()\">\n                        <a *ngIf=\"_actionsService.getActionAttr(action, 'isEnabled')\"\n                           [ngClass]=\"[_actionsService.getActionAttr(action, 'icon') + getActionsLegendClasses(obj, action)]\"\n                           class=\"fa\"\n                           [attr.data-action]=\"action\"\n                           [attr.data-value]=\"objIndex\"></a>\n                    </ng-template>\n                </div>\n            </td>        </tr>\n        </ng-template>\n        </tbody>\n    </table>\n    </form></div>    </ng-template><p\n        class=\"text-center\"\n        *ngIf=\"!(_dataService.getProviderAttr('objects') && _dataService.getProviderAttr('objects')[0])\">No results.</p>\n</div>\n        <div [hidden]=\"!(_isExpanded)\"\n         class=\"ibox-footer\"\n         *ngIf=\"_dataService.countObjects() > 0\"><js_searchPagination></js_searchPagination></div>\n\n</div>\n\n<js_legend></js_legend>"

/***/ }),

/***/ "../../../../../src/Bck/AccountingBundle/Resources/public/supplier-document/ts/base-invoice-document-form-popup.ext-component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BaseInvoiceDocumentFormPopupExtComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__base_document_ts_base_form_popup_ext_component__ = __webpack_require__("../../../../../src/Bck/AccountingBundle/Resources/public/base-document/ts/base-form-popup.ext-component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__AppBundle_Resources_public_ts_data_service_data_service__ = __webpack_require__("../../../../../src/AppBundle/Resources/public/ts/data-service/data.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__AppBundle_Resources_public_ts_actions_actions_service__ = __webpack_require__("../../../../../src/AppBundle/Resources/public/ts/actions/actions.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__AppBundle_Resources_public_form_ts_form_service__ = __webpack_require__("../../../../../src/AppBundle/Resources/public/form/ts/form.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__AppBundle_Resources_public_ts_nav_manager_nav_manager_service__ = __webpack_require__("../../../../../src/AppBundle/Resources/public/ts/nav-manager/nav-manager.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__AppBundle_Resources_public_wizard_ts_src_wizard_manager_service__ = __webpack_require__("../../../../../src/AppBundle/Resources/public/wizard/ts/src/wizard-manager.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__supplier_document_invoice_index_ts_src_main_ext_module__ = __webpack_require__("../../../../../src/Bck/AccountingBundle/Resources/public/supplier-document-invoice/index/ts/src/main.ext-module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__supplier_document_invoice_edit_ts_src_form_popup_ext_module__ = __webpack_require__("../../../../../src/Bck/AccountingBundle/Resources/public/supplier-document-invoice/edit/ts/src/form-popup.ext-module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__supplier_document_invoice_add_ts_src_form_popup_ext_module__ = __webpack_require__("../../../../../src/Bck/AccountingBundle/Resources/public/supplier-document-invoice/add/ts/src/form-popup.ext-module.ts");
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







/* Import dependencies */



/* /Import dependencies */
var BaseInvoiceDocumentFormPopupExtComponent = (function (_super) {
    __extends(BaseInvoiceDocumentFormPopupExtComponent, _super);
    function BaseInvoiceDocumentFormPopupExtComponent() {
        return _super.call(this) || this;
    }
    BaseInvoiceDocumentFormPopupExtComponent.prototype.initBaseInvoiceDocumentFormPopupExtComponent = function (elementRef, renderer, provider, formService, dataService, injector, parentDataService, helperService, dynamicComponentLoaderService, postService) {
        _super.prototype.initBaseFormPopupExtComponent.call(this, elementRef, renderer, provider, formService, dataService, injector);
        // Constructor vars
        this._parentDataService = parentDataService;
        this._helperService = helperService;
        this._dynamicComponentLoaderService = dynamicComponentLoaderService;
        this._postService = postService;
        // Save initial object to detect changes
        this._object = this._dataService.getObject();
    };
    /**
     * Overrides the parent method
     * @returns {Promise}
     */
    BaseInvoiceDocumentFormPopupExtComponent.prototype.save = function () {
        var that = this, route = this._dataService.getRoute('edit-invoice');
        return new Promise(function (resolve, reject) {
            that._formService.save(route).then(function (data) { return resolve(data); }, function (errors) { return reject(errors); });
        });
    };
    /**
     * Lifecycle callback
     */
    BaseInvoiceDocumentFormPopupExtComponent.prototype.ngAfterViewInit = function () {
        var _this = this;
        _super.prototype.ngAfterViewInit.call(this);
        // Load dependency
        var that = this, dependencyUrlProvider = (this._helperService.getAppVar('route')
            + 'bck/accounting/supplier-document-invoice-detail/data/'
            + this._formService.getObject()['id']);
        this._postService.post(dependencyUrlProvider, null).then(function (data) {
            var providers = [
                { provide: 'DataService', useClass: __WEBPACK_IMPORTED_MODULE_2__AppBundle_Resources_public_ts_data_service_data_service__["a" /* DataService */] },
                __WEBPACK_IMPORTED_MODULE_3__AppBundle_Resources_public_ts_actions_actions_service__["a" /* ActionsService */],
                { provide: 'DataServiceProvider', useValue: that._helperService.getDataServiceProvider(data) },
                { provide: 'ActionsServiceProvider', useValue: that._helperService.getActionsServiceProvider(data) },
                { provide: 'LegendProvider', useValue: that._helperService.getLegendProvider(data) },
                { provide: 'Provider', useValue: that._helperService.getDataBoxProvider(data) },
                { provide: 'Popups', useValue: {
                        add: {
                            module: __WEBPACK_IMPORTED_MODULE_9__supplier_document_invoice_add_ts_src_form_popup_ext_module__["a" /* FormPopupExtModule */],
                            component: 'FormPopupComponent',
                            providers: [
                                __WEBPACK_IMPORTED_MODULE_4__AppBundle_Resources_public_form_ts_form_service__["a" /* FormService */],
                                { provide: 'Provider', useValue: _this._helperService.getFormProvider(data) },
                                { provide: 'ParentFormService', useValue: that._formService },
                                __WEBPACK_IMPORTED_MODULE_5__AppBundle_Resources_public_ts_nav_manager_nav_manager_service__["a" /* NavManagerService */],
                                __WEBPACK_IMPORTED_MODULE_6__AppBundle_Resources_public_wizard_ts_src_wizard_manager_service__["a" /* WizardManagerService */]
                            ]
                        },
                        edit: {
                            module: __WEBPACK_IMPORTED_MODULE_8__supplier_document_invoice_edit_ts_src_form_popup_ext_module__["a" /* FormPopupExtModule */],
                            component: 'FormPopupComponent',
                            providers: [
                                __WEBPACK_IMPORTED_MODULE_4__AppBundle_Resources_public_form_ts_form_service__["a" /* FormService */],
                                { provide: 'Provider', useValue: _this._helperService.getFormProvider(data) }
                            ]
                        }
                    } },
                { provide: 'ParentDataService', useValue: _this._dataService }
            ], injector = __WEBPACK_IMPORTED_MODULE_0__angular_core__["T" /* ReflectiveInjector */].fromResolvedProviders(__WEBPACK_IMPORTED_MODULE_0__angular_core__["T" /* ReflectiveInjector */].resolve(providers), that._injector);
            var dependencyDataService = injector.get('DataService');
            that.onObjectsChangeSubscription_documentInvoiceDetail
                = dependencyDataService.getOnObjectsChangeEmitter()
                    .subscribe(function (data) {
                    // Update local object
                    that._dataService.refreshObject();
                });
            that._dynamicComponentLoaderService.load(__WEBPACK_IMPORTED_MODULE_7__supplier_document_invoice_index_ts_src_main_ext_module__["a" /* MainExtModule */], 'MainComponent', that.lazyLoadViewContainerRef, injector).then(function (componentRef) {
                return true;
            }, function (errors) { console.log(errors); return null; });
        }, function (errors) { console.log(errors); return false; });
    };
    /**
     * Lifecycle callback
     */
    BaseInvoiceDocumentFormPopupExtComponent.prototype.ngOnDestroy = function () {
        // Check subscription (if component load fail, subscription may not exist)
        if (this.onObjectsChangeSubscription_documentInvoiceDetail) {
            this.onObjectsChangeSubscription_documentInvoiceDetail.unsubscribe();
        }
        // If object has no changes or "id" is not defined, popup was open and closed without save the object,
        // and if the flag '_isSessionStorage' is defined, the object was not saved in database,
        // so doesn't make sense refresh the objects
        if ((this._object != this._dataService.getObject())
            && (this._dataService.getObject()['id'])
            && (!this._dataService.getObject()['_isSessionStorage'])
            && this._parentDataService) {
            // Update object and parent object
            this._parentDataService.refreshObject();
        }
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_7" /* ViewChild */])('js_lazyLoadContainer', { read: __WEBPACK_IMPORTED_MODULE_0__angular_core__["_9" /* ViewContainerRef */] }),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["_9" /* ViewContainerRef */])
    ], BaseInvoiceDocumentFormPopupExtComponent.prototype, "lazyLoadViewContainerRef", void 0);
    BaseInvoiceDocumentFormPopupExtComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: '.js_baseSupplierDocumentFormPopup',
            template: ''
        }),
        __metadata("design:paramtypes", [])
    ], BaseInvoiceDocumentFormPopupExtComponent);
    return BaseInvoiceDocumentFormPopupExtComponent;
}(__WEBPACK_IMPORTED_MODULE_1__base_document_ts_base_form_popup_ext_component__["a" /* BaseFormPopupExtComponent */]));



/***/ }),

/***/ "../../../../../src/Bck/AccountingBundle/Resources/public/supplier-document/ts/base-invoice-rectification-document-form-popup.ext-component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BaseInvoiceRectificationDocumentFormPopupExtComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__base_document_ts_base_form_popup_ext_component__ = __webpack_require__("../../../../../src/Bck/AccountingBundle/Resources/public/base-document/ts/base-form-popup.ext-component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__AppBundle_Resources_public_ts_data_service_data_service__ = __webpack_require__("../../../../../src/AppBundle/Resources/public/ts/data-service/data.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__AppBundle_Resources_public_ts_actions_actions_service__ = __webpack_require__("../../../../../src/AppBundle/Resources/public/ts/actions/actions.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__AppBundle_Resources_public_form_ts_form_service__ = __webpack_require__("../../../../../src/AppBundle/Resources/public/form/ts/form.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__AppBundle_Resources_public_ts_nav_manager_nav_manager_service__ = __webpack_require__("../../../../../src/AppBundle/Resources/public/ts/nav-manager/nav-manager.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__AppBundle_Resources_public_wizard_ts_src_wizard_manager_service__ = __webpack_require__("../../../../../src/AppBundle/Resources/public/wizard/ts/src/wizard-manager.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__supplier_document_rectification_index_ts_src_main_ext_module__ = __webpack_require__("../../../../../src/Bck/AccountingBundle/Resources/public/supplier-document-rectification/index/ts/src/main.ext-module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__supplier_document_rectification_edit_ts_src_form_popup_ext_module__ = __webpack_require__("../../../../../src/Bck/AccountingBundle/Resources/public/supplier-document-rectification/edit/ts/src/form-popup.ext-module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__supplier_document_rectification_add_ts_src_form_popup_ext_module__ = __webpack_require__("../../../../../src/Bck/AccountingBundle/Resources/public/supplier-document-rectification/add/ts/src/form-popup.ext-module.ts");
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







/* Import dependencies */



/* /Import dependencies */
var BaseInvoiceRectificationDocumentFormPopupExtComponent = (function (_super) {
    __extends(BaseInvoiceRectificationDocumentFormPopupExtComponent, _super);
    function BaseInvoiceRectificationDocumentFormPopupExtComponent() {
        return _super.call(this) || this;
    }
    BaseInvoiceRectificationDocumentFormPopupExtComponent.prototype.initBaseInvoiceRectificationDocumentFormPopupExtComponent = function (elementRef, renderer, provider, formService, dataService, injector, parentDataService, helperService, dynamicComponentLoaderService, postService) {
        _super.prototype.initBaseFormPopupExtComponent.call(this, elementRef, renderer, provider, formService, dataService, injector);
        // Constructor vars
        this._parentDataService = parentDataService;
        this._helperService = helperService;
        this._dynamicComponentLoaderService = dynamicComponentLoaderService;
        this._postService = postService;
        // Save initial object to detect changes
        this._object = this._dataService.getObject();
    };
    /**
     * Overrides the parent method
     * @returns {Promise}
     */
    BaseInvoiceRectificationDocumentFormPopupExtComponent.prototype.save = function () {
        var that = this, route = this._dataService.getRoute('edit-invoice');
        return new Promise(function (resolve, reject) {
            that._formService.save(route).then(function (data) { return resolve(data); }, function (errors) { return reject(errors); });
        });
    };
    /**
     * Lifecycle callback
     */
    BaseInvoiceRectificationDocumentFormPopupExtComponent.prototype.ngAfterViewInit = function () {
        var _this = this;
        _super.prototype.ngAfterViewInit.call(this);
        // Load dependency
        var that = this, dependencyUrlProvider = (this._helperService.getAppVar('route')
            + 'bck/accounting/supplier-document-invoice-rectification/data/'
            + this._formService.getObject()['id']);
        this._postService.post(dependencyUrlProvider, null).then(function (data) {
            var providers = [
                { provide: 'DataService', useClass: __WEBPACK_IMPORTED_MODULE_2__AppBundle_Resources_public_ts_data_service_data_service__["a" /* DataService */] },
                __WEBPACK_IMPORTED_MODULE_3__AppBundle_Resources_public_ts_actions_actions_service__["a" /* ActionsService */],
                { provide: 'DataServiceProvider', useValue: that._helperService.getDataServiceProvider(data) },
                { provide: 'ActionsServiceProvider', useValue: that._helperService.getActionsServiceProvider(data) },
                { provide: 'LegendProvider', useValue: that._helperService.getLegendProvider(data) },
                { provide: 'Provider', useValue: that._helperService.getDataBoxProvider(data) },
                { provide: 'Popups', useValue: {
                        add: {
                            module: __WEBPACK_IMPORTED_MODULE_9__supplier_document_rectification_add_ts_src_form_popup_ext_module__["a" /* FormPopupExtModule */],
                            component: 'FormPopupComponent',
                            providers: [
                                __WEBPACK_IMPORTED_MODULE_4__AppBundle_Resources_public_form_ts_form_service__["a" /* FormService */],
                                { provide: 'Provider', useValue: _this._helperService.getFormProvider(data) },
                                { provide: 'ParentFormService', useValue: that._formService },
                                __WEBPACK_IMPORTED_MODULE_5__AppBundle_Resources_public_ts_nav_manager_nav_manager_service__["a" /* NavManagerService */],
                                __WEBPACK_IMPORTED_MODULE_6__AppBundle_Resources_public_wizard_ts_src_wizard_manager_service__["a" /* WizardManagerService */]
                            ]
                        },
                        edit: {
                            module: __WEBPACK_IMPORTED_MODULE_8__supplier_document_rectification_edit_ts_src_form_popup_ext_module__["a" /* FormPopupExtModule */],
                            component: 'FormPopupComponent',
                            providers: [
                                __WEBPACK_IMPORTED_MODULE_4__AppBundle_Resources_public_form_ts_form_service__["a" /* FormService */],
                                { provide: 'Provider', useValue: that._helperService.getFormProvider(data) }
                            ]
                        }
                    } },
                { provide: 'ParentDataService', useValue: that._dataService }
            ], injector = __WEBPACK_IMPORTED_MODULE_0__angular_core__["T" /* ReflectiveInjector */].fromResolvedProviders(__WEBPACK_IMPORTED_MODULE_0__angular_core__["T" /* ReflectiveInjector */].resolve(providers), that._injector);
            var dependencyDataService = injector.get('DataService');
            that._onDependencyObjectsChangeSubscription
                = dependencyDataService.getOnObjectsChangeEmitter()
                    .subscribe(function (data) {
                    // Update local object
                    that._dataService.refreshObject();
                });
            that._dynamicComponentLoaderService.load(__WEBPACK_IMPORTED_MODULE_7__supplier_document_rectification_index_ts_src_main_ext_module__["a" /* MainExtModule */], 'MainComponent', that.lazyLoadViewContainerRef, injector).then(function (componentRef) { return true; }, function (errors) { console.log(errors); return null; });
        }, function (errors) { console.log(errors); return false; });
    };
    /**
     * Lifecycle callback
     */
    BaseInvoiceRectificationDocumentFormPopupExtComponent.prototype.ngOnDestroy = function () {
        // Check subscription (if component load fail, subscription may not exist)
        if (this._onDependencyObjectsChangeSubscription) {
            this._onDependencyObjectsChangeSubscription.unsubscribe();
        }
        // If object has no changes or "id" is not defined, popup was open and closed without save the object,
        // and if the flag '_isSessionStorage' is defined, the object was not saved in database,
        // so doesn't make sense refresh the objects
        if ((this._object != this._dataService.getObject())
            && (this._dataService.getObject()['id'])
            && (!this._dataService.getObject()['_isSessionStorage'])
            && this._parentDataService) {
            // Update object and parent object
            this._parentDataService.refreshObject();
        }
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_7" /* ViewChild */])('js_lazyLoadContainer', { read: __WEBPACK_IMPORTED_MODULE_0__angular_core__["_9" /* ViewContainerRef */] }),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["_9" /* ViewContainerRef */])
    ], BaseInvoiceRectificationDocumentFormPopupExtComponent.prototype, "lazyLoadViewContainerRef", void 0);
    BaseInvoiceRectificationDocumentFormPopupExtComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: '.js_baseSupplierInvoiceRectificationDocumentFormPopup',
            template: ''
        }),
        __metadata("design:paramtypes", [])
    ], BaseInvoiceRectificationDocumentFormPopupExtComponent);
    return BaseInvoiceRectificationDocumentFormPopupExtComponent;
}(__WEBPACK_IMPORTED_MODULE_1__base_document_ts_base_form_popup_ext_component__["a" /* BaseFormPopupExtComponent */]));



/***/ }),

/***/ "../../../../../src/Bck/AccountingBundle/Resources/public/supplier-document/ts/base-receipt-document-form-popup.ext-component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BaseReceiptDocumentFormPopupExtComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__base_document_ts_base_form_popup_ext_component__ = __webpack_require__("../../../../../src/Bck/AccountingBundle/Resources/public/base-document/ts/base-form-popup.ext-component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__AppBundle_Resources_public_ts_data_service_data_service__ = __webpack_require__("../../../../../src/AppBundle/Resources/public/ts/data-service/data.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__AppBundle_Resources_public_ts_actions_actions_service__ = __webpack_require__("../../../../../src/AppBundle/Resources/public/ts/actions/actions.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__AppBundle_Resources_public_form_ts_form_service__ = __webpack_require__("../../../../../src/AppBundle/Resources/public/form/ts/form.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__AppBundle_Resources_public_ts_nav_manager_nav_manager_service__ = __webpack_require__("../../../../../src/AppBundle/Resources/public/ts/nav-manager/nav-manager.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__AppBundle_Resources_public_wizard_ts_src_wizard_manager_service__ = __webpack_require__("../../../../../src/AppBundle/Resources/public/wizard/ts/src/wizard-manager.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__supplier_document_settlement_index_ts_src_main_ext_module__ = __webpack_require__("../../../../../src/Bck/AccountingBundle/Resources/public/supplier-document-settlement/index/ts/src/main.ext-module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__supplier_document_settlement_edit_ts_src_form_popup_ext_module__ = __webpack_require__("../../../../../src/Bck/AccountingBundle/Resources/public/supplier-document-settlement/edit/ts/src/form-popup.ext-module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__supplier_document_settlement_add_ts_src_form_popup_ext_module__ = __webpack_require__("../../../../../src/Bck/AccountingBundle/Resources/public/supplier-document-settlement/add/ts/src/form-popup.ext-module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__supplier_document_payment_index_ts_src_main_ext_module__ = __webpack_require__("../../../../../src/Bck/AccountingBundle/Resources/public/supplier-document-payment/index/ts/src/main.ext-module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__supplier_document_payment_edit_ts_src_form_popup_ext_module__ = __webpack_require__("../../../../../src/Bck/AccountingBundle/Resources/public/supplier-document-payment/edit/ts/src/form-popup.ext-module.ts");
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







/* Import dependencies */
// SupplierDocumentReceiptSettlement



// SupplierDocumentReceiptPayment


/* /Import dependencies */
var BaseReceiptDocumentFormPopupExtComponent = (function (_super) {
    __extends(BaseReceiptDocumentFormPopupExtComponent, _super);
    function BaseReceiptDocumentFormPopupExtComponent() {
        var _this = _super.call(this) || this;
        _this._llViewContainerRefArr = [];
        // Data service of dependencies to calc the "diffControl" [settlement, payment]
        _this._dependencyDataServiceArr = [null, null];
        // To handle with dependencies objects changes to refresh the diffControl
        _this._onDependencyObjectsChangeSubscription = [null, null];
        return _this;
    }
    BaseReceiptDocumentFormPopupExtComponent.prototype.initBaseReceiptDocumentFormPopupExtComponent = function (elementRef, renderer, provider, formService, dataService, injector, parentDataService, helperService, dynamicComponentLoaderService, postService) {
        _super.prototype.initBaseFormPopupExtComponent.call(this, elementRef, renderer, provider, formService, dataService, injector);
        // Constructor vars
        this._parentDataService = parentDataService;
        this._helperService = helperService;
        this._dynamicComponentLoaderService = dynamicComponentLoaderService;
        this._postService = postService;
        // Save initial object to detect changes
        //this._object = this._dataService.getObject(); // DISABLED BECAUSE PARENT OBJECT IS NOT UPDATED, CHECK BELOW
    };
    /**
     * Refresh diff control
     * @returns {BaseReceiptDocumentFormPopupExtComponent}
     */
    BaseReceiptDocumentFormPopupExtComponent.prototype.refreshDiffControl = function () {
        if (!this._dependencyDataServiceArr[0] || !this._dependencyDataServiceArr[1]) {
            // Dependencies has not been loaded yet
            return this;
        }
        // [settlement, payment]
        var totals = [0, 0];
        for (var index in this._dependencyDataServiceArr) {
            var objects = this._dependencyDataServiceArr[index].getProviderAttr('objects');
            for (var _i = 0, objects_1 = objects; _i < objects_1.length; _i++) {
                var object = objects_1[_i];
                totals[index] += parseFloat(object['value'] || '0');
            }
        }
        this._$diffControl.val((Math.round((totals[0] - totals[1]) * 100) / 100).toFixed(2));
        return this;
    };
    /**
     * Overrides the parent method
     * @returns {Promise}
     */
    BaseReceiptDocumentFormPopupExtComponent.prototype.save = function () {
        var that = this, route = this._dataService.getRoute('edit-receipt');
        return new Promise(function (resolve, reject) {
            that._formService.save(route).then(function (data) { return resolve(data); }, function (errors) { return reject(errors); });
        });
    };
    /**
     * Load dependency
     * @param dependency
     * @param module
     * @param viewContainerRef
     * @returns {Object}
     */
    BaseReceiptDocumentFormPopupExtComponent.prototype.loadDependency = function (dependency, module, viewContainerRef) {
        var _this = this;
        // Load dependency
        var that = this, dependencyUrlProvider = (this._helperService.getAppVar('route')
            + 'bck/accounting/supplier-document-receipt-' + dependency + '/data/'
            + this._formService.getObject()['id']);
        this._postService.post(dependencyUrlProvider, null).then(function (data) {
            var providers = [
                { provide: 'DataService', useClass: __WEBPACK_IMPORTED_MODULE_2__AppBundle_Resources_public_ts_data_service_data_service__["a" /* DataService */] },
                __WEBPACK_IMPORTED_MODULE_3__AppBundle_Resources_public_ts_actions_actions_service__["a" /* ActionsService */],
                { provide: 'DataServiceProvider', useValue: that._helperService.getDataServiceProvider(data) },
                { provide: 'ActionsServiceProvider', useValue: that._helperService.getActionsServiceProvider(data) },
                { provide: 'LegendProvider', useValue: that._helperService.getLegendProvider(data) },
                { provide: 'Provider', useValue: that._helperService.getDataBoxProvider(data) },
                { provide: 'ParentDataService', useValue: _this._dataService }
            ], dependencyIndex = 0;
            switch (dependency) {
                case 'settlement':
                    dependencyIndex = 0;
                    // Popups provider
                    providers = providers.concat([
                        { provide: 'Popups', useValue: {
                                add: {
                                    module: __WEBPACK_IMPORTED_MODULE_9__supplier_document_settlement_add_ts_src_form_popup_ext_module__["a" /* FormPopupExtModule */],
                                    component: 'FormPopupComponent',
                                    providers: [
                                        __WEBPACK_IMPORTED_MODULE_4__AppBundle_Resources_public_form_ts_form_service__["a" /* FormService */],
                                        { provide: 'Provider', useValue: _this._helperService.getFormProvider(data) },
                                        { provide: 'ParentFormService', useValue: that._formService },
                                        __WEBPACK_IMPORTED_MODULE_5__AppBundle_Resources_public_ts_nav_manager_nav_manager_service__["a" /* NavManagerService */],
                                        __WEBPACK_IMPORTED_MODULE_6__AppBundle_Resources_public_wizard_ts_src_wizard_manager_service__["a" /* WizardManagerService */]
                                    ]
                                },
                                edit: {
                                    module: __WEBPACK_IMPORTED_MODULE_8__supplier_document_settlement_edit_ts_src_form_popup_ext_module__["a" /* FormPopupExtModule */],
                                    component: 'FormPopupComponent',
                                    providers: [
                                        __WEBPACK_IMPORTED_MODULE_4__AppBundle_Resources_public_form_ts_form_service__["a" /* FormService */],
                                        { provide: 'Provider', useValue: that._helperService.getFormProvider(data) }
                                    ]
                                }
                            } }
                    ]);
                    break;
                default:
                    dependencyIndex = 1;
                    // Popups provider
                    providers = providers.concat([
                        { provide: 'Popups', useValue: {
                                module: __WEBPACK_IMPORTED_MODULE_11__supplier_document_payment_edit_ts_src_form_popup_ext_module__["a" /* FormPopupExtModule */],
                                component: 'FormPopupComponent',
                                providers: [
                                    __WEBPACK_IMPORTED_MODULE_4__AppBundle_Resources_public_form_ts_form_service__["a" /* FormService */],
                                    { provide: 'Provider', useValue: _this._helperService.getFormProvider(data) }
                                ]
                            } }
                    ]);
            }
            var injector = __WEBPACK_IMPORTED_MODULE_0__angular_core__["T" /* ReflectiveInjector */].fromResolvedProviders(__WEBPACK_IMPORTED_MODULE_0__angular_core__["T" /* ReflectiveInjector */].resolve(providers), that._injector);
            that._dependencyDataServiceArr[dependencyIndex] = injector.get('DataService');
            that._onDependencyObjectsChangeSubscription[dependencyIndex]
                = that._dependencyDataServiceArr[dependencyIndex].getOnObjectsChangeEmitter()
                    .subscribe(function (data) { that.refreshDiffControl(); });
            that._dynamicComponentLoaderService.load(module, 'MainComponent', viewContainerRef, injector).then(function (componentRef) {
                that.refreshDiffControl();
                return true;
            }, function (errors) { console.log(errors); return null; });
        }, function (errors) { console.log(errors); return false; });
        return this;
    };
    /**
     * Lifecycle callback
     */
    BaseReceiptDocumentFormPopupExtComponent.prototype.ngAfterViewInit = function () {
        _super.prototype.ngAfterViewInit.call(this);
        // Get array of ViewContainerRef
        this._llViewContainerRefArr = this.lazyLoadViewContainerRefQL.toArray();
        // Diff control
        this._$diffControl = $(this._elementRef.nativeElement).find('.js_diffControl');
        this.loadDependency('settlement', __WEBPACK_IMPORTED_MODULE_7__supplier_document_settlement_index_ts_src_main_ext_module__["a" /* MainExtModule */], this._llViewContainerRefArr[0]);
        this.loadDependency('payment', __WEBPACK_IMPORTED_MODULE_10__supplier_document_payment_index_ts_src_main_ext_module__["a" /* MainExtModule */], this._llViewContainerRefArr[1]);
    };
    /**
     * Lifecycle callback
     */
    BaseReceiptDocumentFormPopupExtComponent.prototype.ngOnDestroy = function () {
        // Check subscription (if component load fail, subscription may not exist)
        if (this._onDependencyObjectsChangeSubscription[0]) {
            this._onDependencyObjectsChangeSubscription[0].unsubscribe();
        }
        // Check subscription (if component load fail, subscription may not exist)
        if (this._onDependencyObjectsChangeSubscription[1]) {
            this._onDependencyObjectsChangeSubscription[1].unsubscribe();
        }
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChildren */])('js_lazyLoadContainer', { read: __WEBPACK_IMPORTED_MODULE_0__angular_core__["_9" /* ViewContainerRef */] }),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["S" /* QueryList */])
    ], BaseReceiptDocumentFormPopupExtComponent.prototype, "lazyLoadViewContainerRefQL", void 0);
    BaseReceiptDocumentFormPopupExtComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: '.js_baseSupplierDocumentReceiptFormPopup',
            template: ''
        }),
        __metadata("design:paramtypes", [])
    ], BaseReceiptDocumentFormPopupExtComponent);
    return BaseReceiptDocumentFormPopupExtComponent;
}(__WEBPACK_IMPORTED_MODULE_1__base_document_ts_base_form_popup_ext_component__["a" /* BaseFormPopupExtComponent */]));



/***/ }),

/***/ "../../../../../src/Bck/AccountingBundle/Resources/public/supplier-document/ts/base-receipt-payment-document-form-popup.ext-component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BaseReceiptPaymentDocumentFormPopupExtComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__base_document_ts_base_form_popup_ext_component__ = __webpack_require__("../../../../../src/Bck/AccountingBundle/Resources/public/base-document/ts/base-form-popup.ext-component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__AppBundle_Resources_public_ts_data_service_data_service__ = __webpack_require__("../../../../../src/AppBundle/Resources/public/ts/data-service/data.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__AppBundle_Resources_public_ts_actions_actions_service__ = __webpack_require__("../../../../../src/AppBundle/Resources/public/ts/actions/actions.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__AppBundle_Resources_public_form_ts_form_service__ = __webpack_require__("../../../../../src/AppBundle/Resources/public/form/ts/form.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__supplier_document_payment_index_ts_src_main_ext_module__ = __webpack_require__("../../../../../src/Bck/AccountingBundle/Resources/public/supplier-document-payment/index/ts/src/main.ext-module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__supplier_document_payment_edit_ts_src_form_popup_ext_module__ = __webpack_require__("../../../../../src/Bck/AccountingBundle/Resources/public/supplier-document-payment/edit/ts/src/form-popup.ext-module.ts");
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





/* Import dependencies */
// SupplierDocumentReceiptPayment


/* /Import dependencies */
var BaseReceiptPaymentDocumentFormPopupExtComponent = (function (_super) {
    __extends(BaseReceiptPaymentDocumentFormPopupExtComponent, _super);
    function BaseReceiptPaymentDocumentFormPopupExtComponent() {
        var _this = _super.call(this) || this;
        // Data service of dependency to calc the "diffControl"
        _this._dependencyDataService = null;
        // To handle with dependency objects change to refresh the diffControl
        _this._onDependencyObjectsChangeSubscription = null;
        return _this;
    }
    BaseReceiptPaymentDocumentFormPopupExtComponent.prototype.initBaseReceiptPaymentDocumentFormPopupExtComponent = function (elementRef, renderer, provider, formService, dataService, injector, parentDataService, helperService, dynamicComponentLoaderService, postService) {
        _super.prototype.initBaseFormPopupExtComponent.call(this, elementRef, renderer, provider, formService, dataService, injector);
        // Constructor vars
        this._parentDataService = parentDataService;
        this._helperService = helperService;
        this._dynamicComponentLoaderService = dynamicComponentLoaderService;
        this._postService = postService;
        // Save initial object to detect changes
        //this._object = this._dataService.getObject(); // DISABLED BECAUSE PARENT OBJECT IS NOT UPDATED, CHECK BELOW
    };
    /**
     * Overrides the parent method
     * @returns {Promise}
     */
    BaseReceiptPaymentDocumentFormPopupExtComponent.prototype.save = function () {
        var that = this, route = this._dataService.getRoute('edit-payment');
        return new Promise(function (resolve, reject) {
            that._formService.save(route).then(function (data) { return resolve(data); }, function (errors) { return reject(errors); });
        });
    };
    /**
     * Lifecycle callback
     */
    BaseReceiptPaymentDocumentFormPopupExtComponent.prototype.ngAfterViewInit = function () {
        _super.prototype.ngAfterViewInit.call(this);
        var that = this, dependencyUrlProvider = (this._helperService.getAppVar('route')
            + 'bck/accounting/supplier-document-receipt-payment/data/'
            + this._formService.getObject()['id']);
        // Load dependency
        this._postService.post(dependencyUrlProvider, null).then(function (data) {
            var providers = [
                { provide: 'DataService', useClass: __WEBPACK_IMPORTED_MODULE_2__AppBundle_Resources_public_ts_data_service_data_service__["a" /* DataService */] },
                __WEBPACK_IMPORTED_MODULE_3__AppBundle_Resources_public_ts_actions_actions_service__["a" /* ActionsService */],
                { provide: 'DataServiceProvider', useValue: that._helperService.getDataServiceProvider(data) },
                { provide: 'ActionsServiceProvider', useValue: that._helperService.getActionsServiceProvider(data) },
                { provide: 'LegendProvider', useValue: that._helperService.getLegendProvider(data) },
                { provide: 'Provider', useValue: that._helperService.getDataBoxProvider(data) },
                { provide: 'Popups', useValue: {
                        module: __WEBPACK_IMPORTED_MODULE_6__supplier_document_payment_edit_ts_src_form_popup_ext_module__["a" /* FormPopupExtModule */],
                        component: 'FormPopupComponent',
                        providers: [
                            __WEBPACK_IMPORTED_MODULE_4__AppBundle_Resources_public_form_ts_form_service__["a" /* FormService */],
                            { provide: 'Provider', useValue: that._helperService.getFormProvider(data) }
                        ]
                    } },
                { provide: 'ParentDataService', useValue: that._dataService }
            ];
            var injector = __WEBPACK_IMPORTED_MODULE_0__angular_core__["T" /* ReflectiveInjector */].fromResolvedProviders(__WEBPACK_IMPORTED_MODULE_0__angular_core__["T" /* ReflectiveInjector */].resolve(providers), that._injector);
            that._dependencyDataService = injector.get('DataService');
            that._onDependencyObjectsChangeSubscription
                = that._dependencyDataService.getOnObjectsChangeEmitter()
                    .subscribe(function (data) {
                    // Update local object
                    that._dataService.refreshObject();
                });
            that._dynamicComponentLoaderService.load(__WEBPACK_IMPORTED_MODULE_5__supplier_document_payment_index_ts_src_main_ext_module__["a" /* MainExtModule */], 'MainComponent', that.lazyLoadViewContainerRef, injector).then(function (componentRef) { return true; }, function (errors) { console.log(errors); return null; });
        }, function (errors) { console.log(errors); return false; });
    };
    /**
     * Lifecycle callback
     */
    BaseReceiptPaymentDocumentFormPopupExtComponent.prototype.ngOnDestroy = function () {
        // Check subscription (if component load fail, subscription may not exist)
        if (this._onDependencyObjectsChangeSubscription) {
            this._onDependencyObjectsChangeSubscription.unsubscribe();
        }
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_7" /* ViewChild */])('js_lazyLoadContainer', { read: __WEBPACK_IMPORTED_MODULE_0__angular_core__["_9" /* ViewContainerRef */] }),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["_9" /* ViewContainerRef */])
    ], BaseReceiptPaymentDocumentFormPopupExtComponent.prototype, "lazyLoadViewContainerRef", void 0);
    BaseReceiptPaymentDocumentFormPopupExtComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: '.js_formPopup',
            template: ''
        }),
        __metadata("design:paramtypes", [])
    ], BaseReceiptPaymentDocumentFormPopupExtComponent);
    return BaseReceiptPaymentDocumentFormPopupExtComponent;
}(__WEBPACK_IMPORTED_MODULE_1__base_document_ts_base_form_popup_ext_component__["a" /* BaseFormPopupExtComponent */]));



/***/ }),

/***/ "../../../../../src/Bck/AccountingBundle/Resources/public/supplier-document/ts/base-receipt-settlement-document-form-popup.ext-component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BaseReceiptSettlementDocumentFormPopupExtComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__base_document_ts_base_form_popup_ext_component__ = __webpack_require__("../../../../../src/Bck/AccountingBundle/Resources/public/base-document/ts/base-form-popup.ext-component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__AppBundle_Resources_public_ts_data_service_data_service__ = __webpack_require__("../../../../../src/AppBundle/Resources/public/ts/data-service/data.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__AppBundle_Resources_public_ts_actions_actions_service__ = __webpack_require__("../../../../../src/AppBundle/Resources/public/ts/actions/actions.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__AppBundle_Resources_public_form_ts_form_service__ = __webpack_require__("../../../../../src/AppBundle/Resources/public/form/ts/form.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__AppBundle_Resources_public_ts_nav_manager_nav_manager_service__ = __webpack_require__("../../../../../src/AppBundle/Resources/public/ts/nav-manager/nav-manager.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__AppBundle_Resources_public_wizard_ts_src_wizard_manager_service__ = __webpack_require__("../../../../../src/AppBundle/Resources/public/wizard/ts/src/wizard-manager.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__supplier_document_settlement_index_ts_src_main_ext_module__ = __webpack_require__("../../../../../src/Bck/AccountingBundle/Resources/public/supplier-document-settlement/index/ts/src/main.ext-module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__supplier_document_settlement_edit_ts_src_form_popup_ext_module__ = __webpack_require__("../../../../../src/Bck/AccountingBundle/Resources/public/supplier-document-settlement/edit/ts/src/form-popup.ext-module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__supplier_document_settlement_add_ts_src_form_popup_ext_module__ = __webpack_require__("../../../../../src/Bck/AccountingBundle/Resources/public/supplier-document-settlement/add/ts/src/form-popup.ext-module.ts");
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







/* Import dependencies */
// SupplierDocumentReceiptSettlement



/* /Import dependencies */
var BaseReceiptSettlementDocumentFormPopupExtComponent = (function (_super) {
    __extends(BaseReceiptSettlementDocumentFormPopupExtComponent, _super);
    function BaseReceiptSettlementDocumentFormPopupExtComponent() {
        var _this = _super.call(this) || this;
        // Data service of dependency to calc the "diffControl"
        _this._dependencyDataService = null;
        // To handle with dependency objects change to refresh the diffControl
        _this._onDependencyObjectsChangeSubscription = null;
        return _this;
    }
    BaseReceiptSettlementDocumentFormPopupExtComponent.prototype.initBaseReceiptSettlementDocumentFormPopupExtComponent = function (elementRef, renderer, provider, formService, dataService, injector, parentDataService, helperService, dynamicComponentLoaderService, postService) {
        _super.prototype.initBaseFormPopupExtComponent.call(this, elementRef, renderer, provider, formService, dataService, injector);
        // Constructor vars
        this._parentDataService = parentDataService;
        this._helperService = helperService;
        this._dynamicComponentLoaderService = dynamicComponentLoaderService;
        this._postService = postService;
        // Save initial object to detect changes
        //this._object = this._dataService.getObject(); // DISABLED BECAUSE PARENT OBJECT IS NOT UPDATED, CHECK BELOW
    };
    /**
     * Refresh diff control
     * @returns {BaseReceiptSettlementDocumentFormPopupExtComponent}
     */
    BaseReceiptSettlementDocumentFormPopupExtComponent.prototype.refreshDiffControl = function () {
        if (!this._dependencyDataService) {
            // Dependencies has not been loaded yet
            return this;
        }
        // [DEBIT, CREDIT]
        var totals = { 'DEBIT': 0, 'CREDIT': 0 };
        var objects = this._dependencyDataService.getProviderAttr('objects');
        for (var _i = 0, objects_1 = objects; _i < objects_1.length; _i++) {
            var object = objects_1[_i];
            totals[object['documentType_operation']] += parseFloat(object['value'] || '0');
        }
        this._$diffControl.val((Math.round((totals.DEBIT - totals.CREDIT) * 100) / 100).toFixed(2));
        return this;
    };
    /**
     * Overrides the parent method
     * @returns {Promise}
     */
    BaseReceiptSettlementDocumentFormPopupExtComponent.prototype.save = function () {
        var that = this, route = this._dataService.getRoute('edit-receipt');
        return new Promise(function (resolve, reject) {
            that._formService.save(route).then(function (data) { return resolve(data); }, function (errors) { return reject(errors); });
        });
    };
    /**
     * Lifecycle callback
     */
    BaseReceiptSettlementDocumentFormPopupExtComponent.prototype.ngAfterViewInit = function () {
        var _this = this;
        _super.prototype.ngAfterViewInit.call(this);
        var that = this, dependencyUrlProvider = (this._helperService.getAppVar('route')
            + 'bck/accounting/supplier-document-receipt-settlement/data/'
            + this._formService.getObject()['id']);
        // Diff control
        this._$diffControl = $(this._elementRef.nativeElement).find('.js_diffControl');
        // Load dependency
        this._postService.post(dependencyUrlProvider, null).then(function (data) {
            var providers = [
                { provide: 'DataService', useClass: __WEBPACK_IMPORTED_MODULE_2__AppBundle_Resources_public_ts_data_service_data_service__["a" /* DataService */] },
                __WEBPACK_IMPORTED_MODULE_3__AppBundle_Resources_public_ts_actions_actions_service__["a" /* ActionsService */],
                { provide: 'DataServiceProvider', useValue: that._helperService.getDataServiceProvider(data) },
                { provide: 'ActionsServiceProvider', useValue: that._helperService.getActionsServiceProvider(data) },
                { provide: 'LegendProvider', useValue: that._helperService.getLegendProvider(data) },
                { provide: 'Provider', useValue: that._helperService.getDataBoxProvider(data) },
                { provide: 'Popups', useValue: {
                        add: {
                            module: __WEBPACK_IMPORTED_MODULE_9__supplier_document_settlement_add_ts_src_form_popup_ext_module__["a" /* FormPopupExtModule */],
                            component: 'FormPopupComponent',
                            providers: [
                                __WEBPACK_IMPORTED_MODULE_4__AppBundle_Resources_public_form_ts_form_service__["a" /* FormService */],
                                { provide: 'Provider', useValue: _this._helperService.getFormProvider(data) },
                                { provide: 'ParentFormService', useValue: that._formService },
                                { provide: 'ParentDataService', useValue: null },
                                __WEBPACK_IMPORTED_MODULE_5__AppBundle_Resources_public_ts_nav_manager_nav_manager_service__["a" /* NavManagerService */],
                                __WEBPACK_IMPORTED_MODULE_6__AppBundle_Resources_public_wizard_ts_src_wizard_manager_service__["a" /* WizardManagerService */]
                            ]
                        },
                        edit: {
                            module: __WEBPACK_IMPORTED_MODULE_8__supplier_document_settlement_edit_ts_src_form_popup_ext_module__["a" /* FormPopupExtModule */],
                            component: 'FormPopupComponent',
                            providers: [
                                __WEBPACK_IMPORTED_MODULE_4__AppBundle_Resources_public_form_ts_form_service__["a" /* FormService */],
                                { provide: 'Provider', useValue: that._helperService.getFormProvider(data) }
                            ]
                        }
                    } },
                { provide: 'ParentDataService', useValue: that._dataService }
            ], injector = __WEBPACK_IMPORTED_MODULE_0__angular_core__["T" /* ReflectiveInjector */].fromResolvedProviders(__WEBPACK_IMPORTED_MODULE_0__angular_core__["T" /* ReflectiveInjector */].resolve(providers), that._injector);
            that._dependencyDataService = injector.get('DataService');
            that._onDependencyObjectsChangeSubscription
                = that._dependencyDataService.getOnObjectsChangeEmitter()
                    .subscribe(function (data) { that.refreshDiffControl(); });
            that._dynamicComponentLoaderService.load(__WEBPACK_IMPORTED_MODULE_7__supplier_document_settlement_index_ts_src_main_ext_module__["a" /* MainExtModule */], 'MainComponent', that.lazyLoadViewContainerRef, injector).then(function (componentRef) {
                that.refreshDiffControl();
                return true;
            }, function (errors) { console.log(errors); return null; });
        }, function (errors) { console.log(errors); return false; });
    };
    /**
     * Lifecycle callback
     */
    BaseReceiptSettlementDocumentFormPopupExtComponent.prototype.ngOnDestroy = function () {
        // Check subscription (if component load fail, subscription may not exist)
        if (this._onDependencyObjectsChangeSubscription) {
            this._onDependencyObjectsChangeSubscription.unsubscribe();
        }
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_7" /* ViewChild */])('js_lazyLoadContainer', { read: __WEBPACK_IMPORTED_MODULE_0__angular_core__["_9" /* ViewContainerRef */] }),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["_9" /* ViewContainerRef */])
    ], BaseReceiptSettlementDocumentFormPopupExtComponent.prototype, "lazyLoadViewContainerRef", void 0);
    BaseReceiptSettlementDocumentFormPopupExtComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: '.js_baseSupplierDocumentFormPopup',
            template: ''
        }),
        __metadata("design:paramtypes", [])
    ], BaseReceiptSettlementDocumentFormPopupExtComponent);
    return BaseReceiptSettlementDocumentFormPopupExtComponent;
}(__WEBPACK_IMPORTED_MODULE_1__base_document_ts_base_form_popup_ext_component__["a" /* BaseFormPopupExtComponent */]));



/***/ }),

/***/ "../../../../../src/Bck/EntitiesBundle/Resources/public/client/index/ts/src/edit.component.ts":
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
            + 'bck/entities/client/change-entity/'
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
            template: __webpack_require__("../../../../../src/Bck/EntitiesBundle/Resources/public/client/index/ts/templates/edit.component.html")
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

/***/ "../../../../../src/Bck/EntitiesBundle/Resources/public/client/index/ts/src/edit.ext-module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EditExtModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("../../../common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ng_bootstrap_ng_bootstrap__ = __webpack_require__("../../../../@ng-bootstrap/ng-bootstrap/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__AppBundle_Resources_public_form_ts_field_types_field_types_extension_module__ = __webpack_require__("../../../../../src/AppBundle/Resources/public/form/ts/field-types/field-types.extension-module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__edit_component__ = __webpack_require__("../../../../../src/Bck/EntitiesBundle/Resources/public/client/index/ts/src/edit.component.ts");
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

/***/ "../../../../../src/Bck/EntitiesBundle/Resources/public/client/index/ts/templates/edit.component.html":
/***/ (function(module, exports) {

module.exports = "    \n    <form name=\"form\" method=\"post\" (ngSubmit)=\"saveAction($event)\" [formGroup]=\"_formService.getForm()\" class=\"form-horizontal\">\n<div class=\"modal-header\">\n    <div class=\"row align-items-center\">\n        <h3 class=\"col-auto mr-auto modal-title\">Form&nbsp;{{getProviderAttr('label')}}<small>&nbsp;({{(_formService && _formService.getObject() && _formService.getObject().id) ? 'edit' : 'add'}})</small></h3>\n        <div class=\"col-auto text-right actions\"><a\n                class=\"-round fa fa-times\"\n                (click)=\"closeAction($event)\"></a></div>\n    </div>\n</div>\n<div class=\"modal-body\">\n    <div class=\"row\">\n        <div class=\"col-12\">    \n            \n\n                <div class=\"row form-group\" *ngIf=\"_formService.getObject().code\">\n\n                        <label class=\"col-sm-2 control-label\" for=\"form_code\">Code</label>\n    \n            <div class=\"col-sm-10\">\n                                        <p id=\"form_code\"\n               class=\"form-control-static\"\n               [innerHTML]=\"_formService.getViewObject().code\"></p>\n                        <label class=\"error\" *ngFor=\"let error of _formService.getErrors().code\">{{error}}</label>\n            </div>\n        </div>\n                \n\n                <div class=\"row form-group\" >\n\n                        <label class=\"col-sm-2 control-label\" for=\"form_selectEntityObj\">Entity</label>\n    \n            <div class=\"col-sm-10\">\n                                            <input [(ngModel)]=\"_formService.getObject().selectEntityObj\"\n           formControlName = selectEntityObj\n           name=\"form[selectEntityObj]\"\n                      type=\"hidden\">\n    <js_autoComplete [field]=\"'selectEntityObj'\"\n                     [hasSelfReference]=\"_dataService.getFieldChoicesAttr('selectEntityObj', 'hasSelfReference')\"\n                                              (onChange)=\"onEntityChange($event)\"[placeholder]=\"&#039;Entity&#039;\"                         ></js_autoComplete>\n                    <label class=\"error\" *ngFor=\"let error of _formService.getErrors().selectEntityObj\">{{error}}</label>\n            </div>\n        </div>\n                \n\n                <div class=\"row form-group\" *ngIf=\"_formService.getObject().avatar\">\n\n                        <label class=\"col-sm-2 control-label\" for=\"form_entityObj_avatar\">Avatar</label>\n    \n            <div class=\"col-sm-10\">\n                                        <p id=\"form_entityObj_avatar\"\n               class=\"form-control-static\"\n               [innerHTML]=\"_formService.getViewObject().avatar\"></p>\n                        <label class=\"error\" *ngFor=\"let error of _formService.getErrors().avatar\">{{error}}</label>\n            </div>\n        </div>\n                \n\n                <div class=\"row form-group\" >\n\n                        <label class=\"col-sm-2 control-label required\" for=\"form_entityObj_title\">Title</label>\n    \n            <div class=\"col-sm-10\">\n                                                                    \n        <select id=\"form_entityObj_title\" name=\"form[entityObj][title]\" [(ngModel)]=\"_formService.getObject().title\" formControlName=\"title\" [class.error]=\"_formService.getErrors().title &amp;&amp; _formService.getErrors().title.length &gt; 0\" class=\"form-control\"><option value=\"Mr.\">Mr.</option><option value=\"Ms.\">Ms.</option></select>\n    <input [(ngModel)]=\"_formService.getObject().title\"\n           formControlName = title\n           required=\"required\"           type=\"hidden\">\n\n                            <label class=\"error\" *ngFor=\"let error of _formService.getErrors().title\">{{error}}</label>\n            </div>\n        </div>\n                \n\n                <div class=\"row form-group\" >\n\n                        <label class=\"col-sm-2 control-label required\" for=\"form_entityObj_name\">Name</label>\n    \n            <div class=\"col-sm-10\">\n                                            <input type=\"text\" id=\"form_entityObj_name\" name=\"form[entityObj][name]\" required=\"required\" maxlength=\"64\" [(ngModel)]=\"_formService.getObject().name\" formControlName=\"name\" [class.error]=\"_formService.getErrors().name &amp;&amp; _formService.getErrors().name.length &gt; 0\" class=\"form-control\" />\n                <label class=\"error\" *ngFor=\"let error of _formService.getErrors().name\">{{error}}</label>\n            </div>\n        </div>\n                \n\n                <div class=\"row form-group\" >\n\n                        <label class=\"col-sm-2 control-label required\" for=\"form_entityObj_surname\">Surname</label>\n    \n            <div class=\"col-sm-10\">\n                                            <input type=\"text\" id=\"form_entityObj_surname\" name=\"form[entityObj][surname]\" required=\"required\" maxlength=\"64\" [(ngModel)]=\"_formService.getObject().surname\" formControlName=\"surname\" [class.error]=\"_formService.getErrors().surname &amp;&amp; _formService.getErrors().surname.length &gt; 0\" class=\"form-control\" />\n                <label class=\"error\" *ngFor=\"let error of _formService.getErrors().surname\">{{error}}</label>\n            </div>\n        </div>\n                \n\n                <div class=\"row form-group\" >\n\n                        <label class=\"col-sm-2 control-label\" for=\"form_entityObj_legalName\">Legal Name</label>\n    \n            <div class=\"col-sm-10\">\n                                            <input type=\"text\" id=\"form_entityObj_legalName\" name=\"form[entityObj][legalName]\" maxlength=\"128\" [(ngModel)]=\"_formService.getObject().legalName\" formControlName=\"legalName\" [class.error]=\"_formService.getErrors().legalName &amp;&amp; _formService.getErrors().legalName.length &gt; 0\" class=\"form-control\" />\n                <label class=\"error\" *ngFor=\"let error of _formService.getErrors().legalName\">{{error}}</label>\n            </div>\n        </div>\n                \n\n                <div class=\"row form-group\" >\n\n                        <label class=\"col-sm-2 control-label\" for=\"form_entityObj_birthDate\">Birth Date</label>\n    \n            <div class=\"col-sm-10\">\n                                        \n    <div class=\"input-group js_dataPicker\"\n         [datePicker]=\"'birthDate'\"\n         #dpk_birthDate=\"\" [control]=\"dpk_birthDate\">\n        <input type=\"text\"\n               class=\"form-control\"\n               placeholder=\"yyyy-mm-dd\"\n               [(ngModel)]=\"_formService.getObject().birthDate\"\n               formControlName = birthDate\n               name=\"form[entityObj][birthDate]\"\n                              [class.error]=\"_formService.getErrors()['birthDate'] && (_formService.getErrors()['birthDate'].length > 0)\"\n               ngbDatepicker #dpk_birthDate=\"ngbDatepicker\">\n        <div class=\"input-group-append\">\n            <button class=\"btn\" type=\"button\"><a class=\"fa fa-calendar\"></a></button>\n        </div>\n    </div>\n    \n                <label class=\"error\" *ngFor=\"let error of _formService.getErrors().birthDate\">{{error}}</label>\n            </div>\n        </div>\n                \n\n                <div class=\"row form-group\" >\n\n                        <label class=\"col-sm-2 control-label required\" for=\"form_entityObj_identification\">Identification / Passport</label>\n    \n            <div class=\"col-sm-10\">\n                                            <input type=\"text\" id=\"form_entityObj_identification\" name=\"form[entityObj][identification]\" required=\"required\" maxlength=\"16\" [(ngModel)]=\"_formService.getObject().identification\" formControlName=\"identification\" [class.error]=\"_formService.getErrors().identification &amp;&amp; _formService.getErrors().identification.length &gt; 0\" class=\"form-control\" />\n                <label class=\"error\" *ngFor=\"let error of _formService.getErrors().identification\">{{error}}</label>\n            </div>\n        </div>\n                \n\n                <div class=\"row form-group\" >\n\n                        <label class=\"col-sm-2 control-label\" for=\"form_entityObj_taxNumber\">Tax Number</label>\n    \n            <div class=\"col-sm-10\">\n                                            <input type=\"text\" id=\"form_entityObj_taxNumber\" name=\"form[entityObj][taxNumber]\" maxlength=\"16\" [(ngModel)]=\"_formService.getObject().taxNumber\" formControlName=\"taxNumber\" [class.error]=\"_formService.getErrors().taxNumber &amp;&amp; _formService.getErrors().taxNumber.length &gt; 0\" class=\"form-control\" />\n                <label class=\"error\" *ngFor=\"let error of _formService.getErrors().taxNumber\">{{error}}</label>\n            </div>\n        </div>\n                \n\n                <div class=\"row form-group\" >\n\n                        <label class=\"col-sm-2 control-label\" [innerHTML]=\"getLang('Enabled')\"></label>\n    \n            <div class=\"col-sm-10\">\n                                            <div class=\"checkbox\">                                        <label for=\"form_isEnabled\"><input type=\"checkbox\" id=\"form_isEnabled\" name=\"form[isEnabled]\" [(ngModel)]=\"_formService.getObject().isEnabled\" formControlName=\"isEnabled\" [class.error]=\"_formService.getErrors().isEnabled &amp;&amp; _formService.getErrors().isEnabled.length &gt; 0\" value=\"1\" checked=\"checked\" /> Is enabled</label>\n    </div>\n                <label class=\"error\" *ngFor=\"let error of _formService.getErrors().isEnabled\">{{error}}</label>\n            </div>\n        </div>\n        </div>\n    </div>\n</div>\n<div class=\"modal-footer hide-on-empty\">\n        \n                    <div class=\"row\">\n            <div class=\"col-auto ml-auto\">\n                                            <button                                     class=\"btn btn-light\"\n                                    (click)=\"cancelAction($event)\"\n                                        id=\"form_cancel\"\n            name=\"form[cancel]\"\n            type=\"button\"><i class=\"fa fa-times\"></i>&nbsp;Cancel</button>\n                                                <button                                     class=\"btn btn-light\"\n                                    (click)=\"resetAction($event)\"\n                                        id=\"form_reset\"\n            name=\"form[reset]\"\n            type=\"button\"><i class=\"fa fa-ban\"></i>&nbsp;Reset</button>\n                                                <button                                     class=\"btn btn-primary\"\n                                    (click)=\"saveAction($event)\"\n                                        id=\"form_save\"\n            name=\"form[save]\"\n            type=\"button\"><i class=\"fa fa-check\"></i>&nbsp;Save</button>\n                                                <button                                     class=\"btn btn-primary\"\n                                    (click)=\"saveAndCloseAction($event)\"\n                                        id=\"form_saveAndClose\"\n            name=\"form[saveAndClose]\"\n            type=\"button\"><i class=\"fa fa-times\"></i>&nbsp;Save and Close</button>\n                                </div>\n        </div>\n    </div>    \n    <input type=\"hidden\" id=\"form__token\" name=\"form[_token]\" value=\"cEuu0f4SXmjfjYDFXIJO4B5Hkp8dRrRxqs-vEEkwqNE\" /></form>\n"

/***/ }),

/***/ "../../../../../src/Bck/EntitiesBundle/Resources/public/entity/detail/ts/src/entity-address-edit.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EntityAddressEditComponent; });
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



var EntityAddressEditComponent = (function (_super) {
    __extends(EntityAddressEditComponent, _super);
    function EntityAddressEditComponent(elementRef, renderer, provider, formService, dataService) {
        var _this = _super.call(this) || this;
        _super.prototype.initFormPopupExtensionComponent.call(_this, elementRef, renderer, provider, formService, dataService);
        return _this;
    }
    EntityAddressEditComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: '#js_entityAddressEdit',
            template: __webpack_require__("../../../../../src/Bck/EntitiesBundle/Resources/public/entity/detail/ts/templates/entity-address-edit.component.html")
        }),
        __param(2, Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["y" /* Inject */])('Provider')),
        __param(4, Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["y" /* Inject */])('DataService')),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_core__["t" /* ElementRef */],
            __WEBPACK_IMPORTED_MODULE_0__angular_core__["U" /* Renderer */], Object, __WEBPACK_IMPORTED_MODULE_2__AppBundle_Resources_public_form_ts_form_service__["a" /* FormService */], Object])
    ], EntityAddressEditComponent);
    return EntityAddressEditComponent;
}(__WEBPACK_IMPORTED_MODULE_1__AppBundle_Resources_public_form_ts_form_popup_extension_component__["a" /* FormPopupExtensionComponent */]));



/***/ }),

/***/ "../../../../../src/Bck/EntitiesBundle/Resources/public/entity/detail/ts/src/entity-address-edit.ext-module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EntityAddressEditExtModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("../../../common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__entity_address_edit_component__ = __webpack_require__("../../../../../src/Bck/EntitiesBundle/Resources/public/entity/detail/ts/src/entity-address-edit.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var EntityAddressEditExtModule = (function () {
    function EntityAddressEditExtModule() {
    }
    EntityAddressEditExtModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["H" /* NgModule */])({
            imports: [__WEBPACK_IMPORTED_MODULE_1__angular_common__["a" /* CommonModule */], __WEBPACK_IMPORTED_MODULE_2__angular_forms__["b" /* FormsModule */], __WEBPACK_IMPORTED_MODULE_2__angular_forms__["e" /* ReactiveFormsModule */]],
            declarations: [
                __WEBPACK_IMPORTED_MODULE_3__entity_address_edit_component__["a" /* EntityAddressEditComponent */]
            ],
            exports: [__WEBPACK_IMPORTED_MODULE_3__entity_address_edit_component__["a" /* EntityAddressEditComponent */]]
        })
    ], EntityAddressEditExtModule);
    return EntityAddressEditExtModule;
}());



/***/ }),

/***/ "../../../../../src/Bck/EntitiesBundle/Resources/public/entity/detail/ts/templates/entity-address-edit.component.html":
/***/ (function(module, exports) {

module.exports = "    \n    <form name=\"form\" method=\"post\" (ngSubmit)=\"saveAction($event)\" [formGroup]=\"_formService.getForm()\" class=\"form-horizontal\">\n<div class=\"modal-header\">\n    <div class=\"row align-items-center\">\n        <h3 class=\"col-auto mr-auto modal-title\">Form&nbsp;{{getProviderAttr('label')}}<small>&nbsp;({{(_formService && _formService.getObject() && _formService.getObject().id) ? 'edit' : 'add'}})</small></h3>\n        <div class=\"col-auto text-right actions\"><a\n                class=\"-round fa fa-times\"\n                (click)=\"closeAction($event)\"></a></div>\n    </div>\n</div>\n<div class=\"modal-body\">\n    <div class=\"row\">\n        <div class=\"col-12\">    \n            \n\n                <div class=\"row form-group\" *ngIf=\"_formService.getObject().id\">\n\n                        <label class=\"col-sm-2 control-label required\" for=\"form_id\">Id</label>\n    \n            <div class=\"col-sm-10\">\n                                        <p id=\"form_id\"\n               class=\"form-control-static\"\n               [innerHTML]=\"_formService.getViewObject().id\"></p>\n                        <label class=\"error\" *ngFor=\"let error of _formService.getErrors().id\">{{error}}</label>\n            </div>\n        </div>\n                \n\n                <div class=\"row form-group\" >\n\n                        <label class=\"col-sm-2 control-label\" for=\"form_name\">Name / Description</label>\n    \n            <div class=\"col-sm-10\">\n                                            <input type=\"text\" id=\"form_name\" name=\"form[name]\" maxlength=\"128\" [(ngModel)]=\"_formService.getObject().name\" formControlName=\"name\" [class.error]=\"_formService.getErrors().name &amp;&amp; _formService.getErrors().name.length &gt; 0\" class=\"form-control\" />\n                <label class=\"error\" *ngFor=\"let error of _formService.getErrors().name\">{{error}}</label>\n            </div>\n        </div>\n                \n\n                <div class=\"row form-group\" >\n\n                        <label class=\"col-sm-2 control-label required\" for=\"form_street1\">Street 1/2</label>\n    \n            <div class=\"col-sm-10\">\n                                            <input type=\"text\" id=\"form_street1\" name=\"form[street1]\" required=\"required\" maxlength=\"256\" [(ngModel)]=\"_formService.getObject().street1\" formControlName=\"street1\" [class.error]=\"_formService.getErrors().street1 &amp;&amp; _formService.getErrors().street1.length &gt; 0\" class=\"form-control\" />\n                <label class=\"error\" *ngFor=\"let error of _formService.getErrors().street1\">{{error}}</label>\n            </div>\n        </div>\n                \n\n                <div class=\"row form-group\" >\n\n                        <label class=\"col-sm-2 control-label\" for=\"form_street2\">Street 2/2</label>\n    \n            <div class=\"col-sm-10\">\n                                            <input type=\"text\" id=\"form_street2\" name=\"form[street2]\" maxlength=\"256\" [(ngModel)]=\"_formService.getObject().street2\" formControlName=\"street2\" [class.error]=\"_formService.getErrors().street2 &amp;&amp; _formService.getErrors().street2.length &gt; 0\" class=\"form-control\" />\n                <label class=\"error\" *ngFor=\"let error of _formService.getErrors().street2\">{{error}}</label>\n            </div>\n        </div>\n                \n\n                <div class=\"row form-group\" >\n\n                        <label class=\"col-sm-2 control-label required\" for=\"form_postCode\">Post Code</label>\n    \n            <div class=\"col-sm-10\">\n                                            <input type=\"text\" id=\"form_postCode\" name=\"form[postCode]\" required=\"required\" maxlength=\"12\" [(ngModel)]=\"_formService.getObject().postCode\" formControlName=\"postCode\" [class.error]=\"_formService.getErrors().postCode &amp;&amp; _formService.getErrors().postCode.length &gt; 0\" class=\"form-control\" />\n                <label class=\"error\" *ngFor=\"let error of _formService.getErrors().postCode\">{{error}}</label>\n            </div>\n        </div>\n                \n\n                <div class=\"row form-group\" >\n\n                        <label class=\"col-sm-2 control-label required\" for=\"form_city\">City</label>\n    \n            <div class=\"col-sm-10\">\n                                            <input type=\"text\" id=\"form_city\" name=\"form[city]\" required=\"required\" maxlength=\"64\" [(ngModel)]=\"_formService.getObject().city\" formControlName=\"city\" [class.error]=\"_formService.getErrors().city &amp;&amp; _formService.getErrors().city.length &gt; 0\" class=\"form-control\" />\n                <label class=\"error\" *ngFor=\"let error of _formService.getErrors().city\">{{error}}</label>\n            </div>\n        </div>\n                \n\n                <div class=\"row form-group\" >\n\n                        <label class=\"col-sm-2 control-label\" for=\"form_region\">Region</label>\n    \n            <div class=\"col-sm-10\">\n                                            <input type=\"text\" id=\"form_region\" name=\"form[region]\" maxlength=\"64\" [(ngModel)]=\"_formService.getObject().region\" formControlName=\"region\" [class.error]=\"_formService.getErrors().region &amp;&amp; _formService.getErrors().region.length &gt; 0\" class=\"form-control\" />\n                <label class=\"error\" *ngFor=\"let error of _formService.getErrors().region\">{{error}}</label>\n            </div>\n        </div>\n                \n\n                <div class=\"row form-group\" >\n\n                        <label class=\"col-sm-2 control-label required\" for=\"form_country\">Country</label>\n    \n            <div class=\"col-sm-10\">\n                                            <input type=\"text\" id=\"form_country\" name=\"form[country]\" required=\"required\" maxlength=\"64\" [(ngModel)]=\"_formService.getObject().country\" formControlName=\"country\" [class.error]=\"_formService.getErrors().country &amp;&amp; _formService.getErrors().country.length &gt; 0\" class=\"form-control\" />\n                <label class=\"error\" *ngFor=\"let error of _formService.getErrors().country\">{{error}}</label>\n            </div>\n        </div>\n                \n\n                <div class=\"row form-group\" >\n\n                        <label class=\"col-sm-2 control-label\" [innerHTML]=\"getLang('For Documents')\"></label>\n    \n            <div class=\"col-sm-10\">\n                                            <div class=\"checkbox\">                                        <label for=\"form_forDocuments\"><input type=\"checkbox\" id=\"form_forDocuments\" name=\"form[forDocuments]\" [(ngModel)]=\"_formService.getObject().forDocuments\" formControlName=\"forDocuments\" [class.error]=\"_formService.getErrors().forDocuments &amp;&amp; _formService.getErrors().forDocuments.length &gt; 0\" value=\"1\" /> For documents</label>\n    </div>\n                <label class=\"error\" *ngFor=\"let error of _formService.getErrors().forDocuments\">{{error}}</label>\n            </div>\n        </div>\n                \n\n                <div class=\"row form-group\" >\n\n                        <label class=\"col-sm-2 control-label\" [innerHTML]=\"getLang('Enabled')\"></label>\n    \n            <div class=\"col-sm-10\">\n                                            <div class=\"checkbox\">                                        <label for=\"form_isEnabled\"><input type=\"checkbox\" id=\"form_isEnabled\" name=\"form[isEnabled]\" [(ngModel)]=\"_formService.getObject().isEnabled\" formControlName=\"isEnabled\" [class.error]=\"_formService.getErrors().isEnabled &amp;&amp; _formService.getErrors().isEnabled.length &gt; 0\" value=\"1\" checked=\"checked\" /> Is enabled</label>\n    </div>\n                <label class=\"error\" *ngFor=\"let error of _formService.getErrors().isEnabled\">{{error}}</label>\n            </div>\n        </div>\n        </div>\n    </div>\n</div>\n<div class=\"modal-footer hide-on-empty\">\n        \n                    <div class=\"row\">\n            <div class=\"col-auto ml-auto\">\n                                            <button                                     class=\"btn btn-light\"\n                                    (click)=\"cancelAction($event)\"\n                                        id=\"form_cancel\"\n            name=\"form[cancel]\"\n            type=\"button\"><i class=\"fa fa-times\"></i>&nbsp;Cancel</button>\n                                                <button                                     class=\"btn btn-light\"\n                                    (click)=\"resetAction($event)\"\n                                        id=\"form_reset\"\n            name=\"form[reset]\"\n            type=\"button\"><i class=\"fa fa-ban\"></i>&nbsp;Reset</button>\n                                                <button                                     class=\"btn btn-primary\"\n                                    (click)=\"saveAction($event)\"\n                                        id=\"form_save\"\n            name=\"form[save]\"\n            type=\"button\"><i class=\"fa fa-check\"></i>&nbsp;Save</button>\n                                                <button                                     class=\"btn btn-primary\"\n                                    (click)=\"saveAndCloseAction($event)\"\n                                        id=\"form_saveAndClose\"\n            name=\"form[saveAndClose]\"\n            type=\"button\"><i class=\"fa fa-times\"></i>&nbsp;Save and Close</button>\n                                </div>\n        </div>\n    </div>    \n    <input type=\"hidden\" id=\"form__token\" name=\"form[_token]\" value=\"cEuu0f4SXmjfjYDFXIJO4B5Hkp8dRrRxqs-vEEkwqNE\" /></form>\n"

/***/ }),

/***/ "../../../../../src/Bck/EntitiesBundle/Resources/public/supplier/index/ts/src/edit.component.ts":
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
            + 'bck/entities/client/change-entity/'
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
            template: __webpack_require__("../../../../../src/Bck/EntitiesBundle/Resources/public/supplier/index/ts/templates/edit.component.html")
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

/***/ "../../../../../src/Bck/EntitiesBundle/Resources/public/supplier/index/ts/src/edit.ext-module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EditExtModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("../../../common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ng_bootstrap_ng_bootstrap__ = __webpack_require__("../../../../@ng-bootstrap/ng-bootstrap/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__AppBundle_Resources_public_form_ts_field_types_field_types_extension_module__ = __webpack_require__("../../../../../src/AppBundle/Resources/public/form/ts/field-types/field-types.extension-module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__edit_component__ = __webpack_require__("../../../../../src/Bck/EntitiesBundle/Resources/public/supplier/index/ts/src/edit.component.ts");
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

/***/ "../../../../../src/Bck/EntitiesBundle/Resources/public/supplier/index/ts/templates/edit.component.html":
/***/ (function(module, exports) {

module.exports = "    \n    <form name=\"form\" method=\"post\" (ngSubmit)=\"saveAction($event)\" [formGroup]=\"_formService.getForm()\" class=\"form-horizontal\">\n<div class=\"modal-header\">\n    <div class=\"row align-items-center\">\n        <h3 class=\"col-auto mr-auto modal-title\">Form&nbsp;{{getProviderAttr('label')}}<small>&nbsp;({{(_formService && _formService.getObject() && _formService.getObject().id) ? 'edit' : 'add'}})</small></h3>\n        <div class=\"col-auto text-right actions\"><a\n                class=\"-round fa fa-times\"\n                (click)=\"closeAction($event)\"></a></div>\n    </div>\n</div>\n<div class=\"modal-body\">\n    <div class=\"row\">\n        <div class=\"col-12\">    \n            \n\n                <div class=\"row form-group\" *ngIf=\"_formService.getObject().code\">\n\n                        <label class=\"col-sm-2 control-label\" for=\"form_code\">Code</label>\n    \n            <div class=\"col-sm-10\">\n                                        <p id=\"form_code\"\n               class=\"form-control-static\"\n               [innerHTML]=\"_formService.getViewObject().code\"></p>\n                        <label class=\"error\" *ngFor=\"let error of _formService.getErrors().code\">{{error}}</label>\n            </div>\n        </div>\n                \n\n                <div class=\"row form-group\" >\n\n                        <label class=\"col-sm-2 control-label\" for=\"form_selectEntityObj\">Entity</label>\n    \n            <div class=\"col-sm-10\">\n                                            <input [(ngModel)]=\"_formService.getObject().selectEntityObj\"\n           formControlName = selectEntityObj\n           name=\"form[selectEntityObj]\"\n                      type=\"hidden\">\n    <js_autoComplete [field]=\"'selectEntityObj'\"\n                     [hasSelfReference]=\"_dataService.getFieldChoicesAttr('selectEntityObj', 'hasSelfReference')\"\n                                              (onChange)=\"onEntityChange($event)\"[placeholder]=\"&#039;Entity&#039;\"                         ></js_autoComplete>\n                    <label class=\"error\" *ngFor=\"let error of _formService.getErrors().selectEntityObj\">{{error}}</label>\n            </div>\n        </div>\n                \n\n                <div class=\"row form-group\" *ngIf=\"_formService.getObject().avatar\">\n\n                        <label class=\"col-sm-2 control-label\" for=\"form_entityObj_avatar\">Avatar</label>\n    \n            <div class=\"col-sm-10\">\n                                        <p id=\"form_entityObj_avatar\"\n               class=\"form-control-static\"\n               [innerHTML]=\"_formService.getViewObject().avatar\"></p>\n                        <label class=\"error\" *ngFor=\"let error of _formService.getErrors().avatar\">{{error}}</label>\n            </div>\n        </div>\n                \n\n                <div class=\"row form-group\" >\n\n                        <label class=\"col-sm-2 control-label required\" for=\"form_entityObj_title\">Title</label>\n    \n            <div class=\"col-sm-10\">\n                                                                    \n        <select id=\"form_entityObj_title\" name=\"form[entityObj][title]\" [(ngModel)]=\"_formService.getObject().title\" formControlName=\"title\" [class.error]=\"_formService.getErrors().title &amp;&amp; _formService.getErrors().title.length &gt; 0\" class=\"form-control\"><option value=\"Mr.\">Mr.</option><option value=\"Ms.\">Ms.</option></select>\n    <input [(ngModel)]=\"_formService.getObject().title\"\n           formControlName = title\n           required=\"required\"           type=\"hidden\">\n\n                            <label class=\"error\" *ngFor=\"let error of _formService.getErrors().title\">{{error}}</label>\n            </div>\n        </div>\n                \n\n                <div class=\"row form-group\" >\n\n                        <label class=\"col-sm-2 control-label required\" for=\"form_entityObj_name\">Name</label>\n    \n            <div class=\"col-sm-10\">\n                                            <input type=\"text\" id=\"form_entityObj_name\" name=\"form[entityObj][name]\" required=\"required\" maxlength=\"64\" [(ngModel)]=\"_formService.getObject().name\" formControlName=\"name\" [class.error]=\"_formService.getErrors().name &amp;&amp; _formService.getErrors().name.length &gt; 0\" class=\"form-control\" />\n                <label class=\"error\" *ngFor=\"let error of _formService.getErrors().name\">{{error}}</label>\n            </div>\n        </div>\n                \n\n                <div class=\"row form-group\" >\n\n                        <label class=\"col-sm-2 control-label required\" for=\"form_entityObj_surname\">Surname</label>\n    \n            <div class=\"col-sm-10\">\n                                            <input type=\"text\" id=\"form_entityObj_surname\" name=\"form[entityObj][surname]\" required=\"required\" maxlength=\"64\" [(ngModel)]=\"_formService.getObject().surname\" formControlName=\"surname\" [class.error]=\"_formService.getErrors().surname &amp;&amp; _formService.getErrors().surname.length &gt; 0\" class=\"form-control\" />\n                <label class=\"error\" *ngFor=\"let error of _formService.getErrors().surname\">{{error}}</label>\n            </div>\n        </div>\n                \n\n                <div class=\"row form-group\" >\n\n                        <label class=\"col-sm-2 control-label\" for=\"form_entityObj_legalName\">Legal Name</label>\n    \n            <div class=\"col-sm-10\">\n                                            <input type=\"text\" id=\"form_entityObj_legalName\" name=\"form[entityObj][legalName]\" maxlength=\"128\" [(ngModel)]=\"_formService.getObject().legalName\" formControlName=\"legalName\" [class.error]=\"_formService.getErrors().legalName &amp;&amp; _formService.getErrors().legalName.length &gt; 0\" class=\"form-control\" />\n                <label class=\"error\" *ngFor=\"let error of _formService.getErrors().legalName\">{{error}}</label>\n            </div>\n        </div>\n                \n\n                <div class=\"row form-group\" >\n\n                        <label class=\"col-sm-2 control-label\" for=\"form_entityObj_birthDate\">Birth Date</label>\n    \n            <div class=\"col-sm-10\">\n                                        \n    <div class=\"input-group js_dataPicker\"\n         [datePicker]=\"'birthDate'\"\n         #dpk_birthDate=\"\" [control]=\"dpk_birthDate\">\n        <input type=\"text\"\n               class=\"form-control\"\n               placeholder=\"yyyy-mm-dd\"\n               [(ngModel)]=\"_formService.getObject().birthDate\"\n               formControlName = birthDate\n               name=\"form[entityObj][birthDate]\"\n                              [class.error]=\"_formService.getErrors()['birthDate'] && (_formService.getErrors()['birthDate'].length > 0)\"\n               ngbDatepicker #dpk_birthDate=\"ngbDatepicker\">\n        <div class=\"input-group-append\">\n            <button class=\"btn\" type=\"button\"><a class=\"fa fa-calendar\"></a></button>\n        </div>\n    </div>\n    \n                <label class=\"error\" *ngFor=\"let error of _formService.getErrors().birthDate\">{{error}}</label>\n            </div>\n        </div>\n                \n\n                <div class=\"row form-group\" >\n\n                        <label class=\"col-sm-2 control-label required\" for=\"form_entityObj_identification\">Identification / Passport</label>\n    \n            <div class=\"col-sm-10\">\n                                            <input type=\"text\" id=\"form_entityObj_identification\" name=\"form[entityObj][identification]\" required=\"required\" maxlength=\"16\" [(ngModel)]=\"_formService.getObject().identification\" formControlName=\"identification\" [class.error]=\"_formService.getErrors().identification &amp;&amp; _formService.getErrors().identification.length &gt; 0\" class=\"form-control\" />\n                <label class=\"error\" *ngFor=\"let error of _formService.getErrors().identification\">{{error}}</label>\n            </div>\n        </div>\n                \n\n                <div class=\"row form-group\" >\n\n                        <label class=\"col-sm-2 control-label\" for=\"form_entityObj_taxNumber\">Tax Number</label>\n    \n            <div class=\"col-sm-10\">\n                                            <input type=\"text\" id=\"form_entityObj_taxNumber\" name=\"form[entityObj][taxNumber]\" maxlength=\"16\" [(ngModel)]=\"_formService.getObject().taxNumber\" formControlName=\"taxNumber\" [class.error]=\"_formService.getErrors().taxNumber &amp;&amp; _formService.getErrors().taxNumber.length &gt; 0\" class=\"form-control\" />\n                <label class=\"error\" *ngFor=\"let error of _formService.getErrors().taxNumber\">{{error}}</label>\n            </div>\n        </div>\n                \n\n                <div class=\"row form-group\" >\n\n                        <label class=\"col-sm-2 control-label\" [innerHTML]=\"getLang('Enabled')\"></label>\n    \n            <div class=\"col-sm-10\">\n                                            <div class=\"checkbox\">                                        <label for=\"form_isEnabled\"><input type=\"checkbox\" id=\"form_isEnabled\" name=\"form[isEnabled]\" [(ngModel)]=\"_formService.getObject().isEnabled\" formControlName=\"isEnabled\" [class.error]=\"_formService.getErrors().isEnabled &amp;&amp; _formService.getErrors().isEnabled.length &gt; 0\" value=\"1\" checked=\"checked\" /> Is enabled</label>\n    </div>\n                <label class=\"error\" *ngFor=\"let error of _formService.getErrors().isEnabled\">{{error}}</label>\n            </div>\n        </div>\n        </div>\n    </div>\n</div>\n<div class=\"modal-footer hide-on-empty\">\n        \n                    <div class=\"row\">\n            <div class=\"col-auto ml-auto\">\n                                            <button                                     class=\"btn btn-light\"\n                                    (click)=\"cancelAction($event)\"\n                                        id=\"form_cancel\"\n            name=\"form[cancel]\"\n            type=\"button\"><i class=\"fa fa-times\"></i>&nbsp;Cancel</button>\n                                                <button                                     class=\"btn btn-light\"\n                                    (click)=\"resetAction($event)\"\n                                        id=\"form_reset\"\n            name=\"form[reset]\"\n            type=\"button\"><i class=\"fa fa-ban\"></i>&nbsp;Reset</button>\n                                                <button                                     class=\"btn btn-primary\"\n                                    (click)=\"saveAction($event)\"\n                                        id=\"form_save\"\n            name=\"form[save]\"\n            type=\"button\"><i class=\"fa fa-check\"></i>&nbsp;Save</button>\n                                                <button                                     class=\"btn btn-primary\"\n                                    (click)=\"saveAndCloseAction($event)\"\n                                        id=\"form_saveAndClose\"\n            name=\"form[saveAndClose]\"\n            type=\"button\"><i class=\"fa fa-times\"></i>&nbsp;Save and Close</button>\n                                </div>\n        </div>\n    </div>    \n    <input type=\"hidden\" id=\"form__token\" name=\"form[_token]\" value=\"cEuu0f4SXmjfjYDFXIJO4B5Hkp8dRrRxqs-vEEkwqNE\" /></form>\n"

/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("../../../../../src/Bck/AccountingBundle/Resources/public/supplier-document/index/ts/src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map