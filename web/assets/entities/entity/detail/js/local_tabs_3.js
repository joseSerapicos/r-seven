webpackJsonp([1],[
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var platform_browser_dynamic_1 = __webpack_require__(1);
	var forms_1 = __webpack_require__(333);
	var core_1 = __webpack_require__(5);
	var post_service_1 = __webpack_require__(370);
	var modal_service_1 = __webpack_require__(371);
	var flash_message_service_1 = __webpack_require__(328);
	var data_box_service_1 = __webpack_require__(386);
	var helper_1 = __webpack_require__(387);
	var tabs_component_1 = __webpack_require__(392);
	var treeViewProvider = {
	    iconProperty: null,
	    iconDefault: 'fa-users',
	    iconMap: null
	};
	// Bootstrap
	platform_browser_dynamic_1.bootstrap(tabs_component_1.TabsComponent, [
	    forms_1.disableDeprecatedForms(), forms_1.provideForms(),
	    post_service_1.PostService,
	    modal_service_1.ModalService,
	    flash_message_service_1.FlashMessageService,
	    data_box_service_1.DataBoxService,
	    core_1.provide('HelperService', { useValue: helper_1.Helper }),
	    core_1.provide('DataBoxProvider', { useValue: helper_1.Helper.getDataBoxProvider(_app.local) }),
	    core_1.provide('DataBoxActions', { useValue: null }),
	    core_1.provide('FileUploadProvider', { useValue: null }),
	    core_1.provide('Popup', { useValue: null }),
	    core_1.provide('VideoUploadProvider', { useValue: null }),
	    core_1.provide('TreeViewProvider', { useValue: treeViewProvider })
	]);


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
/* 29 */,
/* 30 */,
/* 31 */,
/* 32 */,
/* 33 */,
/* 34 */,
/* 35 */,
/* 36 */,
/* 37 */,
/* 38 */,
/* 39 */,
/* 40 */,
/* 41 */,
/* 42 */,
/* 43 */,
/* 44 */,
/* 45 */,
/* 46 */,
/* 47 */,
/* 48 */,
/* 49 */,
/* 50 */,
/* 51 */,
/* 52 */,
/* 53 */,
/* 54 */,
/* 55 */,
/* 56 */,
/* 57 */,
/* 58 */,
/* 59 */,
/* 60 */,
/* 61 */,
/* 62 */,
/* 63 */,
/* 64 */,
/* 65 */,
/* 66 */,
/* 67 */,
/* 68 */,
/* 69 */,
/* 70 */,
/* 71 */,
/* 72 */,
/* 73 */,
/* 74 */,
/* 75 */,
/* 76 */,
/* 77 */,
/* 78 */,
/* 79 */,
/* 80 */,
/* 81 */,
/* 82 */,
/* 83 */,
/* 84 */,
/* 85 */,
/* 86 */,
/* 87 */,
/* 88 */,
/* 89 */,
/* 90 */,
/* 91 */,
/* 92 */,
/* 93 */,
/* 94 */,
/* 95 */,
/* 96 */,
/* 97 */,
/* 98 */,
/* 99 */,
/* 100 */,
/* 101 */,
/* 102 */,
/* 103 */,
/* 104 */,
/* 105 */,
/* 106 */,
/* 107 */,
/* 108 */,
/* 109 */,
/* 110 */,
/* 111 */,
/* 112 */,
/* 113 */,
/* 114 */,
/* 115 */,
/* 116 */,
/* 117 */,
/* 118 */,
/* 119 */,
/* 120 */,
/* 121 */,
/* 122 */,
/* 123 */,
/* 124 */,
/* 125 */,
/* 126 */,
/* 127 */,
/* 128 */,
/* 129 */,
/* 130 */,
/* 131 */,
/* 132 */,
/* 133 */,
/* 134 */,
/* 135 */,
/* 136 */,
/* 137 */,
/* 138 */,
/* 139 */,
/* 140 */,
/* 141 */,
/* 142 */,
/* 143 */,
/* 144 */,
/* 145 */,
/* 146 */,
/* 147 */,
/* 148 */,
/* 149 */,
/* 150 */,
/* 151 */,
/* 152 */,
/* 153 */,
/* 154 */,
/* 155 */,
/* 156 */,
/* 157 */,
/* 158 */,
/* 159 */,
/* 160 */,
/* 161 */,
/* 162 */,
/* 163 */,
/* 164 */,
/* 165 */,
/* 166 */,
/* 167 */,
/* 168 */,
/* 169 */,
/* 170 */,
/* 171 */,
/* 172 */,
/* 173 */,
/* 174 */,
/* 175 */,
/* 176 */,
/* 177 */,
/* 178 */,
/* 179 */,
/* 180 */,
/* 181 */,
/* 182 */,
/* 183 */,
/* 184 */,
/* 185 */,
/* 186 */,
/* 187 */,
/* 188 */,
/* 189 */,
/* 190 */,
/* 191 */,
/* 192 */,
/* 193 */,
/* 194 */,
/* 195 */,
/* 196 */,
/* 197 */,
/* 198 */,
/* 199 */,
/* 200 */,
/* 201 */,
/* 202 */,
/* 203 */,
/* 204 */,
/* 205 */,
/* 206 */,
/* 207 */,
/* 208 */,
/* 209 */,
/* 210 */,
/* 211 */,
/* 212 */,
/* 213 */,
/* 214 */,
/* 215 */,
/* 216 */,
/* 217 */,
/* 218 */,
/* 219 */,
/* 220 */,
/* 221 */,
/* 222 */,
/* 223 */,
/* 224 */,
/* 225 */,
/* 226 */,
/* 227 */,
/* 228 */,
/* 229 */,
/* 230 */,
/* 231 */,
/* 232 */,
/* 233 */,
/* 234 */,
/* 235 */,
/* 236 */,
/* 237 */,
/* 238 */,
/* 239 */,
/* 240 */,
/* 241 */,
/* 242 */,
/* 243 */,
/* 244 */,
/* 245 */,
/* 246 */,
/* 247 */,
/* 248 */,
/* 249 */,
/* 250 */,
/* 251 */,
/* 252 */,
/* 253 */,
/* 254 */,
/* 255 */,
/* 256 */,
/* 257 */,
/* 258 */,
/* 259 */,
/* 260 */,
/* 261 */,
/* 262 */,
/* 263 */,
/* 264 */,
/* 265 */,
/* 266 */,
/* 267 */,
/* 268 */,
/* 269 */,
/* 270 */,
/* 271 */,
/* 272 */,
/* 273 */,
/* 274 */,
/* 275 */,
/* 276 */,
/* 277 */,
/* 278 */,
/* 279 */,
/* 280 */,
/* 281 */,
/* 282 */,
/* 283 */,
/* 284 */,
/* 285 */,
/* 286 */,
/* 287 */,
/* 288 */,
/* 289 */,
/* 290 */,
/* 291 */,
/* 292 */,
/* 293 */,
/* 294 */,
/* 295 */,
/* 296 */,
/* 297 */,
/* 298 */,
/* 299 */,
/* 300 */,
/* 301 */,
/* 302 */,
/* 303 */,
/* 304 */,
/* 305 */,
/* 306 */,
/* 307 */,
/* 308 */,
/* 309 */,
/* 310 */,
/* 311 */,
/* 312 */,
/* 313 */,
/* 314 */,
/* 315 */,
/* 316 */,
/* 317 */,
/* 318 */,
/* 319 */,
/* 320 */,
/* 321 */,
/* 322 */,
/* 323 */,
/* 324 */,
/* 325 */,
/* 326 */,
/* 327 */,
/* 328 */,
/* 329 */,
/* 330 */,
/* 331 */,
/* 332 */,
/* 333 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * @license
	 * Copyright Google Inc. All Rights Reserved.
	 *
	 * Use of this source code is governed by an MIT-style license that can be
	 * found in the LICENSE file at https://angular.io/license
	 */
	"use strict";
	function __export(m) {
	    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
	}
	__export(__webpack_require__(334));
	//# sourceMappingURL=index.js.map

/***/ },
/* 334 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * @license
	 * Copyright Google Inc. All Rights Reserved.
	 *
	 * Use of this source code is governed by an MIT-style license that can be
	 * found in the LICENSE file at https://angular.io/license
	 */
	"use strict";
	function __export(m) {
	    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
	}
	/**
	 * @module
	 * @description
	 * This module is used for handling user input, by defining and building a {@link FormGroup} that
	 * consists of
	 * {@link FormControl} objects, and mapping them onto the DOM. {@link FormControl} objects can then
	 * be used
	 * to read information
	 * from the form DOM elements.
	 *
	 * Forms providers are not included in default providers; you must import these providers
	 * explicitly.
	 */
	var directives_1 = __webpack_require__(335);
	exports.FORM_DIRECTIVES = directives_1.FORM_DIRECTIVES;
	exports.REACTIVE_FORM_DIRECTIVES = directives_1.REACTIVE_FORM_DIRECTIVES;
	var abstract_control_directive_1 = __webpack_require__(346);
	exports.AbstractControlDirective = abstract_control_directive_1.AbstractControlDirective;
	var checkbox_value_accessor_1 = __webpack_require__(336);
	exports.CheckboxControlValueAccessor = checkbox_value_accessor_1.CheckboxControlValueAccessor;
	var control_container_1 = __webpack_require__(358);
	exports.ControlContainer = control_container_1.ControlContainer;
	var control_value_accessor_1 = __webpack_require__(337);
	exports.NG_VALUE_ACCESSOR = control_value_accessor_1.NG_VALUE_ACCESSOR;
	var default_value_accessor_1 = __webpack_require__(338);
	exports.DefaultValueAccessor = default_value_accessor_1.DefaultValueAccessor;
	var ng_control_1 = __webpack_require__(341);
	exports.NgControl = ng_control_1.NgControl;
	var ng_control_status_1 = __webpack_require__(340);
	exports.NgControlStatus = ng_control_status_1.NgControlStatus;
	var ng_form_1 = __webpack_require__(347);
	exports.NgForm = ng_form_1.NgForm;
	var ng_model_1 = __webpack_require__(359);
	exports.NgModel = ng_model_1.NgModel;
	var ng_model_group_1 = __webpack_require__(360);
	exports.NgModelGroup = ng_model_group_1.NgModelGroup;
	var form_array_name_1 = __webpack_require__(362);
	exports.FormArrayName = form_array_name_1.FormArrayName;
	var form_control_directive_1 = __webpack_require__(363);
	exports.FormControlDirective = form_control_directive_1.FormControlDirective;
	var form_control_name_1 = __webpack_require__(364);
	exports.FormControlName = form_control_name_1.FormControlName;
	var form_group_directive_1 = __webpack_require__(365);
	exports.FormGroupDirective = form_group_directive_1.FormGroupDirective;
	var form_group_name_1 = __webpack_require__(366);
	exports.FormGroupName = form_group_name_1.FormGroupName;
	var select_control_value_accessor_1 = __webpack_require__(356);
	exports.NgSelectOption = select_control_value_accessor_1.NgSelectOption;
	exports.SelectControlValueAccessor = select_control_value_accessor_1.SelectControlValueAccessor;
	var validators_1 = __webpack_require__(367);
	exports.MaxLengthValidator = validators_1.MaxLengthValidator;
	exports.MinLengthValidator = validators_1.MinLengthValidator;
	exports.PatternValidator = validators_1.PatternValidator;
	exports.RequiredValidator = validators_1.RequiredValidator;
	var form_builder_1 = __webpack_require__(368);
	exports.FormBuilder = form_builder_1.FormBuilder;
	var model_1 = __webpack_require__(350);
	exports.AbstractControl = model_1.AbstractControl;
	exports.FormArray = model_1.FormArray;
	exports.FormControl = model_1.FormControl;
	exports.FormGroup = model_1.FormGroup;
	var validators_2 = __webpack_require__(352);
	exports.NG_ASYNC_VALIDATORS = validators_2.NG_ASYNC_VALIDATORS;
	exports.NG_VALIDATORS = validators_2.NG_VALIDATORS;
	exports.Validators = validators_2.Validators;
	__export(__webpack_require__(369));
	//# sourceMappingURL=forms.js.map

/***/ },
/* 335 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * @license
	 * Copyright Google Inc. All Rights Reserved.
	 *
	 * Use of this source code is governed by an MIT-style license that can be
	 * found in the LICENSE file at https://angular.io/license
	 */
	"use strict";
	var checkbox_value_accessor_1 = __webpack_require__(336);
	var default_value_accessor_1 = __webpack_require__(338);
	var ng_control_status_1 = __webpack_require__(340);
	var ng_form_1 = __webpack_require__(347);
	var ng_model_1 = __webpack_require__(359);
	var ng_model_group_1 = __webpack_require__(360);
	var number_value_accessor_1 = __webpack_require__(354);
	var radio_control_value_accessor_1 = __webpack_require__(355);
	var form_array_name_1 = __webpack_require__(362);
	var form_control_directive_1 = __webpack_require__(363);
	var form_control_name_1 = __webpack_require__(364);
	var form_group_directive_1 = __webpack_require__(365);
	var form_group_name_1 = __webpack_require__(366);
	var select_control_value_accessor_1 = __webpack_require__(356);
	var select_multiple_control_value_accessor_1 = __webpack_require__(357);
	var validators_1 = __webpack_require__(367);
	var checkbox_value_accessor_2 = __webpack_require__(336);
	exports.CheckboxControlValueAccessor = checkbox_value_accessor_2.CheckboxControlValueAccessor;
	var default_value_accessor_2 = __webpack_require__(338);
	exports.DefaultValueAccessor = default_value_accessor_2.DefaultValueAccessor;
	var ng_control_1 = __webpack_require__(341);
	exports.NgControl = ng_control_1.NgControl;
	var ng_control_status_2 = __webpack_require__(340);
	exports.NgControlStatus = ng_control_status_2.NgControlStatus;
	var ng_form_2 = __webpack_require__(347);
	exports.NgForm = ng_form_2.NgForm;
	var ng_model_2 = __webpack_require__(359);
	exports.NgModel = ng_model_2.NgModel;
	var ng_model_group_2 = __webpack_require__(360);
	exports.NgModelGroup = ng_model_group_2.NgModelGroup;
	var number_value_accessor_2 = __webpack_require__(354);
	exports.NumberValueAccessor = number_value_accessor_2.NumberValueAccessor;
	var radio_control_value_accessor_2 = __webpack_require__(355);
	exports.RadioControlValueAccessor = radio_control_value_accessor_2.RadioControlValueAccessor;
	var form_array_name_2 = __webpack_require__(362);
	exports.FormArrayName = form_array_name_2.FormArrayName;
	var form_control_directive_2 = __webpack_require__(363);
	exports.FormControlDirective = form_control_directive_2.FormControlDirective;
	var form_control_name_2 = __webpack_require__(364);
	exports.FormControlName = form_control_name_2.FormControlName;
	var form_group_directive_2 = __webpack_require__(365);
	exports.FormGroupDirective = form_group_directive_2.FormGroupDirective;
	var form_group_name_2 = __webpack_require__(366);
	exports.FormGroupName = form_group_name_2.FormGroupName;
	var select_control_value_accessor_2 = __webpack_require__(356);
	exports.NgSelectOption = select_control_value_accessor_2.NgSelectOption;
	exports.SelectControlValueAccessor = select_control_value_accessor_2.SelectControlValueAccessor;
	var select_multiple_control_value_accessor_2 = __webpack_require__(357);
	exports.NgSelectMultipleOption = select_multiple_control_value_accessor_2.NgSelectMultipleOption;
	exports.SelectMultipleControlValueAccessor = select_multiple_control_value_accessor_2.SelectMultipleControlValueAccessor;
	var validators_2 = __webpack_require__(367);
	exports.MaxLengthValidator = validators_2.MaxLengthValidator;
	exports.MinLengthValidator = validators_2.MinLengthValidator;
	exports.PatternValidator = validators_2.PatternValidator;
	exports.RequiredValidator = validators_2.RequiredValidator;
	/**
	 *
	 * A list of all the form directives used as part of a `@Component` annotation.
	 *
	 *  This is a shorthand for importing them each individually.
	 *
	 * ### Example
	 *
	 * ```typescript
	 * @Component({
	 *   selector: 'my-app',
	 *   directives: [FORM_DIRECTIVES]
	 * })
	 * class MyApp {}
	 * ```
	 * @experimental
	 */
	exports.FORM_DIRECTIVES = [
	    ng_model_1.NgModel, ng_model_group_1.NgModelGroup, ng_form_1.NgForm,
	    select_control_value_accessor_1.NgSelectOption, select_multiple_control_value_accessor_1.NgSelectMultipleOption, default_value_accessor_1.DefaultValueAccessor, number_value_accessor_1.NumberValueAccessor,
	    checkbox_value_accessor_1.CheckboxControlValueAccessor, select_control_value_accessor_1.SelectControlValueAccessor, select_multiple_control_value_accessor_1.SelectMultipleControlValueAccessor,
	    radio_control_value_accessor_1.RadioControlValueAccessor, ng_control_status_1.NgControlStatus,
	    validators_1.RequiredValidator, validators_1.MinLengthValidator, validators_1.MaxLengthValidator, validators_1.PatternValidator
	];
	/**
	 * @experimental
	 */
	exports.REACTIVE_FORM_DIRECTIVES = 
	/*@ts2dart_const*/ [
	    form_control_directive_1.FormControlDirective, form_group_directive_1.FormGroupDirective, form_control_name_1.FormControlName, form_group_name_1.FormGroupName, form_array_name_1.FormArrayName
	];
	//# sourceMappingURL=directives.js.map

/***/ },
/* 336 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * @license
	 * Copyright Google Inc. All Rights Reserved.
	 *
	 * Use of this source code is governed by an MIT-style license that can be
	 * found in the LICENSE file at https://angular.io/license
	 */
	"use strict";
	var core_1 = __webpack_require__(5);
	var control_value_accessor_1 = __webpack_require__(337);
	exports.CHECKBOX_VALUE_ACCESSOR = {
	    provide: control_value_accessor_1.NG_VALUE_ACCESSOR,
	    useExisting: core_1.forwardRef(function () { return CheckboxControlValueAccessor; }),
	    multi: true
	};
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
	    /** @nocollapse */
	    CheckboxControlValueAccessor.decorators = [
	        { type: core_1.Directive, args: [{
	                    selector: 'input[type=checkbox][formControlName],input[type=checkbox][formControl],input[type=checkbox][ngModel]',
	                    host: { '(change)': 'onChange($event.target.checked)', '(blur)': 'onTouched()' },
	                    providers: [exports.CHECKBOX_VALUE_ACCESSOR]
	                },] },
	    ];
	    /** @nocollapse */
	    CheckboxControlValueAccessor.ctorParameters = [
	        { type: core_1.Renderer, },
	        { type: core_1.ElementRef, },
	    ];
	    return CheckboxControlValueAccessor;
	}());
	exports.CheckboxControlValueAccessor = CheckboxControlValueAccessor;
	//# sourceMappingURL=checkbox_value_accessor.js.map

/***/ },
/* 337 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * @license
	 * Copyright Google Inc. All Rights Reserved.
	 *
	 * Use of this source code is governed by an MIT-style license that can be
	 * found in the LICENSE file at https://angular.io/license
	 */
	"use strict";
	var core_1 = __webpack_require__(5);
	/**
	 * Used to provide a {@link ControlValueAccessor} for form controls.
	 *
	 * See {@link DefaultValueAccessor} for how to implement one.
	 * @experimental
	 */
	exports.NG_VALUE_ACCESSOR = 
	/*@ts2dart_const*/ new core_1.OpaqueToken('NgValueAccessor');
	//# sourceMappingURL=control_value_accessor.js.map

/***/ },
/* 338 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * @license
	 * Copyright Google Inc. All Rights Reserved.
	 *
	 * Use of this source code is governed by an MIT-style license that can be
	 * found in the LICENSE file at https://angular.io/license
	 */
	"use strict";
	var core_1 = __webpack_require__(5);
	var lang_1 = __webpack_require__(339);
	var control_value_accessor_1 = __webpack_require__(337);
	exports.DEFAULT_VALUE_ACCESSOR = 
	/* @ts2dart_Provider */ {
	    provide: control_value_accessor_1.NG_VALUE_ACCESSOR,
	    useExisting: core_1.forwardRef(function () { return DefaultValueAccessor; }),
	    multi: true
	};
	var DefaultValueAccessor = (function () {
	    function DefaultValueAccessor(_renderer, _elementRef) {
	        this._renderer = _renderer;
	        this._elementRef = _elementRef;
	        this.onChange = function (_) { };
	        this.onTouched = function () { };
	    }
	    DefaultValueAccessor.prototype.writeValue = function (value) {
	        var normalizedValue = lang_1.isBlank(value) ? '' : value;
	        this._renderer.setElementProperty(this._elementRef.nativeElement, 'value', normalizedValue);
	    };
	    DefaultValueAccessor.prototype.registerOnChange = function (fn) { this.onChange = fn; };
	    DefaultValueAccessor.prototype.registerOnTouched = function (fn) { this.onTouched = fn; };
	    /** @nocollapse */
	    DefaultValueAccessor.decorators = [
	        { type: core_1.Directive, args: [{
	                    selector: 'input:not([type=checkbox])[formControlName],textarea[formControlName],input:not([type=checkbox])[formControl],textarea[formControl],input:not([type=checkbox])[ngModel],textarea[ngModel],[ngDefaultControl]',
	                    // TODO: vsavkin replace the above selector with the one below it once
	                    // https://github.com/angular/angular/issues/3011 is implemented
	                    // selector: '[ngControl],[ngModel],[ngFormControl]',
	                    host: { '(input)': 'onChange($event.target.value)', '(blur)': 'onTouched()' },
	                    providers: [exports.DEFAULT_VALUE_ACCESSOR]
	                },] },
	    ];
	    /** @nocollapse */
	    DefaultValueAccessor.ctorParameters = [
	        { type: core_1.Renderer, },
	        { type: core_1.ElementRef, },
	    ];
	    return DefaultValueAccessor;
	}());
	exports.DefaultValueAccessor = DefaultValueAccessor;
	//# sourceMappingURL=default_value_accessor.js.map

/***/ },
/* 339 */
/***/ function(module, exports) {

	/* WEBPACK VAR INJECTION */(function(global) {/**
	 * @license
	 * Copyright Google Inc. All Rights Reserved.
	 *
	 * Use of this source code is governed by an MIT-style license that can be
	 * found in the LICENSE file at https://angular.io/license
	 */
	"use strict";
	var __extends = (this && this.__extends) || function (d, b) {
	    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	    function __() { this.constructor = d; }
	    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	};
	var globalScope;
	if (typeof window === 'undefined') {
	    if (typeof WorkerGlobalScope !== 'undefined' && self instanceof WorkerGlobalScope) {
	        // TODO: Replace any with WorkerGlobalScope from lib.webworker.d.ts #3492
	        globalScope = self;
	    }
	    else {
	        globalScope = global;
	    }
	}
	else {
	    globalScope = window;
	}
	function scheduleMicroTask(fn) {
	    Zone.current.scheduleMicroTask('scheduleMicrotask', fn);
	}
	exports.scheduleMicroTask = scheduleMicroTask;
	exports.IS_DART = false;
	// Need to declare a new variable for global here since TypeScript
	// exports the original value of the symbol.
	var _global = globalScope;
	exports.global = _global;
	/**
	 * Runtime representation a type that a Component or other object is instances of.
	 *
	 * An example of a `Type` is `MyCustomComponent` class, which in JavaScript is be represented by
	 * the `MyCustomComponent` constructor function.
	 *
	 * @stable
	 */
	exports.Type = Function;
	function getTypeNameForDebugging(type) {
	    if (type['name']) {
	        return type['name'];
	    }
	    return typeof type;
	}
	exports.getTypeNameForDebugging = getTypeNameForDebugging;
	exports.Math = _global.Math;
	exports.Date = _global.Date;
	// TODO: remove calls to assert in production environment
	// Note: Can't just export this and import in in other files
	// as `assert` is a reserved keyword in Dart
	_global.assert = function assert(condition) {
	    // TODO: to be fixed properly via #2830, noop for now
	};
	function isPresent(obj) {
	    return obj !== undefined && obj !== null;
	}
	exports.isPresent = isPresent;
	function isBlank(obj) {
	    return obj === undefined || obj === null;
	}
	exports.isBlank = isBlank;
	function isBoolean(obj) {
	    return typeof obj === 'boolean';
	}
	exports.isBoolean = isBoolean;
	function isNumber(obj) {
	    return typeof obj === 'number';
	}
	exports.isNumber = isNumber;
	function isString(obj) {
	    return typeof obj === 'string';
	}
	exports.isString = isString;
	function isFunction(obj) {
	    return typeof obj === 'function';
	}
	exports.isFunction = isFunction;
	function isType(obj) {
	    return isFunction(obj);
	}
	exports.isType = isType;
	function isStringMap(obj) {
	    return typeof obj === 'object' && obj !== null;
	}
	exports.isStringMap = isStringMap;
	var STRING_MAP_PROTO = Object.getPrototypeOf({});
	function isStrictStringMap(obj) {
	    return isStringMap(obj) && Object.getPrototypeOf(obj) === STRING_MAP_PROTO;
	}
	exports.isStrictStringMap = isStrictStringMap;
	function isPromise(obj) {
	    return obj instanceof _global.Promise;
	}
	exports.isPromise = isPromise;
	function isArray(obj) {
	    return Array.isArray(obj);
	}
	exports.isArray = isArray;
	function isDate(obj) {
	    return obj instanceof exports.Date && !isNaN(obj.valueOf());
	}
	exports.isDate = isDate;
	function noop() { }
	exports.noop = noop;
	function stringify(token) {
	    if (typeof token === 'string') {
	        return token;
	    }
	    if (token === undefined || token === null) {
	        return '' + token;
	    }
	    if (token.name) {
	        return token.name;
	    }
	    if (token.overriddenName) {
	        return token.overriddenName;
	    }
	    var res = token.toString();
	    var newLineIndex = res.indexOf('\n');
	    return (newLineIndex === -1) ? res : res.substring(0, newLineIndex);
	}
	exports.stringify = stringify;
	// serialize / deserialize enum exist only for consistency with dart API
	// enums in typescript don't need to be serialized
	function serializeEnum(val) {
	    return val;
	}
	exports.serializeEnum = serializeEnum;
	function deserializeEnum(val, values) {
	    return val;
	}
	exports.deserializeEnum = deserializeEnum;
	function resolveEnumToken(enumValue, val) {
	    return enumValue[val];
	}
	exports.resolveEnumToken = resolveEnumToken;
	var StringWrapper = (function () {
	    function StringWrapper() {
	    }
	    StringWrapper.fromCharCode = function (code) { return String.fromCharCode(code); };
	    StringWrapper.charCodeAt = function (s, index) { return s.charCodeAt(index); };
	    StringWrapper.split = function (s, regExp) { return s.split(regExp); };
	    StringWrapper.equals = function (s, s2) { return s === s2; };
	    StringWrapper.stripLeft = function (s, charVal) {
	        if (s && s.length) {
	            var pos = 0;
	            for (var i = 0; i < s.length; i++) {
	                if (s[i] != charVal)
	                    break;
	                pos++;
	            }
	            s = s.substring(pos);
	        }
	        return s;
	    };
	    StringWrapper.stripRight = function (s, charVal) {
	        if (s && s.length) {
	            var pos = s.length;
	            for (var i = s.length - 1; i >= 0; i--) {
	                if (s[i] != charVal)
	                    break;
	                pos--;
	            }
	            s = s.substring(0, pos);
	        }
	        return s;
	    };
	    StringWrapper.replace = function (s, from, replace) {
	        return s.replace(from, replace);
	    };
	    StringWrapper.replaceAll = function (s, from, replace) {
	        return s.replace(from, replace);
	    };
	    StringWrapper.slice = function (s, from, to) {
	        if (from === void 0) { from = 0; }
	        if (to === void 0) { to = null; }
	        return s.slice(from, to === null ? undefined : to);
	    };
	    StringWrapper.replaceAllMapped = function (s, from, cb) {
	        return s.replace(from, function () {
	            var matches = [];
	            for (var _i = 0; _i < arguments.length; _i++) {
	                matches[_i - 0] = arguments[_i];
	            }
	            // Remove offset & string from the result array
	            matches.splice(-2, 2);
	            // The callback receives match, p1, ..., pn
	            return cb(matches);
	        });
	    };
	    StringWrapper.contains = function (s, substr) { return s.indexOf(substr) != -1; };
	    StringWrapper.compare = function (a, b) {
	        if (a < b) {
	            return -1;
	        }
	        else if (a > b) {
	            return 1;
	        }
	        else {
	            return 0;
	        }
	    };
	    return StringWrapper;
	}());
	exports.StringWrapper = StringWrapper;
	var StringJoiner = (function () {
	    function StringJoiner(parts) {
	        if (parts === void 0) { parts = []; }
	        this.parts = parts;
	    }
	    StringJoiner.prototype.add = function (part) { this.parts.push(part); };
	    StringJoiner.prototype.toString = function () { return this.parts.join(''); };
	    return StringJoiner;
	}());
	exports.StringJoiner = StringJoiner;
	var NumberParseError = (function (_super) {
	    __extends(NumberParseError, _super);
	    function NumberParseError(message) {
	        _super.call(this);
	        this.message = message;
	    }
	    NumberParseError.prototype.toString = function () { return this.message; };
	    return NumberParseError;
	}(Error));
	exports.NumberParseError = NumberParseError;
	var NumberWrapper = (function () {
	    function NumberWrapper() {
	    }
	    NumberWrapper.toFixed = function (n, fractionDigits) { return n.toFixed(fractionDigits); };
	    NumberWrapper.equal = function (a, b) { return a === b; };
	    NumberWrapper.parseIntAutoRadix = function (text) {
	        var result = parseInt(text);
	        if (isNaN(result)) {
	            throw new NumberParseError('Invalid integer literal when parsing ' + text);
	        }
	        return result;
	    };
	    NumberWrapper.parseInt = function (text, radix) {
	        if (radix == 10) {
	            if (/^(\-|\+)?[0-9]+$/.test(text)) {
	                return parseInt(text, radix);
	            }
	        }
	        else if (radix == 16) {
	            if (/^(\-|\+)?[0-9ABCDEFabcdef]+$/.test(text)) {
	                return parseInt(text, radix);
	            }
	        }
	        else {
	            var result = parseInt(text, radix);
	            if (!isNaN(result)) {
	                return result;
	            }
	        }
	        throw new NumberParseError('Invalid integer literal when parsing ' + text + ' in base ' + radix);
	    };
	    // TODO: NaN is a valid literal but is returned by parseFloat to indicate an error.
	    NumberWrapper.parseFloat = function (text) { return parseFloat(text); };
	    Object.defineProperty(NumberWrapper, "NaN", {
	        get: function () { return NaN; },
	        enumerable: true,
	        configurable: true
	    });
	    NumberWrapper.isNumeric = function (value) { return !isNaN(value - parseFloat(value)); };
	    NumberWrapper.isNaN = function (value) { return isNaN(value); };
	    NumberWrapper.isInteger = function (value) { return Number.isInteger(value); };
	    return NumberWrapper;
	}());
	exports.NumberWrapper = NumberWrapper;
	exports.RegExp = _global.RegExp;
	var RegExpWrapper = (function () {
	    function RegExpWrapper() {
	    }
	    RegExpWrapper.create = function (regExpStr, flags) {
	        if (flags === void 0) { flags = ''; }
	        flags = flags.replace(/g/g, '');
	        return new _global.RegExp(regExpStr, flags + 'g');
	    };
	    RegExpWrapper.firstMatch = function (regExp, input) {
	        // Reset multimatch regex state
	        regExp.lastIndex = 0;
	        return regExp.exec(input);
	    };
	    RegExpWrapper.test = function (regExp, input) {
	        regExp.lastIndex = 0;
	        return regExp.test(input);
	    };
	    RegExpWrapper.matcher = function (regExp, input) {
	        // Reset regex state for the case
	        // someone did not loop over all matches
	        // last time.
	        regExp.lastIndex = 0;
	        return { re: regExp, input: input };
	    };
	    RegExpWrapper.replaceAll = function (regExp, input, replace) {
	        var c = regExp.exec(input);
	        var res = '';
	        regExp.lastIndex = 0;
	        var prev = 0;
	        while (c) {
	            res += input.substring(prev, c.index);
	            res += replace(c);
	            prev = c.index + c[0].length;
	            regExp.lastIndex = prev;
	            c = regExp.exec(input);
	        }
	        res += input.substring(prev);
	        return res;
	    };
	    return RegExpWrapper;
	}());
	exports.RegExpWrapper = RegExpWrapper;
	var RegExpMatcherWrapper = (function () {
	    function RegExpMatcherWrapper() {
	    }
	    RegExpMatcherWrapper.next = function (matcher) {
	        return matcher.re.exec(matcher.input);
	    };
	    return RegExpMatcherWrapper;
	}());
	exports.RegExpMatcherWrapper = RegExpMatcherWrapper;
	var FunctionWrapper = (function () {
	    function FunctionWrapper() {
	    }
	    FunctionWrapper.apply = function (fn, posArgs) { return fn.apply(null, posArgs); };
	    FunctionWrapper.bind = function (fn, scope) { return fn.bind(scope); };
	    return FunctionWrapper;
	}());
	exports.FunctionWrapper = FunctionWrapper;
	// JS has NaN !== NaN
	function looseIdentical(a, b) {
	    return a === b || typeof a === 'number' && typeof b === 'number' && isNaN(a) && isNaN(b);
	}
	exports.looseIdentical = looseIdentical;
	// JS considers NaN is the same as NaN for map Key (while NaN !== NaN otherwise)
	// see https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Map
	function getMapKey(value) {
	    return value;
	}
	exports.getMapKey = getMapKey;
	function normalizeBlank(obj) {
	    return isBlank(obj) ? null : obj;
	}
	exports.normalizeBlank = normalizeBlank;
	function normalizeBool(obj) {
	    return isBlank(obj) ? false : obj;
	}
	exports.normalizeBool = normalizeBool;
	function isJsObject(o) {
	    return o !== null && (typeof o === 'function' || typeof o === 'object');
	}
	exports.isJsObject = isJsObject;
	function print(obj) {
	    console.log(obj);
	}
	exports.print = print;
	function warn(obj) {
	    console.warn(obj);
	}
	exports.warn = warn;
	// Can't be all uppercase as our transpiler would think it is a special directive...
	var Json = (function () {
	    function Json() {
	    }
	    Json.parse = function (s) { return _global.JSON.parse(s); };
	    Json.stringify = function (data) {
	        // Dart doesn't take 3 arguments
	        return _global.JSON.stringify(data, null, 2);
	    };
	    return Json;
	}());
	exports.Json = Json;
	var DateWrapper = (function () {
	    function DateWrapper() {
	    }
	    DateWrapper.create = function (year, month, day, hour, minutes, seconds, milliseconds) {
	        if (month === void 0) { month = 1; }
	        if (day === void 0) { day = 1; }
	        if (hour === void 0) { hour = 0; }
	        if (minutes === void 0) { minutes = 0; }
	        if (seconds === void 0) { seconds = 0; }
	        if (milliseconds === void 0) { milliseconds = 0; }
	        return new exports.Date(year, month - 1, day, hour, minutes, seconds, milliseconds);
	    };
	    DateWrapper.fromISOString = function (str) { return new exports.Date(str); };
	    DateWrapper.fromMillis = function (ms) { return new exports.Date(ms); };
	    DateWrapper.toMillis = function (date) { return date.getTime(); };
	    DateWrapper.now = function () { return new exports.Date(); };
	    DateWrapper.toJson = function (date) { return date.toJSON(); };
	    return DateWrapper;
	}());
	exports.DateWrapper = DateWrapper;
	function setValueOnPath(global, path, value) {
	    var parts = path.split('.');
	    var obj = global;
	    while (parts.length > 1) {
	        var name = parts.shift();
	        if (obj.hasOwnProperty(name) && isPresent(obj[name])) {
	            obj = obj[name];
	        }
	        else {
	            obj = obj[name] = {};
	        }
	    }
	    if (obj === undefined || obj === null) {
	        obj = {};
	    }
	    obj[parts.shift()] = value;
	}
	exports.setValueOnPath = setValueOnPath;
	var _symbolIterator = null;
	function getSymbolIterator() {
	    if (isBlank(_symbolIterator)) {
	        if (isPresent(globalScope.Symbol) && isPresent(Symbol.iterator)) {
	            _symbolIterator = Symbol.iterator;
	        }
	        else {
	            // es6-shim specific logic
	            var keys = Object.getOwnPropertyNames(Map.prototype);
	            for (var i = 0; i < keys.length; ++i) {
	                var key = keys[i];
	                if (key !== 'entries' && key !== 'size' &&
	                    Map.prototype[key] === Map.prototype['entries']) {
	                    _symbolIterator = key;
	                }
	            }
	        }
	    }
	    return _symbolIterator;
	}
	exports.getSymbolIterator = getSymbolIterator;
	function evalExpression(sourceUrl, expr, declarations, vars) {
	    var fnBody = declarations + "\nreturn " + expr + "\n//# sourceURL=" + sourceUrl;
	    var fnArgNames = [];
	    var fnArgValues = [];
	    for (var argName in vars) {
	        fnArgNames.push(argName);
	        fnArgValues.push(vars[argName]);
	    }
	    return new (Function.bind.apply(Function, [void 0].concat(fnArgNames.concat(fnBody))))().apply(void 0, fnArgValues);
	}
	exports.evalExpression = evalExpression;
	function isPrimitive(obj) {
	    return !isJsObject(obj);
	}
	exports.isPrimitive = isPrimitive;
	function hasConstructor(value, type) {
	    return value.constructor === type;
	}
	exports.hasConstructor = hasConstructor;
	function escape(s) {
	    return _global.encodeURI(s);
	}
	exports.escape = escape;
	function escapeRegExp(s) {
	    return s.replace(/([.*+?^=!:${}()|[\]\/\\])/g, '\\$1');
	}
	exports.escapeRegExp = escapeRegExp;
	//# sourceMappingURL=lang.js.map
	/* WEBPACK VAR INJECTION */}.call(exports, (function() { return this; }())))

/***/ },
/* 340 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * @license
	 * Copyright Google Inc. All Rights Reserved.
	 *
	 * Use of this source code is governed by an MIT-style license that can be
	 * found in the LICENSE file at https://angular.io/license
	 */
	"use strict";
	var core_1 = __webpack_require__(5);
	var lang_1 = __webpack_require__(339);
	var ng_control_1 = __webpack_require__(341);
	var NgControlStatus = (function () {
	    function NgControlStatus(cd) {
	        this._cd = cd;
	    }
	    Object.defineProperty(NgControlStatus.prototype, "ngClassUntouched", {
	        get: function () {
	            return lang_1.isPresent(this._cd.control) ? this._cd.control.untouched : false;
	        },
	        enumerable: true,
	        configurable: true
	    });
	    Object.defineProperty(NgControlStatus.prototype, "ngClassTouched", {
	        get: function () {
	            return lang_1.isPresent(this._cd.control) ? this._cd.control.touched : false;
	        },
	        enumerable: true,
	        configurable: true
	    });
	    Object.defineProperty(NgControlStatus.prototype, "ngClassPristine", {
	        get: function () {
	            return lang_1.isPresent(this._cd.control) ? this._cd.control.pristine : false;
	        },
	        enumerable: true,
	        configurable: true
	    });
	    Object.defineProperty(NgControlStatus.prototype, "ngClassDirty", {
	        get: function () {
	            return lang_1.isPresent(this._cd.control) ? this._cd.control.dirty : false;
	        },
	        enumerable: true,
	        configurable: true
	    });
	    Object.defineProperty(NgControlStatus.prototype, "ngClassValid", {
	        get: function () {
	            return lang_1.isPresent(this._cd.control) ? this._cd.control.valid : false;
	        },
	        enumerable: true,
	        configurable: true
	    });
	    Object.defineProperty(NgControlStatus.prototype, "ngClassInvalid", {
	        get: function () {
	            return lang_1.isPresent(this._cd.control) ? !this._cd.control.valid : false;
	        },
	        enumerable: true,
	        configurable: true
	    });
	    /** @nocollapse */
	    NgControlStatus.decorators = [
	        { type: core_1.Directive, args: [{
	                    selector: '[formControlName],[ngModel],[formControl]',
	                    host: {
	                        '[class.ng-untouched]': 'ngClassUntouched',
	                        '[class.ng-touched]': 'ngClassTouched',
	                        '[class.ng-pristine]': 'ngClassPristine',
	                        '[class.ng-dirty]': 'ngClassDirty',
	                        '[class.ng-valid]': 'ngClassValid',
	                        '[class.ng-invalid]': 'ngClassInvalid'
	                    }
	                },] },
	    ];
	    /** @nocollapse */
	    NgControlStatus.ctorParameters = [
	        { type: ng_control_1.NgControl, decorators: [{ type: core_1.Self },] },
	    ];
	    return NgControlStatus;
	}());
	exports.NgControlStatus = NgControlStatus;
	//# sourceMappingURL=ng_control_status.js.map

/***/ },
/* 341 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * @license
	 * Copyright Google Inc. All Rights Reserved.
	 *
	 * Use of this source code is governed by an MIT-style license that can be
	 * found in the LICENSE file at https://angular.io/license
	 */
	"use strict";
	var __extends = (this && this.__extends) || function (d, b) {
	    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	    function __() { this.constructor = d; }
	    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	};
	var exceptions_1 = __webpack_require__(342);
	var abstract_control_directive_1 = __webpack_require__(346);
	/**
	 * A base class that all control directive extend.
	 * It binds a {@link Control} object to a DOM element.
	 *
	 * Used internally by Angular forms.
	 *
	 * @experimental
	 */
	var NgControl = (function (_super) {
	    __extends(NgControl, _super);
	    function NgControl() {
	        _super.apply(this, arguments);
	        this.name = null;
	        this.valueAccessor = null;
	    }
	    Object.defineProperty(NgControl.prototype, "validator", {
	        get: function () { return exceptions_1.unimplemented(); },
	        enumerable: true,
	        configurable: true
	    });
	    Object.defineProperty(NgControl.prototype, "asyncValidator", {
	        get: function () { return exceptions_1.unimplemented(); },
	        enumerable: true,
	        configurable: true
	    });
	    return NgControl;
	}(abstract_control_directive_1.AbstractControlDirective));
	exports.NgControl = NgControl;
	//# sourceMappingURL=ng_control.js.map

/***/ },
/* 342 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * @license
	 * Copyright Google Inc. All Rights Reserved.
	 *
	 * Use of this source code is governed by an MIT-style license that can be
	 * found in the LICENSE file at https://angular.io/license
	 */
	"use strict";
	var __extends = (this && this.__extends) || function (d, b) {
	    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	    function __() { this.constructor = d; }
	    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	};
	var base_wrapped_exception_1 = __webpack_require__(343);
	var exception_handler_1 = __webpack_require__(344);
	var exception_handler_2 = __webpack_require__(344);
	exports.ExceptionHandler = exception_handler_2.ExceptionHandler;
	/**
	 * @stable
	 */
	var BaseException = (function (_super) {
	    __extends(BaseException, _super);
	    function BaseException(message) {
	        if (message === void 0) { message = '--'; }
	        _super.call(this, message);
	        this.message = message;
	        this.stack = (new Error(message)).stack;
	    }
	    BaseException.prototype.toString = function () { return this.message; };
	    return BaseException;
	}(Error));
	exports.BaseException = BaseException;
	/**
	 * Wraps an exception and provides additional context or information.
	 * @stable
	 */
	var WrappedException = (function (_super) {
	    __extends(WrappedException, _super);
	    function WrappedException(_wrapperMessage, _originalException /** TODO #9100 */, _originalStack /** TODO #9100 */, _context /** TODO #9100 */) {
	        _super.call(this, _wrapperMessage);
	        this._wrapperMessage = _wrapperMessage;
	        this._originalException = _originalException;
	        this._originalStack = _originalStack;
	        this._context = _context;
	        this._wrapperStack = (new Error(_wrapperMessage)).stack;
	    }
	    Object.defineProperty(WrappedException.prototype, "wrapperMessage", {
	        get: function () { return this._wrapperMessage; },
	        enumerable: true,
	        configurable: true
	    });
	    Object.defineProperty(WrappedException.prototype, "wrapperStack", {
	        get: function () { return this._wrapperStack; },
	        enumerable: true,
	        configurable: true
	    });
	    Object.defineProperty(WrappedException.prototype, "originalException", {
	        get: function () { return this._originalException; },
	        enumerable: true,
	        configurable: true
	    });
	    Object.defineProperty(WrappedException.prototype, "originalStack", {
	        get: function () { return this._originalStack; },
	        enumerable: true,
	        configurable: true
	    });
	    Object.defineProperty(WrappedException.prototype, "context", {
	        get: function () { return this._context; },
	        enumerable: true,
	        configurable: true
	    });
	    Object.defineProperty(WrappedException.prototype, "message", {
	        get: function () { return exception_handler_1.ExceptionHandler.exceptionToString(this); },
	        enumerable: true,
	        configurable: true
	    });
	    WrappedException.prototype.toString = function () { return this.message; };
	    return WrappedException;
	}(base_wrapped_exception_1.BaseWrappedException));
	exports.WrappedException = WrappedException;
	function makeTypeError(message) {
	    return new TypeError(message);
	}
	exports.makeTypeError = makeTypeError;
	function unimplemented() {
	    throw new BaseException('unimplemented');
	}
	exports.unimplemented = unimplemented;
	//# sourceMappingURL=exceptions.js.map

/***/ },
/* 343 */
/***/ function(module, exports) {

	/**
	 * @license
	 * Copyright Google Inc. All Rights Reserved.
	 *
	 * Use of this source code is governed by an MIT-style license that can be
	 * found in the LICENSE file at https://angular.io/license
	 */
	"use strict";
	var __extends = (this && this.__extends) || function (d, b) {
	    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	    function __() { this.constructor = d; }
	    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	};
	/**
	 * A base class for the WrappedException that can be used to identify
	 * a WrappedException from ExceptionHandler without adding circular
	 * dependency.
	 */
	var BaseWrappedException = (function (_super) {
	    __extends(BaseWrappedException, _super);
	    function BaseWrappedException(message) {
	        _super.call(this, message);
	    }
	    Object.defineProperty(BaseWrappedException.prototype, "wrapperMessage", {
	        get: function () { return ''; },
	        enumerable: true,
	        configurable: true
	    });
	    Object.defineProperty(BaseWrappedException.prototype, "wrapperStack", {
	        get: function () { return null; },
	        enumerable: true,
	        configurable: true
	    });
	    Object.defineProperty(BaseWrappedException.prototype, "originalException", {
	        get: function () { return null; },
	        enumerable: true,
	        configurable: true
	    });
	    Object.defineProperty(BaseWrappedException.prototype, "originalStack", {
	        get: function () { return null; },
	        enumerable: true,
	        configurable: true
	    });
	    Object.defineProperty(BaseWrappedException.prototype, "context", {
	        get: function () { return null; },
	        enumerable: true,
	        configurable: true
	    });
	    Object.defineProperty(BaseWrappedException.prototype, "message", {
	        get: function () { return ''; },
	        enumerable: true,
	        configurable: true
	    });
	    return BaseWrappedException;
	}(Error));
	exports.BaseWrappedException = BaseWrappedException;
	//# sourceMappingURL=base_wrapped_exception.js.map

/***/ },
/* 344 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * @license
	 * Copyright Google Inc. All Rights Reserved.
	 *
	 * Use of this source code is governed by an MIT-style license that can be
	 * found in the LICENSE file at https://angular.io/license
	 */
	"use strict";
	var base_wrapped_exception_1 = __webpack_require__(343);
	var collection_1 = __webpack_require__(345);
	var lang_1 = __webpack_require__(339);
	var _ArrayLogger = (function () {
	    function _ArrayLogger() {
	        this.res = [];
	    }
	    _ArrayLogger.prototype.log = function (s) { this.res.push(s); };
	    _ArrayLogger.prototype.logError = function (s) { this.res.push(s); };
	    _ArrayLogger.prototype.logGroup = function (s) { this.res.push(s); };
	    _ArrayLogger.prototype.logGroupEnd = function () { };
	    ;
	    return _ArrayLogger;
	}());
	/**
	 * Provides a hook for centralized exception handling.
	 *
	 * The default implementation of `ExceptionHandler` prints error messages to the `Console`. To
	 * intercept error handling,
	 * write a custom exception handler that replaces this default as appropriate for your app.
	 *
	 * ### Example
	 *
	 * ```javascript
	 *
	 * class MyExceptionHandler implements ExceptionHandler {
	 *   call(error, stackTrace = null, reason = null) {
	 *     // do something with the exception
	 *   }
	 * }
	 *
	 * bootstrap(MyApp, {provide: ExceptionHandler, useClass: MyExceptionHandler}])
	 *
	 * ```
	 * @stable
	 */
	var ExceptionHandler = (function () {
	    function ExceptionHandler(_logger, _rethrowException) {
	        if (_rethrowException === void 0) { _rethrowException = true; }
	        this._logger = _logger;
	        this._rethrowException = _rethrowException;
	    }
	    ExceptionHandler.exceptionToString = function (exception, stackTrace, reason) {
	        if (stackTrace === void 0) { stackTrace = null; }
	        if (reason === void 0) { reason = null; }
	        var l = new _ArrayLogger();
	        var e = new ExceptionHandler(l, false);
	        e.call(exception, stackTrace, reason);
	        return l.res.join('\n');
	    };
	    ExceptionHandler.prototype.call = function (exception, stackTrace, reason) {
	        if (stackTrace === void 0) { stackTrace = null; }
	        if (reason === void 0) { reason = null; }
	        var originalException = this._findOriginalException(exception);
	        var originalStack = this._findOriginalStack(exception);
	        var context = this._findContext(exception);
	        this._logger.logGroup("EXCEPTION: " + this._extractMessage(exception));
	        if (lang_1.isPresent(stackTrace) && lang_1.isBlank(originalStack)) {
	            this._logger.logError('STACKTRACE:');
	            this._logger.logError(this._longStackTrace(stackTrace));
	        }
	        if (lang_1.isPresent(reason)) {
	            this._logger.logError("REASON: " + reason);
	        }
	        if (lang_1.isPresent(originalException)) {
	            this._logger.logError("ORIGINAL EXCEPTION: " + this._extractMessage(originalException));
	        }
	        if (lang_1.isPresent(originalStack)) {
	            this._logger.logError('ORIGINAL STACKTRACE:');
	            this._logger.logError(this._longStackTrace(originalStack));
	        }
	        if (lang_1.isPresent(context)) {
	            this._logger.logError('ERROR CONTEXT:');
	            this._logger.logError(context);
	        }
	        this._logger.logGroupEnd();
	        // We rethrow exceptions, so operations like 'bootstrap' will result in an error
	        // when an exception happens. If we do not rethrow, bootstrap will always succeed.
	        if (this._rethrowException)
	            throw exception;
	    };
	    /** @internal */
	    ExceptionHandler.prototype._extractMessage = function (exception) {
	        return exception instanceof base_wrapped_exception_1.BaseWrappedException ? exception.wrapperMessage :
	            exception.toString();
	    };
	    /** @internal */
	    ExceptionHandler.prototype._longStackTrace = function (stackTrace) {
	        return collection_1.isListLikeIterable(stackTrace) ? stackTrace.join('\n\n-----async gap-----\n') :
	            stackTrace.toString();
	    };
	    /** @internal */
	    ExceptionHandler.prototype._findContext = function (exception) {
	        try {
	            if (!(exception instanceof base_wrapped_exception_1.BaseWrappedException))
	                return null;
	            return lang_1.isPresent(exception.context) ? exception.context :
	                this._findContext(exception.originalException);
	        }
	        catch (e) {
	            // exception.context can throw an exception. if it happens, we ignore the context.
	            return null;
	        }
	    };
	    /** @internal */
	    ExceptionHandler.prototype._findOriginalException = function (exception) {
	        if (!(exception instanceof base_wrapped_exception_1.BaseWrappedException))
	            return null;
	        var e = exception.originalException;
	        while (e instanceof base_wrapped_exception_1.BaseWrappedException && lang_1.isPresent(e.originalException)) {
	            e = e.originalException;
	        }
	        return e;
	    };
	    /** @internal */
	    ExceptionHandler.prototype._findOriginalStack = function (exception) {
	        if (!(exception instanceof base_wrapped_exception_1.BaseWrappedException))
	            return null;
	        var e = exception;
	        var stack = exception.originalStack;
	        while (e instanceof base_wrapped_exception_1.BaseWrappedException && lang_1.isPresent(e.originalException)) {
	            e = e.originalException;
	            if (e instanceof base_wrapped_exception_1.BaseWrappedException && lang_1.isPresent(e.originalException)) {
	                stack = e.originalStack;
	            }
	        }
	        return stack;
	    };
	    return ExceptionHandler;
	}());
	exports.ExceptionHandler = ExceptionHandler;
	//# sourceMappingURL=exception_handler.js.map

/***/ },
/* 345 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * @license
	 * Copyright Google Inc. All Rights Reserved.
	 *
	 * Use of this source code is governed by an MIT-style license that can be
	 * found in the LICENSE file at https://angular.io/license
	 */
	"use strict";
	var lang_1 = __webpack_require__(339);
	exports.Map = lang_1.global.Map;
	exports.Set = lang_1.global.Set;
	// Safari and Internet Explorer do not support the iterable parameter to the
	// Map constructor.  We work around that by manually adding the items.
	var createMapFromPairs = (function () {
	    try {
	        if (new exports.Map([[1, 2]]).size === 1) {
	            return function createMapFromPairs(pairs) { return new exports.Map(pairs); };
	        }
	    }
	    catch (e) {
	    }
	    return function createMapAndPopulateFromPairs(pairs) {
	        var map = new exports.Map();
	        for (var i = 0; i < pairs.length; i++) {
	            var pair = pairs[i];
	            map.set(pair[0], pair[1]);
	        }
	        return map;
	    };
	})();
	var createMapFromMap = (function () {
	    try {
	        if (new exports.Map(new exports.Map())) {
	            return function createMapFromMap(m) { return new exports.Map(m); };
	        }
	    }
	    catch (e) {
	    }
	    return function createMapAndPopulateFromMap(m) {
	        var map = new exports.Map();
	        m.forEach(function (v, k) { map.set(k, v); });
	        return map;
	    };
	})();
	var _clearValues = (function () {
	    if ((new exports.Map()).keys().next) {
	        return function _clearValues(m) {
	            var keyIterator = m.keys();
	            var k;
	            while (!((k = keyIterator.next()).done)) {
	                m.set(k.value, null);
	            }
	        };
	    }
	    else {
	        return function _clearValuesWithForeEach(m) {
	            m.forEach(function (v, k) { m.set(k, null); });
	        };
	    }
	})();
	// Safari doesn't implement MapIterator.next(), which is used is Traceur's polyfill of Array.from
	// TODO(mlaval): remove the work around once we have a working polyfill of Array.from
	var _arrayFromMap = (function () {
	    try {
	        if ((new exports.Map()).values().next) {
	            return function createArrayFromMap(m, getValues) {
	                return getValues ? Array.from(m.values()) : Array.from(m.keys());
	            };
	        }
	    }
	    catch (e) {
	    }
	    return function createArrayFromMapWithForeach(m, getValues) {
	        var res = ListWrapper.createFixedSize(m.size), i = 0;
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
	    MapWrapper.clone = function (m) { return createMapFromMap(m); };
	    MapWrapper.createFromStringMap = function (stringMap) {
	        var result = new exports.Map();
	        for (var prop in stringMap) {
	            result.set(prop, stringMap[prop]);
	        }
	        return result;
	    };
	    MapWrapper.toStringMap = function (m) {
	        var r = {};
	        m.forEach(function (v, k) { return r[k] = v; });
	        return r;
	    };
	    MapWrapper.createFromPairs = function (pairs) { return createMapFromPairs(pairs); };
	    MapWrapper.clearValues = function (m) { _clearValues(m); };
	    MapWrapper.iterable = function (m) { return m; };
	    MapWrapper.keys = function (m) { return _arrayFromMap(m, false); };
	    MapWrapper.values = function (m) { return _arrayFromMap(m, true); };
	    return MapWrapper;
	}());
	exports.MapWrapper = MapWrapper;
	/**
	 * Wraps Javascript Objects
	 */
	var StringMapWrapper = (function () {
	    function StringMapWrapper() {
	    }
	    StringMapWrapper.create = function () {
	        // Note: We are not using Object.create(null) here due to
	        // performance!
	        // http://jsperf.com/ng2-object-create-null
	        return {};
	    };
	    StringMapWrapper.contains = function (map, key) {
	        return map.hasOwnProperty(key);
	    };
	    StringMapWrapper.get = function (map, key) {
	        return map.hasOwnProperty(key) ? map[key] : undefined;
	    };
	    StringMapWrapper.set = function (map, key, value) { map[key] = value; };
	    StringMapWrapper.keys = function (map) { return Object.keys(map); };
	    StringMapWrapper.values = function (map) {
	        return Object.keys(map).reduce(function (r, a) {
	            r.push(map[a]);
	            return r;
	        }, []);
	    };
	    StringMapWrapper.isEmpty = function (map) {
	        for (var prop in map) {
	            return false;
	        }
	        return true;
	    };
	    StringMapWrapper.delete = function (map, key) { delete map[key]; };
	    StringMapWrapper.forEach = function (map, callback) {
	        for (var prop in map) {
	            if (map.hasOwnProperty(prop)) {
	                callback(map[prop], prop);
	            }
	        }
	    };
	    StringMapWrapper.merge = function (m1, m2) {
	        var m = {};
	        for (var attr in m1) {
	            if (m1.hasOwnProperty(attr)) {
	                m[attr] = m1[attr];
	            }
	        }
	        for (var attr in m2) {
	            if (m2.hasOwnProperty(attr)) {
	                m[attr] = m2[attr];
	            }
	        }
	        return m;
	    };
	    StringMapWrapper.equals = function (m1, m2) {
	        var k1 = Object.keys(m1);
	        var k2 = Object.keys(m2);
	        if (k1.length != k2.length) {
	            return false;
	        }
	        var key;
	        for (var i = 0; i < k1.length; i++) {
	            key = k1[i];
	            if (m1[key] !== m2[key]) {
	                return false;
	            }
	        }
	        return true;
	    };
	    return StringMapWrapper;
	}());
	exports.StringMapWrapper = StringMapWrapper;
	var ListWrapper = (function () {
	    function ListWrapper() {
	    }
	    // JS has no way to express a statically fixed size list, but dart does so we
	    // keep both methods.
	    ListWrapper.createFixedSize = function (size) { return new Array(size); };
	    ListWrapper.createGrowableSize = function (size) { return new Array(size); };
	    ListWrapper.clone = function (array) { return array.slice(0); };
	    ListWrapper.forEachWithIndex = function (array, fn) {
	        for (var i = 0; i < array.length; i++) {
	            fn(array[i], i);
	        }
	    };
	    ListWrapper.first = function (array) {
	        if (!array)
	            return null;
	        return array[0];
	    };
	    ListWrapper.last = function (array) {
	        if (!array || array.length == 0)
	            return null;
	        return array[array.length - 1];
	    };
	    ListWrapper.indexOf = function (array, value, startIndex) {
	        if (startIndex === void 0) { startIndex = 0; }
	        return array.indexOf(value, startIndex);
	    };
	    ListWrapper.contains = function (list, el) { return list.indexOf(el) !== -1; };
	    ListWrapper.reversed = function (array) {
	        var a = ListWrapper.clone(array);
	        return a.reverse();
	    };
	    ListWrapper.concat = function (a, b) { return a.concat(b); };
	    ListWrapper.insert = function (list, index, value) { list.splice(index, 0, value); };
	    ListWrapper.removeAt = function (list, index) {
	        var res = list[index];
	        list.splice(index, 1);
	        return res;
	    };
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
	    ListWrapper.clear = function (list) { list.length = 0; };
	    ListWrapper.isEmpty = function (list) { return list.length == 0; };
	    ListWrapper.fill = function (list, value, start, end) {
	        if (start === void 0) { start = 0; }
	        if (end === void 0) { end = null; }
	        list.fill(value, start, end === null ? list.length : end);
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
	    ListWrapper.slice = function (l, from, to) {
	        if (from === void 0) { from = 0; }
	        if (to === void 0) { to = null; }
	        return l.slice(from, to === null ? undefined : to);
	    };
	    ListWrapper.splice = function (l, from, length) { return l.splice(from, length); };
	    ListWrapper.sort = function (l, compareFn) {
	        if (lang_1.isPresent(compareFn)) {
	            l.sort(compareFn);
	        }
	        else {
	            l.sort();
	        }
	    };
	    ListWrapper.toString = function (l) { return l.toString(); };
	    ListWrapper.toJSON = function (l) { return JSON.stringify(l); };
	    ListWrapper.maximum = function (list, predicate) {
	        if (list.length == 0) {
	            return null;
	        }
	        var solution = null;
	        var maxValue = -Infinity;
	        for (var index = 0; index < list.length; index++) {
	            var candidate = list[index];
	            if (lang_1.isBlank(candidate)) {
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
	    ListWrapper.addAll = function (list, source) {
	        for (var i = 0; i < source.length; i++) {
	            list.push(source[i]);
	        }
	    };
	    return ListWrapper;
	}());
	exports.ListWrapper = ListWrapper;
	function _flattenArray(source, target) {
	    if (lang_1.isPresent(source)) {
	        for (var i = 0; i < source.length; i++) {
	            var item = source[i];
	            if (lang_1.isArray(item)) {
	                _flattenArray(item, target);
	            }
	            else {
	                target.push(item);
	            }
	        }
	    }
	    return target;
	}
	function isListLikeIterable(obj) {
	    if (!lang_1.isJsObject(obj))
	        return false;
	    return lang_1.isArray(obj) ||
	        (!(obj instanceof exports.Map) &&
	            lang_1.getSymbolIterator() in obj); // JS Iterable have a Symbol.iterator prop
	}
	exports.isListLikeIterable = isListLikeIterable;
	function areIterablesEqual(a, b, comparator) {
	    var iterator1 = a[lang_1.getSymbolIterator()]();
	    var iterator2 = b[lang_1.getSymbolIterator()]();
	    while (true) {
	        var item1 = iterator1.next();
	        var item2 = iterator2.next();
	        if (item1.done && item2.done)
	            return true;
	        if (item1.done || item2.done)
	            return false;
	        if (!comparator(item1.value, item2.value))
	            return false;
	    }
	}
	exports.areIterablesEqual = areIterablesEqual;
	function iterateListLike(obj, fn) {
	    if (lang_1.isArray(obj)) {
	        for (var i = 0; i < obj.length; i++) {
	            fn(obj[i]);
	        }
	    }
	    else {
	        var iterator = obj[lang_1.getSymbolIterator()]();
	        var item;
	        while (!((item = iterator.next()).done)) {
	            fn(item.value);
	        }
	    }
	}
	exports.iterateListLike = iterateListLike;
	// Safari and Internet Explorer do not support the iterable parameter to the
	// Set constructor.  We work around that by manually adding the items.
	var createSetFromList = (function () {
	    var test = new exports.Set([1, 2, 3]);
	    if (test.size === 3) {
	        return function createSetFromList(lst) { return new exports.Set(lst); };
	    }
	    else {
	        return function createSetAndPopulateFromList(lst) {
	            var res = new exports.Set(lst);
	            if (res.size !== lst.length) {
	                for (var i = 0; i < lst.length; i++) {
	                    res.add(lst[i]);
	                }
	            }
	            return res;
	        };
	    }
	})();
	var SetWrapper = (function () {
	    function SetWrapper() {
	    }
	    SetWrapper.createFromList = function (lst) { return createSetFromList(lst); };
	    SetWrapper.has = function (s, key) { return s.has(key); };
	    SetWrapper.delete = function (m, k) { m.delete(k); };
	    return SetWrapper;
	}());
	exports.SetWrapper = SetWrapper;
	//# sourceMappingURL=collection.js.map

/***/ },
/* 346 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * @license
	 * Copyright Google Inc. All Rights Reserved.
	 *
	 * Use of this source code is governed by an MIT-style license that can be
	 * found in the LICENSE file at https://angular.io/license
	 */
	"use strict";
	var exceptions_1 = __webpack_require__(342);
	var lang_1 = __webpack_require__(339);
	/**
	 * Base class for control directives.
	 *
	 * Only used internally in the forms module.
	 *
	 * @experimental
	 */
	var AbstractControlDirective = (function () {
	    function AbstractControlDirective() {
	    }
	    Object.defineProperty(AbstractControlDirective.prototype, "control", {
	        get: function () { return exceptions_1.unimplemented(); },
	        enumerable: true,
	        configurable: true
	    });
	    Object.defineProperty(AbstractControlDirective.prototype, "value", {
	        get: function () { return lang_1.isPresent(this.control) ? this.control.value : null; },
	        enumerable: true,
	        configurable: true
	    });
	    Object.defineProperty(AbstractControlDirective.prototype, "valid", {
	        get: function () { return lang_1.isPresent(this.control) ? this.control.valid : null; },
	        enumerable: true,
	        configurable: true
	    });
	    Object.defineProperty(AbstractControlDirective.prototype, "errors", {
	        get: function () {
	            return lang_1.isPresent(this.control) ? this.control.errors : null;
	        },
	        enumerable: true,
	        configurable: true
	    });
	    Object.defineProperty(AbstractControlDirective.prototype, "pristine", {
	        get: function () { return lang_1.isPresent(this.control) ? this.control.pristine : null; },
	        enumerable: true,
	        configurable: true
	    });
	    Object.defineProperty(AbstractControlDirective.prototype, "dirty", {
	        get: function () { return lang_1.isPresent(this.control) ? this.control.dirty : null; },
	        enumerable: true,
	        configurable: true
	    });
	    Object.defineProperty(AbstractControlDirective.prototype, "touched", {
	        get: function () { return lang_1.isPresent(this.control) ? this.control.touched : null; },
	        enumerable: true,
	        configurable: true
	    });
	    Object.defineProperty(AbstractControlDirective.prototype, "untouched", {
	        get: function () { return lang_1.isPresent(this.control) ? this.control.untouched : null; },
	        enumerable: true,
	        configurable: true
	    });
	    Object.defineProperty(AbstractControlDirective.prototype, "statusChanges", {
	        get: function () {
	            return lang_1.isPresent(this.control) ? this.control.statusChanges : null;
	        },
	        enumerable: true,
	        configurable: true
	    });
	    Object.defineProperty(AbstractControlDirective.prototype, "valueChanges", {
	        get: function () {
	            return lang_1.isPresent(this.control) ? this.control.valueChanges : null;
	        },
	        enumerable: true,
	        configurable: true
	    });
	    Object.defineProperty(AbstractControlDirective.prototype, "path", {
	        get: function () { return null; },
	        enumerable: true,
	        configurable: true
	    });
	    return AbstractControlDirective;
	}());
	exports.AbstractControlDirective = AbstractControlDirective;
	//# sourceMappingURL=abstract_control_directive.js.map

/***/ },
/* 347 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * @license
	 * Copyright Google Inc. All Rights Reserved.
	 *
	 * Use of this source code is governed by an MIT-style license that can be
	 * found in the LICENSE file at https://angular.io/license
	 */
	"use strict";
	var __extends = (this && this.__extends) || function (d, b) {
	    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	    function __() { this.constructor = d; }
	    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	};
	var core_1 = __webpack_require__(5);
	var async_1 = __webpack_require__(348);
	var collection_1 = __webpack_require__(345);
	var lang_1 = __webpack_require__(339);
	var model_1 = __webpack_require__(350);
	var validators_1 = __webpack_require__(352);
	var control_container_1 = __webpack_require__(358);
	var shared_1 = __webpack_require__(351);
	exports.formDirectiveProvider = 
	/*@ts2dart_const*/ { provide: control_container_1.ControlContainer, useExisting: core_1.forwardRef(function () { return NgForm; }) };
	var NgForm = (function (_super) {
	    __extends(NgForm, _super);
	    function NgForm(validators, asyncValidators) {
	        _super.call(this);
	        this._submitted = false;
	        this.ngSubmit = new async_1.EventEmitter();
	        this.form = new model_1.FormGroup({}, null, shared_1.composeValidators(validators), shared_1.composeAsyncValidators(asyncValidators));
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
	        async_1.PromiseWrapper.scheduleMicrotask(function () {
	            var container = _this._findContainer(dir.path);
	            dir._control = container.registerControl(dir.name, dir.control);
	            shared_1.setUpControl(dir.control, dir);
	            dir.control.updateValueAndValidity({ emitEvent: false });
	        });
	    };
	    NgForm.prototype.getControl = function (dir) { return this.form.find(dir.path); };
	    NgForm.prototype.removeControl = function (dir) {
	        var _this = this;
	        async_1.PromiseWrapper.scheduleMicrotask(function () {
	            var container = _this._findContainer(dir.path);
	            if (lang_1.isPresent(container)) {
	                container.removeControl(dir.name);
	            }
	        });
	    };
	    NgForm.prototype.addFormGroup = function (dir) {
	        var _this = this;
	        async_1.PromiseWrapper.scheduleMicrotask(function () {
	            var container = _this._findContainer(dir.path);
	            var group = new model_1.FormGroup({});
	            shared_1.setUpFormContainer(group, dir);
	            container.registerControl(dir.name, group);
	            group.updateValueAndValidity({ emitEvent: false });
	        });
	    };
	    NgForm.prototype.removeFormGroup = function (dir) {
	        var _this = this;
	        async_1.PromiseWrapper.scheduleMicrotask(function () {
	            var container = _this._findContainer(dir.path);
	            if (lang_1.isPresent(container)) {
	                container.removeControl(dir.name);
	            }
	        });
	    };
	    NgForm.prototype.getFormGroup = function (dir) { return this.form.find(dir.path); };
	    NgForm.prototype.updateModel = function (dir, value) {
	        var _this = this;
	        async_1.PromiseWrapper.scheduleMicrotask(function () {
	            var ctrl = _this.form.find(dir.path);
	            ctrl.updateValue(value);
	        });
	    };
	    NgForm.prototype.onSubmit = function () {
	        this._submitted = true;
	        async_1.ObservableWrapper.callEmit(this.ngSubmit, null);
	        return false;
	    };
	    /** @internal */
	    NgForm.prototype._findContainer = function (path) {
	        path.pop();
	        return collection_1.ListWrapper.isEmpty(path) ? this.form : this.form.find(path);
	    };
	    /** @nocollapse */
	    NgForm.decorators = [
	        { type: core_1.Directive, args: [{
	                    selector: 'form:not([ngNoForm]):not([formGroup]),ngForm,[ngForm]',
	                    providers: [exports.formDirectiveProvider],
	                    host: {
	                        '(submit)': 'onSubmit()',
	                    },
	                    outputs: ['ngSubmit'],
	                    exportAs: 'ngForm'
	                },] },
	    ];
	    /** @nocollapse */
	    NgForm.ctorParameters = [
	        { type: Array, decorators: [{ type: core_1.Optional }, { type: core_1.Self }, { type: core_1.Inject, args: [validators_1.NG_VALIDATORS,] },] },
	        { type: Array, decorators: [{ type: core_1.Optional }, { type: core_1.Self }, { type: core_1.Inject, args: [validators_1.NG_ASYNC_VALIDATORS,] },] },
	    ];
	    return NgForm;
	}(control_container_1.ControlContainer));
	exports.NgForm = NgForm;
	//# sourceMappingURL=ng_form.js.map

/***/ },
/* 348 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * @license
	 * Copyright Google Inc. All Rights Reserved.
	 *
	 * Use of this source code is governed by an MIT-style license that can be
	 * found in the LICENSE file at https://angular.io/license
	 */
	"use strict";
	var __extends = (this && this.__extends) || function (d, b) {
	    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	    function __() { this.constructor = d; }
	    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	};
	var Subject_1 = __webpack_require__(37);
	var PromiseObservable_1 = __webpack_require__(56);
	var toPromise_1 = __webpack_require__(57);
	var lang_1 = __webpack_require__(339);
	var Observable_1 = __webpack_require__(38);
	exports.Observable = Observable_1.Observable;
	var Subject_2 = __webpack_require__(37);
	exports.Subject = Subject_2.Subject;
	var promise_1 = __webpack_require__(349);
	exports.PromiseCompleter = promise_1.PromiseCompleter;
	exports.PromiseWrapper = promise_1.PromiseWrapper;
	var TimerWrapper = (function () {
	    function TimerWrapper() {
	    }
	    TimerWrapper.setTimeout = function (fn, millis) {
	        return lang_1.global.setTimeout(fn, millis);
	    };
	    TimerWrapper.clearTimeout = function (id) { lang_1.global.clearTimeout(id); };
	    TimerWrapper.setInterval = function (fn, millis) {
	        return lang_1.global.setInterval(fn, millis);
	    };
	    TimerWrapper.clearInterval = function (id) { lang_1.global.clearInterval(id); };
	    return TimerWrapper;
	}());
	exports.TimerWrapper = TimerWrapper;
	var ObservableWrapper = (function () {
	    function ObservableWrapper() {
	    }
	    // TODO(vsavkin): when we use rxnext, try inferring the generic type from the first arg
	    ObservableWrapper.subscribe = function (emitter, onNext, onError, onComplete) {
	        if (onComplete === void 0) { onComplete = function () { }; }
	        onError = (typeof onError === 'function') && onError || lang_1.noop;
	        onComplete = (typeof onComplete === 'function') && onComplete || lang_1.noop;
	        return emitter.subscribe({ next: onNext, error: onError, complete: onComplete });
	    };
	    ObservableWrapper.isObservable = function (obs) { return !!obs.subscribe; };
	    /**
	     * Returns whether `obs` has any subscribers listening to events.
	     */
	    ObservableWrapper.hasSubscribers = function (obs) { return obs.observers.length > 0; };
	    ObservableWrapper.dispose = function (subscription) { subscription.unsubscribe(); };
	    /**
	     * @deprecated - use callEmit() instead
	     */
	    ObservableWrapper.callNext = function (emitter, value) { emitter.emit(value); };
	    ObservableWrapper.callEmit = function (emitter, value) { emitter.emit(value); };
	    ObservableWrapper.callError = function (emitter, error) { emitter.error(error); };
	    ObservableWrapper.callComplete = function (emitter) { emitter.complete(); };
	    ObservableWrapper.fromPromise = function (promise) {
	        return PromiseObservable_1.PromiseObservable.create(promise);
	    };
	    ObservableWrapper.toPromise = function (obj) { return toPromise_1.toPromise.call(obj); };
	    return ObservableWrapper;
	}());
	exports.ObservableWrapper = ObservableWrapper;
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
	    __extends(EventEmitter, _super);
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
	    /**
	     * @deprecated - use .emit(value) instead
	     */
	    EventEmitter.prototype.next = function (value) { _super.prototype.next.call(this, value); };
	    EventEmitter.prototype.subscribe = function (generatorOrNext, error, complete) {
	        var schedulerFn;
	        var errorFn = function (err) { return null; };
	        var completeFn = function () { return null; };
	        if (generatorOrNext && typeof generatorOrNext === 'object') {
	            schedulerFn = this.__isAsync ? function (value /** TODO #9100 */) {
	                setTimeout(function () { return generatorOrNext.next(value); });
	            } : function (value /** TODO #9100 */) { generatorOrNext.next(value); };
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
	            schedulerFn = this.__isAsync ? function (value /** TODO #9100 */) {
	                setTimeout(function () { return generatorOrNext(value); });
	            } : function (value /** TODO #9100 */) { generatorOrNext(value); };
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
	}(Subject_1.Subject));
	exports.EventEmitter = EventEmitter;
	//# sourceMappingURL=async.js.map

/***/ },
/* 349 */
/***/ function(module, exports) {

	/**
	 * @license
	 * Copyright Google Inc. All Rights Reserved.
	 *
	 * Use of this source code is governed by an MIT-style license that can be
	 * found in the LICENSE file at https://angular.io/license
	 */
	"use strict";
	var PromiseCompleter = (function () {
	    function PromiseCompleter() {
	        var _this = this;
	        this.promise = new Promise(function (res, rej) {
	            _this.resolve = res;
	            _this.reject = rej;
	        });
	    }
	    return PromiseCompleter;
	}());
	exports.PromiseCompleter = PromiseCompleter;
	var PromiseWrapper = (function () {
	    function PromiseWrapper() {
	    }
	    PromiseWrapper.resolve = function (obj) { return Promise.resolve(obj); };
	    PromiseWrapper.reject = function (obj, _) { return Promise.reject(obj); };
	    // Note: We can't rename this method into `catch`, as this is not a valid
	    // method name in Dart.
	    PromiseWrapper.catchError = function (promise, onError) {
	        return promise.catch(onError);
	    };
	    PromiseWrapper.all = function (promises) {
	        if (promises.length == 0)
	            return Promise.resolve([]);
	        return Promise.all(promises);
	    };
	    PromiseWrapper.then = function (promise, success, rejection) {
	        return promise.then(success, rejection);
	    };
	    PromiseWrapper.wrap = function (computation) {
	        return new Promise(function (res, rej) {
	            try {
	                res(computation());
	            }
	            catch (e) {
	                rej(e);
	            }
	        });
	    };
	    PromiseWrapper.scheduleMicrotask = function (computation) {
	        PromiseWrapper.then(PromiseWrapper.resolve(null), computation, function (_) { });
	    };
	    PromiseWrapper.completer = function () { return new PromiseCompleter(); };
	    return PromiseWrapper;
	}());
	exports.PromiseWrapper = PromiseWrapper;
	//# sourceMappingURL=promise.js.map

/***/ },
/* 350 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * @license
	 * Copyright Google Inc. All Rights Reserved.
	 *
	 * Use of this source code is governed by an MIT-style license that can be
	 * found in the LICENSE file at https://angular.io/license
	 */
	"use strict";
	var __extends = (this && this.__extends) || function (d, b) {
	    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	    function __() { this.constructor = d; }
	    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	};
	var shared_1 = __webpack_require__(351);
	var async_1 = __webpack_require__(348);
	var collection_1 = __webpack_require__(345);
	var lang_1 = __webpack_require__(339);
	/**
	 * Indicates that a FormControl is valid, i.e. that no errors exist in the input value.
	 */
	exports.VALID = 'VALID';
	/**
	 * Indicates that a FormControl is invalid, i.e. that an error exists in the input value.
	 */
	exports.INVALID = 'INVALID';
	/**
	 * Indicates that a FormControl is pending, i.e. that async validation is occurring and
	 * errors are not yet available for the input value.
	 */
	exports.PENDING = 'PENDING';
	function isControl(control) {
	    return control instanceof AbstractControl;
	}
	exports.isControl = isControl;
	function _find(control, path) {
	    if (lang_1.isBlank(path))
	        return null;
	    if (!(path instanceof Array)) {
	        path = path.split('/');
	    }
	    if (path instanceof Array && collection_1.ListWrapper.isEmpty(path))
	        return null;
	    return path.reduce(function (v, name) {
	        if (v instanceof FormGroup) {
	            return lang_1.isPresent(v.controls[name]) ? v.controls[name] : null;
	        }
	        else if (v instanceof FormArray) {
	            var index = name;
	            return lang_1.isPresent(v.at(index)) ? v.at(index) : null;
	        }
	        else {
	            return null;
	        }
	    }, control);
	}
	function toObservable(r) {
	    return lang_1.isPromise(r) ? async_1.ObservableWrapper.fromPromise(r) : r;
	}
	function coerceToValidator(validator) {
	    return Array.isArray(validator) ? shared_1.composeValidators(validator) : validator;
	}
	function coerceToAsyncValidator(asyncValidator) {
	    return Array.isArray(asyncValidator) ? shared_1.composeAsyncValidators(asyncValidator) : asyncValidator;
	}
	/**
	 * @experimental
	 */
	var AbstractControl = (function () {
	    function AbstractControl(validator, asyncValidator) {
	        this.validator = validator;
	        this.asyncValidator = asyncValidator;
	        this._pristine = true;
	        this._touched = false;
	    }
	    Object.defineProperty(AbstractControl.prototype, "value", {
	        get: function () { return this._value; },
	        enumerable: true,
	        configurable: true
	    });
	    Object.defineProperty(AbstractControl.prototype, "status", {
	        get: function () { return this._status; },
	        enumerable: true,
	        configurable: true
	    });
	    Object.defineProperty(AbstractControl.prototype, "valid", {
	        get: function () { return this._status === exports.VALID; },
	        enumerable: true,
	        configurable: true
	    });
	    Object.defineProperty(AbstractControl.prototype, "errors", {
	        /**
	         * Returns the errors of this control.
	         */
	        get: function () { return this._errors; },
	        enumerable: true,
	        configurable: true
	    });
	    Object.defineProperty(AbstractControl.prototype, "pristine", {
	        get: function () { return this._pristine; },
	        enumerable: true,
	        configurable: true
	    });
	    Object.defineProperty(AbstractControl.prototype, "dirty", {
	        get: function () { return !this.pristine; },
	        enumerable: true,
	        configurable: true
	    });
	    Object.defineProperty(AbstractControl.prototype, "touched", {
	        get: function () { return this._touched; },
	        enumerable: true,
	        configurable: true
	    });
	    Object.defineProperty(AbstractControl.prototype, "untouched", {
	        get: function () { return !this._touched; },
	        enumerable: true,
	        configurable: true
	    });
	    Object.defineProperty(AbstractControl.prototype, "valueChanges", {
	        get: function () { return this._valueChanges; },
	        enumerable: true,
	        configurable: true
	    });
	    Object.defineProperty(AbstractControl.prototype, "statusChanges", {
	        get: function () { return this._statusChanges; },
	        enumerable: true,
	        configurable: true
	    });
	    Object.defineProperty(AbstractControl.prototype, "pending", {
	        get: function () { return this._status == exports.PENDING; },
	        enumerable: true,
	        configurable: true
	    });
	    AbstractControl.prototype.setAsyncValidators = function (newValidator) {
	        this.asyncValidator = coerceToAsyncValidator(newValidator);
	    };
	    AbstractControl.prototype.clearAsyncValidators = function () { this.asyncValidator = null; };
	    AbstractControl.prototype.setValidators = function (newValidator) {
	        this.validator = coerceToValidator(newValidator);
	    };
	    AbstractControl.prototype.clearValidators = function () { this.validator = null; };
	    AbstractControl.prototype.markAsTouched = function () { this._touched = true; };
	    AbstractControl.prototype.markAsDirty = function (_a) {
	        var onlySelf = (_a === void 0 ? {} : _a).onlySelf;
	        onlySelf = lang_1.normalizeBool(onlySelf);
	        this._pristine = false;
	        if (lang_1.isPresent(this._parent) && !onlySelf) {
	            this._parent.markAsDirty({ onlySelf: onlySelf });
	        }
	    };
	    AbstractControl.prototype.markAsPending = function (_a) {
	        var onlySelf = (_a === void 0 ? {} : _a).onlySelf;
	        onlySelf = lang_1.normalizeBool(onlySelf);
	        this._status = exports.PENDING;
	        if (lang_1.isPresent(this._parent) && !onlySelf) {
	            this._parent.markAsPending({ onlySelf: onlySelf });
	        }
	    };
	    AbstractControl.prototype.setParent = function (parent) { this._parent = parent; };
	    AbstractControl.prototype.updateValueAndValidity = function (_a) {
	        var _b = _a === void 0 ? {} : _a, onlySelf = _b.onlySelf, emitEvent = _b.emitEvent;
	        onlySelf = lang_1.normalizeBool(onlySelf);
	        emitEvent = lang_1.isPresent(emitEvent) ? emitEvent : true;
	        this._updateValue();
	        this._errors = this._runValidator();
	        this._status = this._calculateStatus();
	        if (this._status == exports.VALID || this._status == exports.PENDING) {
	            this._runAsyncValidator(emitEvent);
	        }
	        if (emitEvent) {
	            async_1.ObservableWrapper.callEmit(this._valueChanges, this._value);
	            async_1.ObservableWrapper.callEmit(this._statusChanges, this._status);
	        }
	        if (lang_1.isPresent(this._parent) && !onlySelf) {
	            this._parent.updateValueAndValidity({ onlySelf: onlySelf, emitEvent: emitEvent });
	        }
	    };
	    AbstractControl.prototype._runValidator = function () {
	        return lang_1.isPresent(this.validator) ? this.validator(this) : null;
	    };
	    AbstractControl.prototype._runAsyncValidator = function (emitEvent) {
	        var _this = this;
	        if (lang_1.isPresent(this.asyncValidator)) {
	            this._status = exports.PENDING;
	            this._cancelExistingSubscription();
	            var obs = toObservable(this.asyncValidator(this));
	            this._asyncValidationSubscription = async_1.ObservableWrapper.subscribe(obs, function (res) { return _this.setErrors(res, { emitEvent: emitEvent }); });
	        }
	    };
	    AbstractControl.prototype._cancelExistingSubscription = function () {
	        if (lang_1.isPresent(this._asyncValidationSubscription)) {
	            async_1.ObservableWrapper.dispose(this._asyncValidationSubscription);
	        }
	    };
	    /**
	     * Sets errors on a form control.
	     *
	     * This is used when validations are run not automatically, but manually by the user.
	     *
	     * Calling `setErrors` will also update the validity of the parent control.
	     *
	     * ## Usage
	     *
	     * ```
	     * var login = new FormControl("someLogin");
	     * login.setErrors({
	     *   "notUnique": true
	     * });
	     *
	     * expect(login.valid).toEqual(false);
	     * expect(login.errors).toEqual({"notUnique": true});
	     *
	     * login.updateValue("someOtherLogin");
	     *
	     * expect(login.valid).toEqual(true);
	     * ```
	     */
	    AbstractControl.prototype.setErrors = function (errors, _a) {
	        var emitEvent = (_a === void 0 ? {} : _a).emitEvent;
	        emitEvent = lang_1.isPresent(emitEvent) ? emitEvent : true;
	        this._errors = errors;
	        this._updateControlsErrors(emitEvent);
	    };
	    AbstractControl.prototype.find = function (path) { return _find(this, path); };
	    AbstractControl.prototype.getError = function (errorCode, path) {
	        if (path === void 0) { path = null; }
	        var control = lang_1.isPresent(path) && !collection_1.ListWrapper.isEmpty(path) ? this.find(path) : this;
	        if (lang_1.isPresent(control) && lang_1.isPresent(control._errors)) {
	            return collection_1.StringMapWrapper.get(control._errors, errorCode);
	        }
	        else {
	            return null;
	        }
	    };
	    AbstractControl.prototype.hasError = function (errorCode, path) {
	        if (path === void 0) { path = null; }
	        return lang_1.isPresent(this.getError(errorCode, path));
	    };
	    Object.defineProperty(AbstractControl.prototype, "root", {
	        get: function () {
	            var x = this;
	            while (lang_1.isPresent(x._parent)) {
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
	            async_1.ObservableWrapper.callEmit(this._statusChanges, this._status);
	        }
	        if (lang_1.isPresent(this._parent)) {
	            this._parent._updateControlsErrors(emitEvent);
	        }
	    };
	    /** @internal */
	    AbstractControl.prototype._initObservables = function () {
	        this._valueChanges = new async_1.EventEmitter();
	        this._statusChanges = new async_1.EventEmitter();
	    };
	    AbstractControl.prototype._calculateStatus = function () {
	        if (lang_1.isPresent(this._errors))
	            return exports.INVALID;
	        if (this._anyControlsHaveStatus(exports.PENDING))
	            return exports.PENDING;
	        if (this._anyControlsHaveStatus(exports.INVALID))
	            return exports.INVALID;
	        return exports.VALID;
	    };
	    return AbstractControl;
	}());
	exports.AbstractControl = AbstractControl;
	/**
	 * Defines a part of a form that cannot be divided into other controls. `FormControl`s have values
	 * and
	 * validation state, which is determined by an optional validation function.
	 *
	 * `FormControl` is one of the three fundamental building blocks used to define forms in Angular,
	 * along
	 * with {@link FormGroup} and {@link FormArray}.
	 *
	 * ## Usage
	 *
	 * By default, a `FormControl` is created for every `<input>` or other form component.
	 * With {@link FormControlDirective} or {@link FormGroupDirective} an existing {@link FormControl}
	 * can be bound to a DOM element instead. This `FormControl` can be configured with a custom
	 * validation function.
	 *
	 * @experimental
	 */
	var FormControl = (function (_super) {
	    __extends(FormControl, _super);
	    function FormControl(value, validator, asyncValidator) {
	        if (value === void 0) { value = null; }
	        if (validator === void 0) { validator = null; }
	        if (asyncValidator === void 0) { asyncValidator = null; }
	        _super.call(this, coerceToValidator(validator), coerceToAsyncValidator(asyncValidator));
	        /** @internal */
	        this._onChange = [];
	        this._value = value;
	        this.updateValueAndValidity({ onlySelf: true, emitEvent: false });
	        this._initObservables();
	    }
	    /**
	     * Set the value of the form control to `value`.
	     *
	     * If `onlySelf` is `true`, this change will only affect the validation of this `FormControl`
	     * and not its parent component. If `emitEvent` is `true`, this change will cause a
	     * `valueChanges` event on the `FormControl` to be emitted. Both of these options default to
	     * `false`.
	     *
	     * If `emitModelToViewChange` is `true`, the view will be notified about the new value
	     * via an `onChange` event. This is the default behavior if `emitModelToViewChange` is not
	     * specified.
	     */
	    FormControl.prototype.updateValue = function (value, _a) {
	        var _this = this;
	        var _b = _a === void 0 ? {} : _a, onlySelf = _b.onlySelf, emitEvent = _b.emitEvent, emitModelToViewChange = _b.emitModelToViewChange;
	        emitModelToViewChange = lang_1.isPresent(emitModelToViewChange) ? emitModelToViewChange : true;
	        this._value = value;
	        if (this._onChange.length && emitModelToViewChange) {
	            this._onChange.forEach(function (changeFn) { return changeFn(_this._value); });
	        }
	        this.updateValueAndValidity({ onlySelf: onlySelf, emitEvent: emitEvent });
	    };
	    /**
	     * @internal
	     */
	    FormControl.prototype._updateValue = function () { };
	    /**
	     * @internal
	     */
	    FormControl.prototype._anyControlsHaveStatus = function (status) { return false; };
	    /**
	     * Register a listener for change events.
	     */
	    FormControl.prototype.registerOnChange = function (fn) { this._onChange.push(fn); };
	    return FormControl;
	}(AbstractControl));
	exports.FormControl = FormControl;
	/**
	 * Defines a part of a form, of fixed length, that can contain other controls.
	 *
	 * A `FormGroup` aggregates the values of each {@link FormControl} in the group.
	 * The status of a `FormGroup` depends on the status of its children.
	 * If one of the controls in a group is invalid, the entire group is invalid.
	 * Similarly, if a control changes its value, the entire group changes as well.
	 *
	 * `FormGroup` is one of the three fundamental building blocks used to define forms in Angular,
	 * along with {@link FormControl} and {@link FormArray}. {@link FormArray} can also contain other
	 * controls, but is of variable length.
	 *
	 * ### Example ([live demo](http://plnkr.co/edit/23DESOpbNnBpBHZt1BR4?p=preview))
	 *
	 * @experimental
	 */
	var FormGroup = (function (_super) {
	    __extends(FormGroup, _super);
	    function FormGroup(controls, optionals, validator, asyncValidator) {
	        if (optionals === void 0) { optionals = null; }
	        if (validator === void 0) { validator = null; }
	        if (asyncValidator === void 0) { asyncValidator = null; }
	        _super.call(this, validator, asyncValidator);
	        this.controls = controls;
	        this._optionals = lang_1.isPresent(optionals) ? optionals : {};
	        this._initObservables();
	        this._setParentForControls();
	        this.updateValueAndValidity({ onlySelf: true, emitEvent: false });
	    }
	    /**
	     * Register a control with the group's list of controls.
	     */
	    FormGroup.prototype.registerControl = function (name, control) {
	        if (this.controls[name])
	            return this.controls[name];
	        this.controls[name] = control;
	        control.setParent(this);
	        return control;
	    };
	    /**
	     * Add a control to this group.
	     */
	    FormGroup.prototype.addControl = function (name, control) {
	        this.registerControl(name, control);
	        this.updateValueAndValidity();
	    };
	    /**
	     * Remove a control from this group.
	     */
	    FormGroup.prototype.removeControl = function (name) {
	        collection_1.StringMapWrapper.delete(this.controls, name);
	        this.updateValueAndValidity();
	    };
	    /**
	     * Mark the named control as non-optional.
	     */
	    FormGroup.prototype.include = function (controlName) {
	        collection_1.StringMapWrapper.set(this._optionals, controlName, true);
	        this.updateValueAndValidity();
	    };
	    /**
	     * Mark the named control as optional.
	     */
	    FormGroup.prototype.exclude = function (controlName) {
	        collection_1.StringMapWrapper.set(this._optionals, controlName, false);
	        this.updateValueAndValidity();
	    };
	    /**
	     * Check whether there is a control with the given name in the group.
	     */
	    FormGroup.prototype.contains = function (controlName) {
	        var c = collection_1.StringMapWrapper.contains(this.controls, controlName);
	        return c && this._included(controlName);
	    };
	    /** @internal */
	    FormGroup.prototype._setParentForControls = function () {
	        var _this = this;
	        collection_1.StringMapWrapper.forEach(this.controls, function (control, name) { control.setParent(_this); });
	    };
	    /** @internal */
	    FormGroup.prototype._updateValue = function () { this._value = this._reduceValue(); };
	    /** @internal */
	    FormGroup.prototype._anyControlsHaveStatus = function (status) {
	        var _this = this;
	        var res = false;
	        collection_1.StringMapWrapper.forEach(this.controls, function (control, name) {
	            res = res || (_this.contains(name) && control.status == status);
	        });
	        return res;
	    };
	    /** @internal */
	    FormGroup.prototype._reduceValue = function () {
	        return this._reduceChildren({}, function (acc, control, name) {
	            acc[name] = control.value;
	            return acc;
	        });
	    };
	    /** @internal */
	    FormGroup.prototype._reduceChildren = function (initValue, fn) {
	        var _this = this;
	        var res = initValue;
	        collection_1.StringMapWrapper.forEach(this.controls, function (control, name) {
	            if (_this._included(name)) {
	                res = fn(res, control, name);
	            }
	        });
	        return res;
	    };
	    /** @internal */
	    FormGroup.prototype._included = function (controlName) {
	        var isOptional = collection_1.StringMapWrapper.contains(this._optionals, controlName);
	        return !isOptional || collection_1.StringMapWrapper.get(this._optionals, controlName);
	    };
	    return FormGroup;
	}(AbstractControl));
	exports.FormGroup = FormGroup;
	/**
	 * Defines a part of a form, of variable length, that can contain other controls.
	 *
	 * A `FormArray` aggregates the values of each {@link FormControl} in the group.
	 * The status of a `FormArray` depends on the status of its children.
	 * If one of the controls in a group is invalid, the entire array is invalid.
	 * Similarly, if a control changes its value, the entire array changes as well.
	 *
	 * `FormArray` is one of the three fundamental building blocks used to define forms in Angular,
	 * along with {@link FormControl} and {@link FormGroup}. {@link FormGroup} can also contain
	 * other controls, but is of fixed length.
	 *
	 * ## Adding or removing controls
	 *
	 * To change the controls in the array, use the `push`, `insert`, or `removeAt` methods
	 * in `FormArray` itself. These methods ensure the controls are properly tracked in the
	 * form's hierarchy. Do not modify the array of `AbstractControl`s used to instantiate
	 * the `FormArray` directly, as that will result in strange and unexpected behavior such
	 * as broken change detection.
	 *
	 * ### Example ([live demo](http://plnkr.co/edit/23DESOpbNnBpBHZt1BR4?p=preview))
	 *
	 * @experimental
	 */
	var FormArray = (function (_super) {
	    __extends(FormArray, _super);
	    function FormArray(controls, validator, asyncValidator) {
	        if (validator === void 0) { validator = null; }
	        if (asyncValidator === void 0) { asyncValidator = null; }
	        _super.call(this, validator, asyncValidator);
	        this.controls = controls;
	        this._initObservables();
	        this._setParentForControls();
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
	        control.setParent(this);
	        this.updateValueAndValidity();
	    };
	    /**
	     * Insert a new {@link AbstractControl} at the given `index` in the array.
	     */
	    FormArray.prototype.insert = function (index, control) {
	        collection_1.ListWrapper.insert(this.controls, index, control);
	        control.setParent(this);
	        this.updateValueAndValidity();
	    };
	    /**
	     * Remove the control at the given `index` in the array.
	     */
	    FormArray.prototype.removeAt = function (index) {
	        collection_1.ListWrapper.removeAt(this.controls, index);
	        this.updateValueAndValidity();
	    };
	    Object.defineProperty(FormArray.prototype, "length", {
	        /**
	         * Length of the control array.
	         */
	        get: function () { return this.controls.length; },
	        enumerable: true,
	        configurable: true
	    });
	    /** @internal */
	    FormArray.prototype._updateValue = function () { this._value = this.controls.map(function (control) { return control.value; }); };
	    /** @internal */
	    FormArray.prototype._anyControlsHaveStatus = function (status) {
	        return this.controls.some(function (c) { return c.status == status; });
	    };
	    /** @internal */
	    FormArray.prototype._setParentForControls = function () {
	        var _this = this;
	        this.controls.forEach(function (control) { control.setParent(_this); });
	    };
	    return FormArray;
	}(AbstractControl));
	exports.FormArray = FormArray;
	//# sourceMappingURL=model.js.map

/***/ },
/* 351 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * @license
	 * Copyright Google Inc. All Rights Reserved.
	 *
	 * Use of this source code is governed by an MIT-style license that can be
	 * found in the LICENSE file at https://angular.io/license
	 */
	"use strict";
	var collection_1 = __webpack_require__(345);
	var exceptions_1 = __webpack_require__(342);
	var lang_1 = __webpack_require__(339);
	var validators_1 = __webpack_require__(352);
	var checkbox_value_accessor_1 = __webpack_require__(336);
	var default_value_accessor_1 = __webpack_require__(338);
	var normalize_validator_1 = __webpack_require__(353);
	var number_value_accessor_1 = __webpack_require__(354);
	var radio_control_value_accessor_1 = __webpack_require__(355);
	var select_control_value_accessor_1 = __webpack_require__(356);
	var select_multiple_control_value_accessor_1 = __webpack_require__(357);
	function controlPath(name, parent) {
	    var p = collection_1.ListWrapper.clone(parent.path);
	    p.push(name);
	    return p;
	}
	exports.controlPath = controlPath;
	function setUpControl(control, dir) {
	    if (lang_1.isBlank(control))
	        _throwError(dir, 'Cannot find control');
	    if (lang_1.isBlank(dir.valueAccessor))
	        _throwError(dir, 'No value accessor for');
	    control.validator = validators_1.Validators.compose([control.validator, dir.validator]);
	    control.asyncValidator = validators_1.Validators.composeAsync([control.asyncValidator, dir.asyncValidator]);
	    dir.valueAccessor.writeValue(control.value);
	    // view -> model
	    dir.valueAccessor.registerOnChange(function (newValue) {
	        dir.viewToModelUpdate(newValue);
	        control.updateValue(newValue, { emitModelToViewChange: false });
	        control.markAsDirty();
	    });
	    // model -> view
	    control.registerOnChange(function (newValue) { return dir.valueAccessor.writeValue(newValue); });
	    // touched
	    dir.valueAccessor.registerOnTouched(function () { return control.markAsTouched(); });
	}
	exports.setUpControl = setUpControl;
	function setUpFormContainer(control, dir) {
	    if (lang_1.isBlank(control))
	        _throwError(dir, 'Cannot find control');
	    control.validator = validators_1.Validators.compose([control.validator, dir.validator]);
	    control.asyncValidator = validators_1.Validators.composeAsync([control.asyncValidator, dir.asyncValidator]);
	}
	exports.setUpFormContainer = setUpFormContainer;
	function _throwError(dir, message) {
	    var path = dir.path.join(' -> ');
	    throw new exceptions_1.BaseException(message + " '" + path + "'");
	}
	function composeValidators(validators) {
	    return lang_1.isPresent(validators) ? validators_1.Validators.compose(validators.map(normalize_validator_1.normalizeValidator)) : null;
	}
	exports.composeValidators = composeValidators;
	function composeAsyncValidators(validators) {
	    return lang_1.isPresent(validators) ? validators_1.Validators.composeAsync(validators.map(normalize_validator_1.normalizeAsyncValidator)) :
	        null;
	}
	exports.composeAsyncValidators = composeAsyncValidators;
	function isPropertyUpdated(changes, viewModel) {
	    if (!collection_1.StringMapWrapper.contains(changes, 'model'))
	        return false;
	    var change = changes['model'];
	    if (change.isFirstChange())
	        return true;
	    return !lang_1.looseIdentical(viewModel, change.currentValue);
	}
	exports.isPropertyUpdated = isPropertyUpdated;
	// TODO: vsavkin remove it once https://github.com/angular/angular/issues/3011 is implemented
	function selectValueAccessor(dir, valueAccessors) {
	    if (lang_1.isBlank(valueAccessors))
	        return null;
	    var defaultAccessor;
	    var builtinAccessor;
	    var customAccessor;
	    valueAccessors.forEach(function (v) {
	        if (lang_1.hasConstructor(v, default_value_accessor_1.DefaultValueAccessor)) {
	            defaultAccessor = v;
	        }
	        else if (lang_1.hasConstructor(v, checkbox_value_accessor_1.CheckboxControlValueAccessor) || lang_1.hasConstructor(v, number_value_accessor_1.NumberValueAccessor) ||
	            lang_1.hasConstructor(v, select_control_value_accessor_1.SelectControlValueAccessor) ||
	            lang_1.hasConstructor(v, select_multiple_control_value_accessor_1.SelectMultipleControlValueAccessor) ||
	            lang_1.hasConstructor(v, radio_control_value_accessor_1.RadioControlValueAccessor)) {
	            if (lang_1.isPresent(builtinAccessor))
	                _throwError(dir, 'More than one built-in value accessor matches');
	            builtinAccessor = v;
	        }
	        else {
	            if (lang_1.isPresent(customAccessor))
	                _throwError(dir, 'More than one custom value accessor matches');
	            customAccessor = v;
	        }
	    });
	    if (lang_1.isPresent(customAccessor))
	        return customAccessor;
	    if (lang_1.isPresent(builtinAccessor))
	        return builtinAccessor;
	    if (lang_1.isPresent(defaultAccessor))
	        return defaultAccessor;
	    _throwError(dir, 'No valid value accessor for');
	    return null;
	}
	exports.selectValueAccessor = selectValueAccessor;
	//# sourceMappingURL=shared.js.map

/***/ },
/* 352 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * @license
	 * Copyright Google Inc. All Rights Reserved.
	 *
	 * Use of this source code is governed by an MIT-style license that can be
	 * found in the LICENSE file at https://angular.io/license
	 */
	"use strict";
	var core_1 = __webpack_require__(5);
	var async_1 = __webpack_require__(348);
	var collection_1 = __webpack_require__(345);
	var lang_1 = __webpack_require__(339);
	var promise_1 = __webpack_require__(349);
	/**
	 * Providers for validators to be used for {@link FormControl}s in a form.
	 *
	 * Provide this using `multi: true` to add validators.
	 *
	 * ### Example
	 *
	 * {@example core/forms/ts/ng_validators/ng_validators.ts region='ng_validators'}
	 * @experimental
	 */
	exports.NG_VALIDATORS = new core_1.OpaqueToken('NgValidators');
	/**
	 * Providers for asynchronous validators to be used for {@link FormControl}s
	 * in a form.
	 *
	 * Provide this using `multi: true` to add validators.
	 *
	 * See {@link NG_VALIDATORS} for more details.
	 *
	 * @experimental
	 */
	exports.NG_ASYNC_VALIDATORS = 
	/*@ts2dart_const*/ new core_1.OpaqueToken('NgAsyncValidators');
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
	 * @experimental
	 */
	var Validators = (function () {
	    function Validators() {
	    }
	    /**
	     * Validator that requires controls to have a non-empty value.
	     */
	    Validators.required = function (control) {
	        return lang_1.isBlank(control.value) || (lang_1.isString(control.value) && control.value == '') ?
	            { 'required': true } :
	            null;
	    };
	    /**
	     * Validator that requires controls to have a value of a minimum length.
	     */
	    Validators.minLength = function (minLength) {
	        return function (control) {
	            if (lang_1.isPresent(Validators.required(control)))
	                return null;
	            var v = control.value;
	            return v.length < minLength ?
	                { 'minlength': { 'requiredLength': minLength, 'actualLength': v.length } } :
	                null;
	        };
	    };
	    /**
	     * Validator that requires controls to have a value of a maximum length.
	     */
	    Validators.maxLength = function (maxLength) {
	        return function (control) {
	            if (lang_1.isPresent(Validators.required(control)))
	                return null;
	            var v = control.value;
	            return v.length > maxLength ?
	                { 'maxlength': { 'requiredLength': maxLength, 'actualLength': v.length } } :
	                null;
	        };
	    };
	    /**
	     * Validator that requires a control to match a regex to its value.
	     */
	    Validators.pattern = function (pattern) {
	        return function (control) {
	            if (lang_1.isPresent(Validators.required(control)))
	                return null;
	            var regex = new RegExp("^" + pattern + "$");
	            var v = control.value;
	            return regex.test(v) ? null :
	                { 'pattern': { 'requiredPattern': "^" + pattern + "$", 'actualValue': v } };
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
	        if (lang_1.isBlank(validators))
	            return null;
	        var presentValidators = validators.filter(lang_1.isPresent);
	        if (presentValidators.length == 0)
	            return null;
	        return function (control) {
	            return _mergeErrors(_executeValidators(control, presentValidators));
	        };
	    };
	    Validators.composeAsync = function (validators) {
	        if (lang_1.isBlank(validators))
	            return null;
	        var presentValidators = validators.filter(lang_1.isPresent);
	        if (presentValidators.length == 0)
	            return null;
	        return function (control) {
	            var promises = _executeAsyncValidators(control, presentValidators).map(_convertToPromise);
	            return promise_1.PromiseWrapper.all(promises).then(_mergeErrors);
	        };
	    };
	    return Validators;
	}());
	exports.Validators = Validators;
	function _convertToPromise(obj) {
	    return lang_1.isPromise(obj) ? obj : async_1.ObservableWrapper.toPromise(obj);
	}
	function _executeValidators(control, validators) {
	    return validators.map(function (v) { return v(control); });
	}
	function _executeAsyncValidators(control, validators) {
	    return validators.map(function (v) { return v(control); });
	}
	function _mergeErrors(arrayOfErrors) {
	    var res = arrayOfErrors.reduce(function (res, errors) {
	        return lang_1.isPresent(errors) ? collection_1.StringMapWrapper.merge(res, errors) : res;
	    }, {});
	    return collection_1.StringMapWrapper.isEmpty(res) ? null : res;
	}
	//# sourceMappingURL=validators.js.map

/***/ },
/* 353 */
/***/ function(module, exports) {

	/**
	 * @license
	 * Copyright Google Inc. All Rights Reserved.
	 *
	 * Use of this source code is governed by an MIT-style license that can be
	 * found in the LICENSE file at https://angular.io/license
	 */
	"use strict";
	function normalizeValidator(validator) {
	    if (validator.validate !== undefined) {
	        return function (c) { return validator.validate(c); };
	    }
	    else {
	        return validator;
	    }
	}
	exports.normalizeValidator = normalizeValidator;
	function normalizeAsyncValidator(validator) {
	    if (validator.validate !== undefined) {
	        return function (c) { return validator.validate(c); };
	    }
	    else {
	        return validator;
	    }
	}
	exports.normalizeAsyncValidator = normalizeAsyncValidator;
	//# sourceMappingURL=normalize_validator.js.map

/***/ },
/* 354 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * @license
	 * Copyright Google Inc. All Rights Reserved.
	 *
	 * Use of this source code is governed by an MIT-style license that can be
	 * found in the LICENSE file at https://angular.io/license
	 */
	"use strict";
	var core_1 = __webpack_require__(5);
	var lang_1 = __webpack_require__(339);
	var control_value_accessor_1 = __webpack_require__(337);
	exports.NUMBER_VALUE_ACCESSOR = {
	    provide: control_value_accessor_1.NG_VALUE_ACCESSOR,
	    useExisting: core_1.forwardRef(function () { return NumberValueAccessor; }),
	    multi: true
	};
	var NumberValueAccessor = (function () {
	    function NumberValueAccessor(_renderer, _elementRef) {
	        this._renderer = _renderer;
	        this._elementRef = _elementRef;
	        this.onChange = function (_) { };
	        this.onTouched = function () { };
	    }
	    NumberValueAccessor.prototype.writeValue = function (value) {
	        this._renderer.setElementProperty(this._elementRef.nativeElement, 'value', value);
	    };
	    NumberValueAccessor.prototype.registerOnChange = function (fn) {
	        this.onChange = function (value) { fn(value == '' ? null : lang_1.NumberWrapper.parseFloat(value)); };
	    };
	    NumberValueAccessor.prototype.registerOnTouched = function (fn) { this.onTouched = fn; };
	    /** @nocollapse */
	    NumberValueAccessor.decorators = [
	        { type: core_1.Directive, args: [{
	                    selector: 'input[type=number][formControlName],input[type=number][formControl],input[type=number][ngModel]',
	                    host: {
	                        '(change)': 'onChange($event.target.value)',
	                        '(input)': 'onChange($event.target.value)',
	                        '(blur)': 'onTouched()'
	                    },
	                    providers: [exports.NUMBER_VALUE_ACCESSOR]
	                },] },
	    ];
	    /** @nocollapse */
	    NumberValueAccessor.ctorParameters = [
	        { type: core_1.Renderer, },
	        { type: core_1.ElementRef, },
	    ];
	    return NumberValueAccessor;
	}());
	exports.NumberValueAccessor = NumberValueAccessor;
	//# sourceMappingURL=number_value_accessor.js.map

/***/ },
/* 355 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * @license
	 * Copyright Google Inc. All Rights Reserved.
	 *
	 * Use of this source code is governed by an MIT-style license that can be
	 * found in the LICENSE file at https://angular.io/license
	 */
	"use strict";
	var core_1 = __webpack_require__(5);
	var collection_1 = __webpack_require__(345);
	var exceptions_1 = __webpack_require__(342);
	var lang_1 = __webpack_require__(339);
	var control_value_accessor_1 = __webpack_require__(337);
	var ng_control_1 = __webpack_require__(341);
	exports.RADIO_VALUE_ACCESSOR = {
	    provide: control_value_accessor_1.NG_VALUE_ACCESSOR,
	    useExisting: core_1.forwardRef(function () { return RadioControlValueAccessor; }),
	    multi: true
	};
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
	        collection_1.ListWrapper.removeAt(this._accessors, indexToRemove);
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
	        return controlPair[0].control.root === accessor._control.control.root &&
	            controlPair[1].name === accessor.name;
	    };
	    /** @nocollapse */
	    RadioControlRegistry.decorators = [
	        { type: core_1.Injectable },
	    ];
	    return RadioControlRegistry;
	}());
	exports.RadioControlRegistry = RadioControlRegistry;
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
	        this._control = this._injector.get(ng_control_1.NgControl);
	        this._checkName();
	        this._registry.add(this._control, this);
	    };
	    RadioControlValueAccessor.prototype.ngOnDestroy = function () { this._registry.remove(this); };
	    RadioControlValueAccessor.prototype.writeValue = function (value) {
	        this._state = value === this.value;
	        if (lang_1.isPresent(value)) {
	            this._renderer.setElementProperty(this._elementRef.nativeElement, 'checked', this._state);
	        }
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
	    RadioControlValueAccessor.prototype._checkName = function () {
	        if (this.name && this.formControlName && this.name !== this.formControlName) {
	            this._throwNameError();
	        }
	        if (!this.name && this.formControlName)
	            this.name = this.formControlName;
	    };
	    RadioControlValueAccessor.prototype._throwNameError = function () {
	        throw new exceptions_1.BaseException("\n      If you define both a name and a formControlName attribute on your radio button, their values\n      must match. Ex: <input type=\"radio\" formControlName=\"food\" name=\"food\">\n    ");
	    };
	    /** @nocollapse */
	    RadioControlValueAccessor.decorators = [
	        { type: core_1.Directive, args: [{
	                    selector: 'input[type=radio][formControlName],input[type=radio][formControl],input[type=radio][ngModel]',
	                    host: { '(change)': 'onChange()', '(blur)': 'onTouched()' },
	                    providers: [exports.RADIO_VALUE_ACCESSOR]
	                },] },
	    ];
	    /** @nocollapse */
	    RadioControlValueAccessor.ctorParameters = [
	        { type: core_1.Renderer, },
	        { type: core_1.ElementRef, },
	        { type: RadioControlRegistry, },
	        { type: core_1.Injector, },
	    ];
	    /** @nocollapse */
	    RadioControlValueAccessor.propDecorators = {
	        'name': [{ type: core_1.Input },],
	        'formControlName': [{ type: core_1.Input },],
	        'value': [{ type: core_1.Input },],
	    };
	    return RadioControlValueAccessor;
	}());
	exports.RadioControlValueAccessor = RadioControlValueAccessor;
	//# sourceMappingURL=radio_control_value_accessor.js.map

/***/ },
/* 356 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * @license
	 * Copyright Google Inc. All Rights Reserved.
	 *
	 * Use of this source code is governed by an MIT-style license that can be
	 * found in the LICENSE file at https://angular.io/license
	 */
	"use strict";
	var core_1 = __webpack_require__(5);
	var collection_1 = __webpack_require__(345);
	var lang_1 = __webpack_require__(339);
	var control_value_accessor_1 = __webpack_require__(337);
	exports.SELECT_VALUE_ACCESSOR = {
	    provide: control_value_accessor_1.NG_VALUE_ACCESSOR,
	    useExisting: core_1.forwardRef(function () { return SelectControlValueAccessor; }),
	    multi: true
	};
	function _buildValueString(id, value) {
	    if (lang_1.isBlank(id))
	        return "" + value;
	    if (!lang_1.isPrimitive(value))
	        value = 'Object';
	    return lang_1.StringWrapper.slice(id + ": " + value, 0, 50);
	}
	function _extractId(valueString) {
	    return valueString.split(':')[0];
	}
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
	    /** @internal */
	    SelectControlValueAccessor.prototype._registerOption = function () { return (this._idCounter++).toString(); };
	    /** @internal */
	    SelectControlValueAccessor.prototype._getOptionId = function (value) {
	        for (var _i = 0, _a = collection_1.MapWrapper.keys(this._optionMap); _i < _a.length; _i++) {
	            var id = _a[_i];
	            if (lang_1.looseIdentical(this._optionMap.get(id), value))
	                return id;
	        }
	        return null;
	    };
	    /** @internal */
	    SelectControlValueAccessor.prototype._getOptionValue = function (valueString) {
	        var value = this._optionMap.get(_extractId(valueString));
	        return lang_1.isPresent(value) ? value : valueString;
	    };
	    /** @nocollapse */
	    SelectControlValueAccessor.decorators = [
	        { type: core_1.Directive, args: [{
	                    selector: 'select:not([multiple])[formControlName],select:not([multiple])[formControl],select:not([multiple])[ngModel]',
	                    host: { '(change)': 'onChange($event.target.value)', '(blur)': 'onTouched()' },
	                    providers: [exports.SELECT_VALUE_ACCESSOR]
	                },] },
	    ];
	    /** @nocollapse */
	    SelectControlValueAccessor.ctorParameters = [
	        { type: core_1.Renderer, },
	        { type: core_1.ElementRef, },
	    ];
	    return SelectControlValueAccessor;
	}());
	exports.SelectControlValueAccessor = SelectControlValueAccessor;
	var NgSelectOption = (function () {
	    function NgSelectOption(_element, _renderer, _select) {
	        this._element = _element;
	        this._renderer = _renderer;
	        this._select = _select;
	        if (lang_1.isPresent(this._select))
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
	            if (lang_1.isPresent(this._select))
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
	        if (lang_1.isPresent(this._select)) {
	            this._select._optionMap.delete(this.id);
	            this._select.writeValue(this._select.value);
	        }
	    };
	    /** @nocollapse */
	    NgSelectOption.decorators = [
	        { type: core_1.Directive, args: [{ selector: 'option' },] },
	    ];
	    /** @nocollapse */
	    NgSelectOption.ctorParameters = [
	        { type: core_1.ElementRef, },
	        { type: core_1.Renderer, },
	        { type: SelectControlValueAccessor, decorators: [{ type: core_1.Optional }, { type: core_1.Host },] },
	    ];
	    /** @nocollapse */
	    NgSelectOption.propDecorators = {
	        'ngValue': [{ type: core_1.Input, args: ['ngValue',] },],
	        'value': [{ type: core_1.Input, args: ['value',] },],
	    };
	    return NgSelectOption;
	}());
	exports.NgSelectOption = NgSelectOption;
	//# sourceMappingURL=select_control_value_accessor.js.map

/***/ },
/* 357 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * @license
	 * Copyright Google Inc. All Rights Reserved.
	 *
	 * Use of this source code is governed by an MIT-style license that can be
	 * found in the LICENSE file at https://angular.io/license
	 */
	"use strict";
	var core_1 = __webpack_require__(5);
	var collection_1 = __webpack_require__(345);
	var lang_1 = __webpack_require__(339);
	var control_value_accessor_1 = __webpack_require__(337);
	var SELECT_MULTIPLE_VALUE_ACCESSOR = {
	    provide: control_value_accessor_1.NG_VALUE_ACCESSOR,
	    useExisting: core_1.forwardRef(function () { return SelectMultipleControlValueAccessor; }),
	    multi: true
	};
	function _buildValueString(id, value) {
	    if (lang_1.isBlank(id))
	        return "" + value;
	    if (lang_1.isString(value))
	        value = "'" + value + "'";
	    if (!lang_1.isPrimitive(value))
	        value = 'Object';
	    return lang_1.StringWrapper.slice(id + ": " + value, 0, 50);
	}
	function _extractId(valueString) {
	    return valueString.split(':')[0];
	}
	/** Mock interface for HTMLCollection */
	var HTMLCollection = (function () {
	    function HTMLCollection() {
	    }
	    return HTMLCollection;
	}());
	var SelectMultipleControlValueAccessor = (function () {
	    function SelectMultipleControlValueAccessor() {
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
	    /** @internal */
	    SelectMultipleControlValueAccessor.prototype._registerOption = function (value) {
	        var id = (this._idCounter++).toString();
	        this._optionMap.set(id, value);
	        return id;
	    };
	    /** @internal */
	    SelectMultipleControlValueAccessor.prototype._getOptionId = function (value) {
	        for (var _i = 0, _a = collection_1.MapWrapper.keys(this._optionMap); _i < _a.length; _i++) {
	            var id = _a[_i];
	            if (lang_1.looseIdentical(this._optionMap.get(id)._value, value))
	                return id;
	        }
	        return null;
	    };
	    /** @internal */
	    SelectMultipleControlValueAccessor.prototype._getOptionValue = function (valueString) {
	        var opt = this._optionMap.get(_extractId(valueString));
	        return lang_1.isPresent(opt) ? opt._value : valueString;
	    };
	    /** @nocollapse */
	    SelectMultipleControlValueAccessor.decorators = [
	        { type: core_1.Directive, args: [{
	                    selector: 'select[multiple][formControlName],select[multiple][formControl],select[multiple][ngModel]',
	                    host: { '(input)': 'onChange($event.target)', '(blur)': 'onTouched()' },
	                    providers: [SELECT_MULTIPLE_VALUE_ACCESSOR]
	                },] },
	    ];
	    /** @nocollapse */
	    SelectMultipleControlValueAccessor.ctorParameters = [];
	    return SelectMultipleControlValueAccessor;
	}());
	exports.SelectMultipleControlValueAccessor = SelectMultipleControlValueAccessor;
	var NgSelectMultipleOption = (function () {
	    function NgSelectMultipleOption(_element, _renderer, _select) {
	        this._element = _element;
	        this._renderer = _renderer;
	        this._select = _select;
	        if (lang_1.isPresent(this._select)) {
	            this.id = this._select._registerOption(this);
	        }
	    }
	    Object.defineProperty(NgSelectMultipleOption.prototype, "ngValue", {
	        set: function (value) {
	            if (this._select == null)
	                return;
	            this._value = value;
	            this._setElementValue(_buildValueString(this.id, value));
	            this._select.writeValue(this._select.value);
	        },
	        enumerable: true,
	        configurable: true
	    });
	    Object.defineProperty(NgSelectMultipleOption.prototype, "value", {
	        set: function (value) {
	            if (lang_1.isPresent(this._select)) {
	                this._value = value;
	                this._setElementValue(_buildValueString(this.id, value));
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
	        if (lang_1.isPresent(this._select)) {
	            this._select._optionMap.delete(this.id);
	            this._select.writeValue(this._select.value);
	        }
	    };
	    /** @nocollapse */
	    NgSelectMultipleOption.decorators = [
	        { type: core_1.Directive, args: [{ selector: 'option' },] },
	    ];
	    /** @nocollapse */
	    NgSelectMultipleOption.ctorParameters = [
	        { type: core_1.ElementRef, },
	        { type: core_1.Renderer, },
	        { type: SelectMultipleControlValueAccessor, decorators: [{ type: core_1.Optional }, { type: core_1.Host },] },
	    ];
	    /** @nocollapse */
	    NgSelectMultipleOption.propDecorators = {
	        'ngValue': [{ type: core_1.Input, args: ['ngValue',] },],
	        'value': [{ type: core_1.Input, args: ['value',] },],
	    };
	    return NgSelectMultipleOption;
	}());
	exports.NgSelectMultipleOption = NgSelectMultipleOption;
	exports.SELECT_DIRECTIVES = [SelectMultipleControlValueAccessor, NgSelectMultipleOption];
	//# sourceMappingURL=select_multiple_control_value_accessor.js.map

/***/ },
/* 358 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * @license
	 * Copyright Google Inc. All Rights Reserved.
	 *
	 * Use of this source code is governed by an MIT-style license that can be
	 * found in the LICENSE file at https://angular.io/license
	 */
	"use strict";
	var __extends = (this && this.__extends) || function (d, b) {
	    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	    function __() { this.constructor = d; }
	    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	};
	var abstract_control_directive_1 = __webpack_require__(346);
	/**
	 * A directive that contains multiple {@link NgControl}s.
	 *
	 * Only used by the forms module.
	 *
	 * @experimental
	 */
	var ControlContainer = (function (_super) {
	    __extends(ControlContainer, _super);
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
	}(abstract_control_directive_1.AbstractControlDirective));
	exports.ControlContainer = ControlContainer;
	//# sourceMappingURL=control_container.js.map

/***/ },
/* 359 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * @license
	 * Copyright Google Inc. All Rights Reserved.
	 *
	 * Use of this source code is governed by an MIT-style license that can be
	 * found in the LICENSE file at https://angular.io/license
	 */
	"use strict";
	var __extends = (this && this.__extends) || function (d, b) {
	    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	    function __() { this.constructor = d; }
	    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	};
	var core_1 = __webpack_require__(5);
	var async_1 = __webpack_require__(348);
	var exceptions_1 = __webpack_require__(342);
	var model_1 = __webpack_require__(350);
	var validators_1 = __webpack_require__(352);
	var control_container_1 = __webpack_require__(358);
	var control_value_accessor_1 = __webpack_require__(337);
	var ng_control_1 = __webpack_require__(341);
	var shared_1 = __webpack_require__(351);
	exports.formControlBinding = 
	/*@ts2dart_const*/ /* @ts2dart_Provider */ {
	    provide: ng_control_1.NgControl,
	    useExisting: core_1.forwardRef(function () { return NgModel; })
	};
	var NgModel = (function (_super) {
	    __extends(NgModel, _super);
	    function NgModel(_parent, _validators, _asyncValidators, valueAccessors) {
	        _super.call(this);
	        this._parent = _parent;
	        this._validators = _validators;
	        this._asyncValidators = _asyncValidators;
	        /** @internal */
	        this._control = new model_1.FormControl();
	        /** @internal */
	        this._registered = false;
	        this.update = new async_1.EventEmitter();
	        this.valueAccessor = shared_1.selectValueAccessor(this, valueAccessors);
	    }
	    NgModel.prototype.ngOnChanges = function (changes) {
	        this._checkName();
	        if (!this._registered)
	            this._setUpControl();
	        if (shared_1.isPropertyUpdated(changes, this.viewModel)) {
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
	            return this._parent ? shared_1.controlPath(this.name, this._parent) : [];
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
	        get: function () { return shared_1.composeValidators(this._validators); },
	        enumerable: true,
	        configurable: true
	    });
	    Object.defineProperty(NgModel.prototype, "asyncValidator", {
	        get: function () {
	            return shared_1.composeAsyncValidators(this._asyncValidators);
	        },
	        enumerable: true,
	        configurable: true
	    });
	    NgModel.prototype.viewToModelUpdate = function (newValue) {
	        this.viewModel = newValue;
	        async_1.ObservableWrapper.callEmit(this.update, newValue);
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
	        shared_1.setUpControl(this._control, this);
	        this._control.updateValueAndValidity({ emitEvent: false });
	    };
	    NgModel.prototype._checkName = function () {
	        if (this.options && this.options.name)
	            this.name = this.options.name;
	        if (!this._isStandalone() && !this.name) {
	            throw new exceptions_1.BaseException("If ngModel is used within a form tag, either the name attribute must be set\n                      or the form control must be defined as 'standalone' in ngModelOptions.\n\n                      Example 1: <input [(ngModel)]=\"person.firstName\" name=\"first\">\n                      Example 2: <input [(ngModel)]=\"person.firstName\" [ngModelOptions]=\"{standalone: true}\">\n                   ");
	        }
	    };
	    NgModel.prototype._updateValue = function (value) {
	        var _this = this;
	        async_1.PromiseWrapper.scheduleMicrotask(function () { _this.control.updateValue(value); });
	    };
	    /** @nocollapse */
	    NgModel.decorators = [
	        { type: core_1.Directive, args: [{
	                    selector: '[ngModel]:not([formControlName]):not([formControl])',
	                    providers: [exports.formControlBinding],
	                    exportAs: 'ngModel'
	                },] },
	    ];
	    /** @nocollapse */
	    NgModel.ctorParameters = [
	        { type: control_container_1.ControlContainer, decorators: [{ type: core_1.Optional }, { type: core_1.Host },] },
	        { type: Array, decorators: [{ type: core_1.Optional }, { type: core_1.Self }, { type: core_1.Inject, args: [validators_1.NG_VALIDATORS,] },] },
	        { type: Array, decorators: [{ type: core_1.Optional }, { type: core_1.Self }, { type: core_1.Inject, args: [validators_1.NG_ASYNC_VALIDATORS,] },] },
	        { type: Array, decorators: [{ type: core_1.Optional }, { type: core_1.Self }, { type: core_1.Inject, args: [control_value_accessor_1.NG_VALUE_ACCESSOR,] },] },
	    ];
	    /** @nocollapse */
	    NgModel.propDecorators = {
	        'model': [{ type: core_1.Input, args: ['ngModel',] },],
	        'name': [{ type: core_1.Input },],
	        'options': [{ type: core_1.Input, args: ['ngModelOptions',] },],
	        'update': [{ type: core_1.Output, args: ['ngModelChange',] },],
	    };
	    return NgModel;
	}(ng_control_1.NgControl));
	exports.NgModel = NgModel;
	//# sourceMappingURL=ng_model.js.map

/***/ },
/* 360 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * @license
	 * Copyright Google Inc. All Rights Reserved.
	 *
	 * Use of this source code is governed by an MIT-style license that can be
	 * found in the LICENSE file at https://angular.io/license
	 */
	"use strict";
	var __extends = (this && this.__extends) || function (d, b) {
	    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	    function __() { this.constructor = d; }
	    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	};
	var core_1 = __webpack_require__(5);
	var validators_1 = __webpack_require__(352);
	var abstract_form_group_directive_1 = __webpack_require__(361);
	var control_container_1 = __webpack_require__(358);
	exports.modelGroupProvider = 
	/*@ts2dart_const*/ /* @ts2dart_Provider */ {
	    provide: control_container_1.ControlContainer,
	    useExisting: core_1.forwardRef(function () { return NgModelGroup; })
	};
	var NgModelGroup = (function (_super) {
	    __extends(NgModelGroup, _super);
	    function NgModelGroup(parent, validators, asyncValidators) {
	        _super.call(this);
	        this._parent = parent;
	        this._validators = validators;
	        this._asyncValidators = asyncValidators;
	    }
	    /** @nocollapse */
	    NgModelGroup.decorators = [
	        { type: core_1.Directive, args: [{ selector: '[ngModelGroup]', providers: [exports.modelGroupProvider], exportAs: 'ngModelGroup' },] },
	    ];
	    /** @nocollapse */
	    NgModelGroup.ctorParameters = [
	        { type: control_container_1.ControlContainer, decorators: [{ type: core_1.Host }, { type: core_1.SkipSelf },] },
	        { type: Array, decorators: [{ type: core_1.Optional }, { type: core_1.Self }, { type: core_1.Inject, args: [validators_1.NG_VALIDATORS,] },] },
	        { type: Array, decorators: [{ type: core_1.Optional }, { type: core_1.Self }, { type: core_1.Inject, args: [validators_1.NG_ASYNC_VALIDATORS,] },] },
	    ];
	    /** @nocollapse */
	    NgModelGroup.propDecorators = {
	        'name': [{ type: core_1.Input, args: ['ngModelGroup',] },],
	    };
	    return NgModelGroup;
	}(abstract_form_group_directive_1.AbstractFormGroupDirective));
	exports.NgModelGroup = NgModelGroup;
	//# sourceMappingURL=ng_model_group.js.map

/***/ },
/* 361 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * @license
	 * Copyright Google Inc. All Rights Reserved.
	 *
	 * Use of this source code is governed by an MIT-style license that can be
	 * found in the LICENSE file at https://angular.io/license
	 */
	"use strict";
	var __extends = (this && this.__extends) || function (d, b) {
	    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	    function __() { this.constructor = d; }
	    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	};
	var control_container_1 = __webpack_require__(358);
	var shared_1 = __webpack_require__(351);
	/**
	  This is a base class for code shared between {@link NgModelGroup} and {@link FormGroupName}.
	 */
	var AbstractFormGroupDirective = (function (_super) {
	    __extends(AbstractFormGroupDirective, _super);
	    function AbstractFormGroupDirective() {
	        _super.apply(this, arguments);
	    }
	    AbstractFormGroupDirective.prototype.ngOnInit = function () { this.formDirective.addFormGroup(this); };
	    AbstractFormGroupDirective.prototype.ngOnDestroy = function () { this.formDirective.removeFormGroup(this); };
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
	        get: function () { return shared_1.controlPath(this.name, this._parent); },
	        enumerable: true,
	        configurable: true
	    });
	    Object.defineProperty(AbstractFormGroupDirective.prototype, "formDirective", {
	        /**
	         * Get the {@link Form} to which this group belongs.
	         */
	        get: function () { return this._parent.formDirective; },
	        enumerable: true,
	        configurable: true
	    });
	    Object.defineProperty(AbstractFormGroupDirective.prototype, "validator", {
	        get: function () { return shared_1.composeValidators(this._validators); },
	        enumerable: true,
	        configurable: true
	    });
	    Object.defineProperty(AbstractFormGroupDirective.prototype, "asyncValidator", {
	        get: function () { return shared_1.composeAsyncValidators(this._asyncValidators); },
	        enumerable: true,
	        configurable: true
	    });
	    return AbstractFormGroupDirective;
	}(control_container_1.ControlContainer));
	exports.AbstractFormGroupDirective = AbstractFormGroupDirective;
	//# sourceMappingURL=abstract_form_group_directive.js.map

/***/ },
/* 362 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * @license
	 * Copyright Google Inc. All Rights Reserved.
	 *
	 * Use of this source code is governed by an MIT-style license that can be
	 * found in the LICENSE file at https://angular.io/license
	 */
	"use strict";
	var __extends = (this && this.__extends) || function (d, b) {
	    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	    function __() { this.constructor = d; }
	    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	};
	var core_1 = __webpack_require__(5);
	var validators_1 = __webpack_require__(352);
	var control_container_1 = __webpack_require__(358);
	var shared_1 = __webpack_require__(351);
	exports.formArrayNameProvider = 
	/*@ts2dart_const*/ /* @ts2dart_Provider */ {
	    provide: control_container_1.ControlContainer,
	    useExisting: core_1.forwardRef(function () { return FormArrayName; })
	};
	var FormArrayName = (function (_super) {
	    __extends(FormArrayName, _super);
	    function FormArrayName(parent, validators, asyncValidators) {
	        _super.call(this);
	        this._parent = parent;
	        this._validators = validators;
	        this._asyncValidators = asyncValidators;
	    }
	    FormArrayName.prototype.ngOnInit = function () { this.formDirective.addFormArray(this); };
	    FormArrayName.prototype.ngOnDestroy = function () { this.formDirective.removeFormArray(this); };
	    Object.defineProperty(FormArrayName.prototype, "control", {
	        get: function () { return this.formDirective.getFormArray(this); },
	        enumerable: true,
	        configurable: true
	    });
	    Object.defineProperty(FormArrayName.prototype, "formDirective", {
	        get: function () { return this._parent.formDirective; },
	        enumerable: true,
	        configurable: true
	    });
	    Object.defineProperty(FormArrayName.prototype, "path", {
	        get: function () { return shared_1.controlPath(this.name, this._parent); },
	        enumerable: true,
	        configurable: true
	    });
	    Object.defineProperty(FormArrayName.prototype, "validator", {
	        get: function () { return shared_1.composeValidators(this._validators); },
	        enumerable: true,
	        configurable: true
	    });
	    Object.defineProperty(FormArrayName.prototype, "asyncValidator", {
	        get: function () { return shared_1.composeAsyncValidators(this._asyncValidators); },
	        enumerable: true,
	        configurable: true
	    });
	    /** @nocollapse */
	    FormArrayName.decorators = [
	        { type: core_1.Directive, args: [{ selector: '[formArrayName]', providers: [exports.formArrayNameProvider] },] },
	    ];
	    /** @nocollapse */
	    FormArrayName.ctorParameters = [
	        { type: control_container_1.ControlContainer, decorators: [{ type: core_1.Host }, { type: core_1.SkipSelf },] },
	        { type: Array, decorators: [{ type: core_1.Optional }, { type: core_1.Self }, { type: core_1.Inject, args: [validators_1.NG_VALIDATORS,] },] },
	        { type: Array, decorators: [{ type: core_1.Optional }, { type: core_1.Self }, { type: core_1.Inject, args: [validators_1.NG_ASYNC_VALIDATORS,] },] },
	    ];
	    /** @nocollapse */
	    FormArrayName.propDecorators = {
	        'name': [{ type: core_1.Input, args: ['formArrayName',] },],
	    };
	    return FormArrayName;
	}(control_container_1.ControlContainer));
	exports.FormArrayName = FormArrayName;
	//# sourceMappingURL=form_array_name.js.map

/***/ },
/* 363 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * @license
	 * Copyright Google Inc. All Rights Reserved.
	 *
	 * Use of this source code is governed by an MIT-style license that can be
	 * found in the LICENSE file at https://angular.io/license
	 */
	"use strict";
	var __extends = (this && this.__extends) || function (d, b) {
	    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	    function __() { this.constructor = d; }
	    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	};
	var core_1 = __webpack_require__(5);
	var async_1 = __webpack_require__(348);
	var collection_1 = __webpack_require__(345);
	var validators_1 = __webpack_require__(352);
	var control_value_accessor_1 = __webpack_require__(337);
	var ng_control_1 = __webpack_require__(341);
	var shared_1 = __webpack_require__(351);
	exports.formControlBinding = 
	/*@ts2dart_const*/ /* @ts2dart_Provider */ {
	    provide: ng_control_1.NgControl,
	    useExisting: core_1.forwardRef(function () { return FormControlDirective; })
	};
	var FormControlDirective = (function (_super) {
	    __extends(FormControlDirective, _super);
	    function FormControlDirective(_validators, _asyncValidators, valueAccessors) {
	        _super.call(this);
	        this._validators = _validators;
	        this._asyncValidators = _asyncValidators;
	        this.update = new async_1.EventEmitter();
	        this.valueAccessor = shared_1.selectValueAccessor(this, valueAccessors);
	    }
	    FormControlDirective.prototype.ngOnChanges = function (changes) {
	        if (this._isControlChanged(changes)) {
	            shared_1.setUpControl(this.form, this);
	            this.form.updateValueAndValidity({ emitEvent: false });
	        }
	        if (shared_1.isPropertyUpdated(changes, this.viewModel)) {
	            this.form.updateValue(this.model);
	            this.viewModel = this.model;
	        }
	    };
	    Object.defineProperty(FormControlDirective.prototype, "path", {
	        get: function () { return []; },
	        enumerable: true,
	        configurable: true
	    });
	    Object.defineProperty(FormControlDirective.prototype, "validator", {
	        get: function () { return shared_1.composeValidators(this._validators); },
	        enumerable: true,
	        configurable: true
	    });
	    Object.defineProperty(FormControlDirective.prototype, "asyncValidator", {
	        get: function () {
	            return shared_1.composeAsyncValidators(this._asyncValidators);
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
	        async_1.ObservableWrapper.callEmit(this.update, newValue);
	    };
	    FormControlDirective.prototype._isControlChanged = function (changes) {
	        return collection_1.StringMapWrapper.contains(changes, 'form');
	    };
	    /** @nocollapse */
	    FormControlDirective.decorators = [
	        { type: core_1.Directive, args: [{ selector: '[formControl]', providers: [exports.formControlBinding], exportAs: 'ngForm' },] },
	    ];
	    /** @nocollapse */
	    FormControlDirective.ctorParameters = [
	        { type: Array, decorators: [{ type: core_1.Optional }, { type: core_1.Self }, { type: core_1.Inject, args: [validators_1.NG_VALIDATORS,] },] },
	        { type: Array, decorators: [{ type: core_1.Optional }, { type: core_1.Self }, { type: core_1.Inject, args: [validators_1.NG_ASYNC_VALIDATORS,] },] },
	        { type: Array, decorators: [{ type: core_1.Optional }, { type: core_1.Self }, { type: core_1.Inject, args: [control_value_accessor_1.NG_VALUE_ACCESSOR,] },] },
	    ];
	    /** @nocollapse */
	    FormControlDirective.propDecorators = {
	        'form': [{ type: core_1.Input, args: ['formControl',] },],
	        'model': [{ type: core_1.Input, args: ['ngModel',] },],
	        'update': [{ type: core_1.Output, args: ['ngModelChange',] },],
	    };
	    return FormControlDirective;
	}(ng_control_1.NgControl));
	exports.FormControlDirective = FormControlDirective;
	//# sourceMappingURL=form_control_directive.js.map

/***/ },
/* 364 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * @license
	 * Copyright Google Inc. All Rights Reserved.
	 *
	 * Use of this source code is governed by an MIT-style license that can be
	 * found in the LICENSE file at https://angular.io/license
	 */
	"use strict";
	var __extends = (this && this.__extends) || function (d, b) {
	    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	    function __() { this.constructor = d; }
	    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	};
	var core_1 = __webpack_require__(5);
	var async_1 = __webpack_require__(348);
	var validators_1 = __webpack_require__(352);
	var control_container_1 = __webpack_require__(358);
	var control_value_accessor_1 = __webpack_require__(337);
	var ng_control_1 = __webpack_require__(341);
	var shared_1 = __webpack_require__(351);
	exports.controlNameBinding = 
	/*@ts2dart_const*/ /* @ts2dart_Provider */ {
	    provide: ng_control_1.NgControl,
	    useExisting: core_1.forwardRef(function () { return FormControlName; })
	};
	var FormControlName = (function (_super) {
	    __extends(FormControlName, _super);
	    function FormControlName(_parent, _validators, _asyncValidators, valueAccessors) {
	        _super.call(this);
	        this._parent = _parent;
	        this._validators = _validators;
	        this._asyncValidators = _asyncValidators;
	        this._added = false;
	        this.update = new async_1.EventEmitter();
	        this.valueAccessor = shared_1.selectValueAccessor(this, valueAccessors);
	    }
	    FormControlName.prototype.ngOnChanges = function (changes) {
	        if (!this._added) {
	            this.formDirective.addControl(this);
	            this._added = true;
	        }
	        if (shared_1.isPropertyUpdated(changes, this.viewModel)) {
	            this.viewModel = this.model;
	            this.formDirective.updateModel(this, this.model);
	        }
	    };
	    FormControlName.prototype.ngOnDestroy = function () { this.formDirective.removeControl(this); };
	    FormControlName.prototype.viewToModelUpdate = function (newValue) {
	        this.viewModel = newValue;
	        async_1.ObservableWrapper.callEmit(this.update, newValue);
	    };
	    Object.defineProperty(FormControlName.prototype, "path", {
	        get: function () { return shared_1.controlPath(this.name, this._parent); },
	        enumerable: true,
	        configurable: true
	    });
	    Object.defineProperty(FormControlName.prototype, "formDirective", {
	        get: function () { return this._parent.formDirective; },
	        enumerable: true,
	        configurable: true
	    });
	    Object.defineProperty(FormControlName.prototype, "validator", {
	        get: function () { return shared_1.composeValidators(this._validators); },
	        enumerable: true,
	        configurable: true
	    });
	    Object.defineProperty(FormControlName.prototype, "asyncValidator", {
	        get: function () {
	            return shared_1.composeAsyncValidators(this._asyncValidators);
	        },
	        enumerable: true,
	        configurable: true
	    });
	    Object.defineProperty(FormControlName.prototype, "control", {
	        get: function () { return this.formDirective.getControl(this); },
	        enumerable: true,
	        configurable: true
	    });
	    /** @nocollapse */
	    FormControlName.decorators = [
	        { type: core_1.Directive, args: [{ selector: '[formControlName]', providers: [exports.controlNameBinding] },] },
	    ];
	    /** @nocollapse */
	    FormControlName.ctorParameters = [
	        { type: control_container_1.ControlContainer, decorators: [{ type: core_1.Host }, { type: core_1.SkipSelf },] },
	        { type: Array, decorators: [{ type: core_1.Optional }, { type: core_1.Self }, { type: core_1.Inject, args: [validators_1.NG_VALIDATORS,] },] },
	        { type: Array, decorators: [{ type: core_1.Optional }, { type: core_1.Self }, { type: core_1.Inject, args: [validators_1.NG_ASYNC_VALIDATORS,] },] },
	        { type: Array, decorators: [{ type: core_1.Optional }, { type: core_1.Self }, { type: core_1.Inject, args: [control_value_accessor_1.NG_VALUE_ACCESSOR,] },] },
	    ];
	    /** @nocollapse */
	    FormControlName.propDecorators = {
	        'name': [{ type: core_1.Input, args: ['formControlName',] },],
	        'model': [{ type: core_1.Input, args: ['ngModel',] },],
	        'update': [{ type: core_1.Output, args: ['ngModelChange',] },],
	    };
	    return FormControlName;
	}(ng_control_1.NgControl));
	exports.FormControlName = FormControlName;
	//# sourceMappingURL=form_control_name.js.map

/***/ },
/* 365 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * @license
	 * Copyright Google Inc. All Rights Reserved.
	 *
	 * Use of this source code is governed by an MIT-style license that can be
	 * found in the LICENSE file at https://angular.io/license
	 */
	"use strict";
	var __extends = (this && this.__extends) || function (d, b) {
	    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	    function __() { this.constructor = d; }
	    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	};
	var core_1 = __webpack_require__(5);
	var async_1 = __webpack_require__(348);
	var collection_1 = __webpack_require__(345);
	var exceptions_1 = __webpack_require__(342);
	var lang_1 = __webpack_require__(339);
	var validators_1 = __webpack_require__(352);
	var control_container_1 = __webpack_require__(358);
	var shared_1 = __webpack_require__(351);
	exports.formDirectiveProvider = 
	/*@ts2dart_const*/ /* @ts2dart_Provider */ {
	    provide: control_container_1.ControlContainer,
	    useExisting: core_1.forwardRef(function () { return FormGroupDirective; })
	};
	var FormGroupDirective = (function (_super) {
	    __extends(FormGroupDirective, _super);
	    function FormGroupDirective(_validators, _asyncValidators) {
	        _super.call(this);
	        this._validators = _validators;
	        this._asyncValidators = _asyncValidators;
	        this._submitted = false;
	        this.directives = [];
	        this.form = null;
	        this.ngSubmit = new async_1.EventEmitter();
	    }
	    FormGroupDirective.prototype.ngOnChanges = function (changes) {
	        this._checkFormPresent();
	        if (collection_1.StringMapWrapper.contains(changes, 'form')) {
	            var sync = shared_1.composeValidators(this._validators);
	            this.form.validator = validators_1.Validators.compose([this.form.validator, sync]);
	            var async = shared_1.composeAsyncValidators(this._asyncValidators);
	            this.form.asyncValidator = validators_1.Validators.composeAsync([this.form.asyncValidator, async]);
	            this.form.updateValueAndValidity({ onlySelf: true, emitEvent: false });
	        }
	        this._updateDomValue();
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
	        var ctrl = this.form.find(dir.path);
	        shared_1.setUpControl(ctrl, dir);
	        ctrl.updateValueAndValidity({ emitEvent: false });
	        this.directives.push(dir);
	    };
	    FormGroupDirective.prototype.getControl = function (dir) { return this.form.find(dir.path); };
	    FormGroupDirective.prototype.removeControl = function (dir) { collection_1.ListWrapper.remove(this.directives, dir); };
	    FormGroupDirective.prototype.addFormGroup = function (dir) {
	        var ctrl = this.form.find(dir.path);
	        shared_1.setUpFormContainer(ctrl, dir);
	        ctrl.updateValueAndValidity({ emitEvent: false });
	    };
	    FormGroupDirective.prototype.removeFormGroup = function (dir) { };
	    FormGroupDirective.prototype.getFormGroup = function (dir) { return this.form.find(dir.path); };
	    FormGroupDirective.prototype.addFormArray = function (dir) {
	        var ctrl = this.form.find(dir.path);
	        shared_1.setUpFormContainer(ctrl, dir);
	        ctrl.updateValueAndValidity({ emitEvent: false });
	    };
	    FormGroupDirective.prototype.removeFormArray = function (dir) { };
	    FormGroupDirective.prototype.getFormArray = function (dir) { return this.form.find(dir.path); };
	    FormGroupDirective.prototype.updateModel = function (dir, value) {
	        var ctrl = this.form.find(dir.path);
	        ctrl.updateValue(value);
	    };
	    FormGroupDirective.prototype.onSubmit = function () {
	        this._submitted = true;
	        async_1.ObservableWrapper.callEmit(this.ngSubmit, null);
	        return false;
	    };
	    /** @internal */
	    FormGroupDirective.prototype._updateDomValue = function () {
	        var _this = this;
	        this.directives.forEach(function (dir) {
	            var ctrl = _this.form.find(dir.path);
	            dir.valueAccessor.writeValue(ctrl.value);
	        });
	    };
	    FormGroupDirective.prototype._checkFormPresent = function () {
	        if (lang_1.isBlank(this.form)) {
	            throw new exceptions_1.BaseException("formGroup expects a FormGroup instance. Please pass one in.\n           Example: <form [formGroup]=\"myFormGroup\">\n      ");
	        }
	    };
	    /** @nocollapse */
	    FormGroupDirective.decorators = [
	        { type: core_1.Directive, args: [{
	                    selector: '[formGroup]',
	                    providers: [exports.formDirectiveProvider],
	                    host: { '(submit)': 'onSubmit()' },
	                    exportAs: 'ngForm'
	                },] },
	    ];
	    /** @nocollapse */
	    FormGroupDirective.ctorParameters = [
	        { type: Array, decorators: [{ type: core_1.Optional }, { type: core_1.Self }, { type: core_1.Inject, args: [validators_1.NG_VALIDATORS,] },] },
	        { type: Array, decorators: [{ type: core_1.Optional }, { type: core_1.Self }, { type: core_1.Inject, args: [validators_1.NG_ASYNC_VALIDATORS,] },] },
	    ];
	    /** @nocollapse */
	    FormGroupDirective.propDecorators = {
	        'form': [{ type: core_1.Input, args: ['formGroup',] },],
	        'ngSubmit': [{ type: core_1.Output },],
	    };
	    return FormGroupDirective;
	}(control_container_1.ControlContainer));
	exports.FormGroupDirective = FormGroupDirective;
	//# sourceMappingURL=form_group_directive.js.map

/***/ },
/* 366 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * @license
	 * Copyright Google Inc. All Rights Reserved.
	 *
	 * Use of this source code is governed by an MIT-style license that can be
	 * found in the LICENSE file at https://angular.io/license
	 */
	"use strict";
	var __extends = (this && this.__extends) || function (d, b) {
	    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	    function __() { this.constructor = d; }
	    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	};
	var core_1 = __webpack_require__(5);
	var validators_1 = __webpack_require__(352);
	var abstract_form_group_directive_1 = __webpack_require__(361);
	var control_container_1 = __webpack_require__(358);
	exports.formGroupNameProvider = 
	/*@ts2dart_const*/ /* @ts2dart_Provider */ {
	    provide: control_container_1.ControlContainer,
	    useExisting: core_1.forwardRef(function () { return FormGroupName; })
	};
	var FormGroupName = (function (_super) {
	    __extends(FormGroupName, _super);
	    function FormGroupName(parent, validators, asyncValidators) {
	        _super.call(this);
	        this._parent = parent;
	        this._validators = validators;
	        this._asyncValidators = asyncValidators;
	    }
	    /** @nocollapse */
	    FormGroupName.decorators = [
	        { type: core_1.Directive, args: [{ selector: '[formGroupName]', providers: [exports.formGroupNameProvider] },] },
	    ];
	    /** @nocollapse */
	    FormGroupName.ctorParameters = [
	        { type: control_container_1.ControlContainer, decorators: [{ type: core_1.Host }, { type: core_1.SkipSelf },] },
	        { type: Array, decorators: [{ type: core_1.Optional }, { type: core_1.Self }, { type: core_1.Inject, args: [validators_1.NG_VALIDATORS,] },] },
	        { type: Array, decorators: [{ type: core_1.Optional }, { type: core_1.Self }, { type: core_1.Inject, args: [validators_1.NG_ASYNC_VALIDATORS,] },] },
	    ];
	    /** @nocollapse */
	    FormGroupName.propDecorators = {
	        'name': [{ type: core_1.Input, args: ['formGroupName',] },],
	    };
	    return FormGroupName;
	}(abstract_form_group_directive_1.AbstractFormGroupDirective));
	exports.FormGroupName = FormGroupName;
	//# sourceMappingURL=form_group_name.js.map

/***/ },
/* 367 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * @license
	 * Copyright Google Inc. All Rights Reserved.
	 *
	 * Use of this source code is governed by an MIT-style license that can be
	 * found in the LICENSE file at https://angular.io/license
	 */
	"use strict";
	var core_1 = __webpack_require__(5);
	var lang_1 = __webpack_require__(339);
	var validators_1 = __webpack_require__(352);
	var REQUIRED = validators_1.Validators.required;
	exports.REQUIRED_VALIDATOR = {
	    provide: validators_1.NG_VALIDATORS,
	    useValue: REQUIRED,
	    multi: true
	};
	var RequiredValidator = (function () {
	    function RequiredValidator() {
	    }
	    /** @nocollapse */
	    RequiredValidator.decorators = [
	        { type: core_1.Directive, args: [{
	                    selector: '[required][formControlName],[required][formControl],[required][ngModel]',
	                    providers: [exports.REQUIRED_VALIDATOR]
	                },] },
	    ];
	    return RequiredValidator;
	}());
	exports.RequiredValidator = RequiredValidator;
	/**
	 * Provivder which adds {@link MinLengthValidator} to {@link NG_VALIDATORS}.
	 *
	 * ## Example:
	 *
	 * {@example common/forms/ts/validators/validators.ts region='min'}
	 */
	exports.MIN_LENGTH_VALIDATOR = {
	    provide: validators_1.NG_VALIDATORS,
	    useExisting: core_1.forwardRef(function () { return MinLengthValidator; }),
	    multi: true
	};
	var MinLengthValidator = (function () {
	    function MinLengthValidator(minLength) {
	        this._validator = validators_1.Validators.minLength(lang_1.NumberWrapper.parseInt(minLength, 10));
	    }
	    MinLengthValidator.prototype.validate = function (c) { return this._validator(c); };
	    /** @nocollapse */
	    MinLengthValidator.decorators = [
	        { type: core_1.Directive, args: [{
	                    selector: '[minlength][formControlName],[minlength][formControl],[minlength][ngModel]',
	                    providers: [exports.MIN_LENGTH_VALIDATOR]
	                },] },
	    ];
	    /** @nocollapse */
	    MinLengthValidator.ctorParameters = [
	        { type: undefined, decorators: [{ type: core_1.Attribute, args: ['minlength',] },] },
	    ];
	    return MinLengthValidator;
	}());
	exports.MinLengthValidator = MinLengthValidator;
	/**
	 * Provider which adds {@link MaxLengthValidator} to {@link NG_VALIDATORS}.
	 *
	 * ## Example:
	 *
	 * {@example common/forms/ts/validators/validators.ts region='max'}
	 */
	exports.MAX_LENGTH_VALIDATOR = {
	    provide: validators_1.NG_VALIDATORS,
	    useExisting: core_1.forwardRef(function () { return MaxLengthValidator; }),
	    multi: true
	};
	var MaxLengthValidator = (function () {
	    function MaxLengthValidator(maxLength) {
	        this._validator = validators_1.Validators.maxLength(lang_1.NumberWrapper.parseInt(maxLength, 10));
	    }
	    MaxLengthValidator.prototype.validate = function (c) { return this._validator(c); };
	    /** @nocollapse */
	    MaxLengthValidator.decorators = [
	        { type: core_1.Directive, args: [{
	                    selector: '[maxlength][formControlName],[maxlength][formControl],[maxlength][ngModel]',
	                    providers: [exports.MAX_LENGTH_VALIDATOR]
	                },] },
	    ];
	    /** @nocollapse */
	    MaxLengthValidator.ctorParameters = [
	        { type: undefined, decorators: [{ type: core_1.Attribute, args: ['maxlength',] },] },
	    ];
	    return MaxLengthValidator;
	}());
	exports.MaxLengthValidator = MaxLengthValidator;
	exports.PATTERN_VALIDATOR = {
	    provide: validators_1.NG_VALIDATORS,
	    useExisting: core_1.forwardRef(function () { return PatternValidator; }),
	    multi: true
	};
	var PatternValidator = (function () {
	    function PatternValidator(pattern) {
	        this._validator = validators_1.Validators.pattern(pattern);
	    }
	    PatternValidator.prototype.validate = function (c) { return this._validator(c); };
	    /** @nocollapse */
	    PatternValidator.decorators = [
	        { type: core_1.Directive, args: [{
	                    selector: '[pattern][formControlName],[pattern][formControl],[pattern][ngModel]',
	                    providers: [exports.PATTERN_VALIDATOR]
	                },] },
	    ];
	    /** @nocollapse */
	    PatternValidator.ctorParameters = [
	        { type: undefined, decorators: [{ type: core_1.Attribute, args: ['pattern',] },] },
	    ];
	    return PatternValidator;
	}());
	exports.PatternValidator = PatternValidator;
	//# sourceMappingURL=validators.js.map

/***/ },
/* 368 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * @license
	 * Copyright Google Inc. All Rights Reserved.
	 *
	 * Use of this source code is governed by an MIT-style license that can be
	 * found in the LICENSE file at https://angular.io/license
	 */
	"use strict";
	var core_1 = __webpack_require__(5);
	var collection_1 = __webpack_require__(345);
	var lang_1 = __webpack_require__(339);
	var model_1 = __webpack_require__(350);
	var FormBuilder = (function () {
	    function FormBuilder() {
	    }
	    /**
	     * Construct a new {@link FormGroup} with the given map of configuration.
	     * Valid keys for the `extra` parameter map are `optionals` and `validator`.
	     *
	     * See the {@link FormGroup} constructor for more details.
	     */
	    FormBuilder.prototype.group = function (controlsConfig, extra) {
	        if (extra === void 0) { extra = null; }
	        var controls = this._reduceControls(controlsConfig);
	        var optionals = (lang_1.isPresent(extra) ? collection_1.StringMapWrapper.get(extra, 'optionals') : null);
	        var validator = lang_1.isPresent(extra) ? collection_1.StringMapWrapper.get(extra, 'validator') : null;
	        var asyncValidator = lang_1.isPresent(extra) ? collection_1.StringMapWrapper.get(extra, 'asyncValidator') : null;
	        return new model_1.FormGroup(controls, optionals, validator, asyncValidator);
	    };
	    /**
	     * Construct a new {@link FormControl} with the given `value`,`validator`, and `asyncValidator`.
	     */
	    FormBuilder.prototype.control = function (value, validator, asyncValidator) {
	        if (validator === void 0) { validator = null; }
	        if (asyncValidator === void 0) { asyncValidator = null; }
	        return new model_1.FormControl(value, validator, asyncValidator);
	    };
	    /**
	     * Construct an array of {@link FormControl}s from the given `controlsConfig` array of
	     * configuration, with the given optional `validator` and `asyncValidator`.
	     */
	    FormBuilder.prototype.array = function (controlsConfig, validator, asyncValidator) {
	        var _this = this;
	        if (validator === void 0) { validator = null; }
	        if (asyncValidator === void 0) { asyncValidator = null; }
	        var controls = controlsConfig.map(function (c) { return _this._createControl(c); });
	        return new model_1.FormArray(controls, validator, asyncValidator);
	    };
	    /** @internal */
	    FormBuilder.prototype._reduceControls = function (controlsConfig) {
	        var _this = this;
	        var controls = {};
	        collection_1.StringMapWrapper.forEach(controlsConfig, function (controlConfig, controlName) {
	            controls[controlName] = _this._createControl(controlConfig);
	        });
	        return controls;
	    };
	    /** @internal */
	    FormBuilder.prototype._createControl = function (controlConfig) {
	        if (controlConfig instanceof model_1.FormControl || controlConfig instanceof model_1.FormGroup ||
	            controlConfig instanceof model_1.FormArray) {
	            return controlConfig;
	        }
	        else if (lang_1.isArray(controlConfig)) {
	            var value = controlConfig[0];
	            var validator = controlConfig.length > 1 ? controlConfig[1] : null;
	            var asyncValidator = controlConfig.length > 2 ? controlConfig[2] : null;
	            return this.control(value, validator, asyncValidator);
	        }
	        else {
	            return this.control(controlConfig);
	        }
	    };
	    /** @nocollapse */
	    FormBuilder.decorators = [
	        { type: core_1.Injectable },
	    ];
	    return FormBuilder;
	}());
	exports.FormBuilder = FormBuilder;
	//# sourceMappingURL=form_builder.js.map

/***/ },
/* 369 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * @license
	 * Copyright Google Inc. All Rights Reserved.
	 *
	 * Use of this source code is governed by an MIT-style license that can be
	 * found in the LICENSE file at https://angular.io/license
	 */
	"use strict";
	var common_1 = __webpack_require__(2);
	var compiler_1 = __webpack_require__(176);
	var core_1 = __webpack_require__(5);
	var directives_1 = __webpack_require__(335);
	var radio_control_value_accessor_1 = __webpack_require__(355);
	var collection_1 = __webpack_require__(345);
	var form_builder_1 = __webpack_require__(368);
	/**
	 * Shorthand set of providers used for building Angular forms.
	 *
	 * ### Example
	 *
	 * ```typescript
	 * bootstrap(MyApp, [FORM_PROVIDERS]);
	 * ```
	 *
	 * @experimental
	 */
	exports.FORM_PROVIDERS = [form_builder_1.FormBuilder, radio_control_value_accessor_1.RadioControlRegistry];
	function flatten(platformDirectives) {
	    var flattenedDirectives = [];
	    platformDirectives.forEach(function (directives) {
	        if (Array.isArray(directives)) {
	            flattenedDirectives = flattenedDirectives.concat(directives);
	        }
	        else {
	            flattenedDirectives.push(directives);
	        }
	    });
	    return flattenedDirectives;
	}
	/**
	 * @experimental
	 */
	function disableDeprecatedForms() {
	    return [{
	            provide: compiler_1.CompilerConfig,
	            useFactory: function (platformDirectives, platformPipes) {
	                var flattenedDirectives = flatten(platformDirectives);
	                collection_1.ListWrapper.remove(flattenedDirectives, common_1.FORM_DIRECTIVES);
	                return new compiler_1.CompilerConfig({ platformDirectives: flattenedDirectives, platformPipes: platformPipes });
	            },
	            deps: [core_1.PLATFORM_DIRECTIVES, core_1.PLATFORM_PIPES]
	        }];
	}
	exports.disableDeprecatedForms = disableDeprecatedForms;
	/**
	 * @experimental
	 */
	function provideForms() {
	    return [
	        { provide: core_1.PLATFORM_DIRECTIVES, useValue: directives_1.FORM_DIRECTIVES, multi: true }, exports.FORM_PROVIDERS
	    ];
	}
	exports.provideForms = provideForms;
	//# sourceMappingURL=form_providers.js.map

/***/ },
/* 370 */
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
	var core_1 = __webpack_require__(5);
	var flash_message_service_1 = __webpack_require__(328);
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
	     *
	     * Handle response:
	     * this._postService.post(url, data).then(function(data) {
	     *     // Handle data
	     * }, function(errors) {
	     *     // Handle errors
	     * });
	     */
	    PostService.prototype.post = function (url, data) {
	        var that = this;
	        return new Promise(function (resolve, reject) {
	            $.post(url, data, function (response) {
	                var shortResponse = that.handleResponse(response);
	                if (shortResponse.success) {
	                    resolve(shortResponse.response);
	                }
	                else {
	                    reject(shortResponse.response);
	                }
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
	     * Handle responses from server
	     * @param postResponse
	     * @returns {{success: boolean, response: null}}
	     */
	    PostService.prototype.handleResponse = function (postResponse) {
	        var output = {
	            success: false,
	            response: null
	        };
	        // Success. Return data
	        if (postResponse.status == 1) {
	            output.success = true;
	            output.response = postResponse.data || null;
	        }
	        else if ((postResponse.status == 0) && postResponse.errors) {
	            output.response = postResponse.errors;
	        }
	        else {
	            this._flashMessageService.message('Something went wrong while trying to save the data', 'Unknown error', flash_message_service_1.FlashMessageTypes.error);
	        }
	        // Flash Messages
	        if (postResponse.flashMessages) {
	            for (var _i = 0, _a = postResponse.flashMessages; _i < _a.length; _i++) {
	                var flashMessage = _a[_i];
	                this._flashMessageService.message(flashMessage.body, flashMessage.head, flashMessage.type);
	            }
	        }
	        return output;
	    };
	    PostService = __decorate([
	        core_1.Injectable(), 
	        __metadata('design:paramtypes', [flash_message_service_1.FlashMessageService])
	    ], PostService);
	    return PostService;
	}());
	exports.PostService = PostService;


/***/ },
/* 371 */
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
	var core_1 = __webpack_require__(5);
	var modal_dialog_component_1 = __webpack_require__(372);
	var modal_popup_1 = __webpack_require__(385);
	exports.ModalPopup = modal_popup_1.ModalPopup;
	// Alert types
	exports.AlertTypes = {
	    success: 'success',
	    info: 'info',
	    warning: 'warning',
	    error: 'error'
	};
	// Alert sizes
	exports.AlertSizes = {
	    sm: 'sm',
	    lg: 'lg'
	};
	/**
	 * Service
	 */
	var ModalService = (function () {
	    function ModalService(_dynamicComponentLoader) {
	        this._dynamicComponentLoader = _dynamicComponentLoader;
	        this.hasInit = false;
	    }
	    /**
	     * Initialization
	     * @param viewContainerRef
	     * @returns {ModalService}
	     */
	    ModalService.prototype.init = function (viewContainerRef) {
	        if (this.hasInit) {
	            return this;
	        }
	        this.viewContainerRef = viewContainerRef;
	        this.hasInit = true;
	        return this;
	    };
	    /**
	     * Popup. Render component inside the popup.
	     * @param component (needs to extend ModalPopup)
	     * @param resolvedProviders (result of: ReflectiveInjector.resolve([...]))
	     * @param size
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
	     *             errors => {
	     *                 console.log(errors);
	     *             }
	     *         );
	     *     },
	     *     errors => {
	     *         console.log(errors);
	     *     }
	     * );
	     */
	    ModalService.prototype.popup = function (component, resolvedProviders, size) {
	        if (resolvedProviders === void 0) { resolvedProviders = null; }
	        if (size === void 0) { size = exports.AlertSizes.lg; }
	        size = this.normalizeAlertSize(size);
	        var that = this;
	        return new Promise(function (resolve, reject) {
	            that._dynamicComponentLoader.loadNextToLocation(component, that.viewContainerRef, resolvedProviders).then(function (componentRef) {
	                // Open popup
	                componentRef.instance.popup.open(size);
	                var dismissPromise = new Promise(function (resolve, reject) {
	                    // Event emitter
	                    var popupSubscription = componentRef.instance.dismissEmitter.subscribe(function (data) {
	                        componentRef.destroy();
	                        popupSubscription.unsubscribe();
	                        return resolve(data);
	                    });
	                });
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
	        if (size === void 0) { size = exports.AlertSizes.sm; }
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
	        if (size === void 0) { size = exports.AlertSizes.sm; }
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
	        if (size === void 0) { size = exports.AlertSizes.sm; }
	        var that = this;
	        return new Promise(function (resolve, reject) {
	            that.popup(modal_dialog_component_1.ModalDialogComponent, null, size).then(function (data) {
	                // Set modal properties
	                data.componentRef.instance.setTitle(title).setBody(body).setIsDialog(isDialog);
	                data.dismissPromise.then(function (dismissData) {
	                    return resolve(dismissData);
	                }, function (errors) {
	                    console.log(errors);
	                    return reject(false);
	                });
	            }, function (errors) {
	                console.log(errors);
	                return reject(false);
	            });
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
	    /**
	     * Normalize alert size to a valid option
	     * @param size
	     * @returns {string}
	     */
	    ModalService.prototype.normalizeAlertSize = function (size) {
	        return (exports.AlertSizes[size] || exports.AlertSizes.lg);
	    };
	    ModalService = __decorate([
	        core_1.Injectable(), 
	        __metadata('design:paramtypes', [core_1.DynamicComponentLoader])
	    ], ModalService);
	    return ModalService;
	}());
	exports.ModalService = ModalService;


/***/ },
/* 372 */
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
	var core_1 = __webpack_require__(5);
	var ng2_bs3_modal_1 = __webpack_require__(373);
	var modal_popup_1 = __webpack_require__(385);
	var ModalDialogComponent = (function (_super) {
	    __extends(ModalDialogComponent, _super);
	    function ModalDialogComponent() {
	        _super.apply(this, arguments);
	        this.title = 'Warning';
	        this.body = 'Are you sure';
	        this.isDialog = true;
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
	        core_1.Component({
	            selector: '.js_modalDialog',
	            template: "<modal #popup [animation]=\"false\" [backdrop]=\"'static'\" (onDismiss)=\"close(null, false)\">\n        <div class=\"modal-header\">\n            <h3 class=\"modal-title\">{{title}}</h3>\n        </div>\n        <div class=\"modal-body\">{{body}}</div>\n        <div class=\"modal-footer\">\n            <button *ngIf=\"isDialog\" class=\"btn btn-default\" (click)=\"close($event, false)\">Cancel</button>\n            <button class=\"btn btn-primary\" (click)=\"close($event, true)\">Ok</button>\n        </div>\n    </modal>\n    ",
	            directives: [ng2_bs3_modal_1.MODAL_DIRECTIVES]
	        }), 
	        __metadata('design:paramtypes', [])
	    ], ModalDialogComponent);
	    return ModalDialogComponent;
	}(modal_popup_1.ModalPopup));
	exports.ModalDialogComponent = ModalDialogComponent;


/***/ },
/* 373 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	function __export(m) {
	    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
	}
	var modal_1 = __webpack_require__(374);
	var modal_header_1 = __webpack_require__(381);
	var modal_body_1 = __webpack_require__(382);
	var modal_footer_1 = __webpack_require__(383);
	var autofocus_1 = __webpack_require__(384);
	__export(__webpack_require__(374));
	__export(__webpack_require__(381));
	__export(__webpack_require__(382));
	__export(__webpack_require__(383));
	__export(__webpack_require__(375));
	exports.MODAL_DIRECTIVES = [
	    modal_1.ModalComponent,
	    modal_header_1.ModalHeaderComponent,
	    modal_body_1.ModalBodyComponent,
	    modal_footer_1.ModalFooterComponent,
	    autofocus_1.AutofocusDirective
	];
	//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmcyLWJzMy1tb2RhbC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbInNyYy9uZzItYnMzLW1vZGFsL25nMi1iczMtbW9kYWwudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUVBLHNCQUErQixvQkFBb0IsQ0FBQyxDQUFBO0FBQ3BELDZCQUFxQywyQkFBMkIsQ0FBQyxDQUFBO0FBQ2pFLDJCQUFtQyx5QkFBeUIsQ0FBQyxDQUFBO0FBQzdELDZCQUFxQywyQkFBMkIsQ0FBQyxDQUFBO0FBQ2pFLDBCQUFtQyx3QkFBd0IsQ0FBQyxDQUFBO0FBRTVELGlCQUFjLG9CQUFvQixDQUFDLEVBQUE7QUFDbkMsaUJBQWMsMkJBQTJCLENBQUMsRUFBQTtBQUMxQyxpQkFBYyx5QkFBeUIsQ0FBQyxFQUFBO0FBQ3hDLGlCQUFjLDJCQUEyQixDQUFDLEVBQUE7QUFDMUMsaUJBQWMsNkJBQTZCLENBQUMsRUFBQTtBQUUvQix3QkFBZ0IsR0FBVztJQUNwQyxzQkFBYztJQUNkLG1DQUFvQjtJQUNwQiwrQkFBa0I7SUFDbEIsbUNBQW9CO0lBQ3BCLDhCQUFrQjtDQUNyQixDQUFDIn0=

/***/ },
/* 374 */
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
	var core_1 = __webpack_require__(5);
	var modal_instance_1 = __webpack_require__(375);
	var ModalComponent = (function () {
	    function ModalComponent(element) {
	        var _this = this;
	        this.element = element;
	        this.overrideSize = null;
	        this.visible = false;
	        this.animation = true;
	        this.backdrop = true;
	        this.keyboard = true;
	        this.onClose = new core_1.EventEmitter(false);
	        this.onDismiss = new core_1.EventEmitter(false);
	        this.onOpen = new core_1.EventEmitter(false);
	        this.instance = new modal_instance_1.ModalInstance(this.element);
	        this.instance.hidden.subscribe(function (result) {
	            _this.visible = _this.instance.visible;
	            if (result === modal_instance_1.ModalResult.Dismiss)
	                _this.onDismiss.emit(undefined);
	        });
	        this.instance.shown.subscribe(function () {
	            _this.onOpen.emit(undefined);
	        });
	    }
	    Object.defineProperty(ModalComponent.prototype, "fadeClass", {
	        get: function () { return this.animation; },
	        enumerable: true,
	        configurable: true
	    });
	    Object.defineProperty(ModalComponent.prototype, "dataKeyboardAttr", {
	        get: function () { return this.keyboard; },
	        enumerable: true,
	        configurable: true
	    });
	    Object.defineProperty(ModalComponent.prototype, "dataBackdropAttr", {
	        get: function () { return this.backdrop; },
	        enumerable: true,
	        configurable: true
	    });
	    ModalComponent.prototype.ngOnDestroy = function () {
	        return this.instance && this.instance.destroy();
	    };
	    ModalComponent.prototype.routerCanDeactivate = function () {
	        return this.ngOnDestroy();
	    };
	    ModalComponent.prototype.open = function (size) {
	        var _this = this;
	        if (ModalSize.validSize(size))
	            this.overrideSize = size;
	        return this.instance.open().then(function () {
	            _this.visible = _this.instance.visible;
	        });
	    };
	    ModalComponent.prototype.close = function () {
	        var _this = this;
	        return this.instance.close().then(function () {
	            _this.onClose.emit(undefined);
	        });
	    };
	    ModalComponent.prototype.dismiss = function () {
	        return this.instance.dismiss();
	    };
	    ModalComponent.prototype.isSmall = function () {
	        return this.overrideSize !== ModalSize.Large
	            && this.size === ModalSize.Small
	            || this.overrideSize === ModalSize.Small;
	    };
	    ModalComponent.prototype.isLarge = function () {
	        return this.overrideSize !== ModalSize.Small
	            && this.size === ModalSize.Large
	            || this.overrideSize === ModalSize.Large;
	    };
	    __decorate([
	        core_1.Input(), 
	        __metadata('design:type', Boolean)
	    ], ModalComponent.prototype, "animation", void 0);
	    __decorate([
	        core_1.Input(), 
	        __metadata('design:type', Object)
	    ], ModalComponent.prototype, "backdrop", void 0);
	    __decorate([
	        core_1.Input(), 
	        __metadata('design:type', Boolean)
	    ], ModalComponent.prototype, "keyboard", void 0);
	    __decorate([
	        core_1.Input(), 
	        __metadata('design:type', String)
	    ], ModalComponent.prototype, "size", void 0);
	    __decorate([
	        core_1.Output(), 
	        __metadata('design:type', core_1.EventEmitter)
	    ], ModalComponent.prototype, "onClose", void 0);
	    __decorate([
	        core_1.Output(), 
	        __metadata('design:type', core_1.EventEmitter)
	    ], ModalComponent.prototype, "onDismiss", void 0);
	    __decorate([
	        core_1.Output(), 
	        __metadata('design:type', core_1.EventEmitter)
	    ], ModalComponent.prototype, "onOpen", void 0);
	    __decorate([
	        core_1.HostBinding('class.fade'), 
	        __metadata('design:type', Boolean)
	    ], ModalComponent.prototype, "fadeClass", null);
	    __decorate([
	        core_1.HostBinding('attr.data-keyboard'), 
	        __metadata('design:type', Boolean)
	    ], ModalComponent.prototype, "dataKeyboardAttr", null);
	    __decorate([
	        core_1.HostBinding('attr.data-backdrop'), 
	        __metadata('design:type', Object)
	    ], ModalComponent.prototype, "dataBackdropAttr", null);
	    ModalComponent = __decorate([
	        core_1.Component({
	            selector: 'modal',
	            host: {
	                'class': 'modal',
	                'role': 'dialog',
	                'tabindex': '-1'
	            },
	            template: "\n        <div class=\"modal-dialog\" [ngClass]=\"{ 'modal-sm': isSmall(), 'modal-lg': isLarge() }\">\n            <div class=\"modal-content\">\n                <ng-content></ng-content>\n            </div>\n        </div>\n    "
	        }), 
	        __metadata('design:paramtypes', [core_1.ElementRef])
	    ], ModalComponent);
	    return ModalComponent;
	}());
	exports.ModalComponent = ModalComponent;
	var ModalSize = (function () {
	    function ModalSize() {
	    }
	    ModalSize.validSize = function (size) {
	        return size && (size === ModalSize.Small || size === ModalSize.Large);
	    };
	    ModalSize.Small = 'sm';
	    ModalSize.Large = 'lg';
	    return ModalSize;
	}());
	exports.ModalSize = ModalSize;
	//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibW9kYWwuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi9zcmMvbmcyLWJzMy1tb2RhbC9jb21wb25lbnRzL21vZGFsLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQSxxQkFBaUcsZUFBZSxDQUFDLENBQUE7QUFDakgsK0JBQTJDLGtCQUFrQixDQUFDLENBQUE7QUFpQjlEO0lBb0JJLHdCQUFvQixPQUFtQjtRQXBCM0MsaUJBc0VDO1FBbER1QixZQUFPLEdBQVAsT0FBTyxDQUFZO1FBbEIvQixpQkFBWSxHQUFXLElBQUksQ0FBQztRQUdwQyxZQUFPLEdBQVksS0FBSyxDQUFDO1FBRWhCLGNBQVMsR0FBWSxJQUFJLENBQUM7UUFDMUIsYUFBUSxHQUFxQixJQUFJLENBQUM7UUFDbEMsYUFBUSxHQUFZLElBQUksQ0FBQztRQUd4QixZQUFPLEdBQXNCLElBQUksbUJBQVksQ0FBQyxLQUFLLENBQUMsQ0FBQztRQUNyRCxjQUFTLEdBQXNCLElBQUksbUJBQVksQ0FBQyxLQUFLLENBQUMsQ0FBQztRQUN2RCxXQUFNLEdBQXNCLElBQUksbUJBQVksQ0FBQyxLQUFLLENBQUMsQ0FBQztRQU8xRCxJQUFJLENBQUMsUUFBUSxHQUFHLElBQUksOEJBQWEsQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLENBQUM7UUFFaEQsSUFBSSxDQUFDLFFBQVEsQ0FBQyxNQUFNLENBQUMsU0FBUyxDQUFDLFVBQUMsTUFBTTtZQUNsQyxLQUFJLENBQUMsT0FBTyxHQUFHLEtBQUksQ0FBQyxRQUFRLENBQUMsT0FBTyxDQUFDO1lBQ3JDLEVBQUUsQ0FBQyxDQUFDLE1BQU0sS0FBSyw0QkFBVyxDQUFDLE9BQU8sQ0FBQztnQkFDL0IsS0FBSSxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLENBQUM7UUFDdkMsQ0FBQyxDQUFDLENBQUM7UUFFSCxJQUFJLENBQUMsUUFBUSxDQUFDLEtBQUssQ0FBQyxTQUFTLENBQUM7WUFDMUIsS0FBSSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLENBQUM7UUFDaEMsQ0FBQyxDQUFDLENBQUM7SUFDUCxDQUFDO0lBaEIwQixzQkFBSSxxQ0FBUzthQUFiLGNBQTJCLE1BQU0sQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQzs7O09BQUE7SUFDM0Msc0JBQUksNENBQWdCO2FBQXBCLGNBQWtDLE1BQU0sQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQzs7O09BQUE7SUFDekQsc0JBQUksNENBQWdCO2FBQXBCLGNBQTJDLE1BQU0sQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQzs7O09BQUE7SUFnQnJHLG9DQUFXLEdBQVg7UUFDSSxNQUFNLENBQUMsSUFBSSxDQUFDLFFBQVEsSUFBSSxJQUFJLENBQUMsUUFBUSxDQUFDLE9BQU8sRUFBRSxDQUFDO0lBQ3BELENBQUM7SUFFRCw0Q0FBbUIsR0FBbkI7UUFDSSxNQUFNLENBQUMsSUFBSSxDQUFDLFdBQVcsRUFBRSxDQUFDO0lBQzlCLENBQUM7SUFFRCw2QkFBSSxHQUFKLFVBQUssSUFBYTtRQUFsQixpQkFLQztRQUpHLEVBQUUsQ0FBQyxDQUFDLFNBQVMsQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLENBQUM7WUFBQyxJQUFJLENBQUMsWUFBWSxHQUFHLElBQUksQ0FBQztRQUN4RCxNQUFNLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxJQUFJLEVBQUUsQ0FBQyxJQUFJLENBQUM7WUFDN0IsS0FBSSxDQUFDLE9BQU8sR0FBRyxLQUFJLENBQUMsUUFBUSxDQUFDLE9BQU8sQ0FBQztRQUN6QyxDQUFDLENBQUMsQ0FBQztJQUNQLENBQUM7SUFFRCw4QkFBSyxHQUFMO1FBQUEsaUJBSUM7UUFIRyxNQUFNLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxLQUFLLEVBQUUsQ0FBQyxJQUFJLENBQUM7WUFDOUIsS0FBSSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLENBQUM7UUFDakMsQ0FBQyxDQUFDLENBQUM7SUFDUCxDQUFDO0lBRUQsZ0NBQU8sR0FBUDtRQUNJLE1BQU0sQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLE9BQU8sRUFBRSxDQUFDO0lBQ25DLENBQUM7SUFFTyxnQ0FBTyxHQUFmO1FBQ0ksTUFBTSxDQUFDLElBQUksQ0FBQyxZQUFZLEtBQUssU0FBUyxDQUFDLEtBQUs7ZUFDckMsSUFBSSxDQUFDLElBQUksS0FBSyxTQUFTLENBQUMsS0FBSztlQUM3QixJQUFJLENBQUMsWUFBWSxLQUFLLFNBQVMsQ0FBQyxLQUFLLENBQUM7SUFDakQsQ0FBQztJQUVPLGdDQUFPLEdBQWY7UUFDSSxNQUFNLENBQUMsSUFBSSxDQUFDLFlBQVksS0FBSyxTQUFTLENBQUMsS0FBSztlQUNyQyxJQUFJLENBQUMsSUFBSSxLQUFLLFNBQVMsQ0FBQyxLQUFLO2VBQzdCLElBQUksQ0FBQyxZQUFZLEtBQUssU0FBUyxDQUFDLEtBQUssQ0FBQztJQUNqRCxDQUFDO0lBOUREO1FBQUMsWUFBSyxFQUFFOztxREFBQTtJQUNSO1FBQUMsWUFBSyxFQUFFOztvREFBQTtJQUNSO1FBQUMsWUFBSyxFQUFFOztvREFBQTtJQUNSO1FBQUMsWUFBSyxFQUFFOztnREFBQTtJQUVSO1FBQUMsYUFBTSxFQUFFOzttREFBQTtJQUNUO1FBQUMsYUFBTSxFQUFFOztxREFBQTtJQUNUO1FBQUMsYUFBTSxFQUFFOztrREFBQTtJQUVUO1FBQUMsa0JBQVcsQ0FBQyxZQUFZLENBQUM7O21EQUFBO0lBQzFCO1FBQUMsa0JBQVcsQ0FBQyxvQkFBb0IsQ0FBQzs7MERBQUE7SUFDbEM7UUFBQyxrQkFBVyxDQUFDLG9CQUFvQixDQUFDOzswREFBQTtJQWpDdEM7UUFBQyxnQkFBUyxDQUFDO1lBQ1AsUUFBUSxFQUFFLE9BQU87WUFDakIsSUFBSSxFQUFFO2dCQUNGLE9BQU8sRUFBRSxPQUFPO2dCQUNoQixNQUFNLEVBQUUsUUFBUTtnQkFDaEIsVUFBVSxFQUFFLElBQUk7YUFDbkI7WUFDRCxRQUFRLEVBQUUsdU9BTVQ7U0FDSixDQUFDOztzQkFBQTtJQXVFRixxQkFBQztBQUFELENBQUMsQUF0RUQsSUFzRUM7QUF0RVksc0JBQWMsaUJBc0UxQixDQUFBO0FBRUQ7SUFBQTtJQU9BLENBQUM7SUFIVSxtQkFBUyxHQUFoQixVQUFpQixJQUFZO1FBQ3pCLE1BQU0sQ0FBQyxJQUFJLElBQUksQ0FBQyxJQUFJLEtBQUssU0FBUyxDQUFDLEtBQUssSUFBSSxJQUFJLEtBQUssU0FBUyxDQUFDLEtBQUssQ0FBQyxDQUFDO0lBQzFFLENBQUM7SUFMTSxlQUFLLEdBQUcsSUFBSSxDQUFDO0lBQ2IsZUFBSyxHQUFHLElBQUksQ0FBQztJQUt4QixnQkFBQztBQUFELENBQUMsQUFQRCxJQU9DO0FBUFksaUJBQVMsWUFPckIsQ0FBQSJ9

/***/ },
/* 375 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var Observable_1 = __webpack_require__(38);
	__webpack_require__(376);
	__webpack_require__(378);
	var ModalInstance = (function () {
	    function ModalInstance(element) {
	        this.element = element;
	        this.suffix = '.ng2-bs3-modal';
	        this.shownEventName = 'shown.bs.modal' + this.suffix;
	        this.hiddenEventName = 'hidden.bs.modal' + this.suffix;
	        this.visible = false;
	        this.init();
	    }
	    ModalInstance.prototype.open = function () {
	        return this.show();
	    };
	    ModalInstance.prototype.close = function () {
	        this.result = ModalResult.Close;
	        return this.hide();
	    };
	    ModalInstance.prototype.dismiss = function () {
	        this.result = ModalResult.Dismiss;
	        return this.hide();
	    };
	    ModalInstance.prototype.destroy = function () {
	        var _this = this;
	        return this.hide().then(function () {
	            if (_this.$modal) {
	                _this.$modal.data('bs.modal', null);
	                _this.$modal.remove();
	            }
	        });
	    };
	    ModalInstance.prototype.show = function () {
	        var promise = toPromise(this.shown);
	        this.resetData();
	        this.$modal.modal();
	        return promise;
	    };
	    ModalInstance.prototype.hide = function () {
	        if (this.$modal && this.visible) {
	            var promise = toPromise(this.hidden);
	            this.$modal.modal('hide');
	            return promise;
	        }
	        return Promise.resolve(this.result);
	    };
	    ModalInstance.prototype.init = function () {
	        var _this = this;
	        this.$modal = jQuery(this.element.nativeElement);
	        this.$modal.appendTo('body');
	        this.shown = Observable_1.Observable.fromEvent(this.$modal, this.shownEventName)
	            .map(function () {
	            _this.visible = true;
	        });
	        this.hidden = Observable_1.Observable.fromEvent(this.$modal, this.hiddenEventName)
	            .map(function () {
	            var result = (!_this.result || _this.result === ModalResult.None)
	                ? ModalResult.Dismiss : _this.result;
	            _this.result = ModalResult.None;
	            _this.visible = false;
	            return result;
	        });
	    };
	    ModalInstance.prototype.resetData = function () {
	        this.$modal.removeData();
	        this.$modal.data('backdrop', booleanOrValue(this.$modal.attr('data-backdrop')));
	        this.$modal.data('keyboard', booleanOrValue(this.$modal.attr('data-keyboard')));
	    };
	    return ModalInstance;
	}());
	exports.ModalInstance = ModalInstance;
	function booleanOrValue(value) {
	    if (value === 'true')
	        return true;
	    else if (value === 'false')
	        return false;
	    return value;
	}
	function toPromise(observable) {
	    return new Promise(function (resolve, reject) {
	        observable.subscribe(function (next) {
	            resolve(next);
	        });
	    });
	}
	(function (ModalResult) {
	    ModalResult[ModalResult["None"] = 0] = "None";
	    ModalResult[ModalResult["Close"] = 1] = "Close";
	    ModalResult[ModalResult["Dismiss"] = 2] = "Dismiss";
	})(exports.ModalResult || (exports.ModalResult = {}));
	var ModalResult = exports.ModalResult;
	//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibW9kYWwtaW5zdGFuY2UuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi9zcmMvbmcyLWJzMy1tb2RhbC9jb21wb25lbnRzL21vZGFsLWluc3RhbmNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFDQSwyQkFBMkIsaUJBQWlCLENBQUMsQ0FBQTtBQUM3QyxRQUFPLHVCQUF1QixDQUFDLENBQUE7QUFDL0IsUUFBTywrQkFBK0IsQ0FBQyxDQUFBO0FBSXZDO0lBWUksdUJBQW9CLE9BQW1CO1FBQW5CLFlBQU8sR0FBUCxPQUFPLENBQVk7UUFWL0IsV0FBTSxHQUFXLGdCQUFnQixDQUFDO1FBQ2xDLG1CQUFjLEdBQVcsZ0JBQWdCLEdBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBQztRQUN4RCxvQkFBZSxHQUFXLGlCQUFpQixHQUFHLElBQUksQ0FBQyxNQUFNLENBQUM7UUFNbEUsWUFBTyxHQUFZLEtBQUssQ0FBQztRQUdyQixJQUFJLENBQUMsSUFBSSxFQUFFLENBQUM7SUFDaEIsQ0FBQztJQUVELDRCQUFJLEdBQUo7UUFDSSxNQUFNLENBQUMsSUFBSSxDQUFDLElBQUksRUFBRSxDQUFDO0lBQ3ZCLENBQUM7SUFFRCw2QkFBSyxHQUFMO1FBQ0ksSUFBSSxDQUFDLE1BQU0sR0FBRyxXQUFXLENBQUMsS0FBSyxDQUFDO1FBQ2hDLE1BQU0sQ0FBQyxJQUFJLENBQUMsSUFBSSxFQUFFLENBQUM7SUFDdkIsQ0FBQztJQUVELCtCQUFPLEdBQVA7UUFDSSxJQUFJLENBQUMsTUFBTSxHQUFHLFdBQVcsQ0FBQyxPQUFPLENBQUM7UUFDbEMsTUFBTSxDQUFDLElBQUksQ0FBQyxJQUFJLEVBQUUsQ0FBQztJQUN2QixDQUFDO0lBRUQsK0JBQU8sR0FBUDtRQUFBLGlCQU9DO1FBTkcsTUFBTSxDQUFDLElBQUksQ0FBQyxJQUFJLEVBQUUsQ0FBQyxJQUFJLENBQUM7WUFDcEIsRUFBRSxDQUFDLENBQUMsS0FBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUM7Z0JBQ2QsS0FBSSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsVUFBVSxFQUFFLElBQUksQ0FBQyxDQUFDO2dCQUNuQyxLQUFJLENBQUMsTUFBTSxDQUFDLE1BQU0sRUFBRSxDQUFDO1lBQ3pCLENBQUM7UUFDTCxDQUFDLENBQUMsQ0FBQztJQUNQLENBQUM7SUFFTyw0QkFBSSxHQUFaO1FBQ0ksSUFBSSxPQUFPLEdBQUcsU0FBUyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQztRQUNwQyxJQUFJLENBQUMsU0FBUyxFQUFFLENBQUM7UUFDakIsSUFBSSxDQUFDLE1BQU0sQ0FBQyxLQUFLLEVBQUUsQ0FBQztRQUNwQixNQUFNLENBQUMsT0FBTyxDQUFDO0lBQ25CLENBQUM7SUFFTyw0QkFBSSxHQUFaO1FBQ0ksRUFBRSxDQUFDLENBQUMsSUFBSSxDQUFDLE1BQU0sSUFBSSxJQUFJLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQztZQUM5QixJQUFJLE9BQU8sR0FBRyxTQUFTLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDO1lBQ3JDLElBQUksQ0FBQyxNQUFNLENBQUMsS0FBSyxDQUFDLE1BQU0sQ0FBQyxDQUFDO1lBQzFCLE1BQU0sQ0FBQyxPQUFPLENBQUM7UUFDbkIsQ0FBQztRQUNELE1BQU0sQ0FBQyxPQUFPLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQztJQUN4QyxDQUFDO0lBRU8sNEJBQUksR0FBWjtRQUFBLGlCQW1CQztRQWxCRyxJQUFJLENBQUMsTUFBTSxHQUFHLE1BQU0sQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLGFBQWEsQ0FBQyxDQUFDO1FBQ2pELElBQUksQ0FBQyxNQUFNLENBQUMsUUFBUSxDQUFDLE1BQU0sQ0FBQyxDQUFDO1FBRTdCLElBQUksQ0FBQyxLQUFLLEdBQUcsdUJBQVUsQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLE1BQU0sRUFBRSxJQUFJLENBQUMsY0FBYyxDQUFDO2FBQzlELEdBQUcsQ0FBQztZQUNELEtBQUksQ0FBQyxPQUFPLEdBQUcsSUFBSSxDQUFDO1FBQ3hCLENBQUMsQ0FBQyxDQUFDO1FBRVAsSUFBSSxDQUFDLE1BQU0sR0FBRyx1QkFBVSxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsTUFBTSxFQUFFLElBQUksQ0FBQyxlQUFlLENBQUM7YUFDaEUsR0FBRyxDQUFDO1lBQ0QsSUFBSSxNQUFNLEdBQUcsQ0FBQyxDQUFDLEtBQUksQ0FBQyxNQUFNLElBQUksS0FBSSxDQUFDLE1BQU0sS0FBSyxXQUFXLENBQUMsSUFBSSxDQUFDO2tCQUN6RCxXQUFXLENBQUMsT0FBTyxHQUFHLEtBQUksQ0FBQyxNQUFNLENBQUM7WUFFeEMsS0FBSSxDQUFDLE1BQU0sR0FBRyxXQUFXLENBQUMsSUFBSSxDQUFDO1lBQy9CLEtBQUksQ0FBQyxPQUFPLEdBQUcsS0FBSyxDQUFDO1lBRXJCLE1BQU0sQ0FBQyxNQUFNLENBQUM7UUFDbEIsQ0FBQyxDQUFDLENBQUM7SUFDWCxDQUFDO0lBRU8saUNBQVMsR0FBakI7UUFDSSxJQUFJLENBQUMsTUFBTSxDQUFDLFVBQVUsRUFBRSxDQUFDO1FBQ3pCLElBQUksQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLFVBQVUsRUFBRSxjQUFjLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsZUFBZSxDQUFDLENBQUMsQ0FBQyxDQUFDO1FBQ2hGLElBQUksQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLFVBQVUsRUFBRSxjQUFjLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsZUFBZSxDQUFDLENBQUMsQ0FBQyxDQUFDO0lBQ3BGLENBQUM7SUFDTCxvQkFBQztBQUFELENBQUMsQUFqRkQsSUFpRkM7QUFqRlkscUJBQWEsZ0JBaUZ6QixDQUFBO0FBRUQsd0JBQXdCLEtBQUs7SUFDekIsRUFBRSxDQUFDLENBQUMsS0FBSyxLQUFLLE1BQU0sQ0FBQztRQUNqQixNQUFNLENBQUMsSUFBSSxDQUFDO0lBQ2hCLElBQUksQ0FBQyxFQUFFLENBQUMsQ0FBQyxLQUFLLEtBQUssT0FBTyxDQUFDO1FBQ3ZCLE1BQU0sQ0FBQyxLQUFLLENBQUM7SUFDakIsTUFBTSxDQUFDLEtBQUssQ0FBQztBQUNqQixDQUFDO0FBRUQsbUJBQXNCLFVBQXlCO0lBQzNDLE1BQU0sQ0FBQyxJQUFJLE9BQU8sQ0FBQyxVQUFDLE9BQU8sRUFBRSxNQUFNO1FBQy9CLFVBQVUsQ0FBQyxTQUFTLENBQUMsVUFBQSxJQUFJO1lBQ3JCLE9BQU8sQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUNsQixDQUFDLENBQUMsQ0FBQztJQUNQLENBQUMsQ0FBQyxDQUFDO0FBQ1AsQ0FBQztBQUVELFdBQVksV0FBVztJQUNuQiw2Q0FBSSxDQUFBO0lBQ0osK0NBQUssQ0FBQTtJQUNMLG1EQUFPLENBQUE7QUFDWCxDQUFDLEVBSlcsbUJBQVcsS0FBWCxtQkFBVyxRQUl0QjtBQUpELElBQVksV0FBVyxHQUFYLG1CQUlYLENBQUEifQ==

/***/ },
/* 376 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var Observable_1 = __webpack_require__(38);
	var map_1 = __webpack_require__(377);
	Observable_1.Observable.prototype.map = map_1.map;
	//# sourceMappingURL=map.js.map

/***/ },
/* 377 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __extends = (this && this.__extends) || function (d, b) {
	    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	    function __() { this.constructor = d; }
	    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	};
	var Subscriber_1 = __webpack_require__(43);
	/**
	 * Applies a given `project` function to each value emitted by the source
	 * Observable, and emits the resulting values as an Observable.
	 *
	 * <span class="informal">Like [Array.prototype.map()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map),
	 * it passes each source value through a transformation function to get
	 * corresponding output values.</span>
	 *
	 * <img src="./img/map.png" width="100%">
	 *
	 * Similar to the well known `Array.prototype.map` function, this operator
	 * applies a projection to each value and emits that projection in the output
	 * Observable.
	 *
	 * @example <caption>Map every every click to the clientX position of that click</caption>
	 * var clicks = Rx.Observable.fromEvent(document, 'click');
	 * var positions = clicks.map(ev => ev.clientX);
	 * positions.subscribe(x => console.log(x));
	 *
	 * @see {@link mapTo}
	 * @see {@link pluck}
	 *
	 * @param {function(value: T, index: number): R} project The function to apply
	 * to each `value` emitted by the source Observable. The `index` parameter is
	 * the number `i` for the i-th emission that has happened since the
	 * subscription, starting from the number `0`.
	 * @param {any} [thisArg] An optional argument to define what `this` is in the
	 * `project` function.
	 * @return {Observable<R>} An Observable that emits the values from the source
	 * Observable transformed by the given `project` function.
	 * @method map
	 * @owner Observable
	 */
	function map(project, thisArg) {
	    if (typeof project !== 'function') {
	        throw new TypeError('argument is not a function. Are you looking for `mapTo()`?');
	    }
	    return this.lift(new MapOperator(project, thisArg));
	}
	exports.map = map;
	var MapOperator = (function () {
	    function MapOperator(project, thisArg) {
	        this.project = project;
	        this.thisArg = thisArg;
	    }
	    MapOperator.prototype.call = function (subscriber, source) {
	        return source._subscribe(new MapSubscriber(subscriber, this.project, this.thisArg));
	    };
	    return MapOperator;
	}());
	/**
	 * We need this JSDoc comment for affecting ESDoc.
	 * @ignore
	 * @extends {Ignored}
	 */
	var MapSubscriber = (function (_super) {
	    __extends(MapSubscriber, _super);
	    function MapSubscriber(destination, project, thisArg) {
	        _super.call(this, destination);
	        this.project = project;
	        this.count = 0;
	        this.thisArg = thisArg || this;
	    }
	    // NOTE: This looks unoptimized, but it's actually purposefully NOT
	    // using try/catch optimizations.
	    MapSubscriber.prototype._next = function (value) {
	        var result;
	        try {
	            result = this.project.call(this.thisArg, value, this.count++);
	        }
	        catch (err) {
	            this.destination.error(err);
	            return;
	        }
	        this.destination.next(result);
	    };
	    return MapSubscriber;
	}(Subscriber_1.Subscriber));
	//# sourceMappingURL=map.js.map

/***/ },
/* 378 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var Observable_1 = __webpack_require__(38);
	var fromEvent_1 = __webpack_require__(379);
	Observable_1.Observable.fromEvent = fromEvent_1.fromEvent;
	//# sourceMappingURL=fromEvent.js.map

/***/ },
/* 379 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var FromEventObservable_1 = __webpack_require__(380);
	exports.fromEvent = FromEventObservable_1.FromEventObservable.create;
	//# sourceMappingURL=fromEvent.js.map

/***/ },
/* 380 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __extends = (this && this.__extends) || function (d, b) {
	    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	    function __() { this.constructor = d; }
	    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	};
	var Observable_1 = __webpack_require__(38);
	var tryCatch_1 = __webpack_require__(48);
	var errorObject_1 = __webpack_require__(49);
	var Subscription_1 = __webpack_require__(45);
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
	    function FromEventObservable(sourceObj, eventName, selector) {
	        _super.call(this);
	        this.sourceObj = sourceObj;
	        this.eventName = eventName;
	        this.selector = selector;
	    }
	    /**
	     * @param sourceObj
	     * @param eventName
	     * @param selector
	     * @return {FromEventObservable}
	     * @static true
	     * @name fromEvent
	     * @owner Observable
	     */
	    FromEventObservable.create = function (sourceObj, eventName, selector) {
	        return new FromEventObservable(sourceObj, eventName, selector);
	    };
	    FromEventObservable.setupSubscription = function (sourceObj, eventName, handler, subscriber) {
	        var unsubscribe;
	        if (isNodeList(sourceObj) || isHTMLCollection(sourceObj)) {
	            for (var i = 0, len = sourceObj.length; i < len; i++) {
	                FromEventObservable.setupSubscription(sourceObj[i], eventName, handler, subscriber);
	            }
	        }
	        else if (isEventTarget(sourceObj)) {
	            sourceObj.addEventListener(eventName, handler);
	            unsubscribe = function () { return sourceObj.removeEventListener(eventName, handler); };
	        }
	        else if (isJQueryStyleEventEmitter(sourceObj)) {
	            sourceObj.on(eventName, handler);
	            unsubscribe = function () { return sourceObj.off(eventName, handler); };
	        }
	        else if (isNodeStyleEventEmmitter(sourceObj)) {
	            sourceObj.addListener(eventName, handler);
	            unsubscribe = function () { return sourceObj.removeListener(eventName, handler); };
	        }
	        subscriber.add(new Subscription_1.Subscription(unsubscribe));
	    };
	    FromEventObservable.prototype._subscribe = function (subscriber) {
	        var sourceObj = this.sourceObj;
	        var eventName = this.eventName;
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
	        FromEventObservable.setupSubscription(sourceObj, eventName, handler, subscriber);
	    };
	    return FromEventObservable;
	}(Observable_1.Observable));
	exports.FromEventObservable = FromEventObservable;
	//# sourceMappingURL=FromEventObservable.js.map

/***/ },
/* 381 */
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
	var core_1 = __webpack_require__(5);
	var modal_1 = __webpack_require__(374);
	var ModalHeaderComponent = (function () {
	    function ModalHeaderComponent(modal) {
	        this.modal = modal;
	        this.showClose = false;
	    }
	    __decorate([
	        core_1.Input('show-close'), 
	        __metadata('design:type', Boolean)
	    ], ModalHeaderComponent.prototype, "showClose", void 0);
	    ModalHeaderComponent = __decorate([
	        core_1.Component({
	            selector: 'modal-header',
	            template: "\n        <div class=\"modal-header\">\n            <button *ngIf=\"showClose\" type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\" (click)=\"modal.dismiss()\">\n                <span aria-hidden=\"true\">&times;</span>\n            </button>\n            <ng-content></ng-content>\n        </div>\n    "
	        }), 
	        __metadata('design:paramtypes', [modal_1.ModalComponent])
	    ], ModalHeaderComponent);
	    return ModalHeaderComponent;
	}());
	exports.ModalHeaderComponent = ModalHeaderComponent;
	//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibW9kYWwtaGVhZGVyLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vc3JjL25nMi1iczMtbW9kYWwvY29tcG9uZW50cy9tb2RhbC1oZWFkZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBLHFCQUE2RCxlQUFlLENBQUMsQ0FBQTtBQUM3RSxzQkFBK0IsU0FBUyxDQUFDLENBQUE7QUFhekM7SUFFSSw4QkFBb0IsS0FBcUI7UUFBckIsVUFBSyxHQUFMLEtBQUssQ0FBZ0I7UUFEcEIsY0FBUyxHQUFZLEtBQUssQ0FBQztJQUNILENBQUM7SUFEOUM7UUFBQyxZQUFLLENBQUMsWUFBWSxDQUFDOzsyREFBQTtJQVp4QjtRQUFDLGdCQUFTLENBQUM7WUFDUCxRQUFRLEVBQUUsY0FBYztZQUN4QixRQUFRLEVBQUUseVVBT1Q7U0FDSixDQUFDOzs0QkFBQTtJQUlGLDJCQUFDO0FBQUQsQ0FBQyxBQUhELElBR0M7QUFIWSw0QkFBb0IsdUJBR2hDLENBQUEifQ==

/***/ },
/* 382 */
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
	var core_1 = __webpack_require__(5);
	var modal_1 = __webpack_require__(374);
	var ModalBodyComponent = (function () {
	    function ModalBodyComponent(modal) {
	        this.modal = modal;
	    }
	    ModalBodyComponent = __decorate([
	        core_1.Component({
	            selector: 'modal-body',
	            template: "\n        <div class=\"modal-body\">\n            <ng-content></ng-content>\n        </div>\n    "
	        }), 
	        __metadata('design:paramtypes', [modal_1.ModalComponent])
	    ], ModalBodyComponent);
	    return ModalBodyComponent;
	}());
	exports.ModalBodyComponent = ModalBodyComponent;
	//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibW9kYWwtYm9keS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uL3NyYy9uZzItYnMzLW1vZGFsL2NvbXBvbmVudHMvbW9kYWwtYm9keS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUEscUJBQTZELGVBQWUsQ0FBQyxDQUFBO0FBQzdFLHNCQUErQixTQUFTLENBQUMsQ0FBQTtBQVV6QztJQUNJLDRCQUFvQixLQUFxQjtRQUFyQixVQUFLLEdBQUwsS0FBSyxDQUFnQjtJQUFJLENBQUM7SUFUbEQ7UUFBQyxnQkFBUyxDQUFDO1lBQ1AsUUFBUSxFQUFFLFlBQVk7WUFDdEIsUUFBUSxFQUFFLG1HQUlUO1NBQ0osQ0FBQzs7MEJBQUE7SUFHRix5QkFBQztBQUFELENBQUMsQUFGRCxJQUVDO0FBRlksMEJBQWtCLHFCQUU5QixDQUFBIn0=

/***/ },
/* 383 */
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
	var core_1 = __webpack_require__(5);
	var modal_1 = __webpack_require__(374);
	var ModalFooterComponent = (function () {
	    function ModalFooterComponent(modal) {
	        this.modal = modal;
	        this.showDefaultButtons = false;
	    }
	    __decorate([
	        core_1.Input('show-default-buttons'), 
	        __metadata('design:type', Boolean)
	    ], ModalFooterComponent.prototype, "showDefaultButtons", void 0);
	    ModalFooterComponent = __decorate([
	        core_1.Component({
	            selector: 'modal-footer',
	            template: "\n        <div class=\"modal-footer\">\n            <ng-content></ng-content>\n            <button *ngIf=\"showDefaultButtons\" type=\"button\" class=\"btn btn-default\" data-dismiss=\"modal\" (click)=\"modal.dismiss()\">Close</button>\n            <button *ngIf=\"showDefaultButtons\" type=\"button\" class=\"btn btn-primary\" (click)=\"modal.close()\">Save</button>\n        </div>\n    "
	        }), 
	        __metadata('design:paramtypes', [modal_1.ModalComponent])
	    ], ModalFooterComponent);
	    return ModalFooterComponent;
	}());
	exports.ModalFooterComponent = ModalFooterComponent;
	//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibW9kYWwtZm9vdGVyLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vc3JjL25nMi1iczMtbW9kYWwvY29tcG9uZW50cy9tb2RhbC1mb290ZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBLHFCQUE2RCxlQUFlLENBQUMsQ0FBQTtBQUM3RSxzQkFBK0IsU0FBUyxDQUFDLENBQUE7QUFZekM7SUFFSSw4QkFBb0IsS0FBcUI7UUFBckIsVUFBSyxHQUFMLEtBQUssQ0FBZ0I7UUFEVix1QkFBa0IsR0FBWSxLQUFLLENBQUM7SUFDdEIsQ0FBQztJQUQ5QztRQUFDLFlBQUssQ0FBQyxzQkFBc0IsQ0FBQzs7b0VBQUE7SUFYbEM7UUFBQyxnQkFBUyxDQUFDO1lBQ1AsUUFBUSxFQUFFLGNBQWM7WUFDeEIsUUFBUSxFQUFFLHVZQU1UO1NBQ0osQ0FBQzs7NEJBQUE7SUFJRiwyQkFBQztBQUFELENBQUMsQUFIRCxJQUdDO0FBSFksNEJBQW9CLHVCQUdoQyxDQUFBIn0=

/***/ },
/* 384 */
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
	var core_1 = __webpack_require__(5);
	var modal_1 = __webpack_require__(374);
	var AutofocusDirective = (function () {
	    function AutofocusDirective(el, modal) {
	        var _this = this;
	        this.el = el;
	        this.modal = modal;
	        if (modal != null) {
	            this.modal.onOpen.subscribe(function () {
	                _this.el.nativeElement.focus();
	            });
	        }
	    }
	    AutofocusDirective = __decorate([
	        core_1.Directive({
	            selector: '[autofocus]'
	        }), 
	        __metadata('design:paramtypes', [core_1.ElementRef, modal_1.ModalComponent])
	    ], AutofocusDirective);
	    return AutofocusDirective;
	}());
	exports.AutofocusDirective = AutofocusDirective;
	//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXV0b2ZvY3VzLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vc3JjL25nMi1iczMtbW9kYWwvZGlyZWN0aXZlcy9hdXRvZm9jdXMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBLHFCQUFzQyxlQUFlLENBQUMsQ0FBQTtBQUN0RCxzQkFBK0IscUJBQXFCLENBQUMsQ0FBQTtBQUtyRDtJQUNJLDRCQUFvQixFQUFjLEVBQVUsS0FBcUI7UUFEckUsaUJBUUM7UUFQdUIsT0FBRSxHQUFGLEVBQUUsQ0FBWTtRQUFVLFVBQUssR0FBTCxLQUFLLENBQWdCO1FBQzdELEVBQUUsQ0FBQyxDQUFDLEtBQUssSUFBSSxJQUFJLENBQUMsQ0FBQyxDQUFDO1lBQ2hCLElBQUksQ0FBQyxLQUFLLENBQUMsTUFBTSxDQUFDLFNBQVMsQ0FBQztnQkFDeEIsS0FBSSxDQUFDLEVBQUUsQ0FBQyxhQUFhLENBQUMsS0FBSyxFQUFFLENBQUM7WUFDbEMsQ0FBQyxDQUFDLENBQUM7UUFDUCxDQUFDO0lBQ0wsQ0FBQztJQVZMO1FBQUMsZ0JBQVMsQ0FBQztZQUNQLFFBQVEsRUFBRSxhQUFhO1NBQzFCLENBQUM7OzBCQUFBO0lBU0YseUJBQUM7QUFBRCxDQUFDLEFBUkQsSUFRQztBQVJZLDBCQUFrQixxQkFROUIsQ0FBQSJ9

/***/ },
/* 385 */
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
	var core_1 = __webpack_require__(5);
	var ng2_bs3_modal_1 = __webpack_require__(373);
	/**
	 * ModalPopup
	 * Base class for custom popups.
	 * All popups should extend this class.
	 */
	var ModalPopup = (function () {
	    function ModalPopup() {
	        this.dismissEmitter = new core_1.EventEmitter();
	    }
	    /**
	     * Close popup.
	     * @param $event
	     * @param data (data to return on resolve component)
	     */
	    ModalPopup.prototype.close = function ($event, data) {
	        if ($event === void 0) { $event = null; }
	        if (data === void 0) { data = false; }
	        if ($event) {
	            $event.preventDefault();
	        }
	        this.dismissEmitter.emit(data);
	        this.popup.close();
	    };
	    __decorate([
	        core_1.ViewChild('popup'), 
	        __metadata('design:type', ng2_bs3_modal_1.ModalComponent)
	    ], ModalPopup.prototype, "popup", void 0);
	    __decorate([
	        core_1.ViewChild('popup', { read: core_1.ElementRef }), 
	        __metadata('design:type', core_1.ElementRef)
	    ], ModalPopup.prototype, "popup_elementRef", void 0);
	    return ModalPopup;
	}());
	exports.ModalPopup = ModalPopup;


/***/ },
/* 386 */
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
	var post_service_1 = __webpack_require__(370);
	// Service
	var DataBoxService = (function () {
	    function DataBoxService(_dataBoxProvider, _postService, _helperService) {
	        this._dataBoxProvider = _dataBoxProvider;
	        this._postService = _postService;
	        this._helperService = _helperService;
	        this._selectedObjectEmitter = new core_1.EventEmitter();
	        this._objectsChangeEmitter = new core_1.EventEmitter();
	        this.convertObjectsToTemplate(this._dataBoxProvider['objects'], this._dataBoxProvider['fields']);
	        this.newObject();
	        this._candidateSearch = this._helperService.cloneObject(this._dataBoxProvider['search'], true);
	    }
	    /**
	     * Select object
	     * @param object
	     * @returns {Promise}
	     *
	     * Handle response:
	     * this._dataBoxService.selectObject(object).then(data => {
	     *     // Success
	     * }, error => {
	     *     // Fail
	     * });
	     */
	    DataBoxService.prototype.selectObject = function (object) {
	        var that = this;
	        return new Promise(function (resolve, reject) {
	            // Set only if object is different
	            if (that._selectedObject !== object) {
	                that._postService.post(that._dataBoxProvider.route['get']['url'] + '/' + object.id, that.getRequestData()).then(function (data) {
	                    data.object = data.object || null;
	                    that.setWorkObject(data.object);
	                    that._selectedObject = object;
	                    resolve(true);
	                }, function (errors) {
	                    console.log(errors);
	                    reject(false);
	                });
	            }
	            else {
	                resolve(true);
	            }
	        });
	    };
	    /**
	     * Get selected object
	     * @param isTemplateFormat
	     * @returns {any}
	     */
	    DataBoxService.prototype.getSelectedObject = function (isTemplateFormat) {
	        if (isTemplateFormat === void 0) { isTemplateFormat = false; }
	        if (isTemplateFormat) {
	            return this._selectedObject;
	        }
	        return this._workObject;
	    };
	    /**
	     * Get parent object
	     * @returns {any}
	     */
	    DataBoxService.prototype.getParentObject = function () {
	        return this._dataBoxProvider.object;
	    };
	    /**
	     * Set object
	     * @param object
	     * @returns {DataBoxService}
	     */
	    DataBoxService.prototype.setObject = function (object) {
	        this.setWorkObject(object);
	        this._selectedObject = null;
	        return this;
	    };
	    /**
	     * Set work object
	     * @param object
	     * @returns {DataBoxService}
	     */
	    DataBoxService.prototype.setWorkObject = function (object) {
	        this._workObject = object;
	        this._selectedObjectEmitter.emit(this._workObject);
	        return this;
	    };
	    /**
	     * Get selected object emitter to tell all subscribers about changes
	     * @returns {EventEmitter<any>}
	     */
	    DataBoxService.prototype.getSelectedObjectEmitter = function () {
	        return this._selectedObjectEmitter;
	    };
	    /**
	     * Get objects change emitter to tell all subscribers about changes
	     * @returns {EventEmitter<any>}
	     */
	    DataBoxService.prototype.getObjectsChangeEmitter = function () {
	        return this._objectsChangeEmitter;
	    };
	    /**
	     * Get label
	     * @returns {string}
	     */
	    DataBoxService.prototype.getLabel = function () {
	        return this._dataBoxProvider.label;
	    };
	    /**
	     * Get fields
	     * @returns {any}
	     */
	    DataBoxService.prototype.getFields = function () {
	        return this._dataBoxProvider.fields;
	    };
	    /**
	     * Get route
	     * @param route
	     * @returns {null}
	     */
	    DataBoxService.prototype.getRoute = function (route) {
	        if (route in this._dataBoxProvider.route) {
	            return this._dataBoxProvider.route[route]['url'];
	        }
	        return null;
	    };
	    /**
	     * Set route
	     * @param route
	     * @param url
	     * @returns {DataBoxService}
	     */
	    DataBoxService.prototype.setRoute = function (route, url) {
	        if (route in this._dataBoxProvider.route) {
	            this._dataBoxProvider.route[route]['url'] = url;
	        }
	        return this;
	    };
	    /**
	     * Set search fields
	     * @param searchFields
	     * @returns {DataBoxService}
	     */
	    DataBoxService.prototype.setSearchFields = function (searchFields) {
	        this._dataBoxProvider.search.fields = searchFields;
	        return this;
	    };
	    /**
	     * Get search fields
	     * @returns {any}
	     */
	    DataBoxService.prototype.getSearchFields = function () {
	        return this._dataBoxProvider.search.fields;
	    };
	    /**
	     * Set objects
	     * @param objects
	     * @param isMerge (if true merge objects, otherwise replace them)
	     * @returns {DataBoxService}
	     */
	    DataBoxService.prototype.setObjects = function (objects, isMerge) {
	        if (isMerge === void 0) { isMerge = false; }
	        this.convertObjectsToTemplate(objects, this._dataBoxProvider['fields']);
	        // Merge objects
	        if (isMerge) {
	            this._dataBoxProvider.objects = this._dataBoxProvider.objects.concat(objects);
	        }
	        else {
	            this._dataBoxProvider.objects = objects;
	            this._dataBoxProvider.search['offset'] = 0;
	            this._objectsChangeEmitter.emit(objects);
	        }
	        return this;
	    };
	    /**
	     * Get objects
	     * @returns {any}
	     */
	    DataBoxService.prototype.getObjects = function () {
	        return this._dataBoxProvider.objects;
	    };
	    /**
	     * Get field choice
	     * @param field
	     * @param key (key of field choice)
	     * @returns {*|null}
	     */
	    DataBoxService.prototype.getFieldChoice = function (field, key) {
	        if (key === void 0) { key = null; }
	        // Return a specific field choice by key
	        if (key in this._dataBoxProvider.fieldsChoices[field]['value']) {
	            return this._dataBoxProvider.fieldsChoices[field]['value'][key];
	        }
	        return null;
	    };
	    /**
	     * Get field choices attribute
	     * @param field
	     * @param attribute
	     * @returns {any}
	     */
	    DataBoxService.prototype.getFieldChoicesAttr = function (field, attribute) {
	        // Return a specific attribute of field choices
	        if (attribute in this._dataBoxProvider.fieldsChoices[field]) {
	            return this._dataBoxProvider.fieldsChoices[field][attribute];
	        }
	        return null;
	    };
	    /**
	     * Get field choices
	     * @param field
	     * @returns {*|null}
	     */
	    DataBoxService.prototype.getFieldChoices = function (field) {
	        return this._dataBoxProvider.fieldsChoices[field]['value'] || null;
	    };
	    /**
	     * Set fields choices.
	     * @param fieldsChoices
	     * @returns {DataBoxService}
	     */
	    DataBoxService.prototype.setFieldsChoices = function (fieldsChoices) {
	        this._dataBoxProvider.fieldsChoices = fieldsChoices;
	        return this;
	    };
	    /**
	     * Get extra data
	     * @param index
	     * @returns {*|null}
	     */
	    DataBoxService.prototype.getExtraData = function (index) {
	        if ((this._dataBoxProvider.extraData) && (index in this._dataBoxProvider.extraData)) {
	            return this._dataBoxProvider.extraData[index];
	        }
	        return null;
	    };
	    /**
	     * Merge configuration attribute
	     * @param attribute
	     * @param value
	     * @returns {DataBoxService}
	     */
	    DataBoxService.prototype.mergeConfAttr = function (attribute, value) {
	        if (attribute in this._dataBoxProvider) {
	            this._dataBoxProvider[attribute] = this._helperService.mergeObjects(this._dataBoxProvider[attribute], value);
	        }
	        return this;
	    };
	    /**
	     * Set configuration attribute
	     * @param attribute
	     * @param value
	     * @returns {DataBoxService}
	     */
	    DataBoxService.prototype.setConfAttr = function (attribute, value) {
	        if (attribute in this._dataBoxProvider) {
	            this._dataBoxProvider[attribute] = value;
	        }
	        return this;
	    };
	    /**
	     * Get configuration attribute
	     * @param attribute
	     * @returns any
	     */
	    DataBoxService.prototype.getConfAttr = function (attribute) {
	        return this._dataBoxProvider[attribute] || null;
	    };
	    /**
	     * Get candidate search
	     * @returns any
	     */
	    DataBoxService.prototype.getCandidateSearch = function () {
	        return this._candidateSearch || null;
	    };
	    /**
	     * Get candidate search attribute
	     * @param attribute
	     * @returns any
	     */
	    DataBoxService.prototype.getCandidateSearchAttr = function (attribute) {
	        return this._candidateSearch[attribute] || null;
	    };
	    /**
	     * Reset form extra fields
	     * @returns {DataBoxService}
	     */
	    DataBoxService.prototype.resetFormExtraFields = function () {
	        if ((this._dataBoxProvider.extraData) && ('formExtraFields' in this._dataBoxProvider.extraData)) {
	            for (var extraField in this._dataBoxProvider.extraData['formExtraFields']) {
	                this._dataBoxProvider.extraData['formExtraFields'][extraField] = null;
	            }
	        }
	        return this;
	    };
	    /**
	     * Convert objects to show in template
	     * @param objects
	     * @param fields
	     * @returns {DataBoxService}
	     */
	    DataBoxService.prototype.convertObjectsToTemplate = function (objects, fields) {
	        // Detect fields that needs to be rendered to view/template
	        // Rendered fields are prefixed with "_rendered_" ("_" save placeholder), this indexes will be
	        // used to render the template in the component.
	        if (objects && fields) {
	            for (var key in fields) {
	                switch (fields[key]['type']) {
	                    case 'boolean':
	                    case 'icon':
	                        for (var _i = 0, objects_1 = objects; _i < objects_1.length; _i++) {
	                            var obj = objects_1[_i];
	                            obj[key] = this.renderField(key, obj[key]);
	                        }
	                        break;
	                    case 'img':
	                        for (var _a = 0, objects_2 = objects; _a < objects_2.length; _a++) {
	                            var obj = objects_2[_a];
	                            obj['_rendered_' + key] = this.renderField(key, obj[key]);
	                        }
	                        break;
	                }
	            }
	        }
	        return this;
	    };
	    /**
	     * Render field
	     * @param field
	     * @param value
	     * @returns {string}
	     */
	    DataBoxService.prototype.renderField = function (field, value) {
	        // Get field metadata
	        field = this._dataBoxProvider.fields[field] || null;
	        // Render field to the view/template
	        if (field) {
	            switch (field['type']) {
	                case 'boolean':
	                    if (Boolean(parseInt(value))) {
	                        return ('<i class="fa fa-check"></i>');
	                    }
	                    else {
	                        return ('<i class="fa fa-ban"></i>');
	                    }
	                case 'icon':
	                    return ('<i class="fa ' + value + '"></i>');
	                case 'img':
	                    return value
	                        ? '<img alt="' + field['label'] + '" class="img-circle" src="'
	                            + (this._helperService.getUploadWebPath(value) || value)
	                            + '">'
	                        : null;
	            }
	        }
	        return value;
	    };
	    /**
	     * New object (call this function to create a new object)
	     * @param object (if provide an object, the new object will be a copy from object)
	     * @returns {Promise}
	     *
	     * Handle response:
	     * this._dataBoxService.newObject(object).then(function(data) {
	     *     // Success
	     * }, function(data) {
	     *     // Fail
	     * });
	     */
	    DataBoxService.prototype.newObject = function (object) {
	        if (object === void 0) { object = null; }
	        var that = this;
	        return new Promise(function (resolve, reject) {
	            var obj = {};
	            if (object) {
	                that._postService.post(that._dataBoxProvider.route['get']['url'] + '/' + object.id, that.getRequestData()).then(function (data) {
	                    data.object = data.object || null;
	                    for (var key in that._dataBoxProvider.fields) {
	                        obj[key] = ((that._dataBoxProvider.fields[key]['acl'] && (that._dataBoxProvider.fields[key]['acl'] === 'read'))
	                            ? null
	                            : data.object[key] || null);
	                    }
	                    that.setWorkObject(obj);
	                    that._selectedObject = null;
	                    that.resetFormExtraFields();
	                    resolve(true);
	                }, function (errors) {
	                    console.log(errors);
	                    reject(false);
	                });
	            }
	            else {
	                for (var key in that._dataBoxProvider.fields) {
	                    obj[key] = null;
	                }
	                that.setWorkObject(obj);
	                that._selectedObject = null;
	                that.resetFormExtraFields();
	                resolve(true);
	            }
	        });
	    };
	    /**
	     * Save object.
	     * @param data
	     * @param id
	     * @returns {Promise}
	     *
	     * Handle response:
	     * this._dataBoxService.save(data).then(
	     *     data => {
	     *         // Handle object
	     *     },
	     *     errors => {
	     *         // Handle errors
	     *     }
	     * );
	     */
	    DataBoxService.prototype.save = function (data, id) {
	        if (id === void 0) { id = null; }
	        var that = this;
	        this.resetPagination();
	        return new Promise(function (resolve, reject) {
	            var route = (id
	                ? (that._dataBoxProvider.route['edit']['url'] + (id ? ('/' + id) : ''))
	                : (that._dataBoxProvider.route['add']
	                    ? that._dataBoxProvider.route['add']['url']
	                    : that._dataBoxProvider.route['edit']['url']));
	            that._postService.post(route, data).then(function (data) {
	                // Update search
	                if (data['search'] && (typeof data['search']['hasMore'] != 'undefined')) {
	                    that._dataBoxProvider.search.hasMore = data['search']['hasMore'];
	                }
	                // Update list of objects
	                that.setObjects(data.objects || null);
	                that.setFieldsChoices(data.fieldsChoices || null);
	                resolve(data.object || null);
	            }, function (errors) {
	                reject(errors);
	            });
	        });
	    };
	    /**
	     * Search objects
	     * @returns {DataBoxService}
	     */
	    DataBoxService.prototype.search = function () {
	        // Update search
	        this._dataBoxProvider['search'] = this._helperService.cloneObject(this._candidateSearch, true);
	        // Refresh objects
	        return this.refresh();
	    };
	    /**
	     * Refresh list of objects
	     * @returns {DataBoxService}
	     */
	    DataBoxService.prototype.refresh = function () {
	        var that = this;
	        this.resetPagination();
	        this._postService.post(this._dataBoxProvider.route['get']['url'], this.getRequestData()).then(function (data) {
	            // Update search
	            if (data['search'] && (typeof data['search']['hasMore'] != 'undefined')) {
	                that._dataBoxProvider.search.hasMore = data['search']['hasMore'];
	            }
	            // Update list of objects
	            that.setObjects(data.objects || null);
	            that.setFieldsChoices(data.fieldsChoices || null);
	        }, function (errors) {
	            console.log(errors);
	        });
	        return this;
	    };
	    /**
	     * Get more objects (pagination)
	     * @returns {DataBoxService}
	     */
	    DataBoxService.prototype.getMoreObjects = function () {
	        var that = this;
	        this._dataBoxProvider.search['offset']++;
	        this._postService.post(this._dataBoxProvider.route['get']['url'], this.getRequestData()).then(function (data) {
	            // Update search
	            if (data['search'] && (typeof data['search']['hasMore'] != 'undefined')) {
	                that._dataBoxProvider.search.hasMore = data['search']['hasMore'];
	            }
	            that.setObjects(data.objects || [], true);
	        }, function (errors) {
	            console.log(errors);
	        });
	        return this;
	    };
	    /**
	     * Delete object.
	     * @param object
	     * @returns {DataBoxService}
	     */
	    DataBoxService.prototype.delete = function (object) {
	        var that = this;
	        this.resetPagination();
	        this._postService.post(this._dataBoxProvider.route['delete']['url'] + '/' + object.id, null).then(function (data) {
	            // Update search
	            if (data['search'] && (typeof data['search']['hasMore'] != 'undefined')) {
	                that._dataBoxProvider.search.hasMore = data['search']['hasMore'];
	            }
	            // Update list of objects
	            that.setObjects(data.objects || null);
	            that.setFieldsChoices(data.fieldsChoices || null);
	        }, function (errors) {
	            console.log(errors);
	        });
	        return this;
	    };
	    /**
	     * Delete objects from array of ids.
	     * @param objects
	     * @returns {DataBoxService}
	     */
	    DataBoxService.prototype.deleteArray = function (data) {
	        var that = this;
	        this.resetPagination();
	        this._postService.post(this._dataBoxProvider.route['delete']['url'], data).then(function (data) {
	            // Update search
	            if (data['search'] && (typeof data['search']['hasMore'] != 'undefined')) {
	                that._dataBoxProvider.search.hasMore = data['search']['hasMore'];
	            }
	            // Update list of objects
	            that.setObjects(data.objects || null);
	            that.setFieldsChoices(data.fieldsChoices || null);
	        }, function (errors) {
	            console.log(errors);
	        });
	        return this;
	    };
	    /**
	     * View object.
	     * @param object
	     * @returns {DataBoxService}
	     */
	    DataBoxService.prototype.view = function (object) {
	        /*window.open(
	            this._dataBoxProvider.route['detail']['url'] + '/' + object.id,
	            "_self"
	        );*/
	        location.href = (this._dataBoxProvider.route['detail']['url'] + '/' + object.id);
	        return this;
	    };
	    /**
	     * Get data to request
	     * @returns {{csrfToken: any}}
	     */
	    DataBoxService.prototype.getRequestData = function () {
	        return {
	            csrfToken: this._helperService.getGlobalVar('csrfToken'),
	            search: this._dataBoxProvider['search']
	        };
	    };
	    /**
	     * Reset pagination
	     * @returns {DataBoxService}
	     */
	    DataBoxService.prototype.resetPagination = function () {
	        this._dataBoxProvider.search.offset = 0;
	        return this;
	    };
	    DataBoxService = __decorate([
	        core_1.Injectable(),
	        __param(0, core_1.Inject('DataBoxProvider')),
	        __param(2, core_1.Inject('HelperService')), 
	        __metadata('design:paramtypes', [Object, post_service_1.PostService, Object])
	    ], DataBoxService);
	    return DataBoxService;
	}());
	exports.DataBoxService = DataBoxService;


/***/ },
/* 387 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var data_box_component_1 = __webpack_require__(388);
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
	        /*let obj = this.copyObject(object1); ?????????????????
	        for (let key in object2) {
	            obj[key] = object2[key];
	        }
	        return obj;*/
	    };
	    /**
	     * Search value in array
	     * @param value
	     * @param array
	     */
	    Helper.inArray = function (value, array) {
	        return ($.inArray(value, array) >= 0) ? true : false;
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
	     * Get data-box provider
	     * @param data
	     * @returns any
	     */
	    Helper.getDataBoxProvider = function (data) {
	        return {
	            label: data.label || '',
	            fields: data.fields || null,
	            fieldsChoices: data.fieldsChoices || null,
	            search: data.search || null,
	            object: data.object || null,
	            objects: data.objects || null,
	            route: data.route || null,
	            extraData: data.extraData || null
	        };
	    };
	    /**
	     * Get data-box actions
	     * @param data
	     * @returns {Actions}
	     */
	    Helper.getDataBoxActions = function (data) {
	        var dataBoxActions = new data_box_component_1.DataBoxActions();
	        if (data.actions) {
	            for (var action in data.actions) {
	                dataBoxActions.setActionAttr(action, 'isEnabled', data.actions[action]);
	            }
	        }
	        return dataBoxActions;
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
	    // Object to use in angular component at runtime.
	    Helper.runtimeVar = {};
	    return Helper;
	}());
	exports.Helper = Helper;


/***/ },
/* 388 */
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
	var modal_service_1 = __webpack_require__(371);
	var data_box_service_1 = __webpack_require__(386);
	var search_pagination_component_1 = __webpack_require__(389);
	var search_component_1 = __webpack_require__(390);
	var expander_component_1 = __webpack_require__(391);
	var helper_1 = __webpack_require__(387);
	// Class (template for actions)
	var DataBoxActions = (function () {
	    function DataBoxActions() {
	        this.actions = {
	            edit: {
	                icon: 'fa-edit',
	                isEnabled: false,
	                class: ''
	            },
	            add: {
	                icon: 'fa-plus-circle',
	                isEnabled: false,
	                class: 'i-circle'
	            },
	            copy: {
	                icon: 'fa-copy',
	                isEnabled: false,
	                class: ''
	            },
	            'delete': {
	                icon: 'fa-trash-o',
	                isEnabled: false,
	                class: ''
	            },
	            search: {
	                icon: 'fa-search',
	                isEnabled: false,
	                class: ''
	            },
	            refresh: {
	                icon: 'fa-refresh',
	                isEnabled: true,
	                class: ''
	            },
	            detail: {
	                icon: 'fa-eye',
	                isEnabled: false,
	                class: ''
	            },
	            collapse: {
	                icon: 'fa-chevron-circle-left',
	                collapsedIcon: 'fa-chevron-circle-left',
	                notCollapsedIcon: 'fa-chevron-circle-down',
	                isEnabled: false,
	                class: 'i-circle'
	            },
	            deleteAll: {
	                icon: 'fa-trash-o',
	                isEnabled: false,
	                class: ''
	            },
	            checkAll: {
	                icon: 'fa-check-circle',
	                isEnabled: false,
	                class: 'i-circle'
	            }
	        };
	    }
	    /**
	     * Set action
	     * @param action
	     * @param value
	     * @returns {DataBoxActions}
	     */
	    DataBoxActions.prototype.setAction = function (action, value) {
	        // If already exists replace it, else add a new entry
	        this.actions[action] = value;
	        return this;
	    };
	    /**
	     * Get action
	     * @param action
	     * @returns {any}
	     */
	    DataBoxActions.prototype.getAction = function (action) {
	        if (action in this.actions) {
	            return this.actions[action];
	        }
	        return null;
	    };
	    /**
	     * Set action attribute
	     * @param action
	     * @param attribute
	     * @param value
	     * @returns {DataBoxActions}
	     */
	    DataBoxActions.prototype.setActionAttr = function (action, attribute, value) {
	        if (action in this.actions) {
	            if (attribute in this.actions[action]) {
	                this.actions[action][attribute] = value;
	            }
	        }
	        return this;
	    };
	    /**
	     * Get action attribute
	     * @param action
	     * @param attribute
	     * @returns {any}
	     */
	    DataBoxActions.prototype.getActionAttr = function (action, attribute) {
	        if (action in this.actions) {
	            if (attribute in this.actions[action]) {
	                return this.actions[action][attribute];
	            }
	        }
	        return null;
	    };
	    /**
	     * Get actions
	     * @returns {any}
	     */
	    DataBoxActions.prototype.getActions = function () {
	        return this.actions;
	    };
	    return DataBoxActions;
	}());
	exports.DataBoxActions = DataBoxActions;
	// Popup Types
	exports.PopupTypes = {
	    add: 'add',
	    edit: 'edit'
	};
	// Component
	var DataBoxComponent = (function () {
	    function DataBoxComponent(_dataBoxService, _modalService, actions, 
	        // Array of "ICustomModalComponent" by action [add, edit]:
	        // provide('Popup', {useValue: {
	        //     add: EntityEmailFormPopupComponent,
	        //     edit: EntityEmailFormPopupComponent
	        // }})
	        // If specific "ICustomModalComponent" by action is not provided then it's use the same for all (_popup):
	        // provide('Popup', {useValue: DataBoxFormPopupComponent})
	        _popup, viewContainerRef, 
	        // used to provide the correct injector to the popups
	        _injector) {
	        this._dataBoxService = _dataBoxService;
	        this._modalService = _modalService;
	        this._popup = _popup;
	        this._injector = _injector;
	        this.checkAll = false; // Control check all action
	        this._extraClass = this._dataBoxService.getExtraData('templateExtraClass') || '';
	        this._modalService.init(viewContainerRef);
	        this.setActions(actions);
	    }
	    /**
	     * Set actions
	     * @param actions
	     * @returns {DataBoxComponent}
	     */
	    DataBoxComponent.prototype.setActions = function (actions) {
	        this._actions = {
	            actions: actions,
	            head: {
	                available: ['search', 'refresh', 'deleteAll', 'add', 'checkAll'],
	                enabled: []
	            },
	            body: {
	                available: ['detail', 'delete', 'copy', 'edit'],
	                enabled: []
	            }
	        };
	        return this.enableActions();
	    };
	    /**
	     * Enable actions
	     * @returns {DataBoxComponent}
	     */
	    DataBoxComponent.prototype.enableActions = function () {
	        // Head
	        for (var _i = 0, _a = this._actions.head.available; _i < _a.length; _i++) {
	            var action = _a[_i];
	            if (this._actions.actions.getActionAttr(action, 'isEnabled')) {
	                this._actions.head.enabled.push(action);
	            }
	        }
	        // Body
	        for (var _b = 0, _c = this._actions.body.available; _b < _c.length; _b++) {
	            var action = _c[_b];
	            if (this._actions.actions.getActionAttr(action, 'isEnabled')) {
	                this._actions.body.enabled.push(action);
	            }
	        }
	        // Init variables
	        this._isExpanded = !this._actions.actions.getActionAttr('collapse', 'isEnabled');
	        return this;
	    };
	    /**
	     * Trigger action
	     * @param $event
	     * @param action
	     * @param data
	     */
	    DataBoxComponent.prototype.triggerAction = function ($event, action, data) {
	        if (data === void 0) { data = null; }
	        if ($event) {
	            $event.preventDefault();
	            $event.stopPropagation();
	        }
	        // Call function
	        var callBack = (action + 'Action');
	        if ($.isFunction(this[callBack])) {
	            if (data) {
	                this[callBack]($event, data);
	            }
	            else {
	                this[callBack]($event);
	            }
	        }
	    };
	    /**
	     * Edit action
	     * @param $event
	     * @param object
	     */
	    DataBoxComponent.prototype.editAction = function ($event, object) {
	        if ($event) {
	            $event.preventDefault();
	        }
	        var that = this;
	        this._dataBoxService.selectObject(object).then(function (data) {
	            that.openPopup(exports.PopupTypes.edit);
	        });
	    };
	    /**
	     * Add action
	     * @param $event
	     */
	    DataBoxComponent.prototype.addAction = function ($event) {
	        if ($event === void 0) { $event = null; }
	        if ($event) {
	            $event.preventDefault();
	        }
	        this._dataBoxService.newObject();
	        this.openPopup(exports.PopupTypes.add);
	    };
	    /**
	     * Copy action. Create a new object from another object
	     * @param $event
	     * @param object
	     */
	    DataBoxComponent.prototype.copyAction = function ($event, object) {
	        if ($event === void 0) { $event = null; }
	        if ($event) {
	            $event.preventDefault();
	        }
	        var that = this;
	        this._dataBoxService.newObject(object).then(function (data) {
	            that.openPopup(exports.PopupTypes.edit);
	        });
	    };
	    /**
	     * Delete action.
	     * @param $event
	     * @param object
	     */
	    DataBoxComponent.prototype.deleteAction = function ($event, object) {
	        var _this = this;
	        if ($event) {
	            $event.preventDefault();
	        }
	        // Dialog message
	        this._modalService.dialog().then(function (hasConfirm) {
	            if (hasConfirm) {
	                _this._dataBoxService.delete(object);
	            }
	            else {
	                return;
	            }
	        }, function (errors) {
	            console.log(errors);
	        });
	    };
	    /**
	     * Delete all checked elements action.
	     * @param $event
	     */
	    DataBoxComponent.prototype.deleteAllAction = function ($event) {
	        var _this = this;
	        if (!$event) {
	            return;
	        }
	        $event.preventDefault();
	        var $container = $($event.currentTarget).parents('.ibox');
	        var $form = $container.find('.ibox-content form');
	        var data = $form.serialize();
	        if (data.length) {
	            // Dialog message
	            this._modalService.dialog().then(function (hasConfirm) {
	                if (hasConfirm) {
	                    _this._dataBoxService.deleteArray(data);
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
	     * Search objects.
	     * @param $event
	     */
	    DataBoxComponent.prototype.searchAction = function ($event) {
	        $event.preventDefault();
	        this._dataBoxService.search();
	    };
	    /**
	     * Detail action.
	     * @param $event
	     * @param object
	     */
	    DataBoxComponent.prototype.detailAction = function ($event, object) {
	        if ($event) {
	            $event.preventDefault();
	        }
	        this._dataBoxService.view(object);
	    };
	    /**
	     * Check all action.
	     * @param $event
	     */
	    DataBoxComponent.prototype.checkAllAction = function ($event) {
	        if ($event === void 0) { $event = null; }
	        if ($event) {
	            $event.preventDefault();
	        }
	        this.checkAll = !this.checkAll;
	    };
	    /**
	     * Collapse action.
	     * @param $event (always null, only to be compatible with the triggerAction)
	     * @param isExpanded (value returned by the expander directive on change)
	     */
	    DataBoxComponent.prototype.collapseAction = function ($event, isExpanded) {
	        this._isExpanded = isExpanded;
	    };
	    /**
	     * Refresh all objects list.
	     * @param $event
	     */
	    DataBoxComponent.prototype.refreshAction = function ($event) {
	        if ($event === void 0) { $event = null; }
	        if ($event) {
	            $event.preventDefault();
	        }
	        this._dataBoxService.refresh();
	    };
	    /**
	     * Open popup
	     * @param popupType
	     * @returns {DataBoxComponent}
	     */
	    DataBoxComponent.prototype.openPopup = function (popupType) {
	        if (popupType === void 0) { popupType = exports.PopupTypes.edit; }
	        // Set edit as default popup type if is not a valid entry
	        popupType = (exports.PopupTypes[popupType] || exports.PopupTypes.edit);
	        var component = this._popup[popupType] || this._popup;
	        var resolvedProviders = core_1.ReflectiveInjector.resolve([
	            core_1.provide('ParentInjector', { useValue: this._injector })
	        ]);
	        // Open popup
	        this._modalService.popup(component, resolvedProviders).then(function (data) { return; }, function (errors) { return; });
	        return this;
	    };
	    DataBoxComponent = __decorate([
	        core_1.Component({
	            selector: '.js_dataBox',
	            templateUrl: helper_1.Helper.getGlobalVar('route') + 'template/default/data-box',
	            directives: [expander_component_1.ExpanderComponent, search_component_1.SearchComponent, search_pagination_component_1.SearchPaginationComponent]
	        }),
	        __param(2, core_1.Inject('DataBoxActions')),
	        __param(3, core_1.Inject('Popup')), 
	        __metadata('design:paramtypes', [data_box_service_1.DataBoxService, modal_service_1.ModalService, DataBoxActions, Object, core_1.ViewContainerRef, core_1.Injector])
	    ], DataBoxComponent);
	    return DataBoxComponent;
	}());
	exports.DataBoxComponent = DataBoxComponent;


/***/ },
/* 389 */
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
	var core_1 = __webpack_require__(5);
	var data_box_service_1 = __webpack_require__(386);
	// Component
	var SearchPaginationComponent = (function () {
	    function SearchPaginationComponent(_dataBoxService) {
	        this._dataBoxService = _dataBoxService;
	    }
	    /**
	     * Get more objects (pagination)
	     * @param $event
	     */
	    SearchPaginationComponent.prototype.getMoreObjects = function ($event) {
	        $event.preventDefault();
	        this._dataBoxService.getMoreObjects();
	    };
	    SearchPaginationComponent = __decorate([
	        core_1.Component({
	            selector: 'js_searchPagination',
	            template: "\n    <div class=\"row\">\n        <div class=\"col-xs-12 search-pagination no-user-select\">\n            <div class=\"hr-line-solid\"></div>\n            <span>{{_dataBoxService.getConfAttr('search')['offset'] + 1}} {{(_dataBoxService.getConfAttr('search')['offset'] > 0) ? 'Pages': 'Page'}} ({{(_dataBoxService.getObjects('search') || []).length}} results)</span>\n            <a class=\"search-has-more -note\"\n               *ngIf=\"_dataBoxService.getConfAttr('search')['hasMore']\"\n               (click)=\"getMoreObjects($event)\"\n               href=\"#\"\n               title=\"Load more results...\">...</a>\n        </div>\n    </div>\n    "
	        }), 
	        __metadata('design:paramtypes', [data_box_service_1.DataBoxService])
	    ], SearchPaginationComponent);
	    return SearchPaginationComponent;
	}());
	exports.SearchPaginationComponent = SearchPaginationComponent;


/***/ },
/* 390 */
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
	var data_box_service_1 = __webpack_require__(386);
	var expander_component_1 = __webpack_require__(391);
	// Component
	var SearchComponent = (function () {
	    function SearchComponent(_dataBoxService, _helperService) {
	        this._dataBoxService = _dataBoxService;
	        this._helperService = _helperService;
	        this._isExpanded = { criteria: false, orderBy: false, fields: false };
	        this._orderByArray = this._dataBoxService.getCandidateSearchAttr('orderBy');
	        this._search = this._dataBoxService.getCandidateSearch();
	        this._fieldsArray =
	            this._helperService.objectsToArray(this._dataBoxService.getConfAttr('fields') || {});
	    }
	    /**
	     * Check if is a valid field
	     * @param field
	     * @returns {boolean}
	     */
	    SearchComponent.prototype.checkOrderByField = function (field) {
	        // Field can be null in case of new order by
	        return ((field in this._dataBoxService.getConfAttr('fields')) || !field);
	    };
	    /**
	     * Add order by
	     * @param $event
	     */
	    SearchComponent.prototype.add = function ($event) {
	        $event.preventDefault();
	        this._orderByArray.push({
	            field: (this._fieldsArray[0] ? this._fieldsArray[0]['key'] : null),
	            value: 'ASC',
	        });
	    };
	    /**
	     * Delete order by
	     * @param $event
	     * @param index
	     */
	    SearchComponent.prototype.del = function ($event, index) {
	        $event.preventDefault();
	        this._orderByArray.splice(index, 1);
	    };
	    /**
	     * Toggle isExpanded
	     * @param $event (value returned by expander directive)
	     * @param property (search header property that triggers the event)
	     */
	    SearchComponent.prototype.toggleIsExpanded = function ($event, target) {
	        for (var indexTarget in this._isExpanded) {
	            if (indexTarget == target) {
	                this._isExpanded[indexTarget] = !this._isExpanded[indexTarget];
	            }
	            else {
	                this._isExpanded[indexTarget] = false;
	            }
	        }
	    };
	    SearchComponent = __decorate([
	        core_1.Component({
	            selector: 'js_search',
	            template: "\n    <div class=\"row form-group\">\n        <label class=\"col-sm-12 control-label\">\n            <js_expander [label]=\"'Filters'\" (onChange)=\"toggleIsExpanded($event, 'criteria')\"></js_expander>\n            <js_expander [label]=\"'Order by'\" (onChange)=\"toggleIsExpanded($event, 'orderBy')\"></js_expander>\n            <js_expander [label]=\"'Fields'\" (onChange)=\"toggleIsExpanded($event, 'fields')\"></js_expander>\n        </label>\n        <div [hidden]=\"!_isExpanded.orderBy\" class=\"col-sm-12 search-order-by\">\n            <template ngFor let-orderBy [ngForOf]=\"_orderByArray\" let-i=\"index\">\n                <div *ngIf=\"checkOrderByField(orderBy['field'])\" class=\"col-sm-6 controller\">\n                    <div class=\"select\">\n                        <select [(ngModel)]=\"orderBy['field']\" class=\"form-control\">\n                            <template ngFor let-field [ngForOf]=\"_fieldsArray\">\n                                <option *ngIf=\"field['value']['type'] != 'img'\"\n                                        value=\"{{field['key']}}\">{{field['value']['label']}}</option>\n                            </template>\n                        </select>\n                        <select [(ngModel)]=\"orderBy['value']\" class=\"form-control\">\n                            <option *ngFor=\"let value of [{key: 'ASC', label: 'Asc'}, {key: 'DESC', label: 'Desc'}]\"\n                                    value=\"{{value['key']}}\">{{value['label']}}</option>\n                        </select>\n                    </div>\n                    <div class=\"actions\">\n                        <a *ngIf=\"_orderByArray.length > 1\" class=\"badge\" (click)=\"del($event, i)\"><i class=\"fa fa-trash-o\"></i></a>\n                        <a *ngIf=\"(i+1) == _orderByArray.length\" class=\"badge\" (click)=\"add($event)\"><i class=\"fa fa-plus\"></i></a>\n                    </div>\n                </div>\n            </template>\n        </div>\n        <div [hidden]=\"!_isExpanded.fields\" class=\"col-sm-12 search-fields\">\n            <select multiple size=\"4\" [(ngModel)]=\"_search['fields']\" class=\"form-control\">\n                <template ngFor let-field [ngForOf]=\"_fieldsArray\">\n                    <option value=\"{{field['key']}}\">{{field['value']['label']}}</option>\n                </template>\n            </select>\n        </div>\n    </div>\n    ",
	            directives: [expander_component_1.ExpanderComponent]
	        }),
	        __param(1, core_1.Inject('HelperService')), 
	        __metadata('design:paramtypes', [data_box_service_1.DataBoxService, Object])
	    ], SearchComponent);
	    return SearchComponent;
	}());
	exports.SearchComponent = SearchComponent;


/***/ },
/* 391 */
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
	var core_1 = __webpack_require__(5);
	// Component
	var ExpanderComponent = (function () {
	    function ExpanderComponent() {
	        this.onChange = new core_1.EventEmitter();
	        this._isExpanded = false;
	    }
	    /**
	     * Toggle expanded
	     * @param $event
	     */
	    ExpanderComponent.prototype.toggleExpanded = function ($event) {
	        $event.preventDefault();
	        this._isExpanded = !this._isExpanded;
	        this.onChange.emit(this._isExpanded);
	    };
	    __decorate([
	        core_1.Input(), 
	        __metadata('design:type', String)
	    ], ExpanderComponent.prototype, "label", void 0);
	    __decorate([
	        core_1.Output(), 
	        __metadata('design:type', Object)
	    ], ExpanderComponent.prototype, "onChange", void 0);
	    ExpanderComponent = __decorate([
	        core_1.Component({
	            selector: 'js_expander',
	            template: "\n    <a class=\"no-user-select expander\" (click)=\"toggleExpanded($event)\">\n        <i [ngClass]=\"['fa', (_isExpanded ? 'fa-angle-down' : 'fa-angle-right')]\"></i>\n        <span>{{label}}</span></a>\n    "
	        }), 
	        __metadata('design:paramtypes', [])
	    ], ExpanderComponent);
	    return ExpanderComponent;
	}());
	exports.ExpanderComponent = ExpanderComponent;


/***/ },
/* 392 */
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
	var core_1 = __webpack_require__(5);
	var data_box_service_1 = __webpack_require__(386);
	var post_service_1 = __webpack_require__(370);
	var helper_1 = __webpack_require__(387);
	var modal_service_1 = __webpack_require__(371);
	var data_box_component_1 = __webpack_require__(388);
	var data_box_note_component_1 = __webpack_require__(393);
	var data_box_file_component_1 = __webpack_require__(394);
	var data_box_image_slide_component_1 = __webpack_require__(395);
	var data_box_video_component_1 = __webpack_require__(400);
	// Dependencies
	var tmpTemplateUrl = helper_1.Helper.getRuntimeVar('templateUrl'); // Save last templateUrl
	var entity_id = (helper_1.Helper.getGlobalVar('local')['object']['entityObj'] // For entities bases on "Entity"
	    || helper_1.Helper.getGlobalVar('local')['object']['id'] // For raw "Entity"
	);
	// EntityAddress
	helper_1.Helper.setRuntimeVar('templateUrl', helper_1.Helper.getGlobalVar('route') + 'entities/entity-address/edit/' + entity_id);
	var entity_address_popup_component_1 = __webpack_require__(402);
	// EntityPhone
	helper_1.Helper.setRuntimeVar('templateUrl', helper_1.Helper.getGlobalVar('route') + 'entities/entity-phone/edit/' + entity_id);
	var entity_phone_popup_component_1 = __webpack_require__(406);
	// EntityEmail
	helper_1.Helper.setRuntimeVar('templateUrl', helper_1.Helper.getGlobalVar('route') + 'entities/entity-email/edit/' + entity_id);
	var entity_email_popup_component_1 = __webpack_require__(407);
	// EntityWebpage
	helper_1.Helper.setRuntimeVar('templateUrl', helper_1.Helper.getGlobalVar('route') + 'entities/entity-webpage/edit/' + entity_id);
	var entity_webpage_popup_component_1 = __webpack_require__(408);
	// EntityNote
	helper_1.Helper.setRuntimeVar('templateUrl', helper_1.Helper.getGlobalVar('route') + 'entities/entity-note/edit/' + entity_id);
	var entity_note_popup_component_1 = __webpack_require__(409);
	// EntityEntityGroup
	helper_1.Helper.setRuntimeVar('templateUrl', helper_1.Helper.getGlobalVar('route') + 'entities/entity-entity-group/edit/' + entity_id);
	var data_box_tree_view_form_component_1 = __webpack_require__(410);
	// EntityFile
	helper_1.Helper.setRuntimeVar('templateUrl', helper_1.Helper.getGlobalVar('route') + 'entities/entity-file/edit/' + entity_id);
	var entity_file_popup_component_1 = __webpack_require__(414);
	// EntityImage
	helper_1.Helper.setRuntimeVar('templateUrl', helper_1.Helper.getGlobalVar('route') + 'entities/entity-image/edit/' + entity_id);
	var entity_image_popup_component_1 = __webpack_require__(417);
	// EntityVideo
	helper_1.Helper.setRuntimeVar('templateUrl', helper_1.Helper.getGlobalVar('route') + 'entities/entity-video/add/' + entity_id);
	var entity_video_popup_component_1 = __webpack_require__(418);
	// EntityVideo dependencies (file)
	helper_1.Helper.setRuntimeVar('templateUrl', helper_1.Helper.getGlobalVar('route') + 'entities/entity-video/add/' + entity_id + '/file');
	var entity_video_file_component_1 = __webpack_require__(421);
	// EntityVideo dependencies (vimeo and youtube)
	helper_1.Helper.setRuntimeVar('templateUrl', helper_1.Helper.getGlobalVar('route') + 'entities/entity-video/add/' + entity_id);
	var entity_video_url_component_1 = __webpack_require__(423);
	// Restore last templateUrl
	helper_1.Helper.setRuntimeVar('templateUrl', tmpTemplateUrl);
	// Component
	var TabsComponent = (function () {
	    function TabsComponent(_dataBoxService, _postService, _modalService, _dynamicComponentLoader, _elementRef, viewContainerRef, _injector) {
	        this._dataBoxService = _dataBoxService;
	        this._postService = _postService;
	        this._modalService = _modalService;
	        this._dynamicComponentLoader = _dynamicComponentLoader;
	        this._elementRef = _elementRef;
	        this._injector = _injector;
	        this._modalService.init(viewContainerRef);
	        this._loadedTabs = [];
	        this.setTab();
	    }
	    /**
	     * Change tab
	     * @param $event
	     */
	    TabsComponent.prototype.setTab = function ($event) {
	        if ($event === void 0) { $event = null; }
	        if ($event) {
	            $event.preventDefault();
	        }
	        var tab = $event ? $($event.target).data('index') : 0;
	        var that = this;
	        // Tab has been loaded
	        if (helper_1.Helper.inArray(tab, that._loadedTabs)) {
	            return;
	        }
	        // Load dependency
	        switch (tab) {
	            case 0:
	                Promise.all([
	                    that.loadDependency(tab, data_box_component_1.DataBoxComponent, entity_address_popup_component_1.EntityAddressPopupComponent, 'entities/entity-address', 'js_tab0_0_viewContainerRef'),
	                    that.loadDependency(tab, data_box_component_1.DataBoxComponent, entity_phone_popup_component_1.EntityPhonePopupComponent, 'entities/entity-phone', 'js_tab0_1_viewContainerRef'),
	                    that.loadDependency(tab, data_box_component_1.DataBoxComponent, entity_email_popup_component_1.EntityEmailPopupComponent, 'entities/entity-email', 'js_tab0_2_viewContainerRef'),
	                    that.loadDependency(tab, data_box_component_1.DataBoxComponent, entity_webpage_popup_component_1.EntityWebpagePopupComponent, 'entities/entity-webpage', 'js_tab0_3_viewContainerRef')
	                ]).then(function (data) {
	                    // Check all results in data
	                    for (var _i = 0, data_1 = data; _i < data_1.length; _i++) {
	                        var result = data_1[_i];
	                        if (!result) {
	                            return;
	                        }
	                    }
	                    // Load with success
	                    that._loadedTabs.push(tab);
	                    return;
	                }, function (error) {
	                    return;
	                });
	                break;
	            case 1:
	                that.loadDependency(tab, data_box_note_component_1.DataBoxNoteComponent, entity_note_popup_component_1.EntityNotePopupComponent, 'entities/entity-note').then(function (data) {
	                    if (data) {
	                        that._loadedTabs.push(tab);
	                    }
	                    return;
	                }, function (error) {
	                    return;
	                });
	                break;
	            case 2:
	                that.loadDependency(tab, data_box_tree_view_form_component_1.DataBoxTreeViewFormComponent, null, 'entities/entity-entity-group').then(function (data) {
	                    if (data) {
	                        that._loadedTabs.push(tab);
	                    }
	                    return;
	                }, function (error) {
	                    return;
	                });
	                break;
	            case 3:
	                that.loadDependency(tab, data_box_file_component_1.DataBoxFileComponent, entity_file_popup_component_1.EntityFilePopupComponent, 'entities/entity-file').then(function (data) {
	                    if (data) {
	                        that._loadedTabs.push(tab);
	                    }
	                    return;
	                }, function (error) {
	                    return;
	                });
	                break;
	            case 4:
	                that.loadDependency(tab, data_box_image_slide_component_1.DataBoxImageSlideComponent, entity_image_popup_component_1.EntityImagePopupComponent, 'entities/entity-image').then(function (data) {
	                    if (data) {
	                        that._loadedTabs.push(tab);
	                    }
	                    return;
	                }, function (error) {
	                    return;
	                });
	                break;
	            case 5:
	                that.loadDependency(tab, data_box_video_component_1.DataBoxVideoComponent, entity_video_popup_component_1.EntityVideoPopupComponent, 'entities/entity-video').then(function (data) {
	                    if (data) {
	                        that._loadedTabs.push(tab);
	                        return;
	                    }
	                    return;
	                }, function (error) {
	                    return;
	                });
	                break;
	        }
	    };
	    /**
	     * Load dependency
	     * @param component
	     * @param popupComponent
	     * @param path
	     * @param viewContainerRef_name
	     * @returns {Promise<boolean>|Promise<TResult>}
	     */
	    TabsComponent.prototype.loadDependency = function (tab, component, popupComponent, path, viewContainerRef_name) {
	        if (viewContainerRef_name === void 0) { viewContainerRef_name = null; }
	        viewContainerRef_name = viewContainerRef_name
	            ? viewContainerRef_name : ('js_tab' + tab + '_viewContainerRef');
	        var that = this;
	        return that._postService.post(helper_1.Helper.getGlobalVar('route') + path + '/data/' + entity_id, null).then(function (data) {
	            // Inject dependencies
	            var injector = null;
	            switch (tab) {
	                case 3:
	                case 4:
	                    injector = core_1.ReflectiveInjector.resolve([
	                        data_box_service_1.DataBoxService,
	                        core_1.provide('DataBoxProvider', { useValue: helper_1.Helper.getDataBoxProvider(data) }),
	                        core_1.provide('FileUploadProvider', { useValue: {
	                                label: data['label'],
	                                url: data['route']['edit']['url']
	                            } }),
	                        core_1.provide('DataBoxActions', { useValue: helper_1.Helper.getDataBoxActions(data) }),
	                        core_1.provide('Popup', { useValue: popupComponent })
	                    ]);
	                    break;
	                case 5:
	                    injector = core_1.ReflectiveInjector.resolve([
	                        data_box_service_1.DataBoxService,
	                        core_1.provide('DataBoxProvider', { useValue: helper_1.Helper.getDataBoxProvider(data) }),
	                        core_1.provide('FileUploadProvider', { useValue: {
	                                label: data['label'],
	                                url: data['route']['add']['url']
	                            } }),
	                        core_1.provide('VideoUploadProvider', { useValue: {
	                                file: entity_video_file_component_1.EntityVideoFileComponent,
	                                youtube: entity_video_url_component_1.EntityVideoUrlComponent,
	                                vimeo: entity_video_url_component_1.EntityVideoUrlComponent
	                            } }),
	                        core_1.provide('DataBoxActions', { useValue: helper_1.Helper.getDataBoxActions(data) }),
	                        core_1.provide('Popup', { useValue: popupComponent })
	                    ]);
	                    break;
	                default:
	                    injector = core_1.ReflectiveInjector.resolve([
	                        data_box_service_1.DataBoxService,
	                        core_1.provide('DataBoxProvider', { useValue: helper_1.Helper.getDataBoxProvider(data) }),
	                        core_1.provide('DataBoxActions', { useValue: helper_1.Helper.getDataBoxActions(data) }),
	                        core_1.provide('Popup', { useValue: popupComponent })
	                    ]);
	            }
	            return that._dynamicComponentLoader.loadNextToLocation(component, that[viewContainerRef_name], injector).then(function (componentRef) {
	                return true;
	            }, function (error) {
	                console.log(error);
	                return false;
	            });
	        }, function (error) {
	            console.log(error);
	            return false;
	        });
	    };
	    __decorate([
	        core_1.ViewChild('js_tab0_0', { read: core_1.ViewContainerRef }), 
	        __metadata('design:type', core_1.ViewContainerRef)
	    ], TabsComponent.prototype, "js_tab0_0_viewContainerRef", void 0);
	    __decorate([
	        core_1.ViewChild('js_tab0_1', { read: core_1.ViewContainerRef }), 
	        __metadata('design:type', core_1.ViewContainerRef)
	    ], TabsComponent.prototype, "js_tab0_1_viewContainerRef", void 0);
	    __decorate([
	        core_1.ViewChild('js_tab0_2', { read: core_1.ViewContainerRef }), 
	        __metadata('design:type', core_1.ViewContainerRef)
	    ], TabsComponent.prototype, "js_tab0_2_viewContainerRef", void 0);
	    __decorate([
	        core_1.ViewChild('js_tab0_3', { read: core_1.ViewContainerRef }), 
	        __metadata('design:type', core_1.ViewContainerRef)
	    ], TabsComponent.prototype, "js_tab0_3_viewContainerRef", void 0);
	    __decorate([
	        core_1.ViewChild('js_tab1', { read: core_1.ViewContainerRef }), 
	        __metadata('design:type', core_1.ViewContainerRef)
	    ], TabsComponent.prototype, "js_tab1_viewContainerRef", void 0);
	    __decorate([
	        core_1.ViewChild('js_tab2', { read: core_1.ViewContainerRef }), 
	        __metadata('design:type', core_1.ViewContainerRef)
	    ], TabsComponent.prototype, "js_tab2_viewContainerRef", void 0);
	    __decorate([
	        core_1.ViewChild('js_tab3', { read: core_1.ViewContainerRef }), 
	        __metadata('design:type', core_1.ViewContainerRef)
	    ], TabsComponent.prototype, "js_tab3_viewContainerRef", void 0);
	    __decorate([
	        core_1.ViewChild('js_tab4', { read: core_1.ViewContainerRef }), 
	        __metadata('design:type', core_1.ViewContainerRef)
	    ], TabsComponent.prototype, "js_tab4_viewContainerRef", void 0);
	    __decorate([
	        core_1.ViewChild('js_tab5', { read: core_1.ViewContainerRef }), 
	        __metadata('design:type', core_1.ViewContainerRef)
	    ], TabsComponent.prototype, "js_tab5_viewContainerRef", void 0);
	    TabsComponent = __decorate([
	        core_1.Component({
	            selector: '.js_tabs',
	            template: "\n    <div class=\"row m-b-md animated fadeInRight\">\n        <div class=\"col-lg-12 m-b-xs\">\n            <div class=\"tabs-container\">\n                <ul class=\"nav nav-tabs\"\n                    (click)=\"setTab($event)\">\n                    <li class=\"active\"><a data-index=\"0\" data-toggle=\"tab\" href=\"#tab0\">Contacts</a></li>\n                    <li class=\"\"><a data-index=\"1\" data-toggle=\"tab\" href=\"#tab1\">Notes</a></li>\n                    <li class=\"\"><a data-index=\"2\" data-toggle=\"tab\" href=\"#tab2\">Groups</a></li>\n                    <li class=\"\"><a data-index=\"3\" data-toggle=\"tab\" href=\"#tab3\">Files</a></li>\n                    <li class=\"\"><a data-index=\"4\" data-toggle=\"tab\" href=\"#tab4\">Gallery</a></li>\n                    <li class=\"\"><a data-index=\"5\" data-toggle=\"tab\" href=\"#tab5\">Videos</a></li>\n                </ul>\n                <div class=\"tab-content\">\n                    <div id=\"tab0\" class=\"tab-pane active\">\n                        <div class=\"panel-body\">\n                            <template #js_tab0_0></template>\n                            <template #js_tab0_1></template>\n                            <template #js_tab0_2></template>\n                            <template #js_tab0_3></template>\n                        </div>\n                    </div>\n                    <div id=\"tab1\" class=\"tab-pane\">\n                        <div class=\"panel-body\">\n                            <template #js_tab1></template>\n                        </div>\n                    </div>\n                    <div id=\"tab2\" class=\"tab-pane\">\n                        <div class=\"panel-body\">\n                            <template #js_tab2></template>\n                        </div>\n                    </div>\n                    <div id=\"tab3\" class=\"tab-pane\">\n                        <div class=\"panel-body\">\n                            <template #js_tab3></template>\n                        </div>\n                    </div>\n                    <div id=\"tab4\" class=\"tab-pane\">\n                        <div class=\"panel-body\">\n                            <template #js_tab4></template>\n                        </div>\n                    </div>\n                    <div id=\"tab5\" class=\"tab-pane\">\n                        <div class=\"panel-body\">\n                            <template #js_tab5></template>\n                        </div>\n                    </div>\n                </div>\n            </div>\n        </div>\n    </div>\n    "
	        }), 
	        __metadata('design:paramtypes', [data_box_service_1.DataBoxService, post_service_1.PostService, modal_service_1.ModalService, core_1.DynamicComponentLoader, core_1.ElementRef, core_1.ViewContainerRef, core_1.Injector])
	    ], TabsComponent);
	    return TabsComponent;
	}());
	exports.TabsComponent = TabsComponent;


/***/ },
/* 393 */
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
	var core_1 = __webpack_require__(5);
	var data_box_service_1 = __webpack_require__(386);
	var data_box_component_1 = __webpack_require__(388);
	var modal_service_1 = __webpack_require__(371);
	var search_pagination_component_1 = __webpack_require__(389);
	var search_component_1 = __webpack_require__(390);
	var expander_component_1 = __webpack_require__(391);
	var helper_1 = __webpack_require__(387);
	// Component
	var DataBoxNoteComponent = (function (_super) {
	    __extends(DataBoxNoteComponent, _super);
	    function DataBoxNoteComponent(dataBoxService, modalService, actions, popup, viewContainerRef, injector) {
	        // Call parent
	        _super.call(this, dataBoxService, modalService, actions, popup, viewContainerRef, injector);
	        this.setActions(actions);
	    }
	    /**
	     * Set actions
	     * @param actions
	     * @returns {DataBoxNoteComponent}
	     */
	    DataBoxNoteComponent.prototype.setActions = function (actions) {
	        this._actions = {
	            actions: actions,
	            head: {
	                available: ['add'],
	                enabled: []
	            },
	            body: {
	                available: ['edit', 'copy', 'delete'],
	                enabled: []
	            }
	        };
	        this.enableActions();
	        return this;
	    };
	    DataBoxNoteComponent = __decorate([
	        core_1.Component({
	            selector: '.js_dataBoxNote',
	            templateUrl: helper_1.Helper.getGlobalVar('route') + 'template/note/data-box',
	            directives: [expander_component_1.ExpanderComponent, search_component_1.SearchComponent, search_pagination_component_1.SearchPaginationComponent]
	        }),
	        __param(2, core_1.Inject('DataBoxActions')),
	        __param(3, core_1.Inject('Popup')), 
	        __metadata('design:paramtypes', [data_box_service_1.DataBoxService, modal_service_1.ModalService, data_box_component_1.DataBoxActions, Object, core_1.ViewContainerRef, core_1.Injector])
	    ], DataBoxNoteComponent);
	    return DataBoxNoteComponent;
	}(data_box_component_1.DataBoxComponent));
	exports.DataBoxNoteComponent = DataBoxNoteComponent;


/***/ },
/* 394 */
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
	var core_1 = __webpack_require__(5);
	var data_box_service_1 = __webpack_require__(386);
	var data_box_component_1 = __webpack_require__(388);
	var modal_service_1 = __webpack_require__(371);
	var helper_1 = __webpack_require__(387);
	var search_pagination_component_1 = __webpack_require__(389);
	var search_component_1 = __webpack_require__(390);
	var expander_component_1 = __webpack_require__(391);
	// Component
	var DataBoxFileComponent = (function (_super) {
	    __extends(DataBoxFileComponent, _super);
	    function DataBoxFileComponent(dataBoxService, modalService, actions, popup, viewContainerRef, injector) {
	        // Call parent
	        _super.call(this, dataBoxService, modalService, actions, popup, viewContainerRef, injector);
	        this.setActions(actions);
	    }
	    /**
	     * Set actions
	     * @param actions
	     * @returns {DataBoxFileComponent}
	     */
	    DataBoxFileComponent.prototype.setActions = function (actions) {
	        this._actions = {
	            actions: actions,
	            head: {
	                available: ['add'],
	                enabled: []
	            },
	            body: {
	                available: ['delete'],
	                enabled: []
	            }
	        };
	        this.enableActions();
	        return this;
	    };
	    /**
	     * Get web path
	     * @param path
	     * @returns {string}
	     */
	    DataBoxFileComponent.prototype.getWebPath = function (path) {
	        return helper_1.Helper.getUploadWebPath(path);
	    };
	    DataBoxFileComponent = __decorate([
	        core_1.Component({
	            selector: '.js_dataBoxFile',
	            templateUrl: helper_1.Helper.getGlobalVar('route') + 'template/file/data-box',
	            directives: [expander_component_1.ExpanderComponent, search_component_1.SearchComponent, search_pagination_component_1.SearchPaginationComponent]
	        }),
	        __param(2, core_1.Inject('DataBoxActions')),
	        __param(3, core_1.Inject('Popup')), 
	        __metadata('design:paramtypes', [data_box_service_1.DataBoxService, modal_service_1.ModalService, data_box_component_1.DataBoxActions, Object, core_1.ViewContainerRef, core_1.Injector])
	    ], DataBoxFileComponent);
	    return DataBoxFileComponent;
	}(data_box_component_1.DataBoxComponent));
	exports.DataBoxFileComponent = DataBoxFileComponent;


/***/ },
/* 395 */
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
	var Slide = __webpack_require__(396);
	var core_1 = __webpack_require__(5);
	var data_box_service_1 = __webpack_require__(386);
	var data_box_component_1 = __webpack_require__(388);
	var modal_service_1 = __webpack_require__(371);
	var data_box_image_component_1 = __webpack_require__(398);
	var helper_1 = __webpack_require__(387);
	var search_pagination_component_1 = __webpack_require__(389);
	// Component
	var DataBoxImageSlideComponent = (function (_super) {
	    __extends(DataBoxImageSlideComponent, _super);
	    function DataBoxImageSlideComponent(dataBoxService, modalService, actions, popup, viewContainerRef, injector, _elementRef) {
	        // Call parent
	        _super.call(this, dataBoxService, modalService, actions, popup, viewContainerRef, injector);
	        this._elementRef = _elementRef;
	    }
	    /**
	     * Get web path
	     * @param path
	     * @returns {string}
	     */
	    DataBoxImageSlideComponent.prototype.getWebPath = function (path) {
	        return helper_1.Helper.getUploadWebPath(path);
	    };
	    /**
	     * Run slide
	     * @param $event
	     */
	    DataBoxImageSlideComponent.prototype.runSlide = function ($event) {
	        $event.preventDefault();
	        $event = $event || window.event;
	        var target = $event.target || $event.srcElement, link = target.src ? target.parentNode : target, $links = $event.currentTarget.getElementsByClassName('js_gallery-item'), options = { index: link, event: $event };
	        Slide($links, options);
	    };
	    DataBoxImageSlideComponent = __decorate([
	        core_1.Component({
	            selector: '.js_dataBoxImageSlide',
	            template: "\n    <div class=\"ibox -compact-view float-e-margins\">\n        <div class=\"ibox-title no-user-select\">\n            <h5>{{_dataBoxService.getLabel()}}<a *ngIf=\"_actions.actions.getActionAttr('collapse', 'isEnabled')\"\n                [ngClass]=\"[_actions.actions.getActionAttr('collapse', 'class')]\"\n                (click)=\"triggerAction($event, 'collapse', null)\"><i [ngClass]=\"['fa', _actions.actions.getActionAttr('collapse', 'icon')]\"></i></a>\n            </h5>\n            <div *ngIf=\"!_collapsed\" class=\"ibox-tools\">\n                <a (click)=\"refreshObjects($event)\"><i class=\"fa fa-refresh\"></i></a>\n                <a *ngFor=\"let action of _actions.head.enabled\"\n                   [ngClass]=\"[_actions.actions.getActionAttr(action, 'class')]\"\n                   (click)=\"triggerAction($event, action, null)\"><i [ngClass]=\"['fa', _actions.actions.getActionAttr(action, 'icon')]\"></i></a>\n            </div>\n        </div>\n        <div *ngIf=\"!_collapsed\" class=\"ibox-content\">\n            <div class=\"table-responsive\">\n                <form>\n                    <div class=\"gallery\" (click)=\"runSlide($event)\">\n                        <a class=\"gallery-item js_gallery-item\"\n                            *ngFor=\"let obj of _dataBoxService.getObjects()\"\n                            href=\"{{getWebPath(obj['path'])}}\"\n                            title=\"{{obj['name']}}\"><img src=\"{{getThumbnailPath(obj['path'])}}\" alt=\"{{obj['name']}}\" width=\"128\" height=\"128\">\n                            <div class=\"ibox-tools no-user-select\"><a class=\"action badge\"\n                                *ngFor=\"let action of _actions.body.enabled\"\n                                (click)=\"triggerAction($event, action, obj)\"><i [ngClass]=\"['fa', _actions.actions.getActionAttr(action, 'icon')]\"></i></a>\n                            </div>\n                        </a>\n                    </div>\n                </form>\n            </div>\n            <js_searchPagination></js_searchPagination>\n        </div>\n    </div>\n    ",
	            directives: [search_pagination_component_1.SearchPaginationComponent]
	        }),
	        __param(2, core_1.Inject('DataBoxActions')),
	        __param(3, core_1.Inject('Popup')), 
	        __metadata('design:paramtypes', [data_box_service_1.DataBoxService, modal_service_1.ModalService, data_box_component_1.DataBoxActions, Object, core_1.ViewContainerRef, core_1.Injector, core_1.ElementRef])
	    ], DataBoxImageSlideComponent);
	    return DataBoxImageSlideComponent;
	}(data_box_image_component_1.DataBoxImageComponent));
	exports.DataBoxImageSlideComponent = DataBoxImageSlideComponent;


/***/ },
/* 396 */
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/*
	 * blueimp Gallery JS
	 * https://github.com/blueimp/Gallery
	 *
	 * Copyright 2013, Sebastian Tschan
	 * https://blueimp.net
	 *
	 * Swipe implementation based on
	 * https://github.com/bradbirdsall/Swipe
	 *
	 * Licensed under the MIT license:
	 * http://www.opensource.org/licenses/MIT
	 */
	
	/* global define, window, document, DocumentTouch */
	
	;(function (factory) {
	  'use strict'
	  if (true) {
	    // Register as an anonymous AMD module:
	    !(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__(397)], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory), __WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ? (__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__))
	  } else {
	    // Browser globals:
	    window.blueimp = window.blueimp || {}
	    window.blueimp.Gallery = factory(
	      window.blueimp.helper || window.jQuery
	    )
	  }
	}(function ($) {
	  'use strict'
	
	  function Gallery (list, options) {
	    if (document.body.style.maxHeight === undefined) {
	      // document.body.style.maxHeight is undefined on IE6 and lower
	      return null
	    }
	    if (!this || this.options !== Gallery.prototype.options) {
	      // Called as function instead of as constructor,
	      // so we simply return a new instance:
	      return new Gallery(list, options)
	    }
	    if (!list || !list.length) {
	      this.console.log(
	        'blueimp Gallery: No or empty list provided as first argument.',
	        list
	      )
	      return
	    }
	    this.list = list
	    this.num = list.length
	    this.initOptions(options)
	    this.initialize()
	  }
	
	  $.extend(Gallery.prototype, {
	    options: {
	      // The Id, element or querySelector of the gallery widget:
	      container: '#blueimp-gallery',
	      // The tag name, Id, element or querySelector of the slides container:
	      slidesContainer: 'div',
	      // The tag name, Id, element or querySelector of the title element:
	      titleElement: 'h3',
	      // The class to add when the gallery is visible:
	      displayClass: 'blueimp-gallery-display',
	      // The class to add when the gallery controls are visible:
	      controlsClass: 'blueimp-gallery-controls',
	      // The class to add when the gallery only displays one element:
	      singleClass: 'blueimp-gallery-single',
	      // The class to add when the left edge has been reached:
	      leftEdgeClass: 'blueimp-gallery-left',
	      // The class to add when the right edge has been reached:
	      rightEdgeClass: 'blueimp-gallery-right',
	      // The class to add when the automatic slideshow is active:
	      playingClass: 'blueimp-gallery-playing',
	      // The class for all slides:
	      slideClass: 'slide',
	      // The slide class for loading elements:
	      slideLoadingClass: 'slide-loading',
	      // The slide class for elements that failed to load:
	      slideErrorClass: 'slide-error',
	      // The class for the content element loaded into each slide:
	      slideContentClass: 'slide-content',
	      // The class for the "toggle" control:
	      toggleClass: 'toggle',
	      // The class for the "prev" control:
	      prevClass: 'prev',
	      // The class for the "next" control:
	      nextClass: 'next',
	      // The class for the "close" control:
	      closeClass: 'close',
	      // The class for the "play-pause" toggle control:
	      playPauseClass: 'play-pause',
	      // The list object property (or data attribute) with the object type:
	      typeProperty: 'type',
	      // The list object property (or data attribute) with the object title:
	      titleProperty: 'title',
	      // The list object property (or data attribute) with the object URL:
	      urlProperty: 'href',
	      // The list object property (or data attribute) with the object srcset URL(s):
	      srcsetProperty: 'urlset',
	      // The gallery listens for transitionend events before triggering the
	      // opened and closed events, unless the following option is set to false:
	      displayTransition: true,
	      // Defines if the gallery slides are cleared from the gallery modal,
	      // or reused for the next gallery initialization:
	      clearSlides: true,
	      // Defines if images should be stretched to fill the available space,
	      // while maintaining their aspect ratio (will only be enabled for browsers
	      // supporting background-size="contain", which excludes IE < 9).
	      // Set to "cover", to make images cover all available space (requires
	      // support for background-size="cover", which excludes IE < 9):
	      stretchImages: false,
	      // Toggle the controls on pressing the Return key:
	      toggleControlsOnReturn: true,
	      // Toggle the controls on slide click:
	      toggleControlsOnSlideClick: true,
	      // Toggle the automatic slideshow interval on pressing the Space key:
	      toggleSlideshowOnSpace: true,
	      // Navigate the gallery by pressing left and right on the keyboard:
	      enableKeyboardNavigation: true,
	      // Close the gallery on pressing the Esc key:
	      closeOnEscape: true,
	      // Close the gallery when clicking on an empty slide area:
	      closeOnSlideClick: true,
	      // Close the gallery by swiping up or down:
	      closeOnSwipeUpOrDown: true,
	      // Emulate touch events on mouse-pointer devices such as desktop browsers:
	      emulateTouchEvents: true,
	      // Stop touch events from bubbling up to ancestor elements of the Gallery:
	      stopTouchEventsPropagation: false,
	      // Hide the page scrollbars:
	      hidePageScrollbars: true,
	      // Stops any touches on the container from scrolling the page:
	      disableScroll: true,
	      // Carousel mode (shortcut for carousel specific options):
	      carousel: false,
	      // Allow continuous navigation, moving from last to first
	      // and from first to last slide:
	      continuous: true,
	      // Remove elements outside of the preload range from the DOM:
	      unloadElements: true,
	      // Start with the automatic slideshow:
	      startSlideshow: false,
	      // Delay in milliseconds between slides for the automatic slideshow:
	      slideshowInterval: 5000,
	      // The starting index as integer.
	      // Can also be an object of the given list,
	      // or an equal object with the same url property:
	      index: 0,
	      // The number of elements to load around the current index:
	      preloadRange: 2,
	      // The transition speed between slide changes in milliseconds:
	      transitionSpeed: 400,
	      // The transition speed for automatic slide changes, set to an integer
	      // greater 0 to override the default transition speed:
	      slideshowTransitionSpeed: undefined,
	      // The event object for which the default action will be canceled
	      // on Gallery initialization (e.g. the click event to open the Gallery):
	      event: undefined,
	      // Callback function executed when the Gallery is initialized.
	      // Is called with the gallery instance as "this" object:
	      onopen: undefined,
	      // Callback function executed when the Gallery has been initialized
	      // and the initialization transition has been completed.
	      // Is called with the gallery instance as "this" object:
	      onopened: undefined,
	      // Callback function executed on slide change.
	      // Is called with the gallery instance as "this" object and the
	      // current index and slide as arguments:
	      onslide: undefined,
	      // Callback function executed after the slide change transition.
	      // Is called with the gallery instance as "this" object and the
	      // current index and slide as arguments:
	      onslideend: undefined,
	      // Callback function executed on slide content load.
	      // Is called with the gallery instance as "this" object and the
	      // slide index and slide element as arguments:
	      onslidecomplete: undefined,
	      // Callback function executed when the Gallery is about to be closed.
	      // Is called with the gallery instance as "this" object:
	      onclose: undefined,
	      // Callback function executed when the Gallery has been closed
	      // and the closing transition has been completed.
	      // Is called with the gallery instance as "this" object:
	      onclosed: undefined
	    },
	
	    carouselOptions: {
	      hidePageScrollbars: false,
	      toggleControlsOnReturn: false,
	      toggleSlideshowOnSpace: false,
	      enableKeyboardNavigation: false,
	      closeOnEscape: false,
	      closeOnSlideClick: false,
	      closeOnSwipeUpOrDown: false,
	      disableScroll: false,
	      startSlideshow: true
	    },
	
	    console: window.console && typeof window.console.log === 'function'
	      ? window.console
	      : {log: function () {}},
	
	    // Detect touch, transition, transform and background-size support:
	    support: (function (element) {
	      var support = {
	        touch: window.ontouchstart !== undefined ||
	          (window.DocumentTouch && document instanceof DocumentTouch)
	      }
	      var transitions = {
	        webkitTransition: {
	          end: 'webkitTransitionEnd',
	          prefix: '-webkit-'
	        },
	        MozTransition: {
	          end: 'transitionend',
	          prefix: '-moz-'
	        },
	        OTransition: {
	          end: 'otransitionend',
	          prefix: '-o-'
	        },
	        transition: {
	          end: 'transitionend',
	          prefix: ''
	        }
	      }
	      var prop
	      for (prop in transitions) {
	        if (transitions.hasOwnProperty(prop) &&
	          element.style[prop] !== undefined) {
	          support.transition = transitions[prop]
	          support.transition.name = prop
	          break
	        }
	      }
	      function elementTests () {
	        var transition = support.transition
	        var prop
	        var translateZ
	        document.body.appendChild(element)
	        if (transition) {
	          prop = transition.name.slice(0, -9) + 'ransform'
	          if (element.style[prop] !== undefined) {
	            element.style[prop] = 'translateZ(0)'
	            translateZ = window.getComputedStyle(element)
	              .getPropertyValue(transition.prefix + 'transform')
	            support.transform = {
	              prefix: transition.prefix,
	              name: prop,
	              translate: true,
	              translateZ: !!translateZ && translateZ !== 'none'
	            }
	          }
	        }
	        if (element.style.backgroundSize !== undefined) {
	          support.backgroundSize = {}
	          element.style.backgroundSize = 'contain'
	          support.backgroundSize.contain = window
	            .getComputedStyle(element)
	            .getPropertyValue('background-size') === 'contain'
	          element.style.backgroundSize = 'cover'
	          support.backgroundSize.cover = window
	            .getComputedStyle(element)
	            .getPropertyValue('background-size') === 'cover'
	        }
	        document.body.removeChild(element)
	      }
	      if (document.body) {
	        elementTests()
	      } else {
	        $(document).on('DOMContentLoaded', elementTests)
	      }
	      return support
	    // Test element, has to be standard HTML and must not be hidden
	    // for the CSS3 tests using window.getComputedStyle to be applicable:
	    }(document.createElement('div'))),
	
	    requestAnimationFrame: window.requestAnimationFrame ||
	      window.webkitRequestAnimationFrame ||
	      window.mozRequestAnimationFrame,
	
	    initialize: function () {
	      this.initStartIndex()
	      if (this.initWidget() === false) {
	        return false
	      }
	      this.initEventListeners()
	      // Load the slide at the given index:
	      this.onslide(this.index)
	      // Manually trigger the slideend event for the initial slide:
	      this.ontransitionend()
	      // Start the automatic slideshow if applicable:
	      if (this.options.startSlideshow) {
	        this.play()
	      }
	    },
	
	    slide: function (to, speed) {
	      window.clearTimeout(this.timeout)
	      var index = this.index
	      var direction
	      var naturalDirection
	      var diff
	      if (index === to || this.num === 1) {
	        return
	      }
	      if (!speed) {
	        speed = this.options.transitionSpeed
	      }
	      if (this.support.transform) {
	        if (!this.options.continuous) {
	          to = this.circle(to)
	        }
	        // 1: backward, -1: forward:
	        direction = Math.abs(index - to) / (index - to)
	        // Get the actual position of the slide:
	        if (this.options.continuous) {
	          naturalDirection = direction
	          direction = -this.positions[this.circle(to)] / this.slideWidth
	          // If going forward but to < index, use to = slides.length + to
	          // If going backward but to > index, use to = -slides.length + to
	          if (direction !== naturalDirection) {
	            to = -direction * this.num + to
	          }
	        }
	        diff = Math.abs(index - to) - 1
	        // Move all the slides between index and to in the right direction:
	        while (diff) {
	          diff -= 1
	          this.move(
	            this.circle((to > index ? to : index) - diff - 1),
	            this.slideWidth * direction,
	            0
	          )
	        }
	        to = this.circle(to)
	        this.move(index, this.slideWidth * direction, speed)
	        this.move(to, 0, speed)
	        if (this.options.continuous) {
	          this.move(
	            this.circle(to - direction),
	            -(this.slideWidth * direction),
	            0
	          )
	        }
	      } else {
	        to = this.circle(to)
	        this.animate(index * -this.slideWidth, to * -this.slideWidth, speed)
	      }
	      this.onslide(to)
	    },
	
	    getIndex: function () {
	      return this.index
	    },
	
	    getNumber: function () {
	      return this.num
	    },
	
	    prev: function () {
	      if (this.options.continuous || this.index) {
	        this.slide(this.index - 1)
	      }
	    },
	
	    next: function () {
	      if (this.options.continuous || this.index < this.num - 1) {
	        this.slide(this.index + 1)
	      }
	    },
	
	    play: function (time) {
	      var that = this
	      window.clearTimeout(this.timeout)
	      this.interval = time || this.options.slideshowInterval
	      if (this.elements[this.index] > 1) {
	        this.timeout = this.setTimeout(
	          (!this.requestAnimationFrame && this.slide) || function (to, speed) {
	            that.animationFrameId = that.requestAnimationFrame.call(
	              window,
	              function () {
	                that.slide(to, speed)
	              }
	            )
	          },
	          [this.index + 1, this.options.slideshowTransitionSpeed],
	          this.interval
	        )
	      }
	      this.container.addClass(this.options.playingClass)
	    },
	
	    pause: function () {
	      window.clearTimeout(this.timeout)
	      this.interval = null
	      this.container.removeClass(this.options.playingClass)
	    },
	
	    add: function (list) {
	      var i
	      if (!list.concat) {
	        // Make a real array out of the list to add:
	        list = Array.prototype.slice.call(list)
	      }
	      if (!this.list.concat) {
	        // Make a real array out of the Gallery list:
	        this.list = Array.prototype.slice.call(this.list)
	      }
	      this.list = this.list.concat(list)
	      this.num = this.list.length
	      if (this.num > 2 && this.options.continuous === null) {
	        this.options.continuous = true
	        this.container.removeClass(this.options.leftEdgeClass)
	      }
	      this.container
	        .removeClass(this.options.rightEdgeClass)
	        .removeClass(this.options.singleClass)
	      for (i = this.num - list.length; i < this.num; i += 1) {
	        this.addSlide(i)
	        this.positionSlide(i)
	      }
	      this.positions.length = this.num
	      this.initSlides(true)
	    },
	
	    resetSlides: function () {
	      this.slidesContainer.empty()
	      this.unloadAllSlides()
	      this.slides = []
	    },
	
	    handleClose: function () {
	      var options = this.options
	      this.destroyEventListeners()
	      // Cancel the slideshow:
	      this.pause()
	      this.container[0].style.display = 'none'
	      this.container
	        .removeClass(options.displayClass)
	        .removeClass(options.singleClass)
	        .removeClass(options.leftEdgeClass)
	        .removeClass(options.rightEdgeClass)
	      if (options.hidePageScrollbars) {
	        document.body.style.overflow = this.bodyOverflowStyle
	      }
	      if (this.options.clearSlides) {
	        this.resetSlides()
	      }
	      if (this.options.onclosed) {
	        this.options.onclosed.call(this)
	      }
	    },
	
	    close: function () {
	      var that = this
	      function closeHandler (event) {
	        if (event.target === that.container[0]) {
	          that.container.off(
	            that.support.transition.end,
	            closeHandler
	          )
	          that.handleClose()
	        }
	      }
	      if (this.options.onclose) {
	        this.options.onclose.call(this)
	      }
	      if (this.support.transition && this.options.displayTransition) {
	        this.container.on(
	          this.support.transition.end,
	          closeHandler
	        )
	        this.container.removeClass(this.options.displayClass)
	      } else {
	        this.handleClose()
	      }
	    },
	
	    circle: function (index) {
	      // Always return a number inside of the slides index range:
	      return (this.num + (index % this.num)) % this.num
	    },
	
	    move: function (index, dist, speed) {
	      this.translateX(index, dist, speed)
	      this.positions[index] = dist
	    },
	
	    translate: function (index, x, y, speed) {
	      var style = this.slides[index].style
	      var transition = this.support.transition
	      var transform = this.support.transform
	      style[transition.name + 'Duration'] = speed + 'ms'
	      style[transform.name] = 'translate(' + x + 'px, ' + y + 'px)' +
	      (transform.translateZ ? ' translateZ(0)' : '')
	    },
	
	    translateX: function (index, x, speed) {
	      this.translate(index, x, 0, speed)
	    },
	
	    translateY: function (index, y, speed) {
	      this.translate(index, 0, y, speed)
	    },
	
	    animate: function (from, to, speed) {
	      if (!speed) {
	        this.slidesContainer[0].style.left = to + 'px'
	        return
	      }
	      var that = this
	      var start = new Date().getTime()
	      var timer = window.setInterval(function () {
	        var timeElap = new Date().getTime() - start
	        if (timeElap > speed) {
	          that.slidesContainer[0].style.left = to + 'px'
	          that.ontransitionend()
	          window.clearInterval(timer)
	          return
	        }
	        that.slidesContainer[0].style.left = (((to - from) *
	          (Math.floor((timeElap / speed) * 100) / 100)) +
	          from) + 'px'
	      }, 4)
	    },
	
	    preventDefault: function (event) {
	      if (event.preventDefault) {
	        event.preventDefault()
	      } else {
	        event.returnValue = false
	      }
	    },
	
	    stopPropagation: function (event) {
	      if (event.stopPropagation) {
	        event.stopPropagation()
	      } else {
	        event.cancelBubble = true
	      }
	    },
	
	    onresize: function () {
	      this.initSlides(true)
	    },
	
	    onmousedown: function (event) {
	      // Trigger on clicks of the left mouse button only
	      // and exclude video elements:
	      if (event.which && event.which === 1 &&
	        event.target.nodeName !== 'VIDEO') {
	        // Preventing the default mousedown action is required
	        // to make touch emulation work with Firefox:
	        event.preventDefault()
	        ;(event.originalEvent || event).touches = [{
	          pageX: event.pageX,
	          pageY: event.pageY
	        }]
	        this.ontouchstart(event)
	      }
	    },
	
	    onmousemove: function (event) {
	      if (this.touchStart) {
	        (event.originalEvent || event).touches = [{
	          pageX: event.pageX,
	          pageY: event.pageY
	        }]
	        this.ontouchmove(event)
	      }
	    },
	
	    onmouseup: function (event) {
	      if (this.touchStart) {
	        this.ontouchend(event)
	        delete this.touchStart
	      }
	    },
	
	    onmouseout: function (event) {
	      if (this.touchStart) {
	        var target = event.target
	        var related = event.relatedTarget
	        if (!related || (related !== target &&
	          !$.contains(target, related))) {
	          this.onmouseup(event)
	        }
	      }
	    },
	
	    ontouchstart: function (event) {
	      if (this.options.stopTouchEventsPropagation) {
	        this.stopPropagation(event)
	      }
	      // jQuery doesn't copy touch event properties by default,
	      // so we have to access the originalEvent object:
	      var touches = (event.originalEvent || event).touches[0]
	      this.touchStart = {
	        // Remember the initial touch coordinates:
	        x: touches.pageX,
	        y: touches.pageY,
	        // Store the time to determine touch duration:
	        time: Date.now()
	      }
	      // Helper variable to detect scroll movement:
	      this.isScrolling = undefined
	      // Reset delta values:
	      this.touchDelta = {}
	    },
	
	    ontouchmove: function (event) {
	      if (this.options.stopTouchEventsPropagation) {
	        this.stopPropagation(event)
	      }
	      // jQuery doesn't copy touch event properties by default,
	      // so we have to access the originalEvent object:
	      var touches = (event.originalEvent || event).touches[0]
	      var scale = (event.originalEvent || event).scale
	      var index = this.index
	      var touchDeltaX
	      var indices
	      // Ensure this is a one touch swipe and not, e.g. a pinch:
	      if (touches.length > 1 || (scale && scale !== 1)) {
	        return
	      }
	      if (this.options.disableScroll) {
	        event.preventDefault()
	      }
	      // Measure change in x and y coordinates:
	      this.touchDelta = {
	        x: touches.pageX - this.touchStart.x,
	        y: touches.pageY - this.touchStart.y
	      }
	      touchDeltaX = this.touchDelta.x
	      // Detect if this is a vertical scroll movement (run only once per touch):
	      if (this.isScrolling === undefined) {
	        this.isScrolling = this.isScrolling ||
	        Math.abs(touchDeltaX) < Math.abs(this.touchDelta.y)
	      }
	      if (!this.isScrolling) {
	        // Always prevent horizontal scroll:
	        event.preventDefault()
	        // Stop the slideshow:
	        window.clearTimeout(this.timeout)
	        if (this.options.continuous) {
	          indices = [
	            this.circle(index + 1),
	            index,
	            this.circle(index - 1)
	          ]
	        } else {
	          // Increase resistance if first slide and sliding left
	          // or last slide and sliding right:
	          this.touchDelta.x = touchDeltaX =
	            touchDeltaX /
	            (
	            ((!index && touchDeltaX > 0) ||
	            (index === this.num - 1 && touchDeltaX < 0))
	              ? (Math.abs(touchDeltaX) / this.slideWidth + 1)
	              : 1
	          )
	          indices = [index]
	          if (index) {
	            indices.push(index - 1)
	          }
	          if (index < this.num - 1) {
	            indices.unshift(index + 1)
	          }
	        }
	        while (indices.length) {
	          index = indices.pop()
	          this.translateX(index, touchDeltaX + this.positions[index], 0)
	        }
	      } else if (this.options.closeOnSwipeUpOrDown) {
	        this.translateY(index, this.touchDelta.y + this.positions[index], 0)
	      }
	    },
	
	    ontouchend: function (event) {
	      if (this.options.stopTouchEventsPropagation) {
	        this.stopPropagation(event)
	      }
	      var index = this.index
	      var speed = this.options.transitionSpeed
	      var slideWidth = this.slideWidth
	      var isShortDuration = Number(Date.now() - this.touchStart.time) < 250
	      // Determine if slide attempt triggers next/prev slide:
	      var isValidSlide =
	      (isShortDuration && Math.abs(this.touchDelta.x) > 20) ||
	        Math.abs(this.touchDelta.x) > slideWidth / 2
	      // Determine if slide attempt is past start or end:
	      var isPastBounds = (!index && this.touchDelta.x > 0) ||
	        (index === this.num - 1 && this.touchDelta.x < 0)
	      var isValidClose = !isValidSlide && this.options.closeOnSwipeUpOrDown &&
	        ((isShortDuration && Math.abs(this.touchDelta.y) > 20) ||
	        Math.abs(this.touchDelta.y) > this.slideHeight / 2)
	      var direction
	      var indexForward
	      var indexBackward
	      var distanceForward
	      var distanceBackward
	      if (this.options.continuous) {
	        isPastBounds = false
	      }
	      // Determine direction of swipe (true: right, false: left):
	      direction = this.touchDelta.x < 0 ? -1 : 1
	      if (!this.isScrolling) {
	        if (isValidSlide && !isPastBounds) {
	          indexForward = index + direction
	          indexBackward = index - direction
	          distanceForward = slideWidth * direction
	          distanceBackward = -slideWidth * direction
	          if (this.options.continuous) {
	            this.move(this.circle(indexForward), distanceForward, 0)
	            this.move(this.circle(index - 2 * direction), distanceBackward, 0)
	          } else if (indexForward >= 0 &&
	            indexForward < this.num) {
	            this.move(indexForward, distanceForward, 0)
	          }
	          this.move(index, this.positions[index] + distanceForward, speed)
	          this.move(
	            this.circle(indexBackward),
	            this.positions[this.circle(indexBackward)] + distanceForward,
	            speed
	          )
	          index = this.circle(indexBackward)
	          this.onslide(index)
	        } else {
	          // Move back into position
	          if (this.options.continuous) {
	            this.move(this.circle(index - 1), -slideWidth, speed)
	            this.move(index, 0, speed)
	            this.move(this.circle(index + 1), slideWidth, speed)
	          } else {
	            if (index) {
	              this.move(index - 1, -slideWidth, speed)
	            }
	            this.move(index, 0, speed)
	            if (index < this.num - 1) {
	              this.move(index + 1, slideWidth, speed)
	            }
	          }
	        }
	      } else {
	        if (isValidClose) {
	          this.close()
	        } else {
	          // Move back into position
	          this.translateY(index, 0, speed)
	        }
	      }
	    },
	
	    ontouchcancel: function (event) {
	      if (this.touchStart) {
	        this.ontouchend(event)
	        delete this.touchStart
	      }
	    },
	
	    ontransitionend: function (event) {
	      var slide = this.slides[this.index]
	      if (!event || slide === event.target) {
	        if (this.interval) {
	          this.play()
	        }
	        this.setTimeout(
	          this.options.onslideend,
	          [this.index, slide]
	        )
	      }
	    },
	
	    oncomplete: function (event) {
	      var target = event.target || event.srcElement
	      var parent = target && target.parentNode
	      var index
	      if (!target || !parent) {
	        return
	      }
	      index = this.getNodeIndex(parent)
	      $(parent).removeClass(this.options.slideLoadingClass)
	      if (event.type === 'error') {
	        $(parent).addClass(this.options.slideErrorClass)
	        this.elements[index] = 3 // Fail
	      } else {
	        this.elements[index] = 2 // Done
	      }
	      // Fix for IE7's lack of support for percentage max-height:
	      if (target.clientHeight > this.container[0].clientHeight) {
	        target.style.maxHeight = this.container[0].clientHeight
	      }
	      if (this.interval && this.slides[this.index] === parent) {
	        this.play()
	      }
	      this.setTimeout(
	        this.options.onslidecomplete,
	        [index, parent]
	      )
	    },
	
	    onload: function (event) {
	      this.oncomplete(event)
	    },
	
	    onerror: function (event) {
	      this.oncomplete(event)
	    },
	
	    onkeydown: function (event) {
	      switch (event.which || event.keyCode) {
	        case 13: // Return
	          if (this.options.toggleControlsOnReturn) {
	            this.preventDefault(event)
	            this.toggleControls()
	          }
	          break
	        case 27: // Esc
	          if (this.options.closeOnEscape) {
	            this.close()
	            // prevent Esc from closing other things
	            event.stopImmediatePropagation()
	          }
	          break
	        case 32: // Space
	          if (this.options.toggleSlideshowOnSpace) {
	            this.preventDefault(event)
	            this.toggleSlideshow()
	          }
	          break
	        case 37: // Left
	          if (this.options.enableKeyboardNavigation) {
	            this.preventDefault(event)
	            this.prev()
	          }
	          break
	        case 39: // Right
	          if (this.options.enableKeyboardNavigation) {
	            this.preventDefault(event)
	            this.next()
	          }
	          break
	      }
	    },
	
	    handleClick: function (event) {
	      var options = this.options
	      var target = event.target || event.srcElement
	      var parent = target.parentNode
	      function isTarget (className) {
	        return $(target).hasClass(className) ||
	        $(parent).hasClass(className)
	      }
	      if (isTarget(options.toggleClass)) {
	        // Click on "toggle" control
	        this.preventDefault(event)
	        this.toggleControls()
	      } else if (isTarget(options.prevClass)) {
	        // Click on "prev" control
	        this.preventDefault(event)
	        this.prev()
	      } else if (isTarget(options.nextClass)) {
	        // Click on "next" control
	        this.preventDefault(event)
	        this.next()
	      } else if (isTarget(options.closeClass)) {
	        // Click on "close" control
	        this.preventDefault(event)
	        this.close()
	      } else if (isTarget(options.playPauseClass)) {
	        // Click on "play-pause" control
	        this.preventDefault(event)
	        this.toggleSlideshow()
	      } else if (parent === this.slidesContainer[0]) {
	        // Click on slide background
	        if (options.closeOnSlideClick) {
	          this.preventDefault(event)
	          this.close()
	        } else if (options.toggleControlsOnSlideClick) {
	          this.preventDefault(event)
	          this.toggleControls()
	        }
	      } else if (parent.parentNode &&
	        parent.parentNode === this.slidesContainer[0]) {
	        // Click on displayed element
	        if (options.toggleControlsOnSlideClick) {
	          this.preventDefault(event)
	          this.toggleControls()
	        }
	      }
	    },
	
	    onclick: function (event) {
	      if (this.options.emulateTouchEvents &&
	        this.touchDelta && (Math.abs(this.touchDelta.x) > 20 ||
	        Math.abs(this.touchDelta.y) > 20)) {
	        delete this.touchDelta
	        return
	      }
	      return this.handleClick(event)
	    },
	
	    updateEdgeClasses: function (index) {
	      if (!index) {
	        this.container.addClass(this.options.leftEdgeClass)
	      } else {
	        this.container.removeClass(this.options.leftEdgeClass)
	      }
	      if (index === this.num - 1) {
	        this.container.addClass(this.options.rightEdgeClass)
	      } else {
	        this.container.removeClass(this.options.rightEdgeClass)
	      }
	    },
	
	    handleSlide: function (index) {
	      if (!this.options.continuous) {
	        this.updateEdgeClasses(index)
	      }
	      this.loadElements(index)
	      if (this.options.unloadElements) {
	        this.unloadElements(index)
	      }
	      this.setTitle(index)
	    },
	
	    onslide: function (index) {
	      this.index = index
	      this.handleSlide(index)
	      this.setTimeout(this.options.onslide, [index, this.slides[index]])
	    },
	
	    setTitle: function (index) {
	      var text = this.slides[index].firstChild.title
	      var titleElement = this.titleElement
	      if (titleElement.length) {
	        this.titleElement.empty()
	        if (text) {
	          titleElement[0].appendChild(document.createTextNode(text))
	        }
	      }
	    },
	
	    setTimeout: function (func, args, wait) {
	      var that = this
	      return func && window.setTimeout(function () {
	        func.apply(that, args || [])
	      }, wait || 0)
	    },
	
	    imageFactory: function (obj, callback) {
	      var that = this
	      var img = this.imagePrototype.cloneNode(false)
	      var url = obj
	      var backgroundSize = this.options.stretchImages
	      var called
	      var element
	      var title
	      function callbackWrapper (event) {
	        if (!called) {
	          event = {
	            type: event.type,
	            target: element
	          }
	          if (!element.parentNode) {
	            // Fix for IE7 firing the load event for
	            // cached images before the element could
	            // be added to the DOM:
	            return that.setTimeout(callbackWrapper, [event])
	          }
	          called = true
	          $(img).off('load error', callbackWrapper)
	          if (backgroundSize) {
	            if (event.type === 'load') {
	              element.style.background = 'url("' + url +
	                '") center no-repeat'
	              element.style.backgroundSize = backgroundSize
	            }
	          }
	          callback(event)
	        }
	      }
	      if (typeof url !== 'string') {
	        url = this.getItemProperty(obj, this.options.urlProperty)
	        title = this.getItemProperty(obj, this.options.titleProperty)
	      }
	      if (backgroundSize === true) {
	        backgroundSize = 'contain'
	      }
	      backgroundSize = this.support.backgroundSize &&
	        this.support.backgroundSize[backgroundSize] && backgroundSize
	      if (backgroundSize) {
	        element = this.elementPrototype.cloneNode(false)
	      } else {
	        element = img
	        img.draggable = false
	      }
	      if (title) {
	        element.title = title
	      }
	      $(img).on('load error', callbackWrapper)
	      img.src = url
	      return element
	    },
	
	    createElement: function (obj, callback) {
	      var type = obj && this.getItemProperty(obj, this.options.typeProperty)
	      var factory = (type && this[type.split('/')[0] + 'Factory']) ||
	        this.imageFactory
	      var element = obj && factory.call(this, obj, callback)
	      var srcset = this.getItemProperty(obj, this.options.srcsetProperty)
	      if (!element) {
	        element = this.elementPrototype.cloneNode(false)
	        this.setTimeout(callback, [{
	          type: 'error',
	          target: element
	        }])
	      }
	      if (srcset) {
	        element.setAttribute('srcset', srcset)
	      }
	      $(element).addClass(this.options.slideContentClass)
	      return element
	    },
	
	    loadElement: function (index) {
	      if (!this.elements[index]) {
	        if (this.slides[index].firstChild) {
	          this.elements[index] = $(this.slides[index])
	            .hasClass(this.options.slideErrorClass) ? 3 : 2
	        } else {
	          this.elements[index] = 1 // Loading
	          $(this.slides[index]).addClass(this.options.slideLoadingClass)
	          this.slides[index].appendChild(this.createElement(
	            this.list[index],
	            this.proxyListener
	          ))
	        }
	      }
	    },
	
	    loadElements: function (index) {
	      var limit = Math.min(this.num, this.options.preloadRange * 2 + 1)
	      var j = index
	      var i
	      for (i = 0; i < limit; i += 1) {
	        // First load the current slide element (0),
	        // then the next one (+1),
	        // then the previous one (-2),
	        // then the next after next (+2), etc.:
	        j += i * (i % 2 === 0 ? -1 : 1)
	        // Connect the ends of the list to load slide elements for
	        // continuous navigation:
	        j = this.circle(j)
	        this.loadElement(j)
	      }
	    },
	
	    unloadElements: function (index) {
	      var i,
	        diff
	      for (i in this.elements) {
	        if (this.elements.hasOwnProperty(i)) {
	          diff = Math.abs(index - i)
	          if (diff > this.options.preloadRange &&
	            diff + this.options.preloadRange < this.num) {
	            this.unloadSlide(i)
	            delete this.elements[i]
	          }
	        }
	      }
	    },
	
	    addSlide: function (index) {
	      var slide = this.slidePrototype.cloneNode(false)
	      slide.setAttribute('data-index', index)
	      this.slidesContainer[0].appendChild(slide)
	      this.slides.push(slide)
	    },
	
	    positionSlide: function (index) {
	      var slide = this.slides[index]
	      slide.style.width = this.slideWidth + 'px'
	      if (this.support.transform) {
	        slide.style.left = (index * -this.slideWidth) + 'px'
	        this.move(
	          index, this.index > index
	            ? -this.slideWidth
	            : (this.index < index ? this.slideWidth : 0),
	          0
	        )
	      }
	    },
	
	    initSlides: function (reload) {
	      var clearSlides,
	        i
	      if (!reload) {
	        this.positions = []
	        this.positions.length = this.num
	        this.elements = {}
	        this.imagePrototype = document.createElement('img')
	        this.elementPrototype = document.createElement('div')
	        this.slidePrototype = document.createElement('div')
	        $(this.slidePrototype).addClass(this.options.slideClass)
	        this.slides = this.slidesContainer[0].children
	        clearSlides = this.options.clearSlides ||
	        this.slides.length !== this.num
	      }
	      this.slideWidth = this.container[0].offsetWidth
	      this.slideHeight = this.container[0].offsetHeight
	      this.slidesContainer[0].style.width =
	        (this.num * this.slideWidth) + 'px'
	      if (clearSlides) {
	        this.resetSlides()
	      }
	      for (i = 0; i < this.num; i += 1) {
	        if (clearSlides) {
	          this.addSlide(i)
	        }
	        this.positionSlide(i)
	      }
	      // Reposition the slides before and after the given index:
	      if (this.options.continuous && this.support.transform) {
	        this.move(this.circle(this.index - 1), -this.slideWidth, 0)
	        this.move(this.circle(this.index + 1), this.slideWidth, 0)
	      }
	      if (!this.support.transform) {
	        this.slidesContainer[0].style.left =
	          (this.index * -this.slideWidth) + 'px'
	      }
	    },
	
	    unloadSlide: function (index) {
	      var slide,
	        firstChild
	      slide = this.slides[index]
	      firstChild = slide.firstChild
	      if (firstChild !== null) {
	        slide.removeChild(firstChild)
	      }
	    },
	
	    unloadAllSlides: function () {
	      var i,
	        len
	      for (i = 0, len = this.slides.length; i < len; i++) {
	        this.unloadSlide(i)
	      }
	    },
	
	    toggleControls: function () {
	      var controlsClass = this.options.controlsClass
	      if (this.container.hasClass(controlsClass)) {
	        this.container.removeClass(controlsClass)
	      } else {
	        this.container.addClass(controlsClass)
	      }
	    },
	
	    toggleSlideshow: function () {
	      if (!this.interval) {
	        this.play()
	      } else {
	        this.pause()
	      }
	    },
	
	    getNodeIndex: function (element) {
	      return parseInt(element.getAttribute('data-index'), 10)
	    },
	
	    getNestedProperty: function (obj, property) {
	      property.replace(
	        // Matches native JavaScript notation in a String,
	        // e.g. '["doubleQuoteProp"].dotProp[2]'
	        /\[(?:'([^']+)'|"([^"]+)"|(\d+))\]|(?:(?:^|\.)([^\.\[]+))/g,
	        function (str, singleQuoteProp, doubleQuoteProp, arrayIndex, dotProp) {
	          var prop = dotProp || singleQuoteProp || doubleQuoteProp ||
	            (arrayIndex && parseInt(arrayIndex, 10))
	          if (str && obj) {
	            obj = obj[prop]
	          }
	        }
	      )
	      return obj
	    },
	
	    getDataProperty: function (obj, property) {
	      if (obj.getAttribute) {
	        var prop = obj.getAttribute('data-' +
	          property.replace(/([A-Z])/g, '-$1').toLowerCase())
	        if (typeof prop === 'string') {
	          if (/^(true|false|null|-?\d+(\.\d+)?|\{[\s\S]*\}|\[[\s\S]*\])$/
	              .test(prop)) {
	            try {
	              return $.parseJSON(prop)
	            } catch (ignore) {}
	          }
	          return prop
	        }
	      }
	    },
	
	    getItemProperty: function (obj, property) {
	      var prop = obj[property]
	      if (prop === undefined) {
	        prop = this.getDataProperty(obj, property)
	        if (prop === undefined) {
	          prop = this.getNestedProperty(obj, property)
	        }
	      }
	      return prop
	    },
	
	    initStartIndex: function () {
	      var index = this.options.index
	      var urlProperty = this.options.urlProperty
	      var i
	      // Check if the index is given as a list object:
	      if (index && typeof index !== 'number') {
	        for (i = 0; i < this.num; i += 1) {
	          if (this.list[i] === index ||
	            this.getItemProperty(this.list[i], urlProperty) ===
	            this.getItemProperty(index, urlProperty)) {
	            index = i
	            break
	          }
	        }
	      }
	      // Make sure the index is in the list range:
	      this.index = this.circle(parseInt(index, 10) || 0)
	    },
	
	    initEventListeners: function () {
	      var that = this
	      var slidesContainer = this.slidesContainer
	      function proxyListener (event) {
	        var type = that.support.transition &&
	        that.support.transition.end === event.type
	          ? 'transitionend'
	          : event.type
	        that['on' + type](event)
	      }
	      $(window).on('resize', proxyListener)
	      $(document.body).on('keydown', proxyListener)
	      this.container.on('click', proxyListener)
	      if (this.support.touch) {
	        slidesContainer
	          .on('touchstart touchmove touchend touchcancel', proxyListener)
	      } else if (this.options.emulateTouchEvents &&
	        this.support.transition) {
	        slidesContainer
	          .on('mousedown mousemove mouseup mouseout', proxyListener)
	      }
	      if (this.support.transition) {
	        slidesContainer.on(
	          this.support.transition.end,
	          proxyListener
	        )
	      }
	      this.proxyListener = proxyListener
	    },
	
	    destroyEventListeners: function () {
	      var slidesContainer = this.slidesContainer
	      var proxyListener = this.proxyListener
	      $(window).off('resize', proxyListener)
	      $(document.body).off('keydown', proxyListener)
	      this.container.off('click', proxyListener)
	      if (this.support.touch) {
	        slidesContainer
	          .off('touchstart touchmove touchend touchcancel', proxyListener)
	      } else if (this.options.emulateTouchEvents &&
	        this.support.transition) {
	        slidesContainer
	          .off('mousedown mousemove mouseup mouseout', proxyListener)
	      }
	      if (this.support.transition) {
	        slidesContainer.off(
	          this.support.transition.end,
	          proxyListener
	        )
	      }
	    },
	
	    handleOpen: function () {
	      if (this.options.onopened) {
	        this.options.onopened.call(this)
	      }
	    },
	
	    initWidget: function () {
	      var that = this
	      function openHandler (event) {
	        if (event.target === that.container[0]) {
	          that.container.off(
	            that.support.transition.end,
	            openHandler
	          )
	          that.handleOpen()
	        }
	      }
	      this.container = $(this.options.container)
	      if (!this.container.length) {
	        this.console.log(
	          'blueimp Gallery: Widget container not found.',
	          this.options.container
	        )
	        return false
	      }
	      this.slidesContainer = this.container.find(
	        this.options.slidesContainer
	      ).first()
	      if (!this.slidesContainer.length) {
	        this.console.log(
	          'blueimp Gallery: Slides container not found.',
	          this.options.slidesContainer
	        )
	        return false
	      }
	      this.titleElement = this.container.find(
	        this.options.titleElement
	      ).first()
	      if (this.num === 1) {
	        this.container.addClass(this.options.singleClass)
	      }
	      if (this.options.onopen) {
	        this.options.onopen.call(this)
	      }
	      if (this.support.transition && this.options.displayTransition) {
	        this.container.on(
	          this.support.transition.end,
	          openHandler
	        )
	      } else {
	        this.handleOpen()
	      }
	      if (this.options.hidePageScrollbars) {
	        // Hide the page scrollbars:
	        this.bodyOverflowStyle = document.body.style.overflow
	        document.body.style.overflow = 'hidden'
	      }
	      this.container[0].style.display = 'block'
	      this.initSlides()
	      this.container.addClass(this.options.displayClass)
	    },
	
	    initOptions: function (options) {
	      // Create a copy of the prototype options:
	      this.options = $.extend({}, this.options)
	      // Check if carousel mode is enabled:
	      if ((options && options.carousel) ||
	        (this.options.carousel && (!options || options.carousel !== false))) {
	        $.extend(this.options, this.carouselOptions)
	      }
	      // Override any given options:
	      $.extend(this.options, options)
	      if (this.num < 3) {
	        // 1 or 2 slides cannot be displayed continuous,
	        // remember the original option by setting to null instead of false:
	        this.options.continuous = this.options.continuous ? null : false
	      }
	      if (!this.support.transition) {
	        this.options.emulateTouchEvents = false
	      }
	      if (this.options.event) {
	        this.preventDefault(this.options.event)
	      }
	    }
	
	  })
	
	  return Gallery
	}))


/***/ },
/* 397 */
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_RESULT__;/*
	 * blueimp helper JS
	 * https://github.com/blueimp/Gallery
	 *
	 * Copyright 2013, Sebastian Tschan
	 * https://blueimp.net
	 *
	 * Licensed under the MIT license:
	 * http://www.opensource.org/licenses/MIT
	 */
	
	/* global define, window, document */
	
	;(function () {
	  'use strict'
	
	  function extend (obj1, obj2) {
	    var prop
	    for (prop in obj2) {
	      if (obj2.hasOwnProperty(prop)) {
	        obj1[prop] = obj2[prop]
	      }
	    }
	    return obj1
	  }
	
	  function Helper (query) {
	    if (!this || this.find !== Helper.prototype.find) {
	      // Called as function instead of as constructor,
	      // so we simply return a new instance:
	      return new Helper(query)
	    }
	    this.length = 0
	    if (query) {
	      if (typeof query === 'string') {
	        query = this.find(query)
	      }
	      if (query.nodeType || query === query.window) {
	        // Single HTML element
	        this.length = 1
	        this[0] = query
	      } else {
	        // HTML element collection
	        var i = query.length
	        this.length = i
	        while (i) {
	          i -= 1
	          this[i] = query[i]
	        }
	      }
	    }
	  }
	
	  Helper.extend = extend
	
	  Helper.contains = function (container, element) {
	    do {
	      element = element.parentNode
	      if (element === container) {
	        return true
	      }
	    } while (element)
	    return false
	  }
	
	  Helper.parseJSON = function (string) {
	    return window.JSON && JSON.parse(string)
	  }
	
	  extend(Helper.prototype, {
	    find: function (query) {
	      var container = this[0] || document
	      if (typeof query === 'string') {
	        if (container.querySelectorAll) {
	          query = container.querySelectorAll(query)
	        } else if (query.charAt(0) === '#') {
	          query = container.getElementById(query.slice(1))
	        } else {
	          query = container.getElementsByTagName(query)
	        }
	      }
	      return new Helper(query)
	    },
	
	    hasClass: function (className) {
	      if (!this[0]) {
	        return false
	      }
	      return new RegExp('(^|\\s+)' + className +
	        '(\\s+|$)').test(this[0].className)
	    },
	
	    addClass: function (className) {
	      var i = this.length
	      var element
	      while (i) {
	        i -= 1
	        element = this[i]
	        if (!element.className) {
	          element.className = className
	          return this
	        }
	        if (this.hasClass(className)) {
	          return this
	        }
	        element.className += ' ' + className
	      }
	      return this
	    },
	
	    removeClass: function (className) {
	      var regexp = new RegExp('(^|\\s+)' + className + '(\\s+|$)')
	      var i = this.length
	      var element
	      while (i) {
	        i -= 1
	        element = this[i]
	        element.className = element.className.replace(regexp, ' ')
	      }
	      return this
	    },
	
	    on: function (eventName, handler) {
	      var eventNames = eventName.split(/\s+/)
	      var i
	      var element
	      while (eventNames.length) {
	        eventName = eventNames.shift()
	        i = this.length
	        while (i) {
	          i -= 1
	          element = this[i]
	          if (element.addEventListener) {
	            element.addEventListener(eventName, handler, false)
	          } else if (element.attachEvent) {
	            element.attachEvent('on' + eventName, handler)
	          }
	        }
	      }
	      return this
	    },
	
	    off: function (eventName, handler) {
	      var eventNames = eventName.split(/\s+/)
	      var i
	      var element
	      while (eventNames.length) {
	        eventName = eventNames.shift()
	        i = this.length
	        while (i) {
	          i -= 1
	          element = this[i]
	          if (element.removeEventListener) {
	            element.removeEventListener(eventName, handler, false)
	          } else if (element.detachEvent) {
	            element.detachEvent('on' + eventName, handler)
	          }
	        }
	      }
	      return this
	    },
	
	    empty: function () {
	      var i = this.length
	      var element
	      while (i) {
	        i -= 1
	        element = this[i]
	        while (element.hasChildNodes()) {
	          element.removeChild(element.lastChild)
	        }
	      }
	      return this
	    },
	
	    first: function () {
	      return new Helper(this[0])
	    }
	
	  })
	
	  if (true) {
	    !(__WEBPACK_AMD_DEFINE_RESULT__ = function () {
	      return Helper
	    }.call(exports, __webpack_require__, exports, module), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__))
	  } else {
	    window.blueimp = window.blueimp || {}
	    window.blueimp.helper = Helper
	  }
	}())


/***/ },
/* 398 */
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
	var core_1 = __webpack_require__(5);
	var data_box_service_1 = __webpack_require__(386);
	var data_box_component_1 = __webpack_require__(388);
	var modal_service_1 = __webpack_require__(371);
	var helper_1 = __webpack_require__(387);
	var search_pagination_component_1 = __webpack_require__(389);
	var search_component_1 = __webpack_require__(390);
	var expander_component_1 = __webpack_require__(391);
	// Set template to Image Crop dependency
	helper_1.Helper.setRuntimeVar('templateUrl', helper_1.Helper.getGlobalVar('route') + 'entities/entity/edit-avatar');
	var image_crop_popup_component_1 = __webpack_require__(399);
	// Component
	var DataBoxImageComponent = (function (_super) {
	    __extends(DataBoxImageComponent, _super);
	    function DataBoxImageComponent(dataBoxService, modalService, actions, popup, viewContainerRef, injector) {
	        // Call parent
	        _super.call(this, dataBoxService, modalService, actions, popup, viewContainerRef, injector);
	        this.setActions(actions);
	    }
	    /**
	     * Set actions
	     * @param actions
	     * @returns {DataBoxImageComponent}
	     */
	    DataBoxImageComponent.prototype.setActions = function (actions) {
	        // Specific feature (set avatar)
	        actions.setAction('avatar', {
	            icon: 'fa-user',
	            isEnabled: true,
	            class: ''
	        });
	        this._actions = {
	            actions: actions,
	            head: {
	                available: ['add'],
	                enabled: []
	            },
	            body: {
	                available: ['avatar', 'delete'],
	                enabled: []
	            }
	        };
	        this.enableActions();
	        return this;
	    };
	    /**
	     * Get thumbnail path
	     * @param path
	     * @returns {string}
	     */
	    DataBoxImageComponent.prototype.getThumbnailPath = function (path) {
	        var partialPath = helper_1.Helper.getUploadWebPath(path), firstPartialPath = partialPath.substring(0, partialPath.lastIndexOf(".")), lastPartialPath = partialPath.substring(partialPath.lastIndexOf("."), partialPath.length);
	        return (firstPartialPath + '.thumbnail-128' + lastPartialPath);
	    };
	    /**
	     * Avatar action
	     * @param $event
	     * @param object
	     */
	    DataBoxImageComponent.prototype.avatarAction = function ($event, object) {
	        if ($event) {
	            $event.preventDefault();
	        }
	        var injector = core_1.ReflectiveInjector.resolve([
	            core_1.provide('ImageCropProvider', { useValue: {
	                    label: this._dataBoxService.getExtraData('imageCrop')['label'],
	                    url: this._dataBoxService.getExtraData('imageCrop')['ActionUrl'],
	                    path: object['path']
	                } })
	        ]);
	        this._modalService.popup(image_crop_popup_component_1.ImageCropPopupComponent, injector).then(function (data) { return; }, function (errors) { return; });
	    };
	    DataBoxImageComponent = __decorate([
	        core_1.Component({
	            selector: '.js_dataBoxImage',
	            templateUrl: helper_1.Helper.getGlobalVar('route') + 'template/image/data-box',
	            directives: [expander_component_1.ExpanderComponent, search_component_1.SearchComponent, search_pagination_component_1.SearchPaginationComponent]
	        }),
	        __param(2, core_1.Inject('DataBoxActions')),
	        __param(3, core_1.Inject('Popup')), 
	        __metadata('design:paramtypes', [data_box_service_1.DataBoxService, modal_service_1.ModalService, data_box_component_1.DataBoxActions, Object, core_1.ViewContainerRef, core_1.Injector])
	    ], DataBoxImageComponent);
	    return DataBoxImageComponent;
	}(data_box_component_1.DataBoxComponent));
	exports.DataBoxImageComponent = DataBoxImageComponent;


/***/ },
/* 399 */
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
	var core_1 = __webpack_require__(5);
	var helper_1 = __webpack_require__(387);
	var post_service_1 = __webpack_require__(370);
	var ng2_bs3_modal_1 = __webpack_require__(373);
	var modal_service_1 = __webpack_require__(371);
	// Component
	var ImageCropPopupComponent = (function (_super) {
	    __extends(ImageCropPopupComponent, _super);
	    function ImageCropPopupComponent(_postService, _imageCropProvider) {
	        _super.call(this);
	        this._postService = _postService;
	        this._imageCropProvider = _imageCropProvider;
	    }
	    /**
	     * Get label
	     * @returns {*|string}
	     */
	    ImageCropPopupComponent.prototype.getLabel = function () {
	        return this._imageCropProvider['label'] || '';
	    };
	    /**
	     * Get web path
	     * @returns {string}
	     */
	    ImageCropPopupComponent.prototype.getWebPath = function () {
	        return helper_1.Helper.getUploadWebPath(this._imageCropProvider['path']);
	    };
	    /**
	     * Save.
	     * @param $event
	     */
	    ImageCropPopupComponent.prototype.save = function ($event) {
	        $event.preventDefault();
	        // Get data from cropper
	        var data = this._$element.cropper('getData', true);
	        // Set form
	        this._$form.find('.path').val(this._imageCropProvider['path']);
	        this._$form.find('.width').val(data['width']);
	        this._$form.find('.height').val(data['height']);
	        this._$form.find('.x').val(data['x']);
	        this._$form.find('.y').val(data['y']);
	        // Get data from form
	        data = this._$form.serialize();
	        var that = this;
	        that._postService.post(that._imageCropProvider['url'], data).then(function (data) {
	            that.close();
	        }, function (errors) {
	            console.log(errors);
	        });
	    };
	    /**
	     * Close popup.
	     * @param $event
	     * @param data (data to return on resolve component)
	     */
	    ImageCropPopupComponent.prototype.close = function ($event, data) {
	        if ($event === void 0) { $event = null; }
	        if (data === void 0) { data = false; }
	        if ($event) {
	            $event.preventDefault();
	        }
	        this._$element.cropper('destroy');
	        _super.prototype.close.call(this, null, data);
	    };
	    /**
	     * Lifecycle callback
	     */
	    ImageCropPopupComponent.prototype.ngAfterViewInit = function () {
	        this._$form = $(this.popup_elementRef.nativeElement).find('form');
	        this._$element = this._$form.find('.image');
	        this._$element.cropper({
	            viewMode: 1,
	            preview: '.image-preview',
	            autoCropArea: 0.6,
	            aspectRatio: 1,
	            rotatable: false,
	            zoomOnWheel: false
	        });
	    };
	    ImageCropPopupComponent = __decorate([
	        core_1.Component({
	            selector: '.js_imageCropPopup',
	            templateUrl: helper_1.Helper.getRuntimeVar('templateUrl'),
	            directives: [ng2_bs3_modal_1.MODAL_DIRECTIVES]
	        }),
	        __param(1, core_1.Inject('ImageCropProvider')), 
	        __metadata('design:paramtypes', [post_service_1.PostService, Object])
	    ], ImageCropPopupComponent);
	    return ImageCropPopupComponent;
	}(modal_service_1.ModalPopup));
	exports.ImageCropPopupComponent = ImageCropPopupComponent;


/***/ },
/* 400 */
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
	var core_1 = __webpack_require__(5);
	var modal_service_1 = __webpack_require__(371);
	var data_box_service_1 = __webpack_require__(386);
	var data_box_component_1 = __webpack_require__(388);
	var video_player_popup_component_1 = __webpack_require__(401);
	var search_pagination_component_1 = __webpack_require__(389);
	var search_component_1 = __webpack_require__(390);
	var expander_component_1 = __webpack_require__(391);
	var helper_1 = __webpack_require__(387);
	// Component
	var DataBoxVideoComponent = (function (_super) {
	    __extends(DataBoxVideoComponent, _super);
	    function DataBoxVideoComponent(dataBoxService, modalService, actions, popup, viewContainerRef, injector) {
	        // Call parent
	        _super.call(this, dataBoxService, modalService, actions, popup, viewContainerRef, injector);
	        this.setActions(actions);
	    }
	    /**
	     * Set actions
	     * @param actions
	     * @returns {DataBoxVideoComponent}
	     */
	    DataBoxVideoComponent.prototype.setActions = function (actions) {
	        this._actions = {
	            actions: actions,
	            head: {
	                available: ['add'],
	                enabled: []
	            },
	            body: {
	                available: ['delete'],
	                enabled: []
	            }
	        };
	        this.enableActions();
	        return this;
	    };
	    /**
	     * Get web path
	     * @param path
	     * @returns {string}
	     */
	    DataBoxVideoComponent.prototype.getWebPath = function (path) {
	        return helper_1.Helper.getUploadWebPath(path);
	    };
	    /**
	     * Run slide
	     * @param $event
	     */
	    DataBoxVideoComponent.prototype.play = function ($event, object) {
	        $event.preventDefault();
	        var injector = core_1.ReflectiveInjector.resolve([
	            core_1.provide('VideoPlayerProvider', { useValue: {
	                    path: object['path'],
	                    extension: object['extension'],
	                    source: object['source']
	                } })
	        ]);
	        this._modalService.popup(video_player_popup_component_1.VideoPlayerPopupComponent, injector, 'lg').then(function (data) { return; }, function (errors) { return; });
	    };
	    DataBoxVideoComponent = __decorate([
	        core_1.Component({
	            selector: '.js_dataBoxVideo',
	            templateUrl: helper_1.Helper.getGlobalVar('route') + 'template/video/data-box',
	            directives: [expander_component_1.ExpanderComponent, search_component_1.SearchComponent, search_pagination_component_1.SearchPaginationComponent]
	        }),
	        __param(2, core_1.Inject('DataBoxActions')),
	        __param(3, core_1.Inject('Popup')), 
	        __metadata('design:paramtypes', [data_box_service_1.DataBoxService, modal_service_1.ModalService, data_box_component_1.DataBoxActions, Object, core_1.ViewContainerRef, core_1.Injector])
	    ], DataBoxVideoComponent);
	    return DataBoxVideoComponent;
	}(data_box_component_1.DataBoxComponent));
	exports.DataBoxVideoComponent = DataBoxVideoComponent;


/***/ },
/* 401 */
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
	var core_1 = __webpack_require__(5);
	var platform_browser_1 = __webpack_require__(259);
	var helper_1 = __webpack_require__(387);
	var ng2_bs3_modal_1 = __webpack_require__(373);
	var modal_service_1 = __webpack_require__(371);
	// Component
	var VideoPlayerPopupComponent = (function (_super) {
	    __extends(VideoPlayerPopupComponent, _super);
	    function VideoPlayerPopupComponent(domSanitizationService, _videoPlayerProvider) {
	        _super.call(this);
	        this._videoPlayerProvider = _videoPlayerProvider;
	        // Set url
	        switch (this._videoPlayerProvider['source']) {
	            case 'file':
	                this._url = domSanitizationService.bypassSecurityTrustUrl(helper_1.Helper.getUploadWebPath(this._videoPlayerProvider['path']));
	                break;
	            case 'youtube':
	                this._url = domSanitizationService.bypassSecurityTrustResourceUrl('https://www.youtube.com/embed/' + this._videoPlayerProvider['path']);
	                break;
	            case 'vimeo':
	                this._url = domSanitizationService.bypassSecurityTrustResourceUrl('https://player.vimeo.com/video/' + this._videoPlayerProvider['path']);
	                break;
	        }
	    }
	    /**
	     * Get extension
	     * @returns {string}
	     */
	    VideoPlayerPopupComponent.prototype.getExtension = function () {
	        return this._videoPlayerProvider['extension'];
	    };
	    /**
	     * Get source
	     * @returns {string}
	     */
	    VideoPlayerPopupComponent.prototype.getSource = function () {
	        return this._videoPlayerProvider['source'];
	    };
	    VideoPlayerPopupComponent = __decorate([
	        core_1.Component({
	            selector: '.js_videoPlayerPopup',
	            template: "\n    <modal #popup [animation]=\"false\" [backdrop]=\"'static'\" (onDismiss)=\"close(null, false)\">\n        <div class=\"form-wrapper gray-bg\">\n            <div class=\"row\">\n                <div class=\"col-lg-12\">\n                    <div class=\"ibox float-e-margins\">\n                        <div class=\"ibox-title\">\n                            <h5>Video Player</h5>\n                            <div class=\"ibox-tools\">\n                                <a class=\"i-circle\" (click)=\"close($event, true)\"><i class=\"fa fa-times-circle\"></i></a>\n                            </div>\n                        </div>\n                        <div class=\"ibox-content video-player\">\n                            <video *ngIf=\"getSource() == 'file'\" controls><source [src]=\"_url\" type=\"video/{{getExtension()}}\"></video>\n                            <iframe *ngIf=\"getSource() == 'youtube'\" [src]=\"_url\" frameborder=\"0\" allowfullscreen></iframe>\n                            <iframe *ngIf=\"getSource() == 'vimeo'\" [src]=\"_url\" frameborder=\"0\" allowfullscreen></iframe>\n                        </div>\n                    </div>\n                </div>\n            </div>\n        </div>\n    </modal>\n    ",
	            directives: [ng2_bs3_modal_1.MODAL_DIRECTIVES]
	        }),
	        __param(1, core_1.Inject('VideoPlayerProvider')), 
	        __metadata('design:paramtypes', [platform_browser_1.DomSanitizationService, Object])
	    ], VideoPlayerPopupComponent);
	    return VideoPlayerPopupComponent;
	}(modal_service_1.ModalPopup));
	exports.VideoPlayerPopupComponent = VideoPlayerPopupComponent;


/***/ },
/* 402 */
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
	var core_1 = __webpack_require__(5);
	var forms_1 = __webpack_require__(333);
	var helper_1 = __webpack_require__(387);
	var data_box_form_popup_component_1 = __webpack_require__(403);
	var data_box_service_1 = __webpack_require__(386);
	var ng2_bs3_modal_1 = __webpack_require__(373);
	var modal_service_1 = __webpack_require__(371);
	var EntityAddressPopupComponent = (function (_super) {
	    __extends(EntityAddressPopupComponent, _super);
	    function EntityAddressPopupComponent(dataBoxService, modalService, formBuilder, elementRef, parentInjector) {
	        // Call parent
	        _super.call(this, dataBoxService, modalService, formBuilder, elementRef, parentInjector);
	    }
	    EntityAddressPopupComponent = __decorate([
	        core_1.Component({
	            selector: '#js_entityAddressPopup',
	            templateUrl: helper_1.Helper.getRuntimeVar('templateUrl'),
	            directives: [forms_1.FORM_DIRECTIVES, forms_1.REACTIVE_FORM_DIRECTIVES, ng2_bs3_modal_1.MODAL_DIRECTIVES]
	        }),
	        __param(4, core_1.Inject('ParentInjector')), 
	        __metadata('design:paramtypes', [data_box_service_1.DataBoxService, modal_service_1.ModalService, forms_1.FormBuilder, core_1.ElementRef, core_1.Injector])
	    ], EntityAddressPopupComponent);
	    return EntityAddressPopupComponent;
	}(data_box_form_popup_component_1.DataBoxFormPopupComponent));
	exports.EntityAddressPopupComponent = EntityAddressPopupComponent;


/***/ },
/* 403 */
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
	var core_1 = __webpack_require__(5);
	var forms_1 = __webpack_require__(333);
	var data_box_service_1 = __webpack_require__(386);
	var ng2_bs3_modal_1 = __webpack_require__(373);
	var modal_service_1 = __webpack_require__(371);
	var helper_1 = __webpack_require__(387);
	var data_box_form_component_1 = __webpack_require__(404);
	var auto_complete_component_1 = __webpack_require__(405);
	// Component
	var DataBoxFormPopupComponent = (function (_super) {
	    __extends(DataBoxFormPopupComponent, _super);
	    function DataBoxFormPopupComponent(dataBoxService, modalService, formBuilder, elementRef, parentInjector // parentInjector to provide the correct injector to popups
	        ) {
	        _super.call(this, dataBoxService, modalService, formBuilder, elementRef, parentInjector);
	        this.dismissEmitter = new core_1.EventEmitter();
	    }
	    /**
	     * Save object. Handle submit form.
	     * This override add a closePopup behavior.
	     * @param $event
	     * @param closePopup
	     * @returns {Promise}
	     *
	     * Handle response:
	     * this.save().then(
	     *     data => {
	     *         // Success
	     *     },
	     *     error => {
	     *         // Fail
	     *     }
	     * );
	     */
	    DataBoxFormPopupComponent.prototype.save = function ($event, closePopup) {
	        if ($event === void 0) { $event = null; }
	        if (closePopup === void 0) { closePopup = false; }
	        if ($event) {
	            $event.preventDefault();
	        }
	        var that = this;
	        return new Promise(function (resolve, reject) {
	            that.saveSuper($event).then(function (data) {
	                // Close popup
	                if (closePopup) {
	                    that.close();
	                }
	                return resolve(data);
	            }, function (error) {
	                return reject(error);
	            });
	        });
	    };
	    /**
	     * Call save of super (parent)
	     * @param $event
	     * @returns {Promise<*>}
	     */
	    DataBoxFormPopupComponent.prototype.saveSuper = function ($event) {
	        if ($event === void 0) { $event = null; }
	        return _super.prototype.save.call(this, $event);
	    };
	    /**
	     * Cancel form.
	     * @param $event
	     */
	    DataBoxFormPopupComponent.prototype.cancel = function ($event) {
	        this.close($event);
	    };
	    /**
	     * Close popup.
	     * @param $event
	     * @param data (data to return on resolve component)
	     */
	    DataBoxFormPopupComponent.prototype.close = function ($event, data) {
	        var _this = this;
	        if ($event === void 0) { $event = null; }
	        if (data === void 0) { data = false; }
	        if ($event) {
	            $event.preventDefault();
	        }
	        // Current form object has changes from user?
	        if (!helper_1.Helper.isEqualObject(this.object.original, this.object.form)) {
	            // Dialog message
	            this._modalService.dialog().then(function (hasConfirm) {
	                if (hasConfirm) {
	                    _this.dismissEmitter.emit(data);
	                    _this.popup.close();
	                }
	                return;
	            }, function (errors) {
	                return;
	            });
	        }
	        else {
	            this.dismissEmitter.emit(data);
	            this.popup.close();
	        }
	    };
	    /**
	     * Lifecycle callback
	     */
	    DataBoxFormPopupComponent.prototype.ngAfterViewInit = function () {
	        this.$form = $(this.popup_elementRef.nativeElement).find('form');
	    };
	    __decorate([
	        core_1.ViewChild('popup'), 
	        __metadata('design:type', ng2_bs3_modal_1.ModalComponent)
	    ], DataBoxFormPopupComponent.prototype, "popup", void 0);
	    __decorate([
	        core_1.ViewChild('popup', { read: core_1.ElementRef }), 
	        __metadata('design:type', core_1.ElementRef)
	    ], DataBoxFormPopupComponent.prototype, "popup_elementRef", void 0);
	    DataBoxFormPopupComponent = __decorate([
	        core_1.Component({
	            selector: '.js_dataBoxFormPopup',
	            templateUrl: helper_1.Helper.getRuntimeVar('templateUrl'),
	            directives: [forms_1.FORM_DIRECTIVES, forms_1.REACTIVE_FORM_DIRECTIVES, auto_complete_component_1.AutoCompleteComponent, ng2_bs3_modal_1.MODAL_DIRECTIVES]
	        }),
	        __param(4, core_1.Inject('ParentInjector')), 
	        __metadata('design:paramtypes', [data_box_service_1.DataBoxService, modal_service_1.ModalService, forms_1.FormBuilder, core_1.ElementRef, core_1.Injector])
	    ], DataBoxFormPopupComponent);
	    return DataBoxFormPopupComponent;
	}(data_box_form_component_1.DataBoxFormComponent));
	exports.DataBoxFormPopupComponent = DataBoxFormPopupComponent;


/***/ },
/* 404 */
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
	var forms_1 = __webpack_require__(333);
	var data_box_service_1 = __webpack_require__(386);
	var modal_service_1 = __webpack_require__(371);
	var auto_complete_component_1 = __webpack_require__(405);
	var helper_1 = __webpack_require__(387);
	// FormModes
	exports.FormModes = {
	    'new': 'new',
	    'edit': 'edit'
	};
	// Component
	var DataBoxFormComponent = (function () {
	    function DataBoxFormComponent(dataBoxService, _modalService, formBuilder, _elementRef, parentInjector // parentInjector to provide the correct injector to popups
	        ) {
	        var _this = this;
	        this._modalService = _modalService;
	        this._elementRef = _elementRef;
	        this.formModes = exports.FormModes; // Used inside the view
	        this.$form = null; // Object form
	        // Get resources from parentInjector
	        if (parentInjector) {
	            this._dataBoxService = parentInjector.get(data_box_service_1.DataBoxService);
	        }
	        else {
	            this._dataBoxService = dataBoxService;
	        }
	        this.object = {
	            original: {},
	            form: {},
	            extraFields: this._dataBoxService.getExtraData('formExtraFields')
	        };
	        this.errors = {};
	        // Object change event subscription
	        this._selectedObjectSubscription = this._dataBoxService.getSelectedObjectEmitter()
	            .subscribe(function (object) { return _this.selectedObjectChange(object); });
	        // Set object
	        this.setObject(this._dataBoxService.getSelectedObject());
	        // Form build
	        var formControls = {};
	        for (var field in this._dataBoxService.getFields()) {
	            formControls[field] = [this.object.form[field]];
	        }
	        // Extra fields
	        for (var field in this.object.extraFields) {
	            formControls[field] = [null];
	        }
	        this.form = formBuilder.group(formControls);
	    }
	    /**
	     * Handle selected object changes from service
	     * @param object
	     * @returns {DataBoxFormComponent}
	     */
	    DataBoxFormComponent.prototype.selectedObjectChange = function (object) {
	        // New selected object on service is different
	        if (this.object.original !== object) {
	            // Update object to new selected object on service
	            this.confirmSetObject(object);
	        }
	        return this;
	    };
	    /**
	     * Confirm Set object. Check for object changes and confirm with the user to discard them.
	     * @param object
	     * @returns {DataBoxFormComponent}
	     */
	    DataBoxFormComponent.prototype.confirmSetObject = function (object) {
	        var _this = this;
	        // Current form object has changes from user?
	        if (!helper_1.Helper.isEqualObject(this.object.original, this.object.form)) {
	            // Dialog message
	            this._modalService.dialog().then(function (hasConfirm) {
	                if (hasConfirm) {
	                    _this.setObject(object);
	                }
	                else {
	                    // Keep object and set as selected object on service
	                    _this._dataBoxService.setObject(_this.object.original);
	                }
	                return _this;
	            }, function (errors) { return _this; });
	        }
	        else {
	            this.setObject(object);
	        }
	        return this;
	    };
	    /**
	     * Set object
	     * @param object
	     * @returns {DataBoxFormComponent}
	     */
	    DataBoxFormComponent.prototype.setObject = function (object) {
	        // Update object to new selected object on service
	        this.object.original = object;
	        this.object.form = helper_1.Helper.cloneObject(this.object.original);
	        return this;
	    };
	    /**
	     * Set Object Attribute
	     * @param attribute
	     * @param value
	     */
	    DataBoxFormComponent.prototype.setObjectAttr = function (attribute, value) {
	        if (attribute in this.object.form) {
	            this.object.form[attribute] = value;
	        }
	    };
	    /**
	     * Render field
	     * @param field
	     * @param value
	     * @returns {string}
	     */
	    DataBoxFormComponent.prototype.renderField = function (field, value) {
	        return this._dataBoxService.renderField(field, value);
	    };
	    /**
	     * Save object. Handle submit form
	     * @param $event
	     * @param closePopup
	     * @returns {Promise}
	     *
	     * Handle response:
	     * this.save().then(
	     *     data => {
	     *         // Success
	     *     },
	     *     errors => {
	     *         // Fail
	     *     }
	     * );
	     */
	    DataBoxFormComponent.prototype.save = function ($event, closePopup) {
	        if ($event === void 0) { $event = null; }
	        if (closePopup === void 0) { closePopup = false; }
	        if ($event) {
	            $event.preventDefault();
	        }
	        var that = this;
	        return new Promise(function (resolve, reject) {
	            // Current form object has changes from user?
	            if (!helper_1.Helper.isEqualObject(that.object.original, that.object.form) || !that.object.form['id']) {
	                // Check form errors
	                that.errors = {};
	                for (var control in that.form.controls) {
	                    if (!that.form.controls[control].valid) {
	                        that.errors[control] = ['Required'];
	                    }
	                }
	                if (Object.keys(that.errors).length > 0) {
	                    return reject(false);
	                }
	                // Get form data
	                var data = that.$form.serialize();
	                var id = that.object.form['id'] ? that.object.form['id'] : null;
	                // Save form
	                that._dataBoxService.save(data, id).then(function (object) {
	                    // Update form after save with saved object
	                    that.setObject(object);
	                    // Update service with saved object
	                    that._dataBoxService.setObject(that.object.original);
	                    return resolve(true);
	                }, function (errors) {
	                    if (errors) {
	                        that.errors = errors;
	                    }
	                    return reject(errors);
	                });
	            }
	            else {
	                return resolve(true);
	            }
	        });
	    };
	    /**
	     * Reset form.
	     * @param $event
	     * @returns {DataBoxFormComponent}
	     */
	    DataBoxFormComponent.prototype.reset = function ($event) {
	        $event.preventDefault();
	        this.confirmSetObject(this.object.original);
	        return this;
	    };
	    /**
	     * Lifecycle callback
	     */
	    DataBoxFormComponent.prototype.ngAfterViewInit = function () {
	        this.$form = $(this._elementRef.nativeElement).find('form');
	    };
	    /**
	     * Lifecycle callback
	     */
	    DataBoxFormComponent.prototype.ngOnDestroy = function () {
	        this._selectedObjectSubscription.unsubscribe();
	    };
	    DataBoxFormComponent = __decorate([
	        core_1.Component({
	            selector: '.js_dataBoxForm',
	            templateUrl: helper_1.Helper.getRuntimeVar('templateUrl'),
	            directives: [forms_1.FORM_DIRECTIVES, forms_1.REACTIVE_FORM_DIRECTIVES, auto_complete_component_1.AutoCompleteComponent]
	        }),
	        __param(4, core_1.Inject('ParentInjector')), 
	        __metadata('design:paramtypes', [data_box_service_1.DataBoxService, modal_service_1.ModalService, forms_1.FormBuilder, core_1.ElementRef, core_1.Injector])
	    ], DataBoxFormComponent);
	    return DataBoxFormComponent;
	}());
	exports.DataBoxFormComponent = DataBoxFormComponent;


/***/ },
/* 405 */
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
	var data_box_service_1 = __webpack_require__(386);
	var modal_service_1 = __webpack_require__(371);
	var post_service_1 = __webpack_require__(370);
	var data_box_component_1 = __webpack_require__(388);
	// Component
	var AutoCompleteComponent = (function () {
	    function AutoCompleteComponent(_postService, _modalService, _dataBoxService, _injector, _autoCompleteProviders, _helperService) {
	        this._postService = _postService;
	        this._modalService = _modalService;
	        this._dataBoxService = _dataBoxService;
	        this._injector = _injector;
	        this._autoCompleteProviders = _autoCompleteProviders;
	        this._helperService = _helperService;
	        this._isHidden = true;
	        this._lastSelectedChoice = { id: null, name: '' };
	        this._fieldName = '';
	        this._search = {
	            term: '', lastTerm: null, offset: 0, lastOffset: 0, hasMore: true
	        };
	    }
	    /**
	     * Host event
	     * @param $event
	     */
	    AutoCompleteComponent.prototype.onDocumentClick = function ($event) {
	        this._isHidden = true;
	    };
	    /**
	     * Empty choice
	     * @param $event
	     */
	    AutoCompleteComponent.prototype.emptyChoice = function ($event) {
	        $event.preventDefault();
	        $event.stopPropagation();
	        this.object.form[this.field] = null;
	        this._isHidden = !(this._helperService.objectLength(this._choices) > 0);
	    };
	    /**
	     * Set choice
	     * @param $event
	     * @param choice
	     */
	    AutoCompleteComponent.prototype.setChoice = function ($event, choice) {
	        $event.preventDefault();
	        this.object.form[this.field] = choice['id'];
	        this._lastSelectedChoice = { id: choice.id, name: choice.name };
	    };
	    /**
	     * Trigger isHidden
	     * @param $event
	     */
	    AutoCompleteComponent.prototype.triggerIsHidden = function ($event) {
	        $event.preventDefault();
	        $event.stopPropagation();
	        if (this._helperService.objectLength(this._choices) > 0) {
	            this._isHidden = !this._isHidden;
	        }
	        else {
	            // Force to get choices when choices list and input is empty
	            this.getChoices(true);
	        }
	    };
	    /**
	     * On enter key (pagination)
	     * @param $event
	     */
	    AutoCompleteComponent.prototype.onEnterKey = function ($event) {
	        this._search.term = $event.target.value;
	        this.getChoices();
	    };
	    /**
	     * Get more objects (pagination)
	     * @param $event
	     */
	    AutoCompleteComponent.prototype.getMoreObjects = function ($event) {
	        $event.preventDefault();
	        $event.stopPropagation();
	        this._search.offset++;
	        this.getChoices();
	    };
	    /**
	     * Get choices
	     * @param forceSubmit
	     */
	    AutoCompleteComponent.prototype.getChoices = function (forceSubmit) {
	        if (forceSubmit === void 0) { forceSubmit = false; }
	        // Only submit with multiples of three or forcing submit
	        if (((((this._search.term.length > 0) && (this._search.term.length % 3 === 0)) || forceSubmit)
	            && (this._search.term != this._search.lastTerm))
	            || (this._search.offset > this._search.lastOffset)) {
	            // Update search last info
	            if (this._search.term != this._search.lastTerm) {
	                this._search.lastTerm = this._search.term; // Update term
	                this._search.lastOffset = this._search.offset = 0; // Reset offset
	            }
	            else {
	                this._search.lastOffset = this._search.offset; // Update offset
	            }
	            var that_1 = this;
	            var data = {
	                csrfToken: this._helperService.getGlobalVar('csrfToken'),
	                search: {
	                    criteria: {
	                        name: {
	                            'expr': 'lrlike',
	                            'value': this._search.term
	                        }
	                    },
	                    offset: this._search.offset
	                }
	            };
	            this._postService.post(this._childDataBoxService.getRoute('choices'), data).then(function (data) {
	                that_1._search.hasMore = data.search['hasMore'];
	                if (that_1._search.offset > 0) {
	                    // Append choices
	                    that_1._choices = that_1._choices.concat(data.objects || []);
	                }
	                else {
	                    // Reset choices
	                    that_1._choices = data.objects || [];
	                }
	                that_1._isHidden = !(that_1._helperService.objectLength(that_1._choices) > 0);
	                return;
	            }, function (error) {
	                console.log(error);
	                return;
	            });
	        }
	    };
	    /**
	     * Open popup
	     * @param $event
	     * @param popupType
	     */
	    AutoCompleteComponent.prototype.openPopup = function ($event, popupType) {
	        if (popupType === void 0) { popupType = data_box_component_1.PopupTypes.edit; }
	        $event.preventDefault();
	        popupType = (data_box_component_1.PopupTypes[popupType] || data_box_component_1.PopupTypes.edit); // Set edit as default popup type if is not a valid entry
	        var component = this._autoCompleteProvider.popup[popupType] || this._autoCompleteProvider.popup;
	        var that = this;
	        var resolvedProviders = core_1.ReflectiveInjector.resolve([
	            core_1.provide('ParentInjector', { useValue: this._childInjector })
	        ]);
	        this._modalService.popup(component, resolvedProviders).then(function (data) {
	            // Inject object to edit
	            if (that.object.form[that.field]) {
	                // Simulate object
	                var object = { id: that.object.form[that.field] };
	                data.componentRef.instance._dataBoxService.selectObject(object);
	            }
	            else {
	                // Create a new object
	                data.componentRef.instance._dataBoxService.newObject();
	            }
	            // Reset choices
	            that._search.lastTerm = '';
	            that.getChoices();
	            return;
	        }, function (errors) { return; });
	    };
	    /**
	     * Get choice name/label
	     * @param choiceId
	     * @returns {any}
	     */
	    AutoCompleteComponent.prototype.getChoiceName = function (choiceId) {
	        if (choiceId == this._lastSelectedChoice['id']) {
	            return this._lastSelectedChoice['name'];
	        }
	        else if (choiceId && (choiceId == this.object.original[this.field])) {
	            return (choiceId
	                + ' - '
	                + this._dataBoxService.getSelectedObject(true)[this._fieldName]);
	        }
	        else {
	            return this._search.lastTerm;
	        }
	    };
	    /**
	     * Lifecycle callback
	     */
	    AutoCompleteComponent.prototype.ngOnInit = function () {
	        this._autoCompleteProvider = this._autoCompleteProviders[this.field] || null;
	        this._fieldName = (this._autoCompleteProvider['fieldLabel'] || this.field);
	        var that = this;
	        that._postService.post(this._autoCompleteProvider.urlConf, null).then(function (data) {
	            // Set child injector
	            var resolvedProviders = core_1.ReflectiveInjector.resolve([
	                data_box_service_1.DataBoxService,
	                core_1.provide('DataBoxProvider', { useValue: that._helperService.getDataBoxProvider(data) }),
	                core_1.provide('ParentInjector', { useValue: null })
	            ]);
	            that._childInjector = core_1.ReflectiveInjector.fromResolvedProviders(resolvedProviders, that._injector);
	            that._childDataBoxService = that._childInjector.get(data_box_service_1.DataBoxService);
	        }, function (error) {
	            console.log(error);
	            return;
	        });
	    };
	    __decorate([
	        core_1.Input(), 
	        __metadata('design:type', String)
	    ], AutoCompleteComponent.prototype, "field", void 0);
	    __decorate([
	        core_1.Input(), 
	        __metadata('design:type', Object)
	    ], AutoCompleteComponent.prototype, "object", void 0);
	    __decorate([
	        core_1.Input(), 
	        __metadata('design:type', Object)
	    ], AutoCompleteComponent.prototype, "errors", void 0);
	    __decorate([
	        core_1.Input(), 
	        __metadata('design:type', Boolean)
	    ], AutoCompleteComponent.prototype, "selfReference", void 0);
	    AutoCompleteComponent = __decorate([
	        core_1.Component({
	            selector: 'js_autoComplete',
	            template: "\n    <div class=\"auto-complete\">\n        <div class=\"controller\">\n            <input class=\"form-control input\"\n                   (click)=\"emptyChoice($event)\"\n                   (input)=\"onEnterKey($event)\"\n                   [ngModel]=\"getChoiceName(object.form[field])\"\n                   [class.error]=\"errors[field] && errors[field].length > 0\"\n                   type=\"text\">\n            <a class=\"input-arrow\" (click)=\"triggerIsHidden($event)\"><i class=\"fa fa-angle-down\"></i></a>\n            <div class=\"actions\">\n                <a class=\"badge\"\n                   *ngIf=\"!object.form[field]\"\n                   (click)=\"openPopup($event, 'add')\"><i class=\"fa fa-plus\"></i></a>\n                <a class=\"badge\"\n                   *ngIf=\"object.form[field]\"\n                   (click)=\"openPopup($event, 'edit')\"><i class=\"fa fa-pencil\"></i></a>\n            </div>\n        </div>\n        <ul class=\"choices\" [hidden]=\"_isHidden\">\n            <template [ngIf]=\"selfReference\"><template ngFor let-choice [ngForOf]=\"_choices\">\n                <li *ngIf=\"choice['id'] != object.form['id']\"\n                    (click)=\"setChoice($event, choice)\">{{choice['name']}}</li>\n            </template></template>\n            <template [ngIf]=\"!selfReference\">\n                <li *ngFor=\"let choice of _choices\"\n                    (click)=\"setChoice($event, choice)\">{{choice['name']}}</li>\n            </template>\n            <li *ngIf=\"_search.hasMore\"\n                (click)=\"getMoreObjects($event)\"\n                class=\"-pagination\"\n                title=\"Load more results...\"><span>...</span></li>\n        </ul>\n    </div>\n    ",
	            host: {
	                '(document:click)': 'onDocumentClick($event)',
	            }
	        }),
	        __param(4, core_1.Inject('AutoCompleteProviders')),
	        __param(5, core_1.Inject('HelperService')), 
	        __metadata('design:paramtypes', [post_service_1.PostService, modal_service_1.ModalService, data_box_service_1.DataBoxService, core_1.Injector, Object, Object])
	    ], AutoCompleteComponent);
	    return AutoCompleteComponent;
	}());
	exports.AutoCompleteComponent = AutoCompleteComponent;


/***/ },
/* 406 */
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
	var core_1 = __webpack_require__(5);
	var forms_1 = __webpack_require__(333);
	var helper_1 = __webpack_require__(387);
	var data_box_form_popup_component_1 = __webpack_require__(403);
	var data_box_service_1 = __webpack_require__(386);
	var ng2_bs3_modal_1 = __webpack_require__(373);
	var modal_service_1 = __webpack_require__(371);
	var EntityPhonePopupComponent = (function (_super) {
	    __extends(EntityPhonePopupComponent, _super);
	    function EntityPhonePopupComponent(dataBoxService, modalService, formBuilder, elementRef, parentInjector) {
	        // Call parent
	        _super.call(this, dataBoxService, modalService, formBuilder, elementRef, parentInjector);
	    }
	    EntityPhonePopupComponent = __decorate([
	        core_1.Component({
	            selector: '#js_entityPhonePopup',
	            templateUrl: helper_1.Helper.getRuntimeVar('templateUrl'),
	            directives: [forms_1.FORM_DIRECTIVES, forms_1.REACTIVE_FORM_DIRECTIVES, ng2_bs3_modal_1.MODAL_DIRECTIVES]
	        }),
	        __param(4, core_1.Inject('ParentInjector')), 
	        __metadata('design:paramtypes', [data_box_service_1.DataBoxService, modal_service_1.ModalService, forms_1.FormBuilder, core_1.ElementRef, core_1.Injector])
	    ], EntityPhonePopupComponent);
	    return EntityPhonePopupComponent;
	}(data_box_form_popup_component_1.DataBoxFormPopupComponent));
	exports.EntityPhonePopupComponent = EntityPhonePopupComponent;


/***/ },
/* 407 */
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
	var core_1 = __webpack_require__(5);
	var forms_1 = __webpack_require__(333);
	var helper_1 = __webpack_require__(387);
	var data_box_form_popup_component_1 = __webpack_require__(403);
	var data_box_service_1 = __webpack_require__(386);
	var ng2_bs3_modal_1 = __webpack_require__(373);
	var modal_service_1 = __webpack_require__(371);
	var EntityEmailPopupComponent = (function (_super) {
	    __extends(EntityEmailPopupComponent, _super);
	    function EntityEmailPopupComponent(dataBoxService, modalService, formBuilder, elementRef, parentInjector) {
	        // Call parent
	        _super.call(this, dataBoxService, modalService, formBuilder, elementRef, parentInjector);
	    }
	    EntityEmailPopupComponent = __decorate([
	        core_1.Component({
	            selector: '#js_entityEmailPopup',
	            templateUrl: helper_1.Helper.getRuntimeVar('templateUrl'),
	            directives: [forms_1.FORM_DIRECTIVES, forms_1.REACTIVE_FORM_DIRECTIVES, ng2_bs3_modal_1.MODAL_DIRECTIVES]
	        }),
	        __param(4, core_1.Inject('ParentInjector')), 
	        __metadata('design:paramtypes', [data_box_service_1.DataBoxService, modal_service_1.ModalService, forms_1.FormBuilder, core_1.ElementRef, core_1.Injector])
	    ], EntityEmailPopupComponent);
	    return EntityEmailPopupComponent;
	}(data_box_form_popup_component_1.DataBoxFormPopupComponent));
	exports.EntityEmailPopupComponent = EntityEmailPopupComponent;


/***/ },
/* 408 */
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
	var core_1 = __webpack_require__(5);
	var forms_1 = __webpack_require__(333);
	var helper_1 = __webpack_require__(387);
	var data_box_form_popup_component_1 = __webpack_require__(403);
	var data_box_service_1 = __webpack_require__(386);
	var ng2_bs3_modal_1 = __webpack_require__(373);
	var modal_service_1 = __webpack_require__(371);
	var EntityWebpagePopupComponent = (function (_super) {
	    __extends(EntityWebpagePopupComponent, _super);
	    function EntityWebpagePopupComponent(dataBoxService, modalService, formBuilder, elementRef, parentInjector) {
	        // Call parent
	        _super.call(this, dataBoxService, modalService, formBuilder, elementRef, parentInjector);
	    }
	    EntityWebpagePopupComponent = __decorate([
	        core_1.Component({
	            selector: '#js_entityWebpagePopup',
	            templateUrl: helper_1.Helper.getRuntimeVar('templateUrl'),
	            directives: [forms_1.FORM_DIRECTIVES, forms_1.REACTIVE_FORM_DIRECTIVES, ng2_bs3_modal_1.MODAL_DIRECTIVES]
	        }),
	        __param(4, core_1.Inject('ParentInjector')), 
	        __metadata('design:paramtypes', [data_box_service_1.DataBoxService, modal_service_1.ModalService, forms_1.FormBuilder, core_1.ElementRef, core_1.Injector])
	    ], EntityWebpagePopupComponent);
	    return EntityWebpagePopupComponent;
	}(data_box_form_popup_component_1.DataBoxFormPopupComponent));
	exports.EntityWebpagePopupComponent = EntityWebpagePopupComponent;


/***/ },
/* 409 */
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
	var core_1 = __webpack_require__(5);
	var forms_1 = __webpack_require__(333);
	var helper_1 = __webpack_require__(387);
	var data_box_form_popup_component_1 = __webpack_require__(403);
	var data_box_service_1 = __webpack_require__(386);
	var ng2_bs3_modal_1 = __webpack_require__(373);
	var modal_service_1 = __webpack_require__(371);
	var EntityNotePopupComponent = (function (_super) {
	    __extends(EntityNotePopupComponent, _super);
	    function EntityNotePopupComponent(dataBoxService, modalService, formBuilder, elementRef, parentInjector) {
	        // Call parent
	        _super.call(this, dataBoxService, modalService, formBuilder, elementRef, parentInjector);
	    }
	    EntityNotePopupComponent = __decorate([
	        core_1.Component({
	            selector: '#js_entityNotePopup',
	            templateUrl: helper_1.Helper.getRuntimeVar('templateUrl'),
	            directives: [forms_1.FORM_DIRECTIVES, forms_1.REACTIVE_FORM_DIRECTIVES, ng2_bs3_modal_1.MODAL_DIRECTIVES]
	        }),
	        __param(4, core_1.Inject('ParentInjector')), 
	        __metadata('design:paramtypes', [data_box_service_1.DataBoxService, modal_service_1.ModalService, forms_1.FormBuilder, core_1.ElementRef, core_1.Injector])
	    ], EntityNotePopupComponent);
	    return EntityNotePopupComponent;
	}(data_box_form_popup_component_1.DataBoxFormPopupComponent));
	exports.EntityNotePopupComponent = EntityNotePopupComponent;


/***/ },
/* 410 */
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
	var core_1 = __webpack_require__(5);
	var data_box_service_1 = __webpack_require__(386);
	var data_box_component_1 = __webpack_require__(388);
	var modal_service_1 = __webpack_require__(371);
	var helper_1 = __webpack_require__(387);
	var data_box_tree_view_component_1 = __webpack_require__(411);
	var data_box_tree_view_form_node_component_1 = __webpack_require__(413);
	// Component
	var DataBoxTreeViewFormComponent = (function (_super) {
	    __extends(DataBoxTreeViewFormComponent, _super);
	    function DataBoxTreeViewFormComponent(dataBoxService, modalService, actions, popup, viewContainerRef, injector, elementRef, treeViewProvider) {
	        var _this = this;
	        // Call parent
	        _super.call(this, dataBoxService, modalService, actions, popup, viewContainerRef, injector, elementRef, treeViewProvider);
	        this._$form = null; // Object form
	        this.setNodes();
	        this._objectsChangeSubscription = this._dataBoxService.getObjectsChangeEmitter()
	            .subscribe(function (data) { return _this.setNodes(data); });
	    }
	    /**
	     * Get nodes
	     * @param index
	     * @returns {*|null}
	     */
	    DataBoxTreeViewFormComponent.prototype.getNodes = function (index) {
	        if (index === void 0) { index = null; }
	        if (index === null) {
	            return this.nodes;
	        }
	        return this.nodes[index] || null;
	    };
	    /**
	     * Set nodes
	     * @returns {DataBoxTreeViewFormComponent}
	     * @param objects
	     */
	    DataBoxTreeViewFormComponent.prototype.setNodes = function (objects) {
	        if (objects === void 0) { objects = null; }
	        objects = (objects ? objects : this._dataBoxService.getObjects());
	        this.nodes = {};
	        for (var objsKey in objects) {
	            this.nodes[objsKey] = [];
	            for (var objKey in objects[objsKey]) {
	                this.nodes[objsKey].push(helper_1.Helper.cloneObject(objects[objsKey][objKey]));
	            }
	        }
	        return this;
	    };
	    /**
	     * Save object. Handle submit form
	     * @param $event
	     * @param closePopup
	     * @returns {Promise}
	     *
	     * Handle response:
	     * this._dataBoxService.save(data).then(
	     *     data => {
	     *         // Handle object
	     *     },
	     *     errors => {
	     *         // Handle errors
	     *     }
	     * );
	     */
	    DataBoxTreeViewFormComponent.prototype.save = function ($event) {
	        if ($event === void 0) { $event = null; }
	        if ($event) {
	            $event.preventDefault();
	        }
	        var that = this;
	        return new Promise(function (resolve, reject) {
	            // Current form object has changes from user?
	            if (!helper_1.Helper.isEqualObject(that.nodes, that._dataBoxService.getObjects())) {
	                // Get form data
	                var formData = that._$form.serialize();
	                // Save form
	                that._dataBoxService.save(formData).then(function (data) {
	                    that.setNodes();
	                    return resolve(true);
	                }, function (errors) {
	                    console.log(errors);
	                    return reject(errors);
	                });
	            }
	            return resolve(true);
	        });
	    };
	    /**
	     * Reset form.
	     * @param $event
	     */
	    DataBoxTreeViewFormComponent.prototype.reset = function ($event) {
	        var _this = this;
	        $event.preventDefault();
	        // Current form object has changes from user?
	        if (!helper_1.Helper.isEqualObject(this.nodes, this._dataBoxService.getObjects())) {
	            // Dialog message
	            this._modalService.dialog().then(function (hasConfirm) {
	                if (hasConfirm) {
	                    _this.setNodes();
	                    return;
	                }
	                else {
	                    return;
	                }
	            }, function (errors) {
	                return;
	            });
	        }
	    };
	    /**
	     * Lifecycle callback
	     */
	    DataBoxTreeViewFormComponent.prototype.ngOnInit = function () {
	        this._$form = $(this._elementRef.nativeElement).find('form');
	    };
	    /**
	     * Lifecycle callback
	     */
	    DataBoxTreeViewFormComponent.prototype.ngOnDestroy = function () {
	        this._objectsChangeSubscription.unsubscribe();
	    };
	    DataBoxTreeViewFormComponent = __decorate([
	        core_1.Component({
	            selector: '.js_dataBoxTreeViewForm',
	            templateUrl: helper_1.Helper.getRuntimeVar('templateUrl'),
	            directives: [data_box_tree_view_form_node_component_1.DataBoxTreeViewFormNodeComponent]
	        }),
	        __param(2, core_1.Inject('DataBoxActions')),
	        __param(3, core_1.Inject('Popup')),
	        __param(7, core_1.Inject('TreeViewProvider')), 
	        __metadata('design:paramtypes', [data_box_service_1.DataBoxService, modal_service_1.ModalService, data_box_component_1.DataBoxActions, Object, core_1.ViewContainerRef, core_1.Injector, core_1.ElementRef, Object])
	    ], DataBoxTreeViewFormComponent);
	    return DataBoxTreeViewFormComponent;
	}(data_box_tree_view_component_1.DataBoxTreeViewComponent));
	exports.DataBoxTreeViewFormComponent = DataBoxTreeViewFormComponent;


/***/ },
/* 411 */
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
	var core_1 = __webpack_require__(5);
	var data_box_service_1 = __webpack_require__(386);
	var data_box_component_1 = __webpack_require__(388);
	var modal_service_1 = __webpack_require__(371);
	var data_box_tree_view_node_component_1 = __webpack_require__(412);
	// Component
	var DataBoxTreeViewComponent = (function (_super) {
	    __extends(DataBoxTreeViewComponent, _super);
	    function DataBoxTreeViewComponent(dataBoxService, modalService, actions, popup, viewContainerRef, injector, _elementRef, _treeViewProvider) {
	        // Call parent
	        _super.call(this, dataBoxService, modalService, actions, popup, viewContainerRef, injector);
	        this._elementRef = _elementRef;
	        this._treeViewProvider = _treeViewProvider;
	        this.mainComponent = this;
	        this._expanded = {};
	        this._property = this._treeViewProvider.iconProperty || null;
	        this._map = this._treeViewProvider.iconMap || {};
	    }
	    /**
	     * Get nodes
	     * @param index
	     * @returns {*|null}
	     */
	    DataBoxTreeViewComponent.prototype.getNodes = function (index) {
	        if (index === void 0) { index = null; }
	        if (index === null) {
	            return this._dataBoxService.getObjects();
	        }
	        return (this._dataBoxService.getObjects()[index] || null);
	    };
	    /**
	     * Toggle expanded
	     * @param index
	     */
	    DataBoxTreeViewComponent.prototype.toggleExpanded = function (index) {
	        this._expanded[index] = (this._expanded[index] ? false : true);
	    };
	    /**
	     * Get icon
	     * @param object
	     * @returns {any}
	     */
	    DataBoxTreeViewComponent.prototype.getIcon = function (object) {
	        if (this._property && object[this._property]) {
	            return this._map[object[this._property]] || this._treeViewProvider.iconDefault;
	        }
	        return this._treeViewProvider.iconDefault;
	    };
	    DataBoxTreeViewComponent = __decorate([
	        core_1.Component({
	            selector: '.js_dataBoxTreeView',
	            template: "\n    <div class=\"ibox float-e-margins\">\n        <div class=\"ibox-title no-user-select\">\n            <h5>{{_dataBoxService.getLabel()}}<a *ngIf=\"_actions.actions.getActionAttr('collapse', 'isEnabled')\"\n                [ngClass]=\"[_actions.actions.getActionAttr('collapse', 'class')]\"\n                (click)=\"triggerAction($event, 'collapse', null)\"><i [ngClass]=\"['fa', _actions.actions.getActionAttr('collapse', 'icon')]\"></i></a>\n            </h5>\n            <div *ngIf=\"!_collapsed\" class=\"ibox-tools\">\n                <a (click)=\"refreshObjects($event)\"><i class=\"fa fa-refresh\"></i></a>\n                <a class=\"dropdown-toggle\" data-toggle=\"dropdown\" href=\"#\">\n                    <i class=\"fa fa-wrench\"></i>\n                </a>\n                <ul class=\"dropdown-menu dropdown-user\">\n                    <li><a href=\"#\">Config option 1</a>\n                    </li>\n                    <li><a href=\"#\">Config option 2</a>\n                    </li>\n                </ul>\n                <a><i class=\"fa fa-download\"></i></a>\n                <a *ngFor=\"let action of _actions.head.enabled\"\n                   [ngClass]=\"[_actions.actions.getActionAttr(action, 'class')]\"\n                   (click)=\"triggerAction($event, action, null)\"><i [ngClass]=\"['fa', _actions.actions.getActionAttr(action, 'icon')]\"></i></a>\n            </div>\n        </div>\n        <div *ngIf=\"!_collapsed\" class=\"ibox-content tree-view\">\n            <ul>\n                <js_dataBoxTreeViewNode [nodes]=\"getNodes(0)\" [mainComponent]=\"mainComponent\"></js_dataBoxTreeViewNode>\n            </ul>\n        </div>\n    </div>\n    ",
	            directives: [data_box_tree_view_node_component_1.DataBoxTreeViewNodeComponent]
	        }),
	        __param(2, core_1.Inject('DataBoxActions')),
	        __param(3, core_1.Inject('Popup')),
	        __param(7, core_1.Inject('TreeViewProvider')), 
	        __metadata('design:paramtypes', [data_box_service_1.DataBoxService, modal_service_1.ModalService, data_box_component_1.DataBoxActions, Object, core_1.ViewContainerRef, core_1.Injector, core_1.ElementRef, Object])
	    ], DataBoxTreeViewComponent);
	    return DataBoxTreeViewComponent;
	}(data_box_component_1.DataBoxComponent));
	exports.DataBoxTreeViewComponent = DataBoxTreeViewComponent;


/***/ },
/* 412 */
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
	var core_1 = __webpack_require__(5);
	var data_box_tree_view_component_1 = __webpack_require__(411);
	// Component
	var DataBoxTreeViewNodeComponent = (function () {
	    function DataBoxTreeViewNodeComponent() {
	    }
	    __decorate([
	        core_1.Input(), 
	        __metadata('design:type', Object)
	    ], DataBoxTreeViewNodeComponent.prototype, "nodes", void 0);
	    __decorate([
	        core_1.Input(), 
	        __metadata('design:type', data_box_tree_view_component_1.DataBoxTreeViewComponent)
	    ], DataBoxTreeViewNodeComponent.prototype, "mainComponent", void 0);
	    DataBoxTreeViewNodeComponent = __decorate([
	        core_1.Component({
	            selector: 'js_dataBoxTreeViewNode',
	            template: "\n    <li *ngFor=\"let obj of nodes\">\n        <a class=\"no-user-select\"\n           (click)=\"mainComponent.toggleExpanded(obj['id'])\">\n            <i *ngIf=\"mainComponent.getNodes(obj['id'])\"\n               [ngClass]=\"['fa', (mainComponent._expanded[obj['id']] ? 'fa-angle-down' : 'fa-angle-right')]\"></i>\n            <i [ngClass]=\"['fa', mainComponent.getIcon(obj)]\"></i><span>{{obj['name']}}</span></a>\n        <div class=\"ibox-tools no-user-select\">\n            <a *ngFor=\"let action of mainComponent._actions.body.enabled\"\n               (click)=\"mainComponent.triggerAction($event, action, obj)\">\n                <i [ngClass]=\"['fa', mainComponent._actions.actions.getActionAttr(action, 'icon')]\"></i></a>\n        </div>\n        <ul *ngIf=\"mainComponent.getNodes(obj['id']) && mainComponent._expanded[obj['id']]\">\n            <js_dataBoxTreeViewNode [nodes]=\"mainComponent.getNodes(obj['id'])\"\n                                    [mainComponent]=\"mainComponent\"></js_dataBoxTreeViewNode>\n        </ul>\n    </li>\n    ",
	            directives: [DataBoxTreeViewNodeComponent]
	        }), 
	        __metadata('design:paramtypes', [])
	    ], DataBoxTreeViewNodeComponent);
	    return DataBoxTreeViewNodeComponent;
	}());
	exports.DataBoxTreeViewNodeComponent = DataBoxTreeViewNodeComponent;


/***/ },
/* 413 */
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
	var core_1 = __webpack_require__(5);
	var data_box_tree_view_form_component_1 = __webpack_require__(410);
	// Component
	var DataBoxTreeViewFormNodeComponent = (function () {
	    function DataBoxTreeViewFormNodeComponent() {
	    }
	    __decorate([
	        core_1.Input(), 
	        __metadata('design:type', Object)
	    ], DataBoxTreeViewFormNodeComponent.prototype, "nodes", void 0);
	    __decorate([
	        core_1.Input(), 
	        __metadata('design:type', data_box_tree_view_form_component_1.DataBoxTreeViewFormComponent)
	    ], DataBoxTreeViewFormNodeComponent.prototype, "mainComponent", void 0);
	    DataBoxTreeViewFormNodeComponent = __decorate([
	        core_1.Component({
	            selector: 'js_dataBoxTreeViewFormNode',
	            template: "\n    <li *ngFor=\"let obj of nodes\">\n        <a class=\"no-user-select\"\n           (click)=\"mainComponent.toggleExpanded(obj['id'])\">\n            <i *ngIf=\"mainComponent.getNodes(obj['id'])\"\n               [ngClass]=\"['fa', (mainComponent._expanded[obj['id']] ? 'fa-angle-down' : 'fa-angle-right')]\"></i>\n            <i [ngClass]=\"['fa', mainComponent.getIcon(obj)]\"></i><span>{{obj['name']}}</span></a>\n        <div class=\"ibox-tools no-user-select\">\n            <input type=\"checkbox\" name=\"id[]\" value=\"{{ obj['id'] }}\" [(ngModel)]=\"obj['isChecked']\"/>\n        </div>\n        <ul *ngIf=\"mainComponent.getNodes(obj['id'])\"\n            [ngStyle]=\"{'display': (mainComponent._expanded[obj['id']]) ? 'block' : 'none'}\">\n            <js_dataBoxTreeViewFormNode [nodes]=\"mainComponent.getNodes(obj['id'])\"\n                                        [mainComponent]=\"mainComponent\"></js_dataBoxTreeViewFormNode>\n        </ul>\n    </li>\n    ",
	            directives: [DataBoxTreeViewFormNodeComponent]
	        }), 
	        __metadata('design:paramtypes', [])
	    ], DataBoxTreeViewFormNodeComponent);
	    return DataBoxTreeViewFormNodeComponent;
	}());
	exports.DataBoxTreeViewFormNodeComponent = DataBoxTreeViewFormNodeComponent;


/***/ },
/* 414 */
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
	var core_1 = __webpack_require__(5);
	var helper_1 = __webpack_require__(387);
	var data_box_service_1 = __webpack_require__(386);
	var file_upload_popup_component_1 = __webpack_require__(415);
	var ng2_bs3_modal_1 = __webpack_require__(373);
	var EntityFilePopupComponent = (function (_super) {
	    __extends(EntityFilePopupComponent, _super);
	    function EntityFilePopupComponent(dataBoxService, fileUploadProvider, parentInjector) {
	        // Call parent
	        _super.call(this, dataBoxService, fileUploadProvider, parentInjector);
	    }
	    EntityFilePopupComponent = __decorate([
	        core_1.Component({
	            selector: '#js_entityFilePopup',
	            templateUrl: helper_1.Helper.getRuntimeVar('templateUrl'),
	            directives: [ng2_bs3_modal_1.MODAL_DIRECTIVES]
	        }),
	        __param(1, core_1.Inject('FileUploadProvider')),
	        __param(2, core_1.Inject('ParentInjector')), 
	        __metadata('design:paramtypes', [data_box_service_1.DataBoxService, Object, core_1.Injector])
	    ], EntityFilePopupComponent);
	    return EntityFilePopupComponent;
	}(file_upload_popup_component_1.FileUploadPopupComponent));
	exports.EntityFilePopupComponent = EntityFilePopupComponent;


/***/ },
/* 415 */
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
	var Dropzone = __webpack_require__(416);
	var core_1 = __webpack_require__(5);
	var ng2_bs3_modal_1 = __webpack_require__(373);
	var modal_service_1 = __webpack_require__(371);
	var helper_1 = __webpack_require__(387);
	var data_box_service_1 = __webpack_require__(386);
	// Component
	var FileUploadPopupComponent = (function (_super) {
	    __extends(FileUploadPopupComponent, _super);
	    function FileUploadPopupComponent(dataBoxService, fileUploadProvider, parentInjector // parentInjector to provide the correct injector to popups
	        ) {
	        _super.call(this);
	        // Get resources from parentInjector
	        if (parentInjector) {
	            this._dataBoxService = parentInjector.get(data_box_service_1.DataBoxService);
	            this._fileUploadProvider = parentInjector.get('FileUploadProvider');
	        }
	        else {
	            this._dataBoxService = dataBoxService;
	            this._fileUploadProvider = fileUploadProvider;
	        }
	    }
	    /**
	     * Get label
	     * @returns {*|string}
	     */
	    FileUploadPopupComponent.prototype.getLabel = function () {
	        return this._fileUploadProvider['label'] || '';
	    };
	    /**
	     * Close popup.
	     * @param $event
	     * @param data (data to return on resolve component)
	     */
	    FileUploadPopupComponent.prototype.close = function ($event, data) {
	        if ($event === void 0) { $event = null; }
	        if (data === void 0) { data = null; }
	        if ($event) {
	            $event.preventDefault();
	        }
	        // Refresh objects in data-box service
	        if (this._dataBoxService) {
	            this._dataBoxService.refresh();
	        }
	        _super.prototype.close.call(this, null, data);
	    };
	    /**
	     * Lifecycle callback
	     */
	    FileUploadPopupComponent.prototype.ngOnInit = function () {
	        var $form = $(this.popup_elementRef.nativeElement).find('form.dropzone');
	        $form.dropzone({
	            url: this._fileUploadProvider.url,
	            paramName: "form[file]"
	        });
	    };
	    FileUploadPopupComponent = __decorate([
	        core_1.Component({
	            selector: '.js_fileUploadPopup',
	            templateUrl: helper_1.Helper.getRuntimeVar('templateUrl'),
	            directives: [ng2_bs3_modal_1.MODAL_DIRECTIVES]
	        }),
	        __param(1, core_1.Inject('FileUploadProvider')),
	        __param(2, core_1.Inject('ParentInjector')), 
	        __metadata('design:paramtypes', [data_box_service_1.DataBoxService, Object, core_1.Injector])
	    ], FileUploadPopupComponent);
	    return FileUploadPopupComponent;
	}(modal_service_1.ModalPopup));
	exports.FileUploadPopupComponent = FileUploadPopupComponent;


/***/ },
/* 416 */
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
	
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(40)(module)))

/***/ },
/* 417 */
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
	var core_1 = __webpack_require__(5);
	var helper_1 = __webpack_require__(387);
	var data_box_service_1 = __webpack_require__(386);
	var file_upload_popup_component_1 = __webpack_require__(415);
	var ng2_bs3_modal_1 = __webpack_require__(373);
	var EntityImagePopupComponent = (function (_super) {
	    __extends(EntityImagePopupComponent, _super);
	    function EntityImagePopupComponent(dataBoxService, fileUploadProvider, parentInjector) {
	        // Call parent
	        _super.call(this, dataBoxService, fileUploadProvider, parentInjector);
	    }
	    EntityImagePopupComponent = __decorate([
	        core_1.Component({
	            selector: '#js_entityImagePopup',
	            templateUrl: helper_1.Helper.getRuntimeVar('templateUrl'),
	            directives: [ng2_bs3_modal_1.MODAL_DIRECTIVES]
	        }),
	        __param(1, core_1.Inject('FileUploadProvider')),
	        __param(2, core_1.Inject('ParentInjector')), 
	        __metadata('design:paramtypes', [data_box_service_1.DataBoxService, Object, core_1.Injector])
	    ], EntityImagePopupComponent);
	    return EntityImagePopupComponent;
	}(file_upload_popup_component_1.FileUploadPopupComponent));
	exports.EntityImagePopupComponent = EntityImagePopupComponent;


/***/ },
/* 418 */
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
	var core_1 = __webpack_require__(5);
	var data_box_service_1 = __webpack_require__(386);
	var helper_1 = __webpack_require__(387);
	var video_upload_popup_component_1 = __webpack_require__(419);
	var ng2_bs3_modal_1 = __webpack_require__(373);
	var EntityVideoPopupComponent = (function (_super) {
	    __extends(EntityVideoPopupComponent, _super);
	    function EntityVideoPopupComponent(dataBoxService, parentInjector, videoUploadProvider, dynamicComponentLoader) {
	        // Call parent
	        _super.call(this, dataBoxService, parentInjector, videoUploadProvider, dynamicComponentLoader);
	    }
	    EntityVideoPopupComponent = __decorate([
	        core_1.Component({
	            selector: '#js_entityVideoPopup',
	            templateUrl: helper_1.Helper.getGlobalVar('route') + 'template/form-popup/video-upload',
	            directives: [ng2_bs3_modal_1.MODAL_DIRECTIVES]
	        }),
	        __param(1, core_1.Inject('ParentInjector')),
	        __param(2, core_1.Inject('VideoUploadProvider')), 
	        __metadata('design:paramtypes', [data_box_service_1.DataBoxService, core_1.Injector, Object, core_1.DynamicComponentLoader])
	    ], EntityVideoPopupComponent);
	    return EntityVideoPopupComponent;
	}(video_upload_popup_component_1.VideoUploadPopupComponent));
	exports.EntityVideoPopupComponent = EntityVideoPopupComponent;


/***/ },
/* 419 */
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
	var core_1 = __webpack_require__(5);
	var data_box_service_1 = __webpack_require__(386);
	var helper_1 = __webpack_require__(387);
	var wizard_popup_component_1 = __webpack_require__(420);
	var ng2_bs3_modal_1 = __webpack_require__(373);
	// Component
	var VideoUploadPopupComponent = (function (_super) {
	    __extends(VideoUploadPopupComponent, _super);
	    function VideoUploadPopupComponent(dataBoxService, parentInjector, videoUploadProvider, _dynamicComponentLoader) {
	        // Call parent
	        _super.call(this, dataBoxService, parentInjector);
	        this._dynamicComponentLoader = _dynamicComponentLoader;
	        // Redefine "videoUploadProvider" if is available as injectable from child (defined at runtime),
	        // because this component can bellow at child component with a specific child injector
	        // (popup opens at root DOM element, so don't have access to child injector)
	        if (parentInjector) {
	            this._videoUploadProvider = parentInjector.get('VideoUploadProvider');
	        }
	        else {
	            this._videoUploadProvider = videoUploadProvider;
	        }
	        this._source = null;
	        this._componentRefDependency = null;
	    }
	    /**
	     * Change step
	     * @returns {Promise}
	     *
	     * Handle response:
	     * this.changeStep.then(function(data) {
	     *     // Success
	     * }, function(data) {
	     *     // Fail
	     * });
	     */
	    VideoUploadPopupComponent.prototype.changeStep = function () {
	        var that = this;
	        this.errors = {};
	        return new Promise(function (resolve, reject) {
	            switch (that._step) {
	                case 0:
	                    if (that._source) {
	                        that.loadSource().then(function (data) {
	                            if (!data) {
	                                return reject(false);
	                            }
	                            return resolve(true);
	                        }, function (error) {
	                            console.log(error);
	                            return reject(false);
	                        });
	                    }
	                    else {
	                        that.errors = { source: ['Please select an option'] };
	                        return reject(false);
	                    }
	                    break;
	                case 1:
	                    if (that._source == 'file') {
	                        // It's saved automatically by the plugin
	                        return resolve(true);
	                    }
	                    // Update route
	                    var originalRoute = that._dataBoxService.getRoute('add');
	                    that._dataBoxService.setRoute('add', originalRoute + '/' + that._source);
	                    // Save form
	                    that._componentRefDependency.instance.save().then(function (data) {
	                        return resolve(true);
	                    }, function (error) {
	                        return reject(false);
	                    });
	                    // Restore original route
	                    that._dataBoxService.setRoute('add', originalRoute);
	                    break;
	                default:
	                    that._step = 0;
	                    return reject(false);
	            }
	        });
	    };
	    /**
	     * Set source
	     * @param $event
	     * @param value
	     */
	    VideoUploadPopupComponent.prototype.setSource = function ($event, value) {
	        this._source = (this._videoUploadProvider[value] ? value : null);
	    };
	    /**
	     * Load source
	     * @param value
	     * @returns {Promise}
	     */
	    VideoUploadPopupComponent.prototype.loadSource = function () {
	        var viewContainerRef_name = ('js_step' + (this._step + 1) + '_viewContainerRef');
	        var that = this;
	        return new Promise(function (resolve, reject) {
	            if (that._loadedSource == that._source) {
	                return resolve(true);
	            }
	            // Inject dependencies
	            var injector = null;
	            switch (that._step) {
	                case 0:
	                    injector = core_1.ReflectiveInjector.resolve([
	                        core_1.provide('FileUploadProvider', {
	                            useValue: {
	                                label: that._dataBoxService.getLabel(),
	                                url: (that._dataBoxService.getRoute('add') + '/' + that._source)
	                            }
	                        })
	                    ]);
	                    break;
	            }
	            // Clear container
	            if (that._componentRefDependency) {
	                that._componentRefDependency.destroy();
	            }
	            // Load dependency
	            that._dynamicComponentLoader.loadNextToLocation(that._videoUploadProvider[that._source], that[viewContainerRef_name], // Load the next step (current +1)
	            injector).then(function (componentRef) {
	                that._componentRefDependency = componentRef;
	                that._loadedSource = that._source;
	                return resolve(true);
	            }, function (error) {
	                console.log(error);
	                return reject(false);
	            });
	        });
	    };
	    /**
	     * Close popup.
	     * @param $event
	     * @param data (data to return on resolve component)
	     */
	    VideoUploadPopupComponent.prototype.close = function ($event, data) {
	        if ($event === void 0) { $event = null; }
	        if (data === void 0) { data = false; }
	        if ($event) {
	            $event.preventDefault();
	        }
	        // Refresh objects in data-box service
	        if (this._dataBoxService && (this._source == 'file')) {
	            this._dataBoxService.refresh();
	        }
	        _super.prototype.close.call(this, null, data);
	    };
	    __decorate([
	        core_1.ViewChild('popup'), 
	        __metadata('design:type', Object)
	    ], VideoUploadPopupComponent.prototype, "popup", void 0);
	    __decorate([
	        core_1.ViewChild('popup', { read: core_1.ElementRef }), 
	        __metadata('design:type', core_1.ElementRef)
	    ], VideoUploadPopupComponent.prototype, "popup_elementRef", void 0);
	    __decorate([
	        core_1.ViewChild('js_step1', { read: core_1.ViewContainerRef }), 
	        __metadata('design:type', core_1.ViewContainerRef)
	    ], VideoUploadPopupComponent.prototype, "js_step1_viewContainerRef", void 0);
	    VideoUploadPopupComponent = __decorate([
	        core_1.Component({
	            selector: 'js_videoUploadPopup',
	            templateUrl: helper_1.Helper.getGlobalVar('route') + 'template/form-popup/video-upload',
	            directives: [ng2_bs3_modal_1.MODAL_DIRECTIVES]
	        }),
	        __param(1, core_1.Inject('ParentInjector')),
	        __param(2, core_1.Inject('VideoUploadProvider')), 
	        __metadata('design:paramtypes', [data_box_service_1.DataBoxService, core_1.Injector, Object, core_1.DynamicComponentLoader])
	    ], VideoUploadPopupComponent);
	    return VideoUploadPopupComponent;
	}(wizard_popup_component_1.WizardPopupComponent));
	exports.VideoUploadPopupComponent = VideoUploadPopupComponent;


/***/ },
/* 420 */
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
	var core_1 = __webpack_require__(5);
	var data_box_service_1 = __webpack_require__(386);
	var data_box_form_component_1 = __webpack_require__(404);
	var helper_1 = __webpack_require__(387);
	var ng2_bs3_modal_1 = __webpack_require__(373);
	var modal_service_1 = __webpack_require__(371);
	// Component
	var WizardPopupComponent = (function (_super) {
	    __extends(WizardPopupComponent, _super);
	    function WizardPopupComponent(dataBoxService, parentInjector // parentInjector to provide the correct injector to popups
	        ) {
	        _super.call(this);
	        this.formModes = data_box_form_component_1.FormModes; // Used inside the view
	        // Get resources from parent injector
	        if (parentInjector) {
	            this._dataBoxService = parentInjector.get(data_box_service_1.DataBoxService);
	        }
	        else {
	            this._dataBoxService = dataBoxService;
	        }
	        this.errors = {};
	        this._step = 0;
	    }
	    /**
	     * Next step.
	     * @param $event
	     * @param closePopup
	     */
	    WizardPopupComponent.prototype.next = function ($event, closePopup) {
	        var _this = this;
	        if ($event === void 0) { $event = null; }
	        if (closePopup === void 0) { closePopup = false; }
	        if ($event) {
	            $event.preventDefault();
	        }
	        var that = this;
	        this.changeStep().then(function (data) {
	            if (closePopup) {
	                return _this.close();
	            }
	            that._step++;
	        }, function (error) {
	            console.log(error);
	        });
	    };
	    /**
	     * Previous step.
	     * @param $event
	     */
	    WizardPopupComponent.prototype.prev = function ($event) {
	        if ($event === void 0) { $event = null; }
	        if ($event) {
	            $event.preventDefault();
	        }
	        this._step--;
	    };
	    /**
	     * Change step // This method needs to be override to appropriate code to handle the steps behavior.
	     * @returns {Promise}
	     *
	     * Handle response:
	     * this.changeStep.then(function(data) {
	     *     // Success
	     * }, function(data) {
	     *     // Fail
	     * });
	     */
	    WizardPopupComponent.prototype.changeStep = function () {
	        var that = this;
	        this.errors = {};
	        return new Promise(function (resolve, reject) {
	            switch (that._step) {
	                default:
	                    that._step = 0;
	                    reject(false);
	            }
	        });
	    };
	    /**
	     * Cancel form.
	     * @param $event
	     */
	    WizardPopupComponent.prototype.cancel = function ($event) {
	        if ($event === void 0) { $event = null; }
	        if ($event) {
	            $event.preventDefault();
	        }
	        this.close();
	    };
	    WizardPopupComponent = __decorate([
	        core_1.Component({
	            selector: 'js_wizardPopup',
	            templateUrl: helper_1.Helper.getRuntimeVar('templateUrl'),
	            directives: [ng2_bs3_modal_1.MODAL_DIRECTIVES]
	        }),
	        __param(1, core_1.Inject('ParentInjector')), 
	        __metadata('design:paramtypes', [data_box_service_1.DataBoxService, core_1.Injector])
	    ], WizardPopupComponent);
	    return WizardPopupComponent;
	}(modal_service_1.ModalPopup));
	exports.WizardPopupComponent = WizardPopupComponent;


/***/ },
/* 421 */
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
	var core_1 = __webpack_require__(5);
	var helper_1 = __webpack_require__(387);
	var file_upload_component_1 = __webpack_require__(422);
	var EntityVideoFileComponent = (function (_super) {
	    __extends(EntityVideoFileComponent, _super);
	    function EntityVideoFileComponent(elementRef, fileUploadProvider) {
	        // Call parent
	        _super.call(this, elementRef, fileUploadProvider);
	    }
	    EntityVideoFileComponent = __decorate([
	        core_1.Component({
	            selector: '#js_entityVideoFile',
	            templateUrl: helper_1.Helper.getRuntimeVar('templateUrl')
	        }),
	        __param(1, core_1.Inject('FileUploadProvider')), 
	        __metadata('design:paramtypes', [core_1.ElementRef, Object])
	    ], EntityVideoFileComponent);
	    return EntityVideoFileComponent;
	}(file_upload_component_1.FileUploadComponent));
	exports.EntityVideoFileComponent = EntityVideoFileComponent;


/***/ },
/* 422 */
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
	var Dropzone = __webpack_require__(416);
	var core_1 = __webpack_require__(5);
	var helper_1 = __webpack_require__(387);
	// Component
	var FileUploadComponent = (function () {
	    function FileUploadComponent(_elementRef, _fileUploadProvider) {
	        this._elementRef = _elementRef;
	        this._fileUploadProvider = _fileUploadProvider;
	    }
	    /**
	     * Lifecycle callback
	     */
	    FileUploadComponent.prototype.ngOnInit = function () {
	        var $form = $(this._elementRef.nativeElement).find('form');
	        $form.dropzone({
	            url: this._fileUploadProvider.url,
	            paramName: "form[file]"
	        });
	    };
	    FileUploadComponent = __decorate([
	        core_1.Component({
	            selector: '.js_fileUpload',
	            templateUrl: helper_1.Helper.getRuntimeVar('templateUrl')
	        }),
	        __param(1, core_1.Inject('FileUploadProvider')), 
	        __metadata('design:paramtypes', [core_1.ElementRef, Object])
	    ], FileUploadComponent);
	    return FileUploadComponent;
	}());
	exports.FileUploadComponent = FileUploadComponent;


/***/ },
/* 423 */
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
	var core_1 = __webpack_require__(5);
	var forms_1 = __webpack_require__(333);
	var helper_1 = __webpack_require__(387);
	var data_box_form_component_1 = __webpack_require__(404);
	var data_box_service_1 = __webpack_require__(386);
	var modal_service_1 = __webpack_require__(371);
	var EntityVideoUrlComponent = (function (_super) {
	    __extends(EntityVideoUrlComponent, _super);
	    function EntityVideoUrlComponent(dataBoxService, modalService, formBuilder, elementRef, parentInjector) {
	        // Call parent
	        _super.call(this, dataBoxService, modalService, formBuilder, elementRef, parentInjector);
	    }
	    EntityVideoUrlComponent = __decorate([
	        core_1.Component({
	            selector: '#js_entityVideoUrl',
	            templateUrl: helper_1.Helper.getRuntimeVar('templateUrl'),
	            directives: [forms_1.FORM_DIRECTIVES, forms_1.REACTIVE_FORM_DIRECTIVES]
	        }),
	        __param(4, core_1.Inject('ParentInjector')), 
	        __metadata('design:paramtypes', [data_box_service_1.DataBoxService, modal_service_1.ModalService, forms_1.FormBuilder, core_1.ElementRef, core_1.Injector])
	    ], EntityVideoUrlComponent);
	    return EntityVideoUrlComponent;
	}(data_box_form_component_1.DataBoxFormComponent));
	exports.EntityVideoUrlComponent = EntityVideoUrlComponent;


/***/ }
]);
//# sourceMappingURL=tabs.js.map