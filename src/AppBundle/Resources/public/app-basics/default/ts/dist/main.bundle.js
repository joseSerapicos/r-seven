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

/***/ "../../../../../src/AppBundle/Resources/public/app-basics/default/ts/$$_lazy_route_resource lazy recursive":
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
webpackEmptyAsyncContext.id = "../../../../../src/AppBundle/Resources/public/app-basics/default/ts/$$_lazy_route_resource lazy recursive";

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

/***/ "../../../../../src/AppBundle/Resources/public/app-basics/default/ts/src/main.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MainModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__ = __webpack_require__("../../../platform-browser/esm5/platform-browser.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ts_flash_message_service__ = __webpack_require__("../../../../../src/AppBundle/Resources/public/ts/flash-message.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__main_component__ = __webpack_require__("../../../../../src/AppBundle/Resources/public/app-basics/default/ts/src/main.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

 // Common directives (NgIf, NgFor, etc.)


var MainModule = (function () {
    function MainModule() {
    }
    MainModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* NgModule */])({
            imports: [__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__["a" /* BrowserModule */]],
            declarations: [
                __WEBPACK_IMPORTED_MODULE_3__main_component__["a" /* MainComponent */]
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_2__ts_flash_message_service__["a" /* FlashMessageService */]
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_3__main_component__["a" /* MainComponent */]]
        })
    ], MainModule);
    return MainModule;
}());



/***/ }),

/***/ "../../../../../src/AppBundle/Resources/public/app-basics/default/ts/src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("../../../platform-browser-dynamic/esm5/platform-browser-dynamic.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_cli_conf_environments_environment__ = __webpack_require__("../../../../../angular_cli_conf/environments/environment.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__main_module__ = __webpack_require__("../../../../../src/AppBundle/Resources/public/app-basics/default/ts/src/main.module.ts");

 // The browser platform with a compiler
 // Get environment

// Enable production environment
if (__WEBPACK_IMPORTED_MODULE_2__angular_cli_conf_environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_5" /* enableProdMode */])();
}
// Compile and launch the module
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_3__main_module__["a" /* MainModule */])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ "../../../../../src/AppBundle/Resources/public/ts/flash-message.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export FlashMessageTypes */
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

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("../../../../../src/AppBundle/Resources/public/app-basics/default/ts/src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map