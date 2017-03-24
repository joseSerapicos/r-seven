webpackJsonp([0],{

/***/ 0:
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var platform_browser_dynamic_1 = __webpack_require__(1); // The browser platform with a compiler
	var core_1 = __webpack_require__(3);
	var app_module_1 = __webpack_require__(23);
	// Log debug
	if (!_app.isDebug) {
	    core_1.enableProdMode();
	}
	// Compile and launch the module
	platform_browser_dynamic_1.platformBrowserDynamic().bootstrapModule(app_module_1.AppModule);


/***/ },

/***/ 23:
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
	    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
	    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
	    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
	    return c > 3 && r && Object.defineProperty(target, key, r), r;
	};
	var core_1 = __webpack_require__(3);
	var platform_browser_1 = __webpack_require__(21); // Common directives (NgIf, NgFor, etc.)
	var flash_message_service_1 = __webpack_require__(24);
	var app_component_1 = __webpack_require__(28);
	var AppModule = (function () {
	    function AppModule() {
	    }
	    return AppModule;
	}());
	AppModule = __decorate([
	    core_1.NgModule({
	        imports: [platform_browser_1.BrowserModule],
	        declarations: [app_component_1.AppComponent],
	        providers: [
	            flash_message_service_1.FlashMessageService
	        ],
	        bootstrap: [app_component_1.AppComponent],
	    })
	], AppModule);
	exports.AppModule = AppModule;


/***/ },

/***/ 28:
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
	    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
	    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
	    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
	    return c > 3 && r && Object.defineProperty(target, key, r), r;
	};
	var __metadata = (this && this.__metadata) || function (k, v) {
	    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
	};
	var core_1 = __webpack_require__(3);
	var flash_message_service_1 = __webpack_require__(24);
	var AppComponent = (function () {
	    function AppComponent(_flashMessageService) {
	        this._flashMessageService = _flashMessageService;
	    }
	    /**
	     * Throw flash messages
	     * @returns {AppComponent}
	     */
	    AppComponent.prototype.throwFlashMessages = function () {
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
	    AppComponent.prototype.ngOnInit = function () {
	        this.throwFlashMessages();
	        delete _app.flashMessages; // It's no longer necessary
	    };
	    return AppComponent;
	}());
	AppComponent = __decorate([
	    core_1.Component({
	        selector: '.js_app',
	        template: ''
	    }),
	    __metadata("design:paramtypes", [flash_message_service_1.FlashMessageService])
	], AppComponent);
	exports.AppComponent = AppComponent;


/***/ }

});
//# sourceMappingURL=app.js.map