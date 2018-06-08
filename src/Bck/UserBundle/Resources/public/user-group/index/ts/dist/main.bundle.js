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
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* NgModule */])({
            imports: [__WEBPACK_IMPORTED_MODULE_1__angular_common__["a" /* CommonModule */]],
            declarations: [__WEBPACK_IMPORTED_MODULE_2__main_component__["a" /* MainComponent */]],
            exports: [__WEBPACK_IMPORTED_MODULE_2__main_component__["a" /* MainComponent */]]
        })
    ], MainExtModule);
    return MainExtModule;
}());



/***/ }),

/***/ "../../../../../src/AppBundle/Resources/public/data-box/ts/src/data-box.extension-component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export PopupTypes */
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
                var resolvedProviders = __WEBPACK_IMPORTED_MODULE_0__angular_core__["Q" /* ReflectiveInjector */].resolve(popup['providers']);
                popup['injector'] = __WEBPACK_IMPORTED_MODULE_0__angular_core__["Q" /* ReflectiveInjector */].fromResolvedProviders(resolvedProviders, that._injector);
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
        _this.onDismissEmitter = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["t" /* EventEmitter */]();
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
        this._onObjectChangeEmitter = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["t" /* EventEmitter */]();
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
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["w" /* Injectable */])(),
        __param(2, Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["v" /* Inject */])('DataService')),
        __param(3, Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["v" /* Inject */])('HelperService')),
        __param(5, Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["J" /* Optional */])()), __param(5, Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["v" /* Inject */])('FormServiceProvider')),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__modal_ts_modal_service__["a" /* ModalService */],
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
        __param(0, Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["v" /* Inject */])('LegendProvider')),
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
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* NgModule */])({
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
/* unused harmony export BaseModalPopupExt */
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
        _this.onDismissEmitter = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["t" /* EventEmitter */]();
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
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_core__["r" /* ElementRef */],
            __WEBPACK_IMPORTED_MODULE_0__angular_core__["R" /* Renderer */]])
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
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* NgModule */])({
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
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_4" /* ViewChild */])('js_modalContainer', { read: __WEBPACK_IMPORTED_MODULE_0__angular_core__["_5" /* ViewContainerRef */] }),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["_5" /* ViewContainerRef */])
    ], ModalWrapperComponent.prototype, "viewContainerRef", void 0);
    ModalWrapperComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'js_modal',
            template: "\n    <div class=\"modal-backdrop\"></div>\n    <div class=\"modal animated\">\n        <div class=\"modal-dialog modal-{{_size}}\">\n            <div class=\"modal-content\">\n                <ng-template #js_modalContainer></ng-template>\n            </div>\n        </div>\n    </div>\n    ",
            host: {
                '(document:click)': 'onDocumentClick($event)',
            }
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_core__["r" /* ElementRef */]])
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
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* NgModule */])({
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
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ModalService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ts_dynamic_component_loader_service__ = __webpack_require__("../../../../../src/AppBundle/Resources/public/ts/dynamic-component-loader.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__modal_dialog_extension_module__ = __webpack_require__("../../../../../src/AppBundle/Resources/public/modal/ts/modal-dialog.extension-module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__base_modal_popup__ = __webpack_require__("../../../../../src/AppBundle/Resources/public/modal/ts/base-modal-popup.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__modal_wrapper_component__ = __webpack_require__("../../../../../src/AppBundle/Resources/public/modal/ts/modal-wrapper.component.ts");
/* unused harmony reexport BaseModalPopupExt */
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
            var unresolvedProviders = (popup.providers || []), resolvedProviders = __WEBPACK_IMPORTED_MODULE_0__angular_core__["Q" /* ReflectiveInjector */].resolve(unresolvedProviders);
            popup.injector = __WEBPACK_IMPORTED_MODULE_0__angular_core__["Q" /* ReflectiveInjector */].fromResolvedProviders(resolvedProviders, injector);
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
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["w" /* Injectable */])(),
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
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["w" /* Injectable */])(),
        __param(0, Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["v" /* Inject */])('HelperService')),
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
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["z" /* Input */])(),
        __metadata("design:type", Object)
    ], TreeViewControlActionsComponent.prototype, "objectIndex", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["z" /* Input */])(),
        __metadata("design:type", Number)
    ], TreeViewControlActionsComponent.prototype, "nodesIndex", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["z" /* Input */])(),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1__tree_view_component__["a" /* TreeViewComponent */])
    ], TreeViewControlActionsComponent.prototype, "treeViewComponent", void 0);
    TreeViewControlActionsComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'js_treeViewControl',
            template: "\n    <span *ngIf=\"_object['_isNew']\" class=\"badge badge-info\">New</span>\n    <span *ngIf=\"_object['_isEdited']\" class=\"badge badge-info\">Edited</span>\n    <input *ngIf=\"treeViewComponent._actionsService.getActionAttr('radioChoice', 'isEnabled') && treeViewComponent.getNodes(nodesIndex)[objectIndex]['id']\"\n           class=\"pull-right action\"\n           type=\"radio\"\n           name=\"index[]\"\n           value=\"{{nodesIndex}}::{{objectIndex}}\"/>\n    <input *ngIf=\"treeViewComponent._actionsService.getActionAttr('checkAll', 'isEnabled') && treeViewComponent.getNodes(nodesIndex)[objectIndex]['id']\"\n           class=\"pull-right action js_checkAll\"\n           type=\"checkbox\"\n           name=\"index[]\"\n           value=\"{{nodesIndex}}::{{objectIndex}}\"\n           [ngModel]=\"treeViewComponent.checkAll\"/>\n    <div class=\"txt-align-r actions no-user-select text-secondary\">\n        <ng-template ngFor let-action [ngForOf]=\"treeViewComponent._actionsService.getDetailActions()\">\n            <a *ngIf=\"treeViewComponent._actionsService.getActionAttr(action, 'isEnabled')\"\n               (click)=\"treeViewComponent.triggerAction($event, action, {objIndex: objectIndex, parentNodeIndex: nodesIndex})\"\n               [ngClass]=\"[treeViewComponent._actionsService.getActionAttr(action, 'icon')]\"\n               class=\"fa\"></a>\n        </ng-template>\n    </div>\n    "
        }),
        __param(0, Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["v" /* Inject */])('DataService')),
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
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* NgModule */])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_common__["a" /* CommonModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_forms__["b" /* FormsModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_forms__["c" /* ReactiveFormsModule */],
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
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["z" /* Input */])(),
        __metadata("design:type", Object)
    ], TreeViewNodeComponent.prototype, "nodes", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["z" /* Input */])(),
        __metadata("design:type", Number)
    ], TreeViewNodeComponent.prototype, "nodesIndex", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["z" /* Input */])(),
        __metadata("design:type", String)
    ], TreeViewNodeComponent.prototype, "parentTargetField", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["z" /* Input */])(),
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
        __param(2, Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["v" /* Inject */])('Provider')),
        __param(3, Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["v" /* Inject */])('DataService')),
        __param(5, Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["v" /* Inject */])('HelperService')),
        __param(8, Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["v" /* Inject */])('Popups')),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_core__["_5" /* ViewContainerRef */],
            __WEBPACK_IMPORTED_MODULE_0__angular_core__["R" /* Renderer */], Object, Object, __WEBPACK_IMPORTED_MODULE_4__tasks_loader_manager_ts_tasks_loader_manager_service__["a" /* TasksLoaderManagerService */], Object, __WEBPACK_IMPORTED_MODULE_1__ts_actions_actions_service__["a" /* ActionsService */],
            __WEBPACK_IMPORTED_MODULE_2__modal_ts_modal_service__["a" /* ModalService */], Object, __WEBPACK_IMPORTED_MODULE_0__angular_core__["y" /* Injector */]])
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
        __param(2, Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["v" /* Inject */])('Provider')),
        __param(3, Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["v" /* Inject */])('DataService')),
        __param(5, Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["v" /* Inject */])('HelperService')),
        __param(8, Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["v" /* Inject */])('Popups')),
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
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* NgModule */])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_common__["a" /* CommonModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_forms__["b" /* FormsModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_forms__["c" /* ReactiveFormsModule */],
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
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["w" /* Injectable */])(),
        __param(0, Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["v" /* Inject */])('ActionsServiceProvider')),
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
        this._onObjectChangeEmitter = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["t" /* EventEmitter */]();
        this._onObjectsRefreshEmitter = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["t" /* EventEmitter */]();
        this._onObjectsChangeEmitter = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["t" /* EventEmitter */]();
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
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["w" /* Injectable */])(),
        __param(1, Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["v" /* Inject */])('HelperService')),
        __param(2, Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["v" /* Inject */])('DataServiceProvider')),
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
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["w" /* Injectable */])(),
        __param(1, Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["v" /* Inject */])('HelperService')),
        __param(2, Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["v" /* Inject */])('DataServiceProvider')),
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
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["w" /* Injectable */])(),
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
        this.onChange = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["t" /* EventEmitter */]();
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
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["z" /* Input */])(),
        __metadata("design:type", Boolean)
    ], ExpanderComponent.prototype, "isExpanded", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["z" /* Input */])(),
        __metadata("design:type", String)
    ], ExpanderComponent.prototype, "label", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["z" /* Input */])(),
        __metadata("design:type", Number)
    ], ExpanderComponent.prototype, "labelCount", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["z" /* Input */])(),
        __metadata("design:type", String)
    ], ExpanderComponent.prototype, "labelIcon", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["z" /* Input */])(),
        __metadata("design:type", Boolean)
    ], ExpanderComponent.prototype, "hasIcon", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["z" /* Input */])(),
        __metadata("design:type", String)
    ], ExpanderComponent.prototype, "customClass", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["K" /* Output */])(),
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
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* NgModule */])({
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
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["w" /* Injectable */])(),
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
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["w" /* Injectable */])(),
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
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["z" /* Input */])(),
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
        __param(1, Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["v" /* Inject */])('HelperService')),
        __param(2, Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["J" /* Optional */])()), __param(2, Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["v" /* Inject */])('DataService')),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_core__["r" /* ElementRef */], Object, Object])
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
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["z" /* Input */])(),
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
        __param(1, Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["v" /* Inject */])('HelperService')),
        __param(2, Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["J" /* Optional */])()), __param(2, Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["v" /* Inject */])('DataService')),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_core__["r" /* ElementRef */], Object, Object])
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
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["z" /* Input */])(),
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
        __param(1, Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["v" /* Inject */])('HelperService')),
        __param(2, Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["J" /* Optional */])()), __param(2, Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["v" /* Inject */])('DataService')),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_core__["r" /* ElementRef */], Object, Object])
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
        __param(0, Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["v" /* Inject */])('DataService')),
        __param(1, Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["v" /* Inject */])('HelperService')),
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
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* NgModule */])({
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
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["z" /* Input */])(),
        __metadata("design:type", Object)
    ], SearchComponent.prototype, "injector", void 0);
    SearchComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'js_search',
            template: "\n    <js_searchCriteria [injector]=\"injector\"></js_searchCriteria>\n    <js_searchOrderBy [injector]=\"injector\"></js_searchOrderBy>\n    <js_searchFields [injector]=\"injector\"></js_searchFields>\n    <a class=\"action -round fa\"\n       [ngClass]=\"[_actionsService.getActionAttr('search', 'icon')]\"\n       (click)=\"searchAction($event)\"></a>\n    "
        }),
        __param(0, Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["J" /* Optional */])()), __param(0, Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["v" /* Inject */])('DataService')),
        __param(1, Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["J" /* Optional */])()),
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
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* NgModule */])({
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

/***/ "../../../../../src/Bck/UserBundle/Resources/public/user-group/index/ts/$$_lazy_route_resource lazy recursive":
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
webpackEmptyAsyncContext.id = "../../../../../src/Bck/UserBundle/Resources/public/user-group/index/ts/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "../../../../../src/Bck/UserBundle/Resources/public/user-group/index/ts/src/edit.component.ts":
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
            template: __webpack_require__("../../../../../src/Bck/UserBundle/Resources/public/user-group/index/ts/templates/edit.component.html")
        }),
        __param(2, Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["v" /* Inject */])('Provider')),
        __param(4, Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["v" /* Inject */])('DataService')),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_core__["r" /* ElementRef */],
            __WEBPACK_IMPORTED_MODULE_0__angular_core__["R" /* Renderer */], Object, __WEBPACK_IMPORTED_MODULE_1__AppBundle_Resources_public_form_ts_form_service__["a" /* FormService */], Object])
    ], EditComponent);
    return EditComponent;
}(__WEBPACK_IMPORTED_MODULE_2__AppBundle_Resources_public_form_ts_form_popup_extension_component__["a" /* FormPopupExtensionComponent */]));



/***/ }),

/***/ "../../../../../src/Bck/UserBundle/Resources/public/user-group/index/ts/src/edit.ext-module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EditExtModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("../../../common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__edit_component__ = __webpack_require__("../../../../../src/Bck/UserBundle/Resources/public/user-group/index/ts/src/edit.component.ts");
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
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* NgModule */])({
            imports: [__WEBPACK_IMPORTED_MODULE_1__angular_common__["a" /* CommonModule */], __WEBPACK_IMPORTED_MODULE_2__angular_forms__["b" /* FormsModule */], __WEBPACK_IMPORTED_MODULE_2__angular_forms__["c" /* ReactiveFormsModule */]],
            declarations: [
                __WEBPACK_IMPORTED_MODULE_3__edit_component__["a" /* EditComponent */]
            ],
            exports: [__WEBPACK_IMPORTED_MODULE_3__edit_component__["a" /* EditComponent */]]
        })
    ], EditExtModule);
    return EditExtModule;
}());



/***/ }),

/***/ "../../../../../src/Bck/UserBundle/Resources/public/user-group/index/ts/src/main.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MainModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__ = __webpack_require__("../../../platform-browser/esm5/platform-browser.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__AppBundle_Resources_public_ts_helper__ = __webpack_require__("../../../../../src/AppBundle/Resources/public/ts/helper.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__AppBundle_Resources_public_tasks_loader_manager_ts_tasks_loader_manager_service__ = __webpack_require__("../../../../../src/AppBundle/Resources/public/tasks-loader-manager/ts/tasks-loader-manager.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__AppBundle_Resources_public_ts_post_service__ = __webpack_require__("../../../../../src/AppBundle/Resources/public/ts/post.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__AppBundle_Resources_public_modal_ts_modal_service__ = __webpack_require__("../../../../../src/AppBundle/Resources/public/modal/ts/modal.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__AppBundle_Resources_public_form_ts_form_service__ = __webpack_require__("../../../../../src/AppBundle/Resources/public/form/ts/form.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__AppBundle_Resources_public_ts_flash_message_service__ = __webpack_require__("../../../../../src/AppBundle/Resources/public/ts/flash-message.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__AppBundle_Resources_public_ts_dynamic_component_loader_service__ = __webpack_require__("../../../../../src/AppBundle/Resources/public/ts/dynamic-component-loader.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__AppBundle_Resources_public_ts_data_service_tree_view_data_service__ = __webpack_require__("../../../../../src/AppBundle/Resources/public/ts/data-service/tree-view-data.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__AppBundle_Resources_public_ts_actions_actions_service__ = __webpack_require__("../../../../../src/AppBundle/Resources/public/ts/actions/actions.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__AppBundle_Resources_public_app_basics_default_ts_src_main_ext_module__ = __webpack_require__("../../../../../src/AppBundle/Resources/public/app-basics/default/ts/src/main.ext-module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__AppBundle_Resources_public_app_basics_default_ts_src_main_component__ = __webpack_require__("../../../../../src/AppBundle/Resources/public/app-basics/default/ts/src/main.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__AppBundle_Resources_public_tree_view_default_ts_src_tree_view_ext_module__ = __webpack_require__("../../../../../src/AppBundle/Resources/public/tree-view/default/ts/src/tree-view.ext-module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__AppBundle_Resources_public_tree_view_default_ts_src_tree_view_component__ = __webpack_require__("../../../../../src/AppBundle/Resources/public/tree-view/default/ts/src/tree-view.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__edit_ext_module__ = __webpack_require__("../../../../../src/Bck/UserBundle/Resources/public/user-group/index/ts/src/edit.ext-module.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


// This module doesn't use "ReactiveFormsModule", but it needs to import this class
// to provide "formBuilder" when inject dependencies in child modules (like form)















var MainModule = (function () {
    function MainModule() {
    }
    MainModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* NgModule */])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_forms__["b" /* FormsModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_forms__["c" /* ReactiveFormsModule */],
                __WEBPACK_IMPORTED_MODULE_12__AppBundle_Resources_public_app_basics_default_ts_src_main_ext_module__["a" /* MainExtModule */],
                __WEBPACK_IMPORTED_MODULE_14__AppBundle_Resources_public_tree_view_default_ts_src_tree_view_ext_module__["a" /* TreeViewExtModule */]
            ],
            declarations: [],
            providers: [
                __WEBPACK_IMPORTED_MODULE_5__AppBundle_Resources_public_ts_post_service__["a" /* PostService */],
                __WEBPACK_IMPORTED_MODULE_6__AppBundle_Resources_public_modal_ts_modal_service__["a" /* ModalService */],
                __WEBPACK_IMPORTED_MODULE_8__AppBundle_Resources_public_ts_flash_message_service__["a" /* FlashMessageService */],
                __WEBPACK_IMPORTED_MODULE_9__AppBundle_Resources_public_ts_dynamic_component_loader_service__["a" /* DynamicComponentLoaderService */],
                { provide: 'DataService', useClass: __WEBPACK_IMPORTED_MODULE_10__AppBundle_Resources_public_ts_data_service_tree_view_data_service__["a" /* TreeViewDataService */] },
                __WEBPACK_IMPORTED_MODULE_11__AppBundle_Resources_public_ts_actions_actions_service__["a" /* ActionsService */],
                { provide: 'HelperService', useValue: __WEBPACK_IMPORTED_MODULE_3__AppBundle_Resources_public_ts_helper__["a" /* Helper */] },
                __WEBPACK_IMPORTED_MODULE_4__AppBundle_Resources_public_tasks_loader_manager_ts_tasks_loader_manager_service__["a" /* TasksLoaderManagerService */],
                { provide: 'DataServiceProvider', useValue: __WEBPACK_IMPORTED_MODULE_3__AppBundle_Resources_public_ts_helper__["a" /* Helper */].getTreeViewDataServiceProvider(_app.conf) },
                { provide: 'Provider', useValue: __WEBPACK_IMPORTED_MODULE_3__AppBundle_Resources_public_ts_helper__["a" /* Helper */].getTreeViewProvider(_app.conf) },
                { provide: 'ActionsServiceProvider', useValue: __WEBPACK_IMPORTED_MODULE_3__AppBundle_Resources_public_ts_helper__["a" /* Helper */].getActionsServiceProvider(_app.conf) },
                { provide: 'LegendProvider', useValue: __WEBPACK_IMPORTED_MODULE_3__AppBundle_Resources_public_ts_helper__["a" /* Helper */].getLegendProvider(_app.conf) },
                { provide: 'Popups', useValue: {
                        module: __WEBPACK_IMPORTED_MODULE_16__edit_ext_module__["a" /* EditExtModule */],
                        component: 'EditComponent',
                        providers: [
                            __WEBPACK_IMPORTED_MODULE_7__AppBundle_Resources_public_form_ts_form_service__["a" /* FormService */],
                            { provide: 'Provider', useValue: __WEBPACK_IMPORTED_MODULE_3__AppBundle_Resources_public_ts_helper__["a" /* Helper */].getFormProvider(_app.conf) }
                        ]
                    } }
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_13__AppBundle_Resources_public_app_basics_default_ts_src_main_component__["a" /* MainComponent */], __WEBPACK_IMPORTED_MODULE_15__AppBundle_Resources_public_tree_view_default_ts_src_tree_view_component__["a" /* TreeViewComponent */]]
        })
    ], MainModule);
    return MainModule;
}());



/***/ }),

/***/ "../../../../../src/Bck/UserBundle/Resources/public/user-group/index/ts/src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("../../../platform-browser-dynamic/esm5/platform-browser-dynamic.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_cli_conf_environments_environment__ = __webpack_require__("../../../../../angular_cli_conf/environments/environment.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__main_module__ = __webpack_require__("../../../../../src/Bck/UserBundle/Resources/public/user-group/index/ts/src/main.module.ts");

 // The browser platform with a compiler
 // Get environment

// Enable production environment
if (__WEBPACK_IMPORTED_MODULE_2__angular_cli_conf_environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_9" /* enableProdMode */])();
}
// Compile and launch the module
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_3__main_module__["a" /* MainModule */])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ "../../../../../src/Bck/UserBundle/Resources/public/user-group/index/ts/templates/edit.component.html":
/***/ (function(module, exports) {

module.exports = "<!DOCTYPE html>\n<html>\n    <head>\n        <meta charset=\"UTF-8\" />\n        <meta name=\"robots\" content=\"noindex,nofollow\" />\n        <meta name=\"viewport\" content=\"width=device-width,initial-scale=1\" />\n        <title>    Class &#039;Bck\\AdminBundle\\Entity\\User&#039; does not exist (500 Internal Server Error)\n</title>\n        <link rel=\"icon\" type=\"image/png\" href=\"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABwAAAAgCAYAAAABtRhCAAADVUlEQVRIx82XX0jTURTHLYPyqZdefQx66CEo80+aYpoIkqzUikz6Z5klQoWUWYRIJYEUGpQ+lIr9U5dOTLdCtkmWZis3rbnC5fw/neYW002307mX/cZvP3/7o1PwwOdh95x7vnf39zvnd29AgBer2xO6DclAXiMqZAqxIiNIN/IYSUS2BPhjmGATchUxI+ADWiRhpWK7HKuHFVBFdmU5YvnI4grFGCaReF/EBH4KsZlGgj2JBTuCYBWRIYF8YoEOJ6wBt/gEs7mBbyOjQXruPLSdOgPCiEiPSUUHDoL8Ug5IUo9B/d5wrt+G7OAKNrODPuVdB6vRCIzN6SdBlpW9RIgk/1FeAXabzRlrUPVCS/JhbmwudztnGeeH9AyXBIwtmM3wLinZJZHifjHw2V+NBoRh+9ixQrbgbnaSIcl7cGea6hoXQbNe7za241oeO5Z0p42M4BV2EqP2D50wo+6HzvwC6C4sApNOR8cmOrtcnhtj2kYRyC9eBvXzKrBZrXSs72kFd1t3MoKVbMekQkEnSNKOO8fac3LpmK6l1TlGtsxmsdKFsecPYgwxst0cwROMYDXboSotg0WLBRqjY51jLYcENElXwW2XJKPydvoI2GN9T8rBtrAArYIUruBJXkFheCQYlCpQP6uk5dAQFQNaUROMSGVQFxLmkoQsxDJrhLbTZ+nvVsERME9MgPJRKV/58AsyomTSzE813WLFvWK++qI0xSfQl8k8Pg46sYRuv5t6dS+4RqxDwaa4BGjYH+NTQvKScIp9+YL/hoZh3jDtLRHtt2C3g6bmhX+CpsFBWg7ilDSPgj0lD2ncr5ev/BP8VvyAJhqVyZeUhPOrEhEFxgEtjft846Z/guQTNT89Q5P9flMLoth4F7808wKtWWKzAwNQHxrh/1vaid2F+XpYTSbQf1XA2McOmOpROnvpvMEA4tSjq1cW0sws2gCYxswY6TKkvzYnJq1NHZLnRU4BX+4U0uburvusu8Kv8iHY7qefkM4IFngJHEOUXmLEPgiGsI8YnlZILit3vSSLRTQe/MPIZva5pshNIEmyFQlCvruJKXPkCEfmePzkphXHdzZNQdoRI9KPlBAxlj/I8U97ERPS5bjGbWDFbEdqHVe5caTBeZZx2H/IMvzeN15yoQAAAABJRU5ErkJggg==\n\">\n        <style>html{font-family:sans-serif;-webkit-text-size-adjust:100%;-ms-text-size-adjust:100%}body{margin:0}article,aside,details,figcaption,figure,footer,header,hgroup,main,menu,nav,section,summary{display:block}audio,canvas,progress,video{display:inline-block;vertical-align:baseline}audio:not([controls]){display:none;height:0}[hidden],template{display:none}a{background-color:transparent}a:active,a:hover{outline:0}abbr[title]{border-bottom:1px dotted}b,strong{font-weight:700}dfn{font-style:italic}h1{margin:.67em 0;font-size:2em}mark{color:#000;background:#ff0}small{font-size:80%}sub,sup{position:relative;font-size:75%;line-height:0;vertical-align:baseline}sup{top:-.5em}sub{bottom:-.25em}img{border:0}svg:not(:root){overflow:hidden}figure{margin:1em 40px}hr{height:0;-webkit-box-sizing:content-box;-moz-box-sizing:content-box;box-sizing:content-box}pre{overflow:auto}code,kbd,pre,samp{font-family:monospace,monospace;font-size:1em}button,input,optgroup,select,textarea{margin:0;font:inherit;color:inherit}button{overflow:visible}button,select{text-transform:none}button,html input[type=\"button\"],input[type=\"reset\"],input[type=\"submit\"]{-webkit-appearance:button;cursor:pointer}button[disabled],html input[disabled]{cursor:default}button::-moz-focus-inner,input::-moz-focus-inner{padding:0;border:0}input{line-height:normal}input[type=\"checkbox\"],input[type=\"radio\"]{-webkit-box-sizing:border-box;-moz-box-sizing:border-box;box-sizing:border-box;padding:0}input[type=\"number\"]::-webkit-inner-spin-button,input[type=\"number\"]::-webkit-outer-spin-button{height:auto}input[type=\"search\"]{-webkit-box-sizing:content-box;-moz-box-sizing:content-box;box-sizing:content-box;-webkit-appearance:textfield}input[type=\"search\"]::-webkit-search-cancel-button,input[type=\"search\"]::-webkit-search-decoration{-webkit-appearance:none}fieldset{padding:.35em .625em .75em;margin:0 2px;border:1px solid silver}legend{padding:0;border:0}textarea{overflow:auto}optgroup{font-weight:700}table{border-spacing:0;border-collapse:collapse}td,th{padding:0}\n\nhtml {\n    /* always display the vertical scrollbar to avoid jumps when toggling contents */\n    overflow-y: scroll;\n}\nbody { background-color: #F9F9F9; color: #222; font: 14px/1.4 Helvetica, Arial, sans-serif; padding-bottom: 45px; }\n\na { cursor: pointer; text-decoration: none; }\na:hover { text-decoration: underline; }\nabbr[title] { border-bottom: none; cursor: help; text-decoration: none; }\n\ncode, pre { font: 13px/1.5 Consolas, Monaco, Menlo, \"Ubuntu Mono\", \"Liberation Mono\", monospace; }\n\ntable, tr, th, td { background: #FFF; border-collapse: collapse; vertical-align: top; }\ntable { background: #FFF; border: 1px solid #E0E0E0; box-shadow: 0px 0px 1px rgba(128, 128, 128, .2); margin: 1em 0; width: 100%; }\ntable th, table td { border: solid #E0E0E0; border-width: 1px 0; padding: 8px 10px; }\ntable th { background-color: #E0E0E0; font-weight: bold; text-align: left; }\n\n.hidden-xs-down { display: none; }\n.block { display: block; }\n.hidden { display: none; }\n.nowrap { white-space: nowrap; }\n.newline { display: block; }\n.break-long-words { word-wrap: break-word; overflow-wrap: break-word; -webkit-hyphens: auto; -moz-hyphens: auto; hyphens: auto; min-width: 0; }\n.text-small { font-size: 12px !important; }\n.text-muted { color: #999; }\n.text-bold { font-weight: bold; }\n.empty { border: 4px dashed #E0E0E0; color: #999; margin: 1em 0; padding: .5em 2em; }\n\n.status-success { background: rgba(94, 151, 110, 0.3); }\n.status-warning { background: rgba(240, 181, 24, 0.3); }\n.status-error { background: rgba(176, 65, 62, 0.2); }\n.status-success td, .status-warning td, .status-error td { background: transparent; }\ntr.status-error td, tr.status-warning td { border-bottom: 1px solid #FAFAFA; border-top: 1px solid #FAFAFA; }\n.status-warning .colored { color: #A46A1F; }\n.status-error .colored  { color: #B0413E; }\n\n.sf-toggle { cursor: pointer; }\n.sf-toggle-content { -moz-transition: display .25s ease; -webkit-transition: display .25s ease; transition: display .25s ease; }\n.sf-toggle-content.sf-toggle-hidden { display: none; }\n.sf-toggle-content.sf-toggle-visible { display: block; }\nthead.sf-toggle-content.sf-toggle-visible, tbody.sf-toggle-content.sf-toggle-visible { display: table-row-group; }\n.sf-toggle-off .icon-close, .sf-toggle-on .icon-open { display: none; }\n.sf-toggle-off .icon-open, .sf-toggle-on .icon-close { display: block; }\n\n.tab-navigation { margin: 0 0 1em 0; padding: 0; }\n.tab-navigation li { background: #FFF; border: 1px solid #DDD; color: #444; cursor: pointer; display: inline-block; font-size: 16px; margin: 0 0 0 -1px; padding: .5em .75em; z-index: 1; }\n.tab-navigation li:hover { background: #EEE; }\n.tab-navigation li.disabled { background: #F5F5F5; color: #999; }\n.tab-navigation li.active { background: #666; border-color: #666; color: #FAFAFA; z-index: 1100; }\n.tab-navigation li .badge { background-color: #F5F5F5; color: #777; display: inline-block; font-size: 14px; font-weight: bold; margin-left: 8px; min-width: 10px; padding: 1px 6px; text-align: center; }\n.tab-navigation li:hover .badge { background: #FAFAFA; color: #777; }\n.tab-navigation li.active .badge { background-color: #444; color: #FFF; }\n.tab-navigation li .badge.status-warning { background: #A46A1F; color: #FFF; }\n.tab-navigation li .badge.status-error { background: #B0413E; color: #FFF; }\n.tab-content > *:first-child { margin-top: 0; }\n\n.container { max-width: 1024px; margin: 0 auto; padding: 0 15px; }\n.container::after { content: \"\"; display: table; clear: both; }\n\nheader { background-color: #222; color: rgba(255, 255, 255, 0.75); font-size: 13px; height: 33px; line-height: 33px; padding: 0; }\nheader .container { display: flex; justify-content: space-between; }\n.logo { flex: 1; font-size: 13px; font-weight: normal; margin: 0; padding: 0; }\n.logo svg { height: 18px; width: 18px; opacity: .8; vertical-align: -5px; }\n\n.help-link { margin-left: 15px; }\n.help-link a { color: inherit; }\n.help-link .icon svg { height: 15px; width: 15px; opacity: .7; vertical-align: -2px; }\n.help-link a:hover { color: #EEE; text-decoration: none; }\n.help-link a:hover svg { opacity: .9; }\n\n.exception-summary { background: #B0413E; border-bottom: 2px solid rgba(0, 0, 0, 0.1); border-top: 1px solid rgba(0, 0, 0, .3); flex: 0 0 auto; margin-bottom: 15px; }\n.exception-metadata { background: rgba(0, 0, 0, 0.1); padding: 7px 0; }\n.exception-metadata .container { display: flex; flex-direction: row; justify-content: space-between; }\n.exception-metadata h2 { color: rgba(255, 255, 255, 0.8); font-size: 13px; font-weight: 400; margin: 0; }\n.exception-http small { font-size: 13px; opacity: .7; }\n.exception-hierarchy { flex: 1; }\n.exception-hierarchy .icon { margin: 0 3px; opacity: .7; }\n.exception-hierarchy .icon svg { height: 13px; width: 13px; vertical-align: -2px; }\n\n.exception-without-message .exception-message-wrapper { display: none; }\n.exception-message-wrapper .container { display: flex; align-items: flex-start; min-height: 70px; padding: 10px 15px 8px; }\n.exception-message { flex-grow: 1; }\n.exception-message, .exception-message a { color: #FFF; font-size: 21px; font-weight: 400; margin: 0; }\n.exception-message.long { font-size: 18px; }\n.exception-message a { border-bottom: 1px solid rgba(255, 255, 255, 0.5); font-size: inherit; text-decoration: none; }\n.exception-message a:hover { border-bottom-color: #ffffff; }\n\n.exception-illustration { flex-basis: 111px; flex-shrink: 0; height: 66px; margin-left: 15px; opacity: .7; }\n\n.trace + .trace { margin-top: 30px; }\n.trace-head { background-color: #e0e0e0; padding: 10px; }\n.trace-head .trace-class { color: #222; font-size: 18px; font-weight: bold; line-height: 1.3; margin: 0; position: relative; }\n.trace-head .trace-namespace { color: #999; display: block; font-size: 13px; }\n.trace-head .icon { position: absolute; right: 0; top: 0; }\n.trace-head .icon svg { height: 24px; width: 24px; }\n\n.trace-details { background: #FFF; border: 1px solid #E0E0E0; box-shadow: 0px 0px 1px rgba(128, 128, 128, .2); margin: 1em 0; }\n\n.trace-message { font-size: 14px; font-weight: normal; margin: .5em 0 0; }\n.trace-details { table-layout: fixed; }\n.trace-line { position: relative; padding-top: 8px; padding-bottom: 8px; }\n.trace-line:hover { background: #F5F5F5; }\n.trace-line a { color: #222; }\n.trace-line .icon { opacity: .4; position: absolute; left: 10px; top: 11px; }\n.trace-line .icon svg { height: 16px; width: 16px; }\n.trace-line-header { padding-left: 36px; padding-right: 10px; }\n\n.trace-file-path, .trace-file-path a { color: #222; font-size: 13px; }\n.trace-class { color: #B0413E; }\n.trace-type { padding: 0 2px; }\n.trace-method { color: #B0413E; font-weight: bold; }\n.trace-arguments { color: #777; font-weight: normal; padding-left: 2px; }\n\n.trace-code { background: #FFF; font-size: 12px; margin: 10px 10px 2px 10px; padding: 10px; overflow-x: auto; white-space: nowrap; }\n.trace-code ol { margin: 0; float: left; }\n.trace-code li { color: #969896; margin: 0; padding-left: 10px; float: left; width: 100%; }\n.trace-code li + li { margin-top: 5px; }\n.trace-code li.selected { background: #F7E5A1; margin-top: 2px; }\n.trace-code li code { color: #222; white-space: nowrap; }\n\n.trace-as-text .stacktrace { line-height: 1.8; margin: 0 0 15px; white-space: pre-wrap; }\n\n@media (min-width: 575px) {\n    .hidden-xs-down { display: initial; }\n    .help-link { margin-left: 30px; }\n}\n</style>\n            <style>\n        .sf-reset .traces {\n            padding-bottom: 14px;\n        }\n        .sf-reset .traces li {\n            font-size: 12px;\n            color: #868686;\n            padding: 5px 4px;\n            list-style-type: decimal;\n            margin-left: 20px;\n        }\n        .sf-reset #logs .traces li.error {\n            font-style: normal;\n            color: #AA3333;\n            background: #f9ecec;\n        }\n        .sf-reset #logs .traces li.warning {\n            font-style: normal;\n            background: #ffcc00;\n        }\n        /* fix for Opera not liking empty <li> */\n        .sf-reset .traces li:after {\n            content: \"\\00A0\";\n        }\n        .sf-reset .trace {\n            border: 1px solid #D3D3D3;\n            padding: 10px;\n            overflow: auto;\n            margin: 10px 0 20px;\n        }\n        .sf-reset .block-exception {\n            -moz-border-radius: 16px;\n            -webkit-border-radius: 16px;\n            border-radius: 16px;\n            margin-bottom: 20px;\n            background-color: #f6f6f6;\n            border: 1px solid #dfdfdf;\n            padding: 30px 28px;\n            word-wrap: break-word;\n            overflow: hidden;\n        }\n        .sf-reset .block-exception div {\n            color: #313131;\n            font-size: 10px;\n        }\n        .sf-reset .block-exception-detected .illustration-exception,\n        .sf-reset .block-exception-detected .text-exception {\n            float: left;\n        }\n        .sf-reset .block-exception-detected .illustration-exception {\n            width: 152px;\n        }\n        .sf-reset .block-exception-detected .text-exception {\n            width: 670px;\n            padding: 30px 44px 24px 46px;\n            position: relative;\n        }\n        .sf-reset .text-exception .open-quote,\n        .sf-reset .text-exception .close-quote {\n            font-family: Arial, Helvetica, sans-serif;\n            position: absolute;\n            color: #C9C9C9;\n            font-size: 8em;\n        }\n        .sf-reset .open-quote {\n            top: 0;\n            left: 0;\n        }\n        .sf-reset .close-quote {\n            bottom: -0.5em;\n            right: 50px;\n        }\n        .sf-reset .block-exception p {\n            font-family: Arial, Helvetica, sans-serif;\n        }\n        .sf-reset .block-exception p a,\n        .sf-reset .block-exception p a:hover {\n            color: #565656;\n        }\n        .sf-reset .logs h2 {\n            float: left;\n            width: 654px;\n        }\n        .sf-reset .error-count, .sf-reset .support {\n            float: right;\n            width: 170px;\n            text-align: right;\n        }\n        .sf-reset .error-count span {\n             display: inline-block;\n             background-color: #aacd4e;\n             -moz-border-radius: 6px;\n             -webkit-border-radius: 6px;\n             border-radius: 6px;\n             padding: 4px;\n             color: white;\n             margin-right: 2px;\n             font-size: 11px;\n             font-weight: bold;\n        }\n\n        .sf-reset .support a {\n            display: inline-block;\n            -moz-border-radius: 6px;\n            -webkit-border-radius: 6px;\n            border-radius: 6px;\n            padding: 4px;\n            color: #000000;\n            margin-right: 2px;\n            font-size: 11px;\n            font-weight: bold;\n        }\n\n        .sf-reset .toggle {\n            vertical-align: middle;\n        }\n        .sf-reset .linked ul,\n        .sf-reset .linked li {\n            display: inline;\n        }\n        .sf-reset #output-content {\n            color: #000;\n            font-size: 12px;\n        }\n        .sf-reset #traces-text pre {\n            white-space: pre;\n            font-size: 12px;\n            font-family: monospace;\n        }\n    </style>\n    </head>\n    <body>\n        <header>\n            <div class=\"container\">\n                <h1 class=\"logo\"><svg xmlns=\"http://www.w3.org/2000/svg\" width=\"24\" height=\"24\" viewBox=\"0 0 24 24\"><path fill=\"#FFF\" d=\"M12 .9C5.8.9.9 5.8.9 12s5 11.1 11.1 11.1 11.1-5 11.1-11.1S18.2.9 12 .9zm6.5 6c-.6 0-.9-.3-.9-.8 0-.2 0-.4.2-.6.1-.3.2-.3.2-.4 0-.3-.5-.4-.6-.4-1.8.1-2.3 2.5-2.7 4.4l-.2 1c1 .2 1.8 0 2.2-.3.6-.4-.2-.7-.1-1.2.1-.3.5-.5.7-.6.5 0 .7.5.7.9 0 .7-1 1.8-3 1.8-.3 0-.5 0-.6-.1l-.6 2.4c-.4 1.6-.8 3.8-2.4 5.7-1.4 1.7-2.9 1.9-3.5 1.9-1.2 0-1.9-.6-2-1.5 0-.8.7-1.3 1.2-1.3.6 0 1.1.5 1.1 1s-.2.6-.4.6c-.1.1-.3.2-.3.4 0 .1.1.3.4.3.5 0 .8-.3 1.1-.5 1.2-.9 1.6-2.7 2.2-5.7l.1-.7c.2-1 .5-2.1.7-3.2-.8-.6-1.3-1.4-2.4-1.7-.6-.1-1.1.1-1.5.5-.4.5-.2 1.1.2 1.5l.7.6c.7.8 1.2 1.6 1 2.5-.3 1.5-2 2.6-4 1.9-1.8-.6-2-1.8-1.8-2.5.2-.6.6-.7 1.1-.6.5.2.6.7.6 1.2 0 .1 0 .1-.1.3-.2.1-.3.3-.3.4-.1.4.4.6.7.7.7.3 1.6-.2 1.8-.8.2-.6-.2-1-.4-1.1l-.7-.8c-.4-.4-1.1-1.4-.7-2.6.1-.5.4-.9.7-1.3.9-.6 1.8-.7 2.8-.6 1.2.4 1.8 1.1 2.6 1.8.5-1.2 1-2.4 1.8-3.5.9-.9 1.9-1.6 3.1-1.7 1.3.2 2.2.7 2.2 1.6 0 .4-.2 1.1-.9 1.1z\"/></svg>\n Symfony Exception</h1>\n\n                <div class=\"help-link\">\n                    <a href=\"https://symfony.com/doc\">\n                        <span class=\"icon\"><svg width=\"1792\" height=\"1792\" viewBox=\"0 0 1792 1792\" xmlns=\"http://www.w3.org/2000/svg\"><path fill=\"#FFF\" d=\"M1703 478q40 57 18 129l-275 906q-19 64-76.5 107.5T1247 1664H324q-77 0-148.5-53.5T76 1479q-24-67-2-127 0-4 3-27t4-37q1-8-3-21.5t-3-19.5q2-11 8-21t16.5-23.5T116 1179q23-38 45-91.5t30-91.5q3-10 .5-30t-.5-28q3-11 17-28t17-23q21-36 42-92t25-90q1-9-2.5-32t.5-28q4-13 22-30.5t22-22.5q19-26 42.5-84.5T404 411q1-8-3-25.5t-2-26.5q2-8 9-18t18-23 17-21q8-12 16.5-30.5t15-35 16-36 19.5-32 26.5-23.5 36-11.5T620 134l-1 3q38-9 51-9h761q74 0 114 56t18 130l-274 906q-36 119-71.5 153.5T1089 1408H220q-27 0-38 15-11 16-1 43 24 70 144 70h923q29 0 56-15.5t35-41.5l300-987q7-22 5-57 38 15 59 43zm-1064 2q-4 13 2 22.5t20 9.5h608q13 0 25.5-9.5T1311 480l21-64q4-13-2-22.5t-20-9.5H702q-13 0-25.5 9.5T660 416zm-83 256q-4 13 2 22.5t20 9.5h608q13 0 25.5-9.5T1228 736l21-64q4-13-2-22.5t-20-9.5H619q-13 0-25.5 9.5T577 672z\"/></svg>\n</span>\n                        <span class=\"hidden-xs-down\">Symfony</span> Docs\n                    </a>\n                </div>\n\n                <div class=\"help-link\">\n                    <a href=\"https://symfony.com/support\">\n                        <span class=\"icon\"><svg width=\"1792\" height=\"1792\" viewBox=\"0 0 1792 1792\" xmlns=\"http://www.w3.org/2000/svg\"><path fill=\"#FFF\" d=\"M896 0q182 0 348 71t286 191 191 286 71 348-71 348-191 286-286 191-348 71-348-71-286-191-191-286T0 896t71-348 191-286T548 71 896 0zm0 128q-190 0-361 90l194 194q82-28 167-28t167 28l194-194q-171-90-361-90zM218 1257l194-194q-28-82-28-167t28-167L218 535q-90 171-90 361t90 361zm678 407q190 0 361-90l-194-194q-82 28-167 28t-167-28l-194 194q171 90 361 90zm0-384q159 0 271.5-112.5T1280 896t-112.5-271.5T896 512 624.5 624.5 512 896t112.5 271.5T896 1280zm484-217l194 194q90-171 90-361t-90-361l-194 194q28 82 28 167t-28 167z\"/></svg>\n</span>\n                        <span class=\"hidden-xs-down\">Symfony</span> Support\n                    </a>\n                </div>\n            </div>\n        </header>\n\n            <div class=\"exception-summary \">\n    <div class=\"exception-metadata\">\n        <div class=\"container\">\n            <h2 class=\"exception-hierarchy\">\n                                <abbr title=\"Doctrine\\Common\\Persistence\\Mapping\\MappingException\">MappingException</abbr>\n            </h2>\n            <h2 class=\"exception-http\">\n                HTTP 500 <small>Internal Server Error</small>\n            </h2>\n        </div>\n    </div>\n\n    <div class=\"exception-message-wrapper\">\n        <div class=\"container\">\n            <h1 class=\"break-long-words exception-message \">Class &#039;Bck\\AdminBundle\\Entity\\User&#039; does not exist</h1>\n\n            <div class=\"exception-illustration hidden-xs-down\">\n                <svg viewBox=\"0 0 136 81\" xmlns=\"http://www.w3.org/2000/svg\" fill-rule=\"evenodd\" clip-rule=\"evenodd\" stroke-linejoin=\"round\" stroke-miterlimit=\"1.414\"><path d=\"M92.358 20.403a23.168 23.168 0 0 1 9.003 1.881 23.67 23.67 0 0 1 5.197 3.079 24.257 24.257 0 0 1 3.457 3.296 24.771 24.771 0 0 1 5.042 9.396c.486 1.72.78 3.492.895 5.28l.008.142.028.158.015.246v13.875c.116.034.232.065.348.098.193.054.383.116.577.168.487.125.989.191 1.49.215.338.016.689.023 1.021-.059.021-.005.032-.029.048-.044l.095-.1c.243-.265.461-.552.663-.851.277-.408.523-.837.746-1.279l.042-.087c-.066-.012-.131-.026-.197-.04l-.099-.023a5.536 5.536 0 0 1-.694-.242 5.649 5.649 0 0 1-2.374-1.845 5.694 5.694 0 0 1-.824-1.594 6.514 6.514 0 0 1-.267-2.781c.045-.394.126-.779.233-1.159.079-.278.162-.562.307-.812.094-.163.129-.196.247-.341l.79-.882c.143-.143.174-.186.34-.303.249-.174.536-.289.834-.333.074-.011.15-.014.224-.02l1.188-.037c.173.004.217-.002.388.028s.211.05.375.105l.018.007c.059.026.119.05.176.079.151.076.179.104.313.2l.006-.021c.073-.187.084-.238.187-.41.077-.129.167-.249.27-.357.051-.054.108-.103.162-.154l1.124-.95c.14-.107.172-.14.327-.224.155-.085.199-.094.363-.154l.019-.006c.169-.043.211-.06.385-.077.174-.016.218-.007.392.003l1.446.158c.193.033.244.033.43.098.278.097.534.259.744.47.053.053.1.112.149.167l.923 1.158.149.213.028.054.017-.014.184-.125c.196-.104.196-.104.402-.184l1.386-.451c.064-.018.126-.038.19-.052.129-.028.259-.042.39-.043.16-.002.321.017.478.047.364.069.711.21 1.032.396.162.094.316.199.469.308.088.063.176.132.27.188l.021.011c.19.123.245.146.409.305.185.178.336.393.443.63.035.079.061.162.091.243l.439 1.428c.045.175.062.219.081.4.02.193.006.381-.015.573a7.79 7.79 0 0 1-.101.645c-.09.455-.212.901-.365 1.339-.128.366-.273.73-.445 1.077-.658 1.335-1.652 2.512-2.917 3.265a6.399 6.399 0 0 1-1.019.489 6.097 6.097 0 0 1-.631.203c-.226.058-.455.1-.686.134l-.096.012-.061.007c-.01.176-.022.352-.036.528-.034.39-.082.778-.153 1.163a14.258 14.258 0 0 1-.574 2.114c-.229.654-.484 1.306-.806 1.918a9.16 9.16 0 0 1-.386.656c-.219.348-.451.686-.697 1.013-.448.594-.946 1.148-1.521 1.614-.255.207-.52.397-.808.553-.9.489-1.919.648-2.921.735-.493.038-.986.059-1.478.099-.162.015-.324.033-.486.049-.145.011-.289.022-.434.03a15.768 15.768 0 0 1-2.778-.118c0 1.416.007 2.832-.001 4.248a9.737 9.737 0 0 1-.684 3.479 9.615 9.615 0 0 1-1.72 2.804 9.326 9.326 0 0 1-3.04 2.279 9.046 9.046 0 0 1-5.33.715 9.064 9.064 0 0 1-2.988-1.079 9.363 9.363 0 0 1-2.761-2.429 10.078 10.078 0 0 1-1.05 1.16 9.281 9.281 0 0 1-1.871 1.358 9.033 9.033 0 0 1-2.495.926 9.04 9.04 0 0 1-6.462-1.072 9.395 9.395 0 0 1-2.602-2.292l-.062-.08a10.896 10.896 0 0 1-.53.635 9.266 9.266 0 0 1-2.671 2.032 9.028 9.028 0 0 1-6.044.751 9.048 9.048 0 0 1-2.436-.934 9.343 9.343 0 0 1-2.286-1.803 9.572 9.572 0 0 1-1.783-2.757 9.705 9.705 0 0 1-.773-3.693V67.244c-.157.024-.314.047-.472.067-.487.06-.977.103-1.469.109-.313.004-.627-.009-.94-.028-.426-.025-.85-.065-1.273-.125-1.833-.264-3.65-.92-5.109-2.117a8.172 8.172 0 0 1-1.064-1.049 10.155 10.155 0 0 1-.878-1.236 15.277 15.277 0 0 1-.7-1.274 20.835 20.835 0 0 1-1.889-6.194l-.018-.142-.008-.061a6.47 6.47 0 0 1-.99-.297 6.135 6.135 0 0 1-.61-.285 6.587 6.587 0 0 1-.889-.562c-1.228-.924-2.124-2.259-2.668-3.711a9.947 9.947 0 0 1-.307-.99 10.288 10.288 0 0 1-.318-1.923c-.009-.147-.011-.293-.015-.44v-.037c.008-.175.004-.22.037-.393.033-.173.053-.213.11-.378l.561-1.417c.031-.068.06-.139.095-.206a2.028 2.028 0 0 1 .771-.803c.093-.054.194-.095.289-.145l.311-.179c.352-.194.714-.358 1.107-.44.213-.044.426-.061.643-.061l.034.001c.177.014.223.01.396.052.174.041.214.065.379.132l1.347.635c.073.04.15.076.221.121.142.091.272.2.388.325.154.166.176.222.297.414l.022.047.722-.762.168-.158c.165-.122.202-.161.385-.253.206-.102.429-.168.656-.193.076-.008.152-.008.228-.011l1.46.013c.177.011.223.007.397.046.175.038.215.061.381.126l.018.008c.154.08.196.094.338.196.142.102.169.137.294.259l.853.912.152-.067.191-.063.019-.005.196-.042c.177-.019.222-.031.401-.022.066.003.133.013.199.02l1.185.182c.073.016.147.027.219.047.288.08.558.227.784.428.151.135.177.181.303.339l.714 1.004c.097.152.127.187.201.352.077.172.123.352.164.536.029.134.056.269.08.404.063.361.102.725.112 1.091.021.78-.08 1.566-.321 2.307a5.906 5.906 0 0 1-.532 1.183 5.463 5.463 0 0 1-3.257 2.489l-.03.008c.195.584.433 1.155.712 1.701.215.422.453.833.735 1.211.026.035.026.034.053.068l.058.072c.056.024.113.042.171.06.319.09.653.121.982.14.488.027.978.013 1.461-.06.167-.028.333-.062.499-.089.134-.022.267-.042.401-.066l.28-.056c.154-.023.308-.049.462-.076l.115-.021V43.881c.011-.203.006-.203.042-.404a26.66 26.66 0 0 1 .226-2.241 24.737 24.737 0 0 1 5.72-12.577 24.204 24.204 0 0 1 3.457-3.296 23.653 23.653 0 0 1 4.937-2.966 23.215 23.215 0 0 1 5.604-1.681 23.703 23.703 0 0 1 3.958-.313zm-.287 2.042a21.169 21.169 0 0 0-8.012 1.622 21.636 21.636 0 0 0-4.799 2.766 22.233 22.233 0 0 0-3.205 2.985 22.705 22.705 0 0 0-4.897 9.196 23.383 23.383 0 0 0-.737 4.867h-.025v15.744c-.258.053-.258.052-.517.101-.28.051-.56.1-.841.144-.211.04-.421.079-.632.115l-.232.037-.411.078c-.116.02-.233.035-.348.057-.305.056-.609.11-.917.14a9.929 9.929 0 0 1-1.883-.017c-.514-.056-1.044-.155-1.51-.397a1.762 1.762 0 0 1-.33-.218 1.925 1.925 0 0 1-.234-.252 5.248 5.248 0 0 1-.174-.22 8.97 8.97 0 0 1-.582-.883 13.806 13.806 0 0 1-.941-1.971 14.348 14.348 0 0 1-.608-1.954 14.04 14.04 0 0 1-.169-.86l-.015-.11-.015-.109c.161-.007.16-.007.321-.016a12.793 12.793 0 0 0 1.413-.182 4.43 4.43 0 0 0 .28-.074 3.56 3.56 0 0 0 1.199-.616c.309-.244.576-.543.786-.88.163-.261.292-.544.387-.838.123-.378.192-.774.214-1.172a5.102 5.102 0 0 0-.024-.865 7.192 7.192 0 0 0-.145-.799l-.714-1.005-1.184-.182-.019.005-.946.758-.12 1.229a4.953 4.953 0 0 1 .111.455c.032.181.052.36.043.544a1.04 1.04 0 0 1-.056.303c-.11.301-.419.451-.696.548-.402.142-.813.25-1.229.339l.07-.648c.022-.191.047-.381.08-.57.036-.207.079-.413.152-.61.077-.211.182-.412.296-.605.044-.074.092-.146.135-.222.029-.048.031-.047.055-.098.016-.033.031-.064.045-.098l-.026-1.551-1.042-1.116-.018-.008-1.459-.014-1.022 1.079c-.049.128-.08.258-.111.393a5.274 5.274 0 0 0-.1.651 5.55 5.55 0 0 0-.031.466c-.009.687.104 1.37.294 2.028.11.382.262.753.402 1.123-.115-.029-.228-.06-.342-.092a9.526 9.526 0 0 1-1.176-.446c-.108-.05-.111-.048-.191-.097a1.921 1.921 0 0 1-.327-.249c-.416-.4-.589-.986-.671-1.55a5.643 5.643 0 0 1-.057-.549c-.007-.143-.006-.286-.007-.429-.001-.186.005-.372.011-.558l.001-.039-.567-1.446-1.347-.634c-.316-.008-.599.144-.867.299-.109.063-.218.126-.33.185a2.058 2.058 0 0 1-.125.061l-.042.019-.561 1.416c0 .209.014.416.036.624.04.377.106.75.196 1.118.076.309.164.616.275.913.415 1.109 1.093 2.146 2.043 2.838.234.171.485.317.746.442.183.088.371.161.565.22.263.079.532.13.803.17.296.045.594.075.892.095l.108.007c.004.151.01.302.017.453.011.177.023.353.038.529a18.13 18.13 0 0 0 .762 3.752c.239.76.522 1.505.857 2.225.23.494.483.977.767 1.44.288.469.608.915.989 1.308 1.001 1.028 2.324 1.648 3.687 1.976.643.155 1.298.243 1.955.287.311.021.622.036.933.033.418-.006.835-.041 1.25-.094.238-.03.477-.064.713-.11.117-.023.232-.053.348-.081.196-.048.392-.097.586-.151.147-.041.291-.094.436-.144.204-.069.408-.139.608-.217l.006-.003c0 2.207-.013 4.414.001 6.62a7.942 7.942 0 0 0 .13 1.32 7.545 7.545 0 0 0 2.383 4.243 7.23 7.23 0 0 0 2.258 1.372 7.094 7.094 0 0 0 7.012-1.164 7.504 7.504 0 0 0 2.035-2.613 7.727 7.727 0 0 0 .676-2.401l.009-.088.038-.765a8.16 8.16 0 0 0 .113 1.324c.121.694.338 1.37.643 2.001a7.49 7.49 0 0 0 1.692 2.275 7.266 7.266 0 0 0 2.24 1.399 7.11 7.11 0 0 0 4.615.19 7.212 7.212 0 0 0 2.351-1.218 7.501 7.501 0 0 0 2.128-2.64 7.763 7.763 0 0 0 .702-2.39l.01-.088.009-.088.038-.765a9.339 9.339 0 0 0 .021.575 7.626 7.626 0 0 0 .621 2.504 7.507 7.507 0 0 0 2.35 2.972 7.1 7.1 0 0 0 7.026.881 7.275 7.275 0 0 0 2.268-1.515 7.525 7.525 0 0 0 1.612-2.338 7.58 7.58 0 0 0 .572-2.033c.048-.347.069-.696.071-1.046v-6.721c.136.051.271.101.408.148a12.153 12.153 0 0 0 1.976.443c.264.035.529.055.794.071.33.02.66.031.991.027.245-.002.49-.012.735-.031.245-.018.49-.048.735-.068.407-.03.814-.051 1.221-.079a9.493 9.493 0 0 0 1.384-.188c.315-.073.626-.174.912-.329a3.53 3.53 0 0 0 .586-.418c.46-.386.85-.85 1.205-1.337a12.178 12.178 0 0 0 .801-1.246c.122-.232.229-.471.33-.712a15.873 15.873 0 0 0 .681-1.988c.136-.525.23-1.058.282-1.598.035-.41.052-.822.088-1.232.03-.317.078-.632.121-.947l.018-.145.016-.145c.144.009.287.016.431.021.459.009.924.007 1.378-.07a4.456 4.456 0 0 0 1.353-.482c.989-.55 1.752-1.466 2.258-2.488.116-.235.214-.48.304-.727a7.58 7.58 0 0 0 .377-1.43c.016-.109.027-.218.039-.328l.001-.009-.438-1.428a5.206 5.206 0 0 1-.16-.096c-.158-.105-.311-.219-.467-.326a3.829 3.829 0 0 0-.159-.1 1.356 1.356 0 0 0-.509-.18l-.01-.001-1.386.452-.681 1.323c-.016.212-.023.424-.043.636a5.66 5.66 0 0 1-.139.873c-.118.494-.316.999-.702 1.338a1.865 1.865 0 0 1-.496.301l-.272.087a9.57 9.57 0 0 1-.83.205 8.797 8.797 0 0 1-.582.091l.229-.462c.079-.163.158-.325.229-.492.051-.118.096-.239.139-.36.036-.103.076-.209.103-.315.019-.075.031-.153.041-.229.017-.132.031-.263.043-.395.035-.368.06-.737.094-1.104.02-.187.048-.372.067-.559.015-.167.015-.336.012-.505a4.76 4.76 0 0 0-.074-.826c-.012-.065-.03-.13-.045-.194l-.003-.009-.923-1.157-1.446-.159-.019.006-1.124.95-.154 1.489c.011.034.024.066.037.099.044.115.107.221.161.331.046.096.088.193.13.29l.031.076c.013.033.017.07.023.105.012.096.022.191.031.287.031.364.047.73.081 1.093.013.102.028.202.04.303.014.145.027.29.033.435.014.28.016.561.023.841a9.588 9.588 0 0 1-.862-.323c-.063-.027-.128-.062-.193-.084a1.325 1.325 0 0 0-.067-.013c-.081-.01-.162-.017-.243-.025-.245-.02-.49-.037-.734-.061-.066-.007-.132-.014-.198-.028l-.017-.005c-.03-.013-.029-.014-.067-.038a1.614 1.614 0 0 1-.161-.108.863.863 0 0 1-.22-.242c-.089-.155-.102-.34-.09-.517.02-.299.117-.591.228-.866l.004-.009-.018-1.197-.874-.84-.018-.007-1.188.036-.79.882c-.037.112-.074.224-.106.338a4.756 4.756 0 0 0-.171 1.906c.039.329.115.654.233.963a3.542 3.542 0 0 0 1.263 1.636c.313.222.659.393 1.019.517.237.082.487.111.734.145.479.06.959.106 1.438.166.121.017.241.037.362.058l.158.026a12.12 12.12 0 0 1-.923 2.565 13.221 13.221 0 0 1-.829 1.474 9.474 9.474 0 0 1-.984 1.286c-.08.087-.163.17-.248.252a1.655 1.655 0 0 1-.329.262 2.376 2.376 0 0 1-.722.247c-.457.089-.927.093-1.39.071-.391-.018-.781-.06-1.168-.123a7.817 7.817 0 0 1-.609-.124c-.226-.056-.448-.124-.671-.191-.065-.019-.131-.035-.197-.054a14.75 14.75 0 0 1-.543-.165 23.384 23.384 0 0 1-.453-.128c-.196-.059-.195-.059-.39-.12l-.276-.077V43.881h-.025a34.633 34.633 0 0 0-.031-.557 23.606 23.606 0 0 0-.4-2.994 22.743 22.743 0 0 0-1.492-4.708 22.567 22.567 0 0 0-4.593-6.748 21.865 21.865 0 0 0-6.882-4.706 21.175 21.175 0 0 0-8.115-1.722l-.411-.001zm9.15 33.69c.109.015.214.038.315.085a1.012 1.012 0 0 1 .574.771c.021.132.013.268.009.4a8.38 8.38 0 0 1-.026.476 8.767 8.767 0 0 1-1.564 4.282c-.306.437-.65.846-1.024 1.222a10.09 10.09 0 0 1-4.612 2.627c-1.32.343-2.704.427-4.055.254a10.422 10.422 0 0 1-2.67-.709 9.917 9.917 0 0 1-3.57-2.503 9.312 9.312 0 0 1-.775-.984 8.933 8.933 0 0 1-.731-1.288 8.648 8.648 0 0 1-.795-3.377c-.003-.104-.008-.211 0-.316a1.042 1.042 0 0 1 .254-.609.98.98 0 0 1 1.337-.125 1.023 1.023 0 0 1 .385.719c.007.151.006.303.014.454a6.547 6.547 0 0 0 .524 2.217c.257.595.599 1.15 1.006 1.648.325.398.691.759 1.087 1.081.312.253.642.482.987.684 2.592 1.522 5.945 1.538 8.553.047a7.982 7.982 0 0 0 1.069-.731 7.619 7.619 0 0 0 1.142-1.15 6.949 6.949 0 0 0 1.018-1.741 6.538 6.538 0 0 0 .467-2.425l.004-.084a1.012 1.012 0 0 1 .672-.876c.08-.028.158-.04.241-.05.082-.003.082-.003.164.001zm-70.51-12.426c-15.5.93-28.544-5.922-30.126-16.443C-1.156 15.689 11.64 4.024 29.14 1.235c17.501-2.79 33.123 4.345 34.864 15.922 1.575 10.475-8.749 21.021-23.691 25.001l.001.099a31.185 31.185 0 0 0 .042.833c.007.094.019.188.021.282.006.178.013.356.024.534.011.16.024.32.039.48.017.154.038.306.058.459.036.273.077.544.144.811a4.723 4.723 0 0 0 .449 1.128c.192.332.434.628.702.898l.047.05c.151.139.302.275.461.403.24.192.492.367.748.537.474.314.962.6 1.457.877l.041.023.588.735-.729.586c-.376.112-.755.216-1.135.309a11.193 11.193 0 0 1-2.562.355 8.575 8.575 0 0 1-2.995-.486 8.461 8.461 0 0 1-.96-.413 11.194 11.194 0 0 1-1.836-1.152 13.345 13.345 0 0 1-1.07-.934c-.23-.221-.454-.448-.672-.681-.121-.129-.246-.258-.36-.395a23.448 23.448 0 0 1-1.328-1.773c-.051-.076-.049-.077-.095-.155l-.277-.477-.072-.13c-.081-.177-.159-.357-.238-.535l-.003-.01-.092-.707zm52.409-7.804c3.557 0 6.444 3.201 6.444 7.145 0 3.944-2.887 7.146-6.444 7.146s-6.444-3.202-6.444-7.146 2.887-7.145 6.444-7.145zm18.062 0c3.557 0 6.444 3.201 6.444 7.145 0 3.944-2.887 7.146-6.444 7.146s-6.444-3.202-6.444-7.146 2.887-7.145 6.444-7.145zM83.12 42.029c1.915 0 3.47 1.601 3.47 3.573s-1.555 3.573-3.47 3.573c-1.915 0-3.47-1.601-3.47-3.573s1.555-3.573 3.47-3.573zm17.846 0c1.915 0 3.47 1.601 3.47 3.573s-1.555 3.573-3.47 3.573c-1.915 0-3.47-1.601-3.47-3.573s1.555-3.573 3.47-3.573zM17.019 28c-.368 1.65-1.848 5.008-5.178 5.799-2.572.611-4.153-.815-4.544-2.559-.424-1.891.722-3.532 2.121-4.575a3.473 3.473 0 0 1-1.446-2.099c-.421-1.875.867-3.637 3.184-4.187 1.917-.455 3.185.248 3.462 1.482.265 1.184-.534 2.275-1.828 2.582-.878.209-1.574-.042-1.718-.683a1.4 1.4 0 0 1 .044-.704s.287.227.894.083c.751-.179 1.086-.709.972-1.219-.14-.625-.892-.827-1.739-.626-1.054.25-2.06 1.096-1.713 2.642.232 1.036.871 1.56 1.483 1.813.245-.11.481-.183.688-.233.943-.224 1.48-.005 1.587.472.092.411-.144.935-1.166 1.178a3.255 3.255 0 0 1-1.548.004c-.837.771-1.58 1.883-1.27 3.264.276 1.234 1.267 2.125 2.944 1.726 2.598-.617 3.861-3.638 4.277-4.883-.353-.574-.615-1.153-.732-1.676-.107-.477.145-1.005.863-1.175.48-.114.702.127.846.769a2.77 2.77 0 0 1-.03.995c.209.331.443.622.735.951.616-1.983 1.369-3.877 1.737-3.964.591-.141 1.492.65 1.492.65-.815.644-1.689 2.376-2.333 4.158.804.658 1.627 1.103 2.139.982.43-.102.735-.577.95-1.151-.323-2.226.975-4.331 2.31-4.648.703-.167 1.257.204 1.39.796.114.51-.044 1.379-.854 1.745-.236-1.053-.672-1.348-.944-1.283-.495.117-.844 1.413-.538 2.778.232 1.037.712 1.529 1.351 1.377.756-.179 1.333-1.176 1.699-2.128-.265-2.095.877-4.166 2.221-4.486.671-.159 1.214.162 1.391.952.332 1.48-.986 2.885-2.173 3.444.265.734.673 1.053 1.281.909.96-.229 1.578-1.465 1.923-2.506-.125-1.267-.26-2.385-.406-3.035l-.055-.247s1.568-.286 1.778.652l.019.082c.238-.663.67-1.216 1.309-1.368.83-.197 1.526.504 1.755 1.524.497 2.22-.556 4.428-1.834 4.732-.368.087-.642.066-.883-.033.121 1.288.292 2.651.542 3.77.126.559.272 1.061.448 1.47-.464.11-1.797.392-1.978-.414-.16-.716-.342-3.206-.554-5.612-.504 1.107-1.311 2.192-2.441 2.46-1.008.24-1.685-.303-2.055-1.182-.491 1.082-1.281 2.148-2.381 2.409-.817.194-1.554-.117-1.988-1.013-.36.843-.875 1.555-1.54 1.713-.639.152-1.53-.295-2.4-1.024-.239.888-.384 1.668-.39 2.241 0 0-.701.028-.804-.433-.096-.427.065-1.436.341-2.61a10.315 10.315 0 0 1-.713-.848zm38.163-17.803c.068.157.185.527.266.889.424 1.892.37 4.451.739 6.42-.065.61-.387 3.077-1.352 3.307-.192.045-.333-.06-.422-.454-.14-.626-.091-1.607-.293-2.512-.258-1.152-.782-1.686-1.517-1.511-.767.182-1.287 1.016-1.643 2.054-.022-.099-.053-.386-.093-.567-.211-.938-1.779-.652-1.779-.652a6.2 6.2 0 0 1 .457 1.364c.07.31.119.618.155.921-.246.495-.637.996-1.225 1.135-.064.015-.128.031-.195.029a6.977 6.977 0 0 0-.126-.784c-.258-1.152-.871-2.011-1.526-1.855a.712.712 0 0 0-.423.291c-1.337.317-2.358 2.107-2.118 3.919-.214.889-.551 1.757-1.059 1.877-.415.099-.724-.452-1.03-1.817-.059-.263-.09-.706-.122-1.149.142-.64.177-1.237.081-1.665-.107-.477-.417-.733-.816-.638-.715.17-.909 1.75-.52 3.801-.238.92-.639 1.915-1.278 2.067-.464.11-.835-.27-1.012-1.059-.158-.708-.196-1.929-.236-3.08 1.201-.424 1.911-1.009 1.775-1.617-.114-.51-.739-.743-.739-.743s-.124.722-1.064 1.258c-.029-.582-.064-1.111-.137-1.44-.137-.609-.458-.914-1.688-.622.158.327.274.698.359 1.076.103.46.162.949.189 1.445-.611.128-.947.052-.947.052s-.1.457-.041.72c.078.345.432.348 1.026.224.02 1.364-.067 2.701.143 3.639.306 1.365 1.231 1.89 2.046 1.697.907-.216 1.539-1.275 1.914-2.36.407 1.245 1.031 1.955 1.951 1.736.731-.174 1.261-1.142 1.587-2.195.431.765 1.15 1.129 1.983.931 1.214-.289 1.742-1.54 1.835-2.775 0 0 .147-.018.243-.04.526-.125.949-.488 1.26-.915.04.788.053 1.518.194 2.146.111.493.339.612.595.552.495-.118 1.081-.881 1.081-.881a3.93 3.93 0 0 1-.383-1.035c-.284-1.267.317-3.541.988-3.7.208-.049.377.257.492.767.057.255.092.504.115.751l.098 1.469c.024.246.059.496.116.751.158.707.63 1.236 1.381 1.058 1.317-.313 2.07-2.634 2.178-3.956.228.157.536.175.909.086-.505-2.253.089-6.136-.298-7.864-.1-.444-1.001-.58-1.607-.583l-.467.037zM33.729 22.293c.415-.099.711.246.885 1.02.287 1.283-.222 2.616-.797 2.753-.191.045-.695-.025-.961-1.21-.025-.115-.051-.23-.061-.349.05-1.277.439-2.097.934-2.214zm-5.187.955c.271-.065.511.104.588.449.137.609-.338 1.345-1.275 1.966-.255-1.36.159-2.29.687-2.415zm18.032-.403c-.607.144-1.062-.458-1.239-1.248-.217-.97.001-2.097.644-2.457.001.155.038.32.075.484.147.658.554 1.497 1.268 1.83-.017.749-.253 1.273-.748 1.391zm9.877-1.654c.103.461.496.714 1.039.585.799-.19.973-.993.847-1.553-.125-.559-.461-.93-.988-.805-.543.13-1.108.836-.898 1.773zm-14.21-5.442c-.104-.461-.497-.714-1.056-.581-.783.186-.972.993-.847 1.552.126.56.461.93.908.824.56-.133 1.172-1.006.995-1.795z\" fill=\"#fff\" fill-opacity=\".6\"/></svg>\n\n            </div>\n        </div>\n    </div>\n</div>\n\n<div class=\"container\">\n    <div class=\"sf-tabs\">\n        <div class=\"tab\">\n                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    <h3 class=\"tab-title\">\n                                    Exception\n                            </h3>\n\n            <div class=\"tab-content\">\n                                    <div class=\"trace trace-as-html\">\n    <div class=\"trace-details\">\n        <div class=\"trace-head\">\n            <span class=\"sf-toggle\" data-toggle-selector=\"#trace-html-1\" data-toggle-initial=\"display\">\n                <h3 class=\"trace-class\">\n                    <span class=\"trace-namespace\">\n                        Doctrine\\Common\\Persistence\\Mapping\\\n                    </span>\n                    MappingException\n\n                    <span class=\"icon icon-close\"><svg width=\"1792\" height=\"1792\" viewBox=\"0 0 1792 1792\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M1344 800v64q0 14-9 23t-23 9H480q-14 0-23-9t-9-23v-64q0-14 9-23t23-9h832q14 0 23 9t9 23zm128 448V416q0-66-47-113t-113-47H480q-66 0-113 47t-47 113v832q0 66 47 113t113 47h832q66 0 113-47t47-113zm128-832v832q0 119-84.5 203.5T1312 1536H480q-119 0-203.5-84.5T192 1248V416q0-119 84.5-203.5T480 128h832q119 0 203.5 84.5T1600 416z\"/></svg>\n</span>\n                    <span class=\"icon icon-open\"><svg width=\"1792\" height=\"1792\" viewBox=\"0 0 1792 1792\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M1344 800v64q0 14-9 23t-23 9H960v352q0 14-9 23t-23 9h-64q-14 0-23-9t-9-23V896H480q-14 0-23-9t-9-23v-64q0-14 9-23t23-9h352V416q0-14 9-23t23-9h64q14 0 23 9t9 23v352h352q14 0 23 9t9 23zm128 448V416q0-66-47-113t-113-47H480q-66 0-113 47t-47 113v832q0 66 47 113t113 47h832q66 0 113-47t47-113zm128-832v832q0 119-84.5 203.5T1312 1536H480q-119 0-203.5-84.5T192 1248V416q0-119 84.5-203.5T480 128h832q119 0 203.5 84.5T1600 416z\"/></svg>\n</span>\n                </h3>\n\n                            </span>\n        </div>\n\n        <div id=\"trace-html-1\" class=\"sf-toggle-content\">\n                                                    <div class=\"trace-line\">\n                <div class=\"trace-line-header break-long-words sf-toggle\" data-toggle-selector=\"#trace-html-1-0\" data-toggle-initial=\"\">\n            <span class=\"icon icon-close\"><svg width=\"1792\" height=\"1792\" viewBox=\"0 0 1792 1792\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M1408 960V832q0-26-19-45t-45-19H448q-26 0-45 19t-19 45v128q0 26 19 45t45 19h896q26 0 45-19t19-45zm256-544v960q0 119-84.5 203.5T1376 1664H416q-119 0-203.5-84.5T128 1376V416q0-119 84.5-203.5T416 128h960q119 0 203.5 84.5T1664 416z\"/></svg>\n</span>\n        <span class=\"icon icon-open\"><svg width=\"1792\" height=\"1792\" viewBox=\"0 0 1792 1792\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M1408 960v-128q0-26-19-45t-45-19h-320v-320q0-26-19-45t-45-19h-128q-26 0-45 19t-19 45v320h-320q-26 0-45 19t-19 45v128q0 26 19 45t45 19h320v320q0 26 19 45t45 19h128q26 0 45-19t19-45v-320h320q26 0 45-19t19-45zm256-544v960q0 119-84.5 203.5t-203.5 84.5h-960q-119 0-203.5-84.5t-84.5-203.5v-960q0-119 84.5-203.5t203.5-84.5h960q119 0 203.5 84.5t84.5 203.5z\"/></svg>\n</span>\n    \n    \n                                    \n        <span class=\"block trace-file-path\">\n            in\n            <a href=\"http://www.handsometravel.dev/app_dev.php/_profiler/open?file=vendor/doctrine/common/lib/Doctrine/Common/Persistence/Mapping/MappingException.php&amp;line=96#line96\">vendor/doctrine/common/lib/Doctrine/Common/Persistence/Mapping/<strong>MappingException.php</strong></a>\n            (line 96)\n        </span>\n    </div>\n    <div id=\"trace-html-1-0\" class=\"trace-code sf-toggle-content\">\n        <ol start=\"91\"><li><a class=\"anchor\" name=\"line91\"></a><code><span style=\"color: #969896\">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;*</span></span></code></li>\n<li><a class=\"anchor\" name=\"line92\"></a><code><span style=\"color: #969896\">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;*&nbsp;@return&nbsp;self</span></span></code></li>\n<li><a class=\"anchor\" name=\"line93\"></a><code><span style=\"color: #969896\">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;*/</span></span></code></li>\n<li><a class=\"anchor\" name=\"line94\"></a><code><span style=\"color: #969896\">&nbsp;&nbsp;&nbsp;&nbsp;</span><span style=\"color: #a71d5d\">public&nbsp;static&nbsp;function&nbsp;</span><span style=\"color: #222222\">nonExistingClass</span><span style=\"color: #a71d5d\">(</span><span style=\"color: #222222\">$className</span><span style=\"color: #a71d5d\">)</span></span></code></li>\n<li><a class=\"anchor\" name=\"line95\"></a><code><span style=\"color: #a71d5d\">&nbsp;&nbsp;&nbsp;&nbsp;{</span></span></code></li>\n<li class=\"selected\"><a class=\"anchor\" name=\"line96\"></a><code><span style=\"color: #a71d5d\">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;return&nbsp;new&nbsp;</span><span style=\"color: #222222\">self</span><span style=\"color: #a71d5d\">(</span><span style=\"color: #183691\">\"Class&nbsp;'</span><span style=\"color: #222222\">$className</span><span style=\"color: #183691\">'&nbsp;does&nbsp;not&nbsp;exist\"</span><span style=\"color: #a71d5d\">);</span></span></code></li>\n<li><a class=\"anchor\" name=\"line97\"></a><code><span style=\"color: #a71d5d\">&nbsp;&nbsp;&nbsp;&nbsp;}</span></span></code></li>\n<li><a class=\"anchor\" name=\"line98\"></a><code><span style=\"color: #a71d5d\">}</span></span></code></li>\n<li><a class=\"anchor\" name=\"line99\"></a><code><span style=\"color: #a71d5d\"></span>\n</span></code></li></ol>\n    </div>\n\n            </div>\n                                            <div class=\"trace-line\">\n                <div class=\"trace-line-header break-long-words sf-toggle\" data-toggle-selector=\"#trace-html-1-1\" data-toggle-initial=\"\">\n            <span class=\"icon icon-close\"><svg width=\"1792\" height=\"1792\" viewBox=\"0 0 1792 1792\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M1408 960V832q0-26-19-45t-45-19H448q-26 0-45 19t-19 45v128q0 26 19 45t45 19h896q26 0 45-19t19-45zm256-544v960q0 119-84.5 203.5T1376 1664H416q-119 0-203.5-84.5T128 1376V416q0-119 84.5-203.5T416 128h960q119 0 203.5 84.5T1664 416z\"/></svg>\n</span>\n        <span class=\"icon icon-open\"><svg width=\"1792\" height=\"1792\" viewBox=\"0 0 1792 1792\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M1408 960v-128q0-26-19-45t-45-19h-320v-320q0-26-19-45t-45-19h-128q-26 0-45 19t-19 45v320h-320q-26 0-45 19t-19 45v128q0 26 19 45t45 19h320v320q0 26 19 45t45 19h128q26 0 45-19t19-45v-320h320q26 0 45-19t19-45zm256-544v960q0 119-84.5 203.5t-203.5 84.5h-960q-119 0-203.5-84.5t-84.5-203.5v-960q0-119 84.5-203.5t203.5-84.5h960q119 0 203.5 84.5t84.5 203.5z\"/></svg>\n</span>\n    \n            <span class=\"trace-class\"><abbr title=\"Doctrine\\Common\\Persistence\\Mapping\\MappingException\">MappingException</abbr></span><span class=\"trace-type\">::</span><span class=\"trace-method\">nonExistingClass</span><span class=\"trace-arguments\">('Bck\\\\AdminBundle\\\\Entity\\\\User')</span>\n    \n                                    \n        <span class=\"block trace-file-path\">\n            in\n            <a href=\"http://www.handsometravel.dev/app_dev.php/_profiler/open?file=vendor/doctrine/common/lib/Doctrine/Common/Persistence/Mapping/RuntimeReflectionService.php&amp;line=41#line41\">vendor/doctrine/common/lib/Doctrine/Common/Persistence/Mapping/<strong>RuntimeReflectionService.php</strong></a>\n            (line 41)\n        </span>\n    </div>\n    <div id=\"trace-html-1-1\" class=\"trace-code sf-toggle-content\">\n        <ol start=\"36\"><li><a class=\"anchor\" name=\"line36\"></a><code><span style=\"color: #969896\">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;*&nbsp;{@inheritDoc}</span></span></code></li>\n<li><a class=\"anchor\" name=\"line37\"></a><code><span style=\"color: #969896\">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;*/</span></span></code></li>\n<li><a class=\"anchor\" name=\"line38\"></a><code><span style=\"color: #969896\">&nbsp;&nbsp;&nbsp;&nbsp;</span><span style=\"color: #a71d5d\">public&nbsp;function&nbsp;</span><span style=\"color: #222222\">getParentClasses</span><span style=\"color: #a71d5d\">(</span><span style=\"color: #222222\">$class</span><span style=\"color: #a71d5d\">)</span></span></code></li>\n<li><a class=\"anchor\" name=\"line39\"></a><code><span style=\"color: #a71d5d\">&nbsp;&nbsp;&nbsp;&nbsp;{</span></span></code></li>\n<li><a class=\"anchor\" name=\"line40\"></a><code><span style=\"color: #a71d5d\">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;if&nbsp;(&nbsp;!&nbsp;</span><span style=\"color: #222222\">class_exists</span><span style=\"color: #a71d5d\">(</span><span style=\"color: #222222\">$class</span><span style=\"color: #a71d5d\">))&nbsp;{</span></span></code></li>\n<li class=\"selected\"><a class=\"anchor\" name=\"line41\"></a><code><span style=\"color: #a71d5d\">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;throw&nbsp;</span><span style=\"color: #222222\">MappingException</span><span style=\"color: #a71d5d\">::</span><span style=\"color: #222222\">nonExistingClass</span><span style=\"color: #a71d5d\">(</span><span style=\"color: #222222\">$class</span><span style=\"color: #a71d5d\">);</span></span></code></li>\n<li><a class=\"anchor\" name=\"line42\"></a><code><span style=\"color: #a71d5d\">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;}</span></span></code></li>\n<li><a class=\"anchor\" name=\"line43\"></a><code><span style=\"color: #a71d5d\"></span></span></code></li>\n<li><a class=\"anchor\" name=\"line44\"></a><code><span style=\"color: #a71d5d\">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;return&nbsp;</span><span style=\"color: #222222\">class_parents</span><span style=\"color: #a71d5d\">(</span><span style=\"color: #222222\">$class</span><span style=\"color: #a71d5d\">);</span></span></code></li>\n<li><a class=\"anchor\" name=\"line45\"></a><code><span style=\"color: #a71d5d\">&nbsp;&nbsp;&nbsp;&nbsp;}</span></span></code></li>\n<li><a class=\"anchor\" name=\"line46\"></a><code><span style=\"color: #a71d5d\"></span></span></code></li></ol>\n    </div>\n\n            </div>\n                                            <div class=\"trace-line\">\n                <div class=\"trace-line-header break-long-words sf-toggle\" data-toggle-selector=\"#trace-html-1-2\" data-toggle-initial=\"\">\n            <span class=\"icon icon-close\"><svg width=\"1792\" height=\"1792\" viewBox=\"0 0 1792 1792\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M1408 960V832q0-26-19-45t-45-19H448q-26 0-45 19t-19 45v128q0 26 19 45t45 19h896q26 0 45-19t19-45zm256-544v960q0 119-84.5 203.5T1376 1664H416q-119 0-203.5-84.5T128 1376V416q0-119 84.5-203.5T416 128h960q119 0 203.5 84.5T1664 416z\"/></svg>\n</span>\n        <span class=\"icon icon-open\"><svg width=\"1792\" height=\"1792\" viewBox=\"0 0 1792 1792\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M1408 960v-128q0-26-19-45t-45-19h-320v-320q0-26-19-45t-45-19h-128q-26 0-45 19t-19 45v320h-320q-26 0-45 19t-19 45v128q0 26 19 45t45 19h320v320q0 26 19 45t45 19h128q26 0 45-19t19-45v-320h320q26 0 45-19t19-45zm256-544v960q0 119-84.5 203.5t-203.5 84.5h-960q-119 0-203.5-84.5t-84.5-203.5v-960q0-119 84.5-203.5t203.5-84.5h960q119 0 203.5 84.5t84.5 203.5z\"/></svg>\n</span>\n    \n            <span class=\"trace-class\"><abbr title=\"Doctrine\\Common\\Persistence\\Mapping\\RuntimeReflectionService\">RuntimeReflectionService</abbr></span><span class=\"trace-type\">-&gt;</span><span class=\"trace-method\">getParentClasses</span><span class=\"trace-arguments\">('Bck\\\\AdminBundle\\\\Entity\\\\User')</span>\n    \n                                    \n        <span class=\"block trace-file-path\">\n            in\n            <a href=\"http://www.handsometravel.dev/app_dev.php/_profiler/open?file=vendor/doctrine/common/lib/Doctrine/Common/Persistence/Mapping/AbstractClassMetadataFactory.php&amp;line=281#line281\">vendor/doctrine/common/lib/Doctrine/Common/Persistence/Mapping/<strong>AbstractClassMetadataFactory.php</strong></a>\n            (line 281)\n        </span>\n    </div>\n    <div id=\"trace-html-1-2\" class=\"trace-code sf-toggle-content\">\n        <ol start=\"276\"><li><a class=\"anchor\" name=\"line276\"></a><code><span style=\"color: #969896\">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;*/</span></span></code></li>\n<li><a class=\"anchor\" name=\"line277\"></a><code><span style=\"color: #969896\">&nbsp;&nbsp;&nbsp;&nbsp;</span><span style=\"color: #a71d5d\">protected&nbsp;function&nbsp;</span><span style=\"color: #222222\">getParentClasses</span><span style=\"color: #a71d5d\">(</span><span style=\"color: #222222\">$name</span><span style=\"color: #a71d5d\">)</span></span></code></li>\n<li><a class=\"anchor\" name=\"line278\"></a><code><span style=\"color: #a71d5d\">&nbsp;&nbsp;&nbsp;&nbsp;{</span></span></code></li>\n<li><a class=\"anchor\" name=\"line279\"></a><code><span style=\"color: #a71d5d\">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span><span style=\"color: #969896\">//&nbsp;Collect&nbsp;parent&nbsp;classes,&nbsp;ignoring&nbsp;transient&nbsp;(not-mapped)&nbsp;classes.</span></span></code></li>\n<li><a class=\"anchor\" name=\"line280\"></a><code><span style=\"color: #969896\">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span><span style=\"color: #222222\">$parentClasses&nbsp;</span><span style=\"color: #a71d5d\">=&nbsp;[];</span></span></code></li>\n<li class=\"selected\"><a class=\"anchor\" name=\"line281\"></a><code><span style=\"color: #a71d5d\">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;foreach&nbsp;(</span><span style=\"color: #222222\">array_reverse</span><span style=\"color: #a71d5d\">(</span><span style=\"color: #222222\">$this</span><span style=\"color: #a71d5d\">-&gt;</span><span style=\"color: #222222\">getReflectionService</span><span style=\"color: #a71d5d\">()-&gt;</span><span style=\"color: #222222\">getParentClasses</span><span style=\"color: #a71d5d\">(</span><span style=\"color: #222222\">$name</span><span style=\"color: #a71d5d\">))&nbsp;as&nbsp;</span><span style=\"color: #222222\">$parentClass</span><span style=\"color: #a71d5d\">)&nbsp;{</span></span></code></li>\n<li><a class=\"anchor\" name=\"line282\"></a><code><span style=\"color: #a71d5d\">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;if&nbsp;(&nbsp;!&nbsp;</span><span style=\"color: #222222\">$this</span><span style=\"color: #a71d5d\">-&gt;</span><span style=\"color: #222222\">getDriver</span><span style=\"color: #a71d5d\">()-&gt;</span><span style=\"color: #222222\">isTransient</span><span style=\"color: #a71d5d\">(</span><span style=\"color: #222222\">$parentClass</span><span style=\"color: #a71d5d\">))&nbsp;{</span></span></code></li>\n<li><a class=\"anchor\" name=\"line283\"></a><code><span style=\"color: #a71d5d\">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span><span style=\"color: #222222\">$parentClasses</span><span style=\"color: #a71d5d\">[]&nbsp;=&nbsp;</span><span style=\"color: #222222\">$parentClass</span><span style=\"color: #a71d5d\">;</span></span></code></li>\n<li><a class=\"anchor\" name=\"line284\"></a><code><span style=\"color: #a71d5d\">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;}</span></span></code></li>\n<li><a class=\"anchor\" name=\"line285\"></a><code><span style=\"color: #a71d5d\">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;}</span></span></code></li>\n<li><a class=\"anchor\" name=\"line286\"></a><code><span style=\"color: #a71d5d\">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;return&nbsp;</span><span style=\"color: #222222\">$parentClasses</span><span style=\"color: #a71d5d\">;</span></span></code></li></ol>\n    </div>\n\n            </div>\n                                            <div class=\"trace-line\">\n                <div class=\"trace-line-header break-long-words sf-toggle\" data-toggle-selector=\"#trace-html-1-3\" data-toggle-initial=\"\">\n            <span class=\"icon icon-close\"><svg width=\"1792\" height=\"1792\" viewBox=\"0 0 1792 1792\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M1408 960V832q0-26-19-45t-45-19H448q-26 0-45 19t-19 45v128q0 26 19 45t45 19h896q26 0 45-19t19-45zm256-544v960q0 119-84.5 203.5T1376 1664H416q-119 0-203.5-84.5T128 1376V416q0-119 84.5-203.5T416 128h960q119 0 203.5 84.5T1664 416z\"/></svg>\n</span>\n        <span class=\"icon icon-open\"><svg width=\"1792\" height=\"1792\" viewBox=\"0 0 1792 1792\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M1408 960v-128q0-26-19-45t-45-19h-320v-320q0-26-19-45t-45-19h-128q-26 0-45 19t-19 45v320h-320q-26 0-45 19t-19 45v128q0 26 19 45t45 19h320v320q0 26 19 45t45 19h128q26 0 45-19t19-45v-320h320q26 0 45-19t19-45zm256-544v960q0 119-84.5 203.5t-203.5 84.5h-960q-119 0-203.5-84.5t-84.5-203.5v-960q0-119 84.5-203.5t203.5-84.5h960q119 0 203.5 84.5t84.5 203.5z\"/></svg>\n</span>\n    \n            <span class=\"trace-class\"><abbr title=\"Doctrine\\Common\\Persistence\\Mapping\\AbstractClassMetadataFactory\">AbstractClassMetadataFactory</abbr></span><span class=\"trace-type\">-&gt;</span><span class=\"trace-method\">getParentClasses</span><span class=\"trace-arguments\">('Bck\\\\AdminBundle\\\\Entity\\\\User')</span>\n    \n                                    \n        <span class=\"block trace-file-path\">\n            in\n            <a href=\"http://www.handsometravel.dev/app_dev.php/_profiler/open?file=vendor/doctrine/common/lib/Doctrine/Common/Persistence/Mapping/AbstractClassMetadataFactory.php&amp;line=311#line311\">vendor/doctrine/common/lib/Doctrine/Common/Persistence/Mapping/<strong>AbstractClassMetadataFactory.php</strong></a>\n            (line 311)\n        </span>\n    </div>\n    <div id=\"trace-html-1-3\" class=\"trace-code sf-toggle-content\">\n        <ol start=\"306\"><li><a class=\"anchor\" name=\"line306\"></a><code><span style=\"color: #a71d5d\">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span><span style=\"color: #222222\">$this</span><span style=\"color: #a71d5d\">-&gt;</span><span style=\"color: #222222\">initialize</span><span style=\"color: #a71d5d\">();</span></span></code></li>\n<li><a class=\"anchor\" name=\"line307\"></a><code><span style=\"color: #a71d5d\">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;}</span></span></code></li>\n<li><a class=\"anchor\" name=\"line308\"></a><code><span style=\"color: #a71d5d\"></span></span></code></li>\n<li><a class=\"anchor\" name=\"line309\"></a><code><span style=\"color: #a71d5d\">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span><span style=\"color: #222222\">$loaded&nbsp;</span><span style=\"color: #a71d5d\">=&nbsp;[];</span></span></code></li>\n<li><a class=\"anchor\" name=\"line310\"></a><code><span style=\"color: #a71d5d\"></span></span></code></li>\n<li class=\"selected\"><a class=\"anchor\" name=\"line311\"></a><code><span style=\"color: #a71d5d\">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span><span style=\"color: #222222\">$parentClasses&nbsp;</span><span style=\"color: #a71d5d\">=&nbsp;</span><span style=\"color: #222222\">$this</span><span style=\"color: #a71d5d\">-&gt;</span><span style=\"color: #222222\">getParentClasses</span><span style=\"color: #a71d5d\">(</span><span style=\"color: #222222\">$name</span><span style=\"color: #a71d5d\">);</span></span></code></li>\n<li><a class=\"anchor\" name=\"line312\"></a><code><span style=\"color: #a71d5d\">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span><span style=\"color: #222222\">$parentClasses</span><span style=\"color: #a71d5d\">[]&nbsp;=&nbsp;</span><span style=\"color: #222222\">$name</span><span style=\"color: #a71d5d\">;</span></span></code></li>\n<li><a class=\"anchor\" name=\"line313\"></a><code><span style=\"color: #a71d5d\"></span></span></code></li>\n<li><a class=\"anchor\" name=\"line314\"></a><code><span style=\"color: #a71d5d\">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span><span style=\"color: #969896\">//&nbsp;Move&nbsp;down&nbsp;the&nbsp;hierarchy&nbsp;of&nbsp;parent&nbsp;classes,&nbsp;starting&nbsp;from&nbsp;the&nbsp;topmost&nbsp;class</span></span></code></li>\n<li><a class=\"anchor\" name=\"line315\"></a><code><span style=\"color: #969896\">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span><span style=\"color: #222222\">$parent&nbsp;</span><span style=\"color: #a71d5d\">=&nbsp;</span><span style=\"color: #222222\">null</span><span style=\"color: #a71d5d\">;</span></span></code></li>\n<li><a class=\"anchor\" name=\"line316\"></a><code><span style=\"color: #a71d5d\">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span><span style=\"color: #222222\">$rootEntityFound&nbsp;</span><span style=\"color: #a71d5d\">=&nbsp;</span><span style=\"color: #222222\">false</span><span style=\"color: #a71d5d\">;</span></span></code></li></ol>\n    </div>\n\n            </div>\n                                            <div class=\"trace-line\">\n                <div class=\"trace-line-header break-long-words sf-toggle\" data-toggle-selector=\"#trace-html-1-4\" data-toggle-initial=\"\">\n            <span class=\"icon icon-close\"><svg width=\"1792\" height=\"1792\" viewBox=\"0 0 1792 1792\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M1408 960V832q0-26-19-45t-45-19H448q-26 0-45 19t-19 45v128q0 26 19 45t45 19h896q26 0 45-19t19-45zm256-544v960q0 119-84.5 203.5T1376 1664H416q-119 0-203.5-84.5T128 1376V416q0-119 84.5-203.5T416 128h960q119 0 203.5 84.5T1664 416z\"/></svg>\n</span>\n        <span class=\"icon icon-open\"><svg width=\"1792\" height=\"1792\" viewBox=\"0 0 1792 1792\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M1408 960v-128q0-26-19-45t-45-19h-320v-320q0-26-19-45t-45-19h-128q-26 0-45 19t-19 45v320h-320q-26 0-45 19t-19 45v128q0 26 19 45t45 19h320v320q0 26 19 45t45 19h128q26 0 45-19t19-45v-320h320q26 0 45-19t19-45zm256-544v960q0 119-84.5 203.5t-203.5 84.5h-960q-119 0-203.5-84.5t-84.5-203.5v-960q0-119 84.5-203.5t203.5-84.5h960q119 0 203.5 84.5t84.5 203.5z\"/></svg>\n</span>\n    \n            <span class=\"trace-class\"><abbr title=\"Doctrine\\Common\\Persistence\\Mapping\\AbstractClassMetadataFactory\">AbstractClassMetadataFactory</abbr></span><span class=\"trace-type\">-&gt;</span><span class=\"trace-method\">loadMetadata</span><span class=\"trace-arguments\">('Bck\\\\AdminBundle\\\\Entity\\\\User')</span>\n    \n                                    \n        <span class=\"block trace-file-path\">\n            in\n            <a href=\"http://www.handsometravel.dev/app_dev.php/_profiler/open?file=vendor/doctrine/orm/lib/Doctrine/ORM/Mapping/ClassMetadataFactory.php&amp;line=78#line78\">vendor/doctrine/orm/lib/Doctrine/ORM/Mapping/<strong>ClassMetadataFactory.php</strong></a>\n            (line 78)\n        </span>\n    </div>\n    <div id=\"trace-html-1-4\" class=\"trace-code sf-toggle-content\">\n        <ol start=\"73\"><li><a class=\"anchor\" name=\"line73\"></a><code><span style=\"color: #a71d5d\">&nbsp;&nbsp;&nbsp;&nbsp;</span><span style=\"color: #969896\">/**</span></span></code></li>\n<li><a class=\"anchor\" name=\"line74\"></a><code><span style=\"color: #969896\">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;*&nbsp;{@inheritDoc}</span></span></code></li>\n<li><a class=\"anchor\" name=\"line75\"></a><code><span style=\"color: #969896\">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;*/</span></span></code></li>\n<li><a class=\"anchor\" name=\"line76\"></a><code><span style=\"color: #969896\">&nbsp;&nbsp;&nbsp;&nbsp;</span><span style=\"color: #a71d5d\">protected&nbsp;function&nbsp;</span><span style=\"color: #222222\">loadMetadata</span><span style=\"color: #a71d5d\">(</span><span style=\"color: #222222\">$name</span><span style=\"color: #a71d5d\">)</span></span></code></li>\n<li><a class=\"anchor\" name=\"line77\"></a><code><span style=\"color: #a71d5d\">&nbsp;&nbsp;&nbsp;&nbsp;{</span></span></code></li>\n<li class=\"selected\"><a class=\"anchor\" name=\"line78\"></a><code><span style=\"color: #a71d5d\">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span><span style=\"color: #222222\">$loaded&nbsp;</span><span style=\"color: #a71d5d\">=&nbsp;</span><span style=\"color: #222222\">parent</span><span style=\"color: #a71d5d\">::</span><span style=\"color: #222222\">loadMetadata</span><span style=\"color: #a71d5d\">(</span><span style=\"color: #222222\">$name</span><span style=\"color: #a71d5d\">);</span></span></code></li>\n<li><a class=\"anchor\" name=\"line79\"></a><code><span style=\"color: #a71d5d\"></span></span></code></li>\n<li><a class=\"anchor\" name=\"line80\"></a><code><span style=\"color: #a71d5d\">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span><span style=\"color: #222222\">array_map</span><span style=\"color: #a71d5d\">([</span><span style=\"color: #222222\">$this</span><span style=\"color: #a71d5d\">,&nbsp;</span><span style=\"color: #183691\">'resolveDiscriminatorValue'</span><span style=\"color: #a71d5d\">],&nbsp;</span><span style=\"color: #222222\">array_map</span><span style=\"color: #a71d5d\">([</span><span style=\"color: #222222\">$this</span><span style=\"color: #a71d5d\">,&nbsp;</span><span style=\"color: #183691\">'getMetadataFor'</span><span style=\"color: #a71d5d\">],&nbsp;</span><span style=\"color: #222222\">$loaded</span><span style=\"color: #a71d5d\">));</span></span></code></li>\n<li><a class=\"anchor\" name=\"line81\"></a><code><span style=\"color: #a71d5d\"></span></span></code></li>\n<li><a class=\"anchor\" name=\"line82\"></a><code><span style=\"color: #a71d5d\">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;return&nbsp;</span><span style=\"color: #222222\">$loaded</span><span style=\"color: #a71d5d\">;</span></span></code></li>\n<li><a class=\"anchor\" name=\"line83\"></a><code><span style=\"color: #a71d5d\">&nbsp;&nbsp;&nbsp;&nbsp;}</span></span></code></li></ol>\n    </div>\n\n            </div>\n                                            <div class=\"trace-line\">\n                <div class=\"trace-line-header break-long-words sf-toggle\" data-toggle-selector=\"#trace-html-1-5\" data-toggle-initial=\"\">\n            <span class=\"icon icon-close\"><svg width=\"1792\" height=\"1792\" viewBox=\"0 0 1792 1792\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M1408 960V832q0-26-19-45t-45-19H448q-26 0-45 19t-19 45v128q0 26 19 45t45 19h896q26 0 45-19t19-45zm256-544v960q0 119-84.5 203.5T1376 1664H416q-119 0-203.5-84.5T128 1376V416q0-119 84.5-203.5T416 128h960q119 0 203.5 84.5T1664 416z\"/></svg>\n</span>\n        <span class=\"icon icon-open\"><svg width=\"1792\" height=\"1792\" viewBox=\"0 0 1792 1792\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M1408 960v-128q0-26-19-45t-45-19h-320v-320q0-26-19-45t-45-19h-128q-26 0-45 19t-19 45v320h-320q-26 0-45 19t-19 45v128q0 26 19 45t45 19h320v320q0 26 19 45t45 19h128q26 0 45-19t19-45v-320h320q26 0 45-19t19-45zm256-544v960q0 119-84.5 203.5t-203.5 84.5h-960q-119 0-203.5-84.5t-84.5-203.5v-960q0-119 84.5-203.5t203.5-84.5h960q119 0 203.5 84.5t84.5 203.5z\"/></svg>\n</span>\n    \n            <span class=\"trace-class\"><abbr title=\"Doctrine\\ORM\\Mapping\\ClassMetadataFactory\">ClassMetadataFactory</abbr></span><span class=\"trace-type\">-&gt;</span><span class=\"trace-method\">loadMetadata</span><span class=\"trace-arguments\">('Bck\\\\AdminBundle\\\\Entity\\\\User')</span>\n    \n                                    \n        <span class=\"block trace-file-path\">\n            in\n            <a href=\"http://www.handsometravel.dev/app_dev.php/_profiler/open?file=vendor/doctrine/common/lib/Doctrine/Common/Persistence/Mapping/AbstractClassMetadataFactory.php&amp;line=216#line216\">vendor/doctrine/common/lib/Doctrine/Common/Persistence/Mapping/<strong>AbstractClassMetadataFactory.php</strong></a>\n            (line 216)\n        </span>\n    </div>\n    <div id=\"trace-html-1-5\" class=\"trace-code sf-toggle-content\">\n        <ol start=\"211\"><li><a class=\"anchor\" name=\"line211\"></a><code><span style=\"color: #a71d5d\">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;if&nbsp;((</span><span style=\"color: #222222\">$cached&nbsp;</span><span style=\"color: #a71d5d\">=&nbsp;</span><span style=\"color: #222222\">$this</span><span style=\"color: #a71d5d\">-&gt;</span><span style=\"color: #222222\">cacheDriver</span><span style=\"color: #a71d5d\">-&gt;</span><span style=\"color: #222222\">fetch</span><span style=\"color: #a71d5d\">(</span><span style=\"color: #222222\">$realClassName&nbsp;</span><span style=\"color: #a71d5d\">.&nbsp;</span><span style=\"color: #222222\">$this</span><span style=\"color: #a71d5d\">-&gt;</span><span style=\"color: #222222\">cacheSalt</span><span style=\"color: #a71d5d\">))&nbsp;instanceof&nbsp;</span><span style=\"color: #222222\">ClassMetadata</span><span style=\"color: #a71d5d\">)&nbsp;{</span></span></code></li>\n<li><a class=\"anchor\" name=\"line212\"></a><code><span style=\"color: #a71d5d\">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span><span style=\"color: #222222\">$this</span><span style=\"color: #a71d5d\">-&gt;</span><span style=\"color: #222222\">loadedMetadata</span><span style=\"color: #a71d5d\">[</span><span style=\"color: #222222\">$realClassName</span><span style=\"color: #a71d5d\">]&nbsp;=&nbsp;</span><span style=\"color: #222222\">$cached</span><span style=\"color: #a71d5d\">;</span></span></code></li>\n<li><a class=\"anchor\" name=\"line213\"></a><code><span style=\"color: #a71d5d\"></span></span></code></li>\n<li><a class=\"anchor\" name=\"line214\"></a><code><span style=\"color: #a71d5d\">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span><span style=\"color: #222222\">$this</span><span style=\"color: #a71d5d\">-&gt;</span><span style=\"color: #222222\">wakeupReflection</span><span style=\"color: #a71d5d\">(</span><span style=\"color: #222222\">$cached</span><span style=\"color: #a71d5d\">,&nbsp;</span><span style=\"color: #222222\">$this</span><span style=\"color: #a71d5d\">-&gt;</span><span style=\"color: #222222\">getReflectionService</span><span style=\"color: #a71d5d\">());</span></span></code></li>\n<li><a class=\"anchor\" name=\"line215\"></a><code><span style=\"color: #a71d5d\">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;}&nbsp;else&nbsp;{</span></span></code></li>\n<li class=\"selected\"><a class=\"anchor\" name=\"line216\"></a><code><span style=\"color: #a71d5d\">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;foreach&nbsp;(</span><span style=\"color: #222222\">$this</span><span style=\"color: #a71d5d\">-&gt;</span><span style=\"color: #222222\">loadMetadata</span><span style=\"color: #a71d5d\">(</span><span style=\"color: #222222\">$realClassName</span><span style=\"color: #a71d5d\">)&nbsp;as&nbsp;</span><span style=\"color: #222222\">$loadedClassName</span><span style=\"color: #a71d5d\">)&nbsp;{</span></span></code></li>\n<li><a class=\"anchor\" name=\"line217\"></a><code><span style=\"color: #a71d5d\">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span><span style=\"color: #222222\">$this</span><span style=\"color: #a71d5d\">-&gt;</span><span style=\"color: #222222\">cacheDriver</span><span style=\"color: #a71d5d\">-&gt;</span><span style=\"color: #222222\">save</span><span style=\"color: #a71d5d\">(</span></span></code></li>\n<li><a class=\"anchor\" name=\"line218\"></a><code><span style=\"color: #a71d5d\">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span><span style=\"color: #222222\">$loadedClassName&nbsp;</span><span style=\"color: #a71d5d\">.&nbsp;</span><span style=\"color: #222222\">$this</span><span style=\"color: #a71d5d\">-&gt;</span><span style=\"color: #222222\">cacheSalt</span><span style=\"color: #a71d5d\">,</span></span></code></li>\n<li><a class=\"anchor\" name=\"line219\"></a><code><span style=\"color: #a71d5d\">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span><span style=\"color: #222222\">$this</span><span style=\"color: #a71d5d\">-&gt;</span><span style=\"color: #222222\">loadedMetadata</span><span style=\"color: #a71d5d\">[</span><span style=\"color: #222222\">$loadedClassName</span><span style=\"color: #a71d5d\">],</span></span></code></li>\n<li><a class=\"anchor\" name=\"line220\"></a><code><span style=\"color: #a71d5d\">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span><span style=\"color: #222222\">null</span></span></code></li>\n<li><a class=\"anchor\" name=\"line221\"></a><code><span style=\"color: #222222\">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span><span style=\"color: #a71d5d\">);</span></span></code></li></ol>\n    </div>\n\n            </div>\n                                            <div class=\"trace-line\">\n                <div class=\"trace-line-header break-long-words sf-toggle\" data-toggle-selector=\"#trace-html-1-6\" data-toggle-initial=\"\">\n            <span class=\"icon icon-close\"><svg width=\"1792\" height=\"1792\" viewBox=\"0 0 1792 1792\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M1408 960V832q0-26-19-45t-45-19H448q-26 0-45 19t-19 45v128q0 26 19 45t45 19h896q26 0 45-19t19-45zm256-544v960q0 119-84.5 203.5T1376 1664H416q-119 0-203.5-84.5T128 1376V416q0-119 84.5-203.5T416 128h960q119 0 203.5 84.5T1664 416z\"/></svg>\n</span>\n        <span class=\"icon icon-open\"><svg width=\"1792\" height=\"1792\" viewBox=\"0 0 1792 1792\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M1408 960v-128q0-26-19-45t-45-19h-320v-320q0-26-19-45t-45-19h-128q-26 0-45 19t-19 45v320h-320q-26 0-45 19t-19 45v128q0 26 19 45t45 19h320v320q0 26 19 45t45 19h128q26 0 45-19t19-45v-320h320q26 0 45-19t19-45zm256-544v960q0 119-84.5 203.5t-203.5 84.5h-960q-119 0-203.5-84.5t-84.5-203.5v-960q0-119 84.5-203.5t203.5-84.5h960q119 0 203.5 84.5t84.5 203.5z\"/></svg>\n</span>\n    \n            <span class=\"trace-class\"><abbr title=\"Doctrine\\Common\\Persistence\\Mapping\\AbstractClassMetadataFactory\">AbstractClassMetadataFactory</abbr></span><span class=\"trace-type\">-&gt;</span><span class=\"trace-method\">getMetadataFor</span><span class=\"trace-arguments\">('BckAdminBundle:User')</span>\n    \n                                    \n        <span class=\"block trace-file-path\">\n            in\n            <a href=\"http://www.handsometravel.dev/app_dev.php/_profiler/open?file=vendor/doctrine/orm/lib/Doctrine/ORM/EntityManager.php&amp;line=281#line281\">vendor/doctrine/orm/lib/Doctrine/ORM/<strong>EntityManager.php</strong></a>\n            (line 281)\n        </span>\n    </div>\n    <div id=\"trace-html-1-6\" class=\"trace-code sf-toggle-content\">\n        <ol start=\"276\"><li><a class=\"anchor\" name=\"line276\"></a><code><span style=\"color: #969896\">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;*</span></span></code></li>\n<li><a class=\"anchor\" name=\"line277\"></a><code><span style=\"color: #969896\">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;*&nbsp;@return&nbsp;\\Doctrine\\ORM\\Mapping\\ClassMetadata</span></span></code></li>\n<li><a class=\"anchor\" name=\"line278\"></a><code><span style=\"color: #969896\">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;*/</span></span></code></li>\n<li><a class=\"anchor\" name=\"line279\"></a><code><span style=\"color: #969896\">&nbsp;&nbsp;&nbsp;&nbsp;</span><span style=\"color: #a71d5d\">public&nbsp;function&nbsp;</span><span style=\"color: #222222\">getClassMetadata</span><span style=\"color: #a71d5d\">(</span><span style=\"color: #222222\">$className</span><span style=\"color: #a71d5d\">)</span></span></code></li>\n<li><a class=\"anchor\" name=\"line280\"></a><code><span style=\"color: #a71d5d\">&nbsp;&nbsp;&nbsp;&nbsp;{</span></span></code></li>\n<li class=\"selected\"><a class=\"anchor\" name=\"line281\"></a><code><span style=\"color: #a71d5d\">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;return&nbsp;</span><span style=\"color: #222222\">$this</span><span style=\"color: #a71d5d\">-&gt;</span><span style=\"color: #222222\">metadataFactory</span><span style=\"color: #a71d5d\">-&gt;</span><span style=\"color: #222222\">getMetadataFor</span><span style=\"color: #a71d5d\">(</span><span style=\"color: #222222\">$className</span><span style=\"color: #a71d5d\">);</span></span></code></li>\n<li><a class=\"anchor\" name=\"line282\"></a><code><span style=\"color: #a71d5d\">&nbsp;&nbsp;&nbsp;&nbsp;}</span></span></code></li>\n<li><a class=\"anchor\" name=\"line283\"></a><code><span style=\"color: #a71d5d\"></span></span></code></li>\n<li><a class=\"anchor\" name=\"line284\"></a><code><span style=\"color: #a71d5d\">&nbsp;&nbsp;&nbsp;&nbsp;</span><span style=\"color: #969896\">/**</span></span></code></li>\n<li><a class=\"anchor\" name=\"line285\"></a><code><span style=\"color: #969896\">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;*&nbsp;{@inheritDoc}</span></span></code></li>\n<li><a class=\"anchor\" name=\"line286\"></a><code><span style=\"color: #969896\">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;*/</span></span></code></li></ol>\n    </div>\n\n            </div>\n                                            <div class=\"trace-line\">\n                <div class=\"trace-line-header break-long-words sf-toggle\" data-toggle-selector=\"#trace-html-1-7\" data-toggle-initial=\"\">\n            <span class=\"icon icon-close\"><svg width=\"1792\" height=\"1792\" viewBox=\"0 0 1792 1792\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M1408 960V832q0-26-19-45t-45-19H448q-26 0-45 19t-19 45v128q0 26 19 45t45 19h896q26 0 45-19t19-45zm256-544v960q0 119-84.5 203.5T1376 1664H416q-119 0-203.5-84.5T128 1376V416q0-119 84.5-203.5T416 128h960q119 0 203.5 84.5T1664 416z\"/></svg>\n</span>\n        <span class=\"icon icon-open\"><svg width=\"1792\" height=\"1792\" viewBox=\"0 0 1792 1792\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M1408 960v-128q0-26-19-45t-45-19h-320v-320q0-26-19-45t-45-19h-128q-26 0-45 19t-19 45v320h-320q-26 0-45 19t-19 45v128q0 26 19 45t45 19h320v320q0 26 19 45t45 19h128q26 0 45-19t19-45v-320h320q26 0 45-19t19-45zm256-544v960q0 119-84.5 203.5t-203.5 84.5h-960q-119 0-203.5-84.5t-84.5-203.5v-960q0-119 84.5-203.5t203.5-84.5h960q119 0 203.5 84.5t84.5 203.5z\"/></svg>\n</span>\n    \n            <span class=\"trace-class\"><abbr title=\"Doctrine\\ORM\\EntityManager\">EntityManager</abbr></span><span class=\"trace-type\">-&gt;</span><span class=\"trace-method\">getClassMetadata</span><span class=\"trace-arguments\">('BckAdminBundle:User')</span>\n    \n                                    \n        <span class=\"block trace-file-path\">\n            in\n            <a href=\"http://www.handsometravel.dev/app_dev.php/_profiler/open?file=vendor/doctrine/doctrine-bundle/Repository/ContainerRepositoryFactory.php&amp;line=55#line55\">vendor/doctrine/doctrine-bundle/Repository/<strong>ContainerRepositoryFactory.php</strong></a>\n            (line 55)\n        </span>\n    </div>\n    <div id=\"trace-html-1-7\" class=\"trace-code sf-toggle-content\">\n        <ol start=\"50\"><li><a class=\"anchor\" name=\"line50\"></a><code><span style=\"color: #a71d5d\">&nbsp;&nbsp;&nbsp;&nbsp;</span><span style=\"color: #969896\">/**</span></span></code></li>\n<li><a class=\"anchor\" name=\"line51\"></a><code><span style=\"color: #969896\">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;*&nbsp;{@inheritdoc}</span></span></code></li>\n<li><a class=\"anchor\" name=\"line52\"></a><code><span style=\"color: #969896\">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;*/</span></span></code></li>\n<li><a class=\"anchor\" name=\"line53\"></a><code><span style=\"color: #969896\">&nbsp;&nbsp;&nbsp;&nbsp;</span><span style=\"color: #a71d5d\">public&nbsp;function&nbsp;</span><span style=\"color: #222222\">getRepository</span><span style=\"color: #a71d5d\">(</span><span style=\"color: #222222\">EntityManagerInterface&nbsp;$entityManager</span><span style=\"color: #a71d5d\">,&nbsp;</span><span style=\"color: #222222\">$entityName</span><span style=\"color: #a71d5d\">)</span></span></code></li>\n<li><a class=\"anchor\" name=\"line54\"></a><code><span style=\"color: #a71d5d\">&nbsp;&nbsp;&nbsp;&nbsp;{</span></span></code></li>\n<li class=\"selected\"><a class=\"anchor\" name=\"line55\"></a><code><span style=\"color: #a71d5d\">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span><span style=\"color: #222222\">$metadata&nbsp;</span><span style=\"color: #a71d5d\">=&nbsp;</span><span style=\"color: #222222\">$entityManager</span><span style=\"color: #a71d5d\">-&gt;</span><span style=\"color: #222222\">getClassMetadata</span><span style=\"color: #a71d5d\">(</span><span style=\"color: #222222\">$entityName</span><span style=\"color: #a71d5d\">);</span></span></code></li>\n<li><a class=\"anchor\" name=\"line56\"></a><code><span style=\"color: #a71d5d\">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span><span style=\"color: #222222\">$repositoryServiceId&nbsp;</span><span style=\"color: #a71d5d\">=&nbsp;</span><span style=\"color: #222222\">$metadata</span><span style=\"color: #a71d5d\">-&gt;</span><span style=\"color: #222222\">customRepositoryClassName</span><span style=\"color: #a71d5d\">;</span></span></code></li>\n<li><a class=\"anchor\" name=\"line57\"></a><code><span style=\"color: #a71d5d\"></span></span></code></li>\n<li><a class=\"anchor\" name=\"line58\"></a><code><span style=\"color: #a71d5d\">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span><span style=\"color: #222222\">$customRepositoryName&nbsp;</span><span style=\"color: #a71d5d\">=&nbsp;</span><span style=\"color: #222222\">$metadata</span><span style=\"color: #a71d5d\">-&gt;</span><span style=\"color: #222222\">customRepositoryClassName</span><span style=\"color: #a71d5d\">;</span></span></code></li>\n<li><a class=\"anchor\" name=\"line59\"></a><code><span style=\"color: #a71d5d\">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;if&nbsp;(</span><span style=\"color: #222222\">null&nbsp;</span><span style=\"color: #a71d5d\">!==&nbsp;</span><span style=\"color: #222222\">$customRepositoryName</span><span style=\"color: #a71d5d\">)&nbsp;{</span></span></code></li>\n<li><a class=\"anchor\" name=\"line60\"></a><code><span style=\"color: #a71d5d\">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span><span style=\"color: #969896\">//&nbsp;fetch&nbsp;from&nbsp;the&nbsp;container</span></span></code></li></ol>\n    </div>\n\n            </div>\n                                            <div class=\"trace-line\">\n                <div class=\"trace-line-header break-long-words sf-toggle\" data-toggle-selector=\"#trace-html-1-8\" data-toggle-initial=\"\">\n            <span class=\"icon icon-close\"><svg width=\"1792\" height=\"1792\" viewBox=\"0 0 1792 1792\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M1408 960V832q0-26-19-45t-45-19H448q-26 0-45 19t-19 45v128q0 26 19 45t45 19h896q26 0 45-19t19-45zm256-544v960q0 119-84.5 203.5T1376 1664H416q-119 0-203.5-84.5T128 1376V416q0-119 84.5-203.5T416 128h960q119 0 203.5 84.5T1664 416z\"/></svg>\n</span>\n        <span class=\"icon icon-open\"><svg width=\"1792\" height=\"1792\" viewBox=\"0 0 1792 1792\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M1408 960v-128q0-26-19-45t-45-19h-320v-320q0-26-19-45t-45-19h-128q-26 0-45 19t-19 45v320h-320q-26 0-45 19t-19 45v128q0 26 19 45t45 19h320v320q0 26 19 45t45 19h128q26 0 45-19t19-45v-320h320q26 0 45-19t19-45zm256-544v960q0 119-84.5 203.5t-203.5 84.5h-960q-119 0-203.5-84.5t-84.5-203.5v-960q0-119 84.5-203.5t203.5-84.5h960q119 0 203.5 84.5t84.5 203.5z\"/></svg>\n</span>\n    \n            <span class=\"trace-class\"><abbr title=\"Doctrine\\Bundle\\DoctrineBundle\\Repository\\ContainerRepositoryFactory\">ContainerRepositoryFactory</abbr></span><span class=\"trace-type\">-&gt;</span><span class=\"trace-method\">getRepository</span><span class=\"trace-arguments\">(<em>object</em>(<abbr title=\"Doctrine\\ORM\\EntityManager\">EntityManager</abbr>), 'BckAdminBundle:User')</span>\n    \n                                    \n        <span class=\"block trace-file-path\">\n            in\n            <a href=\"http://www.handsometravel.dev/app_dev.php/_profiler/open?file=vendor/doctrine/orm/lib/Doctrine/ORM/EntityManager.php&amp;line=698#line698\">vendor/doctrine/orm/lib/Doctrine/ORM/<strong>EntityManager.php</strong></a>\n            (line 698)\n        </span>\n    </div>\n    <div id=\"trace-html-1-8\" class=\"trace-code sf-toggle-content\">\n        <ol start=\"693\"><li><a class=\"anchor\" name=\"line693\"></a><code><span style=\"color: #969896\">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;*</span></span></code></li>\n<li><a class=\"anchor\" name=\"line694\"></a><code><span style=\"color: #969896\">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;*&nbsp;@return&nbsp;\\Doctrine\\ORM\\EntityRepository&nbsp;The&nbsp;repository&nbsp;class.</span></span></code></li>\n<li><a class=\"anchor\" name=\"line695\"></a><code><span style=\"color: #969896\">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;*/</span></span></code></li>\n<li><a class=\"anchor\" name=\"line696\"></a><code><span style=\"color: #969896\">&nbsp;&nbsp;&nbsp;&nbsp;</span><span style=\"color: #a71d5d\">public&nbsp;function&nbsp;</span><span style=\"color: #222222\">getRepository</span><span style=\"color: #a71d5d\">(</span><span style=\"color: #222222\">$entityName</span><span style=\"color: #a71d5d\">)</span></span></code></li>\n<li><a class=\"anchor\" name=\"line697\"></a><code><span style=\"color: #a71d5d\">&nbsp;&nbsp;&nbsp;&nbsp;{</span></span></code></li>\n<li class=\"selected\"><a class=\"anchor\" name=\"line698\"></a><code><span style=\"color: #a71d5d\">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;return&nbsp;</span><span style=\"color: #222222\">$this</span><span style=\"color: #a71d5d\">-&gt;</span><span style=\"color: #222222\">repositoryFactory</span><span style=\"color: #a71d5d\">-&gt;</span><span style=\"color: #222222\">getRepository</span><span style=\"color: #a71d5d\">(</span><span style=\"color: #222222\">$this</span><span style=\"color: #a71d5d\">,&nbsp;</span><span style=\"color: #222222\">$entityName</span><span style=\"color: #a71d5d\">);</span></span></code></li>\n<li><a class=\"anchor\" name=\"line699\"></a><code><span style=\"color: #a71d5d\">&nbsp;&nbsp;&nbsp;&nbsp;}</span></span></code></li>\n<li><a class=\"anchor\" name=\"line700\"></a><code><span style=\"color: #a71d5d\"></span></span></code></li>\n<li><a class=\"anchor\" name=\"line701\"></a><code><span style=\"color: #a71d5d\">&nbsp;&nbsp;&nbsp;&nbsp;</span><span style=\"color: #969896\">/**</span></span></code></li>\n<li><a class=\"anchor\" name=\"line702\"></a><code><span style=\"color: #969896\">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;*&nbsp;Determines&nbsp;whether&nbsp;an&nbsp;entity&nbsp;instance&nbsp;is&nbsp;managed&nbsp;in&nbsp;this&nbsp;EntityManager.</span></span></code></li>\n<li><a class=\"anchor\" name=\"line703\"></a><code><span style=\"color: #969896\">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;*</span></span></code></li></ol>\n    </div>\n\n            </div>\n                                            <div class=\"trace-line\">\n                <div class=\"trace-line-header break-long-words sf-toggle\" data-toggle-selector=\"#trace-html-1-9\" data-toggle-initial=\"\">\n            <span class=\"icon icon-close\"><svg width=\"1792\" height=\"1792\" viewBox=\"0 0 1792 1792\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M1408 960V832q0-26-19-45t-45-19H448q-26 0-45 19t-19 45v128q0 26 19 45t45 19h896q26 0 45-19t19-45zm256-544v960q0 119-84.5 203.5T1376 1664H416q-119 0-203.5-84.5T128 1376V416q0-119 84.5-203.5T416 128h960q119 0 203.5 84.5T1664 416z\"/></svg>\n</span>\n        <span class=\"icon icon-open\"><svg width=\"1792\" height=\"1792\" viewBox=\"0 0 1792 1792\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M1408 960v-128q0-26-19-45t-45-19h-320v-320q0-26-19-45t-45-19h-128q-26 0-45 19t-19 45v320h-320q-26 0-45 19t-19 45v128q0 26 19 45t45 19h320v320q0 26 19 45t45 19h128q26 0 45-19t19-45v-320h320q26 0 45-19t19-45zm256-544v960q0 119-84.5 203.5t-203.5 84.5h-960q-119 0-203.5-84.5t-84.5-203.5v-960q0-119 84.5-203.5t203.5-84.5h960q119 0 203.5 84.5t84.5 203.5z\"/></svg>\n</span>\n    \n            <span class=\"trace-class\"><abbr title=\"Doctrine\\ORM\\EntityManager\">EntityManager</abbr></span><span class=\"trace-type\">-&gt;</span><span class=\"trace-method\">getRepository</span><span class=\"trace-arguments\">('BckAdminBundle:User')</span>\n    \n                                    \n        <span class=\"block trace-file-path\">\n            in\n            <a href=\"http://www.handsometravel.dev/app_dev.php/_profiler/open?file=var/cache/dev/appDevDebugProjectContainer.php&amp;line=7119#line7119\">var/cache/dev/<strong>appDevDebugProjectContainer.php</strong></a>\n            (line 7119)\n        </span>\n    </div>\n    <div id=\"trace-html-1-9\" class=\"trace-code sf-toggle-content\">\n        <ol start=\"7114\"><li><a class=\"anchor\" name=\"line7114\"></a><code><span style=\"color: #969896\">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;*/</span></span></code></li>\n<li><a class=\"anchor\" name=\"line7115\"></a><code><span style=\"color: #969896\">&nbsp;&nbsp;&nbsp;&nbsp;</span><span style=\"color: #a71d5d\">public&nbsp;function&nbsp;</span><span style=\"color: #222222\">getRepository</span><span style=\"color: #a71d5d\">(</span><span style=\"color: #222222\">$entityName</span><span style=\"color: #a71d5d\">)</span></span></code></li>\n<li><a class=\"anchor\" name=\"line7116\"></a><code><span style=\"color: #a71d5d\">&nbsp;&nbsp;&nbsp;&nbsp;{</span></span></code></li>\n<li><a class=\"anchor\" name=\"line7117\"></a><code><span style=\"color: #a71d5d\">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span><span style=\"color: #222222\">$this</span><span style=\"color: #a71d5d\">-&gt;</span><span style=\"color: #222222\">initializer5b1ad9040451f938879214&nbsp;</span><span style=\"color: #a71d5d\">&amp;&amp;&nbsp;(</span><span style=\"color: #222222\">$this</span><span style=\"color: #a71d5d\">-&gt;</span><span style=\"color: #222222\">initializer5b1ad9040451f938879214</span><span style=\"color: #a71d5d\">-&gt;</span><span style=\"color: #222222\">__invoke</span><span style=\"color: #a71d5d\">(</span><span style=\"color: #222222\">$valueHolder5b1ad904044ec628455774</span><span style=\"color: #a71d5d\">,&nbsp;</span><span style=\"color: #222222\">$this</span><span style=\"color: #a71d5d\">,&nbsp;</span><span style=\"color: #183691\">'getRepository'</span><span style=\"color: #a71d5d\">,&nbsp;array(</span><span style=\"color: #183691\">'entityName'&nbsp;</span><span style=\"color: #a71d5d\">=&gt;&nbsp;</span><span style=\"color: #222222\">$entityName</span><span style=\"color: #a71d5d\">),&nbsp;</span><span style=\"color: #222222\">$this</span><span style=\"color: #a71d5d\">-&gt;</span><span style=\"color: #222222\">initializer5b1ad9040451f938879214</span><span style=\"color: #a71d5d\">)&nbsp;||&nbsp;</span><span style=\"color: #222222\">1</span><span style=\"color: #a71d5d\">)&nbsp;&amp;&amp;&nbsp;</span><span style=\"color: #222222\">$this</span><span style=\"color: #a71d5d\">-&gt;</span><span style=\"color: #222222\">valueHolder5b1ad904044ec628455774&nbsp;</span><span style=\"color: #a71d5d\">=&nbsp;</span><span style=\"color: #222222\">$valueHolder5b1ad904044ec628455774</span><span style=\"color: #a71d5d\">;</span></span></code></li>\n<li><a class=\"anchor\" name=\"line7118\"></a><code><span style=\"color: #a71d5d\"></span></span></code></li>\n<li class=\"selected\"><a class=\"anchor\" name=\"line7119\"></a><code><span style=\"color: #a71d5d\">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;return&nbsp;</span><span style=\"color: #222222\">$this</span><span style=\"color: #a71d5d\">-&gt;</span><span style=\"color: #222222\">valueHolder5b1ad904044ec628455774</span><span style=\"color: #a71d5d\">-&gt;</span><span style=\"color: #222222\">getRepository</span><span style=\"color: #a71d5d\">(</span><span style=\"color: #222222\">$entityName</span><span style=\"color: #a71d5d\">);</span></span></code></li>\n<li><a class=\"anchor\" name=\"line7120\"></a><code><span style=\"color: #a71d5d\">&nbsp;&nbsp;&nbsp;&nbsp;}</span></span></code></li>\n<li><a class=\"anchor\" name=\"line7121\"></a><code><span style=\"color: #a71d5d\"></span></span></code></li>\n<li><a class=\"anchor\" name=\"line7122\"></a><code><span style=\"color: #a71d5d\">&nbsp;&nbsp;&nbsp;&nbsp;</span><span style=\"color: #969896\">/**</span></span></code></li>\n<li><a class=\"anchor\" name=\"line7123\"></a><code><span style=\"color: #969896\">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;*&nbsp;{@inheritDoc}</span></span></code></li>\n<li><a class=\"anchor\" name=\"line7124\"></a><code><span style=\"color: #969896\">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;*/</span></span></code></li></ol>\n    </div>\n\n            </div>\n                                            <div class=\"trace-line\">\n                <div class=\"trace-line-header break-long-words sf-toggle\" data-toggle-selector=\"#trace-html-1-10\" data-toggle-initial=\"display\">\n            <span class=\"icon icon-close\"><svg width=\"1792\" height=\"1792\" viewBox=\"0 0 1792 1792\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M1408 960V832q0-26-19-45t-45-19H448q-26 0-45 19t-19 45v128q0 26 19 45t45 19h896q26 0 45-19t19-45zm256-544v960q0 119-84.5 203.5T1376 1664H416q-119 0-203.5-84.5T128 1376V416q0-119 84.5-203.5T416 128h960q119 0 203.5 84.5T1664 416z\"/></svg>\n</span>\n        <span class=\"icon icon-open\"><svg width=\"1792\" height=\"1792\" viewBox=\"0 0 1792 1792\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M1408 960v-128q0-26-19-45t-45-19h-320v-320q0-26-19-45t-45-19h-128q-26 0-45 19t-19 45v320h-320q-26 0-45 19t-19 45v128q0 26 19 45t45 19h320v320q0 26 19 45t45 19h128q26 0 45-19t19-45v-320h320q26 0 45-19t19-45zm256-544v960q0 119-84.5 203.5t-203.5 84.5h-960q-119 0-203.5-84.5t-84.5-203.5v-960q0-119 84.5-203.5t203.5-84.5h960q119 0 203.5 84.5t84.5 203.5z\"/></svg>\n</span>\n    \n            <span class=\"trace-class\"><abbr title=\"DoctrineORMEntityManager_00000000151d060200000000156807f14cc1a05bd0f30c0a85374ba86f1604d4\">DoctrineORMEntityManager_00000000151d060200000000156807f14cc1a05bd0f30c0a85374ba86f1604d4</abbr></span><span class=\"trace-type\">-&gt;</span><span class=\"trace-method\">getRepository</span><span class=\"trace-arguments\">('BckAdminBundle:User')</span>\n    \n                                    \n        <span class=\"block trace-file-path\">\n            in\n            <a href=\"http://www.handsometravel.dev/app_dev.php/_profiler/open?file=src/AppBundle/Service/BaseRepositoryService.php&amp;line=50#line50\">src/AppBundle/Service/<strong>BaseRepositoryService.php</strong></a>\n            (line 50)\n        </span>\n    </div>\n    <div id=\"trace-html-1-10\" class=\"trace-code sf-toggle-content\">\n        <ol start=\"45\"><li><a class=\"anchor\" name=\"line45\"></a><code><span style=\"color: #969896\">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;*/</span></span></code></li>\n<li><a class=\"anchor\" name=\"line46\"></a><code><span style=\"color: #969896\">&nbsp;&nbsp;&nbsp;&nbsp;</span><span style=\"color: #a71d5d\">public&nbsp;function&nbsp;</span><span style=\"color: #222222\">execute</span><span style=\"color: #a71d5d\">(</span><span style=\"color: #222222\">$method</span><span style=\"color: #a71d5d\">,&nbsp;</span><span style=\"color: #222222\">$args&nbsp;</span><span style=\"color: #a71d5d\">=&nbsp;array())</span></span></code></li>\n<li><a class=\"anchor\" name=\"line47\"></a><code><span style=\"color: #a71d5d\">&nbsp;&nbsp;&nbsp;&nbsp;{</span></span></code></li>\n<li><a class=\"anchor\" name=\"line48\"></a><code><span style=\"color: #a71d5d\">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;return&nbsp;</span><span style=\"color: #222222\">call_user_func_array</span><span style=\"color: #a71d5d\">(</span></span></code></li>\n<li><a class=\"anchor\" name=\"line49\"></a><code><span style=\"color: #a71d5d\">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;array(</span></span></code></li>\n<li class=\"selected\"><a class=\"anchor\" name=\"line50\"></a><code><span style=\"color: #a71d5d\">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span><span style=\"color: #222222\">$this</span><span style=\"color: #a71d5d\">-&gt;</span><span style=\"color: #222222\">entityManager</span><span style=\"color: #a71d5d\">-&gt;</span><span style=\"color: #222222\">getRepository</span><span style=\"color: #a71d5d\">(</span><span style=\"color: #222222\">$this</span><span style=\"color: #a71d5d\">-&gt;</span><span style=\"color: #222222\">entityRepository</span><span style=\"color: #a71d5d\">),</span></span></code></li>\n<li><a class=\"anchor\" name=\"line51\"></a><code><span style=\"color: #a71d5d\">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span><span style=\"color: #222222\">$method</span></span></code></li>\n<li><a class=\"anchor\" name=\"line52\"></a><code><span style=\"color: #222222\">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span><span style=\"color: #a71d5d\">),</span></span></code></li>\n<li><a class=\"anchor\" name=\"line53\"></a><code><span style=\"color: #a71d5d\">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span><span style=\"color: #222222\">$args</span></span></code></li>\n<li><a class=\"anchor\" name=\"line54\"></a><code><span style=\"color: #222222\">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span><span style=\"color: #a71d5d\">);</span></span></code></li>\n<li><a class=\"anchor\" name=\"line55\"></a><code><span style=\"color: #a71d5d\">&nbsp;&nbsp;&nbsp;&nbsp;}</span></span></code></li></ol>\n    </div>\n\n            </div>\n                                            <div class=\"trace-line\">\n                <div class=\"trace-line-header break-long-words sf-toggle\" data-toggle-selector=\"#trace-html-1-11\" data-toggle-initial=\"\">\n            <span class=\"icon icon-close\"><svg width=\"1792\" height=\"1792\" viewBox=\"0 0 1792 1792\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M1408 960V832q0-26-19-45t-45-19H448q-26 0-45 19t-19 45v128q0 26 19 45t45 19h896q26 0 45-19t19-45zm256-544v960q0 119-84.5 203.5T1376 1664H416q-119 0-203.5-84.5T128 1376V416q0-119 84.5-203.5T416 128h960q119 0 203.5 84.5T1664 416z\"/></svg>\n</span>\n        <span class=\"icon icon-open\"><svg width=\"1792\" height=\"1792\" viewBox=\"0 0 1792 1792\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M1408 960v-128q0-26-19-45t-45-19h-320v-320q0-26-19-45t-45-19h-128q-26 0-45 19t-19 45v320h-320q-26 0-45 19t-19 45v128q0 26 19 45t45 19h320v320q0 26 19 45t45 19h128q26 0 45-19t19-45v-320h320q26 0 45-19t19-45zm256-544v960q0 119-84.5 203.5t-203.5 84.5h-960q-119 0-203.5-84.5t-84.5-203.5v-960q0-119 84.5-203.5t203.5-84.5h960q119 0 203.5 84.5t84.5 203.5z\"/></svg>\n</span>\n    \n            <span class=\"trace-class\"><abbr title=\"AppBundle\\Service\\BaseRepositoryService\">BaseRepositoryService</abbr></span><span class=\"trace-type\">-&gt;</span><span class=\"trace-method\">execute</span><span class=\"trace-arguments\">('findOneById', <em>array</em>(85))</span>\n    \n                                    \n        <span class=\"block trace-file-path\">\n            in\n            <a href=\"http://www.handsometravel.dev/app_dev.php/_profiler/open?file=src/Bck/UserBundle/Controller/UserGroupController.php&amp;line=174#line174\">src/Bck/UserBundle/Controller/<strong>UserGroupController.php</strong></a>\n            (line 174)\n        </span>\n    </div>\n    <div id=\"trace-html-1-11\" class=\"trace-code sf-toggle-content\">\n        <ol start=\"169\"><li><a class=\"anchor\" name=\"line169\"></a><code><span style=\"color: #a71d5d\">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span><span style=\"color: #222222\">$loggedUserId&nbsp;</span><span style=\"color: #a71d5d\">=&nbsp;</span><span style=\"color: #222222\">$session</span><span style=\"color: #a71d5d\">-&gt;</span><span style=\"color: #222222\">get</span><span style=\"color: #a71d5d\">(</span><span style=\"color: #183691\">'_app.user'</span><span style=\"color: #a71d5d\">)[</span><span style=\"color: #183691\">'id'</span><span style=\"color: #a71d5d\">];</span></span></code></li>\n<li><a class=\"anchor\" name=\"line170\"></a><code><span style=\"color: #a71d5d\">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span><span style=\"color: #222222\">$userObj&nbsp;</span><span style=\"color: #a71d5d\">=&nbsp;</span><span style=\"color: #222222\">$this</span><span style=\"color: #a71d5d\">-&gt;</span><span style=\"color: #222222\">getRepositoryService</span><span style=\"color: #a71d5d\">(</span><span style=\"color: #183691\">'User'</span><span style=\"color: #a71d5d\">,&nbsp;</span><span style=\"color: #183691\">'AdminBundle'</span><span style=\"color: #a71d5d\">,&nbsp;</span><span style=\"color: #183691\">'Bck'</span><span style=\"color: #a71d5d\">)</span></span></code></li>\n<li><a class=\"anchor\" name=\"line171\"></a><code><span style=\"color: #a71d5d\">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;-&gt;</span><span style=\"color: #222222\">execute</span><span style=\"color: #a71d5d\">(</span></span></code></li>\n<li><a class=\"anchor\" name=\"line172\"></a><code><span style=\"color: #a71d5d\">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span><span style=\"color: #183691\">'findOneById'</span><span style=\"color: #a71d5d\">,</span></span></code></li>\n<li><a class=\"anchor\" name=\"line173\"></a><code><span style=\"color: #a71d5d\">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;array(</span></span></code></li>\n<li class=\"selected\"><a class=\"anchor\" name=\"line174\"></a><code><span style=\"color: #a71d5d\">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span><span style=\"color: #222222\">$loggedUserId</span></span></code></li>\n<li><a class=\"anchor\" name=\"line175\"></a><code><span style=\"color: #222222\">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span><span style=\"color: #a71d5d\">)</span></span></code></li>\n<li><a class=\"anchor\" name=\"line176\"></a><code><span style=\"color: #a71d5d\">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;);</span></span></code></li>\n<li><a class=\"anchor\" name=\"line177\"></a><code><span style=\"color: #a71d5d\"></span></span></code></li>\n<li><a class=\"anchor\" name=\"line178\"></a><code><span style=\"color: #a71d5d\">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span><span style=\"color: #222222\">$obj</span><span style=\"color: #a71d5d\">-&gt;</span><span style=\"color: #222222\">setUserObj</span><span style=\"color: #a71d5d\">(</span><span style=\"color: #222222\">$userObj</span><span style=\"color: #a71d5d\">);</span></span></code></li>\n<li><a class=\"anchor\" name=\"line179\"></a><code><span style=\"color: #a71d5d\"></span></span></code></li></ol>\n    </div>\n\n            </div>\n                                            <div class=\"trace-line\">\n                <div class=\"trace-line-header break-long-words sf-toggle\" data-toggle-selector=\"#trace-html-1-12\" data-toggle-initial=\"\">\n            <span class=\"icon icon-close\"><svg width=\"1792\" height=\"1792\" viewBox=\"0 0 1792 1792\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M1408 960V832q0-26-19-45t-45-19H448q-26 0-45 19t-19 45v128q0 26 19 45t45 19h896q26 0 45-19t19-45zm256-544v960q0 119-84.5 203.5T1376 1664H416q-119 0-203.5-84.5T128 1376V416q0-119 84.5-203.5T416 128h960q119 0 203.5 84.5T1664 416z\"/></svg>\n</span>\n        <span class=\"icon icon-open\"><svg width=\"1792\" height=\"1792\" viewBox=\"0 0 1792 1792\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M1408 960v-128q0-26-19-45t-45-19h-320v-320q0-26-19-45t-45-19h-128q-26 0-45 19t-19 45v320h-320q-26 0-45 19t-19 45v128q0 26 19 45t45 19h320v320q0 26 19 45t45 19h128q26 0 45-19t19-45v-320h320q26 0 45-19t19-45zm256-544v960q0 119-84.5 203.5t-203.5 84.5h-960q-119 0-203.5-84.5t-84.5-203.5v-960q0-119 84.5-203.5t203.5-84.5h960q119 0 203.5 84.5t84.5 203.5z\"/></svg>\n</span>\n    \n            <span class=\"trace-class\"><abbr title=\"Bck\\UserBundle\\Controller\\UserGroupController\">UserGroupController</abbr></span><span class=\"trace-type\">-&gt;</span><span class=\"trace-method\">newObject</span><span class=\"trace-arguments\">()</span>\n    \n                                    \n        <span class=\"block trace-file-path\">\n            in\n            <a href=\"http://www.handsometravel.dev/app_dev.php/_profiler/open?file=src/AppBundle/Controller/BaseEntityController.php&amp;line=1607#line1607\">src/AppBundle/Controller/<strong>BaseEntityController.php</strong></a>\n            (line 1607)\n        </span>\n    </div>\n    <div id=\"trace-html-1-12\" class=\"trace-code sf-toggle-content\">\n        <ol start=\"1602\"><li><a class=\"anchor\" name=\"line1602\"></a><code><span style=\"color: #a71d5d\">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;return&nbsp;</span><span style=\"color: #222222\">$obj</span><span style=\"color: #a71d5d\">;</span></span></code></li>\n<li><a class=\"anchor\" name=\"line1603\"></a><code><span style=\"color: #a71d5d\">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;}</span></span></code></li>\n<li><a class=\"anchor\" name=\"line1604\"></a><code><span style=\"color: #a71d5d\">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;}</span></span></code></li>\n<li><a class=\"anchor\" name=\"line1605\"></a><code><span style=\"color: #a71d5d\"></span></span></code></li>\n<li><a class=\"anchor\" name=\"line1606\"></a><code><span style=\"color: #a71d5d\">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span><span style=\"color: #969896\">//&nbsp;New&nbsp;object</span></span></code></li>\n<li class=\"selected\"><a class=\"anchor\" name=\"line1607\"></a><code><span style=\"color: #969896\">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span><span style=\"color: #a71d5d\">return&nbsp;</span><span style=\"color: #222222\">$this</span><span style=\"color: #a71d5d\">-&gt;</span><span style=\"color: #222222\">newObject</span><span style=\"color: #a71d5d\">();</span></span></code></li>\n<li><a class=\"anchor\" name=\"line1608\"></a><code><span style=\"color: #a71d5d\">&nbsp;&nbsp;&nbsp;&nbsp;}</span></span></code></li>\n<li><a class=\"anchor\" name=\"line1609\"></a><code><span style=\"color: #a71d5d\"></span></span></code></li>\n<li><a class=\"anchor\" name=\"line1610\"></a><code><span style=\"color: #a71d5d\">&nbsp;&nbsp;&nbsp;&nbsp;</span><span style=\"color: #969896\">/**</span></span></code></li>\n<li><a class=\"anchor\" name=\"line1611\"></a><code><span style=\"color: #969896\">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;*&nbsp;Get&nbsp;object&nbsp;from&nbsp;Session&nbsp;Storage</span></span></code></li>\n<li><a class=\"anchor\" name=\"line1612\"></a><code><span style=\"color: #969896\">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;*&nbsp;@param&nbsp;$id</span></span></code></li></ol>\n    </div>\n\n            </div>\n                                            <div class=\"trace-line\">\n                <div class=\"trace-line-header break-long-words sf-toggle\" data-toggle-selector=\"#trace-html-1-13\" data-toggle-initial=\"\">\n            <span class=\"icon icon-close\"><svg width=\"1792\" height=\"1792\" viewBox=\"0 0 1792 1792\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M1408 960V832q0-26-19-45t-45-19H448q-26 0-45 19t-19 45v128q0 26 19 45t45 19h896q26 0 45-19t19-45zm256-544v960q0 119-84.5 203.5T1376 1664H416q-119 0-203.5-84.5T128 1376V416q0-119 84.5-203.5T416 128h960q119 0 203.5 84.5T1664 416z\"/></svg>\n</span>\n        <span class=\"icon icon-open\"><svg width=\"1792\" height=\"1792\" viewBox=\"0 0 1792 1792\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M1408 960v-128q0-26-19-45t-45-19h-320v-320q0-26-19-45t-45-19h-128q-26 0-45 19t-19 45v320h-320q-26 0-45 19t-19 45v128q0 26 19 45t45 19h320v320q0 26 19 45t45 19h128q26 0 45-19t19-45v-320h320q26 0 45-19t19-45zm256-544v960q0 119-84.5 203.5t-203.5 84.5h-960q-119 0-203.5-84.5t-84.5-203.5v-960q0-119 84.5-203.5t203.5-84.5h960q119 0 203.5 84.5t84.5 203.5z\"/></svg>\n</span>\n    \n            <span class=\"trace-class\"><abbr title=\"AppBundle\\Controller\\BaseEntityController\">BaseEntityController</abbr></span><span class=\"trace-type\">-&gt;</span><span class=\"trace-method\">getObject</span><span class=\"trace-arguments\">(<em>null</em>)</span>\n    \n                                    \n        <span class=\"block trace-file-path\">\n            in\n            <a href=\"http://www.handsometravel.dev/app_dev.php/_profiler/open?file=src/AppBundle/Controller/BaseEntityController.php&amp;line=568#line568\">src/AppBundle/Controller/<strong>BaseEntityController.php</strong></a>\n            (line 568)\n        </span>\n    </div>\n    <div id=\"trace-html-1-13\" class=\"trace-code sf-toggle-content\">\n        <ol start=\"563\"><li><a class=\"anchor\" name=\"line563\"></a><code><span style=\"color: #a71d5d\">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span><span style=\"color: #969896\">//&nbsp;Set&nbsp;configuration</span></span></code></li>\n<li><a class=\"anchor\" name=\"line564\"></a><code><span style=\"color: #969896\">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span><span style=\"color: #222222\">$this</span><span style=\"color: #a71d5d\">-&gt;</span><span style=\"color: #222222\">flags</span><span style=\"color: #a71d5d\">[</span><span style=\"color: #183691\">'hasForm'</span><span style=\"color: #a71d5d\">]&nbsp;=&nbsp;</span><span style=\"color: #222222\">true</span><span style=\"color: #a71d5d\">;</span></span></code></li>\n<li><a class=\"anchor\" name=\"line565\"></a><code><span style=\"color: #a71d5d\">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span><span style=\"color: #222222\">$this</span><span style=\"color: #a71d5d\">-&gt;</span><span style=\"color: #222222\">init</span><span style=\"color: #a71d5d\">(</span><span style=\"color: #222222\">$request</span><span style=\"color: #a71d5d\">);</span></span></code></li>\n<li><a class=\"anchor\" name=\"line566\"></a><code><span style=\"color: #a71d5d\"></span></span></code></li>\n<li><a class=\"anchor\" name=\"line567\"></a><code><span style=\"color: #a71d5d\">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span><span style=\"color: #969896\">//&nbsp;Get&nbsp;object</span></span></code></li>\n<li class=\"selected\"><a class=\"anchor\" name=\"line568\"></a><code><span style=\"color: #969896\">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span><span style=\"color: #222222\">$obj&nbsp;</span><span style=\"color: #a71d5d\">=&nbsp;</span><span style=\"color: #222222\">$this</span><span style=\"color: #a71d5d\">-&gt;</span><span style=\"color: #222222\">getObject</span><span style=\"color: #a71d5d\">(</span><span style=\"color: #222222\">$id</span><span style=\"color: #a71d5d\">);</span></span></code></li>\n<li><a class=\"anchor\" name=\"line569\"></a><code><span style=\"color: #a71d5d\"></span></span></code></li>\n<li><a class=\"anchor\" name=\"line570\"></a><code><span style=\"color: #a71d5d\">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span><span style=\"color: #969896\">//&nbsp;Build&nbsp;form</span></span></code></li>\n<li><a class=\"anchor\" name=\"line571\"></a><code><span style=\"color: #969896\">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span><span style=\"color: #222222\">$form&nbsp;</span><span style=\"color: #a71d5d\">=&nbsp;</span><span style=\"color: #222222\">$this</span><span style=\"color: #a71d5d\">-&gt;</span><span style=\"color: #222222\">createForm</span><span style=\"color: #a71d5d\">(</span><span style=\"color: #222222\">$this</span><span style=\"color: #a71d5d\">-&gt;</span><span style=\"color: #222222\">localConf</span><span style=\"color: #a71d5d\">[</span><span style=\"color: #183691\">'formTypeClass'</span><span style=\"color: #a71d5d\">],&nbsp;</span><span style=\"color: #222222\">$obj</span><span style=\"color: #a71d5d\">);</span></span></code></li>\n<li><a class=\"anchor\" name=\"line572\"></a><code><span style=\"color: #a71d5d\"></span></span></code></li>\n<li><a class=\"anchor\" name=\"line573\"></a><code><span style=\"color: #a71d5d\">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span><span style=\"color: #969896\">//&nbsp;Handle&nbsp;request</span></span></code></li></ol>\n    </div>\n\n            </div>\n                                            <div class=\"trace-line\">\n                <div class=\"trace-line-header break-long-words sf-toggle\" data-toggle-selector=\"#trace-html-1-14\" data-toggle-initial=\"\">\n            <span class=\"icon icon-close\"><svg width=\"1792\" height=\"1792\" viewBox=\"0 0 1792 1792\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M1408 960V832q0-26-19-45t-45-19H448q-26 0-45 19t-19 45v128q0 26 19 45t45 19h896q26 0 45-19t19-45zm256-544v960q0 119-84.5 203.5T1376 1664H416q-119 0-203.5-84.5T128 1376V416q0-119 84.5-203.5T416 128h960q119 0 203.5 84.5T1664 416z\"/></svg>\n</span>\n        <span class=\"icon icon-open\"><svg width=\"1792\" height=\"1792\" viewBox=\"0 0 1792 1792\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M1408 960v-128q0-26-19-45t-45-19h-320v-320q0-26-19-45t-45-19h-128q-26 0-45 19t-19 45v320h-320q-26 0-45 19t-19 45v128q0 26 19 45t45 19h320v320q0 26 19 45t45 19h128q26 0 45-19t19-45v-320h320q26 0 45-19t19-45zm256-544v960q0 119-84.5 203.5t-203.5 84.5h-960q-119 0-203.5-84.5t-84.5-203.5v-960q0-119 84.5-203.5t203.5-84.5h960q119 0 203.5 84.5t84.5 203.5z\"/></svg>\n</span>\n    \n            <span class=\"trace-class\"><abbr title=\"AppBundle\\Controller\\BaseEntityController\">BaseEntityController</abbr></span><span class=\"trace-type\">-&gt;</span><span class=\"trace-method\">editAction</span><span class=\"trace-arguments\">(<em>object</em>(<abbr title=\"Symfony\\Component\\HttpFoundation\\Request\">Request</abbr>), <em>null</em>)</span>\n    \n                                    \n        <span class=\"block trace-file-path\">\n            in\n            <a href=\"http://www.handsometravel.dev/app_dev.php/_profiler/open?file=src/Bck/UserBundle/Controller/UserGroupController.php&amp;line=122#line122\">src/Bck/UserBundle/Controller/<strong>UserGroupController.php</strong></a>\n            (line 122)\n        </span>\n    </div>\n    <div id=\"trace-html-1-14\" class=\"trace-code sf-toggle-content\">\n        <ol start=\"117\"><li><a class=\"anchor\" name=\"line117\"></a><code><span style=\"color: #969896\">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;*&nbsp;@param&nbsp;$id</span></span></code></li>\n<li><a class=\"anchor\" name=\"line118\"></a><code><span style=\"color: #969896\">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;*&nbsp;@return&nbsp;mixed</span></span></code></li>\n<li><a class=\"anchor\" name=\"line119\"></a><code><span style=\"color: #969896\">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;*/</span></span></code></li>\n<li><a class=\"anchor\" name=\"line120\"></a><code><span style=\"color: #969896\">&nbsp;&nbsp;&nbsp;&nbsp;</span><span style=\"color: #a71d5d\">public&nbsp;function&nbsp;</span><span style=\"color: #222222\">editAction</span><span style=\"color: #a71d5d\">(</span><span style=\"color: #222222\">Request&nbsp;$request</span><span style=\"color: #a71d5d\">,&nbsp;</span><span style=\"color: #222222\">$id</span><span style=\"color: #a71d5d\">)</span></span></code></li>\n<li><a class=\"anchor\" name=\"line121\"></a><code><span style=\"color: #a71d5d\">&nbsp;&nbsp;&nbsp;&nbsp;{</span></span></code></li>\n<li class=\"selected\"><a class=\"anchor\" name=\"line122\"></a><code><span style=\"color: #a71d5d\">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;return&nbsp;</span><span style=\"color: #222222\">parent</span><span style=\"color: #a71d5d\">::</span><span style=\"color: #222222\">editAction</span><span style=\"color: #a71d5d\">(</span><span style=\"color: #222222\">$request</span><span style=\"color: #a71d5d\">,&nbsp;</span><span style=\"color: #222222\">$id</span><span style=\"color: #a71d5d\">);</span></span></code></li>\n<li><a class=\"anchor\" name=\"line123\"></a><code><span style=\"color: #a71d5d\">&nbsp;&nbsp;&nbsp;&nbsp;}</span></span></code></li>\n<li><a class=\"anchor\" name=\"line124\"></a><code><span style=\"color: #a71d5d\"></span></span></code></li>\n<li><a class=\"anchor\" name=\"line125\"></a><code><span style=\"color: #a71d5d\">&nbsp;&nbsp;&nbsp;&nbsp;</span><span style=\"color: #969896\">/**</span></span></code></li>\n<li><a class=\"anchor\" name=\"line126\"></a><code><span style=\"color: #969896\">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;*&nbsp;@Route(\"/bck/user/user-group/delete/{id}\",</span></span></code></li>\n<li><a class=\"anchor\" name=\"line127\"></a><code><span style=\"color: #969896\">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;*&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;name=\"_bck__user__user_group__delete\",</span></span></code></li></ol>\n    </div>\n\n            </div>\n                                            <div class=\"trace-line\">\n                <div class=\"trace-line-header break-long-words sf-toggle\" data-toggle-selector=\"#trace-html-1-15\" data-toggle-initial=\"\">\n            <span class=\"icon icon-close\"><svg width=\"1792\" height=\"1792\" viewBox=\"0 0 1792 1792\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M1408 960V832q0-26-19-45t-45-19H448q-26 0-45 19t-19 45v128q0 26 19 45t45 19h896q26 0 45-19t19-45zm256-544v960q0 119-84.5 203.5T1376 1664H416q-119 0-203.5-84.5T128 1376V416q0-119 84.5-203.5T416 128h960q119 0 203.5 84.5T1664 416z\"/></svg>\n</span>\n        <span class=\"icon icon-open\"><svg width=\"1792\" height=\"1792\" viewBox=\"0 0 1792 1792\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M1408 960v-128q0-26-19-45t-45-19h-320v-320q0-26-19-45t-45-19h-128q-26 0-45 19t-19 45v320h-320q-26 0-45 19t-19 45v128q0 26 19 45t45 19h320v320q0 26 19 45t45 19h128q26 0 45-19t19-45v-320h320q26 0 45-19t19-45zm256-544v960q0 119-84.5 203.5t-203.5 84.5h-960q-119 0-203.5-84.5t-84.5-203.5v-960q0-119 84.5-203.5t203.5-84.5h960q119 0 203.5 84.5t84.5 203.5z\"/></svg>\n</span>\n    \n            <span class=\"trace-class\"><abbr title=\"Bck\\UserBundle\\Controller\\UserGroupController\">UserGroupController</abbr></span><span class=\"trace-type\">-&gt;</span><span class=\"trace-method\">editAction</span><span class=\"trace-arguments\">(<em>object</em>(<abbr title=\"Symfony\\Component\\HttpFoundation\\Request\">Request</abbr>), <em>null</em>)</span>\n    \n                                    \n        <span class=\"block trace-file-path\">\n            in\n            <a href=\"http://www.handsometravel.dev/app_dev.php/_profiler/open?file=vendor/symfony/symfony/src/Symfony/Component/HttpKernel/HttpKernel.php&amp;line=151#line151\">vendor/symfony/symfony/src/Symfony/Component/HttpKernel/<strong>HttpKernel.php</strong></a>\n            (line 151)\n        </span>\n    </div>\n    <div id=\"trace-html-1-15\" class=\"trace-code sf-toggle-content\">\n        <ol start=\"146\"><li><a class=\"anchor\" name=\"line146\"></a><code><span style=\"color: #a71d5d\">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span><span style=\"color: #222222\">$this</span><span style=\"color: #a71d5d\">-&gt;</span><span style=\"color: #222222\">dispatcher</span><span style=\"color: #a71d5d\">-&gt;</span><span style=\"color: #222222\">dispatch</span><span style=\"color: #a71d5d\">(</span><span style=\"color: #222222\">KernelEvents</span><span style=\"color: #a71d5d\">::</span><span style=\"color: #222222\">CONTROLLER_ARGUMENTS</span><span style=\"color: #a71d5d\">,&nbsp;</span><span style=\"color: #222222\">$event</span><span style=\"color: #a71d5d\">);</span></span></code></li>\n<li><a class=\"anchor\" name=\"line147\"></a><code><span style=\"color: #a71d5d\">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span><span style=\"color: #222222\">$controller&nbsp;</span><span style=\"color: #a71d5d\">=&nbsp;</span><span style=\"color: #222222\">$event</span><span style=\"color: #a71d5d\">-&gt;</span><span style=\"color: #222222\">getController</span><span style=\"color: #a71d5d\">();</span></span></code></li>\n<li><a class=\"anchor\" name=\"line148\"></a><code><span style=\"color: #a71d5d\">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span><span style=\"color: #222222\">$arguments&nbsp;</span><span style=\"color: #a71d5d\">=&nbsp;</span><span style=\"color: #222222\">$event</span><span style=\"color: #a71d5d\">-&gt;</span><span style=\"color: #222222\">getArguments</span><span style=\"color: #a71d5d\">();</span></span></code></li>\n<li><a class=\"anchor\" name=\"line149\"></a><code><span style=\"color: #a71d5d\"></span></span></code></li>\n<li><a class=\"anchor\" name=\"line150\"></a><code><span style=\"color: #a71d5d\">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span><span style=\"color: #969896\">//&nbsp;call&nbsp;controller</span></span></code></li>\n<li class=\"selected\"><a class=\"anchor\" name=\"line151\"></a><code><span style=\"color: #969896\">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span><span style=\"color: #222222\">$response&nbsp;</span><span style=\"color: #a71d5d\">=&nbsp;\\</span><span style=\"color: #222222\">call_user_func_array</span><span style=\"color: #a71d5d\">(</span><span style=\"color: #222222\">$controller</span><span style=\"color: #a71d5d\">,&nbsp;</span><span style=\"color: #222222\">$arguments</span><span style=\"color: #a71d5d\">);</span></span></code></li>\n<li><a class=\"anchor\" name=\"line152\"></a><code><span style=\"color: #a71d5d\"></span></span></code></li>\n<li><a class=\"anchor\" name=\"line153\"></a><code><span style=\"color: #a71d5d\">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span><span style=\"color: #969896\">//&nbsp;view</span></span></code></li>\n<li><a class=\"anchor\" name=\"line154\"></a><code><span style=\"color: #969896\">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span><span style=\"color: #a71d5d\">if&nbsp;(!</span><span style=\"color: #222222\">$response&nbsp;</span><span style=\"color: #a71d5d\">instanceof&nbsp;</span><span style=\"color: #222222\">Response</span><span style=\"color: #a71d5d\">)&nbsp;{</span></span></code></li>\n<li><a class=\"anchor\" name=\"line155\"></a><code><span style=\"color: #a71d5d\">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span><span style=\"color: #222222\">$event&nbsp;</span><span style=\"color: #a71d5d\">=&nbsp;new&nbsp;</span><span style=\"color: #222222\">GetResponseForControllerResultEvent</span><span style=\"color: #a71d5d\">(</span><span style=\"color: #222222\">$this</span><span style=\"color: #a71d5d\">,&nbsp;</span><span style=\"color: #222222\">$request</span><span style=\"color: #a71d5d\">,&nbsp;</span><span style=\"color: #222222\">$type</span><span style=\"color: #a71d5d\">,&nbsp;</span><span style=\"color: #222222\">$response</span><span style=\"color: #a71d5d\">);</span></span></code></li>\n<li><a class=\"anchor\" name=\"line156\"></a><code><span style=\"color: #a71d5d\">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span><span style=\"color: #222222\">$this</span><span style=\"color: #a71d5d\">-&gt;</span><span style=\"color: #222222\">dispatcher</span><span style=\"color: #a71d5d\">-&gt;</span><span style=\"color: #222222\">dispatch</span><span style=\"color: #a71d5d\">(</span><span style=\"color: #222222\">KernelEvents</span><span style=\"color: #a71d5d\">::</span><span style=\"color: #222222\">VIEW</span><span style=\"color: #a71d5d\">,&nbsp;</span><span style=\"color: #222222\">$event</span><span style=\"color: #a71d5d\">);</span></span></code></li></ol>\n    </div>\n\n            </div>\n                                            <div class=\"trace-line\">\n                <div class=\"trace-line-header break-long-words sf-toggle\" data-toggle-selector=\"#trace-html-1-16\" data-toggle-initial=\"\">\n            <span class=\"icon icon-close\"><svg width=\"1792\" height=\"1792\" viewBox=\"0 0 1792 1792\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M1408 960V832q0-26-19-45t-45-19H448q-26 0-45 19t-19 45v128q0 26 19 45t45 19h896q26 0 45-19t19-45zm256-544v960q0 119-84.5 203.5T1376 1664H416q-119 0-203.5-84.5T128 1376V416q0-119 84.5-203.5T416 128h960q119 0 203.5 84.5T1664 416z\"/></svg>\n</span>\n        <span class=\"icon icon-open\"><svg width=\"1792\" height=\"1792\" viewBox=\"0 0 1792 1792\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M1408 960v-128q0-26-19-45t-45-19h-320v-320q0-26-19-45t-45-19h-128q-26 0-45 19t-19 45v320h-320q-26 0-45 19t-19 45v128q0 26 19 45t45 19h320v320q0 26 19 45t45 19h128q26 0 45-19t19-45v-320h320q26 0 45-19t19-45zm256-544v960q0 119-84.5 203.5t-203.5 84.5h-960q-119 0-203.5-84.5t-84.5-203.5v-960q0-119 84.5-203.5t203.5-84.5h960q119 0 203.5 84.5t84.5 203.5z\"/></svg>\n</span>\n    \n            <span class=\"trace-class\"><abbr title=\"Symfony\\Component\\HttpKernel\\HttpKernel\">HttpKernel</abbr></span><span class=\"trace-type\">-&gt;</span><span class=\"trace-method\">handleRaw</span><span class=\"trace-arguments\">(<em>object</em>(<abbr title=\"Symfony\\Component\\HttpFoundation\\Request\">Request</abbr>), 1)</span>\n    \n                                    \n        <span class=\"block trace-file-path\">\n            in\n            <a href=\"http://www.handsometravel.dev/app_dev.php/_profiler/open?file=vendor/symfony/symfony/src/Symfony/Component/HttpKernel/HttpKernel.php&amp;line=68#line68\">vendor/symfony/symfony/src/Symfony/Component/HttpKernel/<strong>HttpKernel.php</strong></a>\n            (line 68)\n        </span>\n    </div>\n    <div id=\"trace-html-1-16\" class=\"trace-code sf-toggle-content\">\n        <ol start=\"63\"><li><a class=\"anchor\" name=\"line63\"></a><code><span style=\"color: #969896\">&nbsp;&nbsp;&nbsp;&nbsp;</span><span style=\"color: #a71d5d\">public&nbsp;function&nbsp;</span><span style=\"color: #222222\">handle</span><span style=\"color: #a71d5d\">(</span><span style=\"color: #222222\">Request&nbsp;$request</span><span style=\"color: #a71d5d\">,&nbsp;</span><span style=\"color: #222222\">$type&nbsp;</span><span style=\"color: #a71d5d\">=&nbsp;</span><span style=\"color: #222222\">HttpKernelInterface</span><span style=\"color: #a71d5d\">::</span><span style=\"color: #222222\">MASTER_REQUEST</span><span style=\"color: #a71d5d\">,&nbsp;</span><span style=\"color: #222222\">$catch&nbsp;</span><span style=\"color: #a71d5d\">=&nbsp;</span><span style=\"color: #222222\">true</span><span style=\"color: #a71d5d\">)</span></span></code></li>\n<li><a class=\"anchor\" name=\"line64\"></a><code><span style=\"color: #a71d5d\">&nbsp;&nbsp;&nbsp;&nbsp;{</span></span></code></li>\n<li><a class=\"anchor\" name=\"line65\"></a><code><span style=\"color: #a71d5d\">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span><span style=\"color: #222222\">$request</span><span style=\"color: #a71d5d\">-&gt;</span><span style=\"color: #222222\">headers</span><span style=\"color: #a71d5d\">-&gt;</span><span style=\"color: #222222\">set</span><span style=\"color: #a71d5d\">(</span><span style=\"color: #183691\">'X-Php-Ob-Level'</span><span style=\"color: #a71d5d\">,&nbsp;</span><span style=\"color: #222222\">ob_get_level</span><span style=\"color: #a71d5d\">());</span></span></code></li>\n<li><a class=\"anchor\" name=\"line66\"></a><code><span style=\"color: #a71d5d\"></span></span></code></li>\n<li><a class=\"anchor\" name=\"line67\"></a><code><span style=\"color: #a71d5d\">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;try&nbsp;{</span></span></code></li>\n<li class=\"selected\"><a class=\"anchor\" name=\"line68\"></a><code><span style=\"color: #a71d5d\">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;return&nbsp;</span><span style=\"color: #222222\">$this</span><span style=\"color: #a71d5d\">-&gt;</span><span style=\"color: #222222\">handleRaw</span><span style=\"color: #a71d5d\">(</span><span style=\"color: #222222\">$request</span><span style=\"color: #a71d5d\">,&nbsp;</span><span style=\"color: #222222\">$type</span><span style=\"color: #a71d5d\">);</span></span></code></li>\n<li><a class=\"anchor\" name=\"line69\"></a><code><span style=\"color: #a71d5d\">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;}&nbsp;catch&nbsp;(\\</span><span style=\"color: #222222\">Exception&nbsp;$e</span><span style=\"color: #a71d5d\">)&nbsp;{</span></span></code></li>\n<li><a class=\"anchor\" name=\"line70\"></a><code><span style=\"color: #a71d5d\">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;if&nbsp;(</span><span style=\"color: #222222\">$e&nbsp;</span><span style=\"color: #a71d5d\">instanceof&nbsp;</span><span style=\"color: #222222\">RequestExceptionInterface</span><span style=\"color: #a71d5d\">)&nbsp;{</span></span></code></li>\n<li><a class=\"anchor\" name=\"line71\"></a><code><span style=\"color: #a71d5d\">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span><span style=\"color: #222222\">$e&nbsp;</span><span style=\"color: #a71d5d\">=&nbsp;new&nbsp;</span><span style=\"color: #222222\">BadRequestHttpException</span><span style=\"color: #a71d5d\">(</span><span style=\"color: #222222\">$e</span><span style=\"color: #a71d5d\">-&gt;</span><span style=\"color: #222222\">getMessage</span><span style=\"color: #a71d5d\">(),&nbsp;</span><span style=\"color: #222222\">$e</span><span style=\"color: #a71d5d\">);</span></span></code></li>\n<li><a class=\"anchor\" name=\"line72\"></a><code><span style=\"color: #a71d5d\">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;}</span></span></code></li>\n<li><a class=\"anchor\" name=\"line73\"></a><code><span style=\"color: #a71d5d\">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;if&nbsp;(</span><span style=\"color: #222222\">false&nbsp;</span><span style=\"color: #a71d5d\">===&nbsp;</span><span style=\"color: #222222\">$catch</span><span style=\"color: #a71d5d\">)&nbsp;{</span></span></code></li></ol>\n    </div>\n\n            </div>\n                                            <div class=\"trace-line\">\n                <div class=\"trace-line-header break-long-words sf-toggle\" data-toggle-selector=\"#trace-html-1-17\" data-toggle-initial=\"\">\n            <span class=\"icon icon-close\"><svg width=\"1792\" height=\"1792\" viewBox=\"0 0 1792 1792\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M1408 960V832q0-26-19-45t-45-19H448q-26 0-45 19t-19 45v128q0 26 19 45t45 19h896q26 0 45-19t19-45zm256-544v960q0 119-84.5 203.5T1376 1664H416q-119 0-203.5-84.5T128 1376V416q0-119 84.5-203.5T416 128h960q119 0 203.5 84.5T1664 416z\"/></svg>\n</span>\n        <span class=\"icon icon-open\"><svg width=\"1792\" height=\"1792\" viewBox=\"0 0 1792 1792\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M1408 960v-128q0-26-19-45t-45-19h-320v-320q0-26-19-45t-45-19h-128q-26 0-45 19t-19 45v320h-320q-26 0-45 19t-19 45v128q0 26 19 45t45 19h320v320q0 26 19 45t45 19h128q26 0 45-19t19-45v-320h320q26 0 45-19t19-45zm256-544v960q0 119-84.5 203.5t-203.5 84.5h-960q-119 0-203.5-84.5t-84.5-203.5v-960q0-119 84.5-203.5t203.5-84.5h960q119 0 203.5 84.5t84.5 203.5z\"/></svg>\n</span>\n    \n            <span class=\"trace-class\"><abbr title=\"Symfony\\Component\\HttpKernel\\HttpKernel\">HttpKernel</abbr></span><span class=\"trace-type\">-&gt;</span><span class=\"trace-method\">handle</span><span class=\"trace-arguments\">(<em>object</em>(<abbr title=\"Symfony\\Component\\HttpFoundation\\Request\">Request</abbr>), 1, <em>true</em>)</span>\n    \n                                    \n        <span class=\"block trace-file-path\">\n            in\n            <a href=\"http://www.handsometravel.dev/app_dev.php/_profiler/open?file=vendor/symfony/symfony/src/Symfony/Component/HttpKernel/Kernel.php&amp;line=169#line169\">vendor/symfony/symfony/src/Symfony/Component/HttpKernel/<strong>Kernel.php</strong></a>\n            (line 169)\n        </span>\n    </div>\n    <div id=\"trace-html-1-17\" class=\"trace-code sf-toggle-content\">\n        <ol start=\"164\"><li><a class=\"anchor\" name=\"line164\"></a><code><span style=\"color: #a71d5d\">&nbsp;&nbsp;&nbsp;&nbsp;{</span></span></code></li>\n<li><a class=\"anchor\" name=\"line165\"></a><code><span style=\"color: #a71d5d\">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;if&nbsp;(</span><span style=\"color: #222222\">false&nbsp;</span><span style=\"color: #a71d5d\">===&nbsp;</span><span style=\"color: #222222\">$this</span><span style=\"color: #a71d5d\">-&gt;</span><span style=\"color: #222222\">booted</span><span style=\"color: #a71d5d\">)&nbsp;{</span></span></code></li>\n<li><a class=\"anchor\" name=\"line166\"></a><code><span style=\"color: #a71d5d\">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span><span style=\"color: #222222\">$this</span><span style=\"color: #a71d5d\">-&gt;</span><span style=\"color: #222222\">boot</span><span style=\"color: #a71d5d\">();</span></span></code></li>\n<li><a class=\"anchor\" name=\"line167\"></a><code><span style=\"color: #a71d5d\">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;}</span></span></code></li>\n<li><a class=\"anchor\" name=\"line168\"></a><code><span style=\"color: #a71d5d\"></span></span></code></li>\n<li class=\"selected\"><a class=\"anchor\" name=\"line169\"></a><code><span style=\"color: #a71d5d\">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;return&nbsp;</span><span style=\"color: #222222\">$this</span><span style=\"color: #a71d5d\">-&gt;</span><span style=\"color: #222222\">getHttpKernel</span><span style=\"color: #a71d5d\">()-&gt;</span><span style=\"color: #222222\">handle</span><span style=\"color: #a71d5d\">(</span><span style=\"color: #222222\">$request</span><span style=\"color: #a71d5d\">,&nbsp;</span><span style=\"color: #222222\">$type</span><span style=\"color: #a71d5d\">,&nbsp;</span><span style=\"color: #222222\">$catch</span><span style=\"color: #a71d5d\">);</span></span></code></li>\n<li><a class=\"anchor\" name=\"line170\"></a><code><span style=\"color: #a71d5d\">&nbsp;&nbsp;&nbsp;&nbsp;}</span></span></code></li>\n<li><a class=\"anchor\" name=\"line171\"></a><code><span style=\"color: #a71d5d\"></span></span></code></li>\n<li><a class=\"anchor\" name=\"line172\"></a><code><span style=\"color: #a71d5d\">&nbsp;&nbsp;&nbsp;&nbsp;</span><span style=\"color: #969896\">/**</span></span></code></li>\n<li><a class=\"anchor\" name=\"line173\"></a><code><span style=\"color: #969896\">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;*&nbsp;Gets&nbsp;a&nbsp;HTTP&nbsp;kernel&nbsp;from&nbsp;the&nbsp;container.</span></span></code></li>\n<li><a class=\"anchor\" name=\"line174\"></a><code><span style=\"color: #969896\">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;*</span></span></code></li></ol>\n    </div>\n\n            </div>\n                                            <div class=\"trace-line\">\n                <div class=\"trace-line-header break-long-words sf-toggle\" data-toggle-selector=\"#trace-html-1-18\" data-toggle-initial=\"\">\n            <span class=\"icon icon-close\"><svg width=\"1792\" height=\"1792\" viewBox=\"0 0 1792 1792\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M1408 960V832q0-26-19-45t-45-19H448q-26 0-45 19t-19 45v128q0 26 19 45t45 19h896q26 0 45-19t19-45zm256-544v960q0 119-84.5 203.5T1376 1664H416q-119 0-203.5-84.5T128 1376V416q0-119 84.5-203.5T416 128h960q119 0 203.5 84.5T1664 416z\"/></svg>\n</span>\n        <span class=\"icon icon-open\"><svg width=\"1792\" height=\"1792\" viewBox=\"0 0 1792 1792\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M1408 960v-128q0-26-19-45t-45-19h-320v-320q0-26-19-45t-45-19h-128q-26 0-45 19t-19 45v320h-320q-26 0-45 19t-19 45v128q0 26 19 45t45 19h320v320q0 26 19 45t45 19h128q26 0 45-19t19-45v-320h320q26 0 45-19t19-45zm256-544v960q0 119-84.5 203.5t-203.5 84.5h-960q-119 0-203.5-84.5t-84.5-203.5v-960q0-119 84.5-203.5t203.5-84.5h960q119 0 203.5 84.5t84.5 203.5z\"/></svg>\n</span>\n    \n            <span class=\"trace-class\"><abbr title=\"Symfony\\Component\\HttpKernel\\Kernel\">Kernel</abbr></span><span class=\"trace-type\">-&gt;</span><span class=\"trace-method\">handle</span><span class=\"trace-arguments\">(<em>object</em>(<abbr title=\"Symfony\\Component\\HttpFoundation\\Request\">Request</abbr>))</span>\n    \n                                    \n        <span class=\"block trace-file-path\">\n            in\n            <a href=\"http://www.handsometravel.dev/app_dev.php/_profiler/open?file=web/app_dev.php&amp;line=31#line31\">web/<strong>app_dev.php</strong></a>\n            (line 31)\n        </span>\n    </div>\n    <div id=\"trace-html-1-18\" class=\"trace-code sf-toggle-content\">\n        <ol start=\"26\"><li><a class=\"anchor\" name=\"line26\"></a><code><span style=\"color: #a71d5d\"></span><span style=\"color: #222222\">Debug</span><span style=\"color: #a71d5d\">::</span><span style=\"color: #222222\">enable</span><span style=\"color: #a71d5d\">();</span></span></code></li>\n<li><a class=\"anchor\" name=\"line27\"></a><code><span style=\"color: #a71d5d\"></span></span></code></li>\n<li><a class=\"anchor\" name=\"line28\"></a><code><span style=\"color: #a71d5d\"></span><span style=\"color: #222222\">$kernel&nbsp;</span><span style=\"color: #a71d5d\">=&nbsp;new&nbsp;</span><span style=\"color: #222222\">AppKernel</span><span style=\"color: #a71d5d\">(</span><span style=\"color: #183691\">'dev'</span><span style=\"color: #a71d5d\">,&nbsp;</span><span style=\"color: #222222\">true</span><span style=\"color: #a71d5d\">);</span></span></code></li>\n<li><a class=\"anchor\" name=\"line29\"></a><code><span style=\"color: #a71d5d\"></span><span style=\"color: #969896\">//$kernel-&gt;loadClassCache();&nbsp;//&nbsp;Deprecated&nbsp;since&nbsp;Symfony&nbsp;3.3</span></span></code></li>\n<li><a class=\"anchor\" name=\"line30\"></a><code><span style=\"color: #969896\"></span><span style=\"color: #222222\">$request&nbsp;</span><span style=\"color: #a71d5d\">=&nbsp;</span><span style=\"color: #222222\">Request</span><span style=\"color: #a71d5d\">::</span><span style=\"color: #222222\">createFromGlobals</span><span style=\"color: #a71d5d\">();</span></span></code></li>\n<li class=\"selected\"><a class=\"anchor\" name=\"line31\"></a><code><span style=\"color: #a71d5d\"></span><span style=\"color: #222222\">$response&nbsp;</span><span style=\"color: #a71d5d\">=&nbsp;</span><span style=\"color: #222222\">$kernel</span><span style=\"color: #a71d5d\">-&gt;</span><span style=\"color: #222222\">handle</span><span style=\"color: #a71d5d\">(</span><span style=\"color: #222222\">$request</span><span style=\"color: #a71d5d\">);</span></span></code></li>\n<li><a class=\"anchor\" name=\"line32\"></a><code><span style=\"color: #a71d5d\"></span><span style=\"color: #222222\">$response</span><span style=\"color: #a71d5d\">-&gt;</span><span style=\"color: #222222\">send</span><span style=\"color: #a71d5d\">();</span></span></code></li>\n<li><a class=\"anchor\" name=\"line33\"></a><code><span style=\"color: #a71d5d\"></span><span style=\"color: #222222\">$kernel</span><span style=\"color: #a71d5d\">-&gt;</span><span style=\"color: #222222\">terminate</span><span style=\"color: #a71d5d\">(</span><span style=\"color: #222222\">$request</span><span style=\"color: #a71d5d\">,&nbsp;</span><span style=\"color: #222222\">$response</span><span style=\"color: #a71d5d\">);</span></span></code></li>\n<li><a class=\"anchor\" name=\"line34\"></a><code><span style=\"color: #a71d5d\"></span>\n</span></code></li></ol>\n    </div>\n\n            </div>\n                </div>\n    </div>\n</div>\n\n                            </div>\n        </div>\n\n                <div class=\"tab \">\n            <h3 class=\"tab-title\">\n                Logs\n                <span class=\"badge status-error\">1</span>            </h3>\n\n            <div class=\"tab-content\">\n                                    \n<table class=\"logs\">\n    <thead>\n        <tr>\n            <th>Level</th>\n            <th>Channel</th>            <th class=\"full-width\">Message</th>\n        </tr>\n    </thead>\n\n    <tbody>\n                                                    <tr class=\"status-normal\">\n            <td class=\"text-small\" nowrap>\n                <span class=\"colored text-bold\">INFO</span>\n                <span class=\"text-muted newline\">19:46:01</span>\n            </td>\n                            <td class=\"text-small text-bold nowrap\">\n                    request\n                </td>\n                        <td>Matched route &quot;_bck__user__user_group__edit&quot;.</td>\n        </tr>\n                                                    <tr class=\"status-normal\">\n            <td class=\"text-small\" nowrap>\n                <span class=\"colored text-bold\">DEBUG</span>\n                <span class=\"text-muted newline\">19:46:01</span>\n            </td>\n                            <td class=\"text-small text-bold nowrap\">\n                    security\n                </td>\n                        <td>Read existing security token from the session.</td>\n        </tr>\n                                                    <tr class=\"status-normal\">\n            <td class=\"text-small\" nowrap>\n                <span class=\"colored text-bold\">DEBUG</span>\n                <span class=\"text-muted newline\">19:46:01</span>\n            </td>\n                            <td class=\"text-small text-bold nowrap\">\n                    doctrine\n                </td>\n                        <td>SELECT t0.name AS name_1, t0.dbHost AS dbHost_2, t0.dbName AS dbName_3, t0.dbUsername AS dbUsername_4, t0.dbPassword AS dbPassword_5, t0.id AS id_6, t0.insertTime AS insertTime_7, t0.insertUser AS insertUser_8, t0.isEnabled AS isEnabled_9 FROM wo_app.app_system t0 WHERE t0.id = ?</td>\n        </tr>\n                                                    <tr class=\"status-normal\">\n            <td class=\"text-small\" nowrap>\n                <span class=\"colored text-bold\">DEBUG</span>\n                <span class=\"text-muted newline\">19:46:01</span>\n            </td>\n                            <td class=\"text-small text-bold nowrap\">\n                    doctrine\n                </td>\n                        <td>SELECT u0_.username AS username_0, u0_.password AS password_1, u0_.role AS role_2, u0_.isActive AS isActive_3, u0_.isSent AS isSent_4, u0_.id AS id_5, u0_.insertTime AS insertTime_6, u0_.insertUser AS insertUser_7, u0_.isEnabled AS isEnabled_8, u0_.fk_entity AS fk_entity_9, u0_.fkApp_language AS fkApp_language_10 FROM user u0_ INNER JOIN entity e1_ ON u0_.fk_entity = e1_.id AND (e1_.isEnabled = 1) WHERE u0_.username = ? AND u0_.password &lt;&gt; ?</td>\n        </tr>\n                                                    <tr class=\"status-normal\">\n            <td class=\"text-small\" nowrap>\n                <span class=\"colored text-bold\">DEBUG</span>\n                <span class=\"text-muted newline\">19:46:01</span>\n            </td>\n                            <td class=\"text-small text-bold nowrap\">\n                    security\n                </td>\n                        <td>User was reloaded from a user provider.</td>\n        </tr>\n                                                    <tr class=\"status-normal\">\n            <td class=\"text-small\" nowrap>\n                <span class=\"colored text-bold\">DEBUG</span>\n                <span class=\"text-muted newline\">19:46:01</span>\n            </td>\n                            <td class=\"text-small text-bold nowrap\">\n                    event\n                </td>\n                        <td>Notified event &quot;kernel.request&quot; to listener &quot;Symfony\\Component\\HttpKernel\\EventListener\\DebugHandlersListener::configure&quot;.</td>\n        </tr>\n                                                    <tr class=\"status-normal\">\n            <td class=\"text-small\" nowrap>\n                <span class=\"colored text-bold\">DEBUG</span>\n                <span class=\"text-muted newline\">19:46:01</span>\n            </td>\n                            <td class=\"text-small text-bold nowrap\">\n                    event\n                </td>\n                        <td>Notified event &quot;kernel.request&quot; to listener &quot;Symfony\\Component\\HttpKernel\\EventListener\\ValidateRequestListener::onKernelRequest&quot;.</td>\n        </tr>\n                                                    <tr class=\"status-normal\">\n            <td class=\"text-small\" nowrap>\n                <span class=\"colored text-bold\">DEBUG</span>\n                <span class=\"text-muted newline\">19:46:01</span>\n            </td>\n                            <td class=\"text-small text-bold nowrap\">\n                    event\n                </td>\n                        <td>Notified event &quot;kernel.request&quot; to listener &quot;Symfony\\Component\\HttpKernel\\EventListener\\SessionListener::onKernelRequest&quot;.</td>\n        </tr>\n                                                    <tr class=\"status-normal\">\n            <td class=\"text-small\" nowrap>\n                <span class=\"colored text-bold\">DEBUG</span>\n                <span class=\"text-muted newline\">19:46:01</span>\n            </td>\n                            <td class=\"text-small text-bold nowrap\">\n                    event\n                </td>\n                        <td>Notified event &quot;kernel.request&quot; to listener &quot;Symfony\\Component\\HttpKernel\\EventListener\\FragmentListener::onKernelRequest&quot;.</td>\n        </tr>\n                                                    <tr class=\"status-normal\">\n            <td class=\"text-small\" nowrap>\n                <span class=\"colored text-bold\">DEBUG</span>\n                <span class=\"text-muted newline\">19:46:01</span>\n            </td>\n                            <td class=\"text-small text-bold nowrap\">\n                    event\n                </td>\n                        <td>Notified event &quot;kernel.request&quot; to listener &quot;Symfony\\Component\\HttpKernel\\EventListener\\RouterListener::onKernelRequest&quot;.</td>\n        </tr>\n                                                    <tr class=\"status-normal\">\n            <td class=\"text-small\" nowrap>\n                <span class=\"colored text-bold\">DEBUG</span>\n                <span class=\"text-muted newline\">19:46:01</span>\n            </td>\n                            <td class=\"text-small text-bold nowrap\">\n                    event\n                </td>\n                        <td>Notified event &quot;kernel.request&quot; to listener &quot;Symfony\\Bundle\\FrameworkBundle\\EventListener\\ResolveControllerNameSubscriber::onKernelRequest&quot;.</td>\n        </tr>\n                                                    <tr class=\"status-normal\">\n            <td class=\"text-small\" nowrap>\n                <span class=\"colored text-bold\">DEBUG</span>\n                <span class=\"text-muted newline\">19:46:01</span>\n            </td>\n                            <td class=\"text-small text-bold nowrap\">\n                    event\n                </td>\n                        <td>Notified event &quot;kernel.request&quot; to listener &quot;Symfony\\Component\\HttpKernel\\EventListener\\LocaleListener::onKernelRequest&quot;.</td>\n        </tr>\n                                                    <tr class=\"status-normal\">\n            <td class=\"text-small\" nowrap>\n                <span class=\"colored text-bold\">DEBUG</span>\n                <span class=\"text-muted newline\">19:46:01</span>\n            </td>\n                            <td class=\"text-small text-bold nowrap\">\n                    event\n                </td>\n                        <td>Notified event &quot;kernel.request&quot; to listener &quot;Symfony\\Bundle\\SecurityBundle\\EventListener\\FirewallListener::onKernelRequest&quot;.</td>\n        </tr>\n                                                    <tr class=\"status-normal\">\n            <td class=\"text-small\" nowrap>\n                <span class=\"colored text-bold\">DEBUG</span>\n                <span class=\"text-muted newline\">19:46:01</span>\n            </td>\n                            <td class=\"text-small text-bold nowrap\">\n                    event\n                </td>\n                        <td>Notified event &quot;kernel.request&quot; to listener &quot;Symfony\\Bundle\\AsseticBundle\\EventListener\\RequestListener::onKernelRequest&quot;.</td>\n        </tr>\n                                                    <tr class=\"status-normal\">\n            <td class=\"text-small\" nowrap>\n                <span class=\"colored text-bold\">DEBUG</span>\n                <span class=\"text-muted newline\">19:46:01</span>\n            </td>\n                            <td class=\"text-small text-bold nowrap\">\n                    event\n                </td>\n                        <td>Notified event &quot;kernel.controller&quot; to listener &quot;Symfony\\Bundle\\FrameworkBundle\\DataCollector\\RouterDataCollector::onKernelController&quot;.</td>\n        </tr>\n                                                    <tr class=\"status-normal\">\n            <td class=\"text-small\" nowrap>\n                <span class=\"colored text-bold\">DEBUG</span>\n                <span class=\"text-muted newline\">19:46:01</span>\n            </td>\n                            <td class=\"text-small text-bold nowrap\">\n                    event\n                </td>\n                        <td>Notified event &quot;kernel.controller&quot; to listener &quot;Symfony\\Bundle\\FrameworkBundle\\DataCollector\\RequestDataCollector::onKernelController&quot;.</td>\n        </tr>\n                                                    <tr class=\"status-normal\">\n            <td class=\"text-small\" nowrap>\n                <span class=\"colored text-bold\">DEBUG</span>\n                <span class=\"text-muted newline\">19:46:01</span>\n            </td>\n                            <td class=\"text-small text-bold nowrap\">\n                    event\n                </td>\n                        <td>Notified event &quot;kernel.controller&quot; to listener &quot;Sensio\\Bundle\\FrameworkExtraBundle\\EventListener\\ControllerListener::onKernelController&quot;.</td>\n        </tr>\n                                                    <tr class=\"status-normal\">\n            <td class=\"text-small\" nowrap>\n                <span class=\"colored text-bold\">DEBUG</span>\n                <span class=\"text-muted newline\">19:46:01</span>\n            </td>\n                            <td class=\"text-small text-bold nowrap\">\n                    event\n                </td>\n                        <td>Notified event &quot;kernel.controller&quot; to listener &quot;Sensio\\Bundle\\FrameworkExtraBundle\\EventListener\\ParamConverterListener::onKernelController&quot;.</td>\n        </tr>\n                                                    <tr class=\"status-normal\">\n            <td class=\"text-small\" nowrap>\n                <span class=\"colored text-bold\">DEBUG</span>\n                <span class=\"text-muted newline\">19:46:01</span>\n            </td>\n                            <td class=\"text-small text-bold nowrap\">\n                    event\n                </td>\n                        <td>Notified event &quot;kernel.controller&quot; to listener &quot;Sensio\\Bundle\\FrameworkExtraBundle\\EventListener\\HttpCacheListener::onKernelController&quot;.</td>\n        </tr>\n                                                    <tr class=\"status-normal\">\n            <td class=\"text-small\" nowrap>\n                <span class=\"colored text-bold\">DEBUG</span>\n                <span class=\"text-muted newline\">19:46:01</span>\n            </td>\n                            <td class=\"text-small text-bold nowrap\">\n                    event\n                </td>\n                        <td>Notified event &quot;kernel.controller&quot; to listener &quot;Sensio\\Bundle\\FrameworkExtraBundle\\EventListener\\SecurityListener::onKernelController&quot;.</td>\n        </tr>\n                                                    <tr class=\"status-normal\">\n            <td class=\"text-small\" nowrap>\n                <span class=\"colored text-bold\">DEBUG</span>\n                <span class=\"text-muted newline\">19:46:01</span>\n            </td>\n                            <td class=\"text-small text-bold nowrap\">\n                    event\n                </td>\n                        <td>Notified event &quot;kernel.controller&quot; to listener &quot;Sensio\\Bundle\\FrameworkExtraBundle\\EventListener\\TemplateListener::onKernelController&quot;.</td>\n        </tr>\n                                        <tr class=\"status-error\">\n            <td class=\"text-small\" nowrap>\n                <span class=\"colored text-bold\">CRITICAL</span>\n                <span class=\"text-muted newline\">19:46:01</span>\n            </td>\n                            <td class=\"text-small text-bold nowrap\">\n                    request\n                </td>\n                        <td>Uncaught PHP Exception Doctrine\\Common\\Persistence\\Mapping\\MappingException: &quot;Class 'Bck\\AdminBundle\\Entity\\User' does not exist&quot; at /usr/share/nginx/html/weboffice/vendor/doctrine/common/lib/Doctrine/Common/Persistence/Mapping/MappingException.php line 96</td>\n        </tr>\n                                                    <tr class=\"status-normal\">\n            <td class=\"text-small\" nowrap>\n                <span class=\"colored text-bold\">DEBUG</span>\n                <span class=\"text-muted newline\">19:46:01</span>\n            </td>\n                            <td class=\"text-small text-bold nowrap\">\n                    event\n                </td>\n                        <td>Notified event &quot;kernel.request&quot; to listener &quot;Symfony\\Component\\HttpKernel\\EventListener\\DebugHandlersListener::configure&quot;.</td>\n        </tr>\n                                                    <tr class=\"status-normal\">\n            <td class=\"text-small\" nowrap>\n                <span class=\"colored text-bold\">DEBUG</span>\n                <span class=\"text-muted newline\">19:46:01</span>\n            </td>\n                            <td class=\"text-small text-bold nowrap\">\n                    event\n                </td>\n                        <td>Notified event &quot;kernel.request&quot; to listener &quot;Symfony\\Component\\HttpKernel\\EventListener\\ValidateRequestListener::onKernelRequest&quot;.</td>\n        </tr>\n                                                    <tr class=\"status-normal\">\n            <td class=\"text-small\" nowrap>\n                <span class=\"colored text-bold\">DEBUG</span>\n                <span class=\"text-muted newline\">19:46:01</span>\n            </td>\n                            <td class=\"text-small text-bold nowrap\">\n                    event\n                </td>\n                        <td>Notified event &quot;kernel.request&quot; to listener &quot;Symfony\\Component\\HttpKernel\\EventListener\\SessionListener::onKernelRequest&quot;.</td>\n        </tr>\n                                                    <tr class=\"status-normal\">\n            <td class=\"text-small\" nowrap>\n                <span class=\"colored text-bold\">DEBUG</span>\n                <span class=\"text-muted newline\">19:46:01</span>\n            </td>\n                            <td class=\"text-small text-bold nowrap\">\n                    event\n                </td>\n                        <td>Notified event &quot;kernel.request&quot; to listener &quot;Symfony\\Component\\HttpKernel\\EventListener\\FragmentListener::onKernelRequest&quot;.</td>\n        </tr>\n                                                    <tr class=\"status-normal\">\n            <td class=\"text-small\" nowrap>\n                <span class=\"colored text-bold\">DEBUG</span>\n                <span class=\"text-muted newline\">19:46:01</span>\n            </td>\n                            <td class=\"text-small text-bold nowrap\">\n                    event\n                </td>\n                        <td>Notified event &quot;kernel.request&quot; to listener &quot;Symfony\\Component\\HttpKernel\\EventListener\\RouterListener::onKernelRequest&quot;.</td>\n        </tr>\n                                                    <tr class=\"status-normal\">\n            <td class=\"text-small\" nowrap>\n                <span class=\"colored text-bold\">DEBUG</span>\n                <span class=\"text-muted newline\">19:46:01</span>\n            </td>\n                            <td class=\"text-small text-bold nowrap\">\n                    event\n                </td>\n                        <td>Notified event &quot;kernel.request&quot; to listener &quot;Symfony\\Bundle\\FrameworkBundle\\EventListener\\ResolveControllerNameSubscriber::onKernelRequest&quot;.</td>\n        </tr>\n                                                    <tr class=\"status-normal\">\n            <td class=\"text-small\" nowrap>\n                <span class=\"colored text-bold\">DEBUG</span>\n                <span class=\"text-muted newline\">19:46:01</span>\n            </td>\n                            <td class=\"text-small text-bold nowrap\">\n                    event\n                </td>\n                        <td>Notified event &quot;kernel.request&quot; to listener &quot;Symfony\\Component\\HttpKernel\\EventListener\\LocaleListener::onKernelRequest&quot;.</td>\n        </tr>\n                                                    <tr class=\"status-normal\">\n            <td class=\"text-small\" nowrap>\n                <span class=\"colored text-bold\">DEBUG</span>\n                <span class=\"text-muted newline\">19:46:01</span>\n            </td>\n                            <td class=\"text-small text-bold nowrap\">\n                    event\n                </td>\n                        <td>Notified event &quot;kernel.request&quot; to listener &quot;Symfony\\Bundle\\SecurityBundle\\EventListener\\FirewallListener::onKernelRequest&quot;.</td>\n        </tr>\n                                                    <tr class=\"status-normal\">\n            <td class=\"text-small\" nowrap>\n                <span class=\"colored text-bold\">DEBUG</span>\n                <span class=\"text-muted newline\">19:46:01</span>\n            </td>\n                            <td class=\"text-small text-bold nowrap\">\n                    event\n                </td>\n                        <td>Notified event &quot;kernel.request&quot; to listener &quot;Symfony\\Bundle\\AsseticBundle\\EventListener\\RequestListener::onKernelRequest&quot;.</td>\n        </tr>\n                                                    <tr class=\"status-normal\">\n            <td class=\"text-small\" nowrap>\n                <span class=\"colored text-bold\">DEBUG</span>\n                <span class=\"text-muted newline\">19:46:01</span>\n            </td>\n                            <td class=\"text-small text-bold nowrap\">\n                    event\n                </td>\n                        <td>Notified event &quot;kernel.controller&quot; to listener &quot;Symfony\\Bundle\\FrameworkBundle\\DataCollector\\RouterDataCollector::onKernelController&quot;.</td>\n        </tr>\n                                                    <tr class=\"status-normal\">\n            <td class=\"text-small\" nowrap>\n                <span class=\"colored text-bold\">DEBUG</span>\n                <span class=\"text-muted newline\">19:46:01</span>\n            </td>\n                            <td class=\"text-small text-bold nowrap\">\n                    event\n                </td>\n                        <td>Notified event &quot;kernel.controller&quot; to listener &quot;Symfony\\Bundle\\FrameworkBundle\\DataCollector\\RequestDataCollector::onKernelController&quot;.</td>\n        </tr>\n                                                    <tr class=\"status-normal\">\n            <td class=\"text-small\" nowrap>\n                <span class=\"colored text-bold\">DEBUG</span>\n                <span class=\"text-muted newline\">19:46:01</span>\n            </td>\n                            <td class=\"text-small text-bold nowrap\">\n                    event\n                </td>\n                        <td>Notified event &quot;kernel.controller&quot; to listener &quot;Sensio\\Bundle\\FrameworkExtraBundle\\EventListener\\ControllerListener::onKernelController&quot;.</td>\n        </tr>\n                                                    <tr class=\"status-normal\">\n            <td class=\"text-small\" nowrap>\n                <span class=\"colored text-bold\">DEBUG</span>\n                <span class=\"text-muted newline\">19:46:01</span>\n            </td>\n                            <td class=\"text-small text-bold nowrap\">\n                    event\n                </td>\n                        <td>Notified event &quot;kernel.controller&quot; to listener &quot;Sensio\\Bundle\\FrameworkExtraBundle\\EventListener\\ParamConverterListener::onKernelController&quot;.</td>\n        </tr>\n                                                    <tr class=\"status-normal\">\n            <td class=\"text-small\" nowrap>\n                <span class=\"colored text-bold\">DEBUG</span>\n                <span class=\"text-muted newline\">19:46:01</span>\n            </td>\n                            <td class=\"text-small text-bold nowrap\">\n                    event\n                </td>\n                        <td>Notified event &quot;kernel.controller&quot; to listener &quot;Sensio\\Bundle\\FrameworkExtraBundle\\EventListener\\HttpCacheListener::onKernelController&quot;.</td>\n        </tr>\n                                                    <tr class=\"status-normal\">\n            <td class=\"text-small\" nowrap>\n                <span class=\"colored text-bold\">DEBUG</span>\n                <span class=\"text-muted newline\">19:46:01</span>\n            </td>\n                            <td class=\"text-small text-bold nowrap\">\n                    event\n                </td>\n                        <td>Notified event &quot;kernel.controller&quot; to listener &quot;Sensio\\Bundle\\FrameworkExtraBundle\\EventListener\\SecurityListener::onKernelController&quot;.</td>\n        </tr>\n                                                    <tr class=\"status-normal\">\n            <td class=\"text-small\" nowrap>\n                <span class=\"colored text-bold\">DEBUG</span>\n                <span class=\"text-muted newline\">19:46:01</span>\n            </td>\n                            <td class=\"text-small text-bold nowrap\">\n                    event\n                </td>\n                        <td>Notified event &quot;kernel.controller&quot; to listener &quot;Sensio\\Bundle\\FrameworkExtraBundle\\EventListener\\TemplateListener::onKernelController&quot;.</td>\n        </tr>\n        </tbody>\n</table>\n\n                            </div>\n        </div>\n        \n        <div class=\"tab\">\n            <h3 class=\"tab-title\">\n                                    Stack Trace\n                            </h3>\n\n            <div class=\"tab-content\">\n                                    <table class=\"trace trace-as-text\">\n    <thead class=\"trace-head\">\n        <tr>\n            <th class=\"sf-toggle\" data-toggle-selector=\"#trace-text-1\" data-toggle-initial=\"display\">\n                <h3 class=\"trace-class\">\n                                        MappingException\n                    <span class=\"icon icon-close\"><svg width=\"1792\" height=\"1792\" viewBox=\"0 0 1792 1792\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M1344 800v64q0 14-9 23t-23 9H480q-14 0-23-9t-9-23v-64q0-14 9-23t23-9h832q14 0 23 9t9 23zm128 448V416q0-66-47-113t-113-47H480q-66 0-113 47t-47 113v832q0 66 47 113t113 47h832q66 0 113-47t47-113zm128-832v832q0 119-84.5 203.5T1312 1536H480q-119 0-203.5-84.5T192 1248V416q0-119 84.5-203.5T480 128h832q119 0 203.5 84.5T1600 416z\"/></svg>\n</span>\n                    <span class=\"icon icon-open\"><svg width=\"1792\" height=\"1792\" viewBox=\"0 0 1792 1792\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M1344 800v64q0 14-9 23t-23 9H960v352q0 14-9 23t-23 9h-64q-14 0-23-9t-9-23V896H480q-14 0-23-9t-9-23v-64q0-14 9-23t23-9h352V416q0-14 9-23t23-9h64q14 0 23 9t9 23v352h352q14 0 23 9t9 23zm128 448V416q0-66-47-113t-113-47H480q-66 0-113 47t-47 113v832q0 66 47 113t113 47h832q66 0 113-47t47-113zm128-832v832q0 119-84.5 203.5T1312 1536H480q-119 0-203.5-84.5T192 1248V416q0-119 84.5-203.5T480 128h832q119 0 203.5 84.5T1600 416z\"/></svg>\n</span>\n                </h3>\n            </th>\n        </tr>\n    </thead>\n\n    <tbody id=\"trace-text-1\">\n        <tr>\n            <td>\n                <pre class=\"stacktrace\">\nDoctrine\\Common\\Persistence\\Mapping\\MappingException:\nClass 'Bck\\AdminBundle\\Entity\\User' does not exist\n\n  at vendor/doctrine/common/lib/Doctrine/Common/Persistence/Mapping/MappingException.php:96\n  at Doctrine\\Common\\Persistence\\Mapping\\MappingException::nonExistingClass('Bck\\\\AdminBundle\\\\Entity\\\\User')\n     (vendor/doctrine/common/lib/Doctrine/Common/Persistence/Mapping/RuntimeReflectionService.php:41)\n  at Doctrine\\Common\\Persistence\\Mapping\\RuntimeReflectionService->getParentClasses('Bck\\\\AdminBundle\\\\Entity\\\\User')\n     (vendor/doctrine/common/lib/Doctrine/Common/Persistence/Mapping/AbstractClassMetadataFactory.php:281)\n  at Doctrine\\Common\\Persistence\\Mapping\\AbstractClassMetadataFactory->getParentClasses('Bck\\\\AdminBundle\\\\Entity\\\\User')\n     (vendor/doctrine/common/lib/Doctrine/Common/Persistence/Mapping/AbstractClassMetadataFactory.php:311)\n  at Doctrine\\Common\\Persistence\\Mapping\\AbstractClassMetadataFactory->loadMetadata('Bck\\\\AdminBundle\\\\Entity\\\\User')\n     (vendor/doctrine/orm/lib/Doctrine/ORM/Mapping/ClassMetadataFactory.php:78)\n  at Doctrine\\ORM\\Mapping\\ClassMetadataFactory->loadMetadata('Bck\\\\AdminBundle\\\\Entity\\\\User')\n     (vendor/doctrine/common/lib/Doctrine/Common/Persistence/Mapping/AbstractClassMetadataFactory.php:216)\n  at Doctrine\\Common\\Persistence\\Mapping\\AbstractClassMetadataFactory->getMetadataFor('BckAdminBundle:User')\n     (vendor/doctrine/orm/lib/Doctrine/ORM/EntityManager.php:281)\n  at Doctrine\\ORM\\EntityManager->getClassMetadata('BckAdminBundle:User')\n     (vendor/doctrine/doctrine-bundle/Repository/ContainerRepositoryFactory.php:55)\n  at Doctrine\\Bundle\\DoctrineBundle\\Repository\\ContainerRepositoryFactory->getRepository(<em>object</em>(<abbr title=\"Doctrine\\ORM\\EntityManager\">EntityManager</abbr>), 'BckAdminBundle:User')\n     (vendor/doctrine/orm/lib/Doctrine/ORM/EntityManager.php:698)\n  at Doctrine\\ORM\\EntityManager->getRepository('BckAdminBundle:User')\n     (var/cache/dev/appDevDebugProjectContainer.php:7119)\n  at DoctrineORMEntityManager_00000000151d060200000000156807f14cc1a05bd0f30c0a85374ba86f1604d4->getRepository('BckAdminBundle:User')\n     (src/AppBundle/Service/BaseRepositoryService.php:50)\n  at AppBundle\\Service\\BaseRepositoryService->execute('findOneById', <em>array</em>(85))\n     (src/Bck/UserBundle/Controller/UserGroupController.php:174)\n  at Bck\\UserBundle\\Controller\\UserGroupController->newObject()\n     (src/AppBundle/Controller/BaseEntityController.php:1607)\n  at AppBundle\\Controller\\BaseEntityController->getObject(<em>null</em>)\n     (src/AppBundle/Controller/BaseEntityController.php:568)\n  at AppBundle\\Controller\\BaseEntityController->editAction(<em>object</em>(<abbr title=\"Symfony\\Component\\HttpFoundation\\Request\">Request</abbr>), <em>null</em>)\n     (src/Bck/UserBundle/Controller/UserGroupController.php:122)\n  at Bck\\UserBundle\\Controller\\UserGroupController->editAction(<em>object</em>(<abbr title=\"Symfony\\Component\\HttpFoundation\\Request\">Request</abbr>), <em>null</em>)\n     (vendor/symfony/symfony/src/Symfony/Component/HttpKernel/HttpKernel.php:151)\n  at Symfony\\Component\\HttpKernel\\HttpKernel->handleRaw(<em>object</em>(<abbr title=\"Symfony\\Component\\HttpFoundation\\Request\">Request</abbr>), 1)\n     (vendor/symfony/symfony/src/Symfony/Component/HttpKernel/HttpKernel.php:68)\n  at Symfony\\Component\\HttpKernel\\HttpKernel->handle(<em>object</em>(<abbr title=\"Symfony\\Component\\HttpFoundation\\Request\">Request</abbr>), 1, <em>true</em>)\n     (vendor/symfony/symfony/src/Symfony/Component/HttpKernel/Kernel.php:169)\n  at Symfony\\Component\\HttpKernel\\Kernel->handle(<em>object</em>(<abbr title=\"Symfony\\Component\\HttpFoundation\\Request\">Request</abbr>))\n     (web/app_dev.php:31)\n</pre>\n\n            </td>\n        </tr>\n    </tbody>\n</table>\n\n                            </div>\n        </div>\n\n            </div>\n</div>\n        <script>/*<![CDATA[*/\n    \n    Sfjs = (function() {\n        \"use strict\";\n\n        if ('classList' in document.documentElement) {\n            var hasClass = function (el, cssClass) { return el.classList.contains(cssClass); };\n            var removeClass = function(el, cssClass) { el.classList.remove(cssClass); };\n            var addClass = function(el, cssClass) { el.classList.add(cssClass); };\n            var toggleClass = function(el, cssClass) { el.classList.toggle(cssClass); };\n        } else {\n            var hasClass = function (el, cssClass) { return el.className.match(new RegExp('\\\\b' + cssClass + '\\\\b')); };\n            var removeClass = function(el, cssClass) { el.className = el.className.replace(new RegExp('\\\\b' + cssClass + '\\\\b'), ' '); };\n            var addClass = function(el, cssClass) { if (!hasClass(el, cssClass)) { el.className += \" \" + cssClass; } };\n            var toggleClass = function(el, cssClass) { hasClass(el, cssClass) ? removeClass(el, cssClass) : addClass(el, cssClass); };\n        }\n\n        var addEventListener;\n\n        var el = document.createElement('div');\n        if (!('addEventListener' in el)) {\n            addEventListener = function (element, eventName, callback) {\n                element.attachEvent('on' + eventName, callback);\n            };\n        } else {\n            addEventListener = function (element, eventName, callback) {\n                element.addEventListener(eventName, callback, false);\n            };\n        }\n\n        return {\n            addEventListener: addEventListener,\n\n            createTabs: function() {\n                var tabGroups = document.querySelectorAll('.sf-tabs');\n\n                /* create the tab navigation for each group of tabs */\n                for (var i = 0; i < tabGroups.length; i++) {\n                    var tabs = tabGroups[i].querySelectorAll('.tab');\n                    var tabNavigation = document.createElement('ul');\n                    tabNavigation.className = 'tab-navigation';\n\n                    for (var j = 0; j < tabs.length; j++) {\n                        var tabId = 'tab-' + i + '-' + j;\n                        var tabTitle = tabs[j].querySelector('.tab-title').innerHTML;\n\n                        var tabNavigationItem = document.createElement('li');\n                        tabNavigationItem.setAttribute('data-tab-id', tabId);\n                        if (j == 0) { addClass(tabNavigationItem, 'active'); }\n                        if (hasClass(tabs[j], 'disabled')) { addClass(tabNavigationItem, 'disabled'); }\n                        tabNavigationItem.innerHTML = tabTitle;\n                        tabNavigation.appendChild(tabNavigationItem);\n\n                        var tabContent = tabs[j].querySelector('.tab-content');\n                        tabContent.parentElement.setAttribute('id', tabId);\n                    }\n\n                    tabGroups[i].insertBefore(tabNavigation, tabGroups[i].firstChild);\n                }\n\n                /* display the active tab and add the 'click' event listeners */\n                for (i = 0; i < tabGroups.length; i++) {\n                    tabNavigation = tabGroups[i].querySelectorAll('.tab-navigation li');\n\n                    for (j = 0; j < tabNavigation.length; j++) {\n                        tabId = tabNavigation[j].getAttribute('data-tab-id');\n                        document.getElementById(tabId).querySelector('.tab-title').className = 'hidden';\n\n                        if (hasClass(tabNavigation[j], 'active')) {\n                            document.getElementById(tabId).className = 'block';\n                        } else {\n                            document.getElementById(tabId).className = 'hidden';\n                        }\n\n                        tabNavigation[j].addEventListener('click', function(e) {\n                            var activeTab = e.target || e.srcElement;\n\n                            /* needed because when the tab contains HTML contents, user can click */\n                            /* on any of those elements instead of their parent '<li>' element */\n                            while (activeTab.tagName.toLowerCase() !== 'li') {\n                                activeTab = activeTab.parentNode;\n                            }\n\n                            /* get the full list of tabs through the parent of the active tab element */\n                            var tabNavigation = activeTab.parentNode.children;\n                            for (var k = 0; k < tabNavigation.length; k++) {\n                                var tabId = tabNavigation[k].getAttribute('data-tab-id');\n                                document.getElementById(tabId).className = 'hidden';\n                                removeClass(tabNavigation[k], 'active');\n                            }\n\n                            addClass(activeTab, 'active');\n                            var activeTabId = activeTab.getAttribute('data-tab-id');\n                            document.getElementById(activeTabId).className = 'block';\n                        });\n                    }\n                }\n            },\n\n            createToggles: function() {\n                var toggles = document.querySelectorAll('.sf-toggle');\n\n                for (var i = 0; i < toggles.length; i++) {\n                    var elementSelector = toggles[i].getAttribute('data-toggle-selector');\n                    var element = document.querySelector(elementSelector);\n\n                    addClass(element, 'sf-toggle-content');\n\n                    if (toggles[i].hasAttribute('data-toggle-initial') && toggles[i].getAttribute('data-toggle-initial') == 'display') {\n                        addClass(toggles[i], 'sf-toggle-on');\n                        addClass(element, 'sf-toggle-visible');\n                    } else {\n                        addClass(toggles[i], 'sf-toggle-off');\n                        addClass(element, 'sf-toggle-hidden');\n                    }\n\n                    addEventListener(toggles[i], 'click', function(e) {\n                        e.preventDefault();\n\n                        if ('' !== window.getSelection().toString()) {\n                            /* Don't do anything on text selection */\n                            return;\n                        }\n\n                        var toggle = e.target || e.srcElement;\n\n                        /* needed because when the toggle contains HTML contents, user can click */\n                        /* on any of those elements instead of their parent '.sf-toggle' element */\n                        while (!hasClass(toggle, 'sf-toggle')) {\n                            toggle = toggle.parentNode;\n                        }\n\n                        var element = document.querySelector(toggle.getAttribute('data-toggle-selector'));\n\n                        toggleClass(toggle, 'sf-toggle-on');\n                        toggleClass(toggle, 'sf-toggle-off');\n                        toggleClass(element, 'sf-toggle-hidden');\n                        toggleClass(element, 'sf-toggle-visible');\n\n                        /* the toggle doesn't change its contents when clicking on it */\n                        if (!toggle.hasAttribute('data-toggle-alt-content')) {\n                            return;\n                        }\n\n                        if (!toggle.hasAttribute('data-toggle-original-content')) {\n                            toggle.setAttribute('data-toggle-original-content', toggle.innerHTML);\n                        }\n\n                        var currentContent = toggle.innerHTML;\n                        var originalContent = toggle.getAttribute('data-toggle-original-content');\n                        var altContent = toggle.getAttribute('data-toggle-alt-content');\n                        toggle.innerHTML = currentContent !== altContent ? altContent : originalContent;\n                    });\n                }\n\n                /* Prevents from disallowing clicks on links inside toggles */\n                var toggleLinks = document.querySelectorAll('.sf-toggle a');\n                for (var i = 0; i < toggleLinks.length; i++) {\n                    addEventListener(toggleLinks[i], 'click', function(e) {\n                        e.stopPropagation();\n                    });\n                }\n            }\n        };\n    })();\n\n    Sfjs.addEventListener(document, 'DOMContentLoaded', function() {\n        Sfjs.createTabs();\n        Sfjs.createToggles();\n    });\n\n/*]]>*/</script>\n\n    </body>\n</html>\n"

/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("../../../../../src/Bck/UserBundle/Resources/public/user-group/index/ts/src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map