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

/***/ "../../../../../src/AdminBundle/Resources/public/store/detail/ts/$$_lazy_route_resource lazy recursive":
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
webpackEmptyAsyncContext.id = "../../../../../src/AdminBundle/Resources/public/store/detail/ts/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "../../../../../src/AdminBundle/Resources/public/store/detail/ts/src/contacts.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ContactsComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__AppBundle_Resources_public_accordion_ts_src_accordion_component__ = __webpack_require__("../../../../../src/AppBundle/Resources/public/accordion/ts/src/accordion.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__AppBundle_Resources_public_ts_nav_manager_nav_manager_service__ = __webpack_require__("../../../../../src/AppBundle/Resources/public/ts/nav-manager/nav-manager.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__AppBundle_Resources_public_ts_form_form_service__ = __webpack_require__("../../../../../src/AppBundle/Resources/public/ts/form/form.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__AppBundle_Resources_public_data_box_ts_src_data_box_extension_module__ = __webpack_require__("../../../../../src/AppBundle/Resources/public/data-box/ts/src/data-box.extension-module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__AppBundle_Resources_public_ts_data_service_data_service__ = __webpack_require__("../../../../../src/AppBundle/Resources/public/ts/data-service/data.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__AppBundle_Resources_public_ts_actions_actions_service__ = __webpack_require__("../../../../../src/AppBundle/Resources/public/ts/actions/actions.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__store_phone_edit_ext_module__ = __webpack_require__("../../../../../src/AdminBundle/Resources/public/store/detail/ts/src/store-phone-edit.ext-module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__store_email_edit_ext_module__ = __webpack_require__("../../../../../src/AdminBundle/Resources/public/store/detail/ts/src/store-email-edit.ext-module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__store_link_edit_ext_module__ = __webpack_require__("../../../../../src/AdminBundle/Resources/public/store/detail/ts/src/store-link-edit.ext-module.ts");
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







// StorePhone

// StoreEmail

// StoreLink

var ContactsComponent = (function (_super) {
    __extends(ContactsComponent, _super);
    function ContactsComponent(elementRef, renderer, provider, helperService, navManagerService) {
        var _this = _super.call(this, elementRef, renderer, provider || null, helperService, navManagerService) || this;
        _this._dependenciesData = (_this._helperService.getAppVar('dependency') || []);
        return _this;
    }
    /**
     * Get navigation data (needed data to lazy load container)
     * @param index (index to load)
     * @returns NavData
     */
    ContactsComponent.prototype.getNavData = function (index) {
        var data = {
            module: __WEBPACK_IMPORTED_MODULE_4__AppBundle_Resources_public_data_box_ts_src_data_box_extension_module__["a" /* DataBoxExtensionModule */],
            component: 'DataBoxComponent'
        };
        switch (index) {
            case 0:
                data['dataProvider'] = this._dependenciesData['storePhone'];
                break;
            case 1:
                data['dataProvider'] = this._dependenciesData['storeEmail'];
                break;
            case 2:
                data['dataProvider'] = this._dependenciesData['storeLink'];
                break;
        }
        return data;
    };
    /**
     * Get nav providers (to lazy load components in container with dependency injection)
     * @param index (index to load)
     * @param data (data to resolve all providers)
     * @returns {Array}
     */
    ContactsComponent.prototype.getNavProviders = function (index, data) {
        if (data === void 0) { data = null; }
        var providers = [
            __WEBPACK_IMPORTED_MODULE_3__AppBundle_Resources_public_ts_form_form_service__["a" /* FormService */],
            { provide: 'DataService', useClass: __WEBPACK_IMPORTED_MODULE_5__AppBundle_Resources_public_ts_data_service_data_service__["a" /* DataService */] },
            __WEBPACK_IMPORTED_MODULE_6__AppBundle_Resources_public_ts_actions_actions_service__["a" /* ActionsService */],
            { provide: 'DataServiceProvider', useValue: this._helperService.getDataServiceProvider(data) },
            { provide: 'Provider', useValue: this._helperService.getDataBoxProvider(data) },
            { provide: 'ActionsServiceProvider', useValue: this._helperService.getActionsServiceProvider(data) }
        ];
        switch (index) {
            case 0:
                providers.push({ provide: 'Popups', useValue: {
                        module: __WEBPACK_IMPORTED_MODULE_7__store_phone_edit_ext_module__["a" /* StorePhoneEditExtModule */],
                        component: 'StorePhoneEditComponent',
                        providers: [{ provide: 'Provider', useValue: this._helperService.getFormProvider(data) }]
                    } });
                break;
            case 1:
                providers.push({ provide: 'Popups', useValue: {
                        module: __WEBPACK_IMPORTED_MODULE_8__store_email_edit_ext_module__["a" /* StoreEmailEditExtModule */],
                        component: 'StoreEmailEditComponent',
                        providers: [{ provide: 'Provider', useValue: this._helperService.getFormProvider(data) }]
                    } });
                break;
            case 2:
                providers.push({ provide: 'Popups', useValue: {
                        module: __WEBPACK_IMPORTED_MODULE_9__store_link_edit_ext_module__["a" /* StoreLinkEditExtModule */],
                        component: 'StoreLinkEditComponent',
                        providers: [{ provide: 'Provider', useValue: this._helperService.getFormProvider(data) }]
                    } });
                break;
        }
        return providers;
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_6" /* ViewChildren */])('js_lazyLoadContainer', { read: __WEBPACK_IMPORTED_MODULE_0__angular_core__["_7" /* ViewContainerRef */] }),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["Q" /* QueryList */])
    ], ContactsComponent.prototype, "lazyLoadViewContainerRefQL", void 0);
    ContactsComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'js_contacts',
            template: __webpack_require__("../../../../../src/AdminBundle/Resources/public/store/detail/ts/templates/contacts.component.html")
        }),
        __param(2, Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["K" /* Optional */])()), __param(2, Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["w" /* Inject */])('Provider')),
        __param(3, Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["w" /* Inject */])('HelperService')),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_core__["r" /* ElementRef */],
            __WEBPACK_IMPORTED_MODULE_0__angular_core__["S" /* Renderer */], Object, Object, __WEBPACK_IMPORTED_MODULE_2__AppBundle_Resources_public_ts_nav_manager_nav_manager_service__["a" /* NavManagerService */]])
    ], ContactsComponent);
    return ContactsComponent;
}(__WEBPACK_IMPORTED_MODULE_1__AppBundle_Resources_public_accordion_ts_src_accordion_component__["a" /* AccordionComponent */]));



/***/ }),

/***/ "../../../../../src/AdminBundle/Resources/public/store/detail/ts/src/contacts.ext-module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ContactsExtModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("../../../common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__AppBundle_Resources_public_ts_search_search_module__ = __webpack_require__("../../../../../src/AppBundle/Resources/public/ts/search/search.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__contacts_component__ = __webpack_require__("../../../../../src/AdminBundle/Resources/public/store/detail/ts/src/contacts.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





var ContactsExtModule = (function () {
    function ContactsExtModule() {
    }
    ContactsExtModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* NgModule */])({
            imports: [__WEBPACK_IMPORTED_MODULE_1__angular_common__["a" /* CommonModule */], __WEBPACK_IMPORTED_MODULE_2__angular_forms__["b" /* FormsModule */], __WEBPACK_IMPORTED_MODULE_2__angular_forms__["c" /* ReactiveFormsModule */], __WEBPACK_IMPORTED_MODULE_3__AppBundle_Resources_public_ts_search_search_module__["a" /* SearchModule */]],
            declarations: [
                __WEBPACK_IMPORTED_MODULE_4__contacts_component__["a" /* ContactsComponent */]
            ],
            exports: [__WEBPACK_IMPORTED_MODULE_4__contacts_component__["a" /* ContactsComponent */]]
        })
    ], ContactsExtModule);
    return ContactsExtModule;
}());



/***/ }),

/***/ "../../../../../src/AdminBundle/Resources/public/store/detail/ts/src/main.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MainComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__AppBundle_Resources_public_modal_ts_modal_service__ = __webpack_require__("../../../../../src/AppBundle/Resources/public/modal/ts/modal.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__AppBundle_Resources_public_ts_nav_manager_nav_manager_service__ = __webpack_require__("../../../../../src/AppBundle/Resources/public/ts/nav-manager/nav-manager.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__AppBundle_Resources_public_tabs_ts_src_tabs_component__ = __webpack_require__("../../../../../src/AppBundle/Resources/public/tabs/ts/src/tabs.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__contacts_ext_module__ = __webpack_require__("../../../../../src/AdminBundle/Resources/public/store/detail/ts/src/contacts.ext-module.ts");
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




// Contacts

var MainComponent = (function (_super) {
    __extends(MainComponent, _super);
    function MainComponent(elementRef, renderer, provider, helperService, navManagerService, _modalService, viewContainerRef) {
        var _this = _super.call(this, elementRef, renderer, provider, helperService, navManagerService) || this;
        _this._modalService = _modalService;
        _this.viewContainerRef = viewContainerRef;
        _this._modalService.init(viewContainerRef);
        _this._dependenciesData = _this._helperService.getAppVar('dependency');
        return _this;
    }
    /**
     * Get navigation data (needed data to lazy load container)
     * @param index (index to load)
     * @returns NavData
     */
    MainComponent.prototype.getNavData = function (index) {
        switch (index) {
            case 0:
                return {
                    module: __WEBPACK_IMPORTED_MODULE_4__contacts_ext_module__["a" /* ContactsExtModule */],
                    component: 'ContactsComponent'
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
    MainComponent.prototype.getNavProviders = function (index, data) {
        if (data === void 0) { data = null; }
        switch (index) {
            case 0:
                return [
                    __WEBPACK_IMPORTED_MODULE_2__AppBundle_Resources_public_ts_nav_manager_nav_manager_service__["a" /* NavManagerService */]
                ];
        }
        return null;
    };
    /**
     * Lifecycle callback
     */
    MainComponent.prototype.ngAfterViewInit = function () {
        _super.prototype.ngAfterViewInit.call(this);
        // Open the first tab
        this._navManagerService.navTo(0);
    };
    MainComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: '#js_main',
            template: __webpack_require__("../../../../../src/AdminBundle/Resources/public/store/detail/ts/templates/main.component.html")
        }),
        __param(2, Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["w" /* Inject */])('Provider')),
        __param(3, Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["w" /* Inject */])('HelperService')),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_core__["r" /* ElementRef */],
            __WEBPACK_IMPORTED_MODULE_0__angular_core__["S" /* Renderer */], Object, Object, __WEBPACK_IMPORTED_MODULE_2__AppBundle_Resources_public_ts_nav_manager_nav_manager_service__["a" /* NavManagerService */],
            __WEBPACK_IMPORTED_MODULE_1__AppBundle_Resources_public_modal_ts_modal_service__["a" /* ModalService */],
            __WEBPACK_IMPORTED_MODULE_0__angular_core__["_7" /* ViewContainerRef */]])
    ], MainComponent);
    return MainComponent;
}(__WEBPACK_IMPORTED_MODULE_3__AppBundle_Resources_public_tabs_ts_src_tabs_component__["a" /* TabsComponent */]));



/***/ }),

/***/ "../../../../../src/AdminBundle/Resources/public/store/detail/ts/src/main.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MainModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__ = __webpack_require__("../../../platform-browser/esm5/platform-browser.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__AppBundle_Resources_public_ts_helper__ = __webpack_require__("../../../../../src/AppBundle/Resources/public/ts/helper.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__AppBundle_Resources_public_ts_post_service__ = __webpack_require__("../../../../../src/AppBundle/Resources/public/ts/post.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__AppBundle_Resources_public_modal_ts_modal_service__ = __webpack_require__("../../../../../src/AppBundle/Resources/public/modal/ts/modal.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__AppBundle_Resources_public_ts_flash_message_service__ = __webpack_require__("../../../../../src/AppBundle/Resources/public/ts/flash-message.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__AppBundle_Resources_public_ts_dynamic_component_loader_service__ = __webpack_require__("../../../../../src/AppBundle/Resources/public/ts/dynamic-component-loader.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__AppBundle_Resources_public_ts_nav_manager_nav_manager_service__ = __webpack_require__("../../../../../src/AppBundle/Resources/public/ts/nav-manager/nav-manager.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__AppBundle_Resources_public_app_basics_ts_src_main_ext_module__ = __webpack_require__("../../../../../src/AppBundle/Resources/public/app-basics/ts/src/main.ext-module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__AppBundle_Resources_public_app_basics_ts_src_main_component__ = __webpack_require__("../../../../../src/AppBundle/Resources/public/app-basics/ts/src/main.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__main_component__ = __webpack_require__("../../../../../src/AdminBundle/Resources/public/store/detail/ts/src/main.component.ts");
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
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* NgModule */])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_forms__["b" /* FormsModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_forms__["c" /* ReactiveFormsModule */],
                __WEBPACK_IMPORTED_MODULE_9__AppBundle_Resources_public_app_basics_ts_src_main_ext_module__["a" /* MainExtModule */]
            ],
            declarations: [
                __WEBPACK_IMPORTED_MODULE_11__main_component__["a" /* MainComponent */]
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_4__AppBundle_Resources_public_ts_post_service__["a" /* PostService */],
                __WEBPACK_IMPORTED_MODULE_5__AppBundle_Resources_public_modal_ts_modal_service__["a" /* ModalService */],
                __WEBPACK_IMPORTED_MODULE_6__AppBundle_Resources_public_ts_flash_message_service__["a" /* FlashMessageService */],
                __WEBPACK_IMPORTED_MODULE_7__AppBundle_Resources_public_ts_dynamic_component_loader_service__["a" /* DynamicComponentLoaderService */],
                __WEBPACK_IMPORTED_MODULE_8__AppBundle_Resources_public_ts_nav_manager_nav_manager_service__["a" /* NavManagerService */],
                { provide: 'Provider', useValue: __WEBPACK_IMPORTED_MODULE_3__AppBundle_Resources_public_ts_helper__["a" /* Helper */].getBaseProvider(_app.conf) },
                { provide: 'HelperService', useValue: __WEBPACK_IMPORTED_MODULE_3__AppBundle_Resources_public_ts_helper__["a" /* Helper */] },
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_10__AppBundle_Resources_public_app_basics_ts_src_main_component__["a" /* MainComponent */], __WEBPACK_IMPORTED_MODULE_11__main_component__["a" /* MainComponent */]]
        })
    ], MainModule);
    return MainModule;
}());



/***/ }),

/***/ "../../../../../src/AdminBundle/Resources/public/store/detail/ts/src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("../../../platform-browser-dynamic/esm5/platform-browser-dynamic.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_cli_conf_environments_environment__ = __webpack_require__("../../../../../angular_cli_conf/environments/environment.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__main_module__ = __webpack_require__("../../../../../src/AdminBundle/Resources/public/store/detail/ts/src/main.module.ts");

 // The browser platform with a compiler
 // Get environment

// Enable production environment
if (__WEBPACK_IMPORTED_MODULE_2__angular_cli_conf_environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_11" /* enableProdMode */])();
}
// Compile and launch the module
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_3__main_module__["a" /* MainModule */])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ "../../../../../src/AdminBundle/Resources/public/store/detail/ts/src/store-email-edit.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return StoreEmailEditComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__AppBundle_Resources_public_ts_form_form_popup_component__ = __webpack_require__("../../../../../src/AppBundle/Resources/public/ts/form/form-popup.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__AppBundle_Resources_public_ts_form_form_service__ = __webpack_require__("../../../../../src/AppBundle/Resources/public/ts/form/form.service.ts");
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



var StoreEmailEditComponent = (function (_super) {
    __extends(StoreEmailEditComponent, _super);
    function StoreEmailEditComponent(elementRef, renderer, provider, formService, dataService) {
        return _super.call(this, elementRef, renderer, provider, formService, dataService) || this;
    }
    StoreEmailEditComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: '#js_storeEmailEdit',
            template: __webpack_require__("../../../../../src/AdminBundle/Resources/public/store/detail/ts/templates/store-email-edit.component.html")
        }),
        __param(2, Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["w" /* Inject */])('Provider')),
        __param(4, Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["w" /* Inject */])('DataService')),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_core__["r" /* ElementRef */],
            __WEBPACK_IMPORTED_MODULE_0__angular_core__["S" /* Renderer */], Object, __WEBPACK_IMPORTED_MODULE_2__AppBundle_Resources_public_ts_form_form_service__["a" /* FormService */], Object])
    ], StoreEmailEditComponent);
    return StoreEmailEditComponent;
}(__WEBPACK_IMPORTED_MODULE_1__AppBundle_Resources_public_ts_form_form_popup_component__["a" /* FormPopupComponent */]));



/***/ }),

/***/ "../../../../../src/AdminBundle/Resources/public/store/detail/ts/src/store-email-edit.ext-module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return StoreEmailEditExtModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("../../../common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__store_email_edit_component__ = __webpack_require__("../../../../../src/AdminBundle/Resources/public/store/detail/ts/src/store-email-edit.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var StoreEmailEditExtModule = (function () {
    function StoreEmailEditExtModule() {
    }
    StoreEmailEditExtModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* NgModule */])({
            imports: [__WEBPACK_IMPORTED_MODULE_1__angular_common__["a" /* CommonModule */], __WEBPACK_IMPORTED_MODULE_2__angular_forms__["b" /* FormsModule */], __WEBPACK_IMPORTED_MODULE_2__angular_forms__["c" /* ReactiveFormsModule */]],
            declarations: [
                __WEBPACK_IMPORTED_MODULE_3__store_email_edit_component__["a" /* StoreEmailEditComponent */]
            ],
            exports: [__WEBPACK_IMPORTED_MODULE_3__store_email_edit_component__["a" /* StoreEmailEditComponent */]]
        })
    ], StoreEmailEditExtModule);
    return StoreEmailEditExtModule;
}());



/***/ }),

/***/ "../../../../../src/AdminBundle/Resources/public/store/detail/ts/src/store-link-edit.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return StoreLinkEditComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__AppBundle_Resources_public_ts_form_form_popup_component__ = __webpack_require__("../../../../../src/AppBundle/Resources/public/ts/form/form-popup.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__AppBundle_Resources_public_ts_form_form_service__ = __webpack_require__("../../../../../src/AppBundle/Resources/public/ts/form/form.service.ts");
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



var StoreLinkEditComponent = (function (_super) {
    __extends(StoreLinkEditComponent, _super);
    function StoreLinkEditComponent(elementRef, renderer, provider, formService, dataService) {
        return _super.call(this, elementRef, renderer, provider, formService, dataService) || this;
    }
    StoreLinkEditComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: '#js_storeLinkEdit',
            template: __webpack_require__("../../../../../src/AdminBundle/Resources/public/store/detail/ts/templates/store-link-edit.component.html")
        }),
        __param(2, Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["w" /* Inject */])('Provider')),
        __param(4, Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["w" /* Inject */])('DataService')),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_core__["r" /* ElementRef */],
            __WEBPACK_IMPORTED_MODULE_0__angular_core__["S" /* Renderer */], Object, __WEBPACK_IMPORTED_MODULE_2__AppBundle_Resources_public_ts_form_form_service__["a" /* FormService */], Object])
    ], StoreLinkEditComponent);
    return StoreLinkEditComponent;
}(__WEBPACK_IMPORTED_MODULE_1__AppBundle_Resources_public_ts_form_form_popup_component__["a" /* FormPopupComponent */]));



/***/ }),

/***/ "../../../../../src/AdminBundle/Resources/public/store/detail/ts/src/store-link-edit.ext-module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return StoreLinkEditExtModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("../../../common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__AppBundle_Resources_public_ts_form_field_types_field_types_extension_module__ = __webpack_require__("../../../../../src/AppBundle/Resources/public/ts/form/field-types/field-types.extension-module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__store_link_edit_component__ = __webpack_require__("../../../../../src/AdminBundle/Resources/public/store/detail/ts/src/store-link-edit.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





var StoreLinkEditExtModule = (function () {
    function StoreLinkEditExtModule() {
    }
    StoreLinkEditExtModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* NgModule */])({
            imports: [__WEBPACK_IMPORTED_MODULE_1__angular_common__["a" /* CommonModule */], __WEBPACK_IMPORTED_MODULE_2__angular_forms__["b" /* FormsModule */], __WEBPACK_IMPORTED_MODULE_3__AppBundle_Resources_public_ts_form_field_types_field_types_extension_module__["a" /* FieldTypesExtensionModule */], __WEBPACK_IMPORTED_MODULE_2__angular_forms__["c" /* ReactiveFormsModule */]],
            declarations: [
                __WEBPACK_IMPORTED_MODULE_4__store_link_edit_component__["a" /* StoreLinkEditComponent */]
            ],
            exports: [__WEBPACK_IMPORTED_MODULE_4__store_link_edit_component__["a" /* StoreLinkEditComponent */]]
        })
    ], StoreLinkEditExtModule);
    return StoreLinkEditExtModule;
}());



/***/ }),

/***/ "../../../../../src/AdminBundle/Resources/public/store/detail/ts/src/store-phone-edit.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return StorePhoneEditComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__AppBundle_Resources_public_ts_form_form_popup_component__ = __webpack_require__("../../../../../src/AppBundle/Resources/public/ts/form/form-popup.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__AppBundle_Resources_public_ts_form_form_service__ = __webpack_require__("../../../../../src/AppBundle/Resources/public/ts/form/form.service.ts");
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



var StorePhoneEditComponent = (function (_super) {
    __extends(StorePhoneEditComponent, _super);
    function StorePhoneEditComponent(elementRef, renderer, provider, formService, dataService) {
        return _super.call(this, elementRef, renderer, provider, formService, dataService) || this;
    }
    StorePhoneEditComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: '#js_storePhoneEdit',
            template: __webpack_require__("../../../../../src/AdminBundle/Resources/public/store/detail/ts/templates/store-phone-edit.component.html")
        }),
        __param(2, Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["w" /* Inject */])('Provider')),
        __param(4, Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["w" /* Inject */])('DataService')),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_core__["r" /* ElementRef */],
            __WEBPACK_IMPORTED_MODULE_0__angular_core__["S" /* Renderer */], Object, __WEBPACK_IMPORTED_MODULE_2__AppBundle_Resources_public_ts_form_form_service__["a" /* FormService */], Object])
    ], StorePhoneEditComponent);
    return StorePhoneEditComponent;
}(__WEBPACK_IMPORTED_MODULE_1__AppBundle_Resources_public_ts_form_form_popup_component__["a" /* FormPopupComponent */]));



/***/ }),

/***/ "../../../../../src/AdminBundle/Resources/public/store/detail/ts/src/store-phone-edit.ext-module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return StorePhoneEditExtModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("../../../common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__store_phone_edit_component__ = __webpack_require__("../../../../../src/AdminBundle/Resources/public/store/detail/ts/src/store-phone-edit.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var StorePhoneEditExtModule = (function () {
    function StorePhoneEditExtModule() {
    }
    StorePhoneEditExtModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* NgModule */])({
            imports: [__WEBPACK_IMPORTED_MODULE_1__angular_common__["a" /* CommonModule */], __WEBPACK_IMPORTED_MODULE_2__angular_forms__["b" /* FormsModule */], __WEBPACK_IMPORTED_MODULE_2__angular_forms__["c" /* ReactiveFormsModule */]],
            declarations: [
                __WEBPACK_IMPORTED_MODULE_3__store_phone_edit_component__["a" /* StorePhoneEditComponent */]
            ],
            exports: [__WEBPACK_IMPORTED_MODULE_3__store_phone_edit_component__["a" /* StorePhoneEditComponent */]]
        })
    ], StorePhoneEditExtModule);
    return StorePhoneEditExtModule;
}());



/***/ }),

/***/ "../../../../../src/AdminBundle/Resources/public/store/detail/ts/templates/contacts.component.html":
/***/ (function(module, exports) {

module.exports = "        <div class=\"accordion\">\n        <div class=\"panel-group\" id=\"accordion\">\n                                                <div (click)=\"_navManagerService.navToAction(0)\"\n     class=\"panel panel-default\">\n    <div class=\"panel-heading\">\n        <h4 class=\"panel-title\">\n            <a data-toggle=\"collapse\" data-parent=\"#accordion\" href=\"#panel0\">Phones</a>\n        </h4>\n        <div *ngIf=\"_navManagerService.getComponentRef(0) && _navManagerService.getComponentRef(0).instance._actionsService\"\n             class=\"actions no-user-select txt-align-r valign-table-component valign-table-component-middle\">\n            <ng-template [ngIf]=\"_navManagerService.getComponentRef(0).instance._actionsService.getActionAttr('search', 'isEnabled')\">\n                <js_search [injector]=\"_navManagerService.getComponentRef(0).instance._injector || null\" class=\"search\"></js_search>\n            </ng-template>\n            <div (click)=\"_navManagerService.getComponentRef(0).instance.triggerAction($event)\">\n                <ng-template ngFor let-action [ngForOf]=\"_navManagerService.getComponentRef(0).instance._actionsService.getHeadActions()\">\n                    <a *ngIf=\"_navManagerService.getComponentRef(0).instance._actionsService.getActionAttr(action, 'isEnabled')\"\n                       [ngClass]=\"[_navManagerService.getComponentRef(0).instance._actionsService.getActionAttr(action, 'icon')]\"\n                       class=\"-round fa\"\n                       [attr.data-action]=\"action\"></a>\n                </ng-template>\n            </div>\n        </div>\n    </div>\n    <div id=\"panel0\" class=\"panel-collapse collapse\">\n        <div class=\"panel-body js_lazyLoadContainer_0\">\n            <ng-template #js_lazyLoadContainer></ng-template>\n        </div>\n    </div>\n</div>                                    <div (click)=\"_navManagerService.navToAction(1)\"\n     class=\"panel panel-default\">\n    <div class=\"panel-heading\">\n        <h4 class=\"panel-title\">\n            <a data-toggle=\"collapse\" data-parent=\"#accordion\" href=\"#panel1\">Emails</a>\n        </h4>\n        <div *ngIf=\"_navManagerService.getComponentRef(1) && _navManagerService.getComponentRef(1).instance._actionsService\"\n             class=\"actions no-user-select txt-align-r valign-table-component valign-table-component-middle\">\n            <ng-template [ngIf]=\"_navManagerService.getComponentRef(1).instance._actionsService.getActionAttr('search', 'isEnabled')\">\n                <js_search [injector]=\"_navManagerService.getComponentRef(1).instance._injector || null\" class=\"search\"></js_search>\n            </ng-template>\n            <div (click)=\"_navManagerService.getComponentRef(1).instance.triggerAction($event)\">\n                <ng-template ngFor let-action [ngForOf]=\"_navManagerService.getComponentRef(1).instance._actionsService.getHeadActions()\">\n                    <a *ngIf=\"_navManagerService.getComponentRef(1).instance._actionsService.getActionAttr(action, 'isEnabled')\"\n                       [ngClass]=\"[_navManagerService.getComponentRef(1).instance._actionsService.getActionAttr(action, 'icon')]\"\n                       class=\"-round fa\"\n                       [attr.data-action]=\"action\"></a>\n                </ng-template>\n            </div>\n        </div>\n    </div>\n    <div id=\"panel1\" class=\"panel-collapse collapse\">\n        <div class=\"panel-body js_lazyLoadContainer_1\">\n            <ng-template #js_lazyLoadContainer></ng-template>\n        </div>\n    </div>\n</div>                                    <div (click)=\"_navManagerService.navToAction(2)\"\n     class=\"panel panel-default\">\n    <div class=\"panel-heading\">\n        <h4 class=\"panel-title\">\n            <a data-toggle=\"collapse\" data-parent=\"#accordion\" href=\"#panel2\">Links</a>\n        </h4>\n        <div *ngIf=\"_navManagerService.getComponentRef(2) && _navManagerService.getComponentRef(2).instance._actionsService\"\n             class=\"actions no-user-select txt-align-r valign-table-component valign-table-component-middle\">\n            <ng-template [ngIf]=\"_navManagerService.getComponentRef(2).instance._actionsService.getActionAttr('search', 'isEnabled')\">\n                <js_search [injector]=\"_navManagerService.getComponentRef(2).instance._injector || null\" class=\"search\"></js_search>\n            </ng-template>\n            <div (click)=\"_navManagerService.getComponentRef(2).instance.triggerAction($event)\">\n                <ng-template ngFor let-action [ngForOf]=\"_navManagerService.getComponentRef(2).instance._actionsService.getHeadActions()\">\n                    <a *ngIf=\"_navManagerService.getComponentRef(2).instance._actionsService.getActionAttr(action, 'isEnabled')\"\n                       [ngClass]=\"[_navManagerService.getComponentRef(2).instance._actionsService.getActionAttr(action, 'icon')]\"\n                       class=\"-round fa\"\n                       [attr.data-action]=\"action\"></a>\n                </ng-template>\n            </div>\n        </div>\n    </div>\n    <div id=\"panel2\" class=\"panel-collapse collapse\">\n        <div class=\"panel-body js_lazyLoadContainer_2\">\n            <ng-template #js_lazyLoadContainer></ng-template>\n        </div>\n    </div>\n</div>                                    </div>\n    </div>\n"

/***/ }),

/***/ "../../../../../src/AdminBundle/Resources/public/store/detail/ts/templates/main.component.html":
/***/ (function(module, exports) {

module.exports = "    <div class=\"row m-b-md animated fadeInRight\"><div class=\"col-lg-12 m-b-xs\"><div class=\"tabs-container\">\n        <ul class=\"nav nav-tabs\">\n                            <li (click)=\"_navManagerService.navToAction(0)\"\n                    [class.active]=\"0 == _navManagerService.getIndex()\"><a\n                            [attr.data-index]=\"0\" data-toggle=\"tab\" href=\"#tab0\">Contacts</a></li>\n                    </ul>\n        <div class=\"tab-content\">\n                            <div id=\"tab0\"\n                     class=\"tab-pane\"\n                     [class.active]=\"0 == _navManagerService.getIndex()\">\n                    <div class=\"panel-body js_lazyLoadContainer_0\">\n                        <ng-template #js_lazyLoadContainer></ng-template>\n                    </div>\n                </div>\n                    </div>\n    </div></div></div>\n"

/***/ }),

/***/ "../../../../../src/AdminBundle/Resources/public/store/detail/ts/templates/store-email-edit.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"modal-body\">\n    <div class=\"form-wrapper gray-bg\">\n        <div class=\"row\">\n            <div class=\"col-lg-12\">\n                <div class=\"ibox float-e-margins\">\n                    <div class=\"ibox-title\">\n                        <h5>Form&nbsp;{{getProviderAttr('label')}}<small>&nbsp;({{(_formService && _formService.getObject() && _formService.getObject().id) ? 'edit' : 'add'}})</small></h5>\n                        <div class=\"txt-align-r actions\">\n                            <a class=\"-round fa fa-times\"\n                               (click)=\"closeAction($event)\"></a>\n                        </div>\n                    </div>\n                        \n    <form name=\"form\" method=\"post\" (ngSubmit)=\"saveAction($event)\" [formGroup]=\"_formService.getForm()\" class=\"form-horizontal\">\n                    <div class=\"ibox-content\">    \n            \n\n            <div class=\"form-group\" *ngIf=\"_formService.getObject().id\">\n\n                        <label class=\"col-sm-2 control-label required\" for=\"form_id\">Id</label>\n    \n            <div class=\"col-sm-10\">\n                                        <p id=\"form_id\"\n               class=\"form-control-static\"\n               [innerHTML]=\"_formService.getViewObject().id\"></p>\n                        <label class=\"error\" *ngFor=\"let error of _formService.getErrors().id\">{{error}}</label>\n            </div>\n        </div>\n                \n\n            <div class=\"form-group\" >\n\n                        <label class=\"col-sm-2 control-label\" for=\"form_name\">Name / Description</label>\n    \n            <div class=\"col-sm-10\">\n                                            <input type=\"text\" id=\"form_name\" name=\"form[name]\" maxlength=\"128\" [(ngModel)]=\"_formService.getObject().name\" formControlName=\"name\" [class.error]=\"_formService.getErrors().name &amp;&amp; _formService.getErrors().name.length &gt; 0\" class=\"form-control\" />\n                <label class=\"error\" *ngFor=\"let error of _formService.getErrors().name\">{{error}}</label>\n            </div>\n        </div>\n                \n\n            <div class=\"form-group\" >\n\n                        <label class=\"col-sm-2 control-label required\" for=\"form_email\">Email</label>\n    \n            <div class=\"col-sm-10\">\n                                            <input type=\"text\" id=\"form_email\" name=\"form[email]\" required=\"required\" maxlength=\"64\" [(ngModel)]=\"_formService.getObject().email\" formControlName=\"email\" [class.error]=\"_formService.getErrors().email &amp;&amp; _formService.getErrors().email.length &gt; 0\" class=\"form-control\" />\n                <label class=\"error\" *ngFor=\"let error of _formService.getErrors().email\">{{error}}</label>\n            </div>\n        </div>\n                \n\n            <div class=\"form-group\" >\n\n                        <label class=\"col-sm-2 control-label\">Default Email</label>\n    \n            <div class=\"col-sm-10\">\n                                            <div class=\"checkbox\">                                        <label><input type=\"checkbox\" id=\"form_isDefault\" name=\"form[isDefault]\" [(ngModel)]=\"_formService.getObject().isDefault\" formControlName=\"isDefault\" [class.error]=\"_formService.getErrors().isDefault &amp;&amp; _formService.getErrors().isDefault.length &gt; 0\" value=\"1\" /> Is default</label>\n    </div>\n                <label class=\"error\" *ngFor=\"let error of _formService.getErrors().isDefault\">{{error}}</label>\n            </div>\n        </div>\n                \n\n            <div class=\"form-group\" >\n\n                        <label class=\"col-sm-2 control-label\">For Documents</label>\n    \n            <div class=\"col-sm-10\">\n                                            <div class=\"checkbox\">                                        <label><input type=\"checkbox\" id=\"form_forDocuments\" name=\"form[forDocuments]\" [(ngModel)]=\"_formService.getObject().forDocuments\" formControlName=\"forDocuments\" [class.error]=\"_formService.getErrors().forDocuments &amp;&amp; _formService.getErrors().forDocuments.length &gt; 0\" value=\"1\" /> For documents</label>\n    </div>\n                <label class=\"error\" *ngFor=\"let error of _formService.getErrors().forDocuments\">{{error}}</label>\n            </div>\n        </div>\n                \n\n            <div class=\"form-group\" *ngIf=\"_formService.getObject().insertTime\">\n\n                        <label class=\"col-sm-2 control-label required\" for=\"form_insertTime\">Insert Time</label>\n    \n            <div class=\"col-sm-10\">\n                                        <p id=\"form_insertTime\"\n               class=\"form-control-static\"\n               [innerHTML]=\"_formService.getViewObject().insertTime\"></p>\n                        <label class=\"error\" *ngFor=\"let error of _formService.getErrors().insertTime\">{{error}}</label>\n            </div>\n        </div>\n                \n\n            <div class=\"form-group\" *ngIf=\"_formService.getObject().insertUser\">\n\n                        <label class=\"col-sm-2 control-label required\" for=\"form_insertUser\">Insert User</label>\n    \n            <div class=\"col-sm-10\">\n                                        <p id=\"form_insertUser\"\n               class=\"form-control-static\"\n               [innerHTML]=\"_formService.getViewObject().insertUser\"></p>\n                        <label class=\"error\" *ngFor=\"let error of _formService.getErrors().insertUser\">{{error}}</label>\n            </div>\n        </div>\n                \n\n            <div class=\"form-group\" >\n\n                        <label class=\"col-sm-2 control-label\">Enabled</label>\n    \n            <div class=\"col-sm-10\">\n                                            <div class=\"checkbox\">                                        <label><input type=\"checkbox\" id=\"form_isEnabled\" name=\"form[isEnabled]\" [(ngModel)]=\"_formService.getObject().isEnabled\" formControlName=\"isEnabled\" [class.error]=\"_formService.getErrors().isEnabled &amp;&amp; _formService.getErrors().isEnabled.length &gt; 0\" value=\"1\" checked=\"checked\" /> Is enabled</label>\n    </div>\n                <label class=\"error\" *ngFor=\"let error of _formService.getErrors().isEnabled\">{{error}}</label>\n            </div>\n        </div>\n        </div>\n                    <div class=\"ibox-footer hide-on-empty\">    \n                    <div class=\"form-group\">\n            <div class=\"col-sm-10 col-sm-offset-2\">\n                                            <button                                     class=\"btn\"\n                                    (click)=\"cancelAction($event)\"\n                                        id=\"form_cancel\"\n            name=\"form[cancel]\"\n            type=\"button\"><i class=\"fa fa-times\"></i>&nbsp;Cancel</button>\n                                                <button                                     class=\"btn\"\n                                    (click)=\"resetAction($event)\"\n                                        id=\"form_reset\"\n            name=\"form[reset]\"\n            type=\"button\"><i class=\"fa fa-ban\"></i>&nbsp;Reset</button>\n                                                <button                                     class=\"btn btn-primary\"\n                                    (click)=\"saveAction($event)\"\n                                        id=\"form_save\"\n            name=\"form[save]\"\n            type=\"button\"><i class=\"fa fa-check\"></i>&nbsp;Save</button>\n                                                <button                                     class=\"btn btn-primary\"\n                                    (click)=\"saveAndCloseAction($event)\"\n                                        id=\"form_saveAndClose\"\n            name=\"form[saveAndClose]\"\n            type=\"button\"><i class=\"fa fa-times\"></i>&nbsp;Save and Close</button>\n                                </div>\n        </div>\n    </div>                        \n    <input type=\"hidden\" id=\"form__token\" name=\"form[_token]\" value=\"M8-tON1Vm7zaCf91I5KVuSjoLzkFt9Gsl7a9uNrScso\" /></form>\n                </div>\n            </div>\n        </div>\n    </div>\n</div>"

/***/ }),

/***/ "../../../../../src/AdminBundle/Resources/public/store/detail/ts/templates/store-link-edit.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"modal-body\">\n    <div class=\"form-wrapper gray-bg\">\n        <div class=\"row\">\n            <div class=\"col-lg-12\">\n                <div class=\"ibox float-e-margins\">\n                    <div class=\"ibox-title\">\n                        <h5>Form&nbsp;{{getProviderAttr('label')}}<small>&nbsp;({{(_formService && _formService.getObject() && _formService.getObject().id) ? 'edit' : 'add'}})</small></h5>\n                        <div class=\"txt-align-r actions\">\n                            <a class=\"-round fa fa-times\"\n                               (click)=\"closeAction($event)\"></a>\n                        </div>\n                    </div>\n                        \n    <form name=\"form\" method=\"post\" (ngSubmit)=\"saveAction($event)\" [formGroup]=\"_formService.getForm()\" class=\"form-horizontal\">\n                    <div class=\"ibox-content\">    \n            \n\n            <div class=\"form-group\" *ngIf=\"_formService.getObject().id\">\n\n                        <label class=\"col-sm-2 control-label required\" for=\"form_id\">Id</label>\n    \n            <div class=\"col-sm-10\">\n                                        <p id=\"form_id\"\n               class=\"form-control-static\"\n               [innerHTML]=\"_formService.getViewObject().id\"></p>\n                        <label class=\"error\" *ngFor=\"let error of _formService.getErrors().id\">{{error}}</label>\n            </div>\n        </div>\n                \n\n            <div class=\"form-group\" >\n\n                        <label class=\"col-sm-2 control-label\" for=\"form_appIconObj\">Icon</label>\n    \n            <div class=\"col-sm-10\">\n                                            <div [htmlSelect]=\"'appIconObj'\"\n         class=\"html-select\"\n                               >\n        <div class=\"form-control\"\n             [class.error]=\"_formService.getErrors()['appIconObj'] && (_formService.getErrors()['appIconObj'].length > 0)\">\n            <span class=\"control\">\n                <span class=\"js_label\"></span><a class=\"pull-right\"><i class=\"fa fa-angle-down\"></i></a>\n            </span>\n        </div>\n        <div class=\"choices js_choices\">\n            <ul class=\"form-control-box\">\n                                    <li data-value=\"13\"><i class=\"fa fa-facebook-square\"></i> (Facebook)</li>\n                                    <li data-value=\"14\"><i class=\"fa fa-linkedin-square\"></i> (Linkedin)</li>\n                                    <li data-value=\"15\"><i class=\"fa fa-twitter-square\"></i> (Twitter)</li>\n                                    <li data-value=\"16\"><i class=\"fa fa-instagram\"></i> (Instagram)</li>\n                                    <li data-value=\"39\"><i class=\"fa fa-link\"></i> (Link)</li>\n                            </ul>\n        </div>\n    </div>\n    <input [(ngModel)]=\"_formService.getObject().appIconObj\"\n           formControlName = appIconObj\n           name=\"form[appIconObj]\"\n                      type=\"hidden\">\n                    <label class=\"error\" *ngFor=\"let error of _formService.getErrors().appIconObj\">{{error}}</label>\n            </div>\n        </div>\n                \n\n            <div class=\"form-group\" >\n\n                        <label class=\"col-sm-2 control-label\" for=\"form_name\">Name / Description</label>\n    \n            <div class=\"col-sm-10\">\n                                            <input type=\"text\" id=\"form_name\" name=\"form[name]\" maxlength=\"128\" [(ngModel)]=\"_formService.getObject().name\" formControlName=\"name\" [class.error]=\"_formService.getErrors().name &amp;&amp; _formService.getErrors().name.length &gt; 0\" class=\"form-control\" />\n                <label class=\"error\" *ngFor=\"let error of _formService.getErrors().name\">{{error}}</label>\n            </div>\n        </div>\n                \n\n            <div class=\"form-group\" >\n\n                        <label class=\"col-sm-2 control-label required\" for=\"form_link\">Link</label>\n    \n            <div class=\"col-sm-10\">\n                                            <input type=\"text\" id=\"form_link\" name=\"form[link]\" required=\"required\" maxlength=\"64\" [(ngModel)]=\"_formService.getObject().link\" formControlName=\"link\" [class.error]=\"_formService.getErrors().link &amp;&amp; _formService.getErrors().link.length &gt; 0\" class=\"form-control\" />\n                <label class=\"error\" *ngFor=\"let error of _formService.getErrors().link\">{{error}}</label>\n            </div>\n        </div>\n                \n\n            <div class=\"form-group\" >\n\n                        <label class=\"col-sm-2 control-label\">For Documents</label>\n    \n            <div class=\"col-sm-10\">\n                                            <div class=\"checkbox\">                                        <label><input type=\"checkbox\" id=\"form_forDocuments\" name=\"form[forDocuments]\" [(ngModel)]=\"_formService.getObject().forDocuments\" formControlName=\"forDocuments\" [class.error]=\"_formService.getErrors().forDocuments &amp;&amp; _formService.getErrors().forDocuments.length &gt; 0\" value=\"1\" /> For documents</label>\n    </div>\n                <label class=\"error\" *ngFor=\"let error of _formService.getErrors().forDocuments\">{{error}}</label>\n            </div>\n        </div>\n                \n\n            <div class=\"form-group\" *ngIf=\"_formService.getObject().insertTime\">\n\n                        <label class=\"col-sm-2 control-label required\" for=\"form_insertTime\">Insert Time</label>\n    \n            <div class=\"col-sm-10\">\n                                        <p id=\"form_insertTime\"\n               class=\"form-control-static\"\n               [innerHTML]=\"_formService.getViewObject().insertTime\"></p>\n                        <label class=\"error\" *ngFor=\"let error of _formService.getErrors().insertTime\">{{error}}</label>\n            </div>\n        </div>\n                \n\n            <div class=\"form-group\" *ngIf=\"_formService.getObject().insertUser\">\n\n                        <label class=\"col-sm-2 control-label required\" for=\"form_insertUser\">Insert User</label>\n    \n            <div class=\"col-sm-10\">\n                                        <p id=\"form_insertUser\"\n               class=\"form-control-static\"\n               [innerHTML]=\"_formService.getViewObject().insertUser\"></p>\n                        <label class=\"error\" *ngFor=\"let error of _formService.getErrors().insertUser\">{{error}}</label>\n            </div>\n        </div>\n                \n\n            <div class=\"form-group\" >\n\n                        <label class=\"col-sm-2 control-label\">Enabled</label>\n    \n            <div class=\"col-sm-10\">\n                                            <div class=\"checkbox\">                                        <label><input type=\"checkbox\" id=\"form_isEnabled\" name=\"form[isEnabled]\" [(ngModel)]=\"_formService.getObject().isEnabled\" formControlName=\"isEnabled\" [class.error]=\"_formService.getErrors().isEnabled &amp;&amp; _formService.getErrors().isEnabled.length &gt; 0\" value=\"1\" checked=\"checked\" /> Is enabled</label>\n    </div>\n                <label class=\"error\" *ngFor=\"let error of _formService.getErrors().isEnabled\">{{error}}</label>\n            </div>\n        </div>\n        </div>\n                    <div class=\"ibox-footer hide-on-empty\">    \n                    <div class=\"form-group\">\n            <div class=\"col-sm-10 col-sm-offset-2\">\n                                            <button                                     class=\"btn\"\n                                    (click)=\"cancelAction($event)\"\n                                        id=\"form_cancel\"\n            name=\"form[cancel]\"\n            type=\"button\"><i class=\"fa fa-times\"></i>&nbsp;Cancel</button>\n                                                <button                                     class=\"btn\"\n                                    (click)=\"resetAction($event)\"\n                                        id=\"form_reset\"\n            name=\"form[reset]\"\n            type=\"button\"><i class=\"fa fa-ban\"></i>&nbsp;Reset</button>\n                                                <button                                     class=\"btn btn-primary\"\n                                    (click)=\"saveAction($event)\"\n                                        id=\"form_save\"\n            name=\"form[save]\"\n            type=\"button\"><i class=\"fa fa-check\"></i>&nbsp;Save</button>\n                                                <button                                     class=\"btn btn-primary\"\n                                    (click)=\"saveAndCloseAction($event)\"\n                                        id=\"form_saveAndClose\"\n            name=\"form[saveAndClose]\"\n            type=\"button\"><i class=\"fa fa-times\"></i>&nbsp;Save and Close</button>\n                                </div>\n        </div>\n    </div>                        \n    <input type=\"hidden\" id=\"form__token\" name=\"form[_token]\" value=\"M8-tON1Vm7zaCf91I5KVuSjoLzkFt9Gsl7a9uNrScso\" /></form>\n                </div>\n            </div>\n        </div>\n    </div>\n</div>"

/***/ }),

/***/ "../../../../../src/AdminBundle/Resources/public/store/detail/ts/templates/store-phone-edit.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"modal-body\">\n    <div class=\"form-wrapper gray-bg\">\n        <div class=\"row\">\n            <div class=\"col-lg-12\">\n                <div class=\"ibox float-e-margins\">\n                    <div class=\"ibox-title\">\n                        <h5>Form&nbsp;{{getProviderAttr('label')}}<small>&nbsp;({{(_formService && _formService.getObject() && _formService.getObject().id) ? 'edit' : 'add'}})</small></h5>\n                        <div class=\"txt-align-r actions\">\n                            <a class=\"-round fa fa-times\"\n                               (click)=\"closeAction($event)\"></a>\n                        </div>\n                    </div>\n                        \n    <form name=\"form\" method=\"post\" (ngSubmit)=\"saveAction($event)\" [formGroup]=\"_formService.getForm()\" class=\"form-horizontal\">\n                    <div class=\"ibox-content\">    \n            \n\n            <div class=\"form-group\" *ngIf=\"_formService.getObject().id\">\n\n                        <label class=\"col-sm-2 control-label required\" for=\"form_id\">Id</label>\n    \n            <div class=\"col-sm-10\">\n                                        <p id=\"form_id\"\n               class=\"form-control-static\"\n               [innerHTML]=\"_formService.getViewObject().id\"></p>\n                        <label class=\"error\" *ngFor=\"let error of _formService.getErrors().id\">{{error}}</label>\n            </div>\n        </div>\n                \n\n            <div class=\"form-group\" >\n\n                        <label class=\"col-sm-2 control-label\" for=\"form_name\">Name / Description</label>\n    \n            <div class=\"col-sm-10\">\n                                            <input type=\"text\" id=\"form_name\" name=\"form[name]\" maxlength=\"128\" [(ngModel)]=\"_formService.getObject().name\" formControlName=\"name\" [class.error]=\"_formService.getErrors().name &amp;&amp; _formService.getErrors().name.length &gt; 0\" class=\"form-control\" />\n                <label class=\"error\" *ngFor=\"let error of _formService.getErrors().name\">{{error}}</label>\n            </div>\n        </div>\n                \n\n            <div class=\"form-group\" >\n\n                        <label class=\"col-sm-2 control-label required\" for=\"form_phone\">Phone</label>\n    \n            <div class=\"col-sm-10\">\n                                            <input type=\"text\" id=\"form_phone\" name=\"form[phone]\" required=\"required\" maxlength=\"16\" [(ngModel)]=\"_formService.getObject().phone\" formControlName=\"phone\" [class.error]=\"_formService.getErrors().phone &amp;&amp; _formService.getErrors().phone.length &gt; 0\" class=\"form-control\" />\n                <label class=\"error\" *ngFor=\"let error of _formService.getErrors().phone\">{{error}}</label>\n            </div>\n        </div>\n                \n\n            <div class=\"form-group\" >\n\n                        <label class=\"col-sm-2 control-label\">For Documents</label>\n    \n            <div class=\"col-sm-10\">\n                                            <div class=\"checkbox\">                                        <label><input type=\"checkbox\" id=\"form_forDocuments\" name=\"form[forDocuments]\" [(ngModel)]=\"_formService.getObject().forDocuments\" formControlName=\"forDocuments\" [class.error]=\"_formService.getErrors().forDocuments &amp;&amp; _formService.getErrors().forDocuments.length &gt; 0\" value=\"1\" /> For documents</label>\n    </div>\n                <label class=\"error\" *ngFor=\"let error of _formService.getErrors().forDocuments\">{{error}}</label>\n            </div>\n        </div>\n                \n\n            <div class=\"form-group\" *ngIf=\"_formService.getObject().insertTime\">\n\n                        <label class=\"col-sm-2 control-label required\" for=\"form_insertTime\">Insert Time</label>\n    \n            <div class=\"col-sm-10\">\n                                        <p id=\"form_insertTime\"\n               class=\"form-control-static\"\n               [innerHTML]=\"_formService.getViewObject().insertTime\"></p>\n                        <label class=\"error\" *ngFor=\"let error of _formService.getErrors().insertTime\">{{error}}</label>\n            </div>\n        </div>\n                \n\n            <div class=\"form-group\" *ngIf=\"_formService.getObject().insertUser\">\n\n                        <label class=\"col-sm-2 control-label required\" for=\"form_insertUser\">Insert User</label>\n    \n            <div class=\"col-sm-10\">\n                                        <p id=\"form_insertUser\"\n               class=\"form-control-static\"\n               [innerHTML]=\"_formService.getViewObject().insertUser\"></p>\n                        <label class=\"error\" *ngFor=\"let error of _formService.getErrors().insertUser\">{{error}}</label>\n            </div>\n        </div>\n                \n\n            <div class=\"form-group\" >\n\n                        <label class=\"col-sm-2 control-label\">Enabled</label>\n    \n            <div class=\"col-sm-10\">\n                                            <div class=\"checkbox\">                                        <label><input type=\"checkbox\" id=\"form_isEnabled\" name=\"form[isEnabled]\" [(ngModel)]=\"_formService.getObject().isEnabled\" formControlName=\"isEnabled\" [class.error]=\"_formService.getErrors().isEnabled &amp;&amp; _formService.getErrors().isEnabled.length &gt; 0\" value=\"1\" checked=\"checked\" /> Is enabled</label>\n    </div>\n                <label class=\"error\" *ngFor=\"let error of _formService.getErrors().isEnabled\">{{error}}</label>\n            </div>\n        </div>\n        </div>\n                    <div class=\"ibox-footer hide-on-empty\">    \n                    <div class=\"form-group\">\n            <div class=\"col-sm-10 col-sm-offset-2\">\n                                            <button                                     class=\"btn\"\n                                    (click)=\"cancelAction($event)\"\n                                        id=\"form_cancel\"\n            name=\"form[cancel]\"\n            type=\"button\"><i class=\"fa fa-times\"></i>&nbsp;Cancel</button>\n                                                <button                                     class=\"btn\"\n                                    (click)=\"resetAction($event)\"\n                                        id=\"form_reset\"\n            name=\"form[reset]\"\n            type=\"button\"><i class=\"fa fa-ban\"></i>&nbsp;Reset</button>\n                                                <button                                     class=\"btn btn-primary\"\n                                    (click)=\"saveAction($event)\"\n                                        id=\"form_save\"\n            name=\"form[save]\"\n            type=\"button\"><i class=\"fa fa-check\"></i>&nbsp;Save</button>\n                                                <button                                     class=\"btn btn-primary\"\n                                    (click)=\"saveAndCloseAction($event)\"\n                                        id=\"form_saveAndClose\"\n            name=\"form[saveAndClose]\"\n            type=\"button\"><i class=\"fa fa-times\"></i>&nbsp;Save and Close</button>\n                                </div>\n        </div>\n    </div>                        \n    <input type=\"hidden\" id=\"form__token\" name=\"form[_token]\" value=\"M8-tON1Vm7zaCf91I5KVuSjoLzkFt9Gsl7a9uNrScso\" /></form>\n                </div>\n            </div>\n        </div>\n    </div>\n</div>"

/***/ }),

/***/ "../../../../../src/AppBundle/Resources/public/accordion/ts/src/accordion.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AccordionComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__AppBundle_Resources_public_ts_base_base_component__ = __webpack_require__("../../../../../src/AppBundle/Resources/public/ts/base/base.component.ts");
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
        var _this = _super.call(this, elementRef, renderer, provider || {}) || this;
        _this._helperService = _helperService;
        _this._navManagerService = _navManagerService;
        return _this;
    }
    /**
     * Lifecycle callback
     */
    AccordionComponent.prototype.ngAfterViewInit = function () {
        // Initializes the children navigation manager service
        this._navManagerService.init(this, this.lazyLoadViewContainerRefQL);
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_6" /* ViewChildren */])('js_lazyLoadContainer', { read: __WEBPACK_IMPORTED_MODULE_0__angular_core__["_7" /* ViewContainerRef */] }),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["Q" /* QueryList */])
    ], AccordionComponent.prototype, "lazyLoadViewContainerRefQL", void 0);
    AccordionComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'js_accordion',
            template: '' // Define template in child component
        }),
        __param(2, Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["K" /* Optional */])()), __param(2, Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["w" /* Inject */])('Provider')),
        __param(3, Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["w" /* Inject */])('HelperService')),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_core__["r" /* ElementRef */],
            __WEBPACK_IMPORTED_MODULE_0__angular_core__["S" /* Renderer */], Object, Object, __WEBPACK_IMPORTED_MODULE_2__ts_nav_manager_nav_manager_service__["a" /* NavManagerService */]])
    ], AccordionComponent);
    return AccordionComponent;
}(__WEBPACK_IMPORTED_MODULE_1__AppBundle_Resources_public_ts_base_base_component__["a" /* BaseComponent */]));



/***/ }),

/***/ "../../../../../src/AppBundle/Resources/public/app-basics/ts/src/main.component.ts":
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

/***/ "../../../../../src/AppBundle/Resources/public/app-basics/ts/src/main.ext-module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MainExtModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("../../../common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__main_component__ = __webpack_require__("../../../../../src/AppBundle/Resources/public/app-basics/ts/src/main.component.ts");
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
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* NgModule */])({
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
    function DataBoxComponent(viewContainerRef, renderer, provider, dataService, actionsService, modalService, popups, injector) {
        var _this = 
        // Call parent
        _super.call(this) || this;
        _super.prototype.initDataBoxExtensionComponent.call(_this, viewContainerRef, renderer, provider, dataService, actionsService, modalService, popups, injector);
        return _this;
    }
    DataBoxComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: '.js_dataBox',
            template: __webpack_require__("../../../../../src/AppBundle/Resources/public/data-box/ts/templates/data-box.component.html")
        }),
        __param(2, Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["w" /* Inject */])('Provider')),
        __param(3, Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["w" /* Inject */])('DataService')),
        __param(6, Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["w" /* Inject */])('Popups')),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_core__["_7" /* ViewContainerRef */],
            __WEBPACK_IMPORTED_MODULE_0__angular_core__["S" /* Renderer */], Object, Object, __WEBPACK_IMPORTED_MODULE_3__ts_actions_actions_service__["a" /* ActionsService */],
            __WEBPACK_IMPORTED_MODULE_2__modal_ts_modal_service__["a" /* ModalService */], Object, __WEBPACK_IMPORTED_MODULE_0__angular_core__["z" /* Injector */]])
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
     * @param actionsService
     * @param modalService
     * @param popups
     * @param injector
     */
    DataBoxExtensionComponent.prototype.initDataBoxExtensionComponent = function (viewContainerRef, renderer, provider, dataService, // Any is used, otherwise you get an error "[Class] is not defined"
        actionsService, modalService, 
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
        switch (this._dataService.getFields('metadata')[field].type) {
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
        this._dataService.selectObject(data).then(function (data) {
            that.openPopup(PopupTypes.edit);
        });
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
        this._dataService.newObject();
        this.openPopup(PopupTypes.add);
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
        this._dataService.newObject(data).then(function (data) {
            that.openPopup(PopupTypes.edit);
        }, function (errors) { console.log(errors); });
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
        var that = this;
        // Dialog message
        this._modalService.dialog('Are you sure to cancel/enable?').then(function (hasConfirm) {
            if (hasConfirm) {
                that._dataService.cancel(data).then(function (data) {
                    that.postCancelObject();
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
        var that = this;
        // Dialog message
        this._modalService.dialog('Are you sure to remove?').then(function (hasConfirm) {
            if (hasConfirm) {
                that._dataService.delete(data).then(function (data) {
                    that.postDeleteObject();
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
     * @return any
     */
    DataBoxExtensionComponent.prototype.postCancelObject = function () {
        return this;
    };
    /**
     * Post (after) delete object event. Use this function to handle event.
     * @return any
     */
    DataBoxExtensionComponent.prototype.postDeleteObject = function () {
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
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__data_box_component__ = __webpack_require__("../../../../../src/AppBundle/Resources/public/data-box/ts/src/data-box.component.ts");
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
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* NgModule */])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_common__["a" /* CommonModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_forms__["b" /* FormsModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_forms__["c" /* ReactiveFormsModule */],
                __WEBPACK_IMPORTED_MODULE_3__ts_search_search_module__["a" /* SearchModule */],
                __WEBPACK_IMPORTED_MODULE_5__ts_search_search_pagination_module__["a" /* SearchPaginationModule */],
                __WEBPACK_IMPORTED_MODULE_4__ts_expander_expander_module__["a" /* ExpanderModule */]
            ],
            declarations: [
                __WEBPACK_IMPORTED_MODULE_6__data_box_component__["a" /* DataBoxComponent */]
            ],
            exports: [__WEBPACK_IMPORTED_MODULE_6__data_box_component__["a" /* DataBoxComponent */]]
        })
    ], DataBoxExtensionModule);
    return DataBoxExtensionModule;
}());



/***/ }),

/***/ "../../../../../src/AppBundle/Resources/public/data-box/ts/templates/data-box.component.html":
/***/ (function(module, exports) {

module.exports = "\n<div class=\"ibox\">\n            <div class=\"ibox-title\" *ngIf=\"!getProviderExtraDataAttr('hasMergeHeader')\">\n            <h5>\n                <ng-template [ngIf]=\"getProviderAttr('controls')['expander']\"><js_expander\n                    [isExpanded]=\"_isExpanded || null\"\n                    [label]=\"getProviderAttr('label')\"\n                    (onChange)=\"expanderAction($event)\"></js_expander></ng-template>\n                <ng-template [ngIf]=\"!getProviderAttr('controls')['expander']\">\n                    <span [innerHTML]=\"getProviderAttr('label')\"></span>\n                </ng-template>\n            </h5>\n            <div *ngIf=\"_isExpanded\"\n                 class=\"txt-align-r hide-on-empty\">    <div class=\"actions no-user-select\">\n        <ng-template [ngIf]=\"_actionsService.getActionAttr('search', 'isEnabled')\"><js_search class=\"search\"></js_search></ng-template>\n        <div (click)=\"triggerAction($event)\">\n            <ng-template ngFor let-action [ngForOf]=\"_actionsService.getHeadActions()\">\n                <a *ngIf=\"_actionsService.getActionAttr(action, 'isEnabled')\"\n                   [ngClass]=\"[_actionsService.getActionAttr(action, 'icon')]\"\n                   class=\"-round fa\"\n                   [attr.data-action]=\"action\"></a>\n            </ng-template>\n        </div>\n    </div>\n</div>\n        </div>\n    \n    <div [hidden]=\"!(_isExpanded)\" class=\"ibox-content hide-on-empty\">    <ng-template [ngIf]=\"(_dataService.getProviderAttr('objects') && _dataService.getProviderAttr('objects')[0])\">\n        <div class=\"table-responsive\">\n        <form>\n            <table class=\"data-table table table-striped table-bordered table-hover dataTables-example\">\n                <thead>\n                <tr>\n                    <th *ngFor=\"let searchField of _dataService.getSearch('fields')\">{{ _dataService.getFields('metadata')[searchField].label }}</th>\n                    <th>&nbsp;</th>\n                </tr>\n                </thead>\n                <tbody>\n                <ng-template ngFor let-obj [ngForOf]=\"_dataService.getProviderAttr('objects')\" let-objIndex=\"index\"><tr\n                          (dblclick)=\"editAction($event, objIndex)\"\n                          [class.disabled]=\"obj.hasOwnProperty('isEnabled') && (obj.isEnabled.search('fa-ban') > 0)\">\n                    <td *ngFor=\"let searchField of _dataService.getSearch('fields')\"\n                        [ngClass]=\"getColAlign(searchField)\"\n                        [innerHTML]=\"obj[searchField]\"></td>\n                    <td>\n                        <span *ngIf=\"obj['_isNew']\" class=\"badge badge-info\">New</span>\n                        <span *ngIf=\"obj['_isEdited']\" class=\"badge badge-info\">Edited</span>\n                        <input *ngIf=\"_actionsService.getActionAttr('radioChoice', 'isEnabled')\"\n                               class=\"pull-right action\"\n                               type=\"radio\"\n                               name=\"index[]\"\n                               value=\"{{objIndex}}\"/>\n                        <input *ngIf=\"_actionsService.getActionAttr('checkAll', 'isEnabled')\"\n                               class=\"pull-right action js_checkAll\"\n                               type=\"checkbox\"\n                               name=\"index[]\"\n                               value=\"{{objIndex}}\"\n                               [ngModel]=\"checkAll\"/>\n                        <div class=\"pull-right actions no-user-select\" (click)=\"triggerAction($event)\">\n                            <ng-template ngFor let-action [ngForOf]=\"_actionsService.getDetailActions()\">\n                                <a *ngIf=\"_actionsService.getActionAttr(action, 'isEnabled')\"\n                                   [ngClass]=\"[_actionsService.getActionAttr(action, 'icon')]\"\n                                   class=\"fa\"\n                                   [attr.data-action]=\"action\"\n                                   [attr.data-value]=\"objIndex\"></a>\n                            </ng-template>\n                        </div>\n                    </td>\n                </tr></ng-template>\n                </tbody>\n            </table>\n        </form>\n    </div>\n    </ng-template><p\n        class=\"text-center\"\n        *ngIf=\"!(_dataService.getProviderAttr('objects') && _dataService.getProviderAttr('objects')[0])\">No results.</p>\n</div>\n        <div class=\"ibox-footer\"\n         *ngIf=\"_dataService.countObjects() > 0\"><js_searchPagination></js_searchPagination></div>\n\n</div>\n\n"

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
            template: "<div class=\"modal-header\">\n        <h3 class=\"modal-title\">{{title}}</h3>\n    </div>\n    <div class=\"modal-body\">{{body}}</div>\n    <div class=\"modal-footer\">\n        <button *ngIf=\"isDialog\" class=\"btn btn-default\" (click)=\"closeAction($event, false)\">Cancel</button>\n        <button class=\"btn btn-primary\" (click)=\"closeAction($event, true)\">Ok</button>\n    </div>\n    "
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_core__["r" /* ElementRef */],
            __WEBPACK_IMPORTED_MODULE_0__angular_core__["S" /* Renderer */]])
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
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* NgModule */])({
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
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_5" /* ViewChild */])('js_modalContainer', { read: __WEBPACK_IMPORTED_MODULE_0__angular_core__["_7" /* ViewContainerRef */] }),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["_7" /* ViewContainerRef */])
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
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* NgModule */])({
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
            var unresolvedProviders = (popup.providers || []), resolvedProviders = __WEBPACK_IMPORTED_MODULE_0__angular_core__["R" /* ReflectiveInjector */].resolve(unresolvedProviders);
            popup.injector = __WEBPACK_IMPORTED_MODULE_0__angular_core__["R" /* ReflectiveInjector */].fromResolvedProviders(resolvedProviders, injector);
        }
        // Create popup
        return new Promise(function (resolve, reject) {
            that._dynamicComponentLoaderService.load(popup.module, popup.component, modalComponentInstance.getModalContainerRef(), (popup.injector || null)).then(function (componentRef) {
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
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["x" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__ts_dynamic_component_loader_service__["a" /* DynamicComponentLoaderService */]])
    ], ModalService);
    return ModalService;
}());



/***/ }),

/***/ "../../../../../src/AppBundle/Resources/public/tabs/ts/src/tabs.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TabsComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__tabs_ext_component__ = __webpack_require__("../../../../../src/AppBundle/Resources/public/tabs/ts/src/tabs.ext-component.ts");
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



var TabsComponent = (function (_super) {
    __extends(TabsComponent, _super);
    function TabsComponent(elementRef, renderer, provider, helperService, navManagerService) {
        var _this = _super.call(this) || this;
        _super.prototype.initTabsExtComponent.call(_this, elementRef, renderer, provider || null, helperService, navManagerService);
        return _this;
    }
    /**
     * Lifecycle callback
     */
    TabsComponent.prototype.ngAfterViewInit = function () {
        // Initializes the children navigation manager service
        this._navManagerService.init(this, this.lazyLoadViewContainerRefQL);
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_6" /* ViewChildren */])('js_lazyLoadContainer', { read: __WEBPACK_IMPORTED_MODULE_0__angular_core__["_7" /* ViewContainerRef */] }),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["Q" /* QueryList */])
    ], TabsComponent.prototype, "lazyLoadViewContainerRefQL", void 0);
    TabsComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: '.js_tabs',
            template: '' // Define template in child component
        }),
        __param(2, Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["K" /* Optional */])()), __param(2, Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["w" /* Inject */])('Provider')),
        __param(3, Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["w" /* Inject */])('HelperService')),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_core__["r" /* ElementRef */],
            __WEBPACK_IMPORTED_MODULE_0__angular_core__["S" /* Renderer */], Object, Object, __WEBPACK_IMPORTED_MODULE_2__ts_nav_manager_nav_manager_service__["a" /* NavManagerService */]])
    ], TabsComponent);
    return TabsComponent;
}(__WEBPACK_IMPORTED_MODULE_1__tabs_ext_component__["a" /* TabsExtComponent */]));



/***/ }),

/***/ "../../../../../src/AppBundle/Resources/public/tabs/ts/src/tabs.ext-component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TabsExtComponent; });
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


var TabsExtComponent = (function (_super) {
    __extends(TabsExtComponent, _super);
    function TabsExtComponent() {
        return _super.call(this) || this;
    }
    TabsExtComponent.prototype.initTabsExtComponent = function (elementRef, renderer, provider, helperService, navManagerService) {
        _super.prototype.initBaseExtensionComponent.call(this, elementRef, renderer, provider || null);
        // Constructor vars
        this._helperService = helperService;
        this._navManagerService = navManagerService;
    };
    /**
     * Lifecycle callback
     */
    TabsExtComponent.prototype.ngAfterViewInit = function () {
        // Initializes the children navigation manager service
        this._navManagerService.init(this, this.lazyLoadViewContainerRefQL);
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_6" /* ViewChildren */])('js_lazyLoadContainer', { read: __WEBPACK_IMPORTED_MODULE_0__angular_core__["_7" /* ViewContainerRef */] }),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["Q" /* QueryList */])
    ], TabsExtComponent.prototype, "lazyLoadViewContainerRefQL", void 0);
    TabsExtComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: '.js_tabs',
            template: ''
        }),
        __metadata("design:paramtypes", [])
    ], TabsExtComponent);
    return TabsExtComponent;
}(__WEBPACK_IMPORTED_MODULE_1__ts_base_base_extension_component__["a" /* BaseExtensionComponent */]));



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
        this._headActions = ['refresh', 'deleteAll', 'add', 'checkAll']; // Default actions for massive objects
        this._detailActions = ['orderUp', 'orderDown', 'detail', 'thumbnail', 'avatar', 'cancel', 'delete', 'copy', 'edit']; // Default actions for single object
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
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["x" /* Injectable */])(),
        __param(0, Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["w" /* Inject */])('ActionsServiceProvider')),
        __metadata("design:paramtypes", [Object])
    ], ActionsService);
    return ActionsService;
}());



/***/ }),

/***/ "../../../../../src/AppBundle/Resources/public/ts/base/base.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BaseComponent; });
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
 * Used only as base component to be extended for others components
 */
// Component
var BaseComponent = (function () {
    function BaseComponent(_elementRef, _renderer, 
        // This provider can becomes any provider defined by your child
        // (don't need the "inject" because it's a static class, so will be provider by children components)
        _provider) {
        if (_provider === void 0) { _provider = {}; }
        this._elementRef = _elementRef;
        this._renderer = _renderer;
        this._provider = _provider;
        // Set defaults
        if (!this._provider) {
            this._provider = {};
        }
        // Set main class
        var mainClass = this.getProviderExtraDataAttr('class');
        if (mainClass) {
            this._renderer.setElementClass(this._elementRef.nativeElement, mainClass, true);
        }
    }
    /**
     * Get provider attribute
     * @param attribute
     * @returns {any|null}
     */
    BaseComponent.prototype.getProviderAttr = function (attribute) {
        return this._provider[attribute] || null;
    };
    /**
     * Get provider extra data attribute
     * @param attribute
     * @returns {any|null}
     */
    BaseComponent.prototype.getProviderExtraDataAttr = function (attribute) {
        return ((this._provider['extraData'] && this._provider['extraData'][attribute])
            ? this._provider['extraData'][attribute]
            : null);
    };
    BaseComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: '.js_base',
            template: ''
        }),
        __param(2, Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["K" /* Optional */])()),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_core__["r" /* ElementRef */],
            __WEBPACK_IMPORTED_MODULE_0__angular_core__["S" /* Renderer */], Object])
    ], BaseComponent);
    return BaseComponent;
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
    /**
     * Initialization of component (replace the original constructor to avoid angular injection inheritance bug)
     * @param elementRef
     * @param renderer
     * @param provider
     */
    BaseExtensionComponent.prototype.initBaseExtensionComponent = function (elementRef, renderer, 
        // This provider can becomes any provider defined by your child
        // (don't need the "inject" because it's a static class, so will be provider by children components)
        provider) {
        // Constructor vars
        this._elementRef = elementRef;
        this._renderer = renderer;
        this._provider = provider;
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
     * Get provider attribute
     * @param attribute
     * @returns {any|null}
     */
    BaseExtensionComponent.prototype.getProviderAttr = function (attribute) {
        return this._provider[attribute] || null;
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
    function DataService(_postService, _helperService, _provider, _sanitizer) {
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
        if (this._provider['pin']) {
            this.pinProvider();
        }
        this._onObjectChangeEmitter = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["t" /* EventEmitter */]();
        this._onObjectsRefreshEmitter = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["t" /* EventEmitter */]();
        this._onObjectsChangeEmitter = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["t" /* EventEmitter */]();
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
     * @returns any
     */
    DataService.prototype.getObject = function () {
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
            this.post(route, this.getRequestData(null, false, false)).then(function (data) {
                // Local data (do not override, merge data)
                if (data['localData']) {
                    that_1._provider.localData = that_1._helperService.mergeObjects(that_1._provider.localData, data['localData']);
                }
                var obj = (data.object || null);
                // Refresh object
                if (obj) {
                    that_1.setObject(data.object, that_1._objectIndex);
                }
            }, function (errors) { console.log(errors); });
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
                        that._provider.localData = that._helperService.mergeObjects(that._provider.localData, data['localData']);
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
        if (key in this._provider.fieldsChoices[field]['value']) {
            return this._provider.fieldsChoices[field]['value'][key];
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
        if (this._provider.fieldsChoices[field] && (attribute in this._provider.fieldsChoices[field])) {
            return this._provider.fieldsChoices[field][attribute];
        }
        return null;
    };
    /**
     * Get field choices
     * @param field
     * @returns {*|null}
     */
    DataService.prototype.getFieldChoices = function (field) {
        return this._provider.fieldsChoices[field]['value'] || null;
    };
    /**
     * Set fields choices.
     * @param fieldsChoices
     * @returns {DataService}
     */
    DataService.prototype.setFieldsChoices = function (fieldsChoices) {
        this._provider.fieldsChoices = fieldsChoices;
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
        return this._provider[attribute] || null;
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
     * @returns any
     */
    DataService.prototype.normalizeObjectsToTemplate = function (objects, fields) {
        if (objects === void 0) { objects = null; }
        if (fields === void 0) { fields = null; }
        objects = (objects || this._provider.objects);
        fields = (fields || this._provider.fields['view']);
        if (objects && fields) {
            for (var _i = 0, fields_1 = fields; _i < fields_1.length; _i++) {
                var field = fields_1[_i];
                var fieldMetadata = this._provider.fields['metadata'][field];
                if (fieldMetadata['skipNormalizer']) {
                    continue;
                }
                switch (fieldMetadata['type']) {
                    case 'boolean':
                    case 'code':
                    case 'percentage':
                    case 'monetary':
                    case 'icon':
                    case 'link':
                    case 'img':
                    case 'avatar':
                    case 'status':
                        for (var _a = 0, objects_2 = objects; _a < objects_2.length; _a++) {
                            var obj = objects_2[_a];
                            if (typeof obj[field] != 'undefined') {
                                obj[field] = this.renderField(field, obj);
                            }
                        }
                        break;
                }
                // For "enum" type (key is the label, pattern of Symfony ChoiceType)
                if (this._provider.fieldsChoices
                    && this._provider.fieldsChoices[field]
                    && this._provider.fieldsChoices[field]['value']) {
                    var enumObj = this._provider.fieldsChoices[field]['value'];
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
        }
        return this;
    };
    /**
     * Render field
     * @param field
     * @param object
     * @returns {string}
     */
    DataService.prototype.renderField = function (field, object) {
        // Get field metadata
        var fieldMetadata = (this._provider.fields['metadata'][field] || null), value = object[field];
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
                    return ('<a href="' + value + '" target="_blank">' + value + '</a>');
                case 'img':
                case 'avatar':
                    var extraClass = ((fieldMetadata['type'] == 'avatar') ? 'img-circle' : 'thumbnail');
                    return (value
                        ? ('<img alt="' + fieldMetadata['label'] + '" class="' + extraClass + '" src="'
                            + (this._helperService.getUploadWebPath(value) || value)
                            + '">')
                        : null);
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
                // Objects has pre existent data (for example can be from backend session storage)
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
                            that._provider.localData = that._helperService.mergeObjects(that._provider.localData, data['localData']);
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
            that.post(route, that.getRequestData(data)).then(function (data) {
                // Refresh all objects
                if (data.objects) {
                    that.setObjects(data.objects);
                }
                // Refresh fields choices
                if (data.fieldsChoices) {
                    that.setFieldsChoices(data.fieldsChoices);
                }
                // Local data (do not override, merge data)
                if (data['localData']) {
                    that._provider.localData = that._helperService.mergeObjects(that._provider.localData, data['localData']);
                }
                var obj = (data.object || null);
                // Refresh object
                if (obj) {
                    that.setObject(data.object, that._objectIndex);
                }
                return resolve(obj);
            }, function (errors) {
                // Local data (do not override, merge data). Exception in errors list used in some cases.
                if (errors['localData']) {
                    that._provider.localData = that._helperService.mergeObjects(that._provider.localData, errors['localData']);
                    delete errors['localData']; // It's no more necessary
                }
                // Refresh object
                if (errors['object']) {
                    that.setObject(errors['object'], that._objectIndex);
                    delete errors['object']; // It's no more necessary
                }
                return reject(errors);
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
        this.post(this._provider.route['get']['url'], this.getRequestData(null, false)).then(function (data) {
            // Update list of objects
            that.setObjects(data.objects || null);
            that.setFieldsChoices(data.fieldsChoices || null);
        }, function (errors) { console.log(errors); });
        return this;
    };
    /**
     * Get more objects (pagination)
     * @returns {DataService}
     */
    DataService.prototype.getMoreObjects = function () {
        var that = this;
        this.post(this._provider.route['get']['url'], this.getRequestData()).then(function (data) {
            // Update list of objects
            that.setObjects(data.objects || [], true);
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
            this._provider['search']['criteria'] = this._helperService.cloneObject(this._candidateSearch['criteria'], true);
            // Reset pagination for new search
            this.resetPagination();
            // To reset objects
            noReset = false;
        }
        // No field is necessary, is returned the choices pattern (minimizes data sent)
        this._provider['search']['fields'] = [];
        this.post(this._provider.route['choices']['url'], this.getRequestData(null, noReset)).then(function (data) {
            // Update list of objects
            that.setObjects(data.objects || [], noReset);
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
            this.post((this._provider.route['order']['url'] + '/' + objectsProvider[index]['id'] + '/' + OrderTypes[type]), that.getRequestData()).then(function (data) {
                // Refresh all objects
                if (data.objects) {
                    that.setObjects(data.objects);
                }
                // Refresh fields choices
                if (data.fieldsChoices) {
                    that.setFieldsChoices(data.fieldsChoices);
                }
                var obj = (data.object || null);
                // Refresh object
                if (obj) {
                    that.setObject(obj, index);
                    // If objects are not returned, then order objects by "search" "orderBy" provider
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
            that.post(that._provider.route['cancel']['url'] + '/' + objectsProvider[index]['id'], that.getRequestData()).then(function (data) {
                // Refresh all objects
                if (data.objects) {
                    that.setObjects(data.objects);
                }
                // Refresh fields choices
                if (data.fieldsChoices) {
                    that.setFieldsChoices(data.fieldsChoices);
                }
                var obj = (data.object || null);
                // Refresh object
                if (obj) {
                    that.setObject(obj, index);
                }
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
            that.post(that._provider.route['delete']['url'] + '/' + objectsProvider[index]['id'], that.getRequestData()).then(function (data) {
                // Refresh all objects
                if (data.objects) {
                    that.setObjects(data.objects);
                }
                else {
                    // Refresh objects array removing the removed object
                    that.pullFromObjects(index);
                }
                // Refresh fields choices
                if (data.fieldsChoices) {
                    that.setFieldsChoices(data.fieldsChoices);
                }
                // Reset object index
                that._objectIndex = null;
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
        this.post(this._provider.route['delete']['url'], this.getRequestData({ id: idArr })).then(function (data) {
            // Refresh fields choices
            if (data.fieldsChoices) {
                that.setFieldsChoices(data.fieldsChoices);
            }
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
        var objectsProvider = (this._objectsProvider || this._provider.objects);
        location.href = (this._provider.route[route]['url'] + '/' + objectsProvider[index]['id']);
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
            return that.post(route, that.getRequestData(data, false, false)).then(function (data) {
                if (updateData) {
                    // Local data (do not override, merge data)
                    if (data['localData']) {
                        that._provider.localData = that._helperService.mergeObjects(that._provider.localData, data['localData']);
                    }
                    // Refresh object
                    if (data['object']) {
                        that.setObject(data.object, that._objectIndex);
                    }
                }
                return resolve(data);
            }, function (errors) { return reject(errors); });
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
     * Post to server.
     * @param url
     * @param data
     * @returns {Promise}
     */
    DataService.prototype.post = function (url, data) {
        if (data === void 0) { data = null; }
        var that = this;
        return new Promise(function (resolve, reject) {
            return that._postService.post(url, data).then(function (data) {
                // Update search
                if (data['search'] && (typeof data['search']['hasMore'] != 'undefined')) {
                    // Equals search in provider and candidate search to avoid return false
                    // in comparisons doing unnecessary searches.
                    that._candidateSearch.hasMore = that._provider.search.hasMore
                        = that._helperService.castToBoolean(data['search']['hasMore']);
                    that._candidateSearch.offset = that._provider.search.offset
                        = (data['search']['offset'] || 0);
                }
                return resolve(data);
            }, function (errors) { return reject(errors); });
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
    DataService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["x" /* Injectable */])(),
        __param(1, Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["w" /* Inject */])('HelperService')),
        __param(2, Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["w" /* Inject */])('DataServiceProvider')),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__post_service__["a" /* PostService */], Object, Object, __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__["b" /* DomSanitizer */]])
    ], DataService);
    return DataService;
}());



/***/ }),

/***/ "../../../../../src/AppBundle/Resources/public/ts/dynamic-component-loader.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DynamicComponentLoaderService; });
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

// Service
var DynamicComponentLoaderService = (function () {
    function DynamicComponentLoaderService(_compiler) {
        this._compiler = _compiler;
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
        var that = this;
        return new Promise(function (resolve, reject) {
            that.getComponentFactory(module, component).then(function (componentFactory) {
                var componentRef = viewContainerRef.createComponent(componentFactory, 0, injector, []);
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
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["x" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_core__["k" /* Compiler */]])
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
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Input */])(),
        __metadata("design:type", Boolean)
    ], ExpanderComponent.prototype, "isExpanded", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Input */])(),
        __metadata("design:type", String)
    ], ExpanderComponent.prototype, "label", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Input */])(),
        __metadata("design:type", Boolean)
    ], ExpanderComponent.prototype, "hasIcon", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Input */])(),
        __metadata("design:type", String)
    ], ExpanderComponent.prototype, "customClass", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["L" /* Output */])(),
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
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* NgModule */])({
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
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["x" /* Injectable */])(),
        __metadata("design:paramtypes", [])
    ], FlashMessageService);
    return FlashMessageService;
}());



/***/ }),

/***/ "../../../../../src/AppBundle/Resources/public/ts/form/field-types/field-type-auto-complete.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FieldTypeAutoCompleteComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__data_service_data_service__ = __webpack_require__("../../../../../src/AppBundle/Resources/public/ts/data-service/data.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__modal_ts_modal_service__ = __webpack_require__("../../../../../src/AppBundle/Resources/public/modal/ts/modal.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__post_service__ = __webpack_require__("../../../../../src/AppBundle/Resources/public/ts/post.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__AppBundle_Resources_public_ts_form_form_service__ = __webpack_require__("../../../../../src/AppBundle/Resources/public/ts/form/form.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__data_box_ts_src_data_box_component__ = __webpack_require__("../../../../../src/AppBundle/Resources/public/data-box/ts/src/data-box.component.ts");
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
    function FieldTypeAutoCompleteComponent(_postService, _modalService, _dataService, _formService, _injector, _autoCompleteProviders, _helperService) {
        var _this = this;
        this._postService = _postService;
        this._modalService = _modalService;
        this._dataService = _dataService;
        this._formService = _formService;
        this._injector = _injector;
        this._autoCompleteProviders = _autoCompleteProviders;
        this._helperService = _helperService;
        this.placeholder = ''; // Set empty as default, because value can be undefined
        this.onChange = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["t" /* EventEmitter */](); // When choice change or the data of current choice is edited
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
                this._lastSelectedChoice = { id: choice.id, label: choice.label };
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
        if (popupType === void 0) { popupType = __WEBPACK_IMPORTED_MODULE_5__data_box_ts_src_data_box_component__["b" /* PopupTypes */].edit; }
        var that = this;
        // Inject object to edit in child DataService
        if (this._object[this.field]) {
            // Simulate object
            var object = { id: this._object[this.field] };
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
        // Dependency conf previously saved in provider
        if (this._provider.childInjector) {
            this._childInjector = this._provider.childInjector;
            this.init();
            return;
        }
        // Dependency conf for first time
        var that = this;
        that._postService.post(this._provider.urlConf, null).then(function (data) {
            // Notice that both DataService share the same DataServiceProvider! It needs to be fixed.
            var dataServiceProvider = that._helperService.getDataServiceProvider(data);
            dataServiceProvider['pin'] = true;
            // Set child injector
            var resolvedProviders = __WEBPACK_IMPORTED_MODULE_0__angular_core__["R" /* ReflectiveInjector */].resolve([
                { provide: 'DataServiceChoices', useClass: __WEBPACK_IMPORTED_MODULE_1__data_service_data_service__["a" /* DataService */] },
                { provide: 'DataService', useClass: __WEBPACK_IMPORTED_MODULE_1__data_service_data_service__["a" /* DataService */] },
                { provide: 'DataServiceProvider', useValue: dataServiceProvider },
                { provide: 'Provider', useValue: that._helperService.getDataBoxProvider(data) }
            ]);
            that._childInjector = __WEBPACK_IMPORTED_MODULE_0__angular_core__["R" /* ReflectiveInjector */].fromResolvedProviders(resolvedProviders, that._injector);
            // Save childInjector (check out the context in the provider definition)
            that._provider.childInjector = that._childInjector;
            that.init();
            // Add parameter to action route
            if (that._provider.urlChoicesParams) {
                that._childDataServiceChoices.setRoute('choices', (that._childDataServiceChoices.getRoute('choices') + '/' + that._provider.urlChoicesParams));
            }
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
        // Reset criteria to avoid inject default criteria sent from controller to template
        this._childCandidateSearch['criteria'] = [];
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
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Input */])(),
        __metadata("design:type", String)
    ], FieldTypeAutoCompleteComponent.prototype, "field", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Input */])(),
        __metadata("design:type", Boolean)
    ], FieldTypeAutoCompleteComponent.prototype, "selfReference", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Input */])(),
        __metadata("design:type", String)
    ], FieldTypeAutoCompleteComponent.prototype, "placeholder", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["L" /* Output */])(),
        __metadata("design:type", Object)
    ], FieldTypeAutoCompleteComponent.prototype, "onChange", void 0);
    FieldTypeAutoCompleteComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'js_autoComplete',
            template: "\n    <div class=\"auto-complete\">\n        <div class=\"input-group\">\n            <span class=\"control\">\n                <input class=\"form-control\"\n                       (click)=\"onInputClick($event)\"\n                       (input)=\"onEnterKey($event)\"\n                       [ngModel]=\"_label\"\n                       [class.error]=\"_formService.getErrors()[field] && (_formService.getErrors()[field].length > 0)\"\n                       type=\"text\"\n                       [placeholder]=\"placeholder\">\n                <a (click)=\"onControlClick($event)\"><i class=\"fa fa-angle-down\"></i></a>\n            </span>\n            <span class=\"input-group-btn\" *ngIf=\"_controlMode\">\n                <button (click)=\"triggerAction($event)\"\n                        class=\"btn btn-primary\"\n                        type=\"button\"><i class=\"fa\"\n                                         [class.fa-check]=\"_controlMode == 'save'\"\n                                         [class.fa-plus]=\"_controlMode == 'add'\"\n                                         [class.fa-pencil]=\"_controlMode == 'edit'\"></i></button>\n            </span>\n        </div>\n        <div class=\"choices\">\n            <ul [hidden]=\"_isHidden\"\n                (click)=\"onChoiceClick($event)\">\n                <ng-template [ngIf]=\"selfReference\"><ng-template ngFor let-choice [ngForOf]=\"_choices\" let-choiceIndex=\"index\">\n                    <li *ngIf=\"choice['id'] != _object['id']\"\n                        [attr.data-index]=\"choiceIndex\">{{choice['label']}}</li>\n                </ng-template></ng-template>\n                <ng-template [ngIf]=\"!selfReference\">\n                    <li *ngFor=\"let choice of _choices; let choiceIndex = index\"\n                        [attr.data-index]=\"choiceIndex\">{{choice['label']}}</li>\n                </ng-template>\n                <li *ngIf=\"_childCandidateSearch && _childCandidateSearch.hasMore\"\n                    (click)=\"getMoreObjects($event)\"\n                    class=\"-pagination\"\n                    title=\"Load more results...\"><span>...</span></li>\n            </ul>\n        </div>\n    </div>\n    ",
            host: {
                '(document:click)': 'onDocumentClick($event)',
            }
        }),
        __param(2, Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["w" /* Inject */])('DataService')),
        __param(5, Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["w" /* Inject */])('AutoCompleteProviders')),
        __param(6, Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["w" /* Inject */])('HelperService')),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3__post_service__["a" /* PostService */],
            __WEBPACK_IMPORTED_MODULE_2__modal_ts_modal_service__["a" /* ModalService */], Object, __WEBPACK_IMPORTED_MODULE_4__AppBundle_Resources_public_ts_form_form_service__["a" /* FormService */],
            __WEBPACK_IMPORTED_MODULE_0__angular_core__["z" /* Injector */], Object, Object])
    ], FieldTypeAutoCompleteComponent);
    return FieldTypeAutoCompleteComponent;
}());



/***/ }),

/***/ "../../../../../src/AppBundle/Resources/public/ts/form/field-types/field-type-date-picker.directive.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FieldTypeDatePickerDirective; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__AppBundle_Resources_public_ts_form_form_service__ = __webpack_require__("../../../../../src/AppBundle/Resources/public/ts/form/form.service.ts");
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
                        var dateRanges_1 = (this_1._dataService.getProviderAttr('localData')[rule['value']] || []);
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
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Input */])('datePicker'),
        __metadata("design:type", String)
    ], FieldTypeDatePickerDirective.prototype, "field", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Input */])('control'),
        __metadata("design:type", Object)
    ], FieldTypeDatePickerDirective.prototype, "control", void 0);
    FieldTypeDatePickerDirective = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["q" /* Directive */])({
            selector: '[datePicker]',
            host: {
                '(document:click)': 'onDocumentClick($event)',
            }
        }),
        __param(2, Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["w" /* Inject */])('DataService')),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_core__["r" /* ElementRef */],
            __WEBPACK_IMPORTED_MODULE_1__AppBundle_Resources_public_ts_form_form_service__["a" /* FormService */], Object])
    ], FieldTypeDatePickerDirective);
    return FieldTypeDatePickerDirective;
}());



/***/ }),

/***/ "../../../../../src/AppBundle/Resources/public/ts/form/field-types/field-type-html-select.directive.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FieldTypeHtmlSelectDirective; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__form_service__ = __webpack_require__("../../../../../src/AppBundle/Resources/public/ts/form/form.service.ts");
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
        this.onChange = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["t" /* EventEmitter */]();
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
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Input */])('htmlSelect'),
        __metadata("design:type", String)
    ], FieldTypeHtmlSelectDirective.prototype, "field", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["L" /* Output */])(),
        __metadata("design:type", Object)
    ], FieldTypeHtmlSelectDirective.prototype, "onChange", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["v" /* HostListener */])('click', ['$event']),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Object]),
        __metadata("design:returntype", void 0)
    ], FieldTypeHtmlSelectDirective.prototype, "onMouseClick", null);
    FieldTypeHtmlSelectDirective = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["q" /* Directive */])({
            selector: '[htmlSelect]',
            host: {
                '(document:click)': 'onDocumentClick($event)',
            }
        }),
        __param(2, Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["w" /* Inject */])('DataService')),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_core__["r" /* ElementRef */],
            __WEBPACK_IMPORTED_MODULE_1__form_service__["a" /* FormService */], Object])
    ], FieldTypeHtmlSelectDirective);
    return FieldTypeHtmlSelectDirective;
}());



/***/ }),

/***/ "../../../../../src/AppBundle/Resources/public/ts/form/field-types/field-type-multi-checkbox.directive.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FieldTypeMultiCheckboxDirective; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__form_service__ = __webpack_require__("../../../../../src/AppBundle/Resources/public/ts/form/form.service.ts");
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
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Input */])('multiCheckbox'),
        __metadata("design:type", String)
    ], FieldTypeMultiCheckboxDirective.prototype, "field", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["v" /* HostListener */])('click', ['$event']),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Object]),
        __metadata("design:returntype", void 0)
    ], FieldTypeMultiCheckboxDirective.prototype, "onMouseClick", null);
    FieldTypeMultiCheckboxDirective = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["q" /* Directive */])({
            selector: '[multiCheckbox]'
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_core__["r" /* ElementRef */],
            __WEBPACK_IMPORTED_MODULE_1__form_service__["a" /* FormService */]])
    ], FieldTypeMultiCheckboxDirective);
    return FieldTypeMultiCheckboxDirective;
}());



/***/ }),

/***/ "../../../../../src/AppBundle/Resources/public/ts/form/field-types/field-types.extension-module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FieldTypesExtensionModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("../../../common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__field_type_auto_complete_component__ = __webpack_require__("../../../../../src/AppBundle/Resources/public/ts/form/field-types/field-type-auto-complete.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__password_component__ = __webpack_require__("../../../../../src/AppBundle/Resources/public/ts/form/field-types/password.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__field_type_multi_checkbox_directive__ = __webpack_require__("../../../../../src/AppBundle/Resources/public/ts/form/field-types/field-type-multi-checkbox.directive.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__field_type_html_select_directive__ = __webpack_require__("../../../../../src/AppBundle/Resources/public/ts/form/field-types/field-type-html-select.directive.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__field_type_date_picker_directive__ = __webpack_require__("../../../../../src/AppBundle/Resources/public/ts/form/field-types/field-type-date-picker.directive.ts");
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
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* NgModule */])({
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

/***/ "../../../../../src/AppBundle/Resources/public/ts/form/field-types/password.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FieldTypePasswordComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__AppBundle_Resources_public_ts_form_form_service__ = __webpack_require__("../../../../../src/AppBundle/Resources/public/ts/form/form.service.ts");
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
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Input */])(),
        __metadata("design:type", String)
    ], FieldTypePasswordComponent.prototype, "field", void 0);
    FieldTypePasswordComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'js_password',
            template: "\n    <input (blur)=\"resetAction($event)\"\n           class=\"form-control\"\n           [class.error]=\"_formService.getErrors()[field] && (_formService.getErrors()[field].length > 0)\"\n           type=\"password\"\n           placeholder=\"Password\"\n           [(ngModel)]=\"_fields.password\">\n    <input (keyup)=\"validateAction($event)\"\n           class=\"form-control m-t\"\n           [class.error]=\"_formService.getErrors()[field] && (_formService.getErrors()[field].length > 0)\"\n           type=\"password\"\n           placeholder=\"Confirm password\"\n           [(ngModel)]=\"_fields.confirm\">\n    "
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__AppBundle_Resources_public_ts_form_form_service__["a" /* FormService */]])
    ], FieldTypePasswordComponent);
    return FieldTypePasswordComponent;
}());



/***/ }),

/***/ "../../../../../src/AppBundle/Resources/public/ts/form/form-popup.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FormPopupComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__form_service__ = __webpack_require__("../../../../../src/AppBundle/Resources/public/ts/form/form.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__form_popup_extension_component__ = __webpack_require__("../../../../../src/AppBundle/Resources/public/ts/form/form-popup.extension-component.ts");
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
    FormPopupComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: '.js_formPopup',
            template: '' // Define template in child component
        }),
        __param(2, Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["w" /* Inject */])('Provider')),
        __param(4, Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["w" /* Inject */])('DataService')),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_core__["r" /* ElementRef */],
            __WEBPACK_IMPORTED_MODULE_0__angular_core__["S" /* Renderer */], Object, __WEBPACK_IMPORTED_MODULE_1__form_service__["a" /* FormService */], Object])
    ], FormPopupComponent);
    return FormPopupComponent;
}(__WEBPACK_IMPORTED_MODULE_2__form_popup_extension_component__["a" /* FormPopupExtensionComponent */]));



/***/ }),

/***/ "../../../../../src/AppBundle/Resources/public/ts/form/form-popup.extension-component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FormPopupExtensionComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__form_extension_component__ = __webpack_require__("../../../../../src/AppBundle/Resources/public/ts/form/form.extension-component.ts");
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

/***/ "../../../../../src/AppBundle/Resources/public/ts/form/form.extension-component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FormExtensionComponent; });
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
}(__WEBPACK_IMPORTED_MODULE_1__base_base_extension_component__["a" /* BaseExtensionComponent */]));



/***/ }),

/***/ "../../../../../src/AppBundle/Resources/public/ts/form/form.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FormService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__modal_ts_modal_service__ = __webpack_require__("../../../../../src/AppBundle/Resources/public/modal/ts/modal.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__helper__ = __webpack_require__("../../../../../src/AppBundle/Resources/public/ts/helper.ts");
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
    function FormService(_modalService, formBuilder, _dataService, _helperService, _provider) {
        var _this = this;
        this._modalService = _modalService;
        this._dataService = _dataService;
        this._helperService = _helperService;
        this._provider = _provider;
        this._originalObject = {}; // Original object to compare changes and reset object in DataService
        this._originalNormalizedObject = {}; // Original normalized (for form) object to compare changes and reset object in form
        this._object = {}; // Object used by form
        this._$form = null; // DOM form
        this._errors = {}; // Form errors validation
        // Set default values for provider
        if (!this._provider) {
            this._provider = {};
        }
        this._onObjectChangeEmitter = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["t" /* EventEmitter */]();
        // Object change event subscription
        this._onObjectChangeSubscription = this._dataService.getOnObjectChangeEmitter()
            .subscribe(function (object) { return _this.onObjectChangeSubscription(object); });
        this._forceSubmit = false;
        this._isOnSave = false;
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
        this._$form = $(component._elementRef.nativeElement).find('form');
        this._preventObjectOverride = this._component.getProviderAttr('preventObjectOverride');
        return this;
    };
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
            && !this._isOnSave // If form is on save object will be setted by the save method when there are some correct procedures
        ) {
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
        if (object != this._originalObject) {
            // Keep the original object from dataService
            this._originalObject = object;
            this._isOnSave = false; // Waiting mode for save process ends here, after update the original object.
            // Normalize object to form
            this._originalNormalizedObject = __WEBPACK_IMPORTED_MODULE_3__helper__["a" /* Helper */].cloneObject(this._originalObject, true);
            this.normalizeObject(this._originalNormalizedObject);
            // Update form object
            this._object = __WEBPACK_IMPORTED_MODULE_3__helper__["a" /* Helper */].cloneObject(this._originalNormalizedObject, true);
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
            if (that._isOnSave) {
                // Form is already in save process
                return reject(false);
            }
            // Put form in "save" mode
            that._isOnSave = true;
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
                        that._isOnSave = false;
                        return reject(false);
                    }
                }
                // Set the valid token
                that._helperService.setFormToken(that._$form);
                // Get form data
                var data = that._$form.serialize();
                var id = that._object['id'] ? that._object['id'] : null;
                // Save form
                that._dataService.save(data, id, route).then(function (object) {
                    // Force submit is reset, each activation is valid  only once
                    that._forceSubmit = false;
                    // Update form after save with saved object
                    that.setObject(object);
                    return resolve(true);
                }, function (errors) {
                    if (errors) {
                        that._errors = errors;
                    }
                    that._isOnSave = false;
                    return reject(errors);
                });
            }
            else {
                that._isOnSave = false;
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
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["x" /* Injectable */])(),
        __param(2, Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["w" /* Inject */])('DataService')),
        __param(3, Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["w" /* Inject */])('HelperService')),
        __param(4, Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["K" /* Optional */])()), __param(4, Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["w" /* Inject */])('FormServiceProvider')),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__modal_ts_modal_service__["a" /* ModalService */],
            __WEBPACK_IMPORTED_MODULE_1__angular_forms__["a" /* FormBuilder */], Object, Object, Object])
    ], FormService);
    return FormService;
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
            fieldsChoices: data.fieldsChoices || null,
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
            imageCropPopupModule: localData['imageCropPopupModule']
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
                resizable: (data.controls && data.controls.resizable),
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
     * Get base provider
     * @param data
     * @returns any
     */
    Helper.getBaseProvider = function (data) {
        return {
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
     * Get upload web path
     * @param path
     * @returns string
     */
    Helper.getUploadWebPath = function (path) {
        if (path && path.indexOf("/upload/")) {
            return (path.substring(path.indexOf("/upload/"), path.length));
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
    // Object to use in angular modules at runtime to define global variables.
    Helper.globalVar = {};
    return Helper;
}());



/***/ }),

/***/ "../../../../../src/AppBundle/Resources/public/ts/nav-manager/nav-manager.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NavManagerService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__dynamic_component_loader_service__ = __webpack_require__("../../../../../src/AppBundle/Resources/public/ts/dynamic-component-loader.service.ts");
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
    function NavManagerService(_helperService, _injector, _dynamicComponentLoaderService, _postService) {
        this._helperService = _helperService;
        this._injector = _injector;
        this._dynamicComponentLoaderService = _dynamicComponentLoaderService;
        this._postService = _postService;
        this._llViewContainerRefArr = [];
        this._llComponentRefArr = {}; // Array of ComponentRef with loaded containers
        this._currentIndex = 0; // Index of current container
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
        this._currentIndex = 0;
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
            // Send current container to validation before load the other one
            if (that._component['submitNav'] && hasSubmit) {
                return that._component.submitNav(that._currentIndex).then(function (data) {
                    return that.loadNav(index).then(function (data) { return resolve(true); }, function (errors) { console.log(errors); return reject(false); });
                }, function (errors) { return reject(false); });
            }
            return that.loadNav(index).then(function (data) { return resolve(true); }, function (errors) { console.log(errors); return reject(false); });
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
            injector = __WEBPACK_IMPORTED_MODULE_0__angular_core__["R" /* ReflectiveInjector */].fromResolvedProviders(__WEBPACK_IMPORTED_MODULE_0__angular_core__["R" /* ReflectiveInjector */].resolve(providers), 
            // Use in firs instance the injector of the component (is more refined)
            (this._component['_injector'] || this._injector));
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
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["x" /* Injectable */])(),
        __param(0, Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["w" /* Inject */])('HelperService')),
        __metadata("design:paramtypes", [Object, __WEBPACK_IMPORTED_MODULE_0__angular_core__["z" /* Injector */],
            __WEBPACK_IMPORTED_MODULE_1__dynamic_component_loader_service__["a" /* DynamicComponentLoaderService */],
            __WEBPACK_IMPORTED_MODULE_2__post_service__["a" /* PostService */]])
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
    function PostService(_flashMessageService) {
        this._flashMessageService = _flashMessageService;
    }
    /**
     * Post. Send data to server
     * @param url
     * @param data
     * @returns {Promise}
     */
    PostService.prototype.post = function (url, data) {
        var that = this;
        return new Promise(function (resolve, reject) {
            return $.post(url, data, function (postResponse) {
                // Unknown response, generally html responses (debug, exceptions, etc.)
                if (!postResponse || (typeof postResponse !== 'object')) {
                    that.handleFlashMessages({});
                    return reject({});
                }
                // Regular response
                that.handleFlashMessages(postResponse);
                var isSuccess = (postResponse.status == 1);
                delete postResponse.status; // Is no more necessary
                // Success
                if (isSuccess) {
                    return resolve(postResponse['data'] || null);
                }
                // Error
                var errors = (postResponse['errors'] || {});
                // Add data exception into errors
                if (postResponse['data']) {
                    if (postResponse['data']['localData']) {
                        errors['localData'] = postResponse['data']['localData'];
                    }
                    if (postResponse['data']['object']) {
                        errors['object'] = postResponse['data']['object'];
                    }
                }
                return reject(errors);
            }).fail(function (errors) {
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
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["x" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__flash_message_service__["a" /* FlashMessageService */]])
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
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Input */])(),
        __metadata("design:type", Object)
    ], SearchCriteriaComponent.prototype, "injector", void 0);
    SearchCriteriaComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'js_searchCriteria',
            template: "\n    <js_expander [label]=\"'Filter'\" [hasIcon]=\"false\" [customClass]=\"'action'\" (onChange)=\"toggleIsExpanded($event, 'fields')\"></js_expander>\n    <div [hidden]=\"!_isExpanded\" class=\"col-xs-12 col-sm-12 white-dropdown search-criteria\">\n        <ng-template ngFor let-criteria [ngForOf]=\"_criteriaArr\" let-i=\"index\">\n            <div class=\"col-sm-6 controller\">\n                <div class=\"select\">\n                    <select [(ngModel)]=\"criteria['field']\"\n                            (change)=\"onFieldChange($event, criteria)\"\n                            class=\"form-control\">\n                        <ng-template ngFor let-field [ngForOf]=\"_fields\">\n                            <option *ngIf=\"!_helperService.inArray(_fieldsMetadata[field]['type'], _deniedTypes) && !_fieldsMetadata[field]['isObject']\"\n                                    value=\"{{field}}\">{{_fieldsMetadata[field]['label']}}</option>\n                        </ng-template>\n                    </select>\n                    <!-- ng switch should be here -->\n                    <ng-template [ngIf]=\"(_fieldsMetadata[criteria['field']]) && (_fieldsMetadata[criteria['field']]['type'] == 'boolean')\">\n                        <select [(ngModel)]=\"criteria['value']\"\n                                class=\"form-control\">\n                            <option *ngFor=\"let value of [{key: 1, label: 'Yes'}, {key: 0, label: 'No'}]\"\n                                    value=\"{{value['key']}}\">{{value['label']}}</option>\n                        </select>\n                    </ng-template>\n                    <ng-template [ngIf]=\"(!_fieldsMetadata[criteria['field']]) || (_fieldsMetadata[criteria['field']]['type'] != 'boolean')\">\n                        <select [(ngModel)]=\"criteria['expr']\"\n                                class=\"form-control\">\n                            <option *ngFor=\"let expr of _searchCriteriaMap.getExprMap()\"\n                                    value=\"{{expr['key']}}\">{{expr['label']}}</option>\n                        </select>\n                        <input [(ngModel)]=\"criteria['value']\"\n                               class=\"form-control\" type=\"text\">\n                    </ng-template>\n                </div>\n                <div class=\"actions\">\n                    <a *ngIf=\"_criteriaArr.length > 1\" class=\"fa fa-trash-o\" (click)=\"del($event, i)\"></a>\n                    <a *ngIf=\"(i+1) == _criteriaArr.length\" class=\"fa fa-plus\" (click)=\"add($event)\"></a>\n                </div>\n            </div>\n        </ng-template>\n    </div>\n    ",
            host: {
                '(document:click)': 'onDocumentClick($event)',
            }
        }),
        __param(1, Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["w" /* Inject */])('HelperService')),
        __param(2, Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["K" /* Optional */])()), __param(2, Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["w" /* Inject */])('DataService')),
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
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Input */])(),
        __metadata("design:type", Object)
    ], SearchFieldsComponent.prototype, "injector", void 0);
    SearchFieldsComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'js_searchFields',
            template: "\n    <js_expander [label]=\"'Fields'\" [hasIcon]=\"false\" [customClass]=\"'action'\" (onChange)=\"toggleIsExpanded($event, 'fields')\"></js_expander>\n    <div [hidden]=\"!_isExpanded\" class=\"col-xs-12 col-sm-12 white-dropdown search-fields\">\n        <select multiple size=\"6\" [(ngModel)]=\"_search['fields']\" class=\"form-control\">\n            <ng-template ngFor let-field [ngForOf]=\"_fields\">\n                <option *ngIf=\"!_helperService.inArray(_fieldsMetadata[field]['type'], _deniedTypes)\"\n                        value=\"{{field}}\">{{_fieldsMetadata[field]['label']}}</option>\n            </ng-template>\n        </select>\n    </div>\n    ",
            host: {
                '(document:click)': 'onDocumentClick($event)',
            }
        }),
        __param(1, Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["w" /* Inject */])('HelperService')),
        __param(2, Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["K" /* Optional */])()), __param(2, Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["w" /* Inject */])('DataService')),
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
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Input */])(),
        __metadata("design:type", Object)
    ], SearchOrderByComponent.prototype, "injector", void 0);
    SearchOrderByComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'js_searchOrderBy',
            template: "\n    <js_expander [label]=\"'Order'\" [hasIcon]=\"false\" [customClass]=\"'action'\" (onChange)=\"toggleIsExpanded($event, 'fields')\"></js_expander>\n    <div [hidden]=\"!_isExpanded\" class=\"col-xs-12 col-sm-12 white-dropdown search-order-by\">\n        <ng-template ngFor let-orderBy [ngForOf]=\"_orderByArray\" let-i=\"index\">\n            <div class=\"col-sm-6 controller\">\n                <div class=\"select\">\n                    <select [(ngModel)]=\"orderBy['field']\" class=\"form-control\">\n                        <ng-template ngFor let-field [ngForOf]=\"_fields\">\n                            <option *ngIf=\"!_helperService.inArray(_fieldsMetadata[field]['type'], _deniedTypes) && !_fieldsMetadata[field]['isObject']\"\n                                    value=\"{{field}}\">{{_fieldsMetadata[field]['label']}}</option>\n                        </ng-template>\n                    </select>\n                    <select [(ngModel)]=\"orderBy['value']\" class=\"form-control\">\n                        <option *ngFor=\"let value of [{key: 'ASC', label: 'Asc'}, {key: 'DESC', label: 'Desc'}]\"\n                                value=\"{{value['key']}}\">{{value['label']}}</option>\n                    </select>\n                </div>\n                <div class=\"actions\">\n                    <a *ngIf=\"_orderByArray.length > 1\" class=\"fa fa-trash-o\" (click)=\"del($event, i)\"></a>\n                    <a *ngIf=\"(i+1) == _orderByArray.length\" class=\"fa fa-plus\" (click)=\"add($event)\"></a>\n                </div>\n            </div>\n        </ng-template>\n    </div>\n    ",
            host: {
                '(document:click)': 'onDocumentClick($event)',
            }
        }),
        __param(1, Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["w" /* Inject */])('HelperService')),
        __param(2, Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["K" /* Optional */])()), __param(2, Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["w" /* Inject */])('DataService')),
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
        __param(0, Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["w" /* Inject */])('DataService')),
        __param(1, Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["w" /* Inject */])('HelperService')),
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
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* NgModule */])({
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
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Input */])(),
        __metadata("design:type", Object)
    ], SearchComponent.prototype, "injector", void 0);
    SearchComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'js_search',
            template: "\n    <js_searchCriteria [injector]=\"injector\"></js_searchCriteria>\n    <js_searchOrderBy [injector]=\"injector\"></js_searchOrderBy>\n    <js_searchFields [injector]=\"injector\"></js_searchFields>\n    <a class=\"action -round fa\"\n       [ngClass]=\"[_actionsService.getActionAttr('search', 'icon')]\"\n       (click)=\"searchAction($event)\"></a>\n    "
        }),
        __param(0, Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["K" /* Optional */])()), __param(0, Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["w" /* Inject */])('DataService')),
        __param(1, Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["K" /* Optional */])()),
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
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* NgModule */])({
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

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("../../../../../src/AdminBundle/Resources/public/store/detail/ts/src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map