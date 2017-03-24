webpackJsonp([1],[
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var platform_browser_dynamic_1 = __webpack_require__(1);
	var video_module_1 = __webpack_require__(29);
	platform_browser_dynamic_1.platformBrowserDynamic().bootstrapModule(video_module_1.VideoModule);


/***/ },
/* 1 */,
/* 2 */,
/* 3 */,
/* 4 */,
/* 5 */,
/* 6 */,
/* 7 */,
/* 8 */,
/* 9 */,
/* 10 */,
/* 11 */,
/* 12 */,
/* 13 */,
/* 14 */,
/* 15 */,
/* 16 */,
/* 17 */,
/* 18 */,
/* 19 */,
/* 20 */,
/* 21 */,
/* 22 */,
/* 23 */,
/* 24 */,
/* 25 */,
/* 26 */,
/* 27 */,
/* 28 */,
/* 29 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
	    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
	    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
	    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
	    return c > 3 && r && Object.defineProperty(target, key, r), r;
	};
	var core_1 = __webpack_require__(3);
	var platform_browser_1 = __webpack_require__(21);
	// This module doesn't use "ReactiveFormsModule", but it needs to import this class
	// to provide "formBuilder" when inject dependencies in child modules (like form)
	var forms_1 = __webpack_require__(30);
	var search_module_1 = __webpack_require__(34);
	var search_pagination_module_1 = __webpack_require__(42);
	var expander_module_1 = __webpack_require__(35);
	var helper_1 = __webpack_require__(44);
	var post_service_1 = __webpack_require__(45);
	var modal_service_1 = __webpack_require__(46);
	var form_service_1 = __webpack_require__(54);
	var flash_message_service_1 = __webpack_require__(24);
	var dynamic_component_loader_service_1 = __webpack_require__(47);
	var data_service_1 = __webpack_require__(55);
	var actions_service_1 = __webpack_require__(41);
	var nav_manager_service_1 = __webpack_require__(56);
	var wizard_manager_service_1 = __webpack_require__(57);
	var video_component_1 = __webpack_require__(58);
	// Define templateUrl to component at runtime
	helper_1.Helper.setRuntimeVar('templateUrl', _app.conf.route['add']['url']);
	var video_form_popup_module_1 = __webpack_require__(64);
	var VideoModule = (function () {
	    function VideoModule() {
	    }
	    return VideoModule;
	}());
	VideoModule = __decorate([
	    core_1.NgModule({
	        imports: [
	            platform_browser_1.BrowserModule,
	            forms_1.FormsModule,
	            forms_1.ReactiveFormsModule,
	            search_module_1.SearchModule,
	            search_pagination_module_1.SearchPaginationModule,
	            expander_module_1.ExpanderModule
	        ],
	        declarations: [
	            video_component_1.VideoComponent
	        ],
	        providers: [
	            post_service_1.PostService,
	            modal_service_1.ModalService,
	            form_service_1.FormService,
	            flash_message_service_1.FlashMessageService,
	            dynamic_component_loader_service_1.DynamicComponentLoaderService,
	            { provide: 'DataService', useClass: data_service_1.DataService },
	            actions_service_1.ActionsService,
	            { provide: 'HelperService', useValue: helper_1.Helper },
	            { provide: 'DataServiceProvider', useValue: helper_1.Helper.getDataServiceProvider(_app.conf) },
	            { provide: 'Provider', useValue: helper_1.Helper.getDataBoxProvider(_app.conf) },
	            { provide: 'ActionsServiceProvider', useValue: helper_1.Helper.getActionsServiceProvider(_app.conf) },
	            { provide: 'Popups', useValue: {
	                    module: video_form_popup_module_1.VideoFormPopupModule,
	                    component: 'VideoFormPopupComponent',
	                    providers: [
	                        { provide: 'DataService', useClass: data_service_1.DataService },
	                        form_service_1.FormService,
	                        nav_manager_service_1.NavManagerService,
	                        wizard_manager_service_1.WizardManagerService,
	                        { provide: 'Provider', useValue: helper_1.Helper.getWizardPopupProvider(_app.conf) }
	                    ]
	                } }
	        ],
	        bootstrap: [video_component_1.VideoComponent]
	    })
	], VideoModule);
	exports.VideoModule = VideoModule;


/***/ },
/* 30 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * @license Angular v2.1.2
	 * (c) 2010-2016 Google, Inc. https://angular.io/
	 * License: MIT
	 */
	(function (global, factory) {
	     true ? factory(exports, __webpack_require__(3), __webpack_require__(31), __webpack_require__(4), __webpack_require__(5), __webpack_require__(32)) :
	    typeof define === 'function' && define.amd ? define(['exports', '@angular/core', 'rxjs/operator/toPromise', 'rxjs/Subject', 'rxjs/Observable', 'rxjs/observable/fromPromise'], factory) :
	    (factory((global.ng = global.ng || {}, global.ng.forms = global.ng.forms || {}),global.ng.core,global.Rx.Observable.prototype,global.Rx,global.Rx,global.Rx.Observable));
	}(this, function (exports,_angular_core,rxjs_operator_toPromise,rxjs_Subject,rxjs_Observable,rxjs_observable_fromPromise) { 'use strict';
	
	    function isPresent(obj) {
	        return obj != null;
	    }
	    function isBlank(obj) {
	        return obj == null;
	    }
	    // JS has NaN !== NaN
	    function looseIdentical(a, b) {
	        return a === b || typeof a === 'number' && typeof b === 'number' && isNaN(a) && isNaN(b);
	    }
	    function isJsObject(o) {
	        return o !== null && (typeof o === 'function' || typeof o === 'object');
	    }
	    function isPrimitive(obj) {
	        return !isJsObject(obj);
	    }
	
	    /**
	     * Base class for control directives.
	     *
	     * Only used internally in the forms module.
	     *
	     * @stable
	     */
	    var AbstractControlDirective = (function () {
	        function AbstractControlDirective() {
	        }
	        Object.defineProperty(AbstractControlDirective.prototype, "control", {
	            get: function () { throw new Error('unimplemented'); },
	            enumerable: true,
	            configurable: true
	        });
	        Object.defineProperty(AbstractControlDirective.prototype, "value", {
	            get: function () { return isPresent(this.control) ? this.control.value : null; },
	            enumerable: true,
	            configurable: true
	        });
	        Object.defineProperty(AbstractControlDirective.prototype, "valid", {
	            get: function () { return isPresent(this.control) ? this.control.valid : null; },
	            enumerable: true,
	            configurable: true
	        });
	        Object.defineProperty(AbstractControlDirective.prototype, "invalid", {
	            get: function () { return isPresent(this.control) ? this.control.invalid : null; },
	            enumerable: true,
	            configurable: true
	        });
	        Object.defineProperty(AbstractControlDirective.prototype, "pending", {
	            get: function () { return isPresent(this.control) ? this.control.pending : null; },
	            enumerable: true,
	            configurable: true
	        });
	        Object.defineProperty(AbstractControlDirective.prototype, "errors", {
	            get: function () {
	                return isPresent(this.control) ? this.control.errors : null;
	            },
	            enumerable: true,
	            configurable: true
	        });
	        Object.defineProperty(AbstractControlDirective.prototype, "pristine", {
	            get: function () { return isPresent(this.control) ? this.control.pristine : null; },
	            enumerable: true,
	            configurable: true
	        });
	        Object.defineProperty(AbstractControlDirective.prototype, "dirty", {
	            get: function () { return isPresent(this.control) ? this.control.dirty : null; },
	            enumerable: true,
	            configurable: true
	        });
	        Object.defineProperty(AbstractControlDirective.prototype, "touched", {
	            get: function () { return isPresent(this.control) ? this.control.touched : null; },
	            enumerable: true,
	            configurable: true
	        });
	        Object.defineProperty(AbstractControlDirective.prototype, "untouched", {
	            get: function () { return isPresent(this.control) ? this.control.untouched : null; },
	            enumerable: true,
	            configurable: true
	        });
	        Object.defineProperty(AbstractControlDirective.prototype, "disabled", {
	            get: function () { return isPresent(this.control) ? this.control.disabled : null; },
	            enumerable: true,
	            configurable: true
	        });
	        Object.defineProperty(AbstractControlDirective.prototype, "enabled", {
	            get: function () { return isPresent(this.control) ? this.control.enabled : null; },
	            enumerable: true,
	            configurable: true
	        });
	        Object.defineProperty(AbstractControlDirective.prototype, "statusChanges", {
	            get: function () {
	                return isPresent(this.control) ? this.control.statusChanges : null;
	            },
	            enumerable: true,
	            configurable: true
	        });
	        Object.defineProperty(AbstractControlDirective.prototype, "valueChanges", {
	            get: function () {
	                return isPresent(this.control) ? this.control.valueChanges : null;
	            },
	            enumerable: true,
	            configurable: true
	        });
	        Object.defineProperty(AbstractControlDirective.prototype, "path", {
	            get: function () { return null; },
	            enumerable: true,
	            configurable: true
	        });
	        AbstractControlDirective.prototype.reset = function (value) {
	            if (value === void 0) { value = undefined; }
	            if (isPresent(this.control))
	                this.control.reset(value);
	        };
	        return AbstractControlDirective;
	    }());
	
	    /**
	     * @license
	     * Copyright Google Inc. All Rights Reserved.
	     *
	     * Use of this source code is governed by an MIT-style license that can be
	     * found in the LICENSE file at https://angular.io/license
	     */
	    var __extends$1 = (this && this.__extends) || function (d, b) {
	        for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	        function __() { this.constructor = d; }
	        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	    };
	    /**
	     * A directive that contains multiple {@link NgControl}s.
	     *
	     * Only used by the forms module.
	     *
	     * @stable
	     */
	    var ControlContainer = (function (_super) {
	        __extends$1(ControlContainer, _super);
	        function ControlContainer() {
	            _super.apply(this, arguments);
	        }
	        Object.defineProperty(ControlContainer.prototype, "formDirective", {
	            /**
	             * Get the form to which this container belongs.
	             */
	            get: function () { return null; },
	            enumerable: true,
	            configurable: true
	        });
	        Object.defineProperty(ControlContainer.prototype, "path", {
	            /**
	             * Get the path to this container.
	             */
	            get: function () { return null; },
	            enumerable: true,
	            configurable: true
	        });
	        return ControlContainer;
	    }(AbstractControlDirective));
	
	    // Safari doesn't implement MapIterator.next(), which is used is Traceur's polyfill of Array.from
	    // TODO(mlaval): remove the work around once we have a working polyfill of Array.from
	    var _arrayFromMap = (function () {
	        try {
	            if ((new Map()).values().next) {
	                return function createArrayFromMap(m, getValues) {
	                    return getValues ? Array.from(m.values()) : Array.from(m.keys());
	                };
	            }
	        }
	        catch (e) {
	        }
	        return function createArrayFromMapWithForeach(m, getValues) {
	            var res = new Array(m.size), i = 0;
	            m.forEach(function (v, k) {
	                res[i] = getValues ? v : k;
	                i++;
	            });
	            return res;
	        };
	    })();
	    var MapWrapper = (function () {
	        function MapWrapper() {
	        }
	        MapWrapper.createFromStringMap = function (stringMap) {
	            var result = new Map();
	            for (var prop in stringMap) {
	                result.set(prop, stringMap[prop]);
	            }
	            return result;
	        };
	        MapWrapper.keys = function (m) { return _arrayFromMap(m, false); };
	        MapWrapper.values = function (m) { return _arrayFromMap(m, true); };
	        return MapWrapper;
	    }());
	    /**
	     * Wraps Javascript Objects
	     */
	    var StringMapWrapper = (function () {
	        function StringMapWrapper() {
	        }
	        StringMapWrapper.merge = function (m1, m2) {
	            var m = {};
	            for (var _i = 0, _a = Object.keys(m1); _i < _a.length; _i++) {
	                var k = _a[_i];
	                m[k] = m1[k];
	            }
	            for (var _b = 0, _c = Object.keys(m2); _b < _c.length; _b++) {
	                var k = _c[_b];
	                m[k] = m2[k];
	            }
	            return m;
	        };
	        StringMapWrapper.equals = function (m1, m2) {
	            var k1 = Object.keys(m1);
	            var k2 = Object.keys(m2);
	            if (k1.length != k2.length) {
	                return false;
	            }
	            for (var i = 0; i < k1.length; i++) {
	                var key = k1[i];
	                if (m1[key] !== m2[key]) {
	                    return false;
	                }
	            }
	            return true;
	        };
	        return StringMapWrapper;
	    }());
	    var ListWrapper = (function () {
	        function ListWrapper() {
	        }
	        ListWrapper.removeAll = function (list, items) {
	            for (var i = 0; i < items.length; ++i) {
	                var index = list.indexOf(items[i]);
	                list.splice(index, 1);
	            }
	        };
	        ListWrapper.remove = function (list, el) {
	            var index = list.indexOf(el);
	            if (index > -1) {
	                list.splice(index, 1);
	                return true;
	            }
	            return false;
	        };
	        ListWrapper.equals = function (a, b) {
	            if (a.length != b.length)
	                return false;
	            for (var i = 0; i < a.length; ++i) {
	                if (a[i] !== b[i])
	                    return false;
	            }
	            return true;
	        };
	        ListWrapper.maximum = function (list, predicate) {
	            if (list.length == 0) {
	                return null;
	            }
	            var solution = null;
	            var maxValue = -Infinity;
	            for (var index = 0; index < list.length; index++) {
	                var candidate = list[index];
	                if (candidate == null) {
	                    continue;
	                }
	                var candidateValue = predicate(candidate);
	                if (candidateValue > maxValue) {
	                    solution = candidate;
	                    maxValue = candidateValue;
	                }
	            }
	            return solution;
	        };
	        ListWrapper.flatten = function (list) {
	            var target = [];
	            _flattenArray(list, target);
	            return target;
	        };
	        return ListWrapper;
	    }());
	    function _flattenArray(source, target) {
	        if (isPresent(source)) {
	            for (var i = 0; i < source.length; i++) {
	                var item = source[i];
	                if (Array.isArray(item)) {
	                    _flattenArray(item, target);
	                }
	                else {
	                    target.push(item);
	                }
	            }
	        }
	        return target;
	    }
	
	    var isPromise = _angular_core.__core_private__.isPromise;
	
	    function isEmptyInputValue(value) {
	        return value == null || typeof value === 'string' && value.length === 0;
	    }
	    /**
	     * Providers for validators to be used for {@link FormControl}s in a form.
	     *
	     * Provide this using `multi: true` to add validators.
	     *
	     * ### Example
	     *
	     * {@example core/forms/ts/ng_validators/ng_validators.ts region='ng_validators'}
	     * @stable
	     */
	    var NG_VALIDATORS = new _angular_core.OpaqueToken('NgValidators');
	    /**
	     * Providers for asynchronous validators to be used for {@link FormControl}s
	     * in a form.
	     *
	     * Provide this using `multi: true` to add validators.
	     *
	     * See {@link NG_VALIDATORS} for more details.
	     *
	     * @stable
	     */
	    var NG_ASYNC_VALIDATORS = new _angular_core.OpaqueToken('NgAsyncValidators');
	    /**
	     * Provides a set of validators used by form controls.
	     *
	     * A validator is a function that processes a {@link FormControl} or collection of
	     * controls and returns a map of errors. A null map means that validation has passed.
	     *
	     * ### Example
	     *
	     * ```typescript
	     * var loginControl = new FormControl("", Validators.required)
	     * ```
	     *
	     * @stable
	     */
	    var Validators = (function () {
	        function Validators() {
	        }
	        /**
	         * Validator that requires controls to have a non-empty value.
	         */
	        Validators.required = function (control) {
	            return isEmptyInputValue(control.value) ? { 'required': true } : null;
	        };
	        /**
	         * Validator that requires controls to have a value of a minimum length.
	         */
	        Validators.minLength = function (minLength) {
	            return function (control) {
	                if (isEmptyInputValue(control.value)) {
	                    return null; // don't validate empty values to allow optional controls
	                }
	                var length = typeof control.value === 'string' ? control.value.length : 0;
	                return length < minLength ?
	                    { 'minlength': { 'requiredLength': minLength, 'actualLength': length } } :
	                    null;
	            };
	        };
	        /**
	         * Validator that requires controls to have a value of a maximum length.
	         */
	        Validators.maxLength = function (maxLength) {
	            return function (control) {
	                var length = typeof control.value === 'string' ? control.value.length : 0;
	                return length > maxLength ?
	                    { 'maxlength': { 'requiredLength': maxLength, 'actualLength': length } } :
	                    null;
	            };
	        };
	        /**
	         * Validator that requires a control to match a regex to its value.
	         */
	        Validators.pattern = function (pattern) {
	            return function (control) {
	                if (isEmptyInputValue(control.value)) {
	                    return null; // don't validate empty values to allow optional controls
	                }
	                var regex = new RegExp("^" + pattern + "$");
	                var value = control.value;
	                return regex.test(value) ?
	                    null :
	                    { 'pattern': { 'requiredPattern': "^" + pattern + "$", 'actualValue': value } };
	            };
	        };
	        /**
	         * No-op validator.
	         */
	        Validators.nullValidator = function (c) { return null; };
	        /**
	         * Compose multiple validators into a single function that returns the union
	         * of the individual error maps.
	         */
	        Validators.compose = function (validators) {
	            if (!validators)
	                return null;
	            var presentValidators = validators.filter(isPresent);
	            if (presentValidators.length == 0)
	                return null;
	            return function (control) {
	                return _mergeErrors(_executeValidators(control, presentValidators));
	            };
	        };
	        Validators.composeAsync = function (validators) {
	            if (!validators)
	                return null;
	            var presentValidators = validators.filter(isPresent);
	            if (presentValidators.length == 0)
	                return null;
	            return function (control) {
	                var promises = _executeAsyncValidators(control, presentValidators).map(_convertToPromise);
	                return Promise.all(promises).then(_mergeErrors);
	            };
	        };
	        return Validators;
	    }());
	    function _convertToPromise(obj) {
	        return isPromise(obj) ? obj : rxjs_operator_toPromise.toPromise.call(obj);
	    }
	    function _executeValidators(control, validators) {
	        return validators.map(function (v) { return v(control); });
	    }
	    function _executeAsyncValidators(control, validators) {
	        return validators.map(function (v) { return v(control); });
	    }
	    function _mergeErrors(arrayOfErrors) {
	        var res = arrayOfErrors.reduce(function (res, errors) {
	            return isPresent(errors) ? StringMapWrapper.merge(res, errors) : res;
	        }, {});
	        return Object.keys(res).length === 0 ? null : res;
	    }
	
	    /**
	     * Used to provide a {@link ControlValueAccessor} for form controls.
	     *
	     * See {@link DefaultValueAccessor} for how to implement one.
	     * @stable
	     */
	    var NG_VALUE_ACCESSOR = new _angular_core.OpaqueToken('NgValueAccessor');
	
	    var CHECKBOX_VALUE_ACCESSOR = {
	        provide: NG_VALUE_ACCESSOR,
	        useExisting: _angular_core.forwardRef(function () { return CheckboxControlValueAccessor; }),
	        multi: true
	    };
	    /**
	     * The accessor for writing a value and listening to changes on a checkbox input element.
	     *
	     *  ### Example
	     *  ```
	     *  <input type="checkbox" name="rememberLogin" ngModel>
	     *  ```
	     *
	     *  @stable
	     */
	    var CheckboxControlValueAccessor = (function () {
	        function CheckboxControlValueAccessor(_renderer, _elementRef) {
	            this._renderer = _renderer;
	            this._elementRef = _elementRef;
	            this.onChange = function (_) { };
	            this.onTouched = function () { };
	        }
	        CheckboxControlValueAccessor.prototype.writeValue = function (value) {
	            this._renderer.setElementProperty(this._elementRef.nativeElement, 'checked', value);
	        };
	        CheckboxControlValueAccessor.prototype.registerOnChange = function (fn) { this.onChange = fn; };
	        CheckboxControlValueAccessor.prototype.registerOnTouched = function (fn) { this.onTouched = fn; };
	        CheckboxControlValueAccessor.prototype.setDisabledState = function (isDisabled) {
	            this._renderer.setElementProperty(this._elementRef.nativeElement, 'disabled', isDisabled);
	        };
	        CheckboxControlValueAccessor.decorators = [
	            { type: _angular_core.Directive, args: [{
	                        selector: 'input[type=checkbox][formControlName],input[type=checkbox][formControl],input[type=checkbox][ngModel]',
	                        host: { '(change)': 'onChange($event.target.checked)', '(blur)': 'onTouched()' },
	                        providers: [CHECKBOX_VALUE_ACCESSOR]
	                    },] },
	        ];
	        /** @nocollapse */
	        CheckboxControlValueAccessor.ctorParameters = [
	            { type: _angular_core.Renderer, },
	            { type: _angular_core.ElementRef, },
	        ];
	        return CheckboxControlValueAccessor;
	    }());
	
	    var DEFAULT_VALUE_ACCESSOR = {
	        provide: NG_VALUE_ACCESSOR,
	        useExisting: _angular_core.forwardRef(function () { return DefaultValueAccessor; }),
	        multi: true
	    };
	    /**
	     * The default accessor for writing a value and listening to changes that is used by the
	     * {@link NgModel}, {@link FormControlDirective}, and {@link FormControlName} directives.
	     *
	     *  ### Example
	     *  ```
	     *  <input type="text" name="searchQuery" ngModel>
	     *  ```
	     *
	     *  @stable
	     */
	    var DefaultValueAccessor = (function () {
	        function DefaultValueAccessor(_renderer, _elementRef) {
	            this._renderer = _renderer;
	            this._elementRef = _elementRef;
	            this.onChange = function (_) { };
	            this.onTouched = function () { };
	        }
	        DefaultValueAccessor.prototype.writeValue = function (value) {
	            var normalizedValue = isBlank(value) ? '' : value;
	            this._renderer.setElementProperty(this._elementRef.nativeElement, 'value', normalizedValue);
	        };
	        DefaultValueAccessor.prototype.registerOnChange = function (fn) { this.onChange = fn; };
	        DefaultValueAccessor.prototype.registerOnTouched = function (fn) { this.onTouched = fn; };
	        DefaultValueAccessor.prototype.setDisabledState = function (isDisabled) {
	            this._renderer.setElementProperty(this._elementRef.nativeElement, 'disabled', isDisabled);
	        };
	        DefaultValueAccessor.decorators = [
	            { type: _angular_core.Directive, args: [{
	                        selector: 'input:not([type=checkbox])[formControlName],textarea[formControlName],input:not([type=checkbox])[formControl],textarea[formControl],input:not([type=checkbox])[ngModel],textarea[ngModel],[ngDefaultControl]',
	                        // TODO: vsavkin replace the above selector with the one below it once
	                        // https://github.com/angular/angular/issues/3011 is implemented
	                        // selector: '[ngControl],[ngModel],[ngFormControl]',
	                        host: { '(input)': 'onChange($event.target.value)', '(blur)': 'onTouched()' },
	                        providers: [DEFAULT_VALUE_ACCESSOR]
	                    },] },
	        ];
	        /** @nocollapse */
	        DefaultValueAccessor.ctorParameters = [
	            { type: _angular_core.Renderer, },
	            { type: _angular_core.ElementRef, },
	        ];
	        return DefaultValueAccessor;
	    }());
	
	    /**
	     * @license
	     * Copyright Google Inc. All Rights Reserved.
	     *
	     * Use of this source code is governed by an MIT-style license that can be
	     * found in the LICENSE file at https://angular.io/license
	     */
	    function normalizeValidator(validator) {
	        if (validator.validate !== undefined) {
	            return function (c) { return validator.validate(c); };
	        }
	        else {
	            return validator;
	        }
	    }
	    function normalizeAsyncValidator(validator) {
	        if (validator.validate !== undefined) {
	            return function (c) { return validator.validate(c); };
	        }
	        else {
	            return validator;
	        }
	    }
	
	    var NUMBER_VALUE_ACCESSOR = {
	        provide: NG_VALUE_ACCESSOR,
	        useExisting: _angular_core.forwardRef(function () { return NumberValueAccessor; }),
	        multi: true
	    };
	    /**
	     * The accessor for writing a number value and listening to changes that is used by the
	     * {@link NgModel}, {@link FormControlDirective}, and {@link FormControlName} directives.
	     *
	     *  ### Example
	     *  ```
	     *  <input type="number" [(ngModel)]="age">
	     *  ```
	     */
	    var NumberValueAccessor = (function () {
	        function NumberValueAccessor(_renderer, _elementRef) {
	            this._renderer = _renderer;
	            this._elementRef = _elementRef;
	            this.onChange = function (_) { };
	            this.onTouched = function () { };
	        }
	        NumberValueAccessor.prototype.writeValue = function (value) {
	            // The value needs to be normalized for IE9, otherwise it is set to 'null' when null
	            var normalizedValue = isBlank(value) ? '' : value;
	            this._renderer.setElementProperty(this._elementRef.nativeElement, 'value', normalizedValue);
	        };
	        NumberValueAccessor.prototype.registerOnChange = function (fn) {
	            this.onChange = function (value) { fn(value == '' ? null : parseFloat(value)); };
	        };
	        NumberValueAccessor.prototype.registerOnTouched = function (fn) { this.onTouched = fn; };
	        NumberValueAccessor.prototype.setDisabledState = function (isDisabled) {
	            this._renderer.setElementProperty(this._elementRef.nativeElement, 'disabled', isDisabled);
	        };
	        NumberValueAccessor.decorators = [
	            { type: _angular_core.Directive, args: [{
	                        selector: 'input[type=number][formControlName],input[type=number][formControl],input[type=number][ngModel]',
	                        host: {
	                            '(change)': 'onChange($event.target.value)',
	                            '(input)': 'onChange($event.target.value)',
	                            '(blur)': 'onTouched()'
	                        },
	                        providers: [NUMBER_VALUE_ACCESSOR]
	                    },] },
	        ];
	        /** @nocollapse */
	        NumberValueAccessor.ctorParameters = [
	            { type: _angular_core.Renderer, },
	            { type: _angular_core.ElementRef, },
	        ];
	        return NumberValueAccessor;
	    }());
	
	    /**
	     * @license
	     * Copyright Google Inc. All Rights Reserved.
	     *
	     * Use of this source code is governed by an MIT-style license that can be
	     * found in the LICENSE file at https://angular.io/license
	     */
	    var __extends$2 = (this && this.__extends) || function (d, b) {
	        for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	        function __() { this.constructor = d; }
	        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	    };
	    function unimplemented() {
	        throw new Error('unimplemented');
	    }
	    /**
	     * A base class that all control directive extend.
	     * It binds a {@link FormControl} object to a DOM element.
	     *
	     * Used internally by Angular forms.
	     *
	     * @stable
	     */
	    var NgControl = (function (_super) {
	        __extends$2(NgControl, _super);
	        function NgControl() {
	            _super.apply(this, arguments);
	            /** @internal */
	            this._parent = null;
	            this.name = null;
	            this.valueAccessor = null;
	            /** @internal */
	            this._rawValidators = [];
	            /** @internal */
	            this._rawAsyncValidators = [];
	        }
	        Object.defineProperty(NgControl.prototype, "validator", {
	            get: function () { return unimplemented(); },
	            enumerable: true,
	            configurable: true
	        });
	        Object.defineProperty(NgControl.prototype, "asyncValidator", {
	            get: function () { return unimplemented(); },
	            enumerable: true,
	            configurable: true
	        });
	        return NgControl;
	    }(AbstractControlDirective));
	
	    var RADIO_VALUE_ACCESSOR = {
	        provide: NG_VALUE_ACCESSOR,
	        useExisting: _angular_core.forwardRef(function () { return RadioControlValueAccessor; }),
	        multi: true
	    };
	    /**
	     * Internal class used by Angular to uncheck radio buttons with the matching name.
	     */
	    var RadioControlRegistry = (function () {
	        function RadioControlRegistry() {
	            this._accessors = [];
	        }
	        RadioControlRegistry.prototype.add = function (control, accessor) {
	            this._accessors.push([control, accessor]);
	        };
	        RadioControlRegistry.prototype.remove = function (accessor) {
	            var indexToRemove = -1;
	            for (var i = 0; i < this._accessors.length; ++i) {
	                if (this._accessors[i][1] === accessor) {
	                    indexToRemove = i;
	                }
	            }
	            this._accessors.splice(indexToRemove, 1);
	        };
	        RadioControlRegistry.prototype.select = function (accessor) {
	            var _this = this;
	            this._accessors.forEach(function (c) {
	                if (_this._isSameGroup(c, accessor) && c[1] !== accessor) {
	                    c[1].fireUncheck(accessor.value);
	                }
	            });
	        };
	        RadioControlRegistry.prototype._isSameGroup = function (controlPair, accessor) {
	            if (!controlPair[0].control)
	                return false;
	            return controlPair[0]._parent === accessor._control._parent &&
	                controlPair[1].name === accessor.name;
	        };
	        RadioControlRegistry.decorators = [
	            { type: _angular_core.Injectable },
	        ];
	        /** @nocollapse */
	        RadioControlRegistry.ctorParameters = [];
	        return RadioControlRegistry;
	    }());
	    /**
	     * @whatItDoes  Writes radio control values and listens to radio control changes.
	     *
	     * Used by {@link NgModel}, {@link FormControlDirective}, and {@link FormControlName}
	     * to keep the view synced with the {@link FormControl} model.
	     *
	     * @howToUse
	     *
	     * If you have imported the {@link FormsModule} or the {@link ReactiveFormsModule}, this
	     * value accessor will be active on any radio control that has a form directive. You do
	     * **not** need to add a special selector to activate it.
	     *
	     * ### How to use radio buttons with form directives
	     *
	     * To use radio buttons in a template-driven form, you'll want to ensure that radio buttons
	     * in the same group have the same `name` attribute.  Radio buttons with different `name`
	     * attributes do not affect each other.
	     *
	     * {@example forms/ts/radioButtons/radio_button_example.ts region='TemplateDriven'}
	     *
	     * When using radio buttons in a reactive form, radio buttons in the same group should have the
	     * same `formControlName`. You can also add a `name` attribute, but it's optional.
	     *
	     * {@example forms/ts/reactiveRadioButtons/reactive_radio_button_example.ts region='Reactive'}
	     *
	     *  * **npm package**: `@angular/forms`
	     *
	     *  @stable
	     */
	    var RadioControlValueAccessor = (function () {
	        function RadioControlValueAccessor(_renderer, _elementRef, _registry, _injector) {
	            this._renderer = _renderer;
	            this._elementRef = _elementRef;
	            this._registry = _registry;
	            this._injector = _injector;
	            this.onChange = function () { };
	            this.onTouched = function () { };
	        }
	        RadioControlValueAccessor.prototype.ngOnInit = function () {
	            this._control = this._injector.get(NgControl);
	            this._checkName();
	            this._registry.add(this._control, this);
	        };
	        RadioControlValueAccessor.prototype.ngOnDestroy = function () { this._registry.remove(this); };
	        RadioControlValueAccessor.prototype.writeValue = function (value) {
	            this._state = value === this.value;
	            this._renderer.setElementProperty(this._elementRef.nativeElement, 'checked', this._state);
	        };
	        RadioControlValueAccessor.prototype.registerOnChange = function (fn) {
	            var _this = this;
	            this._fn = fn;
	            this.onChange = function () {
	                fn(_this.value);
	                _this._registry.select(_this);
	            };
	        };
	        RadioControlValueAccessor.prototype.fireUncheck = function (value) { this.writeValue(value); };
	        RadioControlValueAccessor.prototype.registerOnTouched = function (fn) { this.onTouched = fn; };
	        RadioControlValueAccessor.prototype.setDisabledState = function (isDisabled) {
	            this._renderer.setElementProperty(this._elementRef.nativeElement, 'disabled', isDisabled);
	        };
	        RadioControlValueAccessor.prototype._checkName = function () {
	            if (this.name && this.formControlName && this.name !== this.formControlName) {
	                this._throwNameError();
	            }
	            if (!this.name && this.formControlName)
	                this.name = this.formControlName;
	        };
	        RadioControlValueAccessor.prototype._throwNameError = function () {
	            throw new Error("\n      If you define both a name and a formControlName attribute on your radio button, their values\n      must match. Ex: <input type=\"radio\" formControlName=\"food\" name=\"food\">\n    ");
	        };
	        RadioControlValueAccessor.decorators = [
	            { type: _angular_core.Directive, args: [{
	                        selector: 'input[type=radio][formControlName],input[type=radio][formControl],input[type=radio][ngModel]',
	                        host: { '(change)': 'onChange()', '(blur)': 'onTouched()' },
	                        providers: [RADIO_VALUE_ACCESSOR]
	                    },] },
	        ];
	        /** @nocollapse */
	        RadioControlValueAccessor.ctorParameters = [
	            { type: _angular_core.Renderer, },
	            { type: _angular_core.ElementRef, },
	            { type: RadioControlRegistry, },
	            { type: _angular_core.Injector, },
	        ];
	        RadioControlValueAccessor.propDecorators = {
	            'name': [{ type: _angular_core.Input },],
	            'formControlName': [{ type: _angular_core.Input },],
	            'value': [{ type: _angular_core.Input },],
	        };
	        return RadioControlValueAccessor;
	    }());
	
	    var SELECT_VALUE_ACCESSOR = {
	        provide: NG_VALUE_ACCESSOR,
	        useExisting: _angular_core.forwardRef(function () { return SelectControlValueAccessor; }),
	        multi: true
	    };
	    function _buildValueString(id, value) {
	        if (isBlank(id))
	            return "" + value;
	        if (!isPrimitive(value))
	            value = 'Object';
	        return (id + ": " + value).slice(0, 50);
	    }
	    function _extractId(valueString) {
	        return valueString.split(':')[0];
	    }
	    /**
	     * @whatItDoes Writes values and listens to changes on a select element.
	     *
	     * Used by {@link NgModel}, {@link FormControlDirective}, and {@link FormControlName}
	     * to keep the view synced with the {@link FormControl} model.
	     *
	     * @howToUse
	     *
	     * If you have imported the {@link FormsModule} or the {@link ReactiveFormsModule}, this
	     * value accessor will be active on any select control that has a form directive. You do
	     * **not** need to add a special selector to activate it.
	     *
	     * ### How to use select controls with form directives
	     *
	     * To use a select in a template-driven form, simply add an `ngModel` and a `name`
	     * attribute to the main `<select>` tag.
	     *
	     * If your option values are simple strings, you can bind to the normal `value` property
	     * on the option.  If your option values happen to be objects (and you'd like to save the
	     * selection in your form as an object), use `ngValue` instead:
	     *
	     * {@example forms/ts/selectControl/select_control_example.ts region='Component'}
	     *
	     * In reactive forms, you'll also want to add your form directive (`formControlName` or
	     * `formControl`) on the main `<select>` tag. Like in the former example, you have the
	     * choice of binding to the  `value` or `ngValue` property on the select's options.
	     *
	     * {@example forms/ts/reactiveSelectControl/reactive_select_control_example.ts region='Component'}
	     *
	     * Note: We listen to the 'change' event because 'input' events aren't fired
	     * for selects in Firefox and IE:
	     * https://bugzilla.mozilla.org/show_bug.cgi?id=1024350
	     * https://developer.microsoft.com/en-us/microsoft-edge/platform/issues/4660045/
	     *
	     * * **npm package**: `@angular/forms`
	     *
	     * @stable
	     */
	    var SelectControlValueAccessor = (function () {
	        function SelectControlValueAccessor(_renderer, _elementRef) {
	            this._renderer = _renderer;
	            this._elementRef = _elementRef;
	            /** @internal */
	            this._optionMap = new Map();
	            /** @internal */
	            this._idCounter = 0;
	            this.onChange = function (_) { };
	            this.onTouched = function () { };
	        }
	        SelectControlValueAccessor.prototype.writeValue = function (value) {
	            this.value = value;
	            var valueString = _buildValueString(this._getOptionId(value), value);
	            this._renderer.setElementProperty(this._elementRef.nativeElement, 'value', valueString);
	        };
	        SelectControlValueAccessor.prototype.registerOnChange = function (fn) {
	            var _this = this;
	            this.onChange = function (valueString) {
	                _this.value = valueString;
	                fn(_this._getOptionValue(valueString));
	            };
	        };
	        SelectControlValueAccessor.prototype.registerOnTouched = function (fn) { this.onTouched = fn; };
	        SelectControlValueAccessor.prototype.setDisabledState = function (isDisabled) {
	            this._renderer.setElementProperty(this._elementRef.nativeElement, 'disabled', isDisabled);
	        };
	        /** @internal */
	        SelectControlValueAccessor.prototype._registerOption = function () { return (this._idCounter++).toString(); };
	        /** @internal */
	        SelectControlValueAccessor.prototype._getOptionId = function (value) {
	            for (var _i = 0, _a = MapWrapper.keys(this._optionMap); _i < _a.length; _i++) {
	                var id = _a[_i];
	                if (looseIdentical(this._optionMap.get(id), value))
	                    return id;
	            }
	            return null;
	        };
	        /** @internal */
	        SelectControlValueAccessor.prototype._getOptionValue = function (valueString) {
	            var value = this._optionMap.get(_extractId(valueString));
	            return isPresent(value) ? value : valueString;
	        };
	        SelectControlValueAccessor.decorators = [
	            { type: _angular_core.Directive, args: [{
	                        selector: 'select:not([multiple])[formControlName],select:not([multiple])[formControl],select:not([multiple])[ngModel]',
	                        host: { '(change)': 'onChange($event.target.value)', '(blur)': 'onTouched()' },
	                        providers: [SELECT_VALUE_ACCESSOR]
	                    },] },
	        ];
	        /** @nocollapse */
	        SelectControlValueAccessor.ctorParameters = [
	            { type: _angular_core.Renderer, },
	            { type: _angular_core.ElementRef, },
	        ];
	        return SelectControlValueAccessor;
	    }());
	    /**
	     * @whatItDoes Marks `<option>` as dynamic, so Angular can be notified when options change.
	     *
	     * @howToUse
	     *
	     * See docs for {@link SelectControlValueAccessor} for usage examples.
	     *
	     * @stable
	     */
	    var NgSelectOption = (function () {
	        function NgSelectOption(_element, _renderer, _select) {
	            this._element = _element;
	            this._renderer = _renderer;
	            this._select = _select;
	            if (isPresent(this._select))
	                this.id = this._select._registerOption();
	        }
	        Object.defineProperty(NgSelectOption.prototype, "ngValue", {
	            set: function (value) {
	                if (this._select == null)
	                    return;
	                this._select._optionMap.set(this.id, value);
	                this._setElementValue(_buildValueString(this.id, value));
	                this._select.writeValue(this._select.value);
	            },
	            enumerable: true,
	            configurable: true
	        });
	        Object.defineProperty(NgSelectOption.prototype, "value", {
	            set: function (value) {
	                this._setElementValue(value);
	                if (isPresent(this._select))
	                    this._select.writeValue(this._select.value);
	            },
	            enumerable: true,
	            configurable: true
	        });
	        /** @internal */
	        NgSelectOption.prototype._setElementValue = function (value) {
	            this._renderer.setElementProperty(this._element.nativeElement, 'value', value);
	        };
	        NgSelectOption.prototype.ngOnDestroy = function () {
	            if (isPresent(this._select)) {
	                this._select._optionMap.delete(this.id);
	                this._select.writeValue(this._select.value);
	            }
	        };
	        NgSelectOption.decorators = [
	            { type: _angular_core.Directive, args: [{ selector: 'option' },] },
	        ];
	        /** @nocollapse */
	        NgSelectOption.ctorParameters = [
	            { type: _angular_core.ElementRef, },
	            { type: _angular_core.Renderer, },
	            { type: SelectControlValueAccessor, decorators: [{ type: _angular_core.Optional }, { type: _angular_core.Host },] },
	        ];
	        NgSelectOption.propDecorators = {
	            'ngValue': [{ type: _angular_core.Input, args: ['ngValue',] },],
	            'value': [{ type: _angular_core.Input, args: ['value',] },],
	        };
	        return NgSelectOption;
	    }());
	
	    var SELECT_MULTIPLE_VALUE_ACCESSOR = {
	        provide: NG_VALUE_ACCESSOR,
	        useExisting: _angular_core.forwardRef(function () { return SelectMultipleControlValueAccessor; }),
	        multi: true
	    };
	    function _buildValueString$1(id, value) {
	        if (isBlank(id))
	            return "" + value;
	        if (typeof value === 'string')
	            value = "'" + value + "'";
	        if (!isPrimitive(value))
	            value = 'Object';
	        return (id + ": " + value).slice(0, 50);
	    }
	    function _extractId$1(valueString) {
	        return valueString.split(':')[0];
	    }
	    /**
	     * The accessor for writing a value and listening to changes on a select element.
	     *
	     * @stable
	     */
	    var SelectMultipleControlValueAccessor = (function () {
	        function SelectMultipleControlValueAccessor(_renderer, _elementRef) {
	            this._renderer = _renderer;
	            this._elementRef = _elementRef;
	            /** @internal */
	            this._optionMap = new Map();
	            /** @internal */
	            this._idCounter = 0;
	            this.onChange = function (_) { };
	            this.onTouched = function () { };
	        }
	        SelectMultipleControlValueAccessor.prototype.writeValue = function (value) {
	            var _this = this;
	            this.value = value;
	            if (value == null)
	                return;
	            var values = value;
	            // convert values to ids
	            var ids = values.map(function (v) { return _this._getOptionId(v); });
	            this._optionMap.forEach(function (opt, o) { opt._setSelected(ids.indexOf(o.toString()) > -1); });
	        };
	        SelectMultipleControlValueAccessor.prototype.registerOnChange = function (fn) {
	            var _this = this;
	            this.onChange = function (_) {
	                var selected = [];
	                if (_.hasOwnProperty('selectedOptions')) {
	                    var options = _.selectedOptions;
	                    for (var i = 0; i < options.length; i++) {
	                        var opt = options.item(i);
	                        var val = _this._getOptionValue(opt.value);
	                        selected.push(val);
	                    }
	                }
	                else {
	                    var options = _.options;
	                    for (var i = 0; i < options.length; i++) {
	                        var opt = options.item(i);
	                        if (opt.selected) {
	                            var val = _this._getOptionValue(opt.value);
	                            selected.push(val);
	                        }
	                    }
	                }
	                fn(selected);
	            };
	        };
	        SelectMultipleControlValueAccessor.prototype.registerOnTouched = function (fn) { this.onTouched = fn; };
	        SelectMultipleControlValueAccessor.prototype.setDisabledState = function (isDisabled) {
	            this._renderer.setElementProperty(this._elementRef.nativeElement, 'disabled', isDisabled);
	        };
	        /** @internal */
	        SelectMultipleControlValueAccessor.prototype._registerOption = function (value) {
	            var id = (this._idCounter++).toString();
	            this._optionMap.set(id, value);
	            return id;
	        };
	        /** @internal */
	        SelectMultipleControlValueAccessor.prototype._getOptionId = function (value) {
	            for (var _i = 0, _a = MapWrapper.keys(this._optionMap); _i < _a.length; _i++) {
	                var id = _a[_i];
	                if (looseIdentical(this._optionMap.get(id)._value, value))
	                    return id;
	            }
	            return null;
	        };
	        /** @internal */
	        SelectMultipleControlValueAccessor.prototype._getOptionValue = function (valueString) {
	            var opt = this._optionMap.get(_extractId$1(valueString));
	            return isPresent(opt) ? opt._value : valueString;
	        };
	        SelectMultipleControlValueAccessor.decorators = [
	            { type: _angular_core.Directive, args: [{
	                        selector: 'select[multiple][formControlName],select[multiple][formControl],select[multiple][ngModel]',
	                        host: { '(change)': 'onChange($event.target)', '(blur)': 'onTouched()' },
	                        providers: [SELECT_MULTIPLE_VALUE_ACCESSOR]
	                    },] },
	        ];
	        /** @nocollapse */
	        SelectMultipleControlValueAccessor.ctorParameters = [
	            { type: _angular_core.Renderer, },
	            { type: _angular_core.ElementRef, },
	        ];
	        return SelectMultipleControlValueAccessor;
	    }());
	    /**
	     * Marks `<option>` as dynamic, so Angular can be notified when options change.
	     *
	     * ### Example
	     *
	     * ```
	     * <select multiple name="city" ngModel>
	     *   <option *ngFor="let c of cities" [value]="c"></option>
	     * </select>
	     * ```
	     */
	    var NgSelectMultipleOption = (function () {
	        function NgSelectMultipleOption(_element, _renderer, _select) {
	            this._element = _element;
	            this._renderer = _renderer;
	            this._select = _select;
	            if (isPresent(this._select)) {
	                this.id = this._select._registerOption(this);
	            }
	        }
	        Object.defineProperty(NgSelectMultipleOption.prototype, "ngValue", {
	            set: function (value) {
	                if (this._select == null)
	                    return;
	                this._value = value;
	                this._setElementValue(_buildValueString$1(this.id, value));
	                this._select.writeValue(this._select.value);
	            },
	            enumerable: true,
	            configurable: true
	        });
	        Object.defineProperty(NgSelectMultipleOption.prototype, "value", {
	            set: function (value) {
	                if (isPresent(this._select)) {
	                    this._value = value;
	                    this._setElementValue(_buildValueString$1(this.id, value));
	                    this._select.writeValue(this._select.value);
	                }
	                else {
	                    this._setElementValue(value);
	                }
	            },
	            enumerable: true,
	            configurable: true
	        });
	        /** @internal */
	        NgSelectMultipleOption.prototype._setElementValue = function (value) {
	            this._renderer.setElementProperty(this._element.nativeElement, 'value', value);
	        };
	        /** @internal */
	        NgSelectMultipleOption.prototype._setSelected = function (selected) {
	            this._renderer.setElementProperty(this._element.nativeElement, 'selected', selected);
	        };
	        NgSelectMultipleOption.prototype.ngOnDestroy = function () {
	            if (isPresent(this._select)) {
	                this._select._optionMap.delete(this.id);
	                this._select.writeValue(this._select.value);
	            }
	        };
	        NgSelectMultipleOption.decorators = [
	            { type: _angular_core.Directive, args: [{ selector: 'option' },] },
	        ];
	        /** @nocollapse */
	        NgSelectMultipleOption.ctorParameters = [
	            { type: _angular_core.ElementRef, },
	            { type: _angular_core.Renderer, },
	            { type: SelectMultipleControlValueAccessor, decorators: [{ type: _angular_core.Optional }, { type: _angular_core.Host },] },
	        ];
	        NgSelectMultipleOption.propDecorators = {
	            'ngValue': [{ type: _angular_core.Input, args: ['ngValue',] },],
	            'value': [{ type: _angular_core.Input, args: ['value',] },],
	        };
	        return NgSelectMultipleOption;
	    }());
	
	    function controlPath(name, parent) {
	        return parent.path.concat([name]);
	    }
	    function setUpControl(control, dir) {
	        if (!control)
	            _throwError(dir, 'Cannot find control with');
	        if (!dir.valueAccessor)
	            _throwError(dir, 'No value accessor for form control with');
	        control.validator = Validators.compose([control.validator, dir.validator]);
	        control.asyncValidator = Validators.composeAsync([control.asyncValidator, dir.asyncValidator]);
	        dir.valueAccessor.writeValue(control.value);
	        // view -> model
	        dir.valueAccessor.registerOnChange(function (newValue) {
	            dir.viewToModelUpdate(newValue);
	            control.markAsDirty();
	            control.setValue(newValue, { emitModelToViewChange: false });
	        });
	        // touched
	        dir.valueAccessor.registerOnTouched(function () { return control.markAsTouched(); });
	        control.registerOnChange(function (newValue, emitModelEvent) {
	            // control -> view
	            dir.valueAccessor.writeValue(newValue);
	            // control -> ngModel
	            if (emitModelEvent)
	                dir.viewToModelUpdate(newValue);
	        });
	        if (dir.valueAccessor.setDisabledState) {
	            control.registerOnDisabledChange(function (isDisabled) { dir.valueAccessor.setDisabledState(isDisabled); });
	        }
	        // re-run validation when validator binding changes, e.g. minlength=3 -> minlength=4
	        dir._rawValidators.forEach(function (validator) {
	            if (validator.registerOnValidatorChange)
	                validator.registerOnValidatorChange(function () { return control.updateValueAndValidity(); });
	        });
	        dir._rawAsyncValidators.forEach(function (validator) {
	            if (validator.registerOnValidatorChange)
	                validator.registerOnValidatorChange(function () { return control.updateValueAndValidity(); });
	        });
	    }
	    function cleanUpControl(control, dir) {
	        dir.valueAccessor.registerOnChange(function () { return _noControlError(dir); });
	        dir.valueAccessor.registerOnTouched(function () { return _noControlError(dir); });
	        dir._rawValidators.forEach(function (validator) { return validator.registerOnValidatorChange(null); });
	        dir._rawAsyncValidators.forEach(function (validator) { return validator.registerOnValidatorChange(null); });
	        if (control)
	            control._clearChangeFns();
	    }
	    function setUpFormContainer(control, dir) {
	        if (isBlank(control))
	            _throwError(dir, 'Cannot find control with');
	        control.validator = Validators.compose([control.validator, dir.validator]);
	        control.asyncValidator = Validators.composeAsync([control.asyncValidator, dir.asyncValidator]);
	    }
	    function _noControlError(dir) {
	        return _throwError(dir, 'There is no FormControl instance attached to form control element with');
	    }
	    function _throwError(dir, message) {
	        var messageEnd;
	        if (dir.path.length > 1) {
	            messageEnd = "path: '" + dir.path.join(' -> ') + "'";
	        }
	        else if (dir.path[0]) {
	            messageEnd = "name: '" + dir.path + "'";
	        }
	        else {
	            messageEnd = 'unspecified name attribute';
	        }
	        throw new Error(message + " " + messageEnd);
	    }
	    function composeValidators(validators) {
	        return isPresent(validators) ? Validators.compose(validators.map(normalizeValidator)) : null;
	    }
	    function composeAsyncValidators(validators) {
	        return isPresent(validators) ? Validators.composeAsync(validators.map(normalizeAsyncValidator)) :
	            null;
	    }
	    function isPropertyUpdated(changes, viewModel) {
	        if (!changes.hasOwnProperty('model'))
	            return false;
	        var change = changes['model'];
	        if (change.isFirstChange())
	            return true;
	        return !looseIdentical(viewModel, change.currentValue);
	    }
	    var BUILTIN_ACCESSORS = [
	        CheckboxControlValueAccessor,
	        NumberValueAccessor,
	        SelectControlValueAccessor,
	        SelectMultipleControlValueAccessor,
	        RadioControlValueAccessor,
	    ];
	    function isBuiltInAccessor(valueAccessor) {
	        return BUILTIN_ACCESSORS.some(function (a) { return valueAccessor.constructor === a; });
	    }
	    // TODO: vsavkin remove it once https://github.com/angular/angular/issues/3011 is implemented
	    function selectValueAccessor(dir, valueAccessors) {
	        if (!valueAccessors)
	            return null;
	        var defaultAccessor;
	        var builtinAccessor;
	        var customAccessor;
	        valueAccessors.forEach(function (v) {
	            if (v.constructor === DefaultValueAccessor) {
	                defaultAccessor = v;
	            }
	            else if (isBuiltInAccessor(v)) {
	                if (builtinAccessor)
	                    _throwError(dir, 'More than one built-in value accessor matches form control with');
	                builtinAccessor = v;
	            }
	            else {
	                if (customAccessor)
	                    _throwError(dir, 'More than one custom value accessor matches form control with');
	                customAccessor = v;
	            }
	        });
	        if (customAccessor)
	            return customAccessor;
	        if (builtinAccessor)
	            return builtinAccessor;
	        if (defaultAccessor)
	            return defaultAccessor;
	        _throwError(dir, 'No valid value accessor for form control with');
	        return null;
	    }
	
	    /**
	     * @license
	     * Copyright Google Inc. All Rights Reserved.
	     *
	     * Use of this source code is governed by an MIT-style license that can be
	     * found in the LICENSE file at https://angular.io/license
	     */
	    var __extends = (this && this.__extends) || function (d, b) {
	        for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	        function __() { this.constructor = d; }
	        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	    };
	    /**
	     * This is a base class for code shared between {@link NgModelGroup} and {@link FormGroupName}.
	     *
	     * @stable
	     */
	    var AbstractFormGroupDirective = (function (_super) {
	        __extends(AbstractFormGroupDirective, _super);
	        function AbstractFormGroupDirective() {
	            _super.apply(this, arguments);
	        }
	        AbstractFormGroupDirective.prototype.ngOnInit = function () {
	            this._checkParentType();
	            this.formDirective.addFormGroup(this);
	        };
	        AbstractFormGroupDirective.prototype.ngOnDestroy = function () {
	            if (this.formDirective) {
	                this.formDirective.removeFormGroup(this);
	            }
	        };
	        Object.defineProperty(AbstractFormGroupDirective.prototype, "control", {
	            /**
	             * Get the {@link FormGroup} backing this binding.
	             */
	            get: function () { return this.formDirective.getFormGroup(this); },
	            enumerable: true,
	            configurable: true
	        });
	        Object.defineProperty(AbstractFormGroupDirective.prototype, "path", {
	            /**
	             * Get the path to this control group.
	             */
	            get: function () { return controlPath(this.name, this._parent); },
	            enumerable: true,
	            configurable: true
	        });
	        Object.defineProperty(AbstractFormGroupDirective.prototype, "formDirective", {
	            /**
	             * Get the {@link Form} to which this group belongs.
	             */
	            get: function () { return this._parent ? this._parent.formDirective : null; },
	            enumerable: true,
	            configurable: true
	        });
	        Object.defineProperty(AbstractFormGroupDirective.prototype, "validator", {
	            get: function () { return composeValidators(this._validators); },
	            enumerable: true,
	            configurable: true
	        });
	        Object.defineProperty(AbstractFormGroupDirective.prototype, "asyncValidator", {
	            get: function () { return composeAsyncValidators(this._asyncValidators); },
	            enumerable: true,
	            configurable: true
	        });
	        /** @internal */
	        AbstractFormGroupDirective.prototype._checkParentType = function () { };
	        return AbstractFormGroupDirective;
	    }(ControlContainer));
	
	    /**
	     * @license
	     * Copyright Google Inc. All Rights Reserved.
	     *
	     * Use of this source code is governed by an MIT-style license that can be
	     * found in the LICENSE file at https://angular.io/license
	     */
	    var __extends$3 = (this && this.__extends) || function (d, b) {
	        for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	        function __() { this.constructor = d; }
	        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	    };
	    var AbstractControlStatus = (function () {
	        function AbstractControlStatus(cd) {
	            this._cd = cd;
	        }
	        Object.defineProperty(AbstractControlStatus.prototype, "ngClassUntouched", {
	            get: function () {
	                return isPresent(this._cd.control) ? this._cd.control.untouched : false;
	            },
	            enumerable: true,
	            configurable: true
	        });
	        Object.defineProperty(AbstractControlStatus.prototype, "ngClassTouched", {
	            get: function () {
	                return isPresent(this._cd.control) ? this._cd.control.touched : false;
	            },
	            enumerable: true,
	            configurable: true
	        });
	        Object.defineProperty(AbstractControlStatus.prototype, "ngClassPristine", {
	            get: function () {
	                return isPresent(this._cd.control) ? this._cd.control.pristine : false;
	            },
	            enumerable: true,
	            configurable: true
	        });
	        Object.defineProperty(AbstractControlStatus.prototype, "ngClassDirty", {
	            get: function () {
	                return isPresent(this._cd.control) ? this._cd.control.dirty : false;
	            },
	            enumerable: true,
	            configurable: true
	        });
	        Object.defineProperty(AbstractControlStatus.prototype, "ngClassValid", {
	            get: function () {
	                return isPresent(this._cd.control) ? this._cd.control.valid : false;
	            },
	            enumerable: true,
	            configurable: true
	        });
	        Object.defineProperty(AbstractControlStatus.prototype, "ngClassInvalid", {
	            get: function () {
	                return isPresent(this._cd.control) ? this._cd.control.invalid : false;
	            },
	            enumerable: true,
	            configurable: true
	        });
	        return AbstractControlStatus;
	    }());
	    var ngControlStatusHost = {
	        '[class.ng-untouched]': 'ngClassUntouched',
	        '[class.ng-touched]': 'ngClassTouched',
	        '[class.ng-pristine]': 'ngClassPristine',
	        '[class.ng-dirty]': 'ngClassDirty',
	        '[class.ng-valid]': 'ngClassValid',
	        '[class.ng-invalid]': 'ngClassInvalid'
	    };
	    /**
	     * Directive automatically applied to Angular form controls that sets CSS classes
	     * based on control status (valid/invalid/dirty/etc).
	     *
	     * @stable
	     */
	    var NgControlStatus = (function (_super) {
	        __extends$3(NgControlStatus, _super);
	        function NgControlStatus(cd) {
	            _super.call(this, cd);
	        }
	        NgControlStatus.decorators = [
	            { type: _angular_core.Directive, args: [{ selector: '[formControlName],[ngModel],[formControl]', host: ngControlStatusHost },] },
	        ];
	        /** @nocollapse */
	        NgControlStatus.ctorParameters = [
	            { type: NgControl, decorators: [{ type: _angular_core.Self },] },
	        ];
	        return NgControlStatus;
	    }(AbstractControlStatus));
	    /**
	     * Directive automatically applied to Angular form groups that sets CSS classes
	     * based on control status (valid/invalid/dirty/etc).
	     *
	     * @stable
	     */
	    var NgControlStatusGroup = (function (_super) {
	        __extends$3(NgControlStatusGroup, _super);
	        function NgControlStatusGroup(cd) {
	            _super.call(this, cd);
	        }
	        NgControlStatusGroup.decorators = [
	            { type: _angular_core.Directive, args: [{
	                        selector: '[formGroupName],[formArrayName],[ngModelGroup],[formGroup],form:not([ngNoForm]),[ngForm]',
	                        host: ngControlStatusHost
	                    },] },
	        ];
	        /** @nocollapse */
	        NgControlStatusGroup.ctorParameters = [
	            { type: ControlContainer, decorators: [{ type: _angular_core.Self },] },
	        ];
	        return NgControlStatusGroup;
	    }(AbstractControlStatus));
	
	    /**
	     * @license
	     * Copyright Google Inc. All Rights Reserved.
	     *
	     * Use of this source code is governed by an MIT-style license that can be
	     * found in the LICENSE file at https://angular.io/license
	     */
	    var __extends$5 = (this && this.__extends) || function (d, b) {
	        for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	        function __() { this.constructor = d; }
	        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	    };
	    /**
	     * Use by directives and components to emit custom Events.
	     *
	     * ### Examples
	     *
	     * In the following example, `Zippy` alternatively emits `open` and `close` events when its
	     * title gets clicked:
	     *
	     * ```
	     * @Component({
	     *   selector: 'zippy',
	     *   template: `
	     *   <div class="zippy">
	     *     <div (click)="toggle()">Toggle</div>
	     *     <div [hidden]="!visible">
	     *       <ng-content></ng-content>
	     *     </div>
	     *  </div>`})
	     * export class Zippy {
	     *   visible: boolean = true;
	     *   @Output() open: EventEmitter<any> = new EventEmitter();
	     *   @Output() close: EventEmitter<any> = new EventEmitter();
	     *
	     *   toggle() {
	     *     this.visible = !this.visible;
	     *     if (this.visible) {
	     *       this.open.emit(null);
	     *     } else {
	     *       this.close.emit(null);
	     *     }
	     *   }
	     * }
	     * ```
	     *
	     * The events payload can be accessed by the parameter `$event` on the components output event
	     * handler:
	     *
	     * ```
	     * <zippy (open)="onOpen($event)" (close)="onClose($event)"></zippy>
	     * ```
	     *
	     * Uses Rx.Observable but provides an adapter to make it work as specified here:
	     * https://github.com/jhusain/observable-spec
	     *
	     * Once a reference implementation of the spec is available, switch to it.
	     * @stable
	     */
	    var EventEmitter = (function (_super) {
	        __extends$5(EventEmitter, _super);
	        /**
	         * Creates an instance of [EventEmitter], which depending on [isAsync],
	         * delivers events synchronously or asynchronously.
	         */
	        function EventEmitter(isAsync) {
	            if (isAsync === void 0) { isAsync = false; }
	            _super.call(this);
	            this.__isAsync = isAsync;
	        }
	        EventEmitter.prototype.emit = function (value) { _super.prototype.next.call(this, value); };
	        EventEmitter.prototype.subscribe = function (generatorOrNext, error, complete) {
	            var schedulerFn;
	            var errorFn = function (err) { return null; };
	            var completeFn = function () { return null; };
	            if (generatorOrNext && typeof generatorOrNext === 'object') {
	                schedulerFn = this.__isAsync ? function (value) {
	                    setTimeout(function () { return generatorOrNext.next(value); });
	                } : function (value) { generatorOrNext.next(value); };
	                if (generatorOrNext.error) {
	                    errorFn = this.__isAsync ? function (err) { setTimeout(function () { return generatorOrNext.error(err); }); } :
	                        function (err) { generatorOrNext.error(err); };
	                }
	                if (generatorOrNext.complete) {
	                    completeFn = this.__isAsync ? function () { setTimeout(function () { return generatorOrNext.complete(); }); } :
	                        function () { generatorOrNext.complete(); };
	                }
	            }
	            else {
	                schedulerFn = this.__isAsync ? function (value) { setTimeout(function () { return generatorOrNext(value); }); } :
	                    function (value) { generatorOrNext(value); };
	                if (error) {
	                    errorFn =
	                        this.__isAsync ? function (err) { setTimeout(function () { return error(err); }); } : function (err) { error(err); };
	                }
	                if (complete) {
	                    completeFn =
	                        this.__isAsync ? function () { setTimeout(function () { return complete(); }); } : function () { complete(); };
	                }
	            }
	            return _super.prototype.subscribe.call(this, schedulerFn, errorFn, completeFn);
	        };
	        return EventEmitter;
	    }(rxjs_Subject.Subject));
	
	    /**
	     * @license
	     * Copyright Google Inc. All Rights Reserved.
	     *
	     * Use of this source code is governed by an MIT-style license that can be
	     * found in the LICENSE file at https://angular.io/license
	     */
	    var __extends$6 = (this && this.__extends) || function (d, b) {
	        for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	        function __() { this.constructor = d; }
	        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	    };
	    /**
	     * Indicates that a FormControl is valid, i.e. that no errors exist in the input value.
	     */
	    var VALID = 'VALID';
	    /**
	     * Indicates that a FormControl is invalid, i.e. that an error exists in the input value.
	     */
	    var INVALID = 'INVALID';
	    /**
	     * Indicates that a FormControl is pending, i.e. that async validation is occurring and
	     * errors are not yet available for the input value.
	     */
	    var PENDING = 'PENDING';
	    /**
	     * Indicates that a FormControl is disabled, i.e. that the control is exempt from ancestor
	     * calculations of validity or value.
	     */
	    var DISABLED = 'DISABLED';
	    function _find(control, path, delimiter) {
	        if (path == null)
	            return null;
	        if (!(path instanceof Array)) {
	            path = path.split(delimiter);
	        }
	        if (path instanceof Array && (path.length === 0))
	            return null;
	        return path.reduce(function (v, name) {
	            if (v instanceof FormGroup) {
	                return v.controls[name] || null;
	            }
	            if (v instanceof FormArray) {
	                return v.at(name) || null;
	            }
	            return null;
	        }, control);
	    }
	    function toObservable(r) {
	        return isPromise(r) ? rxjs_observable_fromPromise.fromPromise(r) : r;
	    }
	    function coerceToValidator(validator) {
	        return Array.isArray(validator) ? composeValidators(validator) : validator;
	    }
	    function coerceToAsyncValidator(asyncValidator) {
	        return Array.isArray(asyncValidator) ? composeAsyncValidators(asyncValidator) : asyncValidator;
	    }
	    /**
	     * @whatItDoes This is the base class for {@link FormControl}, {@link FormGroup}, and
	     * {@link FormArray}.
	     *
	     * It provides some of the shared behavior that all controls and groups of controls have, like
	     * running validators, calculating status, and resetting state. It also defines the properties
	     * that are shared between all sub-classes, like `value`, `valid`, and `dirty`. It shouldn't be
	     * instantiated directly.
	     *
	     * @stable
	     */
	    var AbstractControl = (function () {
	        function AbstractControl(validator, asyncValidator) {
	            this.validator = validator;
	            this.asyncValidator = asyncValidator;
	            /** @internal */
	            this._onCollectionChange = function () { };
	            this._pristine = true;
	            this._touched = false;
	            /** @internal */
	            this._onDisabledChange = [];
	        }
	        Object.defineProperty(AbstractControl.prototype, "value", {
	            /**
	             * The value of the control.
	             */
	            get: function () { return this._value; },
	            enumerable: true,
	            configurable: true
	        });
	        Object.defineProperty(AbstractControl.prototype, "status", {
	            /**
	             * The validation status of the control. There are four possible
	             * validation statuses:
	             *
	             * * **VALID**:  control has passed all validation checks
	             * * **INVALID**: control has failed at least one validation check
	             * * **PENDING**: control is in the midst of conducting a validation check
	             * * **DISABLED**: control is exempt from validation checks
	             *
	             * These statuses are mutually exclusive, so a control cannot be
	             * both valid AND invalid or invalid AND disabled.
	             */
	            get: function () { return this._status; },
	            enumerable: true,
	            configurable: true
	        });
	        Object.defineProperty(AbstractControl.prototype, "valid", {
	            /**
	             * A control is `valid` when its `status === VALID`.
	             *
	             * In order to have this status, the control must have passed all its
	             * validation checks.
	             */
	            get: function () { return this._status === VALID; },
	            enumerable: true,
	            configurable: true
	        });
	        Object.defineProperty(AbstractControl.prototype, "invalid", {
	            /**
	             * A control is `invalid` when its `status === INVALID`.
	             *
	             * In order to have this status, the control must have failed
	             * at least one of its validation checks.
	             */
	            get: function () { return this._status === INVALID; },
	            enumerable: true,
	            configurable: true
	        });
	        Object.defineProperty(AbstractControl.prototype, "pending", {
	            /**
	             * A control is `pending` when its `status === PENDING`.
	             *
	             * In order to have this status, the control must be in the
	             * middle of conducting a validation check.
	             */
	            get: function () { return this._status == PENDING; },
	            enumerable: true,
	            configurable: true
	        });
	        Object.defineProperty(AbstractControl.prototype, "disabled", {
	            /**
	             * A control is `disabled` when its `status === DISABLED`.
	             *
	             * Disabled controls are exempt from validation checks and
	             * are not included in the aggregate value of their ancestor
	             * controls.
	             */
	            get: function () { return this._status === DISABLED; },
	            enumerable: true,
	            configurable: true
	        });
	        Object.defineProperty(AbstractControl.prototype, "enabled", {
	            /**
	             * A control is `enabled` as long as its `status !== DISABLED`.
	             *
	             * In other words, it has a status of `VALID`, `INVALID`, or
	             * `PENDING`.
	             */
	            get: function () { return this._status !== DISABLED; },
	            enumerable: true,
	            configurable: true
	        });
	        Object.defineProperty(AbstractControl.prototype, "errors", {
	            /**
	             * Returns any errors generated by failing validation. If there
	             * are no errors, it will return null.
	             */
	            get: function () { return this._errors; },
	            enumerable: true,
	            configurable: true
	        });
	        Object.defineProperty(AbstractControl.prototype, "pristine", {
	            /**
	             * A control is `pristine` if the user has not yet changed
	             * the value in the UI.
	             *
	             * Note that programmatic changes to a control's value will
	             * *not* mark it dirty.
	             */
	            get: function () { return this._pristine; },
	            enumerable: true,
	            configurable: true
	        });
	        Object.defineProperty(AbstractControl.prototype, "dirty", {
	            /**
	             * A control is `dirty` if the user has changed the value
	             * in the UI.
	             *
	             * Note that programmatic changes to a control's value will
	             * *not* mark it dirty.
	             */
	            get: function () { return !this.pristine; },
	            enumerable: true,
	            configurable: true
	        });
	        Object.defineProperty(AbstractControl.prototype, "touched", {
	            /**
	            * A control is marked `touched` once the user has triggered
	            * a `blur` event on it.
	            */
	            get: function () { return this._touched; },
	            enumerable: true,
	            configurable: true
	        });
	        Object.defineProperty(AbstractControl.prototype, "untouched", {
	            /**
	             * A control is `untouched` if the user has not yet triggered
	             * a `blur` event on it.
	             */
	            get: function () { return !this._touched; },
	            enumerable: true,
	            configurable: true
	        });
	        Object.defineProperty(AbstractControl.prototype, "valueChanges", {
	            /**
	             * Emits an event every time the value of the control changes, in
	             * the UI or programmatically.
	             */
	            get: function () { return this._valueChanges; },
	            enumerable: true,
	            configurable: true
	        });
	        Object.defineProperty(AbstractControl.prototype, "statusChanges", {
	            /**
	             * Emits an event every time the validation status of the control
	             * is re-calculated.
	             */
	            get: function () { return this._statusChanges; },
	            enumerable: true,
	            configurable: true
	        });
	        /**
	         * Sets the synchronous validators that are active on this control.  Calling
	         * this will overwrite any existing sync validators.
	         */
	        AbstractControl.prototype.setValidators = function (newValidator) {
	            this.validator = coerceToValidator(newValidator);
	        };
	        /**
	         * Sets the async validators that are active on this control. Calling this
	         * will overwrite any existing async validators.
	         */
	        AbstractControl.prototype.setAsyncValidators = function (newValidator) {
	            this.asyncValidator = coerceToAsyncValidator(newValidator);
	        };
	        /**
	         * Empties out the sync validator list.
	         */
	        AbstractControl.prototype.clearValidators = function () { this.validator = null; };
	        /**
	         * Empties out the async validator list.
	         */
	        AbstractControl.prototype.clearAsyncValidators = function () { this.asyncValidator = null; };
	        /**
	         * Marks the control as `touched`.
	         *
	         * This will also mark all direct ancestors as `touched` to maintain
	         * the model.
	         */
	        AbstractControl.prototype.markAsTouched = function (_a) {
	            var onlySelf = (_a === void 0 ? {} : _a).onlySelf;
	            this._touched = true;
	            if (this._parent && !onlySelf) {
	                this._parent.markAsTouched({ onlySelf: onlySelf });
	            }
	        };
	        /**
	         * Marks the control as `untouched`.
	         *
	         * If the control has any children, it will also mark all children as `untouched`
	         * to maintain the model, and re-calculate the `touched` status of all parent
	         * controls.
	         */
	        AbstractControl.prototype.markAsUntouched = function (_a) {
	            var onlySelf = (_a === void 0 ? {} : _a).onlySelf;
	            this._touched = false;
	            this._forEachChild(function (control) { control.markAsUntouched({ onlySelf: true }); });
	            if (this._parent && !onlySelf) {
	                this._parent._updateTouched({ onlySelf: onlySelf });
	            }
	        };
	        /**
	         * Marks the control as `dirty`.
	         *
	         * This will also mark all direct ancestors as `dirty` to maintain
	         * the model.
	         */
	        AbstractControl.prototype.markAsDirty = function (_a) {
	            var onlySelf = (_a === void 0 ? {} : _a).onlySelf;
	            this._pristine = false;
	            if (this._parent && !onlySelf) {
	                this._parent.markAsDirty({ onlySelf: onlySelf });
	            }
	        };
	        /**
	         * Marks the control as `pristine`.
	         *
	         * If the control has any children, it will also mark all children as `pristine`
	         * to maintain the model, and re-calculate the `pristine` status of all parent
	         * controls.
	         */
	        AbstractControl.prototype.markAsPristine = function (_a) {
	            var onlySelf = (_a === void 0 ? {} : _a).onlySelf;
	            this._pristine = true;
	            this._forEachChild(function (control) { control.markAsPristine({ onlySelf: true }); });
	            if (this._parent && !onlySelf) {
	                this._parent._updatePristine({ onlySelf: onlySelf });
	            }
	        };
	        /**
	         * Marks the control as `pending`.
	         */
	        AbstractControl.prototype.markAsPending = function (_a) {
	            var onlySelf = (_a === void 0 ? {} : _a).onlySelf;
	            this._status = PENDING;
	            if (this._parent && !onlySelf) {
	                this._parent.markAsPending({ onlySelf: onlySelf });
	            }
	        };
	        /**
	         * Disables the control. This means the control will be exempt from validation checks and
	         * excluded from the aggregate value of any parent. Its status is `DISABLED`.
	         *
	         * If the control has children, all children will be disabled to maintain the model.
	         */
	        AbstractControl.prototype.disable = function (_a) {
	            var _b = _a === void 0 ? {} : _a, onlySelf = _b.onlySelf, emitEvent = _b.emitEvent;
	            this._status = DISABLED;
	            this._errors = null;
	            this._forEachChild(function (control) { control.disable({ onlySelf: true }); });
	            this._updateValue();
	            if (emitEvent !== false) {
	                this._valueChanges.emit(this._value);
	                this._statusChanges.emit(this._status);
	            }
	            this._updateAncestors(onlySelf);
	            this._onDisabledChange.forEach(function (changeFn) { return changeFn(true); });
	        };
	        /**
	         * Enables the control. This means the control will be included in validation checks and
	         * the aggregate value of its parent. Its status is re-calculated based on its value and
	         * its validators.
	         *
	         * If the control has children, all children will be enabled.
	         */
	        AbstractControl.prototype.enable = function (_a) {
	            var _b = _a === void 0 ? {} : _a, onlySelf = _b.onlySelf, emitEvent = _b.emitEvent;
	            this._status = VALID;
	            this._forEachChild(function (control) { control.enable({ onlySelf: true }); });
	            this.updateValueAndValidity({ onlySelf: true, emitEvent: emitEvent });
	            this._updateAncestors(onlySelf);
	            this._onDisabledChange.forEach(function (changeFn) { return changeFn(false); });
	        };
	        AbstractControl.prototype._updateAncestors = function (onlySelf) {
	            if (this._parent && !onlySelf) {
	                this._parent.updateValueAndValidity();
	                this._parent._updatePristine();
	                this._parent._updateTouched();
	            }
	        };
	        AbstractControl.prototype.setParent = function (parent) { this._parent = parent; };
	        /**
	         * Re-calculates the value and validation status of the control.
	         *
	         * By default, it will also update the value and validity of its ancestors.
	         */
	        AbstractControl.prototype.updateValueAndValidity = function (_a) {
	            var _b = _a === void 0 ? {} : _a, onlySelf = _b.onlySelf, emitEvent = _b.emitEvent;
	            this._setInitialStatus();
	            this._updateValue();
	            if (this.enabled) {
	                this._errors = this._runValidator();
	                this._status = this._calculateStatus();
	                if (this._status === VALID || this._status === PENDING) {
	                    this._runAsyncValidator(emitEvent);
	                }
	            }
	            if (emitEvent !== false) {
	                this._valueChanges.emit(this._value);
	                this._statusChanges.emit(this._status);
	            }
	            if (this._parent && !onlySelf) {
	                this._parent.updateValueAndValidity({ onlySelf: onlySelf, emitEvent: emitEvent });
	            }
	        };
	        /** @internal */
	        AbstractControl.prototype._updateTreeValidity = function (_a) {
	            var emitEvent = (_a === void 0 ? { emitEvent: true } : _a).emitEvent;
	            this._forEachChild(function (ctrl) { return ctrl._updateTreeValidity({ emitEvent: emitEvent }); });
	            this.updateValueAndValidity({ onlySelf: true, emitEvent: emitEvent });
	        };
	        AbstractControl.prototype._setInitialStatus = function () { this._status = this._allControlsDisabled() ? DISABLED : VALID; };
	        AbstractControl.prototype._runValidator = function () {
	            return this.validator ? this.validator(this) : null;
	        };
	        AbstractControl.prototype._runAsyncValidator = function (emitEvent) {
	            var _this = this;
	            if (this.asyncValidator) {
	                this._status = PENDING;
	                this._cancelExistingSubscription();
	                var obs = toObservable(this.asyncValidator(this));
	                this._asyncValidationSubscription =
	                    obs.subscribe({ next: function (res) { return _this.setErrors(res, { emitEvent: emitEvent }); } });
	            }
	        };
	        AbstractControl.prototype._cancelExistingSubscription = function () {
	            if (this._asyncValidationSubscription) {
	                this._asyncValidationSubscription.unsubscribe();
	            }
	        };
	        /**
	         * Sets errors on a form control.
	         *
	         * This is used when validations are run manually by the user, rather than automatically.
	         *
	         * Calling `setErrors` will also update the validity of the parent control.
	         *
	         * ### Example
	         *
	         * ```
	         * const login = new FormControl("someLogin");
	         * login.setErrors({
	         *   "notUnique": true
	         * });
	         *
	         * expect(login.valid).toEqual(false);
	         * expect(login.errors).toEqual({"notUnique": true});
	         *
	         * login.setValue("someOtherLogin");
	         *
	         * expect(login.valid).toEqual(true);
	         * ```
	         */
	        AbstractControl.prototype.setErrors = function (errors, _a) {
	            var emitEvent = (_a === void 0 ? {} : _a).emitEvent;
	            this._errors = errors;
	            this._updateControlsErrors(emitEvent !== false);
	        };
	        /**
	         * Retrieves a child control given the control's name or path.
	         *
	         * Paths can be passed in as an array or a string delimited by a dot.
	         *
	         * To get a control nested within a `person` sub-group:
	         *
	         * * `this.form.get('person.name');`
	         *
	         * -OR-
	         *
	         * * `this.form.get(['person', 'name']);`
	         */
	        AbstractControl.prototype.get = function (path) { return _find(this, path, '.'); };
	        /**
	         * Returns true if the control with the given path has the error specified. Otherwise
	         * returns null or undefined.
	         *
	         * If no path is given, it checks for the error on the present control.
	         */
	        AbstractControl.prototype.getError = function (errorCode, path) {
	            if (path === void 0) { path = null; }
	            var control = path ? this.get(path) : this;
	            return control && control._errors ? control._errors[errorCode] : null;
	        };
	        /**
	         * Returns true if the control with the given path has the error specified. Otherwise
	         * returns false.
	         *
	         * If no path is given, it checks for the error on the present control.
	         */
	        AbstractControl.prototype.hasError = function (errorCode, path) {
	            if (path === void 0) { path = null; }
	            return !!this.getError(errorCode, path);
	        };
	        Object.defineProperty(AbstractControl.prototype, "root", {
	            /**
	             * Retrieves the top-level ancestor of this control.
	             */
	            get: function () {
	                var x = this;
	                while (x._parent) {
	                    x = x._parent;
	                }
	                return x;
	            },
	            enumerable: true,
	            configurable: true
	        });
	        /** @internal */
	        AbstractControl.prototype._updateControlsErrors = function (emitEvent) {
	            this._status = this._calculateStatus();
	            if (emitEvent) {
	                this._statusChanges.emit(this._status);
	            }
	            if (this._parent) {
	                this._parent._updateControlsErrors(emitEvent);
	            }
	        };
	        /** @internal */
	        AbstractControl.prototype._initObservables = function () {
	            this._valueChanges = new EventEmitter();
	            this._statusChanges = new EventEmitter();
	        };
	        AbstractControl.prototype._calculateStatus = function () {
	            if (this._allControlsDisabled())
	                return DISABLED;
	            if (this._errors)
	                return INVALID;
	            if (this._anyControlsHaveStatus(PENDING))
	                return PENDING;
	            if (this._anyControlsHaveStatus(INVALID))
	                return INVALID;
	            return VALID;
	        };
	        /** @internal */
	        AbstractControl.prototype._anyControlsHaveStatus = function (status) {
	            return this._anyControls(function (control) { return control.status === status; });
	        };
	        /** @internal */
	        AbstractControl.prototype._anyControlsDirty = function () {
	            return this._anyControls(function (control) { return control.dirty; });
	        };
	        /** @internal */
	        AbstractControl.prototype._anyControlsTouched = function () {
	            return this._anyControls(function (control) { return control.touched; });
	        };
	        /** @internal */
	        AbstractControl.prototype._updatePristine = function (_a) {
	            var onlySelf = (_a === void 0 ? {} : _a).onlySelf;
	            this._pristine = !this._anyControlsDirty();
	            if (this._parent && !onlySelf) {
	                this._parent._updatePristine({ onlySelf: onlySelf });
	            }
	        };
	        /** @internal */
	        AbstractControl.prototype._updateTouched = function (_a) {
	            var onlySelf = (_a === void 0 ? {} : _a).onlySelf;
	            this._touched = this._anyControlsTouched();
	            if (this._parent && !onlySelf) {
	                this._parent._updateTouched({ onlySelf: onlySelf });
	            }
	        };
	        /** @internal */
	        AbstractControl.prototype._isBoxedValue = function (formState) {
	            return typeof formState === 'object' && formState !== null &&
	                Object.keys(formState).length === 2 && 'value' in formState && 'disabled' in formState;
	        };
	        /** @internal */
	        AbstractControl.prototype._registerOnCollectionChange = function (fn) { this._onCollectionChange = fn; };
	        return AbstractControl;
	    }());
	    /**
	     * @whatItDoes Tracks the value and validation status of an individual form control.
	     *
	     * It is one of the three fundamental building blocks of Angular forms, along with
	     * {@link FormGroup} and {@link FormArray}.
	     *
	     * @howToUse
	     *
	     * When instantiating a {@link FormControl}, you can pass in an initial value as the
	     * first argument. Example:
	     *
	     * ```ts
	     * const ctrl = new FormControl('some value');
	     * console.log(ctrl.value);     // 'some value'
	     *```
	     *
	     * You can also initialize the control with a form state object on instantiation,
	     * which includes both the value and whether or not the control is disabled.
	     * You can't use the value key without the disabled key; both are required
	     * to use this way of initialization.
	     *
	     * ```ts
	     * const ctrl = new FormControl({value: 'n/a', disabled: true});
	     * console.log(ctrl.value);     // 'n/a'
	     * console.log(ctrl.status);   // 'DISABLED'
	     * ```
	     *
	     * To include a sync validator (or an array of sync validators) with the control,
	     * pass it in as the second argument. Async validators are also supported, but
	     * have to be passed in separately as the third arg.
	     *
	     * ```ts
	     * const ctrl = new FormControl('', Validators.required);
	     * console.log(ctrl.value);     // ''
	     * console.log(ctrl.status);   // 'INVALID'
	     * ```
	     *
	     * See its superclass, {@link AbstractControl}, for more properties and methods.
	     *
	     * * **npm package**: `@angular/forms`
	     *
	     * @stable
	     */
	    var FormControl = (function (_super) {
	        __extends$6(FormControl, _super);
	        function FormControl(formState, validator, asyncValidator) {
	            if (formState === void 0) { formState = null; }
	            if (validator === void 0) { validator = null; }
	            if (asyncValidator === void 0) { asyncValidator = null; }
	            _super.call(this, coerceToValidator(validator), coerceToAsyncValidator(asyncValidator));
	            /** @internal */
	            this._onChange = [];
	            this._applyFormState(formState);
	            this.updateValueAndValidity({ onlySelf: true, emitEvent: false });
	            this._initObservables();
	        }
	        /**
	         * Set the value of the form control to `value`.
	         *
	         * If `onlySelf` is `true`, this change will only affect the validation of this `FormControl`
	         * and not its parent component. This defaults to false.
	         *
	         * If `emitEvent` is `true`, this
	         * change will cause a `valueChanges` event on the `FormControl` to be emitted. This defaults
	         * to true (as it falls through to `updateValueAndValidity`).
	         *
	         * If `emitModelToViewChange` is `true`, the view will be notified about the new value
	         * via an `onChange` event. This is the default behavior if `emitModelToViewChange` is not
	         * specified.
	         *
	         * If `emitViewToModelChange` is `true`, an ngModelChange event will be fired to update the
	         * model.  This is the default behavior if `emitViewToModelChange` is not specified.
	         */
	        FormControl.prototype.setValue = function (value, _a) {
	            var _this = this;
	            var _b = _a === void 0 ? {} : _a, onlySelf = _b.onlySelf, emitEvent = _b.emitEvent, emitModelToViewChange = _b.emitModelToViewChange, emitViewToModelChange = _b.emitViewToModelChange;
	            this._value = value;
	            if (this._onChange.length && emitModelToViewChange !== false) {
	                this._onChange.forEach(function (changeFn) { return changeFn(_this._value, emitViewToModelChange !== false); });
	            }
	            this.updateValueAndValidity({ onlySelf: onlySelf, emitEvent: emitEvent });
	        };
	        /**
	         * Patches the value of a control.
	         *
	         * This function is functionally the same as {@link FormControl.setValue} at this level.
	         * It exists for symmetry with {@link FormGroup.patchValue} on `FormGroups` and `FormArrays`,
	         * where it does behave differently.
	         */
	        FormControl.prototype.patchValue = function (value, options) {
	            if (options === void 0) { options = {}; }
	            this.setValue(value, options);
	        };
	        /**
	         * Resets the form control. This means by default:
	         *
	         * * it is marked as `pristine`
	         * * it is marked as `untouched`
	         * * value is set to null
	         *
	         * You can also reset to a specific form state by passing through a standalone
	         * value or a form state object that contains both a value and a disabled state
	         * (these are the only two properties that cannot be calculated).
	         *
	         * Ex:
	         *
	         * ```ts
	         * this.control.reset('Nancy');
	         *
	         * console.log(this.control.value);  // 'Nancy'
	         * ```
	         *
	         * OR
	         *
	         * ```
	         * this.control.reset({value: 'Nancy', disabled: true});
	         *
	         * console.log(this.control.value);  // 'Nancy'
	         * console.log(this.control.status);  // 'DISABLED'
	         * ```
	         */
	        FormControl.prototype.reset = function (formState, _a) {
	            if (formState === void 0) { formState = null; }
	            var onlySelf = (_a === void 0 ? {} : _a).onlySelf;
	            this._applyFormState(formState);
	            this.markAsPristine({ onlySelf: onlySelf });
	            this.markAsUntouched({ onlySelf: onlySelf });
	            this.setValue(this._value, { onlySelf: onlySelf });
	        };
	        /**
	         * @internal
	         */
	        FormControl.prototype._updateValue = function () { };
	        /**
	         * @internal
	         */
	        FormControl.prototype._anyControls = function (condition) { return false; };
	        /**
	         * @internal
	         */
	        FormControl.prototype._allControlsDisabled = function () { return this.disabled; };
	        /**
	         * Register a listener for change events.
	         */
	        FormControl.prototype.registerOnChange = function (fn) { this._onChange.push(fn); };
	        /**
	         * @internal
	         */
	        FormControl.prototype._clearChangeFns = function () {
	            this._onChange = [];
	            this._onDisabledChange = [];
	            this._onCollectionChange = function () { };
	        };
	        /**
	         * Register a listener for disabled events.
	         */
	        FormControl.prototype.registerOnDisabledChange = function (fn) {
	            this._onDisabledChange.push(fn);
	        };
	        /**
	         * @internal
	         */
	        FormControl.prototype._forEachChild = function (cb) { };
	        FormControl.prototype._applyFormState = function (formState) {
	            if (this._isBoxedValue(formState)) {
	                this._value = formState.value;
	                formState.disabled ? this.disable({ onlySelf: true, emitEvent: false }) :
	                    this.enable({ onlySelf: true, emitEvent: false });
	            }
	            else {
	                this._value = formState;
	            }
	        };
	        return FormControl;
	    }(AbstractControl));
	    /**
	     * @whatItDoes Tracks the value and validity state of a group of {@link FormControl}
	     * instances.
	     *
	     * A `FormGroup` aggregates the values of each child {@link FormControl} into one object,
	     * with each control name as the key.  It calculates its status by reducing the statuses
	     * of its children. For example, if one of the controls in a group is invalid, the entire
	     * group becomes invalid.
	     *
	     * `FormGroup` is one of the three fundamental building blocks used to define forms in Angular,
	     * along with {@link FormControl} and {@link FormArray}.
	     *
	     * @howToUse
	     *
	     * When instantiating a {@link FormGroup}, pass in a collection of child controls as the first
	     * argument. The key for each child will be the name under which it is registered.
	     *
	     * ### Example
	     *
	     * ```
	     * const form = new FormGroup({
	     *   first: new FormControl('Nancy', Validators.minLength(2)),
	     *   last: new FormControl('Drew'),
	     * });
	     *
	     * console.log(form.value);   // {first: 'Nancy', last; 'Drew'}
	     * console.log(form.status);  // 'VALID'
	     * ```
	     *
	     * You can also include group-level validators as the second arg, or group-level async
	     * validators as the third arg. These come in handy when you want to perform validation
	     * that considers the value of more than one child control.
	     *
	     * ### Example
	     *
	     * ```
	     * const form = new FormGroup({
	     *   password: new FormControl('', Validators.minLength(2)),
	     *   passwordConfirm: new FormControl('', Validators.minLength(2)),
	     * }, passwordMatchValidator);
	     *
	     *
	     * function passwordMatchValidator(g: FormGroup) {
	     *    return g.get('password').value === g.get('passwordConfirm').value
	     *       ? null : {'mismatch': true};
	     * }
	     * ```
	     *
	     * * **npm package**: `@angular/forms`
	     *
	     * @stable
	     */
	    var FormGroup = (function (_super) {
	        __extends$6(FormGroup, _super);
	        function FormGroup(controls, validator, asyncValidator) {
	            if (validator === void 0) { validator = null; }
	            if (asyncValidator === void 0) { asyncValidator = null; }
	            _super.call(this, validator, asyncValidator);
	            this.controls = controls;
	            this._initObservables();
	            this._setUpControls();
	            this.updateValueAndValidity({ onlySelf: true, emitEvent: false });
	        }
	        /**
	         * Registers a control with the group's list of controls.
	         *
	         * This method does not update value or validity of the control, so for
	         * most cases you'll want to use {@link FormGroup.addControl} instead.
	         */
	        FormGroup.prototype.registerControl = function (name, control) {
	            if (this.controls[name])
	                return this.controls[name];
	            this.controls[name] = control;
	            control.setParent(this);
	            control._registerOnCollectionChange(this._onCollectionChange);
	            return control;
	        };
	        /**
	         * Add a control to this group.
	         */
	        FormGroup.prototype.addControl = function (name, control) {
	            this.registerControl(name, control);
	            this.updateValueAndValidity();
	            this._onCollectionChange();
	        };
	        /**
	         * Remove a control from this group.
	         */
	        FormGroup.prototype.removeControl = function (name) {
	            if (this.controls[name])
	                this.controls[name]._registerOnCollectionChange(function () { });
	            delete (this.controls[name]);
	            this.updateValueAndValidity();
	            this._onCollectionChange();
	        };
	        /**
	         * Replace an existing control.
	         */
	        FormGroup.prototype.setControl = function (name, control) {
	            if (this.controls[name])
	                this.controls[name]._registerOnCollectionChange(function () { });
	            delete (this.controls[name]);
	            if (control)
	                this.registerControl(name, control);
	            this.updateValueAndValidity();
	            this._onCollectionChange();
	        };
	        /**
	         * Check whether there is an enabled control with the given name in the group.
	         *
	         * It will return false for disabled controls. If you'd like to check for
	         * existence in the group only, use {@link AbstractControl.get} instead.
	         */
	        FormGroup.prototype.contains = function (controlName) {
	            return this.controls.hasOwnProperty(controlName) && this.controls[controlName].enabled;
	        };
	        /**
	         *  Sets the value of the {@link FormGroup}. It accepts an object that matches
	         *  the structure of the group, with control names as keys.
	         *
	         * This method performs strict checks, so it will throw an error if you try
	         * to set the value of a control that doesn't exist or if you exclude the
	         * value of a control.
	         *
	         *  ### Example
	         *
	         *  ```
	         *  const form = new FormGroup({
	         *     first: new FormControl(),
	         *     last: new FormControl()
	         *  });
	         *  console.log(form.value);   // {first: null, last: null}
	         *
	         *  form.setValue({first: 'Nancy', last: 'Drew'});
	         *  console.log(form.value);   // {first: 'Nancy', last: 'Drew'}
	         *
	         *  ```
	         */
	        FormGroup.prototype.setValue = function (value, _a) {
	            var _this = this;
	            var onlySelf = (_a === void 0 ? {} : _a).onlySelf;
	            this._checkAllValuesPresent(value);
	            Object.keys(value).forEach(function (name) {
	                _this._throwIfControlMissing(name);
	                _this.controls[name].setValue(value[name], { onlySelf: true });
	            });
	            this.updateValueAndValidity({ onlySelf: onlySelf });
	        };
	        /**
	         *  Patches the value of the {@link FormGroup}. It accepts an object with control
	         *  names as keys, and will do its best to match the values to the correct controls
	         *  in the group.
	         *
	         *  It accepts both super-sets and sub-sets of the group without throwing an error.
	         *
	         *  ### Example
	         *
	         *  ```
	         *  const form = new FormGroup({
	         *     first: new FormControl(),
	         *     last: new FormControl()
	         *  });
	         *  console.log(form.value);   // {first: null, last: null}
	         *
	         *  form.patchValue({first: 'Nancy'});
	         *  console.log(form.value);   // {first: 'Nancy', last: null}
	         *
	         *  ```
	         */
	        FormGroup.prototype.patchValue = function (value, _a) {
	            var _this = this;
	            var onlySelf = (_a === void 0 ? {} : _a).onlySelf;
	            Object.keys(value).forEach(function (name) {
	                if (_this.controls[name]) {
	                    _this.controls[name].patchValue(value[name], { onlySelf: true });
	                }
	            });
	            this.updateValueAndValidity({ onlySelf: onlySelf });
	        };
	        /**
	         * Resets the {@link FormGroup}. This means by default:
	         *
	         * * The group and all descendants are marked `pristine`
	         * * The group and all descendants are marked `untouched`
	         * * The value of all descendants will be null or null maps
	         *
	         * You can also reset to a specific form state by passing in a map of states
	         * that matches the structure of your form, with control names as keys. The state
	         * can be a standalone value or a form state object with both a value and a disabled
	         * status.
	         *
	         * ### Example
	         *
	         * ```ts
	         * this.form.reset({first: 'name', last: 'last name'});
	         *
	         * console.log(this.form.value);  // {first: 'name', last: 'last name'}
	         * ```
	         *
	         * - OR -
	         *
	         * ```
	         * this.form.reset({
	         *   first: {value: 'name', disabled: true},
	         *   last: 'last'
	         * });
	         *
	         * console.log(this.form.value);  // {first: 'name', last: 'last name'}
	         * console.log(this.form.get('first').status);  // 'DISABLED'
	         * ```
	         */
	        FormGroup.prototype.reset = function (value, _a) {
	            if (value === void 0) { value = {}; }
	            var onlySelf = (_a === void 0 ? {} : _a).onlySelf;
	            this._forEachChild(function (control, name) {
	                control.reset(value[name], { onlySelf: true });
	            });
	            this.updateValueAndValidity({ onlySelf: onlySelf });
	            this._updatePristine({ onlySelf: onlySelf });
	            this._updateTouched({ onlySelf: onlySelf });
	        };
	        /**
	         * The aggregate value of the {@link FormGroup}, including any disabled controls.
	         *
	         * If you'd like to include all values regardless of disabled status, use this method.
	         * Otherwise, the `value` property is the best way to get the value of the group.
	         */
	        FormGroup.prototype.getRawValue = function () {
	            return this._reduceChildren({}, function (acc, control, name) {
	                acc[name] = control.value;
	                return acc;
	            });
	        };
	        /** @internal */
	        FormGroup.prototype._throwIfControlMissing = function (name) {
	            if (!Object.keys(this.controls).length) {
	                throw new Error("\n        There are no form controls registered with this group yet.  If you're using ngModel,\n        you may want to check next tick (e.g. use setTimeout).\n      ");
	            }
	            if (!this.controls[name]) {
	                throw new Error("Cannot find form control with name: " + name + ".");
	            }
	        };
	        /** @internal */
	        FormGroup.prototype._forEachChild = function (cb) {
	            var _this = this;
	            Object.keys(this.controls).forEach(function (k) { return cb(_this.controls[k], k); });
	        };
	        /** @internal */
	        FormGroup.prototype._setUpControls = function () {
	            var _this = this;
	            this._forEachChild(function (control) {
	                control.setParent(_this);
	                control._registerOnCollectionChange(_this._onCollectionChange);
	            });
	        };
	        /** @internal */
	        FormGroup.prototype._updateValue = function () { this._value = this._reduceValue(); };
	        /** @internal */
	        FormGroup.prototype._anyControls = function (condition) {
	            var _this = this;
	            var res = false;
	            this._forEachChild(function (control, name) {
	                res = res || (_this.contains(name) && condition(control));
	            });
	            return res;
	        };
	        /** @internal */
	        FormGroup.prototype._reduceValue = function () {
	            var _this = this;
	            return this._reduceChildren({}, function (acc, control, name) {
	                if (control.enabled || _this.disabled) {
	                    acc[name] = control.value;
	                }
	                return acc;
	            });
	        };
	        /** @internal */
	        FormGroup.prototype._reduceChildren = function (initValue, fn) {
	            var res = initValue;
	            this._forEachChild(function (control, name) { res = fn(res, control, name); });
	            return res;
	        };
	        /** @internal */
	        FormGroup.prototype._allControlsDisabled = function () {
	            for (var _i = 0, _a = Object.keys(this.controls); _i < _a.length; _i++) {
	                var controlName = _a[_i];
	                if (this.controls[controlName].enabled) {
	                    return false;
	                }
	            }
	            return Object.keys(this.controls).length > 0 || this.disabled;
	        };
	        /** @internal */
	        FormGroup.prototype._checkAllValuesPresent = function (value) {
	            this._forEachChild(function (control, name) {
	                if (value[name] === undefined) {
	                    throw new Error("Must supply a value for form control with name: '" + name + "'.");
	                }
	            });
	        };
	        return FormGroup;
	    }(AbstractControl));
	    /**
	     * @whatItDoes Tracks the value and validity state of an array of {@link FormControl}
	     * instances.
	     *
	     * A `FormArray` aggregates the values of each child {@link FormControl} into an array.
	     * It calculates its status by reducing the statuses of its children. For example, if one of
	     * the controls in a `FormArray` is invalid, the entire array becomes invalid.
	     *
	     * `FormArray` is one of the three fundamental building blocks used to define forms in Angular,
	     * along with {@link FormControl} and {@link FormGroup}.
	     *
	     * @howToUse
	     *
	     * When instantiating a {@link FormArray}, pass in an array of child controls as the first
	     * argument.
	     *
	     * ### Example
	     *
	     * ```
	     * const arr = new FormArray([
	     *   new FormControl('Nancy', Validators.minLength(2)),
	     *   new FormControl('Drew'),
	     * ]);
	     *
	     * console.log(arr.value);   // ['Nancy', 'Drew']
	     * console.log(arr.status);  // 'VALID'
	     * ```
	     *
	     * You can also include array-level validators as the second arg, or array-level async
	     * validators as the third arg. These come in handy when you want to perform validation
	     * that considers the value of more than one child control.
	     *
	     * ### Adding or removing controls
	     *
	     * To change the controls in the array, use the `push`, `insert`, or `removeAt` methods
	     * in `FormArray` itself. These methods ensure the controls are properly tracked in the
	     * form's hierarchy. Do not modify the array of `AbstractControl`s used to instantiate
	     * the `FormArray` directly, as that will result in strange and unexpected behavior such
	     * as broken change detection.
	     *
	     * * **npm package**: `@angular/forms`
	     *
	     * @stable
	     */
	    var FormArray = (function (_super) {
	        __extends$6(FormArray, _super);
	        function FormArray(controls, validator, asyncValidator) {
	            if (validator === void 0) { validator = null; }
	            if (asyncValidator === void 0) { asyncValidator = null; }
	            _super.call(this, validator, asyncValidator);
	            this.controls = controls;
	            this._initObservables();
	            this._setUpControls();
	            this.updateValueAndValidity({ onlySelf: true, emitEvent: false });
	        }
	        /**
	         * Get the {@link AbstractControl} at the given `index` in the array.
	         */
	        FormArray.prototype.at = function (index) { return this.controls[index]; };
	        /**
	         * Insert a new {@link AbstractControl} at the end of the array.
	         */
	        FormArray.prototype.push = function (control) {
	            this.controls.push(control);
	            this._registerControl(control);
	            this.updateValueAndValidity();
	            this._onCollectionChange();
	        };
	        /**
	         * Insert a new {@link AbstractControl} at the given `index` in the array.
	         */
	        FormArray.prototype.insert = function (index, control) {
	            this.controls.splice(index, 0, control);
	            this._registerControl(control);
	            this.updateValueAndValidity();
	            this._onCollectionChange();
	        };
	        /**
	         * Remove the control at the given `index` in the array.
	         */
	        FormArray.prototype.removeAt = function (index) {
	            if (this.controls[index])
	                this.controls[index]._registerOnCollectionChange(function () { });
	            this.controls.splice(index, 1);
	            this.updateValueAndValidity();
	            this._onCollectionChange();
	        };
	        /**
	         * Replace an existing control.
	         */
	        FormArray.prototype.setControl = function (index, control) {
	            if (this.controls[index])
	                this.controls[index]._registerOnCollectionChange(function () { });
	            this.controls.splice(index, 1);
	            if (control) {
	                this.controls.splice(index, 0, control);
	                this._registerControl(control);
	            }
	            this.updateValueAndValidity();
	            this._onCollectionChange();
	        };
	        Object.defineProperty(FormArray.prototype, "length", {
	            /**
	             * Length of the control array.
	             */
	            get: function () { return this.controls.length; },
	            enumerable: true,
	            configurable: true
	        });
	        /**
	         *  Sets the value of the {@link FormArray}. It accepts an array that matches
	         *  the structure of the control.
	         *
	         * This method performs strict checks, so it will throw an error if you try
	         * to set the value of a control that doesn't exist or if you exclude the
	         * value of a control.
	         *
	         *  ### Example
	         *
	         *  ```
	         *  const arr = new FormArray([
	         *     new FormControl(),
	         *     new FormControl()
	         *  ]);
	         *  console.log(arr.value);   // [null, null]
	         *
	         *  arr.setValue(['Nancy', 'Drew']);
	         *  console.log(arr.value);   // ['Nancy', 'Drew']
	         *  ```
	         */
	        FormArray.prototype.setValue = function (value, _a) {
	            var _this = this;
	            var onlySelf = (_a === void 0 ? {} : _a).onlySelf;
	            this._checkAllValuesPresent(value);
	            value.forEach(function (newValue, index) {
	                _this._throwIfControlMissing(index);
	                _this.at(index).setValue(newValue, { onlySelf: true });
	            });
	            this.updateValueAndValidity({ onlySelf: onlySelf });
	        };
	        /**
	         *  Patches the value of the {@link FormArray}. It accepts an array that matches the
	         *  structure of the control, and will do its best to match the values to the correct
	         *  controls in the group.
	         *
	         *  It accepts both super-sets and sub-sets of the array without throwing an error.
	         *
	         *  ### Example
	         *
	         *  ```
	         *  const arr = new FormArray([
	         *     new FormControl(),
	         *     new FormControl()
	         *  ]);
	         *  console.log(arr.value);   // [null, null]
	         *
	         *  arr.patchValue(['Nancy']);
	         *  console.log(arr.value);   // ['Nancy', null]
	         *  ```
	         */
	        FormArray.prototype.patchValue = function (value, _a) {
	            var _this = this;
	            var onlySelf = (_a === void 0 ? {} : _a).onlySelf;
	            value.forEach(function (newValue, index) {
	                if (_this.at(index)) {
	                    _this.at(index).patchValue(newValue, { onlySelf: true });
	                }
	            });
	            this.updateValueAndValidity({ onlySelf: onlySelf });
	        };
	        /**
	         * Resets the {@link FormArray}. This means by default:
	         *
	         * * The array and all descendants are marked `pristine`
	         * * The array and all descendants are marked `untouched`
	         * * The value of all descendants will be null or null maps
	         *
	         * You can also reset to a specific form state by passing in an array of states
	         * that matches the structure of the control. The state can be a standalone value
	         * or a form state object with both a value and a disabled status.
	         *
	         * ### Example
	         *
	         * ```ts
	         * this.arr.reset(['name', 'last name']);
	         *
	         * console.log(this.arr.value);  // ['name', 'last name']
	         * ```
	         *
	         * - OR -
	         *
	         * ```
	         * this.arr.reset([
	         *   {value: 'name', disabled: true},
	         *   'last'
	         * ]);
	         *
	         * console.log(this.arr.value);  // ['name', 'last name']
	         * console.log(this.arr.get(0).status);  // 'DISABLED'
	         * ```
	         */
	        FormArray.prototype.reset = function (value, _a) {
	            if (value === void 0) { value = []; }
	            var onlySelf = (_a === void 0 ? {} : _a).onlySelf;
	            this._forEachChild(function (control, index) {
	                control.reset(value[index], { onlySelf: true });
	            });
	            this.updateValueAndValidity({ onlySelf: onlySelf });
	            this._updatePristine({ onlySelf: onlySelf });
	            this._updateTouched({ onlySelf: onlySelf });
	        };
	        /**
	         * The aggregate value of the array, including any disabled controls.
	         *
	         * If you'd like to include all values regardless of disabled status, use this method.
	         * Otherwise, the `value` property is the best way to get the value of the array.
	         */
	        FormArray.prototype.getRawValue = function () { return this.controls.map(function (control) { return control.value; }); };
	        /** @internal */
	        FormArray.prototype._throwIfControlMissing = function (index) {
	            if (!this.controls.length) {
	                throw new Error("\n        There are no form controls registered with this array yet.  If you're using ngModel,\n        you may want to check next tick (e.g. use setTimeout).\n      ");
	            }
	            if (!this.at(index)) {
	                throw new Error("Cannot find form control at index " + index);
	            }
	        };
	        /** @internal */
	        FormArray.prototype._forEachChild = function (cb) {
	            this.controls.forEach(function (control, index) { cb(control, index); });
	        };
	        /** @internal */
	        FormArray.prototype._updateValue = function () {
	            var _this = this;
	            this._value = this.controls.filter(function (control) { return control.enabled || _this.disabled; })
	                .map(function (control) { return control.value; });
	        };
	        /** @internal */
	        FormArray.prototype._anyControls = function (condition) {
	            return this.controls.some(function (control) { return control.enabled && condition(control); });
	        };
	        /** @internal */
	        FormArray.prototype._setUpControls = function () {
	            var _this = this;
	            this._forEachChild(function (control) { return _this._registerControl(control); });
	        };
	        /** @internal */
	        FormArray.prototype._checkAllValuesPresent = function (value) {
	            this._forEachChild(function (control, i) {
	                if (value[i] === undefined) {
	                    throw new Error("Must supply a value for form control at index: " + i + ".");
	                }
	            });
	        };
	        /** @internal */
	        FormArray.prototype._allControlsDisabled = function () {
	            for (var _i = 0, _a = this.controls; _i < _a.length; _i++) {
	                var control = _a[_i];
	                if (control.enabled)
	                    return false;
	            }
	            return this.controls.length > 0 || this.disabled;
	        };
	        FormArray.prototype._registerControl = function (control) {
	            control.setParent(this);
	            control._registerOnCollectionChange(this._onCollectionChange);
	        };
	        return FormArray;
	    }(AbstractControl));
	
	    /**
	     * @license
	     * Copyright Google Inc. All Rights Reserved.
	     *
	     * Use of this source code is governed by an MIT-style license that can be
	     * found in the LICENSE file at https://angular.io/license
	     */
	    var __extends$4 = (this && this.__extends) || function (d, b) {
	        for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	        function __() { this.constructor = d; }
	        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	    };
	    var formDirectiveProvider = {
	        provide: ControlContainer,
	        useExisting: _angular_core.forwardRef(function () { return NgForm; })
	    };
	    var resolvedPromise = Promise.resolve(null);
	    /**
	     * @whatItDoes Creates a top-level {@link FormGroup} instance and binds it to a form
	     * to track aggregate form value and validation status.
	     *
	     * @howToUse
	     *
	     * As soon as you import the `FormsModule`, this directive becomes active by default on
	     * all `<form>` tags.  You don't need to add a special selector.
	     *
	     * You can export the directive into a local template variable using `ngForm` as the key
	     * (ex: `#myForm="ngForm"`). This is optional, but useful.  Many properties from the underlying
	     * {@link FormGroup} instance are duplicated on the directive itself, so a reference to it
	     * will give you access to the aggregate value and validity status of the form, as well as
	     * user interaction properties like `dirty` and `touched`.
	     *
	     * To register child controls with the form, you'll want to use {@link NgModel} with a
	     * `name` attribute.  You can also use {@link NgModelGroup} if you'd like to create
	     * sub-groups within the form.
	     *
	     * You can listen to the directive's `ngSubmit` event to be notified when the user has
	     * triggered a form submission. The `ngSubmit` event will be emitted with the original form
	     * submission event.
	     *
	     * {@example forms/ts/simpleForm/simple_form_example.ts region='Component'}
	     *
	     * * **npm package**: `@angular/forms`
	     *
	     * * **NgModule**: `FormsModule`
	     *
	     *  @stable
	     */
	    var NgForm = (function (_super) {
	        __extends$4(NgForm, _super);
	        function NgForm(validators, asyncValidators) {
	            _super.call(this);
	            this._submitted = false;
	            this.ngSubmit = new EventEmitter();
	            this.form =
	                new FormGroup({}, composeValidators(validators), composeAsyncValidators(asyncValidators));
	        }
	        Object.defineProperty(NgForm.prototype, "submitted", {
	            get: function () { return this._submitted; },
	            enumerable: true,
	            configurable: true
	        });
	        Object.defineProperty(NgForm.prototype, "formDirective", {
	            get: function () { return this; },
	            enumerable: true,
	            configurable: true
	        });
	        Object.defineProperty(NgForm.prototype, "control", {
	            get: function () { return this.form; },
	            enumerable: true,
	            configurable: true
	        });
	        Object.defineProperty(NgForm.prototype, "path", {
	            get: function () { return []; },
	            enumerable: true,
	            configurable: true
	        });
	        Object.defineProperty(NgForm.prototype, "controls", {
	            get: function () { return this.form.controls; },
	            enumerable: true,
	            configurable: true
	        });
	        NgForm.prototype.addControl = function (dir) {
	            var _this = this;
	            resolvedPromise.then(function () {
	                var container = _this._findContainer(dir.path);
	                dir._control = container.registerControl(dir.name, dir.control);
	                setUpControl(dir.control, dir);
	                dir.control.updateValueAndValidity({ emitEvent: false });
	            });
	        };
	        NgForm.prototype.getControl = function (dir) { return this.form.get(dir.path); };
	        NgForm.prototype.removeControl = function (dir) {
	            var _this = this;
	            resolvedPromise.then(function () {
	                var container = _this._findContainer(dir.path);
	                if (isPresent(container)) {
	                    container.removeControl(dir.name);
	                }
	            });
	        };
	        NgForm.prototype.addFormGroup = function (dir) {
	            var _this = this;
	            resolvedPromise.then(function () {
	                var container = _this._findContainer(dir.path);
	                var group = new FormGroup({});
	                setUpFormContainer(group, dir);
	                container.registerControl(dir.name, group);
	                group.updateValueAndValidity({ emitEvent: false });
	            });
	        };
	        NgForm.prototype.removeFormGroup = function (dir) {
	            var _this = this;
	            resolvedPromise.then(function () {
	                var container = _this._findContainer(dir.path);
	                if (isPresent(container)) {
	                    container.removeControl(dir.name);
	                }
	            });
	        };
	        NgForm.prototype.getFormGroup = function (dir) { return this.form.get(dir.path); };
	        NgForm.prototype.updateModel = function (dir, value) {
	            var _this = this;
	            resolvedPromise.then(function () {
	                var ctrl = _this.form.get(dir.path);
	                ctrl.setValue(value);
	            });
	        };
	        NgForm.prototype.setValue = function (value) { this.control.setValue(value); };
	        NgForm.prototype.onSubmit = function ($event) {
	            this._submitted = true;
	            this.ngSubmit.emit($event);
	            return false;
	        };
	        NgForm.prototype.onReset = function () { this.resetForm(); };
	        NgForm.prototype.resetForm = function (value) {
	            if (value === void 0) { value = undefined; }
	            this.form.reset(value);
	            this._submitted = false;
	        };
	        /** @internal */
	        NgForm.prototype._findContainer = function (path) {
	            path.pop();
	            return path.length ? this.form.get(path) : this.form;
	        };
	        NgForm.decorators = [
	            { type: _angular_core.Directive, args: [{
	                        selector: 'form:not([ngNoForm]):not([formGroup]),ngForm,[ngForm]',
	                        providers: [formDirectiveProvider],
	                        host: { '(submit)': 'onSubmit($event)', '(reset)': 'onReset()' },
	                        outputs: ['ngSubmit'],
	                        exportAs: 'ngForm'
	                    },] },
	        ];
	        /** @nocollapse */
	        NgForm.ctorParameters = [
	            { type: Array, decorators: [{ type: _angular_core.Optional }, { type: _angular_core.Self }, { type: _angular_core.Inject, args: [NG_VALIDATORS,] },] },
	            { type: Array, decorators: [{ type: _angular_core.Optional }, { type: _angular_core.Self }, { type: _angular_core.Inject, args: [NG_ASYNC_VALIDATORS,] },] },
	        ];
	        return NgForm;
	    }(ControlContainer));
	
	    /**
	     * @license
	     * Copyright Google Inc. All Rights Reserved.
	     *
	     * Use of this source code is governed by an MIT-style license that can be
	     * found in the LICENSE file at https://angular.io/license
	     */
	    var Examples = {
	        formControlName: "\n    <div [formGroup]=\"myGroup\">\n      <input formControlName=\"firstName\">\n    </div>\n\n    In your class:\n\n    this.myGroup = new FormGroup({\n       firstName: new FormControl()\n    });",
	        formGroupName: "\n    <div [formGroup]=\"myGroup\">\n       <div formGroupName=\"person\">\n          <input formControlName=\"firstName\">\n       </div>\n    </div>\n\n    In your class:\n\n    this.myGroup = new FormGroup({\n       person: new FormGroup({ firstName: new FormControl() })\n    });",
	        formArrayName: "\n    <div [formGroup]=\"myGroup\">\n      <div formArrayName=\"cities\">\n        <div *ngFor=\"let city of cityArray.controls; let i=index\">\n          <input [formControlName]=\"i\">\n        </div>\n      </div>\n    </div>\n\n    In your class:\n\n    this.cityArray = new FormArray([new FormControl('SF')]);\n    this.myGroup = new FormGroup({\n      cities: this.cityArray\n    });",
	        ngModelGroup: "\n    <form>\n       <div ngModelGroup=\"person\">\n          <input [(ngModel)]=\"person.name\" name=\"firstName\">\n       </div>\n    </form>",
	        ngModelWithFormGroup: "\n    <div [formGroup]=\"myGroup\">\n       <input formControlName=\"firstName\">\n       <input [(ngModel)]=\"showMoreControls\" [ngModelOptions]=\"{standalone: true}\">\n    </div>\n  "
	    };
	
	    var TemplateDrivenErrors = (function () {
	        function TemplateDrivenErrors() {
	        }
	        TemplateDrivenErrors.modelParentException = function () {
	            throw new Error("\n      ngModel cannot be used to register form controls with a parent formGroup directive.  Try using\n      formGroup's partner directive \"formControlName\" instead.  Example:\n\n      " + Examples.formControlName + "\n\n      Or, if you'd like to avoid registering this form control, indicate that it's standalone in ngModelOptions:\n\n      Example:\n\n      " + Examples.ngModelWithFormGroup);
	        };
	        TemplateDrivenErrors.formGroupNameException = function () {
	            throw new Error("\n      ngModel cannot be used to register form controls with a parent formGroupName or formArrayName directive.\n\n      Option 1: Use formControlName instead of ngModel (reactive strategy):\n\n      " + Examples.formGroupName + "\n\n      Option 2:  Update ngModel's parent be ngModelGroup (template-driven strategy):\n\n      " + Examples.ngModelGroup);
	        };
	        TemplateDrivenErrors.missingNameException = function () {
	            throw new Error("If ngModel is used within a form tag, either the name attribute must be set or the form\n      control must be defined as 'standalone' in ngModelOptions.\n\n      Example 1: <input [(ngModel)]=\"person.firstName\" name=\"first\">\n      Example 2: <input [(ngModel)]=\"person.firstName\" [ngModelOptions]=\"{standalone: true}\">");
	        };
	        TemplateDrivenErrors.modelGroupParentException = function () {
	            throw new Error("\n      ngModelGroup cannot be used with a parent formGroup directive.\n\n      Option 1: Use formGroupName instead of ngModelGroup (reactive strategy):\n\n      " + Examples.formGroupName + "\n\n      Option 2:  Use a regular form tag instead of the formGroup directive (template-driven strategy):\n\n      " + Examples.ngModelGroup);
	        };
	        return TemplateDrivenErrors;
	    }());
	
	    /**
	     * @license
	     * Copyright Google Inc. All Rights Reserved.
	     *
	     * Use of this source code is governed by an MIT-style license that can be
	     * found in the LICENSE file at https://angular.io/license
	     */
	    var __extends$8 = (this && this.__extends) || function (d, b) {
	        for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	        function __() { this.constructor = d; }
	        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	    };
	    var modelGroupProvider = {
	        provide: ControlContainer,
	        useExisting: _angular_core.forwardRef(function () { return NgModelGroup; })
	    };
	    /**
	     * @whatItDoes Creates and binds a {@link FormGroup} instance to a DOM element.
	     *
	     * @howToUse
	     *
	     * This directive can only be used as a child of {@link NgForm} (or in other words,
	     * within `<form>` tags).
	     *
	     * Use this directive if you'd like to create a sub-group within a form. This can
	     * come in handy if you want to validate a sub-group of your form separately from
	     * the rest of your form, or if some values in your domain model make more sense to
	     * consume together in a nested object.
	     *
	     * Pass in the name you'd like this sub-group to have and it will become the key
	     * for the sub-group in the form's full value. You can also export the directive into
	     * a local template variable using `ngModelGroup` (ex: `#myGroup="ngModelGroup"`).
	     *
	     * {@example forms/ts/ngModelGroup/ng_model_group_example.ts region='Component'}
	     *
	     * * **npm package**: `@angular/forms`
	     *
	     * * **NgModule**: `FormsModule`
	     *
	     * @stable
	     */
	    var NgModelGroup = (function (_super) {
	        __extends$8(NgModelGroup, _super);
	        function NgModelGroup(parent, validators, asyncValidators) {
	            _super.call(this);
	            this._parent = parent;
	            this._validators = validators;
	            this._asyncValidators = asyncValidators;
	        }
	        /** @internal */
	        NgModelGroup.prototype._checkParentType = function () {
	            if (!(this._parent instanceof NgModelGroup) && !(this._parent instanceof NgForm)) {
	                TemplateDrivenErrors.modelGroupParentException();
	            }
	        };
	        NgModelGroup.decorators = [
	            { type: _angular_core.Directive, args: [{ selector: '[ngModelGroup]', providers: [modelGroupProvider], exportAs: 'ngModelGroup' },] },
	        ];
	        /** @nocollapse */
	        NgModelGroup.ctorParameters = [
	            { type: ControlContainer, decorators: [{ type: _angular_core.Host }, { type: _angular_core.SkipSelf },] },
	            { type: Array, decorators: [{ type: _angular_core.Optional }, { type: _angular_core.Self }, { type: _angular_core.Inject, args: [NG_VALIDATORS,] },] },
	            { type: Array, decorators: [{ type: _angular_core.Optional }, { type: _angular_core.Self }, { type: _angular_core.Inject, args: [NG_ASYNC_VALIDATORS,] },] },
	        ];
	        NgModelGroup.propDecorators = {
	            'name': [{ type: _angular_core.Input, args: ['ngModelGroup',] },],
	        };
	        return NgModelGroup;
	    }(AbstractFormGroupDirective));
	
	    /**
	     * @license
	     * Copyright Google Inc. All Rights Reserved.
	     *
	     * Use of this source code is governed by an MIT-style license that can be
	     * found in the LICENSE file at https://angular.io/license
	     */
	    var __extends$7 = (this && this.__extends) || function (d, b) {
	        for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	        function __() { this.constructor = d; }
	        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	    };
	    var formControlBinding = {
	        provide: NgControl,
	        useExisting: _angular_core.forwardRef(function () { return NgModel; })
	    };
	    var resolvedPromise$1 = Promise.resolve(null);
	    /**
	     * @whatItDoes Creates a {@link FormControl} instance from a domain model and binds it
	     * to a form control element.
	     *
	     * The {@link FormControl} instance will track the value, user interaction, and
	     * validation status of the control and keep the view synced with the model. If used
	     * within a parent form, the directive will also register itself with the form as a child
	     * control.
	     *
	     * @howToUse
	     *
	     * This directive can be used by itself or as part of a larger form. All you need is the
	     * `ngModel` selector to activate it.
	     *
	     * It accepts a domain model as an optional {@link @Input}. If you have a one-way binding
	     * to `ngModel` with `[]` syntax, changing the value of the domain model in the component
	     * class will set the value in the view. If you have a two-way binding with `[()]` syntax
	     * (also known as 'banana-box syntax'), the value in the UI will always be synced back to
	     * the domain model in your class as well.
	     *
	     * If you wish to inspect the properties of the associated {@link FormControl} (like
	     * validity state), you can also export the directive into a local template variable using
	     * `ngModel` as the key (ex: `#myVar="ngModel"`). You can then access the control using the
	     * directive's `control` property, but most properties you'll need (like `valid` and `dirty`)
	     * will fall through to the control anyway, so you can access them directly. You can see a
	     * full list of properties directly available in {@link AbstractControlDirective}.
	     *
	     * The following is an example of a simple standalone control using `ngModel`:
	     *
	     * {@example forms/ts/simpleNgModel/simple_ng_model_example.ts region='Component'}
	     *
	     * When using the `ngModel` within `<form>` tags, you'll also need to supply a `name` attribute
	     * so that the control can be registered with the parent form under that name.
	     *
	     * It's worth noting that in the context of a parent form, you often can skip one-way or
	     * two-way binding because the parent form will sync the value for you. You can access
	     * its properties by exporting it into a local template variable using `ngForm` (ex:
	     * `#f="ngForm"`). Then you can pass it where it needs to go on submit.
	     *
	     * If you do need to populate initial values into your form, using a one-way binding for
	     * `ngModel` tends to be sufficient as long as you use the exported form's value rather
	     * than the domain model's value on submit.
	     *
	     * Take a look at an example of using `ngModel` within a form:
	     *
	     * {@example forms/ts/simpleForm/simple_form_example.ts region='Component'}
	     *
	     * To see `ngModel` examples with different form control types, see:
	     *
	     * * Radio buttons: {@link RadioControlValueAccessor}
	     * * Selects: {@link SelectControlValueAccessor}
	     *
	     * **npm package**: `@angular/forms`
	     *
	     * **NgModule**: `FormsModule`
	     *
	     *  @stable
	     */
	    var NgModel = (function (_super) {
	        __extends$7(NgModel, _super);
	        function NgModel(parent, validators, asyncValidators, valueAccessors) {
	            _super.call(this);
	            /** @internal */
	            this._control = new FormControl();
	            /** @internal */
	            this._registered = false;
	            this.update = new EventEmitter();
	            this._parent = parent;
	            this._rawValidators = validators || [];
	            this._rawAsyncValidators = asyncValidators || [];
	            this.valueAccessor = selectValueAccessor(this, valueAccessors);
	        }
	        NgModel.prototype.ngOnChanges = function (changes) {
	            this._checkForErrors();
	            if (!this._registered)
	                this._setUpControl();
	            if ('isDisabled' in changes) {
	                this._updateDisabled(changes);
	            }
	            if (isPropertyUpdated(changes, this.viewModel)) {
	                this._updateValue(this.model);
	                this.viewModel = this.model;
	            }
	        };
	        NgModel.prototype.ngOnDestroy = function () { this.formDirective && this.formDirective.removeControl(this); };
	        Object.defineProperty(NgModel.prototype, "control", {
	            get: function () { return this._control; },
	            enumerable: true,
	            configurable: true
	        });
	        Object.defineProperty(NgModel.prototype, "path", {
	            get: function () {
	                return this._parent ? controlPath(this.name, this._parent) : [this.name];
	            },
	            enumerable: true,
	            configurable: true
	        });
	        Object.defineProperty(NgModel.prototype, "formDirective", {
	            get: function () { return this._parent ? this._parent.formDirective : null; },
	            enumerable: true,
	            configurable: true
	        });
	        Object.defineProperty(NgModel.prototype, "validator", {
	            get: function () { return composeValidators(this._rawValidators); },
	            enumerable: true,
	            configurable: true
	        });
	        Object.defineProperty(NgModel.prototype, "asyncValidator", {
	            get: function () {
	                return composeAsyncValidators(this._rawAsyncValidators);
	            },
	            enumerable: true,
	            configurable: true
	        });
	        NgModel.prototype.viewToModelUpdate = function (newValue) {
	            this.viewModel = newValue;
	            this.update.emit(newValue);
	        };
	        NgModel.prototype._setUpControl = function () {
	            this._isStandalone() ? this._setUpStandalone() :
	                this.formDirective.addControl(this);
	            this._registered = true;
	        };
	        NgModel.prototype._isStandalone = function () {
	            return !this._parent || (this.options && this.options.standalone);
	        };
	        NgModel.prototype._setUpStandalone = function () {
	            setUpControl(this._control, this);
	            this._control.updateValueAndValidity({ emitEvent: false });
	        };
	        NgModel.prototype._checkForErrors = function () {
	            if (!this._isStandalone()) {
	                this._checkParentType();
	            }
	            this._checkName();
	        };
	        NgModel.prototype._checkParentType = function () {
	            if (!(this._parent instanceof NgModelGroup) &&
	                this._parent instanceof AbstractFormGroupDirective) {
	                TemplateDrivenErrors.formGroupNameException();
	            }
	            else if (!(this._parent instanceof NgModelGroup) && !(this._parent instanceof NgForm)) {
	                TemplateDrivenErrors.modelParentException();
	            }
	        };
	        NgModel.prototype._checkName = function () {
	            if (this.options && this.options.name)
	                this.name = this.options.name;
	            if (!this._isStandalone() && !this.name) {
	                TemplateDrivenErrors.missingNameException();
	            }
	        };
	        NgModel.prototype._updateValue = function (value) {
	            var _this = this;
	            resolvedPromise$1.then(function () { _this.control.setValue(value, { emitViewToModelChange: false }); });
	        };
	        NgModel.prototype._updateDisabled = function (changes) {
	            var _this = this;
	            var disabledValue = changes['isDisabled'].currentValue;
	            var isDisabled = disabledValue === '' || (disabledValue && disabledValue !== 'false');
	            resolvedPromise$1.then(function () {
	                if (isDisabled && !_this.control.disabled) {
	                    _this.control.disable();
	                }
	                else if (!isDisabled && _this.control.disabled) {
	                    _this.control.enable();
	                }
	            });
	        };
	        NgModel.decorators = [
	            { type: _angular_core.Directive, args: [{
	                        selector: '[ngModel]:not([formControlName]):not([formControl])',
	                        providers: [formControlBinding],
	                        exportAs: 'ngModel'
	                    },] },
	        ];
	        /** @nocollapse */
	        NgModel.ctorParameters = [
	            { type: ControlContainer, decorators: [{ type: _angular_core.Optional }, { type: _angular_core.Host },] },
	            { type: Array, decorators: [{ type: _angular_core.Optional }, { type: _angular_core.Self }, { type: _angular_core.Inject, args: [NG_VALIDATORS,] },] },
	            { type: Array, decorators: [{ type: _angular_core.Optional }, { type: _angular_core.Self }, { type: _angular_core.Inject, args: [NG_ASYNC_VALIDATORS,] },] },
	            { type: Array, decorators: [{ type: _angular_core.Optional }, { type: _angular_core.Self }, { type: _angular_core.Inject, args: [NG_VALUE_ACCESSOR,] },] },
	        ];
	        NgModel.propDecorators = {
	            'name': [{ type: _angular_core.Input },],
	            'isDisabled': [{ type: _angular_core.Input, args: ['disabled',] },],
	            'model': [{ type: _angular_core.Input, args: ['ngModel',] },],
	            'options': [{ type: _angular_core.Input, args: ['ngModelOptions',] },],
	            'update': [{ type: _angular_core.Output, args: ['ngModelChange',] },],
	        };
	        return NgModel;
	    }(NgControl));
	
	    var ReactiveErrors = (function () {
	        function ReactiveErrors() {
	        }
	        ReactiveErrors.controlParentException = function () {
	            throw new Error("formControlName must be used with a parent formGroup directive.  You'll want to add a formGroup\n       directive and pass it an existing FormGroup instance (you can create one in your class).\n\n      Example:\n\n      " + Examples.formControlName);
	        };
	        ReactiveErrors.ngModelGroupException = function () {
	            throw new Error("formControlName cannot be used with an ngModelGroup parent. It is only compatible with parents\n       that also have a \"form\" prefix: formGroupName, formArrayName, or formGroup.\n\n       Option 1:  Update the parent to be formGroupName (reactive form strategy)\n\n        " + Examples.formGroupName + "\n\n        Option 2: Use ngModel instead of formControlName (template-driven strategy)\n\n        " + Examples.ngModelGroup);
	        };
	        ReactiveErrors.missingFormException = function () {
	            throw new Error("formGroup expects a FormGroup instance. Please pass one in.\n\n       Example:\n\n       " + Examples.formControlName);
	        };
	        ReactiveErrors.groupParentException = function () {
	            throw new Error("formGroupName must be used with a parent formGroup directive.  You'll want to add a formGroup\n      directive and pass it an existing FormGroup instance (you can create one in your class).\n\n      Example:\n\n      " + Examples.formGroupName);
	        };
	        ReactiveErrors.arrayParentException = function () {
	            throw new Error("formArrayName must be used with a parent formGroup directive.  You'll want to add a formGroup\n       directive and pass it an existing FormGroup instance (you can create one in your class).\n\n        Example:\n\n        " + Examples.formArrayName);
	        };
	        ReactiveErrors.disabledAttrWarning = function () {
	            console.warn("\n      It looks like you're using the disabled attribute with a reactive form directive. If you set disabled to true\n      when you set up this control in your component class, the disabled attribute will actually be set in the DOM for\n      you. We recommend using this approach to avoid 'changed after checked' errors.\n       \n      Example: \n      form = new FormGroup({\n        first: new FormControl({value: 'Nancy', disabled: true}, Validators.required),\n        last: new FormControl('Drew', Validators.required)\n      });\n    ");
	        };
	        return ReactiveErrors;
	    }());
	
	    /**
	     * @license
	     * Copyright Google Inc. All Rights Reserved.
	     *
	     * Use of this source code is governed by an MIT-style license that can be
	     * found in the LICENSE file at https://angular.io/license
	     */
	    var __extends$9 = (this && this.__extends) || function (d, b) {
	        for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	        function __() { this.constructor = d; }
	        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	    };
	    var formControlBinding$1 = {
	        provide: NgControl,
	        useExisting: _angular_core.forwardRef(function () { return FormControlDirective; })
	    };
	    /**
	     * @whatItDoes Syncs a standalone {@link FormControl} instance to a form control element.
	     *
	     * In other words, this directive ensures that any values written to the {@link FormControl}
	     * instance programmatically will be written to the DOM element (model -> view). Conversely,
	     * any values written to the DOM element through user input will be reflected in the
	     * {@link FormControl} instance (view -> model).
	     *
	     * @howToUse
	     *
	     * Use this directive if you'd like to create and manage a {@link FormControl} instance directly.
	     * Simply create a {@link FormControl}, save it to your component class, and pass it into the
	     * {@link FormControlDirective}.
	     *
	     * This directive is designed to be used as a standalone control.  Unlike {@link FormControlName},
	     * it does not require that your {@link FormControl} instance be part of any parent
	     * {@link FormGroup}, and it won't be registered to any {@link FormGroupDirective} that
	     * exists above it.
	     *
	     * **Get the value**: the `value` property is always synced and available on the
	     * {@link FormControl} instance. See a full list of available properties in
	     * {@link AbstractControl}.
	     *
	     * **Set the value**: You can pass in an initial value when instantiating the {@link FormControl},
	     * or you can set it programmatically later using {@link AbstractControl.setValue} or
	     * {@link AbstractControl.patchValue}.
	     *
	     * **Listen to value**: If you want to listen to changes in the value of the control, you can
	     * subscribe to the {@link AbstractControl.valueChanges} event.  You can also listen to
	     * {@link AbstractControl.statusChanges} to be notified when the validation status is
	     * re-calculated.
	     *
	     * ### Example
	     *
	     * {@example forms/ts/simpleFormControl/simple_form_control_example.ts region='Component'}
	     *
	     * * **npm package**: `@angular/forms`
	     *
	     * * **NgModule**: `ReactiveFormsModule`
	     *
	     *  @stable
	     */
	    var FormControlDirective = (function (_super) {
	        __extends$9(FormControlDirective, _super);
	        function FormControlDirective(validators, asyncValidators, valueAccessors) {
	            _super.call(this);
	            this.update = new EventEmitter();
	            this._rawValidators = validators || [];
	            this._rawAsyncValidators = asyncValidators || [];
	            this.valueAccessor = selectValueAccessor(this, valueAccessors);
	        }
	        Object.defineProperty(FormControlDirective.prototype, "isDisabled", {
	            set: function (isDisabled) { ReactiveErrors.disabledAttrWarning(); },
	            enumerable: true,
	            configurable: true
	        });
	        FormControlDirective.prototype.ngOnChanges = function (changes) {
	            if (this._isControlChanged(changes)) {
	                setUpControl(this.form, this);
	                if (this.control.disabled && this.valueAccessor.setDisabledState) {
	                    this.valueAccessor.setDisabledState(true);
	                }
	                this.form.updateValueAndValidity({ emitEvent: false });
	            }
	            if (isPropertyUpdated(changes, this.viewModel)) {
	                this.form.setValue(this.model);
	                this.viewModel = this.model;
	            }
	        };
	        Object.defineProperty(FormControlDirective.prototype, "path", {
	            get: function () { return []; },
	            enumerable: true,
	            configurable: true
	        });
	        Object.defineProperty(FormControlDirective.prototype, "validator", {
	            get: function () { return composeValidators(this._rawValidators); },
	            enumerable: true,
	            configurable: true
	        });
	        Object.defineProperty(FormControlDirective.prototype, "asyncValidator", {
	            get: function () {
	                return composeAsyncValidators(this._rawAsyncValidators);
	            },
	            enumerable: true,
	            configurable: true
	        });
	        Object.defineProperty(FormControlDirective.prototype, "control", {
	            get: function () { return this.form; },
	            enumerable: true,
	            configurable: true
	        });
	        FormControlDirective.prototype.viewToModelUpdate = function (newValue) {
	            this.viewModel = newValue;
	            this.update.emit(newValue);
	        };
	        FormControlDirective.prototype._isControlChanged = function (changes) {
	            return changes.hasOwnProperty('form');
	        };
	        FormControlDirective.decorators = [
	            { type: _angular_core.Directive, args: [{ selector: '[formControl]', providers: [formControlBinding$1], exportAs: 'ngForm' },] },
	        ];
	        /** @nocollapse */
	        FormControlDirective.ctorParameters = [
	            { type: Array, decorators: [{ type: _angular_core.Optional }, { type: _angular_core.Self }, { type: _angular_core.Inject, args: [NG_VALIDATORS,] },] },
	            { type: Array, decorators: [{ type: _angular_core.Optional }, { type: _angular_core.Self }, { type: _angular_core.Inject, args: [NG_ASYNC_VALIDATORS,] },] },
	            { type: Array, decorators: [{ type: _angular_core.Optional }, { type: _angular_core.Self }, { type: _angular_core.Inject, args: [NG_VALUE_ACCESSOR,] },] },
	        ];
	        FormControlDirective.propDecorators = {
	            'form': [{ type: _angular_core.Input, args: ['formControl',] },],
	            'model': [{ type: _angular_core.Input, args: ['ngModel',] },],
	            'update': [{ type: _angular_core.Output, args: ['ngModelChange',] },],
	            'isDisabled': [{ type: _angular_core.Input, args: ['disabled',] },],
	        };
	        return FormControlDirective;
	    }(NgControl));
	
	    /**
	     * @license
	     * Copyright Google Inc. All Rights Reserved.
	     *
	     * Use of this source code is governed by an MIT-style license that can be
	     * found in the LICENSE file at https://angular.io/license
	     */
	    var __extends$11 = (this && this.__extends) || function (d, b) {
	        for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	        function __() { this.constructor = d; }
	        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	    };
	    var formDirectiveProvider$1 = {
	        provide: ControlContainer,
	        useExisting: _angular_core.forwardRef(function () { return FormGroupDirective; })
	    };
	    /**
	     * @whatItDoes Binds an existing {@link FormGroup} to a DOM element.
	     *
	     * @howToUse
	     *
	     * This directive accepts an existing {@link FormGroup} instance. It will then use this
	     * {@link FormGroup} instance to match any child {@link FormControl}, {@link FormGroup},
	     * and {@link FormArray} instances to child {@link FormControlName}, {@link FormGroupName},
	     * and {@link FormArrayName} directives.
	     *
	     * **Set value**: You can set the form's initial value when instantiating the
	     * {@link FormGroup}, or you can set it programmatically later using the {@link FormGroup}'s
	     * {@link AbstractControl.setValue} or {@link AbstractControl.patchValue} methods.
	     *
	     * **Listen to value**: If you want to listen to changes in the value of the form, you can subscribe
	     * to the {@link FormGroup}'s {@link AbstractControl.valueChanges} event.  You can also listen to
	     * its {@link AbstractControl.statusChanges} event to be notified when the validation status is
	     * re-calculated.
	     *
	     * Furthermore, you can listen to the directive's `ngSubmit` event to be notified when the user has
	     * triggered a form submission. The `ngSubmit` event will be emitted with the original form
	     * submission event.
	     *
	     * ### Example
	     *
	     * In this example, we create form controls for first name and last name.
	     *
	     * {@example forms/ts/simpleFormGroup/simple_form_group_example.ts region='Component'}
	     *
	     * **npm package**: `@angular/forms`
	     *
	     * **NgModule**: {@link ReactiveFormsModule}
	     *
	     *  @stable
	     */
	    var FormGroupDirective = (function (_super) {
	        __extends$11(FormGroupDirective, _super);
	        function FormGroupDirective(_validators, _asyncValidators) {
	            _super.call(this);
	            this._validators = _validators;
	            this._asyncValidators = _asyncValidators;
	            this._submitted = false;
	            this.directives = [];
	            this.form = null;
	            this.ngSubmit = new EventEmitter();
	        }
	        FormGroupDirective.prototype.ngOnChanges = function (changes) {
	            this._checkFormPresent();
	            if (changes.hasOwnProperty('form')) {
	                this._updateValidators();
	                this._updateDomValue();
	                this._updateRegistrations();
	            }
	        };
	        Object.defineProperty(FormGroupDirective.prototype, "submitted", {
	            get: function () { return this._submitted; },
	            enumerable: true,
	            configurable: true
	        });
	        Object.defineProperty(FormGroupDirective.prototype, "formDirective", {
	            get: function () { return this; },
	            enumerable: true,
	            configurable: true
	        });
	        Object.defineProperty(FormGroupDirective.prototype, "control", {
	            get: function () { return this.form; },
	            enumerable: true,
	            configurable: true
	        });
	        Object.defineProperty(FormGroupDirective.prototype, "path", {
	            get: function () { return []; },
	            enumerable: true,
	            configurable: true
	        });
	        FormGroupDirective.prototype.addControl = function (dir) {
	            var ctrl = this.form.get(dir.path);
	            setUpControl(ctrl, dir);
	            ctrl.updateValueAndValidity({ emitEvent: false });
	            this.directives.push(dir);
	            return ctrl;
	        };
	        FormGroupDirective.prototype.getControl = function (dir) { return this.form.get(dir.path); };
	        FormGroupDirective.prototype.removeControl = function (dir) { ListWrapper.remove(this.directives, dir); };
	        FormGroupDirective.prototype.addFormGroup = function (dir) {
	            var ctrl = this.form.get(dir.path);
	            setUpFormContainer(ctrl, dir);
	            ctrl.updateValueAndValidity({ emitEvent: false });
	        };
	        FormGroupDirective.prototype.removeFormGroup = function (dir) { };
	        FormGroupDirective.prototype.getFormGroup = function (dir) { return this.form.get(dir.path); };
	        FormGroupDirective.prototype.addFormArray = function (dir) {
	            var ctrl = this.form.get(dir.path);
	            setUpFormContainer(ctrl, dir);
	            ctrl.updateValueAndValidity({ emitEvent: false });
	        };
	        FormGroupDirective.prototype.removeFormArray = function (dir) { };
	        FormGroupDirective.prototype.getFormArray = function (dir) { return this.form.get(dir.path); };
	        FormGroupDirective.prototype.updateModel = function (dir, value) {
	            var ctrl = this.form.get(dir.path);
	            ctrl.setValue(value);
	        };
	        FormGroupDirective.prototype.onSubmit = function ($event) {
	            this._submitted = true;
	            this.ngSubmit.emit($event);
	            return false;
	        };
	        FormGroupDirective.prototype.onReset = function () { this.resetForm(); };
	        FormGroupDirective.prototype.resetForm = function (value) {
	            if (value === void 0) { value = undefined; }
	            this.form.reset(value);
	            this._submitted = false;
	        };
	        /** @internal */
	        FormGroupDirective.prototype._updateDomValue = function () {
	            var _this = this;
	            this.directives.forEach(function (dir) {
	                var newCtrl = _this.form.get(dir.path);
	                if (dir._control !== newCtrl) {
	                    cleanUpControl(dir._control, dir);
	                    if (newCtrl)
	                        setUpControl(newCtrl, dir);
	                    dir._control = newCtrl;
	                }
	            });
	            this.form._updateTreeValidity({ emitEvent: false });
	        };
	        FormGroupDirective.prototype._updateRegistrations = function () {
	            var _this = this;
	            this.form._registerOnCollectionChange(function () { return _this._updateDomValue(); });
	            if (this._oldForm)
	                this._oldForm._registerOnCollectionChange(function () { });
	            this._oldForm = this.form;
	        };
	        FormGroupDirective.prototype._updateValidators = function () {
	            var sync = composeValidators(this._validators);
	            this.form.validator = Validators.compose([this.form.validator, sync]);
	            var async = composeAsyncValidators(this._asyncValidators);
	            this.form.asyncValidator = Validators.composeAsync([this.form.asyncValidator, async]);
	        };
	        FormGroupDirective.prototype._checkFormPresent = function () {
	            if (!this.form) {
	                ReactiveErrors.missingFormException();
	            }
	        };
	        FormGroupDirective.decorators = [
	            { type: _angular_core.Directive, args: [{
	                        selector: '[formGroup]',
	                        providers: [formDirectiveProvider$1],
	                        host: { '(submit)': 'onSubmit($event)', '(reset)': 'onReset()' },
	                        exportAs: 'ngForm'
	                    },] },
	        ];
	        /** @nocollapse */
	        FormGroupDirective.ctorParameters = [
	            { type: Array, decorators: [{ type: _angular_core.Optional }, { type: _angular_core.Self }, { type: _angular_core.Inject, args: [NG_VALIDATORS,] },] },
	            { type: Array, decorators: [{ type: _angular_core.Optional }, { type: _angular_core.Self }, { type: _angular_core.Inject, args: [NG_ASYNC_VALIDATORS,] },] },
	        ];
	        FormGroupDirective.propDecorators = {
	            'form': [{ type: _angular_core.Input, args: ['formGroup',] },],
	            'ngSubmit': [{ type: _angular_core.Output },],
	        };
	        return FormGroupDirective;
	    }(ControlContainer));
	
	    /**
	     * @license
	     * Copyright Google Inc. All Rights Reserved.
	     *
	     * Use of this source code is governed by an MIT-style license that can be
	     * found in the LICENSE file at https://angular.io/license
	     */
	    var __extends$12 = (this && this.__extends) || function (d, b) {
	        for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	        function __() { this.constructor = d; }
	        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	    };
	    var formGroupNameProvider = {
	        provide: ControlContainer,
	        useExisting: _angular_core.forwardRef(function () { return FormGroupName; })
	    };
	    /**
	     * @whatItDoes Syncs a nested {@link FormGroup} to a DOM element.
	     *
	     * @howToUse
	     *
	     * This directive can only be used with a parent {@link FormGroupDirective} (selector:
	     * `[formGroup]`).
	     *
	     * It accepts the string name of the nested {@link FormGroup} you want to link, and
	     * will look for a {@link FormGroup} registered with that name in the parent
	     * {@link FormGroup} instance you passed into {@link FormGroupDirective}.
	     *
	     * Nested form groups can come in handy when you want to validate a sub-group of a
	     * form separately from the rest or when you'd like to group the values of certain
	     * controls into their own nested object.
	     *
	     * **Access the group**: You can access the associated {@link FormGroup} using the
	     * {@link AbstractControl.get} method. Ex: `this.form.get('name')`.
	     *
	     * You can also access individual controls within the group using dot syntax.
	     * Ex: `this.form.get('name.first')`
	     *
	     * **Get the value**: the `value` property is always synced and available on the
	     * {@link FormGroup}. See a full list of available properties in {@link AbstractControl}.
	     *
	     * **Set the value**: You can set an initial value for each child control when instantiating
	     * the {@link FormGroup}, or you can set it programmatically later using
	     * {@link AbstractControl.setValue} or {@link AbstractControl.patchValue}.
	     *
	     * **Listen to value**: If you want to listen to changes in the value of the group, you can
	     * subscribe to the {@link AbstractControl.valueChanges} event.  You can also listen to
	     * {@link AbstractControl.statusChanges} to be notified when the validation status is
	     * re-calculated.
	     *
	     * ### Example
	     *
	     * {@example forms/ts/nestedFormGroup/nested_form_group_example.ts region='Component'}
	     *
	     * * **npm package**: `@angular/forms`
	     *
	     * * **NgModule**: `ReactiveFormsModule`
	     *
	     * @stable
	     */
	    var FormGroupName = (function (_super) {
	        __extends$12(FormGroupName, _super);
	        function FormGroupName(parent, validators, asyncValidators) {
	            _super.call(this);
	            this._parent = parent;
	            this._validators = validators;
	            this._asyncValidators = asyncValidators;
	        }
	        /** @internal */
	        FormGroupName.prototype._checkParentType = function () {
	            if (_hasInvalidParent(this._parent)) {
	                ReactiveErrors.groupParentException();
	            }
	        };
	        FormGroupName.decorators = [
	            { type: _angular_core.Directive, args: [{ selector: '[formGroupName]', providers: [formGroupNameProvider] },] },
	        ];
	        /** @nocollapse */
	        FormGroupName.ctorParameters = [
	            { type: ControlContainer, decorators: [{ type: _angular_core.Optional }, { type: _angular_core.Host }, { type: _angular_core.SkipSelf },] },
	            { type: Array, decorators: [{ type: _angular_core.Optional }, { type: _angular_core.Self }, { type: _angular_core.Inject, args: [NG_VALIDATORS,] },] },
	            { type: Array, decorators: [{ type: _angular_core.Optional }, { type: _angular_core.Self }, { type: _angular_core.Inject, args: [NG_ASYNC_VALIDATORS,] },] },
	        ];
	        FormGroupName.propDecorators = {
	            'name': [{ type: _angular_core.Input, args: ['formGroupName',] },],
	        };
	        return FormGroupName;
	    }(AbstractFormGroupDirective));
	    var formArrayNameProvider = {
	        provide: ControlContainer,
	        useExisting: _angular_core.forwardRef(function () { return FormArrayName; })
	    };
	    /**
	     * @whatItDoes Syncs a nested {@link FormArray} to a DOM element.
	     *
	     * @howToUse
	     *
	     * This directive is designed to be used with a parent {@link FormGroupDirective} (selector:
	     * `[formGroup]`).
	     *
	     * It accepts the string name of the nested {@link FormArray} you want to link, and
	     * will look for a {@link FormArray} registered with that name in the parent
	     * {@link FormGroup} instance you passed into {@link FormGroupDirective}.
	     *
	     * Nested form arrays can come in handy when you have a group of form controls but
	     * you're not sure how many there will be. Form arrays allow you to create new
	     * form controls dynamically.
	     *
	     * **Access the array**: You can access the associated {@link FormArray} using the
	     * {@link AbstractControl.get} method on the parent {@link FormGroup}.
	     * Ex: `this.form.get('cities')`.
	     *
	     * **Get the value**: the `value` property is always synced and available on the
	     * {@link FormArray}. See a full list of available properties in {@link AbstractControl}.
	     *
	     * **Set the value**: You can set an initial value for each child control when instantiating
	     * the {@link FormArray}, or you can set the value programmatically later using the
	     * {@link FormArray}'s {@link AbstractControl.setValue} or {@link AbstractControl.patchValue}
	     * methods.
	     *
	     * **Listen to value**: If you want to listen to changes in the value of the array, you can
	     * subscribe to the {@link FormArray}'s {@link AbstractControl.valueChanges} event.  You can also
	     * listen to its {@link AbstractControl.statusChanges} event to be notified when the validation
	     * status is re-calculated.
	     *
	     * **Add new controls**: You can add new controls to the {@link FormArray} dynamically by
	     * calling its {@link FormArray.push} method.
	     *  Ex: `this.form.get('cities').push(new FormControl());`
	     *
	     * ### Example
	     *
	     * {@example forms/ts/nestedFormArray/nested_form_array_example.ts region='Component'}
	     *
	     * * **npm package**: `@angular/forms`
	     *
	     * * **NgModule**: `ReactiveFormsModule`
	     *
	     * @stable
	     */
	    var FormArrayName = (function (_super) {
	        __extends$12(FormArrayName, _super);
	        function FormArrayName(parent, validators, asyncValidators) {
	            _super.call(this);
	            this._parent = parent;
	            this._validators = validators;
	            this._asyncValidators = asyncValidators;
	        }
	        FormArrayName.prototype.ngOnInit = function () {
	            this._checkParentType();
	            this.formDirective.addFormArray(this);
	        };
	        FormArrayName.prototype.ngOnDestroy = function () {
	            if (this.formDirective) {
	                this.formDirective.removeFormArray(this);
	            }
	        };
	        Object.defineProperty(FormArrayName.prototype, "control", {
	            get: function () { return this.formDirective.getFormArray(this); },
	            enumerable: true,
	            configurable: true
	        });
	        Object.defineProperty(FormArrayName.prototype, "formDirective", {
	            get: function () {
	                return this._parent ? this._parent.formDirective : null;
	            },
	            enumerable: true,
	            configurable: true
	        });
	        Object.defineProperty(FormArrayName.prototype, "path", {
	            get: function () { return controlPath(this.name, this._parent); },
	            enumerable: true,
	            configurable: true
	        });
	        Object.defineProperty(FormArrayName.prototype, "validator", {
	            get: function () { return composeValidators(this._validators); },
	            enumerable: true,
	            configurable: true
	        });
	        Object.defineProperty(FormArrayName.prototype, "asyncValidator", {
	            get: function () { return composeAsyncValidators(this._asyncValidators); },
	            enumerable: true,
	            configurable: true
	        });
	        FormArrayName.prototype._checkParentType = function () {
	            if (_hasInvalidParent(this._parent)) {
	                ReactiveErrors.arrayParentException();
	            }
	        };
	        FormArrayName.decorators = [
	            { type: _angular_core.Directive, args: [{ selector: '[formArrayName]', providers: [formArrayNameProvider] },] },
	        ];
	        /** @nocollapse */
	        FormArrayName.ctorParameters = [
	            { type: ControlContainer, decorators: [{ type: _angular_core.Optional }, { type: _angular_core.Host }, { type: _angular_core.SkipSelf },] },
	            { type: Array, decorators: [{ type: _angular_core.Optional }, { type: _angular_core.Self }, { type: _angular_core.Inject, args: [NG_VALIDATORS,] },] },
	            { type: Array, decorators: [{ type: _angular_core.Optional }, { type: _angular_core.Self }, { type: _angular_core.Inject, args: [NG_ASYNC_VALIDATORS,] },] },
	        ];
	        FormArrayName.propDecorators = {
	            'name': [{ type: _angular_core.Input, args: ['formArrayName',] },],
	        };
	        return FormArrayName;
	    }(ControlContainer));
	    function _hasInvalidParent(parent) {
	        return !(parent instanceof FormGroupName) && !(parent instanceof FormGroupDirective) &&
	            !(parent instanceof FormArrayName);
	    }
	
	    /**
	     * @license
	     * Copyright Google Inc. All Rights Reserved.
	     *
	     * Use of this source code is governed by an MIT-style license that can be
	     * found in the LICENSE file at https://angular.io/license
	     */
	    var __extends$10 = (this && this.__extends) || function (d, b) {
	        for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	        function __() { this.constructor = d; }
	        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	    };
	    var controlNameBinding = {
	        provide: NgControl,
	        useExisting: _angular_core.forwardRef(function () { return FormControlName; })
	    };
	    /**
	     * @whatItDoes  Syncs a {@link FormControl} in an existing {@link FormGroup} to a form control
	     * element by name.
	     *
	     * In other words, this directive ensures that any values written to the {@link FormControl}
	     * instance programmatically will be written to the DOM element (model -> view). Conversely,
	     * any values written to the DOM element through user input will be reflected in the
	     * {@link FormControl} instance (view -> model).
	     *
	     * @howToUse
	     *
	     * This directive is designed to be used with a parent {@link FormGroupDirective} (selector:
	     * `[formGroup]`).
	     *
	     * It accepts the string name of the {@link FormControl} instance you want to
	     * link, and will look for a {@link FormControl} registered with that name in the
	     * closest {@link FormGroup} or {@link FormArray} above it.
	     *
	     * **Access the control**: You can access the {@link FormControl} associated with
	     * this directive by using the {@link AbstractControl.get} method.
	     * Ex: `this.form.get('first');`
	     *
	     * **Get value**: the `value` property is always synced and available on the {@link FormControl}.
	     * See a full list of available properties in {@link AbstractControl}.
	     *
	     *  **Set value**: You can set an initial value for the control when instantiating the
	     *  {@link FormControl}, or you can set it programmatically later using
	     *  {@link AbstractControl.setValue} or {@link AbstractControl.patchValue}.
	     *
	     * **Listen to value**: If you want to listen to changes in the value of the control, you can
	     * subscribe to the {@link AbstractControl.valueChanges} event.  You can also listen to
	     * {@link AbstractControl.statusChanges} to be notified when the validation status is
	     * re-calculated.
	     *
	     * ### Example
	     *
	     * In this example, we create form controls for first name and last name.
	     *
	     * {@example forms/ts/simpleFormGroup/simple_form_group_example.ts region='Component'}
	     *
	     * To see `formControlName` examples with different form control types, see:
	     *
	     * * Radio buttons: {@link RadioControlValueAccessor}
	     * * Selects: {@link SelectControlValueAccessor}
	     *
	     * **npm package**: `@angular/forms`
	     *
	     * **NgModule**: {@link ReactiveFormsModule}
	     *
	     *  @stable
	     */
	    var FormControlName = (function (_super) {
	        __extends$10(FormControlName, _super);
	        function FormControlName(parent, validators, asyncValidators, valueAccessors) {
	            _super.call(this);
	            this._added = false;
	            this.update = new EventEmitter();
	            this._parent = parent;
	            this._rawValidators = validators || [];
	            this._rawAsyncValidators = asyncValidators || [];
	            this.valueAccessor = selectValueAccessor(this, valueAccessors);
	        }
	        Object.defineProperty(FormControlName.prototype, "isDisabled", {
	            set: function (isDisabled) { ReactiveErrors.disabledAttrWarning(); },
	            enumerable: true,
	            configurable: true
	        });
	        FormControlName.prototype.ngOnChanges = function (changes) {
	            if (!this._added)
	                this._setUpControl();
	            if (isPropertyUpdated(changes, this.viewModel)) {
	                this.viewModel = this.model;
	                this.formDirective.updateModel(this, this.model);
	            }
	        };
	        FormControlName.prototype.ngOnDestroy = function () {
	            if (this.formDirective) {
	                this.formDirective.removeControl(this);
	            }
	        };
	        FormControlName.prototype.viewToModelUpdate = function (newValue) {
	            this.viewModel = newValue;
	            this.update.emit(newValue);
	        };
	        Object.defineProperty(FormControlName.prototype, "path", {
	            get: function () { return controlPath(this.name, this._parent); },
	            enumerable: true,
	            configurable: true
	        });
	        Object.defineProperty(FormControlName.prototype, "formDirective", {
	            get: function () { return this._parent ? this._parent.formDirective : null; },
	            enumerable: true,
	            configurable: true
	        });
	        Object.defineProperty(FormControlName.prototype, "validator", {
	            get: function () { return composeValidators(this._rawValidators); },
	            enumerable: true,
	            configurable: true
	        });
	        Object.defineProperty(FormControlName.prototype, "asyncValidator", {
	            get: function () {
	                return composeAsyncValidators(this._rawAsyncValidators);
	            },
	            enumerable: true,
	            configurable: true
	        });
	        Object.defineProperty(FormControlName.prototype, "control", {
	            get: function () { return this._control; },
	            enumerable: true,
	            configurable: true
	        });
	        FormControlName.prototype._checkParentType = function () {
	            if (!(this._parent instanceof FormGroupName) &&
	                this._parent instanceof AbstractFormGroupDirective) {
	                ReactiveErrors.ngModelGroupException();
	            }
	            else if (!(this._parent instanceof FormGroupName) && !(this._parent instanceof FormGroupDirective) &&
	                !(this._parent instanceof FormArrayName)) {
	                ReactiveErrors.controlParentException();
	            }
	        };
	        FormControlName.prototype._setUpControl = function () {
	            this._checkParentType();
	            this._control = this.formDirective.addControl(this);
	            if (this.control.disabled && this.valueAccessor.setDisabledState) {
	                this.valueAccessor.setDisabledState(true);
	            }
	            this._added = true;
	        };
	        FormControlName.decorators = [
	            { type: _angular_core.Directive, args: [{ selector: '[formControlName]', providers: [controlNameBinding] },] },
	        ];
	        /** @nocollapse */
	        FormControlName.ctorParameters = [
	            { type: ControlContainer, decorators: [{ type: _angular_core.Optional }, { type: _angular_core.Host }, { type: _angular_core.SkipSelf },] },
	            { type: Array, decorators: [{ type: _angular_core.Optional }, { type: _angular_core.Self }, { type: _angular_core.Inject, args: [NG_VALIDATORS,] },] },
	            { type: Array, decorators: [{ type: _angular_core.Optional }, { type: _angular_core.Self }, { type: _angular_core.Inject, args: [NG_ASYNC_VALIDATORS,] },] },
	            { type: Array, decorators: [{ type: _angular_core.Optional }, { type: _angular_core.Self }, { type: _angular_core.Inject, args: [NG_VALUE_ACCESSOR,] },] },
	        ];
	        FormControlName.propDecorators = {
	            'name': [{ type: _angular_core.Input, args: ['formControlName',] },],
	            'model': [{ type: _angular_core.Input, args: ['ngModel',] },],
	            'update': [{ type: _angular_core.Output, args: ['ngModelChange',] },],
	            'isDisabled': [{ type: _angular_core.Input, args: ['disabled',] },],
	        };
	        return FormControlName;
	    }(NgControl));
	
	    var REQUIRED_VALIDATOR = {
	        provide: NG_VALIDATORS,
	        useExisting: _angular_core.forwardRef(function () { return RequiredValidator; }),
	        multi: true
	    };
	    /**
	     * A Directive that adds the `required` validator to any controls marked with the
	     * `required` attribute, via the {@link NG_VALIDATORS} binding.
	     *
	     * ### Example
	     *
	     * ```
	     * <input name="fullName" ngModel required>
	     * ```
	     *
	     * @stable
	     */
	    var RequiredValidator = (function () {
	        function RequiredValidator() {
	        }
	        Object.defineProperty(RequiredValidator.prototype, "required", {
	            get: function () { return this._required; },
	            set: function (value) {
	                this._required = isPresent(value) && "" + value !== 'false';
	                if (this._onChange)
	                    this._onChange();
	            },
	            enumerable: true,
	            configurable: true
	        });
	        RequiredValidator.prototype.validate = function (c) {
	            return this.required ? Validators.required(c) : null;
	        };
	        RequiredValidator.prototype.registerOnValidatorChange = function (fn) { this._onChange = fn; };
	        RequiredValidator.decorators = [
	            { type: _angular_core.Directive, args: [{
	                        selector: '[required][formControlName],[required][formControl],[required][ngModel]',
	                        providers: [REQUIRED_VALIDATOR],
	                        host: { '[attr.required]': 'required? "" : null' }
	                    },] },
	        ];
	        /** @nocollapse */
	        RequiredValidator.ctorParameters = [];
	        RequiredValidator.propDecorators = {
	            'required': [{ type: _angular_core.Input },],
	        };
	        return RequiredValidator;
	    }());
	    /**
	     * Provider which adds {@link MinLengthValidator} to {@link NG_VALIDATORS}.
	     *
	     * ## Example:
	     *
	     * {@example common/forms/ts/validators/validators.ts region='min'}
	     */
	    var MIN_LENGTH_VALIDATOR = {
	        provide: NG_VALIDATORS,
	        useExisting: _angular_core.forwardRef(function () { return MinLengthValidator; }),
	        multi: true
	    };
	    /**
	     * A directive which installs the {@link MinLengthValidator} for any `formControlName`,
	     * `formControl`, or control with `ngModel` that also has a `minlength` attribute.
	     *
	     * @stable
	     */
	    var MinLengthValidator = (function () {
	        function MinLengthValidator() {
	        }
	        MinLengthValidator.prototype._createValidator = function () {
	            this._validator = Validators.minLength(parseInt(this.minlength, 10));
	        };
	        MinLengthValidator.prototype.ngOnChanges = function (changes) {
	            if (changes['minlength']) {
	                this._createValidator();
	                if (this._onChange)
	                    this._onChange();
	            }
	        };
	        MinLengthValidator.prototype.validate = function (c) {
	            return isPresent(this.minlength) ? this._validator(c) : null;
	        };
	        MinLengthValidator.prototype.registerOnValidatorChange = function (fn) { this._onChange = fn; };
	        MinLengthValidator.decorators = [
	            { type: _angular_core.Directive, args: [{
	                        selector: '[minlength][formControlName],[minlength][formControl],[minlength][ngModel]',
	                        providers: [MIN_LENGTH_VALIDATOR],
	                        host: { '[attr.minlength]': 'minlength? minlength : null' }
	                    },] },
	        ];
	        /** @nocollapse */
	        MinLengthValidator.ctorParameters = [];
	        MinLengthValidator.propDecorators = {
	            'minlength': [{ type: _angular_core.Input },],
	        };
	        return MinLengthValidator;
	    }());
	    /**
	     * Provider which adds {@link MaxLengthValidator} to {@link NG_VALIDATORS}.
	     *
	     * ## Example:
	     *
	     * {@example common/forms/ts/validators/validators.ts region='max'}
	     */
	    var MAX_LENGTH_VALIDATOR = {
	        provide: NG_VALIDATORS,
	        useExisting: _angular_core.forwardRef(function () { return MaxLengthValidator; }),
	        multi: true
	    };
	    /**
	     * A directive which installs the {@link MaxLengthValidator} for any `formControlName,
	     * `formControl`,
	     * or control with `ngModel` that also has a `maxlength` attribute.
	     *
	     * @stable
	     */
	    var MaxLengthValidator = (function () {
	        function MaxLengthValidator() {
	        }
	        MaxLengthValidator.prototype._createValidator = function () {
	            this._validator = Validators.maxLength(parseInt(this.maxlength, 10));
	        };
	        MaxLengthValidator.prototype.ngOnChanges = function (changes) {
	            if (changes['maxlength']) {
	                this._createValidator();
	                if (this._onChange)
	                    this._onChange();
	            }
	        };
	        MaxLengthValidator.prototype.validate = function (c) {
	            return isPresent(this.maxlength) ? this._validator(c) : null;
	        };
	        MaxLengthValidator.prototype.registerOnValidatorChange = function (fn) { this._onChange = fn; };
	        MaxLengthValidator.decorators = [
	            { type: _angular_core.Directive, args: [{
	                        selector: '[maxlength][formControlName],[maxlength][formControl],[maxlength][ngModel]',
	                        providers: [MAX_LENGTH_VALIDATOR],
	                        host: { '[attr.maxlength]': 'maxlength? maxlength : null' }
	                    },] },
	        ];
	        /** @nocollapse */
	        MaxLengthValidator.ctorParameters = [];
	        MaxLengthValidator.propDecorators = {
	            'maxlength': [{ type: _angular_core.Input },],
	        };
	        return MaxLengthValidator;
	    }());
	    var PATTERN_VALIDATOR = {
	        provide: NG_VALIDATORS,
	        useExisting: _angular_core.forwardRef(function () { return PatternValidator; }),
	        multi: true
	    };
	    /**
	     * A Directive that adds the `pattern` validator to any controls marked with the
	     * `pattern` attribute, via the {@link NG_VALIDATORS} binding. Uses attribute value
	     * as the regex to validate Control value against.  Follows pattern attribute
	     * semantics; i.e. regex must match entire Control value.
	     *
	     * ### Example
	     *
	     * ```
	     * <input [name]="fullName" pattern="[a-zA-Z ]*" ngModel>
	     * ```
	     * @stable
	     */
	    var PatternValidator = (function () {
	        function PatternValidator() {
	        }
	        PatternValidator.prototype._createValidator = function () { this._validator = Validators.pattern(this.pattern); };
	        PatternValidator.prototype.ngOnChanges = function (changes) {
	            if (changes['pattern']) {
	                this._createValidator();
	                if (this._onChange)
	                    this._onChange();
	            }
	        };
	        PatternValidator.prototype.validate = function (c) {
	            return isPresent(this.pattern) ? this._validator(c) : null;
	        };
	        PatternValidator.prototype.registerOnValidatorChange = function (fn) { this._onChange = fn; };
	        PatternValidator.decorators = [
	            { type: _angular_core.Directive, args: [{
	                        selector: '[pattern][formControlName],[pattern][formControl],[pattern][ngModel]',
	                        providers: [PATTERN_VALIDATOR],
	                        host: { '[attr.pattern]': 'pattern? pattern : null' }
	                    },] },
	        ];
	        /** @nocollapse */
	        PatternValidator.ctorParameters = [];
	        PatternValidator.propDecorators = {
	            'pattern': [{ type: _angular_core.Input },],
	        };
	        return PatternValidator;
	    }());
	
	    /**
	     * @whatItDoes Creates an {@link AbstractControl} from a user-specified configuration.
	     *
	     * It is essentially syntactic sugar that shortens the `new FormGroup()`,
	     * `new FormControl()`, and `new FormArray()` boilerplate that can build up in larger
	     * forms.
	     *
	     * @howToUse
	     *
	     * To use, inject `FormBuilder` into your component class. You can then call its methods
	     * directly.
	     *
	     * {@example forms/ts/formBuilder/form_builder_example.ts region='Component'}
	     *
	     *  * **npm package**: `@angular/forms`
	     *
	     *  * **NgModule**: {@link ReactiveFormsModule}
	     *
	     * @stable
	     */
	    var FormBuilder = (function () {
	        function FormBuilder() {
	        }
	        /**
	         * Construct a new {@link FormGroup} with the given map of configuration.
	         * Valid keys for the `extra` parameter map are `validator` and `asyncValidator`.
	         *
	         * See the {@link FormGroup} constructor for more details.
	         */
	        FormBuilder.prototype.group = function (controlsConfig, extra) {
	            if (extra === void 0) { extra = null; }
	            var controls = this._reduceControls(controlsConfig);
	            var validator = isPresent(extra) ? extra['validator'] : null;
	            var asyncValidator = isPresent(extra) ? extra['asyncValidator'] : null;
	            return new FormGroup(controls, validator, asyncValidator);
	        };
	        /**
	         * Construct a new {@link FormControl} with the given `formState`,`validator`, and
	         * `asyncValidator`.
	         *
	         * `formState` can either be a standalone value for the form control or an object
	         * that contains both a value and a disabled status.
	         *
	         */
	        FormBuilder.prototype.control = function (formState, validator, asyncValidator) {
	            if (validator === void 0) { validator = null; }
	            if (asyncValidator === void 0) { asyncValidator = null; }
	            return new FormControl(formState, validator, asyncValidator);
	        };
	        /**
	         * Construct a {@link FormArray} from the given `controlsConfig` array of
	         * configuration, with the given optional `validator` and `asyncValidator`.
	         */
	        FormBuilder.prototype.array = function (controlsConfig, validator, asyncValidator) {
	            var _this = this;
	            if (validator === void 0) { validator = null; }
	            if (asyncValidator === void 0) { asyncValidator = null; }
	            var controls = controlsConfig.map(function (c) { return _this._createControl(c); });
	            return new FormArray(controls, validator, asyncValidator);
	        };
	        /** @internal */
	        FormBuilder.prototype._reduceControls = function (controlsConfig) {
	            var _this = this;
	            var controls = {};
	            Object.keys(controlsConfig).forEach(function (controlName) {
	                controls[controlName] = _this._createControl(controlsConfig[controlName]);
	            });
	            return controls;
	        };
	        /** @internal */
	        FormBuilder.prototype._createControl = function (controlConfig) {
	            if (controlConfig instanceof FormControl || controlConfig instanceof FormGroup ||
	                controlConfig instanceof FormArray) {
	                return controlConfig;
	            }
	            else if (Array.isArray(controlConfig)) {
	                var value = controlConfig[0];
	                var validator = controlConfig.length > 1 ? controlConfig[1] : null;
	                var asyncValidator = controlConfig.length > 2 ? controlConfig[2] : null;
	                return this.control(value, validator, asyncValidator);
	            }
	            else {
	                return this.control(controlConfig);
	            }
	        };
	        FormBuilder.decorators = [
	            { type: _angular_core.Injectable },
	        ];
	        /** @nocollapse */
	        FormBuilder.ctorParameters = [];
	        return FormBuilder;
	    }());
	
	    var SHARED_FORM_DIRECTIVES = [
	        NgSelectOption, NgSelectMultipleOption, DefaultValueAccessor, NumberValueAccessor,
	        CheckboxControlValueAccessor, SelectControlValueAccessor, SelectMultipleControlValueAccessor,
	        RadioControlValueAccessor, NgControlStatus, NgControlStatusGroup, RequiredValidator,
	        MinLengthValidator, MaxLengthValidator, PatternValidator
	    ];
	    var TEMPLATE_DRIVEN_DIRECTIVES = [NgModel, NgModelGroup, NgForm];
	    var REACTIVE_DRIVEN_DIRECTIVES = [FormControlDirective, FormGroupDirective, FormControlName, FormGroupName, FormArrayName];
	    /**
	     * Internal module used for sharing directives between FormsModule and ReactiveFormsModule
	     */
	    var InternalFormsSharedModule = (function () {
	        function InternalFormsSharedModule() {
	        }
	        InternalFormsSharedModule.decorators = [
	            { type: _angular_core.NgModule, args: [{ declarations: SHARED_FORM_DIRECTIVES, exports: SHARED_FORM_DIRECTIVES },] },
	        ];
	        /** @nocollapse */
	        InternalFormsSharedModule.ctorParameters = [];
	        return InternalFormsSharedModule;
	    }());
	
	    /**
	     * The ng module for forms.
	     * @stable
	     */
	    var FormsModule = (function () {
	        function FormsModule() {
	        }
	        FormsModule.decorators = [
	            { type: _angular_core.NgModule, args: [{
	                        declarations: TEMPLATE_DRIVEN_DIRECTIVES,
	                        providers: [RadioControlRegistry],
	                        exports: [InternalFormsSharedModule, TEMPLATE_DRIVEN_DIRECTIVES]
	                    },] },
	        ];
	        /** @nocollapse */
	        FormsModule.ctorParameters = [];
	        return FormsModule;
	    }());
	    /**
	     * The ng module for reactive forms.
	     * @stable
	     */
	    var ReactiveFormsModule = (function () {
	        function ReactiveFormsModule() {
	        }
	        ReactiveFormsModule.decorators = [
	            { type: _angular_core.NgModule, args: [{
	                        declarations: [REACTIVE_DRIVEN_DIRECTIVES],
	                        providers: [FormBuilder, RadioControlRegistry],
	                        exports: [InternalFormsSharedModule, REACTIVE_DRIVEN_DIRECTIVES]
	                    },] },
	        ];
	        /** @nocollapse */
	        ReactiveFormsModule.ctorParameters = [];
	        return ReactiveFormsModule;
	    }());
	
	    exports.AbstractControlDirective = AbstractControlDirective;
	    exports.AbstractFormGroupDirective = AbstractFormGroupDirective;
	    exports.CheckboxControlValueAccessor = CheckboxControlValueAccessor;
	    exports.ControlContainer = ControlContainer;
	    exports.NG_VALUE_ACCESSOR = NG_VALUE_ACCESSOR;
	    exports.DefaultValueAccessor = DefaultValueAccessor;
	    exports.NgControl = NgControl;
	    exports.NgControlStatus = NgControlStatus;
	    exports.NgControlStatusGroup = NgControlStatusGroup;
	    exports.NgForm = NgForm;
	    exports.NgModel = NgModel;
	    exports.NgModelGroup = NgModelGroup;
	    exports.RadioControlValueAccessor = RadioControlValueAccessor;
	    exports.FormControlDirective = FormControlDirective;
	    exports.FormControlName = FormControlName;
	    exports.FormGroupDirective = FormGroupDirective;
	    exports.FormArrayName = FormArrayName;
	    exports.FormGroupName = FormGroupName;
	    exports.NgSelectOption = NgSelectOption;
	    exports.SelectControlValueAccessor = SelectControlValueAccessor;
	    exports.SelectMultipleControlValueAccessor = SelectMultipleControlValueAccessor;
	    exports.MaxLengthValidator = MaxLengthValidator;
	    exports.MinLengthValidator = MinLengthValidator;
	    exports.PatternValidator = PatternValidator;
	    exports.RequiredValidator = RequiredValidator;
	    exports.FormBuilder = FormBuilder;
	    exports.AbstractControl = AbstractControl;
	    exports.FormArray = FormArray;
	    exports.FormControl = FormControl;
	    exports.FormGroup = FormGroup;
	    exports.NG_ASYNC_VALIDATORS = NG_ASYNC_VALIDATORS;
	    exports.NG_VALIDATORS = NG_VALIDATORS;
	    exports.Validators = Validators;
	    exports.FormsModule = FormsModule;
	    exports.ReactiveFormsModule = ReactiveFormsModule;
	
	}));


/***/ },
/* 31 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var root_1 = __webpack_require__(6);
	/**
	 * @param PromiseCtor
	 * @return {Promise<T>}
	 * @method toPromise
	 * @owner Observable
	 */
	function toPromise(PromiseCtor) {
	    var _this = this;
	    if (!PromiseCtor) {
	        if (root_1.root.Rx && root_1.root.Rx.config && root_1.root.Rx.config.Promise) {
	            PromiseCtor = root_1.root.Rx.config.Promise;
	        }
	        else if (root_1.root.Promise) {
	            PromiseCtor = root_1.root.Promise;
	        }
	    }
	    if (!PromiseCtor) {
	        throw new Error('no Promise impl found');
	    }
	    return new PromiseCtor(function (resolve, reject) {
	        var value;
	        _this.subscribe(function (x) { return value = x; }, function (err) { return reject(err); }, function () { return resolve(value); });
	    });
	}
	exports.toPromise = toPromise;
	//# sourceMappingURL=toPromise.js.map

/***/ },
/* 32 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var PromiseObservable_1 = __webpack_require__(33);
	exports.fromPromise = PromiseObservable_1.PromiseObservable.create;
	//# sourceMappingURL=fromPromise.js.map

/***/ },
/* 33 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __extends = (this && this.__extends) || function (d, b) {
	    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	    function __() { this.constructor = d; }
	    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	};
	var root_1 = __webpack_require__(6);
	var Observable_1 = __webpack_require__(5);
	/**
	 * We need this JSDoc comment for affecting ESDoc.
	 * @extends {Ignored}
	 * @hide true
	 */
	var PromiseObservable = (function (_super) {
	    __extends(PromiseObservable, _super);
	    function PromiseObservable(promise, scheduler) {
	        _super.call(this);
	        this.promise = promise;
	        this.scheduler = scheduler;
	    }
	    /**
	     * Converts a Promise to an Observable.
	     *
	     * <span class="informal">Returns an Observable that just emits the Promise's
	     * resolved value, then completes.</span>
	     *
	     * Converts an ES2015 Promise or a Promises/A+ spec compliant Promise to an
	     * Observable. If the Promise resolves with a value, the output Observable
	     * emits that resolved value as a `next`, and then completes. If the Promise
	     * is rejected, then the output Observable emits the corresponding Error.
	     *
	     * @example <caption>Convert the Promise returned by Fetch to an Observable</caption>
	     * var result = Rx.Observable.fromPromise(fetch('http://myserver.com/'));
	     * result.subscribe(x => console.log(x), e => console.error(e));
	     *
	     * @see {@link bindCallback}
	     * @see {@link from}
	     *
	     * @param {Promise<T>} promise The promise to be converted.
	     * @param {Scheduler} [scheduler] An optional Scheduler to use for scheduling
	     * the delivery of the resolved value (or the rejection).
	     * @return {Observable<T>} An Observable which wraps the Promise.
	     * @static true
	     * @name fromPromise
	     * @owner Observable
	     */
	    PromiseObservable.create = function (promise, scheduler) {
	        return new PromiseObservable(promise, scheduler);
	    };
	    PromiseObservable.prototype._subscribe = function (subscriber) {
	        var _this = this;
	        var promise = this.promise;
	        var scheduler = this.scheduler;
	        if (scheduler == null) {
	            if (this._isScalar) {
	                if (!subscriber.closed) {
	                    subscriber.next(this.value);
	                    subscriber.complete();
	                }
	            }
	            else {
	                promise.then(function (value) {
	                    _this.value = value;
	                    _this._isScalar = true;
	                    if (!subscriber.closed) {
	                        subscriber.next(value);
	                        subscriber.complete();
	                    }
	                }, function (err) {
	                    if (!subscriber.closed) {
	                        subscriber.error(err);
	                    }
	                })
	                    .then(null, function (err) {
	                    // escape the promise trap, throw unhandled errors
	                    root_1.root.setTimeout(function () { throw err; });
	                });
	            }
	        }
	        else {
	            if (this._isScalar) {
	                if (!subscriber.closed) {
	                    return scheduler.schedule(dispatchNext, 0, { value: this.value, subscriber: subscriber });
	                }
	            }
	            else {
	                promise.then(function (value) {
	                    _this.value = value;
	                    _this._isScalar = true;
	                    if (!subscriber.closed) {
	                        subscriber.add(scheduler.schedule(dispatchNext, 0, { value: value, subscriber: subscriber }));
	                    }
	                }, function (err) {
	                    if (!subscriber.closed) {
	                        subscriber.add(scheduler.schedule(dispatchError, 0, { err: err, subscriber: subscriber }));
	                    }
	                })
	                    .then(null, function (err) {
	                    // escape the promise trap, throw unhandled errors
	                    root_1.root.setTimeout(function () { throw err; });
	                });
	            }
	        }
	    };
	    return PromiseObservable;
	}(Observable_1.Observable));
	exports.PromiseObservable = PromiseObservable;
	function dispatchNext(arg) {
	    var value = arg.value, subscriber = arg.subscriber;
	    if (!subscriber.closed) {
	        subscriber.next(value);
	        subscriber.complete();
	    }
	}
	function dispatchError(arg) {
	    var err = arg.err, subscriber = arg.subscriber;
	    if (!subscriber.closed) {
	        subscriber.error(err);
	    }
	}
	//# sourceMappingURL=PromiseObservable.js.map

/***/ },
/* 34 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
	    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
	    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
	    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
	    return c > 3 && r && Object.defineProperty(target, key, r), r;
	};
	var core_1 = __webpack_require__(3);
	var common_1 = __webpack_require__(22);
	var forms_1 = __webpack_require__(30);
	var expander_module_1 = __webpack_require__(35);
	var search_fields_component_1 = __webpack_require__(37);
	var search_order_by_component_1 = __webpack_require__(38);
	var search_criteria_component_1 = __webpack_require__(39);
	var search_component_1 = __webpack_require__(40);
	var SearchModule = (function () {
	    function SearchModule() {
	    }
	    return SearchModule;
	}());
	SearchModule = __decorate([
	    core_1.NgModule({
	        imports: [common_1.CommonModule, forms_1.FormsModule, expander_module_1.ExpanderModule],
	        declarations: [
	            search_component_1.SearchComponent,
	            search_criteria_component_1.SearchCriteriaComponent,
	            search_order_by_component_1.SearchOrderByComponent,
	            search_fields_component_1.SearchFieldsComponent
	        ],
	        exports: [search_component_1.SearchComponent]
	    })
	], SearchModule);
	exports.SearchModule = SearchModule;


/***/ },
/* 35 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
	    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
	    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
	    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
	    return c > 3 && r && Object.defineProperty(target, key, r), r;
	};
	var core_1 = __webpack_require__(3);
	var common_1 = __webpack_require__(22);
	var expander_component_1 = __webpack_require__(36);
	var ExpanderModule = (function () {
	    function ExpanderModule() {
	    }
	    return ExpanderModule;
	}());
	ExpanderModule = __decorate([
	    core_1.NgModule({
	        imports: [common_1.CommonModule],
	        declarations: [expander_component_1.ExpanderComponent],
	        exports: [expander_component_1.ExpanderComponent]
	    })
	], ExpanderModule);
	exports.ExpanderModule = ExpanderModule;


/***/ },
/* 36 */
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
	// Component
	var ExpanderComponent = (function () {
	    function ExpanderComponent() {
	        this.isExpanded = false;
	        this.hasIcon = true;
	        this.customClass = ''; // customClass instead of class because is a reserved word
	        this.onChange = new core_1.EventEmitter();
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
	    return ExpanderComponent;
	}());
	__decorate([
	    core_1.Input(),
	    __metadata("design:type", Boolean)
	], ExpanderComponent.prototype, "isExpanded", void 0);
	__decorate([
	    core_1.Input(),
	    __metadata("design:type", String)
	], ExpanderComponent.prototype, "label", void 0);
	__decorate([
	    core_1.Input(),
	    __metadata("design:type", Boolean)
	], ExpanderComponent.prototype, "hasIcon", void 0);
	__decorate([
	    core_1.Input(),
	    __metadata("design:type", String)
	], ExpanderComponent.prototype, "customClass", void 0);
	__decorate([
	    core_1.Output(),
	    __metadata("design:type", Object)
	], ExpanderComponent.prototype, "onChange", void 0);
	ExpanderComponent = __decorate([
	    core_1.Component({
	        selector: 'js_expander',
	        template: "\n    <a [ngClass]=\"['no-user-select', 'expander', customClass]\"\n       (click)=\"toggleAction($event)\">\n        <i *ngIf=\"hasIcon\" [ngClass]=\"['fa', (isExpanded ? 'fa-angle-down' : 'fa-angle-right')]\"></i>\n        <span [innerHTML]=\"label\"></span></a>\n    "
	    })
	], ExpanderComponent);
	exports.ExpanderComponent = ExpanderComponent;


/***/ },
/* 37 */
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
	var core_1 = __webpack_require__(3);
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
	    return SearchFieldsComponent;
	}());
	__decorate([
	    core_1.Input(),
	    __metadata("design:type", Object)
	], SearchFieldsComponent.prototype, "injector", void 0);
	SearchFieldsComponent = __decorate([
	    core_1.Component({
	        selector: 'js_searchFields',
	        template: "\n    <js_expander [label]=\"'Fields'\" [hasIcon]=\"false\" [customClass]=\"'action'\" (onChange)=\"toggleIsExpanded($event, 'fields')\"></js_expander>\n    <div [hidden]=\"!_isExpanded\" class=\"col-xs-12 col-sm-12 white-dropdown search-fields\">\n        <select multiple size=\"6\" [(ngModel)]=\"_search['fields']\" class=\"form-control\">\n            <template ngFor let-field [ngForOf]=\"_fields\">\n                <option *ngIf=\"!_helperService.inArray(_fieldsMetadata[field]['type'], _deniedTypes)\"\n                        value=\"{{field}}\">{{_fieldsMetadata[field]['label']}}</option>\n            </template>\n        </select>\n    </div>\n    ",
	        host: {
	            '(document:click)': 'onDocumentClick($event)',
	        }
	    }),
	    __param(1, core_1.Inject('HelperService')),
	    __param(2, core_1.Optional()), __param(2, core_1.Inject('DataService')),
	    __metadata("design:paramtypes", [core_1.ElementRef, Object, Object])
	], SearchFieldsComponent);
	exports.SearchFieldsComponent = SearchFieldsComponent;


/***/ },
/* 38 */
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
	var core_1 = __webpack_require__(3);
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
	    return SearchOrderByComponent;
	}());
	__decorate([
	    core_1.Input(),
	    __metadata("design:type", Object)
	], SearchOrderByComponent.prototype, "injector", void 0);
	SearchOrderByComponent = __decorate([
	    core_1.Component({
	        selector: 'js_searchOrderBy',
	        template: "\n    <js_expander [label]=\"'Order'\" [hasIcon]=\"false\" [customClass]=\"'action'\" (onChange)=\"toggleIsExpanded($event, 'fields')\"></js_expander>\n    <div [hidden]=\"!_isExpanded\" class=\"col-xs-12 col-sm-12 white-dropdown search-order-by\">\n        <template ngFor let-orderBy [ngForOf]=\"_orderByArray\" let-i=\"index\">\n            <div class=\"col-sm-6 controller\">\n                <div class=\"select\">\n                    <select [(ngModel)]=\"orderBy['field']\" class=\"form-control\">\n                        <template ngFor let-field [ngForOf]=\"_fields\">\n                            <option *ngIf=\"!_helperService.inArray(_fieldsMetadata[field]['type'], _deniedTypes) && !_fieldsMetadata[field]['isObject']\"\n                                    value=\"{{field}}\">{{_fieldsMetadata[field]['label']}}</option>\n                        </template>\n                    </select>\n                    <select [(ngModel)]=\"orderBy['value']\" class=\"form-control\">\n                        <option *ngFor=\"let value of [{key: 'ASC', label: 'Asc'}, {key: 'DESC', label: 'Desc'}]\"\n                                value=\"{{value['key']}}\">{{value['label']}}</option>\n                    </select>\n                </div>\n                <div class=\"actions\">\n                    <a *ngIf=\"_orderByArray.length > 1\" class=\"fa fa-trash-o\" (click)=\"del($event, i)\"></a>\n                    <a *ngIf=\"(i+1) == _orderByArray.length\" class=\"fa fa-plus\" (click)=\"add($event)\"></a>\n                </div>\n            </div>\n        </template>\n    </div>\n    ",
	        host: {
	            '(document:click)': 'onDocumentClick($event)',
	        }
	    }),
	    __param(1, core_1.Inject('HelperService')),
	    __param(2, core_1.Optional()), __param(2, core_1.Inject('DataService')),
	    __metadata("design:paramtypes", [core_1.ElementRef, Object, Object])
	], SearchOrderByComponent);
	exports.SearchOrderByComponent = SearchOrderByComponent;


/***/ },
/* 39 */
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
	var core_1 = __webpack_require__(3);
	/**
	 * Class provider for search criteria expressions and default values
	 */
	var SearchCriteriaMap = (function () {
	    function SearchCriteriaMap() {
	        // Expressions mapping.
	        this._exprMap = [
	            { key: 'lrlike', label: '?' },
	            { key: 'eq', label: '=' },
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
	exports.SearchCriteriaMap = SearchCriteriaMap;
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
	    return SearchCriteriaComponent;
	}());
	__decorate([
	    core_1.Input(),
	    __metadata("design:type", Object)
	], SearchCriteriaComponent.prototype, "injector", void 0);
	SearchCriteriaComponent = __decorate([
	    core_1.Component({
	        selector: 'js_searchCriteria',
	        template: "\n    <js_expander [label]=\"'Filter'\" [hasIcon]=\"false\" [customClass]=\"'action'\" (onChange)=\"toggleIsExpanded($event, 'fields')\"></js_expander>\n    <div [hidden]=\"!_isExpanded\" class=\"col-xs-12 col-sm-12 white-dropdown search-criteria\">\n        <template ngFor let-criteria [ngForOf]=\"_criteriaArr\" let-i=\"index\">\n            <div class=\"col-sm-6 controller\">\n                <div class=\"select\">\n                    <select [(ngModel)]=\"criteria['field']\"\n                            (change)=\"onFieldChange($event, criteria)\"\n                            class=\"form-control\">\n                        <template ngFor let-field [ngForOf]=\"_fields\">\n                            <option *ngIf=\"!_helperService.inArray(_fieldsMetadata[field]['type'], _deniedTypes) && !_fieldsMetadata[field]['isObject']\"\n                                    value=\"{{field}}\">{{_fieldsMetadata[field]['label']}}</option>\n                        </template>\n                    </select>\n                    <!-- ng switch should be here -->\n                    <template [ngIf]=\"(_fieldsMetadata[criteria['field']]) && (_fieldsMetadata[criteria['field']]['type'] == 'boolean')\">\n                        <select [(ngModel)]=\"criteria['value']\"\n                                class=\"form-control\">\n                            <option *ngFor=\"let value of [{key: 1, label: 'Yes'}, {key: 0, label: 'No'}]\"\n                                    value=\"{{value['key']}}\">{{value['label']}}</option>\n                        </select>\n                    </template>\n                    <template [ngIf]=\"(!_fieldsMetadata[criteria['field']]) || (_fieldsMetadata[criteria['field']]['type'] != 'boolean')\">\n                        <select [(ngModel)]=\"criteria['expr']\"\n                                class=\"form-control\">\n                            <option *ngFor=\"let expr of _searchCriteriaMap.getExprMap()\"\n                                    value=\"{{expr['key']}}\">{{expr['label']}}</option>\n                        </select>\n                        <input [(ngModel)]=\"criteria['value']\"\n                               class=\"form-control\" type=\"text\">\n                    </template>\n                </div>\n                <div class=\"actions\">\n                    <a *ngIf=\"_criteriaArr.length > 1\" class=\"fa fa-trash-o\" (click)=\"del($event, i)\"></a>\n                    <a *ngIf=\"(i+1) == _criteriaArr.length\" class=\"fa fa-plus\" (click)=\"add($event)\"></a>\n                </div>\n            </div>\n        </template>\n    </div>\n    ",
	        host: {
	            '(document:click)': 'onDocumentClick($event)',
	        }
	    }),
	    __param(1, core_1.Inject('HelperService')),
	    __param(2, core_1.Optional()), __param(2, core_1.Inject('DataService')),
	    __metadata("design:paramtypes", [core_1.ElementRef, Object, Object])
	], SearchCriteriaComponent);
	exports.SearchCriteriaComponent = SearchCriteriaComponent;


/***/ },
/* 40 */
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
	var core_1 = __webpack_require__(3);
	var actions_service_1 = __webpack_require__(41);
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
	            this._actionsService = this.injector.get(actions_service_1.ActionsService);
	        }
	    };
	    return SearchComponent;
	}());
	__decorate([
	    core_1.Input(),
	    __metadata("design:type", Object)
	], SearchComponent.prototype, "injector", void 0);
	SearchComponent = __decorate([
	    core_1.Component({
	        selector: 'js_search',
	        template: "\n    <js_searchCriteria [injector]=\"injector\"></js_searchCriteria>\n    <js_searchOrderBy [injector]=\"injector\"></js_searchOrderBy>\n    <js_searchFields [injector]=\"injector\"></js_searchFields>\n    <a class=\"action -round fa\"\n       [ngClass]=\"[_actionsService.getActionAttr('search', 'icon')]\"\n       (click)=\"searchAction($event)\"></a>\n    "
	    }),
	    __param(0, core_1.Optional()), __param(0, core_1.Inject('DataService')),
	    __param(1, core_1.Optional()),
	    __metadata("design:paramtypes", [Object, actions_service_1.ActionsService])
	], SearchComponent);
	exports.SearchComponent = SearchComponent;


/***/ },
/* 41 */
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
	var core_1 = __webpack_require__(3);
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
	        this._detailActions = ['orderUp', 'orderDown', 'detail', 'thumbnail', 'avatar', 'delete', 'copy', 'edit']; // Default actions for single object
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
	    return ActionsService;
	}());
	ActionsService = __decorate([
	    core_1.Injectable(),
	    __param(0, core_1.Inject('ActionsServiceProvider')),
	    __metadata("design:paramtypes", [Object])
	], ActionsService);
	exports.ActionsService = ActionsService;


/***/ },
/* 42 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
	    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
	    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
	    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
	    return c > 3 && r && Object.defineProperty(target, key, r), r;
	};
	var core_1 = __webpack_require__(3);
	var common_1 = __webpack_require__(22);
	var search_pagination_component_1 = __webpack_require__(43);
	var SearchPaginationModule = (function () {
	    function SearchPaginationModule() {
	    }
	    return SearchPaginationModule;
	}());
	SearchPaginationModule = __decorate([
	    core_1.NgModule({
	        imports: [common_1.CommonModule],
	        declarations: [
	            search_pagination_component_1.SearchPaginationComponent
	        ],
	        exports: [search_pagination_component_1.SearchPaginationComponent]
	    })
	], SearchPaginationModule);
	exports.SearchPaginationModule = SearchPaginationModule;


/***/ },
/* 43 */
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
	var core_1 = __webpack_require__(3);
	// Component
	var SearchPaginationComponent = (function () {
	    function SearchPaginationComponent(_dataService) {
	        this._dataService = _dataService;
	    }
	    /**
	     * Get more objects (pagination)
	     * @param $event
	     */
	    SearchPaginationComponent.prototype.getMoreObjects = function ($event) {
	        $event.preventDefault();
	        this._dataService.getMoreObjects();
	    };
	    return SearchPaginationComponent;
	}());
	SearchPaginationComponent = __decorate([
	    core_1.Component({
	        selector: 'js_searchPagination',
	        template: "\n    <div *ngIf=\"(_dataService.getProviderAttr('objects') || []).length > 0\"\n         class=\"search-pagination no-user-select\">\n        <span>{{(_dataService.getProviderAttr('objects').length)}} Results</span>\n        <a class=\"search-has-more -note\"\n           *ngIf=\"_dataService.getProviderAttr('search')['hasMore']\"\n           (click)=\"getMoreObjects($event)\"\n           href=\"#\"\n           title=\"Load more results...\">...</a>\n    </div>\n    "
	    }),
	    __param(0, core_1.Inject('DataService')),
	    __metadata("design:paramtypes", [Object])
	], SearchPaginationComponent);
	exports.SearchPaginationComponent = SearchPaginationComponent;


/***/ },
/* 44 */
/***/ function(module, exports) {

	"use strict";
	/**
	 * Helper with common functions
	 */
	var Helper = (function () {
	    function Helper() {
	    }
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
	     * @param key
	     * @returns {any}
	     */
	    Helper.orderObjects = function (objects, key) {
	        if (objects) {
	            objects.sort(function (obj1, obj2) {
	                // If key is equal, then sort by id desc
	                var orderKey = ((obj1[key] == obj2[key]) ? 'id' : key);
	                return ((obj1[orderKey] > obj2[orderKey]) ? 1 : 0);
	            });
	        }
	        return objects;
	    };
	    /**
	     * Get global var
	     * @param index
	     * @returns {any}
	     */
	    Helper.getGlobalVar = function (index) {
	        if (index in _app) {
	            return _app[index];
	        }
	        return null;
	    };
	    /**
	     * Set global var
	     * @param index
	     * @param value
	     * @returns {Helper}
	     */
	    Helper.setGlobalVar = function (index, value) {
	        _app[index] = value;
	        return Helper;
	    };
	    /**
	     * Delete global var
	     * @param index
	     * @returns {Helper}
	     */
	    Helper.deleteGlobalVar = function (index) {
	        if (index in _app) {
	            delete _app[index];
	        }
	        return Helper;
	    };
	    /**
	     * Get data-box service provider
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
	     * Get tree-view provider
	     * @param data
	     * @returns any
	     */
	    Helper.getTreeViewProvider = function (data) {
	        return Helper.mergeObjects(Helper.getDataBoxProvider(data), {
	            iconDefault: (data.treeView.iconDefault || null),
	            iconField: (data.treeView.iconField || null),
	            iconFieldMap: (data.treeView.iconFieldMap || {})
	        });
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
	            label: data.label || ''
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
	     * Set runtime var
	     * @param key
	     * @param value
	     * @returns {Helper}
	     */
	    Helper.setRuntimeVar = function (key, value) {
	        Helper.runtimeVar[key] = value;
	        return Helper;
	    };
	    /**
	     * Get runtime var
	     * @param key
	     * @param defaultValue
	     * @returns {any}
	     */
	    Helper.getRuntimeVar = function (key, defaultValue) {
	        if (defaultValue === void 0) { defaultValue = null; }
	        if (key in Helper.runtimeVar) {
	            return Helper.runtimeVar[key];
	        }
	        return defaultValue;
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
	    return Helper;
	}());
	// Object to use in angular component at runtime.
	Helper.runtimeVar = {};
	exports.Helper = Helper;


/***/ },
/* 45 */
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
	            this._flashMessageService.message('Something went wrong, no response has been returned.', 'Unknown error', flash_message_service_1.FlashMessageTypes.error);
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
	    return PostService;
	}());
	PostService = __decorate([
	    core_1.Injectable(),
	    __metadata("design:paramtypes", [flash_message_service_1.FlashMessageService])
	], PostService);
	exports.PostService = PostService;


/***/ },
/* 46 */
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
	var dynamic_component_loader_service_1 = __webpack_require__(47);
	var modal_dialog_extension_module_1 = __webpack_require__(48);
	var base_modal_popup_1 = __webpack_require__(50);
	exports.BaseModalPopup = base_modal_popup_1.BaseModalPopup;
	var modal_wrapper_component_1 = __webpack_require__(52);
	exports.ModalSizes = modal_wrapper_component_1.ModalSizes;
	// Alert types
	exports.AlertTypes = {
	    success: 'success',
	    info: 'info',
	    warning: 'warning',
	    error: 'error'
	};
	// Modal wrapper module
	var modal_wrapper_extension_module_1 = __webpack_require__(53);
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
	        this._dynamicComponentLoaderService.getComponentFactory(modal_wrapper_extension_module_1.ModalWrapperExtensionModule, 'ModalWrapperComponent').then(function (componentFactory) {
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
	            var unresolvedProviders = (popup.providers || []), resolvedProviders = core_1.ReflectiveInjector.resolve(unresolvedProviders);
	            popup.injector = core_1.ReflectiveInjector.fromResolvedProviders(resolvedProviders, injector);
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
	        if (size === void 0) { size = modal_wrapper_component_1.ModalSizes.sm; }
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
	        if (size === void 0) { size = modal_wrapper_component_1.ModalSizes.sm; }
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
	        if (size === void 0) { size = modal_wrapper_component_1.ModalSizes.sm; }
	        var that = this;
	        return new Promise(function (resolve, reject) {
	            var popup = {
	                module: modal_dialog_extension_module_1.ModalDialogExtensionModule,
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
	        return (exports.AlertTypes[type] || exports.AlertTypes.info);
	    };
	    return ModalService;
	}());
	ModalService = __decorate([
	    core_1.Injectable(),
	    __metadata("design:paramtypes", [dynamic_component_loader_service_1.DynamicComponentLoaderService])
	], ModalService);
	exports.ModalService = ModalService;


/***/ },
/* 47 */
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
	    return DynamicComponentLoaderService;
	}());
	DynamicComponentLoaderService = __decorate([
	    core_1.Injectable(),
	    __metadata("design:paramtypes", [core_1.Compiler])
	], DynamicComponentLoaderService);
	exports.DynamicComponentLoaderService = DynamicComponentLoaderService;


/***/ },
/* 48 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
	    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
	    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
	    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
	    return c > 3 && r && Object.defineProperty(target, key, r), r;
	};
	var core_1 = __webpack_require__(3);
	var common_1 = __webpack_require__(22);
	var modal_dialog_component_1 = __webpack_require__(49);
	var ModalDialogExtensionModule = (function () {
	    function ModalDialogExtensionModule() {
	    }
	    return ModalDialogExtensionModule;
	}());
	ModalDialogExtensionModule = __decorate([
	    core_1.NgModule({
	        imports: [common_1.CommonModule],
	        declarations: [modal_dialog_component_1.ModalDialogComponent],
	        exports: [modal_dialog_component_1.ModalDialogComponent]
	    })
	], ModalDialogExtensionModule);
	exports.ModalDialogExtensionModule = ModalDialogExtensionModule;


/***/ },
/* 49 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __extends = (this && this.__extends) || function (d, b) {
	    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	    function __() { this.constructor = d; }
	    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	};
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
	var base_modal_popup_1 = __webpack_require__(50);
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
	    return ModalDialogComponent;
	}(base_modal_popup_1.BaseModalPopup));
	ModalDialogComponent = __decorate([
	    core_1.Component({
	        selector: '.js_modalDialog',
	        template: "<div class=\"modal-header\">\n        <h3 class=\"modal-title\">{{title}}</h3>\n    </div>\n    <div class=\"modal-body\">{{body}}</div>\n    <div class=\"modal-footer\">\n        <button *ngIf=\"isDialog\" class=\"btn btn-default\" (click)=\"closeAction($event, false)\">Cancel</button>\n        <button class=\"btn btn-primary\" (click)=\"closeAction($event, true)\">Ok</button>\n    </div>\n    "
	    }),
	    __metadata("design:paramtypes", [core_1.ElementRef,
	        core_1.Renderer])
	], ModalDialogComponent);
	exports.ModalDialogComponent = ModalDialogComponent;


/***/ },
/* 50 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __extends = (this && this.__extends) || function (d, b) {
	    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	    function __() { this.constructor = d; }
	    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	};
	var core_1 = __webpack_require__(3);
	var base_extension_component_1 = __webpack_require__(51);
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
	        _this.onDismissEmitter = new core_1.EventEmitter();
	        _super.prototype.initBaseExtensionComponent.call(_this, elementRef, renderer, provider);
	        return _this;
	    }
	    /**
	     * Close action.
	     * @param $event
	     * @param data (data to return on resolve component)
	     */
	    BaseModalPopup.prototype.closeAction = function ($event, data) {
	        if ($event === void 0) { $event = null; }
	        if (data === void 0) { data = null; }
	        if ($event) {
	            $event.preventDefault();
	        }
	        this.onDismissEmitter.emit(data);
	    };
	    return BaseModalPopup;
	}(base_extension_component_1.BaseExtensionComponent));
	exports.BaseModalPopup = BaseModalPopup;


/***/ },
/* 51 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
	    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
	    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
	    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
	    return c > 3 && r && Object.defineProperty(target, key, r), r;
	};
	var core_1 = __webpack_require__(3);
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
	            this._provider = [];
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
	    return BaseExtensionComponent;
	}());
	BaseExtensionComponent = __decorate([
	    core_1.Component({
	        selector: '.js_base',
	        template: ''
	    })
	], BaseExtensionComponent);
	exports.BaseExtensionComponent = BaseExtensionComponent;


/***/ },
/* 52 */
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
	// Modal sizes
	exports.ModalSizes = {
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
	        return (exports.ModalSizes[size] || exports.ModalSizes.lg);
	    };
	    /**
	     * On document click event
	     */
	    ModalWrapperComponent.prototype.onDocumentClick = function () {
	        // @TODO implement "Esc" key and click over backdrop, get from viewcontainerref, index 0
	        //console.log("click");
	        return;
	    };
	    return ModalWrapperComponent;
	}());
	__decorate([
	    core_1.ViewChild('js_modalContainer', { read: core_1.ViewContainerRef }),
	    __metadata("design:type", core_1.ViewContainerRef)
	], ModalWrapperComponent.prototype, "viewContainerRef", void 0);
	ModalWrapperComponent = __decorate([
	    core_1.Component({
	        selector: 'js_modal',
	        template: "\n    <div class=\"modal-backdrop\"></div>\n    <div class=\"modal animated\">\n        <div class=\"modal-dialog modal-{{_size}}\">\n            <div class=\"modal-content\">\n                <template #js_modalContainer></template>\n            </div>\n        </div>\n    </div>\n    ",
	        host: {
	            '(document:click)': 'onDocumentClick($event)',
	        }
	    }),
	    __metadata("design:paramtypes", [core_1.ElementRef])
	], ModalWrapperComponent);
	exports.ModalWrapperComponent = ModalWrapperComponent;


/***/ },
/* 53 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
	    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
	    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
	    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
	    return c > 3 && r && Object.defineProperty(target, key, r), r;
	};
	var core_1 = __webpack_require__(3);
	var common_1 = __webpack_require__(22);
	var modal_wrapper_component_1 = __webpack_require__(52);
	var ModalWrapperExtensionModule = (function () {
	    function ModalWrapperExtensionModule() {
	    }
	    return ModalWrapperExtensionModule;
	}());
	ModalWrapperExtensionModule = __decorate([
	    core_1.NgModule({
	        imports: [common_1.CommonModule],
	        declarations: [modal_wrapper_component_1.ModalWrapperComponent],
	        exports: [modal_wrapper_component_1.ModalWrapperComponent]
	    })
	], ModalWrapperExtensionModule);
	exports.ModalWrapperExtensionModule = ModalWrapperExtensionModule;


/***/ },
/* 54 */
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
	var core_1 = __webpack_require__(3);
	var forms_1 = __webpack_require__(30);
	var modal_service_1 = __webpack_require__(46);
	var helper_1 = __webpack_require__(44);
	var FormService = (function () {
	    function FormService(_modalService, formBuilder, _dataService, _helperService) {
	        var _this = this;
	        this._modalService = _modalService;
	        this._dataService = _dataService;
	        this._helperService = _helperService;
	        this._originalObject = {}; // Original object to compare changes and reset object in DataService
	        this._originalNormalizedObject = {}; // Original normalized object to compare changes and reset object in form
	        this._object = {}; // Object used by form
	        this._$form = null; // DOM form
	        this._errors = {}; // Form errors validation
	        // Controls if the form is on "save" mode (waiting to finish the save process). It's useful to control the
	        // save action (avoid multiples clicks on button) and to recognize the object change after saved by DataService.
	        this._isOnSave = false;
	        this._onObjectChangeEmitter = new core_1.EventEmitter();
	        // Object change event subscription
	        this._onObjectChangeSubscription = this._dataService.getOnObjectChangeEmitter()
	            .subscribe(function (object) { return _this.onObjectChangeSubscription(object); });
	        // Set object
	        this.setObject(this._dataService.getObject());
	        // Form build
	        var formControls = {}, fields = (this._dataService.getFields('form') || []).concat(this._helperService.objectKeys(this._dataService.getProviderExtraDataAttr('fields')));
	        for (var _i = 0, fields_1 = fields; _i < fields_1.length; _i++) {
	            var field = fields_1[_i];
	            formControls[field] = [this._object[field] || null];
	        }
	        this._form = formBuilder.group(formControls);
	    }
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
	        // Set object only if is different
	        if (object != this._originalObject) {
	            if (this._isOnSave) {
	                // Form is waiting for save process, this is the saved object,
	                // it's not necessary any confirmation, if you need more security in this process, add a token.
	                this.setObject(object);
	                return;
	            }
	            // Regular change in object
	            this.confirmAndSetObject(object).then(function (data) { return; }, function (errors) { return; });
	        }
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
	            this._originalNormalizedObject = helper_1.Helper.cloneObject(this._originalObject, true);
	            this.normalizeObject(this._originalNormalizedObject);
	            // Update form object
	            this._object = helper_1.Helper.cloneObject(this._originalNormalizedObject, true);
	            // Reset errors
	            this._errors = {};
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
	     * Check if the object has changes from user
	     * @returns boolean
	     */
	    FormService.prototype.hasChanges = function () {
	        return !this._helperService.isEqualObject(this._object, this._originalNormalizedObject);
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
	     * @param forceSubmit (force form to submit even if object has no changes)
	     * @param hasValidation
	     * @returns {Promise}
	     */
	    FormService.prototype.save = function (route, forceSubmit, hasValidation) {
	        if (route === void 0) { route = null; }
	        if (forceSubmit === void 0) { forceSubmit = false; }
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
	            if (forceSubmit || !that._object['id'] || that.hasChanges()) {
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
	                // Get form data
	                var data = that._$form.serialize();
	                var id = that._object['id'] ? that._object['id'] : null;
	                // Save form
	                that._dataService.save(data, id, route).then(function (object) {
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
	        var _this = this;
	        if ($event === void 0) { $event = null; }
	        if ($event) {
	            $event.preventDefault();
	        }
	        var that = this;
	        this.save().then(function (data) {
	            _this._dataService.detail();
	            return;
	        }, function (errors) { return; });
	    };
	    /**
	     * Save and add a new entry.
	     * This method should be called from view/template.
	     * @param $event
	     */
	    FormService.prototype.saveAndNewAction = function ($event) {
	        var _this = this;
	        if ($event === void 0) { $event = null; }
	        if ($event) {
	            $event.preventDefault();
	        }
	        this.save().then(function (data) {
	            _this._dataService.newObject();
	            return;
	        }, function (errors) { return; });
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
	    return FormService;
	}());
	FormService = __decorate([
	    core_1.Injectable(),
	    __param(2, core_1.Inject('DataService')),
	    __param(3, core_1.Inject('HelperService')),
	    __metadata("design:paramtypes", [modal_service_1.ModalService,
	        forms_1.FormBuilder, Object, Object])
	], FormService);
	exports.FormService = FormService;


/***/ },
/* 55 */
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
	var core_1 = __webpack_require__(3);
	var platform_browser_1 = __webpack_require__(21);
	var post_service_1 = __webpack_require__(45);
	// OrderTypes
	exports.OrderTypes = {
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
	        this._onObjectChangeEmitter = new core_1.EventEmitter();
	        this._onObjectsChangeEmitter = new core_1.EventEmitter();
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
	     * Get on objects change emitter to tell all subscribers about changes
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
	     * @param route
	     * @param url
	     * @returns {DataService}
	     */
	    DataService.prototype.setRoute = function (route, url) {
	        if (route in this._provider.route) {
	            this._provider.route[route]['url'] = url;
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
	        // Normalize object to template
	        this._normalizedObject = this._helperService.cloneObject(object, true);
	        this.normalizeObjectsToTemplate([this._normalizedObject]);
	        if (object && object['id']) {
	            var objectsProvider = (this._objectsProvider || this._provider.objects);
	            // Refresh objects array
	            if ((index != null) && objectsProvider[index]) {
	                // Update existent object
	                this._objectIndex = index;
	                objectsProvider[index] = this._normalizedObject;
	                this._normalizedObject['_isEdited'] = true; // Flag to use in template
	            }
	            else {
	                // Add new object at first of array (to best user experience)
	                this._objectIndex = 0; // Update index to the new index
	                this.pushToObjects([this._normalizedObject], true);
	                this._newObjectsIds.push(object['id']); // New object added
	                this._normalizedObject['_isNew'] = true; // Flag to use in template
	            }
	        }
	        else {
	            this._objectIndex = null;
	        }
	        this.setLocalObject(object);
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
	            this.newObject().then(// Reset object, index and all information of object can be changed
	            function (// Reset object, index and all information of object can be changed
	                data) { }, function (errors) { console.log(errors); });
	        }
	        // Emmit changes
	        this._onObjectsChangeEmitter.emit(objects);
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
	            }
	        }
	        // Emmit changes
	        /*if (hasChanges) {
	            this._onObjectsChangeEmitter.emit(objects);
	        }*/
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
	                        && this._helperService.getGlobalVar('stores')
	                        && this._helperService.getGlobalVar('stores')[object['storeObj']]) {
	                        return this._sanitizer.bypassSecurityTrustHtml(// Used to allow the style attr
	                        '<span class="store" style="background-color: '
	                            + this._helperService.getGlobalVar('stores')[object['storeObj']]['color']
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
	     * @param index
	     * @returns {Promise}
	     */
	    DataService.prototype.newObject = function (index) {
	        if (index === void 0) { index = null; }
	        var that = this;
	        return new Promise(function (resolve, reject) {
	            var newObj = {};
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
	                    that.setObject(newObj);
	                    that.resetExtraFields();
	                    return resolve(true);
	                }, function (errors) { console.log(errors); return reject(false); });
	            }
	            else {
	                for (var _i = 0, _a = that._provider.fields['form']; _i < _a.length; _i++) {
	                    var field = _a[_i];
	                    newObj[field] = (that._provider.fields['metadata'][field]['default'] || null);
	                }
	                that.setObject(newObj);
	                that.resetExtraFields();
	                return resolve(true);
	            }
	        });
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
	            // Set route (if id is provided, use 'edit', else use 'add')
	            if (!route) {
	                route = (id
	                    ? that._provider.route['edit']['url']
	                    : (that._provider.route['add']
	                        ? that._provider.route['add']['url']
	                        : that._provider.route['edit']['url']));
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
	                // Local data (Do not override, merge data)
	                if (data['localData']) {
	                    that._provider.localData =
	                        that._helperService.mergeObjects(that._provider.localData, data['localData']);
	                }
	                var obj = (data.object || null);
	                // Refresh object
	                if (obj) {
	                    that.setObject(data.object, that._objectIndex);
	                }
	                return resolve(obj);
	            }, function (errors) {
	                // Local data (Do not override, merge data). Exception in errors list used in some cases.
	                if (errors['localData']) {
	                    that._provider.localData =
	                        that._helperService.mergeObjects(that._provider.localData, errors['localData']);
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
	        // Only search if parameters have changed
	        if (!this._helperService.isEqualObject(this._provider['search'], this._candidateSearch)) {
	            // Update search
	            this._provider['search'] = this._helperService.cloneObject(this._candidateSearch, true);
	            // Reset pagination for new search
	            this.resetPagination();
	            // To reset objects
	            noReset = false;
	        }
	        this.post(this._provider.route['choices']['url'], this.getRequestData(null, noReset)).then(function (data) {
	            // Update list of objects
	            that.setObjects(data.objects || [], noReset);
	        }, function (errors) { console.log(errors); });
	        return this;
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
	                // Refresh fields choices
	                if (data.fieldsChoices) {
	                    that.setFieldsChoices(data.fieldsChoices);
	                }
	                // Refresh objects array
	                that.pullFromObjects(index);
	                that.newObject().then(function (data) { }, function (errors) { console.log(errors); });
	                return resolve(true);
	            }, function (errors) { console.log(errors); return resolve(false); });
	        });
	    };
	    /**
	     * Order object (change priority value).
	     * @param index
	     * @param type
	     * @returns any
	     */
	    DataService.prototype.order = function (index, type) {
	        var that = this, objectsProvider = (this._objectsProvider || this._provider.objects);
	        if (exports.OrderTypes[type] // Validate order type
	            && ((objectsProvider[index]['priority'] > 0) || (exports.OrderTypes[type] == 'down'))) {
	            this.post((this._provider.route['order']['url'] + '/' + objectsProvider[index]['id'] + '/' + exports.OrderTypes[type]), that.getRequestData()).then(function (data) {
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
	                    // If objects are not returned, then order objects by "priority" value
	                    if (!data.objects) {
	                        that._helperService.orderObjects(that._provider.objects, 'priority');
	                    }
	                }
	            }, function (errors) {
	                console.log(errors);
	            });
	        }
	        return this;
	    };
	    /**
	     * Delete objects from array by index.
	     * @param data
	     * @returns {DataService}
	     */
	    DataService.prototype.deleteArray = function (data) {
	        var that = this;
	        var objects = this._provider.objects;
	        var idArr = [], indexArr = [];
	        if (objects && data && (data.length > 0)) {
	            for (var _i = 0, data_1 = data; _i < data_1.length; _i++) {
	                var obj = data_1[_i];
	                if (objects[obj.value]) {
	                    idArr.push(objects[obj.value]['id']);
	                    indexArr.push(obj.value);
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
	            for (var _i = 0, indexArr_1 = indexArr; _i < indexArr_1.length; _i++) {
	                var index = indexArr_1[_i];
	                that.pullFromObjects(index - indexCorrection);
	                indexCorrection++;
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
	                csrfToken: this._helperService.getGlobalVar('csrfToken'),
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
	    return DataService;
	}());
	DataService = __decorate([
	    core_1.Injectable(),
	    __param(1, core_1.Inject('HelperService')),
	    __param(2, core_1.Inject('DataServiceProvider')),
	    __metadata("design:paramtypes", [post_service_1.PostService, Object, Object, platform_browser_1.DomSanitizer])
	], DataService);
	exports.DataService = DataService;


/***/ },
/* 56 */
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
	var core_1 = __webpack_require__(3);
	var dynamic_component_loader_service_1 = __webpack_require__(47);
	var post_service_1 = __webpack_require__(45);
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
	        return this._llComponentRefArr[index];
	    };
	    /**
	     * Unset componentRef of current index (if index is not provided)
	     * @param index (index of container)
	     * @returns NavManagerService
	     */
	    NavManagerService.prototype.unsetComponentRef = function (index) {
	        if (index === void 0) { index = null; }
	        index = (index || this._currentIndex);
	        this._llComponentRefArr[index].destroy();
	        this._llComponentRefArr[index] = null;
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
	            var llViewIndex = null, llClass = ('js_lazyLoadContainer_' + index); // Lazy load class
	            // Check if is a lazy load container (by its index in class)
	            for (var index_1 in that._llViewContainerRefArr) {
	                if ($(that._llViewContainerRefArr[index_1].element.nativeElement).parent().hasClass(llClass)) {
	                    llViewIndex = index_1;
	                    break;
	                }
	            }
	            if ((llViewIndex === null) // No lazy load view
	                || that._llComponentRefArr[index] // Container has been loaded
	                || !that._component['getNavData'] // Component doesn't have the necessary implementation to lazy load
	            ) {
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
	            injector = core_1.ReflectiveInjector.fromResolvedProviders(core_1.ReflectiveInjector.resolve(providers), this._injector);
	        }
	        var that = this;
	        return this._dynamicComponentLoaderService.load(lazyLoadData.module, lazyLoadData.component, viewContainerRef, injector).then(function (componentRef) {
	            that._llComponentRefArr[index] = componentRef;
	            that._currentIndex = index;
	            return true;
	        }, function (errors) { console.log(errors); return null; });
	    };
	    return NavManagerService;
	}());
	NavManagerService = __decorate([
	    core_1.Injectable(),
	    __param(0, core_1.Inject('HelperService')),
	    __metadata("design:paramtypes", [Object, core_1.Injector,
	        dynamic_component_loader_service_1.DynamicComponentLoaderService,
	        post_service_1.PostService])
	], NavManagerService);
	exports.NavManagerService = NavManagerService;


/***/ },
/* 57 */
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
	var nav_manager_service_1 = __webpack_require__(56);
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
	    function WizardManagerService(_navManagerService) {
	        this._navManagerService = _navManagerService;
	        // Local variables
	        this._component = null; // Parent component that uses and implement this service
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
	        if ($event) {
	            $event.preventDefault();
	        }
	        this._navManagerService.navTo(this._navManagerService.getIndex() + 1).then(function (data) { return; }, function (errors) { return; });
	    };
	    /**
	     * Previous action.
	     * @param $event
	     */
	    WizardManagerService.prototype.prevAction = function ($event) {
	        if ($event === void 0) { $event = null; }
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
	    WizardManagerService.prototype.navTo = function (index) {
	        return this._navManagerService.navTo(index);
	    };
	    return WizardManagerService;
	}());
	WizardManagerService = __decorate([
	    core_1.Injectable(),
	    __metadata("design:paramtypes", [nav_manager_service_1.NavManagerService])
	], WizardManagerService);
	exports.WizardManagerService = WizardManagerService;


/***/ },
/* 58 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __extends = (this && this.__extends) || function (d, b) {
	    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	    function __() { this.constructor = d; }
	    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	};
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
	var core_1 = __webpack_require__(3);
	var modal_service_1 = __webpack_require__(46);
	var actions_service_1 = __webpack_require__(41);
	var data_box_component_1 = __webpack_require__(59);
	var video_player_popup_module_1 = __webpack_require__(62);
	var helper_1 = __webpack_require__(44);
	// Component
	var VideoComponent = (function (_super) {
	    __extends(VideoComponent, _super);
	    function VideoComponent(viewContainerRef, renderer, provider, dataService, actionsService, modalService, popups, injector, _helperService) {
	        var _this = 
	        // Call parent
	        _super.call(this, viewContainerRef, renderer, provider, dataService, actionsService, modalService, popups, injector) || this;
	        _this._helperService = _helperService;
	        return _this;
	    }
	    /**
	     * Get web path
	     * @param path
	     * @returns {string}
	     */
	    VideoComponent.prototype.getWebPath = function (path) {
	        return this._helperService.getUploadWebPath(path);
	    };
	    /**
	     * Play video
	     * @param $event
	     */
	    VideoComponent.prototype.playAction = function ($event, object) {
	        $event.preventDefault();
	        var providers = [
	            { provide: 'VideoPlayerProvider', useValue: {
	                    path: object['path'],
	                    extension: object['extension'],
	                    source: object['source']
	                } }
	        ], popup = {
	            module: video_player_popup_module_1.VideoPlayerPopupModule,
	            component: 'VideoPlayerPopupComponent',
	            providers: providers,
	            size: 'lg'
	        };
	        this._modalService.popup(popup, this._injector).then(function (data) { return; }, function (errors) { console.log(errors); return; });
	    };
	    /**
	     * Trigger action
	     * @param $event
	     * @param action (can be provided by $event or directly in the call)
	     * @param data (can be provided by $event or directly in the call)
	     */
	    VideoComponent.prototype.triggerAction = function ($event, action, data) {
	        if (action === void 0) { action = null; }
	        if (data === void 0) { data = null; }
	        if ($event) {
	            $event.preventDefault();
	            $event.stopPropagation(); // Prevent to open the slide show
	        }
	        _super.prototype.triggerAction.call(this, $event, action, data);
	    };
	    return VideoComponent;
	}(data_box_component_1.DataBoxComponent));
	VideoComponent = __decorate([
	    core_1.Component({
	        selector: '.js_video',
	        templateUrl: helper_1.Helper.getGlobalVar('route') + 'template/default/video'
	    }),
	    __param(2, core_1.Inject('Provider')),
	    __param(3, core_1.Inject('DataService')),
	    __param(6, core_1.Inject('Popups')),
	    __param(8, core_1.Inject('HelperService')),
	    __metadata("design:paramtypes", [core_1.ViewContainerRef,
	        core_1.Renderer, Object, Object, actions_service_1.ActionsService,
	        modal_service_1.ModalService, Object, core_1.Injector, Object])
	], VideoComponent);
	exports.VideoComponent = VideoComponent;


/***/ },
/* 59 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __extends = (this && this.__extends) || function (d, b) {
	    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	    function __() { this.constructor = d; }
	    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	};
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
	var core_1 = __webpack_require__(3);
	var data_box_extension_component_1 = __webpack_require__(60);
	exports.PopupTypes = data_box_extension_component_1.PopupTypes;
	var modal_service_1 = __webpack_require__(46);
	var helper_1 = __webpack_require__(44);
	var actions_service_1 = __webpack_require__(41);
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
	    return DataBoxComponent;
	}(data_box_extension_component_1.DataBoxExtensionComponent));
	DataBoxComponent = __decorate([
	    core_1.Component({
	        selector: '.js_dataBox',
	        templateUrl: helper_1.Helper.getGlobalVar('route') + 'template/default/data-box'
	    }),
	    __param(2, core_1.Inject('Provider')),
	    __param(3, core_1.Inject('DataService')),
	    __param(6, core_1.Inject('Popups')),
	    __metadata("design:paramtypes", [core_1.ViewContainerRef,
	        core_1.Renderer, Object, Object, actions_service_1.ActionsService,
	        modal_service_1.ModalService, Object, core_1.Injector])
	], DataBoxComponent);
	exports.DataBoxComponent = DataBoxComponent;


/***/ },
/* 60 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __extends = (this && this.__extends) || function (d, b) {
	    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	    function __() { this.constructor = d; }
	    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	};
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
	var data_service_1 = __webpack_require__(55);
	var box_extension_component_1 = __webpack_require__(61);
	// Popup Types
	exports.PopupTypes = {
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
	    DataBoxExtensionComponent.prototype.initDataBoxExtensionComponent = function (viewContainerRef, renderer, provider, dataService, actionsService, modalService, 
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
	            that.openPopup(exports.PopupTypes.edit);
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
	        this.openPopup(exports.PopupTypes.add);
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
	            that.openPopup(exports.PopupTypes.edit);
	        }, function (errors) { console.log(errors); });
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
	                that._dataService.delete(data).then(function (data) { return; }, function (errors) { return; });
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
	        this._dataService.order(data, data_service_1.OrderTypes.up);
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
	        this._dataService.order(data, data_service_1.OrderTypes.down);
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
	        if (popupType === void 0) { popupType = exports.PopupTypes.edit; }
	        // Set edit as default popup type if is not a valid entry
	        popupType = (exports.PopupTypes[popupType] || exports.PopupTypes.edit);
	        var popup = this._popups[popupType] || this._popups;
	        // Open popup
	        this._modalService.popup(popup, this._injector).then(function (data) { return; }, function (errors) { console.log(errors); return; });
	        return this;
	    };
	    return DataBoxExtensionComponent;
	}(box_extension_component_1.BoxExtensionComponent));
	DataBoxExtensionComponent = __decorate([
	    core_1.Component({
	        selector: '.js_dataBox',
	        template: ''
	    }),
	    __metadata("design:paramtypes", [])
	], DataBoxExtensionComponent);
	exports.DataBoxExtensionComponent = DataBoxExtensionComponent;


/***/ },
/* 61 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __extends = (this && this.__extends) || function (d, b) {
	    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	    function __() { this.constructor = d; }
	    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	};
	var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
	    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
	    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
	    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
	    return c > 3 && r && Object.defineProperty(target, key, r), r;
	};
	var core_1 = __webpack_require__(3);
	var base_extension_component_1 = __webpack_require__(51);
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
	    return BoxExtensionComponent;
	}(base_extension_component_1.BaseExtensionComponent));
	BoxExtensionComponent = __decorate([
	    core_1.Component({
	        selector: '.js_box',
	        template: ''
	    })
	], BoxExtensionComponent);
	exports.BoxExtensionComponent = BoxExtensionComponent;


/***/ },
/* 62 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
	    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
	    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
	    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
	    return c > 3 && r && Object.defineProperty(target, key, r), r;
	};
	var core_1 = __webpack_require__(3);
	var common_1 = __webpack_require__(22);
	var video_player_popup_component_1 = __webpack_require__(63);
	var VideoPlayerPopupModule = (function () {
	    function VideoPlayerPopupModule() {
	    }
	    return VideoPlayerPopupModule;
	}());
	VideoPlayerPopupModule = __decorate([
	    core_1.NgModule({
	        imports: [
	            common_1.CommonModule
	        ],
	        declarations: [video_player_popup_component_1.VideoPlayerPopupComponent],
	        exports: [video_player_popup_component_1.VideoPlayerPopupComponent]
	    })
	], VideoPlayerPopupModule);
	exports.VideoPlayerPopupModule = VideoPlayerPopupModule;


/***/ },
/* 63 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __extends = (this && this.__extends) || function (d, b) {
	    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	    function __() { this.constructor = d; }
	    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	};
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
	var core_1 = __webpack_require__(3);
	var platform_browser_1 = __webpack_require__(21);
	var modal_service_1 = __webpack_require__(46);
	var VideoPlayerPopupComponent = (function (_super) {
	    __extends(VideoPlayerPopupComponent, _super);
	    function VideoPlayerPopupComponent(elementRef, renderer, provider, domSanitizationService, _helperService) {
	        var _this = _super.call(this, elementRef, renderer, provider) || this;
	        _this._helperService = _helperService;
	        // Set url
	        switch (_this.getProviderAttr('source')) {
	            case 'file':
	                _this._url = domSanitizationService.bypassSecurityTrustUrl(_this._helperService.getUploadWebPath(_this.getProviderAttr('path')));
	                break;
	            case 'youtube':
	                _this._url = domSanitizationService.bypassSecurityTrustResourceUrl('https://www.youtube.com/embed/' + _this.getProviderAttr('path'));
	                break;
	            case 'vimeo':
	                _this._url = domSanitizationService.bypassSecurityTrustResourceUrl('https://player.vimeo.com/video/' + _this.getProviderAttr('path'));
	                break;
	        }
	        return _this;
	    }
	    /**
	     * Get extension
	     * @returns {string}
	     */
	    VideoPlayerPopupComponent.prototype.getExtension = function () {
	        return this.getProviderAttr('extension');
	    };
	    /**
	     * Lifecycle callback
	     */
	    VideoPlayerPopupComponent.prototype.ngAfterViewInit = function () {
	        // Add class to allow fullscreen video
	        // (set animation to none, ans opacity to 1, animation is not compatible with fullscreen)
	        $(this._elementRef.nativeElement).closest('.modal').on("animationend webkitAnimationEnd oAnimationEnd MSAnimationEnd", function () {
	            $(this).addClass('fullscreen-video');
	        });
	    };
	    return VideoPlayerPopupComponent;
	}(modal_service_1.BaseModalPopup));
	VideoPlayerPopupComponent = __decorate([
	    core_1.Component({
	        selector: '.js_videoPlayerPopup',
	        template: "\n    <div class=\"modal-body\">\n        <div class=\"form-wrapper gray-bg\">\n            <div class=\"row\">\n                <div class=\"col-lg-12\">\n                    <div class=\"ibox float-e-margins\">\n                        <div class=\"ibox-title\">\n                            <h5>Video Player</h5>\n                            <div class=\"txt-align-r actions\">\n                                <a class=\"-round fa fa-times\"\n                                   (click)=\"closeAction($event)\"></a>\n                            </div>\n                        </div>\n                        <div class=\"ibox-content video-player\">\n                            <video *ngIf=\"getProviderAttr('source') == 'file'\" controls><source [src]=\"_url\" type=\"video/{{getExtension()}}\"></video>\n                            <iframe *ngIf=\"getProviderAttr('source') == 'youtube'\" [src]=\"_url\" frameborder=\"0\" allowfullscreen></iframe>\n                            <iframe *ngIf=\"getProviderAttr('source') == 'vimeo'\" [src]=\"_url\" frameborder=\"0\" allowfullscreen></iframe>\n                        </div>\n                    </div>\n                </div>\n            </div>\n        </div>\n    </div>\n    "
	    }),
	    __param(2, core_1.Inject('VideoPlayerProvider')),
	    __param(4, core_1.Inject('HelperService')),
	    __metadata("design:paramtypes", [core_1.ElementRef,
	        core_1.Renderer, Object, platform_browser_1.DomSanitizer, Object])
	], VideoPlayerPopupComponent);
	exports.VideoPlayerPopupComponent = VideoPlayerPopupComponent;


/***/ },
/* 64 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
	    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
	    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
	    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
	    return c > 3 && r && Object.defineProperty(target, key, r), r;
	};
	var core_1 = __webpack_require__(3);
	var common_1 = __webpack_require__(22);
	var forms_1 = __webpack_require__(30);
	var dynamic_component_loader_service_1 = __webpack_require__(47);
	var video_form_popup_component_1 = __webpack_require__(65);
	var VideoFormPopupModule = (function () {
	    function VideoFormPopupModule() {
	    }
	    return VideoFormPopupModule;
	}());
	VideoFormPopupModule = __decorate([
	    core_1.NgModule({
	        imports: [
	            common_1.CommonModule,
	            forms_1.FormsModule
	        ],
	        declarations: [video_form_popup_component_1.VideoFormPopupComponent],
	        providers: [
	            dynamic_component_loader_service_1.DynamicComponentLoaderService
	        ],
	        exports: [video_form_popup_component_1.VideoFormPopupComponent]
	    })
	], VideoFormPopupModule);
	exports.VideoFormPopupModule = VideoFormPopupModule;


/***/ },
/* 65 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __extends = (this && this.__extends) || function (d, b) {
	    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	    function __() { this.constructor = d; }
	    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	};
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
	var core_1 = __webpack_require__(3);
	var helper_1 = __webpack_require__(44);
	var form_service_1 = __webpack_require__(54);
	var wizard_manager_service_1 = __webpack_require__(57);
	var wizard_popup_component_1 = __webpack_require__(66);
	/* Import dependencies */
	// Save base templateUrl
	var baseTemplateUrl = helper_1.Helper.getRuntimeVar('templateUrl');
	// File form
	helper_1.Helper.setRuntimeVar('templateUrl', baseTemplateUrl + '/file');
	var video_form_file_module_1 = __webpack_require__(67);
	// Url form (Vimeo and Youtube)
	helper_1.Helper.setRuntimeVar('templateUrl', baseTemplateUrl);
	var video_form_url_module_1 = __webpack_require__(72);
	/* /Import dependencies */
	var VideoFormPopupComponent = (function (_super) {
	    __extends(VideoFormPopupComponent, _super);
	    function VideoFormPopupComponent(elementRef, renderer, provider, wizardManagerService, _formService, _dataService) {
	        var _this = 
	        // Call parent
	        _super.call(this, elementRef, renderer, provider, wizardManagerService) || this;
	        _this._formService = _formService;
	        _this._dataService = _dataService;
	        //Local variables
	        _this.errors = {};
	        _this._source = null;
	        _this._loadedSource = null;
	        return _this;
	    }
	    /**
	     * Submit navigation (when leave one container to navigate in other one)
	     * @param index (index to validate)
	     * @returns {Promise<boolean>}
	     */
	    VideoFormPopupComponent.prototype.submitNav = function (index) {
	        var that = this;
	        this.errors = {}; // Form errors
	        return new Promise(function (resolve, reject) {
	            switch (index) {
	                case 0:
	                    if (!that._source) {
	                        that.errors = { source: ['Please select an option'] };
	                        return reject(false);
	                    }
	                    if (that._loadedSource != that._source) {
	                        // Clear container to load the new source
	                        if (that._wizardManagerService.getComponentRef(index + 1)) {
	                            that._wizardManagerService.unsetComponentRef(index + 1);
	                            that._loadedSource = that._source;
	                        }
	                    }
	                    return resolve(true);
	                case 1:
	                    if (that._source == 'file') {
	                        // It's saved automatically by the plugin
	                        return resolve(true);
	                    }
	                    // Update route
	                    var originalRoute = that._dataService.getRoute('add');
	                    that._dataService.setRoute('add', originalRoute + '/' + that._source);
	                    // Save form
	                    that._wizardManagerService.getComponentRef(index).instance._formService.save().then(function (data) { resolve(true); }, function (errors) { reject(false); });
	                    // Restore original route
	                    that._dataService.setRoute('add', originalRoute);
	                    return;
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
	    VideoFormPopupComponent.prototype.getNavData = function (index) {
	        switch (index) {
	            case 1:
	                if (this._source == 'file') {
	                    return {
	                        module: video_form_file_module_1.VideoFormFileModule,
	                        component: 'VideoFormFileComponent'
	                    };
	                }
	                else {
	                    return {
	                        module: video_form_url_module_1.VideoFormUrlModule,
	                        component: 'VideoFormUrlComponent'
	                    };
	                }
	        }
	        return null;
	    };
	    /**
	     * Get nav providers (to lazy load components in container with dependency injection)
	     * @param index (index to load)
	     * @param data (data to resolve all providers)
	     * @returns {Array}
	     */
	    VideoFormPopupComponent.prototype.getNavProviders = function (index, data) {
	        if (data === void 0) { data = null; }
	        switch (index) {
	            case 1:
	                return [
	                    { provide: 'Provider', useValue: {
	                            label: this.getProviderAttr('label'),
	                            url: (this._dataService.getRoute('add') + '/' + this._source)
	                        } }
	                ];
	        }
	        return null;
	    };
	    /**
	     * Set source
	     * @param $event
	     * @param value
	     */
	    VideoFormPopupComponent.prototype.setSource = function ($event, value) {
	        this._source = value;
	    };
	    return VideoFormPopupComponent;
	}(wizard_popup_component_1.WizardPopupComponent));
	__decorate([
	    core_1.ViewChildren('js_lazyLoadContainer', { read: core_1.ViewContainerRef }),
	    __metadata("design:type", core_1.QueryList)
	], VideoFormPopupComponent.prototype, "lazyLoadViewContainerRefQL", void 0);
	VideoFormPopupComponent = __decorate([
	    core_1.Component({
	        selector: 'js_videoUploadPopup',
	        templateUrl: helper_1.Helper.getGlobalVar('route') + 'template/form-popup/video'
	    }),
	    __param(2, core_1.Inject('Provider')),
	    __param(4, core_1.Optional()),
	    __param(5, core_1.Inject('DataService')),
	    __metadata("design:paramtypes", [core_1.ElementRef,
	        core_1.Renderer, Object, wizard_manager_service_1.WizardManagerService,
	        form_service_1.FormService, Object])
	], VideoFormPopupComponent);
	exports.VideoFormPopupComponent = VideoFormPopupComponent;


/***/ },
/* 66 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __extends = (this && this.__extends) || function (d, b) {
	    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	    function __() { this.constructor = d; }
	    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	};
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
	var core_1 = __webpack_require__(3);
	var wizard_manager_service_1 = __webpack_require__(57);
	var helper_1 = __webpack_require__(44);
	var modal_service_1 = __webpack_require__(46);
	var WizardPopupComponent = (function (_super) {
	    __extends(WizardPopupComponent, _super);
	    function WizardPopupComponent(elementRef, renderer, provider, _wizardManagerService) {
	        var _this = _super.call(this, elementRef, renderer, provider) || this;
	        _this._wizardManagerService = _wizardManagerService;
	        return _this;
	    }
	    /**
	     * Lifecycle callback
	     */
	    WizardPopupComponent.prototype.ngAfterViewInit = function () {
	        // Initializes the children navigation manager service
	        this._wizardManagerService.init(this, this.lazyLoadViewContainerRefQL);
	    };
	    /**
	     * Lifecycle callback
	     */
	    WizardPopupComponent.prototype.ngOnDestroy = function () {
	        // Free variables
	        this._wizardManagerService.reset();
	    };
	    return WizardPopupComponent;
	}(modal_service_1.BaseModalPopup));
	__decorate([
	    core_1.ViewChildren('js_lazyLoadContainer', { read: core_1.ViewContainerRef }),
	    __metadata("design:type", core_1.QueryList)
	], WizardPopupComponent.prototype, "lazyLoadViewContainerRefQL", void 0);
	WizardPopupComponent = __decorate([
	    core_1.Component({
	        selector: '.js_wizard',
	        templateUrl: helper_1.Helper.getRuntimeVar('templateUrl')
	    }),
	    __param(2, core_1.Inject('Provider')),
	    __metadata("design:paramtypes", [core_1.ElementRef,
	        core_1.Renderer, Object, wizard_manager_service_1.WizardManagerService])
	], WizardPopupComponent);
	exports.WizardPopupComponent = WizardPopupComponent;


/***/ },
/* 67 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
	    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
	    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
	    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
	    return c > 3 && r && Object.defineProperty(target, key, r), r;
	};
	var core_1 = __webpack_require__(3);
	var common_1 = __webpack_require__(22);
	var video_form_file_component_1 = __webpack_require__(68);
	var VideoFormFileModule = (function () {
	    function VideoFormFileModule() {
	    }
	    return VideoFormFileModule;
	}());
	VideoFormFileModule = __decorate([
	    core_1.NgModule({
	        imports: [common_1.CommonModule],
	        declarations: [
	            video_form_file_component_1.VideoFormFileComponent
	        ],
	        exports: [video_form_file_component_1.VideoFormFileComponent]
	    })
	], VideoFormFileModule);
	exports.VideoFormFileModule = VideoFormFileModule;


/***/ },
/* 68 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __extends = (this && this.__extends) || function (d, b) {
	    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	    function __() { this.constructor = d; }
	    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	};
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
	var core_1 = __webpack_require__(3);
	var helper_1 = __webpack_require__(44);
	var file_form_component_1 = __webpack_require__(69);
	var VideoFormFileComponent = (function (_super) {
	    __extends(VideoFormFileComponent, _super);
	    function VideoFormFileComponent(elementRef, dataService, provider) {
	        // Call parent
	        return _super.call(this, elementRef, dataService, provider) || this;
	    }
	    return VideoFormFileComponent;
	}(file_form_component_1.FileFormComponent));
	VideoFormFileComponent = __decorate([
	    core_1.Component({
	        selector: '#js_entityVideoFile',
	        templateUrl: helper_1.Helper.getRuntimeVar('templateUrl')
	    }),
	    __param(1, core_1.Inject('DataService')),
	    __param(2, core_1.Inject('Provider')),
	    __metadata("design:paramtypes", [core_1.ElementRef, Object, Object])
	], VideoFormFileComponent);
	exports.VideoFormFileComponent = VideoFormFileComponent;


/***/ },
/* 69 */
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
	var Dropzone = __webpack_require__(70);
	var core_1 = __webpack_require__(3);
	var helper_1 = __webpack_require__(44);
	// Component
	var FileFormComponent = (function () {
	    function FileFormComponent(_elementRef, _dataService, _fileUploadProvider) {
	        this._elementRef = _elementRef;
	        this._dataService = _dataService;
	        this._fileUploadProvider = _fileUploadProvider;
	    }
	    /**
	     * Lifecycle callback
	     */
	    FileFormComponent.prototype.ngOnInit = function () {
	        var that = this, $form = $(this._elementRef.nativeElement).find('form');
	        $form.dropzone({
	            url: this._fileUploadProvider.url,
	            paramName: "form[file]",
	            success: function (file, response) {
	                // Add object to objects array provider
	                that._dataService.setObject(response['data']['object']);
	            },
	        });
	    };
	    return FileFormComponent;
	}());
	FileFormComponent = __decorate([
	    core_1.Component({
	        selector: '.js_fileUpload',
	        templateUrl: helper_1.Helper.getRuntimeVar('templateUrl')
	    }),
	    __param(1, core_1.Inject('DataService')),
	    __param(2, core_1.Inject('FileUploadProvider')),
	    __metadata("design:paramtypes", [core_1.ElementRef, Object, Object])
	], FileFormComponent);
	exports.FileFormComponent = FileFormComponent;


/***/ },
/* 70 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(module) {
	/*
	 *
	 * More info at [www.dropzonejs.com](http://www.dropzonejs.com)
	 *
	 * Copyright (c) 2012, Matias Meno
	 *
	 * Permission is hereby granted, free of charge, to any person obtaining a copy
	 * of this software and associated documentation files (the "Software"), to deal
	 * in the Software without restriction, including without limitation the rights
	 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
	 * copies of the Software, and to permit persons to whom the Software is
	 * furnished to do so, subject to the following conditions:
	 *
	 * The above copyright notice and this permission notice shall be included in
	 * all copies or substantial portions of the Software.
	 *
	 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
	 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
	 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
	 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
	 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
	 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
	 * THE SOFTWARE.
	 *
	 */
	
	(function() {
	  var Dropzone, Emitter, camelize, contentLoaded, detectVerticalSquash, drawImageIOSFix, noop, without,
	    __slice = [].slice,
	    __hasProp = {}.hasOwnProperty,
	    __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };
	
	  noop = function() {};
	
	  Emitter = (function() {
	    function Emitter() {}
	
	    Emitter.prototype.addEventListener = Emitter.prototype.on;
	
	    Emitter.prototype.on = function(event, fn) {
	      this._callbacks = this._callbacks || {};
	      if (!this._callbacks[event]) {
	        this._callbacks[event] = [];
	      }
	      this._callbacks[event].push(fn);
	      return this;
	    };
	
	    Emitter.prototype.emit = function() {
	      var args, callback, callbacks, event, _i, _len;
	      event = arguments[0], args = 2 <= arguments.length ? __slice.call(arguments, 1) : [];
	      this._callbacks = this._callbacks || {};
	      callbacks = this._callbacks[event];
	      if (callbacks) {
	        for (_i = 0, _len = callbacks.length; _i < _len; _i++) {
	          callback = callbacks[_i];
	          callback.apply(this, args);
	        }
	      }
	      return this;
	    };
	
	    Emitter.prototype.removeListener = Emitter.prototype.off;
	
	    Emitter.prototype.removeAllListeners = Emitter.prototype.off;
	
	    Emitter.prototype.removeEventListener = Emitter.prototype.off;
	
	    Emitter.prototype.off = function(event, fn) {
	      var callback, callbacks, i, _i, _len;
	      if (!this._callbacks || arguments.length === 0) {
	        this._callbacks = {};
	        return this;
	      }
	      callbacks = this._callbacks[event];
	      if (!callbacks) {
	        return this;
	      }
	      if (arguments.length === 1) {
	        delete this._callbacks[event];
	        return this;
	      }
	      for (i = _i = 0, _len = callbacks.length; _i < _len; i = ++_i) {
	        callback = callbacks[i];
	        if (callback === fn) {
	          callbacks.splice(i, 1);
	          break;
	        }
	      }
	      return this;
	    };
	
	    return Emitter;
	
	  })();
	
	  Dropzone = (function(_super) {
	    var extend, resolveOption;
	
	    __extends(Dropzone, _super);
	
	    Dropzone.prototype.Emitter = Emitter;
	
	
	    /*
	    This is a list of all available events you can register on a dropzone object.
	    
	    You can register an event handler like this:
	    
	        dropzone.on("dragEnter", function() { });
	     */
	
	    Dropzone.prototype.events = ["drop", "dragstart", "dragend", "dragenter", "dragover", "dragleave", "addedfile", "addedfiles", "removedfile", "thumbnail", "error", "errormultiple", "processing", "processingmultiple", "uploadprogress", "totaluploadprogress", "sending", "sendingmultiple", "success", "successmultiple", "canceled", "canceledmultiple", "complete", "completemultiple", "reset", "maxfilesexceeded", "maxfilesreached", "queuecomplete"];
	
	    Dropzone.prototype.defaultOptions = {
	      url: null,
	      method: "post",
	      withCredentials: false,
	      parallelUploads: 2,
	      uploadMultiple: false,
	      maxFilesize: 256,
	      paramName: "file",
	      createImageThumbnails: true,
	      maxThumbnailFilesize: 10,
	      thumbnailWidth: 120,
	      thumbnailHeight: 120,
	      filesizeBase: 1000,
	      maxFiles: null,
	      params: {},
	      clickable: true,
	      ignoreHiddenFiles: true,
	      acceptedFiles: null,
	      acceptedMimeTypes: null,
	      autoProcessQueue: true,
	      autoQueue: true,
	      addRemoveLinks: false,
	      previewsContainer: null,
	      hiddenInputContainer: "body",
	      capture: null,
	      renameFilename: null,
	      dictDefaultMessage: "Drop files here to upload",
	      dictFallbackMessage: "Your browser does not support drag'n'drop file uploads.",
	      dictFallbackText: "Please use the fallback form below to upload your files like in the olden days.",
	      dictFileTooBig: "File is too big ({{filesize}}MiB). Max filesize: {{maxFilesize}}MiB.",
	      dictInvalidFileType: "You can't upload files of this type.",
	      dictResponseError: "Server responded with {{statusCode}} code.",
	      dictCancelUpload: "Cancel upload",
	      dictCancelUploadConfirmation: "Are you sure you want to cancel this upload?",
	      dictRemoveFile: "Remove file",
	      dictRemoveFileConfirmation: null,
	      dictMaxFilesExceeded: "You can not upload any more files.",
	      accept: function(file, done) {
	        return done();
	      },
	      init: function() {
	        return noop;
	      },
	      forceFallback: false,
	      fallback: function() {
	        var child, messageElement, span, _i, _len, _ref;
	        this.element.className = "" + this.element.className + " dz-browser-not-supported";
	        _ref = this.element.getElementsByTagName("div");
	        for (_i = 0, _len = _ref.length; _i < _len; _i++) {
	          child = _ref[_i];
	          if (/(^| )dz-message($| )/.test(child.className)) {
	            messageElement = child;
	            child.className = "dz-message";
	            continue;
	          }
	        }
	        if (!messageElement) {
	          messageElement = Dropzone.createElement("<div class=\"dz-message\"><span></span></div>");
	          this.element.appendChild(messageElement);
	        }
	        span = messageElement.getElementsByTagName("span")[0];
	        if (span) {
	          if (span.textContent != null) {
	            span.textContent = this.options.dictFallbackMessage;
	          } else if (span.innerText != null) {
	            span.innerText = this.options.dictFallbackMessage;
	          }
	        }
	        return this.element.appendChild(this.getFallbackForm());
	      },
	      resize: function(file) {
	        var info, srcRatio, trgRatio;
	        info = {
	          srcX: 0,
	          srcY: 0,
	          srcWidth: file.width,
	          srcHeight: file.height
	        };
	        srcRatio = file.width / file.height;
	        info.optWidth = this.options.thumbnailWidth;
	        info.optHeight = this.options.thumbnailHeight;
	        if ((info.optWidth == null) && (info.optHeight == null)) {
	          info.optWidth = info.srcWidth;
	          info.optHeight = info.srcHeight;
	        } else if (info.optWidth == null) {
	          info.optWidth = srcRatio * info.optHeight;
	        } else if (info.optHeight == null) {
	          info.optHeight = (1 / srcRatio) * info.optWidth;
	        }
	        trgRatio = info.optWidth / info.optHeight;
	        if (file.height < info.optHeight || file.width < info.optWidth) {
	          info.trgHeight = info.srcHeight;
	          info.trgWidth = info.srcWidth;
	        } else {
	          if (srcRatio > trgRatio) {
	            info.srcHeight = file.height;
	            info.srcWidth = info.srcHeight * trgRatio;
	          } else {
	            info.srcWidth = file.width;
	            info.srcHeight = info.srcWidth / trgRatio;
	          }
	        }
	        info.srcX = (file.width - info.srcWidth) / 2;
	        info.srcY = (file.height - info.srcHeight) / 2;
	        return info;
	      },
	
	      /*
	      Those functions register themselves to the events on init and handle all
	      the user interface specific stuff. Overwriting them won't break the upload
	      but can break the way it's displayed.
	      You can overwrite them if you don't like the default behavior. If you just
	      want to add an additional event handler, register it on the dropzone object
	      and don't overwrite those options.
	       */
	      drop: function(e) {
	        return this.element.classList.remove("dz-drag-hover");
	      },
	      dragstart: noop,
	      dragend: function(e) {
	        return this.element.classList.remove("dz-drag-hover");
	      },
	      dragenter: function(e) {
	        return this.element.classList.add("dz-drag-hover");
	      },
	      dragover: function(e) {
	        return this.element.classList.add("dz-drag-hover");
	      },
	      dragleave: function(e) {
	        return this.element.classList.remove("dz-drag-hover");
	      },
	      paste: noop,
	      reset: function() {
	        return this.element.classList.remove("dz-started");
	      },
	      addedfile: function(file) {
	        var node, removeFileEvent, removeLink, _i, _j, _k, _len, _len1, _len2, _ref, _ref1, _ref2, _results;
	        if (this.element === this.previewsContainer) {
	          this.element.classList.add("dz-started");
	        }
	        if (this.previewsContainer) {
	          file.previewElement = Dropzone.createElement(this.options.previewTemplate.trim());
	          file.previewTemplate = file.previewElement;
	          this.previewsContainer.appendChild(file.previewElement);
	          _ref = file.previewElement.querySelectorAll("[data-dz-name]");
	          for (_i = 0, _len = _ref.length; _i < _len; _i++) {
	            node = _ref[_i];
	            node.textContent = this._renameFilename(file.name);
	          }
	          _ref1 = file.previewElement.querySelectorAll("[data-dz-size]");
	          for (_j = 0, _len1 = _ref1.length; _j < _len1; _j++) {
	            node = _ref1[_j];
	            node.innerHTML = this.filesize(file.size);
	          }
	          if (this.options.addRemoveLinks) {
	            file._removeLink = Dropzone.createElement("<a class=\"dz-remove\" href=\"javascript:undefined;\" data-dz-remove>" + this.options.dictRemoveFile + "</a>");
	            file.previewElement.appendChild(file._removeLink);
	          }
	          removeFileEvent = (function(_this) {
	            return function(e) {
	              e.preventDefault();
	              e.stopPropagation();
	              if (file.status === Dropzone.UPLOADING) {
	                return Dropzone.confirm(_this.options.dictCancelUploadConfirmation, function() {
	                  return _this.removeFile(file);
	                });
	              } else {
	                if (_this.options.dictRemoveFileConfirmation) {
	                  return Dropzone.confirm(_this.options.dictRemoveFileConfirmation, function() {
	                    return _this.removeFile(file);
	                  });
	                } else {
	                  return _this.removeFile(file);
	                }
	              }
	            };
	          })(this);
	          _ref2 = file.previewElement.querySelectorAll("[data-dz-remove]");
	          _results = [];
	          for (_k = 0, _len2 = _ref2.length; _k < _len2; _k++) {
	            removeLink = _ref2[_k];
	            _results.push(removeLink.addEventListener("click", removeFileEvent));
	          }
	          return _results;
	        }
	      },
	      removedfile: function(file) {
	        var _ref;
	        if (file.previewElement) {
	          if ((_ref = file.previewElement) != null) {
	            _ref.parentNode.removeChild(file.previewElement);
	          }
	        }
	        return this._updateMaxFilesReachedClass();
	      },
	      thumbnail: function(file, dataUrl) {
	        var thumbnailElement, _i, _len, _ref;
	        if (file.previewElement) {
	          file.previewElement.classList.remove("dz-file-preview");
	          _ref = file.previewElement.querySelectorAll("[data-dz-thumbnail]");
	          for (_i = 0, _len = _ref.length; _i < _len; _i++) {
	            thumbnailElement = _ref[_i];
	            thumbnailElement.alt = file.name;
	            thumbnailElement.src = dataUrl;
	          }
	          return setTimeout(((function(_this) {
	            return function() {
	              return file.previewElement.classList.add("dz-image-preview");
	            };
	          })(this)), 1);
	        }
	      },
	      error: function(file, message) {
	        var node, _i, _len, _ref, _results;
	        if (file.previewElement) {
	          file.previewElement.classList.add("dz-error");
	          if (typeof message !== "String" && message.error) {
	            message = message.error;
	          }
	          _ref = file.previewElement.querySelectorAll("[data-dz-errormessage]");
	          _results = [];
	          for (_i = 0, _len = _ref.length; _i < _len; _i++) {
	            node = _ref[_i];
	            _results.push(node.textContent = message);
	          }
	          return _results;
	        }
	      },
	      errormultiple: noop,
	      processing: function(file) {
	        if (file.previewElement) {
	          file.previewElement.classList.add("dz-processing");
	          if (file._removeLink) {
	            return file._removeLink.textContent = this.options.dictCancelUpload;
	          }
	        }
	      },
	      processingmultiple: noop,
	      uploadprogress: function(file, progress, bytesSent) {
	        var node, _i, _len, _ref, _results;
	        if (file.previewElement) {
	          _ref = file.previewElement.querySelectorAll("[data-dz-uploadprogress]");
	          _results = [];
	          for (_i = 0, _len = _ref.length; _i < _len; _i++) {
	            node = _ref[_i];
	            if (node.nodeName === 'PROGRESS') {
	              _results.push(node.value = progress);
	            } else {
	              _results.push(node.style.width = "" + progress + "%");
	            }
	          }
	          return _results;
	        }
	      },
	      totaluploadprogress: noop,
	      sending: noop,
	      sendingmultiple: noop,
	      success: function(file) {
	        if (file.previewElement) {
	          return file.previewElement.classList.add("dz-success");
	        }
	      },
	      successmultiple: noop,
	      canceled: function(file) {
	        return this.emit("error", file, "Upload canceled.");
	      },
	      canceledmultiple: noop,
	      complete: function(file) {
	        if (file._removeLink) {
	          file._removeLink.textContent = this.options.dictRemoveFile;
	        }
	        if (file.previewElement) {
	          return file.previewElement.classList.add("dz-complete");
	        }
	      },
	      completemultiple: noop,
	      maxfilesexceeded: noop,
	      maxfilesreached: noop,
	      queuecomplete: noop,
	      addedfiles: noop,
	      previewTemplate: "<div class=\"dz-preview dz-file-preview\">\n  <div class=\"dz-image\"><img data-dz-thumbnail /></div>\n  <div class=\"dz-details\">\n    <div class=\"dz-size\"><span data-dz-size></span></div>\n    <div class=\"dz-filename\"><span data-dz-name></span></div>\n  </div>\n  <div class=\"dz-progress\"><span class=\"dz-upload\" data-dz-uploadprogress></span></div>\n  <div class=\"dz-error-message\"><span data-dz-errormessage></span></div>\n  <div class=\"dz-success-mark\">\n    <svg width=\"54px\" height=\"54px\" viewBox=\"0 0 54 54\" version=\"1.1\" xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\" xmlns:sketch=\"http://www.bohemiancoding.com/sketch/ns\">\n      <title>Check</title>\n      <defs></defs>\n      <g id=\"Page-1\" stroke=\"none\" stroke-width=\"1\" fill=\"none\" fill-rule=\"evenodd\" sketch:type=\"MSPage\">\n        <path d=\"M23.5,31.8431458 L17.5852419,25.9283877 C16.0248253,24.3679711 13.4910294,24.366835 11.9289322,25.9289322 C10.3700136,27.4878508 10.3665912,30.0234455 11.9283877,31.5852419 L20.4147581,40.0716123 C20.5133999,40.1702541 20.6159315,40.2626649 20.7218615,40.3488435 C22.2835669,41.8725651 24.794234,41.8626202 26.3461564,40.3106978 L43.3106978,23.3461564 C44.8771021,21.7797521 44.8758057,19.2483887 43.3137085,17.6862915 C41.7547899,16.1273729 39.2176035,16.1255422 37.6538436,17.6893022 L23.5,31.8431458 Z M27,53 C41.3594035,53 53,41.3594035 53,27 C53,12.6405965 41.3594035,1 27,1 C12.6405965,1 1,12.6405965 1,27 C1,41.3594035 12.6405965,53 27,53 Z\" id=\"Oval-2\" stroke-opacity=\"0.198794158\" stroke=\"#747474\" fill-opacity=\"0.816519475\" fill=\"#FFFFFF\" sketch:type=\"MSShapeGroup\"></path>\n      </g>\n    </svg>\n  </div>\n  <div class=\"dz-error-mark\">\n    <svg width=\"54px\" height=\"54px\" viewBox=\"0 0 54 54\" version=\"1.1\" xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\" xmlns:sketch=\"http://www.bohemiancoding.com/sketch/ns\">\n      <title>Error</title>\n      <defs></defs>\n      <g id=\"Page-1\" stroke=\"none\" stroke-width=\"1\" fill=\"none\" fill-rule=\"evenodd\" sketch:type=\"MSPage\">\n        <g id=\"Check-+-Oval-2\" sketch:type=\"MSLayerGroup\" stroke=\"#747474\" stroke-opacity=\"0.198794158\" fill=\"#FFFFFF\" fill-opacity=\"0.816519475\">\n          <path d=\"M32.6568542,29 L38.3106978,23.3461564 C39.8771021,21.7797521 39.8758057,19.2483887 38.3137085,17.6862915 C36.7547899,16.1273729 34.2176035,16.1255422 32.6538436,17.6893022 L27,23.3431458 L21.3461564,17.6893022 C19.7823965,16.1255422 17.2452101,16.1273729 15.6862915,17.6862915 C14.1241943,19.2483887 14.1228979,21.7797521 15.6893022,23.3461564 L21.3431458,29 L15.6893022,34.6538436 C14.1228979,36.2202479 14.1241943,38.7516113 15.6862915,40.3137085 C17.2452101,41.8726271 19.7823965,41.8744578 21.3461564,40.3106978 L27,34.6568542 L32.6538436,40.3106978 C34.2176035,41.8744578 36.7547899,41.8726271 38.3137085,40.3137085 C39.8758057,38.7516113 39.8771021,36.2202479 38.3106978,34.6538436 L32.6568542,29 Z M27,53 C41.3594035,53 53,41.3594035 53,27 C53,12.6405965 41.3594035,1 27,1 C12.6405965,1 1,12.6405965 1,27 C1,41.3594035 12.6405965,53 27,53 Z\" id=\"Oval-2\" sketch:type=\"MSShapeGroup\"></path>\n        </g>\n      </g>\n    </svg>\n  </div>\n</div>"
	    };
	
	    extend = function() {
	      var key, object, objects, target, val, _i, _len;
	      target = arguments[0], objects = 2 <= arguments.length ? __slice.call(arguments, 1) : [];
	      for (_i = 0, _len = objects.length; _i < _len; _i++) {
	        object = objects[_i];
	        for (key in object) {
	          val = object[key];
	          target[key] = val;
	        }
	      }
	      return target;
	    };
	
	    function Dropzone(element, options) {
	      var elementOptions, fallback, _ref;
	      this.element = element;
	      this.version = Dropzone.version;
	      this.defaultOptions.previewTemplate = this.defaultOptions.previewTemplate.replace(/\n*/g, "");
	      this.clickableElements = [];
	      this.listeners = [];
	      this.files = [];
	      if (typeof this.element === "string") {
	        this.element = document.querySelector(this.element);
	      }
	      if (!(this.element && (this.element.nodeType != null))) {
	        throw new Error("Invalid dropzone element.");
	      }
	      if (this.element.dropzone) {
	        throw new Error("Dropzone already attached.");
	      }
	      Dropzone.instances.push(this);
	      this.element.dropzone = this;
	      elementOptions = (_ref = Dropzone.optionsForElement(this.element)) != null ? _ref : {};
	      this.options = extend({}, this.defaultOptions, elementOptions, options != null ? options : {});
	      if (this.options.forceFallback || !Dropzone.isBrowserSupported()) {
	        return this.options.fallback.call(this);
	      }
	      if (this.options.url == null) {
	        this.options.url = this.element.getAttribute("action");
	      }
	      if (!this.options.url) {
	        throw new Error("No URL provided.");
	      }
	      if (this.options.acceptedFiles && this.options.acceptedMimeTypes) {
	        throw new Error("You can't provide both 'acceptedFiles' and 'acceptedMimeTypes'. 'acceptedMimeTypes' is deprecated.");
	      }
	      if (this.options.acceptedMimeTypes) {
	        this.options.acceptedFiles = this.options.acceptedMimeTypes;
	        delete this.options.acceptedMimeTypes;
	      }
	      this.options.method = this.options.method.toUpperCase();
	      if ((fallback = this.getExistingFallback()) && fallback.parentNode) {
	        fallback.parentNode.removeChild(fallback);
	      }
	      if (this.options.previewsContainer !== false) {
	        if (this.options.previewsContainer) {
	          this.previewsContainer = Dropzone.getElement(this.options.previewsContainer, "previewsContainer");
	        } else {
	          this.previewsContainer = this.element;
	        }
	      }
	      if (this.options.clickable) {
	        if (this.options.clickable === true) {
	          this.clickableElements = [this.element];
	        } else {
	          this.clickableElements = Dropzone.getElements(this.options.clickable, "clickable");
	        }
	      }
	      this.init();
	    }
	
	    Dropzone.prototype.getAcceptedFiles = function() {
	      var file, _i, _len, _ref, _results;
	      _ref = this.files;
	      _results = [];
	      for (_i = 0, _len = _ref.length; _i < _len; _i++) {
	        file = _ref[_i];
	        if (file.accepted) {
	          _results.push(file);
	        }
	      }
	      return _results;
	    };
	
	    Dropzone.prototype.getRejectedFiles = function() {
	      var file, _i, _len, _ref, _results;
	      _ref = this.files;
	      _results = [];
	      for (_i = 0, _len = _ref.length; _i < _len; _i++) {
	        file = _ref[_i];
	        if (!file.accepted) {
	          _results.push(file);
	        }
	      }
	      return _results;
	    };
	
	    Dropzone.prototype.getFilesWithStatus = function(status) {
	      var file, _i, _len, _ref, _results;
	      _ref = this.files;
	      _results = [];
	      for (_i = 0, _len = _ref.length; _i < _len; _i++) {
	        file = _ref[_i];
	        if (file.status === status) {
	          _results.push(file);
	        }
	      }
	      return _results;
	    };
	
	    Dropzone.prototype.getQueuedFiles = function() {
	      return this.getFilesWithStatus(Dropzone.QUEUED);
	    };
	
	    Dropzone.prototype.getUploadingFiles = function() {
	      return this.getFilesWithStatus(Dropzone.UPLOADING);
	    };
	
	    Dropzone.prototype.getAddedFiles = function() {
	      return this.getFilesWithStatus(Dropzone.ADDED);
	    };
	
	    Dropzone.prototype.getActiveFiles = function() {
	      var file, _i, _len, _ref, _results;
	      _ref = this.files;
	      _results = [];
	      for (_i = 0, _len = _ref.length; _i < _len; _i++) {
	        file = _ref[_i];
	        if (file.status === Dropzone.UPLOADING || file.status === Dropzone.QUEUED) {
	          _results.push(file);
	        }
	      }
	      return _results;
	    };
	
	    Dropzone.prototype.init = function() {
	      var eventName, noPropagation, setupHiddenFileInput, _i, _len, _ref, _ref1;
	      if (this.element.tagName === "form") {
	        this.element.setAttribute("enctype", "multipart/form-data");
	      }
	      if (this.element.classList.contains("dropzone") && !this.element.querySelector(".dz-message")) {
	        this.element.appendChild(Dropzone.createElement("<div class=\"dz-default dz-message\"><span>" + this.options.dictDefaultMessage + "</span></div>"));
	      }
	      if (this.clickableElements.length) {
	        setupHiddenFileInput = (function(_this) {
	          return function() {
	            if (_this.hiddenFileInput) {
	              _this.hiddenFileInput.parentNode.removeChild(_this.hiddenFileInput);
	            }
	            _this.hiddenFileInput = document.createElement("input");
	            _this.hiddenFileInput.setAttribute("type", "file");
	            if ((_this.options.maxFiles == null) || _this.options.maxFiles > 1) {
	              _this.hiddenFileInput.setAttribute("multiple", "multiple");
	            }
	            _this.hiddenFileInput.className = "dz-hidden-input";
	            if (_this.options.acceptedFiles != null) {
	              _this.hiddenFileInput.setAttribute("accept", _this.options.acceptedFiles);
	            }
	            if (_this.options.capture != null) {
	              _this.hiddenFileInput.setAttribute("capture", _this.options.capture);
	            }
	            _this.hiddenFileInput.style.visibility = "hidden";
	            _this.hiddenFileInput.style.position = "absolute";
	            _this.hiddenFileInput.style.top = "0";
	            _this.hiddenFileInput.style.left = "0";
	            _this.hiddenFileInput.style.height = "0";
	            _this.hiddenFileInput.style.width = "0";
	            document.querySelector(_this.options.hiddenInputContainer).appendChild(_this.hiddenFileInput);
	            return _this.hiddenFileInput.addEventListener("change", function() {
	              var file, files, _i, _len;
	              files = _this.hiddenFileInput.files;
	              if (files.length) {
	                for (_i = 0, _len = files.length; _i < _len; _i++) {
	                  file = files[_i];
	                  _this.addFile(file);
	                }
	              }
	              _this.emit("addedfiles", files);
	              return setupHiddenFileInput();
	            });
	          };
	        })(this);
	        setupHiddenFileInput();
	      }
	      this.URL = (_ref = window.URL) != null ? _ref : window.webkitURL;
	      _ref1 = this.events;
	      for (_i = 0, _len = _ref1.length; _i < _len; _i++) {
	        eventName = _ref1[_i];
	        this.on(eventName, this.options[eventName]);
	      }
	      this.on("uploadprogress", (function(_this) {
	        return function() {
	          return _this.updateTotalUploadProgress();
	        };
	      })(this));
	      this.on("removedfile", (function(_this) {
	        return function() {
	          return _this.updateTotalUploadProgress();
	        };
	      })(this));
	      this.on("canceled", (function(_this) {
	        return function(file) {
	          return _this.emit("complete", file);
	        };
	      })(this));
	      this.on("complete", (function(_this) {
	        return function(file) {
	          if (_this.getAddedFiles().length === 0 && _this.getUploadingFiles().length === 0 && _this.getQueuedFiles().length === 0) {
	            return setTimeout((function() {
	              return _this.emit("queuecomplete");
	            }), 0);
	          }
	        };
	      })(this));
	      noPropagation = function(e) {
	        e.stopPropagation();
	        if (e.preventDefault) {
	          return e.preventDefault();
	        } else {
	          return e.returnValue = false;
	        }
	      };
	      this.listeners = [
	        {
	          element: this.element,
	          events: {
	            "dragstart": (function(_this) {
	              return function(e) {
	                return _this.emit("dragstart", e);
	              };
	            })(this),
	            "dragenter": (function(_this) {
	              return function(e) {
	                noPropagation(e);
	                return _this.emit("dragenter", e);
	              };
	            })(this),
	            "dragover": (function(_this) {
	              return function(e) {
	                var efct;
	                try {
	                  efct = e.dataTransfer.effectAllowed;
	                } catch (_error) {}
	                e.dataTransfer.dropEffect = 'move' === efct || 'linkMove' === efct ? 'move' : 'copy';
	                noPropagation(e);
	                return _this.emit("dragover", e);
	              };
	            })(this),
	            "dragleave": (function(_this) {
	              return function(e) {
	                return _this.emit("dragleave", e);
	              };
	            })(this),
	            "drop": (function(_this) {
	              return function(e) {
	                noPropagation(e);
	                return _this.drop(e);
	              };
	            })(this),
	            "dragend": (function(_this) {
	              return function(e) {
	                return _this.emit("dragend", e);
	              };
	            })(this)
	          }
	        }
	      ];
	      this.clickableElements.forEach((function(_this) {
	        return function(clickableElement) {
	          return _this.listeners.push({
	            element: clickableElement,
	            events: {
	              "click": function(evt) {
	                if ((clickableElement !== _this.element) || (evt.target === _this.element || Dropzone.elementInside(evt.target, _this.element.querySelector(".dz-message")))) {
	                  _this.hiddenFileInput.click();
	                }
	                return true;
	              }
	            }
	          });
	        };
	      })(this));
	      this.enable();
	      return this.options.init.call(this);
	    };
	
	    Dropzone.prototype.destroy = function() {
	      var _ref;
	      this.disable();
	      this.removeAllFiles(true);
	      if ((_ref = this.hiddenFileInput) != null ? _ref.parentNode : void 0) {
	        this.hiddenFileInput.parentNode.removeChild(this.hiddenFileInput);
	        this.hiddenFileInput = null;
	      }
	      delete this.element.dropzone;
	      return Dropzone.instances.splice(Dropzone.instances.indexOf(this), 1);
	    };
	
	    Dropzone.prototype.updateTotalUploadProgress = function() {
	      var activeFiles, file, totalBytes, totalBytesSent, totalUploadProgress, _i, _len, _ref;
	      totalBytesSent = 0;
	      totalBytes = 0;
	      activeFiles = this.getActiveFiles();
	      if (activeFiles.length) {
	        _ref = this.getActiveFiles();
	        for (_i = 0, _len = _ref.length; _i < _len; _i++) {
	          file = _ref[_i];
	          totalBytesSent += file.upload.bytesSent;
	          totalBytes += file.upload.total;
	        }
	        totalUploadProgress = 100 * totalBytesSent / totalBytes;
	      } else {
	        totalUploadProgress = 100;
	      }
	      return this.emit("totaluploadprogress", totalUploadProgress, totalBytes, totalBytesSent);
	    };
	
	    Dropzone.prototype._getParamName = function(n) {
	      if (typeof this.options.paramName === "function") {
	        return this.options.paramName(n);
	      } else {
	        return "" + this.options.paramName + (this.options.uploadMultiple ? "[" + n + "]" : "");
	      }
	    };
	
	    Dropzone.prototype._renameFilename = function(name) {
	      if (typeof this.options.renameFilename !== "function") {
	        return name;
	      }
	      return this.options.renameFilename(name);
	    };
	
	    Dropzone.prototype.getFallbackForm = function() {
	      var existingFallback, fields, fieldsString, form;
	      if (existingFallback = this.getExistingFallback()) {
	        return existingFallback;
	      }
	      fieldsString = "<div class=\"dz-fallback\">";
	      if (this.options.dictFallbackText) {
	        fieldsString += "<p>" + this.options.dictFallbackText + "</p>";
	      }
	      fieldsString += "<input type=\"file\" name=\"" + (this._getParamName(0)) + "\" " + (this.options.uploadMultiple ? 'multiple="multiple"' : void 0) + " /><input type=\"submit\" value=\"Upload!\"></div>";
	      fields = Dropzone.createElement(fieldsString);
	      if (this.element.tagName !== "FORM") {
	        form = Dropzone.createElement("<form action=\"" + this.options.url + "\" enctype=\"multipart/form-data\" method=\"" + this.options.method + "\"></form>");
	        form.appendChild(fields);
	      } else {
	        this.element.setAttribute("enctype", "multipart/form-data");
	        this.element.setAttribute("method", this.options.method);
	      }
	      return form != null ? form : fields;
	    };
	
	    Dropzone.prototype.getExistingFallback = function() {
	      var fallback, getFallback, tagName, _i, _len, _ref;
	      getFallback = function(elements) {
	        var el, _i, _len;
	        for (_i = 0, _len = elements.length; _i < _len; _i++) {
	          el = elements[_i];
	          if (/(^| )fallback($| )/.test(el.className)) {
	            return el;
	          }
	        }
	      };
	      _ref = ["div", "form"];
	      for (_i = 0, _len = _ref.length; _i < _len; _i++) {
	        tagName = _ref[_i];
	        if (fallback = getFallback(this.element.getElementsByTagName(tagName))) {
	          return fallback;
	        }
	      }
	    };
	
	    Dropzone.prototype.setupEventListeners = function() {
	      var elementListeners, event, listener, _i, _len, _ref, _results;
	      _ref = this.listeners;
	      _results = [];
	      for (_i = 0, _len = _ref.length; _i < _len; _i++) {
	        elementListeners = _ref[_i];
	        _results.push((function() {
	          var _ref1, _results1;
	          _ref1 = elementListeners.events;
	          _results1 = [];
	          for (event in _ref1) {
	            listener = _ref1[event];
	            _results1.push(elementListeners.element.addEventListener(event, listener, false));
	          }
	          return _results1;
	        })());
	      }
	      return _results;
	    };
	
	    Dropzone.prototype.removeEventListeners = function() {
	      var elementListeners, event, listener, _i, _len, _ref, _results;
	      _ref = this.listeners;
	      _results = [];
	      for (_i = 0, _len = _ref.length; _i < _len; _i++) {
	        elementListeners = _ref[_i];
	        _results.push((function() {
	          var _ref1, _results1;
	          _ref1 = elementListeners.events;
	          _results1 = [];
	          for (event in _ref1) {
	            listener = _ref1[event];
	            _results1.push(elementListeners.element.removeEventListener(event, listener, false));
	          }
	          return _results1;
	        })());
	      }
	      return _results;
	    };
	
	    Dropzone.prototype.disable = function() {
	      var file, _i, _len, _ref, _results;
	      this.clickableElements.forEach(function(element) {
	        return element.classList.remove("dz-clickable");
	      });
	      this.removeEventListeners();
	      _ref = this.files;
	      _results = [];
	      for (_i = 0, _len = _ref.length; _i < _len; _i++) {
	        file = _ref[_i];
	        _results.push(this.cancelUpload(file));
	      }
	      return _results;
	    };
	
	    Dropzone.prototype.enable = function() {
	      this.clickableElements.forEach(function(element) {
	        return element.classList.add("dz-clickable");
	      });
	      return this.setupEventListeners();
	    };
	
	    Dropzone.prototype.filesize = function(size) {
	      var cutoff, i, selectedSize, selectedUnit, unit, units, _i, _len;
	      selectedSize = 0;
	      selectedUnit = "b";
	      if (size > 0) {
	        units = ['TB', 'GB', 'MB', 'KB', 'b'];
	        for (i = _i = 0, _len = units.length; _i < _len; i = ++_i) {
	          unit = units[i];
	          cutoff = Math.pow(this.options.filesizeBase, 4 - i) / 10;
	          if (size >= cutoff) {
	            selectedSize = size / Math.pow(this.options.filesizeBase, 4 - i);
	            selectedUnit = unit;
	            break;
	          }
	        }
	        selectedSize = Math.round(10 * selectedSize) / 10;
	      }
	      return "<strong>" + selectedSize + "</strong> " + selectedUnit;
	    };
	
	    Dropzone.prototype._updateMaxFilesReachedClass = function() {
	      if ((this.options.maxFiles != null) && this.getAcceptedFiles().length >= this.options.maxFiles) {
	        if (this.getAcceptedFiles().length === this.options.maxFiles) {
	          this.emit('maxfilesreached', this.files);
	        }
	        return this.element.classList.add("dz-max-files-reached");
	      } else {
	        return this.element.classList.remove("dz-max-files-reached");
	      }
	    };
	
	    Dropzone.prototype.drop = function(e) {
	      var files, items;
	      if (!e.dataTransfer) {
	        return;
	      }
	      this.emit("drop", e);
	      files = e.dataTransfer.files;
	      this.emit("addedfiles", files);
	      if (files.length) {
	        items = e.dataTransfer.items;
	        if (items && items.length && (items[0].webkitGetAsEntry != null)) {
	          this._addFilesFromItems(items);
	        } else {
	          this.handleFiles(files);
	        }
	      }
	    };
	
	    Dropzone.prototype.paste = function(e) {
	      var items, _ref;
	      if ((e != null ? (_ref = e.clipboardData) != null ? _ref.items : void 0 : void 0) == null) {
	        return;
	      }
	      this.emit("paste", e);
	      items = e.clipboardData.items;
	      if (items.length) {
	        return this._addFilesFromItems(items);
	      }
	    };
	
	    Dropzone.prototype.handleFiles = function(files) {
	      var file, _i, _len, _results;
	      _results = [];
	      for (_i = 0, _len = files.length; _i < _len; _i++) {
	        file = files[_i];
	        _results.push(this.addFile(file));
	      }
	      return _results;
	    };
	
	    Dropzone.prototype._addFilesFromItems = function(items) {
	      var entry, item, _i, _len, _results;
	      _results = [];
	      for (_i = 0, _len = items.length; _i < _len; _i++) {
	        item = items[_i];
	        if ((item.webkitGetAsEntry != null) && (entry = item.webkitGetAsEntry())) {
	          if (entry.isFile) {
	            _results.push(this.addFile(item.getAsFile()));
	          } else if (entry.isDirectory) {
	            _results.push(this._addFilesFromDirectory(entry, entry.name));
	          } else {
	            _results.push(void 0);
	          }
	        } else if (item.getAsFile != null) {
	          if ((item.kind == null) || item.kind === "file") {
	            _results.push(this.addFile(item.getAsFile()));
	          } else {
	            _results.push(void 0);
	          }
	        } else {
	          _results.push(void 0);
	        }
	      }
	      return _results;
	    };
	
	    Dropzone.prototype._addFilesFromDirectory = function(directory, path) {
	      var dirReader, errorHandler, readEntries;
	      dirReader = directory.createReader();
	      errorHandler = function(error) {
	        return typeof console !== "undefined" && console !== null ? typeof console.log === "function" ? console.log(error) : void 0 : void 0;
	      };
	      readEntries = (function(_this) {
	        return function() {
	          return dirReader.readEntries(function(entries) {
	            var entry, _i, _len;
	            if (entries.length > 0) {
	              for (_i = 0, _len = entries.length; _i < _len; _i++) {
	                entry = entries[_i];
	                if (entry.isFile) {
	                  entry.file(function(file) {
	                    if (_this.options.ignoreHiddenFiles && file.name.substring(0, 1) === '.') {
	                      return;
	                    }
	                    file.fullPath = "" + path + "/" + file.name;
	                    return _this.addFile(file);
	                  });
	                } else if (entry.isDirectory) {
	                  _this._addFilesFromDirectory(entry, "" + path + "/" + entry.name);
	                }
	              }
	              readEntries();
	            }
	            return null;
	          }, errorHandler);
	        };
	      })(this);
	      return readEntries();
	    };
	
	    Dropzone.prototype.accept = function(file, done) {
	      if (file.size > this.options.maxFilesize * 1024 * 1024) {
	        return done(this.options.dictFileTooBig.replace("{{filesize}}", Math.round(file.size / 1024 / 10.24) / 100).replace("{{maxFilesize}}", this.options.maxFilesize));
	      } else if (!Dropzone.isValidFile(file, this.options.acceptedFiles)) {
	        return done(this.options.dictInvalidFileType);
	      } else if ((this.options.maxFiles != null) && this.getAcceptedFiles().length >= this.options.maxFiles) {
	        done(this.options.dictMaxFilesExceeded.replace("{{maxFiles}}", this.options.maxFiles));
	        return this.emit("maxfilesexceeded", file);
	      } else {
	        return this.options.accept.call(this, file, done);
	      }
	    };
	
	    Dropzone.prototype.addFile = function(file) {
	      file.upload = {
	        progress: 0,
	        total: file.size,
	        bytesSent: 0
	      };
	      this.files.push(file);
	      file.status = Dropzone.ADDED;
	      this.emit("addedfile", file);
	      this._enqueueThumbnail(file);
	      return this.accept(file, (function(_this) {
	        return function(error) {
	          if (error) {
	            file.accepted = false;
	            _this._errorProcessing([file], error);
	          } else {
	            file.accepted = true;
	            if (_this.options.autoQueue) {
	              _this.enqueueFile(file);
	            }
	          }
	          return _this._updateMaxFilesReachedClass();
	        };
	      })(this));
	    };
	
	    Dropzone.prototype.enqueueFiles = function(files) {
	      var file, _i, _len;
	      for (_i = 0, _len = files.length; _i < _len; _i++) {
	        file = files[_i];
	        this.enqueueFile(file);
	      }
	      return null;
	    };
	
	    Dropzone.prototype.enqueueFile = function(file) {
	      if (file.status === Dropzone.ADDED && file.accepted === true) {
	        file.status = Dropzone.QUEUED;
	        if (this.options.autoProcessQueue) {
	          return setTimeout(((function(_this) {
	            return function() {
	              return _this.processQueue();
	            };
	          })(this)), 0);
	        }
	      } else {
	        throw new Error("This file can't be queued because it has already been processed or was rejected.");
	      }
	    };
	
	    Dropzone.prototype._thumbnailQueue = [];
	
	    Dropzone.prototype._processingThumbnail = false;
	
	    Dropzone.prototype._enqueueThumbnail = function(file) {
	      if (this.options.createImageThumbnails && file.type.match(/image.*/) && file.size <= this.options.maxThumbnailFilesize * 1024 * 1024) {
	        this._thumbnailQueue.push(file);
	        return setTimeout(((function(_this) {
	          return function() {
	            return _this._processThumbnailQueue();
	          };
	        })(this)), 0);
	      }
	    };
	
	    Dropzone.prototype._processThumbnailQueue = function() {
	      if (this._processingThumbnail || this._thumbnailQueue.length === 0) {
	        return;
	      }
	      this._processingThumbnail = true;
	      return this.createThumbnail(this._thumbnailQueue.shift(), (function(_this) {
	        return function() {
	          _this._processingThumbnail = false;
	          return _this._processThumbnailQueue();
	        };
	      })(this));
	    };
	
	    Dropzone.prototype.removeFile = function(file) {
	      if (file.status === Dropzone.UPLOADING) {
	        this.cancelUpload(file);
	      }
	      this.files = without(this.files, file);
	      this.emit("removedfile", file);
	      if (this.files.length === 0) {
	        return this.emit("reset");
	      }
	    };
	
	    Dropzone.prototype.removeAllFiles = function(cancelIfNecessary) {
	      var file, _i, _len, _ref;
	      if (cancelIfNecessary == null) {
	        cancelIfNecessary = false;
	      }
	      _ref = this.files.slice();
	      for (_i = 0, _len = _ref.length; _i < _len; _i++) {
	        file = _ref[_i];
	        if (file.status !== Dropzone.UPLOADING || cancelIfNecessary) {
	          this.removeFile(file);
	        }
	      }
	      return null;
	    };
	
	    Dropzone.prototype.createThumbnail = function(file, callback) {
	      var fileReader;
	      fileReader = new FileReader;
	      fileReader.onload = (function(_this) {
	        return function() {
	          if (file.type === "image/svg+xml") {
	            _this.emit("thumbnail", file, fileReader.result);
	            if (callback != null) {
	              callback();
	            }
	            return;
	          }
	          return _this.createThumbnailFromUrl(file, fileReader.result, callback);
	        };
	      })(this);
	      return fileReader.readAsDataURL(file);
	    };
	
	    Dropzone.prototype.createThumbnailFromUrl = function(file, imageUrl, callback, crossOrigin) {
	      var img;
	      img = document.createElement("img");
	      if (crossOrigin) {
	        img.crossOrigin = crossOrigin;
	      }
	      img.onload = (function(_this) {
	        return function() {
	          var canvas, ctx, resizeInfo, thumbnail, _ref, _ref1, _ref2, _ref3;
	          file.width = img.width;
	          file.height = img.height;
	          resizeInfo = _this.options.resize.call(_this, file);
	          if (resizeInfo.trgWidth == null) {
	            resizeInfo.trgWidth = resizeInfo.optWidth;
	          }
	          if (resizeInfo.trgHeight == null) {
	            resizeInfo.trgHeight = resizeInfo.optHeight;
	          }
	          canvas = document.createElement("canvas");
	          ctx = canvas.getContext("2d");
	          canvas.width = resizeInfo.trgWidth;
	          canvas.height = resizeInfo.trgHeight;
	          drawImageIOSFix(ctx, img, (_ref = resizeInfo.srcX) != null ? _ref : 0, (_ref1 = resizeInfo.srcY) != null ? _ref1 : 0, resizeInfo.srcWidth, resizeInfo.srcHeight, (_ref2 = resizeInfo.trgX) != null ? _ref2 : 0, (_ref3 = resizeInfo.trgY) != null ? _ref3 : 0, resizeInfo.trgWidth, resizeInfo.trgHeight);
	          thumbnail = canvas.toDataURL("image/png");
	          _this.emit("thumbnail", file, thumbnail);
	          if (callback != null) {
	            return callback();
	          }
	        };
	      })(this);
	      if (callback != null) {
	        img.onerror = callback;
	      }
	      return img.src = imageUrl;
	    };
	
	    Dropzone.prototype.processQueue = function() {
	      var i, parallelUploads, processingLength, queuedFiles;
	      parallelUploads = this.options.parallelUploads;
	      processingLength = this.getUploadingFiles().length;
	      i = processingLength;
	      if (processingLength >= parallelUploads) {
	        return;
	      }
	      queuedFiles = this.getQueuedFiles();
	      if (!(queuedFiles.length > 0)) {
	        return;
	      }
	      if (this.options.uploadMultiple) {
	        return this.processFiles(queuedFiles.slice(0, parallelUploads - processingLength));
	      } else {
	        while (i < parallelUploads) {
	          if (!queuedFiles.length) {
	            return;
	          }
	          this.processFile(queuedFiles.shift());
	          i++;
	        }
	      }
	    };
	
	    Dropzone.prototype.processFile = function(file) {
	      return this.processFiles([file]);
	    };
	
	    Dropzone.prototype.processFiles = function(files) {
	      var file, _i, _len;
	      for (_i = 0, _len = files.length; _i < _len; _i++) {
	        file = files[_i];
	        file.processing = true;
	        file.status = Dropzone.UPLOADING;
	        this.emit("processing", file);
	      }
	      if (this.options.uploadMultiple) {
	        this.emit("processingmultiple", files);
	      }
	      return this.uploadFiles(files);
	    };
	
	    Dropzone.prototype._getFilesWithXhr = function(xhr) {
	      var file, files;
	      return files = (function() {
	        var _i, _len, _ref, _results;
	        _ref = this.files;
	        _results = [];
	        for (_i = 0, _len = _ref.length; _i < _len; _i++) {
	          file = _ref[_i];
	          if (file.xhr === xhr) {
	            _results.push(file);
	          }
	        }
	        return _results;
	      }).call(this);
	    };
	
	    Dropzone.prototype.cancelUpload = function(file) {
	      var groupedFile, groupedFiles, _i, _j, _len, _len1, _ref;
	      if (file.status === Dropzone.UPLOADING) {
	        groupedFiles = this._getFilesWithXhr(file.xhr);
	        for (_i = 0, _len = groupedFiles.length; _i < _len; _i++) {
	          groupedFile = groupedFiles[_i];
	          groupedFile.status = Dropzone.CANCELED;
	        }
	        file.xhr.abort();
	        for (_j = 0, _len1 = groupedFiles.length; _j < _len1; _j++) {
	          groupedFile = groupedFiles[_j];
	          this.emit("canceled", groupedFile);
	        }
	        if (this.options.uploadMultiple) {
	          this.emit("canceledmultiple", groupedFiles);
	        }
	      } else if ((_ref = file.status) === Dropzone.ADDED || _ref === Dropzone.QUEUED) {
	        file.status = Dropzone.CANCELED;
	        this.emit("canceled", file);
	        if (this.options.uploadMultiple) {
	          this.emit("canceledmultiple", [file]);
	        }
	      }
	      if (this.options.autoProcessQueue) {
	        return this.processQueue();
	      }
	    };
	
	    resolveOption = function() {
	      var args, option;
	      option = arguments[0], args = 2 <= arguments.length ? __slice.call(arguments, 1) : [];
	      if (typeof option === 'function') {
	        return option.apply(this, args);
	      }
	      return option;
	    };
	
	    Dropzone.prototype.uploadFile = function(file) {
	      return this.uploadFiles([file]);
	    };
	
	    Dropzone.prototype.uploadFiles = function(files) {
	      var file, formData, handleError, headerName, headerValue, headers, i, input, inputName, inputType, key, method, option, progressObj, response, updateProgress, url, value, xhr, _i, _j, _k, _l, _len, _len1, _len2, _len3, _m, _ref, _ref1, _ref2, _ref3, _ref4, _ref5;
	      xhr = new XMLHttpRequest();
	      for (_i = 0, _len = files.length; _i < _len; _i++) {
	        file = files[_i];
	        file.xhr = xhr;
	      }
	      method = resolveOption(this.options.method, files);
	      url = resolveOption(this.options.url, files);
	      xhr.open(method, url, true);
	      xhr.withCredentials = !!this.options.withCredentials;
	      response = null;
	      handleError = (function(_this) {
	        return function() {
	          var _j, _len1, _results;
	          _results = [];
	          for (_j = 0, _len1 = files.length; _j < _len1; _j++) {
	            file = files[_j];
	            _results.push(_this._errorProcessing(files, response || _this.options.dictResponseError.replace("{{statusCode}}", xhr.status), xhr));
	          }
	          return _results;
	        };
	      })(this);
	      updateProgress = (function(_this) {
	        return function(e) {
	          var allFilesFinished, progress, _j, _k, _l, _len1, _len2, _len3, _results;
	          if (e != null) {
	            progress = 100 * e.loaded / e.total;
	            for (_j = 0, _len1 = files.length; _j < _len1; _j++) {
	              file = files[_j];
	              file.upload = {
	                progress: progress,
	                total: e.total,
	                bytesSent: e.loaded
	              };
	            }
	          } else {
	            allFilesFinished = true;
	            progress = 100;
	            for (_k = 0, _len2 = files.length; _k < _len2; _k++) {
	              file = files[_k];
	              if (!(file.upload.progress === 100 && file.upload.bytesSent === file.upload.total)) {
	                allFilesFinished = false;
	              }
	              file.upload.progress = progress;
	              file.upload.bytesSent = file.upload.total;
	            }
	            if (allFilesFinished) {
	              return;
	            }
	          }
	          _results = [];
	          for (_l = 0, _len3 = files.length; _l < _len3; _l++) {
	            file = files[_l];
	            _results.push(_this.emit("uploadprogress", file, progress, file.upload.bytesSent));
	          }
	          return _results;
	        };
	      })(this);
	      xhr.onload = (function(_this) {
	        return function(e) {
	          var _ref;
	          if (files[0].status === Dropzone.CANCELED) {
	            return;
	          }
	          if (xhr.readyState !== 4) {
	            return;
	          }
	          response = xhr.responseText;
	          if (xhr.getResponseHeader("content-type") && ~xhr.getResponseHeader("content-type").indexOf("application/json")) {
	            try {
	              response = JSON.parse(response);
	            } catch (_error) {
	              e = _error;
	              response = "Invalid JSON response from server.";
	            }
	          }
	          updateProgress();
	          if (!((200 <= (_ref = xhr.status) && _ref < 300))) {
	            return handleError();
	          } else {
	            return _this._finished(files, response, e);
	          }
	        };
	      })(this);
	      xhr.onerror = (function(_this) {
	        return function() {
	          if (files[0].status === Dropzone.CANCELED) {
	            return;
	          }
	          return handleError();
	        };
	      })(this);
	      progressObj = (_ref = xhr.upload) != null ? _ref : xhr;
	      progressObj.onprogress = updateProgress;
	      headers = {
	        "Accept": "application/json",
	        "Cache-Control": "no-cache",
	        "X-Requested-With": "XMLHttpRequest"
	      };
	      if (this.options.headers) {
	        extend(headers, this.options.headers);
	      }
	      for (headerName in headers) {
	        headerValue = headers[headerName];
	        if (headerValue) {
	          xhr.setRequestHeader(headerName, headerValue);
	        }
	      }
	      formData = new FormData();
	      if (this.options.params) {
	        _ref1 = this.options.params;
	        for (key in _ref1) {
	          value = _ref1[key];
	          formData.append(key, value);
	        }
	      }
	      for (_j = 0, _len1 = files.length; _j < _len1; _j++) {
	        file = files[_j];
	        this.emit("sending", file, xhr, formData);
	      }
	      if (this.options.uploadMultiple) {
	        this.emit("sendingmultiple", files, xhr, formData);
	      }
	      if (this.element.tagName === "FORM") {
	        _ref2 = this.element.querySelectorAll("input, textarea, select, button");
	        for (_k = 0, _len2 = _ref2.length; _k < _len2; _k++) {
	          input = _ref2[_k];
	          inputName = input.getAttribute("name");
	          inputType = input.getAttribute("type");
	          if (input.tagName === "SELECT" && input.hasAttribute("multiple")) {
	            _ref3 = input.options;
	            for (_l = 0, _len3 = _ref3.length; _l < _len3; _l++) {
	              option = _ref3[_l];
	              if (option.selected) {
	                formData.append(inputName, option.value);
	              }
	            }
	          } else if (!inputType || ((_ref4 = inputType.toLowerCase()) !== "checkbox" && _ref4 !== "radio") || input.checked) {
	            formData.append(inputName, input.value);
	          }
	        }
	      }
	      for (i = _m = 0, _ref5 = files.length - 1; 0 <= _ref5 ? _m <= _ref5 : _m >= _ref5; i = 0 <= _ref5 ? ++_m : --_m) {
	        formData.append(this._getParamName(i), files[i], this._renameFilename(files[i].name));
	      }
	      return this.submitRequest(xhr, formData, files);
	    };
	
	    Dropzone.prototype.submitRequest = function(xhr, formData, files) {
	      return xhr.send(formData);
	    };
	
	    Dropzone.prototype._finished = function(files, responseText, e) {
	      var file, _i, _len;
	      for (_i = 0, _len = files.length; _i < _len; _i++) {
	        file = files[_i];
	        file.status = Dropzone.SUCCESS;
	        this.emit("success", file, responseText, e);
	        this.emit("complete", file);
	      }
	      if (this.options.uploadMultiple) {
	        this.emit("successmultiple", files, responseText, e);
	        this.emit("completemultiple", files);
	      }
	      if (this.options.autoProcessQueue) {
	        return this.processQueue();
	      }
	    };
	
	    Dropzone.prototype._errorProcessing = function(files, message, xhr) {
	      var file, _i, _len;
	      for (_i = 0, _len = files.length; _i < _len; _i++) {
	        file = files[_i];
	        file.status = Dropzone.ERROR;
	        this.emit("error", file, message, xhr);
	        this.emit("complete", file);
	      }
	      if (this.options.uploadMultiple) {
	        this.emit("errormultiple", files, message, xhr);
	        this.emit("completemultiple", files);
	      }
	      if (this.options.autoProcessQueue) {
	        return this.processQueue();
	      }
	    };
	
	    return Dropzone;
	
	  })(Emitter);
	
	  Dropzone.version = "4.3.0";
	
	  Dropzone.options = {};
	
	  Dropzone.optionsForElement = function(element) {
	    if (element.getAttribute("id")) {
	      return Dropzone.options[camelize(element.getAttribute("id"))];
	    } else {
	      return void 0;
	    }
	  };
	
	  Dropzone.instances = [];
	
	  Dropzone.forElement = function(element) {
	    if (typeof element === "string") {
	      element = document.querySelector(element);
	    }
	    if ((element != null ? element.dropzone : void 0) == null) {
	      throw new Error("No Dropzone found for given element. This is probably because you're trying to access it before Dropzone had the time to initialize. Use the `init` option to setup any additional observers on your Dropzone.");
	    }
	    return element.dropzone;
	  };
	
	  Dropzone.autoDiscover = true;
	
	  Dropzone.discover = function() {
	    var checkElements, dropzone, dropzones, _i, _len, _results;
	    if (document.querySelectorAll) {
	      dropzones = document.querySelectorAll(".dropzone");
	    } else {
	      dropzones = [];
	      checkElements = function(elements) {
	        var el, _i, _len, _results;
	        _results = [];
	        for (_i = 0, _len = elements.length; _i < _len; _i++) {
	          el = elements[_i];
	          if (/(^| )dropzone($| )/.test(el.className)) {
	            _results.push(dropzones.push(el));
	          } else {
	            _results.push(void 0);
	          }
	        }
	        return _results;
	      };
	      checkElements(document.getElementsByTagName("div"));
	      checkElements(document.getElementsByTagName("form"));
	    }
	    _results = [];
	    for (_i = 0, _len = dropzones.length; _i < _len; _i++) {
	      dropzone = dropzones[_i];
	      if (Dropzone.optionsForElement(dropzone) !== false) {
	        _results.push(new Dropzone(dropzone));
	      } else {
	        _results.push(void 0);
	      }
	    }
	    return _results;
	  };
	
	  Dropzone.blacklistedBrowsers = [/opera.*Macintosh.*version\/12/i];
	
	  Dropzone.isBrowserSupported = function() {
	    var capableBrowser, regex, _i, _len, _ref;
	    capableBrowser = true;
	    if (window.File && window.FileReader && window.FileList && window.Blob && window.FormData && document.querySelector) {
	      if (!("classList" in document.createElement("a"))) {
	        capableBrowser = false;
	      } else {
	        _ref = Dropzone.blacklistedBrowsers;
	        for (_i = 0, _len = _ref.length; _i < _len; _i++) {
	          regex = _ref[_i];
	          if (regex.test(navigator.userAgent)) {
	            capableBrowser = false;
	            continue;
	          }
	        }
	      }
	    } else {
	      capableBrowser = false;
	    }
	    return capableBrowser;
	  };
	
	  without = function(list, rejectedItem) {
	    var item, _i, _len, _results;
	    _results = [];
	    for (_i = 0, _len = list.length; _i < _len; _i++) {
	      item = list[_i];
	      if (item !== rejectedItem) {
	        _results.push(item);
	      }
	    }
	    return _results;
	  };
	
	  camelize = function(str) {
	    return str.replace(/[\-_](\w)/g, function(match) {
	      return match.charAt(1).toUpperCase();
	    });
	  };
	
	  Dropzone.createElement = function(string) {
	    var div;
	    div = document.createElement("div");
	    div.innerHTML = string;
	    return div.childNodes[0];
	  };
	
	  Dropzone.elementInside = function(element, container) {
	    if (element === container) {
	      return true;
	    }
	    while (element = element.parentNode) {
	      if (element === container) {
	        return true;
	      }
	    }
	    return false;
	  };
	
	  Dropzone.getElement = function(el, name) {
	    var element;
	    if (typeof el === "string") {
	      element = document.querySelector(el);
	    } else if (el.nodeType != null) {
	      element = el;
	    }
	    if (element == null) {
	      throw new Error("Invalid `" + name + "` option provided. Please provide a CSS selector or a plain HTML element.");
	    }
	    return element;
	  };
	
	  Dropzone.getElements = function(els, name) {
	    var e, el, elements, _i, _j, _len, _len1, _ref;
	    if (els instanceof Array) {
	      elements = [];
	      try {
	        for (_i = 0, _len = els.length; _i < _len; _i++) {
	          el = els[_i];
	          elements.push(this.getElement(el, name));
	        }
	      } catch (_error) {
	        e = _error;
	        elements = null;
	      }
	    } else if (typeof els === "string") {
	      elements = [];
	      _ref = document.querySelectorAll(els);
	      for (_j = 0, _len1 = _ref.length; _j < _len1; _j++) {
	        el = _ref[_j];
	        elements.push(el);
	      }
	    } else if (els.nodeType != null) {
	      elements = [els];
	    }
	    if (!((elements != null) && elements.length)) {
	      throw new Error("Invalid `" + name + "` option provided. Please provide a CSS selector, a plain HTML element or a list of those.");
	    }
	    return elements;
	  };
	
	  Dropzone.confirm = function(question, accepted, rejected) {
	    if (window.confirm(question)) {
	      return accepted();
	    } else if (rejected != null) {
	      return rejected();
	    }
	  };
	
	  Dropzone.isValidFile = function(file, acceptedFiles) {
	    var baseMimeType, mimeType, validType, _i, _len;
	    if (!acceptedFiles) {
	      return true;
	    }
	    acceptedFiles = acceptedFiles.split(",");
	    mimeType = file.type;
	    baseMimeType = mimeType.replace(/\/.*$/, "");
	    for (_i = 0, _len = acceptedFiles.length; _i < _len; _i++) {
	      validType = acceptedFiles[_i];
	      validType = validType.trim();
	      if (validType.charAt(0) === ".") {
	        if (file.name.toLowerCase().indexOf(validType.toLowerCase(), file.name.length - validType.length) !== -1) {
	          return true;
	        }
	      } else if (/\/\*$/.test(validType)) {
	        if (baseMimeType === validType.replace(/\/.*$/, "")) {
	          return true;
	        }
	      } else {
	        if (mimeType === validType) {
	          return true;
	        }
	      }
	    }
	    return false;
	  };
	
	  if (typeof jQuery !== "undefined" && jQuery !== null) {
	    jQuery.fn.dropzone = function(options) {
	      return this.each(function() {
	        return new Dropzone(this, options);
	      });
	    };
	  }
	
	  if (typeof module !== "undefined" && module !== null) {
	    module.exports = Dropzone;
	  } else {
	    window.Dropzone = Dropzone;
	  }
	
	  Dropzone.ADDED = "added";
	
	  Dropzone.QUEUED = "queued";
	
	  Dropzone.ACCEPTED = Dropzone.QUEUED;
	
	  Dropzone.UPLOADING = "uploading";
	
	  Dropzone.PROCESSING = Dropzone.UPLOADING;
	
	  Dropzone.CANCELED = "canceled";
	
	  Dropzone.ERROR = "error";
	
	  Dropzone.SUCCESS = "success";
	
	
	  /*
	  
	  Bugfix for iOS 6 and 7
	  Source: http://stackoverflow.com/questions/11929099/html5-canvas-drawimage-ratio-bug-ios
	  based on the work of https://github.com/stomita/ios-imagefile-megapixel
	   */
	
	  detectVerticalSquash = function(img) {
	    var alpha, canvas, ctx, data, ey, ih, iw, py, ratio, sy;
	    iw = img.naturalWidth;
	    ih = img.naturalHeight;
	    canvas = document.createElement("canvas");
	    canvas.width = 1;
	    canvas.height = ih;
	    ctx = canvas.getContext("2d");
	    ctx.drawImage(img, 0, 0);
	    data = ctx.getImageData(0, 0, 1, ih).data;
	    sy = 0;
	    ey = ih;
	    py = ih;
	    while (py > sy) {
	      alpha = data[(py - 1) * 4 + 3];
	      if (alpha === 0) {
	        ey = py;
	      } else {
	        sy = py;
	      }
	      py = (ey + sy) >> 1;
	    }
	    ratio = py / ih;
	    if (ratio === 0) {
	      return 1;
	    } else {
	      return ratio;
	    }
	  };
	
	  drawImageIOSFix = function(ctx, img, sx, sy, sw, sh, dx, dy, dw, dh) {
	    var vertSquashRatio;
	    vertSquashRatio = detectVerticalSquash(img);
	    return ctx.drawImage(img, sx, sy, sw, sh, dx, dy, dw, dh / vertSquashRatio);
	  };
	
	
	  /*
	   * contentloaded.js
	   *
	   * Author: Diego Perini (diego.perini at gmail.com)
	   * Summary: cross-browser wrapper for DOMContentLoaded
	   * Updated: 20101020
	   * License: MIT
	   * Version: 1.2
	   *
	   * URL:
	   * http://javascript.nwbox.com/ContentLoaded/
	   * http://javascript.nwbox.com/ContentLoaded/MIT-LICENSE
	   */
	
	  contentLoaded = function(win, fn) {
	    var add, doc, done, init, poll, pre, rem, root, top;
	    done = false;
	    top = true;
	    doc = win.document;
	    root = doc.documentElement;
	    add = (doc.addEventListener ? "addEventListener" : "attachEvent");
	    rem = (doc.addEventListener ? "removeEventListener" : "detachEvent");
	    pre = (doc.addEventListener ? "" : "on");
	    init = function(e) {
	      if (e.type === "readystatechange" && doc.readyState !== "complete") {
	        return;
	      }
	      (e.type === "load" ? win : doc)[rem](pre + e.type, init, false);
	      if (!done && (done = true)) {
	        return fn.call(win, e.type || e);
	      }
	    };
	    poll = function() {
	      var e;
	      try {
	        root.doScroll("left");
	      } catch (_error) {
	        e = _error;
	        setTimeout(poll, 50);
	        return;
	      }
	      return init("poll");
	    };
	    if (doc.readyState !== "complete") {
	      if (doc.createEventObject && root.doScroll) {
	        try {
	          top = !win.frameElement;
	        } catch (_error) {}
	        if (top) {
	          poll();
	        }
	      }
	      doc[add](pre + "DOMContentLoaded", init, false);
	      doc[add](pre + "readystatechange", init, false);
	      return win[add](pre + "load", init, false);
	    }
	  };
	
	  Dropzone._autoDiscoverFunction = function() {
	    if (Dropzone.autoDiscover) {
	      return Dropzone.discover();
	    }
	  };
	
	  contentLoaded(window, Dropzone._autoDiscoverFunction);
	
	}).call(this);
	
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(71)(module)))

/***/ },
/* 71 */
/***/ function(module, exports) {

	module.exports = function(module) {
		if(!module.webpackPolyfill) {
			module.deprecate = function() {};
			module.paths = [];
			// module.parent = undefined by default
			module.children = [];
			module.webpackPolyfill = 1;
		}
		return module;
	}


/***/ },
/* 72 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
	    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
	    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
	    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
	    return c > 3 && r && Object.defineProperty(target, key, r), r;
	};
	var core_1 = __webpack_require__(3);
	var common_1 = __webpack_require__(22);
	var forms_1 = __webpack_require__(30);
	var video_form_url_component_1 = __webpack_require__(73);
	var VideoFormUrlModule = (function () {
	    function VideoFormUrlModule() {
	    }
	    return VideoFormUrlModule;
	}());
	VideoFormUrlModule = __decorate([
	    core_1.NgModule({
	        imports: [common_1.CommonModule, forms_1.FormsModule, forms_1.ReactiveFormsModule],
	        declarations: [
	            video_form_url_component_1.VideoFormUrlComponent
	        ],
	        exports: [video_form_url_component_1.VideoFormUrlComponent]
	    })
	], VideoFormUrlModule);
	exports.VideoFormUrlModule = VideoFormUrlModule;


/***/ },
/* 73 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __extends = (this && this.__extends) || function (d, b) {
	    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	    function __() { this.constructor = d; }
	    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	};
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
	var core_1 = __webpack_require__(3);
	var helper_1 = __webpack_require__(44);
	var form_extension_component_1 = __webpack_require__(74);
	var form_service_1 = __webpack_require__(54);
	var VideoFormUrlComponent = (function (_super) {
	    __extends(VideoFormUrlComponent, _super);
	    function VideoFormUrlComponent(elementRef, renderer, provider, formService, dataService) {
	        var _this = _super.call(this) || this;
	        _super.prototype.initFormExtensionComponent.call(_this, elementRef, renderer, provider, formService, dataService);
	        return _this;
	    }
	    return VideoFormUrlComponent;
	}(form_extension_component_1.FormExtensionComponent));
	VideoFormUrlComponent = __decorate([
	    core_1.Component({
	        selector: '#js_entityVideoUrl',
	        templateUrl: helper_1.Helper.getRuntimeVar('templateUrl')
	    }),
	    __param(2, core_1.Inject('Provider')),
	    __param(4, core_1.Inject('DataService')),
	    __metadata("design:paramtypes", [core_1.ElementRef,
	        core_1.Renderer, Object, form_service_1.FormService, Object])
	], VideoFormUrlComponent);
	exports.VideoFormUrlComponent = VideoFormUrlComponent;


/***/ },
/* 74 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __extends = (this && this.__extends) || function (d, b) {
	    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	    function __() { this.constructor = d; }
	    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	};
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
	var core_1 = __webpack_require__(3);
	var base_extension_component_1 = __webpack_require__(51);
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
	    return FormExtensionComponent;
	}(base_extension_component_1.BaseExtensionComponent));
	__decorate([
	    __param(2, core_1.Inject('Provider')),
	    __metadata("design:type", Function),
	    __metadata("design:paramtypes", [core_1.ElementRef,
	        core_1.Renderer, Object, Object, Object]),
	    __metadata("design:returntype", void 0)
	], FormExtensionComponent.prototype, "initFormExtensionComponent", null);
	FormExtensionComponent = __decorate([
	    core_1.Component({
	        selector: '.js_form',
	        template: ''
	    }),
	    __metadata("design:paramtypes", [])
	], FormExtensionComponent);
	exports.FormExtensionComponent = FormExtensionComponent;


/***/ }
]);
//# sourceMappingURL=main.js.map