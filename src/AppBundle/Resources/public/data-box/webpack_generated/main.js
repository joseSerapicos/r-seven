webpackJsonp([1],[
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var platform_browser_dynamic_1 = __webpack_require__(1);
	var data_box_module_1 = __webpack_require__(29);
	platform_browser_dynamic_1.platformBrowserDynamic().bootstrapModule(data_box_module_1.DataBoxModule);


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
	var ng_bootstrap_1 = __webpack_require__(34);
	var search_module_1 = __webpack_require__(42);
	var search_pagination_module_1 = __webpack_require__(50);
	var expander_module_1 = __webpack_require__(43);
	var helper_1 = __webpack_require__(52);
	var post_service_1 = __webpack_require__(53);
	var modal_service_1 = __webpack_require__(54);
	var form_service_1 = __webpack_require__(62);
	var flash_message_service_1 = __webpack_require__(24);
	var dynamic_component_loader_service_1 = __webpack_require__(55);
	var data_service_1 = __webpack_require__(63);
	var actions_service_1 = __webpack_require__(49);
	var data_box_component_1 = __webpack_require__(64);
	// Define templateUrl to component at runtime
	helper_1.Helper.setRuntimeVar('templateUrl', _app.conf.route['edit']['url']);
	var form_popup_extension_module_1 = __webpack_require__(67);
	var DataBoxModule = (function () {
	    function DataBoxModule() {
	    }
	    return DataBoxModule;
	}());
	DataBoxModule = __decorate([
	    core_1.NgModule({
	        imports: [
	            platform_browser_1.BrowserModule,
	            forms_1.FormsModule,
	            forms_1.ReactiveFormsModule,
	            ng_bootstrap_1.NgbModule.forRoot(),
	            search_module_1.SearchModule,
	            search_pagination_module_1.SearchPaginationModule,
	            expander_module_1.ExpanderModule
	        ],
	        declarations: [
	            data_box_component_1.DataBoxComponent
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
	                    module: form_popup_extension_module_1.FormPopupExtensionModule,
	                    component: 'FormPopupComponent',
	                    providers: [{ provide: 'Provider', useValue: helper_1.Helper.getFormProvider(_app.conf) }]
	                } }
	        ],
	        bootstrap: [data_box_component_1.DataBoxComponent]
	    })
	], DataBoxModule);
	exports.DataBoxModule = DataBoxModule;


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

	(function webpackUniversalModuleDefinition(root, factory) {
		if(true)
			module.exports = factory(__webpack_require__(35), __webpack_require__(37), __webpack_require__(39), __webpack_require__(5), __webpack_require__(22), __webpack_require__(3), __webpack_require__(30));
		else if(typeof define === 'function' && define.amd)
			define(["rxjs/add/operator/do", "rxjs/add/operator/let", "rxjs/add/observable/fromEvent", "rxjs/Observable", "@angular/common", "@angular/core", "@angular/forms"], factory);
		else if(typeof exports === 'object')
			exports["ngb"] = factory(require("rxjs/add/operator/do"), require("rxjs/add/operator/let"), require("rxjs/add/observable/fromEvent"), require("rxjs/Observable"), require("@angular/common"), require("@angular/core"), require("@angular/forms"));
		else
			root["ngb"] = factory(root["Rx"]["Observable"]["prototype"], root["Rx"]["Observable"]["prototype"], root["Rx"]["Observable"], root["Rx"], root["ng"]["common"], root["ng"]["core"], root["ng"]["forms"]);
	})(this, function(__WEBPACK_EXTERNAL_MODULE_72__, __WEBPACK_EXTERNAL_MODULE_73__, __WEBPACK_EXTERNAL_MODULE_74__, __WEBPACK_EXTERNAL_MODULE_75__, __WEBPACK_EXTERNAL_MODULE_2__, __WEBPACK_EXTERNAL_MODULE_0__, __WEBPACK_EXTERNAL_MODULE_3__) {
	return /******/ (function(modules) { // webpackBootstrap
	/******/ 	// The module cache
	/******/ 	var installedModules = {};
	/******/
	/******/ 	// The require function
	/******/ 	function __webpack_require__(moduleId) {
	/******/
	/******/ 		// Check if module is in cache
	/******/ 		if(installedModules[moduleId])
	/******/ 			return installedModules[moduleId].exports;
	/******/
	/******/ 		// Create a new module (and put it into the cache)
	/******/ 		var module = installedModules[moduleId] = {
	/******/ 			i: moduleId,
	/******/ 			l: false,
	/******/ 			exports: {}
	/******/ 		};
	/******/
	/******/ 		// Execute the module function
	/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
	/******/
	/******/ 		// Flag the module as loaded
	/******/ 		module.l = true;
	/******/
	/******/ 		// Return the exports of the module
	/******/ 		return module.exports;
	/******/ 	}
	/******/
	/******/
	/******/ 	// expose the modules object (__webpack_modules__)
	/******/ 	__webpack_require__.m = modules;
	/******/
	/******/ 	// expose the module cache
	/******/ 	__webpack_require__.c = installedModules;
	/******/
	/******/ 	// identity function for calling harmory imports with the correct context
	/******/ 	__webpack_require__.i = function(value) { return value; };
	/******/
	/******/ 	// define getter function for harmory exports
	/******/ 	__webpack_require__.d = function(exports, name, getter) {
	/******/ 		Object.defineProperty(exports, name, {
	/******/ 			configurable: false,
	/******/ 			enumerable: true,
	/******/ 			get: getter
	/******/ 		});
	/******/ 	};
	/******/
	/******/ 	// getDefaultExport function for compatibility with non-harmony modules
	/******/ 	__webpack_require__.n = function(module) {
	/******/ 		var getter = module && module.__esModule ?
	/******/ 			function getDefault() { return module['default']; } :
	/******/ 			function getModuleExports() { return module; };
	/******/ 		__webpack_require__.d(getter, 'a', getter);
	/******/ 		return getter;
	/******/ 	};
	/******/
	/******/ 	// Object.prototype.hasOwnProperty.call
	/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
	/******/
	/******/ 	// __webpack_public_path__
	/******/ 	__webpack_require__.p = "";
	/******/
	/******/ 	// Load entry module and return exports
	/******/ 	return __webpack_require__(__webpack_require__.s = 76);
	/******/ })
	/************************************************************************/
	/******/ ([
	/* 0 */
	/***/ function(module, exports) {
	
	module.exports = __WEBPACK_EXTERNAL_MODULE_0__;
	
	/***/ },
	/* 1 */
	/***/ function(module, exports) {
	
	"use strict";
	"use strict";
	function toInteger(value) {
	    return parseInt("" + value, 10);
	}
	exports.toInteger = toInteger;
	function toString(value) {
	    return (value !== undefined && value !== null) ? "" + value : '';
	}
	exports.toString = toString;
	function getValueInRange(value, max, min) {
	    if (min === void 0) { min = 0; }
	    return Math.max(Math.min(value, max), min);
	}
	exports.getValueInRange = getValueInRange;
	function isString(value) {
	    return typeof value === 'string';
	}
	exports.isString = isString;
	function isNumber(value) {
	    return !isNaN(toInteger(value));
	}
	exports.isNumber = isNumber;
	function isDefined(value) {
	    return value !== undefined && value !== null;
	}
	exports.isDefined = isDefined;
	function padNumber(value) {
	    if (isNumber(value)) {
	        return ("0" + value).slice(-2);
	    }
	    else {
	        return '';
	    }
	}
	exports.padNumber = padNumber;
	function regExpEscape(text) {
	    return text.replace(/[-[\]{}()*+?.,\\^$|#\s]/g, '\\$&');
	}
	exports.regExpEscape = regExpEscape;
	//# sourceMappingURL=util.js.map
	
	/***/ },
	/* 2 */
	/***/ function(module, exports) {
	
	module.exports = __WEBPACK_EXTERNAL_MODULE_2__;
	
	/***/ },
	/* 3 */
	/***/ function(module, exports) {
	
	module.exports = __WEBPACK_EXTERNAL_MODULE_3__;
	
	/***/ },
	/* 4 */
	/***/ function(module, exports, __webpack_require__) {
	
	"use strict";
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
	var core_1 = __webpack_require__(0);
	var WEEKDAYS = ['Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa', 'Su'];
	var MONTHS = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
	/**
	 * Type of the service supplying month and weekday names to to NgbDatepicker component.
	 * See the i18n demo for how to extend this class and define a custom provider for i18n.
	 */
	var NgbDatepickerI18n = (function () {
	    function NgbDatepickerI18n() {
	    }
	    NgbDatepickerI18n = __decorate([
	        core_1.Injectable(), 
	        __metadata('design:paramtypes', [])
	    ], NgbDatepickerI18n);
	    return NgbDatepickerI18n;
	}());
	exports.NgbDatepickerI18n = NgbDatepickerI18n;
	var NgbDatepickerI18nDefault = (function (_super) {
	    __extends(NgbDatepickerI18nDefault, _super);
	    function NgbDatepickerI18nDefault() {
	        _super.apply(this, arguments);
	    }
	    NgbDatepickerI18nDefault.prototype.getWeekdayName = function (weekday) { return WEEKDAYS[weekday - 1]; };
	    NgbDatepickerI18nDefault.prototype.getMonthName = function (month) { return MONTHS[month - 1]; };
	    NgbDatepickerI18nDefault = __decorate([
	        core_1.Injectable(), 
	        __metadata('design:paramtypes', [])
	    ], NgbDatepickerI18nDefault);
	    return NgbDatepickerI18nDefault;
	}(NgbDatepickerI18n));
	exports.NgbDatepickerI18nDefault = NgbDatepickerI18nDefault;
	//# sourceMappingURL=datepicker-i18n.js.map
	
	/***/ },
	/* 5 */
	/***/ function(module, exports) {
	
	"use strict";
	"use strict";
	var NgbDate = (function () {
	    function NgbDate(year, month, day) {
	        this.year = year;
	        this.month = month;
	        this.day = day;
	    }
	    NgbDate.from = function (date) {
	        return date ? new NgbDate(date.year, date.month, date.day ? date.day : 1) : null;
	    };
	    NgbDate.prototype.equals = function (other) {
	        return other && this.year === other.year && this.month === other.month && this.day === other.day;
	    };
	    NgbDate.prototype.before = function (other) {
	        if (!other) {
	            return false;
	        }
	        if (this.year === other.year) {
	            if (this.month === other.month) {
	                return this.day === other.day ? false : this.day < other.day;
	            }
	            else {
	                return this.month < other.month;
	            }
	        }
	        else {
	            return this.year < other.year;
	        }
	    };
	    NgbDate.prototype.after = function (other) {
	        if (!other) {
	            return false;
	        }
	        if (this.year === other.year) {
	            if (this.month === other.month) {
	                return this.day === other.day ? false : this.day > other.day;
	            }
	            else {
	                return this.month > other.month;
	            }
	        }
	        else {
	            return this.year > other.year;
	        }
	    };
	    NgbDate.prototype.toString = function () { return this.year + "-" + this.month + "-" + this.day; };
	    return NgbDate;
	}());
	exports.NgbDate = NgbDate;
	//# sourceMappingURL=ngb-date.js.map
	
	/***/ },
	/* 6 */
	/***/ function(module, exports, __webpack_require__) {
	
	"use strict";
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
	var ngb_date_1 = __webpack_require__(5);
	var core_1 = __webpack_require__(0);
	var util_1 = __webpack_require__(1);
	function fromJSDate(jsDate) {
	    return new ngb_date_1.NgbDate(jsDate.getFullYear(), jsDate.getMonth() + 1, jsDate.getDate());
	}
	function toJSDate(date) {
	    var jsDate = new Date(date.year, date.month - 1, date.day);
	    // this is done avoid 30 -> 1930 conversion
	    if (!isNaN(jsDate.getTime())) {
	        jsDate.setFullYear(date.year);
	    }
	    return jsDate;
	}
	var NgbCalendar = (function () {
	    function NgbCalendar() {
	    }
	    NgbCalendar = __decorate([
	        core_1.Injectable(), 
	        __metadata('design:paramtypes', [])
	    ], NgbCalendar);
	    return NgbCalendar;
	}());
	exports.NgbCalendar = NgbCalendar;
	var NgbCalendarGregorian = (function (_super) {
	    __extends(NgbCalendarGregorian, _super);
	    function NgbCalendarGregorian() {
	        _super.apply(this, arguments);
	    }
	    NgbCalendarGregorian.prototype.getDaysPerWeek = function () { return 7; };
	    NgbCalendarGregorian.prototype.getMonths = function () { return [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]; };
	    NgbCalendarGregorian.prototype.getWeeksPerMonth = function () { return 6; };
	    NgbCalendarGregorian.prototype.getNext = function (date, period, number) {
	        if (period === void 0) { period = 'd'; }
	        if (number === void 0) { number = 1; }
	        var jsDate = toJSDate(date);
	        switch (period) {
	            case 'y':
	                return new ngb_date_1.NgbDate(date.year + number, 1, 1);
	            case 'm':
	                jsDate = new Date(date.year, date.month + number - 1, 1);
	                break;
	            case 'd':
	                jsDate.setDate(jsDate.getDate() + number);
	                break;
	            default:
	                return date;
	        }
	        return fromJSDate(jsDate);
	    };
	    NgbCalendarGregorian.prototype.getPrev = function (date, period, number) {
	        if (period === void 0) { period = 'd'; }
	        if (number === void 0) { number = 1; }
	        return this.getNext(date, period, -number);
	    };
	    NgbCalendarGregorian.prototype.getWeekday = function (date) {
	        var jsDate = toJSDate(date);
	        var day = jsDate.getDay();
	        // in JS Date Sun=0, in ISO 8601 Sun=7
	        return day === 0 ? 7 : day;
	    };
	    NgbCalendarGregorian.prototype.getWeekNumber = function (week, firstDayOfWeek) {
	        // in JS Date Sun=0, in ISO 8601 Sun=7
	        if (firstDayOfWeek === 7) {
	            firstDayOfWeek = 0;
	        }
	        var thursdayIndex = (4 + 7 - firstDayOfWeek) % 7;
	        var date = week[thursdayIndex];
	        var jsDate = toJSDate(date);
	        jsDate.setDate(jsDate.getDate() + 4 - (jsDate.getDay() || 7)); // Thursday
	        var time = jsDate.getTime();
	        jsDate.setMonth(0); // Compare with Jan 1
	        jsDate.setDate(1);
	        return Math.floor(Math.round((time - jsDate.getTime()) / 86400000) / 7) + 1;
	    };
	    NgbCalendarGregorian.prototype.getToday = function () { return fromJSDate(new Date()); };
	    NgbCalendarGregorian.prototype.isValid = function (date) {
	        return date && util_1.isNumber(date.year) && util_1.isNumber(date.month) && util_1.isNumber(date.day) &&
	            !isNaN(toJSDate(date).getTime());
	    };
	    NgbCalendarGregorian = __decorate([
	        core_1.Injectable(), 
	        __metadata('design:paramtypes', [])
	    ], NgbCalendarGregorian);
	    return NgbCalendarGregorian;
	}(NgbCalendar));
	exports.NgbCalendarGregorian = NgbCalendarGregorian;
	//# sourceMappingURL=ngb-calendar.js.map
	
	/***/ },
	/* 7 */
	/***/ function(module, exports, __webpack_require__) {
	
	"use strict";
	"use strict";
	var core_1 = __webpack_require__(0);
	var ContentRef = (function () {
	    function ContentRef(nodes, viewRef, componentRef) {
	        this.nodes = nodes;
	        this.viewRef = viewRef;
	        this.componentRef = componentRef;
	    }
	    return ContentRef;
	}());
	exports.ContentRef = ContentRef;
	var PopupService = (function () {
	    function PopupService(type, _injector, _viewContainerRef, _renderer, componentFactoryResolver) {
	        this._injector = _injector;
	        this._viewContainerRef = _viewContainerRef;
	        this._renderer = _renderer;
	        this._windowFactory = componentFactoryResolver.resolveComponentFactory(type);
	    }
	    PopupService.prototype.open = function (content) {
	        if (!this._windowRef) {
	            this._contentRef = this._getContentRef(content);
	            this._windowRef =
	                this._viewContainerRef.createComponent(this._windowFactory, 0, this._injector, this._contentRef.nodes);
	        }
	        return this._windowRef;
	    };
	    PopupService.prototype.close = function () {
	        if (this._windowRef) {
	            this._viewContainerRef.remove(this._viewContainerRef.indexOf(this._windowRef.hostView));
	            this._windowRef = null;
	            if (this._contentRef.viewRef) {
	                this._viewContainerRef.remove(this._viewContainerRef.indexOf(this._contentRef.viewRef));
	                this._contentRef = null;
	            }
	        }
	    };
	    PopupService.prototype._getContentRef = function (content) {
	        if (!content) {
	            return new ContentRef([]);
	        }
	        else if (content instanceof core_1.TemplateRef) {
	            var viewRef = this._viewContainerRef.createEmbeddedView(content);
	            return new ContentRef([viewRef.rootNodes], viewRef);
	        }
	        else {
	            return new ContentRef([[this._renderer.createText(null, "" + content)]]);
	        }
	    };
	    return PopupService;
	}());
	exports.PopupService = PopupService;
	//# sourceMappingURL=popup.js.map
	
	/***/ },
	/* 8 */
	/***/ function(module, exports) {
	
	"use strict";
	"use strict";
	// previous version:
	// https://github.com/angular-ui/bootstrap/blob/07c31d0731f7cb068a1932b8e01d2312b796b4ec/src/position/position.js
	var Positioning = (function () {
	    function Positioning() {
	    }
	    Positioning.prototype.getStyle = function (element, prop) { return window.getComputedStyle(element)[prop]; };
	    Positioning.prototype.isStaticPositioned = function (element) {
	        return (this.getStyle(element, 'position') || 'static') === 'static';
	    };
	    Positioning.prototype.offsetParent = function (element) {
	        var offsetParentEl = element.offsetParent || document.documentElement;
	        while (offsetParentEl && offsetParentEl !== document.documentElement && this.isStaticPositioned(offsetParentEl)) {
	            offsetParentEl = offsetParentEl.offsetParent;
	        }
	        return offsetParentEl || document.documentElement;
	    };
	    Positioning.prototype.position = function (element, round) {
	        if (round === void 0) { round = true; }
	        var elPosition;
	        var parentOffset = { width: 0, height: 0, top: 0, bottom: 0, left: 0, right: 0 };
	        if (this.getStyle(element, 'position') === 'fixed') {
	            elPosition = element.getBoundingClientRect();
	        }
	        else {
	            var offsetParentEl = this.offsetParent(element);
	            elPosition = this.offset(element, false);
	            if (offsetParentEl !== document.documentElement) {
	                parentOffset = this.offset(offsetParentEl, false);
	            }
	            parentOffset.top += offsetParentEl.clientTop;
	            parentOffset.left += offsetParentEl.clientLeft;
	        }
	        elPosition.top -= parentOffset.top;
	        elPosition.bottom -= parentOffset.top;
	        elPosition.left -= parentOffset.left;
	        elPosition.right -= parentOffset.left;
	        if (round) {
	            elPosition.top = Math.round(elPosition.top);
	            elPosition.bottom = Math.round(elPosition.bottom);
	            elPosition.left = Math.round(elPosition.left);
	            elPosition.right = Math.round(elPosition.right);
	        }
	        return elPosition;
	    };
	    Positioning.prototype.offset = function (element, round) {
	        if (round === void 0) { round = true; }
	        var elBcr = element.getBoundingClientRect();
	        var viewportOffset = {
	            top: window.pageYOffset - document.documentElement.clientTop,
	            left: window.pageXOffset - document.documentElement.clientLeft
	        };
	        var elOffset = {
	            height: elBcr.height || element.offsetHeight,
	            width: elBcr.width || element.offsetWidth,
	            top: elBcr.top + viewportOffset.top,
	            bottom: elBcr.bottom + viewportOffset.top,
	            left: elBcr.left + viewportOffset.left,
	            right: elBcr.right + viewportOffset.left
	        };
	        if (round) {
	            elOffset.height = Math.round(elOffset.height);
	            elOffset.width = Math.round(elOffset.width);
	            elOffset.top = Math.round(elOffset.top);
	            elOffset.bottom = Math.round(elOffset.bottom);
	            elOffset.left = Math.round(elOffset.left);
	            elOffset.right = Math.round(elOffset.right);
	        }
	        return elOffset;
	    };
	    Positioning.prototype.positionElements = function (hostElement, targetElement, placement, appendToBody) {
	        var hostElPosition = appendToBody ? this.offset(hostElement, false) : this.position(hostElement, false);
	        var shiftWidth = {
	            left: hostElPosition.left,
	            center: hostElPosition.left + hostElPosition.width / 2 - targetElement.offsetWidth / 2,
	            right: hostElPosition.left + hostElPosition.width
	        };
	        var shiftHeight = {
	            top: hostElPosition.top,
	            center: hostElPosition.top + hostElPosition.height / 2 - targetElement.offsetHeight / 2,
	            bottom: hostElPosition.top + hostElPosition.height
	        };
	        var targetElBCR = targetElement.getBoundingClientRect();
	        var placementPrimary = placement.split('-')[0] || 'top';
	        var placementSecondary = placement.split('-')[1] || 'center';
	        var targetElPosition = {
	            height: targetElBCR.height || targetElement.offsetHeight,
	            width: targetElBCR.width || targetElement.offsetWidth,
	            top: 0,
	            bottom: targetElBCR.height || targetElement.offsetHeight,
	            left: 0,
	            right: targetElBCR.width || targetElement.offsetWidth
	        };
	        switch (placementPrimary) {
	            case 'top':
	                targetElPosition.top = hostElPosition.top - targetElement.offsetHeight;
	                targetElPosition.bottom += hostElPosition.top - targetElement.offsetHeight;
	                targetElPosition.left = shiftWidth[placementSecondary];
	                targetElPosition.right += shiftWidth[placementSecondary];
	                break;
	            case 'bottom':
	                targetElPosition.top = shiftHeight[placementPrimary];
	                targetElPosition.bottom += shiftHeight[placementPrimary];
	                targetElPosition.left = shiftWidth[placementSecondary];
	                targetElPosition.right += shiftWidth[placementSecondary];
	                break;
	            case 'left':
	                targetElPosition.top = shiftHeight[placementSecondary];
	                targetElPosition.bottom += shiftHeight[placementSecondary];
	                targetElPosition.left = hostElPosition.left - targetElement.offsetWidth;
	                targetElPosition.right += hostElPosition.left - targetElement.offsetWidth;
	                break;
	            case 'right':
	                targetElPosition.top = shiftHeight[placementSecondary];
	                targetElPosition.bottom += shiftHeight[placementSecondary];
	                targetElPosition.left = shiftWidth[placementPrimary];
	                targetElPosition.right += shiftWidth[placementPrimary];
	                break;
	        }
	        targetElPosition.top = Math.round(targetElPosition.top);
	        targetElPosition.bottom = Math.round(targetElPosition.bottom);
	        targetElPosition.left = Math.round(targetElPosition.left);
	        targetElPosition.right = Math.round(targetElPosition.right);
	        return targetElPosition;
	    };
	    return Positioning;
	}());
	exports.Positioning = Positioning;
	var positionService = new Positioning();
	function positionElements(hostElement, targetElement, placement, appendToBody) {
	    var pos = positionService.positionElements(hostElement, targetElement, placement, appendToBody);
	    targetElement.style.top = pos.top + "px";
	    targetElement.style.left = pos.left + "px";
	}
	exports.positionElements = positionElements;
	//# sourceMappingURL=positioning.js.map
	
	/***/ },
	/* 9 */
	/***/ function(module, exports, __webpack_require__) {
	
	"use strict";
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
	var core_1 = __webpack_require__(0);
	var common_1 = __webpack_require__(2);
	var accordion_1 = __webpack_require__(43);
	var accordion_config_1 = __webpack_require__(25);
	var accordion_2 = __webpack_require__(43);
	exports.NgbAccordion = accordion_2.NgbAccordion;
	exports.NgbPanel = accordion_2.NgbPanel;
	exports.NgbPanelTitle = accordion_2.NgbPanelTitle;
	exports.NgbPanelContent = accordion_2.NgbPanelContent;
	var accordion_config_2 = __webpack_require__(25);
	exports.NgbAccordionConfig = accordion_config_2.NgbAccordionConfig;
	var NGB_ACCORDION_DIRECTIVES = [accordion_1.NgbAccordion, accordion_1.NgbPanel, accordion_1.NgbPanelTitle, accordion_1.NgbPanelContent];
	var NgbAccordionModule = (function () {
	    function NgbAccordionModule() {
	    }
	    NgbAccordionModule.forRoot = function () { return { ngModule: NgbAccordionModule, providers: [accordion_config_1.NgbAccordionConfig] }; };
	    NgbAccordionModule = __decorate([
	        core_1.NgModule({ declarations: NGB_ACCORDION_DIRECTIVES, exports: NGB_ACCORDION_DIRECTIVES, imports: [common_1.CommonModule] }), 
	        __metadata('design:paramtypes', [])
	    ], NgbAccordionModule);
	    return NgbAccordionModule;
	}());
	exports.NgbAccordionModule = NgbAccordionModule;
	//# sourceMappingURL=accordion.module.js.map
	
	/***/ },
	/* 10 */
	/***/ function(module, exports, __webpack_require__) {
	
	"use strict";
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
	var core_1 = __webpack_require__(0);
	var common_1 = __webpack_require__(2);
	var alert_1 = __webpack_require__(44);
	var alert_config_1 = __webpack_require__(26);
	var alert_2 = __webpack_require__(44);
	exports.NgbAlert = alert_2.NgbAlert;
	var alert_config_2 = __webpack_require__(26);
	exports.NgbAlertConfig = alert_config_2.NgbAlertConfig;
	var NgbAlertModule = (function () {
	    function NgbAlertModule() {
	    }
	    NgbAlertModule.forRoot = function () { return { ngModule: NgbAlertModule, providers: [alert_config_1.NgbAlertConfig] }; };
	    NgbAlertModule = __decorate([
	        core_1.NgModule({ declarations: [alert_1.NgbAlert], exports: [alert_1.NgbAlert], imports: [common_1.CommonModule], entryComponents: [alert_1.NgbAlert] }), 
	        __metadata('design:paramtypes', [])
	    ], NgbAlertModule);
	    return NgbAlertModule;
	}());
	exports.NgbAlertModule = NgbAlertModule;
	//# sourceMappingURL=alert.module.js.map
	
	/***/ },
	/* 11 */
	/***/ function(module, exports, __webpack_require__) {
	
	"use strict";
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
	var core_1 = __webpack_require__(0);
	var radio_1 = __webpack_require__(45);
	var radio_2 = __webpack_require__(45);
	exports.NgbRadio = radio_2.NgbRadio;
	exports.NgbActiveLabel = radio_2.NgbActiveLabel;
	exports.NgbRadioGroup = radio_2.NgbRadioGroup;
	var NGB_RADIO_DIRECTIVES = [radio_1.NgbRadio, radio_1.NgbActiveLabel, radio_1.NgbRadioGroup];
	var NgbButtonsModule = (function () {
	    function NgbButtonsModule() {
	    }
	    NgbButtonsModule.forRoot = function () { return { ngModule: NgbButtonsModule, providers: [] }; };
	    NgbButtonsModule = __decorate([
	        core_1.NgModule({ declarations: NGB_RADIO_DIRECTIVES, exports: NGB_RADIO_DIRECTIVES }), 
	        __metadata('design:paramtypes', [])
	    ], NgbButtonsModule);
	    return NgbButtonsModule;
	}());
	exports.NgbButtonsModule = NgbButtonsModule;
	//# sourceMappingURL=radio.module.js.map
	
	/***/ },
	/* 12 */
	/***/ function(module, exports, __webpack_require__) {
	
	"use strict";
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
	var core_1 = __webpack_require__(0);
	var common_1 = __webpack_require__(2);
	var carousel_1 = __webpack_require__(46);
	var carousel_config_1 = __webpack_require__(27);
	var carousel_2 = __webpack_require__(46);
	exports.NgbCarousel = carousel_2.NgbCarousel;
	exports.NgbSlide = carousel_2.NgbSlide;
	var carousel_config_2 = __webpack_require__(27);
	exports.NgbCarouselConfig = carousel_config_2.NgbCarouselConfig;
	var NgbCarouselModule = (function () {
	    function NgbCarouselModule() {
	    }
	    NgbCarouselModule.forRoot = function () { return { ngModule: NgbCarouselModule, providers: [carousel_config_1.NgbCarouselConfig] }; };
	    NgbCarouselModule = __decorate([
	        core_1.NgModule({ declarations: carousel_1.NGB_CAROUSEL_DIRECTIVES, exports: carousel_1.NGB_CAROUSEL_DIRECTIVES, imports: [common_1.CommonModule] }), 
	        __metadata('design:paramtypes', [])
	    ], NgbCarouselModule);
	    return NgbCarouselModule;
	}());
	exports.NgbCarouselModule = NgbCarouselModule;
	//# sourceMappingURL=carousel.module.js.map
	
	/***/ },
	/* 13 */
	/***/ function(module, exports, __webpack_require__) {
	
	"use strict";
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
	var core_1 = __webpack_require__(0);
	var collapse_1 = __webpack_require__(47);
	var collapse_2 = __webpack_require__(47);
	exports.NgbCollapse = collapse_2.NgbCollapse;
	var NgbCollapseModule = (function () {
	    function NgbCollapseModule() {
	    }
	    NgbCollapseModule.forRoot = function () { return { ngModule: NgbCollapseModule, providers: [] }; };
	    NgbCollapseModule = __decorate([
	        core_1.NgModule({ declarations: [collapse_1.NgbCollapse], exports: [collapse_1.NgbCollapse] }), 
	        __metadata('design:paramtypes', [])
	    ], NgbCollapseModule);
	    return NgbCollapseModule;
	}());
	exports.NgbCollapseModule = NgbCollapseModule;
	//# sourceMappingURL=collapse.module.js.map
	
	/***/ },
	/* 14 */
	/***/ function(module, exports, __webpack_require__) {
	
	"use strict";
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
	var core_1 = __webpack_require__(0);
	var common_1 = __webpack_require__(2);
	var datepicker_1 = __webpack_require__(30);
	var datepicker_month_view_1 = __webpack_require__(50);
	var datepicker_navigation_1 = __webpack_require__(52);
	var datepicker_input_1 = __webpack_require__(49);
	var forms_1 = __webpack_require__(3);
	var datepicker_day_view_1 = __webpack_require__(48);
	var datepicker_i18n_1 = __webpack_require__(4);
	var ngb_calendar_1 = __webpack_require__(6);
	var ngb_date_parser_formatter_1 = __webpack_require__(31);
	var datepicker_service_1 = __webpack_require__(29);
	var datepicker_navigation_select_1 = __webpack_require__(51);
	var datepicker_config_1 = __webpack_require__(28);
	var datepicker_2 = __webpack_require__(30);
	exports.NgbDatepicker = datepicker_2.NgbDatepicker;
	var datepicker_input_2 = __webpack_require__(49);
	exports.NgbInputDatepicker = datepicker_input_2.NgbInputDatepicker;
	var datepicker_month_view_2 = __webpack_require__(50);
	exports.NgbDatepickerMonthView = datepicker_month_view_2.NgbDatepickerMonthView;
	var datepicker_day_view_2 = __webpack_require__(48);
	exports.NgbDatepickerDayView = datepicker_day_view_2.NgbDatepickerDayView;
	var datepicker_navigation_2 = __webpack_require__(52);
	exports.NgbDatepickerNavigation = datepicker_navigation_2.NgbDatepickerNavigation;
	var datepicker_navigation_select_2 = __webpack_require__(51);
	exports.NgbDatepickerNavigationSelect = datepicker_navigation_select_2.NgbDatepickerNavigationSelect;
	var datepicker_config_2 = __webpack_require__(28);
	exports.NgbDatepickerConfig = datepicker_config_2.NgbDatepickerConfig;
	var datepicker_i18n_2 = __webpack_require__(4);
	exports.NgbDatepickerI18n = datepicker_i18n_2.NgbDatepickerI18n;
	var ngb_date_parser_formatter_2 = __webpack_require__(31);
	exports.NgbDateParserFormatter = ngb_date_parser_formatter_2.NgbDateParserFormatter;
	var NgbDatepickerModule = (function () {
	    function NgbDatepickerModule() {
	    }
	    NgbDatepickerModule.forRoot = function () {
	        return {
	            ngModule: NgbDatepickerModule,
	            providers: [
	                { provide: ngb_calendar_1.NgbCalendar, useClass: ngb_calendar_1.NgbCalendarGregorian },
	                { provide: datepicker_i18n_1.NgbDatepickerI18n, useClass: datepicker_i18n_1.NgbDatepickerI18nDefault },
	                { provide: ngb_date_parser_formatter_1.NgbDateParserFormatter, useClass: ngb_date_parser_formatter_1.NgbDateISOParserFormatter }, datepicker_service_1.NgbDatepickerService,
	                datepicker_config_1.NgbDatepickerConfig
	            ]
	        };
	    };
	    NgbDatepickerModule = __decorate([
	        core_1.NgModule({
	            declarations: [
	                datepicker_1.NgbDatepicker, datepicker_month_view_1.NgbDatepickerMonthView, datepicker_navigation_1.NgbDatepickerNavigation, datepicker_navigation_select_1.NgbDatepickerNavigationSelect, datepicker_day_view_1.NgbDatepickerDayView,
	                datepicker_input_1.NgbInputDatepicker
	            ],
	            exports: [datepicker_1.NgbDatepicker, datepicker_input_1.NgbInputDatepicker],
	            imports: [common_1.CommonModule, forms_1.FormsModule],
	            entryComponents: [datepicker_1.NgbDatepicker]
	        }), 
	        __metadata('design:paramtypes', [])
	    ], NgbDatepickerModule);
	    return NgbDatepickerModule;
	}());
	exports.NgbDatepickerModule = NgbDatepickerModule;
	//# sourceMappingURL=datepicker.module.js.map
	
	/***/ },
	/* 15 */
	/***/ function(module, exports, __webpack_require__) {
	
	"use strict";
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
	var core_1 = __webpack_require__(0);
	var dropdown_1 = __webpack_require__(54);
	var dropdown_config_1 = __webpack_require__(32);
	var dropdown_2 = __webpack_require__(54);
	exports.NgbDropdown = dropdown_2.NgbDropdown;
	exports.NgbDropdownToggle = dropdown_2.NgbDropdownToggle;
	var dropdown_config_2 = __webpack_require__(32);
	exports.NgbDropdownConfig = dropdown_config_2.NgbDropdownConfig;
	var NGB_DROPDOWN_DIRECTIVES = [dropdown_1.NgbDropdownToggle, dropdown_1.NgbDropdown];
	var NgbDropdownModule = (function () {
	    function NgbDropdownModule() {
	    }
	    NgbDropdownModule.forRoot = function () { return { ngModule: NgbDropdownModule, providers: [dropdown_config_1.NgbDropdownConfig] }; };
	    NgbDropdownModule = __decorate([
	        core_1.NgModule({ declarations: NGB_DROPDOWN_DIRECTIVES, exports: NGB_DROPDOWN_DIRECTIVES }), 
	        __metadata('design:paramtypes', [])
	    ], NgbDropdownModule);
	    return NgbDropdownModule;
	}());
	exports.NgbDropdownModule = NgbDropdownModule;
	//# sourceMappingURL=dropdown.module.js.map
	
	/***/ },
	/* 16 */
	/***/ function(module, exports, __webpack_require__) {
	
	"use strict";
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
	var core_1 = __webpack_require__(0);
	var modal_container_1 = __webpack_require__(69);
	var modal_backdrop_1 = __webpack_require__(55);
	var modal_window_1 = __webpack_require__(58);
	var modal_stack_1 = __webpack_require__(33);
	var modal_1 = __webpack_require__(59);
	var modal_2 = __webpack_require__(59);
	exports.NgbModal = modal_2.NgbModal;
	var modal_ref_1 = __webpack_require__(57);
	exports.NgbModalRef = modal_ref_1.NgbModalRef;
	exports.NgbActiveModal = modal_ref_1.NgbActiveModal;
	var modal_dismiss_reasons_1 = __webpack_require__(56);
	exports.ModalDismissReasons = modal_dismiss_reasons_1.ModalDismissReasons;
	var NgbModalModule = (function () {
	    function NgbModalModule() {
	    }
	    NgbModalModule.forRoot = function () { return { ngModule: NgbModalModule, providers: [modal_1.NgbModal, modal_stack_1.NgbModalStack] }; };
	    NgbModalModule = __decorate([
	        core_1.NgModule({
	            declarations: [modal_container_1.NgbModalContainer, modal_backdrop_1.NgbModalBackdrop, modal_window_1.NgbModalWindow],
	            entryComponents: [modal_backdrop_1.NgbModalBackdrop, modal_window_1.NgbModalWindow],
	            providers: [modal_1.NgbModal],
	            exports: [modal_container_1.NgbModalContainer]
	        }), 
	        __metadata('design:paramtypes', [])
	    ], NgbModalModule);
	    return NgbModalModule;
	}());
	exports.NgbModalModule = NgbModalModule;
	//# sourceMappingURL=modal.module.js.map
	
	/***/ },
	/* 17 */
	/***/ function(module, exports, __webpack_require__) {
	
	"use strict";
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
	var core_1 = __webpack_require__(0);
	var common_1 = __webpack_require__(2);
	var pagination_1 = __webpack_require__(60);
	var pagination_config_1 = __webpack_require__(34);
	var pagination_2 = __webpack_require__(60);
	exports.NgbPagination = pagination_2.NgbPagination;
	var pagination_config_2 = __webpack_require__(34);
	exports.NgbPaginationConfig = pagination_config_2.NgbPaginationConfig;
	var NgbPaginationModule = (function () {
	    function NgbPaginationModule() {
	    }
	    NgbPaginationModule.forRoot = function () { return { ngModule: NgbPaginationModule, providers: [pagination_config_1.NgbPaginationConfig] }; };
	    NgbPaginationModule = __decorate([
	        core_1.NgModule({ declarations: [pagination_1.NgbPagination], exports: [pagination_1.NgbPagination], imports: [common_1.CommonModule] }), 
	        __metadata('design:paramtypes', [])
	    ], NgbPaginationModule);
	    return NgbPaginationModule;
	}());
	exports.NgbPaginationModule = NgbPaginationModule;
	//# sourceMappingURL=pagination.module.js.map
	
	/***/ },
	/* 18 */
	/***/ function(module, exports, __webpack_require__) {
	
	"use strict";
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
	var core_1 = __webpack_require__(0);
	var popover_1 = __webpack_require__(61);
	var popover_config_1 = __webpack_require__(35);
	var popover_2 = __webpack_require__(61);
	exports.NgbPopover = popover_2.NgbPopover;
	var popover_config_2 = __webpack_require__(35);
	exports.NgbPopoverConfig = popover_config_2.NgbPopoverConfig;
	var NgbPopoverModule = (function () {
	    function NgbPopoverModule() {
	    }
	    NgbPopoverModule.forRoot = function () { return { ngModule: NgbPopoverModule, providers: [popover_config_1.NgbPopoverConfig] }; };
	    NgbPopoverModule = __decorate([
	        core_1.NgModule({ declarations: [popover_1.NgbPopover, popover_1.NgbPopoverWindow], exports: [popover_1.NgbPopover], entryComponents: [popover_1.NgbPopoverWindow] }), 
	        __metadata('design:paramtypes', [])
	    ], NgbPopoverModule);
	    return NgbPopoverModule;
	}());
	exports.NgbPopoverModule = NgbPopoverModule;
	//# sourceMappingURL=popover.module.js.map
	
	/***/ },
	/* 19 */
	/***/ function(module, exports, __webpack_require__) {
	
	"use strict";
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
	var core_1 = __webpack_require__(0);
	var progressbar_1 = __webpack_require__(62);
	var progressbar_config_1 = __webpack_require__(36);
	var progressbar_2 = __webpack_require__(62);
	exports.NgbProgressbar = progressbar_2.NgbProgressbar;
	var progressbar_config_2 = __webpack_require__(36);
	exports.NgbProgressbarConfig = progressbar_config_2.NgbProgressbarConfig;
	var NgbProgressbarModule = (function () {
	    function NgbProgressbarModule() {
	    }
	    NgbProgressbarModule.forRoot = function () { return { ngModule: NgbProgressbarModule, providers: [progressbar_config_1.NgbProgressbarConfig] }; };
	    NgbProgressbarModule = __decorate([
	        core_1.NgModule({ declarations: [progressbar_1.NgbProgressbar], exports: [progressbar_1.NgbProgressbar] }), 
	        __metadata('design:paramtypes', [])
	    ], NgbProgressbarModule);
	    return NgbProgressbarModule;
	}());
	exports.NgbProgressbarModule = NgbProgressbarModule;
	//# sourceMappingURL=progressbar.module.js.map
	
	/***/ },
	/* 20 */
	/***/ function(module, exports, __webpack_require__) {
	
	"use strict";
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
	var core_1 = __webpack_require__(0);
	var common_1 = __webpack_require__(2);
	var rating_config_1 = __webpack_require__(37);
	var rating_1 = __webpack_require__(63);
	var rating_2 = __webpack_require__(63);
	exports.NgbRating = rating_2.NgbRating;
	var rating_config_2 = __webpack_require__(37);
	exports.NgbRatingConfig = rating_config_2.NgbRatingConfig;
	var NgbRatingModule = (function () {
	    function NgbRatingModule() {
	    }
	    NgbRatingModule.forRoot = function () { return { ngModule: NgbRatingModule, providers: [rating_config_1.NgbRatingConfig] }; };
	    NgbRatingModule = __decorate([
	        core_1.NgModule({ declarations: [rating_1.NgbRating], exports: [rating_1.NgbRating], imports: [common_1.CommonModule] }), 
	        __metadata('design:paramtypes', [])
	    ], NgbRatingModule);
	    return NgbRatingModule;
	}());
	exports.NgbRatingModule = NgbRatingModule;
	//# sourceMappingURL=rating.module.js.map
	
	/***/ },
	/* 21 */
	/***/ function(module, exports, __webpack_require__) {
	
	"use strict";
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
	var core_1 = __webpack_require__(0);
	var common_1 = __webpack_require__(2);
	var tabset_1 = __webpack_require__(64);
	var tabset_config_1 = __webpack_require__(38);
	var tabset_2 = __webpack_require__(64);
	exports.NgbTabset = tabset_2.NgbTabset;
	exports.NgbTab = tabset_2.NgbTab;
	exports.NgbTabContent = tabset_2.NgbTabContent;
	exports.NgbTabTitle = tabset_2.NgbTabTitle;
	var tabset_config_2 = __webpack_require__(38);
	exports.NgbTabsetConfig = tabset_config_2.NgbTabsetConfig;
	var NGB_TABSET_DIRECTIVES = [tabset_1.NgbTabset, tabset_1.NgbTab, tabset_1.NgbTabContent, tabset_1.NgbTabTitle];
	var NgbTabsetModule = (function () {
	    function NgbTabsetModule() {
	    }
	    NgbTabsetModule.forRoot = function () { return { ngModule: NgbTabsetModule, providers: [tabset_config_1.NgbTabsetConfig] }; };
	    NgbTabsetModule = __decorate([
	        core_1.NgModule({ declarations: NGB_TABSET_DIRECTIVES, exports: NGB_TABSET_DIRECTIVES, imports: [common_1.CommonModule] }), 
	        __metadata('design:paramtypes', [])
	    ], NgbTabsetModule);
	    return NgbTabsetModule;
	}());
	exports.NgbTabsetModule = NgbTabsetModule;
	//# sourceMappingURL=tabset.module.js.map
	
	/***/ },
	/* 22 */
	/***/ function(module, exports, __webpack_require__) {
	
	"use strict";
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
	var core_1 = __webpack_require__(0);
	var common_1 = __webpack_require__(2);
	var timepicker_1 = __webpack_require__(65);
	var timepicker_config_1 = __webpack_require__(39);
	var timepicker_2 = __webpack_require__(65);
	exports.NgbTimepicker = timepicker_2.NgbTimepicker;
	var timepicker_config_2 = __webpack_require__(39);
	exports.NgbTimepickerConfig = timepicker_config_2.NgbTimepickerConfig;
	var NgbTimepickerModule = (function () {
	    function NgbTimepickerModule() {
	    }
	    NgbTimepickerModule.forRoot = function () { return { ngModule: NgbTimepickerModule, providers: [timepicker_config_1.NgbTimepickerConfig] }; };
	    NgbTimepickerModule = __decorate([
	        core_1.NgModule({ declarations: [timepicker_1.NgbTimepicker], exports: [timepicker_1.NgbTimepicker], imports: [common_1.CommonModule] }), 
	        __metadata('design:paramtypes', [])
	    ], NgbTimepickerModule);
	    return NgbTimepickerModule;
	}());
	exports.NgbTimepickerModule = NgbTimepickerModule;
	//# sourceMappingURL=timepicker.module.js.map
	
	/***/ },
	/* 23 */
	/***/ function(module, exports, __webpack_require__) {
	
	"use strict";
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
	var core_1 = __webpack_require__(0);
	var tooltip_1 = __webpack_require__(66);
	var tooltip_config_1 = __webpack_require__(40);
	var tooltip_config_2 = __webpack_require__(40);
	exports.NgbTooltipConfig = tooltip_config_2.NgbTooltipConfig;
	var tooltip_2 = __webpack_require__(66);
	exports.NgbTooltip = tooltip_2.NgbTooltip;
	var NgbTooltipModule = (function () {
	    function NgbTooltipModule() {
	    }
	    NgbTooltipModule.forRoot = function () { return { ngModule: NgbTooltipModule, providers: [tooltip_config_1.NgbTooltipConfig] }; };
	    NgbTooltipModule = __decorate([
	        core_1.NgModule({ declarations: [tooltip_1.NgbTooltip, tooltip_1.NgbTooltipWindow], exports: [tooltip_1.NgbTooltip], entryComponents: [tooltip_1.NgbTooltipWindow] }), 
	        __metadata('design:paramtypes', [])
	    ], NgbTooltipModule);
	    return NgbTooltipModule;
	}());
	exports.NgbTooltipModule = NgbTooltipModule;
	//# sourceMappingURL=tooltip.module.js.map
	
	/***/ },
	/* 24 */
	/***/ function(module, exports, __webpack_require__) {
	
	"use strict";
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
	var core_1 = __webpack_require__(0);
	var common_1 = __webpack_require__(2);
	var highlight_1 = __webpack_require__(67);
	var typeahead_window_1 = __webpack_require__(42);
	var typeahead_1 = __webpack_require__(71);
	var typeahead_config_1 = __webpack_require__(41);
	var highlight_2 = __webpack_require__(67);
	exports.NgbHighlight = highlight_2.NgbHighlight;
	var typeahead_window_2 = __webpack_require__(42);
	exports.NgbTypeaheadWindow = typeahead_window_2.NgbTypeaheadWindow;
	var typeahead_config_2 = __webpack_require__(41);
	exports.NgbTypeaheadConfig = typeahead_config_2.NgbTypeaheadConfig;
	var NgbTypeaheadModule = (function () {
	    function NgbTypeaheadModule() {
	    }
	    NgbTypeaheadModule.forRoot = function () { return { ngModule: NgbTypeaheadModule, providers: [typeahead_config_1.NgbTypeaheadConfig] }; };
	    NgbTypeaheadModule = __decorate([
	        core_1.NgModule({
	            declarations: [typeahead_1.NgbTypeahead, highlight_1.NgbHighlight, typeahead_window_1.NgbTypeaheadWindow],
	            exports: [typeahead_1.NgbTypeahead],
	            imports: [common_1.CommonModule],
	            entryComponents: [typeahead_window_1.NgbTypeaheadWindow]
	        }), 
	        __metadata('design:paramtypes', [])
	    ], NgbTypeaheadModule);
	    return NgbTypeaheadModule;
	}());
	exports.NgbTypeaheadModule = NgbTypeaheadModule;
	//# sourceMappingURL=typeahead.module.js.map
	
	/***/ },
	/* 25 */
	/***/ function(module, exports, __webpack_require__) {
	
	"use strict";
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
	var core_1 = __webpack_require__(0);
	/**
	 * Configuration service for the NgbAccordion component.
	 * You can inject this service, typically in your root component, and customize the values of its properties in
	 * order to provide default values for all the accordions used in the application.
	 */
	var NgbAccordionConfig = (function () {
	    function NgbAccordionConfig() {
	        this.closeOthers = false;
	    }
	    NgbAccordionConfig = __decorate([
	        core_1.Injectable(), 
	        __metadata('design:paramtypes', [])
	    ], NgbAccordionConfig);
	    return NgbAccordionConfig;
	}());
	exports.NgbAccordionConfig = NgbAccordionConfig;
	//# sourceMappingURL=accordion-config.js.map
	
	/***/ },
	/* 26 */
	/***/ function(module, exports, __webpack_require__) {
	
	"use strict";
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
	var core_1 = __webpack_require__(0);
	/**
	 * Configuration service for the NgbAlert component.
	 * You can inject this service, typically in your root component, and customize the values of its properties in
	 * order to provide default values for all the alerts used in the application.
	 */
	var NgbAlertConfig = (function () {
	    function NgbAlertConfig() {
	        this.dismissible = true;
	        this.type = 'warning';
	    }
	    NgbAlertConfig = __decorate([
	        core_1.Injectable(), 
	        __metadata('design:paramtypes', [])
	    ], NgbAlertConfig);
	    return NgbAlertConfig;
	}());
	exports.NgbAlertConfig = NgbAlertConfig;
	//# sourceMappingURL=alert-config.js.map
	
	/***/ },
	/* 27 */
	/***/ function(module, exports, __webpack_require__) {
	
	"use strict";
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
	var core_1 = __webpack_require__(0);
	/**
	 * Configuration service for the NgbCarousel component.
	 * You can inject this service, typically in your root component, and customize the values of its properties in
	 * order to provide default values for all the carousels used in the application.
	 */
	var NgbCarouselConfig = (function () {
	    function NgbCarouselConfig() {
	        this.interval = 5000;
	        this.wrap = true;
	        this.keyboard = true;
	    }
	    NgbCarouselConfig = __decorate([
	        core_1.Injectable(), 
	        __metadata('design:paramtypes', [])
	    ], NgbCarouselConfig);
	    return NgbCarouselConfig;
	}());
	exports.NgbCarouselConfig = NgbCarouselConfig;
	//# sourceMappingURL=carousel-config.js.map
	
	/***/ },
	/* 28 */
	/***/ function(module, exports, __webpack_require__) {
	
	"use strict";
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
	var core_1 = __webpack_require__(0);
	/**
	 * Configuration service for the NgbDatepicker component.
	 * You can inject this service, typically in your root component, and customize the values of its properties in
	 * order to provide default values for all the datepickers used in the application.
	 */
	var NgbDatepickerConfig = (function () {
	    function NgbDatepickerConfig() {
	        this.displayMonths = 1;
	        this.firstDayOfWeek = 1;
	        this.navigation = 'select';
	        this.outsideDays = 'visible';
	        this.showWeekdays = true;
	        this.showWeekNumbers = false;
	    }
	    NgbDatepickerConfig = __decorate([
	        core_1.Injectable(), 
	        __metadata('design:paramtypes', [])
	    ], NgbDatepickerConfig);
	    return NgbDatepickerConfig;
	}());
	exports.NgbDatepickerConfig = NgbDatepickerConfig;
	//# sourceMappingURL=datepicker-config.js.map
	
	/***/ },
	/* 29 */
	/***/ function(module, exports, __webpack_require__) {
	
	"use strict";
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
	var ngb_calendar_1 = __webpack_require__(6);
	var ngb_date_1 = __webpack_require__(5);
	var core_1 = __webpack_require__(0);
	var NgbDatepickerService = (function () {
	    function NgbDatepickerService(_calendar) {
	        this._calendar = _calendar;
	    }
	    NgbDatepickerService.prototype.generateMonthViewModel = function (date, minDate, maxDate, firstDayOfWeek, markDisabled) {
	        var month = { firstDate: null, number: date.month, year: date.year, weeks: [], weekdays: [] };
	        date = this._getFirstViewDate(date, firstDayOfWeek);
	        // month has weeks
	        for (var w = 0; w < this._calendar.getWeeksPerMonth(); w++) {
	            var days = [];
	            // week has days
	            for (var d = 0; d < this._calendar.getDaysPerWeek(); d++) {
	                if (w === 0) {
	                    month.weekdays.push(this._calendar.getWeekday(date));
	                }
	                var newDate = new ngb_date_1.NgbDate(date.year, date.month, date.day);
	                var disabled = (minDate && newDate.before(minDate)) || (maxDate && newDate.after(maxDate));
	                if (!disabled && markDisabled) {
	                    disabled = markDisabled(newDate, { month: month.number, year: month.year });
	                }
	                // saving first date of the month
	                if (month.firstDate === null && date.month === month.number) {
	                    month.firstDate = newDate;
	                }
	                days.push({ date: newDate, disabled: disabled });
	                date = this._calendar.getNext(date);
	            }
	            month.weeks.push({ number: this._calendar.getWeekNumber(days.map(function (day) { return ngb_date_1.NgbDate.from(day.date); }), firstDayOfWeek), days: days });
	        }
	        return month;
	    };
	    NgbDatepickerService.prototype.toValidDate = function (date, defaultValue) {
	        var ngbDate = ngb_date_1.NgbDate.from(date);
	        if (defaultValue === undefined) {
	            defaultValue = this._calendar.getToday();
	        }
	        return this._calendar.isValid(ngbDate) ? ngbDate : defaultValue;
	    };
	    NgbDatepickerService.prototype._getFirstViewDate = function (date, firstDayOfWeek) {
	        var _this = this;
	        var currentMonth = date.month;
	        var today = new ngb_date_1.NgbDate(date.year, date.month, date.day);
	        var yesterday = this._calendar.getPrev(today);
	        var firstDayOfCurrentMonthIsAlsoFirstDayOfWeek = function () { return today.month !== yesterday.month && firstDayOfWeek === _this._calendar.getWeekday(today); };
	        var reachedTheFirstDayOfTheLastWeekOfPreviousMonth = function () { return today.month !== currentMonth && firstDayOfWeek === _this._calendar.getWeekday(today); };
	        // going back in time
	        while (!reachedTheFirstDayOfTheLastWeekOfPreviousMonth() && !firstDayOfCurrentMonthIsAlsoFirstDayOfWeek()) {
	            today = new ngb_date_1.NgbDate(yesterday.year, yesterday.month, yesterday.day);
	            yesterday = this._calendar.getPrev(yesterday);
	        }
	        return today;
	    };
	    NgbDatepickerService = __decorate([
	        core_1.Injectable(), 
	        __metadata('design:paramtypes', [ngb_calendar_1.NgbCalendar])
	    ], NgbDatepickerService);
	    return NgbDatepickerService;
	}());
	exports.NgbDatepickerService = NgbDatepickerService;
	//# sourceMappingURL=datepicker-service.js.map
	
	/***/ },
	/* 30 */
	/***/ function(module, exports, __webpack_require__) {
	
	"use strict";
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
	var core_1 = __webpack_require__(0);
	var forms_1 = __webpack_require__(3);
	var ngb_calendar_1 = __webpack_require__(6);
	var ngb_date_1 = __webpack_require__(5);
	var datepicker_service_1 = __webpack_require__(29);
	var datepicker_view_model_1 = __webpack_require__(53);
	var util_1 = __webpack_require__(1);
	var datepicker_config_1 = __webpack_require__(28);
	var datepicker_i18n_1 = __webpack_require__(4);
	var NGB_DATEPICKER_VALUE_ACCESSOR = {
	    provide: forms_1.NG_VALUE_ACCESSOR,
	    useExisting: core_1.forwardRef(function () { return NgbDatepicker; }),
	    multi: true
	};
	/**
	 * A lightweight and highly configurable datepicker directive
	 */
	var NgbDatepicker = (function () {
	    function NgbDatepicker(_service, _calendar, i18n, config) {
	        this._service = _service;
	        this._calendar = _calendar;
	        this.i18n = i18n;
	        this.months = [];
	        /**
	         * An event fired when navigation happens and currently displayed month changes.
	         * See NgbDatepickerNavigateEvent for the payload info.
	         */
	        this.navigate = new core_1.EventEmitter();
	        this.disabled = false;
	        this.onChange = function (_) { };
	        this.onTouched = function () { };
	        this.dayTemplate = config.dayTemplate;
	        this.displayMonths = config.displayMonths;
	        this.firstDayOfWeek = config.firstDayOfWeek;
	        this.markDisabled = config.markDisabled;
	        this.minDate = config.minDate;
	        this.maxDate = config.maxDate;
	        this.navigation = config.navigation;
	        this.outsideDays = config.outsideDays;
	        this.showWeekdays = config.showWeekdays;
	        this.showWeekNumbers = config.showWeekNumbers;
	        this.startDate = config.startDate;
	    }
	    /**
	     * Navigates current view to provided date.
	     * With default calendar we use ISO 8601: 'month' is 1=Jan ... 12=Dec.
	     * If nothing or invalid date provided calendar will open current month.
	     * Use 'startDate' input as an alternative
	     */
	    NgbDatepicker.prototype.navigateTo = function (date) {
	        this._setViewWithinLimits(this._service.toValidDate(date));
	        this._updateData();
	    };
	    NgbDatepicker.prototype.ngOnInit = function () {
	        this._setDates();
	        this.navigateTo(this._date);
	    };
	    NgbDatepicker.prototype.ngOnChanges = function (changes) {
	        this._setDates();
	        this._setViewWithinLimits(this._date);
	        if (changes['displayMonths']) {
	            this.displayMonths = util_1.toInteger(this.displayMonths);
	        }
	        // we have to force rebuild all months only if any of these inputs changes
	        if (['startDate', 'minDate', 'maxDate', 'navigation', 'firstDayOfWeek', 'markDisabled', 'displayMonths'].some(function (input) { return !!changes[input]; })) {
	            this._updateData(true);
	        }
	    };
	    NgbDatepicker.prototype.onDateSelect = function (date) {
	        this._setViewWithinLimits(date);
	        this.onTouched();
	        this.writeValue(date);
	        this.onChange({ year: date.year, month: date.month, day: date.day });
	        // switch current month
	        if (this._date.month !== this.months[0].number && this.displayMonths === 1) {
	            this._updateData();
	        }
	    };
	    NgbDatepicker.prototype.onNavigateDateSelect = function (date) {
	        this._setViewWithinLimits(date);
	        this._updateData();
	    };
	    NgbDatepicker.prototype.onNavigateEvent = function (event) {
	        switch (event) {
	            case datepicker_view_model_1.NavigationEvent.PREV:
	                this._setViewWithinLimits(this._calendar.getPrev(this.months[0].firstDate, 'm'));
	                break;
	            case datepicker_view_model_1.NavigationEvent.NEXT:
	                this._setViewWithinLimits(this._calendar.getNext(this.months[0].firstDate, 'm'));
	                break;
	        }
	        this._updateData();
	    };
	    NgbDatepicker.prototype.registerOnChange = function (fn) { this.onChange = fn; };
	    NgbDatepicker.prototype.registerOnTouched = function (fn) { this.onTouched = fn; };
	    NgbDatepicker.prototype.writeValue = function (value) { this.model = this._service.toValidDate(value, null); };
	    NgbDatepicker.prototype.setDisabledState = function (isDisabled) { this.disabled = isDisabled; };
	    NgbDatepicker.prototype._setDates = function () {
	        this._maxDate = ngb_date_1.NgbDate.from(this.maxDate);
	        this._minDate = ngb_date_1.NgbDate.from(this.minDate);
	        this._date = this._service.toValidDate(this.startDate);
	        if (!this._calendar.isValid(this._minDate)) {
	            this._minDate = this._calendar.getPrev(this._date, 'y', 10);
	            this.minDate = { year: this._minDate.year, month: this._minDate.month, day: this._minDate.day };
	        }
	        if (!this._calendar.isValid(this._maxDate)) {
	            this._maxDate = this._calendar.getNext(this._date, 'y', 11);
	            this._maxDate = this._calendar.getPrev(this._maxDate);
	            this.maxDate = { year: this._maxDate.year, month: this._maxDate.month, day: this._maxDate.day };
	        }
	        if (this._minDate && this._maxDate && this._maxDate.before(this._minDate)) {
	            throw new Error("'maxDate' " + this._maxDate + " should be greater than 'minDate' " + this._minDate);
	        }
	    };
	    NgbDatepicker.prototype._setViewWithinLimits = function (date) {
	        if (this._minDate && date.before(this._minDate)) {
	            this._date = new ngb_date_1.NgbDate(this._minDate.year, this._minDate.month, 1);
	        }
	        else if (this._maxDate && date.after(this._maxDate)) {
	            this._date = new ngb_date_1.NgbDate(this._maxDate.year, this._maxDate.month, 1);
	        }
	        else {
	            this._date = new ngb_date_1.NgbDate(date.year, date.month, 1);
	        }
	    };
	    NgbDatepicker.prototype._updateData = function (force) {
	        if (force === void 0) { force = false; }
	        var newMonths = [];
	        var _loop_1 = function(i) {
	            var newDate_1 = this_1._calendar.getNext(this_1._date, 'm', i);
	            var index = this_1.months.findIndex(function (month) { return month.firstDate.equals(newDate_1); });
	            if (force || index === -1) {
	                newMonths.push(this_1._service.generateMonthViewModel(newDate_1, this_1._minDate, this_1._maxDate, util_1.toInteger(this_1.firstDayOfWeek), this_1.markDisabled));
	            }
	            else {
	                newMonths.push(this_1.months[index]);
	            }
	        };
	        var this_1 = this;
	        for (var i = 0; i < this.displayMonths; i++) {
	            _loop_1(i);
	        }
	        var newDate = newMonths[0].firstDate;
	        var oldDate = this.months[0] ? this.months[0].firstDate : null;
	        this.months = newMonths;
	        // emitting navigation event if the first month changes
	        if (!newDate.equals(oldDate)) {
	            this.navigate.emit({
	                current: oldDate ? { year: oldDate.year, month: oldDate.month } : null,
	                next: { year: newDate.year, month: newDate.month }
	            });
	        }
	    };
	    __decorate([
	        core_1.Input(), 
	        __metadata('design:type', core_1.TemplateRef)
	    ], NgbDatepicker.prototype, "dayTemplate", void 0);
	    __decorate([
	        core_1.Input(), 
	        __metadata('design:type', Number)
	    ], NgbDatepicker.prototype, "displayMonths", void 0);
	    __decorate([
	        core_1.Input(), 
	        __metadata('design:type', Number)
	    ], NgbDatepicker.prototype, "firstDayOfWeek", void 0);
	    __decorate([
	        core_1.Input(), 
	        __metadata('design:type', Function)
	    ], NgbDatepicker.prototype, "markDisabled", void 0);
	    __decorate([
	        core_1.Input(), 
	        __metadata('design:type', Object)
	    ], NgbDatepicker.prototype, "minDate", void 0);
	    __decorate([
	        core_1.Input(), 
	        __metadata('design:type', Object)
	    ], NgbDatepicker.prototype, "maxDate", void 0);
	    __decorate([
	        core_1.Input(), 
	        __metadata('design:type', Object)
	    ], NgbDatepicker.prototype, "navigation", void 0);
	    __decorate([
	        core_1.Input(), 
	        __metadata('design:type', Object)
	    ], NgbDatepicker.prototype, "outsideDays", void 0);
	    __decorate([
	        core_1.Input(), 
	        __metadata('design:type', Boolean)
	    ], NgbDatepicker.prototype, "showWeekdays", void 0);
	    __decorate([
	        core_1.Input(), 
	        __metadata('design:type', Boolean)
	    ], NgbDatepicker.prototype, "showWeekNumbers", void 0);
	    __decorate([
	        core_1.Input(), 
	        __metadata('design:type', Object)
	    ], NgbDatepicker.prototype, "startDate", void 0);
	    __decorate([
	        core_1.Output(), 
	        __metadata('design:type', Object)
	    ], NgbDatepicker.prototype, "navigate", void 0);
	    NgbDatepicker = __decorate([
	        core_1.Component({
	            exportAs: 'ngbDatepicker',
	            selector: 'ngb-datepicker',
	            host: { 'class': 'd-inline-block' },
	            styles: ["\n    .month:first-child {\n      padding-left: 0 !important;\n    }\n  "],
	            template: "\n    <template #dt let-date=\"date\" let-currentMonth=\"currentMonth\" let-selected=\"selected\" let-disabled=\"disabled\">\n       <div ngbDatepickerDayView [date]=\"date\" [currentMonth]=\"currentMonth\" [selected]=\"selected\" [disabled]=\"disabled\"></div>\n    </template>\n\n    <ngb-datepicker-navigation *ngIf=\"navigation !== 'none'\"\n      [date]=\"months[0]?.firstDate\"\n      [minDate]=\"_minDate\"\n      [maxDate]=\"_maxDate\"\n      [disabled]=\"disabled\"\n      [showWeekNumbers]=\"showWeekNumbers\"\n      [showSelect]=\"navigation === 'select'\"\n      (navigate)=\"onNavigateEvent($event)\"\n      (select)=\"onNavigateDateSelect($event)\">\n    </ngb-datepicker-navigation>\n\n    <table>\n      <tr *ngIf=\"navigation !== 'select' || displayMonths > 1\">\n        <td *ngFor=\"let month of months\" class=\"text-xs-center font-weight-bold\">\n          {{ i18n.getMonthName(month.number) }} {{ month.year }}\n        </td>\n      </tr>\n      <tr>\n        <td *ngFor=\"let month of months\" class=\"pl-1 month\">\n          <ngb-datepicker-month-view\n            [month]=\"month\"\n            [selectedDate]=\"model\"\n            [dayTemplate]=\"dayTemplate || dt\"\n            [showWeekdays]=\"showWeekdays\"\n            [showWeekNumbers]=\"showWeekNumbers\"\n            [disabled]=\"disabled\"\n            [outsideDays]=\"displayMonths === 1 ? outsideDays : 'hidden'\"\n            (select)=\"onDateSelect($event)\">\n          </ngb-datepicker-month-view>\n        </td>\n      </tr>\n    </table>\n  ",
	            providers: [NGB_DATEPICKER_VALUE_ACCESSOR]
	        }), 
	        __metadata('design:paramtypes', [datepicker_service_1.NgbDatepickerService, ngb_calendar_1.NgbCalendar, datepicker_i18n_1.NgbDatepickerI18n, datepicker_config_1.NgbDatepickerConfig])
	    ], NgbDatepicker);
	    return NgbDatepicker;
	}());
	exports.NgbDatepicker = NgbDatepicker;
	//# sourceMappingURL=datepicker.js.map
	
	/***/ },
	/* 31 */
	/***/ function(module, exports, __webpack_require__) {
	
	"use strict";
	"use strict";
	var __extends = (this && this.__extends) || function (d, b) {
	    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	    function __() { this.constructor = d; }
	    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	};
	var util_1 = __webpack_require__(1);
	/**
	 * Abstract type serving as a DI token for the service parsing and formatting dates for the NgbInputDatepicker
	 * directive. A default implementation using the ISO 8601 format is provided, but you can provide another implementation
	 * to use an alternative format.
	 */
	var NgbDateParserFormatter = (function () {
	    function NgbDateParserFormatter() {
	    }
	    return NgbDateParserFormatter;
	}());
	exports.NgbDateParserFormatter = NgbDateParserFormatter;
	var NgbDateISOParserFormatter = (function (_super) {
	    __extends(NgbDateISOParserFormatter, _super);
	    function NgbDateISOParserFormatter() {
	        _super.apply(this, arguments);
	    }
	    NgbDateISOParserFormatter.prototype.parse = function (value) {
	        if (value) {
	            var dateParts = value.trim().split('-');
	            if (dateParts.length === 1 && util_1.isNumber(dateParts[0])) {
	                return { year: util_1.toInteger(dateParts[0]), month: null, day: null };
	            }
	            else if (dateParts.length === 2 && util_1.isNumber(dateParts[0]) && util_1.isNumber(dateParts[1])) {
	                return { year: util_1.toInteger(dateParts[0]), month: util_1.toInteger(dateParts[1]), day: null };
	            }
	            else if (dateParts.length === 3 && util_1.isNumber(dateParts[0]) && util_1.isNumber(dateParts[1]) && util_1.isNumber(dateParts[2])) {
	                return { year: util_1.toInteger(dateParts[0]), month: util_1.toInteger(dateParts[1]), day: util_1.toInteger(dateParts[2]) };
	            }
	        }
	        return null;
	    };
	    NgbDateISOParserFormatter.prototype.format = function (date) {
	        return date ?
	            date.year + "-" + (util_1.isNumber(date.month) ? util_1.padNumber(date.month) : '') + "-" + (util_1.isNumber(date.day) ? util_1.padNumber(date.day) : '') :
	            '';
	    };
	    return NgbDateISOParserFormatter;
	}(NgbDateParserFormatter));
	exports.NgbDateISOParserFormatter = NgbDateISOParserFormatter;
	//# sourceMappingURL=ngb-date-parser-formatter.js.map
	
	/***/ },
	/* 32 */
	/***/ function(module, exports, __webpack_require__) {
	
	"use strict";
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
	var core_1 = __webpack_require__(0);
	/**
	 * Configuration service for the NgbDropdown directive.
	 * You can inject this service, typically in your root component, and customize the values of its properties in
	 * order to provide default values for all the dropdowns used in the application.
	 */
	var NgbDropdownConfig = (function () {
	    function NgbDropdownConfig() {
	        this.up = false;
	        this.autoClose = true;
	    }
	    NgbDropdownConfig = __decorate([
	        core_1.Injectable(), 
	        __metadata('design:paramtypes', [])
	    ], NgbDropdownConfig);
	    return NgbDropdownConfig;
	}());
	exports.NgbDropdownConfig = NgbDropdownConfig;
	//# sourceMappingURL=dropdown-config.js.map
	
	/***/ },
	/* 33 */
	/***/ function(module, exports, __webpack_require__) {
	
	"use strict";
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
	var core_1 = __webpack_require__(0);
	var NgbModalStack = (function () {
	    function NgbModalStack() {
	    }
	    NgbModalStack.prototype.open = function (moduleCFR, contentInjector, content, options) {
	        if (options === void 0) { options = {}; }
	        if (!this.modalContainer) {
	            throw new Error('Missing modal container, add <template ngbModalContainer></template> to one of your application templates.');
	        }
	        return this.modalContainer.open(moduleCFR, contentInjector, content, options);
	    };
	    NgbModalStack.prototype.registerContainer = function (modalContainer) { this.modalContainer = modalContainer; };
	    NgbModalStack = __decorate([
	        core_1.Injectable(), 
	        __metadata('design:paramtypes', [])
	    ], NgbModalStack);
	    return NgbModalStack;
	}());
	exports.NgbModalStack = NgbModalStack;
	//# sourceMappingURL=modal-stack.js.map
	
	/***/ },
	/* 34 */
	/***/ function(module, exports, __webpack_require__) {
	
	"use strict";
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
	var core_1 = __webpack_require__(0);
	/**
	 * Configuration service for the NgbPagination component.
	 * You can inject this service, typically in your root component, and customize the values of its properties in
	 * order to provide default values for all the paginations used in the application.
	 */
	var NgbPaginationConfig = (function () {
	    function NgbPaginationConfig() {
	        this.boundaryLinks = false;
	        this.directionLinks = true;
	        this.ellipses = true;
	        this.maxSize = 0;
	        this.pageSize = 10;
	        this.rotate = false;
	    }
	    NgbPaginationConfig = __decorate([
	        core_1.Injectable(), 
	        __metadata('design:paramtypes', [])
	    ], NgbPaginationConfig);
	    return NgbPaginationConfig;
	}());
	exports.NgbPaginationConfig = NgbPaginationConfig;
	//# sourceMappingURL=pagination-config.js.map
	
	/***/ },
	/* 35 */
	/***/ function(module, exports, __webpack_require__) {
	
	"use strict";
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
	var core_1 = __webpack_require__(0);
	/**
	 * Configuration service for the NgbPopover directive.
	 * You can inject this service, typically in your root component, and customize the values of its properties in
	 * order to provide default values for all the popovers used in the application.
	 */
	var NgbPopoverConfig = (function () {
	    function NgbPopoverConfig() {
	        this.placement = 'top';
	        this.triggers = 'click';
	    }
	    NgbPopoverConfig = __decorate([
	        core_1.Injectable(), 
	        __metadata('design:paramtypes', [])
	    ], NgbPopoverConfig);
	    return NgbPopoverConfig;
	}());
	exports.NgbPopoverConfig = NgbPopoverConfig;
	//# sourceMappingURL=popover-config.js.map
	
	/***/ },
	/* 36 */
	/***/ function(module, exports, __webpack_require__) {
	
	"use strict";
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
	var core_1 = __webpack_require__(0);
	/**
	 * Configuration service for the NgbProgressbar component.
	 * You can inject this service, typically in your root component, and customize the values of its properties in
	 * order to provide default values for all the progress bars used in the application.
	 */
	var NgbProgressbarConfig = (function () {
	    function NgbProgressbarConfig() {
	        this.max = 100;
	        this.animated = false;
	        this.striped = false;
	    }
	    NgbProgressbarConfig = __decorate([
	        core_1.Injectable(), 
	        __metadata('design:paramtypes', [])
	    ], NgbProgressbarConfig);
	    return NgbProgressbarConfig;
	}());
	exports.NgbProgressbarConfig = NgbProgressbarConfig;
	//# sourceMappingURL=progressbar-config.js.map
	
	/***/ },
	/* 37 */
	/***/ function(module, exports, __webpack_require__) {
	
	"use strict";
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
	var core_1 = __webpack_require__(0);
	/**
	 * Configuration service for the NgbRating component.
	 * You can inject this service, typically in your root component, and customize the values of its properties in
	 * order to provide default values for all the ratings used in the application.
	 */
	var NgbRatingConfig = (function () {
	    function NgbRatingConfig() {
	        this.max = 10;
	        this.readonly = false;
	    }
	    NgbRatingConfig = __decorate([
	        core_1.Injectable(), 
	        __metadata('design:paramtypes', [])
	    ], NgbRatingConfig);
	    return NgbRatingConfig;
	}());
	exports.NgbRatingConfig = NgbRatingConfig;
	//# sourceMappingURL=rating-config.js.map
	
	/***/ },
	/* 38 */
	/***/ function(module, exports, __webpack_require__) {
	
	"use strict";
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
	var core_1 = __webpack_require__(0);
	/**
	 * Configuration service for the NgbTabset component.
	 * You can inject this service, typically in your root component, and customize the values of its properties in
	 * order to provide default values for all the tabsets used in the application.
	 */
	var NgbTabsetConfig = (function () {
	    function NgbTabsetConfig() {
	        this.type = 'tabs';
	    }
	    NgbTabsetConfig = __decorate([
	        core_1.Injectable(), 
	        __metadata('design:paramtypes', [])
	    ], NgbTabsetConfig);
	    return NgbTabsetConfig;
	}());
	exports.NgbTabsetConfig = NgbTabsetConfig;
	//# sourceMappingURL=tabset-config.js.map
	
	/***/ },
	/* 39 */
	/***/ function(module, exports, __webpack_require__) {
	
	"use strict";
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
	var core_1 = __webpack_require__(0);
	/**
	 * Configuration service for the NgbTimepicker component.
	 * You can inject this service, typically in your root component, and customize the values of its properties in
	 * order to provide default values for all the timepickers used in the application.
	 */
	var NgbTimepickerConfig = (function () {
	    function NgbTimepickerConfig() {
	        this.meridian = false;
	        this.spinners = true;
	        this.seconds = false;
	        this.hourStep = 1;
	        this.minuteStep = 1;
	        this.secondStep = 1;
	        this.disabled = false;
	        this.readonlyInputs = false;
	    }
	    NgbTimepickerConfig = __decorate([
	        core_1.Injectable(), 
	        __metadata('design:paramtypes', [])
	    ], NgbTimepickerConfig);
	    return NgbTimepickerConfig;
	}());
	exports.NgbTimepickerConfig = NgbTimepickerConfig;
	//# sourceMappingURL=timepicker-config.js.map
	
	/***/ },
	/* 40 */
	/***/ function(module, exports, __webpack_require__) {
	
	"use strict";
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
	var core_1 = __webpack_require__(0);
	/**
	 * Configuration service for the NgbTooltip directive.
	 * You can inject this service, typically in your root component, and customize the values of its properties in
	 * order to provide default values for all the tooltips used in the application.
	 */
	var NgbTooltipConfig = (function () {
	    function NgbTooltipConfig() {
	        this.placement = 'top';
	        this.triggers = 'hover';
	    }
	    NgbTooltipConfig = __decorate([
	        core_1.Injectable(), 
	        __metadata('design:paramtypes', [])
	    ], NgbTooltipConfig);
	    return NgbTooltipConfig;
	}());
	exports.NgbTooltipConfig = NgbTooltipConfig;
	//# sourceMappingURL=tooltip-config.js.map
	
	/***/ },
	/* 41 */
	/***/ function(module, exports, __webpack_require__) {
	
	"use strict";
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
	var core_1 = __webpack_require__(0);
	/**
	 * Configuration service for the NgbTypeahead component.
	 * You can inject this service, typically in your root component, and customize the values of its properties in
	 * order to provide default values for all the typeaheads used in the application.
	 */
	var NgbTypeaheadConfig = (function () {
	    function NgbTypeaheadConfig() {
	        this.editable = true;
	        this.focusFirst = true;
	        this.showHint = false;
	    }
	    NgbTypeaheadConfig = __decorate([
	        core_1.Injectable(), 
	        __metadata('design:paramtypes', [])
	    ], NgbTypeaheadConfig);
	    return NgbTypeaheadConfig;
	}());
	exports.NgbTypeaheadConfig = NgbTypeaheadConfig;
	//# sourceMappingURL=typeahead-config.js.map
	
	/***/ },
	/* 42 */
	/***/ function(module, exports, __webpack_require__) {
	
	"use strict";
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
	var core_1 = __webpack_require__(0);
	var util_1 = __webpack_require__(1);
	var NgbTypeaheadWindow = (function () {
	    function NgbTypeaheadWindow() {
	        this.activeIdx = 0;
	        /**
	         * Flag indicating if the first row should be active initially
	         */
	        this.focusFirst = true;
	        /**
	         * A function used to format a given result before display. This function should return a formatted string without any
	         * HTML markup
	         */
	        this.formatter = util_1.toString;
	        /**
	         * Event raised when user selects a particular result row
	         */
	        this.selectEvent = new core_1.EventEmitter();
	    }
	    NgbTypeaheadWindow.prototype.getActive = function () { return this.results[this.activeIdx]; };
	    NgbTypeaheadWindow.prototype.markActive = function (activeIdx) { this.activeIdx = activeIdx; };
	    NgbTypeaheadWindow.prototype.next = function () {
	        if (this.activeIdx === this.results.length - 1) {
	            this.activeIdx = this.focusFirst ? (this.activeIdx + 1) % this.results.length : -1;
	        }
	        else {
	            this.activeIdx++;
	        }
	    };
	    NgbTypeaheadWindow.prototype.prev = function () {
	        if (this.activeIdx < 0) {
	            this.activeIdx = this.results.length - 1;
	        }
	        else if (this.activeIdx === 0) {
	            this.activeIdx = this.focusFirst ? this.results.length - 1 : -1;
	        }
	        else {
	            this.activeIdx--;
	        }
	    };
	    NgbTypeaheadWindow.prototype.select = function (item) { this.selectEvent.emit(item); };
	    NgbTypeaheadWindow.prototype.ngOnInit = function () { this.activeIdx = this.focusFirst ? 0 : -1; };
	    __decorate([
	        core_1.Input(), 
	        __metadata('design:type', Object)
	    ], NgbTypeaheadWindow.prototype, "focusFirst", void 0);
	    __decorate([
	        core_1.Input(), 
	        __metadata('design:type', Object)
	    ], NgbTypeaheadWindow.prototype, "results", void 0);
	    __decorate([
	        core_1.Input(), 
	        __metadata('design:type', String)
	    ], NgbTypeaheadWindow.prototype, "term", void 0);
	    __decorate([
	        core_1.Input(), 
	        __metadata('design:type', Object)
	    ], NgbTypeaheadWindow.prototype, "formatter", void 0);
	    __decorate([
	        core_1.Input(), 
	        __metadata('design:type', core_1.TemplateRef)
	    ], NgbTypeaheadWindow.prototype, "resultTemplate", void 0);
	    __decorate([
	        core_1.Output('select'), 
	        __metadata('design:type', Object)
	    ], NgbTypeaheadWindow.prototype, "selectEvent", void 0);
	    NgbTypeaheadWindow = __decorate([
	        core_1.Component({
	            selector: 'ngb-typeahead-window',
	            exportAs: 'ngbTypeaheadWindow',
	            host: { 'class': 'dropdown-menu', 'style': 'display: block' },
	            template: "\n    <template #rt let-result=\"result\" let-term=\"term\" let-formatter=\"formatter\">\n      <ngb-highlight [result]=\"formatter(result)\" [term]=\"term\"></ngb-highlight>\n    </template>\n    <template ngFor [ngForOf]=\"results\" let-result let-idx=\"index\">\n      <button type=\"button\" class=\"dropdown-item\" [class.active]=\"idx === activeIdx\" \n        (mouseenter)=\"markActive(idx)\" \n        (click)=\"select(result)\">\n          <template [ngTemplateOutlet]=\"resultTemplate || rt\" \n          [ngOutletContext]=\"{result: result, term: term, formatter: formatter}\"></template>\n      </button>\n    </template>\n  "
	        }), 
	        __metadata('design:paramtypes', [])
	    ], NgbTypeaheadWindow);
	    return NgbTypeaheadWindow;
	}());
	exports.NgbTypeaheadWindow = NgbTypeaheadWindow;
	//# sourceMappingURL=typeahead-window.js.map
	
	/***/ },
	/* 43 */
	/***/ function(module, exports, __webpack_require__) {
	
	"use strict";
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
	var core_1 = __webpack_require__(0);
	var util_1 = __webpack_require__(1);
	var accordion_config_1 = __webpack_require__(25);
	var nextId = 0;
	/**
	 * This directive should be used to wrap accordion panel titles that need to contain HTML markup or other directives.
	 */
	var NgbPanelTitle = (function () {
	    function NgbPanelTitle(templateRef) {
	        this.templateRef = templateRef;
	    }
	    NgbPanelTitle = __decorate([
	        core_1.Directive({ selector: 'template[ngbPanelTitle]' }), 
	        __metadata('design:paramtypes', [core_1.TemplateRef])
	    ], NgbPanelTitle);
	    return NgbPanelTitle;
	}());
	exports.NgbPanelTitle = NgbPanelTitle;
	/**
	 * This directive must be used to wrap accordion panel content.
	 */
	var NgbPanelContent = (function () {
	    function NgbPanelContent(templateRef) {
	        this.templateRef = templateRef;
	    }
	    NgbPanelContent = __decorate([
	        core_1.Directive({ selector: 'template[ngbPanelContent]' }), 
	        __metadata('design:paramtypes', [core_1.TemplateRef])
	    ], NgbPanelContent);
	    return NgbPanelContent;
	}());
	exports.NgbPanelContent = NgbPanelContent;
	/**
	 * The NgbPanel directive represents an in individual panel with the title and collapsible
	 * content
	 */
	var NgbPanel = (function () {
	    function NgbPanel() {
	        /**
	         * Defines if the tab control is focused
	         */
	        this.focused = false;
	        /**
	         *  A flag determining whether the panel is disabled or not.
	         *  When disabled, the panel cannot be toggled.
	         */
	        this.disabled = false;
	        /**
	         *  An optional id for the panel. The id should be unique.
	         *  If not provided, it will be auto-generated.
	         */
	        this.id = "ngb-panel-" + nextId++;
	    }
	    __decorate([
	        core_1.Input(), 
	        __metadata('design:type', Object)
	    ], NgbPanel.prototype, "disabled", void 0);
	    __decorate([
	        core_1.Input(), 
	        __metadata('design:type', Object)
	    ], NgbPanel.prototype, "id", void 0);
	    __decorate([
	        core_1.Input(), 
	        __metadata('design:type', String)
	    ], NgbPanel.prototype, "title", void 0);
	    __decorate([
	        core_1.Input(), 
	        __metadata('design:type', String)
	    ], NgbPanel.prototype, "type", void 0);
	    __decorate([
	        core_1.ContentChild(NgbPanelContent), 
	        __metadata('design:type', NgbPanelContent)
	    ], NgbPanel.prototype, "contentTpl", void 0);
	    __decorate([
	        core_1.ContentChild(NgbPanelTitle), 
	        __metadata('design:type', NgbPanelTitle)
	    ], NgbPanel.prototype, "titleTpl", void 0);
	    NgbPanel = __decorate([
	        core_1.Directive({ selector: 'ngb-panel' }), 
	        __metadata('design:paramtypes', [])
	    ], NgbPanel);
	    return NgbPanel;
	}());
	exports.NgbPanel = NgbPanel;
	/**
	 * The NgbAccordion directive is a collection of panels.
	 * It can assure that only panel can be opened at a time.
	 */
	var NgbAccordion = (function () {
	    function NgbAccordion(config) {
	        /**
	         * A map that stores each panel state
	         */
	        this._states = new Map();
	        /**
	         * A map that stores references to all panels
	         */
	        this._panelRefs = new Map();
	        /**
	         * An array or comma separated strings of panel identifiers that should be opened
	         */
	        this.activeIds = [];
	        /**
	         * A panel change event fired right before the panel toggle happens. See NgbPanelChangeEvent for payload details
	         */
	        this.panelChange = new core_1.EventEmitter();
	        this.type = config.type;
	        this.closeOtherPanels = config.closeOthers;
	    }
	    /**
	     * Programmatically toggle a panel with a given id.
	     */
	    NgbAccordion.prototype.toggle = function (panelId) {
	        var panel = this._panelRefs.get(panelId);
	        if (panel && !panel.disabled) {
	            var nextState = !this._states.get(panelId);
	            var defaultPrevented_1 = false;
	            this.panelChange.emit({ panelId: panelId, nextState: nextState, preventDefault: function () { defaultPrevented_1 = true; } });
	            if (!defaultPrevented_1) {
	                this._states.set(panelId, nextState);
	                if (this.closeOtherPanels) {
	                    this._closeOthers(panelId);
	                }
	                this._updateActiveIds();
	            }
	        }
	    };
	    NgbAccordion.prototype.ngAfterContentChecked = function () {
	        // active id updates
	        if (util_1.isString(this.activeIds)) {
	            this.activeIds = this.activeIds.split(/\s*,\s*/);
	        }
	        this._updateStates();
	        // closeOthers updates
	        if (this.activeIds.length > 1 && this.closeOtherPanels) {
	            this._closeOthers(this.activeIds[0]);
	            this._updateActiveIds();
	        }
	    };
	    /**
	     * @internal
	     */
	    NgbAccordion.prototype.isOpen = function (panelId) { return this._states.get(panelId); };
	    NgbAccordion.prototype._closeOthers = function (panelId) {
	        var _this = this;
	        this._states.forEach(function (state, id) {
	            if (id !== panelId) {
	                _this._states.set(id, false);
	            }
	        });
	    };
	    NgbAccordion.prototype._updateActiveIds = function () {
	        var _this = this;
	        this.activeIds =
	            this.panels.toArray().filter(function (panel) { return _this.isOpen(panel.id) && !panel.disabled; }).map(function (panel) { return panel.id; });
	    };
	    NgbAccordion.prototype._updateStates = function () {
	        var _this = this;
	        this._states.clear();
	        this._panelRefs.clear();
	        this.panels.toArray().forEach(function (panel) {
	            _this._states.set(panel.id, _this.activeIds.indexOf(panel.id) > -1 && !panel.disabled);
	            _this._panelRefs.set(panel.id, panel);
	        });
	    };
	    __decorate([
	        core_1.ContentChildren(NgbPanel), 
	        __metadata('design:type', core_1.QueryList)
	    ], NgbAccordion.prototype, "panels", void 0);
	    __decorate([
	        core_1.Input(), 
	        __metadata('design:type', Object)
	    ], NgbAccordion.prototype, "activeIds", void 0);
	    __decorate([
	        core_1.Input('closeOthers'), 
	        __metadata('design:type', Boolean)
	    ], NgbAccordion.prototype, "closeOtherPanels", void 0);
	    __decorate([
	        core_1.Input(), 
	        __metadata('design:type', String)
	    ], NgbAccordion.prototype, "type", void 0);
	    __decorate([
	        core_1.Output(), 
	        __metadata('design:type', Object)
	    ], NgbAccordion.prototype, "panelChange", void 0);
	    NgbAccordion = __decorate([
	        core_1.Component({
	            selector: 'ngb-accordion',
	            exportAs: 'ngbAccordion',
	            host: { 'role': 'tablist', '[attr.aria-multiselectable]': '!closeOtherPanels' },
	            template: "\n  <div class=\"card\">\n    <template ngFor let-panel [ngForOf]=\"panels\">\n      <div role=\"tab\" id=\"{{panel.id}}-header\" [attr.aria-selected]=\"panel.focused\"\n        [class]=\"'card-header ' + (panel.type ? 'card-'+panel.type: type ? 'card-'+type : '')\" [class.active]=\"isOpen(panel.id)\">\n        <a href (click)=\"!!toggle(panel.id)\" (focus)=\"panel.focused = true\" \n          (blur)=\"panel.focused = false\" [class.text-muted]=\"panel.disabled\" \n          [attr.aria-expanded]=\"isOpen(panel.id)\" [attr.aria-controls]=\"panel.id\">\n          {{panel.title}}<template [ngTemplateOutlet]=\"panel.titleTpl?.templateRef\"></template>\n        </a>\n      </div>\n      <div id=\"{{panel.id}}\" role=\"tabpanel\" [attr.aria-labelledby]=\"panel.id + '-header'\" class=\"card-block\" *ngIf=\"isOpen(panel.id)\">\n        <template [ngTemplateOutlet]=\"panel.contentTpl.templateRef\"></template>\n      </div>\n    </template>\n  </div>\n"
	        }), 
	        __metadata('design:paramtypes', [accordion_config_1.NgbAccordionConfig])
	    ], NgbAccordion);
	    return NgbAccordion;
	}());
	exports.NgbAccordion = NgbAccordion;
	//# sourceMappingURL=accordion.js.map
	
	/***/ },
	/* 44 */
	/***/ function(module, exports, __webpack_require__) {
	
	"use strict";
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
	var core_1 = __webpack_require__(0);
	var alert_config_1 = __webpack_require__(26);
	/**
	 * Alerts can be used to provide feedback messages.
	 */
	var NgbAlert = (function () {
	    function NgbAlert(config) {
	        /**
	         * An event emitted when the close button is clicked. This event has no payload. Only relevant for dismissible alerts.
	         */
	        this.close = new core_1.EventEmitter();
	        this.dismissible = config.dismissible;
	        this.type = config.type;
	    }
	    NgbAlert.prototype.closeHandler = function () { this.close.emit(null); };
	    __decorate([
	        core_1.Input(), 
	        __metadata('design:type', Boolean)
	    ], NgbAlert.prototype, "dismissible", void 0);
	    __decorate([
	        core_1.Input(), 
	        __metadata('design:type', String)
	    ], NgbAlert.prototype, "type", void 0);
	    __decorate([
	        core_1.Output(), 
	        __metadata('design:type', Object)
	    ], NgbAlert.prototype, "close", void 0);
	    NgbAlert = __decorate([
	        core_1.Component({
	            selector: 'ngb-alert',
	            changeDetection: core_1.ChangeDetectionStrategy.OnPush,
	            template: "\n    <div [class]=\"'alert alert-' + type\" role=\"alert\">\n      <button *ngIf=\"dismissible\" type=\"button\" class=\"close\" aria-label=\"Close\" (click)=\"closeHandler()\">\n            <span aria-hidden=\"true\">&times;</span>\n      </button>\n      <ng-content></ng-content>\n    </div>\n    "
	        }), 
	        __metadata('design:paramtypes', [alert_config_1.NgbAlertConfig])
	    ], NgbAlert);
	    return NgbAlert;
	}());
	exports.NgbAlert = NgbAlert;
	//# sourceMappingURL=alert.js.map
	
	/***/ },
	/* 45 */
	/***/ function(module, exports, __webpack_require__) {
	
	"use strict";
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
	var core_1 = __webpack_require__(0);
	var forms_1 = __webpack_require__(3);
	var NGB_RADIO_VALUE_ACCESSOR = {
	    provide: forms_1.NG_VALUE_ACCESSOR,
	    useExisting: core_1.forwardRef(function () { return NgbRadioGroup; }),
	    multi: true
	};
	/**
	 * Easily create Bootstrap-style radio buttons. A value of a selected button is bound to a variable
	 * specified via ngModel.
	 */
	var NgbRadioGroup = (function () {
	    function NgbRadioGroup() {
	        this._radios = new Set();
	        this._value = null;
	        this.onChange = function (_) { };
	        this.onTouched = function () { };
	    }
	    NgbRadioGroup.prototype.onRadioChange = function (radio) {
	        this.writeValue(radio.value);
	        this.onChange(radio.value);
	    };
	    NgbRadioGroup.prototype.onRadioValueUpdate = function () { this._updateRadiosValue(); };
	    NgbRadioGroup.prototype.register = function (radio) { this._radios.add(radio); };
	    NgbRadioGroup.prototype.registerOnChange = function (fn) { this.onChange = fn; };
	    NgbRadioGroup.prototype.registerOnTouched = function (fn) { this.onTouched = fn; };
	    NgbRadioGroup.prototype.setDisabledState = function (isDisabled) { this._updateRadiosDisabled(isDisabled); };
	    NgbRadioGroup.prototype.unregister = function (radio) { this._radios.delete(radio); };
	    NgbRadioGroup.prototype.writeValue = function (value) {
	        this._value = value;
	        this._updateRadiosValue();
	    };
	    NgbRadioGroup.prototype._updateRadiosValue = function () {
	        var _this = this;
	        this._radios.forEach(function (radio) { return radio.updateValue(_this._value); });
	    };
	    NgbRadioGroup.prototype._updateRadiosDisabled = function (isDisabled) { this._radios.forEach(function (radio) { return radio.updateDisabled(isDisabled); }); };
	    NgbRadioGroup = __decorate([
	        core_1.Directive({
	            selector: '[ngbRadioGroup]',
	            host: { 'data-toggle': 'buttons', 'class': 'btn-group' },
	            providers: [NGB_RADIO_VALUE_ACCESSOR]
	        }), 
	        __metadata('design:paramtypes', [])
	    ], NgbRadioGroup);
	    return NgbRadioGroup;
	}());
	exports.NgbRadioGroup = NgbRadioGroup;
	var NgbActiveLabel = (function () {
	    function NgbActiveLabel(_renderer, _elRef) {
	        this._renderer = _renderer;
	        this._elRef = _elRef;
	    }
	    Object.defineProperty(NgbActiveLabel.prototype, "active", {
	        set: function (isActive) { this._renderer.setElementClass(this._elRef.nativeElement, 'active', isActive); },
	        enumerable: true,
	        configurable: true
	    });
	    Object.defineProperty(NgbActiveLabel.prototype, "disabled", {
	        set: function (isDisabled) {
	            this._renderer.setElementClass(this._elRef.nativeElement, 'disabled', isDisabled);
	        },
	        enumerable: true,
	        configurable: true
	    });
	    Object.defineProperty(NgbActiveLabel.prototype, "focused", {
	        set: function (isFocused) { this._renderer.setElementClass(this._elRef.nativeElement, 'focus', isFocused); },
	        enumerable: true,
	        configurable: true
	    });
	    NgbActiveLabel = __decorate([
	        core_1.Directive({ selector: 'label.btn' }), 
	        __metadata('design:paramtypes', [core_1.Renderer, core_1.ElementRef])
	    ], NgbActiveLabel);
	    return NgbActiveLabel;
	}());
	exports.NgbActiveLabel = NgbActiveLabel;
	/**
	 * Marks an input of type "radio" as part of the NgbRadioGroup.
	 */
	var NgbRadio = (function () {
	    function NgbRadio(_group, _label, _renderer, _element) {
	        this._group = _group;
	        this._label = _label;
	        this._renderer = _renderer;
	        this._element = _element;
	        this._value = null;
	        if (this._group) {
	            this._group.register(this);
	        }
	    }
	    Object.defineProperty(NgbRadio.prototype, "value", {
	        get: function () { return this._value; },
	        /**
	         * You can specify model value of a given radio by binding to the value property.
	        */
	        set: function (value) {
	            this._value = value;
	            var stringValue = value ? value.toString() : '';
	            this._renderer.setElementProperty(this._element.nativeElement, 'value', stringValue);
	            if (this._group) {
	                this._group.onRadioValueUpdate();
	            }
	        },
	        enumerable: true,
	        configurable: true
	    });
	    Object.defineProperty(NgbRadio.prototype, "checked", {
	        get: function () { return this._checked; },
	        set: function (value) {
	            this._checked = this._element.nativeElement.hasAttribute('checked') ? true : value;
	        },
	        enumerable: true,
	        configurable: true
	    });
	    Object.defineProperty(NgbRadio.prototype, "disabled", {
	        get: function () { return this._disabled; },
	        set: function (isDisabled) {
	            this.updateDisabled(isDisabled !== false);
	        },
	        enumerable: true,
	        configurable: true
	    });
	    Object.defineProperty(NgbRadio.prototype, "focused", {
	        set: function (isFocused) {
	            if (this._label) {
	                this._label.focused = isFocused;
	            }
	        },
	        enumerable: true,
	        configurable: true
	    });
	    NgbRadio.prototype.ngOnDestroy = function () {
	        if (this._group) {
	            this._group.unregister(this);
	        }
	    };
	    NgbRadio.prototype.onChange = function () {
	        if (this._group) {
	            this._group.onRadioChange(this);
	        }
	    };
	    NgbRadio.prototype.updateValue = function (value) {
	        this._checked = (this.value === value && value !== null);
	        this._label.active = this._checked;
	    };
	    NgbRadio.prototype.updateDisabled = function (isDisabled) {
	        this._disabled = isDisabled;
	        if (this._label) {
	            this._label.disabled = this._disabled;
	        }
	    };
	    __decorate([
	        core_1.Input('value'), 
	        __metadata('design:type', Object), 
	        __metadata('design:paramtypes', [Object])
	    ], NgbRadio.prototype, "value", null);
	    __decorate([
	        core_1.Input('checked'), 
	        __metadata('design:type', Object), 
	        __metadata('design:paramtypes', [Object])
	    ], NgbRadio.prototype, "checked", null);
	    __decorate([
	        core_1.Input('disabled'), 
	        __metadata('design:type', Object), 
	        __metadata('design:paramtypes', [Object])
	    ], NgbRadio.prototype, "disabled", null);
	    NgbRadio = __decorate([
	        core_1.Directive({
	            selector: 'input[type=radio]',
	            host: {
	                '[checked]': 'checked',
	                '[disabled]': 'disabled',
	                '(change)': 'onChange()',
	                '(focus)': 'focused = true',
	                '(blur)': 'focused = false'
	            }
	        }),
	        __param(0, core_1.Optional()),
	        __param(1, core_1.Optional()), 
	        __metadata('design:paramtypes', [NgbRadioGroup, NgbActiveLabel, core_1.Renderer, core_1.ElementRef])
	    ], NgbRadio);
	    return NgbRadio;
	}());
	exports.NgbRadio = NgbRadio;
	//# sourceMappingURL=radio.js.map
	
	/***/ },
	/* 46 */
	/***/ function(module, exports, __webpack_require__) {
	
	"use strict";
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
	var core_1 = __webpack_require__(0);
	var carousel_config_1 = __webpack_require__(27);
	var nextId = 0;
	/**
	 * Represents an individual slide to be used within a carousel.
	 */
	var NgbSlide = (function () {
	    function NgbSlide(tplRef) {
	        this.tplRef = tplRef;
	        /**
	         * Unique slide identifier. Must be unique for the entire document for proper accessibility support.
	         * Will be auto-generated if not provided.
	         */
	        this.id = "ngb-slide-" + nextId++;
	    }
	    __decorate([
	        core_1.Input(), 
	        __metadata('design:type', Object)
	    ], NgbSlide.prototype, "id", void 0);
	    NgbSlide = __decorate([
	        core_1.Directive({ selector: 'template[ngbSlide]' }), 
	        __metadata('design:paramtypes', [core_1.TemplateRef])
	    ], NgbSlide);
	    return NgbSlide;
	}());
	exports.NgbSlide = NgbSlide;
	/**
	 * Directive to easily create carousels based on Bootstrap's markup.
	 */
	var NgbCarousel = (function () {
	    function NgbCarousel(config) {
	        this.interval = config.interval;
	        this.wrap = config.wrap;
	        this.keyboard = config.keyboard;
	    }
	    NgbCarousel.prototype.ngAfterContentChecked = function () {
	        var activeSlide = this._getSlideById(this.activeId);
	        this.activeId = activeSlide ? activeSlide.id : (this.slides.length ? this.slides.first.id : null);
	    };
	    NgbCarousel.prototype.ngOnInit = function () { this._startTimer(); };
	    NgbCarousel.prototype.ngOnDestroy = function () { clearInterval(this._slideChangeInterval); };
	    /**
	     * Navigate to a slide with the specified identifier.
	     */
	    NgbCarousel.prototype.select = function (slideId) {
	        this.cycleToSelected(slideId);
	        this._restartTimer();
	    };
	    /**
	     * Navigate to the next slide.
	     */
	    NgbCarousel.prototype.prev = function () {
	        this.cycleToPrev();
	        this._restartTimer();
	    };
	    /**
	     * Navigate to the next slide.
	     */
	    NgbCarousel.prototype.next = function () {
	        this.cycleToNext();
	        this._restartTimer();
	    };
	    /**
	     * Stops the carousel from cycling through items.
	     */
	    NgbCarousel.prototype.pause = function () { this._stopTimer(); };
	    /**
	     * Restarts cycling through the carousel slides from left to right.
	     */
	    NgbCarousel.prototype.cycle = function () { this._startTimer(); };
	    NgbCarousel.prototype.cycleToNext = function () { this.cycleToSelected(this._getNextSlide(this.activeId)); };
	    NgbCarousel.prototype.cycleToPrev = function () { this.cycleToSelected(this._getPrevSlide(this.activeId)); };
	    NgbCarousel.prototype.cycleToSelected = function (slideIdx) {
	        var selectedSlide = this._getSlideById(slideIdx);
	        if (selectedSlide) {
	            this.activeId = selectedSlide.id;
	        }
	    };
	    NgbCarousel.prototype.keyPrev = function () {
	        if (this.keyboard) {
	            this.prev();
	        }
	    };
	    NgbCarousel.prototype.keyNext = function () {
	        if (this.keyboard) {
	            this.next();
	        }
	    };
	    NgbCarousel.prototype._restartTimer = function () {
	        this._stopTimer();
	        this._startTimer();
	    };
	    NgbCarousel.prototype._startTimer = function () {
	        var _this = this;
	        if (this.interval > 0) {
	            this._slideChangeInterval = setInterval(function () { _this.cycleToNext(); }, this.interval);
	        }
	    };
	    NgbCarousel.prototype._stopTimer = function () { clearInterval(this._slideChangeInterval); };
	    NgbCarousel.prototype._getSlideById = function (slideId) {
	        var slideWithId = this.slides.filter(function (slide) { return slide.id === slideId; });
	        return slideWithId.length ? slideWithId[0] : null;
	    };
	    NgbCarousel.prototype._getSlideIdxById = function (slideId) {
	        return this.slides.toArray().indexOf(this._getSlideById(slideId));
	    };
	    NgbCarousel.prototype._getNextSlide = function (currentSlideId) {
	        var slideArr = this.slides.toArray();
	        var currentSlideIdx = this._getSlideIdxById(currentSlideId);
	        var isLastSlide = currentSlideIdx === slideArr.length - 1;
	        return isLastSlide ? (this.wrap ? slideArr[0].id : slideArr[slideArr.length - 1].id) :
	            slideArr[currentSlideIdx + 1].id;
	    };
	    NgbCarousel.prototype._getPrevSlide = function (currentSlideId) {
	        var slideArr = this.slides.toArray();
	        var currentSlideIdx = this._getSlideIdxById(currentSlideId);
	        var isFirstSlide = currentSlideIdx === 0;
	        return isFirstSlide ? (this.wrap ? slideArr[slideArr.length - 1].id : slideArr[0].id) :
	            slideArr[currentSlideIdx - 1].id;
	    };
	    __decorate([
	        core_1.ContentChildren(NgbSlide), 
	        __metadata('design:type', core_1.QueryList)
	    ], NgbCarousel.prototype, "slides", void 0);
	    __decorate([
	        core_1.Input(), 
	        __metadata('design:type', Number)
	    ], NgbCarousel.prototype, "interval", void 0);
	    __decorate([
	        core_1.Input(), 
	        __metadata('design:type', Boolean)
	    ], NgbCarousel.prototype, "wrap", void 0);
	    __decorate([
	        core_1.Input(), 
	        __metadata('design:type', Boolean)
	    ], NgbCarousel.prototype, "keyboard", void 0);
	    __decorate([
	        core_1.Input(), 
	        __metadata('design:type', String)
	    ], NgbCarousel.prototype, "activeId", void 0);
	    NgbCarousel = __decorate([
	        core_1.Component({
	            selector: 'ngb-carousel',
	            exportAs: 'ngbCarousel',
	            host: {
	                'class': 'carousel slide',
	                '[style.display]': '"block"',
	                'tabIndex': '0',
	                '(mouseenter)': 'pause()',
	                '(mouseleave)': 'cycle()',
	                '(keydown.arrowLeft)': 'keyPrev()',
	                '(keydown.arrowRight)': 'keyNext()'
	            },
	            template: "\n    <ol class=\"carousel-indicators\">\n      <li *ngFor=\"let slide of slides\" [id]=\"slide.id\" [class.active]=\"slide.id === activeId\" (click)=\"cycleToSelected(slide.id)\"></li>\n    </ol>\n    <div class=\"carousel-inner\" role=\"listbox\">\n      <div *ngFor=\"let slide of slides\" class=\"carousel-item\" [class.active]=\"slide.id === activeId\">\n        <template [ngTemplateOutlet]=\"slide.tplRef\"></template>\n      </div>\n    </div>\n    <a class=\"left carousel-control\" role=\"button\" (click)=\"cycleToPrev()\">\n      <span class=\"icon-prev\" aria-hidden=\"true\"></span>\n      <span class=\"sr-only\">Previous</span>\n    </a>\n    <a class=\"right carousel-control\" role=\"button\" (click)=\"cycleToNext()\">\n      <span class=\"icon-next\" aria-hidden=\"true\"></span>\n      <span class=\"sr-only\">Next</span>\n    </a>\n    "
	        }), 
	        __metadata('design:paramtypes', [carousel_config_1.NgbCarouselConfig])
	    ], NgbCarousel);
	    return NgbCarousel;
	}());
	exports.NgbCarousel = NgbCarousel;
	exports.NGB_CAROUSEL_DIRECTIVES = [NgbCarousel, NgbSlide];
	//# sourceMappingURL=carousel.js.map
	
	/***/ },
	/* 47 */
	/***/ function(module, exports, __webpack_require__) {
	
	"use strict";
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
	var core_1 = __webpack_require__(0);
	/**
	 * The NgbCollapse directive provides a simple way to hide and show an element with animations.
	 */
	var NgbCollapse = (function () {
	    function NgbCollapse() {
	        /**
	         * A flag indicating collapsed (true) or open (false) state.
	         */
	        this.collapsed = false;
	    }
	    __decorate([
	        core_1.Input('ngbCollapse'), 
	        __metadata('design:type', Object)
	    ], NgbCollapse.prototype, "collapsed", void 0);
	    NgbCollapse = __decorate([
	        core_1.Directive({
	            selector: '[ngbCollapse]',
	            exportAs: 'ngbCollapse',
	            host: { '[class.collapse]': 'true', '[class.in]': '!collapsed', '[attr.aria-expanded]': '!collapsed' }
	        }), 
	        __metadata('design:paramtypes', [])
	    ], NgbCollapse);
	    return NgbCollapse;
	}());
	exports.NgbCollapse = NgbCollapse;
	//# sourceMappingURL=collapse.js.map
	
	/***/ },
	/* 48 */
	/***/ function(module, exports, __webpack_require__) {
	
	"use strict";
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
	var core_1 = __webpack_require__(0);
	var NgbDatepickerDayView = (function () {
	    function NgbDatepickerDayView() {
	    }
	    NgbDatepickerDayView.prototype.isMuted = function () { return !this.selected && (this.date.month !== this.currentMonth || this.disabled); };
	    __decorate([
	        core_1.Input(), 
	        __metadata('design:type', Number)
	    ], NgbDatepickerDayView.prototype, "currentMonth", void 0);
	    __decorate([
	        core_1.Input(), 
	        __metadata('design:type', Object)
	    ], NgbDatepickerDayView.prototype, "date", void 0);
	    __decorate([
	        core_1.Input(), 
	        __metadata('design:type', Boolean)
	    ], NgbDatepickerDayView.prototype, "disabled", void 0);
	    __decorate([
	        core_1.Input(), 
	        __metadata('design:type', Boolean)
	    ], NgbDatepickerDayView.prototype, "selected", void 0);
	    NgbDatepickerDayView = __decorate([
	        core_1.Component({
	            selector: '[ngbDatepickerDayView]',
	            styles: ["\n    :host {      \n      text-align: center;\n      padding: 0.185rem 0.25rem;      \n      border-radius: 0.25rem;\n    }\n  "],
	            host: {
	                '[class.bg-primary]': 'selected',
	                '[class.text-white]': 'selected',
	                '[class.text-muted]': 'isMuted()',
	                '[class.btn-secondary]': '!disabled'
	            },
	            template: "{{ date.day }}"
	        }), 
	        __metadata('design:paramtypes', [])
	    ], NgbDatepickerDayView);
	    return NgbDatepickerDayView;
	}());
	exports.NgbDatepickerDayView = NgbDatepickerDayView;
	//# sourceMappingURL=datepicker-day-view.js.map
	
	/***/ },
	/* 49 */
	/***/ function(module, exports, __webpack_require__) {
	
	"use strict";
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
	var core_1 = __webpack_require__(0);
	var forms_1 = __webpack_require__(3);
	var datepicker_1 = __webpack_require__(30);
	var ngb_date_parser_formatter_1 = __webpack_require__(31);
	var positioning_1 = __webpack_require__(8);
	var datepicker_service_1 = __webpack_require__(29);
	var NGB_DATEPICKER_VALUE_ACCESSOR = {
	    provide: forms_1.NG_VALUE_ACCESSOR,
	    useExisting: core_1.forwardRef(function () { return NgbInputDatepicker; }),
	    multi: true
	};
	/**
	 * A directive that makes it possible to have datepickers on input fields.
	 * Manages integration with the input field itself (data entry) and ngModel (validation etc.).
	 */
	var NgbInputDatepicker = (function () {
	    function NgbInputDatepicker(_parserFormatter, _elRef, _vcRef, _renderer, _cfr, ngZone, _service) {
	        var _this = this;
	        this._parserFormatter = _parserFormatter;
	        this._elRef = _elRef;
	        this._vcRef = _vcRef;
	        this._renderer = _renderer;
	        this._cfr = _cfr;
	        this._service = _service;
	        this._cRef = null;
	        /**
	         * An event fired when navigation happens and currently displayed month changes.
	         * See NgbDatepickerNavigateEvent for the payload info.
	         */
	        this.navigate = new core_1.EventEmitter();
	        this._onChange = function (_) { };
	        this._onTouched = function () { };
	        this._zoneSubscription = ngZone.onStable.subscribe(function () {
	            if (_this._cRef) {
	                positioning_1.positionElements(_this._elRef.nativeElement, _this._cRef.location.nativeElement, 'bottom-left');
	            }
	        });
	    }
	    NgbInputDatepicker.prototype.registerOnChange = function (fn) { this._onChange = fn; };
	    NgbInputDatepicker.prototype.registerOnTouched = function (fn) { this._onTouched = fn; };
	    NgbInputDatepicker.prototype.writeValue = function (value) {
	        this._model =
	            value ? this._service.toValidDate({ year: value.year, month: value.month, day: value.day }, null) : null;
	        this._writeModelValue(this._model);
	    };
	    NgbInputDatepicker.prototype.setDisabledState = function (isDisabled) {
	        this._renderer.setElementProperty(this._elRef.nativeElement, 'disabled', isDisabled);
	        if (this.isOpen()) {
	            this._cRef.instance.setDisabledState(isDisabled);
	        }
	    };
	    NgbInputDatepicker.prototype.manualDateChange = function (value) {
	        this._model = this._service.toValidDate(this._parserFormatter.parse(value), null);
	        this._onChange(this._model ? { year: this._model.year, month: this._model.month, day: this._model.day } : null);
	        this._writeModelValue(this._model);
	    };
	    NgbInputDatepicker.prototype.isOpen = function () { return !!this._cRef; };
	    /**
	     * Opens the datepicker with the selected date indicated by the ngModel value.
	     */
	    NgbInputDatepicker.prototype.open = function () {
	        var _this = this;
	        if (!this.isOpen()) {
	            var cf = this._cfr.resolveComponentFactory(datepicker_1.NgbDatepicker);
	            this._cRef = this._vcRef.createComponent(cf);
	            this._applyPopupStyling(this._cRef.location.nativeElement);
	            this._cRef.instance.writeValue(this._model);
	            this._applyDatepickerInputs(this._cRef.instance);
	            this._subscribeForDatepickerOutputs(this._cRef.instance);
	            this._cRef.instance.ngOnInit();
	            // date selection event handling
	            this._cRef.instance.registerOnChange(function (selectedDate) {
	                _this.writeValue(selectedDate);
	                _this._onChange(selectedDate);
	                _this.close();
	            });
	        }
	    };
	    /**
	     * Closes the datepicker popup.
	     */
	    NgbInputDatepicker.prototype.close = function () {
	        if (this.isOpen()) {
	            this._vcRef.remove(this._vcRef.indexOf(this._cRef.hostView));
	            this._cRef = null;
	        }
	    };
	    /**
	     * Toggles the datepicker popup (opens when closed and closes when opened).
	     */
	    NgbInputDatepicker.prototype.toggle = function () {
	        if (this.isOpen()) {
	            this.close();
	        }
	        else {
	            this.open();
	        }
	    };
	    /**
	     * Navigates current view to provided date.
	     * With default calendar we use ISO 8601: 'month' is 1=Jan ... 12=Dec.
	     * If nothing or invalid date provided calendar will open current month.
	     * Use 'startDate' input as an alternative
	     */
	    NgbInputDatepicker.prototype.navigateTo = function (date) {
	        if (this.isOpen()) {
	            this._cRef.instance.navigateTo(date);
	        }
	    };
	    NgbInputDatepicker.prototype.onBlur = function () { this._onTouched(); };
	    NgbInputDatepicker.prototype._applyDatepickerInputs = function (datepickerInstance) {
	        var _this = this;
	        ['dayTemplate', 'displayMonths', 'firstDayOfWeek', 'markDisabled', 'minDate', 'maxDate', 'navigation',
	            'outsideDays', 'showNavigation', 'showWeekdays', 'showWeekNumbers']
	            .forEach(function (optionName) {
	            if (_this[optionName] !== undefined) {
	                datepickerInstance[optionName] = _this[optionName];
	            }
	        });
	        datepickerInstance.startDate = this.startDate || this._model;
	    };
	    NgbInputDatepicker.prototype._applyPopupStyling = function (nativeElement) {
	        this._renderer.setElementClass(nativeElement, 'dropdown-menu', true);
	        this._renderer.setElementStyle(nativeElement, 'display', 'block');
	        this._renderer.setElementStyle(nativeElement, 'padding', '0.40rem');
	    };
	    NgbInputDatepicker.prototype._subscribeForDatepickerOutputs = function (datepickerInstance) {
	        var _this = this;
	        datepickerInstance.navigate.subscribe(function (date) { return _this.navigate.emit(date); });
	    };
	    NgbInputDatepicker.prototype._writeModelValue = function (model) {
	        this._renderer.setElementProperty(this._elRef.nativeElement, 'value', this._parserFormatter.format(model));
	        if (this.isOpen()) {
	            this._cRef.instance.writeValue(model);
	            this._onTouched();
	        }
	    };
	    __decorate([
	        core_1.Input(), 
	        __metadata('design:type', core_1.TemplateRef)
	    ], NgbInputDatepicker.prototype, "dayTemplate", void 0);
	    __decorate([
	        core_1.Input(), 
	        __metadata('design:type', Number)
	    ], NgbInputDatepicker.prototype, "displayMonths", void 0);
	    __decorate([
	        core_1.Input(), 
	        __metadata('design:type', Number)
	    ], NgbInputDatepicker.prototype, "firstDayOfWeek", void 0);
	    __decorate([
	        core_1.Input(), 
	        __metadata('design:type', Function)
	    ], NgbInputDatepicker.prototype, "markDisabled", void 0);
	    __decorate([
	        core_1.Input(), 
	        __metadata('design:type', Object)
	    ], NgbInputDatepicker.prototype, "minDate", void 0);
	    __decorate([
	        core_1.Input(), 
	        __metadata('design:type', Object)
	    ], NgbInputDatepicker.prototype, "maxDate", void 0);
	    __decorate([
	        core_1.Input(), 
	        __metadata('design:type', Object)
	    ], NgbInputDatepicker.prototype, "navigation", void 0);
	    __decorate([
	        core_1.Input(), 
	        __metadata('design:type', Object)
	    ], NgbInputDatepicker.prototype, "outsideDays", void 0);
	    __decorate([
	        core_1.Input(), 
	        __metadata('design:type', Boolean)
	    ], NgbInputDatepicker.prototype, "showWeekdays", void 0);
	    __decorate([
	        core_1.Input(), 
	        __metadata('design:type', Boolean)
	    ], NgbInputDatepicker.prototype, "showWeekNumbers", void 0);
	    __decorate([
	        core_1.Input(), 
	        __metadata('design:type', Object)
	    ], NgbInputDatepicker.prototype, "startDate", void 0);
	    __decorate([
	        core_1.Output(), 
	        __metadata('design:type', Object)
	    ], NgbInputDatepicker.prototype, "navigate", void 0);
	    NgbInputDatepicker = __decorate([
	        core_1.Directive({
	            selector: 'input[ngbDatepicker]',
	            exportAs: 'ngbDatepicker',
	            host: { '(change)': 'manualDateChange($event.target.value)', '(keyup.esc)': 'close()', '(blur)': 'onBlur()' },
	            providers: [NGB_DATEPICKER_VALUE_ACCESSOR]
	        }), 
	        __metadata('design:paramtypes', [ngb_date_parser_formatter_1.NgbDateParserFormatter, core_1.ElementRef, core_1.ViewContainerRef, core_1.Renderer, core_1.ComponentFactoryResolver, core_1.NgZone, datepicker_service_1.NgbDatepickerService])
	    ], NgbInputDatepicker);
	    return NgbInputDatepicker;
	}());
	exports.NgbInputDatepicker = NgbInputDatepicker;
	//# sourceMappingURL=datepicker-input.js.map
	
	/***/ },
	/* 50 */
	/***/ function(module, exports, __webpack_require__) {
	
	"use strict";
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
	var core_1 = __webpack_require__(0);
	var ngb_date_1 = __webpack_require__(5);
	var datepicker_i18n_1 = __webpack_require__(4);
	var NgbDatepickerMonthView = (function () {
	    function NgbDatepickerMonthView(i18n) {
	        this.i18n = i18n;
	        this.select = new core_1.EventEmitter();
	    }
	    NgbDatepickerMonthView.prototype.doSelect = function (day) {
	        if (!this.isDisabled(day) && !this.isCollapsed(day) && !this.isHidden(day)) {
	            this.select.emit(ngb_date_1.NgbDate.from(day.date));
	        }
	    };
	    NgbDatepickerMonthView.prototype.isDisabled = function (day) { return this.disabled || day.disabled; };
	    NgbDatepickerMonthView.prototype.isSelected = function (date) { return this.selectedDate && this.selectedDate.equals(date); };
	    NgbDatepickerMonthView.prototype.isCollapsed = function (day) { return this.outsideDays === 'collapsed' && this.month.number !== day.date.month; };
	    NgbDatepickerMonthView.prototype.isHidden = function (day) { return this.outsideDays === 'hidden' && this.month.number !== day.date.month; };
	    __decorate([
	        core_1.Input(), 
	        __metadata('design:type', core_1.TemplateRef)
	    ], NgbDatepickerMonthView.prototype, "dayTemplate", void 0);
	    __decorate([
	        core_1.Input(), 
	        __metadata('design:type', Boolean)
	    ], NgbDatepickerMonthView.prototype, "disabled", void 0);
	    __decorate([
	        core_1.Input(), 
	        __metadata('design:type', Object)
	    ], NgbDatepickerMonthView.prototype, "month", void 0);
	    __decorate([
	        core_1.Input(), 
	        __metadata('design:type', Object)
	    ], NgbDatepickerMonthView.prototype, "outsideDays", void 0);
	    __decorate([
	        core_1.Input(), 
	        __metadata('design:type', ngb_date_1.NgbDate)
	    ], NgbDatepickerMonthView.prototype, "selectedDate", void 0);
	    __decorate([
	        core_1.Input(), 
	        __metadata('design:type', Object)
	    ], NgbDatepickerMonthView.prototype, "showWeekdays", void 0);
	    __decorate([
	        core_1.Input(), 
	        __metadata('design:type', Object)
	    ], NgbDatepickerMonthView.prototype, "showWeekNumbers", void 0);
	    __decorate([
	        core_1.Output(), 
	        __metadata('design:type', Object)
	    ], NgbDatepickerMonthView.prototype, "select", void 0);
	    NgbDatepickerMonthView = __decorate([
	        core_1.Component({
	            selector: 'ngb-datepicker-month-view',
	            styles: ["\n    .weekday {\n    }\n    .weeknumber {\n    }\n    .day {\n      padding: 0;\n      height: 100%;\n      cursor: pointer;\n    }\n    .day.disabled, .day.hidden, .day.collapsed {\n      cursor: default;\n    }\n    :host/deep/.day.collapsed > * {\n      display: none;\n    }\n    :host/deep/.day.hidden > * {\n      visibility: hidden;\n    }\n  "],
	            template: "\n    <table>\n      <tr *ngIf=\"showWeekdays\">\n        <td *ngIf=\"showWeekNumbers\"></td>\n        <td *ngFor=\"let w of month.weekdays\" class=\"weekday text-xs-center font-weight-bold\">{{ i18n.getWeekdayName(w) }}</td>\n      </tr>\n      <tr *ngFor=\"let week of month.weeks\">\n        <td *ngIf=\"showWeekNumbers\" class=\"weeknumber small text-xs-center\">{{ week.number }}</td>\n        <td *ngFor=\"let day of week.days\" (click)=\"doSelect(day)\" class=\"day\" [class.disabled]=\"isDisabled(day)\"\n        [class.collapsed]=\"isCollapsed(day)\" [class.hidden]=\"isHidden(day)\">\n            <template [ngTemplateOutlet]=\"dayTemplate\"\n            [ngOutletContext]=\"{date: {year: day.date.year, month: day.date.month, day: day.date.day},\n              currentMonth: month.number,\n              disabled: isDisabled(day),\n              selected: isSelected(day.date)}\">\n            </template>\n        </td>\n      </tr>\n    </table>\n  "
	        }), 
	        __metadata('design:paramtypes', [datepicker_i18n_1.NgbDatepickerI18n])
	    ], NgbDatepickerMonthView);
	    return NgbDatepickerMonthView;
	}());
	exports.NgbDatepickerMonthView = NgbDatepickerMonthView;
	//# sourceMappingURL=datepicker-month-view.js.map
	
	/***/ },
	/* 51 */
	/***/ function(module, exports, __webpack_require__) {
	
	"use strict";
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
	var core_1 = __webpack_require__(0);
	var ngb_date_1 = __webpack_require__(5);
	var util_1 = __webpack_require__(1);
	var datepicker_i18n_1 = __webpack_require__(4);
	var ngb_calendar_1 = __webpack_require__(6);
	var NgbDatepickerNavigationSelect = (function () {
	    function NgbDatepickerNavigationSelect(i18n, calendar) {
	        this.i18n = i18n;
	        this.calendar = calendar;
	        this.years = [];
	        this.select = new core_1.EventEmitter();
	        this.months = calendar.getMonths();
	    }
	    NgbDatepickerNavigationSelect.prototype.ngOnChanges = function (changes) {
	        if (changes['maxDate'] || changes['minDate']) {
	            this._generateYears();
	            this._generateMonths();
	        }
	        if (changes['date'] && changes['date'].currentValue.year !== changes['date'].previousValue.year) {
	            this._generateMonths();
	        }
	    };
	    NgbDatepickerNavigationSelect.prototype.changeMonth = function (month) { this.select.emit(new ngb_date_1.NgbDate(this.date.year, util_1.toInteger(month), 1)); };
	    NgbDatepickerNavigationSelect.prototype.changeYear = function (year) { this.select.emit(new ngb_date_1.NgbDate(util_1.toInteger(year), this.date.month, 1)); };
	    NgbDatepickerNavigationSelect.prototype._generateMonths = function () {
	        var _this = this;
	        this.months = this.calendar.getMonths();
	        if (this.date.year === this.minDate.year) {
	            var index = this.months.findIndex(function (month) { return month === _this.minDate.month; });
	            this.months = this.months.slice(index);
	        }
	        if (this.date.year === this.maxDate.year) {
	            var index = this.months.findIndex(function (month) { return month === _this.maxDate.month; });
	            this.months = this.months.slice(0, index + 1);
	        }
	    };
	    NgbDatepickerNavigationSelect.prototype._generateYears = function () {
	        var _this = this;
	        this.years = Array.from({ length: this.maxDate.year - this.minDate.year + 1 }, function (e, i) { return _this.minDate.year + i; });
	    };
	    __decorate([
	        core_1.Input(), 
	        __metadata('design:type', ngb_date_1.NgbDate)
	    ], NgbDatepickerNavigationSelect.prototype, "date", void 0);
	    __decorate([
	        core_1.Input(), 
	        __metadata('design:type', Boolean)
	    ], NgbDatepickerNavigationSelect.prototype, "disabled", void 0);
	    __decorate([
	        core_1.Input(), 
	        __metadata('design:type', ngb_date_1.NgbDate)
	    ], NgbDatepickerNavigationSelect.prototype, "maxDate", void 0);
	    __decorate([
	        core_1.Input(), 
	        __metadata('design:type', ngb_date_1.NgbDate)
	    ], NgbDatepickerNavigationSelect.prototype, "minDate", void 0);
	    __decorate([
	        core_1.Output(), 
	        __metadata('design:type', Object)
	    ], NgbDatepickerNavigationSelect.prototype, "select", void 0);
	    NgbDatepickerNavigationSelect = __decorate([
	        core_1.Component({
	            selector: 'ngb-datepicker-navigation-select',
	            styles: ["\n    select {\n      /* to align with btn-sm */\n      padding: 0.25rem 0.5rem;\n      font-size: 0.875rem;      \n      line-height: 1.25;\n      /* to cancel the custom height set by custom-select */\n      height: inherit;\n      width: 50%;\n    }\n  "],
	            template: "\n    <select [disabled]=\"disabled\" class=\"custom-select d-inline-block\" [value]=\"date.month\" (change)=\"changeMonth($event.target.value)\">\n      <option *ngFor=\"let m of months\" [value]=\"m\">{{ i18n.getMonthName(m) }}</option>\n    </select>" +
	                "<select [disabled]=\"disabled\" class=\"custom-select d-inline-block\" [value]=\"date.year\" (change)=\"changeYear($event.target.value)\">\n      <option *ngFor=\"let y of years\" [value]=\"y\">{{ y }}</option>\n    </select> \n  " // template needs to be formatted in a certain way so we don't add empty text nodes
	        }), 
	        __metadata('design:paramtypes', [datepicker_i18n_1.NgbDatepickerI18n, ngb_calendar_1.NgbCalendar])
	    ], NgbDatepickerNavigationSelect);
	    return NgbDatepickerNavigationSelect;
	}());
	exports.NgbDatepickerNavigationSelect = NgbDatepickerNavigationSelect;
	//# sourceMappingURL=datepicker-navigation-select.js.map
	
	/***/ },
	/* 52 */
	/***/ function(module, exports, __webpack_require__) {
	
	"use strict";
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
	var core_1 = __webpack_require__(0);
	var datepicker_view_model_1 = __webpack_require__(53);
	var ngb_date_1 = __webpack_require__(5);
	var datepicker_i18n_1 = __webpack_require__(4);
	var ngb_calendar_1 = __webpack_require__(6);
	var NgbDatepickerNavigation = (function () {
	    function NgbDatepickerNavigation(i18n, _calendar) {
	        this.i18n = i18n;
	        this._calendar = _calendar;
	        this.navigation = datepicker_view_model_1.NavigationEvent;
	        this.navigate = new core_1.EventEmitter();
	        this.select = new core_1.EventEmitter();
	    }
	    NgbDatepickerNavigation.prototype.doNavigate = function (event) { this.navigate.emit(event); };
	    NgbDatepickerNavigation.prototype.nextDisabled = function () {
	        return this.disabled || (this.maxDate && this._calendar.getNext(this.date, 'm').after(this.maxDate));
	    };
	    NgbDatepickerNavigation.prototype.prevDisabled = function () {
	        var prevDate = this._calendar.getPrev(this.date, 'm');
	        return this.disabled || (this.minDate && prevDate.year <= this.minDate.year && prevDate.month < this.minDate.month);
	    };
	    NgbDatepickerNavigation.prototype.selectDate = function (date) { this.select.emit(date); };
	    __decorate([
	        core_1.Input(), 
	        __metadata('design:type', ngb_date_1.NgbDate)
	    ], NgbDatepickerNavigation.prototype, "date", void 0);
	    __decorate([
	        core_1.Input(), 
	        __metadata('design:type', Boolean)
	    ], NgbDatepickerNavigation.prototype, "disabled", void 0);
	    __decorate([
	        core_1.Input(), 
	        __metadata('design:type', ngb_date_1.NgbDate)
	    ], NgbDatepickerNavigation.prototype, "maxDate", void 0);
	    __decorate([
	        core_1.Input(), 
	        __metadata('design:type', ngb_date_1.NgbDate)
	    ], NgbDatepickerNavigation.prototype, "minDate", void 0);
	    __decorate([
	        core_1.Input(), 
	        __metadata('design:type', Boolean)
	    ], NgbDatepickerNavigation.prototype, "showSelect", void 0);
	    __decorate([
	        core_1.Input(), 
	        __metadata('design:type', Boolean)
	    ], NgbDatepickerNavigation.prototype, "showWeekNumbers", void 0);
	    __decorate([
	        core_1.Output(), 
	        __metadata('design:type', Object)
	    ], NgbDatepickerNavigation.prototype, "navigate", void 0);
	    __decorate([
	        core_1.Output(), 
	        __metadata('design:type', Object)
	    ], NgbDatepickerNavigation.prototype, "select", void 0);
	    NgbDatepickerNavigation = __decorate([
	        core_1.Component({
	            selector: 'ngb-datepicker-navigation',
	            styles: ["\n    .collapsed {\n        margin-bottom: -1.7rem;\n    }\n  "],
	            template: "\n    <table class=\"w-100\" [class.collapsed]=\"!showSelect\">\n      <tr>\n        <td class=\"text-sm-left\">\n          <button type=\"button\" (click)=\"doNavigate(navigation.PREV)\" class=\"btn btn-sm btn-secondary btn-inline\" \n            [disabled]=\"prevDisabled()\">&lt;</button>\n        </td>\n        \n        <td *ngIf=\"showSelect\">\n          <ngb-datepicker-navigation-select\n            [date]=\"date\"\n            [minDate]=\"minDate\"\n            [maxDate]=\"maxDate\"\n            [disabled] = \"disabled\"\n            (select)=\"selectDate($event)\">\n          </ngb-datepicker-navigation-select>\n        </td>        \n        \n        <td class=\"text-sm-right\">\n          <button type=\"button\" (click)=\"doNavigate(navigation.NEXT)\" class=\"next btn btn-sm btn-secondary btn-inline\" \n            [disabled]=\"nextDisabled()\">&gt;</button>\n        </td>\n      </tr>\n    </table>\n  "
	        }), 
	        __metadata('design:paramtypes', [datepicker_i18n_1.NgbDatepickerI18n, ngb_calendar_1.NgbCalendar])
	    ], NgbDatepickerNavigation);
	    return NgbDatepickerNavigation;
	}());
	exports.NgbDatepickerNavigation = NgbDatepickerNavigation;
	//# sourceMappingURL=datepicker-navigation.js.map
	
	/***/ },
	/* 53 */
	/***/ function(module, exports) {
	
	"use strict";
	"use strict";
	(function (NavigationEvent) {
	    NavigationEvent[NavigationEvent["PREV"] = 0] = "PREV";
	    NavigationEvent[NavigationEvent["NEXT"] = 1] = "NEXT";
	})(exports.NavigationEvent || (exports.NavigationEvent = {}));
	var NavigationEvent = exports.NavigationEvent;
	//# sourceMappingURL=datepicker-view-model.js.map
	
	/***/ },
	/* 54 */
	/***/ function(module, exports, __webpack_require__) {
	
	"use strict";
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
	var core_1 = __webpack_require__(0);
	var dropdown_config_1 = __webpack_require__(32);
	/**
	 * Transforms a node into a dropdown.
	 */
	var NgbDropdown = (function () {
	    function NgbDropdown(config) {
	        /**
	         *  Defines whether or not the dropdown-menu is open initially.
	         */
	        this._open = false;
	        /**
	         *  An event fired when the dropdown is opened or closed.
	         *  Event's payload equals whether dropdown is open.
	         */
	        this.openChange = new core_1.EventEmitter();
	        this.up = config.up;
	        this.autoClose = config.autoClose;
	    }
	    /**
	     * Checks if the dropdown menu is open or not.
	     */
	    NgbDropdown.prototype.isOpen = function () { return this._open; };
	    /**
	     * Opens the dropdown menu of a given navbar or tabbed navigation.
	     */
	    NgbDropdown.prototype.open = function () {
	        if (!this._open) {
	            this._open = true;
	            this.openChange.emit(true);
	        }
	    };
	    /**
	     * Closes the dropdown menu of a given navbar or tabbed navigation.
	     */
	    NgbDropdown.prototype.close = function () {
	        if (this._open) {
	            this._open = false;
	            this.openChange.emit(false);
	        }
	    };
	    /**
	     * Toggles the dropdown menu of a given navbar or tabbed navigation.
	     */
	    NgbDropdown.prototype.toggle = function () {
	        if (this.isOpen()) {
	            this.close();
	        }
	        else {
	            this.open();
	        }
	    };
	    NgbDropdown.prototype.closeFromOutsideClick = function ($event) {
	        if (this.autoClose && !this._isEventFromToggle($event)) {
	            this.close();
	        }
	    };
	    NgbDropdown.prototype.closeFromOutsideEsc = function () {
	        if (this.autoClose) {
	            this.close();
	        }
	    };
	    Object.defineProperty(NgbDropdown.prototype, "toggleElement", {
	        /**
	         * @internal
	         */
	        set: function (toggleElement) { this._toggleElement = toggleElement; },
	        enumerable: true,
	        configurable: true
	    });
	    NgbDropdown.prototype._isEventFromToggle = function ($event) { return !!this._toggleElement && this._toggleElement.contains($event.target); };
	    __decorate([
	        core_1.Input(), 
	        __metadata('design:type', Boolean)
	    ], NgbDropdown.prototype, "up", void 0);
	    __decorate([
	        core_1.Input(), 
	        __metadata('design:type', Boolean)
	    ], NgbDropdown.prototype, "autoClose", void 0);
	    __decorate([
	        core_1.Input('open'), 
	        __metadata('design:type', Object)
	    ], NgbDropdown.prototype, "_open", void 0);
	    __decorate([
	        core_1.Output(), 
	        __metadata('design:type', Object)
	    ], NgbDropdown.prototype, "openChange", void 0);
	    NgbDropdown = __decorate([
	        core_1.Directive({
	            selector: '[ngbDropdown]',
	            exportAs: 'ngbDropdown',
	            host: {
	                '[class.dropdown]': '!up',
	                '[class.dropup]': 'up',
	                '[class.open]': 'isOpen()',
	                '(keyup.esc)': 'closeFromOutsideEsc()',
	                '(document:click)': 'closeFromOutsideClick($event)'
	            }
	        }), 
	        __metadata('design:paramtypes', [dropdown_config_1.NgbDropdownConfig])
	    ], NgbDropdown);
	    return NgbDropdown;
	}());
	exports.NgbDropdown = NgbDropdown;
	/**
	 * Allows the dropdown to be toggled via click. This directive is optional.
	 */
	var NgbDropdownToggle = (function () {
	    function NgbDropdownToggle(dropdown, elementRef) {
	        this.dropdown = dropdown;
	        dropdown.toggleElement = elementRef.nativeElement;
	    }
	    NgbDropdownToggle.prototype.toggleOpen = function () { this.dropdown.toggle(); };
	    NgbDropdownToggle = __decorate([
	        core_1.Directive({
	            selector: '[ngbDropdownToggle]',
	            host: {
	                'class': 'dropdown-toggle',
	                'aria-haspopup': 'true',
	                '[attr.aria-expanded]': 'dropdown.isOpen()',
	                '(click)': 'toggleOpen()'
	            }
	        }), 
	        __metadata('design:paramtypes', [NgbDropdown, core_1.ElementRef])
	    ], NgbDropdownToggle);
	    return NgbDropdownToggle;
	}());
	exports.NgbDropdownToggle = NgbDropdownToggle;
	//# sourceMappingURL=dropdown.js.map
	
	/***/ },
	/* 55 */
	/***/ function(module, exports, __webpack_require__) {
	
	"use strict";
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
	var core_1 = __webpack_require__(0);
	var NgbModalBackdrop = (function () {
	    function NgbModalBackdrop() {
	    }
	    NgbModalBackdrop = __decorate([
	        core_1.Component({ selector: 'ngb-modal-backdrop', template: '', host: { 'class': 'modal-backdrop fade in' } }), 
	        __metadata('design:paramtypes', [])
	    ], NgbModalBackdrop);
	    return NgbModalBackdrop;
	}());
	exports.NgbModalBackdrop = NgbModalBackdrop;
	//# sourceMappingURL=modal-backdrop.js.map
	
	/***/ },
	/* 56 */
	/***/ function(module, exports) {
	
	"use strict";
	"use strict";
	(function (ModalDismissReasons) {
	    ModalDismissReasons[ModalDismissReasons["BACKDROP_CLICK"] = 0] = "BACKDROP_CLICK";
	    ModalDismissReasons[ModalDismissReasons["ESC"] = 1] = "ESC";
	})(exports.ModalDismissReasons || (exports.ModalDismissReasons = {}));
	var ModalDismissReasons = exports.ModalDismissReasons;
	//# sourceMappingURL=modal-dismiss-reasons.js.map
	
	/***/ },
	/* 57 */
	/***/ function(module, exports, __webpack_require__) {
	
	"use strict";
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
	var core_1 = __webpack_require__(0);
	var popup_1 = __webpack_require__(7);
	/**
	 * A reference to an active (currently opened) modal. Instances of this class
	 * can be injected into components passed as modal content.
	 */
	var NgbActiveModal = (function () {
	    function NgbActiveModal() {
	    }
	    /**
	     * Can be used to close a modal, passing an optional result.
	     */
	    NgbActiveModal.prototype.close = function (result) { };
	    /**
	     * Can be used to dismiss a modal, passing an optional reason.
	     */
	    NgbActiveModal.prototype.dismiss = function (reason) { };
	    NgbActiveModal = __decorate([
	        core_1.Injectable(), 
	        __metadata('design:paramtypes', [])
	    ], NgbActiveModal);
	    return NgbActiveModal;
	}());
	exports.NgbActiveModal = NgbActiveModal;
	/**
	 * A reference to a newly opened modal.
	 */
	var NgbModalRef = (function () {
	    function NgbModalRef(_viewContainerRef, _windowCmptRef, _contentRef, _backdropCmptRef) {
	        var _this = this;
	        this._viewContainerRef = _viewContainerRef;
	        this._windowCmptRef = _windowCmptRef;
	        this._contentRef = _contentRef;
	        this._backdropCmptRef = _backdropCmptRef;
	        _windowCmptRef.instance.dismissEvent.subscribe(function (reason) { _this.dismiss(reason); });
	        this.result = new Promise(function (resolve, reject) {
	            _this._resolve = resolve;
	            _this._reject = reject;
	        });
	        this.result.then(null, function () { });
	    }
	    Object.defineProperty(NgbModalRef.prototype, "componentInstance", {
	        /**
	         * The instance of component used as modal's content.
	         * Undefined when a TemplateRef is used as modal's content.
	         */
	        get: function () {
	            if (this._contentRef.componentRef) {
	                return this._contentRef.componentRef.instance;
	            }
	        },
	        // only needed to keep TS1.8 compatibility
	        set: function (instance) { },
	        enumerable: true,
	        configurable: true
	    });
	    /**
	     * Can be used to close a modal, passing an optional result.
	     */
	    NgbModalRef.prototype.close = function (result) {
	        if (this._windowCmptRef) {
	            this._resolve(result);
	            this._removeModalElements();
	        }
	    };
	    /**
	     * Can be used to dismiss a modal, passing an optional reason.
	     */
	    NgbModalRef.prototype.dismiss = function (reason) {
	        if (this._windowCmptRef) {
	            this._reject(reason);
	            this._removeModalElements();
	        }
	    };
	    NgbModalRef.prototype._removeModalElements = function () {
	        this._viewContainerRef.remove(this._viewContainerRef.indexOf(this._windowCmptRef.hostView));
	        if (this._backdropCmptRef) {
	            this._viewContainerRef.remove(this._viewContainerRef.indexOf(this._backdropCmptRef.hostView));
	        }
	        if (this._contentRef && this._contentRef.viewRef) {
	            this._viewContainerRef.remove(this._viewContainerRef.indexOf(this._contentRef.viewRef));
	        }
	        this._windowCmptRef = null;
	        this._backdropCmptRef = null;
	        this._contentRef = null;
	    };
	    NgbModalRef = __decorate([
	        core_1.Injectable(), 
	        __metadata('design:paramtypes', [core_1.ViewContainerRef, core_1.ComponentRef, popup_1.ContentRef, core_1.ComponentRef])
	    ], NgbModalRef);
	    return NgbModalRef;
	}());
	exports.NgbModalRef = NgbModalRef;
	//# sourceMappingURL=modal-ref.js.map
	
	/***/ },
	/* 58 */
	/***/ function(module, exports, __webpack_require__) {
	
	"use strict";
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
	var core_1 = __webpack_require__(0);
	var modal_dismiss_reasons_1 = __webpack_require__(56);
	var NgbModalWindow = (function () {
	    function NgbModalWindow(_elRef, _renderer) {
	        this._elRef = _elRef;
	        this._renderer = _renderer;
	        this.backdrop = true;
	        this.keyboard = true;
	        this.dismissEvent = new core_1.EventEmitter();
	    }
	    NgbModalWindow.prototype.backdropClick = function ($event) {
	        if (this.backdrop === true && this._elRef.nativeElement === $event.target) {
	            this.dismiss(modal_dismiss_reasons_1.ModalDismissReasons.BACKDROP_CLICK);
	        }
	    };
	    NgbModalWindow.prototype.escKey = function ($event) {
	        if (this.keyboard && !$event.defaultPrevented) {
	            this.dismiss(modal_dismiss_reasons_1.ModalDismissReasons.ESC);
	        }
	    };
	    NgbModalWindow.prototype.dismiss = function (reason) { this.dismissEvent.emit(reason); };
	    NgbModalWindow.prototype.ngOnInit = function () {
	        this._elWithFocus = document.activeElement;
	        this._renderer.setElementClass(document.body, 'modal-open', true);
	    };
	    NgbModalWindow.prototype.ngAfterViewInit = function () {
	        if (!this._elRef.nativeElement.contains(document.activeElement)) {
	            this._renderer.invokeElementMethod(this._elRef.nativeElement, 'focus', []);
	        }
	    };
	    NgbModalWindow.prototype.ngOnDestroy = function () {
	        if (this._elWithFocus && document.body.contains(this._elWithFocus)) {
	            this._renderer.invokeElementMethod(this._elWithFocus, 'focus', []);
	        }
	        else {
	            this._renderer.invokeElementMethod(document.body, 'focus', []);
	        }
	        this._elWithFocus = null;
	        this._renderer.setElementClass(document.body, 'modal-open', false);
	    };
	    __decorate([
	        // element that is focused prior to modal opening
	        core_1.Input(), 
	        __metadata('design:type', Object)
	    ], NgbModalWindow.prototype, "backdrop", void 0);
	    __decorate([
	        core_1.Input(), 
	        __metadata('design:type', Object)
	    ], NgbModalWindow.prototype, "keyboard", void 0);
	    __decorate([
	        core_1.Input(), 
	        __metadata('design:type', String)
	    ], NgbModalWindow.prototype, "size", void 0);
	    __decorate([
	        core_1.Input(), 
	        __metadata('design:type', String)
	    ], NgbModalWindow.prototype, "windowClass", void 0);
	    __decorate([
	        core_1.Output('dismiss'), 
	        __metadata('design:type', Object)
	    ], NgbModalWindow.prototype, "dismissEvent", void 0);
	    NgbModalWindow = __decorate([
	        core_1.Component({
	            selector: 'ngb-modal-window',
	            host: {
	                '[class]': '"modal fade in" + (windowClass ? " " + windowClass : "")',
	                'role': 'dialog',
	                'tabindex': '-1',
	                'style': 'display: block;',
	                '(keyup.esc)': 'escKey($event)',
	                '(click)': 'backdropClick($event)'
	            },
	            template: "\n    <div [class]=\"'modal-dialog' + (size ? ' modal-' + size : '')\" role=\"document\">\n        <div class=\"modal-content\"><ng-content></ng-content></div>\n    </div>\n    "
	        }), 
	        __metadata('design:paramtypes', [core_1.ElementRef, core_1.Renderer])
	    ], NgbModalWindow);
	    return NgbModalWindow;
	}());
	exports.NgbModalWindow = NgbModalWindow;
	//# sourceMappingURL=modal-window.js.map
	
	/***/ },
	/* 59 */
	/***/ function(module, exports, __webpack_require__) {
	
	"use strict";
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
	var core_1 = __webpack_require__(0);
	var modal_stack_1 = __webpack_require__(33);
	/**
	 * A service to open modal windows. Creating a modal is straightforward: create a template and pass it as an argument to
	 * the "open" method!
	 */
	var NgbModal = (function () {
	    function NgbModal(_moduleCFR, _injector, _modalStack) {
	        this._moduleCFR = _moduleCFR;
	        this._injector = _injector;
	        this._modalStack = _modalStack;
	    }
	    /**
	     * Opens a new modal window with the specified content and using supplied options. Content can be provided
	     * as a TemplateRef or a component type. If you pass a component type as content than instances of those
	     * components can be injected with an instance of the NgbActiveModal class. You can use methods on the
	     * NgbActiveModal class to close / dismiss modals from "inside" of a component.
	     */
	    NgbModal.prototype.open = function (content, options) {
	        if (options === void 0) { options = {}; }
	        return this._modalStack.open(this._moduleCFR, this._injector, content, options);
	    };
	    NgbModal = __decorate([
	        core_1.Injectable(), 
	        __metadata('design:paramtypes', [core_1.ComponentFactoryResolver, core_1.Injector, modal_stack_1.NgbModalStack])
	    ], NgbModal);
	    return NgbModal;
	}());
	exports.NgbModal = NgbModal;
	//# sourceMappingURL=modal.js.map
	
	/***/ },
	/* 60 */
	/***/ function(module, exports, __webpack_require__) {
	
	"use strict";
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
	var core_1 = __webpack_require__(0);
	var util_1 = __webpack_require__(1);
	var pagination_config_1 = __webpack_require__(34);
	/**
	 * A directive that will take care of visualising a pagination bar and enable / disable buttons correctly!
	 */
	var NgbPagination = (function () {
	    function NgbPagination(config) {
	        this.pageCount = 0;
	        this.pages = [];
	        /**
	         *  Current page.
	         */
	        this.page = 0;
	        /**
	         *  An event fired when the page is changed.
	         *  Event's payload equals to the newly selected page.
	         */
	        this.pageChange = new core_1.EventEmitter(true);
	        this.boundaryLinks = config.boundaryLinks;
	        this.directionLinks = config.directionLinks;
	        this.ellipses = config.ellipses;
	        this.maxSize = config.maxSize;
	        this.pageSize = config.pageSize;
	        this.rotate = config.rotate;
	        this.size = config.size;
	    }
	    NgbPagination.prototype.hasPrevious = function () { return this.page > 1; };
	    NgbPagination.prototype.hasNext = function () { return this.page < this.pageCount; };
	    NgbPagination.prototype.selectPage = function (pageNumber) { this._updatePages(pageNumber); };
	    NgbPagination.prototype.ngOnChanges = function (changes) { this._updatePages(this.page); };
	    /**
	     * @internal
	     */
	    NgbPagination.prototype.isEllipsis = function (pageNumber) { return pageNumber === -1; };
	    /**
	     * Appends ellipses and first/last page number to the displayed pages
	     */
	    NgbPagination.prototype._applyEllipses = function (start, end) {
	        if (this.ellipses) {
	            if (start > 0) {
	                this.pages.unshift(-1);
	                this.pages.unshift(1);
	            }
	            if (end < this.pageCount) {
	                this.pages.push(-1);
	                this.pages.push(this.pageCount);
	            }
	        }
	    };
	    /**
	     * Rotates page numbers based on maxSize items visible.
	     * Currently selected page stays in the middle:
	     *
	     * Ex. for selected page = 6:
	     * [5,*6*,7] for maxSize = 3
	     * [4,5,*6*,7] for maxSize = 4
	     */
	    NgbPagination.prototype._applyRotation = function () {
	        var start = 0;
	        var end = this.pageCount;
	        var leftOffset = Math.floor(this.maxSize / 2);
	        var rightOffset = this.maxSize % 2 === 0 ? leftOffset - 1 : leftOffset;
	        if (this.page <= leftOffset) {
	            // very beginning, no rotation -> [0..maxSize]
	            end = this.maxSize;
	        }
	        else if (this.pageCount - this.page < leftOffset) {
	            // very end, no rotation -> [len-maxSize..len]
	            start = this.pageCount - this.maxSize;
	        }
	        else {
	            // rotate
	            start = this.page - leftOffset - 1;
	            end = this.page + rightOffset;
	        }
	        return [start, end];
	    };
	    /**
	     * Paginates page numbers based on maxSize items per page
	     */
	    NgbPagination.prototype._applyPagination = function () {
	        var page = Math.ceil(this.page / this.maxSize) - 1;
	        var start = page * this.maxSize;
	        var end = start + this.maxSize;
	        return [start, end];
	    };
	    NgbPagination.prototype._setPageInRange = function (newPageNo) {
	        var prevPageNo = this.page;
	        this.page = util_1.getValueInRange(newPageNo, this.pageCount, 1);
	        if (this.page !== prevPageNo) {
	            this.pageChange.emit(this.page);
	        }
	    };
	    NgbPagination.prototype._updatePages = function (newPage) {
	        this.pageCount = Math.ceil(this.collectionSize / this.pageSize);
	        if (!util_1.isNumber(this.pageCount)) {
	            this.pageCount = 0;
	        }
	        // fill-in model needed to render pages
	        this.pages.length = 0;
	        for (var i = 1; i <= this.pageCount; i++) {
	            this.pages.push(i);
	        }
	        // set page within 1..max range
	        this._setPageInRange(newPage);
	        // apply maxSize if necessary
	        if (this.maxSize > 0 && this.pageCount > this.maxSize) {
	            var start = 0;
	            var end = this.pageCount;
	            // either paginating or rotating page numbers
	            if (this.rotate) {
	                _a = this._applyRotation(), start = _a[0], end = _a[1];
	            }
	            else {
	                _b = this._applyPagination(), start = _b[0], end = _b[1];
	            }
	            this.pages = this.pages.slice(start, end);
	            // adding ellipses
	            this._applyEllipses(start, end);
	        }
	        var _a, _b;
	    };
	    __decorate([
	        core_1.Input(), 
	        __metadata('design:type', Boolean)
	    ], NgbPagination.prototype, "boundaryLinks", void 0);
	    __decorate([
	        core_1.Input(), 
	        __metadata('design:type', Boolean)
	    ], NgbPagination.prototype, "directionLinks", void 0);
	    __decorate([
	        core_1.Input(), 
	        __metadata('design:type', Boolean)
	    ], NgbPagination.prototype, "ellipses", void 0);
	    __decorate([
	        core_1.Input(), 
	        __metadata('design:type', Boolean)
	    ], NgbPagination.prototype, "rotate", void 0);
	    __decorate([
	        core_1.Input(), 
	        __metadata('design:type', Number)
	    ], NgbPagination.prototype, "collectionSize", void 0);
	    __decorate([
	        core_1.Input(), 
	        __metadata('design:type', Number)
	    ], NgbPagination.prototype, "maxSize", void 0);
	    __decorate([
	        core_1.Input(), 
	        __metadata('design:type', Object)
	    ], NgbPagination.prototype, "page", void 0);
	    __decorate([
	        core_1.Input(), 
	        __metadata('design:type', Number)
	    ], NgbPagination.prototype, "pageSize", void 0);
	    __decorate([
	        core_1.Output(), 
	        __metadata('design:type', Object)
	    ], NgbPagination.prototype, "pageChange", void 0);
	    __decorate([
	        core_1.Input(), 
	        __metadata('design:type', Object)
	    ], NgbPagination.prototype, "size", void 0);
	    NgbPagination = __decorate([
	        core_1.Component({
	            selector: 'ngb-pagination',
	            changeDetection: core_1.ChangeDetectionStrategy.OnPush,
	            template: "\n    <nav>\n      <ul [class]=\"'pagination' + (size ? ' pagination-' + size : '')\">\n        <li *ngIf=\"boundaryLinks\" class=\"page-item\" [class.disabled]=\"!hasPrevious()\">\n          <a aria-label=\"First\" class=\"page-link\" href (click)=\"!!selectPage(1)\" [attr.tabindex]=\"hasPrevious() ? null : '-1'\">\n            <span aria-hidden=\"true\">&laquo;&laquo;</span>\n            <span class=\"sr-only\">First</span>\n          </a>                \n        </li>\n      \n        <li *ngIf=\"directionLinks\" class=\"page-item\" [class.disabled]=\"!hasPrevious()\">\n          <a aria-label=\"Previous\" class=\"page-link\" href (click)=\"!!selectPage(page-1)\" [attr.tabindex]=\"hasPrevious() ? null : '-1'\">\n            <span aria-hidden=\"true\">&laquo;</span>\n            <span class=\"sr-only\">Previous</span>\n          </a>\n        </li>\n\n        <li *ngFor=\"let pageNumber of pages\" class=\"page-item\" [class.active]=\"pageNumber === page\" \n          [class.disabled]=\"isEllipsis(pageNumber)\">\n          <a *ngIf=\"isEllipsis(pageNumber)\" class=\"page-link\">...</a>\n          <a *ngIf=\"!isEllipsis(pageNumber)\" class=\"page-link\" href (click)=\"!!selectPage(pageNumber)\">{{pageNumber}}</a>\n        </li>\n\n        <li *ngIf=\"directionLinks\" class=\"page-item\" [class.disabled]=\"!hasNext()\">\n          <a aria-label=\"Next\" class=\"page-link\" href (click)=\"!!selectPage(page+1)\" [attr.tabindex]=\"hasNext() ? null : '-1'\">\n            <span aria-hidden=\"true\">&raquo;</span>\n            <span class=\"sr-only\">Next</span>\n          </a>\n        </li>\n        \n        <li *ngIf=\"boundaryLinks\" class=\"page-item\" [class.disabled]=\"!hasNext()\">\n          <a aria-label=\"Last\" class=\"page-link\" href (click)=\"!!selectPage(pageCount)\" [attr.tabindex]=\"hasNext() ? null : '-1'\">\n            <span aria-hidden=\"true\">&raquo;&raquo;</span>\n            <span class=\"sr-only\">Last</span>\n          </a>                \n        </li>        \n      </ul>\n    </nav>\n  "
	        }), 
	        __metadata('design:paramtypes', [pagination_config_1.NgbPaginationConfig])
	    ], NgbPagination);
	    return NgbPagination;
	}());
	exports.NgbPagination = NgbPagination;
	//# sourceMappingURL=pagination.js.map
	
	/***/ },
	/* 61 */
	/***/ function(module, exports, __webpack_require__) {
	
	"use strict";
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
	var core_1 = __webpack_require__(0);
	var triggers_1 = __webpack_require__(68);
	var positioning_1 = __webpack_require__(8);
	var popup_1 = __webpack_require__(7);
	var popover_config_1 = __webpack_require__(35);
	var NgbPopoverWindow = (function () {
	    function NgbPopoverWindow() {
	        this.placement = 'top';
	    }
	    __decorate([
	        core_1.Input(), 
	        __metadata('design:type', Object)
	    ], NgbPopoverWindow.prototype, "placement", void 0);
	    __decorate([
	        core_1.Input(), 
	        __metadata('design:type', String)
	    ], NgbPopoverWindow.prototype, "title", void 0);
	    NgbPopoverWindow = __decorate([
	        core_1.Component({
	            selector: 'ngb-popover-window',
	            changeDetection: core_1.ChangeDetectionStrategy.OnPush,
	            host: { '[class]': '"popover in popover-" + placement', 'role': 'tooltip' },
	            // TODO remove the div.popover-arrow, which is there only to maintain compatibility with bootstrap alpha.4
	            template: "\n    <div class=\"popover-arrow\"></div>\n    <h3 class=\"popover-title\">{{title}}</h3><div class=\"popover-content\"><ng-content></ng-content></div>\n    "
	        }), 
	        __metadata('design:paramtypes', [])
	    ], NgbPopoverWindow);
	    return NgbPopoverWindow;
	}());
	exports.NgbPopoverWindow = NgbPopoverWindow;
	/**
	 * A lightweight, extensible directive for fancy popover creation.
	 */
	var NgbPopover = (function () {
	    function NgbPopover(_elementRef, _renderer, injector, componentFactoryResolver, viewContainerRef, config, ngZone) {
	        var _this = this;
	        this._elementRef = _elementRef;
	        this._renderer = _renderer;
	        /**
	         * Emits an event when the popover is shown
	         */
	        this.shown = new core_1.EventEmitter();
	        /**
	         * Emits an event when the popover is hidden
	         */
	        this.hidden = new core_1.EventEmitter();
	        this.placement = config.placement;
	        this.triggers = config.triggers;
	        this.container = config.container;
	        this._popupService = new popup_1.PopupService(NgbPopoverWindow, injector, viewContainerRef, _renderer, componentFactoryResolver);
	        this._zoneSubscription = ngZone.onStable.subscribe(function () {
	            if (_this._windowRef) {
	                positioning_1.positionElements(_this._elementRef.nativeElement, _this._windowRef.location.nativeElement, _this.placement, _this.container === 'body');
	            }
	        });
	    }
	    /**
	     * Opens an element’s popover. This is considered a “manual” triggering of the popover.
	     */
	    NgbPopover.prototype.open = function () {
	        if (!this._windowRef) {
	            this._windowRef = this._popupService.open(this.ngbPopover);
	            this._windowRef.instance.placement = this.placement;
	            this._windowRef.instance.title = this.popoverTitle;
	            if (this.container === 'body') {
	                window.document.querySelector(this.container).appendChild(this._windowRef.location.nativeElement);
	            }
	            // we need to manually invoke change detection since events registered via
	            // Renderer::listen() are not picked up by change detection with the OnPush strategy
	            this._windowRef.changeDetectorRef.markForCheck();
	            this.shown.emit();
	        }
	    };
	    /**
	     * Closes an element’s popover. This is considered a “manual” triggering of the popover.
	     */
	    NgbPopover.prototype.close = function () {
	        if (this._windowRef) {
	            this._popupService.close();
	            this._windowRef = null;
	            this.hidden.emit();
	        }
	    };
	    /**
	     * Toggles an element’s popover. This is considered a “manual” triggering of the popover.
	     */
	    NgbPopover.prototype.toggle = function () {
	        if (this._windowRef) {
	            this.close();
	        }
	        else {
	            this.open();
	        }
	    };
	    /**
	     * Returns whether or not the popover is currently being shown
	     */
	    NgbPopover.prototype.isOpen = function () { return this._windowRef != null; };
	    NgbPopover.prototype.ngOnInit = function () {
	        this._unregisterListenersFn = triggers_1.listenToTriggers(this._renderer, this._elementRef.nativeElement, this.triggers, this.open.bind(this), this.close.bind(this), this.toggle.bind(this));
	    };
	    NgbPopover.prototype.ngOnDestroy = function () {
	        this.close();
	        this._unregisterListenersFn();
	        this._zoneSubscription.unsubscribe();
	    };
	    __decorate([
	        core_1.Input(), 
	        __metadata('design:type', Object)
	    ], NgbPopover.prototype, "ngbPopover", void 0);
	    __decorate([
	        core_1.Input(), 
	        __metadata('design:type', String)
	    ], NgbPopover.prototype, "popoverTitle", void 0);
	    __decorate([
	        core_1.Input(), 
	        __metadata('design:type', Object)
	    ], NgbPopover.prototype, "placement", void 0);
	    __decorate([
	        core_1.Input(), 
	        __metadata('design:type', String)
	    ], NgbPopover.prototype, "triggers", void 0);
	    __decorate([
	        core_1.Input(), 
	        __metadata('design:type', String)
	    ], NgbPopover.prototype, "container", void 0);
	    __decorate([
	        core_1.Output(), 
	        __metadata('design:type', Object)
	    ], NgbPopover.prototype, "shown", void 0);
	    __decorate([
	        core_1.Output(), 
	        __metadata('design:type', Object)
	    ], NgbPopover.prototype, "hidden", void 0);
	    NgbPopover = __decorate([
	        core_1.Directive({ selector: '[ngbPopover]', exportAs: 'ngbPopover' }), 
	        __metadata('design:paramtypes', [core_1.ElementRef, core_1.Renderer, core_1.Injector, core_1.ComponentFactoryResolver, core_1.ViewContainerRef, popover_config_1.NgbPopoverConfig, core_1.NgZone])
	    ], NgbPopover);
	    return NgbPopover;
	}());
	exports.NgbPopover = NgbPopover;
	//# sourceMappingURL=popover.js.map
	
	/***/ },
	/* 62 */
	/***/ function(module, exports, __webpack_require__) {
	
	"use strict";
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
	var core_1 = __webpack_require__(0);
	var util_1 = __webpack_require__(1);
	var progressbar_config_1 = __webpack_require__(36);
	/**
	 * Directive that can be used to provide feedback on the progress of a workflow or an action.
	 */
	var NgbProgressbar = (function () {
	    function NgbProgressbar(config) {
	        /**
	         * Current value to be displayed in the progressbar. Should be smaller or equal to "max" value.
	         */
	        this.value = 0;
	        this.max = config.max;
	        this.animated = config.animated;
	        this.striped = config.striped;
	        this.type = config.type;
	    }
	    NgbProgressbar.prototype.getValue = function () { return util_1.getValueInRange(this.value, this.max); };
	    NgbProgressbar.prototype.getPercentValue = function () { return 100 * this.getValue() / this.max; };
	    __decorate([
	        core_1.Input(), 
	        __metadata('design:type', Number)
	    ], NgbProgressbar.prototype, "max", void 0);
	    __decorate([
	        core_1.Input(), 
	        __metadata('design:type', Boolean)
	    ], NgbProgressbar.prototype, "animated", void 0);
	    __decorate([
	        core_1.Input(), 
	        __metadata('design:type', Boolean)
	    ], NgbProgressbar.prototype, "striped", void 0);
	    __decorate([
	        core_1.Input(), 
	        __metadata('design:type', String)
	    ], NgbProgressbar.prototype, "type", void 0);
	    __decorate([
	        core_1.Input(), 
	        __metadata('design:type', Object)
	    ], NgbProgressbar.prototype, "value", void 0);
	    NgbProgressbar = __decorate([
	        core_1.Component({
	            selector: 'ngb-progressbar',
	            changeDetection: core_1.ChangeDetectionStrategy.OnPush,
	            template: "\n    <progress class=\"progress{{type ? ' progress-' + type : ''}}{{animated ? ' progress-animated' : ''}}{{striped ? \n    ' progress-striped' : ''}}\" \n      [max]=\"max\" [value]=\"getValue()\">\n      <div class=\"progress\">\n        <span class=\"progress-bar\" [style.width.%]=\"getPercentValue()\"><ng-content></ng-content></span>\n      </div>\n    </progress>\n  "
	        }), 
	        __metadata('design:paramtypes', [progressbar_config_1.NgbProgressbarConfig])
	    ], NgbProgressbar);
	    return NgbProgressbar;
	}());
	exports.NgbProgressbar = NgbProgressbar;
	//# sourceMappingURL=progressbar.js.map
	
	/***/ },
	/* 63 */
	/***/ function(module, exports, __webpack_require__) {
	
	"use strict";
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
	var core_1 = __webpack_require__(0);
	var rating_config_1 = __webpack_require__(37);
	var util_1 = __webpack_require__(1);
	var forms_1 = __webpack_require__(3);
	var Key;
	(function (Key) {
	    Key[Key["End"] = 35] = "End";
	    Key[Key["Home"] = 36] = "Home";
	    Key[Key["ArrowLeft"] = 37] = "ArrowLeft";
	    Key[Key["ArrowUp"] = 38] = "ArrowUp";
	    Key[Key["ArrowRight"] = 39] = "ArrowRight";
	    Key[Key["ArrowDown"] = 40] = "ArrowDown";
	})(Key || (Key = {}));
	var NGB_RATING_VALUE_ACCESSOR = {
	    provide: forms_1.NG_VALUE_ACCESSOR,
	    useExisting: core_1.forwardRef(function () { return NgbRating; }),
	    multi: true
	};
	/**
	 * Rating directive that will take care of visualising a star rating bar.
	 */
	var NgbRating = (function () {
	    function NgbRating(config, _changeDetectorRef) {
	        this._changeDetectorRef = _changeDetectorRef;
	        this.range = [];
	        /**
	         * An event fired when a user is hovering over a given rating.
	         * Event's payload equals to the rating being hovered over.
	         */
	        this.hover = new core_1.EventEmitter();
	        /**
	         * An event fired when a user stops hovering over a given rating.
	         * Event's payload equals to the rating of the last item being hovered over.
	         */
	        this.leave = new core_1.EventEmitter();
	        /**
	         * An event fired when a user selects a new rating.
	         * Event's payload equals to the newly selected rating.
	         */
	        this.rateChange = new core_1.EventEmitter(true);
	        this.onChange = function (_) { };
	        this.onTouched = function () { };
	        this.max = config.max;
	        this.readonly = config.readonly;
	    }
	    NgbRating.prototype.ariaValueText = function () { return this.rate + " out of " + this.max; };
	    NgbRating.prototype.enter = function (value) {
	        if (!this.readonly) {
	            this.rate = value;
	        }
	        this.hover.emit(value);
	    };
	    NgbRating.prototype.handleKeyDown = function (event) {
	        if (Key[util_1.toString(event.which)]) {
	            event.preventDefault();
	            switch (event.which) {
	                case Key.ArrowDown:
	                case Key.ArrowLeft:
	                    this.update(this.rate - 1);
	                    break;
	                case Key.ArrowUp:
	                case Key.ArrowRight:
	                    this.update(this.rate + 1);
	                    break;
	                case Key.Home:
	                    this.update(0);
	                    break;
	                case Key.End:
	                    this.update(this.max);
	                    break;
	            }
	        }
	    };
	    NgbRating.prototype.getFillValue = function (index) {
	        var diff = this.rate - index;
	        if (diff >= 1) {
	            return 100;
	        }
	        if (diff < 1 && diff > 0) {
	            return Number.parseInt((diff * 100).toFixed(2));
	        }
	        return 0;
	    };
	    NgbRating.prototype.ngOnChanges = function (changes) {
	        if (changes['rate']) {
	            this.update(this.rate);
	            this._oldRate = this.rate;
	        }
	    };
	    NgbRating.prototype.ngOnInit = function () { this.range = Array.from({ length: this.max }, function (v, k) { return k + 1; }); };
	    NgbRating.prototype.registerOnChange = function (fn) { this.onChange = fn; };
	    NgbRating.prototype.registerOnTouched = function (fn) { this.onTouched = fn; };
	    NgbRating.prototype.reset = function () {
	        this.leave.emit(this.rate);
	        this.rate = this._oldRate;
	    };
	    NgbRating.prototype.update = function (value, internalChange) {
	        if (internalChange === void 0) { internalChange = true; }
	        if (!this.readonly) {
	            var newRate = value ? util_1.getValueInRange(value, this.max, 0) : 0;
	            if (this._oldRate !== newRate) {
	                this._oldRate = newRate;
	                this.rate = newRate;
	                this.rateChange.emit(newRate);
	                if (internalChange) {
	                    this.onChange(this.rate);
	                }
	            }
	        }
	    };
	    NgbRating.prototype.writeValue = function (value) {
	        this.update(value, false);
	        this._changeDetectorRef.markForCheck();
	    };
	    __decorate([
	        core_1.Input(), 
	        __metadata('design:type', Number)
	    ], NgbRating.prototype, "max", void 0);
	    __decorate([
	        core_1.Input(), 
	        __metadata('design:type', Number)
	    ], NgbRating.prototype, "rate", void 0);
	    __decorate([
	        core_1.Input(), 
	        __metadata('design:type', Boolean)
	    ], NgbRating.prototype, "readonly", void 0);
	    __decorate([
	        core_1.Input(),
	        core_1.ContentChild(core_1.TemplateRef), 
	        __metadata('design:type', core_1.TemplateRef)
	    ], NgbRating.prototype, "starTemplate", void 0);
	    __decorate([
	        core_1.Output(), 
	        __metadata('design:type', Object)
	    ], NgbRating.prototype, "hover", void 0);
	    __decorate([
	        core_1.Output(), 
	        __metadata('design:type', Object)
	    ], NgbRating.prototype, "leave", void 0);
	    __decorate([
	        core_1.Output(), 
	        __metadata('design:type', Object)
	    ], NgbRating.prototype, "rateChange", void 0);
	    NgbRating = __decorate([
	        core_1.Component({
	            selector: 'ngb-rating',
	            changeDetection: core_1.ChangeDetectionStrategy.OnPush,
	            host: { '(keydown)': 'handleKeyDown($event)' },
	            template: "\n    <template #t let-fill=\"fill\">{{ fill === 100 ? '&#9733;' : '&#9734;' }}</template>\n    <span tabindex=\"0\" (mouseleave)=\"reset()\" role=\"slider\" aria-valuemin=\"0\"\n      [attr.aria-valuemax]=\"max\" [attr.aria-valuenow]=\"rate\" [attr.aria-valuetext]=\"ariaValueText()\">\n      <template ngFor [ngForOf]=\"range\" let-index=\"index\">\n        <span class=\"sr-only\">({{ index < rate ? '*' : ' ' }})</span>\n        <span (mouseenter)=\"enter(index + 1)\" (click)=\"update(index + 1)\" \n        [style.cursor]=\"readonly ? 'default' : 'pointer'\">\n          <template [ngTemplateOutlet]=\"starTemplate || t\" [ngOutletContext]=\"{fill: getFillValue(index)}\"></template>\n        </span>\n      </template>\n    </span>\n  ",
	            providers: [NGB_RATING_VALUE_ACCESSOR]
	        }), 
	        __metadata('design:paramtypes', [rating_config_1.NgbRatingConfig, core_1.ChangeDetectorRef])
	    ], NgbRating);
	    return NgbRating;
	}());
	exports.NgbRating = NgbRating;
	//# sourceMappingURL=rating.js.map
	
	/***/ },
	/* 64 */
	/***/ function(module, exports, __webpack_require__) {
	
	"use strict";
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
	var core_1 = __webpack_require__(0);
	var tabset_config_1 = __webpack_require__(38);
	var nextId = 0;
	/**
	 * This directive should be used to wrap tab titles that need to contain HTML markup or other directives.
	 */
	var NgbTabTitle = (function () {
	    function NgbTabTitle(templateRef) {
	        this.templateRef = templateRef;
	    }
	    NgbTabTitle = __decorate([
	        core_1.Directive({ selector: 'template[ngbTabTitle]' }), 
	        __metadata('design:paramtypes', [core_1.TemplateRef])
	    ], NgbTabTitle);
	    return NgbTabTitle;
	}());
	exports.NgbTabTitle = NgbTabTitle;
	/**
	 * This directive must be used to wrap content to be displayed in a tab.
	 */
	var NgbTabContent = (function () {
	    function NgbTabContent(templateRef) {
	        this.templateRef = templateRef;
	    }
	    NgbTabContent = __decorate([
	        core_1.Directive({ selector: 'template[ngbTabContent]' }), 
	        __metadata('design:paramtypes', [core_1.TemplateRef])
	    ], NgbTabContent);
	    return NgbTabContent;
	}());
	exports.NgbTabContent = NgbTabContent;
	/**
	 * A directive representing an individual tab.
	 */
	var NgbTab = (function () {
	    function NgbTab() {
	        /**
	         * Unique tab identifier. Must be unique for the entire document for proper accessibility support.
	         */
	        this.id = "ngb-tab-" + nextId++;
	        /**
	         * Allows toggling disabled state of a given state. Disabled tabs can't be selected.
	         */
	        this.disabled = false;
	    }
	    __decorate([
	        core_1.Input(), 
	        __metadata('design:type', String)
	    ], NgbTab.prototype, "id", void 0);
	    __decorate([
	        core_1.Input(), 
	        __metadata('design:type', String)
	    ], NgbTab.prototype, "title", void 0);
	    __decorate([
	        core_1.Input(), 
	        __metadata('design:type', Object)
	    ], NgbTab.prototype, "disabled", void 0);
	    __decorate([
	        core_1.ContentChild(NgbTabContent), 
	        __metadata('design:type', NgbTabContent)
	    ], NgbTab.prototype, "contentTpl", void 0);
	    __decorate([
	        core_1.ContentChild(NgbTabTitle), 
	        __metadata('design:type', NgbTabTitle)
	    ], NgbTab.prototype, "titleTpl", void 0);
	    NgbTab = __decorate([
	        core_1.Directive({ selector: 'ngb-tab' }), 
	        __metadata('design:paramtypes', [])
	    ], NgbTab);
	    return NgbTab;
	}());
	exports.NgbTab = NgbTab;
	/**
	 * A component that makes it easy to create tabbed interface.
	 */
	var NgbTabset = (function () {
	    function NgbTabset(config) {
	        /**
	         * A tab change event fired right before the tab selection happens. See NgbTabChangeEvent for payload details
	         */
	        this.tabChange = new core_1.EventEmitter();
	        this.type = config.type;
	    }
	    /**
	     * Selects the tab with the given id and shows its associated pane.
	     * Any other tab that was previously selected becomes unselected and its associated pane is hidden.
	     */
	    NgbTabset.prototype.select = function (tabId) {
	        var selectedTab = this._getTabById(tabId);
	        if (selectedTab && !selectedTab.disabled && this.activeId !== selectedTab.id) {
	            var defaultPrevented_1 = false;
	            this.tabChange.emit({ activeId: this.activeId, nextId: selectedTab.id, preventDefault: function () { defaultPrevented_1 = true; } });
	            if (!defaultPrevented_1) {
	                this.activeId = selectedTab.id;
	            }
	        }
	    };
	    NgbTabset.prototype.ngAfterContentChecked = function () {
	        // auto-correct activeId that might have been set incorrectly as input
	        var activeTab = this._getTabById(this.activeId);
	        this.activeId = activeTab ? activeTab.id : (this.tabs.length ? this.tabs.first.id : null);
	    };
	    NgbTabset.prototype._getTabById = function (id) {
	        var tabsWithId = this.tabs.filter(function (tab) { return tab.id === id; });
	        return tabsWithId.length ? tabsWithId[0] : null;
	    };
	    __decorate([
	        core_1.ContentChildren(NgbTab), 
	        __metadata('design:type', core_1.QueryList)
	    ], NgbTabset.prototype, "tabs", void 0);
	    __decorate([
	        core_1.Input(), 
	        __metadata('design:type', String)
	    ], NgbTabset.prototype, "activeId", void 0);
	    __decorate([
	        core_1.Input(), 
	        __metadata('design:type', Object)
	    ], NgbTabset.prototype, "type", void 0);
	    __decorate([
	        core_1.Output(), 
	        __metadata('design:type', Object)
	    ], NgbTabset.prototype, "tabChange", void 0);
	    NgbTabset = __decorate([
	        core_1.Component({
	            selector: 'ngb-tabset',
	            exportAs: 'ngbTabset',
	            template: "\n    <ul [class]=\"'nav nav-' + type\" role=\"tablist\">\n      <li class=\"nav-item\" *ngFor=\"let tab of tabs\">\n        <a [id]=\"tab.id\" class=\"nav-link\" [class.active]=\"tab.id === activeId\" [class.disabled]=\"tab.disabled\"\n          href (click)=\"!!select(tab.id)\" role=\"tab\" [attr.aria-controls]=\"tab.id + '-panel'\" [attr.aria-expanded]=\"tab.id === activeId\">\n          {{tab.title}}<template [ngTemplateOutlet]=\"tab.titleTpl?.templateRef\"></template>\n        </a>\n      </li>\n    </ul>\n    <div class=\"tab-content\">\n      <template ngFor let-tab [ngForOf]=\"tabs\">\n        <div class=\"tab-pane active\" *ngIf=\"tab.id === activeId\" role=\"tabpanel\" [attr.aria-labelledby]=\"tab.id\" id=\"{{tab.id}}-panel\">\n          <template [ngTemplateOutlet]=\"tab.contentTpl.templateRef\"></template>\n        </div>\n      </template>\n    </div>\n  "
	        }), 
	        __metadata('design:paramtypes', [tabset_config_1.NgbTabsetConfig])
	    ], NgbTabset);
	    return NgbTabset;
	}());
	exports.NgbTabset = NgbTabset;
	//# sourceMappingURL=tabset.js.map
	
	/***/ },
	/* 65 */
	/***/ function(module, exports, __webpack_require__) {
	
	"use strict";
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
	var core_1 = __webpack_require__(0);
	var forms_1 = __webpack_require__(3);
	var util_1 = __webpack_require__(1);
	var ngb_time_1 = __webpack_require__(70);
	var timepicker_config_1 = __webpack_require__(39);
	var NGB_TIMEPICKER_VALUE_ACCESSOR = {
	    provide: forms_1.NG_VALUE_ACCESSOR,
	    useExisting: core_1.forwardRef(function () { return NgbTimepicker; }),
	    multi: true
	};
	/**
	 * A lightweight & configurable timepicker directive.
	 */
	var NgbTimepicker = (function () {
	    function NgbTimepicker(config) {
	        this.onChange = function (_) { };
	        this.onTouched = function () { };
	        this.meridian = config.meridian;
	        this.spinners = config.spinners;
	        this.seconds = config.seconds;
	        this.hourStep = config.hourStep;
	        this.minuteStep = config.minuteStep;
	        this.secondStep = config.secondStep;
	        this.disabled = config.disabled;
	        this.readonlyInputs = config.readonlyInputs;
	    }
	    NgbTimepicker.prototype.writeValue = function (value) {
	        this.model = value ? new ngb_time_1.NgbTime(value.hour, value.minute, value.second) : new ngb_time_1.NgbTime();
	        if (!this.seconds && (!value || !util_1.isNumber(value.second))) {
	            this.model.second = 0;
	        }
	    };
	    NgbTimepicker.prototype.registerOnChange = function (fn) { this.onChange = fn; };
	    NgbTimepicker.prototype.registerOnTouched = function (fn) { this.onTouched = fn; };
	    NgbTimepicker.prototype.setDisabledState = function (isDisabled) { this.disabled = isDisabled; };
	    NgbTimepicker.prototype.changeHour = function (step) {
	        this.model.changeHour(step);
	        this.propagateModelChange();
	    };
	    NgbTimepicker.prototype.changeMinute = function (step) {
	        this.model.changeMinute(step);
	        this.propagateModelChange();
	    };
	    NgbTimepicker.prototype.changeSecond = function (step) {
	        this.model.changeSecond(step);
	        this.propagateModelChange();
	    };
	    NgbTimepicker.prototype.updateHour = function (newVal) {
	        this.model.updateHour(util_1.toInteger(newVal));
	        this.propagateModelChange();
	    };
	    NgbTimepicker.prototype.updateMinute = function (newVal) {
	        this.model.updateMinute(util_1.toInteger(newVal));
	        this.propagateModelChange();
	    };
	    NgbTimepicker.prototype.updateSecond = function (newVal) {
	        this.model.updateSecond(util_1.toInteger(newVal));
	        this.propagateModelChange();
	    };
	    NgbTimepicker.prototype.toggleMeridian = function () {
	        if (this.meridian) {
	            this.changeHour(12);
	        }
	    };
	    NgbTimepicker.prototype.formatHour = function (value) {
	        if (util_1.isNumber(value)) {
	            if (this.meridian) {
	                return util_1.padNumber(value % 12 === 0 ? 12 : value % 12);
	            }
	            else {
	                return util_1.padNumber(value % 24);
	            }
	        }
	        else {
	            return util_1.padNumber(NaN);
	        }
	    };
	    NgbTimepicker.prototype.formatMinSec = function (value) { return util_1.padNumber(value); };
	    NgbTimepicker.prototype.ngOnChanges = function (changes) {
	        if (changes['seconds'] && !this.seconds && this.model && !util_1.isNumber(this.model.second)) {
	            this.model.second = 0;
	            this.propagateModelChange(false);
	        }
	    };
	    NgbTimepicker.prototype.propagateModelChange = function (touched) {
	        if (touched === void 0) { touched = true; }
	        if (touched) {
	            this.onTouched();
	        }
	        if (this.model.isValid(this.seconds)) {
	            this.onChange({ hour: this.model.hour, minute: this.model.minute, second: this.model.second });
	        }
	        else {
	            this.onChange(null);
	        }
	    };
	    __decorate([
	        core_1.Input(), 
	        __metadata('design:type', Boolean)
	    ], NgbTimepicker.prototype, "meridian", void 0);
	    __decorate([
	        core_1.Input(), 
	        __metadata('design:type', Boolean)
	    ], NgbTimepicker.prototype, "spinners", void 0);
	    __decorate([
	        core_1.Input(), 
	        __metadata('design:type', Boolean)
	    ], NgbTimepicker.prototype, "seconds", void 0);
	    __decorate([
	        core_1.Input(), 
	        __metadata('design:type', Number)
	    ], NgbTimepicker.prototype, "hourStep", void 0);
	    __decorate([
	        core_1.Input(), 
	        __metadata('design:type', Number)
	    ], NgbTimepicker.prototype, "minuteStep", void 0);
	    __decorate([
	        core_1.Input(), 
	        __metadata('design:type', Number)
	    ], NgbTimepicker.prototype, "secondStep", void 0);
	    __decorate([
	        core_1.Input(), 
	        __metadata('design:type', Boolean)
	    ], NgbTimepicker.prototype, "readonlyInputs", void 0);
	    NgbTimepicker = __decorate([
	        core_1.Component({
	            selector: 'ngb-timepicker',
	            styles: ["\n    .chevron::before {\n      border-style: solid;\n      border-width: 0.29em 0.29em 0 0;\n      content: '';\n      display: inline-block;\n      height: 0.69em;\n      left: 0.05em;\n      position: relative;\n      top: 0.15em;\n      transform: rotate(-45deg);\n      -webkit-transform: rotate(-45deg);\n      -ms-transform: rotate(-45deg);\n      vertical-align: middle;\n      width: 0.71em;\n    }\n    \n    .chevron.bottom:before {\n      top: -.3em;\n      -webkit-transform: rotate(135deg);\n      -ms-transform: rotate(135deg);\n      transform: rotate(135deg);\n    }\n    \n    .btn-link {\n      outline: 0;\n    }\n\n    .btn-link.disabled {\n      cursor: not-allowed;\n      opacity: .65;\n    }\n  "],
	            template: "\n     <fieldset [disabled]=\"disabled\" [class.disabled]=\"disabled\">\n      <table>\n        <tr *ngIf=\"spinners\">\n          <td class=\"text-xs-center\">\n            <button type=\"button\" class=\"btn-link\" (click)=\"changeHour(hourStep)\"\n              [disabled]=\"disabled\" [class.disabled]=\"disabled\">\n              <span class=\"chevron\"></span>\n            </button>\n          </td>\n          <td>&nbsp;</td>\n          <td class=\"text-xs-center\">\n            <button type=\"button\" class=\"btn-link\" (click)=\"changeMinute(minuteStep)\"\n              [disabled]=\"disabled\" [class.disabled]=\"disabled\">\n                <span class=\"chevron\"></span>\n            </button>\n          </td>\n          <template [ngIf]=\"seconds\">\n            <td>&nbsp;</td>\n            <td class=\"text-xs-center\">\n              <button type=\"button\" class=\"btn-link\" (click)=\"changeSecond(secondStep)\"\n                [disabled]=\"disabled\" [class.disabled]=\"disabled\">\n                <span class=\"chevron\"></span>\n              </button>\n            </td>\n          </template>\n          <template [ngIf]=\"meridian\">\n            <td>&nbsp;</td>\n            <td>&nbsp;</td>\n          </template>\n        </tr>\n        <tr>\n          <td>\n            <input type=\"text\" class=\"form-control\" maxlength=\"2\" size=\"2\" placeholder=\"HH\"\n              [value]=\"formatHour(model?.hour)\" (change)=\"updateHour($event.target.value)\" \n              [readonly]=\"readonlyInputs\" [disabled]=\"disabled\">\n          </td>\n          <td>&nbsp;:&nbsp;</td>\n          <td>\n            <input type=\"text\" class=\"form-control\" maxlength=\"2\" size=\"2\" placeholder=\"MM\"\n              [value]=\"formatMinSec(model?.minute)\" (change)=\"updateMinute($event.target.value)\" \n              [readonly]=\"readonlyInputs\" [disabled]=\"disabled\">\n          </td>\n          <template [ngIf]=\"seconds\">\n            <td>&nbsp;:&nbsp;</td>\n            <input type=\"text\" class=\"form-control\" maxlength=\"2\" size=\"2\" placeholder=\"SS\"\n              [value]=\"formatMinSec(model?.second)\" (change)=\"updateSecond($event.target.value)\" \n              [readonly]=\"readonlyInputs\" [disabled]=\"disabled\">\n          </template>\n          <template [ngIf]=\"meridian\">\n            <td>&nbsp;&nbsp;</td>\n            <td>\n              <button type=\"button\" class=\"btn btn-outline-primary\" (click)=\"toggleMeridian()\">{{model.hour >= 12 ? 'PM' : 'AM'}}</button>\n            </td>\n          </template>\n        </tr>\n        <tr *ngIf=\"spinners\">\n          <td class=\"text-xs-center\">\n            <button type=\"button\" class=\"btn-link\" (click)=\"changeHour(-hourStep)\" \n              [disabled]=\"disabled\" [class.disabled]=\"disabled\">\n              <span class=\"chevron bottom\"></span>\n            </button>\n          </td>\n          <td>&nbsp;</td>\n          <td class=\"text-xs-center\">\n            <button type=\"button\" class=\"btn-link\" (click)=\"changeMinute(-minuteStep)\"\n              [disabled]=\"disabled\" [class.disabled]=\"disabled\">\n              <span class=\"chevron bottom\"></span>\n            </button>\n          </td>\n          <template [ngIf]=\"seconds\">\n            <td>&nbsp;</td>\n            <td class=\"text-xs-center\">\n              <button type=\"button\" class=\"btn-link\" (click)=\"changeSecond(-secondStep)\"\n                [disabled]=\"disabled\" [class.disabled]=\"disabled\">\n                <span class=\"chevron bottom\"></span>\n              </button>\n            </td>\n          </template>\n          <template [ngIf]=\"meridian\">\n            <td>&nbsp;</td>\n            <td>&nbsp;</td>\n          </template>\n        </tr>\n      </table>\n    </fieldset>\n  ",
	            providers: [NGB_TIMEPICKER_VALUE_ACCESSOR]
	        }), 
	        __metadata('design:paramtypes', [timepicker_config_1.NgbTimepickerConfig])
	    ], NgbTimepicker);
	    return NgbTimepicker;
	}());
	exports.NgbTimepicker = NgbTimepicker;
	//# sourceMappingURL=timepicker.js.map
	
	/***/ },
	/* 66 */
	/***/ function(module, exports, __webpack_require__) {
	
	"use strict";
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
	var core_1 = __webpack_require__(0);
	var triggers_1 = __webpack_require__(68);
	var positioning_1 = __webpack_require__(8);
	var popup_1 = __webpack_require__(7);
	var tooltip_config_1 = __webpack_require__(40);
	var NgbTooltipWindow = (function () {
	    function NgbTooltipWindow() {
	        this.placement = 'top';
	    }
	    __decorate([
	        core_1.Input(), 
	        __metadata('design:type', Object)
	    ], NgbTooltipWindow.prototype, "placement", void 0);
	    NgbTooltipWindow = __decorate([
	        core_1.Component({
	            selector: 'ngb-tooltip-window',
	            changeDetection: core_1.ChangeDetectionStrategy.OnPush,
	            host: { '[class]': '"tooltip in tooltip-" + placement', 'role': 'tooltip' },
	            // TODO remove the div.tooltip-arrow, which is there only to maintain compatibility with bootstrap alpha.4
	            template: "\n    <div class=\"tooltip-arrow\"></div>\n    <div class=\"tooltip-inner\"><ng-content></ng-content></div>\n    "
	        }), 
	        __metadata('design:paramtypes', [])
	    ], NgbTooltipWindow);
	    return NgbTooltipWindow;
	}());
	exports.NgbTooltipWindow = NgbTooltipWindow;
	/**
	 * A lightweight, extensible directive for fancy tooltip creation.
	 */
	var NgbTooltip = (function () {
	    function NgbTooltip(_elementRef, _renderer, injector, componentFactoryResolver, viewContainerRef, config, ngZone) {
	        var _this = this;
	        this._elementRef = _elementRef;
	        this._renderer = _renderer;
	        /**
	       * Emits an event when the tooltip is shown
	       */
	        this.shown = new core_1.EventEmitter();
	        /**
	         * Emits an event when the tooltip is hidden
	         */
	        this.hidden = new core_1.EventEmitter();
	        this.placement = config.placement;
	        this.triggers = config.triggers;
	        this.container = config.container;
	        this._popupService = new popup_1.PopupService(NgbTooltipWindow, injector, viewContainerRef, _renderer, componentFactoryResolver);
	        this._zoneSubscription = ngZone.onStable.subscribe(function () {
	            if (_this._windowRef) {
	                positioning_1.positionElements(_this._elementRef.nativeElement, _this._windowRef.location.nativeElement, _this.placement, _this.container === 'body');
	            }
	        });
	    }
	    Object.defineProperty(NgbTooltip.prototype, "ngbTooltip", {
	        get: function () { return this._ngbTooltip; },
	        /**
	         * Content to be displayed as tooltip. If falsy, the tooltip won't open.
	         */
	        set: function (value) {
	            this._ngbTooltip = value;
	            if (!value && this._windowRef) {
	                this.close();
	            }
	        },
	        enumerable: true,
	        configurable: true
	    });
	    /**
	     * Opens an element’s tooltip. This is considered a “manual” triggering of the tooltip.
	     */
	    NgbTooltip.prototype.open = function () {
	        if (!this._windowRef && this._ngbTooltip) {
	            this._windowRef = this._popupService.open(this._ngbTooltip);
	            this._windowRef.instance.placement = this.placement;
	            if (this.container === 'body') {
	                window.document.querySelector(this.container).appendChild(this._windowRef.location.nativeElement);
	            }
	            // we need to manually invoke change detection since events registered via
	            // Renderer::listen() - to be determined if this is a bug in the Angular 2
	            this._windowRef.changeDetectorRef.markForCheck();
	            this.shown.emit();
	        }
	    };
	    /**
	     * Closes an element’s tooltip. This is considered a “manual” triggering of the tooltip.
	     */
	    NgbTooltip.prototype.close = function () {
	        if (this._windowRef != null) {
	            this._popupService.close();
	            this._windowRef = null;
	            this.hidden.emit();
	        }
	    };
	    /**
	     * Toggles an element’s tooltip. This is considered a “manual” triggering of the tooltip.
	     */
	    NgbTooltip.prototype.toggle = function () {
	        if (this._windowRef) {
	            this.close();
	        }
	        else {
	            this.open();
	        }
	    };
	    /**
	     * Returns whether or not the tooltip is currently being shown
	     */
	    NgbTooltip.prototype.isOpen = function () { return this._windowRef != null; };
	    NgbTooltip.prototype.ngOnInit = function () {
	        this._unregisterListenersFn = triggers_1.listenToTriggers(this._renderer, this._elementRef.nativeElement, this.triggers, this.open.bind(this), this.close.bind(this), this.toggle.bind(this));
	    };
	    NgbTooltip.prototype.ngOnDestroy = function () {
	        this.close();
	        this._unregisterListenersFn();
	        this._zoneSubscription.unsubscribe();
	    };
	    __decorate([
	        core_1.Input(), 
	        __metadata('design:type', Object)
	    ], NgbTooltip.prototype, "placement", void 0);
	    __decorate([
	        core_1.Input(), 
	        __metadata('design:type', String)
	    ], NgbTooltip.prototype, "triggers", void 0);
	    __decorate([
	        core_1.Input(), 
	        __metadata('design:type', String)
	    ], NgbTooltip.prototype, "container", void 0);
	    __decorate([
	        core_1.Output(), 
	        __metadata('design:type', Object)
	    ], NgbTooltip.prototype, "shown", void 0);
	    __decorate([
	        core_1.Output(), 
	        __metadata('design:type', Object)
	    ], NgbTooltip.prototype, "hidden", void 0);
	    __decorate([
	        core_1.Input(), 
	        __metadata('design:type', Object), 
	        __metadata('design:paramtypes', [Object])
	    ], NgbTooltip.prototype, "ngbTooltip", null);
	    NgbTooltip = __decorate([
	        core_1.Directive({ selector: '[ngbTooltip]', exportAs: 'ngbTooltip' }), 
	        __metadata('design:paramtypes', [core_1.ElementRef, core_1.Renderer, core_1.Injector, core_1.ComponentFactoryResolver, core_1.ViewContainerRef, tooltip_config_1.NgbTooltipConfig, core_1.NgZone])
	    ], NgbTooltip);
	    return NgbTooltip;
	}());
	exports.NgbTooltip = NgbTooltip;
	//# sourceMappingURL=tooltip.js.map
	
	/***/ },
	/* 67 */
	/***/ function(module, exports, __webpack_require__) {
	
	"use strict";
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
	var core_1 = __webpack_require__(0);
	var util_1 = __webpack_require__(1);
	var NgbHighlight = (function () {
	    function NgbHighlight() {
	        this.highlightClass = 'ngb-highlight';
	    }
	    NgbHighlight.prototype.ngOnChanges = function (changes) {
	        var resultStr = util_1.toString(this.result);
	        var resultLC = resultStr.toLowerCase();
	        var termLC = util_1.toString(this.term).toLowerCase();
	        var currentIdx = 0;
	        if (termLC.length > 0) {
	            this.parts = resultLC.split(new RegExp("(" + util_1.regExpEscape(termLC) + ")")).map(function (part) {
	                var originalPart = resultStr.substr(currentIdx, part.length);
	                currentIdx += part.length;
	                return originalPart;
	            });
	        }
	        else {
	            this.parts = [resultStr];
	        }
	    };
	    __decorate([
	        core_1.Input(), 
	        __metadata('design:type', Object)
	    ], NgbHighlight.prototype, "highlightClass", void 0);
	    __decorate([
	        core_1.Input(), 
	        __metadata('design:type', String)
	    ], NgbHighlight.prototype, "result", void 0);
	    __decorate([
	        core_1.Input(), 
	        __metadata('design:type', String)
	    ], NgbHighlight.prototype, "term", void 0);
	    NgbHighlight = __decorate([
	        core_1.Component({
	            selector: 'ngb-highlight',
	            changeDetection: core_1.ChangeDetectionStrategy.OnPush,
	            template: "<template ngFor [ngForOf]=\"parts\" let-part let-isOdd=\"odd\">" +
	                "<span *ngIf=\"isOdd\" class=\"{{highlightClass}}\">{{part}}</span><template [ngIf]=\"!isOdd\">{{part}}</template>" +
	                "</template>",
	            styles: ["\n    .ngb-highlight {\n      font-weight: bold;\n    }\n  "]
	        }), 
	        __metadata('design:paramtypes', [])
	    ], NgbHighlight);
	    return NgbHighlight;
	}());
	exports.NgbHighlight = NgbHighlight;
	//# sourceMappingURL=highlight.js.map
	
	/***/ },
	/* 68 */
	/***/ function(module, exports) {
	
	"use strict";
	"use strict";
	var Trigger = (function () {
	    function Trigger(open, close) {
	        this.open = open;
	        this.close = close;
	        if (!close) {
	            this.close = open;
	        }
	    }
	    Trigger.prototype.isManual = function () { return this.open === 'manual' || this.close === 'manual'; };
	    return Trigger;
	}());
	exports.Trigger = Trigger;
	var DEFAULT_ALIASES = {
	    hover: ['mouseenter', 'mouseleave']
	};
	function parseTriggers(triggers, aliases) {
	    if (aliases === void 0) { aliases = DEFAULT_ALIASES; }
	    var trimmedTriggers = (triggers || '').trim();
	    if (trimmedTriggers.length === 0) {
	        return [];
	    }
	    var parsedTriggers = trimmedTriggers.split(/\s+/).map(function (trigger) { return trigger.split(':'); }).map(function (triggerPair) {
	        var alias = aliases[triggerPair[0]] || triggerPair;
	        return new Trigger(alias[0], alias[1]);
	    });
	    var manualTriggers = parsedTriggers.filter(function (triggerPair) { return triggerPair.isManual(); });
	    if (manualTriggers.length > 1) {
	        throw 'Triggers parse error: only one manual trigger is allowed';
	    }
	    if (manualTriggers.length === 1 && parsedTriggers.length > 1) {
	        throw 'Triggers parse error: manual trigger can\'t be mixed with other triggers';
	    }
	    return parsedTriggers;
	}
	exports.parseTriggers = parseTriggers;
	var noopFn = function () { };
	function listenToTriggers(renderer, nativeElement, triggers, openFn, closeFn, toggleFn) {
	    var parsedTriggers = parseTriggers(triggers);
	    var listeners = [];
	    if (parsedTriggers.length === 1 && parsedTriggers[0].isManual()) {
	        return noopFn;
	    }
	    parsedTriggers.forEach(function (trigger) {
	        if (trigger.open === trigger.close) {
	            listeners.push(renderer.listen(nativeElement, trigger.open, toggleFn));
	        }
	        else {
	            listeners.push(renderer.listen(nativeElement, trigger.open, openFn), renderer.listen(nativeElement, trigger.close, closeFn));
	        }
	    });
	    return function () { listeners.forEach(function (unsubscribeFn) { return unsubscribeFn(); }); };
	}
	exports.listenToTriggers = listenToTriggers;
	//# sourceMappingURL=triggers.js.map
	
	/***/ },
	/* 69 */
	/***/ function(module, exports, __webpack_require__) {
	
	"use strict";
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
	var core_1 = __webpack_require__(0);
	var util_1 = __webpack_require__(1);
	var popup_1 = __webpack_require__(7);
	var modal_backdrop_1 = __webpack_require__(55);
	var modal_window_1 = __webpack_require__(58);
	var modal_stack_1 = __webpack_require__(33);
	var modal_ref_1 = __webpack_require__(57);
	var NgbModalContainer = (function () {
	    function NgbModalContainer(_injector, _renderer, _viewContainerRef, _componentFactoryResolver, ngbModalStack) {
	        this._injector = _injector;
	        this._renderer = _renderer;
	        this._viewContainerRef = _viewContainerRef;
	        this._componentFactoryResolver = _componentFactoryResolver;
	        this._backdropFactory = _componentFactoryResolver.resolveComponentFactory(modal_backdrop_1.NgbModalBackdrop);
	        this._windowFactory = _componentFactoryResolver.resolveComponentFactory(modal_window_1.NgbModalWindow);
	        ngbModalStack.registerContainer(this);
	    }
	    NgbModalContainer.prototype.open = function (moduleCFR, contentInjector, content, options) {
	        var activeModal = new modal_ref_1.NgbActiveModal();
	        var contentRef = this._getContentRef(moduleCFR, contentInjector, content, activeModal);
	        var windowCmptRef;
	        var backdropCmptRef;
	        var ngbModalRef;
	        if (options.backdrop !== false) {
	            backdropCmptRef = this._viewContainerRef.createComponent(this._backdropFactory, 0, this._injector);
	        }
	        windowCmptRef = this._viewContainerRef.createComponent(this._windowFactory, this._viewContainerRef.length - 1, this._injector, contentRef.nodes);
	        ngbModalRef = new modal_ref_1.NgbModalRef(this._viewContainerRef, windowCmptRef, contentRef, backdropCmptRef);
	        activeModal.close = function (result) { ngbModalRef.close(result); };
	        activeModal.dismiss = function (reason) { ngbModalRef.dismiss(reason); };
	        this._applyWindowOptions(windowCmptRef.instance, options);
	        return ngbModalRef;
	    };
	    NgbModalContainer.prototype._applyWindowOptions = function (windowInstance, options) {
	        ['backdrop', 'keyboard', 'size', 'windowClass'].forEach(function (optionName) {
	            if (util_1.isDefined(options[optionName])) {
	                windowInstance[optionName] = options[optionName];
	            }
	        });
	    };
	    NgbModalContainer.prototype._getContentRef = function (moduleCFR, contentInjector, content, context) {
	        if (!content) {
	            return new popup_1.ContentRef([]);
	        }
	        else if (content instanceof core_1.TemplateRef) {
	            var viewRef = this._viewContainerRef.createEmbeddedView(content, context);
	            return new popup_1.ContentRef([viewRef.rootNodes], viewRef);
	        }
	        else if (util_1.isString(content)) {
	            return new popup_1.ContentRef([[this._renderer.createText(null, "" + content)]]);
	        }
	        else {
	            var contentCmptFactory = moduleCFR.resolveComponentFactory(content);
	            var modalContentInjector = core_1.ReflectiveInjector.resolveAndCreate([{ provide: modal_ref_1.NgbActiveModal, useValue: context }], contentInjector);
	            var componentRef = this._viewContainerRef.createComponent(contentCmptFactory, 0, modalContentInjector);
	            return new popup_1.ContentRef([[componentRef.location.nativeElement]], componentRef.hostView, componentRef);
	        }
	    };
	    NgbModalContainer = __decorate([
	        core_1.Directive({ selector: 'template[ngbModalContainer]' }), 
	        __metadata('design:paramtypes', [core_1.Injector, core_1.Renderer, core_1.ViewContainerRef, core_1.ComponentFactoryResolver, modal_stack_1.NgbModalStack])
	    ], NgbModalContainer);
	    return NgbModalContainer;
	}());
	exports.NgbModalContainer = NgbModalContainer;
	//# sourceMappingURL=modal-container.js.map
	
	/***/ },
	/* 70 */
	/***/ function(module, exports, __webpack_require__) {
	
	"use strict";
	"use strict";
	var util_1 = __webpack_require__(1);
	var NgbTime = (function () {
	    function NgbTime(hour, minute, second) {
	        this.hour = util_1.toInteger(hour);
	        this.minute = util_1.toInteger(minute);
	        this.second = util_1.toInteger(second);
	    }
	    NgbTime.prototype.changeHour = function (step) {
	        if (step === void 0) { step = 1; }
	        this.updateHour((isNaN(this.hour) ? 0 : this.hour) + step);
	    };
	    NgbTime.prototype.updateHour = function (hour) {
	        if (util_1.isNumber(hour)) {
	            this.hour = (hour < 0 ? 24 + hour : hour) % 24;
	        }
	        else {
	            this.hour = NaN;
	        }
	    };
	    NgbTime.prototype.changeMinute = function (step) {
	        if (step === void 0) { step = 1; }
	        this.updateMinute((isNaN(this.minute) ? 0 : this.minute) + step);
	    };
	    NgbTime.prototype.updateMinute = function (minute) {
	        if (util_1.isNumber(minute)) {
	            this.minute = minute % 60 < 0 ? 60 + minute % 60 : minute % 60;
	            this.changeHour(Math.floor(minute / 60));
	        }
	        else {
	            this.minute = NaN;
	        }
	    };
	    NgbTime.prototype.changeSecond = function (step) {
	        if (step === void 0) { step = 1; }
	        this.updateSecond((isNaN(this.second) ? 0 : this.second) + step);
	    };
	    NgbTime.prototype.updateSecond = function (second) {
	        if (util_1.isNumber(second)) {
	            this.second = second < 0 ? 60 + second % 60 : second % 60;
	            this.changeMinute(Math.floor(second / 60));
	        }
	        else {
	            this.second = NaN;
	        }
	    };
	    NgbTime.prototype.isValid = function (checkSecs) {
	        if (checkSecs === void 0) { checkSecs = true; }
	        return util_1.isNumber(this.hour) && util_1.isNumber(this.minute) && (checkSecs ? util_1.isNumber(this.second) : true);
	    };
	    NgbTime.prototype.toString = function () { return (this.hour || 0) + ":" + (this.minute || 0) + ":" + (this.second || 0); };
	    return NgbTime;
	}());
	exports.NgbTime = NgbTime;
	//# sourceMappingURL=ngb-time.js.map
	
	/***/ },
	/* 71 */
	/***/ function(module, exports, __webpack_require__) {
	
	"use strict";
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
	var core_1 = __webpack_require__(0);
	var forms_1 = __webpack_require__(3);
	var Observable_1 = __webpack_require__(75);
	__webpack_require__(74);
	__webpack_require__(72);
	__webpack_require__(73);
	var positioning_1 = __webpack_require__(8);
	var typeahead_window_1 = __webpack_require__(42);
	var popup_1 = __webpack_require__(7);
	var util_1 = __webpack_require__(1);
	var typeahead_config_1 = __webpack_require__(41);
	var Key;
	(function (Key) {
	    Key[Key["Tab"] = 9] = "Tab";
	    Key[Key["Enter"] = 13] = "Enter";
	    Key[Key["Escape"] = 27] = "Escape";
	    Key[Key["ArrowUp"] = 38] = "ArrowUp";
	    Key[Key["ArrowDown"] = 40] = "ArrowDown";
	})(Key || (Key = {}));
	var NGB_TYPEAHEAD_VALUE_ACCESSOR = {
	    provide: forms_1.NG_VALUE_ACCESSOR,
	    useExisting: core_1.forwardRef(function () { return NgbTypeahead; }),
	    multi: true
	};
	/**
	 * NgbTypeahead directive provides a simple way of creating powerful typeaheads from any text input
	 */
	var NgbTypeahead = (function () {
	    function NgbTypeahead(_elementRef, _viewContainerRef, _renderer, _injector, componentFactoryResolver, config, ngZone) {
	        var _this = this;
	        this._elementRef = _elementRef;
	        this._viewContainerRef = _viewContainerRef;
	        this._renderer = _renderer;
	        this._injector = _injector;
	        /**
	         * An event emitted when a match is selected. Event payload is of type NgbTypeaheadSelectItemEvent.
	         */
	        this.selectItem = new core_1.EventEmitter();
	        this._onTouched = function () { };
	        this._onChange = function (_) { };
	        this.editable = config.editable;
	        this.focusFirst = config.focusFirst;
	        this.showHint = config.showHint;
	        this._valueChanges = Observable_1.Observable.fromEvent(_elementRef.nativeElement, 'input', function ($event) { return $event.target.value; });
	        this._popupService = new popup_1.PopupService(typeahead_window_1.NgbTypeaheadWindow, _injector, _viewContainerRef, _renderer, componentFactoryResolver);
	        this._zoneSubscription = ngZone.onStable.subscribe(function () {
	            if (_this._windowRef) {
	                positioning_1.positionElements(_this._elementRef.nativeElement, _this._windowRef.location.nativeElement, 'bottom-left');
	            }
	        });
	    }
	    NgbTypeahead.prototype.ngOnInit = function () {
	        var _this = this;
	        this._subscription = this._subscribeToUserInput(this._valueChanges
	            .do(function (value) {
	            _this._userInput = value;
	            if (_this.editable) {
	                _this._onChange(value);
	            }
	        })
	            .let(this.ngbTypeahead)
	            .do(function (_) {
	            if (!_this.editable) {
	                _this._onChange(undefined);
	            }
	        }));
	    };
	    NgbTypeahead.prototype.ngOnDestroy = function () {
	        this._unsubscribeFromUserInput();
	        this._zoneSubscription.unsubscribe();
	    };
	    NgbTypeahead.prototype.registerOnChange = function (fn) { this._onChange = fn; };
	    NgbTypeahead.prototype.registerOnTouched = function (fn) { this._onTouched = fn; };
	    NgbTypeahead.prototype.writeValue = function (value) { this._writeInputValue(this._formatItemForInput(value)); };
	    NgbTypeahead.prototype.setDisabledState = function (isDisabled) {
	        this._renderer.setElementProperty(this._elementRef.nativeElement, 'disabled', isDisabled);
	    };
	    NgbTypeahead.prototype.dismissPopup = function () {
	        if (this.isPopupOpen()) {
	            this._closePopup();
	            this._writeInputValue(this._userInput);
	        }
	    };
	    NgbTypeahead.prototype.isPopupOpen = function () { return this._windowRef != null; };
	    NgbTypeahead.prototype.handleBlur = function () { this._onTouched(); };
	    NgbTypeahead.prototype.handleKeyDown = function (event) {
	        if (!this._windowRef) {
	            return;
	        }
	        if (Key[util_1.toString(event.which)]) {
	            switch (event.which) {
	                case Key.ArrowDown:
	                    event.preventDefault();
	                    this._windowRef.instance.next();
	                    this._showHint();
	                    break;
	                case Key.ArrowUp:
	                    event.preventDefault();
	                    this._windowRef.instance.prev();
	                    this._showHint();
	                    break;
	                case Key.Enter:
	                case Key.Tab:
	                    var result = this._windowRef.instance.getActive();
	                    if (util_1.isDefined(result)) {
	                        event.preventDefault();
	                        event.stopPropagation();
	                        this._selectResult(result);
	                    }
	                    this._closePopup();
	                    break;
	                case Key.Escape:
	                    event.preventDefault();
	                    this.dismissPopup();
	                    break;
	            }
	        }
	    };
	    NgbTypeahead.prototype._openPopup = function () {
	        var _this = this;
	        if (!this._windowRef) {
	            this._windowRef = this._popupService.open();
	            this._windowRef.instance.selectEvent.subscribe(function (result) { return _this._selectResultClosePopup(result); });
	        }
	    };
	    NgbTypeahead.prototype._closePopup = function () {
	        this._popupService.close();
	        this._windowRef = null;
	    };
	    NgbTypeahead.prototype._selectResult = function (result) {
	        var defaultPrevented = false;
	        this.selectItem.emit({ item: result, preventDefault: function () { defaultPrevented = true; } });
	        if (!defaultPrevented) {
	            this.writeValue(result);
	            this._onChange(result);
	        }
	    };
	    NgbTypeahead.prototype._selectResultClosePopup = function (result) {
	        this._selectResult(result);
	        this._closePopup();
	    };
	    NgbTypeahead.prototype._showHint = function () {
	        if (this.showHint) {
	            var userInputLowerCase = this._userInput.toLowerCase();
	            var formattedVal = this._formatItemForInput(this._windowRef.instance.getActive());
	            if (userInputLowerCase === formattedVal.substr(0, this._userInput.length).toLowerCase()) {
	                this._writeInputValue(this._userInput + formattedVal.substr(this._userInput.length));
	                this._renderer.invokeElementMethod(this._elementRef.nativeElement, 'setSelectionRange', [this._userInput.length, formattedVal.length]);
	            }
	            else {
	                this.writeValue(this._windowRef.instance.getActive());
	            }
	        }
	    };
	    NgbTypeahead.prototype._formatItemForInput = function (item) {
	        return item && this.inputFormatter ? this.inputFormatter(item) : util_1.toString(item);
	    };
	    NgbTypeahead.prototype._writeInputValue = function (value) {
	        this._renderer.setElementProperty(this._elementRef.nativeElement, 'value', value);
	    };
	    NgbTypeahead.prototype._subscribeToUserInput = function (userInput$) {
	        var _this = this;
	        return userInput$.subscribe(function (results) {
	            if (!results || results.length === 0) {
	                _this._closePopup();
	            }
	            else {
	                _this._openPopup();
	                _this._windowRef.instance.focusFirst = _this.focusFirst;
	                _this._windowRef.instance.results = results;
	                _this._windowRef.instance.term = _this._elementRef.nativeElement.value;
	                if (_this.resultFormatter) {
	                    _this._windowRef.instance.formatter = _this.resultFormatter;
	                }
	                if (_this.resultTemplate) {
	                    _this._windowRef.instance.resultTemplate = _this.resultTemplate;
	                }
	                _this._showHint();
	                // The observable stream we are subscribing to might have async steps
	                // and if a component containing typeahead is using the OnPush strategy
	                // the change detection turn wouldn't be invoked automatically.
	                _this._windowRef.changeDetectorRef.detectChanges();
	            }
	        });
	    };
	    NgbTypeahead.prototype._unsubscribeFromUserInput = function () {
	        if (this._subscription) {
	            this._subscription.unsubscribe();
	        }
	        this._subscription = null;
	    };
	    __decorate([
	        core_1.Input(), 
	        __metadata('design:type', Boolean)
	    ], NgbTypeahead.prototype, "editable", void 0);
	    __decorate([
	        core_1.Input(), 
	        __metadata('design:type', Boolean)
	    ], NgbTypeahead.prototype, "focusFirst", void 0);
	    __decorate([
	        core_1.Input(), 
	        __metadata('design:type', Function)
	    ], NgbTypeahead.prototype, "inputFormatter", void 0);
	    __decorate([
	        core_1.Input(), 
	        __metadata('design:type', Function)
	    ], NgbTypeahead.prototype, "ngbTypeahead", void 0);
	    __decorate([
	        core_1.Input(), 
	        __metadata('design:type', Function)
	    ], NgbTypeahead.prototype, "resultFormatter", void 0);
	    __decorate([
	        core_1.Input(), 
	        __metadata('design:type', core_1.TemplateRef)
	    ], NgbTypeahead.prototype, "resultTemplate", void 0);
	    __decorate([
	        core_1.Input(), 
	        __metadata('design:type', Boolean)
	    ], NgbTypeahead.prototype, "showHint", void 0);
	    __decorate([
	        core_1.Output(), 
	        __metadata('design:type', Object)
	    ], NgbTypeahead.prototype, "selectItem", void 0);
	    NgbTypeahead = __decorate([
	        core_1.Directive({
	            selector: 'input[ngbTypeahead]',
	            host: {
	                '(blur)': 'handleBlur()',
	                '[class.open]': 'isPopupOpen()',
	                '(document:click)': 'dismissPopup()',
	                '(keydown)': 'handleKeyDown($event)',
	                'autocomplete': 'off',
	                'autocapitalize': 'off',
	                'autocorrect': 'off'
	            },
	            providers: [NGB_TYPEAHEAD_VALUE_ACCESSOR]
	        }), 
	        __metadata('design:paramtypes', [core_1.ElementRef, core_1.ViewContainerRef, core_1.Renderer, core_1.Injector, core_1.ComponentFactoryResolver, typeahead_config_1.NgbTypeaheadConfig, core_1.NgZone])
	    ], NgbTypeahead);
	    return NgbTypeahead;
	}());
	exports.NgbTypeahead = NgbTypeahead;
	//# sourceMappingURL=typeahead.js.map
	
	/***/ },
	/* 72 */
	/***/ function(module, exports) {
	
	module.exports = __WEBPACK_EXTERNAL_MODULE_72__;
	
	/***/ },
	/* 73 */
	/***/ function(module, exports) {
	
	module.exports = __WEBPACK_EXTERNAL_MODULE_73__;
	
	/***/ },
	/* 74 */
	/***/ function(module, exports) {
	
	module.exports = __WEBPACK_EXTERNAL_MODULE_74__;
	
	/***/ },
	/* 75 */
	/***/ function(module, exports) {
	
	module.exports = __WEBPACK_EXTERNAL_MODULE_75__;
	
	/***/ },
	/* 76 */
	/***/ function(module, exports, __webpack_require__) {
	
	"use strict";
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
	var core_1 = __webpack_require__(0);
	var accordion_module_1 = __webpack_require__(9);
	var alert_module_1 = __webpack_require__(10);
	var radio_module_1 = __webpack_require__(11);
	var carousel_module_1 = __webpack_require__(12);
	var collapse_module_1 = __webpack_require__(13);
	var datepicker_module_1 = __webpack_require__(14);
	var dropdown_module_1 = __webpack_require__(15);
	var modal_module_1 = __webpack_require__(16);
	var pagination_module_1 = __webpack_require__(17);
	var popover_module_1 = __webpack_require__(18);
	var progressbar_module_1 = __webpack_require__(19);
	var rating_module_1 = __webpack_require__(20);
	var tabset_module_1 = __webpack_require__(21);
	var timepicker_module_1 = __webpack_require__(22);
	var tooltip_module_1 = __webpack_require__(23);
	var typeahead_module_1 = __webpack_require__(24);
	var accordion_module_2 = __webpack_require__(9);
	exports.NgbAccordionModule = accordion_module_2.NgbAccordionModule;
	exports.NgbAccordionConfig = accordion_module_2.NgbAccordionConfig;
	var alert_module_2 = __webpack_require__(10);
	exports.NgbAlertModule = alert_module_2.NgbAlertModule;
	exports.NgbAlertConfig = alert_module_2.NgbAlertConfig;
	var radio_module_2 = __webpack_require__(11);
	exports.NgbButtonsModule = radio_module_2.NgbButtonsModule;
	var carousel_module_2 = __webpack_require__(12);
	exports.NgbCarouselModule = carousel_module_2.NgbCarouselModule;
	exports.NgbCarouselConfig = carousel_module_2.NgbCarouselConfig;
	var collapse_module_2 = __webpack_require__(13);
	exports.NgbCollapseModule = collapse_module_2.NgbCollapseModule;
	var datepicker_module_2 = __webpack_require__(14);
	exports.NgbDatepickerModule = datepicker_module_2.NgbDatepickerModule;
	exports.NgbDatepickerI18n = datepicker_module_2.NgbDatepickerI18n;
	exports.NgbDatepickerConfig = datepicker_module_2.NgbDatepickerConfig;
	exports.NgbDateParserFormatter = datepicker_module_2.NgbDateParserFormatter;
	var dropdown_module_2 = __webpack_require__(15);
	exports.NgbDropdownModule = dropdown_module_2.NgbDropdownModule;
	exports.NgbDropdownConfig = dropdown_module_2.NgbDropdownConfig;
	var modal_module_2 = __webpack_require__(16);
	exports.NgbModalModule = modal_module_2.NgbModalModule;
	exports.NgbModal = modal_module_2.NgbModal;
	exports.NgbActiveModal = modal_module_2.NgbActiveModal;
	exports.NgbModalRef = modal_module_2.NgbModalRef;
	exports.ModalDismissReasons = modal_module_2.ModalDismissReasons;
	var pagination_module_2 = __webpack_require__(17);
	exports.NgbPaginationModule = pagination_module_2.NgbPaginationModule;
	exports.NgbPaginationConfig = pagination_module_2.NgbPaginationConfig;
	var popover_module_2 = __webpack_require__(18);
	exports.NgbPopoverModule = popover_module_2.NgbPopoverModule;
	exports.NgbPopoverConfig = popover_module_2.NgbPopoverConfig;
	var progressbar_module_2 = __webpack_require__(19);
	exports.NgbProgressbarModule = progressbar_module_2.NgbProgressbarModule;
	exports.NgbProgressbarConfig = progressbar_module_2.NgbProgressbarConfig;
	var rating_module_2 = __webpack_require__(20);
	exports.NgbRatingModule = rating_module_2.NgbRatingModule;
	exports.NgbRatingConfig = rating_module_2.NgbRatingConfig;
	var tabset_module_2 = __webpack_require__(21);
	exports.NgbTabsetModule = tabset_module_2.NgbTabsetModule;
	exports.NgbTabsetConfig = tabset_module_2.NgbTabsetConfig;
	var timepicker_module_2 = __webpack_require__(22);
	exports.NgbTimepickerModule = timepicker_module_2.NgbTimepickerModule;
	exports.NgbTimepickerConfig = timepicker_module_2.NgbTimepickerConfig;
	var tooltip_module_2 = __webpack_require__(23);
	exports.NgbTooltipModule = tooltip_module_2.NgbTooltipModule;
	exports.NgbTooltipConfig = tooltip_module_2.NgbTooltipConfig;
	var typeahead_module_2 = __webpack_require__(24);
	exports.NgbTypeaheadModule = typeahead_module_2.NgbTypeaheadModule;
	exports.NgbTypeaheadConfig = typeahead_module_2.NgbTypeaheadConfig;
	var NGB_MODULES = [
	    accordion_module_1.NgbAccordionModule, alert_module_1.NgbAlertModule, radio_module_1.NgbButtonsModule, carousel_module_1.NgbCarouselModule, collapse_module_1.NgbCollapseModule, datepicker_module_1.NgbDatepickerModule,
	    dropdown_module_1.NgbDropdownModule, modal_module_1.NgbModalModule, pagination_module_1.NgbPaginationModule, popover_module_1.NgbPopoverModule, progressbar_module_1.NgbProgressbarModule, rating_module_1.NgbRatingModule,
	    tabset_module_1.NgbTabsetModule, timepicker_module_1.NgbTimepickerModule, tooltip_module_1.NgbTooltipModule, typeahead_module_1.NgbTypeaheadModule
	];
	var NgbRootModule = (function () {
	    function NgbRootModule() {
	    }
	    NgbRootModule = __decorate([
	        core_1.NgModule({
	            imports: [
	                alert_module_1.NgbAlertModule.forRoot(), radio_module_1.NgbButtonsModule.forRoot(), collapse_module_1.NgbCollapseModule.forRoot(), progressbar_module_1.NgbProgressbarModule.forRoot(),
	                tooltip_module_1.NgbTooltipModule.forRoot(), typeahead_module_1.NgbTypeaheadModule.forRoot(), accordion_module_1.NgbAccordionModule.forRoot(), carousel_module_1.NgbCarouselModule.forRoot(),
	                datepicker_module_1.NgbDatepickerModule.forRoot(), dropdown_module_1.NgbDropdownModule.forRoot(), modal_module_1.NgbModalModule.forRoot(), pagination_module_1.NgbPaginationModule.forRoot(),
	                popover_module_1.NgbPopoverModule.forRoot(), progressbar_module_1.NgbProgressbarModule.forRoot(), rating_module_1.NgbRatingModule.forRoot(), tabset_module_1.NgbTabsetModule.forRoot(),
	                timepicker_module_1.NgbTimepickerModule.forRoot(), tooltip_module_1.NgbTooltipModule.forRoot()
	            ],
	            exports: NGB_MODULES
	        }), 
	        __metadata('design:paramtypes', [])
	    ], NgbRootModule);
	    return NgbRootModule;
	}());
	exports.NgbRootModule = NgbRootModule;
	var NgbModule = (function () {
	    function NgbModule() {
	    }
	    NgbModule.forRoot = function () { return { ngModule: NgbRootModule }; };
	    NgbModule = __decorate([
	        core_1.NgModule({ imports: NGB_MODULES, exports: NGB_MODULES }), 
	        __metadata('design:paramtypes', [])
	    ], NgbModule);
	    return NgbModule;
	}());
	exports.NgbModule = NgbModule;
	//# sourceMappingURL=index.js.map
	
	/***/ }
	/******/ ]);
	});
	//# sourceMappingURL=ng-bootstrap.js.map

/***/ },
/* 35 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var Observable_1 = __webpack_require__(5);
	var do_1 = __webpack_require__(36);
	Observable_1.Observable.prototype.do = do_1._do;
	Observable_1.Observable.prototype._do = do_1._do;
	//# sourceMappingURL=do.js.map

/***/ },
/* 36 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __extends = (this && this.__extends) || function (d, b) {
	    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	    function __() { this.constructor = d; }
	    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	};
	var Subscriber_1 = __webpack_require__(8);
	/**
	 * Perform a side effect for every emission on the source Observable, but return
	 * an Observable that is identical to the source.
	 *
	 * <span class="informal">Intercepts each emission on the source and runs a
	 * function, but returns an output which is identical to the source.</span>
	 *
	 * <img src="./img/do.png" width="100%">
	 *
	 * Returns a mirrored Observable of the source Observable, but modified so that
	 * the provided Observer is called to perform a side effect for every value,
	 * error, and completion emitted by the source. Any errors that are thrown in
	 * the aforementioned Observer or handlers are safely sent down the error path
	 * of the output Observable.
	 *
	 * This operator is useful for debugging your Observables for the correct values
	 * or performing other side effects.
	 *
	 * Note: this is different to a `subscribe` on the Observable. If the Observable
	 * returned by `do` is not subscribed, the side effects specified by the
	 * Observer will never happen. `do` therefore simply spies on existing
	 * execution, it does not trigger an execution to happen like `subscribe` does.
	 *
	 * @example <caption>Map every every click to the clientX position of that click, while also logging the click event</caption>
	 * var clicks = Rx.Observable.fromEvent(document, 'click');
	 * var positions = clicks
	 *   .do(ev => console.log(ev))
	 *   .map(ev => ev.clientX);
	 * positions.subscribe(x => console.log(x));
	 *
	 * @see {@link map}
	 * @see {@link subscribe}
	 *
	 * @param {Observer|function} [nextOrObserver] A normal Observer object or a
	 * callback for `next`.
	 * @param {function} [error] Callback for errors in the source.
	 * @param {function} [complete] Callback for the completion of the source.
	 * @return {Observable} An Observable identical to the source, but runs the
	 * specified Observer or callback(s) for each item.
	 * @method do
	 * @name do
	 * @owner Observable
	 */
	function _do(nextOrObserver, error, complete) {
	    return this.lift(new DoOperator(nextOrObserver, error, complete));
	}
	exports._do = _do;
	var DoOperator = (function () {
	    function DoOperator(nextOrObserver, error, complete) {
	        this.nextOrObserver = nextOrObserver;
	        this.error = error;
	        this.complete = complete;
	    }
	    DoOperator.prototype.call = function (subscriber, source) {
	        return source._subscribe(new DoSubscriber(subscriber, this.nextOrObserver, this.error, this.complete));
	    };
	    return DoOperator;
	}());
	/**
	 * We need this JSDoc comment for affecting ESDoc.
	 * @ignore
	 * @extends {Ignored}
	 */
	var DoSubscriber = (function (_super) {
	    __extends(DoSubscriber, _super);
	    function DoSubscriber(destination, nextOrObserver, error, complete) {
	        _super.call(this, destination);
	        var safeSubscriber = new Subscriber_1.Subscriber(nextOrObserver, error, complete);
	        safeSubscriber.syncErrorThrowable = true;
	        this.add(safeSubscriber);
	        this.safeSubscriber = safeSubscriber;
	    }
	    DoSubscriber.prototype._next = function (value) {
	        var safeSubscriber = this.safeSubscriber;
	        safeSubscriber.next(value);
	        if (safeSubscriber.syncErrorThrown) {
	            this.destination.error(safeSubscriber.syncErrorValue);
	        }
	        else {
	            this.destination.next(value);
	        }
	    };
	    DoSubscriber.prototype._error = function (err) {
	        var safeSubscriber = this.safeSubscriber;
	        safeSubscriber.error(err);
	        if (safeSubscriber.syncErrorThrown) {
	            this.destination.error(safeSubscriber.syncErrorValue);
	        }
	        else {
	            this.destination.error(err);
	        }
	    };
	    DoSubscriber.prototype._complete = function () {
	        var safeSubscriber = this.safeSubscriber;
	        safeSubscriber.complete();
	        if (safeSubscriber.syncErrorThrown) {
	            this.destination.error(safeSubscriber.syncErrorValue);
	        }
	        else {
	            this.destination.complete();
	        }
	    };
	    return DoSubscriber;
	}(Subscriber_1.Subscriber));
	//# sourceMappingURL=do.js.map

/***/ },
/* 37 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var Observable_1 = __webpack_require__(5);
	var let_1 = __webpack_require__(38);
	Observable_1.Observable.prototype.let = let_1.letProto;
	Observable_1.Observable.prototype.letBind = let_1.letProto;
	//# sourceMappingURL=let.js.map

/***/ },
/* 38 */
/***/ function(module, exports) {

	"use strict";
	/**
	 * @param func
	 * @return {Observable<R>}
	 * @method let
	 * @owner Observable
	 */
	function letProto(func) {
	    return func(this);
	}
	exports.letProto = letProto;
	//# sourceMappingURL=let.js.map

/***/ },
/* 39 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var Observable_1 = __webpack_require__(5);
	var fromEvent_1 = __webpack_require__(40);
	Observable_1.Observable.fromEvent = fromEvent_1.fromEvent;
	//# sourceMappingURL=fromEvent.js.map

/***/ },
/* 40 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var FromEventObservable_1 = __webpack_require__(41);
	exports.fromEvent = FromEventObservable_1.FromEventObservable.create;
	//# sourceMappingURL=fromEvent.js.map

/***/ },
/* 41 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __extends = (this && this.__extends) || function (d, b) {
	    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	    function __() { this.constructor = d; }
	    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	};
	var Observable_1 = __webpack_require__(5);
	var tryCatch_1 = __webpack_require__(13);
	var isFunction_1 = __webpack_require__(9);
	var errorObject_1 = __webpack_require__(14);
	var Subscription_1 = __webpack_require__(10);
	function isNodeStyleEventEmmitter(sourceObj) {
	    return !!sourceObj && typeof sourceObj.addListener === 'function' && typeof sourceObj.removeListener === 'function';
	}
	function isJQueryStyleEventEmitter(sourceObj) {
	    return !!sourceObj && typeof sourceObj.on === 'function' && typeof sourceObj.off === 'function';
	}
	function isNodeList(sourceObj) {
	    return !!sourceObj && sourceObj.toString() === '[object NodeList]';
	}
	function isHTMLCollection(sourceObj) {
	    return !!sourceObj && sourceObj.toString() === '[object HTMLCollection]';
	}
	function isEventTarget(sourceObj) {
	    return !!sourceObj && typeof sourceObj.addEventListener === 'function' && typeof sourceObj.removeEventListener === 'function';
	}
	/**
	 * We need this JSDoc comment for affecting ESDoc.
	 * @extends {Ignored}
	 * @hide true
	 */
	var FromEventObservable = (function (_super) {
	    __extends(FromEventObservable, _super);
	    function FromEventObservable(sourceObj, eventName, selector, options) {
	        _super.call(this);
	        this.sourceObj = sourceObj;
	        this.eventName = eventName;
	        this.selector = selector;
	        this.options = options;
	    }
	    /* tslint:enable:max-line-length */
	    /**
	     * Creates an Observable that emits events of a specific type coming from the
	     * given event target.
	     *
	     * <span class="informal">Creates an Observable from DOM events, or Node
	     * EventEmitter events or others.</span>
	     *
	     * <img src="./img/fromEvent.png" width="100%">
	     *
	     * Creates an Observable by attaching an event listener to an "event target",
	     * which may be an object with `addEventListener` and `removeEventListener`,
	     * a Node.js EventEmitter, a jQuery style EventEmitter, a NodeList from the
	     * DOM, or an HTMLCollection from the DOM. The event handler is attached when
	     * the output Observable is subscribed, and removed when the Subscription is
	     * unsubscribed.
	     *
	     * @example <caption>Emits clicks happening on the DOM document</caption>
	     * var clicks = Rx.Observable.fromEvent(document, 'click');
	     * clicks.subscribe(x => console.log(x));
	     *
	     * @see {@link from}
	     * @see {@link fromEventPattern}
	     *
	     * @param {EventTargetLike} target The DOMElement, event target, Node.js
	     * EventEmitter, NodeList or HTMLCollection to attach the event handler to.
	     * @param {string} eventName The event name of interest, being emitted by the
	     * `target`.
	     * @parm {EventListenerOptions} [options] Options to pass through to addEventListener
	     * @param {SelectorMethodSignature<T>} [selector] An optional function to
	     * post-process results. It takes the arguments from the event handler and
	     * should return a single value.
	     * @return {Observable<T>}
	     * @static true
	     * @name fromEvent
	     * @owner Observable
	     */
	    FromEventObservable.create = function (target, eventName, options, selector) {
	        if (isFunction_1.isFunction(options)) {
	            selector = options;
	            options = undefined;
	        }
	        return new FromEventObservable(target, eventName, selector, options);
	    };
	    FromEventObservable.setupSubscription = function (sourceObj, eventName, handler, subscriber, options) {
	        var unsubscribe;
	        if (isNodeList(sourceObj) || isHTMLCollection(sourceObj)) {
	            for (var i = 0, len = sourceObj.length; i < len; i++) {
	                FromEventObservable.setupSubscription(sourceObj[i], eventName, handler, subscriber, options);
	            }
	        }
	        else if (isEventTarget(sourceObj)) {
	            var source_1 = sourceObj;
	            sourceObj.addEventListener(eventName, handler, options);
	            unsubscribe = function () { return source_1.removeEventListener(eventName, handler); };
	        }
	        else if (isJQueryStyleEventEmitter(sourceObj)) {
	            var source_2 = sourceObj;
	            sourceObj.on(eventName, handler);
	            unsubscribe = function () { return source_2.off(eventName, handler); };
	        }
	        else if (isNodeStyleEventEmmitter(sourceObj)) {
	            var source_3 = sourceObj;
	            sourceObj.addListener(eventName, handler);
	            unsubscribe = function () { return source_3.removeListener(eventName, handler); };
	        }
	        subscriber.add(new Subscription_1.Subscription(unsubscribe));
	    };
	    FromEventObservable.prototype._subscribe = function (subscriber) {
	        var sourceObj = this.sourceObj;
	        var eventName = this.eventName;
	        var options = this.options;
	        var selector = this.selector;
	        var handler = selector ? function () {
	            var args = [];
	            for (var _i = 0; _i < arguments.length; _i++) {
	                args[_i - 0] = arguments[_i];
	            }
	            var result = tryCatch_1.tryCatch(selector).apply(void 0, args);
	            if (result === errorObject_1.errorObject) {
	                subscriber.error(errorObject_1.errorObject.e);
	            }
	            else {
	                subscriber.next(result);
	            }
	        } : function (e) { return subscriber.next(e); };
	        FromEventObservable.setupSubscription(sourceObj, eventName, handler, subscriber, options);
	    };
	    return FromEventObservable;
	}(Observable_1.Observable));
	exports.FromEventObservable = FromEventObservable;
	//# sourceMappingURL=FromEventObservable.js.map

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
	var forms_1 = __webpack_require__(30);
	var expander_module_1 = __webpack_require__(43);
	var search_fields_component_1 = __webpack_require__(45);
	var search_order_by_component_1 = __webpack_require__(46);
	var search_criteria_component_1 = __webpack_require__(47);
	var search_component_1 = __webpack_require__(48);
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
/* 43 */
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
	var expander_component_1 = __webpack_require__(44);
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
/* 44 */
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
/* 48 */
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
	var actions_service_1 = __webpack_require__(49);
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
/* 49 */
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
/* 50 */
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
	var search_pagination_component_1 = __webpack_require__(51);
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
/* 51 */
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
/* 52 */
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
/* 53 */
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
	var core_1 = __webpack_require__(3);
	var dynamic_component_loader_service_1 = __webpack_require__(55);
	var modal_dialog_extension_module_1 = __webpack_require__(56);
	var base_modal_popup_1 = __webpack_require__(58);
	exports.BaseModalPopup = base_modal_popup_1.BaseModalPopup;
	var modal_wrapper_component_1 = __webpack_require__(60);
	exports.ModalSizes = modal_wrapper_component_1.ModalSizes;
	// Alert types
	exports.AlertTypes = {
	    success: 'success',
	    info: 'info',
	    warning: 'warning',
	    error: 'error'
	};
	// Modal wrapper module
	var modal_wrapper_extension_module_1 = __webpack_require__(61);
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
/* 56 */
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
	var modal_dialog_component_1 = __webpack_require__(57);
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
/* 57 */
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
	var base_modal_popup_1 = __webpack_require__(58);
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
/* 58 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __extends = (this && this.__extends) || function (d, b) {
	    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	    function __() { this.constructor = d; }
	    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	};
	var core_1 = __webpack_require__(3);
	var base_extension_component_1 = __webpack_require__(59);
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
/* 59 */
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
/* 60 */
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
/* 61 */
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
	var modal_wrapper_component_1 = __webpack_require__(60);
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
/* 62 */
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
	var modal_service_1 = __webpack_require__(54);
	var helper_1 = __webpack_require__(52);
	var FormService = (function () {
	    function FormService(_modalService, formBuilder, _dataService, _helperService) {
	        var _this = this;
	        this._modalService = _modalService;
	        this._dataService = _dataService;
	        this._helperService = _helperService;
	        this._originalObject = {}; // Original object to compare changes and reset object in DataService
	        this._originalNormalizedObject = {}; // Original normalized (for form) object to compare changes and reset object in form
	        this._object = {}; // Object used by form
	        this._$form = null; // DOM form
	        this._errors = {}; // Form errors validation
	        // Used to force form to submit,
	        // generally when you need that user confirm the date, but the data has no changes.
	        this._forceSubmit = false;
	        // Controls if the form is on "save" mode (waiting to finish the save process). It's useful to control the
	        // save action (avoid multiples clicks on button) and to recognize the object change after saved by DataService.
	        this._isOnSave = false;
	        // Confirm object override by user to prevent data loss (when the object is changed in DataService)
	        this._preventObjectOverride = true;
	        this._onObjectChangeEmitter = new core_1.EventEmitter();
	        // Object change event subscription
	        this._onObjectChangeSubscription = this._dataService.getOnObjectChangeEmitter()
	            .subscribe(function (object) { return _this.onObjectChangeSubscription(object); });
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
	        var formControls = {}, fields = (this._dataService.getFields('form') || []).concat(this._helperService.objectKeys(this._dataService.getProviderExtraDataAttr('fields')));
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
	            if (
	            // Form is waiting for save process, this is the saved object,
	            // it's not necessary any confirmation, if you need more security in this process, add a token.
	            this._isOnSave
	                || !this._preventObjectOverride) {
	                this.setObject(object);
	                return;
	            }
	            // Confirm object override by user to prevent data loss
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
	                        console.log("ssssssss");
	                        console.log(that._originalObject);
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
	            if (this._dataService.getObjectIndex() == null) {
	                // If no index is defined, it's a new object
	                this._forceSubmit = true;
	            }
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
	     * @returns {boolean|Boolean}
	     */
	    FormService.prototype.hasChanges = function () {
	        return (!this._helperService.isEqualObject(this._object, this._originalNormalizedObject)
	            || this._forceSubmit // If forceSubmit is enabled, so data should be saved and user should be advised;
	        );
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
	            this._dataService.newObject().then(function (data) { return resolve(data); }, function (errors) { return reject(errors); });
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
	     * @param $forceSubmit
	     * @returns {FormService}
	     */
	    FormService.prototype.setForceSubmit = function ($forceSubmit) {
	        if ($forceSubmit === void 0) { $forceSubmit = true; }
	        this._forceSubmit = $forceSubmit;
	        return this;
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
/* 63 */
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
	var post_service_1 = __webpack_require__(53);
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
	        if (object) {
	            // Normalize object to template
	            this._normalizedObject = this._helperService.cloneObject(object, true);
	            this.normalizeObjectsToTemplate([this._normalizedObject]);
	            // Objects stored in session does not be considered really objects.
	            if (!object['_isSessionStorage']) {
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
	                        // Local data (Do not override, merge data)
	                        if (data['localData']) {
	                            that._provider.localData =
	                                that._helperService.mergeObjects(that._provider.localData, data['localData']);
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
	            var _this = this;
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
	                // Reset object index
	                _this._objectIndex = null;
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
	     * Run/Execute action. Execute action directly.
	     * @param route
	     * @param data
	     * @returns {Promise}
	     */
	    DataService.prototype.runAction = function (route, data) {
	        if (data === void 0) { data = null; }
	        var that = this;
	        return new Promise(function (resolve, reject) {
	            return that.post(route, that.getRequestData(data, false, false)).then(function (data) { return resolve(data); }, function (errors) { console.log(errors); return reject(errors); });
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
/* 64 */
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
	var data_box_extension_component_1 = __webpack_require__(65);
	exports.PopupTypes = data_box_extension_component_1.PopupTypes;
	var modal_service_1 = __webpack_require__(54);
	var helper_1 = __webpack_require__(52);
	var actions_service_1 = __webpack_require__(49);
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
	var core_1 = __webpack_require__(3);
	var data_service_1 = __webpack_require__(63);
	var box_extension_component_1 = __webpack_require__(66);
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
	var core_1 = __webpack_require__(3);
	var base_extension_component_1 = __webpack_require__(59);
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
	var forms_1 = __webpack_require__(30);
	var ng_bootstrap_1 = __webpack_require__(34);
	var field_types_extension_module_1 = __webpack_require__(68);
	var form_popup_component_1 = __webpack_require__(74);
	var FormPopupExtensionModule = (function () {
	    function FormPopupExtensionModule() {
	    }
	    return FormPopupExtensionModule;
	}());
	FormPopupExtensionModule = __decorate([
	    core_1.NgModule({
	        imports: [
	            common_1.CommonModule,
	            forms_1.FormsModule,
	            forms_1.ReactiveFormsModule,
	            ng_bootstrap_1.NgbModule,
	            field_types_extension_module_1.FieldTypesExtensionModule
	        ],
	        declarations: [
	            form_popup_component_1.FormPopupComponent
	        ],
	        exports: [form_popup_component_1.FormPopupComponent]
	    })
	], FormPopupExtensionModule);
	exports.FormPopupExtensionModule = FormPopupExtensionModule;


/***/ },
/* 68 */
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
	var field_type_auto_complete_component_1 = __webpack_require__(69);
	var password_component_1 = __webpack_require__(70);
	var field_type_multi_checkbox_directive_1 = __webpack_require__(71);
	var field_type_html_select_directive_1 = __webpack_require__(72);
	var field_type_date_picker_directive_1 = __webpack_require__(73);
	var FieldTypesExtensionModule = (function () {
	    function FieldTypesExtensionModule() {
	    }
	    return FieldTypesExtensionModule;
	}());
	FieldTypesExtensionModule = __decorate([
	    core_1.NgModule({
	        imports: [common_1.CommonModule, forms_1.FormsModule],
	        declarations: [
	            field_type_auto_complete_component_1.FieldTypeAutoCompleteComponent,
	            password_component_1.FieldTypePasswordComponent,
	            field_type_multi_checkbox_directive_1.FieldTypeMultiCheckboxDirective,
	            field_type_html_select_directive_1.FieldTypeHtmlSelectDirective,
	            field_type_date_picker_directive_1.FieldTypeDatePickerDirective
	        ],
	        exports: [
	            field_type_auto_complete_component_1.FieldTypeAutoCompleteComponent,
	            password_component_1.FieldTypePasswordComponent,
	            field_type_multi_checkbox_directive_1.FieldTypeMultiCheckboxDirective,
	            field_type_html_select_directive_1.FieldTypeHtmlSelectDirective,
	            field_type_date_picker_directive_1.FieldTypeDatePickerDirective
	        ]
	    })
	], FieldTypesExtensionModule);
	exports.FieldTypesExtensionModule = FieldTypesExtensionModule;


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
	var core_1 = __webpack_require__(3);
	var data_service_1 = __webpack_require__(63);
	var modal_service_1 = __webpack_require__(54);
	var post_service_1 = __webpack_require__(53);
	var form_service_1 = __webpack_require__(62);
	var data_box_component_1 = __webpack_require__(64);
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
	        this.onChange = new core_1.EventEmitter();
	        this._isHidden = true;
	        this._lastSelectedChoice = { id: null, label: '' };
	        this._choices = [];
	        this._search = { term: '', lastTerm: null };
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
	                    'field': 'name',
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
	        if (popupType === void 0) { popupType = data_box_component_1.PopupTypes.edit; }
	        var that = this;
	        // Inject object to edit in child DataService
	        if (this._object[this.field]) {
	            // Simulate object
	            var object = { id: this._object[this.field] };
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
	        if (popupType === void 0) { popupType = data_box_component_1.PopupTypes.edit; }
	        popupType = (data_box_component_1.PopupTypes[popupType] || data_box_component_1.PopupTypes.edit);
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
	            var resolvedProviders = core_1.ReflectiveInjector.resolve([
	                { provide: 'DataServiceChoices', useClass: data_service_1.DataService },
	                { provide: 'DataService', useClass: data_service_1.DataService },
	                { provide: 'DataServiceProvider', useValue: dataServiceProvider },
	                { provide: 'Provider', useValue: that._helperService.getDataBoxProvider(data) }
	            ]);
	            that._childInjector = core_1.ReflectiveInjector.fromResolvedProviders(resolvedProviders, that._injector);
	            // Save childInjector (check out the context in the provider definition)
	            that._provider.childInjector = that._childInjector;
	            that.init();
	            // Add parameter to action route
	            if (that._provider.urlChoicesParams) {
	                that._childDataServiceChoices.setRoute('choices', (that._childDataServiceChoices.getRoute('choices') + that._provider.urlChoicesParams));
	            }
	        }, function (errors) { console.log(errors); return; });
	    };
	    /**
	     * Initialize variables and dependencies.
	     * @returns {FieldTypeAutoCompleteComponent}
	     */
	    FieldTypeAutoCompleteComponent.prototype.init = function () {
	        var _this = this;
	        this._childDataServicePopup = this._childInjector.get('DataService');
	        this._childDataServiceChoices = this._childInjector.get('DataServiceChoices');
	        this._onChildObjectsChangeSubscription = this._childDataServiceChoices.getOnObjectsChangeEmitter()
	            .subscribe(function (object) { return _this.resetChoices(); });
	        this._childCandidateSearch = this._childDataServiceChoices.getCandidateSearch(); // To filter objects
	        return this;
	    };
	    /**
	     * Lifecycle callback
	     */
	    FieldTypeAutoCompleteComponent.prototype.ngOnDestroy = function () {
	        this._onObjectChangeSubscription.unsubscribe();
	        this._onChildObjectsChangeSubscription.unsubscribe();
	    };
	    return FieldTypeAutoCompleteComponent;
	}());
	__decorate([
	    core_1.Input(),
	    __metadata("design:type", String)
	], FieldTypeAutoCompleteComponent.prototype, "field", void 0);
	__decorate([
	    core_1.Input(),
	    __metadata("design:type", Boolean)
	], FieldTypeAutoCompleteComponent.prototype, "selfReference", void 0);
	__decorate([
	    core_1.Input(),
	    __metadata("design:type", String)
	], FieldTypeAutoCompleteComponent.prototype, "placeholder", void 0);
	__decorate([
	    core_1.Output(),
	    __metadata("design:type", Object)
	], FieldTypeAutoCompleteComponent.prototype, "onChange", void 0);
	FieldTypeAutoCompleteComponent = __decorate([
	    core_1.Component({
	        selector: 'js_autoComplete',
	        template: "\n    <div class=\"auto-complete\">\n        <div class=\"input-group\">\n            <span class=\"control\">\n                <input class=\"form-control\"\n                       (click)=\"onInputClick($event)\"\n                       (input)=\"onEnterKey($event)\"\n                       [ngModel]=\"_label\"\n                       [class.error]=\"_formService.getErrors()[field] && (_formService.getErrors()[field].length > 0)\"\n                       type=\"text\"\n                       [placeholder]=\"placeholder\">\n                <a (click)=\"onControlClick($event)\"><i class=\"fa fa-angle-down\"></i></a>\n            </span>\n            <span class=\"input-group-btn\" *ngIf=\"_controlMode\">\n                <button (click)=\"triggerAction($event)\"\n                        class=\"btn btn-primary\"\n                        type=\"button\"><i class=\"fa\"\n                                         [class.fa-check]=\"_controlMode == 'save'\"\n                                         [class.fa-plus]=\"_controlMode == 'add'\"\n                                         [class.fa-pencil]=\"_controlMode == 'edit'\"></i></button>\n            </span>\n        </div>\n        <div class=\"choices\">\n            <ul [hidden]=\"_isHidden\"\n                (click)=\"onChoiceClick($event)\">\n                <template [ngIf]=\"selfReference\"><template ngFor let-choice [ngForOf]=\"_choices\" let-choiceIndex=\"index\">\n                    <li *ngIf=\"choice['id'] != _object['id']\"\n                        [attr.data-index]=\"choiceIndex\">{{choice['label']}}</li>\n                </template></template>\n                <template [ngIf]=\"!selfReference\">\n                    <li *ngFor=\"let choice of _choices; let choiceIndex = index\"\n                        [attr.data-index]=\"choiceIndex\">{{choice['label']}}</li>\n                </template>\n                <li *ngIf=\"_childCandidateSearch && _childCandidateSearch.hasMore\"\n                    (click)=\"getMoreObjects($event)\"\n                    class=\"-pagination\"\n                    title=\"Load more results...\"><span>...</span></li>\n            </ul>\n        </div>\n    </div>\n    ",
	        host: {
	            '(document:click)': 'onDocumentClick($event)',
	        }
	    }),
	    __param(2, core_1.Inject('DataService')),
	    __param(5, core_1.Inject('AutoCompleteProviders')),
	    __param(6, core_1.Inject('HelperService')),
	    __metadata("design:paramtypes", [post_service_1.PostService,
	        modal_service_1.ModalService, Object, form_service_1.FormService,
	        core_1.Injector, Object, Object])
	], FieldTypeAutoCompleteComponent);
	exports.FieldTypeAutoCompleteComponent = FieldTypeAutoCompleteComponent;


/***/ },
/* 70 */
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
	var form_service_1 = __webpack_require__(62);
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
	    return FieldTypePasswordComponent;
	}());
	__decorate([
	    core_1.Input(),
	    __metadata("design:type", String)
	], FieldTypePasswordComponent.prototype, "field", void 0);
	FieldTypePasswordComponent = __decorate([
	    core_1.Component({
	        selector: 'js_password',
	        template: "\n    <input (blur)=\"resetAction($event)\"\n           class=\"form-control\"\n           [class.error]=\"_formService.getErrors()[field] && (_formService.getErrors()[field].length > 0)\"\n           type=\"password\"\n           placeholder=\"Password\"\n           [(ngModel)]=\"_fields.password\">\n    <input (keyup)=\"validateAction($event)\"\n           class=\"form-control m-t\"\n           [class.error]=\"_formService.getErrors()[field] && (_formService.getErrors()[field].length > 0)\"\n           type=\"password\"\n           placeholder=\"Confirm password\"\n           [(ngModel)]=\"_fields.confirm\">\n    "
	    }),
	    __metadata("design:paramtypes", [form_service_1.FormService])
	], FieldTypePasswordComponent);
	exports.FieldTypePasswordComponent = FieldTypePasswordComponent;


/***/ },
/* 71 */
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
	var form_service_1 = __webpack_require__(62);
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
	    return FieldTypeMultiCheckboxDirective;
	}());
	__decorate([
	    core_1.Input('multiCheckbox'),
	    __metadata("design:type", String)
	], FieldTypeMultiCheckboxDirective.prototype, "field", void 0);
	__decorate([
	    core_1.HostListener('click', ['$event']),
	    __metadata("design:type", Function),
	    __metadata("design:paramtypes", [Object]),
	    __metadata("design:returntype", void 0)
	], FieldTypeMultiCheckboxDirective.prototype, "onMouseClick", null);
	FieldTypeMultiCheckboxDirective = __decorate([
	    core_1.Directive({
	        selector: '[multiCheckbox]'
	    }),
	    __metadata("design:paramtypes", [core_1.ElementRef,
	        form_service_1.FormService])
	], FieldTypeMultiCheckboxDirective);
	exports.FieldTypeMultiCheckboxDirective = FieldTypeMultiCheckboxDirective;


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
	var __metadata = (this && this.__metadata) || function (k, v) {
	    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
	};
	var __param = (this && this.__param) || function (paramIndex, decorator) {
	    return function (target, key) { decorator(target, key, paramIndex); }
	};
	var core_1 = __webpack_require__(3);
	var form_service_1 = __webpack_require__(62);
	/**
	 * Handles with html select box
	 */
	var FieldTypeHtmlSelectDirective = (function () {
	    function FieldTypeHtmlSelectDirective(_elementRef, _formService, _dataService) {
	        var _this = this;
	        this._elementRef = _elementRef;
	        this._formService = _formService;
	        this._dataService = _dataService;
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
	    return FieldTypeHtmlSelectDirective;
	}());
	__decorate([
	    core_1.Input('htmlSelect'),
	    __metadata("design:type", String)
	], FieldTypeHtmlSelectDirective.prototype, "field", void 0);
	__decorate([
	    core_1.HostListener('click', ['$event']),
	    __metadata("design:type", Function),
	    __metadata("design:paramtypes", [Object]),
	    __metadata("design:returntype", void 0)
	], FieldTypeHtmlSelectDirective.prototype, "onMouseClick", null);
	FieldTypeHtmlSelectDirective = __decorate([
	    core_1.Directive({
	        selector: '[htmlSelect]',
	        host: {
	            '(document:click)': 'onDocumentClick($event)',
	        }
	    }),
	    __param(2, core_1.Inject('DataService')),
	    __metadata("design:paramtypes", [core_1.ElementRef,
	        form_service_1.FormService, Object])
	], FieldTypeHtmlSelectDirective);
	exports.FieldTypeHtmlSelectDirective = FieldTypeHtmlSelectDirective;


/***/ },
/* 73 */
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
	var form_service_1 = __webpack_require__(62);
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
	    return FieldTypeDatePickerDirective;
	}());
	__decorate([
	    core_1.Input('datePicker'),
	    __metadata("design:type", String)
	], FieldTypeDatePickerDirective.prototype, "field", void 0);
	__decorate([
	    core_1.Input('control'),
	    __metadata("design:type", Object)
	], FieldTypeDatePickerDirective.prototype, "control", void 0);
	FieldTypeDatePickerDirective = __decorate([
	    core_1.Directive({
	        selector: '[datePicker]',
	        host: {
	            '(document:click)': 'onDocumentClick($event)',
	        }
	    }),
	    __param(2, core_1.Inject('DataService')),
	    __metadata("design:paramtypes", [core_1.ElementRef,
	        form_service_1.FormService, Object])
	], FieldTypeDatePickerDirective);
	exports.FieldTypeDatePickerDirective = FieldTypeDatePickerDirective;


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
	var helper_1 = __webpack_require__(52);
	var form_service_1 = __webpack_require__(62);
	var form_popup_extension_component_1 = __webpack_require__(75);
	var FormPopupComponent = (function (_super) {
	    __extends(FormPopupComponent, _super);
	    function FormPopupComponent(elementRef, renderer, provider, formService, dataService) {
	        var _this = _super.call(this) || this;
	        _super.prototype.initFormPopupExtensionComponent.call(_this, elementRef, renderer, provider, formService, dataService);
	        return _this;
	    }
	    return FormPopupComponent;
	}(form_popup_extension_component_1.FormPopupExtensionComponent));
	FormPopupComponent = __decorate([
	    core_1.Component({
	        selector: '.js_formPopup',
	        templateUrl: helper_1.Helper.getRuntimeVar('templateUrl')
	    }),
	    __param(2, core_1.Inject('Provider')),
	    __param(4, core_1.Inject('DataService')),
	    __metadata("design:paramtypes", [core_1.ElementRef,
	        core_1.Renderer, Object, form_service_1.FormService, Object])
	], FormPopupComponent);
	exports.FormPopupComponent = FormPopupComponent;


/***/ },
/* 75 */
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
	var form_extension_component_1 = __webpack_require__(76);
	var FormPopupExtensionComponent = (function (_super) {
	    __extends(FormPopupExtensionComponent, _super);
	    function FormPopupExtensionComponent() {
	        var _this = _super.call(this) || this;
	        // Modal parameters
	        _this.onDismissEmitter = new core_1.EventEmitter();
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
	    return FormPopupExtensionComponent;
	}(form_extension_component_1.FormExtensionComponent));
	FormPopupExtensionComponent = __decorate([
	    core_1.Component({
	        selector: '.js_formPopup',
	        template: ''
	    }),
	    __metadata("design:paramtypes", [])
	], FormPopupExtensionComponent);
	exports.FormPopupExtensionComponent = FormPopupExtensionComponent;


/***/ },
/* 76 */
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
	var base_extension_component_1 = __webpack_require__(59);
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