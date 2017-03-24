webpackJsonp([1],[
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var platform_browser_dynamic_1 = __webpack_require__(1);
	var main_module_1 = __webpack_require__(30);
	platform_browser_dynamic_1.platformBrowserDynamic().bootstrapModule(main_module_1.MainModule);


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
/* 30 */
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
	var platform_browser_1 = __webpack_require__(22);
	// This module doesn't use "ReactiveFormsModule", but it needs to import this class
	// to provide "formBuilder" when inject dependencies in child modules (like form)
	var forms_1 = __webpack_require__(31);
	var ng2_bs3_modal_1 = __webpack_require__(35);
	var helper_1 = __webpack_require__(47);
	var post_service_1 = __webpack_require__(49);
	var modal_service_1 = __webpack_require__(50);
	var flash_message_service_1 = __webpack_require__(25);
	var dynamic_loader_service_1 = __webpack_require__(51);
	var nav_manager_service_1 = __webpack_require__(56);
	var main_component_1 = __webpack_require__(57);
	var MainModule = (function () {
	    function MainModule() {
	    }
	    MainModule = __decorate([
	        core_1.NgModule({
	            imports: [
	                platform_browser_1.BrowserModule,
	                forms_1.FormsModule,
	                forms_1.ReactiveFormsModule,
	                ng2_bs3_modal_1.Ng2Bs3ModalModule
	            ],
	            declarations: [
	                main_component_1.MainComponent
	            ],
	            providers: [
	                post_service_1.PostService,
	                modal_service_1.ModalService,
	                flash_message_service_1.FlashMessageService,
	                dynamic_loader_service_1.DynamicLoaderService,
	                nav_manager_service_1.NavManagerService,
	                { provide: 'HelperService', useValue: helper_1.Helper },
	            ],
	            bootstrap: [main_component_1.MainComponent]
	        }), 
	        __metadata('design:paramtypes', [])
	    ], MainModule);
	    return MainModule;
	}());
	exports.MainModule = MainModule;


/***/ },
/* 31 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(global) {/**
	 * @license Angular v2.0.0-rc.6
	 * (c) 2010-2016 Google, Inc. https://angular.io/
	 * License: MIT
	 */
	(function (global, factory) {
	     true ? factory(exports, __webpack_require__(3), __webpack_require__(32), __webpack_require__(4), __webpack_require__(5), __webpack_require__(33)) :
	    typeof define === 'function' && define.amd ? define(['exports', '@angular/core', 'rxjs/operator/toPromise', 'rxjs/Subject', 'rxjs/Observable', 'rxjs/observable/fromPromise'], factory) :
	    (factory((global.ng = global.ng || {}, global.ng.forms = global.ng.forms || {}),global.ng.core,global.Rx.Observable.prototype,global.Rx,global.Rx,global.Rx.Observable));
	}(this, function (exports,_angular_core,rxjs_operator_toPromise,rxjs_Subject,rxjs_Observable,rxjs_observable_fromPromise) { 'use strict';
	
	    /**
	     * @license
	     * Copyright Google Inc. All Rights Reserved.
	     *
	     * Use of this source code is governed by an MIT-style license that can be
	     * found in the LICENSE file at https://angular.io/license
	     */
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
	    // Need to declare a new variable for global here since TypeScript
	    // exports the original value of the symbol.
	    var global$1 = globalScope;
	    // TODO: remove calls to assert in production environment
	    // Note: Can't just export this and import in in other files
	    // as `assert` is a reserved keyword in Dart
	    global$1.assert = function assert(condition) {
	        // TODO: to be fixed properly via #2830, noop for now
	    };
	    function isPresent(obj) {
	        return obj !== undefined && obj !== null;
	    }
	    function isBlank(obj) {
	        return obj === undefined || obj === null;
	    }
	    function isString(obj) {
	        return typeof obj === 'string';
	    }
	    function isFunction(obj) {
	        return typeof obj === 'function';
	    }
	    function isStringMap(obj) {
	        return typeof obj === 'object' && obj !== null;
	    }
	    function isPromise(obj) {
	        // allow any Promise/A+ compliant thenable.
	        // It's up to the caller to ensure that obj.then conforms to the spec
	        return isPresent(obj) && isFunction(obj.then);
	    }
	    function isArray(obj) {
	        return Array.isArray(obj);
	    }
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
	    var NumberWrapper = (function () {
	        function NumberWrapper() {
	        }
	        NumberWrapper.toFixed = function (n, fractionDigits) { return n.toFixed(fractionDigits); };
	        NumberWrapper.equal = function (a, b) { return a === b; };
	        NumberWrapper.parseIntAutoRadix = function (text) {
	            var result = parseInt(text);
	            if (isNaN(result)) {
	                throw new Error('Invalid integer literal when parsing ' + text);
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
	            throw new Error('Invalid integer literal when parsing ' + text + ' in base ' + radix);
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
	    // JS has NaN !== NaN
	    function looseIdentical(a, b) {
	        return a === b || typeof a === 'number' && typeof b === 'number' && isNaN(a) && isNaN(b);
	    }
	    function normalizeBool(obj) {
	        return isBlank(obj) ? false : obj;
	    }
	    function isJsObject(o) {
	        return o !== null && (typeof o === 'function' || typeof o === 'object');
	    }
	    function isPrimitive(obj) {
	        return !isJsObject(obj);
	    }
	    function hasConstructor(value, type) {
	        return value.constructor === type;
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
	
	    var Map$1 = global$1.Map;
	    var Set = global$1.Set;
	    // Safari and Internet Explorer do not support the iterable parameter to the
	    // Map constructor.  We work around that by manually adding the items.
	    var createMapFromPairs = (function () {
	        try {
	            if (new Map$1([[1, 2]]).size === 1) {
	                return function createMapFromPairs(pairs) { return new Map$1(pairs); };
	            }
	        }
	        catch (e) {
	        }
	        return function createMapAndPopulateFromPairs(pairs) {
	            var map = new Map$1();
	            for (var i = 0; i < pairs.length; i++) {
	                var pair = pairs[i];
	                map.set(pair[0], pair[1]);
	            }
	            return map;
	        };
	    })();
	    var createMapFromMap = (function () {
	        try {
	            if (new Map$1(new Map$1())) {
	                return function createMapFromMap(m) { return new Map$1(m); };
	            }
	        }
	        catch (e) {
	        }
	        return function createMapAndPopulateFromMap(m) {
	            var map = new Map$1();
	            m.forEach(function (v, k) { map.set(k, v); });
	            return map;
	        };
	    })();
	    var _clearValues = (function () {
	        if ((new Map$1()).keys().next) {
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
	            if ((new Map$1()).values().next) {
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
	            var result = new Map$1();
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
	            return Object.keys(map).map(function (k) { return map[k]; });
	        };
	        StringMapWrapper.isEmpty = function (map) {
	            for (var prop in map) {
	                return false;
	            }
	            return true;
	        };
	        StringMapWrapper.delete = function (map, key) { delete map[key]; };
	        StringMapWrapper.forEach = function (map, callback) {
	            for (var _i = 0, _a = Object.keys(map); _i < _a.length; _i++) {
	                var k = _a[_i];
	                callback(map[k], k);
	            }
	        };
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
	            if (isPresent(compareFn)) {
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
	                if (isBlank(candidate)) {
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
	    function _flattenArray(source, target) {
	        if (isPresent(source)) {
	            for (var i = 0; i < source.length; i++) {
	                var item = source[i];
	                if (isArray(item)) {
	                    _flattenArray(item, target);
	                }
	                else {
	                    target.push(item);
	                }
	            }
	        }
	        return target;
	    }
	    // Safari and Internet Explorer do not support the iterable parameter to the
	    // Set constructor.  We work around that by manually adding the items.
	    var createSetFromList = (function () {
	        var test = new Set([1, 2, 3]);
	        if (test.size === 3) {
	            return function createSetFromList(lst) { return new Set(lst); };
	        }
	        else {
	            return function createSetAndPopulateFromList(lst) {
	                var res = new Set(lst);
	                if (res.size !== lst.length) {
	                    for (var i = 0; i < lst.length; i++) {
	                        res.add(lst[i]);
	                    }
	                }
	                return res;
	            };
	        }
	    })();
	
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
	            return isBlank(control.value) || (isString(control.value) && control.value == '') ?
	                { 'required': true } :
	                null;
	        };
	        /**
	         * Validator that requires controls to have a value of a minimum length.
	         */
	        Validators.minLength = function (minLength) {
	            return function (control) {
	                if (isPresent(Validators.required(control)))
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
	                if (isPresent(Validators.required(control)))
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
	                if (isPresent(Validators.required(control)))
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
	            if (isBlank(validators))
	                return null;
	            var presentValidators = validators.filter(isPresent);
	            if (presentValidators.length == 0)
	                return null;
	            return function (control) {
	                return _mergeErrors(_executeValidators(control, presentValidators));
	            };
	        };
	        Validators.composeAsync = function (validators) {
	            if (isBlank(validators))
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
	        return StringMapWrapper.isEmpty(res) ? null : res;
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
	            this.onChange = function (value) { fn(value == '' ? null : NumberWrapper.parseFloat(value)); };
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
	            ListWrapper.removeAt(this._accessors, indexToRemove);
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
	     * The accessor for writing a radio control value and listening to changes that is used by the
	     * {@link NgModel}, {@link FormControlDirective}, and {@link FormControlName} directives.
	     *
	     *  ### Example
	     *  ```
	     *  @Component({
	     *    template: `
	     *      <input type="radio" name="food" [(ngModel)]="food" value="chicken">
	     *      <input type="radio" name="food" [(ngModel)]="food" value="fish">
	     *    `
	     *  })
	     *  class FoodCmp {
	     *    food = 'chicken';
	     *  }
	     *  ```
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
	            if (isPresent(value)) {
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
	        return StringWrapper.slice(id + ": " + value, 0, 50);
	    }
	    function _extractId(valueString) {
	        return valueString.split(':')[0];
	    }
	    /**
	     * The accessor for writing a value and listening to changes on a select element.
	     *
	     * Note: We have to listen to the 'change' event because 'input' events aren't fired
	     * for selects in Firefox and IE:
	     * https://bugzilla.mozilla.org/show_bug.cgi?id=1024350
	     * https://developer.microsoft.com/en-us/microsoft-edge/platform/issues/4660045/
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
	     * Marks `<option>` as dynamic, so Angular can be notified when options change.
	     *
	     * ### Example
	     *
	     * ```
	     * <select name="city" ngModel>
	     *   <option *ngFor="let c of cities" [value]="c"></option>
	     * </select>
	     * ```
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
	        if (isString(value))
	            value = "'" + value + "'";
	        if (!isPrimitive(value))
	            value = 'Object';
	        return StringWrapper.slice(id + ": " + value, 0, 50);
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
	        var p = ListWrapper.clone(parent.path);
	        p.push(name);
	        return p;
	    }
	    function setUpControl(control, dir) {
	        if (isBlank(control))
	            _throwError(dir, 'Cannot find control with');
	        if (isBlank(dir.valueAccessor))
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
	            if (validator.registerOnChange)
	                validator.registerOnChange(function () { return control.updateValueAndValidity(); });
	        });
	        dir._rawAsyncValidators.forEach(function (validator) {
	            if (validator.registerOnChange)
	                validator.registerOnChange(function () { return control.updateValueAndValidity(); });
	        });
	    }
	    function cleanUpControl(control, dir) {
	        dir.valueAccessor.registerOnChange(function () { return _noControlError(dir); });
	        dir.valueAccessor.registerOnTouched(function () { return _noControlError(dir); });
	        dir._rawValidators.forEach(function (validator) { return validator.registerOnChange(null); });
	        dir._rawAsyncValidators.forEach(function (validator) { return validator.registerOnChange(null); });
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
	        if (!StringMapWrapper.contains(changes, 'model'))
	            return false;
	        var change = changes['model'];
	        if (change.isFirstChange())
	            return true;
	        return !looseIdentical(viewModel, change.currentValue);
	    }
	    function isBuiltInAccessor(valueAccessor) {
	        return (hasConstructor(valueAccessor, CheckboxControlValueAccessor) ||
	            hasConstructor(valueAccessor, NumberValueAccessor) ||
	            hasConstructor(valueAccessor, SelectControlValueAccessor) ||
	            hasConstructor(valueAccessor, SelectMultipleControlValueAccessor) ||
	            hasConstructor(valueAccessor, RadioControlValueAccessor));
	    }
	    // TODO: vsavkin remove it once https://github.com/angular/angular/issues/3011 is implemented
	    function selectValueAccessor(dir, valueAccessors) {
	        if (isBlank(valueAccessors))
	            return null;
	        var defaultAccessor;
	        var builtinAccessor;
	        var customAccessor;
	        valueAccessors.forEach(function (v) {
	            if (hasConstructor(v, DefaultValueAccessor)) {
	                defaultAccessor = v;
	            }
	            else if (isBuiltInAccessor(v)) {
	                if (isPresent(builtinAccessor))
	                    _throwError(dir, 'More than one built-in value accessor matches form control with');
	                builtinAccessor = v;
	            }
	            else {
	                if (isPresent(customAccessor))
	                    _throwError(dir, 'More than one custom value accessor matches form control with');
	                customAccessor = v;
	            }
	        });
	        if (isPresent(customAccessor))
	            return customAccessor;
	        if (isPresent(builtinAccessor))
	            return builtinAccessor;
	        if (isPresent(defaultAccessor))
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
	        if (isBlank(path))
	            return null;
	        if (!(path instanceof Array)) {
	            path = path.split(delimiter);
	        }
	        if (path instanceof Array && ListWrapper.isEmpty(path))
	            return null;
	        return path.reduce(function (v, name) {
	            if (v instanceof FormGroup) {
	                return isPresent(v.controls[name]) ? v.controls[name] : null;
	            }
	            else if (v instanceof FormArray) {
	                var index = name;
	                return isPresent(v.at(index)) ? v.at(index) : null;
	            }
	            else {
	                return null;
	            }
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
	     * @stable
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
	            get: function () { return this._status === VALID; },
	            enumerable: true,
	            configurable: true
	        });
	        Object.defineProperty(AbstractControl.prototype, "invalid", {
	            get: function () { return this._status === INVALID; },
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
	            get: function () { return this._status == PENDING; },
	            enumerable: true,
	            configurable: true
	        });
	        Object.defineProperty(AbstractControl.prototype, "disabled", {
	            get: function () { return this._status === DISABLED; },
	            enumerable: true,
	            configurable: true
	        });
	        Object.defineProperty(AbstractControl.prototype, "enabled", {
	            get: function () { return this._status !== DISABLED; },
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
	        AbstractControl.prototype.markAsTouched = function (_a) {
	            var onlySelf = (_a === void 0 ? {} : _a).onlySelf;
	            onlySelf = normalizeBool(onlySelf);
	            this._touched = true;
	            if (isPresent(this._parent) && !onlySelf) {
	                this._parent.markAsTouched({ onlySelf: onlySelf });
	            }
	        };
	        AbstractControl.prototype.markAsDirty = function (_a) {
	            var onlySelf = (_a === void 0 ? {} : _a).onlySelf;
	            onlySelf = normalizeBool(onlySelf);
	            this._pristine = false;
	            if (isPresent(this._parent) && !onlySelf) {
	                this._parent.markAsDirty({ onlySelf: onlySelf });
	            }
	        };
	        AbstractControl.prototype.markAsPristine = function (_a) {
	            var onlySelf = (_a === void 0 ? {} : _a).onlySelf;
	            this._pristine = true;
	            this._forEachChild(function (control) { control.markAsPristine({ onlySelf: true }); });
	            if (isPresent(this._parent) && !onlySelf) {
	                this._parent._updatePristine({ onlySelf: onlySelf });
	            }
	        };
	        AbstractControl.prototype.markAsUntouched = function (_a) {
	            var onlySelf = (_a === void 0 ? {} : _a).onlySelf;
	            this._touched = false;
	            this._forEachChild(function (control) { control.markAsUntouched({ onlySelf: true }); });
	            if (isPresent(this._parent) && !onlySelf) {
	                this._parent._updateTouched({ onlySelf: onlySelf });
	            }
	        };
	        AbstractControl.prototype.markAsPending = function (_a) {
	            var onlySelf = (_a === void 0 ? {} : _a).onlySelf;
	            onlySelf = normalizeBool(onlySelf);
	            this._status = PENDING;
	            if (isPresent(this._parent) && !onlySelf) {
	                this._parent.markAsPending({ onlySelf: onlySelf });
	            }
	        };
	        AbstractControl.prototype.disable = function (_a) {
	            var _b = _a === void 0 ? {} : _a, onlySelf = _b.onlySelf, emitEvent = _b.emitEvent;
	            emitEvent = isPresent(emitEvent) ? emitEvent : true;
	            this._status = DISABLED;
	            this._forEachChild(function (control) { control.disable({ onlySelf: true }); });
	            this._updateValue();
	            if (emitEvent) {
	                this._valueChanges.emit(this._value);
	                this._statusChanges.emit(this._status);
	            }
	            this._updateAncestors(onlySelf);
	            this._onDisabledChange(true);
	        };
	        AbstractControl.prototype.enable = function (_a) {
	            var _b = _a === void 0 ? {} : _a, onlySelf = _b.onlySelf, emitEvent = _b.emitEvent;
	            this._status = VALID;
	            this._forEachChild(function (control) { control.enable({ onlySelf: true }); });
	            this.updateValueAndValidity({ onlySelf: true, emitEvent: emitEvent });
	            this._updateAncestors(onlySelf);
	            this._onDisabledChange(false);
	        };
	        AbstractControl.prototype._updateAncestors = function (onlySelf) {
	            if (isPresent(this._parent) && !onlySelf) {
	                this._parent.updateValueAndValidity();
	                this._parent._updatePristine();
	                this._parent._updateTouched();
	            }
	        };
	        AbstractControl.prototype.setParent = function (parent) { this._parent = parent; };
	        AbstractControl.prototype.updateValueAndValidity = function (_a) {
	            var _b = _a === void 0 ? {} : _a, onlySelf = _b.onlySelf, emitEvent = _b.emitEvent;
	            onlySelf = normalizeBool(onlySelf);
	            emitEvent = isPresent(emitEvent) ? emitEvent : true;
	            this._updateValue();
	            this._errors = this._runValidator();
	            var originalStatus = this._status;
	            this._status = this._calculateStatus();
	            if (this._status == VALID || this._status == PENDING) {
	                this._runAsyncValidator(emitEvent);
	            }
	            if (this._disabledChanged(originalStatus)) {
	                this._updateValue();
	            }
	            if (emitEvent) {
	                this._valueChanges.emit(this._value);
	                this._statusChanges.emit(this._status);
	            }
	            if (isPresent(this._parent) && !onlySelf) {
	                this._parent.updateValueAndValidity({ onlySelf: onlySelf, emitEvent: emitEvent });
	            }
	        };
	        /** @internal */
	        AbstractControl.prototype._updateTreeValidity = function (_a) {
	            var emitEvent = (_a === void 0 ? { emitEvent: true } : _a).emitEvent;
	            this._forEachChild(function (ctrl) { return ctrl._updateTreeValidity({ emitEvent: emitEvent }); });
	            this.updateValueAndValidity({ onlySelf: true, emitEvent: emitEvent });
	        };
	        AbstractControl.prototype._runValidator = function () {
	            return isPresent(this.validator) ? this.validator(this) : null;
	        };
	        AbstractControl.prototype._runAsyncValidator = function (emitEvent) {
	            var _this = this;
	            if (isPresent(this.asyncValidator)) {
	                this._status = PENDING;
	                this._cancelExistingSubscription();
	                var obs = toObservable(this.asyncValidator(this));
	                this._asyncValidationSubscription = obs.subscribe({ next: function (res) { return _this.setErrors(res, { emitEvent: emitEvent }); } });
	            }
	        };
	        AbstractControl.prototype._cancelExistingSubscription = function () {
	            if (isPresent(this._asyncValidationSubscription)) {
	                this._asyncValidationSubscription.unsubscribe();
	            }
	        };
	        AbstractControl.prototype._disabledChanged = function (originalStatus) {
	            return this._status !== originalStatus &&
	                (this._status === DISABLED || originalStatus === DISABLED);
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
	            emitEvent = isPresent(emitEvent) ? emitEvent : true;
	            this._errors = errors;
	            this._updateControlsErrors(emitEvent);
	        };
	        AbstractControl.prototype.get = function (path) { return _find(this, path, '.'); };
	        AbstractControl.prototype.getError = function (errorCode, path) {
	            if (path === void 0) { path = null; }
	            var control = isPresent(path) && !ListWrapper.isEmpty(path) ? this.get(path) : this;
	            if (isPresent(control) && isPresent(control._errors)) {
	                return StringMapWrapper.get(control._errors, errorCode);
	            }
	            else {
	                return null;
	            }
	        };
	        AbstractControl.prototype.hasError = function (errorCode, path) {
	            if (path === void 0) { path = null; }
	            return isPresent(this.getError(errorCode, path));
	        };
	        Object.defineProperty(AbstractControl.prototype, "root", {
	            get: function () {
	                var x = this;
	                while (isPresent(x._parent)) {
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
	            if (isPresent(this._parent)) {
	                this._parent._updateControlsErrors(emitEvent);
	            }
	        };
	        /** @internal */
	        AbstractControl.prototype._initObservables = function () {
	            this._valueChanges = new EventEmitter();
	            this._statusChanges = new EventEmitter();
	        };
	        AbstractControl.prototype._calculateStatus = function () {
	            if (isPresent(this._errors))
	                return INVALID;
	            if (this._anyControlsHaveStatus(PENDING))
	                return PENDING;
	            if (this._anyControlsHaveStatus(INVALID))
	                return INVALID;
	            if (this._allControlsDisabled())
	                return DISABLED;
	            return VALID;
	        };
	        /** @internal */
	        AbstractControl.prototype._anyControlsHaveStatus = function (status) {
	            return this._anyControls(function (control) { return control.status == status; });
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
	            if (isPresent(this._parent) && !onlySelf) {
	                this._parent._updatePristine({ onlySelf: onlySelf });
	            }
	        };
	        /** @internal */
	        AbstractControl.prototype._updateTouched = function (_a) {
	            var onlySelf = (_a === void 0 ? {} : _a).onlySelf;
	            this._touched = this._anyControlsTouched();
	            if (isPresent(this._parent) && !onlySelf) {
	                this._parent._updateTouched({ onlySelf: onlySelf });
	            }
	        };
	        /** @internal */
	        AbstractControl.prototype._onDisabledChange = function (isDisabled) { };
	        /** @internal */
	        AbstractControl.prototype._isBoxedValue = function (formState) {
	            return isStringMap(formState) && Object.keys(formState).length === 2 && 'value' in formState &&
	                'disabled' in formState;
	        };
	        return AbstractControl;
	    }());
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
	         * and not its parent component. If `emitEvent` is `true`, this change will cause a
	         * `valueChanges` event on the `FormControl` to be emitted. Both of these options default to
	         * `false`.
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
	            emitModelToViewChange = isPresent(emitModelToViewChange) ? emitModelToViewChange : true;
	            emitViewToModelChange = isPresent(emitViewToModelChange) ? emitViewToModelChange : true;
	            this._value = value;
	            if (this._onChange.length && emitModelToViewChange) {
	                this._onChange.forEach(function (changeFn) { return changeFn(_this._value, emitViewToModelChange); });
	            }
	            this.updateValueAndValidity({ onlySelf: onlySelf, emitEvent: emitEvent });
	        };
	        /**
	         * This function is functionally the same as updateValue() at this level.  It exists for
	         * symmetry with patchValue() on FormGroups and FormArrays, where it does behave differently.
	         */
	        FormControl.prototype.patchValue = function (value, options) {
	            if (options === void 0) { options = {}; }
	            this.setValue(value, options);
	        };
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
	            this._onDisabledChange = null;
	        };
	        /**
	         * Register a listener for disabled events.
	         */
	        FormControl.prototype.registerOnDisabledChange = function (fn) { this._onDisabledChange = fn; };
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
	            StringMapWrapper.delete(this.controls, name);
	            this.updateValueAndValidity();
	        };
	        /**
	         * Check whether there is a control with the given name in the group.
	         */
	        FormGroup.prototype.contains = function (controlName) {
	            var c = StringMapWrapper.contains(this.controls, controlName);
	            return c && this.get(controlName).enabled;
	        };
	        FormGroup.prototype.setValue = function (value, _a) {
	            var _this = this;
	            var onlySelf = (_a === void 0 ? {} : _a).onlySelf;
	            this._checkAllValuesPresent(value);
	            StringMapWrapper.forEach(value, function (newValue, name) {
	                _this._throwIfControlMissing(name);
	                _this.controls[name].setValue(newValue, { onlySelf: true });
	            });
	            this.updateValueAndValidity({ onlySelf: onlySelf });
	        };
	        FormGroup.prototype.patchValue = function (value, _a) {
	            var _this = this;
	            var onlySelf = (_a === void 0 ? {} : _a).onlySelf;
	            StringMapWrapper.forEach(value, function (newValue, name) {
	                if (_this.controls[name]) {
	                    _this.controls[name].patchValue(newValue, { onlySelf: true });
	                }
	            });
	            this.updateValueAndValidity({ onlySelf: onlySelf });
	        };
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
	            StringMapWrapper.forEach(this.controls, cb);
	        };
	        /** @internal */
	        FormGroup.prototype._setParentForControls = function () {
	            var _this = this;
	            this._forEachChild(function (control, name) { control.setParent(_this); });
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
	            return !StringMapWrapper.isEmpty(this.controls);
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
	            ListWrapper.insert(this.controls, index, control);
	            control.setParent(this);
	            this.updateValueAndValidity();
	        };
	        /**
	         * Remove the control at the given `index` in the array.
	         */
	        FormArray.prototype.removeAt = function (index) {
	            ListWrapper.removeAt(this.controls, index);
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
	        FormArray.prototype._setParentForControls = function () {
	            var _this = this;
	            this._forEachChild(function (control) { control.setParent(_this); });
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
	            return !!this.controls.length;
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
	     * If `NgForm` is bound in a component, `<form>` elements in that component will be
	     * upgraded to use the Angular form system.
	     *
	     * ### Typical Use
	     *
	     * Include `FORM_DIRECTIVES` in the `directives` section of a {@link Component} annotation
	     * to use `NgForm` and its associated controls.
	     *
	     * ### Structure
	     *
	     * An Angular form is a collection of `FormControl`s in some hierarchy.
	     * `FormControl`s can be at the top level or can be organized in `FormGroup`s
	     * or `FormArray`s. This hierarchy is reflected in the form's `value`, a
	     * JSON object that mirrors the form structure.
	     *
	     * ### Submission
	     *
	     * The `ngSubmit` event signals when the user triggers a form submission.
	     *
	     *  ```typescript
	     * @Component({
	     *   selector: 'my-app',
	     *   template: `
	     *     <div>
	     *       <p>Submit the form to see the data object Angular builds</p>
	     *       <h2>NgForm demo</h2>
	     *       <form #f="ngForm" (ngSubmit)="onSubmit(f.value)">
	     *         <h3>Control group: credentials</h3>
	     *         <div ngModelGroup="credentials">
	     *           <p>Login: <input type="text" name="login" ngModel></p>
	     *           <p>Password: <input type="password" name="password" ngModel></p>
	     *         </div>
	     *         <h3>Control group: person</h3>
	     *         <div ngModelGroup="person">
	     *           <p>First name: <input type="text" name="firstName" ngModel></p>
	     *           <p>Last name: <input type="text" name="lastName" ngModel></p>
	     *         </div>
	     *         <button type="submit">Submit Form</button>
	     *       <p>Form data submitted:</p>
	     *       </form>
	     *       <pre>{{data}}</pre>
	     *     </div>
	     * `,
	     *   directives: []
	     * })
	     * export class App {
	     *   constructor() {}
	     *
	     *   data: string;
	     *
	     *   onSubmit(data) {
	     *     this.data = JSON.stringify(data, null, 2);
	     *   }
	     * }
	     *  ```
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
	        NgForm.prototype.onSubmit = function () {
	            this._submitted = true;
	            this.ngSubmit.emit(null);
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
	            return ListWrapper.isEmpty(path) ? this.form : this.form.get(path);
	        };
	        NgForm.decorators = [
	            { type: _angular_core.Directive, args: [{
	                        selector: 'form:not([ngNoForm]):not([formGroup]),ngForm,[ngForm]',
	                        providers: [formDirectiveProvider],
	                        host: { '(submit)': 'onSubmit()', '(reset)': 'onReset()' },
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
	     * Creates and binds a model group to a DOM element.
	     *
	     * This directive can only be used as a child of {@link NgForm}.
	     *
	     * ```typescript
	     * @Component({
	     *   selector: 'my-app',
	     *   template: `
	     *     <div>
	     *       <h2>Angular forms Example</h2>
	     *       <form #f="ngForm">
	     *         <div ngModelGroup="name" #mgName="ngModelGroup">
	     *           <h3>Enter your name:</h3>
	     *           <p>First: <input name="first" ngModel required></p>
	     *           <p>Middle: <input name="middle" ngModel></p>
	     *           <p>Last: <input name="last" ngModel required></p>
	     *         </div>
	     *         <h3>Name value:</h3>
	     *         <pre>{{ mgName.value | json }}</pre>
	     *         <p>Name is {{mgName?.valid ? "valid" : "invalid"}}</p>
	     *         <h3>What's your favorite food?</h3>
	     *         <p><input name="food" ngModel></p>
	     *         <h3>Form value</h3>
	     *         <pre>{{ f.value | json }}</pre>
	     *       </form>
	     *     </div>
	     *   `
	     * })
	     * export class App {}
	     * ```
	     *
	     * This example declares a model group for a user's name. The value and validation state of
	     * this group can be accessed separately from the overall form.
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
	     * Binds a domain model to a form control.
	     *
	     * ### Usage
	     *
	     * `ngModel` binds an existing domain model to a form control. For a
	     * two-way binding, use `[(ngModel)]` to ensure the model updates in
	     * both directions.
	     *
	     *  ```typescript
	     * @Component({
	     *      selector: "search-comp",
	     *      directives: [],
	     *      template: `<input type='text' [(ngModel)]="searchQuery">`
	     *      })
	     * class SearchComp {
	     *  searchQuery: string;
	     * }
	     *  ```
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
	            var isDisabled = disabledValue != null && disabledValue != false;
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
	     * Binds an existing {@link FormControl} to a DOM element. It requires importing the {@link
	     * ReactiveFormsModule}.
	     *
	     * In this example, we bind the control to an input element. When the value of the input element
	     * changes, the value of the control will reflect that change. Likewise, if the value of the
	     * control changes, the input element reflects that change.
	     *
	     *  ```typescript
	     * @Component({
	     *   selector: 'my-app',
	     *   template: `
	     *     <div>
	     *       <h2>Bind existing control example</h2>
	     *       <form>
	     *         <p>Element with existing control: <input type="text"
	     * [formControl]="loginControl"></p>
	     *         <p>Value of existing control: {{loginControl.value}}</p>
	     *       </form>
	     *     </div>
	     *   `,
	     * })
	     * export class App {
	     *   loginControl: FormControl = new FormControl('');
	     * }
	     *  ```
	     *
	     * ### ngModel
	     *
	     * We can also set the value of the form programmatically with setValue().
	     **
	     *  ```typescript
	     * @Component({
	     *      selector: "login-comp",
	
	     *      template: "<input type='text' [formControl]='loginControl'>"
	     *      })
	     * class LoginComp {
	     *  loginControl: FormControl = new FormControl('');
	     *
	     *  populate() {
	     *    this.loginControl.setValue('some login');
	     *  }
	     *
	     * }
	     *  ```
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
	                if (this.control.disabled)
	                    this.valueAccessor.setDisabledState(true);
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
	            return StringMapWrapper.contains(changes, 'form');
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
	     * Binds an existing form group to a DOM element.  It requires importing the {@link
	     * ReactiveFormsModule}.
	     *
	     * In this example, we bind the form group to the form element, and we bind the login and
	     * password controls to the login and password elements.
	     *
	     *  ```typescript
	     * @Component({
	     *   selector: 'my-app',
	     *   template: `
	     *     <div>
	     *       <h2>Binding an existing form group</h2>
	     *       <form [formGroup]="loginForm">
	     *         <p>Login: <input type="text" formControlName="login"></p>
	     *         <p>Password: <input type="password" formControlName="password"></p>
	     *       </form>
	     *       <p>Value:</p>
	     *       <pre>{{ loginForm.value | json}}</pre>
	     *     </div>
	     *   `
	     * })
	     * export class App {
	     *   loginForm: FormGroup;
	     *
	     *   constructor() {
	     *     this.loginForm = new FormGroup({
	     *       login: new FormControl(""),
	     *       password: new FormControl("")
	     *     });
	     *   }
	     *
	     * }
	     *  ```
	     *
	     * We can also use setValue() to populate the form programmatically.
	     *
	     *  ```typescript
	     * @Component({
	     *      selector: "login-comp",
	     *      template: `
	     *        <form [formGroup]='loginForm'>
	     *          Login <input type='text' formControlName='login'>
	     *          Password <input type='password' formControlName='password'>
	     *          <button (click)="onLogin()">Login</button>
	     *        </form>`
	     *      })
	     * class LoginComp {
	     *  loginForm: FormGroup;
	     *
	     *  constructor() {
	     *    this.loginForm = new FormGroup({
	     *      login: new FormControl(''),
	     *      password: new FormControl('')
	     *    });
	     *  }
	     *
	     *  populate() {
	     *    this.loginForm.setValue({ login: 'some login', password: 'some password'});
	     *  }
	     *
	     *  onLogin(): void {
	     *    // this.credentials.login === 'some login'
	     *    // this.credentials.password === 'some password'
	     *  }
	     * }
	     *  ```
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
	            if (StringMapWrapper.contains(changes, 'form')) {
	                var sync = composeValidators(this._validators);
	                this.form.validator = Validators.compose([this.form.validator, sync]);
	                var async = composeAsyncValidators(this._asyncValidators);
	                this.form.asyncValidator = Validators.composeAsync([this.form.asyncValidator, async]);
	                this._updateDomValue(changes);
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
	        FormGroupDirective.prototype.onSubmit = function () {
	            this._submitted = true;
	            this.ngSubmit.emit(null);
	            return false;
	        };
	        FormGroupDirective.prototype.onReset = function () { this.resetForm(); };
	        FormGroupDirective.prototype.resetForm = function (value) {
	            if (value === void 0) { value = undefined; }
	            this.form.reset(value);
	            this._submitted = false;
	        };
	        /** @internal */
	        FormGroupDirective.prototype._updateDomValue = function (changes) {
	            var _this = this;
	            var oldForm = changes['form'].previousValue;
	            this.directives.forEach(function (dir) {
	                var newCtrl = _this.form.get(dir.path);
	                var oldCtrl = oldForm.get(dir.path);
	                if (oldCtrl !== newCtrl) {
	                    cleanUpControl(oldCtrl, dir);
	                    if (newCtrl)
	                        setUpControl(newCtrl, dir);
	                }
	            });
	            this.form._updateTreeValidity({ emitEvent: false });
	        };
	        FormGroupDirective.prototype._checkFormPresent = function () {
	            if (isBlank(this.form)) {
	                ReactiveErrors.missingFormException();
	            }
	        };
	        FormGroupDirective.decorators = [
	            { type: _angular_core.Directive, args: [{
	                        selector: '[formGroup]',
	                        providers: [formDirectiveProvider$1],
	                        host: { '(submit)': 'onSubmit()', '(reset)': 'onReset()' },
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
	     * Syncs an existing form group to a DOM element.
	     *
	     * This directive can only be used as a child of {@link FormGroupDirective}.  It also requires
	     * importing the {@link ReactiveFormsModule}.
	     *
	     * ```typescript
	     * @Component({
	     *   selector: 'my-app',
	     *   template: `
	     *     <div>
	     *       <h2>Angular FormGroup Example</h2>
	     *       <form [formGroup]="myForm">
	     *         <div formGroupName="name">
	     *           <h3>Enter your name:</h3>
	     *           <p>First: <input formControlName="first"></p>
	     *           <p>Middle: <input formControlName="middle"></p>
	     *           <p>Last: <input formControlName="last"></p>
	     *         </div>
	     *         <h3>Name value:</h3>
	     *         <pre>{{ myForm.get('name') | json }}</pre>
	     *         <p>Name is {{myForm.get('name')?.valid ? "valid" : "invalid"}}</p>
	     *         <h3>What's your favorite food?</h3>
	     *         <p><input formControlName="food"></p>
	     *         <h3>Form value</h3>
	     *         <pre> {{ myForm | json }} </pre>
	     *       </form>
	     *     </div>
	     *   `
	     * })
	     * export class App {
	     *   myForm = new FormGroup({
	     *     name: new FormGroup({
	     *       first: new FormControl('', Validators.required),
	     *       middle: new FormControl(''),
	     *       last: new FormControl('', Validators.required)
	     *     }),
	     *     food: new FormControl()
	     *   });
	     * }
	     * ```
	     *
	     * This example syncs the form group for the user's name. The value and validation state of
	     * this group can be accessed separately from the overall form.
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
	     * Syncs an existing form array to a DOM element.
	     *
	     * This directive can only be used as a child of {@link FormGroupDirective}.  It also requires
	     * importing the {@link ReactiveFormsModule}.
	     *
	     * ```typescript
	     * @Component({
	     *   selector: 'my-app',
	     *   template: `
	     *     <div>
	     *       <h2>Angular FormArray Example</h2>
	     *       <form [formGroup]="myForm">
	     *         <div formArrayName="cities">
	     *           <div *ngFor="let city of cityArray.controls; let i=index">
	     *             <input [formControlName]="i">
	     *           </div>
	     *         </div>
	     *       </form>
	     *       {{ myForm.value | json }}     // {cities: ['SF', 'NY']}
	     *     </div>
	     *   `
	     * })
	     * export class App {
	     *   cityArray = new FormArray([
	     *     new FormControl('SF'),
	     *     new FormControl('NY')
	     *   ]);
	     *   myForm = new FormGroup({
	     *     cities: this.cityArray
	     *   });
	     * }
	     * ```
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
	     * Syncs an existing form control with the specified name to a DOM element.
	     *
	     * This directive can only be used as a child of {@link FormGroupDirective}.  It also requires
	     * importing the {@link ReactiveFormsModule}.
	
	     * ### Example
	     *
	     * In this example, we create the login and password controls.
	     * We can work with each control separately: check its validity, get its value, listen to its
	     * changes.
	     *
	     *  ```
	     * @Component({
	     *      selector: "login-comp",
	     *      template: `
	     *        <form [formGroup]="myForm" (submit)="onLogIn()">
	     *          Login <input type="text" formControlName="login">
	     *          <div *ngIf="!loginCtrl.valid">Login is invalid</div>
	     *          Password <input type="password" formControlName="password">
	     *          <button type="submit">Log in!</button>
	     *        </form>
	     *      `})
	     * class LoginComp {
	     *  loginCtrl = new FormControl();
	     *  passwordCtrl = new FormControl();
	     *  myForm = new FormGroup({
	     *     login: loginCtrl,
	     *     password: passwordCtrl
	     *  });
	     *  onLogIn(): void {
	     *    // value === {login: 'some login', password: 'some password'}
	     *  }
	     * }
	     *  ```
	     *
	     * We can also set the value of the form programmatically using setValue().
	     *
	     *  ```
	     * @Component({
	     *      selector: "login-comp",
	     *      template: `
	     *        <form [formGroup]="myForm" (submit)='onLogIn()'>
	     *          Login <input type='text' formControlName='login'>
	     *          Password <input type='password' formControlName='password'>
	     *          <button type='submit'>Log in!</button>
	     *        </form>
	     *      `})
	     * class LoginComp {
	     *  myForm = new FormGroup({
	     *    login: new FormControl(),
	     *    password: new FormControl()
	     *  });
	     *
	     *  populate() {
	     *     this.myForm.setValue({login: 'some login', password: 'some password'});
	     *  }
	     *
	     *  onLogIn(): void {
	     *    // this.credentials.login === "some login"
	     *    // this.credentials.password === "some password"
	     *  }
	     * }
	     *  ```
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
	            if (!this._added) {
	                this._checkParentType();
	                this.formDirective.addControl(this);
	                if (this.control.disabled)
	                    this.valueAccessor.setDisabledState(true);
	                this._added = true;
	            }
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
	            get: function () { return this.formDirective.getControl(this); },
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
	        RequiredValidator.prototype.registerOnChange = function (fn) { this._onChange = fn; };
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
	        MinLengthValidator.prototype.registerOnChange = function (fn) { this._onChange = fn; };
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
	        MaxLengthValidator.prototype.registerOnChange = function (fn) { this._onChange = fn; };
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
	        PatternValidator.prototype.registerOnChange = function (fn) { this._onChange = fn; };
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
	     * Creates a form object from a user-specified configuration.
	     *
	     * ```typescript
	     * @Component({
	     *   selector: 'my-app',
	     *   template: `
	     *     <form [formGroup]="loginForm">
	     *       <p>Login <input formControlName="login"></p>
	     *       <div formGroupName="passwordRetry">
	     *         <p>Password <input type="password" formControlName="password"></p>
	     *         <p>Confirm password <input type="password" formControlName="passwordConfirmation"></p>
	     *       </div>
	     *     </form>
	     *     <h3>Form value:</h3>
	     *     <pre>{{value}}</pre>
	     *   `,
	     *   directives: [REACTIVE_FORM_DIRECTIVES]
	     * })
	     * export class App {
	     *   loginForm: FormGroup;
	     *
	     *   constructor(builder: FormBuilder) {
	     *     this.loginForm = builder.group({
	     *       login: ["", Validators.required],
	     *       passwordRetry: builder.group({
	     *         password: ["", Validators.required],
	     *         passwordConfirmation: ["", Validators.required, asyncValidator]
	     *       })
	     *     });
	     *   }
	     *
	     *   get value(): string {
	     *     return JSON.stringify(this.loginForm.value, null, 2);
	     *   }
	     * }
	     * ```
	     *
	     * @stable
	     */
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
	            var validator = isPresent(extra) ? StringMapWrapper.get(extra, 'validator') : null;
	            var asyncValidator = isPresent(extra) ? StringMapWrapper.get(extra, 'asyncValidator') : null;
	            return new FormGroup(controls, validator, asyncValidator);
	        };
	        /**
	         * Construct a new {@link FormControl} with the given `formState`,`validator`, and
	         * `asyncValidator`.
	         */
	        FormBuilder.prototype.control = function (formState, validator, asyncValidator) {
	            if (validator === void 0) { validator = null; }
	            if (asyncValidator === void 0) { asyncValidator = null; }
	            return new FormControl(formState, validator, asyncValidator);
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
	            return new FormArray(controls, validator, asyncValidator);
	        };
	        /** @internal */
	        FormBuilder.prototype._reduceControls = function (controlsConfig) {
	            var _this = this;
	            var controls = {};
	            StringMapWrapper.forEach(controlsConfig, function (controlConfig, controlName) {
	                controls[controlName] = _this._createControl(controlConfig);
	            });
	            return controls;
	        };
	        /** @internal */
	        FormBuilder.prototype._createControl = function (controlConfig) {
	            if (controlConfig instanceof FormControl || controlConfig instanceof FormGroup ||
	                controlConfig instanceof FormArray) {
	                return controlConfig;
	            }
	            else if (isArray(controlConfig)) {
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
	
	/* WEBPACK VAR INJECTION */}.call(exports, (function() { return this; }())))

/***/ },
/* 32 */
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
/* 33 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var PromiseObservable_1 = __webpack_require__(34);
	exports.fromPromise = PromiseObservable_1.PromiseObservable.create;
	//# sourceMappingURL=fromPromise.js.map

/***/ },
/* 34 */
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
/* 35 */
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
	function __export(m) {
	    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
	}
	var core_1 = __webpack_require__(3);
	var common_1 = __webpack_require__(23);
	var modal_1 = __webpack_require__(36);
	var modal_header_1 = __webpack_require__(43);
	var modal_body_1 = __webpack_require__(44);
	var modal_footer_1 = __webpack_require__(45);
	var autofocus_1 = __webpack_require__(46);
	__export(__webpack_require__(36));
	__export(__webpack_require__(43));
	__export(__webpack_require__(44));
	__export(__webpack_require__(45));
	__export(__webpack_require__(37));
	var Ng2Bs3ModalModule = (function () {
	    function Ng2Bs3ModalModule() {
	    }
	    Ng2Bs3ModalModule = __decorate([
	        core_1.NgModule({
	            imports: [
	                common_1.CommonModule
	            ],
	            declarations: [
	                modal_1.ModalComponent,
	                modal_header_1.ModalHeaderComponent,
	                modal_body_1.ModalBodyComponent,
	                modal_footer_1.ModalFooterComponent,
	                autofocus_1.AutofocusDirective
	            ],
	            exports: [
	                modal_1.ModalComponent,
	                modal_header_1.ModalHeaderComponent,
	                modal_body_1.ModalBodyComponent,
	                modal_footer_1.ModalFooterComponent,
	                autofocus_1.AutofocusDirective
	            ]
	        }), 
	        __metadata('design:paramtypes', [])
	    ], Ng2Bs3ModalModule);
	    return Ng2Bs3ModalModule;
	}());
	exports.Ng2Bs3ModalModule = Ng2Bs3ModalModule;
	//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmcyLWJzMy1tb2RhbC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbInNyYy9uZzItYnMzLW1vZGFsL25nMi1iczMtbW9kYWwudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7OztBQUFBLHFCQUF5QixlQUFlLENBQUMsQ0FBQTtBQUN6Qyx1QkFBNkIsaUJBQWlCLENBQUMsQ0FBQTtBQUUvQyxzQkFBK0Isb0JBQW9CLENBQUMsQ0FBQTtBQUNwRCw2QkFBcUMsMkJBQTJCLENBQUMsQ0FBQTtBQUNqRSwyQkFBbUMseUJBQXlCLENBQUMsQ0FBQTtBQUM3RCw2QkFBcUMsMkJBQTJCLENBQUMsQ0FBQTtBQUNqRSwwQkFBbUMsd0JBQXdCLENBQUMsQ0FBQTtBQUU1RCxpQkFBYyxvQkFBb0IsQ0FBQyxFQUFBO0FBQ25DLGlCQUFjLDJCQUEyQixDQUFDLEVBQUE7QUFDMUMsaUJBQWMseUJBQXlCLENBQUMsRUFBQTtBQUN4QyxpQkFBYywyQkFBMkIsQ0FBQyxFQUFBO0FBQzFDLGlCQUFjLDZCQUE2QixDQUFDLEVBQUE7QUFxQjVDO0lBQUE7SUFDQSxDQUFDO0lBcEJEO1FBQUMsZUFBUSxDQUFDO1lBQ04sT0FBTyxFQUFFO2dCQUNMLHFCQUFZO2FBQ2Y7WUFDRCxZQUFZLEVBQUU7Z0JBQ1Ysc0JBQWM7Z0JBQ2QsbUNBQW9CO2dCQUNwQiwrQkFBa0I7Z0JBQ2xCLG1DQUFvQjtnQkFDcEIsOEJBQWtCO2FBQ3JCO1lBQ0QsT0FBTyxFQUFFO2dCQUNMLHNCQUFjO2dCQUNkLG1DQUFvQjtnQkFDcEIsK0JBQWtCO2dCQUNsQixtQ0FBb0I7Z0JBQ3BCLDhCQUFrQjthQUNyQjtTQUNKLENBQUM7O3lCQUFBO0lBRUYsd0JBQUM7QUFBRCxDQUFDLEFBREQsSUFDQztBQURZLHlCQUFpQixvQkFDN0IsQ0FBQSJ9

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
	var __param = (this && this.__param) || function (paramIndex, decorator) {
	    return function (target, key) { decorator(target, key, paramIndex); }
	};
	var core_1 = __webpack_require__(3);
	var modal_instance_1 = __webpack_require__(37);
	var ModalComponent = (function () {
	    function ModalComponent(element) {
	        var _this = this;
	        this.element = element;
	        this.overrideSize = null;
	        this.visible = false;
	        this.animation = true;
	        this.backdrop = true;
	        this.keyboard = true;
	        this.cssClass = '';
	        this.onClose = new core_1.EventEmitter(false);
	        this.onDismiss = new core_1.EventEmitter(false);
	        this.onOpen = new core_1.EventEmitter(false);
	        this.instance = new modal_instance_1.ModalInstance(this.element);
	        this.instance.hidden.subscribe(function (result) {
	            _this.visible = _this.instance.visible;
	            if (result === modal_instance_1.ModalResult.Dismiss) {
	                _this.onDismiss.emit(undefined);
	            }
	        });
	        this.instance.shown.subscribe(function () {
	            _this.onOpen.emit(undefined);
	        });
	    }
	    Object.defineProperty(ModalComponent.prototype, "fadeClass", {
	        get: function () {
	            return this.animation;
	        },
	        enumerable: true,
	        configurable: true
	    });
	    Object.defineProperty(ModalComponent.prototype, "dataKeyboardAttr", {
	        get: function () {
	            return this.keyboard;
	        },
	        enumerable: true,
	        configurable: true
	    });
	    Object.defineProperty(ModalComponent.prototype, "dataBackdropAttr", {
	        get: function () {
	            return this.backdrop;
	        },
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
	    ModalComponent.prototype.close = function (value) {
	        var _this = this;
	        return this.instance.close().then(function () {
	            _this.onClose.emit(value);
	        });
	    };
	    ModalComponent.prototype.dismiss = function () {
	        return this.instance.dismiss();
	    };
	    ModalComponent.prototype.getCssClasses = function () {
	        var classes = [];
	        if (this.isSmall()) {
	            classes.push('modal-sm');
	        }
	        if (this.isLarge()) {
	            classes.push('modal-lg');
	        }
	        if (this.cssClass !== '') {
	            classes.push(this.cssClass);
	        }
	        return classes.join(' ');
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
	        core_1.Input(), 
	        __metadata('design:type', String)
	    ], ModalComponent.prototype, "cssClass", void 0);
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
	            template: "\n        <div class=\"modal-dialog\" [ngClass]=\"getCssClasses()\">\n            <div class=\"modal-content\">\n                <ng-content></ng-content>\n            </div>\n        </div>\n    "
	        }),
	        __param(0, core_1.Inject(core_1.ElementRef)), 
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
	//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibW9kYWwuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi9zcmMvbmcyLWJzMy1tb2RhbC9jb21wb25lbnRzL21vZGFsLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7QUFBQSxxQkFBeUcsZUFBZSxDQUFDLENBQUE7QUFDekgsK0JBQTJDLGtCQUFrQixDQUFDLENBQUE7QUFpQjlEO0lBNkJJLHdCQUF3QyxPQUFtQjtRQTdCL0QsaUJBa0dDO1FBckUyQyxZQUFPLEdBQVAsT0FBTyxDQUFZO1FBM0JuRCxpQkFBWSxHQUFXLElBQUksQ0FBQztRQUdwQyxZQUFPLEdBQVksS0FBSyxDQUFDO1FBRWhCLGNBQVMsR0FBWSxJQUFJLENBQUM7UUFDMUIsYUFBUSxHQUFxQixJQUFJLENBQUM7UUFDbEMsYUFBUSxHQUFZLElBQUksQ0FBQztRQUV6QixhQUFRLEdBQVcsRUFBRSxDQUFDO1FBRXJCLFlBQU8sR0FBc0IsSUFBSSxtQkFBWSxDQUFDLEtBQUssQ0FBQyxDQUFDO1FBQ3JELGNBQVMsR0FBc0IsSUFBSSxtQkFBWSxDQUFDLEtBQUssQ0FBQyxDQUFDO1FBQ3ZELFdBQU0sR0FBc0IsSUFBSSxtQkFBWSxDQUFDLEtBQUssQ0FBQyxDQUFDO1FBZTFELElBQUksQ0FBQyxRQUFRLEdBQUcsSUFBSSw4QkFBYSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQztRQUVoRCxJQUFJLENBQUMsUUFBUSxDQUFDLE1BQU0sQ0FBQyxTQUFTLENBQUMsVUFBQyxNQUFNO1lBQ2xDLEtBQUksQ0FBQyxPQUFPLEdBQUcsS0FBSSxDQUFDLFFBQVEsQ0FBQyxPQUFPLENBQUM7WUFDckMsRUFBRSxDQUFDLENBQUMsTUFBTSxLQUFLLDRCQUFXLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQztnQkFDakMsS0FBSSxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLENBQUM7WUFDbkMsQ0FBQztRQUNMLENBQUMsQ0FBQyxDQUFDO1FBRUgsSUFBSSxDQUFDLFFBQVEsQ0FBQyxLQUFLLENBQUMsU0FBUyxDQUFDO1lBQzFCLEtBQUksQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxDQUFDO1FBQ2hDLENBQUMsQ0FBQyxDQUFDO0lBQ1AsQ0FBQztJQXpCMEIsc0JBQUkscUNBQVM7YUFBYjtZQUN2QixNQUFNLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQztRQUMxQixDQUFDOzs7T0FBQTtJQUVrQyxzQkFBSSw0Q0FBZ0I7YUFBcEI7WUFDL0IsTUFBTSxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUM7UUFDekIsQ0FBQzs7O09BQUE7SUFFa0Msc0JBQUksNENBQWdCO2FBQXBCO1lBQy9CLE1BQU0sQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDO1FBQ3pCLENBQUM7OztPQUFBO0lBaUJELG9DQUFXLEdBQVg7UUFDSSxNQUFNLENBQUMsSUFBSSxDQUFDLFFBQVEsSUFBSSxJQUFJLENBQUMsUUFBUSxDQUFDLE9BQU8sRUFBRSxDQUFDO0lBQ3BELENBQUM7SUFFRCw0Q0FBbUIsR0FBbkI7UUFDSSxNQUFNLENBQUMsSUFBSSxDQUFDLFdBQVcsRUFBRSxDQUFDO0lBQzlCLENBQUM7SUFFRCw2QkFBSSxHQUFKLFVBQUssSUFBYTtRQUFsQixpQkFLQztRQUpHLEVBQUUsQ0FBQyxDQUFDLFNBQVMsQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLENBQUM7WUFBQyxJQUFJLENBQUMsWUFBWSxHQUFHLElBQUksQ0FBQztRQUN4RCxNQUFNLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxJQUFJLEVBQUUsQ0FBQyxJQUFJLENBQUM7WUFDN0IsS0FBSSxDQUFDLE9BQU8sR0FBRyxLQUFJLENBQUMsUUFBUSxDQUFDLE9BQU8sQ0FBQztRQUN6QyxDQUFDLENBQUMsQ0FBQztJQUNQLENBQUM7SUFFRCw4QkFBSyxHQUFMLFVBQU0sS0FBVztRQUFqQixpQkFJQztRQUhHLE1BQU0sQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLEtBQUssRUFBRSxDQUFDLElBQUksQ0FBQztZQUM5QixLQUFJLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQztRQUM3QixDQUFDLENBQUMsQ0FBQztJQUNQLENBQUM7SUFFRCxnQ0FBTyxHQUFQO1FBQ0ksTUFBTSxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsT0FBTyxFQUFFLENBQUM7SUFDbkMsQ0FBQztJQUVELHNDQUFhLEdBQWI7UUFDSSxJQUFJLE9BQU8sR0FBYSxFQUFFLENBQUM7UUFFM0IsRUFBRSxDQUFDLENBQUMsSUFBSSxDQUFDLE9BQU8sRUFBRSxDQUFDLENBQUMsQ0FBQztZQUNqQixPQUFPLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxDQUFDO1FBQzdCLENBQUM7UUFFRCxFQUFFLENBQUMsQ0FBQyxJQUFJLENBQUMsT0FBTyxFQUFFLENBQUMsQ0FBQyxDQUFDO1lBQ2pCLE9BQU8sQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLENBQUM7UUFDN0IsQ0FBQztRQUVELEVBQUUsQ0FBQyxDQUFDLElBQUksQ0FBQyxRQUFRLEtBQUssRUFBRSxDQUFDLENBQUMsQ0FBQztZQUN2QixPQUFPLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQztRQUNoQyxDQUFDO1FBRUQsTUFBTSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUM7SUFDN0IsQ0FBQztJQUVPLGdDQUFPLEdBQWY7UUFDSSxNQUFNLENBQUMsSUFBSSxDQUFDLFlBQVksS0FBSyxTQUFTLENBQUMsS0FBSztlQUNyQyxJQUFJLENBQUMsSUFBSSxLQUFLLFNBQVMsQ0FBQyxLQUFLO2VBQzdCLElBQUksQ0FBQyxZQUFZLEtBQUssU0FBUyxDQUFDLEtBQUssQ0FBQztJQUNqRCxDQUFDO0lBRU8sZ0NBQU8sR0FBZjtRQUNJLE1BQU0sQ0FBQyxJQUFJLENBQUMsWUFBWSxLQUFLLFNBQVMsQ0FBQyxLQUFLO2VBQ3JDLElBQUksQ0FBQyxJQUFJLEtBQUssU0FBUyxDQUFDLEtBQUs7ZUFDN0IsSUFBSSxDQUFDLFlBQVksS0FBSyxTQUFTLENBQUMsS0FBSyxDQUFDO0lBQ2pELENBQUM7SUExRkQ7UUFBQyxZQUFLLEVBQUU7O3FEQUFBO0lBQ1I7UUFBQyxZQUFLLEVBQUU7O29EQUFBO0lBQ1I7UUFBQyxZQUFLLEVBQUU7O29EQUFBO0lBQ1I7UUFBQyxZQUFLLEVBQUU7O2dEQUFBO0lBQ1I7UUFBQyxZQUFLLEVBQUU7O29EQUFBO0lBRVI7UUFBQyxhQUFNLEVBQUU7O21EQUFBO0lBQ1Q7UUFBQyxhQUFNLEVBQUU7O3FEQUFBO0lBQ1Q7UUFBQyxhQUFNLEVBQUU7O2tEQUFBO0lBRVQ7UUFBQyxrQkFBVyxDQUFDLFlBQVksQ0FBQzs7bURBQUE7SUFJMUI7UUFBQyxrQkFBVyxDQUFDLG9CQUFvQixDQUFDOzswREFBQTtJQUlsQztRQUFDLGtCQUFXLENBQUMsb0JBQW9CLENBQUM7OzBEQUFBO0lBeEN0QztRQUFDLGdCQUFTLENBQUM7WUFDUCxRQUFRLEVBQUUsT0FBTztZQUNqQixJQUFJLEVBQUU7Z0JBQ0YsT0FBTyxFQUFFLE9BQU87Z0JBQ2hCLE1BQU0sRUFBRSxRQUFRO2dCQUNoQixVQUFVLEVBQUUsSUFBSTthQUNuQjtZQUNELFFBQVEsRUFBRSxzTUFNVDtTQUNKLENBQUM7bUJBOEJlLGFBQU0sQ0FBQyxpQkFBVSxDQUFDOztzQkE5QmpDO0lBbUdGLHFCQUFDO0FBQUQsQ0FBQyxBQWxHRCxJQWtHQztBQWxHWSxzQkFBYyxpQkFrRzFCLENBQUE7QUFFRDtJQUFBO0lBT0EsQ0FBQztJQUhVLG1CQUFTLEdBQWhCLFVBQWlCLElBQVk7UUFDekIsTUFBTSxDQUFDLElBQUksSUFBSSxDQUFDLElBQUksS0FBSyxTQUFTLENBQUMsS0FBSyxJQUFJLElBQUksS0FBSyxTQUFTLENBQUMsS0FBSyxDQUFDLENBQUM7SUFDMUUsQ0FBQztJQUxNLGVBQUssR0FBRyxJQUFJLENBQUM7SUFDYixlQUFLLEdBQUcsSUFBSSxDQUFDO0lBS3hCLGdCQUFDO0FBQUQsQ0FBQyxBQVBELElBT0M7QUFQWSxpQkFBUyxZQU9yQixDQUFBIn0=

/***/ },
/* 37 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var Observable_1 = __webpack_require__(5);
	__webpack_require__(38);
	__webpack_require__(40);
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
/* 38 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var Observable_1 = __webpack_require__(5);
	var map_1 = __webpack_require__(39);
	Observable_1.Observable.prototype.map = map_1.map;
	//# sourceMappingURL=map.js.map

/***/ },
/* 39 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __extends = (this && this.__extends) || function (d, b) {
	    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	    function __() { this.constructor = d; }
	    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	};
	var Subscriber_1 = __webpack_require__(9);
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
/* 40 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var Observable_1 = __webpack_require__(5);
	var fromEvent_1 = __webpack_require__(41);
	Observable_1.Observable.fromEvent = fromEvent_1.fromEvent;
	//# sourceMappingURL=fromEvent.js.map

/***/ },
/* 41 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var FromEventObservable_1 = __webpack_require__(42);
	exports.fromEvent = FromEventObservable_1.FromEventObservable.create;
	//# sourceMappingURL=fromEvent.js.map

/***/ },
/* 42 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __extends = (this && this.__extends) || function (d, b) {
	    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	    function __() { this.constructor = d; }
	    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	};
	var Observable_1 = __webpack_require__(5);
	var tryCatch_1 = __webpack_require__(14);
	var isFunction_1 = __webpack_require__(10);
	var errorObject_1 = __webpack_require__(15);
	var Subscription_1 = __webpack_require__(11);
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
	var modal_1 = __webpack_require__(36);
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
	        __param(0, core_1.Inject(modal_1.ModalComponent)), 
	        __metadata('design:paramtypes', [modal_1.ModalComponent])
	    ], ModalHeaderComponent);
	    return ModalHeaderComponent;
	}());
	exports.ModalHeaderComponent = ModalHeaderComponent;
	//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibW9kYWwtaGVhZGVyLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vc3JjL25nMi1iczMtbW9kYWwvY29tcG9uZW50cy9tb2RhbC1oZWFkZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7OztBQUFBLHFCQUF5QyxlQUFlLENBQUMsQ0FBQTtBQUN6RCxzQkFBK0IsU0FBUyxDQUFDLENBQUE7QUFhekM7SUFFSSw4QkFBNEMsS0FBcUI7UUFBckIsVUFBSyxHQUFMLEtBQUssQ0FBZ0I7UUFENUMsY0FBUyxHQUFZLEtBQUssQ0FBQztJQUNxQixDQUFDO0lBRHRFO1FBQUMsWUFBSyxDQUFDLFlBQVksQ0FBQzs7MkRBQUE7SUFaeEI7UUFBQyxnQkFBUyxDQUFDO1lBQ1AsUUFBUSxFQUFFLGNBQWM7WUFDeEIsUUFBUSxFQUFFLHlVQU9UO1NBQ0osQ0FBQzttQkFHZSxhQUFNLENBQUMsc0JBQWMsQ0FBQzs7NEJBSHJDO0lBSUYsMkJBQUM7QUFBRCxDQUFDLEFBSEQsSUFHQztBQUhZLDRCQUFvQix1QkFHaEMsQ0FBQSJ9

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
	var ModalBodyComponent = (function () {
	    function ModalBodyComponent() {
	    }
	    ModalBodyComponent = __decorate([
	        core_1.Component({
	            selector: 'modal-body',
	            template: "\n        <div class=\"modal-body\">\n            <ng-content></ng-content>\n        </div>\n    "
	        }), 
	        __metadata('design:paramtypes', [])
	    ], ModalBodyComponent);
	    return ModalBodyComponent;
	}());
	exports.ModalBodyComponent = ModalBodyComponent;
	//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibW9kYWwtYm9keS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uL3NyYy9uZzItYnMzLW1vZGFsL2NvbXBvbmVudHMvbW9kYWwtYm9keS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUEscUJBQTZELGVBQWUsQ0FBQyxDQUFBO0FBVzdFO0lBQUE7SUFDQSxDQUFDO0lBVEQ7UUFBQyxnQkFBUyxDQUFDO1lBQ1AsUUFBUSxFQUFFLFlBQVk7WUFDdEIsUUFBUSxFQUFFLG1HQUlUO1NBQ0osQ0FBQzs7MEJBQUE7SUFFRix5QkFBQztBQUFELENBQUMsQUFERCxJQUNDO0FBRFksMEJBQWtCLHFCQUM5QixDQUFBIn0=

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
	var modal_1 = __webpack_require__(36);
	var ModalFooterComponent = (function () {
	    function ModalFooterComponent(modal) {
	        this.modal = modal;
	        this.showDefaultButtons = false;
	        this.dismissButtonLabel = 'Dismiss';
	        this.closeButtonLabel = 'Close';
	    }
	    __decorate([
	        core_1.Input('show-default-buttons'), 
	        __metadata('design:type', Boolean)
	    ], ModalFooterComponent.prototype, "showDefaultButtons", void 0);
	    __decorate([
	        core_1.Input('dismiss-button-label'), 
	        __metadata('design:type', String)
	    ], ModalFooterComponent.prototype, "dismissButtonLabel", void 0);
	    __decorate([
	        core_1.Input('close-button-label'), 
	        __metadata('design:type', String)
	    ], ModalFooterComponent.prototype, "closeButtonLabel", void 0);
	    ModalFooterComponent = __decorate([
	        core_1.Component({
	            selector: 'modal-footer',
	            template: "\n        <div class=\"modal-footer\">\n            <ng-content></ng-content>\n            <button *ngIf=\"showDefaultButtons\" type=\"button\" class=\"btn btn-default\" data-dismiss=\"modal\" (click)=\"modal.dismiss()\">{{dismissButtonLabel}}</button>\n            <button *ngIf=\"showDefaultButtons\" type=\"button\" class=\"btn btn-primary\" (click)=\"modal.close()\">{{closeButtonLabel}}</button>\n        </div>\n    "
	        }),
	        __param(0, core_1.Inject(modal_1.ModalComponent)), 
	        __metadata('design:paramtypes', [modal_1.ModalComponent])
	    ], ModalFooterComponent);
	    return ModalFooterComponent;
	}());
	exports.ModalFooterComponent = ModalFooterComponent;
	//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibW9kYWwtZm9vdGVyLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vc3JjL25nMi1iczMtbW9kYWwvY29tcG9uZW50cy9tb2RhbC1mb290ZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7OztBQUFBLHFCQUF5QyxlQUFlLENBQUMsQ0FBQTtBQUN6RCxzQkFBK0IsU0FBUyxDQUFDLENBQUE7QUFZekM7SUFJSSw4QkFBNEMsS0FBcUI7UUFBckIsVUFBSyxHQUFMLEtBQUssQ0FBZ0I7UUFIbEMsdUJBQWtCLEdBQVksS0FBSyxDQUFDO1FBQ3BDLHVCQUFrQixHQUFXLFNBQVMsQ0FBQztRQUN6QyxxQkFBZ0IsR0FBVyxPQUFPLENBQUM7SUFDSyxDQUFDO0lBSHRFO1FBQUMsWUFBSyxDQUFDLHNCQUFzQixDQUFDOztvRUFBQTtJQUM5QjtRQUFDLFlBQUssQ0FBQyxzQkFBc0IsQ0FBQzs7b0VBQUE7SUFDOUI7UUFBQyxZQUFLLENBQUMsb0JBQW9CLENBQUM7O2tFQUFBO0lBYmhDO1FBQUMsZ0JBQVMsQ0FBQztZQUNQLFFBQVEsRUFBRSxjQUFjO1lBQ3hCLFFBQVEsRUFBRSx3YUFNVDtTQUNKLENBQUM7bUJBS2UsYUFBTSxDQUFDLHNCQUFjLENBQUM7OzRCQUxyQztJQU1GLDJCQUFDO0FBQUQsQ0FBQyxBQUxELElBS0M7QUFMWSw0QkFBb0IsdUJBS2hDLENBQUEifQ==

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
	var modal_1 = __webpack_require__(36);
	var AutofocusDirective = (function () {
	    function AutofocusDirective(el, modal) {
	        var _this = this;
	        this.el = el;
	        this.modal = modal;
	        if (!modal) {
	            this.modal.onOpen.subscribe(function () {
	                _this.el.nativeElement.focus();
	            });
	        }
	    }
	    AutofocusDirective = __decorate([
	        core_1.Directive({
	            selector: '[autofocus]'
	        }),
	        __param(0, core_1.Inject(core_1.ElementRef)),
	        __param(1, core_1.Inject(modal_1.ModalComponent)),
	        __param(1, core_1.Optional()), 
	        __metadata('design:paramtypes', [core_1.ElementRef, modal_1.ModalComponent])
	    ], AutofocusDirective);
	    return AutofocusDirective;
	}());
	exports.AutofocusDirective = AutofocusDirective;
	//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXV0b2ZvY3VzLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vc3JjL25nMi1iczMtbW9kYWwvZGlyZWN0aXZlcy9hdXRvZm9jdXMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7OztBQUFBLHFCQUF3RCxlQUFlLENBQUMsQ0FBQTtBQUN4RSxzQkFBK0IscUJBQXFCLENBQUMsQ0FBQTtBQUtyRDtJQUNJLDRCQUF3QyxFQUFjLEVBQThDLEtBQXFCO1FBRDdILGlCQVFDO1FBUDJDLE9BQUUsR0FBRixFQUFFLENBQVk7UUFBOEMsVUFBSyxHQUFMLEtBQUssQ0FBZ0I7UUFDckgsRUFBRSxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDO1lBQ1QsSUFBSSxDQUFDLEtBQUssQ0FBQyxNQUFNLENBQUMsU0FBUyxDQUFDO2dCQUN4QixLQUFJLENBQUMsRUFBRSxDQUFDLGFBQWEsQ0FBQyxLQUFLLEVBQUUsQ0FBQztZQUNsQyxDQUFDLENBQUMsQ0FBQztRQUNQLENBQUM7SUFDTCxDQUFDO0lBVkw7UUFBQyxnQkFBUyxDQUFDO1lBQ1AsUUFBUSxFQUFFLGFBQWE7U0FDMUIsQ0FBQzttQkFFZSxhQUFNLENBQUMsaUJBQVUsQ0FBQzttQkFBMEIsYUFBTSxDQUFDLHNCQUFjLENBQUM7bUJBQUUsZUFBUSxFQUFFOzswQkFGN0Y7SUFTRix5QkFBQztBQUFELENBQUMsQUFSRCxJQVFDO0FBUlksMEJBQWtCLHFCQVE5QixDQUFBIn0=

/***/ },
/* 47 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var actions_1 = __webpack_require__(48);
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
	        switch (value) {
	            case 1:
	            case true:
	            case "true":
	            case "1":
	            case "yes":
	            case "TRUE":
	            case "YES":
	                return true;
	            default:
	                return false;
	        }
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
	            extraData: ((data.extraData && data.extraData.service) ? data.extraData.service : null)
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
	            iconObjField: (data.treeView.iconObjField || null),
	            iconObjFieldMap: (data.treeView.iconObjFieldMap || {})
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
	        return {
	            label: data.label || '',
	            controls: {
	                expander: (data.controls && data.controls.expander),
	                resizable: (data.controls && data.controls.resizable),
	            },
	            extraData: ((data.extraData && data.extraData.template) ? data.extraData.template : null)
	        };
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
	     * Get data-box actions
	     * @param data
	     * @returns {Actions}
	     */
	    Helper.getDataBoxActions = function (data) {
	        var dataBoxActions = new actions_1.Actions();
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
/* 48 */
/***/ function(module, exports) {

	"use strict";
	/**
	 * Class provider for template actions
	 */
	var Actions = (function () {
	    function Actions() {
	        this.actions = {
	            edit: {
	                icon: 'fa-edit',
	                isEnabled: false
	            },
	            add: {
	                icon: 'fa-plus',
	                isEnabled: false
	            },
	            copy: {
	                icon: 'fa-copy',
	                isEnabled: false
	            },
	            'delete': {
	                icon: 'fa-trash-o',
	                isEnabled: false
	            },
	            search: {
	                icon: 'fa-search',
	                isEnabled: false
	            },
	            refresh: {
	                icon: 'fa-refresh',
	                isEnabled: true
	            },
	            detail: {
	                icon: 'fa-eye',
	                isEnabled: false
	            },
	            collapse: {
	                isEnabled: false
	            },
	            deleteAll: {
	                icon: 'fa-trash-o',
	                isEnabled: false
	            },
	            checkAll: {
	                icon: 'fa-check-square-o',
	                isEnabled: false
	            }
	        };
	    }
	    /**
	     * Set action
	     * @param action
	     * @param value
	     * @returns {DataBoxActions}
	     */
	    Actions.prototype.setAction = function (action, value) {
	        // If already exists replace it, else add a new entry
	        this.actions[action] = value;
	        return this;
	    };
	    /**
	     * Get action
	     * @param action
	     * @returns {any}
	     */
	    Actions.prototype.getAction = function (action) {
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
	    Actions.prototype.setActionAttr = function (action, attribute, value) {
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
	    Actions.prototype.getActionAttr = function (action, attribute) {
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
	    Actions.prototype.getActions = function () {
	        return this.actions;
	    };
	    return Actions;
	}());
	exports.Actions = Actions;


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
	var core_1 = __webpack_require__(3);
	var flash_message_service_1 = __webpack_require__(25);
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
	        else if (postResponse.status == 0) {
	            output.response = (postResponse.errors || null);
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
/* 50 */
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
	var dynamic_loader_service_1 = __webpack_require__(51);
	var modal_dialog_module_1 = __webpack_require__(52);
	var modal_popup_1 = __webpack_require__(54);
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
	    function ModalService(_dynamicLoaderService) {
	        this._dynamicLoaderService = _dynamicLoaderService;
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
	     * @param module
	     * @param component (component name, needs to extend ModalPopup)
	     * @param injector
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
	     *             errors => { console.log(errors); }
	     *         );
	     *     },
	     *     errors => { console.log(errors); }
	     * );
	     */
	    ModalService.prototype.popup = function (module, component, injector, size) {
	        if (injector === void 0) { injector = null; }
	        if (size === void 0) { size = exports.AlertSizes.lg; }
	        size = this.normalizeAlertSize(size);
	        var that = this;
	        return new Promise(function (resolve, reject) {
	            that._dynamicLoaderService.load(module, component, that.viewContainerRef, injector).then(function (componentRef) {
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
	            that.popup(modal_dialog_module_1.ModalDialogModule, 'ModalDialogComponent', null, size).then(function (data) {
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
	        __metadata('design:paramtypes', [dynamic_loader_service_1.DynamicLoaderService])
	    ], ModalService);
	    return ModalService;
	}());
	exports.ModalService = ModalService;


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
	var core_1 = __webpack_require__(3);
	// Service
	var DynamicLoaderService = (function () {
	    function DynamicLoaderService(_compiler) {
	        this._compiler = _compiler;
	    }
	    /**
	     * Load
	     *
	     * Handling with return:
	     * DynamicLoaderService.load([parameters]).then(
	     *     componentRef => {
	     *         componentRef.instance....
	     *     },
	     *     errors => { console.log(errors); }
	     * );
	     *
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
	    DynamicLoaderService.prototype.load = function (module, component, viewContainerRef, injector) {
	        if (injector === void 0) { injector = null; }
	        var that = this;
	        return new Promise(function (resolve, reject) {
	            that._compiler.compileModuleAndAllComponentsAsync(module).then(function (moduleFactory) {
	                var compFactory = moduleFactory.componentFactories.find(function (tmpCompFactory) { return tmpCompFactory.componentType['name'] === component; });
	                var componentRef = viewContainerRef.createComponent(compFactory, 0, injector, []);
	                return resolve(componentRef);
	            });
	        });
	    };
	    DynamicLoaderService = __decorate([
	        core_1.Injectable(), 
	        __metadata('design:paramtypes', [core_1.Compiler])
	    ], DynamicLoaderService);
	    return DynamicLoaderService;
	}());
	exports.DynamicLoaderService = DynamicLoaderService;


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
	var common_1 = __webpack_require__(23);
	var ng2_bs3_modal_1 = __webpack_require__(35);
	var modal_dialog_component_1 = __webpack_require__(53);
	var ModalDialogModule = (function () {
	    function ModalDialogModule() {
	    }
	    ModalDialogModule = __decorate([
	        core_1.NgModule({
	            imports: [common_1.CommonModule, ng2_bs3_modal_1.Ng2Bs3ModalModule],
	            declarations: [modal_dialog_component_1.ModalDialogComponent],
	            exports: [modal_dialog_component_1.ModalDialogComponent]
	        }), 
	        __metadata('design:paramtypes', [])
	    ], ModalDialogModule);
	    return ModalDialogModule;
	}());
	exports.ModalDialogModule = ModalDialogModule;


/***/ },
/* 53 */
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
	var modal_popup_1 = __webpack_require__(54);
	var ModalDialogComponent = (function (_super) {
	    __extends(ModalDialogComponent, _super);
	    function ModalDialogComponent(elementRef, renderer) {
	        _super.call(this, elementRef, renderer, null);
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
	            template: "<modal #popup [animation]=\"false\" [backdrop]=\"'static'\" (onDismiss)=\"close(null, false)\">\n        <div class=\"modal-header\">\n            <h3 class=\"modal-title\">{{title}}</h3>\n        </div>\n        <div class=\"modal-body\">{{body}}</div>\n        <div class=\"modal-footer\">\n            <button *ngIf=\"isDialog\" class=\"btn btn-default\" (click)=\"close($event, false)\">Cancel</button>\n            <button class=\"btn btn-primary\" (click)=\"close($event, true)\">Ok</button>\n        </div>\n    </modal>\n    "
	        }), 
	        __metadata('design:paramtypes', [core_1.ElementRef, core_1.Renderer])
	    ], ModalDialogComponent);
	    return ModalDialogComponent;
	}(modal_popup_1.ModalPopup));
	exports.ModalDialogComponent = ModalDialogComponent;


/***/ },
/* 54 */
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
	var ng2_bs3_modal_1 = __webpack_require__(35);
	var base_component_1 = __webpack_require__(55);
	/**
	 * ModalPopup
	 * Base class for custom popups.
	 * All popups should extend this class.
	 */
	var ModalPopup = (function (_super) {
	    __extends(ModalPopup, _super);
	    function ModalPopup(elementRef, renderer, 
	        // This provider can becomes any provider defined by your child
	        // (don't need the "inject" because it's a static class, so will be provider by children components)
	        provider) {
	        _super.call(this, elementRef, renderer, provider);
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
	}(base_component_1.BaseComponent));
	exports.ModalPopup = ModalPopup;


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
	// Re-exports
	/**
	 * Used only as base component to be extended for others components
	 */
	// Component
	var BaseComponent = (function () {
	    function BaseComponent(_elementRef, _renderer, 
	        // This provider can becomes any provider defined by your child
	        // (don't need the "inject" because it's a static class, so will be provider by children components)
	        _provider) {
	        this._elementRef = _elementRef;
	        this._renderer = _renderer;
	        this._provider = _provider;
	        // Set defaults
	        if (!this._provider) {
	            this._provider = [];
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
	        core_1.Component({
	            selector: '.js_base',
	            template: ''
	        }), 
	        __metadata('design:paramtypes', [core_1.ElementRef, core_1.Renderer, Object])
	    ], BaseComponent);
	    return BaseComponent;
	}());
	exports.BaseComponent = BaseComponent;


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
	var dynamic_loader_service_1 = __webpack_require__(51);
	var post_service_1 = __webpack_require__(49);
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
	    function NavManagerService(_helperService, _injector, _dynamicLoaderService, _postService) {
	        this._helperService = _helperService;
	        this._injector = _injector;
	        this._dynamicLoaderService = _dynamicLoaderService;
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
	     */
	    NavManagerService.prototype.init = function (component, lazyLoadViewContainerRefQL) {
	        if (lazyLoadViewContainerRefQL === void 0) { lazyLoadViewContainerRefQL = null; }
	        // Local variables
	        this._component = component;
	        if (lazyLoadViewContainerRefQL) {
	            // Get array of ViewContainerRef for lazy loader containers
	            this._llViewContainerRefArr = lazyLoadViewContainerRefQL.toArray();
	        }
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
	        return this._llComponentRefArr[(index || this._currentIndex)];
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
	     * Navigate to container
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
	                }, function (errors) { console.log(errors); return reject(false); });
	            }
	            return that.loadNav(index).then(function (data) { return resolve(true); }, function (errors) { console.log(errors); return reject(false); });
	        });
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
	        return this._dynamicLoaderService.load(lazyLoadData.module, lazyLoadData.component, viewContainerRef, injector).then(function (componentRef) {
	            that._llComponentRefArr[index] = componentRef;
	            that._currentIndex = index;
	            return true;
	        }, function (errors) { console.log(errors); return null; });
	    };
	    NavManagerService = __decorate([
	        core_1.Injectable(),
	        __param(0, core_1.Inject('HelperService')), 
	        __metadata('design:paramtypes', [Object, core_1.Injector, dynamic_loader_service_1.DynamicLoaderService, post_service_1.PostService])
	    ], NavManagerService);
	    return NavManagerService;
	}());
	exports.NavManagerService = NavManagerService;


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
	var __param = (this && this.__param) || function (paramIndex, decorator) {
	    return function (target, key) { decorator(target, key, paramIndex); }
	};
	var core_1 = __webpack_require__(3);
	var data_service_1 = __webpack_require__(58);
	var helper_1 = __webpack_require__(47);
	var modal_service_1 = __webpack_require__(50);
	var nav_manager_service_1 = __webpack_require__(56);
	var base_component_1 = __webpack_require__(55);
	/* Import dependencies */
	// Save last templateUrl
	var tmpTemplateUrl = helper_1.Helper.getRuntimeVar('templateUrl');
	// Parent id of dependencies
	var parentId = (helper_1.Helper.getGlobalVar('local')['object']['entityObj'] // For entities bases on "Entity"
	    || helper_1.Helper.getGlobalVar('local')['object']['id'] // For raw "Entity"
	);
	// Contacts
	helper_1.Helper.setRuntimeVar('templateUrl', helper_1.Helper.getGlobalVar('route') + 'entities/entity/contacts');
	var contacts_module_1 = __webpack_require__(59);
	// EntityNote
	helper_1.Helper.setRuntimeVar('templateUrl', helper_1.Helper.getGlobalVar('route') + 'entities/entity-note/edit/' + parentId);
	var note_module_1 = __webpack_require__(84);
	var entity_note_popup_module_1 = __webpack_require__(86);
	// EntityEntityGroup
	helper_1.Helper.setRuntimeVar('templateUrl', helper_1.Helper.getGlobalVar('route') + 'entities/entity-entity-group/edit/' + parentId);
	var tree_view_form_module_1 = __webpack_require__(88);
	// EntityFile
	helper_1.Helper.setRuntimeVar('templateUrl', helper_1.Helper.getGlobalVar('route') + 'entities/entity-file/edit/' + parentId);
	var file_module_1 = __webpack_require__(92);
	var entity_file_popup_module_1 = __webpack_require__(94);
	// EntityImage
	var image_slide_module_1 = __webpack_require__(98);
	helper_1.Helper.setRuntimeVar('templateUrl', helper_1.Helper.getGlobalVar('route') + 'entities/entity-image/edit/' + parentId);
	var entity_image_popup_module_1 = __webpack_require__(105);
	// EntityVideo
	helper_1.Helper.setRuntimeVar('templateUrl', helper_1.Helper.getGlobalVar('route') + 'entities/entity-video/add/' + parentId);
	var video_module_1 = __webpack_require__(107);
	var entity_video_popup_module_1 = __webpack_require__(111);
	var wizard_manager_service_1 = __webpack_require__(113);
	// Restore last templateUrl
	helper_1.Helper.setRuntimeVar('templateUrl', tmpTemplateUrl);
	/* /Import dependencies */
	var MainComponent = (function (_super) {
	    __extends(MainComponent, _super);
	    function MainComponent(elementRef, renderer, _modalService, _navManagerService, viewContainerRef, _helperService) {
	        _super.call(this, elementRef, renderer, { extraData: { 'class': 'col-sm-12' } });
	        this._modalService = _modalService;
	        this._navManagerService = _navManagerService;
	        this._helperService = _helperService;
	        // @TODO retrive this from controller like wizard and accordion
	        this._tabs = ['Contacts', 'Notes', 'Groups', 'Files', 'Gallery', 'Videos'];
	        this._modalService.init(viewContainerRef);
	        this._dependenciesData = this._helperService.getGlobalVar('dependency');
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
	                    module: contacts_module_1.ContactsModule,
	                    component: 'ContactsComponent'
	                };
	            case 1:
	                return {
	                    module: note_module_1.NoteModule,
	                    component: 'NoteComponent',
	                    dataProvider: this._dependenciesData['entityNote']['local']
	                };
	            case 2:
	                return {
	                    module: tree_view_form_module_1.TreeViewFormModule,
	                    component: 'TreeViewFormComponent',
	                    dataProvider: this._dependenciesData['entityEntityGroup']['local']
	                };
	            case 3:
	                return {
	                    module: file_module_1.FileModule,
	                    component: 'FileComponent',
	                    dataProvider: this._dependenciesData['entityFile']['local']
	                };
	            case 4:
	                return {
	                    module: image_slide_module_1.ImageSlideModule,
	                    component: 'ImageSlideComponent',
	                    dataProvider: this._dependenciesData['entityImage']['local']
	                };
	            case 5:
	                return {
	                    module: video_module_1.VideoModule,
	                    component: 'VideoComponent',
	                    dataProvider: this._dependenciesData['entityVideo']['local']
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
	        var providers = [];
	        switch (index) {
	            case 0:
	                return [
	                    nav_manager_service_1.NavManagerService
	                ];
	            case 1:
	                providers = [
	                    { provide: 'Provider', useValue: this._helperService.getDataBoxProvider(data) },
	                    { provide: 'Popups', useValue: {
	                            module: entity_note_popup_module_1.EntityNotePopupModule,
	                            component: 'EntityNotePopupComponent',
	                            providers: [{ provide: 'Provider', useValue: this._helperService.getFormProvider(data) }]
	                        } }
	                ];
	                break;
	            case 2:
	                providers = [
	                    { provide: 'Provider', useValue: helper_1.Helper.getTreeViewProvider(data) },
	                    { provide: 'Popups', useValue: null }
	                ];
	                break;
	            case 3:
	                providers = [
	                    { provide: 'Provider', useValue: this._helperService.getDataBoxProvider(data) },
	                    { provide: 'FileUploadProvider', useValue: {
	                            label: data['label'],
	                            url: data['route']['edit']['url']
	                        } },
	                    { provide: 'Popups', useValue: {
	                            module: entity_file_popup_module_1.EntityFilePopupModule,
	                            component: 'EntityFilePopupComponent',
	                            providers: [{ provide: 'Provider', useValue: this._helperService.getFormProvider(data) }]
	                        } }
	                ];
	                break;
	            case 4:
	                providers = [
	                    { provide: 'Provider', useValue: this._helperService.getDataBoxProvider(data) },
	                    { provide: 'FileUploadProvider', useValue: {
	                            label: data['label'],
	                            url: data['route']['edit']['url']
	                        } },
	                    { provide: 'Popups', useValue: {
	                            module: entity_image_popup_module_1.EntityImagePopupModule,
	                            component: 'EntityImagePopupComponent',
	                            providers: [{ provide: 'Provider', useValue: this._helperService.getFormProvider(data) }]
	                        } }
	                ];
	                break;
	            case 5:
	                providers = [
	                    { provide: 'Provider', useValue: this._helperService.getDataBoxProvider(data) },
	                    { provide: 'FileUploadProvider', useValue: {
	                            label: data['label'],
	                            url: data['route']['add']['url']
	                        } },
	                    { provide: 'Popups', useValue: {
	                            module: entity_video_popup_module_1.EntityVideoPopupModule,
	                            component: 'EntityVideoPopupComponent',
	                            providers: [
	                                data_service_1.DataService,
	                                nav_manager_service_1.NavManagerService,
	                                wizard_manager_service_1.WizardManagerService,
	                                { provide: 'Provider', useValue: this._helperService.getWizardPopupProvider(data) }
	                            ]
	                        } }
	                ];
	                break;
	        }
	        providers = providers.concat([
	            data_service_1.DataService,
	            { provide: 'DataServiceProvider', useValue: this._helperService.getDataServiceProvider(data) },
	            { provide: 'DataBoxActions', useValue: this._helperService.getDataBoxActions(data) }
	        ]);
	        return providers;
	    };
	    /**
	     * Lifecycle callback
	     */
	    MainComponent.prototype.ngAfterViewInit = function () {
	        // Initializes the children navigation manager service
	        this._navManagerService.init(this, this.lazyLoadViewContainerRefQL);
	        // Open the first tab
	        this._navManagerService.navTo(0);
	    };
	    __decorate([
	        core_1.ViewChildren('js_lazyLoadContainer', { read: core_1.ViewContainerRef }), 
	        __metadata('design:type', core_1.QueryList)
	    ], MainComponent.prototype, "lazyLoadViewContainerRefQL", void 0);
	    MainComponent = __decorate([
	        core_1.Component({
	            selector: '#js_main',
	            template: "\n    <div class=\"row m-b-md animated fadeInRight\">\n        <div class=\"col-lg-12 m-b-xs\">\n            <div class=\"tabs-container\">\n                <ul class=\"nav nav-tabs\">\n                    <li *ngFor=\"let tab of _tabs; let index = index\"\n                        (click)=\"_navManagerService.navTo(index)\"\n                        [class.active]=\"index == 0\"><a [attr.data-index]=\"index\" data-toggle=\"tab\" href=\"#tab{{index}}\">{{tab}}</a></li>\n                </ul>\n                <div class=\"tab-content\">\n                    <div *ngFor=\"let tab of _tabs; let index = index\"\n                         id=\"tab{{index}}\"\n                         class=\"tab-pane js_lazyLoadContainer_{{index}}\"\n                         [class.active]=\"index == 0\">\n                        <template #js_lazyLoadContainer></template>\n                    </div>\n                </div>\n            </div>\n        </div>\n    </div>\n    "
	        }),
	        __param(5, core_1.Inject('HelperService')), 
	        __metadata('design:paramtypes', [core_1.ElementRef, core_1.Renderer, modal_service_1.ModalService, nav_manager_service_1.NavManagerService, core_1.ViewContainerRef, Object])
	    ], MainComponent);
	    return MainComponent;
	}(base_component_1.BaseComponent));
	exports.MainComponent = MainComponent;


/***/ },
/* 58 */
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
	var post_service_1 = __webpack_require__(49);
	// Service
	var DataService = (function () {
	    function DataService(_dataServiceProvider, _postService, _helperService) {
	        this._dataServiceProvider = _dataServiceProvider;
	        this._postService = _postService;
	        this._helperService = _helperService;
	        this._selectedObjectEmitter = new core_1.EventEmitter();
	        this._onObjectsChangeEmitter = new core_1.EventEmitter();
	        this.convertObjectsToTemplate(this._dataServiceProvider['objects'], this._dataServiceProvider['fields']);
	        this.newObject();
	        this._candidateSearch = this._helperService.cloneObject(this._dataServiceProvider['search'], true);
	    }
	    /**
	     * Select object
	     * @param object
	     * @returns {Promise}
	     *
	     * Handle response:
	     * this._dataService.selectObject(object).then(data => {
	     *     // Success
	     * }, error => {
	     *     // Fail
	     * });
	     */
	    DataService.prototype.selectObject = function (object) {
	        var that = this;
	        return new Promise(function (resolve, reject) {
	            // Set only if object is different
	            if (that._selectedObject !== object) {
	                that._postService.post(that._dataServiceProvider.route['get']['url'] + '/' + object.id, that.getRequestData()).then(function (data) {
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
	    DataService.prototype.getSelectedObject = function (isTemplateFormat) {
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
	    DataService.prototype.getParentObject = function () {
	        return this._dataServiceProvider.object;
	    };
	    /**
	     * Set object
	     * @param object
	     * @returns {DataService}
	     */
	    DataService.prototype.setObject = function (object) {
	        this.setWorkObject(object);
	        this._selectedObject = null;
	        return this;
	    };
	    /**
	     * Set work object
	     * @param object
	     * @returns {DataService}
	     */
	    DataService.prototype.setWorkObject = function (object) {
	        this._workObject = object;
	        this._selectedObjectEmitter.emit(this._workObject);
	        return this;
	    };
	    /**
	     * Get selected object emitter to tell all subscribers about changes
	     * @returns {EventEmitter<any>}
	     */
	    DataService.prototype.getSelectedObjectEmitter = function () {
	        return this._selectedObjectEmitter;
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
	        if (route in this._dataServiceProvider.route) {
	            return this._dataServiceProvider.route[route]['url'];
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
	        if (route in this._dataServiceProvider.route) {
	            this._dataServiceProvider.route[route]['url'] = url;
	        }
	        return this;
	    };
	    /**
	     * Set search fields
	     * @param searchFields
	     * @returns {DataService}
	     */
	    DataService.prototype.setSearchFields = function (searchFields) {
	        this._dataServiceProvider.search.fields = searchFields;
	        return this;
	    };
	    /**
	     * Get search fields
	     * @returns {any}
	     */
	    DataService.prototype.getSearchFields = function () {
	        return this._dataServiceProvider.search.fields;
	    };
	    /**
	     * Set objects
	     * @param objects
	     * @param isMerge (if true merge objects, otherwise replace them)
	     * @returns {DataService}
	     */
	    DataService.prototype.setObjects = function (objects, isMerge) {
	        if (isMerge === void 0) { isMerge = false; }
	        this.convertObjectsToTemplate(objects, this._dataServiceProvider['fields']);
	        // Merge objects
	        if (isMerge) {
	            this._dataServiceProvider.objects = this._dataServiceProvider.objects.concat(objects);
	        }
	        else {
	            this._dataServiceProvider.objects = objects;
	            this._dataServiceProvider.search['offset'] = 0;
	            this._onObjectsChangeEmitter.emit(objects);
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
	        if (key in this._dataServiceProvider.fieldsChoices[field]['value']) {
	            return this._dataServiceProvider.fieldsChoices[field]['value'][key];
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
	        if (attribute in this._dataServiceProvider.fieldsChoices[field]) {
	            return this._dataServiceProvider.fieldsChoices[field][attribute];
	        }
	        return null;
	    };
	    /**
	     * Get field choices
	     * @param field
	     * @returns {*|null}
	     */
	    DataService.prototype.getFieldChoices = function (field) {
	        return this._dataServiceProvider.fieldsChoices[field]['value'] || null;
	    };
	    /**
	     * Set fields choices.
	     * @param fieldsChoices
	     * @returns {DataService}
	     */
	    DataService.prototype.setFieldsChoices = function (fieldsChoices) {
	        this._dataServiceProvider.fieldsChoices = fieldsChoices;
	        return this;
	    };
	    /**
	     * Merge provider attribute
	     * @param attribute
	     * @param value
	     * @returns {DataService}
	     */
	    DataService.prototype.mergeProviderAttr = function (attribute, value) {
	        if (attribute in this._dataServiceProvider) {
	            this._dataServiceProvider[attribute] =
	                this._helperService.mergeObjects(this._dataServiceProvider[attribute], value);
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
	        if (attribute in this._dataServiceProvider) {
	            this._dataServiceProvider[attribute] = value;
	        }
	        return this;
	    };
	    /**
	     * Get provider attribute
	     * @param attribute
	     * @returns {any|null}
	     */
	    DataService.prototype.getProviderAttr = function (attribute) {
	        return this._dataServiceProvider[attribute] || null;
	    };
	    /**
	     * Get provider extra data attribute
	     * @param attribute
	     * @returns {any|null}
	     */
	    DataService.prototype.getProviderExtraDataAttr = function (attribute) {
	        return ((this._dataServiceProvider['extraData'] && this._dataServiceProvider['extraData'][attribute])
	            ? this._dataServiceProvider['extraData'][attribute]
	            : null);
	    };
	    /**
	     * Get candidate search
	     * @returns any
	     */
	    DataService.prototype.getCandidateSearch = function () {
	        return this._candidateSearch || null;
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
	                this._dataServiceProvider.extraData.fields[field] = null;
	            }
	        }
	        return this;
	    };
	    /**
	     * Convert objects to show in template
	     * @param objects
	     * @param fields
	     * @returns {DataService}
	     */
	    DataService.prototype.convertObjectsToTemplate = function (objects, fields) {
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
	                // For "enum" type (key is the label, pattern of Symfony ChoiceType)
	                if (this._dataServiceProvider.fieldsChoices[key]
	                    && this._dataServiceProvider.fieldsChoices[key]['value']) {
	                    var enumObj = this._dataServiceProvider.fieldsChoices[key]['value'];
	                    for (var _b = 0, objects_3 = objects; _b < objects_3.length; _b++) {
	                        var obj = objects_3[_b];
	                        for (var enumKey in enumObj) {
	                            if (enumObj[enumKey] == obj[key]) {
	                                obj['_rendered_' + key] = enumKey;
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
	     * @param value
	     * @returns {string}
	     */
	    DataService.prototype.renderField = function (field, value) {
	        // Get field metadata
	        field = this._dataServiceProvider.fields[field] || null;
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
	     * this._dataService.newObject(object).then(function(data) {
	     *     // Success
	     * }, function(data) {
	     *     // Fail
	     * });
	     */
	    DataService.prototype.newObject = function (object) {
	        if (object === void 0) { object = null; }
	        var that = this;
	        return new Promise(function (resolve, reject) {
	            var obj = {};
	            if (object) {
	                that._postService.post(that._dataServiceProvider.route['get']['url'] + '/' + object.id, that.getRequestData()).then(function (data) {
	                    data.object = data.object || null;
	                    for (var key in that._dataServiceProvider.fields) {
	                        obj[key] = ((that._dataServiceProvider.fields[key]['acl'] && (that._dataServiceProvider.fields[key]['acl'] === 'read'))
	                            ? null
	                            : data.object[key] || null);
	                    }
	                    that.setWorkObject(obj);
	                    that._selectedObject = null;
	                    that.resetExtraFields();
	                    resolve(true);
	                }, function (errors) {
	                    console.log(errors);
	                    reject(false);
	                });
	            }
	            else {
	                for (var key in that._dataServiceProvider.fields) {
	                    obj[key] = null;
	                }
	                that.setWorkObject(obj);
	                that._selectedObject = null;
	                that.resetExtraFields();
	                resolve(true);
	            }
	        });
	    };
	    /**
	     * Save object.
	     * @param data
	     * @param id
	     * @param route (specific route to save)
	     * @returns {Promise}
	     *
	     * Handle response:
	     * this._dataService.save(data).then(
	     *     data => {
	     *         // Handle object
	     *     },
	     *     errors => {
	     *         // Handle errors
	     *     }
	     * );
	     */
	    DataService.prototype.save = function (data, id, route) {
	        if (id === void 0) { id = null; }
	        if (route === void 0) { route = null; }
	        var that = this;
	        this.resetPagination();
	        return new Promise(function (resolve, reject) {
	            // Set route
	            if (!route) {
	                route = (id
	                    ? (that._dataServiceProvider.route['edit']['url'] + (id ? ('/' + id) : ''))
	                    : (that._dataServiceProvider.route['add']
	                        ? that._dataServiceProvider.route['add']['url']
	                        : that._dataServiceProvider.route['edit']['url']));
	            }
	            that.post(route, that.getRequestData(data)).then(function (data) {
	                if (typeof data != 'undefined') {
	                    if (typeof data.objects != 'undefined') {
	                        that.setObjects(data.objects);
	                    }
	                    if (typeof data.fieldsChoices != 'undefined') {
	                        that.setFieldsChoices(data.fieldsChoices);
	                    }
	                    return resolve(data.object || null);
	                }
	                else {
	                    console.log(data);
	                    return reject(data);
	                }
	            }, function (errors) { console.log(errors); return reject(errors); });
	        });
	    };
	    /**
	     * Search objects
	     * @returns {DataService}
	     */
	    DataService.prototype.search = function () {
	        // Only search if parameters have changed
	        if (this._helperService.isEqualObject(this._dataServiceProvider['search'], this._candidateSearch)) {
	            return this;
	        }
	        // Update search
	        this._dataServiceProvider['search'] = this._helperService.cloneObject(this._candidateSearch, true);
	        // Refresh objects
	        return this.refresh();
	    };
	    /**
	     * Refresh list of objects
	     * @returns {DataService}
	     */
	    DataService.prototype.refresh = function () {
	        var that = this;
	        this.resetPagination();
	        this.post(this._dataServiceProvider.route['get']['url'], this.getRequestData()).then(function (data) {
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
	        this._dataServiceProvider.search['offset']++;
	        this.post(this._dataServiceProvider.route['get']['url'], this.getRequestData()).then(function (data) {
	            // Update list of objects
	            that.setObjects(data.objects || [], true);
	        }, function (errors) { console.log(errors); });
	        return this;
	    };
	    /**
	     * Delete object.
	     * @param object
	     * @returns {DataService}
	     */
	    DataService.prototype.delete = function (object) {
	        var that = this;
	        this.resetPagination();
	        this.post(this._dataServiceProvider.route['delete']['url'] + '/' + object.id, that.getRequestData()).then(function (data) {
	            // Update list of objects
	            that.setObjects(data.objects || null);
	            that.setFieldsChoices(data.fieldsChoices || null);
	        }, function (errors) { console.log(errors); });
	        return this;
	    };
	    /**
	     * Delete objects from array of ids.
	     * @param objects
	     * @returns {DataService}
	     */
	    DataService.prototype.deleteArray = function (data) {
	        var that = this;
	        this.resetPagination();
	        this.post(this._dataServiceProvider.route['delete']['url'], this.getRequestData(data)).then(function (data) {
	            // Update list of objects
	            that.setObjects(data.objects || null);
	            that.setFieldsChoices(data.fieldsChoices || null);
	        }, function (errors) { console.log(errors); });
	        return this;
	    };
	    /**
	     * Detail object.
	     * @param object
	     * @returns {DataService}
	     */
	    DataService.prototype.detail = function (object) {
	        /*window.open(
	            this._dataServiceProvider.route['detail']['url'] + '/' + object.id,
	            "_self"
	        );*/
	        location.href = (this._dataServiceProvider.route['detail']['url'] + '/' + object.id);
	        return this;
	    };
	    /**
	     * Post to server.
	     * @param url
	     * @param data
	     * @returns any
	     */
	    DataService.prototype.post = function (url, data) {
	        if (data === void 0) { data = null; }
	        var that = this;
	        return this._postService.post(url, data).then(function (data) {
	            // Update search
	            if (data['search'] && (typeof data['search']['hasMore'] != 'undefined')) {
	                that._candidateSearch.hasMore = that._dataServiceProvider.search.hasMore
	                    = that._helperService.castToBoolean(data['search']['hasMore']);
	            }
	            return data;
	        }, function (errors) { console.log(errors); return errors; });
	    };
	    /**
	     * Get data to request
	     * @param data
	     * @returns {any}
	     */
	    DataService.prototype.getRequestData = function (data) {
	        if (data === void 0) { data = null; }
	        if (!data) {
	            return {
	                csrfToken: this._helperService.getGlobalVar('csrfToken'),
	                search: this._dataServiceProvider['search']
	            };
	        }
	        // If data is provided it's assume that is a serialized form
	        return (data + '&search=' + JSON.stringify(this._dataServiceProvider['search']));
	    };
	    /**
	     * Reset pagination
	     * @returns {DataService}
	     */
	    DataService.prototype.resetPagination = function () {
	        this._dataServiceProvider.search.offset = 0;
	        return this;
	    };
	    DataService = __decorate([
	        core_1.Injectable(),
	        __param(0, core_1.Inject('DataServiceProvider')),
	        __param(2, core_1.Inject('HelperService')), 
	        __metadata('design:paramtypes', [Object, post_service_1.PostService, Object])
	    ], DataService);
	    return DataService;
	}());
	exports.DataService = DataService;


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
	var __metadata = (this && this.__metadata) || function (k, v) {
	    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
	};
	var core_1 = __webpack_require__(3);
	var common_1 = __webpack_require__(23);
	var forms_1 = __webpack_require__(31);
	var ng2_bs3_modal_1 = __webpack_require__(35);
	var search_module_1 = __webpack_require__(60);
	var contacts_component_1 = __webpack_require__(67);
	var ContactsModule = (function () {
	    function ContactsModule() {
	    }
	    ContactsModule = __decorate([
	        core_1.NgModule({
	            imports: [common_1.CommonModule, forms_1.FormsModule, forms_1.ReactiveFormsModule, ng2_bs3_modal_1.Ng2Bs3ModalModule, search_module_1.SearchModule],
	            declarations: [
	                contacts_component_1.ContactsComponent
	            ],
	            exports: [contacts_component_1.ContactsComponent]
	        }), 
	        __metadata('design:paramtypes', [])
	    ], ContactsModule);
	    return ContactsModule;
	}());
	exports.ContactsModule = ContactsModule;


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
	var common_1 = __webpack_require__(23);
	var forms_1 = __webpack_require__(31);
	var expander_module_1 = __webpack_require__(61);
	var search_fields_component_1 = __webpack_require__(63);
	var search_order_by_component_1 = __webpack_require__(64);
	var search_criteria_component_1 = __webpack_require__(65);
	var search_component_1 = __webpack_require__(66);
	var SearchModule = (function () {
	    function SearchModule() {
	    }
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
	        }), 
	        __metadata('design:paramtypes', [])
	    ], SearchModule);
	    return SearchModule;
	}());
	exports.SearchModule = SearchModule;


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
	var __metadata = (this && this.__metadata) || function (k, v) {
	    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
	};
	var core_1 = __webpack_require__(3);
	var common_1 = __webpack_require__(23);
	var expander_component_1 = __webpack_require__(62);
	var ExpanderModule = (function () {
	    function ExpanderModule() {
	    }
	    ExpanderModule = __decorate([
	        core_1.NgModule({
	            imports: [common_1.CommonModule],
	            declarations: [expander_component_1.ExpanderComponent],
	            exports: [expander_component_1.ExpanderComponent]
	        }), 
	        __metadata('design:paramtypes', [])
	    ], ExpanderModule);
	    return ExpanderModule;
	}());
	exports.ExpanderModule = ExpanderModule;


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
	var core_1 = __webpack_require__(3);
	// Component
	var ExpanderComponent = (function () {
	    function ExpanderComponent() {
	        this.hasIcon = true;
	        this.customClass = ''; // class is a reserved word
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
	        core_1.Input(), 
	        __metadata('design:type', Boolean)
	    ], ExpanderComponent.prototype, "hasIcon", void 0);
	    __decorate([
	        core_1.Input(), 
	        __metadata('design:type', String)
	    ], ExpanderComponent.prototype, "customClass", void 0);
	    __decorate([
	        // class is a reserved word
	        core_1.Output(), 
	        __metadata('design:type', Object)
	    ], ExpanderComponent.prototype, "onChange", void 0);
	    ExpanderComponent = __decorate([
	        core_1.Component({
	            selector: 'js_expander',
	            template: "\n    <a [ngClass]=\"['no-user-select', 'expander', customClass]\"\n       (click)=\"toggleExpanded($event)\">\n        <i *ngIf=\"hasIcon\" [ngClass]=\"['fa', (_isExpanded ? 'fa-angle-down' : 'fa-angle-right')]\"></i>\n        <span>{{label}}</span></a>\n    "
	        }), 
	        __metadata('design:paramtypes', [])
	    ], ExpanderComponent);
	    return ExpanderComponent;
	}());
	exports.ExpanderComponent = ExpanderComponent;


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
	var data_service_1 = __webpack_require__(58);
	// Component
	var SearchFieldsComponent = (function () {
	    function SearchFieldsComponent(_dataService, _elementRef, _helperService) {
	        this._dataService = _dataService;
	        this._elementRef = _elementRef;
	        this._helperService = _helperService;
	        // Denied types. Doesn't make sense to show this filed types.
	        this._deniedTypes = ['password'];
	        this._isExpanded = false;
	        this._search = this._dataService.getCandidateSearch();
	        this._fieldsArray =
	            this._helperService.objectsToArray(this._dataService.getProviderAttr('fields') || {});
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
	    SearchFieldsComponent = __decorate([
	        core_1.Component({
	            selector: 'js_searchFields',
	            template: "\n    <js_expander [label]=\"'Fields'\" [hasIcon]=\"false\" [customClass]=\"'action'\" (onChange)=\"toggleIsExpanded($event, 'fields')\"></js_expander>\n    <div [hidden]=\"!_isExpanded\" class=\"col-xs-12 col-sm-12 white-dropdown search-fields\">\n        <select multiple size=\"6\" [(ngModel)]=\"_search['fields']\" class=\"form-control\">\n            <template ngFor let-field [ngForOf]=\"_fieldsArray\">\n                <option *ngIf=\"!_helperService.inArray(field['value']['type'], _deniedTypes)\"\n                        value=\"{{field['key']}}\">{{field['value']['label']}}</option>\n            </template>\n        </select>\n    </div>\n    ",
	            host: {
	                '(document:click)': 'onDocumentClick($event)',
	            }
	        }),
	        __param(2, core_1.Inject('HelperService')), 
	        __metadata('design:paramtypes', [data_service_1.DataService, core_1.ElementRef, Object])
	    ], SearchFieldsComponent);
	    return SearchFieldsComponent;
	}());
	exports.SearchFieldsComponent = SearchFieldsComponent;


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
	var __metadata = (this && this.__metadata) || function (k, v) {
	    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
	};
	var __param = (this && this.__param) || function (paramIndex, decorator) {
	    return function (target, key) { decorator(target, key, paramIndex); }
	};
	var core_1 = __webpack_require__(3);
	var data_service_1 = __webpack_require__(58);
	// Component
	var SearchOrderByComponent = (function () {
	    function SearchOrderByComponent(_dataService, _elementRef, _helperService) {
	        this._dataService = _dataService;
	        this._elementRef = _elementRef;
	        this._helperService = _helperService;
	        // Denied types. Doesn't make sense to order by this filed types.
	        this._deniedTypes = ['file', 'icon', 'img', 'password'];
	        this._isExpanded = false;
	        this._orderByArray = this._dataService.getCandidateSearchAttr('orderBy');
	        this._fieldsArray =
	            this._helperService.objectsToArray(this._dataService.getProviderAttr('fields') || {});
	        if (this._orderByArray.length < 1) {
	            this.add();
	        }
	    }
	    /**
	     * Check if is a valid field
	     * @param field
	     * @returns {boolean}
	     */
	    SearchOrderByComponent.prototype.checkOrderByField = function (field) {
	        // Field can be null in case of new entry
	        return ((field in this._dataService.getProviderAttr('fields')) || !field);
	    };
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
	            field: (this._fieldsArray[0] ? this._fieldsArray[0]['key'] : null),
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
	    SearchOrderByComponent = __decorate([
	        core_1.Component({
	            selector: 'js_searchOrderBy',
	            template: "\n    <js_expander [label]=\"'Order'\" [hasIcon]=\"false\" [customClass]=\"'action'\" (onChange)=\"toggleIsExpanded($event, 'fields')\"></js_expander>\n    <div [hidden]=\"!_isExpanded\" class=\"col-xs-12 col-sm-12 white-dropdown search-order-by\">\n        <template ngFor let-orderBy [ngForOf]=\"_orderByArray\" let-i=\"index\">\n            <div *ngIf=\"checkOrderByField(orderBy['field'])\" class=\"col-sm-6 controller\">\n                <div class=\"select\">\n                    <select [(ngModel)]=\"orderBy['field']\" class=\"form-control\">\n                        <template ngFor let-field [ngForOf]=\"_fieldsArray\">\n                            <option *ngIf=\"!_helperService.inArray(field['value']['type'], _deniedTypes) && !field['value']['isObject']\"\n                                    value=\"{{field['key']}}\">{{field['value']['label']}}</option>\n                        </template>\n                    </select>\n                    <select [(ngModel)]=\"orderBy['value']\" class=\"form-control\">\n                        <option *ngFor=\"let value of [{key: 'ASC', label: 'Asc'}, {key: 'DESC', label: 'Desc'}]\"\n                                value=\"{{value['key']}}\">{{value['label']}}</option>\n                    </select>\n                </div>\n                <div class=\"actions\">\n                    <a *ngIf=\"_orderByArray.length > 1\" class=\"badge\" (click)=\"del($event, i)\"><i class=\"fa fa-trash-o\"></i></a>\n                    <a *ngIf=\"(i+1) == _orderByArray.length\" class=\"badge\" (click)=\"add($event)\"><i class=\"fa fa-plus\"></i></a>\n                </div>\n            </div>\n        </template>\n    </div>\n    ",
	            host: {
	                '(document:click)': 'onDocumentClick($event)',
	            }
	        }),
	        __param(2, core_1.Inject('HelperService')), 
	        __metadata('design:paramtypes', [data_service_1.DataService, core_1.ElementRef, Object])
	    ], SearchOrderByComponent);
	    return SearchOrderByComponent;
	}());
	exports.SearchOrderByComponent = SearchOrderByComponent;


/***/ },
/* 65 */
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
	var data_service_1 = __webpack_require__(58);
	/**
	 * Class provider for search criteria expressions and default values
	 */
	var SearchCriteriaMap = (function () {
	    function SearchCriteriaMap() {
	        // Expressions mapping. Use default if value is not mapped.
	        this._exprMap = {
	            'text': 'lrlike',
	            'default': 'eq',
	        };
	        // Default value mapping. Use default if value is not mapped.
	        this._defaultValueMap = {
	            'boolean': 1,
	            'default': '',
	        };
	    }
	    /**
	     * Get expression
	     * @param type
	     * @returns {any}
	     */
	    SearchCriteriaMap.prototype.getExpr = function (type) {
	        if (type === void 0) { type = null; }
	        return ((type && this._exprMap[type]) ? this._exprMap[type] : this._exprMap['default']);
	    };
	    /**
	     * Get default value
	     * @param type
	     * @returns {any}
	     */
	    SearchCriteriaMap.prototype.getDefaultValue = function (type) {
	        if (type === void 0) { type = null; }
	        return ((type && this._defaultValueMap[type]) ? this._defaultValueMap[type] : this._defaultValueMap['default']);
	    };
	    return SearchCriteriaMap;
	}());
	exports.SearchCriteriaMap = SearchCriteriaMap;
	// Component
	var SearchCriteriaComponent = (function () {
	    function SearchCriteriaComponent(_dataService, _elementRef, _helperService) {
	        this._dataService = _dataService;
	        this._elementRef = _elementRef;
	        this._helperService = _helperService;
	        // Denied types. Doesn't make sense to search for this filed types.
	        this._deniedTypes = ['file', 'icon', 'img', 'password'];
	        this._isExpanded = false;
	        this._criteriaArray = this._dataService.getCandidateSearchAttr('criteria');
	        this._fieldsObject = this._dataService.getProviderAttr('fields') || {};
	        this._fieldsArray = this._helperService.objectsToArray(this._fieldsObject);
	        this._searchCriteriaMap = new SearchCriteriaMap();
	        if (this._criteriaArray.length < 1) {
	            this.add();
	        }
	    }
	    /**
	     * Set default values
	     * @param criteria
	     * @param field (field to override criteria['field'], because select change event was not update it yet)
	     */
	    SearchCriteriaComponent.prototype.setDefaults = function (criteria, field) {
	        if (field === void 0) { field = null; }
	        field = field || criteria['field'];
	        if (field in this._fieldsObject) {
	            criteria['expr'] = this._searchCriteriaMap.getExpr(this._fieldsObject[field]['type']);
	            criteria['value'] = this._searchCriteriaMap.getDefaultValue(this._fieldsObject[field]['type']);
	        }
	    };
	    /**
	     * Check if is a valid field
	     * @param field
	     * @returns {boolean}
	     */
	    SearchCriteriaComponent.prototype.checkField = function (field) {
	        return ((field in this._dataService.getProviderAttr('fields'))
	            || !field // Field can be null in case of new entry
	        );
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
	            field: (this._fieldsArray[0] ? this._fieldsArray[0]['key'] : null),
	            expr: null,
	            value: null
	        };
	        this.setDefaults(criteria, null);
	        this._criteriaArray.push(criteria);
	    };
	    /**
	     * Delete criteria
	     * @param $event
	     * @param index
	     */
	    SearchCriteriaComponent.prototype.del = function ($event, index) {
	        $event.preventDefault();
	        $event.stopPropagation();
	        this._criteriaArray.splice(index, 1);
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
	    SearchCriteriaComponent = __decorate([
	        core_1.Component({
	            selector: 'js_searchCriteria',
	            template: "\n    <js_expander [label]=\"'Filter'\" [hasIcon]=\"false\" [customClass]=\"'action'\" (onChange)=\"toggleIsExpanded($event, 'fields')\"></js_expander>\n    <div [hidden]=\"!_isExpanded\" class=\"col-xs-12 col-sm-12 white-dropdown search-criteria\">\n        <template ngFor let-criteria [ngForOf]=\"_criteriaArray\" let-i=\"index\">\n            <div *ngIf=\"checkField(criteria['field'])\" class=\"col-sm-6 controller\">\n                <div class=\"select\">\n                    <select [(ngModel)]=\"criteria['field']\"\n                            (change)=\"onFieldChange($event, criteria)\"\n                            class=\"form-control\">\n                        <template ngFor let-field [ngForOf]=\"_fieldsArray\">\n                            <option *ngIf=\"!_helperService.inArray(field['value']['type'], _deniedTypes) && !field['value']['isObject']\"\n                                    value=\"{{field['key']}}\">{{field['value']['label']}}</option>\n                        </template>\n                    </select>\n                    <input [(ngModel)]=\"criteria['expr']\" type=\"hidden\">\n                    <!-- ng switch should be here -->\n                        <select *ngIf=\"(_fieldsObject[criteria['field']]) && (_fieldsObject[criteria['field']]['type'] == 'boolean')\"\n                                [(ngModel)]=\"criteria['value']\"\n                                class=\"form-control\">\n                            <option *ngFor=\"let value of [{key: 1, label: 'Yes'}, {key: 0, label: 'No'}]\"\n                                    value=\"{{value['key']}}\">{{value['label']}}</option>\n                        </select>\n                        <input *ngIf=\"(!_fieldsObject[criteria['field']]) || (_fieldsObject[criteria['field']]['type'] != 'boolean')\"\n                               [(ngModel)]=\"criteria['value']\"\n                               class=\"form-control\" type=\"text\">\n                </div>\n                <div class=\"actions\">\n                    <a *ngIf=\"_criteriaArray.length > 1\" class=\"badge\" (click)=\"del($event, i)\"><i class=\"fa fa-trash-o\"></i></a>\n                    <a *ngIf=\"(i+1) == _criteriaArray.length\" class=\"badge\" (click)=\"add($event)\"><i class=\"fa fa-plus\"></i></a>\n                </div>\n            </div>\n        </template>\n    </div>\n    ",
	            host: {
	                '(document:click)': 'onDocumentClick($event)',
	            }
	        }),
	        __param(2, core_1.Inject('HelperService')), 
	        __metadata('design:paramtypes', [data_service_1.DataService, core_1.ElementRef, Object])
	    ], SearchCriteriaComponent);
	    return SearchCriteriaComponent;
	}());
	exports.SearchCriteriaComponent = SearchCriteriaComponent;


/***/ },
/* 66 */
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
	var data_service_1 = __webpack_require__(58);
	var actions_1 = __webpack_require__(48);
	// Component
	var SearchComponent = (function () {
	    function SearchComponent(_dataService, _actions) {
	        this._dataService = _dataService;
	        this._actions = _actions;
	    }
	    /**
	     * Search objects.
	     * @param $event
	     */
	    SearchComponent.prototype.searchAction = function ($event) {
	        $event.preventDefault();
	        this._dataService.search();
	    };
	    SearchComponent = __decorate([
	        core_1.Component({
	            selector: 'js_search',
	            template: "\n    <js_searchCriteria></js_searchCriteria>\n    <js_searchOrderBy></js_searchOrderBy>\n    <js_searchFields></js_searchFields>\n    <a class=\"action badge\"\n       (click)=\"searchAction($event)\"><i [ngClass]=\"['fa', _actions.getActionAttr('search', 'icon')]\"></i></a>\n    "
	        }),
	        __param(1, core_1.Inject('DataBoxActions')), 
	        __metadata('design:paramtypes', [data_service_1.DataService, actions_1.Actions])
	    ], SearchComponent);
	    return SearchComponent;
	}());
	exports.SearchComponent = SearchComponent;


/***/ },
/* 67 */
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
	var helper_1 = __webpack_require__(47);
	var accordion_component_1 = __webpack_require__(68);
	var nav_manager_service_1 = __webpack_require__(56);
	var data_box_extension_module_1 = __webpack_require__(69);
	var data_service_1 = __webpack_require__(58);
	/* Import dependencies */
	// Save last templateUrl
	var tmpTemplateUrl = helper_1.Helper.getRuntimeVar('templateUrl');
	// Parent id of dependencies
	var parentId = helper_1.Helper.getGlobalVar('local')['object']
	    ? (helper_1.Helper.getGlobalVar('local')['object']['entityObj'] // For entities descendants of "Entity"
	        || helper_1.Helper.getGlobalVar('local')['object']['id']) // For raw "Entity"
	    : 0;
	// EntityAddress
	helper_1.Helper.setRuntimeVar('templateUrl', helper_1.Helper.getGlobalVar('route') + 'entities/entity-address/edit/' + parentId);
	var entity_address_popup_module_1 = __webpack_require__(74);
	// EntityPhone
	helper_1.Helper.setRuntimeVar('templateUrl', helper_1.Helper.getGlobalVar('route') + 'entities/entity-phone/edit/' + parentId);
	var entity_phone_popup_module_1 = __webpack_require__(78);
	// EntityEmail
	helper_1.Helper.setRuntimeVar('templateUrl', helper_1.Helper.getGlobalVar('route') + 'entities/entity-email/edit/' + parentId);
	var entity_email_popup_module_1 = __webpack_require__(80);
	// EntityWebpage
	helper_1.Helper.setRuntimeVar('templateUrl', helper_1.Helper.getGlobalVar('route') + 'entities/entity-webpage/edit/' + parentId);
	var entity_webpage_popup_module_1 = __webpack_require__(82);
	// Restore last templateUrl
	helper_1.Helper.setRuntimeVar('templateUrl', tmpTemplateUrl);
	/* /Import dependencies */
	var ContactsComponent = (function (_super) {
	    __extends(ContactsComponent, _super);
	    function ContactsComponent(elementRef, renderer, provider, helperService, navManagerService) {
	        _super.call(this, elementRef, renderer, provider || null, helperService, navManagerService);
	        this._dependenciesData = (this._helperService.getGlobalVar('dependency') || []);
	    }
	    /**
	     * Get navigation data (needed data to lazy load container)
	     * @param index (index to load)
	     * @returns NavData
	     */
	    ContactsComponent.prototype.getNavData = function (index) {
	        var data = {
	            module: data_box_extension_module_1.DataBoxExtensionModule,
	            component: 'DataBoxComponent'
	        };
	        switch (index) {
	            case 0:
	                data['dataProvider'] = (this._dependenciesData['entityAddress']
	                    ? this._dependenciesData['entityAddress']['local'] : null);
	                data['urlProvider'] = (this._helperService.getGlobalVar('route')
	                    + 'entities/entity-address/conf/' + parentId);
	                break;
	            case 1:
	                data['dataProvider'] = (this._dependenciesData['entityPhone']
	                    ? this._dependenciesData['entityPhone']['local'] : null);
	                data['urlProvider'] = (this._helperService.getGlobalVar('route')
	                    + 'entities/entity-phone/conf/' + parentId);
	                break;
	            case 2:
	                data['dataProvider'] = (this._dependenciesData['entityEmail']
	                    ? this._dependenciesData['entityEmail']['local'] : null);
	                data['urlProvider'] = (this._helperService.getGlobalVar('route')
	                    + 'entities/entity-email/conf/' + parentId);
	                break;
	            case 3:
	                data['dataProvider'] = (this._dependenciesData['entityWebpage']
	                    ? this._dependenciesData['entityWebpage']['local'] : null);
	                data['urlProvider'] = (this._helperService.getGlobalVar('route')
	                    + 'entities/entity-webpage/conf/' + parentId);
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
	            data_service_1.DataService,
	            { provide: 'DataServiceProvider', useValue: this._helperService.getDataServiceProvider(data) },
	            { provide: 'Provider', useValue: this._helperService.getDataBoxProvider(data) },
	            { provide: 'DataBoxActions', useValue: this._helperService.getDataBoxActions(data) }
	        ];
	        switch (index) {
	            case 0:
	                providers.push({ provide: 'Popups', useValue: {
	                        module: entity_address_popup_module_1.EntityAddressPopupModule,
	                        component: 'EntityAddressPopupComponent',
	                        providers: [{ provide: 'Provider', useValue: this._helperService.getFormProvider(data) }]
	                    } });
	                break;
	            case 1:
	                providers.push({ provide: 'Popups', useValue: {
	                        module: entity_phone_popup_module_1.EntityPhonePopupModule,
	                        component: 'EntityPhonePopupComponent',
	                        providers: [{ provide: 'Provider', useValue: this._helperService.getFormProvider(data) }]
	                    } });
	                break;
	            case 2:
	                providers.push({ provide: 'Popups', useValue: {
	                        module: entity_email_popup_module_1.EntityEmailPopupModule,
	                        component: 'EntityEmailPopupComponent',
	                        providers: [{ provide: 'Provider', useValue: this._helperService.getFormProvider(data) }]
	                    } });
	                break;
	            case 3:
	                providers.push({ provide: 'Popups', useValue: {
	                        module: entity_webpage_popup_module_1.EntityWebpagePopupModule,
	                        component: 'EntityWebpagePopupComponent',
	                        providers: [{ provide: 'Provider', useValue: this._helperService.getFormProvider(data) }]
	                    } });
	                break;
	        }
	        return providers;
	    };
	    __decorate([
	        core_1.ViewChildren('js_lazyLoadContainer', { read: core_1.ViewContainerRef }), 
	        __metadata('design:type', core_1.QueryList)
	    ], ContactsComponent.prototype, "lazyLoadViewContainerRefQL", void 0);
	    ContactsComponent = __decorate([
	        core_1.Component({
	            selector: 'js_contacts',
	            templateUrl: helper_1.Helper.getRuntimeVar('templateUrl')
	        }),
	        __param(2, core_1.Optional()),
	        __param(2, core_1.Inject('Provider')),
	        __param(3, core_1.Inject('HelperService')), 
	        __metadata('design:paramtypes', [core_1.ElementRef, core_1.Renderer, Object, Object, nav_manager_service_1.NavManagerService])
	    ], ContactsComponent);
	    return ContactsComponent;
	}(accordion_component_1.AccordionComponent));
	exports.ContactsComponent = ContactsComponent;


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
	var helper_1 = __webpack_require__(47);
	var base_component_1 = __webpack_require__(55);
	var nav_manager_service_1 = __webpack_require__(56);
	// Reexports
	var AccordionComponent = (function (_super) {
	    __extends(AccordionComponent, _super);
	    function AccordionComponent(elementRef, renderer, provider, _helperService, _navManagerService) {
	        _super.call(this, elementRef, renderer, provider || null);
	        this._helperService = _helperService;
	        this._navManagerService = _navManagerService;
	    }
	    /**
	     * Lifecycle callback
	     */
	    AccordionComponent.prototype.ngAfterViewInit = function () {
	        // Initializes the children navigation manager service
	        this._navManagerService.init(this, this.lazyLoadViewContainerRefQL);
	    };
	    __decorate([
	        core_1.ViewChildren('js_lazyLoadContainer', { read: core_1.ViewContainerRef }), 
	        __metadata('design:type', core_1.QueryList)
	    ], AccordionComponent.prototype, "lazyLoadViewContainerRefQL", void 0);
	    AccordionComponent = __decorate([
	        core_1.Component({
	            selector: 'js_accordion',
	            templateUrl: helper_1.Helper.getRuntimeVar('templateUrl')
	        }),
	        __param(2, core_1.Optional()),
	        __param(2, core_1.Inject('Provider')),
	        __param(3, core_1.Inject('HelperService')), 
	        __metadata('design:paramtypes', [core_1.ElementRef, core_1.Renderer, Object, Object, nav_manager_service_1.NavManagerService])
	    ], AccordionComponent);
	    return AccordionComponent;
	}(base_component_1.BaseComponent));
	exports.AccordionComponent = AccordionComponent;


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
	var core_1 = __webpack_require__(3);
	var common_1 = __webpack_require__(23);
	// This module doesn't use "ReactiveFormsModule", but it needs to import this class
	// to provide "formBuilder" when inject dependencies in child modules (like form)
	var forms_1 = __webpack_require__(31);
	var ng2_bs3_modal_1 = __webpack_require__(35);
	var search_module_1 = __webpack_require__(60);
	var expander_module_1 = __webpack_require__(61);
	var search_pagination_module_1 = __webpack_require__(70);
	var data_box_component_1 = __webpack_require__(72);
	var DataBoxExtensionModule = (function () {
	    function DataBoxExtensionModule() {
	    }
	    DataBoxExtensionModule = __decorate([
	        core_1.NgModule({
	            imports: [
	                common_1.CommonModule,
	                forms_1.FormsModule,
	                forms_1.ReactiveFormsModule,
	                ng2_bs3_modal_1.Ng2Bs3ModalModule,
	                search_module_1.SearchModule,
	                search_pagination_module_1.SearchPaginationModule,
	                expander_module_1.ExpanderModule
	            ],
	            declarations: [
	                data_box_component_1.DataBoxComponent
	            ],
	            exports: [data_box_component_1.DataBoxComponent]
	        }), 
	        __metadata('design:paramtypes', [])
	    ], DataBoxExtensionModule);
	    return DataBoxExtensionModule;
	}());
	exports.DataBoxExtensionModule = DataBoxExtensionModule;


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
	var common_1 = __webpack_require__(23);
	var search_pagination_component_1 = __webpack_require__(71);
	var SearchPaginationModule = (function () {
	    function SearchPaginationModule() {
	    }
	    SearchPaginationModule = __decorate([
	        core_1.NgModule({
	            imports: [common_1.CommonModule],
	            declarations: [
	                search_pagination_component_1.SearchPaginationComponent
	            ],
	            exports: [search_pagination_component_1.SearchPaginationComponent]
	        }), 
	        __metadata('design:paramtypes', [])
	    ], SearchPaginationModule);
	    return SearchPaginationModule;
	}());
	exports.SearchPaginationModule = SearchPaginationModule;


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
	var data_service_1 = __webpack_require__(58);
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
	    SearchPaginationComponent = __decorate([
	        core_1.Component({
	            selector: 'js_searchPagination',
	            template: "\n    <div *ngIf=\"(_dataService.getProviderAttr('objects') || []).length > 0\"\n         class=\"search-pagination no-user-select\">\n        <span>{{_dataService.getProviderAttr('search')['offset'] + 1}} {{(_dataService.getProviderAttr('search')['offset'] > 0) ? 'Pages': 'Page'}} ({{(_dataService.getProviderAttr('objects') || []).length}} results)</span>\n        <a class=\"search-has-more -note\"\n           *ngIf=\"_dataService.getProviderAttr('search')['hasMore']\"\n           (click)=\"getMoreObjects($event)\"\n           href=\"#\"\n           title=\"Load more results...\">...</a>\n    </div>\n    "
	        }), 
	        __metadata('design:paramtypes', [data_service_1.DataService])
	    ], SearchPaginationComponent);
	    return SearchPaginationComponent;
	}());
	exports.SearchPaginationComponent = SearchPaginationComponent;


/***/ },
/* 72 */
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
	var actions_1 = __webpack_require__(48);
	exports.DataBoxActions = actions_1.Actions;
	var modal_service_1 = __webpack_require__(50);
	var data_service_1 = __webpack_require__(58);
	var helper_1 = __webpack_require__(47);
	var box_component_1 = __webpack_require__(73);
	// Popup Types
	exports.PopupTypes = {
	    add: 'add',
	    edit: 'edit'
	};
	// Component
	var DataBoxComponent = (function (_super) {
	    __extends(DataBoxComponent, _super);
	    function DataBoxComponent(_viewContainerRef, renderer, _dataBoxProvider, _dataService, _modalService, actions, 
	        // You can provide a popup by action:
	        // provide('Popups', {useValue: {
	        //     add: Popup,
	        //     edit: Popup
	        // }})
	        // Or a general popup for all actions:
	        // provide('Popups', {useValue: Popup})
	        _popups, // Can be a list of popups by action, or only a popup
	        // used to provide the correct injector to the popups
	        _injector) {
	        // Call parent
	        _super.call(this, _viewContainerRef.element, renderer, _dataBoxProvider);
	        this._viewContainerRef = _viewContainerRef;
	        this._dataBoxProvider = _dataBoxProvider;
	        this._dataService = _dataService;
	        this._modalService = _modalService;
	        this._popups = _popups;
	        this._injector = _injector;
	        this.checkAll = false; // Control check all action
	        this._modalService.init(this._viewContainerRef);
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
	                available: ['refresh', 'deleteAll', 'add', 'checkAll'],
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
	        this._dataService.selectObject(object).then(function (data) {
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
	        this._dataService.newObject();
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
	        this._dataService.newObject(object).then(function (data) {
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
	                _this._dataService.delete(object);
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
	     * @param object
	     */
	    DataBoxComponent.prototype.detailAction = function ($event, object) {
	        if ($event) {
	            $event.preventDefault();
	        }
	        this._dataService.detail(object);
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
	     * Refresh all objects list.
	     * @param $event
	     */
	    DataBoxComponent.prototype.refreshAction = function ($event) {
	        if ($event === void 0) { $event = null; }
	        if ($event) {
	            $event.preventDefault();
	        }
	        this._dataService.refresh();
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
	        var popup = this._popups[popupType] || this._popups;
	        var unresolvedProviders = popup.providers || [];
	        // @TODO Confirm if this continues to be necessary
	        // unresolvedProviders.push({provide: 'ParentInjector', useValue: this._injector});
	        var resolvedProviders = core_1.ReflectiveInjector.resolve(unresolvedProviders), childInjector = core_1.ReflectiveInjector.fromResolvedProviders(resolvedProviders, this._injector);
	        // Open popup
	        this._modalService.popup(popup.module, popup.component, childInjector).then(function (data) { return; }, function (errors) { console.log(errors); return; });
	        return this;
	    };
	    DataBoxComponent = __decorate([
	        core_1.Component({
	            selector: '.js_dataBox',
	            templateUrl: helper_1.Helper.getGlobalVar('route') + 'template/default/data-box'
	        }),
	        __param(2, core_1.Inject('Provider')),
	        __param(5, core_1.Inject('DataBoxActions')),
	        __param(6, core_1.Inject('Popups')), 
	        __metadata('design:paramtypes', [core_1.ViewContainerRef, core_1.Renderer, Object, data_service_1.DataService, modal_service_1.ModalService, actions_1.Actions, Object, core_1.Injector])
	    ], DataBoxComponent);
	    return DataBoxComponent;
	}(box_component_1.BoxComponent));
	exports.DataBoxComponent = DataBoxComponent;


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
	var base_component_1 = __webpack_require__(55);
	var helper_1 = __webpack_require__(47);
	/**
	 * Box (simple base box)
	 */
	var BoxComponent = (function (_super) {
	    __extends(BoxComponent, _super);
	    function BoxComponent(elementRef, renderer, _boxProvider) {
	        _super.call(this, elementRef, renderer, _boxProvider);
	        this._boxProvider = _boxProvider;
	        this._isExpanded = !this.getProviderAttr('controls')['expander'];
	    }
	    /**
	     * Expander action.
	     * @param isExpanded (value returned by the expander directive on change)
	     */
	    BoxComponent.prototype.expanderAction = function (isExpanded) {
	        this._isExpanded = isExpanded;
	    };
	    BoxComponent = __decorate([
	        core_1.Component({
	            selector: '.js_box',
	            templateUrl: helper_1.Helper.getGlobalVar('route') + 'template/box'
	        }),
	        __param(2, core_1.Inject('BoxProvider')), 
	        __metadata('design:paramtypes', [core_1.ElementRef, core_1.Renderer, Object])
	    ], BoxComponent);
	    return BoxComponent;
	}(base_component_1.BaseComponent));
	exports.BoxComponent = BoxComponent;


/***/ },
/* 74 */
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
	var common_1 = __webpack_require__(23);
	var forms_1 = __webpack_require__(31);
	var ng2_bs3_modal_1 = __webpack_require__(35);
	var entity_address_popup_component_1 = __webpack_require__(75);
	var EntityAddressPopupModule = (function () {
	    function EntityAddressPopupModule() {
	    }
	    EntityAddressPopupModule = __decorate([
	        core_1.NgModule({
	            imports: [common_1.CommonModule, forms_1.FormsModule, forms_1.ReactiveFormsModule, ng2_bs3_modal_1.Ng2Bs3ModalModule],
	            declarations: [
	                entity_address_popup_component_1.EntityAddressPopupComponent
	            ],
	            exports: [entity_address_popup_component_1.EntityAddressPopupComponent]
	        }), 
	        __metadata('design:paramtypes', [])
	    ], EntityAddressPopupModule);
	    return EntityAddressPopupModule;
	}());
	exports.EntityAddressPopupModule = EntityAddressPopupModule;


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
	var __param = (this && this.__param) || function (paramIndex, decorator) {
	    return function (target, key) { decorator(target, key, paramIndex); }
	};
	var core_1 = __webpack_require__(3);
	var forms_1 = __webpack_require__(31);
	var helper_1 = __webpack_require__(47);
	var form_popup_component_1 = __webpack_require__(76);
	var data_service_1 = __webpack_require__(58);
	var modal_service_1 = __webpack_require__(50);
	var EntityAddressPopupComponent = (function (_super) {
	    __extends(EntityAddressPopupComponent, _super);
	    function EntityAddressPopupComponent(elementRef, renderer, provider, helperService, modalService, formBuilder, dataService, parentInjector) {
	        // Call parent
	        _super.call(this, elementRef, renderer, provider, helperService, modalService, formBuilder, dataService, parentInjector);
	    }
	    EntityAddressPopupComponent = __decorate([
	        core_1.Component({
	            selector: '#js_entityAddressPopup',
	            templateUrl: helper_1.Helper.getRuntimeVar('templateUrl')
	        }),
	        __param(2, core_1.Inject('Provider')),
	        __param(3, core_1.Inject('HelperService')),
	        __param(6, core_1.Optional()),
	        __param(7, core_1.Optional()),
	        __param(7, core_1.Inject('ParentInjector')), 
	        __metadata('design:paramtypes', [core_1.ElementRef, core_1.Renderer, Object, Object, modal_service_1.ModalService, forms_1.FormBuilder, data_service_1.DataService, core_1.Injector])
	    ], EntityAddressPopupComponent);
	    return EntityAddressPopupComponent;
	}(form_popup_component_1.FormPopupComponent));
	exports.EntityAddressPopupComponent = EntityAddressPopupComponent;


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
	var ng2_bs3_modal_1 = __webpack_require__(35);
	var forms_1 = __webpack_require__(31);
	var data_service_1 = __webpack_require__(58);
	var modal_service_1 = __webpack_require__(50);
	var helper_1 = __webpack_require__(47);
	var form_component_1 = __webpack_require__(77);
	// Component
	var FormPopupComponent = (function (_super) {
	    __extends(FormPopupComponent, _super);
	    function FormPopupComponent(elementRef, renderer, provider, helperService, modalService, formBuilder, dataService, parentInjector) {
	        _super.call(this, elementRef, renderer, provider, helperService, modalService, formBuilder, dataService, parentInjector);
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
	    FormPopupComponent.prototype.save = function ($event, closePopup) {
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
	    FormPopupComponent.prototype.saveSuper = function ($event) {
	        if ($event === void 0) { $event = null; }
	        return _super.prototype.save.call(this, $event);
	    };
	    /**
	     * Cancel form.
	     * @param $event
	     */
	    FormPopupComponent.prototype.cancel = function ($event) {
	        this.close($event);
	    };
	    /**
	     * Close popup.
	     * @param $event
	     * @param data (data to return on resolve component)
	     */
	    FormPopupComponent.prototype.close = function ($event, data) {
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
	            }, function (errors) { console.log(errors); return; });
	        }
	        else {
	            this.dismissEmitter.emit(data);
	            this.popup.close();
	        }
	    };
	    /**
	     * Lifecycle callback
	     */
	    FormPopupComponent.prototype.ngAfterViewInit = function () {
	        this.$form = $(this.popup_elementRef.nativeElement).find('form');
	    };
	    __decorate([
	        core_1.ViewChild('popup'), 
	        __metadata('design:type', ng2_bs3_modal_1.ModalComponent)
	    ], FormPopupComponent.prototype, "popup", void 0);
	    __decorate([
	        core_1.ViewChild('popup', { read: core_1.ElementRef }), 
	        __metadata('design:type', core_1.ElementRef)
	    ], FormPopupComponent.prototype, "popup_elementRef", void 0);
	    FormPopupComponent = __decorate([
	        core_1.Component({
	            selector: '.js_dataBoxFormPopup',
	            templateUrl: helper_1.Helper.getRuntimeVar('templateUrl')
	        }),
	        __param(2, core_1.Inject('Provider')),
	        __param(3, core_1.Inject('HelperService')),
	        __param(6, core_1.Optional()),
	        __param(7, core_1.Optional()),
	        __param(7, core_1.Inject('ParentInjector')), 
	        __metadata('design:paramtypes', [core_1.ElementRef, core_1.Renderer, Object, Object, modal_service_1.ModalService, forms_1.FormBuilder, data_service_1.DataService, core_1.Injector])
	    ], FormPopupComponent);
	    return FormPopupComponent;
	}(form_component_1.FormComponent));
	exports.FormPopupComponent = FormPopupComponent;


/***/ },
/* 77 */
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
	var forms_1 = __webpack_require__(31);
	var data_service_1 = __webpack_require__(58);
	var modal_service_1 = __webpack_require__(50);
	var helper_1 = __webpack_require__(47);
	var base_component_1 = __webpack_require__(55);
	// FormModes
	exports.FormModes = {
	    'new': 'new',
	    'edit': 'edit'
	};
	// Component
	var FormComponent = (function (_super) {
	    __extends(FormComponent, _super);
	    function FormComponent(elementRef, renderer, provider, _helperService, _modalService, formBuilder, dataService, // It's optional, because can be provided by "ParentInjector"
	        parentInjector // parentInjector to provide the correct injector to popups
	        ) {
	        var _this = this;
	        _super.call(this, elementRef, renderer, provider);
	        this._helperService = _helperService;
	        this._modalService = _modalService;
	        this.formModes = exports.FormModes; // Used inside the view
	        this.$form = null; // Object form
	        // Get resources from parentInjector
	        if (parentInjector) {
	            this._dataService = parentInjector.get(data_service_1.DataService);
	        }
	        else {
	            this._dataService = dataService;
	        }
	        this.object = {
	            original: {},
	            form: {}
	        };
	        this.errors = {};
	        // Object change event subscription
	        this._selectedObjectSubscription = this._dataService.getSelectedObjectEmitter()
	            .subscribe(function (object) { return _this.selectedObjectChange(object); });
	        // Set object
	        this.setObject(this._dataService.getSelectedObject());
	        // Form build
	        var formControls = {}, fields = this._helperService.mergeObjects(this._dataService.getProviderAttr('fields'), this._dataService.getProviderExtraDataAttr('fields'));
	        for (var field in fields) {
	            formControls[field] = [this.object.form[field] || null];
	        }
	        this.form = formBuilder.group(formControls);
	    }
	    /**
	     * Handle selected object changes from service
	     * @param object
	     * @returns {FormComponent}
	     */
	    FormComponent.prototype.selectedObjectChange = function (object) {
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
	     * @returns {FormComponent}
	     */
	    FormComponent.prototype.confirmSetObject = function (object) {
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
	                    _this._dataService.setObject(_this.object.original);
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
	     * @returns {FormComponent}
	     */
	    FormComponent.prototype.setObject = function (object) {
	        // Update object to new selected object on service
	        this.object.original = object;
	        this.object.form = helper_1.Helper.cloneObject(this.object.original);
	        return this;
	    };
	    /**
	     * Set form field value
	     * @param field
	     * @param value
	     */
	    FormComponent.prototype.setFormFieldValue = function (field, value) {
	        if (value && (field in this.object.form)) {
	            this.object.form[field] = value;
	        }
	    };
	    /**
	     * Render field
	     * @param field
	     * @param value
	     * @returns {string}
	     */
	    FormComponent.prototype.renderField = function (field, value) {
	        return this._dataService.renderField(field, value);
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
	    FormComponent.prototype.save = function ($event, closePopup) {
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
	                that._dataService.save(data, id).then(function (object) {
	                    // Update form after save with saved object
	                    that.setObject(object);
	                    // Update service with saved object
	                    that._dataService.setObject(that.object.original);
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
	     * @returns {FormComponent}
	     */
	    FormComponent.prototype.reset = function ($event) {
	        $event.preventDefault();
	        this.confirmSetObject(this.object.original);
	        return this;
	    };
	    /**
	     * Lifecycle callback
	     */
	    FormComponent.prototype.ngAfterViewInit = function () {
	        this.$form = $(this._elementRef.nativeElement).find('form');
	    };
	    /**
	     * Lifecycle callback
	     */
	    FormComponent.prototype.ngOnDestroy = function () {
	        this._selectedObjectSubscription.unsubscribe();
	    };
	    FormComponent = __decorate([
	        core_1.Component({
	            selector: '.js_dataBoxForm',
	            templateUrl: helper_1.Helper.getRuntimeVar('templateUrl')
	        }),
	        __param(2, core_1.Inject('Provider')),
	        __param(3, core_1.Inject('HelperService')),
	        __param(6, core_1.Optional()),
	        // It's optional, because can be provided by "ParentInjector"
	        __param(7, core_1.Optional()),
	        __param(7, core_1.Inject('ParentInjector')), 
	        __metadata('design:paramtypes', [core_1.ElementRef, core_1.Renderer, Object, Object, modal_service_1.ModalService, forms_1.FormBuilder, data_service_1.DataService, core_1.Injector])
	    ], FormComponent);
	    return FormComponent;
	}(base_component_1.BaseComponent));
	exports.FormComponent = FormComponent;


/***/ },
/* 78 */
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
	var common_1 = __webpack_require__(23);
	var forms_1 = __webpack_require__(31);
	var ng2_bs3_modal_1 = __webpack_require__(35);
	var entity_phone_popup_component_1 = __webpack_require__(79);
	var EntityPhonePopupModule = (function () {
	    function EntityPhonePopupModule() {
	    }
	    EntityPhonePopupModule = __decorate([
	        core_1.NgModule({
	            imports: [common_1.CommonModule, forms_1.FormsModule, forms_1.ReactiveFormsModule, ng2_bs3_modal_1.Ng2Bs3ModalModule],
	            declarations: [
	                entity_phone_popup_component_1.EntityPhonePopupComponent
	            ],
	            exports: [entity_phone_popup_component_1.EntityPhonePopupComponent]
	        }), 
	        __metadata('design:paramtypes', [])
	    ], EntityPhonePopupModule);
	    return EntityPhonePopupModule;
	}());
	exports.EntityPhonePopupModule = EntityPhonePopupModule;


/***/ },
/* 79 */
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
	var forms_1 = __webpack_require__(31);
	var helper_1 = __webpack_require__(47);
	var form_popup_component_1 = __webpack_require__(76);
	var data_service_1 = __webpack_require__(58);
	var modal_service_1 = __webpack_require__(50);
	var EntityPhonePopupComponent = (function (_super) {
	    __extends(EntityPhonePopupComponent, _super);
	    function EntityPhonePopupComponent(elementRef, renderer, provider, helperService, modalService, formBuilder, dataService, parentInjector) {
	        // Call parents
	        _super.call(this, elementRef, renderer, provider, helperService, modalService, formBuilder, dataService, parentInjector);
	    }
	    EntityPhonePopupComponent = __decorate([
	        core_1.Component({
	            selector: '#js_entityPhonePopup',
	            templateUrl: helper_1.Helper.getRuntimeVar('templateUrl')
	        }),
	        __param(2, core_1.Inject('Provider')),
	        __param(3, core_1.Inject('HelperService')),
	        __param(6, core_1.Optional()),
	        __param(7, core_1.Optional()),
	        __param(7, core_1.Inject('ParentInjector')), 
	        __metadata('design:paramtypes', [core_1.ElementRef, core_1.Renderer, Object, Object, modal_service_1.ModalService, forms_1.FormBuilder, data_service_1.DataService, core_1.Injector])
	    ], EntityPhonePopupComponent);
	    return EntityPhonePopupComponent;
	}(form_popup_component_1.FormPopupComponent));
	exports.EntityPhonePopupComponent = EntityPhonePopupComponent;


/***/ },
/* 80 */
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
	var common_1 = __webpack_require__(23);
	var forms_1 = __webpack_require__(31);
	var ng2_bs3_modal_1 = __webpack_require__(35);
	var entity_email_popup_component_1 = __webpack_require__(81);
	var EntityEmailPopupModule = (function () {
	    function EntityEmailPopupModule() {
	    }
	    EntityEmailPopupModule = __decorate([
	        core_1.NgModule({
	            imports: [common_1.CommonModule, forms_1.FormsModule, forms_1.ReactiveFormsModule, ng2_bs3_modal_1.Ng2Bs3ModalModule],
	            declarations: [
	                entity_email_popup_component_1.EntityEmailPopupComponent
	            ],
	            exports: [entity_email_popup_component_1.EntityEmailPopupComponent]
	        }), 
	        __metadata('design:paramtypes', [])
	    ], EntityEmailPopupModule);
	    return EntityEmailPopupModule;
	}());
	exports.EntityEmailPopupModule = EntityEmailPopupModule;


/***/ },
/* 81 */
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
	var forms_1 = __webpack_require__(31);
	var helper_1 = __webpack_require__(47);
	var form_popup_component_1 = __webpack_require__(76);
	var data_service_1 = __webpack_require__(58);
	var modal_service_1 = __webpack_require__(50);
	var EntityEmailPopupComponent = (function (_super) {
	    __extends(EntityEmailPopupComponent, _super);
	    function EntityEmailPopupComponent(elementRef, renderer, provider, helperService, modalService, formBuilder, dataService, parentInjector) {
	        // Call parent
	        _super.call(this, elementRef, renderer, provider, helperService, modalService, formBuilder, dataService, parentInjector);
	    }
	    EntityEmailPopupComponent = __decorate([
	        core_1.Component({
	            selector: '#js_entityEmailPopup',
	            templateUrl: helper_1.Helper.getRuntimeVar('templateUrl')
	        }),
	        __param(2, core_1.Inject('Provider')),
	        __param(3, core_1.Inject('HelperService')),
	        __param(6, core_1.Optional()),
	        __param(7, core_1.Optional()),
	        __param(7, core_1.Inject('ParentInjector')), 
	        __metadata('design:paramtypes', [core_1.ElementRef, core_1.Renderer, Object, Object, modal_service_1.ModalService, forms_1.FormBuilder, data_service_1.DataService, core_1.Injector])
	    ], EntityEmailPopupComponent);
	    return EntityEmailPopupComponent;
	}(form_popup_component_1.FormPopupComponent));
	exports.EntityEmailPopupComponent = EntityEmailPopupComponent;


/***/ },
/* 82 */
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
	var common_1 = __webpack_require__(23);
	var forms_1 = __webpack_require__(31);
	var ng2_bs3_modal_1 = __webpack_require__(35);
	var entity_webpage_popup_component_1 = __webpack_require__(83);
	var EntityWebpagePopupModule = (function () {
	    function EntityWebpagePopupModule() {
	    }
	    EntityWebpagePopupModule = __decorate([
	        core_1.NgModule({
	            imports: [common_1.CommonModule, forms_1.FormsModule, forms_1.ReactiveFormsModule, ng2_bs3_modal_1.Ng2Bs3ModalModule],
	            declarations: [
	                entity_webpage_popup_component_1.EntityWebpagePopupComponent
	            ],
	            exports: [entity_webpage_popup_component_1.EntityWebpagePopupComponent]
	        }), 
	        __metadata('design:paramtypes', [])
	    ], EntityWebpagePopupModule);
	    return EntityWebpagePopupModule;
	}());
	exports.EntityWebpagePopupModule = EntityWebpagePopupModule;


/***/ },
/* 83 */
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
	var forms_1 = __webpack_require__(31);
	var helper_1 = __webpack_require__(47);
	var form_popup_component_1 = __webpack_require__(76);
	var data_service_1 = __webpack_require__(58);
	var modal_service_1 = __webpack_require__(50);
	var EntityWebpagePopupComponent = (function (_super) {
	    __extends(EntityWebpagePopupComponent, _super);
	    function EntityWebpagePopupComponent(elementRef, renderer, provider, helperService, modalService, formBuilder, dataService, parentInjector) {
	        // Call parent
	        _super.call(this, elementRef, renderer, provider, helperService, modalService, formBuilder, dataService, parentInjector);
	    }
	    EntityWebpagePopupComponent = __decorate([
	        core_1.Component({
	            selector: '#js_entityWebpagePopup',
	            templateUrl: helper_1.Helper.getRuntimeVar('templateUrl')
	        }),
	        __param(2, core_1.Inject('Provider')),
	        __param(3, core_1.Inject('HelperService')),
	        __param(6, core_1.Optional()),
	        __param(7, core_1.Optional()),
	        __param(7, core_1.Inject('ParentInjector')), 
	        __metadata('design:paramtypes', [core_1.ElementRef, core_1.Renderer, Object, Object, modal_service_1.ModalService, forms_1.FormBuilder, data_service_1.DataService, core_1.Injector])
	    ], EntityWebpagePopupComponent);
	    return EntityWebpagePopupComponent;
	}(form_popup_component_1.FormPopupComponent));
	exports.EntityWebpagePopupComponent = EntityWebpagePopupComponent;


/***/ },
/* 84 */
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
	var common_1 = __webpack_require__(23);
	// This module doesn't use "ReactiveFormsModule", but it needs to import this class
	// to provide "formBuilder" when inject dependencies in child modules (like form)
	var forms_1 = __webpack_require__(31);
	var ng2_bs3_modal_1 = __webpack_require__(35);
	var search_module_1 = __webpack_require__(60);
	var expander_module_1 = __webpack_require__(61);
	var search_pagination_module_1 = __webpack_require__(70);
	var note_component_1 = __webpack_require__(85);
	var NoteModule = (function () {
	    function NoteModule() {
	    }
	    NoteModule = __decorate([
	        core_1.NgModule({
	            imports: [
	                common_1.CommonModule,
	                forms_1.FormsModule,
	                forms_1.ReactiveFormsModule,
	                ng2_bs3_modal_1.Ng2Bs3ModalModule,
	                search_module_1.SearchModule,
	                search_pagination_module_1.SearchPaginationModule,
	                expander_module_1.ExpanderModule
	            ],
	            declarations: [
	                note_component_1.NoteComponent
	            ],
	            exports: [note_component_1.NoteComponent]
	        }), 
	        __metadata('design:paramtypes', [])
	    ], NoteModule);
	    return NoteModule;
	}());
	exports.NoteModule = NoteModule;


/***/ },
/* 85 */
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
	var data_service_1 = __webpack_require__(58);
	var data_box_component_1 = __webpack_require__(72);
	var modal_service_1 = __webpack_require__(50);
	var helper_1 = __webpack_require__(47);
	// Component
	var NoteComponent = (function (_super) {
	    __extends(NoteComponent, _super);
	    function NoteComponent(viewContainerRef, renderer, dataBoxProvider, dataService, modalService, actions, popups, injector) {
	        // Call parent
	        _super.call(this, viewContainerRef, renderer, dataBoxProvider, dataService, modalService, actions, popups, injector);
	        this.setActions(actions);
	    }
	    /**
	     * Set actions
	     * @param actions
	     * @returns {DataBoxNoteComponent}
	     */
	    NoteComponent.prototype.setActions = function (actions) {
	        this._actions = {
	            actions: actions,
	            head: {
	                available: ['refresh', 'add'],
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
	    NoteComponent = __decorate([
	        core_1.Component({
	            selector: '.js_dataBoxNote',
	            templateUrl: helper_1.Helper.getGlobalVar('route') + 'template/note/note'
	        }),
	        __param(2, core_1.Inject('Provider')),
	        __param(5, core_1.Inject('DataBoxActions')),
	        __param(6, core_1.Inject('Popups')), 
	        __metadata('design:paramtypes', [core_1.ViewContainerRef, core_1.Renderer, Object, data_service_1.DataService, modal_service_1.ModalService, data_box_component_1.DataBoxActions, Object, core_1.Injector])
	    ], NoteComponent);
	    return NoteComponent;
	}(data_box_component_1.DataBoxComponent));
	exports.NoteComponent = NoteComponent;


/***/ },
/* 86 */
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
	var common_1 = __webpack_require__(23);
	var forms_1 = __webpack_require__(31);
	var ng2_bs3_modal_1 = __webpack_require__(35);
	var entity_note_popup_component_1 = __webpack_require__(87);
	var EntityNotePopupModule = (function () {
	    function EntityNotePopupModule() {
	    }
	    EntityNotePopupModule = __decorate([
	        core_1.NgModule({
	            imports: [common_1.CommonModule, forms_1.FormsModule, forms_1.ReactiveFormsModule, ng2_bs3_modal_1.Ng2Bs3ModalModule],
	            declarations: [
	                entity_note_popup_component_1.EntityNotePopupComponent
	            ],
	            exports: [entity_note_popup_component_1.EntityNotePopupComponent]
	        }), 
	        __metadata('design:paramtypes', [])
	    ], EntityNotePopupModule);
	    return EntityNotePopupModule;
	}());
	exports.EntityNotePopupModule = EntityNotePopupModule;


/***/ },
/* 87 */
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
	var forms_1 = __webpack_require__(31);
	var helper_1 = __webpack_require__(47);
	var form_popup_component_1 = __webpack_require__(76);
	var data_service_1 = __webpack_require__(58);
	var modal_service_1 = __webpack_require__(50);
	var EntityNotePopupComponent = (function (_super) {
	    __extends(EntityNotePopupComponent, _super);
	    function EntityNotePopupComponent(elementRef, renderer, provider, helperService, modalService, formBuilder, dataService, parentInjector) {
	        // Call parent
	        _super.call(this, elementRef, renderer, provider, helperService, modalService, formBuilder, dataService, parentInjector);
	    }
	    EntityNotePopupComponent = __decorate([
	        core_1.Component({
	            selector: '#js_entityNotePopup',
	            templateUrl: helper_1.Helper.getRuntimeVar('templateUrl')
	        }),
	        __param(2, core_1.Inject('Provider')),
	        __param(3, core_1.Inject('HelperService')),
	        __param(6, core_1.Optional()),
	        __param(7, core_1.Optional()),
	        __param(7, core_1.Inject('ParentInjector')), 
	        __metadata('design:paramtypes', [core_1.ElementRef, core_1.Renderer, Object, Object, modal_service_1.ModalService, forms_1.FormBuilder, data_service_1.DataService, core_1.Injector])
	    ], EntityNotePopupComponent);
	    return EntityNotePopupComponent;
	}(form_popup_component_1.FormPopupComponent));
	exports.EntityNotePopupComponent = EntityNotePopupComponent;


/***/ },
/* 88 */
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
	var common_1 = __webpack_require__(23);
	var forms_1 = __webpack_require__(31);
	var search_module_1 = __webpack_require__(60);
	var expander_module_1 = __webpack_require__(61);
	var tree_view_form_component_1 = __webpack_require__(89);
	var tree_view_form_node_component_1 = __webpack_require__(91);
	var TreeViewFormModule = (function () {
	    function TreeViewFormModule() {
	    }
	    TreeViewFormModule = __decorate([
	        core_1.NgModule({
	            imports: [
	                common_1.CommonModule,
	                forms_1.FormsModule,
	                search_module_1.SearchModule,
	                expander_module_1.ExpanderModule
	            ],
	            declarations: [
	                tree_view_form_component_1.TreeViewFormComponent,
	                tree_view_form_node_component_1.TreeViewFormNodeComponent
	            ],
	            exports: [tree_view_form_component_1.TreeViewFormComponent]
	        }), 
	        __metadata('design:paramtypes', [])
	    ], TreeViewFormModule);
	    return TreeViewFormModule;
	}());
	exports.TreeViewFormModule = TreeViewFormModule;


/***/ },
/* 89 */
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
	var data_service_1 = __webpack_require__(58);
	var data_box_component_1 = __webpack_require__(72);
	var modal_service_1 = __webpack_require__(50);
	var tree_view_component_1 = __webpack_require__(90);
	var helper_ts_1 = __webpack_require__(47);
	// Component
	var TreeViewFormComponent = (function (_super) {
	    __extends(TreeViewFormComponent, _super);
	    function TreeViewFormComponent(viewContainerRef, renderer, provider, dataService, modalService, actions, popups, injector) {
	        var _this = this;
	        // Call parent
	        _super.call(this, viewContainerRef, renderer, provider, dataService, modalService, actions, popups, injector);
	        this._$form = null; // Object form
	        this.setNodes();
	        this._onObjectsChangeSubscription = this._dataService.getOnObjectsChangeEmitter()
	            .subscribe(function (objects) { return _this.setNodes(objects); });
	    }
	    /**
	     * Get nodes
	     * @param index
	     * @returns {*|null}
	     */
	    TreeViewFormComponent.prototype.getNodes = function (index) {
	        if (index === void 0) { index = null; }
	        if (index === null) {
	            return this.nodes;
	        }
	        return this.nodes[index] || null;
	    };
	    /**
	     * Set nodes
	     * @returns {TreeViewFormComponent}
	     * @param objects
	     */
	    TreeViewFormComponent.prototype.setNodes = function (objects) {
	        if (objects === void 0) { objects = null; }
	        objects = (objects ? objects : this._dataService.getProviderAttr('objects'));
	        this.nodes = {};
	        for (var objsKey in objects) {
	            this.nodes[objsKey] = [];
	            for (var objKey in objects[objsKey]) {
	                this.nodes[objsKey].push(helper_ts_1.Helper.cloneObject(objects[objsKey][objKey]));
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
	     * this._dataService.save(data).then(
	     *     data => {
	     *         // Handle object
	     *     },
	     *     errors => {
	     *         // Handle errors
	     *     }
	     * );
	     */
	    TreeViewFormComponent.prototype.save = function ($event) {
	        if ($event === void 0) { $event = null; }
	        if ($event) {
	            $event.preventDefault();
	        }
	        var that = this;
	        return new Promise(function (resolve, reject) {
	            // Current form object has changes from user?
	            if (!helper_ts_1.Helper.isEqualObject(that.nodes, that._dataService.getProviderAttr('objects'))) {
	                // Get form data
	                var formData = that._$form.serialize();
	                // Save form
	                that._dataService.save(formData).then(function (data) {
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
	    TreeViewFormComponent.prototype.reset = function ($event) {
	        var _this = this;
	        $event.preventDefault();
	        // Current form object has changes from user?
	        if (!helper_ts_1.Helper.isEqualObject(this.nodes, this._dataService.getProviderAttr('objects'))) {
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
	    TreeViewFormComponent.prototype.ngOnInit = function () {
	        this._$form = $(this._viewContainerRef.element.nativeElement).find('form');
	    };
	    /**
	     * Lifecycle callback
	     */
	    TreeViewFormComponent.prototype.ngOnDestroy = function () {
	        this._onObjectsChangeSubscription.unsubscribe();
	    };
	    TreeViewFormComponent = __decorate([
	        core_1.Component({
	            selector: '.js_treeViewForm',
	            templateUrl: helper_ts_1.Helper.getRuntimeVar('templateUrl')
	        }),
	        __param(2, core_1.Inject('Provider')),
	        __param(5, core_1.Inject('DataBoxActions')),
	        __param(6, core_1.Inject('Popups')), 
	        __metadata('design:paramtypes', [core_1.ViewContainerRef, core_1.Renderer, Object, data_service_1.DataService, modal_service_1.ModalService, data_box_component_1.DataBoxActions, Object, core_1.Injector])
	    ], TreeViewFormComponent);
	    return TreeViewFormComponent;
	}(tree_view_component_1.TreeViewComponent));
	exports.TreeViewFormComponent = TreeViewFormComponent;


/***/ },
/* 90 */
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
	var data_service_1 = __webpack_require__(58);
	var data_box_component_1 = __webpack_require__(72);
	var modal_service_1 = __webpack_require__(50);
	var helper_ts_1 = __webpack_require__(47);
	// Component
	var TreeViewComponent = (function (_super) {
	    __extends(TreeViewComponent, _super);
	    function TreeViewComponent(viewContainerRef, renderer, provider, dataService, modalService, actions, popups, injector) {
	        // Call parent
	        _super.call(this, viewContainerRef, renderer, provider, dataService, modalService, actions, popups, injector);
	        this._parentComponent = this;
	        this._expanded = {};
	    }
	    /**
	     * Get nodes
	     * @param index
	     * @returns {*|null}
	     */
	    TreeViewComponent.prototype.getNodes = function (index) {
	        if (index === void 0) { index = null; }
	        if (index === null) {
	            return this._dataService.getProviderAttr('objects');
	        }
	        return (this._dataService.getProviderAttr('objects')[index] || null);
	    };
	    /**
	     * Toggle expanded
	     * @param index
	     */
	    TreeViewComponent.prototype.toggleExpanded = function (index) {
	        this._expanded[index] = (this._expanded[index] ? false : true);
	    };
	    /**
	     * Get icon
	     * @param object
	     * @returns {any}
	     */
	    TreeViewComponent.prototype.getIcon = function (object) {
	        var iconObjField = this.getProviderAttr('iconObjField');
	        if (iconObjField && object[iconObjField]) {
	            var iconObjFieldMap = (this.getProviderAttr('iconObjFieldMap') || {});
	            return (iconObjFieldMap[object[iconObjField]] || this.getProviderAttr('iconDefault'));
	        }
	        return this.getProviderAttr('iconDefault');
	    };
	    TreeViewComponent = __decorate([
	        core_1.Component({
	            selector: '.js_treeView',
	            templateUrl: helper_ts_1.Helper.getGlobalVar('route') + 'template/default/tree-view'
	        }),
	        __param(2, core_1.Inject('Provider')),
	        __param(5, core_1.Inject('DataBoxActions')),
	        __param(6, core_1.Inject('Popups')), 
	        __metadata('design:paramtypes', [core_1.ViewContainerRef, core_1.Renderer, Object, data_service_1.DataService, modal_service_1.ModalService, data_box_component_1.DataBoxActions, Object, core_1.Injector])
	    ], TreeViewComponent);
	    return TreeViewComponent;
	}(data_box_component_1.DataBoxComponent));
	exports.TreeViewComponent = TreeViewComponent;


/***/ },
/* 91 */
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
	var tree_view_form_component_1 = __webpack_require__(89);
	// Component
	var TreeViewFormNodeComponent = (function () {
	    function TreeViewFormNodeComponent() {
	    }
	    __decorate([
	        core_1.Input(), 
	        __metadata('design:type', Object)
	    ], TreeViewFormNodeComponent.prototype, "nodes", void 0);
	    __decorate([
	        core_1.Input(), 
	        __metadata('design:type', tree_view_form_component_1.TreeViewFormComponent)
	    ], TreeViewFormNodeComponent.prototype, "parentComponent", void 0);
	    TreeViewFormNodeComponent = __decorate([
	        core_1.Component({
	            selector: 'js_treeViewFormNode',
	            template: "\n    <li *ngFor=\"let obj of nodes\">\n        <a class=\"no-user-select\"\n           (click)=\"parentComponent.toggleExpanded(obj['id'])\">\n            <i *ngIf=\"parentComponent.getNodes(obj['id'])\"\n               [ngClass]=\"['fa', (parentComponent._expanded[obj['id']] ? 'fa-angle-down' : 'fa-angle-right')]\"></i>\n            <i [ngClass]=\"['fa', parentComponent.getIcon(obj)]\"></i><span>{{obj['name']}}</span></a>\n        <div class=\"ibox-tools no-user-select\">\n            <input type=\"checkbox\" name=\"id[]\" value=\"{{ obj['id'] }}\" [(ngModel)]=\"obj['isChecked']\"/>\n        </div>\n        <ul *ngIf=\"parentComponent.getNodes(obj['id'])\"\n            [ngStyle]=\"{'display': (parentComponent._expanded[obj['id']]) ? 'block' : 'none'}\">\n            <js_treeViewFormNode [nodes]=\"parentComponent.getNodes(obj['id'])\"\n                                 [parentComponent]=\"parentComponent\"></js_treeViewFormNode>\n        </ul>\n    </li>\n    "
	        }), 
	        __metadata('design:paramtypes', [])
	    ], TreeViewFormNodeComponent);
	    return TreeViewFormNodeComponent;
	}());
	exports.TreeViewFormNodeComponent = TreeViewFormNodeComponent;


/***/ },
/* 92 */
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
	var common_1 = __webpack_require__(23);
	var search_module_1 = __webpack_require__(60);
	var search_pagination_module_1 = __webpack_require__(70);
	var expander_module_1 = __webpack_require__(61);
	var file_component_1 = __webpack_require__(93);
	var FileModule = (function () {
	    function FileModule() {
	    }
	    FileModule = __decorate([
	        core_1.NgModule({
	            imports: [
	                common_1.CommonModule,
	                search_module_1.SearchModule,
	                search_pagination_module_1.SearchPaginationModule,
	                expander_module_1.ExpanderModule
	            ],
	            declarations: [file_component_1.FileComponent],
	            exports: [file_component_1.FileComponent]
	        }), 
	        __metadata('design:paramtypes', [])
	    ], FileModule);
	    return FileModule;
	}());
	exports.FileModule = FileModule;


/***/ },
/* 93 */
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
	var data_service_1 = __webpack_require__(58);
	var data_box_component_1 = __webpack_require__(72);
	var modal_service_1 = __webpack_require__(50);
	var helper_1 = __webpack_require__(47);
	var FileComponent = (function (_super) {
	    __extends(FileComponent, _super);
	    function FileComponent(viewContainerRef, renderer, provider, dataService, modalService, actions, popups, injector, _helperService) {
	        // Call parent
	        _super.call(this, viewContainerRef, renderer, provider, dataService, modalService, actions, popups, injector);
	        this._helperService = _helperService;
	        this.setActions(actions);
	    }
	    /**
	     * Set actions
	     * @param actions
	     * @returns {FileComponent}
	     */
	    FileComponent.prototype.setActions = function (actions) {
	        this._actions = {
	            actions: actions,
	            head: {
	                available: ['refresh', 'add'],
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
	    FileComponent.prototype.getWebPath = function (path) {
	        return this._helperService.getUploadWebPath(path);
	    };
	    FileComponent = __decorate([
	        core_1.Component({
	            selector: '.js_file',
	            templateUrl: helper_1.Helper.getGlobalVar('route') + 'template/default/file-upload'
	        }),
	        __param(2, core_1.Inject('Provider')),
	        __param(5, core_1.Inject('DataBoxActions')),
	        __param(6, core_1.Inject('Popups')),
	        __param(8, core_1.Inject('HelperService')), 
	        __metadata('design:paramtypes', [core_1.ViewContainerRef, core_1.Renderer, Object, data_service_1.DataService, modal_service_1.ModalService, data_box_component_1.DataBoxActions, Object, core_1.Injector, Object])
	    ], FileComponent);
	    return FileComponent;
	}(data_box_component_1.DataBoxComponent));
	exports.FileComponent = FileComponent;


/***/ },
/* 94 */
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
	var common_1 = __webpack_require__(23);
	var forms_1 = __webpack_require__(31);
	var ng2_bs3_modal_1 = __webpack_require__(35);
	var entity_file_popup_component_1 = __webpack_require__(95);
	var EntityFilePopupModule = (function () {
	    function EntityFilePopupModule() {
	    }
	    EntityFilePopupModule = __decorate([
	        core_1.NgModule({
	            imports: [common_1.CommonModule, forms_1.FormsModule, forms_1.ReactiveFormsModule, ng2_bs3_modal_1.Ng2Bs3ModalModule],
	            declarations: [
	                entity_file_popup_component_1.EntityFilePopupComponent
	            ],
	            exports: [entity_file_popup_component_1.EntityFilePopupComponent]
	        }), 
	        __metadata('design:paramtypes', [])
	    ], EntityFilePopupModule);
	    return EntityFilePopupModule;
	}());
	exports.EntityFilePopupModule = EntityFilePopupModule;


/***/ },
/* 95 */
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
	var helper_1 = __webpack_require__(47);
	var data_service_1 = __webpack_require__(58);
	var file_upload_popup_component_1 = __webpack_require__(96);
	var EntityFilePopupComponent = (function (_super) {
	    __extends(EntityFilePopupComponent, _super);
	    function EntityFilePopupComponent(elementRef, renderer, provider, dataService, parentInjector) {
	        // Call parent
	        _super.call(this, elementRef, renderer, provider, dataService, parentInjector);
	    }
	    EntityFilePopupComponent = __decorate([
	        core_1.Component({
	            selector: '#js_entityFilePopup',
	            templateUrl: helper_1.Helper.getRuntimeVar('templateUrl')
	        }),
	        __param(2, core_1.Optional()),
	        __param(2, core_1.Inject('FileUploadProvider')),
	        __param(3, core_1.Optional()),
	        __param(4, core_1.Optional()),
	        __param(4, core_1.Inject('ParentInjector')), 
	        __metadata('design:paramtypes', [core_1.ElementRef, core_1.Renderer, Object, data_service_1.DataService, core_1.Injector])
	    ], EntityFilePopupComponent);
	    return EntityFilePopupComponent;
	}(file_upload_popup_component_1.FileUploadPopupComponent));
	exports.EntityFilePopupComponent = EntityFilePopupComponent;


/***/ },
/* 96 */
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
	var Dropzone = __webpack_require__(97);
	var core_1 = __webpack_require__(3);
	var modal_service_1 = __webpack_require__(50);
	var helper_1 = __webpack_require__(47);
	var data_service_1 = __webpack_require__(58);
	// Component
	var FileUploadPopupComponent = (function (_super) {
	    __extends(FileUploadPopupComponent, _super);
	    function FileUploadPopupComponent(elementRef, renderer, provider, _dataService, parentInjector // parentInjector to provide the correct injector to popups
	        ) {
	        _super.call(this, elementRef, renderer, (parentInjector ? parentInjector.get('FileUploadProvider') : provider));
	        this._dataService = _dataService;
	        // Get resources from parentInjector
	        if (parentInjector) {
	            this._dataService = parentInjector.get(data_service_1.DataService);
	        }
	    }
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
	        if (this._dataService) {
	            this._dataService.refresh();
	        }
	        _super.prototype.close.call(this, null, data);
	    };
	    /**
	     * Lifecycle callback
	     */
	    FileUploadPopupComponent.prototype.ngOnInit = function () {
	        var $form = $(this.popup_elementRef.nativeElement).find('form.dropzone');
	        $form.dropzone({
	            url: this.getProviderAttr('url'),
	            paramName: "form[file]"
	        });
	    };
	    FileUploadPopupComponent = __decorate([
	        core_1.Component({
	            selector: '.js_fileUploadPopup',
	            templateUrl: helper_1.Helper.getRuntimeVar('templateUrl')
	        }),
	        __param(2, core_1.Optional()),
	        __param(2, core_1.Inject('FileUploadProvider')),
	        __param(3, core_1.Optional()),
	        __param(4, core_1.Optional()),
	        __param(4, core_1.Inject('ParentInjector')), 
	        __metadata('design:paramtypes', [core_1.ElementRef, core_1.Renderer, Object, data_service_1.DataService, core_1.Injector])
	    ], FileUploadPopupComponent);
	    return FileUploadPopupComponent;
	}(modal_service_1.ModalPopup));
	exports.FileUploadPopupComponent = FileUploadPopupComponent;


/***/ },
/* 97 */
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
	
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(7)(module)))

/***/ },
/* 98 */
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
	var common_1 = __webpack_require__(23);
	var search_module_1 = __webpack_require__(60);
	var search_pagination_module_1 = __webpack_require__(70);
	var expander_module_1 = __webpack_require__(61);
	var image_slide_component_1 = __webpack_require__(99);
	var ImageSlideModule = (function () {
	    function ImageSlideModule() {
	    }
	    ImageSlideModule = __decorate([
	        core_1.NgModule({
	            imports: [
	                common_1.CommonModule,
	                search_module_1.SearchModule,
	                search_pagination_module_1.SearchPaginationModule,
	                expander_module_1.ExpanderModule
	            ],
	            declarations: [image_slide_component_1.ImageSlideComponent],
	            exports: [image_slide_component_1.ImageSlideComponent]
	        }), 
	        __metadata('design:paramtypes', [])
	    ], ImageSlideModule);
	    return ImageSlideModule;
	}());
	exports.ImageSlideModule = ImageSlideModule;


/***/ },
/* 99 */
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
	var Slide = __webpack_require__(100);
	var core_1 = __webpack_require__(3);
	var data_service_1 = __webpack_require__(58);
	var data_box_component_1 = __webpack_require__(72);
	var modal_service_1 = __webpack_require__(50);
	var image_component_1 = __webpack_require__(102);
	var helper_ts_1 = __webpack_require__(47);
	// Component
	var ImageSlideComponent = (function (_super) {
	    __extends(ImageSlideComponent, _super);
	    function ImageSlideComponent(viewContainerRef, renderer, provider, dataService, modalService, actions, popups, injector, helperService, _elementRef) {
	        // Call parent
	        _super.call(this, viewContainerRef, renderer, provider, dataService, modalService, actions, popups, injector, helperService);
	        this._elementRef = _elementRef;
	    }
	    /**
	     * Get web path
	     * @param path
	     * @returns {string}
	     */
	    ImageSlideComponent.prototype.getWebPath = function (path) {
	        return this._helperService.getUploadWebPath(path);
	    };
	    /**
	     * Run slide
	     * @param $event
	     */
	    ImageSlideComponent.prototype.runSlide = function ($event) {
	        $event.preventDefault();
	        $event = $event || window.event;
	        var target = $event.target || $event.srcElement, link = target.src ? target.parentNode : target, $links = $event.currentTarget.getElementsByClassName('js_gallery-item'), options = { index: link, event: $event };
	        Slide($links, options);
	    };
	    ImageSlideComponent = __decorate([
	        core_1.Component({
	            selector: '.js_dataBoxImageSlide',
	            templateUrl: helper_ts_1.Helper.getGlobalVar('route') + 'template/slide/image'
	        }),
	        __param(2, core_1.Inject('Provider')),
	        __param(5, core_1.Inject('DataBoxActions')),
	        __param(6, core_1.Inject('Popups')),
	        __param(8, core_1.Inject('HelperService')), 
	        __metadata('design:paramtypes', [core_1.ViewContainerRef, core_1.Renderer, Object, data_service_1.DataService, modal_service_1.ModalService, data_box_component_1.DataBoxActions, Object, core_1.Injector, Object, core_1.ElementRef])
	    ], ImageSlideComponent);
	    return ImageSlideComponent;
	}(image_component_1.ImageComponent));
	exports.ImageSlideComponent = ImageSlideComponent;


/***/ },
/* 100 */
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
	    !(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__(101)], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory), __WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ? (__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__))
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
/* 101 */
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
/* 102 */
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
	var data_service_1 = __webpack_require__(58);
	var data_box_component_1 = __webpack_require__(72);
	var modal_service_1 = __webpack_require__(50);
	var helper_1 = __webpack_require__(47);
	// Set template to Image Crop dependency
	helper_1.Helper.setRuntimeVar('templateUrl', helper_1.Helper.getGlobalVar('route') + 'entities/entity/edit-avatar');
	var image_crop_popup_module_1 = __webpack_require__(103);
	// Component
	var ImageComponent = (function (_super) {
	    __extends(ImageComponent, _super);
	    function ImageComponent(viewContainerRef, renderer, provider, dataService, modalService, actions, popups, injector, _helperService) {
	        // Call parent
	        _super.call(this, viewContainerRef, renderer, provider, dataService, modalService, actions, popups, injector);
	        this._helperService = _helperService;
	        this.setActions(actions);
	    }
	    /**
	     * Set actions
	     * @param actions
	     * @returns {ImageComponent}
	     */
	    ImageComponent.prototype.setActions = function (actions) {
	        // Specific feature (set avatar)
	        actions.setAction('avatar', {
	            icon: 'fa-user',
	            isEnabled: true,
	            class: ''
	        });
	        this._actions = {
	            actions: actions,
	            head: {
	                available: ['refresh', 'add'],
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
	    ImageComponent.prototype.getThumbnailPath = function (path) {
	        var partialPath = this._helperService.getUploadWebPath(path), firstPartialPath = partialPath.substring(0, partialPath.lastIndexOf(".")), lastPartialPath = partialPath.substring(partialPath.lastIndexOf("."), partialPath.length);
	        return (firstPartialPath + '.thumbnail-128' + lastPartialPath);
	    };
	    /**
	     * Avatar action
	     * @param $event
	     * @param object
	     */
	    ImageComponent.prototype.avatarAction = function ($event, object) {
	        if ($event) {
	            $event.preventDefault();
	        }
	        var imageCropProvider = this.getProviderExtraDataAttr('imageCrop'), resolvedProviders = core_1.ReflectiveInjector.resolve([
	            { provide: 'ImageCropProvider', useValue: {
	                    label: imageCropProvider['label'],
	                    url: imageCropProvider['ActionUrl'],
	                    path: object['path']
	                } }
	        ]), childInjector = core_1.ReflectiveInjector.fromResolvedProviders(resolvedProviders, this._injector);
	        this._modalService.popup(image_crop_popup_module_1.ImageCropPopupModule, 'ImageCropPopupComponent', childInjector).then(function (data) { return; }, function (errors) { console.log(errors); return; });
	    };
	    ImageComponent = __decorate([
	        core_1.Component({
	            selector: '.js_dataBoxImage',
	            templateUrl: helper_1.Helper.getGlobalVar('route') + 'template/default/image'
	        }),
	        __param(2, core_1.Inject('Provider')),
	        __param(5, core_1.Inject('DataBoxActions')),
	        __param(6, core_1.Inject('Popups')),
	        __param(8, core_1.Inject('HelperService')), 
	        __metadata('design:paramtypes', [core_1.ViewContainerRef, core_1.Renderer, Object, data_service_1.DataService, modal_service_1.ModalService, data_box_component_1.DataBoxActions, Object, core_1.Injector, Object])
	    ], ImageComponent);
	    return ImageComponent;
	}(data_box_component_1.DataBoxComponent));
	exports.ImageComponent = ImageComponent;


/***/ },
/* 103 */
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
	var common_1 = __webpack_require__(23);
	var ng2_bs3_modal_1 = __webpack_require__(35);
	var image_crop_popup_component_1 = __webpack_require__(104);
	var ImageCropPopupModule = (function () {
	    function ImageCropPopupModule() {
	    }
	    ImageCropPopupModule = __decorate([
	        core_1.NgModule({
	            imports: [
	                common_1.CommonModule,
	                ng2_bs3_modal_1.Ng2Bs3ModalModule
	            ],
	            declarations: [image_crop_popup_component_1.ImageCropPopupComponent],
	            exports: [image_crop_popup_component_1.ImageCropPopupComponent]
	        }), 
	        __metadata('design:paramtypes', [])
	    ], ImageCropPopupModule);
	    return ImageCropPopupModule;
	}());
	exports.ImageCropPopupModule = ImageCropPopupModule;


/***/ },
/* 104 */
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
	var helper_1 = __webpack_require__(47);
	var post_service_1 = __webpack_require__(49);
	var modal_service_1 = __webpack_require__(50);
	var ImageCropPopupComponent = (function (_super) {
	    __extends(ImageCropPopupComponent, _super);
	    function ImageCropPopupComponent(elementRef, renderer, provider, _postService, _helperService) {
	        _super.call(this, elementRef, renderer, provider);
	        this.provider = provider;
	        this._postService = _postService;
	        this._helperService = _helperService;
	    }
	    /**
	     * Get web path
	     * @returns {string}
	     */
	    ImageCropPopupComponent.prototype.getWebPath = function () {
	        return this._helperService.getUploadWebPath(this.getProviderAttr('path'));
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
	        this._$form.find('.path').val(this.getProviderAttr('path'));
	        this._$form.find('.width').val(data['width']);
	        this._$form.find('.height').val(data['height']);
	        this._$form.find('.x').val(data['x']);
	        this._$form.find('.y').val(data['y']);
	        // Get data from form
	        data = this._$form.serialize();
	        var that = this;
	        that._postService.post(that.getProviderAttr('url'), data).then(function (data) {
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
	            templateUrl: helper_1.Helper.getRuntimeVar('templateUrl')
	        }),
	        __param(2, core_1.Inject('ImageCropProvider')),
	        __param(4, core_1.Inject('HelperService')), 
	        __metadata('design:paramtypes', [core_1.ElementRef, core_1.Renderer, Object, post_service_1.PostService, Object])
	    ], ImageCropPopupComponent);
	    return ImageCropPopupComponent;
	}(modal_service_1.ModalPopup));
	exports.ImageCropPopupComponent = ImageCropPopupComponent;


/***/ },
/* 105 */
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
	var common_1 = __webpack_require__(23);
	var forms_1 = __webpack_require__(31);
	var ng2_bs3_modal_1 = __webpack_require__(35);
	var entity_image_popup_component_1 = __webpack_require__(106);
	var EntityImagePopupModule = (function () {
	    function EntityImagePopupModule() {
	    }
	    EntityImagePopupModule = __decorate([
	        core_1.NgModule({
	            imports: [common_1.CommonModule, forms_1.FormsModule, forms_1.ReactiveFormsModule, ng2_bs3_modal_1.Ng2Bs3ModalModule],
	            declarations: [
	                entity_image_popup_component_1.EntityImagePopupComponent
	            ],
	            exports: [entity_image_popup_component_1.EntityImagePopupComponent]
	        }), 
	        __metadata('design:paramtypes', [])
	    ], EntityImagePopupModule);
	    return EntityImagePopupModule;
	}());
	exports.EntityImagePopupModule = EntityImagePopupModule;


/***/ },
/* 106 */
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
	var helper_1 = __webpack_require__(47);
	var data_service_1 = __webpack_require__(58);
	var file_upload_popup_component_1 = __webpack_require__(96);
	var EntityImagePopupComponent = (function (_super) {
	    __extends(EntityImagePopupComponent, _super);
	    function EntityImagePopupComponent(elementRef, renderer, provider, dataService, parentInjector) {
	        // Call parent
	        _super.call(this, elementRef, renderer, provider, dataService, parentInjector);
	    }
	    EntityImagePopupComponent = __decorate([
	        core_1.Component({
	            selector: '#js_entityImagePopup',
	            templateUrl: helper_1.Helper.getRuntimeVar('templateUrl')
	        }),
	        __param(2, core_1.Optional()),
	        __param(2, core_1.Inject('FileUploadProvider')),
	        __param(3, core_1.Optional()),
	        __param(4, core_1.Optional()),
	        __param(4, core_1.Inject('ParentInjector')), 
	        __metadata('design:paramtypes', [core_1.ElementRef, core_1.Renderer, Object, data_service_1.DataService, core_1.Injector])
	    ], EntityImagePopupComponent);
	    return EntityImagePopupComponent;
	}(file_upload_popup_component_1.FileUploadPopupComponent));
	exports.EntityImagePopupComponent = EntityImagePopupComponent;


/***/ },
/* 107 */
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
	var common_1 = __webpack_require__(23);
	var search_module_1 = __webpack_require__(60);
	var search_pagination_module_1 = __webpack_require__(70);
	var expander_module_1 = __webpack_require__(61);
	var video_component_1 = __webpack_require__(108);
	var VideoModule = (function () {
	    function VideoModule() {
	    }
	    VideoModule = __decorate([
	        core_1.NgModule({
	            imports: [
	                common_1.CommonModule,
	                search_module_1.SearchModule,
	                search_pagination_module_1.SearchPaginationModule,
	                expander_module_1.ExpanderModule
	            ],
	            declarations: [video_component_1.VideoComponent],
	            exports: [video_component_1.VideoComponent]
	        }), 
	        __metadata('design:paramtypes', [])
	    ], VideoModule);
	    return VideoModule;
	}());
	exports.VideoModule = VideoModule;


/***/ },
/* 108 */
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
	var modal_service_1 = __webpack_require__(50);
	var data_service_1 = __webpack_require__(58);
	var data_box_component_1 = __webpack_require__(72);
	var video_player_popup_module_1 = __webpack_require__(109);
	var helper_1 = __webpack_require__(47);
	// Component
	var VideoComponent = (function (_super) {
	    __extends(VideoComponent, _super);
	    function VideoComponent(viewContainerRef, renderer, provider, dataService, modalService, actions, popups, injector, _helperService) {
	        // Call parent
	        _super.call(this, viewContainerRef, renderer, provider, dataService, modalService, actions, popups, injector);
	        this._helperService = _helperService;
	        this.setActions(actions);
	    }
	    /**
	     * Set actions
	     * @param actions
	     * @returns {VideoComponent}
	     */
	    VideoComponent.prototype.setActions = function (actions) {
	        this._actions = {
	            actions: actions,
	            head: {
	                available: ['refresh', 'add'],
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
	    VideoComponent.prototype.getWebPath = function (path) {
	        return this._helperService.getUploadWebPath(path);
	    };
	    /**
	     * Run slide
	     * @param $event
	     */
	    VideoComponent.prototype.play = function ($event, object) {
	        $event.preventDefault();
	        var resolvedProviders = core_1.ReflectiveInjector.resolve([
	            { provide: 'VideoPlayerProvider', useValue: {
	                    path: object['path'],
	                    extension: object['extension'],
	                    source: object['source']
	                } }
	        ]), childInjector = core_1.ReflectiveInjector.fromResolvedProviders(resolvedProviders, this._injector);
	        this._modalService.popup(video_player_popup_module_1.VideoPlayerPopupModule, 'VideoPlayerPopupComponent', childInjector, 'lg').then(function (data) { return; }, function (errors) { console.log(errors); return; });
	    };
	    VideoComponent = __decorate([
	        core_1.Component({
	            selector: '.js_dataBoxVideo',
	            templateUrl: helper_1.Helper.getGlobalVar('route') + 'template/default/video-upload'
	        }),
	        __param(2, core_1.Inject('Provider')),
	        __param(5, core_1.Inject('DataBoxActions')),
	        __param(6, core_1.Inject('Popups')),
	        __param(8, core_1.Inject('HelperService')), 
	        __metadata('design:paramtypes', [core_1.ViewContainerRef, core_1.Renderer, Object, data_service_1.DataService, modal_service_1.ModalService, data_box_component_1.DataBoxActions, Object, core_1.Injector, Object])
	    ], VideoComponent);
	    return VideoComponent;
	}(data_box_component_1.DataBoxComponent));
	exports.VideoComponent = VideoComponent;


/***/ },
/* 109 */
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
	var common_1 = __webpack_require__(23);
	var ng2_bs3_modal_1 = __webpack_require__(35);
	var video_player_popup_component_1 = __webpack_require__(110);
	var VideoPlayerPopupModule = (function () {
	    function VideoPlayerPopupModule() {
	    }
	    VideoPlayerPopupModule = __decorate([
	        core_1.NgModule({
	            imports: [
	                common_1.CommonModule,
	                ng2_bs3_modal_1.Ng2Bs3ModalModule
	            ],
	            declarations: [video_player_popup_component_1.VideoPlayerPopupComponent],
	            exports: [video_player_popup_component_1.VideoPlayerPopupComponent]
	        }), 
	        __metadata('design:paramtypes', [])
	    ], VideoPlayerPopupModule);
	    return VideoPlayerPopupModule;
	}());
	exports.VideoPlayerPopupModule = VideoPlayerPopupModule;


/***/ },
/* 110 */
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
	var platform_browser_1 = __webpack_require__(22);
	var modal_service_1 = __webpack_require__(50);
	var VideoPlayerPopupComponent = (function (_super) {
	    __extends(VideoPlayerPopupComponent, _super);
	    function VideoPlayerPopupComponent(elementRef, renderer, provider, domSanitizationService, _helperService) {
	        _super.call(this, elementRef, renderer, provider);
	        this._helperService = _helperService;
	        // Set url
	        switch (this.getProviderAttr('source')) {
	            case 'file':
	                this._url = domSanitizationService.bypassSecurityTrustUrl(this._helperService.getUploadWebPath(this.getProviderAttr('path')));
	                break;
	            case 'youtube':
	                this._url = domSanitizationService.bypassSecurityTrustResourceUrl('https://www.youtube.com/embed/' + this.getProviderAttr('path'));
	                break;
	            case 'vimeo':
	                this._url = domSanitizationService.bypassSecurityTrustResourceUrl('https://player.vimeo.com/video/' + this.getProviderAttr('path'));
	                break;
	        }
	    }
	    /**
	     * Get extension
	     * @returns {string}
	     */
	    VideoPlayerPopupComponent.prototype.getExtension = function () {
	        return this.getProviderAttr('extension');
	    };
	    VideoPlayerPopupComponent = __decorate([
	        core_1.Component({
	            selector: '.js_videoPlayerPopup',
	            template: "\n    <modal #popup [animation]=\"false\" [backdrop]=\"'static'\" (onDismiss)=\"close(null, false)\">\n        <div class=\"form-wrapper gray-bg\">\n            <div class=\"row\">\n                <div class=\"col-lg-12\">\n                    <div class=\"ibox float-e-margins\">\n                        <div class=\"ibox-title\">\n                            <h5>Video Player</h5>\n                            <div class=\"ibox-tools\">\n                                <a class=\"i-circle\" (click)=\"close($event, true)\"><i class=\"fa fa-times-circle\"></i></a>\n                            </div>\n                        </div>\n                        <div class=\"ibox-content video-player\">\n                            <video *ngIf=\"getProviderAttr('source') == 'file'\" controls><source [src]=\"_url\" type=\"video/{{getExtension()}}\"></video>\n                            <iframe *ngIf=\"getProviderAttr('source') == 'youtube'\" [src]=\"_url\" frameborder=\"0\" allowfullscreen></iframe>\n                            <iframe *ngIf=\"getProviderAttr('source') == 'vimeo'\" [src]=\"_url\" frameborder=\"0\" allowfullscreen></iframe>\n                        </div>\n                    </div>\n                </div>\n            </div>\n        </div>\n    </modal>\n    "
	        }),
	        __param(2, core_1.Inject('VideoPlayerProvider')),
	        __param(4, core_1.Inject('HelperService')), 
	        __metadata('design:paramtypes', [core_1.ElementRef, core_1.Renderer, Object, platform_browser_1.DomSanitizer, Object])
	    ], VideoPlayerPopupComponent);
	    return VideoPlayerPopupComponent;
	}(modal_service_1.ModalPopup));
	exports.VideoPlayerPopupComponent = VideoPlayerPopupComponent;


/***/ },
/* 111 */
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
	var common_1 = __webpack_require__(23);
	var forms_1 = __webpack_require__(31);
	var ng2_bs3_modal_1 = __webpack_require__(35);
	var entity_video_popup_component_1 = __webpack_require__(112);
	var EntityVideoPopupModule = (function () {
	    function EntityVideoPopupModule() {
	    }
	    EntityVideoPopupModule = __decorate([
	        core_1.NgModule({
	            imports: [common_1.CommonModule, forms_1.FormsModule, ng2_bs3_modal_1.Ng2Bs3ModalModule],
	            declarations: [
	                entity_video_popup_component_1.EntityVideoPopupComponent
	            ],
	            exports: [entity_video_popup_component_1.EntityVideoPopupComponent]
	        }), 
	        __metadata('design:paramtypes', [])
	    ], EntityVideoPopupModule);
	    return EntityVideoPopupModule;
	}());
	exports.EntityVideoPopupModule = EntityVideoPopupModule;


/***/ },
/* 112 */
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
	var wizard_manager_service_1 = __webpack_require__(113);
	var data_service_1 = __webpack_require__(58);
	var helper_1 = __webpack_require__(47);
	var video_upload_popup_component_1 = __webpack_require__(114);
	var EntityVideoPopupComponent = (function (_super) {
	    __extends(EntityVideoPopupComponent, _super);
	    function EntityVideoPopupComponent(elementRef, renderer, provider, wizardManagerService, dataService, parentInjector) {
	        // Call parent
	        _super.call(this, elementRef, renderer, provider, wizardManagerService, dataService, parentInjector);
	    }
	    EntityVideoPopupComponent = __decorate([
	        core_1.Component({
	            selector: '#js_entityVideoPopup',
	            templateUrl: helper_1.Helper.getGlobalVar('route') + 'template/form-popup/video-upload'
	        }),
	        __param(2, core_1.Inject('Provider')),
	        __param(4, core_1.Optional()),
	        __param(5, core_1.Optional()),
	        __param(5, core_1.Inject('ParentInjector')), 
	        __metadata('design:paramtypes', [core_1.ElementRef, core_1.Renderer, Object, wizard_manager_service_1.WizardManagerService, data_service_1.DataService, core_1.Injector])
	    ], EntityVideoPopupComponent);
	    return EntityVideoPopupComponent;
	}(video_upload_popup_component_1.VideoUploadPopupComponent));
	exports.EntityVideoPopupComponent = EntityVideoPopupComponent;


/***/ },
/* 113 */
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
	// Reexports
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
	     * Next action.
	     * @param $event
	     */
	    WizardManagerService.prototype.nextAction = function ($event) {
	        if ($event === void 0) { $event = null; }
	        if ($event) {
	            $event.preventDefault();
	        }
	        this._navManagerService.navTo(this._navManagerService.getIndex() + 1).then(function (data) { return; }, function (errors) { console.log(errors); return; });
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
	        this._navManagerService.navTo(this._navManagerService.getIndex() - 1, false).then(function (data) { return; }, function (errors) { console.log(errors); return; });
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
	        this._navManagerService.navTo(this._navManagerService.getIndex()).then(function (data) { return that._component.close(); }, function (errors) { console.log(errors); return; });
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
	        this._component.close();
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
	    WizardManagerService = __decorate([
	        core_1.Injectable(), 
	        __metadata('design:paramtypes', [nav_manager_service_1.NavManagerService])
	    ], WizardManagerService);
	    return WizardManagerService;
	}());
	exports.WizardManagerService = WizardManagerService;


/***/ },
/* 114 */
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
	var data_service_1 = __webpack_require__(58);
	var helper_1 = __webpack_require__(47);
	var wizard_manager_service_1 = __webpack_require__(113);
	var wizard_popup_component_1 = __webpack_require__(115);
	/* Import dependencies */
	// Save base templateUrl
	var baseTemplateUrl = helper_1.Helper.getRuntimeVar('templateUrl');
	// File form
	helper_1.Helper.setRuntimeVar('templateUrl', baseTemplateUrl + '/file');
	var video_upload_file_form_module_1 = __webpack_require__(116);
	// Url form (Vimeo and Youtube)
	helper_1.Helper.setRuntimeVar('templateUrl', baseTemplateUrl);
	var video_upload_url_form_module_1 = __webpack_require__(119);
	/* /Import dependencies */
	var VideoUploadPopupComponent = (function (_super) {
	    __extends(VideoUploadPopupComponent, _super);
	    function VideoUploadPopupComponent(elementRef, renderer, provider, wizardManagerService, _dataService, // It's optional, because can be provided by "ParentInjector"
	        parentInjector // parentInjector to provide the correct injector to popups
	        ) {
	        // Call parent
	        _super.call(this, elementRef, renderer, provider, wizardManagerService);
	        this._dataService = _dataService;
	        //Local variables
	        this.errors = {};
	        this._source = null;
	        this._loadedSource = null;
	        // Redefine providers if they are available as injectable from parent injector (defined at runtime),
	        // because this component can bellow at parent component with a specific injector
	        // (popup opens at root DOM element, so don't have access to real parent injector)
	        if (parentInjector) {
	            this._dataService = parentInjector.get(data_service_1.DataService);
	        }
	    }
	    /**
	     * Submit navigation (when leave one container to navigate in other one)
	     * @param index (index to validate)
	     * @returns {Promise<boolean>}
	     */
	    VideoUploadPopupComponent.prototype.submitNav = function (index) {
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
	                    that._wizardManagerService.getComponentRef(index).instance.save().then(function (data) { resolve(true); }, function (errors) { console.log(errors); reject(false); });
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
	    VideoUploadPopupComponent.prototype.getNavData = function (index) {
	        switch (index) {
	            case 1:
	                if (this._source == 'file') {
	                    return {
	                        module: video_upload_file_form_module_1.VideoUploadFileFormModule,
	                        component: 'VideoUploadFileFormComponent'
	                    };
	                }
	                else {
	                    return {
	                        module: video_upload_url_form_module_1.VideoUploadUrlFormModule,
	                        component: 'VideoUploadUrlFormComponent'
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
	    VideoUploadPopupComponent.prototype.getNavProviders = function (index, data) {
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
	    VideoUploadPopupComponent.prototype.setSource = function ($event, value) {
	        this._source = value;
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
	        if (this._dataService && (this._source == 'file')) {
	            this._dataService.refresh();
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
	        core_1.ViewChildren('js_lazyLoadContainer', { read: core_1.ViewContainerRef }), 
	        __metadata('design:type', core_1.QueryList)
	    ], VideoUploadPopupComponent.prototype, "lazyLoadViewContainerRefQL", void 0);
	    VideoUploadPopupComponent = __decorate([
	        core_1.Component({
	            selector: 'js_videoUploadPopup',
	            templateUrl: helper_1.Helper.getGlobalVar('route') + 'template/form-popup/video-upload'
	        }),
	        __param(2, core_1.Inject('WizardPopupProvider')),
	        __param(4, core_1.Optional()),
	        // It's optional, because can be provided by "ParentInjector"
	        __param(5, core_1.Optional()),
	        __param(5, core_1.Inject('ParentInjector')), 
	        __metadata('design:paramtypes', [core_1.ElementRef, core_1.Renderer, Object, wizard_manager_service_1.WizardManagerService, data_service_1.DataService, core_1.Injector])
	    ], VideoUploadPopupComponent);
	    return VideoUploadPopupComponent;
	}(wizard_popup_component_1.WizardPopupComponent));
	exports.VideoUploadPopupComponent = VideoUploadPopupComponent;


/***/ },
/* 115 */
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
	var wizard_manager_service_1 = __webpack_require__(113);
	var helper_1 = __webpack_require__(47);
	var modal_service_1 = __webpack_require__(50);
	var form_component_1 = __webpack_require__(77); // To show in label if it is in "edit" ou "add" mode
	// Reexports
	var WizardPopupComponent = (function (_super) {
	    __extends(WizardPopupComponent, _super);
	    function WizardPopupComponent(elementRef, renderer, provider, _wizardManagerService) {
	        _super.call(this, elementRef, renderer, provider);
	        this._wizardManagerService = _wizardManagerService;
	        // Local variables
	        this.formModes = form_component_1.FormModes; // To show in label if it is in "edit" ou "add" mode
	    }
	    /**
	     * Lifecycle callback
	     */
	    WizardPopupComponent.prototype.ngAfterViewInit = function () {
	        // Initializes the children navigation manager service
	        this._wizardManagerService.init(this, this.lazyLoadViewContainerRefQL);
	    };
	    __decorate([
	        core_1.ViewChild('popup'), 
	        __metadata('design:type', Object)
	    ], WizardPopupComponent.prototype, "popup", void 0);
	    __decorate([
	        core_1.ViewChild('popup', { read: core_1.ElementRef }), 
	        __metadata('design:type', core_1.ElementRef)
	    ], WizardPopupComponent.prototype, "popup_elementRef", void 0);
	    __decorate([
	        core_1.ViewChildren('js_lazyLoadContainer', { read: core_1.ViewContainerRef }), 
	        __metadata('design:type', core_1.QueryList)
	    ], WizardPopupComponent.prototype, "lazyLoadViewContainerRefQL", void 0);
	    WizardPopupComponent = __decorate([
	        core_1.Component({
	            selector: '.js_wizard',
	            templateUrl: helper_1.Helper.getRuntimeVar('templateUrl')
	        }),
	        __param(2, core_1.Inject('WizardPopupProvider')), 
	        __metadata('design:paramtypes', [core_1.ElementRef, core_1.Renderer, Object, wizard_manager_service_1.WizardManagerService])
	    ], WizardPopupComponent);
	    return WizardPopupComponent;
	}(modal_service_1.ModalPopup));
	exports.WizardPopupComponent = WizardPopupComponent;


/***/ },
/* 116 */
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
	var common_1 = __webpack_require__(23);
	var video_upload_file_form_component_1 = __webpack_require__(117);
	var VideoUploadFileFormModule = (function () {
	    function VideoUploadFileFormModule() {
	    }
	    VideoUploadFileFormModule = __decorate([
	        core_1.NgModule({
	            imports: [common_1.CommonModule],
	            declarations: [
	                video_upload_file_form_component_1.VideoUploadFileFormComponent
	            ],
	            exports: [video_upload_file_form_component_1.VideoUploadFileFormComponent]
	        }), 
	        __metadata('design:paramtypes', [])
	    ], VideoUploadFileFormModule);
	    return VideoUploadFileFormModule;
	}());
	exports.VideoUploadFileFormModule = VideoUploadFileFormModule;


/***/ },
/* 117 */
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
	var helper_1 = __webpack_require__(47);
	var file_upload_component_1 = __webpack_require__(118);
	var VideoUploadFileFormComponent = (function (_super) {
	    __extends(VideoUploadFileFormComponent, _super);
	    function VideoUploadFileFormComponent(elementRef, provider) {
	        // Call parent
	        _super.call(this, elementRef, provider);
	    }
	    VideoUploadFileFormComponent = __decorate([
	        core_1.Component({
	            selector: '#js_entityVideoFile',
	            templateUrl: helper_1.Helper.getRuntimeVar('templateUrl')
	        }),
	        __param(1, core_1.Inject('Provider')), 
	        __metadata('design:paramtypes', [core_1.ElementRef, Object])
	    ], VideoUploadFileFormComponent);
	    return VideoUploadFileFormComponent;
	}(file_upload_component_1.FileUploadComponent));
	exports.VideoUploadFileFormComponent = VideoUploadFileFormComponent;


/***/ },
/* 118 */
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
	var Dropzone = __webpack_require__(97);
	var core_1 = __webpack_require__(3);
	var helper_1 = __webpack_require__(47);
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
/* 119 */
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
	var common_1 = __webpack_require__(23);
	var forms_1 = __webpack_require__(31);
	var video_upload_url_form_component_1 = __webpack_require__(120);
	var VideoUploadUrlFormModule = (function () {
	    function VideoUploadUrlFormModule() {
	    }
	    VideoUploadUrlFormModule = __decorate([
	        core_1.NgModule({
	            imports: [common_1.CommonModule, forms_1.FormsModule, forms_1.ReactiveFormsModule],
	            declarations: [
	                video_upload_url_form_component_1.VideoUploadUrlFormComponent
	            ],
	            exports: [video_upload_url_form_component_1.VideoUploadUrlFormComponent]
	        }), 
	        __metadata('design:paramtypes', [])
	    ], VideoUploadUrlFormModule);
	    return VideoUploadUrlFormModule;
	}());
	exports.VideoUploadUrlFormModule = VideoUploadUrlFormModule;


/***/ },
/* 120 */
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
	var forms_1 = __webpack_require__(31);
	var helper_1 = __webpack_require__(47);
	var form_component_1 = __webpack_require__(77);
	var data_service_1 = __webpack_require__(58);
	var modal_service_1 = __webpack_require__(50);
	var VideoUploadUrlFormComponent = (function (_super) {
	    __extends(VideoUploadUrlFormComponent, _super);
	    function VideoUploadUrlFormComponent(elementRef, renderer, provider, helperService, modalService, formBuilder, dataService, parentInjector) {
	        // Call parent
	        _super.call(this, elementRef, renderer, provider, helperService, modalService, formBuilder, dataService, parentInjector);
	    }
	    VideoUploadUrlFormComponent = __decorate([
	        core_1.Component({
	            selector: '#js_entityVideoUrl',
	            templateUrl: helper_1.Helper.getRuntimeVar('templateUrl')
	        }),
	        __param(2, core_1.Inject('Provider')),
	        __param(3, core_1.Inject('HelperService')),
	        __param(6, core_1.Optional()),
	        __param(7, core_1.Optional()),
	        __param(7, core_1.Inject('ParentInjector')), 
	        __metadata('design:paramtypes', [core_1.ElementRef, core_1.Renderer, Object, Object, modal_service_1.ModalService, forms_1.FormBuilder, data_service_1.DataService, core_1.Injector])
	    ], VideoUploadUrlFormComponent);
	    return VideoUploadUrlFormComponent;
	}(form_component_1.FormComponent));
	exports.VideoUploadUrlFormComponent = VideoUploadUrlFormComponent;


/***/ }
]);
//# sourceMappingURL=main.js.map