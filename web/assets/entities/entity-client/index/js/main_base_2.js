webpackJsonp([0],{

/***/ 0:
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var platform_browser_dynamic_1 = __webpack_require__(1);
	/* Production Mode */
	//import {enableProdMode} from '@angular/core';
	//enableProdMode();
	/* /Production Mode */
	var core_1 = __webpack_require__(5);
	var flash_message_service_1 = __webpack_require__(328);
	var main_component_1 = __webpack_require__(332);
	// External data
	var modulesProvider = {
	    modules: _app.modules,
	    selectedMenuRoute: ((_app.local && _app.local.selectedMenuRoute) ? _app.local.selectedMenuRoute : '')
	};
	delete _app.modules; // It's no longer necessary
	platform_browser_dynamic_1.bootstrap(main_component_1.MainComponent, [
	    flash_message_service_1.FlashMessageService,
	    core_1.provide('ModulesProvider', { useValue: modulesProvider }),
	]);


/***/ },

/***/ 332:
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
	var __param = (this && this.__param) || function (paramIndex, decorator) {
	    return function (target, key) { decorator(target, key, paramIndex); }
	};
	var core_1 = __webpack_require__(5);
	var flash_message_service_1 = __webpack_require__(328);
	;
	// Component
	var MainComponent = (function () {
	    function MainComponent(_flashMessageService, _modulesProvider) {
	        this._flashMessageService = _flashMessageService;
	        this._modulesProvider = _modulesProvider;
	    }
	    /**
	     * Throw flash messages
	     * @returns {MainComponent}
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
	    /**
	     * Lifecycle callback
	     */
	    MainComponent.prototype.ngAfterViewInit = function () {
	        // Toggle active route menu
	        $("#" + this._modulesProvider['selectedMenuRoute']).parents(".js_toggleMenu").addClass('active');
	    };
	    MainComponent = __decorate([
	        core_1.Component({
	            selector: '#js_navbar',
	            template: "\n    <li *ngFor=\"let module of _modulesProvider['modules']\" class=\"js_toggleMenu\">\n        <a id=\"{{ (module['menus'].length > 1) ? '' : module['menus'][0]['route']['name'] }}\"\n           href=\"{{ (module['menus'].length > 1) ? '' : module['menus'][0]['route']['url'] }}\"\n           aria-expanded=\"false\"><i class=\"fa {{ module['appIconObj'] }}\"></i>&nbsp;<span class=\"nav-label\">{{ module['name'] }}</span>&nbsp;<span *ngIf=\"module['menus'].length > 1\" class=\"fa arrow\"></span></a>\n        <ul *ngIf=\"module['menus'].length > 1\"\n            class=\"nav nav-second-level\"\n            aria-expanded=\"false\">\n            <li *ngFor=\"let menu of module['menus']\" class=\"js_toggleMenu\">\n                <a id=\"{{ menu['route']['name'] }}\"\n                   href=\"{{ menu['route']['url'] }}\"\n                   aria-expanded=\"false\">{{ menu['name'] }}</a></li>\n        </ul>\n    </li>\n    "
	        }),
	        __param(1, core_1.Inject('ModulesProvider')), 
	        __metadata('design:paramtypes', [flash_message_service_1.FlashMessageService, Object])
	    ], MainComponent);
	    return MainComponent;
	}());
	exports.MainComponent = MainComponent;


/***/ }

});
//# sourceMappingURL=base.js.map